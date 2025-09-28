// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.28
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
// @grant        GM.audio
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
// @grant        GM_audio
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

  var H=typeof GM<"u"?GM:void 0,rn=typeof GM_addElement<"u"?GM_addElement:void 0,on=typeof GM_addStyle<"u"?GM_addStyle:void 0,Ut=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,$e=typeof GM_cookie<"u"?GM_cookie:void 0,xt=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,an=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,Ar=typeof GM_download<"u"?GM_download:void 0,wt=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,sn=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,ln=typeof GM_getTab<"u"?GM_getTab:void 0,cn=typeof GM_getTabs<"u"?GM_getTabs:void 0,at=typeof GM_getValue<"u"?GM_getValue:void 0,vt=typeof GM_getValues<"u"?GM_getValues:void 0,Fe=typeof GM_info<"u"?GM_info:void 0,fn=typeof GM_listValues<"u"?GM_listValues:void 0,dn=typeof GM_log<"u"?GM_log:void 0,pn=typeof GM_notification<"u"?GM_notification:void 0,un=typeof GM_openInTab<"u"?GM_openInTab:void 0,At=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,bn=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,Er=typeof GM_saveTab<"u"?GM_saveTab:void 0,hn=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,De=typeof GM_setValue<"u"?GM_setValue:void 0,Et=typeof GM_setValues<"u"?GM_setValues:void 0,Vt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Tr=typeof GM_webRequest<"u"?GM_webRequest:void 0,Un=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,we=typeof GM_audio<"u"?GM_audio:void 0,ve=typeof unsafeWindow<"u"?unsafeWindow:void 0,Be=window;function Sr(){try{typeof Object.assign!="function"&&(Object.assign=function(a){return a=Object(a),arguments.length>1&&[...arguments].splice(1,arguments.length-1).forEach(t=>{for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);}),a});}catch(a){console.warn("Qmsg CompatibleProcessing Object.assign error",a);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){const a=this;function e(t){return function(n){const r=a.className.split(/\s+/g),o=r.indexOf(n);t(r,o,n),a.className=r.join(" ");}}return {add:e(function(t,n,r){~n||t.push(r);}),remove:e(function(t,n){~n&&t.splice(n,1);}),toggle:e(function(t,n,r){~n?t.splice(n,1):t.push(r);}),contains:function(t){return !!~a.className.split(/\s+/g).indexOf(t)},item:function(t){return a.className.split(/\s+/g)[t]||null}}}});}catch(a){console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning",a);}}const Ee={get PLUGIN_NAME(){return "qmsg"},get NAMESPACE(){return "qmsg"},INS_DEFAULT:{},get config(){return {parent:document.body||document.documentElement,useShadowRoot:true,shadowRootMode:"open",animation:true,autoClose:true,listenEventToPauseAutoClose:true,content:"",isHTML:false,position:"top",showClose:false,maxNums:5,onClose:null,showIcon:true,showMoreContent:false,showReverse:false,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:false,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:false,afterRender:null}}},Cr=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,Vn={info:`
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
		</svg>`},Te={insInfoList:[],remove(a){let e=false;for(let t=0;t<Te.insInfoList.length;t++)if(Te.insInfoList[t].uuid===a){Te.insInfoList.splice(t,1),e=true;break}return e}},kr=a=>(e,t)=>(a.set(e,t),t),mn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,zn=536870912,gn=zn*2,Mr=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<gn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<zn){for(;t.has(r);)r=Math.floor(Math.random()*gn);return a(t,r)}if(t.size>mn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*mn);return a(t,r)},Fn=new WeakMap,Lr=kr(Fn),zt=Mr(Lr,Fn),$r=a=>typeof a.start=="function",yn=new WeakMap,Ir=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return yn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=yn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Ot=new WeakMap,_r=a=>{if(Ot.has(a))return Ot.get(a);const e=new Map;return Ot.set(a,e),e},Rr=a=>{const e=Ir(a);return t=>{const n=_r(t);t.addEventListener("message",(({data:i})=>{const{id:l}=i;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),i.error===void 0?f(i.result):c(new Error(i.error.message));}})),$r(t)&&t.start();const r=(i,l=null,c=[])=>new Promise((f,d)=>{const u=zt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:i},c):t.postMessage({id:u,method:i,params:l},c);}),o=(i,l,c=[])=>{t.postMessage({id:null,method:i,params:l},c);};let s={};for(const[i,l]of Object.entries(e))s={...s,[i]:l({call:r,notify:o})};return {...s}}},Ge=new Map([[0,null]]),qe=new Map([[0,null]]),Nr=Rr({clearInterval:({call:a})=>e=>{typeof Ge.get(e)=="symbol"&&(Ge.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{Ge.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof qe.get(e)=="symbol"&&(qe.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{qe.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=zt(Ge);Ge.set(o,r);const s=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const i=Ge.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(e(...n),Ge.get(o)===r&&s());});return s(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=zt(qe);return qe.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const s=qe.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(qe.delete(o),e(...n));}),o}}),Or=a=>{const e=new Worker(a);return Nr(e)},Pr=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},Br=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,St=Pr(Or,Br),Dr=a=>St().clearInterval(a),Hr=a=>St().clearTimeout(a),Ur=(...a)=>St().setInterval(...a),Vr=(...a)=>St().setTimeout(...a),de={getNameSpacify(...a){let e=Ee.NAMESPACE;for(let t=0;t<a.length;++t)e+="-"+a[t];return e},isNumber(a){return /^\d+$/.test(a)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){const e=Math.random()*16|0;return (a=="x"?e:e&3|8).toString(16)})},mergeArgs(a="",e){const t={};if(arguments.length===0)return t;if(e!=null){if(t.content=a,typeof e=="object"&&e!=null)return Object.assign(t,e)}else {if(typeof a=="object"&&a!=null)return Object.assign(t,a);t.content=a;}return t},toDynamicObject(a,...e){const t=Object.assign({},a??{});return Object.keys(t).forEach(n=>{let r=t[n];Object.defineProperty(t,n,{get(){const o=e.findIndex(s=>typeof s=="object"&&s!=null&&s.hasOwnProperty.call(s,n));return o!==-1?e[o][n]:r},set(o){r=o;}});}),t},setTimeout(a,e){try{return Vr(a,e)}catch{return globalThis.setTimeout(a,e)}},clearTimeout(a){try{a!=null&&Hr(a);}catch{}finally{globalThis.clearTimeout(a);}},setInterval(a,e){try{return Ur(a,e)}catch{return globalThis.setInterval(a,e)}},clearInterval(a){try{a!=null&&Dr(a);}catch{}finally{globalThis.clearInterval(a);}},setSafeHTML(a,e){try{a.innerHTML=e;}catch{if(globalThis.trustedTypes){const t=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:n=>n});a.innerHTML=t.createHTML(e);}else throw new Error("QmsgUtils trustedTypes is not defined")}}},Ie={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},__CAN_ANIMATION__:void 0,get CAN_ANIMATION(){return this.__CAN_ANIMATION__=this.__CAN_ANIMATION__??this.getStyleAnimationNameValue(document.createElement("div"))!=null,this.__CAN_ANIMATION__},getStyleAnimationNameValue(a){for(let e=0;e<this.$name.startNameList.length;e++){const t=this.$name.startNameList[e],n=a.style[t];if(n!=null)return n}},setStyleAnimationName(a,e=""){this.$name.startNameList.forEach(t=>{t in a.style&&(a.style[t]=e);});}},zr=`@charset "utf-8";\r
.qmsg.qmsg-wrapper {\r
  position: fixed;\r
  top: 16px;\r
  left: 0;\r
  z-index: 50000;\r
  display: flex;\r
  box-sizing: border-box;\r
  margin: 0;\r
  padding: 0;\r
  width: 100%;\r
  color: rgba(0, 0, 0, 0.55);\r
  list-style: none;\r
  font-variant: tabular-nums;\r
  font-size: 13px;\r
  line-height: 1;\r
  font-feature-settings: "tnum";\r
  pointer-events: none;\r
  flex-direction: column;\r
}\r
.qmsg.qmsg-data-position-center,\r
.qmsg.qmsg-data-position-left,\r
.qmsg.qmsg-data-position-right {\r
  position: fixed;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
}\r
.qmsg.qmsg-data-position-bottom,\r
.qmsg.qmsg-data-position-bottomleft,\r
.qmsg.qmsg-data-position-bottomright {\r
  position: fixed;\r
  top: unset;\r
  bottom: 0;\r
  bottom: 8px;\r
  left: 50%;\r
  transform: translate(-50%, 0);\r
}\r
.qmsg.qmsg-data-position-bottomleft .qmsg-item,\r
.qmsg.qmsg-data-position-left .qmsg-item,\r
.qmsg.qmsg-data-position-topleft .qmsg-item {\r
  text-align: left;\r
}\r
.qmsg.qmsg-data-position-bottom .qmsg-item,\r
.qmsg.qmsg-data-position-center .qmsg-item,\r
.qmsg.qmsg-data-position-top .qmsg-item {\r
  text-align: center;\r
}\r
.qmsg.qmsg-data-position-bottomright .qmsg-item,\r
.qmsg.qmsg-data-position-right .qmsg-item,\r
.qmsg.qmsg-data-position-topright .qmsg-item {\r
  text-align: right;\r
}\r
.qmsg .qmsg-item {\r
  position: relative;\r
  padding: 8px;\r
  text-align: center;\r
  -webkit-animation-duration: 0.3s;\r
  animation-duration: 0.3s;\r
}\r
.qmsg .qmsg-item .qmsg-count {\r
  position: absolute;\r
  top: -4px;\r
  left: -4px;\r
  display: inline-block;\r
  height: 16px;\r
  min-width: 16px;\r
  border-radius: 2px;\r
  background-color: red;\r
  color: #fff;\r
  text-align: center;\r
  font-size: 12px;\r
  line-height: 16px;\r
  -webkit-animation-duration: 0.3s;\r
  animation-duration: 0.3s;\r
}\r
.qmsg .qmsg-item:first-child {\r
  margin-top: -8px;\r
}\r
.qmsg .qmsg-content {\r
  position: relative;\r
  display: inline-block;\r
  padding: 10px 12px;\r
  max-width: 80%;\r
  min-width: 40px;\r
  border-radius: 4px;\r
  background: #fff;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  text-align: center;\r
  pointer-events: all;\r
}\r
.qmsg .qmsg-content [class^="qmsg-content-"] {\r
  display: flex;\r
  align-items: center;\r
}\r
.qmsg .qmsg-icon {\r
  position: relative;\r
  top: 1px;\r
  display: inline-block;\r
  margin-right: 8px;\r
  color: inherit;\r
  vertical-align: -0.125em;\r
  text-align: center;\r
  text-transform: none;\r
  font-style: normal;\r
  font-size: 16px;\r
  line-height: 0;\r
  text-rendering: optimizeLegibility;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
}\r
.qmsg .qmsg-icon svg {\r
  display: inline-block;\r
}\r
.qmsg .qmsg-content .qmsg-show-more-content {\r
  display: flex;\r
  align-items: center;\r
  white-space: unset;\r
  overflow: unset;\r
  text-overflow: unset;\r
  padding-right: unset;\r
}\r
.qmsg .qmsg-content-info .qmsg-icon {\r
  color: #1890ff;\r
}\r
.qmsg .qmsg-icon-close {\r
  margin: 0;\r
  margin-left: 8px;\r
  padding: 0;\r
  outline: 0;\r
  border: none;\r
  background-color: transparent;\r
  color: rgba(0, 0, 0, 0.45);\r
  font-size: 12px;\r
  cursor: pointer;\r
  transition: color 0.3s;\r
}\r
.qmsg .qmsg-icon-close:hover > svg path {\r
  stroke: #555;\r
}\r
.qmsg .qmsg-icon-close.qmsg-show-more-content {\r
  position: unset;\r
  overflow: unset;\r
  padding-left: 6px;\r
  margin-right: 0;\r
}\r
.qmsg .animate-turn {\r
  animation: MessageTurn 1s linear infinite;\r
  -webkit-animation: MessageTurn 1s linear infinite;\r
}\r
`,Fr=`@keyframes MessageTurn {\r
  0% {\r
    -webkit-transform: rotate(0);\r
  }\r
  25% {\r
    -webkit-transform: rotate(90deg);\r
  }\r
  50% {\r
    -webkit-transform: rotate(180deg);\r
  }\r
  75% {\r
    -webkit-transform: rotate(270deg);\r
  }\r
  100% {\r
    -webkit-transform: rotate(360deg);\r
  }\r
}\r
@-webkit-keyframes MessageTurn {\r
  0% {\r
    -webkit-transform: rotate(0);\r
  }\r
  25% {\r
    -webkit-transform: rotate(90deg);\r
  }\r
  50% {\r
    -webkit-transform: rotate(180deg);\r
  }\r
  75% {\r
    -webkit-transform: rotate(270deg);\r
  }\r
  100% {\r
    -webkit-transform: rotate(360deg);\r
  }\r
}\r
@-webkit-keyframes MessageMoveOut {\r
  0% {\r
    max-height: 150px;\r
    opacity: 1;\r
  }\r
  to {\r
    max-height: 0;\r
    opacity: 0;\r
  }\r
}\r
@keyframes MessageMoveOut {\r
  0% {\r
    max-height: 150px;\r
    opacity: 1;\r
  }\r
  to {\r
    max-height: 0;\r
    opacity: 0;\r
  }\r
}\r
@-webkit-keyframes MessageMoveIn {\r
  0% {\r
    opacity: 0;\r
    transform: translateY(-100%);\r
    transform-origin: 0 0;\r
  }\r
  to {\r
    opacity: 1;\r
    transform: translateY(0);\r
    transform-origin: 0 0;\r
  }\r
}\r
@keyframes MessageMoveIn {\r
  0% {\r
    opacity: 0;\r
    transform: translateY(-100%);\r
    transform-origin: 0 0;\r
  }\r
  to {\r
    opacity: 1;\r
    transform: translateY(0);\r
    transform-origin: 0 0;\r
  }\r
}\r
@-webkit-keyframes MessageShake {\r
  0%,\r
  100% {\r
    opacity: 1;\r
    transform: translateX(0);\r
  }\r
  25%,\r
  75% {\r
    opacity: 0.75;\r
    transform: translateX(-4px);\r
  }\r
  50% {\r
    opacity: 0.25;\r
    transform: translateX(4px);\r
  }\r
}\r
@keyframes MessageShake {\r
  0%,\r
  100% {\r
    opacity: 1;\r
    transform: translateX(0);\r
  }\r
  25%,\r
  75% {\r
    opacity: 0.75;\r
    transform: translateX(-4px);\r
  }\r
  50% {\r
    opacity: 0.25;\r
    transform: translateX(4px);\r
  }\r
}\r
`,jn={css:`
    ${zr}

    ${Fr}
  `,getStyleElement(){const a=document.createElement("style");return a.setAttribute("type","text/css"),a.setAttribute("data-type",Ee.PLUGIN_NAME),de.setSafeHTML(a,jn.css),a}};class jr{timeId=void 0;startTime;endTime;setting;uuid;state;repeatNum;$Qmsg;constructor(e,t){this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=de.toDynamicObject(Ee.config,e,Ee.INS_DEFAULT),this.uuid=t,this.state="opening",this.$Qmsg=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.init(),(typeof this.setting.consoleLogContent=="function"?this.setting.consoleLogContent(this):this.setting.consoleLogContent)&&console.log(this.setting.content),typeof this.setting.afterRender=="function"&&this.setting.afterRender(this);}getSetting(){return this.setting}getRepeatNum(){return this.repeatNum}setRepeatNum(e){this.repeatNum=e;}setRepeatNumIncreasing(){this.repeatNum++;}init(){const e=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$Qmsg.classList.add(this.setting.customClass);const t=Vn[this.setting.type||"info"];let n=de.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(n+=" "+de.getNameSpacify("content-with-close"));const r=this.setting.content||"";let o="";const s=Cr;this.setting.showMoreContent&&(n+="qmsg-show-more-content",o+="qmsg-show-more-content");let i="";this.setting.showClose&&(i=`<i class="qmsg-icon qmsg-icon-close ${o}">${s}</i>`);const l=document.createElement("span"),c=de.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.isHTML?de.setSafeHTML(l,r):l.innerText=r,this.setting.isLimitWidth){let w=this.setting.limitWidthNum;typeof w=="string"?de.isNumber(w)&&(w=w+"px"):w=w.toString()+"px",l.style.maxWidth=w,l.style.width=w,this.setting.limitWidthWrap==="no-wrap"?l.style.whiteSpace="nowrap":this.setting.limitWidthWrap==="ellipsis"?(l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"):this.setting.limitWidthWrap==="wrap"&&(l.style.whiteSpace="");}de.setSafeHTML(this.$Qmsg,`
			<div class="qmsg-content">
				<div class="${n}">
				${this.setting.showIcon?`<i class="qmsg-icon">${t}</i>`:""}
					${l.outerHTML}
					${i}
				</div>
			</div>
			`);const d=this.$Qmsg.querySelector(".qmsg-content");this.$Qmsg.classList.add(de.getNameSpacify("item")),this.$Qmsg.setAttribute(de.getNameSpacify("uuid"),this.uuid);let u,m,y;if(u=document.querySelector(".qmsg-shadow-container"),m=this.setting.useShadowRoot?u?.shadowRoot:u,!u){if(u=document.createElement("div"),u.className="qmsg-shadow-container",this.setting.useShadowRoot?m=u.attachShadow({mode:this.setting.shadowRootMode}):m=u,m.appendChild(jn.getStyleElement()),this.setting.style!=null){const w=document.createElement("style");w.setAttribute("type","text/css"),w.setAttribute("data-id",this.uuid),de.setSafeHTML(w,this.setting.style),d.insertAdjacentElement("afterend",w);}this.setting.parent.appendChild(u);}if(m==null)throw new Error("QmsgInst "+Ee.PLUGIN_NAME+" $shadowRoot is null");y=m.querySelector(`.${Ee.NAMESPACE}.${c}`),y||(y=document.createElement("div"),y.classList.add(Ee.NAMESPACE,de.getNameSpacify("wrapper"),de.getNameSpacify("is-initialized"),c),m.appendChild(y)),this.setting.showReverse?y.style.flexDirection="column-reverse":y.style.flexDirection="column";let g=this.setting.zIndex;if(typeof g=="function"&&(g=g()),isNaN(g)||(y.style.zIndex=g.toString()),y.appendChild(this.$Qmsg),this.setState(this.$Qmsg,"opening"),this.setting.showClose){const w=this.$Qmsg.querySelector(".qmsg-icon-close");w&&w.addEventListener("click",A=>{e.close();});}const x=w=>{Ie.getStyleAnimationNameValue(e.$Qmsg)===Ie.$state.closing&&(e.endTime=Date.now(),e.destroy()),Ie.setStyleAnimationName(e.$Qmsg);};if(Ie.$name.endNameList.forEach(function(w){e.$Qmsg.addEventListener(w,x);}),this.setting.autoClose&&this.setting.listenEventToPauseAutoClose){this.resetAutoCloseTimer();const w=v=>{this.clearAutoCloseTimer();},A=v=>{if(this.timeId!=null){console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId："+this.timeId);return}this.startAutoCloseTimer();};let T=false;this.$Qmsg.addEventListener("mouseenter",w),this.$Qmsg.addEventListener("mouseleave",A),this.$Qmsg.addEventListener("touchstart",v=>{T||(T=true,this.$Qmsg.removeEventListener("mouseenter",w),this.$Qmsg.removeEventListener("mouseleave",A)),w();}),this.$Qmsg.addEventListener("touchend",A),this.$Qmsg.addEventListener("touchcancel",A);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=Ee.config.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=Ee.config.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof Ee.config.zIndex=="function"?Ee.config.zIndex():Ee.config.zIndex);}setState(e,t){!t||!Ie.$state[t]||(this.state=t,Ie.setStyleAnimationName(e,Ie.$state[t]));}setMsgCount(){const e=de.getNameSpacify("count"),t=`div.${de.getNameSpacify("data-position",this.setting.position.toLowerCase())} [class^="qmsg-content-"]`,n=this.$Qmsg.querySelector(t);if(!n)throw new Error("QmsgInst $content is null");let r=n.querySelector("."+e);r||(r=document.createElement("span"),r.classList.add(e),n.appendChild(r));const o=this.getRepeatNum();de.setSafeHTML(r,o.toString()),Ie.setStyleAnimationName(r),Ie.setStyleAnimationName(r,"MessageShake"),this.resetAutoCloseTimer();}clearAutoCloseTimer(){de.clearTimeout(this.timeId),this.timeId=void 0,this.startTime=null,this.endTime=null;}startAutoCloseTimer(){this.setting.autoClose&&this.setting.listenEventToPauseAutoClose&&(this.startTime=Date.now(),this.endTime=null,this.timeId=de.setTimeout(()=>{this.close();},this.setting.timeout));}resetAutoCloseTimer(){this.clearAutoCloseTimer(),this.startAutoCloseTimer();}close(){this.setState(this.$Qmsg,"closing"),Ie.CAN_ANIMATION?Te.remove(this.uuid):this.destroy();const e=this.setting.onClose;e&&typeof e=="function"&&e.call(this);}destroy(){this.endTime=Date.now(),this.$Qmsg.remove(),de.clearTimeout(this.timeId),Te.remove(this.uuid),this.timeId=void 0;}get $content(){const e=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(!e)throw new Error("QmsgInst $content is null");return e}setText(e){const t=this.$content;t.innerText=e,this.setting.content=e;}setHTML(e){const t=this.$content;de.setSafeHTML(t,e),this.setting.content=e;}}function lt(a={}){const e=JSON.stringify(a);let t=Te.insInfoList.find(r=>r.config===e),n=t?.instance;if(n==null){const r=de.getUUID(),o={uuid:r,config:e,instance:new jr(a,r)};Te.insInfoList.push(o);const s=Te.insInfoList.length,i=o.instance.getSetting().maxNums;if(s>i)for(let l=0;l<s-i;l++){const c=Te.insInfoList[l];c&&c.instance.getSetting().autoClose&&c.instance.close();}t=o,n=o.instance;}else n.getRepeatNum()?n.getRepeatNum()>=99||n.setRepeatNumIncreasing():n.setRepeatNum(2),n.setMsgCount();if(n)n.$Qmsg.setAttribute("data-count",n?.getRepeatNum().toString());else throw new Error("QmsgInst is null");return n}const ft={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let a=0;a<Te.insInfoList.length;a++){const e=Te.insInfoList[a];e.instance.setting.type!=="loading"&&e.instance.endTime==null&&e.instance.startTime!=null&&Date.now()-e.instance.startTime>=e.instance.getSetting().timeout&&e.instance.close();}},option:{capture:true}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",ft.visibilitychange.eventConfig.callback,ft.visibilitychange.eventConfig.option):console.error("Qmsg addEvent visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",ft.visibilitychange.eventConfig.callback,ft.visibilitychange.eventConfig.option);}}},Gr="1.5.0";Sr();class qr{$data;$eventUtils;constructor(e){this.$data={version:Gr,config:Ee,icon:Vn,instanceStorage:Te},this.$eventUtils=ft,this.$eventUtils.visibilitychange.addEvent(),this.config(e);}config(e){e!=null&&typeof e=="object"&&(Ee.INS_DEFAULT=null,Ee.INS_DEFAULT=e);}info(e,t){const n=de.mergeArgs(e,t);return n.type="info",lt.call(this,n)}warning(e,t){const n=de.mergeArgs(e,t);return n.type="warning",lt.call(this,n)}success(e,t){const n=de.mergeArgs(e,t);return n.type="success",lt.call(this,n)}error(e,t){const n=de.mergeArgs(e,t);return n.type="error",lt.call(this,n)}loading(e,t){const n=de.mergeArgs(e,t);return n.type="loading",n.autoClose=false,lt.call(this,n)}remove(e){Te.remove(e);}closeAll(){for(let e=Te.insInfoList.length-1;e>=0;e--){const t=Te.insInfoList[e];t&&t.instance&&t.instance.close();}}}const O=new qr;let Ze=class{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis==null&&(e.globalThis=e.window),e.self==null&&(e.self=e.window)),e||(e=Object.assign({},this.defaultApi)),this.api=Object.assign({},e);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get clearTimeout(){return this.api.clearTimeout}get setInterval(){return this.api.setInterval}get clearInterval(){return this.api.clearInterval}};const Wr=a=>(e,t)=>(a.set(e,t),t),xn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Gn=536870912,wn=Gn*2,Kr=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<wn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<Gn){for(;t.has(r);)r=Math.floor(Math.random()*wn);return a(t,r)}if(t.size>xn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*xn);return a(t,r)},qn=new WeakMap,Xr=Wr(qn),Ft=Kr(Xr,qn),Qr=a=>typeof a.start=="function",vn=new WeakMap,Yr=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return vn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=vn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Pt=new WeakMap,Jr=a=>{if(Pt.has(a))return Pt.get(a);const e=new Map;return Pt.set(a,e),e},Zr=a=>{const e=Yr(a);return t=>{const n=Jr(t);t.addEventListener("message",(({data:i})=>{const{id:l}=i;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),i.error===void 0?f(i.result):c(new Error(i.error.message));}})),Qr(t)&&t.start();const r=(i,l=null,c=[])=>new Promise((f,d)=>{const u=Ft(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:i},c):t.postMessage({id:u,method:i,params:l},c);}),o=(i,l,c=[])=>{t.postMessage({id:null,method:i,params:l},c);};let s={};for(const[i,l]of Object.entries(e))s={...s,[i]:l({call:r,notify:o})};return {...s}}},We=new Map([[0,null]]),Ke=new Map([[0,null]]),eo=Zr({clearInterval:({call:a})=>e=>{typeof We.get(e)=="symbol"&&(We.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{We.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof Ke.get(e)=="symbol"&&(Ke.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{Ke.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Ft(We);We.set(o,r);const s=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const i=We.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(e(...n),We.get(o)===r&&s());});return s(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Ft(Ke);return Ke.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const s=Ke.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(Ke.delete(o),e(...n));}),o}}),to=a=>{const e=new Worker(a);return eo(e)},no=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},ro=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,Ct=no(to,ro),oo=a=>Ct().clearInterval(a),ao=a=>Ct().clearTimeout(a),so=(...a)=>Ct().setInterval(...a),io=(...a)=>Ct().setTimeout(...a),B={windowApi:new Ze({document,window,top,setTimeout,clearTimeout,setInterval,clearInterval}),isShow(a){return !!a.getClientRects().length},createSafeHTML(a){return window.trustedTypes?window.trustedTypes.createPolicy("safe-innerHTML",{createHTML:t=>t}).createHTML(a):a},setSafeHTML(a,e){a.innerHTML=this.createSafeHTML(e);},forceShow(a){const e=a.cloneNode(true);return e.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(e),{recovery(){e.remove();}}},getStyleValue(a,e){let t=null,n=null;a instanceof CSSStyleDeclaration?n=a:(t=a.ownerDocument.defaultView,(!t||!t.opener)&&(t=window),n=t.getComputedStyle(a));const r=parseFloat(n[e]);return isNaN(r)?0:r},isWin(a){return typeof a!="object"||a instanceof Node?false:a===globalThis||a===window||a===self||a===globalThis||a===window||a===self||typeof unsafeWindow<"u"&&a===unsafeWindow?true:a?.Math?.toString()==="[object Math]"},isDOM(a){return a instanceof Node},delete(a,e){if(typeof Reflect=="object"&&Reflect!=null&&Reflect.deleteProperty)return Reflect.deleteProperty(a,e);delete a[e];},setTimeout(a,e=0){try{return io(a,e)}catch{return this.windowApi.setTimeout(a,e)}},clearTimeout(a){try{a!=null&&ao(a);}catch{}finally{this.windowApi.clearTimeout(a);}},setInterval(a,e=0){try{return so(a,e)}catch{return this.windowApi.setInterval(a,e)}},clearInterval(a){try{a!=null&&oo(a);}catch{}finally{this.windowApi.clearInterval(a);}},isNodeList(a){return Array.isArray(a)||a instanceof NodeList},getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]},getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}},lo="1.7.0",tt={domEventSymbol:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))};class Wn{windowApi;constructor(e){this.windowApi=new Ze(e);}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){if(t=t||this.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(t.querySelectorAll(e)).filter(r=>r?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const o=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(s=>(s?.textContent||s?.innerText)?.includes(o))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const s=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";s&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=s[3]);const l=new RegExp(o,i);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=e?.textContent||e?.innerText;return typeof o!="string"&&(o=""),e.matches(t)&&o?.includes(r)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=o[3]);const i=new RegExp(r,s);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(i)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");const n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");const o=e?.closest(t);if(o){const s=e?.textContent||e?.innerText;if(typeof s=="string"&&s.includes(r))return o}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=o[3]);const i=new RegExp(r,s);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");const l=e?.closest(t);if(l){const c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(i))return l}return null}else return e?.closest(t)}}const Re=new Wn,An=function(a){return a instanceof Node};let co=class{windowApi;constructor(e){this.windowApi=new Ze(e);}isJQuery(e){let t=false;if(typeof jQuery=="object"&&e instanceof jQuery&&(t=true),e==null)return  false;if(typeof e=="object"){const n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const r of n)if(r in e)t=true;else {t=false;break}}return t}assign(e={},t={},n=false){const r=this;if(Array.isArray(t)&&!t.filter(s=>typeof s=="object").length)return t;if(t==null)return e;if(e==null&&(e={}),n)for(const o in t){const i=Reflect.get(e,o),l=Reflect.get(t,o);if(typeof l=="object"&&l!=null&&o in e&&!An(l)){Reflect.set(e,o,r.assign(i,l,n));continue}Reflect.set(e,o,l);}else for(const o in e)if(o in t){const s=Reflect.get(e,o),i=Reflect.get(t,o);if(typeof i=="object"&&i!=null&&!An(i)&&Object.keys(i).length){Reflect.set(e,o,r.assign(s,i,n));continue}Reflect.set(e,o,i);}return e}mutationObserver(e,t){const n=this,r={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};t=n.assign(r,t);const o=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,s=new o(function(i,l){typeof t.callback=="function"&&t.callback(i,l);});return Array.isArray(e)||e instanceof NodeList?e.forEach(i=>{s.observe(i,t.config);}):n.isJQuery(e)?e.each((i,l)=>{s.observe(l,t.config);}):s.observe(e,t.config),t.immediate&&typeof t.callback=="function"&&t.callback([],s),s}};const fo=new co;class Kn extends Wn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}wait(e,t,n){const r=this,o=typeof t=="number"?t:0;return new Promise(s=>{const i=fo.mutationObserver(n||r.windowApi.document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(l,c){const f=e();f.success&&(typeof c?.disconnect=="function"&&c.disconnect(),s(f.data));}});o>0&&B.setTimeout(()=>{typeof i?.disconnect=="function"&&i.disconnect(),s(null);},o);})}waitNode(...e){e=e.filter(i=>i!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(typeof e[0]!="string"&&!Array.isArray(e[0])&&typeof e[0]!="function")throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");if(e.length!==1)if(e.length===2){const i=e[1];if(typeof i=="number")o=i;else if(typeof i=="object"&&i instanceof Node)r=i;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(e.length===3){const i=e[1],l=e[2];if(typeof i=="object"&&i instanceof Node)if(r=i,typeof l=="number")o=l;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");function s(){if(Array.isArray(n)){const i=[];for(let l=0;l<n.length;l++){const c=Re.selector(n[l]);c&&i.push(c);}if(i.length===n.length)return i}else return typeof n=="function"?n():Re.selector(n,r)}return t.wait(()=>{const i=s();return i?{success:true,data:i}:{success:false,data:i}},o,r)}waitAnyNode(...e){e=e.filter(i=>i!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(typeof e[0]!="object"&&!Array.isArray(e[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(e.length!==1)if(e.length===2){const i=e[1];if(typeof i=="number")o=i;else if(typeof i=="object"&&i instanceof Node)r=i;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(e.length===3){const i=e[1],l=e[2];if(typeof i=="object"&&i instanceof Node)if(r=i,typeof l=="number")o=l;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");const s=n.map(i=>t.waitNode(i,r,o));return Promise.any(s)}waitNodeList(...e){e=e.filter(i=>i!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(typeof e[0]!="string"&&!Array.isArray(e[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(e.length!==1)if(e.length===2){const i=e[1];if(typeof i=="number")o=i;else if(typeof i=="object"&&i instanceof Node)r=i;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(e.length===3){const i=e[1],l=e[2];if(typeof i=="object"&&i instanceof Node)if(r=i,typeof l=="number")o=l;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");function s(){if(Array.isArray(n)){const i=[];for(let l=0;l<n.length;l++){const c=Re.selectorAll(n[l],r);c.length&&i.push(c);}if(i.length===n.length)return i}else {const i=Re.selectorAll(n,r);if(i.length)return i}}return t.wait(()=>{const i=s();return i?{success:true,data:i}:{success:false,data:i}},o,r)}waitAnyNodeList(...e){e=e.filter(i=>i!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(!Array.isArray(e[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(e.length!==1)if(e.length===2){const i=e[1];if(typeof i=="number")o=i;else if(typeof i=="object"&&i instanceof Node)r=i;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(e.length===3){const i=e[1],l=e[2];if(typeof i=="object"&&i instanceof Node)if(r=i,typeof l=="number")o=l;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");const s=n.map(i=>t.waitNodeList(i,r,o));return Promise.any(s)}}new Kn;class Xn extends Kn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}animate(e,t,n=1e3,r=null){const o=this;if(typeof e=="string"&&(e=Re.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(f=>{o.animate(f,t,n,r);});return}if(typeof n!="number"||n<=0)throw new TypeError("duration must be a positive number");if(typeof r!="function"&&r!==void 0)throw new TypeError("callback must be a function or null");if(typeof t!="object"||t===void 0)throw new TypeError("styles must be an object");if(Object.keys(t).length===0)throw new Error("styles must contain at least one property");const s=performance.now(),i={},l={};for(const f in t)i[f]=e.style[f]||o.windowApi.globalThis.getComputedStyle(e)[f],l[f]=t[f];const c=B.setInterval(function(){let d=(performance.now()-s)/n;d>1&&(d=1);for(const u in t)e.style[u]=i[u]+(l[u]-i[u])*d+"px";d===1&&(B.clearInterval(c),r&&r());},10);}show(e,t=true){const n=this;if(e!=null)if(typeof e=="string"&&(e=Re.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const r of e)n.show(r,t);}else e=e,e.style.display="",t&&(B.isShow(e)||e.style.setProperty("display","unset","important"));}hide(e,t=true){const n=this;if(e!=null)if(typeof e=="string"&&(e=Re.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const r of e)n.hide(r,t);}else e=e,e.style.display="none",t&&B.isShow(e)&&e.style.setProperty("display","none","important");}fadeIn(e,t=400,n){if(e==null)return;const r=this;if(typeof e=="string"&&(e=Re.selectorAll(e)),B.isNodeList(e)){e.forEach(l=>{r.fadeIn(l,t,n);});return}e.style.opacity="0",e.style.display="";let o=null,s=null;function i(l){o||(o=l);const c=l-o;e=e,e.style.opacity=Math.min(c/t,1).toString(),c<t?r.windowApi.window.requestAnimationFrame(i):(n&&typeof n=="function"&&n(),r.windowApi.window.cancelAnimationFrame(s));}s=r.windowApi.window.requestAnimationFrame(i);}fadeOut(e,t=400,n){const r=this;if(e==null)return;if(typeof e=="string"&&(e=Re.selectorAll(e)),B.isNodeList(e)){e.forEach(l=>{r.fadeOut(l,t,n);});return}e.style.opacity="1";let o=null,s=null;function i(l){o||(o=l);const c=l-o;e=e,e.style.opacity=Math.max(1-c/t,0).toString(),c<t?r.windowApi.window.requestAnimationFrame(i):(e.style.display="none",typeof n=="function"&&n(),r.windowApi.window.cancelAnimationFrame(s));}s=r.windowApi.window.requestAnimationFrame(i);}toggle(e,t){const n=this;if(typeof e=="string"&&(e=Re.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.toggle(r);});return}n.windowApi.globalThis.getComputedStyle(e).getPropertyValue("display")==="none"?n.show(e,t):n.hide(e,t);}}}new Xn;const po={Object:{defineProperty:Object.defineProperty}};class Qn extends Xn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}getAnimationEndNameList(){return B.getAnimationEndNameList()}getTransitionEndNameList(){return B.getTransitionEndNameList()}on(e,t,n,r,o){function s(g,x,w){const A=g[x];return typeof A=="boolean"?(w.capture=A,typeof g[x+1]=="boolean"&&(w.once=g[x+1]),typeof g[x+2]=="boolean"&&(w.passive=g[x+2])):typeof A=="object"&&("capture"in A||"once"in A||"passive"in A||"isComposedPath"in A)&&(w.capture=A.capture,w.once=A.once,w.passive=A.passive,w.isComposedPath=A.isComposedPath),w}const i=this,l=arguments;if(typeof e=="string"&&(e=i.selectorAll(e)),e==null)return;let c=[];e instanceof NodeList||Array.isArray(e)?(e=e,c=[...e]):c.push(e);let f=[];Array.isArray(t)?f=f.concat(t.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof t=="string"&&(f=f.concat(t.split(" ").filter(g=>g!=="")));let d=[];Array.isArray(n)?d=d.concat(n.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof n=="string"&&d.push(n);let u=r,m={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(u=n,m=s(l,3,m)):m=s(l,4,m);function y(){m.once&&i.off(e,t,n,r,o);}c.forEach(g=>{function x(w){if(d.length){let A=m.isComposedPath?w.composedPath()[0]:w.target,T=g;if(B.isWin(T)&&T===i.windowApi.document&&(T=i.windowApi.document.documentElement),d.find(C=>{if(i.matches(A,C))return  true;const L=i.closest(A,C);return L&&T?.contains(L)?(A=L,true):false})){try{po.Object.defineProperty(w,"target",{get(){return A}});}catch{}u.call(A,w,A),y();}}else u.call(g,w),y();}f.forEach(w=>{g.addEventListener(w,x,m);const A=Reflect.get(g,tt.domEventSymbol)||{};A[w]=A[w]||[],A[w].push({selector:d,option:m,callback:x,originCallBack:u}),Reflect.set(g,tt.domEventSymbol,A);});});}off(e,t,n,r,o,s){function i(x,w,A){const T=x[w];return typeof T=="boolean"?A.capture=T:typeof T=="object"&&T!=null&&"capture"in T&&(A.capture=T.capture),A}const l=this,c=arguments;if(typeof e=="string"&&(e=l.selectorAll(e)),e==null)return;let f=[];e instanceof NodeList||Array.isArray(e)?(e=e,f=[...e]):f.push(e);let d=[];Array.isArray(t)?d=d.concat(t.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof t=="string"&&(d=d.concat(t.split(" ").filter(x=>x!=="")));let u=[];Array.isArray(n)?u=u.concat(n.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof n=="string"&&u.push(n);let m=r,y={capture:false};typeof n=="function"?(m=n,y=i(c,3,y)):y=i(c,4,y);let g=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(g=true),c.length===5&&typeof c[4]=="function"&&typeof s!="function"&&(s=o),f.forEach(x=>{const w=Reflect.get(x,tt.domEventSymbol)||{};d.forEach(A=>{const T=w[A]||[],v=typeof s=="function"?T.filter(s):T;for(let C=0;C<v.length;C++){const L=v[C];let D=true;if(D&&m&&L.originCallBack!==m&&(D=false),D&&u.length&&Array.isArray(L.selector)&&JSON.stringify(L.selector)!==JSON.stringify(u)&&(D=false),D&&typeof L.option.capture=="boolean"&&y.capture!==L.option.capture&&(D=false),D||g){x.removeEventListener(A,L.callback,L.option);const z=T.findIndex(X=>X===L);z!==-1&&T.splice(z,1);}}T.length===0&&B.delete(w,t);}),Reflect.set(x,tt.domEventSymbol,w);});}offAll(e,t){if(typeof e=="string"&&(e=this.selectorAll(e)),e==null)return;let r=[];e instanceof NodeList||Array.isArray(e)?r=[...e]:r.push(e);let o=[];Array.isArray(t)?o=o.concat(t):typeof t=="string"&&(o=o.concat(t.split(" "))),r.forEach(s=>{[...new Set([...Object.getOwnPropertySymbols(s),tt.domEventSymbol])].forEach(l=>{if(!l.toString().startsWith("Symbol(events_"))return;const c=Reflect.get(s,l)||{};(o.length?o:Object.keys(c)).forEach(d=>{const u=c[d];if(!u)return;for(const y of u)s.removeEventListener(d,y.callback,{capture:y.option.capture});const m=Reflect.get(s,l);B.delete(m,d);});});});}ready(e){if(typeof e!="function")return;const t=this;function n(){try{return t.windowApi.document.readyState==="complete"||t.windowApi.document.readyState!=="loading"&&!t.windowApi.document.documentElement.doScroll}catch{return  false}}function r(){i(),e();}const o=[{target:t.windowApi.document,eventType:"DOMContentLoaded",callback:r},{target:t.windowApi.window,eventType:"load",callback:r}];function s(){for(let l=0;l<o.length;l++){const c=o[l];c.target.addEventListener(c.eventType,c.callback);}}function i(){for(let l=0;l<o.length;l++){const c=o[l];c.target.removeEventListener(c.eventType,c.callback);}}n()?B.setTimeout(e):s();}trigger(e,t,n,r=true){if(typeof e=="string"&&(e=this.selectorAll(e)),e==null)return;let s=[];e instanceof NodeList||Array.isArray(e)?(e=e,s=[...e]):s=[e];let i=[];Array.isArray(t)?i=t:typeof t=="string"&&(i=t.split(" ")),s.forEach(l=>{const c=Reflect.get(l,tt.domEventSymbol)||{};i.forEach(f=>{let d=null;n&&n instanceof Event?d=n:(d=new Event(f),n&&Object.keys(n).forEach(u=>{const m=Reflect.get(n,u);Reflect.set(d,u,m);})),r==false&&f in c?c[f].forEach(u=>{u.callback(d);}):l.dispatchEvent(d);});});}click(e,t,n,r){const o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(s=>{o.click(s,t,n,r);});return}t==null?o.trigger(e,"click",n,r):o.on(e,"click",null,t);}}blur(e,t,n,r){const o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(s=>{o.focus(s,t,n,r);});return}t===null?o.trigger(e,"blur",n,r):o.on(e,"blur",null,t);}}focus(e,t,n,r){const o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(s=>{o.focus(s,t,n,r);});return}t==null?o.trigger(e,"focus",n,r):o.on(e,"focus",null,t);}}hover(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{r.hover(o,t,n);});return}r.on(e,"mouseenter",null,t,n),r.on(e,"mouseleave",null,t,n);}}animationend(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selector(e)),e==null)return;const o={once:true};Object.assign(o,n||{});const s=B.getAnimationEndNameList();if(r.on(e,s,null,t,o),!o.once)return {off(){r.off(e,s,null,t,o);}}}transitionend(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selector(e)),e==null)return;const o={once:true};Object.assign(o,n||{});const s=B.getTransitionEndNameList();if(r.on(e,s,null,t,o),!o.once)return {off(){r.off(e,s,null,t,o);}}}keyup(e,t,n){const r=this;if(e!=null){if(typeof e=="string"&&(e=r.selectorAll(e)),B.isNodeList(e)){e.forEach(o=>{r.keyup(o,t,n);});return}r.on(e,"keyup",null,t,n);}}keydown(e,t,n){const r=this;if(e!=null){if(typeof e=="string"&&(e=r.selectorAll(e)),B.isNodeList(e)){e.forEach(o=>{r.keydown(o,t,n);});return}r.on(e,"keydown",null,t,n);}}keypress(e,t,n){const r=this;if(e!=null){if(typeof e=="string"&&(e=r.selectorAll(e)),B.isNodeList(e)){e.forEach(o=>{r.keypress(o,t,n);});return}r.on(e,"keypress",null,t,n);}}listenKeyboard(e,t="keypress",n,r){const o=this;typeof e=="string"&&(e=o.selectorAll(e));const s=function(i){const l=i.key||i.code,c=i.charCode||i.keyCode||i.which,f=[];i.ctrlKey&&f.push("ctrl"),i.altKey&&f.push("alt"),i.metaKey&&f.push("meta"),i.shiftKey&&f.push("shift"),typeof n=="function"&&n(l,c,f,i);};return o.on(e,t,s,r),{removeListen:()=>{o.off(e,t,s,r);}}}preventEvent(...e){const t=n=>(n?.preventDefault(),n?.stopPropagation(),n?.stopImmediatePropagation(),false);if(e.length===1)return t(e[0]);{const n=e[0];let r=e[1];const o=e[2];typeof r=="string"&&(r=[r]),this.on(n,r,t,{capture:!!o});}}}new Qn;class Yn extends Qn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}getElementSelector(e){const t=this;if(!e||!e.parentElement)return;if(e.id)return `#${e.id}`;let n=t.getElementSelector(e.parentElement);if(!n)return e.tagName.toLowerCase();if(e.parentElement.querySelectorAll(e.tagName).length>1){const r=Array.prototype.indexOf.call(e.parentElement.children,e)+1;n+=` > ${e.tagName.toLowerCase()}:nth-child(${r})`;}else n+=` > ${e.tagName.toLowerCase()}`;return n}}new Yn;let uo=class Jn extends Yn{constructor(e){super(e);}version=lo;noConflict(){const e=this;return e.windowApi.window.DOMUtils&&B.delete(window,"DOMUtils"),e.windowApi.window.DOMUtils=this,this}attr(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(n==null)return r.attr(e[0],t,n);e.forEach(o=>{r.attr(o,t,n);});return}if(n==null)return e.getAttribute(t);e.setAttribute(t,n);}}createElement(e,t,n){const r=this,o=r.windowApi.document.createElement(e);return typeof t=="string"?(r.html(o,t),o):(t==null&&(t={}),n==null&&(n={}),Object.keys(t).forEach(s=>{const i=t[s];if(s==="innerHTML"){r.html(o,i);return}o[s]=i;}),Object.keys(n).forEach(s=>{let i=n[s];typeof i=="object"?i=JSON.stringify(i):typeof i=="function"&&(i=i.toString()),o.setAttribute(s,i);}),o)}css(e,t,n){const r=this;function o(i,l){const c=["width","height","top","left","right","bottom","font-size"];return typeof l=="number"&&(l=l.toString()),typeof l=="string"&&c.includes(i)&&l.match(/[0-9]$/gi)&&(l=l+"px"),l}if(typeof e=="string"&&(e=r.selectorAll(e)),e==null)return;if(B.isNodeList(e)){if(typeof t=="string"){if(n==null)return r.css(e[0],t);e.forEach(i=>{r.css(i,t);});return}else if(typeof t=="object"){e.forEach(i=>{r.css(i,t);});return}return}const s=(i,l)=>{typeof l=="string"&&l.trim().endsWith("!important")?(l=l.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(i,l,"important")):(l=o(i,l),e.style.setProperty(i,l));};if(typeof t=="string"){if(n==null)return r.windowApi.globalThis.getComputedStyle(e).getPropertyValue(t);s(t,n);}else if(typeof t=="object")for(const i in t){const l=t[i];s(i,l);}else throw new TypeError("property must be string or object")}text(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(t==null)return n.text(e[0]);e.forEach(r=>{n.text(r,t);});return}if(t==null)return e.textContent||e.innerText;t instanceof Node&&(t=t.textContent||t.innerText),"textContent"in e?e.textContent=t:"innerText"in e&&(e.innerText=t);}}html(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(t==null)return n.html(e[0]);e.forEach(r=>{n.html(r,t);});return}if(t==null)return e.innerHTML;t instanceof Element&&(t=t.innerHTML),"innerHTML"in e&&B.setSafeHTML(e,t);}}getTransform(e,t=false){const n=this;let r=0,o=0;if(!(t||!t&&B.isShow(e))){const{recovery:i}=B.forceShow(e),l=n.getTransform(e,true);return i(),l}const s=n.windowApi.globalThis.getComputedStyle(e).transform;if(s!=null&&s!=="none"&&s!==""){const i=s.match(/\((.+)\)/)?.[1].split(",");i?(r=Math.abs(parseInt(i[4])),o=Math.abs(parseInt(i[5]))):(r=0,o=0);}return {transformLeft:r,transformTop:o}}val(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(t==null)return n.val(e[0]);e.forEach(r=>{n.val(r,t);});return}if(t==null)return e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked:e.value;e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked=!!t:e.value=t;}}prop(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(n==null)return r.prop(e[0],t);e.forEach(o=>{r.prop(o,t,n);});return}if(n==null)return Reflect.get(e,t);e instanceof Element&&t==="innerHTML"?r.html(e,n):Reflect.set(e,t,n);}}removeAttr(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.removeAttr(r,t);});return}e.removeAttribute(t);}}removeClass(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.removeClass(r,t);});return}t==null?e.className="":(Array.isArray(t)||(t=t.trim().split(" ")),t.forEach(r=>{e.classList.remove(r);}));}}removeProp(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.removeProp(r,t);});return}B.delete(e,t);}}addClass(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.addClass(r,t);});return}Array.isArray(t)||(t=t.split(" ")),t.forEach(r=>{r.trim()!=""&&e.classList.add(r);});}}hasClass(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return  false;if(B.isNodeList(e)){let r=true;for(let o=0;o<e.length;o++){const s=e[o];r=r&&n.hasClass(s,t);}return r}if(!e?.classList)return  false;Array.isArray(t)||(t=t.split(" "));for(let r=0;r<t.length;r++){const o=t[r].trim();if(!e.classList.contains(o))return  false}return  true}append(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(o=>{n.append(o,t);});return}function r(o,s){typeof t=="string"?o instanceof DocumentFragment?(typeof s=="string"&&(s=n.toElement(s,true,false)),o.appendChild(s)):o.insertAdjacentHTML("beforeend",B.createSafeHTML(s)):o.appendChild(s);}if(Array.isArray(t)||t instanceof NodeList){const o=n.windowApi.document.createDocumentFragment();t.forEach(s=>{typeof s=="string"&&(s=n.toElement(s,true,false)),o.appendChild(s);}),e.appendChild(o);}else r(e,t);}prepend(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.prepend(r,t);});return}if(typeof t=="string")e instanceof DocumentFragment?(t=n.toElement(t,true,false),e.prepend(t)):e.insertAdjacentHTML("afterbegin",B.createSafeHTML(t));else {const r=e.firstChild;r==null?e.prepend(t):e.insertBefore(t,r);}}}after(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.after(r,t);});return}if(typeof t=="string")e.insertAdjacentHTML("afterend",B.createSafeHTML(t));else {const r=e.parentElement,o=e.nextSibling;!r||o?e.after(t):r.insertBefore(t,o);}}}before(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(r=>{n.before(r,t);});return}if(typeof t=="string")e.insertAdjacentHTML("beforebegin",B.createSafeHTML(t));else {const r=e.parentElement;r?r.insertBefore(t,e):e.before(t);}}}remove(e){const t=this;if(typeof e=="string"&&(e=t.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(n=>{t.remove(n);});return}typeof e.remove=="function"?e.remove():e.parentElement?e.parentElement.removeChild(e):e.parentNode&&e.parentNode.removeChild(e);}}empty(e){const t=this;if(typeof e=="string"&&(e=t.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(n=>{t.empty(n);});return}e.innerHTML?e.innerHTML="":e.textContent&&(e.textContent="");}}offset(e){const t=this;if(typeof e=="string"&&(e=t.selector(e)),e==null)return;const n=e.getBoundingClientRect();return {top:n.top+t.windowApi.globalThis.scrollY,left:n.left+t.windowApi.globalThis.scrollX}}width(e,t=false){const n=this;if(typeof e=="string"&&(e=n.selector(e)),B.isWin(e))return n.windowApi.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&B.isShow(e)){if(e=e,parseFloat(B.getStyleValue(e,"width").toString())>0)return parseFloat(B.getStyleValue(e,"width").toString());if(e.offsetWidth>0){const r=B.getStyleValue(e,"borderLeftWidth"),o=B.getStyleValue(e,"borderRightWidth"),s=B.getStyleValue(e,"paddingLeft"),i=B.getStyleValue(e,"paddingRight"),l=parseFloat(e.offsetWidth.toString())-parseFloat(r.toString())-parseFloat(o.toString())-parseFloat(s.toString())-parseFloat(i.toString());return parseFloat(l.toString())}return 0}else {e=e;const{recovery:r}=B.forceShow(e),o=n.width(e,true);return r(),o}}height(e,t=false){const n=this;if(B.isWin(e))return n.windowApi.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=n.selector(e)),e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&B.isShow(e)){if(e=e,parseFloat(B.getStyleValue(e,"height").toString())>0)return parseFloat(B.getStyleValue(e,"height").toString());if(e.offsetHeight>0){const r=B.getStyleValue(e,"borderTopWidth"),o=B.getStyleValue(e,"borderBottomWidth"),s=B.getStyleValue(e,"paddingTop"),i=B.getStyleValue(e,"paddingBottom"),l=parseFloat(e.offsetHeight.toString())-parseFloat(r.toString())-parseFloat(o.toString())-parseFloat(s.toString())-parseFloat(i.toString());return parseFloat(l.toString())}return 0}else {e=e;const{recovery:r}=B.forceShow(e),o=n.height(e,true);return r(),o}}outerWidth(e,t=false){const n=this;if(B.isWin(e))return n.windowApi.window.innerWidth;if(typeof e=="string"&&(e=n.selector(e)),e=e,t||!t&&B.isShow(e)){const r=n.windowApi.globalThis.getComputedStyle(e,null),o=B.getStyleValue(r,"marginLeft"),s=B.getStyleValue(r,"marginRight");return e.offsetWidth+o+s}else {const{recovery:r}=B.forceShow(e),o=n.outerWidth(e,true);return r(),o}}outerHeight(e,t=false){const n=this;if(B.isWin(e))return n.windowApi.window.innerHeight;if(typeof e=="string"&&(e=n.selector(e)),e=e,t||!t&&B.isShow(e)){const r=n.windowApi.globalThis.getComputedStyle(e,null),o=B.getStyleValue(r,"marginTop"),s=B.getStyleValue(r,"marginBottom");return e.offsetHeight+o+s}else {const{recovery:r}=B.forceShow(e),o=n.outerHeight(e,true);return r(),o}}replaceWith(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(o=>{n.replaceWith(o,t);});return}typeof t=="string"&&(t=n.toElement(t,false,false));const r=e.parentElement;r?r.replaceChild(t,e):(n.after(e,t),e.remove());}wrap(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(i=>{n.wrap(i,t);});return}e=e;const r=n.windowApi.document.createElement("div");n.html(r,t);const o=r.firstChild;e.parentElement.insertBefore(o,e),o.appendChild(e);}prev(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.previousElementSibling}next(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.nextElementSibling}siblings(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return Array.from(e.parentElement.children).filter(n=>n!==e)}parent(e){const t=this;if(typeof e=="string"&&(e=t.selector(e)),e!=null)if(B.isNodeList(e)){const n=[];return e.forEach(r=>{n.push(t.parent(r));}),n}else return e.parentElement}toElement(e,t=false,n=false){const r=this;e=e.trim();function o(){const i=new DOMParser;return n?i.parseFromString(e,"text/html"):i.parseFromString(e,"text/html").body.firstChild}function s(){const i=r.windowApi.document.createElement("div");return r.html(i,e),n?i:i.firstElementChild??i.firstChild}return t?o():s()}serialize(e){const t=e.elements,n=[];for(let r=0;r<t.length;r++){const o=t[r];if(o.name&&!o.disabled&&(o.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(o.type)))if(o.type==="select-multiple")for(let s=0;s<o.options.length;s++)o.options[s].selected&&n.push({name:o.name,value:o.options[s].value});else n.push({name:o.name,value:o.value});}return n.map(r=>`${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&")}createDOMUtils(e){return new Jn(e)}getTextBoundingRect(e,t,n){const r=this;if(!e||!("value"in e))return e;if(t==null&&(t=e.selectionStart||0),n==null&&(n=e.selectionEnd||0),typeof t=="string"&&(t=parseFloat(t)),(typeof t!="number"||isNaN(t))&&(t=0),t<0?t=0:t=Math.min(e.value.length,t),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<t)&&(n=t),n<0?n=0:n=Math.min(e.value.length,n),typeof e.createTextRange=="function"){const v=e.createTextRange();return v.collapse(true),v.moveStart("character",t),v.moveEnd("character",n-t),v.getBoundingClientRect()}const o=A(),s=T("width",true),i=T("height",true);let l=o.top,c=o.left,f="white-space:pre;padding:0;margin:0;";const d=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];l+=T("padding-top",true),l+=T("border-top-width",true),c+=T("padding-left",true),c+=T("border-left-width",true),c+=1;for(let v=0;v<d.length;v++){const C=d[v];f+=C+":"+T(C,false)+";";}const u=e.value||"G",m=u.length,y=r.windowApi.document.createElement("div");t>0&&w(0,t);const g=w(t,n);m>n&&w(n,m),y.style.cssText=f,y.style.position="absolute",y.style.top=l+"px",y.style.left=c+"px",y.style.width=s+"px",y.style.height=i+"px",r.windowApi.document.body.appendChild(y);const x=g.getBoundingClientRect();return y?.parentNode?.removeChild(y),x;function w(v,C){const L=r.windowApi.document.createElement("span");return L.style.cssText=f,L.textContent=u.substring(v,C),y.appendChild(L),L}function A(){const v=r.windowApi.document.body,C=r.windowApi.document.defaultView,L=r.windowApi.document.documentElement,D=r.windowApi.document.createElement("div");D.style.paddingLeft=D.style.width="1px",v.appendChild(D);const z=D.offsetWidth==2;v.removeChild(D);const X=e.getBoundingClientRect(),Q=L.clientTop||v.clientTop||0,ne=L.clientLeft||v.clientLeft||0,k=C.pageYOffset||z&&L.scrollTop||v.scrollTop,$=C.pageXOffset||z&&L.scrollLeft||v.scrollLeft;return {top:X.top+k-Q,left:X.left+$-ne}}function T(v,C){const L=r.windowApi.document.defaultView.getComputedStyle(e,null).getPropertyValue(v);return C?parseFloat(L):L}}addStyle(e){if(typeof e!="string")throw new Error("DOMUtils.addStyle 参数cssText 必须为String类型");const t=this.createElement("style",{type:"text/css",innerHTML:e});return this.windowApi.document.head?this.windowApi.document.head.appendChild(t):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(t):this.windowApi.document.documentElement.insertBefore(t,this.windowApi.document.documentElement.childNodes[0]),t}checkUserClickInNode(e){const t=this;if(!B.isDOM(e))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");const n=t.windowApi.window.event,r=t.windowApi.window.event,o=n?.composedPath()?.[0],s=n?.clientX!=null?n.clientX:r.touches[0].clientX,i=n?.clientY!=null?n.clientY:r.touches[0].clientY,{left:l,right:c,top:f,bottom:d}=e.getBoundingClientRect();return s>=l&&s<=c&&i>=f&&i<=d?true:!!(o&&e.contains(o)||o==e)}deleteParentNode(e,t){if(e==null)return;if(!B.isDOM(e))throw new Error("DOMUtils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof t!="string")throw new Error("DOMUtils.deleteParentNode 参数 targetSelector 必须为 string 类型");let n=false;const r=Ce.closest(e,t);return r&&(this.remove(r),n=true),n}*findElementsWithText(e,t,n){const r=this;if(e.outerHTML.includes(t))if(e.children.length===0)(typeof n=="function"?n(e):false)||(yield e);else {const o=Array.from(e.childNodes).filter(s=>s.nodeType===Node.TEXT_NODE);for(const s of o)s.textContent.includes(t)&&(typeof n=="function"&&n(e)||(yield s));}for(let o=0;o<e.children.length;o++){const s=e.children[o];yield*r.findElementsWithText(s,t,n);}}findVisibleElement(e){let t=e;for(;t;){if(t.getBoundingClientRect().length)return t;t=t.parentElement;}return null}setElementSelection(e,t,n,r){const o=this.windowApi.document.createRange();if(o.selectNodeContents(e),t){if(t.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");n!=null&&r!=null&&(o.setStart(t,n),o.setEnd(t,r));}const s=this.windowApi.globalThis.getSelection();s&&(s.removeAllRanges(),s.addRange(o));}};const Ce=new uo;class bo{isHex(e){return !(typeof e!="string"||!e.match(/^(#|)[0-9a-fA-F]{6}$/))}hexToRgba(e,t){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);return e&&e.replace(/\s+/g,"").length===7?`rgba(${parseInt(`0x${e.slice(1,3)}`)},${parseInt(`0x${e.slice(3,5)}`)},${parseInt(`0x${e.slice(5,7)}`)},${t})`:""}hexToRgb(e){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);e=e.replace("#","");const t=e.match(/../g);for(let n=0;n<3;n++){const r=parseInt(t[n],16);Reflect.set(t,n,r);}return t}rgbToHex(e,t,n){const r=/^\d{1,3}$/;if(!r.test(e.toString())||!r.test(t.toString())||!r.test(n.toString()))throw new TypeError("输入错误的rgb颜色值");const o=[e.toString(16),t.toString(16),n.toString(16)];for(let s=0;s<3;s++)o[s].length==1&&(o[s]=`0${o[s]}`);return `#${o.join("")}`}getDarkColor(e,t){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);const n=this.hexToRgb(e);for(let r=0;r<3;r++){const o=n[r],s=Math.floor(Number(o)*(1-Number(t)));Reflect.set(n,r,s);}return this.rgbToHex(n[0],n[1],n[2])}getLightColor(e,t){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);const n=this.hexToRgb(e);for(let r=0;r<3;r++){const o=Number(n[r]),s=Math.floor(255-o*t+o);Reflect.set(n,r,s);}return this.rgbToHex(n[0],n[1],n[2])}}class ho{#e;#t={};#r={};constructor(){const e=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364");let t=0;this.#e=e.match(/..../g);for(let n=129;n<=254;n++)for(let r=64;r<=254;r++)this.#t[this.#e[t++]]=`%${n.toString(16)}%${r.toString(16)}`.toUpperCase();for(const n in this.#t){const r=Reflect.get(this.#t,n);Reflect.set(this.#r,r,n);}}handleText(e){return e=e.replace(/#(\d+)\$/g,function(t,n){return Array(+n+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(t,n,r){return r.replace(/../g,function(o){return o!="##"?n+o:o})}),e}isAscii(e){return e<=127&&e>=0}encode(e){const t=this;return [...e].reduce((r,o)=>r+n(o),"");function n(r){let o="";for(let s=0;s<r.length;s++){const i=r.codePointAt(s),l=String.fromCodePoint(i);let c=i.toString(16);if(c.length!=4&&(c=`000${c}`.match(/....$/)?.[0]),s+=l.length-1,t.isAscii(i)){o+=encodeURIComponent(l);continue}if(t.#t[c]){o+=t.#t[c];continue}o+=n(`&#${i};`);}return o}}decode(e){const t=/%[0-9A-F]{2}%[0-9A-F]{2}/,n=/%[0-9A-F]{2}/;let r=true;const o=this;for(;r;){const s=e.match(t),i=e.match(n);r=!!i,s&&s in o.#r?e=e.replace(s,String.fromCharCode(`0x${o.#r[s]}`)):e=e.replace(i,decodeURIComponent(i));}return e}}const Tt=function(...a){let e=null,t=null,n=()=>{},r={log:true};const o={config(i){return r=Object.assign(r,i),o},error(i){return n=i,o},run(i,l){e=i,t=l||this;const c=s(e,n,t);return c!==void 0?c:o}};function s(i,l,c){let f;try{typeof i=="string"?f=new Function(i).apply(c,a):f=i.apply(c,a);}catch(d){r.log&&(i=i,console.log(`%c ${i?.name?i?.name:`${i}`} `,"color: #f20000"),console.log(`%c ${d}`,"color: #f20000"),console.trace(i)),l&&(typeof l=="string"?f=new Function(l).apply(c,[...a,d]):f=l.apply(c,[...a,d]));}return f}return o};let mo=class{assign(e={},t={},n=false){const r=this;if(Array.isArray(t)&&!t.filter(s=>typeof s=="object").length)return t;if(t==null)return e;if(e==null&&(e={}),n)for(const o in t){const i=Reflect.get(e,o),l=Reflect.get(t,o);if(typeof l=="object"&&l!=null&&o in e&&!r.isDOM(l)){Reflect.set(e,o,r.assign(i,l,n));continue}Reflect.set(e,o,l);}else for(const o in e)if(o in t){const s=Reflect.get(e,o),i=Reflect.get(t,o);if(typeof i=="object"&&i!=null&&!r.isDOM(i)&&Object.keys(i).length){Reflect.set(e,o,r.assign(s,i,n));continue}Reflect.set(e,o,i);}return e}isNull(...e){let t=true;const n=[...e];for(const r of n){let o=false;if(r==null)o=true;else switch(typeof r){case "object":typeof r[Symbol.iterator]=="function"?o=r.length===0:o=Object.keys(r).length===0;break;case "number":o=r===0;break;case "string":o=r.trim()===""||r==="null"||r==="undefined";break;case "boolean":o=!r;break;case "function":{o=!!r.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}}t=t&&o;}return t}isDOM(e){return e instanceof Node}isNotNull(...e){return !this.isNull.apply(this,e)}deepClone(e){const t=this;if(e===void 0)return;if(e===null)return null;const n=e instanceof Array?[]:{};for(const[r,o]of Object.entries(e))typeof o=="object"?Reflect.set(n,r,t.deepClone(o)):Reflect.set(n,r,o);return n}coverObjectFunctionThis(e,t){if(typeof e!="object"||e===null)throw new Error("target must be object");t=t||e,Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(t));});}toJSON(e,t){let n={};return typeof e=="object"?e:(Tt().config({log:false}).error(()=>{Tt().error(()=>{try{n=new Function(`return ${e}`)();}catch(r){typeof t=="function"&&t(r);}}).run(()=>{e&&/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?n=new Function(`return ${e}`)():typeof t=="function"&&t(new Error("target is not JSON object"));});}).run(()=>{e=e.trim(),n=JSON.parse(e);}),n)}};const re=new mo;class go{windowApi={window,document};constructor(e){e&&(this.windowApi=Object.assign({},e));}getCookiesList(){return this.windowApi.document.cookie.trim()===""?[]:this.windowApi.document.cookie.split(";")}get(e){if(typeof e!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");const t=this.getCookiesList();let n;for(const r of t){const s=r.trim().split("="),i=s[0];s.splice(0,1);const l=decodeURIComponent(s.join(""));if(i===e){n={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:e,path:"/",sameSite:"unspecified",secure:true,session:false,value:l};break}}return n}list(e,t){if(e==null)throw new Error("Utils.GMCookie.list 参数不能为空");const n=[];let r;try{let o={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};o=re.assign(o,e),this.getCookiesList().forEach(i=>{i=i.trim();const l=i.split("="),c=l[0];l.splice(0,1);const f=decodeURIComponent(l.join("")),d=o.name instanceof RegExp?o.name:new RegExp(`^${o.name}`,"g");c.match(d)&&n.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:c,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:f});});}catch(o){r=o;}if(typeof t=="function")t(n,r);else return {cookies:n,error:r}}getList(e){if(e==null)throw new Error("Utils.GMCookie.list 参数不能为空");const t=[];let n={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return n=re.assign(n,e),this.getCookiesList().forEach(o=>{o=o.trim();const s=o.split("="),i=s[0];s.splice(0,1);const l=decodeURIComponent(s.join("")),c=n.name instanceof RegExp?n.name:new RegExp(`^${n.name}`,"g");i.match(c)&&t.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:i,path:"/",sameSite:"unspecified",secure:true,session:false,value:l});}),t}set(e,t){let n;try{let r={url:this.windowApi.window.location.href,name:"",value:"",domain:"",path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};r=re.assign(r,e);const o=r.expirationDate?r.expirationDate:Math.floor(Date.now())+3600*24*30;let s=`${r.name}=${decodeURIComponent(r.value)};expires=${new Date(o).toGMTString()}; path=/`;re.isNull(r.domain)&&(s+=`; domain=${r.domain}`),this.windowApi.document.cookie=s;}catch(r){n=r;}finally{typeof t=="function"&&t(n);}}delete(e,t){let n;try{let r={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:""};r=re.assign(r,e);let o=`${r.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${r.path}`;re.isNull(r.firstPartyDomain)&&(o+=`; domain=${r.firstPartyDomain};`),this.windowApi.document.cookie=o;}catch(r){n=r;}finally{typeof t=="function"&&t(n);}}parseCookie(e){if(e.trim()==="")return [];const t=e.split(";"),n=[];for(const r of t){const s=r.trim().split("="),i=s[0];s.splice(0,1);const l=decodeURIComponent(s.join(""));n.push({key:i,value:l});}return n}}// @license      GNU LGPL-3.0
  const yo=function(){const a="1.4.8",e={hookFns:[],filters:[]},t=window.unsafeWindow||document.defaultView||window;let n=t.__ajaxHooker;const r=t.Response.prototype,o=["response","responseText","responseXML"],s=["arrayBuffer","blob","formData","json","text"],i=["responseType","timeout","withCredentials"],l=["cache","credentials","integrity","keepalive","mode","priority","redirect","referrer","referrerPolicy","signal"],c=["readystatechange","load","loadend"],f={}.toString.call.bind({}.toString),d=Object.getOwnPropertyDescriptor.bind(Object),u=()=>{},m=S=>console.error(S);function y(S){return S&&["object","function"].includes(typeof S)&&typeof S.then=="function"}function g(S,...h){try{const E=S(...h);return y(E)?E.then(null,m):E}catch(E){console.error(E);}}function x(S,h,E,P){Object.defineProperty(S,h,{configurable:true,enumerable:true,get:E,set:P});}function w(S,h,E=S[h]){x(S,h,()=>E,u);}function A(S,h,E=S[h]){Object.defineProperty(S,h,{configurable:true,enumerable:true,writable:true,value:E});}function T(S){const h={};switch(f(S)){case "[object String]":for(const E of S.trim().split(/[\r\n]+/)){const[P,_]=E.split(new RegExp("(?<=^[^:]+)\\s*:\\s*"));if(!_)continue;const N=P.toLowerCase();h[N]=N in h?`${h[N]}, ${_}`:_;}break;case "[object Headers]":for(const[E,P]of S)h[E]=P;break;case "[object Object]":return {...S}}return h}function v(){this.ajaxHooker_isStopped=true;}class C{then(h){return h&&h(),new C}}class L{constructor(h){this.request=h,this.requestClone={...this.request};}_recoverRequestKey(h){h in this.requestClone?this.request[h]=this.requestClone[h]:delete this.request[h];}shouldFilter(h){const{type:E,url:P,method:_,async:N}=this.request;return h.length&&!h.find(K=>{switch(true){case(K.type&&K.type!==E):case(f(K.url)==="[object String]"&&!P.includes(K.url)):case(f(K.url)==="[object RegExp]"&&!K.url.test(P)):case(K.method&&K.method.toUpperCase()!==_.toUpperCase()):case("async"in K&&K.async!==N):return  false}return  true})}waitForRequestKeys(){if(!this.request.async)return t.__ajaxHooker.hookInsts.forEach(({hookFns:P,filters:_})=>{if(!this.shouldFilter(_)){P.forEach(N=>{f(N)==="[object Function]"&&g(N,this.request);});for(const N in this.request)y(this.request[N])&&this._recoverRequestKey(N);}}),new C;const h=[],E=new Set(["type","async","response"]);return t.__ajaxHooker.hookInsts.forEach(({hookFns:P,filters:_})=>{this.shouldFilter(_)||h.push(Promise.all(P.map(N=>g(N,this.request))).then(()=>{const N=[];for(const K in this.request)!E.has(K)&&N.push(K);return Promise.all(N.map(K=>Promise.resolve(this.request[K]).then(U=>this.request[K]=U,()=>this._recoverRequestKey(K))))}));}),Promise.all(h)}waitForResponseKeys(h){const E=this.request.type==="xhr"?o:s;return this.request.async?Promise.resolve(g(this.request.response,h)).then(()=>Promise.all(E.map(P=>{const _=d(h,P);if(_&&"value"in _)return Promise.resolve(_.value).then(N=>h[P]=N,()=>delete h[P]);delete h[P];}))):(f(this.request.response)==="[object Function]"&&(g(this.request.response,h),E.forEach(P=>{("get"in d(h,P)||y(h[P]))&&delete h[P];})),new C)}}const D={get(S,h){const E=d(S,h);if(E&&!E.configurable&&!E.writable&&!E.get)return S[h];const P=S.__ajaxHooker;if(P&&P.proxyProps){if(h in P.proxyProps){const _=P.proxyProps[h];return "get"in _?_.get():typeof _.value=="function"?_.value.bind(P):_.value}if(typeof S[h]=="function")return S[h].bind(S)}return S[h]},set(S,h,E){const P=d(S,h);if(P&&!P.configurable&&!P.writable&&!P.set)return  true;const _=S.__ajaxHooker;if(_&&_.proxyProps&&h in _.proxyProps){const N=_.proxyProps[h];N.set?N.set(E):N.value=E;}else S[h]=E;return  true}};class z{constructor(h){const E=this;Object.assign(E,{originalXhr:h,proxyXhr:new Proxy(h,D),resThenable:new C,proxyProps:{},proxyEvents:{}}),h.addEventListener("readystatechange",P=>{if(E.proxyXhr.readyState===4&&E.request&&typeof E.request.response=="function"){const _={finalUrl:E.proxyXhr.responseURL,status:E.proxyXhr.status,responseHeaders:T(E.proxyXhr.getAllResponseHeaders())},N={};for(const K of o){try{N[K]=E.originalXhr[K];}catch{}x(_,K,()=>_[K]=N[K],U=>{delete _[K],_[K]=U;});}E.resThenable=new L(E.request).waitForResponseKeys(_).then(()=>{for(const K of o)E.proxyProps[K]={get:()=>(K in _||(_[K]=N[K]),_[K])};});}E.dispatchEvent(P);}),h.addEventListener("load",P=>E.dispatchEvent(P)),h.addEventListener("loadend",P=>E.dispatchEvent(P));for(const P of c){const _="on"+P;E.proxyProps[_]={get:()=>E.proxyEvents[_]||null,set:N=>E.addEvent(_,N)};}for(const P of ["setRequestHeader","addEventListener","removeEventListener","open","send"])E.proxyProps[P]={value:E[P]};}toJSON(){}addEvent(h,E){if(h.startsWith("on"))this.proxyEvents[h]=typeof E=="function"?E:null;else {if(typeof E=="object"&&E!==null&&(E=E.handleEvent),typeof E!="function")return;this.proxyEvents[h]=this.proxyEvents[h]||new Set,this.proxyEvents[h].add(E);}}removeEvent(h,E){h.startsWith("on")?this.proxyEvents[h]=null:(typeof E=="object"&&E!==null&&(E=E.handleEvent),this.proxyEvents[h]&&this.proxyEvents[h].delete(E));}dispatchEvent(h){if(h.stopImmediatePropagation=v,x(h,"target",()=>this.proxyXhr),x(h,"currentTarget",()=>this.proxyXhr),x(h,"srcElement",()=>this.proxyXhr),this.proxyEvents[h.type]&&this.proxyEvents[h.type].forEach(P=>{this.resThenable.then(()=>!h.ajaxHooker_isStopped&&P.call(this.proxyXhr,h));}),h.ajaxHooker_isStopped)return;const E=this.proxyEvents["on"+h.type];E&&this.resThenable.then(E.bind(this.proxyXhr,h));}setRequestHeader(h,E){if(this.originalXhr.setRequestHeader(h,E),!this.request)return;const P=this.request.headers;P[h]=h in P?`${P[h]}, ${E}`:E;}addEventListener(...h){c.includes(h[0])?this.addEvent(h[0],h[1]):this.originalXhr.addEventListener(...h);}removeEventListener(...h){c.includes(h[0])?this.removeEvent(h[0],h[1]):this.originalXhr.removeEventListener(...h);}open(h,E,P=true,..._){return this.request={type:"xhr",url:E.toString(),method:h.toUpperCase(),abort:false,headers:{},data:null,response:null,async:!!P},this.openArgs=_,this.resThenable=new C,["responseURL","readyState","status","statusText",...o].forEach(N=>{delete this.proxyProps[N];}),this.originalXhr.open(h,E,P,..._)}send(h){const E=this,P=E.originalXhr,_=E.request;if(!_)return P.send(h);_.data=h,new L(_).waitForRequestKeys().then(()=>{if(_.abort)typeof _.response=="function"&&(Object.assign(E.proxyProps,{responseURL:{value:_.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),c.forEach(N=>P.dispatchEvent(new Event(N))));else {P.open(_.method,_.url,_.async,...E.openArgs);for(const N in _.headers)P.setRequestHeader(N,_.headers[N]);for(const N of i)N in _&&(P[N]=_[N]);P.send(_.data);}});}}function X(){const S=new n.realXHR;return "__ajaxHooker"in S&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),S.__ajaxHooker=new z(S),S.__ajaxHooker.proxyXhr}X.prototype=t.XMLHttpRequest.prototype,Object.keys(t.XMLHttpRequest).forEach(S=>X[S]=t.XMLHttpRequest[S]);function Q(S,h={}){return S?new Promise(async(E,P)=>{const _={};if(f(S)==="[object Request]"){_.method=S.method,_.headers=S.headers,S.body&&(_.body=await S.arrayBuffer());for(const U of l)_[U]=S[U];S=S.url;}S=S.toString(),Object.assign(_,h),_.method=_.method||"GET",_.headers=_.headers||{};const N={type:"fetch",url:S,method:_.method.toUpperCase(),abort:false,headers:T(_.headers),data:_.body,response:null,async:true},K=new L(N);if(await K.waitForRequestKeys(),N.abort){if(typeof N.response=="function"){const U={finalUrl:N.url,status:200,responseHeaders:{}};await K.waitForResponseKeys(U);const R=s.find(Y=>Y in U);let F=U[R];R==="json"&&typeof F=="object"&&(F=g(JSON.stringify.bind(JSON),F));const ee=new Response(F,{status:200,statusText:"OK"});x(ee,"type",()=>"basic"),x(ee,"url",()=>N.url),E(ee);}else P(new DOMException("aborted","AbortError"));return}_.method=N.method,_.headers=N.headers,_.body=N.data;for(const U of l)U in N&&(_[U]=N[U]);n.realFetch.call(t,N.url,_).then(U=>{if(typeof N.response=="function"){const R={finalUrl:U.url,status:U.status,responseHeaders:T(U.headers)};U.ok?s.forEach(F=>U[F]=function(){return F in R?Promise.resolve(R[F]):r[F].call(this).then(ee=>(R[F]=ee,K.waitForResponseKeys(R).then(()=>F in R?R[F]:ee)))}):g(N.response,R);}E(U);},P);}):n.realFetch.call(t,S,h)}function ne(){const S=Object.getOwnPropertyDescriptors(this),h=n.realFetchClone.call(this);return Object.defineProperties(h,S),h}n=t.__ajaxHooker=n||{version:a,fakeXHR:X,fakeFetch:Q,fakeFetchClone:ne,realXHR:t.XMLHttpRequest,realFetch:t.fetch,realFetchClone:r.clone,hookInsts:new Set},n.version!==a&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),t.XMLHttpRequest=n.fakeXHR,t.fetch=n.fakeFetch,r.clone=n.fakeFetchClone,n.hookInsts.add(e);class k extends Function{call(h,...E){return h&&h.__ajaxHooker&&h.__ajaxHooker.proxyXhr===h&&(h=h.__ajaxHooker.originalXhr),Reflect.apply(this,h,E)}apply(h,E){return h&&h.__ajaxHooker&&h.__ajaxHooker.proxyXhr===h&&(h=h.__ajaxHooker.originalXhr),Reflect.apply(this,h,E||[])}}function $(S){Object.setPrototypeOf(S.nativeXMLHttpRequestSetRequestHeader,k.prototype),Object.setPrototypeOf(S.nativeXMLHttpRequestOpen,k.prototype),Object.setPrototypeOf(S.nativeXMLHttpRequestSend,k.prototype);}return t.secsdk?t.secsdk.csrf&&t.secsdk.csrf.nativeXMLHttpRequestOpen&&$(t.secsdk.csrf):x(t,"secsdk",u,S=>{delete t.secsdk,t.secsdk=S,x(S,"csrf",u,h=>{delete S.csrf,S.csrf=h,h.nativeXMLHttpRequestOpen&&$(h);});}),{hook:S=>e.hookFns.push(S),filter:S=>{Array.isArray(S)&&(e.filters=S);},protect:()=>{w(t,"XMLHttpRequest",n.fakeXHR),w(t,"fetch",n.fakeFetch),w(r,"clone",n.fakeFetchClone);},unhook:()=>{n.hookInsts.delete(e),n.hookInsts.size||(A(t,"XMLHttpRequest",n.realXHR),A(t,"fetch",n.realFetch),A(r,"clone",n.realFetchClone),delete t.__ajaxHooker);}}},xo=function(){return (function(){const a=window.unsafeWindow||document.defaultView||window,e=[],t=a.XMLHttpRequest,n=a.Response.prototype,r=Object.prototype.toString,o=a.fetch,s=["response","responseText","responseXML"],i=["arrayBuffer","blob","formData","json","text"],l=["readystatechange","load","loadend"];let c;function f(){}function d(k){console.error(k);}function u(k,$,S,h){Object.defineProperty(k,$,{configurable:true,enumerable:true,get:S,set:h});}function m(k,$,S=k[$]){u(k,$,()=>S,f);}function y(k,$,S=k[$]){Object.defineProperty(k,$,{configurable:true,enumerable:true,writable:true,value:S});}function g(k){return {type:k.type,url:k.url,method:k.method&&k.method.toUpperCase()}}function x(k,$,S){return c&&!c.find(h=>(!h.type||h.type===k)&&(!h.url||(r.call(h.url)==="[object String]"?$.includes(h.url):h.url.test($)))&&(!h.method||h.method===S.toUpperCase()))}function w(k,$){let S,h=k;for(;h;){const E=Object.getOwnPropertyDescriptor(h,$);if(S=E&&E.get,S)break;h=Object.getPrototypeOf(h);}return S?S.bind(k):f}function A(k){return Promise.all(e.map($=>Promise.resolve($(k)).then(f,d)))}function T(k,$){return Promise.all(["url","method","abort","headers","data"].map(S=>Promise.resolve(k[S]).then(h=>k[S]=h,()=>k[S]=$[S])))}function v(){this.ajaxHooker_stopped=true;}function C(k){const $=k.target;k.stopImmediatePropagation=v,$.__ajaxHooker.hookedEvents[k.type].forEach(h=>!k.ajaxHooker_stopped&&h.call($,k));const S=$.__ajaxHooker.hookedEvents["on"+k.type];typeof S=="function"&&S.call($,k);}function L(k){k.target.readyState===4?k.target.dispatchEvent(new CustomEvent("ajaxHooker_responseReady",{detail:k})):k.target.__ajaxHooker.delegateEvent(k);}function D(k){k.target.__ajaxHooker.delegateEvent(k);}function z(k,$,...S){const h=this.__ajaxHooker;return h.url=$.toString(),h.method=k.toUpperCase(),h.openArgs=S,h.headers={},h.originalMethods.open(k,$,...S)}function X(){const k=new t;let $=k.__ajaxHooker;if(!$){$=k.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:C,originalGetters:{},originalMethods:{}},k.addEventListener("readystatechange",L),k.addEventListener("load",D),k.addEventListener("loadend",D);for(const h of s)$.originalGetters[h]=w(k,h);for(const h of ["open","setRequestHeader","addEventListener","removeEventListener"])$.originalMethods[h]=k[h].bind(k);k.open=z,k.setRequestHeader=(h,E)=>{$.originalMethods.setRequestHeader(h,E),k.readyState===1&&($.headers[h]?$.headers[h]+=", "+E:$.headers[h]=E);},k.addEventListener=function(...h){l.includes(h[0])?$.hookedEvents[h[0]].add(h[1]):$.originalMethods.addEventListener(...h);},k.removeEventListener=function(...h){l.includes(h[0])?$.hookedEvents[h[0]].delete(h[1]):$.originalMethods.removeEventListener(...h);},l.forEach(h=>{const E="on"+h;u(k,E,()=>$.hookedEvents[E]||null,P=>{$.hookedEvents[E]=typeof P=="function"?P:null;});});}const S=k.send.bind(k);return k.send=function(h){if(k.readyState!==1)return S(h);if($.delegateEvent=C,s.forEach(E=>{delete k[E];}),x("xhr",$.url,$.method))return k.addEventListener("ajaxHooker_responseReady",E=>{$.delegateEvent(E.detail);}),S(h);try{const E={type:"xhr",url:$.url,method:$.method,abort:!1,headers:$.headers,data:h,response:null},P={...E};A(E).then(()=>{T(E,P).then(()=>{if(!E.abort){$.originalMethods.open(E.method,E.url,...$.openArgs);for(const _ in E.headers)$.originalMethods.setRequestHeader(_,E.headers[_]);h=E.data,k.addEventListener("ajaxHooker_responseReady",_=>{try{if(typeof E.response=="function"){const N={finalUrl:k.responseURL,status:k.status,responseHeaders:{}};for(const R of k.getAllResponseHeaders().trim().split(/[\r\n]+/)){const F=R.split(/:\s*/);if(F.length===2){const ee=F[0].toLowerCase();N.responseHeaders[ee]?N.responseHeaders[ee]+=", "+F[1]:N.responseHeaders[ee]=F[1];}}s.forEach(R=>{u(N,R,()=>N[R]=$.originalGetters[R](),F=>{delete N[R],N[R]=F;}),u(k,R,()=>{const F=$.originalGetters[R]();return k.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:R,val:F}})),F});}),k.addEventListener("ajaxHooker_readResponse",R=>{N[R.detail.prop]=R.detail.val;});const K=Promise.resolve(E.response(N)).then(()=>{const R=[];return s.forEach(F=>{const ee=Object.getOwnPropertyDescriptor(N,F);ee&&"value"in ee&&R.push(Promise.resolve(ee.value).then(Y=>{N[F]=Y,u(k,F,()=>(k.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:F,val:Y}})),Y));},f));}),Promise.all(R)},d),U={};l.forEach(R=>{U[R]=new Set([...$.hookedEvents[R]]),U["on"+R]=$.hookedEvents["on"+R];}),$.delegateEvent=R=>K.then(()=>{R.stopImmediatePropagation=v,U[R.type].forEach(ee=>!R.ajaxHooker_stopped&&ee.call(k,R));const F=U["on"+R.type];typeof F=="function"&&F.call(k,R);});}}catch(N){console.error(N);}$.delegateEvent(_.detail);}),S(h);}});});}catch(E){console.error(E),S(h);}},k}function Q(k,$,S){i.forEach(h=>{k[h]=()=>new Promise((E,P)=>{n[h].call(k).then(_=>{if(h in $)E($[h]);else try{$[h]=_,Promise.resolve(S($)).then(()=>{h in $?Promise.resolve($[h]).then(N=>E($[h]=N),()=>E(_)):E(_);},d);}catch(N){console.error(N),E(_);}},P);});});}function ne(k,$){if(k&&typeof k.toString=="function"){if(k=k.toString(),$=$||{},$.method=$.method||"GET",$.headers=$.headers||{},x("fetch",k,$.method))return o.call(a,k,$);const S={type:"fetch",url:k,method:$.method.toUpperCase(),abort:false,headers:{},data:$.body,response:null};if(r.call($.headers)==="[object Headers]")for(const[E,P]of $.headers)S.headers[E]=P;else S.headers={...$.headers};const h={...S};return new Promise((E,P)=>{try{A(S).then(()=>{T(S,h).then(()=>{if(S.abort)return P("aborted");k=S.url,$.method=S.method,$.headers=S.headers,$.body=S.data,o.call(a,k,$).then(_=>{if(typeof S.response=="function"){const N={finalUrl:_.url,status:_.status,responseHeaders:{}};for(const[K,U]of _.headers)N.responseHeaders[K]=U;Q(_,N,S.response),_.clone=()=>{const K=n.clone.call(_);return Q(K,N,S.response),K};}E(_);},P);});});}catch(_){return console.error(_),o.call(a,k,$)}})}else return o.call(a,k,$)}return a.XMLHttpRequest=X,Object.keys(t).forEach(k=>X[k]=t[k]),X.prototype=t.prototype,a.fetch=ne,{hook:k=>e.push(k),filter:k=>{c=Array.isArray(k)&&k.map(g);},protect:()=>{m(a,"XMLHttpRequest",X),m(a,"fetch",ne);},unhook:()=>{y(a,"XMLHttpRequest",t),y(a,"fetch",o);}}})()};class wo{GM_Api={getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null};MenuHandle={context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:true,isStoreValue:true},$emoji:{success:"✅",error:"❌"},init(){for(let e=0;e<this.$data.data.length;e++){const t=this.$data.data[e].data;t.enable=!!this.getLocalMenuData(t.key,t.enable),typeof t.showText!="function"&&(t.showText=(n,r)=>r?`${this.$emoji.success} ${n}`:`${this.$emoji.error} ${n}`);}},register(e){const t=this;if(e==null)throw new TypeError("register菜单数据不能为空");Array.isArray(e)||(e=[e]);for(let n=0;n<e.length;n++){const r=re.deepClone(e[n].data),{showText:o,clickCallBack:s}=this.handleMenuData(r),i=t.context.GM_Api.registerMenuCommand(o,s);e[n].id=i,r.deleteMenu=function(){t.context.GM_Api.unregisterMenuCommand(i);},Reflect.deleteProperty(e[n],"handleData"),e[n].handleData=r;}},getLocalMenuData(e,t){const n=this.context.GM_Api.getValue(this.$data.key,{});return e in n?n[e]:t},setLocalMenuData(e,t){const n=this.context.GM_Api.getValue(this.$data.key,{});n[e]=t,this.context.GM_Api.setValue(this.$data.key,n);},handleInitDetail(e){return e.enable=!!this.getLocalMenuData(e.key,e.enable),typeof e.showText!="function"&&(e.showText=(t,n)=>n?`${this.$emoji.success} ${t}`:`${this.$emoji.error} ${t}`),e},handleMenuData(e){const t=this,n=e.key,r=!!this.getLocalMenuData(n,e.enable),o=e.showText(e.text,r);e.autoReload=typeof e.autoReload!="boolean"?this.$default.autoReload:e.autoReload,e.isStoreValue=typeof e.isStoreValue!="boolean"?this.$default.isStoreValue:e.isStoreValue;function s(i){const l=!!t.getLocalMenuData(n,r);e.isStoreValue&&t.setLocalMenuData(n,!l),typeof e.callback=="function"&&e.callback({key:n,enable:!l,oldEnable:l,event:i,storeValue(c){t.setLocalMenuData(n,c);}}),e.autoReload?window.location.reload():t.context.update();}return {showText:o,clickCallBack:s}},getMenuData(e){return this.$data.data.find(t=>t.data.key===e)},getMenuOption(e){return this.$data.data.find(t=>t.data.key===e)?.data},getMenuHandledOption(e){return this.$data.data.find(t=>t.handleData.key===e)?.handleData}};constructor(e){this.GM_Api.getValue=e.GM_getValue,this.GM_Api.setValue=e.GM_setValue,this.GM_Api.registerMenuCommand=e.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=e.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof e.autoReload=="boolean"?e.autoReload:true;for(const t of Object.keys(this.GM_Api))if(typeof this.GM_Api[t]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${t}，且传入该对象`);this.add(e?.data||[]);}__add(e){if(Array.isArray(e))for(let t=0;t<e.length;t++){const n=e[t];this.MenuHandle.$data.data.push({data:n,id:void 0});}else this.MenuHandle.$data.data.push({data:e,id:void 0});}add(e){this.__add(e),this.update();}update(e){let t=[];Array.isArray(e)?t=[...t,...e]:e!=null&&(t=[...t,e]),t.forEach(n=>{const r=this.MenuHandle.getMenuOption(n.key);r?Object.assign(r,n):this.__add(n);}),this.MenuHandle.$data.data.forEach(n=>{n.handleData&&n.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(e){this.GM_Api.unregisterMenuCommand(e);}getEnable(e){return this.MenuHandle.getMenuHandledOption(e).enable}getText(e){return this.MenuHandle.getMenuHandledOption(e).text}getShowTextValue(e){return this.MenuHandle.getMenuHandledOption(e).showText(this.getText(e),this.getEnable(e))}getMenuId(e){let t=null;for(let n=0;n<this.MenuHandle.$data.data.length;n++){const r=this.MenuHandle.$data.data[n];if(r.handleData.key===e){t=r.id;break}}return t}getAccessKey(e){return this.MenuHandle.getMenuHandledOption(e)?.accessKey}getAutoClose(e){return this.MenuHandle.getMenuHandledOption(e)?.autoClose}getAutoReload(e){return this.MenuHandle.getMenuHandledOption(e)?.autoReload}getCallBack(e){return this.MenuHandle.getMenuHandledOption(e)?.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(e,t){this.MenuHandle.setLocalMenuData(e,t);}setEnable(e,t){this.setValue(e,!!t);}setEnableTrueEmoji(e){if(typeof e!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=e;}setEnableFalseEmoji(e){if(typeof e!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=e;}setLocalStorageKeyName(e){if(typeof e!="string")throw new Error("参数keyName必须是string类型");this.MenuHandle.$data.key=e;}}class vo{initEnv(){Function.prototype.hook=function(e,t,n){let r=null,o=null;if(r=n||window,o=s(this),r[`realFunc_${o}`]=this,r[o].prototype&&r[o].prototype.isHooked)return console.log("Already has been hooked,unhook first"),false;function s(i){const l=i.toString(),c=/function\s+(\w+)\s*\(/,f=l.match(c);return f?f[1]:""}try{return new Function("_context","_funcName","hookFunc",`_context[_funcName] = function ${o}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${o}'].apply(obj, args);
    };`)(r,o,t),r[o].prototype.isHooked=!0,!0}catch(i){return console.log("Hook failed,check the params.",i),false}},Function.prototype.unhook=function(e,t,n){let r=null,o=null;return r=n||window,o=t,r[o].prototype.isHooked?(r[o]=r[`realFunc${o}`],Reflect.deleteProperty(r,`realFunc_${o}`),true):(console.log("No function is hooked on"),false)};}cleanEnv(){return Object.prototype.hasOwnProperty.call(Function.prototype,"hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Object.prototype.hasOwnProperty.call(Function.prototype,"unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),true}}const jt=function(){return typeof window?.crypto?.randomUUID=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){const e=Math.random()*16|0;return (a==="x"?e:e&3|8).toString(16)})};class Ao{GM_Api={xmlHttpRequest:null};HttpxRequestHook={$config:{configList:[]},async beforeRequestCallBack(e){if(typeof e.allowInterceptConfig=="boolean"){if(!e.allowInterceptConfig)return e}else if(e.allowInterceptConfig!=null&&typeof e.allowInterceptConfig.beforeRequest=="boolean"&&!e.allowInterceptConfig.beforeRequest)return e;for(let t=0;t<this.$config.configList.length;t++){const n=this.$config.configList[t];if(typeof n.fn=="function"&&await n.fn(e)==null)return}return e},add(e){if(typeof e=="function"){const t=jt();return this.$config.configList.push({id:t,fn:e}),t}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(e){if(typeof e=="string"){const t=this.$config.configList.findIndex(n=>n.id===e);if(t!==-1)return this.$config.configList.splice(t,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxResponseHook={$config:{configList:[]},async successResponseCallBack(e,t){if(typeof t.allowInterceptConfig=="boolean"){if(!t.allowInterceptConfig)return t}else if(t.allowInterceptConfig!=null&&typeof t.allowInterceptConfig.afterResponseSuccess=="boolean"&&!t.allowInterceptConfig.afterResponseSuccess)return t;for(let n=0;n<this.$config.configList.length;n++){const r=this.$config.configList[n];if(typeof r.successFn=="function"&&await r.successFn(e,t)==null)return}return e},async errorResponseCallBack(e){if(typeof e.details.allowInterceptConfig=="boolean"){if(!e.details.allowInterceptConfig)return e}else if(e.details.allowInterceptConfig!=null&&typeof e.details.allowInterceptConfig.afterResponseError=="boolean"&&!e.details.allowInterceptConfig.afterResponseError)return e;for(let t=0;t<this.$config.configList.length;t++){const n=this.$config.configList[t];if(typeof n.errorFn=="function"&&await n.errorFn(e)==null)return}return e},add(e,t){const n=jt();return this.$config.configList.push({id:n,successFn:e,errorFn:t}),n},delete(e){if(typeof e=="string"){const t=this.$config.configList.findIndex(n=>n.id===e);if(t!==-1)return this.$config.configList.splice(t,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxRequestOption={context:this,handleBeforeRequestOptionArgs(...e){const t={url:void 0};if(typeof e[0]=="string"){const n=e[0];if(t.url=n,typeof e[1]=="object"){const r=e[1];re.assign(t,r,true),t.url=n;}}else {const n=e[0];re.assign(t,n,true);}return t},getRequestOption(e,t,n,r){const o=this;let s=t.url||this.context.#e.url;typeof s=="string"&&(s=s.trim(),s.startsWith("http://")||s.startsWith("https://")||typeof this.context.#t.baseURL=="string"&&(s=this.context.#t.baseURL+s));const i={url:s,method:(e||"GET").toString().toUpperCase().trim(),timeout:t.timeout||this.context.#e.timeout,responseType:t.responseType||this.context.#e.responseType,headers:re.deepClone(this.context.#e.headers),data:t.data||this.context.#e.data,redirect:t.redirect||this.context.#e.redirect,cookie:t.cookie||this.context.#e.cookie,cookiePartition:t.cookiePartition||this.context.#e.cookiePartition,binary:t.binary||this.context.#e.binary,nocache:t.nocache||this.context.#e.nocache,revalidate:t.revalidate||this.context.#e.revalidate,context:re.deepClone(t.context||this.context.#e.context),overrideMimeType:t.overrideMimeType||this.context.#e.overrideMimeType,anonymous:t.anonymous||this.context.#e.anonymous,fetch:t.fetch||this.context.#e.fetch,fetchInit:re.deepClone(this.context.#e.fetchInit),allowInterceptConfig:{beforeRequest:this.context.#e.allowInterceptConfig.beforeRequest,afterResponseSuccess:this.context.#e.allowInterceptConfig.afterResponseSuccess,afterResponseError:this.context.#e.allowInterceptConfig.afterResponseError},user:t.user||this.context.#e.user,password:t.password||this.context.#e.password,onabort(...l){o.context.HttpxResponseCallBack.onAbort(t,n,r,l);},onerror(...l){o.context.HttpxResponseCallBack.onError(t,n,r,l);},onloadstart(...l){o.context.HttpxResponseCallBack.onLoadStart(t,l);},onprogress(...l){o.context.HttpxResponseCallBack.onProgress(t,l);},onreadystatechange(...l){o.context.HttpxResponseCallBack.onReadyStateChange(t,l);},ontimeout(...l){o.context.HttpxResponseCallBack.onTimeout(t,n,r,l);},onload(...l){o.context.HttpxResponseCallBack.onLoad(t,n,r,l);}};typeof t.allowInterceptConfig=="boolean"?Object.keys(i.allowInterceptConfig).forEach(c=>{Reflect.set(i.allowInterceptConfig,c,t.allowInterceptConfig);}):typeof t.allowInterceptConfig=="object"&&t.allowInterceptConfig!=null&&Object.keys(i.allowInterceptConfig).forEach(c=>{const f=Reflect.get(t.allowInterceptConfig,c);typeof f=="boolean"&&Reflect.has(i.allowInterceptConfig,c)&&Reflect.set(i.allowInterceptConfig,c,f);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(i.fetch=true),typeof i.headers=="object"?typeof t.headers=="object"&&Object.keys(i.headers).forEach(c=>{c in i.headers&&t.headers?.[c]==null?Reflect.deleteProperty(i.headers,c):i.headers[c]=t?.headers?.[c];}):Reflect.set(i,"headers",t.headers),typeof i.fetchInit=="object"?typeof t.fetchInit=="object"&&Object.keys(i.fetchInit).forEach(c=>{c in i.fetchInit&&Reflect.get(t.fetchInit??{},c)==null?Reflect.deleteProperty(i.fetchInit,c):Reflect.set(i.fetchInit,c,Reflect.get(t.fetchInit,c));}):Reflect.set(i,"fetchInit",t.fetchInit),typeof i.cookiePartition=="object"&&i.cookiePartition!=null&&Reflect.has(i.cookiePartition,"topLevelSite")&&typeof i.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(i.cookiePartition,"topLevelSite");try{new URL(i.url);}catch{i.url.startsWith("//")?i.url=globalThis.location.protocol+i.url:i.url.startsWith("/")?i.url=globalThis.location.origin+i.url:i.url=`${globalThis.location.origin}/${i.url}`;}i.fetchInit&&!i.fetch&&Reflect.deleteProperty(i,"fetchInit");try{const l=t.processData??!0;if(i.data!=null&&l){const c=i.method;if(c==="GET"||c==="HEAD"){const f=new URL(i.url);let d="",u=!1;typeof i.data=="string"?(u=!0,d=i.data):typeof i.data=="object"&&(u=!0,d=new URLSearchParams(i.data).toString()),u&&Reflect.deleteProperty(i,"data"),d!=""&&(f.search===""?f.search=d:f.search.endsWith("&")?f.search=f.search+d:f.search=`${f.search}&${d}`),i.url=f.toString();}else if(c==="POST"&&i.headers!=null){const f=Object.keys(i.headers),d=f.findIndex(u=>u.trim().toLowerCase()==="content-type"&&typeof i.headers[u]=="string");if(d!==-1){const u=f[d],m=i.headers[u];if(m.includes("application/json"))if(i.data instanceof FormData){const y={};i.data.forEach((g,x)=>{y[x]=g;}),i.data=JSON.stringify(y);}else typeof i.data=="object"&&(i.data=JSON.stringify(i.data));else m.includes("application/x-www-form-urlencoded")?typeof i.data=="object"&&(i.data=new URLSearchParams(i.data).toString()):m.includes("multipart/form-data")&&i.data instanceof FormData&&Reflect.deleteProperty(i.headers,u);}}}}catch(l){console.warn("Httpx ==> 转换data参数错误",l);}return i},removeRequestNullOption(e){if(Object.keys(e).forEach(n=>{const r=e[n];if(r==null||r instanceof Function&&re.isNull(r)){Reflect.deleteProperty(e,n);return}}),re.isNull(e.url))throw new TypeError(`Utils.Httpx 参数url不能为空：${e.url}`);return e},handleFetchOption(e){const t={};(e.method==="GET"||e.method==="HEAD")&&e.data!=null&&Reflect.deleteProperty(e,"data");const n=new AbortController,r=n.signal;return r.onabort=()=>{e.onabort({isFetch:true,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},t.method=e.method??"GET",t.headers=e.headers,t.body=e.data,t.mode="cors",t.credentials="include",t.cache="no-cache",t.redirect="follow",t.referrerPolicy="origin-when-cross-origin",t.signal=r,Object.assign(t,e.fetchInit||{}),{fetchOption:e,fetchRequestOption:t,abortController:n}}};HttpxResponseCallBack={context:this,async onAbort(e,t,n,r){typeof e?.onabort=="function"?e.onabort.apply(this,r):typeof this.context.#e?.onabort=="function"&&this.context.#e.onabort.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new Error("request canceled"),response:null,details:e})!=null&&t({data:o,details:e,msg:"请求被取消",status:false,statusCode:-1,type:"onabort"});},async onTimeout(e,t,n,r){typeof e?.ontimeout=="function"?e.ontimeout.apply(this,r):typeof this.context.#e?.ontimeout=="function"&&this.context.#e.ontimeout.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new Error("request timeout"),response:o,details:e})!=null&&t({data:o,details:e,msg:"请求超时",status:false,statusCode:0,type:"ontimeout"});},async onError(e,t,n,r){typeof e?.onerror=="function"?e.onerror.apply(this,r):typeof this.context.#e?.onerror=="function"&&this.context.#e.onerror.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new Error("request error"),response:o,details:e})!=null&&t({data:o,details:e,msg:"请求异常",status:false,statusCode:o.status,type:"onerror"});},async onLoad(e,t,n,r){const o=r[0];if(re.isNull(o.responseText)&&re.isNotNull(o.response)&&(typeof o.response=="object"?Tt().run(()=>{o.responseText=JSON.stringify(o.response);}):o.responseText=o.response),o.response==null&&typeof o.responseText=="string"&&o.responseText.trim()!==""){const i=o.responseText;let l=i;if(e.responseType==="json")l=re.toJSON(i);else if(e.responseType==="document")l=new DOMParser().parseFromString(i,"text/html");else if(e.responseType==="arraybuffer")l=new TextEncoder().encode(i);else if(e.responseType==="blob"){const f=new TextEncoder().encode(i);l=new Blob([f]);}try{if(!Reflect.set(o,"response",l)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(o,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(o,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}const s=Reflect.get(o,"responseURL");if(o.finalUrl==null&&s!=null&&Reflect.set(o,"finalUrl",s),Math.floor(o.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(o,e)==null)return;t({data:o,details:e,msg:"请求成功",status:true,statusCode:o.status,type:"onload"});}else this.context.HttpxResponseCallBack.onError(e,t,n,r);},onLoadStart(e,t){typeof e?.onloadstart=="function"?e.onloadstart.apply(this,t):typeof this.context.#e?.onloadstart=="function"&&this.context.#e.onloadstart.apply(this,t);},onReadyStateChange(e,t){typeof e?.onreadystatechange=="function"?e.onreadystatechange.apply(this,t):typeof this.context.#e?.onreadystatechange=="function"&&this.context.#e.onreadystatechange.apply(this,t);},onProgress(e,t){typeof e?.onprogress=="function"?e.onprogress.apply(this,t):typeof this.context.#e?.onprogress=="function"&&this.context.#e.onprogress.apply(this,t);}};HttpxRequest={context:this,async request(e){if(this.context.#t.logDetails&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",e),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(e)==null))if(e.fetch){const{fetchOption:t,fetchRequestOption:n,abortController:r}=this.context.HttpxRequestOption.handleFetchOption(e);return this.fetch(t,n,r)}else return this.xmlHttpRequest(e)},xmlHttpRequest(e){return this.context.GM_Api.xmlHttpRequest(e)},fetch(e,t,n){return fetch(e.url,t).then(async r=>{const o={isFetch:true,finalUrl:r.url,readyState:4,status:r.status,statusText:r.statusText,response:"",responseFetchHeaders:r.headers,responseHeaders:"",responseText:"",responseType:e.responseType,responseXML:void 0};Object.assign(o,e.context||{}),r.headers.forEach((y,g)=>{o.responseHeaders+=`${g}: ${y}
`;});const s=r.headers.get("Content-Type");if(e.responseType==="stream"||r.headers.has("Content-Type")&&r.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(o,"isStream",true),Reflect.set(o,"response",r.body),Reflect.deleteProperty(o,"responseText"),Reflect.deleteProperty(o,"responseXML"),e.onload(o);return}let i="",l="",c="";const f=await r.arrayBuffer();let d="utf-8";if(r.headers.has("Content-Type")){const y=r.headers.get("Content-Type")?.match(/charset=(.+)/);y&&(d=y[1],d=d.toLowerCase());}d=d.replace(/('|")/gi,""),l=new TextDecoder(d).decode(f),i=l,e.responseType==="arraybuffer"?i=f:e.responseType==="blob"?i=new Blob([f]):e.responseType==="json"||typeof s=="string"&&s.includes("application/json")?i=re.toJSON(l):(e.responseType==="document"||e.responseType==null)&&(i=new DOMParser().parseFromString(l,"text/html")),c=new DOMParser().parseFromString(l,"text/xml"),o.response=i,o.responseText=l,o.responseXML=c,e.onload(o);}).catch(r=>{r.name!=="AbortError"&&e.onerror({isFetch:true,finalUrl:e.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:r});}),e.onloadstart({isFetch:true,finalUrl:e.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){n.abort();}}}};#e={url:void 0,timeout:5e3,async:false,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:true,afterResponseSuccess:true,afterResponseError:true},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}};#t={baseURL:void 0,logDetails:false};constructor(e={}){typeof e.xmlHttpRequest!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),re.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(e);}config(e={}){typeof e.xmlHttpRequest=="function"&&(this.GM_Api.xmlHttpRequest=e.xmlHttpRequest),this.#e=re.assign(this.#e,e),this.#t=re.assign(this.#t,e);}interceptors={request:{context:null,use(e){if(typeof e!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(e)},eject(e){return this.context.HttpxRequestHook.delete(e)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(e,t){if(typeof e!="function"&&typeof t!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(e,t)},eject(e){return this.context.HttpxResponseHook.delete(e)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}};setXMLHttpRequest(e){this.GM_Api.xmlHttpRequest=e;}get(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="GET",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}post(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="POST",this.request(t)}head(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="HEAD",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}options(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="OPTIONS",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}delete(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="DELETE",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}put(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="PUT",this.request(t)}request(e,t){const n=this.HttpxRequestOption.handleBeforeRequestOptionArgs(e);let r=null;const o=new globalThis.Promise(async(s,i)=>{let l=this.HttpxRequestOption.getRequestOption(n.method,n,f=>{s(f);},(...f)=>{i(...f);});l=this.HttpxRequestOption.removeRequestNullOption(l),typeof t=="function"&&t(l);const c=await this.HttpxRequest.request(l);c!=null&&typeof c.abort=="function"&&(r=()=>{c.abort();});});return o.abort=()=>{typeof r=="function"&&r();},o}}class Eo{#e;#t;#r;#o=globalThis.indexedDB||globalThis.mozIndexedDB||globalThis.webkitIndexedDB||globalThis.msIndexedDB;#a={};#n={operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}};constructor(e="default_db",t="default_form",n=1){if(this.#e=e,this.#t=t,this.#r=n,!this.#o)throw window.alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(e){return this.#a[e].transaction(this.#t,"readwrite").objectStore(this.#t)}open(e,t){const n=this;if(n.#a[t]){const r=this.createStore(t);e(r);}else {const r=n.#o.open(t,n.#r);r.onerror=function(o){e(null,{code:n.#n.openFailed.code,msg:n.#n.openFailed.msg,event:o});},r.onsuccess=function(o){if(!n.#a[t]){const i=o.target;n.#a[t]=i.result;}const s=n.createStore(t);e(s);},r.onupgradeneeded=function(o){const s=o.target;n.#a[t]=s.result;const i=n.#a[t].createObjectStore(n.#t,{keyPath:"key"});i.transaction.oncomplete=function(){e(i);};};}}async save(e,t){const n=this;return new Promise(r=>{const o=this.#e,s={key:e,value:t};this.open(function(i){if(i==null)r({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg});else {const l=i.put(s);l.onsuccess=function(c){r({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,event:c});},l.onerror=function(c){r({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg,event:c});};}},o);})}async has(e){const t=this;return new Promise(n=>{const r=this.#e;this.open(function(o){if(o==null)n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg});else {const s=o.get(e);s.onsuccess=function(i){n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:i});},s.onerror=function(i){n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,event:i});};}},r);})}async get(e){const t=this;return new Promise(n=>{const r=this.#e;this.open(function(o){if(o==null)n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,data:void 0});else {const s=o.get(e);s.onsuccess=function(i){const c=i.target.result,f=c?c.value:void 0;f==null?n({success:true,code:t.#n.empty.code,msg:t.#n.empty.msg,data:f,event:i,result:c}):n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,data:f,event:i,result:c});},s.onerror=function(i){n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,data:void 0,event:i});};}},r);})}async regexpGet(e){let t=[];const n=this;return new Promise(r=>{const o=n.#e;this.open(function(s){if(s==null)r({success:false,code:n.#n.regexpGetFailed.code,msg:n.#n.regexpGetFailed.msg,data:[]});else {const i=s.getAll();i.onsuccess=function(l){const f=l.target.result;f.length!==0&&f.forEach(d=>{const u=d.key,m=d.value;u.match(e)&&(t=t.concat(m));}),r({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,data:t,event:l});},i.onerror=function(l){r({success:false,code:n.#n.getFailed.code,msg:n.#n.getFailed.msg,data:[],event:l});};}},o);})}async delete(e){const t=this;return new Promise(n=>{const r=t.#e;this.open(function(o){if(o==null)n({success:false,code:t.#n.deleteFailed.code,msg:t.#n.deleteFailed.msg});else {const s=o.delete(e);s.onsuccess=function(i){n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:i});},s.onerror=function(i){n({success:false,code:t.#n.deleteFailed.code,msg:t.#n.deleteFailed.msg,event:i});};}},r);})}async deleteAll(){const e=this;return new Promise(t=>{const n=e.#e;this.open(function(r){if(r==null)t({success:false,code:e.#n.deleteAllFailed.code,msg:e.#n.deleteAllFailed.msg});else {const o=r.clear();o.onsuccess=function(s){t({success:true,code:e.#n.operationSuccess.code,msg:e.#n.operationSuccess.msg,event:s});},o.onerror=function(s){t({success:false,code:e.#n.deleteAllFailed.code,msg:e.#n.deleteAllFailed.msg,event:s});};}},n);})}}class To{#e=false;#t=0;#r;#o=void 0;lock;unlock;run;isLock;constructor(e,t,n){const r=this;this.#r=e,typeof t=="number"?this.#t=t:this.#t=n,this.lock=function(){r.#e=true,clearTimeout(r.#o);},this.unlock=function(){r.#o=setTimeout(()=>{r.#e=false;},r.#t);},this.isLock=function(){return r.#e},this.run=async function(...o){r.isLock()||(r.lock(),await r.#r.apply(this,o),r.unlock());};}}class So{#e=false;tag="Utils.Log";#t=null;#r=0;#o={tag:true,successColor:"#0000FF",errorColor:"#FF0000",infoColor:"0",warnColor:"0",debug:false,autoClearConsole:false,logMaxCount:999};#a=["font-weight: bold; color: cornflowerblue","font-weight: bold; color: cornflowerblue","font-weight: bold; color: darkorange","font-weight: bold; color: cornflowerblue"];constructor(e,t=window.console){typeof e=="string"?this.tag=e:typeof e=="object"&&typeof e?.script?.name=="string"&&(this.tag=e.script.name),this.#t=t;}parseErrorStack(e){const t={name:"",position:""};for(let n of e){n=n.trim();const r=n.match(/^at[\s]+(.+?)[\s]+/i),o=n.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(r==null||o==null)continue;const s=r[r.length-1],i=o[o.length-1];if(!(s===""||s.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){t.name=s,t.position=i;break}}if(t.position===""){const n=e[e.length-1].trim();if(n.startsWith("at chrome-extension://")){const r=n.match(/^at[\s]+(.+)/);r&&(t.position=r[r.length-1]);}}return t.position===""&&(t.position=e[e.length-1].trim().replace(/^at[\s]*/g,"")),t}checkClearConsole(){this.#r++,this.#o.autoClearConsole&&this.#r>this.#o.logMaxCount&&(this.#t.clear(),this.#r=0);}printContent(e,t,n){this.checkClearConsole(),n=n||"";const r=new Error().stack.split(`
`);r.splice(0,2);const{name:o,position:s}=this.parseErrorStack(r),i=this.tag,l=this,c=`%c[${i}%c`;let f=`%c${o}%c]%c`;o.trim()===""&&(f=`-${f}`);function d(u){typeof u=="string"?l.#t.log(`${c}${f} %s`,...l.#a,`color: ${t};${n}`,u):typeof u=="number"?l.#t.log(`${c}${f} %d`,...l.#a,`color: ${t};${n}`,u):typeof u=="object"?l.#t.log(`${c}${f} %o`,...l.#a,`color: ${t};${n}`,u):l.#t.log(u);}if(Array.isArray(e))for(let u=0;u<e.length;u++)d(e[u]);else d(e);this.#o.debug&&this.#t.log(s);}info(...e){this.#e||this.printContent(e,this.#o.infoColor);}warn(...e){this.#e||this.printContent(e,this.#o.warnColor,"background: #FEF6D5;padding: 4px 6px 4px 0px;");}error(...e){this.#e||this.printContent(e,this.#o.errorColor);}success(...e){this.#e||this.printContent(e,this.#o.successColor);}table(e){if(this.#e)return;this.checkClearConsole();const t=new Error().stack.split(`
`);t.splice(0,1);const n=this.parseErrorStack(t),r=n.name,o=n.position,s=r;this.#t.log(`%c[${this.tag}%c-%c${s}%c]%c`,...this.#a,`color: ${this.#o.infoColor};`),this.#t.table(e),this.#o.debug&&this.#t.log(o);}config(e){this.#o=Object.assign(this.#o,e);}disable(){this.#e=true;}recovery(){this.#e=false;}}class Co{#e={canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50};#t;#r;#o;constructor(e){if(this.#e=re.assign(this.#e,e),!(this.#e.canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");const t=this.#e.canvasNode.getContext("2d");if(t==null)throw new Error("Utils.Progress 获取画笔失败");this.#t=t,this.#r=this.#e.canvasNode.width,this.#o=this.#e.canvasNode.height,window.devicePixelRatio&&(this.#e.canvasNode.style.width=`${this.#r}px`,this.#e.canvasNode.style.height=`${this.#o}px`,this.#e.canvasNode.height=this.#o*window.devicePixelRatio,this.#e.canvasNode.width=this.#r*window.devicePixelRatio,this.#t.scale(window.devicePixelRatio,window.devicePixelRatio)),this.#t.lineWidth=this.#e.lineWidth;}draw(){const e=this.#e.progress*360/100;this.#t.clearRect(0,0,this.#r,this.#o),this.#t.beginPath(),this.#t.arc(this.#r/2,this.#o/2,this.#e.circleRadius,1,8),this.#t.strokeStyle=this.#e.lineBgColor,this.#t.stroke(),this.#t.beginPath(),this.#t.arc(this.#r/2,this.#o/2,this.#e.circleRadius,-Math.PI/2,e*Math.PI/180-Math.PI/2),this.#t.strokeStyle=this.#e.lineColor,this.#t.stroke();const t=`${parseInt(this.#e.progress.toString())}%`;this.#t.font=`${this.#e.fontSize}px SimHei`;const n=this.#t.measureText(t).width,r=this.#e.fontSize/2;this.#t.fillStyle=this.#e.textColor,this.#t.fillText(t,this.#r/2-n/2,this.#o/2+r/2);}}class ko{items;constructor(e,t){this.items=new Map,e!=null&&this.set(e,t);}get length(){return this.size()}get entries(){const e=this;return function*(){const t=Object.keys(e.getItems());for(const n of t)yield [n,e.get(n)];}}get[Symbol.iterator](){return ()=>this.entries()}has(e){return this.items.has(e)}get(e){return this.items.get(e)}set(e,t){if(e===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为空");this.items.set(e,t);}delete(e){return this.has(e)?this.items.delete(e):false}keys(){return Array.from(this.items.keys())}values(){return Array.from(this.items.values())}clear(){this.items.clear();}size(){return this.items.size}getItems(){return this.items}concat(e){e.forEach((t,n)=>{this.items.set(n,t);});}forEach(e){this.items.forEach((t,n)=>{e(t,n,this);});}startsWith(e){const t=this.keys();for(const n of t)if(String(n).startsWith(e))return  true;return  false}getStartsWith(e){let t;const n=this.keys();for(const r of n)if(String(r).startsWith(String(e))){t=this.get(r);break}return t}}class Zn{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis==null&&(e.globalThis=e.window),e.self==null&&(e.self=e.window)),e||(e=Object.assign({},this.defaultApi)),this.api=Object.assign({},e);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get setInterval(){return this.api.setInterval}get clearTimeout(){return this.api.clearTimeout}get clearInterval(){return this.api.clearInterval}}const Ue={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(a){return typeof a=="object"&&a!==null},isFunction(a){return typeof a=="function"},isReactive(a){return !!(a&&a[Ue.ReactiveFlags.IS_REACTIVE])},isArray(a){return Array.isArray(a)}};class Mo{deps=[];active=true;fn;scheduler;constructor(e,t){this.fn=e,this.scheduler=t;}run(e){this.active||this.fn();try{return typeof e=="function"&&e(this),this.fn()}finally{typeof e=="function"&&e(void 0);}}}class Lo{_value;_isRef=true;_rawValue;_vue;constructor(e,t){this._vue=e,this._rawValue=t,this._value=this._vue.toReactive(t);}get value(){return this._value}set value(e){e!==this._rawValue&&(this._value=this._vue.toReactive(e),this._rawValue=e);}}class $o{object;key;constructor(e,t){this.object=e,this.key=t;}get value(){return this.object[this.key]}set value(e){this.object[this.key]=e;}}class Io{reactMap=new WeakMap;targetMap=new WeakMap;activeEffect=void 0;constructor(){}reactive(e){const t=this;if(!(typeof e=="object"&&e!==null))return;if(Ue.isReactive(e))return e;const n=this.reactMap.get(e);if(n)return n;const r=new Proxy(e,{get(o,s,i){return s===Ue.ReactiveFlags.IS_REACTIVE?true:(t.track(o,"get",s),Reflect.get(o,s,i))},set(o,s,i,l){const c=o[s],f=Reflect.set(o,s,i,l);return c!==i&&t.trigger(o,"set",s,c,i),f}});return t.reactMap.set(e,r),r}watch(e,t){let n;if(Ue.isReactive(e))n=()=>this.traversal(e);else if(Ue.isFunction(e))n=e;else return;let r;const o=()=>{const i=s.run(l=>{this.activeEffect=l;});t(i,r),r=i;},s=new Mo(n,o);r=s.run(i=>{this.activeEffect=i;});}toReactive(e){return Ue.isObject(e)?this.reactive(e):e}ref(e){return new Lo(this,e)}toRef(e,t){return new $o(e,t)}toRefs(e){const t=Ue.isArray(e)?new Array(e.length):{};for(const n in e)t[n]=this.toRef(e,n);return t}trigger(e,t,n,r,o){const s=this.targetMap.get(e);if(!s)return;const i=s.get(n);this.triggerEffect(i,"effects");}triggerEffect(e,t){e&&e.forEach(n=>{n.scheduler?n.scheduler():n.run();});}track(e,t,n){if(!this.activeEffect)return;let r=this.targetMap.get(e);r||this.targetMap.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),this.trackEffect(o);}trackEffect(e){this.activeEffect&&!e.has(this.activeEffect)&&(e.add(this.activeEffect),this.activeEffect.deps.push(e));}traversal(e,t=new Set){if(!Ue.isObject(e)||t.has(e))return e;t.add(e);for(const n in e)this.traversal(e[n],t);return e}}const _o=a=>(e,t)=>(a.set(e,t),t),En=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,er=536870912,Tn=er*2,Ro=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<Tn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<er){for(;t.has(r);)r=Math.floor(Math.random()*Tn);return a(t,r)}if(t.size>En)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*En);return a(t,r)},tr=new WeakMap,No=_o(tr),Gt=Ro(No,tr),Oo=a=>typeof a.start=="function",Sn=new WeakMap,Po=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return Sn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=Sn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Bt=new WeakMap,Bo=a=>{if(Bt.has(a))return Bt.get(a);const e=new Map;return Bt.set(a,e),e},Do=a=>{const e=Po(a);return t=>{const n=Bo(t);t.addEventListener("message",(({data:i})=>{const{id:l}=i;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),i.error===void 0?f(i.result):c(new Error(i.error.message));}})),Oo(t)&&t.start();const r=(i,l=null,c=[])=>new Promise((f,d)=>{const u=Gt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:i},c):t.postMessage({id:u,method:i,params:l},c);}),o=(i,l,c=[])=>{t.postMessage({id:null,method:i,params:l},c);};let s={};for(const[i,l]of Object.entries(e))s={...s,[i]:l({call:r,notify:o})};return {...s}}},Xe=new Map([[0,null]]),Qe=new Map([[0,null]]),Ho=Do({clearInterval:({call:a})=>e=>{typeof Xe.get(e)=="symbol"&&(Xe.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{Xe.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof Qe.get(e)=="symbol"&&(Qe.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{Qe.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Gt(Xe);Xe.set(o,r);const s=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const i=Xe.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(e(...n),Xe.get(o)===r&&s());});return s(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Gt(Qe);return Qe.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const s=Qe.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(Qe.delete(o),e(...n));}),o}}),Uo=a=>{const e=new Worker(a);return Ho(e)},Vo=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},zo=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,kt=Vo(Uo,zo),Fo=a=>kt().clearInterval(a),jo=a=>kt().clearTimeout(a),Go=(...a)=>kt().setInterval(...a),qo=(...a)=>kt().setTimeout(...a);// @license      MIT
  class Wo{constructor(e){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(n,r,o)=>{this.modules=o.c,this.constructors=o.m,this.get=o;}]],[[1e3],{[this.moduleID]:(n,r,o)=>{this.modules=o.c,this.constructors=o.m,this.get=o;}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},n=>{const r=n.m;Object.keys(r).forEach(o=>{try{this.modules[o]=n(o);}catch(s){this.log(`[arrayArguments/1] Failed to require(${o}) with error:
${s}
${s.stack}`);}}),this.get=n;}],this.functionArguments[1]],this.modules={},this.constructors=[];let t={target:window,entrypoint:"webpackJsonp",debug:false,strict:false};typeof e=="object"&&(t=Object.assign(Object.assign({},t),e)),this.target=t.target,this.entrypoint=t.entrypoint,this.debug=t.debug,this.strict=t.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent();}log(e){this.debug&&console.warn(`[moduleRaid] ${e}`);}replaceGet(){this.get===null&&(this.get=e=>this.modules[e]);}fillModules(){if(typeof this.target[this.entrypoint]=="function"?this.functionArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...e);}catch(n){this.log(`moduleRaid.functionArguments[${t}] failed:
${n}
${n.stack}`);}}):this.arrayArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(e);}catch(n){this.log(`Pushing moduleRaid.arrayArguments[${t}] into ${this.entrypoint} failed:
${n}
${n.stack}`);}}),this.modules&&Object.keys(this.modules).length==0){let e=false,t=0;if(typeof this.target[this.entrypoint]!="function"||!this.target[this.entrypoint]([],[],[t]))throw Error("Unknown Webpack structure");for(;!e;)try{this.modules[t]=this.target[this.entrypoint]([],[],[t]),t++;}catch{e=true;}}}setupPushEvent(){const e=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...t)=>{const n=Reflect.apply(e,this.target[this.entrypoint],t);return document.dispatchEvent(new CustomEvent("moduleraid:webpack-push",{detail:t})),n};}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let e=Object.keys(this.target);if(e=e.filter(t=>t.toLowerCase().includes("chunk")||t.toLowerCase().includes("webpack")).filter(t=>typeof this.target[t]=="function"||Array.isArray(this.target[t])),e.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:
${e.join(", ")}`);if(e.length===0)throw Error("No Webpack JSONP entrypoints could be detected");this.log(`Entrypoint has been detected at window.${e[0]} and set for injection`),this.entrypoint=e[0];}searchObject(e,t){for(const n in e){const r=e[n],o=t.toLowerCase();if(typeof r!="object"){if(n.toString().toLowerCase().includes(o))return  true;if(typeof r!="object"){if(r.toString().toLowerCase().includes(o))return  true}else if(this.searchObject(r,t))return  true}}return  false}findModule(e){const t=[],n=Object.keys(this.modules);if(n.length===0)throw new Error("There are no modules to search through!");return n.forEach(r=>{const o=this.modules[r.toString()];if(o!==void 0)try{if(typeof e=="string")switch(e=e.toLowerCase(),typeof o){case "string":o.toLowerCase().includes(e)&&t.push(o);break;case "function":o.toString().toLowerCase().includes(e)&&t.push(o);break;case "object":this.searchObject(o,e)&&t.push(o);break}else if(typeof e=="function")e(o)&&t.push(o);else throw new TypeError(`findModule can only find via string and function, ${typeof e} was passed`)}catch(s){this.log(`There was an error while searching through module '${r}':
${s}
${s.stack}`);}}),t}findConstructor(e){const t=[],n=Object.keys(this.constructors);if(n.length===0)throw new Error("There are no constructors to search through!");return n.forEach(r=>{const o=this.constructors[r];try{typeof e=="string"?(e=e.toLowerCase(),o.toString().toLowerCase().includes(e)&&t.push([this.constructors[r],this.modules[r]])):typeof e=="function"&&e(o)&&t.push([this.constructors[r],this.modules[r]]);}catch(s){this.log(`There was an error while searching through constructor '${r}':
${s}
${s.stack}`);}}),t}}class Ko{windowApi;constructor(e){this.windowApi=new Zn(e);}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){if(t=t||this.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(t.querySelectorAll(e)).filter(r=>r?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const o=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(s=>(s?.textContent||s?.innerText)?.includes(o))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const s=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";s&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=s[3]);const l=new RegExp(o,i);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=e?.textContent||e?.innerText;return typeof o!="string"&&(o=""),e.matches(t)&&o?.includes(r)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=o[3]);const i=new RegExp(r,s);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(i)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");const n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");const o=e?.closest(t);if(o){const s=e?.textContent||e?.innerText;if(typeof s=="string"&&s.includes(r))return o}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=o[3]);const i=new RegExp(r,s);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");const l=e?.closest(t);if(l){const c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(i))return l}return null}else return e?.closest(t)}}const Xo=new Ko,Qo="2.9.0";class Qt{windowApi;constructor(e){this.windowApi=new Zn(e);}version=Qo;assign=re.assign.bind(re);async asyncReplaceAll(e,t,n){const r=this;if(typeof e!="string")throw new TypeError("string必须是字符串");if(typeof n!="function")throw new TypeError("asyncFn必须是函数");let o;if(typeof t=="string")o=new RegExp(r.toRegExpStr(t),"g");else if(t instanceof RegExp){if(!t.global)throw new TypeError("pattern必须是全局匹配");o=new RegExp(t);}else throw new TypeError("pattern必须是正则对象");let s=[],i,l=0;for(;(i=o.exec(e))!==null;){const c=n(i[0]),f=e.slice(l,i.index);l=i.index+i[0].length,s.push(c),s.push(f);}return s.push(e.slice(l)),s=await Promise.all(s),s.join("")}ajaxHooker=(e=false)=>e?xo():yo();canvasClickByPosition(e,t=0,n=0,r=this.windowApi.window){if(!(e instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");t=parseInt(t.toString()),n=parseInt(n.toString());const o={cancelBubble:true,cancelable:true,clientX:t,clientY:n,view:r,detail:1};e.dispatchEvent(new MouseEvent("mousedown",o)),e.dispatchEvent(new MouseEvent("mouseup",o));}cloneFormData(e,t){const n=new FormData;return e.forEach((r,o)=>{const s=typeof t=="function"?t(o,r):false;typeof s=="boolean"&&s||n.append(o,r);}),n}createOverload(){const e=new Map;function t(...n){const r=n.map(s=>typeof s).join(","),o=e.get(r);if(!o)throw new TypeError("没有找到对应的实现");return o.apply(this,n)}return t.addImpl=function(...n){const r=n.pop();if(typeof r!="function")throw new TypeError("最后一个参数必须是函数");const o=n.join(",");e.set(o,r);},t}ColorConversion=bo;deepClone=re.deepClone.bind(re);debounce(e,t=0){let n=null;const r=this;return function(...o){r.workerClearTimeout(n),n=r.workerSetTimeout(function(){e.apply(r,o);},t);}}Dictionary=ko;downloadBase64(e,t,n=false){const r=this;if(typeof e!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof t!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(n){const o=this.windowApi.document.createElement("iframe");o.style.display="none",o.src=e,(this.windowApi.document.body||this.windowApi.document.documentElement).appendChild(o),r.workerSetTimeout(()=>{o.contentWindow.document.execCommand("SaveAs",true,t),(this.windowApi.document.body||this.windowApi.document.documentElement).removeChild(o);},100);}else {const o=this.windowApi.document.createElement("a");o.setAttribute("target","_blank"),o.download=t,o.href=e,o.click();}}findWebPageVisibleText(e="",t=false){let n=null,r;if(this.windowApi.globalThis.find){const o=this.windowApi.self.find;if(r=o(e,t,true,true,false),r&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(r=o(e,t,true,true,false)),!r)for(r=o(e,0,1);o(e,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)n!=null&&(n=n,n.collapse(false),r=n.findText(e),r&&n.select()),(n==null||r==0)&&(n=this.windowApi.self.document.body.createTextRange(),r=n.findText(e),r&&n.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!r}formatByteToSize(e,t=true){if(e=parseInt(e.toString()),isNaN(e))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB";const o={};o.B=1,o.KB=1024,o.MB=o.KB*o.KB,o.GB=o.MB*o.KB,o.TB=o.GB*o.KB,o.PB=o.TB*o.KB,o.EB=o.PB*o.KB,o.ZB=o.EB*o.KB,o.YB=o.ZB*o.KB,o.BB=o.YB*o.KB,o.NB=o.BB*o.KB,o.DB=o.NB*o.KB;for(const s in o)if(n=e/o[s],r=s,o.KB>=n)break;return n=n.toFixed(2),n=t?n+r.toString():parseFloat(n.toString()),n}getNodeListValue(...e){let t=[];for(const n of e){let r=n;if(typeof n=="function"&&(r=n()),r.length!==0){t=[...r];break}}return t}getNonNullValue(...e){let t=e[e.length-1];const n=this;for(const r of e)if(n.isNotNull(r)){t=r;break}return t}formatTime(e=new Date,t="yyyy-MM-dd HH:mm:ss"){const n=e==null?new Date:new Date(e);function r(i){return i<10?`0${i}`:i}function o(i){return i>12?i-12:i}const s={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(o(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(s).forEach(function(i){const l=new RegExp(i,"g");t=t.replace(l,s[i]);}),t}formatToTimeStamp(e){if(typeof e!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(e.length===8){const n=new Date;e=`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()} ${e}`;}return e=e.substring(0,19),e=e.replace(/-/g,"/"),new Date(e).getTime()}GBKEncoder=ho;getArrayLastValue(e){return e[e.length-1]}getArrayRealValue(...e){let t=null;for(let n of e)if(typeof n=="function"&&(n=n()),n!=null){t=n;break}return t}getDaysDifference(e=Date.now(),t=Date.now(),n="天"){n=n.trim(),e.toString().length===10&&(e=e*1e3),t.toString().length===10&&(t=t*1e3);const r=e>t?t:e,o=e>t?e:t,s=1e3,i=60*s,l=60*i,c=24*l,f=30*c,d=12*f,u=new Date(o),m=new Date(r);let y=1;n==="年"?y=d:n==="月"?y=f:n==="天"?y=c:n==="时"?y=l:n==="分"?y=i:n==="秒"&&(y=s);let g=Math.round(Math.abs((u-m)/y));if(n==="auto"){const x=o-r;if(g=Math.floor(x/(24*3600*1e3)),g>0)g=`${g}天`;else {const w=x%864e5,A=Math.floor(w/(3600*1e3));if(A>0)g=`${A}小时`;else {const T=w%36e5,v=Math.floor(T/(60*1e3));if(v>0)g=`${v}分钟`;else {const C=T%6e4;g=`${Math.round(C/1e3)}秒`;}}}}return g}getMaxValue(...e){const t=[...e];let n=[];if(t.length!==0)if(t.length>1){if(t.length===2&&typeof t[0]=="object"&&typeof t[1]=="function"){const r=t[0],o=t[1];Object.keys(r).forEach(s=>{n=[...n,o(s,r[s])];});}else t.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.max(...n)}else return t[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.max(...n)}getMaxZIndexNodeInfo(e=1,t=this.windowApi.document,n){e=Number.isNaN(e)?1:e;const r=this,o=2*Math.pow(10,9);let s=0,i=null;function l(f){return f.position!=="static"&&f.display!=="none"}function c(f){if(typeof n=="function"){const u=n(f);if(typeof u=="boolean"&&!u)return}const d=r.windowApi.window.getComputedStyle(f);if(l(d)){const u=parseInt(d.zIndex);isNaN(u)||u>s&&(s=u,i=f),f.shadowRoot!=null&&f instanceof ShadowRoot&&f.shadowRoot.querySelectorAll("*").forEach(m=>{c(m);});}}return t.querySelectorAll("*").forEach(f=>{c(f);}),s+=e,s>=o&&(s=o),{node:i,zIndex:s}}getMaxZIndex(e=1,t=this.windowApi.document,n){return this.getMaxZIndexNodeInfo(e,t,n).zIndex}getMinValue(...e){const t=[...e];let n=[];if(t.length!==0)if(t.length>1){if(t.length===2&&typeof t[0]=="object"&&typeof t[1]=="function"){const r=t[0],o=t[1];Object.keys(r).forEach(s=>{n=[...n,o(s,r[s])];});}else t.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.min(...n)}else return t[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.min(...n)}getRandomAndroidUA(){const e=this,t=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],n=e.getRandomValue(12,14),r=e.getRandomValue(t),o=e.getRandomValue(130,140),s=e.getRandomValue(0,0),i=e.getRandomValue(2272,6099),l=e.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${n}; ${r}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${o}.${s}.${i}.${l} Mobile Safari/537.36`}getRandomPCUA(){const e=this,t=e.getRandomValue(130,140),n=e.getRandomValue(0,0),r=e.getRandomValue(2272,6099),o=e.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${t}.${n}.${r}.${o} Safari/537.36`}getRandomValue(...e){const t=[...e];if(t.length>1)if(t.length===2&&typeof t[0]=="number"&&typeof t[1]=="number"){const n=t[0]>t[1]?t[1]:t[0],r=t[0]>t[1]?t[0]:t[1];return Math.round(Math.random()*(r-n))+n}else return t[Math.floor(Math.random()*t.length)];else if(t.length===1){const n=t[0];if(Array.isArray(n))return n[Math.floor(Math.random()*n.length)];if(typeof n=="object"&&Object.keys(n).length>0){const r=Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)];return n[r]}else return n}}getReactInstance(e){const t={};return e==null||Object.keys(e).forEach(r=>{if(r.startsWith("__react")){const o=r.replace(/__(.+)\$.+/i,"$1"),s=Reflect.get(e,r);o in t?console.error(`重复属性 ${r}`):Reflect.set(t,o,s);}}),t}getSymbol(e,t){if(typeof e!="object")throw new TypeError("target不是一个对象");const n=Object.getOwnPropertySymbols(e);if(typeof t=="string"){const r=n.find(o=>o.toString()===t);if(r)return e[r]}else if(typeof t=="symbol"){const r=n.find(o=>o===t);if(r)return e[r]}else {const r={};return n.forEach(o=>{r[o]=e[o];}),r}}getTextLength(e){return new TextEncoder().encode(e).length}getTextStorageSize(e,t=true){const n=this;return n.formatByteToSize(n.getTextLength(e),t)}getThunderUrl(e){if(e==null)throw new TypeError("url不能为空");if(typeof e!="string")throw new TypeError("url必须是string类型");if(e.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa(`AA${e}ZZ`)}`}GM_Cookie=go;GM_Menu=wo;Hooks=vo;Httpx=Ao;indexedDB=Eo;isNativeFunc(e){return !!e.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...e){let t=50;const n=()=>{const s=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,i=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,l=this.windowApi.document.documentElement.scrollHeight-t;return s+i>=l},r=s=>{const i=s.scrollTop,l=s.clientHeight,c=s.scrollHeight-l-t;return i>=c},o=e[0];if(e.length===0||typeof e[0]=="number")return n();if(typeof e[0]=="object"&&e[0]instanceof HTMLElement)return typeof e[1]=="number"&&!Number.isNaN(e[1])&&(t=e[1]),r(e[0]);throw new TypeError(`参数1类型错误${typeof o}`)}isDOM=re.isDOM.bind(re);isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(e){let t=false;if(typeof jQuery=="object"&&e instanceof jQuery&&(t=true),e==null)return  false;if(typeof e=="object"){const n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const r of n)if(r in e)t=true;else {t=false;break}}return t}isPhone(e=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(e)}isSameChars(e,t=1){if(typeof e!="string")throw new TypeError("参数 str 必须是 string 类型");if(e.length<2)return  false;e=e.toLowerCase();const n={};let r=0;for(const s of e)Reflect.has(n,s)?n[s]++:n[s]=1,r++;let o=false;for(const s in n)if(n[s]/r>=t){o=true;break}return o}isNotNull=re.isNotNull.bind(re);isNull=re.isNull.bind(re);isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(e,t=false){let n=[];e instanceof Array||e instanceof NodeList?(e=e,n=[...e]):n=[e];let r=true;for(const o of n){if(this.windowApi.window.getComputedStyle(o).display==="none")r=false;else {const i=o.getBoundingClientRect();if(t){const l=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,c=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;r=!(i.right<0||i.left>l||i.bottom<0||i.top>c);}else r=!!o.getClientRects().length;}if(!r)break}return r}isWebView_Via(){let e=true;const t=this;if(typeof this.windowApi.top.window.via=="object"){for(const n in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,n)){const r=this.windowApi.top.window.via[n];if(typeof r=="function"&&t.isNativeFunc(r))e=true;else {e=false;break}}}else e=false;return e}isWebView_X(){let e=true;const t=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const n in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,n)){const r=this.windowApi.top.window.mbrowser[n];if(typeof r=="function"&&t.isNativeFunc(r))e=true;else {e=false;break}}}else e=false;return e}parseObjectToArray(e){if(typeof e!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let t=[];return Object.keys(e).forEach(function(r){const o=Reflect.get(e,r);t=t.concat(o);}),t}LockFunction=To;Log=So;mergeArrayToString(e,t){if(!(e instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let n="";return typeof t=="function"?e.forEach(r=>{n+=t(r);}):typeof t=="string"?e.forEach(r=>{n+=r[t];}):e.forEach(r=>{Object.values(r).filter(o=>typeof o=="string").forEach(o=>{n+=o;});}),n}mutationObserver(e,t){const n=this,r={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};t=n.assign(r,t);const o=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,s=new o(function(i,l){typeof t.callback=="function"&&t.callback(i,l);});return Array.isArray(e)||e instanceof NodeList?e.forEach(i=>{s.observe(i,t.config);}):n.isJQuery(e)?e.each((i,l)=>{s.observe(l,t.config);}):s.observe(e,t.config),t.immediate&&typeof t.callback=="function"&&t.callback([],s),s}mutationVisible(e,t,n){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(e==null)throw new TypeError("mutatuinVisible target is null");let r={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};r=this.assign(r,n||{});const o=new IntersectionObserver((s,i)=>{s[0].isIntersecting&&typeof t=="function"&&t(s,i);},r);Array.isArray(e)?e.forEach(s=>{o.observe(s);}):o.observe(e);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=je,je}noConflictFunc(e,t,n=[],r=true){const o=this;if(typeof e!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof t!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(n))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");const s=`__${t}`;function i(){typeof o.windowApi.window[s]<"u"||(o.windowApi.window[s]=o.deepClone(e),Object.values(e).forEach(d=>{typeof d=="function"&&(e[d.name]=()=>{});}));}function l(){Array.from(n).forEach(d=>{Object.values(e).forEach(u=>{typeof u=="function"&&(typeof o.windowApi.window[s]>"u"&&(o.windowApi.window[s]={}),d===u.name&&(o.windowApi.window[s][u.name]=e[u.name],e[u.name]=()=>{}));});});}function c(){typeof o.windowApi.window[s]>"u"||(Object.assign(e,o.windowApi.window[s]),Reflect.deleteProperty(o.windowApi.window,"needReleaseKey"));}function f(){typeof o.windowApi.window[s]>"u"||Array.from(n).forEach(d=>{o.windowApi.window[s][d]&&(e[d]=o.windowApi.window[s][d],Reflect.deleteProperty(o.windowApi.window[s],d),Object.keys(o.windowApi.window[s]).length===0&&Reflect.deleteProperty(window,s));});}r?n.length===0?i():l():n.length===0?c():f();}parseBase64ToBlob(e){if(typeof e!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");const t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=atob(t[1]);let o=r.length;const s=new Uint8Array(o);for(;o--;)s[o]=r.charCodeAt(o);return new Blob([s],{type:n})}parseBase64ToFile(e,t="example"){if(typeof e!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof t!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");const n=e.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]);let s=o.length;const i=new Uint8Array(s);for(;s--;)i[s]=o.charCodeAt(s);return new File([i],t,{type:r})}parseInt(e=[],t=0){if(e==null)return parseInt(t.toString());let n=parseInt(e[e.length-1]);return isNaN(n)&&(n=parseInt(t.toString())),n}async parseBlobToFile(e,t="example"){return new Promise((n,r)=>{fetch(e).then(o=>o.blob()).then(o=>{const s=new File([o],t,{type:o.type});n(s);}).catch(o=>{console.error("Error:",o),r(o);});})}parseCDATA(e=""){let t="";const r=/<!\[CDATA\[([\s\S]*)\]\]>/.exec(e.trim());return r&&r.length>1&&(t=r[r.length-1]),t}async parseFileToBase64(e){const t=new FileReader;return t.readAsDataURL(e),new Promise(n=>{t.onload=function(r){n(r.target.result);};})}parseFromString(e,t="text/html"){return new DOMParser().parseFromString(e,t)}toRegExp(e,t="gi"){let n;if(t=t.toLowerCase(),typeof e=="string"){const r=this.toRegExpStr(e);n=new RegExp(r,t);}else if(e instanceof RegExp)n=e;else throw new Error("Utils.toRegExp 参数text必须是string|Regexp类型");return n}toRegExpStr(e){if(typeof e!="string")throw new TypeError("toRegExpStr 参数text必须是string类型");return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}Progress=Co;hookEvent_isTrusted(e=true,t){function n(o){return new Proxy(o,{get:function(s,i){return i==="isTrusted"?e:Reflect.get(s,i)}})}t==null&&(t=function(o){return o==="click"});const r=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...o){const s=o[0],i=o[1];if(t(s)){if(typeof i=="function")o[1]=function(l){i.call(this,n(l));};else if(typeof i=="object"&&"handleEvent"in i){const l=i.handleEvent;o[1].handleEvent=function(c){if(c!=null)try{c instanceof Proxy,l.call(this,n(c));}catch{Reflect.set(c,"isTrusted",e);}};}}return r.apply(this,o)};}reverseNumber(e){let t=0,n=false;for(e<0&&(n=true,e=Math.abs(e));e>0;)t=t*10+e%10,e=Math.floor(e/10);return n?-t:t}copy(e,t={type:"text",mimetype:"text/plain"}){typeof e=="object"?e instanceof Element?e=e.outerHTML:e=JSON.stringify(e):typeof e!="string"&&(e=e.toString());let n=typeof t=="object"?t.type:t;n.includes("html")?n="text/html":n="text/plain";const r=this;class o{#e;#t;#r;constructor(i,l,c){this.#e=i,this.#t=l,this.#r=c;}async init(){let i=false;const l=await this.requestClipboardPermission();if(console.log(l),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{i=await this.copyDataByClipboard();}catch(c){console.error("复制失败，使用第二种方式，error👉",c),i=this.copyTextByTextArea();}else i=this.copyTextByTextArea();this.#e(i),this.destroy();}destroy(){this.#e=null,this.#t=null,this.#r=null;}isText(){return this.#r.includes("text")}hasClipboard(){return navigator?.clipboard!=null}hasClipboardWrite(){return navigator?.clipboard?.write!=null}hasClipboardWriteText(){return navigator?.clipboard?.writeText!=null}copyTextByTextArea(){try{const i=r.windowApi.document.createElement("textarea");return i.value=this.#t,i.setAttribute("type","text"),i.setAttribute("style","opacity:0;position:absolute;"),i.setAttribute("readonly","readonly"),r.windowApi.document.body.appendChild(i),i.select(),r.windowApi.document.execCommand("copy"),r.windowApi.document.body.removeChild(i),!0}catch(i){return console.error("复制失败，error👉",i),false}}requestClipboardPermission(){return new Promise(i=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(()=>{i(true);}).catch(l=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",l.message??l.name??l.stack]),i(false);}):i(false);})}copyDataByClipboard(){return new Promise((i,l)=>{if(this.isText())navigator.clipboard.writeText(this.#t).then(()=>{i(true);}).catch(c=>{l(c);});else {const c=new Blob([this.#t],{type:this.#r});navigator.clipboard.write([new ClipboardItem({[this.#r]:c})]).then(()=>{i(true);}).catch(f=>{l(f);});}})}}return new Promise(s=>{const i=new o(s,e,n);r.windowApi.document.hasFocus()?i.init():r.windowApi.window.addEventListener("focus",()=>{i.init();},{once:true});})}async getClipboardInfo(){return new Promise(e=>{function t(){navigator.clipboard.readText().then(o=>{e({error:null,content:o});}).catch(o=>{e({error:o,content:""});});}function n(){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t();}).catch(()=>{t();});}function r(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}if(!r()){e({error:new Error("当前环境不支持读取剪贴板Api"),content:""});return}document.hasFocus()?n():window.addEventListener("focus",()=>{n();},{once:true});})}setTimeout(e,t=0){const n=this;if(typeof e!="function"&&typeof e!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof t!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(r=>{n.workerSetTimeout(()=>{r(n.tryCatch().run(e));},t);})}sleep(e=0){const t=this;if(typeof e!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(n=>{t.workerSetTimeout(()=>{n(void 0);},e);})}dragSlider(e,t=this.windowApi.window.innerWidth){const n=this;function r(d,u,m){const y=typeof unsafeWindow>"u"?globalThis:unsafeWindow,g=n.windowApi.document.createEvent("MouseEvents");return g.initMouseEvent(d,true,true,y,0,u,m,u,m,false,false,false,false,0,null),g}const o=typeof e=="string"?Xo.selector(e):e;if(!(o instanceof Node)||!(o instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");const s=o.getBoundingClientRect(),i=s.x||s.left,l=s.y||s.top,c=i+t,f=l;o.dispatchEvent(r("mousedown",i,l)),o.dispatchEvent(r("mousemove",c,f)),o.dispatchEvent(r("mouseleave",c,f)),o.dispatchEvent(r("mouseout",c,f));}enterFullScreen(e=this.windowApi.document.documentElement,t){try{if(e.requestFullscreen)e.requestFullscreen(t);else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.msRequestFullscreen)e.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(n){console.error(n);}}exitFullScreen(e=this.windowApi.document.documentElement){return e.exitFullscreen?e.exitFullscreen():e.msExitFullscreen?e.msExitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen?e.webkitCancelFullScreen():new Promise((t,n)=>{n(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(e,t,n=true){const r=this;if(typeof t!="function"&&typeof t!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof n!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");const o=function(f){return typeof t=="string"?f[t]:t(f)},s=function(f,d){const u=o(d),m=o(f);return n?m>u?-1:m<u?1:0:m<u?-1:m>u?1:0},i=function(f,d){const u=f.length;for(let m=0;m<u-1;m++)for(let y=0;y<u-1-m;y++){const g=f[y],x=f[y+1],w=o(g),A=o(x);if(n==true&&w<A||n==false&&w>A){const T=g.nextElementSibling;x.after(g),T==null?T.parentNode.appendChild(x):T.before(x),f=d();}}};let l=e,c=null;if(e instanceof Function&&(c=e,e=e()),Array.isArray(e))e.sort(s);else if(e instanceof NodeList||r.isJQuery(e))i(e,c),l=c();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return l}stringTitleToUpperCase(e,t=false){let n=e.slice(0,1).toUpperCase();return t?n=n+e.slice(1).toLowerCase():n=n+e.slice(1),n}startsWith(e,t,n=0){const r=this;if(n>e.length)return  false;n!==0&&(e=e.slice(n,e.length));let o=t;if(typeof t=="string")o=new RegExp(`^${t}`);else if(Array.isArray(t)){let s=false;for(const i of t)if(!r.startsWith(e,i,n)){s=true;break}return s}return !!e.match(o)}firstLetterToLowercase(e,t=false){let n=e.slice(0,1).toLowerCase();return t?n=n+e.slice(1).toUpperCase():n=n+e.slice(1),n}toJSON=re.toJSON.bind(re);toSearchParamsStr(e,t){const n=this;let r="";return Array.isArray(e)?e.forEach(o=>{r===""?r+=n.toSearchParamsStr(o):r+=`&${n.toSearchParamsStr(o)}`;}):r=new URLSearchParams(Object.entries(e)).toString(),t&&!r.startsWith("?")&&(r=`?${r}`),r}searchParamStrToObj(e){return typeof e!="string"?{}:Object.fromEntries(new URLSearchParams(e))}tryCatch=Tt;uniqueArray(e=[],t,n=(r,o)=>r===o){if(typeof t=="function"){const r=t,o=new Set,s=[];for(const i of e){const l=r(i);o.has(l)||(o.add(l),s.push(i));}return s}else return Array.from(e).filter(r=>!Array.from(t).some(function(o){return n(r,o)}))}waitArrayLoopToEnd(e,t){const n=this;if(typeof t!="function"&&typeof t!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(e).map(async(r,o)=>{await n.tryCatch(o,r).run(t);}))}waitProperty(e,t){return new Promise(n=>{let r=e;typeof e=="function"&&(r=e()),Reflect.has(r,t)?n(r[t]):Object.defineProperty(r,t,{set:function(o){try{n(o);}catch(s){console.error("Error setting property:",s);}}});})}waitPropertyByInterval(e,t,n=250,r=-1){const o=this;if(e==null)throw new TypeError("checkObj 不能为空对象 ");let s=false;return new Promise((i,l)=>{const c=o.workerSetInterval(()=>{let f=e;typeof e=="function"&&(f=e()),typeof f=="object"&&f!=null&&(typeof t=="function"&&t(f)||Reflect.has(f,t))&&(s=true,o.workerClearInterval(c),i(f[t]));},n);r!==-1&&o.workerSetTimeout(()=>{s||(o.workerClearInterval(c),l());},r);})}async waitVueByInterval(e,t,n=250,r=-1,o="__vue__"){if(e==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let s=false;const i=this;try{await i.waitPropertyByInterval(e,function(l){if(l==null||!(o in l))return !1;if(t==null)return !0;const c=l[o];if(typeof t=="string"){if(t in c)return s=!0,!0}else if(t(c))return s=!0,!0;return !1},n,r);}catch{return s}return s}watchObject(e,t,n,r){typeof n!="function"&&typeof r!="function"||(typeof n=="function"?Object.defineProperty(e,t,{get(){return typeof n=="function"?n(e[t]):e[t]}}):typeof r=="function"?Object.defineProperty(e,t,{set(o){typeof r=="function"&&r(o);}}):Object.defineProperty(e,t,{get(){return typeof n=="function"?n(e[t]):e[t]},set(o){typeof r=="function"&&r(o);}}));}queryProperty(e,t){if(e==null)return;const n=t(e);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:this.queryProperty(n.data,t)}async asyncQueryProperty(e,t){if(e==null)return;const n=await t(e);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:await this.asyncQueryProperty(n.data,t)}createUtils(e){return new Qt(e)}toFormData(e,t=false,n=false){const r=new FormData;return Object.keys(e).forEach(o=>{let s=e[o];n&&(s=JSON.stringify(s)),typeof s=="number"&&(s=s.toString()),t&&typeof s=="string"&&(s=encodeURIComponent(s)),s instanceof File?r.append(o,s,s.name):r.append(o,s);}),r}toUrl(e){if(typeof e!="string")throw new TypeError("toUrl: text must be string");if(e=e.trim(),e==="")throw new TypeError("toUrl: text must not be empty");return e.startsWith("//")?e=this.windowApi.globalThis.location.protocol+e:e.startsWith("/")&&(e=this.windowApi.globalThis.location.origin+e),new URL(e)}coverObjectFunctionThis=re.coverObjectFunctionThis.bind(re);generateUUID=jt;Vue=Io;ModuleRaid=Wo;workerSetTimeout(e,t=0){try{return qo(e,t)}catch{return this.windowApi.setTimeout(e,t)}}workerClearTimeout(e){try{e!=null&&jo(e);}catch{}finally{this.windowApi.clearTimeout(e);}}workerSetInterval(e,t=0){try{return Go(e,t)}catch{return this.windowApi.setInterval(e,t)}}workerClearInterval(e){try{e!=null&&Fo(e);}catch{}finally{this.windowApi.clearInterval(e);}}}const je=new Qt,ye={config:{},setGlobalConfig(a){Reflect.ownKeys(a).forEach(e=>{Reflect.set(ye.config,e,Reflect.get(a,e));});},getGlobalConfig(){const a={};return Object.keys(ye.config).forEach(e=>{const t=Reflect.get(ye.config,e);if(e==="style"){const n=t==null?"":typeof t=="function"?t():t;typeof n=="string"&&(a.style=n);}else if(e==="zIndex"){let n=t==null?"":typeof t=="function"?t():t;if(typeof n=="string"){const r=n=Number(n);isNaN(r)||(a.zIndex=r);}else isNaN(n)||(a.zIndex=n);}else if(e==="mask"){const n=ye.config.mask==null?{}:ye.config.mask;typeof n=="object"&&n!=null&&(a.mask=n);}else Reflect.set(a,e,t);}),a}};var Yo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,Jo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,Zo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,ea=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="close">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,ta=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
	<path\r
		fill="currentColor"\r
		d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,na=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,ra=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,oa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,aa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,sa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,ia=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,la=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,ca=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,fa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
		fill="currentColor"></path>\r
</svg>\r
`,da=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" xml:space="preserve" data-type="chromeFilled">\r
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
`,pa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,ua=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,ba=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,ha=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,ma=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,ga=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,ya=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,xa=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="circleClose">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,wa=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,va=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,Aa=`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
	<path\r
		d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
	<path\r
		d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,Ea=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowRight">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Ta=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowLeft">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`;const Sa={min:Yo,mise:Jo,max:Zo,close:ea,edit:ta,share:na,delete:ra,search:oa,upload:aa,loading:sa,next:ia,prev:la,eleme:ca,elemePlus:fa,chromeFilled:da,cpu:pa,videoPlay:ua,videoPause:ba,headset:ha,monitor:ma,documentCopy:ga,picture:ya,circleClose:xa,view:wa,hide:va,keyboard:Aa,arrowRight:Ea,arrowLeft:Ta},ie={$data:Sa,hasIcon(a){return Object.keys(ie.$data).includes(a)},getIcon(a){return ie.$data[a]},deleteIcon(a){return Reflect.deleteProperty(ie.$data,a)},setIcon(a,e){Reflect.set(ie.$data,a,e);}},ct=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),nr={document,window,globalThis,self,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)},Pe=Object.assign({},nr),W={init(a){a||(a=Object.assign({},nr)),Object.assign(Pe,a);},get document(){return Pe.document},get window(){return Pe.window},get globalThis(){return Pe.globalThis},get self(){return Pe.self},get setTimeout(){return Pe.setTimeout},get setInterval(){return Pe.setInterval},get clearTimeout(){return Pe.clearTimeout},get clearInterval(){return Pe.clearInterval}},rr={Object:{defineProperty:Object.defineProperty}},Ca=a=>(e,t)=>(a.set(e,t),t),Cn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,or=536870912,kn=or*2,ka=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<kn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<or){for(;t.has(r);)r=Math.floor(Math.random()*kn);return a(t,r)}if(t.size>Cn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*Cn);return a(t,r)},ar=new WeakMap,Ma=Ca(ar),qt=ka(Ma,ar),La=a=>typeof a.start=="function",Mn=new WeakMap,$a=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return Mn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=Mn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Dt=new WeakMap,Ia=a=>{if(Dt.has(a))return Dt.get(a);const e=new Map;return Dt.set(a,e),e},_a=a=>{const e=$a(a);return t=>{const n=Ia(t);t.addEventListener("message",(({data:i})=>{const{id:l}=i;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),i.error===void 0?f(i.result):c(new Error(i.error.message));}})),La(t)&&t.start();const r=(i,l=null,c=[])=>new Promise((f,d)=>{const u=qt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:i},c):t.postMessage({id:u,method:i,params:l},c);}),o=(i,l,c=[])=>{t.postMessage({id:null,method:i,params:l},c);};let s={};for(const[i,l]of Object.entries(e))s={...s,[i]:l({call:r,notify:o})};return {...s}}},Ye=new Map([[0,null]]),Je=new Map([[0,null]]),Ra=_a({clearInterval:({call:a})=>e=>{typeof Ye.get(e)=="symbol"&&(Ye.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{Ye.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof Je.get(e)=="symbol"&&(Je.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{Je.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=qt(Ye);Ye.set(o,r);const s=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const i=Ye.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(e(...n),Ye.get(o)===r&&s());});return s(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=qt(Je);return Je.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const s=Je.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(Je.delete(o),e(...n));}),o}}),Na=a=>{const e=new Worker(a);return Ra(e)},Oa=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},Pa=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,Mt=Oa(Na,Pa),Ba=a=>Mt().clearInterval(a),Da=a=>Mt().clearTimeout(a),Ha=(...a)=>Mt().setInterval(...a),Ua=(...a)=>Mt().setTimeout(...a);let Va=class{constructor(){this.__map={};}beforeEach(e){this.__interceptor=e;}on(e,t){const n=Array.isArray(e)?e:[e];for(const r of n){this.__map[r]=this.__map[r]||[];const o=this.__map[r];o&&o.push(t);}return this}emit(e,t,n){this.__interceptor!==void 0?this.__interceptor(e,(()=>{this.__emit(e,t),n&&n();})):(this.__emit(e,t),n&&n());}__emit(e,t){const n=this.__map[e];if(Array.isArray(n)&&n?.length)for(const r of n)r(t,e);this.event=t;}off(e,t){const n=this.__map[e];if(n!==void 0)if(t===void 0)delete this.__map[e];else {const r=n.findIndex((o=>o===t));n.splice(r,1);}}destroy(){this.__map={};}};const ut="clientX",bt="clientY",za=16,Lt="start",Fa="move",Yt="cancel",st="end",ja="left",Ga="right",sr="up",qa="down",Wa={4:"start",5:"move",1:"end",3:"cancel"};function Jt(a){return Wa[a]}function Zt(a,e,t){const n={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(a)][e];return n!==void 0&&n[t]||0}function $t(a){[1,3,2].includes(a.state)&&(a.state=0);}function en(a){return [5,1,3].includes(a)}function mt(a){if(a.disabled)return a.state=0,true}function it(a,e){return Object.assign(Object.assign(Object.assign({},a),e),{state:0,disabled:false})}function Ln(a){return Math.round(100*a)/100}function $n(){let a,e,t,n,r=0;return function(o){if(a=e,o!==void 0){r=Number.MAX_SAFE_INTEGER>r?++r:1;const s=(function(c,f){const{phase:d,points:u,changedPoints:m,nativeEvent:y}=c,g=u.length,x=Lt===d,w=st===d&&g===0||Yt===d,A=Date.now(),{x:T,y:v}=In(u)||In(m),{currentTarget:C}=y;return Object.assign(c,{id:f,x:T,y:v,timestamp:A,isStart:x,isEnd:w,pointLength:g,currentTarget:C,getOffset(L=C){const D=L.getBoundingClientRect();return {x:T-Math.round(D.left),y:v-Math.round(D.top)}}})})(o,r);e=s;const{isStart:i,pointLength:l}=s;return i&&(t=s,a=void 0,n=1<l?s:void 0),Object.assign(Object.assign({},s),{prevInput:a,startMultiInput:n,startInput:t})}}}function In(a){const{length:e}=a;if(0<e){if(e===1){const{clientX:n,clientY:r}=a[0];return {x:Math.round(n),y:Math.round(r)}}const t=a.reduce(((n,r)=>(n.x+=r[ut],n.y+=r[bt],n)),{x:0,y:0});return {x:Math.round(t.x/e),y:Math.round(t.y/e)}}}function _n(a,e,t,n){const r={};for(const s in t)["target","currentTarget","type"].includes(s)||(r[s]=t[s]);let o;return document.createEvent?(o=document.createEvent("HTMLEvents"),o.initEvent(a,n?.bubbles,n?.cancelable)):o=new Event(a,n),Object.assign(o,r,{match:()=>t.targets&&0<t.targets.length&&t.targets.every((s=>o.currentTarget.contains(s)))}),e.dispatchEvent(o)}function Ka(a,e){const{preventDefault:t}=e;return n=t,Object.prototype.toString.call(n)==="[object Function]"?t(a):!!t;var n;}const Rn=["touchstart","touchmove","touchend","touchcancel","mousedown"],Nn=["mousemove","mouseup"],Xa={domEvents:{bubbles:true,cancelable:true},preventDefault:a=>{if(a.target&&"tagName"in a.target){const{tagName:e}=a.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e)}return  false}};let Qa=class extends Va{constructor(e,t){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=e,this.c={},this.__options=Object.assign(Object.assign({},Xa),t);const n=(function(o){const s=$n();return function(i){const l=[],c=[];Array.from(i.touches).forEach((({clientX:d,clientY:u,target:m})=>{o?.contains(m)&&(l.push(m),c.push({clientX:d,clientY:u,target:m}));}));const f=Array.from(i.changedTouches).map((({clientX:d,clientY:u,target:m})=>({clientX:d,clientY:u,target:m})));return s({phase:i.type.replace("touch",""),changedPoints:f,points:c,nativeEvent:i,target:i.target,targets:l})}})(this.el),r=(function(){let o,s=false,i=null;const l=$n();return function(c){const{clientX:f,clientY:d,type:u,button:m,target:y}=c;let g,x=[{clientX:f,clientY:d,target:y}];if(u==="mousedown"&&m===0)i=y,s=true,g="start";else {if(!s)return;u==="mousemove"?g="move":u==="mouseup"&&(x=[],g="end",s=false);}const w=o||[{clientX:f,clientY:d,target:y}];if(o=[{clientX:f,clientY:d,target:y}],g!==void 0)return l({phase:g,changedPoints:w,points:x,target:i,targets:[i],nativeEvent:c})}})();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:r,mousemove:r,mouseup:r},this.on("at:after",(o=>{const{target:s,__type:i}=o,{domEvents:l}=this.__options;l&&this.el!==void 0&&s&&(_n(i,s,o,l),_n("at:after",s,o,l));})),e!==void 0){e.style.webkitTapHighlightColor="rgba(0,0,0,0)";let o=false;try{const s={};Object.defineProperty(s,"passive",{get(){o=!0;}}),window.addEventListener("_",(()=>{}),s);}catch{}this.on("u",(function(s,i,l){return Rn.forEach((c=>{s.addEventListener(c,i,l);})),Nn.forEach((c=>{window.addEventListener(c,i,l);})),()=>{Rn.forEach((c=>{s.removeEventListener(c,i);})),Nn.forEach((c=>{window.removeEventListener(c,i);}));}})(e,this.catchEvent.bind(this),this.__options.preventDefault===false&&o?{passive:true}:{passive:false}));}}use(e,t){this.__pluginContexts.push(e(this,t));}catchEvent(e){const t=this.__inputCreatorMap[e.type](e);if(t!==void 0){const n=()=>e.stopPropagation(),r=()=>e.stopImmediatePropagation(),o=()=>e.preventDefault();if(Ka(e,this.__options))o();else if(e.type==="touchstart"?this.__isIgnoreMouse=true:e.type==="touchmove"&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&e.type.startsWith("mouse"))return void(e.type==="mouseup"&&(this.__isIgnoreMouse=false));this.emit("input",t),this.emit2(`at:${t.phase}`,t,{});const s={};this.__computeFunctionList.forEach((i=>{const l=i(t,s);if(l!==void 0)for(const c in l)s[c]=l[c];})),this.emit("computed",Object.assign(Object.assign(Object.assign({},t),s),{stopPropagation:n,stopImmediatePropagation:r,preventDefault:o}));}}compute(e,t){for(const n of e)this.__computeFunctionCreatorList.includes(n)||(this.__computeFunctionCreatorList.push(n),this.__computeFunctionList.push(n()));this.on("computed",t);}beforeEach(e){super.beforeEach(((t,n)=>{var r;!((r=this.c)===null||r===void 0)&&r.name?e(t,n):n();}));}get(e){return this.__pluginContexts.find((t=>e===t.name))}set(e){this.__options=Object.assign(Object.assign({},this.__options),e);}emit2(e,t,n){this.c=n,this.emit(e,Object.assign(Object.assign({},t),{type:e}),(()=>{this.emit("at:after",Object.assign(Object.assign({},t),{name:e,__type:e}));}));}destroy(){this.emit("u"),super.destroy();}};var ze=a=>Math.sqrt(a.x*a.x+a.y*a.y),Ya=(a,e)=>a.x*e.x+a.y*e.y,Ja=(a,e)=>{var t=ze(a)*ze(e);if(t===0)return 0;var n=Ya(a,e)/t;return n>1&&(n=1),Math.acos(n)},Za=(a,e)=>a.x*e.y-e.x*a.y,ir=a=>a/Math.PI*180,On=(a,e)=>{var t=Ja(a,e);return Za(a,e)>0&&(t*=-1),ir(t)},lr=(a,e)=>{if(a!==0||e!==0)return Math.abs(a)>=Math.abs(e)?0<a?Ga:ja:0<e?qa:sr};function es(){let a=0,e=0;return function(t,n){const{prevVecotr:r,startVecotr:o,activeVecotr:s}=n;return s&&(e=Math.round(On(s,r)),a=Math.round(On(s,o))),{angle:a,deltaAngle:e}}}function ts(){return function(a){const{prevInput:e}=a;let t=0,n=0,r=0;if(e!==void 0&&(t=a.x-e.x,n=a.y-e.y,t!==0||n!==0)){const o=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));r=Math.round(ir(Math.acos(Math.abs(t)/o)));}return {deltaX:t,deltaY:n,deltaXYAngle:r}}}function It(){let a,e=0,t=0,n=0,r=0,o=0;return function(s){const{phase:i,startInput:l}=s;return Lt===i?(e=0,t=0,n=0,r=0,o=0):Fa===i&&(e=Math.round(s.points[0][ut]-l.points[0][ut]),t=Math.round(s.points[0][bt]-l.points[0][bt]),n=Math.abs(e),r=Math.abs(t),o=Math.round(ze({x:n,y:r})),a=lr(e,t)),{displacementX:e,displacementY:t,distanceX:n,distanceY:r,distance:o,overallDirection:a}}}function ns(){let a=1;return function(e,t){let n=1;const{prevVecotr:r,startVecotr:o,activeVecotr:s}=t;return s&&(n=Ln(ze(s)/ze(r)),a=Ln(ze(s)/ze(o))),{scale:a,deltaScale:n}}}function cr(){let a,e,t=0,n=0,r=0,o=0;return function(s){if(s!==void 0){e=e||s.startInput;const i=s.timestamp-e.timestamp;if(za<i){const l=s.x-e.x,c=s.y-e.y;r=Math.round(l/i*100)/100,o=Math.round(c/i*100)/100,t=Math.abs(r),n=Math.abs(o),a=lr(l,c),e=s;}}return {velocityX:t,velocityY:n,speedX:r,speedY:o,direction:a}}}function fr(){let a=0;return function(e){const{phase:t}=e;return Lt===t&&(a=e.pointLength),{maxPointLength:a}}}function Ht(a){return {x:a.points[1][ut]-a.points[0][ut],y:a.points[1][bt]-a.points[0][bt]}}function dr(){let a,e,t;return function(n){const{prevInput:r,startMultiInput:o}=n;return o!==void 0&&r!==void 0&&n.id!==o.id&&1<r.pointLength&&1<n.pointLength?(a=Ht(o),e=Ht(r),t=Ht(n)):t=void 0,{startVecotr:a,prevVecotr:e,activeVecotr:t}}}const rs={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function tn(a,e){const t=it(rs,e);let n,r,o,s=0;function i(){s=0,n=void 0,r=void 0;}return a.compute([It,fr],(l=>{if(mt(t))return;const{phase:c,x:f,y:d}=l;st===c&&(t.state=0,(function(){const{startInput:u,pointLength:m,timestamp:y}=l,g=y-u.timestamp,{distance:x,maxPointLength:w}=l;return w===t.pointLength&&m===0&&t.maxDistance>=x&&t.maxPressTime>g})()?(clearTimeout(o),(function(u,m){if(n!==void 0){const y=ze({x:u.x-n.x,y:u.y-n.y});return n=u,m.maxDistanceFromPrevTap>=y}return n=u,true})({x:f,y:d},t)&&(function(u){const m=performance.now();if(r===void 0)return r=m,true;{const y=m-r;return r=m,y<u}})(t.waitNextTapTime)?s++:s=1,s%t.tapTimes==0?(t.state=1,a.emit2(t.name,l,t),i()):o=setTimeout((()=>{t.state=2,i();}),t.waitNextTapTime)):(i(),t.state=2));})),t}const os={name:"pan",threshold:10,pointLength:1};function pr(a,e){const t=it(os,e);return a.compute([cr,It,ts],(n=>{if($t(t),mt(t))return;const r=(function(){const{pointLength:o,distance:s}=n;return t.pointLength===o&&t.threshold<=s})();if(t.state=Zt(r,t.state,n.phase),r||en(t.state)){const{name:o}=t;a.emit2(o,n,t),a.emit2(o+Jt(t.state),n,t),![st,Yt].includes(n.phase)&&n.direction&&a.emit2(o+n.direction,n,t);}})),t}const as={name:"swipe",threshold:10,velocity:.3,pointLength:1};function ur(a,e){const t=it(as,e);return a.compute([It,cr,fr],(n=>{if(t.state=0,!t.disabled&&(function(){if(st!==n.phase)return  false;const{velocityX:r,velocityY:o,distance:s,maxPointLength:i}=n;return i===t.pointLength&&n.points.length===0&&t.threshold<s&&t.velocity<Math.max(r,o)})()){const{name:r}=t;t.state=1,a.emit2(r,n,t),a.emit2(r+n.direction,n,t);}})),t}const ss={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function br(a,e){const t=it(ss,e);let n=0;return a.compute([It],(r=>{if(mt(t))return;const{phase:o,startInput:s,pointLength:i}=r;if(Lt===o&&t.pointLength===i)$t(t),clearTimeout(n),n=setTimeout((()=>{t.state=1,a.emit2(t.name,r,t);}),t.minPressTime);else if(st===o&&t.state===1)a.emit2(`${t.name}${sr}`,r,t);else if(t.state!==1){const l=r.timestamp-s.timestamp;(!(function(){const{distance:c}=r;return c&&t.maxDistance>c})()||t.minPressTime>l&&[st,Yt].includes(o))&&(clearTimeout(n),t.state=2);}})),t}const is={name:"pinch",threshold:0,pointLength:2};function hr(a,e){const t=it(is,e);return a.compute([dr,ns],(n=>{if($t(t),mt(t))return;const r=(function(){const{pointLength:i,scale:l,deltaScale:c,phase:f}=n;return t.pointLength===i&&t.threshold<Math.abs(l-1)})();t.state=Zt(r,t.state,n.phase);const{name:o}=t;if(r||en(t.state)){a.emit2(o,n,t);const{deltaScale:i}=n;i!==1&&a.emit2(o+(1<i?"in":"out"),n,t);}const s=Jt(t.state);s&&a.emit2(o+s,n,t);})),t}const ls={name:"rotate",threshold:0,pointLength:2};function mr(a,e){const t=it(ls,e);return a.compute([dr,es],(n=>{if(mt(t))return;$t(t);const r=(function(){const{pointLength:i,angle:l}=n;return t.pointLength===i&&t.threshold<Math.abs(l)})();t.state=Zt(r,t.state,n.phase);const{name:o}=t;(r||en(t.state))&&a.emit2(o,n,t);const s=Jt(t.state);s&&a.emit2(o+s,n,t);})),t}function cs(a){a.use(tn,{name:"doubletap",tapTimes:2});const e=a.get("doubletap");let t;return a.beforeEach(((n,r)=>{n==="tap"?(clearTimeout(t),t=setTimeout((()=>{[0,2].includes(e.state)&&r();}),300)):r();})),e}class Ae extends Qa{constructor(e,t){super(e,t),this.use(tn),this.use(pr),this.use(ur),this.use(br),this.use(hr),this.use(mr);}}Ae.STATE_POSSIBLE=0,Ae.STATE_START=4,Ae.STATE_MOVE=5,Ae.STATE_END=1,Ae.STATE_CANCELLED=3,Ae.STATE_FAILED=2,Ae.STATE_RECOGNIZED=1,Ae.tap=tn,Ae.pan=pr,Ae.swipe=ur,Ae.press=br,Ae.rotate=mr,Ae.pinch=hr,Ae.doubletap=cs;class fs{isWin(e){return typeof e!="object"||e instanceof Node?false:e===globalThis||e===window||e===self||e===W.globalThis||e===W.window||e===W.self||typeof unsafeWindow<"u"&&e===unsafeWindow?true:e?.Math?.toString()==="[object Math]"}isDOM(e){return e instanceof Node}delete(e,t){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(e,t):delete e[t];}assign(e={},t={},n=false){const r=this;if(t==null)return e;if(e==null&&(e={}),Array.isArray(t)&&!t.filter(s=>typeof s=="object").length)return t;if(n)for(const o in t){const i=e[o],l=t[o];if(typeof l=="object"&&l!=null&&o in e&&!r.isDOM(l)){e[o]=r.assign(i,l,n);continue}e[o]=l;}else for(const o in e)if(o in t){const s=Reflect.get(e,o),i=Reflect.get(t,o);if(typeof i=="object"&&i!=null&&!r.isDOM(i)&&Object.keys(i).length){const l=r.assign(s,i,n);Reflect.set(e,o,l);continue}Reflect.set(e,o,i);}return e}getRandomGUID(){return typeof W.globalThis?.crypto?.randomUUID=="function"?W.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return (e==="x"?t:t&3|8).toString(16)})}contains(...e){const[t,n]=e;if(e.length===1)return this.contains(W.document.body||W.document.documentElement,e[0]);if(n==null)return  false;if(typeof n[Symbol.iterator]=="function"){let r=true;for(const o of n)if(!t.contains(o)){r=false;break}return r}else return t.contains(n)}formatTime(e=new Date,t="yyyy-MM-dd HH:mm:ss"){const n=e==null?new Date:new Date(e);function r(i){return i<10?"0"+i:i}function o(i){return i>12?i-12:i}const s={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(o(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(s).forEach(function(i){const l=new RegExp(i,"g");t=t.replace(l,s[i]);}),t}formatByteToSize(e,t=true){if(e=parseInt(e.toString()),isNaN(e))throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB";const o={};o.B=1,o.KB=1024,o.MB=o.KB*o.KB,o.GB=o.MB*o.KB,o.TB=o.GB*o.KB,o.PB=o.TB*o.KB,o.EB=o.PB*o.KB,o.ZB=o.EB*o.KB,o.YB=o.ZB*o.KB,o.BB=o.YB*o.KB,o.NB=o.BB*o.KB,o.DB=o.NB*o.KB;for(const s in o)if(n=e/o[s],r=s,o.KB>=n)break;return n=n.toFixed(2),n=t?n+r.toString():parseFloat(n.toString()),n}AnyTouch=()=>Ae;isPhone(e=W.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(e)}setTimeout(e,t=0){try{return Ua(e,t)}catch{return W.setTimeout(e,t)}}clearTimeout(e){try{e!=null&&Da(e);}catch{}finally{W.clearTimeout(e);}}setInterval(e,t=0){try{return Ha(e,t)}catch{return W.setInterval(e,t)}}clearInterval(e){try{e!=null&&Ba(e);}catch{}finally{W.clearInterval(e);}}}const V=new fs,te={getSafeHTML(a){return window.trustedTypes?window.trustedTypes.createPolicy("safe-innerHTML",{createHTML:t=>t}).createHTML(a):a},setSafeHTML(a,e){a.innerHTML=this.getSafeHTML(e);}},ue={flexCenter:"pops-flex-items-center",flexYCenter:"pops-flex-y-center",hide:"pops-hide",hideImportant:"pops-hide-important",userSelectNone:"pops-user-select-none",textIsDisabled:"pops-text-is-disabled"};class ds{on(e,t,n,r,o){function s(g,x,w){const A=g[x];return typeof A=="boolean"?(w.capture=A,typeof g[x+1]=="boolean"&&(w.once=g[x+1]),typeof g[x+2]=="boolean"&&(w.passive=g[x+2])):typeof A=="object"&&("capture"in A||"once"in A||"passive"in A||"isComposedPath"in A)&&(w.capture=A.capture,w.once=A.once,w.passive=A.passive,w.isComposedPath=A.isComposedPath),w}const i=this,l=arguments;if(typeof e=="string"&&(e=i.selectorAll(e)),e==null)return;let c=[];e instanceof NodeList||Array.isArray(e)?(e=e,c=[...e]):c.push(e);let f=[];Array.isArray(t)?f=f.concat(t.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof t=="string"&&(f=f.concat(t.split(" ").filter(g=>g!=="")));let d=[];Array.isArray(n)?d=d.concat(n.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof n=="string"&&d.push(n);let u=r,m={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(u=n,m=s(l,3,m)):m=s(l,4,m);function y(){m.once&&i.off(e,t,n,r,o);}c.forEach(g=>{function x(w){if(d.length){let A=m.isComposedPath?w.composedPath()[0]:w.target,T=g;if(V.isWin(T)&&T===W.document&&(T=W.document.documentElement),d.find(C=>{if(i.matches(A,C))return  true;const L=i.closest(A,C);return L&&T?.contains(L)?(A=L,true):false})){try{rr.Object.defineProperty(w,"target",{get(){return A}});}catch{}u.call(A,w,A),y();}}else u.call(g,w),y();}f.forEach(w=>{g.addEventListener(w,x,m);const A=Reflect.get(g,ct)||{};A[w]=A[w]||[],A[w].push({selector:d,option:m,callback:x,originCallBack:u}),Reflect.set(g,ct,A);});});}off(e,t,n,r,o,s){function i(x,w,A){const T=x[w];return typeof T=="boolean"?A.capture=T:typeof T=="object"&&T!=null&&"capture"in T&&(A.capture=T.capture),A}const l=this,c=arguments;if(typeof e=="string"&&(e=l.selectorAll(e)),e==null)return;let f=[];e instanceof NodeList||Array.isArray(e)?(e=e,f=[...e]):f.push(e);let d=[];Array.isArray(t)?d=d.concat(t.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof t=="string"&&(d=d.concat(t.split(" ").filter(x=>x!=="")));let u=[];Array.isArray(n)?u=u.concat(n.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof n=="string"&&u.push(n);let m=r,y={capture:false};typeof n=="function"?(m=n,y=i(c,3,y)):y=i(c,4,y);let g=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(g=true),c.length===5&&typeof c[4]=="function"&&typeof s!="function"&&(s=o),f.forEach(x=>{const w=Reflect.get(x,ct)||{};d.forEach(A=>{const T=w[A]||[],v=typeof s=="function"?T.filter(s):T;for(let C=0;C<v.length;C++){const L=v[C];let D=true;if(D&&m&&L.originCallBack!==m&&(D=false),D&&u.length&&Array.isArray(L.selector)&&JSON.stringify(L.selector)!==JSON.stringify(u)&&(D=false),D&&typeof L.option.capture=="boolean"&&y.capture!==L.option.capture&&(D=false),D||g){x.removeEventListener(A,L.callback,L.option);const z=T.findIndex(X=>X===L);z!==-1&&T.splice(z,1);}}T.length===0&&V.delete(w,t);}),Reflect.set(x,ct,w);});}offAll(e,t){if(typeof e=="string"&&(e=W.document.querySelectorAll(e)),e==null)return;let n=[];e instanceof NodeList||Array.isArray(e)?n=[...e]:n.push(e);let r=[];Array.isArray(t)?r=r.concat(t):typeof t=="string"&&(r=r.concat(t.split(" "))),n.forEach(o=>{Object.getOwnPropertySymbols(o).forEach(s=>{if(!s.toString().startsWith("Symbol(events_"))return;const i=o[s]||{};(r.length?r:Object.keys(i)).forEach(c=>{const f=i[c];if(f){for(const d of f)o.removeEventListener(c,d.callback,{capture:d.option.capture});V.delete(o[s],c);}});});});}ready(e){const t=this;if(typeof e!="function")return;function n(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return  false}}function r(){i(),e();}const o=[{target:W.document,eventType:"DOMContentLoaded",callback:r},{target:W.window,eventType:"load",callback:r}];function s(){for(let l=0;l<o.length;l++){const c=o[l];t.on(c.target,c.eventType,c.callback);}}function i(){for(let l=0;l<o.length;l++){const c=o[l];t.off(c.target,c.eventType,c.callback);}}n()?V.setTimeout(e,0):s();}trigger(e,t,n,r=true){if(typeof e=="string"&&(e=W.document.querySelector(e)),e==null)return;let o=[];e instanceof NodeList||Array.isArray(e)?(e=e,o=[...e]):o=[e];let s=[];Array.isArray(t)?s=t:typeof t=="string"&&(s=t.split(" ")),o.forEach(i=>{const l=i[ct]||{};s.forEach(c=>{let f=null;n&&n instanceof Event?f=n:(f=new Event(c),n&&Object.keys(n).forEach(d=>{f[d]=n[d];})),r==false&&c in l?l[c].forEach(d=>{d.callback(f);}):i.dispatchEvent(f);});});}click(e,t,n,r){const o=this;typeof e=="string"&&(e=W.document.querySelector(e)),e!=null&&(t==null?o.trigger(e,"click",n,r):o.on(e,"click",null,t));}blur(e,t,n,r){const o=this;typeof e=="string"&&(e=W.document.querySelector(e)),e!=null&&(t===null?o.trigger(e,"blur",n,r):o.on(e,"blur",null,t));}focus(e,t,n,r){const o=this;typeof e=="string"&&(e=W.document.querySelector(e)),e!=null&&(t==null?o.trigger(e,"focus",n,r):o.on(e,"focus",null,t));}hover(e,t,n){const r=this;typeof e=="string"&&(e=W.document.querySelector(e)),e!=null&&(r.on(e,"mouseenter",null,t,n),r.on(e,"mouseleave",null,t,n));}keyup(e,t,n){const r=this;e!=null&&(typeof e=="string"&&(e=W.document.querySelector(e)),r.on(e,"keyup",null,t,n));}keydown(e,t,n){const r=this;e!=null&&(typeof e=="string"&&(e=W.document.querySelector(e)),r.on(e,"keydown",null,t,n));}keypress(e,t,n){const r=this;e!=null&&(typeof e=="string"&&(e=W.document.querySelector(e)),r.on(e,"keypress",null,t,n));}preventEvent(e,t=[],n){function r(o){return o?.preventDefault(),o?.stopPropagation(),o?.stopImmediatePropagation(),false}if(arguments.length===1)return r(arguments[0]);typeof t=="string"&&(t=[t]),t.forEach(o=>{this.on(e,o,r,{capture:!!n});});}selector(e){return this.selectorAll(e)[0]}selectorAll(e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(W.document.querySelectorAll(e)).filter(t=>t?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const n=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(W.document.querySelectorAll(e)).filter(r=>(r?.textContent||r?.innerText)?.includes(n))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let o="";r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),o=r[3]);const s=new RegExp(n,o);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(W.document.querySelectorAll(e)).filter(i=>!!(i?.textContent||i?.innerText)?.match(s))}else return Array.from(W.document.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=e?.textContent||e?.innerText;return typeof o!="string"&&(o=""),e.matches(t)&&o?.includes(r)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=o[3]);const i=new RegExp(r,s);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(i)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");const n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");const o=e?.closest(t);if(o){const s=e?.textContent||e?.innerText;if(typeof s=="string"&&s.includes(r))return o}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=o[3]);const i=new RegExp(r,s);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");const l=e?.closest(t);if(l){const c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(i))return l}return null}else return e?.closest(t)}}class ps extends ds{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(e,t=true){const n=e.getBoundingClientRect(),r=e.ownerDocument.defaultView;return new DOMRect(t?parseFloat((n.left+(r?.pageXOffset||0)).toString()):n.left,t?parseFloat((n.top+(r?.pageYOffset||0)).toString()):n.top,n.width,n.height)}width(e,t=false,n){const r=this;if(typeof e=="string"&&(e=W.document.querySelector(e)),e!=null){if(V.isWin(e))return W.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&p.isShow(e)){if(e=e,parseFloat(p.getStyleValue(e,"width").toString())>0)return parseFloat(p.getStyleValue(e,"width").toString());if(e.offsetWidth>0){const o=p.getStyleValue(e,"borderLeftWidth"),s=p.getStyleValue(e,"borderRightWidth"),i=p.getStyleValue(e,"paddingLeft"),l=p.getStyleValue(e,"paddingRight"),c=parseFloat(e.offsetWidth.toString())-parseFloat(o.toString())-parseFloat(s.toString())-parseFloat(i.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;const{cloneNode:o,recovery:s}=p.showElement(e,n),i=r.width(o,true,n);return s(),i}}}height(e,t=false,n){const r=this;if(V.isWin(e))return W.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=W.document.querySelector(e)),e!=null){if(e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&p.isShow(e)){if(e=e,parseFloat(p.getStyleValue(e,"height").toString())>0)return parseFloat(p.getStyleValue(e,"height").toString());if(e.offsetHeight>0){const o=p.getStyleValue(e,"borderTopWidth"),s=p.getStyleValue(e,"borderBottomWidth"),i=p.getStyleValue(e,"paddingTop"),l=p.getStyleValue(e,"paddingBottom"),c=parseFloat(e.offsetHeight.toString())-parseFloat(o.toString())-parseFloat(s.toString())-parseFloat(i.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;const{cloneNode:o,recovery:s}=p.showElement(e,n),i=r.height(o,true,n);return s(),i}}}outerWidth(e,t=false,n){const r=this;if(V.isWin(e))return W.window.innerWidth;if(typeof e=="string"&&(e=W.document.querySelector(e)),e!=null)if(e=e,t||!t&&p.isShow(e)){const o=getComputedStyle(e,null),s=p.getStyleValue(o,"marginLeft"),i=p.getStyleValue(o,"marginRight");return e.offsetWidth+s+i}else {const{cloneNode:o,recovery:s}=p.showElement(e,n),i=r.outerWidth(o,true,n);return s(),i}}outerHeight(e,t=false,n){const r=this;if(V.isWin(e))return W.window.innerHeight;if(typeof e=="string"&&(e=W.document.querySelector(e)),e=e,t||!t&&p.isShow(e)){const o=getComputedStyle(e,null),s=p.getStyleValue(o,"marginTop"),i=p.getStyleValue(o,"marginBottom");return e.offsetHeight+s+i}else {const{cloneNode:o,recovery:s}=p.showElement(e,n),i=r.outerHeight(o,true,n);return s(),i}}addClassName(e,t){if(e==null||typeof t!="string"||t.trim()==="")return;const n=t.split(" ").filter(r=>r.trim()!=="");e.classList.add(...n);}removeClassName(e,t){if(e==null||typeof t!="string"||t.trim()==="")return;const n=t.split(" ").filter(r=>r.trim()!=="");e.classList.remove(...n);}containsClassName(e,t){return e==null||typeof t!="string"||t.trim()===""?false:e.classList.contains(t)}css(e,t,n){function r(s,i){const l=["width","height","top","left","right","bottom","font-size"];return typeof i=="number"&&(i=i.toString()),typeof i=="string"&&l.includes(s)&&i.match(/[0-9]$/gi)&&(i=i+"px"),i}if(typeof e=="string"&&(e=W.document.querySelector(e)),e==null)return;const o=(s,i)=>{typeof i=="string"&&i.trim().endsWith("!important")?(i=i.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(s,i,"important")):(i=r(s,i),e.style.setProperty(s,i));};if(typeof t=="string"){if(n==null)return getComputedStyle(e).getPropertyValue(t);o(t,n);}else if(typeof t=="object")for(const s in t){const i=t[s];o(s,i);}}createElement(e,t,n){const r=W.document.createElement(e);return typeof t=="string"?(te.setSafeHTML(r,t),r):(t==null&&(t={}),n==null&&(n={}),Object.keys(t).forEach(o=>{const s=t[o];if(o==="innerHTML"){te.setSafeHTML(r,s);return}Reflect.set(r,o,s);}),Object.keys(n).forEach(o=>{let s=n[o];typeof s=="object"?s=JSON.stringify(s):typeof s=="function"&&(s=s.toString()),r.setAttribute(o,s);}),r)}parseTextToDOM(e){return e=e.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),this.createElement("div",{innerHTML:e}).firstChild}getTextBoundingRect(e,t,n,r){if(!e||!("value"in e))return e;if(typeof t=="string"&&(t=parseFloat(t)),(typeof t!="number"||isNaN(t))&&(t=0),t<0?t=0:t=Math.min(e.value.length,t),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<t)&&(n=t),n<0?n=0:n=Math.min(e.value.length,n),typeof e.createTextRange=="function"){const v=e.createTextRange();return v.collapse(true),v.moveStart("character",t),v.moveEnd("character",n-t),v.getBoundingClientRect()}const o=A();let s=o.top,i=o.left;const l=T("width",true),c=T("height",true);let f="white-space:pre;padding:0;margin:0;";const d=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];s+=T("padding-top",true),s+=T("border-top-width",true),i+=T("padding-left",true),i+=T("border-left-width",true),i+=1;for(let v=0;v<d.length;v++){const C=d[v];f+=C+":"+T(C,false)+";";}const u=e.value||"G",m=u.length,y=document.createElement("div");t>0&&w(0,t);const g=w(t,n);m>n&&w(n,m),y.style.cssText=f,y.style.position="absolute",y.style.top=s+"px",y.style.left=i+"px",y.style.width=l+"px",y.style.height=c+"px",W.document.body.appendChild(y);const x=g.getBoundingClientRect();return r||y.parentNode.removeChild(y),x;function w(v,C){const L=document.createElement("span");return L.style.cssText=f,L.textContent=u.substring(v,C),y.appendChild(L),L}function A(){const v=document.body,C=document.defaultView,L=document.documentElement,D=document.createElement("div");D.style.paddingLeft=D.style.width="1px",v.appendChild(D);const z=D.offsetWidth==2;v.removeChild(D);const X=e.getBoundingClientRect(),Q=L.clientTop||v.clientTop||0,ne=L.clientLeft||v.clientLeft||0,k=C?.pageYOffset||z&&L.scrollTop||v.scrollTop,$=C?.pageXOffset||z&&L.scrollLeft||v.scrollLeft;return {top:X.top+k-Q,left:X.left+$-ne}}function T(v,C){const L=W.document.defaultView.getComputedStyle(e,null).getPropertyValue(v);return C?parseFloat(L):L}}cssHide(e,t=false){e!=null&&(t?p.addClassName(e,ue.hideImportant):p.addClassName(e,ue.hide));}cssShow(e){e!=null&&(p.removeClassName(e,ue.hide),p.removeClassName(e,ue.hideImportant));}parseHTML(e,t=false,n=false){function r(){const s=new DOMParser;return n?s.parseFromString(e,"text/html"):s.parseFromString(e,"text/html").body.firstChild}function o(){const s=W.document.createElement("div");return te.setSafeHTML(s,e),n?s:s.firstChild}return t?r():o()}append(e,t){if(typeof e=="string"&&(e=W.document.querySelector(e)),e==null)return;function n(r,o){typeof t=="string"?r.insertAdjacentHTML("beforeend",te.getSafeHTML(o)):r.appendChild(o);}if(Array.isArray(t)||t instanceof NodeList){const r=W.document.createDocumentFragment();t.forEach(o=>{typeof o=="string"&&(o=this.parseHTML(o,true,false)),r.appendChild(o);}),e.appendChild(r);}else n(e,t);}appendHead(e){W.document.head?W.document.head.appendChild(e):W.document.documentElement.appendChild(e);}appendBody(e){W.document.body?W.document.body.appendChild(e):W.document.documentElement.appendChild(e);}isShow(e){return !!e.getClientRects().length}showElement(e,t){const n=e.cloneNode(true);n.setAttribute("style","visibility: hidden !important;display:block !important;");let r=W.document.documentElement;const o=e.getRootNode();return t==null?o==e?r=W.document.documentElement:r=o:r=t,r.appendChild(n),{cloneNode:n,recovery(){n.remove();}}}getStyleValue(e,t){let n=null,r=null;e instanceof CSSStyleDeclaration?r=e:(n=e.ownerDocument.defaultView,(!n||!n.opener)&&(n=window),r=n.getComputedStyle(e));const o=parseFloat(r[t]);return isNaN(o)?0:o}before(e,t){typeof e=="string"&&(e=W.document.querySelector(e)),e!=null&&(typeof t=="string"?e.insertAdjacentHTML("beforebegin",te.getSafeHTML(t)):e.parentElement.insertBefore(t,e));}after(e,t){typeof e=="string"&&(e=W.document.querySelector(e)),e!=null&&(typeof t=="string"?e.insertAdjacentHTML("afterend",te.getSafeHTML(t)):e.parentElement.insertBefore(t,e.nextSibling));}getKeyFrames(e){const t={};return Object.keys(e.cssRules).forEach(n=>{e.cssRules[n].type===7&&e.cssRules[n].name.startsWith("pops-anim-")&&(t[e.cssRules[n].name]=e.cssRules[n]);}),t}calcColor(){function e(){return {hexToRgb:s=>{let i="";if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(s))return console.warn("输入错误的hex"),"";s=s.replace("#",""),i=s.match(/../g);for(let c=0;c<3;c++)i[c]=parseInt(i[c],16);return i},rgbToHex:(s,i,l)=>{const c=/^\d{1,3}$/;if(!c.test(s)||!c.test(i)||!c.test(l))return console.warn("输入错误的rgb颜色值"),"";const f=[s.toString(16),i.toString(16),l.toString(16)];for(let d=0;d<3;d++)f[d].length==1&&(f[d]=`0${f[d]}`);return `#${f.join("")}`},getDarkColor:(s,i)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(s))return console.warn("输入错误的hex颜色值"),"";const c=e().hexToRgb(s);for(let f=0;f<3;f++)c[f]=Math.floor(c[f]*(1-i));return e().rgbToHex(c[0],c[1],c[2])},getLightColor:(s,i)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(s))return console.warn("输入错误的hex颜色值"),"";const c=e().hexToRgb(s);for(let f=0;f<3;f++)c[f]=Math.floor((255-c[f])*i+c[f]);return e().rgbToHex(c[0],c[1],c[2])}}}return e()}getTransform(e){let t=0,n=0;const r=W.globalThis.getComputedStyle(e).transform;if(r!=="none"&&r!=null&&r!==""){const s=r.match(/\((.+)\)/)?.[1]?.split?.(",");t=Math.abs(parseInt(s[4])),n=Math.abs(parseInt(s[5]));}return {transformLeft:t,transformTop:n}}onInput(e,t,n){let r=false;const o=async l=>{r||await t(l);},s=()=>{r=true;},i=()=>{r=false,this.trigger(e,"input",{isComposite:r});};return this.on(e,"input",o,n),this.on(e,"compositionstart",s,n),this.on(e,"compositionend",i,n),{off:()=>{this.off(e,"input",o,n),this.off(e,"compositionstart",s,n),this.off(e,"compositionend",i,n);}}}}const p=new ps,J={createMask(a,e=101,t=""){return e=e-100,t.startsWith(";")&&(t=t.replace(";","")),`<div class="pops-mask" data-guid="${a}" style="z-index:${e};${t}"></div>`},createAnim(a,e,t,n="",r="",o){const s=t;let i="",l="";const c=s.position||"";t.zIndex!=null&&(i+=`z-index: ${o};`,l+=`z-index: ${o};`),s.width!=null&&(l+=`width: ${s.width};`),s.height!=null&&(l+=`height: ${s.height};`);const f=r.trim()!=="";return `
		<div class="pops-anim" anim="${s.animation||""}" style="${i}" data-guid="${a}">${t.style!=null?`<style tyle="text/css">${t.style}</style>`:""}
			<div class="pops ${t.class||""}" data-bottom-btn="${f}" type-value="${e}" style="${l}" position="${c}" data-guid="${a}">${n}</div>
		</div>`},createHeader(a,e){if(!e.btn)return "";const t=e;if(a!=="iframe"&&!t.btn?.close?.enable)return "";let n="",r="";const o=e;if(a==="iframe"&&o.topRightButton?.trim()!==""){let s="";o.topRightButton.split("|").forEach(i=>{i=i.toLowerCase(),s+=`
                <button class="pops-header-control" type="button" data-type="${i}">
                    <i class="pops-icon">${ie.getIcon(i)}</i>
                </button>`;}),n=`
            <div class="pops-header-controls" data-margin>${s}</div>`;}else t.btn?.close?.enable&&(r=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${ie.getIcon("close")}</i>
                    </button>
                </div>`),n=r;return n},createHeaderStyle(a,e){return {headerStyle:e?.title?.html&&e?.title?.style||"",headerPStyle:e?.title?.html?"":e?.title?.style||""}},createBottom(a,e){if(e.btn==null)return "";const t=e;if(!(e.btn?.ok?.enable||t.btn?.cancel?.enable||t.btn?.other?.enable))return "";let n="",r="",o="",s="",i="";if(e.btn.position&&(n+=`justify-content: ${e.btn.position};`),t.btn.reverse&&(n+="flex-direction: row-reverse;"),e.btn?.ok?.enable){let l="";(e.btn.ok.size==="large"||e.btn.ok.size==="small")&&(l="pops-button-"+e.btn.ok.size);let c="";const f=t.btn.ok.icon;if(f!==""){let d="";ie.hasIcon(f)?d=ie.getIcon(f):d=f,d=d||"",c=`<i class="pops-bottom-icon" is-loading="${e.btn.ok.iconIsLoading}">${d}</i>`;}o=`
            <button 
				class="pops-${a}-btn-ok ${l}"
				type="button"
				data-type="${t.btn.ok?.type}"
				data-has-icon="${(t.btn.ok.icon||"")!==""}"
				data-rightIcon="${t.btn.ok?.rightIcon}"
            >${c}<span>${e.btn.ok.text}</span>
            </button>`;}if(t.btn?.cancel?.enable){let l="";(t.btn.cancel.size==="large"||t.btn.cancel.size==="small")&&(l="pops-button-"+t.btn.cancel.size);let c="";const f=t.btn.cancel.icon;if(f!==""){let d="";ie.hasIcon(f)?d=ie.getIcon(f):d=f,d=d||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.cancel.iconIsLoading}">${d}</i>`;}s=`
            <button
				class="pops-${a}-btn-cancel ${l}"
				type="button"
				data-type="${t.btn.cancel.type}"
				data-has-icon="${(t.btn.cancel.icon||"")!==""}"
				data-rightIcon="${t.btn.cancel.rightIcon}"
            >${c}<span>${t.btn.cancel.text}</span>
            </button>`;}if(t.btn?.other?.enable){let l="";(t.btn.other.size==="large"||t.btn.other.size==="small")&&(l="pops-button-"+t.btn.other.size);let c="";const f=t.btn.other.icon;if(f!==""){let d="";ie.hasIcon(f)&&(d=ie.getIcon(f)),d=d||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.other.iconIsLoading}">${d}</i>`;}i=`
            <button
				class="pops-${a}-btn-other ${l}"
				type="button"
				data-type="${t.btn.other.type}"
				data-has-icon="${(t.btn.other.icon||"")!==""}"
				data-rightIcon="${t.btn.other.rightIcon}"
            >${c}<span>${t.btn.other.text}</span>
            </button>`;}if(t.btn.merge){let l="display: flex;";t.btn.mergeReverse?l+="flex-direction: row-reverse;":l+="flex-direction: row;",r=`
            <div class="pops-botttom-btn-controls pops-${a}-btn" style="${n}">${i}<div 
                    class="pops-${a}-btn-merge"
                    style="${l}">${o}${s}</div>
            </div>
            `;}else r=`<div class="pops-botttom-btn-controls pops-${a}-btn" style="${n}">${o}${s}${i}</div>`;return r},createContentStyle(a,e){return {contentStyle:e?.content?.html&&e?.content?.style||"",contentPStyle:e?.content?.html?"":e?.content?.style||""}},parseElement(a){return p.parseTextToDOM(a)}};var us=`@charset "utf-8";\r
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
  --pops-color: #000000;\r
  --pops-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
  --pops-bd-color: rgb(235, 238, 245, var(--pops-bd-opacity));\r
  --pops-box-shadow-color: rgba(0, 0, 0, 0.12);\r
  --pops-title-color: #000000;\r
  --pops-title-border-color: var(--pops-bd-color);\r
  --pops-content-color: #000000;\r
  --pops-bottom-btn-controls-border-color: var(--pops-bd-color);\r
  --pops-components-is-disabled-text-color: #a8abb2;\r
  --pops-components-is-disabled-bg-color: #f5f7fa;\r
}\r
@media (prefers-color-scheme: dark) {\r
  .pops {\r
    --pops-mask-bg-opacity: 0.8;\r
    --pops-color: #ffffff;\r
    --pops-bg-color: rgb(17, 17, 17, var(--pops-bg-opacity));\r
    --pops-bd-color: rgb(55, 55, 55, var(--pops-bd-opacity));\r
    --pops-box-shadow-color: rgba(81, 81, 81, 0.12);\r
    --pops-title-color: #e8e8e8;\r
    --pops-title-border-color: var(--pops-bd-color);\r
    --pops-content-color: #e5e5e5;\r
    --pops-components-is-disabled-text-color: #a8abb2;\r
    --pops-components-is-disabled-bg-color: #262727;\r
  }\r
}\r
.pops {\r
  color: var(--pops-color);\r
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
.pops-header-controls button.pops-header-control[data-type="max"],\r
.pops-header-controls button.pops-header-control[data-type="mise"],\r
.pops-header-controls button.pops-header-control[data-type="min"] {\r
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
`,bs=`.pops[position="top_left"] {\r
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
`,hs=`/* ::-webkit-scrollbar 是非标准的css */\r
/* https://caniuse.com/?search=%20%3A%3A-webkit-scrollbar */\r
.pops ::-webkit-scrollbar {\r
  width: 6px;\r
  height: 0;\r
}\r
\r
/* 滚动条轨道 */\r
.pops ::-webkit-scrollbar-track {\r
  width: 0;\r
}\r
/* 滚动条滑块 */\r
.pops ::-webkit-scrollbar-thumb {\r
  min-height: 28px;\r
  border-radius: 2em;\r
  background: rgb(204, 204, 204, var(--pops-bg-opacity, 1));\r
  background-clip: padding-box;\r
}\r
/* 滚动条滑块 */\r
.pops ::-webkit-scrollbar-thumb:hover {\r
  background: rgb(178, 178, 178, var(--pops-bg-opacity, 1));\r
}\r
`,ms=`.pops {\r
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
  --button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);\r
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
  --button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);\r
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
  --button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);\r
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
  --button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);\r
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
  --button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);\r
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
  --button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);\r
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
  --button-xiaomi-primary-focus-visible-outline: 2px solid var(--button-xiaomi-primary-focus-visible-outline-color);\r
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
  --button-violet-focus-visible-outline: 2px solid var(--button-violet-focus-visible-outline-color);\r
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
    --button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);\r
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
    --button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);\r
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
    --button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);\r
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
    --button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);\r
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
    --button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);\r
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
    --button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);\r
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
  margin: var(--button-margin-top) var(--button-margin-right) var(--button-margin-bottom) var(--button-margin-left);\r
  padding: var(--button-padding-top) var(--button-padding-right) var(--button-padding-bottom) var(--button-padding-left);\r
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
  border: 1px solid var(--button-bd-color);\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
.pops-panel-button-right-icon .pops-panel-button_inner {\r
  flex-direction: row-reverse;\r
}\r
.pops-panel-button .pops-panel-button_inner i:has(svg),\r
.pops-panel-button-right-icon .pops-panel-button-text {\r
  margin-right: 6px;\r
}\r
\r
.pops button[data-type="default"] {\r
  --button-color: var(--button-default-color);\r
  --button-bd-color: var(--button-default-bd-color);\r
  --button-bg-color: var(--button-default-bg-color);\r
}\r
.pops button[data-type="default"]:active {\r
  --button-color: var(--button-default-active-color);\r
  --button-bd-color: var(--button-default-active-bd-color);\r
  --button-bg-color: var(--button-default-active-bg-color);\r
}\r
.pops button[data-type="default"]:hover {\r
  --button-color: var(--button-default-hover-color);\r
  --button-bd-color: var(--button-default-hover-bd-color);\r
  --button-bg-color: var(--button-default-hover-bg-color);\r
}\r
.pops button[data-type="default"]:focus-visible {\r
  outline: var(--button-default-focus-visible-outline);\r
  outline-offset: var(--button-default-focus-visible-outline-offset);\r
}\r
.pops button[data-type="default"]:disabled {\r
  --button-color: var(--button-default-disabled-color);\r
  --button-bd-color: var(--button-default-disabled-bd-color);\r
  --button-bg-color: var(--button-default-disabled-bg-color);\r
}\r
\r
.pops button[data-type="primary"] {\r
  --button-color: var(--button-primary-color);\r
  --button-bd-color: var(--button-primary-bd-color);\r
  --button-bg-color: var(--button-primary-bg-color);\r
}\r
.pops button[data-type="primary"]:active {\r
  --button-color: var(--button-primary-active-color);\r
  --button-bd-color: var(--button-primary-active-bd-color);\r
  --button-bg-color: var(--button-primary-active-bg-color);\r
}\r
.pops button[data-type="primary"]:hover {\r
  --button-color: var(--button-primary-hover-color);\r
  --button-bd-color: var(--button-primary-hover-bd-color);\r
  --button-bg-color: var(--button-primary-hover-bg-color);\r
}\r
.pops button[data-type="primary"]:focus-visible {\r
  outline: var(--button-primary-focus-visible-outline);\r
  outline-offset: var(--button-primary-focus-visible-outline-offset);\r
}\r
.pops button[data-type="primary"]:disabled {\r
  --button-color: var(--button-primary-disabled-color);\r
  --button-bd-color: var(--button-primary-disabled-bd-color);\r
  --button-bg-color: var(--button-primary-disabled-bg-color);\r
}\r
\r
.pops button[data-type="success"] {\r
  --button-color: var(--button-success-color);\r
  --button-bd-color: var(--button-success-bd-color);\r
  --button-bg-color: var(--button-success-bg-color);\r
}\r
.pops button[data-type="success"]:active {\r
  --button-color: var(--button-success-active-color);\r
  --button-bd-color: var(--button-success-active-bd-color);\r
  --button-bg-color: var(--button-success-active-bg-color);\r
}\r
.pops button[data-type="success"]:hover {\r
  --button-color: var(--button-success-hover-color);\r
  --button-bd-color: var(--button-success-hover-bd-color);\r
  --button-bg-color: var(--button-success-hover-bg-color);\r
}\r
.pops button[data-type="success"]:focus-visible {\r
  outline: var(--button-success-focus-visible-outline);\r
  outline-offset: var(--button-success-focus-visible-outline-offset);\r
}\r
.pops button[data-type="success"]:disabled {\r
  --button-color: var(--button-success-disabled-color);\r
  --button-bd-color: var(--button-success-disabled-bd-color);\r
  --button-bg-color: var(--button-success-disabled-bg-color);\r
}\r
\r
.pops button[data-type="info"] {\r
  --button-color: var(--button-info-color);\r
  --button-bd-color: var(--button-info-bd-color);\r
  --button-bg-color: var(--button-info-bg-color);\r
}\r
.pops button[data-type="info"]:active {\r
  --button-color: var(--button-info-active-color);\r
  --button-bd-color: var(--button-info-active-bd-color);\r
  --button-bg-color: var(--button-info-active-bg-color);\r
}\r
.pops button[data-type="info"]:hover {\r
  --button-color: var(--button-info-hover-color);\r
  --button-bd-color: var(--button-info-hover-bd-color);\r
  --button-bg-color: var(--button-info-hover-bg-color);\r
}\r
.pops button[data-type="info"]:focus-visible {\r
  outline: var(--button-info-focus-visible-outline);\r
  outline-offset: var(--button-info-focus-visible-outline-offset);\r
}\r
.pops button[data-type="info"]:disabled {\r
  --button-color: var(--button-info-disabled-color);\r
  --button-bd-color: var(--button-info-disabled-bd-color);\r
  --button-bg-color: var(--button-info-disabled-bg-color);\r
}\r
\r
.pops button[data-type="warning"] {\r
  --button-color: var(--button-warning-color);\r
  --button-bd-color: var(--button-warning-bd-color);\r
  --button-bg-color: var(--button-warning-bg-color);\r
}\r
.pops button[data-type="warning"]:active {\r
  --button-color: var(--button-warning-active-color);\r
  --button-bd-color: var(--button-warning-active-bd-color);\r
  --button-bg-color: var(--button-warning-active-bg-color);\r
}\r
.pops button[data-type="warning"]:hover {\r
  --button-color: var(--button-warning-hover-color);\r
  --button-bd-color: var(--button-warning-hover-bd-color);\r
  --button-bg-color: var(--button-warning-hover-bg-color);\r
}\r
.pops button[data-type="warning"]:focus-visible {\r
  outline: var(--button-warning-focus-visible-outline);\r
  outline-offset: var(--button-warning-focus-visible-outline-offset);\r
}\r
.pops button[data-type="warning"]:disabled {\r
  --button-color: var(--button-warning-disabled-color);\r
  --button-bd-color: var(--button-warning-disabled-bd-color);\r
  --button-bg-color: var(--button-warning-disabled-bg-color);\r
}\r
\r
.pops button[data-type="danger"] {\r
  --button-color: var(--button-danger-color);\r
  --button-bd-color: var(--button-danger-bd-color);\r
  --button-bg-color: var(--button-danger-bg-color);\r
}\r
.pops button[data-type="danger"]:active {\r
  --button-color: var(--button-danger-active-color);\r
  --button-bd-color: var(--button-danger-active-bd-color);\r
  --button-bg-color: var(--button-danger-active-bg-color);\r
}\r
.pops button[data-type="danger"]:hover {\r
  --button-color: var(--button-danger-hover-color);\r
  --button-bd-color: var(--button-danger-hover-bd-color);\r
  --button-bg-color: var(--button-danger-hover-bg-color);\r
}\r
.pops button[data-type="danger"]:focus-visible {\r
  outline: var(--button-danger-focus-visible-outline);\r
  outline-offset: var(--button-danger-focus-visible-outline-offset);\r
}\r
.pops button[data-type="danger"]:disabled {\r
  --button-color: var(--button-danger-disabled-color);\r
  --button-bd-color: var(--button-danger-disabled-bd-color);\r
  --button-bg-color: var(--button-danger-disabled-bg-color);\r
}\r
\r
.pops button[data-type="xiaomi-primary"] {\r
  --button-color: var(--button-xiaomi-primary-color);\r
  --button-bd-color: var(--button-xiaomi-primary-bd-color);\r
  --button-bg-color: var(--button-xiaomi-primary-bg-color);\r
}\r
.pops button[data-type="xiaomi-primary"]:active {\r
  --button-color: var(--button-xiaomi-primary-active-color);\r
  --button-bd-color: var(--button-xiaomi-primary-active-bd-color);\r
  --button-bg-color: var(--button-xiaomi-primary-active-bg-color);\r
}\r
.pops button[data-type="xiaomi-primary"]:hover {\r
  --button-color: var(--button-xiaomi-primary-hover-color);\r
  --button-bd-color: var(--button-xiaomi-primary-hover-bd-color);\r
  --button-bg-color: var(--button-xiaomi-primary-hover-bg-color);\r
}\r
.pops button[data-type="xiaomi-primary"]:focus-visible {\r
  outline: var(--button-xiaomi-primary-focus-visible-outline);\r
  outline-offset: var(--button-xiaomi-primary-focus-visible-outline-offset);\r
}\r
.pops button[data-type="xiaomi-primary"]:disabled {\r
  --button-color: var(--button-xiaomi-primary-disabled-color);\r
  --button-bd-color: var(--button-xiaomi-primary-disabled-bd-color);\r
  --button-bg-color: var(--button-xiaomi-primary-disabled-bg-color);\r
}\r
\r
.pops button[data-type="violet"] {\r
  --button-color: var(--button-violet-color);\r
  --button-bd-color: var(--button-violet-bd-color);\r
  --button-bg-color: var(--button-violet-bg-color);\r
}\r
.pops button[data-type="violet"]:active {\r
  --button-color: var(--button-violet-active-color);\r
  --button-bd-color: var(--button-violet-active-bd-color);\r
  --button-bg-color: var(--button-violet-active-bg-color);\r
}\r
.pops button[data-type="violet"]:hover {\r
  --button-color: var(--button-violet-hover-color);\r
  --button-bd-color: var(--button-violet-hover-bd-color);\r
  --button-bg-color: var(--button-violet-hover-bg-color);\r
}\r
.pops button[data-type="violet"]:focus-visible {\r
  outline: var(--button-violet-focus-visible-outline);\r
  outline-offset: var(--button-violet-focus-visible-outline-offset);\r
}\r
.pops button[data-type="violet"]:disabled {\r
  --button-color: var(--button-violet-disabled-color);\r
  --button-bd-color: var(--button-violet-disabled-bd-color);\r
  --button-bg-color: var(--button-violet-disabled-bg-color);\r
}\r
`,gs=`.pops-flex-items-center {\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
}\r
.pops-line-height-center {\r
  line-height: normal;\r
  align-content: center;\r
}\r
.pops-width-fill {\r
  width: -webkit-fill-available;\r
  width: -moz-available;\r
}\r
.pops-text-is-disabled {\r
  --pops-text-is-disabled-color: #a8abb2;\r
  color: var(--pops-text-is-disabled-color);\r
  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color);\r
}\r
.pops-text-is-disabled-important {\r
  --pops-text-is-disabled-color: #a8abb2;\r
  color: var(--pops-text-is-disabled-color) !important;\r
  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color) !important;\r
}\r
`,ys=`@keyframes rotating {\r
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
    display: none;\r
  }\r
  to {\r
    display: block;\r
    opacity: 1;\r
  }\r
}\r
@keyframes searchSelectFalOut {\r
  from {\r
    display: block;\r
    opacity: 1;\r
  }\r
  to {\r
    opacity: 0;\r
    display: none;\r
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
    transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  4.16667% {\r
    transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  6.25% {\r
    transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  8.33333% {\r
    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  10.4167% {\r
    transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  12.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  14.5833% {\r
    transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  16.6667% {\r
    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  18.75% {\r
    transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  20.8333% {\r
    transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  22.9167% {\r
    transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  25% {\r
    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  27.0833% {\r
    transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  29.1667% {\r
    transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  31.25% {\r
    transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  33.3333% {\r
    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  35.4167% {\r
    transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  37.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  39.5833% {\r
    transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  41.6667% {\r
    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  43.75% {\r
    transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  45.8333% {\r
    transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  47.9167% {\r
    transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  50% {\r
    opacity: 1;\r
    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  52.0833% {\r
    transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  54.1667% {\r
    transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  56.25% {\r
    transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  58.3333% {\r
    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  60.4167% {\r
    transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  62.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  64.5833% {\r
    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  66.6667% {\r
    transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  68.75% {\r
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  70.8333% {\r
    transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  72.9167% {\r
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  75% {\r
    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  77.0833% {\r
    transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  79.1667% {\r
    transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  81.25% {\r
    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  83.3333% {\r
    transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  85.4167% {\r
    transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  87.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  89.5833% {\r
    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  91.6667% {\r
    transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  93.75% {\r
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  95.8333% {\r
    transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  97.9167% {\r
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
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
    transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  95.8333% {\r
    transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  93.75% {\r
    transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  91.6667% {\r
    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  89.5833% {\r
    transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  87.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  85.4167% {\r
    transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  83.3333% {\r
    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  81.25% {\r
    transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  79.1667% {\r
    transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  77.0833% {\r
    transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  75% {\r
    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  72.9167% {\r
    transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  70.8333% {\r
    transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  68.75% {\r
    transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  66.6667% {\r
    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  64.5833% {\r
    transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  62.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  60.4167% {\r
    transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  58.3333% {\r
    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  56.25% {\r
    transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  54.1667% {\r
    transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  52.0833% {\r
    transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  50% {\r
    opacity: 1;\r
    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  47.9167% {\r
    transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  45.8333% {\r
    transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  43.75% {\r
    transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  41.6667% {\r
    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  39.5833% {\r
    transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  37.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  35.4167% {\r
    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  33.3333% {\r
    transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  31.25% {\r
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  29.1667% {\r
    transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  27.0833% {\r
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  25% {\r
    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  22.9167% {\r
    transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  20.8333% {\r
    transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  18.75% {\r
    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  16.6667% {\r
    transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  14.5833% {\r
    transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  12.5% {\r
    transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  10.4167% {\r
    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  8.33333% {\r
    transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  6.25% {\r
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  4.16667% {\r
    transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  2.08333% {\r
    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
  }\r
  0% {\r
    opacity: 1;\r
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r
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
`,xs="",ws="",vs=`.pops[type-value="prompt"] {\r
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
`,As=`.pops[type-value="loading"] {\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
`,Es=`.pops[type-value="iframe"] {\r
  --container-title-height: 55px;\r
  transition:\r
    width 0.35s ease,\r
    height 0.35s ease;\r
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
.pops[type-value="iframe"].pops[type-module="min"] .pops-header-control[data-type="min"] {\r
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
`,Ts=`.pops-tip {\r
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
  padding: var(--tooltip-padding-top) var(--tooltip-padding-right) var(--tooltip-padding-bottom)\r
    var(--tooltip-padding-left);\r
  max-width: 400px;\r
  max-height: 300px;\r
  border-radius: var(--tooltip-bd-radius);\r
  background-color: var(--tooltip-bg-color);\r
  box-shadow:\r
    0 1.5px 4px var(--tooltip-box-shadow-left-color),\r
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
  box-shadow:\r
    0 1px 7px var(--tooltip-arrow-box-shadow-left-color),\r
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
  box-shadow:\r
    0 1px 7px var(--tooltip-arrow-box-shadow-left-color),\r
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
`,Ss=`.pops[type-value="drawer"] {\r
  position: fixed;\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-direction: column;\r
  box-shadow:\r
    0px 16px 48px 16px rgba(0, 0, 0, 0.08),\r
    0px 12px 32px rgba(0, 0, 0, 0.12),\r
    0px 8px 16px -8px rgba(0, 0, 0, 0.16);\r
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
`,Cs=`.pops-folder-list {\r
  --folder-arrow-fill-color: #d4d7de;\r
  --folder-arrow-active-fill-color: #06a7ff;\r
  --header-breadcrumb-text-color: #06a7ff;\r
  --header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);\r
  --header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);\r
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
    --pops-bottom-btn-controls-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r
  }\r
  .pops-folder-list {\r
    --header-breadcrumb-text-color: #06a7ff;\r
    --header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);\r
    --header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);\r
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
`,ks=`.pops[type-value="panel"] {\r
  --pops-bg-color: #f2f2f2;\r
  --pops-color: #333333;\r
  --panel-title-bg-color: #ffffff;\r
\r
  --panel-aside-bg-color: #ffffff;\r
  --panel-aside-hover-color: rgb(64, 158, 255);\r
  --panel-aside-hover-bg-color: rgba(64, 158, 255, 0.1);\r
\r
  --pops-panel-forms-margin-top-bottom: 10px;\r
  --pops-panel-forms-margin-left-right: 20px;\r
  --pops-panel-forms-header-icon-size: calc(var(--pops-panel-forms-container-li-padding-left-right) + 1px);\r
  --pops-panel-forms-header-padding-top-bottom: 15px;\r
  --pops-panel-forms-header-padding-left-right: 10px;\r
  --pops-panel-forms-container-item-left-text-gap: 6px;\r
  --pops-panel-forms-container-item-left-desc-text-size: 0.8em;\r
  --pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;\r
  --pops-panel-forms-container-item-bg-color: #ffffff;\r
  --pops-panel-forms-container-item-title-color: #333;\r
  --pops-panel-forms-container-item-border-radius: 6px;\r
  --pops-panel-forms-container-item-margin-top-bottom: 10px;\r
  --pops-panel-forms-container-item-margin-left-right: var(--pops-panel-forms-margin-left-right);\r
  --pops-panel-forms-container-li-border-color: var(--pops-bd-color);\r
  --pops-panel-forms-container-li-padding-top-bottom: 12px;\r
  --pops-panel-forms-container-li-padding-left-right: 16px;\r
\r
  --pops-panel-forms-container-deepMenu-item-active-bg: #e9e9e9;\r
}\r
.pops[type-value="panel"] {\r
  color: var(--pops-color);\r
  background: var(--pops-bg-color);\r
}\r
.pops[type-value] .pops-panel-title {\r
  background: var(--panel-title-bg-color);\r
}\r
\r
/* ↓panel的CSS↓ */\r
/* 左侧的列表 */\r
aside.pops-panel-aside {\r
  box-sizing: border-box;\r
  flex-shrink: 0;\r
  max-width: 200px;\r
  min-width: 100px;\r
  height: 100%;\r
  background: var(--panel-aside-bg-color);\r
  border-right: 1px solid var(--panel-aside-bg-color);\r
  font-size: 0.9em;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-between;\r
}\r
aside.pops-panel-aside {\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
}\r
aside.pops-panel-aside .pops-panel-aside-top-container {\r
  overflow: auto;\r
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
aside.pops-panel-aside ul li:not(.pops-panel-disabled-aside-hover-css):hover {\r
  color: var(--panel-aside-hover-color);\r
  background: var(--panel-aside-hover-bg-color);\r
}\r
/* 左侧的列表 */\r
\r
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
\r
.pops-panel-section-wrapper {\r
  width: 100%;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
section.pops-panel-container {\r
  width: 100%;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
section.pops-panel-container .pops-panel-container-header-ul,\r
section.pops-panel-container .pops-panel-deepMenu-container-header-ul {\r
  border-bottom: 1px solid rgba(223, 223, 223, var(--pops-bg-opacity));\r
  flex: 0 auto;\r
}\r
section.pops-panel-container .pops-panel-container-header-ul li,\r
section.pops-panel-container .pops-panel-container-header-ul li.pops-panel-container-header-title-text {\r
  display: flex;\r
  justify-content: flex-start !important;\r
  margin: 0px !important;\r
  padding: var(--pops-panel-forms-header-padding-top-bottom)\r
    calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right));\r
  text-align: left;\r
}\r
section.pops-panel-container ul.pops-panel-container-main-ul {\r
  overflow: auto;\r
  /*flex: 1;*/\r
}\r
section.pops-panel-container > ul li:not(.pops-panel-forms-container-item) {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin: var(--pops-panel-forms-margin-top-bottom)\r
    calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-margin-left-right));\r
  gap: 10px;\r
}\r
section.pops-panel-container .pops-panel-forms-container-item-header-text {\r
  margin: 10px;\r
  margin-left: calc(\r
    var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right)\r
  );\r
  font-size: 0.9em;\r
  text-align: left;\r
  color: var(--pops-panel-forms-container-item-title-color);\r
}\r
section.pops-panel-container li.pops-panel-forms-container-item {\r
  /* 去除<li>左侧的圆点 */\r
  display: block;\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist {\r
  border-radius: var(--pops-panel-forms-container-item-border-radius);\r
  background: var(--pops-panel-forms-container-item-bg-color);\r
  margin: var(--pops-panel-forms-container-item-margin-top-bottom) var(--pops-panel-forms-margin-left-right);\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist li {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: var(--pops-panel-forms-container-li-padding-top-bottom)\r
    var(--pops-panel-forms-container-li-padding-left-right);\r
  margin: 0px 0px;\r
  border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);\r
  text-align: left;\r
}\r
/*section.pops-panel-container\r
	.pops-panel-forms-container-item\r
	ul\r
	li.pops-panel-deepMenu-nav-item {\r
	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px;\r
	margin: 0px var(--pops-panel-forms-container-li-padding-left-right);\r
	border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);\r
}*/\r
section.pops-panel-container\r
  .pops-panel-forms-container-item\r
  ul.pops-panel-forms-container-item-formlist\r
  li:last-child {\r
  border: 0px;\r
}\r
/* 左侧的文字 */\r
section.pops-panel-container .pops-panel-item-left-text {\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--pops-panel-forms-container-item-left-text-gap);\r
}\r
\r
/* 左侧的主文字 */\r
/*section.pops-panel-container .pops-panel-item-left-main-text {\r
	\r
}*/\r
/* 左侧的描述文字 */\r
section.pops-panel-container .pops-panel-item-left-desc-text {\r
  font-size: var(--pops-panel-forms-container-item-left-desc-text-size);\r
  color: var(--pops-panel-forms-container-item-left-desc-text-color);\r
}\r
\r
/* 折叠面板 */\r
section.pops-panel-container .pops-panel-forms-fold {\r
  border-radius: var(--pops-panel-forms-container-item-border-radius);\r
  background: var(--pops-panel-forms-container-item-bg-color);\r
  margin: var(--pops-panel-forms-margin-top-bottom) var(--pops-panel-forms-margin-left-right);\r
}\r
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container {\r
  display: flex;\r
  align-items: center;\r
  fill: #6c6c6c;\r
  justify-content: space-between;\r
  margin: 0px var(--pops-panel-forms-container-li-padding-left-right) !important;\r
  padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px !important;\r
}\r
section.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-fold-container-icon {\r
  transform: rotate(90deg);\r
}\r
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container-icon {\r
  width: 15px;\r
  height: 15px;\r
  display: flex;\r
  align-items: center;\r
  transform: rotate(-90deg);\r
  transition: transform 0.3s;\r
}\r
/* 折叠状态 */\r
section.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-container-item-formlist {\r
  height: 0;\r
}\r
/* 非折叠状态 */\r
section.pops-panel-container .pops-panel-forms-fold ul.pops-panel-forms-container-item-formlist {\r
  margin: 0;\r
}\r
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-container-item-formlist {\r
  transition: height 0.3s;\r
  overflow: hidden;\r
  border-radius: unset;\r
  background: unset;\r
  margin: 0;\r
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
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-forms-container-item > div {\r
    text-align: left;\r
    --pops-panel-forms-margin-left-right: 0px;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-forms-container-item ul {\r
    margin: 0px !important;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container > ul > li {\r
    margin: 10px 10px;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container > ul > li div:nth-child(2) {\r
    max-width: 55%;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-select select {\r
    min-width: 88px !important;\r
    width: -webkit-fill-available;\r
    width: -moz-available;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-container-header-ul li {\r
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
  --panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r
  --panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r
  --panel-switch-circle-color: #dcdfe6;\r
  --panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
  --panel-switch-checked-circle-color: #409eff;\r
  --panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r
  --panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r
}\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
.pops-panel-switch input.pops-panel-switch__input:disabled + .pops-panel-switch__core {\r
  cursor: not-allowed;\r
  opacity: 0.6;\r
}\r
.pops-panel-switch span.pops-panel-switch__core {\r
  display: inline-flex;\r
  position: relative;\r
  align-items: center;\r
  min-width: 40px;\r
  height: 20px;\r
  border: 1px solid var(--panel-switch-core-bd-color);\r
  outline: 0;\r
  border-radius: 10px;\r
  box-sizing: border-box;\r
  background: var(--panel-switch-core-bg-color);\r
  cursor: pointer;\r
  transition:\r
    border-color 0.3s,\r
    background-color 0.3s;\r
}\r
.pops-panel-switch .pops-panel-switch__action {\r
  position: absolute;\r
  left: 1px;\r
  border-radius: 100%;\r
  transition: all 0.3s;\r
  width: 16px;\r
  height: 16px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  background-color: var(--panel-switch-circle-bg-color);\r
  color: var(--panel-switch-circle-color);\r
}\r
.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {\r
  border-color: var(--panel-switch-checked-core-bd-color);\r
  background-color: var(--panel-switch-checked-core-bg-color);\r
}\r
.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {\r
  left: calc(100% - 17px);\r
  color: var(--panel-switch-checked-circle-color);\r
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
section.pops-panel-container .pops-panel-slider input[type="range"]::-webkit-slider-thumb {\r
  width: 20px;\r
  height: 20px;\r
  border-radius: 50%;\r
  border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r
  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
  box-shadow:\r
    0 0 2px rgba(0, 0, 0, 0.3),\r
    0 3px 5px rgba(0, 0, 0, 0.2);\r
  cursor: pointer;\r
  -webkit-appearance: none;\r
  appearance: none;\r
  border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r
}\r
section.pops-panel-container .pops-panel-slider input[type="range"]::-moz-range-thumb {\r
  width: 20px;\r
  height: 20px;\r
  border-radius: 50%;\r
  border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));\r
  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
  box-shadow:\r
    0 0 2px rgba(0, 0, 0, 0.3),\r
    0 3px 5px rgba(0, 0, 0, 0.2);\r
  cursor: pointer;\r
  -webkit-appearance: none;\r
  appearance: none;\r
}\r
section.pops-panel-container .pops-panel-slider input[type="range"]::-moz-range-progress {\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
  --el-disabled-text-color: #a8abb2;\r
  --el-disabled-bg-color: #f5f7fa;\r
  --el-disabled-border-color: #e4e7ed;\r
\r
  --pops-panel-components-input-text-color: #000000;\r
  --pops-panel-components-input-text-bg-color: transparent;\r
  --pops-panel-components-input-text-default-padding: 8px;\r
  --pops-panel-components-input-bd-color: #dcdfe6;\r
  --pops-panel-components-input-bg-color: #ffffff;\r
  --pops-panel-components-input-hover-bd-color: #c0c4cc;\r
  --pops-panel-components-input-focus-bd-color: #409eff;\r
  --pops-panel-components-input-suffix-color: #a8abb2;\r
  --pops-panel-components-input-suffix-bg-color: #ffffff;\r
}\r
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
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r
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
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
  /*margin-right: calc(1em + 8px);*/\r
  margin: 0px;\r
  padding: var(--pops-panel-components-input-text-default-padding);\r
}\r
.pops-panel-input span.pops-panel-input__suffix {\r
  display: inline-flex;\r
  white-space: nowrap;\r
  flex-shrink: 0;\r
  flex-wrap: nowrap;\r
  height: 100%;\r
  text-align: center;\r
  color: var(--pops-panel-components-input-suffix-color);\r
  background: var(--pops-panel-components-input-suffix-bg-color);\r
  transition: all 0.3s;\r
  pointer-events: none;\r
  padding: 0 8px;\r
  position: absolute;\r
  right: 0px;\r
  border-top-right-radius: 4px;\r
  border-bottom-right-radius: 4px;\r
  border: 1px solid transparent;\r
}\r
.pops-panel-input span.pops-panel-input__suffix-inner {\r
  pointer-events: all;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
/* 如果包含清空图标的按钮，则默认隐藏清空图标，当:hover、:focus、:focus-within、:active时显示清空图标 */\r
.pops-panel-input span.pops-panel-input__suffix:has(svg[data-type="circleClose"]) {\r
  display: none;\r
}\r
.pops-panel-input:hover span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),\r
.pops-panel-input:focus span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),\r
.pops-panel-input:focus-within span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),\r
.pops-panel-input:active span.pops-panel-input__suffix:has(svg[data-type="circleClose"]) {\r
  display: inline-flex;\r
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
  background-color: var(--pops-components-is-disabled-bg-color);\r
}\r
.pops-panel-input.pops-input-disabled:hover {\r
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r
}\r
.pops-panel-input input:disabled,\r
.pops-panel-input input:disabled + .pops-panel-input__suffix {\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
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
.pops-panel-textarea {\r
  --pops-panel-components-textarea-text-color: #000000;\r
  --pops-panel-components-textarea-text-bg-color: #ffffff;\r
  --pops-panel-components-textarea-bd-color: #dcdfe6;\r
  --pops-panel-components-textarea-hover-bd-color: #c0c4cc;\r
  --pops-panel-components-textarea-focus-bd-color: #409eff;\r
}\r
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
  --pops-panel-components-textarea-hover-bd-color: var(--pops-panel-components-textarea-bd-color);\r
}\r
.pops-panel-textarea-disable {\r
  --pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color) !important;\r
  --pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);\r
}\r
.pops-panel-textarea-disable textarea {\r
  cursor: not-allowed;\r
}\r
.pops-panel-textarea textarea:focus {\r
  outline: 0;\r
  border-color: var(--pops-panel-components-textarea-focus-bd-color);\r
}\r
/* textarea的CSS */\r
\r
/* select的CSS */\r
.pops-panel-select {\r
  --pops-panel-components-select-text-color: #000000;\r
  --pops-panel-components-select-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));\r
  --pops-panel-components-select-hover-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));\r
  --pops-panel-components-select-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
}\r
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
  border: 1px solid var(--pops-panel-components-select-hover-bd-color);\r
}\r
.pops-panel-select-disable {\r
  --pops-panel-components-select-text-color: var(--pops-components-is-disabled-text-color);\r
  --pops-panel-components-select-bg-color: var(--pops-components-is-disabled-bg-color);\r
}\r
.pops-panel-select-disable select {\r
  cursor: not-allowed;\r
}\r
.pops-panel-select-disable select:hover {\r
  box-shadow: none;\r
  --pops-panel-components-select-hover-bd-color: var(--pops-panel-components-select-bd-color);\r
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
  --el-border-color: #cbcbcb;\r
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
  border: 1px solid var(--el-border-color);\r
}\r
.pops-panel-select-multiple .el-select__wrapper.is-focused {\r
  --el-border-color: var(--el-color-primary);\r
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
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
}\r
.pops-panel-select-multiple .el-select__selected-item.el-select__choose_tag .el-tag {\r
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
  -moz-user-select: none;\r
  -ms-user-select: none;\r
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
.pops-panel-select-multiple-disable {\r
  --el-fill-color-blank: #f5f7fa;\r
  --color: #a8abb2;\r
  --el-border-color: #cbcbcb;\r
}\r
.pops-panel-select-multiple-disable .el-tag.el-tag--info {\r
  --el-tag-bg-color: #e7e7e7;\r
  --el-tag-text-color: var(--pops-components-is-disabled-text-color);\r
}\r
.pops-panel-select-multiple-disable .el-select__selection .el-tag,\r
.pops-panel-select-multiple-disable .el-tag .el-tag__close:hover,\r
.pops-panel-select-multiple-disable .el-select__wrapper,\r
.pops-panel-select-multiple-disable .el-select__caret {\r
  cursor: not-allowed;\r
}\r
/* select-multiple的CSS*/\r
\r
/* deepMenu的css */\r
.pops-panel-deepMenu-nav-item {\r
  cursor: pointer;\r
}\r
.pops-panel-deepMenu-nav-item:active {\r
  background: var(--pops-panel-forms-container-deepMenu-item-active-bg);\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:active {\r
  padding: var(--pops-panel-forms-container-li-padding-top-bottom)\r
    var(--pops-panel-forms-container-li-padding-left-right);\r
  margin: 0px;\r
}\r
/* 去除上个兄弟item的底部边框颜色 */\r
section.pops-panel-container .pops-panel-forms-container-item ul li:has(+ .pops-panel-deepMenu-nav-item:active) {\r
  border-bottom: 1px solid transparent;\r
}\r
/* 第一个和最后一个跟随圆角 */\r
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:first-child:active {\r
  border-top-left-radius: var(--pops-panel-forms-container-item-border-radius);\r
  border-top-right-radius: var(--pops-panel-forms-container-item-border-radius);\r
}\r
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:last-child:active {\r
  border-bottom-left-radius: var(--pops-panel-forms-container-item-border-radius);\r
  border-bottom-right-radius: var(--pops-panel-forms-container-item-border-radius);\r
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
section.pops-panel-deepMenu-container .pops-panel-container-header-ul li.pops-panel-deepMenu-container-header {\r
  display: flex;\r
  align-items: center;\r
  width: -webkit-fill-available;\r
  width: -moz-available;\r
  padding: var(--pops-panel-forms-header-padding-top-bottom)\r
    calc(\r
      var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right) -\r
        var(--pops-panel-forms-header-icon-size)\r
    );\r
  gap: 0px;\r
}\r
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r
  width: var(--pops-panel-forms-header-icon-size);\r
  height: var(--pops-panel-forms-header-icon-size);\r
  display: flex;\r
  align-items: center;\r
  cursor: pointer;\r
}\r
/* 修复safari上图标大小未正常显示 */\r
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon > svg {\r
  width: inherit;\r
  height: inherit;\r
}\r
/* deepMenu的css */\r
\r
/* 文字对齐 */\r
.pops-panel-item-left-desc-text:has(code) {\r
  display: flex;\r
  align-items: baseline;\r
  flex-wrap: wrap;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  .pops[type-value="panel"] {\r
    --pops-bg-color: #000000;\r
    --pops-color: #f2f2f2;\r
    --panel-title-bg-color: #000000;\r
    --panel-aside-bg-color: #262626;\r
    --pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;\r
    --pops-panel-forms-container-item-bg-color: #262626;\r
    --pops-panel-forms-container-item-title-color: #c1c1c1;\r
\r
    --pops-panel-forms-container-li-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));\r
    --pops-panel-forms-container-deepMenu-item-active-bg: #333333;\r
  }\r
  .pops[type-value="panel"] .pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r
    fill: #f2f2f2;\r
  }\r
\r
  /* switch的CSS */\r
  .pops-panel-switch {\r
    --panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r
    --panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r
    --panel-switch-circle-color: #dcdfe6;\r
    --panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
    --panel-switch-checked-circle-color: #409eff;\r
    --panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r
    --panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r
  }\r
  /* select的CSS */\r
  .pops-panel-select {\r
    --pops-panel-components-select-text-color: #f2f2f2;\r
    --pops-panel-components-select-bd-color: rgb(51, 51, 51, var(--pops-bd-opacity));\r
    --pops-panel-components-select-bg-color: #141414;\r
  }\r
  /* select-multiple的CSS*/\r
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
  .pops-panel-select-multiple-disable {\r
    --el-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));\r
  }\r
  .pops-panel-select-multiple-disable .el-tag.el-tag--info {\r
    --el-tag-bg-color: #2f2f2f;\r
  }\r
  /* select-multiple的CSS*/\r
  /* slider的CSS */\r
  .pops-slider {\r
    --pops-slider-border-color-light: #414243;\r
  }\r
  /* input的CSS */\r
  .pops-panel-input {\r
    --pops-panel-components-input-text-color: #f2f2f2;\r
    --pops-panel-components-input-bd-color: #4f5052;\r
    --pops-panel-components-input-bg-color: #141414;\r
    --pops-panel-components-input-hover-bd-color: #6f7175;\r
    --pops-panel-components-input-focus-bd-color: #409eff;\r
    --pops-panel-components-input-suffix-color: #a8abb2;\r
  }\r
  /* textarea的CSS */\r
  .pops-panel-textarea {\r
    --pops-panel-components-textarea-text-color: #f2f2f2;\r
    --pops-panel-components-textarea-text-bg-color: #141414;\r
    --pops-panel-components-textarea-bd-color: #4f5052;\r
    --pops-panel-components-textarea-hover-bd-color: #6f7175;\r
    --pops-panel-components-textarea-focus-bd-color: #409eff;\r
  }\r
  .pops-panel-textarea-disable {\r
    --pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);\r
    --pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color);\r
  }\r
  /* slider */\r
  .pops-slider {\r
    --pops-slider-text-color-placeholder: #8d9095;\r
  }\r
}\r
`,Ms=`.pops-rightClickMenu {\r
  --pops-right-context-color: #000000;\r
  --pops-right-context-bg-color: rgb(255, 255, 255, 0.733);\r
  --pops-right-context-backdrop-filter: blur(10px);\r
  --pops-right-context-z-index: 10000;\r
  --pops-right-context-bd-radius: 6px;\r
  --pops-right-context-menu-shadow-color: rgb(114, 114, 114, 0.251);\r
  --pops-right-context-menu-row-bd-radius: 6px;\r
  --pops-right-context-menu-row-visited-color: rgb(0, 0, 0, 0.067);\r
  --pops-right-context-menu-row-hover-color: rgb(0, 0, 0, 0.067);\r
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
  z-index: var(--pops-right-context-z-index);\r
  text-align: center;\r
  border-radius: var(--pops-right-context-bd-radius);\r
  font-size: 16px;\r
  font-weight: 500;\r
  color: var(--pops-right-context-color);\r
  background: var(--pops-right-context-bg-color);\r
  box-shadow: 0 0.25rem 0.5rem 0.125rem var(--pops-right-context-menu-shadow-color);\r
  -webkit-backdrop-filter: var(--pops-right-context-backdrop-filter);\r
  backdrop-filter: var(--pops-right-context-backdrop-filter);\r
}\r
/* scale动画 */\r
.pops-rightClickMenu-anim-scale {\r
  transition:\r
    opacity 150ms cubic-bezier(0.2, 0, 0.2, 1),\r
    transform 150ms cubic-bezier(0.2, 0, 0.2, 1);\r
  transform: scale(0.85);\r
}\r
.pops-rightClickMenu-anim-scale-open {\r
  transform: scale(1);\r
}\r
.pops-rightClickMenu-anim-scale-not-open {\r
  opacity: 0;\r
}\r
/* 展开动画 */\r
.pops-rightClickMenu-anim-grid {\r
  display: grid;\r
  transition: 0.3s;\r
  grid-template-rows: 0fr;\r
}\r
.pops-rightClickMenu-anim-show {\r
  grid-template-rows: 1fr;\r
}\r
.pops-rightClickMenu-is-visited {\r
  background: var(--pops-right-context-menu-row-visited-color);\r
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
  background: var(--pops-right-context-menu-row-hover-color);\r
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
  border-radius: var(--pops-right-context-menu-row-bd-radius);\r
  display: flex;\r
  width: -webkit-fill-available;\r
  width: -moz-available;\r
  text-align: left;\r
  align-items: center;\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  /*.pops-rightClickMenu {\r
		--pops-right-context-menu-shadow-color: #3c3c3c;\r
	}*/\r
}\r
@media (hover: hover) {\r
  .pops-rightClickMenu ul li:active {\r
    transform: scale(0.98);\r
  }\r
}\r
`;const q={index:us,ninePalaceGridPosition:bs,scrollbar:hs,button:ms,common:gs,anim:ys,alertCSS:xs,confirmCSS:ws,promptCSS:vs,loadingCSS:As,iframeCSS:Es,tooltipCSS:Ts,drawerCSS:Ss,folderCSS:Cs,panelCSS:ks,rightClickMenu:Ms},ot={$data:{},$flag:{isInit:false},init(){if(!this.$flag.isInit){this.$flag.isInit=true;const a=document.createElement("style");te.setSafeHTML(a,q.anim),p.appendHead(a),this.$data=null,this.$data=p.getKeyFrames(a.sheet),V.setTimeout(()=>{a.remove();},50);}},hasAnim(a){return Object.prototype.hasOwnProperty.call(this.$data,a)}},me={alert:[],confirm:[],drawer:[],folder:[],iframe:[],loading:[],panel:[],prompt:[],rightClickMenu:[],tooltip:[]},be={getMaxZIndexNodeInfo(a=1,e=W.document,t){a=Number.isNaN(a)?1:a;const n=2*Math.pow(10,9);let r=0,o=null;function s(l){return l.position!=="static"&&l.display!=="none"}function i(l){if(typeof t=="function"){const f=t(l);if(typeof f=="boolean"&&!f)return}const c=W.window.getComputedStyle(l);if(s(c)){const f=parseInt(c.zIndex);isNaN(f)||f>r&&(r=f,o=l),l.shadowRoot!=null&&l instanceof ShadowRoot&&l.shadowRoot.querySelectorAll("*").forEach(d=>{i(d);});}}return e.querySelectorAll("*").forEach(l=>{i(l);}),r+=a,r>=n&&(r=n),{node:o,zIndex:r}},getPopsMaxZIndex(a=1){a=Number.isNaN(a)?1:a;const e=2*Math.pow(10,9);let t=0,n=null;function r(s){return s.position!=="static"&&s.display!=="none"}Object.keys(me).forEach(s=>{const i=me[s];for(let l=0;l<i.length;l++){const c=i[l],f=window.getComputedStyle(c.animElement);if(r(f)){const d=parseInt(f.zIndex);isNaN(d)||d>t&&(t=d,n=c.animElement);}}}),t+=a;const o=t>=e;return o&&(t=e),{zIndex:t,animElement:n,isOverMaxZIndex:o}},getMaxZIndex(a=1){return this.getMaxZIndexNodeInfo(a).zIndex},removeInstance(a,e,t=false){function n(r){typeof r.beforeRemoveCallBack=="function"&&r.beforeRemoveCallBack(r),r?.animElement?.remove(),r?.popsElement?.remove(),r?.maskElement?.remove(),r?.$shadowContainer?.remove();}return a.forEach(r=>{r.forEach((o,s)=>{if(t||o.guid===e){const i=o.animElement.getAttribute("anim");if(ot.hasAnim(i)){const l=i+"-reverse";o.animElement.style.width="100%",o.animElement.style.height="100%",o.animElement.style["animation-name"]=l,ot.hasAnim(o.animElement.style["animation-name"])?p.on(o.animElement,p.getAnimationEndNameList(),function(){n(o);},{capture:true}):n(o);}else n(o);r.splice(s,1);}});}),a},hide(a,e,t,n,r,o){return new Promise(s=>{const i=r.querySelector(".pops[type-value]");if(a==="drawer"){const c=n;V.setTimeout(()=>{o.style.setProperty("display","none"),["top","bottom"].includes(c.direction)?i.style.setProperty("height","0"):["left","right"].includes(c.direction)?i.style.setProperty("width","0"):console.error("未知direction：",c.direction),s();},c.closeDelay);}else {const c=e.find(f=>f.guid===t);if(c){const f=c;if(f.animElement.style.width="100%",f.animElement.style.height="100%",Reflect.set(f.animElement.style,"animation-name",f.animElement.getAttribute("anim")+"-reverse"),ot.hasAnim(Reflect.get(f.animElement.style,"animation-name"))){let d=function(){f.animElement.style.display="none",f.maskElement&&(f.maskElement.style.display="none"),p.off(f.animElement,p.getAnimationEndNameList(),d,{capture:true}),s();};p.on(f.animElement,p.getAnimationEndNameList(),d,{capture:true});}else f.animElement.style.display="none",f.maskElement&&(f.maskElement.style.display="none"),s();}}})},show(a,e,t,n,r,o){return new Promise(s=>{const i=r.querySelector(".pops[type-value]");if(a==="drawer"){const c=n;V.setTimeout(()=>{p.css(o,"display","");const f=c.direction,d=c.size.toString();["top","bottom"].includes(f)?i.style.setProperty("height",d):["left","right"].includes(f)?i.style.setProperty("width",d):console.error("未知direction：",f),s();},c.openDelay??0);}else {const c=e.find(f=>f.guid===t);if(c){const f=c;if(f.animElement.style.width="",f.animElement.style.height="",Reflect.set(f.animElement.style,"animation-name",f.animElement.getAttribute("anim").replace("-reverse","")),ot.hasAnim(Reflect.get(f.animElement.style,"animation-name"))){let d=function(){p.off(f.animElement,p.getAnimationEndNameList(),d,{capture:true}),s();};f.animElement.style.display="",f.maskElement&&(f.maskElement.style.display=""),p.on(f.animElement,p.getAnimationEndNameList(),d,{capture:true});}else f.animElement.style.display="",f.maskElement&&(f.maskElement.style.display=""),s();}}})},close(a,e,t,n,r){return new Promise(o=>{const s=r.querySelector(".pops[type-value]"),i=n;function l(){function c(d){d.propertyName==="transform"&&(p.off(s,p.getTransitionEndNameList(),void 0,c),be.removeInstance([e],t),o());}if(p.on(s,p.getTransitionEndNameList(),c),getComputedStyle(s).transform!=="none"){p.trigger(s,p.getTransitionEndNameList(),void 0,true);return}["top"].includes(i.direction)?s.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(i.direction)?s.style.setProperty("transform","translateY(100%)"):["left"].includes(i.direction)?s.style.setProperty("transform","translateX(-100%)"):["right"].includes(i.direction)?s.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",i.direction);}a==="drawer"?V.setTimeout(()=>{l();},i.closeDelay):(be.removeInstance([e],t),o());})},drag(a,e){e=Object.assign({limit:true,extraDistance:3,container:W.globalThis,triggerClick:true},e);let t=false,n=0,r=0;const o=V.AnyTouch(),s=new o(e.dragElement,{preventDefault(u){return typeof e.preventEvent=="function"?e.preventEvent(u):true}});p.css(e.dragElement,{cursor:"move"});function i(u){const m=u.style.transitionDuration;return globalThis.getComputedStyle(u).transitionDuration!=="0s"&&(u.style.transitionDuration="0s"),()=>{u.style.transitionDuration=m;}}function l(u){return u=u??globalThis,{width:p.width(u),height:p.height(u)}}function c(u){if(u=u??globalThis,V.isWin(u))return {left:0,top:0};{const m=u.getBoundingClientRect();return {left:m.left,top:m.top}}}let f=p.getTransform(a),d=null;s.on("pan",function(u){if(!t){t=true;const g=e.dragElement.getBoundingClientRect();n=u.x-g.left,r=u.y-g.top,f=p.getTransform(a),d=i(a);}let m=u.x-n+f.transformLeft,y=u.y-r+f.transformTop;if(u.phase==="move"){if(e.limit){const g=l(e.container).width-p.width(a)+f.transformLeft,{left:x,top:w}=c(e.container),A=l(e.container).height-p.height(a)+f.transformTop;m>g&&(m=g),y>A&&(y=A),m-e.extraDistance*2<x+f.transformLeft?(m=x+f.transformLeft,m+=e.extraDistance):m-=e.extraDistance,y-e.extraDistance*2<w+f.transformTop?(y=w+f.transformTop,y+=e.extraDistance):y-=e.extraDistance;}typeof e.moveCallBack=="function"&&e.moveCallBack(a,m,y),p.css(a,{left:m+"px",top:y+"px"});}u.phase==="end"&&(t=false,typeof d=="function"&&(d(),d=null),typeof e.endCallBack=="function"&&e.endCallBack(a,m,y));}),e.triggerClick&&s.on(["tap"],function(u){u.changedPoints.forEach(m=>{p.trigger(m.target,"click",void 0,true);});});},sortElementListByProperty(a,e,t=true){if(typeof t!="boolean")throw new TypeError("参数 sortByDesc 必须为boolean类型");if(a==null||e==null)throw new Error("获取前面的值或后面的值的方法不能为空");return function(n,r){const o=a(r),s=e(n);return t?s>o?-1:s<o?1:0:s<o?-1:s>o?1:0}}},I={handlerShadow(a){const e=document.createElement("div");if(e.className="pops-shadow-container",a.useShadowRoot){const t=e.attachShadow({mode:"open"});return {$shadowContainer:e,$shadowRoot:t}}else return {$shadowContainer:e,$shadowRoot:e}},handleInit(a,e){if(ot.init(),!!arguments.length&&a!=null&&e!=null){if(typeof e=="string"){if(e.trim()==="")return;e=[{css:e}];}else e=e.map(t=>typeof t=="string"?{css:t}:t);for(const t of e){const n=p.createElement("style",{},{"data-type":"PopsHandler.handleInit"});n.textContent=t.css,typeof t.name=="string"&&n.setAttribute("data-name",t.name),a.appendChild(n);}}},handleMask(a={}){const e={maskElement:p.parseTextToDOM(a.maskHTML)};let t=false;function n(o){p.preventEvent(o);const s=me[a.type];function i(){if(a.config.mask.clickEvent.toClose)return be.close(a.type,s,a.guid,a.config,a.animElement);if(a.config.mask.clickEvent.toHide)return be.hide(a.type,s,a.guid,a.config,a.animElement,e.maskElement)}return typeof a.config.mask.clickCallBack=="function"?a.config.mask.clickCallBack(i,a.config):i(),false}if(a.config.mask.clickEvent.toClose||a.config.mask.clickEvent.toHide){let o=function(s){return !!(s?.localName?.toLowerCase()==="div"&&s.className&&s.className==="pops-anim"&&s.hasAttribute("anim"))};p.on(a.animElement,["touchstart","mousedown"],void 0,s=>{const i=s.composedPath()[0];t=o(i);}),p.on(a.animElement,"click",void 0,s=>{const i=s.composedPath()[0];if(o(i)&&t)return n(s)}),p.on(e.maskElement,"click",void 0,s=>{t=true,n(s);});}return e},handleQueryElement(a,e){return {popsElement:a.querySelector(".pops[type-value"),btnOkElement:a.querySelector(`.pops-${e}-btn-ok`),btnCancelElement:a.querySelector(`.pops-${e}-btn-cancel`),btnOtherElement:a.querySelector(`.pops-${e}-btn-other`),titleElement:a.querySelector(`.pops-${e}-title`),inputElement:a.querySelector(`.pops-${e}-content textarea[pops]`)?a.querySelector(`.pops-${e}-content textarea[pops]`):a.querySelector(`.pops-${e}-content input[pops]`),headerControlsElement:a.querySelector(".pops-header-controls"),iframeElement:a.querySelector("iframe[pops]"),loadingElement:a.querySelector(".pops-loading"),contentElement:a.querySelector(`.pops-${e}-content`),panelSectionWrapper:a.querySelector(`.pops-${e}-section-wrapper`),contentAsideElement:a.querySelector(`.pops-${e}-content aside.pops-${e}-aside`),contentSectionContainerElement:a.querySelector(`.pops-${e}-content section.pops-${e}-container`),contentLoadingElement:a.querySelector(`.pops-${e}-content-global-loading`),headerMinBtnElement:a.querySelector(".pops-header-control[data-type='min']"),headerMaxBtnElement:a.querySelector(".pops-header-control[data-type='max']"),headerMiseBtnElement:a.querySelector(".pops-header-control[data-type='mise']"),headerCloseBtnElement:a.querySelector(".pops-header-control[data-type='close']"),folderListElement:a.querySelector(".pops-folder-list"),folderListHeaderElement:a.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),folderListHeaderRowElement:a.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),folderListBodyElement:a.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),folderFileListBreadcrumbPrimaryElement:a.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),folderListSortFileNameElement:a.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),folderListSortLatestTimeElement:a.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),folderListSortFileSizeElement:a.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventDetails(a,e,t,n,r,o,s,i){return {$shadowContainer:e,$shadowRoot:t,element:r,animElement:r,popsElement:o,maskElement:s,mode:n,guid:a,close(){return be.close(n,me[n],a,i,r)},hide(){return be.hide(n,me[n],a,i,r,s)},show(){return be.show(n,me[n],a,i,r,s)}}},handleLoadingEventDetails(a,e,t,n,r,o){return {element:t,animElement:t,popsElement:n,maskElement:r,mode:e,guid:a,close(){return be.close(e,me[e],a,o,t)},hide(){return be.hide(e,me[e],a,o,t,r)},show(){return be.show(e,me[e],a,o,t,r)}}},handleResultDetails(a){const e=Object.assign({},a);return V.delete(e,"type"),V.delete(e,"function"),e},handleClickEvent(a,e,t,n){p.on(e,"click",r=>{n(Object.assign(t,{type:a}),r);},{capture:true});},handleKeyboardEvent(a,e=[],t){const n=function(r){const o=r.code||r.key,s=r.charCode||r.keyCode||r.which;e.includes("ctrl")&&!r.ctrlKey||e.includes("alt")&&!r.altKey||e.includes("meta")&&!r.metaKey||e.includes("shift")&&!r.shiftKey||(typeof a=="string"&&a===o?t&&t(r):typeof a=="number"&&a===s&&t&&t(r));};return p.on(W.globalThis,"keydown",n,{capture:true}),{removeKeyboardEvent(){p.off(globalThis,"keydown",n,{capture:true});}}},handlePromptClickEvent(a,e,t,n,r){p.on(t,"click",o=>{const s={type:a,text:e.value};r(Object.assign(n,s),o);},{capture:true});},handleZIndex(a){return typeof a=="function"?a():a},handleOnly(a,e){if(e.only)if(a==="loading"||a==="tooltip"||a==="rightClickMenu"){const t=me[a];t&&be.removeInstance([t],"",true);}else be.removeInstance([me.alert,me.confirm,me.prompt,me.iframe,me.drawer,me.folder,me.panel],"",true);else {const t=e.zIndex;e.zIndex=()=>{const{zIndex:n}=be.getPopsMaxZIndex(I.handleZIndex(t)+100);return n};}return e},handlePush(a,e){me[a].push(e);}},Ls=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:true,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback:function(a){a.close();}},close:{enable:true,callback:function(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),gr={init(a){const e=V.getRandomGUID(),t="alert";let n=Ls();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"button",css:q.button},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"alertCSS",css:q.alertCSS}]);const s=I.handleZIndex(n.zIndex),i=J.createMask(e,s),l=J.createHeader(t,n),c=J.createBottom(t,n),{headerStyle:f,headerPStyle:d}=J.createHeaderStyle(t,n),{contentStyle:u,contentPStyle:m}=J.createContentStyle(t,n),y=J.createAnim(e,t,n,`
			<div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${t}-content" style="${u}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${m}">${n.content.text}</p>`}</div>${c}`,c,s),g=J.parseElement(y),{popsElement:x,headerCloseBtnElement:w,btnOkElement:A,titleElement:T}=I.handleQueryElement(g,t);let v=null;const C=[g];n.mask.enable&&(v=I.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:i}).maskElement,C.push(v));const L=I.handleEventDetails(e,r,o,t,g,x,v,n);return I.handleClickEvent("close",w,L,n.btn.close.callback),I.handleClickEvent("ok",A,L,n.btn.ok.callback),p.append(o,C),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),v!=null&&g.after(v),I.handlePush(t,{guid:e,animElement:g,popsElement:x,maskElement:v,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(x,{dragElement:T,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),I.handleResultDetails(L)}},$s=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Is={init(a){const e=V.getRandomGUID(),t="confirm";let n=$s();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"button",css:q.button},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"confirmCSS",css:q.confirmCSS}]);const s=I.handleZIndex(n.zIndex),i=J.createMask(e,s),l=J.createHeader(t,n),c=J.createBottom(t,n),{headerStyle:f,headerPStyle:d}=J.createHeaderStyle(t,n),{contentStyle:u,contentPStyle:m}=J.createContentStyle(t,n),y=J.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
                        <div class="pops-content pops-${t}-content" style="${u}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${m}">${n.content.text}</p>`}</div>${c}`,c,s),g=J.parseElement(y),{popsElement:x,titleElement:w,headerCloseBtnElement:A,btnOkElement:T,btnCancelElement:v,btnOtherElement:C}=I.handleQueryElement(g,t);let L=null;const D=[g];n.mask.enable&&(L=I.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:i}).maskElement,D.push(L));const z=I.handleEventDetails(e,r,o,t,g,x,L,n);return I.handleClickEvent("close",A,z,n.btn.close.callback),I.handleClickEvent("ok",T,z,n.btn.ok.callback),I.handleClickEvent("cancel",v,z,n.btn.cancel.callback),I.handleClickEvent("other",C,z,n.btn.other.callback),p.append(o,D),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),L!=null&&g.after(L),I.handlePush(t,{guid:e,animElement:g,popsElement:x,maskElement:L,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(x,{dragElement:w,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),I.handleResultDetails(z)}},_s=()=>({title:{enable:true,position:"center",text:"默认标题",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",zIndex:1e4,only:false,direction:"right",size:"30%",lockScroll:false,closeOnPressEscape:true,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:false}),Rs={init(a){const e=V.getRandomGUID(),t="drawer";let n=_s();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"button",css:q.button},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"drawerCSS",css:q.drawerCSS}]);const s=I.handleZIndex(n.zIndex),i=J.createMask(e,s),l=J.createHeader(t,n),c=J.createBottom(t,n),{headerStyle:f,headerPStyle:d}=J.createHeaderStyle(t,n),{contentStyle:u,contentPStyle:m}=J.createContentStyle(t,n),y=J.createAnim(e,t,n,`
            ${n.title.enable?`<div class="pops-title pops-${t}-title" style="${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="width: 100%;text-align: ${n.title.position};${d}">${n.title.text}</p>`}${l}</div>`:""}
            <div class="pops-content pops-${t}-content" style="${u}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${m}">${n.content.text}</p>`}</div>${c}`,c,s),g=J.parseElement(y),{popsElement:x,headerCloseBtnElement:w,btnCancelElement:A,btnOkElement:T,btnOtherElement:v}=I.handleQueryElement(g,t),C=x,L=w,D=A,z=T,X=v;let Q=null;const ne=[g];n.mask.enable&&(Q=I.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:i}).maskElement,ne.push(Q));const k=I.handleEventDetails(e,r,o,t,g,C,Q,n);return C.setAttribute("direction",n.direction),n.direction==="top"?(C.style.setProperty("height","0"),C.style.setProperty("border-radius",`0px 0px ${n.borderRadius}px ${n.borderRadius}px`)):n.direction==="bottom"?(C.style.setProperty("height","0"),C.style.setProperty("border-radius",`${n.borderRadius}px ${n.borderRadius}px 0px 0px`)):n.direction==="left"?(C.style.setProperty("width","0"),C.style.setProperty("border-radius",`0px ${n.borderRadius}px 0px ${n.borderRadius}px`)):n.direction==="right"&&(C.style.setProperty("width","0"),C.style.setProperty("border-radius",`${n.borderRadius}px 0px ${n.borderRadius}px 0px`)),n.closeOnPressEscape&&I.handleKeyboardEvent("Escape",[],function(){k.close();}),[{type:"close",ele:L},{type:"cancel",ele:D},{type:"ok",ele:z},{type:"other",ele:X}].forEach(h=>{I.handleClickEvent(h.type,h.ele,k,E=>{typeof n.btn[h.type].callback=="function"&&n.btn[h.type].callback(E);});}),ne.forEach(h=>{h.style.setProperty("display","none"),["top"].includes(n.direction)?(C.style.setProperty("height",n.size.toString()),C.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(n.direction)?(C.style.setProperty("height",n.size.toString()),C.style.setProperty("transform","translateY(100%)")):["left"].includes(n.direction)?(C.style.setProperty("width",n.size.toString()),C.style.setProperty("transform","translateX(-100%)")):["right"].includes(n.direction)&&(C.style.setProperty("width",n.size.toString()),C.style.setProperty("transform","translateX(100%)")),h.style.setProperty("display","");}),p.append(o,ne),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),V.setTimeout(()=>{V.setTimeout(()=>{C.style.setProperty("transform","");},n.openDelay);},50),Q!=null&&g.after(Q),I.handlePush(t,{guid:e,animElement:g,popsElement:C,maskElement:Q,$shadowContainer:r,$shadowRoot:o}),I.handleResultDetails(k)}},Ns=()=>({parent:document.body,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:true,class:"",only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:false,isAbsolute:false,style:null,addIndexCSS:true}),Wt={init(a){let e=Ns();e=V.assign(e,ye.getGlobalConfig()),e=V.assign(e,a);const t=V.getRandomGUID(),n="loading";e=I.handleOnly(n,e);const r=I.handleZIndex(e.zIndex),o=J.createMask(t,r),{contentPStyle:s}=J.createContentStyle("loading",e),i=J.createAnim(t,n,e,`
            <div class="pops-content pops-${n}-content">${e.addIndexCSS?`
                <style data-model-name="index">${q.index}</style>
                <style data-model-name="anim">${q.anim}</style>
                <style data-model-name="common">${q.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${q.loadingCSS}
                </style>
            ${e.style!=null?`<style>${e.style}</style>`:""}
            	<p pops class="pops-${n}-content-text" style="${s}">${e.content.text}</p>
            </div>`,"",r),l=J.parseElement(i),{popsElement:c}=I.handleQueryElement(l,n);let f=null;const d=[l];e.mask.enable&&(f=I.handleMask({type:n,guid:t,config:e,animElement:l,maskHTML:o}).maskElement,d.push(f));const u=I.handleLoadingEventDetails(t,n,l,c,f,e);return p.append(e.parent,d),f!=null&&l.after(f),I.handlePush(n,{guid:t,animElement:l,popsElement:c,maskElement:f}),e.isAbsolute&&(p.css(l,"position","absolute !important"),f&&p.css(f,"position","absolute !important")),I.handleResultDetails(u)}},Os=()=>({title:{text:"pops.Folder",position:"center",html:false,style:""},sort:{name:"latestTime",isDesc:false,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"测试文件夹2222",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}]}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}],btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"500px",height:window.innerHeight<450?"70vh":"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),ce={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="},Ps={init(a){const e=V.getRandomGUID(),t="folder";let n=Os();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"button",css:q.button},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"folderCSS",css:q.folderCSS}]),Reflect.set(ce,"docx",ce.doc),Reflect.set(ce,"rtf",ce.doc),Reflect.set(ce,"xlsx",ce.xls),Reflect.set(ce,"pptx",ce.ppt),Reflect.set(ce,"dmg",ce.ipa),Reflect.set(ce,"json",ce.js);const s=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],i=["jpg","jpeg","ico","webp"],l=["htm","py","vue","bat","sh","vbs","java","kt"],c=["apk","apkm","xapk"];s.forEach(K=>{ce[K]=ce.zip;}),i.forEach(K=>{ce[K]=ce.png;}),l.forEach(K=>{ce[K]=ce.html;}),c.forEach(K=>{ce[K]=ce.apk;}),a?.folder&&Reflect.set(n,"folder",a.folder);const f=I.handleZIndex(n.zIndex),d=J.createMask(e,f),u=J.createHeader(t,n),m=J.createBottom(t,n),{headerStyle:y,headerPStyle:g}=J.createHeaderStyle(t,n),x=J.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${y}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${g}">${n.title.text}</p>`}${u}</div>
			<div class="pops-content pops-${t}-content ${V.isPhone()?"pops-mobile-folder-content":""}">
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
							${V.isPhone()?'<col width="100%">':`
								<col width="52%">
								<col width="24%">
								<col width="16%">`}
							</colgroup>
							<tbody></tbody>
						</table>
                    </div>
                </div>
            </div>${m}`,m,f),w=J.parseElement(x),{popsElement:A,titleElement:T,contentElement:v,folderListBodyElement:C,folderFileListBreadcrumbPrimaryElement:L,headerCloseBtnElement:D,btnOkElement:z,btnCancelElement:X,btnOtherElement:Q,folderListSortFileNameElement:ne,folderListSortLatestTimeElement:k,folderListSortFileSizeElement:$}=I.handleQueryElement(w,t);let S=null;const h=[w];n.mask.enable&&(S=I.handleMask({type:t,guid:e,config:n,animElement:w,maskHTML:d}).maskElement,h.push(S));const E=I.handleEventDetails(e,r,o,t,w,A,S,n);I.handleClickEvent("close",D,E,n.btn.close.callback),I.handleClickEvent("ok",z,E,n.btn.ok.callback),I.handleClickEvent("cancel",X,E,n.btn.cancel.callback),I.handleClickEvent("other",Q,E,n.btn.other.callback),p.append(o,h),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),S!=null&&w.after(S);class P{init(){n.folder.sort(),this.initFolderView(n.folder);const U=L.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");Reflect.set(U,"_config_",n.folder),p.on(U,"click",R=>{this.setBreadcrumbClickEvent(R,true,n.folder);}),p.on(ne.closest("th"),"click",R=>{this.arrowToSortFolderInfoView(ne,R,"fileName");},{capture:true}),p.on(k.closest("th"),"click",R=>{this.arrowToSortFolderInfoView(k,R,"latestTime");},{capture:true}),p.on($.closest("th"),"click",R=>{this.arrowToSortFolderInfoView($,R,"fileSize");},{capture:true}),n.sort.name==="fileName"?p.trigger(ne,"click",{notChangeSortRule:true}):n.sort.name==="latestTime"?p.trigger(k,"click",{notChangeSortRule:true}):n.sort.name==="fileSize"&&p.trigger($,"click",{notChangeSortRule:true});}createFolderRowElement(U,R="-",F="-",ee=false){const Y=U,oe=R,ge=F,xe=p.createElement("tr"),he=p.createElement("td"),pe=p.createElement("td"),Me=p.createElement("td");let et="",Oe=ce.folder;if(ee)R="",F="";else {Oe="",typeof R=="number"&&(R=V.formatTime(R)),typeof F=="number"&&(F=V.formatByteToSize(F));for(const Nt in ce)if(U.toLowerCase().endsWith("."+Nt)){et=Nt,Oe=ce[Nt];break}Oe||(et="Null",Oe=ce.Null);}xe.className="pops-folder-list-table__body-row",he.className="pops-folder-list-table__body-td",pe.className="pops-folder-list-table__body-td",Me.className="pops-folder-list-table__body-td",te.setSafeHTML(he,`
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${Oe}" alt="${et}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${U}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${U}
						</a>
					</div>
				</div>
            `),te.setSafeHTML(pe,`
				<div class="pops-folder-list__time">
					<span>${R}</span>
				</div>
				`),te.setSafeHTML(Me,`
				<div class="pops-folder-list-format-size">
					<span>${F}</span>
				</div>
				`);const gt={fileName:Y,latestTime:oe,fileSize:ge,isFolder:ee};return Reflect.set(he,"__value__",gt),Reflect.set(pe,"__value__",gt),Reflect.set(Me,"__value__",gt),Reflect.set(xe,"__value__",gt),xe.appendChild(he),xe.appendChild(pe),xe.appendChild(Me),{folderElement:xe,fileNameElement:he,fileTimeElement:pe,fileFormatSize:Me}}createFolderRowElementByMobile(U,R="-",F="-",ee=false){const Y=U,oe=R,ge=F,xe=p.createElement("tr"),he=p.createElement("td");let pe="",Me=ce.folder;if(ee)R="",F="";else {Me="",typeof R=="number"&&(R=V.formatTime(R)),typeof F=="number"&&(F=V.formatByteToSize(F));for(const Oe in ce)if(U.toLowerCase().endsWith("."+Oe)){pe=Oe,Me=ce[Oe];break}Me||(pe="Null",Me=ce.Null);}xe.className="pops-folder-list-table__body-row",he.className="pops-folder-list-table__body-td",te.setSafeHTML(he,`
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${Me}" alt="${pe}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${U}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${U}</a>
						<span>${R} ${F}</span>
					</div>
				</div>
			`);const et={fileName:Y,latestTime:oe,fileSize:ge,isFolder:ee};return Reflect.set(he,"__value__",et),Reflect.set(xe,"__value__",et),xe.appendChild(he),{folderElement:xe,fileNameElement:he}}clearFolderInfoView(){te.setSafeHTML(C,"");}createHeaderArrowIcon(){return p.createElement("div",{className:"iconArrow"})}createBreadcrumb(U,R){return p.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${U}</a>`,_config_:R},{title:U})}setBreadcrumbClickEvent(U,R,F){this.clearFolderInfoView();const Y=U.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(Y)for(;Y.nextElementSibling;)Y.nextElementSibling.remove();else console.error("获取导航按钮失败");const oe=Wt.init({parent:v,content:{text:"获取文件列表中..."},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},addIndexCSS:false});this.initFolderView(F),oe.close();}async enterFolder(U,R){this.clearFolderInfoView();const F=Wt.init({parent:v,content:{text:"获取文件列表中..."},mask:{enable:true},addIndexCSS:false});if(typeof R.clickEvent=="function"){const ee=await R.clickEvent(U,R);L.appendChild(this.createHeaderArrowIcon());const Y=this.createBreadcrumb(R.fileName,ee);L.appendChild(Y),p.on(Y,"click",oe=>{this.setBreadcrumbClickEvent(oe,false,ee);}),this.initFolderView(ee);}F.close();}async downloadFile(U,R,F){p.preventEvent(U);const ee=R.querySelector("a");if(typeof F.clickEvent=="function"){const Y=await F.clickEvent(U,F);if(Y!=null&&typeof Y=="object"&&!Array.isArray(Y)&&typeof Y.url=="string"&&Y.url.trim()!==""&&(ee.setAttribute("href",Y.url),ee.setAttribute("target","_blank"),Y.autoDownload))if((Y.mode==null||Y.mode==="")&&(Y.mode="aBlank"),Y.mode==="a"||Y.mode==="aBlank"){const oe=document.createElement("a");Y.mode==="aBlank"&&oe.setAttribute("target","_blank"),oe.href=Y.url,oe.click();}else if(Y.mode==="open"||Y.mode==="openBlank")Y.mode==="openBlank"?globalThis.open(Y.url,"_blank"):globalThis.open(Y.url);else if(Y.mode==="iframe"){const oe=document.createElement("iframe");oe.src=Y.url,oe.onload=function(){V.setTimeout(()=>{oe.remove();},1e3);},o.appendChild(oe),V.setTimeout(()=>{oe.remove();},180*1e3);}else console.error("未知的下载模式",Y);}}sortFolderConfig(U,R="fileName",F=false){if(R==="fileName"){const ee=U.filter(oe=>oe.isFolder),Y=U.filter(oe=>!oe.isFolder);return ee.sort((oe,ge)=>{const xe=oe[R].toString(),he=ge[R].toString();let pe=xe.localeCompare(he);return F&&(pe>0?pe=-1:pe<0&&(pe=1)),pe}),Y.sort((oe,ge)=>{const xe=oe[R].toString(),he=ge[R].toString();let pe=xe.localeCompare(he);return F&&(pe>0?pe=-1:pe<0&&(pe=1)),pe}),F?[...Y,...ee]:[...ee,...Y]}else return U.sort((ee,Y)=>{let oe=ee[R],ge=Y[R];return R==="fileSize"?(oe=parseFloat(oe.toString()),ge=parseFloat(ge.toString())):R==="latestTime"&&(oe=new Date(oe).getTime(),ge=new Date(ge).getTime()),oe>ge?F?-1:1:oe<ge?F?1:-1:0}),U}initFolderView(U){this.sortFolderConfig(U,n.sort.name,n.sort.isDesc),U.forEach(R=>{if(R.isFolder){const{folderElement:F,fileNameElement:ee}=V.isPhone()?this.createFolderRowElementByMobile(R.fileName,"","",true):this.createFolderRowElement(R.fileName,"","",true);p.on(ee,"click",Y=>{this.enterFolder(Y,R);}),C.appendChild(F);}else {const{folderElement:F,fileNameElement:ee}=V.isPhone()?this.createFolderRowElementByMobile(R.fileName,R.latestTime,R.fileSize,false):this.createFolderRowElement(R.fileName,R.latestTime,R.fileSize,false);p.on(ee,"click",Y=>{this.downloadFile(Y,ee,R);}),C.appendChild(F);}});}removeArrowActiveStatus(){[...Array.from(ne.querySelectorAll(".pops-folder-icon-active")),...Array.from(k.querySelectorAll(".pops-folder-icon-active")),...Array.from($.querySelectorAll(".pops-folder-icon-active"))].forEach(U=>U.classList.remove("pops-folder-icon-active"));}changeArrowActive(U,R,F){this.removeArrowActiveStatus(),F?R.classList.add("pops-folder-icon-active"):U.classList.add("pops-folder-icon-active");}arrowToSortFolderInfoView(U,R,F){Reflect.get(R,"notChangeSortRule")||(n.sort.name=F,n.sort.isDesc=!n.sort.isDesc);const Y=U.querySelector(".pops-folder-icon-arrow-up"),oe=U.querySelector(".pops-folder-icon-arrow-down");if(this.changeArrowActive(Y,oe,n.sort.isDesc),typeof n.sort.callback=="function"&&n.sort.callback(U,R,n.sort.name,n.sort.isDesc))return;const ge=[];Array.from(C.children).forEach(he=>{const pe=Reflect.get(he,"__value__");Reflect.set(pe,"target",he),ge.push(pe);}),this.sortFolderConfig(ge,n.sort.name,n.sort.isDesc).forEach(he=>{C.appendChild(he.target);});}}const _=new P;return _.init(),Reflect.set(A,"data-pops-folder",_),n.drag&&be.drag(A,{dragElement:T,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),I.handlePush(t,{guid:e,animElement:w,popsElement:A,maskElement:S,$shadowContainer:r,$shadowRoot:o}),I.handleResultDetails(E)}},Bs=()=>({title:{position:"center",text:"",html:false,style:""},loading:{enable:true,icon:true,text:""},useShadowRoot:true,class:"",url:window.location.href,only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:true,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",topRightButton:"min|max|mise|close",sandbox:false,forbiddenScroll:false,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}}),Ds={init(a){const e=V.getRandomGUID(),t="iframe";let n=Bs();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n.url==null)throw new Error("config.url不能为空");n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"iframeCSS",css:q.iframeCSS}]);const s=n.animation!=null&&n.animation!=""?"position:absolute;":"",i=I.handleZIndex(n.zIndex),l=J.createMask(e,i,s),c=J.createHeader(t,n),f='<div class="pops-loading"></div>',d=n.title.text.trim()!==""?n.title.text:n.url,{headerStyle:u,headerPStyle:m}=J.createHeaderStyle(t,n),y=J.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${u}">${n.title.html?d:`<p pops class="pops-${t}-title-text" style="${m}">${d}</p>`}${c}</div>
			<div class="pops-content pops-${t}-content">
                <div class="pops-${t}-content-global-loading"></div>
                <iframe src="${n.url}" pops ${n.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
			</div>${n.loading.enable?f:""}`,"",i),g=J.parseElement(y),{popsElement:x,headerCloseBtnElement:w,headerControlsElement:A,titleElement:T,iframeElement:v,loadingElement:C,contentLoadingElement:L,headerMinBtnElement:D,headerMaxBtnElement:z,headerMiseBtnElement:X}=I.handleQueryElement(g,t);let Q=W.document.querySelector(".pops-iframe-container");Q||(Q=W.document.createElement("div"),Q.className="pops-iframe-container",Q.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;",p.appendBody(Q));let ne=null;const k=[g];n.mask.enable&&(ne=I.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:l}).maskElement,k.push(ne));const $=I.handleEventDetails(e,r,o,t,g,x,ne,n);$.iframeElement=v,p.on(g,p.getAnimationEndNameList(),function(){g.style.width="0%",g.style.height="0%";}),p.on(v,"load",()=>{C?.remove(),L.style.animation="iframeLoadingChange_85 0.3s forwards",p.on(L,p.getAnimationEndNameList(),()=>{L.remove();}),n.title.text.trim()===""&&v.contentDocument&&(T.querySelector("p").innerText=v.contentDocument.title),n.loadEndCallBack($);}),p.append(o,k),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),Q.appendChild(r),ne!=null&&g.after(ne),n.drag&&be.drag(x,{dragElement:T,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack});const S="type-module";let h="",E="",P=false;return p.on(D,"click",N=>{N.preventDefault(),N.stopPropagation(),h=x.style.left,E=x.style.top,x.classList.add("pops-iframe-unset-top"),x.classList.add("pops-iframe-unset-left"),x.classList.add("pops-iframe-unset-transform"),x.style.transitionDuration="",x.setAttribute(S,"min"),A.setAttribute("type","min"),z.style.setProperty("display","none"),X.style.setProperty("display",""),typeof n?.btn?.min?.callback=="function"&&n.btn.min.callback($,N);},{capture:true}),p.on(z,"click",N=>{N.preventDefault(),N.stopPropagation(),x.getAttribute(S)!=="min"&&(h=x.style.left,E=x.style.top),P=true,x.style.transitionDuration="",x.style.transform="",x.removeAttribute(S),x.classList.add("pops-iframe-unset-transition"),x.classList.add("pops-iframe-unset-left"),x.classList.add("pops-iframe-unset-top"),x.classList.add("pops-iframe-unset-transform"),x.classList.remove("pops-iframe-unset-transition"),x.setAttribute(S,"max"),A.setAttribute("type","max"),z.style.setProperty("display","none"),X.style.setProperty("display",""),typeof n?.btn?.max?.callback=="function"&&n.btn.max.callback($,N);},{capture:true}),X?.style?.setProperty("display","none"),p.on(X,"click",N=>{N.preventDefault(),N.stopPropagation(),P&&x.getAttribute(S)==="min"?(x.classList.add("pops-iframe-unset-transition"),x.classList.add("pops-iframe-unset-left"),x.classList.add("pops-iframe-unset-top"),x.classList.add("pops-iframe-unset-transform"),x.classList.remove("pops-iframe-unset-transition"),x.setAttribute(S,"max"),A.setAttribute("type","max")):(P=false,x.style.left=h,x.style.top=E,x.style.transitionDuration="",x.style.transform="",A.removeAttribute("type"),x.removeAttribute(S),x.classList.remove("pops-iframe-unset-top"),x.classList.remove("pops-iframe-unset-left"),x.classList.remove("pops-iframe-unset-transform"),z.style.setProperty("display",""),X.style.setProperty("display","none")),typeof n?.btn?.mise?.callback=="function"&&n.btn.mise.callback($,N);},{capture:true}),p.on(w,"click",N=>{N.preventDefault(),N.stopPropagation(),be.removeInstance([me.iframe],e,false),typeof n?.btn?.close?.callback=="function"&&n.btn.close.callback($,N);},{capture:true}),I.handlePush(t,{guid:e,animElement:g,popsElement:x,maskElement:ne,$shadowContainer:r,$shadowRoot:o}),I.handleResultDetails($)}},Hs=()=>({title:{text:"默认标题",position:"center",html:false,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:false,attributes:[{"data-test":"test","data-test-2":"test2"}],forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(a,e){console.log("按钮开启状态：",e);}},{className:"panel-slider",text:"slider",type:"slider",props:{},attributes:[],getValue(){return 50},callback(a,e){console.log("滑块当前数值：",e);},min:1,max:100},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"view",buttonIconIsLoading:true,buttonType:"default",buttonText:"default按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",attributes:[],props:{},buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(a){console.log("点击按钮",a);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:true,attributes:[{"data-value":"value","data-value-2":"value2"}],forms:[{className:"panel-input",text:"input",type:"input",props:{},attributes:[],getValue(){return "50"},callback(a,e){p.preventEvent(a),console.log("输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",props:{},attributes:[],getValue(){return "123456"},callback(a,e){p.preventEvent(a),console.log("密码输入框内容改变：",e);},isPassword:true,placeholder:"请输入密码"},{className:"panel-textarea",text:"textarea",type:"textarea",props:{},attributes:[],getValue(){return "50"},callback(a,e){p.preventEvent(a),console.log("textarea输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-select",text:"select",type:"select",disabled:true,props:{},attributes:[],getValue(){return 50},callback(a,e,t){console.log(`select当前选项：${e}，当前选项文本：${t}`);},data:[{value:"all",text:"所有",disable(){return  false},forms:[]},{value:"text",text:"文本",disable(){return  false},forms:[]},{value:"html",text:"超文本",disable(){return  false},forms:[]}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",disabled:true,props:{},attributes:[],placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(a){console.log("select值改变，多选信息",a);},clickCallBack(a,e){console.log("点击",a,e);},closeIconClickCallBack(a,e){console.log("点击关闭图标的事件",e);},data:[{value:"select-1",text:"单选1",isHTML:false,disable(a,e){return e.findIndex(t=>["select-5"].includes(t.value))!==-1}},{value:"select-2",text:"单选2",isHTML:false,disable(a,e){return e.findIndex(t=>["select-5"].includes(t.value))!==-1}},{value:"select-3",text:"单选3",isHTML:false,disable(a,e){return e.findIndex(t=>["select-2","select-5"].includes(t.value))!==-1}},{value:"select-4",text:"单选4",isHTML:false,disable(a,e){return e.findIndex(t=>["select-3","select-5"].includes(t.value))!==-1}},{value:"select-5",text(a,e){return e.findIndex(t=>["select-4"].includes(t.value))!==-1?"单选5-禁用":"单选5"},isHTML:false,disable(a,e){return e.findIndex(t=>["select-4"].includes(t.value))!==-1}}]},{type:"forms",text:"deep菜单",forms:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(a,e){console.log(a,e);},clickCallBack(a,e){console.log("进入子配置",a,e);},forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(a,e){console.log("按钮开启状态：",e);}},{className:"panel-slider",text:"slider",props:{},type:"slider",attributes:[],getValue(){return 50},callback(a,e){console.log("滑块当前数值：",e);},min:1,max:100},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(a){console.log("点击按钮",a);}}]}]},{type:"deepMenu",className:"panel-deepMenu2",attributes:{},props:{},text:"deepMenu2",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(a,e){console.log(a,e);},clickCallBack(a,e){console.log("进入子配置",a,e);},forms:[]}]},{type:"forms",isFold:true,text:"折叠菜单",afterAddToUListCallBack(a,e){console.log(a,e);},forms:[{className:"panel-switch",text:"switch",props:{},type:"switch",attributes:[],getValue(){return  true},callback(a,e){console.log("按钮开启状态：",e);}}]}]},{id:"whitesev-panel-bottom-config-1",title:`
					<a rel="nofollow" href="https://www.npmjs.com/package/@whitesev/pops" target="_blank"><img src="https://img.shields.io/npm/v/@whitesev/pops?label=pops" alt="npm pops version"></a>
				`,isBottom:true,disableAsideItemHoverCSS:true,attributes:[{"data-value":"value","data-value-2":"value2"}],props:{},forms:[],clickFirstCallback:function(){return  false}},{id:"whitesev-panel-bottom-config-2",title:"版本：xxx.xx.xx",isBottom:true,attributes:[{"data-value":"value","data-value-2":"value2"}],props:{},forms:[],clickFirstCallback:function(){return  false}}],btn:{close:{enable:true,callback(a){a.close();}}},mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:false,only:false,width:window.innerWidth<550?"88vw":"700px",height:window.innerHeight<450?"70vh":"500px",position:"center",animation:"pops-anim-fadein-zoom",useDeepMenuSwtichAnimation:true,zIndex:1e4,drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),yt={isFloat(a){return Number(a)===a&&a%1!==0},add(a,e){let t,n;try{t=a.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}const r=Math.pow(10,Math.max(t,n));return Math.round(a*r+e*r)/r},sub(a,e){let t,n;try{t=a.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}const r=Math.pow(10,Math.max(t,n)),o=t>=n?t:n;return (Math.round(a*r-e*r)/r).toFixed(o)},division(a,e){let t,n;try{t=a.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}const r=Number(a.toString().replace(".","")),o=Number(e.toString().replace(".",""));return r/o*Math.pow(10,n-t)}},Us=()=>({useShadowRoot:true,target:null,content:"默认文字",isDiffContent:false,position:"top",className:"",isFixed:false,alwaysShow:false,triggerShowEventName:"mouseenter touchstart",triggerCloseEventName:"mouseleave touchend",zIndex:1e4,only:false,eventOption:{passive:false,capture:true,once:false},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:true,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class Vs{$el={$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null};$data={config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]};constructor(e,t,n){this.$data.config=e,this.$data.guid=t,this.$el.$shadowContainer=n.$shadowContainer,this.$el.$shadowRoot=n.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){const e=this.createToolTip();this.$el.$toolTip=e.$toolTipContainer,this.$el.$content=e.$toolTipContent,this.$el.$arrow=e.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){const e=p.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),t=e.querySelector(".pops-tip-content"),n=e.querySelector(".pops-tip-arrow");if(typeof this.$data.config.className=="string"&&this.$data.config.className.trim()!==""&&p.addClassName(e,this.$data.config.className),e.style.zIndex=I.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){const r=p.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});e.appendChild(r);}return this.$data.config.showArrow||n.remove(),{$toolTipContainer:e,$toolTipArrow:n,$toolTipContent:t}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(e){if(e==null&&(e=this.getContent()),this.$data.config.isDiffContent){const t="data-content",n=Reflect.get(this.$el.$content,t);if(typeof n=="string"&&n===e)return;Reflect.set(this.$el.$content,t,e);}te.setSafeHTML(this.$el.$content,e);}getZIndex(){return I.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const e=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",e.toString());}calcToolTipPosition(e,t,n,r){const o=p.offset(e,!this.$data.config.isFixed),s=o.width,i=o.height,l=o.top,c=o.left,f=p.outerWidth(this.$el.$toolTip),d=p.outerHeight(this.$el.$toolTip),u=c+s/2-f/2,m=l+i/2-d/2;let y=0,g=0;if(r!=null)if(r instanceof MouseEvent||r instanceof PointerEvent)y=r.pageX,g=r.y;else if(r instanceof TouchEvent){const x=r.touches[0];y=x.pageX,g=x.pageY;}else typeof r.clientX=="number"&&(y=r.clientX),typeof r.clientY=="number"&&(g=r.clientY);return {TOP:{left:u-n,top:l-d-t,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:c+s+t,top:m+n,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:u-n,top:l+i+t,arrow:"top",motion:"fadeInBottom"},LEFT:{left:c-f-t,top:m+n,arrow:"right",motion:"fadeInLeft"},FOLLOW:{left:y+n,top:g+n,arrow:"follow",motion:""}}}changePosition(e){const t=this.calcToolTipPosition(this.$data.config.target,this.$data.config.arrowDistance,this.$data.config.otherDistance,e),n=this.$data.config.position.toUpperCase(),r=t[n];r?(this.$el.$toolTip.style.left=r.left+"px",this.$el.$toolTip.style.top=r.top+"px",this.$el.$toolTip.setAttribute("data-motion",r.motion),this.$el.$arrow.setAttribute("data-position",r.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(e,t){e==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(t):this.$data.timeId_close_TouchEvent.push(t);}clearCloseTimeoutId(e,t){const n=e==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let r=0;r<n.length;r++){const o=n[r];if(typeof t=="number"){if(t==o){V.clearTimeout(t),n.splice(r,1);break}}else V.clearTimeout(o),n.splice(r,1),r--;}}show(...e){const t=e[0],n=t instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(n),typeof this.$data.config.showBeforeCallBack=="function"){const r=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof r=="boolean"&&!r)return}V.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),p.append(this.$el.$shadowRoot,this.$el.$toolTip)),V.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),p.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(t),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){p.on(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){p.off(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,{capture:true});}close(...e){const t=e[0],n=t instanceof MouseEvent?"MouseEvent":"TouchEvent";if(t&&t instanceof MouseEvent){const o=t.composedPath()[0];if(o!=this.$data.config.target&&o!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){const o=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof o=="boolean"&&!o)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);const r=V.setTimeout(()=>{if(this.clearCloseTimeoutId(n,r),this.$el.$toolTip==null)return;const o=this.$el.$toolTip.getAttribute("data-motion");o==null||o.trim()===""?this.toolTipAnimationFinishEvent():this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(n,r),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){p.on(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){p.off(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,{capture:true});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){p.on(this.$el.$toolTip,p.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){p.off(this.$el.$toolTip,p.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),p.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){p.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(e){this.close(e);}onToolTipMouseLeaveEvent(){p.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){p.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}const Kt={init(a){const e=V.getRandomGUID(),t="tooltip";let n=Us();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),!(n.target instanceof HTMLElement))throw new TypeError("config.target 必须是HTMLElement类型");n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"tooltipCSS",css:q.tooltipCSS}]);const s=new Vs(n,e,{$shadowContainer:r,$shadowRoot:o});return n.alwaysShow&&s.show(),{guid:e,config:n,$shadowContainer:r,$shadowRoot:o,toolTip:s}}},yr=()=>({asideULElement:null,asideBottomULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$pops:null,$content:null,$sectionWrapper:null,$contentAside:null,$contentSectionContainer:null},$config:{},init(a){const e="panel";this.$el={...a.$el},this.$config=a.config,this.asideULElement=this.$el.$contentAside.querySelector(`ul.pops-${e}-aside-top-container`),this.asideBottomULElement=this.$el.$contentAside.querySelector(`ul.pops-${e}-aside-bottom-container`),this.sectionContainerHeaderULElement=this.$el.$contentSectionContainer.querySelector(`ul.pops-${e}-container-header-ul`),this.sectionContainerULElement=this.$el.$contentSectionContainer.querySelector(`ul.pops-${e}-container-main-ul`);let t=null,n=false;a.config.content.forEach(r=>{const o=this.createAsideItem(r);if(this.setAsideItemClickEvent(o,r),(typeof r.isBottom=="function"?r.isBottom():r.isBottom)?this.asideBottomULElement.appendChild(o):this.asideULElement.appendChild(o),t==null){let i=false;typeof r.isDefault=="function"?i=!!r.isDefault():i=!!r.isDefault,i&&(t=o,n=!!r.scrollToDefaultView);}typeof r.afterRender=="function"&&r.afterRender({asideConfig:r,$asideLiElement:o});}),t==null&&this.asideULElement.children.length&&(t=this.asideULElement.children[0]),t?(t.click(),n&&t?.scrollIntoView()):console.error("pops.panel：左侧容器没有项");},clearContainer(){Reflect.deleteProperty(this.$el.$contentSectionContainer,"__formConfig__"),te.setSafeHTML(this.sectionContainerHeaderULElement,""),te.setSafeHTML(this.sectionContainerULElement,""),this.clearDeepMenuContainer();},clearDeepMenuContainer(){this.$el.$sectionWrapper?.querySelectorAll("section.pops-panel-deepMenu-container").forEach(a=>a.remove());},clearAsideItemIsVisited(){this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach(a=>{p.removeClassName(a,"pops-is-visited");});},setAsideItemIsVisited(a){p.addClassName(a,"pops-is-visited");},setElementAttributes(a,e){e!=null&&(Array.isArray(e)?e.forEach(t=>{this.setElementAttributes(a,t);}):Object.keys(e).forEach(t=>{a.setAttribute(t,e[t]);}));},setElementProps(a,e){e!=null&&Object.keys(e).forEach(t=>{const n=e[t];if(t==="innerHTML"){te.setSafeHTML(a,n);return}Reflect.set(a,t,n);});},setElementClassName(a,e){e!=null&&(typeof e=="function"&&(e=e()),typeof e=="string"?e.split(" ").forEach(n=>{a.classList.add(n);}):Array.isArray(e)&&e.forEach(t=>{this.setElementClassName(a,t);}));},createAsideItem(a){const e=document.createElement("li");e.id=a.id,Reflect.set(e,"__forms__",a.forms);const t=typeof a.title=="function"?a.title():a.title;te.setSafeHTML(e,t),this.setElementClassName(e,"pops-panel-aside-item"),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);const n="pops-panel-disabled-aside-hover-css";return (typeof a.disableAsideItemHoverCSS=="function"?a.disableAsideItemHoverCSS():a.disableAsideItemHoverCSS)?e.classList.add(n):e.classList.remove(n),e},createSectionContainerItem_switch(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!a.getValue()},$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),switch:e.querySelector(".pops-panel-switch"),input:e.querySelector(".pops-panel-switch__input"),core:e.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable(),this.setClickEvent();},setClickEvent(){const r=this;p.on(this.$ele.core,"click",function(o){r.$ele.input.disabled||r.$ele.switch.hasAttribute("data-disabled")||(r.$data.value=r.getStatus(),r.setStatus(r.$data.value),typeof a.callback=="function"&&a.callback(o,r.$data.value));});},setStatus(r=false){r=!!r,this.$ele.input.checked=r,r?p.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):p.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let r=false;return p.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(r=true),r},disable(){this.$ele.input.disabled=true,this.$ele.switch.setAttribute("data-disabled","true"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.input.disabled=false,this.$ele.switch.removeAttribute("data-disabled"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);}};return n.init(),Reflect.set(e,"data-switch",n),e},createSectionContainerItem_slider(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-slider">
					<input type="range" min="${a.min}" max="${a.max}">
				</div>
			`);const n=e.querySelector(".pops-panel-slider input[type=range]");a.step&&n.setAttribute("step",a.step.toString()),n.value=a.getValue().toString();const r=function(s){return typeof a.getToolTipContent=="function"?a.getToolTipContent(s):s},o=Kt.init({target:n.parentElement,content:()=>r(n.value),zIndex:()=>be.getPopsMaxZIndex().zIndex,className:"github-tooltip",alwaysShow:false,only:false,position:"top",arrowDistance:10});return p.on(n,["input","propertychange"],void 0,function(s){o.toolTip.changeContent(r(n.value)),typeof a.callback=="function"&&a.callback(s,n.valueAsNumber);}),e},createSectionContainerItem_slider_new(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSlider",value:a.getValue(),min:a.min,max:a.max,step:a.step||1,$data:{isMove:false,isInitDragPosition:false,isCheckingStopDragMove:false,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),slider:e.querySelector(".pops-slider"),runAway:e.querySelector(".pops-slider__runway"),bar:e.querySelector(".pops-slider__bar"),buttonWrapper:e.querySelector(".pops-slider__button-wrapper"),button:e.querySelector(".pops-slider__button")},$interval:{isCheck:false},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.setRunAwayClickEvent(),this.intervalInit(),this.isFormConfigDisabledDrag()&&this.disableDrag();},intervalInit(r=200,o=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=true;let s=false;const i=this.$data.totalWidth;let l;const c=setInterval(()=>{s?(this.$interval.isCheck=false,clearTimeout(l),clearInterval(c)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(s=true,this.$data.totalWidth!==i&&(yt.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},r);l=setTimeout(()=>{clearInterval(c);},o);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),Reflect.set(this.$ele.slider,"data-min",this.min),Reflect.set(this.$ele.slider,"data-max",this.max),Reflect.set(this.$ele.slider,"data-value",this.value),Reflect.set(this.$ele.slider,"data-step",this.step);},initTotalWidth(){this.$data.totalWidth=p.width(this.$ele.runAway);},initStepMap(){let r=0;const o=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/o;let s=0;for(let i=this.min;i<=this.max;i+=this.step){const l=this.formatValue(i);let c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:s,pxLeft:s-this.$data.stepPx/2,pxRight:s+this.$data.stepPx/2,percent:s/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,s+=this.$data.stepPx;}},initFloatStepMap(){let r=0;const o=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/o;let s=0;for(let i=this.min;i<=this.max;i=yt.add(i,this.step)){const l=this.formatValue(i);let c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:s,pxLeft:s-this.$data.stepPx/2,pxRight:s+this.$data.stepPx/2,percent:s/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,s+=this.$data.stepPx;}},initSliderPosition(){let r=0;for(const[,o]of this.$data.stepBlockMap.entries())if(o.value==this.value){r=o.percent,this.$data.dragWidth=o.px;break}r=this.formatValue(r*100),this.setSliderPosition(r);},isFloat(r){return Number(r)===r&&r%1!==0},valueChangeCallBack(r,o){typeof a.callback=="function"&&a.callback(r,o);},getDragInfo(r){let o=this.$data.stepBlockMap.get(0);for(const[,s]of this.$data.stepBlockMap.entries())if(s.pxLeft<=r&&r<s.pxRight){o=s;break}return o},getSliderPositonPercent(r){return r/this.$data.totalWidth},formatValue(r){return yt.isFloat(this.step)?r=parseFloat(r.toFixed(2)):r=parseInt(r.toString()),r},setSliderPosition(r){parseInt(r.toString())===1&&(r=1),r>1&&(r=r/100),this.$ele.buttonWrapper.style.left=`${r*100}%`,this.$ele.bar.style.width=`${r*100}%`;},disableDrag(){p.addClassName(this.$ele.runAway,"pops-slider-is-disabled"),p.addClassName(this.$ele.runAway,ue.textIsDisabled);},allowDrag(){p.removeClassName(this.$ele.runAway,"pops-slider-is-disabled"),p.removeClassName(this.$ele.runAway,ue.textIsDisabled);},isDisabledDrag(){return p.containsClassName(this.$ele.runAway,"pops-slider-is-disabled")},isFormConfigDisabledDrag(){const r=typeof a.disabled=="function"?a.disabled():a.disabled;return typeof r=="boolean"?r:false},setRunAwayClickEvent(){p.on(this.$ele.runAway,"click",r=>{if(r.target!==this.$ele.runAway&&r.target!==this.$ele.bar)return;const o=parseFloat(r.offsetX.toString());this.dragStartCallBack()&&(this.dragMoveCallBack(r,o,this.value),this.dragEndCallBack(o));},{capture:false});},dragStartCallBack(){return this.isFormConfigDisabledDrag()?(this.disableDrag(),false):(this.$data.isMove||(this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=true),true)},dragMoveCallBack(r,o,s){let i=0;if(o<=0)i=0,this.value=this.min;else if(o>=this.$data.totalWidth)i=1,this.value=this.max;else {const l=this.getDragInfo(o);i=l.percent,this.value=this.formatValue(l.value);}this.$data.dragPercent=i,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),s!==this.value&&this.valueChangeCallBack(r,this.value);},dragEndCallBack(r){this.$data.isMove=false,r<=0?this.$data.dragWidth=0:r>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=r,this.closeToolTip();},setPanEvent(){const r=V.AnyTouch();this.$tooltip=new r(this.$ele.button,{preventDefault(){return  false}});let o=0;this.$tooltip.on("at:move",s=>{if(!this.dragStartCallBack())return;const i=this.value,l=this.$ele.runAway.getBoundingClientRect();let c=s.x-(l.left+globalThis.screenX);c<=0?c=0:c>=l.width&&(c=l.width),o=c,this.dragMoveCallBack(s,o,i);}),this.$tooltip.on("at:end",()=>{this.dragEndCallBack(o);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=true;const r=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=false,this.closeToolTip(),clearInterval(r));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=false,clearInterval(r);},2e3);},setToolTipEvent(){function r(){return typeof a.getToolTipContent=="function"?a.getToolTipContent(n.value):n.value.toString()}const o=Kt.init({target:this.$ele.button,content:r,zIndex:()=>be.getPopsMaxZIndex().zIndex,isFixed:true,className:"github-tooltip",only:false,eventOption:{capture:true,passive:true},showBeforeCallBack:()=>{if(!(typeof a.isShowHoverTip=="function"?a.isShowHoverTip():typeof a.isShowHoverTip=="boolean"?a.isShowHoverTip:true))return  false;this.intervalInit();},showAfterCallBack:()=>{o.toolTip.changeContent(r());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),false},alwaysShow:false,position:"top",arrowDistance:10});this.$data.tooltip=o;}};return n.init(),Reflect.set(e,"data-slider",n),e},createSectionContainerItem_input(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="text";a.isPassword?t="password":a.isNumber&&(t="number");let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-input">
					<input type="${t}" placeholder="${a.placeholder??""}">
				</div>
				`);const r={[Symbol.toStringTag]:"PopsPanelInput",$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),panelInput:e.querySelector(".pops-panel-input"),input:e.querySelector("input"),inputSpanIcon:document.createElement("span"),inputSpanIconInner:null,icon:null},$data:{value:a.getValue(),isView:false},init(){this.initEle(),this.setInputValue(this.$data.value),a.isPassword?(this.setCircleIcon(ie.getIcon("view")),this.setCircleIconClickEvent()):this.$ele.input.value!=""&&(this.setCircleIcon(ie.getIcon("circleClose")),this.setCircleIconClickEvent()),this.setInputChangeEvent(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable(),typeof a.handlerCallBack=="function"&&a.handlerCallBack(e,this.$ele.input);},initEle(){this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon,this.$ele.input.nextSibling),this.$ele.inputSpanIcon.className="pops-panel-input__suffix",te.setSafeHTML(this.$ele.inputSpanIcon,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$ele.inputSpanIconInner=this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner"),this.$ele.icon=this.$ele.inputSpanIcon.querySelector(".pops-panel-icon"),p.addClassName(this.$ele.panelInput,ue.userSelectNone);},disable(){this.$ele.input.disabled=true,p.addClassName(this.$ele.panelInput,"pops-input-disabled"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.input.disabled=false,p.removeClassName(this.$ele.panelInput,"pops-input-disabled"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},isDisabled(){return this.$ele.input.disabled},setInputValue(o=""){this.$ele.input.value=o;},setInputType(o="text"){this.$ele.input.setAttribute("type",o);},removeCircleIcon(){te.setSafeHTML(this.$ele.icon,"");},setCircleIcon(o=ie.getIcon("circleClose")){te.setSafeHTML(this.$ele.icon,o);},setCircleIconClickEvent(){p.on(this.$ele.icon,"click",void 0,()=>{this.isDisabled()||(this.removeCircleIcon(),a.isPassword?this.$data.isView?(this.$data.isView=false,this.setInputType("text"),this.setCircleIcon(ie.getIcon("hide"))):(this.$data.isView=true,this.setInputType("password"),this.setCircleIcon(ie.getIcon("view"))):(this.setInputValue(""),this.$ele.input.focus(),this.$ele.input.dispatchEvent(new Event("input"))));});},setInputChangeEvent(){p.on(this.$ele.input,["input","propertychange"],void 0,o=>{this.$data.value=this.$ele.input.value,a.isPassword||(this.$ele.input.value!==""&&this.$ele.icon.innerHTML===""?(this.setCircleIcon(ie.getIcon("circleClose")),this.setCircleIconClickEvent()):this.$ele.input.value===""&&this.removeCircleIcon()),typeof a.callback=="function"&&(a.isNumber?a.callback(o,this.$ele.input.value,this.$ele.input.valueAsNumber):a.callback(o,this.$ele.input.value));});}};return r.init(),Reflect.set(e,"data-input",r),e},createSectionContainerItem_textarea(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${a.placeholder??""}"></textarea>
				</div>
			`);const n={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),panelTextarea:e.querySelector(".pops-panel-textarea"),textarea:e.querySelector(".pops-panel-textarea textarea")},$data:{value:a.getValue()},init(){this.setValue(this.$data.value),this.setChangeEvent(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),p.addClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.textarea.removeAttribute("disabled"),p.removeClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||p.containsClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable")},setValue(r){this.$ele.textarea.value=r;},setChangeEvent(){p.on(this.$ele.textarea,["input","propertychange"],r=>{const o=this.$ele.textarea.value;this.$data.value=o,typeof a.callback=="function"&&a.callback(r,o);});}};return n.init(),Reflect.set(e,"data-textarea",n),e},createSectionContainerItem_select(a){const e=this,t=document.createElement("li");Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`);const r={[Symbol.toStringTag]:"PopsPanelSelect",$ele:{itemLeftTextContainer:t.querySelector(".pops-panel-item-left-text"),panelSelect:t.querySelector(".pops-panel-select"),select:t.querySelector(".pops-panel-select select")},$eleKey:{disable:"__disable__",value:"__value__",forms:"__forms__"},$data:{defaultValue:a.getValue()},init(){p.addClassName(this.$ele.panelSelect,ue.userSelectNone),this.initOption(),this.setChangeEvent(),this.setClickEvent(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},setNodeValue(o,s,i){Reflect.set(o,s,i);},getNodeValue(o,s){return Reflect.get(o,s)},disable(){this.$ele.select.setAttribute("disabled","true"),p.addClassName(this.$ele.panelSelect,"pops-panel-select-disable"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.select.removeAttribute("disabled"),p.removeClassName(this.$ele.panelSelect,"pops-panel-select-disable"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},isDisabled(){return this.$ele.select.hasAttribute("disabled")||p.containsClassName(this.$ele.panelSelect,"pops-panel-select-disable")},initOption(){a.data.forEach(o=>{const s=document.createElement("option");this.setNodeValue(s,this.$eleKey.value,o.value),this.setNodeValue(s,this.$eleKey.disable,o.disable),this.setNodeValue(s,this.$eleKey.forms,o.forms),o.value===this.$data.defaultValue&&this.setOptionSelected(s),s.innerText=o.text,this.$ele.select.appendChild(s);});},setOptionSelected(o){o.setAttribute("selected","true");},setSelectOptionsDisableStatus(){this.$ele.select.options&&this.$ele.select.options.length&&Array.from(this.$ele.select.options).forEach(o=>{this.setOptionDisableStatus(o);});},setOptionDisableStatus(o){let s=false;const i=this.getNodeValue(o,this.$eleKey.disable);if(i==="function"){const l=this.getNodeValue(o,this.$eleKey.value);s=!!i(l);}s?o.setAttribute("disabled","true"):o.removeAttribute("disabled");},getSelectOptionInfo(o){const s=this.getNodeValue(o,this.$eleKey.value),i=o.innerText||o.textContent,l=this.getNodeValue(o,this.$eleKey.forms);return {value:s,text:i,forms:l,$option:o}},setChangeEvent(){p.on(this.$ele.select,"change",void 0,o=>{const s=this.$ele.select[this.$ele.select.selectedIndex],i=this.getSelectOptionInfo(s);this.setSelectOptionsDisableStatus(),typeof a.callback=="function"&&a.callback(o,i.value,i.text);const l=typeof i.forms=="function"?i.forms():i.forms;if(Array.isArray(l)){const c="pops-panel-select-child-forms";for(;t.nextElementSibling&&t.nextElementSibling.classList.contains(c);)t.nextElementSibling.remove();const f=document.createElement("ul");f.className=c,p.after(t,f),e.uListContainerAddItem(a,{ulElement:f});}});},setClickEvent(){p.on(this.$ele.select,"click",void 0,o=>{this.setSelectOptionsDisableStatus(),typeof a.clickCallBack=="function"&&a.clickCallBack(o,this.$ele.select);});}};return r.init(),Reflect.set(t,"data-select",r),t},createSectionContainerItem_select_multiple_new(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
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
				`);const n={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectContainer:void 0},$data:{defaultValue:a.getValue(),selectInfo:[]},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.initTagElement(),this.setSelectContainerClickEvent(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},initDefault(){a.data.forEach(r=>{this.$data.defaultValue.includes(r.value)&&this.$data.selectInfo.push({text:r.text,value:r.value,isHTML:!!r.isHTML,disable:r.disable?.bind(r)});});},inintEl(){this.$el.$container=e.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=e.querySelector(".el-select__wrapper"),this.$el.$section=e.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=e.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=e.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=e.querySelector(".el-select__suffix"),this.$el.$suffixIcon=e.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let r="";if(typeof a.placeholder=="string")r=a.placeholder;else if(typeof a.placeholder=="function"){const s=a.placeholder();typeof s=="string"&&(r=s);}const o=p.createElement("span",{innerText:r});this.$el.$selectedPlaceHolderWrapper.appendChild(o);},initTagElement(){a.data.forEach(r=>{if(this.$data.selectInfo.find(s=>s.value===r.value)){const s=this.createSelectedTagItem(r);this.addSelectedTagItem(s.$tag),this.setSelectedItemCloseIconClickEvent({$tag:s.$tag,$closeIcon:s.$closeIcon,value:r.value,text:r.text});}}),this.checkTagEmpty();},createSelectedTagItem(r){const o=p.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
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
						`}),s=o.querySelector(".el-select__tags-text"),i=o.querySelector(".el-icon.el-tag__close"),l=typeof r.text=="function"?r.text(r,this.$data.selectInfo):r.text;return r.isHTML?te.setSafeHTML(s,l):s.innerText=l,{$tag:o,$tagText:s,$closeIcon:i}},addSelectedTagItem(r){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){const o=this.$el.$selectedInputWrapper.previousElementSibling;o?p.after(o,r):p.before(this.$el.$selectedInputWrapper,r);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){const o=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;o?p.after(o,r):p.before(this.$el.$selectedPlaceHolderWrapper,r);}else this.$el.$section.appendChild(r);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateSelectTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(r=>{r.remove();}),this.initTagElement();},selectValueChangeCallBack(r){this.updateSelectItem(),typeof a.callback=="function"&&a.callback(r||this.$data.selectInfo);},updateSelectItem(){this.getAllSelectItemInfo(false).forEach(r=>{const{data:o,$select:s}=r;this.setSelectItemText(o,r.$select),typeof o.disable=="function"&&o.disable(o.value,this.$data.selectInfo)?(this.setSelectItemDisabled(s),this.removeSelectedInfo(o,false),this.removeSelectItemSelected(s)):this.removeSelectItemDisabled(s),this.$data.selectInfo.find(l=>l.value===o.value)?this.setSelectItemSelected(s):this.removeSelectItemSelected(s);});},setSelectItemSelected(r){this.isSelectItemSelected(r)||r.classList.add("select-item-is-selected");},removeSelectItemSelected(r){r.classList.remove("select-item-is-selected");},isSelectItemSelected(r){return r.classList.contains("select-item-is-selected")},addSelectedItemInfo(r,o){const s=this.getSelectedItemInfo(o);r.find(l=>l.value===s.value)||r.push({value:s.value,text:s.text,isHTML:!!s.isHTML,disable:s.disable?.bind(s)}),this.selectValueChangeCallBack(r);},getSelectedItemInfo(r){return Reflect.get(r,"data-info")},removeSelectedItemInfo(r,o){const s=this.getSelectedItemInfo(o),i=r.findIndex(l=>l.value===s.value);i!==-1&&r.splice(i,1),this.selectValueChangeCallBack(r);},getAllSelectItemInfo(r=true){return Array.from(this.$el.$selectContainer?.querySelectorAll(".select-item")??[]).map(o=>{const i={data:this.getSelectedItemInfo(o),$select:o};return r?this.isSelectItemSelected(o)?i:void 0:i}).filter(o=>o!=null)},createSelectItemElement(r){const o=p.createElement("li",{className:"select-item",innerHTML:`
							<span class="select-item-text"></span>
						`});return this.setSelectItemText(r,o),Reflect.set(o,"data-info",r),o},setSelectItemText(r,o){const s=typeof r.text=="function"?r.text(r.value,this.$data.selectInfo):r.text,i=o.querySelector(".select-item-text");r.isHTML?te.setSafeHTML(i,s):i.innerText=s;},setSelectItemDisabled(r){r.setAttribute("aria-disabled","true"),r.setAttribute("disabled","true");},removeSelectItemDisabled(r){r.removeAttribute("aria-disabled"),r.removeAttribute("disabled");},isSelectItemDisabled(r){return r.hasAttribute("disabled")||r.ariaDisabled},setSelectElementClickEvent(r,o){p.on(o,"click",s=>{if(p.preventEvent(s),!this.isSelectItemDisabled(o)){if(typeof a.clickCallBack=="function"){const i=this.getAllSelectItemInfo().map(c=>c.data),l=a.clickCallBack(s,i);if(typeof l=="boolean"&&!l)return}this.isSelectItemSelected(o)?(this.removeSelectItemSelected(o),this.removeSelectedItemInfo(r,o)):(this.setSelectItemSelected(o),this.addSelectedItemInfo(r,o));}});},setSelectContainerClickEvent(){const r=this;p.on(this.$el.$container,"click",()=>{if(this.isDisabled())return;const o=r.$data.selectInfo,{style:s,...i}=a.selectConfirmDialogDetails||{},l=V.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:`
									<ul class="select-container"></ul>
									`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(d){r.$data.selectInfo=[...o],r.updateSelectTagItem(),r.$el.$selectContainer=null,d.close();}}},mask:{enable:true,clickCallBack(d){d(),r.$data.selectInfo=[...o],r.updateSelectTagItem(),r.$el.$selectContainer=null;},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"300px",style:`
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
								`},i),f=gr.init(l).$shadowRoot.querySelector(".select-container");this.$el.$selectContainer=f,a.data.forEach(d=>{const u=this.createSelectItemElement(d);f.appendChild(u),this.setSelectElementClickEvent(o,u);}),this.updateSelectItem();});},setSelectedItemCloseIconClickEvent(r){p.on(r.$closeIcon,"click",o=>{if(p.preventEvent(o),!this.isDisabled()){if(typeof a.closeIconClickCallBack=="function"){const s=a.closeIconClickCallBack(o,{$tag:r.$tag,$closeIcon:r.$closeIcon,value:r.value,text:typeof r.text=="function"?r.text.bind(r):r.text});if(typeof s=="boolean"&&!s)return}this.removeSelectedTagItem(r.$tag),this.removeSelectedInfo({value:r.value,text:r.text});}},{capture:true});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedTagItem(r){r.remove(),this.checkTagEmpty();},removeSelectedInfo(r,o=true){for(let s=0;s<this.$data.selectInfo.length;s++)if(this.$data.selectInfo[s].value===r.value){this.$data.selectInfo.splice(s,1);break}o&&this.selectValueChangeCallBack();},showInputWrapper(){p.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){p.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){p.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){p.cssHide(this.$el.$selectedPlaceHolderWrapper,true);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");},disable(){p.addClassName(this.$el.itemLeftTextContainer,ue.textIsDisabled),p.addClassName(this.$el.$container,"pops-panel-select-multiple-disable");},isDisabled(){return p.containsClassName(this.$el.$container,"pops-panel-select-multiple-disable")},cancleDisable(){p.removeClassName(this.$el.itemLeftTextContainer,ue.textIsDisabled),p.removeClassName(this.$el.$container,"pops-panel-select-multiple-disable");}};return n.init(),Reflect.set(e,"data-select-multiple",n),e},createSectionContainerItem_button(a){const e=document.createElement("li");Reflect.set(e,"__formConfig__",a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),te.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner" type="button">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);const n={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:e.querySelector(".pops-panel-button"),button:e.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:e.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:e.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.setClickEvent();},initButton(){typeof a.buttonIcon=="string"&&a.buttonIcon.trim()!==""?(ie.hasIcon(a.buttonIcon)?this.setIconSVG(ie.getIcon(a.buttonIcon)):this.setIconSVG(a.buttonIcon),this.showIcon()):this.hideIcon();let r=a.buttonText;typeof a.buttonText=="function"&&(r=a.buttonText()),this.setButtonType(a.buttonType),a.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),a.disable&&this.disable(),this.setButtonText(r),this.setIconLoadingStatus(a.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(r){te.setSafeHTML(this.$ele.icon,r);},setIconLoadingStatus(r){this.$ele.icon.setAttribute("is-loading",(!!r).toString());},setHasIcon(r){this.$ele.button.setAttribute("data-icon",(!!r).toString());},setButtonType(r){this.$ele.button.setAttribute("data-type",r);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(r){te.setSafeHTML(this.$ele.spanText,r);},setClickEvent(){p.on(this.$ele.button,"click",void 0,r=>{typeof a.callback=="function"&&a.callback(r);});}};return n.init(),Reflect.set(e,"data-button",n),e},createSectionContainerItem_deepMenu(a){const e=this,t=document.createElement("li");p.addClassName(t,"pops-panel-deepMenu-nav-item"),Reflect.set(t,"__formConfig__",a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`);const r=typeof a.arrowRightIcon=="boolean"?a.arrowRightIcon:true;let o="";r&&(o=`<i class="pops-panel-deepMenu-arrowRight-icon">${ie.getIcon("arrowRight")}</i>`);let s="";a.rightText&&(s=`<p class="pops-panel-item-right-text">${a.rightText}</p>`),te.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-deepMenu">${s}${o}</div>
				`);const i={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return e.$el.$contentSectionContainer}},init(){this.setLiClickEvent();},initFormItem(l,c){const f=c;if(f.type==="forms"){const d=f.forms,u=document.createElement("li"),m=document.createElement("ul");m.classList.add("pops-panel-forms-container-item-formlist"),u.classList.add("pops-panel-forms-container-item");const y=p.createElement("div",{className:"pops-panel-forms-container-item-header-text"});te.setSafeHTML(y,f.text),f.isFold&&(te.setSafeHTML(y,`
								<p>${f.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),p.on(y,"click",()=>{u.hasAttribute("data-fold-enable")?u.removeAttribute("data-fold-enable"):u.setAttribute("data-fold-enable","");}),p.addClassName(y,"pops-panel-forms-fold-container"),p.addClassName(y,ue.userSelectNone),u.setAttribute("data-fold-enable",""),p.addClassName(y,"pops-panel-forms-fold")),u.appendChild(y),e.setElementClassName(u,c.className),e.setElementAttributes(u,c.attributes),e.setElementProps(u,c.props),d.forEach(g=>{e.uListContainerAddItem(g,{ulElement:m,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:u,formHeaderDivElement:y});}),u.appendChild(m),l.appendChild(u),typeof f.afterAddToUListCallBack=="function"&&f.afterAddToUListCallBack(a,{target:u,ulElement:m,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:u,formHeaderDivElement:y});}else e.uListContainerAddItem(a,{ulElement:e.sectionContainerULElement});},async gotoDeepMenu(l,c){const f=c.closest("section.pops-panel-container"),d=p.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"});Reflect.set(d,"__formConfig__",a);const u=p.createElement("ul",{className:"pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul"}),m=p.createElement("ul",{className:"pops-panel-container-main-ul"}),y=a.headerTitle??a.text,g=p.createElement("li",{className:"pops-panel-container-header-title-text pops-panel-deepMenu-container-header",innerHTML:`<p class="pops-panel-deepMenu-container-header-title-text">${y}</p>`}),x=p.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:ie.getIcon("arrowLeft")}),w={duration:220,easing:"ease-in-out"},A=()=>{if(p.cssHide(f,true),p.on(x,"click",async T=>{p.preventEvent(T);const v=()=>{const C=f;p.cssShow(C),d.remove();};if(e.$config.useDeepMenuSwtichAnimation&&document.startViewTransition){const C=document.startViewTransition(v);await C.ready,await Promise.all([d.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],w).finished,f.animate([{transform:"translateX(-100%)"},{transform:"translateX(0)"}],w).finished]),await C.finished;}else v();e.triggerRenderRightContainer(f);},{once:true}),p.before(g.firstElementChild,x),u.appendChild(g),d.appendChild(u),d.appendChild(m),a.forms&&Array.isArray(a.forms))for(let T=0;T<a.forms.length;T++){const v=a.forms[T];this.initFormItem(m,v);}e.$el.$sectionWrapper.appendChild(d);};if(e.$config.useDeepMenuSwtichAnimation&&document.startViewTransition){const T=document.startViewTransition(A);await T.ready,await d.animate([{transform:"translateX(100%)"},{transform:"translateX(0)"}],w).finished,await T.finished;}else A();typeof a.afterEnterDeepMenuCallBack=="function"&&a.afterEnterDeepMenuCallBack(a,{sectionContainer:d,sectionContainerHeaderContainer:u,sectionContainerHeader:g,sectionBodyContainer:m}),e.triggerRenderRightContainer(d);},setLiClickEvent(){p.on(t,"click",void 0,async l=>{typeof a.clickCallBack=="function"&&await a.clickCallBack(l,a)||await this.gotoDeepMenu(l,t);});}};return i.init(),Reflect.set(t,"data-deepMenu",i),t},createSectionContainerItem_own(a){let e=document.createElement("li");return Reflect.set(e,"__formConfig__",a),a.className&&(e.className=a.className),e=a.getLiElementCallBack(e),e},createSectionContainerItem(a){const e=a.type;if(e==="switch")return this.createSectionContainerItem_switch(a);if(e==="slider")return this.createSectionContainerItem_slider_new(a);if(e==="input")return this.createSectionContainerItem_input(a);if(e==="textarea")return this.createSectionContainerItem_textarea(a);if(e==="select")return this.createSectionContainerItem_select(a);if(e==="select-multiple")return this.createSectionContainerItem_select_multiple_new(a);if(e==="button")return this.createSectionContainerItem_button(a);if(e==="deepMenu")return this.createSectionContainerItem_deepMenu(a);if(e==="own")return this.createSectionContainerItem_own(a);console.error("尚未实现的type类型",a);},createSectionContainerItem_forms(a){const e=this,t=a;if(t.type==="forms"){const n=a.forms,r=document.createElement("li"),o=document.createElement("ul");r.classList.add("pops-panel-forms-container-item"),o.classList.add("pops-panel-forms-container-item-formlist");const s=p.createElement("div",{className:"pops-panel-forms-container-item-header-text"});te.setSafeHTML(s,t.text),t.isFold&&(te.setSafeHTML(s,`
						<p>${t.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),p.on(s,"click",()=>{r.hasAttribute("data-fold-enable")?r.removeAttribute("data-fold-enable"):r.setAttribute("data-fold-enable","");}),p.addClassName(s,"pops-panel-forms-fold-container"),p.addClassName(s,ue.userSelectNone),r.setAttribute("data-fold-enable",""),p.addClassName(r,"pops-panel-forms-fold")),r.appendChild(s),e.setElementClassName(r,a.className),e.setElementAttributes(r,a.attributes),e.setElementProps(r,a.props),n.forEach(i=>{e.uListContainerAddItem(i,{ulElement:o,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:s});}),r.appendChild(o),e.sectionContainerULElement.appendChild(r),typeof t.afterAddToUListCallBack=="function"&&t.afterAddToUListCallBack(t,{target:r,ulElement:o,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:s});}else e.uListContainerAddItem(a,{ulElement:e.sectionContainerULElement});},triggerRenderRightContainer(a){const e=Reflect.get(a,"__formConfig__");this.$el.$pops.dispatchEvent(new CustomEvent("pops:renderRightContainer",{detail:{formConfig:e}}));},uListContainerAddItem(a,e){const t=this.createSectionContainerItem(a);t&&e.ulElement.appendChild(t),typeof a.afterAddToUListCallBack=="function"&&a.afterAddToUListCallBack(a,{...e,target:t});},setAsideItemClickEvent(a,e){p.on(a,"click",async t=>{if(typeof e.clickFirstCallback=="function"){const s=await e.clickFirstCallback(t,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof s=="boolean"&&!s)return}this.clearContainer();const n=Reflect.get(a,"__forms__");Reflect.set(this.$el.$contentSectionContainer,"__formConfig__",n),p.cssShow(this.$el.$contentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(a);const r=typeof e.title=="function"?e.title():e.title;let o=typeof e.headerTitle=="function"?e.headerTitle():e.headerTitle;if(o=o??r,typeof o=="string"&&o.trim()!==""){const s=document.createElement("li");s.classList.add("pops-panel-container-header-title-text"),Reflect.set(s,"__asideConfig__",e),te.setSafeHTML(s,o),this.sectionContainerHeaderULElement.appendChild(s);}if(n.forEach(s=>{this.createSectionContainerItem_forms(s);}),typeof e.clickCallback=="function"){const s=await e.clickCallback(t,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof s=="boolean"&&!s)return}this.triggerRenderRightContainer(this.$el.$contentSectionContainer);});}}),zs={init(a){const e=V.getRandomGUID(),t="panel";let n=Hs();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),a&&Array.isArray(a.content)&&(n.content=a.content),n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"button",css:q.button},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"panelCSS",css:q.panelCSS}]);const s=I.handleZIndex(n.zIndex),i=J.createMask(e,s),l=J.createHeader(t,n),{headerStyle:c,headerPStyle:f}=J.createHeaderStyle(t,n),d=J.createAnim(e,t,n,`
			<div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${c}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" class="pops-${t}-title-text" style="${f}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${t}-content">
				<aside class="pops-${t}-aside">
					<ul class="pops-${t}-aside-top-container"></ul>
					<ul class="pops-${t}-aside-bottom-container"></ul>
				</aside>
				<div class="pops-${t}-section-wrapper">
					<section class="pops-${t}-container">
						<ul class="pops-${t}-container-header-ul"></ul>
						<ul class="pops-${t}-container-main-ul"></ul>
					</section>
				</div>
			</div>`,"",s),u=J.parseElement(d),{popsElement:m,headerCloseBtnElement:y,titleElement:g,contentElement:x,panelSectionWrapper:w,contentAsideElement:A,contentSectionContainerElement:T}=I.handleQueryElement(u,t);(n.isMobile||V.isPhone())&&p.addClassName(m,n.mobileClassName);let v=null;const C=[u];if(n.mask.enable){const{maskElement:X}=I.handleMask({type:t,guid:e,config:n,animElement:u,maskHTML:i});v=X,C.push(v);}const L=I.handleEventDetails(e,r,o,t,u,m,v,n);return I.handleClickEvent("close",y,L,n.btn.close.callback),p.append(o,C),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),v!=null&&u.after(v),yr().init({config:n,$el:{$pops:m,$content:x,$sectionWrapper:w,$contentAside:A,$contentSectionContainer:T}}),I.handlePush(t,{guid:e,animElement:u,popsElement:m,maskElement:v,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(m,{dragElement:g,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),{...I.handleResultDetails(L),addEventListener:(X,Q,ne)=>{m.addEventListener(X,Q,ne);},removeEventListener:(X,Q,ne)=>{m.removeEventListener(X,Q,ne);}}}},Fs=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"",select:false,password:false,row:false,focus:true,placeholder:"默认提示",style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"success",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),js={init(a){const e=V.getRandomGUID(),t="prompt";let n=Fs();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n=I.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);I.handleInit(o,[{name:"index",css:q.index},{name:"ninePalaceGridPosition",css:q.ninePalaceGridPosition},{name:"scrollbar",css:q.scrollbar},{name:"button",css:q.button},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"promptCSS",css:q.promptCSS}]);const s=I.handleZIndex(n.zIndex),i=J.createMask(e,s),l=J.createHeader(t,n),c=J.createBottom(t,n),{headerStyle:f,headerPStyle:d}=J.createHeaderStyle(t,n),{contentPStyle:u}=J.createContentStyle(t,n),m=J.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
            <div class="pops-content pops-${t}-content" style="${u}">${n.content.row?'<textarea name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'"></textarea>':'<input name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'" type="'+(n.content.password?"password":"text")+'">'}</div>${c}`,c,s),y=J.parseElement(m),{popsElement:g,inputElement:x,headerCloseBtnElement:w,btnOkElement:A,btnCancelElement:T,btnOtherElement:v,titleElement:C}=I.handleQueryElement(y,t);let L=null;const D=[y];n.mask.enable&&(L=I.handleMask({type:t,guid:e,config:n,animElement:y,maskHTML:i}).maskElement,D.push(L));const z=I.handleEventDetails(e,r,o,t,y,g,L,n);return x.value=n.content.text,I.handlePromptClickEvent("close",x,w,z,n.btn.close.callback),I.handlePromptClickEvent("ok",x,A,z,n.btn.ok.callback),I.handlePromptClickEvent("cancel",x,T,z,n.btn.cancel.callback),I.handlePromptClickEvent("other",x,v,z,n.btn.other.callback),p.append(o,D),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r),L!=null&&y.after(L),I.handlePush(t,{guid:e,animElement:y,popsElement:g,maskElement:L,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(g,{dragElement:C,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),n.content.focus&&x.focus(),n.content.select&&x.select(),I.handleResultDetails(z)}},Gs=()=>({target:document.documentElement,targetSelector:null,data:[{icon:ie.getIcon("search"),iconIsLoading:false,text:"搜索",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:ie.getIcon("documentCopy"),iconIsLoading:false,text:"复制",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:ie.getIcon("delete"),text:"删除",iconIsLoading:false,item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:ie.getIcon("loading"),iconIsLoading:true,text:"加载",item:[],callback(a,e,t){return console.log("点击："+this.text,[a,e,t]),false}},{icon:ie.getIcon("elemePlus"),iconIsLoading:true,text:"饿了么",callback(a,e,t){return console.log("点击："+this.text,[a,e,t]),false},item:[{icon:"",iconIsLoading:false,text:"处理文件",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:"",iconIsLoading:false,text:"其它处理",callback(a,e,t){console.log("点击："+this.text,[a,e,t]);},item:[{icon:ie.getIcon("view"),iconIsLoading:false,text:"查看",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}}]}]}],chileMenuLeftOrRightDistance:0,childMenuTopOrBottomDistance:0,useShadowRoot:true,className:"",isAnimation:false,useScaleAnimation:true,only:false,zIndex:1e4,preventDefault:true,style:null,beforeAppendToPageCallBack(){}}),qs={init(a){const e=V.getRandomGUID(),t="rightClickMenu";let n=Gs();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n=I.handleOnly(t,n),n.target==null)throw new Error("config.target 不能为空");a.data&&Reflect.set(n,"data",a.data);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);if(I.handleInit(o,[{name:"index",css:q.index},{name:"anim",css:q.anim},{name:"common",css:q.common},{name:"rightClickMenu",css:q.rightClickMenu}]),n.style!=null){const i=p.createElement("style",{innerHTML:n.style},{type:"text/css"});o.appendChild(i);}const s={rootElement:null,windowCheckClickEvent(i){if(!s.rootElement)return;const l=i.target;l.closest(`.pops-${t}`)||l.className&&l.className==="pops-shadow-container"&&l.shadowRoot!=null||s.closeAllMenu(s.rootElement);},shadowRootCheckClickEvent(i){!s.rootElement||i.target.closest(`.pops-${t}`)||s.closeAllMenu(s.rootElement);},addWindowCheckClickListener(){if(p.on(globalThis,"click touchstart",void 0,s.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const i=n.target.getRootNode();i instanceof ShadowRoot&&p.on(i,"click touchstart",void 0,s.shadowRootCheckClickEvent,{capture:true});}},removeWindowCheckClickListener(){if(p.off(globalThis,"click touchstart",void 0,s.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const i=n.target.getRootNode();i instanceof ShadowRoot&&p.off(i,"click touchstart",void 0,s.windowCheckClickEvent,{capture:true});}},contextMenuEvent(i,l){n.preventDefault&&p.preventEvent(i),I.handleOnly(t,n),s.rootElement&&s.closeAllMenu(s.rootElement);const c=s.showMenu(i,n.data,l);s.rootElement=c,n.only&&I.handlePush(t,{$shadowRoot:o,$shadowContainer:r,guid:e,animElement:c,popsElement:c,beforeRemoveCallBack(f){s.closeAllMenu(f.popsElement);}});},addContextMenuEvent(i,l){p.on(i,"contextmenu",l,s.contextMenuEvent);},removeContextMenuEvent(i,l){p.off(i,"contextmenu",l,s.contextMenuEvent);},animationCloseMenu(i){const l=c=>{p.off(i,p.getTransitionEndNameList(),l,{capture:true}),i.remove();};p.containsClassName,p.containsClassName(i,`pops-${t}-anim-show`)?(p.on(i,p.getTransitionEndNameList(),l,{capture:true}),p.removeClassName(i,`pops-${t}-anim-show`)):p.containsClassName(i,`pops-${t}-anim-scale`)&&p.containsClassName(i,`pops-${t}-anim-scale-open`)?(p.on(i,p.getTransitionEndNameList(),l,{capture:true}),p.removeClassName(i,`pops-${t}-anim-scale-open`),p.addClassName(i,`pops-${t}-anim-scale-not-open`)):i.remove();},closeAllMenu(i){if(i==null)return;const l=Reflect.get(i,"__menuData__");l?.root&&(i=l.root),l.child.forEach(f=>{this.animationCloseMenu(f);}),this.animationCloseMenu(i),s.rootElement=null;},createMenuContainerElement(i){const l=p.createElement("div",{className:`pops-${t}`,innerHTML:`<ul class="pops-${t}-wrapper"></ul>`}),c=this.getMenuZIndex();return c>1e4&&(l.style.zIndex=c.toString()),i&&l.setAttribute("is-children","true"),n.isAnimation&&p.addClassName(l,`pops-${t}-anim-grid`),n.useScaleAnimation&&(p.addClassName(l,`pops-${t}-anim-scale`),p.addClassName(l,`pops-${t}-anim-scale-not-open`)),l},getMenuZIndex(){return I.handleZIndex(n.zIndex)},getOffset(i,l,c){const f={top:0,right:0,bottom:0,left:0},d=p.width(i),u=p.height(i),m=1,y=p.width(globalThis)-m,g=p.height(globalThis)-m,x=y-d,w=g-u,A=n.chileMenuLeftOrRightDistance,T=n.childMenuTopOrBottomDistance;let v=l.x,C=l.y;if(v=v<0?0:v,v+A>=x){if(c){const L=p.offset(c.$menu);v=y-L.left-A+m;}else v=m+A;v<0?v=0:v>x&&(v=x),f.right=v,Reflect.deleteProperty(f,"left");}else v=v+A,f.left=v,Reflect.deleteProperty(f,"right");if(C=C<0?0:C,C+T>=w){if(c){const L=p.offset(c.$parentItem,false);C=g-L.bottom-T+m;}else C=m+T;C<0?C=m:C>w&&(C=w),f.bottom=C,Reflect.deleteProperty(f,"top");}else C=C+T,f.top=C,Reflect.deleteProperty(f,"bottom");return f},showMenu(i,l,c){const f=this.createMenuContainerElement(false);return Reflect.set(f,"__menuData__",{child:[]}),s.addMenuLiELement(i,f,f,l,c),p.append(o,f),document.contains(r)||(typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),p.appendBody(r)),this.handlerShowMenuCSS(f,i),f},showClildMenu(i,l,c,f,d,u){const m=this.createMenuContainerElement(true);Reflect.set(m,"__menuData__",{parent:d,root:f}),Reflect.get(f,"__menuData__").child.push(m),s.addMenuLiELement(i,f,m,c,u),p.append(o,m);const g=d.closest(".pops-rightClickMenu");return this.handlerShowMenuCSS(m,l,{$menu:g,$parentItem:d}),m},handlerShowMenuCSS(i,l,c){const f=this.getOffset(i,{x:l.clientX,y:l.clientY},c);p.css(i,{...f}),n.isAnimation&&p.addClassName(i,`pops-${t}-anim-show`),n.useScaleAnimation&&(p.removeClassName(i,`pops-${t}-anim-scale-not-open`),p.addClassName(i,`pops-${t}-anim-scale-open`));},addMenuLiELement(i,l,c,f,d){const u=i.target,m=c.querySelector("ul");f.forEach(y=>{const g=p.parseTextToDOM("<li></li>");if(typeof y.icon=="string"&&y.icon.trim()!==""){const T=ie.getIcon(y.icon)??y.icon,v=p.parseTextToDOM(`<i class="pops-${t}-icon" is-loading="${y.iconIsLoading??false}">${T}</i>`);g.appendChild(v);}g.insertAdjacentHTML("beforeend",te.getSafeHTML(`<span>${y.text}</span>`)),y.item&&Array.isArray(y.item)&&p.addClassName(g,`pops-${t}-item`);let x=false;function w(T){if(T.type==="touchstart"&&(x=true),x&&T.type==="mouseenter")return;Array.from(m.children).forEach(D=>{p.removeClassName(D,`pops-${t}-is-visited`);const z=Reflect.get(D,"__menuData__");if(!z)return;function X(Q){Q.querySelectorAll("ul li").forEach(ne=>{const k=Reflect.get(ne,"__menuData__");k?.child&&X(k.child);}),Q.remove();}X(z.child);});const v=Reflect.get(l,"__menuData__");for(let D=0;D<v.child.length;D++){const z=v.child[D];o.contains(z)||(v.child.splice(D,1),D--);}if(p.addClassName(g,`pops-${t}-is-visited`),!y.item)return;const C=g.getBoundingClientRect(),L=s.showClildMenu(i,{clientX:C.left+p.outerWidth(g),clientY:C.top},y.item,l,g,d);Reflect.set(g,"__menuData__",{child:L});}async function A(T){if(typeof y.callback=="function"){try{rr.Object.defineProperty(i,"target",{get(){return u}});}catch{}const v=await y.callback(T,i,g,d);if(typeof v=="boolean"&&v==false)return}Array.from(m.children).forEach(v=>{p.off(v,"mouseenter touchstart");}),s.closeAllMenu(l);}p.on(g,"mouseenter touchstart",w),p.on(g,"click",A),m.appendChild(g);});}};return s.addContextMenuEvent(n.target,n.targetSelector),s.addWindowCheckClickListener(),{guid:e,config:n,removeWindowCheckClickListener:s.removeWindowCheckClickListener,addWindowCheckClickListener:s.addWindowCheckClickListener,removeContextMenuEvent:s.removeContextMenuEvent,addContextMenuEvent:s.addContextMenuEvent}}},Ws=()=>{const a=[];for(let e=0;e<10;e++)a.push({value:`测试${e}`,enableDeleteButton:true,deleteButtonClickCallback(t,n,r,o){return console.log("删除当前项",[t,n,r,o]),true},itemView(t){return `${t.value}-html`},clickCallback(t,n,r,o){return console.log("item项的点击回调",[t,n,a,o]),e%2===0},selectCallback(t,n,r,o){console.log("item项的选中回调",[t,n,a,o]);}});return {target:null,inputTarget:null,selfDocument:document,data:a,useShadowRoot:true,className:"",isAbsolute:true,isAnimation:false,useFoldAnimation:true,useArrow:false,width:"250px",maxHeight:"300px",followTargetWidth:true,topDistance:0,position:"auto",positionTopToReverse:true,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:false,followPosition:"target",async inputTargetChangeRefreshShowDataCallback(e,t){return console.log("当前输入框的值是：",e),t.filter(n=>n.value.includes(e))},style:""}},Ks={init(a){const e=V.getRandomGUID(),t="searchSuggestion";let n=Ws();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,a),n.target==null)throw new Error("config.target 不能为空");n.inputTarget==null&&(n.inputTarget=n.target),a.data&&(n.data=a.data);const{$shadowContainer:r,$shadowRoot:o}=I.handlerShadow(n);if(I.handleInit(o,[{name:"index",css:q.index},{name:"anim",css:q.anim},{name:"common",css:q.common}]),n.style!=null){const i=document.createElement("style");p.createElement("style",{innerHTML:n.style},{type:"text/css"}),o.appendChild(i);}const s={selfDocument:n.selfDocument,$el:{root:null,$hintULContainer:null,$dynamicCSS:null},$evt:{offInputChangeEvtHandler:[]},$data:{isEmpty:true},init(i=document.body||document.documentElement){s.initEl(),s.update(s.getData()),s.updateStyleSheet(),s.hide(),o.appendChild(s.$el.root),i.appendChild(r);},initEl(){s.$el.root=s.createSearchSelectElement(),Reflect.set(s.$el.root,"data-SearchSuggestion",s),s.$el.$dynamicCSS=s.$el.root.querySelector("style[data-dynamic]"),s.$el.$hintULContainer=s.$el.root.querySelector("ul");},getData(){return typeof n.data=="function"?n.data():n.data},setData(i){n.data=i;},createSearchSelectElement(){const i=p.createElement("div",{className:`pops pops-${t}-search-suggestion`,innerHTML:`
						<style type="text/css">
							.pops-${t}-animation{
								-moz-animation: searchSelectFalIn 0.5s 1 linear;
								-webkit-animation: searchSelectFalIn 0.5s 1 linear;
								-o-animation: searchSelectFalIn 0.5s 1 linear;
								-ms-animation: searchSelectFalIn 0.5s 1 linear;
							}
						</style>
						<style type="text/css">
							.pops-${t}-search-suggestion-arrow{
								--suggestion-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);
								--suggestion-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);
								--suggestion-arrow--after-color: rgb(78, 78, 78);
								--suggestion-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
								--suggestion-arrow--after-width: 10px;
								--suggestion-arrow--after-height: 10px;
							}
							.pops-${t}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${t}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								color: var(--suggestion-arrow--after-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${t}-search-suggestion[data-popper-placement^="top"] .pops-${t}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${t}-search-suggestion[data-popper-placement^="top"] .pops-${t}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${t}-search-suggestion[data-popper-placement^="bottom"] .pops-${t}-search-suggestion-arrow{
								top: -12.5px;
								left: 50%;
								transform: translateX(-50%);
							}
							.pops-${t}-search-suggestion[data-popper-placement^="bottom"] .pops-${t}-search-suggestion-arrow::after{
								position: absolute;
								top: 100%;
								left: 50%;
								content: "";
							}
						</style>
						<style type="text/css" data-dynamic="true">
							${s.getDynamicCSS()}
						</style>
						<style>
							.el-zoom-in-top-animation{
								--el-transition-md-fade: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
									opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
								transition: var(--el-transition-md-fade);
								transform-origin: center top;
							}
							.el-zoom-in-top-animation[data-popper-placement^="top"] {
								transform-origin: center bottom;
							}
							.el-zoom-in-top-animation-hide{
								opacity: 0;
								transform: scaleY(0);
							}
							.el-zoom-in-top-animation-show{
								opacity: 1;
								transform: scaleY(1);
							}
						</style>
						<style type="text/css" data-user-css>
							${n.style||""}
						</style>
						<ul class="pops-${t}-search-suggestion-hint ${ue.userSelectNone}">${n.toSearhNotResultHTML}</ul>
						${n.useArrow?`<div class="pops-${t}-search-suggestion-arrow"></div>`:""}
         				 `},{"data-guid":e,"type-value":t});return n.className!==""&&n.className!=null&&p.addClassName(i,n.className),n.isAnimation&&p.addClassName(i,`pops-${t}-animation`),n.useFoldAnimation&&p.addClassName(i,"el-zoom-in-top-animation"),i},getDynamicCSS(){return `
				.pops-${t}-search-suggestion{
					--search-suggestion-bg-color: #ffffff;
					--search-suggestion-box-shadow-color: rgb(0 0 0 / 20%);
					--search-suggestion-item-color: #515a6e;
					--search-suggestion-item-none-color: #8e8e8e;
					--search-suggestion-item-is-hover-bg-color: #f5f7fa;
					--search-suggestion-item-is-select-bg-color: #409eff;
				}
				.pops-${t}-search-suggestion{
					border: initial;
					overflow: initial;
					position: ${n.isAbsolute?"absolute":"fixed"};
					z-index: ${I.handleZIndex(n.zIndex)};
				}
				ul.pops-${t}-search-suggestion-hint{
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
				.pops-${t}-search-suggestion[data-top-reverse] ul.pops-${t}-search-suggestion-hint{
					display: flex;
					flex-direction: column-reverse;
				}
				.pops-${t}-search-suggestion[data-top-reverse] ul.pops-${t}-search-suggestion-hint li{
					flex-shrink: 0;
				}
				ul.pops-${t}-search-suggestion-hint li{
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
				ul.pops-${t}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: var(--search-suggestion-item-none-color);
				}
				ul.pops-${t}-search-suggestion-hint li:not([data-none]):hover{
					background-color: var(--search-suggestion-item-is-hover-bg-color);
				}
				@media (prefers-color-scheme: dark){
					.pops-${t}-search-suggestion{
						--search-suggestion-bg-color: #1d1e1f;
						--search-suggestion-item-color: #cfd3d4;
						--search-suggestion-item-is-hover-bg-color: rgba(175, 175, 175, .1);
					}
				}
				`},getItemDataValue(i){return i},createSearchItemLiElement(i,l){const c=s.getItemDataValue(i),f=p.createElement("li",{className:`pops-${t}-search-suggestion-hint-item`,"data-index":l,"data-value":c});Reflect.set(f,"data-index",l),Reflect.set(f,"data-value",c);const d=i.itemView(i,f,n);typeof d=="string"?te.setSafeHTML(f,d):p.append(f,d);const u=i.enableDeleteButton;if(typeof u=="boolean"&&u){const m=s.createItemDeleteIcon();p.append(f,m);}return p.addClassName(f,ue.flexCenter),p.addClassName(f,ue.flexYCenter),f},setSearchItemClickEvent(i){p.on(i,"click",async l=>{p.preventEvent(l);const c=l.target,f=s.getData(),d=Reflect.get(i,"data-value");if(!!c.closest(`.pops-${t}-delete-icon`)){if(typeof d.deleteButtonClickCallback=="function"){const m=await d.deleteButtonClickCallback(l,i,d,n);typeof m=="boolean"&&m&&(f.splice(f.indexOf(d),1),i.remove());}s.$el.$hintULContainer.children.length||s.clear(),s.updateStyleSheet();}else if(typeof d.clickCallback=="function"){const m=await d.clickCallback(l,i,d,n);typeof m=="boolean"&&m&&(n.inputTarget instanceof HTMLInputElement||n.inputTarget instanceof HTMLTextAreaElement)&&(n.inputTarget.value=String(d.value));}},{capture:true});},setSearchItemSelectEvent(i){},setInputChangeEvent(i={capture:true}){if(!(n.inputTarget instanceof HTMLInputElement||n.inputTarget instanceof HTMLTextAreaElement))return;n.inputTarget.setAttribute("autocomplete","off");const l=p.onInput(n.inputTarget,async c=>{const f=s.getData(),d=await n.inputTargetChangeRefreshShowDataCallback(n.inputTarget.value,f,n);s.update(d),s.updateStyleSheet();},i);s.$evt.offInputChangeEvtHandler.push(l.off);},removeInputChangeEvent(i={capture:true}){for(let l=0;l<s.$evt.offInputChangeEvtHandler.length;l++){const c=s.$evt.offInputChangeEvtHandler[l];c(),s.$evt.offInputChangeEvtHandler.splice(l,1),l--;}},showEvent(){s.updateStyleSheet(),n.toHideWithNotResult&&s.$data.isEmpty?s.hide(true):s.show();},setShowEvent(i={capture:true}){if(n.followPosition==="target")p.on([n.target],["focus","click"],void 0,s.showEvent,i);else if(n.followPosition==="input")p.on([n.inputTarget],["focus","click"],void 0,s.showEvent,i);else if(n.followPosition==="inputCursor")p.on([n.inputTarget],["focus","click","input"],void 0,s.showEvent,i);else throw new Error("未知followPosition："+n.followPosition)},removeShowEvent(i={capture:true}){p.off([n.target,n.inputTarget],["focus","click"],void 0,s.showEvent,i),p.off([n.inputTarget],["input"],void 0,s.showEvent,i);},hideEvent(i){if(i.target instanceof Node){if(r.contains(i.target)||n.target.contains(i.target)||n.inputTarget.contains(i.target))return;s.hide(true);}},setHideEvent(i={capture:true}){Array.isArray(s.selfDocument)?s.selfDocument.forEach(l=>{p.on(l,["click","touchstart"],void 0,s.hideEvent,i);}):p.on(s.selfDocument,["click","touchstart"],void 0,s.hideEvent,i);},removeHideEvent(i={capture:true}){Array.isArray(s.selfDocument)?s.selfDocument.forEach(l=>{p.off(l,["click","touchstart"],void 0,s.hideEvent,i);}):p.off(s.selfDocument,["click","touchstart"],void 0,s.hideEvent,i);},setAllEvent(i={capture:true}){s.setInputChangeEvent(i),s.setHideEvent(i),s.setShowEvent(i);},removeAllEvent(i={capture:true}){s.removeInputChangeEvent(i),s.removeHideEvent(i),s.removeShowEvent(i);},createItemDeleteIcon(i=16,l="#bababa"){return p.parseTextToDOM(`
					<svg class="pops-${t}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${i}" height="${i}" fill="${l}">
						<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
						<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
					</svg>
        			`)},setPromptsInSearch(){const i=p.createElement("li",{className:`pops-${t}-search-suggestion-hint-searching-item`,innerHTML:n.searchingTip});s.addItem(i);},removePromptsInSearch(){s.$el.$hintULContainer.querySelector(`li.pops-${t}-search-suggestion-hint-searching-item`)?.remove();},changeHintULElementPosition(i=n.target??n.inputTarget,l=true){let c=null;if(n.followPosition==="inputCursor"?c=p.getTextBoundingRect(n.inputTarget,n.inputTarget.selectionStart||0,n.inputTarget.selectionEnd||0,false):c=n.isAbsolute?p.offset(i):i.getBoundingClientRect(),c==null)return;let f=document.documentElement.clientHeight;n.isAbsolute&&(f=p.height(document));const d=p.width(document);let u=n.position;if(n.position==="auto"){const g=c.bottom,x=p.height(s.$el.$hintULContainer);g+x>f?u="top":u="bottom";}if(u==="top"){n.positionTopToReverse&&s.$el.root.setAttribute("data-top-reverse","true"),n.useFoldAnimation&&s.$el.root.setAttribute("data-popper-placement","top");const g=f-c.top+n.topDistance;s.$el.root.style.top="",s.$el.root.style.bottom=g+"px";}else if(u==="bottom"){n.useFoldAnimation&&s.$el.root.setAttribute("data-popper-placement","bottom-center");const g=c.height+c.top+n.topDistance;s.$el.root.removeAttribute("data-top-reverse"),s.$el.root.style.bottom="",s.$el.root.style.top=g+"px";}let m=c.left;const y=p.width(s.$el.$hintULContainer);y>d&&(m=m+d-y),s.$el.root.style.left=m+"px",l&&s.changeHintULElementPosition(i,!l);},changeHintULElementWidth(i=n.target??n.inputTarget){const l=i.getBoundingClientRect();n.followTargetWidth?s.$el.$hintULContainer.style.width=l.width+"px":s.$el.$hintULContainer.style.width=n.width;},updateDynamicCSS(){const i=s.getDynamicCSS();te.setSafeHTML(s.$el.$dynamicCSS,i);},updateStyleSheet(){s.updateDynamicCSS(),s.changeHintULElementWidth(),s.changeHintULElementPosition();},addItem(i){s.$el.$hintULContainer.appendChild(i);},update(i=[]){if(!Array.isArray(i))throw new TypeError("传入的数据不是数组");const l=i;if(l.length){s.$data.isEmpty=false,n.toHideWithNotResult&&s.show(),s.clear(true);const c=document.createDocumentFragment();l.forEach((f,d)=>{const u=s.createSearchItemLiElement(f,d);s.setSearchItemClickEvent(u),s.setSearchItemSelectEvent(u),c.appendChild(u);}),s.addItem(c);}else s.clear();},clear(i=false){if(te.setSafeHTML(s.$el.$hintULContainer,""),i)return;s.$data.isEmpty=true;let l;typeof n.toSearhNotResultHTML=="string"?l=p.parseTextToDOM(n.toSearhNotResultHTML):l=n.toSearhNotResultHTML(),s.addItem(l),n.toHideWithNotResult&&s.hide();},hide(i=false){n.useFoldAnimation?(i||p.removeClassName(s.$el.root,"el-zoom-in-top-animation"),p.addClassName(s.$el.root,"el-zoom-in-top-animation"),p.addClassName(s.$el.root,"el-zoom-in-top-animation-hide"),p.removeClassName(s.$el.root,"el-zoom-in-top-animation-show")):s.$el.root.style.display="none";},show(){s.$el.root.style.display="",n.useFoldAnimation&&(p.addClassName(s.$el.root,"el-zoom-in-top-animation"),p.removeClassName(s.$el.root,"el-zoom-in-top-animation-hide"),p.addClassName(s.$el.root,"el-zoom-in-top-animation-show"));}};return s}},Xs="2.5.0";class nn{config={version:Xs,cssText:q,iconSVG:ie.$data,animation:ot.$data,instData:me,forbiddenScroll:{event(e){return p.preventEvent(e)}},Utils:V,DOMUtils:p,InstanceUtils:be,MathFloatUtils:yt,PanelHandlerComponents:yr};init(){}noConflict(){return typeof W.globalThis.pops=="object"&&V.delete(W.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&V.delete(unsafeWindow,"pops"),new nn}isPhone(e){return V.isPhone(e)}GlobalConfig=ye;alert=e=>gr.init(e);confirm=e=>Is.init(e);prompt=e=>js.init(e);loading=e=>Wt.init(e);iframe=e=>Ds.init(e);tooltip=e=>Kt.init(e);drawer=e=>Rs.init(e);folder=e=>Ps.init(e);panel=e=>zs.init(e);rightClickMenu=e=>qs.init(e);searchSuggestion=e=>Ks.init(e)}const _t=new nn,fe={waitRemove(...a){a.forEach(e=>{typeof e=="string"&&Ce.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});});},createBlockCSSNode(...a){let e=[];if(a.length!==0&&!(a.length===1&&typeof a[0]=="string"&&a[0].trim()===""))return a.forEach(t=>{Array.isArray(t)?e=e.concat(t):e.push(t);}),Ce.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...a){let e=[];if(a.length!==0&&!(a.length===1&&typeof a[0]=="string"&&a[0].trim()===""))return a.forEach(t=>{Array.isArray(t)?e=e.concat(t):e.push(t);}),Bn(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(a){let e=typeof wt=="function"?wt(a.keyName):null;typeof e=="string"&&e?Bn(e):fe.loadStyleLink(a.url);},async loadStyleLink(a){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=a,Ce.ready(()=>{document.head.appendChild(e);});},async loadScript(a){let e=document.createElement("script");return e.src=a,new Promise(t=>{e.onload=()=>{t(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(a){return a=a.trim(),a.startsWith("data:")||a.match(/^http(s|):\/\//i)?a:a.startsWith("//")?(a.startsWith("///")||(a=window.location.protocol+a),a):(a.startsWith("/")||(a+="/"),a=window.location.origin+a,a)},fixHttps(a){if(a.startsWith("https://")||!a.startsWith("http://"))return a;try{let e=new URL(a);return e.protocol="https:",e.toString()}catch{return a}},lockScroll(...a){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let t=[document.documentElement,document.body].concat(...a||[]);return t.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){t.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function a(n){navigator.clipboard.readText().then(r=>{n(r);}).catch(r=>{Le.error("读取剪贴板内容失败👉",r),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(r=>{a(n);}).catch(r=>{Le.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),a(n);});}function t(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!t()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(a,e,t=5e3){let n,r=t-e,o=e,s=async i=>{let l=await a(i);if(typeof l=="boolean"&&!l||i){ae.workerClearTimeout(n);return}if(o+=e,o>r){s(true);return}n=ae.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(a,e,t){if(t){let n=Ce.closest(a,t);if(n)return n.querySelector(e)}else return Ce.matches(a,e)?a:Ce.closest(a,e)}},nt={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},ae=je.noConflict(),b=Ce.noConflict(),dt=_t,Le=new ae.Log(Fe,ve.console||Be.console);let Pn=Fe?.script?.name||void 0;_t.config.Utils.AnyTouch();const Qs=false;Le.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});O.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(a){const e=a.getSetting().type;if(e==="loading")return  false;const t=a.getSetting().content;return e==="warning"?Le.warn(t):e==="error"?Le.error(t):Le.info(t),true},get position(){return Ne.getValue(nt.qmsg_config_position.key,nt.qmsg_config_position.defaultValue)},get maxNums(){return Ne.getValue(nt.qmsg_config_maxnums.key,nt.qmsg_config_maxnums.defaultValue)},get showReverse(){return Ne.getValue(nt.qmsg_config_showreverse.key,nt.qmsg_config_showreverse.defaultValue)},get zIndex(){let a=je.getMaxZIndex(),e=_t.config.InstanceUtils.getPopsMaxZIndex().zIndex;return je.getMaxValue(a,e)+100}});dt.GlobalConfig.setGlobalConfig({zIndex:()=>{let a=je.getMaxZIndex(void 0,void 0,t=>{if(t?.classList?.contains("qmsg-shadow-container")||t?.closest("qmsg")&&t.getRootNode()instanceof ShadowRoot)return  false}),e=_t.config.InstanceUtils.getPopsMaxZIndex().zIndex;return je.getMaxValue(a,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Ys=new ae.GM_Menu({GM_getValue:at,GM_setValue:De,GM_registerMenuCommand:At,GM_unregisterMenuCommand:Vt}),xr=new ae.Httpx({xmlHttpRequest:Un,logDetails:Qs});xr.interceptors.request.use(a=>a);xr.interceptors.response.use(void 0,a=>(Le.error("拦截器-请求错误",a),a.type==="onabort"?O.warning("请求取消",{consoleLogContent:true}):a.type==="onerror"?O.error("请求异常",{consoleLogContent:true}):a.type==="ontimeout"?O.error("请求超时",{consoleLogContent:true}):O.error("其它错误",{consoleLogContent:true}),a));ve.Object.defineProperty,ve.Function.prototype.apply,ve.Function.prototype.call,ve.Element.prototype.appendChild,ve.setTimeout;const Bn=b.addStyle.bind(b);Ce.selector.bind(Ce);Ce.selectorAll.bind(Ce);new ae.GM_Cookie;const wr="GM_Panel",Js="data-init",Dn="data-key",Hn="data-default-value",Zs="data-init-more-value",_e={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},pt={setting:{get width(){return _e.width<550?"88vw":_e.width<700?"550px":"700px"},get height(){return _e.height<450?"70vh":_e.height<550?"450px":"550px"}},settingMiddle:{get width(){return _e.width<350?"88vw":"350px"},get height(){return _e.height<450?"88vh":"450px"}},settingBig:{get width(){return _e.width<800?"92vw":"800px"},get height(){return _e.height<600?"80vh":"600px"}},info:{get width(){return _e.width<350?"88vw":"350px"},get height(){return _e.height<250?"88vh":"250px"}}};class ei{storageKey;listenerData;constructor(e){if(typeof e=="string"){let t=e.trim();if(t=="")throw new Error("key参数不能为空字符串");this.storageKey=t;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new je.Dictionary;}getLocalValue(){let e=at(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){De(this.storageKey,e);}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.triggerValueChangeListener(e,n,t);}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.triggerValueChangeListener(e,t,void 0);}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){xt(this.storageKey);}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=false;for(const[n,r]of this.listenerData.entries()){for(let o=0;o<r.length;o++){const s=r[o];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(r.splice(o,1),o--,t=true);}this.listenerData.set(n,r);}return t}triggerValueChangeListener(e,t,n){if(!this.listenerData.has(e))return;let r=this.listenerData.get(e);for(let o=0;o<r.length;o++){const s=r[o];if(typeof s.callback=="function"){let i=this.get(e),l,c;typeof t<"u"&&arguments.length>=2?c=t:c=i,typeof n<"u"&&arguments.length>2?l=n:l=i,s.callback(e,c,l);}}}}const He=new ei(wr),ht={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new ae.Dictionary),this.__contentConfig}},addContentConfig(a){Array.isArray(a)||(a=[a]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,a);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(a=0){return this.$data.contentConfig.get(a)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${Fe?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(a,e,t){let n=Fe?.script?.supportURL||Fe?.script?.namespace;return typeof n=="string"&&ae.isNotNull(n)&&window.open(n,"_blank"),false}}]}},Xt={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(a){return a},callback:()=>{Ne.showPanel(ht.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){Ne.isTopWindow()&&Ys.add(this.$data.menuOption);},addMenuOption(a){Array.isArray(a)||(a=[a]),this.$data.menuOption.push(...a);},updateMenuOption(a){Array.isArray(a)||(a=[a]),a.forEach(e=>{let t=this.$data.menuOption.findIndex(n=>n.key===e.key);t!==-1&&(this.$data.menuOption[t]=e);});},getMenuOption(a=0){return this.$data.menuOption[a]},deleteMenuOption(a=0){this.$data.menuOption.splice(a,1);}},Ne={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new ae.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new ae.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new ae.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new ae.Dictionary),this.__onceExecData},get scriptName(){return Pn},get panelConfig(){return this.__panelConfig},set panelConfig(a){this.__panelConfig=a;},key:wr,attributeKeyName:Dn,attributeDefaultValueName:Hn},init(){this.initContentDefaultValue(),Xt.init();},isTopWindow(){return ve.top===ve.self},initContentDefaultValue(){const a=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let r=n.attributes[Js];if(typeof r=="function"){let l=r();if(typeof l=="boolean"&&!l)return}let o=new Map,s=n.attributes[Dn];if(s!=null){const l=n.attributes[Hn];o.set(s,l);}let i=n.attributes[Zs];if(typeof i=="object"&&i&&Object.keys(i).forEach(l=>{o.set(l,i[l]);}),!o.size){Le.warn(["请先配置键",n]);return}if(n.type==="switch"){let l=typeof n.disabled=="function"?n.disabled():n.disabled;typeof l=="boolean"&&l&&this.$data.contentConfigInitDisabledKeys.push(...o.keys());}for(const[l,c]of o.entries())this.setDefaultValue(l,c);},e=n=>{for(let r=0;r<n.length;r++){let o=n[r];a(o);let s=o.forms;s&&Array.isArray(s)&&e(s);}},t=[...ht.getAllContentConfig()];for(let n=0;n<t.length;n++){let r=t[n];if(!r.forms)continue;const o=r.forms;o&&Array.isArray(o)&&e(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(a,e){this.$data.contentConfigInitDefaultValue.has(a)&&Le.warn("请检查该key(已存在): "+a),this.$data.contentConfigInitDefaultValue.set(a,e);},getDefaultValue(a){return this.$data.contentConfigInitDefaultValue.get(a)},setValue(a,e){He.set(a,e);},getValue(a,e){let t=He.get(a);return t??(this.$data.contentConfigInitDefaultValue.has(a)?this.$data.contentConfigInitDefaultValue.get(a):e)},deleteValue(a){He.delete(a);},hasKey(a){return He.has(a)},addValueChangeListener(a,e){return He.addValueChangeListener(a,(n,r,o)=>{e(a,o,r);})},removeValueChangeListener(a){He.removeValueChangeListener(a);},triggerMenuValueChange(a,e,t){He.triggerValueChangeListener(a,t,e);},exec(a,e,t,n=true){const r=this;let o;typeof a=="string"||Array.isArray(a)?o=()=>a:o=a;let s=false,i=o(),l=[];Array.isArray(i)?(s=true,l=i):l.push(i);let c=l.find(T=>!this.$data.contentConfigInitDefaultValue.has(T));if(c){Le.warn(`${c} 键不存在`);return}let f=JSON.stringify(l);if(n&&this.$data.onceExecMenuData.has(f))return this.$data.onceExecMenuData.get(f);let d=[],u=[],m=(T,v)=>{let C=[];Array.isArray(v)||(v=[v]),v.forEach(L=>{if(L!=null&&L instanceof HTMLStyleElement){C.push(L);return}}),d=d.concat(C);},y=T=>this.getValue(T),g=()=>{for(let T=0;T<d.length;T++)d[T].remove(),d.splice(T,1),T--;},x=()=>{let T=false;return typeof t=="function"?T=t(l):T=l.every(v=>y(v)),T},w=T=>{let v=x(),C=[];if(v){let L=l.map(z=>this.getValue(z)),D=e({value:s?L:L[0],addStyleElement:(...z)=>m(true,...z)});Array.isArray(D)||(D=[D]),D.forEach(z=>{if(z!=null&&z instanceof HTMLStyleElement){C.push(z);return}});}g(),d=[...C];};n&&l.forEach(T=>{let v=this.addValueChangeListener(T,(C,L,D)=>{w();});u.push(v);}),w();let A={reload(){w();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&r.$data.onceExecMenuData.delete(f);},clearStoreStyleElements:()=>g(),removeValueChangeListener:()=>{u.forEach(T=>{this.removeValueChangeListener(T);});}};return this.$data.onceExecMenuData.set(f,A),A},execMenu(a,e,t=false,n=false){return this.exec(a,r=>e(r),r=>r.every(s=>{let i=!!this.getValue(s);return Ne.$data.contentConfigInitDisabledKeys.includes(s)&&(i=false,Le.warn(`.execMenu${n?"Once":""} ${s} 被禁用`)),t&&(i=!i),i}),n)},execMenuOnce(a,e,t=false,n=false){const r=this.execMenu(a,e,t,true);if(n&&r){const o=()=>{r.reload();};this.removeUrlChangeWithExecMenuOnceListener(a),this.addUrlChangeWithExecMenuOnceListener(a,o);const s=r.clear;r.clear=()=>{s(),this.removeUrlChangeWithExecMenuOnceListener(a);};}return r},deleteExecMenuOnce(a){return a=this.transformKey(a),this.$data.onceExecMenuData.delete(a),this.$data.urlChangeReloadMenuExecOnce.delete(a),He.removeValueChangeListener(a)},onceExec(a,e){if(a=this.transformKey(a),typeof a!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(a)||(e(),this.$data.onceExecData.set(a,1));},deleteOnceExec(a){a=this.transformKey(a),this.$data.onceExecData.delete(a);},addUrlChangeWithExecMenuOnceListener(a,e){a=this.transformKey(a),this.$data.urlChangeReloadMenuExecOnce.set(a,e);},removeUrlChangeWithExecMenuOnceListener(a){a=this.transformKey(a),this.$data.urlChangeReloadMenuExecOnce.delete(a);},triggerUrlChangeWithExecMenuOnceEvent(a){this.$data.urlChangeReloadMenuExecOnce.forEach((e,t)=>{e(a);});},showPanel(a,e=`${Pn}-设置`,t=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let r=a.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!t&&!r&&a.push(...ht.getDefaultBottomContentConfig());let o=dt.panel({title:{text:e,position:"center",html:false,style:""},content:a,btn:{close:{enable:true,callback:(s,i)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,i)=>{s(),this.$data.$panel=null;}},width:pt.setting.width,height:pt.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o,this.$data.panelContent=a,n||this.registerConfigSearch({$panel:o,content:a});},registerConfigSearch(a){const{$panel:e,content:t}=a;let n=async(f,d)=>{if(f==null)return;let u=await d(f);return u&&typeof u.isFind=="boolean"&&u.isFind?u.data:await n(u.data,d)},r=(f,d)=>{const u=new IntersectionObserver(m=>{m.forEach(y=>{y.isIntersecting&&(d?.(),u.disconnect());});},{root:null,threshold:1});u.observe(f),f.scrollIntoView({behavior:"smooth",block:"center"});},o=f=>{const d="pops-flashing";b.animationend(f,()=>{f.classList.remove(d);}),f.classList.add(d);},s=(f,d)=>{b.preventEvent(f);let u=dt.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:pt.settingMiddle.width,height:"auto",drag:true,style:`
					${dt.config.cssText.panelCSS}

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
					${a.searchDialogStyle??""}
				`});u.$shadowRoot.querySelector(".search-wrapper");let m=u.$shadowRoot.querySelector(".search-config-text"),y=u.$shadowRoot.querySelector(".search-result-wrapper");m.focus();let g=()=>{b.empty(y);},x=A=>{const T=ae.queryProperty(A,C=>C?.next?{isFind:false,data:C.next}:{isFind:true,data:C});let v=b.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${T.matchedData?.path}</div>
							<div class="search-result-item-description">${T.matchedData?.description??""}</div>
						`});return b.on(v,"click",C=>{let D=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[A.index];if(!D){O.error(`左侧项下标${A.index}不存在`);return}D.scrollIntoView({behavior:"smooth",block:"center"}),D.click(),n(A.next,async z=>{if(z?.next){let X=await b.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(Q=>{const ne=Reflect.get(Q,"__formConfig__");return typeof ne=="object"&&ne!=null&&ne.text===z.name}),2500);if(X)X.click();else return O.error("未找到对应的二级菜单"),{isFind:true,data:z};return {isFind:false,data:z.next}}else {let X=await b.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(Q=>Reflect.get(Q,"__formConfig__")===z.matchedData?.formConfig),2500);if(X){r(X);let Q=X.closest(".pops-panel-forms-fold[data-fold-enable]");Q&&(Q.querySelector(".pops-panel-forms-fold-container").click(),await ae.sleep(500)),r(X,()=>{o(X);});}else O.error("未找到对应的菜单项");return {isFind:true,data:z}}});}),v},w=A=>{const T=new RegExp(A,"i"),v=[],C=(D,z)=>{for(let X=0;X<D.length;X++){const Q=D[X];let ne=Q.forms;if(ne&&Array.isArray(ne)){const k=ae.deepClone(z);if(Q.type==="deepMenu"){const $=ae.queryProperty(k,S=>S?.next?{isFind:false,data:S.next}:{isFind:true,data:S});$.next={name:Q.text};}C(ne,k);}else {let k=Reflect.get(Q,"text"),$=Reflect.get(Q,"description");const S=[k,$];let h=S.findIndex(E=>{if(typeof E=="string")return E.match(T)});if(h!==-1){const E=ae.deepClone(z),P=ae.queryProperty(E,K=>K?.next?{isFind:false,data:K.next}:{isFind:true,data:K});P.next={name:k,matchedData:{path:"",formConfig:Q,matchedText:S[h],description:$}};const _=[];ae.queryProperty(E,K=>{const U=K?.name;return typeof U=="string"&&U.trim()!==""&&_.push(U),K?.next?{isFind:false,data:K.next}:{isFind:true,data:K}});const N=_.join(fe.escapeHtml(" - "));P.next.matchedData.path=N,v.push(E);}}}};for(let D=0;D<t.length;D++){const z=t[D];if(!z.forms||z.isBottom&&z.id==="script-version")continue;const X=z.forms;if(X&&Array.isArray(X)){let Q=z.title;typeof Q=="function"&&(Q=Q()),C(X,{index:D,name:Q});}}let L=document.createDocumentFragment();for(const D of v){let z=x(D);L.appendChild(z);}g(),y.append(L);};b.on(m,"input",ae.debounce(A=>{b.preventEvent(A);let T=b.val(m).trim();if(T===""){g();return}w(T);},200));},i=null,l=false,c;b.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",s),b.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(f,d)=>{clearTimeout(c),c=void 0,l&&i===d?(l=false,i=null,s(f)):(c=setTimeout(()=>{l=false;},200),l=true,i=d);},{capture:true}),e.$shadowRoot.appendChild(b.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(a){if(Array.isArray(a)){const e=a.sort();return JSON.stringify(e)}else return a}};let rt="";document.documentElement?document.head?document.body?rt=`<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`:document.head.childNodes.length?rt=`<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`:rt=`<html>
	<head></head>
</html>

注入速度等级：2`:rt=`<html>
</html>

注入速度等级：1`:rt=`document.documentElement is null
	
注入速度等级：0`;const ke=(a,e,...t)=>setTimeout(async()=>{try{await a(...t);}catch(n){O.error(n.toString(),{consoleLogContent:true});}},e),vr={success:"√ ",error:"× ",warn:"!!! ",info:""},Z={setTagList(a,e){b.html(a,"");let t="";e.forEach(n=>{t+=`
				<p class="${n.tag}">${n.text??""}</p>
			`;}),b.html(a,t);},setTag(a,e,t){Z.clearTag(a),b.addClass(a,e),typeof t=="string"&&b.html(a,t);},clearTag(a){Object.keys(vr).forEach(e=>{b.removeClass(a,e);});}},M=a=>({type:"own",getLiElementCallBack(t){let n=b.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text"></p>
					<p class="pops-panel-item-left-desc-text"></p>
				`});return t.appendChild(n),t},async afterAddToUListCallBack(t,n){let r=n.target,o=r.querySelector(".pops-panel-item-left-text"),s=r.querySelector(".pops-panel-item-left-main-text"),i=r.querySelector(".pops-panel-item-left-desc-text"),l=await a();l.tag==null?b.html(s,l.text):b.html(s,vr[l.tag]+l.text),(l.description==null||l.description==="")&&b.hide(i,false),b.html(i,l.description||"");let c=["support-info"];if(l.tag!=null&&c.push(l.tag),b.addClass(s,c),typeof l.afterRender=="function")try{l.afterRender({...n,$leftContainer:o,$leftText:s,$leftDesc:i});}catch(f){console.log(f),Z.setTag(s,"error","afterRender 函数执行错误"+f);}}}),j={asideLastVisit:"aside-last-visit"},ti={getWindow(){return Se.unsafeWindow.isSupport()?ve:window}};class ni{}class Rt extends ni{isSupportGM(){return typeof H=="object"&&H!=null}}class le extends Rt{}const se={getApiDocUrl(a,e){return e=e??a,`<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${a}" target="_blank">${e}</a>`}};class ri extends le{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof H.addElement=="function"}}isSupport(){return typeof rn=="function"}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let s=Reflect.apply(rn,this,r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.addElement,formList:n.forms[2].forms}].forEach(r=>{let o=r.name.replace(".","__async__");r.formList.push(M(async()=>{let s=null,i=null,l=ti.getWindow(),c=o+"_test_script_exec",f=`${c}_test_str`;try{return s=await r.fn("script",{id:c,textContent:`window["${f}"] = "bar";`}),i=document.querySelector("#"+c),s==null?{text:`${r.name} returns is null`,tag:"error"}:s instanceof HTMLElement?typeof l[f]!="string"?{text:`${r.name} script element is not work`,tag:"error"}:(Reflect.deleteProperty(l,f),{text:fe.escapeHtml("支持添加<script>元素且执行js"),tag:"success"}):{text:`${r.name} returns is not style element`,tag:"error"}}catch(d){return console.error(d),{text:"执行错误 "+d,tag:"error"}}finally{i&&i.remove();}}),M(async()=>{let s=null,i=null,l=o+"_test2";try{if(s=await r.fn(document.body,"div",{"data-src":"https://example.com/image.png",id:l}),s==null)return {text:r.name+" returns is null",tag:"error"};if(!(s instanceof HTMLElement))return {text:r.name+" returns is not style element",tag:"error"};if(i=document.querySelector("#"+l),!i)return {text:"不支持3个参数",tag:"error"};const c=i.attachShadow({mode:"closed"});return await r.fn(c,"style",{textContent:"div { color: black; };"}),c.querySelector("style")?s==null?{text:"传入3个参数但是返回为空",tag:"error"}:i.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(c){return console.error(c),{text:"执行错误 "+c,tag:"error"}}finally{i&&i.remove();}}));}),n}}class oi extends le{isSupport(){return typeof on=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof H.addStyle=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-GM_addStyle"+e,title:e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let s=Reflect.apply(on,this,r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.addStyle,formList:n.forms[2].forms}].forEach(r=>{let o=r.name.replace(".","__async__");r.formList.push(M(async()=>{let s=null,i=null;try{return s=b.createElement("div",{id:o,innerText:o+" test"}),document.body.appendChild(s),i=await r.fn(`
							#${o} {
								background-color: rgb(255, 0, 0);
							}
						`),i==null?{text:`${r.name} returns is null`,tag:"error"}:i instanceof HTMLStyleElement?window.getComputedStyle(s).backgroundColor!=="rgb(255, 0, 0)"?{text:`${r.name} test element background is not rgb(255, 0, 0)`,tag:"error"}:{text:fe.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}:{text:`${r.name} returns is not HTMLStyleElement`,tag:"error"}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{s?.remove(),i?.remove();}}));}),n}}class ai extends le{isSupport(){return typeof Ut=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof H.addValueChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=Ut(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.addValueChangeListener,formList:n.forms[2].forms}].forEach(r=>{let o=r.name;r.formList.push((()=>{let s=o+"_key_1";return M(()=>({text:"测试监听数据存储改变",description:"",tag:"info",afterRender(i){let l=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(i.$leftContainer,l);let c,f,d=[];b.on(l,"click",async u=>{b.preventEvent(u);try{d=[],clearTimeout(c),Z.setTag(i.$leftText,"info","等待触发回调"),b.text(i.$leftDesc,this.text),b.show(i.$leftDesc,!1);let m=ae.formatTime(Date.now());f=f??await r.fn(s,function(y,g,x,w){console.log(arguments),clearTimeout(c),d.push({tag:"success",text:"支持触发回调"}),typeof y!="string"?d.push({tag:"error",text:`不支持回调参数key，当前类型：${typeof y}`}):d.push({tag:"success",text:`支持回调参数key，当前类型：${typeof y}`}),typeof x!=typeof m?d.push({tag:"error",text:`不支持回调参数newValue，当前类型：${typeof m}`}):d.push({tag:"success",text:`支持回调参数newValue，当前类型：${typeof m}`}),typeof w!="boolean"?d.push({tag:"error",text:`不支持回调参数remote，当前类型：${typeof w}`}):d.push({tag:"success",text:`支持回调参数remote，当前类型：${typeof w}`}),Z.setTagList(i.$leftText,d);}),console.log(r.name+" listenerId："+f+" typeof："+typeof f),typeof f!="number"&&typeof f!="string"?d.push({tag:"warn",text:"listenerId类型不是number或string"}):d.push({tag:"success",text:"listenerId类型："+typeof f}),c=setTimeout(()=>{d.push({tag:"error",text:"不支持触发回调"}),Z.setTagList(i.$leftText,d);},3e3),De(s,m);}catch(m){O.error(m.toString(),{consoleLogContent:true});}});}}))})());}),n}}class si extends le{isSupport(){return (typeof $e=="object"||typeof $e=="function")&&$e!=null}getApiOption(){let e=this.isSupport();return {isSupportList:e&&typeof $e.list=="function",isSupportSet:e&&typeof $e.set=="function",isSupportDelete:e&&typeof $e.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let e=this.isSupportGM()&&(typeof H.cookie=="object"||typeof H.cookie=="function")&&H.cookie!=null;return {name:"GM.cookie",isSupport:e,isSupportList:e&&typeof H.cookie.list=="function",isSupportSet:e&&typeof H.cookie.set=="function",isSupportDelete:e&&typeof H.cookie.delete=="function"}}getUIOption(){let e=this.getApiName(),t=this.getApiOption(),n=this.getAsyncApiOption(),r={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e+".list",`${e} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(s){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:`支持 ${e}，类型 ${typeof $e}`,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]},o=r.forms[0].forms;if(this.isSupport()&&o.push(M(()=>t.isSupportList?{text:`支持 ${e}.list`,tag:"success"}:{text:`不支持 ${e}.list`,tag:"error"}),M(()=>t.isSupportSet?{text:`支持 ${e}.set`,tag:"success"}:{text:`不支持 ${e}.set`,tag:"error"}),M(()=>t.isSupportDelete?{text:`支持 ${e}.delete`,tag:"success"}:{text:`不支持 ${e}.delete`,tag:"error"})),n.isSupport?o.push(M(()=>n.isSupportList?{text:`支持 ${n.name}.list`,tag:"success"}:{text:`不支持 ${n.name}.list`,tag:"error"}),M(()=>n.isSupportSet?{text:`支持 ${n.name}.set`,tag:"success"}:{text:`不支持 ${n.name}.set`,tag:"error"}),M(()=>n.isSupportDelete?{text:`支持 ${n.name}.delete`,tag:"success"}:{text:`不支持 ${n.name}.delete`,tag:"error"})):o.push(M(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()){let s={name:"test",value:"1",expirationDate:(Date.now()+864e5)/1e3};[{name:e,list:async(...i)=>new Promise((l,c)=>{const[f,d]=i;$e.list(f,(u,m)=>{m?c(m):l(u);});}),set:async(...i)=>new Promise((l,c)=>{const[f,d]=i;$e.set(f,u=>{u?c(u):l(void 0);});}),delete:async(...i)=>new Promise((l,c)=>{const[f,d]=i;$e.delete(f,u=>{u?c(u):l(void 0);});}),formList:r.forms[1].forms},{name:n.name,list:H.cookie?.list,set:H.cookie?.set,delete:H.cookie?.delete,formList:r.forms[2].forms}].forEach(i=>{i.name,i.formList.push(M(()=>{try{return {text:fe.escapeHtml("测试list获取所有Cookie"),tag:"info",description:"点击按钮进行测试",afterRender(l){let c=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);b.on(c,"click",async f=>{try{b.preventEvent(f);const d=await i.list({});console.log(d),Array.isArray(d)?dt.alert({title:{text:i.name+".list",position:"center"},content:{text:JSON.stringify(d,null,4),html:!0},drag:!0,mask:{enable:!0},width:pt.setting.width,height:pt.setting.height,style:`
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`}):alert("获取的cookie信息不是数组");}catch(d){O.error(d.toString(),{consoleLogContent:!0});}}),b.after(l.$leftContainer,c);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试set新增Cookie"),tag:"info",description:JSON.stringify(s),afterRender(l){let c=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);b.on(c,"click",async f=>{try{b.preventEvent(f),await i.set(s),O.success(i.name+" set cookie success");}catch(d){O.error(d.toString(),{consoleLogContent:!0});}}),b.after(l.$leftContainer,c);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{}}),M(()=>{try{let l={name:"test"};return {text:fe.escapeHtml("测试delete删除Cookie"),tag:"info",description:JSON.stringify(l),afterRender(c){let f=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);b.on(f,"click",async d=>{try{b.preventEvent(d),await i.delete(l),O.success(i.name+" delete cookie success");}catch(u){O.error(u.toString(),{consoleLogContent:!0});}}),b.after(c.$leftContainer,f);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{}}));});}return r}}class ii extends le{isSupport(){return typeof xt=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof H.deleteValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.name?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=xt(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.deleteValue,formList:n.forms[2].forms}].forEach(r=>{let o=r.name;r.formList.push((()=>{let s=`Test ${o} null`,i=null;return M(()=>({text:"测试存储null值并删除",description:`"${s}": ${i}`,tag:"info",afterRender(l){let c=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(l.$leftContainer,c),b.on(c,"click",async f=>{b.preventEvent(f);try{De(s,i),await r.fn(s);let d=at(s);typeof d=="object"&&d===null?O.error("该值未删除，读取的值："+d):O.success("成功删除该值");}catch(d){O.error(d.toString(),{consoleLogContent:true});}});}}))})());}),n}}class li extends le{isSupport(){return typeof an=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof H.deleteValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=an(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.deleteValues,formList:n.forms[2].forms}].forEach(r=>{r.name,r.formList.push((()=>{let o={GM_deleteValues_key_1:555,"GM.deleteValues_key_2":666};return M(()=>({text:"测试存储对象然后删除再读取",description:`${JSON.stringify(o)}`,tag:"info",afterRender(s){let i=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(s.$leftContainer,i),b.on(i,"click",async l=>{b.preventEvent(l);try{Et(o);let c=Object.keys(o),f=vt(c);if(JSON.stringify(f)!==JSON.stringify(o)){O.error("写入失败，写入的数据和读取的数据不相同");return}await r.fn(c);let d=vt(c);d==null?O.warning("删除情况未知，因为读取到的数据为null"):typeof d=="object"&&JSON.stringify(d)==="{}"?O.success("删除成功，读取的数据为{}"):(O.error("删除情况未知，因为读取到的数据类型不是object"),console.log(d));}catch(c){O.error(c.toString(),{consoleLogContent:true});}});}}))})());}),n}}class ci extends le{isSupport(){return typeof Ar=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof H.download=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>({text:fe.escapeHtml("TODO"),tag:"info",afterRender(r){r.target?.querySelector(".support-info");}}))),n}}class fi extends le{isSupport(){return typeof wt=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof H.getResourceText=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=wt(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.getResourceText,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(M(async()=>{try{return typeof await r.fn("ViewerCSS")=="string"?{text:fe.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:fe.escapeHtml(r.name+" return is not string"),tag:"error"}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class di extends le{isSupport(){return typeof sn=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof H.getResourceUrl=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let s=Reflect.apply(sn,this,r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.getResourceUrl,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(M(async()=>{try{let o=await r.fn("ViewerCSS");return typeof o!="string"?{text:fe.escapeHtml(`${r.name} return is not string`),tag:"error"}:(o=o.trim(),o.startsWith("data:text/css;base64")?o.startsWith("data:text/css;base64,LyohCiAqIFZpZXdlci5qcyB2MS4xMS43CiAqIGh0dHBzOi8vZmVuZ3")?{text:fe.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:fe.escapeHtml("支持通过@resource引用资源并进行base64编码，但是base64编码的实现方式不同"),tag:"warn"}:{text:fe.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"})}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class pi extends le{isSupport(){return typeof ln=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof H.getTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async()=>new Promise(r=>{ln((...o)=>{r(...o);});}),formList:n.forms[1].forms},{name:t.name,fn:H.getTab,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(M(()=>({text:"测试获取当前Tab",description:"",tag:"info",afterRender(o){let s=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);b.after(o.$leftContainer,s);let i;b.on(s,"click",async l=>{b.preventEvent(l);try{clearTimeout(i),Z.setTag(o.$leftText,"error","等待3s内触发回调函数"),i=ke(()=>{Z.setTag(o.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await r.fn();clearTimeout(i),console.log(r.name+" callback tab",c),typeof c=="object"&&c!=null?Z.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):Z.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){O.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class ui extends le{isSupport(){return typeof cn=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof H.getTabs=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async()=>new Promise(r=>{cn((...o)=>{r(...o);});}),formList:n.forms[1].forms},{name:t.name,fn:H.getTabs,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(M(()=>({text:"测试获取所有Tab",description:"",tag:"info",afterRender(o){let s=b.toElement(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="button" data-type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
								`,false,false);b.after(o.$leftContainer,s);let i;b.on(s,"click",async l=>{try{b.preventEvent(l),clearTimeout(i),Z.setTag(o.$leftText,"error","等待3s内触发回调函数"),i=ke(()=>{Z.setTag(o.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await r.fn();clearTimeout(i),console.log(r.name+" callback tabs",c),typeof c=="object"&&c!=null?Z.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):Z.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){O.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class bi extends le{isSupport(){return typeof at=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof H.getValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=at(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.getValue,formList:n.forms[2].forms}].forEach(r=>{let o=r.name;r.formList.push(...[{key:`Test ${o} boolean`,value:true,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} number`,value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} string`,value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:`Test ${o} undefined`,value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} null`,value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} object`,value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(s=>(()=>{let i=s.key,l=s.value;return M(()=>({text:s.text(),description:s.desc(),tag:"info",afterRender(c){let f=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(c.$leftContainer,f),b.on(f,"click",async d=>{b.preventEvent(d);try{De(i,l);let u=await r.fn(i);if(typeof u==typeof l){if(l===null&&l!=u){O.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}O.success("读取成功，存储类型和读取类型一致");}else O.error("读取成功，但存储类型和读取类型不同");}catch(u){O.error(u.toString(),{consoleLogContent:true});}});}}))})()),(()=>{let s=`Test ${o} null with defaultValue`,i=123;return M(()=>({text:"存储object类型的null，读取时指定默认值为"+i,description:`${o}("${s}", ${i})`,tag:"info",afterRender(l){let c=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(l.$leftContainer,c),b.on(c,"click",async f=>{b.preventEvent(f);try{await r.fn(s,null);let d=await r.fn(s,i);typeof d=="object"&&d==null?O.success("读取的值是存储的值："+d):O.error("读取的值不是存储的值："+d);}catch(d){O.error(d.toString(),{consoleLogContent:true});}});}}))})(),(()=>{let s=`Test ${o} defaultValue`,i=123;return M(()=>({text:"不存储，测试调用默认值",description:`${o}("${s}", ${i})`,tag:"info",afterRender(l){let c=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(l.$leftContainer,c),b.on(c,"click",async f=>{b.preventEvent(f);try{let d=await r.fn(s,i);typeof d==typeof i?O.success("读取的值是默认值："+d):O.error("读取的值不是默认值："+d);}catch(d){O.error(d.toString(),{consoleLogContent:true});}});}}))})());}),n}}class hi extends le{isSupport(){return typeof vt=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof H.getValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=vt(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.getValues,formList:n.forms[2].forms}].forEach(r=>{let o=r.name;r.formList.push(M(()=>({text:"测试直接读取",description:"没有入参",tag:"info",afterRender(s){let i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);b.after(s.$leftContainer,i),b.on(i,"click",async l=>{b.preventEvent(l);try{let c=await r.fn();O.info("请在控制台查看读取的数据"),console.log(c);}catch(c){O.error(c.toString(),{consoleLogContent:true});}});}})),M(()=>{let s=ae.toJSON(`{
								"${o}-test-key-non-exists-1": 1111,
								"${o}-test-key-non-exists-2": 2222,
							}`);return {text:"测试读取不存在的数据",description:"数据默认值："+JSON.stringify(s),tag:"info",afterRender(i){let l=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);b.after(i.$leftContainer,l),b.on(l,"click",async c=>{b.preventEvent(c);try{let f=await r.fn(s);console.log(f),f==null?O.error("读取失败，读取的数据为null"):JSON.stringify(f)===JSON.stringify(s)?O.success("读取成功，读取的数据和默认值相同"):O.error("读取成功，但读取的数据和默认值不同");}catch(f){O.error(f.toString(),{consoleLogContent:true});}});}}}),(()=>{let s=ae.toJSON(`{
							"${o}-test-key-1": 1,
							"${o}-test-key-2": 2,
						}`);return M(()=>({text:"测试存储对象并读取",description:JSON.stringify(s),tag:"info",afterRender(i){let l=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(i.$leftContainer,l),b.on(l,"click",async c=>{b.preventEvent(c);try{Et(s);let f=Object.keys(s),d=await r.fn(f);console.log(d),d==null?O.error("读取失败，读取的数据为null"):JSON.stringify(d)===JSON.stringify(s)?O.success("读取成功，写入的数据和读取的数据相同"):O.error("读取成功，但写入的数据和读取的数据不同");}catch(f){O.error(f.toString(),{consoleLogContent:true});}});}}))})());}),n}}class mi extends le{isSupport(){return typeof Fe=="object"&&Fe!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof H.info=="object"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（GM）",forms:[]}]};return this.isSupport()&&[{name:e,fn:Fe,formList:n.forms[1].forms},{name:t.name,fn:H.info,formList:n.forms[2].forms}].forEach(r=>{r.name,r.formList.push(...[{value:r.fn?.downloadMode,type:"string",text:`${r.name}.downloadMode`,notExistsTag:"error"},{value:r.fn?.scriptHandler,type:"string",text:`${r.name}.scriptHandler`},{value:r.fn?.scriptMetaStr,type:"string",text:`${r.name}.scriptMetaStr`},{value:r.fn?.version,type:"string",text:`${r.name}.version`},{value:r.fn?.script,type:"object",text:`${r.name}.script`},{value:r.fn?.script?.name,type:"string",text:`${r.name}.script.name`},{value:r.fn?.script?.author,type:"string",text:`${r.name}.script.author`},{value:r.fn?.script?.description,type:"string",text:`${r.name}.script.description`},{value:r.fn?.script?.version,type:"string",text:`${r.name}.script.version`}].map(o=>M(()=>{try{return o.value!=null&&typeof o.value===o.type?{text:"支持 "+o.text+" 类型："+o.type,tag:"success"}:{text:"不支持 "+o.text+" 类型："+o.type,tag:o.notExistsTag??"error"}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}})));}),n}}class gi extends le{isSupport(){return typeof fn=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof H.listValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=fn(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.listValues,formList:n.forms[2].forms}].forEach(r=>{r.name,r.formList.push(M(()=>({text:"查看存储的所有键名",tag:"info",afterRender(o){let s=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);b.after(o.$leftContainer,s),b.on(s,"click",async i=>{b.preventEvent(i);try{let l=await r.fn();console.log(r.name+" call result",l),Array.isArray(l)?l.find(f=>typeof f!="string")?O.error("返回值数组中存在非string类型"):alert(JSON.stringify(l,null,4)):O.error("返回值不是数组");}catch(l){O.error(l.toString(),{consoleLogContent:true});}});}})));}),n}}class yi extends le{isSupport(){return typeof dn=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof H.log=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=dn(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.log,formList:n.forms[2].forms}].forEach(r=>{r.name,r.formList.push(M(()=>{try{let o="test "+r.name;return {text:fe.escapeHtml("请在控制台查看输出"),tag:"info",description:"test "+r.name,afterRender(s){let i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);b.on(i,"click",async l=>{b.preventEvent(l);try{await r.fn(o);}catch(c){O.error(c.toString(),{consoleLogContent:!0});}}),b.after(s.$leftContainer,i);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class xi extends le{isSupport(){return typeof pn=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof H.notification=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async r=>new Promise(o=>{let s=r.onclick,i=pn({...r,onclick(...l){typeof s=="function"&&Reflect.apply(s,this,l),o(i??true);}});}),formList:n.forms[1].forms},{name:t.name,fn:H.notification,formList:n.forms[2].forms}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(M(()=>{try{return {text:fe.escapeHtml("点击通知的内容测试url"),tag:"info",description:"https://example.com/",afterRender(o){let s=o.target,i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);b.on(i,"click",async l=>{b.preventEvent(l);try{await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/"});}catch(c){O.error(c.toString(),{consoleLogContent:!0});}}),b.after(o.$leftContainer,i);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),M(()=>{try{let o,s,i=!1,l=!1;return {text:"测试通知的timeout",description:"请勿点击通知",tag:"info",afterRender(c){o=c.target,s=c.$leftContainer;let f=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),d,u=ae.debounce(()=>{try{clearTimeout(d),b.html(c.$leftText,'<p class="success">测试成功，触发</p>'),i=!1,l=!1;}catch(m){O.error(m.toString(),{consoleLogContent:!0});}},800);b.on(f,"click",async m=>{try{b.preventEvent(m),clearTimeout(d);let y=10,g=y,x=()=>{let A="正在等待触发超时：5000ms";return g--,A};Z.setTag(c.$leftText,"info",x()),d=ke(()=>{Z.setTag(c.$leftText,"error","测试超时，未触发ondone回调");},y*1e3);const w=await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/",timeout:5e3,ondone(){u();}});}catch(y){O.error(y.toString(),{consoleLogContent:!0});}}),b.after(s,f);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}),M(()=>{try{let o,s,i=!1,l=!1,c=!1,f="点击通知的内容测试onclick、ondone函数";return {text:f,description:"https://example.com/",tag:"info",afterRender(u){o=u.target,s=u.$leftContainer;let m=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),y,g,x=ae.debounce(()=>{try{clearTimeout(y),clearInterval(g);let w="",A="success",T="",v="success";i?(w+="支持 onclick 函数",l?(w=w.trim(),w+="且支持提供 event 参数"):(w+="但是不支持提供 event 参数",A="warn")):(w+="不支持 onclick 函数",A="error"),c?T+="支持 ondone 函数":(T+="不支持 ondone 函数",v="error"),b.html(u.$leftText,`
												<p class="${A}">${w}</p>
												<p class="${v}">${T}</p>`),i=!1,c=!1,l=!1;}catch(w){O.error(w.toString(),{consoleLogContent:!0});}},800);b.on(m,"click",async w=>{try{b.preventEvent(w),clearTimeout(y),clearInterval(g);let A=10,T=A,v=()=>{let C=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${T}s`;return T--,C};b.text(u.$leftText,v()),b.text(u.$leftDesc,f),b.show(u.$leftDesc,!1),y=ke(()=>{clearInterval(g),Z.setTag(u.$leftText,"error","测试超时，未触发回调");},A*1e3),g=setInterval(()=>{b.text(u.$leftText,v());},1e3),await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/",onclick:C=>{console.log(C),i=!0,C&&typeof C.preventDefault=="function"&&(l=!0,C.preventDefault()),x();},ondone(){c=!0,x();}});}catch(A){O.error(A.toString(),{consoleLogContent:!0});}}),b.after(s,m);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}),M(()=>{try{let o,s,i=!1,l=!1,c=!1,f="123",d="456",u="notification_tag_"+Date.now(),m={title:"测试通知的内容更新（tag）",text:f,tag:u},y=`更新前：${f}，更新后：${d}`;return {text:m.title,description:y,tag:"info",afterRender(g){o=g.target,s=g.$leftContainer;let x=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),w,A;b.on(x,"click",async T=>{try{b.preventEvent(T),clearTimeout(w),clearInterval(A);let v=5,C=v,L=()=>{let D=`${C}s后通知的内容将更新为：${d}`;return C--,D};b.text(g.$leftDesc,L()),b.show(g.$leftDesc,!1),w=setTimeout(async()=>{clearInterval(A),b.text(g.$leftDesc,y),r.fn({...m,text:d});},v*1e3),A=setInterval(()=>{b.text(g.$leftDesc,L());},1e3),await r.fn(m);}catch(v){O.error(v.toString(),{consoleLogContent:!0});}}),b.after(s,x);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class wi extends le{isSupport(){return typeof un=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof H.openInTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=un(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.openInTab,formList:n.forms[2].forms}].forEach(r=>{r.formList.push(M(()=>{try{return {text:"后台打开：https://www.example.com/",tag:"info",afterRender(o){let s=o.target,i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);b.on(i,"click",async l=>{try{b.preventEvent(l),b.text(o.$leftDesc,this.text),b.show(o.$leftDesc,!1);let c=await r.fn("https://www.example.com/");if(typeof c=="object")if(c==null)Z.setTag(o.$leftText,"error","返回值为null");else {let f="close"in c&&typeof c.close=="function",d="closed"in c&&typeof c.closed=="boolean",u="onclose"in c;b.html(o.$leftText,`
													${f?'<p class="success">支持 .close()</p>':'<p class="error">不支持 .close()</p>'}
													${d?'<p class="success">支持 .closed</p>':'<p class="error">不支持 .closed</p>'}
													${u?'<p class="success">支持设置属性 .onclose</p>':'<p class="error">不支持设置属性 .onclose</p>'}
										`);}else Z.setTag(o.$leftText,"error","返回值不是对象："+typeof c);}catch(c){O.error(c.toString(),{consoleLogContent:!0});}}),b.after(o.$leftContainer,i);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),M(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(o){let s=o.target,i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),l,c=()=>{clearTimeout(l),Z.setTag(o.$leftText,"success","测试新标签页打开成功");};b.on(i,"click",async f=>{try{b.preventEvent(f),b.off(ve,"blur",c,{capture:!0}),clearTimeout(l),Z.setTag(o.$leftText,"info","等待页面失去焦点..."),b.text(o.$leftDesc,this.text),b.show(o.$leftDesc,!1),b.on(ve,"blur",c,{capture:!0,once:!0}),await r.fn("https://www.example.com/",{active:!0}),l=ke(()=>{b.off(ve,"blur",c,{capture:!0}),Z.setTag(o.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch(d){O.error(d.toString(),{consoleLogContent:!0});}}),b.after(o.$leftContainer,i);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),M(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(o){let s=o.target,i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),l;b.on(i,"click",async c=>{try{b.preventEvent(c),clearTimeout(l),Z.setTag(o.$leftText,"info","等待调用 .close()"),b.text(o.$leftDesc,this.text),b.show(o.$leftDesc,!1);let f=await r.fn("https://www.example.com/");f&&typeof f?.close=="function"?l=ke(()=>{try{f.close(),Z.setTag(o.$leftText,"success","成功调用 .close()");}catch(d){Z.setTag(o.$leftText,"error","调用 .close() 方法失败 "+d);}},1e3):Z.setTag(o.$leftText,"error","返回对象中不支持 .close() 方法");}catch(f){O.error(f.toString(),{consoleLogContent:!0});}}),b.after(o.$leftContainer,i);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),M(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(o){let s=o.target,i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),l,c;b.on(i,"click",async f=>{try{b.preventEvent(f),clearTimeout(c),clearTimeout(l),Z.setTag(o.$leftText,"info","等待触发监听 .onclose"),b.text(o.$leftDesc,this.text),b.show(o.$leftDesc,!1);let d=await r.fn("https://www.example.com/");typeof d=="object"&&d!=null&&(d.onclose=()=>{clearTimeout(l),clearTimeout(c),Z.setTag(o.$leftText,"success","成功触发 .onclose");}),d&&typeof d?.close=="function"?l=ke(()=>{try{d.close(),c=ke(()=>{Z.setTag(o.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch(u){Z.setTag(o.$leftText,"error","调用 .close() 方法失败 "+u);}},1e3):Z.setTag(o.$leftText,"error","返回对象中不支持 .close() 方法");}catch(d){O.error(d.toString(),{consoleLogContent:!0});}}),b.after(o.$leftContainer,i);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class vi extends le{isSupport(){return typeof At=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof H.registerMenuCommand=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=At(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.registerMenuCommand,formList:n.forms[2].forms}].forEach(r=>{r.formList.push(M(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(o){let s=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);b.after(o.$leftContainer,s);let i,l;b.on(s,"click",async c=>{try{b.preventEvent(c),clearTimeout(i),clearInterval(l),b.text(o.$leftDesc,this.text),b.show(o.$leftDesc,!1);let f=10,d=()=>{let m=`已执行注册菜单，请在${f}s内点击菜单项`;return f--,m};Z.setTag(o.$leftText,"info",d()),l=setInterval(()=>{Z.setTag(o.$leftText,"info",d());},1e3),i=ke(()=>{clearInterval(l),Z.setTag(o.$leftText,"error","测试超时，未触发回调");},10*1e3);const u=await r.fn("Test Menu",m=>{try{clearInterval(l),clearTimeout(i),Z.clearTag(o.$leftText);let y=[];y.push({tag:"success",text:"支持注册菜单"}),m?y.push({tag:"success",text:"支持点击回调且有event参数"}):y.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof u=="number"||typeof u=="string"?y.push({tag:"success",text:"函数返回值是string|number"}):y.push({tag:"error",text:"函数返回值不是string|number："+typeof u}),b.html(o.$leftText,y.map(g=>`<p class="${g.tag}">${g.text}</p>`).join(`
`));}catch(y){O.error(y.toString(),{consoleLogContent:!0});}});}catch(f){O.error(f.toString(),{consoleLogContent:!0});}});}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}),M(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(o){let s=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);b.after(o.$leftContainer,s);let i;b.on(s,"click",async l=>{try{b.preventEvent(l),clearTimeout(i);const c=await r.fn("Test Update Menu",f=>{});O.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(i),i=ke(async()=>{await r.fn("Test Update Menu Success!!!",()=>{},{id:c}),O.success("已执行更新菜单命令，请自行验证");},3e3);}catch(c){O.error(c.toString(),{consoleLogContent:!0});}});}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class Ai extends le{isSupport(){return typeof bn=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof H.removeValueChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=bn(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.removeValueChangeListener,formList:n.forms[2].forms}].forEach(r=>{r.name,r.formList.push((()=>{let o=e+"_key_1";return M(()=>({text:"测试移除监听器",description:"",tag:"info",afterRender(s){let i=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(s.$leftContainer,i);let l=[];b.on(i,"click",async c=>{b.preventEvent(c);try{l=[],Z.setTag(s.$leftText,"info","等待移除监听器"),b.text(s.$leftDesc,this.text),b.show(s.$leftDesc,!1);let f=ae.formatTime(Date.now()),d=Ut(o,function(u,m,y,g){console.log(arguments),l.push({tag:"error",text:"未成功移除监听器"}),Z.setTagList(s.$leftText,l);});await r.fn(d),l.push({tag:"success",text:"支持移除监听器"}),Z.setTagList(s.$leftText,l),De(o,f);}catch(f){O.error(f.toString(),{consoleLogContent:true});}});}}))})());}),n}}class Ei extends le{isSupport(){return typeof Er=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof H.saveTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>{try{return {text:fe.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Ti extends le{isSupport(){return typeof hn=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof H.setClipboard=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{if(typeof r[2]=="function"){const s=r[2];r[2]=(...i)=>{s(...i),o(void 0);};}hn(...r);}),formList:n.forms[1].forms},{name:t.name,fn:async(...r)=>{const o=r[2];await H.setClipboard(...r),typeof o=="function"&&o();},formList:n.forms[2].forms}].forEach(r=>{r.formList.push(M(()=>({text:"复制内容到剪贴板：Test "+r.name,tag:"info",afterRender(o){let s=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);b.after(o.$leftContainer,s);let i;b.on(s,"click",async l=>{try{b.preventEvent(l),clearTimeout(i),O.info("等待3s内触发成功复制的回调"),i=ke(()=>{Z.setTag(o.$leftText,"error","不支持触发回调函数");},3e3),await r.fn("Test "+r.name,"text",()=>{clearTimeout(i),Z.setTag(o.$leftText,"success","支持触发回调函数");});}catch(c){O.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class Si extends le{isSupport(){return typeof De=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof H.setValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=De(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.setValue,formList:n.forms[2].forms}].forEach(r=>{let o=r.name;r.formList.push(...[{key:`Test ${o} boolean`,value:true,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} number`,value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} string`,value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:`Test ${o} undefined`,value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} null`,value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} object`,value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(s=>(()=>{let i=s.key,l=s.value;return M(()=>({text:s.text(),description:s.desc(),tag:"info",afterRender(c){let f=b.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);b.after(c.$leftContainer,f),b.on(f,"click",async d=>{b.preventEvent(d);try{await r.fn(i,l),O.info("执行写入完毕，请自行查看是否成功写入");}catch(u){O.error(u.toString(),{consoleLogContent:true});}});}}))})()));}),n}}class Ci extends le{isSupport(){return typeof Et=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof H.setValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=Et(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.setValues,formList:n.forms[2].forms}].forEach(r=>{r.name,r.formList.push((()=>{let o={foo:1,bar:2};return M(()=>({text:"测试存储对象",description:JSON.stringify(o),tag:"info",afterRender(s){let i=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);b.after(s.$leftContainer,i),b.on(i,"click",async l=>{b.preventEvent(l);try{await r.fn(o),O.info("执行写入完毕，请自行查看是否成功写入");}catch(c){O.error(c.toString(),{consoleLogContent:true});}});}}))})());}),n}}class ki extends le{isSupport(){return typeof Vt=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof H.unregisterMenuCommand=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const s=Vt(...r);o(s);}),formList:n.forms[1].forms},{name:t.name,fn:H.unregisterMenuCommand,formList:n.forms[2].forms}].forEach(r=>{r.formList.push(M(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(o){let s=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);b.after(o.$leftContainer,s);let i;b.on(s,"click",l=>{try{b.preventEvent(l),clearTimeout(i);const c=At("Test UnRegister Menu",f=>{});O.info("已注册菜单，10s后自动执行卸载",{timeout:10*1e3}),clearTimeout(i),i=ke(async()=>{await r.fn(c),O.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(c){O.error(c.toString(),{consoleLogContent:!0});}});}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}}));}),n}}class Mi extends le{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof ve=="object"&&ve!=null}getUIOption(){let e=this.getApiName(),t={id:"aside-"+e,title:e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(n){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&t.forms[1].forms.push(M(()=>{let n="test-gm-window",r=Be==ve;return Be[n]=n,r=typeof ve[n]!="string",Reflect.deleteProperty(Be,n),r?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),t}}class Li extends le{isSupport(){return typeof Tr=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof H.webRequest=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>{try{return {text:fe.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class $i extends le{isSupport(){return typeof Un=="function"}getApiName(){return "GM_xmlhttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof H.xmlHttpRequest=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(r){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>{try{return {text:fe.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Ii extends le{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof H=="object"&&H!=null}getUIOption(){}}class _i extends le{isSupport(){return (typeof we=="object"||typeof we=="function")&&we!=null&&typeof we?.setMute=="function"&&typeof we?.getState=="function"&&typeof we?.addStateChangeListener=="function"&&typeof we?.removeStateChangeListener=="function"}getApiOption(){let e=this.isSupport();return {isSupport_setMute:e&&typeof we?.setMute=="function",isSupport_getState:e&&typeof we?.getState=="function",isSupport_addStateChangeListener:e&&typeof we?.addStateChangeListener=="function",isSupport_removeStateChangeListener:e&&typeof we?.removeStateChangeListener=="function"}}getApiName(){return "GM_audio"}getAsyncApiOption(){let e=this.isSupportGM()&&(typeof H.audio=="object"||typeof H.audio=="function")&&H.audio!=null&&typeof H.audio?.setMute=="function"&&typeof H.audio?.getState=="function"&&typeof H.audio?.addStateChangeListener=="function"&&typeof H.audio?.removeStateChangeListener=="function";return {name:"GM.audio",isSupport:e,isSupport_setMute:e&&typeof H.audio?.setMute=="function",isSupport_getState:e&&typeof H.audio?.getState=="function",isSupport_addStateChangeListener:e&&typeof H.audio?.addStateChangeListener=="function",isSupport_removeStateChangeListener:e&&typeof H.audio?.removeStateChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getApiOption(),n=this.getAsyncApiOption(),r={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e+".setMute",`${e} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(s){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:`支持 ${e}，类型：${typeof we}`,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]},o=r.forms[0].forms;return this.isSupport()&&o.push(M(()=>t.isSupport_setMute?{text:`支持 ${e}.setMute`,tag:"success"}:{text:`不支持 ${e}.setMute`,tag:"error"}),M(()=>t.isSupport_getState?{text:`支持 ${e}.getState`,tag:"success"}:{text:`不支持 ${e}.getState`,tag:"error"}),M(()=>t.isSupport_addStateChangeListener?{text:`支持 ${e}.addStateChangeListener`,tag:"success"}:{text:`不支持 ${e}.addStateChangeListener`,tag:"error"}),M(()=>t.isSupport_removeStateChangeListener?{text:`支持 ${e}.removeStateChangeListener`,tag:"success"}:{text:`不支持 ${e}.removeStateChangeListener`,tag:"error"})),n.isSupport?o.push(M(()=>n.isSupport_setMute?{text:`支持 ${n.name}.setMute`,tag:"success"}:{text:`不支持 ${n.name}.setMute`,tag:"error"}),M(()=>n.isSupport_getState?{text:`支持 ${n.name}.getState`,tag:"success"}:{text:`不支持 ${n.name}.getState`,tag:"error"}),M(()=>n.isSupport_addStateChangeListener?{text:`支持 ${n.name}.addStateChangeListener`,tag:"success"}:{text:`不支持 ${n.name}.addStateChangeListener`,tag:"error"}),M(()=>n.isSupport_removeStateChangeListener?{text:`支持 ${n.name}.removeStateChangeListener`,tag:"success"}:{text:`不支持 ${n.name}.removeStateChangeListener`,tag:"error"})):o.push(M(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()&&[{name:e,setMute:async(...s)=>new Promise((i,l)=>{const[c,f]=s;we.setMute(c,d=>{d?l(d):i(void 0);});}),getState:async(...s)=>new Promise((i,l)=>{const[c,f]=s;we.getState(d=>{d||l(new Error("failed to read state")),i(d);});}),addStateChangeListener:async(...s)=>new Promise((i,l)=>{const[c]=s;we.addStateChangeListener(c,f=>{f?l(f):i(void 0);});}),removeStateChangeListener:async(...s)=>new Promise((i,l)=>{const[c]=s;we.removeStateChangeListener(c,f=>{f?l(f):i(void 0);});}),formList:r.forms[1].forms},{name:n.name,setMute:async(...s)=>{const[i]=s;return await H.audio?.setMute(i)},getState:async(...s)=>{const i=await H.audio?.getState();if(typeof i=="object"&&i!=null){if(typeof i?.isMuted!="boolean")throw new Error("GM.audio.getState 返回值类型错误");return i}else throw new Error("返回值不是一个对象")},addStateChangeListener:H.audio?.addStateChangeListener,removeStateChangeListener:H.audio?.removeStateChangeListener,formList:r.forms[2].forms}].forEach(s=>{s.name,s.formList.push(M(()=>{try{return {text:fe.escapeHtml("测试设置当前tab静音"),tag:"info",description:"点击按钮进行测试",afterRender(i){let l=b.toElement(`
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,!1,!1);b.on(l,"click",async c=>{try{b.preventEvent(c);const f=await s.setMute({isMuted:!0});console.log(s.name+".setMute result：",f),f===void 0?Z.setTag(i.$leftText,"success","执行成功"):Z.setTag(i.$leftText,"warn","执行成功，但返回值类型不同："+f),b.text(i.$leftDesc,this.text),b.show(i.$leftDesc,!1);}catch(f){O.error(f.toString(),{consoleLogContent:!0});}}),b.after(i.$leftContainer,l);}}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试取消当前tab静音"),tag:"info",description:"点击按钮进行测试",afterRender(i){let l=b.toElement(`
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,!1,!1);b.on(l,"click",async c=>{try{b.preventEvent(c);const f=await s.setMute({isMuted:!1});console.log(s.name+".setMute result：",f),f===void 0?Z.setTag(i.$leftText,"success","执行成功"):Z.setTag(i.$leftText,"warn","执行成功，但返回值类型不同："+f),b.text(i.$leftDesc,this.text),b.show(i.$leftDesc,!1);}catch(f){O.error(f.toString(),{consoleLogContent:!0});}}),b.after(i.$leftContainer,l);}}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("获取当前tab静音状态信息"),tag:"info",description:"点击按钮进行测试",afterRender(i){let l=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);b.on(l,"click",async c=>{try{b.preventEvent(c);const f=await s.getState();if(console.log(s.name+".getState result：",f),typeof f=="object"&&f!==null){const d=[];typeof f?.isMuted=="boolean"?d.push(`
                                                        <p class="support-info success">支持属性：isMuted，当前类型：${typeof f?.isMuted}</p>    
                                                    `):d.push(`
                                                        <p class="support-info error">不支持属性：isMuted，当前类型：${typeof f?.isMuted}</p>    
                                                    `),"muteReason"in f&&typeof f?.muteReason=="string"||f?.muteReason===void 0?d.push(`
                                                        <p class="support-info success">支持属性：muteReason，当前类型：${typeof f?.muteReason}</p>    
                                                    `):d.push(`
                                                        <p class="support-info error">不支持属性：muteReason，当前类型：${typeof f?.muteReason}</p>    
                                                    `),typeof f?.isAudible=="boolean"?d.push(`
                                                        <p class="support-info success">支持属性：isAudible，当前类型：${typeof f?.isAudible}</p>
                                                    `):d.push(`
                                                        <p class="support-info error">不支持属性：isAudible，当前类型：${typeof f?.isAudible}</p>
                                                    `),Z.setTag(i.$leftText,"success",d.join(`
`));}else Z.setTag(i.$leftText,"error","返回值类型错误："+typeof f);b.text(i.$leftDesc,this.text),b.show(i.$leftDesc,!1),alert(JSON.stringify(f,null,4));}catch(f){O.error(f.toString(),{consoleLogContent:!0});}}),b.after(i.$leftContainer,l);}}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试监听静音状态改变"),tag:"info",description:"点击按钮进行测试",afterRender(i){let l=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1),c;b.on(l,"click",async f=>{try{b.preventEvent(f),await s.addStateChangeListener(d=>{console.log(s.name+".addStateChangeListener callback change value：",d),alert(JSON.stringify(d,null,4));}),await ae.sleep(500),await s.setMute({isMuted:!0}),await ae.sleep(500),await s.setMute({isMuted:!1});}catch(d){O.error(d.toString(),{consoleLogContent:!0});}}),b.after(i.$leftContainer,l);}}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试移除监听器"),tag:"info",description:"点击按钮进行测试",afterRender(i){let l=b.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1),c=!0,f;b.on(l,"click",async d=>{try{b.preventEvent(d);let u=m=>{c=!1,O.error("移除监听器失败");};f=O.loading("处理监听器中..."),await s.addStateChangeListener(u),await s.removeStateChangeListener(u),f.setText("等待500ms，设置当前Tab静音"),await ae.sleep(500),await s.setMute({isMuted:!0}),f.setText("等待500ms，设置当前Tab取消静音"),await ae.sleep(500),await s.setMute({isMuted:!1}),f.close(),c&&O.success("移除监听器成功");}catch(u){f?.close(),O.error(u.toString(),{consoleLogContent:!0});}}),b.after(i.$leftContainer,l);}}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{}}));}),r}}const Se={unsafeWindow:new Mi,GM:new Ii,addElement:new ri,addStyle:new oi,download:new ci,getResourceText:new fi,getResourceUrl:new di,info:new mi,log:new yi,notification:new xi,openInTab:new wi,registerMenuCommand:new vi,unregisterMenuCommand:new ki,setClipboard:new Ti,getTab:new pi,saveTab:new Ei,getTabs:new ui,setValue:new Si,getValue:new bi,deleteValue:new ii,listValues:new gi,setValues:new Ci,getValues:new hi,deleteValues:new li,addValueChangeListener:new ai,removeValueChangeListener:new Ai,xmlHttpRequest:new $i,webRequest:new Li,cookie:new si,audio:new _i},Ve={$storageKey:"gm-api-test-storage-config",set(a,e){let t=window.localStorage.getItem(Ve.$storageKey)??"{}",n=ae.toJSON(t);n[a]=e,window.localStorage.setItem(Ve.$storageKey,JSON.stringify(n,(r,o)=>typeof o=="function"?o.tString():o));},get(a,e){let t=window.localStorage.getItem(Ve.$storageKey)??"{}";return ae.toJSON(t)[a]??e},delete(a){let e=window.localStorage.getItem(Ve.$storageKey)??"{}",t=ae.toJSON(e);Reflect.deleteProperty(t,a),window.localStorage.setItem(Ve.$storageKey,JSON.stringify(t,(n,r)=>typeof r=="function"?r.tString():r));}},G={set(a,e){Se.setValue.isSupport()&&Se.getValue.isSupport()&&Se.deleteValue.isSupport()?De(a,e):Ve.set(a,e);},get(a,e){return Se.setValue.isSupport()&&Se.getValue.isSupport()&&Se.deleteValue.isSupport()?at(a,e):Ve.get(a,e)},delete(a){Se.setValue.isSupport()&&Se.getValue.isSupport()&&Se.deleteValue.isSupport()?xt(a):Ve.delete(a);}},Ri=()=>{let a=[],e=[];Object.keys(Se).forEach(n=>{let r=Se[n],o=r.getApiName(),s=r.isSupport(),i=r.getAsyncApiOption();s?a.push({name:o,isSupport:s}):e.push({name:o,isSupport:s}),i&&(i.isSupport?a.push({name:i.name,isSupport:i.isSupport,leftTargetSelector:"#aside-"+o}):e.push({name:i.name,isSupport:i.isSupport,leftTargetSelector:"#aside-"+o}));});let t=n=>{let r=b.createElement("div",{className:"gm-api-features-item",innerHTML:`
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
			`});return b.on(r,"click",o=>{b.preventEvent(o);let s=r.getRootNode(),i=ae.isNotNull(n.leftTargetSelector)?n.leftTargetSelector:"#aside-"+n.name,l=s.querySelector(i);l&&(l.click(),l.scrollIntoView({behavior:"smooth"}));}),r};return {id:"component-common",title:"通用",scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)==="component-common"},clickCallback(n){G.set(j.asideLastVisit,"component-common");},forms:[{type:"forms",text:"@run-at document-start<br>注：注入速度等级越低，注入的速度越快<br>范围：0~4",forms:[M(()=>({text:fe.escapeHtml(rt),tag:"info"}))]},{type:"forms",text:"特性",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontSize="1.2em",r.formHeaderDivElement.style.fontWeight="700";},forms:[]},{type:"forms",text:"不支持列表",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.color="rgb(216, 30, 6)",r.formHeaderDivElement.style.fontWeight="600",e.length===0&&r.formContainerListElement?.remove();},forms:[{type:"own",getLiElementCallBack(n){let r=b.createElement("div",{className:"gm-api-features-not-support"}),o=document.createDocumentFragment();return e.forEach(s=>{o.append(t(s));}),r.appendChild(o),n.appendChild(r),n}}]},{type:"forms",text:"支持列表",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontWeight="600",a.length===0&&r.formContainerListElement?.remove();},forms:[{type:"own",getLiElementCallBack(n){let r=b.createElement("div",{className:"gm-api-features-support"}),o=document.createDocumentFragment();return a.forEach(s=>{o.append(t(s));}),r.appendChild(o),n.appendChild(r),n}}]}]}};class Ni extends Rt{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(n){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"功能测试",forms:[M(()=>{try{return {text:fe.escapeHtml("测试window.onurlchange"),tag:"info",description:"点击按钮进行测试",afterRender(n){let r=b.toElement(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1),o=i=>{clearTimeout(s),console.log("urlchange event info ==> ",i),O.success("urlchange event ==> url is changed");},s;b.on(r,"click",i=>{try{b.preventEvent(i),clearTimeout(s),Be.onurlchange===null?(Be.removeEventListener("urlchange",o),Be.addEventListener("urlchange",o),window.history.pushState({},"","#/onurlchange"),s=setTimeout(()=>{O.error("urlchange event is not trigger");},1e3)):O.error("window.onurlchange is not null");}catch(l){O.error(l.toString(),{consoleLogContent:!0});}}),b.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class Oi extends Rt{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(n){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"功能测试",forms:[M(()=>{try{return {text:fe.escapeHtml("测试window.close"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=b.toElement(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1);b.on(r,"click",o=>{b.preventEvent(o);try{Be.close();}catch(s){O.error(s.toString(),{consoleLogContent:!0});}}),b.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class Pi extends Rt{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return G.get(j.asideLastVisit)===e},clickCallback(n){G.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"功能测试",forms:[M(()=>{try{return {text:fe.escapeHtml("测试window.focus"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=b.toElement(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
										`,!1,!1),o=()=>{setTimeout(()=>{Be.focus();},3e3);};b.on(r,"click",s=>{b.preventEvent(s),window.removeEventListener("blur",o,{capture:!0}),window.addEventListener("blur",o,{capture:!0,once:!0});try{O.info("请切换至其它Tab页面，切换完毕3秒后会自动调用该函数");}catch(i){O.error(i.toString(),{consoleLogContent:!0});}}),b.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}if(Ne.isTopWindow()){let a=()=>{Ne.showPanel(ht.getConfig(0),void 0,void 0,true);},e=Xt.getMenuOption(0);e.callback=()=>{a();},Xt.updateMenuOption(e);let t=[Ri()];Object.keys(Se).forEach(n=>{let o=Se[n].getUIOption();o&&t.push(o);}),t.push(new Ni().getUIOption()),t.push(new Oi().getUIOption()),t.push(new Pi().getUIOption()),ht.addContentConfig(t),Ne.$data.panelConfig={style:`
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
	`},Ne.init(),a();}

})();