// ==UserScript==
// @name         【移动端】MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.11
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADptJREFUeF7tnQtwVNUZx/9nN5CQgCG8QoAdE3lFeWQDGAK+ikKCQGtHBHlJQeVRrTICJQUrgggkUhiRdIRgyBahpThWEHAob6mCVCApCIUQGiDKK0ACEUMMe2/n3E1Ckt279557d+8mN+fMMJlhv/Od7/vO737ncc+eJdBRLuRfSAbwa0JIogjRrkNVvapKQA6JEL8iVrLSZrPl1SvjaxlLtBp/Pv/8LEJImtb6ZqlHCHnddr9tRX31RxMA+fn5v7AS69766rSv7XaKzgExMTH7fK3XCH3MAJw6dapZaHDoYRB0McLAetGGiFxbtK0HIeTnemFvNSOZAfDV03/rjgWzt7RFeIgTc5IK0TRYMDR2RaVWLNrRGoJAMOPJa2gXXq6rfafojImJiTmnS0kAKjMDcOHchRkA/qTX1vzrjfHHbZGSmqcfKsG4PsV6VTLV/+DLljh0PlSq89rj15EY/RNT/drCFlj6d4jucFCXkgBUZgbgfP75eYSQt/XaKorA/O1tcKYwGFaLiN8+cgP9YvR1glqbjn7fBEv3tJLEI0KdWDjsMsJD9GWg+joPCBgANPh3BYJpn0ahuNSKmJY/45VHbyim4uu3rbh2OwiVf0MbCWgZ5kSrsLvS39DG3jvy8q0g/GFLW5Q7Ce4LEfD6E9fwYGSZWnZk5TgAGkN4pKAJlu11PY2Pd7yNKY/cqKHp++JGOH4xBMcq/ik1Q8fy3rZSdI8qQ2xkGYIsYo0qqbtaS/poGdunGEMeKlFSqepzDoCqMHkWchyKwM7TTaUPX3i4GIMfLMGXeWHYk9sUedcaa9Yc3sSJPrZSJMX+iA7Ny7ExOxybj98n6esf8xNefey6Zt21K3IAdIZy5qYoXLoVhLDGAlqFOXG+qJFOjfeqBweJUprP+cH15EfddxcLhl5Bk0b6xv3qBnIAdHYXTcs0PRtRUgYWome7Oz5tigOgI5wFxY2Qvr8l6HhvRHms421MrTXX0NsuB0BjBOlanK7JjS50srjkmcs+a5YDoCGUW080w9+ONNdQ0zdV6HwjY9QPPlFGAYg+E1MMCy6RgbjiE6UGKAnYPgCd5WccaGGAi96bSLi/FNOeuKbbjjYFY38MLv3atZQRcQwWfI5ywUGG4Kxu5X5UEBAAvrsUgrRdrSHUXKL70U3vqod1K8Ho3vq2otsUjEJw6Tc1GxJRAoIsEMFBBiE7YA56aTggANB3APRdQF0qLyUW4ckuP2o2ySMANbU5AMFBkvCl5kb8UNFwAOjmTuY3EbKuPB4LJHYCmoYAl4uBHceBPI0jarf2wFPdAVtL4FwhsOUocEFm74duRb87VGNDAFQAUOGz+BlESxZJdm7xQ38yqzQcAG9P//AEYBo9ZFatOAXgpdXA/66y+dbDBvx5Qs065U5gdDpw9ZZnXXqygHoAKtsWd8NiySIDnevZPPOttKEAKD39ayYDnVxviGuUj78CVjOeP0r5JTDUwynFVXuA9V97DqKeLMAOQKUN5FuIogPNhCzSH6W+7V5lbYYC8PYXkV739jdPByLC3I3+IgdIZUyYaaOAfp3ddX36LbB8u3xgXnn0Oh55gP21tHYAKmwhOA0BDliFLCOXkYYBQHf5Uj5v6xXJzElAZw8ia/8FfMR44k4uA2TsAdbJZABqHO18CgFr0Q3AvQYvAXBIS8ihyGW1g1XeMAB2nGqKv/xbfvJHDX+mNzBjSE0X7pQDL38EXGBcqneMdM0BQqstNgpLgEkfATe8TPbp0bRVz7NvDvkQgMoA3JZAcK0cDrN2rFp5wwB4959t8N8rwYp20RVA344Vq4CbwM7j8jN3JWVRzYHBcS4pQQA2HQFuqsjuWl4W+QGA6u59DNHiIMl39yj5zPq5IQDQ0zcT1ndgtS1g8r/qfgvP97rJ1L6fAXDZQsTNECgIzk1MxnkRNgQAegxrxqYoX9nsdz1aDosYAkCV5+I+EEsWGeRcqzcYhgBAt34X7zTmXb/egND6XduUYe5gto0HYwGo8FLEUViQhSDBQQZA0zamIQDUlRc/auGgh0s/GH5RrbgkFxAA7lmYBxEOECGLJIHJcEMAUDsBZIq4n4XXjy9gaiHAAFTaStOWA6KQRZJxSo0DHgHo2bNnDCHEwzYKMHny5Bc6tO8wTo3ySpl//CccuYX+efkjlpcAZUWwtn4YljAbYPHNqaJ6CkBlyOl5NwqCgyTjkLe+qgGA3W5/GcBqls6tU7LWEDR+YCSCe7yh26x6DsA9/0X8FZCWkDs9BaUKALvdvhXAUN2RqwMKLOGdEfbkBoBYNFtjGgDurRw+hyj+jiSjxtgmAWC326cBeF9ztOpgRWubRIT2/0DzkGA+ACo6ySJ0IwNxsrLLKgGoI2dzfEtSUNQTaJKQClhd3wdgKaYFADhBkoTuVQDExcUlEEK8ThRYAlfXZIPaPoqQhFSQIA+vGb0Ya2IA6JnF+SRZmEfdJ3FxcS8SQjLrWsf50p6gyH4uCBq5vhamppgaAIK1ZJDwmwYDAHXU2joBTRLSQILVHUM3NQAQ95EkcUCDAkCCoFVvFwQhyl9EMTUADW0IqJ7yrS3tLgiatPE6EpgaAJBnSZLzswaXASp73NqiB0IS0mAJlX9DaWIAvkMjIZ4MwN0GC4A0HEQ85IIgzPM5BdMCIOL3JFmouuOpQawC5HK9pdkDCI5LgSWsvZvI+8/So3nqS8tLr6PxnTr55R/JifYtpBvsvq94+qsO2DVoANR3rzkku9t+OvldQeirOTk5VUdsOQDm6FsmLwgh6dnZ2a816DkAU8RMKEwIGZ2dnb2BZwATdq5Klw7l5OQkUgDmEkLmq6zExUwUAUEQYikAmYSQF03kF3dFZQQIIWMoAGsIIRNV1uFiJoqAKIovcABM1KGsrnAAWCNmMnkOgMk6lNUdDgBrxEwmzwEwWYeyusMBYI2YyeQ5ACbrUFZ3OACsETOZvF8AWL3a+zfLrl69ijfffFNzKMeMGYMBA6TzjLJl0qRJmvV7q6jkm18araV01apVOHzYNzfG+AWA7GzlQxFvvfUWtm6l30RjK507d8bGjRsVK8XHxyvKaBFQ45sWvSx1KNz1HoCSkhI899xzoNmApWRmZqJXr16KVTgAiiGSBAKWAWjjO3bsQEpKijpLAUydOhVTpkxRJc8BUBWmwAJATZw3bx42b96saG3fvn2xcuVKRblKAQ6AulAFNANQE0tLS0EndefOyf/iarNmzZCVlYWOHTuq8woAB0BdqAIOADVz9+7dmDlzpqzFdJgYNWqUOo8qpIwGQGlS1qdPHzf7tdShSkwxCawdjbS0NGzYsMEtSEOGDMHChQuZOp8KGw0AHZ7o8sxToUtHOQDklqt0rkPnPJ5KvQWgrKwMwcGebwotLy/HhAkTcPJk1b0FiI6ORkZGBlq39ny9nDd9HAB1z4yhQwB9SuSopubu378f06bRi0pcJTU1FcnJtX48oJpf3vT5C4Bt27ahXbt2btGdP38+Nm3yfHmnlgwwduxY2WFx9OjROHVK1QVgihQYDkCLFi0wcuRIWcNWrFiBNWvWYPz48XjjDfmLnuhm0I0bN2SB8hcAnuYjd+7cwcSJE2U7RQsAiYmJ+PDDD93idPHiRQwfPhy0TV8UwwGg4+Qnn3yCTp06ebRfEARprZ+eni47XOTl5WHEiBGSnFxG8RcAbdu2xZIlS9C9e9UNK9LyVG78p05qAYDWq+0fXSktX74c+/Yx3pvvhZSAANCtWzesW7dO1iw6O/Y0aaqsMG7cOJw4cSIgAFAb6DyGDk0RERE4c+YMDhw44PVh1AoAVdq/f3/Q7e+ioiJpiCwu1vfLZrUNDQgA1AjaiTNmzGDOYkuXLq2CJxAZgNlgHRlAS1usdQIGADV02bJlim/1qju0d+9eTJ8+veq/OACs3e0uH1AAbDYb1q5di+bNle/soamPTgwLCu7dccgBqOcAUPOHDRuGBQsWKHri6fUxB0AxbIoCAc0AldbNmTNHmtXLFbpqWLRokdvHHADF/lUUqBMAhIeHSzt+Xbp0cTM4NzeX3k6Omzfdf76FA6DYv4oCdQIAaqWWpRIHQLF/FQU4AIoh0i+gBW79rarTUGcAoO8A6Mug2sXhcEi7X54KzwDqOtmbVJ0BgBrp6cClty1dDoDJAKDu0N3B2NhY6cUK3fXzVjgAJgSAxSUOAEu0PMvWqSGA1R0OAGvE3OU5APpjqKiBrwIqQqT03lwxkrUEeAZgjRjPAPojpkEDzwA8AzCfCtbAmaYqfA6gKWxslXgG4BmAZwDKAJ8E1swc9Oyjv+4xUJuj+BCgNlI65PgQwIcAPgTwIcDzl0P5EKAjtfKNIB3Bq6jK5wD6Y6iogc8B+ByAzwH4HIDPAfg+QK3Bgu8DKI6e3gX4JFBnAI2+Jo7vBPKdQK/fo2flmWcA1ojx8wD6I6ZBA18G8mUgXwbyZSBfBvJlIF8Ger9MiXV45ZNA1ogZNAmkN3527drVrbXZs2dj+/bt+q2u0DB48GAsXrzYTd/p06eZr5b1mVEeFMlddUvjRG9IDWTxy8sgT09mYWEhkpKSfO4rvXK+9k2ivt5v0Gs0vfHM0y+N+PLKV602+gUAasygQYOka9wiIyNx8OBBzJo1S6uNivXee+899OvXD1euXJH2GXbu3KlYx2gBetP53Llz0bNnTxw7dgzvvPMOzp49a7QZbu35DYCAe8YNUBUBDoCqMJlXiANg3r5V5RkHQFWYzCvEATBv36ryjAOgKkzmFeIAmLdvVXnGAVAVJvMKcQDM27eqPOMAqAqTeYU4AObtW1WecQBUhcm8QhIAdrs9HcCr5nWTeyYXAULICBIfH/+UKIq7eJgaXgQIIdGEum2324sAKP92S8OLkZk93pWTkzNIAiAuLm4+IWSumb3lvtWMgMViefro0aPbJQBoiY+P3y6KovxvtfIImiYChJDZ2dnZqdShKgAqMsEAQgg9aNcbQJBpPOaO0AicB/B3q9WaceTIkarjSP8HC+OZoHXD4j8AAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@79fb4d854f1e2cdf606339b0dac18d50104e2ebe/lib/js-watermark/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.4.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
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

