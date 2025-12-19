// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.12.19
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

  function Sr(){try{typeof Object.assign!="function"&&(Object.assign=function(...a){const e=Object(a[0]||{});return a.length>1&&[...a].splice(1,a.length-1).forEach(n=>{for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}),e});}catch(a){console.warn("Qmsg CompatibleProcessing Object.assign error",a);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){const a=this;function e(t){return function(n){const r=a.className.split(/\s+/g),o=r.indexOf(n);t(r,o,n),a.className=r.join(" ");}}return {add:e(function(t,n,r){~n||t.push(r);}),remove:e(function(t,n){~n&&t.splice(n,1);}),toggle:e(function(t,n,r){~n?t.splice(n,1):t.push(r);}),contains:function(t){return !!~a.className.split(/\s+/g).indexOf(t)},item:function(t){return a.className.split(/\s+/g)[t]||null}}}});}catch(a){console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning",a);}}const ye={INS_DEFAULT:{},get PLUGIN_NAME(){return "qmsg"},get NAMESPACE(){return "qmsg"},get config(){return {parent:document.body||document.documentElement,useShadowRoot:true,shadowRootMode:"open",animation:true,autoClose:true,listenEventToPauseAutoClose:true,listenEventToCloseInstance:true,content:"",isHTML:false,position:"top",showClose:false,maxNums:5,onClose:null,showIcon:true,showReverse:false,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:false,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:false,afterRender:null}}},Tr=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,Un={info:`
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
		</svg>`},Te={insInfoList:[],remove(a){let e=false;for(let t=0;t<Te.insInfoList.length;t++)if(Te.insInfoList[t].uuid===a){Te.insInfoList.splice(t,1),e=true;break}return e}},Cr=a=>(e,t)=>(a.set(e,t),t),sn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,zn=536870912,ln=zn*2,kr=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<ln?n+1:0;if(!t.has(r))return a(t,r);if(t.size<zn){for(;t.has(r);)r=Math.floor(Math.random()*ln);return a(t,r)}if(t.size>sn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*sn);return a(t,r)},Fn=new WeakMap,$r=Cr(Fn),Vt=kr($r,Fn),Er=a=>typeof a.start=="function",cn=new WeakMap,Mr=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return cn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=cn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Ot=new WeakMap,Lr=a=>{if(Ot.has(a))return Ot.get(a);const e=new Map;return Ot.set(a,e),e},Ir=a=>{const e=Mr(a);return t=>{const n=Lr(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}})),Er(t)&&t.start();const r=(s,l=null,c=[])=>new Promise((d,p)=>{const f=Vt(n);n.set(f,{reject:p,resolve:d}),l===null?t.postMessage({id:f,method:s},c):t.postMessage({id:f,method:s,params:l},c);}),o=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:r,notify:o})};return {...i}}},We=new Map([[0,null]]),Ke=new Map([[0,null]]),_r=Ir({clearInterval:({call:a})=>e=>{typeof We.get(e)=="symbol"&&(We.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{We.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof Ke.get(e)=="symbol"&&(Ke.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{Ke.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Vt(We);We.set(o,r);const i=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=We.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(e(...n),We.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Vt(Ke);return Ke.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=Ke.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(Ke.delete(o),e(...n));}),o}}),Rr=a=>{const e=new Worker(a);return _r(e)},Nr=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},Or=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,Ct=Nr(Rr,Or),Pr=a=>Ct().clearInterval(a),Dr=a=>Ct().clearTimeout(a),Br=(...a)=>Ct().setInterval(...a),Hr=(...a)=>Ct().setTimeout(...a),fe={getNameSpacify(...a){return [ye.NAMESPACE,...a].join("-")},isNumber(a){return /^\d+$/.test(a)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){const e=Math.random()*16|0;return (a=="x"?e:e&3|8).toString(16)})},mergeArgs(a="",e){const t={};if(arguments.length===0)return t;if(e!=null){if(t.content=a,typeof e=="object"&&e!=null)return Object.assign(t,e)}else {if(typeof a=="object"&&a!=null)return Object.assign(t,a);t.content=a;}return t},toDynamicObject(a,...e){const t=Object.assign({},a??{});return Object.keys(t).forEach(n=>{let r=t[n];Object.defineProperty(t,n,{get(){const o=e.findIndex(i=>typeof i=="object"&&i!=null&&i.hasOwnProperty.call(i,n));return o!==-1?e[o][n]:r},set(o){r=o;}});}),t},setTimeout(a,e){try{return Hr(a,e)}catch{return globalThis.setTimeout(a,e)}},clearTimeout(a){try{a!=null&&Dr(a);}catch{}finally{globalThis.clearTimeout(a);}},setInterval(a,e){try{return Br(a,e)}catch{return globalThis.setInterval(a,e)}},clearInterval(a){try{a!=null&&Pr(a);}catch{}finally{globalThis.clearInterval(a);}},setSafeHTML(a,e){try{a.innerHTML=e;}catch{if(globalThis.trustedTypes){const t=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:n=>n});a.innerHTML=t.createHTML(e);}else throw new Error("QmsgUtils trustedTypes is not defined")}}},Ie={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},__CAN_ANIMATION__:void 0,get CAN_ANIMATION(){return this.__CAN_ANIMATION__=this.__CAN_ANIMATION__??this.getStyleAnimationNameValue(document.createElement("div"))!=null,this.__CAN_ANIMATION__},getStyleAnimationNameValue(a){for(let e=0;e<this.$name.startNameList.length;e++){const t=this.$name.startNameList[e],n=a.style[t];if(n!=null)return n}},setStyleAnimationName(a,e=""){this.$name.startNameList.forEach(t=>{t in a.style&&(a.style[t]=e);});}},Vr=`@charset "utf-8";\r
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
.qmsg .qmsg-content-wrapper {\r
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
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap="no-wrap"] {\r
  white-space: nowrap;\r
}\r
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap="ellipsis"] {\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
.qmsg .qmsg-content-wrapper .qmsg-content-text[data-limitWidthWrap="wrap"] {\r
  white-space: normal;\r
}\r
.qmsg .qmsg-content-wrapper [class^="qmsg-content-"]:not(.qmsg-content-text) {\r
  display: flex;\r
  align-items: center;\r
}\r
.qmsg .qmsg-icon {\r
  position: relative;\r
  top: 0;\r
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
.qmsg .animate-turn {\r
  animation: MessageTurn 1s linear infinite;\r
  -webkit-animation: MessageTurn 1s linear infinite;\r
}\r
`,Ur=`@keyframes MessageTurn {\r
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
    ${Vr}

    ${Ur}
  `,getStyleElement(){const a=document.createElement("style");return a.setAttribute("type","text/css"),a.setAttribute("data-type",ye.PLUGIN_NAME),fe.setSafeHTML(a,jn.css),a}};class zr{timeId=void 0;startTime;endTime;setting;settingStr;settingJSON;uuid;state;repeatNum;$el={$item:null,get $content(){const e=this.$item.querySelector('[class^="qmsg-content-"] .qmsg-content-text');if(!e)throw new TypeError("QmsgInst $content is null");return e}};constructor(e,t){this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=fe.toDynamicObject(ye.config,e,ye.INS_DEFAULT),this.settingStr=JSON.stringify(this.setting),this.settingJSON=Object.assign({},this.setting),this.uuid=t,this.state="opening",this.$el.$item=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.initEl(),(typeof this.setting.consoleLogContent=="function"?this.setting.consoleLogContent(this):this.setting.consoleLogContent)&&console.log(this.setting.content),Reflect.set(this.$el.$item,"data-inst",this),typeof this.setting.afterRender=="function"&&this.setting.afterRender(this);}initEl(){const e=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$el.$item.classList.add(this.setting.customClass);const t=Un[this.setting.type||"info"];let n=fe.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(n+=" "+fe.getNameSpacify("content-with-close"));const r=this.setting.content||"",o=Tr;let i="";this.setting.showClose&&(i=`<i class="qmsg-icon qmsg-icon-close">${o}</i>`);const s=document.createElement("span");s.className="qmsg-content-text";const l=fe.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.isHTML?fe.setSafeHTML(s,r):s.innerText=r,this.setting.isLimitWidth){let w=this.setting.limitWidthNum;typeof w=="string"?fe.isNumber(w)&&(w=w+"px"):w=w.toString()+"px",s.style.maxWidth=w,s.style.width=w,s.setAttribute("data-limitWidthWrap",this.setting.limitWidthWrap);}else s.setAttribute("data-limitWidthWrap","no-wrap");fe.setSafeHTML(this.$el.$item,`
			<div class="qmsg-content-wrapper">
				<div class="${n}">
				${this.setting.showIcon?`<i class="qmsg-icon">${t}</i>`:""}
					${s.outerHTML}
					${i}
				</div>
			</div>
			`);const d=this.$el.$item.querySelector(".qmsg-content-wrapper");this.$el.$item.classList.add(fe.getNameSpacify("item")),this.$el.$item.setAttribute(fe.getNameSpacify("uuid"),this.uuid);let p,f,b;if(p=document.querySelector(".qmsg-shadow-container"),f=this.setting.useShadowRoot?p?.shadowRoot:p,!p){if(p=document.createElement("div"),p.className="qmsg-shadow-container",this.setting.useShadowRoot?f=p.attachShadow({mode:this.setting.shadowRootMode}):f=p,f.appendChild(jn.getStyleElement()),this.setting.style!=null){const w=document.createElement("style");w.setAttribute("type","text/css"),w.setAttribute("data-id",this.uuid),fe.setSafeHTML(w,this.setting.style),d.insertAdjacentElement("afterend",w);}this.setting.parent.appendChild(p);}if(f==null)throw new TypeError("QmsgInst "+ye.PLUGIN_NAME+" $shadowRoot is null");b=f.querySelector(`.${ye.NAMESPACE}.${fe.getNameSpacify("wrapper")}.${l}`),b||(b=document.createElement("div"),b.classList.add(ye.NAMESPACE,fe.getNameSpacify("wrapper"),fe.getNameSpacify("is-initialized"),l),f.appendChild(b)),this.setting.showReverse?b.style.flexDirection="column-reverse":b.style.flexDirection="column";let h=this.setting.zIndex;if(typeof h=="function"&&(h=h()),isNaN(h)||(b.style.zIndex=h.toString()),b.appendChild(this.$el.$item),this.setState(this.$el.$item,"opening"),this.setting.showClose){const w=this.$el.$item.querySelector(".qmsg-icon-close");w&&w.addEventListener("click",()=>{e.close();});}const g=()=>{Ie.getStyleAnimationNameValue(e.$el.$item)===Ie.$state.closing&&(e.endTime=Date.now(),e.destroy()),Ie.setStyleAnimationName(this.$el.$item);};if(Ie.$name.endNameList.forEach(function(w){e.$el.$item.addEventListener(w,g);}),this.setting.autoClose&&this.setting.listenEventToPauseAutoClose){this.resetAutoCloseTimer();const w=()=>{this.clearAutoCloseTimer();},A=()=>{if(this.timeId!=null){console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId："+this.timeId);return}this.startAutoCloseTimer();};let v=false;this.$el.$item.addEventListener("mouseenter",w),this.$el.$item.addEventListener("mouseleave",A),this.$el.$item.addEventListener("touchstart",()=>{v||(v=true,this.$el.$item.removeEventListener("mouseenter",w),this.$el.$item.removeEventListener("mouseleave",A)),w();},{passive:true}),this.$el.$item.addEventListener("touchend",A),this.$el.$item.addEventListener("touchcancel",A);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=ye.config.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=ye.config.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof ye.config.zIndex=="function"?ye.config.zIndex():ye.config.zIndex);}setState(e,t){!t||!Ie.$state[t]||(this.state=t,Ie.setStyleAnimationName(e,Ie.$state[t]));}setRepeatNumIncreasing(){this.repeatNum++;}setMsgCount(){const e=fe.getNameSpacify("count"),t=this.$el.$item.querySelector(`.${ye.NAMESPACE}.${fe.getNameSpacify("wrapper")} [class^="qmsg-content-"]`);if(!t)throw new TypeError("QmsgInst $content is null");let n=t.querySelector("."+e);n||(n=document.createElement("span"),n.classList.add(e),t.appendChild(n));const r=this.repeatNum;fe.setSafeHTML(n,r.toString()),Ie.setStyleAnimationName(n),Ie.setStyleAnimationName(n,"MessageShake"),this.resetAutoCloseTimer();}clearAutoCloseTimer(){fe.clearTimeout(this.timeId),this.timeId=void 0,this.startTime=null,this.endTime=null;}startAutoCloseTimer(){this.setting.autoClose&&this.setting.listenEventToPauseAutoClose&&(this.startTime=Date.now(),this.endTime=null,this.timeId=fe.setTimeout(()=>{this.close();},this.setting.timeout));}resetAutoCloseTimer(){this.clearAutoCloseTimer(),this.startAutoCloseTimer();}close(){this.setState(this.$el.$item,"closing"),Ie.CAN_ANIMATION?Te.remove(this.uuid):this.destroy();const e=this.setting.onClose;e&&typeof e=="function"&&e.call(this);}destroy(){this.endTime=Date.now(),this.$el.$item.remove(),fe.clearTimeout(this.timeId),Te.remove(this.uuid),this.timeId=void 0;}setText(e){const t=this.$el.$content;t.innerText=e,this.setting.content=e;}setHTML(e){const t=this.$el.$content;fe.setSafeHTML(t,e),this.setting.content=e;}}function pt(a={}){const e=JSON.stringify(a),t=fe.toDynamicObject(ye.config,a,ye.INS_DEFAULT),n=JSON.stringify(t);let r=Te.insInfoList.find(i=>i.configStr===e&&i.inst.settingStr===n),o=r?.inst;if(o==null){const i=fe.getUUID(),s=new zr(t,i),l={uuid:i,configStr:e,inst:s};Te.insInfoList.push(l);const c=Te.insInfoList.length,d=l.inst.setting.maxNums;if(c>d)for(let p=0;p<c-d;p++){const f=Te.insInfoList[p];f&&f.inst.setting.autoClose&&f.inst.close();}r=l,o=l.inst;}else o.repeatNum?o.repeatNum>=99||o.setRepeatNumIncreasing():o.repeatNum=2,o.setMsgCount();if(o)o.$el.$item.setAttribute("data-count",o?.repeatNum.toString());else throw new Error("QmsgInst is null");return o}const ft={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let a=0;a<Te.insInfoList.length;a++){const t=Te.insInfoList[a].inst,n=t.setting,r=Date.now();n.type!=="loading"&&n.autoClose&&typeof t.endTime!="number"&&typeof t.startTime=="number"&&typeof n.timeout=="number"&&r-t.startTime>=n.timeout&&t.close();}},option:{capture:true}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",ft.visibilitychange.eventConfig.callback,ft.visibilitychange.eventConfig.option):console.error("Qmsg addEvent visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",ft.visibilitychange.eventConfig.callback,ft.visibilitychange.eventConfig.option);}}},Fr="1.6.1";Sr();class jr{$data;$eventUtils;constructor(e){this.$data={version:Fr,config:ye,icon:Un,instanceStorage:Te},this.$eventUtils=ft,this.$eventUtils.visibilitychange.addEvent(),this.config(e);}config(e){const t=ye;if(e==null||typeof e!="object")return t.INS_DEFAULT;for(const n in e){if(!Object.hasOwn(e,n))continue;const r=Object.getOwnPropertyDescriptor(e,n);if(r)if("get"in r)Reflect.deleteProperty(t.INS_DEFAULT,n),Object.defineProperty(t.INS_DEFAULT,n,{get:r.get,configurable:true,enumerable:true});else if("value"in r)Reflect.deleteProperty(t.INS_DEFAULT,n),Object.defineProperty(t.INS_DEFAULT,n,{get:()=>r.value,configurable:true,enumerable:true});else throw new TypeError("Qmsg.config: descriptor.get or descriptor.value is null");else Reflect.set(t.INS_DEFAULT,n,e[n]);}return t.INS_DEFAULT}info(e,t){const n=fe.mergeArgs(e,t);return n.type="info",pt.call(this,n)}warning(e,t){const n=fe.mergeArgs(e,t);return n.type="warning",pt.call(this,n)}success(e,t){const n=fe.mergeArgs(e,t);return n.type="success",pt.call(this,n)}error(e,t){const n=fe.mergeArgs(e,t);return n.type="error",pt.call(this,n)}loading(e,t){const n=fe.mergeArgs(e,t);return n.type="loading",n.autoClose=false,pt.call(this,n)}remove(e){Te.remove(e);}closeAll(){for(let e=Te.insInfoList.length-1;e>=0;e--){const t=Te.insInfoList[e];t&&t.inst&&t.inst.close();}}}const I=new jr;var V=typeof GM<"u"?GM:void 0,pn=typeof GM_addElement<"u"?GM_addElement:void 0,dn=typeof GM_addStyle<"u"?GM_addStyle:void 0,Ut=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,_e=typeof GM_cookie<"u"?GM_cookie:void 0,st=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,fn=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,un=typeof GM_download<"u"?GM_download:void 0,xt=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,bn=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,hn=typeof GM_getTab<"u"?GM_getTab:void 0,mn=typeof GM_getTabs<"u"?GM_getTabs:void 0,qe=typeof GM_getValue<"u"?GM_getValue:void 0,vt=typeof GM_getValues<"u"?GM_getValues:void 0,je=typeof GM_info<"u"?GM_info:void 0,ot=typeof GM_listValues<"u"?GM_listValues:void 0,gn=typeof GM_log<"u"?GM_log:void 0,yn=typeof GM_notification<"u"?GM_notification:void 0,wn=typeof GM_openInTab<"u"?GM_openInTab:void 0,At=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,xn=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,qr=typeof GM_saveTab<"u"?GM_saveTab:void 0,vn=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,De=typeof GM_setValue<"u"?GM_setValue:void 0,it=typeof GM_setValues<"u"?GM_setValues:void 0,zt=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Gr=typeof GM_webRequest<"u"?GM_webRequest:void 0,qn=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,ve=typeof GM_audio<"u"?GM_audio:void 0,Ae=typeof unsafeWindow<"u"?unsafeWindow:void 0,He=window;let Ze=class{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis==null&&(e.globalThis=e.window),e.self==null&&(e.self=e.window)),e||(e=Object.assign({},this.defaultApi)),this.api=Object.assign({},e);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get clearTimeout(){return this.api.clearTimeout}get setInterval(){return this.api.setInterval}get clearInterval(){return this.api.clearInterval}};const Wr=a=>(e,t)=>(a.set(e,t),t),An=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Gn=536870912,Sn=Gn*2,Kr=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<Sn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<Gn){for(;t.has(r);)r=Math.floor(Math.random()*Sn);return a(t,r)}if(t.size>An)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*An);return a(t,r)},Wn=new WeakMap,Xr=Wr(Wn),Ft=Kr(Xr,Wn),Yr=a=>typeof a.start=="function",Tn=new WeakMap,Qr=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return Tn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=Tn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Pt=new WeakMap,Jr=a=>{if(Pt.has(a))return Pt.get(a);const e=new Map;return Pt.set(a,e),e},Zr=a=>{const e=Qr(a);return t=>{const n=Jr(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}})),Yr(t)&&t.start();const r=(s,l=null,c=[])=>new Promise((d,p)=>{const f=Ft(n);n.set(f,{reject:p,resolve:d}),l===null?t.postMessage({id:f,method:s},c):t.postMessage({id:f,method:s,params:l},c);}),o=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:r,notify:o})};return {...i}}},Xe=new Map([[0,null]]),Ye=new Map([[0,null]]),eo=Zr({clearInterval:({call:a})=>e=>{typeof Xe.get(e)=="symbol"&&(Xe.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{Xe.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof Ye.get(e)=="symbol"&&(Ye.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{Ye.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Ft(Xe);Xe.set(o,r);const i=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=Xe.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(e(...n),Xe.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=Ft(Ye);return Ye.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=Ye.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(Ye.delete(o),e(...n));}),o}}),to=a=>{const e=new Worker(a);return eo(e)},no=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},ro=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,kt=no(to,ro),oo=a=>kt().clearInterval(a),ao=a=>kt().clearTimeout(a),so=(...a)=>kt().setInterval(...a),io=(...a)=>kt().setTimeout(...a),D={windowApi:new Ze({document,window,top,setTimeout,clearTimeout,setInterval,clearInterval}),isShow(a){return !!a.getClientRects().length},createSafeHTML(a){return window.trustedTypes?window.trustedTypes.createPolicy("safe-innerHTML",{createHTML:t=>t}).createHTML(a):a},setSafeHTML(a,e){a.innerHTML=this.createSafeHTML(e);},forceShow(a){const e=a.cloneNode(true);return e.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(e),{recovery(){e.remove();}}},getStyleValue(a,e){let t=null,n=null;a instanceof CSSStyleDeclaration?n=a:(t=a.ownerDocument.defaultView,(!t||!t.opener)&&(t=window),n=t.getComputedStyle(a));const r=parseFloat(n[e]);return isNaN(r)?0:r},isWin(a){return typeof a!="object"||a instanceof Node?false:a===globalThis||a===window||a===self||a===globalThis||a===window||a===self||typeof unsafeWindow<"u"&&a===unsafeWindow?true:a?.Math?.toString()==="[object Math]"},isDOM(a){return a instanceof Node},delete(a,e){if(typeof Reflect=="object"&&Reflect!=null&&Reflect.deleteProperty)return Reflect.deleteProperty(a,e);delete a[e];},setTimeout(a,e=0){try{return io(a,e)}catch{return this.windowApi.setTimeout(a,e)}},clearTimeout(a){try{a!=null&&ao(a);}catch{}finally{this.windowApi.clearTimeout(a);}},setInterval(a,e=0){try{return so(a,e)}catch{return this.windowApi.setInterval(a,e)}},clearInterval(a){try{a!=null&&oo(a);}catch{}finally{this.windowApi.clearInterval(a);}},isNodeList(a){return Array.isArray(a)||a instanceof NodeList},getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]},getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}},lo="1.8.0";class Kn{windowApi;constructor(e){this.windowApi=new Ze(e);}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){if(t=t||this.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(t.querySelectorAll(e)).filter(r=>r?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const o=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(i=>(i?.textContent||i?.innerText)?.includes(o))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const i=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";i&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);const l=new RegExp(o,s);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=e?.textContent||e?.innerText;return typeof o!="string"&&(o=""),e.matches(t)&&o?.includes(r)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);const s=new RegExp(r,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(s)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");const n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");const o=e?.closest(t);if(o){const i=e?.textContent||e?.innerText;if(typeof i=="string"&&i.includes(r))return o}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);const s=new RegExp(r,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");const l=e?.closest(t);if(l){const c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return e?.closest(t)}}const Re=new Kn,co=function(a){return a instanceof Node};let po=class{windowApi;constructor(e){this.windowApi=new Ze(e);}isJQuery(e){let t=false;if(typeof jQuery=="object"&&e instanceof jQuery&&(t=true),e==null)return  false;if(typeof e=="object"){const n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const r of n)if(r in e)t=true;else {t=false;break}}return t}assign(e={},t={},n=false){const r=this;if(Array.isArray(t)&&!t.filter(s=>typeof s=="object").length)return t;if(t==null)return e;e==null&&(e={});let o;n?o=t:o=e;for(const i in o){if(!n&&!(i in t))continue;const s=Reflect.get(e,i),l=Reflect.get(t,i);if(typeof l=="object"&&l!=null&&i in e&&!co(l)){let c;Array.isArray(l)?(Array.isArray(s)&&(s.length=0),c=l):c=r.assign(s,l,n),Reflect.set(e,i,c);}else Reflect.set(e,i,l);}return e}mutationObserver(e,t){const n=this,r={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};t=n.assign(r,t);const o=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,i=new o(function(s,l){typeof t.callback=="function"&&t.callback(s,l);});return Array.isArray(e)||e instanceof NodeList?e.forEach(s=>{i.observe(s,t.config);}):n.isJQuery(e)?e.each((s,l)=>{i.observe(l,t.config);}):i.observe(e,t.config),t.immediate&&typeof t.callback=="function"&&t.callback([],i),i}};const fo=new po;class Xn extends Kn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}wait(e,t,n){const r=this,o=typeof t=="number"?t:0;return new Promise(i=>{const s=fo.mutationObserver(n||r.windowApi.document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(l,c){const d=e();d.success&&(typeof c?.disconnect=="function"&&c.disconnect(),i(d.data));}});o>0&&D.setTimeout(()=>{typeof s?.disconnect=="function"&&s.disconnect(),i(null);},o);})}waitNode(...e){e=e.filter(s=>s!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(typeof e[0]!="string"&&!Array.isArray(e[0])&&typeof e[0]!="function")throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");if(e.length!==1)if(e.length===2){const s=e[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(e.length===3){const s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");function i(){if(Array.isArray(n)){const s=[];for(let l=0;l<n.length;l++){const c=Re.selector(n[l]);c&&s.push(c);}if(s.length===n.length)return s}else return typeof n=="function"?n():Re.selector(n,r)}return t.wait(()=>{const s=i();return s?{success:true,data:s}:{success:false,data:s}},o,r)}waitAnyNode(...e){e=e.filter(s=>s!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(typeof e[0]!="object"&&!Array.isArray(e[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(e.length!==1)if(e.length===2){const s=e[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(e.length===3){const s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");const i=n.map(s=>t.waitNode(s,r,o));return Promise.any(i)}waitNodeList(...e){e=e.filter(s=>s!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(typeof e[0]!="string"&&!Array.isArray(e[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(e.length!==1)if(e.length===2){const s=e[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(e.length===3){const s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");function i(){if(Array.isArray(n)){const s=[];for(let l=0;l<n.length;l++){const c=Re.selectorAll(n[l],r);c.length&&s.push(c);}if(s.length===n.length)return s}else {const s=Re.selectorAll(n,r);if(s.length)return s}}return t.wait(()=>{const s=i();return s?{success:true,data:s}:{success:false,data:s}},o,r)}waitAnyNodeList(...e){e=e.filter(s=>s!==void 0);const t=this,n=e[0];let r=t.windowApi.document,o=0;if(!Array.isArray(e[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(e.length!==1)if(e.length===2){const s=e[1];if(typeof s=="number")o=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(e.length===3){const s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")o=l;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");const i=n.map(s=>t.waitNodeList(s,r,o));return Promise.any(i)}}new Xn;class Yn extends Xn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}animate(e,t,n=1e3,r=null){const o=this;if(typeof e=="string"&&(e=Re.selectorAll(e)),e==null)return;if(D.isNodeList(e)){e.forEach(d=>{o.animate(d,t,n,r);});return}if(typeof n!="number"||n<=0)throw new TypeError("duration must be a positive number");if(typeof r!="function"&&r!==void 0)throw new TypeError("callback must be a function or null");if(typeof t!="object"||t===void 0)throw new TypeError("styles must be an object");if(Object.keys(t).length===0)throw new Error("styles must contain at least one property");const i=performance.now(),s={},l={};for(const d in t)s[d]=e.style[d]||o.windowApi.globalThis.getComputedStyle(e)[d],l[d]=t[d];const c=D.setInterval(function(){let p=(performance.now()-i)/n;p>1&&(p=1);for(const f in t)e.style[f]=s[f]+(l[f]-s[f])*p+"px";p===1&&(D.clearInterval(c),r&&r());},10);}show(e,t=true){const n=this;if(e!=null)if(typeof e=="string"&&(e=Re.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const r of e)n.show(r,t);}else e=e,e.style.display="",t&&(D.isShow(e)||e.style.setProperty("display","unset","important"));}hide(e,t=true){const n=this;if(e!=null)if(typeof e=="string"&&(e=Re.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const r of e)n.hide(r,t);}else e=e,e.style.display="none",t&&D.isShow(e)&&e.style.setProperty("display","none","important");}fadeIn(e,t=400,n){if(e==null)return;const r=this;if(typeof e=="string"&&(e=Re.selectorAll(e)),D.isNodeList(e)){e.forEach(l=>{r.fadeIn(l,t,n);});return}e.style.opacity="0",e.style.display="";let o=null,i=null;function s(l){o||(o=l);const c=l-o;e=e,e.style.opacity=Math.min(c/t,1).toString(),c<t?r.windowApi.window.requestAnimationFrame(s):(n&&typeof n=="function"&&n(),r.windowApi.window.cancelAnimationFrame(i));}i=r.windowApi.window.requestAnimationFrame(s);}fadeOut(e,t=400,n){const r=this;if(e==null)return;if(typeof e=="string"&&(e=Re.selectorAll(e)),D.isNodeList(e)){e.forEach(l=>{r.fadeOut(l,t,n);});return}e.style.opacity="1";let o=null,i=null;function s(l){o||(o=l);const c=l-o;e=e,e.style.opacity=Math.max(1-c/t,0).toString(),c<t?r.windowApi.window.requestAnimationFrame(s):(e.style.display="none",typeof n=="function"&&n(),r.windowApi.window.cancelAnimationFrame(i));}i=r.windowApi.window.requestAnimationFrame(s);}toggle(e,t){const n=this;if(typeof e=="string"&&(e=Re.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.toggle(r);});return}n.windowApi.globalThis.getComputedStyle(e).getPropertyValue("display")==="none"?n.show(e,t):n.hide(e,t);}}}new Yn;const tt={domEventSymbol:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))},uo={Object:{defineProperty:Object.defineProperty}};class Qn extends Yn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}getAnimationEndNameList(){return D.getAnimationEndNameList()}getTransitionEndNameList(){return D.getTransitionEndNameList()}on(e,t,n,r,o){function i(g,w,A){const v=g[w];return typeof v=="boolean"?(A.capture=v,typeof g[w+1]=="boolean"&&(A.once=g[w+1]),typeof g[w+2]=="boolean"&&(A.passive=g[w+2])):typeof v=="object"&&("capture"in v||"once"in v||"passive"in v||"isComposedPath"in v)&&(A.capture=v.capture,A.once=v.once,A.passive=v.passive,A.isComposedPath=v.isComposedPath),A}const s=this,l=arguments;if(typeof e=="string"&&(e=s.selectorAll(e)),e==null)return {off(){},emit(){}};let c=[];e instanceof NodeList||Array.isArray(e)?c=c.concat(Array.from(e)):c.push(e);let d=[];Array.isArray(t)?d=d.concat(t.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof t=="string"&&(d=d.concat(t.split(" ").filter(g=>g!=="")));let p=[];Array.isArray(n)?p=p.concat(n.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof n=="string"&&p.push(n);let f=r,b={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(f=n,b=i(l,3,b)):b=i(l,4,b);function h(){b.once&&s.off(e,t,n,r,o);}return c.forEach(g=>{function w(A){if(p.length){let v=b.isComposedPath?A.composedPath()[0]:A.target,S=g;if(D.isWin(S)&&S===s.windowApi.document&&(S=s.windowApi.document.documentElement),p.find(x=>{if(s.matches(v,x))return  true;const E=s.closest(v,x);return E&&S?.contains?.(E)?(v=E,true):false})){try{uo.Object.defineProperty(A,"target",{get(){return v}});}catch{}f.call(v,A,v),h();}}else f.call(g,A),h();}d.forEach(A=>{g.addEventListener(A,w,b);const v=Reflect.get(g,tt.domEventSymbol)||{};v[A]=v[A]||[],v[A].push({selector:p,option:b,callback:w,originCallBack:f}),Reflect.set(g,tt.domEventSymbol,v);});}),{off:g=>{s.off(c,d,p,f,b,g);},emit:(g,w)=>{s.emit(c,d,g,w);}}}off(e,t,n,r,o,i){function s(w,A,v){const S=w[A];return typeof S=="boolean"?v.capture=S:typeof S=="object"&&S!=null&&"capture"in S&&(v.capture=S.capture),v}const l=this,c=arguments;if(typeof e=="string"&&(e=l.selectorAll(e)),e==null)return;let d=[];e instanceof NodeList||Array.isArray(e)?(e=e,d=d.concat(Array.from(e))):d.push(e);let p=[];Array.isArray(t)?p=p.concat(t.filter(w=>typeof w=="string"&&w.toString()!=="")):typeof t=="string"&&(p=p.concat(t.split(" ").filter(w=>w!=="")));let f=[];Array.isArray(n)?f=f.concat(n.filter(w=>typeof w=="string"&&w.toString()!=="")):typeof n=="string"&&f.push(n);let b=r,h={capture:false};typeof n=="function"?(b=n,h=s(c,3,h)):h=s(c,4,h);let g=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(g=true),c.length===5&&typeof c[4]=="function"&&typeof i!="function"&&(i=o),d.forEach(w=>{const A=Reflect.get(w,tt.domEventSymbol)||{};p.forEach(v=>{const S=A[v]||[],T=typeof i=="function"?S.filter(i):S;for(let x=0;x<T.length;x++){const E=T[x];let B=true;if(B&&b&&E.originCallBack!==b&&(B=false),B&&f.length&&Array.isArray(E.selector)&&JSON.stringify(E.selector)!==JSON.stringify(f)&&(B=false),B&&typeof E.option.capture=="boolean"&&h.capture!==E.option.capture&&(B=false),B||g){w.removeEventListener(v,E.callback,E.option);const z=S.findIndex(F=>F===E);z!==-1&&S.splice(z,1);}}S.length===0&&D.delete(A,t);}),Reflect.set(w,tt.domEventSymbol,A);});}offAll(e,t){if(typeof e=="string"&&(e=this.selectorAll(e)),e==null)return;let r=[];e instanceof NodeList||Array.isArray(e)?r=r.concat(Array.from(e)):r.push(e);let o=[];Array.isArray(t)?o=o.concat(t):typeof t=="string"&&(o=o.concat(t.split(" "))),r.forEach(i=>{[...new Set([...Object.getOwnPropertySymbols(i),tt.domEventSymbol])].forEach(l=>{if(!l.toString().startsWith("Symbol(events_"))return;const c=Reflect.get(i,l)||{};(o.length?o:Object.keys(c)).forEach(p=>{const f=c[p];if(!f)return;for(const h of f)i.removeEventListener(p,h.callback,{capture:h.option.capture});const b=Reflect.get(i,l);D.delete(b,p);});});});}onReady(...e){const t=e[0];let n;const r=this;function o(){try{return r.windowApi.document.readyState==="complete"||r.windowApi.document.readyState!=="loading"&&!r.windowApi.document.documentElement.doScroll}catch{return  false}}function i(){c(),typeof t=="function"&&t(),typeof n=="function"&&n();}const s=[{target:r.windowApi.document,eventType:"DOMContentLoaded",callback:i},{target:r.windowApi.window,eventType:"load",callback:i}];function l(){for(const p of s)r.on(p.target,p.eventType,p.callback);}function c(){for(const p of s)r.off(p.target,p.eventType,p.callback);}function d(){o()?D.setTimeout(i,0):l();}if(e.length===0)return new Promise(p=>{n=p,d();});d();}emit(e,t,n,r=true){if(typeof e=="string"&&(e=this.selectorAll(e)),e==null)return;let i=[];e instanceof NodeList||Array.isArray(e)?i=i.concat(Array.from(e)):i.push(e);let s=[];Array.isArray(t)?s=t.filter(l=>typeof l=="string"&&l.trim()!==""):typeof t=="string"&&(s=t.split(" ")),i.forEach(l=>{const c=Reflect.get(l,tt.domEventSymbol)||{};s.forEach(d=>{let p=null;n&&n instanceof Event?p=n:(p=new Event(d),n&&Object.keys(n).forEach(b=>{const h=Reflect.get(n,b);Reflect.set(p,b,h);})),r==false&&d in c?c[d].forEach(f=>{f.callback(p);}):l.dispatchEvent(p);});});}click(e,t,n,r){const o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(i=>{o.click(i,t,n,r);});return}t==null?o.emit(e,"click",n,r):o.on(e,"click",null,t);}}blur(e,t,n,r){const o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(i=>{o.focus(i,t,n,r);});return}t===null?o.emit(e,"blur",n,r):o.on(e,"blur",null,t);}}focus(e,t,n,r){const o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(i=>{o.focus(i,t,n,r);});return}t==null?o.emit(e,"focus",n,r):o.on(e,"focus",null,t);}}onHover(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(o=>{r.onHover(o,t,n);});return}r.on(e,"mouseenter",null,t,n),r.on(e,"mouseleave",null,t,n);}}onAnimationend(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selector(e)),e==null)return;const o={once:true};Object.assign(o,n||{});const i=D.getAnimationEndNameList();if(r.on(e,i,null,t,o),!o.once)return {off(){r.off(e,i,null,t,o);}}}onTransitionend(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selector(e)),e==null)return;const o={once:true};Object.assign(o,n||{});const i=D.getTransitionEndNameList();if(r.on(e,i,null,t,o),!o.once)return {off(){r.off(e,i,null,t,o);}}}onKeyup(e,t,n){const r=this;if(e!=null){if(typeof e=="string"&&(e=r.selectorAll(e)),D.isNodeList(e)){e.forEach(o=>{r.onKeyup(o,t,n);});return}r.on(e,"keyup",null,t,n);}}onKeydown(e,t,n){const r=this;if(e!=null){if(typeof e=="string"&&(e=r.selectorAll(e)),D.isNodeList(e)){e.forEach(o=>{r.onKeydown(o,t,n);});return}r.on(e,"keydown",null,t,n);}}onKeypress(e,t,n){const r=this;if(e!=null){if(typeof e=="string"&&(e=r.selectorAll(e)),D.isNodeList(e)){e.forEach(o=>{r.onKeypress(o,t,n);});return}r.on(e,"keypress",null,t,n);}}onKeyboard(e,t="keypress",n,r){const o=this;typeof e=="string"&&(e=o.selectorAll(e));const i=function(s){const l=s.key||s.code,c=s.charCode||s.keyCode||s.which,d=[];s.ctrlKey&&d.push("ctrl"),s.altKey&&d.push("alt"),s.metaKey&&d.push("meta"),s.shiftKey&&d.push("shift"),typeof n=="function"&&n(l,c,d,s);};return o.on(e,t,i,r),{removeListen:()=>{o.off(e,t,i,r);}}}onInput(e,t,n){let r=false;const o=async p=>{r||await t(p);},i=()=>{r=true;},s=()=>{r=false,this.emit(e,"input",{isComposite:r});},l=this.on(e,"input",o,n),c=this.on(e,"compositionstart",i,n),d=this.on(e,"compositionend",s,n);return {off:()=>{l.off(),c.off(),d.off();}}}onDoubleClick(...e){const t=e[0];let n,r,o;if(e.length===2)if(typeof e[1]=="function")r=e[1];else throw new TypeError("handler is not a function");else if(e.length===3)typeof e[1]=="function"?(r=e[1],o=e[2]):(n=e[1],r=e[2]);else if(e.length===4)n=e[1],r=e[2],o=e[3];else throw new Error("args length error");let i=null,s=false,l,c=false;const d=async b=>{b.type==="dblclick"&&c||await r(b);},p=this.on(t,"dblclick",d,o),f=this.on(t,"touchend",n,(b,h)=>{c=true,D.clearTimeout(l),l=void 0,s&&i===h?(s=false,i=null,d(b)):(l=D.setTimeout(()=>{s=false;},200),s=true,i=h);},o);return {off(){i=null,p.off(),f.off();}}}preventEvent(...e){const t=n=>(n?.preventDefault(),n?.stopPropagation(),n?.stopImmediatePropagation(),false);if(e.length===1)return t(e[0]);{const n=e[0];let r=e[1];const o=e[2];typeof r=="string"&&(r=[r]),this.on(n,r,t,{capture:!!o});}}}new Qn;class Jn extends Qn{windowApi;constructor(e){super(e),this.windowApi=new Ze(e);}getElementSelector(e){const t=this;if(!e||!e.parentElement)return;if(e.id)return `#${e.id}`;let n=t.getElementSelector(e.parentElement);if(!n)return e.tagName.toLowerCase();if(e.parentElement.querySelectorAll(e.tagName).length>1){const r=Array.prototype.indexOf.call(e.parentElement.children,e)+1;n+=` > ${e.tagName.toLowerCase()}:nth-child(${r})`;}else n+=` > ${e.tagName.toLowerCase()}`;return n}}new Jn;let bo=class Zn extends Jn{constructor(e){super(e);}version=lo;noConflict(){const e=this;return e.windowApi.window.DOMUtils&&D.delete(window,"DOMUtils"),e.windowApi.window.DOMUtils=this,this}attr(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(D.isNodeList(e)){if(n==null)return r.attr(e[0],t,n);e.forEach(o=>{r.attr(o,t,n);});return}if(n==null)return e.getAttribute(t);e.setAttribute(t,n);}}createElement(e,t,n){const r=this,o=r.windowApi.document.createElement(e);return typeof t=="string"?(r.html(o,t),o):(t==null&&(t={}),n==null&&(n={}),Object.keys(t).forEach(i=>{const s=t[i];if(i==="innerHTML"){r.html(o,s);return}o[i]=s;}),Object.keys(n).forEach(i=>{let s=n[i];typeof s=="object"?s=JSON.stringify(s):typeof s=="function"&&(s=s.toString()),o.setAttribute(i,s);}),o)}css(e,t,n){const r=this;function o(s,l){const c=["width","height","top","left","right","bottom","font-size"];return typeof l=="number"&&(l=l.toString()),typeof l=="string"&&c.includes(s)&&l.match(/[0-9]$/gi)&&(l=l+"px"),l}if(typeof e=="string"&&(e=r.selectorAll(e)),e==null)return;if(D.isNodeList(e)){if(typeof t=="string"){if(n==null)return r.css(e[0],t);e.forEach(s=>{r.css(s,t);});return}else if(typeof t=="object"){e.forEach(s=>{r.css(s,t);});return}return}const i=(s,l)=>{typeof l=="string"&&l.trim().endsWith("!important")?(l=l.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(s,l,"important")):(l=o(s,l),e.style.setProperty(s,l));};if(typeof t=="string"){if(n==null)return r.windowApi.globalThis.getComputedStyle(e).getPropertyValue(t);i(t,n);}else if(typeof t=="object")for(const s in t){const l=t[s];i(s,l);}else throw new TypeError("property must be string or object")}text(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){if(t==null)return n.text(e[0]);e.forEach(r=>{n.text(r,t);});return}if(t==null)return e.textContent||e.innerText;t instanceof Node&&(t=t.textContent||t.innerText),"textContent"in e?e.textContent=t:"innerText"in e&&(e.innerText=t);}}html(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){if(t==null)return n.html(e[0]);e.forEach(r=>{n.html(r,t);});return}if(t==null)return e.innerHTML;t instanceof Element&&(t=t.innerHTML),"innerHTML"in e&&D.setSafeHTML(e,t);}}getTransform(e,t=false){const n=this;let r=0,o=0;if(!(t||!t&&D.isShow(e))){const{recovery:s}=D.forceShow(e),l=n.getTransform(e,true);return s(),l}const i=n.windowApi.globalThis.getComputedStyle(e).transform;if(i!=null&&i!=="none"&&i!==""){const s=i.match(/\((.+)\)/)?.[1].split(",");s?(r=Math.abs(parseInt(s[4])),o=Math.abs(parseInt(s[5]))):(r=0,o=0);}return {transformLeft:r,transformTop:o}}val(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){if(t==null)return n.val(e[0]);e.forEach(r=>{n.val(r,t);});return}if(t==null)return e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked:e.value;e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked=!!t:e.value=t;}}prop(e,t,n){const r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(D.isNodeList(e)){if(n==null)return r.prop(e[0],t);e.forEach(o=>{r.prop(o,t,n);});return}if(n==null)return Reflect.get(e,t);e instanceof Element&&t==="innerHTML"?r.html(e,n):Reflect.set(e,t,n);}}removeAttr(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.removeAttr(r,t);});return}e.removeAttribute(t);}}removeClass(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.removeClass(r,t);});return}t==null?e.className="":(Array.isArray(t)||(t=t.trim().split(" ")),t.forEach(r=>{e.classList.remove(r);}));}}removeProp(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.removeProp(r,t);});return}D.delete(e,t);}}addClass(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.addClass(r,t);});return}Array.isArray(t)||(t=t.split(" ")),t.forEach(r=>{r.trim()!=""&&e.classList.add(r);});}}hasClass(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return  false;if(D.isNodeList(e)){let r=true;for(let o=0;o<e.length;o++){const i=e[o];r=r&&n.hasClass(i,t);}return r}if(!e?.classList)return  false;Array.isArray(t)||(t=t.split(" "));for(let r=0;r<t.length;r++){const o=t[r].trim();if(!e.classList.contains(o))return  false}return  true}append(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(D.isNodeList(e)){e.forEach(o=>{n.append(o,t);});return}function r(o,i){typeof t=="string"?o instanceof DocumentFragment?(typeof i=="string"&&(i=n.toElement(i,true,false)),o.appendChild(i)):o.insertAdjacentHTML("beforeend",D.createSafeHTML(i)):o.appendChild(i);}if(Array.isArray(t)||t instanceof NodeList){const o=n.windowApi.document.createDocumentFragment();t.forEach(i=>{typeof i=="string"&&(i=n.toElement(i,true,false)),o.appendChild(i);}),e.appendChild(o);}else r(e,t);}prepend(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.prepend(r,t);});return}if(typeof t=="string")e instanceof DocumentFragment?(t=n.toElement(t,true,false),e.prepend(t)):e.insertAdjacentHTML("afterbegin",D.createSafeHTML(t));else {const r=e.firstChild;r==null?e.prepend(t):e.insertBefore(t,r);}}}after(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.after(r,t);});return}if(typeof t=="string")e.insertAdjacentHTML("afterend",D.createSafeHTML(t));else {const r=e.parentElement,o=e.nextSibling;!r||o?e.after(t):r.insertBefore(t,o);}}}before(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(r=>{n.before(r,t);});return}if(typeof t=="string")e.insertAdjacentHTML("beforebegin",D.createSafeHTML(t));else {const r=e.parentElement;r?r.insertBefore(t,e):e.before(t);}}}remove(e){const t=this;if(typeof e=="string"&&(e=t.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(n=>{t.remove(n);});return}typeof e.remove=="function"?e.remove():e.parentElement?e.parentElement.removeChild(e):e.parentNode&&e.parentNode.removeChild(e);}}empty(e){const t=this;if(typeof e=="string"&&(e=t.selectorAll(e)),e!=null){if(D.isNodeList(e)){e.forEach(n=>{t.empty(n);});return}e.innerHTML?e.innerHTML="":e.textContent&&(e.textContent="");}}offset(e){const t=this;if(typeof e=="string"&&(e=t.selector(e)),e==null)return;const n=e.getBoundingClientRect();return {top:n.top+t.windowApi.globalThis.scrollY,left:n.left+t.windowApi.globalThis.scrollX}}width(e,t=false){const n=this;if(typeof e=="string"&&(e=n.selector(e)),D.isWin(e))return n.windowApi.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&D.isShow(e)){if(e=e,parseFloat(D.getStyleValue(e,"width").toString())>0)return parseFloat(D.getStyleValue(e,"width").toString());if(e.offsetWidth>0){const r=D.getStyleValue(e,"borderLeftWidth"),o=D.getStyleValue(e,"borderRightWidth"),i=D.getStyleValue(e,"paddingLeft"),s=D.getStyleValue(e,"paddingRight"),l=parseFloat(e.offsetWidth.toString())-parseFloat(r.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString());return parseFloat(l.toString())}return 0}else {e=e;const{recovery:r}=D.forceShow(e),o=n.width(e,true);return r(),o}}height(e,t=false){const n=this;if(D.isWin(e))return n.windowApi.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=n.selector(e)),e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&D.isShow(e)){if(e=e,parseFloat(D.getStyleValue(e,"height").toString())>0)return parseFloat(D.getStyleValue(e,"height").toString());if(e.offsetHeight>0){const r=D.getStyleValue(e,"borderTopWidth"),o=D.getStyleValue(e,"borderBottomWidth"),i=D.getStyleValue(e,"paddingTop"),s=D.getStyleValue(e,"paddingBottom"),l=parseFloat(e.offsetHeight.toString())-parseFloat(r.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString());return parseFloat(l.toString())}return 0}else {e=e;const{recovery:r}=D.forceShow(e),o=n.height(e,true);return r(),o}}outerWidth(e,t=false){const n=this;if(D.isWin(e))return n.windowApi.window.innerWidth;if(typeof e=="string"&&(e=n.selector(e)),e=e,t||!t&&D.isShow(e)){const r=n.windowApi.globalThis.getComputedStyle(e,null),o=D.getStyleValue(r,"marginLeft"),i=D.getStyleValue(r,"marginRight");return e.offsetWidth+o+i}else {const{recovery:r}=D.forceShow(e),o=n.outerWidth(e,true);return r(),o}}outerHeight(e,t=false){const n=this;if(D.isWin(e))return n.windowApi.window.innerHeight;if(typeof e=="string"&&(e=n.selector(e)),e=e,t||!t&&D.isShow(e)){const r=n.windowApi.globalThis.getComputedStyle(e,null),o=D.getStyleValue(r,"marginTop"),i=D.getStyleValue(r,"marginBottom");return e.offsetHeight+o+i}else {const{recovery:r}=D.forceShow(e),o=n.outerHeight(e,true);return r(),o}}replaceWith(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(D.isNodeList(e)){e.forEach(o=>{n.replaceWith(o,t);});return}typeof t=="string"&&(t=n.toElement(t,false,false));const r=e.parentElement;r?r.replaceChild(t,e):(n.after(e,t),e.remove());}wrap(e,t){const n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(D.isNodeList(e)){e.forEach(s=>{n.wrap(s,t);});return}e=e;const r=n.windowApi.document.createElement("div");n.html(r,t);const o=r.firstChild;e.parentElement.insertBefore(o,e),o.appendChild(e);}prev(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.previousElementSibling}next(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.nextElementSibling}siblings(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return Array.from(e.parentElement.children).filter(n=>n!==e)}parent(e){const t=this;if(typeof e=="string"&&(e=t.selector(e)),e!=null)if(D.isNodeList(e)){const n=[];return e.forEach(r=>{n.push(t.parent(r));}),n}else return e.parentElement}toElement(e,t=false,n=false){const r=this;e=e.trim();function o(){const s=new DOMParser;return n?s.parseFromString(e,"text/html"):s.parseFromString(e,"text/html").body.firstChild}function i(){const s=r.windowApi.document.createElement("div");return r.html(s,e),n?s:s.firstElementChild??s.firstChild}return t?o():i()}serialize(e){const t=e.elements,n=[];for(let r=0;r<t.length;r++){const o=t[r];if(o.name&&!o.disabled&&(o.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(o.type)))if(o.type==="select-multiple")for(let i=0;i<o.options.length;i++)o.options[i].selected&&n.push({name:o.name,value:o.options[i].value});else n.push({name:o.name,value:o.value});}return n.map(r=>`${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&")}createDOMUtils(e){return new Zn(e)}getTextBoundingRect(e,t,n){const r=this;if(!e||!("value"in e))return e;if(t==null&&(t=e.selectionStart||0),n==null&&(n=e.selectionEnd||0),typeof t=="string"&&(t=parseFloat(t)),(typeof t!="number"||isNaN(t))&&(t=0),t<0?t=0:t=Math.min(e.value.length,t),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<t)&&(n=t),n<0?n=0:n=Math.min(e.value.length,n),typeof e.createTextRange=="function"){const T=e.createTextRange();return T.collapse(true),T.moveStart("character",t),T.moveEnd("character",n-t),T.getBoundingClientRect()}const o=v(),i=S("width",true),s=S("height",true);let l=o.top,c=o.left,d="white-space:pre;padding:0;margin:0;";const p=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];l+=S("padding-top",true),l+=S("border-top-width",true),c+=S("padding-left",true),c+=S("border-left-width",true),c+=1;for(let T=0;T<p.length;T++){const x=p[T];d+=x+":"+S(x,false)+";";}const f=e.value||"G",b=f.length,h=r.windowApi.document.createElement("div");t>0&&A(0,t);const g=A(t,n);b>n&&A(n,b),h.style.cssText=d,h.style.position="absolute",h.style.top=l+"px",h.style.left=c+"px",h.style.width=i+"px",h.style.height=s+"px",r.windowApi.document.body.appendChild(h);const w=g.getBoundingClientRect();return h?.parentNode?.removeChild(h),w;function A(T,x){const E=r.windowApi.document.createElement("span");return E.style.cssText=d,E.textContent=f.substring(T,x),h.appendChild(E),E}function v(){const T=r.windowApi.document.body,x=r.windowApi.document.defaultView,E=r.windowApi.document.documentElement,B=r.windowApi.document.createElement("div");B.style.paddingLeft=B.style.width="1px",T.appendChild(B);const z=B.offsetWidth==2;T.removeChild(B);const F=e.getBoundingClientRect(),X=E.clientTop||T.clientTop||0,K=E.clientLeft||T.clientLeft||0,$=x.pageYOffset||z&&E.scrollTop||T.scrollTop,M=x.pageXOffset||z&&E.scrollLeft||T.scrollLeft;return {top:F.top+$-X,left:F.left+M-K}}function S(T,x){const E=r.windowApi.document.defaultView.getComputedStyle(e,null).getPropertyValue(T);return x?parseFloat(E):E}}addStyle(e){if(typeof e!="string")throw new Error("DOMUtils.addStyle 参数cssText 必须为String类型");const t=this.createElement("style",{type:"text/css",innerHTML:e});return this.windowApi.document.head?this.windowApi.document.head.appendChild(t):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(t):this.windowApi.document.documentElement.insertBefore(t,this.windowApi.document.documentElement.childNodes[0]),t}checkUserClickInNode(e){const t=this;if(!D.isDOM(e))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");const n=t.windowApi.window.event,r=t.windowApi.window.event,o=n?.composedPath()?.[0],i=n?.clientX!=null?n.clientX:r.touches[0].clientX,s=n?.clientY!=null?n.clientY:r.touches[0].clientY,{left:l,right:c,top:d,bottom:p}=e.getBoundingClientRect();return i>=l&&i<=c&&s>=d&&s<=p?true:!!(o&&e.contains(o)||o==e)}deleteParentNode(e,t){if(e==null)return;if(!D.isDOM(e))throw new Error("DOMUtils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof t!="string")throw new Error("DOMUtils.deleteParentNode 参数 targetSelector 必须为 string 类型");let n=false;const r=ke.closest(e,t);return r&&(this.remove(r),n=true),n}*findElementsWithText(e,t,n){const r=this;if(e.outerHTML.includes(t))if(e.children.length===0)typeof n=="function"&&n(e)||(yield e);else {const o=Array.from(e.childNodes).filter(i=>i.nodeType===Node.TEXT_NODE);for(const i of o)i.textContent.includes(t)&&(typeof n=="function"&&n(e)||(yield i));}for(let o=0;o<e.children.length;o++){const i=e.children[o];yield*r.findElementsWithText(i,t,n);}}findVisibleElement(e){let t=e;for(;t;){if(t.getBoundingClientRect().length)return t;t=t.parentElement;}return null}setElementSelection(e,t,n,r){const o=this.windowApi.document.createRange();if(o.selectNodeContents(e),t){if(t.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");n!=null&&r!=null&&(o.setStart(t,n),o.setEnd(t,r));}const i=this.windowApi.globalThis.getSelection();i&&(i.removeAllRanges(),i.addRange(o));}};const ke=new bo,we={config:{},setGlobalConfig(a){Reflect.ownKeys(a).forEach(e=>{Reflect.set(we.config,e,Reflect.get(a,e));});},getGlobalConfig(){const a={};return Object.keys(we.config).forEach(e=>{const t=Reflect.get(we.config,e);if(e==="style"){const n=t==null?"":typeof t=="function"?t():t;typeof n=="string"&&(a.style=n);}else if(e==="zIndex"){let n=t==null?"":typeof t=="function"?t():t;if(typeof n=="string"){const r=n=Number(n);isNaN(r)||(a.zIndex=r);}else isNaN(n)||(a.zIndex=n);}else if(e==="mask"){const n=we.config.mask==null?{}:we.config.mask;typeof n=="object"&&n!=null&&(a.mask=n);}else Reflect.set(a,e,t);}),a}};var ho=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="min">\r
  <path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,mo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="mise">\r
  <path\r
    fill="currentColor"\r
    d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,go=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="max">\r
  <path\r
    fill="currentColor"\r
    d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,yo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="close">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,wo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="edit">\r
  <path\r
    fill="currentColor"\r
    d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
  <path\r
    fill="currentColor"\r
    d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,xo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="share">\r
  <path\r
    fill="currentColor"\r
    d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,vo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="delete">\r
  <path\r
    fill="currentColor"\r
    d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,Ao=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="search">\r
  <path\r
    fill="currentColor"\r
    d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,So=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="upload">\r
  <path\r
    fill="currentColor"\r
    d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,To=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="loading">\r
  <path\r
    fill="currentColor"\r
    d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,Co=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="next">\r
  <path\r
    fill="currentColor"\r
    d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,ko=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="prev">\r
  <path\r
    fill="currentColor"\r
    d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,$o=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="eleme">\r
  <path\r
    fill="currentColor"\r
    d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,Eo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="elemePlus">\r
  <path\r
    d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
    fill="currentColor"></path>\r
</svg>\r
`,Mo=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" xml:space="preserve" data-type="chromeFilled">\r
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
`,Lo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="cpu">\r
  <path\r
    fill="currentColor"\r
    d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
  <path\r
    fill="currentColor"\r
    d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,Io=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="videoPlay">\r
  <path\r
    fill="currentColor"\r
    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,_o=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="videoPause">\r
  <path\r
    fill="currentColor"\r
    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,Ro=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="headset">\r
  <path\r
    fill="currentColor"\r
    d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,No=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="monitor">\r
  <path\r
    fill="currentColor"\r
    d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,Oo=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="documentCopy">\r
  <path\r
    fill="currentColor"\r
    d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,Po=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="picture">\r
  <path\r
    fill="currentColor"\r
    d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
  <path\r
    fill="currentColor"\r
    d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,Do=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="circleClose">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,Bo=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="view">\r
  <path\r
    fill="currentColor"\r
    d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,Ho=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="hide">\r
  <path\r
    fill="currentColor"\r
    d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
  <path\r
    fill="currentColor"\r
    d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,Vo=`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">\r
  <path\r
    d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
  <path\r
    d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
  <path\r
    d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,Uo=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowRight">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,zo=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowLeft">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`;const Fo={min:ho,mise:mo,max:go,close:yo,edit:wo,share:xo,delete:vo,search:Ao,upload:So,loading:To,next:Co,prev:ko,eleme:$o,elemePlus:Eo,chromeFilled:Mo,cpu:Lo,videoPlay:Io,videoPause:_o,headset:Ro,monitor:No,documentCopy:Oo,picture:Po,circleClose:Do,view:Bo,hide:Ho,keyboard:Vo,arrowRight:Uo,arrowLeft:zo},ie={$data:Fo,hasIcon(a){return Object.keys(ie.$data).includes(a)},getIcon(a){return ie.$data[a]},deleteIcon(a){return Reflect.deleteProperty(ie.$data,a)},setIcon(a,e){Reflect.set(ie.$data,a,e);}},dt=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),jo={document,window,globalThis,self},yt=Object.assign({},jo),Y={get document(){return yt.document},get window(){return yt.window},get globalThis(){return yt.globalThis},get self(){return yt.self}},er={Object:{defineProperty:Object.defineProperty}},qo=a=>(e,t)=>(a.set(e,t),t),Cn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,tr=536870912,kn=tr*2,Go=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<kn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<tr){for(;t.has(r);)r=Math.floor(Math.random()*kn);return a(t,r)}if(t.size>Cn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*Cn);return a(t,r)},nr=new WeakMap,Wo=qo(nr),jt=Go(Wo,nr),Ko=a=>typeof a.start=="function",$n=new WeakMap,Xo=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return $n.set(n,r),n},disconnect:({call:e})=>async t=>{const n=$n.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Dt=new WeakMap,Yo=a=>{if(Dt.has(a))return Dt.get(a);const e=new Map;return Dt.set(a,e),e},Qo=a=>{const e=Xo(a);return t=>{const n=Yo(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}})),Ko(t)&&t.start();const r=(s,l=null,c=[])=>new Promise((d,p)=>{const f=jt(n);n.set(f,{reject:p,resolve:d}),l===null?t.postMessage({id:f,method:s},c):t.postMessage({id:f,method:s,params:l},c);}),o=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:r,notify:o})};return {...i}}},Qe=new Map([[0,null]]),Je=new Map([[0,null]]),Jo=Qo({clearInterval:({call:a})=>e=>{typeof Qe.get(e)=="symbol"&&(Qe.set(e,null),a("clear",{timerId:e,timerType:"interval"}).then(()=>{Qe.delete(e);}));},clearTimeout:({call:a})=>e=>{typeof Je.get(e)=="symbol"&&(Je.set(e,null),a("clear",{timerId:e,timerType:"timeout"}).then(()=>{Je.delete(e);}));},setInterval:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=jt(Qe);Qe.set(o,r);const i=()=>a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"interval"}).then(()=>{const s=Qe.get(o);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(e(...n),Qe.get(o)===r&&i());});return i(),o},setTimeout:({call:a})=>(e,t=0,...n)=>{const r=Symbol(),o=jt(Je);return Je.set(o,r),a("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:o,timerType:"timeout"}).then(()=>{const i=Je.get(o);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(Je.delete(o),e(...n));}),o}}),Zo=a=>{const e=new Worker(a);return Jo(e)},ea=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},ta=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,$t=ea(Zo,ta),na=a=>$t().clearInterval(a),ra=a=>$t().clearTimeout(a),oa=(...a)=>$t().setInterval(...a),aa=(...a)=>$t().setTimeout(...a);let sa=class{constructor(){this.__map={};}beforeEach(e){this.__interceptor=e;}on(e,t){const n=Array.isArray(e)?e:[e];for(const r of n){this.__map[r]=this.__map[r]||[];const o=this.__map[r];o&&o.push(t);}return this}emit(e,t,n){this.__interceptor!==void 0?this.__interceptor(e,(()=>{this.__emit(e,t),n&&n();})):(this.__emit(e,t),n&&n());}__emit(e,t){const n=this.__map[e];if(Array.isArray(n)&&n?.length)for(const r of n)r(t,e);this.event=t;}off(e,t){const n=this.__map[e];if(n!==void 0)if(t===void 0)delete this.__map[e];else {const r=n.findIndex((o=>o===t));n.splice(r,1);}}destroy(){this.__map={};}};const ut="clientX",bt="clientY",ia=16,Et="start",la="move",Qt="cancel",lt="end",ca="left",pa="right",rr="up",da="down",fa={4:"start",5:"move",1:"end",3:"cancel"};function Jt(a){return fa[a]}function Zt(a,e,t){const n={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(a)][e];return n!==void 0&&n[t]||0}function Mt(a){[1,3,2].includes(a.state)&&(a.state=0);}function en(a){return [5,1,3].includes(a)}function mt(a){if(a.disabled)return a.state=0,true}function ct(a,e){return Object.assign(Object.assign(Object.assign({},a),e),{state:0,disabled:false})}function En(a){return Math.round(100*a)/100}function Mn(){let a,e,t,n,r=0;return function(o){if(a=e,o!==void 0){r=Number.MAX_SAFE_INTEGER>r?++r:1;const i=(function(c,d){const{phase:p,points:f,changedPoints:b,nativeEvent:h}=c,g=f.length,w=Et===p,A=lt===p&&g===0||Qt===p,v=Date.now(),{x:S,y:T}=Ln(f)||Ln(b),{currentTarget:x}=h;return Object.assign(c,{id:d,x:S,y:T,timestamp:v,isStart:w,isEnd:A,pointLength:g,currentTarget:x,getOffset(E=x){const B=E.getBoundingClientRect();return {x:S-Math.round(B.left),y:T-Math.round(B.top)}}})})(o,r);e=i;const{isStart:s,pointLength:l}=i;return s&&(t=i,a=void 0,n=1<l?i:void 0),Object.assign(Object.assign({},i),{prevInput:a,startMultiInput:n,startInput:t})}}}function Ln(a){const{length:e}=a;if(0<e){if(e===1){const{clientX:n,clientY:r}=a[0];return {x:Math.round(n),y:Math.round(r)}}const t=a.reduce(((n,r)=>(n.x+=r[ut],n.y+=r[bt],n)),{x:0,y:0});return {x:Math.round(t.x/e),y:Math.round(t.y/e)}}}function In(a,e,t,n){const r={};for(const i in t)["target","currentTarget","type"].includes(i)||(r[i]=t[i]);let o;return document.createEvent?(o=document.createEvent("HTMLEvents"),o.initEvent(a,n?.bubbles,n?.cancelable)):o=new Event(a,n),Object.assign(o,r,{match:()=>t.targets&&0<t.targets.length&&t.targets.every((i=>o.currentTarget.contains(i)))}),e.dispatchEvent(o)}function ua(a,e){const{preventDefault:t}=e;return n=t,Object.prototype.toString.call(n)==="[object Function]"?t(a):!!t;var n;}const _n=["touchstart","touchmove","touchend","touchcancel","mousedown"],Rn=["mousemove","mouseup"],ba={domEvents:{bubbles:true,cancelable:true},preventDefault:a=>{if(a.target&&"tagName"in a.target){const{tagName:e}=a.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e)}return  false}};let ha=class extends sa{constructor(e,t){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=e,this.c={},this.__options=Object.assign(Object.assign({},ba),t);const n=(function(o){const i=Mn();return function(s){const l=[],c=[];Array.from(s.touches).forEach((({clientX:p,clientY:f,target:b})=>{o?.contains(b)&&(l.push(b),c.push({clientX:p,clientY:f,target:b}));}));const d=Array.from(s.changedTouches).map((({clientX:p,clientY:f,target:b})=>({clientX:p,clientY:f,target:b})));return i({phase:s.type.replace("touch",""),changedPoints:d,points:c,nativeEvent:s,target:s.target,targets:l})}})(this.el),r=(function(){let o,i=false,s=null;const l=Mn();return function(c){const{clientX:d,clientY:p,type:f,button:b,target:h}=c;let g,w=[{clientX:d,clientY:p,target:h}];if(f==="mousedown"&&b===0)s=h,i=true,g="start";else {if(!i)return;f==="mousemove"?g="move":f==="mouseup"&&(w=[],g="end",i=false);}const A=o||[{clientX:d,clientY:p,target:h}];if(o=[{clientX:d,clientY:p,target:h}],g!==void 0)return l({phase:g,changedPoints:A,points:w,target:s,targets:[s],nativeEvent:c})}})();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:r,mousemove:r,mouseup:r},this.on("at:after",(o=>{const{target:i,__type:s}=o,{domEvents:l}=this.__options;l&&this.el!==void 0&&i&&(In(s,i,o,l),In("at:after",i,o,l));})),e!==void 0){e.style.webkitTapHighlightColor="rgba(0,0,0,0)";let o=false;try{const i={};Object.defineProperty(i,"passive",{get(){o=!0;}}),window.addEventListener("_",(()=>{}),i);}catch{}this.on("u",(function(i,s,l){return _n.forEach((c=>{i.addEventListener(c,s,l);})),Rn.forEach((c=>{window.addEventListener(c,s,l);})),()=>{_n.forEach((c=>{i.removeEventListener(c,s);})),Rn.forEach((c=>{window.removeEventListener(c,s);}));}})(e,this.catchEvent.bind(this),this.__options.preventDefault===false&&o?{passive:true}:{passive:false}));}}use(e,t){this.__pluginContexts.push(e(this,t));}catchEvent(e){const t=this.__inputCreatorMap[e.type](e);if(t!==void 0){const n=()=>e.stopPropagation(),r=()=>e.stopImmediatePropagation(),o=()=>e.preventDefault();if(ua(e,this.__options))o();else if(e.type==="touchstart"?this.__isIgnoreMouse=true:e.type==="touchmove"&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&e.type.startsWith("mouse"))return void(e.type==="mouseup"&&(this.__isIgnoreMouse=false));this.emit("input",t),this.emit2(`at:${t.phase}`,t,{});const i={};this.__computeFunctionList.forEach((s=>{const l=s(t,i);if(l!==void 0)for(const c in l)i[c]=l[c];})),this.emit("computed",Object.assign(Object.assign(Object.assign({},t),i),{stopPropagation:n,stopImmediatePropagation:r,preventDefault:o}));}}compute(e,t){for(const n of e)this.__computeFunctionCreatorList.includes(n)||(this.__computeFunctionCreatorList.push(n),this.__computeFunctionList.push(n()));this.on("computed",t);}beforeEach(e){super.beforeEach(((t,n)=>{var r;!((r=this.c)===null||r===void 0)&&r.name?e(t,n):n();}));}get(e){return this.__pluginContexts.find((t=>e===t.name))}set(e){this.__options=Object.assign(Object.assign({},this.__options),e);}emit2(e,t,n){this.c=n,this.emit(e,Object.assign(Object.assign({},t),{type:e}),(()=>{this.emit("at:after",Object.assign(Object.assign({},t),{name:e,__type:e}));}));}destroy(){this.emit("u"),super.destroy();}};var Fe=a=>Math.sqrt(a.x*a.x+a.y*a.y),ma=(a,e)=>a.x*e.x+a.y*e.y,ga=(a,e)=>{var t=Fe(a)*Fe(e);if(t===0)return 0;var n=ma(a,e)/t;return n>1&&(n=1),Math.acos(n)},ya=(a,e)=>a.x*e.y-e.x*a.y,or=a=>a/Math.PI*180,Nn=(a,e)=>{var t=ga(a,e);return ya(a,e)>0&&(t*=-1),or(t)},ar=(a,e)=>{if(a!==0||e!==0)return Math.abs(a)>=Math.abs(e)?0<a?pa:ca:0<e?da:rr};function wa(){let a=0,e=0;return function(t,n){const{prevVecotr:r,startVecotr:o,activeVecotr:i}=n;return i&&(e=Math.round(Nn(i,r)),a=Math.round(Nn(i,o))),{angle:a,deltaAngle:e}}}function xa(){return function(a){const{prevInput:e}=a;let t=0,n=0,r=0;if(e!==void 0&&(t=a.x-e.x,n=a.y-e.y,t!==0||n!==0)){const o=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));r=Math.round(or(Math.acos(Math.abs(t)/o)));}return {deltaX:t,deltaY:n,deltaXYAngle:r}}}function Lt(){let a,e=0,t=0,n=0,r=0,o=0;return function(i){const{phase:s,startInput:l}=i;return Et===s?(e=0,t=0,n=0,r=0,o=0):la===s&&(e=Math.round(i.points[0][ut]-l.points[0][ut]),t=Math.round(i.points[0][bt]-l.points[0][bt]),n=Math.abs(e),r=Math.abs(t),o=Math.round(Fe({x:n,y:r})),a=ar(e,t)),{displacementX:e,displacementY:t,distanceX:n,distanceY:r,distance:o,overallDirection:a}}}function va(){let a=1;return function(e,t){let n=1;const{prevVecotr:r,startVecotr:o,activeVecotr:i}=t;return i&&(n=En(Fe(i)/Fe(r)),a=En(Fe(i)/Fe(o))),{scale:a,deltaScale:n}}}function sr(){let a,e,t=0,n=0,r=0,o=0;return function(i){if(i!==void 0){e=e||i.startInput;const s=i.timestamp-e.timestamp;if(ia<s){const l=i.x-e.x,c=i.y-e.y;r=Math.round(l/s*100)/100,o=Math.round(c/s*100)/100,t=Math.abs(r),n=Math.abs(o),a=ar(l,c),e=i;}}return {velocityX:t,velocityY:n,speedX:r,speedY:o,direction:a}}}function ir(){let a=0;return function(e){const{phase:t}=e;return Et===t&&(a=e.pointLength),{maxPointLength:a}}}function Bt(a){return {x:a.points[1][ut]-a.points[0][ut],y:a.points[1][bt]-a.points[0][bt]}}function lr(){let a,e,t;return function(n){const{prevInput:r,startMultiInput:o}=n;return o!==void 0&&r!==void 0&&n.id!==o.id&&1<r.pointLength&&1<n.pointLength?(a=Bt(o),e=Bt(r),t=Bt(n)):t=void 0,{startVecotr:a,prevVecotr:e,activeVecotr:t}}}const Aa={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function tn(a,e){const t=ct(Aa,e);let n,r,o,i=0;function s(){i=0,n=void 0,r=void 0;}return a.compute([Lt,ir],(l=>{if(mt(t))return;const{phase:c,x:d,y:p}=l;lt===c&&(t.state=0,(function(){const{startInput:f,pointLength:b,timestamp:h}=l,g=h-f.timestamp,{distance:w,maxPointLength:A}=l;return A===t.pointLength&&b===0&&t.maxDistance>=w&&t.maxPressTime>g})()?(clearTimeout(o),(function(f,b){if(n!==void 0){const h=Fe({x:f.x-n.x,y:f.y-n.y});return n=f,b.maxDistanceFromPrevTap>=h}return n=f,true})({x:d,y:p},t)&&(function(f){const b=performance.now();if(r===void 0)return r=b,true;{const h=b-r;return r=b,h<f}})(t.waitNextTapTime)?i++:i=1,i%t.tapTimes==0?(t.state=1,a.emit2(t.name,l,t),s()):o=setTimeout((()=>{t.state=2,s();}),t.waitNextTapTime)):(s(),t.state=2));})),t}const Sa={name:"pan",threshold:10,pointLength:1};function cr(a,e){const t=ct(Sa,e);return a.compute([sr,Lt,xa],(n=>{if(Mt(t),mt(t))return;const r=(function(){const{pointLength:o,distance:i}=n;return t.pointLength===o&&t.threshold<=i})();if(t.state=Zt(r,t.state,n.phase),r||en(t.state)){const{name:o}=t;a.emit2(o,n,t),a.emit2(o+Jt(t.state),n,t),![lt,Qt].includes(n.phase)&&n.direction&&a.emit2(o+n.direction,n,t);}})),t}const Ta={name:"swipe",threshold:10,velocity:.3,pointLength:1};function pr(a,e){const t=ct(Ta,e);return a.compute([Lt,sr,ir],(n=>{if(t.state=0,!t.disabled&&(function(){if(lt!==n.phase)return  false;const{velocityX:r,velocityY:o,distance:i,maxPointLength:s}=n;return s===t.pointLength&&n.points.length===0&&t.threshold<i&&t.velocity<Math.max(r,o)})()){const{name:r}=t;t.state=1,a.emit2(r,n,t),a.emit2(r+n.direction,n,t);}})),t}const Ca={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function dr(a,e){const t=ct(Ca,e);let n=0;return a.compute([Lt],(r=>{if(mt(t))return;const{phase:o,startInput:i,pointLength:s}=r;if(Et===o&&t.pointLength===s)Mt(t),clearTimeout(n),n=setTimeout((()=>{t.state=1,a.emit2(t.name,r,t);}),t.minPressTime);else if(lt===o&&t.state===1)a.emit2(`${t.name}${rr}`,r,t);else if(t.state!==1){const l=r.timestamp-i.timestamp;(!(function(){const{distance:c}=r;return c&&t.maxDistance>c})()||t.minPressTime>l&&[lt,Qt].includes(o))&&(clearTimeout(n),t.state=2);}})),t}const ka={name:"pinch",threshold:0,pointLength:2};function fr(a,e){const t=ct(ka,e);return a.compute([lr,va],(n=>{if(Mt(t),mt(t))return;const r=(function(){const{pointLength:s,scale:l,deltaScale:c,phase:d}=n;return t.pointLength===s&&t.threshold<Math.abs(l-1)})();t.state=Zt(r,t.state,n.phase);const{name:o}=t;if(r||en(t.state)){a.emit2(o,n,t);const{deltaScale:s}=n;s!==1&&a.emit2(o+(1<s?"in":"out"),n,t);}const i=Jt(t.state);i&&a.emit2(o+i,n,t);})),t}const $a={name:"rotate",threshold:0,pointLength:2};function ur(a,e){const t=ct($a,e);return a.compute([lr,wa],(n=>{if(mt(t))return;Mt(t);const r=(function(){const{pointLength:s,angle:l}=n;return t.pointLength===s&&t.threshold<Math.abs(l)})();t.state=Zt(r,t.state,n.phase);const{name:o}=t;(r||en(t.state))&&a.emit2(o,n,t);const i=Jt(t.state);i&&a.emit2(o+i,n,t);})),t}function Ea(a){a.use(tn,{name:"doubletap",tapTimes:2});const e=a.get("doubletap");let t;return a.beforeEach(((n,r)=>{n==="tap"?(clearTimeout(t),t=setTimeout((()=>{[0,2].includes(e.state)&&r();}),300)):r();})),e}class Se extends ha{constructor(e,t){super(e,t),this.use(tn),this.use(cr),this.use(pr),this.use(dr),this.use(fr),this.use(ur);}}Se.STATE_POSSIBLE=0,Se.STATE_START=4,Se.STATE_MOVE=5,Se.STATE_END=1,Se.STATE_CANCELLED=3,Se.STATE_FAILED=2,Se.STATE_RECOGNIZED=1,Se.tap=tn,Se.pan=cr,Se.swipe=pr,Se.press=dr,Se.rotate=ur,Se.pinch=fr,Se.doubletap=Ea;class Ma{isWin(e){return typeof e!="object"||e instanceof Node?false:e===globalThis||e===window||e===self||e===Y.globalThis||e===Y.window||e===Y.self||typeof unsafeWindow<"u"&&e===unsafeWindow?true:e?.Math?.toString()==="[object Math]"}isDOM(e){return e instanceof Node}delete(e,t){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(e,t):delete e[t];}assign(e={},t={},n=false){const r=this;if(Array.isArray(t)&&!t.filter(s=>typeof s=="object").length)return t;if(t==null)return e;e==null&&(e={});let o;n?o=t:o=e;for(const i in o){if(!n&&!(i in t))continue;const s=Reflect.get(e,i),l=Reflect.get(t,i);if(typeof l=="object"&&l!=null&&i in e&&!r.isDOM(l)){let c;Array.isArray(l)?(Array.isArray(s)&&(s.length=0),c=l):c=r.assign(s,l,n),Reflect.set(e,i,c);}else Reflect.set(e,i,l);}return e}getRandomGUID(){return typeof Y.globalThis?.crypto?.randomUUID=="function"?Y.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return (e==="x"?t:t&3|8).toString(16)})}contains(...e){const[t,n]=e;if(e.length===1)return this.contains(Y.document.body||Y.document.documentElement,e[0]);if(n==null)return  false;if(typeof n[Symbol.iterator]=="function"){let r=true;for(const o of n)if(!t.contains(o)){r=false;break}return r}else return t.contains(n)}formatTime(e=new Date,t="yyyy-MM-dd HH:mm:ss"){const n=e==null?new Date:new Date(e);function r(s){return s<10?"0"+s:s}function o(s){return s>12?s-12:s}const i={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(o(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(i).forEach(function(s){const l=new RegExp(s,"g");t=t.replace(l,i[s]);}),t}formatByteToSize(e,t=true){if(e=parseInt(e.toString()),isNaN(e))throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB";const o={};o.B=1,o.KB=1024,o.MB=o.KB*o.KB,o.GB=o.MB*o.KB,o.TB=o.GB*o.KB,o.PB=o.TB*o.KB,o.EB=o.PB*o.KB,o.ZB=o.EB*o.KB,o.YB=o.ZB*o.KB,o.BB=o.YB*o.KB,o.NB=o.BB*o.KB,o.DB=o.NB*o.KB;for(const i in o)if(n=e/o[i],r=i,o.KB>=n)break;return n=n.toFixed(2),n=t?n+r.toString():parseFloat(n.toString()),n}AnyTouch=()=>Se;isPhone(e=Y.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(e)}setTimeout(e,t=0){try{return aa(e,t)}catch{return setTimeout(e,t)}}clearTimeout(e){try{e!=null&&ra(e);}catch{}finally{clearTimeout(e);}}setInterval(e,t=0){try{return oa(e,t)}catch{return setInterval(e,t)}}clearInterval(e){try{e!=null&&na(e);}catch{}finally{clearInterval(e);}}setArray(e,t,n){if(e==null||!Array.isArray(n))return;const r=e[t];Array.isArray(e[t])?r.length=0:e[t]=[],e[t]=n;}}const U=new Ma,ee={getSafeHTML(a){return window.trustedTypes?window.trustedTypes.createPolicy("safe-innerHTML",{createHTML:t=>t}).createHTML(a):a},setSafeHTML(a,e){a.innerHTML=this.getSafeHTML(e);}},pe={flexCenter:"pops-flex-items-center",flexYCenter:"pops-flex-y-center",hide:"pops-hide",hideImportant:"pops-hide-important",userSelectNone:"pops-user-select-none",textIsDisabled:"pops-text-is-disabled"};class La{on(e,t,n,r,o){function i(g,w,A){const v=g[w];return typeof v=="boolean"?(A.capture=v,typeof g[w+1]=="boolean"&&(A.once=g[w+1]),typeof g[w+2]=="boolean"&&(A.passive=g[w+2])):typeof v=="object"&&("capture"in v||"once"in v||"passive"in v||"isComposedPath"in v)&&(A.capture=v.capture,A.once=v.once,A.passive=v.passive,A.isComposedPath=v.isComposedPath),A}const s=this,l=arguments;if(typeof e=="string"&&(e=s.selectorAll(e)),e==null)return {off(){},emit(){}};let c=[];e instanceof NodeList||Array.isArray(e)?(e=e,c=[...e]):c.push(e);let d=[];Array.isArray(t)?d=d.concat(t.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof t=="string"&&(d=d.concat(t.split(" ").filter(g=>g!=="")));let p=[];Array.isArray(n)?p=p.concat(n.filter(g=>typeof g=="string"&&g.toString()!=="")):typeof n=="string"&&p.push(n);let f=r,b={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(f=n,b=i(l,3,b)):b=i(l,4,b);function h(){b.once&&s.off(e,t,n,r,o);}return c.forEach(g=>{function w(A){if(p.length){let v=b.isComposedPath?A.composedPath()[0]:A.target,S=g;if(U.isWin(S)&&S===Y.document&&(S=Y.document.documentElement),p.find(x=>{if(s.matches(v,x))return  true;const E=s.closest(v,x);return E&&S?.contains(E)?(v=E,true):false})){try{er.Object.defineProperty(A,"target",{get(){return v}});}catch{}f.call(v,A,v),h();}}else f.call(g,A),h();}d.forEach(A=>{g.addEventListener(A,w,b);const v=Reflect.get(g,dt)||{};v[A]=v[A]||[],v[A].push({selector:p,option:b,callback:w,originCallBack:f}),Reflect.set(g,dt,v);});}),{off:g=>{s.off(c,d,p,f,b,g);},emit:(g,w)=>{s.emit(c,d,g,w);}}}off(e,t,n,r,o,i){function s(w,A,v){const S=w[A];return typeof S=="boolean"?v.capture=S:typeof S=="object"&&S!=null&&"capture"in S&&(v.capture=S.capture),v}const l=this,c=arguments;if(typeof e=="string"&&(e=l.selectorAll(e)),e==null)return;let d=[];e instanceof NodeList||Array.isArray(e)?(e=e,d=[...e]):d.push(e);let p=[];Array.isArray(t)?p=p.concat(t.filter(w=>typeof w=="string"&&w.toString()!=="")):typeof t=="string"&&(p=p.concat(t.split(" ").filter(w=>w!=="")));let f=[];Array.isArray(n)?f=f.concat(n.filter(w=>typeof w=="string"&&w.toString()!=="")):typeof n=="string"&&f.push(n);let b=r,h={capture:false};typeof n=="function"?(b=n,h=s(c,3,h)):h=s(c,4,h);let g=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(g=true),c.length===5&&typeof c[4]=="function"&&typeof i!="function"&&(i=o),d.forEach(w=>{const A=Reflect.get(w,dt)||{};p.forEach(v=>{const S=A[v]||[],T=typeof i=="function"?S.filter(i):S;for(let x=0;x<T.length;x++){const E=T[x];let B=true;if(B&&b&&E.originCallBack!==b&&(B=false),B&&f.length&&Array.isArray(E.selector)&&JSON.stringify(E.selector)!==JSON.stringify(f)&&(B=false),B&&typeof E.option.capture=="boolean"&&h.capture!==E.option.capture&&(B=false),B||g){w.removeEventListener(v,E.callback,E.option);const z=S.findIndex(F=>F===E);z!==-1&&S.splice(z,1);}}S.length===0&&U.delete(A,t);}),Reflect.set(w,dt,A);});}offAll(e,t){if(typeof e=="string"&&(e=Y.document.querySelectorAll(e)),e==null)return;let n=[];e instanceof NodeList||Array.isArray(e)?n=[...e]:n.push(e);let r=[];Array.isArray(t)?r=r.concat(t):typeof t=="string"&&(r=r.concat(t.split(" "))),n.forEach(o=>{Object.getOwnPropertySymbols(o).forEach(i=>{if(!i.toString().startsWith("Symbol(events_"))return;const s=o[i]||{};(r.length?r:Object.keys(s)).forEach(c=>{const d=s[c];if(d){for(const p of d)o.removeEventListener(c,p.callback,{capture:p.option.capture});U.delete(o[i],c);}});});});}onReady(e){const t=this;if(typeof e!="function")return;function n(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return  false}}function r(){s(),e();}const o=[{target:Y.document,eventType:"DOMContentLoaded",callback:r},{target:Y.window,eventType:"load",callback:r}];function i(){for(let l=0;l<o.length;l++){const c=o[l];t.on(c.target,c.eventType,c.callback);}}function s(){for(let l=0;l<o.length;l++){const c=o[l];t.off(c.target,c.eventType,c.callback);}}n()?U.setTimeout(e,0):i();}emit(e,t,n,r=true){if(typeof e=="string"&&(e=Y.document.querySelector(e)),e==null)return;let o=[];e instanceof NodeList||Array.isArray(e)?(e=e,o=[...e]):o=[e];let i=[];Array.isArray(t)?i=t:typeof t=="string"&&(i=t.split(" ")),o.forEach(s=>{const l=s[dt]||{};i.forEach(c=>{let d=null;n&&n instanceof Event?d=n:(d=new Event(c),n&&Object.keys(n).forEach(p=>{d[p]=n[p];})),r==false&&c in l?l[c].forEach(p=>{p.callback(d);}):s.dispatchEvent(d);});});}click(e,t,n,r){const o=this;typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null&&(t==null?o.emit(e,"click",n,r):o.on(e,"click",null,t));}blur(e,t,n,r){const o=this;typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null&&(t===null?o.emit(e,"blur",n,r):o.on(e,"blur",null,t));}focus(e,t,n,r){const o=this;typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null&&(t==null?o.emit(e,"focus",n,r):o.on(e,"focus",null,t));}onHover(e,t,n){const r=this;typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null&&(r.on(e,"mouseenter",null,t,n),r.on(e,"mouseleave",null,t,n));}onKeyup(e,t,n){const r=this;e!=null&&(typeof e=="string"&&(e=Y.document.querySelector(e)),r.on(e,"keyup",null,t,n));}onKeydown(e,t,n){const r=this;e!=null&&(typeof e=="string"&&(e=Y.document.querySelector(e)),r.on(e,"keydown",null,t,n));}onKeypress(e,t,n){const r=this;e!=null&&(typeof e=="string"&&(e=Y.document.querySelector(e)),r.on(e,"keypress",null,t,n));}preventEvent(e,t=[],n){function r(o){return o?.preventDefault(),o?.stopPropagation(),o?.stopImmediatePropagation(),false}if(arguments.length===1)return r(arguments[0]);typeof t=="string"&&(t=[t]),t.forEach(o=>{this.on(e,o,r,{capture:!!n});});}selector(e){return this.selectorAll(e)[0]}selectorAll(e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(Y.document.querySelectorAll(e)).filter(t=>t?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const n=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(Y.document.querySelectorAll(e)).filter(r=>(r?.textContent||r?.innerText)?.includes(n))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let o="";r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),o=r[3]);const i=new RegExp(n,o);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(Y.document.querySelectorAll(e)).filter(s=>!!(s?.textContent||s?.innerText)?.match(i))}else return Array.from(Y.document.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=e?.textContent||e?.innerText;return typeof o!="string"&&(o=""),e.matches(t)&&o?.includes(r)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);const s=new RegExp(r,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(s)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");const n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");const o=e?.closest(t);if(o){const i=e?.textContent||e?.innerText;if(typeof i=="string"&&i.includes(r))return o}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);const s=new RegExp(r,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");const l=e?.closest(t);if(l){const c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return e?.closest(t)}}class Ia extends La{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(e,t=true){const n=e.getBoundingClientRect(),r=e.ownerDocument.defaultView;return new DOMRect(t?parseFloat((n.left+(r?.pageXOffset||0)).toString()):n.left,t?parseFloat((n.top+(r?.pageYOffset||0)).toString()):n.top,n.width,n.height)}width(e,t=false,n){const r=this;if(typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null){if(U.isWin(e))return Y.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&u.isShow(e)){if(e=e,parseFloat(u.getStyleValue(e,"width").toString())>0)return parseFloat(u.getStyleValue(e,"width").toString());if(e.offsetWidth>0){const o=u.getStyleValue(e,"borderLeftWidth"),i=u.getStyleValue(e,"borderRightWidth"),s=u.getStyleValue(e,"paddingLeft"),l=u.getStyleValue(e,"paddingRight"),c=parseFloat(e.offsetWidth.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;const{cloneNode:o,recovery:i}=u.showElement(e,n),s=r.width(o,true,n);return i(),s}}}height(e,t=false,n){const r=this;if(U.isWin(e))return Y.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null){if(e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&u.isShow(e)){if(e=e,parseFloat(u.getStyleValue(e,"height").toString())>0)return parseFloat(u.getStyleValue(e,"height").toString());if(e.offsetHeight>0){const o=u.getStyleValue(e,"borderTopWidth"),i=u.getStyleValue(e,"borderBottomWidth"),s=u.getStyleValue(e,"paddingTop"),l=u.getStyleValue(e,"paddingBottom"),c=parseFloat(e.offsetHeight.toString())-parseFloat(o.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;const{cloneNode:o,recovery:i}=u.showElement(e,n),s=r.height(o,true,n);return i(),s}}}outerWidth(e,t=false,n){const r=this;if(U.isWin(e))return Y.window.innerWidth;if(typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null)if(e=e,t||!t&&u.isShow(e)){const o=getComputedStyle(e,null),i=u.getStyleValue(o,"marginLeft"),s=u.getStyleValue(o,"marginRight");return e.offsetWidth+i+s}else {const{cloneNode:o,recovery:i}=u.showElement(e,n),s=r.outerWidth(o,true,n);return i(),s}}outerHeight(e,t=false,n){const r=this;if(U.isWin(e))return Y.window.innerHeight;if(typeof e=="string"&&(e=Y.document.querySelector(e)),e=e,t||!t&&u.isShow(e)){const o=getComputedStyle(e,null),i=u.getStyleValue(o,"marginTop"),s=u.getStyleValue(o,"marginBottom");return e.offsetHeight+i+s}else {const{cloneNode:o,recovery:i}=u.showElement(e,n),s=r.outerHeight(o,true,n);return i(),s}}addClassName(e,t){e!=null&&t!=null&&(typeof t=="function"&&(t=t()),Array.isArray(t)||(t=[t]),t.forEach(n=>{if(typeof n!="string"||n.trim()==="")return;const r=n.split(" ").filter(o=>o.trim()!=="");e?.classList?.add?.(...r);}));}removeClassName(e,t){if(e==null||typeof t!="string"||t.trim()==="")return;const n=t.split(" ").filter(r=>r.trim()!=="");e.classList.remove(...n);}containsClassName(e,t){return e==null||typeof t!="string"||t.trim()===""?false:e.classList.contains(t)}css(e,t,n){function r(i,s){const l=["width","height","top","left","right","bottom","font-size"];return typeof s=="number"&&(s=s.toString()),typeof s=="string"&&l.includes(i)&&s.match(/[0-9]$/gi)&&(s=s+"px"),s}if(typeof e=="string"&&(e=Y.document.querySelector(e)),e==null)return;const o=(i,s)=>{typeof s=="string"&&s.trim().endsWith("!important")?(s=s.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(i,s,"important")):(s=r(i,s),e.style.setProperty(i,s));};if(typeof t=="string"){if(n==null)return getComputedStyle(e).getPropertyValue(t);o(t,n);}else if(typeof t=="object")for(const i in t){const s=t[i];o(i,s);}}createElement(e,t,n){const r=Y.document.createElement(e);return typeof t=="string"?(ee.setSafeHTML(r,t),r):(t==null&&(t={}),n==null&&(n={}),Object.keys(t).forEach(o=>{const i=t[o];if(o==="innerHTML"){ee.setSafeHTML(r,i);return}Reflect.set(r,o,i);}),Object.keys(n).forEach(o=>{let i=n[o];typeof i=="object"?i=JSON.stringify(i):typeof i=="function"&&(i=i.toString()),r.setAttribute(o,i);}),r)}parseTextToDOM(e){return e=e.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),this.createElement("div",{innerHTML:e}).firstChild}getTextBoundingRect(e,t,n,r){if(!e||!("value"in e))return e;if(typeof t=="string"&&(t=parseFloat(t)),(typeof t!="number"||isNaN(t))&&(t=0),t<0?t=0:t=Math.min(e.value.length,t),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<t)&&(n=t),n<0?n=0:n=Math.min(e.value.length,n),typeof e.createTextRange=="function"){const T=e.createTextRange();return T.collapse(true),T.moveStart("character",t),T.moveEnd("character",n-t),T.getBoundingClientRect()}const o=v();let i=o.top,s=o.left;const l=S("width",true),c=S("height",true);let d="white-space:pre;padding:0;margin:0;";const p=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];i+=S("padding-top",true),i+=S("border-top-width",true),s+=S("padding-left",true),s+=S("border-left-width",true),s+=1;for(let T=0;T<p.length;T++){const x=p[T];d+=x+":"+S(x,false)+";";}const f=e.value||"G",b=f.length,h=document.createElement("div");t>0&&A(0,t);const g=A(t,n);b>n&&A(n,b),h.style.cssText=d,h.style.position="absolute",h.style.top=i+"px",h.style.left=s+"px",h.style.width=l+"px",h.style.height=c+"px",Y.document.body.appendChild(h);const w=g.getBoundingClientRect();return r||h.parentNode.removeChild(h),w;function A(T,x){const E=document.createElement("span");return E.style.cssText=d,E.textContent=f.substring(T,x),h.appendChild(E),E}function v(){const T=document.body,x=document.defaultView,E=document.documentElement,B=document.createElement("div");B.style.paddingLeft=B.style.width="1px",T.appendChild(B);const z=B.offsetWidth==2;T.removeChild(B);const F=e.getBoundingClientRect(),X=E.clientTop||T.clientTop||0,K=E.clientLeft||T.clientLeft||0,$=x?.pageYOffset||z&&E.scrollTop||T.scrollTop,M=x?.pageXOffset||z&&E.scrollLeft||T.scrollLeft;return {top:F.top+$-X,left:F.left+M-K}}function S(T,x){const E=Y.document.defaultView.getComputedStyle(e,null).getPropertyValue(T);return x?parseFloat(E):E}}cssHide(e,t=false){e!=null&&(t?u.addClassName(e,pe.hideImportant):u.addClassName(e,pe.hide));}cssShow(e){e!=null&&(u.removeClassName(e,pe.hide),u.removeClassName(e,pe.hideImportant));}toElement(e,t=false,n=false){function r(){const i=new DOMParser;return n?i.parseFromString(e,"text/html"):i.parseFromString(e,"text/html").body.firstChild}function o(){const i=Y.document.createElement("div");return ee.setSafeHTML(i,e),n?i:i.firstChild}return t?r():o()}append(e,t){if(typeof e=="string"&&(e=Y.document.querySelector(e)),e==null)return;function n(r,o){typeof t=="string"?r.insertAdjacentHTML("beforeend",ee.getSafeHTML(o)):r.appendChild(o);}if(Array.isArray(t)||t instanceof NodeList){const r=Y.document.createDocumentFragment();t.forEach(o=>{typeof o=="string"&&(o=this.toElement(o,true,false)),r.appendChild(o);}),e.appendChild(r);}else n(e,t);}appendHead(e){Y.document.head?Y.document.head.appendChild(e):Y.document.documentElement.appendChild(e);}appendBody(e){Y.document.body?Y.document.body.appendChild(e):Y.document.documentElement.appendChild(e);}isShow(e){return !!e.getClientRects().length}showElement(e,t){const n=e.cloneNode(true);n.setAttribute("style","visibility: hidden !important;display:block !important;");let r=Y.document.documentElement;const o=e.getRootNode();return t==null?o==e?r=Y.document.documentElement:r=o:r=t,r.appendChild(n),{cloneNode:n,recovery(){n.remove();}}}getStyleValue(e,t){let n=null,r=null;e instanceof CSSStyleDeclaration?r=e:(n=e.ownerDocument.defaultView,(!n||!n.opener)&&(n=window),r=n.getComputedStyle(e));const o=parseFloat(r[t]);return isNaN(o)?0:o}before(e,t){typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null&&(typeof t=="string"?e.insertAdjacentHTML("beforebegin",ee.getSafeHTML(t)):e.parentElement.insertBefore(t,e));}after(e,t){typeof e=="string"&&(e=Y.document.querySelector(e)),e!=null&&(typeof t=="string"?e.insertAdjacentHTML("afterend",ee.getSafeHTML(t)):e.parentElement.insertBefore(t,e.nextSibling));}getKeyFrames(e){const t={};return Object.keys(e.cssRules).forEach(n=>{e.cssRules[n].type===7&&e.cssRules[n].name.startsWith("pops-anim-")&&(t[e.cssRules[n].name]=e.cssRules[n]);}),t}calcColor(){function e(){return {hexToRgb:i=>{let s="";if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(i))return console.warn("输入错误的hex"),"";i=i.replace("#",""),s=i.match(/../g);for(let c=0;c<3;c++)s[c]=parseInt(s[c],16);return s},rgbToHex:(i,s,l)=>{const c=/^\d{1,3}$/;if(!c.test(i)||!c.test(s)||!c.test(l))return console.warn("输入错误的rgb颜色值"),"";const d=[i.toString(16),s.toString(16),l.toString(16)];for(let p=0;p<3;p++)d[p].length==1&&(d[p]=`0${d[p]}`);return `#${d.join("")}`},getDarkColor:(i,s)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(i))return console.warn("输入错误的hex颜色值"),"";const c=e().hexToRgb(i);for(let d=0;d<3;d++)c[d]=Math.floor(c[d]*(1-s));return e().rgbToHex(c[0],c[1],c[2])},getLightColor:(i,s)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(i))return console.warn("输入错误的hex颜色值"),"";const c=e().hexToRgb(i);for(let d=0;d<3;d++)c[d]=Math.floor((255-c[d])*s+c[d]);return e().rgbToHex(c[0],c[1],c[2])}}}return e()}getTransform(e){let t=0,n=0;const r=Y.globalThis.getComputedStyle(e).transform;if(r!=="none"&&r!=null&&r!==""){const i=r.match(/\((.+)\)/)?.[1]?.split?.(",");t=Math.abs(parseInt(i[4])),n=Math.abs(parseInt(i[5]));}return {transformLeft:t,transformTop:n}}onInput(e,t,n){let r=false;const o=async p=>{r||await t(p);},i=()=>{r=true;},s=()=>{r=false,this.emit(e,"input",{isComposite:r});},l=this.on(e,"input",o,n),c=this.on(e,"compositionstart",i,n),d=this.on(e,"compositionend",s,n);return {off:()=>{l.off(),c.off(),d.off();}}}}const u=new Ia,Z={createMask(a,e=101,t=""){return e=e-100,t.startsWith(";")&&(t=t.replace(";","")),`<div class="pops-mask" data-guid="${a}" style="z-index:${e};${t}"></div>`},createAnim(a,e,t,n="",r="",o){const i=t;let s="",l="";const c=i.position||"";t.zIndex!=null&&(s+=`z-index: ${o};`,l+=`z-index: ${o};`),i.width!=null&&(l+=`width: ${i.width};`),i.height!=null&&(l+=`height: ${i.height};`);const d=r.trim()!=="";return `
		<div class="pops-anim" anim="${i.animation||""}" style="${s}" data-guid="${a}">${t.style!=null?`<style tyle="text/css">${t.style}</style>`:""}
			<div class="pops ${t.class||""}" data-bottom-btn="${d}" type-value="${e}" style="${l}" position="${c}" data-guid="${a}">${n}</div>
		</div>`},createHeader(a,e){if(!e.btn)return "";const t=e;if(a!=="iframe"&&!t.btn?.close?.enable)return "";let n="",r="";const o=e;if(a==="iframe"&&o.topRightButton?.trim()!==""){let i="";o.topRightButton.split("|").forEach(s=>{s=s.toLowerCase(),i+=`
                <button class="pops-header-control" type="button" data-type="${s}">
                    <i class="pops-icon">${ie.getIcon(s)}</i>
                </button>`;}),n=`
            <div class="pops-header-controls" data-margin>${i}</div>`;}else t.btn?.close?.enable&&(r=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${ie.getIcon("close")}</i>
                    </button>
                </div>`),n=r;return n},createHeaderStyle(a,e){return {headerStyle:e?.title?.html&&e?.title?.style||"",headerPStyle:e?.title?.html?"":e?.title?.style||""}},createBottom(a,e){if(e.btn==null)return "";const t=e;if(!(e.btn?.ok?.enable||t.btn?.cancel?.enable||t.btn?.other?.enable))return "";let n="",r="",o="",i="",s="";if(e.btn.position&&(n+=`justify-content: ${e.btn.position};`),t.btn.reverse&&(n+="flex-direction: row-reverse;"),e.btn?.ok?.enable){let l="";(e.btn.ok.size==="large"||e.btn.ok.size==="small")&&(l="pops-button-"+e.btn.ok.size);let c="";const d=t.btn.ok.icon;if(d!==""){let p="";ie.hasIcon(d)?p=ie.getIcon(d):p=d,p=p||"",c=`<i class="pops-bottom-icon" is-loading="${e.btn.ok.iconIsLoading}">${p}</i>`;}o=`
            <button 
				class="pops-${a}-btn-ok ${l}"
				type="button"
				data-type="${t.btn.ok?.type}"
				data-has-icon="${(t.btn.ok.icon||"")!==""}"
				data-rightIcon="${t.btn.ok?.rightIcon}"
            >${c}<span>${e.btn.ok.text}</span>
            </button>`;}if(t.btn?.cancel?.enable){let l="";(t.btn.cancel.size==="large"||t.btn.cancel.size==="small")&&(l="pops-button-"+t.btn.cancel.size);let c="";const d=t.btn.cancel.icon;if(d!==""){let p="";ie.hasIcon(d)?p=ie.getIcon(d):p=d,p=p||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.cancel.iconIsLoading}">${p}</i>`;}i=`
            <button
				class="pops-${a}-btn-cancel ${l}"
				type="button"
				data-type="${t.btn.cancel.type}"
				data-has-icon="${(t.btn.cancel.icon||"")!==""}"
				data-rightIcon="${t.btn.cancel.rightIcon}"
            >${c}<span>${t.btn.cancel.text}</span>
            </button>`;}if(t.btn?.other?.enable){let l="";(t.btn.other.size==="large"||t.btn.other.size==="small")&&(l="pops-button-"+t.btn.other.size);let c="";const d=t.btn.other.icon;if(d!==""){let p="";ie.hasIcon(d)&&(p=ie.getIcon(d)),p=p||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.other.iconIsLoading}">${p}</i>`;}s=`
            <button
				class="pops-${a}-btn-other ${l}"
				type="button"
				data-type="${t.btn.other.type}"
				data-has-icon="${(t.btn.other.icon||"")!==""}"
				data-rightIcon="${t.btn.other.rightIcon}"
            >${c}<span>${t.btn.other.text}</span>
            </button>`;}if(t.btn.merge){let l="display: flex;";t.btn.mergeReverse?l+="flex-direction: row-reverse;":l+="flex-direction: row;",r=`
            <div class="pops-botttom-btn-controls pops-${a}-btn" style="${n}">${s}<div 
                    class="pops-${a}-btn-merge"
                    style="${l}">${o}${i}</div>
            </div>
            `;}else r=`<div class="pops-botttom-btn-controls pops-${a}-btn" style="${n}">${o}${i}${s}</div>`;return r},createContentStyle(a,e){return {contentStyle:e?.content?.html&&e?.content?.style||"",contentPStyle:e?.content?.html?"":e?.content?.style||""}},parseElement(a){return u.parseTextToDOM(a)}};var _a=`@charset "utf-8";\r
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
`,Ra=`.pops[position="top_left"] {\r
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
`,Na=`/* ::-webkit-scrollbar 是非标准的css */\r
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
`,Oa=`.pops {\r
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
`,Pa=`.pops-flex-items-center {\r
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
  width: 100%;\r
  width: -moz-available;\r
  width: -webkit-fill-available;\r
}\r
.pops-height-fill {\r
  height: 100%;\r
  height: -moz-available;\r
  height: -webkit-fill-available;\r
}\r
.pops-text-is-disabled {\r
  --pops-text-is-disabled-color: #a8abb2;\r
  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color);\r
  color: var(--pops-text-is-disabled-color);\r
}\r
.pops-text-is-disabled-important {\r
  --pops-text-is-disabled-color: #a8abb2;\r
  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color) !important;\r
  color: var(--pops-text-is-disabled-color) !important;\r
}\r
`,Da=`@keyframes rotating {\r
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
`,Ba="",Ha="",Va=`.pops[type-value="prompt"] {\r
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
`,Ua=`.pops[type-value="loading"] {\r
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
`,za=`.pops[type-value="iframe"] {\r
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
`,ja=`.pops[type-value="drawer"] {\r
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
`,qa=`.pops-folder-list {\r
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
`,Ga=`.pops[type-value="panel"] {\r
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
/* 底部的容器 */\r
.pops-panel-bottom-wrapper {\r
  background: var(--panel-aside-bg-color);\r
  border-top: 1px solid #ebeef5;\r
}\r
.pops-panel-bottom-wrapper:has(.pops-panel-bottom-left-container:empty):has(.pops-panel-bottom-right-container:empty) {\r
  border-top: 0;\r
}\r
.pops-panel-bottom-container {\r
  display: flex;\r
  flex-wrap: nowrap;\r
  justify-content: space-between;\r
}\r
.pops-panel-bottom-left-container {\r
}\r
.pops-panel-bottom-right-container {\r
}\r
.pops-panel-bottom-wrapper .pops-panel-bottom-item {\r
  list-style-type: none;\r
  margin: 6px 8px;\r
  border-radius: 4px;\r
  padding: 6px 10px;\r
  cursor: default;\r
}\r
.pops-panel-bottom-wrapper:not(.pops-panel-disable-bottom-item-hover-css) .pops-panel-bottom-item:hover {\r
  color: var(--panel-aside-hover-color);\r
  background: var(--panel-aside-hover-bg-color);\r
}\r
/* 底部的容器 */\r
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
  .pops[type-value="panel"] .pops-panel-select .el-select__selected-item.el-select__placeholder {\r
    max-width: -moz-available;\r
    max-width: -webkit-fill-available;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container > ul > li .pops-panel-input span.pops-panel-input__suffix {\r
    padding: 0 4px;\r
  }\r
  .pops[type-value="panel"] section.pops-panel-container .pops-panel-select select {\r
    min-width: 88px !important;\r
    width: -moz-available;\r
    width: -webkit-fill-available;\r
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
  --el-color-danger: #f56c6c;\r
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
  flex-direction: column;\r
  position: relative;\r
  box-shadow: none;\r
  width: 200px;\r
  border: 0px;\r
}\r
.pops-panel-input_inner {\r
  display: flex;\r
  align-items: center;\r
  width: 100%;\r
  border: 1px solid var(--pops-panel-components-input-bd-color);\r
  border-radius: 4px;\r
  background-color: var(--pops-panel-components-input-bg-color);\r
  box-shadow: none;\r
}\r
.pops-panel-input_inner:hover {\r
  border: 1px solid var(--pops-panel-components-input-hover-bd-color);\r
}\r
.pops-panel-input:has(input:disabled):hover {\r
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r
}\r
.pops-panel-input_inner:has(input:focus) {\r
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
.pops-panel-input input[type="search"]::-webkit-search-cancel-button {\r
  -webkit-appearance: none;\r
  display: none;\r
}\r
/* 颜色选择器不需要那么宽 */\r
.pops-panel-input:has(input[type="color"]) {\r
  width: 50px;\r
}\r
.pops-panel-input input[type="color"] {\r
  padding: 0px;\r
}\r
.pops-panel-input_inner:has(input[type="file"]) {\r
  border: 0px;\r
  background: transparent;\r
}\r
.pops-panel-input input[type="file"] {\r
  padding: 0px;\r
  line-height: 32px;\r
}\r
.pops-panel-input span.pops-panel-input__suffix {\r
  display: inline-flex;\r
  white-space: nowrap;\r
  flex-shrink: 0;\r
  flex-wrap: nowrap;\r
  height: 100%;\r
  height: -moz-available;\r
  height: -webkit-fill-available;\r
  text-align: center;\r
  color: var(--pops-panel-components-input-suffix-color);\r
  background: var(--pops-panel-components-input-suffix-bg-color);\r
  transition: all 0.3s;\r
  pointer-events: none;\r
  padding: 0 8px;\r
  position: relative;\r
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
/* 当清空图标显示时或查看图标存在时，则隐藏输入框的padding-right */\r
.pops-panel-input:hover:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,\r
.pops-panel-input:focus:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,\r
.pops-panel-input:focus-within:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,\r
.pops-panel-input:active:has(span.pops-panel-input__suffix svg[data-type="circleClose"]) input,\r
.pops-panel-input:has(span.pops-panel-input__suffix svg[data-type="view"]) input,\r
.pops-panel-input:has(span.pops-panel-input__suffix svg[data-type="hide"]) input {\r
  padding-right: 0;\r
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
/* 校验样式 */\r
.pops-panel-input:has(.pops-panel-input-valid-error) {\r
  --pops-panel-components-input-bd-color: var(--el-color-danger) !important;\r
  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r
  --pops-panel-components-input-focus-bd-color: var(--pops-panel-components-input-bd-color);\r
}\r
.pops-panel-input .pops-panel-input-valid-error {\r
  width: 100%;\r
  color: var(--el-color-danger);\r
  font-weight: 500;\r
  font-size: 0.8em;\r
  box-sizing: border-box;\r
  vertical-align: middle;\r
  display: inline-flex;\r
  position: relative;\r
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
  --pops-panel-components-select-disabled-text-color: #a8abb2;\r
  --pops-panel-components-select-text-color: #000000;\r
  --pops-panel-components-select-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));\r
  --pops-panel-components-select-hover-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));\r
  --pops-panel-components-select-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
}\r
.pops-panel-select {\r
  border: 0;\r
}\r
.pops-panel-select select {\r
  width: 100%;\r
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
/* select dialog 的CSS */\r
.pops-panel-select[data-mode="dialog"] {\r
}\r
/* select dialog 的CSS */\r
\r
/* select horizontal 的CSS */\r
.pops-panel-select[data-mode="horizontal"] {\r
  --pops-panel-components-select-horizontal-selected-text-color: #626aef;\r
  --pops-panel-components-select-horizontal-selected-bg-color: #eff0fd;\r
}\r
.pops-panel-select[data-mode="horizontal"] .el-select__wrapper {\r
  padding: 0;\r
  gap: 0;\r
  border: 0;\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item {\r
  flex: 1;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  border: 1px solid var(--el-border-color);\r
  height: -moz-available;\r
  height: -webkit-fill-available;\r
  border-left: 0;\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item:hover {\r
  color: var(--el-color-primary);\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item:first-child {\r
  border-left: 1px solid var(--el-border-color);\r
  border-top-left-radius: var(--el-border-radius-base);\r
  border-bottom-left-radius: var(--el-border-radius-base);\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item:last-child {\r
  border-top-right-radius: var(--el-border-radius-base);\r
  border-bottom-right-radius: var(--el-border-radius-base);\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item.select__selected-item {\r
  color: var(--pops-panel-components-select-horizontal-selected-text-color);\r
  background-color: var(--pops-panel-components-select-horizontal-selected-bg-color);\r
  border-color: var(--pops-panel-components-select-horizontal-selected-bg-color);\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item:has(+ .select__selected-item) {\r
  border-right: 0;\r
}\r
.pops-panel-select[data-mode="horizontal"] .select-item[disabled] {\r
  color: var(--pops-panel-components-select-disabled-text-color);\r
  --pops-panel-components-select-horizontal-selected-text-color: var(\r
    --pops-panel-components-select-disabled-text-color\r
  );\r
  cursor: not-allowed;\r
  background: unset;\r
}\r
/* select horizontal 的CSS */\r
\r
/* select-multiple的CSS*/\r
.pops-panel-select-multiple,\r
.pops-panel-select {\r
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
.pops-panel-select .el-select__wrapper,\r
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
.pops-panel-select .el-select__wrapper.is-focused,\r
.pops-panel-select-multiple .el-select__wrapper.is-focused {\r
  --el-border-color: var(--el-color-primary);\r
}\r
.pops-panel-select .el-select__selection,\r
.pops-panel-select-multiple .el-select__selection {\r
  position: relative;\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: center;\r
  flex: 1;\r
  min-width: 0;\r
  gap: 6px;\r
}\r
.pops-panel-select .el-select__selection[data-selected-text-align="left"] {\r
  justify-content: left;\r
}\r
.pops-panel-select .el-select__selection[data-selected-text-align="center"] {\r
  justify-content: center;\r
}\r
.pops-panel-select .el-select__selection[data-selected-text-align="right"] {\r
  justify-content: right;\r
}\r
.pops-panel-select .el-select__selected-item,\r
.pops-panel-select-multiple .el-select__selected-item {\r
  display: flex;\r
  flex-wrap: wrap;\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
}\r
.pops-panel-select .el-select__selected-item span {\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
}\r
.pops-panel-select .el-select__selected-item.el-select__choose_tag .el-tag,\r
.pops-panel-select-multiple .el-select__selected-item.el-select__choose_tag .el-tag {\r
  max-width: 200px;\r
}\r
.pops-panel-select .el-select__input-wrapper,\r
.pops-panel-select-multiple .el-select__input-wrapper {\r
  max-width: 100%;\r
}\r
.pops-panel-select .el-select__selection.is-near,\r
.pops-panel-select-multiple .el-select__selection.is-near {\r
  margin-left: -8px;\r
}\r
.pops-panel-select .el-select__placeholder,\r
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
.pops-panel-select .el-select__placeholder.is-transparent,\r
.pops-panel-select-multiple .el-select__placeholder.is-transparent {\r
  -webkit-user-select: none;\r
  -moz-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
  color: var(--el-text-color-placeholder);\r
}\r
.pops-panel-select .el-select__prefix,\r
.pops-panel-select .el-select__suffix,\r
.pops-panel-select-multiple .el-select__prefix,\r
.pops-panel-select-multiple .el-select__suffix {\r
  display: flex;\r
  align-items: center;\r
  flex-shrink: 0;\r
  gap: 6px;\r
  color: var(--el-input-icon-color, var(--el-text-color-placeholder));\r
}\r
.pops-panel-select .el-icon,\r
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
.pops-panel-select .el-icon svg,\r
.pops-panel-select-multiple .el-icon svg {\r
  height: 1em;\r
  width: 1em;\r
}\r
.pops-panel-select .el-select__caret,\r
.pops-panel-select-multiple .el-select__caret {\r
  color: var(--el-select-input-color);\r
  font-size: var(--el-select-input-font-size);\r
  transition: transform var(--el-transition-duration);\r
  transform: rotate(0);\r
  cursor: pointer;\r
}\r
/* 把箭头旋转 */\r
.pops-panel-select[data-show-option] .el-select__caret,\r
.pops-panel-select-multiple[data-show-option] .el-select__caret {\r
  transform: rotate(180deg);\r
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
/* 禁用样式 */\r
.pops-panel-select-disable {\r
  --el-fill-color-blank: #f5f7fa;\r
  --color: #a8abb2;\r
  --el-border-color: #cbcbcb;\r
}\r
.pops-panel-select-disable .el-tag.el-tag--info {\r
  --el-tag-bg-color: #e7e7e7;\r
  --el-tag-text-color: var(--pops-components-is-disabled-text-color);\r
}\r
.pops-panel-select-disable .el-select__selection .el-tag,\r
.pops-panel-select-disable .el-tag .el-tag__close:hover,\r
.pops-panel-select-disable .el-select__wrapper,\r
.pops-panel-select-disable .el-select__caret {\r
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
  width: -moz-available;\r
  width: -webkit-fill-available;\r
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
`,Wa=`.pops-rightClickMenu {\r
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
.pops-rightClickMenu[data-position="absolute"] {\r
  position: absolute;\r
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
  width: -moz-available;\r
  width: -webkit-fill-available;\r
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
`,Ka=`.pops {\r
  max-height: 300px;\r
}\r
.select-container {\r
  --el-font-size-base: 14px;\r
  --el-text-color-regular: #606266;\r
  --el-color-primary: #409eff;\r
  --el-fill-color-light: #f5f7fa;\r
  --el-disable-color: #a8abb2;\r
}\r
.select-item {\r
  cursor: pointer;\r
  font-size: var(--el-font-size-base);\r
  padding: 0 20px 0 20px;\r
  position: relative;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  color: var(--el-text-color-regular);\r
  min-height: 34px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  align-items: flex-start;\r
  box-sizing: border-box;\r
}\r
.select-item[aria-disabled],\r
.select-item[disabled] {\r
  cursor: not-allowed;\r
  color: var(--el-disable-color);\r
  background: unset;\r
}\r
.select-item:hover {\r
  background-color: var(--el-fill-color-light);\r
}\r
.select-item.select-item-is-selected:has(.pops-panel-input input) {\r
  background-color: #e7e7e7;\r
}\r
.select-item.select-item-is-selected {\r
  color: var(--el-color-primary);\r
  font-weight: 700;\r
}\r
.select-item.select-item-is-selected:not(:has(.pops-panel-input))::after {\r
  content: "";\r
  position: absolute;\r
  top: 50%;\r
  right: 12px;\r
  border-top: none;\r
  border-right: none;\r
  background-repeat: no-repeat;\r
  background-position: center;\r
  background-color: var(--el-color-primary);\r
  mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E")\r
    no-repeat;\r
  mask-size: 100% 100%;\r
  -webkit-mask: url("data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E")\r
    no-repeat;\r
  -webkit-mask-size: 100% 100%;\r
  transform: translateY(-50%);\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.select-item .pops-panel-input {\r
  width: 100%;\r
  margin: 5px 0px;\r
}\r
.select-item .pops-panel-input:has(.pops-panel-input-valid-error) {\r
  margin-bottom: 0px;\r
}\r
\r
.select-item .select-item-text {\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
  overflow: hidden;\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  .select-container {\r
    --el-text-color-regular: #f2f2f2;\r
    --el-disable-color: #8d9095;\r
    --el-fill-color-light: #262727;\r
  }\r
}\r
`;const j={index:_a,ninePalaceGridPosition:Ra,scrollbar:Na,button:Oa,common:Pa,anim:Da,alertCSS:Ba,confirmCSS:Ha,promptCSS:Va,loadingCSS:Ua,iframeCSS:za,tooltipCSS:Fa,drawerCSS:ja,folderCSS:qa,panelCSS:Ga,rightClickMenu:Wa,panelComponents_Select:Ka},at={$data:{},$flag:{isInit:false},init(){if(!this.$flag.isInit){this.$flag.isInit=true;const a=u.createElement("style",{innerHTML:j.anim});u.appendHead(a),this.$data=null,this.$data=u.getKeyFrames(a.sheet),U.setTimeout(()=>{a.remove();},50);}},hasAnim(a){return Object.prototype.hasOwnProperty.call(this.$data,a)}},me={alert:[],confirm:[],drawer:[],folder:[],iframe:[],loading:[],panel:[],prompt:[],rightClickMenu:[],tooltip:[]},be={getMaxZIndexNodeInfo(a=1,e=Y.document,t){a=Number.isNaN(a)?1:a;const n=2*Math.pow(10,9);let r=0,o=null;function i(l){return l.position!=="static"&&l.display!=="none"}function s(l){if(typeof t=="function"){const d=t(l);if(typeof d=="boolean"&&!d)return}const c=Y.window.getComputedStyle(l);if(i(c)){const d=parseInt(c.zIndex);isNaN(d)||d>r&&(r=d,o=l),l.shadowRoot!=null&&l instanceof ShadowRoot&&l.shadowRoot.querySelectorAll("*").forEach(p=>{s(p);});}}return e.querySelectorAll("*").forEach(l=>{s(l);}),r+=a,r>=n&&(r=n),{node:o,zIndex:r}},getPopsMaxZIndex(a=1){a=Number.isNaN(a)?1:a;const e=2*Math.pow(10,9);let t=0,n=null;function r(i){return i.position!=="static"&&i.display!=="none"}Object.keys(me).forEach(i=>{const s=me[i];for(let l=0;l<s.length;l++){const c=s[l],d=window.getComputedStyle(c.$anim);if(r(d)){const p=parseInt(d.zIndex);isNaN(p)||p>t&&(t=p,n=c.$anim);}}}),t+=a;const o=t>=e;return o&&(t=e),{zIndex:t,animElement:n,isOverMaxZIndex:o}},getMaxZIndex(a=1){return this.getMaxZIndexNodeInfo(a).zIndex},removeInstance(a,e,t=false){function n(r){typeof r.beforeRemoveCallBack=="function"&&r.beforeRemoveCallBack(r),r?.$anim?.remove(),r?.$pops?.remove(),r?.$mask?.remove(),r?.$shadowContainer?.remove();}return a.forEach(r=>{r.forEach((o,i)=>{if(t||o.guid===e){const s=o.$anim.getAttribute("anim");if(at.hasAnim(s)){const l=s+"-reverse";o.$anim.style.width="100%",o.$anim.style.height="100%",o.$anim.style["animation-name"]=l,at.hasAnim(o.$anim.style["animation-name"])?u.on(o.$anim,u.getAnimationEndNameList(),function(){n(o);},{capture:true}):n(o);}else n(o);r.splice(i,1);}});}),a},hide(a,e,t,n,r,o){return new Promise(i=>{const s=r.querySelector(".pops[type-value]");if(e==="drawer"){const c=a;U.setTimeout(()=>{o&&u.css(o,"display","none"),["top","bottom"].includes(c.direction)?s.style.setProperty("height","0"):["left","right"].includes(c.direction)?s.style.setProperty("width","0"):console.error("未知direction：",c.direction),i();},c.closeDelay);}else {const c=t.find(d=>d.guid===n);if(c){const d=c;if(d.$anim.style.width="100%",d.$anim.style.height="100%",Reflect.set(d.$anim.style,"animation-name",d.$anim.getAttribute("anim")+"-reverse"),at.hasAnim(Reflect.get(d.$anim.style,"animation-name"))){let p=function(){d.$anim.style.display="none",d.$mask&&(d.$mask.style.display="none"),u.off(d.$anim,u.getAnimationEndNameList(),p,{capture:true}),i();};u.on(d.$anim,u.getAnimationEndNameList(),p,{capture:true});}else d.$anim.style.display="none",d.$mask&&(d.$mask.style.display="none"),i();}}})},show(a,e,t,n,r,o){return new Promise(i=>{const s=r.querySelector(".pops[type-value]");if(e==="drawer"){const c=a;U.setTimeout(()=>{o&&u.css(o,"display","");const d=c.direction,p=c.size.toString();["top","bottom"].includes(d)?s.style.setProperty("height",p):["left","right"].includes(d)?s.style.setProperty("width",p):console.error("未知direction：",d),i();},c.openDelay??0);}else {const c=t.find(d=>d.guid===n);if(c){const d=c;if(d.$anim.style.width="",d.$anim.style.height="",Reflect.set(d.$anim.style,"animation-name",d.$anim.getAttribute("anim").replace("-reverse","")),at.hasAnim(Reflect.get(d.$anim.style,"animation-name"))){let p=function(){u.off(d.$anim,u.getAnimationEndNameList(),p,{capture:true}),i();};d.$anim.style.display="",d.$mask&&(d.$mask.style.display=""),u.on(d.$anim,u.getAnimationEndNameList(),p,{capture:true});}else d.$anim.style.display="",d.$mask&&(d.$mask.style.display=""),i();}}})},close(a,e,t,n,r){return new Promise(o=>{const i=r.querySelector(".pops[type-value]"),s=a;function l(){function c(p){p.propertyName==="transform"&&(u.off(i,u.getTransitionEndNameList(),void 0,c),be.removeInstance([t],n),o());}if(u.on(i,u.getTransitionEndNameList(),c),getComputedStyle(i).transform!=="none"){u.emit(i,u.getTransitionEndNameList(),void 0,true);return}["top"].includes(s.direction)?i.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(s.direction)?i.style.setProperty("transform","translateY(100%)"):["left"].includes(s.direction)?i.style.setProperty("transform","translateX(-100%)"):["right"].includes(s.direction)?i.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",s.direction);}e==="drawer"?U.setTimeout(()=>{l();},s.closeDelay):(be.removeInstance([t],n),o());})},drag(a,e){e=Object.assign({limit:true,extraDistance:3,container:Y.globalThis,emitClick:true},e);let t=false,n=0,r=0;const o=U.AnyTouch(),i=new o(e.dragElement,{preventDefault(f){return typeof e.preventEvent=="function"?e.preventEvent(f):true}});u.css(e.dragElement,{cursor:"move"});function s(f){const b=f.style.transitionDuration;return globalThis.getComputedStyle(f).transitionDuration!=="0s"&&(f.style.transitionDuration="0s"),()=>{f.style.transitionDuration=b;}}function l(f){return f=f??globalThis,{width:u.width(f),height:u.height(f)}}function c(f){if(f=f??globalThis,U.isWin(f))return {left:0,top:0};{const b=f.getBoundingClientRect();return {left:b.left,top:b.top}}}let d=u.getTransform(a),p=null;i.on("pan",function(f){if(!t){t=true;const g=e.dragElement.getBoundingClientRect();n=f.x-g.left,r=f.y-g.top,d=u.getTransform(a),p=s(a);}let b=f.x-n+d.transformLeft,h=f.y-r+d.transformTop;if(f.phase==="move"){if(e.limit){const g=l(e.container).width-u.width(a)+d.transformLeft,{left:w,top:A}=c(e.container),v=l(e.container).height-u.height(a)+d.transformTop;b>g&&(b=g),h>v&&(h=v),b-e.extraDistance*2<w+d.transformLeft?(b=w+d.transformLeft,b+=e.extraDistance):b-=e.extraDistance,h-e.extraDistance*2<A+d.transformTop?(h=A+d.transformTop,h+=e.extraDistance):h-=e.extraDistance;}typeof e.moveCallBack=="function"&&e.moveCallBack(a,b,h),u.css(a,{left:b+"px",top:h+"px"});}f.phase==="end"&&(t=false,typeof p=="function"&&(p(),p=null),typeof e.endCallBack=="function"&&e.endCallBack(a,b,h));}),e.emitClick&&i.on(["tap"],function(f){f.changedPoints.forEach(b=>{u.emit(b.target,"click",void 0,true);});});},sortElementListByProperty(a,e,t=true){if(typeof t!="boolean")throw new TypeError("参数 sortByDesc 必须为boolean类型");if(a==null||e==null)throw new Error("获取前面的值或后面的值的方法不能为空");return function(n,r){const o=a(r),i=e(n);return t?i>o?-1:i<o?1:0:i<o?-1:i>o?1:0}}},N={handlerShadow(a){const e=u.createElement("div",{className:"pops-shadow-container"});if(a.useShadowRoot){const t=e.attachShadow({mode:"open"});return {$shadowContainer:e,$shadowRoot:t}}else return {$shadowContainer:e,$shadowRoot:e}},handleInit(a,e){if(at.init(),!!arguments.length&&a!=null&&e!=null){if(typeof e=="string"){if(e.trim()==="")return;e=[{css:e}];}else e=e.map(t=>typeof t=="string"?{css:t}:t);for(const t of e){const n=u.createElement("style",{},{"data-type":"PopsHandler.handleInit"});n.textContent=t.css,typeof t.name=="string"&&n.setAttribute("data-name",t.name),a.appendChild(n);}}},handleMask(a={}){const e={maskElement:u.parseTextToDOM(a.maskHTML)};let t=false;function n(o){u.preventEvent(o);const i=me[a.type];function s(){if(a.config.mask.clickEvent.toClose)return be.close(a.config,a.type,i,a.guid,a.animElement);if(a.config.mask.clickEvent.toHide)return be.hide(a.config,a.type,i,a.guid,a.animElement,e.maskElement)}return typeof a.config.mask.clickCallBack=="function"?a.config.mask.clickCallBack(s,a.config):s(),false}if(a.config.mask.clickEvent.toClose||a.config.mask.clickEvent.toHide){let o=function(i){return !!(i?.localName?.toLowerCase()==="div"&&i.className&&i.className==="pops-anim"&&i.hasAttribute("anim"))};u.on(a.animElement,["touchstart","mousedown"],void 0,i=>{const s=i.composedPath()[0];t=o(s);}),u.on(a.animElement,"click",void 0,i=>{const s=i.composedPath()[0];if(o(s)&&t)return n(i)}),u.on(e.maskElement,"click",void 0,i=>{t=true,n(i);});}return e},handleQueryElement(a,e){return {$pops:a.querySelector(".pops[type-value"),$btnOk:a.querySelector(`.pops-${e}-btn-ok`),$btnCancel:a.querySelector(`.pops-${e}-btn-cancel`),$btnOther:a.querySelector(`.pops-${e}-btn-other`),$title:a.querySelector(`.pops-${e}-title`),$input:a.querySelector(`.pops-${e}-content textarea[pops]`)?a.querySelector(`.pops-${e}-content textarea[pops]`):a.querySelector(`.pops-${e}-content input[pops]`),$headerControls:a.querySelector(".pops-header-controls"),$iframe:a.querySelector("iframe[pops]"),$loading:a.querySelector(".pops-loading"),$content:a.querySelector(`.pops-${e}-content`),$panelRightSectionWrapper:a.querySelector(`.pops-${e}-section-wrapper`),$panelLeftAside:a.querySelector(`.pops-${e}-content aside.pops-${e}-aside`),$panelContentSectionContainer:a.querySelector(`.pops-${e}-content section.pops-${e}-container`),$panelBottomWrapper:a.querySelector(`.pops-${e}-bottom-wrapper`),$panelBottomContainer:a.querySelector(`.pops-${e}-bottom-container`),$panelBottomLeftContainer:a.querySelector(`.pops-${e}-bottom-left-container`),$panelBottomRightContainer:a.querySelector(`.pops-${e}-bottom-right-container`),$contentLoading:a.querySelector(`.pops-${e}-content-global-loading`),$headerBtnMin:a.querySelector(".pops-header-control[data-type='min']"),$headerBtnMax:a.querySelector(".pops-header-control[data-type='max']"),$headerBtnMise:a.querySelector(".pops-header-control[data-type='mise']"),$headerBtnClose:a.querySelector(".pops-header-control[data-type='close']"),$folderList:a.querySelector(".pops-folder-list"),$folderHeaderNav:a.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),$folderHeaderRow:a.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),$folderTbody:a.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),$folderHeaderBreadcrumbPrimary:a.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),$folderSortFileName:a.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),$folderSortLatestTime:a.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),$folderSortFileSize:a.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventConfig(a,e,t,n,r,o,i,s){return {$shadowContainer:t,$shadowRoot:n,$el:o,$anim:o,$pops:i,$mask:s,mode:r,guid:e,close(){return be.close(a,r,me[r],e,o)},hide(){return be.hide(a,r,me[r],e,o,s)},show(){return be.show(a,r,me[r],e,o,s)}}},handleLoadingEventConfig(a,e,t,n,r,o){return {$el:n,$anim:n,$pops:r,$mask:o,mode:t,guid:e,close(){return be.close(a,t,me[t],e,n)},hide(){return be.hide(a,t,me[t],e,n,o)},show(){return be.show(a,t,me[t],e,n,o)}}},handleResultConfig(a){const e=Object.assign({},a);return U.delete(e,"type"),U.delete(e,"function"),e},handleClickEvent(a,e,t,n){typeof n=="function"&&u.on(e,"click",r=>{n(Object.assign(t,{type:a}),r);},{capture:true});},handleKeyboardEvent(a,e=[],t){const n=function(r){const o=r.code||r.key,i=r.charCode||r.keyCode||r.which;e.includes("ctrl")&&!r.ctrlKey||e.includes("alt")&&!r.altKey||e.includes("meta")&&!r.metaKey||e.includes("shift")&&!r.shiftKey||(typeof a=="string"&&a===o?t&&t(r):typeof a=="number"&&a===i&&t&&t(r));};return u.on(Y.globalThis,"keydown",n,{capture:true}),{removeKeyboardEvent(){u.off(globalThis,"keydown",n,{capture:true});}}},handlePromptClickEvent(a,e,t,n,r){u.on(t,"click",o=>{const i={type:a,text:e.value};r(Object.assign(n,i),o);},{capture:true});},handleZIndex(a){return typeof a=="function"?a():a},handleOnly(a,e){if(e.only)if(a==="loading"||a==="tooltip"||a==="rightClickMenu"){const t=me[a];t&&be.removeInstance([t],"",true);}else be.removeInstance([me.alert,me.confirm,me.prompt,me.iframe,me.drawer,me.folder,me.panel],"",true);else {const t=e.zIndex;e.zIndex=()=>{const{zIndex:n}=be.getPopsMaxZIndex(N.handleZIndex(t)+100);return n};}return e},handlePush(a,e){me[a].push(e);}},Xa=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:true,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback:function(a){a.close();}},close:{enable:true,callback:function(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),qt={init(a){const e=U.getRandomGUID(),t="alert";let n=Xa();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"button",css:j.button},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"alertCSS",css:j.alertCSS}]);const i=N.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:d,headerPStyle:p}=Z.createHeaderStyle(t,n),{contentStyle:f,contentPStyle:b}=Z.createContentStyle(t,n),h=Z.createAnim(e,t,n,`
			<div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${d}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${p}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${t}-content" style="${f}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${b}">${n.content.text}</p>`}</div>${c}`,c,i),g=Z.parseElement(h),{$pops:w,$headerBtnClose:A,$btnOk:v,$title:S}=N.handleQueryElement(g,t);let T;const x=[g];n.mask.enable&&(T=N.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:s}).maskElement,x.push(T));const E=N.handleEventConfig(n,e,r,o,t,g,w,T);return N.handleClickEvent("close",A,E,n.btn.close?.callback),N.handleClickEvent("ok",v,E,n.btn.ok?.callback),u.append(o,x),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r),T!=null&&g.after(T),N.handlePush(t,{guid:e,$anim:g,$pops:w,$mask:T,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(w,{dragElement:S,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),N.handleResultConfig(E)}},Ya=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Qa={init(a){const e=U.getRandomGUID(),t="confirm";let n=Ya();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"button",css:j.button},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"confirmCSS",css:j.confirmCSS}]);const i=N.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:d,headerPStyle:p}=Z.createHeaderStyle(t,n),{contentStyle:f,contentPStyle:b}=Z.createContentStyle(t,n),h=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${d}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${p}">${n.title.text}</p>`}${l}</div>
                        <div class="pops-content pops-${t}-content" style="${f}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${b}">${n.content.text}</p>`}</div>${c}`,c,i),g=Z.parseElement(h),{$pops:w,$title:A,$headerBtnClose:v,$btnOk:S,$btnCancel:T,$btnOther:x}=N.handleQueryElement(g,t);let E;const B=[g];n.mask.enable&&(E=N.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:s}).maskElement,B.push(E));const z=N.handleEventConfig(n,e,r,o,t,g,w,E);return N.handleClickEvent("close",v,z,n.btn.close.callback),N.handleClickEvent("ok",S,z,n.btn.ok.callback),N.handleClickEvent("cancel",T,z,n.btn.cancel.callback),N.handleClickEvent("other",x,z,n.btn.other.callback),u.append(o,B),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r),E!=null&&g.after(E),N.handlePush(t,{guid:e,$anim:g,$pops:w,$mask:E,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(w,{dragElement:A,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),N.handleResultConfig(z)}},Ja=()=>({title:{enable:true,position:"center",text:"默认标题",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",zIndex:1e4,only:false,direction:"right",size:"30%",lockScroll:false,closeOnPressEscape:true,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:false}),Za={init(a){const e=U.getRandomGUID(),t="drawer";let n=Ja();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"button",css:j.button},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"drawerCSS",css:j.drawerCSS}]);const i=N.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:d,headerPStyle:p}=Z.createHeaderStyle(t,n),{contentStyle:f,contentPStyle:b}=Z.createContentStyle(t,n),h=Z.createAnim(e,t,n,`
            ${n.title.enable?`<div class="pops-title pops-${t}-title" style="${d}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="width: 100%;text-align: ${n.title.position};${p}">${n.title.text}</p>`}${l}</div>`:""}
            <div class="pops-content pops-${t}-content" style="${f}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${b}">${n.content.text}</p>`}</div>${c}`,c,i),g=Z.parseElement(h),{$pops:w,$headerBtnClose:A,$btnCancel:v,$btnOk:S,$btnOther:T}=N.handleQueryElement(g,t),x=w,E=A,B=v,z=S,F=T;let X;const K=[g];n.mask.enable&&(X=N.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:s}).maskElement,K.push(X));const $=N.handleEventConfig(n,e,r,o,t,g,x,X);return x.setAttribute("direction",n.direction),n.direction==="top"?(x.style.setProperty("height","0"),x.style.setProperty("border-radius",`0px 0px ${n.borderRadius}px ${n.borderRadius}px`)):n.direction==="bottom"?(x.style.setProperty("height","0"),x.style.setProperty("border-radius",`${n.borderRadius}px ${n.borderRadius}px 0px 0px`)):n.direction==="left"?(x.style.setProperty("width","0"),x.style.setProperty("border-radius",`0px ${n.borderRadius}px 0px ${n.borderRadius}px`)):n.direction==="right"&&(x.style.setProperty("width","0"),x.style.setProperty("border-radius",`${n.borderRadius}px 0px ${n.borderRadius}px 0px`)),n.closeOnPressEscape&&N.handleKeyboardEvent("Escape",[],function(){$.close();}),[{type:"close",ele:E},{type:"cancel",ele:B},{type:"ok",ele:z},{type:"other",ele:F}].forEach(y=>{N.handleClickEvent(y.type,y.ele,$,(k,P)=>{const _=n.btn[y.type].callback;typeof _=="function"&&_(k,P);});}),K.forEach(y=>{y.style.setProperty("display","none"),["top"].includes(n.direction)?(x.style.setProperty("height",n.size.toString()),x.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(n.direction)?(x.style.setProperty("height",n.size.toString()),x.style.setProperty("transform","translateY(100%)")):["left"].includes(n.direction)?(x.style.setProperty("width",n.size.toString()),x.style.setProperty("transform","translateX(-100%)")):["right"].includes(n.direction)&&(x.style.setProperty("width",n.size.toString()),x.style.setProperty("transform","translateX(100%)")),y.style.setProperty("display","");}),u.append(o,K),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r),U.setTimeout(()=>{U.setTimeout(()=>{x.style.setProperty("transform","");},n.openDelay);},50),X!=null&&g.after(X),N.handlePush(t,{guid:e,$anim:g,$pops:x,$mask:X,$shadowContainer:r,$shadowRoot:o}),N.handleResultConfig($)}},es=()=>({$parent:document.body||document.documentElement,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:true,class:"",only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:false,isAbsolute:false,style:null,addIndexCSS:true}),Gt={init(a){const e=U.getRandomGUID(),t="loading";let n=es();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const r=N.handleZIndex(n.zIndex),o=Z.createMask(e,r),{contentPStyle:i}=Z.createContentStyle("loading",n),s=Z.createAnim(e,t,n,`
            <div class="pops-content pops-${t}-content">${n.addIndexCSS?`
                <style data-model-name="index">${j.index}</style>
                <style data-model-name="anim">${j.anim}</style>
                <style data-model-name="common">${j.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${j.loadingCSS}
                </style>
            ${n.style!=null?`<style>${n.style}</style>`:""}
            	<p pops class="pops-${t}-content-text" style="${i}">${n.content.text}</p>
            </div>`,"",r),l=Z.parseElement(s),{$pops:c}=N.handleQueryElement(l,t);let d;const p=[l];n.mask.enable&&(d=N.handleMask({type:t,guid:e,config:n,animElement:l,maskHTML:o}).maskElement,p.push(d));const f=N.handleLoadingEventConfig(n,e,t,l,c,d);return u.append(n.$parent,p),d!=null&&l.after(d),N.handlePush(t,{guid:e,$anim:l,$pops:c,$mask:d}),n.isAbsolute&&(u.css(l,"position","absolute !important"),d&&u.css(d,"position","absolute !important")),N.handleResultConfig(f)}},ts=()=>({title:{text:"pops.Folder",position:"center",html:false,style:""},sort:{name:"latestTime",isDesc:false,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"测试文件夹2222",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:false,index:1,clickEvent(a,e){return console.log("下载文件：",e),{autoDownload:true,url:"https://update.greasyfork.org/scripts/456485/pops.js",mode:"aBlank"}}}]}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),{autoDownload:true,url:"https://update.greasyfork.org/scripts/456485/pops.js",mode:"openBlank"}}}],btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"500px",height:window.innerHeight<450?"70vh":"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),de={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="},ns={init(a){const e=U.getRandomGUID(),t="folder";let n=ts();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"button",css:j.button},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"folderCSS",css:j.folderCSS}]),Reflect.set(de,"docx",de.doc),Reflect.set(de,"rtf",de.doc),Reflect.set(de,"xlsx",de.xls),Reflect.set(de,"pptx",de.ppt),Reflect.set(de,"dmg",de.ipa),Reflect.set(de,"json",de.js);const i=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],s=["jpg","jpeg","ico","webp"],l=["htm","py","vue","bat","sh","vbs","java","kt"],c=["apk","apkm","xapk"];i.forEach(Q=>{de[Q]=de.zip;}),s.forEach(Q=>{de[Q]=de.png;}),l.forEach(Q=>{de[Q]=de.html;}),c.forEach(Q=>{de[Q]=de.apk;}),n?.folder&&Reflect.set(n,"folder",n.folder);const d=N.handleZIndex(n.zIndex),p=Z.createMask(e,d),f=Z.createHeader(t,n),b=Z.createBottom(t,n),{headerStyle:h,headerPStyle:g}=Z.createHeaderStyle(t,n),w=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${h}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${g}">${n.title.text}</p>`}${f}</div>
			<div class="pops-content pops-${t}-content ${U.isPhone()?"pops-mobile-folder-content":""}">
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
							${U.isPhone()?'<col width="100%">':`
								<col width="52%">
								<col width="24%">
								<col width="16%">`}
							</colgroup>
							<tbody></tbody>
						</table>
                    </div>
                </div>
            </div>${b}`,b,d),A=Z.parseElement(w),{$pops:v,$title:S,$content:T,$folderTbody:x,$folderHeaderBreadcrumbPrimary:E,$headerBtnClose:B,$btnOk:z,$btnCancel:F,$btnOther:X,$folderSortFileName:K,$folderSortLatestTime:$,$folderSortFileSize:M}=N.handleQueryElement(A,t);let C;const y=[A];n.mask.enable&&(C=N.handleMask({type:t,guid:e,config:n,animElement:A,maskHTML:p}).maskElement,y.push(C));const k=N.handleEventConfig(n,e,r,o,t,A,v,C);N.handleClickEvent("close",B,k,n.btn.close.callback),N.handleClickEvent("ok",z,k,n.btn.ok.callback),N.handleClickEvent("cancel",F,k,n.btn.cancel.callback),N.handleClickEvent("other",X,k,n.btn.other.callback),u.append(o,y),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r),C!=null&&A.after(C);class P{init(){n.folder.sort(),this.initFolderView(n.folder);const H=E.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");Reflect.set(H,"data-config",n.folder),u.on(H,"click",R=>{this.setBreadcrumbClickEvent(R,true,n.folder);}),u.on(K.closest("th"),"click",R=>{this.arrowToSortFolderInfoView(K,R,"fileName");},{capture:true}),u.on($.closest("th"),"click",R=>{this.arrowToSortFolderInfoView($,R,"latestTime");},{capture:true}),u.on(M.closest("th"),"click",R=>{this.arrowToSortFolderInfoView(M,R,"fileSize");},{capture:true}),n.sort.name==="fileName"?u.emit(K,"click",{notChangeSortRule:true}):n.sort.name==="latestTime"?u.emit($,"click",{notChangeSortRule:true}):n.sort.name==="fileSize"&&u.emit(M,"click",{notChangeSortRule:true});}createFolderRowElement(H,R="-",q="-",ne=false){const J=H,ae=R,ge=q,xe=u.createElement("tr"),he=u.createElement("td"),ue=u.createElement("td"),Me=u.createElement("td");let et="",Be=de.folder;if(ne)R="",q="";else {Be="",typeof R=="number"&&(R=U.formatTime(R)),typeof q=="number"&&(q=U.formatByteToSize(q));for(const Nt in de)if(H.toLowerCase().endsWith("."+Nt)){et=Nt,Be=Reflect.get(de,Nt);break}Be||(et="Null",Be=de.Null);}xe.className="pops-folder-list-table__body-row",he.className="pops-folder-list-table__body-td",ue.className="pops-folder-list-table__body-td",Me.className="pops-folder-list-table__body-td",ee.setSafeHTML(he,`
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${Be}" alt="${et}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${H}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${H}
						</a>
					</div>
				</div>
            `),ee.setSafeHTML(ue,`
				<div class="pops-folder-list__time">
					<span>${R}</span>
				</div>
				`),ee.setSafeHTML(Me,`
				<div class="pops-folder-list-format-size">
					<span>${q}</span>
				</div>
				`);const gt={fileName:J,latestTime:ae,fileSize:ge,isFolder:ne};return Reflect.set(he,"__value__",gt),Reflect.set(ue,"__value__",gt),Reflect.set(Me,"__value__",gt),Reflect.set(xe,"__value__",gt),xe.appendChild(he),xe.appendChild(ue),xe.appendChild(Me),{folderElement:xe,fileNameElement:he,fileTimeElement:ue,fileFormatSize:Me}}createFolderRowElementByMobile(H,R="-",q="-",ne=false){const J=H,ae=R,ge=q,xe=u.createElement("tr"),he=u.createElement("td");let ue="",Me=de.folder;if(ne)R="",q="";else {Me="",typeof R=="number"&&(R=U.formatTime(R)),typeof q=="number"&&(q=U.formatByteToSize(q));for(const Be in de)if(H.toLowerCase().endsWith("."+Be)){ue=Be,Me=Reflect.get(de,Be);break}Me||(ue="Null",Me=de.Null);}xe.className="pops-folder-list-table__body-row",he.className="pops-folder-list-table__body-td",ee.setSafeHTML(he,`
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${Me}" alt="${ue}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${H}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${H}</a>
						<span>${R} ${q}</span>
					</div>
				</div>
			`);const et={fileName:J,latestTime:ae,fileSize:ge,isFolder:ne};return Reflect.set(he,"__value__",et),Reflect.set(xe,"__value__",et),xe.appendChild(he),{folderElement:xe,fileNameElement:he}}clearFolderInfoView(){ee.setSafeHTML(x,"");}createHeaderArrowIcon(){return u.createElement("div",{className:"iconArrow"})}createBreadcrumb(H,R){return u.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${H}</a>`,"data-config":R},{title:H})}setBreadcrumbClickEvent(H,R,q){this.clearFolderInfoView();const J=H.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(J)for(;J.nextElementSibling;)J.nextElementSibling.remove();else console.error("获取导航按钮失败");const ae=Gt.init({$parent:T,content:{text:"获取文件列表中..."},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},addIndexCSS:false});this.initFolderView(q),ae.close();}async enterFolder(H,R){this.clearFolderInfoView();const q=Gt.init({$parent:T,content:{text:"获取文件列表中..."},mask:{enable:true},addIndexCSS:false});if(typeof R.clickEvent=="function"){const ne=await R.clickEvent(H,R);E.appendChild(this.createHeaderArrowIcon());const J=this.createBreadcrumb(R.fileName,ne);E.appendChild(J),u.on(J,"click",ae=>{this.setBreadcrumbClickEvent(ae,false,ne);}),this.initFolderView(ne);}q.close();}async downloadFile(H,R,q){u.preventEvent(H);const ne=R.querySelector("a");if(typeof q.clickEvent=="function"){const J=await q.clickEvent(H,q);if(J!=null&&typeof J=="object"&&!Array.isArray(J)&&typeof J.url=="string"&&J.url.trim()!==""&&(ne.setAttribute("href",J.url),ne.setAttribute("target","_blank"),J.autoDownload))if((J.mode==null||String(J.mode)==="")&&(J.mode="aBlank"),J.mode==="a"||J.mode==="aBlank"){const ae=u.createElement("a");J.mode==="aBlank"&&ae.setAttribute("target","_blank"),ae.href=J.url,ae.click();}else if(J.mode==="open"||J.mode==="openBlank")J.mode==="openBlank"?globalThis.open(J.url,"_blank"):globalThis.open(J.url);else if(J.mode==="iframe"){const ae=u.createElement("iframe");ae.src=J.url,ae.onload=function(){U.setTimeout(()=>{ae.remove();},1e3);},o.appendChild(ae),U.setTimeout(()=>{ae.remove();},180*1e3);}else console.error("未知的下载模式",J);}}sortFolderConfig(H,R="fileName",q=false){if(R==="fileName"){const ne=H.filter(ae=>ae.isFolder),J=H.filter(ae=>!ae.isFolder);return ne.sort((ae,ge)=>{const xe=ae[R].toString(),he=ge[R].toString();let ue=xe.localeCompare(he);return q&&(ue>0?ue=-1:ue<0&&(ue=1)),ue}),J.sort((ae,ge)=>{const xe=ae[R].toString(),he=ge[R].toString();let ue=xe.localeCompare(he);return q&&(ue>0?ue=-1:ue<0&&(ue=1)),ue}),q?[...J,...ne]:[...ne,...J]}else return H.sort((ne,J)=>{let ae=ne[R],ge=J[R];return R==="fileSize"?(ae=parseFloat(ae.toString()),ge=parseFloat(ge.toString())):R==="latestTime"&&(ae=new Date(ae).getTime(),ge=new Date(ge).getTime()),ae>ge?q?-1:1:ae<ge?q?1:-1:0}),H}initFolderView(H){this.sortFolderConfig(H,n.sort.name,n.sort.isDesc),H.forEach(R=>{if(R.isFolder){const{folderElement:q,fileNameElement:ne}=U.isPhone()?this.createFolderRowElementByMobile(R.fileName,"","",true):this.createFolderRowElement(R.fileName,"","",true);u.on(ne,"click",J=>{this.enterFolder(J,R);}),x.appendChild(q);}else {const{folderElement:q,fileNameElement:ne}=U.isPhone()?this.createFolderRowElementByMobile(R.fileName,R.latestTime,R.fileSize,false):this.createFolderRowElement(R.fileName,R.latestTime,R.fileSize,false);u.on(ne,"click",J=>{this.downloadFile(J,ne,R);}),x.appendChild(q);}});}removeArrowActiveStatus(){[...Array.from(K.querySelectorAll(".pops-folder-icon-active")),...Array.from($.querySelectorAll(".pops-folder-icon-active")),...Array.from(M.querySelectorAll(".pops-folder-icon-active"))].forEach(H=>H.classList.remove("pops-folder-icon-active"));}changeArrowActive(H,R,q){this.removeArrowActiveStatus(),q?R.classList.add("pops-folder-icon-active"):H.classList.add("pops-folder-icon-active");}arrowToSortFolderInfoView(H,R,q){Reflect.get(R,"notChangeSortRule")||(n.sort.name=q,n.sort.isDesc=!n.sort.isDesc);const J=H.querySelector(".pops-folder-icon-arrow-up"),ae=H.querySelector(".pops-folder-icon-arrow-down");if(this.changeArrowActive(J,ae,n.sort.isDesc),typeof n.sort.callback=="function"&&n.sort.callback(H,R,n.sort.name,n.sort.isDesc))return;const ge=[];Array.from(x.children).forEach(he=>{const ue=Reflect.get(he,"__value__");Reflect.set(ue,"target",he),ge.push(ue);}),this.sortFolderConfig(ge,n.sort.name,n.sort.isDesc).forEach(he=>{x.appendChild(he.target);});}}const _=new P;return _.init(),Reflect.set(v,"data-pops-folder",_),n.drag&&be.drag(v,{dragElement:S,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),N.handlePush(t,{guid:e,$anim:A,$pops:v,$mask:C,$shadowContainer:r,$shadowRoot:o}),N.handleResultConfig(k)}},rs=()=>({title:{position:"center",text:"",html:false,style:""},loading:{enable:true,icon:true,text:""},useShadowRoot:true,class:"",url:window.location.href,only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:true,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",topRightButton:"min|max|mise|close",sandbox:false,forbiddenScroll:false,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}}),os={init(a){const e=U.getRandomGUID(),t="iframe";let n=rs();if(n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n.url==null)throw new TypeError("config.url must not be null.");n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"iframeCSS",css:j.iframeCSS}]);const i=n.animation!=null&&n.animation!=""?"position:absolute;":"",s=N.handleZIndex(n.zIndex),l=Z.createMask(e,s,i),c=Z.createHeader(t,n),d='<div class="pops-loading"></div>',p=n.title.text.trim()!==""?n.title.text:n.url,{headerStyle:f,headerPStyle:b}=Z.createHeaderStyle(t,n),h=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?p:`<p pops class="pops-${t}-title-text" style="${b}">${p}</p>`}${c}</div>
			<div class="pops-content pops-${t}-content">
                <div class="pops-${t}-content-global-loading"></div>
                <iframe src="${n.url}" pops ${n.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
			</div>${n.loading.enable?d:""}`,"",s),g=Z.parseElement(h),{$pops:w,$headerBtnClose:A,$headerControls:v,$title:S,$iframe:T,$loading:x,$contentLoading:E,$headerBtnMin:B,$headerBtnMax:z,$headerBtnMise:F}=N.handleQueryElement(g,t);let X=Y.document.querySelector(".pops-iframe-container");X||(X=u.createElement("div",{className:"pops-iframe-container"}),X.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;",u.appendBody(X));let K;const $=[g];n.mask.enable&&(K=N.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:l}).maskElement,$.push(K));const M=N.handleEventConfig(n,e,r,o,t,g,w,K);M.$iframe=T,u.on(g,u.getAnimationEndNameList(),function(){g.style.width="0%",g.style.height="0%";}),u.on(T,"load",()=>{x?.remove(),E.style.animation="iframeLoadingChange_85 0.3s forwards",u.on(E,u.getAnimationEndNameList(),()=>{E.remove();}),n.title.text.trim()===""&&T.contentDocument&&(S.querySelector("p").innerText=T.contentDocument.title),n.loadEndCallBack(M);}),u.append(o,$),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),X.appendChild(r),K!=null&&g.after(K),n.drag&&be.drag(w,{dragElement:S,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack});const C="type-module";let y="",k="",P=false;return u.on(B,"click",O=>{O.preventDefault(),O.stopPropagation(),y=w.style.left,k=w.style.top,w.classList.add("pops-iframe-unset-top"),w.classList.add("pops-iframe-unset-left"),w.classList.add("pops-iframe-unset-transform"),w.style.transitionDuration="",w.setAttribute(C,"min"),v.setAttribute("type","min"),z.style.setProperty("display","none"),F.style.setProperty("display",""),typeof n?.btn?.min?.callback=="function"&&n.btn.min.callback(M,O);},{capture:true}),u.on(z,"click",O=>{O.preventDefault(),O.stopPropagation(),w.getAttribute(C)!=="min"&&(y=w.style.left,k=w.style.top),P=true,w.style.transitionDuration="",w.style.transform="",w.removeAttribute(C),w.classList.add("pops-iframe-unset-transition"),w.classList.add("pops-iframe-unset-left"),w.classList.add("pops-iframe-unset-top"),w.classList.add("pops-iframe-unset-transform"),w.classList.remove("pops-iframe-unset-transition"),w.setAttribute(C,"max"),v.setAttribute("type","max"),z.style.setProperty("display","none"),F.style.setProperty("display",""),typeof n?.btn?.max?.callback=="function"&&n.btn.max.callback(M,O);},{capture:true}),F?.style?.setProperty("display","none"),u.on(F,"click",O=>{O.preventDefault(),O.stopPropagation(),P&&w.getAttribute(C)==="min"?(w.classList.add("pops-iframe-unset-transition"),w.classList.add("pops-iframe-unset-left"),w.classList.add("pops-iframe-unset-top"),w.classList.add("pops-iframe-unset-transform"),w.classList.remove("pops-iframe-unset-transition"),w.setAttribute(C,"max"),v.setAttribute("type","max")):(P=false,w.style.left=y,w.style.top=k,w.style.transitionDuration="",w.style.transform="",v.removeAttribute("type"),w.removeAttribute(C),w.classList.remove("pops-iframe-unset-top"),w.classList.remove("pops-iframe-unset-left"),w.classList.remove("pops-iframe-unset-transform"),z.style.setProperty("display",""),F.style.setProperty("display","none")),typeof n?.btn?.mise?.callback=="function"&&n.btn.mise.callback(M,O);},{capture:true}),u.on(A,"click",O=>{O.preventDefault(),O.stopPropagation(),be.removeInstance([me.iframe],e,false),typeof n?.btn?.close?.callback=="function"&&n.btn.close.callback(M,O);},{capture:true}),N.handlePush(t,{guid:e,$anim:g,$pops:w,$mask:K,$shadowContainer:r,$shadowRoot:o}),N.handleResultConfig(M)}},as=()=>({title:{text:"默认标题",position:"center",html:false,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:true,attributes:{"data-test":"test","data-test-2":"test2"},views:[{className:"forms-1",text:"区域设置",type:"container",views:[{className:"panel-switch",text:"switch",type:"switch",disabled:false,description:"",getValue(){return  true},callback(a,e){console.log("按钮开启状态：",e);}},{className:"panel-slider",text:"slider",type:"slider",description:"",disabled:false,getToolTipContent(a){return String(a)},isShowHoverTip:true,step:1,getValue(){return 50},callback(a,e){console.log("滑块当前数值：",e);},min:1,max:100},{className:"panel-button",text:"button",type:"button",description:"",disable:false,buttonIsRightIcon:false,buttonIcon:"view",buttonIconIsLoading:true,buttonType:"default",buttonText:"default按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(a){console.log("点击按钮",a);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:false,attributes:{"data-value":"value","data-value-2":"value2"},views:[{className:"panel-input",text:"input",type:"input",getValue(){return "50"},callback(a,e){u.preventEvent(a),console.log("输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-input-number",text:"input-number",type:"input",inputType:"number",getValue(){return "50"},callback(a,e,t){if(u.preventEvent(a),console.log("输入框内容改变：",t),t>60)return {valid:false,message:"输入值不能大于60，当前："+e}},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",inputType:"password",placeholder:"请输入密码",getValue(){return "123456"},callback(a,e){u.preventEvent(a),console.log("密码输入框内容改变：",e);}},{className:"panel-input-file",text:"input-file",type:"input",inputType:"file",getValue(){return ""},callback(a,e){u.preventEvent(a),console.log("内容改变：",e);},placeholder:"请输入密码"},{className:"panel-input-date",text:"input-date",type:"input",inputType:"date",placeholder:"请输入内容",getValue(){const a=new Date;let e=a.getHours().toString(),t=a.getMinutes().toString();return e.length===1&&(e=`0${e}`),t.length===1&&(t=`0${t}`),`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`},callback(a,e,t,n){u.preventEvent(a),console.log("输入框内容改变：",e,t,n);}},{className:"panel-input-datetime-local",text:"input-datetime-local",type:"input",inputType:"datetime-local",getValue(){const a=new Date;let e=a.getHours().toString(),t=a.getMinutes().toString();return e.length===1&&(e=`0${e}`),t.length===1&&(t=`0${t}`),`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}T${e}:${t}`},callback(a,e,t,n){u.preventEvent(a),console.log("输入框内容改变：",e,t,n);},placeholder:"请输入内容"},{className:"panel-input-time",text:"input-time",type:"input",inputType:"time",getValue(){return "11:30"},callback(a,e,t,n){u.preventEvent(a),console.log("输入框内容改变：",e,t,n);},placeholder:"请输入内容"},{className:"panel-input-month",text:"input-month",type:"input",inputType:"month",getValue(){const a=new Date;return `${a.getFullYear()}-${a.getMonth()+1}`},callback(a,e,t,n){u.preventEvent(a),console.log("输入框内容改变：",e,t,n);},placeholder:"请输入内容"},{className:"panel-input-week",text:"input-week",type:"input",inputType:"week",getValue(){return `${new Date().getFullYear()}-W01`},callback(a,e,t,n){u.preventEvent(a),console.log("输入框内容改变：",e,t,n);},placeholder:"请输入内容"},{className:"panel-input-search",text:"input-search",type:"input",inputType:"search",getValue(){return "search test"},callback(a,e){u.preventEvent(a),console.log("输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-input-color",text:"input-color",type:"input",inputType:"color",getValue(){return "#ff0000"},callback(a,e){u.preventEvent(a),console.log("输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-input-email",text:"input-email",type:"input",inputType:"email",getValue(){return "test@gmail.com"},callback(a,e){u.preventEvent(a);const t=a.target;console.log("输入框内容改变：",e,t.validity);},placeholder:"请输入内容"},{className:"panel-input-tel",text:"input-tel",type:"input",inputType:"tel",getValue(){return "11111111111"},callback(a,e){u.preventEvent(a);const t=a.target;console.log("输入框内容改变：",e,t.validity);},placeholder:"请输入内容"},{className:"panel-input-url",text:"input-url",type:"input",inputType:"url",getValue(){return "https://github.com/"},callback(a,e){u.preventEvent(a);const t=a.target;console.log("输入框内容改变：",e,t.validity);},placeholder:"请输入内容"},{className:"panel-textarea",text:"textarea",type:"textarea",getValue(){return "50"},callback(a,e){u.preventEvent(a),console.log("textarea输入框内容改变：",e);},placeholder:"请输入内容"},{type:"container",text:"",views:[{className:"panel-select-disabled",text:"select-disabled",type:"select",disabled:true,getValue(){return "text"},callback(a){a!=null&&console.log(`select当前选项：${a.value}，当前选项文本：${a.text}`);},data:[{value:"all",text:"所有",disable(){return  false}},{value:"text",text:"文本",disable(){return  false}},{value:"html",text:"超文本",disable(){return  false}}]},{className:"panel-select-multiple-disabled",type:"select-multiple",text:"select-multiple-disabled",disabled:true,placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(a){console.log("select值改变，多选信息",a);},clickCallBack(a,e){console.log("点击",a,e);},closeIconClickCallBack(a,e){console.log("点击关闭图标的事件",e);},data:[{value:"select-1",text:"单选1",isHTML:false},{value:"select-2",text:"单选2",isHTML:false},{value:"select-3",text:"单选3",isHTML:false},{value:"select-4",text:"单选4",isHTML:false}]},{className:"panel-select-native",text:"select-native",type:"select",mode:"native",getValue(){return "all"},callback(a){a!=null&&console.log(`select当前选项：${a.value}，当前选项文本：${a.text}`);},data:[{value:"all",text:"所有",disable(){return  false}},{value:"text",text:"文本",disable(){return  false}},{value:"html",text:"超文本",disable(){return  false}}]},{className:"panel-select-dialog",text:"select-dialog",type:"select",mode:"dialog",getValue(){return window.localStorage.getItem("select-dialog-customInput")||""},callback(a){if(a==null){console.warn("select当前选项为空");return}a.addCustomInput?a.value===""?a.customInputStoreKey&&(console.log("select删除自定义输入的值"),window.localStorage.removeItem(a.customInputStoreKey)):(console.log(`select当前自定义输入框内容：${a.value}，当前选项显示文本：${a.text}`),a.customInputStoreKey&&window.localStorage.setItem(a.customInputStoreKey,a.value)):console.log(`select当前选项：${a.value}，当前选项显示文本：${a.text}`);},data:[{value:"all",text:"所有",disable(){return  false}},{value:"text",text:"文本",disable(a,e){return e?.value==="all"}},{value:"html",text:"超文本",disable(a,e){return e?.value==="all"}},{value:"own",text:"自定义",disable(a,e){return e?.value==="all"}},{value:window.localStorage.getItem("select-dialog-customInput")||"",text:window.localStorage.getItem("select-dialog-customInput")||"",addCustomInput:true,customInputStoreKey:"select-dialog-customInput",onValid(a){return a.value==="123"?(console.error("非规范值"),{valid:false,message:"非规范值"}):{valid:true}}}]},{className:"panel-select-horizontal",text:"select-horizontal",type:"select",mode:"horizontal",getValue(){return "text"},callback(a){a!=null&&console.log(`select当前选项：${a.value}，当前选项文本：${a.text}`);},data:[{value:"all",text:"所有",disable(){return  false}},{value:"text",text:"文本",disable(){return  false}},{value:"html",text:"超文本",disable(){return  false}},{value:"own",text:"自定义",disable(){return  true}}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(a){console.log("select值改变，多选信息",a);},clickCallBack(a,e){console.log("点击",a,e);},closeIconClickCallBack(a,e){console.log("点击关闭图标的事件",e);},data:[{value:"select-1",text:"单选1",isHTML:false,disable(a,e){return e.findIndex(t=>["select-5"].includes(t.value))!==-1}},{value:"select-2",text:"单选2",isHTML:false,disable(a,e){return e.findIndex(t=>["select-5"].includes(t.value))!==-1}},{value:"select-3",text:"单选3",isHTML:false,disable(a,e){return e.findIndex(t=>["select-2","select-5"].includes(t.value))!==-1}},{value:"select-4",text:"单选4",isHTML:false,disable(a,e){return e.findIndex(t=>["select-3","select-5"].includes(t.value))!==-1}},{value:"select-5",text(a,e){return e.findIndex(t=>["select-4"].includes(t.value))!==-1?"单选5-禁用":"单选5"},isHTML:false,disable(a,e){return e.findIndex(t=>["select-4"].includes(t.value))!==-1}}]}]},{type:"container",text:"deep菜单",views:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(a,e){console.log(a,e);},clickCallBack(a,e){console.log("进入子配置",a,e);},views:[{className:"forms-1",text:"区域设置",type:"container",views:[{className:"panel-switch",text:"switch",type:"switch",getValue(){return  true},callback(a,e){console.log("按钮开启状态：",e);}},{className:"panel-slider",text:"slider",type:"slider",getValue(){return 50},callback(a,e){console.log("滑块当前数值：",e);},min:1,max:100},{className:"panel-button",text:"button",type:"button",buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(a){console.log("点击按钮",a);}},{className:"panel-button",text:"button",type:"button",buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(a){console.log("点击按钮",a);}}]}]},{type:"deepMenu",className:"panel-deepMenu2",text:"deepMenu2",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(a,e){console.log(a,e);},clickCallBack(a,e){console.log("进入子配置",a,e);},views:[]}]},{type:"container",isFold:true,text:"折叠菜单",afterAddToUListCallBack(a,e){console.log(a,e);},views:[{className:"panel-switch",text:"switch",type:"switch",getValue(){return  true},callback(a,e){console.log("按钮开启状态：",e);}}]}]},{id:"whitesev-panel-bottom-config-1",title:`
					<a rel="nofollow" href="https://www.npmjs.com/package/@whitesev/pops" target="_blank"><img src="https://img.shields.io/npm/v/@whitesev/pops?label=pops" alt="npm pops version"></a>
				`,isBottom:true,disableAsideItemHoverCSS:true,attributes:{"data-value":"value","data-value-2":"value2"},views:[],clickFirstCallback:function(){return  false}},{id:"whitesev-panel-bottom-config-2",title:"版本：xxx.xx.xx",isBottom:true,attributes:{"data-value":"value","data-value-2":"value2"},views:[],clickFirstCallback:function(){return  false}}],bottomContentConfig:[],btn:{close:{enable:true,callback(a){a.close();}}},mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:false,only:false,width:window.innerWidth<550?"88vw":"700px",height:window.innerHeight<450?"70vh":"500px",position:"center",animation:"pops-anim-fadein-zoom",useDeepMenuSwtichAnimation:true,zIndex:1e4,drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),wt={isFloat(a){return Number(a)===a&&a%1!==0},add(a,e){let t,n;try{t=a.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}const r=Math.pow(10,Math.max(t,n));return Math.round(a*r+e*r)/r},sub(a,e){let t,n;try{t=a.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}const r=Math.pow(10,Math.max(t,n)),o=t>=n?t:n;return (Math.round(a*r-e*r)/r).toFixed(o)},division(a,e){let t,n;try{t=a.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}const r=Number(a.toString().replace(".","")),o=Number(e.toString().replace(".",""));return r/o*Math.pow(10,n-t)}},ss=()=>({useShadowRoot:true,$target:null,content:"默认文字",isDiffContent:false,position:"top",className:"",isFixed:false,alwaysShow:false,onShowEventName:"mouseenter touchstart",onCloseEventName:"mouseleave touchend",zIndex:1e4,only:false,eventOption:{once:false,passive:false,capture:true},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:true,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class is{$el={$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null};$data={config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]};constructor(e,t,n){this.$data.config=e,this.$data.guid=t,this.$el.$shadowContainer=n.$shadowContainer,this.$el.$shadowRoot=n.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){const e=this.createToolTip();this.$el.$toolTip=e.$toolTipContainer,this.$el.$content=e.$toolTipContent,this.$el.$arrow=e.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){const e=u.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),t=e.querySelector(".pops-tip-content"),n=e.querySelector(".pops-tip-arrow");if(u.addClassName(e,this.$data.config.className),e.style.zIndex=N.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){const r=u.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});e.appendChild(r);}return this.$data.config.showArrow||n.remove(),{$toolTipContainer:e,$toolTipArrow:n,$toolTipContent:t}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(e){if(e==null&&(e=this.getContent()),this.$data.config.isDiffContent){const t="data-content",n=Reflect.get(this.$el.$content,t);if(typeof n=="string"&&n===e)return;Reflect.set(this.$el.$content,t,e);}ee.setSafeHTML(this.$el.$content,e);}getZIndex(){return N.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const e=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",e.toString());}calcToolTipPosition(e,t,n,r){const o=u.offset(e,!this.$data.config.isFixed),i=o.width,s=o.height,l=o.top,c=o.left,d=u.outerWidth(this.$el.$toolTip),p=u.outerHeight(this.$el.$toolTip),f=c+i/2-d/2,b=l+s/2-p/2;let h=0,g=0;if(r!=null)if(r instanceof MouseEvent||r instanceof PointerEvent)h=r.pageX,g=r.y;else if(r instanceof TouchEvent){const w=r.touches[0];h=w.pageX,g=w.pageY;}else typeof r.clientX=="number"&&(h=r.clientX),typeof r.clientY=="number"&&(g=r.clientY);return {TOP:{left:f-n,top:l-p-t,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:c+i+t,top:b+n,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:f-n,top:l+s+t,arrow:"top",motion:"fadeInBottom"},LEFT:{left:c-d-t,top:b+n,arrow:"right",motion:"fadeInLeft"},FOLLOW:{left:h+n,top:g+n,arrow:"follow",motion:""}}}changePosition(e){const t=this.calcToolTipPosition(this.$data.config.$target,this.$data.config.arrowDistance,this.$data.config.otherDistance,e),n=this.$data.config.position.toUpperCase(),r=t[n];r?(this.$el.$toolTip.style.left=r.left+"px",this.$el.$toolTip.style.top=r.top+"px",this.$el.$toolTip.setAttribute("data-motion",r.motion),this.$el.$arrow.setAttribute("data-position",r.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(e,t){e==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(t):this.$data.timeId_close_TouchEvent.push(t);}clearCloseTimeoutId(e,t){const n=e==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let r=0;r<n.length;r++){const o=n[r];if(typeof t=="number"){if(t==o){U.clearTimeout(t),n.splice(r,1);break}}else U.clearTimeout(o),n.splice(r,1),r--;}}show(...e){const t=e[0],n=t instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(n),typeof this.$data.config.showBeforeCallBack=="function"){const r=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof r=="boolean"&&!r)return}U.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),u.append(this.$el.$shadowRoot,this.$el.$toolTip)),U.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),u.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(t),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){u.on(this.$data.config.$target,this.$data.config.onShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){u.off(this.$data.config.$target,this.$data.config.onShowEventName,this.show,{capture:true});}close(...e){const t=e[0],n=t instanceof MouseEvent?"MouseEvent":"TouchEvent";if(t&&t instanceof MouseEvent){const o=t.composedPath()[0];if(o!=this.$data.config.$target&&o!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){const o=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof o=="boolean"&&!o)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);const r=U.setTimeout(()=>{if(this.clearCloseTimeoutId(n,r),this.$el.$toolTip==null)return;const o=this.$el.$toolTip.getAttribute("data-motion");o==null||o.trim()===""?this.toolTipAnimationFinishEvent():this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(n,r),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){u.on(this.$data.config.$target,this.$data.config.onCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){u.off(this.$data.config.$target,this.$data.config.onCloseEventName,this.close,{capture:true});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){u.on(this.$el.$toolTip,u.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){u.off(this.$el.$toolTip,u.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),u.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){u.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(e){this.close(e);}onToolTipMouseLeaveEvent(){u.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){u.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}const br={init(a){const e=U.getRandomGUID(),t="tooltip";let n=ss();if(n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),!(n.$target instanceof HTMLElement))throw new TypeError("config.target 必须是HTMLElement类型");n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"tooltipCSS",css:j.tooltipCSS}]);const i=new is(n,e,{$shadowContainer:r,$shadowRoot:o});return n.alwaysShow&&i.show(),{guid:e,config:n,$shadowContainer:r,$shadowRoot:o,toolTip:i}}},hr=()=>({asideULElement:null,asideBottomULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$pops:null,$content:null,$panelRightSectionWrapper:null,$panelLeftAside:null,$panelContentSectionContainer:null,$panelBottomWrapper:null,$panelBottomContainer:null,$panelBottomLeftContainer:null,$panelBottomRightContainer:null},$data:{nodeStoreConfigKey:"data-view-config"},$config:{},init(a){const e="panel";this.$el={...a.$el},this.$config=a.config,this.asideULElement=this.$el.$panelLeftAside.querySelector(`ul.pops-${e}-aside-top-container`),this.asideBottomULElement=this.$el.$panelLeftAside.querySelector(`ul.pops-${e}-aside-bottom-container`),this.sectionContainerHeaderULElement=this.$el.$panelContentSectionContainer.querySelector(`ul.pops-${e}-container-header-ul`),this.sectionContainerULElement=this.$el.$panelContentSectionContainer.querySelector(`ul.pops-${e}-container-main-ul`);let t=null,n=false;a.config.content.forEach(r=>{const o=this.createAsideItem(r);if(this.onAsideItemClick(o,r),(typeof r.isBottom=="function"?r.isBottom():r.isBottom)?this.asideBottomULElement.appendChild(o):this.asideULElement.appendChild(o),t==null){let s=false;typeof r.isDefault=="function"?s=!!r.isDefault():s=!!r.isDefault,s&&(t=o,n=!!r.scrollToDefaultView);}typeof r.afterRender=="function"&&r.afterRender({asideConfig:r,$asideLiElement:o});}),(a.config?.bottomContentConfig||[]).forEach(r=>{const o=this.createBottomItem(r);if(this.onBottomItemClick(o,r),r.position==="left"||r.position==null)this.$el.$panelBottomLeftContainer.appendChild(o);else if(r.position==="right")this.$el.$panelBottomRightContainer.appendChild(o);else throw new Error("pops.panel：bottomContentConfig.position参数错误");typeof r.afterRender=="function"&&r.afterRender({$bottomWrapper:this.$el.$panelBottomWrapper,$bottomContainer:this.$el.$panelBottomContainer,$bottomLeftContainer:this.$el.$panelBottomLeftContainer,$bottomRightContainer:this.$el.$panelBottomRightContainer});}),t==null&&this.asideULElement.children.length&&(t=this.asideULElement.children[0]),t?(t.click(),n&&t?.scrollIntoView()):console.error("pops.panel：左侧容器没有项");},clearContainer(){Reflect.deleteProperty(this.$el.$panelContentSectionContainer,this.$data.nodeStoreConfigKey),ee.setSafeHTML(this.sectionContainerHeaderULElement,""),ee.setSafeHTML(this.sectionContainerULElement,""),this.clearDeepMenuContainer();},clearDeepMenuContainer(){this.$el.$panelRightSectionWrapper?.querySelectorAll("section.pops-panel-deepMenu-container").forEach(a=>a.remove());},clearAsideItemIsVisited(){this.$el.$panelLeftAside.querySelectorAll(".pops-is-visited").forEach(a=>{u.removeClassName(a,"pops-is-visited");});},setAsideItemIsVisited(a){u.addClassName(a,"pops-is-visited");},setElementAttributes(a,e){e!=null&&(Array.isArray(e)?e.forEach(t=>{this.setElementAttributes(a,t);}):Object.keys(e).forEach(t=>{a.setAttribute(t,e[t]);}));},setElementProps(a,e){if(e==null||typeof e!="object")return;Object.keys(e).forEach(n=>{const r=e[n];if(n==="innerHTML"){ee.setSafeHTML(a,r);return}Reflect.set(a,n,r);});},setElementClassName(a,e){u.addClassName(a,e);},createBottomItem(a){const e=typeof a.text=="function"?a.text():a.text,t=Array.isArray(a.className)?a.className.join(" "):a.className||"",n=u.createElement("li",{className:["pops-panel-bottom-item","pops-user-select-none",t].join(" "),innerHTML:e});this.setElementAttributes(n,a.attributes),this.setElementProps(n,a.props);const r="pops-panel-disable-bottom-item-hover-css";return (typeof a.disableHoverCSS=="function"?a.disableHoverCSS():a.disableHoverCSS)?n.classList.add(r):n.classList.remove(r),n},onBottomItemClick(a,e){u.on(a,"click",async t=>{if(typeof e.clickCallback=="function"){const n=await e.clickCallback(t);if(typeof n=="boolean"&&!n)return}});},createAsideItem(a){const e=typeof a.title=="function"?a.title():a.title,t=u.createElement("li",{id:a.id,innerHTML:e});Reflect.set(t,"__forms__",a.views),this.setElementClassName(t,"pops-panel-aside-item"),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);const n="pops-panel-disabled-aside-hover-css";return (typeof a.disableAsideItemHoverCSS=="function"?a.disableAsideItemHoverCSS():a.disableAsideItemHoverCSS)?t.classList.add(n):t.classList.remove(n),t},createSectionContainerItem_switch(a){const e=u.createElement("li");Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!a.getValue()},$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),switch:e.querySelector(".pops-panel-switch"),input:e.querySelector(".pops-panel-switch__input"),core:e.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable(),this.onClick();},onClick(){const r=this;u.on(this.$ele.core,"click",function(o){r.$ele.input.disabled||r.$ele.switch.hasAttribute("data-disabled")||(r.$data.value=r.getStatus(),r.setStatus(r.$data.value),typeof a.callback=="function"&&a.callback(o,r.$data.value));});},setStatus(r=false){r=!!r,this.$ele.input.checked=r,r?u.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):u.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let r=false;return u.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(r=true),r},disable(){this.$ele.input.disabled=true,this.$ele.switch.setAttribute("data-disabled","true"),u.addClassName(this.$ele.itemLeftTextContainer,pe.textIsDisabled);},notDisable(){this.$ele.input.disabled=false,this.$ele.switch.removeAttribute("data-disabled"),u.removeClassName(this.$ele.itemLeftTextContainer,pe.textIsDisabled);}};return n.init(),Reflect.set(e,"data-switch",n),{$el:e,handler:n}},createSectionContainerItem_slider(a){const e=u.createElement("li");Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(e,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSlider",value:a.getValue(),min:a.min,max:a.max,step:a.step||1,$data:{isMove:false,isInitDragPosition:false,isCheckingStopDragMove:false,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),slider:e.querySelector(".pops-slider"),runAway:e.querySelector(".pops-slider__runway"),bar:e.querySelector(".pops-slider__bar"),buttonWrapper:e.querySelector(".pops-slider__button-wrapper"),button:e.querySelector(".pops-slider__button")},$interval:{isCheck:false},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.onRunAwayClick(),this.intervalInit(),this.isDisabledDragWithConfig()&&this.disableDrag();},intervalInit(r=200,o=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=true;let i=false;const s=this.$data.totalWidth;let l;const c=setInterval(()=>{i?(this.$interval.isCheck=false,clearTimeout(l),clearInterval(c)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(i=true,this.$data.totalWidth!==s&&(wt.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},r);l=setTimeout(()=>{clearInterval(c);},o);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),Reflect.set(this.$ele.slider,"data-min",this.min),Reflect.set(this.$ele.slider,"data-max",this.max),Reflect.set(this.$ele.slider,"data-value",this.value),Reflect.set(this.$ele.slider,"data-step",this.step);},initTotalWidth(){this.$data.totalWidth=u.width(this.$ele.runAway);},initStepMap(){let r=0;const o=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/o;let i=0;for(let s=this.min;s<=this.max;s+=this.step){const l=this.formatValue(s);let c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,i+=this.$data.stepPx;}},initFloatStepMap(){let r=0;const o=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/o;let i=0;for(let s=this.min;s<=this.max;s=wt.add(s,this.step)){const l=this.formatValue(s);let c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,i+=this.$data.stepPx;}},initSliderPosition(){let r=0;for(const[,o]of this.$data.stepBlockMap.entries())if(o.value==this.value){r=o.percent,this.$data.dragWidth=o.px;break}r=this.formatValue(r*100),this.setSliderPosition(r);},isFloat(r){return Number(r)===r&&r%1!==0},valueChangeCallBack(r,o){typeof a.callback=="function"&&a.callback(r,o);},getDragInfo(r){let o=this.$data.stepBlockMap.get(0);for(const[,i]of this.$data.stepBlockMap.entries())if(i.pxLeft<=r&&r<i.pxRight){o=i;break}return o},getSliderPositonPercent(r){return r/this.$data.totalWidth},formatValue(r){return wt.isFloat(this.step)?r=parseFloat(r.toFixed(2)):r=parseInt(r.toString()),r},setSliderPosition(r){parseInt(r.toString())===1&&(r=1),r>1&&(r=r/100),this.$ele.buttonWrapper.style.left=`${r*100}%`,this.$ele.bar.style.width=`${r*100}%`;},disableDrag(){u.addClassName(this.$ele.runAway,"pops-slider-is-disabled"),u.addClassName(this.$ele.runAway,pe.textIsDisabled);},allowDrag(){u.removeClassName(this.$ele.runAway,"pops-slider-is-disabled"),u.removeClassName(this.$ele.runAway,pe.textIsDisabled);},isDisabledDrag(){return u.containsClassName(this.$ele.runAway,"pops-slider-is-disabled")},isDisabledDragWithConfig(){const r=typeof a.disabled=="function"?a.disabled():a.disabled;return typeof r=="boolean"?r:false},onRunAwayClick(){u.on(this.$ele.runAway,"click",r=>{if(r.target!==this.$ele.runAway&&r.target!==this.$ele.bar)return;const o=parseFloat(r.offsetX.toString());this.dragStartCallBack()&&(this.dragMoveCallBack(r,o,this.value),this.dragEndCallBack(o));},{capture:false});},dragStartCallBack(){return this.isDisabledDragWithConfig()?(this.disableDrag(),false):(this.$data.isMove||(this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=true),true)},dragMoveCallBack(r,o,i){let s=0;if(o<=0)s=0,this.value=this.min;else if(o>=this.$data.totalWidth)s=1,this.value=this.max;else {const l=this.getDragInfo(o);s=l.percent,this.value=this.formatValue(l.value);}this.$data.dragPercent=s,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),i!==this.value&&this.valueChangeCallBack(r,this.value);},dragEndCallBack(r){this.$data.isMove=false,r<=0?this.$data.dragWidth=0:r>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=r,this.closeToolTip();},setPanEvent(){const r=U.AnyTouch();this.$tooltip=new r(this.$ele.button,{preventDefault(){return  false}});let o=0;this.$tooltip.on("at:move",i=>{if(!this.dragStartCallBack())return;const s=this.value,l=this.$ele.runAway.getBoundingClientRect();let c=i.x-(l.left+globalThis.screenX);c<=0?c=0:c>=l.width&&(c=l.width),o=c,this.dragMoveCallBack(i,o,s);}),this.$tooltip.on("at:end",()=>{this.dragEndCallBack(o);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=true;const r=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=false,this.closeToolTip(),clearInterval(r));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=false,clearInterval(r);},2e3);},setToolTipEvent(){function r(){return typeof a.getToolTipContent=="function"?a.getToolTipContent(n.value):n.value.toString()}const o=br.init({$target:this.$ele.button,content:r,zIndex:()=>be.getPopsMaxZIndex().zIndex,isFixed:true,className:"github-tooltip",only:false,eventOption:{capture:true,passive:true},showBeforeCallBack:()=>{if(!(typeof a.isShowHoverTip=="function"?a.isShowHoverTip():typeof a.isShowHoverTip=="boolean"?a.isShowHoverTip:true))return  false;this.intervalInit();},showAfterCallBack:()=>{o.toolTip.changeContent(r());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),false},alwaysShow:false,position:"top",arrowDistance:10});this.$data.tooltip=o;}};return n.init(),Reflect.set(e,"data-slider",n),{$el:e,handler:n}},createSectionContainerItem_input(a){const e=u.createElement("li");Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);const t="text",n=a.inputType||t;let r="";a.description&&(r=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${r}</div>
				<div class="pops-panel-input">
          <div class="pops-panel-input_inner">
					  <input type="${n}" placeholder="${a.placeholder??""}">
          </div>
				</div>
				`);const o={[Symbol.toStringTag]:"PopsPanelInput",$el:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),panelInput:e.querySelector(".pops-panel-input"),panelInputInner:e.querySelector(".pops-panel-input_inner"),input:e.querySelector("input"),suffix:u.createElement("span"),suffixInner:null,icon:null},$data:{value:a.getValue(),isVisible:false},init(){this.initEle(),this.setInputValue(this.$data.value),a.inputType==="password"?(this.setCircleIcon(ie.getIcon("view")),this.onIconClick()):this.$el.input.value!=""&&this.isTextInputType()?(this.setCircleIcon(ie.getIcon("circleClose")),this.onIconClick()):this.hideCircleIconWrapper(),this.onValueChange(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable(),typeof a.handlerCallBack=="function"&&a.handlerCallBack(e,this.$el.input);},initEle(){this.$el.input.parentElement.insertBefore(this.$el.suffix,this.$el.input.nextSibling),u.addClassName(this.$el.suffix,"pops-panel-input__suffix"),ee.setSafeHTML(this.$el.suffix,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$el.suffixInner=this.$el.suffix.querySelector(".pops-panel-input__suffix-inner"),this.$el.icon=this.$el.suffix.querySelector(".pops-panel-icon"),u.addClassName(this.$el.panelInput,pe.userSelectNone);},isTextInputType(){return ["text","search","email","tel","url"].includes(a.inputType||t)},isDateInputType(){return ["date","datetime-local","month","time","week"].includes(a.inputType||t)},isNumberInputType(){return ["number"].includes(a.inputType||t)},disable(){this.$el.input.disabled=true,u.addClassName(this.$el.panelInput,"pops-input-disabled"),u.addClassName(this.$el.itemLeftTextContainer,pe.textIsDisabled);},notDisable(){this.$el.input.disabled=false,u.removeClassName(this.$el.panelInput,"pops-input-disabled"),u.removeClassName(this.$el.itemLeftTextContainer,pe.textIsDisabled);},isDisabled(){return this.$el.input.disabled},setInputValue(i=""){typeof i=="number"&&this.isNumberInputType()?this.$el.input.valueAsNumber=i:typeof i=="object"&&i instanceof Date&&this.isDateInputType()?this.$el.input.valueAsDate=i:this.$el.input.value=i.toString();},setInputType(i="text"){this.$el.input.setAttribute("type",i);},removeCircleIcon(){ee.setSafeHTML(this.$el.icon,"");},setCircleIcon(i=ie.getIcon("circleClose")){ee.setSafeHTML(this.$el.icon,i);},hideCircleIconWrapper(){u.cssHide(this.$el.suffix,true);},showCircleIconWrapper(){u.cssShow(this.$el.suffix);},onIconClick(){u.on(this.$el.icon,"click",i=>{u.preventEvent(i),!this.isDisabled()&&(this.removeCircleIcon(),n==="password"?this.$data.isVisible?(this.$data.isVisible=false,this.setInputType("text"),this.setCircleIcon(ie.getIcon("hide"))):(this.$data.isVisible=true,this.setInputType("password"),this.setCircleIcon(ie.getIcon("view"))):(this.setInputValue(""),this.$el.input.focus(),this.$el.input.dispatchEvent(new Event("input"))));});},onValueChange(){u.on(this.$el.input,["input","propertychange"],void 0,i=>{if(this.$data.value=this.$el.input.value,n!=="password"&&(this.$el.input.value!==""&&this.$el.icon.innerHTML===""&&this.isTextInputType()?(this.setCircleIcon(ie.getIcon("circleClose")),this.onIconClick(),this.showCircleIconWrapper()):this.$el.input.value===""&&this.removeCircleIcon()),typeof a.callback=="function"){let s;a.inputType==="number"?s=a.callback(i,this.$el.input.value,this.$el.input.valueAsNumber):this.isDateInputType()?s=a.callback(i,this.$el.input.value,this.$el.input.valueAsNumber,this.$el.input.valueAsDate):s=a.callback(i,this.$el.input.value),s?s.valid?this.removeValidErrorMsg():this.addValidErrorMsg(s.message):this.removeValidErrorMsg();}});},emitValueChange(){this.$el.input.dispatchEvent(new Event("input"));},addValidErrorMsg(i){if(i==null)return;const s=this.$el.panelInput.querySelector(".pops-panel-input-valid-error")||u.createElement("div",{className:"pops-panel-input-valid-error",innerHTML:"<span></span>"}),l=s.querySelector("span");l.innerHTML!==i&&ee.setSafeHTML(l,i),s.parentElement||u.after(this.$el.panelInputInner,s);},removeValidErrorMsg(){this.$el.panelInput.querySelector(".pops-panel-input-valid-error")?.remove();}};return o.init(),Reflect.set(e,"data-input",o),{$el:e,handler:o}},createSectionContainerItem_textarea(a){const e=u.createElement("li");Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${a.placeholder??""}"></textarea>
				</div>
			`);const n={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),panelTextarea:e.querySelector(".pops-panel-textarea"),textarea:e.querySelector(".pops-panel-textarea textarea")},$data:{value:a.getValue()},init(){this.setValue(this.$data.value),this.onValueChange(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),u.addClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable"),u.addClassName(this.$ele.itemLeftTextContainer,pe.textIsDisabled);},notDisable(){this.$ele.textarea.removeAttribute("disabled"),u.removeClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable"),u.removeClassName(this.$ele.itemLeftTextContainer,pe.textIsDisabled);},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||u.containsClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable")},setValue(r){this.$ele.textarea.value=r;},onValueChange(){u.on(this.$ele.textarea,["input","propertychange"],r=>{const o=this.$ele.textarea.value;this.$data.value=o,typeof a.callback=="function"&&a.callback(r,o);});}};return n.init(),Reflect.set(e,"data-textarea",n),{$el:e,handler:n}},createSectionContainerItem_select(a){const e=this,t=u.createElement("li");Reflect.set(t,this.$data.nodeStoreConfigKey,a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`);const r=t.querySelector(".pops-panel-item-left-text"),o=t.querySelector(".pops-panel-select"),i=t.querySelector(".pops-panel-select select"),s=(typeof a.width=="number"?`${a.width}px`:a.width)??"200px";u.css(o,"width",s);const l=a.mode??"native";let c;if(l==="native"){const d={[Symbol.toStringTag]:"PopsPanelSelectNative",$el:{itemLeftTextContainer:r,$container:o,$select:i},$eleKey:{disable:"__disable__",value:"__value__",viewConfig:"data-view-config"},$data:{data:[],defaultValue:a.getValue()},init(){this.$el.$container.setAttribute("data-mode",l),this.$data.data=typeof a.data=="function"?a.data():a.data,u.addClassName(this.$el.$container,pe.userSelectNone),this.initOption(),this.onValueChange(),this.onClick(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},setNodeValue(p,f,b){Reflect.set(p,f,b);},getNodeValue(p,f){return Reflect.get(p,f)},disable(){this.$el.$select.setAttribute("disabled","true"),u.addClassName(this.$el.$container,"pops-panel-select-disable"),u.addClassName(this.$el.itemLeftTextContainer,pe.textIsDisabled);},notDisable(){this.$el.$select.removeAttribute("disabled"),u.removeClassName(this.$el.$container,"pops-panel-select-disable"),u.removeClassName(this.$el.itemLeftTextContainer,pe.textIsDisabled);},isDisabled(){return this.$el.$select.hasAttribute("disabled")||u.containsClassName(this.$el.$container,"pops-panel-select-disable")},initOption(){this.$data.data.forEach(p=>{const f=u.createElement("option");this.setNodeValue(f,this.$eleKey.value,p.value),this.setNodeValue(f,this.$eleKey.disable,p.disable),this.setNodeValue(f,this.$eleKey.viewConfig,p.views),p.value===this.$data.defaultValue&&this.setOptionSelected(f),typeof p.text=="function"?f.innerText=p.text(p.value,p):f.innerText=p.text,this.$el.$select.appendChild(f);});},setOptionSelected(p){p.setAttribute("selected","true");},setSelectOptionsDisableStatus(){this.$el.$select.options&&this.$el.$select.options.length&&Array.from(this.$el.$select.options).forEach(p=>{this.setOptionDisableStatus(p);});},setOptionDisableStatus(p){let f=false;const b=this.getNodeValue(p,this.$eleKey.disable);if(b==="function"){const h=this.getNodeValue(p,this.$eleKey.value);f=!!b(h);}f?p.setAttribute("disabled","true"):p.removeAttribute("disabled");},getSelectOptionInfo(p){const f=this.getNodeValue(p,this.$eleKey.value),b=p.innerText||p.textContent,h=this.getNodeValue(p,this.$eleKey.viewConfig);return {value:f,text:b,views:h,$option:p}},onValueChange(){u.on(this.$el.$select,"change",()=>{const p=this.$el.$select[this.$el.$select.selectedIndex],f=this.getSelectOptionInfo(p);this.setSelectOptionsDisableStatus(),typeof a.callback=="function"&&a.callback(f);const b=typeof f.views=="function"?f.views():f.views;if(Array.isArray(b)){const h="pops-panel-select-child-forms";for(;t.nextElementSibling&&t.nextElementSibling.classList.contains(h);)t.nextElementSibling.remove();const g=u.createElement("ul");g.className=h,u.after(t,g),e.uListContainerAddItem(a,{ulElement:g});}});},onClick(){u.on(this.$el.$select,"click",void 0,p=>{if(this.setSelectOptionsDisableStatus(),typeof a.clickCallBack=="function"){const f=this.$el.$select[this.$el.$select.selectedIndex],b=this.getSelectOptionInfo(f);a.clickCallBack(p,b);}});}};d.init(),Reflect.set(t,"data-select",d),c=d;}else if(l==="dialog"){const d={[Symbol.toStringTag]:"PopsPanelSelect",$el:{$itemLeftContainer:r,$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectDialogContainer:void 0},$data:{data:[],defaultValue:a.getValue(),selectedData:void 0,isValidSuccess:true,rotateKey:"data-show-option"},init(){this.initDefault(),this.initEl(),this.initPlaceHolder(),this.renderSelectText(),this.onShowSelectDialogClick(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},initDefault(){this.$data.data=typeof a.data=="function"?a.data():a.data,this.$data.data.forEach(p=>{this.$data.defaultValue.includes(p.value)&&(this.resetCurrentSelectedInfo(),this.updateSelectedInfo(p));});},initEl(){this.$el.$container=o,this.$el.$container.setAttribute("data-mode",l),ee.setSafeHTML(this.$el.$container,`
              <div class="el-select__wrapper">
                <div class="el-select__selection">
                  <!-- 这个是用于手动输入的，这里暂不适配 -->
                  <div class="el-select__selected-item el-select__input-wrapper"></div>
                  <!-- 这个是placeholder -->
                  <div class="el-select__selected-item el-select__placeholder"></div>
                </div>
                <!-- 下拉箭头 -->
                <div class="el-select__suffix">
                  <i class="el-icon el-select__caret el-select__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                    </svg>
                  </i>
                </div>
              </div>`),this.$el.$wrapper=t.querySelector(".el-select__wrapper"),this.$el.$section=t.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=t.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=t.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=t.querySelector(".el-select__suffix"),this.$el.$suffixIcon=t.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let p="--请选择--";if(typeof a.placeholder=="string")p=a.placeholder;else if(typeof a.placeholder=="function"){const h=a.placeholder();typeof h=="string"&&(p=h);}this.$el.$section.setAttribute("data-selected-text-align",a.selectedTextAlign||"left");const b=u.createElement("span",{innerText:p});this.$el.$selectedPlaceHolderWrapper.appendChild(b);},renderSelectText(){let p=this.$data.data.find(f=>f.value===this.$data.selectedData?.value);if(p==null&&this.$data.selectedData&&this.$data.selectedData.addCustomInput&&(p=this.$data.selectedData),p!=null){const f=typeof p.text=="function"?p.text(p.value,p):p.text;p.isHTML?ee.setSafeHTML(this.$el.$selectedInputWrapper,f):ee.setSafeHTML(this.$el.$selectedInputWrapper,`
                  <span>${f}</span>
                `),this.showInputWrapper(),this.hidePlaceHolderWrapper();}else this.hideInputWrapper(),this.showPlaceHolderWrapper();},disable(){u.addClassName(this.$el.$container,"pops-panel-select-disable"),u.addClassName(this.$el.$itemLeftContainer,pe.textIsDisabled);},cancleDisable(){u.removeClassName(this.$el.$container,"pops-panel-select-disable"),u.removeClassName(this.$el.$itemLeftContainer,pe.textIsDisabled);},isDisabled(){return u.containsClassName(this.$el.$container,"pops-panel-select-disable")||u.containsClassName(this.$el.$itemLeftContainer,pe.textIsDisabled)},onShowSelectDialogClick(){const p=j.panelComponents_Select;u.on(this.$el.$container,"click",()=>{if(this.isDisabled())return;const{style:f,...b}=a.selectConfirmDialogConfig||{},h=()=>{if(this.$data.selectedData?.addCustomInput&&!this.$data.isValidSuccess)return  false;this.getAllSelectItems(false).forEach(v=>{v.data.addCustomInput&&(v.data.value="",v.data.text="",this.onValueChangeCallback(v.data));}),this.renderSelectText(),this.$el.$selectDialogContainer=null,this.$el.$container.removeAttribute(this.$data.rotateKey);};this.$el.$container.setAttribute(this.$data.rotateKey,String(true));const g=U.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:'<ul class="select-container"></ul>',html:true},btn:{ok:{enable:false},close:{enable:true,callback(v){const S=h();typeof S=="boolean"&&!S||v.close();}}},mask:{enable:true,clickCallBack(v){const S=h();typeof S=="boolean"&&!S||v();},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"auto",style:`
                  ${p}

                  ${j.panelCSS}

								  ${f||""}
								`},b),A=qt.init(g).$shadowRoot.querySelector(".select-container");this.$data.data.forEach(v=>{if(v.addCustomInput){const S=v,T=this.createSelectItemElement(S),x=this,E=e.createSectionContainerItem_input({type:"input",text:"",getValue(){return S.value},callback(F,X){if(S.text=X,S.value=X,typeof S.onValid=="function"){const K=S.onValid(S);if(x.$data.isValidSuccess=K.valid,K.valid)B.removeValidErrorMsg();else return B.addValidErrorMsg(K.message),K}x.updateSelectedInfo(S),x.onValueChangeCallback(S);}}),B=E.handler,z=E.$el.querySelector(".pops-panel-input");ee.setSafeHTML(T,""),T.appendChild(z),A.appendChild(T),this.onSelectItemClick(S,T);}else {const S=this.createSelectItemElement(v);A.appendChild(S),this.onSelectItemClick(v,S);}}),this.$el.$selectDialogContainer=A,this.updateAllSelectItemStatus();});},onValueChangeCallback(p,f=true){f&&this.updateAllSelectItemStatus(),typeof a.callback=="function"&&a.callback(p||this.$data.selectedData);},updateAllSelectItemStatus(){this.getAllSelectItems(false).forEach(f=>{const{data:b,$select:h}=f;this.setSelectItemText(b,f.$select),typeof b.disable=="function"&&b.disable(b.value,this.$data.selectedData)?(this.removeItemSelected(h),this.setSelectItemDisabled(h)):this.removeSelectItemDisabled(h),this.$data.selectedData!=null&&this.$data.selectedData.value===b.value?this.setItemSelected(h):this.removeItemSelected(h);});},resetAllSelectedItemStatus(){const p=this.getAllSelectItems(true);p.length&&this.resetCurrentSelectedInfo(),p.forEach(f=>{const{data:b,$select:h}=f;this.setSelectItemText(b,f.$select),this.removeItemSelected(h),this.removeSelectItemDisabled(h);});},setItemSelected(p){this.isItemSelected(p)||p.classList.add("select-item-is-selected");},removeItemSelected(p){p.classList.remove("select-item-is-selected");},isItemSelected(p){return p.classList.contains("select-item-is-selected")},getItemDataOption(p){return Reflect.get(p,"data-info")},addSelectedItemInfo(p){this.resetCurrentSelectedInfo(),this.updateSelectedInfo(p),this.onValueChangeCallback(p);},removeSelectedItemInfo(){this.updateSelectedInfo(),this.onValueChangeCallback();},updateSelectedInfo(p){if(this.$data.selectedData=void 0,p){if(p.addCustomInput&&p.value.toString()==="")return;this.$data.selectedData=p;}},resetCurrentSelectedInfo(){this.updateSelectedInfo();},getAllSelectItems(p=true){return Array.from(this.$el.$selectDialogContainer?.querySelectorAll(".select-item")??[]).map(f=>{const h={data:this.getItemDataOption(f),$select:f};return p?this.isItemSelected(f)?h:void 0:h}).filter(f=>f!=null)},createSelectItemElement(p){const f=u.createElement("li",{className:"select-item",innerHTML:'<span class="select-item-text"></span>'});return this.setSelectItemText(p,f),Reflect.set(f,"data-info",p),f},setSelectItemText(p,f){const b=typeof p.text=="function"?p.text(p.value,this.$data.selectedData):p.text,h=f.querySelector(".select-item-text");h&&(p.isHTML?ee.setSafeHTML(h,b):h.innerText=b);},setSelectItemDisabled(p){p.setAttribute("aria-disabled","true"),p.setAttribute("disabled","true");},removeSelectItemDisabled(p){p.removeAttribute("aria-disabled"),p.removeAttribute("disabled");},isSelectItemDisabled(p){return p.hasAttribute("disabled")||p.ariaDisabled},onSelectItemClick(p,f){const b=()=>{this.setItemSelected(f),this.addSelectedItemInfo(p);};u.on(f,"click",h=>{u.preventEvent(h);const g=h.target;if(p?.addCustomInput&&g instanceof HTMLInputElement){b();return}if(!this.isSelectItemDisabled(f)){if(typeof a.clickCallBack=="function"){const w=a.clickCallBack(h,this.$data.selectedData);if(typeof w=="boolean"&&!w)return}p?.addCustomInput?b():this.isItemSelected(f)?(this.removeItemSelected(f),this.removeSelectedItemInfo()):(this.setItemSelected(f),this.addSelectedItemInfo(p));}});},showInputWrapper(){u.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){u.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){u.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){u.cssHide(this.$el.$selectedPlaceHolderWrapper,true);}};d.init(),Reflect.set(t,"data-select",d),c=d;}else if(l==="horizontal"){const d={[Symbol.toStringTag]:"PopsPanelSelectHorizontal",$el:{$itemLeftContainer:r,$container:o,$wrapper:void 0},$data:{data:[],defaultValue:a.getValue(),selectedData:void 0,rotateKey:"data-show-option"},init(){this.initDefault(),this.initEl(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},initDefault(){if(this.$data.data=typeof a.data=="function"?a.data():a.data,!this.$data.data.length)throw new Error("PopsPanelSelect: data is empty")},initEl(){this.$el.$container.setAttribute("data-mode",l),ee.setSafeHTML(this.$el.$container,`
              <div class="el-select__wrapper">
              </div>`),this.$el.$wrapper=t.querySelector(".el-select__wrapper"),this.$data.data.forEach(p=>{const f=this.createSelectItemElement(p);this.onSelectItemClick(p,f),this.$data.defaultValue===p.value&&this.addSelectedItemInfo(p),this.$el.$wrapper.appendChild(f);}),this.updateAllSelectItemStatus();},disable(){u.addClassName(this.$el.$container,"pops-panel-select-disable"),u.addClassName(this.$el.$itemLeftContainer,pe.textIsDisabled);},cancleDisable(){u.removeClassName(this.$el.$container,"pops-panel-select-disable"),u.removeClassName(this.$el.$itemLeftContainer,pe.textIsDisabled);},isDisabled(){return u.containsClassName(this.$el.$container,"pops-panel-select-disable")||u.containsClassName(this.$el.$itemLeftContainer,pe.textIsDisabled)},createSelectItemElement(p){const f=u.createElement("div",{className:"select-item",innerHTML:`
                <span class="select-item-text"></span>
              `});return this.setSelectItemText(p,f),Reflect.set(f,"data-info",p),f},setSelectItemText(p,f){const b=typeof p.text=="function"?p.text(p.value,this.$data.selectedData):p.text,h=f.querySelector(".select-item-text");h&&(p.isHTML?ee.setSafeHTML(h,b):h.innerText=b);},onSelectItemClick(p,f){u.on(f,"click",b=>{if(u.preventEvent(b),!this.isDisabled()&&!this.isSelectItemDisabled(f)){if(typeof a.clickCallBack=="function"){const h=a.clickCallBack(b,this.$data.selectedData);if(typeof h=="boolean"&&!h)return}this.isItemSelected(f)?(this.removeItemSelected(f),this.removeSelectedItemInfo()):(this.setItemSelected(f),this.addSelectedItemInfo(p));}});},onValueChangeCallback(p,f=true){f&&this.updateAllSelectItemStatus(),typeof a.callback=="function"&&a.callback(p||this.$data.selectedData);},updateAllSelectItemStatus(){this.getAllSelectItems(false).forEach(f=>{const{data:b,$select:h}=f;this.setSelectItemText(b,f.$select),typeof b.disable=="function"&&b.disable(b.value,this.$data.selectedData)?(this.removeItemSelected(h),this.setSelectItemDisabled(h)):this.removeSelectItemDisabled(h),this.$data.selectedData!=null&&this.$data.selectedData.value===b.value?this.setItemSelected(h):this.removeItemSelected(h);});},resetAllSelectedItemStatus(){const p=this.getAllSelectItems(true);p.length&&this.resetCurrentSelectedInfo(),p.forEach(f=>{const{data:b,$select:h}=f;this.setSelectItemText(b,f.$select),this.removeItemSelected(h),this.removeSelectItemDisabled(h);});},addSelectedItemInfo(p){this.resetCurrentSelectedInfo(),this.updateSelectedInfo(p),this.onValueChangeCallback(p);},removeSelectedItemInfo(){this.updateSelectedInfo(),this.onValueChangeCallback();},updateSelectedInfo(p){if(this.$data.selectedData=void 0,p){if(p.addCustomInput&&p.value.toString()==="")return;this.$data.selectedData=p;}},resetCurrentSelectedInfo(){this.updateSelectedInfo();},setSelectItemDisabled(p){p.setAttribute("aria-disabled","true"),p.setAttribute("disabled","true");},removeSelectItemDisabled(p){p.removeAttribute("aria-disabled"),p.removeAttribute("disabled");},isSelectItemDisabled(p){return p.hasAttribute("disabled")||p.ariaDisabled},setItemSelected(p){this.isItemSelected(p)||p.classList.add("select__selected-item");},removeItemSelected(p){p.classList.remove("select__selected-item");},isItemSelected(p){return p.classList.contains("select__selected-item")},getAllSelectItems(p=true){return Array.from(this.$el.$wrapper?.querySelectorAll(".select-item")??[]).map(f=>{const h={data:this.getItemDataOption(f),$select:f};return p?this.isItemSelected(f)?h:void 0:h}).filter(f=>f!=null)},getItemDataOption(p){return Reflect.get(p,"data-info")}};d.init(),Reflect.set(t,"data-select",d),c=d;}return {$el:t,handler:c}},createSectionContainerItem_select_multiple(a){const e=u.createElement("li");Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(e,`
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
				`);const n={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{$itemLeftContainer:e.querySelector(".pops-panel-item-left-text"),$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectContainer:void 0},$data:{defaultValue:a.getValue(),selectedDataList:[],rotateKey:"data-show-option"},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.initTagElement(),this.onShowSelectDialogClick(),(typeof a.disabled=="function"?a.disabled():a.disabled)&&this.disable();},initDefault(){a.data.forEach(r=>{this.$data.defaultValue.includes(r.value)&&this.$data.selectedDataList.push(r);});},inintEl(){this.$el.$container=e.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=e.querySelector(".el-select__wrapper"),this.$el.$section=e.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=e.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=e.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=e.querySelector(".el-select__suffix"),this.$el.$suffixIcon=e.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let r="";if(typeof a.placeholder=="string")r=a.placeholder;else if(typeof a.placeholder=="function"){const i=a.placeholder();typeof i=="string"&&(r=i);}const o=u.createElement("span",{innerText:r});this.$el.$selectedPlaceHolderWrapper.appendChild(o);},initTagElement(){a.data.forEach(r=>{if(this.$data.selectedDataList.find(i=>i.value===r.value)){const i=this.createTagItem(r);this.addTagItem(i.$tag),this.onSelectItemCloseIconClick({$tag:i.$tag,$closeIcon:i.$closeIcon,value:r.value,text:r.text});}}),this.checkTagEmpty();},createTagItem(r){const o=u.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
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
						`}),i=o.querySelector(".el-select__tags-text"),s=o.querySelector(".el-icon.el-tag__close"),l=typeof r.text=="function"?r.text(r,this.$data.selectedDataList):r.text;return r.isHTML?ee.setSafeHTML(i,l):i.innerText=l,{$tag:o,$tagText:i,$closeIcon:s}},addTagItem(r){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){const o=this.$el.$selectedInputWrapper.previousElementSibling;o?u.after(o,r):u.before(this.$el.$selectedInputWrapper,r);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){const o=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;o?u.after(o,r):u.before(this.$el.$selectedPlaceHolderWrapper,r);}else this.$el.$section.appendChild(r);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(r=>{r.remove();}),this.initTagElement();},onValueChange(r){this.updateAllSelectItems(),typeof a.callback=="function"&&a.callback(r||this.$data.selectedDataList);},updateAllSelectItems(){this.getAllSelectItemInfo(false).forEach(r=>{const{data:o,$select:i}=r;this.setSelectItemText(o,r.$select),typeof o.disable=="function"&&o.disable(o.value,this.$data.selectedDataList)?(this.disableSelectItem(i),this.removeSelectedInfo(o,false),this.removeItemSelected(i)):this.cancleDisableSelectItem(i),this.$data.selectedDataList.find(l=>l.value===o.value)?this.setItemSelected(i):this.removeItemSelected(i);});},setItemSelected(r){this.isItemSelected(r)||r.classList.add("select-item-is-selected");},removeItemSelected(r){r.classList.remove("select-item-is-selected");},isItemSelected(r){return r.classList.contains("select-item-is-selected")},addItemSelected(r,o){const i=this.getSelectedItemInfo(o);r.find(l=>l.value===i.value)||r.push(i),this.onValueChange(r);},getSelectedItemInfo(r){return Reflect.get(r,"data-info")},removeSelectedItemInfo(r,o){const i=this.getSelectedItemInfo(o),s=r.findIndex(l=>l.value===i.value);s!==-1&&r.splice(s,1),this.onValueChange(r);},getAllSelectItemInfo(r=true){return Array.from(this.$el.$selectContainer?.querySelectorAll(".select-item")??[]).map(o=>{const s={data:this.getSelectedItemInfo(o),$select:o};return r?this.isItemSelected(o)?s:void 0:s}).filter(o=>o!=null)},createSelectItemElement(r){const o=u.createElement("li",{className:"select-item",innerHTML:`
							<span class="select-item-text"></span>
						`});return this.setSelectItemText(r,o),Reflect.set(o,"data-info",r),o},setSelectItemText(r,o){const i=typeof r.text=="function"?r.text(r.value,this.$data.selectedDataList):r.text,s=o.querySelector(".select-item-text");r.isHTML?ee.setSafeHTML(s,i):s.innerText=i;},disableSelectItem(r){r.setAttribute("aria-disabled","true"),r.setAttribute("disabled","true");},cancleDisableSelectItem(r){r.removeAttribute("aria-disabled"),r.removeAttribute("disabled");},isSelectItemDisabled(r){return r.hasAttribute("disabled")||r.ariaDisabled},onSelectItemClick(r,o){u.on(o,"click",i=>{if(u.preventEvent(i),!this.isSelectItemDisabled(o)){if(typeof a.clickCallBack=="function"){const s=this.getAllSelectItemInfo().map(c=>c.data),l=a.clickCallBack(i,s);if(typeof l=="boolean"&&!l)return}this.isItemSelected(o)?(this.removeItemSelected(o),this.removeSelectedItemInfo(r,o)):(this.setItemSelected(o),this.addItemSelected(r,o));}});},onShowSelectDialogClick(){const r=j.panelComponents_Select;u.on(this.$el.$container,"click",()=>{if(this.isDisabled())return;const o=this.$data.selectedDataList,{style:i,...s}=a.selectConfirmDialogConfig||{},l=()=>{this.$data.selectedDataList=[...o],this.updateTagItem(),this.$el.$selectContainer=null,this.$el.$container.removeAttribute(this.$data.rotateKey);};this.$el.$container.setAttribute(this.$data.rotateKey,String(true));const c=U.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:'<ul class="select-container"></ul>',html:true},btn:{ok:{enable:false},close:{enable:true,callback(f){f.close(),l();}}},mask:{enable:true,clickCallBack(f){f(),l();},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"auto",style:`
                  ${r}

								  ${i||""}
								`},s),p=qt.init(c).$shadowRoot.querySelector(".select-container");a.data.forEach(f=>{const b=this.createSelectItemElement(f);p.appendChild(b),this.onSelectItemClick(o,b);}),this.$el.$selectContainer=p,this.updateAllSelectItems();});},onSelectItemCloseIconClick(r){u.on(r.$closeIcon,"click",o=>{if(u.preventEvent(o),!this.isDisabled()){if(typeof a.closeIconClickCallBack=="function"){const i=a.closeIconClickCallBack(o,{$tag:r.$tag,$closeIcon:r.$closeIcon,value:r.value,text:typeof r.text=="function"?r.text.bind(r):r.text});if(typeof i=="boolean"&&!i)return}this.removeSelectedTagItem(r.$tag),this.removeSelectedInfo({value:r.value,text:r.text});}},{capture:true});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedTagItem(r){r.remove(),this.checkTagEmpty();},removeSelectedInfo(r,o=true){for(let i=0;i<this.$data.selectedDataList.length;i++)if(this.$data.selectedDataList[i].value===r.value){this.$data.selectedDataList.splice(i,1);break}o&&this.onValueChange();},showInputWrapper(){u.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){u.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){u.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){u.cssHide(this.$el.$selectedPlaceHolderWrapper,true);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");},disable(){u.addClassName(this.$el.$itemLeftContainer,pe.textIsDisabled),u.addClassName(this.$el.$container,"pops-panel-select-disable");},isDisabled(){return u.containsClassName(this.$el.$container,"pops-panel-select-disable")},cancleDisable(){u.removeClassName(this.$el.$itemLeftContainer,pe.textIsDisabled),u.removeClassName(this.$el.$container,"pops-panel-select-disable");}};return n.init(),Reflect.set(e,"data-select-multiple",n),{$el:e,handler:n}},createSectionContainerItem_button(a){const e=u.createElement("li");Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props);let t="";a.description&&(t=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`),ee.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${t}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner" type="button">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);const n={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:e.querySelector(".pops-panel-button"),button:e.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:e.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:e.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.onButtonClick();},initButton(){typeof a.buttonIcon=="string"&&a.buttonIcon.trim()!==""?(ie.hasIcon(a.buttonIcon)?this.setIconSVG(ie.getIcon(a.buttonIcon)):this.setIconSVG(a.buttonIcon),this.showIcon()):this.hideIcon();let r=a.buttonText;typeof a.buttonText=="function"&&(r=a.buttonText()),this.setButtonType(a.buttonType),a.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),a.disable&&this.disable(),this.setButtonText(r),this.setIconLoadingStatus(a.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(r){ee.setSafeHTML(this.$ele.icon,r);},setIconLoadingStatus(r){this.$ele.icon.setAttribute("is-loading",(!!r).toString());},setHasIcon(r){this.$ele.button.setAttribute("data-icon",(!!r).toString());},setButtonType(r){this.$ele.button.setAttribute("data-type",r);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(r){ee.setSafeHTML(this.$ele.spanText,r);},onButtonClick(){u.on(this.$ele.button,"click",void 0,r=>{typeof a.callback=="function"&&a.callback(r);});}};return n.init(),Reflect.set(e,"data-button",n),{$el:e,handler:n}},createSectionContainerItem_deepMenu(a){const e=this,t=u.createElement("li");u.addClassName(t,"pops-panel-deepMenu-nav-item"),Reflect.set(t,this.$data.nodeStoreConfigKey,a),this.setElementClassName(t,a.className),this.setElementAttributes(t,a.attributes),this.setElementProps(t,a.props);let n="";a.description&&(n=`<p class="pops-panel-item-left-desc-text">${a.description}</p>`);const r=typeof a.arrowRightIcon=="boolean"?a.arrowRightIcon:true;let o="";r&&(o=`<i class="pops-panel-deepMenu-arrowRight-icon">${ie.getIcon("arrowRight")}</i>`);let i="";a.rightText&&(i=`<p class="pops-panel-item-right-text">${a.rightText}</p>`),ee.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${a.text}</p>${n}</div>
				<div class="pops-panel-deepMenu">${i}${o}</div>
				`);const s={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return e.$el.$panelContentSectionContainer}},init(){this.onLiClick();},initContainerItem(l,c){const d=c;if(d.type==="container"){const p=d.views,f=u.createElement("li"),b=u.createElement("ul");b.classList.add("pops-panel-forms-container-item-formlist"),f.classList.add("pops-panel-forms-container-item");const h=u.createElement("div",{className:"pops-panel-forms-container-item-header-text"});ee.setSafeHTML(h,d.text),d.isFold&&(ee.setSafeHTML(h,`
								<p>${d.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),u.on(h,"click",()=>{f.hasAttribute("data-fold-enable")?f.removeAttribute("data-fold-enable"):f.setAttribute("data-fold-enable","");}),u.addClassName(h,"pops-panel-forms-fold-container"),u.addClassName(h,pe.userSelectNone),f.setAttribute("data-fold-enable",""),u.addClassName(h,"pops-panel-forms-fold")),f.appendChild(h),e.setElementClassName(f,c.className),e.setElementAttributes(f,c.attributes),e.setElementProps(f,c.props),p.forEach(g=>{e.uListContainerAddItem(g,{ulElement:b,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:f,formHeaderDivElement:h});}),f.appendChild(b),l.appendChild(f),typeof d.afterAddToUListCallBack=="function"&&d.afterAddToUListCallBack(a,{target:f,ulElement:b,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:f,formHeaderDivElement:h});}else e.uListContainerAddItem(a,{ulElement:e.sectionContainerULElement});},async gotoDeepMenu(l,c){const d=c.closest("section.pops-panel-container"),p=u.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"});Reflect.set(p,e.$data.nodeStoreConfigKey,a);const f=u.createElement("ul",{className:"pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul"}),b=u.createElement("ul",{className:"pops-panel-container-main-ul"}),h=a.headerTitle??a.text,g=u.createElement("li",{className:"pops-panel-container-header-title-text pops-panel-deepMenu-container-header",innerHTML:`<p class="pops-panel-deepMenu-container-header-title-text">${h}</p>`}),w=u.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:ie.getIcon("arrowLeft")}),A={duration:220,easing:"ease-in-out"},v=()=>{if(u.cssHide(d,true),u.on(w,"click",async S=>{u.preventEvent(S);const T=()=>{const x=d;u.cssShow(x),p.remove();};if(e.$config.useDeepMenuSwtichAnimation&&document.startViewTransition){const x=document.startViewTransition(T);await x.ready,await Promise.all([p.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],A).finished,d.animate([{transform:"translateX(-100%)"},{transform:"translateX(0)"}],A).finished]),await x.finished;}else T();e.emitRenderRightContainer(d);},{once:true}),u.before(g.firstElementChild,w),f.appendChild(g),p.appendChild(f),p.appendChild(b),a.views&&Array.isArray(a.views))for(let S=0;S<a.views.length;S++){const T=a.views[S];this.initContainerItem(b,T);}e.$el.$panelRightSectionWrapper.appendChild(p);};if(e.$config.useDeepMenuSwtichAnimation&&document.startViewTransition){const S=document.startViewTransition(v);await S.ready,await p.animate([{transform:"translateX(100%)"},{transform:"translateX(0)"}],A).finished,await S.finished;}else v();typeof a.afterEnterDeepMenuCallBack=="function"&&a.afterEnterDeepMenuCallBack(a,{$sectionContainer:p,$sectionContainerHeaderContainer:f,$sectionContainerHeader:g,$sectionBodyContainer:b}),e.emitRenderRightContainer(p);},onLiClick(){u.on(t,"click",void 0,async l=>{typeof a.clickCallBack=="function"&&await a.clickCallBack(l,a)||await this.gotoDeepMenu(l,t);});}};return s.init(),Reflect.set(t,"data-deepMenu",s),{$el:t,handler:s}},createSectionContainerItem_own(a){let e=u.createElement("li");return Reflect.set(e,this.$data.nodeStoreConfigKey,a),this.setElementClassName(e,a.className),this.setElementAttributes(e,a.attributes),this.setElementProps(e,a.props),e=a.createLIElement(e),{$el:e}},createSectionContainerItem(a){const e=a.type;if(e==="switch")return this.createSectionContainerItem_switch(a);if(e==="slider")return this.createSectionContainerItem_slider(a);if(e==="input")return this.createSectionContainerItem_input(a);if(e==="textarea")return this.createSectionContainerItem_textarea(a);if(e==="select")return this.createSectionContainerItem_select(a);if(e==="select-multiple")return this.createSectionContainerItem_select_multiple(a);if(e==="button")return this.createSectionContainerItem_button(a);if(e==="deepMenu")return this.createSectionContainerItem_deepMenu(a);if(e==="own")return this.createSectionContainerItem_own(a);console.error("尚未实现的type类型",a);},createSectionContainerItem_forms(a){const e=this,t=a;if(t.type==="container"){const n=a.views,r=u.createElement("li"),o=u.createElement("ul");r.classList.add("pops-panel-forms-container-item"),o.classList.add("pops-panel-forms-container-item-formlist");const i=u.createElement("div",{className:"pops-panel-forms-container-item-header-text"});ee.setSafeHTML(i,t.text),t.isFold&&(ee.setSafeHTML(i,`
						<p>${t.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),u.on(i,"click",()=>{r.hasAttribute("data-fold-enable")?r.removeAttribute("data-fold-enable"):r.setAttribute("data-fold-enable","");}),u.addClassName(i,"pops-panel-forms-fold-container"),u.addClassName(i,pe.userSelectNone),r.setAttribute("data-fold-enable",""),u.addClassName(r,"pops-panel-forms-fold")),r.appendChild(i),e.setElementClassName(r,a.className),e.setElementAttributes(r,a.attributes),e.setElementProps(r,a.props),n.forEach(s=>{e.uListContainerAddItem(s,{ulElement:o,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:i});}),r.appendChild(o),e.sectionContainerULElement.appendChild(r),typeof t.afterAddToUListCallBack=="function"&&t.afterAddToUListCallBack(t,{target:r,ulElement:o,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:i});}else e.uListContainerAddItem(a,{ulElement:e.sectionContainerULElement});},emitRenderRightContainer(a){const e=Reflect.get(a,this.$data.nodeStoreConfigKey);this.$el.$pops.dispatchEvent(new CustomEvent("pops:renderRightContainer",{detail:{viewConfig:e}}));},uListContainerAddItem(a,e){const t=this.createSectionContainerItem(a);t&&e.ulElement.appendChild(t.$el),typeof a.afterAddToUListCallBack=="function"&&a.afterAddToUListCallBack(a,{...e,target:t?.$el});},onAsideItemClick(a,e){u.on(a,"click",async t=>{if(typeof e.clickFirstCallback=="function"){const i=await e.clickFirstCallback(t,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof i=="boolean"&&!i)return}this.clearContainer();const n=Reflect.get(a,"__forms__");Reflect.set(this.$el.$panelContentSectionContainer,this.$data.nodeStoreConfigKey,n),u.cssShow(this.$el.$panelContentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(a);const r=typeof e.title=="function"?e.title():e.title;let o=typeof e.headerTitle=="function"?e.headerTitle():e.headerTitle;if(o=o??r,typeof o=="string"&&o.trim()!==""){const i=u.createElement("li");i.classList.add("pops-panel-container-header-title-text"),Reflect.set(i,"__asideConfig__",e),ee.setSafeHTML(i,o),this.sectionContainerHeaderULElement.appendChild(i);}if(n.forEach(i=>{this.createSectionContainerItem_forms(i);}),typeof e.clickCallback=="function"){const i=await e.clickCallback(t,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof i=="boolean"&&!i)return}this.emitRenderRightContainer(this.$el.$panelContentSectionContainer);});}}),ls={init(a){const e=U.getRandomGUID(),t="panel";let n=as();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"button",css:j.button},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"panelCSS",css:j.panelCSS}]);const i=N.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),{headerStyle:c,headerPStyle:d}=Z.createHeaderStyle(t,n),p=Z.createAnim(e,t,n,`
			<div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${c}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${t}-content">
				<aside class="pops-${t}-aside pops-user-select-none">
					<ul class="pops-${t}-aside-top-container"></ul>
					<ul class="pops-${t}-aside-bottom-container"></ul>
				</aside>
				<div class="pops-${t}-section-wrapper">
					<section class="pops-${t}-container">
						<ul class="pops-${t}-container-header-ul"></ul>
						<ul class="pops-${t}-container-main-ul"></ul>
					</section>
				</div>
			</div>
      <div class="pops-${t}-bottom-wrapper">
        <section class="pops-${t}-bottom-container">
          <ul class="pops-${t}-bottom-left-container"></ul>
          <ul class="pops-${t}-bottom-right-container"></ul>
        </section>
      </div>
      `,"",i),f=Z.parseElement(p),{$pops:b,$headerBtnClose:h,$title:g,$content:w,$panelRightSectionWrapper:A,$panelLeftAside:v,$panelContentSectionContainer:S,$panelBottomWrapper:T,$panelBottomContainer:x,$panelBottomLeftContainer:E,$panelBottomRightContainer:B}=N.handleQueryElement(f,t);(n.isMobile||U.isPhone())&&u.addClassName(b,n.mobileClassName);let z;const F=[f];n.mask.enable&&(z=N.handleMask({type:t,guid:e,config:n,animElement:f,maskHTML:s}).maskElement,F.push(z));const X=N.handleEventConfig(n,e,r,o,t,f,b,z);return N.handleClickEvent("close",h,X,n.btn?.close?.callback),u.append(o,F),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r),z!=null&&f.after(z),hr().init({config:n,$el:{$pops:b,$content:w,$panelRightSectionWrapper:A,$panelLeftAside:v,$panelContentSectionContainer:S,$panelBottomWrapper:T,$panelBottomContainer:x,$panelBottomLeftContainer:E,$panelBottomRightContainer:B}}),N.handlePush(t,{guid:e,$anim:f,$pops:b,$mask:z,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(b,{dragElement:g,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),{...N.handleResultConfig(X),addEventListener:(M,C,y)=>{b.addEventListener(M,C,y);},removeEventListener:(M,C,y)=>{b.removeEventListener(M,C,y);}}}},cs=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"",select:false,password:false,row:false,focus:true,placeholder:"默认提示",style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"success",callback(a){a.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(a){a.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(a){a.close();}},close:{enable:true,callback(a){a.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),ps={init(a){const e=U.getRandomGUID(),t="prompt";let n=cs();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);N.handleInit(o,[{name:"index",css:j.index},{name:"ninePalaceGridPosition",css:j.ninePalaceGridPosition},{name:"scrollbar",css:j.scrollbar},{name:"button",css:j.button},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"promptCSS",css:j.promptCSS}]);const i=N.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:d,headerPStyle:p}=Z.createHeaderStyle(t,n),{contentPStyle:f}=Z.createContentStyle(t,n),b=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${d}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${p}">${n.title.text}</p>`}${l}</div>
            <div class="pops-content pops-${t}-content" style="${f}">${n.content.row?'<textarea name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'"></textarea>':'<input name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'" type="'+(n.content.password?"password":"text")+'">'}</div>${c}`,c,i),h=Z.parseElement(b),{$pops:g,$input:w,$headerBtnClose:A,$btnOk:v,$btnCancel:S,$btnOther:T,$title:x}=N.handleQueryElement(h,t);let E;const B=[h];n.mask.enable&&(E=N.handleMask({type:t,guid:e,config:n,animElement:h,maskHTML:s}).maskElement,B.push(E));const z=N.handleEventConfig(n,e,r,o,t,h,g,E);return w.value=n.content.text,N.handlePromptClickEvent("close",w,A,z,n.btn.close.callback),N.handlePromptClickEvent("ok",w,v,z,n.btn.ok.callback),N.handlePromptClickEvent("cancel",w,S,z,n.btn.cancel.callback),N.handlePromptClickEvent("other",w,T,z,n.btn.other.callback),u.append(o,B),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r),E!=null&&h.after(E),N.handlePush(t,{guid:e,$anim:h,$pops:g,$mask:E,$shadowContainer:r,$shadowRoot:o}),n.drag&&be.drag(g,{dragElement:x,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),n.content.focus&&w.focus(),n.content.select&&w.select(),N.handleResultConfig(z)}},ds=()=>({$target:document.documentElement,targetSelector:null,position:"fixed",data:[{icon:ie.getIcon("search"),iconIsLoading:false,text:"搜索",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:ie.getIcon("documentCopy"),iconIsLoading:false,text:"复制",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:ie.getIcon("delete"),text:"删除",iconIsLoading:false,item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:ie.getIcon("loading"),iconIsLoading:true,text:"加载",item:[],callback(a,e,t){return console.log("点击："+this.text,[a,e,t]),false}},{icon:ie.getIcon("elemePlus"),iconIsLoading:true,text:"饿了么",callback(a,e,t){return console.log("点击："+this.text,[a,e,t]),false},item:[{icon:"",iconIsLoading:false,text:"处理文件",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}},{icon:"",iconIsLoading:false,text:"其它处理",callback(a,e,t){return console.log("点击："+this.text,[a,e,t]),false},item:[{icon:ie.getIcon("view"),iconIsLoading:false,text:"查看",item:[],callback(a,e,t){console.log("点击："+this.text,[a,e,t]);}}]}]}],chileMenuLeftOrRightDistance:0,childMenuTopOrBottomDistance:0,useShadowRoot:true,className:"",isAnimation:false,useScaleAnimation:true,only:false,zIndex:1e4,preventDefault:true,style:null,beforeAppendToPageCallBack(){},limitPositionXInView:true,limitPositionYInView:true}),fs={init(a){const e=U.getRandomGUID(),t="rightClickMenu";let n=ds();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n=N.handleOnly(t,n);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);if(N.handleInit(o,[{name:"index",css:j.index},{name:"anim",css:j.anim},{name:"common",css:j.common},{name:"rightClickMenu",css:j.rightClickMenu}]),n.style!=null){const s=u.createElement("style",{innerHTML:n.style},{type:"text/css"});o.appendChild(s);}const i={$data:{menuDataKey:"data-menu"},$el:{$root:null},windowCheckClickEvent(s){if(!i.$el.$root)return;const l=s.target;l.closest(`.pops-${t}`)||l.className&&l.className==="pops-shadow-container"&&l.shadowRoot!=null||i.closeAllMenu(i.$el.$root);},shadowRootCheckClickEvent(s){!i.$el.$root||s.target.closest(`.pops-${t}`)||i.closeAllMenu(i.$el.$root);},addWindowCheckClickListener(){if(u.on(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.$target instanceof Node){const s=n.$target.getRootNode();s instanceof ShadowRoot&&u.on(s,"click touchstart",void 0,i.shadowRootCheckClickEvent,{capture:true});}},removeWindowCheckClickListener(){if(u.off(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.$target instanceof Node){const s=n.$target.getRootNode();s instanceof ShadowRoot&&u.off(s,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true});}},contextMenuEvent(s,l){n.preventDefault&&u.preventEvent(s),N.handleOnly(t,n),i.$el.$root&&i.closeAllMenu(i.$el.$root),l=l??n.$target;const c=i.showMenu(s,n.data,l);i.$el.$root=c,n.only&&N.handlePush(t,{$shadowRoot:o,$shadowContainer:r,guid:e,$anim:c,$pops:c,beforeRemoveCallBack(d){i.closeAllMenu(d.$pops);}});},addContextMenuEvent(s,l){u.on(s,"contextmenu",l,i.contextMenuEvent);},removeContextMenuEvent(s,l){u.off(s,"contextmenu",l,i.contextMenuEvent);},animationCloseMenu(s){const l=c=>{u.off(s,u.getTransitionEndNameList(),l,{capture:true}),s.remove();};u.containsClassName(s,`pops-${t}-anim-show`)?(u.on(s,u.getTransitionEndNameList(),l,{capture:true}),u.removeClassName(s,`pops-${t}-anim-show`)):u.containsClassName(s,`pops-${t}-anim-scale`)&&u.containsClassName(s,`pops-${t}-anim-scale-open`)?(u.on(s,u.getTransitionEndNameList(),l,{capture:true}),u.removeClassName(s,`pops-${t}-anim-scale-open`),u.addClassName(s,`pops-${t}-anim-scale-not-open`)):s.remove();},closeAllMenu(s){if(s==null)return;const l=Reflect.get(s,i.$data.menuDataKey);l?.root&&(s=l.root),l.child.forEach(d=>{this.animationCloseMenu(d);}),this.animationCloseMenu(s),i.$el.$root=null;},createMenuContainerElement(s){const l=u.createElement("div",{className:`pops-${t}`,innerHTML:`<ul class="pops-${t}-wrapper"></ul>`},{"data-position":n.position}),c=this.getMenuZIndex();return c>1e4&&(l.style.zIndex=c.toString()),s&&l.setAttribute("is-children","true"),n.isAnimation&&u.addClassName(l,`pops-${t}-anim-grid`),n.useScaleAnimation&&(u.addClassName(l,`pops-${t}-anim-scale`),u.addClassName(l,`pops-${t}-anim-scale-not-open`)),l},getMenuZIndex(){return N.handleZIndex(n.zIndex)},getOffset(s,l,c){const d={top:0,right:0,bottom:0,left:0},p=u.width(s),f=u.height(s),b=1;let h=u.width(globalThis)-b,g=u.height(globalThis)-b;n.position==="absolute"&&(h+=globalThis.scrollX,g+=globalThis.scrollY);const w=h-p,A=g-f,v=n.chileMenuLeftOrRightDistance,S=n.childMenuTopOrBottomDistance;let T=l.x,x=l.y;if(T=T<0?0:T,x=x<0?0:x,n.limitPositionXInView&&T+v>=w){if(c){const E=u.offset(c.$menu);T=h-E.left-v+b;}else T=b+v;T<0?T=0:T>w&&(T=w),d.right=T,Reflect.deleteProperty(d,"left");}else T=T+v,d.left=T,Reflect.deleteProperty(d,"right");if(n.limitPositionYInView&&x+S>=A){if(c){const E=u.offset(c.$parentItem,false);x=g-E.bottom-S+b;}else x=b+S;x<0?x=b:x>A&&(x=A),d.bottom=x,Reflect.deleteProperty(d,"top");}else x=x+S,d.top=x,Reflect.deleteProperty(d,"bottom");return d},showMenu(s,l,c){const d=this.createMenuContainerElement(false);return Reflect.set(d,i.$data.menuDataKey,{child:[]}),i.addMenuLiELement(s,d,d,l,c),u.append(o,d),document.contains(r)||(typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(o,r),u.appendBody(r)),this.handlerShowMenuCSS(d,s),d},showClildMenu(s,l,c,d,p,f){const b=this.createMenuContainerElement(true);Reflect.set(b,i.$data.menuDataKey,{parent:p,root:d}),Reflect.get(d,i.$data.menuDataKey).child.push(b),i.addMenuLiELement(s,d,b,c,f),u.append(o,b);const g=p.closest(".pops-rightClickMenu");return this.handlerShowMenuCSS(b,l,{$menu:g,$parentItem:p}),b},handlerShowMenuCSS(s,l,c){const d=this.getOffset(s,{x:l.clientX,y:l.clientY},c);u.css(s,{...d}),n.isAnimation&&u.addClassName(s,`pops-${t}-anim-show`),n.useScaleAnimation&&(u.removeClassName(s,`pops-${t}-anim-scale-not-open`),u.addClassName(s,`pops-${t}-anim-scale-open`));},addMenuLiELement(s,l,c,d,p){const f=s.target,b=c.querySelector("ul");d.forEach(h=>{const g=u.parseTextToDOM("<li></li>");if(typeof h.icon=="string"&&h.icon.trim()!==""){const S=ie.getIcon(h.icon)??h.icon,T=u.parseTextToDOM(`<i class="pops-${t}-icon" is-loading="${h.iconIsLoading??false}">${S}</i>`);g.appendChild(T);}g.insertAdjacentHTML("beforeend",ee.getSafeHTML(`<span>${h.text}</span>`)),h.item&&Array.isArray(h.item)&&u.addClassName(g,`pops-${t}-item`);let w=false;function A(S){if(S.type==="touchstart"&&(w=true),w&&S.type==="mouseenter")return;Array.from(b.children).forEach(B=>{u.removeClassName(B,`pops-${t}-is-visited`);const z=Reflect.get(B,i.$data.menuDataKey);if(!z)return;function F(X){X&&(X.querySelectorAll("ul li").forEach(K=>{const $=Reflect.get(K,i.$data.menuDataKey);$?.child&&F($.child);}),X.remove());}F(z.child);});const T=Reflect.get(l,i.$data.menuDataKey);for(let B=0;B<T.child.length;B++){const z=T.child[B];o.contains(z)||(T.child.splice(B,1),B--);}if(u.addClassName(g,`pops-${t}-is-visited`),!h.item)return;const x=g.getBoundingClientRect(),E=i.showClildMenu(s,{clientX:x.left+u.outerWidth(g),clientY:x.top},h.item,l,g,p);Reflect.set(g,i.$data.menuDataKey,{child:E});}async function v(S){if(typeof h.callback=="function"){try{er.Object.defineProperty(s,"target",{get(){return f}});}catch{}const T=await h.callback(S,s,g,p);if(typeof T=="boolean"&&T==false)return}Array.from(b.children).forEach(T=>{u.off(T,"mouseenter touchstart");}),i.closeAllMenu(l);}u.on(g,"mouseenter touchstart",A),u.on(g,"click",v),b.appendChild(g);});}};return i.addContextMenuEvent(n.$target,n.targetSelector),i.addWindowCheckClickListener(),{guid:e,config:n,addWindowCheckClickListener:i.addWindowCheckClickListener,removeWindowCheckClickListener:i.removeWindowCheckClickListener,addContextMenuEvent:i.addContextMenuEvent,removeContextMenuEvent:i.removeContextMenuEvent,removeInitEventListener:{contextMenu(){i.removeContextMenuEvent(n.$target,n.targetSelector);},windowClick(){i.removeWindowCheckClickListener();}},PopsContextMenu:i}}},us=()=>{const a=[];for(let e=0;e<10;e++)a.push({value:`测试${e}`,enableDeleteButton:true,deleteButtonClickCallback(t,n,r,o){const i=r.value;return console.log("删除当前项："+i,[t,n,r,o]),true},itemView(t){return `${t.value}-html`},clickCallback(t,n,r,o){const i=e%2===0,s=r.value;return i?console.log("item项的点击回调,更新input内的值："+s,[t,n,r,o,s]):console.log("item项的点击回调："+s,[t,n,r,o,s]),i},selectCallback(t,n,r,o){const i=r.value;console.log("item项的选中回调："+i,[t,n,r,o]);}});return {$target:null,$inputTarget:null,$selfDocument:document,data:a,useShadowRoot:true,className:"",isAbsolute:true,isAnimation:false,useFoldAnimation:true,useArrow:false,width:"250px",maxHeight:"300px",followTargetWidth:true,topDistance:0,position:"auto",positionTopToReverse:true,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:false,followPosition:"target",async inputTargetChangeRefreshShowDataCallback(e,t){return console.log("当前输入框的值是：",e),t.filter(n=>n.value.includes(e))},style:""}},bs={init(a){const e=U.getRandomGUID(),t="searchSuggestion";let n=us();n=U.assign(n,we.getGlobalConfig()),n=U.assign(n,a),n.$inputTarget==null&&(n.$inputTarget=n.$target);const{$shadowContainer:r,$shadowRoot:o}=N.handlerShadow(n);if(N.handleInit(o,[{name:"index",css:j.index},{name:"anim",css:j.anim},{name:"common",css:j.common}]),n.style!=null){const l=u.createElement("style",{type:"text/css",innerHTML:n.style});o.appendChild(l);}const i={capture:true,passive:true},s={selfDocument:n.$selfDocument,$el:{root:null,$dropdownWrapper:null,$dropdownContainer:null,$arrow:null,$dynamicCSS:null},$evt:{offInputChangeEvtHandler:[]},$data:{isEmpty:true,storeNodeHandlerKey:"data-SearchSuggestion"},init(l=document.body||document.documentElement){s.initEl(),s.update(s.getData()),s.updateStyleSheet(),s.hide(),o.appendChild(s.$el.root),l.appendChild(r);},initEl(){s.$el.root=s.createSearchSelectElement(),Reflect.set(s.$el.root,this.$data.storeNodeHandlerKey,s),s.$el.$dynamicCSS=s.$el.root.querySelector("style[data-dynamic]"),s.$el.$dropdownWrapper=s.$el.root.querySelector(`.pops-${t}-search-suggestion-dropdown-wrapper`),s.$el.$dropdownContainer=s.$el.root.querySelector(`ul.pops-${t}-search-suggestion-dropdown-container`),s.$el.$arrow=s.$el.root.querySelector(`.pops-${t}-search-suggestion-arrow`);},getData(){return typeof n.data=="function"?n.data():n.data},setData(l){n.data=l;},createSearchSelectElement(){const l=u.createElement("div",{className:`pops pops-${t}-search-suggestion`,innerHTML:`
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
            <div class="pops-${t}-search-suggestion-dropdown-wrapper">
              <ul class="pops-${t}-search-suggestion-dropdown-container ${pe.userSelectNone}">${n.toSearhNotResultHTML}</ul>
            </div>
            <!-- 箭头 -->
						${n.useArrow?`<div class="pops-${t}-search-suggestion-arrow"></div>`:""}
         				 `},{"data-guid":e,"type-value":t});return n.className!==""&&n.className!=null&&u.addClassName(l,n.className),n.isAnimation&&u.addClassName(l,`pops-${t}-animation`),n.useFoldAnimation&&u.addClassName(l,"el-zoom-in-top-animation"),l},getDynamicCSS(){return `
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
					z-index: ${N.handleZIndex(n.zIndex)};
				}
        .pops-${t}-search-suggestion-dropdown-wrapper{
					max-height: ${n.maxHeight};
					border-radius: 4px;
					box-shadow: 0 1px 6px var(--search-suggestion-box-shadow-color);
					background-color: var(--search-suggestion-bg-color);
					padding: 5px 0;
					overflow-x: hidden;
					overflow-y: auto;
        }
				.pops-${t}-search-suggestion-dropdown-wrapper ul.pops-${t}-search-suggestion-dropdown-container{
					box-sizing: border-box;
				}
				// 建议框在上面时
				.pops-${t}-search-suggestion[data-top-reverse] ul.pops-${t}-search-suggestion-dropdown-container{
					display: flex;
					flex-direction: column-reverse;
				}
				.pops-${t}-search-suggestion[data-top-reverse] ul.pops-${t}-search-suggestion-dropdown-container li{
					flex-shrink: 0;
				}
				ul.pops-${t}-search-suggestion-dropdown-container li{
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
				ul.pops-${t}-search-suggestion-dropdown-container li[data-none]{
					text-align: center;
					font-size: 12px;
					color: var(--search-suggestion-item-none-color);
				}
				ul.pops-${t}-search-suggestion-dropdown-container li:not([data-none]):hover{
					background-color: var(--search-suggestion-item-is-hover-bg-color);
				}
				@media (prefers-color-scheme: dark){
					.pops-${t}-search-suggestion{
						--search-suggestion-bg-color: #1d1e1f;
						--search-suggestion-item-color: #cfd3d4;
						--search-suggestion-item-is-hover-bg-color: rgba(175, 175, 175, .1);
					}
				}
				`},getItemDataValue(l){return l},createSearchItemLiElement(l,c){const d=s.getItemDataValue(l),p=u.createElement("li",{className:`pops-${t}-search-suggestion-dropdown-item`,"data-index":c,"data-value":d});Reflect.set(p,"data-index",c),Reflect.set(p,"data-value",d);const f=l.itemView(l,p,n);typeof f=="string"?ee.setSafeHTML(p,f):u.append(p,f);const b=l.enableDeleteButton;if(typeof b=="boolean"&&b){const h=s.createItemDeleteIcon();u.append(p,h);}return u.addClassName(p,pe.flexCenter),u.addClassName(p,pe.flexYCenter),p},setSearchItemClickEvent(l){u.on(l,"click",async c=>{u.preventEvent(c);const d=c.target,p=s.getData(),f=Reflect.get(l,"data-value");if(!!d.closest(`.pops-${t}-delete-icon`)){if(typeof f.deleteButtonClickCallback=="function"){const h=await f.deleteButtonClickCallback(c,l,f,n);typeof h=="boolean"&&h&&(p.splice(p.indexOf(f),1),l.remove());}s.$el.$dropdownContainer.children.length||s.clear(),s.updateStyleSheet();}else if(typeof f.clickCallback=="function"){const h=await f.clickCallback(c,l,f,n);typeof h=="boolean"&&h&&(n.$inputTarget instanceof HTMLInputElement||n.$inputTarget instanceof HTMLTextAreaElement)&&(n.$inputTarget.value=String(f.value));}},{capture:true});},setSearchItemSelectEvent(l){},setInputChangeEvent(l=i){if(!(n.$inputTarget instanceof HTMLInputElement||n.$inputTarget instanceof HTMLTextAreaElement))return;n.$inputTarget.setAttribute("autocomplete","off");const c=u.onInput(n.$inputTarget,async()=>{const d=s.getData(),p=await n.inputTargetChangeRefreshShowDataCallback(n.$inputTarget.value,d,n);s.update(p),s.updateStyleSheet();},l);s.$evt.offInputChangeEvtHandler.push(c.off);},removeInputChangeEvent(){for(let l=0;l<s.$evt.offInputChangeEvtHandler.length;l++){const c=s.$evt.offInputChangeEvtHandler[l];c(),s.$evt.offInputChangeEvtHandler.splice(l,1),l--;}},showEvent(){s.updateStyleSheet(),n.toHideWithNotResult&&s.$data.isEmpty?s.hide(true):s.show();},setShowEvent(l=i){if(n.followPosition==="target")u.on([n.$target],["focus","click"],void 0,s.showEvent,l);else if(n.followPosition==="input")u.on([n.$inputTarget],["focus","click"],void 0,s.showEvent,l);else if(n.followPosition==="inputCursor")u.on([n.$inputTarget],["focus","click","input"],s.showEvent,l);else throw new Error("未知followPosition："+n.followPosition)},removeShowEvent(l=i){u.off([n.$target,n.$inputTarget],["focus","click"],void 0,s.showEvent,l),u.off([n.$inputTarget],["input"],void 0,s.showEvent,l);},hideEvent(l){if(l.target instanceof Node){if(r.contains(l.target)||n.$target.contains(l.target)||n.$inputTarget.contains(l.target))return;s.hide(true);}},setHideEvent(l=i){Array.isArray(s.selfDocument)?s.selfDocument.forEach(c=>{u.on(c,["click","touchstart"],void 0,s.hideEvent,l);}):u.on(s.selfDocument,["click","touchstart"],s.hideEvent,l);},removeHideEvent(l=i){Array.isArray(s.selfDocument)?s.selfDocument.forEach(c=>{u.off(c,["click","touchstart"],void 0,s.hideEvent,l);}):u.off(s.selfDocument,["click","touchstart"],void 0,s.hideEvent,l);},setAllEvent(l=i){s.setInputChangeEvent(l),s.setHideEvent(l),s.setShowEvent(l);},removeAllEvent(l=i){s.removeInputChangeEvent(),s.removeHideEvent(l),s.removeShowEvent(l);},createItemDeleteIcon(l=16,c="#bababa"){return u.parseTextToDOM(`
					<svg class="pops-${t}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" fill="${c}">
						<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
						<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
					</svg>
        			`)},setPromptsInSearch(){const l=u.createElement("li",{className:`pops-${t}-search-suggestion-dropdown-searching-item`,innerHTML:n.searchingTip});s.addItem(l);},removePromptsInSearch(){s.$el.$dropdownContainer.querySelector(`li.pops-${t}-search-suggestion-dropdown-searching-item`)?.remove();},changeHintULElementPosition(l=n.$target??n.$inputTarget,c=true){let d=null;if(n.followPosition==="inputCursor"?d=u.getTextBoundingRect(n.$inputTarget,n.$inputTarget.selectionStart||0,n.$inputTarget.selectionEnd||0,false):d=n.isAbsolute?u.offset(l):l.getBoundingClientRect(),d==null)return;let p=document.documentElement.clientHeight;n.isAbsolute&&(p=u.height(document));const f=u.width(document),b=n.useArrow?u.height(s.$el.$arrow):0;let h=n.position;if(n.position==="auto"){const A=d.bottom,v=u.height(s.$el.$dropdownWrapper)+b;A+v>p?h="top":h="bottom";}if(h==="top"){n.positionTopToReverse&&s.$el.root.setAttribute("data-top-reverse","true"),n.useFoldAnimation&&s.$el.root.setAttribute("data-popper-placement","top");const A=p-d.top+n.topDistance+b;s.$el.root.style.top="",s.$el.root.style.bottom=A+"px";}else if(h==="bottom"){n.useFoldAnimation&&s.$el.root.setAttribute("data-popper-placement","bottom-center");const A=d.height+d.top+n.topDistance+b;s.$el.root.removeAttribute("data-top-reverse"),s.$el.root.style.bottom="",s.$el.root.style.top=A+"px";}let g=d.left;const w=u.width(s.$el.$dropdownWrapper);w>f&&(g=g+f-w),s.$el.root.style.left=g+"px",c&&s.changeHintULElementPosition(l,!c);},changeHintULElementWidth(l=n.$target??n.$inputTarget){const c=l.getBoundingClientRect();n.followTargetWidth?s.$el.$dropdownWrapper.style.width=c.width+"px":s.$el.$dropdownWrapper.style.width=n.width;},updateDynamicCSS(){const l=s.getDynamicCSS();ee.setSafeHTML(s.$el.$dynamicCSS,l);},updateStyleSheet(){s.updateDynamicCSS(),s.changeHintULElementWidth(),s.changeHintULElementPosition();},addItem(l){s.$el.$dropdownContainer.appendChild(l);},update(l=[]){if(!Array.isArray(l))throw new TypeError("传入的数据不是数组");const c=l;if(c.length){s.$data.isEmpty=false,n.toHideWithNotResult&&s.show(),s.clear(true);const d=document.createDocumentFragment();c.forEach((p,f)=>{const b=s.createSearchItemLiElement(p,f);s.setSearchItemClickEvent(b),s.setSearchItemSelectEvent(b),d.appendChild(b);}),s.addItem(d);}else s.clear();},clear(l=false){if(ee.setSafeHTML(s.$el.$dropdownContainer,""),l)return;s.$data.isEmpty=true;let c;typeof n.toSearhNotResultHTML=="string"?c=u.parseTextToDOM(n.toSearhNotResultHTML):c=n.toSearhNotResultHTML(),s.addItem(c),n.toHideWithNotResult&&s.hide();},hide(l=false){n.useFoldAnimation?(l||u.removeClassName(s.$el.root,"el-zoom-in-top-animation"),u.addClassName(s.$el.root,"el-zoom-in-top-animation"),u.addClassName(s.$el.root,"el-zoom-in-top-animation-hide"),u.removeClassName(s.$el.root,"el-zoom-in-top-animation-show")):s.$el.root.style.display="none";},show(){s.$el.root.style.display="",n.useFoldAnimation&&(u.addClassName(s.$el.root,"el-zoom-in-top-animation"),u.removeClassName(s.$el.root,"el-zoom-in-top-animation-hide"),u.addClassName(s.$el.root,"el-zoom-in-top-animation-show"));}};return s}},hs="3.1.2";class nn{config={version:hs,cssText:j,iconSVG:ie.$data,animation:at.$data,instData:me,forbiddenScroll:{event(e){return u.preventEvent(e)}},Utils:U,DOMUtils:u,InstanceUtils:be,MathFloatUtils:wt,PanelHandlerComponents:hr};init(){}noConflict(){return typeof Y.globalThis.pops=="object"&&U.delete(Y.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&U.delete(unsafeWindow,"pops"),new nn}isPhone(e){return U.isPhone(e)}GlobalConfig=we;alert=e=>qt.init(e);confirm=e=>Qa.init(e);prompt=e=>ps.init(e);loading=e=>Gt.init(e);iframe=e=>os.init(e);tooltip=e=>br.init(e);drawer=e=>Za.init(e);folder=e=>ns.init(e);panel=e=>ls.init(e);rightClickMenu=e=>fs.init(e);searchSuggestion=e=>bs.init(e)}const It=new nn,ms=a=>(e,t)=>(a.set(e,t),t),On=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,mr=536870912,Pn=mr*2,gs=(a,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<Pn?n+1:0;if(!t.has(r))return a(t,r);if(t.size<mr){for(;t.has(r);)r=Math.floor(Math.random()*Pn);return a(t,r)}if(t.size>On)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*On);return a(t,r)},gr=new WeakMap,ys=ms(gr),rn=gs(ys,gr),ws=a=>typeof a.start=="function",Dn=new WeakMap,xs=a=>({...a,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return Dn.set(n,r),n},disconnect:({call:e})=>async t=>{const n=Dn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Ht=new WeakMap,vs=a=>{if(Ht.has(a))return Ht.get(a);const e=new Map;return Ht.set(a,e),e},As=a=>{const e=xs(a);return t=>{const n=vs(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}})),ws(t)&&t.start();const r=(s,l=null,c=[])=>new Promise((d,p)=>{const f=rn(n);n.set(f,{reject:p,resolve:d}),l===null?t.postMessage({id:f,method:s},c):t.postMessage({id:f,method:s,params:l},c);}),o=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:r,notify:o})};return {...i}}},Ss=a=>e=>t=>{typeof a.get(t)=="symbol"&&(a.set(t,null),e(t).then(()=>{a.delete(t);}));},Ts=a=>e=>t=>{typeof a.get(t)=="symbol"&&(a.set(t,null),e(t).then(()=>{a.delete(t);}));},Cs=(a,e)=>t=>(n,r=0,...o)=>{const i=Symbol(),s=a(e);e.set(s,i);const l=()=>t(r,s).then(()=>{const c=e.get(s);if(c===void 0)throw new Error("The timer is in an undefined state.");c===i&&(n(...o),e.get(s)===i&&l());});return l(),s},ks=(a,e)=>t=>(n,r=0,...o)=>{const i=Symbol(),s=a(e);return e.set(s,i),t(r,s).then(()=>{const l=e.get(s);if(l===void 0)throw new Error("The timer is in an undefined state.");l===i&&(e.delete(s),n(...o));}),s},yr=new Map([[0,null]]),wr=new Map([[0,null]]),$s=Ss(yr),Es=Ts(wr),Ms=Cs(rn,yr),Ls=ks(rn,wr),Is=As({clearInterval:({call:a})=>$s(e=>a("clear",{timerId:e,timerType:"interval"})),clearTimeout:({call:a})=>Es(e=>a("clear",{timerId:e,timerType:"timeout"})),setInterval:({call:a})=>Ms((e,t)=>a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:t,timerType:"interval"})),setTimeout:({call:a})=>Ls((e,t)=>a("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:t,timerType:"timeout"}))}),_s=a=>{const e=new Worker(a);return Is(e)},Rs=(a,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=a(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},Ns=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,_t=Rs(_s,Ns),Os=a=>_t().clearInterval(a),Ps=a=>_t().clearTimeout(a),Ds=(...a)=>_t().setInterval(...a),Bs=(...a)=>_t().setTimeout(...a),Hs="2.9.10";const Vs=function(){const a="1.4.8",e={hookFns:[],filters:[]},t=window.unsafeWindow||document.defaultView||window;let n=t.__ajaxHooker;const r=t.Response.prototype,o=["response","responseText","responseXML"],i=["arrayBuffer","blob","formData","json","text"],s=["responseType","timeout","withCredentials"],l=["cache","credentials","integrity","keepalive","mode","priority","redirect","referrer","referrerPolicy","signal"],c=["readystatechange","load","loadend"],d={}.toString.call.bind({}.toString),p=Object.getOwnPropertyDescriptor.bind(Object),f=()=>{},b=C=>console.error(C);function h(C){return C&&["object","function"].includes(typeof C)&&typeof C.then=="function"}function g(C,...y){try{const k=C(...y);return h(k)?k.then(null,b):k}catch(k){console.error(k);}}function w(C,y,k,P){Object.defineProperty(C,y,{configurable:true,enumerable:true,get:k,set:P});}function A(C,y,k=C[y]){w(C,y,()=>k,f);}function v(C,y,k=C[y]){Object.defineProperty(C,y,{configurable:true,enumerable:true,writable:true,value:k});}function S(C){const y={};switch(d(C)){case "[object String]":for(const k of C.trim().split(/[\r\n]+/)){const[P,_]=k.split(new RegExp("(?<=^[^:]+)\\s*:\\s*"));if(!_)continue;const O=P.toLowerCase();y[O]=O in y?`${y[O]}, ${_}`:_;}break;case "[object Headers]":for(const[k,P]of C)y[k]=P;break;case "[object Object]":return {...C}}return y}function T(){this.ajaxHooker_isStopped=true;}class x{then(y){return y&&y(),new x}}class E{constructor(y){this.request=y,this.requestClone={...this.request};}_recoverRequestKey(y){y in this.requestClone?this.request[y]=this.requestClone[y]:delete this.request[y];}shouldFilter(y){const{type:k,url:P,method:_,async:O}=this.request;return y.length&&!y.find(Q=>{switch(true){case(Q.type&&Q.type!==k):case(d(Q.url)==="[object String]"&&!P.includes(Q.url)):case(d(Q.url)==="[object RegExp]"&&!Q.url.test(P)):case(Q.method&&Q.method.toUpperCase()!==_.toUpperCase()):case("async"in Q&&Q.async!==O):return  false}return  true})}waitForRequestKeys(){if(!this.request.async)return t.__ajaxHooker.hookInsts.forEach(({hookFns:P,filters:_})=>{if(!this.shouldFilter(_)){P.forEach(O=>{d(O)==="[object Function]"&&g(O,this.request);});for(const O in this.request)h(this.request[O])&&this._recoverRequestKey(O);}}),new x;const y=[],k=new Set(["type","async","response"]);return t.__ajaxHooker.hookInsts.forEach(({hookFns:P,filters:_})=>{this.shouldFilter(_)||y.push(Promise.all(P.map(O=>g(O,this.request))).then(()=>{const O=[];for(const Q in this.request)!k.has(Q)&&O.push(Q);return Promise.all(O.map(Q=>Promise.resolve(this.request[Q]).then(H=>this.request[Q]=H,()=>this._recoverRequestKey(Q))))}));}),Promise.all(y)}waitForResponseKeys(y){const k=this.request.type==="xhr"?o:i;return this.request.async?Promise.resolve(g(this.request.response,y)).then(()=>Promise.all(k.map(P=>{const _=p(y,P);if(_&&"value"in _)return Promise.resolve(_.value).then(O=>y[P]=O,()=>delete y[P]);delete y[P];}))):(d(this.request.response)==="[object Function]"&&(g(this.request.response,y),k.forEach(P=>{("get"in p(y,P)||h(y[P]))&&delete y[P];})),new x)}}const B={get(C,y){const k=p(C,y);if(k&&!k.configurable&&!k.writable&&!k.get)return C[y];const P=C.__ajaxHooker;if(P&&P.proxyProps){if(y in P.proxyProps){const _=P.proxyProps[y];return "get"in _?_.get():typeof _.value=="function"?_.value.bind(P):_.value}if(typeof C[y]=="function")return C[y].bind(C)}return C[y]},set(C,y,k){const P=p(C,y);if(P&&!P.configurable&&!P.writable&&!P.set)return  true;const _=C.__ajaxHooker;if(_&&_.proxyProps&&y in _.proxyProps){const O=_.proxyProps[y];O.set?O.set(k):O.value=k;}else C[y]=k;return  true}};class z{constructor(y){const k=this;Object.assign(k,{originalXhr:y,proxyXhr:new Proxy(y,B),resThenable:new x,proxyProps:{},proxyEvents:{}}),y.addEventListener("readystatechange",P=>{if(k.proxyXhr.readyState===4&&k.request&&typeof k.request.response=="function"){const _={finalUrl:k.proxyXhr.responseURL,status:k.proxyXhr.status,responseHeaders:S(k.proxyXhr.getAllResponseHeaders())},O={};for(const Q of o){try{O[Q]=k.originalXhr[Q];}catch{}w(_,Q,()=>_[Q]=O[Q],H=>{delete _[Q],_[Q]=H;});}k.resThenable=new E(k.request).waitForResponseKeys(_).then(()=>{for(const Q of o)k.proxyProps[Q]={get:()=>(Q in _||(_[Q]=O[Q]),_[Q])};});}k.dispatchEvent(P);}),y.addEventListener("load",P=>k.dispatchEvent(P)),y.addEventListener("loadend",P=>k.dispatchEvent(P));for(const P of c){const _="on"+P;k.proxyProps[_]={get:()=>k.proxyEvents[_]||null,set:O=>k.addEvent(_,O)};}for(const P of ["setRequestHeader","addEventListener","removeEventListener","open","send"])k.proxyProps[P]={value:k[P]};}toJSON(){}addEvent(y,k){if(y.startsWith("on"))this.proxyEvents[y]=typeof k=="function"?k:null;else {if(typeof k=="object"&&k!==null&&(k=k.handleEvent),typeof k!="function")return;this.proxyEvents[y]=this.proxyEvents[y]||new Set,this.proxyEvents[y].add(k);}}removeEvent(y,k){y.startsWith("on")?this.proxyEvents[y]=null:(typeof k=="object"&&k!==null&&(k=k.handleEvent),this.proxyEvents[y]&&this.proxyEvents[y].delete(k));}dispatchEvent(y){if(y.stopImmediatePropagation=T,w(y,"target",()=>this.proxyXhr),w(y,"currentTarget",()=>this.proxyXhr),w(y,"srcElement",()=>this.proxyXhr),this.proxyEvents[y.type]&&this.proxyEvents[y.type].forEach(P=>{this.resThenable.then(()=>!y.ajaxHooker_isStopped&&P.call(this.proxyXhr,y));}),y.ajaxHooker_isStopped)return;const k=this.proxyEvents["on"+y.type];k&&this.resThenable.then(k.bind(this.proxyXhr,y));}setRequestHeader(y,k){if(this.originalXhr.setRequestHeader(y,k),!this.request)return;const P=this.request.headers;P[y]=y in P?`${P[y]}, ${k}`:k;}addEventListener(...y){c.includes(y[0])?this.addEvent(y[0],y[1]):this.originalXhr.addEventListener(...y);}removeEventListener(...y){c.includes(y[0])?this.removeEvent(y[0],y[1]):this.originalXhr.removeEventListener(...y);}open(y,k,P=true,..._){return this.request={type:"xhr",url:k.toString(),method:y.toUpperCase(),abort:false,headers:{},data:null,response:null,async:!!P},this.openArgs=_,this.resThenable=new x,["responseURL","readyState","status","statusText",...o].forEach(O=>{delete this.proxyProps[O];}),this.originalXhr.open(y,k,P,..._)}send(y){const k=this,P=k.originalXhr,_=k.request;if(!_)return P.send(y);_.data=y,new E(_).waitForRequestKeys().then(()=>{if(_.abort)typeof _.response=="function"&&(Object.assign(k.proxyProps,{responseURL:{value:_.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),c.forEach(O=>P.dispatchEvent(new Event(O))));else {P.open(_.method,_.url,_.async,...k.openArgs);for(const O in _.headers)P.setRequestHeader(O,_.headers[O]);for(const O of s)O in _&&(P[O]=_[O]);P.send(_.data);}});}}function F(){const C=new n.realXHR;return "__ajaxHooker"in C&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),C.__ajaxHooker=new z(C),C.__ajaxHooker.proxyXhr}F.prototype=t.XMLHttpRequest.prototype,Object.keys(t.XMLHttpRequest).forEach(C=>F[C]=t.XMLHttpRequest[C]);function X(C,y={}){return C?new Promise(async(k,P)=>{const _={};if(d(C)==="[object Request]"){_.method=C.method,_.headers=C.headers,C.body&&(_.body=await C.arrayBuffer());for(const H of l)_[H]=C[H];C=C.url;}C=C.toString(),Object.assign(_,y),_.method=_.method||"GET",_.headers=_.headers||{};const O={type:"fetch",url:C,method:_.method.toUpperCase(),abort:false,headers:S(_.headers),data:_.body,response:null,async:true},Q=new E(O);if(await Q.waitForRequestKeys(),O.abort){if(typeof O.response=="function"){const H={finalUrl:O.url,status:200,responseHeaders:{}};await Q.waitForResponseKeys(H);const R=i.find(J=>J in H);let q=H[R];R==="json"&&typeof q=="object"&&(q=g(JSON.stringify.bind(JSON),q));const ne=new Response(q,{status:200,statusText:"OK"});w(ne,"type",()=>"basic"),w(ne,"url",()=>O.url),k(ne);}else P(new DOMException("aborted","AbortError"));return}_.method=O.method,_.headers=O.headers,_.body=O.data;for(const H of l)H in O&&(_[H]=O[H]);n.realFetch.call(t,O.url,_).then(H=>{if(typeof O.response=="function"){const R={finalUrl:H.url,status:H.status,responseHeaders:S(H.headers)};H.ok?i.forEach(q=>H[q]=function(){return q in R?Promise.resolve(R[q]):r[q].call(this).then(ne=>(R[q]=ne,Q.waitForResponseKeys(R).then(()=>q in R?R[q]:ne)))}):g(O.response,R);}k(H);},P);}):n.realFetch.call(t,C,y)}function K(){const C=Object.getOwnPropertyDescriptors(this),y=n.realFetchClone.call(this);return Object.defineProperties(y,C),y}n=t.__ajaxHooker=n||{version:a,fakeXHR:F,fakeFetch:X,fakeFetchClone:K,realXHR:t.XMLHttpRequest,realFetch:t.fetch,realFetchClone:r.clone,hookInsts:new Set},n.version!==a&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),t.XMLHttpRequest=n.fakeXHR,t.fetch=n.fakeFetch,r.clone=n.fakeFetchClone,n.hookInsts.add(e);class $ extends Function{call(y,...k){return y&&y.__ajaxHooker&&y.__ajaxHooker.proxyXhr===y&&(y=y.__ajaxHooker.originalXhr),Reflect.apply(this,y,k)}apply(y,k){return y&&y.__ajaxHooker&&y.__ajaxHooker.proxyXhr===y&&(y=y.__ajaxHooker.originalXhr),Reflect.apply(this,y,k||[])}}function M(C){Object.setPrototypeOf(C.nativeXMLHttpRequestSetRequestHeader,$.prototype),Object.setPrototypeOf(C.nativeXMLHttpRequestOpen,$.prototype),Object.setPrototypeOf(C.nativeXMLHttpRequestSend,$.prototype);}return t.secsdk?t.secsdk.csrf&&t.secsdk.csrf.nativeXMLHttpRequestOpen&&M(t.secsdk.csrf):w(t,"secsdk",f,C=>{delete t.secsdk,t.secsdk=C,w(C,"csrf",f,y=>{delete C.csrf,C.csrf=y,y.nativeXMLHttpRequestOpen&&M(y);});}),{hook:C=>e.hookFns.push(C),filter:C=>{Array.isArray(C)&&(e.filters=C);},protect:()=>{A(t,"XMLHttpRequest",n.fakeXHR),A(t,"fetch",n.fakeFetch),A(r,"clone",n.fakeFetchClone);},unhook:()=>{n.hookInsts.delete(e),n.hookInsts.size||(v(t,"XMLHttpRequest",n.realXHR),v(t,"fetch",n.realFetch),v(r,"clone",n.realFetchClone),delete t.__ajaxHooker);}}},Us=function(){return (function(){const a=window.unsafeWindow||document.defaultView||window,e=[],t=a.XMLHttpRequest,n=a.Response.prototype,r=Object.prototype.toString,o=a.fetch,i=["response","responseText","responseXML"],s=["arrayBuffer","blob","formData","json","text"],l=["readystatechange","load","loadend"];let c;function d(){}function p($){console.error($);}function f($,M,C,y){Object.defineProperty($,M,{configurable:true,enumerable:true,get:C,set:y});}function b($,M,C=$[M]){f($,M,()=>C,d);}function h($,M,C=$[M]){Object.defineProperty($,M,{configurable:true,enumerable:true,writable:true,value:C});}function g($){return {type:$.type,url:$.url,method:$.method&&$.method.toUpperCase()}}function w($,M,C){return c&&!c.find(y=>(!y.type||y.type===$)&&(!y.url||(r.call(y.url)==="[object String]"?M.includes(y.url):y.url.test(M)))&&(!y.method||y.method===C.toUpperCase()))}function A($,M){let C,y=$;for(;y;){const k=Object.getOwnPropertyDescriptor(y,M);if(C=k&&k.get,C)break;y=Object.getPrototypeOf(y);}return C?C.bind($):d}function v($){return Promise.all(e.map(M=>Promise.resolve(M($)).then(d,p)))}function S($,M){return Promise.all(["url","method","abort","headers","data"].map(C=>Promise.resolve($[C]).then(y=>$[C]=y,()=>$[C]=M[C])))}function T(){this.ajaxHooker_stopped=true;}function x($){const M=$.target;$.stopImmediatePropagation=T,M.__ajaxHooker.hookedEvents[$.type].forEach(y=>!$.ajaxHooker_stopped&&y.call(M,$));const C=M.__ajaxHooker.hookedEvents["on"+$.type];typeof C=="function"&&C.call(M,$);}function E($){$.target.readyState===4?$.target.dispatchEvent(new CustomEvent("ajaxHooker_responseReady",{detail:$})):$.target.__ajaxHooker.delegateEvent($);}function B($){$.target.__ajaxHooker.delegateEvent($);}function z($,M,...C){const y=this.__ajaxHooker;return y.url=M.toString(),y.method=$.toUpperCase(),y.openArgs=C,y.headers={},y.originalMethods.open($,M,...C)}function F(){const $=new t;let M=$.__ajaxHooker;if(!M){M=$.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:x,originalGetters:{},originalMethods:{}},$.addEventListener("readystatechange",E),$.addEventListener("load",B),$.addEventListener("loadend",B);for(const y of i)M.originalGetters[y]=A($,y);for(const y of ["open","setRequestHeader","addEventListener","removeEventListener"])M.originalMethods[y]=$[y].bind($);$.open=z,$.setRequestHeader=(y,k)=>{M.originalMethods.setRequestHeader(y,k),$.readyState===1&&(M.headers[y]?M.headers[y]+=", "+k:M.headers[y]=k);},$.addEventListener=function(...y){l.includes(y[0])?M.hookedEvents[y[0]].add(y[1]):M.originalMethods.addEventListener(...y);},$.removeEventListener=function(...y){l.includes(y[0])?M.hookedEvents[y[0]].delete(y[1]):M.originalMethods.removeEventListener(...y);},l.forEach(y=>{const k="on"+y;f($,k,()=>M.hookedEvents[k]||null,P=>{M.hookedEvents[k]=typeof P=="function"?P:null;});});}const C=$.send.bind($);return $.send=function(y){if($.readyState!==1)return C(y);if(M.delegateEvent=x,i.forEach(k=>{delete $[k];}),w("xhr",M.url,M.method))return $.addEventListener("ajaxHooker_responseReady",k=>{M.delegateEvent(k.detail);}),C(y);try{const k={type:"xhr",url:M.url,method:M.method,abort:!1,headers:M.headers,data:y,response:null},P={...k};v(k).then(()=>{S(k,P).then(()=>{if(!k.abort){M.originalMethods.open(k.method,k.url,...M.openArgs);for(const _ in k.headers)M.originalMethods.setRequestHeader(_,k.headers[_]);y=k.data,$.addEventListener("ajaxHooker_responseReady",_=>{try{if(typeof k.response=="function"){const O={finalUrl:$.responseURL,status:$.status,responseHeaders:{}};for(const R of $.getAllResponseHeaders().trim().split(/[\r\n]+/)){const q=R.split(/:\s*/);if(q.length===2){const ne=q[0].toLowerCase();O.responseHeaders[ne]?O.responseHeaders[ne]+=", "+q[1]:O.responseHeaders[ne]=q[1];}}i.forEach(R=>{f(O,R,()=>O[R]=M.originalGetters[R](),q=>{delete O[R],O[R]=q;}),f($,R,()=>{const q=M.originalGetters[R]();return $.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:R,val:q}})),q});}),$.addEventListener("ajaxHooker_readResponse",R=>{O[R.detail.prop]=R.detail.val;});const Q=Promise.resolve(k.response(O)).then(()=>{const R=[];return i.forEach(q=>{const ne=Object.getOwnPropertyDescriptor(O,q);ne&&"value"in ne&&R.push(Promise.resolve(ne.value).then(J=>{O[q]=J,f($,q,()=>($.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:q,val:J}})),J));},d));}),Promise.all(R)},p),H={};l.forEach(R=>{H[R]=new Set([...M.hookedEvents[R]]),H["on"+R]=M.hookedEvents["on"+R];}),M.delegateEvent=R=>Q.then(()=>{R.stopImmediatePropagation=T,H[R.type].forEach(ne=>!R.ajaxHooker_stopped&&ne.call($,R));const q=H["on"+R.type];typeof q=="function"&&q.call($,R);});}}catch(O){console.error(O);}M.delegateEvent(_.detail);}),C(y);}});});}catch(k){console.error(k),C(y);}},$}function X($,M,C){s.forEach(y=>{$[y]=()=>new Promise((k,P)=>{n[y].call($).then(_=>{if(y in M)k(M[y]);else try{M[y]=_,Promise.resolve(C(M)).then(()=>{y in M?Promise.resolve(M[y]).then(O=>k(M[y]=O),()=>k(_)):k(_);},p);}catch(O){console.error(O),k(_);}},P);});});}function K($,M){if($&&typeof $.toString=="function"){if($=$.toString(),M=M||{},M.method=M.method||"GET",M.headers=M.headers||{},w("fetch",$,M.method))return o.call(a,$,M);const C={type:"fetch",url:$,method:M.method.toUpperCase(),abort:false,headers:{},data:M.body,response:null};if(r.call(M.headers)==="[object Headers]")for(const[k,P]of M.headers)C.headers[k]=P;else C.headers={...M.headers};const y={...C};return new Promise((k,P)=>{try{v(C).then(()=>{S(C,y).then(()=>{if(C.abort)return P("aborted");$=C.url,M.method=C.method,M.headers=C.headers,M.body=C.data,o.call(a,$,M).then(_=>{if(typeof C.response=="function"){const O={finalUrl:_.url,status:_.status,responseHeaders:{}};for(const[Q,H]of _.headers)O.responseHeaders[Q]=H;X(_,O,C.response),_.clone=()=>{const Q=n.clone.call(_);return X(Q,O,C.response),Q};}k(_);},P);});});}catch(_){return console.error(_),o.call(a,$,M)}})}else return o.call(a,$,M)}return a.XMLHttpRequest=F,Object.keys(t).forEach($=>F[$]=t[$]),F.prototype=t.prototype,a.fetch=K,{hook:$=>e.push($),filter:$=>{c=Array.isArray($)&&$.map(g);},protect:()=>{b(a,"XMLHttpRequest",F),b(a,"fetch",K);},unhook:()=>{h(a,"XMLHttpRequest",t),h(a,"fetch",o);}}})()};class zs{isHex(e){return !(typeof e!="string"||!e.match(/^(#|)[0-9a-fA-F]{6}$/))}hexToRgba(e,t){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);return e&&e.replace(/\s+/g,"").length===7?`rgba(${parseInt(`0x${e.slice(1,3)}`)},${parseInt(`0x${e.slice(3,5)}`)},${parseInt(`0x${e.slice(5,7)}`)},${t})`:""}hexToRgb(e){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);e=e.replace("#","");const t=e.match(/../g);for(let n=0;n<3;n++){const r=parseInt(t[n],16);Reflect.set(t,n,r);}return t}rgbToHex(e,t,n){const r=/^\d{1,3}$/;if(!r.test(e.toString())||!r.test(t.toString())||!r.test(n.toString()))throw new TypeError("输入错误的rgb颜色值");const o=[e.toString(16),t.toString(16),n.toString(16)];for(let i=0;i<3;i++)o[i].length==1&&(o[i]=`0${o[i]}`);return `#${o.join("")}`}getDarkColor(e,t){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);if(typeof t!="number"&&(t=Number(t)),isNaN(t))throw new TypeError(`输入错误的level：${t}`);const n=this.hexToRgb(e);for(let r=0;r<3;r++){const o=n[r],i=Math.floor(Number(o)*(1-t));Reflect.set(n,r,i);}return this.rgbToHex(n[0],n[1],n[2])}getLightColor(e,t){if(!this.isHex(e))throw new TypeError(`输入错误的hex：${e}`);if(typeof t!="number"&&(t=Number(t)),isNaN(t))throw new TypeError(`输入错误的level：${t}`);const n=this.hexToRgb(e);for(let r=0;r<3;r++){const o=Number(n[r]),i=Math.floor(255-o*t+o);Reflect.set(n,r,i);}return this.rgbToHex(n[0],n[1],n[2])}}const St=function(...a){let e=null,t=null,n=()=>{},r={log:true};const o={config(s){return r=Object.assign(r,s),o},error(s){return n=s,o},run(s,l){e=s,t=l||this;const c=i(e,n,t);return c!==void 0?c:o}};function i(s,l,c){let d;try{typeof s=="string"?d=new Function(s).apply(c,a):d=s.apply(c,a);}catch(p){r.log&&(s=s,console.log(`%c ${s?.name?s?.name:`${s}`} `,"color: #f20000"),console.log(`%c ${p}`,"color: #f20000"),console.trace(s)),l&&(typeof l=="string"?d=new Function(l).apply(c,[...a,p]):d=l.apply(c,[...a,p]));}return d}return o};let Fs=class{assign(e={},t={},n=false){const r=this;if(Array.isArray(t)&&!t.filter(s=>typeof s=="object").length)return t;if(t==null)return e;e==null&&(e={});let o;n?o=t:o=e;for(const i in o){if(!n&&!(i in t))continue;const s=Reflect.get(e,i),l=Reflect.get(t,i);if(typeof l=="object"&&l!=null&&i in e&&!r.isDOM(l)){let c;Array.isArray(l)?(Array.isArray(s)&&(s.length=0),c=l):c=r.assign(s,l,n),Reflect.set(e,i,c);}else Reflect.set(e,i,l);}return e}isNull(...e){let t=true;const n=[...e];for(const r of n){let o=false;if(r==null)o=true;else switch(typeof r){case "object":typeof r[Symbol.iterator]=="function"?o=r.length===0:o=Object.keys(r).length===0;break;case "number":o=r===0;break;case "string":o=r.trim()===""||r==="null"||r==="undefined";break;case "boolean":o=!r;break;case "function":{o=!!r.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}}t=t&&o;}return t}isDOM(e){return e instanceof Node}isNotNull(...e){return !this.isNull.apply(this,e)}deepClone(e){const t=this;if(e===void 0)return;if(e===null)return null;const n=e instanceof Array?[]:{};for(const[r,o]of Object.entries(e))typeof o=="object"?Reflect.set(n,r,t.deepClone(o)):Reflect.set(n,r,o);return n}coverObjectFunctionThis(e,t){if(typeof e!="object"||e===null)throw new Error("target must be object");t=t||e,Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(t));});}toJSON(e,t){let n={};return e==null?n:typeof e=="object"?e:(St().config({log:false}).error(()=>{St().error(()=>{try{n=new Function(`return ${e}`)();}catch(r){typeof t=="function"&&t(r);}}).run(()=>{e&&/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?n=new Function(`return ${e}`)():typeof t=="function"&&t(new Error("target is not JSON object"));});}).run(()=>{e=e.trim(),n=JSON.parse(e);}),n)}};const oe=new Fs;class js{items;constructor(...e){if(this.items=new Map,e.length===1){const t=e[0];if(Array.isArray(t))for(let n=0;n<t.length;n++){const r=t[n];if(Array.isArray(r)){const[o,i]=r;this.set(o,i);}}else if(typeof t=="object"&&t!=null)for(const n in t)Reflect.has(t,n)&&this.set(n,t[n]);}else if(e.length===2){const[t,n]=e;this.set(t,n);}}get length(){return this.size()}get entries(){const e=this;return function*(){const t=e.keys();for(const n of t)yield [n,e.get(n)];}}get[Symbol.iterator](){return ()=>this.entries()}has(e){return this.items.has(e)}get(e){return this.items.get(e)}set(e,t){if(e===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为undefined");this.items.set(e,t);}delete(e){return this.has(e)?this.items.delete(e):false}keys(){const e=this.items.keys();return typeof e.toArray=="function"?e.toArray():[...e]}values(){const e=this.items.values();return typeof e.toArray=="function"?e.toArray():[...e]}clear(){this.items.clear();}size(){return this.items.size}getItems(){return this.items}concat(e){e.forEach((t,n)=>{this.items.set(n,t);});}forEach(e){this.items.forEach((t,n)=>{e(t,n,this);});}startsWith(e){const t=this.keys();for(const n of t)if(String(n).startsWith(e))return  true;return  false}getStartsWith(e){let t;const n=this.keys();for(const r of n)if(String(r).startsWith(String(e))){t=this.get(r);break}return t}}class xr{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis==null&&(e.globalThis=e.window),e.self==null&&(e.self=e.window)),e||(e=Object.assign({},this.defaultApi)),this.api=Object.assign({},e);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get setInterval(){return this.api.setInterval}get clearTimeout(){return this.api.clearTimeout}get clearInterval(){return this.api.clearInterval}}class qs{windowApi;constructor(e){this.windowApi=new xr(e);}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){if(t=t||this.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(t.querySelectorAll(e)).filter(r=>r?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const o=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(i=>(i?.textContent||i?.innerText)?.includes(o))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const i=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let s="";i&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);const l=new RegExp(o,s);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let o=e?.textContent||e?.innerText;return typeof o!="string"&&(o=""),e.matches(t)&&o?.includes(r)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);const s=new RegExp(r,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(s)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");const n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){const r=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");const o=e?.closest(t);if(o){const i=e?.textContent||e?.innerText;if(typeof i=="string"&&i.includes(r))return o}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let r=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2];const o=r.match(/("|'),[\s]*("|')([igm]{0,3})$/i);let i="";o&&(r=r.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=o[3]);const s=new RegExp(r,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");const l=e?.closest(t);if(l){const c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return e?.closest(t)}}const Gs=new qs;class Ws{#e;#t={};#r={};constructor(){const e=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364");let t=0;this.#e=e.match(/..../g);for(let n=129;n<=254;n++)for(let r=64;r<=254;r++)this.#t[this.#e[t++]]=`%${n.toString(16)}%${r.toString(16)}`.toUpperCase();for(const n in this.#t){const r=Reflect.get(this.#t,n);Reflect.set(this.#r,r,n);}}handleText(e){return e=e.replace(/#(\d+)\$/g,function(t,n){return Array(+n+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(t,n,r){return r.replace(/../g,function(o){return o!="##"?n+o:o})}),e}isAscii(e){return e<=127&&e>=0}encode(e){const t=this;return [...e].reduce((r,o)=>r+n(o),"");function n(r){let o="";for(let i=0;i<r.length;i++){const s=r.codePointAt(i),l=String.fromCodePoint(s);let c=s.toString(16);if(c.length!=4&&(c=`000${c}`.match(/....$/)?.[0]),i+=l.length-1,t.isAscii(s)){o+=encodeURIComponent(l);continue}if(t.#t[c]){o+=t.#t[c];continue}o+=n(`&#${s};`);}return o}}decode(e){const t=/%[0-9A-F]{2}%[0-9A-F]{2}/,n=/%[0-9A-F]{2}/;let r=true;const o=this;for(;r;){const i=e.match(t),s=e.match(n);r=!!s,i&&i in o.#r?e=e.replace(i,String.fromCharCode(`0x${o.#r[i]}`)):e=e.replace(s,decodeURIComponent(s));}return e}}class Ks{initEnv(){Function.prototype.hook=function(e,t,n){let r=null,o=null;if(r=n||window,o=i(this),r[`realFunc_${o}`]=this,r[o].prototype&&r[o].prototype.isHooked)return console.log("Already has been hooked,unhook first"),false;function i(s){const l=s.toString(),c=/function\s+(\w+)\s*\(/,d=l.match(c);return d?d[1]:""}try{return new Function("_context","_funcName","hookFunc",`_context[_funcName] = function ${o}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${o}'].apply(obj, args);
    };`)(r,o,t),r[o].prototype.isHooked=!0,!0}catch(s){return console.log("Hook failed,check the params.",s),false}},Function.prototype.unhook=function(e,t,n){let r=null,o=null;return r=n||window,o=t,r[o].prototype.isHooked?(r[o]=r[`realFunc${o}`],Reflect.deleteProperty(r,`realFunc_${o}`),true):(console.log("No function is hooked on"),false)};}cleanEnv(){return Object.prototype.hasOwnProperty.call(Function.prototype,"hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Object.prototype.hasOwnProperty.call(Function.prototype,"unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),true}}const Wt=function(){return typeof window?.crypto?.randomUUID=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){const e=Math.random()*16|0;return (a==="x"?e:e&3|8).toString(16)})};class Xs{GM_Api={xmlHttpRequest:null};HttpxRequestHook={$config:{configList:[]},async beforeRequestCallBack(e){if(typeof e.allowInterceptConfig=="boolean"){if(!e.allowInterceptConfig)return e}else if(e.allowInterceptConfig!=null&&typeof e.allowInterceptConfig.beforeRequest=="boolean"&&!e.allowInterceptConfig.beforeRequest)return e;for(let t=0;t<this.$config.configList.length;t++){const n=this.$config.configList[t];if(typeof n.fn=="function"&&await n.fn(e)==null)return}return e},add(e){if(typeof e=="function"){const t=Wt();return this.$config.configList.push({id:t,fn:e}),t}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(e){if(typeof e=="string"){const t=this.$config.configList.findIndex(n=>n.id===e);if(t!==-1)return this.$config.configList.splice(t,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxResponseHook={$config:{configList:[]},async successResponseCallBack(e,t){if(typeof t.allowInterceptConfig=="boolean"){if(!t.allowInterceptConfig)return t}else if(t.allowInterceptConfig!=null&&typeof t.allowInterceptConfig.afterResponseSuccess=="boolean"&&!t.allowInterceptConfig.afterResponseSuccess)return t;for(let n=0;n<this.$config.configList.length;n++){const r=this.$config.configList[n];if(typeof r.successFn=="function"&&await r.successFn(e,t)==null)return}return e},async errorResponseCallBack(e){if(typeof e.details.allowInterceptConfig=="boolean"){if(!e.details.allowInterceptConfig)return e}else if(e.details.allowInterceptConfig!=null&&typeof e.details.allowInterceptConfig.afterResponseError=="boolean"&&!e.details.allowInterceptConfig.afterResponseError)return e;for(let t=0;t<this.$config.configList.length;t++){const n=this.$config.configList[t];if(typeof n.errorFn=="function"&&await n.errorFn(e)==null)return}return e},add(e,t){const n=Wt();return this.$config.configList.push({id:n,successFn:e,errorFn:t}),n},delete(e){if(typeof e=="string"){const t=this.$config.configList.findIndex(n=>n.id===e);if(t!==-1)return this.$config.configList.splice(t,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxRequestOption={context:this,handleBeforeRequestOptionArgs(...e){const t={url:void 0};if(typeof e[0]=="string"){const n=e[0];if(t.url=n,typeof e[1]=="object"){const r=e[1];oe.assign(t,r,true),t.url=n;}}else {const n=e[0];oe.assign(t,n,true);}return t},getRequestOption(e,t,n,r){const o=this;let i=t.url||this.context.#e.url;typeof i=="string"&&(i=i.trim(),i.startsWith("http://")||i.startsWith("https://")||typeof this.context.#t.baseURL=="string"&&(i=this.context.#t.baseURL+i));const s={url:i,method:(e||"GET").toString().toUpperCase().trim(),timeout:t.timeout||this.context.#e.timeout,responseType:t.responseType||this.context.#e.responseType,headers:oe.deepClone(this.context.#e.headers),data:t.data||this.context.#e.data,redirect:t.redirect||this.context.#e.redirect,cookie:t.cookie||this.context.#e.cookie,cookiePartition:t.cookiePartition||this.context.#e.cookiePartition,binary:t.binary||this.context.#e.binary,nocache:t.nocache||this.context.#e.nocache,revalidate:t.revalidate||this.context.#e.revalidate,context:oe.deepClone(t.context||this.context.#e.context),overrideMimeType:t.overrideMimeType||this.context.#e.overrideMimeType,anonymous:t.anonymous||this.context.#e.anonymous,fetch:t.fetch||this.context.#e.fetch,fetchInit:oe.deepClone(this.context.#e.fetchInit),allowInterceptConfig:{beforeRequest:this.context.#e.allowInterceptConfig.beforeRequest,afterResponseSuccess:this.context.#e.allowInterceptConfig.afterResponseSuccess,afterResponseError:this.context.#e.allowInterceptConfig.afterResponseError},user:t.user||this.context.#e.user,password:t.password||this.context.#e.password,onabort(...l){o.context.HttpxResponseCallBack.onAbort(t,n,r,l);},onerror(...l){o.context.HttpxResponseCallBack.onError(t,n,r,l);},onloadstart(...l){o.context.HttpxResponseCallBack.onLoadStart(t,l);},onprogress(...l){o.context.HttpxResponseCallBack.onProgress(t,l);},onreadystatechange(...l){o.context.HttpxResponseCallBack.onReadyStateChange(t,l);},ontimeout(...l){o.context.HttpxResponseCallBack.onTimeout(t,n,r,l);},onload(...l){o.context.HttpxResponseCallBack.onLoad(t,n,r,l);}};typeof t.allowInterceptConfig=="boolean"?Object.keys(s.allowInterceptConfig).forEach(c=>{Reflect.set(s.allowInterceptConfig,c,t.allowInterceptConfig);}):typeof t.allowInterceptConfig=="object"&&t.allowInterceptConfig!=null&&Object.keys(s.allowInterceptConfig).forEach(c=>{const d=Reflect.get(t.allowInterceptConfig,c);typeof d=="boolean"&&Reflect.has(s.allowInterceptConfig,c)&&Reflect.set(s.allowInterceptConfig,c,d);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(s.fetch=true),typeof s.headers=="object"?typeof t.headers=="object"&&Object.keys(s.headers).forEach(c=>{c in s.headers&&t.headers?.[c]==null?Reflect.deleteProperty(s.headers,c):s.headers[c]=t?.headers?.[c];}):Reflect.set(s,"headers",t.headers),typeof s.fetchInit=="object"?typeof t.fetchInit=="object"&&Object.keys(s.fetchInit).forEach(c=>{c in s.fetchInit&&Reflect.get(t.fetchInit??{},c)==null?Reflect.deleteProperty(s.fetchInit,c):Reflect.set(s.fetchInit,c,Reflect.get(t.fetchInit,c));}):Reflect.set(s,"fetchInit",t.fetchInit),typeof s.cookiePartition=="object"&&s.cookiePartition!=null&&Reflect.has(s.cookiePartition,"topLevelSite")&&typeof s.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(s.cookiePartition,"topLevelSite");try{new URL(s.url);}catch{s.url.startsWith("//")?s.url=globalThis.location.protocol+s.url:s.url.startsWith("/")?s.url=globalThis.location.origin+s.url:s.url=`${globalThis.location.origin}/${s.url}`;}s.fetchInit&&!s.fetch&&Reflect.deleteProperty(s,"fetchInit");try{const l=t.processData??!0;if(s.data!=null&&l){const c=s.method;if(c==="GET"||c==="HEAD"){const d=new URL(s.url);let p="",f=!1;typeof s.data=="string"?(f=!0,p=s.data):typeof s.data=="object"&&(f=!0,p=new URLSearchParams(s.data).toString()),f&&Reflect.deleteProperty(s,"data"),p!=""&&(d.search===""?d.search=p:d.search.endsWith("&")?d.search=d.search+p:d.search=`${d.search}&${p}`),s.url=d.toString();}else if(c==="POST"&&s.headers!=null){const d=Object.keys(s.headers),p=d.findIndex(f=>f.trim().toLowerCase()==="content-type"&&typeof s.headers[f]=="string");if(p!==-1){const f=d[p],b=s.headers[f];if(b.includes("application/json"))if(s.data instanceof FormData){const h={};s.data.forEach((g,w)=>{h[w]=g;}),s.data=JSON.stringify(h);}else typeof s.data=="object"&&(s.data=JSON.stringify(s.data));else b.includes("application/x-www-form-urlencoded")?typeof s.data=="object"&&(s.data=new URLSearchParams(s.data).toString()):b.includes("multipart/form-data")&&s.data instanceof FormData&&Reflect.deleteProperty(s.headers,f);}}}}catch(l){console.warn("Httpx ==> 转换data参数错误",l);}return s},removeRequestNullOption(e){if(Object.keys(e).forEach(n=>{const r=e[n];if(r==null||r instanceof Function&&oe.isNull(r)){Reflect.deleteProperty(e,n);return}}),oe.isNull(e.url))throw new TypeError(`Utils.Httpx 参数url不能为空：${e.url}`);return e},handleFetchOption(e){const t={};(e.method==="GET"||e.method==="HEAD")&&e.data!=null&&Reflect.deleteProperty(e,"data");const n=new AbortController,r=n.signal;return r.onabort=()=>{e.onabort({isFetch:true,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},t.method=e.method??"GET",t.headers=e.headers,t.body=e.data,t.mode="cors",t.credentials="include",t.cache="no-cache",t.redirect="follow",t.referrerPolicy="origin-when-cross-origin",t.signal=r,Object.assign(t,e.fetchInit||{}),{fetchOption:e,fetchRequestOption:t,abortController:n}}};HttpxResponseCallBack={context:this,async onAbort(e,t,n,r){typeof e?.onabort=="function"?e.onabort.apply(this,r):typeof this.context.#e?.onabort=="function"&&this.context.#e.onabort.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new Error("request canceled"),response:null,details:e})!=null&&t({data:o,details:e,msg:"请求被取消",status:false,statusCode:-1,type:"onabort"});},async onTimeout(e,t,n,r){typeof e?.ontimeout=="function"?e.ontimeout.apply(this,r):typeof this.context.#e?.ontimeout=="function"&&this.context.#e.ontimeout.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new Error("request timeout"),response:o,details:e})!=null&&t({data:o,details:e,msg:"请求超时",status:false,statusCode:0,type:"ontimeout"});},async onError(e,t,n,r){typeof e?.onerror=="function"?e.onerror.apply(this,r):typeof this.context.#e?.onerror=="function"&&this.context.#e.onerror.apply(this,r);let o=r;o.length&&(o=o[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new Error("request error"),response:o,details:e})!=null&&t({data:o,details:e,msg:"请求异常",status:false,statusCode:o.status,type:"onerror"});},async onLoad(e,t,n,r){const o=r[0];if(oe.isNull(o.responseText)&&oe.isNotNull(o.response)&&(typeof o.response=="object"?St().run(()=>{o.responseText=JSON.stringify(o.response);}):o.responseText=o.response),o.response==null&&typeof o.responseText=="string"&&o.responseText.trim()!==""){const s=o.responseText;let l=s;if(e.responseType==="json")l=oe.toJSON(s);else if(e.responseType==="document")l=new DOMParser().parseFromString(s,"text/html");else if(e.responseType==="arraybuffer")l=new TextEncoder().encode(s);else if(e.responseType==="blob"){const d=new TextEncoder().encode(s);l=new Blob([d]);}try{if(!Reflect.set(o,"response",l)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(o,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(o,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}const i=Reflect.get(o,"responseURL");if(o.finalUrl==null&&i!=null&&Reflect.set(o,"finalUrl",i),Math.floor(o.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(o,e)==null)return;t({data:o,details:e,msg:"请求成功",status:true,statusCode:o.status,type:"onload"});}else this.context.HttpxResponseCallBack.onError(e,t,n,r);},onLoadStart(e,t){typeof e?.onloadstart=="function"?e.onloadstart.apply(this,t):typeof this.context.#e?.onloadstart=="function"&&this.context.#e.onloadstart.apply(this,t);},onReadyStateChange(e,t){typeof e?.onreadystatechange=="function"?e.onreadystatechange.apply(this,t):typeof this.context.#e?.onreadystatechange=="function"&&this.context.#e.onreadystatechange.apply(this,t);},onProgress(e,t){typeof e?.onprogress=="function"?e.onprogress.apply(this,t):typeof this.context.#e?.onprogress=="function"&&this.context.#e.onprogress.apply(this,t);}};HttpxRequest={context:this,async request(e){if(this.context.#t.logDetails&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",e),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(e)==null))if(e.fetch){const{fetchOption:t,fetchRequestOption:n,abortController:r}=this.context.HttpxRequestOption.handleFetchOption(e);return this.fetch(t,n,r)}else return this.xmlHttpRequest(e)},xmlHttpRequest(e){return this.context.GM_Api.xmlHttpRequest(e)},fetch(e,t,n){return fetch(e.url,t).then(async r=>{const o={isFetch:true,finalUrl:r.url,readyState:4,status:r.status,statusText:r.statusText,response:"",responseFetchHeaders:r.headers,responseHeaders:"",responseText:"",responseType:e.responseType,responseXML:void 0};Object.assign(o,e.context||{}),r.headers.forEach((h,g)=>{o.responseHeaders+=`${g}: ${h}
`;});const i=r.headers.get("Content-Type");if(e.responseType==="stream"||r.headers.has("Content-Type")&&r.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(o,"isStream",true),Reflect.set(o,"response",r.body),Reflect.deleteProperty(o,"responseText"),Reflect.deleteProperty(o,"responseXML"),e.onload(o);return}let s="",l="",c="";const d=await r.arrayBuffer();let p="utf-8";if(r.headers.has("Content-Type")){const h=r.headers.get("Content-Type")?.match(/charset=(.+)/);h&&(p=h[1],p=p.toLowerCase());}p=p.replace(/('|")/gi,""),l=new TextDecoder(p).decode(d),s=l,e.responseType==="arraybuffer"?s=d:e.responseType==="blob"?s=new Blob([d]):e.responseType==="json"||typeof i=="string"&&i.includes("application/json")?s=oe.toJSON(l):(e.responseType==="document"||e.responseType==null)&&(s=new DOMParser().parseFromString(l,"text/html")),c=new DOMParser().parseFromString(l,"text/xml"),o.response=s,o.responseText=l,o.responseXML=c,e.onload(o);}).catch(r=>{r.name!=="AbortError"&&e.onerror({isFetch:true,finalUrl:e.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:r});}),e.onloadstart({isFetch:true,finalUrl:e.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){n.abort();}}}};#e={url:void 0,timeout:5e3,async:false,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:true,afterResponseSuccess:true,afterResponseError:true},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}};#t={baseURL:void 0,logDetails:false};constructor(e={}){typeof e.xmlHttpRequest!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),oe.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(e);}config(e={}){typeof e.xmlHttpRequest=="function"&&(this.GM_Api.xmlHttpRequest=e.xmlHttpRequest),this.#e=oe.assign(this.#e,e),this.#t=oe.assign(this.#t,e);}interceptors={request:{context:null,use(e){if(typeof e!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(e)},eject(e){return this.context.HttpxRequestHook.delete(e)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(e,t){if(typeof e!="function"&&typeof t!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(e,t)},eject(e){return this.context.HttpxResponseHook.delete(e)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}};setXMLHttpRequest(e){this.GM_Api.xmlHttpRequest=e;}get(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="GET",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}post(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="POST",this.request(t)}head(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="HEAD",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}options(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="OPTIONS",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}delete(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="DELETE",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}put(...e){const t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="PUT",this.request(t)}request(e,t){const n=this.HttpxRequestOption.handleBeforeRequestOptionArgs(e);let r=null;const o=new globalThis.Promise(async(i,s)=>{let l=this.HttpxRequestOption.getRequestOption(n.method,n,d=>{i(d);},(...d)=>{s(...d);});l=this.HttpxRequestOption.removeRequestNullOption(l),typeof t=="function"&&t(l);const c=await this.HttpxRequest.request(l);c!=null&&typeof c.abort=="function"&&(r=()=>{c.abort();});});return o.abort=()=>{typeof r=="function"&&r();},o}}class Ys{#e;#t;#r;#o=globalThis.indexedDB||globalThis.mozIndexedDB||globalThis.webkitIndexedDB||globalThis.msIndexedDB;#a={};#n={operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}};constructor(e="default_db",t="default_form",n=1){if(this.#e=e,this.#t=t,this.#r=n,!this.#o)throw window.alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(e){return this.#a[e].transaction(this.#t,"readwrite").objectStore(this.#t)}open(e,t){const n=this;if(n.#a[t]){const r=this.createStore(t);e(r);}else {const r=n.#o.open(t,n.#r);r.onerror=function(o){e(null,{code:n.#n.openFailed.code,msg:n.#n.openFailed.msg,event:o});},r.onsuccess=function(o){if(!n.#a[t]){const s=o.target;n.#a[t]=s.result;}const i=n.createStore(t);e(i);},r.onupgradeneeded=function(o){const i=o.target;n.#a[t]=i.result;const s=n.#a[t].createObjectStore(n.#t,{keyPath:"key"});s.transaction.oncomplete=function(){e(s);};};}}async save(e,t){const n=this;return new Promise(r=>{const o=this.#e,i={key:e,value:t};this.open(function(s){if(s==null)r({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg});else {const l=s.put(i);l.onsuccess=function(c){r({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,event:c});},l.onerror=function(c){r({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg,event:c});};}},o);})}async has(e){const t=this;return new Promise(n=>{const r=this.#e;this.open(function(o){if(o==null)n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg});else {const i=o.get(e);i.onsuccess=function(s){n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,event:s});};}},r);})}async get(e){const t=this;return new Promise(n=>{const r=this.#e;this.open(function(o){if(o==null)n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,data:void 0});else {const i=o.get(e);i.onsuccess=function(s){const c=s.target.result,d=c?c.value:void 0;d==null?n({success:true,code:t.#n.empty.code,msg:t.#n.empty.msg,data:d,event:s,result:c}):n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,data:d,event:s,result:c});},i.onerror=function(s){n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,data:void 0,event:s});};}},r);})}async regexpGet(e){let t=[];const n=this;return new Promise(r=>{const o=n.#e;this.open(function(i){if(i==null)r({success:false,code:n.#n.regexpGetFailed.code,msg:n.#n.regexpGetFailed.msg,data:[]});else {const s=i.getAll();s.onsuccess=function(l){const d=l.target.result;d.length!==0&&d.forEach(p=>{const f=p.key,b=p.value;f.match(e)&&(t=t.concat(b));}),r({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,data:t,event:l});},s.onerror=function(l){r({success:false,code:n.#n.getFailed.code,msg:n.#n.getFailed.msg,data:[],event:l});};}},o);})}async delete(e){const t=this;return new Promise(n=>{const r=t.#e;this.open(function(o){if(o==null)n({success:false,code:t.#n.deleteFailed.code,msg:t.#n.deleteFailed.msg});else {const i=o.delete(e);i.onsuccess=function(s){n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:t.#n.deleteFailed.code,msg:t.#n.deleteFailed.msg,event:s});};}},r);})}async deleteAll(){const e=this;return new Promise(t=>{const n=e.#e;this.open(function(r){if(r==null)t({success:false,code:e.#n.deleteAllFailed.code,msg:e.#n.deleteAllFailed.msg});else {const o=r.clear();o.onsuccess=function(i){t({success:true,code:e.#n.operationSuccess.code,msg:e.#n.operationSuccess.msg,event:i});},o.onerror=function(i){t({success:false,code:e.#n.deleteAllFailed.code,msg:e.#n.deleteAllFailed.msg,event:i});};}},n);})}}class Qs{#e=false;#t=0;#r;#o=void 0;lock;unlock;run;isLock;constructor(e,t,n){const r=this;this.#r=e,typeof t=="number"?this.#t=t:this.#t=n,this.lock=function(){r.#e=true,clearTimeout(r.#o);},this.unlock=function(){r.#o=setTimeout(()=>{r.#e=false;},r.#t);},this.isLock=function(){return r.#e},this.run=async function(...o){r.isLock()||(r.lock(),await r.#r.apply(this,o),r.unlock());};}}class Js{#e=false;tag="Utils.Log";#t=null;#r=0;#o={tag:true,successColor:"background: #0eac0eff;",errorColor:"background: #FF0000;",infoColor:"background: #6495ed;",warnColor:"background: #ff8c00;",debug:false,autoClearConsole:false,logMaxCount:999};#a={commonStyle:"color: #ffffff; padding: 3px; border-radius: 3px;line-height: 1;margin-right: 6px;",tagStyle:"background: #6495ed;",callerNameStyle:"background: #78909C;"};constructor(e,t=window.console){typeof e=="string"?this.tag=e:typeof e=="object"&&typeof e?.script?.name=="string"&&(this.tag=e.script.name),this.#t=t;}parseErrorStack(e){const t={name:"",position:""};for(let n of e){n=n.trim();const r=n.match(/^at[\s]+(.+?)[\s]+/i),o=n.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(r==null||o==null)continue;const i=r[r.length-1],s=o[o.length-1];if(!(i===""||i.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){t.name=i,t.position=s;break}}if(t.position===""){const n=e[e.length-1].trim();if(n.startsWith("at chrome-extension://")){const r=n.match(/^at[\s]+(.+)/);r&&(t.position=r[r.length-1]);}}return t.position===""&&(t.position=e[e.length-1].trim().replace(/^at[\s]*/g,"")),t}checkClearConsole(){this.#r++,this.#o.autoClearConsole&&this.#r>this.#o.logMaxCount&&(this.#t.clear(),this.#r=0);}printContent(e,t){this.checkClearConsole();const n=new Error().stack.split(`
`);n.splice(0,2);const{name:r,position:o}=this.parseErrorStack(n),i=this.tag,s=this,l=[];let c=`%c${i}`;typeof t=="string"&&t.trim()!==""?l.push(s.#a.commonStyle+t):l.push(s.#a.commonStyle+s.#a.tagStyle),r.trim()==""||(c=`${c}%c${r}`,l.push(s.#a.commonStyle+s.#a.callerNameStyle)),Array.isArray(e)?s.#t.log(`${c}`,...l,...e):s.#t.log(`${c}`,...l,e),this.#o.debug&&this.#t.log(o);}info(...e){this.#e||this.printContent(e,this.#o.infoColor);}warn(...e){this.#e||this.printContent(e,this.#o.warnColor);}error(...e){this.#e||this.printContent(e,this.#o.errorColor);}success(...e){this.#e||this.printContent(e,this.#o.successColor);}table(e){if(this.#e)return;this.checkClearConsole();const t=new Error().stack.split(`
`);t.splice(0,1);const n=this.parseErrorStack(t),r=n.name,o=n.position,i=r,s=[`${this.#a.commonStyle+this.#o.infoColor}`,`${this.#a.commonStyle+this.#a.callerNameStyle}`];this.#t.log(`%c${this.tag}%c${i}%c`,s),this.#t.table(e),this.#o.debug&&this.#t.log(o);}config(e){this.#o=Object.assign(this.#o,e);}disable(){this.#e=true;}recovery(){this.#e=false;}}class Zs{constructor(e){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(n,r,o)=>{this.modules=o.c,this.constructors=o.m,this.get=o;}]],[[1e3],{[this.moduleID]:(n,r,o)=>{this.modules=o.c,this.constructors=o.m,this.get=o;}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},n=>{const r=n.m;Object.keys(r).forEach(o=>{try{this.modules[o]=n(o);}catch(i){this.log(`[arrayArguments/1] Failed to require(${o}) with error:
${i}
${i.stack}`);}}),this.get=n;}],this.functionArguments[1]],this.modules={},this.constructors=[];let t={target:window,entrypoint:"webpackJsonp",debug:false,strict:false};typeof e=="object"&&(t=Object.assign(Object.assign({},t),e)),this.target=t.target,this.entrypoint=t.entrypoint,this.debug=t.debug,this.strict=t.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent();}log(e){this.debug&&console.warn(`[moduleRaid] ${e}`);}replaceGet(){this.get===null&&(this.get=e=>this.modules[e]);}fillModules(){if(typeof this.target[this.entrypoint]=="function"?this.functionArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...e);}catch(n){this.log(`moduleRaid.functionArguments[${t}] failed:
${n}
${n.stack}`);}}):this.arrayArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(e);}catch(n){this.log(`Pushing moduleRaid.arrayArguments[${t}] into ${this.entrypoint} failed:
${n}
${n.stack}`);}}),this.modules&&Object.keys(this.modules).length==0){let e=false,t=0;if(typeof this.target[this.entrypoint]!="function"||!this.target[this.entrypoint]([],[],[t]))throw Error("Unknown Webpack structure");for(;!e;)try{this.modules[t]=this.target[this.entrypoint]([],[],[t]),t++;}catch{e=true;}}}setupPushEvent(){const e=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...t)=>{const n=Reflect.apply(e,this.target[this.entrypoint],t);return document.dispatchEvent(new CustomEvent("moduleraid:webpack-push",{detail:t})),n};}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let e=Object.keys(this.target);if(e=e.filter(t=>t.toLowerCase().includes("chunk")||t.toLowerCase().includes("webpack")).filter(t=>typeof this.target[t]=="function"||Array.isArray(this.target[t])),e.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:
${e.join(", ")}`);if(e.length===0)throw Error("No Webpack JSONP entrypoints could be detected");this.log(`Entrypoint has been detected at window.${e[0]} and set for injection`),this.entrypoint=e[0];}searchObject(e,t){for(const n in e){const r=e[n],o=t.toLowerCase();if(typeof r!="object"){if(n.toString().toLowerCase().includes(o))return  true;if(typeof r!="object"){if(r.toString().toLowerCase().includes(o))return  true}else if(this.searchObject(r,t))return  true}}return  false}findModule(e){const t=[],n=Object.keys(this.modules);if(n.length===0)throw new Error("There are no modules to search through!");return n.forEach(r=>{const o=this.modules[r.toString()];if(o!==void 0)try{if(typeof e=="string")switch(e=e.toLowerCase(),typeof o){case "string":o.toLowerCase().includes(e)&&t.push(o);break;case "function":o.toString().toLowerCase().includes(e)&&t.push(o);break;case "object":this.searchObject(o,e)&&t.push(o);break}else if(typeof e=="function")e(o)&&t.push(o);else throw new TypeError(`findModule can only find via string and function, ${typeof e} was passed`)}catch(i){this.log(`There was an error while searching through module '${r}':
${i}
${i.stack}`);}}),t}findConstructor(e){const t=[],n=Object.keys(this.constructors);if(n.length===0)throw new Error("There are no constructors to search through!");return n.forEach(r=>{const o=this.constructors[r];try{typeof e=="string"?(e=e.toLowerCase(),o.toString().toLowerCase().includes(e)&&t.push([this.constructors[r],this.modules[r]])):typeof e=="function"&&e(o)&&t.push([this.constructors[r],this.modules[r]]);}catch(i){this.log(`There was an error while searching through constructor '${r}':
${i}
${i.stack}`);}}),t}}class ei{#e={canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50};#t;#r;#o;constructor(e){if(this.#e=oe.assign(this.#e,e),!(this.#e.canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");const t=this.#e.canvasNode.getContext("2d");if(t==null)throw new Error("Utils.Progress 获取画笔失败");this.#t=t,this.#r=this.#e.canvasNode.width,this.#o=this.#e.canvasNode.height,window.devicePixelRatio&&(this.#e.canvasNode.style.width=`${this.#r}px`,this.#e.canvasNode.style.height=`${this.#o}px`,this.#e.canvasNode.height=this.#o*window.devicePixelRatio,this.#e.canvasNode.width=this.#r*window.devicePixelRatio,this.#t.scale(window.devicePixelRatio,window.devicePixelRatio)),this.#t.lineWidth=this.#e.lineWidth;}draw(){const e=this.#e.progress*360/100;this.#t.clearRect(0,0,this.#r,this.#o),this.#t.beginPath(),this.#t.arc(this.#r/2,this.#o/2,this.#e.circleRadius,1,8),this.#t.strokeStyle=this.#e.lineBgColor,this.#t.stroke(),this.#t.beginPath(),this.#t.arc(this.#r/2,this.#o/2,this.#e.circleRadius,-Math.PI/2,e*Math.PI/180-Math.PI/2),this.#t.strokeStyle=this.#e.lineColor,this.#t.stroke();const t=`${parseInt(this.#e.progress.toString())}%`;this.#t.font=`${this.#e.fontSize}px SimHei`;const n=this.#t.measureText(t).width,r=this.#e.fontSize/2;this.#t.fillStyle=this.#e.textColor,this.#t.fillText(t,this.#r/2-n/2,this.#o/2+r/2);}}class ti{windowApi={window,document};constructor(e){e&&(this.windowApi=Object.assign({},e));}getCookiesList(){return this.windowApi.document.cookie.trim()===""?[]:this.windowApi.document.cookie.split(";")}get(e){if(typeof e!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");const t=this.getCookiesList();let n;for(const r of t){const i=r.trim().split("="),s=i[0];i.splice(0,1);const l=decodeURIComponent(i.join(""));if(s===e){n={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:e,path:"/",sameSite:"unspecified",secure:true,session:false,value:l};break}}return n}list(e,t){if(e==null)throw new Error("Utils.GMCookie.list 参数不能为空");const n=[];let r;try{let o={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};o=oe.assign(o,e),this.getCookiesList().forEach(s=>{s=s.trim();const l=s.split("="),c=l[0];l.splice(0,1);const d=decodeURIComponent(l.join("")),p=o.name instanceof RegExp?o.name:new RegExp(`^${o.name}`,"g");c.match(p)&&n.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:c,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:d});});}catch(o){r=o;}if(typeof t=="function")t(n,r);else return {cookies:n,error:r}}getList(e){if(e==null)throw new Error("Utils.GMCookie.list 参数不能为空");const t=[];let n={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return n=oe.assign(n,e),this.getCookiesList().forEach(o=>{o=o.trim();const i=o.split("="),s=i[0];i.splice(0,1);const l=decodeURIComponent(i.join("")),c=n.name instanceof RegExp?n.name:new RegExp(`^${n.name}`,"g");s.match(c)&&t.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:s,path:"/",sameSite:"unspecified",secure:true,session:false,value:l});}),t}set(e,t){let n;try{let r={url:this.windowApi.window.location.href,name:"",value:"",domain:"",path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};r=oe.assign(r,e);const o=r.expirationDate?r.expirationDate:Math.floor(Date.now())+3600*24*30;let i=`${r.name}=${decodeURIComponent(r.value)};expires=${new Date(o).toGMTString()}; path=/`;oe.isNull(r.domain)&&(i+=`; domain=${r.domain}`),this.windowApi.document.cookie=i;}catch(r){n=r;}finally{typeof t=="function"&&t(n);}}delete(e,t){let n;try{let r={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:""};r=oe.assign(r,e);let o=`${r.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${r.path}`;oe.isNull(r.firstPartyDomain)&&(o+=`; domain=${r.firstPartyDomain};`),this.windowApi.document.cookie=o;}catch(r){n=r;}finally{typeof t=="function"&&t(n);}}parseCookie(e){if(e.trim()==="")return [];const t=e.split(";"),n=[];for(const r of t){const i=r.trim().split("="),s=i[0];i.splice(0,1);const l=decodeURIComponent(i.join(""));n.push({key:s,value:l});}return n}}class ni{GM_Api={getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null};MenuHandle={context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:true,isStoreValue:true},$emoji:{success:"✅",error:"❌"},init(){for(let e=0;e<this.$data.data.length;e++){const t=this.$data.data[e].data;t.enable=!!this.getLocalMenuData(t.key,t.enable),typeof t.showText!="function"&&(t.showText=(n,r)=>r?`${this.$emoji.success} ${n}`:`${this.$emoji.error} ${n}`);}},register(e){const t=this;if(e==null)throw new TypeError("register菜单数据不能为空");Array.isArray(e)||(e=[e]);for(let n=0;n<e.length;n++){const r=oe.deepClone(e[n].data),{showText:o,clickCallBack:i}=this.handleMenuData(r),s=t.context.GM_Api.registerMenuCommand(o,i);e[n].id=s,r.deleteMenu=function(){t.context.GM_Api.unregisterMenuCommand(s);},Reflect.deleteProperty(e[n],"handleData"),e[n].handleData=r;}},getLocalMenuData(e,t){const n=this.context.GM_Api.getValue(this.$data.key,{});return e in n?n[e]:t},setLocalMenuData(e,t){const n=this.context.GM_Api.getValue(this.$data.key,{});n[e]=t,this.context.GM_Api.setValue(this.$data.key,n);},handleInitDetail(e){return e.enable=!!this.getLocalMenuData(e.key,e.enable),typeof e.showText!="function"&&(e.showText=(t,n)=>n?`${this.$emoji.success} ${t}`:`${this.$emoji.error} ${t}`),e},handleMenuData(e){const t=this,n=e.key,r=!!this.getLocalMenuData(n,e.enable),o=e.showText(e.text,r);e.autoReload=typeof e.autoReload!="boolean"?this.$default.autoReload:e.autoReload,e.isStoreValue=typeof e.isStoreValue!="boolean"?this.$default.isStoreValue:e.isStoreValue;function i(s){const l=!!t.getLocalMenuData(n,r);e.isStoreValue&&t.setLocalMenuData(n,!l),typeof e.callback=="function"&&e.callback({key:n,enable:!l,oldEnable:l,event:s,storeValue(c){t.setLocalMenuData(n,c);}}),e.autoReload?window.location.reload():t.context.update();}return {showText:o,clickCallBack:i}},getMenuData(e){return this.$data.data.find(t=>t.data.key===e)},getMenuOption(e){return this.$data.data.find(t=>t.data.key===e)?.data},getMenuHandledOption(e){return this.$data.data.find(t=>t.handleData.key===e)?.handleData}};constructor(e){this.GM_Api.getValue=e.GM_getValue,this.GM_Api.setValue=e.GM_setValue,this.GM_Api.registerMenuCommand=e.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=e.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof e.autoReload=="boolean"?e.autoReload:true;for(const t of Object.keys(this.GM_Api))if(typeof this.GM_Api[t]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${t}，且传入该对象`);this.add(e?.data||[]);}__add(e){if(Array.isArray(e))for(let t=0;t<e.length;t++){const n=e[t];this.MenuHandle.$data.data.push({data:n,id:void 0});}else this.MenuHandle.$data.data.push({data:e,id:void 0});}add(e){this.__add(e),this.update();}update(e){let t=[];Array.isArray(e)?t=[...t,...e]:e!=null&&(t=[...t,e]),t.forEach(n=>{const r=this.MenuHandle.getMenuOption(n.key);r?Object.assign(r,n):this.__add(n);}),this.MenuHandle.$data.data.forEach(n=>{n.handleData&&n.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(e){this.GM_Api.unregisterMenuCommand(e);}getEnable(e){return this.MenuHandle.getMenuHandledOption(e).enable}getText(e){return this.MenuHandle.getMenuHandledOption(e).text}getShowTextValue(e){return this.MenuHandle.getMenuHandledOption(e).showText(this.getText(e),this.getEnable(e))}getMenuId(e){let t=null;for(let n=0;n<this.MenuHandle.$data.data.length;n++){const r=this.MenuHandle.$data.data[n];if(r.handleData.key===e){t=r.id;break}}return t}getAccessKey(e){return this.MenuHandle.getMenuHandledOption(e)?.accessKey}getAutoClose(e){return this.MenuHandle.getMenuHandledOption(e)?.autoClose}getAutoReload(e){return this.MenuHandle.getMenuHandledOption(e)?.autoReload}getCallBack(e){return this.MenuHandle.getMenuHandledOption(e)?.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(e,t){this.MenuHandle.setLocalMenuData(e,t);}setEnable(e,t){this.setValue(e,!!t);}setEnableTrueEmoji(e){if(typeof e!="string")throw new TypeError("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=e;}setEnableFalseEmoji(e){if(typeof e!="string")throw new TypeError("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=e;}setLocalStorageKeyName(e){if(typeof e!="string")throw new TypeError("参数keyName必须是string类型");this.MenuHandle.$data.key=e;}}const Ue={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(a){return typeof a=="object"&&a!==null},isFunction(a){return typeof a=="function"},isReactive(a){return !!(a&&a[Ue.ReactiveFlags.IS_REACTIVE])},isArray(a){return Array.isArray(a)}};class ri{deps=[];active=true;fn;scheduler;constructor(e,t){this.fn=e,this.scheduler=t;}run(e){this.active||this.fn();try{return typeof e=="function"&&e(this),this.fn()}finally{typeof e=="function"&&e(void 0);}}}class oi{_value;_isRef=true;_rawValue;_vue;constructor(e,t){this._vue=e,this._rawValue=t,this._value=this._vue.toReactive(t);}get value(){return this._value}set value(e){e!==this._rawValue&&(this._value=this._vue.toReactive(e),this._rawValue=e);}}class ai{object;key;constructor(e,t){this.object=e,this.key=t;}get value(){return this.object[this.key]}set value(e){this.object[this.key]=e;}}class si{reactMap=new WeakMap;targetMap=new WeakMap;activeEffect=void 0;constructor(){}reactive(e){const t=this;if(!(typeof e=="object"&&e!==null))return;if(Ue.isReactive(e))return e;const n=this.reactMap.get(e);if(n)return n;const r=new Proxy(e,{get(o,i,s){return i===Ue.ReactiveFlags.IS_REACTIVE?true:(t.track(o,"get",i),Reflect.get(o,i,s))},set(o,i,s,l){const c=o[i],d=Reflect.set(o,i,s,l);return c!==s&&t.trigger(o,"set",i,c,s),d}});return t.reactMap.set(e,r),r}watch(e,t){let n;if(Ue.isReactive(e))n=()=>this.traversal(e);else if(Ue.isFunction(e))n=e;else return;let r;const o=()=>{const s=i.run(l=>{this.activeEffect=l;});t(s,r),r=s;},i=new ri(n,o);r=i.run(s=>{this.activeEffect=s;});}toReactive(e){return Ue.isObject(e)?this.reactive(e):e}ref(e){return new oi(this,e)}toRef(e,t){return new ai(e,t)}toRefs(e){const t=Ue.isArray(e)?new Array(e.length):{};for(const n in e)t[n]=this.toRef(e,n);return t}trigger(e,t,n,r,o){const i=this.targetMap.get(e);if(!i)return;const s=i.get(n);this.triggerEffect(s,"effects");}triggerEffect(e,t){e&&e.forEach(n=>{n.scheduler?n.scheduler():n.run();});}track(e,t,n){if(!this.activeEffect)return;let r=this.targetMap.get(e);r||this.targetMap.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),this.trackEffect(o);}trackEffect(e){this.activeEffect&&!e.has(this.activeEffect)&&(e.add(this.activeEffect),this.activeEffect.deps.push(e));}traversal(e,t=new Set){if(!Ue.isObject(e)||t.has(e))return e;t.add(e);for(const n in e)this.traversal(e[n],t);return e}}class on{windowApi;constructor(e){this.windowApi=new xr(e);}version=Hs;assign=oe.assign.bind(oe);async asyncReplaceAll(e,t,n){const r=this;if(typeof e!="string")throw new TypeError("string必须是字符串");if(typeof n!="function")throw new TypeError("asyncFn必须是函数");let o;if(typeof t=="string")o=new RegExp(r.toRegExpStr(t),"g");else if(t instanceof RegExp){if(!t.global)throw new TypeError("pattern必须是全局匹配");o=new RegExp(t);}else throw new TypeError("pattern必须是正则对象");let i=[],s,l=0;for(;(s=o.exec(e))!==null;){const c=n(s[0]),d=e.slice(l,s.index);l=s.index+s[0].length,i.push(c),i.push(d);}return i.push(e.slice(l)),i=await Promise.all(i),i.join("")}ajaxHooker=(e=false)=>e?Us():Vs();canvasClickByPosition(e,t=0,n=0,r=this.windowApi.window){if(!(e instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");t=parseInt(t.toString()),n=parseInt(n.toString());const o={cancelBubble:true,cancelable:true,clientX:t,clientY:n,view:r,detail:1};e.dispatchEvent(new MouseEvent("mousedown",o)),e.dispatchEvent(new MouseEvent("mouseup",o));}cloneFormData(e,t){const n=new FormData;return e.forEach((r,o)=>{const i=typeof t=="function"?t(o,r):false;typeof i=="boolean"&&i||n.append(o,r);}),n}createOverload(){const e=new Map;function t(...n){const r=n.map(i=>typeof i).join(","),o=e.get(r);if(!o)throw new TypeError("没有找到对应的实现");return o.apply(this,n)}return t.addImpl=function(...n){const r=n.pop();if(typeof r!="function")throw new TypeError("最后一个参数必须是函数");const o=n.join(",");e.set(o,r);},t}ColorConversion=zs;deepClone=oe.deepClone.bind(oe);debounce(e,t=0){let n=null;const r=this;return function(...o){r.workerClearTimeout(n),n=r.workerSetTimeout(function(){e.apply(r,o);},t);}}Dictionary=js;downloadBase64(e,t,n=false){const r=this;if(typeof e!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof t!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(n){const o=this.windowApi.document.createElement("iframe");o.style.display="none",o.src=e,(this.windowApi.document.body||this.windowApi.document.documentElement).appendChild(o),r.workerSetTimeout(()=>{o.contentWindow.document.execCommand("SaveAs",true,t),(this.windowApi.document.body||this.windowApi.document.documentElement).removeChild(o);},100);}else {const o=this.windowApi.document.createElement("a");o.setAttribute("target","_blank"),o.download=t,o.href=e,o.click();}}findWebPageVisibleText(e="",t=false){let n=null,r;if(this.windowApi.globalThis.find){const o=this.windowApi.self.find;if(r=o(e,t,true,true,false),r&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(r=o(e,t,true,true,false)),!r)for(r=o(e,0,1);o(e,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)n!=null&&(n=n,n.collapse(false),r=n.findText(e),r&&n.select()),(n==null||r==0)&&(n=this.windowApi.self.document.body.createTextRange(),r=n.findText(e),r&&n.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!r}formatByteToSize(e,t=true){if(e=parseInt(e.toString()),isNaN(e))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB";const o={};o.B=1,o.KB=1024,o.MB=o.KB*o.KB,o.GB=o.MB*o.KB,o.TB=o.GB*o.KB,o.PB=o.TB*o.KB,o.EB=o.PB*o.KB,o.ZB=o.EB*o.KB,o.YB=o.ZB*o.KB,o.BB=o.YB*o.KB,o.NB=o.BB*o.KB,o.DB=o.NB*o.KB;for(const i in o)if(n=e/o[i],r=i,o.KB>=n)break;return n=n.toFixed(2),n=t?n+r.toString():parseFloat(n.toString()),n}getNodeListValue(...e){let t=[];for(const n of e){let r=n;if(typeof n=="function"&&(r=n()),r.length!==0){t=[...r];break}}return t}getNonNullValue(...e){let t=e[e.length-1];const n=this;for(const r of e)if(n.isNotNull(r)){t=r;break}return t}formatTime(e=new Date,t="yyyy-MM-dd HH:mm:ss"){const n=e==null?new Date:new Date(e);function r(s){return s<10?`0${s}`:s}function o(s){return s>12?s-12:s}const i={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(o(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(i).forEach(function(s){const l=new RegExp(s,"g");t=t.replace(l,i[s]);}),t}formatToTimeStamp(e){if(typeof e!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(e.length===8){const n=new Date;e=`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()} ${e}`;}return e=e.substring(0,19),e=e.replace(/-/g,"/"),new Date(e).getTime()}GBKEncoder=Ws;getArrayLastValue(e){return e[e.length-1]}getArrayRealValue(...e){let t=null;for(let n of e)if(typeof n=="function"&&(n=n()),n!=null){t=n;break}return t}getDaysDifference(e=Date.now(),t=Date.now(),n="天"){n=n.trim(),e.toString().length===10&&(e=e*1e3),t.toString().length===10&&(t=t*1e3);const r=e>t?t:e,o=e>t?e:t,i=1e3,s=60*i,l=60*s,c=24*l,d=30*c,p=12*d,f=new Date(o),b=new Date(r);let h=1;n==="年"?h=p:n==="月"?h=d:n==="天"?h=c:n==="时"?h=l:n==="分"?h=s:n==="秒"&&(h=i);let g=Math.round(Math.abs((f-b)/h));if(n==="auto"){const w=o-r;if(g=Math.floor(w/(24*3600*1e3)),g>0)g=`${g}天`;else {const A=w%864e5,v=Math.floor(A/(3600*1e3));if(v>0)g=`${v}小时`;else {const S=A%36e5,T=Math.floor(S/(60*1e3));if(T>0)g=`${T}分钟`;else {const x=S%6e4;g=`${Math.round(x/1e3)}秒`;}}}}return g}getMaxValue(...e){const t=[...e];let n=[];if(t.length!==0)if(t.length>1){if(t.length===2&&typeof t[0]=="object"&&typeof t[1]=="function"){const r=t[0],o=t[1];Object.keys(r).forEach(i=>{n=[...n,o(i,r[i])];});}else t.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.max(...n)}else return t[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.max(...n)}getMaxZIndexNodeInfo(e=1,t=this.windowApi.document,n){e=Number.isNaN(e)?1:e;const r=this,o=2*Math.pow(10,9);let i=0,s=null;function l(d){return d.position!=="static"&&d.display!=="none"}function c(d){if(typeof n=="function"){const f=n(d);if(typeof f=="boolean"&&!f)return}const p=r.windowApi.window.getComputedStyle(d);if(l(p)){const f=parseInt(p.zIndex);isNaN(f)||f>i&&(i=f,s=d),d.shadowRoot!=null&&d instanceof ShadowRoot&&d.shadowRoot.querySelectorAll("*").forEach(b=>{c(b);});}}return t.querySelectorAll("*").forEach(d=>{c(d);}),i+=e,i>=o&&(i=o),{node:s,zIndex:i}}getMaxZIndex(e=1,t=this.windowApi.document,n){return this.getMaxZIndexNodeInfo(e,t,n).zIndex}getMinValue(...e){const t=[...e];let n=[];if(t.length!==0)if(t.length>1){if(t.length===2&&typeof t[0]=="object"&&typeof t[1]=="function"){const r=t[0],o=t[1];Object.keys(r).forEach(i=>{n=[...n,o(i,r[i])];});}else t.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.min(...n)}else return t[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.min(...n)}getRandomAndroidUA(){const e=this,t=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],n=e.getRandomValue(12,14),r=e.getRandomValue(t),o=e.getRandomValue(130,140),i=e.getRandomValue(0,0),s=e.getRandomValue(2272,6099),l=e.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${n}; ${r}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${o}.${i}.${s}.${l} Mobile Safari/537.36`}getRandomPCUA(){const e=this,t=e.getRandomValue(130,140),n=e.getRandomValue(0,0),r=e.getRandomValue(2272,6099),o=e.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${t}.${n}.${r}.${o} Safari/537.36`}getRandomValue(...e){const t=[...e];if(t.length>1)if(t.length===2&&typeof t[0]=="number"&&typeof t[1]=="number"){const n=t[0]>t[1]?t[1]:t[0],r=t[0]>t[1]?t[0]:t[1];return Math.round(Math.random()*(r-n))+n}else return t[Math.floor(Math.random()*t.length)];else if(t.length===1){const n=t[0];if(Array.isArray(n))return n[Math.floor(Math.random()*n.length)];if(typeof n=="object"&&Object.keys(n).length>0){const r=Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)];return n[r]}else return n}}getReactInstance(e){const t={};return e==null||Object.keys(e).forEach(r=>{if(r.startsWith("__react")){const o=r.replace(/__(.+)\$.+/i,"$1"),i=Reflect.get(e,r);o in t?console.error(`重复属性 ${r}`):Reflect.set(t,o,i);}}),t}getSymbol(e,t){if(typeof e!="object")throw new TypeError("target不是一个对象");const n=Object.getOwnPropertySymbols(e);if(typeof t=="string"){const r=n.find(o=>o.toString()===t);if(r)return e[r]}else if(typeof t=="symbol"){const r=n.find(o=>o===t);if(r)return e[r]}else {const r={};return n.forEach(o=>{r[o]=e[o];}),r}}getTextLength(e){return new TextEncoder().encode(e).length}getTextStorageSize(e,t=true){const n=this;return n.formatByteToSize(n.getTextLength(e),t)}getThunderUrl(e){if(e==null)throw new TypeError("url不能为空");if(typeof e!="string")throw new TypeError("url必须是string类型");if(e.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa(`AA${e}ZZ`)}`}GM_Cookie=ti;GM_Menu=ni;Hooks=Ks;Httpx=Xs;indexedDB=Ys;isNativeFunc(e){return !!e.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...e){let t=50;const n=()=>{const i=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,s=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,l=this.windowApi.document.documentElement.scrollHeight-t;return i+s>=l},r=i=>{const s=i.scrollTop,l=i.clientHeight,c=i.scrollHeight-l-t;return s>=c},o=e[0];if(e.length===0||typeof e[0]=="number")return n();if(typeof e[0]=="object"&&e[0]instanceof HTMLElement)return typeof e[1]=="number"&&!Number.isNaN(e[1])&&(t=e[1]),r(e[0]);throw new TypeError(`参数1类型错误${typeof o}`)}isDOM=oe.isDOM.bind(oe);isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(e){let t=false;if(typeof jQuery=="object"&&e instanceof jQuery&&(t=true),e==null)return  false;if(typeof e=="object"){const n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const r of n)if(r in e)t=true;else {t=false;break}}return t}isPhone(e=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(e)}isSameChars(e,t=1){if(typeof e!="string")throw new TypeError("参数 str 必须是 string 类型");if(e.length<2)return  false;e=e.toLowerCase();const n={};let r=0;for(const i of e)Reflect.has(n,i)?n[i]++:n[i]=1,r++;let o=false;for(const i in n)if(n[i]/r>=t){o=true;break}return o}isNotNull=oe.isNotNull.bind(oe);isNull=oe.isNull.bind(oe);isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(e,t=false){let n=[];e instanceof Array||e instanceof NodeList?(e=e,n=[...e]):n=[e];let r=true;for(const o of n){if(this.windowApi.window.getComputedStyle(o).display==="none")r=false;else {const s=o.getBoundingClientRect();if(t){const l=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,c=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;r=!(s.right<0||s.left>l||s.bottom<0||s.top>c);}else r=!!o.getClientRects().length;}if(!r)break}return r}isWebView_Via(){let e=true;const t=this;if(typeof this.windowApi.top.window.via=="object"){for(const n in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,n)){const r=this.windowApi.top.window.via[n];if(typeof r=="function"&&t.isNativeFunc(r))e=true;else {e=false;break}}}else e=false;return e}isWebView_X(){let e=true;const t=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const n in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,n)){const r=this.windowApi.top.window.mbrowser[n];if(typeof r=="function"&&t.isNativeFunc(r))e=true;else {e=false;break}}}else e=false;return e}parseObjectToArray(e){if(typeof e!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let t=[];return Object.keys(e).forEach(function(r){const o=Reflect.get(e,r);t=t.concat(o);}),t}LockFunction=Qs;Log=Js;mergeArrayToString(e,t){if(!(e instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let n="";return typeof t=="function"?e.forEach(r=>{n+=t(r);}):typeof t=="string"?e.forEach(r=>{n+=r[t];}):e.forEach(r=>{Object.values(r).filter(o=>typeof o=="string").forEach(o=>{n+=o;});}),n}mutationObserver(e,t){const n=this,r={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};t=n.assign(r,t);const o=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,i=new o(function(s,l){typeof t.callback=="function"&&t.callback(s,l);});return Array.isArray(e)||e instanceof NodeList?e.forEach(s=>{i.observe(s,t.config);}):n.isJQuery(e)?e.each((s,l)=>{i.observe(l,t.config);}):i.observe(e,t.config),t.immediate&&typeof t.callback=="function"&&t.callback([],i),i}mutationVisible(e,t,n){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(e==null)throw new TypeError("mutatuinVisible target is null");let r={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};r=this.assign(r,n||{});const o=new IntersectionObserver((i,s)=>{i[0].isIntersecting&&typeof t=="function"&&t(i,s);},r);Array.isArray(e)?e.forEach(i=>{o.observe(i);}):o.observe(e);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=Ge,Ge}noConflictFunc(e,t,n=[],r=true){const o=this;if(typeof e!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof t!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(n))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");const i=`__${t}`;function s(){typeof o.windowApi.window[i]<"u"||(o.windowApi.window[i]=o.deepClone(e),Object.values(e).forEach(p=>{typeof p=="function"&&(e[p.name]=()=>{});}));}function l(){Array.from(n).forEach(p=>{Object.values(e).forEach(f=>{typeof f=="function"&&(typeof o.windowApi.window[i]>"u"&&(o.windowApi.window[i]={}),p===f.name&&(o.windowApi.window[i][f.name]=e[f.name],e[f.name]=()=>{}));});});}function c(){typeof o.windowApi.window[i]>"u"||(Object.assign(e,o.windowApi.window[i]),Reflect.deleteProperty(o.windowApi.window,"needReleaseKey"));}function d(){typeof o.windowApi.window[i]>"u"||Array.from(n).forEach(p=>{o.windowApi.window[i][p]&&(e[p]=o.windowApi.window[i][p],Reflect.deleteProperty(o.windowApi.window[i],p),Object.keys(o.windowApi.window[i]).length===0&&Reflect.deleteProperty(window,i));});}r?n.length===0?s():l():n.length===0?c():d();}parseBase64ToBlob(e){if(typeof e!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");const t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=atob(t[1]);let o=r.length;const i=new Uint8Array(o);for(;o--;)i[o]=r.charCodeAt(o);return new Blob([i],{type:n})}parseBase64ToFile(e,t="example"){if(typeof e!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof t!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");const n=e.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]);let i=o.length;const s=new Uint8Array(i);for(;i--;)s[i]=o.charCodeAt(i);return new File([s],t,{type:r})}parseInt(e=[],t=0){if(e==null)return parseInt(t.toString());let n=parseInt(e[e.length-1]);return isNaN(n)&&(n=parseInt(t.toString())),n}async parseBlobToFile(e,t="example"){return new Promise((n,r)=>{fetch(e).then(o=>o.blob()).then(o=>{const i=new File([o],t,{type:o.type});n(i);}).catch(o=>{console.error("Error:",o),r(o);});})}parseCDATA(e=""){let t="";const r=/<!\[CDATA\[([\s\S]*)\]\]>/.exec(e.trim());return r&&r.length>1&&(t=r[r.length-1]),t}async parseFileToBase64(e){const t=new FileReader;return t.readAsDataURL(e),new Promise(n=>{t.onload=function(r){n(r.target.result);};})}parseFromString(e,t="text/html"){return new DOMParser().parseFromString(e,t)}toRegExp(e,t="gi"){let n;if(t=t.toLowerCase(),typeof e=="string"){const r=this.toRegExpStr(e);n=new RegExp(r,t);}else if(e instanceof RegExp)n=e;else throw new Error("Utils.toRegExp 参数text必须是string|Regexp类型");return n}toRegExpStr(e){if(typeof e!="string")throw new TypeError("toRegExpStr 参数text必须是string类型");return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}Progress=ei;hookEvent_isTrusted(e=true,t){function n(o){return new Proxy(o,{get:function(i,s){return s==="isTrusted"?e:Reflect.get(i,s)}})}t==null&&(t=function(o){return o==="click"});const r=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...o){const i=o[0],s=o[1];if(t(i)){if(typeof s=="function")o[1]=function(l){s.call(this,n(l));};else if(typeof s=="object"&&"handleEvent"in s){const l=s.handleEvent;o[1].handleEvent=function(c){if(c!=null)try{c instanceof Proxy,l.call(this,n(c));}catch{Reflect.set(c,"isTrusted",e);}};}}return r.apply(this,o)};}reverseNumber(e){let t=0,n=false;for(e<0&&(n=true,e=Math.abs(e));e>0;)t=t*10+e%10,e=Math.floor(e/10);return n?-t:t}copy(e,t={type:"text",mimetype:"text/plain"}){typeof e=="object"?e instanceof Element?e=e.outerHTML:e=JSON.stringify(e):typeof e!="string"&&(e=e.toString());let n=typeof t=="object"?t.type:t;n.includes("html")?n="text/html":n="text/plain";const r=this;class o{#e;#t;#r;constructor(s,l,c){this.#e=s,this.#t=l,this.#r=c;}async init(){let s=false;const l=await this.requestClipboardPermission();if(console.log(l),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{s=await this.copyDataByClipboard();}catch(c){console.error("复制失败，使用第二种方式，error👉",c),s=this.copyTextByTextArea();}else s=this.copyTextByTextArea();this.#e(s),this.destroy();}destroy(){this.#e=null,this.#t=null,this.#r=null;}isText(){return this.#r.includes("text")}hasClipboard(){return navigator?.clipboard!=null}hasClipboardWrite(){return navigator?.clipboard?.write!=null}hasClipboardWriteText(){return navigator?.clipboard?.writeText!=null}copyTextByTextArea(){try{const s=r.windowApi.document.createElement("textarea");return s.value=this.#t,s.setAttribute("type","text"),s.setAttribute("style","opacity:0;position:absolute;"),s.setAttribute("readonly","readonly"),r.windowApi.document.body.appendChild(s),s.select(),r.windowApi.document.execCommand("copy"),r.windowApi.document.body.removeChild(s),!0}catch(s){return console.error("复制失败，error👉",s),false}}requestClipboardPermission(){return new Promise(s=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(()=>{s(true);}).catch(l=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",l.message??l.name??l.stack]),s(false);}):s(false);})}copyDataByClipboard(){return new Promise((s,l)=>{if(this.isText())navigator.clipboard.writeText(this.#t).then(()=>{s(true);}).catch(c=>{l(c);});else {const c=new Blob([this.#t],{type:this.#r});navigator.clipboard.write([new ClipboardItem({[this.#r]:c})]).then(()=>{s(true);}).catch(d=>{l(d);});}})}}return new Promise(i=>{const s=new o(i,e,n);r.windowApi.document.hasFocus()?s.init():r.windowApi.window.addEventListener("focus",()=>{s.init();},{once:true});})}async getClipboardInfo(){return new Promise(e=>{function t(){navigator.clipboard.readText().then(o=>{e({error:null,content:o});}).catch(o=>{e({error:o,content:""});});}function n(){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t();}).catch(()=>{t();});}function r(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}if(!r()){e({error:new Error("当前环境不支持读取剪贴板Api"),content:""});return}document.hasFocus()?n():window.addEventListener("focus",()=>{n();},{once:true});})}setTimeout(e,t=0){const n=this;if(typeof e!="function"&&typeof e!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof t!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(r=>{n.workerSetTimeout(()=>{r(n.tryCatch().run(e));},t);})}sleep(e=0){const t=this;if(typeof e!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(n=>{t.workerSetTimeout(()=>{n(void 0);},e);})}dragSlider(e,t=this.windowApi.window.innerWidth){const n=this;function r(p,f,b){const h=typeof unsafeWindow>"u"?globalThis:unsafeWindow,g=n.windowApi.document.createEvent("MouseEvents");return g.initMouseEvent(p,true,true,h,0,f,b,f,b,false,false,false,false,0,null),g}const o=typeof e=="string"?Gs.selector(e):e;if(!(o instanceof Node)||!(o instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");const i=o.getBoundingClientRect(),s=i.x||i.left,l=i.y||i.top,c=s+t,d=l;o.dispatchEvent(r("mousedown",s,l)),o.dispatchEvent(r("mousemove",c,d)),o.dispatchEvent(r("mouseleave",c,d)),o.dispatchEvent(r("mouseout",c,d));}enterFullScreen(e=this.windowApi.document.documentElement,t){try{if(e.requestFullscreen)e.requestFullscreen(t);else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.msRequestFullscreen)e.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(n){console.error(n);}}exitFullScreen(e=this.windowApi.document.documentElement){return e.exitFullscreen?e.exitFullscreen():e.msExitFullscreen?e.msExitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen?e.webkitCancelFullScreen():new Promise((t,n)=>{n(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(e,t,n=true){const r=this;if(typeof t!="function"&&typeof t!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof n!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");const o=function(d){return typeof t=="string"?d[t]:t(d)},i=function(d,p){const f=o(p),b=o(d);return n?f<b?-1:f>b?1:0:f>b?-1:f<b?1:0},s=function(d,p){const f=d.length;for(let b=0;b<f-1;b++)for(let h=0;h<f-1-b;h++){const g=d[h],w=d[h+1],A=o(g),v=o(w);if(n==true&&A<v||n==false&&A>v){const S=g.nextElementSibling;w.after(g),S==null?S.parentNode.appendChild(w):S.before(w),d=p();}}};let l=e,c=null;if(e instanceof Function){c=e;const d=c();e=d,l=d;}if(Array.isArray(e))e.sort(i);else if(e instanceof NodeList||r.isJQuery(e))s(e,c),l=c();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return l}stringTitleToUpperCase(e,t=false){let n=e.slice(0,1).toUpperCase();return t?n=n+e.slice(1).toLowerCase():n=n+e.slice(1),n}startsWith(e,t,n=0){const r=this;if(n>e.length)return  false;n!==0&&(e=e.slice(n,e.length));let o=t;if(typeof t=="string")o=new RegExp(`^${t}`);else if(Array.isArray(t)){let i=false;for(const s of t)if(!r.startsWith(e,s,n)){i=true;break}return i}return !!e.match(o)}firstLetterToLowercase(e,t=false){let n=e.slice(0,1).toLowerCase();return t?n=n+e.slice(1).toUpperCase():n=n+e.slice(1),n}toJSON=oe.toJSON.bind(oe);toSearchParamsStr(e,t){const n=this;let r="";return Array.isArray(e)?e.forEach(o=>{r===""?r+=n.toSearchParamsStr(o):r+=`&${n.toSearchParamsStr(o)}`;}):r=new URLSearchParams(Object.entries(e)).toString(),t&&!r.startsWith("?")&&(r=`?${r}`),r}searchParamStrToObj(e){return typeof e!="string"?{}:Object.fromEntries(new URLSearchParams(e))}tryCatch=St;uniqueArray(e=[],t,n=(r,o)=>r===o){if(typeof t=="function"){const r=t,o=new Set,i=[];for(const s of e){const l=r(s);o.has(l)||(o.add(l),i.push(s));}return i}else return Array.from(e).filter(r=>!Array.from(t).some(function(o){return n(r,o)}))}waitArrayLoopToEnd(e,t){const n=this;if(typeof t!="function"&&typeof t!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(e).map(async(r,o)=>{await n.tryCatch(o,r).run(t);}))}waitProperty(e,t){return new Promise(n=>{let r=e;typeof e=="function"&&(r=e()),Reflect.has(r,t)?n(r[t]):Object.defineProperty(r,t,{set:function(o){try{n(o);}catch(i){console.error("Error setting property:",i);}}});})}waitPropertyByInterval(e,t,n=250,r=-1){const o=this;if(e==null)throw new TypeError("checkObj 不能为空对象 ");let i=false;return new Promise((s,l)=>{const c=o.workerSetInterval(()=>{let d=e;typeof e=="function"&&(d=e()),typeof d=="object"&&d!=null&&(typeof t=="function"&&t(d)||Reflect.has(d,t))&&(i=true,o.workerClearInterval(c),s(d[t]));},n);r!==-1&&o.workerSetTimeout(()=>{i||(o.workerClearInterval(c),l());},r);})}async waitVueByInterval(e,t,n=250,r=-1,o="__vue__"){if(e==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let i=false;const s=this;try{await s.waitPropertyByInterval(e,function(l){if(l==null||!(o in l))return !1;if(t==null)return !0;const c=l[o];if(typeof t=="string"){if(t in c)return i=!0,!0}else if(t(c))return i=!0,!0;return !1},n,r);}catch{return i}return i}watchObject(e,t,n,r){typeof n!="function"&&typeof r!="function"||(typeof n=="function"?Object.defineProperty(e,t,{get(){return typeof n=="function"?n(e[t]):e[t]}}):typeof r=="function"?Object.defineProperty(e,t,{set(o){typeof r=="function"&&r(o);}}):Object.defineProperty(e,t,{get(){return typeof n=="function"?n(e[t]):e[t]},set(o){typeof r=="function"&&r(o);}}));}queryProperty(e,t){if(e==null)return;const n=t(e);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:this.queryProperty(n.data,t)}async asyncQueryProperty(e,t){if(e==null)return;const n=await t(e);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:await this.asyncQueryProperty(n.data,t)}createUtils(e){return new on(e)}toFormData(e,t=false,n=false){const r=new FormData;return Object.keys(e).forEach(o=>{let i=e[o];n&&(i=JSON.stringify(i)),typeof i=="number"&&(i=i.toString()),t&&typeof i=="string"&&(i=encodeURIComponent(i)),i instanceof File?r.append(o,i,i.name):r.append(o,i);}),r}toUrl(e){if(typeof e!="string")throw new TypeError("toUrl: text must be string");if(e=e.trim(),e==="")throw new TypeError("toUrl: text must not be empty");return e.startsWith("//")?e=this.windowApi.globalThis.location.protocol+e:e.startsWith("/")&&(e=this.windowApi.globalThis.location.origin+e),new URL(e)}coverObjectFunctionThis=oe.coverObjectFunctionThis.bind(oe);generateUUID=Wt;Vue=si;ModuleRaid=Zs;workerSetTimeout(e,t=0){try{return Bs(e,t)}catch{return this.windowApi.setTimeout(e,t)}}workerClearTimeout(e){try{e!=null&&Ps(e);}catch{}finally{this.windowApi.clearTimeout(e);}}workerSetInterval(e,t=0){try{return Ds(e,t)}catch{return this.windowApi.setInterval(e,t)}}workerClearInterval(e){try{e!=null&&Os(e);}catch{}finally{this.windowApi.clearInterval(e);}}createFunction(...e){let t=e[e.length-1];if(typeof t=="boolean"?e.splice(e.length-1,1):t=false,t){const n=Object.getPrototypeOf(async function(){}).constructor;return new n(...e)}else {const n=Object.getPrototypeOf(function(){}).constructor;return new n(...e)}}}const Ge=new on,nt={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},le={waitRemove(...a){a.forEach(e=>{typeof e=="string"&&ke.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});});},createBlockCSSNode(...a){let e=[];if(a.length!==0&&!(a.length===1&&typeof a[0]=="string"&&a[0].trim()===""))return a.forEach(t=>{Array.isArray(t)?e=e.concat(t):e.push(t);}),ke.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...a){let e=[];if(a.length!==0&&!(a.length===1&&typeof a[0]=="string"&&a[0].trim()===""))return a.forEach(t=>{Array.isArray(t)?e=e.concat(t):e.push(t);}),Bn(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(a){const e=typeof xt=="function"?xt(a.keyName):null;return typeof e=="string"&&e?Bn(e):le.loadStyleLink(a.url)},async loadStyleLink(a){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=a,new Promise(t=>{ke.onReady(()=>{document.head.appendChild(e),t(e);});})},async loadScript(a){let e=document.createElement("script");return e.src=a,new Promise(t=>{e.onload=()=>{t(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(a){return a=a.trim(),a.startsWith("data:")||a.match(/^http(s|):\/\//i)?a:a.startsWith("//")?(a.startsWith("///")||(a=window.location.protocol+a),a):(a.startsWith("/")||(a+="/"),a=window.location.origin+a,a)},fixHttps(a){if(a.startsWith("https://")||!a.startsWith("http://"))return a;try{let e=new URL(a);return e.protocol="https:",e.toString()}catch{return a}},lockScroll(...a){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let t=[document.documentElement,document.body].concat(...a||[]);return t.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){t.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function a(n){navigator.clipboard.readText().then(r=>{n(r);}).catch(r=>{$e.error("读取剪贴板内容失败👉",r),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(r=>{a(n);}).catch(r=>{$e.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),a(n);});}function t(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!t()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(a,e,t=5e3){let n,r=t-e,o=e,i=async s=>{let l=await a(s);if(typeof l=="boolean"&&!l||s){re.workerClearTimeout(n);return}if(o+=e,o>r){i(true);return}n=re.workerSetTimeout(()=>{i(false);},e);};i(false);},findParentNode(a,e,t){if(t){let n=ke.closest(a,t);if(n)return n.querySelector(e)}else return ke.matches(a,e)?a:ke.closest(a,e)},toStr(a){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(a,(n,r)=>r===void 0?e:r,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},re=Ge.noConflict(),m=ke.noConflict(),Oe=It,$e=new re.Log(je,Ae.console||He.console),Kt=je?.script?.name||void 0,ii=It.config.Utils.AnyTouch(),li=false;$e.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});I.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(a){const e=a.setting.type;if(e==="loading")return  false;const t=a.setting.content;return e==="warning"?$e.warn(t):e==="error"?$e.error(t):$e.info(t),true},get position(){return Pe.getValue(nt.qmsg_config_position.key,nt.qmsg_config_position.defaultValue)},get maxNums(){return Pe.getValue(nt.qmsg_config_maxnums.key,nt.qmsg_config_maxnums.defaultValue)},get showReverse(){return Pe.getValue(nt.qmsg_config_showreverse.key,nt.qmsg_config_showreverse.defaultValue)},get zIndex(){let a=Ge.getMaxZIndex(),e=It.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Ge.getMaxValue(a,e)+100}});Oe.GlobalConfig.setGlobalConfig({zIndex:()=>{const a=Ge.getMaxZIndex(void 0,void 0,t=>{if(t?.classList?.contains("qmsg-shadow-container")||t?.closest("qmsg")&&t.getRootNode()instanceof ShadowRoot)return  false}),e=It.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Ge.getMaxValue(a,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ci=new re.GM_Menu({GM_getValue:qe,GM_setValue:De,GM_registerMenuCommand:At,GM_unregisterMenuCommand:zt}),an=new re.Httpx({xmlHttpRequest:qn,logDetails:li});an.interceptors.request.use(a=>a);an.interceptors.response.use(void 0,a=>($e.error("拦截器-请求错误",a),a.type==="onabort"?I.warning("请求取消",{consoleLogContent:true}):a.type==="onerror"?I.error("请求异常",{consoleLogContent:true}):a.type==="ontimeout"?I.error("请求超时",{consoleLogContent:true}):I.error("其它错误",{consoleLogContent:true}),a));Ae.Object.defineProperty,Ae.Function.prototype.apply,Ae.Function.prototype.call,Ae.Element.prototype.appendChild,Ae.setTimeout;const Bn=m.addStyle.bind(m);ke.selector.bind(ke);ke.selectorAll.bind(ke);new re.GM_Cookie;const Tt="GM_Panel",vr="data-init",Hn="data-key",Vn="data-default-value",pi="data-init-more-value",di="data-plugin-search-config",Le={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},Ne={setting:{get width(){return Le.width<550?"88vw":Le.width<700?"550px":"700px"},get height(){return Le.height<450?"70vh":Le.height<550?"450px":"550px"}},settingMiddle:{get width(){return Le.width<350?"88vw":"350px"},get height(){return Le.height<450?"88vh":"450px"}},settingBig:{get width(){return Le.width<800?"92vw":"800px"},get height(){return Le.height<600?"80vh":"600px"}},info:{get width(){return Le.width<350?"88vw":"350px"},get height(){return Le.height<250?"88vh":"250px"}}},ht={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new re.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(a){Array.isArray(a)||(a=[a]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,a);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(a=0){return this.$data.contentConfig.get(a)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let a=false,e;const t=(o,i)=>{typeof i!="string"&&(i=le.toStr(i));const s=new Blob([i]),l=globalThis.URL.createObjectURL(s);m.createElement("a",{href:l,download:o}).click(),re.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(l);},500);},n=()=>{const o=p=>{const f=Oe.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(v,S){v.close();}}},drag:true,mask:{enable:true},width:Ne.info.width,height:Ne.info.height,style:`
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
          }`}),b=f.$shadowRoot.querySelector(".btn-control[data-mode='local']"),h=f.$shadowRoot.querySelector(".btn-control[data-mode='network']"),g=f.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),w=async v=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ot=="function"?typeof st=="function"?(ot().forEach(x=>{st(x);}),I.success("已清空脚本存储的配置")):I.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):I.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof it=="function"?it(v):Object.keys(v).forEach(x=>{const E=v[x];De(x,E);}),I.success("配置导入完毕");},A=v=>new Promise(async S=>{const T=re.toJSON(v);Object.keys(T).length===0?I.warning("解析为空配置，不导入"):await w(T),S(true);});m.on(b,"click",v=>{m.preventEvent(v),f.close();const S=m.createElement("input",{type:"file",accept:".json"});m.on(S,["propertychange","input"],T=>{if(!S.files?.length)return;const x=S.files[0],E=new FileReader;E.onload=()=>{A(E.result);},E.readAsText(x,"UTF-8");}),S.click();}),m.on(h,"click",v=>{m.preventEvent(v),f.close();const S=Oe.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(E,B){E.close();}},ok:{text:"导入",callback:async(E,B)=>{const z=E.text;if(re.isNull(z)){I.error("请填入完整的url");return}const F=I.loading("正在获取配置..."),X=await an.get(z,{allowInterceptConfig:false});if(F.close(),!X.status){$e.error(X),I.error("获取配置失败",{consoleLogContent:true});return}await A(X.data.responseText)&&E.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:Ne.info.width,height:"auto"}),T=S.$shadowRoot.querySelector("input"),x=S.$shadowRoot.querySelector(".pops-prompt-btn-ok");m.on(T,["input","propertychange"],E=>{m.val(T)===""?m.attr(x,"disabled","true"):m.removeAttr(x,"disabled");}),m.onKeyboard(T,"keydown",(E,B,z)=>{E==="Enter"&&z.length===0&&m.val(T)!==""&&m.emit(x,"click");}),m.emit(T,"input");}),m.on(g,"click",async v=>{m.preventEvent(v),f.close();let S=await le.getClipboardText();if(S.trim()===""){I.warning("获取到的剪贴板内容为空");return}await A(S);});},i=(p=`${Kt}_panel-setting-${re.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,f)=>{const b=Oe.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(w,A){w.close();}}},drag:true,mask:{enable:true},width:Ne.info.width,height:Ne.info.height,style:`
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
          }`}),h=b.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),g=b.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");m.on(h,"click",w=>{m.preventEvent(w);try{t(p,f),b.close();}catch(A){I.error(A.toString(),{consoleLogContent:true});}}),m.on(g,"click",async w=>{await re.copy(f)?(I.success("复制成功"),b.close()):I.error("复制失败");});},l=Oe.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(p,f){o();}},cancel:{enable:true,text:"导出",callback(p,f){i(void 0,d);}}},width:Le.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof ot=="function")ot().forEach(f=>{const b=qe(f);Reflect.set(c,f,b);});else {I.warning("不支持函数GM_listValues，仅导出菜单配置");const p=qe(Tt);Reflect.set(c,Tt,p);}const d=le.toStr(c);l.value=d;},r=()=>{let o=je?.script?.supportURL||je?.script?.namespace;typeof o=="string"&&re.isNotNull(o)&&window.open(o,"_blank");};return [{id:"script-version",title:`版本：${je?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(o){new ii(o.$asideLiElement).on("tap",function(s){clearTimeout(e),e=void 0,a?(a=false,n()):(e=setTimeout(()=>{a=false,r();},200),a=true);});}}]},setDefaultBottomContentConfig(a){this.$data.__defaultBottomContentConfig=a;}},Xt={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(a){return a},callback:()=>{Pe.showPanel(ht.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){Pe.isTopWindow()&&ci.add(this.$data.menuOption);},addMenuOption(a){Array.isArray(a)||(a=[a]),this.$data.menuOption.push(...a);},updateMenuOption(a){Array.isArray(a)||(a=[a]),a.forEach(e=>{let t=this.$data.menuOption.findIndex(n=>n.key===e.key);t!==-1&&(this.$data.menuOption[t]=e);});},getMenuOption(a=0){return this.$data.menuOption[a]},deleteMenuOption(a=0){this.$data.menuOption.splice(a,1);}};class fi{storageKey;listenerData;constructor(e){if(typeof e=="string"){const t=e.trim();if(t=="")throw new Error("key参数不能为空字符串");this.storageKey=t;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new Ge.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=qe(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){De(this.storageKey,e);}set(e,t){const n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,n,t);}get(e,t){const n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){const t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,t,void 0);}has(e){const t=this.getLocalValue();return Reflect.has(t,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){st(this.storageKey);}addValueChangeListener(e,t){const n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=false;for(const[n,r]of this.listenerData.entries()){for(let o=0;o<r.length;o++){const i=r[o];(typeof e=="string"&&i.key===e||typeof e=="number"&&i.id===e)&&(r.splice(o,1),o--,t=true);}this.listenerData.set(n,r);}return t}async emitValueChangeListener(...e){const[t,n,r]=e;if(!this.listenerData.has(t))return;let o=this.listenerData.get(t);for(let i=0;i<o.length;i++){const s=o[i];if(typeof s.callback=="function"){let l=this.get(t),c,d;typeof n<"u"&&e.length>=2?d=n:d=l,typeof r<"u"&&e.length>2?c=r:c=l,await s.callback(t,d,c);}}}}const Ve=new fi(Tt),Pe={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new re.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new re.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new re.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new re.Dictionary),this.__onceExecData},get scriptName(){return Kt},get panelConfig(){return this.__panelConfig},set panelConfig(a){this.__panelConfig=a;},key:Tt,attributeKeyName:Hn,attributeDefaultValueName:Vn},init(){this.initContentDefaultValue(),Xt.init();},isTopWindow(){return Ae.top===Ae.self},initContentDefaultValue(){const a=n=>{if(!n.attributes||n.type==="button"||n.type==="container"||n.type==="deepMenu")return;const r=n.attributes;let o=r[vr];if(typeof o=="function"){let c=o();if(typeof c=="boolean"&&!c)return}let i=new Map,s=r[Hn];if(s!=null){const c=r[Vn];i.set(s,c);}let l=r[pi];if(typeof l=="object"&&l&&Object.keys(l).forEach(c=>{const d=l[c];i.set(c,d);}),!i.size){$e.warn(["请先配置键",n]);return}if(n.type==="switch"){let c=typeof n.disabled=="function"?n.disabled():n.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...i.keys());}for(const[c,d]of i.entries())this.setDefaultValue(c,d);},e=n=>{for(let r=0;r<n.length;r++){let o=n[r];a(o);let i=o.views;i&&Array.isArray(i)&&e(i);}},t=[...ht.getAllContentConfig()];for(let n=0;n<t.length;n++){let r=t[n];if(!r.views)continue;const o=r.views;o&&Array.isArray(o)&&e(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(a,e){this.$data.contentConfigInitDefaultValue.has(a)&&$e.warn("请检查该key(已存在): "+a),this.$data.contentConfigInitDefaultValue.set(a,e);},getDefaultValue(a){return this.$data.contentConfigInitDefaultValue.get(a)},setValue(a,e){Ve.set(a,e);},getValue(a,e){const t=Ve.get(a);return t??(this.$data.contentConfigInitDefaultValue.has(a)?this.$data.contentConfigInitDefaultValue.get(a):e)},deleteValue(a){Ve.delete(a);},hasKey(a){return Ve.has(a)},addValueChangeListener(a,e){return Ve.addValueChangeListener(a,(n,r,o)=>{e(a,o,r);})},removeValueChangeListener(a){Ve.removeValueChangeListener(a);},emitMenuValueChange(a,e,t){Ve.emitValueChangeListener(a,t,e);},async exec(a,e,t,n=true){const r=this;let o;typeof a=="string"||Array.isArray(a)?o=()=>a:o=a;let i=false;const s=o();let l=[];Array.isArray(s)?(i=true,l=s):l.push(s);const c=l.find(x=>!this.$data.contentConfigInitDefaultValue.has(x));if(c){$e.warn(`${c} 键不存在`);return}const d=JSON.stringify(l);if(n&&this.$data.onceExecMenuData.has(d))return this.$data.onceExecMenuData.get(d);let p=[];const f=[];let b=[];const h=(x,E)=>{let B=[],z=[],F=[];if(Array.isArray(E))F=F.concat(E);else {const X=K=>{if(typeof K=="object"&&K!=null)if(K instanceof Element)F.push(K);else {const{$css:$,destory:M}=K;$!=null&&(Array.isArray($)?F=F.concat($):F.push($)),typeof M=="function"&&F.push(M);}else F.push(K);};if(E!=null&&Array.isArray(E))for(const K of E)X(K);else X(E);}for(const X of F)if(X!=null){if(X instanceof Element){B.push(X);continue}if(typeof X=="function"){b.push(X);continue}}x?(p=p.concat(B),b=b.concat(z)):(w(),A());},g=x=>!!this.getValue(x),w=()=>{for(let x=0;x<p.length;x++)p[x]?.remove(),p.splice(x,1),x--;},A=()=>{for(let x=0;x<b.length;x++){const E=b[x];E(),b.splice(x,1),x--;}},v=()=>{let x=false;return typeof t=="function"?x=t(l):x=l.every(E=>g(E)),x},S=async x=>{if(v()){const B=l.map(F=>this.getValue(F)),z=await e({value:i?B:B[0],addStoreValue:(...F)=>h(true,F)});h(true,z);}else h(false,[]);};n&&l.forEach(x=>{const E=this.addValueChangeListener(x,(B,z,F)=>S());f.push(E);}),await S();const T={reload(){this.clearStoreStyleElements(),this.destory(),S();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>w(),destory(){return A()},removeValueChangeListener:()=>{f.forEach(x=>{this.removeValueChangeListener(x);});},clearOnceExecMenuData(){n&&r.$data.onceExecMenuData.delete(d);}};return this.$data.onceExecMenuData.set(d,T),T},async execMenu(a,e,t=false,n=false){return await this.exec(a,async r=>await e(r),r=>r.every(i=>{let s=!!this.getValue(i);return Pe.$data.contentConfigInitDisabledKeys.includes(i)&&(s=false,$e.warn(`.execMenu${n?"Once":""} ${i} 被禁用`)),t&&(s=!s),s}),n)},async execMenuOnce(a,e,t=false,n=false){const r=await this.execMenu(a,e,t,true);if(n&&r){const o=()=>{r.reload();};this.removeUrlChangeWithExecMenuOnceListener(a),this.addUrlChangeWithExecMenuOnceListener(a,o);}return r},deleteExecMenuOnce(a){return a=this.transformKey(a),this.$data.onceExecMenuData.delete(a),this.$data.urlChangeReloadMenuExecOnce.delete(a),Ve.removeValueChangeListener(a)},onceExec(a,e){if(a=this.transformKey(a),typeof a!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(a)||(e(),this.$data.onceExecData.set(a,1));},deleteOnceExec(a){a=this.transformKey(a),this.$data.onceExecData.delete(a);},addUrlChangeWithExecMenuOnceListener(a,e){a=this.transformKey(a),this.$data.urlChangeReloadMenuExecOnce.set(a,e);},removeUrlChangeWithExecMenuOnceListener(a){a=this.transformKey(a),this.$data.urlChangeReloadMenuExecOnce.delete(a);},hasUrlChangeWithExecMenuOnceListener(a){return a=this.transformKey(a),this.$data.urlChangeReloadMenuExecOnce.has(a)},async emitUrlChangeWithExecMenuOnceEvent(a){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const t of e)await t(a);},showPanel(a,e=`${Kt}-设置`,t=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let r=a.findIndex(i=>(typeof i.isBottom=="function"?i.isBottom():!!i.isBottom)&&i.id==="script-version")!==-1;!t&&!r&&a.push(...ht.getDefaultBottomContentConfig());let o=Oe.panel({title:{text:e,position:"center",html:false,style:""},content:a,btn:{close:{enable:true,callback:(i,s)=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(i,s)=>{i(),this.$data.$panel=null;}},width:Ne.setting.width,height:Ne.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=o,this.$data.panelContent=a,n||this.registerConfigSearch({$panel:o,content:a});},registerConfigSearch(a){const{$panel:e,content:t}=a,n=async(f,b)=>{if(f==null)return;const h=await b(f);return h&&typeof h.isFind=="boolean"&&h.isFind?h.data:await n(h.data,b)},r=(f,b)=>{const h=new IntersectionObserver(g=>{g.forEach(w=>{w.isIntersecting&&(b?.(),h.disconnect());});},{root:null,threshold:1});h.observe(f),f.scrollIntoView({behavior:"smooth",block:"center"});},o=f=>{const b="pops-flashing";m.onAnimationend(f,()=>{f.classList.remove(b);}),f.classList.add(b);},i=f=>{if(f.type==="dblclick"&&p)return;m.preventEvent(f),l=null;const b=Oe.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:Ne.settingMiddle.width,height:"auto",drag:true,style:`
					${Oe.config.cssText.panelCSS}

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
				`});b.$shadowRoot.querySelector(".search-wrapper");const h=b.$shadowRoot.querySelector(".search-config-text"),g=b.$shadowRoot.querySelector(".search-result-wrapper");h.focus();const w=()=>{m.empty(g);},A=S=>{const T=re.queryProperty(S,B=>B?.next?{isFind:false,data:B.next}:{isFind:true,data:B}),x=m.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${T.matchedData?.path}</div>
							<div class="search-result-item-description">${T.matchedData?.description??""}</div>
						`}),E=Oe.config.PanelHandlerComponents();return m.on(x,"click",B=>{const F=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[S.index];if(!F){I.error(`左侧项下标${S.index}不存在`);return}F.scrollIntoView({behavior:"smooth",block:"center"}),F.click(),n(S.next,async X=>{if(X?.next){const K=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find($=>{const M=Reflect.get($,E.$data.nodeStoreConfigKey);return typeof M=="object"&&M!=null&&M.text===X.name}),2500);if(K)K.click();else return I.error("未找到对应的二级菜单"),{isFind:true,data:X};return {isFind:false,data:X.next}}else {const K=await m.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find($=>Reflect.get($,E.$data.nodeStoreConfigKey)===X.matchedData?.formConfig),2500);if(K){r(K);const $=K.closest(".pops-panel-forms-fold[data-fold-enable]");$&&($.querySelector(".pops-panel-forms-fold-container").click(),await re.sleep(500)),r(K,()=>{o(K);});}else I.error("未找到对应的菜单项");return {isFind:true,data:X}}});}),x},v=S=>{const T=new RegExp(S,"i"),x=[],E=(z,F)=>{for(let X=0;X<z.length;X++){const K=z[X],$=K.views;if($&&Array.isArray($)){const M=re.deepClone(F);if(K.type==="deepMenu"){const C=re.queryProperty(M,y=>y?.next?{isFind:false,data:y.next}:{isFind:true,data:y});C.next={name:K.text};}E($,M);}else {let M,C;if(K.type==="own"){const P=Reflect.get(K.attributes||{},di);P&&(typeof P.text=="string"&&(M=P.text),typeof P.desc=="string"&&(C=P.desc));}else M=K.text,C=Reflect.get(K,"description");const y=[M,C],k=y.findIndex(P=>{if(typeof P=="string")return P.match(T)});if(k!==-1){const P=re.deepClone(F),_=re.queryProperty(P,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});_.next={name:M,matchedData:{path:"",formConfig:K,matchedText:y[k],description:C}};const O=[];re.queryProperty(P,H=>{const R=H?.name;return typeof R=="string"&&R.trim()!==""&&O.push(R),H?.next?{isFind:false,data:H.next}:{isFind:true,data:H}});const Q=O.join(le.escapeHtml(" - "));_.next.matchedData.path=Q,x.push(P);}}}};for(let z=0;z<t.length;z++){const F=t[z];if(!F.views||F.isBottom&&F.id==="script-version")continue;const X=F.views;if(X&&Array.isArray(X)){let K=F.title;typeof K=="function"&&(K=K()),E(X,{index:z,name:K});}}const B=document.createDocumentFragment();for(const z of x){let F=A(z);B.appendChild(F);}w(),g.append(B);};m.on(h,"input",re.debounce(S=>{m.preventEvent(S);let T=m.val(h).trim();if(T===""){w();return}v(T);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(f=>{m.on(f,"dblclick",i);});let l=null,c=false,d,p=false;m.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(f,b)=>{p=true,clearTimeout(d),d=void 0,c&&l===b?(c=false,l=null,i(f)):(d=setTimeout(()=>{c=false;},200),c=true,l=b);},{capture:true}),e.$shadowRoot.appendChild(m.createElement("style",{type:"text/css",textContent:`
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
	
注入速度等级：0`;const Ee=(a,e,...t)=>setTimeout(async()=>{try{await a(...t);}catch(n){I.error(n.toString());}},e),Ar={success:"√ ",error:"× ",warn:"!!! ",info:""},te={setTagList(a,e){m.html(a,"");let t="";e.forEach(n=>{t+=`
				<p class="${n.tag}">${n.text??""}</p>
			`;}),m.html(a,t);},setTag(a,e,t){te.clearTag(a),m.addClass(a,e),typeof t=="string"&&m.html(a,t);},clearTag(a){Object.keys(Ar).forEach(e=>{m.removeClass(a,e);});}},Yt=function(a,e,t,n,r,o){const i={type:"own",attributes:n||{},props:r||{},createLIElement:a,afterAddToUListCallBack:o};return Reflect.set(i.attributes,vr,()=>false),i},L=a=>Yt(t=>{let n=m.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text"></p>
					<p class="pops-panel-item-left-desc-text"></p>
				`});return t.appendChild(n),t},void 0,void 0,void 0,void 0,async(t,n)=>{let r=n.target,o=r.querySelector(".pops-panel-item-left-text"),i=r.querySelector(".pops-panel-item-left-main-text"),s=r.querySelector(".pops-panel-item-left-desc-text"),l=await a();l.tag==null?m.html(i,l.text):m.html(i,Ar[l.tag]+l.text),(l.description==null||l.description==="")&&m.hide(s,false),m.html(s,l.description||"");let c=["support-info"];if(l.tag!=null&&c.push(l.tag),m.addClass(i,c),typeof l.afterRender=="function")try{l.afterRender({...n,$leftContainer:o,$leftText:i,$leftDesc:s});}catch(d){console.log(d),te.setTag(i,"error","afterRender 函数执行错误"+d);}}),G={asideLastVisit:"aside-last-visit"},ui={getWindow(){return Ce.unsafeWindow.isSupport()?Ae:window}};class bi{}class Rt extends bi{isSupportGM(){return typeof V=="object"&&V!=null}}class ce extends Rt{}const se={getApiDocUrl(a,e){return e=e??a,`<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${a}" target="_blank">${e}</a>`}};class hi extends ce{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof V.addElement=="function"}}isSupport(){return typeof pn=="function"}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let i=Reflect.apply(pn,this,r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.addElement,formList:n.views[2].views}].forEach(r=>{let o=r.name.replace(".","__async__");r.formList.push(L(async()=>{let i=null,s=null,l=ui.getWindow(),c=o+"_test_script_exec",d=`${c}_test_str`;try{return i=await r.fn("script",{id:c,textContent:`window["${d}"] = "bar";`}),s=document.querySelector("#"+c),i==null?{text:`${r.name} returns is null`,tag:"error"}:i instanceof HTMLElement?typeof l[d]!="string"?{text:`${r.name} script element is not work`,tag:"error"}:(Reflect.deleteProperty(l,d),{text:le.escapeHtml("支持添加<script>元素且执行js"),tag:"success"}):{text:`${r.name} returns is not style element`,tag:"error"}}catch(p){return console.error(p),{text:"执行错误 "+p,tag:"error"}}finally{s&&s.remove();}}),L(async()=>{let i=null,s=null,l=o+"_test2";try{if(i=await r.fn(document.body,"div",{"data-src":"https://example.com/image.png",id:l}),i==null)return {text:r.name+" returns is null",tag:"error"};if(!(i instanceof HTMLElement))return {text:r.name+" returns is not style element",tag:"error"};if(s=document.querySelector("#"+l),!s)return {text:"不支持3个参数",tag:"error"};const c=s.attachShadow({mode:"closed"});return await r.fn(c,"style",{textContent:"div { color: black; };"}),c.querySelector("style")?i==null?{text:"传入3个参数但是返回为空",tag:"error"}:s.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(c){return console.error(c),{text:"执行错误 "+c,tag:"error"}}finally{s&&s.remove();}}));}),n}}class mi extends ce{isSupport(){return typeof dn=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof V.addStyle=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-GM_addStyle"+e,title:e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let i=Reflect.apply(dn,this,r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.addStyle,formList:n.views[2].views}].forEach(r=>{let o=r.name.replace(".","__async__");r.formList.push(L(async()=>{let i=null,s=null;try{return i=m.createElement("div",{id:o,innerText:o+" test"}),document.body.appendChild(i),s=await r.fn(`
							#${o} {
								background-color: rgb(255, 0, 0);
							}
						`),s==null?{text:`${r.name} returns is null`,tag:"error"}:s instanceof HTMLStyleElement?window.getComputedStyle(i).backgroundColor!=="rgb(255, 0, 0)"?{text:`${r.name} test element background is not rgb(255, 0, 0)`,tag:"error"}:{text:le.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}:{text:`${r.name} returns is not HTMLStyleElement`,tag:"error"}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{i?.remove(),s?.remove();}}));}),n}}class gi extends ce{isSupport(){return typeof Ut=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof V.addValueChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=Ut(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.addValueChangeListener,formList:n.views[2].views}].forEach(r=>{let o=r.name;r.formList.push((()=>{let i=o+"_key_1";return L(()=>({text:"测试监听数据存储改变",description:"",tag:"info",afterRender(s){let l=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(s.$leftContainer,l);let c,d,p=[];m.on(l,"click",async f=>{m.preventEvent(f);try{p.length=0,clearTimeout(c),te.setTag(s.$leftText,"info","等待触发回调"),m.text(s.$leftDesc,this.text),m.show(s.$leftDesc,!1);let b=re.formatTime(Date.now());d=d??await r.fn(i,function(h,g,w,A){console.log(arguments),clearTimeout(c),p.push({tag:"success",text:"支持触发回调"}),typeof h!="string"?p.push({tag:"error",text:`不支持回调参数key，当前类型：${typeof h}`}):p.push({tag:"success",text:`支持回调参数key，当前类型：${typeof h}`}),typeof w!=typeof b?p.push({tag:"error",text:`不支持回调参数newValue，当前类型：${typeof b}`}):p.push({tag:"success",text:`支持回调参数newValue，当前类型：${typeof b}`}),typeof A!="boolean"?p.push({tag:"error",text:`不支持回调参数remote，当前类型：${typeof A}`}):p.push({tag:"success",text:`支持回调参数remote，当前类型：${typeof A}`}),te.setTagList(s.$leftText,p);}),console.log(r.name+" listenerId："+d+" typeof："+typeof d),typeof d!="number"&&typeof d!="string"?p.push({tag:"warn",text:"listenerId类型不是number或string"}):p.push({tag:"success",text:"listenerId类型："+typeof d}),c=setTimeout(()=>{p.push({tag:"error",text:"不支持触发回调"}),te.setTagList(s.$leftText,p);},3e3),De(i,b);}catch(b){I.error(b.toString());}});}}))})());}),n}}class yi extends ce{isSupport(){return (typeof _e=="object"||typeof _e=="function")&&_e!=null}getApiOption(){let e=this.isSupport();return {isSupportList:e&&typeof _e.list=="function",isSupportSet:e&&typeof _e.set=="function",isSupportDelete:e&&typeof _e.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let e=this.isSupportGM()&&(typeof V.cookie=="object"||typeof V.cookie=="function")&&V.cookie!=null;return {name:"GM.cookie",isSupport:e,isSupportList:e&&typeof V.cookie.list=="function",isSupportSet:e&&typeof V.cookie.set=="function",isSupportDelete:e&&typeof V.cookie.delete=="function"}}getUIOption(){let e=this.getApiName(),t=this.getApiOption(),n=this.getAsyncApiOption(),r={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e+".list",`${e} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(i){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:`支持 ${e}，类型 ${typeof _e}`,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]},o=r.views[0].views;if(this.isSupport()&&o.push(L(()=>t.isSupportList?{text:`支持 ${e}.list`,tag:"success"}:{text:`不支持 ${e}.list`,tag:"error"}),L(()=>t.isSupportSet?{text:`支持 ${e}.set`,tag:"success"}:{text:`不支持 ${e}.set`,tag:"error"}),L(()=>t.isSupportDelete?{text:`支持 ${e}.delete`,tag:"success"}:{text:`不支持 ${e}.delete`,tag:"error"})),n.isSupport?o.push(L(()=>n.isSupportList?{text:`支持 ${n.name}.list`,tag:"success"}:{text:`不支持 ${n.name}.list`,tag:"error"}),L(()=>n.isSupportSet?{text:`支持 ${n.name}.set`,tag:"success"}:{text:`不支持 ${n.name}.set`,tag:"error"}),L(()=>n.isSupportDelete?{text:`支持 ${n.name}.delete`,tag:"success"}:{text:`不支持 ${n.name}.delete`,tag:"error"})):o.push(L(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()){let i={name:"test",value:"1",expirationDate:(Date.now()+864e5)/1e3};[{name:e,list:async(...s)=>new Promise((l,c)=>{const[d,p]=s;_e.list(d,(f,b)=>{b?c(b):l(f);});}),set:async(...s)=>new Promise((l,c)=>{const[d,p]=s;_e.set(d,f=>{f?c(f):l(void 0);});}),delete:async(...s)=>new Promise((l,c)=>{const[d,p]=s;_e.delete(d,f=>{f?c(f):l(void 0);});}),formList:r.views[1].views},{name:n.name,list:V.cookie?.list,set:V.cookie?.set,delete:V.cookie?.delete,formList:r.views[2].views}].forEach(s=>{s.name,s.formList.push(L(()=>{try{return {text:le.escapeHtml("测试list获取所有Cookie"),tag:"info",description:"点击按钮进行测试",afterRender(l){let c=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);m.on(c,"click",async d=>{try{m.preventEvent(d);const p=await s.list({});console.log(p),Array.isArray(p)?Oe.alert({title:{text:s.name+".list",position:"center"},content:{text:JSON.stringify(p,null,4),html:!0},drag:!0,mask:{enable:!0},width:Ne.setting.width,height:Ne.setting.height,style:`
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`}):alert("获取的cookie信息不是数组");}catch(p){I.error(p.toString());}}),m.after(l.$leftContainer,c);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}}),L(()=>{try{return {text:le.escapeHtml("测试set新增Cookie"),tag:"info",description:JSON.stringify(i),afterRender(l){let c=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);m.on(c,"click",async d=>{try{m.preventEvent(d),await s.set(i),I.success(s.name+" set cookie success");}catch(p){I.error(p.toString());}}),m.after(l.$leftContainer,c);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}}),L(()=>{try{let l={name:"test"};return {text:le.escapeHtml("测试delete删除Cookie"),tag:"info",description:JSON.stringify(l),afterRender(c){let d=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);m.on(d,"click",async p=>{try{m.preventEvent(p),await s.delete(l),I.success(s.name+" delete cookie success");}catch(f){I.error(f.toString());}}),m.after(c.$leftContainer,d);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}}));});}return r}}class wi extends ce{isSupport(){return typeof st=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof V.deleteValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.name?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=st(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.deleteValue,formList:n.views[2].views}].forEach(r=>{let o=r.name;r.formList.push((()=>{let i=`Test ${o} null`,s=null;return L(()=>({text:"测试存储null值并删除",description:`"${i}": ${s}`,tag:"info",afterRender(l){let c=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(l.$leftContainer,c),m.on(c,"click",async d=>{m.preventEvent(d);try{De(i,s),await r.fn(i);let p=qe(i);typeof p=="object"&&p===null?I.error("该值未删除，读取的值："+p):I.success("成功删除该值");}catch(p){I.error(p.toString());}});}}))})());}),n}}class xi extends ce{isSupport(){return typeof fn=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof V.deleteValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=fn(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.deleteValues,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push((()=>{let o={GM_deleteValues_key_1:555,"GM.deleteValues_key_2":666};return L(()=>({text:"测试存储对象然后删除再读取",description:`${JSON.stringify(o)}`,tag:"info",afterRender(i){let s=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(i.$leftContainer,s),m.on(s,"click",async l=>{m.preventEvent(l);try{it(o);let c=Object.keys(o),d=vt(c);if(JSON.stringify(d)!==JSON.stringify(o)){I.error("写入失败，写入的数据和读取的数据不相同");return}await r.fn(c);let p=vt(c);p==null?I.warning("删除情况未知，因为读取到的数据为null"):typeof p=="object"&&JSON.stringify(p)==="{}"?I.success("删除成功，读取的数据为{}"):(I.error("删除情况未知，因为读取到的数据类型不是object"),console.log(p));}catch(c){I.error(c.toString());}});}}))})());}),n}}class vi extends ce{isSupport(){return typeof un=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof V.download=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let i=r[0];if(typeof r[0]=="string"){const l=r[1];i={url:r[0]},typeof l=="string"&&(i.name=l);}if(typeof i.onload=="function"){const l=i.onload;i.onload=(...c)=>{l(...c),o(s);};}if(typeof i.onerror=="function"){const l=i.onerror;i.onerror=(...c)=>{l(...c),o(s);};}if(typeof i.onprogress=="function"){const l=i.onprogress;i.onprogress=(...c)=>{l(...c);};}if(typeof i.ontimeout=="function"){const l=i.ontimeout;i.ontimeout=(...c)=>{l(...c),o(s);};}const s=un(i);return s}),formList:n.views[1].views},{name:t.name,fn:V.download,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push((()=>{const o="https://httpbin.org/image/png",i="test.png";return L(()=>({text:"下载图片："+o,description:"",tag:"info",afterRender(s){let l=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(s.$leftContainer,l);let c=null,d=false,p=false;m.on(l,"click",async f=>{m.preventEvent(f);try{let b=I.loading("下载中...",{showClose:!0,onClose(){!d&&typeof c=="function"&&c();}});const h=await r.fn({url:o,name:i,onload(){d=!0,b.close(),I.success(`下载 ${i} 已完成`);},onprogress(g){if(typeof g=="object"&&"loaded"in g&&"total"in g&&!p){let A=(g.loaded/g.total*100).toFixed(2);b.setText(`下载中...${A}%`),g.loaded===g.total&&(p=!0);}},onerror(g){b.close(),console.error("下载失败error👉",g),typeof g=="object"&&g.error?I.error(`下载 ${i} 失败或已取消 原因：${g.error}`,{timeout:6e3}):I.error(`下载 ${i} 失败或已取消`);},ontimeout(){b.close(),I.error(`下载 ${i} 请求超时`);}});typeof h=="object"&&h!=null&&"abort"in h&&(c=h.abort);}catch(b){I.error(b.toString());}});}}))})(),(()=>{const o="https://media.w3.org/2010/05/sintel/trailer.mp4",i="test.mp4";return L(()=>({text:"下载视频："+o,description:"",tag:"info",afterRender(s){let l=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(s.$leftContainer,l);let c=null,d=false,p=false;m.on(l,"click",async f=>{m.preventEvent(f);try{let b=I.loading("下载中...",{showClose:!0,onClose(){!d&&typeof c=="function"&&c();}});const h=await r.fn({url:o,name:i,onload(){d=!0,b.close(),I.success(`下载 ${i} 已完成`);},onprogress(g){if(typeof g=="object"&&"loaded"in g&&"total"in g&&!p){let A=(g.loaded/g.total*100).toFixed(2);b.setText(`下载中...${A}%`),g.loaded===g.total&&(p=!0);}},onerror(g){b.close(),console.error("下载失败error👉",g),typeof g=="object"&&g.error?I.error(`下载 ${i} 失败或已取消 原因：${g.error}`,{timeout:6e3}):I.error(`下载 ${i} 失败或已取消`);},ontimeout(){b.close(),I.error(`下载 ${i} 请求超时`);}});typeof h=="object"&&h!=null&&"abort"in h&&(c=h.abort);}catch(b){I.error(b.toString());}});}}))})());}),n}}class Ai extends ce{isSupport(){return typeof xt=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof V.getResourceText=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=xt(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.getResourceText,formList:n.views[2].views}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(L(async()=>{try{return typeof await r.fn("ViewerCSS")=="string"?{text:le.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:le.escapeHtml(r.name+" return is not string"),tag:"error"}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class Si extends ce{isSupport(){return typeof bn=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof V.getResourceUrl=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{let i=Reflect.apply(bn,this,r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.getResourceUrl,formList:n.views[2].views}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(L(async()=>{try{let o=await r.fn("ViewerCSS");return typeof o!="string"?{text:le.escapeHtml(`${r.name} return is not string`),tag:"error"}:(o=o.trim(),o.startsWith("data:text/css;base64")?o.startsWith("data:text/css;base64,LyohCiAqIFZpZXdlci5qcyB2MS4xMS43CiAqIGh0dHBzOi8vZmVuZ3")?{text:le.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:le.escapeHtml("支持通过@resource引用资源并进行base64编码，但是base64编码的实现方式不同"),tag:"warn"}:{text:le.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"})}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class Ti extends ce{isSupport(){return typeof hn=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof V.getTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async()=>new Promise(r=>{hn((...o)=>{r(...o);});}),formList:n.views[1].views},{name:t.name,fn:V.getTab,formList:n.views[2].views}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(L(()=>({text:"测试获取当前Tab",description:"",tag:"info",afterRender(o){let i=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);m.after(o.$leftContainer,i);let s;m.on(i,"click",async l=>{m.preventEvent(l);try{clearTimeout(s),te.setTag(o.$leftText,"error","等待3s内触发回调函数"),s=Ee(()=>{te.setTag(o.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await r.fn();clearTimeout(s),console.log(r.name+" callback tab",c),typeof c=="object"&&c!=null?te.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):te.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){I.error(c.toString());}});}})));}),n}}class Ci extends ce{isSupport(){return typeof mn=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof V.getTabs=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async()=>new Promise(r=>{mn((...o)=>{r(...o);});}),formList:n.views[1].views},{name:t.name,fn:V.getTabs,formList:n.views[2].views}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(L(()=>({text:"测试获取所有Tab",description:"",tag:"info",afterRender(o){let i=m.toElement(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="button" data-type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
								`,false,false);m.after(o.$leftContainer,i);let s;m.on(i,"click",async l=>{try{m.preventEvent(l),clearTimeout(s),te.setTag(o.$leftText,"error","等待3s内触发回调函数"),s=Ee(()=>{te.setTag(o.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await r.fn();clearTimeout(s),console.log(r.name+" callback tabs",c),typeof c=="object"&&c!=null?te.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):te.setTagList(o.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){I.error(c.toString());}});}})));}),n}}class ki extends ce{isSupport(){return typeof qe=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof V.getValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=qe(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.getValue,formList:n.views[2].views}].forEach(r=>{let o=r.name;r.formList.push(...[{key:`Test ${o} boolean`,value:true,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} number`,value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} string`,value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:`Test ${o} undefined`,value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} null`,value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} object`,value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(i=>(()=>{let s=i.key,l=i.value;return L(()=>({text:i.text(),description:i.desc(),tag:"info",afterRender(c){let d=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(c.$leftContainer,d),m.on(d,"click",async p=>{m.preventEvent(p);try{De(s,l);let f=await r.fn(s);if(typeof f==typeof l){if(l===null&&l!=f){I.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}I.success("读取成功，存储类型和读取类型一致");}else I.error("读取成功，但存储类型和读取类型不同");}catch(f){I.error(f.toString());}});}}))})()),(()=>{let i=`Test ${o} null with defaultValue`,s=123;return L(()=>({text:"存储object类型的null，读取时指定默认值为"+s,description:`${o}("${i}", ${s})`,tag:"info",afterRender(l){let c=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(l.$leftContainer,c),m.on(c,"click",async d=>{m.preventEvent(d);try{await r.fn(i,null);let p=await r.fn(i,s);typeof p=="object"&&p==null?I.success("读取的值是存储的值："+p):I.error("读取的值不是存储的值："+p);}catch(p){I.error(p.toString());}});}}))})(),(()=>{let i=`Test ${o} defaultValue`,s=123;return L(()=>({text:"不存储，测试调用默认值",description:`${o}("${i}", ${s})`,tag:"info",afterRender(l){let c=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(l.$leftContainer,c),m.on(c,"click",async d=>{m.preventEvent(d);try{let p=await r.fn(i,s);typeof p==typeof s?I.success("读取的值是默认值："+p):I.error("读取的值不是默认值："+p);}catch(p){I.error(p.toString());}});}}))})());}),n}}class $i extends ce{isSupport(){return typeof vt=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof V.getValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=vt(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.getValues,formList:n.views[2].views}].forEach(r=>{let o=r.name;r.formList.push(L(()=>({text:"测试直接读取",description:"没有入参",tag:"info",afterRender(i){let s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);m.after(i.$leftContainer,s),m.on(s,"click",async l=>{m.preventEvent(l);try{let c=await r.fn();I.info("请在控制台查看读取的数据"),console.log(c);}catch(c){I.error(c.toString());}});}})),L(()=>{let i=re.toJSON(`{
								"${o}-test-key-non-exists-1": 1111,
								"${o}-test-key-non-exists-2": 2222,
							}`);return {text:"测试读取不存在的数据",description:"数据默认值："+JSON.stringify(i),tag:"info",afterRender(s){let l=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);m.after(s.$leftContainer,l),m.on(l,"click",async c=>{m.preventEvent(c);try{let d=await r.fn(i);console.log(d),d==null?I.error("读取失败，读取的数据为null"):JSON.stringify(d)===JSON.stringify(i)?I.success("读取成功，读取的数据和默认值相同"):I.error("读取成功，但读取的数据和默认值不同");}catch(d){I.error(d.toString());}});}}}),(()=>{let i=re.toJSON(`{
							"${o}-test-key-1": 1,
							"${o}-test-key-2": 2,
						}`);return L(()=>({text:"测试存储对象并读取",description:JSON.stringify(i),tag:"info",afterRender(s){let l=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(s.$leftContainer,l),m.on(l,"click",async c=>{m.preventEvent(c);try{it(i);let d=Object.keys(i),p=await r.fn(d);console.log(p),p==null?I.error("读取失败，读取的数据为null"):JSON.stringify(p)===JSON.stringify(i)?I.success("读取成功，写入的数据和读取的数据相同"):I.error("读取成功，但写入的数据和读取的数据不同");}catch(d){I.error(d.toString());}});}}))})());}),n}}class Ei extends ce{isSupport(){return typeof je=="object"&&je!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof V.info=="object"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（GM）",views:[]}]};return this.isSupport()&&[{name:e,fn:je,formList:n.views[1].views},{name:t.name,fn:V.info,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push(...[{value:r.fn?.downloadMode,type:"string",text:`${r.name}.downloadMode`,notExistsTag:"error"},{value:r.fn?.scriptHandler,type:"string",text:`${r.name}.scriptHandler`},{value:r.fn?.scriptMetaStr,type:"string",text:`${r.name}.scriptMetaStr`},{value:r.fn?.version,type:"string",text:`${r.name}.version`},{value:r.fn?.script,type:"object",text:`${r.name}.script`},{value:r.fn?.script?.name,type:"string",text:`${r.name}.script.name`},{value:r.fn?.script?.author,type:"string",text:`${r.name}.script.author`},{value:r.fn?.script?.description,type:"string",text:`${r.name}.script.description`},{value:r.fn?.script?.version,type:"string",text:`${r.name}.script.version`}].map(o=>L(()=>{try{return o.value!=null&&typeof o.value===o.type?{text:"支持 "+o.text+" 类型："+o.type,tag:"success"}:{text:"不支持 "+o.text+" 类型："+o.type,tag:o.notExistsTag??"error"}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}})));}),n}}class Mi extends ce{isSupport(){return typeof ot=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof V.listValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=ot(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.listValues,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push(L(()=>({text:"查看存储的所有键名",tag:"info",afterRender(o){let i=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);m.after(o.$leftContainer,i),m.on(i,"click",async s=>{m.preventEvent(s);try{let l=await r.fn();console.log(r.name+" call result",l),Array.isArray(l)?l.find(d=>typeof d!="string")?I.error("返回值数组中存在非string类型"):alert(JSON.stringify(l,null,4)):I.error("返回值不是数组");}catch(l){I.error(l.toString());}});}})));}),n}}class Li extends ce{isSupport(){return typeof gn=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof V.log=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=gn(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.log,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push(L(()=>{try{let o="test "+r.name;return {text:le.escapeHtml("请在控制台查看输出"),tag:"info",description:"test "+r.name,afterRender(i){let s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);m.on(s,"click",async l=>{m.preventEvent(l);try{await r.fn(o);}catch(c){I.error(c.toString());}}),m.after(i.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class Ii extends ce{isSupport(){return typeof yn=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof V.notification=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async r=>new Promise(o=>{let i=r.onclick,s=yn({...r,onclick(...l){typeof i=="function"&&Reflect.apply(i,this,l),o(s??true);}});}),formList:n.views[1].views},{name:t.name,fn:V.notification,formList:n.views[2].views}].forEach(r=>{r.name.replace(".","__async__"),r.formList.push(L(()=>{try{return {text:le.escapeHtml("点击通知的内容测试url"),tag:"info",description:"https://example.com/",afterRender(o){let i=o.target,s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);m.on(s,"click",async l=>{m.preventEvent(l);try{await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/"});}catch(c){I.error(c.toString());}}),m.after(o.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{let o,i,s=!1,l=!1;return {text:"测试通知的timeout",description:"请勿点击通知",tag:"info",afterRender(c){o=c.target,i=c.$leftContainer;let d=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),p,f=re.debounce(()=>{try{clearTimeout(p),m.html(c.$leftText,'<p class="success">测试成功，触发</p>'),s=!1,l=!1;}catch(b){I.error(b.toString());}},800);m.on(d,"click",async b=>{try{m.preventEvent(b),clearTimeout(p);let h=10,g=h,w=()=>{let v="正在等待触发超时：5000ms";return g--,v};te.setTag(c.$leftText,"info",w()),p=Ee(()=>{te.setTag(c.$leftText,"error","测试超时，未触发ondone回调");},h*1e3);const A=await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/",timeout:5e3,ondone(){f();}});}catch(h){I.error(h.toString());}}),m.after(i,d);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{let o,i,s=!1,l=!1,c=!1,d="点击通知的内容测试onclick、ondone函数";return {text:d,description:"https://example.com/",tag:"info",afterRender(f){o=f.target,i=f.$leftContainer;let b=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),h,g,w=re.debounce(()=>{try{clearTimeout(h),clearInterval(g);let A="",v="success",S="",T="success";s?(A+="支持 onclick 函数",l?(A=A.trim(),A+="且支持提供 event 参数"):(A+="但是不支持提供 event 参数",v="warn")):(A+="不支持 onclick 函数",v="error"),c?S+="支持 ondone 函数":(S+="不支持 ondone 函数",T="error"),m.html(f.$leftText,`
												<p class="${v}">${A}</p>
												<p class="${T}">${S}</p>`),s=!1,c=!1,l=!1;}catch(A){I.error(A.toString());}},800);m.on(b,"click",async A=>{try{m.preventEvent(A),clearTimeout(h),clearInterval(g);let v=10,S=v,T=()=>{let x=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${S}s`;return S--,x};m.text(f.$leftText,T()),m.text(f.$leftDesc,d),m.show(f.$leftDesc,!1),h=Ee(()=>{clearInterval(g),te.setTag(f.$leftText,"error","测试超时，未触发回调");},v*1e3),g=setInterval(()=>{m.text(f.$leftText,T());},1e3),await r.fn({title:`测试 ${r.name} 标题`,text:`测试 ${r.name} 内容`,url:"https://example.com/",onclick:x=>{console.log(x),s=!0,x&&typeof x.preventDefault=="function"&&(l=!0,x.preventDefault()),w();},ondone(){c=!0,w();}});}catch(v){I.error(v.toString());}}),m.after(i,b);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{let o,i,s=!1,l=!1,c=!1,d="123",p="456",f="notification_tag_"+Date.now(),b={title:"测试通知的内容更新（tag）",text:d,tag:f},h=`更新前：${d}，更新后：${p}`;return {text:b.title,description:h,tag:"info",afterRender(g){o=g.target,i=g.$leftContainer;let w=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),A,v;m.on(w,"click",async S=>{try{m.preventEvent(S),clearTimeout(A),clearInterval(v);let T=5,x=T,E=()=>{let B=`${x}s后通知的内容将更新为：${p}`;return x--,B};m.text(g.$leftDesc,E()),m.show(g.$leftDesc,!1),A=setTimeout(async()=>{clearInterval(v),m.text(g.$leftDesc,h),r.fn({...b,text:p});},T*1e3),v=setInterval(()=>{m.text(g.$leftDesc,E());},1e3),await r.fn(b);}catch(T){I.error(T.toString());}}),m.after(i,w);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class _i extends ce{isSupport(){return typeof wn=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof V.openInTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=wn(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.openInTab,formList:n.views[2].views}].forEach(r=>{r.formList.push(L(()=>{try{return {text:"后台打开 active: false",tag:"info",afterRender(o){let i=o.target,s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);m.on(s,"click",async l=>{try{m.preventEvent(l),m.text(o.$leftDesc,this.text),m.show(o.$leftDesc,!1);let c=await r.fn("https://www.example.com/",{active:!1});if(typeof c=="object")if(c==null)te.setTag(o.$leftText,"error","返回值为null");else {let d="close"in c&&typeof c.close=="function",p="closed"in c&&typeof c.closed=="boolean",f="onclose"in c;m.html(o.$leftText,`
													${d?'<p class="success">支持 .close()</p>':'<p class="error">不支持 .close()</p>'}
													${p?'<p class="success">支持 .closed</p>':'<p class="error">不支持 .closed</p>'}
													${f?'<p class="success">支持设置属性 .onclose</p>':'<p class="error">不支持设置属性 .onclose</p>'}
										`);}else te.setTag(o.$leftText,"error","返回值不是对象："+typeof c);}catch(c){I.error(c.toString());}}),m.after(o.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(o){let i=o.target,s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),l,c=()=>{clearTimeout(l),te.setTag(o.$leftText,"success","测试新标签页打开成功");};m.on(s,"click",async d=>{try{m.preventEvent(d),m.off(Ae,"blur",c,{capture:!0}),clearTimeout(l),te.setTag(o.$leftText,"info","等待页面失去焦点..."),m.text(o.$leftDesc,this.text),m.show(o.$leftDesc,!1),m.on(Ae,"blur",c,{capture:!0,once:!0}),await r.fn("https://www.example.com/",{active:!0}),l=Ee(()=>{m.off(Ae,"blur",c,{capture:!0}),te.setTag(o.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch(p){I.error(p.toString());}}),m.after(o.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(o){let i=o.target,s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),l;m.on(s,"click",async c=>{try{m.preventEvent(c),clearTimeout(l),te.setTag(o.$leftText,"info","等待调用 .close()"),m.text(o.$leftDesc,this.text),m.show(o.$leftDesc,!1);let d=await r.fn("https://www.example.com/");d&&typeof d?.close=="function"?l=Ee(()=>{try{d.close(),te.setTag(o.$leftText,"success","成功调用 .close()");}catch(p){te.setTag(o.$leftText,"error","调用 .close() 方法失败 "+p);}},1e3):te.setTag(o.$leftText,"error","返回对象中不支持 .close() 方法");}catch(d){I.error(d.toString());}}),m.after(o.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(o){let i=o.target,s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),l,c;m.on(s,"click",async d=>{try{m.preventEvent(d),clearTimeout(c),clearTimeout(l),te.setTag(o.$leftText,"info","等待触发监听 .onclose"),m.text(o.$leftDesc,this.text),m.show(o.$leftDesc,!1);let p=await r.fn("https://www.example.com/");typeof p=="object"&&p!=null&&(p.onclose=()=>{clearTimeout(l),clearTimeout(c),te.setTag(o.$leftText,"success","成功触发 .onclose");}),p&&typeof p?.close=="function"?l=Ee(()=>{try{p.close(),c=Ee(()=>{te.setTag(o.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch(f){te.setTag(o.$leftText,"error","调用 .close() 方法失败 "+f);}},1e3):te.setTag(o.$leftText,"error","返回对象中不支持 .close() 方法");}catch(p){I.error(p.toString());}}),m.after(o.$leftContainer,s);}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class Ri extends ce{isSupport(){return typeof At=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof V.registerMenuCommand=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=At(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.registerMenuCommand,formList:n.views[2].views}].forEach(r=>{r.formList.push(L(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(o){let i=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);m.after(o.$leftContainer,i);let s,l;m.on(i,"click",async c=>{try{m.preventEvent(c),clearTimeout(s),clearInterval(l),m.text(o.$leftDesc,this.text),m.show(o.$leftDesc,!1);let d=10,p=()=>{let b=`已执行注册菜单，请在${d}s内点击菜单项`;return d--,b};te.setTag(o.$leftText,"info",p()),l=setInterval(()=>{te.setTag(o.$leftText,"info",p());},1e3),s=Ee(()=>{clearInterval(l),te.setTag(o.$leftText,"error","测试超时，未触发回调");},10*1e3);const f=await r.fn("Test Menu",b=>{try{clearInterval(l),clearTimeout(s),te.clearTag(o.$leftText);let h=[];h.push({tag:"success",text:"支持注册菜单"}),b?h.push({tag:"success",text:"支持点击回调且有event参数"}):h.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof f=="number"||typeof f=="string"?h.push({tag:"success",text:"函数返回值是string|number"}):h.push({tag:"error",text:"函数返回值不是string|number："+typeof f}),m.html(o.$leftText,h.map(g=>`<p class="${g.tag}">${g.text}</p>`).join(`
`));}catch(h){I.error(h.toString(),{consoleLogContent:!0});}});}catch(d){I.error(d.toString());}});}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}),L(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(o){let i=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);m.after(o.$leftContainer,i);let s;m.on(i,"click",async l=>{try{m.preventEvent(l),clearTimeout(s);const c=await r.fn("Test Update Menu",d=>{});I.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(s),s=Ee(async()=>{await r.fn("Test Update Menu Success!!!",()=>{},{id:c}),I.success("已执行更新菜单命令，请自行验证");},3e3);}catch(c){I.error(c.toString());}});}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class Ni extends ce{isSupport(){return typeof xn=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof V.removeValueChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=xn(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.removeValueChangeListener,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push((()=>{let o=e+"_key_1";return L(()=>({text:"测试移除监听器",description:"",tag:"info",afterRender(i){let s=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(i.$leftContainer,s);let l=[];m.on(s,"click",async c=>{m.preventEvent(c);try{l.length=0,te.setTag(i.$leftText,"info","等待移除监听器"),m.text(i.$leftDesc,this.text),m.show(i.$leftDesc,!1);let d=re.formatTime(Date.now()),p=Ut(o,function(f,b,h,g){console.log(arguments),l.push({tag:"error",text:"未成功移除监听器"}),te.setTagList(i.$leftText,l);});await r.fn(p),l.push({tag:"success",text:"支持移除监听器"}),te.setTagList(i.$leftText,l),De(o,d);}catch(d){I.error(d.toString());}});}}))})());}),n}}class Oi extends ce{isSupport(){return typeof qr=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof V.saveTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]}]};return this.isSupport()&&n.views[1].views.push(L(()=>{try{return {text:le.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}})),n}}class Pi extends ce{isSupport(){return typeof vn=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof V.setClipboard=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{if(typeof r[2]=="function"){const i=r[2];r[2]=(...s)=>{i(...s),o(void 0);};}vn(...r);}),formList:n.views[1].views},{name:t.name,fn:async(...r)=>{const o=r[2];await V.setClipboard(...r),typeof o=="function"&&o();},formList:n.views[2].views}].forEach(r=>{r.formList.push(L(()=>({text:"复制内容到剪贴板：Test "+r.name,tag:"info",afterRender(o){let i=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);m.after(o.$leftContainer,i);let s;m.on(i,"click",async l=>{try{m.preventEvent(l),clearTimeout(s),I.info("等待3s内触发成功复制的回调"),s=Ee(()=>{te.setTag(o.$leftText,"error","不支持触发回调函数");},3e3),await r.fn("Test "+r.name,"text",()=>{clearTimeout(s),te.setTag(o.$leftText,"success","支持触发回调函数");});}catch(c){I.error(c.toString());}});}})));}),n}}class Di extends ce{isSupport(){return typeof De=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof V.setValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=De(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.setValue,formList:n.views[2].views}].forEach(r=>{let o=r.name;r.formList.push(...[{key:`Test ${o} boolean`,value:true,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} number`,value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} string`,value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:`Test ${o} undefined`,value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} null`,value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${o} object`,value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(i=>(()=>{let s=i.key,l=i.value;return L(()=>({text:i.text(),description:i.desc(),tag:"info",afterRender(c){let d=m.toElement(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);m.after(c.$leftContainer,d),m.on(d,"click",async p=>{m.preventEvent(p);try{await r.fn(s,l),I.info("执行写入完毕，请自行查看是否成功写入");}catch(f){I.error(f.toString());}});}}))})()));}),n}}class Bi extends ce{isSupport(){return typeof it=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof V.setValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=it(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.setValues,formList:n.views[2].views}].forEach(r=>{r.name,r.formList.push((()=>{let o={foo:1,bar:2};return L(()=>({text:"测试存储对象",description:JSON.stringify(o),tag:"info",afterRender(i){let s=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);m.after(i.$leftContainer,s),m.on(s,"click",async l=>{m.preventEvent(l);try{await r.fn(o),I.info("执行写入完毕，请自行查看是否成功写入");}catch(c){I.error(c.toString());}});}}))})());}),n}}class Hi extends ce{isSupport(){return typeof zt=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof V.unregisterMenuCommand=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]};return this.isSupport()&&[{name:e,fn:async(...r)=>new Promise(o=>{const i=zt(...r);o(i);}),formList:n.views[1].views},{name:t.name,fn:V.unregisterMenuCommand,formList:n.views[2].views}].forEach(r=>{r.formList.push(L(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(o){let i=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);m.after(o.$leftContainer,i);let s;m.on(i,"click",l=>{try{m.preventEvent(l),clearTimeout(s);const c=At("Test UnRegister Menu",d=>{});I.info("已注册菜单，10s后自动执行卸载",{timeout:10*1e3}),clearTimeout(s),s=Ee(async()=>{await r.fn(c),I.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(c){I.error(c.toString());}});}}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}}));}),n}}class Vi extends ce{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof Ae=="object"&&Ae!=null}getUIOption(){let e=this.getApiName(),t={id:"aside-"+e,title:e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(n){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"container",text:"功能测试",views:[]}]};return this.isSupport()&&t.views[1].views.push(L(()=>{let n="test-gm-window",r=He==Ae;return He[n]=n,r=typeof Ae[n]!="string",Reflect.deleteProperty(He,n),r?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),t}}class Ui extends ce{isSupport(){return typeof Gr=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof V.webRequest=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]}]};return this.isSupport()&&n.views[1].views.push(L(()=>{try{return {text:le.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}})),n}}class zi extends ce{isSupport(){return typeof qn=="function"}getApiName(){return "GM_xmlhttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof V.xmlHttpRequest=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(r){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),L(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"container",text:"功能测试",views:[]}]};return this.isSupport()&&n.views[1].views.push(L(()=>{try{return {text:le.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}})),n}}class Fi extends ce{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof V=="object"&&V!=null}getUIOption(){}}class ji extends ce{isSupport(){return (typeof ve=="object"||typeof ve=="function")&&ve!=null&&typeof ve?.setMute=="function"&&typeof ve?.getState=="function"&&typeof ve?.addStateChangeListener=="function"&&typeof ve?.removeStateChangeListener=="function"}getApiOption(){let e=this.isSupport();return {isSupport_setMute:e&&typeof ve?.setMute=="function",isSupport_getState:e&&typeof ve?.getState=="function",isSupport_addStateChangeListener:e&&typeof ve?.addStateChangeListener=="function",isSupport_removeStateChangeListener:e&&typeof ve?.removeStateChangeListener=="function"}}getApiName(){return "GM_audio"}getAsyncApiOption(){let e=this.isSupportGM()&&(typeof V.audio=="object"||typeof V.audio=="function")&&V.audio!=null&&typeof V.audio?.setMute=="function"&&typeof V.audio?.getState=="function"&&typeof V.audio?.addStateChangeListener=="function"&&typeof V.audio?.removeStateChangeListener=="function";return {name:"GM.audio",isSupport:e,isSupport_setMute:e&&typeof V.audio?.setMute=="function",isSupport_getState:e&&typeof V.audio?.getState=="function",isSupport_addStateChangeListener:e&&typeof V.audio?.addStateChangeListener=="function",isSupport_removeStateChangeListener:e&&typeof V.audio?.removeStateChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getApiOption(),n=this.getAsyncApiOption(),r={id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e+".setMute",`${e} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(i){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"函数测试",views:[L(()=>this.isSupport()?{text:`支持 ${e}，类型：${typeof ve}`,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"container",text:"功能测试",views:[]},{type:"container",text:"功能测试（异步）",views:[]}]},o=r.views[0].views;return this.isSupport()&&o.push(L(()=>t.isSupport_setMute?{text:`支持 ${e}.setMute`,tag:"success"}:{text:`不支持 ${e}.setMute`,tag:"error"}),L(()=>t.isSupport_getState?{text:`支持 ${e}.getState`,tag:"success"}:{text:`不支持 ${e}.getState`,tag:"error"}),L(()=>t.isSupport_addStateChangeListener?{text:`支持 ${e}.addStateChangeListener`,tag:"success"}:{text:`不支持 ${e}.addStateChangeListener`,tag:"error"}),L(()=>t.isSupport_removeStateChangeListener?{text:`支持 ${e}.removeStateChangeListener`,tag:"success"}:{text:`不支持 ${e}.removeStateChangeListener`,tag:"error"})),n.isSupport?o.push(L(()=>n.isSupport_setMute?{text:`支持 ${n.name}.setMute`,tag:"success"}:{text:`不支持 ${n.name}.setMute`,tag:"error"}),L(()=>n.isSupport_getState?{text:`支持 ${n.name}.getState`,tag:"success"}:{text:`不支持 ${n.name}.getState`,tag:"error"}),L(()=>n.isSupport_addStateChangeListener?{text:`支持 ${n.name}.addStateChangeListener`,tag:"success"}:{text:`不支持 ${n.name}.addStateChangeListener`,tag:"error"}),L(()=>n.isSupport_removeStateChangeListener?{text:`支持 ${n.name}.removeStateChangeListener`,tag:"success"}:{text:`不支持 ${n.name}.removeStateChangeListener`,tag:"error"})):o.push(L(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()&&[{name:e,setMute:async(...i)=>new Promise((s,l)=>{const[c,d]=i;ve.setMute(c,p=>{p?l(p):s(void 0);});}),getState:async(...i)=>new Promise((s,l)=>{const[c,d]=i;ve.getState(p=>{p||l(new Error("failed to read state")),s(p);});}),addStateChangeListener:async(...i)=>new Promise((s,l)=>{const[c]=i;ve.addStateChangeListener(c,d=>{d?l(d):s(void 0);});}),removeStateChangeListener:async(...i)=>new Promise((s,l)=>{const[c]=i;ve.removeStateChangeListener(c,d=>{d?l(d):s(void 0);});}),formList:r.views[1].views},{name:n.name,setMute:async(...i)=>{const[s]=i;return await V.audio?.setMute(s)},getState:async(...i)=>{const s=await V.audio?.getState();if(typeof s=="object"&&s!=null){if(typeof s?.isMuted!="boolean")throw new Error("GM.audio.getState 返回值类型错误");return s}else throw new Error("返回值不是一个对象")},addStateChangeListener:V.audio?.addStateChangeListener,removeStateChangeListener:V.audio?.removeStateChangeListener,formList:r.views[2].views}].forEach(i=>{i.name,i.formList.push(L(()=>{try{return {text:le.escapeHtml("测试设置当前tab静音"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=m.toElement(`
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,!1,!1);m.on(l,"click",async c=>{try{m.preventEvent(c);const d=await i.setMute({isMuted:!0});console.log(i.name+".setMute result：",d),d===void 0?te.setTag(s.$leftText,"success","执行成功"):te.setTag(s.$leftText,"warn","执行成功，但返回值类型不同："+d),m.text(s.$leftDesc,this.text),m.show(s.$leftDesc,!1);}catch(d){I.error(d.toString());}}),m.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}}),L(()=>{try{return {text:le.escapeHtml("测试取消当前tab静音"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=m.toElement(`
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,!1,!1);m.on(l,"click",async c=>{try{m.preventEvent(c);const d=await i.setMute({isMuted:!1});console.log(i.name+".setMute result：",d),d===void 0?te.setTag(s.$leftText,"success","执行成功"):te.setTag(s.$leftText,"warn","执行成功，但返回值类型不同："+d),m.text(s.$leftDesc,this.text),m.show(s.$leftDesc,!1);}catch(d){I.error(d.toString());}}),m.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}}),L(()=>{try{return {text:le.escapeHtml("获取当前tab静音状态信息"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);m.on(l,"click",async c=>{try{m.preventEvent(c);const d=await i.getState();if(console.log(i.name+".getState result：",d),typeof d=="object"&&d!==null){const p=[];typeof d?.isMuted=="boolean"?p.push(`
                                                        <p class="support-info success">支持属性：isMuted，当前类型：${typeof d?.isMuted}</p>    
                                                    `):p.push(`
                                                        <p class="support-info error">不支持属性：isMuted，当前类型：${typeof d?.isMuted}</p>    
                                                    `),"muteReason"in d&&typeof d?.muteReason=="string"||d?.muteReason===void 0?p.push(`
                                                        <p class="support-info success">支持属性：muteReason，当前类型：${typeof d?.muteReason}</p>    
                                                    `):p.push(`
                                                        <p class="support-info error">不支持属性：muteReason，当前类型：${typeof d?.muteReason}</p>    
                                                    `),typeof d?.isAudible=="boolean"?p.push(`
                                                        <p class="support-info success">支持属性：isAudible，当前类型：${typeof d?.isAudible}</p>
                                                    `):p.push(`
                                                        <p class="support-info error">不支持属性：isAudible，当前类型：${typeof d?.isAudible}</p>
                                                    `),te.setTag(s.$leftText,"success",p.join(`
`));}else te.setTag(s.$leftText,"error","返回值类型错误："+typeof d);m.text(s.$leftDesc,this.text),m.show(s.$leftDesc,!1),alert(JSON.stringify(d,null,4));}catch(d){I.error(d.toString());}}),m.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}}),L(()=>{try{return {text:le.escapeHtml("测试监听静音状态改变"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1),c;m.on(l,"click",async d=>{try{m.preventEvent(d),await i.addStateChangeListener(p=>{console.log(i.name+".addStateChangeListener callback change value：",p),alert(JSON.stringify(p,null,4));}),await re.sleep(500),await i.setMute({isMuted:!0}),await re.sleep(500),await i.setMute({isMuted:!1});}catch(p){I.error(p.toString());}}),m.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}}),L(()=>{try{return {text:le.escapeHtml("测试移除监听器"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=m.toElement(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1),c=!0,d;m.on(l,"click",async p=>{try{m.preventEvent(p);let f=b=>{c=!1,I.error("移除监听器失败");};d=I.loading("处理监听器中..."),await i.addStateChangeListener(f),await i.removeStateChangeListener(f),d.setText("等待500ms，设置当前Tab静音"),await re.sleep(500),await i.setMute({isMuted:!0}),d.setText("等待500ms，设置当前Tab取消静音"),await re.sleep(500),await i.setMute({isMuted:!1}),d.close(),c&&I.success("移除监听器成功");}catch(f){d?.close(),I.error(f.toString());}}),m.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}}));}),r}}const Ce={unsafeWindow:new Vi,GM:new Fi,addElement:new hi,addStyle:new mi,download:new vi,getResourceText:new Ai,getResourceUrl:new Si,info:new Ei,log:new Li,notification:new Ii,openInTab:new _i,registerMenuCommand:new Ri,unregisterMenuCommand:new Hi,setClipboard:new Pi,getTab:new Ti,saveTab:new Oi,getTabs:new Ci,setValue:new Di,getValue:new ki,deleteValue:new wi,listValues:new Mi,setValues:new Bi,getValues:new $i,deleteValues:new xi,addValueChangeListener:new gi,removeValueChangeListener:new Ni,xmlHttpRequest:new zi,webRequest:new Ui,cookie:new yi,audio:new ji},ze={$storageKey:"gm-api-test-storage-config",set(a,e){let t=window.localStorage.getItem(ze.$storageKey)??"{}",n=re.toJSON(t);n[a]=e,window.localStorage.setItem(ze.$storageKey,JSON.stringify(n,(r,o)=>typeof o=="function"?o.tString():o));},get(a,e){let t=window.localStorage.getItem(ze.$storageKey)??"{}";return re.toJSON(t)[a]??e},delete(a){let e=window.localStorage.getItem(ze.$storageKey)??"{}",t=re.toJSON(e);Reflect.deleteProperty(t,a),window.localStorage.setItem(ze.$storageKey,JSON.stringify(t,(n,r)=>typeof r=="function"?r.tString():r));}},W={set(a,e){Ce.setValue.isSupport()&&Ce.getValue.isSupport()&&Ce.deleteValue.isSupport()?De(a,e):ze.set(a,e);},get(a,e){return Ce.setValue.isSupport()&&Ce.getValue.isSupport()&&Ce.deleteValue.isSupport()?qe(a,e):ze.get(a,e)},delete(a){Ce.setValue.isSupport()&&Ce.getValue.isSupport()&&Ce.deleteValue.isSupport()?st(a):ze.delete(a);}},qi=()=>{let a=[],e=[];Object.keys(Ce).forEach(n=>{let r=Ce[n],o=r.getApiName(),i=r.isSupport(),s=r.getAsyncApiOption();i?a.push({name:o,isSupport:i}):e.push({name:o,isSupport:i}),s&&(s.isSupport?a.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+o}):e.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+o}));});let t=n=>{let r=m.createElement("div",{className:"gm-api-features-item",innerHTML:`
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
			`});return m.on(r,"click",o=>{m.preventEvent(o);let i=r.getRootNode(),s=re.isNotNull(n.leftTargetSelector)?n.leftTargetSelector:"#aside-"+n.name,l=i.querySelector(s);l&&(l.click(),l.scrollIntoView({behavior:"smooth"}));}),r};return {id:"component-common",title:"通用",scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)==="component-common"},clickCallback(n){W.set(G.asideLastVisit,"component-common");},views:[{type:"container",text:"@run-at document-start<br>注：注入速度等级越低，注入的速度越快<br>范围：0~4",views:[L(()=>({text:le.escapeHtml(rt),tag:"info"}))]},{type:"container",text:"特性",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontSize="1.2em",r.formHeaderDivElement.style.fontWeight="700";},views:[]},{type:"container",text:"不支持列表",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.color="rgb(216, 30, 6)",r.formHeaderDivElement.style.fontWeight="600",e.length===0&&r.formContainerListElement?.remove();},views:[Yt(n=>{const r=m.createElement("div",{className:"gm-api-features-not-support"}),o=document.createDocumentFragment();return e.forEach(i=>{o.append(t(i));}),r.appendChild(o),n.appendChild(r),n})]},{type:"container",text:"支持列表",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontWeight="600",a.length===0&&r.formContainerListElement?.remove();},views:[Yt(n=>{const r=m.createElement("div",{className:"gm-api-features-support"}),o=document.createDocumentFragment();return a.forEach(i=>{o.append(t(i));}),r.appendChild(o),n.appendChild(r),n})]}]}};class Gi extends Rt{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(n){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"功能测试",views:[L(()=>{try{return {text:le.escapeHtml("测试window.onurlchange"),tag:"info",description:"点击按钮进行测试",afterRender(n){let r=m.toElement(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1),o=s=>{clearTimeout(i),console.log("urlchange event info ==> ",s),I.success("urlchange event ==> url is changed");},i;m.on(r,"click",s=>{try{m.preventEvent(s),clearTimeout(i),He.onurlchange===null?(He.removeEventListener("urlchange",o),He.addEventListener("urlchange",o),window.history.pushState({},"","#/onurlchange"),i=setTimeout(()=>{I.error("urlchange event is not trigger");},1e3)):I.error("window.onurlchange is not null");}catch(l){I.error(l.toString(),{consoleLogContent:!0});}}),m.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}})]}]}}}class Wi extends Rt{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(n){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"功能测试",views:[L(()=>{try{return {text:le.escapeHtml("测试window.close"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=m.toElement(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1);m.on(r,"click",o=>{m.preventEvent(o);try{He.close();}catch(i){I.error(i.toString(),{consoleLogContent:!0});}}),m.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}})]}]}}}class Ki extends Rt{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${se.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return W.get(G.asideLastVisit)===e},clickCallback(n){W.set(G.asideLastVisit,e);},views:[{type:"container",text:"功能测试",views:[L(()=>{try{return {text:le.escapeHtml("测试window.focus"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=m.toElement(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
										`,!1,!1),o=()=>{setTimeout(()=>{He.focus();},3e3);};m.on(r,"click",i=>{m.preventEvent(i),window.removeEventListener("blur",o,{capture:!0}),window.addEventListener("blur",o,{capture:!0,once:!0});try{I.info("请切换至其它Tab页面，切换完毕3秒后会自动调用该函数");}catch(s){I.error(s.toString(),{consoleLogContent:!0});}}),m.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}})]}]}}}if(Pe.isTopWindow()){let a=()=>{Pe.showPanel(ht.getConfig(0),void 0,void 0,true);},e=Xt.getMenuOption(0);e.callback=()=>{a();},Xt.updateMenuOption(e);let t=[qi()];Object.keys(Ce).forEach(n=>{let o=Ce[n].getUIOption();o&&t.push(o);}),t.push(new Gi().getUIOption()),t.push(new Wi().getUIOption()),t.push(new Ki().getUIOption()),ht.addContentConfig(t),Pe.$data.panelConfig={style:`
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
	`},Pe.init(),a();}

})();