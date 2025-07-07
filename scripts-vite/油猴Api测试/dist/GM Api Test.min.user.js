// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.7
// @author       WhiteSevs
// @description  用于测试您的油猴脚本管理器对油猴函数的支持程度
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACM9JREFUeF7tnUmsFUUUhj9klFmMsxiJGsUBFk4xbDAa16AG1EQUQSDRMBjBuHFrBCNDNBFkUEhUiApro9EFxKi4AAc0xmBEcUrQx6SIov2Te5+Xy323q/t2v9fd59Ty3erq+k99r7rqVNWpfuSb5gL3A2OAUcAwYAgwEDgj31eXrvQTwHHgT+AI0AUcADYBq/NS0y+Hgh+qNfqkWkPn8ApzRQqMHTUY1mepPisAxgGq2A3A8Cwr6GWdZoHDwE5A/2h7O7VPFgBsBqYAgzqtjD+fyAJ/AduA6YmeasrcCQArgZnAiE4q4M92bIFDwAZgQZqS0gBwDfA2cGGaF/ozuVlgP3AH8HmSNyQFYEbU8GuAwUle4nl7zQLHgDnAxtA3JgFgaTQ9WRxasOfrUwssA5aE1CAUgK21gV5ImZ6nGBbQAHFqXFVCAFgLzIoryH8vpAXWAbPb1SwOAI3yM3U8FNJM1a6U/AWaJbRM7QCYDLxXbduYUXcr8H4rtT0BMBbYDYw2Y6JqC/0dmBB9yvc1y+wJgO+Bi6ptE3PqfgAuDgFAHr755sxjQ/CqZo9hqx7goLt3K0uD3MYjG9U1A6CFnWmVle/CZIEtjQtIjQBoSfdLX9WrPCVaRbyqvpTcCICmfJr6eaq+BTQl1NSQRgCOAmdWX7srBP4AhjYCsDDas7fcTWPKAosiP8+Keg+wq+YoMGUB42Ll6JtYB+BvoL9xg1iT/w8wQAB492+t6f/Xu0gAbAe0hduTPQvsEABfAOPtaXfFkUNojwDQIoFv8LTJw34BoKVCHdvyZM8CXQJAZ9F8l6+9xpfiYwJA0wE/qGkTgBMC4F+b2l113RXsABhmwXsAw43vPYDxxncAHICT+wF8DGAYBAfAcOP7J8B44zsADoCPAawz4GMA4wQ4AA6ATwMtM+A9gOXWrx0McUeQYQi8BzDc+O4HMN74DoAD4I4g6wz4GMA4AQ6AA+COIMsMeA9gufXdEWS89R0AB8A/AcYZcAAcAJ8FWGbAewDLre+DQOOt7wA4AP4JMM6AA+AA+CzAMgPeA1hufR8EGm99B8AB8E+AcQZ6GwBFJVdo2q+B74BvatfU1K8819X0us7ksujG0kuAy6M7bq4GBpa0nQqvtzcAOAzsjBp1UwfX0N4d3XHzAHALcHbBYSiV3jwB6Ioun3wphyvn5wJPFTC+cSn15gGAbqV6C7g35//UF2u9wpCc3xNXfKn1Zg2AbqPSbdV746yW0e/nRWOG1/vwtrPS680KAB0wXQPMy6hhkxaj3mBO0y1oSctIkr8yerMAQFeQXVG7dyCJEbPOq8uuNbvI++q7SuntFIDuCwizbs0OysvzAszK6e0EgF8AfYOLmH4Gzs24YpXUmxaAE8A50TXzBzI2clbFjQF+zfAehMrqTQvAE9HVo0uzaq2cylkSjQeeyajsyupNA0ARv4M9tXMW44FK600KwClXj2f035VnMeNqaw2DUr5E9yldCmhMUYakMdm3QLBzLCkAcrrk7eHL2tCvRRDck7LQ1X3o20hZZeQTkbs8KCUBQL7u0UGlFi9Tmqvx9kdrGfItlDEF3wWZBIBnc1jY6S3jLgMeT/gyeTXVA5QxqQdQTxCbQgE4CgyLLa3YGY5EM5ehgVVUj3FWYN6iZvstpMcOBeBj4KaiKg2s10fAjYF5yzTy70lS0AwoFIBFEU0rAo1X1GwLoytylwdWbmY0+n85MG9Rsz0IbIirXAgAull0QFxBJfldW7T6x9RVecq6Ba1Z2vG4tgsB4DPgupI0cFw1PwWujcmkPBPiCirJ77vj2i4EgDcB7cmrQnoDuCtGiCm9IQDou/lYFVofeA7QeKZdMqU3BIBHo5W/FyoCwCPA8zFaTOkNAeB24N2KAHAb8E6MFlN6QwC4IPKH/1QRAM6P/OQ/xmgxpdcBOJ0GB6DJJqa6RMCU3pAewNSgCDClNwQAU9OimrvYzLRXAMjVe0abgZEpx0jkObOk94QA0LanwW0AkDtxYkVmAbsC3LyW9B4TAHG7ZUwtjgCW9HYJgJDtQ7M6ONtflM5Dh1bXBVbGit79AkARO8bHGMbMBomaHazo3SMAtgOTYgBQ1IsRgf89Rc12CBgeWDkrencIgNANhNY2hVrQO08AKOnAR9wuGGvbwquuV7uFBtUBCNpAWIvGYelgSJUPwpwc59QBCB0hWzsaVmW9J2c6dQD0GQgdJJVphBzas7UbG1ZRb/cgtxGAJMYqw5m5RGfkYmYHVdPbDXUjAElO0ipI0tgCxAXqqd10pm9fhkGjqqT3lM9aIwAy5ubIMTQtcK6sYEmhR60Ci8wsm46yZR0sqip6twDT65ZuBkB/P5jA6VPE72OST1lS4squV+O8kY2iWwGwMor9Mz+BZRQ8Sa7kvo4XpLhAe3IIDtVsijLrXQUsiANAv4csEDWWoyBKT/Zh3CDFA3o6w6BQcfyXUW/LeAetegCJV9j2T2L2CbQyUm+HTtXAdb2hULFp9R4DrgfqYfm7264nAJRhBvBK3L9Ci997K3iyQr/cKXdmijpm+UgZ9CrU/sZWotsBoPwKBbc4pbXyCp+uaB8PR3v3RqWsV16PFVWv7KVPZMsUB4Ae2gpM6cBqmpKp63m1gxgDOtt/X+3TVNSpZ91ERdK7DZjaru1CANDzayPHinzHnSZtQNVI/avAK2OurM0w4s70d1qvvJ7vS73a/TQ7TlgoACpHUTM04PJUfAtocS82OohkJAFA+SfXPgllDRdX/KbrrIba4KsuX7OxoJQUABWqNYAPShxDL8gwJcwk340u1dIaSHBKA0C9cHkM9Vko+17BYGMVNKPcu+ruT/Hwhda1EwDq79ACkmYJfT0fD9VclXzyP2iU372wk0ZYFgDovXUP1c05rMKl0VXlZ7Qq+WFWl3NlBUCjwTVn16dB7uSyTt+KBpCmk/KlqKvPNF5jHgA0w6AIY1qpk+dO4WYVylw7kNsdSC1aA/RGfbTApJ26OqupsLbyLGqFVZHNMm30RjH/AX1V4etVAz1zAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.addElement
// @grant        GM.addStyle
// @grant        GM.addValueChangeListener
// @grant        GM.cookie
// @grant        GM.deleteValue
// @grant        GM.deleteValues
// @grant        GM.download
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @grant        GM.getTab
// @grant        GM.getTabs
// @grant        GM.getValue
// @grant        GM.getValues
// @grant        GM.info
// @grant        GM.listValues
// @grant        GM.log
// @grant        GM.notification
// @grant        GM.openInTab
// @grant        GM.registerMenuCommand
// @grant        GM.removeValueChangeListener
// @grant        GM.saveTab
// @grant        GM.setClipboard
// @grant        GM.setValue
// @grant        GM.setValues
// @grant        GM.unregisterMenuCommand
// @grant        GM.webRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_cookie
// @grant        GM_deleteValue
// @grant        GM_deleteValues
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_getTab
// @grant        GM_getTabs
// @grant        GM_getValue
// @grant        GM_getValues
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_log
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_saveTab
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// @grant        window.onurlchange
// @run-at       document-start
// ==/UserScript==

(function () {
	'use strict';

	var Y=typeof GM<"u"?GM:void 0,cn=typeof GM_addElement<"u"?GM_addElement:void 0,fn=typeof GM_addStyle<"u"?GM_addStyle:void 0,Fe=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,Ot=typeof GM_cookie<"u"?GM_cookie:void 0,we=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,dn=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,Ar=typeof GM_download<"u"?GM_download:void 0,ve=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,pn=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,un=typeof GM_getTab<"u"?GM_getTab:void 0,bn=typeof GM_getTabs<"u"?GM_getTabs:void 0,Nt=typeof GM_getValue<"u"?GM_getValue:void 0,re=typeof GM_getValues<"u"?GM_getValues:void 0,It=typeof GM_info<"u"?GM_info:void 0,hn=typeof GM_listValues<"u"?GM_listValues:void 0,gn=typeof GM_log<"u"?GM_log:void 0,mn=typeof GM_notification<"u"?GM_notification:void 0,le=typeof GM_openInTab<"u"?GM_openInTab:void 0,oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,yn=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,Er=typeof GM_saveTab<"u"?GM_saveTab:void 0,xn=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,_t=typeof GM_setValue<"u"?GM_setValue:void 0,Ae=typeof GM_setValues<"u"?GM_setValues:void 0,je=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Tr=typeof GM_webRequest<"u"?GM_webRequest:void 0,zn=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,vt=typeof unsafeWindow<"u"?unsafeWindow:void 0,Pt=window;function Sr(){try{typeof Object.assign!="function"&&(Object.assign=function(a){return a=Object(a),arguments.length>1&&[...arguments].splice(1,arguments.length-1).forEach(e=>{for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);}),a});}catch(a){console.warn("Qmsg CompatibleProcessing Object.assign error",a);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var a=this;function t(e){return function(n){var r=a.className.split(/\s+/g),o=r.indexOf(n);e(r,o,n),a.className=r.join(" ");}}return {add:t(function(e,n,r){~n||e.push(r);}),remove:t(function(e,n){~n&&e.splice(n,1);}),toggle:t(function(e,n,r){~n?e.splice(n,1):e.push(r);}),contains:function(e){return !!~a.className.split(/\s+/g).indexOf(e)},item:function(e){return a.className.split(/\s+/g)[e]||null}}}});}catch(a){console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning",a);}}const Tt={get PLUGIN_NAME(){return "qmsg"},get NAMESPACE(){return "qmsg"},INS_DEFAULT:{},get config(){return {parent:document.body||document.documentElement,useShadowRoot:true,shadowRootMode:"open",animation:true,autoClose:true,listenEventToPauseAutoClose:true,content:"",html:false,isHTML:false,position:"top",showClose:false,maxNums:5,onClose:null,showIcon:true,showMoreContent:false,showReverse:false,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:false,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:false,afterRender:null}}},Cr=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,Gn={info:`
		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/>
		</svg>`,warning:`

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/>
		</svg>`,error:`

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/>
		</svg>`,success:`

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/>
		</svg>`,loading:`
		<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/>
			<path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`},St={insInfoList:[],remove(a){let t=false;for(let e=0;e<St.insInfoList.length;e++)if(St.insInfoList[e].uuid===a){St.insInfoList.splice(e,1),t=true;break}return t}},kr=a=>(t,e)=>(a.set(t,e),e),wn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Fn=536870912,vn=Fn*2,Mr=(a,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<vn?n+1:0;if(!e.has(r))return a(e,r);if(e.size<Fn){for(;e.has(r);)r=Math.floor(Math.random()*vn);return a(e,r)}if(e.size>wn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*wn);return a(e,r)},jn=new WeakMap,$r=kr(jn),qe=Mr($r,jn),Lr=a=>typeof a.start=="function",An=new WeakMap,Ir=a=>({...a,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return An.set(n,r),n},disconnect:({call:t})=>async e=>{const n=An.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),Be=new WeakMap,_r=a=>{if(Be.has(a))return Be.get(a);const t=new Map;return Be.set(a,t),t},Rr=a=>{const t=Ir(a);return e=>{const n=_r(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}}),Lr(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((f,d)=>{const u=qe(n);n.set(u,{reject:d,resolve:f}),l===null?e.postMessage({id:u,method:s},c):e.postMessage({id:u,method:s,params:l},c);}),o=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:o})};return {...i}}},Gt=new Map([[0,null]]),Ft=new Map([[0,null]]),Or=Rr({clearInterval:({call:a})=>t=>{typeof Gt.get(t)=="symbol"&&(Gt.set(t,null),a("clear",{timerId:t,timerType:"interval"}).then(()=>{Gt.delete(t);}));},clearTimeout:({call:a})=>t=>{typeof Ft.get(t)=="symbol"&&(Ft.set(t,null),a("clear",{timerId:t,timerType:"timeout"}).then(()=>{Ft.delete(t);}));},setInterval:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=qe(Gt);Gt.set(o,r);const i=()=>a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=Gt.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),Gt.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=qe(Ft);return Ft.set(o,r),a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=Ft.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(Ft.delete(o),t(...n));}),o}}),Pr=a=>{const t=new Worker(a);return Or(t)},Dr=(a,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=a(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},Hr=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,Se=Dr(Pr,Hr),Br=a=>Se().clearInterval(a),Nr=a=>Se().clearTimeout(a),Ur=(...a)=>Se().setInterval(...a),Vr=(...a)=>Se().setTimeout(...a),ft={getNameSpacify(...a){let t=Tt.NAMESPACE;for(let e=0;e<a.length;++e)t+="-"+a[e];return t},isNumber(a){return /^\d+$/.test(a)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){let t=Math.random()*16|0;return (a=="x"?t:t&3|8).toString(16)})},mergeArgs(a="",t){let e={};if(arguments.length===0)return e;if(t!=null){if(e.content=a,typeof t=="object"&&t!=null)return Object.assign(e,t)}else {if(typeof a=="object"&&a!=null)return Object.assign(e,a);e.content=a;}return e},toDynamicObject(a,...t){let e=Object.assign({},a??{});return Object.keys(e).forEach(n=>{let r=e[n];Object.defineProperty(e,n,{get(){let o=t.findIndex(i=>typeof i=="object"&&i!=null&&i.hasOwnProperty.call(i,n));return o!==-1?t[o][n]:r},set(o){r=o;}});}),e},setTimeout(a,t){try{return Vr(a,t)}catch{return globalThis.setTimeout(a,t)}},clearTimeout(a){try{a!=null&&Nr(a);}catch{}finally{globalThis.clearTimeout(a);}},setInterval(a,t){try{return Ur(a,t)}catch{return globalThis.setInterval(a,t)}},clearInterval(a){try{a!=null&&Br(a);}catch{}finally{globalThis.clearInterval(a);}},setSafeHTML(a,t){try{a.innerHTML=t;}catch{if(globalThis.trustedTypes){const n=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:r=>r});a.innerHTML=n.createHTML(t);}else throw new Error("QmsgUtils trustedTypes is not defined")}}},Lt={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},__CAN_ANIMATION__:void 0,get CAN_ANIMATION(){return this.__CAN_ANIMATION__=this.__CAN_ANIMATION__??this.getStyleAnimationNameValue(document.createElement("div"))!=null,this.__CAN_ANIMATION__},getStyleAnimationNameValue(a){for(let t=0;t<this.$name.startNameList.length;t++){let e=this.$name.startNameList[t],n=a.style[e];if(n!=null)return n}},setStyleAnimationName(a,t=""){this.$name.startNameList.forEach(e=>{e in a.style&&(a.style[e]=t);});}},zr={css:`@charset "utf-8";
      .qmsg.qmsg-wrapper{position:fixed;top:16px;left:0;z-index:50000;display:flex;box-sizing:border-box;margin:0;padding:0;width:100%;color:rgba(0,0,0,.55);list-style:none;font-variant:tabular-nums;font-size:13px;line-height:1;font-feature-settings:"tnum";pointer-events:none;flex-direction:column;}
      .qmsg.qmsg-data-position-center,.qmsg.qmsg-data-position-left,.qmsg.qmsg-data-position-right{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
      .qmsg.qmsg-data-position-bottom,.qmsg.qmsg-data-position-bottomleft,.qmsg.qmsg-data-position-bottomright{position:fixed;top:unset;bottom:0;bottom:8px;left:50%;transform:translate(-50%,0);}
      .qmsg.qmsg-data-position-bottomleft .qmsg-item,.qmsg.qmsg-data-position-left .qmsg-item,.qmsg.qmsg-data-position-topleft .qmsg-item{text-align:left;}
      .qmsg.qmsg-data-position-bottom .qmsg-item,.qmsg.qmsg-data-position-center .qmsg-item,.qmsg.qmsg-data-position-top .qmsg-item{text-align:center;}
      .qmsg.qmsg-data-position-bottomright .qmsg-item,.qmsg.qmsg-data-position-right .qmsg-item,.qmsg.qmsg-data-position-topright .qmsg-item{text-align:right;}
      .qmsg .qmsg-item{position:relative;padding:8px;text-align:center;-webkit-animation-duration:.3s;animation-duration:.3s;}
      .qmsg .qmsg-item .qmsg-count{position:absolute;top:-4px;left:-4px;display:inline-block;height:16px;min-width:16px;border-radius:2px;background-color:red;color:#fff;text-align:center;font-size:12px;line-height:16px;-webkit-animation-duration:.3s;animation-duration:.3s;}
      .qmsg .qmsg-item:first-child{margin-top:-8px;}
      .qmsg .qmsg-content{position:relative;display:inline-block;padding:10px 12px;max-width:80%;min-width:40px;border-radius:4px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.15);text-align:center;pointer-events:all;}
      .qmsg .qmsg-content [class^=qmsg-content-]{display:flex;align-items:center;}
      .qmsg .qmsg-icon{position:relative;top:1px;display:inline-block;margin-right:8px;color:inherit;vertical-align:-.125em;text-align:center;text-transform:none;font-style:normal;font-size:16px;line-height:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
      .qmsg .qmsg-icon svg{display:inline-block;}
      .qmsg .qmsg-content .qmsg-show-more-content{display:flex;align-items:center;white-space:unset;overflow:unset;text-overflow:unset;padding-right:unset}
      .qmsg .qmsg-content-info .qmsg-icon{color:#1890ff;}
      .qmsg .qmsg-icon-close{margin:0;margin-left:8px;padding:0;outline:0;border:none;background-color:transparent;color:rgba(0,0,0,.45);font-size:12px;cursor:pointer;transition:color .3s;}
      .qmsg .qmsg-icon-close:hover>svg path{stroke:#555;}
      .qmsg .qmsg-icon-close.qmsg-show-more-content{position:unset;overflow:unset;padding-left:6px;margin-right:0}
      .qmsg .animate-turn{animation:MessageTurn 1s linear infinite;-webkit-animation:MessageTurn 1s linear infinite;}
      @keyframes MessageTurn{
            0%{-webkit-transform:rotate(0);}
            25%{-webkit-transform:rotate(90deg);}
            50%{-webkit-transform:rotate(180deg);}
            75%{-webkit-transform:rotate(270deg);}
            100%{-webkit-transform:rotate(360deg);}
      }
      @-webkit-keyframes MessageTurn{
            0%{-webkit-transform:rotate(0);}
            25%{-webkit-transform:rotate(90deg);}
            50%{-webkit-transform:rotate(180deg);}
            75%{-webkit-transform:rotate(270deg);}
            100%{-webkit-transform:rotate(360deg);}
      }
      @-webkit-keyframes MessageMoveOut{
            0%{max-height:150px;opacity:1;}
            to{max-height:0;opacity:0;}
      }
      @keyframes MessageMoveOut{
            0%{max-height:150px;opacity:1;}
            to{max-height:0;opacity:0;}
      }
      @-webkit-keyframes MessageMoveIn{
            0%{opacity:0;transform:translateY(-100%);transform-origin:0 0;}
            to{opacity:1;transform:translateY(0);transform-origin:0 0;}
      }
      @keyframes MessageMoveIn{
            0%{opacity:0;transform:translateY(-100%);transform-origin:0 0;}
            to{opacity:1;transform:translateY(0);transform-origin:0 0;}
      }
      @-webkit-keyframes MessageShake{
            0%,100%{opacity:1;transform:translateX(0);}
            25%,75%{opacity:.75;transform:translateX(-4px);}
            50%{opacity:.25;transform:translateX(4px);}
      }
      @keyframes MessageShake{
            0%,100%{opacity:1;transform:translateX(0);}
            25%,75%{opacity:.75;transform:translateX(-4px);}
            50%{opacity:.25;transform:translateX(4px);}
      }`,getStyleElement(){let a=document.createElement("style");return a.setAttribute("type","text/css"),a.setAttribute("data-type",Tt.PLUGIN_NAME),ft.setSafeHTML(a,this.css),a}};class Gr{timeId=void 0;startTime;endTime;setting;uuid;state;repeatNum;$Qmsg;constructor(t,e){this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=ft.toDynamicObject(Tt.config,t,Tt.INS_DEFAULT),this.uuid=e,this.state="opening",this.$Qmsg=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.init(),(typeof this.setting.consoleLogContent=="function"?this.setting.consoleLogContent(this):this.setting.consoleLogContent)&&console.log(this.setting.content),typeof this.setting.afterRender=="function"&&this.setting.afterRender(this);}getSetting(){return this.setting}getRepeatNum(){return this.repeatNum}setRepeatNum(t){this.repeatNum=t;}setRepeatNumIncreasing(){this.repeatNum++;}init(){let t=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$Qmsg.classList.add(this.setting.customClass);let e=Gn[this.setting.type||"info"],n=ft.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(n+=" "+ft.getNameSpacify("content-with-close"));let r=this.setting.content||"",o="",i=Cr;this.setting.showMoreContent&&(n+="qmsg-show-more-content",o+="qmsg-show-more-content");let s="";this.setting.showClose&&(s=`<i class="qmsg-icon qmsg-icon-close ${o}">${i}</i>`);let l=document.createElement("span"),c=ft.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.html||this.setting.isHTML?ft.setSafeHTML(l,r):l.innerText=r,this.setting.isLimitWidth){let h=this.setting.limitWidthNum;typeof h=="string"?ft.isNumber(h)&&(h=h+"px"):h=h.toString()+"px",l.style.maxWidth=h,l.style.width=h,this.setting.limitWidthWrap==="no-wrap"?l.style.whiteSpace="nowrap":this.setting.limitWidthWrap==="ellipsis"?(l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"):this.setting.limitWidthWrap==="wrap"&&(l.style.whiteSpace="");}ft.setSafeHTML(this.$Qmsg,`
			<div class="qmsg-content">
				<div class="${n}">
				${this.setting.showIcon?`<i class="qmsg-icon">${e}</i>`:""}
					${l.outerHTML}
					${s}
				</div>
			</div>
			`);let f=this.$Qmsg.querySelector(".qmsg-content");this.$Qmsg.classList.add(ft.getNameSpacify("item")),this.$Qmsg.setAttribute(ft.getNameSpacify("uuid"),this.uuid);let d,u,g;if(d=document.querySelector(".qmsg-shadow-container"),u=this.setting.useShadowRoot?d?.shadowRoot:d,!d){if(d=document.createElement("div"),d.className="qmsg-shadow-container",this.setting.useShadowRoot?u=d.attachShadow({mode:this.setting.shadowRootMode}):u=d,u.appendChild(zr.getStyleElement()),this.setting.style!=null){let h=document.createElement("style");h.setAttribute("type","text/css"),h.setAttribute("data-id",this.uuid),ft.setSafeHTML(h,this.setting.style),f.insertAdjacentElement("afterend",h);}this.setting.parent.appendChild(d);}if(u==null)throw new Error("QmsgInst "+Tt.PLUGIN_NAME+" $shadowRoot is null");g=u.querySelector(`.${Tt.NAMESPACE}.${c}`),g||(g=document.createElement("div"),g.classList.add(Tt.NAMESPACE,ft.getNameSpacify("wrapper"),ft.getNameSpacify("is-initialized"),c),u.appendChild(g)),this.setting.showReverse?g.style.flexDirection="column-reverse":g.style.flexDirection="column";let w=this.setting.zIndex;if(typeof w=="function"&&(w=w()),isNaN(w)||(g.style.zIndex=w.toString()),g.appendChild(this.$Qmsg),this.setState(this.$Qmsg,"opening"),this.setting.showClose){let h=this.$Qmsg.querySelector(".qmsg-icon-close");h&&h.addEventListener("click",v=>{t.close();});}let b=h=>{Lt.getStyleAnimationNameValue(t.$Qmsg)===Lt.$state.closing&&(t.endTime=Date.now(),t.destroy()),Lt.setStyleAnimationName(t.$Qmsg);};if(Lt.$name.endNameList.forEach(function(h){t.$Qmsg.addEventListener(h,b);}),this.setting.autoClose&&this.setting.listenEventToPauseAutoClose){this.resetAutoCloseTimer();let h=T=>{this.clearAutoCloseTimer();},v=T=>{if(this.timeId!=null){console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId："+this.timeId);return}this.startAutoCloseTimer();},E=false;this.$Qmsg.addEventListener("mouseenter",h),this.$Qmsg.addEventListener("mouseleave",v),this.$Qmsg.addEventListener("touchstart",T=>{E||(E=true,this.$Qmsg.removeEventListener("mouseenter",h),this.$Qmsg.removeEventListener("mouseleave",v)),h();}),this.$Qmsg.addEventListener("touchend",v),this.$Qmsg.addEventListener("touchcancel",v);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=Tt.config.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=Tt.config.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof Tt.config.zIndex=="function"?Tt.config.zIndex():Tt.config.zIndex);}setState(t,e){!e||!Lt.$state[e]||(this.state=e,Lt.setStyleAnimationName(t,Lt.$state[e]));}setMsgCount(){let t=ft.getNameSpacify("count"),e=`div.${ft.getNameSpacify("data-position",this.setting.position.toLowerCase())} [class^="qmsg-content-"]`,n=this.$Qmsg.querySelector(e);if(!n)throw new Error("QmsgInst $content is null");let r=n.querySelector("."+t);r||(r=document.createElement("span"),r.classList.add(t),n.appendChild(r));let o=this.getRepeatNum();ft.setSafeHTML(r,o.toString()),Lt.setStyleAnimationName(r),Lt.setStyleAnimationName(r,"MessageShake"),this.resetAutoCloseTimer();}clearAutoCloseTimer(){ft.clearTimeout(this.timeId),this.timeId=void 0,this.startTime=null,this.endTime=null;}startAutoCloseTimer(){this.setting.autoClose&&this.setting.listenEventToPauseAutoClose&&(this.startTime=Date.now(),this.endTime=null,this.timeId=ft.setTimeout(()=>{this.close();},this.setting.timeout));}resetAutoCloseTimer(){this.clearAutoCloseTimer(),this.startAutoCloseTimer();}close(){this.setState(this.$Qmsg,"closing"),Lt.CAN_ANIMATION?St.remove(this.uuid):this.destroy();let t=this.setting.onClose;t&&typeof t=="function"&&t.call(this);}destroy(){this.endTime=Date.now(),this.$Qmsg.remove(),ft.clearTimeout(this.timeId),St.remove(this.uuid),this.timeId=void 0;}get $content(){let t=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(!t)throw new Error("QmsgInst $content is null");return t}setText(t){let e=this.$content;e.innerText=t,this.setting.content=t;}setHTML(t){let e=this.$content;ft.setSafeHTML(e,t),this.setting.content=t;}}function ce(a={}){let t=JSON.stringify(a),e=St.insInfoList.find(r=>r.config===t),n=e?.instance;if(n==null){let r=ft.getUUID(),o={uuid:r,config:t,instance:new Gr(a,r)};St.insInfoList.push(o);let i=St.insInfoList.length,s=o.instance.getSetting().maxNums;if(i>s)for(let l=0;l<i-s;l++){let c=St.insInfoList[l];c&&c.instance.getSetting().autoClose&&c.instance.close();}e=o,n=o.instance;}else n.getRepeatNum()?n.getRepeatNum()>=99||n.setRepeatNumIncreasing():n.setRepeatNum(2),n.setMsgCount();if(n)n.$Qmsg.setAttribute("data-count",n?.getRepeatNum().toString());else throw new Error("QmsgInst is null");return n}const pe={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let a=0;a<St.insInfoList.length;a++){let t=St.insInfoList[a];t.instance.setting.type!=="loading"&&t.instance.endTime==null&&t.instance.startTime!=null&&Date.now()-t.instance.startTime>=t.instance.getSetting().timeout&&t.instance.close();}},option:{capture:true}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",pe.visibilitychange.eventConfig.callback,pe.visibilitychange.eventConfig.option):console.error("Qmsg addEvent visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",pe.visibilitychange.eventConfig.callback,pe.visibilitychange.eventConfig.option);}}};Sr();class Fr{$data;$eventUtils;constructor(t){this.$data={version:"2025.6.7",config:Tt,icon:Gn,instanceStorage:St},this.$eventUtils=pe,this.$eventUtils.visibilitychange.addEvent(),this.config(t);}config(t){t!=null&&typeof t=="object"&&(Tt.INS_DEFAULT=null,Tt.INS_DEFAULT=t);}info(t,e){let n=ft.mergeArgs(t,e);return n.type="info",ce.call(this,n)}warning(t,e){let n=ft.mergeArgs(t,e);return n.type="warning",ce.call(this,n)}success(t,e){let n=ft.mergeArgs(t,e);return n.type="success",ce.call(this,n)}error(t,e){let n=ft.mergeArgs(t,e);return n.type="error",ce.call(this,n)}loading(t,e){let n=ft.mergeArgs(t,e);return n.type="loading",n.autoClose=false,ce.call(this,n)}remove(t){St.remove(t);}closeAll(){for(let t=St.insInfoList.length-1;t>=0;t--){let e=St.insInfoList[t];e&&e.instance&&e.instance.close();}}}let R=new Fr,qn=class{defaultApi={document,window,globalThis,self,top};api;constructor(t){t&&(t.globalThis==null&&(t.globalThis=t.window),t.self==null&&(t.self=t.window)),t||(t=Object.assign({},this.defaultApi)),this.api=Object.assign({},t);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}};const jr=a=>(t,e)=>(a.set(t,e),e),En=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Wn=536870912,Tn=Wn*2,qr=(a,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<Tn?n+1:0;if(!e.has(r))return a(e,r);if(e.size<Wn){for(;e.has(r);)r=Math.floor(Math.random()*Tn);return a(e,r)}if(e.size>En)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*En);return a(e,r)},Kn=new WeakMap,Wr=jr(Kn),We=qr(Wr,Kn),Kr=a=>typeof a.start=="function",Sn=new WeakMap,Xr=a=>({...a,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return Sn.set(n,r),n},disconnect:({call:t})=>async e=>{const n=Sn.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),Ne=new WeakMap,Qr=a=>{if(Ne.has(a))return Ne.get(a);const t=new Map;return Ne.set(a,t),t},Yr=a=>{const t=Xr(a);return e=>{const n=Qr(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}}),Kr(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((f,d)=>{const u=We(n);n.set(u,{reject:d,resolve:f}),l===null?e.postMessage({id:u,method:s},c):e.postMessage({id:u,method:s,params:l},c);}),o=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:o})};return {...i}}},jt=new Map([[0,null]]),qt=new Map([[0,null]]),Jr=Yr({clearInterval:({call:a})=>t=>{typeof jt.get(t)=="symbol"&&(jt.set(t,null),a("clear",{timerId:t,timerType:"interval"}).then(()=>{jt.delete(t);}));},clearTimeout:({call:a})=>t=>{typeof qt.get(t)=="symbol"&&(qt.set(t,null),a("clear",{timerId:t,timerType:"timeout"}).then(()=>{qt.delete(t);}));},setInterval:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=We(jt);jt.set(o,r);const i=()=>a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=jt.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),jt.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=We(qt);return qt.set(o,r),a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=qt.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(qt.delete(o),t(...n));}),o}}),Zr=a=>{const t=new Worker(a);return Jr(t)},to=(a,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=a(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},eo=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,Ce=to(Zr,eo),no=a=>Ce().clearInterval(a),ro=a=>Ce().clearTimeout(a),oo=(...a)=>Ce().setInterval(...a),ao=(...a)=>Ce().setTimeout(...a),O={windowApi:new qn({document,window,top}),isShow(a){return !!a.getClientRects().length},getSafeHTML(a){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:e=>e}).createHTML(a):a},setSafeHTML(a,t){a.innerHTML=this.getSafeHTML(t);},showElement(a){let t=a.cloneNode(true);return t.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(t),{recovery(){t.remove();}}},getStyleValue(a,t){let e=null,n=null;a instanceof CSSStyleDeclaration?n=a:(e=a.ownerDocument.defaultView,(!e||!e.opener)&&(e=window),n=e.getComputedStyle(a));let r=parseFloat(n[t]);return isNaN(r)?0:r},isWin(a){return typeof a!="object"||a instanceof Node?false:a===globalThis||a===window||a===self||a===globalThis||a===window||a===self||typeof unsafeWindow<"u"&&a===unsafeWindow?true:a?.Math?.toString()==="[object Math]"},delete(a,t){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(a,t):delete a[t];},setTimeout(a,t=0){try{return ao(a,t)}catch{return globalThis.setTimeout(a,t)}},clearTimeout(a){try{a!=null&&ro(a);}catch{}finally{globalThis.clearTimeout(a);}},setInterval(a,t=0){try{return oo(a,t)}catch{return globalThis.setInterval(a,t)}},clearInterval(a){try{a!=null&&no(a);}catch{}finally{globalThis.clearInterval(a);}},isNodeList(a){return Array.isArray(a)||a instanceof NodeList}},fe={SymbolEvents:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))},io={Object:{defineProperty:Object.defineProperty}};class so{windowApi;constructor(t){this.windowApi=new qn(t);}on(t,e,n,r,o){function i(b,h,v){let E=b[h];return typeof E=="boolean"?(v.capture=E,typeof b[h+1]=="boolean"&&(v.once=b[h+1]),typeof b[h+2]=="boolean"&&(v.passive=b[h+2])):typeof E=="object"&&("capture"in E||"once"in E||"passive"in E||"isComposedPath"in E)&&(v.capture=E.capture,v.once=E.once,v.passive=E.passive,v.isComposedPath=E.isComposedPath),v}let s=this,l=arguments;if(typeof t=="string"&&(t=s.selectorAll(t)),t==null)return;let c=[];t instanceof NodeList||Array.isArray(t)?(t=t,c=[...t]):c.push(t);let f=[];Array.isArray(e)?f=f.concat(e.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof e=="string"&&(f=f.concat(e.split(" ").filter(b=>b!=="")));let d=[];Array.isArray(n)?d=d.concat(n.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof n=="string"&&d.push(n);let u=r,g={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(u=n,g=i(l,3,g)):g=i(l,4,g);function w(){g.once&&s.off(t,e,n,r,o);}c.forEach(b=>{function h(v){if(d.length){let E=g.isComposedPath?v.composedPath()[0]:v.target,T=b;if(O.isWin(T)&&T===s.windowApi.document&&(T=s.windowApi.document.documentElement),d.find(C=>{if(s.matches(E,C))return  true;let I=s.closest(E,C);return I&&T?.contains(I)?(E=I,true):false})){try{io.Object.defineProperty(v,"target",{get(){return E}});}catch{}u.call(E,v,E),w();}}else u.call(b,v),w();}f.forEach(v=>{b.addEventListener(v,h,g);let E=Reflect.get(b,fe.SymbolEvents)||{};E[v]=E[v]||[],E[v].push({selector:d,option:g,callback:h,originCallBack:u}),Reflect.set(b,fe.SymbolEvents,E);});});}off(t,e,n,r,o,i){function s(h,v,E){let T=h[v];return typeof T=="boolean"?E.capture=T:typeof T=="object"&&"capture"in T&&(E.capture=T.capture),E}let l=this,c=arguments;if(typeof t=="string"&&(t=l.selectorAll(t)),t==null)return;let f=[];t instanceof NodeList||Array.isArray(t)?(t=t,f=[...t]):f.push(t);let d=[];Array.isArray(e)?d=d.concat(e.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof e=="string"&&(d=d.concat(e.split(" ").filter(h=>h!=="")));let u=[];Array.isArray(n)?u=u.concat(n.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof n=="string"&&u.push(n);let g=r,w={capture:false};typeof n=="function"?(g=n,w=s(c,3,w)):w=s(c,4,w);let b=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(b=true),f.forEach(h=>{let v=Reflect.get(h,fe.SymbolEvents)||{};d.forEach(E=>{let T=v[E]||[];typeof i=="function"&&(T=T.filter(i));for(let S=0;S<T.length;S++){let C=T[S],I=true;I&&g&&C.originCallBack!==g&&(I=false),I&&u.length&&Array.isArray(C.selector)&&JSON.stringify(C.selector)!==JSON.stringify(u)&&(I=false),I&&w.capture!==C.option.capture&&(I=false),(I||b)&&(h.removeEventListener(E,C.callback,C.option),T.splice(S--,1));}T.length===0&&O.delete(v,e);}),Reflect.set(h,fe.SymbolEvents,v);});}offAll(t,e){if(typeof t=="string"&&(t=this.selectorAll(t)),t==null)return;let r=[];t instanceof NodeList||Array.isArray(t)?r=[...t]:r.push(t);let o=[];Array.isArray(e)?o=o.concat(e):typeof e=="string"&&(o=o.concat(e.split(" "))),r.forEach(i=>{Object.getOwnPropertySymbols(i).forEach(s=>{if(!s.toString().startsWith("Symbol(events_"))return;let l=i[s]||{};(o.length?o:Object.keys(l)).forEach(f=>{let d=l[f];if(!d)return;for(const g of d)i.removeEventListener(f,g.callback,{capture:g.option.capture});let u=Reflect.get(i,s);O.delete(u,f);});});});}ready(t){if(typeof t!="function")return;let e=this;function n(){try{return e.windowApi.document.readyState==="complete"||e.windowApi.document.readyState!=="loading"&&!e.windowApi.document.documentElement.doScroll}catch{return  false}}function r(){s(),t();}let o=[{target:e.windowApi.document,eventType:"DOMContentLoaded",callback:r},{target:e.windowApi.window,eventType:"load",callback:r}];function i(){for(let l=0;l<o.length;l++){let c=o[l];c.target.addEventListener(c.eventType,c.callback);}}function s(){for(let l=0;l<o.length;l++){let c=o[l];c.target.removeEventListener(c.eventType,c.callback);}}n()?O.setTimeout(t):i();}trigger(t,e,n,r=true){if(typeof t=="string"&&(t=this.selectorAll(t)),t==null)return;let i=[];t instanceof NodeList||Array.isArray(t)?(t=t,i=[...t]):i=[t];let s=[];Array.isArray(e)?s=e:typeof e=="string"&&(s=e.split(" ")),i.forEach(l=>{let c=l[fe.SymbolEvents]||{};s.forEach(f=>{let d=null;n&&n instanceof Event?d=n:(d=new Event(f),n&&Object.keys(n).forEach(u=>{d[u]=n[u];})),r==false&&f in c?c[f].forEach(u=>{u.callback(d);}):l.dispatchEvent(d);});});}click(t,e,n,r){let o=this;if(typeof t=="string"&&(t=o.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(i=>{o.click(i,e,n,r);});return}e==null?o.trigger(t,"click",n,r):o.on(t,"click",null,e);}}blur(t,e,n,r){let o=this;if(typeof t=="string"&&(t=o.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(i=>{o.focus(i,e,n,r);});return}e===null?o.trigger(t,"blur",n,r):o.on(t,"blur",null,e);}}focus(t,e,n,r){let o=this;if(typeof t=="string"&&(t=o.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(i=>{o.focus(i,e,n,r);});return}e==null?o.trigger(t,"focus",n,r):o.on(t,"focus",null,e);}}hover(t,e,n){let r=this;if(typeof t=="string"&&(t=r.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(o=>{r.hover(o,e,n);});return}r.on(t,"mouseenter",null,e,n),r.on(t,"mouseleave",null,e,n);}}keyup(t,e,n){let r=this;if(t!=null){if(typeof t=="string"&&(t=r.selectorAll(t)),O.isNodeList(t)){t.forEach(o=>{r.keyup(o,e,n);});return}r.on(t,"keyup",null,e,n);}}keydown(t,e,n){let r=this;if(t!=null){if(typeof t=="string"&&(t=r.selectorAll(t)),O.isNodeList(t)){t.forEach(o=>{r.keydown(o,e,n);});return}r.on(t,"keydown",null,e,n);}}keypress(t,e,n){let r=this;if(t!=null){if(typeof t=="string"&&(t=r.selectorAll(t)),O.isNodeList(t)){t.forEach(o=>{r.keypress(o,e,n);});return}r.on(t,"keypress",null,e,n);}}listenKeyboard(t,e="keypress",n,r){let o=this;typeof t=="string"&&(t=o.selectorAll(t));let i=function(s){let l=s.key||s.code,c=s.charCode||s.keyCode||s.which,f=[];s.ctrlKey&&f.push("ctrl"),s.altKey&&f.push("alt"),s.metaKey&&f.push("meta"),s.shiftKey&&f.push("shift"),typeof n=="function"&&n(l,c,f,s);};return o.on(t,e,i,r),{removeListen:()=>{o.off(t,e,i,r);}}}selector(t,e){return this.selectorAll(t,e)[0]}selectorAll(t,e){if(e=e||this.windowApi.document,t=t.trim(),t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),Array.from(e.querySelectorAll(t)).filter(r=>r?.innerHTML?.trim()==="");if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];return t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(i=>(i?.textContent||i?.innerText)?.includes(o))}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(o,s);return t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(e.querySelectorAll(t))}matches(t,e){if(e=e.trim(),t==null)return  false;if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),t.matches(e)&&t?.innerHTML?.trim()==="";if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let r=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=t?.textContent||t?.innerText;return typeof o!="string"&&(o=""),t.matches(e)&&o?.includes(r)}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);let s=new RegExp(r,i);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=t?.textContent||t?.innerText;return typeof l!="string"&&(l=""),t.matches(e)&&!!l?.match(s)}else return t.matches(e)}closest(t,e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi)){e=e.replace(/:empty$/gi,"");let n=t?.closest(e);return n&&n?.innerHTML?.trim()===""?n:null}else if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let r=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=t?.closest(e);if(o){let i=t?.textContent||t?.innerText;if(typeof i=="string"&&i.includes(r))return o}return null}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);let s=new RegExp(r,i);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=t?.closest(e);if(l){let c=t?.textContent||t?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return t?.closest(e)}}let lo=class Xn extends so{constructor(t){super(t);}version="2025.6.26";attr(t,e,n){let r=this;if(typeof t=="string"&&(t=r.selectorAll(t)),t!=null){if(O.isNodeList(t)){if(n==null)return r.attr(t[0],e,n);t.forEach(o=>{r.attr(o,e,n);});return}if(n==null)return t.getAttribute(e);t.setAttribute(e,n);}}createElement(t,e,n){let r=this,o=r.windowApi.document.createElement(t);return typeof e=="string"?(r.html(o,e),o):(e==null&&(e={}),n==null&&(n={}),Object.keys(e).forEach(i=>{let s=e[i];if(i==="innerHTML"){r.html(o,s);return}o[i]=s;}),Object.keys(n).forEach(i=>{let s=n[i];typeof s=="object"?s=JSON.stringify(s):typeof s=="function"&&(s=s.toString()),o.setAttribute(i,s);}),o)}css(t,e,n){let r=this;function o(s,l){let c=["width","height","top","left","right","bottom","font-size"];return typeof l=="number"&&(l=l.toString()),typeof l=="string"&&c.includes(s)&&l.match(/[0-9]$/gi)&&(l=l+"px"),l}if(typeof t=="string"&&(t=r.selectorAll(t)),t==null)return;if(O.isNodeList(t)){if(typeof e=="string"){if(n==null)return r.css(t[0],e);t.forEach(s=>{r.css(s,e);});return}else if(typeof e=="object"){t.forEach(s=>{r.css(s,e);});return}return}let i=(s,l)=>{typeof l=="string"&&l.trim().endsWith("!important")?(l=l.trim().replace(/!important$/gi,"").trim(),t.style.setProperty(s,l,"important")):(l=o(s,l),t.style.setProperty(s,l));};if(typeof e=="string"){if(n==null)return r.windowApi.globalThis.getComputedStyle(t).getPropertyValue(e);i(e,n);}else if(typeof e=="object")for(let s in e){let l=e[s];i(s,l);}else throw new TypeError("property must be string or object")}text(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){if(e==null)return n.text(t[0]);t.forEach(r=>{n.text(r,e);});return}if(e==null)return t.textContent||t.innerText;e instanceof Node&&(e=e.textContent||e.innerText),"textContent"in t?t.textContent=e:"innerText"in t&&(t.innerText=e);}}html(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){if(e==null)return n.html(t[0]);t.forEach(r=>{n.html(r,e);});return}if(e==null)return t.innerHTML;e instanceof Element&&(e=e.innerHTML),"innerHTML"in t&&O.setSafeHTML(t,e);}}getTransform(t,e=false){let n=this,r=0,o=0;if(!(e||!e&&O.isShow(t))){let{recovery:s}=O.showElement(t),l=n.getTransform(t,true);return s(),l}let i=n.windowApi.globalThis.getComputedStyle(t).transform;if(i!=null&&i!=="none"&&i!==""){let s=i.match(/\((.+)\)/)?.[1].split(",");s?(r=Math.abs(parseInt(s[4])),o=Math.abs(parseInt(s[5]))):(r=0,o=0);}return {transformLeft:r,transformTop:o}}val(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){if(e==null)return n.val(t[0]);t.forEach(r=>{n.val(r,e);});return}if(e==null)return t.localName==="input"&&(t.type==="checkbox"||t.type==="radio")?t.checked:t.value;t.localName==="input"&&(t.type==="checkbox"||t.type==="radio")?t.checked=!!e:t.value=e;}}prop(t,e,n){let r=this;if(typeof t=="string"&&(t=r.selectorAll(t)),t!=null){if(O.isNodeList(t)){if(n==null)return r.prop(t[0],e);t.forEach(o=>{r.prop(o,e,n);});return}if(n==null)return Reflect.get(t,e);t instanceof Element&&e==="innerHTML"?r.html(t,n):Reflect.set(t,e,n);}}removeAttr(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.removeAttr(r,e);});return}t.removeAttribute(e);}}removeClass(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.removeClass(r,e);});return}e==null?t.className="":(Array.isArray(e)||(e=e.split(" ")),e.forEach(r=>{t.classList.remove(r);}));}}removeProp(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.removeProp(r,e);});return}O.delete(t,e);}}replaceWith(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.replaceWith(r,e);});return}typeof e=="string"&&(e=n.parseHTML(e,false,false)),t.parentElement.replaceChild(e,t);}}addClass(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.addClass(r,e);});return}Array.isArray(e)||(e=e.split(" ")),e.forEach(r=>{r.trim()!=""&&t.classList.add(r);});}}hasClass(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t==null)return  false;if(O.isNodeList(t)){let r=true;for(let o=0;o<t.length;o++){const i=t[o];r=r&&n.hasClass(i,e);}return r}if(!t?.classList)return  false;Array.isArray(e)||(e=e.split(" "));for(let r=0;r<e.length;r++){const o=e[r].trim();if(!t.classList.contains(o))return  false}return  true}append(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t==null)return;if(O.isNodeList(t)){t.forEach(o=>{n.append(o,e);});return}function r(o,i){typeof e=="string"?o.insertAdjacentHTML("beforeend",O.getSafeHTML(i)):o.appendChild(i);}if(Array.isArray(e)||e instanceof NodeList){let o=n.windowApi.document.createDocumentFragment();e.forEach(i=>{typeof i=="string"&&(i=n.parseHTML(i,true,false)),o.appendChild(i);}),t.appendChild(o);}else r(t,e);}prepend(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.prepend(r,e);});return}typeof e=="string"?t.insertAdjacentHTML("afterbegin",O.getSafeHTML(e)):t.firstChild==null?t.prepend(e):t.insertBefore(e,t.firstChild);}}after(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.after(r,e);});return}if(typeof e=="string")t.insertAdjacentHTML("afterend",O.getSafeHTML(e));else {let r=t.parentElement,o=t.nextSibling;!r||o?t.after(e):t.parentElement.insertBefore(e,t.nextSibling);}}}before(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.before(r,e);});return}if(typeof e=="string")t.insertAdjacentHTML("beforebegin",O.getSafeHTML(e));else {let r=t.parentElement;r?r.insertBefore(e,t):t.before(e);}}}remove(t){let e=this;if(typeof t=="string"&&(t=e.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(n=>{e.remove(n);});return}t.remove();}}empty(t){let e=this;if(typeof t=="string"&&(t=e.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(n=>{e.empty(n);});return}e.html(t,"");}}offset(t){let e=this;if(typeof t=="string"&&(t=e.selector(t)),t==null)return;let n=t.getBoundingClientRect();return {top:n.top+e.windowApi.globalThis.scrollY,left:n.left+e.windowApi.globalThis.scrollX}}width(t,e=false){let n=this;if(typeof t=="string"&&(t=n.selector(t)),t!=null){if(O.isWin(t))return n.windowApi.window.document.documentElement.clientWidth;if(t.nodeType===9)return t=t,Math.max(t.body.scrollWidth,t.documentElement.scrollWidth,t.body.offsetWidth,t.documentElement.offsetWidth,t.documentElement.clientWidth);if(e||!e&&O.isShow(t)){if(t=t,parseFloat(O.getStyleValue(t,"width").toString())>0)return parseFloat(O.getStyleValue(t,"width").toString());if(t.offsetWidth>0){let r=O.getStyleValue(t,"borderLeftWidth"),o=O.getStyleValue(t,"borderRightWidth"),i=O.getStyleValue(t,"paddingLeft"),s=O.getStyleValue(t,"paddingRight"),l=parseFloat(t.offsetWidth.toString())-parseFloat(r.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString());return parseFloat(l.toString())}return 0}else {t=t;let{recovery:r}=O.showElement(t),o=n.width(t,true);return r(),o}}}height(t,e=false){let n=this;if(O.isWin(t))return n.windowApi.window.document.documentElement.clientHeight;if(typeof t=="string"&&(t=n.selector(t)),t!=null){if(t.nodeType===9)return t=t,Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.documentElement.clientHeight);if(e||!e&&O.isShow(t)){if(t=t,parseFloat(O.getStyleValue(t,"height").toString())>0)return parseFloat(O.getStyleValue(t,"height").toString());if(t.offsetHeight>0){let r=O.getStyleValue(t,"borderTopWidth"),o=O.getStyleValue(t,"borderBottomWidth"),i=O.getStyleValue(t,"paddingTop"),s=O.getStyleValue(t,"paddingBottom"),l=parseFloat(t.offsetHeight.toString())-parseFloat(r.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString());return parseFloat(l.toString())}return 0}else {t=t;let{recovery:r}=O.showElement(t),o=n.height(t,true);return r(),o}}}outerWidth(t,e=false){let n=this;if(O.isWin(t))return n.windowApi.window.innerWidth;if(typeof t=="string"&&(t=n.selector(t)),t!=null)if(t=t,e||!e&&O.isShow(t)){let r=n.windowApi.globalThis.getComputedStyle(t,null),o=O.getStyleValue(r,"marginLeft"),i=O.getStyleValue(r,"marginRight");return t.offsetWidth+o+i}else {let{recovery:r}=O.showElement(t),o=n.outerWidth(t,true);return r(),o}}outerHeight(t,e=false){let n=this;if(O.isWin(t))return n.windowApi.window.innerHeight;if(typeof t=="string"&&(t=n.selector(t)),t!=null)if(t=t,e||!e&&O.isShow(t)){let r=n.windowApi.globalThis.getComputedStyle(t,null),o=O.getStyleValue(r,"marginTop"),i=O.getStyleValue(r,"marginBottom");return t.offsetHeight+o+i}else {let{recovery:r}=O.showElement(t),o=n.outerHeight(t,true);return r(),o}}animate(t,e,n=1e3,r=null){let o=this;if(typeof t=="string"&&(t=o.selectorAll(t)),t==null)return;if(O.isNodeList(t)){t.forEach(f=>{o.animate(f,e,n,r);});return}if(typeof n!="number"||n<=0)throw new TypeError("duration must be a positive number");if(typeof r!="function"&&r!==void 0)throw new TypeError("callback must be a function or null");if(typeof e!="object"||e===void 0)throw new TypeError("styles must be an object");if(Object.keys(e).length===0)throw new Error("styles must contain at least one property");let i=performance.now(),s={},l={};for(let f in e)s[f]=t.style[f]||o.windowApi.globalThis.getComputedStyle(t)[f],l[f]=e[f];let c=O.setInterval(function(){let d=(performance.now()-i)/n;d>1&&(d=1);for(let u in e)t.style[u]=s[u]+(l[u]-s[u])*d+"px";d===1&&(O.clearInterval(c),r&&r());},10);}wrap(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t==null)return;if(O.isNodeList(t)){t.forEach(s=>{n.wrap(s,e);});return}t=t;let r=n.windowApi.document.createElement("div");n.html(r,e);let o=r.firstChild;t.parentElement.insertBefore(o,t),o.appendChild(t);}prev(t){if(typeof t=="string"&&(t=this.selector(t)),t!=null)return t.previousElementSibling}next(t){if(typeof t=="string"&&(t=this.selector(t)),t!=null)return t.nextElementSibling}noConflict(){let t=this;return t.windowApi.window.DOMUtils&&O.delete(window,"DOMUtils"),t.windowApi.window.DOMUtils=this,this}siblings(t){if(typeof t=="string"&&(t=this.selector(t)),t!=null)return Array.from(t.parentElement.children).filter(n=>n!==t)}parent(t){let e=this;if(typeof t=="string"&&(t=e.selector(t)),t!=null)if(O.isNodeList(t)){let n=[];return t.forEach(r=>{n.push(e.parent(r));}),n}else return t.parentElement}parseHTML(t,e=false,n=false){let r=this;t=t.trim();function o(){let s=new DOMParser;return n?s.parseFromString(t,"text/html"):s.parseFromString(t,"text/html").body.firstChild}function i(){let s=r.windowApi.document.createElement("div");return r.html(s,t),n?s:s.firstChild}return e?o():i()}serialize(t){const e=t.elements;let n=[];for(let r=0;r<e.length;r++){const o=e[r];if(o.name&&!o.disabled&&(o.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(o.type)))if(o.type==="select-multiple")for(let i=0;i<o.options.length;i++)o.options[i].selected&&n.push({name:o.name,value:o.options[i].value});else n.push({name:o.name,value:o.value});}return n.map(r=>`${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&")}show(t,e=true){let n=this;if(t!=null)if(typeof t=="string"&&(t=n.selectorAll(t)),t instanceof NodeList||t instanceof Array){t=t;for(const r of t)n.show(r,e);}else t=t,t.style.display="",e&&(O.isShow(t)||t.style.setProperty("display","unset","important"));}hide(t,e=true){let n=this;if(t!=null)if(typeof t=="string"&&(t=n.selectorAll(t)),t instanceof NodeList||t instanceof Array){t=t;for(const r of t)n.hide(r,e);}else t=t,t.style.display="none",e&&O.isShow(t)&&t.style.setProperty("display","none","important");}fadeIn(t,e=400,n){if(t==null)return;let r=this;if(typeof t=="string"&&(t=r.selectorAll(t)),O.isNodeList(t)){t.forEach(l=>{r.fadeIn(l,e,n);});return}t.style.opacity="0",t.style.display="";let o=null,i=null;function s(l){o||(o=l);let c=l-o;t=t,t.style.opacity=Math.min(c/e,1).toString(),c<e?r.windowApi.window.requestAnimationFrame(s):(n&&typeof n=="function"&&n(),r.windowApi.window.cancelAnimationFrame(i));}i=r.windowApi.window.requestAnimationFrame(s);}fadeOut(t,e=400,n){let r=this;if(t==null)return;if(typeof t=="string"&&(t=r.selectorAll(t)),O.isNodeList(t)){t.forEach(l=>{r.fadeOut(l,e,n);});return}t.style.opacity="1";let o=null,i=null;function s(l){o||(o=l);let c=l-o;t=t,t.style.opacity=Math.max(1-c/e,0).toString(),c<e?r.windowApi.window.requestAnimationFrame(s):(t.style.display="none",typeof n=="function"&&n(),r.windowApi.window.cancelAnimationFrame(i));}i=r.windowApi.window.requestAnimationFrame(s);}toggle(t,e){let n=this;if(typeof t=="string"&&(t=n.selectorAll(t)),t!=null){if(O.isNodeList(t)){t.forEach(r=>{n.toggle(r);});return}n.windowApi.globalThis.getComputedStyle(t).getPropertyValue("display")==="none"?n.show(t,e):n.hide(t,e);}}createDOMUtils(t){return new Xn(t)}getTextBoundingRect(t,e,n){let r=this;if(!t||!("value"in t))return t;if(e==null&&(e=t.selectionStart||0),n==null&&(n=t.selectionEnd||0),typeof e=="string"&&(e=parseFloat(e)),(typeof e!="number"||isNaN(e))&&(e=0),e<0?e=0:e=Math.min(t.value.length,e),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<e)&&(n=e),n<0?n=0:n=Math.min(t.value.length,n),typeof t.createTextRange=="function"){let S=t.createTextRange();return S.collapse(true),S.moveStart("character",e),S.moveEnd("character",n-e),S.getBoundingClientRect()}let o=E(),i=o.top,s=o.left,l=T("width",true),c=T("height",true),f="white-space:pre;padding:0;margin:0;",d=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];i+=T("padding-top",true),i+=T("border-top-width",true),s+=T("padding-left",true),s+=T("border-left-width",true),s+=1;for(let S=0;S<d.length;S++){let C=d[S];f+=C+":"+T(C)+";";}let u=t.value||"G",g=u.length,w=r.windowApi.document.createElement("div");e>0&&v(0,e);var b=v(e,n);g>n&&v(n,g),w.style.cssText=f,w.style.position="absolute",w.style.top=i+"px",w.style.left=s+"px",w.style.width=l+"px",w.style.height=c+"px",r.windowApi.document.body.appendChild(w);var h=b.getBoundingClientRect();return w?.parentNode?.removeChild(w),h;function v(S,C){var I=r.windowApi.document.createElement("span");return I.style.cssText=f,I.textContent=u.substring(S,C),w.appendChild(I),I}function E(){let S=r.windowApi.document.body,C=r.windowApi.document.defaultView,I=r.windowApi.document.documentElement,q=r.windowApi.document.createElement("div");q.style.paddingLeft=q.style.width="1px",S.appendChild(q);var j=q.offsetWidth==2;S.removeChild(q);let J=t.getBoundingClientRect();var Z=I.clientTop||S.clientTop||0,lt=I.clientLeft||S.clientLeft||0,k=C.pageYOffset||j&&I.scrollTop||S.scrollTop,x=C.pageXOffset||j&&I.scrollLeft||S.scrollLeft;return {top:J.top+k-Z,left:J.left+x-lt}}function T(S,C){var I=r.windowApi.document.defaultView.getComputedStyle(t,null).getPropertyValue(S);return C?parseFloat(I):I}}},Qn=new lo;class co{isHex(t){return !(typeof t!="string"||!t.match(/^(\#|)[0-9a-fA-F]{6}$/))}hexToRgba(t,e){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);return t&&t.replace(/\s+/g,"").length===7?"rgba("+parseInt("0x"+t.slice(1,3))+","+parseInt("0x"+t.slice(3,5))+","+parseInt("0x"+t.slice(5,7))+","+e+")":""}hexToRgb(t){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);t=t.replace("#","");let e=t.match(/../g);for(let n=0;n<3;n++)e[n]=parseInt(e[n],16);return e}rgbToHex(t,e,n){let r=/^\d{1,3}$/;if(!r.test(t.toString())||!r.test(e.toString())||!r.test(n.toString()))throw new TypeError("输入错误的rgb颜色值");let o=[t.toString(16),e.toString(16),n.toString(16)];for(let i=0;i<3;i++)o[i].length==1&&(o[i]="0"+o[i]);return "#"+o.join("")}getDarkColor(t,e){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);let n=this.hexToRgb(t);for(let r=0;r<3;r++)n[r]=Math.floor(n[r]*(1-e));return this.rgbToHex(n[0],n[1],n[2])}getLightColor(t,e){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);let n=this.hexToRgb(t);for(let r=0;r<3;r++)n[r]=Math.floor((255-n[r])*e+n[r]);return this.rgbToHex(n[0],n[1],n[2])}}class fo{#t=[];#e={};#r={};constructor(){let t=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364"),e=0;this.#t=t.match(/..../g);for(let n=129;n<=254;n++)for(let r=64;r<=254;r++)this.#e[this.#t[e++]]=("%"+n.toString(16)+"%"+r.toString(16)).toUpperCase();for(let n in this.#e)this.#r[this.#e[n]]=n;}handleText(t){return t=t.replace(/#(\d+)\$/g,function(e,n){return Array(+n+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(e,n,r){return r.replace(/../g,function(o){return o!="##"?n+o:o})}),t}isAscii(t){return t<=127&&t>=0}encode(t){let e=this;return [...t].reduce((r,o,i)=>r+n(o),"");function n(r){let o="";for(let i=0;i<r.length;i++){const s=r.codePointAt(i),l=String.fromCodePoint(s);let c=s.toString(16);if(c.length!=4&&(c=("000"+c).match(/....$/)?.[0]),i+=l.length-1,e.isAscii(s)){o+=encodeURIComponent(l);continue}if(e.#e[c]){o+=e.#e[c];continue}o+=n(`&#${s};`);}return o}}decode(t){var e=/%[0-9A-F]{2}%[0-9A-F]{2}/,n=/%[0-9A-F]{2}/,r=true;let o=this;for(;r;){let i=t.match(e),s=t.match(n);r=!!s,i&&i in o.#r?t=t.replace(i,String.fromCharCode("0x"+o.#r[i])):t=t.replace(s,decodeURIComponent(s));}return t}}const Ee=function(...a){let t=null,e=null,n=s=>{},r={log:true};const o={config(s){return r=Object.assign(r,s),o},error(s){return n=s,o},run(s,l){t=s,e=l||this;let c=i(t,n,e);return c!==void 0?c:o}};function i(s,l,c){let f;try{typeof s=="string"?f=new Function(s).apply(c,a):f=s.apply(c,a);}catch(d){r.log&&(s=s,console.log(`%c ${s?.name?s?.name:s+"出现错误"} `,"color: #f20000"),console.log(`%c 错误原因：${d}`,"color: #f20000"),console.trace(s)),l&&(typeof l=="string"?f=new Function(l).apply(c,[...a,d]):f=l.apply(c,[...a,d]));}return f}return o};let po=class{assign(t={},e={},n=false){let r=this;if(Array.isArray(e)&&!e.filter(i=>typeof i=="object").length)return e;if(e==null)return t;if(t==null&&(t={}),n)for(const o in e){let s=t[o],l=e[o];if(typeof l=="object"&&l!=null&&o in t&&!r.isDOM(l)){t[o]=r.assign(s,l,n);continue}t[o]=l;}else for(const o in t)if(o in e){let i=t[o],s=e[o];if(typeof s=="object"&&s!=null&&!r.isDOM(s)&&Object.keys(s).length){t[o]=r.assign(i,s,n);continue}t[o]=s;}return t}isNull(...t){let e=true,n=[...t];for(const r of n){let o=false;if(r==null)o=true;else switch(typeof r){case "object":typeof r[Symbol.iterator]=="function"?o=r.length===0:o=Object.keys(r).length===0;break;case "number":o=r===0;break;case "string":o=r.trim()===""||r==="null"||r==="undefined";break;case "boolean":o=!r;break;case "function":o=!!r.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}e=e&&o;}return e}isDOM(t){return t instanceof Node}isNotNull(...t){return !this.isNull.apply(this,t)}deepClone(t){let e=this;if(t===void 0)return;if(t===null)return null;let n=t instanceof Array?[]:{};for(const[r,o]of Object.entries(t))n[r]=typeof o=="object"?e.deepClone(o):o;return n}coverObjectFunctionThis(t,e){if(typeof t!="object"||t===null)throw new Error("target must be object");e=e||t,Object.keys(t).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(e));});}toJSON(t,e){let n={};return typeof t=="object"?t:(Ee().config({log:false}).error(r=>{Ee().error(()=>{try{n=new Function("return "+t)();}catch(o){typeof e=="function"&&e(o);}}).run(()=>{t&&/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?n=new Function("return "+t)():typeof e=="function"&&e(new Error("target is not a JSON"));});}).run(()=>{t=t.trim(),n=JSON.parse(t);}),n)}},et=new po;class uo{windowApi={window,document};constructor(t){t&&(this.windowApi=Object.assign({},t));}getCookiesList(){return this.windowApi.document.cookie.trim()===""?[]:this.windowApi.document.cookie.split(";")}get(t){if(typeof t!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");let e=this.getCookiesList(),n;for(const r of e){let i=r.trim().split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join(""));if(s===t){n={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:t,path:"/",sameSite:"unspecified",secure:true,session:false,value:l};break}}return n}list(t,e){if(t==null)throw new Error("Utils.GMCookie.list 参数不能为空");let n=[];try{let r={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};r=et.assign(r,t),this.getCookiesList().forEach(i=>{i=i.trim();let s=i.split("="),l=s[0];s.splice(0,1);let c=decodeURIComponent(s.join("")),f=r.name instanceof RegExp?r.name:new RegExp("^"+r.name,"g");l.match(f)&&n.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:l,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:c});}),typeof e=="function"&&e(n);}catch(r){typeof e=="function"&&e(n,r);}}getList(t){if(t==null)throw new Error("Utils.GMCookie.list 参数不能为空");let e=[],n={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return n=et.assign(n,t),this.getCookiesList().forEach(o=>{o=o.trim();let i=o.split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join("")),c=n.name instanceof RegExp?n.name:new RegExp("^"+n.name,"g");s.match(c)&&e.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:s,path:"/",sameSite:"unspecified",secure:true,session:false,value:l});}),e}set(t,e){let n;try{let r={url:this.windowApi.window.location.href,name:"",value:"",domain:"",path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};r=et.assign(r,t);let o=r.expirationDate?r.expirationDate:Math.floor(Date.now())+60*60*24*30,i=r.name+"="+decodeURIComponent(r.value)+";expires="+new Date(o).toGMTString()+"; path=/";et.isNull(r.domain)&&(i+="; domain="+r.domain),this.windowApi.document.cookie=i;}catch(r){n=r;}finally{typeof e=="function"&&e(n);}}delete(t,e){let n;try{let r={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:""};r=et.assign(r,t);let o=`${r.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${r.path}`;et.isNull(r.firstPartyDomain)&&(o+=`; domain=${r.firstPartyDomain};`),this.windowApi.document.cookie=o;}catch(r){n=r;}finally{typeof e=="function"&&e(n);}}parseCookie(t){if(t.trim()==="")return [];let e=t.split(";"),n=[];for(const r of e){let i=r.trim().split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join(""));n.push({key:s,value:l});}return n}}// @license      GNU LGPL-3.0
	const bo=function(){const a="1.4.6",t={hookFns:[],filters:[]},e=window.unsafeWindow||document.defaultView||window;let n=e.__ajaxHooker;const r=e.Response.prototype,o=["response","responseText","responseXML"],i=["arrayBuffer","blob","formData","json","text"],s=["method","headers","body","mode","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","priority"],l=["readystatechange","load","loadend"],c={}.toString.call.bind({}.toString),f=Object.getOwnPropertyDescriptor.bind(Object),d=()=>{},u=x=>console.error(x);function g(x){return x&&["object","function"].includes(typeof x)&&typeof x.then=="function"}function w(x,...m){try{const y=x(...m);return g(y)?y.then(null,u):y}catch(y){console.error(y);}}function b(x,m,y,M){Object.defineProperty(x,m,{configurable:true,enumerable:true,get:y,set:M});}function h(x,m,y=x[m]){b(x,m,()=>y,d);}function v(x,m,y=x[m]){Object.defineProperty(x,m,{configurable:true,enumerable:true,writable:true,value:y});}function E(x){const m={};switch(c(x)){case "[object String]":for(const y of x.trim().split(/[\r\n]+/)){const[M,_]=y.split(new RegExp("(?<=^[^:]+)\\s*:\\s*"));if(!_)continue;const P=M.toLowerCase();m[P]=P in m?`${m[P]}, ${_}`:_;}break;case "[object Headers]":for(const[y,M]of x)m[y]=M;break;case "[object Object]":return {...x}}return m}function T(){this.ajaxHooker_isStopped=true;}class S{then(m){return m&&m(),new S}}class C{constructor(m){this.request=m,this.requestClone={...this.request};}shouldFilter(m){const{type:y,url:M,method:_,async:P}=this.request;return m.length&&!m.find(H=>{switch(true){case(H.type&&H.type!==y):case(c(H.url)==="[object String]"&&!M.includes(H.url)):case(c(H.url)==="[object RegExp]"&&!H.url.test(M)):case(H.method&&H.method.toUpperCase()!==_.toUpperCase()):case("async"in H&&H.async!==P):return  false}return  true})}waitForRequestKeys(){const m=["url","method","abort","headers","data"];if(!this.request.async)return e.__ajaxHooker.hookInsts.forEach(({hookFns:M,filters:_})=>{this.shouldFilter(_)||(M.forEach(P=>{c(P)==="[object Function]"&&w(P,this.request);}),m.forEach(P=>{g(this.request[P])&&(this.request[P]=this.requestClone[P]);}));}),new S;const y=[];return e.__ajaxHooker.hookInsts.forEach(({hookFns:M,filters:_})=>{this.shouldFilter(_)||y.push(Promise.all(M.map(P=>w(P,this.request))).then(()=>Promise.all(m.map(P=>Promise.resolve(this.request[P]).then(H=>this.request[P]=H,()=>this.request[P]=this.requestClone[P])))));}),Promise.all(y)}waitForResponseKeys(m){const y=this.request.type==="xhr"?o:i;return this.request.async?Promise.resolve(w(this.request.response,m)).then(()=>Promise.all(y.map(M=>{const _=f(m,M);if(_&&"value"in _)return Promise.resolve(_.value).then(P=>m[M]=P,()=>delete m[M]);delete m[M];}))):(c(this.request.response)==="[object Function]"&&(w(this.request.response,m),y.forEach(M=>{("get"in f(m,M)||g(m[M]))&&delete m[M];})),new S)}}const I={get(x,m){const y=f(x,m);if(y&&!y.configurable&&!y.writable&&!y.get)return x[m];const M=x.__ajaxHooker;if(M&&M.proxyProps){if(m in M.proxyProps){const _=M.proxyProps[m];return "get"in _?_.get():typeof _.value=="function"?_.value.bind(M):_.value}if(typeof x[m]=="function")return x[m].bind(x)}return x[m]},set(x,m,y){const M=f(x,m);if(M&&!M.configurable&&!M.writable&&!M.set)return  true;const _=x.__ajaxHooker;if(_&&_.proxyProps&&m in _.proxyProps){const P=_.proxyProps[m];P.set?P.set(y):P.value=y;}else x[m]=y;return  true}};class q{constructor(m){const y=this;Object.assign(y,{originalXhr:m,proxyXhr:new Proxy(m,I),resThenable:new S,proxyProps:{},proxyEvents:{}}),m.addEventListener("readystatechange",M=>{if(y.proxyXhr.readyState===4&&y.request&&typeof y.request.response=="function"){const _={finalUrl:y.proxyXhr.responseURL,status:y.proxyXhr.status,responseHeaders:E(y.proxyXhr.getAllResponseHeaders())},P={};for(const H of o){try{P[H]=y.originalXhr[H];}catch{}b(_,H,()=>_[H]=P[H],pt=>{delete _[H],_[H]=pt;});}y.resThenable=new C(y.request).waitForResponseKeys(_).then(()=>{for(const H of o)y.proxyProps[H]={get:()=>(H in _||(_[H]=P[H]),_[H])};});}y.dispatchEvent(M);}),m.addEventListener("load",M=>y.dispatchEvent(M)),m.addEventListener("loadend",M=>y.dispatchEvent(M));for(const M of l){const _="on"+M;y.proxyProps[_]={get:()=>y.proxyEvents[_]||null,set:P=>y.addEvent(_,P)};}for(const M of ["setRequestHeader","addEventListener","removeEventListener","open","send"])y.proxyProps[M]={value:y[M]};}toJSON(){}addEvent(m,y){if(m.startsWith("on"))this.proxyEvents[m]=typeof y=="function"?y:null;else {if(typeof y=="object"&&y!==null&&(y=y.handleEvent),typeof y!="function")return;this.proxyEvents[m]=this.proxyEvents[m]||new Set,this.proxyEvents[m].add(y);}}removeEvent(m,y){m.startsWith("on")?this.proxyEvents[m]=null:(typeof y=="object"&&y!==null&&(y=y.handleEvent),this.proxyEvents[m]&&this.proxyEvents[m].delete(y));}dispatchEvent(m){if(m.stopImmediatePropagation=T,b(m,"target",()=>this.proxyXhr),b(m,"currentTarget",()=>this.proxyXhr),this.proxyEvents[m.type]&&this.proxyEvents[m.type].forEach(M=>{this.resThenable.then(()=>!m.ajaxHooker_isStopped&&M.call(this.proxyXhr,m));}),m.ajaxHooker_isStopped)return;const y=this.proxyEvents["on"+m.type];y&&this.resThenable.then(y.bind(this.proxyXhr,m));}setRequestHeader(m,y){if(this.originalXhr.setRequestHeader(m,y),!this.request)return;const M=this.request.headers;M[m]=m in M?`${M[m]}, ${y}`:y;}addEventListener(...m){l.includes(m[0])?this.addEvent(m[0],m[1]):this.originalXhr.addEventListener(...m);}removeEventListener(...m){l.includes(m[0])?this.removeEvent(m[0],m[1]):this.originalXhr.removeEventListener(...m);}open(m,y,M=true,..._){return this.request={type:"xhr",url:y.toString(),method:m.toUpperCase(),abort:false,headers:{},data:null,response:null,async:!!M},this.openArgs=_,this.resThenable=new S,["responseURL","readyState","status","statusText",...o].forEach(P=>{delete this.proxyProps[P];}),this.originalXhr.open(m,y,M,..._)}send(m){const y=this,M=y.originalXhr,_=y.request;if(!_)return M.send(m);_.data=m,new C(_).waitForRequestKeys().then(()=>{if(_.abort)typeof _.response=="function"&&(Object.assign(y.proxyProps,{responseURL:{value:_.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),l.forEach(P=>M.dispatchEvent(new Event(P))));else {M.open(_.method,_.url,_.async,...y.openArgs);for(const P in _.headers)M.setRequestHeader(P,_.headers[P]);M.send(_.data);}});}}function j(){const x=new n.realXHR;return "__ajaxHooker"in x&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),x.__ajaxHooker=new q(x),x.__ajaxHooker.proxyXhr}j.prototype=e.XMLHttpRequest.prototype,Object.keys(e.XMLHttpRequest).forEach(x=>j[x]=e.XMLHttpRequest[x]);function J(x,m={}){return x?new Promise(async(y,M)=>{const _={};if(c(x)==="[object Request]"){for(const pt of s)_[pt]=x[pt];x.body&&(_.body=await x.arrayBuffer()),x=x.url;}x=x.toString(),Object.assign(_,m),_.method=_.method||"GET",_.headers=_.headers||{};const P={type:"fetch",url:x,method:_.method.toUpperCase(),abort:false,headers:E(_.headers),data:_.body,response:null,async:true},H=new C(P);if(await H.waitForRequestKeys(),P.abort){if(typeof P.response=="function"){const pt={finalUrl:P.url,status:200,responseHeaders:{}};await H.waitForResponseKeys(pt);const yt=i.find(kt=>kt in pt);let K=pt[yt];yt==="json"&&typeof K=="object"&&(K=w(JSON.stringify.bind(JSON),K));const ct=new Response(K,{status:200,statusText:"OK"});b(ct,"type",()=>"basic"),b(ct,"url",()=>P.url),y(ct);}else M(new DOMException("aborted","AbortError"));return}_.method=P.method,_.headers=P.headers,_.body=P.data,n.realFetch.call(e,P.url,_).then(pt=>{if(typeof P.response=="function"){const yt={finalUrl:pt.url,status:pt.status,responseHeaders:E(pt.headers)};i.forEach(K=>pt[K]=function(){return K in yt?Promise.resolve(yt[K]):r[K].call(this).then(ct=>(yt[K]=ct,H.waitForResponseKeys(yt).then(()=>K in yt?yt[K]:ct)))});}y(pt);},M);}):n.realFetch.call(e,x,m)}function Z(){const x=Object.getOwnPropertyDescriptors(this),m=n.realFetchClone.call(this);return Object.defineProperties(m,x),m}n=e.__ajaxHooker=n||{version:a,fakeXHR:j,fakeFetch:J,fakeFetchClone:Z,realXHR:e.XMLHttpRequest,realFetch:e.fetch,realFetchClone:r.clone,hookInsts:new Set},n.version!==a&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),e.XMLHttpRequest=n.fakeXHR,e.fetch=n.fakeFetch,r.clone=n.fakeFetchClone,n.hookInsts.add(t);class lt extends Function{call(m,...y){return m&&m.__ajaxHooker&&m.__ajaxHooker.proxyXhr===m&&(m=m.__ajaxHooker.originalXhr),Reflect.apply(this,m,y)}apply(m,y){return m&&m.__ajaxHooker&&m.__ajaxHooker.proxyXhr===m&&(m=m.__ajaxHooker.originalXhr),Reflect.apply(this,m,y||[])}}function k(x){Object.setPrototypeOf(x.nativeXMLHttpRequestSetRequestHeader,lt.prototype),Object.setPrototypeOf(x.nativeXMLHttpRequestOpen,lt.prototype),Object.setPrototypeOf(x.nativeXMLHttpRequestSend,lt.prototype);}return e.secsdk?e.secsdk.csrf&&e.secsdk.csrf.nativeXMLHttpRequestOpen&&k(e.secsdk.csrf):b(e,"secsdk",d,x=>{delete e.secsdk,e.secsdk=x,b(x,"csrf",d,m=>{delete x.csrf,x.csrf=m,m.nativeXMLHttpRequestOpen&&k(m);});}),{hook:x=>t.hookFns.push(x),filter:x=>{Array.isArray(x)&&(t.filters=x);},protect:()=>{h(e,"XMLHttpRequest",n.fakeXHR),h(e,"fetch",n.fakeFetch),h(r,"clone",n.fakeFetchClone);},unhook:()=>{n.hookInsts.delete(t),n.hookInsts.size||(v(e,"XMLHttpRequest",n.realXHR),v(e,"fetch",n.realFetch),v(r,"clone",n.realFetchClone),delete e.__ajaxHooker);}}},ho=function(){return function(){const a=window.unsafeWindow||document.defaultView||window,t=[],e=a.XMLHttpRequest,n=a.Response.prototype,r=Object.prototype.toString,o=a.fetch,i=["response","responseText","responseXML"],s=["arrayBuffer","blob","formData","json","text"],l=["readystatechange","load","loadend"];let c;function f(){}function d(k){console.error(k);}function u(k,x,m,y){Object.defineProperty(k,x,{configurable:true,enumerable:true,get:m,set:y});}function g(k,x,m=k[x]){u(k,x,()=>m,f);}function w(k,x,m=k[x]){Object.defineProperty(k,x,{configurable:true,enumerable:true,writable:true,value:m});}function b(k){return {type:k.type,url:k.url,method:k.method&&k.method.toUpperCase()}}function h(k,x,m){return c&&!c.find(y=>(!y.type||y.type===k)&&(!y.url||(r.call(y.url)==="[object String]"?x.includes(y.url):y.url.test(x)))&&(!y.method||y.method===m.toUpperCase()))}function v(k,x){let m,y=k;for(;y;){const M=Object.getOwnPropertyDescriptor(y,x);if(m=M&&M.get,m)break;y=Object.getPrototypeOf(y);}return m?m.bind(k):f}function E(k){return Promise.all(t.map(x=>Promise.resolve(x(k)).then(f,d)))}function T(k,x){return Promise.all(["url","method","abort","headers","data"].map(m=>Promise.resolve(k[m]).then(y=>k[m]=y,()=>k[m]=x[m])))}function S(){this.ajaxHooker_stopped=true;}function C(k){const x=k.target;k.stopImmediatePropagation=S,x.__ajaxHooker.hookedEvents[k.type].forEach(y=>!k.ajaxHooker_stopped&&y.call(x,k));const m=x.__ajaxHooker.hookedEvents["on"+k.type];typeof m=="function"&&m.call(x,k);}function I(k){k.target.readyState===4?k.target.dispatchEvent(new CustomEvent("ajaxHooker_responseReady",{detail:k})):k.target.__ajaxHooker.delegateEvent(k);}function q(k){k.target.__ajaxHooker.delegateEvent(k);}function j(k,x,...m){const y=this.__ajaxHooker;return y.url=x.toString(),y.method=k.toUpperCase(),y.openArgs=m,y.headers={},y.originalMethods.open(k,x,...m)}function J(){const k=new e;let x=k.__ajaxHooker;if(!x){x=k.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:C,originalGetters:{},originalMethods:{}},k.addEventListener("readystatechange",I),k.addEventListener("load",q),k.addEventListener("loadend",q);for(const y of i)x.originalGetters[y]=v(k,y);for(const y of ["open","setRequestHeader","addEventListener","removeEventListener"])x.originalMethods[y]=k[y].bind(k);k.open=j,k.setRequestHeader=(y,M)=>{x.originalMethods.setRequestHeader(y,M),k.readyState===1&&(x.headers[y]?x.headers[y]+=", "+M:x.headers[y]=M);},k.addEventListener=function(...y){l.includes(y[0])?x.hookedEvents[y[0]].add(y[1]):x.originalMethods.addEventListener(...y);},k.removeEventListener=function(...y){l.includes(y[0])?x.hookedEvents[y[0]].delete(y[1]):x.originalMethods.removeEventListener(...y);},l.forEach(y=>{const M="on"+y;u(k,M,()=>x.hookedEvents[M]||null,_=>{x.hookedEvents[M]=typeof _=="function"?_:null;});});}const m=k.send.bind(k);return k.send=function(y){if(k.readyState!==1)return m(y);if(x.delegateEvent=C,i.forEach(M=>{delete k[M];}),h("xhr",x.url,x.method))return k.addEventListener("ajaxHooker_responseReady",M=>{x.delegateEvent(M.detail);}),m(y);try{const M={type:"xhr",url:x.url,method:x.method,abort:!1,headers:x.headers,data:y,response:null},_={...M};E(M).then(()=>{T(M,_).then(()=>{if(!M.abort){x.originalMethods.open(M.method,M.url,...x.openArgs);for(const P in M.headers)x.originalMethods.setRequestHeader(P,M.headers[P]);y=M.data,k.addEventListener("ajaxHooker_responseReady",P=>{try{if(typeof M.response=="function"){const H={finalUrl:k.responseURL,status:k.status,responseHeaders:{}};for(const K of k.getAllResponseHeaders().trim().split(/[\r\n]+/)){const ct=K.split(/:\s*/);if(ct.length===2){const kt=ct[0].toLowerCase();H.responseHeaders[kt]?H.responseHeaders[kt]+=", "+ct[1]:H.responseHeaders[kt]=ct[1];}}i.forEach(K=>{u(H,K,()=>H[K]=x.originalGetters[K](),ct=>{delete H[K],H[K]=ct;}),u(k,K,()=>{const ct=x.originalGetters[K]();return k.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:K,val:ct}})),ct});}),k.addEventListener("ajaxHooker_readResponse",K=>{H[K.detail.prop]=K.detail.val;});const pt=Promise.resolve(M.response(H)).then(()=>{const K=[];return i.forEach(ct=>{const kt=Object.getOwnPropertyDescriptor(H,ct);kt&&"value"in kt&&K.push(Promise.resolve(kt.value).then(Jt=>{H[ct]=Jt,u(k,ct,()=>(k.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:ct,val:Jt}})),Jt));},f));}),Promise.all(K)},d),yt={};l.forEach(K=>{yt[K]=new Set([...x.hookedEvents[K]]),yt["on"+K]=x.hookedEvents["on"+K];}),x.delegateEvent=K=>pt.then(()=>{K.stopImmediatePropagation=S,yt[K.type].forEach(kt=>!K.ajaxHooker_stopped&&kt.call(k,K));const ct=yt["on"+K.type];typeof ct=="function"&&ct.call(k,K);});}}catch(H){console.error(H);}x.delegateEvent(P.detail);}),m(y);}});});}catch(M){console.error(M),m(y);}},k}function Z(k,x,m){s.forEach(y=>{k[y]=()=>new Promise((M,_)=>{n[y].call(k).then(P=>{if(y in x)M(x[y]);else try{x[y]=P,Promise.resolve(m(x)).then(()=>{y in x?Promise.resolve(x[y]).then(H=>M(x[y]=H),()=>M(P)):M(P);},d);}catch(H){console.error(H),M(P);}},_);});});}function lt(k,x){if(k&&typeof k.toString=="function"){if(k=k.toString(),x=x||{},x.method=x.method||"GET",x.headers=x.headers||{},h("fetch",k,x.method))return o.call(a,k,x);const m={type:"fetch",url:k,method:x.method.toUpperCase(),abort:false,headers:{},data:x.body,response:null};if(r.call(x.headers)==="[object Headers]")for(const[M,_]of x.headers)m.headers[M]=_;else m.headers={...x.headers};const y={...m};return new Promise((M,_)=>{try{E(m).then(()=>{T(m,y).then(()=>{if(m.abort)return _("aborted");k=m.url,x.method=m.method,x.headers=m.headers,x.body=m.data,o.call(a,k,x).then(P=>{if(typeof m.response=="function"){const H={finalUrl:P.url,status:P.status,responseHeaders:{}};for(const[pt,yt]of P.headers)H.responseHeaders[pt]=yt;Z(P,H,m.response),P.clone=()=>{const pt=n.clone.call(P);return Z(pt,H,m.response),pt};}M(P);},_);});});}catch(P){return console.error(P),o.call(a,k,x)}})}else return o.call(a,k,x)}return a.XMLHttpRequest=J,Object.keys(e).forEach(k=>J[k]=e[k]),J.prototype=e.prototype,a.fetch=lt,{hook:k=>t.push(k),filter:k=>{c=Array.isArray(k)&&k.map(b);},protect:()=>{g(a,"XMLHttpRequest",J),g(a,"fetch",lt);},unhook:()=>{w(a,"XMLHttpRequest",e),w(a,"fetch",o);}}}()};class go{GM_Api={getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null};MenuHandle={context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:true,isStoreValue:true},$emoji:{success:"✅",error:"❌"},init(){for(let t=0;t<this.$data.data.length;t++){let e=this.$data.data[t].data;e.enable=!!this.getLocalMenuData(e.key,e.enable),typeof e.showText!="function"&&(e.showText=(n,r)=>r?this.$emoji.success+" "+n:this.$emoji.error+" "+n);}},register(t){let e=this;if(t==null)throw new TypeError("register菜单数据不能为空");Array.isArray(t)||(t=[t]);for(let n=0;n<t.length;n++){let r=et.deepClone(t[n].data);const{showText:o,clickCallBack:i}=this.handleMenuData(r);let s=e.context.GM_Api.registerMenuCommand(o,i);t[n].id=s,r.deleteMenu=function(){e.context.GM_Api.unregisterMenuCommand(s);},Reflect.deleteProperty(t[n],"handleData"),t[n].handleData=r;}},getLocalMenuData(t,e){let n=this.context.GM_Api.getValue(this.$data.key,{});return t in n?n[t]:e},setLocalMenuData(t,e){let n=this.context.GM_Api.getValue(this.$data.key,{});n[t]=e,this.context.GM_Api.setValue(this.$data.key,n);},handleInitDetail(t){return t.enable=!!this.getLocalMenuData(t.key,t.enable),typeof t.showText!="function"&&(t.showText=(e,n)=>n?this.$emoji.success+" "+e:this.$emoji.error+" "+e),t},handleMenuData(t){let e=this,n=t.key,r=!!this.getLocalMenuData(n,t.enable),o=t.showText(t.text,r);t.id,t.autoClose,t.accessKey,t.title,t.autoReload=typeof t.autoReload!="boolean"?this.$default.autoReload:t.autoReload,t.isStoreValue=typeof t.isStoreValue!="boolean"?this.$default.isStoreValue:t.isStoreValue;function i(s){let l=!!e.getLocalMenuData(n,r);t.isStoreValue&&e.setLocalMenuData(n,!l),typeof t.callback=="function"&&t.callback({key:n,enable:!l,oldEnable:l,event:s,storeValue(c){e.setLocalMenuData(n,c);}}),t.autoReload?window.location.reload():e.context.update();}return {showText:o,clickCallBack:i}},getMenuData(t){return this.$data.data.find(e=>e.data.key===t)},getMenuOption(t){return this.$data.data.find(e=>e.data.key===t)?.data},getMenuHandledOption(t){return this.$data.data.find(e=>e.handleData.key===t)?.handleData}};constructor(t){this.GM_Api.getValue=t.GM_getValue,this.GM_Api.setValue=t.GM_setValue,this.GM_Api.registerMenuCommand=t.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=t.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof t.autoReload=="boolean"?t.autoReload:true;for(const e of Object.keys(this.GM_Api))if(typeof this.GM_Api[e]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${e}，且传入该对象`);this.add(t?.data||[]);}__add(t){if(Array.isArray(t))for(let e=0;e<t.length;e++){const n=t[e];this.MenuHandle.$data.data.push({data:n,id:void 0});}else this.MenuHandle.$data.data.push({data:t,id:void 0});}add(t){this.__add(t),this.update();}update(t){let e=[];Array.isArray(t)?e=[...e,...t]:t!=null&&(e=[...e,t]),e.forEach(n=>{let r=this.MenuHandle.getMenuOption(n.key);r?Object.assign(r,n):this.__add(n);}),this.MenuHandle.$data.data.forEach(n=>{n.handleData&&n.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(t){this.GM_Api.unregisterMenuCommand(t);}get(t){return this.getEnable(t)}getEnable(t){return this.MenuHandle.getMenuHandledOption(t).enable}getText(t){return this.MenuHandle.getMenuHandledOption(t).text}getShowTextValue(t){return this.MenuHandle.getMenuHandledOption(t).showText(this.getText(t),this.getEnable(t))}getMenuId(t){let e=null;for(let n=0;n<this.MenuHandle.$data.data.length;n++){const r=this.MenuHandle.$data.data[n];if(r.handleData.key===t){e=r.id;break}}return e}getAccessKey(t){return this.MenuHandle.getMenuHandledOption(t)?.accessKey}getAutoClose(t){return this.MenuHandle.getMenuHandledOption(t)?.autoClose}getAutoReload(t){return this.MenuHandle.getMenuHandledOption(t)?.autoReload}getCallBack(t){return this.MenuHandle.getMenuHandledOption(t)?.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(t,e){this.MenuHandle.setLocalMenuData(t,e);}setEnable(t,e){this.setValue(t,!!e);}setEnableTrueEmoji(t){if(typeof t!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=t;}setEnableFalseEmoji(t){if(typeof t!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=t;}setLocalStorageKeyName(t){if(typeof t!="string")throw new Error("参数keyName必须是string类型");this.MenuHandle.$data.key=t;}}class mo{initEnv(){Function.prototype.hook=function(t,e,n){let r=null,o=null;if(r=n||window,o=i(this),r["realFunc_"+o]=this,r[o].prototype&&r[o].prototype.isHooked)return console.log("Already has been hooked,unhook first"),false;function i(s){let l=s.toString(),c=/function\s+(\w+)\s*\(/,f=l.match(c);return f?f[1]:""}try{return new Function("_context","_funcName","hookFunc",`_context[_funcName] = function ${o}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${o}'].apply(obj, args);
    };`)(r,o,e),r[o].prototype.isHooked=!0,!0}catch{return console.log("Hook failed,check the params."),false}},Function.prototype.unhook=function(t,e,n){let r=null,o=null;return r=n||window,o=e,r[o].prototype.isHooked?(r[o]=r["realFunc"+o],Reflect.deleteProperty(r,"realFunc_"+o),true):(console.log("No function is hooked on"),false)};}cleanEnv(){return Function.prototype.hasOwnProperty("hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Function.prototype.hasOwnProperty("unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),true}}const Ke=function(){return typeof window?.crypto?.randomUUID=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var t=Math.random()*16|0,e=a==="x"?t:t&3|8;return e.toString(16)})};class yo{GM_Api={xmlHttpRequest:null};HttpxRequestHook={$config:{configList:[]},async beforeRequestCallBack(t){if(typeof t.allowInterceptConfig=="boolean"){if(!t.allowInterceptConfig)return t}else if(t.allowInterceptConfig!=null&&typeof t.allowInterceptConfig.beforeRequest=="boolean"&&!t.allowInterceptConfig.beforeRequest)return t;for(let e=0;e<this.$config.configList.length;e++){let n=this.$config.configList[e];if(typeof n.fn=="function"&&await n.fn(t)==null)return}return t},add(t){if(typeof t=="function"){let e=Ke();return this.$config.configList.push({id:e,fn:t}),e}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(t){if(typeof t=="string"){let e=this.$config.configList.findIndex(n=>n.id===t);if(e!==-1)return this.$config.configList.splice(e,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxResponseHook={$config:{configList:[]},async successResponseCallBack(t,e){if(typeof e.allowInterceptConfig=="boolean"){if(!e.allowInterceptConfig)return e}else if(e.allowInterceptConfig!=null&&typeof e.allowInterceptConfig.afterResponseSuccess=="boolean"&&!e.allowInterceptConfig.afterResponseSuccess)return e;for(let n=0;n<this.$config.configList.length;n++){let r=this.$config.configList[n];if(typeof r.successFn=="function"&&await r.successFn(t,e)==null)return}return t},async errorResponseCallBack(t){if(typeof t.details.allowInterceptConfig=="boolean"){if(!t.details.allowInterceptConfig)return t}else if(t.details.allowInterceptConfig!=null&&typeof t.details.allowInterceptConfig.afterResponseError=="boolean"&&!t.details.allowInterceptConfig.afterResponseError)return t;for(let e=0;e<this.$config.configList.length;e++){let n=this.$config.configList[e];if(typeof n.errorFn=="function"&&await n.errorFn(t)==null)return}return t},add(t,e){let n=Ke();return this.$config.configList.push({id:n,successFn:t,errorFn:e}),n},delete(t){if(typeof t=="string"){let e=this.$config.configList.findIndex(n=>n.id===t);if(e!==-1)return this.$config.configList.splice(e,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxRequestOption={context:this,handleBeforeRequestOptionArgs(...t){let e={};if(typeof t[0]=="string"){let n=t[0];if(e.url=n,typeof t[1]=="object"){let r=t[1];et.assign(e,r,true),e.url=n;}}else {let n=t[0];et.assign(e,n,true);}return e},getRequestOption(t,e,n,r){let o=this,i=e.url||this.context.#t.url;typeof i=="string"&&(i=i.trim(),i.startsWith("http://")||i.startsWith("https://")||typeof this.context.#e.baseURL=="string"&&(i=this.context.#e.baseURL+i));let s={url:i,method:(t||"GET").toString().toUpperCase().trim(),timeout:e.timeout||this.context.#t.timeout,responseType:e.responseType||this.context.#t.responseType,headers:et.deepClone(this.context.#t.headers),data:e.data||this.context.#t.data,redirect:e.redirect||this.context.#t.redirect,cookie:e.cookie||this.context.#t.cookie,cookiePartition:e.cookiePartition||this.context.#t.cookiePartition,binary:e.binary||this.context.#t.binary,nocache:e.nocache||this.context.#t.nocache,revalidate:e.revalidate||this.context.#t.revalidate,context:et.deepClone(e.context||this.context.#t.context),overrideMimeType:e.overrideMimeType||this.context.#t.overrideMimeType,anonymous:e.anonymous||this.context.#t.anonymous,fetch:e.fetch||this.context.#t.fetch,fetchInit:et.deepClone(this.context.#t.fetchInit),allowInterceptConfig:{beforeRequest:this.context.#t.allowInterceptConfig.beforeRequest,afterResponseSuccess:this.context.#t.allowInterceptConfig.afterResponseSuccess,afterResponseError:this.context.#t.allowInterceptConfig.afterResponseError},user:e.user||this.context.#t.user,password:e.password||this.context.#t.password,onabort(...l){o.context.HttpxCallBack.onAbort(e,n,r,l);},onerror(...l){o.context.HttpxCallBack.onError(e,n,r,l);},onloadstart(...l){o.context.HttpxCallBack.onLoadStart(e,l);},onprogress(...l){o.context.HttpxCallBack.onProgress(e,l);},onreadystatechange(...l){o.context.HttpxCallBack.onReadyStateChange(e,l);},ontimeout(...l){o.context.HttpxCallBack.onTimeout(e,n,r,l);},onload(...l){o.context.HttpxCallBack.onLoad(e,n,r,l);}};typeof e.allowInterceptConfig=="boolean"?Object.keys(s.allowInterceptConfig).forEach(l=>{Reflect.set(s.allowInterceptConfig,l,e.allowInterceptConfig);}):typeof e.allowInterceptConfig=="object"&&e.allowInterceptConfig!=null&&Object.keys(e.allowInterceptConfig).forEach(l=>{let c=Reflect.get(e.allowInterceptConfig,l);typeof c=="boolean"&&Reflect.has(s.allowInterceptConfig,l)&&Reflect.set(s.allowInterceptConfig,l,c);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(s.fetch=true),typeof s.headers=="object"?typeof e.headers=="object"&&Object.keys(e.headers).forEach((l,c)=>{l in s.headers&&e.headers?.[l]==null?Reflect.deleteProperty(s.headers,l):s.headers[l]=e?.headers?.[l];}):Reflect.set(s,"headers",e.headers),typeof s.fetchInit=="object"?typeof e.fetchInit=="object"&&Object.keys(e.fetchInit).forEach((l,c)=>{l in s.fetchInit&&e.fetchInit[l]==null?Reflect.deleteProperty(s.fetchInit,l):Reflect.set(s.fetchInit,l,Reflect.get(e.fetchInit,l));}):Reflect.set(s,"fetchInit",e.fetchInit),typeof s.cookiePartition=="object"&&s.cookiePartition!=null&&Reflect.has(s.cookiePartition,"topLevelSite")&&typeof s.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(s.cookiePartition,"topLevelSite");try{new URL(s.url);}catch{s.url.startsWith("//")?s.url=globalThis.location.protocol+s.url:s.url.startsWith("/")?s.url=globalThis.location.origin+s.url:s.url=globalThis.location.origin+"/"+s.url;}s.fetchInit&&!s.fetch&&Reflect.deleteProperty(s,"fetchInit");try{let l=e.processData??!0;if(s.data!=null&&l){let c=s.method;if(c==="GET"||c==="HEAD"){let f=new URL(s.url),d="",u=!1;typeof s.data=="string"?(u=!0,d=s.data):typeof s.data=="object"&&(u=!0,d=new URLSearchParams(s.data).toString()),u&&Reflect.deleteProperty(s,"data"),d!=""&&(f.search===""?f.search=d:f.search.endsWith("&")?f.search=f.search+d:f.search=f.search+"&"+d),s.url=f.toString();}else if(c==="POST"&&s.headers!=null){let f=Object.keys(s.headers),d=f.findIndex(u=>u.trim().toLowerCase()==="content-type"&&typeof s.headers[u]=="string");if(d!==-1){let u=f[d],g=s.headers[u];if(g.includes("application/json"))if(s.data instanceof FormData){const w={};s.data.forEach((b,h)=>{w[h]=b;}),s.data=JSON.stringify(w);}else typeof s.data=="object"&&(s.data=JSON.stringify(s.data));else g.includes("application/x-www-form-urlencoded")?typeof s.data=="object"&&(s.data=new URLSearchParams(s.data).toString()):g.includes("multipart/form-data")&&s.data instanceof FormData&&Reflect.deleteProperty(s.headers,u);}}}}catch(l){console.warn("Httpx ==> 转换data参数错误",l);}return s},removeRequestNullOption(t){if(Object.keys(t).forEach(e=>{if(t[e]==null||t[e]instanceof Function&&et.isNull(t[e])){Reflect.deleteProperty(t,e);return}}),et.isNull(t.url))throw new TypeError(`Utils.Httpx 参数 url不符合要求: ${t.url}`);return t},handleFetchOption(t){let e={};(t.method==="GET"||t.method==="HEAD")&&t.data!=null&&Reflect.deleteProperty(t,"data");let n=new AbortController,r=n.signal;return r.onabort=()=>{t.onabort({isFetch:true,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},e.method=t.method??"GET",e.headers=t.headers,e.body=t.data,e.mode="cors",e.credentials="include",e.cache="no-cache",e.redirect="follow",e.referrerPolicy="origin-when-cross-origin",e.signal=r,Object.assign(e,t.fetchInit||{}),{fetchOption:t,fetchRequestOption:e,abortController:n}}};HttpxCallBack={context:this,async onAbort(t,e,n,r){"onabort"in t?t.onabort.apply(this,r):"onabort"in this.context.#t&&this.context.#t.onabort.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new TypeError("request canceled"),response:null,details:t})!=null&&e({data:o,details:t,msg:"请求被取消",status:false,statusCode:-1,type:"onabort"});},async onError(t,e,n,r){"onerror"in t?t.onerror.apply(this,r):"onerror"in this.context.#t&&this.context.#t.onerror.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new TypeError("request error"),response:o,details:t})!=null&&e({data:o,details:t,msg:"请求异常",status:false,statusCode:o.status,type:"onerror"});},async onTimeout(t,e,n,r){"ontimeout"in t?t.ontimeout.apply(this,r):"ontimeout"in this.context.#t&&this.context.#t.ontimeout.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new TypeError("request timeout"),response:(r||[null])[0],details:t})!=null&&e({data:o,details:t,msg:"请求超时",status:false,statusCode:0,type:"ontimeout"});},onLoadStart(t,e){"onloadstart"in t?t.onloadstart.apply(this,e):"onloadstart"in this.context.#t&&this.context.#t.onloadstart.apply(this,e);},async onLoad(t,e,n,r){let o=r[0];if(et.isNull(o.responseText)&&et.isNotNull(o.response)&&(typeof o.response=="object"?Ee().run(()=>{o.responseText=JSON.stringify(o.response);}):o.responseText=o.response),o.response==null&&typeof o.responseText=="string"&&o.responseText.trim()!==""){let s=o.responseText,l=s;if(t.responseType==="json")l=et.toJSON(s);else if(t.responseType==="document")l=new DOMParser().parseFromString(s,"text/html");else if(t.responseType==="arraybuffer")l=new TextEncoder().encode(s);else if(t.responseType==="blob"){let f=new TextEncoder().encode(s);l=new Blob([f]);}try{if(!Reflect.set(o,"response",l)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(o,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(o,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}let i=Reflect.get(o,"responseURL");if(o.finalUrl==null&&i!=null&&Reflect.set(o,"finalUrl",i),Math.floor(o.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(o,t)==null)return;e({data:o,details:t,msg:"请求成功",status:true,statusCode:o.status,type:"onload"});}else this.context.HttpxCallBack.onError(t,e,n,r);},onProgress(t,e){"onprogress"in t?t.onprogress.apply(this,e):"onprogress"in this.context.#t&&this.context.#t.onprogress.apply(this,e);},onReadyStateChange(t,e){"onreadystatechange"in t?t.onreadystatechange.apply(this,e):"onreadystatechange"in this.context.#t&&this.context.#t.onreadystatechange.apply(this,e);}};HttpxRequest={context:this,async request(t){if(this.context.#e.logDetails&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",t),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(t)==null))if(t.fetch){const{fetchOption:e,fetchRequestOption:n,abortController:r}=this.context.HttpxRequestOption.handleFetchOption(t);return this.fetch(e,n,r)}else return this.xmlHttpRequest(t)},xmlHttpRequest(t){return this.context.GM_Api.xmlHttpRequest(t)},fetch(t,e,n){return fetch(t.url,e).then(async r=>{let o={isFetch:true,finalUrl:r.url,readyState:4,status:r.status,statusText:r.statusText,response:void 0,responseFetchHeaders:r.headers,responseHeaders:"",responseText:void 0,responseType:t.responseType,responseXML:void 0};Object.assign(o,t.context||{});for(const[w,b]of r.headers.entries())o.responseHeaders+=`${w}: ${b}
`;const i=r.headers.get("Content-Type");if(t.responseType==="stream"||r.headers.has("Content-Type")&&r.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(o,"isStream",true),Reflect.set(o,"response",r.body),Reflect.deleteProperty(o,"responseText"),Reflect.deleteProperty(o,"responseXML"),t.onload(o);return}let s="",l="",c="",f=await r.arrayBuffer(),d="utf-8";if(r.headers.has("Content-Type")){let w=r.headers.get("Content-Type")?.match(/charset=(.+)/);w&&(d=w[1],d=d.toLowerCase());}d=d.replace(/('|")/gi,""),l=new TextDecoder(d).decode(f),s=l,t.responseType==="arraybuffer"?s=f:t.responseType==="blob"?s=new Blob([f]):t.responseType==="json"||typeof i=="string"&&i.includes("application/json")?s=et.toJSON(l):(t.responseType==="document"||t.responseType==null)&&(s=new DOMParser().parseFromString(l,"text/html")),c=new DOMParser().parseFromString(l,"text/xml"),Reflect.set(o,"response",s),Reflect.set(o,"responseText",l),Reflect.set(o,"responseXML",c),t.onload(o);}).catch(r=>{r.name!=="AbortError"&&t.onerror({isFetch:true,finalUrl:t.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:r});}),t.onloadstart({isFetch:true,finalUrl:t.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){n.abort();}}}};#t={url:void 0,timeout:5e3,async:false,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:true,afterResponseSuccess:true,afterResponseError:true},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}};#e={baseURL:void 0,logDetails:false};constructor(t={}){typeof t.xmlHttpRequest!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),et.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(t);}config(t={}){typeof t.xmlHttpRequest=="function"&&(this.GM_Api.xmlHttpRequest=t.xmlHttpRequest),this.#t=et.assign(this.#t,t),this.#e=et.assign(this.#e,t);}interceptors={request:{context:null,use(t){if(typeof t!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(t)},eject(t){return this.context.HttpxRequestHook.delete(t)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(t,e){if(typeof t!="function"&&typeof e!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(t,e)},eject(t){return this.context.HttpxResponseHook.delete(t)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}};setXMLHttpRequest(t){this.GM_Api.xmlHttpRequest=t;}get(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="GET",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}post(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="POST",this.request(e)}head(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="HEAD",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}options(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="OPTIONS",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}delete(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="DELETE",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}put(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="PUT",this.request(e)}request(t,e){let n=this.HttpxRequestOption.handleBeforeRequestOptionArgs(t),r=null,o=new globalThis.Promise(async(i,s)=>{let l=this.HttpxRequestOption.getRequestOption(n.method,n,i,s);typeof e=="function"&&e(l),l=this.HttpxRequestOption.removeRequestNullOption(l);const c=await this.HttpxRequest.request(l);c!=null&&typeof c.abort=="function"&&(r=c.abort);});return o.abort=()=>{typeof r=="function"&&r();},o}}class xo{#t;#e;#r;#o="1";#a=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;#i={};#s=null;#n={operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}};constructor(t="default_db",e="default_form",n=1){if(this.#t=t,this.#e=e,this.#r=n,!this.#a)throw alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(t){let e,n;return e=this.#i[t].transaction(this.#e,"readwrite"),n=e.objectStore(this.#e),this.#s=n,n}open(t,e){let n=this;if(n.#i[e]){let r=this.createStore(e);t(r);}else {let r=n.#a.open(e,n.#r);r.onerror=function(o){t(null,{code:n.#n.openFailed.code,msg:n.#n.openFailed.msg,event:o});},r.onsuccess=function(o){if(!n.#i[e]){let s=o.target;n.#i[e]=s.result;}let i=n.createStore(e);t(i);},r.onupgradeneeded=function(o){let i=o.target;n.#i[e]=i.result;let s=n.#i[e].createObjectStore(n.#e,{keyPath:"key"});s.transaction.oncomplete=function(l){t(s);};};}}async save(t,e){let n=this;return new Promise(r=>{let o=this.#t,i={key:t,value:e};this.open(function(s){if(s==null)r({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg});else {let l=s.put(i);l.onsuccess=function(c){r({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,event:c});},l.onerror=function(c){r({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg,event:c});};}},o);})}async has(t){let e=this;return new Promise(n=>{let r=this.#t;this.open(function(o){if(o==null)n({success:false,code:e.#n.getFailed.code,msg:e.#n.getFailed.msg});else {let i=o.get(t);i.onsuccess=function(s){n({success:true,code:e.#n.operationSuccess.code,msg:e.#n.operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:e.#n.getFailed.code,msg:e.#n.getFailed.msg,event:s});};}},r);})}async get(t){let e=this;return new Promise(n=>{let r=this.#t;this.open(function(o){if(o==null)n({success:false,code:e.#n.getFailed.code,msg:e.#n.getFailed.msg,data:void 0});else {let i=o.get(t);i.onsuccess=function(s){let c=s.target.result,f=c?c.value:void 0;f==null?n({success:true,code:e.#n.empty.code,msg:e.#n.empty.msg,data:f,event:s,result:c}):n({success:true,code:e.#n.operationSuccess.code,msg:e.#n.operationSuccess.msg,data:f,event:s,result:c});},i.onerror=function(s){n({success:false,code:e.#n.getFailed.code,msg:e.#n.getFailed.msg,data:void 0,event:s});};}},r);})}async regexpGet(t){let e=[],n=this;return new Promise(r=>{let o=n.#t;this.open(function(i){if(i==null)r({success:false,code:n.#n.regexpGetFailed.code,msg:n.#n.regexpGetFailed.msg,data:[]});else {let s=i.getAll();s.onsuccess=function(l){let f=l.target.result;f.length!==0&&f.forEach((d,u)=>{let g=d.key,w=d.value;g.match(t)&&(e=e.concat(w));}),r({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,data:e,event:l});},s.onerror=function(l){r({success:false,code:n.#n.getFailed.code,msg:n.#n.getFailed.msg,data:[],event:l});};}},o);})}async delete(t){let e=this;return new Promise(n=>{let r=e.#t;this.open(function(o){if(o==null)n({success:false,code:e.#n.deleteFailed.code,msg:e.#n.deleteFailed.msg});else {let i=o.delete(t);i.onsuccess=function(s){n({success:true,code:e.#n.operationSuccess.code,msg:e.#n.operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:e.#n.deleteFailed.code,msg:e.#n.deleteFailed.msg,event:s});};}},r);})}async deleteAll(){let t=this;return new Promise(e=>{let n=t.#t;this.open(function(r){if(r==null)e({success:false,code:t.#n.deleteAllFailed.code,msg:t.#n.deleteAllFailed.msg});else {let o=r.clear();o.onsuccess=function(i){e({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:i});},o.onerror=function(i){e({success:false,code:t.#n.deleteAllFailed.code,msg:t.#n.deleteAllFailed.msg,event:i});};}},n);})}}class wo{#t=false;#e=0;#r;#o=void 0;lock;unlock;run;isLock;constructor(t,e,n){let r=this;this.#r=t,typeof e=="number"?this.#e=e:this.#e=n,this.lock=function(){r.#t=true,clearTimeout(r.#o);},this.unlock=function(){r.#o=setTimeout(()=>{r.#t=false;},r.#e);},this.isLock=function(){return r.#t},this.run=async function(...o){r.isLock()||(r.lock(),await r.#r.apply(this,o),r.unlock());};}}class vo{#t=false;tag="Utils.Log";#e=null;#r=0;#o={tag:true,successColor:"#0000FF",errorColor:"#FF0000",infoColor:"0",warnColor:"0",debug:false,autoClearConsole:false,logMaxCount:999};#a=["font-weight: bold; color: cornflowerblue","font-weight: bold; color: cornflowerblue","font-weight: bold; color: darkorange","font-weight: bold; color: cornflowerblue"];constructor(t,e=window.console){typeof t=="string"?this.tag=t:typeof t=="object"&&typeof t?.script?.name=="string"&&(this.tag=t.script.name),this.#e=e;}parseErrorStack(t){let e={name:"",position:""};for(let n of t){n=n.trim();let r=n.match(/^at[\s]+(.+?)[\s]+/i),o=n.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(r==null||o==null)continue;let i=r[r.length-1],s=o[o.length-1];if(!(i===""||i.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){e.name=i,e.position=s;break}}if(e.position===""){let n=t[t.length-1].trim();if(n.startsWith("at chrome-extension://")){let r=n.match(/^at[\s]+(.+)/);r&&(e.position=r[r.length-1]);}}return e.position===""&&(e.position=t[t.length-1].trim().replace(/^at[\s]*/g,"")),e}checkClearConsole(){this.#r++,this.#o.autoClearConsole&&this.#r>this.#o.logMaxCount&&(this.#e.clear(),this.#r=0);}printContent(t,e,n){this.checkClearConsole(),n=n||"";let r=new Error().stack.split(`
`);r.splice(0,2);let{name:o,position:i}=this.parseErrorStack(r),s=this.tag,l=this,c=`%c[${s}%c`,f=`%c${o}%c]%c`;o.trim()!==""&&(f="-"+f);function d(u){typeof u=="string"?l.#e.log(`${c}${f} %s`,...l.#a,`color: ${e};${n}`,u):typeof u=="number"?l.#e.log(`${c}${f} %d`,...l.#a,`color: ${e};${n}`,u):typeof u=="object"?l.#e.log(`${c}${f} %o`,...l.#a,`color: ${e};${n}`,u):l.#e.log(u);}if(Array.isArray(t))for(let u=0;u<t.length;u++)d(t[u]);else d(t);this.#o.debug&&this.#e.log(i);}info(...t){this.#t||this.printContent(t,this.#o.infoColor);}warn(...t){this.#t||this.printContent(t,this.#o.warnColor,"background: #FEF6D5;padding: 4px 6px 4px 0px;");}error(...t){this.#t||this.printContent(t,this.#o.errorColor);}success(...t){this.#t||this.printContent(t,this.#o.successColor);}table(t){if(this.#t)return;this.checkClearConsole();let e=new Error().stack.split(`
`);e.splice(0,1);let n=this.parseErrorStack(e),r=n.name,o=n.position,i=r;this.#e.log(`%c[${this.tag}%c-%c${i}%c]%c`,...this.#a,`color: ${this.#o.infoColor};`),this.#e.table(t),this.#o.debug&&this.#e.log(o);}config(t){this.#o=Object.assign(this.#o,t);}disable(){this.#t=true;}recovery(){this.#t=false;}}class Ao{#t={canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50};#e=null;#r=null;#o=null;constructor(t){if(this.#t=et.assign(this.#t,t),!(this.#t.canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");this.init();}init(){let t=this.#t.canvasNode.getContext("2d");if(t==null)throw new Error("Utils.Progress 获取画笔失败");this.#e=t,this.#r=this.#t.canvasNode.width,this.#o=this.#t.canvasNode.height,window.devicePixelRatio&&(this.#t.canvasNode.style.width=this.#r+"px",this.#t.canvasNode.style.height=this.#o+"px",this.#t.canvasNode.height=this.#o*window.devicePixelRatio,this.#t.canvasNode.width=this.#r*window.devicePixelRatio,this.#e.scale(window.devicePixelRatio,window.devicePixelRatio)),this.#e.lineWidth=this.#t.lineWidth;}draw(){let t=this.#t.progress*360/100;this.#e.clearRect(0,0,this.#r,this.#o),this.#e.beginPath(),this.#e.arc(this.#r/2,this.#o/2,this.#t.circleRadius,1,8),this.#e.strokeStyle=this.#t.lineBgColor,this.#e.stroke(),this.#e.beginPath(),this.#e.arc(this.#r/2,this.#o/2,this.#t.circleRadius,-Math.PI/2,t*Math.PI/180-Math.PI/2),this.#e.strokeStyle=this.#t.lineColor,this.#e.stroke();let e=parseInt(this.#t.progress.toString())+"%";this.#e.font=this.#t.fontSize+"px SimHei";let n=this.#e.measureText(e).width,r=this.#t.fontSize/2;this.#e.fillStyle=this.#t.textColor,this.#e.fillText(e,this.#r/2-n/2,this.#o/2+r/2);}}class Eo{items={};constructor(t,e){t!=null&&this.set(t,e);}has(t){return Reflect.has(this.items,t)}startsWith(t){let e=this.keys();for(const n of e)if(String(n).startsWith(String(t)))return  true;return  false}getStartsWith(t){let e=this.keys(),n;for(const r of e)if(String(r).startsWith(String(t))){n=this.get(r);break}return n}set(t,e){if(t===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为空");Reflect.set(this.items,t,e);}delete(t){return this.has(t)?Reflect.deleteProperty(this.items,t):false}get(t){return Reflect.get(this.items,t)}values(){let t=[];for(let e in this.getItems())this.has(e)&&t.push(this.get(e));return t}clear(){this.items=null,this.items={};}size(){return Object.keys(this.getItems()).length}keys(){return Reflect.ownKeys(this.items)}getItems(){return this.items}concat(t){this.items=et.assign(this.items,t.getItems());}forEach(t){for(const e in this.getItems())t(this.get(e),e,this.getItems());}get length(){return this.size()}get entries(){let t=this;return function*(){let e=Object.keys(t.getItems());for(const n of e)yield [n,t.get(n)];}}get[Symbol.iterator](){let t=this;return function(){return t.entries()}}}class Yn{defaultApi={document,window,globalThis,self,top};api;constructor(t){t&&(t.globalThis==null&&(t.globalThis=t.window),t.self==null&&(t.self=t.window)),t||(t=Object.assign({},this.defaultApi)),this.api=Object.assign({},t);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}}const Ht={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(a){return typeof a=="object"&&a!==null},isFunction(a){return typeof a=="function"},isReactive(a){return !!(a&&a[Ht.ReactiveFlags.IS_REACTIVE])},isArray(a){return Array.isArray(a)}};class To{deps=[];active=true;fn;scheduler;constructor(t,e){this.fn=t,this.scheduler=e;}run(t){this.active||this.fn();try{return typeof t=="function"&&t(this),this.fn()}finally{typeof t=="function"&&t(void 0);}}}class So{_value;_isRef=true;_rawValue;_vue;constructor(t,e){this._vue=t,this._rawValue=e,this._value=this._vue.toReactive(e);}get value(){return this._value}set value(t){t!==this._rawValue&&(this._value=this._vue.toReactive(t),this._rawValue=t);}}class Co{object;key;constructor(t,e){this.object=t,this.key=e;}get value(){return this.object[this.key]}set value(t){this.object[this.key]=t;}}class ko{reactMap=new WeakMap;targetMap=new WeakMap;activeEffect=void 0;constructor(){}reactive(t){const e=this;if(!(typeof t=="object"&&t!==null))return;if(Ht.isReactive(t))return t;let n=this.reactMap.get(t);if(n)return n;const r=new Proxy(t,{get(o,i,s){return i===Ht.ReactiveFlags.IS_REACTIVE?true:(e.track(o,"get",i),Reflect.get(o,i,s))},set(o,i,s,l){let c=o[i],f=Reflect.set(o,i,s,l);return c!==s&&e.trigger(o,"set",i,c,s),f}});return e.reactMap.set(t,r),r}watch(t,e){let n;if(Ht.isReactive(t))n=()=>this.traversal(t);else if(Ht.isFunction(t))n=t;else return;let r;const o=()=>{const s=i.run(l=>{this.activeEffect=l;});e(s,r),r=s;},i=new To(n,o);r=i.run(s=>{this.activeEffect=s;});}toReactive(t){return Ht.isObject(t)?this.reactive(t):t}ref(t){return new So(this,t)}toRef(t,e){return new Co(t,e)}toRefs(t){const e=Ht.isArray(t)?new Array(t.length):{};for(let n in t)e[n]=this.toRef(t,n);return e}trigger(t,e,n,r,o){const i=this.targetMap.get(t);if(!i)return;const s=i.get(n);this.triggerEffect(s,"effects");}triggerEffect(t,e){t&&t.forEach(n=>{n.scheduler?n.scheduler():n.run();});}track(t,e,n){if(!this.activeEffect)return;let r=this.targetMap.get(t);r||this.targetMap.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),this.trackEffect(o);}trackEffect(t){this.activeEffect&&!t.has(this.activeEffect)&&(t.add(this.activeEffect),this.activeEffect.deps.push(t));}traversal(t,e=new Set){if(!Ht.isObject(t)||e.has(t))return t;e.add(t);for(let n in t)this.traversal(t[n],e);return t}}const Mo=a=>(t,e)=>(a.set(t,e),e),Cn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Jn=536870912,kn=Jn*2,$o=(a,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<kn?n+1:0;if(!e.has(r))return a(e,r);if(e.size<Jn){for(;e.has(r);)r=Math.floor(Math.random()*kn);return a(e,r)}if(e.size>Cn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*Cn);return a(e,r)},Zn=new WeakMap,Lo=Mo(Zn),Xe=$o(Lo,Zn),Io=a=>typeof a.start=="function",Mn=new WeakMap,_o=a=>({...a,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return Mn.set(n,r),n},disconnect:({call:t})=>async e=>{const n=Mn.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),Ue=new WeakMap,Ro=a=>{if(Ue.has(a))return Ue.get(a);const t=new Map;return Ue.set(a,t),t},Oo=a=>{const t=_o(a);return e=>{const n=Ro(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}}),Io(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((f,d)=>{const u=Xe(n);n.set(u,{reject:d,resolve:f}),l===null?e.postMessage({id:u,method:s},c):e.postMessage({id:u,method:s,params:l},c);}),o=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:o})};return {...i}}},Wt=new Map([[0,null]]),Kt=new Map([[0,null]]),Po=Oo({clearInterval:({call:a})=>t=>{typeof Wt.get(t)=="symbol"&&(Wt.set(t,null),a("clear",{timerId:t,timerType:"interval"}).then(()=>{Wt.delete(t);}));},clearTimeout:({call:a})=>t=>{typeof Kt.get(t)=="symbol"&&(Kt.set(t,null),a("clear",{timerId:t,timerType:"timeout"}).then(()=>{Kt.delete(t);}));},setInterval:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=Xe(Wt);Wt.set(o,r);const i=()=>a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=Wt.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),Wt.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=Xe(Kt);return Kt.set(o,r),a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=Kt.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(Kt.delete(o),t(...n));}),o}}),Do=a=>{const t=new Worker(a);return Po(t)},Ho=(a,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=a(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},Bo=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,ke=Ho(Do,Bo),No=a=>ke().clearInterval(a),Uo=a=>ke().clearTimeout(a),Vo=(...a)=>ke().setInterval(...a),zo=(...a)=>ke().setTimeout(...a);// @license      MIT
	class Go{constructor(t){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(n,r,o)=>{this.modules=o.c,this.constructors=o.m,this.get=o;}]],[[1e3],{[this.moduleID]:(n,r,o)=>{this.modules=o.c,this.constructors=o.m,this.get=o;}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},n=>{const r=n.m;Object.keys(r).forEach(o=>{try{this.modules[o]=n(o);}catch(i){this.log(`[arrayArguments/1] Failed to require(${o}) with error:
${i}
${i.stack}`);}}),this.get=n;}],this.functionArguments[1]],this.modules={},this.constructors=[];let e={target:window,entrypoint:"webpackJsonp",debug:false,strict:false};typeof t=="object"&&(e=Object.assign(Object.assign({},e),t)),this.target=e.target,this.entrypoint=e.entrypoint,this.debug=e.debug,this.strict=e.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent();}log(t){this.debug&&console.warn(`[moduleRaid] ${t}`);}replaceGet(){this.get===null&&(this.get=t=>this.modules[t]);}fillModules(){if(typeof this.target[this.entrypoint]=="function"?this.functionArguments.forEach((t,e)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...t);}catch(n){this.log(`moduleRaid.functionArguments[${e}] failed:
${n}
${n.stack}`);}}):this.arrayArguments.forEach((t,e)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(t);}catch(n){this.log(`Pushing moduleRaid.arrayArguments[${e}] into ${this.entrypoint} failed:
${n}
${n.stack}`);}}),this.modules&&Object.keys(this.modules).length==0){let t=false,e=0;if(typeof this.target[this.entrypoint]!="function"||!this.target[this.entrypoint]([],[],[e]))throw Error("Unknown Webpack structure");for(;!t;)try{this.modules[e]=this.target[this.entrypoint]([],[],[e]),e++;}catch{t=true;}}}setupPushEvent(){const t=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...e)=>{const n=Reflect.apply(t,this.target[this.entrypoint],e);return document.dispatchEvent(new CustomEvent("moduleraid:webpack-push",{detail:e})),n};}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let t=Object.keys(this.target);if(t=t.filter(e=>e.toLowerCase().includes("chunk")||e.toLowerCase().includes("webpack")).filter(e=>typeof this.target[e]=="function"||Array.isArray(this.target[e])),t.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:
${t.join(", ")}`);if(t.length===0)throw Error("No Webpack JSONP entrypoints could be detected");this.log(`Entrypoint has been detected at window.${t[0]} and set for injection`),this.entrypoint=t[0];}searchObject(t,e){for(const n in t){const r=t[n],o=e.toLowerCase();if(typeof r!="object"){if(n.toString().toLowerCase().includes(o))return  true;if(typeof r!="object"){if(r.toString().toLowerCase().includes(o))return  true}else if(this.searchObject(r,e))return  true}}return  false}findModule(t){const e=[],n=Object.keys(this.modules);if(n.length===0)throw new Error("There are no modules to search through!");return n.forEach(r=>{const o=this.modules[r.toString()];if(o!==void 0)try{if(typeof t=="string")switch(t=t.toLowerCase(),typeof o){case "string":o.toLowerCase().includes(t)&&e.push(o);break;case "function":o.toString().toLowerCase().includes(t)&&e.push(o);break;case "object":this.searchObject(o,t)&&e.push(o);break}else if(typeof t=="function")t(o)&&e.push(o);else throw new TypeError(`findModule can only find via string and function, ${typeof t} was passed`)}catch(i){this.log(`There was an error while searching through module '${r}':
${i}
${i.stack}`);}}),e}findConstructor(t){const e=[],n=Object.keys(this.constructors);if(n.length===0)throw new Error("There are no constructors to search through!");return n.forEach(r=>{const o=this.constructors[r];try{typeof t=="string"?(t=t.toLowerCase(),o.toString().toLowerCase().includes(t)&&e.push([this.constructors[r],this.modules[r]])):typeof t=="function"&&t(o)&&e.push([this.constructors[r],this.modules[r]]);}catch(i){this.log(`There was an error while searching through constructor '${r}':
${i}
${i.stack}`);}}),e}}class Fo{windowApi;constructor(t){this.windowApi=new Yn(t);}selector(t,e){return this.selectorAll(t,e)[0]}selectorAll(t,e){if(e=e||this.windowApi.document,t=t.trim(),t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),Array.from(e.querySelectorAll(t)).filter(r=>r?.innerHTML?.trim()==="");if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];return t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(i=>(i?.textContent||i?.innerText)?.includes(o))}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(o,s);return t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(e.querySelectorAll(t))}matches(t,e){if(e=e.trim(),t==null)return  false;if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),t.matches(e)&&t?.innerHTML?.trim()==="";if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let r=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=t?.textContent||t?.innerText;return typeof o!="string"&&(o=""),t.matches(e)&&o?.includes(r)}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);let s=new RegExp(r,i);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=t?.textContent||t?.innerText;return typeof l!="string"&&(l=""),t.matches(e)&&!!l?.match(s)}else return t.matches(e)}closest(t,e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi)){e=e.replace(/:empty$/gi,"");let n=t?.closest(e);return n&&n?.innerHTML?.trim()===""?n:null}else if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let r=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=t?.closest(e);if(o){let i=t?.textContent||t?.innerText;if(typeof i=="string"&&i.includes(r))return o}return null}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);let s=new RegExp(r,i);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=t?.closest(e);if(l){let c=t?.textContent||t?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return t?.closest(e)}}let te=new Fo;class Ze{windowApi;constructor(t){this.windowApi=new Yn(t);}version="2025.6.26";addStyle(t){if(typeof t!="string")throw new Error("Utils.addStyle 参数cssText 必须为String类型");let e=this.windowApi.document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,this.windowApi.document.head?this.windowApi.document.head.appendChild(e):this.windowApi.document.body?this.windowApi.document.body.appendChild(e):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(e):this.windowApi.document.documentElement.insertBefore(e,this.windowApi.document.documentElement.childNodes[0]),e}assign=et.assign.bind(et);async asyncReplaceAll(t,e,n){let r=this;if(typeof t!="string")throw new TypeError("string必须是字符串");if(typeof n!="function")throw new TypeError("asyncFn必须是函数");let o;if(typeof e=="string")o=new RegExp(r.parseStringToRegExpString(e),"g");else if(e instanceof RegExp){if(!e.global)throw new TypeError("pattern必须是全局匹配");o=new RegExp(e);}else throw new TypeError("pattern必须是正则对象");let i=[],s,l=0;for(;(s=o.exec(t))!==null;){const c=n(s[0]),f=t.slice(l,s.index);l=s.index+s[0].length,i.push(c),i.push(f);}return i.push(t.slice(l)),i=await Promise.all(i),i.join("")}ajaxHooker=(t=false)=>t?ho():bo();canvasClickByPosition(t,e=0,n=0,r=globalThis){if(!(t instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");e=parseInt(e.toString()),n=parseInt(n.toString());const o={cancelBubble:true,cancelable:true,clientX:e,clientY:n,view:r,detail:1};t.dispatchEvent(new MouseEvent("mousedown",o)),t.dispatchEvent(new MouseEvent("mouseup",o));}checkUserClickInNode(t){let e=this;if(!e.isDOM(t))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");let n=e.windowApi.window.event,r=e.windowApi.window.event,o=n?.composedPath()?.[0],i=n?.clientX!=null?n.clientX:r.touches[0].clientX,s=n?.clientY!=null?n.clientY:r.touches[0].clientY,{left:l,right:c,top:f,bottom:d}=t.getBoundingClientRect();return i>=l&&i<=c&&s>=f&&s<=d?true:!!(o&&t.contains(o)||o==t)}cloneFormData(t,e){let n=new FormData;for(let[r,o]of t.entries()){let i=typeof e=="function"?e(r,o):false;typeof i=="boolean"&&i||n.append(r,o);}return n}createOverload(){let t=new Map;function e(...n){let r=n.map(i=>typeof i).join(","),o=t.get(r);if(!o)throw new TypeError("没有找到对应的实现");return o.apply(this,n)}return e.addImpl=function(...n){let r=n.pop();if(typeof r!="function")throw new TypeError("最后一个参数必须是函数");let o=n.join(",");t.set(o,r);},e}ColorConversion=co;deepClone=et.deepClone.bind(et);debounce(t,e=0){let n=null,r=this;return function(...o){r.workerClearTimeout(n),n=r.workerSetTimeout(function(){t.apply(r,o);},e);}}deleteParentNode(t,e){let n=this;if(t==null)return;if(!n.isDOM(t))throw new Error("Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof e!="string")throw new Error("Utils.deleteParentNode 参数 targetSelector 必须为 string 类型");let r=false,o=te.closest(t,e);return o&&(o.remove(),r=true),r}Dictionary=Eo;dispatchEvent(t,e,n){let r=[];typeof e=="string"&&(r=[e]),Array.isArray(e)&&(r=[...e]),r.forEach(o=>{let i=new Event(o);n&&Object.assign(i,n),t.dispatchEvent(i);});}downloadBase64(t,e,n=false){let r=this;if(typeof t!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof e!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(n){const o=this.windowApi.document.createElement("iframe");o.style.display="none",o.src=t,this.windowApi.document.body.appendChild(o),r.workerSetTimeout(()=>{o.contentWindow.document.execCommand("SaveAs",true,e),this.windowApi.document.body.removeChild(o);},100);}else {const o=this.windowApi.document.createElement("a");o.setAttribute("target","_blank"),o.download=e,o.href=t,o.click();}}findWebPageVisibleText(t="",e=false){let n=null,r;if(this.windowApi.globalThis.find){let o=this.windowApi.self.find;if(r=o(t,e,true,true,false),r&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(r=o(t,e,true,true,false)),!r)for(r=o(t,0,1);o(t,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)n!=null&&(n=n,n.collapse(false),r=n.findText(t),r&&n.select()),(n==null||r==0)&&(n=this.windowApi.self.document.body.createTextRange(),r=n.findText(t),r&&n.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!r}*findElementsWithText(t,e,n){let r=this;if(t.outerHTML.includes(e))if(t.children.length===0)(typeof n=="function"?n(t):false)||(yield t);else {let o=Array.from(t.childNodes).filter(i=>i.nodeType===Node.TEXT_NODE);for(let i of o)i.textContent.includes(e)&&(typeof n=="function"&&n(t)||(yield i));}for(let o=0;o<t.children.length;o++){let i=t.children[o];yield*r.findElementsWithText(i,e,n);}}findVisibleElement(t){let e=t;for(;e;){if(e.getBoundingClientRect().length)return e;e=e.parentElement;}return null}formatByteToSize(t,e=true){if(t=parseInt(t.toString()),isNaN(t))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB",o={};o.B=1,o.KB=1024,o.MB=o.KB*o.KB,o.GB=o.MB*o.KB,o.TB=o.GB*o.KB,o.PB=o.TB*o.KB,o.EB=o.PB*o.KB,o.ZB=o.EB*o.KB,o.YB=o.ZB*o.KB,o.BB=o.YB*o.KB,o.NB=o.BB*o.KB,o.DB=o.NB*o.KB;for(let i in o)if(n=t/o[i],r=i,o.KB>=n)break;return n=n.toFixed(2),n=e?n+r.toString():parseFloat(n.toString()),n}getNodeListValue(...t){let e=[];for(let n of t){let r=n;if(typeof n=="function"&&(r=n()),r.length!==0){e=[...r];break}}return e}getNonNullValue(...t){let e=t[t.length-1],n=this;for(const r of t)if(n.isNotNull(r)){e=r;break}return e}formatTime(t=new Date,e="yyyy-MM-dd HH:mm:ss"){let n=t==null?new Date:new Date(t);function r(s){return s<10?"0"+s:s}function o(s){return s>12?s-12:s}let i={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(o(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(i).forEach(function(s){let l=new RegExp(s,"g");e=e.replace(l,i[s]);}),e}formatToTimeStamp(t){if(typeof t!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(t.length===8){let n=new Date;t=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+t;}return t=t.substring(0,19),t=t.replace(/-/g,"/"),new Date(t).getTime()}GBKEncoder=fo;getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getArrayLastValue(t){return t[t.length-1]}getArrayRealValue(...t){let e=null;for(let n of t)if(typeof n=="function"&&(n=n()),n!=null){e=n;break}return e}getDaysDifference(t=Date.now(),e=Date.now(),n="天"){n=n.trim(),t.toString().length===10&&(t=t*1e3),e.toString().length===10&&(e=e*1e3);let r=t>e?e:t,o=t>e?t:e,i=1e3,s=60*i,l=60*s,c=24*l,f=30*c,d=12*f,u=new Date(o),g=new Date(r),w=1;n==="年"?w=d:n==="月"?w=f:n==="天"?w=c:n==="时"?w=l:n==="分"?w=s:n==="秒"&&(w=i);let b=Math.round(Math.abs((u-g)/w));if(n==="auto"){let h=o-r;if(b=Math.floor(h/(24*3600*1e3)),b>0)b=b+"天";else {let v=h%864e5,E=Math.floor(v/(3600*1e3));if(E>0)b=E+"小时";else {let T=v%36e5,S=Math.floor(T/(60*1e3));if(S>0)b=S+"分钟";else {let C=T%6e4;b=Math.round(C/1e3)+"秒";}}}}return b}getElementSelector(t){let e=this;if(!t||!t.parentElement)return;if(t.id)return "#"+t.id;let n=e.getElementSelector(t.parentElement);if(!n)return t.tagName.toLowerCase();if(t.parentElement.querySelectorAll(t.tagName).length>1){let r=Array.prototype.indexOf.call(t.parentElement.children,t)+1;n+=" > "+t.tagName.toLowerCase()+":nth-child("+r+")";}else n+=" > "+t.tagName.toLowerCase();return n}getMaxValue(...t){let e=[...t],n=[];if(e.length!==0)if(e.length>1){if(e.length===2&&typeof e[0]=="object"&&typeof e[1]=="function"){let r=e[0],o=e[1];Object.keys(r).forEach(i=>{n=[...n,o(i,r[i])];});}else e.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.max(...n)}else return e[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.max(...n)}getMaxZIndexNodeInfo(t=1,e=this.windowApi.document,n){t=Number.isNaN(t)?1:t;const r=this,o=2*Math.pow(10,9);let i=0,s=null;function l(f){return f.position!=="static"&&f.display!=="none"}function c(f){if(typeof n=="function"){let u=n(f);if(typeof u=="boolean"&&!u)return}const d=r.windowApi.window.getComputedStyle(f);if(l(d)){let u=parseInt(d.zIndex);isNaN(u)||u>i&&(i=u,s=f),f.shadowRoot!=null&&f instanceof ShadowRoot&&f.shadowRoot.querySelectorAll("*").forEach(g=>{c(g);});}}return e.querySelectorAll("*").forEach((f,d)=>{c(f);}),i+=t,i>=o&&(i=o),{node:s,zIndex:i}}getMaxZIndex(t=1,e=this.windowApi.document,n){return this.getMaxZIndexNodeInfo(t,e,n).zIndex}getMinValue(...t){let e=[...t],n=[];if(e.length!==0)if(e.length>1){if(e.length===2&&typeof e[0]=="object"&&typeof e[1]=="function"){let r=e[0],o=e[1];Object.keys(r).forEach(i=>{n=[...n,o(i,r[i])];});}else e.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.min(...n)}else return e[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.min(...n)}getRandomAndroidUA(){let t=this,e=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],n=t.getRandomValue(12,14),r=t.getRandomValue(e),o=t.getRandomValue(120,132),i=t.getRandomValue(0,0),s=t.getRandomValue(2272,6099),l=t.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${n}; ${r}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${o}.${i}.${s}.${l} Mobile Safari/537.36`}getRandomPCUA(){let t=this,e=t.getRandomValue(120,132),n=t.getRandomValue(0,0),r=t.getRandomValue(2272,6099),o=t.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${e}.${n}.${r}.${o} Safari/537.36`}getRandomValue(...t){let e=[...t];if(e.length>1)if(e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"){let n=e[0]>e[1]?e[1]:e[0],r=e[0]>e[1]?e[0]:e[1];return Math.round(Math.random()*(r-n))+n}else return e[Math.floor(Math.random()*e.length)];else if(e.length===1){let n=e[0];if(Array.isArray(n))return n[Math.floor(Math.random()*n.length)];if(typeof n=="object"&&Object.keys(n).length>0){let r=Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)];return n[r]}else return n}}getReactObj(t){let e={};return Object.keys(t).forEach(n=>{if(n.startsWith("__react")){let r=n.replace(/__(.+)\$.+/i,"$1");r in e||(e[r]=t[n]);}}),e}getSymbol(t,e){if(typeof t!="object")throw new TypeError("target不是一个对象");let n=Object.getOwnPropertySymbols(t);if(typeof e=="string"){let r=n.find(o=>o.toString()===e);if(r)return t[r]}else if(typeof e=="symbol"){let r=n.find(o=>o===e);if(r)return t[r]}else {let r={};return n.forEach(o=>{r[o]=t[o];}),r}}getTextLength(t){return new TextEncoder().encode(t).length}getTextStorageSize(t,e=true){let n=this;return n.formatByteToSize(n.getTextLength(t),e)}getThunderUrl(t){if(t==null)throw new TypeError("url不能为空");if(typeof t!="string")throw new TypeError("url必须是string类型");if(t.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa("AA"+t+"ZZ")}`}GM_Cookie=uo;GM_Menu=go;Hooks=mo;Httpx=yo;indexedDB=xo;isNativeFunc(t){return !!t.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...t){let e=50,n=()=>{let i=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,s=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,l=this.windowApi.document.documentElement.scrollHeight-e;return i+s>=l},r=i=>{let s=i.scrollTop,l=i.clientHeight,c=i.scrollHeight-l-e;return s>=c},o=t[0];if(t.length===0||typeof t[0]=="number")return n();if(typeof t[0]=="object"&&t[0]instanceof HTMLElement)return typeof t[1]=="number"&&!Number.isNaN(t[1])&&(e=t[1]),r(t[0]);throw new TypeError("参数1类型错误"+typeof o)}isDOM=et.isDOM.bind(et);isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(t){let e=false;if(typeof jQuery=="object"&&t instanceof jQuery&&(e=true),t==null)return  false;if(typeof t=="object"){let n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const r of n)if(r in t)e=true;else {e=false;break}}return e}isPhone(t=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(t)}isSameChars(t,e=1){if(typeof t!="string")throw new TypeError("参数 str 必须是 string 类型");if(t.length<2)return  false;t=t.toLowerCase();const n={};let r=0;for(const i of t)Reflect.has(n,i)?n[i]++:n[i]=1,r++;let o=false;for(const i in n)if(n[i]/r>=e){o=true;break}return o}isNotNull=et.isNotNull.bind(et);isNull=et.isNull.bind(et);isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(t,e=false){let n=[];t instanceof Array||t instanceof NodeList?(t=t,n=[...t]):n=[t];let r=true;for(const o of n){if(this.windowApi.window.getComputedStyle(o).display==="none")r=false;else {let s=o.getBoundingClientRect();if(e){let l=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,c=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;r=!(s.right<0||s.left>l||s.bottom<0||s.top>c);}else r=!!o.getClientRects().length;}if(!r)break}return r}isWebView_Via(){let t=true,e=this;if(typeof this.windowApi.top.window.via=="object"){for(const n in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,n)){let r=this.windowApi.top.window.via[n];if(typeof r=="function"&&e.isNativeFunc(r))t=true;else {t=false;break}}}else t=false;return t}isWebView_X(){let t=true,e=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const n in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,n)){let r=this.windowApi.top.window.mbrowser[n];if(typeof r=="function"&&e.isNativeFunc(r))t=true;else {t=false;break}}}else t=false;return t}parseObjectToArray(t){if(typeof t!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let e=[];return Object.keys(t).forEach(function(n){e=e.concat(t[n]);}),e}LockFunction=wo;Log=vo;mergeArrayToString(t,e){if(!(t instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let n="";return typeof e=="function"?t.forEach(r=>{n+=e(r);}):typeof e=="string"?t.forEach(r=>{n+=r[e];}):t.forEach(r=>{Object.values(r).filter(o=>typeof o=="string").forEach(o=>{n+=o;});}),n}mutationObserver(t,e){let n=this,r={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};e=n.assign(r,e);let o=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,i=new o(function(s,l){typeof e.callback=="function"&&e.callback(s,l);});return Array.isArray(t)||t instanceof NodeList?t.forEach(s=>{i.observe(s,e.config);}):n.isJQuery(t)?t.each((s,l)=>{i.observe(l,e.config);}):i.observe(t,e.config),e.immediate&&typeof e.callback=="function"&&e.callback([],i),i}mutationVisible(t,e,n){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(t==null)throw new TypeError("mutatuinVisible target is null");let r={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};r=this.assign(r,n||{});let o=new IntersectionObserver((i,s)=>{i[0].isIntersecting&&typeof e=="function"&&e(i,s);},r);Array.isArray(t)?t.forEach(i=>{o.observe(i);}):o.observe(t);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=zt,zt}noConflictFunc(t,e,n=[],r=true){let o=this;if(typeof t!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof e!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(n))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");let i="__"+e;function s(){typeof o.windowApi.window[i]<"u"||(o.windowApi.window[i]=o.deepClone(t),Object.values(t).forEach(d=>{typeof d=="function"&&(t[d.name]=()=>{});}));}function l(){Array.from(n).forEach(d=>{Object.values(t).forEach(u=>{typeof u=="function"&&(typeof o.windowApi.window[i]>"u"&&(o.windowApi.window[i]={}),d===u.name&&(o.windowApi.window[i][u.name]=t[u.name],t[u.name]=()=>{}));});});}function c(){typeof o.windowApi.window[i]>"u"||(Object.assign(t,o.windowApi.window[i]),Reflect.deleteProperty(o.windowApi.window,"needReleaseKey"));}function f(){typeof o.windowApi.window[i]>"u"||Array.from(n).forEach(d=>{o.windowApi.window[i][d]&&(t[d]=o.windowApi.window[i][d],Reflect.deleteProperty(o.windowApi.window[i],d),Object.keys(o.windowApi.window[i]).length===0&&Reflect.deleteProperty(window,i));});}r?n.length===0?s():l():n.length===0?c():f();}parseBase64ToBlob(t){if(typeof t!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");let e=t.split(","),n=e[0].match(/:(.*?);/)[1],r=atob(e[1]),o=r.length,i=new Uint8Array(o);for(;o--;)i[o]=r.charCodeAt(o);return new Blob([i],{type:n})}parseBase64ToFile(t,e="example"){if(typeof t!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof e!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");let n=t.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]),i=o.length,s=new Uint8Array(i);for(;i--;)s[i]=o.charCodeAt(i);return new File([s],e,{type:r})}parseInt(t=[],e=0){if(t==null)return parseInt(e.toString());let n=parseInt(t[t.length-1]);return isNaN(n)&&(n=parseInt(e.toString())),n}async parseBlobToFile(t,e="example"){return new Promise((n,r)=>{fetch(t).then(o=>o.blob()).then(o=>{const i=new File([o],e,{type:o.type});n(i);}).catch(o=>{console.error("Error:",o),r(o);});})}parseCDATA(t=""){let e="",r=/<\!\[CDATA\[([\s\S]*)\]\]>/.exec(t.trim());return r&&r.length>1&&(e=r[r.length-1]),e}async parseFileToBase64(t){let e=new FileReader;return e.readAsDataURL(t),new Promise(n=>{e.onload=function(r){n(r.target.result);};})}parseFromString(t,e="text/html"){return new DOMParser().parseFromString(t,e)}parseStringToRegExpString(t){if(typeof t!="string")throw new TypeError("string必须是字符串");return t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}preventEvent(t,e=[],n){function r(o){return o?.preventDefault(),o?.stopPropagation(),o?.stopImmediatePropagation(),false}if(arguments.length===1)return r(arguments[0]);typeof e=="string"&&(e=[e]),e.forEach(o=>{t.addEventListener(o,r,{capture:!!n});});}Progress=Ao;registerTrustClickEvent(t=true,e){function n(o){return new Proxy(o,{get:function(i,s){return s==="isTrusted"?t:Reflect.get(i,s)}})}e==null&&(e=function(o){return o==="click"});const r=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...o){let i=o[0],s=o[1];if(o[2],e(i)){if(typeof s=="function")o[1]=function(l){s.call(this,n(l));};else if(typeof s=="object"&&"handleEvent"in s){let l=s.handleEvent;o[1].handleEvent=function(c){if(c!=null)try{c instanceof Proxy,l.call(this,n(c));}catch{c.isTrusted=t;}};}}return r.apply(this,o)};}reverseNumber(t){let e=0,n=false;for(t<0&&(n=true,t=Math.abs(t));t>0;)e=e*10+t%10,t=Math.floor(t/10);return n?-e:e}selectElementText(t,e,n,r){let o=this.windowApi.document.createRange();if(o.selectNodeContents(t),e){if(e.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");n!=null&&r!=null&&(o.setStart(e,n),o.setEnd(e,r));}let i=this.windowApi.globalThis.getSelection();i&&(i.removeAllRanges(),i.addRange(o));}setClip(t,e={type:"text",mimetype:"text/plain"}){typeof t=="object"?t instanceof Element?t=t.outerHTML:t=JSON.stringify(t):typeof t!="string"&&(t=t.toString());let n=typeof e=="object"?e.type:e;n.includes("html")?n="text/html":n="text/plain";let r=this;class o{#t;#e;#r;constructor(s,l,c){this.#t=s,this.#e=l,this.#r=c;}async init(){let s=false;if(await this.requestClipboardPermission(),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{s=await this.copyDataByClipboard();}catch(l){console.error("复制失败，使用第二种方式，error👉",l),s=this.copyTextByTextArea();}else s=this.copyTextByTextArea();this.#t(s),this.destroy();}destroy(){this.#t=null,this.#e=null,this.#r=null;}isText(){return this.#r.includes("text")}hasClipboard(){return navigator?.clipboard!=null}hasClipboardWrite(){return navigator?.clipboard?.write!=null}hasClipboardWriteText(){return navigator?.clipboard?.writeText!=null}copyTextByTextArea(){try{let s=r.windowApi.document.createElement("textarea");return s.value=this.#e,s.setAttribute("type","text"),s.setAttribute("style","opacity:0;position:absolute;"),s.setAttribute("readonly","readonly"),r.windowApi.document.body.appendChild(s),s.select(),r.windowApi.document.execCommand("copy"),r.windowApi.document.body.removeChild(s),!0}catch(s){return console.error("复制失败，error👉",s),false}}requestClipboardPermission(){return new Promise((s,l)=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(c=>{s(true);}).catch(c=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",c.message??c.name??c.stack]),s(false);}):s(false);})}copyDataByClipboard(){return new Promise((s,l)=>{if(this.isText())navigator.clipboard.writeText(this.#e).then(()=>{s(true);}).catch(c=>{l(c);});else {let c=new Blob([this.#e],{type:this.#r});navigator.clipboard.write([new ClipboardItem({[this.#r]:c})]).then(()=>{s(true);}).catch(f=>{l(f);});}})}}return new Promise(i=>{const s=new o(i,t,n);r.windowApi.document.hasFocus()?s.init():r.windowApi.window.addEventListener("focus",()=>{s.init();},{once:true});})}setTimeout(t,e=0){let n=this;if(typeof t!="function"&&typeof t!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof e!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(r=>{n.workerSetTimeout(()=>{r(n.tryCatch().run(t));},e);})}sleep(t=0){let e=this;if(typeof t!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(n=>{e.workerSetTimeout(()=>{n(void 0);},t);})}dragSlider(t,e=this.windowApi.window.innerWidth){let n=this;function r(d,u,g){let w=typeof unsafeWindow>"u"?globalThis:unsafeWindow,b=n.windowApi.document.createEvent("MouseEvents");return b.initMouseEvent(d,true,true,w,0,u,g,u,g,false,false,false,false,0,null),b}let o=typeof t=="string"?te.selector(t):t;if(!(o instanceof Node)||!(o instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");let i=o.getBoundingClientRect(),s=i.x||i.left,l=i.y||i.top,c=s+e,f=l;o.dispatchEvent(r("mousedown",s,l)),o.dispatchEvent(r("mousemove",c,f)),o.dispatchEvent(r("mouseleave",c,f)),o.dispatchEvent(r("mouseout",c,f));}enterFullScreen(t=this.windowApi.document.documentElement,e){try{if(t.requestFullscreen)t.requestFullscreen(e);else if(t.webkitRequestFullScreen)t.webkitRequestFullScreen();else if(t.mozRequestFullScreen)t.mozRequestFullScreen();else if(t.msRequestFullscreen)t.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(n){console.error(n);}}exitFullScreen(t=this.windowApi.document.documentElement){return this.windowApi.document.exitFullscreen?this.windowApi.document.exitFullscreen():this.windowApi.document.msExitFullscreen?this.windowApi.document.msExitFullscreen():this.windowApi.document.mozCancelFullScreen?this.windowApi.document.mozCancelFullScreen():this.windowApi.document.webkitCancelFullScreen?this.windowApi.document.webkitCancelFullScreen():new Promise((e,n)=>{n(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(t,e,n=true){let r=this;if(typeof e!="function"&&typeof e!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof n!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");let o=function(f){return typeof e=="string"?f[e]:e(f)},i=function(f,d){let u=o(d),g=o(f);return n?g>u?-1:g<u?1:0:g<u?-1:g>u?1:0},s=function(f,d){let u=f.length;for(let g=0;g<u-1;g++)for(let w=0;w<u-1-g;w++){let b=f[w],h=f[w+1],v=o(b),E=o(h);if(n==true&&v<E||n==false&&v>E){let T=b.nextElementSibling;h.after(b),T==null?T.parentNode.appendChild(h):T.before(h),f=d();}}},l=t,c=null;if(t instanceof Function&&(c=t,t=t()),Array.isArray(t))t.sort(i);else if(t instanceof NodeList||r.isJQuery(t))s(t,c),l=c();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return l}stringToRegular(t,e="ig"){let n;if(e=e.toLowerCase(),typeof t=="string")n=new RegExp(t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e);else if(t instanceof RegExp)n=t;else throw new Error("Utils.stringToRegular 参数targetString必须是string|Regexp类型");return n}stringTitleToUpperCase(t,e=false){let n=t.slice(0,1).toUpperCase();return e?n=n+t.slice(1).toLowerCase():n=n+t.slice(1),n}startsWith(t,e,n=0){let r=this;if(n>t.length)return  false;n!==0&&(t=t.slice(n,t.length));let o=e;if(typeof e=="string")o=new RegExp(`^${e}`);else if(Array.isArray(e)){let i=false;for(const s of e)if(!r.startsWith(t,s,n)){i=true;break}return i}return !!t.match(o)}stringTitleToLowerCase(t,e=false){let n=t.slice(0,1).toLowerCase();return e?n=n+t.slice(1).toUpperCase():n=n+t.slice(1),n}toJSON=et.toJSON.bind(et);toSearchParamsStr(t,e){let n=this,r="";return Array.isArray(t)?t.forEach(o=>{r===""?r+=n.toSearchParamsStr(o):r+="&"+n.toSearchParamsStr(o);}):r=new URLSearchParams(Object.entries(t)).toString(),e&&!r.startsWith("?")&&(r="?"+r),r}searchParamStrToObj(t){return typeof t!="string"?{}:Object.fromEntries(new URLSearchParams(t))}tryCatch=Ee;uniqueArray(t=[],e,n=(r,o)=>r===o){if(typeof e=="function"){const r=e,o=new Set,i=[];for(const s of t){const l=r(s);o.has(l)||(o.add(l),i.push(s));}return i}else return Array.from(t).filter(r=>!Array.from(e).some(function(o){return n(r,o)}))}waitArrayLoopToEnd(t,e){let n=this;if(typeof e!="function"&&typeof e!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(t).map(async(r,o)=>{await n.tryCatch(o,r).run(e);}))}wait(t,e,n){const r=this;let o=typeof e=="number"?e:0;return new Promise(i=>{let s=r.mutationObserver(n||r.windowApi.document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(l,c){let f=t();f.success&&(typeof c?.disconnect=="function"&&c.disconnect(),i(f.data));}});o>0&&r.workerSetTimeout(()=>{typeof s?.disconnect=="function"&&s.disconnect(),i(null);},o);})}waitNode(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,o=0;if(typeof t[0]!="string"&&!Array.isArray(t[0])&&typeof t[0]!="function")throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");function i(){if(Array.isArray(n)){let s=[];for(let l=0;l<n.length;l++){let c=te.selector(n[l]);c&&s.push(c);}if(s.length===n.length)return s}else return typeof n=="function"?n():te.selector(n,r)}return e.wait(()=>{let s=i();return s?{success:true,data:s}:{success:false,data:s}},o,r)}waitAnyNode(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,o=0;if(typeof t[0]!="object"&&!Array.isArray(t[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");let i=n.map(s=>e.waitNode(s,r,o));return Promise.any(i)}waitNodeList(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,o=0;if(typeof t[0]!="string"&&!Array.isArray(t[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");function i(){if(Array.isArray(n)){let s=[];for(let l=0;l<n.length;l++){let c=te.selectorAll(n[l],r);c.length&&s.push(c);}if(s.length===n.length)return s}else {let s=te.selectorAll(n,r);if(s.length)return s}}return e.wait(()=>{let s=i();return s?{success:true,data:s}:{success:false,data:s}},o,r)}waitAnyNodeList(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,o=0;if(!Array.isArray(t[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");let i=n.map(s=>e.waitNodeList(s,r,o));return Promise.any(i)}waitProperty(t,e){return new Promise(n=>{let r=t;typeof t=="function"&&(r=t()),Reflect.has(r,e)?n(r[e]):Object.defineProperty(r,e,{set:function(o){try{n(o);}catch(i){console.error("Error setting property:",i);}}});})}waitPropertyByInterval(t,e,n=250,r=-1){let o=this;if(t==null)throw new TypeError("checkObj 不能为空对象 ");let i=false;return new Promise((s,l)=>{let c=o.workerSetInterval(()=>{let f=t;typeof t=="function"&&(f=t()),typeof f=="object"&&f!=null&&(typeof e=="function"&&e(f)||Reflect.has(f,e))&&(i=true,o.workerClearInterval(c),s(f[e]));},n);r!==-1&&o.workerSetTimeout(()=>{i||(o.workerClearInterval(c),l());},r);})}async waitVueByInterval(t,e,n=250,r=-1,o="__vue__"){if(t==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let i=false,s=this;try{await s.waitPropertyByInterval(t,function(l){if(l==null||!(o in l))return !1;if(e==null)return !0;let c=l[o];if(typeof e=="string"){if(e in c)return i=!0,!0}else if(e(c))return i=!0,!0;return !1},n,r);}catch{return i}return i}watchObject(t,e,n,r){typeof n!="function"&&typeof r!="function"||(typeof n=="function"?Object.defineProperty(t,e,{get(){return typeof n=="function"?n(t[e]):t[e]}}):typeof r=="function"?Object.defineProperty(t,e,{set(o){typeof r=="function"&&r(o);}}):Object.defineProperty(t,e,{get(){return typeof n=="function"?n(t[e]):t[e]},set(o){typeof r=="function"&&r(o);}}));}queryProperty(t,e){if(t==null)return;let n=e(t);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:this.queryProperty(n.data,e)}createUtils(t){return new Ze(t)}toFormData(t,e=false,n=false){const r=new FormData;return Object.keys(t).forEach(o=>{let i=t[o];n&&(i=JSON.stringify(i)),typeof i=="number"&&(i=i.toString()),e&&typeof i=="string"&&(i=encodeURIComponent(i)),i instanceof File?r.append(o,i,i.name):r.append(o,i);}),r}toUrl(t){if(typeof t!="string")throw new TypeError("toUrl: text must be string");if(t=t.trim(),t==="")throw new TypeError("toUrl: text must not be empty");return t.startsWith("//")?t=this.windowApi.globalThis.location.protocol+t:t.startsWith("/")&&(t=this.windowApi.globalThis.location.origin+t),new URL(t)}coverObjectFunctionThis=et.coverObjectFunctionThis.bind(et);generateUUID=Ke;Vue=ko;ModuleRaid=Go;workerSetTimeout(t,e=0){try{return zo(t,e)}catch{return globalThis.setTimeout(t,e)}}workerClearTimeout(t){try{t!=null&&Uo(t);}catch{}finally{globalThis.clearTimeout(t);}}workerSetInterval(t,e=0){try{return Vo(t,e)}catch{return globalThis.setInterval(t,e)}}workerClearInterval(t){try{t!=null&&No(t);}catch{}finally{globalThis.clearInterval(t);}}async getClipboardInfo(){return new Promise(t=>{function e(){navigator.clipboard.readText().then(o=>{t({error:null,content:o});}).catch(o=>{t({error:o,content:""});});}function n(){navigator.permissions.query({name:"clipboard-read"}).then(o=>{e();}).catch(o=>{e();});}function r(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}if(!r()){t({error:new Error("当前环境不支持读取剪贴板Api"),content:""});return}document.hasFocus()?n():window.addEventListener("focus",()=>{n();},{once:true});})}}let zt=new Ze;const de=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),jo={document,window,globalThis,self},ye=Object.assign({},jo),V={get document(){return ye.document},get window(){return ye.window},get globalThis(){return ye.globalThis},get self(){return ye.self}},tr={Object:{defineProperty:Object.defineProperty}},qo=a=>(t,e)=>(a.set(t,e),e),$n=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,er=536870912,Ln=er*2,Wo=(a,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<Ln?n+1:0;if(!e.has(r))return a(e,r);if(e.size<er){for(;e.has(r);)r=Math.floor(Math.random()*Ln);return a(e,r)}if(e.size>$n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*$n);return a(e,r)},nr=new WeakMap,Ko=qo(nr),Qe=Wo(Ko,nr),Xo=a=>typeof a.start=="function",In=new WeakMap,Qo=a=>({...a,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return In.set(n,r),n},disconnect:({call:t})=>async e=>{const n=In.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),Ve=new WeakMap,Yo=a=>{if(Ve.has(a))return Ve.get(a);const t=new Map;return Ve.set(a,t),t},Jo=a=>{const t=Qo(a);return e=>{const n=Yo(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}}),Xo(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((f,d)=>{const u=Qe(n);n.set(u,{reject:d,resolve:f}),l===null?e.postMessage({id:u,method:s},c):e.postMessage({id:u,method:s,params:l},c);}),o=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:o})};return {...i}}},Xt=new Map([[0,null]]),Qt=new Map([[0,null]]),Zo=Jo({clearInterval:({call:a})=>t=>{typeof Xt.get(t)=="symbol"&&(Xt.set(t,null),a("clear",{timerId:t,timerType:"interval"}).then(()=>{Xt.delete(t);}));},clearTimeout:({call:a})=>t=>{typeof Qt.get(t)=="symbol"&&(Qt.set(t,null),a("clear",{timerId:t,timerType:"timeout"}).then(()=>{Qt.delete(t);}));},setInterval:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=Qe(Xt);Xt.set(o,r);const i=()=>a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=Xt.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),Xt.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(t,e=0,...n)=>{const r=Symbol(),o=Qe(Qt);return Qt.set(o,r),a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=Qt.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(Qt.delete(o),t(...n));}),o}}),ta=a=>{const t=new Worker(a);return Zo(t)},ea=(a,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=a(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},na=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,Me=ea(ta,na),ra=a=>Me().clearInterval(a),oa=a=>Me().clearTimeout(a),aa=(...a)=>Me().setInterval(...a),ia=(...a)=>Me().setTimeout(...a);let sa=class{constructor(){this.__map={};}beforeEach(t){this.__interceptor=t;}on(t,e){const n=Array.isArray(t)?t:[t];for(const r of n){this.__map[r]=this.__map[r]||[];const o=this.__map[r];o&&o.push(e);}return this}emit(t,e,n){this.__interceptor!==void 0?this.__interceptor(t,()=>{this.__emit(t,e),n&&n();}):(this.__emit(t,e),n&&n());}__emit(t,e){const n=this.__map[t];if(Array.isArray(n)&&n?.length)for(const r of n)r(e,t);this.event=e;}off(t,e){const n=this.__map[t];if(n!==void 0)if(e===void 0)delete this.__map[t];else {const r=n.findIndex(o=>o===e);n.splice(r,1);}}destroy(){this.__map={};}};const ue="clientX",be="clientY",la=16,$e="start",ca="move",tn="cancel",ie="end",fa="left",da="right",rr="up",pa="down",ua={4:"start",5:"move",1:"end",3:"cancel"};function en(a){return ua[a]}function nn(a,t,e){const n={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(a)][t];return n!==void 0&&n[e]||0}function Le(a){[1,3,2].includes(a.state)&&(a.state=0);}function rn(a){return [5,1,3].includes(a)}function he(a){if(a.disabled)return a.state=0,true}function se(a,t){return Object.assign(Object.assign(Object.assign({},a),t),{state:0,disabled:false})}function _n(a){return Math.round(100*a)/100}function Rn(){let a,t,e,n,r=0;return function(o){if(a=t,o!==void 0){r=Number.MAX_SAFE_INTEGER>r?++r:1;const i=function(c,f){const{phase:d,points:u,changedPoints:g,nativeEvent:w}=c,b=u.length,h=$e===d,v=ie===d&&b===0||tn===d,E=Date.now(),{x:T,y:S}=On(u)||On(g),{currentTarget:C}=w;return Object.assign(c,{id:f,x:T,y:S,timestamp:E,isStart:h,isEnd:v,pointLength:b,currentTarget:C,getOffset(I=C){const q=I.getBoundingClientRect();return {x:T-Math.round(q.left),y:S-Math.round(q.top)}}})}(o,r);t=i;const{isStart:s,pointLength:l}=i;return s&&(e=i,a=void 0,n=1<l?i:void 0),Object.assign(Object.assign({},i),{prevInput:a,startMultiInput:n,startInput:e})}}}function On(a){const{length:t}=a;if(0<t){if(t===1){const{clientX:n,clientY:r}=a[0];return {x:Math.round(n),y:Math.round(r)}}const e=a.reduce((n,r)=>(n.x+=r[ue],n.y+=r[be],n),{x:0,y:0});return {x:Math.round(e.x/t),y:Math.round(e.y/t)}}}function Pn(a,t,e,n){const r={};for(const i in e)["target","currentTarget","type"].includes(i)||(r[i]=e[i]);let o;return document.createEvent?(o=document.createEvent("HTMLEvents"),o.initEvent(a,n?.bubbles,n?.cancelable)):o=new Event(a,n),Object.assign(o,r,{match:()=>e.targets&&0<e.targets.length&&e.targets.every(i=>o.currentTarget.contains(i))}),t.dispatchEvent(o)}function ba(a,t){const{preventDefault:e}=t;return n=e,Object.prototype.toString.call(n)==="[object Function]"?e(a):!!e;var n;}const Dn=["touchstart","touchmove","touchend","touchcancel","mousedown"],Hn=["mousemove","mouseup"],ha={domEvents:{bubbles:true,cancelable:true},preventDefault:a=>{if(a.target&&"tagName"in a.target){const{tagName:t}=a.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(t)}return  false}};let ga=class extends sa{constructor(t,e){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=t,this.c={},this.__options=Object.assign(Object.assign({},ha),e);const n=function(o){const i=Rn();return function(s){const l=[],c=[];Array.from(s.touches).forEach(({clientX:d,clientY:u,target:g})=>{o?.contains(g)&&(l.push(g),c.push({clientX:d,clientY:u,target:g}));});const f=Array.from(s.changedTouches).map(({clientX:d,clientY:u,target:g})=>({clientX:d,clientY:u,target:g}));return i({phase:s.type.replace("touch",""),changedPoints:f,points:c,nativeEvent:s,target:s.target,targets:l})}}(this.el),r=function(){let o,i=false,s=null;const l=Rn();return function(c){const{clientX:f,clientY:d,type:u,button:g,target:w}=c;let b,h=[{clientX:f,clientY:d,target:w}];if(u==="mousedown"&&g===0)s=w,i=true,b="start";else {if(!i)return;u==="mousemove"?b="move":u==="mouseup"&&(h=[],b="end",i=false);}const v=o||[{clientX:f,clientY:d,target:w}];if(o=[{clientX:f,clientY:d,target:w}],b!==void 0)return l({phase:b,changedPoints:v,points:h,target:s,targets:[s],nativeEvent:c})}}();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:r,mousemove:r,mouseup:r},this.on("at:after",o=>{const{target:i,__type:s}=o,{domEvents:l}=this.__options;l&&this.el!==void 0&&i&&(Pn(s,i,o,l),Pn("at:after",i,o,l));}),t!==void 0){t.style.webkitTapHighlightColor="rgba(0,0,0,0)";let o=false;try{const i={};Object.defineProperty(i,"passive",{get(){o=!0;}}),window.addEventListener("_",()=>{},i);}catch{}this.on("u",function(i,s,l){return Dn.forEach(c=>{i.addEventListener(c,s,l);}),Hn.forEach(c=>{window.addEventListener(c,s,l);}),()=>{Dn.forEach(c=>{i.removeEventListener(c,s);}),Hn.forEach(c=>{window.removeEventListener(c,s);});}}(t,this.catchEvent.bind(this),this.__options.preventDefault===false&&o?{passive:true}:{passive:false}));}}use(t,e){this.__pluginContexts.push(t(this,e));}catchEvent(t){const e=this.__inputCreatorMap[t.type](t);if(e!==void 0){const n=()=>t.stopPropagation(),r=()=>t.stopImmediatePropagation(),o=()=>t.preventDefault();if(ba(t,this.__options))o();else if(t.type==="touchstart"?this.__isIgnoreMouse=true:t.type==="touchmove"&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&t.type.startsWith("mouse"))return void(t.type==="mouseup"&&(this.__isIgnoreMouse=false));this.emit("input",e),this.emit2(`at:${e.phase}`,e,{});const i={};this.__computeFunctionList.forEach(s=>{const l=s(e,i);if(l!==void 0)for(const c in l)i[c]=l[c];}),this.emit("computed",Object.assign(Object.assign(Object.assign({},e),i),{stopPropagation:n,stopImmediatePropagation:r,preventDefault:o}));}}compute(t,e){for(const n of t)this.__computeFunctionCreatorList.includes(n)||(this.__computeFunctionCreatorList.push(n),this.__computeFunctionList.push(n()));this.on("computed",e);}beforeEach(t){super.beforeEach((e,n)=>{var r;!((r=this.c)===null||r===void 0)&&r.name?t(e,n):n();});}get(t){return this.__pluginContexts.find(e=>t===e.name)}set(t){this.__options=Object.assign(Object.assign({},this.__options),t);}emit2(t,e,n){this.c=n,this.emit(t,Object.assign(Object.assign({},e),{type:t}),()=>{this.emit("at:after",Object.assign(Object.assign({},e),{name:t,__type:t}));});}destroy(){this.emit("u"),super.destroy();}};var Ut=a=>Math.sqrt(a.x*a.x+a.y*a.y),ma=(a,t)=>a.x*t.x+a.y*t.y,ya=(a,t)=>{var e=Ut(a)*Ut(t);if(e===0)return 0;var n=ma(a,t)/e;return n>1&&(n=1),Math.acos(n)},xa=(a,t)=>a.x*t.y-t.x*a.y,or=a=>a/Math.PI*180,Bn=(a,t)=>{var e=ya(a,t);return xa(a,t)>0&&(e*=-1),or(e)},ar=(a,t)=>{if(a!==0||t!==0)return Math.abs(a)>=Math.abs(t)?0<a?da:fa:0<t?pa:rr};function wa(){let a=0,t=0;return function(e,n){const{prevVecotr:r,startVecotr:o,activeVecotr:i}=n;return i&&(t=Math.round(Bn(i,r)),a=Math.round(Bn(i,o))),{angle:a,deltaAngle:t}}}function va(){return function(a){const{prevInput:t}=a;let e=0,n=0,r=0;if(t!==void 0&&(e=a.x-t.x,n=a.y-t.y,e!==0||n!==0)){const o=Math.sqrt(Math.pow(e,2)+Math.pow(n,2));r=Math.round(or(Math.acos(Math.abs(e)/o)));}return {deltaX:e,deltaY:n,deltaXYAngle:r}}}function Ie(){let a,t=0,e=0,n=0,r=0,o=0;return function(i){const{phase:s,startInput:l}=i;return $e===s?(t=0,e=0,n=0,r=0,o=0):ca===s&&(t=Math.round(i.points[0][ue]-l.points[0][ue]),e=Math.round(i.points[0][be]-l.points[0][be]),n=Math.abs(t),r=Math.abs(e),o=Math.round(Ut({x:n,y:r})),a=ar(t,e)),{displacementX:t,displacementY:e,distanceX:n,distanceY:r,distance:o,overallDirection:a}}}function Aa(){let a=1;return function(t,e){let n=1;const{prevVecotr:r,startVecotr:o,activeVecotr:i}=e;return i&&(n=_n(Ut(i)/Ut(r)),a=_n(Ut(i)/Ut(o))),{scale:a,deltaScale:n}}}function ir(){let a,t,e=0,n=0,r=0,o=0;return function(i){if(i!==void 0){t=t||i.startInput;const s=i.timestamp-t.timestamp;if(la<s){const l=i.x-t.x,c=i.y-t.y;r=Math.round(l/s*100)/100,o=Math.round(c/s*100)/100,e=Math.abs(r),n=Math.abs(o),a=ar(l,c),t=i;}}return {velocityX:e,velocityY:n,speedX:r,speedY:o,direction:a}}}function sr(){let a=0;return function(t){const{phase:e}=t;return $e===e&&(a=t.pointLength),{maxPointLength:a}}}function ze(a){return {x:a.points[1][ue]-a.points[0][ue],y:a.points[1][be]-a.points[0][be]}}function lr(){let a,t,e;return function(n){const{prevInput:r,startMultiInput:o}=n;return o!==void 0&&r!==void 0&&n.id!==o.id&&1<r.pointLength&&1<n.pointLength?(a=ze(o),t=ze(r),e=ze(n)):e=void 0,{startVecotr:a,prevVecotr:t,activeVecotr:e}}}const Ea={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function on(a,t){const e=se(Ea,t);let n,r,o,i=0;function s(){i=0,n=void 0,r=void 0;}return a.compute([Ie,sr],l=>{if(he(e))return;const{phase:c,x:f,y:d}=l;ie===c&&(e.state=0,function(){const{startInput:u,pointLength:g,timestamp:w}=l,b=w-u.timestamp,{distance:h,maxPointLength:v}=l;return v===e.pointLength&&g===0&&e.maxDistance>=h&&e.maxPressTime>b}()?(clearTimeout(o),function(u,g){if(n!==void 0){const w=Ut({x:u.x-n.x,y:u.y-n.y});return n=u,g.maxDistanceFromPrevTap>=w}return n=u,true}({x:f,y:d},e)&&function(u){const g=performance.now();if(r===void 0)return r=g,true;{const w=g-r;return r=g,w<u}}(e.waitNextTapTime)?i++:i=1,i%e.tapTimes==0?(e.state=1,a.emit2(e.name,l,e),s()):o=setTimeout(()=>{e.state=2,s();},e.waitNextTapTime)):(s(),e.state=2));}),e}const Ta={name:"pan",threshold:10,pointLength:1};function cr(a,t){const e=se(Ta,t);return a.compute([ir,Ie,va],n=>{if(Le(e),he(e))return;const r=function(){const{pointLength:o,distance:i}=n;return e.pointLength===o&&e.threshold<=i}();if(e.state=nn(r,e.state,n.phase),r||rn(e.state)){const{name:o}=e;a.emit2(o,n,e),a.emit2(o+en(e.state),n,e),![ie,tn].includes(n.phase)&&n.direction&&a.emit2(o+n.direction,n,e);}}),e}const Sa={name:"swipe",threshold:10,velocity:.3,pointLength:1};function fr(a,t){const e=se(Sa,t);return a.compute([Ie,ir,sr],n=>{if(e.state=0,!e.disabled&&function(){if(ie!==n.phase)return  false;const{velocityX:r,velocityY:o,distance:i,maxPointLength:s}=n;return s===e.pointLength&&n.points.length===0&&e.threshold<i&&e.velocity<Math.max(r,o)}()){const{name:r}=e;e.state=1,a.emit2(r,n,e),a.emit2(r+n.direction,n,e);}}),e}const Ca={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function dr(a,t){const e=se(Ca,t);let n=0;return a.compute([Ie],r=>{if(he(e))return;const{phase:o,startInput:i,pointLength:s}=r;if($e===o&&e.pointLength===s)Le(e),clearTimeout(n),n=setTimeout(()=>{e.state=1,a.emit2(e.name,r,e);},e.minPressTime);else if(ie===o&&e.state===1)a.emit2(`${e.name}${rr}`,r,e);else if(e.state!==1){const l=r.timestamp-i.timestamp;(!function(){const{distance:c}=r;return c&&e.maxDistance>c}()||e.minPressTime>l&&[ie,tn].includes(o))&&(clearTimeout(n),e.state=2);}}),e}const ka={name:"pinch",threshold:0,pointLength:2};function pr(a,t){const e=se(ka,t);return a.compute([lr,Aa],n=>{if(Le(e),he(e))return;const r=function(){const{pointLength:s,scale:l,deltaScale:c,phase:f}=n;return e.pointLength===s&&e.threshold<Math.abs(l-1)}();e.state=nn(r,e.state,n.phase);const{name:o}=e;if(r||rn(e.state)){a.emit2(o,n,e);const{deltaScale:s}=n;s!==1&&a.emit2(o+(1<s?"in":"out"),n,e);}const i=en(e.state);i&&a.emit2(o+i,n,e);}),e}const Ma={name:"rotate",threshold:0,pointLength:2};function ur(a,t){const e=se(Ma,t);return a.compute([lr,wa],n=>{if(he(e))return;Le(e);const r=function(){const{pointLength:s,angle:l}=n;return e.pointLength===s&&e.threshold<Math.abs(l)}();e.state=nn(r,e.state,n.phase);const{name:o}=e;(r||rn(e.state))&&a.emit2(o,n,e);const i=en(e.state);i&&a.emit2(o+i,n,e);}),e}function $a(a){a.use(on,{name:"doubletap",tapTimes:2});const t=a.get("doubletap");let e;return a.beforeEach((n,r)=>{n==="tap"?(clearTimeout(e),e=setTimeout(()=>{[0,2].includes(t.state)&&r();},300)):r();}),t}class Et extends ga{constructor(t,e){super(t,e),this.use(on),this.use(cr),this.use(fr),this.use(dr),this.use(pr),this.use(ur);}}Et.STATE_POSSIBLE=0,Et.STATE_START=4,Et.STATE_MOVE=5,Et.STATE_END=1,Et.STATE_CANCELLED=3,Et.STATE_FAILED=2,Et.STATE_RECOGNIZED=1,Et.tap=on,Et.pan=cr,Et.swipe=fr,Et.press=dr,Et.rotate=ur,Et.pinch=pr,Et.doubletap=$a;class La{isWin(t){return typeof t!="object"||t instanceof Node?false:t===globalThis||t===window||t===self||t===V.globalThis||t===V.window||t===V.self||typeof unsafeWindow<"u"&&t===unsafeWindow?true:t?.Math?.toString()==="[object Math]"}isDOM(t){return t instanceof Node}delete(t,e){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(t,e):delete t[e];}assign(t={},e={},n=false){let r=this;if(e==null)return t;if(t==null&&(t={}),Array.isArray(e)&&!e.filter(i=>typeof i=="object").length)return e;if(n)for(const o in e){let s=t[o],l=e[o];if(typeof l=="object"&&l!=null&&o in t&&!r.isDOM(l)){t[o]=r.assign(s,l,n);continue}t[o]=l;}else for(const o in t)if(o in e){let i=t[o],s=e[o];if(typeof s=="object"&&s!=null&&!r.isDOM(s)&&Object.keys(s).length){t[o]=r.assign(i,s,n);continue}t[o]=s;}return t}getRandomGUID(){return typeof V.globalThis?.crypto?.randomUUID=="function"?V.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})}contains(t,e){if(arguments.length===1)return this.contains(V.document.body||V.document.documentElement,arguments[0]);if(e==null)return  false;if(typeof e[Symbol.iterator]=="function"){let n=true;for(const r of e)if(!t.contains(r)){n=false;break}return n}else return t.contains(e)}formatTime(t=new Date,e="yyyy-MM-dd HH:mm:ss"){let n=t==null?new Date:new Date(t);function r(s){return s<10?"0"+s:s}function o(s){return s>12?s-12:s}let i={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(o(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(i).forEach(function(s){let l=new RegExp(s,"g");e=e.replace(l,i[s]);}),e}formatByteToSize(t,e=true){if(t=parseInt(t.toString()),isNaN(t))throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB",o={};o.B=1,o.KB=1024,o.MB=o.KB*o.KB,o.GB=o.MB*o.KB,o.TB=o.GB*o.KB,o.PB=o.TB*o.KB,o.EB=o.PB*o.KB,o.ZB=o.EB*o.KB,o.YB=o.ZB*o.KB,o.BB=o.YB*o.KB,o.NB=o.BB*o.KB,o.DB=o.NB*o.KB;for(let i in o)if(n=t/o[i],r=i,o.KB>=n)break;return n=n.toFixed(2),n=e?n+r.toString():parseFloat(n.toString()),n}AnyTouch=()=>Et;isPhone(t=V.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(t)}setTimeout(t,e=0){try{return ia(t,e)}catch{return globalThis.setTimeout(t,e)}}clearTimeout(t){try{t!=null&&oa(t);}catch{}finally{globalThis.clearTimeout(t);}}setInterval(t,e=0){try{return aa(t,e)}catch{return globalThis.setInterval(t,e)}}clearInterval(t){try{t!=null&&ra(t);}catch{}finally{globalThis.clearInterval(t);}}}const D=new La,Q={getSafeHTML(a){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:e=>e}).createHTML(a):a},setSafeHTML(a,t){a.innerHTML=this.getSafeHTML(t);}};class Ia{on(t,e,n,r,o){function i(b,h,v){let E=b[h];return typeof E=="boolean"?(v.capture=E,typeof b[h+1]=="boolean"&&(v.once=b[h+1]),typeof b[h+2]=="boolean"&&(v.passive=b[h+2])):typeof E=="object"&&("capture"in E||"once"in E||"passive"in E||"isComposedPath"in E)&&(v.capture=E.capture,v.once=E.once,v.passive=E.passive,v.isComposedPath=E.isComposedPath),v}let s=this,l=arguments;if(typeof t=="string"&&(t=s.selectorAll(t)),t==null)return;let c=[];t instanceof NodeList||Array.isArray(t)?(t=t,c=[...t]):c.push(t);let f=[];Array.isArray(e)?f=f.concat(e.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof e=="string"&&(f=f.concat(e.split(" ").filter(b=>b!=="")));let d=[];Array.isArray(n)?d=d.concat(n.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof n=="string"&&d.push(n);let u=r,g={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(u=n,g=i(l,3,g)):g=i(l,4,g);function w(){g.once&&s.off(t,e,n,r,o);}c.forEach(b=>{function h(v){if(d.length){let E=g.isComposedPath?v.composedPath()[0]:v.target,T=b;if(D.isWin(T)&&T===V.document&&(T=V.document.documentElement),d.find(C=>{if(s.matches(E,C))return  true;let I=s.closest(E,C);return I&&T?.contains(I)?(E=I,true):false})){try{tr.Object.defineProperty(v,"target",{get(){return E}});}catch{}u.call(E,v,E),w();}}else u.call(b,v),w();}f.forEach(v=>{b.addEventListener(v,h,g);let E=Reflect.get(b,de)||{};E[v]=E[v]||[],E[v].push({selector:d,option:g,callback:h,originCallBack:u}),Reflect.set(b,de,E);});});}off(t,e,n,r,o,i){function s(h,v,E){let T=h[v];return typeof T=="boolean"?E.capture=T:typeof T=="object"&&"capture"in T&&(E.capture=T.capture),E}let l=this,c=arguments;if(typeof t=="string"&&(t=l.selectorAll(t)),t==null)return;let f=[];t instanceof NodeList||Array.isArray(t)?(t=t,f=[...t]):f.push(t);let d=[];Array.isArray(e)?d=d.concat(e.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof e=="string"&&(d=d.concat(e.split(" ").filter(h=>h!=="")));let u=[];Array.isArray(n)?u=u.concat(n.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof n=="string"&&u.push(n);let g=r,w={capture:false};typeof n=="function"?(g=n,w=s(c,3,w)):w=s(c,4,w);let b=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(b=true),f.forEach(h=>{let v=Reflect.get(h,de)||{};d.forEach(E=>{let T=v[E]||[];typeof i=="function"&&(T=T.filter(i));for(let S=0;S<T.length;S++){let C=T[S],I=true;I&&g&&C.originCallBack!==g&&(I=false),I&&u.length&&Array.isArray(C.selector)&&JSON.stringify(C.selector)!==JSON.stringify(u)&&(I=false),I&&w.capture!==C.option.capture&&(I=false),(I||b)&&(h.removeEventListener(E,C.callback,C.option),T.splice(S--,1));}T.length===0&&D.delete(v,e);}),Reflect.set(h,de,v);});}offAll(t,e){if(typeof t=="string"&&(t=V.document.querySelectorAll(t)),t==null)return;let n=[];t instanceof NodeList||Array.isArray(t)?n=[...t]:n.push(t);let r=[];Array.isArray(e)?r=r.concat(e):typeof e=="string"&&(r=r.concat(e.split(" "))),n.forEach(o=>{Object.getOwnPropertySymbols(o).forEach(i=>{if(!i.toString().startsWith("Symbol(events_"))return;let s=o[i]||{};(r.length?r:Object.keys(s)).forEach(c=>{let f=s[c];if(f){for(const d of f)o.removeEventListener(c,d.callback,{capture:d.option.capture});D.delete(o[i],c);}});});});}ready(t){if(typeof t!="function")return;function e(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return  false}}function n(){i(),t();}let r=[{target:V.document,eventType:"DOMContentLoaded",callback:n},{target:V.window,eventType:"load",callback:n}];function o(){for(let s=0;s<r.length;s++){let l=r[s];l.target.addEventListener(l.eventType,l.callback);}}function i(){for(let s=0;s<r.length;s++){let l=r[s];l.target.removeEventListener(l.eventType,l.callback);}}e()?D.setTimeout(t,0):o();}trigger(t,e,n,r=true){if(typeof t=="string"&&(t=V.document.querySelector(t)),t==null)return;let o=[];t instanceof NodeList||Array.isArray(t)?(t=t,o=[...t]):o=[t];let i=[];Array.isArray(e)?i=e:typeof e=="string"&&(i=e.split(" ")),o.forEach(s=>{let l=s[de]||{};i.forEach(c=>{let f=null;n&&n instanceof Event?f=n:(f=new Event(c),n&&Object.keys(n).forEach(d=>{f[d]=n[d];})),r==false&&c in l?l[c].forEach(d=>{d.callback(f);}):s.dispatchEvent(f);});});}click(t,e,n,r){let o=this;typeof t=="string"&&(t=V.document.querySelector(t)),t!=null&&(e==null?o.trigger(t,"click",n,r):o.on(t,"click",null,e));}blur(t,e,n,r){let o=this;typeof t=="string"&&(t=V.document.querySelector(t)),t!=null&&(e===null?o.trigger(t,"blur",n,r):o.on(t,"blur",null,e));}focus(t,e,n,r){let o=this;typeof t=="string"&&(t=V.document.querySelector(t)),t!=null&&(e==null?o.trigger(t,"focus",n,r):o.on(t,"focus",null,e));}hover(t,e,n){let r=this;typeof t=="string"&&(t=V.document.querySelector(t)),t!=null&&(r.on(t,"mouseenter",null,e,n),r.on(t,"mouseleave",null,e,n));}keyup(t,e,n){let r=this;t!=null&&(typeof t=="string"&&(t=V.document.querySelector(t)),r.on(t,"keyup",null,e,n));}keydown(t,e,n){let r=this;t!=null&&(typeof t=="string"&&(t=V.document.querySelector(t)),r.on(t,"keydown",null,e,n));}keypress(t,e,n){let r=this;t!=null&&(typeof t=="string"&&(t=V.document.querySelector(t)),r.on(t,"keypress",null,e,n));}preventEvent(t,e=[],n){function r(o){return o?.preventDefault(),o?.stopPropagation(),o?.stopImmediatePropagation(),false}if(arguments.length===1)return r(arguments[0]);typeof e=="string"&&(e=[e]),e.forEach(o=>{t.addEventListener(o,r,{capture:!!n});});}selector(t){return this.selectorAll(t)[0]}selectorAll(t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),Array.from(V.document.querySelectorAll(t)).filter(e=>e?.innerHTML?.trim()==="");if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];return t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(V.document.querySelectorAll(t)).filter(r=>(r?.textContent||r?.innerText)?.includes(n))}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),o="";r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),o=r[3]);let i=new RegExp(n,o);return t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(V.document.querySelectorAll(t)).filter(s=>!!(s?.textContent||s?.innerText)?.match(i))}else return Array.from(V.document.querySelectorAll(t))}matches(t,e){if(e=e.trim(),t==null)return  false;if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),t.matches(e)&&t?.innerHTML?.trim()==="";if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let r=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=t?.textContent||t?.innerText;return typeof o!="string"&&(o=""),t.matches(e)&&o?.includes(r)}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);let s=new RegExp(r,i);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=t?.textContent||t?.innerText;return typeof l!="string"&&(l=""),t.matches(e)&&!!l?.match(s)}else return t.matches(e)}closest(t,e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi)){e=e.replace(/:empty$/gi,"");let n=t?.closest(e);return n&&n?.innerHTML?.trim()===""?n:null}else if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let r=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=t?.closest(e);if(o){let i=t?.textContent||t?.innerText;if(typeof i=="string"&&i.includes(r))return o}return null}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);let s=new RegExp(r,i);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=t?.closest(e);if(l){let c=t?.textContent||t?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return t?.closest(e)}}class _a extends Ia{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(t,e=true){let n=t.getBoundingClientRect(),r=t.ownerDocument.defaultView;return new DOMRect(e?parseFloat((n.left+(r?.pageXOffset||0)).toString()):n.left,e?parseFloat((n.top+(r?.pageYOffset||0)).toString()):n.top,n.width,n.height)}width(t,e=false,n){let r=this;if(typeof t=="string"&&(t=V.document.querySelector(t)),t!=null){if(D.isWin(t))return V.window.document.documentElement.clientWidth;if(t.nodeType===9)return t=t,Math.max(t.body.scrollWidth,t.documentElement.scrollWidth,t.body.offsetWidth,t.documentElement.offsetWidth,t.documentElement.clientWidth);if(e||!e&&p.isShow(t)){if(t=t,parseFloat(p.getStyleValue(t,"width").toString())>0)return parseFloat(p.getStyleValue(t,"width").toString());if(t.offsetWidth>0){let o=p.getStyleValue(t,"borderLeftWidth"),i=p.getStyleValue(t,"borderRightWidth"),s=p.getStyleValue(t,"paddingLeft"),l=p.getStyleValue(t,"paddingRight"),c=parseFloat(t.offsetWidth.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {t=t;let{cloneNode:o,recovery:i}=p.showElement(t,n),s=r.width(o,true,n);return i(),s}}}height(t,e=false,n){let r=this;if(D.isWin(t))return V.window.document.documentElement.clientHeight;if(typeof t=="string"&&(t=V.document.querySelector(t)),t!=null){if(t.nodeType===9)return t=t,Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.documentElement.clientHeight);if(e||!e&&p.isShow(t)){if(t=t,parseFloat(p.getStyleValue(t,"height").toString())>0)return parseFloat(p.getStyleValue(t,"height").toString());if(t.offsetHeight>0){let o=p.getStyleValue(t,"borderTopWidth"),i=p.getStyleValue(t,"borderBottomWidth"),s=p.getStyleValue(t,"paddingTop"),l=p.getStyleValue(t,"paddingBottom"),c=parseFloat(t.offsetHeight.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {t=t;let{cloneNode:o,recovery:i}=p.showElement(t,n),s=r.height(o,true,n);return i(),s}}}outerWidth(t,e=false,n){let r=this;if(D.isWin(t))return V.window.innerWidth;if(typeof t=="string"&&(t=V.document.querySelector(t)),t!=null)if(t=t,e||!e&&p.isShow(t)){let o=getComputedStyle(t,null),i=p.getStyleValue(o,"marginLeft"),s=p.getStyleValue(o,"marginRight");return t.offsetWidth+i+s}else {let{cloneNode:o,recovery:i}=p.showElement(t,n),s=r.outerWidth(o,true,n);return i(),s}}outerHeight(t,e=false,n){let r=this;if(D.isWin(t))return V.window.innerHeight;if(typeof t=="string"&&(t=V.document.querySelector(t)),t!=null)if(t=t,e||!e&&p.isShow(t)){let o=getComputedStyle(t,null),i=p.getStyleValue(o,"marginTop"),s=p.getStyleValue(o,"marginBottom");return t.offsetHeight+i+s}else {let{cloneNode:o,recovery:i}=p.showElement(t,n),s=r.outerHeight(o,true,n);return i(),s}}addClassName(t,e){typeof e=="string"&&e.trim()!==""&&t.classList.add(e);}removeClassName(t,e){typeof e=="string"&&e.trim()!==""&&t.classList.remove(e);}containsClassName(t,e){return typeof e!="string"||e.trim()===""?false:t.classList.contains(e)}css(t,e,n){function r(i,s){let l=["width","height","top","left","right","bottom","font-size"];return typeof s=="number"&&(s=s.toString()),typeof s=="string"&&l.includes(i)&&s.match(/[0-9]$/gi)&&(s=s+"px"),s}if(typeof t=="string"&&(t=V.document.querySelector(t)),t==null)return;let o=(i,s)=>{typeof s=="string"&&s.trim().endsWith("!important")?(s=s.trim().replace(/!important$/gi,"").trim(),t.style.setProperty(i,s,"important")):(s=r(i,s),t.style.setProperty(i,s));};if(typeof e=="string"){if(n==null)return getComputedStyle(t).getPropertyValue(e);o(e,n);}else if(typeof e=="object")for(let i in e){let s=e[i];o(i,s);}}createElement(t,e,n){let r=V.document.createElement(t);return typeof e=="string"?(Q.setSafeHTML(r,e),r):(e==null&&(e={}),n==null&&(n={}),Object.keys(e).forEach(o=>{let i=e[o];if(o==="innerHTML"){Q.setSafeHTML(r,i);return}r[o]=i;}),Object.keys(n).forEach(o=>{let i=n[o];typeof i=="object"?i=JSON.stringify(i):typeof i=="function"&&(i=i.toString()),r.setAttribute(o,i);}),r)}parseTextToDOM(t){return t=t.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),this.createElement("div",{innerHTML:t}).firstChild}getTextBoundingRect(t,e,n,r){if(!t||!("value"in t))return t;if(typeof e=="string"&&(e=parseFloat(e)),(typeof e!="number"||isNaN(e))&&(e=0),e<0?e=0:e=Math.min(t.value.length,e),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<e)&&(n=e),n<0?n=0:n=Math.min(t.value.length,n),typeof t.createTextRange=="function"){var o=t.createTextRange();return o.collapse(true),o.moveStart("character",e),o.moveEnd("character",n-e),o.getBoundingClientRect()}var i=C(),s=i.top,l=i.left,c=I("width",true),f=I("height",true),d="white-space:pre;padding:0;margin:0;",u=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];s+=I("padding-top",true),s+=I("border-top-width",true),l+=I("padding-left",true),l+=I("border-left-width",true),l+=1;for(var g=0;g<u.length;g++){var w=u[g];d+=w+":"+I(w)+";";}var b=t.value||"G",h=b.length,v=document.createElement("div");e>0&&S(0,e);var E=S(e,n);h>n&&S(n,h),v.style.cssText=d,v.style.position="absolute",v.style.top=s+"px",v.style.left=l+"px",v.style.width=c+"px",v.style.height=f+"px",V.document.body.appendChild(v);var T=E.getBoundingClientRect();return r||v.parentNode.removeChild(v),T;function S(q,j){var J=document.createElement("span");return J.style.cssText=d,J.textContent=b.substring(q,j),v.appendChild(J),J}function C(){var q=document.body,j=document.defaultView,J=document.documentElement,Z=document.createElement("div");Z.style.paddingLeft=Z.style.width="1px",q.appendChild(Z);var lt=Z.offsetWidth==2;q.removeChild(Z),Z=t.getBoundingClientRect();var k=J.clientTop||q.clientTop||0,x=J.clientLeft||q.clientLeft||0,m=j.pageYOffset||lt&&J.scrollTop||q.scrollTop,y=j.pageXOffset||lt&&J.scrollLeft||q.scrollLeft;return {top:Z.top+m-k,left:Z.left+y-x}}function I(q,j){var J=V.document.defaultView.getComputedStyle(t,null).getPropertyValue(q);return j?parseFloat(J):J}}cssHide(t,e=false){t!=null&&(e?t.classList.add("pops-hide-important"):t.classList.add("pops-hide"));}cssShow(t){t!=null&&(t.classList.remove("pops-hide-important"),t.classList.remove("pops-hide"));}parseHTML(t,e=false,n=false){function r(){let i=new DOMParser;return n?i.parseFromString(t,"text/html"):i.parseFromString(t,"text/html").body.firstChild}function o(){let i=V.document.createElement("div");return Q.setSafeHTML(i,t),n?i:i.firstChild}return e?r():o()}append(t,e){if(typeof t=="string"&&(t=V.document.querySelector(t)),t==null)return;function n(r,o){typeof e=="string"?r.insertAdjacentHTML("beforeend",Q.getSafeHTML(o)):r.appendChild(o);}if(Array.isArray(e)||e instanceof NodeList){let r=V.document.createDocumentFragment();e.forEach(o=>{typeof o=="string"&&(o=this.parseHTML(o,true,false)),r.appendChild(o);}),t.appendChild(r);}else n(t,e);}appendHead(t){V.document.head?V.document.head.appendChild(t):V.document.documentElement.appendChild(t);}appendBody(t){V.document.body?V.document.body.appendChild(t):V.document.documentElement.appendChild(t);}isShow(t){return !!t.getClientRects().length}showElement(t,e){let n=t.cloneNode(true);n.setAttribute("style","visibility: hidden !important;display:block !important;");let r=V.document.documentElement,o=t.getRootNode();return e==null?o==t?r=V.document.documentElement:r=o:r=e,r.appendChild(n),{cloneNode:n,recovery(){n.remove();}}}getStyleValue(t,e){let n=null,r=null;t instanceof CSSStyleDeclaration?r=t:(n=t.ownerDocument.defaultView,(!n||!n.opener)&&(n=window),r=n.getComputedStyle(t));let o=parseFloat(r[e]);return isNaN(o)?0:o}before(t,e){typeof t=="string"&&(t=V.document.querySelector(t)),t!=null&&(typeof e=="string"?t.insertAdjacentHTML("beforebegin",Q.getSafeHTML(e)):t.parentElement.insertBefore(e,t));}after(t,e){typeof t=="string"&&(t=V.document.querySelector(t)),t!=null&&(typeof e=="string"?t.insertAdjacentHTML("afterend",Q.getSafeHTML(e)):t.parentElement.insertBefore(e,t.nextSibling));}getKeyFrames(t){let e={};return Object.keys(t.cssRules).forEach(n=>{t.cssRules[n].type===7&&t.cssRules[n].name.startsWith("pops-anim-")&&(e[t.cssRules[n].name]=t.cssRules[n]);}),e}}const p=new _a,mt={alert:[],confirm:[],drawer:[],folder:[],iframe:[],loading:[],panel:[],prompt:[],rightClickMenu:[],tooltip:[]};var Ra=`@charset "utf-8";\r
.pops * {\r
	-webkit-box-sizing: border-box;\r
	box-sizing: border-box;\r
	margin: 0;\r
	padding: 0;\r
	-webkit-tap-highlight-color: transparent;\r
	/* 代替::-webkit-scrollbar */\r
	scrollbar-width: thin;\r
}\r
.pops {\r
	--pops-bg-opacity: 1;\r
	--pops-bd-opacity: 1;\r
	--pops-font-size: 16px;\r
	interpolate-size: allow-keywords;\r
	--pops-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	--pops-bd-color: rgb(235, 238, 245, var(--pops-bd-opacity));\r
	--pops-box-shadow-color: rgba(0, 0, 0, 0.12);\r
	--pops-title-color: #000000;\r
	--pops-title-border-color: rgb(229, 229, 229, var(--pops-bd-opacity));\r
	--pops-content-color: #000000;\r
	--pops-bottom-btn-controls-border-color: rgb(\r
		229,\r
		229,\r
		229,\r
		var(--pops-bd-opacity)\r
	);\r
}\r
@media (prefers-color-scheme: dark) {\r
	.pops {\r
		--pops-mask-bg-opacity: 0.8;\r
		--pops-bg-color: rgb(17, 17, 17, var(--pops-bg-opacity));\r
		--pops-bd-color: rgb(55, 55, 55, var(--pops-bd-opacity));\r
		--pops-box-shadow-color: rgba(81, 81, 81, 0.12);\r
		--pops-title-color: #e8e8e8;\r
		--pops-title-border-color: rgb(229, 229, 229, var(--pops-bd-opacity));\r
		--pops-content-color: #e5e5e5;\r
	}\r
}\r
.pops {\r
	background-color: var(--pops-bg-color);\r
	border: 1px solid var(--pops-bd-color);\r
	border-radius: 4px;\r
	font-size: var(--pops-font-size);\r
	line-height: normal;\r
	box-shadow: 0 0 12px var(--pops-box-shadow-color);\r
	box-sizing: border-box;\r
	overflow: hidden;\r
	transition: all 0.35s;\r
	display: flex;\r
	flex-direction: column;\r
}\r
.pops-anim {\r
	position: fixed;\r
	top: 0;\r
	right: 0;\r
	bottom: 0;\r
	left: 0;\r
	width: 100%;\r
	height: 100%;\r
}\r
.pops-anim[anim=""] {\r
	top: unset;\r
	right: unset;\r
	bottom: unset;\r
	left: unset;\r
	width: unset;\r
	height: unset;\r
	transition: none;\r
}\r
/* 底部图标动画和样式 */\r
.pops i.pops-bottom-icon[is-loading="true"] {\r
	animation: rotating 2s linear infinite;\r
}\r
.pops i.pops-bottom-icon {\r
	height: 1em;\r
	width: 1em;\r
	line-height: normal;\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	fill: currentColor;\r
	color: inherit;\r
	font-size: inherit;\r
}\r
\r
/* 遮罩层样式 */\r
.pops-mask {\r
	--pops-mask-bg-opacity: 0.4;\r
	--pops-mask-bg-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));\r
}\r
.pops-mask {\r
	position: fixed;\r
	top: 0;\r
	right: 0;\r
	bottom: 0;\r
	left: 0;\r
	width: 100%;\r
	height: 100%;\r
	border: 0;\r
	border-radius: 0;\r
	background-color: var(--pops-mask-bg-color);\r
	box-shadow: none;\r
	transition: none;\r
}\r
\r
.pops-header-controls button.pops-header-control[type][data-header] {\r
	float: right;\r
	margin: 0 0;\r
	outline: 0;\r
	border: 0;\r
	border-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r
	background-color: transparent;\r
	color: #888;\r
	cursor: pointer;\r
}\r
.pops-header-controls button.pops-header-control[type="max"],\r
.pops-header-controls button.pops-header-control[type="mise"],\r
.pops-header-controls button.pops-header-control[type="min"] {\r
	outline: 0 !important;\r
	border: 0;\r
	border-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r
	background-color: transparent;\r
	color: rgb(136, 136, 136);\r
	cursor: pointer;\r
	transition: all 0.3s ease-in-out;\r
}\r
button.pops-header-control i {\r
	color: rgb(144, 147, 153);\r
	font-size: inherit;\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	fill: currentColor;\r
}\r
button.pops-header-control svg {\r
	height: 1.25em;\r
	width: 1.25em;\r
}\r
button.pops-header-control {\r
	right: 15px;\r
	padding: 0;\r
	border: none;\r
	outline: 0;\r
	background: 0 0;\r
	cursor: pointer;\r
	position: unset;\r
	line-height: normal;\r
}\r
button.pops-header-control i:hover {\r
	color: rgb(64, 158, 255);\r
}\r
.pops-header-controls[data-margin] button.pops-header-control {\r
	margin: 0 6px;\r
	display: flex;\r
	align-items: center;\r
}\r
.pops[type-value] .pops-header-controls {\r
	display: flex;\r
	gap: 6px;\r
}\r
\r
/* 代码块 <code> */\r
.pops code {\r
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\r
	font-size: 0.85em;\r
	color: #000;\r
	background-color: #f0f0f0;\r
	border-radius: 3px;\r
	border: 0;\r
	padding: 0.2em 0;\r
	white-space: normal;\r
	background: #f5f5f5;\r
	text-wrap: wrap;\r
	text-align: left;\r
	word-spacing: normal;\r
	word-break: normal;\r
	word-wrap: normal;\r
	line-height: 1.4;\r
	-moz-tab-size: 8;\r
	-o-tab-size: 8;\r
	tab-size: 8;\r
	-webkit-hyphens: none;\r
	-moz-hyphens: none;\r
	-ms-hyphens: none;\r
	hyphens: none;\r
	direction: ltr;\r
}\r
\r
.pops code::before,\r
.pops code::after {\r
	letter-spacing: -0.2em;\r
	content: "\\00a0";\r
}\r
\r
/* 标题 */\r
.pops .pops-title {\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
	border-bottom: 1px solid var(--pops-title-border-color);\r
	width: 100%;\r
	height: var(--container-title-height);\r
}\r
/* 标题-普通文本 */\r
.pops .pops-title p[pops] {\r
	color: var(--pops-title-color);\r
	width: 100%;\r
	overflow: hidden;\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
}\r
\r
/* 内容 */\r
.pops .pops-content {\r
	width: 100%;\r
	/*height: calc(\r
		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r
	);*/\r
	flex: 1;\r
	overflow: auto;\r
	word-break: break-word;\r
}\r
/* 内容-普通文本 */\r
.pops .pops-content p[pops] {\r
	color: var(--pops-content-color);\r
	padding: 5px 10px;\r
	text-indent: 15px;\r
}\r
\r
/* 底部-按钮组 */\r
.pops .pops-botttom-btn-controls {\r
	display: flex;\r
	padding: 10px 10px 10px 10px;\r
	width: 100%;\r
	height: var(--container-bottom-btn-height);\r
	max-height: var(--container-bottom-btn-height);\r
	line-height: normal;\r
	border-top: 1px solid var(--pops-bottom-btn-controls-border-color);\r
	text-align: right;\r
	align-items: center;\r
}\r
`,Oa=`.pops[position="top_left"] {\r
	position: fixed;\r
	top: 0;\r
	left: 0;\r
}\r
.pops[position="top"] {\r
	position: fixed;\r
	top: 0;\r
	left: 50%;\r
	transform: translateX(-50%);\r
}\r
.pops[position="top_right"] {\r
	position: fixed;\r
	top: 0;\r
	right: 0;\r
}\r
.pops[position="center_left"] {\r
	position: fixed;\r
	top: 50%;\r
	left: 0;\r
	transform: translateY(-50%);\r
}\r
.pops[position="center"] {\r
	position: fixed;\r
	top: 50%;\r
	left: 50%;\r
	transform: translate(-50%, -50%);\r
}\r
.pops[position="center_right"] {\r
	position: fixed;\r
	top: 50%;\r
	right: 0;\r
	transform: translateY(-50%);\r
}\r
.pops[position="bottom_left"] {\r
	position: fixed;\r
	bottom: 0;\r
	left: 0;\r
}\r
.pops[position="bottom"] {\r
	position: fixed;\r
	bottom: 0;\r
	left: 50%;\r
	transform: translate(-50%, 0);\r
}\r
.pops[position="bottom_right"] {\r
	position: fixed;\r
	right: 0;\r
	bottom: 0;\r
}\r
`,Pa=`/* firefox上暂不支持::-webkit-scrollbar */\r
.pops ::-webkit-scrollbar {\r
	width: 6px;\r
	height: 0;\r
}\r
\r
.pops ::-webkit-scrollbar-track {\r
	width: 0;\r
}\r
.pops ::-webkit-scrollbar-thumb:hover {\r
	background: rgb(178, 178, 178, var(--pops-bg-opacity));\r
}\r
.pops ::-webkit-scrollbar-thumb {\r
	min-height: 28px;\r
	border-radius: 2em;\r
	background: rgb(204, 204, 204, var(--pops-bg-opacity));\r
	background-clip: padding-box;\r
}\r
`,Da=`.pops {\r
	--button-font-size: 14px;\r
	--button-height: 32px;\r
	--button-color: rgb(51, 51, 51);\r
	--button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r
	--button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r
	--button-margin-top: 0px;\r
	--button-margin-bottom: 0px;\r
	--button-margin-left: 5px;\r
	--button-margin-right: 5px;\r
	--button-padding-top: 6px;\r
	--button-padding-bottom: 6px;\r
	--button-padding-left: 12px;\r
	--button-padding-right: 12px;\r
	--button-radius: 4px;\r
\r
	--container-title-height: 55px;\r
	--container-bottom-btn-height: 55px;\r
\r
	/* default按钮 */\r
	--button-default-color: #333333;\r
	--button-default-bd-color: #dcdfe6;\r
	--button-default-bg-color: #ffffff;\r
	--button-default-active-color: #409eff;\r
	--button-default-active-bd-color: #409eff;\r
	--button-default-active-bg-color: #ecf5ff;\r
	--button-default-hover-color: #409eff;\r
	--button-default-hover-bd-color: #c6e2ff;\r
	--button-default-hover-bg-color: #ecf5ff;\r
	--button-default-focus-visible-outline-color: #a0cfff;\r
	--button-default-focus-visible-outline: 2px solid\r
		var(--button-default-focus-visible-outline-color);\r
	--button-default-focus-visible-outline-offset: 1px;\r
	--button-default-disabled-color: #a8abb2;\r
	--button-default-disabled-bd-color: #ffffff;\r
	--button-default-disabled-bg-color: #e4e7ed;\r
\r
	/* primary按钮 */\r
	--button-primary-color: #ffffff;\r
	--button-primary-bd-color: #409eff;\r
	--button-primary-bg-color: #409eff;\r
	--button-primary-active-color: #ffffff;\r
	--button-primary-active-bd-color: #337ecc;\r
	--button-primary-active-bg-color: #337ecc;\r
	--button-primary-hover-color: #ffffff;\r
	--button-primary-hover-bd-color: #79bbff;\r
	--button-primary-hover-bg-color: #79bbff;\r
	--button-primary-focus-visible-outline-color: #a0cfff;\r
	--button-primary-focus-visible-outline: 2px solid\r
		var(--button-primary-focus-visible-outline-color);\r
	--button-primary-focus-visible-outline-offset: 1px;\r
	--button-primary-disabled-color: #ffffff80;\r
	--button-primary-disabled-bd-color: #a0cfff;\r
	--button-primary-disabled-bg-color: #a0cfff;\r
\r
	/* success按钮 */\r
	--button-success-color: #ffffff;\r
	--button-success-bd-color: #4cae4c;\r
	--button-success-bg-color: #5cb85c;\r
	--button-success-active-color: #ffffff;\r
	--button-success-active-bd-color: #529b2e;\r
	--button-success-active-bg-color: #529b2e;\r
	--button-success-hover-color: #ffffff;\r
	--button-success-hover-bd-color: #95d475;\r
	--button-success-hover-bg-color: #95d475;\r
	--button-success-focus-visible-outline-color: #b3e19d;\r
	--button-success-focus-visible-outline: 2px solid\r
		var(--button-success-focus-visible-outline-color);\r
	--button-success-focus-visible-outline-offset: 1px;\r
	--button-success-disabled-color: #ffffff80;\r
	--button-success-disabled-bd-color: #b3e19d;\r
	--button-success-disabled-bg-color: #b3e19d;\r
\r
	/* info按钮 */\r
	--button-info-color: #ffffff;\r
	--button-info-bd-color: #909399;\r
	--button-info-bg-color: #909399;\r
	--button-info-active-color: #ffffff;\r
	--button-info-active-bd-color: #73767a;\r
	--button-info-active-bg-color: #73767a;\r
	--button-info-hover-color: #ffffff;\r
	--button-info-hover-bd-color: #b1b3b8;\r
	--button-info-hover-bg-color: #b1b3b8;\r
	--button-info-focus-visible-outline-color: #c8c9cc;\r
	--button-info-focus-visible-outline: 2px solid\r
		var(--button-info-focus-visible-outline-color);\r
	--button-info-focus-visible-outline-offset: 1px;\r
	--button-info-disabled-color: #ffffff80;\r
	--button-info-disabled-bd-color: #c8c9cc;\r
	--button-info-disabled-bg-color: #c8c9cc;\r
\r
	/* warning按钮 */\r
	--button-warning-color: #ffffff;\r
	--button-warning-bd-color: #e6a23c;\r
	--button-warning-bg-color: #e6a23c;\r
	--button-warning-active-color: #ffffff;\r
	--button-warning-active-bd-color: #b88230;\r
	--button-warning-active-bg-color: #b88230;\r
	--button-warning-hover-color: #ffffff80;\r
	--button-warning-hover-bd-color: #eebe77;\r
	--button-warning-hover-bg-color: #eebe77;\r
	--button-warning-focus-visible-outline-color: #f3d19e;\r
	--button-warning-focus-visible-outline: 2px solid\r
		var(--button-warning-focus-visible-outline-color);\r
	--button-warning-focus-visible-outline-offset: 1px;\r
	--button-warning-disabled-color: #ffffff80;\r
	--button-warning-disabled-bd-color: #f3d19e;\r
	--button-warning-disabled-bg-color: #f3d19e;\r
\r
	/* danger按钮 */\r
	--button-danger-color: #ffffff;\r
	--button-danger-bd-color: #f56c6c;\r
	--button-danger-bg-color: #f56c6c;\r
	--button-danger-active-color: #ffffff;\r
	--button-danger-active-bd-color: #c45656;\r
	--button-danger-active-bg-color: #c45656;\r
	--button-danger-hover-color: #ffffff;\r
	--button-danger-hover-bd-color: #f89898;\r
	--button-danger-hover-bg-color: #f89898;\r
	--button-danger-focus-visible-outline-color: #fab6b6;\r
	--button-danger-focus-visible-outline: 2px solid\r
		var(--button-danger-focus-visible-outline-color);\r
	--button-danger-focus-visible-outline-offset: 1px;\r
	--button-danger-disabled-color: #ffffff80;\r
	--button-danger-disabled-bd-color: #fab6b6;\r
	--button-danger-disabled-bg-color: #fab6b6;\r
\r
	/* xiaomi-primary按钮 */\r
	--button-xiaomi-primary-color: #ffffff;\r
	--button-xiaomi-primary-bd-color: #ff5c00;\r
	--button-xiaomi-primary-bg-color: #ff5c00;\r
	--button-xiaomi-primary-active-color: #ffffff;\r
	--button-xiaomi-primary-active-bd-color: #da4f00;\r
	--button-xiaomi-primary-active-bg-color: #da4f00;\r
	--button-xiaomi-primary-hover-color: #ffffff;\r
	--button-xiaomi-primary-hover-bd-color: #ff7e29;\r
	--button-xiaomi-primary-hover-bg-color: #ff7e29;\r
	--button-xiaomi-primary-focus-visible-outline-color: #ffa061;\r
	--button-xiaomi-primary-focus-visible-outline: 2px solid\r
		var(--button-xiaomi-primary-focus-visible-outline-color);\r
	--button-xiaomi-primary-focus-visible-outline-offset: 1px;\r
	--button-xiaomi-primary-disabled-color: #ffffff80;\r
	--button-xiaomi-primary-disabled-bd-color: #fad5b6;\r
	--button-xiaomi-primary-disabled-bg-color: #fad5b6;\r
\r
	/* violet按钮 */\r
	--button-violet-color: #ffffff;\r
	--button-violet-bd-color: #626aef;\r
	--button-violet-bg-color: #626aef;\r
	--button-violet-active-color: #ffffff;\r
	--button-violet-active-bd-color: #8188f2;\r
	--button-violet-active-bg-color: #8188f2;\r
	--button-violet-hover-color: #ffffff;\r
	--button-violet-hover-bd-color: #4b50ad;\r
	--button-violet-hover-bg-color: #4b50ad;\r
	--button-violet-focus-visible-outline-color: #2a598a;\r
	--button-violet-focus-visible-outline: 2px solid\r
		var(--button-violet-focus-visible-outline-color);\r
	--button-violet-focus-visible-outline-offset: 1px;\r
	--button-violet-disabled-color: #ffffff80;\r
	--button-violet-disabled-bd-color: #3b3f82;\r
	--button-violet-disabled-bg-color: #3b3f82;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
	.pops {\r
		/* default按钮 */\r
		--button-default-color: #cfd3dc;\r
		--button-default-bd-color: #4c4d4f;\r
		--button-default-bg-color: transparent;\r
		--button-default-active-color: #409eff;\r
		--button-default-active-bd-color: #409eff;\r
		--button-default-active-bg-color: #18222c;\r
		--button-default-hover-color: #409eff;\r
		--button-default-hover-bd-color: #213d5b;\r
		--button-default-hover-bg-color: #18222c;\r
		--button-default-focus-visible-outline-color: #2a598a;\r
		--button-default-focus-visible-outline: 2px solid\r
			var(--button-default-focus-visible-outline-color);\r
		--button-default-focus-visible-outline-offset: 1px;\r
		--button-default-disabled-color: #ffffff80;\r
		--button-default-disabled-bd-color: #414243;\r
		--button-default-disabled-bg-color: transparent;\r
\r
		/* primary按钮 */\r
		--button-primary-color: #ffffff;\r
		--button-primary-bd-color: #409eff;\r
		--button-primary-bg-color: #409eff;\r
		--button-primary-active-color: #ffffff;\r
		--button-primary-active-bd-color: #66b1ff;\r
		--button-primary-active-bg-color: #66b1ff;\r
		--button-primary-hover-color: #ffffff;\r
		--button-primary-hover-bd-color: #3375b9;\r
		--button-primary-hover-bg-color: #3375b9;\r
		--button-primary-focus-visible-outline-color: #2a598a;\r
		--button-primary-focus-visible-outline: 2px solid\r
			var(--button-primary-focus-visible-outline-color);\r
		--button-primary-focus-visible-outline-offset: 1px;\r
		--button-primary-disabled-color: #ffffff80;\r
		--button-primary-disabled-bd-color: #2a598a;\r
		--button-primary-disabled-bg-color: #2a598a;\r
\r
		/* success按钮 */\r
		--button-success-color: #ffffff;\r
		--button-success-bd-color: #67c23a;\r
		--button-success-bg-color: #67c23a;\r
		--button-success-active-color: #ffffff;\r
		--button-success-active-bd-color: #85ce61;\r
		--button-success-active-bg-color: #85ce61;\r
		--button-success-hover-color: #ffffff;\r
		--button-success-hover-bd-color: #4e8e2f;\r
		--button-success-hover-bg-color: #4e8e2f;\r
		--button-success-focus-visible-outline-color: #3e6b27;\r
		--button-success-focus-visible-outline: 2px solid\r
			var(--button-success-focus-visible-outline-color);\r
		--button-success-focus-visible-outline-offset: 1px;\r
		--button-success-disabled-color: #ffffff80;\r
		--button-success-disabled-bd-color: #3e6b27;\r
		--button-success-disabled-bg-color: #3e6b27;\r
\r
		/* info按钮 */\r
		--button-info-color: #ffffff;\r
		--button-info-bd-color: #909399;\r
		--button-info-bg-color: #909399;\r
		--button-info-active-color: #ffffff;\r
		--button-info-active-bd-color: #a6a9ad;\r
		--button-info-active-bg-color: #a6a9ad;\r
		--button-info-hover-color: #ffffff;\r
		--button-info-hover-bd-color: #6b6d71;\r
		--button-info-hover-bg-color: #6b6d71;\r
		--button-info-focus-visible-outline-color: #525457;\r
		--button-info-focus-visible-outline: 2px solid\r
			var(--button-info-focus-visible-outline-color);\r
		--button-info-focus-visible-outline-offset: 1px;\r
		--button-info-disabled-color: #ffffff80;\r
		--button-info-disabled-bd-color: #525457;\r
		--button-info-disabled-bg-color: #525457;\r
\r
		/* warning按钮 */\r
		--button-warning-color: #ffffff;\r
		--button-warning-bd-color: #e6a23c;\r
		--button-warning-bg-color: #e6a23c;\r
		--button-warning-active-color: #ffffff;\r
		--button-warning-active-bd-color: #ebb563;\r
		--button-warning-active-bg-color: #ebb563;\r
		--button-warning-hover-color: #ffffff80;\r
		--button-warning-hover-bd-color: #a77730;\r
		--button-warning-hover-bg-color: #a77730;\r
		--button-warning-focus-visible-outline-color: #7d5b28;\r
		--button-warning-focus-visible-outline: 2px solid\r
			var(--button-warning-focus-visible-outline-color);\r
		--button-warning-focus-visible-outline-offset: 1px;\r
		--button-warning-disabled-color: #ffffff80;\r
		--button-warning-disabled-bd-color: #7d5b28;\r
		--button-warning-disabled-bg-color: #7d5b28;\r
\r
		/* danger按钮 */\r
		--button-danger-color: #ffffff;\r
		--button-danger-bd-color: #f56c6c;\r
		--button-danger-bg-color: #f56c6c;\r
		--button-danger-active-color: #ffffff;\r
		--button-danger-active-bd-color: #f78989;\r
		--button-danger-active-bg-color: #f78989;\r
		--button-danger-hover-color: #ffffff;\r
		--button-danger-hover-bd-color: #b25252;\r
		--button-danger-hover-bg-color: #b25252;\r
		--button-danger-focus-visible-outline-color: #854040;\r
		--button-danger-focus-visible-outline: 2px solid\r
			var(--button-danger-focus-visible-outline-color);\r
		--button-danger-focus-visible-outline-offset: 1px;\r
		--button-danger-disabled-color: #ffffff80;\r
		--button-danger-disabled-bd-color: #854040;\r
		--button-danger-disabled-bg-color: #854040;\r
	}\r
}\r
.pops[data-bottom-btn="false"] {\r
	--container-bottom-btn-height: 0px;\r
}\r
.pops button {\r
	white-space: nowrap;\r
	float: right;\r
	display: inline-block;\r
	margin: var(--button-margin-top) var(--button-margin-right)\r
		var(--button-margin-bottom) var(--button-margin-left);\r
	padding: var(--button-padding-top) var(--button-padding-right)\r
		var(--button-padding-bottom) var(--button-padding-left);\r
	outline: 0;\r
}\r
.pops button[data-has-icon="false"] .pops-bottom-icon {\r
	display: none;\r
}\r
.pops button {\r
	border-radius: var(--button-radius);\r
	box-shadow: none;\r
	font-weight: 400;\r
	font-size: var(--button-font-size);\r
	cursor: pointer;\r
	transition: all 0.3s ease-in-out;\r
}\r
.pops button {\r
	display: flex;\r
	align-items: center;\r
	height: var(--button-height);\r
	line-height: normal;\r
	box-sizing: border-box;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	border: 1px solid var(--button-bd-color);\r
}\r
.pops button {\r
	color: var(--button-color);\r
	border-color: var(--button-bd-color);\r
	background-color: var(--button-bg-color);\r
}\r
.pops button:active {\r
	color: var(--button-color);\r
	border-color: var(--button-bd-color);\r
	background-color: var(--button-bg-color);\r
	outline: 0;\r
}\r
.pops button:hover {\r
	color: var(--button-color);\r
	border-color: var(--button-bd-color);\r
	background-color: var(--button-bg-color);\r
}\r
.pops button:focus-visible {\r
	color: var(--button-color);\r
	border-color: var(--button-bd-color);\r
	background-color: var(--button-bg-color);\r
}\r
.pops button:disabled {\r
	cursor: not-allowed;\r
	color: var(--button-color);\r
	border-color: var(--button-bd-color);\r
	background-color: var(--button-bg-color);\r
}\r
.pops button.pops-button-large {\r
	--button-height: 32px;\r
	--button-padding-top: 12px;\r
	--button-padding-bottom: 12px;\r
	--button-padding-left: 19px;\r
	--button-padding-right: 19px;\r
	--button-font-size: 14px;\r
	--button-border-radius: 4px;\r
}\r
\r
.pops button.pops-button-small {\r
	--button-height: 24px;\r
	--button-padding-top: 5px;\r
	--button-padding-bottom: 5px;\r
	--button-padding-left: 11px;\r
	--button-padding-right: 11px;\r
	--button-font-size: 12px;\r
	--button-border-radius: 4px;\r
}\r
.pops-panel-button-no-icon .pops-panel-button_inner i {\r
	display: none;\r
}\r
.pops-panel-button-right-icon {\r
}\r
.pops-panel-button-right-icon .pops-panel-button_inner {\r
	flex-direction: row-reverse;\r
}\r
.pops-panel-button-right-icon .pops-panel-button_inner i {\r
}\r
.pops-panel-button .pops-panel-button_inner i:has(svg),\r
.pops-panel-button-right-icon .pops-panel-button-text {\r
	margin-right: 6px;\r
}\r
\r
.pops button[type="default"] {\r
	--button-color: var(--button-default-color);\r
	--button-bd-color: var(--button-default-bd-color);\r
	--button-bg-color: var(--button-default-bg-color);\r
}\r
.pops button[type="default"]:active {\r
	--button-color: var(--button-default-active-color);\r
	--button-bd-color: var(--button-default-active-bd-color);\r
	--button-bg-color: var(--button-default-active-bg-color);\r
}\r
.pops button[type="default"]:hover {\r
	--button-color: var(--button-default-hover-color);\r
	--button-bd-color: var(--button-default-hover-bd-color);\r
	--button-bg-color: var(--button-default-hover-bg-color);\r
}\r
.pops button[type="default"]:focus-visible {\r
	outline: var(--button-default-focus-visible-outline);\r
	outline-offset: var(--button-default-focus-visible-outline-offset);\r
}\r
.pops button[type="default"]:disabled {\r
	--button-color: var(--button-default-disabled-color);\r
	--button-bd-color: var(--button-default-disabled-bd-color);\r
	--button-bg-color: var(--button-default-disabled-bg-color);\r
}\r
\r
.pops button[type="primary"] {\r
	--button-color: var(--button-primary-color);\r
	--button-bd-color: var(--button-primary-bd-color);\r
	--button-bg-color: var(--button-primary-bg-color);\r
}\r
.pops button[type="primary"]:active {\r
	--button-color: var(--button-primary-active-color);\r
	--button-bd-color: var(--button-primary-active-bd-color);\r
	--button-bg-color: var(--button-primary-active-bg-color);\r
}\r
.pops button[type="primary"]:hover {\r
	--button-color: var(--button-primary-hover-color);\r
	--button-bd-color: var(--button-primary-hover-bd-color);\r
	--button-bg-color: var(--button-primary-hover-bg-color);\r
}\r
.pops button[type="primary"]:focus-visible {\r
	outline: var(--button-primary-focus-visible-outline);\r
	outline-offset: var(--button-primary-focus-visible-outline-offset);\r
}\r
.pops button[type="primary"]:disabled {\r
	--button-color: var(--button-primary-disabled-color);\r
	--button-bd-color: var(--button-primary-disabled-bd-color);\r
	--button-bg-color: var(--button-primary-disabled-bg-color);\r
}\r
\r
.pops button[type="success"] {\r
	--button-color: var(--button-success-color);\r
	--button-bd-color: var(--button-success-bd-color);\r
	--button-bg-color: var(--button-success-bg-color);\r
}\r
.pops button[type="success"]:active {\r
	--button-color: var(--button-success-active-color);\r
	--button-bd-color: var(--button-success-active-bd-color);\r
	--button-bg-color: var(--button-success-active-bg-color);\r
}\r
.pops button[type="success"]:hover {\r
	--button-color: var(--button-success-hover-color);\r
	--button-bd-color: var(--button-success-hover-bd-color);\r
	--button-bg-color: var(--button-success-hover-bg-color);\r
}\r
.pops button[type="success"]:focus-visible {\r
	outline: var(--button-success-focus-visible-outline);\r
	outline-offset: var(--button-success-focus-visible-outline-offset);\r
}\r
.pops button[type="success"]:disabled {\r
	--button-color: var(--button-success-disabled-color);\r
	--button-bd-color: var(--button-success-disabled-bd-color);\r
	--button-bg-color: var(--button-success-disabled-bg-color);\r
}\r
\r
.pops button[type="info"] {\r
	--button-color: var(--button-info-color);\r
	--button-bd-color: var(--button-info-bd-color);\r
	--button-bg-color: var(--button-info-bg-color);\r
}\r
.pops button[type="info"]:active {\r
	--button-color: var(--button-info-active-color);\r
	--button-bd-color: var(--button-info-active-bd-color);\r
	--button-bg-color: var(--button-info-active-bg-color);\r
}\r
.pops button[type="info"]:hover {\r
	--button-color: var(--button-info-hover-color);\r
	--button-bd-color: var(--button-info-hover-bd-color);\r
	--button-bg-color: var(--button-info-hover-bg-color);\r
}\r
.pops button[type="info"]:focus-visible {\r
	outline: var(--button-info-focus-visible-outline);\r
	outline-offset: var(--button-info-focus-visible-outline-offset);\r
}\r
.pops button[type="info"]:disabled {\r
	--button-color: var(--button-success-disabled-color);\r
	--button-bd-color: var(--button-success-disabled-bd-color);\r
	--button-bg-color: var(--button-success-disabled-bg-color);\r
}\r
\r
.pops button[type="warning"] {\r
	--button-color: var(--button-warning-color);\r
	--button-bd-color: var(--button-warning-bd-color);\r
	--button-bg-color: var(--button-warning-bg-color);\r
}\r
.pops button[type="warning"]:active {\r
	--button-color: var(--button-warning-active-color);\r
	--button-bd-color: var(--button-warning-active-bd-color);\r
	--button-bg-color: var(--button-warning-active-bg-color);\r
}\r
.pops button[type="warning"]:hover {\r
	--button-color: var(--button-warning-hover-color);\r
	--button-bd-color: var(--button-warning-hover-bd-color);\r
	--button-bg-color: var(--button-warning-hover-bg-color);\r
}\r
.pops button[type="warning"]:focus-visible {\r
	outline: var(--button-warning-focus-visible-outline);\r
	outline-offset: var(--button-warning-focus-visible-outline-offset);\r
}\r
.pops button[type="warning"]:disabled {\r
	--button-color: var(--button-success-disabled-color);\r
	--button-bd-color: var(--button-success-disabled-bd-color);\r
	--button-bg-color: var(--button-success-disabled-bg-color);\r
}\r
\r
.pops button[type="danger"] {\r
	--button-color: var(--button-danger-color);\r
	--button-bd-color: var(--button-danger-bd-color);\r
	--button-bg-color: var(--button-danger-bg-color);\r
}\r
.pops button[type="danger"]:active {\r
	--button-color: var(--button-danger-active-color);\r
	--button-bd-color: var(--button-danger-active-bd-color);\r
	--button-bg-color: var(--button-danger-active-bg-color);\r
}\r
.pops button[type="danger"]:hover {\r
	--button-color: var(--button-danger-hover-color);\r
	--button-bd-color: var(--button-danger-hover-bd-color);\r
	--button-bg-color: var(--button-danger-hover-bg-color);\r
}\r
.pops button[type="danger"]:focus-visible {\r
	outline: var(--button-danger-focus-visible-outline);\r
	outline-offset: var(--button-danger-focus-visible-outline-offset);\r
}\r
.pops button[type="danger"]:disabled {\r
	--button-color: var(--button-success-disabled-color);\r
	--button-bd-color: var(--button-success-disabled-bd-color);\r
	--button-bg-color: var(--button-success-disabled-bg-color);\r
}\r
\r
.pops button[type="xiaomi-primary"] {\r
	--button-color: var(--button-xiaomi-primary-color);\r
	--button-bd-color: var(--button-xiaomi-primary-bd-color);\r
	--button-bg-color: var(--button-xiaomi-primary-bg-color);\r
}\r
.pops button[type="xiaomi-primary"]:active {\r
	--button-color: var(--button-xiaomi-primary-active-color);\r
	--button-bd-color: var(--button-xiaomi-primary-active-bd-color);\r
	--button-bg-color: var(--button-xiaomi-primary-active-bg-color);\r
}\r
.pops button[type="xiaomi-primary"]:hover {\r
	--button-color: var(--button-xiaomi-primary-hover-color);\r
	--button-bd-color: var(--button-xiaomi-primary-hover-bd-color);\r
	--button-bg-color: var(--button-xiaomi-primary-hover-bg-color);\r
}\r
.pops button[type="xiaomi-primary"]:focus-visible {\r
	outline: var(--button-xiaomi-primary-focus-visible-outline);\r
	outline-offset: var(--button-xiaomi-primary-focus-visible-outline-offset);\r
}\r
.pops button[type="xiaomi-primary"]:disabled {\r
	--button-color: var(--button-success-disabled-color);\r
	--button-bd-color: var(--button-success-disabled-bd-color);\r
	--button-bg-color: var(--button-success-disabled-bg-color);\r
}\r
`,Ha=`.pops-flex-items-center {\r
	display: flex;\r
	align-items: center;\r
}\r
.pops-flex-y-center {\r
	display: flex;\r
	justify-content: space-between;\r
}\r
.pops-flex-x-center {\r
	display: flex;\r
	align-content: center;\r
}\r
.pops-hide {\r
	display: none;\r
}\r
.pops-hide-important {\r
	display: none !important;\r
}\r
.pops-no-border {\r
	border: 0;\r
}\r
.pops-no-border-important {\r
	border: 0 !important;\r
}\r
.pops-user-select-none {\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-ms-user-select: none;\r
	-moz-user-select: none;\r
}\r
.pops-line-height-center {\r
	line-height: normal;\r
	align-content: center;\r
}\r
.pops-width-fill {\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
}\r
`,Ba=`@keyframes rotating {\r
	0% {\r
		transform: rotate(0);\r
	}\r
	to {\r
		transform: rotate(360deg);\r
	}\r
}\r
@keyframes iframeLoadingChange_85 {\r
	0% {\r
		background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r
	}\r
	20% {\r
		background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r
	}\r
	40% {\r
		background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r
	}\r
	60% {\r
		background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r
	}\r
	80% {\r
		background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r
	}\r
	100% {\r
		background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r
	}\r
	from {\r
		width: 75%;\r
	}\r
	to {\r
		width: 100%;\r
	}\r
}\r
@keyframes iframeLoadingChange {\r
	0% {\r
		background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r
	}\r
	20% {\r
		background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r
	}\r
	40% {\r
		background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r
	}\r
	60% {\r
		background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r
	}\r
	80% {\r
		background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r
	}\r
	100% {\r
		background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r
	}\r
	from {\r
		width: 0;\r
	}\r
	to {\r
		width: 75%;\r
	}\r
}\r
\r
@keyframes searchSelectFalIn {\r
	from {\r
		opacity: 0;\r
		display:none;\r
	}\r
	to {\r
		display:block;\r
		opacity: 1;\r
	}\r
}\r
@keyframes searchSelectFalOut {\r
	from {\r
		display:block;\r
		opacity: 1;\r
	}\r
	to {\r
		opacity: 0;\r
		display:none;\r
	}\r
}\r
\r
@keyframes pops-anim-wait-rotate {\r
	form {\r
		transform: rotate(0);\r
	}\r
	to {\r
		transform: rotate(360deg);\r
	}\r
}\r
@keyframes pops-anim-spread {\r
	0% {\r
		opacity: 0;\r
		transform: scaleX(0);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: scaleX(1);\r
	}\r
}\r
@keyframes pops-anim-shake {\r
	0%,\r
	100% {\r
		transform: translateX(0);\r
	}\r
	10%,\r
	30%,\r
	50%,\r
	70%,\r
	90% {\r
		transform: translateX(-10px);\r
	}\r
	20%,\r
	40%,\r
	60%,\r
	80% {\r
		transform: translateX(10px);\r
	}\r
}\r
@keyframes pops-anim-rolling-left {\r
	0% {\r
		opacity: 0;\r
		transform: translateX(-100%) rotate(-120deg);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateX(0) rotate(0);\r
	}\r
}\r
@keyframes pops-anim-rolling-right {\r
	0% {\r
		opacity: 0;\r
		transform: translateX(100%) rotate(120deg);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateX(0) rotate(0);\r
	}\r
}\r
@keyframes pops-anim-slide-top {\r
	0% {\r
		opacity: 0;\r
		transform: translateY(-200%);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateY(0);\r
	}\r
}\r
@keyframes pops-anim-slide-bottom {\r
	0% {\r
		opacity: 0;\r
		transform: translateY(200%);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateY(0);\r
	}\r
}\r
@keyframes pops-anim-slide-left {\r
	0% {\r
		opacity: 0;\r
		transform: translateX(-200%);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateX(0);\r
	}\r
}\r
@keyframes pops-anim-slide-right {\r
	0% {\r
		transform: translateX(200%);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateX(0);\r
	}\r
}\r
@keyframes pops-anim-fadein {\r
	0% {\r
		opacity: 0;\r
	}\r
	100% {\r
		opacity: 1;\r
	}\r
}\r
@keyframes pops-anim-fadein-zoom {\r
	0% {\r
		opacity: 0;\r
		transform: scale(0.5);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: scale(1);\r
	}\r
}\r
@keyframes pops-anim-fadein-alert {\r
	0% {\r
		transform: scale(0.5);\r
	}\r
	45% {\r
		transform: scale(1.05);\r
	}\r
	80% {\r
		transform: scale(0.95);\r
	}\r
	100% {\r
		transform: scale(1);\r
	}\r
}\r
@keyframes pops-anim-don {\r
	0% {\r
		opacity: 0;\r
		transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	2.08333% {\r
		transform: matrix3d(\r
			0.75266,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.76342,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	4.16667% {\r
		transform: matrix3d(\r
			0.81071,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.84545,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	6.25% {\r
		transform: matrix3d(\r
			0.86808,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.9286,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	8.33333% {\r
		transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	10.4167% {\r
		transform: matrix3d(\r
			0.96482,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.05202,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	12.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	14.5833% {\r
		transform: matrix3d(\r
			1.02563,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.09149,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	16.6667% {\r
		transform: matrix3d(\r
			1.04227,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.08453,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	18.75% {\r
		transform: matrix3d(\r
			1.05102,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.06666,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	20.8333% {\r
		transform: matrix3d(\r
			1.05334,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.04355,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	22.9167% {\r
		transform: matrix3d(\r
			1.05078,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.02012,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	25% {\r
		transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	27.0833% {\r
		transform: matrix3d(\r
			1.03699,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.98534,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	29.1667% {\r
		transform: matrix3d(\r
			1.02831,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.97688,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	31.25% {\r
		transform: matrix3d(\r
			1.01973,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.97422,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	33.3333% {\r
		transform: matrix3d(\r
			1.01191,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.97618,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	35.4167% {\r
		transform: matrix3d(\r
			1.00526,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.98122,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	37.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	39.5833% {\r
		transform: matrix3d(\r
			0.99617,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99433,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	41.6667% {\r
		transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	43.75% {\r
		transform: matrix3d(\r
			0.99237,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00413,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	45.8333% {\r
		transform: matrix3d(\r
			0.99202,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00651,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	47.9167% {\r
		transform: matrix3d(\r
			0.99241,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00726,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	50% {\r
		opacity: 1;\r
		transform: matrix3d(\r
			0.99329,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00671,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	52.0833% {\r
		transform: matrix3d(\r
			0.99447,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00529,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	54.1667% {\r
		transform: matrix3d(\r
			0.99577,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00346,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	56.25% {\r
		transform: matrix3d(\r
			0.99705,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.0016,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	58.3333% {\r
		transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	60.4167% {\r
		transform: matrix3d(\r
			0.99921,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99884,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	62.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	64.5833% {\r
		transform: matrix3d(\r
			1.00057,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99795,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	66.6667% {\r
		transform: matrix3d(\r
			1.00095,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99811,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	68.75% {\r
		transform: matrix3d(\r
			1.00114,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99851,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	70.8333% {\r
		transform: matrix3d(\r
			1.00119,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99903,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	72.9167% {\r
		transform: matrix3d(\r
			1.00114,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99955,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	75% {\r
		transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	77.0833% {\r
		transform: matrix3d(\r
			1.00083,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00033,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	79.1667% {\r
		transform: matrix3d(\r
			1.00063,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00052,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	81.25% {\r
		transform: matrix3d(\r
			1.00044,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00058,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	83.3333% {\r
		transform: matrix3d(\r
			1.00027,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00053,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	85.4167% {\r
		transform: matrix3d(\r
			1.00012,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00042,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	87.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	89.5833% {\r
		transform: matrix3d(\r
			0.99991,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00013,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	91.6667% {\r
		transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	93.75% {\r
		transform: matrix3d(\r
			0.99983,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99991,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	95.8333% {\r
		transform: matrix3d(\r
			0.99982,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99985,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	97.9167% {\r
		transform: matrix3d(\r
			0.99983,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99984,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
}\r
@keyframes pops-anim-roll {\r
	0% {\r
		transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r
	}\r
	100% {\r
		transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r
	}\r
}\r
@keyframes pops-anim-sandra {\r
	0% {\r
		opacity: 0;\r
		transform: scale3d(1.1, 1.1, 1);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: scale3d(1, 1, 1);\r
	}\r
}\r
@keyframes pops-anim-gather {\r
	0% {\r
		opacity: 0;\r
		transform: scale(5, 0);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: scale(1, 1);\r
	}\r
}\r
@keyframes pops-anim-spread-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: scaleX(1);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: scaleX(0);\r
	}\r
}\r
@keyframes pops-anim-shake-reverse {\r
	0%,\r
	100% {\r
		transform: translateX(10px);\r
	}\r
	10%,\r
	30%,\r
	50%,\r
	70%,\r
	90% {\r
		transform: translateX(-10px);\r
	}\r
	20%,\r
	40%,\r
	60%,\r
	80% {\r
		transform: translateX(0);\r
	}\r
}\r
@keyframes pops-anim-rolling-left-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: translateX(0) rotate(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: translateX(-100%) rotate(-120deg);\r
	}\r
}\r
@keyframes pops-anim-rolling-right-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: translateX(0) rotate(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: translateX(100%) rotate(120deg);\r
	}\r
}\r
@keyframes pops-anim-slide-top-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: translateY(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: translateY(-200%);\r
	}\r
}\r
@keyframes pops-anim-slide-bottom-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: translateY(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: translateY(200%);\r
	}\r
}\r
@keyframes pops-anim-slide-left-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: translateX(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: translateX(-200%);\r
	}\r
}\r
@keyframes pops-anim-slide-right-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: translateX(0);\r
	}\r
	100% {\r
		transform: translateX(200%);\r
	}\r
}\r
@keyframes pops-anim-fadein-reverse {\r
	0% {\r
		opacity: 1;\r
	}\r
	100% {\r
		opacity: 0;\r
	}\r
}\r
@keyframes pops-anim-fadein-zoom-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: scale(1);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: scale(0.5);\r
	}\r
}\r
@keyframes pops-anim-fadein-alert-reverse {\r
	0% {\r
		transform: scale(1);\r
	}\r
	45% {\r
		transform: scale(0.95);\r
	}\r
	80% {\r
		transform: scale(1.05);\r
	}\r
	100% {\r
		transform: scale(0.5);\r
	}\r
}\r
@keyframes pops-anim-don-reverse {\r
	100% {\r
		opacity: 0;\r
		transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	97.9167% {\r
		transform: matrix3d(\r
			0.75266,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.76342,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	95.8333% {\r
		transform: matrix3d(\r
			0.81071,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.84545,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	93.75% {\r
		transform: matrix3d(\r
			0.86808,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.9286,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	91.6667% {\r
		transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	89.5833% {\r
		transform: matrix3d(\r
			0.96482,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.05202,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	87.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	85.4167% {\r
		transform: matrix3d(\r
			1.02563,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.09149,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	83.3333% {\r
		transform: matrix3d(\r
			1.04227,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.08453,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	81.25% {\r
		transform: matrix3d(\r
			1.05102,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.06666,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	79.1667% {\r
		transform: matrix3d(\r
			1.05334,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.04355,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	77.0833% {\r
		transform: matrix3d(\r
			1.05078,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.02012,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	75% {\r
		transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	72.9167% {\r
		transform: matrix3d(\r
			1.03699,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.98534,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	70.8333% {\r
		transform: matrix3d(\r
			1.02831,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.97688,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	68.75% {\r
		transform: matrix3d(\r
			1.01973,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.97422,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	66.6667% {\r
		transform: matrix3d(\r
			1.01191,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.97618,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	64.5833% {\r
		transform: matrix3d(\r
			1.00526,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.98122,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	62.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	60.4167% {\r
		transform: matrix3d(\r
			0.99617,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99433,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	58.3333% {\r
		transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	56.25% {\r
		transform: matrix3d(\r
			0.99237,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00413,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	54.1667% {\r
		transform: matrix3d(\r
			0.99202,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00651,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	52.0833% {\r
		transform: matrix3d(\r
			0.99241,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00726,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	50% {\r
		opacity: 1;\r
		transform: matrix3d(\r
			0.99329,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00671,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	47.9167% {\r
		transform: matrix3d(\r
			0.99447,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00529,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	45.8333% {\r
		transform: matrix3d(\r
			0.99577,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00346,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	43.75% {\r
		transform: matrix3d(\r
			0.99705,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.0016,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	41.6667% {\r
		transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	39.5833% {\r
		transform: matrix3d(\r
			0.99921,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99884,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	37.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	35.4167% {\r
		transform: matrix3d(\r
			1.00057,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99795,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	33.3333% {\r
		transform: matrix3d(\r
			1.00095,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99811,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	31.25% {\r
		transform: matrix3d(\r
			1.00114,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99851,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	29.1667% {\r
		transform: matrix3d(\r
			1.00119,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99903,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	27.0833% {\r
		transform: matrix3d(\r
			1.00114,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99955,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	25% {\r
		transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	22.9167% {\r
		transform: matrix3d(\r
			1.00083,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00033,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	20.8333% {\r
		transform: matrix3d(\r
			1.00063,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00052,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	18.75% {\r
		transform: matrix3d(\r
			1.00044,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00058,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	16.6667% {\r
		transform: matrix3d(\r
			1.00027,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00053,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	14.5833% {\r
		transform: matrix3d(\r
			1.00012,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00042,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	12.5% {\r
		transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	10.4167% {\r
		transform: matrix3d(\r
			0.99991,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1.00013,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	8.33333% {\r
		transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
	}\r
	6.25% {\r
		transform: matrix3d(\r
			0.99983,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99991,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	4.16667% {\r
		transform: matrix3d(\r
			0.99982,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99985,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	2.08333% {\r
		transform: matrix3d(\r
			0.99983,\r
			0,\r
			0,\r
			0,\r
			0,\r
			0.99984,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1\r
		);\r
	}\r
	0% {\r
		opacity: 1;\r
		transform: matrix3d(\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0,\r
			1,\r
			0,\r
			0,\r
			0,\r
			0type=close,\r
			1\r
		);\r
	}\r
}\r
@keyframes pops-anim-roll-reverse {\r
	0% {\r
		transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r
	}\r
	100% {\r
		transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r
	}\r
}\r
@keyframes pops-anim-sandra-reverse {\r
	0% {\r
		opacity: 1;\r
		transform: scale3d(1, 1, 1);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: scale3d(1.1, 1.1, 1);\r
	}\r
}\r
@keyframes pops-anim-gather-reverse {\r
	0% {\r
		opacity: 0;\r
		transform: scale(5, 0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: scale(5, 0);\r
	}\r
}\r
\r
@-webkit-keyframes pops-motion-fadeInTop {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateY(-30px);\r
		transform: translateY(-30px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
	}\r
}\r
@keyframes pops-motion-fadeInTop {\r
	0% {\r
		opacity: 0;\r
		transform: translateY(-30px);\r
		-ms-transform: translateY(-30px);\r
	}\r
	100% {\r
		opacity: 1;\r
		transform: translateX(0);\r
		-ms-transform: translateX(0);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeOutTop {\r
	0% {\r
		opacity: 10;\r
		-webkit-transform: translateY(0);\r
		transform: translateY(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateY(-30px);\r
		transform: translateY(-30px);\r
	}\r
}\r
@keyframes pops-motion-fadeOutTop {\r
	0% {\r
		opacity: 1;\r
		transform: translateY(0);\r
		-ms-transform: translateY(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		transform: translateY(-30px);\r
		-ms-transform: translateY(-30px);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeInBottom {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateY(20px);\r
		transform: translateY(20px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateY(0);\r
		transform: translateY(0);\r
	}\r
}\r
@keyframes pops-motion-fadeInBottom {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateY(20px);\r
		transform: translateY(20px);\r
		-ms-transform: translateY(20px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateY(0);\r
		transform: translateY(0);\r
		-ms-transform: translateY(0);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeOutBottom {\r
	0% {\r
		opacity: 1;\r
		-webkit-transform: translateY(0);\r
		transform: translateY(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateY(20px);\r
		transform: translateY(20px);\r
	}\r
}\r
@keyframes pops-motion-fadeOutBottom {\r
	0% {\r
		opacity: 1;\r
		-webkit-transform: translateY(0);\r
		transform: translateY(0);\r
		-ms-transform: translateY(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateY(20px);\r
		transform: translateY(20px);\r
		-ms-transform: translateY(20px);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeInLeft {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateX(-20px);\r
		transform: translateX(-20px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
	}\r
}\r
@keyframes pops-motion-fadeInLeft {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateX(-30px);\r
		transform: translateX(-30px);\r
		-ms-transform: translateX(-30px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
		-ms-transform: translateX(0);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeOutLeft {\r
	0% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateX(-30px);\r
		transform: translateX(-30px);\r
	}\r
}\r
@keyframes pops-motion-fadeOutLeft {\r
	0% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
		-ms-transform: translateX(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateX(-20px);\r
		transform: translateX(-20px);\r
		-ms-transform: translateX(-20px);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeInRight {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateX(20px);\r
		transform: translateX(20px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
	}\r
}\r
@keyframes pops-motion-fadeInRight {\r
	0% {\r
		opacity: 0;\r
		-webkit-transform: translateX(20px);\r
		transform: translateX(20px);\r
		-ms-transform: translateX(20px);\r
	}\r
	100% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
		-ms-transform: translateX(0);\r
	}\r
}\r
@-webkit-keyframes pops-motion-fadeOutRight {\r
	0% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateX(20px);\r
		transform: translateX(20px);\r
	}\r
}\r
@keyframes pops-motion-fadeOutRight {\r
	0% {\r
		opacity: 1;\r
		-webkit-transform: translateX(0);\r
		transform: translateX(0);\r
		-ms-transform: translateX(0);\r
	}\r
	100% {\r
		opacity: 0;\r
		-webkit-transform: translateX(20px);\r
		transform: translateX(20px);\r
		-ms-transform: translateX(20px);\r
	}\r
}\r
\r
/* 动画 */\r
.pops-anim[anim="pops-anim-spread"] {\r
	animation: pops-anim-spread 0.3s;\r
}\r
.pops-anim[anim="pops-anim-shake"] {\r
	animation: pops-anim-shake 0.3s;\r
}\r
.pops-anim[anim="pops-anim-rolling-left"] {\r
	animation: pops-anim-rolling-left 0.3s;\r
}\r
.pops-anim[anim="pops-anim-rolling-right"] {\r
	animation: pops-anim-rolling-right 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-top"] {\r
	animation: pops-anim-slide-top 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-bottom"] {\r
	animation: pops-anim-slide-bottom 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-left"] {\r
	animation: pops-anim-slide-left 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-right"] {\r
	animation: pops-anim-slide-right 0.3s;\r
}\r
.pops-anim[anim="pops-anim-fadein"] {\r
	animation: pops-anim-fadein 0.3s;\r
}\r
.pops-anim[anim="pops-anim-fadein-zoom"] {\r
	animation: pops-anim-fadein-zoom 0.3s;\r
}\r
.pops-anim[anim="pops-anim-fadein-alert"] {\r
	animation: pops-anim-fadein-alert 0.3s;\r
}\r
.pops-anim[anim="pops-anim-don"] {\r
	animation: pops-anim-don 0.3s;\r
}\r
.pops-anim[anim="pops-anim-roll"] {\r
	animation: pops-anim-roll 0.3s;\r
}\r
.pops-anim[anim="pops-anim-sandra"] {\r
	animation: pops-anim-sandra 0.3s;\r
}\r
.pops-anim[anim="pops-anim-gather"] {\r
	animation: pops-anim-gather 0.3s;\r
}\r
.pops-anim[anim="pops-anim-spread-reverse"] {\r
	animation: pops-anim-spread-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-shake-reverse"] {\r
	animation: pops-anim-shake-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-rolling-left-reverse"] {\r
	animation: pops-anim-rolling-left-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-rolling-right-reverse"] {\r
	animation: pops-anim-rolling-right-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-top-reverse"] {\r
	animation: pops-anim-slide-top-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-bottom-reverse"] {\r
	animation: pops-anim-slide-bottom-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-left-reverse"] {\r
	animation: pops-anim-slide-left-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-slide-right-reverse"] {\r
	animation: pops-anim-slide-right-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-fadein-reverse"] {\r
	animation: pops-anim-fadein-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-fadein-zoom-reverse"] {\r
	animation: pops-anim-fadein-zoom-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-fadein-alert-reverse"] {\r
	animation: pops-anim-fadein-alert-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-don-reverse"] {\r
	animation: pops-anim-don-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-roll-reverse"] {\r
	animation: pops-anim-roll-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-sandra-reverse"] {\r
	animation: pops-anim-sandra-reverse 0.3s;\r
}\r
.pops-anim[anim="pops-anim-gather-reverse"] {\r
	animation: pops-anim-gather-reverse 0.3s;\r
}\r
`,Na="",Ua="",Va=`.pops[type-value="prompt"] {\r
	--input-color: #000000;\r
	--input-bg-color: none;\r
	--input-placeholder-color: #a1a4ac;\r
}\r
.pops[type-value="prompt"] input[pops],\r
.pops[type-value="prompt"] textarea[pops] {\r
	width: 100%;\r
	height: 100%;\r
	outline: 0;\r
	border: 0;\r
	color: var(--input-color);\r
	background-color: var(--input-bg-color);\r
}\r
\r
.pops[type-value="prompt"] input[pops] {\r
	padding: 5px 10px;\r
}\r
.pops[type-value="prompt"] textarea[pops] {\r
	padding: 5px 10px;\r
	resize: none;\r
}\r
\r
.pops[type-value="prompt"] input[pops]::placeholder,\r
.pops[type-value="prompt"] textarea[pops]::placeholder {\r
	color: var(--input-placeholder-color);\r
}\r
@media (prefers-color-scheme: dark) {\r
	.pops[type-value="prompt"] {\r
		--input-color: #ffffff;\r
		--input-bg-color: #333333;\r
		--input-placeholder-color: #8d9095;\r
	}\r
}\r
`,za=`.pops[type-value="loading"] {\r
	--loading-bd-color: rgba(0, 0, 0, 0.2);\r
	--loading-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	--loading-box-shadow-color: rgb(0 0 0 / 50%);\r
	--loading-icon-color: rgba(100, 149, 237, 0.1);\r
	--loading-icon-bd-top-color: rgb(100, 149, 237, var(--pops-bd-opacity));\r
}\r
.pops[type-value="loading"] {\r
	position: absolute;\r
	top: 272.5px;\r
	top: 50%;\r
	left: 26px;\r
	left: 50%;\r
	display: flex;\r
	overflow: hidden;\r
	padding: 10px 15px;\r
	max-width: 100%;\r
	max-height: 100%;\r
	min-width: 0;\r
	min-height: 0;\r
	border: 1px solid var(--loading-bd-color);\r
	border-radius: 5px;\r
	background-color: var(--loading-bg-color);\r
	box-shadow: 0 0 5px var(--loading-box-shadow-color);\r
	vertical-align: middle;\r
	transition: all 0.35s;\r
	transform: translate(-50%, -50%);\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	flex-direction: column;\r
	align-items: center;\r
	justify-content: center;\r
	align-content: center;\r
}\r
.pops[type-value="loading"]:before {\r
	float: left;\r
	display: inline-block;\r
	width: 2em;\r
	height: 2em;\r
	border: 0.3em solid var(--loading-icon-color);\r
	border-top: 0.3em solid var(--loading-icon-bd-top-color);\r
	border-radius: 50%;\r
	content: " ";\r
	vertical-align: middle;\r
	font-size: inherit;\r
	animation: pops-anim-wait-rotate 1.2s linear infinite;\r
}\r
.pops[type-value="loading"] .pops-loading-content {\r
	position: static;\r
	top: 0;\r
	bottom: 0;\r
	float: left;\r
	overflow: hidden;\r
	width: auto;\r
	font-size: inherit;\r
	line-height: normal;\r
	align-content: center;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
	.pops[type-value="loading"] {\r
		--loading-bg-color: #222222;\r
	}\r
}\r
`,Ga=`.pops[type-value="iframe"] {\r
	--container-title-height: 55px;\r
	transition: width 0.35s ease, height 0.35s ease;\r
}\r
.pops[type-value="iframe"] .pops-content {\r
	overflow: hidden;\r
}\r
.pops-loading {\r
	position: absolute;\r
	top: 40px;\r
	right: 0;\r
	bottom: 0;\r
	left: 0;\r
	z-index: 5;\r
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
}\r
.pops-loading:before {\r
	position: absolute;\r
	top: 50%;\r
	left: 50%;\r
	z-index: 3;\r
	display: block;\r
	margin: -20px 0 0 -20px;\r
	padding: 20px;\r
	border: 4px solid rgb(221, 221, 221, var(--pops-bd-opacity));\r
	border-radius: 50%;\r
	content: "";\r
	border-top-color: transparent;\r
	animation: pops-anim-wait-rotate 1.2s linear infinite;\r
}\r
.pops[type-value="iframe"].pops[type-module="min"] {\r
	bottom: 0;\r
	max-width: 200px;\r
	max-height: 53px;\r
	position: unset;\r
}\r
.pops[type-value="iframe"].pops[type-module="min"]\r
	.pops-header-control[type="min"] {\r
	display: none;\r
}\r
.pops[type-value="iframe"].pops-iframe-unset-top {\r
	top: unset !important;\r
}\r
.pops[type-value="iframe"].pops-iframe-unset-left {\r
	left: unset !important;\r
}\r
.pops[type-value="iframe"].pops-iframe-unset-transform {\r
	transform: none !important;\r
}\r
.pops[type-value="iframe"].pops-iframe-unset-transition {\r
	transition: none !important;\r
}\r
.pops[type-value="iframe"].pops[type-module="max"] {\r
	width: 100% !important;\r
	height: 100% !important;\r
}\r
.pops[type-value="iframe"] iframe[pops] {\r
	width: 100%;\r
	height: 100%;\r
	border: 0;\r
}\r
.pops-iframe-content-global-loading {\r
	position: absolute;\r
	top: 0;\r
	left: 0;\r
	z-index: 999999;\r
	width: 0;\r
	height: 4px;\r
	background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r
	animation: iframeLoadingChange 2s forwards;\r
}\r
\r
.pops-anim:has(.pops[type-value="iframe"].pops[type-module="min"]) {\r
	position: unset;\r
}\r
`,Fa=`.pops-tip {\r
	--pops-bg-opacity: 1;\r
	--tooltip-color: #4e4e4e;\r
	--tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	--tooltip-bd-radius: 2px;\r
	--tooltip-box-shadow-left-color: rgba(0, 0, 0, 0.24);\r
	--tooltip-box-shadow-right-color: rgba(0, 0, 0, 0.12);\r
	--tooltip-font-size: 14px;\r
	--tooltip-padding-top: 13px;\r
	--tooltip-padding-right: 13px;\r
	--tooltip-padding-bottom: 13px;\r
	--tooltip-padding-left: 13px;\r
\r
	--tooltip-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);\r
	--tooltip-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);\r
	--tooltip-arrow--after-color: rgb(78, 78, 78);\r
	--tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	--tooltip-arrow--after-width: 12px;\r
	--tooltip-arrow--after-height: 12px;\r
}\r
.pops-tip {\r
	padding: var(--tooltip-padding-top) var(--tooltip-padding-right)\r
		var(--tooltip-padding-bottom) var(--tooltip-padding-left);\r
	max-width: 400px;\r
	max-height: 300px;\r
	border-radius: var(--tooltip-bd-radius);\r
	background-color: var(--tooltip-bg-color);\r
	box-shadow: 0 1.5px 4px var(--tooltip-box-shadow-left-color),\r
		0 1.5px 6px var(--tooltip-box-shadow-right-color);\r
	color: var(--tooltip-color);\r
	font-size: var(--tooltip-font-size);\r
}\r
.pops-tip[data-position="absolute"] {\r
	position: absolute;\r
}\r
.pops-tip[data-position="fixed"] {\r
	position: fixed;\r
}\r
\r
.pops-tip .pops-tip-arrow {\r
	position: absolute;\r
	top: 100%;\r
	left: 50%;\r
	overflow: hidden;\r
	width: 100%;\r
	height: 12.5px;\r
	transform: translateX(-50%);\r
}\r
\r
.pops-tip .pops-tip-arrow::after {\r
	position: absolute;\r
	top: 0;\r
	left: 50%;\r
	width: var(--tooltip-arrow--after-width);\r
	height: var(--tooltip-arrow--after-height);\r
	background: var(--tooltip-arrow--after-bg-color);\r
	color: var(--tooltip-arrow--after-color);\r
	box-shadow: 0 1px 7px var(--tooltip-arrow-box-shadow-left-color),\r
		0 1px 7px var(--tooltip-arrow-box-shadow-right-color);\r
	content: "";\r
	transform: translateX(-50%) translateY(-50%) rotate(45deg);\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="bottom"] {\r
	position: absolute;\r
	top: 100%;\r
	left: 50%;\r
	overflow: hidden;\r
	width: 100%;\r
	height: 12.5px;\r
	transform: translateX(-50%);\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="bottom"]:after {\r
	position: absolute;\r
	top: 0;\r
	left: 50%;\r
	width: var(--tooltip-arrow--after-width);\r
	height: var(--tooltip-arrow--after-height);\r
	background: var(--tooltip-arrow--after-bg-color);\r
	box-shadow: 0 1px 7px var(--tooltip-arrow-box-shadow-left-color),\r
		0 1px 7px var(--tooltip-arrow-box-shadow-right-color);\r
	content: "";\r
	transform: translateX(-50%) translateY(-50%) rotate(45deg);\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="left"] {\r
	top: 50%;\r
	left: -12.5px;\r
	width: 12.5px;\r
	height: 50px;\r
	transform: translateY(-50%);\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="left"]:after {\r
	position: absolute;\r
	top: 50%;\r
	left: 100%;\r
	content: "";\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="right"] {\r
	top: 50%;\r
	right: -12.5px;\r
	left: auto;\r
	width: 12.5px;\r
	height: 50px;\r
	transform: translateY(-50%);\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="right"]:after {\r
	position: absolute;\r
	top: 50%;\r
	left: 0;\r
	content: "";\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="top"] {\r
	top: -12.5px;\r
	left: 50%;\r
	transform: translateX(-50%);\r
}\r
\r
.pops-tip .pops-tip-arrow[data-position="top"]:after {\r
	position: absolute;\r
	top: 100%;\r
	left: 50%;\r
	content: "";\r
}\r
\r
.pops-tip[data-motion] {\r
	-webkit-animation-duration: 0.25s;\r
	animation-duration: 0.25s;\r
	-webkit-animation-fill-mode: forwards;\r
	animation-fill-mode: forwards;\r
}\r
.pops-tip[data-motion="fadeOutRight"] {\r
	-webkit-animation-name: pops-motion-fadeOutRight;\r
	animation-name: pops-motion-fadeOutRight;\r
}\r
.pops-tip[data-motion="fadeInTop"] {\r
	-webkit-animation-name: pops-motion-fadeInTop;\r
	animation-name: pops-motion-fadeInTop;\r
	animation-timing-function: cubic-bezier(0.49, 0.49, 0.13, 1.3);\r
}\r
.pops-tip[data-motion="fadeOutTop"] {\r
	-webkit-animation-name: pops-motion-fadeOutTop;\r
	animation-name: pops-motion-fadeOutTop;\r
	animation-timing-function: cubic-bezier(0.32, 0.37, 0.06, 0.87);\r
}\r
.pops-tip[data-motion="fadeInBottom"] {\r
	-webkit-animation-name: pops-motion-fadeInBottom;\r
	animation-name: pops-motion-fadeInBottom;\r
}\r
.pops-tip[data-motion="fadeOutBottom"] {\r
	-webkit-animation-name: pops-motion-fadeOutBottom;\r
	animation-name: pops-motion-fadeOutBottom;\r
}\r
.pops-tip[data-motion="fadeInLeft"] {\r
	-webkit-animation-name: pops-motion-fadeInLeft;\r
	animation-name: pops-motion-fadeInLeft;\r
}\r
.pops-tip[data-motion="fadeOutLeft"] {\r
	-webkit-animation-name: pops-motion-fadeOutLeft;\r
	animation-name: pops-motion-fadeOutLeft;\r
}\r
.pops-tip[data-motion="fadeInRight"] {\r
	-webkit-animation-name: pops-motion-fadeInRight;\r
	animation-name: pops-motion-fadeInRight;\r
}\r
\r
/* github的样式 */\r
.pops-tip.github-tooltip {\r
	--tooltip-bg-opacity: 1;\r
	--tooltip-color: #ffffff;\r
	--tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r
	--tooltip-bd-radius: 6px;\r
	--tooltip-padding-top: 6px;\r
	--tooltip-padding-right: 8px;\r
	--tooltip-padding-bottom: 6px;\r
	--tooltip-padding-left: 8px;\r
\r
	--tooltip-arrow--after-color: rgb(255, 255, 255);\r
	--tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r
	--tooltip-arrow--after-width: 8px;\r
	--tooltip-arrow--after-height: 8px;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
	.pops-tip {\r
		--tooltip-color: #ffffff;\r
		--tooltip-bg-color: #fafafa;\r
		--tooltip-arrow--after-color: #fafafa;\r
		--tooltip-arrow--after-bg-color: rgb(250, 250, 250, var(--pops-bg-opacity));\r
	}\r
}\r
`,ja=`.pops[type-value="drawer"] {\r
	position: fixed;\r
	box-sizing: border-box;\r
	display: flex;\r
	flex-direction: column;\r
	box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),\r
		0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);\r
	overflow: hidden;\r
	transition: all 0.3s;\r
}\r
\r
.pops[type-value="drawer"][direction="top"] {\r
	width: 100%;\r
	left: 0;\r
	right: 0;\r
	top: 0;\r
}\r
.pops[type-value="drawer"][direction="bottom"] {\r
	width: 100%;\r
	left: 0;\r
	right: 0;\r
	bottom: 0;\r
}\r
.pops[type-value="drawer"][direction="left"] {\r
	height: 100%;\r
	top: 0;\r
	bottom: 0;\r
	left: 0;\r
}\r
.pops[type-value="drawer"][direction="right"] {\r
	height: 100%;\r
	top: 0;\r
	bottom: 0;\r
	right: 0;\r
}\r
`,qa=`.pops-folder-list {\r
	--folder-arrow-fill-color: #d4d7de;\r
	--folder-arrow-active-fill-color: #06a7ff;\r
	--header-breadcrumb-text-color: #06a7ff;\r
	--header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);\r
	--header-breadcrumb-all-files-first-text-color: var(\r
		--header-breadcrumb-text-color\r
	);\r
	--header-breadcrumb-all-files-last-text-color: #999999;\r
	--table-header-row-text-color: #818999;\r
	--table-body-td-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));\r
	--table-body-th-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));\r
	--table-body-row-text-color: #05082c;\r
	--table-body-row-file-name-text-color: #05082c;\r
	--table-body-row-hover-bd-color: rgb(245, 246, 247, var(--pops-bg-opacity));\r
	--table-body-row-hover-bg-color: rgb(245, 246, 247, var(--pops-bg-opacity));\r
	--table-body-row-file-name-hover-text-color: #06a7ff;\r
	--table-body-row-content-text-color: #818999;\r
}\r
.pops-folder-list .cursor-p {\r
	cursor: pointer;\r
}\r
.pops-folder-list a {\r
	background: 0 0;\r
	text-decoration: none;\r
	-webkit-tap-highlight-color: transparent;\r
	color: var(--header-breadcrumb-text-color);\r
}\r
table.pops-folder-list-table__body,\r
table.pops-folder-list-table__header {\r
	width: 100%;\r
	table-layout: fixed;\r
	border-collapse: collapse;\r
	border-spacing: 0;\r
	padding: 0 20px;\r
}\r
table.pops-folder-list-table__body,\r
table.pops-folder-list-table__header {\r
	height: 100%;\r
	background: 0 0;\r
	overflow: hidden;\r
	display: -webkit-box;\r
	display: -ms-flexbox;\r
	-ms-flex-direction: column;\r
	-webkit-box-orient: vertical;\r
	-webkit-box-direction: normal;\r
}\r
table.pops-folder-list-table__body {\r
	height: 100%;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
}\r
.pops-folder-list table tr {\r
	line-height: normal;\r
	align-content: center;\r
}\r
.pops-folder-list-table__header-row {\r
	height: 50px;\r
	line-height: normal;\r
	align-content: center;\r
	color: var(--table-header-row-text-color);\r
	text-align: left;\r
	font-size: 12px;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
}\r
.pops-folder-list-table__body-row {\r
	height: 50px;\r
	line-height: normal;\r
	align-content: center;\r
	color: var(--table-body-row-text-color);\r
	font-size: 12px;\r
}\r
.pops-folder-list-table__body-row:hover {\r
	background-color: var(--table-body-row-hover-bg-color);\r
	border-color: var(--table-body-row-hover-bd-color);\r
	border: 0;\r
	outline: none;\r
}\r
.pops-folder-list table th {\r
	border: 0;\r
	border-bottom: 1px solid var(--table-body-th-text-color);\r
}\r
.pops-folder-list table td {\r
	border: 0;\r
	border-bottom: 1px solid var(--table-body-td-text-color);\r
	position: relative;\r
}\r
.pops-folder-list .list-name-text {\r
	display: inline-block;\r
	padding-left: 12px;\r
	line-height: normal;\r
	align-content: center;\r
	max-width: 176px;\r
}\r
.pops-folder-list-file-name > div {\r
	display: flex;\r
	align-items: center;\r
}\r
\r
.pops-mobile-folder-list-file-name {\r
	display: flex;\r
	align-items: center;\r
}\r
.pops-mobile-folder-list-file-name > div {\r
	display: flex;\r
	flex-wrap: wrap;\r
	justify-content: flex-start;\r
	align-items: flex-start;\r
	padding: 6px 0px;\r
	flex-direction: column;\r
}\r
.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon {\r
	width: 45px;\r
	height: 45px;\r
}\r
.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {\r
	padding-left: unset;\r
	max-width: 250px;\r
	overflow-x: hidden;\r
	font-weight: 400;\r
	line-height: unset;\r
	margin-bottom: 4px;\r
	white-space: normal;\r
	text-overflow: unset;\r
}\r
\r
/* 修改滚动 */\r
.pops-folder-content {\r
	overflow: hidden !important;\r
}\r
.pops-folder-content .pops-folder-list {\r
	height: 100%;\r
	display: flex;\r
	flex-direction: column;\r
}\r
.pops-folder-content .pops-folder-list-table__body-div {\r
	height: 100%;\r
	flex: 1 auto;\r
	overflow: auto;\r
	padding-bottom: 0;\r
}\r
.pops-mobile-folder-content .pops-folder-list-table__body-div {\r
	height: 100%;\r
	flex: 1 auto;\r
	overflow: auto;\r
	padding-bottom: 0;\r
}\r
.pops-folder-content table.pops-folder-list-table__body {\r
	overflow: auto;\r
}\r
.pops-folder-content .pops-folder-list-table__header-div {\r
	flex: 0;\r
}\r
.pops-mobile-folder-content .pops-folder-list-table__header-div {\r
	display: none;\r
}\r
\r
.pops-folder-list .pops-folder-list-file-name-title-text {\r
	color: var(--table-body-row-file-name-text-color);\r
}\r
.pops-folder-list .pops-folder-list-file-name-title-text:hover {\r
	text-decoration: none;\r
	color: var(--table-body-row-file-name-hover-text-color);\r
}\r
.pops-folder-list .text-ellip {\r
	overflow: hidden;\r
	white-space: nowrap;\r
	text-overflow: ellipsis;\r
}\r
.pops-folder-list .content {\r
	color: var(--table-body-row-content-text-color);\r
	position: relative;\r
	width: 100%;\r
	text-align: left;\r
}\r
.pops-folder-list .inline-block-v-middle {\r
	display: inline-block;\r
	vertical-align: middle;\r
}\r
.pops-folder-list .flex-a-i-center {\r
	display: flex;\r
	align-items: center;\r
}\r
.pops-folder-list .u-file-icon {\r
	display: inline-block;\r
	vertical-align: middle;\r
}\r
.pops-folder-list .u-file-icon--list {\r
	width: 32px;\r
	height: 32px;\r
}\r
.pops-folder-list .pops-folder-list-file-icon {\r
	line-height: normal;\r
	align-content: center;\r
	position: relative;\r
	vertical-align: middle;\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb-primary {\r
	flex: 1;\r
	display: -webkit-box;\r
	display: -webkit-flex;\r
	display: -ms-flexbox;\r
	display: flex;\r
	-webkit-box-align: center;\r
	-webkit-align-items: center;\r
	-ms-flex-align: center;\r
	align-items: center;\r
	-webkit-box-orient: horizontal;\r
	-webkit-box-direction: normal;\r
	-webkit-flex-direction: row;\r
	-ms-flex-direction: row;\r
	flex-direction: row;\r
	min-height: 17px;\r
	flex-wrap: wrap;\r
}\r
.pops-folder-list .pops-folder-list-table__sort {\r
	display: inline-flex;\r
	margin-left: 4px;\r
	flex-direction: column;\r
}\r
\r
.pops-folder-list .pops-folder-icon-arrow {\r
	width: 10px;\r
	height: 10px;\r
	fill: var(--folder-arrow-fill-color);\r
}\r
.pops-folder-list .pops-folder-icon-active {\r
	fill: var(--folder-arrow-active-fill-color);\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb {\r
	padding: 4px 20px;\r
	-webkit-box-sizing: border-box;\r
	box-sizing: border-box;\r
	display: -webkit-box;\r
	display: -webkit-flex;\r
	display: -ms-flexbox;\r
	display: flex;\r
	-webkit-box-align: center;\r
	-webkit-align-items: center;\r
	-ms-flex-align: center;\r
	align-items: center;\r
	-webkit-box-orient: horizontal;\r
	-webkit-box-direction: normal;\r
	-webkit-flex-direction: row;\r
	-ms-flex-direction: row;\r
	flex-direction: row;\r
	-webkit-box-pack: start;\r
	-webkit-justify-content: start;\r
	-ms-flex-pack: start;\r
	justify-content: flex-start;\r
	min-height: 35px;\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles {\r
	font-size: 12px;\r
	color: var(--header-breadcrumb-all-files-text-color);\r
	line-height: normal;\r
	align-content: center;\r
	font-weight: 700;\r
	display: inline-block;\r
	max-width: 140px;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	word-wrap: normal;\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a {\r
	color: var(--header-breadcrumb-all-files-last-text-color);\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {\r
	font-size: 14px;\r
	color: var(--header-breadcrumb-all-files-first-text-color);\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {\r
	width: 16px;\r
	height: 16px;\r
}\r
.pops-folder-list .iconArrow {\r
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)\r
		55% 50%/6px 9px no-repeat;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
	.pops[type-value="folder"] {\r
		--pops-title-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r
		--pops-bottom-btn-controls-border-color: rgb(\r
			73,\r
			83,\r
			102,\r
			var(--pops-bg-opacity)\r
		);\r
	}\r
	.pops-folder-list {\r
		--header-breadcrumb-text-color: #06a7ff;\r
		--header-breadcrumb-all-files-text-color: var(\r
			--header-breadcrumb-text-color\r
		);\r
		--header-breadcrumb-all-files-first-text-color: var(\r
			--header-breadcrumb-text-color\r
		);\r
		--header-breadcrumb-all-files-last-text-color: #818999;\r
		--table-body-row-text-color: #f7f8fa;\r
		--table-body-td-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r
		--table-body-th-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r
		--table-body-td-text-color: #495366;\r
		--table-body-row-hover-bd-color: #1f2022;\r
		--table-body-row-hover-bg-color: #1f2022;\r
		--table-body-row-file-name-text-color: #f7f8fa;\r
	}\r
}\r
`,Wa=`.pops[type-value="panel"] {\r
	--el-disabled-text-color: #a8abb2;\r
	--el-disabled-bg-color: #f5f7fa;\r
	--el-disabled-border-color: #e4e7ed;\r
	--pops-bg-color: #f2f2f2;\r
	--pops-color: #333333;\r
	--title-bg-color: #ffffff;\r
	--aside-bg-color: #ffffff;\r
	--aside-hover-color: rgb(64, 158, 255);\r
	--aside-hover-bg-color: rgba(64, 158, 255, 0.1);\r
\r
	--pops-panel-forms-margin-top-bottom: 10px;\r
	--pops-panel-forms-margin-left-right: 20px;\r
	--pops-panel-forms-header-icon-size: 20px;\r
	--pops-panel-forms-header-padding-top-bottom: 15px;\r
	--pops-panel-forms-header-padding-left-right: 10px;\r
	--pops-panel-forms-container-item-left-text-gap: 6px;\r
	--pops-panel-forms-container-item-left-desc-text-size: 0.8em;\r
	--pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;\r
	--pops-panel-forms-container-item-bg-color: #ffffff;\r
	--pops-panel-forms-container-item-title-color: #333;\r
	--pops-panel-forms-container-item-border-radius: 6px;\r
	--pops-panel-forms-container-item-margin-top-bottom: 10px;\r
	--pops-panel-forms-container-item-margin-left-right: var(\r
		--pops-panel-forms-margin-left-right\r
	);\r
	--pops-panel-forms-container-li-border-color: rgb(\r
		229,\r
		229,\r
		229,\r
		var(--pops-bd-opacity)\r
	);\r
	--pops-panel-forms-container-li-padding-top-bottom: 12px;\r
	--pops-panel-forms-container-li-padding-left-right: 16px;\r
\r
	--pops-panel-components-input-text-color: #000000;\r
	--pops-panel-components-input-text-bg-color: transparent;\r
	--pops-panel-components-input-bd-color: #dcdfe6;\r
	--pops-panel-components-input-bg-color: #ffffff;\r
	--pops-panel-components-input-hover-bd-color: #c0c4cc;\r
	--pops-panel-components-input-focus-bd-color: #409eff;\r
	--pops-panel-components-input-suffix-color: #a8abb2;\r
\r
	--pops-panel-components-textarea-text-color: #000000;\r
	--pops-panel-components-textarea-text-bg-color: #ffffff;\r
	--pops-panel-components-textarea-bd-color: #dcdfe6;\r
	--pops-panel-components-textarea-hover-bd-color: #c0c4cc;\r
	--pops-panel-components-textarea-focus-bd-color: #409eff;\r
\r
	--pops-panel-components-select-text-color: #000000;\r
	--pops-panel-components-select-bd-color: rgb(\r
		184,\r
		184,\r
		184,\r
		var(--pops-bd-opacity)\r
	);\r
	--pops-panel-components-select-bg-color: rgb(\r
		255,\r
		255,\r
		255,\r
		var(--pops-bg-opacity)\r
	);\r
	--pops-panel-components-select-hover-bd-color: #c0c4cc;\r
}\r
.pops[type-value="panel"] {\r
	color: var(--pops-color);\r
	background: var(--pops-bg-color);\r
}\r
.pops[type-value] .pops-panel-title {\r
	background: var(--title-bg-color);\r
}\r
\r
/* ↓panel的CSS↓ */\r
aside.pops-panel-aside {\r
	overflow: auto;\r
	box-sizing: border-box;\r
	flex-shrink: 0;\r
	max-width: 200px;\r
	min-width: 100px;\r
	height: 100%;\r
	background: var(--aside-bg-color);\r
	border-right: 1px solid var(--aside-bg-color);\r
	font-size: 0.9em;\r
}\r
aside.pops-panel-aside {\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
}\r
.pops-panel-content {\r
	display: flex;\r
	flex-direction: row;\r
	flex: 1;\r
	overflow: auto;\r
	flex-basis: auto;\r
	box-sizing: border-box;\r
	min-width: 0;\r
	bottom: 0 !important;\r
}\r
section.pops-panel-container {\r
	width: 100%;\r
	overflow: hidden;\r
	display: flex;\r
	flex-direction: column;\r
}\r
section.pops-panel-container .pops-panel-container-header-ul,\r
section.pops-panel-container .pops-panel-deepMenu-container-header-ul {\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
	flex: 0 auto;\r
}\r
section.pops-panel-container .pops-panel-container-header-ul li {\r
	text-align: left;\r
	display: flex;\r
	justify-content: flex-start !important;\r
	margin: 0px !important;\r
	padding: var(--pops-panel-forms-header-padding-top-bottom)\r
		calc(\r
			var(--pops-panel-forms-margin-left-right) +\r
				var(--pops-panel-forms-container-li-padding-left-right)\r
		);\r
}\r
section.pops-panel-container > ul:last-child {\r
	overflow: auto;\r
	flex: 1;\r
}\r
aside.pops-panel-aside ul li {\r
	margin: 6px 8px;\r
	border-radius: 4px;\r
	padding: 6px 10px;\r
	cursor: default;\r
	display: flex;\r
	align-items: center;\r
	justify-content: flex-start;\r
}\r
aside.pops-panel-aside .pops-is-visited,\r
aside.pops-panel-aside ul li:hover {\r
	color: var(--aside-hover-color);\r
	background: var(--aside-hover-bg-color);\r
}\r
section.pops-panel-container > ul li:not(.pops-panel-forms-container-item) {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	margin: var(--pops-panel-forms-margin-top-bottom)\r
		calc(\r
			var(--pops-panel-forms-margin-left-right) +\r
				var(--pops-panel-forms-margin-left-right)\r
		);\r
	gap: 10px;\r
}\r
section.pops-panel-container .pops-panel-forms-container-item-header-text {\r
	margin: 10px;\r
	margin-left: calc(\r
		var(--pops-panel-forms-margin-left-right) +\r
			var(--pops-panel-forms-container-li-padding-left-right)\r
	);\r
	font-size: 0.9em;\r
	text-align: left;\r
	color: var(--pops-panel-forms-container-item-title-color);\r
}\r
section.pops-panel-container li.pops-panel-forms-container-item {\r
	display: block;\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul {\r
	border-radius: var(--pops-panel-forms-container-item-border-radius);\r
	background: var(--pops-panel-forms-container-item-bg-color);\r
	margin: var(--pops-panel-forms-container-item-margin-top-bottom)\r
		var(--pops-panel-forms-margin-left-right);\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul li {\r
	display: flex;\r
	justify-content: space-between;\r
	align-items: center;\r
	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px;\r
	margin: 0px var(--pops-panel-forms-container-li-padding-left-right);\r
	border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);\r
	text-align: left;\r
}\r
section.pops-panel-container\r
	.pops-panel-forms-container-item\r
	ul\r
	li.pops-panel-deepMenu-nav-item {\r
	padding: var(--pops-panel-forms-container-li-padding-top-bottom)\r
		var(--pops-panel-forms-container-li-padding-left-right);\r
	margin: 0px;\r
	border-bottom: 0;\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul li:last-child {\r
	border: 0;\r
}\r
/* 左侧的文字 */\r
section.pops-panel-container .pops-panel-item-left-text {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--pops-panel-forms-container-item-left-text-gap);\r
}\r
\r
/* 左侧的主文字 */\r
section.pops-panel-container .pops-panel-item-left-main-text {\r
	/*line-height: 2;*/\r
}\r
/* 左侧的描述文字 */\r
section.pops-panel-container .pops-panel-item-left-desc-text {\r
	font-size: var(--pops-panel-forms-container-item-left-desc-text-size);\r
	color: var(--pops-panel-forms-container-item-left-desc-text-color);\r
}\r
\r
/* 折叠面板 */\r
\r
section.pops-panel-container .pops-panel-forms-fold {\r
	border-radius: var(--pops-panel-forms-container-item-border-radius);\r
	background: var(--pops-panel-forms-container-item-bg-color);\r
	margin: var(--pops-panel-forms-margin-top-bottom)\r
		var(--pops-panel-forms-margin-left-right);\r
}\r
section.pops-panel-container\r
	.pops-panel-forms-fold\r
	.pops-panel-forms-fold-container {\r
	display: flex;\r
	align-items: center;\r
	fill: #6c6c6c;\r
	justify-content: space-between;\r
	margin: 0px var(--pops-panel-forms-container-li-padding-left-right) !important;\r
	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px !important;\r
}\r
section.pops-panel-container\r
	.pops-panel-forms-fold[data-fold-enable]\r
	.pops-panel-forms-fold-container-icon {\r
	transform: rotate(90deg);\r
}\r
section.pops-panel-container\r
	.pops-panel-forms-fold\r
	.pops-panel-forms-fold-container-icon {\r
	width: 15px;\r
	height: 15px;\r
	display: flex;\r
	align-items: center;\r
	transform: rotate(-90deg);\r
	transition: transform 0.3s;\r
}\r
section.pops-panel-container\r
	.pops-panel-forms-fold[data-fold-enable]\r
	.pops-panel-forms-container-item-formlist {\r
	height: 0;\r
}\r
section.pops-panel-container\r
	.pops-panel-forms-fold\r
	.pops-panel-forms-container-item-formlist {\r
	transition: height 0.3s;\r
	overflow: hidden;\r
	border-radius: unset;\r
	background: unset;\r
	margin: 0;\r
	height: auto;\r
	height: calc-size(auto, size);\r
}\r
/* 折叠面板 */\r
\r
/* 姑且认为小于600px的屏幕为移动端 */\r
@media (max-width: 600px) {\r
	/* 兼容移动端CSS */\r
	.pops[type-value="panel"] {\r
		--pops-panel-forms-margin-left-right: 10px;\r
	}\r
	.pops[type-value="panel"] {\r
		width: 92%;\r
		width: 92vw;\r
		width: 92dvw;\r
	}\r
	.pops[type-value="panel"] .pops-panel-content aside.pops-panel-aside {\r
		max-width: 20%;\r
		min-width: auto;\r
	}\r
	.pops[type-value="panel"]\r
		section.pops-panel-container\r
		.pops-panel-forms-container-item\r
		> div {\r
		text-align: left;\r
		--pops-panel-forms-margin-left-right: 0px;\r
	}\r
	.pops[type-value="panel"]\r
		section.pops-panel-container\r
		.pops-panel-forms-container-item\r
		ul {\r
		margin: 0px !important;\r
	}\r
	.pops[type-value="panel"] section.pops-panel-container > ul > li {\r
		margin: 10px 10px;\r
	}\r
	.pops[type-value="panel"]\r
		section.pops-panel-container\r
		> ul\r
		> li\r
		div:nth-child(2) {\r
		max-width: 55%;\r
	}\r
	.pops[type-value="panel"]\r
		section.pops-panel-container\r
		.pops-panel-select\r
		select {\r
		min-width: 88px !important;\r
		width: -webkit-fill-available;\r
		width: -moz-available;\r
	}\r
	.pops[type-value="panel"]\r
		section.pops-panel-container\r
		.pops-panel-container-header-ul\r
		li {\r
		font-size: 16px;\r
	}\r
	.pops[type-value="panel"] .pops-panel-title p[pops],\r
	.pops[type-value="panel"] section.pops-panel-container > ul li,\r
	.pops[type-value="panel"] aside.pops-panel-aside ul li {\r
		font-size: 14px;\r
	}\r
}\r
/* switch的CSS */\r
.pops-panel-switch {\r
	display: inline-flex;\r
	flex-direction: row-reverse;\r
	align-items: center;\r
	position: relative;\r
	font-size: 14px;\r
	line-height: normal;\r
	align-content: center;\r
	height: 32px;\r
	vertical-align: middle;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-ms-user-select: none;\r
	-moz-user-select: none;\r
}\r
.pops-panel-switch input.pops-panel-switch__input {\r
	position: absolute;\r
	width: 0;\r
	height: 0;\r
	opacity: 0;\r
	margin: 0;\r
}\r
.pops-panel-switch:has(input.pops-panel-switch__input:disabled),\r
.pops-panel-switch[data-disabled],\r
.pops-panel-switch[data-disabled] .pops-panel-switch__core,\r
.pops-panel-switch\r
	input.pops-panel-switch__input:disabled\r
	+ .pops-panel-switch__core {\r
	cursor: not-allowed;\r
	opacity: 0.6;\r
}\r
.pops-panel-switch span.pops-panel-switch__core {\r
	display: inline-flex;\r
	position: relative;\r
	align-items: center;\r
	min-width: 40px;\r
	height: 20px;\r
	border: 1px solid rgb(220, 223, 230, var(--pops-bd-opacity));\r
	outline: 0;\r
	border-radius: 10px;\r
	box-sizing: border-box;\r
	background: rgb(220, 223, 230, var(--pops-bg-opacity));\r
	cursor: pointer;\r
	transition: border-color 0.3s, background-color 0.3s;\r
}\r
.pops-panel-switch .pops-panel-switch__action {\r
	position: absolute;\r
	left: 1px;\r
	border-radius: 100%;\r
	transition: all 0.3s;\r
	width: 16px;\r
	height: 16px;\r
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	color: rgb(220, 223, 230);\r
}\r
.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {\r
	border-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r
	background-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r
}\r
.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {\r
	left: calc(100% - 17px);\r
	color: rgb(64, 158, 255);\r
}\r
/* switch的CSS */\r
\r
/* slider旧的CSS */\r
section.pops-panel-container .pops-panel-slider:has(> input[type="range"]) {\r
	overflow: hidden;\r
	height: 25px;\r
	line-height: normal;\r
	align-content: center;\r
	display: flex;\r
	align-items: center;\r
}\r
section.pops-panel-container .pops-panel-slider input[type="range"] {\r
	height: 6px;\r
	background: rgb(228, 231, 237, var(--pops-bg-opacity));\r
	outline: 0;\r
	-webkit-appearance: none;\r
	appearance: none;\r
	width: 100%;\r
}\r
section.pops-panel-container\r
	.pops-panel-slider\r
	input[type="range"]::-webkit-slider-thumb {\r
	width: 20px;\r
	height: 20px;\r
	border-radius: 50%;\r
	border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\r
	cursor: pointer;\r
	-webkit-appearance: none;\r
	appearance: none;\r
	border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r
}\r
section.pops-panel-container\r
	.pops-panel-slider\r
	input[type="range"]::-moz-range-thumb {\r
	width: 20px;\r
	height: 20px;\r
	border-radius: 50%;\r
	border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));\r
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\r
	cursor: pointer;\r
	-webkit-appearance: none;\r
	appearance: none;\r
}\r
section.pops-panel-container\r
	.pops-panel-slider\r
	input[type="range"]::-moz-range-progress {\r
	height: 6px;\r
	border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r
}\r
/* slider旧的CSS */\r
\r
/* slider的CSS */\r
.pops-slider {\r
	--pops-slider-color-white: #ffffff;\r
	--pops-slider-color-primary: #409eff;\r
	--pops-slider-color-info: #909399;\r
	--pops-slider-text-color-placeholder: #a8abb2;\r
	--pops-slider-border-color-light: #e4e7ed;\r
	--pops-slider-border-radius-circle: 100%;\r
	--pops-slider-transition-duration-fast: 0.2s;\r
\r
	--pops-slider-main-bg-color: var(--pops-slider-color-primary);\r
	--pops-slider-runway-bg-color: var(--pops-slider-border-color-light);\r
	--pops-slider-stop-bg-color: var(--pops-slider-color-white);\r
	--pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);\r
	--pops-slider-border-radius: 3px;\r
	--pops-slider-height: 6px;\r
	--pops-slider-button-size: 20px;\r
	--pops-slider-button-wrapper-size: 36px;\r
	--pops-slider-button-wrapper-offset: -15px;\r
}\r
\r
.pops-slider {\r
	width: 100%;\r
	height: 32px;\r
	display: flex;\r
	align-items: center;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-ms-user-select: none;\r
	-moz-user-select: none;\r
}\r
\r
.pops-slider-width {\r
	flex: 0 0 52%;\r
	margin-left: 10px;\r
}\r
\r
.pops-slider__runway {\r
	flex: 1;\r
	height: var(--pops-slider-height);\r
	background-color: var(--pops-slider-runway-bg-color);\r
	border-radius: var(--pops-slider-border-radius);\r
	position: relative;\r
	cursor: pointer;\r
}\r
\r
.pops-slider__runway.show-input {\r
	margin-right: 30px;\r
	width: auto;\r
}\r
\r
.pops-slider__runway.pops-slider-is-disabled {\r
	cursor: default;\r
}\r
\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {\r
	background-color: var(--pops-slider-disabled-color);\r
}\r
\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {\r
	border-color: var(--pops-slider-disabled-color);\r
}\r
\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r
	cursor: not-allowed;\r
}\r
\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r
	transform: scale(1);\r
}\r
\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r
	cursor: not-allowed;\r
}\r
\r
.pops-slider__input {\r
	flex-shrink: 0;\r
	width: 130px;\r
}\r
\r
.pops-slider__bar {\r
	height: var(--pops-slider-height);\r
	background-color: var(--pops-slider-main-bg-color);\r
	border-top-left-radius: var(--pops-slider-border-radius);\r
	border-bottom-left-radius: var(--pops-slider-border-radius);\r
	position: absolute;\r
}\r
\r
.pops-slider__button-wrapper {\r
	height: var(--pops-slider-button-wrapper-size);\r
	width: var(--pops-slider-button-wrapper-size);\r
	position: absolute;\r
	z-index: 1;\r
	top: var(--pops-slider-button-wrapper-offset);\r
	transform: translate(-50%);\r
	background-color: transparent;\r
	text-align: center;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	line-height: normal;\r
	outline: none;\r
}\r
\r
.pops-slider__button-wrapper:after {\r
	display: inline-block;\r
	content: "";\r
	height: 100%;\r
	vertical-align: middle;\r
}\r
\r
.pops-slider__button:hover,\r
.pops-slider__button.hover {\r
	cursor: grab;\r
}\r
\r
.pops-slider__button {\r
	display: inline-block;\r
	width: var(--pops-slider-button-size);\r
	height: var(--pops-slider-button-size);\r
	vertical-align: middle;\r
	border: solid 2px var(--pops-slider-main-bg-color);\r
	background-color: var(--pops-slider-color-white);\r
	border-radius: 50%;\r
	box-sizing: border-box;\r
	transition: var(--pops-slider-transition-duration-fast);\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
}\r
\r
.pops-slider__button:hover,\r
.pops-slider__button.hover,\r
.pops-slider__button.dragging {\r
	transform: scale(1.2);\r
}\r
\r
.pops-slider__button:hover,\r
.pops-slider__button.hover {\r
	cursor: grab;\r
}\r
\r
.pops-slider__button.dragging {\r
	cursor: grabbing;\r
}\r
\r
.pops-slider__stop {\r
	position: absolute;\r
	height: var(--pops-slider-height);\r
	width: var(--pops-slider-height);\r
	border-radius: var(--pops-slider-border-radius-circle);\r
	background-color: var(--pops-slider-stop-bg-color);\r
	transform: translate(-50%);\r
}\r
\r
.pops-slider__marks {\r
	top: 0;\r
	left: 12px;\r
	width: 18px;\r
	height: 100%;\r
}\r
\r
.pops-slider__marks-text {\r
	position: absolute;\r
	transform: translate(-50%);\r
	font-size: 14px;\r
	color: var(--pops-slider-color-info);\r
	margin-top: 15px;\r
	white-space: pre;\r
}\r
\r
.pops-slider.is-vertical {\r
	position: relative;\r
	display: inline-flex;\r
	width: auto;\r
	height: 100%;\r
	flex: 0;\r
}\r
\r
.pops-slider.is-vertical .pops-slider__runway {\r
	width: var(--pops-slider-height);\r
	height: 100%;\r
	margin: 0 16px;\r
}\r
\r
.pops-slider.is-vertical .pops-slider__bar {\r
	width: var(--pops-slider-height);\r
	height: auto;\r
	border-radius: 0 0 3px 3px;\r
}\r
\r
.pops-slider.is-vertical .pops-slider__button-wrapper {\r
	top: auto;\r
	left: var(--pops-slider-button-wrapper-offset);\r
	transform: translateY(50%);\r
}\r
\r
.pops-slider.is-vertical .pops-slider__stop {\r
	transform: translateY(50%);\r
}\r
\r
.pops-slider.is-vertical .pops-slider__marks-text {\r
	margin-top: 0;\r
	left: 15px;\r
	transform: translateY(50%);\r
}\r
\r
.pops-slider--large {\r
	height: 40px;\r
}\r
\r
.pops-slider--small {\r
	height: 24px;\r
}\r
/* slider的CSS */\r
\r
/* input的CSS */\r
.pops-panel-input {\r
	display: flex;\r
	align-items: center;\r
	border: 1px solid var(--pops-panel-components-input-bd-color);\r
	border-radius: 4px;\r
	background-color: var(--pops-panel-components-input-bg-color);\r
	position: relative;\r
	box-shadow: none;\r
}\r
.pops-panel-input:hover {\r
	border: 1px solid var(--pops-panel-components-input-hover-bd-color);\r
}\r
.pops-panel-input:has(input:disabled):hover {\r
	--pops-panel-components-input-hover-bd-color: var(\r
		--pops-panel-components-input-bd-color\r
	);\r
}\r
.pops-panel-input:has(input:focus) {\r
	outline: 0;\r
	border: 1px solid var(--pops-panel-components-input-focus-bd-color);\r
	border-radius: 4px;\r
	box-shadow: none;\r
}\r
.pops-panel-input input {\r
	display: inline-flex;\r
	justify-content: center;\r
	text-align: start;\r
	align-items: center;\r
	align-content: center;\r
	white-space: nowrap;\r
	cursor: text;\r
	box-sizing: border-box;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	vertical-align: middle;\r
	-webkit-appearance: none;\r
	appearance: none;\r
	color: var(--pops-panel-components-input-text-color);\r
	background-color: var(--pops-panel-components-input-text-bg-color);\r
	outline: 0;\r
	transition: 0.1s;\r
	border: 0;\r
	font-size: 14px;\r
	font-weight: 500;\r
	line-height: normal;\r
	height: 32px;\r
	width: 100%;\r
	flex: 1;\r
	margin-right: calc(1em + 8px);\r
	padding: 8px 8px;\r
}\r
.pops-panel-input span.pops-panel-input__suffix {\r
	display: inline-flex;\r
	white-space: nowrap;\r
	flex-shrink: 0;\r
	flex-wrap: nowrap;\r
	height: 100%;\r
	text-align: center;\r
	color: var(--pops-panel-components-input-suffix-color);\r
	transition: all 0.3s;\r
	pointer-events: none;\r
	margin: 0 8px;\r
	position: absolute;\r
	right: 0px;\r
}\r
.pops-panel-input span.pops-panel-input__suffix-inner {\r
	pointer-events: all;\r
	display: inline-flex;\r
	align-items: center;\r
	justify-content: center;\r
}\r
.pops-panel-input .pops-panel-icon {\r
	cursor: pointer;\r
}\r
.pops-panel-input .pops-panel-icon {\r
	height: inherit;\r
	line-height: normal;\r
	align-content: center;\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
	transition: all 0.3s;\r
}\r
.pops-panel-input .pops-panel-icon svg {\r
	height: 1em;\r
	width: 1em;\r
}\r
\r
.pops-input-disabled {\r
	background-color: var(--el-disabled-bg-color);\r
}\r
.pops-panel-input.pops-input-disabled {\r
	border: none;\r
}\r
.pops-panel-input.pops-input-disabled:hover {\r
	--pops-panel-components-input-hover-bd-color: var(\r
		--pops-panel-components-input-bd-color\r
	);\r
}\r
.pops-panel-input input:disabled,\r
.pops-panel-input input:disabled + .pops-panel-input__suffix {\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	color: var(--el-disabled-text-color);\r
	-webkit-text-fill-color: var(--el-disabled-text-color);\r
	cursor: not-allowed;\r
}\r
.pops-panel-input input:disabled + .pops-panel-input__suffix {\r
	display: none;\r
}\r
/* input的CSS */\r
\r
/* textarea的CSS */\r
.pops-panel-textarea textarea {\r
	width: 100%;\r
	/*vertical-align: bottom;*/\r
	position: relative;\r
	display: block;\r
	resize: none;\r
	padding: 5px 11px;\r
	/*line-height: 1;*/\r
	box-sizing: border-box;\r
	font-size: inherit;\r
	font-family: inherit;\r
	color: var(--pops-panel-components-textarea-text-color);\r
	background-color: var(--pops-panel-components-textarea-text-bg-color);\r
	background-image: none;\r
	-webkit-appearance: none;\r
	appearance: none;\r
	box-shadow: none;\r
	border-radius: 0;\r
	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r
	border: 1px solid var(--pops-panel-components-textarea-bd-color);\r
}\r
.pops-panel-textarea textarea:hover {\r
	border-color: var(--pops-panel-components-textarea-hover-bd-color);\r
}\r
.pops-panel-textarea:has(textarea:disabled):hover {\r
	--pops-panel-components-textarea-hover-bd-color: var(\r
		--pops-panel-components-textarea-bd-color\r
	);\r
}\r
.pops-panel-textarea-disable .pops-panel-textarea textarea:hover {\r
	box-shadow: none;\r
}\r
.pops-panel-textarea textarea:focus {\r
	outline: 0;\r
	border-color: var(--pops-panel-components-textarea-focus-bd-color);\r
}\r
/* textarea的CSS */\r
\r
/* select的CSS */\r
.pops-panel-select {\r
	border: 0;\r
}\r
.pops-panel-select select {\r
	height: 32px;\r
	line-height: normal;\r
	align-content: center;\r
	min-width: 200px;\r
	border: 1px solid var(--pops-panel-components-select-bd-color);\r
	border-radius: 5px;\r
	text-align: center;\r
	outline: 0;\r
	color: var(--pops-panel-components-select-text-color);\r
	background-color: var(--pops-panel-components-select-bg-color);\r
	box-shadow: none;\r
}\r
.pops-panel-select select:hover {\r
	--pops-panel-components-select-bd-color: var(\r
		--pops-panel-components-select-hover-bd-color\r
	);\r
}\r
.pops-panel-select-disable .pops-panel-select select:hover {\r
	box-shadow: none;\r
}\r
.pops-panel-select select:focus {\r
	border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r
	box-shadow: none;\r
}\r
/* select的CSS */\r
\r
/* select-multiple的CSS*/\r
.pops-panel-select-multiple {\r
	--el-border-radius-base: 4px;\r
	--el-fill-color-blank: #ffffff;\r
	--el-transition-duration: 0.3s;\r
	--el-border-color: #dcdfe6;\r
	--el-text-color-placeholder: #a8abb2;\r
	--color: inherit;\r
	--el-select-input-color: #a8abb2;\r
	--el-select-input-font-size: 14px;\r
	--el-text-color-regular: #606266;\r
	--el-color-info: #909399;\r
	--el-color-info-light-9: #f4f4f5;\r
	--el-color-info-light-8: #e9e9eb;\r
	--el-color-primary-light-9: #ecf5ff;\r
	--el-color-primary-light-8: #d9ecff;\r
	--el-color-primary: #409eff;\r
	--el-color-white: #ffffff;\r
	width: 200px;\r
}\r
.pops-panel-select-multiple .el-select__wrapper {\r
	display: flex;\r
	align-items: center;\r
	position: relative;\r
	box-sizing: border-box;\r
	cursor: pointer;\r
	text-align: left;\r
	font-size: 14px;\r
	padding: 4px 12px;\r
	gap: 6px;\r
	min-height: 32px;\r
	line-height: normal;\r
	align-content: center;\r
	border-radius: var(--el-border-radius-base);\r
	background-color: var(--el-fill-color-blank);\r
	transition: var(--el-transition-duration);\r
	transform: translateZ(0);\r
	box-shadow: 0 0 0 1px var(--el-border-color) inset;\r
}\r
.pops-panel-select-multiple .el-select__wrapper.is-focused {\r
	box-shadow: 0 0 0 1px var(--el-color-primary) inset;\r
}\r
.pops-panel-select-multiple .el-select__selection {\r
	position: relative;\r
	display: flex;\r
	flex-wrap: wrap;\r
	align-items: center;\r
	flex: 1;\r
	min-width: 0;\r
	gap: 6px;\r
}\r
.pops-panel-select-multiple .el-select__selected-item {\r
	display: flex;\r
	flex-wrap: wrap;\r
	-webkit-user-select: none;\r
	user-select: none;\r
}\r
.pops-panel-select-multiple\r
	.el-select__selected-item.el-select__choose_tag\r
	.el-tag {\r
	max-width: 200px;\r
}\r
.pops-panel-select-multiple .el-select__input-wrapper {\r
	max-width: 100%;\r
}\r
.pops-panel-select-multiple .el-select__selection.is-near {\r
	margin-left: -8px;\r
}\r
.pops-panel-select-multiple .el-select__placeholder {\r
	position: absolute;\r
	display: block;\r
	top: 50%;\r
	transform: translateY(-50%);\r
	width: 100%;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	color: var(--el-input-text-color, var(--el-text-color-regular));\r
}\r
.pops-panel-select-multiple .el-select__placeholder.is-transparent {\r
	-webkit-user-select: none;\r
	user-select: none;\r
	color: var(--el-text-color-placeholder);\r
}\r
.pops-panel-select-multiple .el-select__prefix,\r
.pops-panel-select-multiple .el-select__suffix {\r
	display: flex;\r
	align-items: center;\r
	flex-shrink: 0;\r
	gap: 6px;\r
	color: var(--el-input-icon-color, var(--el-text-color-placeholder));\r
}\r
.pops-panel-select-multiple .el-icon {\r
	--color: inherit;\r
	height: 1em;\r
	width: 1em;\r
	line-height: normal;\r
	align-content: center;\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	fill: currentColor;\r
	color: var(--color);\r
	font-size: inherit;\r
}\r
.pops-panel-select-multiple .el-icon svg {\r
	height: 1em;\r
	width: 1em;\r
}\r
.pops-panel-select-multiple .el-select__caret {\r
	color: var(--el-select-input-color);\r
	font-size: var(--el-select-input-font-size);\r
	transition: var(--el-transition-duration);\r
	transform: rotate(0);\r
	cursor: pointer;\r
}\r
.pops-panel-select-multiple .el-tag {\r
	--el-tag-font-size: 12px;\r
	--el-tag-border-radius: 4px;\r
	--el-tag-border-radius-rounded: 9999px;\r
}\r
.pops-panel-select-multiple .el-tag {\r
	background-color: var(--el-tag-bg-color);\r
	border-color: var(--el-tag-border-color);\r
	color: var(--el-tag-text-color);\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	vertical-align: middle;\r
	height: 24px;\r
	padding: 0 9px;\r
	font-size: var(--el-tag-font-size);\r
	line-height: normal;\r
	align-content: center;\r
	border-width: 1px;\r
	border-style: solid;\r
	border-radius: var(--el-tag-border-radius);\r
	box-sizing: border-box;\r
	white-space: nowrap;\r
	--el-icon-size: 14px;\r
	--el-tag-bg-color: var(--el-color-primary-light-9);\r
	--el-tag-border-color: var(--el-color-primary-light-8);\r
	--el-tag-hover-color: var(--el-color-primary);\r
}\r
.pops-panel-select-multiple .el-select__selection .el-tag {\r
	cursor: pointer;\r
	border-color: transparent;\r
}\r
.pops-panel-select-multiple .el-tag.el-tag--info {\r
	--el-tag-bg-color: var(--el-color-info-light-9);\r
	--el-tag-border-color: var(--el-color-info-light-8);\r
	--el-tag-hover-color: var(--el-color-info);\r
}\r
.pops-panel-select-multiple .el-tag.el-tag--info {\r
	--el-tag-text-color: var(--el-color-info);\r
}\r
.pops-panel-select-multiple .el-tag.is-closable {\r
	padding-right: 5px;\r
}\r
.pops-panel-select-multiple .el-select__selection .el-tag .el-tag__content {\r
	min-width: 0;\r
}\r
.pops-panel-select-multiple .el-tag .el-tag__close {\r
	flex-shrink: 0;\r
	color: var(--el-tag-text-color);\r
}\r
.pops-panel-select-multiple .el-tag .el-tag__close:hover {\r
	color: var(--el-color-white);\r
	background-color: var(--el-tag-hover-color);\r
}\r
.pops-panel-select-multiple .el-tag .el-icon {\r
	border-radius: 50%;\r
	cursor: pointer;\r
	font-size: calc(var(--el-icon-size) - 2px);\r
	height: var(--el-icon-size);\r
	width: var(--el-icon-size);\r
}\r
.pops-panel-select-multiple .el-tag .el-tag__close {\r
	margin-left: 6px;\r
}\r
.pops-panel-select-multiple .el-select__tags-text {\r
	display: block;\r
	line-height: normal;\r
	align-content: center;\r
	overflow: hidden;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
}\r
/* select-multiple的CSS*/\r
\r
/* deepMenu的css */\r
.pops-panel-deepMenu-nav-item {\r
	cursor: pointer;\r
}\r
.pops-panel-deepMenu-nav-item:active {\r
	background: #e9e9e9;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
}\r
.pops-panel-deepMenu-nav-item .pops-panel-deepMenu {\r
	display: flex;\r
	align-items: center;\r
	color: #6c6c6c;\r
	fill: #6c6c6c;\r
}\r
.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon {\r
	width: 15px;\r
	height: 15px;\r
	display: flex;\r
	align-items: center;\r
}\r
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-header {\r
	display: flex;\r
	align-items: center;\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
	padding: var(--pops-panel-forms-header-padding-top-bottom)\r
		calc(\r
			var(--pops-panel-forms-margin-left-right) +\r
				var(--pops-panel-forms-container-li-padding-left-right) -\r
				var(--pops-panel-forms-header-icon-size)\r
		);\r
}\r
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r
	width: var(--pops-panel-forms-header-icon-size);\r
	height: var(--pops-panel-forms-header-icon-size);\r
	display: flex;\r
	align-items: center;\r
	cursor: pointer;\r
}\r
/* 修复safari上图标大小未正常显示 */\r
.pops-panel-deepMenu-container\r
	.pops-panel-deepMenu-container-left-arrow-icon\r
	> svg {\r
	width: inherit;\r
	height: inherit;\r
}\r
/* deepMenu的css */\r
\r
/* 文字对齐 */\r
.pops-panel-item-left-desc-text:has(code) {\r
	display: flex;\r
	align-items: baseline;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
	.pops[type-value="panel"] {\r
		--pops-bg-color: #000000;\r
		--pops-color: #f2f2f2;\r
		--title-bg-color: #000000;\r
		--aside-bg-color: #262626;\r
		--pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;\r
		--pops-panel-forms-container-item-bg-color: #262626;\r
		--pops-panel-forms-container-item-title-color: #c1c1c1;\r
\r
		--pops-panel-forms-container-li-border-color: rgb(\r
			51,\r
			51,\r
			51,\r
			var(--pops-bd-opacity)\r
		);\r
\r
		--pops-panel-components-input-text-color: #f2f2f2;\r
		--pops-panel-components-input-bd-color: #4f5052;\r
		--pops-panel-components-input-bg-color: #141414;\r
		--pops-panel-components-input-hover-bd-color: #6f7175;\r
		--pops-panel-components-input-focus-bd-color: #409eff;\r
		--pops-panel-components-input-suffix-color: #a8abb2;\r
\r
		--pops-panel-components-textarea-text-color: #f2f2f2;\r
		--pops-panel-components-textarea-text-bg-color: #141414;\r
		--pops-panel-components-textarea-bd-color: #4f5052;\r
		--pops-panel-components-textarea-hover-bd-color: #6f7175;\r
		--pops-panel-components-textarea-focus-bd-color: #409eff;\r
\r
		--pops-panel-components-select-text-color: #f2f2f2;\r
		--pops-panel-components-select-bd-color: rgb(\r
			51,\r
			51,\r
			51,\r
			var(--pops-bd-opacity)\r
		);\r
		--pops-panel-components-select-bg-color: #141414;\r
	}\r
	.pops[type-value="panel"]\r
		.pops-panel-deepMenu-container\r
		.pops-panel-deepMenu-container-left-arrow-icon {\r
		fill: #f2f2f2;\r
	}\r
\r
	.pops-panel-select-multiple {\r
		--el-fill-color-blank: #141414;\r
		--el-border-color: #4c4d4f;\r
		--el-text-color-placeholder: #a8abb2;\r
		--el-select-input-color: #a8abb2;\r
		--el-text-color-regular: #606266;\r
		--el-color-info: #909399;\r
		--el-color-info-light-8: #e9e9eb;\r
		--el-color-primary-light-9: #ecf5ff;\r
		--el-color-primary-light-8: #d9ecff;\r
		--el-color-primary: #409eff;\r
		--el-color-white: #ffffff;\r
	}\r
	.pops-panel-select-multiple .el-tag {\r
		--el-color-info-light-9: #202121;\r
	}\r
}\r
`,Ka=`.pops-rightClickMenu {\r
	--right-context-menu-shadow-color: #cacaca;\r
	--right-context-menu-row-visited-color: #dfdfdf;\r
	--right-context-menu-row-hover-color: #dfdfdf;\r
}\r
.pops-rightClickMenu * {\r
	-webkit-box-sizing: border-box;\r
	box-sizing: border-box;\r
	margin: 0;\r
	padding: 0;\r
	-webkit-tap-highlight-color: transparent;\r
	scrollbar-width: thin;\r
}\r
.pops-rightClickMenu {\r
	position: fixed;\r
	z-index: 10000;\r
	text-align: center;\r
	border-radius: 3px;\r
	font-size: 16px;\r
	font-weight: 500;\r
	background: #fff;\r
	box-shadow: 0px 1px 6px 1px var(--right-context-menu-shadow-color);\r
}\r
.pops-rightClickMenu-anim-grid {\r
	display: grid;\r
	transition: 0.3s;\r
	grid-template-rows: 0fr;\r
}\r
.pops-rightClickMenu-anim-show {\r
	grid-template-rows: 1fr;\r
}\r
.pops-rightClickMenu-is-visited {\r
	background: var(--right-context-menu-row-visited-color);\r
}\r
i.pops-rightClickMenu-icon {\r
	height: 1em;\r
	width: 1em;\r
	line-height: normal;\r
	align-content: center;\r
	display: inline-flex;\r
	justify-content: center;\r
	align-items: center;\r
	position: relative;\r
	fill: currentColor;\r
	color: inherit;\r
	font-size: inherit;\r
	margin-right: 6px;\r
}\r
i.pops-rightClickMenu-icon[is-loading="true"] {\r
	animation: rotating 2s linear infinite;\r
}\r
.pops-rightClickMenu li:hover {\r
	background: var(--right-context-menu-row-hover-color);\r
	cursor: pointer;\r
}\r
.pops-rightClickMenu ul {\r
	margin: 0;\r
	padding: 0;\r
	display: flex;\r
	flex-direction: column;\r
	align-items: flex-start;\r
	justify-content: center;\r
	overflow: hidden;\r
}\r
.pops-rightClickMenu ul li {\r
	padding: 5px 10px;\r
	margin: 5px 5px;\r
	border-radius: 3px;\r
	display: flex;\r
	width: -webkit-fill-available;\r
	width: -moz-available;\r
	text-align: left;\r
	user-select: none;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	align-items: center;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
	.pops-rightClickMenu {\r
		--right-context-menu-shadow-color: #3c3c3c;\r
	}\r
}\r
`;const B={index:Ra,ninePalaceGridPosition:Oa,scrollbar:Pa,button:Da,common:Ha,anim:Ba,alertCSS:Na,confirmCSS:Ua,promptCSS:Va,loadingCSS:za,iframeCSS:Ga,tooltipCSS:Fa,drawerCSS:ja,folderCSS:qa,panelCSS:Wa,rightClickMenu:Ka},ae={$data:{},$flag:{isInit:false},init(){if(!this.$flag.isInit){this.$flag.isInit=true;let a=document.createElement("style");Q.setSafeHTML(a,B.anim),p.appendHead(a),this.$data=null,this.$data=p.getKeyFrames(a.sheet),D.setTimeout(()=>{a.remove();},50);}},hasAnim(a){return this.$data.hasOwnProperty(a)}},ut={getMaxZIndexNodeInfo(a=1,t=V.document,e){a=Number.isNaN(a)?1:a;const n=2*Math.pow(10,9);let r=0,o=null;function i(l){return l.position!=="static"&&l.display!=="none"}function s(l){if(typeof e=="function"){let f=e(l);if(typeof f=="boolean"&&!f)return}const c=V.window.getComputedStyle(l);if(i(c)){let f=parseInt(c.zIndex);isNaN(f)||f>r&&(r=f,o=l),l.shadowRoot!=null&&l instanceof ShadowRoot&&l.shadowRoot.querySelectorAll("*").forEach(d=>{s(d);});}}return t.querySelectorAll("*").forEach((l,c)=>{s(l);}),r+=a,r>=n&&(r=n),{node:o,zIndex:r}},getPopsMaxZIndex(a=1){a=Number.isNaN(a)?1:a;const t=2*Math.pow(10,9);let e=0,n=null;function r(i){return i.position!=="static"&&i.display!=="none"}Object.keys(mt).forEach(i=>{let s=mt[i];for(let l=0;l<s.length;l++){const c=s[l];let f=window.getComputedStyle(c.animElement);if(r(f)){let d=parseInt(f.zIndex);isNaN(d)||d>e&&(e=d,n=c.animElement);}}}),e+=a;let o=e>=t;return o&&(e=t),{zIndex:e,animElement:n,isOverMaxZIndex:o}},getMaxZIndex(a=1){return this.getMaxZIndexNodeInfo(a).zIndex},removeInstance(a,t,e=false){function n(r){typeof r.beforeRemoveCallBack=="function"&&r.beforeRemoveCallBack(r),r?.animElement?.remove(),r?.popsElement?.remove(),r?.maskElement?.remove(),r?.$shadowContainer?.remove();}return a.forEach(r=>{r.forEach((o,i)=>{if(e||o.guid===t){let s=o.animElement.getAttribute("anim");if(ae.hasAnim(s)){let l=s+"-reverse";o.animElement.style.width="100%",o.animElement.style.height="100%",o.animElement.style["animation-name"]=l,ae.hasAnim(o.animElement.style["animation-name"])?p.on(o.animElement,p.getAnimationEndNameList(),function(){n(o);},{capture:true}):n(o);}else n(o);r.splice(i,1);}});}),a},hide(a,t,e,n,r,o){return new Promise(i=>{let s=r.querySelector(".pops[type-value]");if(a==="drawer"){let c=n;D.setTimeout(()=>{o.style.setProperty("display","none"),["top","bottom"].includes(c.direction)?s.style.setProperty("height","0"):["left","right"].includes(c.direction)?s.style.setProperty("width","0"):console.error("未知direction：",c.direction),i();},c.closeDelay);}else {let c=t.find(f=>f.guid===e);if(c){let f=c;if(f.animElement.style.width="100%",f.animElement.style.height="100%",f.animElement.style["animation-name"]=f.animElement.getAttribute("anim")+"-reverse",ae.hasAnim(f.animElement.style["animation-name"])){let d=function(){f.animElement.style.display="none",f.maskElement&&(f.maskElement.style.display="none"),p.off(f.animElement,p.getAnimationEndNameList(),d,{capture:true}),i();};p.on(f.animElement,p.getAnimationEndNameList(),d,{capture:true});}else f.animElement.style.display="none",f.maskElement&&(f.maskElement.style.display="none"),i();}}})},show(a,t,e,n,r,o){return new Promise(i=>{let s=r.querySelector(".pops[type-value]");if(a==="drawer"){let c=n;D.setTimeout(()=>{p.css(o,"display","");let f=c.direction,d=c.size.toString();["top","bottom"].includes(f)?s.style.setProperty("height",d):["left","right"].includes(f)?s.style.setProperty("width",d):console.error("未知direction：",f),i();},c.openDelay??0);}else {let c=t.find(f=>f.guid===e);if(c){let f=c;if(f.animElement.style.width="",f.animElement.style.height="",f.animElement.style["animation-name"]=f.animElement.getAttribute("anim").replace("-reverse",""),ae.hasAnim(f.animElement.style["animation-name"])){let d=function(){p.off(f.animElement,p.getAnimationEndNameList(),d,{capture:true}),i();};f.animElement.style.display="",f.maskElement&&(f.maskElement.style.display=""),p.on(f.animElement,p.getAnimationEndNameList(),d,{capture:true});}else f.animElement.style.display="",f.maskElement&&(f.maskElement.style.display=""),i();}}})},close(a,t,e,n,r){return new Promise(o=>{let i=r.querySelector(".pops[type-value]"),s=n;function l(){function c(d){d.propertyName==="transform"&&(p.off(i,p.getTransitionEndNameList(),void 0,c),ut.removeInstance([t],e),o());}if(p.on(i,p.getTransitionEndNameList(),c),getComputedStyle(i).transform!=="none"){p.trigger(i,p.getTransitionEndNameList(),void 0,true);return}["top"].includes(s.direction)?i.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(s.direction)?i.style.setProperty("transform","translateY(100%)"):["left"].includes(s.direction)?i.style.setProperty("transform","translateX(-100%)"):["right"].includes(s.direction)?i.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",s.direction);}a==="drawer"?D.setTimeout(()=>{l();},s.closeDelay):(ut.removeInstance([t],e),o());})},drag(a,t){t=Object.assign({limit:true,extraDistance:3,container:V.globalThis,triggerClick:true},t);let e=false,n=0,r=0,o=D.AnyTouch(),i=new o(t.dragElement,{preventDefault(b){return typeof t.preventEvent=="function"?t.preventEvent(b):true}});p.css(t.dragElement,{cursor:"move"});function s(b){let h=0,v=0,E=V.globalThis.getComputedStyle(b).transform;if(E!=="none"&&E!=null&&E!==""){let T=E.match(/\((.+)\)/)?.[1].split(",");h=Math.abs(parseInt(T[4])),v=Math.abs(parseInt(T[5]));}return {transformLeft:h,transformTop:v}}function l(b){let h=b.style.transitionDuration;return globalThis.getComputedStyle(b).transitionDuration!=="0s"&&(b.style.transitionDuration="0s"),()=>{b.style.transitionDuration=h;}}function c(b){return b=b??globalThis,{width:p.width(b),height:p.height(b)}}function f(b){if(b=b??globalThis,D.isWin(b))return {left:0,top:0};{let h=b.getBoundingClientRect();return {left:h.left,top:h.top}}}let d=s(a),u=d.transformLeft,g=d.transformTop,w=null;i.on("pan",function(b){if(!e){e=true;let E=t.dragElement.getBoundingClientRect();n=b.x-E.left,r=b.y-E.top,d=s(a),u=d.transformLeft,g=d.transformTop,w=l(a);}let h=b.x-n+u,v=b.y-r+g;if(b.phase==="move"){if(t.limit){let E=c(t.container).width-p.width(a)+u,{left:T,top:S}=f(t.container),C=c(t.container).height-p.height(a)+g;h>E&&(h=E),v>C&&(v=C),h-t.extraDistance*2<T+u?(h=T+u,h+=t.extraDistance):h-=t.extraDistance,v-t.extraDistance*2<S+g?(v=S+g,v+=t.extraDistance):v-=t.extraDistance;}typeof t.moveCallBack=="function"&&t.moveCallBack(a,h,v),p.css(a,{left:h+"px",top:v+"px"});}b.phase==="end"&&(e=false,typeof w=="function"&&(w(),w=null),typeof t.endCallBack=="function"&&t.endCallBack(a,h,v));}),t.triggerClick&&i.on(["tap"],function(b){b.changedPoints.forEach(h=>{p.trigger(h.target,"click",void 0,true);});});},sortElementListByProperty(a,t,e=true){if(typeof e!="boolean")throw new TypeError("参数 sortByDesc 必须为boolean类型");if(a==null||t==null)throw new Error("获取前面的值或后面的值的方法不能为空");return function(n,r){var o=a(r),i=t(n);return e?i>o?-1:i<o?1:0:i<o?-1:i>o?1:0}}},wt={config:{},setGlobalConfig(a){Reflect.ownKeys(a).forEach(t=>{Reflect.set(wt.config,t,Reflect.get(a,t));});},getGlobalConfig(){let a={};return Object.keys(wt.config).forEach(t=>{let e=Reflect.get(wt.config,t);if(t==="style"){let n=e==null?"":typeof e=="function"?e():e;typeof n=="string"&&(a.style=n);}else if(t==="zIndex"){let n=e==null?"":typeof e=="function"?e():e;if(typeof n=="string"){let r=n=Number(n);isNaN(r)||(a.zIndex=r);}else isNaN(n)||(a.zIndex=n);}else if(t==="mask"){let n=wt.config.mask==null?{}:wt.config.mask;typeof n=="object"&&n!=null&&(a.mask=n);}else Reflect.set(a,t,e);}),a}};var Xa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,Qa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,Ya=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,Ja=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,Za=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
	<path\r
		fill="currentColor"\r
		d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,ti=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,ei=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,ni=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,ri=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,oi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,ai=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,ii=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,si=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,li=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
		fill="currentColor"></path>\r
</svg>\r
`,ci=`<svg\r
	xmlns="http://www.w3.org/2000/svg"\r
	viewBox="0 0 1024 1024"\r
	xml:space="preserve">\r
	<path\r
		d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"\r
		fill="currentColor"></path>\r
	<path\r
		d="M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"\r
		fill="currentColor"></path>\r
	<path\r
		d="M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"\r
		fill="currentColor"></path>\r
</svg>\r
`,fi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,di=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,pi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,ui=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,bi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,hi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,gi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,mi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,yi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,xi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,wi=`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
	<path\r
		d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
	<path\r
		d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,vi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Ai=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`;const Ei={min:Xa,mise:Qa,max:Ya,close:Ja,edit:Za,share:ti,delete:ei,search:ni,upload:ri,loading:oi,next:ai,prev:ii,eleme:si,elemePlus:li,chromeFilled:ci,cpu:fi,videoPlay:di,videoPause:pi,headset:ui,monitor:bi,documentCopy:hi,picture:gi,circleClose:mi,view:yi,hide:xi,keyboard:wi,arrowRight:vi,arrowLeft:Ai},at={$data:Ei,hasIcon(a){return Object.keys(at.$data).includes(a)},getIcon(a){return at.$data[a]},deleteIcon(a){return Reflect.deleteProperty(at.$data,a)},setIcon(a,t){Reflect.set(at.$data,a,t);}},W={getMaskHTML(a,t=101,e=""){return t=t-100,e.startsWith(";")&&(e=e.replace(";","")),`<div class="pops-mask" data-guid="${a}" style="z-index:${t};${e}"></div>`},getAnimHTML(a,t,e,n="",r="",o){let i=e,s="",l="",c=i.position||"";e.zIndex!=null&&(s+=`z-index: ${o};`,l+=`z-index: ${o};`),i.width!=null&&(l+=`width: ${i.width};`),i.height!=null&&(l+=`height: ${i.height};`);let f=r.trim()!=="";return `
		<div class="pops-anim" anim="${i.animation||""}" style="${s}" data-guid="${a}">${e.style!=null?`<style tyle="text/css">${e.style}</style>`:""}
			<div class="pops ${e.class||""}" data-bottom-btn="${f}" type-value="${t}" style="${l}" position="${c}" data-guid="${a}">${n}</div>
		</div>`},getHeaderBtnHTML(a,t){if(!t.btn)return "";let e=t;if(a!=="iframe"&&!e.btn?.close?.enable)return "";let n="",r="",o=t;if(a==="iframe"&&o.topRightButton?.trim()!==""){let i="";o.topRightButton.split("|").forEach(s=>{s=s.toLowerCase(),i+=`
                <button class="pops-header-control" type="${s}">
                    <i class="pops-icon">${at.getIcon(s)}</i>
                </button>`;}),n=`
            <div class="pops-header-controls" data-margin>${i}</div>`;}else e.btn?.close?.enable&&(r=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    	<i class="pops-icon">${at.getIcon("close")}</i>
                    </button>
                </div>`),n=r;return n},getBottomBtnHTML(a,t){if(!t.btn)return "";let e=t;if(!(t.btn?.ok?.enable||e.btn?.cancel?.enable||e.btn?.other?.enable))return "";let n="",r="",o="",i="",s="";if(t.btn.position&&(n+=`justify-content: ${t.btn.position};`),e.btn.reverse&&(n+="flex-direction: row-reverse;"),t.btn?.ok?.enable){let l="";(t.btn.ok.size==="large"||t.btn.ok.size==="small")&&(l="pops-button-"+t.btn.ok.size);let c="",f=e.btn.ok.icon;if(f!==""){let d="";at.hasIcon(f)?d=at.getIcon(f):d=f,d=d||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.ok.iconIsLoading}">${d}</i>`;}o=`
            <button 
                    class="pops-${a}-btn-ok ${l}"
                    type="${e.btn.ok?.type}"
					data-has-icon="${(e.btn.ok.icon||"")!==""}"
                    data-rightIcon="${e.btn.ok?.rightIcon}"
            >${c}<span>${t.btn.ok.text}</span>
            </button>`;}if(e.btn?.cancel?.enable){let l="";(e.btn.cancel.size==="large"||e.btn.cancel.size==="small")&&(l="pops-button-"+e.btn.cancel.size);let c="",f=e.btn.cancel.icon;if(f!==""){let d="";at.hasIcon(f)?d=at.getIcon(f):d=f,d=d||"",c=`<i class="pops-bottom-icon" is-loading="${e.btn.cancel.iconIsLoading}">${d}</i>`;}i=`
            <button
                    class="pops-${a}-btn-cancel ${l}"
                    type="${e.btn.cancel.type}"
					data-has-icon="${(e.btn.cancel.icon||"")!==""}"
                    data-rightIcon="${e.btn.cancel.rightIcon}"
            >${c}<span>${e.btn.cancel.text}</span>
            </button>`;}if(e.btn?.other?.enable){let l="";(e.btn.other.size==="large"||e.btn.other.size==="small")&&(l="pops-button-"+e.btn.other.size);let c="",f=e.btn.other.icon;if(f!==""){let d="";at.hasIcon(f)&&(d=at.getIcon(f)),d=d||"",c=`<i class="pops-bottom-icon" is-loading="${e.btn.other.iconIsLoading}">${d}</i>`;}s=`
            <button
                    class="pops-${a}-btn-other ${l}"
                    type="${e.btn.other.type}"
					data-has-icon="${(e.btn.other.icon||"")!==""}"
                    data-rightIcon="${e.btn.other.rightIcon}"
            >${c}<span>${e.btn.other.text}</span>
            </button>`;}if(e.btn.merge){let l="display: flex;";e.btn.mergeReverse?l+="flex-direction: row-reverse;":l+="flex-direction: row;",r=`
            <div class="pops-botttom-btn-controls pops-${a}-btn" style="${n}">${s}<div 
                    class="pops-${a}-btn-merge"
                    style="${l}">${o}${i}</div>
            </div>
            `;}else r=`<div class="pops-botttom-btn-controls pops-${a}-btn" style="${n}">${o}${i}${s}</div>`;return r},getHeaderStyle(a,t){return {headerStyle:t?.title?.html&&t?.title?.style||"",headerPStyle:t?.title?.html?"":t?.title?.style||""}},getContentStyle(a,t){return {contentStyle:t?.content?.html&&t?.content?.style||"",contentPStyle:t?.content?.html?"":t?.content?.style||""}},parseElement(a){return p.parseTextToDOM(a)}},L={handlerShadow(a){let t=document.createElement("div");if(t.className="pops-shadow-container",a.useShadowRoot){let e=t.attachShadow({mode:"open"});return {$shadowContainer:t,$shadowRoot:e}}else return {$shadowContainer:t,$shadowRoot:t}},handleInit(a,t){if(ae.init(),!!arguments.length)if(Array.isArray(t))for(let e=0;e<t.length;e++)this.handleInit(a,t[e]);else {let e=p.createElement("style",{innerHTML:t},{"data-type":"PopsHandler.handleInit"});a.appendChild(e);}},handleMask(a={}){let t={maskElement:p.parseTextToDOM(a.maskHTML)},e=false;function n(o){p.preventEvent(o);let i=mt[a.type];function s(){if(a.config.mask.clickEvent.toClose)return ut.close(a.type,i,a.guid,a.config,a.animElement);if(a.config.mask.clickEvent.toHide)return ut.hide(a.type,i,a.guid,a.config,a.animElement,t.maskElement)}return typeof a.config.mask.clickCallBack=="function"?a.config.mask.clickCallBack(s,a.config):s(),false}if(a.config.mask.clickEvent.toClose||a.config.mask.clickEvent.toHide){let o=function(i){return !!(i?.localName?.toLowerCase()==="div"&&i.className&&i.className==="pops-anim"&&i.hasAttribute("anim"))};p.on(a.animElement,["touchstart","mousedown"],void 0,i=>{let s=i.composedPath()[0];e=o(s);}),p.on(a.animElement,"click",void 0,i=>{let s=i.composedPath()[0];if(o(s)&&e)return n(i)}),p.on(t.maskElement,"click",void 0,i=>{e=true,n(i);});}return t},handleQueryElement(a,t){return {popsElement:a.querySelector(".pops[type-value"),btnOkElement:a.querySelector(`.pops-${t}-btn-ok`),btnCancelElement:a.querySelector(`.pops-${t}-btn-cancel`),btnOtherElement:a.querySelector(`.pops-${t}-btn-other`),titleElement:a.querySelector(`.pops-${t}-title`),inputElement:a.querySelector(`.pops-${t}-content textarea[pops]`)?a.querySelector(`.pops-${t}-content textarea[pops]`):a.querySelector(`.pops-${t}-content input[pops]`),headerControlsElement:a.querySelector(".pops-header-controls"),iframeElement:a.querySelector("iframe[pops]"),loadingElement:a.querySelector(".pops-loading"),contentElement:a.querySelector(`.pops-${t}-content`),contentAsideElement:a.querySelector(`.pops-${t}-content aside.pops-${t}-aside`),contentSectionContainerElement:a.querySelector(`.pops-${t}-content section.pops-${t}-container`),contentLoadingElement:a.querySelector(`.pops-${t}-content-global-loading`),headerMinBtnElement:a.querySelector(".pops-header-control[type='min']"),headerMaxBtnElement:a.querySelector(".pops-header-control[type='max']"),headerMiseBtnElement:a.querySelector(".pops-header-control[type='mise']"),headerCloseBtnElement:a.querySelector(".pops-header-control[type='close']"),folderListElement:a.querySelector(".pops-folder-list"),folderListHeaderElement:a.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),folderListHeaderRowElement:a.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),folderListBodyElement:a.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),folderFileListBreadcrumbPrimaryElement:a.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),folderListSortFileNameElement:a.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),folderListSortLatestTimeElement:a.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),folderListSortFileSizeElement:a.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventDetails(a,t,e,n,r,o,i,s){return {$shadowContainer:t,$shadowRoot:e,element:r,animElement:r,popsElement:o,maskElement:i,mode:n,guid:a,close(){return ut.close(n,mt[n],a,s,r)},hide(){return ut.hide(n,mt[n],a,s,r,i)},show(){return ut.show(n,mt[n],a,s,r,i)}}},handleLoadingEventDetails(a,t,e,n,r,o){return {element:e,animElement:e,popsElement:n,maskElement:r,mode:t,guid:a,close(){return ut.close(t,mt[t],a,o,e)},hide(){return ut.hide(t,mt[t],a,o,e,r)},show(){return ut.show(t,mt[t],a,o,e,r)}}},handleResultDetails(a){let t=Object.assign({},a);return D.delete(t,"type"),D.delete(t,"function"),t},handleClickEvent(a,t,e,n){p.on(t,"click",r=>{n(Object.assign(e,{type:a}),r);},{capture:true});},handleKeyboardEvent(a,t=[],e){let n=function(r){let o=r.code||r.key,i=r.charCode||r.keyCode||r.which;t.includes("ctrl")&&!r.ctrlKey||t.includes("alt")&&!r.altKey||t.includes("meta")&&!r.metaKey||t.includes("shift")&&!r.shiftKey||(typeof a=="string"&&a===o?e&&e(r):typeof a=="number"&&a===i&&e&&e(r));};return p.on(V.globalThis,"keydown",n,{capture:true}),{removeKeyboardEvent(){p.off(globalThis,"keydown",n,{capture:true});}}},handlePromptClickEvent(a,t,e,n,r){p.on(e,"click",o=>{let i={type:a,text:t.value};r(Object.assign(n,i),o);},{capture:true});},handleZIndex(a){return typeof a=="function"?a():a},handleOnly(a,t){if(t.only)if(a==="loading"||a==="tooltip"||a==="rightClickMenu"){let e=mt[a];e&&ut.removeInstance([e],"",true);}else ut.removeInstance([mt.alert,mt.confirm,mt.prompt,mt.iframe,mt.drawer,mt.folder,mt.panel],"",true);else {let e=t.zIndex;t.zIndex=()=>{const{zIndex:n}=ut.getPopsMaxZIndex(L.handleZIndex(e)+100);return n};}return t},handlePush(a,t){mt[a].push(t);}},Ti=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:true,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback:function(a){a.close();}},close:{enable:true,callback:function(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),br={init(a){const t=D.getRandomGUID(),e="alert";let n=Ti();n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.button,B.anim,B.common,B.alertCSS]);let i=L.handleZIndex(n.zIndex),s=W.getMaskHTML(t,i),l=W.getHeaderBtnHTML(e,n),c=W.getBottomBtnHTML(e,n),{headerStyle:f,headerPStyle:d}=W.getHeaderStyle(e,n),{contentStyle:u,contentPStyle:g}=W.getContentStyle(e,n),w=W.getAnimHTML(t,e,n,`
			<div class="pops-title pops-${e}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops style="${d}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${e}-content" style="${u}">${n.content.html?n.content.text:`<p pops style="${g}">${n.content.text}</p>`}</div>${c}`,c,i),b=W.parseElement(w),{popsElement:h,headerCloseBtnElement:v,btnOkElement:E,titleElement:T}=L.handleQueryElement(b,e),S=null,C=[b];n.mask.enable&&(S=L.handleMask({type:e,guid:t,config:n,animElement:b,maskHTML:s}).maskElement,C.push(S));let I=L.handleEventDetails(t,r,o,e,b,h,S,n);return L.handleClickEvent("close",v,I,n.btn.close.callback),L.handleClickEvent("ok",E,I,n.btn.ok.callback),p.append(o,C),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),S!=null&&b.after(S),L.handlePush(e,{guid:t,animElement:b,popsElement:h,maskElement:S,$shadowContainer:r,$shadowRoot:o}),n.drag&&ut.drag(h,{dragElement:T,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),L.handleResultDetails(I)}},Si=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Ci={init(a){const t=D.getRandomGUID(),e="confirm";let n=Si();n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.button,B.anim,B.common,B.confirmCSS]);let i=L.handleZIndex(n.zIndex),s=W.getMaskHTML(t,i),l=W.getHeaderBtnHTML(e,n),c=W.getBottomBtnHTML(e,n),{headerStyle:f,headerPStyle:d}=W.getHeaderStyle(e,n),{contentStyle:u,contentPStyle:g}=W.getContentStyle(e,n),w=W.getAnimHTML(t,e,n,`
            <div class="pops-title pops-${e}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops style="${d}">${n.title.text}</p>`}${l}</div>
                        <div class="pops-content pops-${e}-content" style="${u}">${n.content.html?n.content.text:`<p pops style="${g}">${n.content.text}</p>`}</div>${c}`,c,i),b=W.parseElement(w),{popsElement:h,titleElement:v,headerCloseBtnElement:E,btnOkElement:T,btnCancelElement:S,btnOtherElement:C}=L.handleQueryElement(b,e),I=null,q=[b];n.mask.enable&&(I=L.handleMask({type:e,guid:t,config:n,animElement:b,maskHTML:s}).maskElement,q.push(I));let j=L.handleEventDetails(t,r,o,e,b,h,I,n);return L.handleClickEvent("close",E,j,n.btn.close.callback),L.handleClickEvent("ok",T,j,n.btn.ok.callback),L.handleClickEvent("cancel",S,j,n.btn.cancel.callback),L.handleClickEvent("other",C,j,n.btn.other.callback),p.append(o,q),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),I!=null&&b.after(I),L.handlePush(e,{guid:t,animElement:b,popsElement:h,maskElement:I,$shadowContainer:r,$shadowRoot:o}),n.drag&&ut.drag(h,{dragElement:v,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),L.handleResultDetails(j)}},ki=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"",select:false,password:false,row:false,focus:true,placeholder:"默认提示",style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"success",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Mi={init(a){const t=D.getRandomGUID(),e="prompt";let n=ki();n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.button,B.anim,B.common,B.promptCSS]);let i=L.handleZIndex(n.zIndex),s=W.getMaskHTML(t,i),l=W.getHeaderBtnHTML(e,n),c=W.getBottomBtnHTML(e,n),{headerStyle:f,headerPStyle:d}=W.getHeaderStyle(e,n),{contentPStyle:u}=W.getContentStyle(e,n),g=W.getAnimHTML(t,e,n,`
            <div class="pops-title pops-${e}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops style="${d}">${n.title.text}</p>`}${l}</div>
            <div class="pops-content pops-${e}-content" style="${u}">${n.content.row?'<textarea name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'"></textarea>':'<input name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'" type="'+(n.content.password?"password":"text")+'">'}</div>${c}`,c,i),w=W.parseElement(g),{popsElement:b,inputElement:h,headerCloseBtnElement:v,btnOkElement:E,btnCancelElement:T,btnOtherElement:S,titleElement:C}=L.handleQueryElement(w,e),I=null,q=[w];n.mask.enable&&(I=L.handleMask({type:e,guid:t,config:n,animElement:w,maskHTML:s}).maskElement,q.push(I));let j=L.handleEventDetails(t,r,o,e,w,b,I,n);return h.value=n.content.text,L.handlePromptClickEvent("close",h,v,j,n.btn.close.callback),L.handlePromptClickEvent("ok",h,E,j,n.btn.ok.callback),L.handlePromptClickEvent("cancel",h,T,j,n.btn.cancel.callback),L.handlePromptClickEvent("other",h,S,j,n.btn.other.callback),p.append(o,q),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),I!=null&&w.after(I),L.handlePush(e,{guid:t,animElement:w,popsElement:b,maskElement:I,$shadowContainer:r,$shadowRoot:o}),n.drag&&ut.drag(b,{dragElement:C,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),n.content.focus&&h.focus(),n.content.select&&h.select(),L.handleResultDetails(j)}},$i=()=>({parent:document.body,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:true,class:"",only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:false,isAbsolute:false,style:null,addIndexCSS:true}),Ye={init(a){let t=$i();t=D.assign(t,wt.getGlobalConfig()),t=D.assign(t,a);let e=D.getRandomGUID();const n="loading";t=L.handleOnly(n,t);let r=L.handleZIndex(t.zIndex),o=W.getMaskHTML(e,r),{contentPStyle:i}=W.getContentStyle("loading",t),s=W.getAnimHTML(e,n,t,`
            <div class="pops-content pops-${n}-content">${t.addIndexCSS?`
                <style data-model-name="index">${B.index}</style>
                <style data-model-name="anim">${B.anim}</style>
                <style data-model-name="common">${B.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${B.loadingCSS}
                </style>
            ${t.style!=null?`<style>${t.style}</style>`:""}
            	<p pops style="${i}">${t.content.text}</p>
            </div>`,"",r),l=W.parseElement(s),{popsElement:c}=L.handleQueryElement(l,n),f=null,d=[l];t.mask.enable&&(f=L.handleMask({type:n,guid:e,config:t,animElement:l,maskHTML:o}).maskElement,d.push(f));let u=L.handleLoadingEventDetails(e,n,l,c,f,t);return p.append(t.parent,d),f!=null&&l.after(f),L.handlePush(n,{guid:e,animElement:l,popsElement:c,maskElement:f}),t.isAbsolute&&(p.css(l,"position","absolute !important"),f&&p.css(f,"position","absolute !important")),L.handleResultDetails(u)}},Li=()=>({title:{position:"center",text:"",html:false,style:""},loading:{enable:true,icon:true,text:""},useShadowRoot:true,class:"",url:window.location.href,only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:true,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:"300px",height:"250px",topRightButton:"min|max|mise|close",sandbox:false,forbiddenScroll:false,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}}),Ii={init(a){const t=D.getRandomGUID(),e="iframe";let n=Li();if(n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n.url==null)throw new Error("config.url不能为空");n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.anim,B.common,B.iframeCSS]);let i=n.animation!=null&&n.animation!=""?"position:absolute;":"",s=L.handleZIndex(n.zIndex),l=W.getMaskHTML(t,s,i),c=W.getHeaderBtnHTML(e,n),f='<div class="pops-loading"></div>',d=n.title.text.trim()!==""?n.title.text:n.url,{headerStyle:u,headerPStyle:g}=W.getHeaderStyle(e,n),w=W.getAnimHTML(t,e,n,`
            <div class="pops-title pops-${e}-title" style="text-align: ${n.title.position};${u}">${n.title.html?d:`<p pops style="${g}">${d}</p>`}${c}</div>
			<div class="pops-content pops-${e}-content">
                <div class="pops-${e}-content-global-loading"></div>
                <iframe src="${n.url}" pops ${n.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
			</div>${n.loading.enable?f:""}`,"",s),b=W.parseElement(w),{popsElement:h,headerCloseBtnElement:v,headerControlsElement:E,titleElement:T,iframeElement:S,loadingElement:C,contentLoadingElement:I,headerMinBtnElement:q,headerMaxBtnElement:j,headerMiseBtnElement:J}=L.handleQueryElement(b,e),Z=V.document.querySelector(".pops-iframe-container");Z||(Z=V.document.createElement("div"),Z.className="pops-iframe-container",Z.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;",p.appendBody(Z));let lt=null,k=[b];n.mask.enable&&(lt=L.handleMask({type:e,guid:t,config:n,animElement:b,maskHTML:l}).maskElement,k.push(lt));let x=L.handleEventDetails(t,r,o,e,b,h,lt,n);x.iframeElement=S,p.on(b,p.getAnimationEndNameList(),function(){b.style.width="0%",b.style.height="0%";}),p.on(S,"load",()=>{C?.remove(),I.style.animation="iframeLoadingChange_85 0.3s forwards",p.on(I,p.getAnimationEndNameList(),()=>{I.remove();}),n.title.text.trim()===""&&S.contentDocument&&(T.querySelector("p").innerText=S.contentDocument.title),n.loadEndCallBack(x);}),p.append(o,k),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),Z.appendChild(r),lt!=null&&b.after(lt),n.drag&&ut.drag(h,{dragElement:T,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack});const m="type-module";let y="",M="",_=false;return p.on(q,"click",H=>{H.preventDefault(),H.stopPropagation(),y=h.style.left,M=h.style.top,h.classList.add("pops-iframe-unset-top"),h.classList.add("pops-iframe-unset-left"),h.classList.add("pops-iframe-unset-transform"),h.style.transitionDuration="",h.setAttribute(m,"min"),E.setAttribute("type","min"),j.style.setProperty("display","none"),J.style.setProperty("display",""),typeof n?.btn?.min?.callback=="function"&&n.btn.min.callback(x,H);},{capture:true}),p.on(j,"click",H=>{H.preventDefault(),H.stopPropagation(),h.getAttribute(m)!=="min"&&(y=h.style.left,M=h.style.top),_=true,h.style.transitionDuration="",h.style.transform="",h.removeAttribute(m),h.classList.add("pops-iframe-unset-transition"),h.classList.add("pops-iframe-unset-left"),h.classList.add("pops-iframe-unset-top"),h.classList.add("pops-iframe-unset-transform"),h.classList.remove("pops-iframe-unset-transition"),h.setAttribute(m,"max"),E.setAttribute("type","max"),j.style.setProperty("display","none"),J.style.setProperty("display",""),typeof n?.btn?.max?.callback=="function"&&n.btn.max.callback(x,H);},{capture:true}),J?.style?.setProperty("display","none"),p.on(J,"click",H=>{H.preventDefault(),H.stopPropagation(),_&&h.getAttribute(m)==="min"?(h.classList.add("pops-iframe-unset-transition"),h.classList.add("pops-iframe-unset-left"),h.classList.add("pops-iframe-unset-top"),h.classList.add("pops-iframe-unset-transform"),h.classList.remove("pops-iframe-unset-transition"),h.setAttribute(m,"max"),E.setAttribute("type","max")):(_=false,h.style.left=y,h.style.top=M,h.style.transitionDuration="",h.style.transform="",E.removeAttribute("type"),h.removeAttribute(m),h.classList.remove("pops-iframe-unset-top"),h.classList.remove("pops-iframe-unset-left"),h.classList.remove("pops-iframe-unset-transform"),j.style.setProperty("display",""),J.style.setProperty("display","none")),typeof n?.btn?.mise?.callback=="function"&&n.btn.mise.callback(x,H);},{capture:true}),p.on(v,"click",H=>{H.preventDefault(),H.stopPropagation(),ut.removeInstance([mt.iframe],t,false),typeof n?.btn?.close?.callback=="function"&&n.btn.close.callback(x,H);},{capture:true}),L.handlePush(e,{guid:t,animElement:b,popsElement:h,maskElement:lt,$shadowContainer:r,$shadowRoot:o}),L.handleResultDetails(x)}},_i=()=>({title:{enable:true,position:"center",text:"默认标题",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",zIndex:1e4,only:false,direction:"right",size:"30%",lockScroll:false,closeOnPressEscape:true,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:false}),Ri={init(a){const t=D.getRandomGUID(),e="drawer";let n=_i();n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.button,B.anim,B.common,B.drawerCSS]);let i=L.handleZIndex(n.zIndex),s=W.getMaskHTML(t,i),l=W.getHeaderBtnHTML(e,n),c=W.getBottomBtnHTML(e,n),{headerStyle:f,headerPStyle:d}=W.getHeaderStyle(e,n),{contentStyle:u,contentPStyle:g}=W.getContentStyle(e,n),w=W.getAnimHTML(t,e,n,`
            ${n.title.enable?`<div class="pops-title pops-${e}-title" style="${f}">${n.title.html?n.title.text:`<p pops style="width: 100%;text-align: ${n.title.position};${d}">${n.title.text}</p>`}${l}</div>`:""}
            <div class="pops-content pops-${e}-content" style="${u}">${n.content.html?n.content.text:`<p pops style="${g}">${n.content.text}</p>`}</div>${c}`,c,i),b=W.parseElement(w),{popsElement:h,headerCloseBtnElement:v,btnCancelElement:E,btnOkElement:T,btnOtherElement:S}=L.handleQueryElement(b,e),C=h,I=v,q=E,j=T,J=S,Z=null,lt=[b];n.mask.enable&&(Z=L.handleMask({type:e,guid:t,config:n,animElement:b,maskHTML:s}).maskElement,lt.push(Z));let k=L.handleEventDetails(t,r,o,e,b,C,Z,n);return C.setAttribute("direction",n.direction),n.direction==="top"?(C.style.setProperty("height","0"),C.style.setProperty("border-radius",`0px 0px ${n.borderRadius}px ${n.borderRadius}px`)):n.direction==="bottom"?(C.style.setProperty("height","0"),C.style.setProperty("border-radius",`${n.borderRadius}px ${n.borderRadius}px 0px 0px`)):n.direction==="left"?(C.style.setProperty("width","0"),C.style.setProperty("border-radius",`0px ${n.borderRadius}px 0px ${n.borderRadius}px`)):n.direction==="right"&&(C.style.setProperty("width","0"),C.style.setProperty("border-radius",`${n.borderRadius}px 0px ${n.borderRadius}px 0px`)),n.closeOnPressEscape&&L.handleKeyboardEvent("Escape",[],function(){k.close();}),[{type:"close",ele:I},{type:"cancel",ele:q},{type:"ok",ele:j},{type:"other",ele:J}].forEach(y=>{L.handleClickEvent(y.type,y.ele,k,M=>{typeof n.btn[y.type].callback=="function"&&n.btn[y.type].callback(M);});}),lt.forEach(y=>{y.style.setProperty("display","none"),["top"].includes(n.direction)?(C.style.setProperty("height",n.size.toString()),C.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(n.direction)?(C.style.setProperty("height",n.size.toString()),C.style.setProperty("transform","translateY(100%)")):["left"].includes(n.direction)?(C.style.setProperty("width",n.size.toString()),C.style.setProperty("transform","translateX(-100%)")):["right"].includes(n.direction)&&(C.style.setProperty("width",n.size.toString()),C.style.setProperty("transform","translateX(100%)")),y.style.setProperty("display","");}),p.append(o,lt),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),D.setTimeout(()=>{D.setTimeout(()=>{C.style.setProperty("transform","");},n.openDelay);},50),Z!=null&&b.after(Z),L.handlePush(e,{guid:t,animElement:b,popsElement:C,maskElement:Z,$shadowContainer:r,$shadowRoot:o}),L.handleResultDetails(k)}},Oi=()=>({title:{text:"pops.Folder",position:"center",html:false,style:""},sort:{name:"latestTime",isDesc:false,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"测试文件夹2222",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}]}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}],btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:"500px",height:"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),st={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="},Pi={init(a){const t=D.getRandomGUID(),e="folder";let n=Oi();n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.button,B.anim,B.common,B.folderCSS]),st.docx=st.doc,st.rtf=st.doc,st.xlsx=st.xls,st.pptx=st.ppt,st.dmg=st.ipa,st.json=st.js;let i=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],s=["jpg","jpeg","ico","webp"],l=["htm","py","vue","bat","sh","vbs","java","kt"],c=["apk","apkm","xapk"];i.forEach(G=>{st[G]=st.zip;}),s.forEach(G=>{st[G]=st.png;}),l.forEach(G=>{st[G]=st.html;}),c.forEach(G=>{st[G]=st.apk;}),a?.folder&&(n.folder=a.folder);let f=L.handleZIndex(n.zIndex),d=W.getMaskHTML(t,f),u=W.getHeaderBtnHTML(e,n),g=W.getBottomBtnHTML(e,n),{headerStyle:w,headerPStyle:b}=W.getHeaderStyle(e,n),h=W.getAnimHTML(t,e,n,`
            <div class="pops-title pops-${e}-title" style="text-align: ${n.title.position};${w}">${n.title.html?n.title.text:`<p pops style="${b}">${n.title.text}</p>`}${u}</div>
			<div class="pops-content pops-${e}-content ${D.isPhone()?"pops-mobile-folder-content":""}">
                <div class="pops-folder-list">
                    <div class="pops-folder-file-list-breadcrumb">
                    <div class="pops-folder-file-list-breadcrumb-primary">
                        <span class="pops-folder-file-list-breadcrumb-allFiles cursor-p" title="全部文件">
                        <a>全部文件</a>
                        </span>
                    </div>
                    </div>
                    <div class="pops-folder-list-table__header-div">
                    <table class="pops-folder-list-table__header">
                        <colgroup>
                        <col width="52%">
                        <col width="24%">
                        <col width="16%">
                        </colgroup>
                        <thead>
                        <tr class="pops-folder-list-table__header-row">
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>文件名</span>
                                <div class="pops-folder-list-table__sort" data-sort="fileName">
                                <div class="pops-folder-icon-arrow" data-sort="按文件名排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>修改时间</span>
                                <div class="pops-folder-list-table__sort" data-sort="latestTime">
                                <div class="pops-folder-icon-arrow" title="按修改时间排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>大小</span>
                                <div class="pops-folder-list-table__sort" data-sort="fileSize">
                                <div class="pops-folder-icon-arrow" title="按大小排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    </div>
                    <div class="pops-folder-list-table__body-div">
                    <table class="pops-folder-list-table__body">
                        <colgroup>
                        ${D.isPhone()?'<col width="100%">':`
                            <col width="52%">
                            <col width="24%">
                            <col width="16%">`}
                        
                        </colgroup>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>${g}`,g,f),v=W.parseElement(h),{popsElement:E,titleElement:T,contentElement:S,folderListBodyElement:C,folderFileListBreadcrumbPrimaryElement:I,headerCloseBtnElement:q,btnOkElement:j,btnCancelElement:J,btnOtherElement:Z,folderListSortFileNameElement:lt,folderListSortLatestTimeElement:k,folderListSortFileSizeElement:x}=L.handleQueryElement(v,e),m=null,y=[v];n.mask.enable&&(m=L.handleMask({type:e,guid:t,config:n,animElement:v,maskHTML:d}).maskElement,y.push(m));let M=L.handleEventDetails(t,r,o,e,v,E,m,n);L.handleClickEvent("close",q,M,n.btn.close.callback),L.handleClickEvent("ok",j,M,n.btn.ok.callback),L.handleClickEvent("cancel",J,M,n.btn.cancel.callback),L.handleClickEvent("other",Z,M,n.btn.other.callback),p.append(o,y),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),m!=null&&v.after(m),n.folder.sort();function _(G,F="-",tt="-",dt=false){let X=G,nt=F,At=tt,gt=p.createElement("tr"),xt=p.createElement("td"),ht=p.createElement("td"),Mt=p.createElement("td"),Zt="",Rt=st.folder;if(dt)F="",tt="";else {Rt="",typeof F=="number"&&(F=D.formatTime(F)),typeof tt=="number"&&(tt=D.formatByteToSize(tt));for(let He in st)if(G.toLowerCase().endsWith("."+He)){Zt=He,Rt=st[He];break}Rt||(Zt="Null",Rt=st.Null);}gt.className="pops-folder-list-table__body-row",xt.className="pops-folder-list-table__body-td",ht.className="pops-folder-list-table__body-td",Mt.className="pops-folder-list-table__body-td",Q.setSafeHTML(xt,`
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${Rt}" alt="${Zt}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${G}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${G}
						</a>
					</div>
				</div>
            `),Q.setSafeHTML(ht,`
				<div class="pops-folder-list__time">
					<span>${F}</span>
				</div>
				`),Q.setSafeHTML(Mt,`
				<div class="pops-folder-list-format-size">
					<span>${tt}</span>
				</div>
				`);let me={fileName:X,latestTime:nt,fileSize:At,isFolder:dt};return xt.__value__=me,ht.__value__=me,Mt.__value__=me,gt.__value__=me,gt.appendChild(xt),gt.appendChild(ht),gt.appendChild(Mt),{folderELement:gt,fileNameElement:xt,fileTimeElement:ht,fileFormatSize:Mt}}function P(G,F="-",tt="-",dt=false){let X=G,nt=F,At=tt,gt=p.createElement("tr"),xt=p.createElement("td"),ht="",Mt=st.folder;if(dt)F="",tt="";else {Mt="",typeof F=="number"&&(F=D.formatTime(F)),typeof tt=="number"&&(tt=D.formatByteToSize(tt));for(let Rt in st)if(G.toLowerCase().endsWith("."+Rt)){ht=Rt,Mt=st[Rt];break}Mt||(ht="Null",Mt=st.Null);}gt.className="pops-folder-list-table__body-row",xt.className="pops-folder-list-table__body-td",Q.setSafeHTML(xt,`
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${Mt}" alt="${ht}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${G}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${G}</a>
						<span>${F} ${tt}</span>
					</div>
				</div>
			`);let Zt={fileName:X,latestTime:nt,fileSize:At,isFolder:dt};return xt.__value__=Zt,gt.__value__=Zt,gt.appendChild(xt),{folderELement:gt,fileNameElement:xt}}function H(){Q.setSafeHTML(C,"");}function pt(){return p.createElement("div",{className:"iconArrow"})}function yt(G,F){return p.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${G}</a>`,_config_:F},{title:"name"})}function K(G,F,tt){H();let X=G.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(X)for(;X.nextElementSibling;)X.nextElementSibling.remove();else console.error("获取导航按钮失败");let nt=Ye.init({parent:S,content:{text:"获取文件列表中..."},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},addIndexCSS:false});Pe(tt),nt.close();}async function ct(G,F){H();let tt=Ye.init({parent:S,content:{text:"获取文件列表中..."},mask:{enable:true},addIndexCSS:false});if(typeof F.clickEvent=="function"){let dt=await F.clickEvent(G,F);I.appendChild(pt());let X=yt(F.fileName,dt);I.appendChild(X),p.on(X,"click",function(nt){K(nt,false,dt);}),Pe(dt);}tt.close();}function kt(G,F){p.on(G,"click",async function(tt){tt?.preventDefault(),tt?.stopPropagation(),tt?.stopImmediatePropagation();let dt=G.querySelector("a");if(typeof F.clickEvent=="function"){let X=await F.clickEvent(tt,F);if(X!=null&&typeof X=="object"&&!Array.isArray(X)&&typeof X.url=="string"&&X.url.trim()!==""&&(dt.setAttribute("href",X.url),dt.setAttribute("target","_blank"),X.autoDownload))if((X.mode==null||X.mode==="")&&(X.mode="aBlank"),X.mode==="a"||X.mode==="aBlank"){let nt=document.createElement("a");X.mode==="aBlank"&&nt.setAttribute("target","_blank"),nt.href=X.url,nt.click();}else if(X.mode==="open"||X.mode==="openBlank")X.mode==="openBlank"?globalThis.open(X.url,"_blank"):globalThis.open(X.url);else if(X.mode==="iframe"){let nt=document.createElement("iframe");nt.src=X.url,nt.onload=function(){D.setTimeout(()=>{nt.remove();},1e3);},o.appendChild(nt),D.setTimeout(()=>{nt.remove();},3*60*1e3);}else console.error("未知的下载模式",X);}});}function Jt(G,F="fileName",tt=false){if(F==="fileName"){let dt=G.filter(nt=>nt.isFolder),X=G.filter(nt=>!nt.isFolder);return dt.sort((nt,At)=>{let gt=nt[F].toString(),xt=At[F].toString(),ht=gt.localeCompare(xt);return tt&&(ht>0?ht=-1:ht<0&&(ht=1)),ht}),X.sort((nt,At)=>{let gt=nt[F].toString(),xt=At[F].toString(),ht=gt.localeCompare(xt);return tt&&(ht>0?ht=-1:ht<0&&(ht=1)),ht}),tt?[...X,...dt]:[...dt,...X]}else return G.sort((dt,X)=>{let nt=dt[F],At=X[F];return F==="fileSize"?(nt=parseFloat(nt.toString()),At=parseFloat(At.toString())):F==="latestTime"&&(nt=new Date(nt).getTime(),At=new Date(At).getTime()),nt>At?tt?-1:1:nt<At?tt?1:-1:0}),G}function Pe(G){Jt(G,n.sort.name,n.sort.isDesc),G.forEach(F=>{if(F.isFolder){let{folderELement:tt,fileNameElement:dt}=D.isPhone()?P(F.fileName,"","",true):_(F.fileName,"","",true);p.on(dt,"click",X=>{ct(X,F);}),C.appendChild(tt);}else {let{folderELement:tt,fileNameElement:dt}=D.isPhone()?P(F.fileName,F.latestTime,F.fileSize,false):_(F.fileName,F.latestTime,F.fileSize,false);kt(dt,F),C.appendChild(tt);}});}Pe(n.folder);let ln=I.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");ln._config_=n.folder,p.on(ln,"click",G=>{K(G,true,n.folder);});function wr(){[...Array.from(lt.querySelectorAll(".pops-folder-icon-active")),...Array.from(k.querySelectorAll(".pops-folder-icon-active")),...Array.from(x.querySelectorAll(".pops-folder-icon-active"))].forEach(G=>G.classList.remove("pops-folder-icon-active"));}function vr(G,F,tt){wr(),tt?F.classList.add("pops-folder-icon-active"):G.classList.add("pops-folder-icon-active");}function De(G,F,tt){F.notChangeSortRule||(n.sort.name=tt,n.sort.isDesc=!n.sort.isDesc);let dt=G.querySelector(".pops-folder-icon-arrow-up"),X=G.querySelector(".pops-folder-icon-arrow-down");if(vr(dt,X,n.sort.isDesc),typeof n.sort.callback=="function"&&n.sort.callback(G,F,n.sort.name,n.sort.isDesc))return;let nt=[];Array.from(C.children).forEach(gt=>{let xt=gt.__value__;xt.target=gt,nt.push(xt);}),Jt(nt,n.sort.name,n.sort.isDesc).forEach(gt=>{C.appendChild(gt.target);});}return p.on(lt.closest("th"),"click",function(G){De(lt,G,"fileName");},{capture:true}),p.on(k.closest("th"),"click",void 0,function(G){De(k,G,"latestTime");},{capture:true}),p.on(x.closest("th"),"click",void 0,function(G){De(x,G,"fileSize");},{capture:true}),n.sort.name==="fileName"?p.trigger(lt,"click",{notChangeSortRule:true}):n.sort.name==="latestTime"?p.trigger(k,"click",{notChangeSortRule:true}):n.sort.name==="fileSize"&&p.trigger(x,"click",{notChangeSortRule:true}),n.drag&&ut.drag(E,{dragElement:T,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),L.handlePush(e,{guid:t,animElement:v,popsElement:E,maskElement:m,$shadowContainer:r,$shadowRoot:o}),L.handleResultDetails(M)}},Di=()=>({title:{text:"默认标题",position:"center",html:false,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:false,attributes:[{"data-test":"test","data-test-2":"test2"}],forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},disabled:false,attributes:[],getValue(){return  true},callback(a,t){console.log("按钮开启状态：",t);}},{className:"panel-slider",text:"slider",type:"slider",props:{},attributes:[],getValue(){return 50},callback(a,t){console.log("滑块当前数值：",t);},min:1,max:100},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",attributes:[],props:{},buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(a){console.log("点击按钮",a);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:true,attributes:[{"data-value":"value","data-value-2":"value2"}],forms:[{className:"panel-input",text:"input",type:"input",props:{},attributes:[],getValue(){return "50"},callback(a,t){p.preventEvent(a),console.log("输入框内容改变：",t);},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",props:{},attributes:[],getValue(){return "123456"},callback(a,t){p.preventEvent(a),console.log("密码输入框内容改变：",t);},isPassword:true,placeholder:"请输入密码"},{className:"panel-textarea",text:"textarea",type:"textarea",props:{},attributes:[],getValue(){return "50"},callback(a,t){p.preventEvent(a),console.log("textarea输入框内容改变：",t);},placeholder:"请输入内容"},{className:"panel-select",text:"select",type:"select",props:{},attributes:[],getValue(){return 50},callback(a,t,e){console.log(`select当前选项：${t}，当前选项文本：${e}`);},data:[{value:"all",text:"所有",disable(){return  false},forms:[]},{value:"text",text:"文本",disable(){return  false},forms:[]},{value:"html",text:"超文本",disable(){return  false},forms:[]}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",props:{},attributes:[],placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(a){console.log("select值改变，多选信息",a);},clickCallBack(a,t){console.log("点击",a,t);},closeIconClickCallBack(a,t){console.log("点击关闭图标的事件",t);},data:[{value:"select-1",text:"单选1",isHTML:false,disable(a,t){return t.findIndex(e=>["select-5"].includes(e.value))!==-1}},{value:"select-2",text:"单选2",isHTML:false,disable(a,t){return t.findIndex(e=>["select-5"].includes(e.value))!==-1}},{value:"select-3",text:"单选3",isHTML:false,disable(a,t){return t.findIndex(e=>["select-2","select-5"].includes(e.value))!==-1}},{value:"select-4",text:"单选4",isHTML:false,disable(a,t){return t.findIndex(e=>["select-3","select-5"].includes(e.value))!==-1}},{value:"select-5",text(a,t){return t.findIndex(e=>["select-4"].includes(e.value))!==-1?"单选5-禁用":"单选5"},isHTML:false,disable(a,t){return t.findIndex(e=>["select-4"].includes(e.value))!==-1}}]},{type:"forms",text:"deep菜单",forms:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(a,t){console.log(a,t);},clickCallBack(a,t){console.log("进入子配置",a,t);},forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(a,t){console.log("按钮开启状态：",t);}},{className:"panel-slider",text:"slider",props:{},type:"slider",attributes:[],getValue(){return 50},callback(a,t){console.log("滑块当前数值：",t);},min:1,max:100},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(a){console.log("点击按钮",a);}}]}]}]},{type:"forms",isFold:true,text:"折叠菜单",afterAddToUListCallBack(a,t){console.log(a,t);},forms:[{className:"panel-switch",text:"switch",props:{},type:"switch",attributes:[],getValue(){return  true},callback(a,t){console.log("按钮开启状态：",t);}}]}]}],btn:{close:{enable:true,callback(a){a.close();}}},mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:false,only:false,width:"700px",height:"500px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),xe={isFloat(a){return Number(a)===a&&a%1!==0},add(a,t){let e,n,r;try{e=a.toString().split(".")[1].length;}catch{e=0;}try{n=t.toString().split(".")[1].length;}catch{n=0;}return r=Math.pow(10,Math.max(e,n)),Math.round(a*r+t*r)/r},sub(a,t){let e,n,r;try{e=a.toString().split(".")[1].length;}catch{e=0;}try{n=t.toString().split(".")[1].length;}catch{n=0;}r=Math.pow(10,Math.max(e,n));let o=e>=n?e:n;return (Math.round(a*r-t*r)/r).toFixed(o)},division(a,t){let e,n,r,o;try{e=a.toString().split(".")[1].length;}catch{e=0;}try{n=t.toString().split(".")[1].length;}catch{n=0;}return r=Number(a.toString().replace(".","")),o=Number(t.toString().replace(".","")),r/o*Math.pow(10,n-e)}},Hi=()=>({useShadowRoot:true,target:null,content:"默认文字",isDiffContent:false,position:"top",className:"",isFixed:false,alwaysShow:false,triggerShowEventName:"mouseenter touchstart",triggerCloseEventName:"mouseleave touchend",zIndex:1e4,only:false,eventOption:{passive:false,capture:true,once:false},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:true,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class Bi{$el={$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null};$data={config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]};constructor(t,e,n){this.$data.config=t,this.$data.guid=e,this.$el.$shadowContainer=n.$shadowContainer,this.$el.$shadowRoot=n.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){let t=this.createToolTip();this.$el.$toolTip=t.$toolTipContainer,this.$el.$content=t.$toolTipContent,this.$el.$arrow=t.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){let t=p.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),e=t.querySelector(".pops-tip-content"),n=t.querySelector(".pops-tip-arrow");if(typeof this.$data.config.className=="string"&&this.$data.config.className.trim()!==""&&p.addClassName(t,this.$data.config.className),t.style.zIndex=L.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){let r=p.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});t.appendChild(r);}return this.$data.config.showArrow||n.remove(),{$toolTipContainer:t,$toolTipArrow:n,$toolTipContent:e}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(t){if(t==null&&(t=this.getContent()),this.$data.config.isDiffContent){let e="data-content",n=this.$el.$content[e];if(typeof n=="string"&&n===t)return;this.$el.$content[e]=t;}Q.setSafeHTML(this.$el.$content,t);}getZIndex(){return L.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const t=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",t.toString());}calcToolTipPosition(t,e,n,r){let o=p.offset(t,!this.$data.config.isFixed),i=o.width,s=o.height,l=o.top,c=o.left,f=p.outerWidth(this.$el.$toolTip),d=p.outerHeight(this.$el.$toolTip),u=c+i/2-f/2,g=l+s/2-d/2,w=0,b=0;if(r!=null)if(r instanceof MouseEvent||r instanceof PointerEvent)w=r.pageX,b=r.y;else if(r instanceof TouchEvent){let h=r.touches[0];w=h.pageX,b=h.pageY;}else typeof r.clientX=="number"&&(w=r.clientX),typeof r.clientY=="number"&&(b=r.clientY);return {TOP:{left:u-n,top:l-d-e,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:c+i+e,top:g+n,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:u-n,top:l+s+e,arrow:"top",motion:"fadeInBottom"},LEFT:{left:c-f-e,top:g+n,arrow:"right",motion:"fadeInLeft"},FOLLOW:{left:w+n,top:b+n,arrow:"follow",motion:""}}}changePosition(t){let e=this.calcToolTipPosition(this.$data.config.target,this.$data.config.arrowDistance,this.$data.config.otherDistance,t),n=this.$data.config.position.toUpperCase(),r=e[n];r?(this.$el.$toolTip.style.left=r.left+"px",this.$el.$toolTip.style.top=r.top+"px",this.$el.$toolTip.setAttribute("data-motion",r.motion),this.$el.$arrow.setAttribute("data-position",r.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(t,e){t==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(e):this.$data.timeId_close_TouchEvent.push(e);}clearCloseTimeoutId(t,e){let n=t==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let r=0;r<n.length;r++){const o=n[r];if(typeof e=="number"){if(e==o){D.clearTimeout(e),n.splice(r,1);break}}else D.clearTimeout(o),n.splice(r,1),r--;}}show(...t){let e=t[0],n=e instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(n),typeof this.$data.config.showBeforeCallBack=="function"){let r=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof r=="boolean"&&!r)return}D.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),p.append(this.$el.$shadowRoot,this.$el.$toolTip)),D.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),p.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(e),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){p.on(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){p.off(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,{capture:true});}close(...t){let e=t[0],n=e instanceof MouseEvent?"MouseEvent":"TouchEvent";if(e&&e instanceof MouseEvent){let o=e.composedPath()[0];if(o!=this.$data.config.target&&o!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){let o=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof o=="boolean"&&!o)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);let r=D.setTimeout(()=>{if(this.clearCloseTimeoutId(n,r),this.$el.$toolTip==null)return;let o=this.$el.$toolTip.getAttribute("data-motion");o==null||o.trim()===""?this.toolTipAnimationFinishEvent():this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(n,r),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){p.on(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){p.off(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,{capture:true});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){p.on(this.$el.$toolTip,p.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){p.off(this.$el.$toolTip,p.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),p.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){p.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(t){this.close(t);}onToolTipMouseLeaveEvent(){p.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){p.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}const Je={init(a){const t=D.getRandomGUID(),e="tooltip";let n=Hi();if(n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),!(n.target instanceof HTMLElement))throw new TypeError("config.target 必须是HTMLElement类型");n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.anim,B.common,B.tooltipCSS]);let i=new Bi(n,t,{$shadowContainer:r,$shadowRoot:o});return n.alwaysShow&&i.show(),{guid:t,config:n,$shadowContainer:r,$shadowRoot:o,toolTip:i}}},hr=()=>({asideULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$pops:null,$content:null,$contentAside:null,$contentSectionContainer:null},init(a){this.$el={...a.$el},this.asideULElement=this.$el.$contentAside.querySelector("ul"),this.sectionContainerHeaderULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[0],this.sectionContainerULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[1];let t=null,e=false;a.config.content.forEach(n=>{let r=this.createAsideItem(n);if(this.setAsideItemClickEvent(r,n),this.asideULElement.appendChild(r),t==null){let o=false;typeof n.isDefault=="function"?o=!!n.isDefault():o=!!n.isDefault,o&&(t=r,e=!!n.scrollToDefaultView);}typeof n.afterRender=="function"&&n.afterRender({asideConfig:n,$asideLiElement:r});}),t==null&&this.asideULElement.children.length&&(t=this.asideULElement.children[0]),t?(t.click(),e&&t?.scrollIntoView()):console.error("pops.panel：左侧容器没有项");},clearContainer(){Reflect.deleteProperty(this.$el.$contentSectionContainer,"__formConfig__"),Q.setSafeHTML(this.sectionContainerHeaderULElement,""),Q.setSafeHTML(this.sectionContainerULElement,""),this.$el.$content?.querySelectorAll("section.pops-panel-deepMenu-container").forEach(a=>a.remove());},clearAsideItemIsVisited(){this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach(a=>{p.removeClassName(a,"pops-is-visited");});},setAsideItemIsVisited(a){p.addClassName(a,"pops-is-visited");},setElementAttributes(a,t){t!=null&&(Array.isArray(t)?t.forEach(e=>{this.setElementAttributes(a,e);}):Object.keys(t).forEach(e=>{a.setAttribute(e,t[e]);}));},setElementProps(a,t){t!=null&&Object.keys(t).forEach(e=>{let n=t[e];if(e==="innerHTML"){Q.setSafeHTML(a,n);return}Reflect.set(a,e,n);});},setElementClassName(a,t){t!=null&&(typeof t=="function"&&(t=t()),typeof t=="string"?t.split(" ").forEach(n=>{a.classList.add(n);}):Array.isArray(t)&&t.forEach(e=>{this.setElementClassName(a,e);}));},createAsideItem(a){let t=document.createElement("li");return t.id=a.id,Reflect.set(t,"__forms__",a.forms),Q.setSafeHTML(t,a.title),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props),t},createSectionContainerItem_switch(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="";a.description&&(e=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${e}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!a.getValue()},$ele:{switch:t.querySelector(".pops-panel-switch"),input:t.querySelector(".pops-panel-switch__input"),core:t.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),a.disabled&&this.disable(),this.setClickEvent();},setClickEvent(){let r=this;p.on(this.$ele.core,"click",void 0,function(o){r.$ele.input.disabled||r.$ele.switch.hasAttribute("data-disabled")||(r.$data.value=r.getStatus(),r.setStatus(r.$data.value),typeof a.callback=="function"&&a.callback(o,r.$data.value));});},setStatus(r=false){r=!!r,this.$ele.input.checked=r,r?p.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):p.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let r=false;return p.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(r=true),r},disable(){this.$ele.input.disabled=true,this.$ele.switch.setAttribute("data-disabled","true");},notDisable(){this.$ele.input.disabled=false,this.$ele.switch.removeAttribute("data-disabled");}};return n.init(),Reflect.set(t,"data-switch",n),t},createSectionContainerItem_slider(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="";a.description&&(e=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${e}</div>
				<div class="pops-panel-slider">
					<input type="range" min="${a.min}" max="${a.max}">
				</div>
			`);let n=t.querySelector(".pops-panel-slider input[type=range]");a.step&&n.setAttribute("step",a.step.toString()),n.value=a.getValue().toString();let r=function(i){return typeof a.getToolTipContent=="function"?a.getToolTipContent(i):i},o=Je.init({target:n.parentElement,content:()=>r(n.value),zIndex:()=>ut.getPopsMaxZIndex().zIndex,className:"github-tooltip",alwaysShow:false,only:false,position:"top",arrowDistance:10});return p.on(n,["input","propertychange"],void 0,function(i){o.toolTip.changeContent(r(n.value)),typeof a.callback=="function"&&a.callback(i,n.valueAsNumber);}),t},createSectionContainerItem_slider_new(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="";a.description&&(e=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${e}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSlider",value:a.getValue(),min:a.min,max:a.max,step:a.step||1,$data:{isMove:false,isInitDragPosition:false,isCheckingStopDragMove:false,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{slider:t.querySelector(".pops-slider"),runAway:t.querySelector(".pops-slider__runway"),bar:t.querySelector(".pops-slider__bar"),buttonWrapper:t.querySelector(".pops-slider__button-wrapper"),button:t.querySelector(".pops-slider__button")},$interval:{isCheck:false},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.setRunAwayClickEvent(),this.intervalInit(),this.isFormConfigDisabledDrag()&&this.disableDrag();},intervalInit(r=200,o=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=true;let i=false,s=this.$data.totalWidth,l,c=setInterval(()=>{i?(this.$interval.isCheck=false,clearTimeout(l),clearInterval(c)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(i=true,this.$data.totalWidth!==s&&(xe.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},r);l=setTimeout(()=>{clearInterval(c);},o);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),Reflect.set(this.$ele.slider,"data-min",this.min),Reflect.set(this.$ele.slider,"data-max",this.max),Reflect.set(this.$ele.slider,"data-value",this.value),Reflect.set(this.$ele.slider,"data-step",this.step);},initTotalWidth(){this.$data.totalWidth=p.width(this.$ele.runAway);},initStepMap(){let r=0,o=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/o;let i=0;for(let s=this.min;s<=this.max;s+=this.step){let l=this.formatValue(s),c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,i+=this.$data.stepPx;}},initFloatStepMap(){let r=0,o=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/o;let i=0;for(let s=this.min;s<=this.max;s=xe.add(s,this.step)){let l=this.formatValue(s),c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,i+=this.$data.stepPx;}},initSliderPosition(){let r=0;for(const[,o]of this.$data.stepBlockMap.entries())if(o.value==this.value){r=o.percent,this.$data.dragWidth=o.px;break}r=this.formatValue(r*100),this.setSliderPosition(r);},isFloat(r){return Number(r)===r&&r%1!==0},valueChangeCallBack(r,o){typeof a.callback=="function"&&a.callback(r,o);},getDragInfo(r){let o=this.$data.stepBlockMap.get(0);for(const[,i]of this.$data.stepBlockMap.entries())if(i.pxLeft<=r&&r<i.pxRight){o=i;break}return o},getSliderPositonPercent(r){return r/this.$data.totalWidth},formatValue(r){return xe.isFloat(this.step)?r=parseFloat(r.toFixed(2)):r=parseInt(r.toString()),r},setSliderPosition(r){parseInt(r.toString())===1&&(r=1),r>1&&(r=r/100),this.$ele.buttonWrapper.style.left=`${r*100}%`,this.$ele.bar.style.width=`${r*100}%`;},disableDrag(){this.$ele.runAway.classList.add("pops-slider-is-disabled");},allowDrag(){this.$ele.runAway.classList.remove("pops-slider-is-disabled");},isDisabledDrag(){return this.$ele.runAway.classList.contains("pops-slider-is-disabled")},isFormConfigDisabledDrag(){return typeof a.disabled=="function"||typeof a.disabled=="boolean"?typeof a.disabled=="function"?a.disabled():a.disabled:false},setRunAwayClickEvent(){p.on(this.$ele.runAway,"click",void 0,r=>{if(r.target!==this.$ele.runAway&&r.target!==this.$ele.bar)return;let o=parseFloat(r.offsetX.toString());this.dragStartCallBack(),this.dragMoveCallBack(r,o,this.value),this.dragEndCallBack(o);},{capture:false});},dragStartCallBack(){if(!this.$data.isMove){if(this.isFormConfigDisabledDrag())return this.disableDrag(),false;this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=true;}return  true},dragMoveCallBack(r,o,i){let s=0;if(o<=0)s=0,this.value=this.min;else if(o>=this.$data.totalWidth)s=1,this.value=this.max;else {const l=this.getDragInfo(o);s=l.percent,this.value=this.formatValue(l.value);}this.$data.dragPercent=s,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),i!==this.value&&this.valueChangeCallBack(r,this.value);},dragEndCallBack(r){this.$data.isMove=false,r<=0?this.$data.dragWidth=0:r>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=r,this.closeToolTip();},setPanEvent(){const r=D.AnyTouch();this.$tooltip=new r(this.$ele.button,{preventDefault(){return  false}});let o=0;this.$tooltip.on("at:move",i=>{if(!this.dragStartCallBack())return;let s=this.value;const l=this.$ele.runAway.getBoundingClientRect();let c=i.x-(l.left+globalThis.screenX);c<=0?c=0:c>=l.width&&(c=l.width),o=c,this.dragMoveCallBack(i,o,s);}),this.$tooltip.on("at:end",i=>{this.dragEndCallBack(o);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=true;let r=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=false,this.closeToolTip(),clearInterval(r));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=false,clearInterval(r);},2e3);},setToolTipEvent(){function r(){return typeof a.getToolTipContent=="function"?a.getToolTipContent(n.value):n.value.toString()}let o=Je.init({target:this.$ele.button,content:r,zIndex:()=>ut.getPopsMaxZIndex().zIndex,isFixed:true,className:"github-tooltip",only:false,eventOption:{capture:true,passive:true},showBeforeCallBack:()=>{if(!(typeof a.isShowHoverTip=="function"?a.isShowHoverTip():typeof a.isShowHoverTip=="boolean"?a.isShowHoverTip:true))return  false;this.intervalInit();},showAfterCallBack:i=>{o.toolTip.changeContent(r());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),false},alwaysShow:false,position:"top",arrowDistance:10});this.$data.tooltip=o;}};return n.init(),Reflect.set(t,"data-slider",n),t},createSectionContainerItem_input(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="text";a.isPassword?e="password":a.isNumber&&(e="number");let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-input pops-user-select-none">
					<input type="${e}" placeholder="${a.placeholder}">
				</div>
				`);const r={[Symbol.toStringTag]:"PopsPanelInput",$ele:{panelInput:t.querySelector(".pops-panel-input"),input:t.querySelector("input"),inputSpanIcon:document.createElement("span"),inputSpanIconInner:null,icon:null},$data:{value:a.getValue(),isView:false},init(){this.initEle(),this.setInputValue(this.$data.value),a.isPassword?(this.setCircleIcon(at.getIcon("view")),this.setCircleIconClickEvent()):this.$ele.input.value!=""&&(this.setCircleIcon(at.getIcon("circleClose")),this.setCircleIconClickEvent()),this.setInputChangeEvent(),a.disabled&&this.disable(),typeof a.handlerCallBack=="function"&&a.handlerCallBack(t,this.$ele.input);},initEle(){this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon,this.$ele.input.nextSibling),this.$ele.inputSpanIcon.className="pops-panel-input__suffix",Q.setSafeHTML(this.$ele.inputSpanIcon,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$ele.inputSpanIconInner=this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner"),this.$ele.icon=this.$ele.inputSpanIcon.querySelector(".pops-panel-icon");},disable(){this.$ele.input.disabled=true,this.$ele.panelInput.classList.add("pops-input-disabled");},notDisable(){this.$ele.input.disabled=false,this.$ele.panelInput.classList.remove("pops-input-disabled");},isDisabled(){return this.$ele.input.disabled},setInputValue(o=""){this.$ele.input.value=o;},setInputType(o="text"){this.$ele.input.setAttribute("type",o);},removeCircleIcon(){Q.setSafeHTML(this.$ele.icon,"");},setCircleIcon(o=at.getIcon("circleClose")){Q.setSafeHTML(this.$ele.icon,o);},setCircleIconClickEvent(){p.on(this.$ele.icon,"click",void 0,()=>{this.isDisabled()||(this.removeCircleIcon(),a.isPassword?this.$data.isView?(this.$data.isView=false,this.setInputType("text"),this.setCircleIcon(at.getIcon("hide"))):(this.$data.isView=true,this.setInputType("password"),this.setCircleIcon(at.getIcon("view"))):(this.setInputValue(""),this.$ele.input.focus(),this.$ele.input.dispatchEvent(new Event("input"))));});},setInputChangeEvent(){p.on(this.$ele.input,["input","propertychange"],void 0,o=>{this.$data.value=this.$ele.input.value,a.isPassword||(this.$ele.input.value!==""&&this.$ele.icon.innerHTML===""?(this.setCircleIcon(at.getIcon("circleClose")),this.setCircleIconClickEvent()):this.$ele.input.value===""&&this.removeCircleIcon()),typeof a.callback=="function"&&(a.isNumber?a.callback(o,this.$ele.input.value,this.$ele.input.valueAsNumber):a.callback(o,this.$ele.input.value));});}};return r.init(),Reflect.set(t,"data-input",r),t},createSectionContainerItem_textarea(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="";a.description&&(e=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${e}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${a.placeholder??""}"></textarea>
				</div>
			`);const n={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{panelTextarea:t.querySelector(".pops-panel-textarea"),textarea:t.querySelector(".pops-panel-textarea textarea")},$data:{value:a.getValue()},init(){this.setValue(this.$data.value),this.setChangeEvent(),a.disabled&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");},notDisable(){this.$ele.textarea.removeAttribute("disabled"),this.$ele.panelTextarea.classList.remove("pops-panel-textarea-disable");},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||this.$ele.panelTextarea.classList.contains("pops-panel-textarea-disable")},setValue(r){this.$ele.textarea.value=r;},setChangeEvent(){p.on(this.$ele.textarea,["input","propertychange"],void 0,r=>{let o=this.$ele.textarea.value;this.$data.value=o,typeof a.callback=="function"&&a.callback(r,o);});}};return n.init(),Reflect.set(t,"data-textarea",n),t},createSectionContainerItem_select(a){const t=this;let e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-select pops-user-select-none">
					<select></select>
				</div>
				`);const r={[Symbol.toStringTag]:"PopsPanelSelect",$ele:{panelSelect:e.querySelector(".pops-panel-select"),select:e.querySelector(".pops-panel-select select")},$eleKey:{disable:"__disable__",value:"__value__",forms:"__forms__"},$data:{defaultValue:a.getValue()},init(){this.initOption(),this.setChangeEvent(),this.setClickEvent(),a.disabled&&this.disable();},setNodeValue(o,i,s){Reflect.set(o,i,s);},getNodeValue(o,i){return Reflect.get(o,i)},disable(){this.$ele.select.setAttribute("disabled","true"),this.$ele.panelSelect.classList.add("pops-panel-select-disable");},notDisable(){this.$ele.select.removeAttribute("disabled"),this.$ele.panelSelect.classList.remove("pops-panel-select-disable");},isDisabled(){return this.$ele.select.hasAttribute("disabled")||this.$ele.panelSelect.classList.contains("pops-panel-select-disable")},initOption(){a.data.forEach(o=>{let i=document.createElement("option");this.setNodeValue(i,this.$eleKey.value,o.value),this.setNodeValue(i,this.$eleKey.disable,o.disable),this.setNodeValue(i,this.$eleKey.forms,o.forms),o.value===this.$data.defaultValue&&this.setOptionSelected(i),i.innerText=o.text,this.$ele.select.appendChild(i);});},setOptionSelected(o){o.setAttribute("selected","true");},setSelectOptionsDisableStatus(){this.$ele.select.options&&this.$ele.select.options.length&&Array.from(this.$ele.select.options).forEach(o=>{this.setOptionDisableStatus(o);});},setOptionDisableStatus(o){let i=false,s=this.getNodeValue(o,this.$eleKey.disable);if(s==="function"){let l=this.getNodeValue(o,this.$eleKey.value);i=!!s(l);}i?o.setAttribute("disabled","true"):o.removeAttribute("disabled");},getSelectOptionInfo(o){let i=this.getNodeValue(o,this.$eleKey.value),s=o.innerText||o.textContent,l=this.getNodeValue(o,this.$eleKey.forms);return {value:i,text:s,forms:l,$option:o}},setChangeEvent(){p.on(this.$ele.select,"change",void 0,o=>{let i=this.$ele.select[this.$ele.select.selectedIndex],s=this.getSelectOptionInfo(i);this.setSelectOptionsDisableStatus(),typeof a.callback=="function"&&a.callback(o,s.value,s.text);let l=typeof s.forms=="function"?s.forms():s.forms;if(Array.isArray(l)){let c="pops-panel-select-child-forms";for(;e.nextElementSibling&&e.nextElementSibling.classList.contains(c);)e.nextElementSibling.remove();let f=document.createElement("ul");f.className=c,p.after(e,f),t.uListContainerAddItem(a,{ulElement:f});}});},setClickEvent(){p.on(this.$ele.select,"click",void 0,o=>{this.setSelectOptionsDisableStatus(),typeof a.clickCallBack=="function"&&a.clickCallBack(o,this.$ele.select);});}};return r.init(),Reflect.set(e,"data-select",r),e},createSectionContainerItem_select_multiple_new(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="";a.description&&(e=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${e}</div>
				<div class="pops-panel-select-multiple">
					<div class="el-select__wrapper">
						<div class="el-select__selection">
							<!-- 这个是用于手动输入的，这里暂不适配 -->
							<div class="el-select__selected-item el-select__input-wrapper">
		
							</div>
							<!-- 这个是placeholder -->
							<div class="el-select__selected-item el-select__placeholder">
							</div>
						</div>
						<!-- 下拉箭头 -->
						<div class="el-select__suffix">
							<i class="el-icon el-select__caret el-select__icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
								</svg>
							</i>
						</div>
					</div>
				</div>
				`);const n={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectContainer:void 0},$data:{defaultValue:a.getValue(),selectInfo:[]},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.initTagElement(),this.setSelectContainerClickEvent();},initDefault(){a.data.forEach(r=>{this.$data.defaultValue.includes(r.value)&&this.$data.selectInfo.push({text:r.text,value:r.value,isHTML:!!r.isHTML,disable:r.disable?.bind(r)});});},inintEl(){this.$el.$container=t.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=t.querySelector(".el-select__wrapper"),this.$el.$section=t.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=t.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=t.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=t.querySelector(".el-select__suffix"),this.$el.$suffixIcon=t.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let r="";if(typeof a.placeholder=="string")r=a.placeholder;else if(typeof a.placeholder=="function"){let i=a.placeholder();typeof i=="string"&&(r=i);}let o=p.createElement("span",{innerText:r});this.$el.$selectedPlaceHolderWrapper.appendChild(o);},initTagElement(){a.data.forEach(r=>{if(this.$data.selectInfo.find(i=>i.value===r.value)){let i=this.createSelectedTagItem(r);this.addSelectedTagItem(i.$tag),this.setSelectedItemCloseIconClickEvent({$tag:i.$tag,$closeIcon:i.$closeIcon,value:r.value,text:r.text});}}),this.checkTagEmpty();},createSelectedTagItem(r){const o=p.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
						<span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
							<span class="el-tag__content">
								<span class="el-select__tags-text"></span>
							</span>
							<!-- 关闭tag的图标 -->
							<i class="el-icon el-tag__close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
								</svg>
							</i>
						</span>
						`}),i=o.querySelector(".el-select__tags-text"),s=o.querySelector(".el-icon.el-tag__close");let l=typeof r.text=="function"?r.text(r,this.$data.selectInfo):r.text;return r.isHTML?Q.setSafeHTML(i,l):i.innerText=l,{$tag:o,$tagText:i,$closeIcon:s}},addSelectedTagItem(r){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){let o=this.$el.$selectedInputWrapper.previousElementSibling;o?p.after(o,r):p.before(this.$el.$selectedInputWrapper,r);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){let o=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;o?p.after(o,r):p.before(this.$el.$selectedPlaceHolderWrapper,r);}else this.$el.$section.appendChild(r);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateSelectTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(r=>{r.remove();}),this.initTagElement();},selectValueChangeCallBack(r){this.updateSelectItem(),typeof a.callback=="function"&&a.callback(r||this.$data.selectInfo);},updateSelectItem(){this.getAllSelectItemInfo(false).forEach(r=>{const{data:o,$select:i}=r;this.setSelectItemText(o,r.$select),typeof o.disable=="function"&&o.disable(o.value,this.$data.selectInfo)?(this.setSelectItemDisabled(i),this.removeSelectedInfo(o,false),this.removeSelectItemSelected(i)):this.removeSelectItemDisabled(i),this.$data.selectInfo.find(l=>l.value===o.value)?this.setSelectItemSelected(i):this.removeSelectItemSelected(i);});},setSelectItemSelected(r){this.isSelectItemSelected(r)||r.classList.add("select-item-is-selected");},removeSelectItemSelected(r){r.classList.remove("select-item-is-selected");},isSelectItemSelected(r){return r.classList.contains("select-item-is-selected")},addSelectedItemInfo(r,o){let i=this.getSelectedItemInfo(o);r.find(l=>l.value===i.value)||r.push({value:i.value,text:i.text,isHTML:!!i.isHTML,disable:i.disable?.bind(i)}),this.selectValueChangeCallBack(r);},getSelectedItemInfo(r){return Reflect.get(r,"data-info")},removeSelectedItemInfo(r,o){let i=this.getSelectedItemInfo(o),s=r.findIndex(l=>l.value===i.value);s!==-1&&r.splice(s,1),this.selectValueChangeCallBack(r);},getAllSelectItemInfo(r=true){return Array.from(this.$el.$selectContainer?.querySelectorAll(".select-item")??[]).map(o=>{let s={data:this.getSelectedItemInfo(o),$select:o};return r?this.isSelectItemSelected(o)?s:void 0:s}).filter(o=>o!=null)},createSelectItemElement(r){let o=p.createElement("li",{className:"select-item",innerHTML:`
							<span class="select-item-text"></span>
						`});return this.setSelectItemText(r,o),Reflect.set(o,"data-info",r),o},setSelectItemText(r,o){let i=typeof r.text=="function"?r.text(r.value,this.$data.selectInfo):r.text,s=o.querySelector(".select-item-text");r.isHTML?Q.setSafeHTML(s,i):s.innerText=i;},setSelectItemDisabled(r){r.setAttribute("aria-disabled","true"),r.setAttribute("disabled","true");},removeSelectItemDisabled(r){r.removeAttribute("aria-disabled"),r.removeAttribute("disabled");},isSelectItemDisabled(r){return r.hasAttribute("disabled")||r.ariaDisabled},setSelectElementClickEvent(r,o){p.on(o,"click",i=>{if(p.preventEvent(i),!this.isSelectItemDisabled(o)){if(typeof a.clickCallBack=="function"){let s=this.getAllSelectItemInfo().map(c=>c.data),l=a.clickCallBack(i,s);if(typeof l=="boolean"&&!l)return}this.isSelectItemSelected(o)?(this.removeSelectItemSelected(o),this.removeSelectedItemInfo(r,o)):(this.setSelectItemSelected(o),this.addSelectedItemInfo(r,o));}});},setSelectContainerClickEvent(){const r=this;p.on(this.$el.$container,"click",o=>{let i=r.$data.selectInfo,{style:s,...l}=a.selectConfirmDialogDetails||{},c=D.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:`
									<ul class="select-container"></ul>
									`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(u,g){r.$data.selectInfo=[...i],r.updateSelectTagItem(),r.$el.$selectContainer=null,u.close();}}},mask:{enable:true,clickCallBack(u,g){u(),r.$data.selectInfo=[...i],r.updateSelectTagItem(),r.$el.$selectContainer=null;},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"300px",style:`
								.select-container{
									--el-font-size-base: 14px;
									--el-text-color-regular: #606266;
									--el-color-primary: #409eff;
									--el-fill-color-light: #f5f7fa;
									--el-disable-color: #a8abb2;
								}
								.select-item{
									cursor: pointer;
									font-size: var(--el-font-size-base);
									padding: 0 32px 0 20px;
									position: relative;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									color: var(--el-text-color-regular);
									height: 34px;
									line-height: 34px;
									box-sizing: border-box;
								}
								.select-item[aria-disabled],
								.select-item[disabled]{
									cursor: not-allowed;
									color: var(--el-disable-color);
									background: unset;
								}
								.select-item:hover{
									background-color: var(--el-fill-color-light);
								}
								.select-item.select-item-is-selected{
									color: var(--el-color-primary);
									font-weight: 700;
								}
								.select-item.select-item-is-selected::after{
									content: "";
									position: absolute;
									top: 50%;
									right: 20px;
									border-top: none;
									border-right: none;
									background-repeat: no-repeat;
									background-position: center;
									background-color: var(--el-color-primary);
									mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
									mask-size: 100% 100%;
									-webkit-mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
									-webkit-mask-size: 100% 100%;
									transform: translateY(-50%);
									width: 12px;
									height: 12px;
								}

								
								@media (prefers-color-scheme: dark) {
									.select-container{
										--el-text-color-regular: #f2f2f2;
										--el-disable-color: #8D9095;
										--el-fill-color-light: #262727;
									}
								}

								${s||""}
								`},l),d=br.init(c).$shadowRoot.querySelector(".select-container");this.$el.$selectContainer=d,a.data.forEach(u=>{let g=this.createSelectItemElement(u);d.appendChild(g),this.setSelectElementClickEvent(i,g);}),this.updateSelectItem();});},setSelectedItemCloseIconClickEvent(r){p.on(r.$closeIcon,"click",o=>{if(p.preventEvent(o),typeof a.closeIconClickCallBack=="function"){let i=a.closeIconClickCallBack(o,{$tag:r.$tag,$closeIcon:r.$closeIcon,value:r.value,text:typeof r.text=="function"?r.text.bind(r):r.text});if(typeof i=="boolean"&&!i)return}this.removeSelectedTagItem(r.$tag),this.removeSelectedInfo({value:r.value,text:r.text});},{capture:true});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedTagItem(r){r.remove(),this.checkTagEmpty();},removeSelectedInfo(r,o=true){for(let i=0;i<this.$data.selectInfo.length;i++)if(this.$data.selectInfo[i].value===r.value){this.$data.selectInfo.splice(i,1);break}o&&this.selectValueChangeCallBack();},showInputWrapper(){p.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){p.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){p.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){p.cssHide(this.$el.$selectedPlaceHolderWrapper,true);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");}};return n.init(),Reflect.set(t,"data-select-multiple",n),t},createSectionContainerItem_button(a){let t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let e="";a.description&&(e=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),Q.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${e}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);const n={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:t.querySelector(".pops-panel-button"),button:t.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:t.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:t.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.setClickEvent();},initButton(){typeof a.buttonIcon=="string"&&a.buttonIcon.trim()!==""?(at.hasIcon(a.buttonIcon)?this.setIconSVG(at.getIcon(a.buttonIcon)):this.setIconSVG(a.buttonIcon),this.showIcon()):this.hideIcon();let r=a.buttonText;typeof a.buttonText=="function"&&(r=a.buttonText()),this.setButtonType(a.buttonType),a.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),a.disable&&this.disable(),this.setButtonText(r),this.setIconLoadingStatus(a.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(r){Q.setSafeHTML(this.$ele.icon,r);},setIconLoadingStatus(r){this.$ele.icon.setAttribute("is-loading",(!!r).toString());},setHasIcon(r){this.$ele.button.setAttribute("data-icon",(!!r).toString());},setButtonType(r){this.$ele.button.setAttribute("type",r);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(r){Q.setSafeHTML(this.$ele.spanText,r);},setClickEvent(){p.on(this.$ele.button,"click",void 0,r=>{typeof a.callback=="function"&&a.callback(r);});}};return n.init(),Reflect.set(t,"data-button",n),t},createSectionContainerItem_deepMenu(a){let t=this,e=document.createElement("li");e.classList.add("pops-panel-deepMenu-nav-item"),Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`);let r=typeof a.arrowRightIcon=="boolean"?a.arrowRightIcon:true,o="";r&&(o=`<i class="pops-panel-deepMenu-arrowRight-icon">${at.getIcon("arrowRight")}</i>`);let i="";a.rightText&&(i=`<p class="pops-panel-item-right-text">${a.rightText}</p>`),Q.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-deepMenu">${i}${o}</div>
				`);const s={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return t.$el.$contentSectionContainer}},init(){this.setLiClickEvent();},initFormItem(l,c){let f=c;if(f.type==="forms"){let d=f.forms,u=document.createElement("li"),g=document.createElement("ul");g.classList.add("pops-panel-forms-container-item-formlist"),u.classList.add("pops-panel-forms-container-item");let w=p.createElement("div",{className:"pops-panel-forms-container-item-header-text"});Q.setSafeHTML(w,f.text),f.isFold&&(Q.setSafeHTML(w,`
								<p>${f.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),p.on(w,"click",b=>{u.hasAttribute("data-fold-enable")?u.removeAttribute("data-fold-enable"):u.setAttribute("data-fold-enable","");}),w.classList.add("pops-panel-forms-fold-container"),w.classList.add("pops-user-select-none"),u.setAttribute("data-fold-enable",""),u.classList.add("pops-panel-forms-fold")),u.appendChild(w),t.setElementClassName(u,c.className),t.setElementAttributes(u,c.attributes),t.setElementProps(u,c.props),d.forEach(b=>{t.uListContainerAddItem(b,{ulElement:g,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:u,formHeaderDivElement:w});}),u.appendChild(g),l.appendChild(u),typeof f.afterAddToUListCallBack=="function"&&f.afterAddToUListCallBack(a,{target:u,ulElement:g,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:u,formHeaderDivElement:w});}else t.uListContainerAddItem(a,{ulElement:t.sectionContainerULElement});},gotoDeepMenu(l,c){let f=c.closest("section.pops-panel-container");f&&p.cssHide(f,true);let d=p.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"});Reflect.set(d,"__formConfig__",a);let u=p.createElement("ul",{className:"pops-panel-deepMenu-container-header-ul"}),g=p.createElement("ul"),w=a.headerTitle??a.text,b=p.createElement("div",{className:"pops-panel-deepMenu-container-header",innerHTML:`<p>${w}</p>`}),h=p.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:at.getIcon("arrowLeft")});if(p.on(h,"click",v=>{p.preventEvent(v);let E=d.previousElementSibling;p.cssShow(E),d.remove(),t.triggerRenderRightContainer(E);},{once:true}),b.firstElementChild?.insertAdjacentElement("beforebegin",h),u.appendChild(b),d.appendChild(u),d.appendChild(g),a.forms&&Array.isArray(a.forms))for(let v=0;v<a.forms.length;v++){let E=a.forms[v];this.initFormItem(g,E);}t.$el.$content?.appendChild(d),typeof a.afterEnterDeepMenuCallBack=="function"&&a.afterEnterDeepMenuCallBack(a,{sectionContainer:d,sectionContainerHeaderContainer:u,sectionContainerHeader:b,sectionBodyContainer:g}),t.triggerRenderRightContainer(d);},setLiClickEvent(){p.on(e,"click",void 0,async l=>{typeof a.clickCallBack=="function"&&await a.clickCallBack(l,a)||this.gotoDeepMenu(l,e);});}};return s.init(),Reflect.set(e,"data-deepMenu",s),e},createSectionContainerItem_own(a){let t=document.createElement("li");return Reflect.set(t,"__formConfig__",a),a.className&&(t.className=a.className),t=a.getLiElementCallBack(t),t},createSectionContainerItem(a){let t=a.type;if(t==="switch")return this.createSectionContainerItem_switch(a);if(t==="slider")return this.createSectionContainerItem_slider_new(a);if(t==="input")return this.createSectionContainerItem_input(a);if(t==="textarea")return this.createSectionContainerItem_textarea(a);if(t==="select")return this.createSectionContainerItem_select(a);if(t==="select-multiple")return this.createSectionContainerItem_select_multiple_new(a);if(t==="button")return this.createSectionContainerItem_button(a);if(t==="deepMenu")return this.createSectionContainerItem_deepMenu(a);if(t==="own")return this.createSectionContainerItem_own(a);console.error("尚未实现的type类型",a);},createSectionContainerItem_forms(a){let t=this,e=a;if(e.type==="forms"){let n=a.forms,r=document.createElement("li"),o=document.createElement("ul");o.classList.add("pops-panel-forms-container-item-formlist"),r.classList.add("pops-panel-forms-container-item");let i=p.createElement("div",{className:"pops-panel-forms-container-item-header-text"});Q.setSafeHTML(i,e.text),e.isFold&&(Q.setSafeHTML(i,`
						<p>${e.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),p.on(i,"click",s=>{r.hasAttribute("data-fold-enable")?r.removeAttribute("data-fold-enable"):r.setAttribute("data-fold-enable","");}),i.classList.add("pops-panel-forms-fold-container"),i.classList.add("pops-user-select-none"),r.setAttribute("data-fold-enable",""),r.classList.add("pops-panel-forms-fold")),r.appendChild(i),t.setElementClassName(r,a.className),t.setElementAttributes(r,a.attributes),t.setElementProps(r,a.props),n.forEach(s=>{t.uListContainerAddItem(s,{ulElement:o,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:i});}),r.appendChild(o),t.sectionContainerULElement.appendChild(r),typeof e.afterAddToUListCallBack=="function"&&e.afterAddToUListCallBack(e,{target:r,ulElement:o,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:i});}else t.uListContainerAddItem(a,{ulElement:t.sectionContainerULElement});},triggerRenderRightContainer(a){let t=Reflect.get(a,"__formConfig__");this.$el.$pops.dispatchEvent(new CustomEvent("pops:renderRightContainer",{detail:{formConfig:t}}));},uListContainerAddItem(a,t){let e=this.createSectionContainerItem(a);e&&t.ulElement.appendChild(e),typeof a.afterAddToUListCallBack=="function"&&a.afterAddToUListCallBack(a,{...t,target:e});},setAsideItemClickEvent(a,t){const e=this;p.on(a,"click",void 0,n=>{this.clearContainer();let r=Reflect.get(a,"__forms__");Reflect.set(e.$el.$contentSectionContainer,"__formConfig__",r),p.cssShow(e.$el.$contentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(a);let o=t.headerTitle??t.title;if(typeof o=="string"&&o.trim()!==""){let i=document.createElement("li");Reflect.set(i,"__asideConfig__",t),Q.setSafeHTML(i,o),this.sectionContainerHeaderULElement.appendChild(i);}r.forEach(i=>{this.createSectionContainerItem_forms(i);}),typeof t.callback=="function"&&t.callback(n,this.sectionContainerHeaderULElement,this.sectionContainerULElement),e.triggerRenderRightContainer(e.$el.$contentSectionContainer);});}}),Ni={init(a){const t=D.getRandomGUID(),e="panel";let n=Di();n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),a&&Array.isArray(a.content)&&(n.content=a.content),n=L.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);L.handleInit(o,[B.index,B.ninePalaceGridPosition,B.scrollbar,B.button,B.anim,B.common,B.panelCSS]);let i=L.handleZIndex(n.zIndex),s=W.getMaskHTML(t,i),l=W.getHeaderBtnHTML(e,n),{headerStyle:c,headerPStyle:f}=W.getHeaderStyle(e,n),d=W.getAnimHTML(t,e,n,`
			<div class="pops-title pops-${e}-title" style="text-align: ${n.title.position};${c}">${n.title.html?n.title.text:`<p pops style="${f}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${e}-content">
				<aside class="pops-${e}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${e}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,"",i),u=W.parseElement(d),{popsElement:g,headerCloseBtnElement:w,titleElement:b,contentElement:h,contentAsideElement:v,contentSectionContainerElement:E}=L.handleQueryElement(u,e);(n.isMobile||D.isPhone())&&p.addClassName(g,n.mobileClassName);let T=null,S=[u];if(n.mask.enable){let{maskElement:j}=L.handleMask({type:e,guid:t,config:n,animElement:u,maskHTML:s});T=j,S.push(T);}let C=L.handleEventDetails(t,r,o,e,u,g,T,n);return L.handleClickEvent("close",w,C,n.btn.close.callback),p.append(o,S),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),T!=null&&u.after(T),hr().init({config:n,$el:{$pops:g,$content:h,$contentAside:v,$contentSectionContainer:E}}),L.handlePush(e,{guid:t,animElement:u,popsElement:g,maskElement:T,$shadowContainer:r,$shadowRoot:o}),n.drag&&ut.drag(g,{dragElement:b,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),{...L.handleResultDetails(C),addEventListener:(j,J,Z)=>{g.addEventListener(j,J,Z);},removeEventListener:(j,J,Z)=>{g.removeEventListener(j,J,Z);}}}},Ui=()=>({target:document.documentElement,targetSelector:null,data:[{icon:at.getIcon("search"),iconIsLoading:false,text:"搜索",item:[],callback(a,t,e){console.log("点击："+this.text,[a,t,e]);}},{icon:at.getIcon("documentCopy"),iconIsLoading:false,text:"复制",item:[],callback(a,t,e){console.log("点击："+this.text,[a,t,e]);}},{icon:at.getIcon("delete"),text:"删除",iconIsLoading:false,item:[],callback(a,t,e){console.log("点击："+this.text,[a,t,e]);}},{icon:at.getIcon("loading"),iconIsLoading:true,text:"加载",item:[],callback(a,t,e){return console.log("点击："+this.text,[a,t,e]),false}},{icon:at.getIcon("elemePlus"),iconIsLoading:true,text:"饿了么",callback(a,t,e){return console.log("点击："+this.text,[a,t,e]),false},item:[{icon:"",iconIsLoading:false,text:"处理文件",item:[],callback(a,t,e){console.log("点击："+this.text,[a,t,e]);}},{icon:"",iconIsLoading:false,text:"其它处理",callback(a,t,e){console.log("点击："+this.text,[a,t,e]);},item:[{icon:at.getIcon("view"),iconIsLoading:false,text:"查看",item:[],callback(a,t,e){console.log("点击："+this.text,[a,t,e]);}}]}]}],chileMenuLeftOrRightDistance:0,childMenuTopOrBottomDistance:0,useShadowRoot:true,className:"",isAnimation:true,only:false,zIndex:1e4,preventDefault:true,style:null,beforeAppendToPageCallBack(){}}),Vi={init(a){const t=D.getRandomGUID(),e="rightClickMenu";let n=Ui();if(n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n=L.handleOnly(e,n),n.target==null)throw new Error("config.target 不能为空");a.data&&(n.data=a.data);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);if(L.handleInit(o,[B.index,B.anim,B.common,B.rightClickMenu]),n.style!=null){let s=p.createElement("style",{innerHTML:n.style},{type:"text/css"});o.appendChild(s);}const i={rootElement:null,windowCheckClickEvent(s){if(!i.rootElement)return;let l=s.target;l.closest(`.pops-${e}`)||l.className&&l.className==="pops-shadow-container"&&l.shadowRoot!=null||i.closeAllMenu(i.rootElement);},shadowRootCheckClickEvent(s){!i.rootElement||s.target.closest(`.pops-${e}`)||i.closeAllMenu(i.rootElement);},addWindowCheckClickListener(){if(p.on(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const s=n.target.getRootNode();s instanceof ShadowRoot&&p.on(s,"click touchstart",void 0,i.shadowRootCheckClickEvent,{capture:true});}},removeWindowCheckClickListener(){if(p.off(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const s=n.target.getRootNode();s instanceof ShadowRoot&&p.off(s,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true});}},contextMenuEvent(s,l){n.preventDefault&&p.preventEvent(s),L.handleOnly(e,n),i.rootElement&&i.closeAllMenu(i.rootElement);let c=i.showMenu(s,n.data,l);i.rootElement=c,n.only&&L.handlePush(e,{$shadowRoot:o,$shadowContainer:r,guid:t,animElement:c,popsElement:c,beforeRemoveCallBack(f){i.closeAllMenu(f.popsElement);}});},addContextMenuEvent(s,l){p.on(s,"contextmenu",l,i.contextMenuEvent);},removeContextMenuEvent(s,l){p.off(s,"contextmenu",l,i.contextMenuEvent);},animationCloseMenu(s){function l(c){p.off(s,p.getTransitionEndNameList(),l,{capture:true}),s.remove();}s.classList.contains(`pops-${e}-anim-show`)?(p.on(s,p.getTransitionEndNameList(),l,{capture:true}),s.classList.remove(`pops-${e}-anim-show`)):s.remove();},closeAllMenu(s){if(s==null)return;s?.__menuData__?.root&&(s=s?.__menuData__?.root),s.__menuData__.child.forEach(c=>{this.animationCloseMenu(c);}),this.animationCloseMenu(s),i.rootElement=null;},getMenuContainerElement(s){let l=p.createElement("div",{className:`pops-${e}`,innerHTML:`
					<ul></ul>
					`}),c=this.getMenuZIndex();return c>1e4&&(l.style.zIndex=c.toString()),s&&l.setAttribute("is-children","true"),n.isAnimation&&p.addClassName(l,`pops-${e}-anim-grid`),l},getMenuZIndex(){return L.handleZIndex(n.zIndex)},getOffset(s,l,c){let f={top:0,right:0,bottom:0,left:0},d=p.width(s),u=p.height(s),g=1,w=p.width(globalThis)-g,b=p.height(globalThis)-g,h=w-d,v=b-u,E=n.chileMenuLeftOrRightDistance,T=n.childMenuTopOrBottomDistance,S=l.x,C=l.y;if(S=S<0?0:S,S+E>=h){if(c){let I=p.offset(c.$menu);S=w-I.left-E+g;}else S=g+E;S<0?S=0:S>h&&(S=h),f.right=S,Reflect.deleteProperty(f,"left");}else S=S+E,f.left=S,Reflect.deleteProperty(f,"right");if(C=C<0?0:C,C+T>=v){if(c){let I=p.offset(c.$parentItem,false);C=b-I.bottom-T+g;}else C=g+T;C<0?C=g:C>v&&(C=v),f.bottom=C,Reflect.deleteProperty(f,"top");}else C=C+T,f.top=C,Reflect.deleteProperty(f,"bottom");return f},showMenu(s,l,c){let f=this.getMenuContainerElement(false);Reflect.set(f,"__menuData__",{child:[]}),i.addMenuLiELement(s,f,f,l,c),p.css(f,{display:"none"}),p.append(o,f),document.contains(r)||(typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r));let d=this.getOffset(f,{x:s.clientX,y:s.clientY},null);return p.css(f,{...d,display:""}),n.isAnimation&&p.addClassName(f,`pops-${e}-anim-show`),f},showClildMenu(s,l,c,f,d,u){let g=this.getMenuContainerElement(true);Reflect.set(g,"__menuData__",{parent:d,root:f}),Reflect.get(f,"__menuData__").child.push(g),i.addMenuLiELement(s,f,g,c,u),p.css(g,{display:"none"}),p.append(o,g);let b=d.closest(".pops-rightClickMenu"),h=this.getOffset(g,{x:l.clientX,y:l.clientY},{$menu:b,$parentItem:d});return p.css(g,{...h,display:""}),n.isAnimation&&p.addClassName(g,`pops-${e}-anim-show`),g},addMenuLiELement(s,l,c,f,d){let u=s.target,g=c.querySelector("ul");f.forEach(w=>{let b=p.parseTextToDOM("<li></li>");if(typeof w.icon=="string"&&w.icon.trim()!==""){let E=at.getIcon(w.icon)??w.icon,T=p.parseTextToDOM(`<i class="pops-${e}-icon" is-loading="${w.iconIsLoading??false}">${E}</i>`);b.appendChild(T);}b.insertAdjacentHTML("beforeend",Q.getSafeHTML(`<span>${w.text}</span>`)),w.item&&Array.isArray(w.item)&&p.addClassName(b,`pops-${e}-item`);function h(){Array.from(g.children).forEach(S=>{if(p.removeClassName(S,`pops-${e}-is-visited`),!S.__menuData__)return;function C(I){I.querySelectorAll("ul li").forEach(q=>{q?.__menuData__?.child&&C(q.__menuData__.child);}),I.remove();}C(S.__menuData__.child);});for(let S=0;S<l.__menuData__.child.length;S++){let C=l.__menuData__.child[S];o.contains(C)||(l.__menuData__.child.splice(S,1),S--);}if(p.addClassName(b,`pops-${e}-is-visited`),!w.item)return;let E=b.getBoundingClientRect(),T=i.showClildMenu(s,{clientX:E.left+p.outerWidth(b),clientY:E.top},w.item,l,b,d);b.__menuData__={child:T};}async function v(E){if(typeof w.callback=="function"){try{tr.Object.defineProperty(s,"target",{get(){return u}});}catch{}let T=await w.callback(E,s,b,d);if(typeof T=="boolean"&&T==false)return}Array.from(g.children).forEach(T=>{p.off(T,"mouseenter touchstart");}),i.closeAllMenu(l);}p.on(b,"mouseenter touchstart",void 0,h),p.on(b,"click",void 0,v),g.appendChild(b);});}};return i.addContextMenuEvent(n.target,n.targetSelector),i.addWindowCheckClickListener(),{guid:t,config:n,removeWindowCheckClickListener:i.removeWindowCheckClickListener,addWindowCheckClickListener:i.addWindowCheckClickListener,removeContextMenuEvent:i.removeContextMenuEvent,addContextMenuEvent:i.addContextMenuEvent}}},zi=()=>({target:null,inputTarget:null,selfDocument:document,data:[{value:"数据1",text:"数据1-html"},{value:"数据2",text:"数据2-html"}],deleteIcon:{enable:true,callback(a,t,e){console.log("删除当前项",[a,t,e]),t.remove();}},useShadowRoot:true,className:"",isAbsolute:true,isAnimation:true,width:"250px",maxHeight:"300px",followTargetWidth:true,topDistance:0,position:"auto",positionTopToReverse:true,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:false,followPosition:"target",getItemHTML(a){return a.text??a},async getData(a){return console.log("当前输入框的值是：",a),[]},itemClickCallBack(a,t,e){console.log("item项的点击回调",[a,t,e]),this.inputTarget.value=e.value;},selectCallBack(a,t,e){console.log("item项的选中回调",[a,t,e]);},style:""}),Gi={init(a){const t=D.getRandomGUID(),e="searchSuggestion";let n=zi();if(n=D.assign(n,wt.getGlobalConfig()),n=D.assign(n,a),n.target==null)throw new Error("config.target 不能为空");n.inputTarget==null&&(n.inputTarget=n.target),a.data&&(n.data=a.data);const{$shadowContainer:r,$shadowRoot:o}=L.handlerShadow(n);if(L.handleInit(o,[B.index,B.anim,B.common]),n.style!=null){let s=document.createElement("style");p.createElement("style",{innerHTML:n.style},{type:"text/css"}),o.appendChild(s);}const i={selfDocument:n.selfDocument,$el:{root:null,$hintULContainer:null,$dynamicCSS:null},$data:{isEmpty:true},init(s=document.body||document.documentElement){this.initEl(),i.update(typeof n.data=="function"?n.data():n.data),i.updateDynamicCSS(),i.changeHintULElementWidth(),i.changeHintULElementPosition(),i.hide(),n.isAnimation&&i.$el.root.classList.add(`pops-${e}-animation`),o.appendChild(i.$el.root),s.appendChild(r);},initEl(){this.$el.root=i.getSearchSelectElement(),this.$el.$dynamicCSS=this.$el.root.querySelector("style[data-dynamic]"),this.$el.$hintULContainer=i.$el.root.querySelector("ul");},getSearchSelectElement(){let s=p.createElement("div",{className:`pops pops-${e}-search-suggestion`,innerHTML:`
						<style data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<ul class="pops-${e}-search-suggestion-hint">${n.toSearhNotResultHTML}</ul>
         				 `},{"data-guid":t,"type-value":e});return n.className!==""&&n.className!=null&&p.addClassName(s,n.className),s},getDynamicCSS(){return `
				.pops-${e}-animation{
					-moz-animation: searchSelectFalIn 0.5s 1 linear;
					-webkit-animation: searchSelectFalIn 0.5s 1 linear;
					-o-animation: searchSelectFalIn 0.5s 1 linear;
					-ms-animation: searchSelectFalIn 0.5s 1 linear;
				}
				.pops-${e}-search-suggestion{
					--search-suggestion-bg-color: #ffffff;
					--search-suggestion-box-shadow-color: rgb(0 0 0 / 20%);
					--search-suggestion-item-color: #515a6e;
					--search-suggestion-item-none-color: #8e8e8e;
					--search-suggestion-item-hover-bg-color: rgba(0, 0, 0, .1);
				}
				.pops-${e}-search-suggestion{
					border: initial;
					overflow: initial;
				}
				ul.pops-${e}-search-suggestion-hint{
					position: ${n.isAbsolute?"absolute":"fixed"};
					z-index: ${L.handleZIndex(n.zIndex)};
					width: 0;
					left: 0;
					max-height: ${n.maxHeight};
					overflow-x: hidden;
					overflow-y: auto;
					padding: 5px 0;
					background-color: var(--search-suggestion-bg-color);
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 0 1px 6px var(--search-suggestion-box-shadow-color);
				}
				/* 建议框在上面时 */
				ul.pops-${e}-search-suggestion-hint[data-top-reverse]{
					display: flex;
					flex-direction: column-reverse;
				}
				ul.pops-${e}-search-suggestion-hint[data-top-reverse] li{
					flex-shrink: 0;
				}
				ul.pops-${e}-search-suggestion-hint li{
					padding: 7px;
					margin: 0;
					clear: both;
					color: var(--search-suggestion-item-color);
					font-size: 14px;
					list-style: none;
					cursor: pointer;
					transition: background .2s ease-in-out;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				ul.pops-${e}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: var(--search-suggestion-item-none-color);
				}
				ul.pops-${e}-search-suggestion-hint li:hover{
					background-color: var(--search-suggestion-item-hover-bg-color);
				}

				@media (prefers-color-scheme: dark){
					.pops-${e}-search-suggestion{
						--search-suggestion-bg-color: #1d1e1f;
						--search-suggestion-item-color: #cfd3d4;
						--search-suggestion-item-hover-bg-color: rgba(175, 175, 175, .1);
					}
				}
				`},getSearchItemLiElement(s,l){return p.createElement("li",{className:`pops-${e}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,"data-index":l,"data-value":i.getItemDataValue(s),innerHTML:`${n.getItemHTML(s)}${n.deleteIcon.enable?i.getDeleteIconHTML():""}`})},getItemDataValue(s){return s},setSearchItemClickEvent(s){p.on(s,"click",void 0,l=>{p.preventEvent(l),l.target.closest(`.pops-${e}-delete-icon`)?(typeof n.deleteIcon.callback=="function"&&n.deleteIcon.callback(l,s,s["data-value"]),this.$el.$hintULContainer.children.length||this.clear()):n.itemClickCallBack(l,s,s["data-value"]);},{capture:true});},setSearchItemSelectEvent(s){},setInputChangeEvent(s={capture:true}){(n.inputTarget instanceof HTMLInputElement||n.inputTarget instanceof HTMLTextAreaElement)&&(n.inputTarget.setAttribute("autocomplete","off"),p.on(n.inputTarget,"input",void 0,async l=>{let c=await n.getData(l.target.value);i.update(c);},s));},removeInputChangeEvent(s={capture:true}){p.off(n.inputTarget,"input",void 0,void 0,s);},showEvent(){i.updateDynamicCSS(),i.changeHintULElementWidth(),i.changeHintULElementPosition(),n.toHideWithNotResult&&i.$data.isEmpty?i.hide():i.show();},setShowEvent(s={capture:true}){if(n.followPosition==="target")p.on([n.target],["focus","click"],void 0,i.showEvent,s);else if(n.followPosition==="input")p.on([n.inputTarget],["focus","click"],void 0,i.showEvent,s);else if(n.followPosition==="inputCursor")p.on([n.inputTarget],["focus","click","input"],void 0,i.showEvent,s);else throw new Error("未知followPosition："+n.followPosition)},removeShowEvent(s={capture:true}){p.off([n.target,n.inputTarget],["focus","click"],void 0,i.showEvent,s),p.off([n.inputTarget],["input"],void 0,i.showEvent,s);},hideEvent(s){if(s.target instanceof Node){if(r.contains(s.target)||n.target.contains(s.target)||n.inputTarget.contains(s.target))return;i.hide();}},setHideEvent(s={capture:true}){Array.isArray(i.selfDocument)?i.selfDocument.forEach(l=>{p.on(l,["click","touchstart"],void 0,i.hideEvent,s);}):p.on(i.selfDocument,["click","touchstart"],void 0,i.hideEvent,s);},removeHideEvent(s={capture:true}){Array.isArray(i.selfDocument)?i.selfDocument.forEach(l=>{p.off(l,["click","touchstart"],void 0,i.hideEvent,s);}):p.off(i.selfDocument,["click","touchstart"],void 0,i.hideEvent,s);},setAllEvent(s={capture:true}){i.setInputChangeEvent(s),i.setHideEvent(s),i.setShowEvent(s);},removeAllEvent(s={capture:true}){i.removeInputChangeEvent(s),i.removeHideEvent(s),i.removeShowEvent(s);},getDeleteIconHTML(s=16,l="#bababa"){return `
				<svg class="pops-${e}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" fill="${l}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`},setPromptsInSearch(){let s=p.createElement("li",{className:`pops-${e}-search-suggestion-hint-searching-item`,innerHTML:n.searchingTip});i.$el.$hintULContainer.appendChild(s);},removePromptsInSearch(){i.$el.$hintULContainer.querySelector(`li.pops-${e}-search-suggestion-hint-searching-item`)?.remove();},clearAllSearchItemLi(){Q.setSafeHTML(i.$el.$hintULContainer,"");},changeHintULElementPosition(s=n.target??n.inputTarget){let l=null;if(n.followPosition==="inputCursor"?l=p.getTextBoundingRect(n.inputTarget,n.inputTarget.selectionStart||0,n.inputTarget.selectionEnd||0,false):l=n.isAbsolute?p.offset(s):s.getBoundingClientRect(),l==null)return;let c=document.documentElement.clientHeight;n.isAbsolute&&(c=p.height(document));let f=p.width(document),d=n.position;if(n.position==="auto"){let g=l.bottom,w=p.height(i.$el.$hintULContainer);g+w>c?d="top":(d="bottom",i.$el.$hintULContainer.removeAttribute("data-top"));}d==="top"?(n.positionTopToReverse&&i.$el.$hintULContainer.setAttribute("data-top-reverse","true"),i.$el.$hintULContainer.style.top="",i.$el.$hintULContainer.style.bottom=c-l.top+n.topDistance+"px"):d==="bottom"&&(i.$el.$hintULContainer.removeAttribute("data-top-reverse"),i.$el.$hintULContainer.style.bottom="",i.$el.$hintULContainer.style.top=l.height+l.top+n.topDistance+"px");let u=p.width(i.$el.$hintULContainer);i.$el.$hintULContainer.style.left=(l.left+u>f?f-u:l.left)+"px";},changeHintULElementWidth(s=n.target??n.inputTarget){let l=s.getBoundingClientRect();n.followTargetWidth?i.$el.$hintULContainer.style.width=l.width+"px":i.$el.$hintULContainer.style.width=n.width;},updateDynamicCSS(){let s=this.getDynamicCSS();Q.setSafeHTML(this.$el.$dynamicCSS,s);},update(s=[]){if(!Array.isArray(s))throw new TypeError("传入的数据不是数组");n.data=s,n.data.length?(i.$data.isEmpty=false,n.toHideWithNotResult&&i.show(),i.clearAllSearchItemLi(),n.data.forEach((l,c)=>{let f=i.getSearchItemLiElement(l,c);i.setSearchItemClickEvent(f),i.setSearchItemSelectEvent(f),i.$el.$hintULContainer.appendChild(f);})):i.clear();},clear(){this.$data.isEmpty=true,this.clearAllSearchItemLi(),this.$el.$hintULContainer.appendChild(p.parseTextToDOM(n.toSearhNotResultHTML)),n.toHideWithNotResult&&this.hide();},hide(){this.$el.root.style.display="none";},show(){this.$el.root.style.display="";}};return i}};class an{config={version:"2025.7.7",cssText:B,iconSVG:at.$data,animation:ae.$data,layer:mt,forbiddenScroll:{event(t){return p.preventEvent(t)}},Utils:D,DOMUtils:p,InstanceUtils:ut,MathFloatUtils:xe,PanelHandlerComponents:hr};init(){}noConflict(){return typeof V.globalThis.pops=="object"&&D.delete(V.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&D.delete(unsafeWindow,"pops"),new an}isPhone(t){return D.isPhone(t)}GlobalConfig=wt;alert=t=>br.init(t);confirm=t=>Ci.init(t);prompt=t=>Mi.init(t);loading=t=>Ye.init(t);iframe=t=>Ii.init(t);tooltip=t=>Je.init(t);drawer=t=>Ri.init(t);folder=t=>Pi.init(t);panel=t=>Ni.init(t);rightClickMenu=t=>Vi.init(t);searchSuggestion=t=>Gi.init(t)}const _e=new an,bt={waitRemove(...a){a.forEach(t=>{typeof t=="string"&&z.waitNodeList(t).then(e=>{e.forEach(n=>n.remove());});});},addBlockCSS(...a){let t=[];if(a.length!==0&&!(a.length===1&&typeof a[0]=="string"&&a[0].trim()===""))return a.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e);}),Nn(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(a){let t=typeof ve=="function"?ve(a.keyName):null;typeof t=="string"&&t?Nn(t):bt.loadStyleLink(a.url);},async loadStyleLink(a){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=a,Qn.ready(()=>{document.head.appendChild(t);});},async loadScript(a){let t=document.createElement("script");return t.src=a,new Promise(e=>{t.onload=()=>{e(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(a){return a=a.trim(),a.match(/^http(s|):\/\//i)||(a.startsWith("/")||(a+="/"),a=window.location.origin+a),a},fixHttps(a){if(a.startsWith("https://")||!a.startsWith("http://"))return a;let t=new URL(a);return t.protocol="https:",t.toString()},lockScroll(...a){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let e=[document.documentElement,document.body].concat(...a||[]);return e.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){e.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function a(n){navigator.clipboard.readText().then(r=>{n(r);}).catch(r=>{Yt.error("读取剪贴板内容失败👉",r),n("");});}function t(n){navigator.permissions.query({name:"clipboard-read"}).then(r=>{a(n);}).catch(r=>{Yt.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),a(n);});}function e(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!e()){n("");return}document.hasFocus()?t(n):window.addEventListener("focus",()=>{t(n);},{once:true});})},escapeHtml(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},z=zt.noConflict(),A=Qn.noConflict(),sn=_e,Yt=new z.Log(It,vt.console||Pt.console);let Ge=It?.script?.name||void 0;_e.config.Utils.AnyTouch();const gr=false;Yt.config({debug:gr,logMaxCount:1e3,autoClearConsole:true,tag:true});R.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return Vt.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)}},maxNums:{get(){return Vt.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return Vt.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let a=zt.getMaxZIndex(),t=_e.config.InstanceUtils.getPopsMaxZIndex().zIndex;return zt.getMaxValue(a,t)+100}}}));sn.GlobalConfig.setGlobalConfig({zIndex:()=>{let a=zt.getMaxZIndex(void 0,void 0,e=>{if(e?.classList?.contains("qmsg-shadow-container")||e?.closest("qmsg")&&e.getRootNode()instanceof ShadowRoot)return  false}),t=_e.config.InstanceUtils.getPopsMaxZIndex().zIndex;return zt.getMaxValue(a,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const Fi=new z.GM_Menu({GM_getValue:Nt,GM_setValue:_t,GM_registerMenuCommand:oe,GM_unregisterMenuCommand:je}),mr=new z.Httpx({xmlHttpRequest:zn,logDetails:gr});mr.interceptors.request.use(a=>a);mr.interceptors.response.use(void 0,a=>(Yt.error("拦截器-请求错误",a),a.type==="onabort"?R.warning("请求取消",{consoleLogContent:true}):a.type==="onerror"?R.error("请求异常",{consoleLogContent:true}):a.type==="ontimeout"?R.error("请求超时",{consoleLogContent:true}):R.error("其它错误",{consoleLogContent:true}),a));vt.Object.defineProperty,vt.Function.prototype.apply,vt.Function.prototype.call,vt.Element.prototype.appendChild,vt.setTimeout;const Nn=z.addStyle.bind(z);document.querySelector.bind(document);document.querySelectorAll.bind(document);new z.GM_Cookie;const yr="GM_Panel",ji="data-init",Un="data-key",Vn="data-default-value",qi="data-init-more-value",Te={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class Wi{storageKey;listenerData;constructor(t){if(typeof t=="string"){let e=t.trim();if(e=="")throw new Error("key参数不能为空字符串");this.storageKey=e;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new zt.Dictionary;}getLocalValue(){let t=Nt(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){_t(this.storageKey,t);}set(t,e){let n=this.get(t),r=this.getLocalValue();Reflect.set(r,t,e),this.setLocalValue(r),this.triggerValueChangeListener(t,n,e);}get(t,e){let n=this.getLocalValue();return Reflect.get(n,t)??e}getAll(){return this.getLocalValue()}delete(t){let e=this.get(t),n=this.getLocalValue();Reflect.deleteProperty(n,t),this.setLocalValue(n),this.triggerValueChangeListener(t,e,void 0);}has(t){let e=this.getLocalValue();return Reflect.has(e,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(e=>Reflect.get(t,e))}clear(){we(this.storageKey);}addValueChangeListener(t,e){let n=Math.random(),r=this.listenerData.get(t)||[];return r.push({id:n,key:t,callback:e}),this.listenerData.set(t,r),n}removeValueChangeListener(t){let e=false;for(const[n,r]of this.listenerData.entries()){for(let o=0;o<r.length;o++){const i=r[o];(typeof t=="string"&&i.key===t||typeof t=="number"&&i.id===t)&&(r.splice(o,1),o--,e=true);}this.listenerData.set(n,r);}return e}triggerValueChangeListener(t,e,n){if(!this.listenerData.has(t))return;let r=this.listenerData.get(t);for(let o=0;o<r.length;o++){const i=r[o];if(typeof i.callback=="function"){let s=this.get(t),l,c;typeof e<"u"&&arguments.length>=2?c=e:c=s,typeof n<"u"&&arguments.length>2?l=n:l=s,i.callback(t,c,l);}}}}const Dt=new Wi(yr),Re={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new z.Dictionary),this.__contentConfig}},addContentConfig(a){Array.isArray(a)||(a=[a]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,a);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(a=0){return this.$data.contentConfig.get(a)??[]}},Ki={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(a){return a},callback:()=>{Vt.showPanel(Re.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){Vt.isTopWindow()&&Fi.add(this.$data.menuOption);},addMenuOption(a){Array.isArray(a)||(a=[a]),this.$data.menuOption.push(...a);},updateMenuOption(a){Array.isArray(a)||(a=[a]),a.forEach(t=>{let e=this.$data.menuOption.findIndex(n=>n.key===t.key);e!==-1&&(this.$data.menuOption[e]=t);});},getMenuOption(a=0){return this.$data.menuOption[a]},deleteMenuOption(a=0){this.$data.menuOption.splice(a,1);}},Vt={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new z.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new z.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new z.Dictionary),this.__onceExecData},get scriptName(){return Ge},get panelConfig(){return this.__panelConfig},set panelConfig(a){this.__panelConfig=a;},key:yr,attributeKeyName:Un,attributeDefaultValueName:Vn},init(){this.initContentDefaultValue(),Ki.init();},isTopWindow(){return vt.top===vt.self},initContentDefaultValue(){const a=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let r={},o=n.attributes[Un];o!=null&&(r[o]=n.attributes[Vn]);let i=n.attributes[ji];if(typeof i=="function"){let c=i();if(typeof c=="boolean"&&!c)return}let s=n.attributes[qi];s&&typeof s=="object"&&Object.assign(r,s);let l=Object.keys(r);if(!l.length){Yt.warn(["请先配置键",n]);return}l.forEach(c=>{let f=r[c];this.setDefaultValue(c,f);});},t=n=>{for(let r=0;r<n.length;r++){let o=n[r];a(o);let i=o.forms;i&&Array.isArray(i)&&t(i);}},e=[...Re.getAllContentConfig()];for(let n=0;n<e.length;n++){let r=e[n];if(!r.forms)continue;const o=r.forms;o&&Array.isArray(o)&&t(o);}},setDefaultValue(a,t){this.$data.configDefaultValueData.has(a)&&Yt.warn("请检查该key(已存在): "+a),this.$data.configDefaultValueData.set(a,t);},setValue(a,t){Dt.set(a,t);},getValue(a,t){let e=Dt.get(a);return e??(this.$data.configDefaultValueData.has(a)?this.$data.configDefaultValueData.get(a):t)},deleteValue(a){Dt.delete(a);},hasKey(a){return Dt.has(a)},addValueChangeListener(a,t){return Dt.addValueChangeListener(a,(n,r,o)=>{t(a,o,r);})},removeValueChangeListener(a){Dt.removeValueChangeListener(a);},triggerMenuValueChange(a,t,e){Dt.triggerValueChangeListener(a,e,t);},deleteExecMenuOnce(a){return this.$data.onceExecMenuData.delete(a),Dt.removeValueChangeListener(a)},deleteOnceExec(a){this.$data.onceExecData.delete(a);},exec(a,t,e,n=true){const r=this;let o;typeof a=="string"||Array.isArray(a)?o=()=>a:o=a;let i=false,s=o(),l=[];Array.isArray(s)?(i=true,l=s):l.push(s);let c=l.find(T=>!this.$data.configDefaultValueData.has(T));if(c){Yt.warn(`${c} 键不存在`);return}let f=JSON.stringify(l);if(n){if(this.$data.onceExecMenuData.has(f))return;this.$data.onceExecMenuData.set(f,1);}let d=[],u=[],g=(T,S)=>{let C=[];Array.isArray(S)||(S=[S]),S.forEach(I=>{if(I!=null&&I instanceof HTMLStyleElement){C.push(I);return}}),d=d.concat(C);},w=T=>this.getValue(T),b=()=>{for(let T=0;T<d.length;T++)d[T].remove(),d.splice(T,1),T--;},h=()=>{let T=false;return typeof e=="function"?T=e(l):T=l.every(S=>w(S)),T},v=T=>{let S=h(),C=[];if(S){let I=l.map(j=>this.getValue(j)),q=t({value:i?I:I[0],addStyleElement:(...j)=>g(true,...j)});Array.isArray(q)||(q=[q]),q.forEach(j=>{if(j!=null&&j instanceof HTMLStyleElement){C.push(j);return}});}b(),d=[...C];};return n&&l.forEach(T=>{let S=this.addValueChangeListener(T,(C,I,q)=>{v();});u.push(S);}),v(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&r.$data.onceExecMenuData.delete(f);},clearStoreStyleElements:()=>b(),removeValueChangeListener:()=>{u.forEach(T=>{this.removeValueChangeListener(T);});}}},execMenu(a,t,e=false){return this.exec(a,n=>t(n),n=>n.every(o=>{let i=!!this.getValue(o);return e&&(i=!i),i}),false)},execMenuOnce(a,t){return this.exec(a,t,e=>e.every(r=>!!this.getValue(r)),true)},onceExec(a,t){if(typeof a!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(a)||(t(),this.$data.onceExecData.set(a,1));},showPanel(a,t=`${Ge}-设置`){let e=sn.panel({title:{text:`${Ge}-设置`,position:"center",html:false,style:""},content:a,btn:{close:{enable:true,callback:(n,r)=>{n.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(n,r)=>{n(),this.$data.$panel=null;}},width:Te.setting.width,height:Te.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=e;}};let ne="";document.documentElement?document.head?document.body?ne=`<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`:document.head.childNodes.length?ne=`<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`:ne=`<html>
	<head></head>
</html>

注入速度等级：2`:ne=`<html>
</html>

注入速度等级：1`:ne=`document.documentElement is null
	
注入速度等级：0`;const $t=(a,t,...e)=>setTimeout(()=>{try{a(...e);}catch(n){R.error(n.toString(),{consoleLogContent:true});}},t),xr={success:"√ ",error:"× ",warn:"!!! ",info:""},rt={setTagList(a,t){A.html(a,"");let e="";t.forEach(n=>{e+=`
				<p class="${n.tag}">${n.text??""}</p>
			`;}),A.html(a,e);},setTag(a,t,e){rt.clearTag(a),A.addClass(a,t),typeof e=="string"&&A.html(a,e);},clearTag(a){Object.keys(xr).forEach(t=>{A.removeClass(a,t);});}},$=a=>({type:"own",getLiElementCallBack(e){let n=A.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text"></p>
					<p class="pops-panel-item-left-desc-text"></p>
				`});return e.appendChild(n),e},async afterAddToUListCallBack(e,n){let r=n.target,o=r.querySelector(".pops-panel-item-left-text"),i=r.querySelector(".pops-panel-item-left-main-text"),s=r.querySelector(".pops-panel-item-left-desc-text"),l=await a();l.tag==null?A.html(i,l.text):A.html(i,xr[l.tag]+l.text),(l.description==null||l.description==="")&&A.hide(s,false),A.html(s,l.description||"");let c=["support-info"];if(l.tag!=null&&c.push(l.tag),A.addClass(i,c),typeof l.afterRender=="function")try{l.afterRender({...n,$leftContainer:o,$leftText:i,$leftDesc:s});}catch(f){console.log(f),rt.setTag(i,"error","afterRender 函数执行错误"+f);}}}),N={asideLastVisit:"aside-last-visit"},Xi={getWindow(){return Ct.unsafeWindow.isSupport()?vt:window}};class Qi{}class Oe extends Qi{isSupportGM(){return typeof Y=="object"&&Y!=null}}class it extends Oe{}const ot={getApiDocUrl(a,t){return t=t??a,`<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${a}" target="_blank">${t}</a>`}};class Yi extends it{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof Y.addElement=="function"}}isSupport(){return typeof cn=="function"}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:t,fn:async(...r)=>new Promise(o=>{let i=Reflect.apply(cn,this,r);o(i);}),formList:n.forms[1].forms},{name:e.name,fn:Y.addElement,formList:n.forms[2].forms}].forEach(r=>{let o=r.name.replace(".","__async__");r.formList.push($(async()=>{let i=null,s=null,l=Xi.getWindow(),c=o+"_test_script_exec",f=`${c}_test_str`;try{return i=await r.fn("script",{id:c,textContent:`window["${f}"] = "bar";`}),s=document.querySelector("#"+c),i==null?{text:`${r.name} returns is null`,tag:"error"}:i instanceof HTMLElement?typeof l[f]!="string"?{text:`${r.name} script element is not work`,tag:"error"}:(Reflect.deleteProperty(l,f),{text:bt.escapeHtml("支持添加<script>元素且执行js"),tag:"success"}):{text:`${r.name} returns is not style element`,tag:"error"}}catch(d){return console.error(d),{text:"执行错误 "+d,tag:"error"}}finally{s&&s.remove();}}),$(async()=>{let i=null,s=null,l=o+"_test2";try{if(i=await r.fn(document.body,"div",{"data-src":"https://example.com/image.png",id:l}),i==null)return {text:r.name+" returns is null",tag:"error"};if(!(i instanceof HTMLElement))return {text:r.name+" returns is not style element",tag:"error"};if(s=document.querySelector("#"+l),!s)return {text:"不支持3个参数",tag:"error"};const c=s.attachShadow({mode:"closed"});return i=await r.fn(c,"style",{textContent:"div { color: black; };"}),c.querySelector("style")?i==null?{text:"传入3个参数但是返回为空",tag:"error"}:s.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(c){return console.error(c),{text:"执行错误 "+c,tag:"error"}}finally{s&&s.remove();}}));}),n}}class Ji extends it{isSupport(){return typeof fn=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof Y.addStyle=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-GM_addStyle"+t,title:t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:t,fn:async(...r)=>new Promise(o=>{let i=Reflect.apply(fn,this,r);o(i);}),formList:n.forms[1].forms},{name:e.name,fn:Y.addStyle,formList:n.forms[2].forms}].forEach(r=>{let o=r.name.replace(".","__async__");r.formList.push($(async()=>{let i=null,s=null;try{return i=A.createElement("div",{id:o,innerText:o+" test"}),document.body.appendChild(i),s=await r.fn(`
							#${o} {
								background-color: rgb(255, 0, 0);
							}
						`),s==null?{text:`${r.name} returns is null`,tag:"error"}:s instanceof HTMLStyleElement?window.getComputedStyle(i).backgroundColor!=="rgb(255, 0, 0)"?{text:`${r.name} test element background is not rgb(255, 0, 0)`,tag:"error"}:{text:bt.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}:{text:`${r.name} returns is not HTMLStyleElement`,tag:"error"}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{i?.remove(),s?.remove();}}));}),n}}class Zi extends it{isSupport(){return typeof Fe=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof Y.addValueChangeListener=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r=t+"_key_1";return $(()=>({text:"测试监听数据存储改变",description:"",tag:"info",afterRender(o){let i=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(o.$leftContainer,i);let s,l,c=[];A.on(i,"click",f=>{z.preventEvent(f);try{c=[],clearTimeout(s),rt.setTag(o.$leftText,"info","等待触发回调"),A.text(o.$leftDesc,this.text),A.show(o.$leftDesc,!1);let d=z.formatTime(Date.now());l=l??Fe(r,function(u,g,w,b){console.log(arguments),clearTimeout(s),c.push({tag:"success",text:"支持触发回调"}),typeof u!="string"?c.push({tag:"error",text:`不支持回调参数key，当前类型：${typeof u}`}):c.push({tag:"success",text:`支持回调参数key，当前类型：${typeof u}`}),typeof w!=typeof d?c.push({tag:"error",text:`不支持回调参数newValue，当前类型：${typeof d}`}):c.push({tag:"success",text:`支持回调参数newValue，当前类型：${typeof d}`}),typeof b!="boolean"?c.push({tag:"error",text:`不支持回调参数remote，当前类型：${typeof b}`}):c.push({tag:"success",text:`支持回调参数remote，当前类型：${typeof b}`}),rt.setTagList(o.$leftText,c);}),console.log("GM_addValueChangeListener listenerId："+l+" typeof："+typeof l),typeof l!="number"&&typeof l!="string"?c.push({tag:"warn",text:"listenerId类型不是number或string"}):c.push({tag:"success",text:"listenerId类型："+typeof l}),s=setTimeout(()=>{c.push({tag:"error",text:"不支持触发回调"}),rt.setTagList(o.$leftText,c);},3e3),_t(r,d);}catch(d){R.error(d.toString(),{consoleLogContent:true});}});}}))})()),n}}class ts extends it{isSupport(){return (typeof Ot=="object"||typeof Ot=="function")&&Ot!=null}getApiOption(){let t=this.isSupport();return {isSupportList:t&&typeof Ot.list=="function",isSupportSet:t&&typeof Ot.set=="function",isSupportDelete:t&&typeof Ot.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let t=this.isSupportGM()&&typeof Y.cookie=="object"&&Y.cookie!=null;return {name:"GM.cookie",isSupport:t,isSupportList:t&&typeof Y.cookie.list=="function",isSupportSet:t&&typeof Y.cookie.set=="function",isSupportDelete:t&&typeof Y.cookie.delete=="function"}}getUIOption(){let t=this.getApiName(),e=this.getApiOption(),n=this.getAsyncApiOption(),r={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t+".list",`${t} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(i){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]},o=r.forms[0].forms;if(this.isSupport()&&o.push($(()=>e.isSupportList?{text:`支持 ${t}.list`,tag:"success"}:{text:`不支持 ${t}.list`,tag:"error"}),$(()=>e.isSupportSet?{text:`支持 ${t}.set`,tag:"success"}:{text:`不支持 ${t}.set`,tag:"error"}),$(()=>e.isSupportDelete?{text:`支持 ${t}.delete`,tag:"success"}:{text:`不支持 ${t}.delete`,tag:"error"})),n.isSupport?o.push($(()=>n.isSupportList?{text:`支持 ${n.name}.list`,tag:"success"}:{text:`不支持 ${n.name}.list`,tag:"error"}),$(()=>n.isSupportSet?{text:`支持 ${n.name}.set`,tag:"success"}:{text:`不支持 ${n.name}.set`,tag:"error"}),$(()=>n.isSupportDelete?{text:`支持 ${n.name}.delete`,tag:"success"}:{text:`不支持 ${n.name}.delete`,tag:"error"})):o.push($(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()){let i={name:"test",value:"1",expirationDate:(Date.now()+864e5)/1e3};r.forms[1].forms.push($(()=>{try{return {text:bt.escapeHtml("测试list获取所有Cookie"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);A.on(l,"click",c=>{try{z.preventEvent(c),Ot.list({},(f,d)=>{console.log(f),d?R.error(d):Array.isArray(f)?sn.alert({title:{text:"GM_cookie.list",position:"center"},content:{text:JSON.stringify(f,null,4),html:!0},drag:!0,mask:{enable:!0},width:Te.setting.width,height:Te.setting.height,style:`
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`}):alert("获取的cookie信息不是数组");});}catch(f){R.error(f.toString(),{consoleLogContent:!0});}}),A.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),$(()=>{try{return {text:bt.escapeHtml("测试set新增Cookie"),tag:"info",description:JSON.stringify(i),afterRender(s){let l=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);A.on(l,"click",c=>{try{z.preventEvent(c),Ot.set(i,f=>{f?R.error(f,{consoleLogContent:!0}):R.success("set cookie success");});}catch(f){R.error(f.toString(),{consoleLogContent:!0});}}),A.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),$(()=>{try{let s={name:"test"};return {text:bt.escapeHtml("测试delete删除Cookie"),tag:"info",description:JSON.stringify(s),afterRender(l){let c=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);A.on(c,"click",f=>{try{z.preventEvent(f),Ot.delete(s,d=>{d?R.error(d,{consoleLogContent:!0}):R.success("delete cookie success");});}catch(d){R.error(d.toString(),{consoleLogContent:!0});}}),A.after(l.$leftContainer,c);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}));}return r}}class es extends it{isSupport(){return typeof we=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof Y.deleteValue=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.name?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r="Test GM_deleteValue null",o=null;return $(()=>({text:"测试存储null值并删除",description:`"${r}": ${o}`,tag:"info",afterRender(i){let s=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(i.$leftContainer,s),A.on(s,"click",l=>{z.preventEvent(l);try{_t(r,o),we(r);let c=Nt(r);typeof c=="object"&&c===null?R.error("该值未删除，读取的值："+c):R.success("成功删除该值");}catch(c){R.error(c.toString(),{consoleLogContent:true});}});}}))})()),n}}class ns extends it{isSupport(){return typeof dn=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof Y.deleteValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r={GM_deleteValues_key_1:555,"GM.deleteValues_key_2":666};return $(()=>({text:"测试存储对象然后删除再读取",description:`${JSON.stringify(r)}`,tag:"info",afterRender(o){let i=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(o.$leftContainer,i),A.on(i,"click",s=>{z.preventEvent(s);try{Ae(r);let l=Object.keys(r),c=re(l);if(JSON.stringify(c)!==JSON.stringify(r)){R.error("写入失败，写入的数据和读取的数据不相同");return}dn(l);let f=re(l);f==null?R.warning("删除情况未知，因为读取到的数据为null"):typeof f=="object"&&JSON.stringify(f)==="{}"?R.success("删除成功，读取的数据为{}"):(R.error("删除情况未知，因为读取到的数据类型不是object"),console.log(f));}catch(l){R.error(l.toString(),{consoleLogContent:true});}});}}))})()),n}}class rs extends it{isSupport(){return typeof Ar=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof Y.download=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>({text:bt.escapeHtml("TODO"),tag:"info",afterRender(r){r.target?.querySelector(".support-info");}}))),n}}class os extends it{isSupport(){return typeof ve=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof Y.getResourceText=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return typeof ve("ViewerCSS")=="string"?{text:bt.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:bt.escapeHtml("GM_getResourceText return is not string"),tag:"error"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class as extends it{isSupport(){return typeof pn=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof Y.getResourceUrl=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:t,fn:async(...r)=>new Promise(o=>{let i=Reflect.apply(pn,this,r);o(i);}),formList:n.forms[1].forms},{name:e.name,fn:Y.getResourceUrl,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push($(async()=>{try{let o=await r.fn("ViewerCSS");return typeof o!="string"?{text:bt.escapeHtml(`${r.name} return is not string`),tag:"error"}:(o=o.trim(),o.startsWith("data:text/css;base64")?o.startsWith("data:text/css;base64,LyohCiAqIFZpZXdlci5qcyB2MS4xMS43CiAqIGh0dHBzOi8vZmVuZ3")?{text:bt.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:bt.escapeHtml("支持通过@resource引用资源并进行base64编码，但是base64编码的实现方式不同"),tag:"warn"}:{text:bt.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"})}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class is extends it{isSupport(){return typeof un=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof Y.getTab=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:t,fn:async()=>new Promise(r=>{un((...o)=>{r(...o);});}),formList:n.forms[1].forms},{name:e.name,fn:Y.getTab,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push($(()=>({text:"测试获取当前Tab",description:"",tag:"info",afterRender(o){let i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);A.after(o.$leftContainer,i);let s;A.on(i,"click",async l=>{z.preventEvent(l);try{clearTimeout(s),rt.setTag(o.$leftText,"error","等待3s内触发回调函数"),s=$t(()=>{rt.setTag(o.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await r.fn();clearTimeout(s),console.log(r.name+" callback tab",c),typeof c=="object"&&c!=null?rt.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):rt.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){R.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class ss extends it{isSupport(){return typeof bn=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof Y.getTabs=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:t,fn:async()=>new Promise(r=>{bn((...o)=>{r(...o);});}),formList:n.forms[1].forms},{name:e.name,fn:Y.getTabs,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push($(()=>({text:"测试获取所有Tab",description:"",tag:"info",afterRender(o){let i=A.parseHTML(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
								`,false,false);A.after(o.$leftContainer,i),A.on(i,"click",async s=>{try{z.preventEvent(s);let l=await r.fn();console.log(r.name+" callback tabs",l),alert(JSON.stringify(l));}catch(l){R.error(l.toString(),{consoleLogContent:true});}});}})));}),n}}class ls extends it{isSupport(){return typeof Nt=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof Y.getValue=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(...[{key:"Test GM_getValue boolean",value:true,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue number",value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue string",value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_getValue undefined",value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue null",value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue object",value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(r=>(()=>{let o=r.key,i=r.value;return $(()=>({text:r.text(),description:r.desc(),tag:"info",afterRender(s){let l=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(s.$leftContainer,l),A.on(l,"click",c=>{z.preventEvent(c);try{_t(o,i);let f=Nt(o);if(typeof f==typeof i){if(i===null&&i!=f){R.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}R.success("读取成功，存储类型和读取类型一致");}else R.error("读取成功，但存储类型和读取类型不同");}catch(f){R.error(f.toString(),{consoleLogContent:true});}});}}))})()),(()=>{let r="Test GM_getValue null with defaultValue",o=123;return $(()=>({text:"存储object类型的null，读取时指定默认值为"+o,description:`GM_getValue("${r}", ${o})`,tag:"info",afterRender(i){let s=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(i.$leftContainer,s),A.on(s,"click",l=>{z.preventEvent(l);try{_t(r,null);let c=Nt(r,o);typeof c=="object"&&c==null?R.success("读取的值是存储的值："+c):R.error("读取的值不是存储的值："+c);}catch(c){R.error(c.toString(),{consoleLogContent:true});}});}}))})(),(()=>{let r="Test GM_getValue defaultValue",o=123;return $(()=>({text:"不存储，测试调用默认值",description:`GM_getValue("${r}", ${o})`,tag:"info",afterRender(i){let s=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(i.$leftContainer,s),A.on(s,"click",l=>{z.preventEvent(l);try{let c=Nt(r,o);typeof c==typeof o?R.success("读取的值是默认值："+c):R.error("读取的值不是默认值："+c);}catch(c){R.error(c.toString(),{consoleLogContent:true});}});}}))})()),n}}class cs extends it{isSupport(){return typeof re=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof Y.getValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>({text:"测试直接读取",description:"没有入参",tag:"info",afterRender(r){let o=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);A.after(r.$leftContainer,o),A.on(o,"click",i=>{z.preventEvent(i);try{let s=re();R.info("请在控制台查看读取的数据"),console.log(s);}catch(s){R.error(s.toString(),{consoleLogContent:true});}});}})),$(()=>{let r={"GM_getValues-test-key-non-exists-1":1111,"GM_getValues-test-key-non-exists-2":2222};return {text:"测试读取不存在的数据",description:"数据默认值："+JSON.stringify(r),tag:"info",afterRender(o){let i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);A.after(o.$leftContainer,i),A.on(i,"click",s=>{z.preventEvent(s);try{let l=re(r);console.log(l),l==null?R.error("读取失败，读取的数据为null"):JSON.stringify(l)===JSON.stringify(r)?R.success("读取成功，读取的数据和默认值相同"):R.error("读取成功，但读取的数据和默认值不同");}catch(l){R.error(l.toString(),{consoleLogContent:true});}});}}}),(()=>{let r={"GM_getValues-test-key-1":1,"GM_getValues-test-key-2":2};return $(()=>({text:"测试存储对象并读取",description:JSON.stringify(r),tag:"info",afterRender(o){let i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);A.after(o.$leftContainer,i),A.on(i,"click",s=>{z.preventEvent(s);try{Ae(r);let l=Object.keys(r),c=re(l);console.log(c),c==null?R.error("读取失败，读取的数据为null"):JSON.stringify(c)===JSON.stringify(r)?R.success("读取成功，写入的数据和读取的数据相同"):R.error("读取成功，但写入的数据和读取的数据不同");}catch(l){R.error(l.toString(),{consoleLogContent:true});}});}}))})()),n}}class fs extends it{isSupport(){return typeof It=="object"&&It!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof Y.info=="object"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(...[{value:It?.scriptHandler,type:"string",text:"GM_info.scriptHandler"},{value:It?.scriptMetaStr,type:"string",text:"GM_info.scriptMetaStr"},{value:It?.version,type:"string",text:"GM_info.version"},{value:It?.script,type:"object",text:"GM_info.script"},{value:It?.script?.name,type:"string",text:"GM_info.script.name"},{value:It?.script?.version,type:"string",text:"GM_info.script.version"}].map(r=>$(()=>{try{return r.value!=null&&typeof r.value===r.type?{text:"支持 "+r.text+" 类型："+r.type,tag:"success"}:{text:"不支持 "+r.text+" 类型："+r.type,tag:"error"}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}))),n}}class ds extends it{isSupport(){return typeof hn=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof Y.listValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>({text:"查看存储的所有键名",tag:"info",afterRender(r){let o=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);A.after(r.$leftContainer,o),A.on(o,"click",i=>{z.preventEvent(i);try{let s=hn();Array.isArray(s)?s.find(c=>typeof c!="string")?R.error("返回值数组中存在非string类型"):alert(JSON.stringify(s,null,4)):R.error("返回值不是数组");}catch(s){R.error(s.toString(),{consoleLogContent:true});}});}}))),n}}class ps extends it{isSupport(){return typeof gn=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof Y.log=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{let r="test GM_log";return {text:bt.escapeHtml("请在控制台查看输出"),tag:"info",description:"test GM_log",afterRender(o){let i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);A.on(i,"click",s=>{z.preventEvent(s);try{gn(r);}catch(l){R.error(l.toString(),{consoleLogContent:!0});}}),A.after(o.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class us extends it{isSupport(){return typeof mn=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof Y.notification=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:t,fn:async r=>new Promise(o=>{let i=r.onclick,s=mn({...r,onclick(...l){typeof i=="function"&&Reflect.apply(i,this,l),o(s??true);}});}),formList:n.forms[1].forms},{name:e.name,fn:Y.notification,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push($(()=>{try{return {text:bt.escapeHtml("点击通知的内容测试url"),tag:"info",description:"https://example.com/",afterRender(o){let i=o.target,s=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);A.on(s,"click",async l=>{z.preventEvent(l);try{await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/"});}catch(c){R.error(c.toString(),{consoleLogContent:!0});}}),A.after(o.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),$(()=>{try{let o,i,s=!1,l=!1;return {text:"测试通知的timeout",description:"请勿点击通知",tag:"info",afterRender(c){o=c.target,i=c.$leftContainer;let f=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),d,u=z.debounce(()=>{try{clearTimeout(d),A.html(c.$leftText,'<p class="success">测试成功，触发</p>'),s=!1,l=!1;}catch(g){R.error(g.toString(),{consoleLogContent:!0});}},800);A.on(f,"click",async g=>{try{z.preventEvent(g),clearTimeout(d);let w=10,b=w,h=()=>{let E="正在等待触发超时：5000ms";return b--,E};rt.setTag(c.$leftText,"info",h()),d=$t(()=>{rt.setTag(c.$leftText,"error","测试超时，未触发ondone回调");},w*1e3);const v=await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/",timeout:5e3,ondone(){u();}});}catch(w){R.error(w.toString(),{consoleLogContent:!0});}}),A.after(i,f);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}),$(()=>{try{let o,i,s=!1,l=!1,c=!1,f="点击通知的内容测试onclick、ondone函数";return {text:f,description:"https://example.com/",tag:"info",afterRender(u){o=u.target,i=u.$leftContainer;let g=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),w,b,h=z.debounce(()=>{try{clearTimeout(w),clearInterval(b);let v="",E="success",T="",S="success";s?(v+="支持 onclick 函数",l?(v=v.trim(),v+="且支持提供 event 参数"):(v+="但是不支持提供 event 参数",E="warn")):(v+="不支持 onclick 函数",E="error"),c?T+="支持 ondone 函数":(T+="不支持 ondone 函数",S="error"),A.html(u.$leftText,`
												<p class="${E}">${v}</p>
												<p class="${S}">${T}</p>`),s=!1,c=!1,l=!1;}catch(v){R.error(v.toString(),{consoleLogContent:!0});}},800);A.on(g,"click",async v=>{try{z.preventEvent(v),clearTimeout(w),clearInterval(b);let E=10,T=E,S=()=>{let C=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${T}s`;return T--,C};A.text(u.$leftText,S()),A.text(u.$leftDesc,f),A.show(u.$leftDesc,!1),w=$t(()=>{clearInterval(b),rt.setTag(u.$leftText,"error","测试超时，未触发回调");},E*1e3),b=setInterval(()=>{A.text(u.$leftText,S());},1e3),await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/",onclick:C=>{console.log(C),s=!0,C&&typeof C.preventDefault=="function"&&(l=!0,C.preventDefault()),h();},ondone(){c=!0,h();}});}catch(E){R.error(E.toString(),{consoleLogContent:!0});}}),A.after(i,g);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}),$(()=>{try{let o,i,s=!1,l=!1,c=!1,f="123",d="456",u="notification_tag_"+Date.now(),g={title:"测试通知的内容更新（tag）",text:f,tag:u},w=`更新前：${f}，更新后：${d}`;return {text:g.title,description:w,tag:"info",afterRender(b){o=b.target,i=b.$leftContainer;let h=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),v,E;A.on(h,"click",async T=>{try{z.preventEvent(T),clearTimeout(v),clearInterval(E);let S=5,C=S,I=()=>{let q=`${C}s后通知的内容将更新为：${d}`;return C--,q};A.text(b.$leftDesc,I()),A.show(b.$leftDesc,!1),v=setTimeout(async()=>{clearInterval(E),A.text(b.$leftDesc,w),r.fn({...g,text:d});},S*1e3),E=setInterval(()=>{A.text(b.$leftDesc,I());},1e3),await r.fn(g);}catch(S){R.error(S.toString(),{consoleLogContent:!0});}}),A.after(i,h);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class bs extends it{isSupport(){return typeof le=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof Y.openInTab=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return {text:"后台打开：https://www.example.com/",tag:"info",afterRender(r){let o=r.target,i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);A.on(i,"click",s=>{try{z.preventEvent(s),A.text(r.$leftDesc,this.text),A.show(r.$leftDesc,!1);let l=le("https://www.example.com/");if(typeof l=="object")if(l==null)rt.setTag(r.$leftText,"error","返回值为null");else {let c="close"in l&&typeof l.close=="function",f="closed"in l&&typeof l.closed=="boolean",d="onclose"in l;A.html(r.$leftText,`
													${c?'<p class="success">支持 .close()</p>':'<p class="error">不支持 .close()</p>'}
													${f?'<p class="success">支持 .closed</p>':'<p class="error">不支持 .closed</p>'}
													${d?'<p class="success">支持设置属性 .onclose</p>':'<p class="error">不支持设置属性 .onclose</p>'}
										`);}else rt.setTag(r.$leftText,"error","返回值不是对象："+typeof l);}catch(l){R.error(l.toString(),{consoleLogContent:!0});}}),A.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}}),$(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(r){let o=r.target,i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),s,l=()=>{clearTimeout(s),rt.setTag(r.$leftText,"success","测试新标签页打开成功");};A.on(i,"click",c=>{try{z.preventEvent(c),A.off(vt,"blur",l,{capture:!0}),clearTimeout(s),rt.setTag(r.$leftText,"info","等待页面失去焦点..."),A.text(r.$leftDesc,this.text),A.show(r.$leftDesc,!1),A.on(vt,"blur",l,{capture:!0,once:!0}),le("https://www.example.com/",{active:!0}),s=$t(()=>{A.off(vt,"blur",l,{capture:!0}),rt.setTag(r.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch(f){R.error(f.toString(),{consoleLogContent:!0});}}),A.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}}),$(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(r){let o=r.target,i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),s;A.on(i,"click",l=>{try{z.preventEvent(l),clearTimeout(s),rt.setTag(r.$leftText,"info","等待调用 .close()"),A.text(r.$leftDesc,this.text),A.show(r.$leftDesc,!1);let c=le("https://www.example.com/");c&&typeof c?.close=="function"?s=$t(()=>{try{c.close(),rt.setTag(r.$leftText,"success","成功调用 .close()");}catch(f){rt.setTag(r.$leftText,"error","调用 .close() 方法失败 "+f);}},1e3):rt.setTag(r.$leftText,"error","返回对象中不支持 .close() 方法");}catch(c){R.error(c.toString(),{consoleLogContent:!0});}}),A.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}}),$(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(r){let o=r.target,i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),s,l;A.on(i,"click",c=>{try{z.preventEvent(c),clearTimeout(l),clearTimeout(s),rt.setTag(r.$leftText,"info","等待触发监听 .onclose"),A.text(r.$leftDesc,this.text),A.show(r.$leftDesc,!1);let f=le("https://www.example.com/");typeof f=="object"&&f!=null&&(f.onclose=()=>{clearTimeout(s),clearTimeout(l),rt.setTag(r.$leftText,"success","成功触发 .onclose");}),f&&typeof f?.close=="function"?s=$t(()=>{try{f.close(),l=$t(()=>{rt.setTag(r.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch(d){rt.setTag(r.$leftText,"error","调用 .close() 方法失败 "+d);}},1e3):rt.setTag(r.$leftText,"error","返回对象中不支持 .close() 方法");}catch(f){R.error(f.toString(),{consoleLogContent:!0});}}),A.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}})),n}}class hs extends it{isSupport(){return typeof oe=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof Y.registerMenuCommand=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(r){let o=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);A.after(r.$leftContainer,o);let i,s;A.on(o,"click",l=>{try{z.preventEvent(l),clearTimeout(i),clearInterval(s),A.text(r.$leftDesc,this.text),A.show(r.$leftDesc,!1);let c=10,f=()=>{let u=`已执行注册菜单，请在${c}s内点击菜单项`;return c--,u};rt.setTag(r.$leftText,"info",f()),s=setInterval(()=>{rt.setTag(r.$leftText,"info",f());},1e3),i=$t(()=>{clearInterval(s),rt.setTag(r.$leftText,"error","测试超时，未触发回调");},10*1e3);const d=oe("Test Menu",u=>{try{clearInterval(s),clearTimeout(i),rt.clearTag(r.$leftText);let g=[];g.push({tag:"success",text:"支持注册菜单"}),u?g.push({tag:"success",text:"支持点击回调且有event参数"}):g.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof d=="number"||typeof d=="string"?g.push({tag:"success",text:"函数返回值是string|number"}):g.push({tag:"error",text:"函数返回值不是string|number："+typeof d}),A.html(r.$leftText,g.map(w=>`<p class="${w.tag}">${w.text}</p>`).join(`
`));}catch(g){R.error(g.toString(),{consoleLogContent:!0});}});}catch(c){R.error(c.toString(),{consoleLogContent:!0});}});}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}}),$(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(r){let o=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);A.after(r.$leftContainer,o);let i;A.on(o,"click",s=>{try{z.preventEvent(s),clearTimeout(i);const l=oe("Test Update Menu",c=>{});R.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(i),i=$t(()=>{oe("Test Update Menu Success!!!",()=>{},{id:l}),R.success("已执行更新菜单命令，请自行验证");},3e3);}catch(l){R.error(l.toString(),{consoleLogContent:!0});}});}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class gs extends it{isSupport(){return typeof yn=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof Y.removeValueChangeListener=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r=t+"_key_1";return $(()=>({text:"测试移除监听器",description:"",tag:"info",afterRender(o){let i=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(o.$leftContainer,i);let s=[];A.on(i,"click",l=>{z.preventEvent(l);try{s=[],rt.setTag(o.$leftText,"info","等待移除监听器"),A.text(o.$leftDesc,this.text),A.show(o.$leftDesc,!1);let c=z.formatTime(Date.now()),f=Fe(r,function(d,u,g,w){console.log(arguments),s.push({tag:"error",text:"未成功移除监听器"}),rt.setTagList(o.$leftText,s);});yn(f),s.push({tag:"success",text:"支持移除监听器"}),rt.setTagList(o.$leftText,s),_t(r,c);}catch(c){R.error(c.toString(),{consoleLogContent:true});}});}}))})()),n}}class ms extends it{isSupport(){return typeof Er=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof Y.saveTab=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return {text:bt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class ys extends it{isSupport(){return typeof xn=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof Y.setClipboard=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>({text:"复制内容到剪贴板：Test GM_setClipboard",tag:"info",afterRender(r){let o=A.parseHTML(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
							`,false,false);A.after(r.$leftContainer,o);let i;A.on(o,"click",s=>{try{z.preventEvent(s),clearTimeout(i),R.info("等待3s内触发成功复制的回调"),i=$t(()=>{rt.setTag(r.$leftText,"error","不支持触发回调函数");},3e3),xn("Test GM_setClipboard","text",()=>{clearTimeout(i),rt.setTag(r.$leftText,"success","支持触发回调函数");});}catch(l){R.error(l.toString(),{consoleLogContent:true});}});}}))),n}}class xs extends it{isSupport(){return typeof _t=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof Y.setValue=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(...[{key:"Test GM_setValue boolean",value:true,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue number",value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue string",value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_setValue undefined",value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue null",value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue object",value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(r=>(()=>{let o=r.key,i=r.value;return $(()=>({text:r.text(),description:r.desc(),tag:"info",afterRender(s){let l=A.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);A.after(s.$leftContainer,l),A.on(l,"click",c=>{z.preventEvent(c);try{_t(o,i),R.info("执行写入完毕，请自行查看是否成功写入");}catch(f){R.error(f.toString(),{consoleLogContent:true});}});}}))})())),n}}class ws extends it{isSupport(){return typeof Ae=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof Y.setValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r={foo:1,bar:2};return $(()=>({text:"测试存储对象",description:JSON.stringify(r),tag:"info",afterRender(o){let i=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);A.after(o.$leftContainer,i),A.on(i,"click",s=>{z.preventEvent(s);try{Ae(r),R.info("执行写入完毕，请自行查看是否成功写入");}catch(l){R.error(l.toString(),{consoleLogContent:true});}});}}))})()),n}}class vs extends it{isSupport(){return typeof je=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof Y.unregisterMenuCommand=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(r){let o=A.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);A.after(r.$leftContainer,o);let i;A.on(o,"click",s=>{try{z.preventEvent(s),clearTimeout(i);const l=oe("Test UnRegister Menu",c=>{});R.info("已注册菜单，10s后自动执行卸载",{timeout:5*1e3}),clearTimeout(i),i=$t(()=>{je(l),R.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(l){R.error(l.toString(),{consoleLogContent:!0});}});}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class As extends it{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof vt=="object"&&vt!=null}getUIOption(){let t=this.getApiName(),e={id:"aside-"+t,title:t,headerTitle:`${ot.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(n){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&e.forms[1].forms.push($(()=>{let n="test-gm-window",r=Pt==vt;return Pt[n]=n,r=typeof vt[n]!="string",Reflect.deleteProperty(Pt,n),r?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),e}}class Es extends it{isSupport(){return typeof Tr=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof Y.webRequest=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return {text:bt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Ts extends it{isSupport(){return typeof zn=="function"}getApiName(){return "GM_xmlhttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof Y.xmlHttpRequest=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(r){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[$(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),$(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push($(()=>{try{return {text:bt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Ss extends it{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof Y=="object"&&Y!=null}getUIOption(){}}const Ct={unsafeWindow:new As,GM:new Ss,addElement:new Yi,addStyle:new Ji,download:new rs,getResourceText:new os,getResourceUrl:new as,info:new fs,log:new ps,notification:new us,openInTab:new bs,registerMenuCommand:new hs,unregisterMenuCommand:new vs,setClipboard:new ys,getTab:new is,saveTab:new ms,getTabs:new ss,setValue:new xs,getValue:new ls,deleteValue:new es,listValues:new ds,setValues:new ws,getValues:new cs,deleteValues:new ns,addValueChangeListener:new Zi,removeValueChangeListener:new gs,xmlHttpRequest:new Ts,webRequest:new Es,cookie:new ts},Bt={$storageKey:"gm-api-test-storage-config",set(a,t){let e=window.localStorage.getItem(Bt.$storageKey)??"{}",n=z.toJSON(e);n[a]=t,window.localStorage.setItem(Bt.$storageKey,JSON.stringify(n,(r,o)=>typeof o=="function"?o.tString():o));},get(a,t){let e=window.localStorage.getItem(Bt.$storageKey)??"{}";return z.toJSON(e)[a]??t},delete(a){let t=window.localStorage.getItem(Bt.$storageKey)??"{}",e=z.toJSON(t);Reflect.deleteProperty(e,a),window.localStorage.setItem(Bt.$storageKey,JSON.stringify(e,(n,r)=>typeof r=="function"?r.tString():r));}},U={set(a,t){Ct.setValue.isSupport()&&Ct.getValue.isSupport()&&Ct.deleteValue.isSupport()?_t(a,t):Bt.set(a,t);},get(a,t){return Ct.setValue.isSupport()&&Ct.getValue.isSupport()&&Ct.deleteValue.isSupport()?Nt(a,t):Bt.get(a,t)},delete(a){Ct.setValue.isSupport()&&Ct.getValue.isSupport()&&Ct.deleteValue.isSupport()?we(a):Bt.delete(a);}},Cs=()=>{let a=[],t=[];Object.keys(Ct).forEach(n=>{let r=Ct[n],o=r.getApiName(),i=r.isSupport(),s=r.getAsyncApiOption();i?a.push({name:o,isSupport:i}):t.push({name:o,isSupport:i}),s&&(s.isSupport?a.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+o}):t.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+o}));});let e=n=>{let r=A.createElement("div",{className:"gm-api-features-item",innerHTML:`
				<div class="gm-api-features-item__label">${n.name}</div>
				<div class="gm-api-features-item__value">
					<span style="font-size: 16px; font-weight: 700;">
						${n.isSupport?`
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z" fill="#3b9f04"></path>
							</svg>
						`:`
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path fill="#FF473E" d="m330.443 256l136.765-136.765c14.058-14.058 14.058-36.85 0-50.908l-23.535-23.535c-14.058-14.058-36.85-14.058-50.908 0L256 181.557L119.235 44.792c-14.058-14.058-36.85-14.058-50.908 0L44.792 68.327c-14.058 14.058-14.058 36.85 0 50.908L181.557 256L44.792 392.765c-14.058 14.058-14.058 36.85 0 50.908l23.535 23.535c14.058 14.058 36.85 14.058 50.908 0L256 330.443l136.765 136.765c14.058 14.058 36.85 14.058 50.908 0l23.535-23.535c14.058-14.058 14.058-36.85 0-50.908L330.443 256z"></path>
							</svg>
						`}
						
					</span>
				</div>
			`});return A.on(r,"click",o=>{z.preventEvent(o);let i=r.getRootNode(),s=z.isNotNull(n.leftTargetSelector)?n.leftTargetSelector:"#aside-"+n.name,l=i.querySelector(s);l&&(l.click(),l.scrollIntoView({behavior:"smooth"}));}),r};return {id:"component-common",title:"通用",scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)==="component-common"},callback(n){U.set(N.asideLastVisit,"component-common");},forms:[{type:"forms",text:"@run-at document-start<br>注：注入速度等级越低，注入的速度越快<br>范围：0~4",forms:[$(()=>({text:bt.escapeHtml(ne),tag:"info"}))]},{type:"forms",text:"特性",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontSize="1.2em",r.formHeaderDivElement.style.fontWeight="700";},forms:[]},{type:"forms",text:"不支持列表",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.color="rgb(216, 30, 6)",r.formHeaderDivElement.style.fontWeight="600",t.length===0&&r.formContainerListElement?.remove();},forms:[{type:"own",getLiElementCallBack(n){let r=A.createElement("div",{className:"gm-api-features-not-support"}),o=document.createDocumentFragment();return t.forEach(i=>{o.append(e(i));}),r.appendChild(o),n.appendChild(r),n}}]},{type:"forms",text:"支持列表",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontWeight="600",a.length===0&&r.formContainerListElement?.remove();},forms:[{type:"own",getLiElementCallBack(n){let r=A.createElement("div",{className:"gm-api-features-support"}),o=document.createDocumentFragment();return a.forEach(i=>{o.append(e(i));}),r.appendChild(o),n.appendChild(r),n}}]}]}};class ks extends Oe{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let t=this.getApiName();return {id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(n){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"功能测试",forms:[$(()=>{try{return {text:bt.escapeHtml("测试window.onurlchange"),tag:"info",description:"点击按钮进行测试",afterRender(n){let r=A.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1),o=s=>{clearTimeout(i),console.log("urlchange event info ==> ",s),R.success("urlchange event ==> url is changed");},i;A.on(r,"click",s=>{try{z.preventEvent(s),clearTimeout(i),Pt.onurlchange===null?(Pt.removeEventListener("urlchange",o),Pt.addEventListener("urlchange",o),window.history.pushState({},"","#/onurlchange"),i=setTimeout(()=>{R.error("urlchange event is not trigger");},1e3)):R.error("window.onurlchange is not null");}catch(l){R.error(l.toString(),{consoleLogContent:!0});}}),A.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class Ms extends Oe{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let t=this.getApiName();return {id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(n){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"功能测试",forms:[$(()=>{try{return {text:bt.escapeHtml("测试window.close"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=A.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1);A.on(r,"click",o=>{z.preventEvent(o);try{Pt.close();}catch(i){R.error(i.toString(),{consoleLogContent:!0});}}),A.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class $s extends Oe{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let t=this.getApiName();return {id:"aside-"+t,title:""+t,headerTitle:`${ot.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return U.get(N.asideLastVisit)===t},callback(n){U.set(N.asideLastVisit,t);},forms:[{type:"forms",text:"功能测试",forms:[$(()=>{try{return {text:bt.escapeHtml("测试window.focus"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=A.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
										`,!1,!1),o=()=>{setTimeout(()=>{Pt.focus();},3e3);};A.on(r,"click",i=>{z.preventEvent(i),window.removeEventListener("blur",o,{capture:!0}),window.addEventListener("blur",o,{capture:!0,once:!0});try{R.info("请切换至其它Tab页面，切换完毕3秒后会自动调用该函数");}catch(s){R.error(s.toString(),{consoleLogContent:!0});}}),A.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}let ge=[Cs()];Object.keys(Ct).forEach(a=>{let e=Ct[a].getUIOption();e&&ge.push(e);});ge.push(new ks().getUIOption());ge.push(new Ms().getUIOption());ge.push(new $s().getUIOption());Re.addContentConfig(ge);Vt.$data.panelConfig={style:`
		.success{
			color: green;
		}
		.error{
			color: red;
		}
		.warn,.warning{
			color: orange;
		}
		.info{
			color: #909090;
		}
		.support-info{
			font-weight: bold;
		}


		.gm-api-features-not-support,
		.gm-api-features-support{
			display: flex;
			gap: 8px;
			flex-wrap: wrap;
		}
		.gm-api-features-item{
			display: flex;
			align-items: center;
			width: 200px;
			max-width: 200px !important;
			justify-content: space-between;
			cursor: pointer;
			transition: all ease-out .1s;
			padding: 8px 16px;
			border-radius: 4px;
			font-size: 14px;
		}
		.gm-api-features-item:hover{
			box-shadow: 0 2px 5px 3px #0000001a;
		}
		.gm-api-features-item__label{
		}
		.gm-api-features-item__value span{
			display: flex;
			align-items: center;
		}
	`};Vt.init();Vt.showPanel(Re.getConfig());

})();