(function (_, j, Q, gt, bt, Nt) {
	'use strict';

	var Et=typeof GM<"u"?GM:void 0,rt=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Mt=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Z=typeof GM_getValue<"u"?GM_getValue:void 0,pt=typeof GM_info<"u"?GM_info:void 0,Zt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Y=typeof GM_setValue<"u"?GM_setValue:void 0,Qt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Jt=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,Xt=window;const wt={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&p.waitNodeList(t).then(i=>{i.forEach(n=>n.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(i=>{Array.isArray(i)?t=t.concat(i):t.push(i);}),j.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(i=>{Array.isArray(i)?t=t.concat(i):t.push(i);}),K(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Mt=="function"?Mt(e.keyName):null;typeof t=="string"&&t?K(t):wt.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,j.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(i=>{t.onload=()=>{i(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let i=[document.documentElement,document.body].concat(...e||[]);return i.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){i.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(n){navigator.clipboard.readText().then(s=>{n(s);}).catch(s=>{u.error("读取剪贴板内容失败👉",s),n("");});}function t(n){navigator.permissions.query({name:"clipboard-read"}).then(s=>{e(n);}).catch(s=>{u.error("申请剪贴板权限失败，尝试直接读取👉",s.message??s.name??s.stack),e(n);});}function i(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!i()){n("");return}document.hasFocus()?t(n):window.addEventListener("focus",()=>{t(n);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,i=5e3){let n,s=i-t,o=t,r=async l=>{let c=await e(l);if(typeof c=="boolean"&&!c||l){p.workerClearTimeout(n);return}if(o+=t,o>s){r(true);return}n=p.workerSetTimeout(()=>{r(false);},t);};r(false);},findParentNode(e,t,i){if(i){let n=j.closest(e,i);if(n)return n.querySelector(t)}else return j.matches(e,t)?e:j.closest(e,t)}},zt={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},et={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false},httpx_cookie_manager_enable:{key:"httpx-use-cookie-enable",defaultValue:false},httpx_cookie_manager_use_document_cookie:{key:"httpx-use-document-cookie",defaultValue:false}},p=Q.noConflict(),a=j.noConflict(),N=gt,u=new p.Log(pt,x.console||Xt.console);let Lt=pt?.script?.name||void 0;gt.config.Utils.AnyTouch();const Vt=false;u.config({debug:Vt,logMaxCount:1e3,autoClearConsole:true,tag:true});_.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.getSetting().type;if(t==="loading")return  false;const i=e.getSetting().content;return t==="warning"?u.warn(i):t==="error"?u.error(i):u.info(i),true},get position(){return q.getValue(et.qmsg_config_position.key,et.qmsg_config_position.defaultValue)},get maxNums(){return q.getValue(et.qmsg_config_maxnums.key,et.qmsg_config_maxnums.defaultValue)},get showReverse(){return q.getValue(et.qmsg_config_showreverse.key,et.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=Q.getMaxZIndex(),t=gt.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Q.getMaxValue(e,t)+100}});N.GlobalConfig.setGlobalConfig({zIndex:()=>{let e=Q.getMaxZIndex(void 0,void 0,i=>{if(i?.classList?.contains("qmsg-shadow-container")||i?.closest("qmsg")&&i.getRootNode()instanceof ShadowRoot)return  false}),t=gt.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Q.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const te=new p.GM_Menu({GM_getValue:Z,GM_setValue:Y,GM_registerMenuCommand:Zt,GM_unregisterMenuCommand:Qt}),F=new p.Httpx({xmlHttpRequest:Jt,logDetails:Vt});F.interceptors.request.use(e=>e);F.interceptors.response.use(void 0,e=>(u.error("拦截器-请求错误",e),e.type==="onabort"?_.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?_.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?_.error("请求超时",{consoleLogContent:true}):_.error("其它错误",{consoleLogContent:true}),e));x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const K=p.addStyle.bind(p),k=j.selector.bind(j),B=j.selectorAll.bind(j);new p.GM_Cookie;const Bt="GM_Panel",Ct="data-init",nt="data-key",st="data-default-value",ee="data-init-more-value",A="data-storage-api",dt={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},$t={setting:{get width(){return dt.width<550?"88vw":dt.width<700?"550px":"700px"},get height(){return dt.height<450?"70vh":dt.height<550?"450px":"550px"}},settingMiddle:{get width(){return dt.width<350?"88vw":"350px"}}};class ie{storageKey;listenerData;constructor(t){if(typeof t=="string"){let i=t.trim();if(i=="")throw new Error("key参数不能为空字符串");this.storageKey=i;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new Q.Dictionary;}getLocalValue(){let t=Z(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){Y(this.storageKey,t);}set(t,i){let n=this.get(t),s=this.getLocalValue();Reflect.set(s,t,i),this.setLocalValue(s),this.triggerValueChangeListener(t,n,i);}get(t,i){let n=this.getLocalValue();return Reflect.get(n,t)??i}getAll(){return this.getLocalValue()}delete(t){let i=this.get(t),n=this.getLocalValue();Reflect.deleteProperty(n,t),this.setLocalValue(n),this.triggerValueChangeListener(t,i,void 0);}has(t){let i=this.getLocalValue();return Reflect.has(i,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(i=>Reflect.get(t,i))}clear(){rt(this.storageKey);}addValueChangeListener(t,i){let n=Math.random(),s=this.listenerData.get(t)||[];return s.push({id:n,key:t,callback:i}),this.listenerData.set(t,s),n}removeValueChangeListener(t){let i=false;for(const[n,s]of this.listenerData.entries()){for(let o=0;o<s.length;o++){const r=s[o];(typeof t=="string"&&r.key===t||typeof t=="number"&&r.id===t)&&(s.splice(o,1),o--,i=true);}this.listenerData.set(n,s);}return i}triggerValueChangeListener(t,i,n){if(!this.listenerData.has(t))return;let s=this.listenerData.get(t);for(let o=0;o<s.length;o++){const r=s[o];if(typeof r.callback=="function"){let l=this.get(t),c,d;typeof i<"u"&&arguments.length>=2?d=i:d=l,typeof n<"u"&&arguments.length>2?c=n:c=l,r.callback(t,d,c);}}}}const ot=new ie(Bt),ht={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new p.Dictionary),this.__contentConfig}},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${pt?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(e,t,i){let n=pt?.script?.supportURL||pt?.script?.namespace;return typeof n=="string"&&p.isNotNull(n)&&window.open(n,"_blank"),false}}]}},ne={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{q.showPanel(ht.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){q.isTopWindow()&&te.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let i=this.$data.menuOption.findIndex(n=>n.key===t.key);i!==-1&&(this.$data.menuOption[i]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}},q={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new p.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new p.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new p.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new p.Dictionary),this.__onceExecData},get scriptName(){return Lt},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:Bt,attributeKeyName:nt,attributeDefaultValueName:st},init(){this.initContentDefaultValue(),ne.init();},isTopWindow(){return x.top===x.self},initContentDefaultValue(){const e=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let s=n.attributes[Ct];if(typeof s=="function"){let c=s();if(typeof c=="boolean"&&!c)return}let o=new Map,r=n.attributes[nt];if(r!=null){const c=n.attributes[st];o.set(r,c);}let l=n.attributes[ee];if(typeof l=="object"&&l&&Object.keys(l).forEach(c=>{o.set(c,l[c]);}),!o.size){u.warn(["请先配置键",n]);return}if(n.type==="switch"){let c=typeof n.disabled=="function"?n.disabled():n.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[c,d]of o.entries())this.setDefaultValue(c,d);},t=n=>{for(let s=0;s<n.length;s++){let o=n[s];e(o);let r=o.forms;r&&Array.isArray(r)&&t(r);}},i=[...ht.getAllContentConfig()];for(let n=0;n<i.length;n++){let s=i[n];if(!s.forms)continue;const o=s.forms;o&&Array.isArray(o)&&t(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&u.warn("请检查该key(已存在): "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},setValue(e,t){ot.set(e,t);},getValue(e,t){let i=ot.get(e);return i??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){ot.delete(e);},hasKey(e){return ot.has(e)},addValueChangeListener(e,t){return ot.addValueChangeListener(e,(n,s,o)=>{t(e,o,s);})},removeValueChangeListener(e){ot.removeValueChangeListener(e);},triggerMenuValueChange(e,t,i){ot.triggerValueChangeListener(e,i,t);},exec(e,t,i,n=true){const s=this;let o;typeof e=="string"||Array.isArray(e)?o=()=>e:o=e;let r=false,l=o(),c=[];Array.isArray(l)?(r=true,c=l):c.push(l);let d=c.find(T=>!this.$data.contentConfigInitDefaultValue.has(T));if(d){u.warn(`${d} 键不存在`);return}let m=JSON.stringify(c);if(n&&this.$data.onceExecMenuData.has(m))return this.$data.onceExecMenuData.get(m);let g=[],f=[],h=(T,I)=>{let V=[];Array.isArray(I)||(I=[I]),I.forEach(H=>{if(H!=null&&H instanceof HTMLStyleElement){V.push(H);return}}),g=g.concat(V);},y=T=>this.getValue(T),$=()=>{for(let T=0;T<g.length;T++)g[T].remove(),g.splice(T,1),T--;},S=()=>{let T=false;return typeof i=="function"?T=i(c):T=c.every(I=>y(I)),T},C=T=>{let I=S(),V=[];if(I){let H=c.map(D=>this.getValue(D)),z=t({value:r?H:H[0],addStyleElement:(...D)=>h(true,...D)});Array.isArray(z)||(z=[z]),z.forEach(D=>{if(D!=null&&D instanceof HTMLStyleElement){V.push(D);return}});}$(),g=[...V];};n&&c.forEach(T=>{let I=this.addValueChangeListener(T,(V,H,z)=>{C();});f.push(I);}),C();let L={reload(){C();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&s.$data.onceExecMenuData.delete(m);},clearStoreStyleElements:()=>$(),removeValueChangeListener:()=>{f.forEach(T=>{this.removeValueChangeListener(T);});}};return this.$data.onceExecMenuData.set(m,L),L},execMenu(e,t,i=false,n=false){return this.exec(e,s=>t(s),s=>s.every(r=>{let l=!!this.getValue(r);return q.$data.contentConfigInitDisabledKeys.includes(r)&&(l=false,u.warn(`.execMenu${n?"Once":""} ${r} 被禁用`)),i&&(l=!l),l}),n)},execMenuOnce(e,t,i=false,n=false){const s=this.execMenu(e,t,i,true);if(n&&s){const o=()=>{s.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,o);const r=s.clear;s.clear=()=>{r(),this.removeUrlChangeWithExecMenuOnceListener(e);};}return s},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),ot.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t);},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},triggerUrlChangeWithExecMenuOnceEvent(e){this.$data.urlChangeReloadMenuExecOnce.forEach((t,i)=>{t(e);});},showPanel(e,t=`${Lt}-设置`,i=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let s=e.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!i&&!s&&e.push(...ht.getDefaultBottomContentConfig());let o=N.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:(r,l)=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(r,l)=>{r(),this.$data.$panel=null;}},width:$t.setting.width,height:$t.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o,this.$data.panelContent=e,n||this.registerConfigSearch({$panel:o,content:e});},registerConfigSearch(e){const{$panel:t,content:i}=e;let n=async(m,g)=>{if(m==null)return;let f=await g(m);return f&&typeof f.isFind=="boolean"&&f.isFind?f.data:await n(f.data,g)},s=(m,g)=>{const f=new IntersectionObserver(h=>{h.forEach(y=>{y.isIntersecting&&(g?.(),f.disconnect());});},{root:null,threshold:1});f.observe(m),m.scrollIntoView({behavior:"smooth",block:"center"});},o=m=>{const g="pops-flashing";a.animationend(m,()=>{m.classList.remove(g);}),m.classList.add(g);},r=(m,g)=>{p.preventEvent(m);let f=N.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:$t.settingMiddle.width,height:"auto",drag:true,style:`
					${N.config.cssText.panelCSS}

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
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle??""}
				`});f.$shadowRoot.querySelector(".search-wrapper");let h=f.$shadowRoot.querySelector(".search-config-text"),y=f.$shadowRoot.querySelector(".search-result-wrapper");h.focus();let $=()=>{a.empty(y);},S=L=>{const T=p.queryProperty(L,V=>V?.next?{isFind:false,data:V.next}:{isFind:true,data:V});let I=a.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${T.matchedData?.path}</div>
							<div class="search-result-item-description">${T.matchedData?.description??""}</div>
						`});return a.on(I,"click",V=>{let z=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[L.index];if(!z){_.error(`左侧项下标${L.index}不存在`);return}z.scrollIntoView({behavior:"smooth",block:"center"}),z.click(),n(L.next,async D=>{if(D?.next){let w=await p.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(b=>{const v=Reflect.get(b,"__formConfig__");return typeof v=="object"&&v!=null&&v.text===D.name}),2500);if(w)w.click();else return _.error("未找到对应的二级菜单"),{isFind:true,data:D};return {isFind:false,data:D.next}}else {let w=await p.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(b=>Reflect.get(b,"__formConfig__")===D.matchedData?.formConfig),2500);if(w){s(w);let b=w.closest(".pops-panel-forms-fold[data-fold-enable]");b&&(b.querySelector(".pops-panel-forms-fold-container").click(),await p.sleep(500)),s(w,()=>{o(w);});}else _.error("未找到对应的菜单项");return {isFind:true,data:D}}});}),I},C=L=>{const T=new RegExp(L,"i"),I=[],V=(z,D)=>{for(let w=0;w<z.length;w++){const b=z[w];let v=b.forms;if(v&&Array.isArray(v)){const R=p.deepClone(D);if(b.type==="deepMenu"){const P=p.queryProperty(R,W=>W?.next?{isFind:false,data:W.next}:{isFind:true,data:W});P.next={name:b.text};}V(v,R);}else {let R=Reflect.get(b,"text"),P=Reflect.get(b,"description");const W=[R,P];let X=W.findIndex(tt=>{if(typeof tt=="string")return tt.match(T)});if(X!==-1){const tt=p.deepClone(D),ft=p.queryProperty(tt,at=>at?.next?{isFind:false,data:at.next}:{isFind:true,data:at});ft.next={name:R,matchedData:{path:"",formConfig:b,matchedText:W[X],description:P}};const It=[];p.queryProperty(tt,at=>{const qt=at?.name;return typeof qt=="string"&&qt.trim()!==""&&It.push(qt),at?.next?{isFind:false,data:at.next}:{isFind:true,data:at}});const Yt=It.join(wt.escapeHtml(" - "));ft.next.matchedData.path=Yt,I.push(tt);}}}};for(let z=0;z<i.length;z++){const D=i[z];if(!D.forms||D.isBottom&&D.id==="script-version")continue;const w=D.forms;if(w&&Array.isArray(w)){let b=D.title;typeof b=="function"&&(b=b()),V(w,{index:z,name:b});}}let H=document.createDocumentFragment();for(const z of I){let D=S(z);H.appendChild(D);}$(),y.append(H);};a.on(h,"input",p.debounce(L=>{p.preventEvent(L);let T=a.val(h).trim();if(T===""){$();return}C(T);},200));},l=null,c=false,d;a.on(t.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",r),a.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(m,g)=>{clearTimeout(d),d=void 0,c&&l===g?(c=false,l=null,r(m)):(d=setTimeout(()=>{c=false;},200),c=true,l=g);},{capture:true}),t.$shadowRoot.appendChild(a.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e}};class se{$data={get enable(){return q.getValue(et.httpx_cookie_manager_enable.key,et.httpx_cookie_manager_enable.defaultValue)},get useDocumentCookie(){return q.getValue(et.httpx_cookie_manager_use_document_cookie.key,et.httpx_cookie_manager_use_document_cookie.defaultValue)},cookieRule:[]};constructor(t){Array.isArray(t)&&(this.$data.cookieRule=t);}fixCookieSplit(t){return p.isNotNull(t)&&!t.trim().endsWith(";")&&(t+=";"),t}concatCookie(t,i){return p.isNull(t)?i:(t=t.trim(),i=i.trim(),t=this.fixCookieSplit(t),i.startsWith(";")&&(i=i.substring(1)),t.concat(i))}handle(t){if(t.fetch||!this.$data.enable)return;let i="",n=t.url;n.startsWith("//")&&(n=window.location.protocol+n);let s=new URL(n);this.$data.useDocumentCookie&&s.hostname.endsWith(window.location.hostname.split(".").slice(-2).join("."))&&(i=this.concatCookie(i,document.cookie.trim()));for(let o=0;o<this.$data.cookieRule.length;o++){let r=this.$data.cookieRule[o];if(s.hostname.match(r.hostname)){let l=q.getValue(r.key);if(p.isNull(l))break;i=this.concatCookie(i,l);}}p.isNotNull(i)&&(t.headers&&t.headers.Cookie?t.headers.Cookie=this.concatCookie(t.headers.Cookie,i):t.headers.Cookie=i,u.info(["Httpx => 设置cookie:",t])),t.headers&&t.headers.Cookie!=null&&p.isNull(t.headers.Cookie)&&delete t.headers.Cookie;}}wt.setGMResourceCSS(zt.Viewer);wt.setGMResourceCSS(zt.Hljs);const ae=new se([{key:"httpx-cookie-bbs.binmt.cc",hostname:/bbs.binmt.cc/g}]);F.interceptors.request.use(e=>(ae.handle(e),e));N.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});const G={registerLeftMenu(e){p.waitNode(".comiis_sidenv_box .sidenv_li .comiis_left_Touch",1e4).then(t=>{if(!t){u.error("注册左侧面板菜单失败，原因：该元素不存在");return}let i=a.createElement("li",{className:"comiis_left_Touch",innerHTML:`
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${e.name}
						</a>
						`}),n=i.querySelector(".comiis_font");typeof e.style=="string"&&(n.style.cssText=e.style),typeof e.icon=="string"&&(n.innerHTML=e.icon),typeof e.iconColor=="string"&&(n.style.color=e.iconColor),typeof e.iconSize=="string"&&(n.style.fontSize=e.iconSize),a.on(i,"click",s=>{p.preventEvent(s),typeof e.callback=="function"&&e.callback();}),a.append(t,i);});},comiisForumList:()=>document.querySelectorAll("li.forumlist_li"),comiisPostli:()=>document.querySelectorAll("div.comiis_postli.comiis_list_readimgs.nfqsqi"),comiisMmlist:()=>document.querySelectorAll(".comiis_mmlist")},oe=`.pops-confirm-content {\r
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
`,J={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g,ptid:/&ptid=([\d]+)/i,pid:/&pid=([\d]+)/i,tid:/&tid=([\d]+)/i},U={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=x.discuz_uid;if(typeof e=="string")return e;let t=document.querySelector('.sidenv_exit a[href*="uid="]');if(t){let i=t.href.match(/uid=([0-9]+)/);if(i)return i[i.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let n=0;n<e.length;n++){let o=e[n].value;if(o)return o}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let n=0;n<t.length;n++){let o=t[n].href.match(J.formhash);if(o){let r=o[o.length-1];if(r)return r}}let i=await F.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(i.status){let n=i.data.responseText,o=a.parseHTML(n,true,true).querySelector("input[name=formhash]");if(o){let r=o.value;if(p.isNotNull(r))return r}}else u.error("请求个人主页获取formhash失败",i);},envIsMobile(){return (x.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let i=t.filter(Boolean);return i[i.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},re={$data:{cid:""},init(){this.registerMenu();},registerMenu(){G.registerLeftMenu({name:"小黑屋",iconColor:"#000000",icon:"",callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=_.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){_.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let i=N.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let l=_.loading("正在获取小黑屋名单中...");u.info("下一页的cid: ",this.$data.cid);let c=await this.getBlackListInfo(this.$data.cid);l.close(),c&&(this.$data.cid=c.next_cid,c.data.forEach(d=>{let m=this.createListViewItem(d);n.appendChild(m);}),c.data.length===0?_.error("获取小黑屋名单为空"):_.success(`成功获取 ${c.data.length}条数据`),p.dispatchEvent(s,"input"));}},cancel:{text:"关闭"}},width:"88vw",height:"82vh",style:oe}),n=i.$shadowRoot.querySelector(".blackhome-user-list"),s=i.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(l=>{let c=this.createListViewItem(l);n.appendChild(c);}),_.success(`成功获取 ${t.data.length}条数据`);let o=false;a.on(s,["input","propertychange"],p.debounce(()=>{let l=s.value.trim();if(!o){if(o=true,l==""){i.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.removeAttribute("style");}),o=false;return}i.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(c=>{c.getAttribute("data-name").match(new RegExp(l,"ig"))||c.getAttribute("data-uid").trim().match(new RegExp(l,"ig"))||c.getAttribute("data-operator").match(new RegExp(l,"ig"))?c.removeAttribute("style"):c.setAttribute("style","display:none;");}),o=false;}}));let r=await this.getBlackListInfo(this.$data.cid);r&&(this.$data.cid=r.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},i=await F.get(`/forum.php?${p.toSearchParamsStr(t)}`,{headers:{"User-Agent":p.getRandomPCUA()},responseType:"json"});if(!i.status)return;let n=p.toJSON(i.data.responseText),s=n.message.split("|"),o=s[s.length-1],r=p.parseObjectToArray(n.data),l=[],c=[];return r.forEach(d=>{let m=d.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(m==null){let g=parseInt((Date.now()/1e3).toString()),f=0,h=d.dateline.match(/([0-9]+|半)[\s\S]*秒前/),y=d.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),$=d.dateline.match(/([0-9]+|半)[\s\S]*小时前/),S=d.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),C=d.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),L=d.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(h)h=h[h.length-1],h=h.replace(/半/g,.5),h=parseFloat(h),f=g-h;else if(y)y=y[y.length-1],y=y.replace(/半/g,.5),y=parseFloat(y),f=g-y*60;else if($)$=$[$.length-1],$=$.replace(/半/g,.5),$=parseFloat($),f=g-$*60*60;else if(S){let T=S[1],I=S[2];f=g-86400-parseInt(T)*3600-parseInt(I)*60;}else if(C){let T=C[1],I=C[2];f=g-86400*2-parseInt(T)*3600-parseInt(I)*60;}else L&&(L=L[L.length-1],L=L.replace(/半/g,.5),L=parseFloat(L),f=g-L*60*60*24);d.time=parseInt(f.toString())*1e3,l=l.concat(d);return}else m=m[0];d.time=p.formatToTimeStamp(m),l=l.concat(d);}),p.sortListByProperty(l,"time"),p.sortListByProperty(c,"time",false),l=l.concat(c),{next_cid:o,data:l}},createListViewItem(e){let t=a.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${U.getAvatar(e.uid,"big")}" loading="lazy">
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
                        <img loading="lazy" src="${U.getAvatar(e.operatorid,"big")}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return a.on(t,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),a.on(t,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,"_blank");}),t}},le=`.pops-alert-content{\r
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
`,ce={$data:{},init(){this.registerMenu();},registerMenu(){G.registerLeftMenu({name:"在线用户",iconColor:"#2d92ff",icon:"",callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=_.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let i=N.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"82vh",style:le}),n=i.$shadowRoot.querySelector(".online-user-list"),s=i.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(r=>{let l=this.createListViewItem(r);n.appendChild(l);}),_.success(`成功获取 ${t.data.length}条数据`);let o=false;j.on(s,["propertychange","input"],p.debounce(()=>{let r=s.value.trim();if(!o){if(o=true,r==""){i.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(l=>{l.removeAttribute("style");}),o=false;return}i.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(l=>{l.getAttribute("data-name").match(new RegExp(r,"ig"))||l.getAttribute("data-sf").match(new RegExp(r,"ig"))||l.getAttribute("data-uid").match(new RegExp(r,"ig"))?l.removeAttribute("style"):l.setAttribute("style","display:none;");}),o=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await F.get(`/forum.php?${p.toSearchParamsStr(e)}`,{headers:{"User-Agent":p.getRandomPCUA()}});if(!t.status)return;let i=p.parseFromString(t.data.responseText,"text/html"),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};i.querySelectorAll("#onlinelist ul li").forEach(r=>{let l=r.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],c=U.getAvatar(l,"middle"),d=r.querySelector("a").innerText,m="",g=r.querySelector("a").getAttribute("href"),f=r.querySelector("img").src;f.indexOf("online_member")!=-1?m="会员":f.indexOf("online_moderator")!=-1?m="版主":f.indexOf("online_supermod")!=-1?m="超级版主":f.indexOf("online_admin")!=-1?m="管理员":m="未知身份",n.data.push({uid:l,avatar:c,name:d,sf:m,space:g});});let o=i.querySelector("#online div.bm_h span.xs1").textContent;return n.totalOnline=p.parseInt(o.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=p.parseInt(o.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=p.parseInt(o.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=p.parseInt(o.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(e){let t=j.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return j.on(t,"click",".online-user-avatar",i=>{p.preventEvent(i),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},me=()=>{var e,t,i,n,s,o,r,l,c,d,m;d=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,e=function(h){var y;if(h=(y=h.originalTarget)!=null?y:h.target,h!=null&&h.localName==="a"&&h.className.indexOf("texttolink")!==-1&&(y=h.getAttribute("href"),y.indexOf("http")!==0&&y.indexOf("ed2k://")!==0&&y.indexOf("thunder://")!==0))return h.setAttribute("href","http://"+y)},document.addEventListener("mouseover",e),c=function(h){if(typeof h=="object"&&h!=null&&typeof h.parentNode<"u"&&typeof h.parentNode.className<"u"&&typeof h.parentNode.className.indexOf=="function"&&h.parentNode.className.indexOf("texttolink")===-1&&h.nodeName!=="#cdata-section"){var y=h.textContent.replace(d,'<a href="$1" target="_blank" class="texttolink">$1</a>');if(h.textContent.length!==y.length){var $=document.createElement("span");return $.innerHTML=y,console.log(`识别: ${$.querySelector("a")}`),h.parentNode.replaceChild($,h)}}},t="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),m=`//text()[not(ancestor::${t.join(") and not(ancestor::")})]`,i=new RegExp(`^(${t.join("|")})$`,"i"),s=function(h,y){var $,S;if(y+1e4<h.snapshotLength){var C=$=y;for(S=y+1e4;y<=S?$<=S:$>=S;C=y<=S?++$:--$)c(h.snapshotItem(C));setTimeout(function(){return s(h,y+1e4)},15);}else for(C=$=y,S=h.snapshotLength;y<=S?$<=S:$>=S;C=y<=S?++$:--$)c(h.snapshotItem(C));},o=function(h){return h=document.evaluate(m,h,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),s(h,0)},r=function(h){for(h=document.createTreeWalker(h,NodeFilter.SHOW_TEXT,{acceptNode:function(y){if(!i.test(y.parentNode.localName))return NodeFilter.FILTER_ACCEPT}},false);h.nextNode();)c(h.currentNode);},l=new window.MutationObserver(function(h){var y,$,S=0;for(y=h.length;S<y;S++){var C=h[S];if(C.type==="childList"){var L=C.addedNodes,T=0;for($=L.length;T<$;T++)C=L[T],r(C);}}}),n=function(){return o(document.body),l.observe(document.body,{childList:true,subtree:true})};var g=function(h){var y=h.getAttribute("href");if(y.indexOf("http")!==0&&y.indexOf("ed2k://")!==0&&y.indexOf("thunder://")!==0)return h.setAttribute("href","http://"+y)},f=function(){for(var h=document.getElementsByClassName("texttolink"),y=0;y<h.length;y++)g(h[y]);};setTimeout(f,1500),setTimeout(n,100);},_t={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(i=>i.hostName===window.location.hostname);return t?p.formatTime(Date.now(),"yyyyMMdd")===p.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),i=t.findIndex(n=>n.hostName===e.hostName);i!==-1&&t.splice(i,1),t.push(e),Y(this.$key.sign,t);},getSignInfo(){let e=Z(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(i=>i.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),i=t.findIndex(n=>n.hostName===e);i!==-1&&t.splice(i,1),Y(this.$key.sign,t);}else rt(this.$key.sign);},checkLogin(){return U.envIsMobile()?!!k("a[href*='member.php?mod=logging&action=logout']"):!!k("#comiis_key")},async sign(){if(this.checkSignInfo()){u.info("今日已签到");return}let e=await U.getFormHash();if(e==null){if(k("#comiis_picshowbox")){u.info("当前为评论区的看图模式 ");return}this.clearSignInfo(window.location.hostname),_.error("自动签到：获取账号formhash失败",{consoleLogContent:true});return}let t=!!q.getValue("mt-auto-sign-useFetch"),i=p.getRandomPCUA(),n=()=>{this.setSignInfo();},s=()=>{this.clearSignInfo(window.location.hostname);},o=l=>{let d=gt.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");d.innerText=l;},r=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let l={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},c=await F.get(`/k_misign-sign.html?${p.toSearchParamsStr(l)}`,{fetch:t,headers:{"User-Agent":i},allowInterceptConfig:false});if(!c.status){_.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),u.info("签到信息：",c);let d=c.data.responseText,m=p.parseCDATA(d),g=a.parseHTML(`<div>${m}</div>`,true,false),f=a.text(g);if(f.includes("需要先登录")){_.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),s();return}else if(f.includes("请稍后再试")||f.includes("您已经被列入黑名单")||f.includes("绑定手机号后才可以签到")||f.includes("您所在用户组不允许使用")){_.error("签到："+f,{timeout:5e3});return}else if(f.includes("今日已签")||f.includes("今日已经签到")){_.info("签到："+f);return}else if(d.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){_.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in p.toJSON(d)){_.success("签到: 签到成功");return}let h=g.querySelector(".con"),y=g.querySelector(".line");if(h&&y){let $=a.text(h).match(/([0-9]+)金币/),S=a.text(y).match(/([0-9]+)/),C=$[$.length-1],L=S[S.length-1];u.success(`金币${C}，排名${L}`),_.info(`
							<div style="display: flex;${U.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${L}<br>金币 ${C}</div>
							</div>`,{timeout:4e3,isHTML:true});return}o(d);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let l={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},c=await F.post(`/plugin.php?${p.toSearchParamsStr(l)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":i,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!c.status){_.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),u.info("签到信息：",c);let d=c.data.responseText;if(d.includes("签到成功")){_.success("签到：签到成功");return}if(d.includes("今日已经签到")){_.info("签到：您今日已经签到，请明天再来！");return}o(d);}}];for(let l=0;l<r.length;l++){const c=r[l];let d=await F.get(c.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":p.getRandomPCUA()},allowInterceptConfig:false});if(!d.status){u.error("签到：检查签到插件是否启用的请求失败",d);continue}if(a.parseHTML(d.data.responseText,true,true).querySelector("#messagetext")||d.data.responseText.includes("插件不存在或已关闭")){u.error(`插件：${c.checkPluginEnableUrl} 未启用或不存在`);continue}await c.sign();break}}},E={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?mod=viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?mod=guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space")},isMySpace(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space&do=profile&mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?forumlist")},isMessage(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space&do=notice")},isMessageList(){return window.location.pathname.startsWith("/home.php")&&window.location.search.startsWith("?mod=space&do=pm")},isPointsMall(){return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&window.location.search.startsWith("?id=keke_integralmal")},isPostPublish(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.startsWith("?mod=post")},isPostPublish_voting(){return window.location.pathname.startsWith("/forum.php")&&window.location.search.includes("&special=1")||window.location.search.includes("&fid=42")},isPostPublish_edit(){return this.isPostPublish()&&window.location.search.includes("&action=edit")},isPostPublish_newthread(){return this.isPostPublish()&&window.location.search.includes("&action=newthread")},isPostPublish_reply(){return this.isPostPublish()&&window.location.search.includes("&action=reply")}},de=`#comiis_foot_menu_beautify {\r
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
`,pe=()=>[{"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif"},{"[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png"},{"[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}],Rt=[];class Ut{option;$data={STORAGE_KEY:"mt-image-bed-upload-history"};constructor(t){this.option=t,Rt.push({id:this.option.id,callback:this.option.delImageEvent.bind(this)}),this.addTab(),a.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,"click",async i=>{await this.option.uploadBtnClickEvent(i)&&k(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`).click();}),a.on(`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,"change",async i=>{let n=i.target,s=()=>{n.value="";},o=async r=>{let l=await this.option.fileChangeEvent(i,r);s(),l.success&&l.data.forEach(c=>{this.addImage(c);let d=this.createImageBtnElement("插入",c.url);this.setImageBtnDeleteEvent(d,c),a.append(`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,d);});};if(n.files&&n.files.length){let r=n.files;if(q.getValue("mt-image-bed-watermark-enable")){let l=_.loading("处理水印中..."),c=[],d=[];await Promise.all(Array.from(n.files).map(async(m,g)=>{if(m.type==="image/gif"){let h=await p.parseFileToBase64(m);c.push(h),d.push(m);}else {_.info(`添加水印 ${g+1}/${r.length}`);var f=new window.Watermark;await f.setFile(m),f.addText({text:[q.getValue("mt-image-bed-watermark-text")],color:q.getValue("mt-image-bed-watermark-text-color"),fontSize:q.getValue("mt-image-bed-watermark-font-size"),globalAlpha:q.getValue("mt-image-bed-watermark-font-opacity"),xMoveDistance:q.getValue("mt-image-bed-watermark-left-right-margin"),yMoveDistance:q.getValue("mt-image-bed-watermark-top-bottom-margin"),rotateAngle:q.getValue("mt-image-bed-watermark-rotate")}),c.push(f.render("png")),d.push(p.parseBase64ToFile(f.render("png"),"WaterMark_"+m.name));}})),l.close(),r=d,q.getValue("mt-image-bed-watermark-autoAddWaterMark")?await o(r):N.confirm({title:{text:"水印预览",position:"center"},content:{text:`
									<div class="upload-image-water">${c.map(m=>`<img src="${m}" crossoriginNew="anonymous" loading="lazy">`).join(`
`)}
									</div>
									`,html:true},btn:{ok:{text:"继续上传",async callback(m,g){m.close(),await o(r);}},close:{callback(m,g){m.close(),s();}},cancel:{callback(m,g){m.close(),s();}}},width:"88vw",height:"80vh",style:`
								.upload-image-water {

								}
								.upload-image-water img{
									width: 100%;
								}
								`});}else await o(r);}});}addTab(){let t=k("#comiis_pictitle_key"),i=t.querySelector("a[data-type='history']"),n=`
            <li>
                <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
            </li>
        `;if(!i){let r=a.createElement("li");i=a.createElement("a",{href:"javascript:;",className:"comiis-picture-tab",innerHTML:"历史图片"},{"data-type":"history"}),a.on(i,"click",()=>{this.initHistoryUploadImageList();}),a.append(r,i),a.append(t,r);}a.before(i.parentElement,n);let s=k("#comiis_pictitle_tab .bqbox_t"),o=Array.from(B("#comiis_pictitle_tab .comiis_upbox")).find(r=>!!r.querySelector("#imglist_history"));o||(o=a.createElement("div",{className:"comiis_upbox bg_f cl",innerHTML:`
					<ul class="comiis_post_imglist cl" id="imglist_history">	
                    </ul>
				`},{style:"display: none;"}),a.before(s,o),o=Array.from(B("#comiis_pictitle_tab .comiis_upbox")).find(r=>!!r.querySelector("#imglist_history"))),a.before(o,`
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
            `);}createImageBtnElement(t,i){return a.createElement("li",{innerHTML:`
            <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
                <a href="javascript:;">
                    <i class="comiis_font f_g"></i>
                </a>
            </span>
            <span class="charu f_f">${t}</span>
            <span class="p_img">
                <a href="javascript:;"
                onclick="comiis_addsmilies('[img]${i}[/img]')">
                    <img style="height:54px;width:54px;" 
                        title="${i}" 
                        src="${i}" 
                        loading="lazy"
                        class="vm b_ok"></a>
            </span>
            `})}initHistoryUploadImageList(){let t=k("#comiis_pictitle_tab #imglist_history");t.innerHTML="";let i=document.createDocumentFragment();this.getAllImage().forEach(n=>{let s=this.createImageBtnElement(n.labelName,n.data.url);this.setHistoryImageBtnDeleteEvent(s,n),i.appendChild(s);}),t.appendChild(i);}setImageBtnDeleteEvent(t,i){let n=t.querySelector(".delImg");a.on(n,"click",async s=>{await this.option.delImageEvent(s,i)&&this.deleteImage(this.option.id,i)&&a.remove(t);});}setHistoryImageBtnDeleteEvent(t,i){let n=t.querySelector(".delImg");a.on(n,"click",async s=>{let o=Rt.find(l=>l.id===i.id);if(!o)return;await o.callback(s,i.data)&&this.deleteImage(i.id,i.data)&&a.remove(t);});}addImage(t){let i=Z(this.$data.STORAGE_KEY,[]);i.push({id:this.option.id,name:this.option.name,labelName:this.option.labelName,data:t}),Y(this.$data.STORAGE_KEY,i);}getAllImage(){return Z(this.$data.STORAGE_KEY,[])}deleteImage(t,i){let n=this.getAllImage(),s=n.findIndex(o=>o.id===t&&JSON.stringify(o.data)===JSON.stringify(i));return s!=-1?(n.splice(s,1),Y(this.$data.STORAGE_KEY,n),true):false}}const Ft={$data:{get account(){return q.getValue("mt-image-bed-hello-account")},get password(){return q.getValue("mt-image-bed-hello-password")},get token(){return q.getValue("mt-image-bed-hello-token")}},$code:{401:"未登录或授权失败",403:"管理员关闭了接口功能或没有该接口权限",429:"超出请求配额，请求受限",500:"服务端出现异常"},$config:{base_url:"https://www.helloimg.com/api/v1",TAG:"Hello图床："},$tabConfig:{id:"www.helloimg.com",name:"Hello图床",labelName:"hello"},init(){const e=this;new Ut({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(t){return await e.checkLogin()},async fileChangeEvent(t,i){let n=[],s=_.loading("上传中..."),o=true;for(let r=0;r<Array.from(i).length;r++){const l=Array.from(i)[r];let c=await e.uploadImage(l);c?(n.push({url:c.data.links.url,data:c.data}),o=o&&true):o=o&&false;}return s.close(),{success:o,data:n}},storageSaveCallBack(t){return t.data},async delImageEvent(t,i){if(await e.checkLogin()){let s=_.loading("正在删除图片..."),o=await e.deleteImage(i.data.key)??false;return s.close(),o}else return  false}});},async checkLogin(){return this.$data.account?this.$data.password?this.$data.token?true:(_.error(`${this.$config.TAG}请先配置token`),false):(_.error(`${this.$config.TAG}请先配置密码`),false):(_.error(`${this.$config.TAG}请先配置账号`),false)},async uploadImage(e){let t=new FormData;t.append("file",e),t.append("permission","0"),t.append("strategy_id","0"),t.append("album_id","0");let i=await F.post(`${this.$config.base_url}/upload`,{data:t,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":p.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(!i.status){u.error(i),_.error(this.$config.TAG+"网络异常，上传图片失败");return}if(i.data.status in this.$code){u.error(i),_.error(this.$config.TAG+this.$code[i.data.status]);return}let n=p.toJSON(i.data.responseText);if(u.info(n),!n.status){_.error(this.$config.TAG+n.message);return}_.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(e),await new Promise(o=>{s.onload=function(){let l={imageUri:this.result,data:n.data};o(l);};})},async deleteImage(e){let t=await F.delete(this.$config.base_url+"/images/"+e,{timeout:15e3,headers:{Accept:"application/json",Authorization:`Bearer ${this.$data.token}`,"User-Agent":p.getRandomPCUA(),Referer:`${this.$config.base_url}/`,Origin:this.$config.base_url},allowInterceptConfig:false});if(t.data.status in this.$code)return _.error(this.$config.TAG+this.$code[t.data.status]),false;let i=p.toJSON(t.data.responseText);return i.status?(_.success(this.$config.TAG+"删除成功"),true):(_.error(this.$config.TAG+i.message),false)}},Ot={$data:{csrf_token:null},$config:{TAG:"MT图床：",base_url:"https://img.binmt.cc"},$tabConfig:{id:"img.binmt.cc",name:"MT图床",labelName:"mt"},init(){const e=this;new Ut({id:this.$tabConfig.id,name:this.$tabConfig.name,labelName:this.$tabConfig.labelName,async uploadBtnClickEvent(t){return await e.checkLogin()},async fileChangeEvent(t,i){let n=[],s=_.loading("上传中..."),o=true;for(let r=0;r<Array.from(i).length;r++){const l=Array.from(i)[r];let c=await e.uploadImage(l);c?(n.push({url:c.data.links.url,data:c.data}),o=o&&true):o=o&&false;}return s.close(),{success:o,data:n}},storageSaveCallBack(t){return t.data},async delImageEvent(t,i){return  true}});},async checkLogin(){if(!this.$data.csrf_token){let e=_.loading("正在获取CSRF Token中..."),t=await this.getCSRFToken();if(e.close(),!t)return  false;this.$data.csrf_token=t;}return  true},async getCSRFToken(){let e=await F.get(this.$config.base_url,{allowInterceptConfig:false,headers:{"User-Agent":p.getRandomPCUA(),Referer:this.$config.base_url+"/",Origin:this.$config.base_url}});if(!e.status){_.error(this.$config.TAG+"获取CSRF Token失败，网络异常");return}let i=a.parseHTML(e.data.responseText,true,true).querySelector('meta[name="csrf-token"]')?.getAttribute("content");if(i)return u.info("获取的CSRF token：",i),_.success(this.$config.TAG+"获取CSRF Token成功"),i},async uploadImage(e){let t=new FormData;t.append("strategy_id","2"),t.append("file",e);let i=await F.post(`${this.$config.base_url}/upload`,{data:t,headers:{Accept:"application/json, text/javascript, */*; q=0.01","User-Agent":p.getRandomAndroidUA(),Origin:this.$config.base_url,pragma:"no-cache","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",Referer:this.$config.base_url+"/",Pragma:"no-cache","x-csrf-token":this.$data.csrf_token,"X-Requested-With":"XMLHttpRequest"},allowInterceptConfig:false});if(!i.status){u.error(i),_.error(this.$config.TAG+"网络异常，上传图片失败");return}let n=p.toJSON(i.data.responseText);if(u.info(n),!n.status){u.error(i),_.error(this.$config.TAG+n.message||JSON.stringify(n));return}_.success(this.$config.TAG+"上传成功");let s=new FileReader;return s.readAsDataURL(e),await new Promise(o=>{s.onload=function(){let l={imageUri:this.result,data:n.data};o(l);};})}},Ht=()=>({rainbow1:{key:"转普通彩虹",value:"",isFunc:true,num:1},rainbow2:{key:"转黑白彩虹",value:"",isFunc:true,num:2},rainbow3:{key:"转黑红彩虹",value:"",isFunc:true,num:3},rainbow4:{key:"转蓝绿彩虹",value:"",isFunc:true,num:4},size:{key:"大小",value:"[size=][/size]",tagL:"=",tagR:"]",L:"[size=]",R:"[/size]",cursorL:"[size=",cursorLength:6,quickUBBReplace:"[size=14]replace[/size]"},color:{key:"颜色",value:"[color=][/color]",tagL:"=",tagR:"]",L:"[color=]",R:"[/color]",cursorL:"[color=",cursorLength:7,quickUBBReplace:"[color=#000]replace[/color]"},b:{key:"加粗",value:"[b][/b]",tagL:"]",tagR:"[",L:"[b]",R:"[/b]",cursorR:"[/b]",cursorLength:4,quickUBBReplace:"[b]replace[/b]"},u:{key:"下划线",value:"[u][/u]",tagL:"]",tagR:"[",L:"[u]",R:"[/u]",cursorR:"[/u]",cursorLength:4,quickUBBReplace:"[u]replace[/u]"},i:{key:"倾斜",value:"[i][/i]",tagL:"]",tagR:"[",L:"[i]",R:"[/i]",cursorR:"[/i]",cursorLength:4,quickUBBReplace:"[i]replace[/i]"},s:{key:"中划线",value:"[s][/s]",tagL:"]",tagR:"[",L:"[s]",R:"[/s]",cursorR:"[/s]",cursorLength:4,quickUBBReplace:"[s]replace[/s]"},lineFeed:{key:"换行",value:"[*]",L:"",R:"[*]",cursorL:"[*]",cursorLength:3,quickUBBReplace:"replace[*]"},longHorizontalLine:{key:"水平线",value:"[hr]",L:"",R:"[hr]",cursorL:"[hr]",cursorLength:4,quickUBBReplace:"replace[hr]"},link:{key:"链接",value:"[url=][/url]",tagL:"=",tagR:"]",L:"[url=]",R:"[/url]",cursorL:"[url=",cursorLength:5,quickUBBReplace:"[url=replace]replace[/url]"},hide:{key:"隐藏",value:`[hide]
[/hide]`,tagL:"]",tagR:"[",L:"[hide]",R:"[/hide]",cursorR:"[/hide]",cursorLength:7,quickUBBReplace:`[hide]replace
[/hide]`},quote:{key:"引用",value:"[quote][/quote]",tagL:"]",tagR:"[",L:"[quote]",R:"[/quote]",cursorR:"[/quote]",cursorLength:8,quickUBBReplace:"[quote]replace[/quote]"},email:{key:"邮件",value:"[email=][/email]",tagL:"=",tagR:"]",L:"[email=]",R:"[/email]",cursorL:"[email=",cursorLength:7,quickUBBReplace:"[email=replace]replace[/email]"}}),jt=(e,t)=>{if(t=="")return "";var i=t,n,s,o,r,l,c,d,m;if(o=0,r=0,l=0,m=0,n="",e==1){m=40,o=255,c=1,d=0;do i.charCodeAt(d)!=32?(r+m<256?c==1&&(r+=m):c==1&&(c=2,r=255),o-m>-1?c==2&&(o-=m):c==2&&(c=3,o=0),l+m<256?c==3&&(l+=m):c==3&&(c=4,l=255),r-m>-1?c==4&&(r-=m):c==4&&(c=5,r=0),o+m<256?c==5&&(o+=m):c==5&&(c=6,o=255),l-m>-1?c==6&&(l-=m):c==6&&(c=1,l=0),s="",s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(d)}[/color]`):n+=i.charAt(d),d++;while(d<i.length)}else if(e==2)for(m=255/i.length,c=1;c<i.length+1;c++)i.charCodeAt(c-1)!=32?(o+=m,r+=m,l+=m,o>255&&(o=255),r>255&&(r=255),l>255&&(l=255),s="",s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(c-1)}[/color]`):n+=i.charAt(c-1);else if(e==3)for(m=255/i.length,c=1;c<i.length+1;c++)i.charCodeAt(c-1)!=32?(o+=m,r=29,l=36,o>255&&(o=255),r>255&&(r=255),l>255&&(l=255),s="",s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s+=parseInt(l).toString(16).length==1?0+parseInt(l).toString(16):parseInt(l).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(c-1)}[/color]`):n+=i.charAt(c-1);else if(e==4)for(m=255/i.length,c=1;c<i.length+1;c++)i.charCodeAt(c-1)!=32?(o=0,r=174,l+=m,o>255&&(o=255),r>255&&(r=255),l>255&&(l=255),s="",s+=parseInt(o).toString(16).length==1?0+parseInt(o).toString(16):parseInt(o).toString(16),s+=parseInt(r).toString(16).length==1?0+parseInt(r).toString(16):parseInt(r).toString(16),s+=parseInt(255-l).toString(16).length==1?0+parseInt(255-l).toString(16):parseInt(255-l).toString(16),s=s.toUpperCase(),n+=`[color=#${s}]${i.charAt(c-1)}[/color]`):n+=i.charAt(c-1);return n},ue=function(){x.$.fn.extend({insertAtCaret:function(e){var t=x.$(this)[0];if(document.selection){this.focus();var i=document.selection.createRange();i.text=e,this.focus();}else if(t.selectionStart||t.selectionStart=="0"){var n=t.selectionStart,s=t.selectionEnd,o=t.scrollTop;t.value=t.value.substring(0,n)+e+t.value.substring(s,t.value.length),this.focus(),t.selectionStart=n+e.length,t.selectionEnd=n+e.length,t.scrollTop=o;}else this.value+=e,this.focus();},selectRange:function(e,t){return t===void 0&&(t=e),this.each(function(){if("selectionStart"in this)this.selectionStart=e,this.selectionEnd=t;else if(this.setSelectionRange)this.setSelectionRange(e,t);else if(this.createTextRange){var i=this.createTextRange();i.collapse(true),i.moveEnd("character",t),i.moveStart("character",e),i.select();}})},getCursorPosition:function(){var e=x.$(this)[0],t=0;if("selectionStart"in e)t=e.selectionStart;else if("selection"in document){e.focus();var i=document.selection.createRange(),n=document.selection.createRange().text.length;i.moveStart("character",-e.value.length),t=i.text.length-n;}return t},moveCursorInCenterByText:function(e,t){var i=x.$(this)[0],n=i.value;for(let s=i.selectionStart-1;s>0;s--){let o=n[s-1],r=n[s];if(o==e&&r==t){this.selectRange(s);break}}},moveCursorToCenterByTextWithLeft:function(e,t){var i=x.$(this)[0],n=i.value;for(let s=i.selectionStart-1;s>0;s--)if(n.substring(s-t,s)==e){this.selectRange(s);break}},moveCursorToCenterByTextWithRight:function(e,t){var i=x.$(this)[0],n=i.value;for(let s=i.selectionStart-1;s>0;s--)if(n.substring(s,s+t)==e){this.selectRange(s+t);break}}});};let At={1:{error_match:"抱歉，您填写的内容包含敏感词而无法提交",popup_text:"抱歉，您填写的内容包含敏感词而无法提交"},2:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},3:{error_match:"抱歉，本主题已关闭，不再接受新内容",popup_text:"抱歉，本主题已关闭，不再接受新内容"},4:{error_match:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",popup_text:"抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复"},5:{error_match:"抱歉，您的帖子小于 10 个字符的限制",popup_text:"抱歉，您的帖子小于 10 个字符的限制"}},kt=null;const it={$data:{isUBBCodeInsertClick:false,db:new Q.indexedDB("mt_reply_record","input_text"),forum_action:null,get tid(){return U.getThreadId(window.location.href)}},$el:{$like:null,$btn_submit:null,$input:null,$form:null,$fastpostsubmit:null},init(){u.info("编辑器优化-简略版"),K(de),this.overridePageEditor();},overridePageEditor(){let e=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(2)"),t=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(3)"),i=document.querySelector("#comiis_foot_memu .comiis_flex li:nth-child(4)");this.$el.$form=document.querySelector("#fastpostform"),this.$data.forum_action=this.$el.$form.getAttribute("action");let n=a.serialize(this.$el.$form),s=document.querySelector("#fastpostform .header_y a").href;a.remove("#needmessage[name='message']"),a.remove("#imglist"),a.remove("#fastpostsubmitline"),a.remove("#fastpostsubmit");let o=document.querySelector("#comiis_foot_memu");a.hide(o,false);let r=pe(),l=Object.keys(r[0]).map(m=>{let g=r[0][m];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${m}');"><img loading="lazy" data-src="${g}" class="vm"></a></li>`}),c=Object.keys(r[1]).map(m=>{let g=r[1][m];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${m}');"><img loading="lazy" data-src="${g}" class="vm"></a></li>`}),d=Object.keys(r[2]).map(m=>{let g=r[2][m];return `<li><a href="javascript:;" onclick="comiis_addsmilies('${m}');"><img loading="lazy" data-src="${g}" class="vm"></a></li>`});a.after(o,`
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${e.innerHTML}</li>
                        <li data-attr="点赞">${t.innerHTML}</li>
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
                                        ${l.join(`
`)}
                                    </div>
    
                                    <div class="swiper-slide" style="display: none;">
                                        ${c.join(`
`)}
                                    </div>
                                    
                                    <div class="swiper-slide" style="display: none;">
                                        ${d.join(`
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
            `),k("#comiis_foot_menu_beautify .comiis_position_key"),this.$el.$like=k("#comiis_foot_menu_beautify .comiis_recommend_addkey"),k("#comiis_foot_menu_beautify #comiis_favorite_a"),k("#comiis_pictitle_key"),this.$el.$btn_submit=k('#comiis_foot_menu_beautify_big li[data-attr="发表"] input'),this.$el.$input=k("#comiis_foot_menu_beautify_big textarea"),this.$el.$fastpostsubmit=k("#fastpostsubmit"),x.textarea_scrollHeight=()=>{},typeof x.comiis_addsmilies=="function"&&(x.comiis_addsmilies=m=>{x.$("#needmessage").comiis_insert(m),x.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));}),x.$("#imglist .up_btn").append(x.$("#filedata")),x.$(document).on("click","#imglist .up_btn a",function(){x.$(this).next().click();}),x.$(document).on("click","#imglist .p_img a",function(){let m=x.$(this);if(m.attr("onclick")==null){let g=m.find("img").attr("id").replace("aimg_","");x.comiis_addsmilies(`[attachimg]${g}[/attachimg]`);}}),a.hide("#comiis_foot_menu_beautify_big .menu_body",false),this.setInputChangeEvent(),this.setLikeBtnClickEvent(),this.setSubmitBtnClickEvent(),this.setGlobalReplyBtnClickEvent(),this.setGlobalClickCheckEvent(),this.setMenuIconToggleEvent(),this.setMenuImageClickEvent(),this.setMenuImageToggleEvent(),this.setMenuSmileClickEvent(),this.setMenuSmileTabClickEvent(),this.setMenuInsertClickEvent(),this.setMenuQuickUBB(),q.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(),this.setInputChangeSaveEvent();}),q.execMenuOnce("mt-image-bed-hello-enable",()=>{Ft.init();}),q.execMenuOnce("mt-image-bed-mt-enable",()=>{Ot.init();});},handle_error(e){let t=false,i=a.text(a.parseHTML(e,false,false).querySelector("#messagetext"));return !i||typeof i=="string"&&i.trim()==""||Object.keys(At).forEach(n=>{let s=At[n];if(i.indexOf(s.error_match)!=-1){i.indexOf("typeof errorhandle_=='function'")!=-1&&_.error(s.popup_text),t=true;return}}),t},setInputChangeEvent(){const e=this;a.on(e.$el.$input,["input","propertychange"],function(t){e.$el.$input.value===""?(e.$el.$btn_submit.setAttribute("data-text","false"),k("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute("placeholder","发帖千百度，文明第一步")):(e.$el.$btn_submit.setAttribute("data-text","true"),k("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute("placeholder","[草稿待发送]")),a.css(e.$el.$input,"height","70px"),a.css(e.$el.$input,"height",e.$el.$input.scrollHeight-20+"px");});},setInputChangeSaveEvent(){const e=this;a.on(this.$el.$input,["input","propertychange"],t=>{let i=e.$el.$input.value,s=e.$el.$input.closest(".reply_area").querySelector(".reply_user_content").getAttribute("data-reply-url"),o={url:window.location.href,text:i,repquote:s?U.getRepquote(s):void 0,forumId:e.$data.tid};e.$data.db.get("data").then(r=>{if(!r.success||r.code===201){console.warn(r);return}let l=r.data.findIndex(c=>c.forumId===o.forumId&&c.repquote===o.repquote);l!==-1?i==null||i===""?r.data.splice(l,1):r.data[l]=p.assign(r.data[l],{text:o.text}):r.data.push(o),e.$data.db.save("data",r.data).then(c=>{});});});},async initReplyText(e=false,t=void 0){const i=this;(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let s=await this.$data.db.get("data");if(!s.success||s.code===201){console.warn(s);return}let o;t&&(o=U.getRepquote(t));let r=s.data.find(l=>e?l.forumId===i.$data.tid&&l.repquote==o:l.forumId===i.$data.tid&&l.repquote==null);r&&(a.val(this.$el.$input,r.text),p.dispatchEvent(this.$el.$input,"input"));},setLikeBtnClickEvent(){a.on(this.$el.$like,"click",async e=>{if(p.preventEvent(e),x.comiis_recommend_key==0){x.comiis_recommend_key=1;let o=await F.get(this.$el.$like.href+"&inajax=1",{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false});if(!o.status){window.location.href=this.$el.$like.href,setTimeout(function(){x.comiis_recommend_key=0;},500);return}let l=p.parseFromString(o.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(l.includes("您已评价过本主题")){let c=this.$el.$like.href.match(J.tid)[1];if(!(await F.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${c}&inajax=1`,{headers:{Accept:"application/xml, text/xml, */*; q=0.01"},fetch:true,allowInterceptConfig:false})).status){_.error("取消点赞失败，网络异常");return}var t=Number(a.text("#comiis_recommend_num"));document.querySelectorAll(".comiis_recommend_list_a").length>0&&a.remove("#comiis_recommend_list_a"+x.uid),document.querySelectorAll(".comiis_recommend_list_s").length>0&&a.remove("#comiis_recommend_list_s"+x.uid),document.querySelectorAll(".comiis_recommend_list_t").length>0&&a.remove("#comiis_recommend_list_t"+x.uid),t>1?(a.text(".comiis_recommend_num",t-Number(x.allowrecommend)),a.text(".comiis_recommend_nums","+"+(t-Number(x.allowrecommend)))):(a.remove("#comiis_recommend_num"),a.text(".comiis_recommend_nums",""),document.querySelectorAll(".comiis_recommend_list_a").length>0&&(a.empty(".comiis_recommend_list_a"),a.removeClass(".comiis_recommend_list_a","comiis_recommend_list_on")),document.querySelectorAll(".comiis_recommend_list_t").length>0&&a.removeClass(".comiis_recommend_list_t","comiis_recommend_list_on")),a.html(".comiis_recommend_addkey i","&#xe63b;"),a.removeClass(".comiis_recommend_color","f_a"),a.addClass(".comiis_recommend_color","f_b"),document.querySelectorAll(".comiis_recommend_list_s").length>0&&(document.querySelectorAll(".comiis_recommend_list_s li").length<7?a.hide(".txshow_more",false):a.show(".txshow_more",false)),_.success("已取消点赞");}else if(l.includes("您不能评价自己的帖子"))_.error("不能点赞自己的帖子");else if(l.includes("今日评价机会已用完"))_.warning("您今日的点赞机会已用完");else if(l.includes("'recommendv':'+"+x.allowrecommend+"'")){var i={recommendc:0,daycount:0},n;n=l.match(/\'recommendc\':\'(.*?)\'/),n!=null?i.recommendc=parseInt(n[1]):i.recommendc=0,n=l.match(/\'daycount\':\'(.*?)\'/),n!=null?i.daycount=parseInt(n[1]):i.daycount=0,document.querySelectorAll(".comiis_recommend_new span").length<1&&a.append(".comiis_recommend_new",'<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>');var s=Number(a.text("#comiis_recommend_num"));if(B(".comiis_recommend_list_a").length>0){let c=B(".comiis_recommend_list_a");a.removeClass(c,"comiis_recommend_list_on"),a.addClass(c,"comiis_recommend_list_on"),a.prepend(c,(B(".comiis_recommend_list_a li").length>0?"":'<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= '+x.tid+'&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">'+s+"</em>赞</span></a></li>")+'<li id="comiis_recommend_list_a'+x.uid+'"><a href="home.php?mod=space&uid='+x.uid+'"><img src="'+U.getAvatar(x.uid,"small")+'"></a></li>');}if(B(".comiis_recommend_list_t").length>0){let c=B(".comiis_recommend_list_t");a.removeClass(c,"comiis_recommend_list_on"),a.addClass(c,"comiis_recommend_list_on"),a.prepend(c,`<span id="comiis_recommend_list_t${x.uid}">
                          							<a href="home.php?mod=space&uid=${x.uid}" class="f_c">${x.username}</a>
													${B(".comiis_recommend_list_t a").length>0?'<span class="f_d"> , </span>':""}
                        						</span>`);}if(B(".comiis_recommend_list_s").length>0){let c=B(".comiis_recommend_list_s");a.removeClass(c,"comiis_recommend_list_on"),a.addClass(c,"comiis_recommend_list_on"),a.prepend(c,(B(".comiis_recommend_list_s li").length>0,""+'<li id="comiis_recommend_list_s'+x.uid+'"><a href="home.php?mod=space&uid='+x.uid+'"><img loading="lazy" src="'+U.getAvatar(x.uid,"small")+'"></a></li>'));}a.text(".comiis_recommend_num",s+Number(x.allowrecommend)),a.text(".comiis_recommend_nums","+"+(s+Number(x.allowrecommend))),a.html(".comiis_recommend_addkey i","&#xe654;"),a.removeClass(".comiis_recommend_color","f_b"),a.addClass(".comiis_recommend_color","f_a"),B(".comiis_recommend_list_s").length>0&&(B(".comiis_recommend_list_s li").length<7?a.hide(".txshow_more",false):a.show(".txshow_more",false)),_.success("点赞成功"+(i.daycount?`, 您今天还能点赞 ${i.daycount-1} 次`:""));}else l.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'")>=0?window.location.href="member.php?mod=logging&action=login&mobile=2":_.error("没有点赞权限或帖子不存在");setTimeout(function(){x.comiis_recommend_key=0;},500);}return  false});},setSubmitBtnClickEvent(){const e=this;a.on(this.$el.$fastpostsubmit,"click",async t=>{p.preventEvent(t);var i=k("#needmessage"),n=a.val(i);if(n=encodeURIComponent(n),!(n==null||n==="")){if(a.val(e.$el.$fastpostsubmit)=="发表"){let s=_.loading("发表中，请稍后..."),o="message="+n;B("#imglist input[type='hidden']").forEach(m=>{let g=m.getAttribute("name");o+=`&${g}=`;}),o=a.serialize(e.$el.$form)+"&"+o;let r=e.$data.forum_action+"reply&handlekey=fastpost&loc=1&inajax=1",l=await F.post(r,{data:o,fetch:true,allowInterceptConfig:false,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(s.close(),!l.status){_.error("发表失败，网络异常");return}let d=p.parseFromString(l.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(x.evalscript(d),this.handle_error(d))return;window.scrollTo({top:a.height(document)}),a.val("#needmessage",""),k("#comiis_head")?.click(),a.hide("#comiis_foot_menu_beautify_big .reply_user_content",false),a.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),a.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),this.deleteReplyTextStorage();}else {let s=a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize")+n;B("#imglist input[type='hidden']").forEach(d=>{s=`${s}&${d.getAttribute("name")}=`;});let o=a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action"),r=await F.post(o+"&handlekey=fastposts&loc=1&inajax=1",{allowInterceptConfig:false,fetch:true,data:s,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!r.status){_.error("回复失败，网络异常");return}let c=p.parseFromString(r.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(u.info(c),x.evalscript(c),this.handle_error(c))return;k(c)?.click(),a.val("#needmessage",""),k("#comiis_head").click(),a.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"发表"),a.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),a.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"),window.scrollTo({top:a.height(document)}),this.deleteReplyTextStorage(true,o);}return  false}});},setGlobalReplyBtnClickEvent(){a.on(document,"click",'.comiis_postli_times .dialog[href*="reply"]',async e=>{p.preventEvent(e);let t=e.target;a.attr("#comiis_foot_menu_beautify_big","data-model","reply");let i=await F.get(a.attr(t,"datahref")||t.href+"&inajax=1",{fetch:true,allowInterceptConfig:false});if(!i.status){_.error("网络异常，获取回复参数失败");return}let s=p.parseFromString(i.data.responseText,"text/xml").lastChild?.firstChild?.nodeValue;if(this.handle_error(s))return;let o=a.parseHTML(`<div>${s}</div>`,true,false),r=o.querySelector(".comiis_tip .tip_tit a")?.getAttribute("href"),l=a.text(o.querySelector(".comiis_tip span.f_0")),c=a.val(o.querySelector("input[name='noticeauthormsg']")),d=a.attr(o.querySelector("#postforms"),"action"),m=a.serialize(o.querySelector("#postforms"));a.text("#comiis_foot_menu_beautify_big .reply_user_content",`回复 ${l}: ${c}`),a.show("#comiis_foot_menu_beautify_big .reply_user_content",false),k("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.click(),a.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input"),a.val("#fastpostsubmitline input","回复"),a.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",r),a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-url",r),a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-action",d),a.attr("#comiis_foot_menu_beautify_big .reply_user_content","data-reply-serialize",m),kt=t,a.val("#needmessage",a.attr(t,"data-text")||""),q.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{this.initReplyText(true,r);});},{capture:true});},setGlobalClickCheckEvent(){const e=this;let t=k("#fastpostform .header_y a").href;a.on(document,"click",function(i){let n=i.target;if(k(".popups-popmenu")||it.$data.isUBBCodeInsertClick){u.info("点击的是弹出层，不做处理"),it.$data.isUBBCodeInsertClick=false;return}else n?.classList&&n?.classList?.contains(".dialog_reply")||n?.closest&&n?.closest(".dialog_reply")||n===k('li[data-attr="回帖"] input')?(u.info("点击回复按钮或者是编辑器，显示编辑器"),a.hide("#comiis_foot_menu_beautify",false),a.show("#comiis_foot_menu_beautify_big",false),a.focus("#needmessage")):window.event&&!p.checkUserClickInNode(k("#comiis_foot_menu_beautify_big"))&&(u.info("点击的其它区域，隐藏大编辑器，显示小编辑器"),a.show("#comiis_foot_menu_beautify",false),a.hide("#comiis_foot_menu_beautify_big",false),a.attr("#comiis_foot_menu_beautify_big","data-model")=="reply"&&(a.attr("#comiis_foot_menu_beautify_big","data-model","comment"),a.val("#fastpostsubmitline input","发表"),a.attr("#comiis_foot_menu_beautify_big .fastpostform_new a","href",t),a.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content"),a.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content",false),a.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-url",""),a.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-action",""),a.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content","data-reply-serialize",""),kt&&(a.attr(kt,"data-text",a.val("#needmessage")),a.val("#needmessage",""),a.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input',"data-text","false"),a.attr("#comiis_foot_menu_beautify li[data-attr='回帖'] input","placeholder","发帖千百度，文明第一步"))),a.val(e.$el.$input)===""&&q.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{e.initReplyText();}));});},setMenuIconToggleEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a i","click",function(e){let t=this;t.classList.contains("f_0")?(a.hide("#comiis_foot_menu_beautify_big .menu_body",false),a.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0")):(a.show("#comiis_foot_menu_beautify_big .menu_body",false),a.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i","f_0"),a.addClass(t,"f_0"));});},setMenuImageClickEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle","click",function(e){a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),a.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false);});},setMenuImageToggleEvent(){a.on("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key","click","li",function(e){let t=e.target;a.removeClass("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),a.addClass(t,"bg_f"),x.$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox").hide().eq(x.$(t).index()).fadeIn();});},setMenuSmileClickEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile","click",function(e){a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false),a.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false);let t=k("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox");a.attr(t,"data-isLoaded")!=1&&(a.attr(t,"data-isLoaded",1),t.querySelectorAll("img").forEach(i=>{let n=i.getAttribute("data-src");n&&i.setAttribute("src",n);}));});},setMenuSmileTabClickEvent(){a.on("#comiis_foot_menu_beautify_big #comiis_smilies_key li","click",function(e){let t=this;a.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a"),a.addClass(t.querySelector("a"),"bg_f b_l b_r"),x.$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide").hide().eq(x.$(t).index()).fadeIn();});},setMenuInsertClickEvent(){a.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs","click",e=>{a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab",false),a.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab",false),a.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab",false);});},async getReplyRecordSize(){let e=await this.$data.db.get("data");return e.success?p.getTextStorageSize(e?.data?.length?JSON.stringify(e.data):""):p.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(e=false,t=void 0){const i=this;this.$data.db.get("data").then(n=>{if(!n.success||n.code===201){console.warn(n);return}let s=n.data.findIndex(o=>e?o.forumId===i.$data.tid&&t&&o.repquote===U.getRepquote(t):o.forumId===i.$data.tid&&p.isNull(o.repquote));s!==-1&&(n.data.splice(s,1),this.$data.db.save("data",n.data).then(o=>{}));});},setMenuQuickUBB(){let e=k("#comiis_insert_ubb_tab_list"),t=Ht();Reflect.set(t,"code",{key:"代码",value:"[code][/code]",tagL:"]",tagR:"[",L:"[code]",R:"[/code]",cursorL:"[code]",cursorLength:7,quickUBBReplace:"[code]replace[/code]"}),Reflect.set(t,"password",{key:"密码",value:"[password][/password]",tagL:"]",tagR:"[",L:"[password]",R:"[/password]",cursorL:"[password]",cursorLength:10,quickUBBReplace:"[password]replace[/password]"}),Object.keys(t).forEach(i=>{let n=t[i],s=a.createElement("li",{className:"quickUBBs",innerHTML:`
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${n.key}
                    </a>
                `});a.on(s,"click",o=>{a.removeClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_0"),a.addClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont","f_d");let r=s.querySelector(".comiis_xifont");a.removeClass(r,"f_d"),a.removeClass(r,"f_d");let l=N.prompt({title:{text:"UBB代码",position:"center"},content:{text:"",placeholder:`请输入需要${n.key}的文字`,focus:true},btn:{ok:{text:"插入",type:"primary",callback:c=>{if(c.text.trim()===""){_.error("输入框不能为空或纯空格");return}n.isFunc?x.comiis_addsmilies(jt(n.num,c.text)):n.quickUBBReplace?x.comiis_addsmilies(n.quickUBBReplace.replaceAll("replace",c.text)):x.comiis_addsmilies(c.text),l.close();}},cancel:{text:"关闭",callback:()=>{l.close();}}},width:"300px",height:"200px"});}),e.append(s);});}},Gt={$flag:{isSetHljsCSS:false},init(){q.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),q.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),a.ready(()=>{q.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),q.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),q.execMenu("mt-forum-post-addCommentOnBtn",()=>{this.addCommentOnBtn();}),q.execMenuOnce("mt-forum-post-loadNextPageComment",()=>{this.loadNextPageComment();}),q.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>{this.codeQuoteOptimization();}),q.execMenuOnce("mt-forum-post-editorOptimizationNormal",()=>{it.init();}),q.execMenu("mt-forum-post-optimizationImagePreview",()=>{this.optimizationImagePreview();}),q.execMenuOnce("mt-forum-post-setAttachmentsClickTip",()=>{this.setAttachmentsClickTip();});});},autoExpandContent(){return u.info("自动展开帖子内容"),K(`
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `)},repairImageWidth(){return u.info("修复图片宽度"),K(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){u.info("移除帖子字体效果");let e=k(".comiis_a.comiis_message_table");e&&a.html(e,a.html(e).replace(J.fontSpecial,""));},removeCommentFontStyle(){u.info("移除评论区的字体效果");let e=B("font"),t=k(".comiis_postlist .comiis_postli")?.innerHTML||"";t!==""&&(e.forEach(i=>{t.includes(i.innerHTML)||(i.removeAttribute("color"),i.removeAttribute("style"),i.removeAttribute("size"));}),B(".comiis_message.message").forEach(i=>{if(t.includes(i.innerHTML)){i.innerHTML=i.innerHTML.replace(J.fontSpecial,"");let n=i.nextElementSibling;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),B(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(i=>{let n=i.parentElement;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},addCommentOnBtn(){u.info("添加【点评】按钮"),p.waitNodeList(".bottom_zhan:not([data-isaddreviews])").then(e=>{e.forEach(t=>{t.setAttribute("data-isaddreviews","true");var i=t.querySelector("a");if(i){var n=i.getAttribute("datahref")||i.getAttribute("data-href")||i.href||"",s=n.replace("mod=post&","mod=misc&").replace("action=reply&","action=comment&"),o=n?.match(/&page=([\w]+)/i)?.[1],r=`${s}&extra=page%3D1&page=${o}`,l=t?.closest(".comiis_postli[id]"),c=l.getAttribute("id")?.replace("pid","&pid=");r=r+c;var d=l.querySelector(".top_user.f_b")?.textContent||"",m=a.parseHTML(`
						<a href="${r}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,true,false);a.on(m,"click",function(){p.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then(g=>{try{g.innerText="点评 "+d;}catch(f){u.error("修改点评失败",f);}});}),a.prepend(t,m);}});});},loadNextPageComment(){if(u.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;function e(){return k("#loading-comment-tip")}function t(){return k("#loading-comment-tip").parentElement}function i(c){let d=e(),m=t();a.css(m,"display","");let f=Array.from(c.querySelectorAll("a[href]")).find(S=>S.textContent?.trim()==="下一页").href;if(u.info("获取下一页url：",f),f.includes("javascript:;")){u.info("暂无下一页的评论"),a.remove(m);return}function h(){a.remove(".comiis_page.bg_f"),a.remove(m),a.off(d,"click",y),a.off(window,"scroll",$.run);}async function y(){a.text(d,"正在加载评论中..."),a.css(m,"display",""),u.info("请求下一页评论："+f);let S=f,C=await F.get(S,{fetch:true});if(!C.status)return;let L=a.parseHTML(C.data.responseText,true,true),T=k(".comiis_postlist.kqide"),I=L.querySelector(".comiis_postlist.kqide"),V=L.querySelector(".nxt"),H=V?.getAttribute("href")||V?.href;if(H){if(u.success("成功获取到下一页评论"),H===f){u.warn("获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件"),h();return}f=H;}else u.error("评论全部加载完毕，移除监听事件"),h();let z=V?.parentElement.querySelector("strong");if(z){let D=k("#select_a");if(D){let w=Array.from(D.childNodes).find(b=>b.nodeName==="#text");w&&(w.textContent=`第 ${z.textContent} 页`);}}q.execMenu("mt-forum-post-syncNextPageUrl",()=>{if(window===top?.window){let D=new URL(S),w=`${D.pathname}${D.search}`;window.history.pushState("forward","",w);}}),a.append(T,I),Gt.init();}var $=new p.LockFunction(async()=>{p.isNearBottom(50)&&await y();});a.text(d,"请上下滑动或点击加载"),a.on(window,"scroll",$.run),a.on(d,"click",y),$.run();}let s=a.parseHTML(`
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`,true,false),o=k(".comiis_bodybox");a.append(o,s);let r=k(".comiis_pltit span.f_d")||k("#comiis_foot_memu .comiis_kmvnum");if(k(".comiis_pltit h2")&&k(".comiis_pltit h2")?.textContent.includes("暂无评论")){a.remove(t()),u.info("暂无评论");return}parseInt(r.textContent)>=10?p.waitNode(".comiis_page.bg_f").then(c=>{i(c);}):(a.remove(t()),u.info("无多页评论"));},codeQuoteOptimization(){u.info("代码块优化");function e(i){var n=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],s=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],o=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return {aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},i.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+o.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+n.join("|")+")\\s"},{begin:"\\s("+n.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+s.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}this.$flag.isSetHljsCSS||(bt.registerLanguage("smali",e),K(`
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`),K(`
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`),a.on(document,"click",".reader-copy-button",async function(i){p.preventEvent(i);let n=i.target,s=k(n.getAttribute("data-code-selector"));return await p.setClip(s.outerText||s.innerText),_.success("已复制到剪贴板"),false})),B(".comiis_blockcode.comiis_bodybg").forEach(i=>{if(i.getAttribute("data-copy"))return;i.setAttribute("data-copy","true");let n=a.createElement("div",{innerHTML:`
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
					</span>`},{style:"height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;"});a.before(i,n);function s(m,g="java"){m.oldValue||(m.oldValue=m.textContent),m.innerHTML=bt.highlight(m.oldValue,{language:g}).value.replace(/\\n$/gi,"");}let o=bt.highlightAuto(i.textContent).language,r=document.createElement("div"),l=document.createElement("select"),c=bt.listLanguages().sort();c=c.concat("自动检测");let d="";c.forEach(m=>{m.startsWith("自动检测")?d+=`<option data-value="${o}" selected="selected">${m}(${o})</option>`:d+=`<option data-value="${m}">${m}</option>`;}),l.className="code-select-language",l.innerHTML=d,a.on(l,"change",function(){let m=l.selectedOptions[0].getAttribute("data-value");l.setAttribute("aria-label",m),u.info("切换代码块语言: ",m),i.querySelectorAll("li").forEach(g=>{s(g,m);});}),p.preventEvent(l,"click"),r.appendChild(l),n.append(r),p.dispatchEvent(l,"change"),i.className="hljs",i.firstChild.removeAttribute("class"),n.querySelector(".reader-copy-button").setAttribute("data-code-selector",p.getElementSelector(i));});},optimizationImagePreview(){u.info("图片查看优化");function e(i=[],n=0){let s="";i.forEach(l=>{s+=`<li><img data-src="${l}"></li>`;});let o=a.createElement("ul",{innerHTML:s}),r=new Nt(o,{inline:false,url:"data-src",zIndex:p.getMaxZIndex()+100,hidden:()=>{r.destroy();}});u.info("查看的图片的下标",n),r.view(n),r.zoomTo(1),r.show();}let t=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];p.waitNodeList("div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])").then(i=>{i.forEach(n=>{n.setAttribute("data-isHandlingViewIMG","true");let s=[];n.querySelectorAll("img").forEach(o=>{let r=o.src,l=new URL(r).hostname,c=new URL(r).pathname,d=o.parentElement;d.nodeName.toLowerCase()==="span"&&d.removeAttribute("onclick"),d.nodeName.toLowerCase()==="a"&&d.getAttribute("href")===r&&(d.setAttribute("href","javascript:;"),d.removeAttribute("target"));let m=false;for(let g of t)if(l.indexOf(g.hostName)!=-1&&c.match(g.pathName)){m=true;break}m||(s=[...s,r],a.on(o,"click",function(){u.info("点击图片",o);let g=s.findIndex(f=>f==r);e(s,g);}));}),s.length&&u.info("处理的图片",s);});});},setAttachmentsClickTip(){u.info("附件点击提醒");function e(t){if(t.hasAttribute("href")){let i=t.getAttribute("href"),n=t.querySelector("span.f_ok"),s=t.querySelector(".attach_size");if(a.text(s).indexOf("金币")===-1)return;u.info("发现附件",t),u.info("该附件是金币附件，拦截！");let o=a.text(n);t.setAttribute("data-href",t.getAttribute("href")),t.removeAttribute("href"),n.innerText="【已拦截】"+o,t.onclick=function(){u.info("附件url：",i),N.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${o}</a> ？<br /><br />`,html:true},btn:{ok:{callback:r=>{window.open(i,"_blank"),r.close();}}},mask:{enable:true},width:"88vw",height:"200px"});};}}p.mutationObserver(document.documentElement,{callback:()=>{B(".attnm a").forEach(t=>{e(t);}),B(".comiis_attach a").forEach(t=>{e(t);});},config:{childList:true,subtree:true}}),p.waitNodeList(".attnm a").then(t=>{t.forEach(i=>{e(i);});}),p.waitNodeList(".comiis_attach a").then(t=>{t.forEach(i=>{e(i);});});}},he={init(){K(`
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `),j.ready(()=>{q.execMenuOnce("mt-search-showSearchHistory",()=>{this.showSearchHistory();}),q.execMenuOnce("mt-search-repairClearBtn",()=>{this.repairClearBtn();}),q.execMenuOnce("mt-search-searchInputAutoFocus",()=>{this.searchInputAutoFocus();});});},async showSearchHistory(){u.info("显示搜索历史");let e=Z("search_history",[]),t=k("#scform_srchtxt"),i=k("#searchform");const n=e.map(l=>({value:l,enableDeleteButton:true,deleteButtonClickCallback(c,d,m,g){let f=e.findIndex(h=>h===m.value);f!==-1&&(e.splice(f,1),Y("search_history",e)),d.remove();},itemView(c,d,m){return c.value},clickCallback(c,d,m,g){t.value=m.value,i.submit();}}));let s=N.searchSuggestion({target:t,inputTarget:t,data:n,inputTargetChangeRefreshShowDataCallback(l,c,d){return n.filter(m=>m.value.includes(l))}});s.init(),s.setAllEvent();function o(){let l=document.querySelector("#scform_submit");j.on(l,"click",function(){let c=t.value;if(c!=""){let d=Z("search_history",[]);d.includes(c)?u.info("已有该搜索历史记录"):(u.info("无该记录，追加"),d.push(c)),Y("search_history",d);}});}function r(){let c='<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: '+Z("search_history",[]).length+`<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;j.before(document.querySelector(".comiis_p12"),c);let d=document.querySelector(".btn_clear_search_history");j.on(d,"click",m=>{p.preventEvent(m),rt("search_history"),window.location.reload();});}o(),r();},repairClearBtn(){p.waitNode("a.ssclose").then(e=>{u.info("修复清空按钮"),j.on(e,"click",t=>{let i=document.querySelector("#scform_srchtxt");i?i.value="":_.error("获取输入框失败");},{capture:true});});},searchInputAutoFocus(){new URLSearchParams(window.location.search).has("kw")||p.waitNode("#scform_srchtxt").then(t=>{u.info("搜索框自动获取焦点"),t.focus();});}},ge={init(){a.ready(()=>{q.execMenuOnce("mt-sign-showTodaySignStar",()=>{this.showTodaySignStar();}),q.execMenuOnce("mt-sign-showTodayRanking",()=>{this.showTodayRanking();});});},async showTodaySignStar(){u.info("显示【今日签到之星】");let e=document.querySelector(".pg_k_misign .comiis_qdinfo"),t=document.createElement("ul"),i=await F.get("/k_misign-sign.html",{headers:{"User-Agent":p.getRandomPCUA()}});if(!i.status)return;let s=a.parseHTML(i.data.responseText,true,true).querySelector("#pt span.xg1");if(!s)return;let o=a.text(s).replace("今日签到之星：","");t.innerHTML=`
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${o}
		</li>
		`;let r=document.querySelector(".comiis_space_box"),l=parseInt(getComputedStyle(r,null).height.replace("px","")),c=parseInt(getComputedStyle(r,null).paddingBottom.replace("px","")),d=l+c+50;K(`
		.comiis_space_box{
			height: ${d}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`),e.append(t);},showTodayRanking(){u.info("显示【今日最先】");let e=document.querySelector(".comiis_topnv .comiis_flex .flex"),t=a.createElement("li",{className:"flex"}),i=a.createElement("a",{id:"k_misignlist_today_latest",href:"javascript:;",innerHTML:"今日最先"},{onclick:"ajaxlist('todayLatest');"});t.appendChild(i),a.after(e,t);let n=async r=>{let l=await F.get(`/k_misign-sign.html?operation=${r}`,{responseType:"html",headers:{"User-Agent":p.getRandomPCUA()}});if(!l.status)return;let d=a.parseHTML(l.data.responseText,true,true).querySelector("#J_list_detail .pg span");if(d&&typeof d.title<"u"){let m=d.title.match(/([0-9]+)/);if(m&&m.length==2)return parseInt(m[m.length-1]);_.error("获取页失败");}else _.error("请求最先签到的页失败");},s=async r=>{let l=await F.get(`/k_misign-sign.html?operation=list&op=&page=${r}`,{responseType:"html",headers:{"User-Agent":p.getRandomPCUA()}});if(!l.status)return;let d=a.parseHTML(l.data.responseText,true,true).querySelectorAll("#J_list_detail tbody tr"),m=[];if(d.length==2&&d[0].textContent.indexOf("暂无内容")!=-1)return m;for(let g=1;g<=d.length-2;g++){let f=d[g],h={user:"",uid:"",avatar:"",days:"",monthDays:"",time:"",reward:""},y=f.children[0].getElementsByTagName("a")[0].textContent,S=f.children[0].getElementsByTagName("a")[0].href.match(/space-uid-([0-9]*)/)[1],C=f.children[1].textContent,L=f.children[2].textContent,T=f.children[3].textContent,I=f.children[5].textContent;h.user=y,h.uid=S,h.avatar=U.getAvatar(S,"small"),h.days=C,h.monthDays=L,h.time=T,h.reward=I,m.push(h);}return m};function o(r,l){let c=document.querySelector("#ranklist");a.html(c,r),a.attr(c,"listtype",l);}x.ajaxlist=async r=>{if(r=r,r=="today"?(loadingdelay=false,urlextra="list&op=today"):r=="month"?(loadingdelay=false,urlextra="list&op=month"):r=="zong"?(loadingdelay=false,urlextra="list&op=zong"):r=="calendar"?(loadingdelay=true,urlextra="calendar"):(loadingdelay=false,urlextra="list"),r=="todayLatest"){loadingdelay=false,urlextra="list&op=&page=0";let l=await n(urlextra);if(!l)return;let c=await s(l);if(c.reverse(),c.length<10){let g=await s(l-1);g.reverse(),c=c.concat(g),c.reverse();}let d="";c.reverse(),c.forEach(g=>{d=d+`
						<tbody id="autolist_${g.uid}">
			  				<tr>
								<td class="k_misign_lu">
									<a href="home.php?mod=space&amp;uid=${g.uid}">
										<img src="${g.avatar}" loading="lazy">
									</a>
								</td>
								<td class="k_misign_ll"><span></span></td>
								<td class="k_misign_lc">
									<h4 class="f_c">
										<a href="home.php?mod=space&amp;uid=${g.uid}">${g.user}</a>
										<span>${g.time}</span>
										<span class="y">总天数 ${g.days}天</span>
									</h4>
									<p class="f_0">月天数 ${g.monthDays} 天，上次奖励 ${g.reward}</p>
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
							${d}
							</table>
						</div>
					</div>`;o(m,r);}else F.get(`plugin.php?id=k_misign:sign&operation=${urlextra}`,{responseType:"html",fetch:true}).then(l=>{let c=l.data.responseText;c=c.replace("今日排行</a></li>",`今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`),r=="today"&&(c=c.replace(`<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,`
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`)),o(c,r);});};}},fe={init(){q.execMenuOnce("mt-space-repairEnterSpace",()=>{this.repairEnterSpace();}),a.ready(()=>{q.execMenuOnce("mt-space-showCommentContent",()=>{this.showCommentContent();});});},repairEnterSpace(){if(u.info("修复无法进入空间"),E.isSpace()){let e=window.location.href.match(/home.php\?(.+)/gi),t=e[e.length-1];t.split("&").length==2&&t.indexOf("uid=")!=-1&&t.indexOf("mod=space")!=-1&&(window.location.href=window.location.href+"&do=profile");}else if(E.isSpaceWithAt()){let e=window.location.href.match(/space-uid-(.+).html/i),t=e[e.length-1];window.location.href=`${window.location.origin}/home.php?mod=space&uid=${t}&do=profile`;}},async showCommentContent(){u.info("显示帖子回复内容"),K(`
		div.contrete-reply{padding:5px 10px;border-top:1px solid #f3f3f3}
		div.contrete-reply a{margin:0 10px}
		`);async function e(){let r=await F.get(window.location.href,{headers:{"User-Agent":p.getRandomPCUA()}});if(!r.status)return;let l=a.parseHTML(r.data.responseText,true,true),c=[];return l.querySelectorAll("#delform tr.bw0_all+tr").forEach(d=>{let m=[],g=d.querySelector("td"),f=a.html(g).replace(/^&nbsp;/,"");m.push(f);let h=a.next(d),y=l.querySelectorAll("#delform tr");for(let $=0;$<y.length&&!(!h||a.attr(h,"class")==="bw0_all");$++){let S=h.querySelector("td"),C=a.html(S).replace(/^&nbsp;/,"");m=m.concat(C),h=a.next(h);}c.push(...m);}),c}function t(){return p.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist())}function i(r){let l={};return r.forEach(c=>{let m=a.createElement("div",{innerHTML:c}).querySelector("a")?.getAttribute("href"),g=m.match(J.ptid),f=m.match(J.pid);if(!g){_.error("获取ptid失败");return}if(!f){_.error("获取pid失败");return}let h=g[g.length-1],y=f[f.length-1];l[h]?l[h].data.push(c):l[h]={ptid:h,pid:y,data:[c]};}),l}var n=await e();if(n==null)return;var s=i(n);t().forEach((r,l)=>{let d=r.querySelector(".comiis_xznalist_bottom a").getAttribute("tid");if(!d){_.error("获取帖子tid失败"),u.error(r);return}s[d]&&s[d].data.forEach(m=>{a.append(r,`<div class="contrete-reply">${m}</div>`);});});}},mt={$key:{tipData:"tipToFreeSubjectForumPost"},init(){this.registerMenu();let e=this.getTipData();if(E.isPost()&&document.querySelector("span.kmren")){u.info("当前帖子存在需要购买主题");let o=false,r;e.forEach((c,d)=>{if(window.location.href.match(c.url)){o=true;return}}),o?(u.warn("已设置提醒"),r=a.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `}),a.on(r,"click",function(){N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},btn:{ok:{callback:function(){let c=e.findIndex((d,m)=>window.location.href.match(d.url));c!==-1?(e.splice(c,1),mt.setTipData(e),_.success("移除成功")):_.error("移除失败");}}},width:"88vw",height:"300px"});})):(u.info("未设置提醒"),r=a.createElement("a",{href:"javascript:;",className:"styli_tit f_c",innerHTML:`
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `}),a.on(r,"click",()=>{let c=document.querySelector(".kmren"),d=a.parent(c),m=a.text(d).replace(/\t|\n/g,"").match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/);if(!m||m.length==0){_.error("获取付费主题到期时间失败");return}let g=m[0],f=p.formatToTimeStamp(g);e.push({url:window.location.href,title:document.title.replace(" - MT论坛",""),expirationTime:g,expirationTimeStamp:f,isVisited:false}),Y("tipToFreeSubjectForumPost",e),_.success("添加成功"),setTimeout(function(){window.location.reload();},1500);}));let l=document.querySelector(".comiis_head.f_top .header_y");a.append(l,r);}function t(){let s=0;return Array.from(mt.getTipData()).forEach((o,r)=>{new Date().getTime()>o.expirationTimeStamp&&o.isVisited==false&&(s+=1);}),s}if(E.isMySpace()||E.isGuide()||E.isForumList()||E.isPlate()){let s=document.querySelector(".icon_msgs.bg_del.f_f"),o=0;s?(o=parseInt(a.text(s)),a.html(s,(o+t()).toString()),a.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>')):t()&&a.append(".comiis_head .header_z .kmuser em",'<span class="icon_msgs bg_del"></span>');}let i=document.querySelector(".sidenv_num.bg_del.f_f"),n=0;if(i)n=parseInt(a.text(i)),a.html(".sidenv_num.bg_del.f_f",(n+t()).toString());else {let s=t();s&&a.before(".sidenv_user em",`<span class="sidenv_num bg_del f_f">${s}</span>`);}t()&&a.append(".comiis_left_Touch .paymentsubjectreminder div.flex",`
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`);},registerMenu(){G.registerLeftMenu({name:"付费主题白嫖提醒",icon:"",iconColor:"#ec0000",callback:()=>{this.showView();}});},showView(){u.info("显示白嫖列表");let e=mt.getTipData();N.alert({title:{text:"付费主题白嫖列表",position:"center"},content:{text:"",html:true},btn:{ok:{text:"关闭",type:"default"}},width:"88vw",height:"88vh"});let t="",i=0,n="",s="",o=[],r=[],l=[];e.forEach((h,y)=>{let $="#f91212",S="";new Date().getTime()>h.expirationTimeStamp&&($="#1e90ff",h.isVisited||(S=`
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `,i=i+1));let C={content:`
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${S}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${h.url}" t-index="${y}" style="color: #1e90ff;">${h.title}</a>
                                <li style="margin: 5px 15px;color: ${$};">${h.expirationTime}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${y}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,timestamp:h.expirationTimeStamp};new Date().getTime()>h.expirationTimeStamp?S!=""?o.push(C):r.push(C):l.push(C);}),u.info("可白嫖但未访问：",o),u.info("可白嫖：",r),u.info("未到白嫖时间：",l),p.sortListByProperty(o,"expirationTimeStamp",false),p.sortListByProperty(r,"timestamp",false),p.sortListByProperty(l,"timestamp",false),u.info("排序后——可白嫖但未访问：",o),u.info("排序后——可白嫖：",r),u.info("排序后——未到白嫖时间：",l),n=p.mergeArrayToString(o,"content")+p.mergeArrayToString(r,"content"),s=p.mergeArrayToString(l,"content"),i>0&&(t=`
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
                <summary>可白嫖${t}</summary>
                <table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${n}    
                </table>
            </details>
        `,d=`
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${s}
                </table>
            </details>
        `,m=document.querySelector(".msgcon");a.html(m,""),a.append(m,c),a.append(m,d),a.css(m,"height","400px"),a.on(document.querySelector(".delsubjecttip i.comiis_font"),"click",h=>{let y=h.target,$=a.parent(y);var S=parseInt($.getAttribute("t-index"));N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>确定移出付费主题白嫖列表？</p>",html:true},btn:{ok:{callback:C=>{e.splice(S,1),mt.setTipData(e),p.deleteParentNode(y,"tr"),C.close();}}},width:"80vw",height:"300px"});});let g=document.querySelector("#paymentSubjectReminderIsFreeList");a.on(g,"click","a",h=>{let y=h.target;var $=parseInt(y.getAttribute("t-index")),S=y.getAttribute("t-href");if(e[$].isVisited=true,mt.setTipData(e),window.open(S,"_blank"),y.setAttribute("style","color: #000000;"),y?.parentElement?.parentElement?.children[0].className!="icon_msgs bg_del")return;y.parentElement.parentElement.children[0].remove(),a.append(g,y?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement);let C=document.querySelector(".subjectcanvisit summary span.icon_msgs.bg_del.f_f"),L=a.text(C),T=parseInt(L)-1;T>0?a.html(C,T.toString()):C.remove();});let f=document.querySelector("paymentSubjectReminderIsPaidList");a.on(f,"click","a",h=>{let y=h.target;y.getAttribute("t-index");var $=y.getAttribute("t-href");window.open($,"_blank"),y.setAttribute("style","color: #000000;");});},getTipData(){return Z(this.$key.tipData,[])},setTipData(e){Y(this.$key.tipData,e);}},be=`.pops {\r
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
`;class _e{isBacking=false;config;constructor(t){this.config=t,this.enterGestureBackMode=this.enterGestureBackMode.bind(this),this.quitGestureBackMode=this.quitGestureBackMode.bind(this),this.popStateEvent=this.popStateEvent.bind(this),(typeof this.config.backDelayTime!="number"||isNaN(this.config.backDelayTime))&&(this.config.backDelayTime=150),this.config.win==null&&(this.config.win=self);}popStateEvent(t){Q.preventEvent(t),!this.isBacking&&this.quitGestureBackMode(true);}enterGestureBackMode(){u.success("进入手势模式");let t=this.config.hash;t.startsWith("#")||(t.startsWith("/")||(t="/"+t),t="#"+t),this.config.useUrl&&(t=this.config.win.location.origin+this.config.win.location.pathname+this.config.win.location.search+t),this.config.win.history.pushState({},"",t),u.success("监听popstate事件"),a.on(this.config.win,"popstate",this.popStateEvent,{capture:true});}async quitGestureBackMode(t=false){this.isBacking=true,u.success("退出手势模式"),typeof this.config.beforeHistoryBackCallBack=="function"&&this.config.beforeHistoryBackCallBack(t);let i=Date.now()+1e3*5;for(;;){if(Date.now()>i){u.error("未知情况，history.back()失败，无法退出手势模式");break}if(this.config.win.location.hash.endsWith(this.config.hash))u.info("history.back()"),this.config.win.history.back(),await Q.sleep(this.config.backDelayTime||150);else break}u.success("移除popstate事件"),a.off(this.config.win,"popstate",this.popStateEvent,{capture:true}),this.isBacking=false,typeof this.config.afterHistoryBackCallBack=="function"&&this.config.afterHistoryBackCallBack(t);}}const ct={https:`
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
		</svg>`},Wt={$key:{smallWindow:"smallWindow"},$el:{$refreshIcon:null,$webSiteIcon:null},init(){let e=new p.LockFunction(()=>{let t=this.getForumList();t.length&&this.handleForumPost(t);});p.mutationObserver(document.documentElement,{callback:(t,i)=>{e.run();},config:{subtree:true,childList:true}});},getForumList(){return p.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist())},showSmallWindow(e,t,i=[]){let n=new URL(t),s=n.protocol.includes("https:"),o=`
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
                    <p class="small-window-website-host">${n.host}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${i.length?`
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
        </div>`,r=N.drawer({title:{enable:true,text:o,html:true,style:"height: auto;line-height: normal;"},content:{text:`
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${t}" style="width:100%; height:100%;">
                </iframe>
                `,html:true},mask:{enable:true,clickEvent:{toClose:true},clickCallBack(I,V){T.quitGestureBackMode();}},btn:{ok:{enable:false},cancel:{enable:false},close:{enable:false}},direction:"bottom",size:"92%",borderRadius:18,style:be}),l=r.$shadowRoot.querySelector(".small-window-website-icon"),c=r.$shadowRoot.querySelector(".refresh-icon"),d=r.$shadowRoot.querySelector(".small-window-control-image-view"),m=r.$shadowRoot.querySelector(".small-window-control-open-blank"),g=r.$shadowRoot.querySelector(".small-window-control-close"),f=r.$shadowRoot.querySelector(".small-window-title-text");this.$el.$refreshIcon=c,this.$el.$webSiteIcon=l;let h=r.$shadowRoot.querySelector("iframe"),y=r.$shadowRoot.querySelector(".small-window-drag"),$=N.config.Utils.AnyTouch(),S=new $(y),C=r.popsElement,L=a.height(C);S.on("pan",I=>{I.phase=="move"&&I.displacementY>0&&(C.style.transition="none",C.style.height=Math.abs(L-I.distanceY)+"px"),I.isEnd&&(C.style.transition="0.2s ease-in",parseInt(C.style.height)>window.innerHeight/2?C.style.height=L+"px":r.close());});let T=new _e({hash:this.$key.smallWindow,useUrl:true,win:x,beforeHistoryBackCallBack:I=>{r.close();}});T.enterGestureBackMode(),a.on(f,"click",I=>{p.preventEvent(I),p.setClip(`『${e}』 - ${t}`),_.success("已复制链接");}),a.on(d,"click",I=>{p.preventEvent(I),u.info("查看图片",i);var V="";i.forEach(D=>{V+=`<li><img data-src="${D}"></li>`;});var H=a.parseHTML(`<ul>${V}</ul>`,false,false);let z=new Nt(H,{inline:false,url:"data-src",zIndex:(()=>{let D=p.getMaxZIndex(),w=N.config.InstanceUtils.getPopsMaxZIndex().zIndex;return p.getMaxValue(D,w)+100})(),hidden:()=>{z.destroy();}});z.zoomTo(1),z.show();}),a.on(g,"click",I=>{p.preventEvent(I),T.quitGestureBackMode();}),a.on(m,"click",I=>{p.preventEvent(I),window.open(t,"_blank");}),a.on(l,"click",I=>{p.preventEvent(I),h.contentWindow.location.reload(),this.checkIframeReadyState(h);}),this.checkIframeReadyState(h);},async handleForumPost(e){e.forEach(t=>{if(t.getAttribute("data-injection-small-window"))return;let i=a.text(t.querySelector(".mmlist_li_box h2 a"));(i==""||i==null)&&(i=a.text(t.querySelector(".mmlist_li_box a"))),i=i.trim();let n=t.querySelector(".mmlist_li_box a").href;var s=[];t.setAttribute("data-injection-small-window","true"),t.setAttribute("data-injection-small-window-url",n),t.setAttribute("data-injection-small-window-title",i),t.querySelectorAll(".comiis_pyqlist_img img").forEach(r=>{s.push(r.getAttribute("src"));}),t.querySelectorAll(".comiis_pyqlist_imgs img").forEach(r=>{s.push(r.getAttribute("src"));}),t.querySelectorAll(".mmlist_li_box a").forEach(r=>{r.removeAttribute("href"),r.setAttribute("data-href",n);});let o=t.querySelector(".mmlist_li_box");a.on(o,"click",function(r){var l=Number(r.clientX);document.body.offsetWidth/2>l?window.location.href=n:Wt.showSmallWindow(i,n,s);});});},checkIframeReadyState(e){this.showRefreshIcon();let t=setInterval(()=>{e.contentWindow&&(clearInterval(t),a.createDOMUtils({document:e.contentWindow.document,window:e.contentWindow,globalThis:e.contentWindow,self:e.contentWindow,top}).ready(()=>{u.success("小窗内容已加载完毕"),this.hideRefreshIcon();}));},400);},hideRefreshIcon(){this.$el.$refreshIcon.style.display="none",this.$el.$webSiteIcon.style.display="";},showRefreshIcon(){this.$el.$refreshIcon.style.display="",this.$el.$webSiteIcon.style.display="none";}},ye={init(){j.ready(()=>{q.execMenuOnce("mt-guide-showLatestPost",()=>{this.showLatestPost();});});},showLatestPost(){u.info("显示最新帖子");async function e(){let t=await F.get("/forum.php?mod=guide&view=hot",{fetch:true,allowInterceptConfig:false});if(!t.status){_.error("获取轮播失败");return}if(t.data.responseText.indexOf('<script src="/_guard/auto.js"><\/script>')!==-1){_.error("获取轮播失败 未知的/_guard/auto.js文件");return}var i=j.parseHTML(t.data.responseText,true,true),n=i.querySelectorAll('div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul');if(n.length===0){_.error("获取轮播失败");return}else {var s=[];n[n.length-1].querySelectorAll("a").forEach(o=>{s.push({href:o.getAttribute("href"),title:o.getAttribute("title")});});}return s}e().then(t=>{if(!t)return;K(`
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
            `);var i="";p.sortListByProperty(t,s=>{var o=s.href.match(/thread-(.+?)-/i);return parseInt(o[o.length-1])},true),u.info("导读内容",t),t.forEach(s=>{i+=`
                <li>
                    <span>新帖</span>
                    <a href="${s.href}" title="${s.title}" target="_blank">${s.title}</a>
                </li>`;});let n=document.querySelector(".comiis_forumlist.comiis_xznlist");j.before(n,`<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${i}</ul></div>`);});}},vt={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new Q.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,i){let n;this.hasStorageApi(e)?n=this.getStorageApi(e):n=i,this.setComponentsStorageApiProperty(t,n);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,A,t);}},O=function(e,t,i,n,s,o="",r,l,c,d){let m={text:e,type:"input",isNumber:!!r,isPassword:!!l,attributes:{},props:{},description:n,afterAddToUListCallBack:c,getValue(){return this.props[A].get(t,i)},callback(g,f,h){this.props[A].set(t,f);},placeholder:o};return Reflect.set(m.attributes,nt,t),Reflect.set(m.attributes,st,i),vt.initComponentsStorageApi("input",m,{get(g,f){return q.getValue(g,f)},set(g,f){q.setValue(g,f);}}),m},M=function(e,t,i,n,s,o,r,l){let c={text:e,type:"switch",description:s,disabled:r,attributes:{},props:{},getValue(){return this.props[A].get(t,i)},callback(d,m){let g=!!m;u.success(`${g?"开启":"关闭"} ${e}`),this.props[A].set(t,g);},afterAddToUListCallBack:o};return Reflect.set(c.attributes,nt,t),Reflect.set(c.attributes,st,i),vt.initComponentsStorageApi("switch",c,{get(d,m){return q.getValue(d,m)},set(d,m){q.setValue(d,m);}}),c};class Kt{option;constructor(t){this.option=t;}async showView(){let t=N.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,html:true},btn:p.assign({ok:{callback:async()=>{await o();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
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

                ${this.option?.style??""}
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),i=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");let n=t.$shadowRoot.querySelector(".rule-form-ulist"),s=await this.option.getView(await this.option.data());n.appendChild(s);const o=async()=>{(await this.option.onsubmit(i,await this.option.data())).success&&(t.close(),await this.option.dialogCloseCallBack(true));};}}class xe{option;constructor(t){this.option=t;}showView(){let t=N.alert({title:{text:this.option.title,position:"center"},content:{text:`
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
            `}),i=t.$shadowRoot.querySelector(".filter-container"),n=document.createDocumentFragment();this.option.filterOption.forEach(s=>{let o=a.createElement("button",{innerText:s.name},{type:"button"}),r=async()=>{(await this.option.getAllRuleInfo()).forEach(async c=>{await s.filterCallBack(c.data)?a.show(c.$el,false):a.hide(c.$el,false);}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),t.close();};a.on(o,"click",async l=>{p.preventEvent(l),!(typeof s.callback=="function"&&!await s.callback(l,r))&&await r();}),n.appendChild(o);}),i.appendChild(n);}}class Tt{option;constructor(t){this.option=t;}async showView(t){let i=N.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async o=>{this.showEditView(false,await this.option.getAddData(),i.$shadowRoot);}},close:{enable:true,callback(o){i.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(o,r)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let d=await this.option.bottomControls.filter.callback();if(typeof d=="boolean"&&!d)return}let l=()=>Array.from(i.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),c=r.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(a.text(c).includes("取消")){let d=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:c,getAllRuleElement:l});if(typeof d=="boolean"&&!d)return;l().forEach(m=>{a.show(m,false);}),a.text(c,"过滤");}else new xe({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{a.text(c,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();},getAllRuleInfo:()=>l().map(m=>({data:this.parseRuleItemElement(m).data,$el:m}))}).showView();}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:o=>{let r=N.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(u.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){_.error("清理失败");return}else _.success("清理成功");await this.updateDeleteAllBtnText(i.$shadowRoot),this.clearContent(i.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
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
            `}),n=await this.option.data(),s=false;for(let o=0;o<n.length;o++){let r=n[o],l=await this.appendRuleItemElement(i.$shadowRoot,r),c=true;typeof t=="function"?c=t(r):typeof t=="number"&&!isNaN(t)&&(c=await this.option.bottomControls?.filter?.option[t]?.filterCallBack(r)??c),c||(s=true,a.hide(l,false));}if(s){let o=i.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");a.text(o,"取消过滤");}}showEditView(t,i,n,s,o,r){let l=async d=>{if(d){if(typeof r=="function"){let m=await this.option.getData(i);r(m);}}else if(t||await this.option.deleteData(i),typeof o=="function"){let m=await this.option.getData(i);o(m);}};new Kt({title:t?"编辑":"添加",data:()=>i,dialogCloseCallBack:l,getView:async d=>await this.option.itemControls.edit.getView(d,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async(d,m)=>{d.close(),await l(false);}},close:{callback:async(d,m)=>{d.close(),await l(false);}}},onsubmit:async(d,m)=>{let g=await this.option.itemControls.edit.onsubmit(d,t,m);return g.success?t?(_.success("修改成功"),n&&await this.updateRuleItemElement(g.data,s,n)):n&&await this.appendRuleItemElement(n,g.data):t&&u.error("修改失败"),g},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){let i=t.querySelector(".rule-view-container"),n=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:i,$deleteBtn:n}}parseRuleItemElement(t){let i=t.querySelector(".rule-controls-enable"),n=i.querySelector(".pops-panel-switch"),s=i.querySelector(".pops-panel-switch__input"),o=i.querySelector(".pops-panel-switch__core"),r=t.querySelector(".rule-controls-edit"),l=t.querySelector(".rule-controls-delete");return {$enable:i,$enableSwitch:n,$enableSwitchInput:s,$enableSwitchCore:o,$edit:r,$delete:l,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,i){let n=await this.option.getDataItemName(t),s=a.createElement("div",{className:"rule-item",innerHTML:`
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
					${N.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${N.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(s,"data-rule",t);let o="pops-panel-switch-is-checked";const{$enable:r,$enableSwitch:l,$enableSwitchCore:c,$enableSwitchInput:d,$delete:m,$edit:g}=this.parseRuleItemElement(s);return this.option.itemControls.enable.enable?(a.on(c,"click",async f=>{let h=false;l.classList.contains(o)?(l.classList.remove(o),h=false):(l.classList.add(o),h=true),d.checked=h,await this.option.itemControls.enable.callback(t,h);}),await this.option.itemControls.enable.getEnable(t)&&l.classList.add(o)):r.remove(),this.option.itemControls.edit.enable?a.on(g,"click",f=>{p.preventEvent(f),this.showEditView(true,t,i,s,h=>{t=null,t=h;});}):g.remove(),this.option.itemControls.delete.enable?a.on(m,"click",f=>{p.preventEvent(f);let h=N.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async y=>{u.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(_.success("成功删除该数据"),s.remove(),await this.updateDeleteAllBtnText(i),h.close()):_.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):m.remove(),s}async appendRuleItemElement(t,i){let{$container:n}=this.parseViewElement(t),s=[],o=Array.isArray(i)?i:[i];for(let r=0;r<o.length;r++){let l=o[r],c=await this.createRuleItemElement(l,t);n.appendChild(c),s.push(c);}return await this.updateDeleteAllBtnText(t),s}async updateRuleContaienrElement(t){this.clearContent(t);const{$container:i}=this.parseViewElement(t);let n=await this.option.data();await this.appendRuleItemElement(t,n),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,i,n){let s=await this.createRuleItemElement(t,n);i.after(s),i.remove();}clearContent(t){const{$container:i}=this.parseViewElement(t);a.html(i,"");}setDeleteBtnText(t,i,n=false){const{$deleteBtn:s}=this.parseViewElement(t);n?a.html(s,i):a.text(s,i);}async updateDeleteAllBtnText(t){let i=await this.option.data();this.setDeleteBtnText(t,`清空所有(${i.length})`);}}const we={$key:{STORAGE_KEY:"mt-own-block-rule"},$data:{isRegister:false},init(){this.registerMenu();let e=new p.LockFunction(()=>{this.runRule();});p.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});},registerMenu(){this.$data.isRegister||(this.$data.isRegister=true,G.registerLeftMenu({name:"我的屏蔽",icon:"",iconColor:"#000",callback:()=>{this.showView();}}));},getTemplateData(){return {uuid:p.generateUUID(),enable:true,name:"",data:{userName:"",userUID:"",userLevel:"",postUrl:"",postTitle:"",postContent:"",postPlateName:""}}},showView(){let e=N.config.PanelHandlerComponents();function t(n){return {get(s,o){return n[s]??o},set(s,o){n[s]=o;}}}new Tt({title:"我的屏蔽",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(r=>r.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,s)=>{n.enable=s,this.updateData(n);}},edit:{enable:true,getView:(n,s)=>{let o=document.createDocumentFragment();s||(n=this.getTemplateData());let r=M("启用","enable",true);Reflect.set(r.props,A,t(n));let l=e.createSectionContainerItem_switch(r),c=O("规则名称","name","","",void 0,"必填");Reflect.set(c.props,A,t(n));let d=e.createSectionContainerItem_input(c),m=O("用户名","userName","","",void 0,"可正则");Reflect.set(m.props,A,t(n.data));let g=e.createSectionContainerItem_input(m),f=O("用户UID","userUID","","",void 0,"可正则");Reflect.set(f.props,A,t(n.data));let h=e.createSectionContainerItem_input(f),y=O("用户等级","userLevel","","",void 0,"可正则");Reflect.set(y.props,A,t(n.data));let $=e.createSectionContainerItem_input(y),S=O("帖子url","postUrl","","",void 0,"可正则");Reflect.set(S.props,A,t(n.data));let C=e.createSectionContainerItem_input(S),L=O("帖子标题","postTitle","","",void 0,"可正则");Reflect.set(L.props,A,t(n.data));let T=e.createSectionContainerItem_input(L),I=O("帖子内容","postContent","","",void 0,"可正则");Reflect.set(I.props,A,t(n.data));let V=e.createSectionContainerItem_input(I),H=O("帖子所在的板块名","postPlateName","","",void 0,"可正则");Reflect.set(H.props,A,t(n.data));let z=e.createSectionContainerItem_input(H);return o.appendChild(l),o.appendChild(d),o.appendChild(g),o.appendChild(h),o.appendChild($),o.appendChild(C),o.appendChild(T),o.appendChild(V),o.appendChild(z),o},onsubmit:(n,s,o)=>{let r=n.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return s&&(l.uuid=o.uuid),r.forEach(c=>{let d=Reflect.get(c,"__formConfig__"),m=Reflect.get(d,"attributes"),g=Reflect.get(c,A),f=Reflect.get(m,nt),h=Reflect.get(m,st),y=g.get(f,h);Reflect.has(l,f)?Reflect.set(l,f,y):Reflect.has(l.data,f)?Reflect.set(l.data,f,y):u.error(`${f}不在数据中`);}),l.name.trim()===""?(_.error("规则名称不能为空"),{success:false,data:l}):s?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},runRule(){let e=this.getData();function t(i){for(const n of e){let s=n.data;if(Object.keys(s).find(r=>{let l=s[r];if(p.isNotNull(l)){let c=new RegExp(l,"i"),d=Reflect.get(i,r);if(typeof d=="string"&&p.isNotNull(d)&&d.match(c))return u.info("屏蔽",[s,d]),true}return  false}))return  true}return  false}(E.isGuide()||E.isPlate()||E.isPost())&&(this.getData(),document.querySelectorAll(".comiis_forumlist .forumlist_li").forEach(i=>{let n=i.querySelector("a.top_user"),s=n.href.match(J.uid),o={userName:n.innerText,userUID:s[s.length-1].trim(),userLevel:i.querySelector("span.top_lev").innerText.replace("Lv.",""),postUrl:i.querySelector(".mmlist_li_box a").getAttribute("href")||i.querySelector(".mmlist_li_box a").getAttribute("data-href"),postTitle:i.querySelector(".mmlist_li_box h2 a")?.innerText||"",postContent:i.querySelector(".mmlist_li_box .list_body").innerText,postPlateName:(i.querySelector(".forumlist_li_time a.f_d")||i.querySelector(".comiis_xznalist_bk.cl")).innerText.replace(//g,"").replace(/\s*/g,"").replace(/来自/g,"")};p.isNull(o.postPlateName)&&(o.postPlateName=document.querySelector("#comiis_wx_title_box").innerText),t(o)&&i.remove();}),document.querySelectorAll(".comiis_postlist .comiis_postli").forEach(i=>{let n=i.querySelector("a.top_user"),s=n.href.match(J.uid),o={userName:n.innerText,userUID:s[s.length-1].trim(),userLevel:i.querySelector("a.top_lev").innerText.replace("Lv.",""),postUrl:void 0,postTitle:void 0,postContent:i.querySelector(".comiis_message_table").innerText,postPlateName:void 0};t(o)&&i.remove();})),E.isMessageList()&&(this.getData(),B(".comiis_pms_box .comiis_pmlist ul li").forEach(i=>{let n=i.querySelector("a.b_b").href.match(J.uid),s={userName:i.querySelector("h2").innerText.replace(i.querySelector("h2 span").innerText,"").replace(/\s*/,""),userUID:n[n.length-1].trim(),userLevel:void 0,postUrl:i.querySelector("a.b_b").href,postTitle:void 0,postContent:i.querySelector("p.f_c").innerText.trim(),postPlateName:void 0};t(s)&&i.remove();}));},getData(){return Z(this.$key.STORAGE_KEY,[])},setData(e){Y(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(n=>n.uuid==e.uuid)===-1?(t.push(e),Y(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),i=t.findIndex(s=>s.uuid==e.uuid),n=false;return i!==-1&&(n=true,t[i]=e),this.setData(t),n},deleteData(e){let t=this.getData(),i=t.findIndex(s=>s.uuid==e.uuid),n=false;return i!==-1&&(n=true,t.splice(i,1)),this.setData(t),n},clearData(){rt(this.$key.STORAGE_KEY);}},ut=function(e,t,i,n,s,o="",r,l){let c={text:e,type:"textarea",attributes:{},props:{},description:n,placeholder:o,disabled:r,getValue(){let m=this.props[A].get(t,i);return Array.isArray(m)?m.join(`
`):m},callback(d,m){this.props[A].set(t,m);}};return Reflect.set(c.attributes,nt,t),Reflect.set(c.attributes,st,i),vt.initComponentsStorageApi("switch",c,{get(d,m){return q.getValue(d,m)},set(d,m){q.setValue(d,m);}}),c},ve={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),E.isPost()){let e=this.getData();if(!e.enable)return;let t=new p.LockFunction(()=>{this.runFilter(e);});p.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){G.registerLeftMenu({name:"评论过滤器",icon:"",iconColor:"#ff0019",callback:()=>{this.showView();}});},runFilter(e){let t=function(n){for(const s of e.userBlackList)if(s==n.userName||s==n.userUID)return u.success("评论过滤器：黑名单用户",n),true;return  false},i=function(n){for(const s of e.userWhiteList)if(s===n.userName||s===n.userUID)return u.success("评论过滤器：白名单用户",n),true;return  false};B(".comiis_postlist .comiis_postli").forEach(n=>{if(n.querySelector("#comiis_allreplies"))return;let s=n.querySelector("a.top_user"),o=s.href.match(J.uid),r={userName:s?.innerText||"",userUID:o&&o[o?.length-1]?.trim()||"",content:n.querySelector(".comiis_message_table")?.innerText?.trim()||"",isAuthor:!!n.querySelector("span.top_lev")};if(!i(r)){if(e.replyFlag&&n.querySelector(".comiis_quote")){let l=n.querySelector(".comiis_quote");this.$el.isFilterElementHTML.push(l.outerHTML),l.remove();}if(!(r.isAuthor&&!e.avatarFlag)){if(t(r)){this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>r.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<r.content.length))for(const l of e.keywords){if(typeof l!="string")continue;let c=new RegExp(l);if(r.content.match(c)){console.log("评论过滤器：",r),this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}}}}});},showView(){const e=this;function t(s){return {get(o,r){let l=e.getData(),c=Reflect.get(l,o,r);return (o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(c=c.join(`
`)),c},set(o,r){(o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(r=r.split(`
`).filter(l=>l.trim()!="")),Reflect.set(s,o,r),e.setData(s);}}}let i=N.config.PanelHandlerComponents();new Kt({title:"评论过滤器",data:()=>this.getData(),getView:s=>{let o=document.createDocumentFragment(),r=M("启用","enable",true);Reflect.set(r.props,A,t(s));let l=i.createSectionContainerItem_switch(r),c=M("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(c.props,A,t(s));let d=i.createSectionContainerItem_switch(c),m=M("处理作者评论","avatarFlag",false);Reflect.set(m.props,A,t(s));let g=i.createSectionContainerItem_switch(m),f=M('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(f.props,A,t(s));let h=i.createSectionContainerItem_switch(f),y=O("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(y.props,A,t(s));let $=i.createSectionContainerItem_input(y),S=O("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除",void 0,"",true);Reflect.set(S.props,A,t(s));let C=i.createSectionContainerItem_input(S),L=ut("评论关键字","keywords","","多个关键字换行分割");Reflect.set(L.props,A,t(s));let T=i.createSectionContainerItem_textarea(L),I=ut("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(I.props,A,t(s));let V=i.createSectionContainerItem_textarea(I),H=ut("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(H.props,A,t(s));let z=i.createSectionContainerItem_textarea(H);return o.append(l,d,g,h,$,C,T,V,z),o},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(s,o)=>{console.log(this.$el.isFilterElementHTML),N.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                                ${Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(r=>r.outerHTML).join(`
`)}

                                ${this.$el.isFilterElementHTML.join(`
`)}
                                `,html:true},btn:{ok:{type:"default",text:"关闭"}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"});}}},dialogCloseCallBack(s){},onsubmit:(s,o)=>({success:true,data:o}),style:`
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
            `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return Z(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){Y(this.$key.STORAGE_KEY,e);}},qe={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){G.registerLeftMenu({name:"商品上架提醒",icon:"",iconColor:"#2376b7",callback:()=>{this.showView();}});},async runRule(){async function e(){let n=await F.get("/keke_integralmall-keke_integralmall.html",{fetch:true,allowInterceptConfig:false});if(!n.status){_.error("【积分商城】获取数据失败");return}let s=[];return a.parseHTML(n.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(r=>{s.push({name:a.text(r.querySelector(".mall-info a > *:first-child"))||a.text(r.querySelector(".mall-info a")),price:a.text(r.querySelector(".mall-info span.discount-price i")),endTime:a.text(r.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(r.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),s}if(E.isPointsMall())return;let t=this.getData();if(!t.length)return;let i=await e();if(i){for(const n of i)for(const s of t)if(s.enable&&n.name.match(new RegExp(s.productName,"i"))&&!isNaN(n.remainingQuantity)&&n.remainingQuantity>0){u.success("成功匹配对应商品",s,n),N.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${n.price}金币，仅剩${n.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(s)?_.success("删除成功"):_.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:p.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=N.config.PanelHandlerComponents();function t(n){return {get(s,o){return n[s]??o},set(s,o){n[s]=o;}}}new Tt({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(r=>r.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,s)=>{n.enable=s,this.updateData(n);}},edit:{enable:true,getView:(n,s)=>{let o=document.createDocumentFragment();s||(n=this.getTemplateData());let r=M("启用","enable",true);Reflect.set(r.props,A,t(n));let l=e.createSectionContainerItem_switch(r),c=O("规则名称","name","","",void 0,"必填");Reflect.set(c.props,A,t(n));let d=e.createSectionContainerItem_input(c),m=O("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(m.props,A,t(n));let g=e.createSectionContainerItem_input(m);return o.append(l,d,g),o},onsubmit:(n,s,o)=>{let r=n.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return s&&(l.uuid=o.uuid),r.forEach(c=>{let d=Reflect.get(c,"__formConfig__"),m=Reflect.get(d,"attributes"),g=Reflect.get(c,A),f=Reflect.get(m,nt),h=Reflect.get(m,st),y=g.get(f,h);Reflect.has(l,f)?Reflect.set(l,f,y):u.error(`${f}不在数据中`);}),l.name.trim()===""?(_.error("规则名称不能为空"),{success:false,data:l}):s?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},getData(){return Z(this.$key.STORAGE_KEY,[])},setData(e){Y(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(n=>n.uuid==e.uuid)===-1?(t.push(e),Y(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),i=t.findIndex(s=>s.uuid==e.uuid),n=false;return i!==-1&&(n=true,t[i]=e),this.setData(t),n},deleteData(e){let t=this.getData(),i=t.findIndex(s=>s.uuid==e.uuid),n=false;return i!==-1&&(n=true,t.splice(i,1)),this.setData(t),n},clearData(){rt(this.$key.STORAGE_KEY);}},$e={$key:{STORAGE_KEY:"mt-customizeUserLabels-rule"},init(){if(this.registerMenu(),E.isPage()||E.isGuide()||E.isPlate()||E.isPost()||E.isSearch()||E.isSpace()){let e=this.getData();if(!e.length)return;let t=new p.LockFunction(()=>{this.runRule(e);});p.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){G.registerLeftMenu({name:"自定义用户标签",icon:"",iconColor:"#c70ea6",callback:()=>{this.showView();}});},showView(){let e=N.config.PanelHandlerComponents();function t(n){return {get(s,o){return n[s]??o},set(s,o){n[s]=o;}}}new Tt({title:"自定义用户标签",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(r=>r.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,s)=>{n.enable=s,this.updateData(n);}},edit:{enable:true,getView:(n,s)=>{let o=document.createDocumentFragment();s||(n=this.getTemplateData());let r=M("启用","enable",true);Reflect.set(r.props,A,t(n));let l=e.createSectionContainerItem_switch(r),c=O("规则名称","name","","",void 0,"必填");Reflect.set(c.props,A,t(n));let d=e.createSectionContainerItem_input(c),m=O("用户UID","userUID","","",void 0,"必填，可正则，注意转义");Reflect.set(m.props,A,t(n));let g=e.createSectionContainerItem_input(m),f=O("标签名","labelName","","",void 0,"必填");Reflect.set(f.props,A,t(n));let h=e.createSectionContainerItem_input(f),y=O("标签颜色","labelColor","","");Reflect.set(y.props,A,t(n));let $=e.createSectionContainerItem_input(y),S=$.querySelector("input");$.querySelector(".pops-panel-input__suffix")?.remove(),S.setAttribute("type","color"),a.css(S,{margin:"unset",padding:"unset",width:"80px"});let C=O("标签CSS","labelStyle","","");Reflect.set(C.props,A,t(n));let L=e.createSectionContainerItem_input(C),T=ut("标签点击事件","labelClickEvent","","");Reflect.set(T.props,A,t(n));let I=e.createSectionContainerItem_textarea(T);return o.append(l,d,g,h,$,L,I),o},onsubmit:(n,s,o)=>{let r=n.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return s&&(l.uuid=o.uuid),r.forEach(c=>{let d=Reflect.get(c,"__formConfig__"),m=Reflect.get(d,"attributes"),g=Reflect.get(c,A),f=Reflect.get(m,nt),h=Reflect.get(m,st),y=g.get(f,h);Reflect.has(l,f)?Reflect.set(l,f,y):u.error(`${f}不在数据中`);}),l.name.trim()===""?(_.error("规则名称不能为空"),{success:false,data:l}):l.userUID.trim()===""?(_.error("用户UID不能为空"),{success:false,data:l}):l.labelName.trim()===""?(_.error("标签名不能为空"),{success:false,data:l}):s?{success:this.updateData(l),data:l}:{success:this.addData(l),data:l}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
                    `},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}}}).showView();},runRule(e){let t=p.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist());t.length&&t.forEach(i=>{if(i.hasAttribute("data-custom-label"))return;i.setAttribute("data-custom-label","true");let n=Array.from(i.querySelectorAll("a")).map(s=>{let r=s.href.match(J.uid);if(r)return r[r.length-1]}).filter(s=>s!=null);if(n.length){let s=n[0],o=e.filter(c=>c.enable&&s.match(new RegExp(c.userUID)));if(!o.length)return;let r=document.createElement("a"),l=i.querySelector(".top_lev");o.forEach(c=>{r.className=l.className,r.classList.add("gm-custom-label"),r.style.cssText=`
                    background: ${c.labelColor} !important;${c.labelStyle||""}`,r.innerHTML=c.labelName,a.on(r,"click",async d=>{p.preventEvent(d),p.isNotNull(c.labelClickEvent)&&x.eval(c.labelClickEvent);}),l.parentElement.append(r);});}});},getTemplateData(){return {uuid:p.generateUUID(),enable:true,name:"",userUID:"",labelName:"",labelColor:"",labelStyle:"",labelClickEvent:""}},getData(){return Z(this.$key.STORAGE_KEY,[])},setData(e){Y(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(n=>n.uuid==e.uuid)===-1?(t.push(e),Y(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),i=t.findIndex(s=>s.uuid==e.uuid),n=false;return i!==-1&&(n=true,t[i]=e),this.setData(t),n},deleteData(e){let t=this.getData(),i=t.findIndex(s=>s.uuid==e.uuid),n=false;return i!==-1&&(n=true,t.splice(i,1)),this.setData(t),n},clearData(){rt(this.$key.STORAGE_KEY);}},ke=`.f_c,\r
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
`,Se=()=>({"[呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif","[撇嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif","[色]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif","[发呆]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif","[得意]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif","[流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif","[害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif","[闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif","[睡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif","[大哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif","[尴尬]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif","[发怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif","[调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif","[呲牙]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif","[惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif","[难过]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif","[酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif","[冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif","[抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif","[吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif","[偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif","[可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif","[白眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif","[傲慢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif","[饥饿]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif","[困]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif","[惊恐]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif","[流汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif","[憨笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif","[装逼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif","[奋斗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif","[咒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif","[疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif","[嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif","[晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif","[折磨]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif","[衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif","[骷髅]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif","[敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif","[再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif","[擦汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif","[抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif","[鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif","[糗大了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif","[坏笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif","[左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif","[右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif","[哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif","[鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif","[委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif","[快哭了]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif","[阴脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif","[亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif","[吓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif","[可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif","[眨眼睛]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif","[笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif","[dogeQQ]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif","[泪奔]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif","[无奈]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif","[托腮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif","[卖萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png","[斜眼笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif","[喷血]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif","[惊喜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif","[骚扰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif","[小纠结]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif","[我最美]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif","[菜刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif","[西瓜]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif","[啤酒]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif","[篮球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif","[乒乓]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif","[咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif","[饭]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif","[猪]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif","[玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif","[凋谢]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif","[示爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif","[爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif","[心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif","[蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif","[闪电]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif","[炸弹]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif","[刀]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif","[足球]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif","[瓢虫]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif","[便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif","[月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif","[太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif","[礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif","[抱抱]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif","[喝彩]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif","[祈祷]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif","[棒棒糖]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif","[药]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif","[赞]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif","[差劲]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif","[握手]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif","[胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif","[抱拳]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif","[勾引]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif","[拳头]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif","[爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif","[NO]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif","[OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif","[#呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png","[#滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png","[#吐舌]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png","[#哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png","[#啊]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png","[#酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png","[#怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png","[#开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png","[#汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png","[#泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png","[#黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png","[#鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png","[#不高兴]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png","[#真棒]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png","[#钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png","[#疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png","[#阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png","[#吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png","[#咦]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png","[#委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png","[#花心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png","[#呼～]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png","[#激动]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png","[#冷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png","[#可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png","[#What？]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png","[#勉强]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png","[#狂汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png","[#酸爽]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png","[#乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png","[#雅美蝶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png","[#睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png","[#惊哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png","[#哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png","[#笑尿]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png","[#惊讶]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png","[#小乖]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png","[#喷]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png","[#抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png","[#捂嘴笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png","[#你懂的]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png","[#犀利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png","[#小红脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png","[#懒得理]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png","[#爱心]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png","[#心碎]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png","[#玫瑰]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png","[#礼物]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png","[#彩虹]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png","[#太阳]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png","[#月亮]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png","[#钱币]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png","[#咖啡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png","[#蛋糕]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png","[#大拇指]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png","[#胜利]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png","[#爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png","[#OK]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png","[#弱]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png","[#沙发]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png","[#纸巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png","[#香蕉]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png","[#便便]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png","[#药丸]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png","[#红领巾]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png","[#蜡烛]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png","[#三道杠]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png","[#音乐]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png","[#灯泡]":"https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png","[doge]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png","[doge思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png","[doge再见]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png","[doge生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png","[doge气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png","[doge笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png","[doge调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png","[doge啊哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png","[doge原谅TA]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png","[miao]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png","[miao思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png","[miao拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png","[miao生气]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png","[miao气哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png","[二哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png","[摊手]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png","[w并不简单]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png","[w滑稽]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png","[w色]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png","[w爱你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png","[w拜拜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png","[w悲伤]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png","[w鄙视]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png","[w馋嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png","[w冷汗]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png","[w打哈欠]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png","[w打脸]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png","[w敲打]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png","[w生病]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png","[w闭嘴]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png","[w鼓掌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png","[w哈哈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png","[w害羞]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png","[w呵呵]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png","[w黑线]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png","[w哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png","[w调皮]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png","[w可爱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png","[w可怜]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png","[w酷]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png","[w困]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png","[w懒得理你]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png","[w流泪]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png","[w怒]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png","[w怒骂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png","[w钱]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png","[w亲亲]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png","[w傻眼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png","[w便秘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png","[w失望]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png","[w衰]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png","[w睡觉]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png","[w思考]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png","[w开心]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png","[w色舔]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png","[w偷笑]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png","[w吐]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png","[w抠鼻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png","[w委屈]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png","[w笑哭]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png","[w嘻嘻]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png","[w嘘]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png","[w阴险]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png","[w疑问]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png","[w抓狂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png","[w晕]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png","[w右哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png","[w左哼哼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png","[w肥皂]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png","[w奥特曼]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png","[w草泥马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png","[w兔子]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png","[w熊猫]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png","[w猪头]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png","[w→_→]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png","[w给力]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png","[w囧]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png","[w萌]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png","[w神马]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png","[w威武]":"https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png"}),St={parseText(e){const t=Se();let i=e.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);i&&i.forEach(w=>{let b=w.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/),v=b?b[b.length-1]:"",R=a.attr(`#aimg_${v}`,"title"),P=a.attr(`#aimg_${v}`,"src");P||(R="该图片不存在"),e=e.replace(w,`<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${v}" src="${P}" alt="${R}" title="${R}"></span>`);});let n=e.match(/\[code\]([\s\S]*?)\[\/code\]/g);n&&n.forEach(w=>{let b=w.match(/\[code\]([\s\S]*?)\[\/code\]/),v=b?b[b.length-1]:"",R="",P=v.split(`
`);P.length==1?R=`<li>${v}</li>`:Array.from(P).forEach((W,X)=>{X==P.length-1?R=`${R}<li>${W}</li>`:R=`${R}<li>${W}<br></li>`;}),e=e.replace(w,`
                <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${R}</ol></div></div>`);});let s=e.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);s&&s.forEach(w=>{let b=w.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/),v=w.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/),R=b?b[b.length-1]:"",P=v?v[v.length-1]:"";e=e.replace(w,`<a href="${R}" target="_blank">${P}</a>`);});let o=e.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);o&&o.forEach(w=>{let b=w.match(/\[color=([\s\S]*?)\][\s\S]*\[\/color\]/),v=w.match(/\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/),R=b?b[b.length-1]:"",P=v?v[v.length-1]:"";e=e.replace(w,`<font color="${R}">${P}</font>`);});let r=e.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);r&&r.forEach(w=>{let b=w.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/),v=w.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/),R=b?b[b.length-1]:"",P=v?v[v.length-1]:"";e=e.replace(w,`<font size="${R}">${P}</font>`);});let l=e.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);l&&l.forEach(w=>{let b=null,v=null,R=w.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);R&&(R=R[R.length-1].split(","),b=R[0],v=R[1]),b=b||"",v=v||"";let P=w.match(/\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/),W="";P&&(P[P.length-1]==null?W=P[P.length-2]:W=P[P.length-1]),e=e.replace(w,`<img loading="lazy" src="${W}" border="0" alt="" width="${b}" height="${v}" crossoriginNew="anonymous">`);});let c=e.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);c&&c.forEach(w=>{let b=w.match(/\[hide\]([\s\S]*?)\[\/hide\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${v}</div>`);});let d=e.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);d&&d.forEach(w=>{let b=w.match(/\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/),v=b?b[b.length-2]:"";v=v.split(",");let R=v.length==2?v[1]:"";e=e.replace(w,`<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${R} 才可浏览</div>`);});let m=e.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);m&&m.forEach(w=>{let b=w.match(/\[quote\]([\s\S]*?)\[\/quote\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${v}</blockquote></div>`);});let g=e.match(/\[free\]([\s\S]*?)\[\/free\]/g);g&&g.forEach(w=>{let b=w.match(/\[free\]([\s\S]*?)\[\/free\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<div class="comiis_quote bg_h f_c"><blockquote>${v}</blockquote></div>`);});let f=e.match(/\[b\]([\s\S]*?)\[\/b\]/g);f&&f.forEach(w=>{let b=w.match(/\[b\]([\s\S]*?)\[\/b\]/i),v=b?b[b.length-1]:"";e=e.replace(w,`<strong>${v}</strong>`);});let h=e.match(/\[u\]([\s\S]*?)\[\/u\]/g);h&&h.forEach(w=>{let b=w.match(/\[u\]([\s\S]*?)\[\/u\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<u>${v}</u>`);});let y=e.match(/\[i\]([\s\S]*?)\[\/i\]/g);y&&y.forEach(w=>{let b=w.match(/\[i\]([\s\S]*?)\[\/i\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<i>${v}</i>`);});let $=e.match(/\[s\]([\s\S]*?)\[\/s\]/g);$&&$.forEach(w=>{let b=w.match(/\[s\]([\s\S]*?)\[\/s\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<strike>${v}</strike>`);});let S=e.match(/\[([\s\S]+?)\]/g);S&&S.forEach(w=>{let b=t[w];b&&(e=e.replace(w,`<img loading="lazy" src="${b}" border="0" alt="" smilieid="">`));});let C=e.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);C&&C.forEach(w=>{let b=w.match(/\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/),v=b?b[b.length-1]:"";v&&(e=e.replace(w,`<ignore_js_op><span><iframe src="${v}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`));});let L=e.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);L&&L.forEach(w=>{let b=w.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/),v=w.match(/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/),R=b.length?b[b.length-1]:"",P=v.length?v[v.length-1]:"";(R||P)&&(e=e.replace(w,`<a href="mailto:${R}">${P}</a>`));});let T=e.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);T&&T.forEach(w=>{let b=w.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/),v=w.match(/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/),R=b.length?b[b.length-1]:"",P=v.length?v[v.length-1]:"";(R||P)&&(e=e.replace(w,`<div align="${R}">${P}</div>`));});let I=e.match(/\[qq\][\s\S]*?\[\/qq\]/g);I&&I.forEach(w=>{let b=w.match(/\[qq\]([\s\S]*?)\[\/qq\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<a href="http://wpa.qq.com/msgrd?v=3&uin=${v}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`);});let V=e.match(/\[td\][\s\S]+?\[\/td\]/g);V&&V.forEach(w=>{let b=w.match(/\[td\]([\s\S]*?)\[\/td\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<td>${v}</td>`);});let H=e.match(/\[tr\][\s\S]+?\[\/tr\]/g);H&&H.forEach(w=>{let b=w.match(/\[tr\]([\s\S]*?)\[\/tr\]/),v=b?b[b.length-1]:"";e=e.replace(w,`<tr>${v}</tr>`);});let z=e.match(/\[table\][\s\S]+?\[\/table\]/g);z&&z.forEach(w=>{let b=w.match(/\[table\]([\s\S]*?)\[\/table\]/),v=b?b[b.length-1]:"";v=v.replace(/\n/g,""),e=e.replace(w,`<table>${v}</table>`);});let D=e.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);return D&&D.forEach(w=>{let b=w.match(/\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/),v=w.match(/\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/),R=b?b[b.length-1]:"",P="";R==="a"?P="litype_2":R==="A"?P="litype_3":R.length===1&&R.match(/[0-9]{1}/)&&(P="litype_1");let W=v?v[v.length-1]:"",X=W.split("[*]");if(X.length>1){let tt="";X[0].replace(/[\s]*/,"")==""&&(X=X.slice(1)),Array.from(X).forEach(ft=>{tt=`${tt}<li>${ft}</li>`;}),W=tt;}W=W.replace(/\n/g,""),e=e.replace(w,`<ul type="${R}" class="${P}">${W}</ul>`);}),e},parseVoteText(){let e=["rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)","rgb(233, 39, 37)","rgb(242, 123, 33)","rgb(242, 166, 31)","rgb(90, 175, 74)","rgb(66, 196, 245)","rgb(0, 153, 204)","rgb(51, 101, 174)","rgb(42, 53, 145)","rgb(89, 45, 142)","rgb(219, 49, 145)"],t=B(".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"),i=parseInt(a.val("input#maxchoices"));i=isNaN(i)?0:i,i=i>0?i:0,i=i>t.length?t.length:i;let n=parseInt(a.val("input#polldatas"));n=isNaN(n)?0:n,x.$("input#visibilitypoll").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close");let s=!x.$("input#overt").parent().find(".comiis_checkbox").hasClass("comiis_checkbox_close"),o="",r="";t.forEach((l,c)=>{c>=20||(r=r+`
                    <li class="kmnop">
                        <input type="${i>1?"checkbox":"radio"}">
                        <label><i class="comiis_font f_d"></i>${l.value}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${e[c]}"></em>
                        </span>
                        <em style="color:${e[c]}">0% (0)</em>
                    </li>`);}),o=`
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
                                    ${r}
                                </ul>
                            </div>
                            <div class="comiis_poll_bottom cl">
                                <input type="submit" value="提交" class="formdialog comiis_btn kmshow bg_c f_f" disabled>
                                ${s?'<div class="comiis_quote bg_h b_dashed f_a"><i class="comiis_font"></i>此为公开投票，其他人可看到您的投票项目</div>':""}
                            </div>
                    </div>
                `,x.$(".gm_plugin_previewpostforum_html .postforum_vote").remove(),x.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show").children().eq(0).before(x.$(o));}},yt={$data:{db:new Q.indexedDB("mt_full_reply_record","input_text"),get type(){return E.isPostPublish_voting()?"post-vote":"post"},get tid(){return U.getThreadId(window.location.href)},get pid(){return U.getPostId(window.location.href)}},$key:{noPublishSerializeText:"mt-editor-no-publish-serialize-text",noPublishVotingSerializeText:"mt-editor-no-publish-voting-serialize-text"},$el:{$title:null,$input:null,$form:null},init(){u.info("编辑器优化"),K(ke),this.overridePageEditor();},overridePageEditor(){const e=this;this.$el.$title=k("#needsubject"),this.$el.$form=k("#postform"),this.$el.$input=k("#needmessage"),a.hide(a.parent(".comiis_scrollTop_box"),false),a.css("#postform .comiis_post_from.mt15",{"margin-top":"0px !important"});let t=x.$("#postform .comiis_post_from #comiis_post_tab");x.$("#postform .comiis_post_from .comiis_post_ico").append(t),t.remove(),x.textarea_scrollHeight=()=>{};let i=x.$.fn.comiis_delete;x.$.fn.extend({comiis_delete:function(...c){let d=i.call(this,...c);return p.dispatchEvent(e.$el.$input,"input"),d}}),a.hide(".comiis_btnbox",false),this.initVotePage(),x.$(".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"),K(`
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
        `),a.attr("#filedata","multiple",true),a.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style"),a.on(document,"#comiis_pictitle_key li","click",function(){a.removeClass("#comiis_pictitle_key li","bg_f"),a.addClass(this,"bg_f"),x.$(".gm_plugin_chartbed .comiis_upbox").hide().eq(x.$(this).index()).fadeIn();});let n=parseInt(a.css("#comiis_head","height"))||0,s=parseInt(a.css("#comiis_sub","height"))||0,o=k("#pollm_c_1")?60:0,r=parseInt(a.css(".comiis_styli.comiis_flex","height"))||0,l=parseInt(a.css(".comiis_post_ico.comiis_minipost_icot","height"))||0;a.css("#needmessage","height",`${window.screen.height-n-s-48-r-l-10}px`),a.css("#needmessage","marginBottom",o+"px"),E.isPostPublish_edit()&&a.val("#needsubject")===""?a.hide(".comiis_styli.comiis_flex",false):a.attr("#needsubject","placeholder","请输入完整的帖子标题 (1-80个字)"),a.attr("#needmessage","placeholder","来吧，尽情发挥吧..."),typeof x.comiis_addsmilies=="function"&&(x.comiis_addsmilies=c=>{x.$("#needmessage").comiis_insert(c),x.$("#needmessage")[0].dispatchEvent(new Event("input"));}),(q.getValue("mt-forum-post-editorOptimizationNormal-recordInputText")||q.getValue("mt-forum-post-editorOptimization-recordInputText"))&&(this.setInputChangeEvent(),this.initReplyText()),this.initDeleteBtn(),this.initSaveDraftBtn(),this.initSaveBtn(),this.initPostBtn(),this.initReplyBtn(),this.observerChangeEditorHeight(),this.listenResize(),this.initSelectPostingSection(),this.initUBB(),this.initImage(),this.initPreview(),this.initCharacterCount(),this.initSettingImmersionMode();},async initReplyText(){const e=this;let t=null,i=null,n=null;if(E.isPostPublish_newthread())u.info("新发布帖子的页面"),E.isPostPublish_voting()?(u.info("投票页面"),t=Z(this.$key.noPublishVotingSerializeText),n=()=>{rt(e.$key.noPublishVotingSerializeText);}):(u.info("普通帖子页面"),t=Z(this.$key.noPublishSerializeText),n=()=>{rt(this.$key.noPublishSerializeText);});else if(E.isPostPublish_edit()){u.info("草稿的页面"),u.info(`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`),(await this.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let o=await this.$data.db.get("data");if(o.data){let r=o.data.find(l=>{if(l.type===e.$data.type&&!(l.tid!==e.$data.tid||l.pid!==e.$data.pid))return  true});r&&(t=r.data,n=async()=>{let l=await this.$data.db.get("data");if(l.data){let c=l.data.findIndex(d=>{if(d.type===e.$data.type&&!(d.tid!==e.$data.tid||d.pid!==e.$data.pid))return  true});c!=-1&&(l.data.splice(c,1),await this.$data.db.save("data",l.data));}});}}else if(E.isPostPublish_reply()&&(u.info("回复页面"),q.getValue("mt-forum-post-editorOptimizationNormal-recordInputText"))){(await it.$data.db.get("data")).code===201&&await this.$data.db.save("data",[]);let o=await it.$data.db.get("data");if(o.data){let r=o.data.find(l=>l.forumId===e.$data.tid&&l.repquote===U.getRepquote(window.location.href));r&&(t=r);}}t&&(E.isPostPublish_voting()?i=()=>{let s=e.$el.$form.querySelector("input[name='subject']"),o=e.$el.$form.querySelector("textarea[name='message']"),r=e.$el.$form.querySelector("input[name='maxchoices']"),l=e.$el.$form.querySelector("input[name='expiration']"),c=e.$el.$form.querySelector("input[name='visibilitypoll']"),d=e.$el.$form.querySelector("input[name='overt']");return a.val(s,t.title),a.val(o,t.content),a.val(r,t.maxchoices),a.val(l,t.expiration),a.val(c,t.visibilitypoll),a.val(d,t.overt),p.dispatchEvent(s,"input"),p.dispatchEvent(o,"input"),p.dispatchEvent(r,"input"),p.dispatchEvent(l,"input"),p.dispatchEvent(c,"input"),p.dispatchEvent(d,"input"),true}:E.isPostPublish_reply()?i=()=>{let s=e.$el.$form.querySelector("textarea[name='message']");return a.val(s,t.text),p.dispatchEvent(s,"input"),true}:i=()=>{let s=e.$el.$form.querySelector("input[name='subject']"),o=e.$el.$form.querySelector("textarea[name='message']");return a.val(s,t.title),a.val(o,t.content),p.dispatchEvent(s,"input"),p.dispatchEvent(o,"input"),true},E.isPostPublish_newthread()?(u.info("新发布帖子的页面"),typeof i=="function"&&i()):E.isPostPublish_edit()?(u.info("草稿的页面"),typeof i=="function"&&typeof n=="function"&&N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>存在历史写入的数据，是否恢复到编辑器里？</p>",html:true},btn:{merge:true,position:"space-between",ok:{text:"恢复",callback:async s=>{await i()&&(_.success("恢复成功"),s.close());}},other:{enable:true,type:"danger",text:"删除该数据",callback:async s=>{await n(),s.close(),_.success("删除成功");}}},width:"300px",height:"200px"})):E.isPostPublish_reply()&&(u.info("回复页面"),typeof i=="function"&&i()));},async getReplyRecordSize(){let e=await this.$data.db.get("data");return e.success?p.getTextStorageSize(e?.data?.length?JSON.stringify(e.data):""):p.formatByteToSize(0)},async clearAllReplyRecord(){return await this.$data.db.deleteAll()},deleteReplyTextStorage(){const e=this;this.$data.db.get("data").then(t=>{if(!t.success){console.warn(t);return}let i=E.isPostPublish_voting()?"post-vote":"post",n=U.getThreadId(window.location.href),s=U.getPostId(window.location.href),o=t.data.findIndex(r=>{if(r.type===i&&!(r.tid!==n||r.pid!==s))return  true});o!==-1&&(t.data.splice(o,1),e.$data.db.save("data",t.data).then(r=>{}));});},setInputChangeEvent(){const e=this;a.on([this.$el.$input,this.$el.$title].filter(Boolean),["input","propertychange"],function(t){let i=null;if(E.isPostPublish_voting()){let n=e.$el.$form.querySelector("input[name='subject']"),s=e.$el.$form.querySelector("textarea[name='message']"),o=e.$el.$form.querySelector("input[name='maxchoices']"),r=e.$el.$form.querySelector("input[name='expiration']"),l=e.$el.$form.querySelector("input[name='visibilitypoll']"),c=e.$el.$form.querySelector("input[name='overt']");i={title:n.value,maxchoices:o.value,expiration:r.value,visibilitypoll:l.checked,overt:c.checked,content:s.value};}else {let n=e.$el.$form.querySelector("input[name='subject']"),s=e.$el.$form.querySelector("textarea[name='message']");i={title:n?.value,content:s.value};}E.isPostPublish_newthread()?(u.info("内容改变 ==> 新发布帖子的页面"),E.isPostPublish_voting()?Y(e.$key.noPublishVotingSerializeText,i):Y(e.$key.noPublishSerializeText,i)):E.isPostPublish_edit()?(u.info("内容改变 ==> 草稿的页面"),e.$data.db.get("data").then(n=>{if(!n.success){console.warn(n);return}let s=n.data.findIndex(o=>{if(o.type===e.$data.type&&!(o.tid!==e.$data.tid||o.pid!==e.$data.pid))return  true});s!==-1&&n.data.splice(s,1),n.data.push({url:window.location.href,data:i,pid:e.$data.pid,tid:e.$data.tid,type:e.$data.type}),e.$data.db.save("data",n.data).then(o=>{});})):E.isPostPublish_reply()&&(u.info("内容改变 ==> 回复页面"),q.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText",()=>{it.$data.db.get("data").then(n=>{if(!n.success||n.code===201){console.warn(n);return}let s=n.data.findIndex(o=>o.forumId===e.$data.tid&&o.repquote===U.getRepquote(window.location.href));s!==-1?i.content==null||i.content===""?n.data.splice(s,1):n.data[s]=p.assign(n.data[s],{text:i.content}):n.data.push({forumId:e.$data.tid,url:window.location.href,repquote:U.getRepquote(window.location.href),text:i.content}),it.$data.db.save("data",n.data).then(o=>{});});}));});},initDeleteBtn(){if(!k(".comiis_btnbox .comiis_btn.bg_del"))return;let t=k("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_del"},{type:"button",value:"删除"});a.append(t,i),a.on(i,"click",function(){N.confirm({title:{text:"提示",position:"center"},content:{text:"<p>是否删除帖子?</p>",html:true},btn:{ok:{callback:n=>{n.close(),x.comiis_delthread();}}},width:"300px",height:"200px"});});},initSaveBtn(){let e=a.selector(".comiis_btnbox button#postsubmit:contains('保存')");if(!e||a.text(e).includes("草稿"))return;let t=k("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_save"},{type:"button",value:"保存"});a.append(t,i),a.on(i,"click",function(){e.click();});},initPostBtn(){let e=a.selector(".comiis_btnbox button#postsubmit:contains('发表')");if(!e)return;let t=k("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_post"},{type:"button",value:"发表"});a.append(t,i),a.on(i,"click",function(){a.val("#postsave",0),e.click();});},initReplyBtn(){const e=this;let t=a.selector(".comiis_btnbox button#postsubmit:contains('回复')");if(!t)return;let i=k("#comiis_head .header_y"),n=a.createElement("input",{className:"new_btn_reply"},{type:"button",value:"回复"});a.append(i,n),a.on(n,"click",function(){t.click(),e.deleteReplyTextStorage();});},initVotePage(){B(".comiis_scrollTop_box").length&&(x.$("#htmlon").parent().append(`
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
                `),x.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')").attr("class")!="f_c"?x.$(".comiis_checkbox.comiis_choose_post").removeClass("comiis_checkbox_close"):x.$(".comiis_checkbox.comiis_choose_vote").removeClass("comiis_checkbox_close"),x.$(".comiis_checkbox.comiis_choose_post").on("click",function(){let e=x.$(this);e.addClass("comiis_checkbox_close"),x.$(".comiis_checkbox.comiis_choose_vote").addClass("comiis_checkbox_close"),e.removeClass("comiis_checkbox_close"),window.location.href=window.location.href.replace("&special=1","");}),x.$(".comiis_checkbox.comiis_choose_vote").on("click",function(){let e=x.$(this);e.addClass("comiis_checkbox_close"),x.$(".comiis_checkbox.comiis_choose_post").addClass("comiis_checkbox_close"),e.removeClass("comiis_checkbox_close"),window.location.href=window.location.href+"&special=1";}));},initSaveDraftBtn(){let e=a.selector(".comiis_btnbox button#postsubmit em:contains('保存草稿')");if(!e)return;let t=k("#comiis_head .header_y"),i=a.createElement("input",{className:"new_btn_save_temp"},{type:"button",value:"保存草稿"});k("#needsubject"),a.append(t,i),a.selector(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"),a.on(i,"click",function(){e.click();});},observerChangeEditorHeight(){var e=0;p.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot").then(t=>{p.mutationObserver(t,{callback:i=>{var n=k("#postform > div > div.comiis_post_ico.comiis_minipost_icot");let s=window.getComputedStyle(n).getPropertyValue("height");if(s.toString()===e.toString())return;e=parseInt(s);let o=document.documentElement.clientHeight-k("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-k("#needmessage").getBoundingClientRect().top;o-5<100?(x.$("#needmessage").css("height","100px"),x.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height","100px")):(x.$("#needmessage").css("height",o-5+"px"),x.$(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box").css("height",o-5+"px"));},config:{childList:true,attributes:true,characterData:true,subtree:true}});});},listenResize(){a.on(window,"resize",function(){let e=document.documentElement.clientHeight-k("#postform > div > div.comiis_post_ico.comiis_minipost_icot").getBoundingClientRect().height-k("#needmessage").getBoundingClientRect().top;e-5<100?(a.css("#needmessage","height","100px"),a.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height","100px")):(u.info("设置输入框、预览高度",e-5),a.css("#needmessage","height",e-5+"px"),a.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box","height",e-5+"px"));});},initSelectPostingSection(){K(`
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
            `);let e={2:"版本发布",37:"插件交流",38:"建议反馈",41:"逆向交流",39:"玩机交流",42:"编程开发",40:"求助问答",44:"综合交流",50:"休闲灌水",46:"官方公告",53:"申诉举报",92:"站务专区"};a.before(".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",`
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
        `);let t=k("#select-post-section"),i=U.getForumId(window.location.href);E.isPostPublish_newthread()?(u.info("发帖"),a.on(t,"change",function(){let n=a.val(t),s=`forum.php?mod=post&action=newthread&fid=${n}&extra=&topicsubmit=yes&mobile=2`;u.info(`修改发帖板块: ${e[n]} ${s}`);let o={求助问答:{className:"gm_user_select_help",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="59">求助问答</option>
                        <option value="58">已解决</option>`},建议反馈:{className:"gm_user_select_feedback",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="62">BUG反馈</option>
                        <option value="63">意见反馈</option>
                        <option value="65">论坛问题</option>
                        <option value="64">已解决</option>`},站务专区:{className:"gm_user_select_depot",optionHTML:`<option value="0" selected="selected">请选择</option>
                        <option value="42">版主申请</option>
                        <option value="43">职位调整</option>`}},r=o[e[n]];r?(a.remove(a.parent(".comiis_post_from .styli_tit:contains('分类')")),a.before(".comiis_stylino.comiis_needmessage",`
                        <li class="comiis_styli comiis_flex b_b ${r.className}">
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
                                        ${r.optionHTML}
                                    </select>
                                </div>	
                            </div>
                        </li>
                        `)):Object.keys(o).forEach(l=>{a.remove(".comiis_post_from ."+o[l].className);}),a.attr("#postform","action",s);})):a.attr(t,"disabled",true),a.val(t,i),a.trigger(t,"change");},initCharacterCount(){u.info("添加功能：字符计数"),K(`
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `),a.append("#comiis_mh_sub .swiper-wrapper.comiis_post_ico",`
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`),a.on(this.$el.$input,["input","propertychange"],e=>{let t=this.$el.$input.value,i=p.getTextLength(t),n=St.parseText(t);a.html(".gm_plugin_previewpostforum_html .comiis_message_table",n);let s=k(".gm_plugin_word_count p");a.text(s,i),i>2e4||i<10?a.attr(s,"style","color: red;"):a.attr(s,"style","");});},initUBB(){if(!k(".comiis_post_urlico")){u.error("未找到插入元素");return}K(`
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);let e=Ht(),t=k(".comiis_post_urlico > ul"),i=k("#comiis_post_qydiv > ul"),n=B("#comiis_post_qydiv ul li").length;ue(),a.on("#comiis_post_tab .comiis_input_style .comiis_post_urlico li","click",function(){a.removeClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_0"),a.addClass("#comiis_post_tab .comiis_input_style .comiis_post_urlico li a","f_d"),a.attr(this.querySelector("a"),"class","comiis_xifont f_0"),x.$("#comiis_post_qydiv ul li").hide().eq(x.$(this).index()).fadeIn();}),x.$.each(e,function(s,o){let r=a.createElement("li",{className:"quickUBBs",innerHTML:`
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${o.key}</a>
                `});a.on(r,"click",c=>{if(!k(`#comiis_post_qydiv li[data-key='${o.key}']`)){u.error("未找到该元素");return}B("#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont").forEach(f=>{f.className="comiis_xifont f_d";});let m=r.querySelector("a");m.className="comiis_xifont f_0";let g=n+Object.keys(e).indexOf(s);x.$("#comiis_post_qydiv ul li").hide().eq(g).fadeIn();}),a.append(t,r);let l=document.createElement("li");l.setAttribute("style","display: none;"),l.setAttribute("data-key",o.key),l.innerHTML=`
            <div class="comiis_styli_m f15" style="padding-top:12px;">
                <div class="bg_e comiis_p5" style="border-radius:4px">
                    <textarea class="comiis_pt kmshow f_c" id="comiis_input_${s}" style="font-size:15px" placeholder="请输入需要${o.key}的文字"></textarea>
                </div>
            </div>
            <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                <div class="styli_tit">
                    <button class="comiis_sendbtn bg_0 f_f" data-keyI="${s}" type="button">插入</button>
                </div>
                <div class="flex"></div>
            </div>`,a.append(i,l),a.on(`.comiis_sendbtn[data-keyI="${s}"]`,"click",()=>{let c=x.$(`#comiis_input_${s}`).val();if(c==""){_.warning("请输入需要插入的内容");return}let d=e[s];d.isFunc&&(c=jt(d.num,c)),d.hasOwnProperty("L")&&(c=d.L+c+d.R),x.$("#needmessage").insertAtCaret(c),d.hasOwnProperty("cursorL")&&x.$("#needmessage").moveCursorToCenterByTextWithLeft(d.cursorL,d.cursorLength),d.hasOwnProperty("cursorR")&&x.$("#needmessage").moveCursorToCenterByTextWithRight(d.cursorR,d.cursorLength);});});},initImage(){u.info("添加功能：图片"),K(`
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
            `);let t=k("#imglist"),i=a.parent(t);a.before(".gm_plugin_chartbed .bqbox_t",i),a.on("#imglist .comiis_font","click",n=>{k("#filedata").click();}),a.on("#comiis_pictitle_tab #comiis_pictitle_key","click","li",function(n){let s=n.target;a.removeClass("#comiis_pictitle_tab #comiis_pictitle_key li","bg_f"),a.addClass(s,"bg_f"),x.$("#comiis_pictitle_tab div.comiis_upbox").hide().eq(x.$(s).index()).fadeIn();}),q.execMenuOnce("mt-image-bed-hello-enable",()=>{Ft.init();}),q.execMenuOnce("mt-image-bed-mt-enable",()=>{Ot.init();});},initPreview(){const e=this;u.info("添加功能：双列预览"),K(`
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
            </div>`),a.on(".gm_plugin_previewpostforum","click",function(i){let n=this;if(B("#polldatas").length&&St.parseVoteText(),n.querySelector("i.comiis_font").classList.contains("f_0"))a.hide(".gm_plugin_previewpostforum_html",false);else {a.show(".gm_plugin_previewpostforum_html",false);let o=St.parseText(a.val(e.$el.$input));a.html(".gm_plugin_previewpostforum_html .comiis_message_table",o),a.css(".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style","height",a.css(e.$el.$input,"height"));}});},initSettingImmersionMode(){u.info("初始化设置功能-使用沉浸模式"),a.append(a.parent("#htmlon"),`
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `),a.on("#immersiveinput","click",function(){let e=this,t=a.parent(e).querySelector(".comiis_checkbox"),i=[".comiis_wzpost ul li.comiis_flex",".comiis_wzpost ul li.comiis_styli.kmquote",a.parent(a.parent("#pollchecked")),"#pollm_c_1",".comiis_polloption_add+div.f_0",".comiis_wzpost ul li.comiis_thread_content:contains('内容')","div#comiis_head","div#comiis_head+*:not([class])"];a.hasClass(t,"comiis_checkbox_close")?i.forEach(n=>{n&&a.hide(n,false);}):i.forEach(n=>{n&&a.show(n,false);}),window.dispatchEvent(new Event("resize"));});}},Ce={init(){a.ready(()=>{q.execMenuOnce("mt-forum-post-publish-editorOptimization",()=>{yt.init();});});}},Te={$flag:{showUserUID_initCSS:false},init(){(E.isPage()||E.isGuide()||E.isPlate()||E.isPost()||E.isSearch()||E.isSpace())&&q.execMenuOnce("mt-show-user-uid",()=>{this.showUserUID();}),(E.isSearch()||E.isGuide()||E.isSpace()||E.isPlate())&&q.execMenuOnce("mt-small-window",()=>{Wt.init();}),E.isPost()?(u.info("Router: 帖子"),Gt.init()):E.isSearch()?(u.info("Router: 搜索"),he.init()):E.isKMiSign()?(u.info("Router: 签到"),ge.init()):E.isSpace()||E.isSpaceWithAt()?(u.info("Router: 空间"),fe.init()):E.isGuide()?(u.info("Router: 导读"),ye.init()):E.isPostPublish()?(u.info("Router: 发帖页面"),Ce.init()):u.error("Router: 未适配的链接 ==> "+window.location.href),a.ready(()=>{q.execMenuOnce("mt-black-home",()=>{re.init();}),q.execMenuOnce("mt-online-user",()=>{ce.init();}),q.execMenuOnce("mt-post-paidThemePost",()=>{mt.init();}),q.execMenuOnce("mt-ownBlock",()=>{we.init();}),q.execMenuOnce("mt-post-comment-filter",()=>{ve.init();}),q.execMenuOnce("mt-productListingReminder",()=>{qe.init();}),q.execMenuOnce("mt-customizeUserLabels",()=>{$e.init();}),q.execMenuOnce("mt-link-text-to-hyperlink",()=>{me();}),q.execMenu("mt-auto-sign",()=>{_t.init();}),q.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();});});},showUserUID(){u.info("显示用户UID"),this.$flag.showUserUID_initCSS||(this.$flag.showUserUID_initCSS=true,K(`
			.postli_top_tximg + h2{
 				height: auto;
			}
			.comiis_postli_top.bg_f.b_t h2{
            	height: auto;
          	}
			`));let e=new p.LockFunction(()=>{let t=p.getNodeListValue(G.comiisForumList(),G.comiisPostli(),G.comiisMmlist());t.length&&t.forEach(i=>{if(i.querySelector(".gm-custom-label-uid"))return;let s=Array.from(i.querySelectorAll("a")).map(o=>{let l=o.href.match(J.uid);if(l)return l[l.length-1]}).filter(o=>o!=null);if(s.length){let o=s[0],r=document.createElement("a"),l=i.querySelector(".top_lev");r.className=l.className,r.classList.add("gm-custom-label-uid"),r.style.cssText="background: #FF7600 !important;",r.innerHTML="UID:"+o,a.on(r,"click",async c=>{p.preventEvent(c),await p.setClip(o)?_.success(`${o}已复制`):_.error(`${o}复制失败`);}),l.parentElement.append(r);}});});p.mutationObserver(document,{config:{subtree:true,childList:true},callback(){e.run();}});},async extendCookieExpire(){u.info("延长cookie有效期");let e=await Et.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async i=>{if(i.session)return;let n=i.expirationDate,s=Date.now()/1e3;if(n<s)return;let o=3600*24*30;n-s>o||!t.find(l=>i.name.endsWith(l))||Et.cookie.set({name:i.name,value:i.value,expirationDate:i.expirationDate+o}).then(()=>{u.info(`延长Cookie +30天成功：${i.name}`);}).catch(()=>{u.error(`延长Cookie +30天失败：${i.name}`);});});}},Dt=function(e,t,i,n,s,o,r){let l=[];typeof n=="function"?l=n():l=n;let c={text:e,type:"select",description:o,attributes:{},props:{},getValue(){return this.props[A].get(t,i)},callback(d,m,g){let f=m;if(u.info(`选择：${g}`),typeof s=="function"&&s(d,f,g))return;this.props[A].set(t,f);},data:l};return Reflect.set(c.attributes,nt,t),Reflect.set(c.attributes,st,i),vt.initComponentsStorageApi("select",c,{get(d,m){return q.getValue(d,m)},set(d,m){q.setValue(d,m);}}),c},xt=function(e,t,i,n,s,o,r,l,c,d){let m={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:n,buttonIsRightIcon:s,buttonIconIsLoading:o,buttonType:r,buttonText:i,callback(g){typeof l=="function"&&l(g);},afterAddToUListCallBack:c};return Reflect.set(m.attributes,Ct,()=>{m.disable=false;}),m},Pt=function(e,t,i,n){let s={type:"own",attributes:{},props:i,getLiElementCallBack:e,afterAddToUListCallBack:n};return Reflect.set(s.attributes,Ct,()=>false),s},lt={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return lt.$el.$smallUpload.files[0]},get middle(){return lt.$el.$middleUpload.files[0]},get big(){return lt.$el.$bigUpload.files[0]}},showView(){const e=this;let t=N.confirm({title:{text:"修改头像",position:"center"},content:{text:`
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
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){_.error("请上传小头像");return}if(!e.$upload.middle){_.error("请上传中头像");return}if(!e.$upload.big){_.error("请上传大头像");return}let i=_.loading("正在处理数据中...");try{let n=await this.getUploadUrl();if(n==null)return;let s=await U.getFormHash();if(s==null){_.error("获取formhash失败");return}let o={big:{base64:await p.parseFileToBase64(this.$avatar.big)},middle:{base64:await p.parseFileToBase64(this.$avatar.middle)},small:{base64:await p.parseFileToBase64(this.$avatar.small)}};Object.keys(o).forEach(c=>{let d=o[c];d.base64=d.base64.substring(d.base64.indexOf(",")+1);});let r=new FormData;r.append("Filedata",this.$avatar.big||""),r.append("confirm","确定"),r.append("avatar1",o.big.base64),r.append("avatar2",o.middle.base64),r.append("avatar3",o.small.base64),r.append("formhash",s),u.info("头像的base64字符串",o);let l=await F.post(n,{data:r,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":p.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!l.status)return;l.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),_.success("上传成功")):(u.error("上传失败",l),_.error(l.data.responseText,{timeout:6e3,isHTML:!1}));}catch(n){u.error(n);}finally{i.close();}}}},width:"88vw",height:"500px",style:`
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
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,i,n){a.on(e,"change",s=>{if(!e.files?.length)return;a.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let o=e.files[0],r=o.size,l=new Image,c=new FileReader;c.readAsDataURL(o),c.onload=function(d){l.src=d.target.result,l.onload=function(){if(l.width>i.width||l.height>i.height){e.value="",t.setAttribute("data-success","false"),a.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${l.width} 高：${l.height}`);return}if(r>lt.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),a.text(t,`🤡校验失败 ==> 图片大小不符合：${r}byte，限制最大：${lt.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),a.text(t,`🤣 通过 宽:${l.width} 高:${l.height} 大小(byte):${r}`),n();};};});},async getUploadUrl(){let e=await F.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":p.getRandomPCUA()}});if(!e.status)return;if(p.isNull(e.data.responseText)){_.error("动态头像：获取上传地址失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){_.error("动态头像：获取变量data失败");return}let n=t[t.length-1].split(","),s=n.indexOf("stl_src");if(s===-1&&(s=n.indexOf("src")),s===-1){_.error("动态头像：获取上传地址失败");return}let o=n[s+1],r=new URL(o);return r.pathname=r.pathname.replace("/images/camera.swf","/index.php"),r.searchParams.delete("inajax"),r.searchParams.set("m","user"),r.searchParams.set("a","rectavatar"),r.searchParams.set("base64","yes"),o=r.toString(),u.info("上传地址："+o),o}},Ie={id:"component-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[Dt("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,i)=>{u.info("设置当前Qmsg弹出位置"+i);},"Toast显示在页面九宫格的位置"),Dt("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),M("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},{text:"Cookie配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[M("启用","httpx-use-cookie-enable",false,void 0,"启用后，将根据下面的配置进行添加cookie"),M("使用document.cookie","httpx-use-document-cookie",false,void 0,"自动根据请求的域名来设置对应的cookie"),ut("bbs.binmt.cc","httpx-cookie-bbs.binmt.cc","",void 0,void 0,"Cookie格式：xxx=xxxx;xxx=xxxx")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[M("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),M("显示用户UID","mt-show-user-uid",true,void 0,"格式为UID：xxx"),M("小窗模式","mt-small-window",true,void 0,"开启后点击帖子右侧区域为小窗打开"),M("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{text:"额外菜单项",type:"deepMenu",forms:[{type:"forms",text:"",forms:[M("小黑屋","mt-black-home",true,void 0,"将会在左侧面板添加【小黑屋】菜单"),M("在线用户","mt-online-user",true,void 0,"将会在左侧面板添加【在线用户】菜单"),M("付费主题白嫖提醒","mt-post-paidThemePost",true,void 0,"将会在左侧面板添加【付费主题白嫖提醒】菜单"),M("我的屏蔽","mt-ownBlock",true,void 0,"将会在左侧面板添加【我的屏蔽】菜单"),M("商品上架提醒","mt-productListingReminder",true,void 0,"将会在左侧面板添加【商品上架提醒】菜单"),M("自定义用户标签","mt-customizeUserLabels",true,void 0,"将会在左侧面板添加【自定义用户标签】菜单"),M("评论过滤器","mt-post-comment-filter",true,void 0,"将会在左侧面板添加【评论过滤器】菜单")]}]},{text:"头像",type:"deepMenu",forms:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"forms",forms:[Pt(e=>{let t=a.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),i=a.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),n=a.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return i.querySelector(".avatar-img[data-size='small']"),i.querySelector(".avatar-img[data-size='middle']"),i.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(i),e.appendChild(n),e}),Pt(e=>{let t=a.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),i=a.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${U.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(i),e}),xt("修改头像",`可以上传gif图片，注意图片最大限制为${Q.formatByteToSize(lt.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{lt.showView();})]}]}]}]},Ee={id:"component-forum-post",title:"帖子",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[M("自动展开内容","mt-forum-post-autoExpandContent",true,void 0,"注入CSS展开帖子的内容"),M("修复图片宽度","mt-forum-post-repairImageWidth",true,void 0,"修复图片宽度超出页面宽度的问题"),M("移除帖子字体效果","mt-forum-post-removeFontStyle",false,void 0,""),M("移除评论区的字体效果","mt-forum-post-removeCommentFontStyle",false,void 0,""),M("添加【点评】按钮","mt-forum-post-addCommentOnBtn",false,void 0,"在评论区的每个评论右下角添加按钮"),M("附件点击提醒","mt-forum-post-setAttachmentsClickTip",true,void 0,"阻止默认点击附件就会触发附件下载"),M("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮"),M("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片")]}]},{text:"自动加载评论",type:"deepMenu",forms:[{type:"forms",text:"",forms:[M("自动加载下一页评论","mt-forum-post-loadNextPageComment",true,void 0,""),M("同步加载的地址","mt-forum-post-syncNextPageUrl",false,void 0,"便于刷新页面会停留在当前查看的评论页面")]}]},{text:"编辑器-简略版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[M("启用","mt-forum-post-editorOptimizationNormal",true,void 0,"优化样式，插入bbcode代码等"),M("自动保存输入记录","mt-forum-post-editorOptimizationNormal-recordInputText",true,void 0,"当回复时会自动清空记录"),xt("清空回复记录","当前占用空间大小：计算中","清理",void 0,false,false,"default",async e=>{let n=e.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await it.clearAllReplyRecord();s.success?(_.success("清理成功"),a.text(n,`当前占用空间大小：${await it.getReplyRecordSize()}`)):_.error("清理失败 "+s.msg);},async(e,t)=>{let i=t.target.querySelector(".pops-panel-item-left-desc-text");a.text(i,`当前占用空间大小：${await it.getReplyRecordSize()}`);})]}]},{text:"编辑器-完整版",type:"deepMenu",forms:[{type:"forms",text:"",forms:[M("启用","mt-forum-post-publish-editorOptimization",true,void 0,"优化样式，插入bbcode代码，双列预览等"),M("自动保存输入记录","mt-forum-post-editorOptimization-recordInputText",true,void 0,"当回复/发表时会自动清空记录"),xt("清空回复记录","当前占用空间大小：计算中","清理",void 0,false,false,"default",async e=>{let n=e.target.closest("li").querySelector(".pops-panel-item-left-desc-text"),s=await yt.clearAllReplyRecord();s.success?(_.success("清理成功"),a.text(n,`当前占用空间大小：${await yt.getReplyRecordSize()}`)):_.error("清理失败 "+s.msg);},async(e,t)=>{let i=t.target.querySelector(".pops-panel-item-left-desc-text");a.text(i,`当前占用空间大小：${await yt.getReplyRecordSize()}`);})]}]},{text:"编辑器-图床配置",type:"deepMenu",forms:[{type:"forms",text:'<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>',forms:[M("启用","mt-image-bed-hello-enable",false,void 0,"启用Hello图床"),O("账号","mt-image-bed-hello-account","","",void 0,"必填"),O("密码","mt-image-bed-hello-password","","",void 0,"必填",false,true),O("token","mt-image-bed-hello-token","","",void 0,"必填",false,true)]},{type:"forms",text:'<a href="https://img.binmt.cc/" target="_blank">MT图床</a>',forms:[M("启用","mt-image-bed-mt-enable",true,void 0,"启用MT图床")]},{type:"forms",text:"图片水印",forms:[M("启用","mt-image-bed-watermark-enable",false,void 0,"开启后会为图床图片添加文字水印"),M("自动添加水印","mt-image-bed-watermark-autoAddWaterMark",false,void 0,"开启后会自动添加水印，关闭后会有添加水印后的图片预览"),O("水印文字","mt-image-bed-watermark-text","MT论坛"),O("颜色","mt-image-bed-watermark-text-color","#000000",void 0,void 0,"",false,false,(e,t)=>{let i=t.target?.querySelector("input"),n=t.target?.querySelector(".pops-panel-input__suffix");a.hide(n,false),i.setAttribute("type","color"),a.css(i,{margin:"unset",padding:"unset",width:"80px"});}),O("大小","mt-image-bed-watermark-font-size",16,void 0,void 0,void 0,true),O("透明度","mt-image-bed-watermark-font-opacity",1,void 0,void 0,void 0,true),O("左右间距","mt-image-bed-watermark-left-right-margin",80,void 0,void 0,void 0,true),O("上下间距","mt-image-bed-watermark-top-bottom-margin",80,void 0,void 0,void 0,true),O("旋转角度","mt-image-bed-watermark-rotate",45,void 0,void 0,void 0,true)]}]}]}]},Me={id:"component-search",title:"搜索",forms:[{type:"forms",text:"",forms:[M("显示搜索历史","mt-search-showSearchHistory",true,void 0,"自动记住搜索历史并显示"),M("修复清空按钮","mt-search-repairClearBtn",true,void 0,"修复点击清空按钮不清空输入框的问题"),M("搜索框自动获取焦点","mt-search-searchInputAutoFocus",true,void 0,"")]}]},Le={id:"component-sigh",title:"签到",forms:[{text:"功能",type:"forms",forms:[M("显示【今日签到之星】","mt-sign-showTodaySignStar",true,void 0,"在签到按钮上面显示今日签到之星"),M("显示【今日最先】","mt-sign-showTodayRanking",true,void 0,"在签到排名上面新增【今日最先】")]},{text:"自动签到",type:"forms",forms:[M("启用","mt-auto-sign",true,void 0,"自动请求签到"),M("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),xt("签到信息",`上次签到时间：${(()=>{let e=_t.getHostNameSignInfo(window.location.hostname);return e?Q.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let i=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");N.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:n=>{let s=window.location.hostname;_t.clearSignInfo(s),_.success("删除成功"),a.text(i,`上次签到时间：${(()=>{let o=_t.getHostNameSignInfo(s);return o?Q.formatTime(o.time):"尚未签到"})()}`),n.close();}}},width:"88vw",height:"200px"});})]}]},Re={id:"component-space",title:"空间",forms:[{type:"forms",text:"",forms:[M("修复无法进入空间","mt-space-repairEnterSpace",true,void 0,"修复链接错误导致不能进入空间的问题"),M("显示帖子回复内容","mt-space-showCommentContent",true,void 0,"在帖子-回复下面显示具体评论的内容")]}]},Ae={id:"component-guide",title:"导读",forms:[{type:"forms",text:"",forms:[M("显示最新帖子","mt-guide-showLatestPost",true,void 0,"在最上面显示最新发布的帖子")]}]};ht.addContentConfig([Ie,Ee,Me,Le,Re,Ae]);q.init();G.registerLeftMenu({name:"MT论坛脚本设置",icon:"",iconColor:"#ff0505",iconSize:"23px",callback:()=>{q.showPanel(ht.getConfig(0));}});Te.init();

})(Qmsg, DOMUtils, Utils, pops, hljs, Viewer);