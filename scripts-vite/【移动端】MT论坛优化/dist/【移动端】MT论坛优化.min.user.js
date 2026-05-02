// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@79fb4d854f1e2cdf606339b0dac18d50104e2ebe/lib/js-watermark/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
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

(function (_, H, Ee, re, ve, Ke) {
  'use strict';

  var ze=typeof GM<"u"?GM:void 0,ot=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ue=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Q=typeof GM_getValue<"u"?GM_getValue:void 0,_e=typeof GM_info<"u"?GM_info:void 0,qe=typeof GM_listValues<"u"?GM_listValues:void 0,lt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,rt=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,K=typeof GM_setValue<"u"?GM_setValue:void 0,Fe=typeof GM_setValues<"u"?GM_setValues:void 0,ct=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,mt=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,w=typeof unsafeWindow<"u"?unsafeWindow:void 0,dt=window;const Ye={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},se={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false},httpx_cookie_manager_enable:{key:"httpx-use-cookie-enable",defaultValue:false},httpx_cookie_manager_use_document_cookie:{key:"httpx-use-document-cookie",defaultValue:false}},oe={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&H.waitNodeList(e).then(i=>{i.forEach(n=>n.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),H.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(i=>{Array.isArray(i)?e=e.concat(i):e.push(i);}),Y(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Ue=="function"?Ue(t.keyName):null;return typeof e=="string"&&e?Y(e):oe.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(i=>{H.onReady(()=>{document.head.appendChild(e),i(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(i=>{e.onload=()=>{i(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let i=[document.documentElement,document.body].concat(...t||[]);return i.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){i.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(n){navigator.clipboard.readText().then(s=>{n(s);}).catch(s=>{h.error("读取剪贴板内容失败👉",s),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(n);}).catch(s=>{h.error("申请剪贴板权限失败，尝试直接读取👉",s.message??s.name??s.stack),t(n);});}function i(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!i()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,i=5e3){let n,s=i-e,l=e,o=async r=>{const c=await t(r);if(typeof c=="boolean"&&c||r){f.workerClearTimeout(n);return}if(l+=e,l>s){o(true);return}n=f.workerSetTimeout(()=>{o(false);},e);};o(false);},findParentNode(t,e,i){if(i){let n=H.closest(t,i);if(n)return n.querySelector(e)}else return H.matches(t,e)?t:H.closest(t,e)},toStr(t,e=2){const i="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(t,(s,l)=>l===void 0?i:l,e).replace(new RegExp(`"${i}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof w=="object"&&w!=null?w:window;return t.top===t.self},formatVideoDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();const e=function(i){return i<10?`0${i}`:i};if(t<60)return `0:${e(t)}`;if(t>=60&&t<3600){const i=Math.floor(t/60),n=t%60;return `${i}:${e(n)}`}else {const i=Math.floor(t/3600),n=Math.floor(t/60)%60,s=t%60;return `${i}:${e(n)}:${e(s)}`}},formatTimeStamp(t,e){if(typeof t=="number"&&t<1e12){const r=String(Date.now()).length-String(t).length;t=t*Math.pow(10,r);}let i=t,n=new Date(typeof t=="string"?t.replace(/-/g,"/"):t),l=new Date(e??Date.now()).getTime()-n.getTime(),o=Math.floor(l/(24*3600*1e3));if(o>0)o>7?i=f.formatTime(n.getTime()):i=o+"天前";else {let r=l%864e5,c=Math.floor(r/(3600*1e3));if(c>0)i=c+"小时前";else {let m=r%36e5,d=Math.floor(m/(60*1e3));if(d>0)i=d+"分钟前";else {let p=m%6e4;i=Math.round(p/1e3)+"秒前";}}}return i}},f=re.noConflict(),a=H.noConflict(),D=Ee,h=new f.Log(_e,w.console||dt.console),Me=_e?.script?.name||void 0,pt=Ee.fn.Utils.AnyTouch();h.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Ae=()=>{const e=Ee.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,i=f.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,i)};_.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const i=t.setting.content;return e==="warning"?h.warn(i):e==="error"?h.error(i):h.info(i),false},get position(){return S.getValue(se.qmsg_config_position.key,se.qmsg_config_position.defaultValue)},get maxNums(){return S.getValue(se.qmsg_config_maxnums.key,se.qmsg_config_maxnums.defaultValue)},get showReverse(){return S.getValue(se.qmsg_config_showreverse.key,se.qmsg_config_showreverse.defaultValue)},get zIndex(){return Ae()}});D.GlobalConfig.setGlobalConfig({zIndex:()=>Ae(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ut=new f.GM_Menu({GM_getValue:Q,GM_setValue:K,GM_registerMenuCommand:lt,GM_unregisterMenuCommand:ct}),U=new f.Httpx({xmlHttpRequest:mt,logDetails:false});U.interceptors.request.use(t=>t);U.interceptors.response.use(t=>t,t=>(h.error("[Httpx-HttpxRequest.response] 响应错误",{data:t}),t.type==="onabort"?_.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?_.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?_.error("请求超时",{consoleLogContent:true}):_.error("其它错误",{consoleLogContent:true}),t));w.Object.defineProperty,w.Object.keys,w.Object.values,w.Function.prototype.apply,w.Function.prototype.call,w.Element.prototype.appendChild,w.setTimeout.bind(w),w.clearTimeout.bind(w),w.setInterval.bind(w),w.clearInterval.bind(w);const Y=a.addStyle.bind(a);oe.addBlockCSS.bind(oe);const C=H.selector.bind(H),z=H.selectorAll.bind(H),$e=new f.CookieManagerService({baseCookieHandler:"GM_cookie"});$e.isSupportGM_cookie||($e.isSupportCookieStore?$e.setOptions({baseCookieHandler:"cookieStore"}):$e.setOptions({baseCookieHandler:"document.cookie"}));new f.DocumentCookieHandler;const Ce="GM_Panel",De="data-init",te="data-key",ie="data-default-value",ht="data-init-more-value",Je="data-plugin-search-config",M="data-storage-api",de={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},pe={setting:{get width(){return de.width<550?"88vw":de.width<700?"550px":"700px"},get height(){return de.height<450?"70vh":de.height<550?"450px":"550px"}},settingMiddle:{get width(){return de.width<350?"88vw":"350px"}},info:{get width(){return de.width<350?"88vw":"350px"},get height(){return de.height<250?"88vh":"250px"}}},xe={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new f.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,i;const n=(r,c)=>{if(t&&typeof t.translateCallback=="function")return t.translateCallback(r,c);if(typeof c=="object"&&c)for(const m in c)r=r.replaceAll(`{{${m}}}`,c[m]);return r},s=(r,c)=>{typeof c!="string"&&(c=oe.toStr(c));const m=new Blob([c]),d=globalThis.URL.createObjectURL(m);a.createElement("a",{href:d,download:r}).click(),f.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(d);},500);},l=()=>{const r=y=>{const g=D.alert({title:{text:n("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${n("本地导入")}</div>
            <div class="btn-control" data-mode="network">${n("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${n("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(T){T.close();}}},drag:true,mask:{enable:true},width:pe.info.width,height:pe.info.height,style:`
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
          }`}),b=g.$shadowRoot.querySelector(".btn-control[data-mode='local']"),$=g.$shadowRoot.querySelector(".btn-control[data-mode='network']"),k=g.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),E=async T=>{confirm(n("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof qe=="function"?typeof le=="function"?(qe().forEach(B=>{le(B);}),_.success(n("已清空脚本存储的配置"))):_.error(n("不支持GM_deleteValue函数，无法执行删除脚本配置")):_.error(n("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Fe=="function"?Fe(T):Object.keys(T).forEach(B=>{const F=T[B];K(B,F);}),_.success(n("配置导入完毕"));},V=T=>new Promise(async P=>{const N=f.toJSON(T);Object.keys(N).length===0?_.warning(n("解析为空配置，不导入")):await E(N),P(true);});a.on(b,"click",T=>{a.preventEvent(T),g.close();const P=a.createElement("input",{type:"file",accept:".json"});a.on(P,["propertychange","input"],()=>{if(!P.files?.length)return;const N=P.files[0],B=new FileReader;B.onload=()=>{V(B.result);},B.readAsText(N,"UTF-8");}),P.click();}),a.on($,"click",T=>{a.preventEvent(T),g.close();const P=D.prompt({title:{text:n("网络导入"),position:"center"},content:{text:"",placeholder:n("请填写URL"),focus:true},btn:{close:{enable:true,callback(F){F.close();}},ok:{text:n("导入"),callback:async F=>{const v=F.text;if(f.isNull(v)){_.error(n("请填入完整的url"));return}const x=_.loading(n("正在获取配置...")),q=await U.get(v,{allowInterceptConfig:false});if(x.close(),!q.status){h.error(q),_.error(n("获取配置失败"),{consoleLogContent:true});return}await V(q.data.responseText)&&F.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:pe.info.width,height:"auto"}),N=P.$shadowRoot.querySelector("input"),B=P.$shadowRoot.querySelector(".pops-prompt-btn-ok");a.on(N,["input","propertychange"],()=>{a.val(N)===""?a.attr(B,"disabled","true"):a.removeAttr(B,"disabled");}),a.onKeyboard(N,"keydown",(F,v,x)=>{F==="Enter"&&x.length===0&&a.val(N)!==""&&a.emit(B,"click");}),a.emit(N,"input");}),a.on(k,"click",async T=>{a.preventEvent(T),g.close();let P=await oe.getClipboardText();if(P.trim()===""){_.warning(n("获取到的剪贴板内容为空"));return}await V(P);});},c=(y=`${Me}_panel-setting-${f.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,g)=>{const b=D.alert({title:{text:n("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${n("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${n("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(E){E.close();}}},drag:true,mask:{enable:true},width:pe.info.width,height:pe.info.height,style:`
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
          }`}),$=b.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),k=b.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");a.on($,"click",E=>{a.preventEvent(E);try{s(y,g),b.close();}catch(V){_.error(V.toString(),{consoleLogContent:true});}}),a.on(k,"click",async()=>{await f.copy(g)?(_.success(n("复制成功")),b.close()):_.error(n("复制失败"));});},d=D.confirm({title:{text:n("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:n("导入"),callback(){r();}},cancel:{enable:true,text:n("导出"),callback(){c(void 0,u);}}},width:de.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),p={};if(typeof qe=="function")qe().forEach(g=>{const b=Q(g);Reflect.set(p,g,b);});else {_.warning(n("不支持函数GM_listValues，仅导出菜单配置"));const y=Q(Ce);Reflect.set(p,Ce,y);}const u=oe.toStr(p);d.value=u;},o=()=>{let r=_e?.script?.supportURL||_e?.script?.namespace;typeof r=="string"&&f.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:n("版本：{{version}}",{version:_e?.script?.version||n("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new pt(r.$asideLiElement).on("tap",function(){clearTimeout(i),i=void 0,e?(e=false,l()):(i=setTimeout(()=>{e=false,o();},200),e=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},gt={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{S.showPanel(xe.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){oe.isTopWindow()&&ut.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let i=this.$data.menuOption.findIndex(n=>n.key===e.key);i!==-1&&(this.$data.menuOption[i]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Oe{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e;}handlerResult(e,i){const n=[],s=[];let l=[];if(Array.isArray(i))l=l.concat(i);else {const r=c=>{if(typeof c=="object"&&c!=null)if(c instanceof Element)l.push(c);else if(Array.isArray(c))r(c);else {const{$css:m,destory:d}=c;m!=null&&(Array.isArray(m)?l=l.concat(m):m instanceof Element&&l.push(m)),typeof d=="function"&&l.push(d);}else l.push(c);};r(i);}const o=r=>{if(r!=null){if(r instanceof Element){n.push(r);return}if(typeof r=="function"){s.push(r);return}}};for(const r of l){const c=o(r);if(typeof c=="boolean"&&!c)break;if(Array.isArray(r))for(const m of r){const d=o(m);if(typeof d=="boolean"&&!d)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(s));}getEnableStatus(e){return !!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1);};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){const i=this.data.destoryFnList[e];i(),this.data.destoryFnList.splice(e,1);}};checkMenuExec(){let e=false;return typeof this.option.checkExec=="function"?e=this.option.checkExec(this.option.keyList):e=this.option.keyList.every(i=>this.getEnableStatus(i)),e}}class ft{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e=="string"){const i=e.trim();if(i=="")throw new Error("key can not be empty string");this.storageKey=i;}else throw new TypeError("key must be a string");this.listenerData=new re.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){const i=this.callbacks[e];i(),this.callbacks.splice(e,1);}}getLocalValue(){if(this.cacheData==null){let e=Q(this.storageKey);e==null&&(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;const i=ot(this.storageKey,(n,s,l)=>{this.cacheData=null,this.cacheData=l;});return this.callbacks.push(()=>{rt(i);}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,K(this.storageKey,e);}set(e,i){const n=this.get(e),s=this.getLocalValue();Reflect.set(s,e,i),this.setLocalValue(s),this.emitValueChangeListener(e,i,n);}get(e,i){const n=this.getLocalValue();return Reflect.get(n,e)??i}getAll(){return this.getLocalValue()}delete(e){const i=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,i);}has(e){const i=this.getLocalValue();return Reflect.has(i,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(i=>Reflect.get(e,i))}clear(){this.destory(),le(this.storageKey);}addValueChangeListener(e,i){const n=Math.random(),s=this.listenerData.get(e)||[];return s.push({id:n,key:e,callback:i}),this.listenerData.set(e,s),n}removeValueChangeListener(e){let i=false;for(const[n,s]of this.listenerData.entries()){for(let l=0;l<s.length;l++){const o=s[l];(typeof e=="string"&&o.key===e||typeof e=="number"&&o.id===e)&&(s.splice(l,1),l--,i=true);}this.listenerData.set(n,s);}return i}async emitValueChangeListener(...e){const[i,n,s]=e;if(!this.listenerData.has(i))return;const l=this.listenerData.get(i);for(let o=0;o<l.length;o++){const r=l[o];if(typeof r.callback=="function"){let c,m;e.length===1||(e.length===2?c=n:e.length===3&&(c=n,m=s)),await r.callback(i,c,m);}}}}const me=new ft(Ce),S={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new f.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new f.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new f.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new f.Dictionary),this.__onceExecData},get scriptName(){return Me},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:Ce,attributeKeyName:te,attributeDefaultValueName:ie},init(){this.initContentDefaultValue(),gt.init();},initContentDefaultValue(){const t=n=>{if(!n.attributes||n.type==="button"||n.type==="container"||n.type==="deepMenu")return;const s=n.attributes,l=s[De];if(typeof l=="function"){const m=l();if(typeof m=="boolean"&&!m)return}const o=new Map,r=s[te];if(r!=null){const m=s[ie];o.set(r,m);}const c=s[ht];if(typeof c=="object"&&c&&Object.keys(c).forEach(m=>{const d=c[m];o.set(m,d);}),!o.size){h.warn("请先配置键",n);return}if(n.type==="switch"){const m=typeof n.disabled=="function"?n.disabled():n.disabled;typeof m=="boolean"&&m&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[m,d]of o.entries())this.setDefaultValue(m,d);},e=n=>{for(let s=0;s<n.length;s++){const l=n[s];t(l);const o=l.views;o&&Array.isArray(o)&&e(o);}},i=[...xe.getAllContentConfig()];for(let n=0;n<i.length;n++){const s=i[n];if(!s.views)continue;const l=s.views;l&&Array.isArray(l)&&e(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&h.warn("该key已存在，初始化默认值失败: ",{key:t,initValue:this.$data.contentConfigInitDefaultValue.get(t)}),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){me.set(t,e);},getValue(t,e){const i=me.get(t);return i??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){me.delete(t);},hasKey(t){return me.has(t)},addValueChangeListener(t,e,i){const n=me.addValueChangeListener(t,e);if(i?.immediate||i?.immediateAll){const s=this.getValue(t);i?.immediate?e(t,s,s):i?.immediateAll&&S.emitMenuValueChange(t,s,s);}return n},removeValueChangeListener(t){me.removeValueChangeListener(t);},emitMenuValueChange(t,e,i){me.emitValueChangeListener(t,e,i);},async exec(t,e,i,n=true){let s;typeof t=="string"||Array.isArray(t)?s=()=>t:s=t;let l=false;const o=s();let r=[];Array.isArray(o)?(l=true,r=o):r.push(o);const c=r.find(g=>!this.$data.contentConfigInitDefaultValue.has(g));if(c){h.warn(`${c} 键不存在`);return}const m=JSON.stringify(r);if(n&&this.$data.onceExecMenuData.has(m))return this.$data.onceExecMenuData.get(m);const d=[],p=new Oe({keyList:r,getValue:g=>!!this.getValue(g),checkExec(g){let b=false;return typeof i=="function"?b=i(g):b=g.every($=>this.getValue($)),b}}),u=async g=>{const b=p.checkMenuExec();let $=[];if(b){const k=r.map(E=>this.getValue(E));$=await e({key:r,triggerKey:g?.key,value:l?k:k[0],addStoreValue:(...E)=>p.handlerResult(b,E)});}p.handlerResult(b,$);};n&&r.forEach(g=>{const b=this.addValueChangeListener(g,($,k,E)=>u({key:$}));d.push(b);}),await u();const y={checkMenuExec:p.checkMenuExec.bind(p),keyList:r,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),u();},clear(){p.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreNodeList:p.clearStoreNodeList.bind(p),execDestoryFnAndClear:p.execDestoryFnAndClear.bind(p),removeValueChangeListener:()=>{d.forEach(g=>{this.removeValueChangeListener(g);});},clearOnceExecMenuData(){n&&S.$data.onceExecMenuData.delete(m);}};return this.$data.onceExecMenuData.set(m,y),y},async execMenu(t,e,i=false,n=false){return await this.exec(t,async(...s)=>await e(...s),s=>s.every(o=>{let r=!!this.getValue(o);return S.$data.contentConfigInitDisabledKeys.includes(o)&&(r=false,h.warn(`.execMenu${n?"Once":""} ${o} 被禁用`)),i&&(r=!r),r}),n)},async execMenuOnce(t,e,i=false,n=false){const s=await this.execMenu(t,e,i,true);if(n&&s){const l=()=>{s.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,l);}return s},async execMoreMenu(t,e,i=false,n=false,s=false){const l=await Promise.all(t.map(async([d,p])=>await this.execMenu(d,(...y)=>p(...y),i,n))),o=new Oe({keyList:t.map(([d])=>d),getValue:d=>!!this.getValue(d)}),r=[],c=(d=false)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),d){for(const p of r)this.removeValueChangeListener(p);for(const p of l)p&&this.removeUrlChangeWithExecMenuOnceListener(p.keyList);}},m=()=>{const d=l.every(p=>p?p.checkMenuExec():true);if(c(false),d){const p=e();o.handlerResult(d,p);}};m();for(const d of l)if(d){const p=this.addValueChangeListener(d.keyList[0],()=>{m();});if(r.push(p),s){const u=()=>{d.reload();};this.removeUrlChangeWithExecMenuOnceListener(d.keyList),this.addUrlChangeWithExecMenuOnceListener(d.keyList,u);}}return {clear(){for(const d of l)d?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener();},execDestoryFnAndClear(){for(const d of l)d?.execDestoryFnAndClear();c(false);},removeValueChangeListener(){for(const d of l)d?.removeValueChangeListener();c(true);}}},async execMoreMenuOnce(t,e,i=false,n=false){return await this.execMoreMenu(t,e,i,true,n)},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),me.removeValueChangeListener(t)},onceExec(t,e,i=false){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||i&&(Array.isArray(t)?t:[t]).findIndex(s=>{if(!!!S.getValue(s))return  true})!==-1||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const i of e)await i(t);},showPanel(t,e=`${Me}-设置`,i=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];const s=t.findIndex(o=>(typeof o.isBottom=="function"?o.isBottom():!!o.isBottom)&&o.id==="script-version")!==-1;!i&&!s&&t.push(...xe.getDefaultBottomContentConfig());const l=D.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:o=>{o.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:o=>{o(),this.$data.$panel=null;}},width:pe.setting.width,height:pe.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=l,this.$data.panelContent=t,n||this.registerConfigSearch({$panel:l,content:t}),{$panel:l,content:t}},registerConfigSearch(t){const{$panel:e,content:i}=t,n=(y,g)=>{if(typeof t.translateCallback=="function")return t.translateCallback(y,g);if(typeof g=="object"&&g)for(const b in g)y=y.replaceAll(`{{${b}}}`,g[b]);return y},s=async(y,g)=>{if(y==null)return;const b=await g(y);return b&&typeof b.isFind=="boolean"&&b.isFind?b.data:await s(b.data,g)},l=(y,g)=>{const b=new IntersectionObserver($=>{$.forEach(k=>{k.isIntersecting&&(g?.(),b.disconnect());});},{root:null,threshold:1});b.observe(y),y.scrollIntoView({behavior:"smooth",block:"center"});},o=y=>{const g="pops-flashing";a.onAnimationend(y,()=>{y.classList.remove(g);}),y.classList.add(g);},r=y=>{if(y.type==="dblclick"&&u)return;a.preventEvent(y);const g=D.alert({title:{text:n("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${n("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:pe.settingMiddle.width,height:"auto",drag:true,style:`
					${D.config.cssText.panelCSS}

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
					${t.searchDialogStyle??""}
				`}),b=g.$shadowRoot.querySelector(".search-config-text"),$=g.$shadowRoot.querySelector(".search-result-wrapper");b.focus();const k=()=>{a.empty($);},E=T=>{const P=f.queryProperty(T,F=>F?.next?{isFind:false,data:F.next}:{isFind:true,data:F}),N=a.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${P.matchedData?.path}</div>
							<div class="search-result-item-description">${P.matchedData?.description??""}</div>
						`}),B=D.fn.PanelHandlerComponents();return a.on(N,"click",()=>{const v=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[T.index];if(!v){_.error(n("左侧项下标{{index}}不存在",{index:T.index}));return}v.scrollIntoView({behavior:"smooth",block:"center"}),v.click(),s(T.next,async x=>{if(x?.next){const q=await a.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(I=>{const A=Reflect.get(I,B.$data.nodeStoreConfigKey);return typeof A=="object"&&A!=null&&A.text===x.name}),2500);if(q)q.click();else return _.error(n("未找到对应的二级菜单")),{isFind:true,data:x};return {isFind:false,data:x.next}}else {const q=await a.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(I=>Reflect.get(I,B.$data.nodeStoreConfigKey)===x.matchedData?.formConfig),2500);if(q){l(q);const I=q.closest(".pops-panel-forms-fold[data-fold-enable]");I&&(I.querySelector(".pops-panel-forms-fold-container").click(),await f.sleep(500)),l(q,()=>{o(q);});}else _.error(n("未找到对应的菜单项"));return {isFind:true,data:x}}});}),N},V=T=>{const P=new RegExp(T,"i"),N=[],B=(v,x)=>{for(let q=0;q<v.length;q++){const I=v[q],A=I.views;if(A&&Array.isArray(A)){const W=f.deepClone(x);if(I.type==="deepMenu"){const X=f.queryProperty(W,ne=>ne?.next?{isFind:false,data:ne.next}:{isFind:true,data:ne});X.next={name:I.text};}B(A,W);}else {let W,X;if(I.type==="own"){let Z=Reflect.get(I.attributes||{},Je);Z&&(typeof Z=="function"&&(Z=Z()),typeof Z.text=="string"&&(W=Z.text),typeof Z.desc=="string"&&(X=Z.desc));}else W=I.text,X=Reflect.get(I,"description");const ne=[W,X],we=ne.findIndex(Z=>{if(typeof Z=="string")return Z.match(P)});if(we!==-1){const Z=f.deepClone(x),Ne=f.queryProperty(Z,ce=>ce?.next?{isFind:false,data:ce.next}:{isFind:true,data:ce});Ne.next={name:W,matchedData:{path:"",formConfig:I,matchedText:ne[we],description:X}};const Be=[];f.queryProperty(Z,ce=>{const Ie=ce?.name;return typeof Ie=="string"&&Ie.trim()!==""&&Be.push(Ie),ce?.next?{isFind:false,data:ce.next}:{isFind:true,data:ce}});const at=Be.join(oe.escapeHtml(" - "));Ne.next.matchedData.path=at,N.push(Z);}}}};for(let v=0;v<i.length;v++){const x=i[v];if(!x.views||x.isBottom&&x.id==="script-version")continue;const q=x.views;if(q&&Array.isArray(q)){let I=x.title;typeof I=="function"&&(I=I()),B(q,{index:v,name:I});}}const F=document.createDocumentFragment();for(const v of N){const x=E(v);F.appendChild(x);}k(),$.append(F);};a.on(b,"input",f.debounce(T=>{a.preventEvent(T);const P=a.val(b).trim();if(P===""){k();return}V(P);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(y=>{a.on(y,"dblclick",r);});const m=new WeakMap;let d=false,p,u=false;a.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(y,g)=>{u=true,clearTimeout(p),p=void 0,d&&m.has(g)?(d=false,m.delete(g),r(y)):(p=setTimeout(()=>{d=false;},200),d=true,m.set(g,y));},{capture:true}),e.$shadowRoot.appendChild(a.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t))if(t.length>1){const e=t.sort();return JSON.stringify(e)}else return t[0];else return t},getDynamicValue(t,e){let i=false,n=e;const s=this.addValueChangeListener(t,(l,o)=>{n=o;});return {get value(){return i||(i=true,n=S.getValue(t,e)),n},destory(){S.removeValueChangeListener(s);}}}};class bt{$data={get enable(){return S.getValue(se.httpx_cookie_manager_enable.key,se.httpx_cookie_manager_enable.defaultValue)},get useDocumentCookie(){return S.getValue(se.httpx_cookie_manager_use_document_cookie.key,se.httpx_cookie_manager_use_document_cookie.defaultValue)},cookieRule:[]};constructor(e){Array.isArray(e)&&(this.$data.cookieRule=e);}fixCookieSplit(e){return f.isNotNull(e)&&!e.trim().endsWith(";")&&(e+=";"),e}concatCookie(e,i){return f.isNull(e)?i:(e=e.trim(),i=i.trim(),e=this.fixCookieSplit(e),i.startsWith(";")&&(i=i.substring(1)),e.concat(i))}handle(e){if(e.fetch||!this.$data.enable)return;let i="",n=e.url;n.startsWith("//")&&(n=window.location.protocol+n);let s=new URL(n);this.$data.useDocumentCookie&&s.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(i=this.concatCookie(i,document.cookie.trim()));for(let l=0;l<this.$data.cookieRule.length;l++){let o=this.$data.cookieRule[l];if(s.hostname.match(o.hostname)){let r=S.getValue(o.key);if(f.isNull(r))break;i=this.concatCookie(i,r);}}f.isNotNull(i)&&(e.headers&&e.headers.Cookie?e.headers.Cookie=this.concatCookie(e.headers.Cookie,i):e.headers.Cookie=i,h.info("Httpx => 设置cookie:",e)),e.headers&&e.headers.Cookie!=null&&f.isNull(e.headers.Cookie)&&delete e.headers.Cookie;}}oe.setGMResourceCSS(Ye.Viewer);oe.setGMResourceCSS(Ye.Hljs);const _t=new bt([{key:"httpx-cookie-bbs.binmt.cc",hostname:/bbs.binmt.cc/g}]);U.interceptors.request.use(t=>(_t.handle(t),t));D.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});_.config({isLimitWidth:true,limitWidthWrap:"wrap"});const G={registerLeftMenu(t){a.waitNode(".comiis_sidenv_box .sidenv_li .comiis_left_Touch",1e4).then(e=>{if(!e){h.error("注册左侧面板菜单失败，原因：该元素不存在");return}let i=a.createElement("li",{className:"comiis_left_Touch",innerHTML:`
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${t.name}
						</a>
						`}),n=i.querySelector(".comiis_font");typeof t.style=="string"&&(n.style.cssText=t.style),typeof t.icon=="string"&&(n.innerHTML=t.icon),typeof t.iconColor=="string"&&(n.style.color=t.iconColor),typeof t.iconSize=="string"&&(n.style.fontSize=t.iconSize),a.on(i,"click",s=>{a.preventEvent(s),typeof t.callback=="function"&&t.callback();}),a.append(e,i);});},comiisForumList:()=>document.querySelectorAll("li.forumlist_li"),comiisPostli:()=>document.querySelectorAll("div.comiis_postli.comiis_list_readimgs.nfqsqi"),comiisMmlist:()=>document.querySelectorAll(".comiis_mmlist")},yt=`.pops-confirm-content {
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
`,ee={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},O={getAvatar:(t,e="middle")=>`/uc_server/avatar.php?uid=${t}&size=${e}&ts=1`,getCurrentUID(){let t=w.discuz_uid;if(typeof t=="string")return t;let e=document.querySelector('.sidenv_exit a[href*="uid="]');if(e){let i=e.href.match(/uid=([0-9]+)/);if(i)return i[i.length-1]}},async getFormHash(){let t=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let n=0;n<t.length;n++){let l=t[n].value;if(l)return l}let e=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let n=0;n<e.length;n++){let l=e[n].href.match(ee.formhash);if(l){let o=l[l.length-1];if(o)return o}}let i=await U.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(i.status){let n=i.data.responseText,l=a.toElement(n,true,true).querySelector("input[name=formhash]");if(l){let o=l.value;if(f.isNotNull(o))return o}}else h.error("请求个人主页获取formhash失败",i);},envIsMobile(){return (w.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:t=>{let e=t.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(e){let i=e.filter(Boolean);return i[i.length-1]}},getForumId(t){let e=t.match(/&fid=([\d]+)/i);if(e)return e[e.length-1]},getPostId(t){let e=t.match(/&pid=([\d]+)/i);if(e)return e[e.length-1]},getRepquote(t){let e=t.match(/&repquote=([\d]+)/i);if(e)return e[e.length-1]}},xt={$data:{cid:""},init(){this.registerMenu();},registerMenu(){G.registerLeftMenu({name:"小黑屋",iconColor:"#000000",icon:"",callback:()=>{this.showBlackHome();}});},async showBlackHome(){let t=_.loading("正在获取小黑屋名单中..."),e=await this.getBlackListInfo("");if(t.close(),!e)return;if(e.data.length===0){_.error("获取小黑屋名单为空");return}this.$data.cid=e.next_cid;let i=D.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let r=_.loading("正在获取小黑屋名单中...");h.info("下一页的cid: ",this.$data.cid);let c=await this.getBlackListInfo(this.$data.cid);r.close(),c&&(this.$data.cid=c.next_cid,c.data.forEach(m=>{let d=this.createListViewItem(m);n.appendChild(d);}),c.data.length===0?_.error("获取小黑屋名单为空"):_.success(`成功获取 ${c.data.length}条数据`),a.emit(s,"input"));}},cancel:{text:"关闭"}},width:"88vw",height:"82vh",style:yt}),n=i.$shadowRoot.querySelector(".blackhome-user-list"),s=i.$shadowRoot.querySelector(".blackhome-user-filter input");e.data.forEach(r=>{let c=this.createListViewItem(r);n.appendChild(c);}),_.success(`成功获取 ${e.data.length}条数据`);let l=false;a.on(s,["input","propertychange"],f.debounce(()=>{let r=s.value.trim();if(!l){if(l=true,r==""){i.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.removeAttribute("style");}),l=false;return}i.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.getAttribute("data-name").match(new RegExp(r,"ig"))||c.getAttribute("data-uid").trim().match(new RegExp(r,"ig"))||c.getAttribute("data-operator").match(new RegExp(r,"ig"))?c.removeAttribute("style"):c.setAttribute("style","display:none;");}),l=false;}}));let o=await this.getBlackListInfo(this.$data.cid);o&&(this.$data.cid=o.next_cid);},async getBlackListInfo(t=""){let e={mod:"misc",action:"showdarkroom",cid:t,ajaxdata:"json"},i=await U.get(`/forum.php?${f.toSearchParamsStr(e)}`,{headers:{"User-Agent":f.getRandomPCUA()},responseType:"json"});if(!i.status)return;let n=f.toJSON(i.data.responseText),s=n.message.split("|"),l=s[s.length-1],o=f.parseObjectToArray(n.data),r=[],c=[];return o.forEach(m=>{let d=m.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let p=parseInt((Date.now()/1e3).toString()),u=0,y=m.dateline.match(/([0-9]+|半)[\s\S]*秒前/),g=m.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),b=m.dateline.match(/([0-9]+|半)[\s\S]*小时前/),$=m.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),k=m.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),E=m.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(y)y=y[y.length-1],y=y.replace(/半/g,.5),y=parseFloat(y),u=p-y;else if(g)g=g[g.length-1],g=g.replace(/半/g,.5),g=parseFloat(g),u=p-g*60;else if(b)b=b[b.length-1],b=b.replace(/半/g,.5),b=parseFloat(b),u=p-b*60*60;else if($){let V=$[1],T=$[2];u=p-86400-parseInt(V)*3600-parseInt(T)*60;}else if(k){let V=k[1],T=k[2];u=p-86400*2-parseInt(V)*3600-parseInt(T)*60;}else E&&(E=E[E.length-1],E=E.replace(/半/g,.5),E=parseFloat(E),u=p-E*60*60*24);m.time=parseInt(u.toString())*1e3,r=r.concat(m);return}else d=d[0];m.time=f.formatToTimeStamp(d),r=r.concat(m);}),f.sortListByProperty(r,"time"),f.sortListByProperty(c,"time",false),r=r.concat(c),{next_cid:l,data:r}},createListViewItem(t){let e=a.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${O.getAvatar(t.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${O.getAvatar(t.operatorid,"big")}">
                        <p>${t.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${t.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":t.username,"data-uid":t.uid,"data-operator":t.operator,"data-operator-uid":t.operatorid});return a.on(e,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");},{overrideTarget:false}),a.on(e,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${t.operatorid}&do=profile`,"_blank");},{overrideTarget:false}),e}},wt=`.pops-alert-content {
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
`,vt={$data:{},init(){this.registerMenu();},registerMenu(){G.registerLeftMenu({name:"在线用户",iconColor:"#2d92ff",icon:"",callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let t=_.loading("正在获取在线用户名单中..."),e=await this.getOnlineUserListInfo();if(t.close(),!e)return;let i=D.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${e.totalOnline} 人在线 - ${e.onlineUser} 会员${e.invisibleUser==0?"":`(${e.invisibleUser}隐身)`} - ${e.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"82vh",style:wt}),n=i.$shadowRoot.querySelector(".online-user-list"),s=i.$shadowRoot.querySelector(".online-user-filter input");e.data.forEach(o=>{let r=this.createListViewItem(o);n.appendChild(r);}),_.success(`成功获取 ${e.data.length}条数据`);let l=false;H.on(s,["propertychange","input"],f.debounce(()=>{let o=s.value.trim();if(!l){if(l=true,o==""){i.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(r=>{r.removeAttribute("style");}),l=false;return}i.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(r=>{r.getAttribute("data-name").match(new RegExp(o,"ig"))||r.getAttribute("data-sf").match(new RegExp(o,"ig"))||r.getAttribute("data-uid").match(new RegExp(o,"ig"))?r.removeAttribute("style"):r.setAttribute("style","display:none;");}),l=false;}}));},async getOnlineUserListInfo(){let t={showoldetails:"yes"},e=await U.get(`/forum.php?${f.toSearchParamsStr(t)}`,{headers:{"User-Agent":f.getRandomPCUA()}});if(!e.status)return;let i=f.parseFromString(e.data.responseText,"text/html"),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};i.querySelectorAll("#onlinelist ul li").forEach(o=>{let r=o.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],c=O.getAvatar(r,"middle"),m=o.querySelector("a").innerText,d="",p=o.querySelector("a").getAttribute("href"),u=o.querySelector("img").src;u.indexOf("online_member")!=-1?d="会员":u.indexOf("online_moderator")!=-1?d="版主":u.indexOf("online_supermod")!=-1?d="超级版主":u.indexOf("online_admin")!=-1?d="管理员":d="未知身份",n.data.push({uid:r,avatar:c,name:m,sf:d,space:p});});let l=i.querySelector("#online div.bm_h span.xs1").textContent;return n.totalOnline=f.parseInt(l.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=f.parseInt(l.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=f.parseInt(l.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=f.parseInt(l.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(t){let e=H.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${t.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${t.name}</p>
                        <span data-sf="${t.sf}">${t.sf}</span>
                        <span data-uid>UID: ${t.uid}</span>
                    </div>
                </div>
            `},{"data-name":t.name,"data-uid":t.uid,"data-sf":t.sf});return H.on(e,"click",".online-user-avatar",i=>{H.preventEvent(i),window.open(`home.php?mod=space&uid=${t.uid}&do=profile`,"_blank");},{overrideTarget:false}),e}},qt=()=>{const t="texttolink",e=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,i=function(g){let b=g.originalTarget??g.target,$;if(b!=null&&b.localName==="a"&&b.className.indexOf(t)!==-1&&($=b.getAttribute("href"),typeof $=="string"&&$.indexOf("http")!==0&&$.indexOf("ed2k://")!==0&&$.indexOf("thunder://")!==0))return b.setAttribute("href","http://"+b)},n=function(g){if(typeof g!="object"||g==null)return;const b=g?.textContent,$=g?.parentNode;if($!=null&&$?.className?.indexOf?.(t)===-1&&g.nodeName!=="#cdata-section"&&typeof b=="string"){const k=b.replace(e,`<a href="$1" target="_blank" class="${t}">$1</a>`);if(b.length!==k.length){const E=document.createElement("span");a.html(E,k);const V=E.querySelector("a"),T=V.href;return console.log(`识别: ${T}`),$.nodeName.toLowerCase()==="span"?$.replaceChild(V,g):$.replaceChild(E,g)}}},s="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),l=`//text()[not(ancestor::${s.join(") and not(ancestor::")})]`,o=new RegExp(`^(${s.join("|")})$`,"i"),r=function(g,b){let $,k;if(b+1e4<g.snapshotLength){let E=$=b;for(k=b+1e4;b<=k?$<=k:$>=k;E=b<=k?++$:--$)n(g.snapshotItem(E));setTimeout(function(){return r(g,b+1e4)},15);}else {let E;for(E=$=b,k=g.snapshotLength;b<=k?$<=k:$>=k;E=b<=k?++$:--$)n(g.snapshotItem(E));}},c=function(g){const b=document.evaluate(l,g,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return r(b,0)},m=function(g){for(const b=document.createTreeWalker(g,NodeFilter.SHOW_TEXT,{acceptNode:function($){const k=$?.parentNode?.localName;return o.test(k)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});b.nextNode();)n(b.currentNode);};let d=new f.LockFunction(g=>{for(const b of g)if(b.type==="childList"){const $=b.addedNodes;for(let k=0;k<$.length;k++){const E=$[k];m(E);}}});const p=function(){return c(document.body),f.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:b=>{d.run(b);}})},u=function(g){const b=g.getAttribute("href");if(typeof b=="string"&&b.indexOf("http")!==0&&b.indexOf("ed2k://")!==0&&b.indexOf("thunder://")!==0)return g.setAttribute("href","http://"+b)},y=function(){const g=Array.from(document.getElementsByClassName(t));for(const b of g)u(b);};document.addEventListener("mouseover",i),setTimeout(y,1500),setTimeout(p,100);},ke={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let e=this.getSignInfo().find(i=>i.hostName===window.location.hostname);return e?f.formatTime(Date.now(),"yyyyMMdd")===f.formatTime(e.time,"yyyyMMdd"):false},setSignInfo(){let t={hostName:window.location.hostname,time:Date.now()},e=this.getSignInfo(),i=e.findIndex(n=>n.hostName===t.hostName);i!==-1&&e.splice(i,1),e.push(t),K(this.$key.sign,e);},getSignInfo(){let t=Q(this.$key.sign,[]);return Array.isArray(t)?t:(this.clearSignInfo(),[])},getHostNameSignInfo(t=window.location.hostname){return this.getSignInfo().find(i=>i.hostName===t)},clearSignInfo(t){if(typeof t=="string"){let e=this.getSignInfo(),i=e.findIndex(n=>n.hostName===t);i!==-1&&e.splice(i,1),K(this.$key.sign,e);}else le(this.$key.sign);},checkLogin(){return O.envIsMobile()?!!C("a[href*='member.php?mod=logging&action=logout']"):!!C("#comiis_key")},async sign(){if(this.checkSignInfo()){h.info("今日已签到");return}let t=await O.getFormHash();if(t==null){if(C("#comiis_picshowbox")){h.info("当前为评论区的看图模式 ");return}this.clearSignInfo(window.location.hostname),_.error("自动签到：获取账号formhash失败",{consoleLogContent:true});return}let e=!!S.getValue("mt-auto-sign-useFetch"),i=f.getRandomPCUA(),n=()=>{this.setSignInfo();},s=()=>{this.clearSignInfo(window.location.hostname);},l=r=>{let m=Ee.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");m.innerText=r;},o=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let r={operation:"qiandao",format:"button",formhash:t,inajax:1,ajaxtarget:"midaben_sign"},c=await U.get(`/k_misign-sign.html?${f.toSearchParamsStr(r)}`,{fetch:e,headers:{"User-Agent":i},allowInterceptConfig:false});if(!c.status){_.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),h.info("签到信息：",c);let m=c.data.responseText,d=f.parseCDATA(m),p=a.toElement(`<div>${d}</div>`,true,false),u=a.text(p);if(u.includes("需要先登录")){_.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),s();return}else if(u.includes("请稍后再试")||u.includes("您已经被列入黑名单")||u.includes("绑定手机号后才可以签到")||u.includes("您所在用户组不允许使用")){_.error("签到："+u,{timeout:5e3});return}else if(u.includes("今日已签")||u.includes("今日已经签到")){_.info("签到："+u);return}else if(m.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){_.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(e&&"location"in f.toJSON(m)){_.success("签到: 签到成功");return}let y=p.querySelector(".con"),g=p.querySelector(".line");if(y&&g){let b=a.text(y).match(/([0-9]+)金币/),$=a.text(g).match(/([0-9]+)/),k=b[b.length-1],E=$[$.length-1];h.success(`金币${k}，排名${E}`),_.info(`
							<div style="display: flex;${O.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${E}<br>金币 ${k}</div>
							</div>`,{timeout:4e3,isHTML:true});return}l(m);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let r={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},c=await U.post(`/plugin.php?${f.toSearchParamsStr(r)}`,{data:{formhash:t,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:e,headers:{"User-Agent":i,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!c.status){_.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),h.info("签到信息：",c);let m=c.data.responseText;if(m.includes("签到成功")){_.success("签到：签到成功");return}if(m.includes("今日已经签到")){_.info("签到：您今日已经签到，请明天再来！");return}l(m);}}];for(let r=0;r<o.length;r++){const c=o[r];let m=await U.get(c.checkPluginEnableUrl,{fetch:e,headers:{"User-Agent":f.getRandomPCUA()},allowInterceptConfig:false});if(!m.status){h.error("签到：检查签到插件是否启用的请求失败",m);continue}if(a.toElement(m.data.responseText,true,true).querySelector("#messagetext")||m.data.responseText.includes("插件不存在或已关闭")){h.error(`插件：${c.checkPluginEnableUrl} 未启用或不存在`);continue}await c.sign();break}}};class Pe{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:"same"};__protocol={value:void 0,type:"same"};__host={value:void 0,type:"same",hasPort:false};__pathname={value:void 0,type:"same"};__searchParams={value:new Set};otherInstResultWithOr=false;constructor(e){typeof e=="string"&&this.href(e);}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:"same"},this}originStartsWith(e){return this.__origin={value:e,type:"startsWith"},this}originEndsWith(e){return this.__origin={value:e,type:"endsWith"},this}originIncludes(e){return this.__origin={value:e,type:"includes"},this}originMatch(e){return this.__origin={value:e,type:"match"},this}protocol(e){return this.__protocol={value:e,type:"same"},this}protocolStartsWith(e){return this.__protocol={value:e,type:"startsWith"},this}protocolEndsWith(e){return this.__protocol={value:e,type:"endsWith"},this}protocolIncludes(e){return this.__protocol={value:e,type:"includes"},this}protocolMatch(e){return this.__protocol={value:e,type:"match"},this}host(e){return this.__host={value:e,type:"same",hasPort:true},this}hostStartsWith(e){return this.__host={value:e,type:"startsWith",hasPort:true},this}hostEndsWith(e){return this.__host={value:e,type:"endsWith",hasPort:true},this}hostIncludes(e){return this.__host={value:e,type:"includes",hasPort:true},this}hostMatch(e){return this.__host={value:e,type:"match",hasPort:true},this}hostName(e){return this.__host={value:e,type:"same",hasPort:false},this}hostNameStartsWith(e){return this.__host={value:e,type:"startsWith",hasPort:false},this}hostNameEndsWith(e){return this.__host={value:e,type:"endsWith",hasPort:false},this}hostNameIncludes(e){return this.__host={value:e,type:"includes",hasPort:false},this}hostNameMatch(e){return this.__host={value:e,type:"match",hasPort:false},this}pathname(e){return this.__pathname={value:e,type:"same"},this}pathnameStartsWith(e){return this.__pathname={value:e,type:"startsWith"},this}pathnameEndsWith(e){return this.__pathname={value:e,type:"endsWith"},this}pathnameIncludes(e){return this.__pathname={value:e,type:"includes"},this}pathnameMatch(e){return this.__pathname={value:e,type:"match"},this}searchParams(e,i){return this.__searchParams.value.add({name:e,value:i}),this}search(e){return this.__searchParams.value.add({name:"",value:e,type:"same"}),this}searchStartsWith(e){return this.__searchParams.value.add({name:"",value:e,type:"startsWith"}),this}searchEndsWith(e){return this.__searchParams.value.add({name:"",value:e,type:"endsWith"}),this}searchIncludes(e){return this.__searchParams.value.add({name:"",value:e,type:"includes"}),this}searchMatch(e){return this.__searchParams.value.add({name:"",value:e,type:"match"}),this}build(){if(!this.__host.value)throw new TypeError("host or hostName should be required");const e=this.__protocol.value||"https",i=this.__host.value,n=this.__pathname.value||"/";let s=`${e}://${i}${n}`;if(this.__searchParams.value.size>0){const l=[];this.__searchParams.value.forEach(o=>{if(typeof o.name=="string"){let r="";(typeof o.value=="string"||typeof o.value=="number"||typeof o.value=="boolean")&&(r=o.value.toString()),l.push(`${encodeURIComponent(o.name)}=${encodeURIComponent(r)}`);}}),l.length&&(s+=`?${l.join("&")}`);}return s}or(e){this.otherInstResultWithOr=this.otherInstResultWithOr||this.r();const i=new Pe(e);return i.otherInstResultWithOr=this.otherInstResultWithOr,i}r(){if(this.otherInstResultWithOr)return this.otherInstResultWithOr;const e=new URL(this.__href);return [()=>{if(this.__origin.value)if(this.__origin.type==="same"){if(typeof this.__origin.value=="string")return e.origin===this.__origin.value;throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="startsWith"){if(typeof this.__origin.value=="string")return e.origin.startsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="endsWith"){if(typeof this.__origin.value=="string")return e.origin.endsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="includes"){if(typeof this.__origin.value=="string")return e.origin.includes(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="match"){if(this.__origin.value instanceof RegExp)return this.__origin.value.test(e.origin);if(typeof this.__origin.value=="string")return e.origin.match(this.__origin.value);throw new TypeError("origin value should be RegExp or string by type "+this.__origin.type)}else throw new TypeError("origin type should be same or startsWith or endsWith or includes or match");else return  true},()=>{if(this.__protocol.value)if(this.__protocol.type==="same"){if(typeof this.__protocol.value=="string")return e.protocol===this.__protocol.value;throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="startsWith"){if(typeof this.__protocol.value=="string")return e.protocol.startsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="endsWith"){if(typeof this.__protocol.value=="string")return e.protocol.endsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="includes"){if(typeof this.__protocol.value=="string")return e.protocol.includes(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="match"){if(this.__protocol.value instanceof RegExp)return this.__protocol.value.test(e.protocol);if(typeof this.__protocol.value=="string")return e.protocol.match(this.__protocol.value);throw new TypeError("protocol value should be RegExp or string by type "+this.__protocol.type)}else throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match");else return  true},()=>{if(this.__host.value){const n=this.__host.hasPort?e.host:e.hostname;if(this.__host.type==="same"){if(typeof this.__host.value=="string")return this.__host.value===n;throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="startsWith"){if(typeof this.__host.value=="string")return n.startsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="endsWith"){if(typeof this.__host.value=="string")return n.endsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="includes"){if(typeof this.__host.value=="string")return n.includes(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="match"){if(this.__host.value instanceof RegExp)return this.__host.value.test(n);if(typeof this.__host.value=="string")return n.match(this.__host.value);throw new TypeError("host value should be RegExp or string by type "+this.__host.type)}else throw new TypeError("host type should be same,startsWith,endsWith,includes,match")}else return  true},()=>{if(this.__pathname.value)if(this.__pathname.type==="same"){if(typeof this.__pathname.value=="string")return e.pathname===this.__pathname.value;throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="startsWith"){if(typeof this.__pathname.value=="string")return e.pathname.startsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="endsWith"){if(typeof this.__pathname.value=="string")return e.pathname.endsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="includes"){if(typeof this.__pathname.value=="string")return e.pathname.includes(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="match"){if(this.__pathname.value instanceof RegExp)return this.__pathname.value.test(e.pathname);if(typeof this.__pathname.value=="string")return e.pathname.match(this.__pathname.value);throw new TypeError("pathname value should be RegExp or string by type "+this.__pathname.type)}else throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match");else return  true},()=>{let n=true;const s=[];this.__searchParams.value.forEach(l=>{s.push(l);});for(let l=0;l<s.length;l++){const o=s[l];if(o.type)if(o.type==="same"){if(typeof o.value=="string"||typeof o.value=="number"||typeof o.value=="boolean")return e.search===o.value.toString();throw new TypeError("search value should be string、number、boolean by type "+o.type)}else if(o.type==="startsWith"){if(typeof o.value=="string"||typeof o.value=="number"||typeof o.value=="boolean")return e.search.startsWith(o.value.toString());throw new TypeError("search value should be string、number、boolean by type "+o.type)}else if(o.type==="endsWith"){if(typeof o.value=="string"||typeof o.value=="number"||typeof o.value=="boolean")return e.search.endsWith(o.value.toString());throw new TypeError("search value should be string、number、boolean by type "+o.type)}else if(o.type==="includes"){if(typeof o.value=="string"||typeof o.value=="number"||typeof o.value=="boolean")return e.search.includes(o.value.toString());throw new TypeError("search value should be string、number、boolean by type "+o.type)}else if(o.type==="match"){if(o.value instanceof RegExp)return o.value.test(e.search);if(typeof o.value=="string"||typeof o.value=="number"||typeof o.value=="boolean")return e.search.match(o.value.toString());throw new TypeError("search value should be RegExp、string、number、boolean by type "+o.type)}else throw new TypeError("search type should be same, startsWith, endsWith, includes, match");else if(typeof o.name=="string"){let r=o.value;if(r==null||typeof r=="string"||typeof r=="number"||typeof r=="boolean"){if(r=r?.toString(),!e.searchParams.has(o.name,r)){n=false;break}}else if(r instanceof RegExp){const c=e.searchParams.get(o.name);if(c){if(!r.test(c)){n=false;break}}else {n=false;break}}else throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined")}else if(o.name instanceof RegExp){let r,c;if(e.searchParams.forEach((m,d)=>{!r&&d.match(o.name)&&(r=d,c=m);}),r){let m=o.value;if(m!=null)if(typeof m=="string"||typeof m=="number"||typeof m=="boolean"){if(m=m.toString(),n=m===c,!n)break}else if(m instanceof RegExp)if(c){if(!m.test(c)){n=false;break}}else {n=false;break}else throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined")}else {n=false;break}}else throw new TypeError("searchParams name should be string or RegExp")}return n}].every(n=>n())}}const j={host(t,e){return j.builder(e).host(t)},hostName(t,e){return j.builder(e).hostName(t)},search(t,e){return j.builder(e).search(t)},seachParams(t,e,i){return j.builder(i).searchParams(t,e)},pathname(t,e){return j.builder(e).pathname(t)},protocol(t,e){return j.builder(e).protocol(t)},builder(t){return new Pe(t)}},R={isKMiSign(){return j.builder().pathnameStartsWith("/k_misign-sign.html").r()},isPost(){return j.builder().pathnameStartsWith("/thread-").r()||j.builder().pathnameStartsWith("/forum.php").searchParams("mod","viewthread").r()},isPage(){return j.builder().pathnameMatch(/^\/page-([0-9]+).html/g).r()},isGuide(){return j.builder().pathnameStartsWith("/forum.php").searchParams("mod","guide").r()},isPlate(){return j.builder().pathnameMatch(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g).r()},isSearch(){return j.builder().pathnameStartsWith("/search.php").r()},isSpace(){return j.builder().pathnameStartsWith("/home.php").searchParams("mod","space").r()},isMySpace(){return j.builder().pathnameStartsWith("/home.php").searchParams("mod","space").searchParams("do","profile").searchParams("mycenter").r()},isSpaceWithAt(){return j.builder().pathnameStartsWith("/space-uid-").r()},isForumList(){return j.builder().pathnameStartsWith("/forum.php").searchParams("forumlist").r()},isMessage(){return j.builder().pathnameStartsWith("/home.php").searchParams("mod","space").searchParams("do","notice").r()},isMessageList(){return j.builder().pathnameStartsWith("/home.php").searchParams("mod","space").searchParams("do","pm").r()},isPointsMall(){return j.builder().pathnameStartsWith("/keke_integralmall-keke_integralmall.html").or().pathnameStartsWith("/plugin.php").searchParams("id","keke_integralmal").r()},isPostPublish(){return j.builder().pathnameStartsWith("/forum.php").searchParams("mod","post").r()},isPostPublish_voting(){return j.builder().pathnameStartsWith("/forum.php").searchParams("special","1").or().searchParams("fid","42").r()},isPostPublish_edit(){return this.isPostPublish()&&j.seachParams("action","edit").r()},isPostPublish_newthread(){return this.isPostPublish()&&j.seachParams("action","newthread").r()},isPostPublish_reply(){return this.isPostPublish()&&j.seachParams("action","reply").r()}},$t=`#comiis_foot_menu_beautify {
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
`,He=[];class Qe{option;$data={STORAGE_KEY:"mt-image-bed-upload-history"};constructor(e){this.option=e,He.push({id:this.option.id,callback:this.option.delImageEvent.bind(this)}),this.addTab(),a.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,"click",async i=>{await this.option.uploadBtnClickEvent(i)&&C(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`).click();}),a.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,"change",async i=>{let n=i.target,s=()=>{n.value="";},l=async o=>{let r=await this.option.fileChangeEvent(i,o);s(),r.success&&r.data.forEach(c=>{this.addImage(c);let m=this.createImageBtnElement("插入",c.url);this.setImageBtnDeleteEvent(m,c),a.append(`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,m);});};if(n.files&&n.files.length){let o=n.files;if(S.getValue("mt-image-bed-watermark-enable")){let r=_.loading("处理水印中..."),c=[],m=[];await Promise.all(Array.from(n.files).map(async(d,p)=>{if(d.type==="image/gif"){let y=await f.parseFileToBase64(d);c.push(y),m.push(d);}else {_.info(`添加水印 ${p+1}/${o.length}`);var u=new window.Watermark;await u.setFile(d),u.addText({text:[S.getValue("mt-image-bed-watermark-text")],color:S.getValue("mt-image-bed-watermark-text-color"),fontSize:S.getValue("mt-image-bed-watermark-font-size"),globalAlpha:S.getValue("mt-image-bed-watermark-font-opacity"),xMoveDistance:S.getValue("mt-image-bed-watermark-left-right-margin"),yMoveDistance:S.getValue("mt-image-bed-watermark-top-bottom-margin"),rotateAngle:S.getValue("mt-image-bed-watermark-rotate")}),c.push(u.render("png")),m.push(f.parseBase64ToFile(u.render("png"),"WaterMark_"+d.name));}})),r.close(),o=m,S.getValue("mt-image-bed-watermark-autoAddWaterMark")?await l(o):D.confirm({title:{text:"水印预览",position:"center"},content:{text:`
									<div class="upload-image-water">${c.map(d=>`<img src="${d}" crossoriginNew="anonymous" loading="lazy">`).join(`
`)}
									</div>
									`,html:true},btn:{ok:{text:"继续上传",async callback(d,p){d.close(),await l(o);}},close:{callback(d,p){d.close(),s();}},cancel:{callback(d,p){d.close(),s();}}},width:"88vw",height:"80vh",style:`
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`});}else await l(o);}});}addTab(){const e=C("#comiis_pictitle_key");if(!e)return;let i=e.querySelector("a[data-type='history']"),n=`
    <li>
        <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
    </li>`;if(!i){let o=a.createElement("li");i=a.createElement("a",{href:"javascript:;",className:"comiis-picture-tab",innerHTML:"历史图片"},{"data-type":"history"}),a.on(i,"click",()=>{this.initHistoryUploadImageList();}),a.append(o,i),a.append(e,o);}a.before(i.parentElement,n);let s=C("#comiis_pictitle_tab .bqbox_t"),l=Array.from(z("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"));l||(l=a.createElement("div",{className:"comiis_upbox bg_f cl",innerHTML:'<ul class="comiis_post_imglist cl" id="imglist_history"></ul>'},{style:"display: none;"}),a.before(s,l),l=Array.from(z("#comiis_pictitle_tab .comiis_upbox")).find(o=>!!o.querySelector("#imglist_history"))),a.before(l,`
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
            `);}createImageBtnElement(e,i){return a.createElement("li",{innerHTML:`
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
      </span>`})}initHistoryUploadImageList(){let e=C("#comiis_pictitle_tab #imglist_history");e.innerHTML="";let i=document.createDocumentFragment();this.getAllImage().forEach(n=>{let s=this.createImageBtnElement(n.labelName,n.data.url);this.setHistoryImageBtnDeleteEvent(s,n),i.appendChild(s);}),e.appendChild(i);}setImageBtnDeleteEvent(e,i){let n=e.querySelector(".delImg");a.on(n,"click",async s=>{await this.option.delImageEvent(s,i)&&this.deleteImage(this.option.id,i)&&a.remove(e);});}setHistoryImageBtnDeleteEvent(e,i){let n=e.querySelector(".delImg");a.on(n,"click",async s=>{let l=He.find(r=>r.id===i.id);if(!l)return;await l.callback(s,i.data)&&this.deleteImage(i.id,i.data)&&a.remove(e);});}addImage(e){let i=Q(this.$data.STORAGE_KEY,[]);i.push({id:this.option.id,name:this.option.name,labelName:this.option.labelName,data:e}),K(this.$data.STORAGE_KEY,i);}getAllImage(){return Q(this.$data.STORAGE_KEY,[])}deleteImage(e,i){let n=this.getAllImage(),s=n.findIndex(l=>l.id===e&&JSON.stringify(l.data)===JSON.stringify(i));return s!=-1?(n.splice(s,1),K(this.$data.STORAGE_KEY,n),true):false}}const Ze={$data:{get account(){return S.getValue("mt-image-bed-hello-account")},get password(){return S.getValue("mt-image-bed-hello-password")},get token(){return S.getValue("mt-image-bed-hello-token")}},$code:{401:"未登录或授权失败",403:"管理员关闭了接口功能或没有该接口权限",429:"超出请求配额，请求受限",500:"服务端出现异常"},$config:{base_url:"https://www.helloimg.com/api/v1",TAG:"Hello图床："},$tabConfig:{id:"www.helloimg.com",name:"Hello图床",labelName:"hello"},init(){const t=this;new Qe({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(e,i){let n=[],s=_.loading("上传中..."),l=true;for(let o=0;o<Array.from(i).length;o++){const r=Array.from(i)[o];let c=await t.uploadImage(r);c?(n.push({url:c.data.links.url,data:c.data}),l=l&&true):l=l&&false;}return s.close(),{success:l,data:n}},storageSaveCallBack(e){return e.data},async delImageEvent(e,i){if(await t.checkLogin()){let s=_.loading("正在删除图片..."),l=await t.deleteImage(i.data.key)??false;return s.close(),l}else return  false}});},async checkLogin(){return this.$data.account?this.$data.password?this.$data.token?true:(_.error(`${this.$config.TAG}请先配置token`),false):(_.error(`${this.$config.TAG}请先配置密码`),false):(_.error(`${this.$config.TAG}请先配置账号`),false)},async uploadImage(t){let e=new FormData;e.append("file",t),e.append("permission","0"),e.append("strategy_id","0"),e.append("album_id","0");let i=await U.post(`${this.$config.base_url}/upload`,{data:e,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":f.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(!i.status){h.error(i),_.error(this.$config.TAG+"网络异常，上传图片失败");return}if(i.data.status in this.$code){h.error(i),_.error(this.$config.TAG+this.$code[i.data.status]);return}let n=f.toJSON(i.data.responseText);if(h.info(n),!n.status){_.error(this.$config.TAG+n.message);return}_.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(t),await new Promise(l=>{s.onload=function(){let r={imageUri:this.result,data:n.data};l(r);};})},async deleteImage(t){let e=await U.delete(this.$config.base_url+"/images/"+t,{timeout:15e3,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":f.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(e.data.status in this.$code)return _.error(this.$config.TAG+this.$code[e.data.status]),false;let i=f.toJSON(e.data.responseText);return i.status?(_.success(this.$config.TAG+"删除成功"),true):(_.error(this.$config.TAG+i.message),false)}},Xe={$data:{csrf_token:null},$config:{TAG:"MT图床：",base_url:"https://img.binmt.cc"},$tabConfig:{id:"img.binmt.cc",name:"MT图床",labelName:"mt"},init(){const t=this;new Qe({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(e){return await t.checkLogin()},async fileChangeEvent(e,i){let n=[],s=_.loading("上传中..."),l=true;for(let o=0;o<Array.from(i).length;o++){const r=Array.from(i)[o];let c=await t.uploadImage(r);c?(n.push({url:c.data.links.url,data:c.data}),l=l&&true):l=l&&false;}return s.close(),{success:l,data:n}},storageSaveCallBack(e){return e.data},async delImageEvent(e,i){return  true}});},async checkLogin(){if(!this.$data.csrf_token){let t=_.loading("正在获取CSRF Token中..."),e=await this.getCSRFToken();if(t.close(),!e)return  false;this.$data.csrf_token=e;}return  true},async getCSRFToken(){let t=await U.get(this.$config.base_url,{allowInterceptConfig:false,headers:{"User-Agent":f.getRandomPCUA(),Referer:this.$config.base_url+"/",Origin:this.$config.base_url}});if(!t.status){_.error(this.$config.TAG+"获取CSRF Token失败，网络异常");return}let i=a.toElement(t.data.responseText,true,true).querySelector('meta[name="csrf-token"]')?.getAttribute("content");if(i)return h.info("获取的CSRF token：",i),_.success(this.$config.TAG+"获取CSRF Token成功"),i},async uploadImage(t){let e=new FormData;e.append("strategy_id","2"),e.append("file",t);let i=await U.post(`${this.$config.base_url}/upload`,{data:e,headers:{Accept:"application/json, text/javascript, */*; q=0.01","User-Agent":f.getRandomAndroidUA(),Origin:this.$config.base_url,pragma:"no-cache","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",Referer:this.$config.base_url+"/",Pragma:"no-cache","x-csrf-token":this.$data.csrf_token,"X-Requested-With":"XMLHttpRequest"},allowInterceptConfig:false});if(!i.status){h.error(i),_.error(this.$config.TAG+"网络异常，上传图片失败");return}let n=f.toJSON(i.data.responseText);if(h.info(n),!n.status){h.error(i),_.error(this.$config.TAG+n.message||JSON.stringify(n));return}_.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(t),await new Promise(l=>{s.onload=function(){let r={imageUri:this.result,data:n.data};l(r);};})}},kt=()=>[{"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif"},{"[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png"},{"[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}],et=()=>({rainbow1:{key:"转普通彩虹",value:"",isFunc:true,num:1},rainbow2:{key:"转黑白彩虹",value:"",isFunc:true,num:2},rainbow3:{key:"转黑红彩虹",value:"",isFunc:true,num:3},rainbow4:{key:"转蓝绿彩虹",value:"",isFunc:true,num:4},size:{key:"大小",value:"[size=][/size]",tagL:"=",tagR:"]",L:"[size=]",R:"[/size]",cursorL:"[size=",cursorLength:6,quickUBBReplace:"[size=14]replace[/size]"},color:{key:"颜色",value:"[color=][/color]",tagL:"=",tagR:"]",L:"[color=]",R:"[/color]",cursorL:"[color=",cursorLength:7,quickUBBReplace:"[color=#000]replace[/color]"},b:{key:"加粗",value:"[b][/b]",tagL:"]",tagR:"[",L:"[b]",R:"[/b]",cursorR:"[/b]",cursorLength:4,quickUBBReplace:"[b]replace[/b]"},u:{key:"下划线",value:"[u][/u]",tagL:"]",tagR:"[",L:"[u]",R:"[/u]",cursorR:"[/u]",cursorLength:4,quickUBBReplace:"[u]replace[/u]"},i:{key:"倾斜",value:"[i][/i]",tagL:"]",tagR:"[",L:"[i]",R:"[/i]",cursorR:"[/i]",cursorLength:4,quickUBBReplace:"[i]replace[/i]"},s:{key:"中划线",value:"[s][/s]",tagL:"]",tagR:"[",L:"[s]",R:"[/s]",cursorR:"[/s]",cursorLength:4,quickUBBReplace:"[s]replace[/s]"},lineFeed:{key:"换行",value:"[*]",L:"",R:"[*]",cursorL:"[*]",cursorLength:3,quickUBBReplace:"replace[*]"},longHorizontalLine:{key:"水平线",value:"[hr]",L:"",R:"[hr]",cursorL:"[hr]",cursorLength:4,quickUBBReplace:"replace[hr]"},link:{key:"链接",value:"[url=][/url]",tagL:"=",tagR:"]",L:"[url=]",R:"[/url]",cursorL:"[url=",cursorLength:5,quickUBBReplace:"[url=replace]replace[/url]"},hide:{key:"隐藏",value:`[hide]
[/hide]`,tagL:"]",tagR:"[",L:"[hide]",R:"[/hide]",cursorR:"[/hide]",cursorLength:7,quickUBBReplace:`[hide]replace
[/hide]`},quote:{key:"引用",value:"[quote][/quote]",tagL:"]",tagR:"[",L:"[quote]",R:"[/quote]",cursorR:"[/quote]",cursorLength:8,quickUBBReplace:"[quote]replace[/quote]"},email:{key:"邮件",value:"[email=][/email]",tagL:"=",tagR:"]",L:"[email=]",R:"[/email]",cursorL:"[email=",cursorLength:7,quickUBBReplace:"[email=replace]replace[/email]"}}),tt=(t,e)=>{if(e=="")return "";var i=e,n,s,l,o,r,c,m,d;if(l=0,o=0,r=0,d=0,n="",t==1){d=40,l=255,c=1,m=0;do i.charCodeAt(m)!=32?(o+d<256?c==1&&(o+=d):c==1&&(c=2,o=255),l-d>-1?c==2&&(l-=d):c==2&&(c=3,l=0),r+d<256?c==3&&(r+=d):c==3&&(c=4,r=255),o-d>-1?c==4&&(o-=d):c==4&&(c=5,o=0),l+d<256?c==5&&(l+=d):c==5&&(c=6,l=255),r-d>-1?c==6&&(r-=d):c==6&&(c=1,r=0),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(m)}[/color]`):n+=i.charAt(m),m++;while(m<i.length)}else if(t==2)for(d=255/i.length,c=1;c<i.length+1;c++)i.charCodeAt(c-1)!=32?(l+=d,o+=d,r+=d,l>255&&(l=255),o>255&&(o=255),r>255&&(r=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(c-1)}[/color]`):n+=i.charAt(c-1);else if(t==3)for(d=255/i.length,c=1;c<i.length+1;c++)i.charCodeAt(c-1)!=32?(l+=d,o=29,r=36,l>255&&(l=255),o>255&&(o=255),r>255&&(r=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(c-1)}[/color]`):n+=i.charAt(c-1);else if(t==4)for(d=255/i.length,c=1;c<i.length+1;c++)i.charCodeAt(c-1)!=32?(l=0,o=174,r+=d,l>255&&(l=255),o>255&&(o=255),r>255&&(r=255),s="",s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(255-r).toString(16).length==1?0+parseInt(255-r).toString(16):parseInt(255-r).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(c-1)}[/color]`):n+=i.charAt(c-1);return n},St=function(){w.$.fn.extend({insertAtCaret:function(t){var e=w.$(this)[0];if(document.selection){this.focus();var i=document.selection.createRange();i.text=t,this.focus();}else if(e.selectionStart||e.selectionStart=="0"){var n=e.selectionStart,s=e.selectionEnd,l=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(s,e.value.length),this.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,e.scrollTop=l;}else this.value+=t,this.focus();},selectRange:function(t,e){return e===void 0&&(e=t),this.each(function(){if("selectionStart"in this)this.selectionStart=t,this.selectionEnd=e;else if(this.setSelectionRange)this.setSelectionRange(t,e);else if(this.createTextRange){var i=this.createTextRange();i.collapse(true),i.moveEnd("character",e),i.moveStart("character",t),i.select();}})},getCursorPosition:function(){var t=w.$(this)[0],e=0;if("selectionStart"in t)e=t.selectionStart;else if("selection"in document){t.focus();var i=document.selection.createRange(),n=document.selection.createRange().text.length;i.moveStart("character",-t.value.length),e=i.text.length-n;}return e},moveCursorInCenterByText:function(t,e){var i=w.$(this)[0],n=i.value;for(let s=i.selectionStart-1;s>0;s--){let l=n[s-1],o=n[s];if(l==t&&o==e){this.selectRange(s);break}}},moveCursorToCenterByTextWithLeft:function(t,e){var i=w.$(this)[0],n=i.value;for(let s=i.selectionStart-1;s>0;s--)if(n.substring(s-e,s)==t){this.selectRange(s);break}},moveCursorToCenterByTextWithRight:function(t,e){var i=w.$(this)[0],n=i.value;for(let s=i.selectionStart-1;s>0;s--)if(n.substring(s,s+e)==t){this.selectRange(s+e);break}}});},Ct=[{match:"抱歉，您填写的内容包含敏感词而无法提交",msg:"{$0}"},{match:/抱歉，管理员设置了本版块发表于 (.+?) 天以前的主题自动关闭，不再接受新回复/,msg:"抱歉，管理员设置了本版块发表于 {$1} 天以前的主题自动关闭，不再接受新回复"},{match:"抱歉，本主题已关闭，不再接受新内容",msg:"{$0}"},{match:/抱歉，您的帖子小于 (.+?) 个字符的限制/,msg:"抱歉，您的帖子小于 {$1} 个字符的限制"}];let Re=null;const ae={$data:{isUBBCodeInsertClick:false,isPosting:false,db:new re.indexedDB("mt_reply_record","input_text"),forum_action:null,get tid(){return O.getThreadId(window.location.href)}},$el:{$like:null,$btn_submit:null,$input:null,$form:null,$fastpostsubmit:null},init(){h.info("编辑器优化-简略版"),Y($t),this.overridePageEditor();},overridePageEditor(){let t=C("#comiis_foot_memu .comiis_flex li:nth-child(2)"),e=C("#comiis_foot_memu .comiis_flex li:nth-child(3)"),i=C("#comiis_foot_memu .comiis_flex li:nth-child(4)");this.$el.$form=C("#fastpostform"),this.$data.forum_action=this.$el.$form.getAttribute("action");let n=a.serialize(this.$el.$form),s=C("#fastpostform .header_y a").href;a.remove("#needmessage[name='message']"),a.remove("#imglist"),a.remove("#fastpostsubmitline"),a.remove("#fastpostsubmit");let l=C("#comiis_foot_memu");a.hide(l,false);let o=kt(),r=Object.keys(o[0]).map(d=>{let p=o[0][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`}),c=Object.keys(o[1]).map(d=>{let p=o[1][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`}),m=Object.keys(o[2]).map(d=>{let p=o[2][d];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${d}');"><img loading="lazy" data-src="${p}" class="vm"></a></li>`});a.after(l,`
      <div id="comiis_foot_menu_beautify" class="bg_f b_t">
          <div class="reply_area">
              <ul>
                  <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                  <li data-attr="评论数量">${t.innerHTML}</li>
                  <li data-attr="点赞">${e.innerHTML}</li>
                  <li data-attr="收藏">${i.innerHTML}</li>
              </ul>
          </div>
      </div>`,`
      <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
          <div class="reply_area">
              <div class="reply_user_content" style="display:none;"></div>
              <ul>
                  <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                  <li data-attr="发表">
                      <div class="fastpostform_new"><a href="${s}" data-comment-url="${s}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                      <div id="fastpostsubmitline"><input data-comment-url="${s}" data-comment-action="${this.$data.forum_action}" data-comment-serialize="${n}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
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
                                  ${r.join(`
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
      `),C("#comiis_foot_menu_beautify .comiis_position_key"),this.$el.$like=C("#comiis_foot_menu_beautify .comiis_recommend_addkey"),C("#comiis_foot_menu_beautify #comiis_favorite_a"),C("#comiis_pictitle_key"),this.$el.$btn_submit=C('#comiis_foot_menu_beautify_big li[data-attr="发表"] input'),this.$el.$input=C("#comiis_foot_menu_beautify_big textarea"),this.$el.$fastpostsubmit=C("#fastpostsubmit"),w.textarea_scrollHeight=()=>{},typeof w.comiis_addsmilies=="function"&&(w.comiis_addsmilies=d=>{w.$("#needmessage").comiis_insert(d),w.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));}),w.$("#imglist .up_btn").append(w.$("#filedata")),w.$(document).on("click","#imglist .up_btn a",function(){w.$(this).next().click();}),w.$(document).on("click","#imglist .p_img a",function(){let d=w.$(this);if(d.attr("onclick")==null){let p=d.find("img").attr("id").replace("aimg_","");w.comiis_addsmilies(`[attachimg]${p}[/attachimg]`);}}),a.hide("#comiis_foot_menu_beautify_big .menu_body",false),this.setInputChangeEvent(),this.setLikeBtnClickEvent(),this.setSubmitBtnClickEvent(),this.setGlobalReplyBtnClickEvent(),this.setGlobalClickCheckEvent(),this.setMenuIconToggleEvent(),this.setMenuImageClickEvent(),this.setMenuImageToggleEvent(),this.setMenuSmileClickEvent(),this.setMenuSmileTabClickEvent(),this.setMenuInsertClickEvent(),this.setMenuQuickUBB(),S.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",async()=>{this.setInputChangeSaveEvent(),await this.initReplyText();}),S.execMenuOnce("mt-image-bed-hello-enable",()=>{Ze.init();}),S.execMenuOnce("mt-image-bed-mt-enable",()=>{Xe.init();});},handle_error(t){let e=false;const i=a.text(a.toElement(t,false,false).querySelector("#messagetext"));return !i||typeof i=="string"&&i.trim()==""||Ct.forEach(n=>{const s=n.match instanceof RegExp?n.match:new RegExp(n.match),l=i.match(s);if(l){if(i.includes("typeof errorhandle_=='function'")){let o=n.msg;l.forEach((r,c)=>{o=o.replace(`{$${c}}`,r);}),_.error(o);}e=true;return}}),e},setInputChangeEvent(){const t=this;a.on(this.$el.$input,["input","propertychange"],function(){t.$el.$input.value===""?(t.$el.$btn_submit.setAttribute("data-text","false"),C("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute("placeholder","发帖千百度，文明第一步")):(t.$el.$btn_submit.setAttribute("data-text","true"),C("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute("placeholder","[草稿待发送]")),a.css(t.$el.$input,"height","70px"),a.css(t.$el.$input,"height",t.$el.$input.scrollHeight-20+"px");});},setInputChangeSaveEvent(){const t=this;a.on(this.$el.$input,["input","propertychange"],async()=>{const e=t.$el.$input.value,n=t.$el.$input.closest(".reply_area").querySelector(".reply_user_content").getAttribute("data-reply-url"),s={url:window.location.href,text:e,repquote:n?O.getRepquote(n):void 0,forumId:t.$data.tid},l=await t.$data.db.get("data");if(!l.success||l.code===201){console.warn(l);return}let o=l.data.findIndex(r=>r.forumId===s.forumId&&r.repquote===s.repquote);o!==-1?e==null||e===""?l.data.splice(o,1):l.data[o]=f.assign(l.data[o],{text:s.text}):l.data.push(s),await t.$data.db.save("data",l.data);});},async initReplyText(t=false,e=void 0){const i=this;(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let s=await this.$data.db.get("data");if(!s.success||s.code===201){console.warn(s);return}let l;e&&(l=O.getRepquote(e));let o=s.data.find(r=>t?r.forumId===i.$data.tid&&r.repquote==l:r.forumId===i.$data.tid&&r.repquote==null);o&&(a.val(this.$el.$input,o.text),a.emit(this.$el.$input,"input"));},setLikeBtnClickEvent(){a.on(this.$el.$like,"click",async t=>{if(a.preventEvent(t),w.comiis_recommend_key==0){w.comiis_recommend_key=1;let l=await U.get(this.$el.$like.href+"&inajax=1",{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false});if(!l.status){window.location.href=this.$el.$like.href,setTimeout(function(){w.comiis_recommend_key=0;},500);return}let r=f.parseFromString(l.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(r.includes("您已评价过本主题")){let c=this.$el.$like.href.match(ee.tid)[1];if(!(await U.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${c}&inajax=1`,{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false})).status){_.error("取消点赞失败，网络异常");return}var e=Number(a.text("#comiis_recommend_num"));document.querySelectorAll(".comiis_recommend_list_a").length>0&&a.remove("#comiis_recommend_list_a"+w.uid),document.querySelectorAll(".comiis_recommend_list_s").length>0&&a.remove("#comiis_recommend_list_s"+w.uid),document.querySelectorAll(".comiis_recommend_list_t").length>0&&a.remove("#comiis_recommend_list_t"+w.uid),e>1?(a.text(".comiis_recommend_num",e-Number(w.allowrecommend)),a.text(".comiis_recommend_nums","+"+(e-Number(w.allowrecommend)))):(a.remove("#comiis_recommend_num"),a.text(".comiis_recommend_nums",""),document.querySelectorAll(".comiis_recommend_list_a").length>0&&(a.empty(".comiis_recommend_list_a"),a.removeClass(".comiis_recommend_list_a","comiis_recommend_list_on")),document.querySelectorAll(".comiis_recommend_list_t").length>0&&a.removeClass(".comiis_recommend_list_t","comiis_recommend_list_on")),a.html(".comiis_recommend_addkey i","&#xe63b;"),a.removeClass(".comiis_recommend_color","f_a"),a.addClass(".comiis_recommend_color","f_b"),document.querySelectorAll(".comiis_recommend_list_s").length>0&&(document.querySelectorAll(".comiis_recommend_list_s li").length<7?a.hide(".txshow_more",false):a.show(".txshow_more",false)),_.success("已取消点赞");}else if(r.includes("您不能评价自己的帖子"))_.error("不能点赞自己的帖子");else if(r.includes("今日评价机会已用完"))_.warning("您今日的点赞机会已用完");else if(r.includes("'recommendv':'+"+w.allowrecommend+"'")){var i={recommendc:0,daycount:0},n;n=r.match(/\'recommendc\':\'(.*?)\'/),n!=null?i.recommendc=parseInt(n[1]):i.recommendc=0,n=r.match(/\'daycount\':\'(.*?)\'/),n!=null?i.daycount=parseInt(n[1]):i.daycount=0,document.querySelectorAll(".comiis_recommend_new span").length<1&&a.append(".comiis_recommend_new",'<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>');var s=Number(a.text("#comiis_recommend_num"));if(z(".comiis_recommend_list_a").length>0){let c=z(".comiis_recommend_list_a");a.removeClass(c,"comiis_recommend_list_on"),a.addClass(c,"comiis_recommend_list_on"),a.prepend(c,(z(".comiis_recommend_list_a li").length>0?"":'<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= '+w.tid+'&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">'+s+"</em>赞</span></a></li>")+'<li id="comiis_recommend_list_a'+w.uid+'"><a href="home.php?mod=space&uid='+w.uid+'"><img src="'+O.getAvatar(w.uid,"small")+'"></a></li>');}if(z(".comiis_recommend_list_t").length>0){let c=z(".comiis_recommend_list_t");a.removeClass(c,"comiis_recommend_list_on"),a.addClass(c,"comiis_recommend_list_on"),a.prepend(c,`<span id="comiis_recommend_list_t${w.uid}">
                          							<a href="home.php?mod=space&uid=${w.uid}" class="f_c">${w.username}</a>
													${z(".comiis_recommend_list_t a").length>0?'<span class="f_d"> , </span>':""}
                        						</span>`);}if(z(".comiis_recommend_list_s").length>0){let c=z(".comiis_recommend_list_s");a.removeClass(c,"comiis_recommend_list_on"),a.addClass(c,"comiis_recommend_list_on"),a.prepend(c,(z(".comiis_recommend_list_s li").length>0,""+'<li id="comiis_recommend_list_s'+w.uid+'"><a href="home.php?mod=space&uid='+w.uid+'"><img loading="lazy" src="'+O.getAvatar(w.uid,"small")+'"></a></li>'));}a.text(".comiis_recommend_num",s+Number(w.allowrecommend)),a.text(".comiis_recommend_nums","+"+(s+Number(w.allowrecommend))),a.html(".comiis_recommend_addkey i","&#xe654;"),a.removeClass(".comiis_recommend_color","f_b"),a.addClass(".comiis_recommend_color","f_a"),z(".comiis_recommend_list_s").length>0&&(z(".comiis_recommend_list_s li").length<7?a.hide(".txshow_more",false):a.show(".txshow_more",false)),_.success("点赞成功"+(i.daycount?`, 您今天还能点赞 ${i.daycount-1} 次`:""));}else r.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'")>=0?window.location.href="member.php?mod=logging&action=login&mobile=2":_.error("没有点赞权限或帖子不存在");setTimeout(function(){w.comiis_recommend_key=0;},500);}return  false});},setSubmitBtnClickEvent(){const t=this;a.on(this.$el.$fastpostsubmit,"click",async e=>{a.preventEvent(e),t.$data.isPosting=true;const i=C("#needmessage");let n=a.val(i);if(n=encodeURIComponent(n),!(n==null||n==="")){try{if(a.val(t.$el.$fastpostsubmit)=="发表"){let s=_.loading("发表中，请稍后..."),l="message="+n;z("#imglist input[type='hidden']").forEach(d=>{let p=d.getAttribute("name");l+=`&${p}=`;}),l=a.serialize(t.$el.$form)+"&"+l;let o=t.$data.forum_action+"reply&handlekey=fastpost&loc=1&inajax=1",r=await U.post(o,{data:l,fetch:!0,allowInterceptConfig:!1,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(s.close(),!r.status){_.error("发表失败，网络异常");return}let m=f.parseFromString(r.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(w.evalscript(m),this.handle_error(m))return;window.scrollTo({top:a.height(document)}),a.val("#needmessage",""),C("#comiis_head")?.click(),a.hide("#comiis_foot_menu_beautify_big .reply_user_content",!1),a.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),a.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),await this.deleteReplyTextStorage();}else {let s=a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize")+n;z("#imglist input[type='hidden']").forEach(m=>{s=`${s}&${m.getAttribute("name")}=`;});let l=a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action"),o=await U.post(l+"&handlekey=fastposts&loc=1&inajax=1",{allowInterceptConfig:!1,fetch:!0,data:s,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!o.status){_.error("回复失败，网络异常");return}let c=f.parseFromString(o.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(h.info(c),w.evalscript(c),this.handle_error(c))return;C(c)?.click(),a.val("#needmessage",""),C("#comiis_head").click(),a.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"发表"),a.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),a.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),window.scrollTo({top:a.height(document)}),await this.deleteReplyTextStorage(!0,l);}}catch(s){console.error(s);}finally{t.$data.isPosting=false;}return  false}});},setGlobalReplyBtnClickEvent(){a.on(document,"click",'.comiis_postli_times .dialog[href*="reply"]',async(t,e)=>{a.preventEvent(t);let i=e;a.attr("#comiis_foot_menu_beautify_big","data-model","reply");let n=await U.get(a.attr(i,"datahref")||i.href+"&inajax=1",{fetch:true,allowInterceptConfig:false});if(!n.status){_.error("网络异常，获取回复参数失败");return}let l=f.parseFromString(n.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(this.handle_error(l))return;let o=a.toElement(`<div>${l}</div>`,true,false),r=o.querySelector(".comiis_tip .tip_tit a")?.getAttribute("href"),c=a.text(o.querySelector(".comiis_tip span.f_0")),m=a.val(o.querySelector("input[name='noticeauthormsg']")),d=a.attr(o.querySelector("#postforms"),"action"),p=a.serialize(o.querySelector("#postforms"));a.text("#comiis_foot_menu_beautify_big .reply_user_content",`回复 ${c}: ${m}`),a.show("#comiis_foot_menu_beautify_big .reply_user_content",false),C("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.click(),a.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input"),a.val("#fastpostsubmitline input","回复"),a.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",r),a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-url",r),a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action",d),a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize",p),Re=i,a.val("#needmessage",a.attr(i,"data-text")||""),S.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",async()=>{await this.initReplyText(true,r);});},{capture:true,overrideTarget:false});},setGlobalClickCheckEvent(){const t=this;let e=C("#fastpostform .header_y a").href;a.on(document,"click",function(i){let n=i.target;if(C(".popups-popmenu")||ae.$data.isUBBCodeInsertClick){h.info("点击的是弹出层，不做处理"),ae.$data.isUBBCodeInsertClick=false;return}else n?.classList&&n?.classList?.contains(".dialog_reply")||n?.closest&&n?.closest(".dialog_reply")||n===C('li[data-attr="回帖"] input')?(h.info("点击回复按钮或者是编辑器，显示编辑器"),a.hide("#comiis_foot_menu_beautify",false),a.show("#comiis_foot_menu_beautify_big",false),a.focus("#needmessage")):window.event&&!a.checkUserClickInNode(C("#comiis_foot_menu_beautify_big"))&&(h.info("点击的其它区域，隐藏大编辑器，显示小编辑器"),a.show("#comiis_foot_menu_beautify",false),a.hide("#comiis_foot_menu_beautify_big",false),a.attr("#comiis_foot_menu_beautify_big","data-model")=="reply"&&(a.attr("#comiis_foot_menu_beautify_big","data-model","comment"),a.val("#fastpostsubmitline input","发表"),a.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",e),a.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content"),a.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content",false),a.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-url",""),a.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-action",""),a.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-serialize",""),Re&&(a.attr(Re,"data-text",a.val("#needmessage")),a.val("#needmessage",""),a.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),a.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"))),a.val(t.$el.$input)===""&&!t.$data.isPosting&&S.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",async()=>{await t.initReplyText();}));});},setMenuIconToggleEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a i","click",function(){let t=this;t.classList.contains("f_0")?(a.hide("#comiis_foot_menu_beautify_big .menu_body",false),a.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0")):(a.show("#comiis_foot_menu_beautify_big .menu_body",false),a.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0"),a.addClass(t,"f_0"));});},setMenuImageClickEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle","click",function(){a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),a.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false);});},setMenuImageToggleEvent(){a.on("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key","click","li",function(t,e){a.removeClass("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),a.addClass(e,"bg_f"),w.$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox").hide().eq(w.$(e).index()).fadeIn();},{overrideTarget:false});},setMenuSmileClickEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile","click",function(){a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),a.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false);let t=C("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox");a.attr(t,"data-isLoaded")!=1&&(a.attr(t,"data-isLoaded",1),t.querySelectorAll("img").forEach(e=>{let i=e.getAttribute("data-src");i&&e.setAttribute("src",i);}));});},setMenuSmileTabClickEvent(){a.on("#comiis_foot_menu_beautify_big #comiis_smilies_key li","click",function(){const t=this;a.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a"),a.addClass(t.querySelector("a"),"bg_f b_l b_r"),w.$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide").hide().eq(w.$(t).index()).fadeIn();});},setMenuInsertClickEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs","click",()=>{a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),a.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false);});},async getReplyRecordSize(){let t=await this.$data.db.get("data");return t.success?f.getTextStorageSize(t?.data?.length?JSON.stringify(t.data):""):f.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},async deleteReplyTextStorage(t=false,e=void 0){const i=this,n=async()=>{const l=await this.$data.db.get("data");if(!l.success||l.code===201)return console.warn(l),s.off(),false;let o=l.data.findIndex(c=>t?c.forumId===i.$data.tid&&e&&c.repquote===O.getRepquote(e):c.forumId===i.$data.tid&&f.isNull(c.repquote)),r=false;return o!==-1&&(l.data.splice(o,1),await this.$data.db.save("data",l.data),r=true),s.off(),r},s=a.on(window,"beforeunload",async()=>{await n();},{capture:true});await n();},setMenuQuickUBB(){let t=C("#comiis_insert_ubb_tab_list"),e=et();Reflect.set(e,"code",{key:"代码",value:"[code][/code]",tagL:"]",tagR:"[",L:"[code]",R:"[/code]",cursorL:"[code]",cursorLength:7,quickUBBReplace:"[code]replace[/code]"}),Reflect.set(e,"password",{key:"密码",value:"[password][/password]",tagL:"]",tagR:"[",L:"[password]",R:"[/password]",cursorL:"[password]",cursorLength:10,quickUBBReplace:"[password]replace[/password]"}),Object.keys(e).forEach(i=>{let n=e[i],s=a.createElement("li",{className:"quickUBBs",innerHTML:`
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${n.key}
                    </a>
                `});a.on(s,"click",()=>{a.removeClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_0"),a.addClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_d");let l=s.querySelector(".comiis_xifont");a.removeClass(l,"f_d"),a.removeClass(l,"f_d");let o=D.prompt({title:{text:"UBB代码",position:"center"},content:{text:"",placeholder:`请输入需要${n.key}的文字`,focus:true},btn:{ok:{text:"插入",type:"primary",callback:r=>{if(r.text.trim()===""){_.error("输入框不能为空或纯空格");return}n.isFunc?w.comiis_addsmilies(tt(n.num,r.text)):n.quickUBBReplace?w.comiis_addsmilies(n.quickUBBReplace.replaceAll("replace",r.text)):w.comiis_addsmilies(r.text),o.close();}},cancel:{text:"关闭",callback:()=>{o.close();}}},width:"300px",height:"200px"});}),t.append(s);});}},it={$flag:{isSetHljsCSS:false},init(){S.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),S.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),a.onReady(()=>{S.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),S.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),S.execMenu("mt-forum-post-addCommentOnBtn",()=>{this.addCommentOnBtn();}),S.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),S.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),S.execMenuOnce("mt-forum-post-editorOptimizationNormal",()=>{ae.init();}),S.execMenu("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),S.execMenuOnce("mt-forum-post-setAttachmentsClickTip",()=>{this.setAttachmentsClickTip();});});},autoExpandContent(){return h.info("自动展开帖子内容"),Y(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return h.info("修复图片宽度"),Y(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){h.info("移除帖子字体效果");let t=C(".comiis_a.comiis_message_table");t&&a.html(t,a.html(t).replace(ee.fontSpecial,""));},removeCommentFontStyle(){h.info("移除评论区的字体效果");let t=z("font"),e=C(".comiis_postlist .comiis_postli")?.innerHTML||"";e!==""&&(t.forEach(i=>{e.includes(i.innerHTML)||(i.removeAttribute("color"),i.removeAttribute("style"),i.removeAttribute("size"));}),z(".comiis_message.message").forEach(i=>{if(e.includes(i.innerHTML)){i.innerHTML=i.innerHTML.replace(ee.fontSpecial,"");let n=i.nextElementSibling;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),z(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(i=>{let n=i.parentElement;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},addCommentOnBtn(){h.info("添加【点评】按钮"),a.waitNodeList(".bottom_zhan:not([data-isaddreviews])").then(t=>{t.forEach(e=>{e.setAttribute("data-isaddreviews","true");var i=e.querySelector("a");if(i){var n=i.getAttribute("datahref")||i.getAttribute("data-href")||i.href||"",s=n.replace("mod=post&","mod=misc&").replace("action=reply&","action=comment&"),l=n?.match(/&page=([\w]+)/i)?.[1],o=`${s}&extra=page%3D1&page=${l}`,r=e?.closest(".comiis_postli[id]"),c=r.getAttribute("id")?.replace("pid","&pid=");o=o+c;var m=r.querySelector(".top_user.f_b")?.textContent||"",d=a.toElement(`
						<a href="${o}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,true,false);a.on(d,"click",function(){a.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then(p=>{try{p.innerText="点评 "+m;}catch(u){h.error("修改点评失败",u);}});}),a.prepend(e,d);}});});},loadNextPageComment(){if(h.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;function t(){return C("#loading-comment-tip")}function e(){return C("#loading-comment-tip").parentElement}function i(c){let m=t(),d=e();a.css(d,"display","");let u=Array.from(c.querySelectorAll("a[href]")).find($=>$.textContent?.trim()==="下一页").href;if(h.info("获取下一页url：",u),u.includes("javascript:;")){h.info("暂无下一页的评论"),a.remove(d);return}function y(){a.remove(".comiis_page.bg_f"),a.remove(d),a.off(m,"click",g),a.off(window,"scroll",b.run);}async function g(){a.text(m,"正在加载评论中..."),a.css(d,"display",""),h.info("请求下一页评论："+u);let $=u,k=await U.get($,{fetch:true});if(!k.status)return;let E=a.toElement(k.data.responseText,true,true),V=C(".comiis_postlist.kqide"),T=E.querySelector(".comiis_postlist.kqide"),P=E.querySelector(".nxt"),N=P?.getAttribute("href")||P?.href;if(N){if(h.success("成功获取到下一页评论"),N===u){h.warn("获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件"),y();return}u=N;}else h.error("评论全部加载完毕，移除监听事件"),y();let B=P?.parentElement.querySelector("strong");if(B){let F=C("#select_a");if(F){let v=Array.from(F.childNodes).find(x=>x.nodeName==="#text");v&&(v.textContent=`第 ${B.textContent} 页`);}}S.execMenu("mt-forum-post-syncNextPageUrl",()=>{if(window===top?.window){let F=new URL($),v=`${F.pathname}${F.search}`;window.history.pushState("forward","",v);}}),a.append(V,T),it.init();}var b=new f.LockFunction(async()=>{f.isNearBottom(50)&&await g();});a.text(m,"请上下滑动或点击加载"),a.on(window,"scroll",b.run),a.on(m,"click",g),b.run();}let s=a.toElement(`
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`,true,false),l=C(".comiis_bodybox");a.append(l,s);let o=C(".comiis_pltit span.f_d")||C("#comiis_foot_memu .comiis_kmvnum");if(C(".comiis_pltit h2")&&C(".comiis_pltit h2")?.textContent.includes("暂无评论")){a.remove(e()),h.info("暂无评论");return}parseInt(o.textContent)>=10?a.waitNode(".comiis_page.bg_f").then(c=>{i(c);}):(a.remove(e()),h.info("无多页评论"));},codeQuoteOptimization(){h.info("代码块优化");function t(i){var n=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],s=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],l=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},i.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+l.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+n.join("|")+")\\s"},{begin:"\\s("+n.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+s.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}this.$flag.isSetHljsCSS||(ve.registerLanguage("smali",t),Y(`
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`),Y(`
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`),a.on(document,"click",".reader-copy-button",async function(i,n){a.preventEvent(i);const s=C(n.getAttribute("data-code-selector"));return await f.copy(s.outerText||s.innerText),_.success("已复制到剪贴板"),false},{overrideTarget:false})),z(".comiis_blockcode.comiis_bodybg").forEach(i=>{if(i.getAttribute("data-copy"))return;i.setAttribute("data-copy","true");let n=a.createElement("div",{innerHTML:`
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
					</span>`},{style:"height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;"});a.before(i,n);function s(d,p="java"){d.oldValue||(d.oldValue=d.textContent),d.innerHTML=ve.highlight(d.oldValue,{language:p}).value.replace(/\\n$/gi,"");}let l=ve.highlightAuto(i.textContent).language,o=document.createElement("div"),r=document.createElement("select"),c=ve.listLanguages().sort();c=c.concat("自动检测");let m="";c.forEach(d=>{d.startsWith("自动检测")?m+=`<option data-value="${l}" selected="selected">${d}(${l})</option>`:m+=`<option data-value="${d}">${d}</option>`;}),r.className="code-select-language",r.innerHTML=m,a.on(r,"change",function(){let d=r.selectedOptions[0].getAttribute("data-value");r.setAttribute("aria-label",d),h.info("切换代码块语言: ",d),i.querySelectorAll("li").forEach(p=>{s(p,d);});}),a.preventEvent(r,"click"),o.appendChild(r),n.append(o),a.emit(r,"change"),i.className="hljs",i.firstChild.removeAttribute("class"),n.querySelector(".reader-copy-button").setAttribute("data-code-selector",a.getElementSelector(i));});},optimizationImagePreview(){h.info("图片查看优化");function t(i=[],n=0){let s="";i.forEach(r=>{s+=`<li><img data-src="${r}"></li>`;});let l=a.createElement("ul",{innerHTML:s}),o=new Ke(l,{inline:false,url:"data-src",zIndex:f.getMaxZIndex()+100,hidden:()=>{o.destroy();}});h.info("查看的图片的下标",n),o.view(n),o.zoomTo(1),o.show();}let e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];a.waitNodeList("div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])").then(i=>{i.forEach(n=>{n.setAttribute("data-isHandlingViewIMG","true");let s=[];n.querySelectorAll("img").forEach(l=>{let o=l.src,r=new URL(o).hostname,c=new URL(o).pathname,m=l.parentElement;m.nodeName.toLowerCase()==="span"&&m.removeAttribute("onclick"),m.nodeName.toLowerCase()==="a"&&m.getAttribute("href")===o&&(m.setAttribute("href","javascript:;"),m.removeAttribute("target"));let d=false;for(let p of e)if(r.indexOf(p.hostName)!=-1&&c.match(p.pathName)){d=true;break}d||(s=[...s,o],a.on(l,"click",function(){h.info("点击图片",l);let p=s.findIndex(u=>u==o);t(s,p);}));}),s.length&&h.info("处理的图片",s);});});},setAttachmentsClickTip(){h.info("附件点击提醒");function t(e){if(e.hasAttribute("href")){let i=e.getAttribute("href"),n=e.querySelector("span.f_ok"),s=e.querySelector(".attach_size");if(a.text(s).indexOf("金币")===-1)return;h.info("发现附件",e),h.info("该附件是金币附件，拦截！");let l=a.text(n);e.setAttribute("data-href",e.getAttribute("href")),e.removeAttribute("href"),n.innerText="【已拦截】"+l,e.onclick=function(){h.info("附件url：",i),D.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${l}</a> ？<br /><br />`,html:true},btn:{ok:{callback:o=>{window.open(i,"_blank"),o.close();}}},mask:{enable:true},width:"88vw",height:"200px"});};}}f.mutationObserver(document.documentElement,{callback:()=>{z(".attnm a").forEach(e=>{t(e);}),z(".comiis_attach a").forEach(e=>{t(e);});},config:{childList:true,subtree:true}}),a.waitNodeList(".attnm a").then(e=>{e.forEach(i=>{t(i);});}),a.waitNodeList(".comiis_attach a").then(e=>{e.forEach(i=>{t(i);});});}},Tt={init(){Y(`
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `),H.onReady(()=>{S.execMenuOnce("mt-search-showSearchHistory",()=>{this.showSearchHistory();}),S.execMenuOnce("mt-search-repairClearBtn",()=>{this.repairClearBtn();}),S.execMenuOnce("mt-search-searchInputAutoFocus",()=>{this.searchInputAutoFocus();});});},async showSearchHistory(){h.info("显示搜索历史");let t=Q("search_history",[]),e=C("#scform_srchtxt"),i=C("#searchform");const n=t.map(r=>({value:r,enableDeleteButton:true,deleteButtonClickCallback(c,m,d,p){let u=t.findIndex(y=>y===d.value);u!==-1&&(t.splice(u,1),K("search_history",t)),m.remove();},itemView(c,m,d){return c.value},clickCallback(c,m,d,p){e.value=d.value,i.submit();}}));let s=D.searchSuggestion({$target:e,$inputTarget:e,data:n,inputTargetChangeRefreshShowDataCallback(r,c,m){return n.filter(d=>d.value.includes(r))}});s.init(),s.setAllEvent();function l(){let r=document.querySelector("#scform_submit");H.on(r,"click",function(){let c=e.value;if(c!=""){let m=Q("search_history",[]);m.includes(c)?h.info("已有该搜索历史记录"):(h.info("无该记录，追加"),m.push(c)),K("search_history",m);}});}function o(){let c='<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: '+Q("search_history",[]).length+`<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;H.before(document.querySelector(".comiis_p12"),c);let m=document.querySelector(".btn_clear_search_history");H.on(m,"click",d=>{H.preventEvent(d),le("search_history"),window.location.reload();});}l(),o();},repairClearBtn(){H.waitNode("a.ssclose").then(t=>{h.info("修复清空按钮"),H.on(t,"click",()=>{let e=document.querySelector("#scform_srchtxt");e?e.value="":_.error("获取输入框失败");},{capture:true});});},searchInputAutoFocus(){new URLSearchParams(window.location.search).has("kw")||H.waitNode("#scform_srchtxt").then(e=>{h.info("搜索框自动获取焦点"),e.focus();});}},Et={init(){a.onReady(()=>{S.execMenuOnce("mt-sign-showTodaySignStar",()=>{this.showTodaySignStar();}),S.execMenuOnce("mt-sign-showTodayRanking",()=>{this.showTodayRanking();});});},async showTodaySignStar(){h.info("显示【今日签到之星】");let t=document.querySelector(".pg_k_misign .comiis_qdinfo"),e=document.createElement("ul"),i=await U.get("/k_misign-sign.html",{headers:{"User-Agent":f.getRandomPCUA()}});if(!i.status)return;let s=a.toElement(i.data.responseText,true,true).querySelector("#pt span.xg1");if(!s)return;let l=a.text(s).replace("今日签到之星：","");e.innerHTML=`
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${l}
		</li>
		`;let o=document.querySelector(".comiis_space_box"),r=parseInt(getComputedStyle(o,null).height.replace("px","")),c=parseInt(getComputedStyle(o,null).paddingBottom.replace("px","")),m=r+c+50;Y(`
		.comiis_space_box{
			height: ${m}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`),t.append(e);},showTodayRanking(){h.info("显示【今日最先】");let t=document.querySelector(".comiis_topnv .comiis_flex .flex"),e=a.createElement("li",{className:"flex"}),i=a.createElement("a",{id:"k_misignlist_today_latest",href:"javascript:;",innerHTML:"今日最先"},{onclick:"ajaxlist('todayLatest');"});e.appendChild(i),a.after(t,e);let n=async o=>{let r=await U.get(`/k_misign-sign.html?operation=${o}`,{responseType:"html",headers:{"User-Agent":f.getRandomPCUA()}});if(!r.status)return;let m=a.toElement(r.data.responseText,true,true).querySelector("#J_list_detail .pg span");if(m&&typeof m.title<"u"){let d=m.title.match(/([0-9]+)/);if(d&&d.length==2)return parseInt(d[d.length-1]);_.error("获取页失败");}else _.error("请求最先签到的页失败");},s=async o=>{let r=await U.get(`/k_misign-sign.html?operation=list&op=&page=${o}`,{responseType:"html",headers:{"User-Agent":f.getRandomPCUA()}});if(!r.status)return;let m=a.toElement(r.data.responseText,true,true).querySelectorAll("#J_list_detail tbody tr"),d=[];if(m.length==2&&m[0].textContent.indexOf("暂无内容")!=-1)return d;for(let p=1;p<=m.length-2;p++){let u=m[p],y={user:"",uid:"",avatar:"",days:"",monthDays:"",time:"",reward:""},g=u.children[0].getElementsByTagName("a")[0].textContent,$=u.children[0].getElementsByTagName("a")[0].href.match(/space-uid-([0-9]*)/)[1],k=u.children[1].textContent,E=u.children[2].textContent,V=u.children[3].textContent,T=u.children[5].textContent;y.user=g,y.uid=$,y.avatar=O.getAvatar($,"small"),y.days=k,y.monthDays=E,y.time=V,y.reward=T,d.push(y);}return d};function l(o,r){let c=document.querySelector("#ranklist");a.html(c,o),a.attr(c,"listtype",r);}w.ajaxlist=async o=>{if(o=o,o=="today"?(loadingdelay=false,urlextra="list&op=today"):o=="month"?(loadingdelay=false,urlextra="list&op=month"):o=="zong"?(loadingdelay=false,urlextra="list&op=zong"):o=="calendar"?(loadingdelay=true,urlextra="calendar"):(loadingdelay=false,urlextra="list"),o=="todayLatest"){loadingdelay=false,urlextra="list&op=&page=0";let r=await n(urlextra);if(!r)return;let c=await s(r);if(c.reverse(),c.length<10){let p=await s(r-1);p.reverse(),c=c.concat(p),c.reverse();}let m="";c.reverse(),c.forEach(p=>{m=m+`
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
					</div>`;l(d,o);}else U.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`,{responseType:"html",fetch:true}).then(r=>{let c=r.data.responseText;c=c.replace("今日排行</a></li>",`今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`),o=="today"&&(c=c.replace(`<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,`
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`)),l(c,o);});};}},It={init(){S.execMenuOnce("mt-space-repairEnterSpace",()=>{this.repairEnterSpace();}),a.onReady(()=>{S.execMenuOnce("mt-space-showCommentContent",()=>{this.showCommentContent();});});},repairEnterSpace(){if(h.info("修复无法进入空间"),R.isSpace()){let t=window.location.href.match(/home.php\?(.+)/gi),e=t[t.length-1];e.split("&").length==2&&e.indexOf("uid=")!=-1&&e.indexOf("mod=space")!=-1&&(window.location.href=window.location.href+"&do=profile");}else if(R.isSpaceWithAt()){let t=window.location.href.match(/space-uid-(.+).html/i),e=t[t.length-1];window.location.href=`${window.location.origin}/home.php?mod=space&uid=${e}&do=profile`;}},async showCommentContent(){h.info("显示帖子回复内容"),Y(`
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);async function t(){let o=await U.get(window.location.href,{headers:{"User-Agent":f.getRandomPCUA()}});if(!o.status)return;let r=a.toElement(o.data.responseText,true,true),c=[];return r.querySelectorAll("#delform tr.bw0_all+tr").forEach(m=>{let d=[],p=m.querySelector("td"),u=a.html(p).replace(/^&nbsp;/,"");d.push(u);let y=a.next(m),g=r.querySelectorAll("#delform tr");for(let b=0;b<g.length&&!(!y||a.attr(y,"class")==="bw0_all");b++){let $=y.querySelector("td"),k=a.html($).replace(/^&nbsp;/,"");d=d.concat(k),y=a.next(y);}c.push(...d);}),c}function e(){return f.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist())}function i(o){let r={};return o.forEach(c=>{let d=a.createElement("div",{innerHTML:c}).querySelector("a")?.getAttribute("href"),p=d.match(ee.ptid),u=d.match(ee.pid);if(!p){_.error("获取ptid失败");return}if(!u){_.error("获取pid失败");return}let y=p[p.length-1],g=u[u.length-1];r[y]?r[y].data.push(c):r[y]={ptid:y,pid:g,data:[c]};}),r}var n=await t();if(n==null)return;var s=i(n);e().forEach((o,r)=>{let m=o.querySelector(".comiis_xznalist_bottom a").getAttribute("tid");if(!m){_.error("获取帖子tid失败"),h.error(o);return}s[m]&&s[m].data.forEach(d=>{a.append(o,`<div class="contrete-reply">${d}</div>`);});});}},fe={$key:{tipData:"tipToFreeSubjectForumPost"},init(){this.registerMenu();let t=this.getTipData();if(R.isPost()&&document.querySelector("span.kmren")){h.info("当前帖子存在需要购买主题");let l=false,o;t.forEach((c,m)=>{if(window.location.href.match(c.url)){l=true;return}}),l?(h.warn("已设置提醒"),o=a.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `}),a.on(o,"click",function(){D.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},btn:{ok:{callback:function(){let c=t.findIndex((m,d)=>window.location.href.match(m.url));c!==-1?(t.splice(c,1),fe.setTipData(t),_.success("移除成功")):_.error("移除失败");}}},width:"88vw",height:"300px"});})):(h.info("未设置提醒"),o=a.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `}),a.on(o,"click",()=>{let c=document.querySelector(".kmren"),m=a.parent(c),d=a.text(m).replace(/\t|\n/g,"").match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/);if(!d||d.length==0){_.error("获取付费主题到期时间失败");return}let p=d[0],u=f.formatToTimeStamp(p);t.push({url:window.location.href,title:document.title.replace(" - MT论坛",""),expirationTime:p,expirationTimeStamp:u,isVisited:false}),K("tipToFreeSubjectForumPost",t),_.success("添加成功"),setTimeout(function(){window.location.reload();},1500);}));let r=document.querySelector(".comiis_head.f_top .header_y");a.append(r,o);}function e(){let s=0;return Array.from(fe.getTipData()).forEach((l,o)=>{new Date().getTime()>l.expirationTimeStamp&&l.isVisited==false&&(s+=1);}),s}if(R.isMySpace()||R.isGuide()||R.isForumList()||R.isPlate()){let s=document.querySelector(".icon_msgs.bg_del.f_f"),l=0;s?(l=parseInt(a.text(s)),a.html(s,(l+e()).toString()),a.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>')):e()&&a.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>');}let i=document.querySelector(".sidenv_num.bg_del.f_f"),n=0;if(i)n=parseInt(a.text(i)),a.html(".sidenv_num.bg_del.f_f",(n+e()).toString());else {let s=e();s&&a.before(".sidenv_user em",`<span class="sidenv_num bg_del f_f">${s}</span>`);}e()&&a.append(".comiis_left_Touch .paymentsubjectreminder div.flex",`
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`);},registerMenu(){G.registerLeftMenu({name:"付费主题白嫖提醒",icon:"",iconColor:"#ec0000",callback:()=>{this.showView();}});},showView(){h.info("显示白嫖列表");let t=fe.getTipData();D.alert({title:{text:"付费主题白嫖列表",position:"center"},content:{text:"",html:true},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"88vh"});let e="",i=0,n="",s="",l=[],o=[],r=[];t.forEach((y,g)=>{let b="#f91212",$="";new Date().getTime()>y.expirationTimeStamp&&(b="#1e90ff",y.isVisited||($=`
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `,i=i+1));let k={content:`
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${$}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${y.url}" t-index="${g}" style="color: #1e90ff;">${y.title}</a>
                                <li style="margin: 5px 15px;color: ${b};">${y.expirationTime}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${g}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,timestamp:y.expirationTimeStamp};new Date().getTime()>y.expirationTimeStamp?$!=""?l.push(k):o.push(k):r.push(k);}),h.info("可白嫖但未访问：",l),h.info("可白嫖：",o),h.info("未到白嫖时间：",r),f.sortListByProperty(l,"expirationTimeStamp",false),f.sortListByProperty(o,"timestamp",false),f.sortListByProperty(r,"timestamp",false),h.info("排序后——可白嫖但未访问：",l),h.info("排序后——可白嫖：",o),h.info("排序后——未到白嫖时间：",r),n=f.mergeArrayToString(l,"content")+f.mergeArrayToString(o,"content"),s=f.mergeArrayToString(r,"content"),i>0&&(e=`
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
            ">${i}</span>`);let c=`
            <details class="subjectcanvisit" open="">
                <summary>可白嫖${e}</summary>
                <table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${n}    
                </table>
            </details>
        `,m=`
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${s}
                </table>
            </details>
        `,d=document.querySelector(".msgcon");a.html(d,""),a.append(d,c),a.append(d,m),a.css(d,"height","400px"),a.on(document.querySelector(".delsubjecttip i.comiis_font"),"click",y=>{let g=y.target,b=a.parent(g);var $=parseInt(b.getAttribute("t-index"));D.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},btn:{ok:{callback:k=>{t.splice($,1),fe.setTipData(t),a.deleteParentNode(g,"tr"),k.close();}}},width:"80vw",height:"300px"});});const p=document.querySelector("#paymentSubjectReminderIsFreeList");a.on(p,"click","a",(y,g)=>{const b=g,$=parseInt(b.getAttribute("t-index")),k=b.getAttribute("t-href");if(t[$].isVisited=true,fe.setTipData(t),window.open(k,"_blank"),b.setAttribute("style","color: #000000;"),b?.parentElement?.parentElement?.children[0].className!="icon_msgs bg_del")return;b.parentElement.parentElement.children[0].remove(),a.append(p,b?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement);const E=document.querySelector(".subjectcanvisit summary span.icon_msgs.bg_del.f_f"),V=a.text(E),T=parseInt(V)-1;T>0?a.html(E,T.toString()):E.remove();},{overrideTarget:false});const u=document.querySelector("paymentSubjectReminderIsPaidList");a.on(u,"click","a",(y,g)=>{const b=g;b.getAttribute("t-index");const $=b.getAttribute("t-href");window.open($,"_blank"),b.setAttribute("style","color: #000000;");},{overrideTarget:false});},getTipData(){return Q(this.$key.tipData,[])},setTipData(t){K(this.$key.tipData,t);}};class Rt{isBacking=false;config;constructor(e){this.config=e,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(e){a.preventEvent(e),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){h.success("进入手势模式");let e=this.config.hash;e.startsWith("#")||(e.startsWith("/")||(e="/"+e),e="#"+e),this.config.useUrl&&(e=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+e),this.config.win.history.pushState({},"",e),h.success("监听popstate事件"),a.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(e=false){this.isBacking=true,h.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(e);let i=Date.now()+1e3*5;for(;;){if(Date.now()>i){h.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))h.info("history.back()"),this.config.win.history.back(),await re.sleep(this.config.backDelayTime||150);else break}h.success("移除popstate事件"),a.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(e);}}const Lt=`.pops {
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
`,ge={https:`
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
		</svg>`},nt={$key:{smallWindow:"smallWindow"},$el:{$refreshIcon:null,$webSiteIcon:null},init(){let t=new f.LockFunction(()=>{let e=this.getForumList();e.length&&this.handleForumPost(e);});f.mutationObserver(document.documentElement,{callback:(e,i)=>{t.run();},config:{subtree:true,childList:true}});},getForumList(){return f.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist())},showSmallWindow(t,e,i=[]){let n=new URL(e),s=n.protocol.includes("https:"),l=`
        <div class="small-window-drag">
            <!-- 这里是拖拽区域 -->
            <div></div>
        </div>
        <div class="small-window-title-container">
            <i class="small-window-website-icon" style="display: none;">
                ${ge.mt}
            </i>
            <div class="refresh-icon">
                <div class="refresh-icon-out"></div>
                <div class="refresh-icon-in"></div>
            </div>
            <div class="small-window-title-text-container">
                <p class="small-window-title-text">${t}</p>
                <div class="small-window-protocol-info">
                    <i class="small-window-protocol-icon">
                        ${s?ge.https:ge.http}
                    </i>
                    <p class="small-window-website-host">${n.host}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${i.length?`
                    <i class="small-window-control-image-view">
                        ${ge.image}
                    </i>
                    `:""}
                <i class="small-window-control-open-blank">
                    ${ge.openBlank}
                </i>
                <i class="small-window-control-close">
                    ${ge.close}
                </i>
            </div>
        </div>`,o=D.drawer({title:{enable:true,text:l,html:true,style:"height: auto;line-height: normal;"},content:{text:`
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${e}" style="width:100%; height:100%;">
                </iframe>
                `,html:true},mask:{enable:true,clickEvent:{toClose:true},clickCallBack(T,P){V.quitGestureBackMode();}},btn:{ok:{enable:false},cancel:{enable:false},close:{enable:false}},direction:"bottom",size:"92%",borderRadius:18,style:Lt}),r=o.$shadowRoot.querySelector(".small-window-website-icon"),c=o.$shadowRoot.querySelector(".refresh-icon"),m=o.$shadowRoot.querySelector(".small-window-control-image-view"),d=o.$shadowRoot.querySelector(".small-window-control-open-blank"),p=o.$shadowRoot.querySelector(".small-window-control-close"),u=o.$shadowRoot.querySelector(".small-window-title-text");this.$el.$refreshIcon=c,this.$el.$webSiteIcon=r;let y=o.$shadowRoot.querySelector("iframe"),g=o.$shadowRoot.querySelector(".small-window-drag"),b=D.fn.Utils.AnyTouch(),$=new b(g),k=o.$pops,E=a.height(k);$.on("pan",T=>{T.phase=="move"&&T.displacementY>0&&(k.style.transition="none",k.style.height=Math.abs(E-T.distanceY)+"px"),T.isEnd&&(k.style.transition="0.2s ease-in",parseInt(k.style.height)>window.innerHeight/2?k.style.height=E+"px":o.close());});let V=new Rt({hash:this.$key.smallWindow,useUrl:true,win:w,beforeHistoryBackCallBack:T=>{o.close();}});V.enterGestureBackMode(),a.on(u,"click",T=>{a.preventEvent(T),f.copy(`『${t}』 - ${e}`),_.success("已复制链接");}),a.on(m,"click",T=>{a.preventEvent(T),h.info("查看图片",i);var P="";i.forEach(F=>{P+=`<li><img data-src="${F}"></li>`;});var N=a.toElement(`<ul>${P}</ul>`,false,false);let B=new Ke(N,{inline:false,url:"data-src",zIndex:Ae(),hidden:()=>{B.destroy();}});B.zoomTo(1),B.show();}),a.on(p,"click",T=>{a.preventEvent(T),V.quitGestureBackMode();}),a.on(d,"click",T=>{a.preventEvent(T),window.open(e,"_blank");}),a.on(r,"click",T=>{a.preventEvent(T),y.contentWindow.location.reload(),this.checkIframeReadyState(y);}),this.checkIframeReadyState(y);},async handleForumPost(t){t.forEach(e=>{if(e.getAttribute("data-injection-small-window"))return;let i=a.text(e.querySelector(".mmlist_li_box h2 a"));(i==""||i==null)&&(i=a.text(e.querySelector(".mmlist_li_box a"))),i=i.trim();let n=e.querySelector(".mmlist_li_box a").href;var s=[];e.setAttribute("data-injection-small-window","true"),e.setAttribute("data-injection-small-window-url",n),e.setAttribute("data-injection-small-window-title",i),e.querySelectorAll(".comiis_pyqlist_img img").forEach(o=>{s.push(o.getAttribute("src"));}),e.querySelectorAll(".comiis_pyqlist_imgs img").forEach(o=>{s.push(o.getAttribute("src"));}),e.querySelectorAll(".mmlist_li_box a").forEach(o=>{o.removeAttribute("href"),o.setAttribute("data-href",n);});let l=e.querySelector(".mmlist_li_box");a.on(l,"click",function(o){var r=Number(o.clientX);document.body.offsetWidth/2>r?window.location.href=n:nt.showSmallWindow(i,n,s);});});},checkIframeReadyState(t){this.showRefreshIcon();let e=setInterval(()=>{t.contentWindow&&(clearInterval(e),a.createDOMUtils({document:t.contentWindow.document,window:t.contentWindow,globalThis:t.contentWindow,self:t.contentWindow,top}).onReady(()=>{h.success("小窗内容已加载完毕"),this.hideRefreshIcon();}));},400);},hideRefreshIcon(){this.$el.$refreshIcon.style.display="none",this.$el.$webSiteIcon.style.display="";},showRefreshIcon(){this.$el.$refreshIcon.style.display="",this.$el.$webSiteIcon.style.display="none";}},Mt={init(){H.onReady(()=>{S.execMenuOnce("mt-guide-showLatestPost",()=>{this.showLatestPost();});});},showLatestPost(){h.info("显示最新帖子");async function t(){let e=await U.get("/forum.php?mod=guide&view=hot",{fetch:true,allowInterceptConfig:false});if(!e.status){_.error("获取轮播失败");return}if(e.data.responseText.indexOf('<script src="/_guard/auto.js"><\/script>')!==-1){_.error("获取轮播失败 未知的/_guard/auto.js文件");return}var i=H.toElement(e.data.responseText,true,true),n=i.querySelectorAll('div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul');if(n.length===0){_.error("获取轮播失败");return}else {var s=[];n[n.length-1].querySelectorAll("a").forEach(l=>{s.push({href:l.getAttribute("href"),title:l.getAttribute("title")});});}return s}t().then(e=>{if(!e)return;Y(`
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
            `);var i="";f.sortListByProperty(e,s=>{var l=s.href.match(/thread-(.+?)-/i);return parseInt(l[l.length-1])},true),h.info("导读内容",e),e.forEach(s=>{i+=`
                <li>
                    <span>新帖</span>
                    <a href="${s.href}" title="${s.title}" target="_blank">${s.title}</a>
                </li>`;});let n=document.querySelector(".comiis_forumlist.comiis_xznlist");H.before(n,`<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${i}</ul></div>`);});}},Te=function(t,e,i,n,s,l,o,r,c,m){const d={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:n,buttonIsRightIcon:s,buttonIconIsLoading:l,buttonType:o,buttonText:i,callback(p){typeof r=="function"&&r(p);},afterAddToUListCallBack:c};return Reflect.set(d.attributes,De,()=>{d.disable=false;}),d},ue=function(t,e,i,n,s,l="",o,r){const c={text:t,type:"input",inputType:"number",attributes:{},props:{},description:n,placeholder:l,afterAddToUListCallBack:o,getValue(){return this.props[M].get(e,i)},callback(m,d,p){this.props[M].set(e,d);}};return Reflect.set(c.attributes,te,e),Reflect.set(c.attributes,ie,i),be.initComponentsStorageApi("input",c,{get(m,d){return S.getValue(m,d)},set(m,d){S.setValue(m,d);}}),c},je=function(t,e,i,n,s,l="",o,r){const c={text:t,type:"input",inputType:"password",attributes:{},props:{},description:n,placeholder:l,afterAddToUListCallBack:o,getValue(){return this.props[M].get(e,i)},callback(m,d){this.props[M].set(e,d);}};return Reflect.set(c.attributes,te,e),Reflect.set(c.attributes,ie,i),be.initComponentsStorageApi("input",c,{get(m,d){return S.getValue(m,d)},set(m,d){S.setValue(m,d);}}),c},We=function(t,e,i,n,s,l){const o={type:"own",attributes:{},props:{},createLIElement:t,afterAddToUListCallBack:l};return Reflect.set(o.attributes,De,()=>false),typeof i=="object"&&i!==null&&Reflect.set(o.attributes,Je,i),o},Ge=function(t,e,i,n,s,l,o){const r={text:t,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[M].get(e,i)},callback(c){if(c==null)return;const m=c.value;if(h.info(`选择：${c.text}`),typeof s=="function"&&s(c))return;this.props[M].set(e,m);},data:n};return Reflect.set(r.attributes,te,e),Reflect.set(r.attributes,ie,i),be.initComponentsStorageApi("select",r,{get(c,m){return S.getValue(c,m)},set(c,m){S.setValue(c,m);}}),r},L=function(t,e,i=false,n,s,l,o,r,c){const m={text:t,type:"switch",description:s,disabled:o,attributes:{},props:{},getValue(){return this.props[M].get(e,i)},callback(d,p){const u=!!p;h.success(`${u?"开启":"关闭"} ${t}`),this.props[M].set(e,u);},afterAddToUListCallBack:(...d)=>{}};return Reflect.set(m.attributes,te,e),Reflect.set(m.attributes,ie,i),be.initComponentsStorageApi("switch",m,{get(d,p){return S.getValue(d,p)},set(d,p){S.setValue(d,p);}}),m},ye=function(t,e,i,n,s,l="",o,r){const c={text:t,type:"textarea",attributes:{},props:{},description:n,placeholder:l,disabled:o,getValue(){const d=this.props[M].get(e,i);return Array.isArray(d)?d.join(`
`):d},callback(m,d){this.props[M].set(e,d);}};return Reflect.set(c.attributes,te,e),Reflect.set(c.attributes,ie,i),be.initComponentsStorageApi("switch",c,{get(m,d){return S.getValue(m,d)},set(m,d){S.setValue(m,d);}}),c},be={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new re.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,i){let n;this.hasStorageApi(t)?n=this.getStorageApi(t):n=i,this.setComponentsStorageApiProperty(e,n);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,M,e);}},J=function(t,e,i,n,s,l="",o="text",r,c){const m={text:t,type:"input",inputType:o,attributes:{},props:{},description:n,placeholder:l,afterAddToUListCallBack:r,getValue(){return this.props[M].get(e,i)},callback(d,p){d.target.validity.valid,this.props[M].set(e,p);}};return Reflect.set(m.attributes,te,e),Reflect.set(m.attributes,ie,i),be.initComponentsStorageApi("input",m,{get(d,p){return S.getValue(d,p)},set(d,p){S.setValue(d,p);}}),m};class st{option;constructor(e){this.option=e;}async showView(){const e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:f.assign({ok:{callback:async()=>{await l();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${D.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const n=e.$shadowRoot.querySelector(".rule-form-ulist"),s=await this.option.getView(await this.option.data());a.append(n,s);const l=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class Ve{option;constructor(e){this.option=e;}async showView(e){const i=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${D.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(){i.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const r=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(h.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){_.error("清理失败");return}else _.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:n,$externalSelect:s,$ruleValueSelect:l,$searchInput:o}=this.parseViewElement(i.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let r=null,c=null;Array.isArray(this.option.bottomControls?.filter?.option)&&a.append(s,this.option.bottomControls?.filter?.option.map(p=>{const u=a.createElement("option",{innerText:p.name});return Reflect.set(u,"data-value",p),u})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&a.append(l,this.option.bottomControls?.filter?.inputOption.map(p=>{const u=a.createElement("option",{innerText:p.name});return Reflect.set(u,"data-value",p),u})),a.on(s,"change",async()=>{const p=s[s.selectedIndex],u=Reflect.get(p,"data-value");typeof u?.selectedCallBack=="function"&&u.selectedCallBack(u),r=u,await d(false);}),a.on(l,"change",async()=>{const p=l[l.selectedIndex],u=Reflect.get(p,"data-value");typeof u?.selectedCallBack=="function"&&u.selectedCallBack(u),c=u,await d(false);}),a.onInput(o,f.debounce(async()=>{await d(false);}));const m=()=>{const p=s[s.selectedIndex];r=Reflect.get(p,"data-value");const u=l[l.selectedIndex];c=Reflect.get(u,"data-value");},d=async p=>{this.clearContent(i.$shadowRoot),p&&m();const u=await this.option.data(),y=[],g=a.val(o);for(let b=0;b<u.length;b++){const $=u[b];if(typeof e=="function"){const k=await e($);if(typeof k=="boolean"&&!k)continue}if(r){const k=await r?.filterCallBack?.($);if(typeof k=="boolean"&&!k)continue}if(c){let k=true;if(g===""?k=true:k=false,k||(k=await c?.filterCallBack?.($,g)),!k)continue}y.push($);}await this.appendRuleItemElement(i.$shadowRoot,y);};if(typeof e=="object"&&e!=null){let p;typeof e.external=="number"?p=e.external:p=Array.from(s.options).findIndex(y=>Reflect.get(y,"data-value").value===e.external),p!==-1&&(s.selectedIndex=p);let u;typeof e.rule=="number"?u=e.rule:u=Array.from(l.options).findIndex(y=>Reflect.get(y,"data-value").value===e.rule),u!==-1&&(l.selectedIndex=u);}await d(true);}else a.hide(n,false);}showEditView(e,i,n,s,l,o){let r=async m=>{if(m){if(typeof o=="function"){let d=await this.option.getData(i);o(d);}}else if(e||await this.option.deleteData(i),typeof l=="function"){let d=await this.option.getData(i);l(d);}};new st({title:e?"编辑":"添加",data:()=>i,dialogCloseCallBack:r,getView:async m=>await this.option.itemControls.edit.getView(m,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async m=>{m.close(),await r(false);}},close:{callback:async m=>{m.close(),await r(false);}}},onsubmit:async(m,d)=>{let p=await this.option.itemControls.edit.onsubmit(m,e,d);return p.success?e?(_.success("修改成功"),n&&await this.updateRuleItemElement(p.data,s,n)):n&&await this.appendRuleItemElement(n,p.data):e&&h.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const i=e.querySelector(".rule-view-container"),n=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),s=e.querySelector(".rule-view-search-container"),l=s.querySelector(".pops-panel-select .select-rule-status"),o=s.querySelector(".pops-panel-select .select-rule-value"),r=s.querySelector(".pops-panel-input input");return {$container:i,$deleteBtn:n,$searchContainer:s,$externalSelect:l,$ruleValueSelect:o,$searchInput:r}}parseRuleItemElement(e){const i=e.querySelector(".rule-controls-enable"),n=i.querySelector(".pops-panel-switch"),s=i.querySelector(".pops-panel-switch__input"),l=i.querySelector(".pops-panel-switch__core"),o=e.querySelector(".rule-controls-edit"),r=e.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:n,$enableSwitchInput:s,$enableSwitchCore:l,$edit:o,$delete:r,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,i){const n=await this.option.getDataItemName(e),s=a.createElement("div",{className:"rule-item",innerHTML:`
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
					${D.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${D.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(s,"data-rule",e);const l="pops-panel-switch-is-checked",{$enable:o,$enableSwitch:r,$enableSwitchCore:c,$enableSwitchInput:m,$delete:d,$edit:p}=this.parseRuleItemElement(s);return this.option.itemControls.enable.enable?(a.on(c,"click",async()=>{let u=false;r.classList.contains(l)?(r.classList.remove(l),u=false):(r.classList.add(l),u=true),m.checked=u,await this.option.itemControls.enable.callback(e,u);}),await this.option.itemControls.enable.getEnable(e)&&r.classList.add(l)):o.remove(),this.option.itemControls.edit.enable?a.on(p,"click",u=>{a.preventEvent(u),this.showEditView(true,e,i,s,y=>{e=null,e=y;});}):p.remove(),this.option.itemControls.delete.enable?a.on(d,"click",u=>{a.preventEvent(u);const y=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{h.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(_.success("成功删除该数据"),s.remove(),await this.updateDeleteAllBtnText(i),y.close()):_.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),s}async appendRuleItemElement(e,i){const{$container:n}=this.parseViewElement(e),s=[],l=Array.isArray(i)?i:[i];for(let o=0;o<l.length;o++){const r=l[o],c=await this.createRuleItemElement(r,e);s.push(c);}return a.append(n,s),await this.updateDeleteAllBtnText(e),s}async updateRuleContaienrElement(e){this.clearContent(e);const i=await this.option.data();await this.appendRuleItemElement(e,i),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,i,n){const s=await this.createRuleItemElement(e,n);i.after(s),i.remove();}clearContent(e){const{$container:i}=this.parseViewElement(e);a.html(i,"");}setDeleteBtnText(e,i,n=false){const{$deleteBtn:s}=this.parseViewElement(e);n?a.html(s,i):a.text(s,i);}async updateDeleteAllBtnText(e){let i=await this.option.data();this.setDeleteBtnText(e,`清空所有(${i.length})`);}}const At={$key:{STORAGE_KEY:"mt-own-block-rule"},$data:{isRegister:false},init(){this.registerMenu();const t=new f.LockFunction(()=>{this.execRule();});f.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});},registerMenu(){this.$data.isRegister||(this.$data.isRegister=true,G.registerLeftMenu({name:"我的屏蔽",icon:"",iconColor:"#000",callback:()=>{this.showView();}}));},getTemplateData(){return {uuid:f.generateUUID(),enable:true,name:"",data:{userName:"",userUID:"",userLevel:"",postUrl:"",postTitle:"",postContent:"",postPlateName:""}}},showView(){const t=D.fn.PanelHandlerComponents();function e(n){return {get(s,l){return n[s]??l},set(s,l){n[s]=l;}}}new Ve({title:"我的屏蔽",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(o=>o.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,s)=>{n.enable=s,this.updateData(n);}},edit:{enable:true,getView:(n,s)=>{let l=document.createDocumentFragment();s||(n=this.getTemplateData());let o=L("启用","enable",true);Reflect.set(o.props,M,e(n));let r=t.createSectionContainerItem_switch(o).$el,c=J("规则名称","name","","",void 0,"必填");Reflect.set(c.props,M,e(n));let m=t.createSectionContainerItem_input(c).$el,d=J("用户名","userName","","",void 0,"可正则");Reflect.set(d.props,M,e(n.data));let p=t.createSectionContainerItem_input(d).$el,u=J("用户UID","userUID","","",void 0,"可正则");Reflect.set(u.props,M,e(n.data));let y=t.createSectionContainerItem_input(u).$el,g=J("用户等级","userLevel","","",void 0,"可正则");Reflect.set(g.props,M,e(n.data));let b=t.createSectionContainerItem_input(g).$el,$=J("帖子url","postUrl","","",void 0,"可正则");Reflect.set($.props,M,e(n.data));let k=t.createSectionContainerItem_input($).$el,E=J("帖子标题","postTitle","","",void 0,"可正则");Reflect.set(E.props,M,e(n.data));let V=t.createSectionContainerItem_input(E).$el,T=J("帖子内容","postContent","","",void 0,"可正则");Reflect.set(T.props,M,e(n.data));let P=t.createSectionContainerItem_input(T).$el,N=J("帖子所在的板块名","postPlateName","","",void 0,"可正则");Reflect.set(N.props,M,e(n.data));let B=t.createSectionContainerItem_input(N).$el;return l.appendChild(r),l.appendChild(m),l.appendChild(p),l.appendChild(y),l.appendChild(b),l.appendChild(k),l.appendChild(V),l.appendChild(P),l.appendChild(B),l},onsubmit:(n,s,l)=>{let o=n.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return s&&(r.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,t.$data.nodeStoreConfigKey),d=Reflect.get(m,"attributes"),p=Reflect.get(c,M),u=Reflect.get(d,te),y=Reflect.get(d,ie),g=p.get(u,y);Reflect.has(r,u)?Reflect.set(r,u,g):Reflect.has(r.data,u)?Reflect.set(r.data,u,g):h.error(`${u}不在数据中`);}),r.name.trim()===""?(_.error("规则名称不能为空"),{success:false,data:r}):s?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}},bottomControls:{filter:{enable:true,option:[{name:"无",value:"",filterCallBack(){return  true}},{name:"启用",value:"enable",filterCallBack(n){return n.enable}},{name:"未启用",value:"notEnable",filterCallBack(n){return !n.enable}}],inputOption:[{name:"规则名",value:"name",filterCallBack(n,s){return !!n.name.match(s)}}]}}}).showView();},execRule(){const t=this.getData();function e(i){for(const n of t){const s=n.data;if(Object.keys(s).find(o=>{const r=s[o];if(f.isNotNull(r)){const c=new RegExp(r,"i"),m=Reflect.get(i,o);if(typeof m=="string"&&f.isNotNull(m)&&m.match(c))return h.info("屏蔽",[s,m]),true}return  false}))return  true}return  false}(R.isGuide()||R.isPlate()||R.isPost()||R.isSpace())&&(z(".comiis_forumlist .forumlist_li").forEach(i=>{let n=i.querySelector("a.top_user"),s=n.href.match(ee.uid),l={userName:n.innerText,userUID:s[s.length-1].trim(),userLevel:i.querySelector("span.top_lev").innerText.replace("Lv.",""),postUrl:i.querySelector(".mmlist_li_box a").getAttribute("href")||i.querySelector(".mmlist_li_box a").getAttribute("data-href"),postTitle:i.querySelector(".mmlist_li_box h2 a")?.innerText||"",postContent:i.querySelector(".mmlist_li_box .list_body").innerText,postPlateName:(i.querySelector(".forumlist_li_time a.f_d")||i.querySelector(".comiis_xznalist_bk.cl")).innerText.replace(//g,"").replace(/\s*/g,"").replace(/来自/g,"")};f.isNull(l.postPlateName)&&(l.postPlateName=C("#comiis_wx_title_box").innerText),e(l)&&i.remove();}),z(".comiis_postlist .comiis_postli").forEach(i=>{let n=i.querySelector("a.top_user"),s=n.href.match(ee.uid),l={userName:n.innerText,userUID:s[s.length-1].trim(),userLevel:i.querySelector("a.top_lev").innerText.replace("Lv.",""),postUrl:void 0,postTitle:void 0,postContent:i.querySelector(".comiis_message_table").innerText,postPlateName:void 0};e(l)&&i.remove();})),R.isMessageList()&&z(".comiis_pms_box .comiis_pmlist ul li").forEach(i=>{let n=i.querySelector("a.b_b").href.match(ee.uid),s={userName:i.querySelector("h2").innerText.replace(i.querySelector("h2 span").innerText,"").replace(/\s*/,""),userUID:n[n.length-1].trim(),userLevel:void 0,postUrl:i.querySelector("a.b_b").href,postTitle:void 0,postContent:i.querySelector("p.f_c").innerText.trim(),postPlateName:void 0};e(s)&&i.remove();});},getData(){return Q(this.$key.STORAGE_KEY,[])},setData(t){K(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),K(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(s=>s.uuid==t.uuid),n=false;return i!==-1&&(n=true,e[i]=t),this.setData(e),n},deleteData(t){let e=this.getData(),i=e.findIndex(s=>s.uuid==t.uuid),n=false;return i!==-1&&(n=true,e.splice(i,1)),this.setData(e),n},clearData(){le(this.$key.STORAGE_KEY);}},Dt={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),R.isPost()){let t=this.getData();if(!t.enable)return;let e=new f.LockFunction(()=>{this.runFilter(t);});f.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},registerMenu(){G.registerLeftMenu({name:"评论过滤器",icon:"",iconColor:"#ff0019",callback:()=>{this.showView();}});},runFilter(t){let e=function(n){for(const s of t.userBlackList)if(s==n.userName||s==n.userUID)return h.success("评论过滤器：黑名单用户",n),true;return  false},i=function(n){for(const s of t.userWhiteList)if(s===n.userName||s===n.userUID)return h.success("评论过滤器：白名单用户",n),true;return  false};z(".comiis_postlist .comiis_postli").forEach(n=>{if(n.querySelector("#comiis_allreplies"))return;let s=n.querySelector("a.top_user"),l=s.href.match(ee.uid),o={userName:s?.innerText||"",userUID:l&&l[l?.length-1]?.trim()||"",content:n.querySelector(".comiis_message_table")?.innerText?.trim()||"",isAuthor:!!n.querySelector("span.top_lev")};if(!i(o)){if(t.replyFlag&&n.querySelector(".comiis_quote")){let r=n.querySelector(".comiis_quote");this.$el.isFilterElementHTML.push(r.outerHTML),r.remove();}if(!(o.isAuthor&&!t.avatarFlag)){if(e(o)){this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}if(!(typeof t.minLength=="number"&&t.minLength>o.content.length)&&!(typeof t.keywordLength=="number"&&t.keywordLength<o.content.length))for(const r of t.keywords){if(typeof r!="string")continue;let c=new RegExp(r);if(o.content.match(c)){console.log("评论过滤器：",o),this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}}}}});},showView(){const t=this;function e(s){return {get(l,o){let r=t.getData(),c=Reflect.get(r,l,o);return (l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(c=c.join(`
`)),c},set(l,o){(l==="keywords"||l==="userWhiteList"||l==="userBlackList")&&(o=o.split(`
`).filter(r=>r.trim()!="")),Reflect.set(s,l,o),t.setData(s);}}}let i=D.fn.PanelHandlerComponents();new st({title:"评论过滤器",data:()=>this.getData(),getView:s=>{let l=document.createDocumentFragment(),o=L("启用","enable",true);Reflect.set(o.props,M,e(s));let r=i.createSectionContainerItem_switch(o).$el,c=L("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(c.props,M,e(s));let m=i.createSectionContainerItem_switch(c).$el,d=L("处理作者评论","avatarFlag",false);Reflect.set(d.props,M,e(s));let p=i.createSectionContainerItem_switch(d).$el,u=L('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(u.props,M,e(s));let y=i.createSectionContainerItem_switch(u).$el,g=ue("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(g.props,M,e(s));let b=i.createSectionContainerItem_input(g).$el,$=ue("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set($.props,M,e(s));let k=i.createSectionContainerItem_input($).$el,E=ye("评论关键字","keywords","","多个关键字换行分割");Reflect.set(E.props,M,e(s));let V=i.createSectionContainerItem_textarea(E).$el,T=ye("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(T.props,M,e(s));let P=i.createSectionContainerItem_textarea(T).$el,N=ye("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(N.props,M,e(s));let B=i.createSectionContainerItem_textarea(N).$el;return l.append(r,m,p,y,b,k,V,P,B),l},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(s,l)=>{console.log(this.$el.isFilterElementHTML),D.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(o=>o.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:true},btn:{ok:{type:"default",text:"关闭"}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"});}}},dialogCloseCallBack(s){},onsubmit:(s,l)=>({success:true,data:l}),style:`
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
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return Q(this.$key.STORAGE_KEY,this.getTemplateData())},setData(t){K(this.$key.STORAGE_KEY,t);}},Pt={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){G.registerLeftMenu({name:"商品上架提醒",icon:"",iconColor:"#2376b7",callback:()=>{this.showView();}});},async runRule(){async function t(){let n=await U.get("/keke_integralmall-keke_integralmall.html",{fetch:true,allowInterceptConfig:false});if(!n.status){_.error("【积分商城】获取数据失败");return}let s=[];return a.toElement(n.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(o=>{s.push({name:a.text(o.querySelector(".mall-info a > *:first-child"))||a.text(o.querySelector(".mall-info a")),price:a.text(o.querySelector(".mall-info span.discount-price i")),endTime:a.text(o.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(o.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),s}if(R.isPointsMall())return;let e=this.getData();if(!e.length)return;let i=await t();if(i){for(const n of i)for(const s of e)if(s.enable&&n.name.match(new RegExp(s.productName,"i"))&&!isNaN(n.remainingQuantity)&&n.remainingQuantity>0){h.success("成功匹配对应商品",s,n),D.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${n.price}金币，仅剩${n.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(s)?_.success("删除成功"):_.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:f.generateUUID(),enable:true,name:"",productName:""}},showView(){let t=D.fn.PanelHandlerComponents();function e(n){return {get(s,l){return n[s]??l},set(s,l){n[s]=l;}}}new Ve({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(o=>o.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,s)=>{n.enable=s,this.updateData(n);}},edit:{enable:true,getView:(n,s)=>{let l=document.createDocumentFragment();s||(n=this.getTemplateData());let o=L("启用","enable",true);Reflect.set(o.props,M,e(n));let r=t.createSectionContainerItem_switch(o).$el,c=J("规则名称","name","","",void 0,"必填");Reflect.set(c.props,M,e(n));let m=t.createSectionContainerItem_input(c).$el,d=J("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(d.props,M,e(n));let p=t.createSectionContainerItem_input(d).$el;return l.append(r,m,p),l},onsubmit:(n,s,l)=>{let o=n.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return s&&(r.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,t.$data.nodeStoreConfigKey),d=Reflect.get(m,"attributes"),p=Reflect.get(c,M),u=Reflect.get(d,te),y=Reflect.get(d,ie),g=p.get(u,y);Reflect.has(r,u)?Reflect.set(r,u,g):h.error(`${u}不在数据中`);}),r.name.trim()===""?(_.error("规则名称不能为空"),{success:false,data:r}):s?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}},bottomControls:{filter:{enable:true,option:[{name:"无",value:"",filterCallBack(n){return  true}},{name:"启用",value:"enable",filterCallBack(n){return n.enable}},{name:"未启用",value:"notEnable",filterCallBack(n){return !n.enable}}],inputOption:[{name:"规则名",value:"name",filterCallBack(n,s){return !!n.name.match(s)}},{name:"商品名",value:"productName",filterCallBack(n,s){return !!n.productName.match(s)}}]}}}).showView();},getData(){return Q(this.$key.STORAGE_KEY,[])},setData(t){K(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),K(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(s=>s.uuid==t.uuid),n=false;return i!==-1&&(n=true,e[i]=t),this.setData(e),n},deleteData(t){let e=this.getData(),i=e.findIndex(s=>s.uuid==t.uuid),n=false;return i!==-1&&(n=true,e.splice(i,1)),this.setData(e),n},clearData(){le(this.$key.STORAGE_KEY);}},Vt={$key:{STORAGE_KEY:"mt-customizeUserLabels-rule"},init(){if(this.registerMenu(),R.isPage()||R.isGuide()||R.isPlate()||R.isPost()||R.isSearch()||R.isSpace()){let t=this.getData();if(!t.length)return;let e=new f.LockFunction(()=>{this.runRule(t);});f.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},registerMenu(){G.registerLeftMenu({name:"自定义用户标签",icon:"",iconColor:"#c70ea6",callback:()=>{this.showView();}});},showView(){let t=D.fn.PanelHandlerComponents();function e(n){return {get(s,l){return n[s]??l},set(s,l){n[s]=l;}}}new Ve({title:"自定义用户标签",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(o=>o.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,s)=>{n.enable=s,this.updateData(n);}},edit:{enable:true,getView:(n,s)=>{let l=document.createDocumentFragment();s||(n=this.getTemplateData());let o=L("启用","enable",true);Reflect.set(o.props,M,e(n));let r=t.createSectionContainerItem_switch(o).$el,c=J("规则名称","name","","",void 0,"必填");Reflect.set(c.props,M,e(n));let m=t.createSectionContainerItem_input(c).$el,d=J("用户UID","userUID","","",void 0,"必填，可正则，注意转义");Reflect.set(d.props,M,e(n));let p=t.createSectionContainerItem_input(d).$el,u=J("标签名","labelName","","",void 0,"必填");Reflect.set(u.props,M,e(n));let y=t.createSectionContainerItem_input(u).$el,g=J("标签颜色","labelColor","","");Reflect.set(g.props,M,e(n));let b=t.createSectionContainerItem_input(g).$el,$=b.querySelector("input");b.querySelector(".pops-panel-input__suffix")?.remove(),$.setAttribute("type","color"),a.css($,{margin:"unset",padding:"unset",width:"80px"});let k=J("标签CSS","labelStyle","","");Reflect.set(k.props,M,e(n));let E=t.createSectionContainerItem_input(k).$el,V=ye("标签点击事件","labelClickEvent","","");Reflect.set(V.props,M,e(n));let T=t.createSectionContainerItem_textarea(V).$el;return l.append(r,m,p,y,b,E,T),l},onsubmit:(n,s,l)=>{let o=n.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return s&&(r.uuid=l.uuid),o.forEach(c=>{let m=Reflect.get(c,t.$data.nodeStoreConfigKey),d=Reflect.get(m,"attributes"),p=Reflect.get(c,M),u=Reflect.get(d,te),y=Reflect.get(d,ie),g=p.get(u,y);Reflect.has(r,u)?Reflect.set(r,u,g):h.error(`${u}不在数据中`);}),r.name.trim()===""?(_.error("规则名称不能为空"),{success:false,data:r}):r.userUID.trim()===""?(_.error("用户UID不能为空"),{success:false,data:r}):r.labelName.trim()===""?(_.error("标签名不能为空"),{success:false,data:r}):s?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}},bottomControls:{filter:{enable:true,option:[{name:"无",value:"",filterCallBack(n){return  true}},{name:"启用",value:"enable",filterCallBack(n){return n.enable}},{name:"未启用",value:"notEnable",filterCallBack(n){return !n.enable}}],inputOption:[{name:"规则名",value:"name",filterCallBack(n,s){return !!n.name.match(s)}},{name:"标签名",value:"label-name",filterCallBack(n,s){return !!n.labelName.match(s)}}]}}}).showView();},runRule(t){let e=f.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist());e.length&&e.forEach(i=>{if(i.hasAttribute("data-custom-label"))return;i.setAttribute("data-custom-label","true");let n=Array.from(i.querySelectorAll("a")).map(s=>{let o=s.href.match(ee.uid);if(o)return o[o.length-1]}).filter(s=>s!=null);if(n.length){let s=n[0],l=t.filter(c=>c.enable&&s.match(new RegExp(c.userUID)));if(!l.length)return;let o=document.createElement("a"),r=i.querySelector(".top_lev");l.forEach(c=>{o.className=r.className,o.classList.add("gm-custom-label"),o.style.cssText=`
                    background: ${c.labelColor} !important;${c.labelStyle||""}`,o.innerHTML=c.labelName,a.on(o,"click",async m=>{a.preventEvent(m),f.isNotNull(c.labelClickEvent)&&w.eval(c.labelClickEvent);}),r.parentElement.append(o);});}});},getTemplateData(){return {uuid:f.generateUUID(),enable:true,name:"",userUID:"",labelName:"",labelColor:"",labelStyle:"",labelClickEvent:""}},getData(){return Q(this.$key.STORAGE_KEY,[])},setData(t){K(this.$key.STORAGE_KEY,t);},addData(t){let e=this.getData();return e.findIndex(n=>n.uuid==t.uuid)===-1?(e.push(t),K(this.$key.STORAGE_KEY,e),true):false},updateData(t){let e=this.getData(),i=e.findIndex(s=>s.uuid==t.uuid),n=false;return i!==-1&&(n=true,e[i]=t),this.setData(e),n},deleteData(t){let e=this.getData(),i=e.findIndex(s=>s.uuid==t.uuid),n=false;return i!==-1&&(n=true,e.splice(i,1)),this.setData(e),n},clearData(){le(this.$key.STORAGE_KEY);}},Nt=`.f_c,
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
`,Bt=()=>({"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif","[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png","[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}),Le={parseText(t){const e=Bt();let i=t.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);i&&i.forEach(v=>{let x=v.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/),q=x?x[x.length-1]:"",I=a.attr(`#aimg_${q}`,"title"),A=a.attr(`#aimg_${q}`,"src");A||(I="该图片不存在"),t=t.replace(v,`<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${q}" src="${A}" alt="${I}" title="${I}"></span>`);});let n=t.match(/\[code\]([\s\S]*?)\[\/code\]/g);n&&n.forEach(v=>{let x=v.match(/\[code\]([\s\S]*?)\[\/code\]/),q=x?x[x.length-1]:"",I="",A=q.split(`
`);A.length==1?I=`<li>${q}</li>`:Array.from(A).forEach((W,X)=>{X==A.length-1?I=`${I}<li>${W}</li>`:I=`${I}<li>${W}<br></li>`;}),t=t.replace(v,`
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${I}</ol></div></div>`);});let s=t.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);s&&s.forEach(v=>{let x=v.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/),q=v.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/),I=x?x[x.length-1]:"",A=q?q[q.length-1]:"";t=t.replace(v,`<a href="${I}" target="_blank">${A}</a>`);});let l=t.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);l&&l.forEach(v=>{let x=v.match(/\[color=([\s\S]*?)\][\s\S]*\[\/color\]/),q=v.match(/\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/),I=x?x[x.length-1]:"",A=q?q[q.length-1]:"";t=t.replace(v,`<font color="${I}">${A}</font>`);});let o=t.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);o&&o.forEach(v=>{let x=v.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/),q=v.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/),I=x?x[x.length-1]:"",A=q?q[q.length-1]:"";t=t.replace(v,`<font size="${I}">${A}</font>`);});let r=t.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);r&&r.forEach(v=>{let x=null,q=null,I=v.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);I&&(I=I[I.length-1].split(","),x=I[0],q=I[1]),x=x||"",q=q||"";let A=v.match(/\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/),W="";A&&(A[A.length-1]==null?W=A[A.length-2]:W=A[A.length-1]),t=t.replace(v,`<img loading="lazy" src="${W}" border="0" alt="" width="${x}" height="${q}" crossoriginNew="anonymous">`);});let c=t.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);c&&c.forEach(v=>{let x=v.match(/\[hide\]([\s\S]*?)\[\/hide\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${q}</div>`);});let m=t.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);m&&m.forEach(v=>{let x=v.match(/\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/),q=x?x[x.length-2]:"";q=q.split(",");let I=q.length==2?q[1]:"";t=t.replace(v,`<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${I} 才可浏览</div>`);});let d=t.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);d&&d.forEach(v=>{let x=v.match(/\[quote\]([\s\S]*?)\[\/quote\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${q}</blockquote></div>`);});let p=t.match(/\[free\]([\s\S]*?)\[\/free\]/g);p&&p.forEach(v=>{let x=v.match(/\[free\]([\s\S]*?)\[\/free\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<div class="comiis_quote bg_h f_c"><blockquote>${q}</blockquote></div>`);});let u=t.match(/\[b\]([\s\S]*?)\[\/b\]/g);u&&u.forEach(v=>{let x=v.match(/\[b\]([\s\S]*?)\[\/b\]/i),q=x?x[x.length-1]:"";t=t.replace(v,`<strong>${q}</strong>`);});let y=t.match(/\[u\]([\s\S]*?)\[\/u\]/g);y&&y.forEach(v=>{let x=v.match(/\[u\]([\s\S]*?)\[\/u\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<u>${q}</u>`);});let g=t.match(/\[i\]([\s\S]*?)\[\/i\]/g);g&&g.forEach(v=>{let x=v.match(/\[i\]([\s\S]*?)\[\/i\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<i>${q}</i>`);});let b=t.match(/\[s\]([\s\S]*?)\[\/s\]/g);b&&b.forEach(v=>{let x=v.match(/\[s\]([\s\S]*?)\[\/s\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<strike>${q}</strike>`);});let $=t.match(/\[([\s\S]+?)\]/g);$&&$.forEach(v=>{let x=e[v];x&&(t=t.replace(v,`<img loading="lazy" src="${x}" border="0" alt="" smilieid="">`));});let k=t.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);k&&k.forEach(v=>{let x=v.match(/\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/),q=x?x[x.length-1]:"";q&&(t=t.replace(v,`<ignore_js_op><span><iframe src="${q}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`));});let E=t.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);E&&E.forEach(v=>{let x=v.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/),q=v.match(/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/),I=x.length?x[x.length-1]:"",A=q.length?q[q.length-1]:"";(I||A)&&(t=t.replace(v,`<a href="mailto:${I}">${A}</a>`));});let V=t.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);V&&V.forEach(v=>{let x=v.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/),q=v.match(/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/),I=x.length?x[x.length-1]:"",A=q.length?q[q.length-1]:"";(I||A)&&(t=t.replace(v,`<div align="${I}">${A}</div>`));});let T=t.match(/\[qq\][\s\S]*?\[\/qq\]/g);T&&T.forEach(v=>{let x=v.match(/\[qq\]([\s\S]*?)\[\/qq\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<a href="http://wpa.qq.com/msgrd?v=3&uin=${q}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`);});let P=t.match(/\[td\][\s\S]+?\[\/td\]/g);P&&P.forEach(v=>{let x=v.match(/\[td\]([\s\S]*?)\[\/td\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<td>${q}</td>`);});let N=t.match(/\[tr\][\s\S]+?\[\/tr\]/g);N&&N.forEach(v=>{let x=v.match(/\[tr\]([\s\S]*?)\[\/tr\]/),q=x?x[x.length-1]:"";t=t.replace(v,`<tr>${q}</tr>`);});let B=t.match(/\[table\][\s\S]+?\[\/table\]/g);B&&B.forEach(v=>{let x=v.match(/\[table\]([\s\S]*?)\[\/table\]/),q=x?x[x.length-1]:"";q=q.replace(/\n/g,""),t=t.replace(v,`<table>${q}</table>`);});let F=t.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);return F&&F.forEach(v=>{let x=v.match(/\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/),q=v.match(/\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/),I=x?x[x.length-1]:"",A="";I==="a"?A="litype_2":I==="A"?A="litype_3":I.length===1&&I.match(/[0-9]{1}/)&&(A="litype_1");let W=q?q[q.length-1]:"",X=W.split("[*]");if(X.length>1){let ne="";X[0].replace(/[\s]*/,"")==""&&(X=X.slice(1)),Array.from(X).forEach(we=>{ne=`${ne}<li>${we}</li>`;}),W=ne;}W=W.replace(/\n/g,""),t=t.replace(v,`<ul type="${I}" class="${A}">${W}</ul>`);}),t},parseVoteText(){let t=["rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)","rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)"],e=z(".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"),i=parseInt(a.val("input#maxchoices"));i=isNaN(i)?0:i,i=i>0?i:0,i=i>e.length?e.length:i;let n=parseInt(a.val("input#polldatas"));n=isNaN(n)?0:n,w.$("input#visibilitypoll").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close");let s=!w.$("input#overt").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close"),l="",o="";e.forEach((r,c)=>{c>=20||(o=o+`
                    <li class="kmnop">
                        <input type="${i>1?"checkbox":"radio"}">
                        <label><i class="comiis_font f_d"></i>${r.value}</label>
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
                                <h2>${i>1?'多选投票<em class="f_c"> 最多可选 '+i+" 项</em>":"单选投票"}</h2>
                                <p class="f_c">共有 0 人参与投票</p>
                                ${n>0?` <p class="kmbtn">
                                <span class="bg_e">距结束还有:
                                ${n>1?'<em class="f_a">'+(n-1)+"</em> 天 ":""}<em class="f_a">23</em> 小时 <em class="f_a">59</em> 分钟</span>
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
                `,w.$(".gm_plugin_previewpostforum_html .postforum_vote").remove(),w.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show").children().eq(0).before(w.$(l));}},Se={$data:{db:new re.indexedDB("mt_full_reply_record","input_text"),get type(){return R.isPostPublish_voting()?"post-vote":"post"},get tid(){return O.getThreadId(window.location.href)},get pid(){return O.getPostId(window.location.href)}},$key:{noPublishSerializeText:"mt-editor-no-publish-serialize-text",noPublishVotingSerializeText:"mt-editor-no-publish-voting-serialize-text"},$el:{$title:null,$input:null,$form:null},init(){h.info("编辑器优化"),Y(Nt),this.overridePageEditor();},overridePageEditor(){const t=this;this.$el.$title=C("#needsubject"),this.$el.$form=C("#postform"),this.$el.$input=C("#needmessage"),a.hide(a.parent(".comiis_scrollTop_box"),false),a.css("#postform .comiis_post_from.mt15",{"margin-top":"0px !important"});let e=w.$("#postform .comiis_post_from #comiis_post_tab");w.$("#postform .comiis_post_from .comiis_post_ico").append(e),e.remove(),w.textarea_scrollHeight=()=>{};let i=w.$.fn.comiis_delete;w.$.fn.extend({comiis_delete:function(...c){let m=i.call(this,...c);return a.emit(t.$el.$input,"input"),m}}),a.hide(".comiis_btnbox",false),this.initVotePage(),w.$(".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"),Y(`
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
        `),a.attr("#filedata","multiple",true),a.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style"),a.on(document,"#comiis_pictitle_key li","click",function(){a.removeClass("#comiis_pictitle_key li","bg_f"),a.addClass(this,"bg_f"),w.$(".gm_plugin_chartbed .comiis_upbox").hide().eq(w.$(this).index()).fadeIn();},{overrideTarget:false});let n=parseInt(a.css("#comiis_head","height"))||0,s=parseInt(a.css("#comiis_sub","height"))||0,l=C("#pollm_c_1")?60:0,o=parseInt(a.css(".comiis_styli.comiis_flex","height"))||0,r=parseInt(a.css(".comiis_post_ico.comiis_minipost_icot","height"))||0;a.css("#needmessage","height",`${window.screen.height-n-s-48-o-r-10}px`),a.css("#needmessage","margin-bottom",l+"px"),R.isPostPublish_edit()&&a.val("#needsubject")===""?a.hide(".comiis_styli.comiis_flex",false):a.attr("#needsubject","placeholder","请输入完整的帖子标题 (1-80个字)"),a.attr("#needmessage","placeholder","来吧，尽情发挥吧..."),typeof w.comiis_addsmilies=="function"&&(w.comiis_addsmilies=c=>{w.$("#needmessage").comiis_insert(c),w.$("#needmessage")[0].dispatchEvent(new Event("input"));}),(S.getValue("mt-forum-post-editorOptimizationNormal-recordInputText")||S.getValue("mt-forum-post-editorOptimization-recordInputText"))&&(this.setInputChangeEvent(),this.initReplyText()),this.initDeleteBtn(),this.initSaveDraftBtn(),this.initSaveBtn(),this.initPostBtn(),this.initReplyBtn(),this.observerChangeEditorHeight(),this.listenResize(),this.initSelectPostingSection(),this.initUBB(),this.initImage(),this.initPreview(),this.initCharacterCount(),this.initSettingImmersionMode();},async initReplyText(){const t=this;let e=null,i=null,n=null;if(R.isPostPublish_newthread())h.info("新发布帖子的页面"),R.isPostPublish_voting()?(h.info("投票页面"),e=Q(this.$key.noPublishVotingSerializeText),n=()=>{le(t.$key.noPublishVotingSerializeText);}):(h.info("普通帖子页面"),e=Q(this.$key.noPublishSerializeText),n=()=>{le(this.$key.noPublishSerializeText);});else if(R.isPostPublish_edit()){h.info("草稿的页面"),h.info(`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`),(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await this.$data.db.get("data");if(l.data){let o=l.data.find(r=>{if(r.type===t.$data.type&&!(r.tid!==t.$data.tid||r.pid!==t.$data.pid))return  true});o&&(e=o.data,n=async()=>{let r=await this.$data.db.get("data");if(r.data){let c=r.data.findIndex(m=>{if(m.type===t.$data.type&&!(m.tid!==t.$data.tid||m.pid!==t.$data.pid))return  true});c!=-1&&(r.data.splice(c,1),await this.$data.db.save("data",r.data));}});}}else if(R.isPostPublish_reply()&&(h.info("回复页面"),S.getValue("mt-forum-post-editorOptimizationNormal-recordInputText"))){(await ae.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let l=await ae.$data.db.get("data");if(l.data){let o=l.data.find(r=>r.forumId===t.$data.tid&&r.repquote===O.getRepquote(window.location.href));o&&(e=o);}}e&&(R.isPostPublish_voting()?i=()=>{let s=t.$el.$form.querySelector("input[name='subject']"),l=t.$el.$form.querySelector("textarea[name='message']"),o=t.$el.$form.querySelector("input[name='maxchoices']"),r=t.$el.$form.querySelector("input[name='expiration']"),c=t.$el.$form.querySelector("input[name='visibilitypoll']"),m=t.$el.$form.querySelector("input[name='overt']");return a.val(s,e.title),a.val(l,e.content),a.val(o,e.maxchoices),a.val(r,e.expiration),a.val(c,e.visibilitypoll),a.val(m,e.overt),a.emit(s,"input"),a.emit(l,"input"),a.emit(o,"input"),a.emit(r,"input"),a.emit(c,"input"),a.emit(m,"input"),true}:R.isPostPublish_reply()?i=()=>{let s=t.$el.$form.querySelector("textarea[name='message']");return a.val(s,e.text),a.emit(s,"input"),true}:i=()=>{let s=t.$el.$form.querySelector("input[name='subject']"),l=t.$el.$form.querySelector("textarea[name='message']");return a.val(s,e.title),a.val(l,e.content),a.emit(s,"input"),a.emit(l,"input"),true},R.isPostPublish_newthread()?(h.info("新发布帖子的页面"),typeof i=="function"&&i()):R.isPostPublish_edit()?(h.info("草稿的页面"),typeof i=="function"&&typeof n=="function"&&D.confirm({title:{text:"提示",position:"center"},content:{text:"<p>存在历史写入的数据，是否恢复到编辑器里？</p>",html:true},btn:{merge:true,position:"space-between",ok:{text:"恢复",callback:async s=>{await i()&&(_.success("恢复成功"),s.close());}},other:{enable:true,type:"danger",text:"删除该数据",callback:async s=>{await n(),s.close(),_.success("删除成功");}}},width:"300px",height:"200px"})):R.isPostPublish_reply()&&(h.info("回复页面"),typeof i=="function"&&i()));},async getReplyRecordSize(){let t=await this.$data.db.get("data");return t.success?f.getTextStorageSize(t?.data?.length?JSON.stringify(t.data):""):f.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(){const t=this;this.$data.db.get("data").then(e=>{if(!e.success){console.warn(e);return}let i=R.isPostPublish_voting()?"post-vote":"post",n=O.getThreadId(window.location.href),s=O.getPostId(window.location.href),l=e.data.findIndex(o=>{if(o.type===i&&!(o.tid!==n||o.pid!==s))return  true});l!==-1&&(e.data.splice(l,1),t.$data.db.save("data",e.data).then(o=>{}));});},setInputChangeEvent(){const t=this;a.on([this.$el.$input,this.$el.$title].filter(Boolean),["input","propertychange"],function(){let e=null;if(R.isPostPublish_voting()){let i=t.$el.$form.querySelector("input[name='subject']"),n=t.$el.$form.querySelector("textarea[name='message']"),s=t.$el.$form.querySelector("input[name='maxchoices']"),l=t.$el.$form.querySelector("input[name='expiration']"),o=t.$el.$form.querySelector("input[name='visibilitypoll']"),r=t.$el.$form.querySelector("input[name='overt']");e={title:i.value,maxchoices:s.value,expiration:l.value,visibilitypoll:o.checked,overt:r.checked,content:n.value};}else {let i=t.$el.$form.querySelector("input[name='subject']"),n=t.$el.$form.querySelector("textarea[name='message']");e={title:i?.value,content:n.value};}R.isPostPublish_newthread()?(h.info("内容改变 ==> 新发布帖子的页面"),R.isPostPublish_voting()?K(t.$key.noPublishVotingSerializeText,e):K(t.$key.noPublishSerializeText,e)):R.isPostPublish_edit()?(h.info("内容改变 ==> 草稿的页面"),t.$data.db.get("data").then(i=>{if(!i.success){console.warn(i);return}let n=i.data.findIndex(s=>{if(s.type===t.$data.type&&!(s.tid!==t.$data.tid||s.pid!==t.$data.pid))return  true});n!==-1&&i.data.splice(n,1),i.data.push({url:window.location.href,data:e,pid:t.$data.pid,tid:t.$data.tid,type:t.$data.type}),t.$data.db.save("data",i.data).then(s=>{});})):R.isPostPublish_reply()&&(h.info("内容改变 ==> 回复页面"),S.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{ae.$data.db.get("data").then(i=>{if(!i.success||i.code===201){console.warn(i);return}let n=i.data.findIndex(s=>s.forumId===t.$data.tid&&s.repquote===O.getRepquote(window.location.href));n!==-1?e.content==null||e.content===""?i.data.splice(n,1):i.data[n]=f.assign(i.data[n],{text:e.content}):i.data.push({forumId:t.$data.tid,url:window.location.href,repquote:O.getRepquote(window.location.href),text:e.content}),ae.$data.db.save("data",i.data).then(s=>{});});}));});},initDeleteBtn(){if(!C(".comiis_btnbox .comiis_btn.bg_del"))return;let e=C("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_del"},{type:"button",value:"删除"});a.append(e,i),a.on(i,"click",function(){D.confirm({title:{text:"提示",position:"center"},content:{text:"<p>是否删除帖子?</p>",html:true},btn:{ok:{callback:n=>{n.close(),w.comiis_delthread();}}},width:"300px",height:"200px"});});},initSaveBtn(){let t=a.selector(".comiis_btnbox button#postsubmit:contains('保存')");if(!t||a.text(t).includes("草稿"))return;let e=C("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_save"},{type:"button",value:"保存"});a.append(e,i),a.on(i,"click",function(){t.click();});},initPostBtn(){let t=a.selector(".comiis_btnbox button#postsubmit:contains('发表')");if(!t)return;let e=C("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_post"},{type:"button",value:"发表"});a.append(e,i),a.on(i,"click",function(){a.val("#postsave",0),t.click();});},initReplyBtn(){const t=this;let e=a.selector(".comiis_btnbox button#postsubmit:contains('回复')");if(!e)return;let i=C("#comiis_head .header_y"),n=a.createElement("input",{className:"new_btn_reply"},{type:"button",value:"回复"});a.append(i,n),a.on(n,"click",function(){e.click(),t.deleteReplyTextStorage();});},initVotePage(){z(".comiis_scrollTop_box").length&&(w.$("#htmlon").parent().append(`
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
                `),w.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')").attr("class")!="f_c"?w.$(".comiis_checkbox.comiis_choose_post").removeClass("comiis_checkbox_close"):w.$(".comiis_checkbox.comiis_choose_vote").removeClass("comiis_checkbox_close"),w.$(".comiis_checkbox.comiis_choose_post").on("click",function(){let t=w.$(this);t.addClass("comiis_checkbox_close"),w.$(".comiis_checkbox.comiis_choose_vote").addClass("comiis_checkbox_close"),t.removeClass("comiis_checkbox_close"),window.location.href=window.location.href.replace("&special=1","");}),w.$(".comiis_checkbox.comiis_choose_vote").on("click",function(){let t=w.$(this);t.addClass("comiis_checkbox_close"),w.$(".comiis_checkbox.comiis_choose_post").addClass("comiis_checkbox_close"),t.removeClass("comiis_checkbox_close"),window.location.href=window.location.href+"&special=1";}));},initSaveDraftBtn(){let t=a.selector(".comiis_btnbox button#postsubmit em:contains('保存草稿')");if(!t)return;let e=C("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_save_temp"},{type:"button",value:"保存草稿"});C("#needsubject"),a.append(e,i),a.selector(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"),a.on(i,"click",function(){t.click();});},observerChangeEditorHeight(){var t=0;a.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot").then(e=>{f.mutationObserver(e,{callback:i=>{var n=C("#postform > div > div.comiis_post_ico.comiis_minipost_icot");let s=window.getComputedStyle(n).getPropertyValue("height");if(s.toString()===t.toString())return;t=parseInt(s);let l=document.documentElement.clientHeight-C("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-C("#needmessage").getBoundingClientRect().top;l-5<100?(w.$("#needmessage").css("height","100px"),w.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height","100px")):(w.$("#needmessage").css("height",l-5+"px"),w.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height",l-5+"px"));},config:{childList:true,attributes:true,characterData:true,subtree:true}});});},listenResize(){a.on(window,"resize",function(){let t=document.documentElement.clientHeight-C("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-C("#needmessage").getBoundingClientRect().top;t-5<100?(a.css("#needmessage","height","100px"),a.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height","100px")):(h.info("设置输入框、预览高度",t-5),a.css("#needmessage","height",t-5+"px"),a.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height",t-5+"px"));});},initSelectPostingSection(){Y(`
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
            `);let t={2:"版本发布",37:"插件交流",38:"建议反馈",41:"逆向交流",39:"玩机交流",42:"编程开发",40:"求助问答",44:"综合交流",50:"休闲灌水",46:"官方公告",53:"申诉举报",92:"站务专区"};a.before(".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",`
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
        `);let e=C("#select-post-section"),i=O.getForumId(window.location.href);R.isPostPublish_newthread()?(h.info("发帖"),a.on(e,"change",function(){let n=a.val(e),s=`forum.php?mod=post&action=newthread&fid=${n}&extra=&topicsubmit=yes&mobile=2`;h.info(`修改发帖板块: ${t[n]} ${s}`);let l={求助问答:{className:"gm_user_select_help",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`},建议反馈:{className:"gm_user_select_feedback",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`},站务专区:{className:"gm_user_select_depot",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`}},o=l[t[n]];o?(a.remove(a.parent(".comiis_post_from .styli_tit:contains('分类')")),a.before(".comiis_stylino.comiis_needmessage",`
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
                        `)):Object.keys(l).forEach(r=>{a.remove(".comiis_post_from ."+l[r].className);}),a.attr("#postform","action",s);})):a.attr(e,"disabled",true),a.val(e,i),a.emit(e,"change");},initCharacterCount(){h.info("添加功能：字符计数"),Y(`
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `),a.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`),a.on(this.$el.$input,["input","propertychange"],()=>{let t=this.$el.$input.value,e=f.getTextLength(t),i=Le.parseText(t);a.html(".gm_plugin_previewpostforum_html .comiis_message_table",i);let n=C(".gm_plugin_word_count p");a.text(n,e),e>2e4||e<10?a.attr(n,"style","color: red;"):a.attr(n,"style","");});},initUBB(){if(!C(".comiis_post_urlico")){h.error("未找到插入元素");return}Y(`
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);let t=et(),e=C(".comiis_post_urlico > ul"),i=C("#comiis_post_qydiv > ul"),n=z("#comiis_post_qydiv ul li").length;St(),a.on("#comiis_post_tab .comiis_input_style .comiis_post_urlico li","click",function(){a.removeClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_0"),a.addClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_d"),a.attr(this.querySelector("a"),"class","comiis_xifont f_0"),w.$("#comiis_post_qydiv ul li").hide().eq(w.$(this).index()).fadeIn();}),w.$.each(t,function(s,l){let o=a.createElement("li",{className:"quickUBBs",innerHTML:`
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${l.key}</a>
                `});a.on(o,"click",()=>{if(!C(`#comiis_post_qydiv li[data-key='${l.key}']`)){h.error("未找到该元素");return}z("#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont").forEach(p=>{p.className="comiis_xifont f_d";});let m=o.querySelector("a");m.className="comiis_xifont f_0";let d=n+Object.keys(t).indexOf(s);w.$("#comiis_post_qydiv ul li").hide().eq(d).fadeIn();}),a.append(e,o);let r=document.createElement("li");r.setAttribute("style","display: none;"),r.setAttribute("data-key",l.key),r.innerHTML=`
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
            </div>`,a.append(i,r),a.on(`.comiis_sendbtn[data-keyI="${s}"]`,"click",()=>{let c=w.$(`#comiis_input_${s}`).val();if(c==""){_.warning("请输入需要插入的内容");return}let m=t[s];m.isFunc&&(c=tt(m.num,c)),m.hasOwnProperty("L")&&(c=m.L+c+m.R),w.$("#needmessage").insertAtCaret(c),m.hasOwnProperty("cursorL")&&w.$("#needmessage").moveCursorToCenterByTextWithLeft(m.cursorL,m.cursorLength),m.hasOwnProperty("cursorR")&&w.$("#needmessage").moveCursorToCenterByTextWithRight(m.cursorR,m.cursorLength);});});},initImage(){h.info("添加功能：图片"),Y(`
            #comiis_pictitle_tab .comiis_upbox{
                height: 140px;
                overflow-y: auto;
            }
            `),a.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`),a.on(".comiis_pictitle","click",function(){this.querySelector("i.comiis_font").classList.contains("f_0")?a.hide(".gm_plugin_chartbed",false):a.show(".gm_plugin_chartbed",false);}),a.append("#comiis_post_tab",`
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
            `);let e=C("#imglist"),i=a.parent(e);a.before(".gm_plugin_chartbed .bqbox_t",i),a.on("#imglist .comiis_font","click",()=>{C("#filedata").click();}),a.on("#comiis_pictitle_tab #comiis_pictitle_key","click","li",function(n,s){a.removeClass("#comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),a.addClass(s,"bg_f"),w.$("#comiis_pictitle_tab div.comiis_upbox").hide().eq(w.$(s).index()).fadeIn();},{overrideTarget:false}),S.execMenuOnce("mt-image-bed-hello-enable",()=>{Ze.init();}),S.execMenuOnce("mt-image-bed-mt-enable",()=>{Xe.init();});},initPreview(){const t=this;h.info("添加功能：双列预览"),Y(`
        .gm_plugin_previewpostforum_html .comiis_message_table{margin-top:10px;font-weight:initial;line-height:24px}
        .gm_plugin_previewpostforum_html .comiis_message_table a{height:auto;float:unset;color:#507daf!important}
        .gm_plugin_previewpostforum_html .comiis_message_table i{text-align:unset;font-size:unset;line-height:unset;padding-top:unset;display:unset}
        .comiis_postli.comiis_list_readimgs.nfqsqi{width:100vw}
        .gm_plugin_previewpostforum_html.double-preview{width:50vw}
        .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{border-left:1px solid}
        `),a.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
        <a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum">
            <i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;">
                <svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor">
                    <path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path>
                    <path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path>
                </svg>
                <em style="bottom: 1px;position: relative;">预览</em>
            </i>
        </a>`),a.css(a.parent(this.$el.$input),"display","flex"),a.after(this.$el.$input,`
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
            </div>`),a.on(".gm_plugin_previewpostforum","click",function(){let i=this;if(z("#polldatas").length&&Le.parseVoteText(),i.querySelector("i.comiis_font").classList.contains("f_0"))a.hide(".gm_plugin_previewpostforum_html",false);else {a.show(".gm_plugin_previewpostforum_html",false);let s=Le.parseText(a.val(t.$el.$input));a.html(".gm_plugin_previewpostforum_html .comiis_message_table",s),a.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style","height",a.css(t.$el.$input,"height"));}});},initSettingImmersionMode(){h.info("初始化设置功能-使用沉浸模式"),a.append(a.parent("#htmlon"),`
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `),a.on("#immersiveinput","click",function(){let t=this,e=a.parent(t).querySelector(".comiis_checkbox"),i=[".comiis_wzpost ul li.comiis_flex",".comiis_wzpost ul li.comiis_styli.kmquote",a.parent(a.parent("#pollchecked")),"#pollm_c_1",".comiis_polloption_add+div.f_0",".comiis_wzpost ul li.comiis_thread_content:contains('内容')","div#comiis_head","div#comiis_head+*:not([class])"];a.hasClass(e,"comiis_checkbox_close")?i.forEach(n=>{n&&a.hide(n,false);}):i.forEach(n=>{n&&a.show(n,false);}),window.dispatchEvent(new Event("resize"));});}},zt={init(){a.onReady(()=>{S.execMenuOnce("mt-forum-post-publish-editorOptimization",()=>{Se.init();});});}},Ut={$flag:{showUserUID_initCSS:false},init(){(R.isPage()||R.isGuide()||R.isPlate()||R.isPost()||R.isSearch()||R.isSpace())&&S.execMenuOnce("mt-show-user-uid",()=>{this.showUserUID();}),(R.isSearch()||R.isGuide()||R.isSpace()||R.isPlate())&&S.execMenuOnce("mt-small-window",()=>{nt.init();}),R.isPost()?(h.info("Router: 帖子"),it.init()):R.isSearch()?(h.info("Router: 搜索"),Tt.init()):R.isKMiSign()?(h.info("Router: 签到"),Et.init()):R.isSpace()||R.isSpaceWithAt()?(h.info("Router: 空间"),It.init()):R.isGuide()?(h.info("Router: 导读"),Mt.init()):R.isPostPublish()?(h.info("Router: 发帖页面"),zt.init()):h.error("Router: 未适配的链接 ==> "+window.location.href),a.onReady(()=>{S.execMenuOnce("mt-black-home",()=>{xt.init();}),S.execMenuOnce("mt-online-user",()=>{vt.init();}),S.execMenuOnce("mt-post-paidThemePost",()=>{fe.init();}),S.execMenuOnce("mt-ownBlock",()=>{At.init();}),S.execMenuOnce("mt-post-comment-filter",()=>{Dt.init();}),S.execMenuOnce("mt-productListingReminder",()=>{Pt.init();}),S.execMenuOnce("mt-customizeUserLabels",()=>{Vt.init();}),S.execMenu("mt-auto-sign",()=>{ke.init();}),S.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();}),R.isPostPublish_edit()||S.execMenuOnce("mt-link-text-to-hyperlink",()=>{qt();});});},showUserUID(){h.info("显示用户UID"),this.$flag.showUserUID_initCSS||(this.$flag.showUserUID_initCSS=true,Y(`
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`));let t=new f.LockFunction(()=>{let e=f.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist());e.length&&e.forEach(i=>{if(i.querySelector(".gm-custom-label-uid"))return;let s=Array.from(i.querySelectorAll("a")).map(l=>{let r=l.href.match(ee.uid);if(r)return r[r.length-1]}).filter(l=>l!=null);if(s.length){let l=s[0],o=document.createElement("a"),r=i.querySelector(".top_lev");o.className=r.className,o.classList.add("gm-custom-label-uid"),o.style.cssText="background: #FF7600 !important;",o.innerHTML="UID:"+l,a.on(o,"click",async c=>{a.preventEvent(c),await f.copy(l)?_.success(`${l}已复制`):_.error(`${l}复制失败`);}),r.parentElement.append(o);}});});f.mutationObserver(document,{config:{subtree:true,childList:true},callback(){t.run();}});},async extendCookieExpire(){h.info("延长cookie有效期");let t=await ze.cookie.list({}),e=["_auth","_saltkey","_client_created","_client_token"];t.forEach(async i=>{if(i.session)return;let n=i.expirationDate,s=Date.now()/1e3;if(n<s)return;let l=3600*24*30;n-s>l||!e.find(r=>i.name.endsWith(r))||ze.cookie.set({name:i.name,value:i.value,expirationDate:i.expirationDate+l}).then(()=>{h.info(`延长Cookie +30天成功：${i.name}`);}).catch(()=>{h.error(`延长Cookie +30天失败：${i.name}`);});});}},he={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return he.$el.$smallUpload.files[0]},get middle(){return he.$el.$middleUpload.files[0]},get big(){return he.$el.$bigUpload.files[0]}},showView(){const t=this;let e=D.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!t.$upload.small){_.error("请上传小头像");return}if(!t.$upload.middle){_.error("请上传中头像");return}if(!t.$upload.big){_.error("请上传大头像");return}let i=_.loading("正在处理数据中...");try{let n=await this.getUploadUrl();if(n==null)return;let s=await O.getFormHash();if(s==null){_.error("获取formhash失败");return}let l={big:{base64:await f.parseFileToBase64(this.$avatar.big)},middle:{base64:await f.parseFileToBase64(this.$avatar.middle)},small:{base64:await f.parseFileToBase64(this.$avatar.small)}};Object.keys(l).forEach(c=>{let m=l[c];m.base64=m.base64.substring(m.base64.indexOf(",")+1);});let o=new FormData;o.append("Filedata",this.$avatar.big||""),o.append("confirm","确定"),o.append("avatar1",l.big.base64),o.append("avatar2",l.middle.base64),o.append("avatar3",l.small.base64),o.append("formhash",s),h.info("头像的base64字符串",l);let r=await U.post(n,{data:o,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":f.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!r.status)return;r.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(e.close(),_.success("上传成功")):(h.error("上传失败",r),_.error(r.data.responseText,{timeout:6e3,isHTML:!1}));}catch(n){h.error(n);}finally{i.close();}}}},width:"88vw",height:"500px",style:`
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
            `});this.$el.$smallUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=e.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=e.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(t,e,i,n){a.on(t,"change",()=>{if(!t.files?.length)return;a.text(e,"🤡获取文件信息中..."),e.removeAttribute("data-success");let s=t.files[0],l=s.size,o=new Image,r=new FileReader;r.readAsDataURL(s),r.onload=function(c){o.src=c.target.result,o.onload=function(){if(o.width>i.width||o.height>i.height){t.value="",e.setAttribute("data-success","false"),a.text(e,`🤡校验失败 ==> 图片尺寸不符合，宽：${o.width} 高：${o.height}`);return}if(l>he.$data.avatarInfo.maxSize){t.value="",e.setAttribute("data-success","false"),a.text(e,`🤡校验失败 ==> 图片大小不符合：${l}byte，限制最大：${he.$data.avatarInfo.maxSize}byte`);return}e.setAttribute("data-success","true"),a.text(e,`🤣 通过 宽:${o.width} 高:${o.height} 大小(byte):${l}`),n();};};});},async getUploadUrl(){let t=await U.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":f.getRandomPCUA()}});if(!t.status)return;if(f.isNull(t.data.responseText)){_.error("动态头像：获取上传地址失败");return}let e=t.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(e==null||e.length!=2){_.error("动态头像：获取变量data失败");return}let n=e[e.length-1].split(","),s=n.indexOf("stl_src");if(s===-1&&(s=n.indexOf("src")),s===-1){_.error("动态头像：获取上传地址失败");return}let l=n[s+1],o=new URL(l);return o.pathname=o.pathname.replace("/images/camera.swf","/index.php"),o.searchParams.delete("inajax"),o.searchParams.set("m","user"),o.searchParams.set("a","rectavatar"),o.searchParams.set("base64","yes"),l=o.toString(),h.info("上传地址："+l),l}},Ft={id:"component-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[Ge("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),Ge("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),L("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",views:[{text:"",type:"container",views:[L("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),L("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie"),ye("bbs.binmt.cc","httpx-cookie-bbs.binmt.cc","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[L("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),L("显示用户UID","mt-show-user-uid",true,void 0,"格式为UID：xxx"),L("小窗模式","mt-small-window",true,void 0,"开启后点击帖子右侧区域为小窗打开"),L("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{text:"额外菜单项",type:"deepMenu",views:[{type:"container",text:"",views:[L("小黑屋","mt-black-home",true,void 0,"将会在左侧面板添加【小黑屋】菜单"),L("在线用户","mt-online-user",true,void 0,"将会在左侧面板添加【在线用户】菜单"),L("付费主题白嫖提醒","mt-post-paidThemePost",true,void 0,"将会在左侧面板添加【付费主题白嫖提醒】菜单"),L("我的屏蔽","mt-ownBlock",true,void 0,"将会在左侧面板添加【我的屏蔽】菜单"),L("商品上架提醒","mt-productListingReminder",true,void 0,"将会在左侧面板添加【商品上架提醒】菜单"),L("自定义用户标签","mt-customizeUserLabels",true,void 0,"将会在左侧面板添加【自定义用户标签】菜单"),L("评论过滤器","mt-post-comment-filter",true,void 0,"将会在左侧面板添加【评论过滤器】菜单")]}]},{text:"头像",type:"deepMenu",views:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"container",views:[We(t=>{const e=a.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),i=a.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),n=a.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return i.querySelector(".avatar-img[data-size='small']"),i.querySelector(".avatar-img[data-size='middle']"),i.querySelector(".avatar-img[data-size='big']"),t.appendChild(e),t.appendChild(i),t.appendChild(n),t},void 0,{text:"头像（有缓存）",desc:"小、中、大"}),We(t=>{const e=a.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),i=a.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${O.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return t.appendChild(e),t.appendChild(i),t},void 0,{text:"头像",desc:"小、中、大"}),Te("修改头像",`可以上传gif图片，注意图片最大限制为${re.formatByteToSize(he.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{he.showView();})]}]}]}]},Ot={id:"component-forum-post",title:"帖子",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[L("自动展开内容","mt-forum-post-autoExpandContent",true,void 0,"注入CSS展开帖子的内容"),L("修复图片宽度","mt-forum-post-repairImageWidth",true,void 0,"修复图片宽度超出页面宽度的问题"),L("移除帖子字体效果","mt-forum-post-removeFontStyle",false,void 0,""),L("移除评论区的字体效果","mt-forum-post-removeCommentFontStyle",false,void 0,""),L("添加【点评】按钮","mt-forum-post-addCommentOnBtn",false,void 0,"在评论区的每个评论右下角添加按钮"),L("附件点击提醒","mt-forum-post-setAttachmentsClickTip",true,void 0,"阻止默认点击附件就会触发附件下载"),L("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮"),L("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片")]}]},{text:"自动加载评论",type:"deepMenu",views:[{type:"container",text:"",views:[L("自动加载下一页评论","mt-forum-post-loadNextPageComment",true,void 0,""),L("同步加载的地址","mt-forum-post-syncNextPageUrl",false,void 0,"便于刷新页面会停留在当前查看的评论页面")]}]},{text:"编辑器-简略版",type:"deepMenu",views:[{type:"container",text:"",views:[L("启用","mt-forum-post-editorOptimizationNormal",true,void 0,"优化样式，插入bbcode代码等"),L("自动保存输入记录","mt-forum-post-editorOptimizationNormal-recordInputText",true,void 0,"当回复时会自动清空记录"),Te("清空回复记录","当前占用空间大小：计算中","清理",void 0,false,false,"default",async t=>{let n=t.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await ae.clearAllReplyRecord();s.success?(_.success("清理成功"),a.text(n,`当前占用空间大小：${await ae.getReplyRecordSize()}`)):_.error("清理失败 "+s.msg);},async(t,e)=>{let i=e.target.querySelector(".pops-panel-item-left-desc-text");a.text(i,`当前占用空间大小：${await ae.getReplyRecordSize()}`);})]}]},{text:"编辑器-完整版",type:"deepMenu",views:[{type:"container",text:"",views:[L("启用","mt-forum-post-publish-editorOptimization",true,void 0,"优化样式，插入bbcode代码，双列预览等"),L("自动保存输入记录","mt-forum-post-editorOptimization-recordInputText",true,void 0,"当回复/发表时会自动清空记录"),Te("清空回复记录","当前占用空间大小：计算中","清理",void 0,false,false,"default",async t=>{let n=t.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await Se.clearAllReplyRecord();s.success?(_.success("清理成功"),a.text(n,`当前占用空间大小：${await Se.getReplyRecordSize()}`)):_.error("清理失败 "+s.msg);},async(t,e)=>{let i=e.target.querySelector(".pops-panel-item-left-desc-text");a.text(i,`当前占用空间大小：${await Se.getReplyRecordSize()}`);})]}]},{text:"编辑器-图床配置",type:"deepMenu",views:[{type:"container",text:'<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>',views:[L("启用","mt-image-bed-hello-enable",false,void 0,"启用Hello图床"),J("账号","mt-image-bed-hello-account","","",void 0,"必填"),je("密码","mt-image-bed-hello-password","","",void 0,"必填"),je("token","mt-image-bed-hello-token","","",void 0,"必填")]},{type:"container",text:'<a href="https://img.binmt.cc/" target="_blank">MT图床</a>',views:[L("启用","mt-image-bed-mt-enable",true,void 0,"启用MT图床")]},{type:"container",text:"图片水印",views:[L("启用","mt-image-bed-watermark-enable",false,void 0,"开启后会为图床图片添加文字水印"),L("自动添加水印","mt-image-bed-watermark-autoAddWaterMark",false,void 0,"开启后会自动添加水印，关闭后会有添加水印后的图片预览"),J("水印文字","mt-image-bed-watermark-text","MT论坛"),J("颜色","mt-image-bed-watermark-text-color","#000000",void 0,void 0,"","color",(t,e)=>{let i=e.target?.querySelector("input"),n=e.target?.querySelector(".pops-panel-input__suffix");a.hide(n,false),i.setAttribute("type","color"),a.css(i,{margin:"unset",padding:"unset",width:"80px"});}),ue("大小","mt-image-bed-watermark-font-size",16),ue("透明度","mt-image-bed-watermark-font-opacity",1),ue("左右间距","mt-image-bed-watermark-left-right-margin",80),ue("上下间距","mt-image-bed-watermark-top-bottom-margin",80),ue("旋转角度","mt-image-bed-watermark-rotate",45)]}]}]}]},Ht={id:"component-search",title:"搜索",views:[{type:"container",text:"",views:[L("显示搜索历史","mt-search-showSearchHistory",true,void 0,"自动记住搜索历史并显示"),L("修复清空按钮","mt-search-repairClearBtn",true,void 0,"修复点击清空按钮不清空输入框的问题"),L("搜索框自动获取焦点","mt-search-searchInputAutoFocus",true,void 0,"")]}]},jt={id:"component-sigh",title:"签到",views:[{text:"功能",type:"container",views:[L("显示【今日签到之星】","mt-sign-showTodaySignStar",true,void 0,"在签到按钮上面显示今日签到之星"),L("显示【今日最先】","mt-sign-showTodayRanking",true,void 0,"在签到排名上面新增【今日最先】")]},{text:"自动签到",type:"container",views:[L("启用","mt-auto-sign",true,void 0,"自动请求签到"),L("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),Te("签到信息",`上次签到时间：${(()=>{let t=ke.getHostNameSignInfo(window.location.hostname);return t?re.formatTime(t.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",t=>{let i=t.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");D.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:n=>{let s=window.location.hostname;ke.clearSignInfo(s),_.success("删除成功"),a.text(i,`上次签到时间：${(()=>{let l=ke.getHostNameSignInfo(s);return l?re.formatTime(l.time):"尚未签到"})()}`),n.close();}}},width:"88vw",height:"200px"});})]}]},Wt={id:"component-space",title:"空间",views:[{type:"container",text:"",views:[L("修复无法进入空间","mt-space-repairEnterSpace",true,void 0,"修复链接错误导致不能进入空间的问题"),L("显示帖子回复内容","mt-space-showCommentContent",true,void 0,"在帖子-回复下面显示具体评论的内容")]}]},Gt={id:"component-guide",title:"导读",views:[{type:"container",text:"",views:[L("显示最新帖子","mt-guide-showLatestPost",true,void 0,"在最上面显示最新发布的帖子")]}]};xe.addContentConfig([Ft,Ot,Ht,jt,Wt,Gt]);S.init();G.registerLeftMenu({name:"MT论坛脚本设置",icon:"",iconColor:"#ff0505",iconSize:"23px",callback:()=>{S.showPanel(xe.getConfig(0));}});Ut.init();

})(Qmsg, DOMUtils, pops, Utils, hljs, Viewer);