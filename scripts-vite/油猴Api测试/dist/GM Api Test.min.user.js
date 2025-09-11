// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.11
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

	var H=typeof GM<"u"?GM:void 0,nn=typeof GM_addElement<"u"?GM_addElement:void 0,on=typeof GM_addStyle<"u"?GM_addStyle:void 0,Ht=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,$e=typeof GM_cookie<"u"?GM_cookie:void 0,yt=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,an=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,go=typeof GM_download<"u"?GM_download:void 0,xt=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,rn=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,sn=typeof GM_getTab<"u"?GM_getTab:void 0,ln=typeof GM_getTabs<"u"?GM_getTabs:void 0,ot=typeof GM_getValue<"u"?GM_getValue:void 0,wt=typeof GM_getValues<"u"?GM_getValues:void 0,ze=typeof GM_info<"u"?GM_info:void 0,cn=typeof GM_listValues<"u"?GM_listValues:void 0,fn=typeof GM_log<"u"?GM_log:void 0,dn=typeof GM_notification<"u"?GM_notification:void 0,pn=typeof GM_openInTab<"u"?GM_openInTab:void 0,vt=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,un=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,yo=typeof GM_saveTab<"u"?GM_saveTab:void 0,bn=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,De=typeof GM_setValue<"u"?GM_setValue:void 0,At=typeof GM_setValues<"u"?GM_setValues:void 0,Ut=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,xo=typeof GM_webRequest<"u"?GM_webRequest:void 0,Bn=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,we=typeof GM_audio<"u"?GM_audio:void 0,ve=typeof unsafeWindow<"u"?unsafeWindow:void 0,Pe=window;function wo(){try{typeof Object.assign!="function"&&(Object.assign=function(r){return r=Object(r),arguments.length>1&&[...arguments].splice(1,arguments.length-1).forEach(t=>{for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);}),r});}catch(r){console.warn("Qmsg CompatibleProcessing Object.assign error",r);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var r=this;function e(t){return function(n){var o=r.className.split(/\s+/g),a=o.indexOf(n);t(o,a,n),r.className=o.join(" ");}}return {add:e(function(t,n,o){~n||t.push(o);}),remove:e(function(t,n){~n&&t.splice(n,1);}),toggle:e(function(t,n,o){~n?t.splice(n,1):t.push(o);}),contains:function(t){return !!~r.className.split(/\s+/g).indexOf(t)},item:function(t){return r.className.split(/\s+/g)[t]||null}}}});}catch(r){console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning",r);}}const Te={get PLUGIN_NAME(){return "qmsg"},get NAMESPACE(){return "qmsg"},INS_DEFAULT:{},get config(){return {parent:document.body||document.documentElement,useShadowRoot:true,shadowRootMode:"open",animation:true,autoClose:true,listenEventToPauseAutoClose:true,content:"",isHTML:false,position:"top",showClose:false,maxNums:5,onClose:null,showIcon:true,showMoreContent:false,showReverse:false,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:false,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:false,afterRender:null}}},vo=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,Hn={info:`
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
		</svg>`},Ce={insInfoList:[],remove(r){let e=false;for(let t=0;t<Ce.insInfoList.length;t++)if(Ce.insInfoList[t].uuid===r){Ce.insInfoList.splice(t,1),e=true;break}return e}},Ao=r=>(e,t)=>(r.set(e,t),t),hn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Un=536870912,mn=Un*2,To=(r,e)=>t=>{const n=e.get(t);let o=n===void 0?t.size:n<mn?n+1:0;if(!t.has(o))return r(t,o);if(t.size<Un){for(;t.has(o);)o=Math.floor(Math.random()*mn);return r(t,o)}if(t.size>hn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*hn);return r(t,o)},Vn=new WeakMap,Co=Ao(Vn),Vt=To(Co,Vn),So=r=>typeof r.start=="function",gn=new WeakMap,Eo=r=>({...r,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,o=await e("connect",{port:t},[t]);return gn.set(n,o),n},disconnect:({call:e})=>async t=>{const n=gn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Ot=new WeakMap,ko=r=>{if(Ot.has(r))return Ot.get(r);const e=new Map;return Ot.set(r,e),e},Mo=r=>{const e=Eo(r);return t=>{const n=ko(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}})),So(t)&&t.start();const o=(s,l=null,c=[])=>new Promise((f,d)=>{const u=Vt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:s},c):t.postMessage({id:u,method:s,params:l},c);}),a=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:o,notify:a})};return {...i}}},Ge=new Map([[0,null]]),je=new Map([[0,null]]),$o=Mo({clearInterval:({call:r})=>e=>{typeof Ge.get(e)=="symbol"&&(Ge.set(e,null),r("clear",{timerId:e,timerType:"interval"}).then(()=>{Ge.delete(e);}));},clearTimeout:({call:r})=>e=>{typeof je.get(e)=="symbol"&&(je.set(e,null),r("clear",{timerId:e,timerType:"timeout"}).then(()=>{je.delete(e);}));},setInterval:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=Vt(Ge);Ge.set(a,o);const i=()=>r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=Ge.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===o&&(e(...n),Ge.get(a)===o&&i());});return i(),a},setTimeout:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=Vt(je);return je.set(a,o),r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=je.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===o&&(je.delete(a),e(...n));}),a}}),Lo=r=>{const e=new Worker(r);return $o(e)},Io=(r,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(n);return t=r(o),setTimeout(()=>URL.revokeObjectURL(o)),t}},_o=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise((t=>{e.set(a,[r(n,u,i,e,t,a),t])}))},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,Ct=Io(Lo,_o),Ro=r=>Ct().clearInterval(r),Oo=r=>Ct().clearTimeout(r),No=(...r)=>Ct().setInterval(...r),Po=(...r)=>Ct().setTimeout(...r),de={getNameSpacify(...r){let e=Te.NAMESPACE;for(let t=0;t<r.length;++t)e+="-"+r[t];return e},isNumber(r){return /^\d+$/.test(r)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){let e=Math.random()*16|0;return (r=="x"?e:e&3|8).toString(16)})},mergeArgs(r="",e){let t={};if(arguments.length===0)return t;if(e!=null){if(t.content=r,typeof e=="object"&&e!=null)return Object.assign(t,e)}else {if(typeof r=="object"&&r!=null)return Object.assign(t,r);t.content=r;}return t},toDynamicObject(r,...e){let t=Object.assign({},r??{});return Object.keys(t).forEach(n=>{let o=t[n];Object.defineProperty(t,n,{get(){let a=e.findIndex(i=>typeof i=="object"&&i!=null&&i.hasOwnProperty.call(i,n));return a!==-1?e[a][n]:o},set(a){o=a;}});}),t},setTimeout(r,e){try{return Po(r,e)}catch{return globalThis.setTimeout(r,e)}},clearTimeout(r){try{r!=null&&Oo(r);}catch{}finally{globalThis.clearTimeout(r);}},setInterval(r,e){try{return No(r,e)}catch{return globalThis.setInterval(r,e)}},clearInterval(r){try{r!=null&&Ro(r);}catch{}finally{globalThis.clearInterval(r);}},setSafeHTML(r,e){try{r.innerHTML=e;}catch{if(globalThis.trustedTypes){const n=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:o=>o});r.innerHTML=n.createHTML(e);}else throw new Error("QmsgUtils trustedTypes is not defined")}}},Le={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},__CAN_ANIMATION__:void 0,get CAN_ANIMATION(){return this.__CAN_ANIMATION__=this.__CAN_ANIMATION__??this.getStyleAnimationNameValue(document.createElement("div"))!=null,this.__CAN_ANIMATION__},getStyleAnimationNameValue(r){for(let e=0;e<this.$name.startNameList.length;e++){let t=this.$name.startNameList[e],n=r.style[t];if(n!=null)return n}},setStyleAnimationName(r,e=""){this.$name.startNameList.forEach(t=>{t in r.style&&(r.style[t]=e);});}},Do={css:`@charset "utf-8";
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
      }`,getStyleElement(){let r=document.createElement("style");return r.setAttribute("type","text/css"),r.setAttribute("data-type",Te.PLUGIN_NAME),de.setSafeHTML(r,this.css),r}};class Bo{timeId=void 0;startTime;endTime;setting;uuid;state;repeatNum;$Qmsg;constructor(e,t){this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=de.toDynamicObject(Te.config,e,Te.INS_DEFAULT),this.uuid=t,this.state="opening",this.$Qmsg=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.init(),(typeof this.setting.consoleLogContent=="function"?this.setting.consoleLogContent(this):this.setting.consoleLogContent)&&console.log(this.setting.content),typeof this.setting.afterRender=="function"&&this.setting.afterRender(this);}getSetting(){return this.setting}getRepeatNum(){return this.repeatNum}setRepeatNum(e){this.repeatNum=e;}setRepeatNumIncreasing(){this.repeatNum++;}init(){let e=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$Qmsg.classList.add(this.setting.customClass);let t=Hn[this.setting.type||"info"],n=de.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(n+=" "+de.getNameSpacify("content-with-close"));let o=this.setting.content||"",a="",i=vo;this.setting.showMoreContent&&(n+="qmsg-show-more-content",a+="qmsg-show-more-content");let s="";this.setting.showClose&&(s=`<i class="qmsg-icon qmsg-icon-close ${a}">${i}</i>`);let l=document.createElement("span"),c=de.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.isHTML?de.setSafeHTML(l,o):l.innerText=o,this.setting.isLimitWidth){let w=this.setting.limitWidthNum;typeof w=="string"?de.isNumber(w)&&(w=w+"px"):w=w.toString()+"px",l.style.maxWidth=w,l.style.width=w,this.setting.limitWidthWrap==="no-wrap"?l.style.whiteSpace="nowrap":this.setting.limitWidthWrap==="ellipsis"?(l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"):this.setting.limitWidthWrap==="wrap"&&(l.style.whiteSpace="");}de.setSafeHTML(this.$Qmsg,`
			<div class="qmsg-content">
				<div class="${n}">
				${this.setting.showIcon?`<i class="qmsg-icon">${t}</i>`:""}
					${l.outerHTML}
					${s}
				</div>
			</div>
			`);let d=this.$Qmsg.querySelector(".qmsg-content");this.$Qmsg.classList.add(de.getNameSpacify("item")),this.$Qmsg.setAttribute(de.getNameSpacify("uuid"),this.uuid);let u,h,g;if(u=document.querySelector(".qmsg-shadow-container"),h=this.setting.useShadowRoot?u?.shadowRoot:u,!u){if(u=document.createElement("div"),u.className="qmsg-shadow-container",this.setting.useShadowRoot?h=u.attachShadow({mode:this.setting.shadowRootMode}):h=u,h.appendChild(Do.getStyleElement()),this.setting.style!=null){let w=document.createElement("style");w.setAttribute("type","text/css"),w.setAttribute("data-id",this.uuid),de.setSafeHTML(w,this.setting.style),d.insertAdjacentElement("afterend",w);}this.setting.parent.appendChild(u);}if(h==null)throw new Error("QmsgInst "+Te.PLUGIN_NAME+" $shadowRoot is null");g=h.querySelector(`.${Te.NAMESPACE}.${c}`),g||(g=document.createElement("div"),g.classList.add(Te.NAMESPACE,de.getNameSpacify("wrapper"),de.getNameSpacify("is-initialized"),c),h.appendChild(g)),this.setting.showReverse?g.style.flexDirection="column-reverse":g.style.flexDirection="column";let m=this.setting.zIndex;if(typeof m=="function"&&(m=m()),isNaN(m)||(g.style.zIndex=m.toString()),g.appendChild(this.$Qmsg),this.setState(this.$Qmsg,"opening"),this.setting.showClose){let w=this.$Qmsg.querySelector(".qmsg-icon-close");w&&w.addEventListener("click",v=>{e.close();});}let x=w=>{Le.getStyleAnimationNameValue(e.$Qmsg)===Le.$state.closing&&(e.endTime=Date.now(),e.destroy()),Le.setStyleAnimationName(e.$Qmsg);};if(Le.$name.endNameList.forEach(function(w){e.$Qmsg.addEventListener(w,x);}),this.setting.autoClose&&this.setting.listenEventToPauseAutoClose){this.resetAutoCloseTimer();let w=S=>{this.clearAutoCloseTimer();},v=S=>{if(this.timeId!=null){console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId："+this.timeId);return}this.startAutoCloseTimer();},C=false;this.$Qmsg.addEventListener("mouseenter",w),this.$Qmsg.addEventListener("mouseleave",v),this.$Qmsg.addEventListener("touchstart",S=>{C||(C=true,this.$Qmsg.removeEventListener("mouseenter",w),this.$Qmsg.removeEventListener("mouseleave",v)),w();}),this.$Qmsg.addEventListener("touchend",v),this.$Qmsg.addEventListener("touchcancel",v);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=Te.config.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=Te.config.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof Te.config.zIndex=="function"?Te.config.zIndex():Te.config.zIndex);}setState(e,t){!t||!Le.$state[t]||(this.state=t,Le.setStyleAnimationName(e,Le.$state[t]));}setMsgCount(){let e=de.getNameSpacify("count"),t=`div.${de.getNameSpacify("data-position",this.setting.position.toLowerCase())} [class^="qmsg-content-"]`,n=this.$Qmsg.querySelector(t);if(!n)throw new Error("QmsgInst $content is null");let o=n.querySelector("."+e);o||(o=document.createElement("span"),o.classList.add(e),n.appendChild(o));let a=this.getRepeatNum();de.setSafeHTML(o,a.toString()),Le.setStyleAnimationName(o),Le.setStyleAnimationName(o,"MessageShake"),this.resetAutoCloseTimer();}clearAutoCloseTimer(){de.clearTimeout(this.timeId),this.timeId=void 0,this.startTime=null,this.endTime=null;}startAutoCloseTimer(){this.setting.autoClose&&this.setting.listenEventToPauseAutoClose&&(this.startTime=Date.now(),this.endTime=null,this.timeId=de.setTimeout(()=>{this.close();},this.setting.timeout));}resetAutoCloseTimer(){this.clearAutoCloseTimer(),this.startAutoCloseTimer();}close(){this.setState(this.$Qmsg,"closing"),Le.CAN_ANIMATION?Ce.remove(this.uuid):this.destroy();let e=this.setting.onClose;e&&typeof e=="function"&&e.call(this);}destroy(){this.endTime=Date.now(),this.$Qmsg.remove(),de.clearTimeout(this.timeId),Ce.remove(this.uuid),this.timeId=void 0;}get $content(){let e=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(!e)throw new Error("QmsgInst $content is null");return e}setText(e){let t=this.$content;t.innerText=e,this.setting.content=e;}setHTML(e){let t=this.$content;de.setSafeHTML(t,e),this.setting.content=e;}}function it(r={}){let e=JSON.stringify(r),t=Ce.insInfoList.find(o=>o.config===e),n=t?.instance;if(n==null){let o=de.getUUID(),a={uuid:o,config:e,instance:new Bo(r,o)};Ce.insInfoList.push(a);let i=Ce.insInfoList.length,s=a.instance.getSetting().maxNums;if(i>s)for(let l=0;l<i-s;l++){let c=Ce.insInfoList[l];c&&c.instance.getSetting().autoClose&&c.instance.close();}t=a,n=a.instance;}else n.getRepeatNum()?n.getRepeatNum()>=99||n.setRepeatNumIncreasing():n.setRepeatNum(2),n.setMsgCount();if(n)n.$Qmsg.setAttribute("data-count",n?.getRepeatNum().toString());else throw new Error("QmsgInst is null");return n}const ct={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let r=0;r<Ce.insInfoList.length;r++){let e=Ce.insInfoList[r];e.instance.setting.type!=="loading"&&e.instance.endTime==null&&e.instance.startTime!=null&&Date.now()-e.instance.startTime>=e.instance.getSetting().timeout&&e.instance.close();}},option:{capture:true}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",ct.visibilitychange.eventConfig.callback,ct.visibilitychange.eventConfig.option):console.error("Qmsg addEvent visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",ct.visibilitychange.eventConfig.callback,ct.visibilitychange.eventConfig.option);}}};wo();class Ho{$data;$eventUtils;constructor(e){this.$data={version:"2025.7.28",config:Te,icon:Hn,instanceStorage:Ce},this.$eventUtils=ct,this.$eventUtils.visibilitychange.addEvent(),this.config(e);}config(e){e!=null&&typeof e=="object"&&(Te.INS_DEFAULT=null,Te.INS_DEFAULT=e);}info(e,t){let n=de.mergeArgs(e,t);return n.type="info",it.call(this,n)}warning(e,t){let n=de.mergeArgs(e,t);return n.type="warning",it.call(this,n)}success(e,t){let n=de.mergeArgs(e,t);return n.type="success",it.call(this,n)}error(e,t){let n=de.mergeArgs(e,t);return n.type="error",it.call(this,n)}loading(e,t){let n=de.mergeArgs(e,t);return n.type="loading",n.autoClose=false,it.call(this,n)}remove(e){Ce.remove(e);}closeAll(){for(let e=Ce.insInfoList.length-1;e>=0;e--){let t=Ce.insInfoList[e];t&&t.instance&&t.instance.close();}}}let N=new Ho,zn=class{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis==null&&(e.globalThis=e.window),e.self==null&&(e.self=e.window)),e||(e=Object.assign({},this.defaultApi)),this.api=Object.assign({},e);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get clearTimeout(){return this.api.clearTimeout}get setInterval(){return this.api.setInterval}get clearInterval(){return this.api.clearInterval}};const Uo=r=>(e,t)=>(r.set(e,t),t),yn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Fn=536870912,xn=Fn*2,Vo=(r,e)=>t=>{const n=e.get(t);let o=n===void 0?t.size:n<xn?n+1:0;if(!t.has(o))return r(t,o);if(t.size<Fn){for(;t.has(o);)o=Math.floor(Math.random()*xn);return r(t,o)}if(t.size>yn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*yn);return r(t,o)},Gn=new WeakMap,zo=Uo(Gn),zt=Vo(zo,Gn),Fo=r=>typeof r.start=="function",wn=new WeakMap,Go=r=>({...r,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,o=await e("connect",{port:t},[t]);return wn.set(n,o),n},disconnect:({call:e})=>async t=>{const n=wn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Nt=new WeakMap,jo=r=>{if(Nt.has(r))return Nt.get(r);const e=new Map;return Nt.set(r,e),e},qo=r=>{const e=Go(r);return t=>{const n=jo(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}})),Fo(t)&&t.start();const o=(s,l=null,c=[])=>new Promise((f,d)=>{const u=zt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:s},c):t.postMessage({id:u,method:s,params:l},c);}),a=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:o,notify:a})};return {...i}}},qe=new Map([[0,null]]),We=new Map([[0,null]]),Wo=qo({clearInterval:({call:r})=>e=>{typeof qe.get(e)=="symbol"&&(qe.set(e,null),r("clear",{timerId:e,timerType:"interval"}).then(()=>{qe.delete(e);}));},clearTimeout:({call:r})=>e=>{typeof We.get(e)=="symbol"&&(We.set(e,null),r("clear",{timerId:e,timerType:"timeout"}).then(()=>{We.delete(e);}));},setInterval:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=zt(qe);qe.set(a,o);const i=()=>r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=qe.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===o&&(e(...n),qe.get(a)===o&&i());});return i(),a},setTimeout:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=zt(We);return We.set(a,o),r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=We.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===o&&(We.delete(a),e(...n));}),a}}),Ko=r=>{const e=new Worker(r);return Wo(e)},Xo=(r,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(n);return t=r(o),setTimeout(()=>URL.revokeObjectURL(o)),t}},Qo=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,St=Xo(Ko,Qo),Yo=r=>St().clearInterval(r),Jo=r=>St().clearTimeout(r),Zo=(...r)=>St().setInterval(...r),ea=(...r)=>St().setTimeout(...r),B={windowApi:new zn({document,window,top,setTimeout,clearTimeout,setInterval,clearInterval}),isShow(r){return !!r.getClientRects().length},getSafeHTML(r){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:t=>t}).createHTML(r):r},setSafeHTML(r,e){r.innerHTML=this.getSafeHTML(e);},showElement(r){let e=r.cloneNode(true);return e.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(e),{recovery(){e.remove();}}},getStyleValue(r,e){let t=null,n=null;r instanceof CSSStyleDeclaration?n=r:(t=r.ownerDocument.defaultView,(!t||!t.opener)&&(t=window),n=t.getComputedStyle(r));let o=parseFloat(n[e]);return isNaN(o)?0:o},isWin(r){return typeof r!="object"||r instanceof Node?false:r===globalThis||r===window||r===self||r===globalThis||r===window||r===self||typeof unsafeWindow<"u"&&r===unsafeWindow?true:r?.Math?.toString()==="[object Math]"},delete(r,e){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(r,e):delete r[e];},setTimeout(r,e=0){try{return ea(r,e)}catch{return this.windowApi.setTimeout(r,e)}},clearTimeout(r){try{r!=null&&Jo(r);}catch{}finally{this.windowApi.clearTimeout(r);}},setInterval(r,e=0){try{return Zo(r,e)}catch{return this.windowApi.setInterval(r,e)}},clearInterval(r){try{r!=null&&Yo(r);}catch{}finally{this.windowApi.clearInterval(r);}},isNodeList(r){return Array.isArray(r)||r instanceof NodeList},getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]},getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}},st={SymbolEvents:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))},ta={Object:{defineProperty:Object.defineProperty}};class na{windowApi;constructor(e){this.windowApi=new zn(e);}on(e,t,n,o,a){function i(m,x,w){let v=m[x];return typeof v=="boolean"?(w.capture=v,typeof m[x+1]=="boolean"&&(w.once=m[x+1]),typeof m[x+2]=="boolean"&&(w.passive=m[x+2])):typeof v=="object"&&("capture"in v||"once"in v||"passive"in v||"isComposedPath"in v)&&(w.capture=v.capture,w.once=v.once,w.passive=v.passive,w.isComposedPath=v.isComposedPath),w}let s=this,l=arguments;if(typeof e=="string"&&(e=s.selectorAll(e)),e==null)return;let c=[];e instanceof NodeList||Array.isArray(e)?(e=e,c=[...e]):c.push(e);let f=[];Array.isArray(t)?f=f.concat(t.filter(m=>typeof m=="string"&&m.toString()!=="")):typeof t=="string"&&(f=f.concat(t.split(" ").filter(m=>m!=="")));let d=[];Array.isArray(n)?d=d.concat(n.filter(m=>typeof m=="string"&&m.toString()!=="")):typeof n=="string"&&d.push(n);let u=o,h={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(u=n,h=i(l,3,h)):h=i(l,4,h);function g(){h.once&&s.off(e,t,n,o,a);}c.forEach(m=>{function x(w){if(d.length){let v=h.isComposedPath?w.composedPath()[0]:w.target,C=m;if(B.isWin(C)&&C===s.windowApi.document&&(C=s.windowApi.document.documentElement),d.find(E=>{if(s.matches(v,E))return  true;let L=s.closest(v,E);return L&&C?.contains(L)?(v=L,true):false})){try{ta.Object.defineProperty(w,"target",{get(){return v}});}catch{}u.call(v,w,v),g();}}else u.call(m,w),g();}f.forEach(w=>{m.addEventListener(w,x,h);let v=Reflect.get(m,st.SymbolEvents)||{};v[w]=v[w]||[],v[w].push({selector:d,option:h,callback:x,originCallBack:u}),Reflect.set(m,st.SymbolEvents,v);});});}off(e,t,n,o,a,i){function s(x,w,v){let C=x[w];return typeof C=="boolean"?v.capture=C:typeof C=="object"&&"capture"in C&&(v.capture=C.capture),v}let l=this,c=arguments;if(typeof e=="string"&&(e=l.selectorAll(e)),e==null)return;let f=[];e instanceof NodeList||Array.isArray(e)?(e=e,f=[...e]):f.push(e);let d=[];Array.isArray(t)?d=d.concat(t.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof t=="string"&&(d=d.concat(t.split(" ").filter(x=>x!=="")));let u=[];Array.isArray(n)?u=u.concat(n.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof n=="string"&&u.push(n);let h=o,g={capture:false};typeof n=="function"?(h=n,g=s(c,3,g)):g=s(c,4,g);let m=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(m=true),f.forEach(x=>{let w=Reflect.get(x,st.SymbolEvents)||{};d.forEach(v=>{let C=w[v]||[];typeof i=="function"&&(C=C.filter(i));for(let S=0;S<C.length;S++){let E=C[S],L=true;L&&h&&E.originCallBack!==h&&(L=false),L&&u.length&&Array.isArray(E.selector)&&JSON.stringify(E.selector)!==JSON.stringify(u)&&(L=false),L&&g.capture!==E.option.capture&&(L=false),(L||m)&&(x.removeEventListener(v,E.callback,E.option),C.splice(S--,1));}C.length===0&&B.delete(w,t);}),Reflect.set(x,st.SymbolEvents,w);});}offAll(e,t){if(typeof e=="string"&&(e=this.selectorAll(e)),e==null)return;let o=[];e instanceof NodeList||Array.isArray(e)?o=[...e]:o.push(e);let a=[];Array.isArray(t)?a=a.concat(t):typeof t=="string"&&(a=a.concat(t.split(" "))),o.forEach(i=>{Object.getOwnPropertySymbols(i).forEach(s=>{if(!s.toString().startsWith("Symbol(events_"))return;let l=i[s]||{};(a.length?a:Object.keys(l)).forEach(f=>{let d=l[f];if(!d)return;for(const h of d)i.removeEventListener(f,h.callback,{capture:h.option.capture});let u=Reflect.get(i,s);B.delete(u,f);});});});}ready(e){if(typeof e!="function")return;let t=this;function n(){try{return t.windowApi.document.readyState==="complete"||t.windowApi.document.readyState!=="loading"&&!t.windowApi.document.documentElement.doScroll}catch{return  false}}function o(){s(),e();}let a=[{target:t.windowApi.document,eventType:"DOMContentLoaded",callback:o},{target:t.windowApi.window,eventType:"load",callback:o}];function i(){for(let l=0;l<a.length;l++){let c=a[l];c.target.addEventListener(c.eventType,c.callback);}}function s(){for(let l=0;l<a.length;l++){let c=a[l];c.target.removeEventListener(c.eventType,c.callback);}}n()?B.setTimeout(e):i();}trigger(e,t,n,o=true){if(typeof e=="string"&&(e=this.selectorAll(e)),e==null)return;let i=[];e instanceof NodeList||Array.isArray(e)?(e=e,i=[...e]):i=[e];let s=[];Array.isArray(t)?s=t:typeof t=="string"&&(s=t.split(" ")),i.forEach(l=>{let c=l[st.SymbolEvents]||{};s.forEach(f=>{let d=null;n&&n instanceof Event?d=n:(d=new Event(f),n&&Object.keys(n).forEach(u=>{d[u]=n[u];})),o==false&&f in c?c[f].forEach(u=>{u.callback(d);}):l.dispatchEvent(d);});});}click(e,t,n,o){let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(i=>{a.click(i,t,n,o);});return}t==null?a.trigger(e,"click",n,o):a.on(e,"click",null,t);}}blur(e,t,n,o){let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(i=>{a.focus(i,t,n,o);});return}t===null?a.trigger(e,"blur",n,o):a.on(e,"blur",null,t);}}focus(e,t,n,o){let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(i=>{a.focus(i,t,n,o);});return}t==null?a.trigger(e,"focus",n,o):a.on(e,"focus",null,t);}}hover(e,t,n){let o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(a=>{o.hover(a,t,n);});return}o.on(e,"mouseenter",null,t,n),o.on(e,"mouseleave",null,t,n);}}animationend(e,t,n){let o=this;if(typeof e=="string"&&(e=o.selector(e)),e==null)return;const a={once:true};Object.assign(a,n||{});const i=B.getAnimationEndNameList();if(o.on(e,i,null,t,a),!a.once)return {off(){o.off(e,i,null,t,a);}}}transitionend(e,t,n){let o=this;if(typeof e=="string"&&(e=o.selector(e)),e==null)return;const a={once:true};Object.assign(a,n||{});const i=B.getTransitionEndNameList();if(o.on(e,i,null,t,a),!a.once)return {off(){o.off(e,i,null,t,a);}}}keyup(e,t,n){let o=this;if(e!=null){if(typeof e=="string"&&(e=o.selectorAll(e)),B.isNodeList(e)){e.forEach(a=>{o.keyup(a,t,n);});return}o.on(e,"keyup",null,t,n);}}keydown(e,t,n){let o=this;if(e!=null){if(typeof e=="string"&&(e=o.selectorAll(e)),B.isNodeList(e)){e.forEach(a=>{o.keydown(a,t,n);});return}o.on(e,"keydown",null,t,n);}}keypress(e,t,n){let o=this;if(e!=null){if(typeof e=="string"&&(e=o.selectorAll(e)),B.isNodeList(e)){e.forEach(a=>{o.keypress(a,t,n);});return}o.on(e,"keypress",null,t,n);}}listenKeyboard(e,t="keypress",n,o){let a=this;typeof e=="string"&&(e=a.selectorAll(e));let i=function(s){let l=s.key||s.code,c=s.charCode||s.keyCode||s.which,f=[];s.ctrlKey&&f.push("ctrl"),s.altKey&&f.push("alt"),s.metaKey&&f.push("meta"),s.shiftKey&&f.push("shift"),typeof n=="function"&&n(l,c,f,s);};return a.on(e,t,i,o),{removeListen:()=>{a.off(e,t,i,o);}}}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){if(t=t||this.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(t.querySelectorAll(e)).filter(o=>o?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(i=>(i?.textContent||i?.innerText)?.includes(a))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let a=e?.textContent||e?.innerText;return typeof a!="string"&&(a=""),e.matches(t)&&a?.includes(o)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],a=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";a&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=a[3]);let s=new RegExp(o,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(s)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");let n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let a=e?.closest(t);if(a){let i=e?.textContent||e?.innerText;if(typeof i=="string"&&i.includes(o))return a}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],a=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";a&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=a[3]);let s=new RegExp(o,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.closest(t);if(l){let c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return e?.closest(t)}}let oa=class jn extends na{constructor(e){super(e);}version="2025.8.11";attr(e,t,n){let o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(n==null)return o.attr(e[0],t,n);e.forEach(a=>{o.attr(a,t,n);});return}if(n==null)return e.getAttribute(t);e.setAttribute(t,n);}}createElement(e,t,n){let o=this,a=o.windowApi.document.createElement(e);return typeof t=="string"?(o.html(a,t),a):(t==null&&(t={}),n==null&&(n={}),Object.keys(t).forEach(i=>{let s=t[i];if(i==="innerHTML"){o.html(a,s);return}a[i]=s;}),Object.keys(n).forEach(i=>{let s=n[i];typeof s=="object"?s=JSON.stringify(s):typeof s=="function"&&(s=s.toString()),a.setAttribute(i,s);}),a)}css(e,t,n){let o=this;function a(s,l){let c=["width","height","top","left","right","bottom","font-size"];return typeof l=="number"&&(l=l.toString()),typeof l=="string"&&c.includes(s)&&l.match(/[0-9]$/gi)&&(l=l+"px"),l}if(typeof e=="string"&&(e=o.selectorAll(e)),e==null)return;if(B.isNodeList(e)){if(typeof t=="string"){if(n==null)return o.css(e[0],t);e.forEach(s=>{o.css(s,t);});return}else if(typeof t=="object"){e.forEach(s=>{o.css(s,t);});return}return}let i=(s,l)=>{typeof l=="string"&&l.trim().endsWith("!important")?(l=l.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(s,l,"important")):(l=a(s,l),e.style.setProperty(s,l));};if(typeof t=="string"){if(n==null)return o.windowApi.globalThis.getComputedStyle(e).getPropertyValue(t);i(t,n);}else if(typeof t=="object")for(let s in t){let l=t[s];i(s,l);}else throw new TypeError("property must be string or object")}text(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(t==null)return n.text(e[0]);e.forEach(o=>{n.text(o,t);});return}if(t==null)return e.textContent||e.innerText;t instanceof Node&&(t=t.textContent||t.innerText),"textContent"in e?e.textContent=t:"innerText"in e&&(e.innerText=t);}}html(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(t==null)return n.html(e[0]);e.forEach(o=>{n.html(o,t);});return}if(t==null)return e.innerHTML;t instanceof Element&&(t=t.innerHTML),"innerHTML"in e&&B.setSafeHTML(e,t);}}getTransform(e,t=false){let n=this,o=0,a=0;if(!(t||!t&&B.isShow(e))){let{recovery:s}=B.showElement(e),l=n.getTransform(e,true);return s(),l}let i=n.windowApi.globalThis.getComputedStyle(e).transform;if(i!=null&&i!=="none"&&i!==""){let s=i.match(/\((.+)\)/)?.[1].split(",");s?(o=Math.abs(parseInt(s[4])),a=Math.abs(parseInt(s[5]))):(o=0,a=0);}return {transformLeft:o,transformTop:a}}val(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(t==null)return n.val(e[0]);e.forEach(o=>{n.val(o,t);});return}if(t==null)return e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked:e.value;e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked=!!t:e.value=t;}}prop(e,t,n){let o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),e!=null){if(B.isNodeList(e)){if(n==null)return o.prop(e[0],t);e.forEach(a=>{o.prop(a,t,n);});return}if(n==null)return Reflect.get(e,t);e instanceof Element&&t==="innerHTML"?o.html(e,n):Reflect.set(e,t,n);}}removeAttr(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.removeAttr(o,t);});return}e.removeAttribute(t);}}removeClass(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.removeClass(o,t);});return}t==null?e.className="":(Array.isArray(t)||(t=t.trim().split(" ")),t.forEach(o=>{e.classList.remove(o);}));}}removeProp(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.removeProp(o,t);});return}B.delete(e,t);}}replaceWith(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(a=>{n.replaceWith(a,t);});return}typeof t=="string"&&(t=n.parseHTML(t,false,false));let o=e.parentElement;o?o.replaceChild(t,e):(n.after(e,t),e.remove());}addClass(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.addClass(o,t);});return}Array.isArray(t)||(t=t.split(" ")),t.forEach(o=>{o.trim()!=""&&e.classList.add(o);});}}hasClass(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return  false;if(B.isNodeList(e)){let o=true;for(let a=0;a<e.length;a++){const i=e[a];o=o&&n.hasClass(i,t);}return o}if(!e?.classList)return  false;Array.isArray(t)||(t=t.split(" "));for(let o=0;o<t.length;o++){const a=t[o].trim();if(!e.classList.contains(a))return  false}return  true}append(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(a=>{n.append(a,t);});return}function o(a,i){typeof t=="string"?a instanceof DocumentFragment?(typeof i=="string"&&(i=n.parseHTML(i,true,false)),a.appendChild(i)):a.insertAdjacentHTML("beforeend",B.getSafeHTML(i)):a.appendChild(i);}if(Array.isArray(t)||t instanceof NodeList){let a=n.windowApi.document.createDocumentFragment();t.forEach(i=>{typeof i=="string"&&(i=n.parseHTML(i,true,false)),a.appendChild(i);}),e.appendChild(a);}else o(e,t);}prepend(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.prepend(o,t);});return}typeof t=="string"?e instanceof DocumentFragment?(t=n.parseHTML(t,true,false),e.prepend(t)):e.insertAdjacentHTML("afterbegin",B.getSafeHTML(t)):e.firstChild==null?e.prepend(t):e.insertBefore(t,e.firstChild);}}after(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.after(o,t);});return}if(typeof t=="string")e.insertAdjacentHTML("afterend",B.getSafeHTML(t));else {let o=e.parentElement,a=e.nextSibling;!o||a?e.after(t):e.parentElement.insertBefore(t,e.nextSibling);}}}before(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.before(o,t);});return}if(typeof t=="string")e.insertAdjacentHTML("beforebegin",B.getSafeHTML(t));else {let o=e.parentElement;o?o.insertBefore(t,e):e.before(t);}}}remove(e){let t=this;if(typeof e=="string"&&(e=t.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(n=>{t.remove(n);});return}typeof e.remove=="function"?e.remove():e.parentElement?e.parentElement.removeChild(e):e.parentNode&&e.parentNode.removeChild(e);}}empty(e){let t=this;if(typeof e=="string"&&(e=t.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(n=>{t.empty(n);});return}e.innerHTML?e.innerHTML="":e.textContent&&(e.textContent="");}}offset(e){let t=this;if(typeof e=="string"&&(e=t.selector(e)),e==null)return;let n=e.getBoundingClientRect();return {top:n.top+t.windowApi.globalThis.scrollY,left:n.left+t.windowApi.globalThis.scrollX}}width(e,t=false){let n=this;if(typeof e=="string"&&(e=n.selector(e)),e!=null){if(B.isWin(e))return n.windowApi.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&B.isShow(e)){if(e=e,parseFloat(B.getStyleValue(e,"width").toString())>0)return parseFloat(B.getStyleValue(e,"width").toString());if(e.offsetWidth>0){let o=B.getStyleValue(e,"borderLeftWidth"),a=B.getStyleValue(e,"borderRightWidth"),i=B.getStyleValue(e,"paddingLeft"),s=B.getStyleValue(e,"paddingRight"),l=parseFloat(e.offsetWidth.toString())-parseFloat(o.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString());return parseFloat(l.toString())}return 0}else {e=e;let{recovery:o}=B.showElement(e),a=n.width(e,true);return o(),a}}}height(e,t=false){let n=this;if(B.isWin(e))return n.windowApi.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=n.selector(e)),e!=null){if(e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&B.isShow(e)){if(e=e,parseFloat(B.getStyleValue(e,"height").toString())>0)return parseFloat(B.getStyleValue(e,"height").toString());if(e.offsetHeight>0){let o=B.getStyleValue(e,"borderTopWidth"),a=B.getStyleValue(e,"borderBottomWidth"),i=B.getStyleValue(e,"paddingTop"),s=B.getStyleValue(e,"paddingBottom"),l=parseFloat(e.offsetHeight.toString())-parseFloat(o.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString());return parseFloat(l.toString())}return 0}else {e=e;let{recovery:o}=B.showElement(e),a=n.height(e,true);return o(),a}}}outerWidth(e,t=false){let n=this;if(B.isWin(e))return n.windowApi.window.innerWidth;if(typeof e=="string"&&(e=n.selector(e)),e!=null)if(e=e,t||!t&&B.isShow(e)){let o=n.windowApi.globalThis.getComputedStyle(e,null),a=B.getStyleValue(o,"marginLeft"),i=B.getStyleValue(o,"marginRight");return e.offsetWidth+a+i}else {let{recovery:o}=B.showElement(e),a=n.outerWidth(e,true);return o(),a}}outerHeight(e,t=false){let n=this;if(B.isWin(e))return n.windowApi.window.innerHeight;if(typeof e=="string"&&(e=n.selector(e)),e!=null)if(e=e,t||!t&&B.isShow(e)){let o=n.windowApi.globalThis.getComputedStyle(e,null),a=B.getStyleValue(o,"marginTop"),i=B.getStyleValue(o,"marginBottom");return e.offsetHeight+a+i}else {let{recovery:o}=B.showElement(e),a=n.outerHeight(e,true);return o(),a}}animate(e,t,n=1e3,o=null){let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(f=>{a.animate(f,t,n,o);});return}if(typeof n!="number"||n<=0)throw new TypeError("duration must be a positive number");if(typeof o!="function"&&o!==void 0)throw new TypeError("callback must be a function or null");if(typeof t!="object"||t===void 0)throw new TypeError("styles must be an object");if(Object.keys(t).length===0)throw new Error("styles must contain at least one property");let i=performance.now(),s={},l={};for(let f in t)s[f]=e.style[f]||a.windowApi.globalThis.getComputedStyle(e)[f],l[f]=t[f];let c=B.setInterval(function(){let d=(performance.now()-i)/n;d>1&&(d=1);for(let u in t)e.style[u]=s[u]+(l[u]-s[u])*d+"px";d===1&&(B.clearInterval(c),o&&o());},10);}wrap(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e==null)return;if(B.isNodeList(e)){e.forEach(s=>{n.wrap(s,t);});return}e=e;let o=n.windowApi.document.createElement("div");n.html(o,t);let a=o.firstChild;e.parentElement.insertBefore(a,e),a.appendChild(e);}prev(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.previousElementSibling}next(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.nextElementSibling}noConflict(){let e=this;return e.windowApi.window.DOMUtils&&B.delete(window,"DOMUtils"),e.windowApi.window.DOMUtils=this,this}siblings(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return Array.from(e.parentElement.children).filter(n=>n!==e)}parent(e){let t=this;if(typeof e=="string"&&(e=t.selector(e)),e!=null)if(B.isNodeList(e)){let n=[];return e.forEach(o=>{n.push(t.parent(o));}),n}else return e.parentElement}parseHTML(e,t=false,n=false){let o=this;e=e.trim();function a(){let s=new DOMParser;return n?s.parseFromString(e,"text/html"):s.parseFromString(e,"text/html").body.firstChild}function i(){let s=o.windowApi.document.createElement("div");return o.html(s,e),n?s:s.firstChild}return t?a():i()}serialize(e){const t=e.elements;let n=[];for(let o=0;o<t.length;o++){const a=t[o];if(a.name&&!a.disabled&&(a.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(a.type)))if(a.type==="select-multiple")for(let i=0;i<a.options.length;i++)a.options[i].selected&&n.push({name:a.name,value:a.options[i].value});else n.push({name:a.name,value:a.value});}return n.map(o=>`${encodeURIComponent(o.name)}=${encodeURIComponent(o.value)}`).join("&")}show(e,t=true){let n=this;if(e!=null)if(typeof e=="string"&&(e=n.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const o of e)n.show(o,t);}else e=e,e.style.display="",t&&(B.isShow(e)||e.style.setProperty("display","unset","important"));}hide(e,t=true){let n=this;if(e!=null)if(typeof e=="string"&&(e=n.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const o of e)n.hide(o,t);}else e=e,e.style.display="none",t&&B.isShow(e)&&e.style.setProperty("display","none","important");}fadeIn(e,t=400,n){if(e==null)return;let o=this;if(typeof e=="string"&&(e=o.selectorAll(e)),B.isNodeList(e)){e.forEach(l=>{o.fadeIn(l,t,n);});return}e.style.opacity="0",e.style.display="";let a=null,i=null;function s(l){a||(a=l);let c=l-a;e=e,e.style.opacity=Math.min(c/t,1).toString(),c<t?o.windowApi.window.requestAnimationFrame(s):(n&&typeof n=="function"&&n(),o.windowApi.window.cancelAnimationFrame(i));}i=o.windowApi.window.requestAnimationFrame(s);}fadeOut(e,t=400,n){let o=this;if(e==null)return;if(typeof e=="string"&&(e=o.selectorAll(e)),B.isNodeList(e)){e.forEach(l=>{o.fadeOut(l,t,n);});return}e.style.opacity="1";let a=null,i=null;function s(l){a||(a=l);let c=l-a;e=e,e.style.opacity=Math.max(1-c/t,0).toString(),c<t?o.windowApi.window.requestAnimationFrame(s):(e.style.display="none",typeof n=="function"&&n(),o.windowApi.window.cancelAnimationFrame(i));}i=o.windowApi.window.requestAnimationFrame(s);}toggle(e,t){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(B.isNodeList(e)){e.forEach(o=>{n.toggle(o);});return}n.windowApi.globalThis.getComputedStyle(e).getPropertyValue("display")==="none"?n.show(e,t):n.hide(e,t);}}createDOMUtils(e){return new jn(e)}getTextBoundingRect(e,t,n){let o=this;if(!e||!("value"in e))return e;if(t==null&&(t=e.selectionStart||0),n==null&&(n=e.selectionEnd||0),typeof t=="string"&&(t=parseFloat(t)),(typeof t!="number"||isNaN(t))&&(t=0),t<0?t=0:t=Math.min(e.value.length,t),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<t)&&(n=t),n<0?n=0:n=Math.min(e.value.length,n),typeof e.createTextRange=="function"){let S=e.createTextRange();return S.collapse(true),S.moveStart("character",t),S.moveEnd("character",n-t),S.getBoundingClientRect()}let a=v(),i=a.top,s=a.left,l=C("width",true),c=C("height",true),f="white-space:pre;padding:0;margin:0;",d=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];i+=C("padding-top",true),i+=C("border-top-width",true),s+=C("padding-left",true),s+=C("border-left-width",true),s+=1;for(let S=0;S<d.length;S++){let E=d[S];f+=E+":"+C(E)+";";}let u=e.value||"G",h=u.length,g=o.windowApi.document.createElement("div");t>0&&w(0,t);var m=w(t,n);h>n&&w(n,h),g.style.cssText=f,g.style.position="absolute",g.style.top=i+"px",g.style.left=s+"px",g.style.width=l+"px",g.style.height=c+"px",o.windowApi.document.body.appendChild(g);var x=m.getBoundingClientRect();return g?.parentNode?.removeChild(g),x;function w(S,E){var L=o.windowApi.document.createElement("span");return L.style.cssText=f,L.textContent=u.substring(S,E),g.appendChild(L),L}function v(){let S=o.windowApi.document.body,E=o.windowApi.document.defaultView,L=o.windowApi.document.documentElement,z=o.windowApi.document.createElement("div");z.style.paddingLeft=z.style.width="1px",S.appendChild(z);var F=z.offsetWidth==2;S.removeChild(z);let X=e.getBoundingClientRect();var Y=L.clientTop||S.clientTop||0,oe=L.clientLeft||S.clientLeft||0,k=E.pageYOffset||F&&L.scrollTop||S.scrollTop,$=E.pageXOffset||F&&L.scrollLeft||S.scrollLeft;return {top:X.top+k-Y,left:X.left+$-oe}}function C(S,E){var L=o.windowApi.document.defaultView.getComputedStyle(e,null).getPropertyValue(S);return E?parseFloat(L):L}}getAnimationEndNameList(){return B.getAnimationEndNameList()}getTransitionEndNameList(){return B.getTransitionEndNameList()}},_e=new oa;class aa{isHex(e){return !(typeof e!="string"||!e.match(/^(\#|)[0-9a-fA-F]{6}$/))}hexToRgba(e,t){if(!this.isHex(e))throw new TypeError("输入错误的hex："+e);return e&&e.replace(/\s+/g,"").length===7?"rgba("+parseInt("0x"+e.slice(1,3))+","+parseInt("0x"+e.slice(3,5))+","+parseInt("0x"+e.slice(5,7))+","+t+")":""}hexToRgb(e){if(!this.isHex(e))throw new TypeError("输入错误的hex："+e);e=e.replace("#","");let t=e.match(/../g);for(let n=0;n<3;n++)t[n]=parseInt(t[n],16);return t}rgbToHex(e,t,n){let o=/^\d{1,3}$/;if(!o.test(e.toString())||!o.test(t.toString())||!o.test(n.toString()))throw new TypeError("输入错误的rgb颜色值");let a=[e.toString(16),t.toString(16),n.toString(16)];for(let i=0;i<3;i++)a[i].length==1&&(a[i]="0"+a[i]);return "#"+a.join("")}getDarkColor(e,t){if(!this.isHex(e))throw new TypeError("输入错误的hex："+e);let n=this.hexToRgb(e);for(let o=0;o<3;o++)n[o]=Math.floor(n[o]*(1-t));return this.rgbToHex(n[0],n[1],n[2])}getLightColor(e,t){if(!this.isHex(e))throw new TypeError("输入错误的hex："+e);let n=this.hexToRgb(e);for(let o=0;o<3;o++)n[o]=Math.floor((255-n[o])*t+n[o]);return this.rgbToHex(n[0],n[1],n[2])}}class ra{#e=[];#t={};#o={};constructor(){let e=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364"),t=0;this.#e=e.match(/..../g);for(let n=129;n<=254;n++)for(let o=64;o<=254;o++)this.#t[this.#e[t++]]=("%"+n.toString(16)+"%"+o.toString(16)).toUpperCase();for(let n in this.#t)this.#o[this.#t[n]]=n;}handleText(e){return e=e.replace(/#(\d+)\$/g,function(t,n){return Array(+n+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(t,n,o){return o.replace(/../g,function(a){return a!="##"?n+a:a})}),e}isAscii(e){return e<=127&&e>=0}encode(e){let t=this;return [...e].reduce((o,a,i)=>o+n(a),"");function n(o){let a="";for(let i=0;i<o.length;i++){const s=o.codePointAt(i),l=String.fromCodePoint(s);let c=s.toString(16);if(c.length!=4&&(c=("000"+c).match(/....$/)?.[0]),i+=l.length-1,t.isAscii(s)){a+=encodeURIComponent(l);continue}if(t.#t[c]){a+=t.#t[c];continue}a+=n(`&#${s};`);}return a}}decode(e){let t=/%[0-9A-F]{2}%[0-9A-F]{2}/,n=/%[0-9A-F]{2}/,o=true;const a=this;for(;o;){let i=e.match(t),s=e.match(n);o=!!s,i&&i in a.#o?e=e.replace(i,String.fromCharCode("0x"+a.#o[i])):e=e.replace(s,decodeURIComponent(s));}return e}}const Tt=function(...r){let e=null,t=null,n=s=>{},o={log:true};const a={config(s){return o=Object.assign(o,s),a},error(s){return n=s,a},run(s,l){e=s,t=l||this;let c=i(e,n,t);return c!==void 0?c:a}};function i(s,l,c){let f;try{typeof s=="string"?f=new Function(s).apply(c,r):f=s.apply(c,r);}catch(d){o.log&&(s=s,console.log(`%c ${s?.name?s?.name:s+"出现错误"} `,"color: #f20000"),console.log(`%c 错误原因：${d}`,"color: #f20000"),console.trace(s)),l&&(typeof l=="string"?f=new Function(l).apply(c,[...r,d]):f=l.apply(c,[...r,d]));}return f}return a};let ia=class{assign(e={},t={},n=false){let o=this;if(Array.isArray(t)&&!t.filter(i=>typeof i=="object").length)return t;if(t==null)return e;if(e==null&&(e={}),n)for(const a in t){let s=e[a],l=t[a];if(typeof l=="object"&&l!=null&&a in e&&!o.isDOM(l)){e[a]=o.assign(s,l,n);continue}e[a]=l;}else for(const a in e)if(a in t){let i=e[a],s=t[a];if(typeof s=="object"&&s!=null&&!o.isDOM(s)&&Object.keys(s).length){e[a]=o.assign(i,s,n);continue}e[a]=s;}return e}isNull(...e){let t=true,n=[...e];for(const o of n){let a=false;if(o==null)a=true;else switch(typeof o){case "object":typeof o[Symbol.iterator]=="function"?a=o.length===0:a=Object.keys(o).length===0;break;case "number":a=o===0;break;case "string":a=o.trim()===""||o==="null"||o==="undefined";break;case "boolean":a=!o;break;case "function":a=!!o.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}t=t&&a;}return t}isDOM(e){return e instanceof Node}isNotNull(...e){return !this.isNull.apply(this,e)}deepClone(e){let t=this;if(e===void 0)return;if(e===null)return null;let n=e instanceof Array?[]:{};for(const[o,a]of Object.entries(e))n[o]=typeof a=="object"?t.deepClone(a):a;return n}coverObjectFunctionThis(e,t){if(typeof e!="object"||e===null)throw new Error("target must be object");t=t||e,Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(t));});}toJSON(e,t){let n={};return typeof e=="object"?e:(Tt().config({log:false}).error(o=>{Tt().error(()=>{try{n=new Function("return "+e)();}catch(a){typeof t=="function"&&t(a);}}).run(()=>{e&&/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?n=new Function("return "+e)():typeof t=="function"&&t(new Error("target is not a JSON"));});}).run(()=>{e=e.trim(),n=JSON.parse(e);}),n)}},ae=new ia;class sa{windowApi={window,document};constructor(e){e&&(this.windowApi=Object.assign({},e));}getCookiesList(){return this.windowApi.document.cookie.trim()===""?[]:this.windowApi.document.cookie.split(";")}get(e){if(typeof e!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");let t=this.getCookiesList(),n;for(const o of t){let i=o.trim().split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join(""));if(s===e){n={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:e,path:"/",sameSite:"unspecified",secure:true,session:false,value:l};break}}return n}list(e,t){if(e==null)throw new Error("Utils.GMCookie.list 参数不能为空");let n=[];try{let o={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};o=ae.assign(o,e),this.getCookiesList().forEach(i=>{i=i.trim();let s=i.split("="),l=s[0];s.splice(0,1);let c=decodeURIComponent(s.join("")),f=o.name instanceof RegExp?o.name:new RegExp("^"+o.name,"g");l.match(f)&&n.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:l,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:c});}),typeof t=="function"&&t(n);}catch(o){typeof t=="function"&&t(n,o);}}getList(e){if(e==null)throw new Error("Utils.GMCookie.list 参数不能为空");let t=[],n={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return n=ae.assign(n,e),this.getCookiesList().forEach(a=>{a=a.trim();let i=a.split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join("")),c=n.name instanceof RegExp?n.name:new RegExp("^"+n.name,"g");s.match(c)&&t.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:s,path:"/",sameSite:"unspecified",secure:true,session:false,value:l});}),t}set(e,t){let n;try{let o={url:this.windowApi.window.location.href,name:"",value:"",domain:"",path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};o=ae.assign(o,e);let a=o.expirationDate?o.expirationDate:Math.floor(Date.now())+3600*24*30,i=o.name+"="+decodeURIComponent(o.value)+";expires="+new Date(a).toGMTString()+"; path=/";ae.isNull(o.domain)&&(i+="; domain="+o.domain),this.windowApi.document.cookie=i;}catch(o){n=o;}finally{typeof t=="function"&&t(n);}}delete(e,t){let n;try{let o={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:""};o=ae.assign(o,e);let a=`${o.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${o.path}`;ae.isNull(o.firstPartyDomain)&&(a+=`; domain=${o.firstPartyDomain};`),this.windowApi.document.cookie=a;}catch(o){n=o;}finally{typeof t=="function"&&t(n);}}parseCookie(e){if(e.trim()==="")return [];let t=e.split(";"),n=[];for(const o of t){let i=o.trim().split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join(""));n.push({key:s,value:l});}return n}}// @license      GNU LGPL-3.0
	const la=function(){const r="1.4.8",e={hookFns:[],filters:[]},t=window.unsafeWindow||document.defaultView||window;let n=t.__ajaxHooker;const o=t.Response.prototype,a=["response","responseText","responseXML"],i=["arrayBuffer","blob","formData","json","text"],s=["responseType","timeout","withCredentials"],l=["cache","credentials","integrity","keepalive","mode","priority","redirect","referrer","referrerPolicy","signal"],c=["readystatechange","load","loadend"],f={}.toString.call.bind({}.toString),d=Object.getOwnPropertyDescriptor.bind(Object),u=()=>{},h=T=>console.error(T);function g(T){return T&&["object","function"].includes(typeof T)&&typeof T.then=="function"}function m(T,...b){try{const A=T(...b);return g(A)?A.then(null,h):A}catch(A){console.error(A);}}function x(T,b,A,P){Object.defineProperty(T,b,{configurable:true,enumerable:true,get:A,set:P});}function w(T,b,A=T[b]){x(T,b,()=>A,u);}function v(T,b,A=T[b]){Object.defineProperty(T,b,{configurable:true,enumerable:true,writable:true,value:A});}function C(T){const b={};switch(f(T)){case "[object String]":for(const A of T.trim().split(/[\r\n]+/)){const[P,_]=A.split(new RegExp("(?<=^[^:]+)\\s*:\\s*"));if(!_)continue;const O=P.toLowerCase();b[O]=O in b?`${b[O]}, ${_}`:_;}break;case "[object Headers]":for(const[A,P]of T)b[A]=P;break;case "[object Object]":return {...T}}return b}function S(){this.ajaxHooker_isStopped=true;}class E{then(b){return b&&b(),new E}}class L{constructor(b){this.request=b,this.requestClone={...this.request};}_recoverRequestKey(b){b in this.requestClone?this.request[b]=this.requestClone[b]:delete this.request[b];}shouldFilter(b){const{type:A,url:P,method:_,async:O}=this.request;return b.length&&!b.find(Q=>{switch(true){case(Q.type&&Q.type!==A):case(f(Q.url)==="[object String]"&&!P.includes(Q.url)):case(f(Q.url)==="[object RegExp]"&&!Q.url.test(P)):case(Q.method&&Q.method.toUpperCase()!==_.toUpperCase()):case("async"in Q&&Q.async!==O):return  false}return  true})}waitForRequestKeys(){if(!this.request.async)return t.__ajaxHooker.hookInsts.forEach(({hookFns:P,filters:_})=>{if(!this.shouldFilter(_)){P.forEach(O=>{f(O)==="[object Function]"&&m(O,this.request);});for(const O in this.request)g(this.request[O])&&this._recoverRequestKey(O);}}),new E;const b=[],A=new Set(["type","async","response"]);return t.__ajaxHooker.hookInsts.forEach(({hookFns:P,filters:_})=>{this.shouldFilter(_)||b.push(Promise.all(P.map(O=>m(O,this.request))).then(()=>{const O=[];for(const Q in this.request)!A.has(Q)&&O.push(Q);return Promise.all(O.map(Q=>Promise.resolve(this.request[Q]).then(U=>this.request[Q]=U,()=>this._recoverRequestKey(Q))))}));}),Promise.all(b)}waitForResponseKeys(b){const A=this.request.type==="xhr"?a:i;return this.request.async?Promise.resolve(m(this.request.response,b)).then(()=>Promise.all(A.map(P=>{const _=d(b,P);if(_&&"value"in _)return Promise.resolve(_.value).then(O=>b[P]=O,()=>delete b[P]);delete b[P];}))):(f(this.request.response)==="[object Function]"&&(m(this.request.response,b),A.forEach(P=>{("get"in d(b,P)||g(b[P]))&&delete b[P];})),new E)}}const z={get(T,b){const A=d(T,b);if(A&&!A.configurable&&!A.writable&&!A.get)return T[b];const P=T.__ajaxHooker;if(P&&P.proxyProps){if(b in P.proxyProps){const _=P.proxyProps[b];return "get"in _?_.get():typeof _.value=="function"?_.value.bind(P):_.value}if(typeof T[b]=="function")return T[b].bind(T)}return T[b]},set(T,b,A){const P=d(T,b);if(P&&!P.configurable&&!P.writable&&!P.set)return  true;const _=T.__ajaxHooker;if(_&&_.proxyProps&&b in _.proxyProps){const O=_.proxyProps[b];O.set?O.set(A):O.value=A;}else T[b]=A;return  true}};class F{constructor(b){const A=this;Object.assign(A,{originalXhr:b,proxyXhr:new Proxy(b,z),resThenable:new E,proxyProps:{},proxyEvents:{}}),b.addEventListener("readystatechange",P=>{if(A.proxyXhr.readyState===4&&A.request&&typeof A.request.response=="function"){const _={finalUrl:A.proxyXhr.responseURL,status:A.proxyXhr.status,responseHeaders:C(A.proxyXhr.getAllResponseHeaders())},O={};for(const Q of a){try{O[Q]=A.originalXhr[Q];}catch{}x(_,Q,()=>_[Q]=O[Q],U=>{delete _[Q],_[Q]=U;});}A.resThenable=new L(A.request).waitForResponseKeys(_).then(()=>{for(const Q of a)A.proxyProps[Q]={get:()=>(Q in _||(_[Q]=O[Q]),_[Q])};});}A.dispatchEvent(P);}),b.addEventListener("load",P=>A.dispatchEvent(P)),b.addEventListener("loadend",P=>A.dispatchEvent(P));for(const P of c){const _="on"+P;A.proxyProps[_]={get:()=>A.proxyEvents[_]||null,set:O=>A.addEvent(_,O)};}for(const P of ["setRequestHeader","addEventListener","removeEventListener","open","send"])A.proxyProps[P]={value:A[P]};}toJSON(){}addEvent(b,A){if(b.startsWith("on"))this.proxyEvents[b]=typeof A=="function"?A:null;else {if(typeof A=="object"&&A!==null&&(A=A.handleEvent),typeof A!="function")return;this.proxyEvents[b]=this.proxyEvents[b]||new Set,this.proxyEvents[b].add(A);}}removeEvent(b,A){b.startsWith("on")?this.proxyEvents[b]=null:(typeof A=="object"&&A!==null&&(A=A.handleEvent),this.proxyEvents[b]&&this.proxyEvents[b].delete(A));}dispatchEvent(b){if(b.stopImmediatePropagation=S,x(b,"target",()=>this.proxyXhr),x(b,"currentTarget",()=>this.proxyXhr),x(b,"srcElement",()=>this.proxyXhr),this.proxyEvents[b.type]&&this.proxyEvents[b.type].forEach(P=>{this.resThenable.then(()=>!b.ajaxHooker_isStopped&&P.call(this.proxyXhr,b));}),b.ajaxHooker_isStopped)return;const A=this.proxyEvents["on"+b.type];A&&this.resThenable.then(A.bind(this.proxyXhr,b));}setRequestHeader(b,A){if(this.originalXhr.setRequestHeader(b,A),!this.request)return;const P=this.request.headers;P[b]=b in P?`${P[b]}, ${A}`:A;}addEventListener(...b){c.includes(b[0])?this.addEvent(b[0],b[1]):this.originalXhr.addEventListener(...b);}removeEventListener(...b){c.includes(b[0])?this.removeEvent(b[0],b[1]):this.originalXhr.removeEventListener(...b);}open(b,A,P=true,..._){return this.request={type:"xhr",url:A.toString(),method:b.toUpperCase(),abort:false,headers:{},data:null,response:null,async:!!P},this.openArgs=_,this.resThenable=new E,["responseURL","readyState","status","statusText",...a].forEach(O=>{delete this.proxyProps[O];}),this.originalXhr.open(b,A,P,..._)}send(b){const A=this,P=A.originalXhr,_=A.request;if(!_)return P.send(b);_.data=b,new L(_).waitForRequestKeys().then(()=>{if(_.abort)typeof _.response=="function"&&(Object.assign(A.proxyProps,{responseURL:{value:_.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),c.forEach(O=>P.dispatchEvent(new Event(O))));else {P.open(_.method,_.url,_.async,...A.openArgs);for(const O in _.headers)P.setRequestHeader(O,_.headers[O]);for(const O of s)O in _&&(P[O]=_[O]);P.send(_.data);}});}}function X(){const T=new n.realXHR;return "__ajaxHooker"in T&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),T.__ajaxHooker=new F(T),T.__ajaxHooker.proxyXhr}X.prototype=t.XMLHttpRequest.prototype,Object.keys(t.XMLHttpRequest).forEach(T=>X[T]=t.XMLHttpRequest[T]);function Y(T,b={}){return T?new Promise(async(A,P)=>{const _={};if(f(T)==="[object Request]"){_.method=T.method,_.headers=T.headers,T.body&&(_.body=await T.arrayBuffer());for(const U of l)_[U]=T[U];T=T.url;}T=T.toString(),Object.assign(_,b),_.method=_.method||"GET",_.headers=_.headers||{};const O={type:"fetch",url:T,method:_.method.toUpperCase(),abort:false,headers:C(_.headers),data:_.body,response:null,async:true},Q=new L(O);if(await Q.waitForRequestKeys(),O.abort){if(typeof O.response=="function"){const U={finalUrl:O.url,status:200,responseHeaders:{}};await Q.waitForResponseKeys(U);const R=i.find(J=>J in U);let G=U[R];R==="json"&&typeof G=="object"&&(G=m(JSON.stringify.bind(JSON),G));const te=new Response(G,{status:200,statusText:"OK"});x(te,"type",()=>"basic"),x(te,"url",()=>O.url),A(te);}else P(new DOMException("aborted","AbortError"));return}_.method=O.method,_.headers=O.headers,_.body=O.data;for(const U of l)U in O&&(_[U]=O[U]);n.realFetch.call(t,O.url,_).then(U=>{if(typeof O.response=="function"){const R={finalUrl:U.url,status:U.status,responseHeaders:C(U.headers)};U.ok?i.forEach(G=>U[G]=function(){return G in R?Promise.resolve(R[G]):o[G].call(this).then(te=>(R[G]=te,Q.waitForResponseKeys(R).then(()=>G in R?R[G]:te)))}):m(O.response,R);}A(U);},P);}):n.realFetch.call(t,T,b)}function oe(){const T=Object.getOwnPropertyDescriptors(this),b=n.realFetchClone.call(this);return Object.defineProperties(b,T),b}n=t.__ajaxHooker=n||{version:r,fakeXHR:X,fakeFetch:Y,fakeFetchClone:oe,realXHR:t.XMLHttpRequest,realFetch:t.fetch,realFetchClone:o.clone,hookInsts:new Set},n.version!==r&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),t.XMLHttpRequest=n.fakeXHR,t.fetch=n.fakeFetch,o.clone=n.fakeFetchClone,n.hookInsts.add(e);class k extends Function{call(b,...A){return b&&b.__ajaxHooker&&b.__ajaxHooker.proxyXhr===b&&(b=b.__ajaxHooker.originalXhr),Reflect.apply(this,b,A)}apply(b,A){return b&&b.__ajaxHooker&&b.__ajaxHooker.proxyXhr===b&&(b=b.__ajaxHooker.originalXhr),Reflect.apply(this,b,A||[])}}function $(T){Object.setPrototypeOf(T.nativeXMLHttpRequestSetRequestHeader,k.prototype),Object.setPrototypeOf(T.nativeXMLHttpRequestOpen,k.prototype),Object.setPrototypeOf(T.nativeXMLHttpRequestSend,k.prototype);}return t.secsdk?t.secsdk.csrf&&t.secsdk.csrf.nativeXMLHttpRequestOpen&&$(t.secsdk.csrf):x(t,"secsdk",u,T=>{delete t.secsdk,t.secsdk=T,x(T,"csrf",u,b=>{delete T.csrf,T.csrf=b,b.nativeXMLHttpRequestOpen&&$(b);});}),{hook:T=>e.hookFns.push(T),filter:T=>{Array.isArray(T)&&(e.filters=T);},protect:()=>{w(t,"XMLHttpRequest",n.fakeXHR),w(t,"fetch",n.fakeFetch),w(o,"clone",n.fakeFetchClone);},unhook:()=>{n.hookInsts.delete(e),n.hookInsts.size||(v(t,"XMLHttpRequest",n.realXHR),v(t,"fetch",n.realFetch),v(o,"clone",n.realFetchClone),delete t.__ajaxHooker);}}},ca=function(){return (function(){const r=window.unsafeWindow||document.defaultView||window,e=[],t=r.XMLHttpRequest,n=r.Response.prototype,o=Object.prototype.toString,a=r.fetch,i=["response","responseText","responseXML"],s=["arrayBuffer","blob","formData","json","text"],l=["readystatechange","load","loadend"];let c;function f(){}function d(k){console.error(k);}function u(k,$,T,b){Object.defineProperty(k,$,{configurable:true,enumerable:true,get:T,set:b});}function h(k,$,T=k[$]){u(k,$,()=>T,f);}function g(k,$,T=k[$]){Object.defineProperty(k,$,{configurable:true,enumerable:true,writable:true,value:T});}function m(k){return {type:k.type,url:k.url,method:k.method&&k.method.toUpperCase()}}function x(k,$,T){return c&&!c.find(b=>(!b.type||b.type===k)&&(!b.url||(o.call(b.url)==="[object String]"?$.includes(b.url):b.url.test($)))&&(!b.method||b.method===T.toUpperCase()))}function w(k,$){let T,b=k;for(;b;){const A=Object.getOwnPropertyDescriptor(b,$);if(T=A&&A.get,T)break;b=Object.getPrototypeOf(b);}return T?T.bind(k):f}function v(k){return Promise.all(e.map($=>Promise.resolve($(k)).then(f,d)))}function C(k,$){return Promise.all(["url","method","abort","headers","data"].map(T=>Promise.resolve(k[T]).then(b=>k[T]=b,()=>k[T]=$[T])))}function S(){this.ajaxHooker_stopped=true;}function E(k){const $=k.target;k.stopImmediatePropagation=S,$.__ajaxHooker.hookedEvents[k.type].forEach(b=>!k.ajaxHooker_stopped&&b.call($,k));const T=$.__ajaxHooker.hookedEvents["on"+k.type];typeof T=="function"&&T.call($,k);}function L(k){k.target.readyState===4?k.target.dispatchEvent(new CustomEvent("ajaxHooker_responseReady",{detail:k})):k.target.__ajaxHooker.delegateEvent(k);}function z(k){k.target.__ajaxHooker.delegateEvent(k);}function F(k,$,...T){const b=this.__ajaxHooker;return b.url=$.toString(),b.method=k.toUpperCase(),b.openArgs=T,b.headers={},b.originalMethods.open(k,$,...T)}function X(){const k=new t;let $=k.__ajaxHooker;if(!$){$=k.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:E,originalGetters:{},originalMethods:{}},k.addEventListener("readystatechange",L),k.addEventListener("load",z),k.addEventListener("loadend",z);for(const b of i)$.originalGetters[b]=w(k,b);for(const b of ["open","setRequestHeader","addEventListener","removeEventListener"])$.originalMethods[b]=k[b].bind(k);k.open=F,k.setRequestHeader=(b,A)=>{$.originalMethods.setRequestHeader(b,A),k.readyState===1&&($.headers[b]?$.headers[b]+=", "+A:$.headers[b]=A);},k.addEventListener=function(...b){l.includes(b[0])?$.hookedEvents[b[0]].add(b[1]):$.originalMethods.addEventListener(...b);},k.removeEventListener=function(...b){l.includes(b[0])?$.hookedEvents[b[0]].delete(b[1]):$.originalMethods.removeEventListener(...b);},l.forEach(b=>{const A="on"+b;u(k,A,()=>$.hookedEvents[A]||null,P=>{$.hookedEvents[A]=typeof P=="function"?P:null;});});}const T=k.send.bind(k);return k.send=function(b){if(k.readyState!==1)return T(b);if($.delegateEvent=E,i.forEach(A=>{delete k[A];}),x("xhr",$.url,$.method))return k.addEventListener("ajaxHooker_responseReady",A=>{$.delegateEvent(A.detail);}),T(b);try{const A={type:"xhr",url:$.url,method:$.method,abort:!1,headers:$.headers,data:b,response:null},P={...A};v(A).then(()=>{C(A,P).then(()=>{if(!A.abort){$.originalMethods.open(A.method,A.url,...$.openArgs);for(const _ in A.headers)$.originalMethods.setRequestHeader(_,A.headers[_]);b=A.data,k.addEventListener("ajaxHooker_responseReady",_=>{try{if(typeof A.response=="function"){const O={finalUrl:k.responseURL,status:k.status,responseHeaders:{}};for(const R of k.getAllResponseHeaders().trim().split(/[\r\n]+/)){const G=R.split(/:\s*/);if(G.length===2){const te=G[0].toLowerCase();O.responseHeaders[te]?O.responseHeaders[te]+=", "+G[1]:O.responseHeaders[te]=G[1];}}i.forEach(R=>{u(O,R,()=>O[R]=$.originalGetters[R](),G=>{delete O[R],O[R]=G;}),u(k,R,()=>{const G=$.originalGetters[R]();return k.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:R,val:G}})),G});}),k.addEventListener("ajaxHooker_readResponse",R=>{O[R.detail.prop]=R.detail.val;});const Q=Promise.resolve(A.response(O)).then(()=>{const R=[];return i.forEach(G=>{const te=Object.getOwnPropertyDescriptor(O,G);te&&"value"in te&&R.push(Promise.resolve(te.value).then(J=>{O[G]=J,u(k,G,()=>(k.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:G,val:J}})),J));},f));}),Promise.all(R)},d),U={};l.forEach(R=>{U[R]=new Set([...$.hookedEvents[R]]),U["on"+R]=$.hookedEvents["on"+R];}),$.delegateEvent=R=>Q.then(()=>{R.stopImmediatePropagation=S,U[R.type].forEach(te=>!R.ajaxHooker_stopped&&te.call(k,R));const G=U["on"+R.type];typeof G=="function"&&G.call(k,R);});}}catch(O){console.error(O);}$.delegateEvent(_.detail);}),T(b);}});});}catch(A){console.error(A),T(b);}},k}function Y(k,$,T){s.forEach(b=>{k[b]=()=>new Promise((A,P)=>{n[b].call(k).then(_=>{if(b in $)A($[b]);else try{$[b]=_,Promise.resolve(T($)).then(()=>{b in $?Promise.resolve($[b]).then(O=>A($[b]=O),()=>A(_)):A(_);},d);}catch(O){console.error(O),A(_);}},P);});});}function oe(k,$){if(k&&typeof k.toString=="function"){if(k=k.toString(),$=$||{},$.method=$.method||"GET",$.headers=$.headers||{},x("fetch",k,$.method))return a.call(r,k,$);const T={type:"fetch",url:k,method:$.method.toUpperCase(),abort:false,headers:{},data:$.body,response:null};if(o.call($.headers)==="[object Headers]")for(const[A,P]of $.headers)T.headers[A]=P;else T.headers={...$.headers};const b={...T};return new Promise((A,P)=>{try{v(T).then(()=>{C(T,b).then(()=>{if(T.abort)return P("aborted");k=T.url,$.method=T.method,$.headers=T.headers,$.body=T.data,a.call(r,k,$).then(_=>{if(typeof T.response=="function"){const O={finalUrl:_.url,status:_.status,responseHeaders:{}};for(const[Q,U]of _.headers)O.responseHeaders[Q]=U;Y(_,O,T.response),_.clone=()=>{const Q=n.clone.call(_);return Y(Q,O,T.response),Q};}A(_);},P);});});}catch(_){return console.error(_),a.call(r,k,$)}})}else return a.call(r,k,$)}return r.XMLHttpRequest=X,Object.keys(t).forEach(k=>X[k]=t[k]),X.prototype=t.prototype,r.fetch=oe,{hook:k=>e.push(k),filter:k=>{c=Array.isArray(k)&&k.map(m);},protect:()=>{h(r,"XMLHttpRequest",X),h(r,"fetch",oe);},unhook:()=>{g(r,"XMLHttpRequest",t),g(r,"fetch",a);}}})()};class fa{GM_Api={getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null};MenuHandle={context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:true,isStoreValue:true},$emoji:{success:"✅",error:"❌"},init(){for(let e=0;e<this.$data.data.length;e++){let t=this.$data.data[e].data;t.enable=!!this.getLocalMenuData(t.key,t.enable),typeof t.showText!="function"&&(t.showText=(n,o)=>o?this.$emoji.success+" "+n:this.$emoji.error+" "+n);}},register(e){let t=this;if(e==null)throw new TypeError("register菜单数据不能为空");Array.isArray(e)||(e=[e]);for(let n=0;n<e.length;n++){let o=ae.deepClone(e[n].data);const{showText:a,clickCallBack:i}=this.handleMenuData(o);let s=t.context.GM_Api.registerMenuCommand(a,i);e[n].id=s,o.deleteMenu=function(){t.context.GM_Api.unregisterMenuCommand(s);},Reflect.deleteProperty(e[n],"handleData"),e[n].handleData=o;}},getLocalMenuData(e,t){let n=this.context.GM_Api.getValue(this.$data.key,{});return e in n?n[e]:t},setLocalMenuData(e,t){let n=this.context.GM_Api.getValue(this.$data.key,{});n[e]=t,this.context.GM_Api.setValue(this.$data.key,n);},handleInitDetail(e){return e.enable=!!this.getLocalMenuData(e.key,e.enable),typeof e.showText!="function"&&(e.showText=(t,n)=>n?this.$emoji.success+" "+t:this.$emoji.error+" "+t),e},handleMenuData(e){let t=this,n=e.key,o=!!this.getLocalMenuData(n,e.enable),a=e.showText(e.text,o);e.autoReload=typeof e.autoReload!="boolean"?this.$default.autoReload:e.autoReload,e.isStoreValue=typeof e.isStoreValue!="boolean"?this.$default.isStoreValue:e.isStoreValue;function i(s){let l=!!t.getLocalMenuData(n,o);e.isStoreValue&&t.setLocalMenuData(n,!l),typeof e.callback=="function"&&e.callback({key:n,enable:!l,oldEnable:l,event:s,storeValue(c){t.setLocalMenuData(n,c);}}),e.autoReload?window.location.reload():t.context.update();}return {showText:a,clickCallBack:i}},getMenuData(e){return this.$data.data.find(t=>t.data.key===e)},getMenuOption(e){return this.$data.data.find(t=>t.data.key===e)?.data},getMenuHandledOption(e){return this.$data.data.find(t=>t.handleData.key===e)?.handleData}};constructor(e){this.GM_Api.getValue=e.GM_getValue,this.GM_Api.setValue=e.GM_setValue,this.GM_Api.registerMenuCommand=e.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=e.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof e.autoReload=="boolean"?e.autoReload:true;for(const t of Object.keys(this.GM_Api))if(typeof this.GM_Api[t]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${t}，且传入该对象`);this.add(e?.data||[]);}__add(e){if(Array.isArray(e))for(let t=0;t<e.length;t++){const n=e[t];this.MenuHandle.$data.data.push({data:n,id:void 0});}else this.MenuHandle.$data.data.push({data:e,id:void 0});}add(e){this.__add(e),this.update();}update(e){let t=[];Array.isArray(e)?t=[...t,...e]:e!=null&&(t=[...t,e]),t.forEach(n=>{let o=this.MenuHandle.getMenuOption(n.key);o?Object.assign(o,n):this.__add(n);}),this.MenuHandle.$data.data.forEach(n=>{n.handleData&&n.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(e){this.GM_Api.unregisterMenuCommand(e);}get(e){return this.getEnable(e)}getEnable(e){return this.MenuHandle.getMenuHandledOption(e).enable}getText(e){return this.MenuHandle.getMenuHandledOption(e).text}getShowTextValue(e){return this.MenuHandle.getMenuHandledOption(e).showText(this.getText(e),this.getEnable(e))}getMenuId(e){let t=null;for(let n=0;n<this.MenuHandle.$data.data.length;n++){const o=this.MenuHandle.$data.data[n];if(o.handleData.key===e){t=o.id;break}}return t}getAccessKey(e){return this.MenuHandle.getMenuHandledOption(e)?.accessKey}getAutoClose(e){return this.MenuHandle.getMenuHandledOption(e)?.autoClose}getAutoReload(e){return this.MenuHandle.getMenuHandledOption(e)?.autoReload}getCallBack(e){return this.MenuHandle.getMenuHandledOption(e)?.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(e,t){this.MenuHandle.setLocalMenuData(e,t);}setEnable(e,t){this.setValue(e,!!t);}setEnableTrueEmoji(e){if(typeof e!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=e;}setEnableFalseEmoji(e){if(typeof e!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=e;}setLocalStorageKeyName(e){if(typeof e!="string")throw new Error("参数keyName必须是string类型");this.MenuHandle.$data.key=e;}}class da{initEnv(){Function.prototype.hook=function(e,t,n){let o=null,a=null;if(o=n||window,a=i(this),o["realFunc_"+a]=this,o[a].prototype&&o[a].prototype.isHooked)return console.log("Already has been hooked,unhook first"),false;function i(s){let l=s.toString(),c=/function\s+(\w+)\s*\(/,f=l.match(c);return f?f[1]:""}try{return new Function("_context","_funcName","hookFunc",`_context[_funcName] = function ${a}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${a}'].apply(obj, args);
    };`)(o,a,t),o[a].prototype.isHooked=!0,!0}catch{return console.log("Hook failed,check the params."),false}},Function.prototype.unhook=function(e,t,n){let o=null,a=null;return o=n||window,a=t,o[a].prototype.isHooked?(o[a]=o["realFunc"+a],Reflect.deleteProperty(o,"realFunc_"+a),true):(console.log("No function is hooked on"),false)};}cleanEnv(){return Function.prototype.hasOwnProperty("hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Function.prototype.hasOwnProperty("unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),true}}const Ft=function(){return typeof window?.crypto?.randomUUID=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})};class pa{GM_Api={xmlHttpRequest:null};HttpxRequestHook={$config:{configList:[]},async beforeRequestCallBack(e){if(typeof e.allowInterceptConfig=="boolean"){if(!e.allowInterceptConfig)return e}else if(e.allowInterceptConfig!=null&&typeof e.allowInterceptConfig.beforeRequest=="boolean"&&!e.allowInterceptConfig.beforeRequest)return e;for(let t=0;t<this.$config.configList.length;t++){let n=this.$config.configList[t];if(typeof n.fn=="function"&&await n.fn(e)==null)return}return e},add(e){if(typeof e=="function"){let t=Ft();return this.$config.configList.push({id:t,fn:e}),t}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(e){if(typeof e=="string"){let t=this.$config.configList.findIndex(n=>n.id===e);if(t!==-1)return this.$config.configList.splice(t,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxResponseHook={$config:{configList:[]},async successResponseCallBack(e,t){if(typeof t.allowInterceptConfig=="boolean"){if(!t.allowInterceptConfig)return t}else if(t.allowInterceptConfig!=null&&typeof t.allowInterceptConfig.afterResponseSuccess=="boolean"&&!t.allowInterceptConfig.afterResponseSuccess)return t;for(let n=0;n<this.$config.configList.length;n++){let o=this.$config.configList[n];if(typeof o.successFn=="function"&&await o.successFn(e,t)==null)return}return e},async errorResponseCallBack(e){if(typeof e.details.allowInterceptConfig=="boolean"){if(!e.details.allowInterceptConfig)return e}else if(e.details.allowInterceptConfig!=null&&typeof e.details.allowInterceptConfig.afterResponseError=="boolean"&&!e.details.allowInterceptConfig.afterResponseError)return e;for(let t=0;t<this.$config.configList.length;t++){let n=this.$config.configList[t];if(typeof n.errorFn=="function"&&await n.errorFn(e)==null)return}return e},add(e,t){let n=Ft();return this.$config.configList.push({id:n,successFn:e,errorFn:t}),n},delete(e){if(typeof e=="string"){let t=this.$config.configList.findIndex(n=>n.id===e);if(t!==-1)return this.$config.configList.splice(t,1),true}return  false},clearAll(){this.$config.configList=[];}};HttpxRequestOption={context:this,handleBeforeRequestOptionArgs(...e){let t={url:void 0};if(typeof e[0]=="string"){let n=e[0];if(t.url=n,typeof e[1]=="object"){let o=e[1];ae.assign(t,o,true),t.url=n;}}else {let n=e[0];ae.assign(t,n,true);}return t},getRequestOption(e,t,n,o){let a=this,i=t.url||this.context.#e.url;typeof i=="string"&&(i=i.trim(),i.startsWith("http://")||i.startsWith("https://")||typeof this.context.#t.baseURL=="string"&&(i=this.context.#t.baseURL+i));let s={url:i,method:(e||"GET").toString().toUpperCase().trim(),timeout:t.timeout||this.context.#e.timeout,responseType:t.responseType||this.context.#e.responseType,headers:ae.deepClone(this.context.#e.headers),data:t.data||this.context.#e.data,redirect:t.redirect||this.context.#e.redirect,cookie:t.cookie||this.context.#e.cookie,cookiePartition:t.cookiePartition||this.context.#e.cookiePartition,binary:t.binary||this.context.#e.binary,nocache:t.nocache||this.context.#e.nocache,revalidate:t.revalidate||this.context.#e.revalidate,context:ae.deepClone(t.context||this.context.#e.context),overrideMimeType:t.overrideMimeType||this.context.#e.overrideMimeType,anonymous:t.anonymous||this.context.#e.anonymous,fetch:t.fetch||this.context.#e.fetch,fetchInit:ae.deepClone(this.context.#e.fetchInit),allowInterceptConfig:{beforeRequest:this.context.#e.allowInterceptConfig.beforeRequest,afterResponseSuccess:this.context.#e.allowInterceptConfig.afterResponseSuccess,afterResponseError:this.context.#e.allowInterceptConfig.afterResponseError},user:t.user||this.context.#e.user,password:t.password||this.context.#e.password,onabort(...l){a.context.HttpxResponseCallBack.onAbort(t,n,o,l);},onerror(...l){a.context.HttpxResponseCallBack.onError(t,n,o,l);},onloadstart(...l){a.context.HttpxResponseCallBack.onLoadStart(t,l);},onprogress(...l){a.context.HttpxResponseCallBack.onProgress(t,l);},onreadystatechange(...l){a.context.HttpxResponseCallBack.onReadyStateChange(t,l);},ontimeout(...l){a.context.HttpxResponseCallBack.onTimeout(t,n,o,l);},onload(...l){a.context.HttpxResponseCallBack.onLoad(t,n,o,l);}};typeof t.allowInterceptConfig=="boolean"?Object.keys(s.allowInterceptConfig).forEach(l=>{Reflect.set(s.allowInterceptConfig,l,t.allowInterceptConfig);}):typeof t.allowInterceptConfig=="object"&&t.allowInterceptConfig!=null&&Object.keys(t.allowInterceptConfig).forEach(l=>{let c=Reflect.get(t.allowInterceptConfig,l);typeof c=="boolean"&&Reflect.has(s.allowInterceptConfig,l)&&Reflect.set(s.allowInterceptConfig,l,c);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(s.fetch=true),typeof s.headers=="object"?typeof t.headers=="object"&&Object.keys(t.headers).forEach((l,c)=>{l in s.headers&&t.headers?.[l]==null?Reflect.deleteProperty(s.headers,l):s.headers[l]=t?.headers?.[l];}):Reflect.set(s,"headers",t.headers),typeof s.fetchInit=="object"?typeof t.fetchInit=="object"&&Object.keys(t.fetchInit).forEach((l,c)=>{l in s.fetchInit&&t.fetchInit[l]==null?Reflect.deleteProperty(s.fetchInit,l):Reflect.set(s.fetchInit,l,Reflect.get(t.fetchInit,l));}):Reflect.set(s,"fetchInit",t.fetchInit),typeof s.cookiePartition=="object"&&s.cookiePartition!=null&&Reflect.has(s.cookiePartition,"topLevelSite")&&typeof s.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(s.cookiePartition,"topLevelSite");try{new URL(s.url);}catch{s.url.startsWith("//")?s.url=globalThis.location.protocol+s.url:s.url.startsWith("/")?s.url=globalThis.location.origin+s.url:s.url=globalThis.location.origin+"/"+s.url;}s.fetchInit&&!s.fetch&&Reflect.deleteProperty(s,"fetchInit");try{let l=t.processData??!0;if(s.data!=null&&l){let c=s.method;if(c==="GET"||c==="HEAD"){let f=new URL(s.url),d="",u=!1;typeof s.data=="string"?(u=!0,d=s.data):typeof s.data=="object"&&(u=!0,d=new URLSearchParams(s.data).toString()),u&&Reflect.deleteProperty(s,"data"),d!=""&&(f.search===""?f.search=d:f.search.endsWith("&")?f.search=f.search+d:f.search=f.search+"&"+d),s.url=f.toString();}else if(c==="POST"&&s.headers!=null){let f=Object.keys(s.headers),d=f.findIndex(u=>u.trim().toLowerCase()==="content-type"&&typeof s.headers[u]=="string");if(d!==-1){let u=f[d],h=s.headers[u];if(h.includes("application/json"))if(s.data instanceof FormData){const g={};s.data.forEach((m,x)=>{g[x]=m;}),s.data=JSON.stringify(g);}else typeof s.data=="object"&&(s.data=JSON.stringify(s.data));else h.includes("application/x-www-form-urlencoded")?typeof s.data=="object"&&(s.data=new URLSearchParams(s.data).toString()):h.includes("multipart/form-data")&&s.data instanceof FormData&&Reflect.deleteProperty(s.headers,u);}}}}catch(l){console.warn("Httpx ==> 转换data参数错误",l);}return s},removeRequestNullOption(e){if(Object.keys(e).forEach(t=>{if(e[t]==null||e[t]instanceof Function&&ae.isNull(e[t])){Reflect.deleteProperty(e,t);return}}),ae.isNull(e.url))throw new TypeError(`Utils.Httpx 参数url不能为空：${e.url}`);return e},handleFetchOption(e){let t={};(e.method==="GET"||e.method==="HEAD")&&e.data!=null&&Reflect.deleteProperty(e,"data");let n=new AbortController,o=n.signal;return o.onabort=()=>{e.onabort({isFetch:true,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},t.method=e.method??"GET",t.headers=e.headers,t.body=e.data,t.mode="cors",t.credentials="include",t.cache="no-cache",t.redirect="follow",t.referrerPolicy="origin-when-cross-origin",t.signal=o,Object.assign(t,e.fetchInit||{}),{fetchOption:e,fetchRequestOption:t,abortController:n}}};HttpxResponseCallBack={context:this,async onAbort(e,t,n,o){typeof e?.onabort=="function"?e.onabort.apply(this,o):typeof this.context.#e?.onabort=="function"&&this.context.#e.onabort.apply(this,o);let a=o;a.length&&(a=a[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new Error("request canceled"),response:null,details:e})!=null&&t({data:a,details:e,msg:"请求被取消",status:false,statusCode:-1,type:"onabort"});},async onTimeout(e,t,n,o){typeof e?.ontimeout=="function"?e.ontimeout.apply(this,o):typeof this.context.#e?.ontimeout=="function"&&this.context.#e.ontimeout.apply(this,o);let a=o;a.length&&(a=a[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new Error("request timeout"),response:a,details:e})!=null&&t({data:a,details:e,msg:"请求超时",status:false,statusCode:0,type:"ontimeout"});},async onError(e,t,n,o){typeof e?.onerror=="function"?e.onerror.apply(this,o):typeof this.context.#e?.onerror=="function"&&this.context.#e.onerror.apply(this,o);let a=o;a.length&&(a=a[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new Error("request error"),response:a,details:e})!=null&&t({data:a,details:e,msg:"请求异常",status:false,statusCode:a.status,type:"onerror"});},async onLoad(e,t,n,o){let a=o[0];if(ae.isNull(a.responseText)&&ae.isNotNull(a.response)&&(typeof a.response=="object"?Tt().run(()=>{a.responseText=JSON.stringify(a.response);}):a.responseText=a.response),a.response==null&&typeof a.responseText=="string"&&a.responseText.trim()!==""){let s=a.responseText,l=s;if(e.responseType==="json")l=ae.toJSON(s);else if(e.responseType==="document")l=new DOMParser().parseFromString(s,"text/html");else if(e.responseType==="arraybuffer")l=new TextEncoder().encode(s);else if(e.responseType==="blob"){let f=new TextEncoder().encode(s);l=new Blob([f]);}try{if(!Reflect.set(a,"response",l)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(a,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(a,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}let i=Reflect.get(a,"responseURL");if(a.finalUrl==null&&i!=null&&Reflect.set(a,"finalUrl",i),Math.floor(a.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(a,e)==null)return;t({data:a,details:e,msg:"请求成功",status:true,statusCode:a.status,type:"onload"});}else this.context.HttpxResponseCallBack.onError(e,t,n,o);},onLoadStart(e,t){typeof e?.onloadstart=="function"?e.onloadstart.apply(this,t):typeof this.context.#e?.onloadstart=="function"&&this.context.#e.onloadstart.apply(this,t);},onReadyStateChange(e,t){typeof e?.onreadystatechange=="function"?e.onreadystatechange.apply(this,t):typeof this.context.#e?.onreadystatechange=="function"&&this.context.#e.onreadystatechange.apply(this,t);},onProgress(e,t){typeof e?.onprogress=="function"?e.onprogress.apply(this,t):typeof this.context.#e?.onprogress=="function"&&this.context.#e.onprogress.apply(this,t);}};HttpxRequest={context:this,async request(e){if(this.context.#t.logDetails&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",e),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(e)==null))if(e.fetch){const{fetchOption:t,fetchRequestOption:n,abortController:o}=this.context.HttpxRequestOption.handleFetchOption(e);return this.fetch(t,n,o)}else return this.xmlHttpRequest(e)},xmlHttpRequest(e){return this.context.GM_Api.xmlHttpRequest(e)},fetch(e,t,n){return fetch(e.url,t).then(async o=>{let a={isFetch:true,finalUrl:o.url,readyState:4,status:o.status,statusText:o.statusText,response:"",responseFetchHeaders:o.headers,responseHeaders:"",responseText:"",responseType:e.responseType,responseXML:void 0};Object.assign(a,e.context||{});for(const[g,m]of o.headers.entries())a.responseHeaders+=`${g}: ${m}
`;const i=o.headers.get("Content-Type");if(e.responseType==="stream"||o.headers.has("Content-Type")&&o.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(a,"isStream",true),Reflect.set(a,"response",o.body),Reflect.deleteProperty(a,"responseText"),Reflect.deleteProperty(a,"responseXML"),e.onload(a);return}let s="",l="",c="",f=await o.arrayBuffer(),d="utf-8";if(o.headers.has("Content-Type")){let g=o.headers.get("Content-Type")?.match(/charset=(.+)/);g&&(d=g[1],d=d.toLowerCase());}d=d.replace(/('|")/gi,""),l=new TextDecoder(d).decode(f),s=l,e.responseType==="arraybuffer"?s=f:e.responseType==="blob"?s=new Blob([f]):e.responseType==="json"||typeof i=="string"&&i.includes("application/json")?s=ae.toJSON(l):(e.responseType==="document"||e.responseType==null)&&(s=new DOMParser().parseFromString(l,"text/html")),c=new DOMParser().parseFromString(l,"text/xml"),a.response=s,a.responseText=l,a.responseXML=c,e.onload(a);}).catch(o=>{o.name!=="AbortError"&&e.onerror({isFetch:true,finalUrl:e.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:o});}),e.onloadstart({isFetch:true,finalUrl:e.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){n.abort();}}}};#e={url:void 0,timeout:5e3,async:false,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:true,afterResponseSuccess:true,afterResponseError:true},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}};#t={baseURL:void 0,logDetails:false};constructor(e={}){typeof e.xmlHttpRequest!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),ae.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(e);}config(e={}){typeof e.xmlHttpRequest=="function"&&(this.GM_Api.xmlHttpRequest=e.xmlHttpRequest),this.#e=ae.assign(this.#e,e),this.#t=ae.assign(this.#t,e);}interceptors={request:{context:null,use(e){if(typeof e!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(e)},eject(e){return this.context.HttpxRequestHook.delete(e)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(e,t){if(typeof e!="function"&&typeof t!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(e,t)},eject(e){return this.context.HttpxResponseHook.delete(e)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}};setXMLHttpRequest(e){this.GM_Api.xmlHttpRequest=e;}get(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="GET",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}post(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="POST",this.request(t)}head(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="HEAD",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}options(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="OPTIONS",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}delete(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="DELETE",this.request(t,n=>{Reflect.deleteProperty(n,"onprogress");})}put(...e){let t=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...e);return t.method="PUT",this.request(t)}request(e,t){let n=this.HttpxRequestOption.handleBeforeRequestOptionArgs(e),o=null,a=new globalThis.Promise(async(i,s)=>{let l=this.HttpxRequestOption.getRequestOption(n.method,n,i,s);typeof t=="function"&&t(l),l=this.HttpxRequestOption.removeRequestNullOption(l);const c=await this.HttpxRequest.request(l);c!=null&&typeof c.abort=="function"&&(o=c.abort);});return a.abort=()=>{typeof o=="function"&&o();},a}}class ua{#e;#t;#o;#a=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;#r={};#n={operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}};constructor(e="default_db",t="default_form",n=1){if(this.#e=e,this.#t=t,this.#o=n,!this.#a)throw alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(e){let t,n;return t=this.#r[e].transaction(this.#t,"readwrite"),n=t.objectStore(this.#t),n}open(e,t){let n=this;if(n.#r[t]){let o=this.createStore(t);e(o);}else {let o=n.#a.open(t,n.#o);o.onerror=function(a){e(null,{code:n.#n.openFailed.code,msg:n.#n.openFailed.msg,event:a});},o.onsuccess=function(a){if(!n.#r[t]){let s=a.target;n.#r[t]=s.result;}let i=n.createStore(t);e(i);},o.onupgradeneeded=function(a){let i=a.target;n.#r[t]=i.result;let s=n.#r[t].createObjectStore(n.#t,{keyPath:"key"});s.transaction.oncomplete=function(l){e(s);};};}}async save(e,t){let n=this;return new Promise(o=>{let a=this.#e,i={key:e,value:t};this.open(function(s){if(s==null)o({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg});else {let l=s.put(i);l.onsuccess=function(c){o({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,event:c});},l.onerror=function(c){o({success:false,code:n.#n.saveFailed.code,msg:n.#n.saveFailed.msg,event:c});};}},a);})}async has(e){let t=this;return new Promise(n=>{let o=this.#e;this.open(function(a){if(a==null)n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg});else {let i=a.get(e);i.onsuccess=function(s){n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,event:s});};}},o);})}async get(e){let t=this;return new Promise(n=>{let o=this.#e;this.open(function(a){if(a==null)n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,data:void 0});else {let i=a.get(e);i.onsuccess=function(s){let c=s.target.result,f=c?c.value:void 0;f==null?n({success:true,code:t.#n.empty.code,msg:t.#n.empty.msg,data:f,event:s,result:c}):n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,data:f,event:s,result:c});},i.onerror=function(s){n({success:false,code:t.#n.getFailed.code,msg:t.#n.getFailed.msg,data:void 0,event:s});};}},o);})}async regexpGet(e){let t=[],n=this;return new Promise(o=>{let a=n.#e;this.open(function(i){if(i==null)o({success:false,code:n.#n.regexpGetFailed.code,msg:n.#n.regexpGetFailed.msg,data:[]});else {let s=i.getAll();s.onsuccess=function(l){let f=l.target.result;f.length!==0&&f.forEach((d,u)=>{let h=d.key,g=d.value;h.match(e)&&(t=t.concat(g));}),o({success:true,code:n.#n.operationSuccess.code,msg:n.#n.operationSuccess.msg,data:t,event:l});},s.onerror=function(l){o({success:false,code:n.#n.getFailed.code,msg:n.#n.getFailed.msg,data:[],event:l});};}},a);})}async delete(e){let t=this;return new Promise(n=>{let o=t.#e;this.open(function(a){if(a==null)n({success:false,code:t.#n.deleteFailed.code,msg:t.#n.deleteFailed.msg});else {let i=a.delete(e);i.onsuccess=function(s){n({success:true,code:t.#n.operationSuccess.code,msg:t.#n.operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:t.#n.deleteFailed.code,msg:t.#n.deleteFailed.msg,event:s});};}},o);})}async deleteAll(){let e=this;return new Promise(t=>{let n=e.#e;this.open(function(o){if(o==null)t({success:false,code:e.#n.deleteAllFailed.code,msg:e.#n.deleteAllFailed.msg});else {let a=o.clear();a.onsuccess=function(i){t({success:true,code:e.#n.operationSuccess.code,msg:e.#n.operationSuccess.msg,event:i});},a.onerror=function(i){t({success:false,code:e.#n.deleteAllFailed.code,msg:e.#n.deleteAllFailed.msg,event:i});};}},n);})}}class ba{#e=false;#t=0;#o;#a=void 0;lock;unlock;run;isLock;constructor(e,t,n){let o=this;this.#o=e,typeof t=="number"?this.#t=t:this.#t=n,this.lock=function(){o.#e=true,clearTimeout(o.#a);},this.unlock=function(){o.#a=setTimeout(()=>{o.#e=false;},o.#t);},this.isLock=function(){return o.#e},this.run=async function(...a){o.isLock()||(o.lock(),await o.#o.apply(this,a),o.unlock());};}}class ha{#e=false;tag="Utils.Log";#t=null;#o=0;#a={tag:true,successColor:"#0000FF",errorColor:"#FF0000",infoColor:"0",warnColor:"0",debug:false,autoClearConsole:false,logMaxCount:999};#r=["font-weight: bold; color: cornflowerblue","font-weight: bold; color: cornflowerblue","font-weight: bold; color: darkorange","font-weight: bold; color: cornflowerblue"];constructor(e,t=window.console){typeof e=="string"?this.tag=e:typeof e=="object"&&typeof e?.script?.name=="string"&&(this.tag=e.script.name),this.#t=t;}parseErrorStack(e){let t={name:"",position:""};for(let n of e){n=n.trim();let o=n.match(/^at[\s]+(.+?)[\s]+/i),a=n.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(o==null||a==null)continue;let i=o[o.length-1],s=a[a.length-1];if(!(i===""||i.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){t.name=i,t.position=s;break}}if(t.position===""){let n=e[e.length-1].trim();if(n.startsWith("at chrome-extension://")){let o=n.match(/^at[\s]+(.+)/);o&&(t.position=o[o.length-1]);}}return t.position===""&&(t.position=e[e.length-1].trim().replace(/^at[\s]*/g,"")),t}checkClearConsole(){this.#o++,this.#a.autoClearConsole&&this.#o>this.#a.logMaxCount&&(this.#t.clear(),this.#o=0);}printContent(e,t,n){this.checkClearConsole(),n=n||"";let o=new Error().stack.split(`
`);o.splice(0,2);let{name:a,position:i}=this.parseErrorStack(o),s=this.tag,l=this,c=`%c[${s}%c`,f=`%c${a}%c]%c`;a.trim()!==""&&(f="-"+f);function d(u){typeof u=="string"?l.#t.log(`${c}${f} %s`,...l.#r,`color: ${t};${n}`,u):typeof u=="number"?l.#t.log(`${c}${f} %d`,...l.#r,`color: ${t};${n}`,u):typeof u=="object"?l.#t.log(`${c}${f} %o`,...l.#r,`color: ${t};${n}`,u):l.#t.log(u);}if(Array.isArray(e))for(let u=0;u<e.length;u++)d(e[u]);else d(e);this.#a.debug&&this.#t.log(i);}info(...e){this.#e||this.printContent(e,this.#a.infoColor);}warn(...e){this.#e||this.printContent(e,this.#a.warnColor,"background: #FEF6D5;padding: 4px 6px 4px 0px;");}error(...e){this.#e||this.printContent(e,this.#a.errorColor);}success(...e){this.#e||this.printContent(e,this.#a.successColor);}table(e){if(this.#e)return;this.checkClearConsole();let t=new Error().stack.split(`
`);t.splice(0,1);let n=this.parseErrorStack(t),o=n.name,a=n.position,i=o;this.#t.log(`%c[${this.tag}%c-%c${i}%c]%c`,...this.#r,`color: ${this.#a.infoColor};`),this.#t.table(e),this.#a.debug&&this.#t.log(a);}config(e){this.#a=Object.assign(this.#a,e);}disable(){this.#e=true;}recovery(){this.#e=false;}}class ma{#e={canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50};#t=null;#o=null;#a=null;constructor(e){if(this.#e=ae.assign(this.#e,e),!(this.#e.canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");this.init();}init(){let e=this.#e.canvasNode.getContext("2d");if(e==null)throw new Error("Utils.Progress 获取画笔失败");this.#t=e,this.#o=this.#e.canvasNode.width,this.#a=this.#e.canvasNode.height,window.devicePixelRatio&&(this.#e.canvasNode.style.width=this.#o+"px",this.#e.canvasNode.style.height=this.#a+"px",this.#e.canvasNode.height=this.#a*window.devicePixelRatio,this.#e.canvasNode.width=this.#o*window.devicePixelRatio,this.#t.scale(window.devicePixelRatio,window.devicePixelRatio)),this.#t.lineWidth=this.#e.lineWidth;}draw(){let e=this.#e.progress*360/100;this.#t.clearRect(0,0,this.#o,this.#a),this.#t.beginPath(),this.#t.arc(this.#o/2,this.#a/2,this.#e.circleRadius,1,8),this.#t.strokeStyle=this.#e.lineBgColor,this.#t.stroke(),this.#t.beginPath(),this.#t.arc(this.#o/2,this.#a/2,this.#e.circleRadius,-Math.PI/2,e*Math.PI/180-Math.PI/2),this.#t.strokeStyle=this.#e.lineColor,this.#t.stroke();let t=parseInt(this.#e.progress.toString())+"%";this.#t.font=this.#e.fontSize+"px SimHei";let n=this.#t.measureText(t).width,o=this.#e.fontSize/2;this.#t.fillStyle=this.#e.textColor,this.#t.fillText(t,this.#o/2-n/2,this.#a/2+o/2);}}class ga{items;constructor(e,t){this.items=new Map,e!=null&&this.set(e,t);}get length(){return this.size()}get entries(){let e=this;return function*(){let t=Object.keys(e.getItems());for(const n of t)yield [n,e.get(n)];}}get[Symbol.iterator](){let e=this;return function(){return e.entries()}}has(e){return this.items.has(e)}get(e){return this.items.get(e)}set(e,t){if(e===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为空");this.items.set(e,t);}delete(e){return this.has(e)?this.items.delete(e):false}keys(){return this.items.keys().toArray()}values(){return this.items.values().toArray()}clear(){this.items.clear();}size(){return this.items.size}getItems(){return this.items}concat(e){e.forEach((t,n)=>{this.items.set(n,t);});}forEach(e){this.items.forEach((t,n,o)=>{e(t,n,this);});}startsWith(e){const t=this.keys();for(const n of t)if(String(n).startsWith(e))return  true;return  false}getStartsWith(e){let t;const n=this.keys();for(const o of n)if(String(o).startsWith(String(e))){t=this.get(o);break}return t}}class qn{defaultApi={document,window,globalThis,self,top,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)};api;constructor(e){e&&(e.globalThis==null&&(e.globalThis=e.window),e.self==null&&(e.self=e.window)),e||(e=Object.assign({},this.defaultApi)),this.api=Object.assign({},e);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}get setTimeout(){return this.api.setTimeout}get setInterval(){return this.api.setInterval}get clearTimeout(){return this.api.clearTimeout}get clearInterval(){return this.api.clearInterval}}const He={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(r){return typeof r=="object"&&r!==null},isFunction(r){return typeof r=="function"},isReactive(r){return !!(r&&r[He.ReactiveFlags.IS_REACTIVE])},isArray(r){return Array.isArray(r)}};class ya{deps=[];active=true;fn;constructor(e,t){this.fn=e;}run(e){this.active||this.fn();try{return typeof e=="function"&&e(this),this.fn()}finally{typeof e=="function"&&e(void 0);}}}class xa{_value;_isRef=true;_rawValue;_vue;constructor(e,t){this._vue=e,this._rawValue=t,this._value=this._vue.toReactive(t);}get value(){return this._value}set value(e){e!==this._rawValue&&(this._value=this._vue.toReactive(e),this._rawValue=e);}}class wa{object;key;constructor(e,t){this.object=e,this.key=t;}get value(){return this.object[this.key]}set value(e){this.object[this.key]=e;}}class va{reactMap=new WeakMap;targetMap=new WeakMap;activeEffect=void 0;constructor(){}reactive(e){const t=this;if(!(typeof e=="object"&&e!==null))return;if(He.isReactive(e))return e;let n=this.reactMap.get(e);if(n)return n;const o=new Proxy(e,{get(a,i,s){return i===He.ReactiveFlags.IS_REACTIVE?true:(t.track(a,"get",i),Reflect.get(a,i,s))},set(a,i,s,l){let c=a[i],f=Reflect.set(a,i,s,l);return c!==s&&t.trigger(a,"set",i,c,s),f}});return t.reactMap.set(e,o),o}watch(e,t){let n;if(He.isReactive(e))n=()=>this.traversal(e);else if(He.isFunction(e))n=e;else return;let o;const a=()=>{const s=i.run(l=>{this.activeEffect=l;});t(s,o),o=s;},i=new ya(n,a);o=i.run(s=>{this.activeEffect=s;});}toReactive(e){return He.isObject(e)?this.reactive(e):e}ref(e){return new xa(this,e)}toRef(e,t){return new wa(e,t)}toRefs(e){const t=He.isArray(e)?new Array(e.length):{};for(let n in e)t[n]=this.toRef(e,n);return t}trigger(e,t,n,o,a){const i=this.targetMap.get(e);if(!i)return;const s=i.get(n);this.triggerEffect(s,"effects");}triggerEffect(e,t){e&&e.forEach(n=>{n.scheduler?n.scheduler():n.run();});}track(e,t,n){if(!this.activeEffect)return;let o=this.targetMap.get(e);o||this.targetMap.set(e,o=new Map);let a=o.get(n);a||o.set(n,a=new Set),this.trackEffect(a);}trackEffect(e){this.activeEffect&&!e.has(this.activeEffect)&&(e.add(this.activeEffect),this.activeEffect.deps.push(e));}traversal(e,t=new Set){if(!He.isObject(e)||t.has(e))return e;t.add(e);for(let n in e)this.traversal(e[n],t);return e}}const Aa=r=>(e,t)=>(r.set(e,t),t),vn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Wn=536870912,An=Wn*2,Ta=(r,e)=>t=>{const n=e.get(t);let o=n===void 0?t.size:n<An?n+1:0;if(!t.has(o))return r(t,o);if(t.size<Wn){for(;t.has(o);)o=Math.floor(Math.random()*An);return r(t,o)}if(t.size>vn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*vn);return r(t,o)},Kn=new WeakMap,Ca=Aa(Kn),Gt=Ta(Ca,Kn),Sa=r=>typeof r.start=="function",Tn=new WeakMap,Ea=r=>({...r,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,o=await e("connect",{port:t},[t]);return Tn.set(n,o),n},disconnect:({call:e})=>async t=>{const n=Tn.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Pt=new WeakMap,ka=r=>{if(Pt.has(r))return Pt.get(r);const e=new Map;return Pt.set(r,e),e},Ma=r=>{const e=Ea(r);return t=>{const n=ka(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}})),Sa(t)&&t.start();const o=(s,l=null,c=[])=>new Promise((f,d)=>{const u=Gt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:s},c):t.postMessage({id:u,method:s,params:l},c);}),a=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:o,notify:a})};return {...i}}},Ke=new Map([[0,null]]),Xe=new Map([[0,null]]),$a=Ma({clearInterval:({call:r})=>e=>{typeof Ke.get(e)=="symbol"&&(Ke.set(e,null),r("clear",{timerId:e,timerType:"interval"}).then(()=>{Ke.delete(e);}));},clearTimeout:({call:r})=>e=>{typeof Xe.get(e)=="symbol"&&(Xe.set(e,null),r("clear",{timerId:e,timerType:"timeout"}).then(()=>{Xe.delete(e);}));},setInterval:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=Gt(Ke);Ke.set(a,o);const i=()=>r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=Ke.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===o&&(e(...n),Ke.get(a)===o&&i());});return i(),a},setTimeout:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=Gt(Xe);return Xe.set(a,o),r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=Xe.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===o&&(Xe.delete(a),e(...n));}),a}}),La=r=>{const e=new Worker(r);return $a(e)},Ia=(r,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(n);return t=r(o),setTimeout(()=>URL.revokeObjectURL(o)),t}},_a=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,Et=Ia(La,_a),Ra=r=>Et().clearInterval(r),Oa=r=>Et().clearTimeout(r),Na=(...r)=>Et().setInterval(...r),Pa=(...r)=>Et().setTimeout(...r);// @license      MIT
	class Da{constructor(e){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(n,o,a)=>{this.modules=a.c,this.constructors=a.m,this.get=a;}]],[[1e3],{[this.moduleID]:(n,o,a)=>{this.modules=a.c,this.constructors=a.m,this.get=a;}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},n=>{const o=n.m;Object.keys(o).forEach(a=>{try{this.modules[a]=n(a);}catch(i){this.log(`[arrayArguments/1] Failed to require(${a}) with error:
${i}
${i.stack}`);}}),this.get=n;}],this.functionArguments[1]],this.modules={},this.constructors=[];let t={target:window,entrypoint:"webpackJsonp",debug:false,strict:false};typeof e=="object"&&(t=Object.assign(Object.assign({},t),e)),this.target=t.target,this.entrypoint=t.entrypoint,this.debug=t.debug,this.strict=t.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent();}log(e){this.debug&&console.warn(`[moduleRaid] ${e}`);}replaceGet(){this.get===null&&(this.get=e=>this.modules[e]);}fillModules(){if(typeof this.target[this.entrypoint]=="function"?this.functionArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...e);}catch(n){this.log(`moduleRaid.functionArguments[${t}] failed:
${n}
${n.stack}`);}}):this.arrayArguments.forEach((e,t)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(e);}catch(n){this.log(`Pushing moduleRaid.arrayArguments[${t}] into ${this.entrypoint} failed:
${n}
${n.stack}`);}}),this.modules&&Object.keys(this.modules).length==0){let e=false,t=0;if(typeof this.target[this.entrypoint]!="function"||!this.target[this.entrypoint]([],[],[t]))throw Error("Unknown Webpack structure");for(;!e;)try{this.modules[t]=this.target[this.entrypoint]([],[],[t]),t++;}catch{e=true;}}}setupPushEvent(){const e=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...t)=>{const n=Reflect.apply(e,this.target[this.entrypoint],t);return document.dispatchEvent(new CustomEvent("moduleraid:webpack-push",{detail:t})),n};}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let e=Object.keys(this.target);if(e=e.filter(t=>t.toLowerCase().includes("chunk")||t.toLowerCase().includes("webpack")).filter(t=>typeof this.target[t]=="function"||Array.isArray(this.target[t])),e.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:
${e.join(", ")}`);if(e.length===0)throw Error("No Webpack JSONP entrypoints could be detected");this.log(`Entrypoint has been detected at window.${e[0]} and set for injection`),this.entrypoint=e[0];}searchObject(e,t){for(const n in e){const o=e[n],a=t.toLowerCase();if(typeof o!="object"){if(n.toString().toLowerCase().includes(a))return  true;if(typeof o!="object"){if(o.toString().toLowerCase().includes(a))return  true}else if(this.searchObject(o,t))return  true}}return  false}findModule(e){const t=[],n=Object.keys(this.modules);if(n.length===0)throw new Error("There are no modules to search through!");return n.forEach(o=>{const a=this.modules[o.toString()];if(a!==void 0)try{if(typeof e=="string")switch(e=e.toLowerCase(),typeof a){case "string":a.toLowerCase().includes(e)&&t.push(a);break;case "function":a.toString().toLowerCase().includes(e)&&t.push(a);break;case "object":this.searchObject(a,e)&&t.push(a);break}else if(typeof e=="function")e(a)&&t.push(a);else throw new TypeError(`findModule can only find via string and function, ${typeof e} was passed`)}catch(i){this.log(`There was an error while searching through module '${o}':
${i}
${i.stack}`);}}),t}findConstructor(e){const t=[],n=Object.keys(this.constructors);if(n.length===0)throw new Error("There are no constructors to search through!");return n.forEach(o=>{const a=this.constructors[o];try{typeof e=="string"?(e=e.toLowerCase(),a.toString().toLowerCase().includes(e)&&t.push([this.constructors[o],this.modules[o]])):typeof e=="function"&&e(a)&&t.push([this.constructors[o],this.modules[o]]);}catch(i){this.log(`There was an error while searching through constructor '${o}':
${i}
${i.stack}`);}}),t}}class Ba{windowApi;constructor(e){this.windowApi=new qn(e);}selector(e,t){return this.selectorAll(e,t)[0]}selectorAll(e,t){if(t=t||this.windowApi.document,e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(t.querySelectorAll(e)).filter(o=>o?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(i=>(i?.textContent||i?.innerText)?.includes(a))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(t.querySelectorAll(e)).filter(c=>!!(c?.textContent||c?.innerText)?.match(l))}else return Array.from(t.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let a=e?.textContent||e?.innerText;return typeof a!="string"&&(a=""),e.matches(t)&&a?.includes(o)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],a=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";a&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=a[3]);let s=new RegExp(o,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(s)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");let n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let a=e?.closest(t);if(a){let i=e?.textContent||e?.innerText;if(typeof i=="string"&&i.includes(o))return a}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],a=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";a&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=a[3]);let s=new RegExp(o,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.closest(t);if(l){let c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return e?.closest(t)}}let Ze=new Ba;class Xt{windowApi;constructor(e){this.windowApi=new qn(e);}version="2025.9.8";addStyle(e){if(typeof e!="string")throw new Error("Utils.addStyle 参数cssText 必须为String类型");let t=this.windowApi.document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,this.windowApi.document.head?this.windowApi.document.head.appendChild(t):this.windowApi.document.body?this.windowApi.document.body.appendChild(t):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(t):this.windowApi.document.documentElement.insertBefore(t,this.windowApi.document.documentElement.childNodes[0]),t}assign=ae.assign.bind(ae);async asyncReplaceAll(e,t,n){let o=this;if(typeof e!="string")throw new TypeError("string必须是字符串");if(typeof n!="function")throw new TypeError("asyncFn必须是函数");let a;if(typeof t=="string")a=new RegExp(o.parseStringToRegExpString(t),"g");else if(t instanceof RegExp){if(!t.global)throw new TypeError("pattern必须是全局匹配");a=new RegExp(t);}else throw new TypeError("pattern必须是正则对象");let i=[],s,l=0;for(;(s=a.exec(e))!==null;){const c=n(s[0]),f=e.slice(l,s.index);l=s.index+s[0].length,i.push(c),i.push(f);}return i.push(e.slice(l)),i=await Promise.all(i),i.join("")}ajaxHooker=(e=false)=>e?ca():la();canvasClickByPosition(e,t=0,n=0,o=this.windowApi.window){if(!(e instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");t=parseInt(t.toString()),n=parseInt(n.toString());const a={cancelBubble:true,cancelable:true,clientX:t,clientY:n,view:o,detail:1};e.dispatchEvent(new MouseEvent("mousedown",a)),e.dispatchEvent(new MouseEvent("mouseup",a));}checkUserClickInNode(e){let t=this;if(!t.isDOM(e))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");let n=t.windowApi.window.event,o=t.windowApi.window.event,a=n?.composedPath()?.[0],i=n?.clientX!=null?n.clientX:o.touches[0].clientX,s=n?.clientY!=null?n.clientY:o.touches[0].clientY,{left:l,right:c,top:f,bottom:d}=e.getBoundingClientRect();return i>=l&&i<=c&&s>=f&&s<=d?true:!!(a&&e.contains(a)||a==e)}cloneFormData(e,t){let n=new FormData;for(let[o,a]of e.entries()){let i=typeof t=="function"?t(o,a):false;typeof i=="boolean"&&i||n.append(o,a);}return n}createOverload(){let e=new Map;function t(...n){let o=n.map(i=>typeof i).join(","),a=e.get(o);if(!a)throw new TypeError("没有找到对应的实现");return a.apply(this,n)}return t.addImpl=function(...n){let o=n.pop();if(typeof o!="function")throw new TypeError("最后一个参数必须是函数");let a=n.join(",");e.set(a,o);},t}ColorConversion=aa;deepClone=ae.deepClone.bind(ae);debounce(e,t=0){let n=null,o=this;return function(...a){o.workerClearTimeout(n),n=o.workerSetTimeout(function(){e.apply(o,a);},t);}}deleteParentNode(e,t){let n=this;if(e==null)return;if(!n.isDOM(e))throw new Error("Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof t!="string")throw new Error("Utils.deleteParentNode 参数 targetSelector 必须为 string 类型");let o=false,a=Ze.closest(e,t);return a&&(a.remove(),o=true),o}Dictionary=ga;dispatchEvent(e,t,n){let o=[];typeof t=="string"&&(o=[t]),Array.isArray(t)&&(o=[...t]),o.forEach(a=>{let i=new Event(a);n&&Object.assign(i,n),e.dispatchEvent(i);});}downloadBase64(e,t,n=false){let o=this;if(typeof e!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof t!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(n){const a=this.windowApi.document.createElement("iframe");a.style.display="none",a.src=e,this.windowApi.document.body.appendChild(a),o.workerSetTimeout(()=>{a.contentWindow.document.execCommand("SaveAs",true,t),this.windowApi.document.body.removeChild(a);},100);}else {const a=this.windowApi.document.createElement("a");a.setAttribute("target","_blank"),a.download=t,a.href=e,a.click();}}findWebPageVisibleText(e="",t=false){let n=null,o;if(this.windowApi.globalThis.find){let a=this.windowApi.self.find;if(o=a(e,t,true,true,false),o&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(o=a(e,t,true,true,false)),!o)for(o=a(e,0,1);a(e,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)n!=null&&(n=n,n.collapse(false),o=n.findText(e),o&&n.select()),(n==null||o==0)&&(n=this.windowApi.self.document.body.createTextRange(),o=n.findText(e),o&&n.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!o}*findElementsWithText(e,t,n){let o=this;if(e.outerHTML.includes(t))if(e.children.length===0)(typeof n=="function"?n(e):false)||(yield e);else {let a=Array.from(e.childNodes).filter(i=>i.nodeType===Node.TEXT_NODE);for(let i of a)i.textContent.includes(t)&&(typeof n=="function"&&n(e)||(yield i));}for(let a=0;a<e.children.length;a++){let i=e.children[a];yield*o.findElementsWithText(i,t,n);}}findVisibleElement(e){let t=e;for(;t;){if(t.getBoundingClientRect().length)return t;t=t.parentElement;}return null}formatByteToSize(e,t=true){if(e=parseInt(e.toString()),isNaN(e))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,o="KB",a={};a.B=1,a.KB=1024,a.MB=a.KB*a.KB,a.GB=a.MB*a.KB,a.TB=a.GB*a.KB,a.PB=a.TB*a.KB,a.EB=a.PB*a.KB,a.ZB=a.EB*a.KB,a.YB=a.ZB*a.KB,a.BB=a.YB*a.KB,a.NB=a.BB*a.KB,a.DB=a.NB*a.KB;for(let i in a)if(n=e/a[i],o=i,a.KB>=n)break;return n=n.toFixed(2),n=t?n+o.toString():parseFloat(n.toString()),n}getNodeListValue(...e){let t=[];for(let n of e){let o=n;if(typeof n=="function"&&(o=n()),o.length!==0){t=[...o];break}}return t}getNonNullValue(...e){let t=e[e.length-1],n=this;for(const o of e)if(n.isNotNull(o)){t=o;break}return t}formatTime(e=new Date,t="yyyy-MM-dd HH:mm:ss"){let n=e==null?new Date:new Date(e);function o(s){return s<10?"0"+s:s}function a(s){return s>12?s-12:s}let i={yyyy:n.getFullYear(),MM:o(n.getMonth()+1),dd:o(n.getDate()),HH:o(n.getHours()),hh:o(a(n.getHours())),mm:o(n.getMinutes()),ss:o(n.getSeconds())};return Object.keys(i).forEach(function(s){let l=new RegExp(s,"g");t=t.replace(l,i[s]);}),t}formatToTimeStamp(e){if(typeof e!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(e.length===8){let n=new Date;e=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+e;}return e=e.substring(0,19),e=e.replace(/-/g,"/"),new Date(e).getTime()}GBKEncoder=ra;getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getArrayLastValue(e){return e[e.length-1]}getArrayRealValue(...e){let t=null;for(let n of e)if(typeof n=="function"&&(n=n()),n!=null){t=n;break}return t}getDaysDifference(e=Date.now(),t=Date.now(),n="天"){n=n.trim(),e.toString().length===10&&(e=e*1e3),t.toString().length===10&&(t=t*1e3);let o=e>t?t:e,a=e>t?e:t,i=1e3,s=60*i,l=60*s,c=24*l,f=30*c,d=12*f,u=new Date(a),h=new Date(o),g=1;n==="年"?g=d:n==="月"?g=f:n==="天"?g=c:n==="时"?g=l:n==="分"?g=s:n==="秒"&&(g=i);let m=Math.round(Math.abs((u-h)/g));if(n==="auto"){let x=a-o;if(m=Math.floor(x/(24*3600*1e3)),m>0)m=m+"天";else {let w=x%864e5,v=Math.floor(w/(3600*1e3));if(v>0)m=v+"小时";else {let C=w%36e5,S=Math.floor(C/(60*1e3));if(S>0)m=S+"分钟";else {let E=C%6e4;m=Math.round(E/1e3)+"秒";}}}}return m}getElementSelector(e){let t=this;if(!e||!e.parentElement)return;if(e.id)return "#"+e.id;let n=t.getElementSelector(e.parentElement);if(!n)return e.tagName.toLowerCase();if(e.parentElement.querySelectorAll(e.tagName).length>1){let o=Array.prototype.indexOf.call(e.parentElement.children,e)+1;n+=" > "+e.tagName.toLowerCase()+":nth-child("+o+")";}else n+=" > "+e.tagName.toLowerCase();return n}getMaxValue(...e){let t=[...e],n=[];if(t.length!==0)if(t.length>1){if(t.length===2&&typeof t[0]=="object"&&typeof t[1]=="function"){let o=t[0],a=t[1];Object.keys(o).forEach(i=>{n=[...n,a(i,o[i])];});}else t.forEach(o=>{isNaN(parseFloat(o))||(n=[...n,parseFloat(o)]);});return Math.max(...n)}else return t[0].forEach(o=>{isNaN(parseFloat(o))||(n=[...n,parseFloat(o)]);}),Math.max(...n)}getMaxZIndexNodeInfo(e=1,t=this.windowApi.document,n){e=Number.isNaN(e)?1:e;const o=this,a=2*Math.pow(10,9);let i=0,s=null;function l(f){return f.position!=="static"&&f.display!=="none"}function c(f){if(typeof n=="function"){let u=n(f);if(typeof u=="boolean"&&!u)return}const d=o.windowApi.window.getComputedStyle(f);if(l(d)){let u=parseInt(d.zIndex);isNaN(u)||u>i&&(i=u,s=f),f.shadowRoot!=null&&f instanceof ShadowRoot&&f.shadowRoot.querySelectorAll("*").forEach(h=>{c(h);});}}return t.querySelectorAll("*").forEach((f,d)=>{c(f);}),i+=e,i>=a&&(i=a),{node:s,zIndex:i}}getMaxZIndex(e=1,t=this.windowApi.document,n){return this.getMaxZIndexNodeInfo(e,t,n).zIndex}getMinValue(...e){let t=[...e],n=[];if(t.length!==0)if(t.length>1){if(t.length===2&&typeof t[0]=="object"&&typeof t[1]=="function"){let o=t[0],a=t[1];Object.keys(o).forEach(i=>{n=[...n,a(i,o[i])];});}else t.forEach(o=>{isNaN(parseFloat(o))||(n=[...n,parseFloat(o)]);});return Math.min(...n)}else return t[0].forEach(o=>{isNaN(parseFloat(o))||(n=[...n,parseFloat(o)]);}),Math.min(...n)}getRandomAndroidUA(){let e=this,t=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],n=e.getRandomValue(12,14),o=e.getRandomValue(t),a=e.getRandomValue(120,132),i=e.getRandomValue(0,0),s=e.getRandomValue(2272,6099),l=e.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${n}; ${o}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${a}.${i}.${s}.${l} Mobile Safari/537.36`}getRandomPCUA(){let e=this,t=e.getRandomValue(120,132),n=e.getRandomValue(0,0),o=e.getRandomValue(2272,6099),a=e.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${t}.${n}.${o}.${a} Safari/537.36`}getRandomValue(...e){let t=[...e];if(t.length>1)if(t.length===2&&typeof t[0]=="number"&&typeof t[1]=="number"){let n=t[0]>t[1]?t[1]:t[0],o=t[0]>t[1]?t[0]:t[1];return Math.round(Math.random()*(o-n))+n}else return t[Math.floor(Math.random()*t.length)];else if(t.length===1){let n=t[0];if(Array.isArray(n))return n[Math.floor(Math.random()*n.length)];if(typeof n=="object"&&Object.keys(n).length>0){let o=Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)];return n[o]}else return n}}getReactObj(e){let t={};return e==null||Object.keys(e).forEach(o=>{if(o.startsWith("__react")){const a=o.replace(/__(.+)\$.+/i,"$1"),i=Reflect.get(e,o);a in t||Reflect.set(t,a,i);}}),t}getSymbol(e,t){if(typeof e!="object")throw new TypeError("target不是一个对象");let n=Object.getOwnPropertySymbols(e);if(typeof t=="string"){let o=n.find(a=>a.toString()===t);if(o)return e[o]}else if(typeof t=="symbol"){let o=n.find(a=>a===t);if(o)return e[o]}else {let o={};return n.forEach(a=>{o[a]=e[a];}),o}}getTextLength(e){return new TextEncoder().encode(e).length}getTextStorageSize(e,t=true){let n=this;return n.formatByteToSize(n.getTextLength(e),t)}getThunderUrl(e){if(e==null)throw new TypeError("url不能为空");if(typeof e!="string")throw new TypeError("url必须是string类型");if(e.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa("AA"+e+"ZZ")}`}GM_Cookie=sa;GM_Menu=fa;Hooks=da;Httpx=pa;indexedDB=ua;isNativeFunc(e){return !!e.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...e){let t=50,n=()=>{let i=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,s=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,l=this.windowApi.document.documentElement.scrollHeight-t;return i+s>=l},o=i=>{let s=i.scrollTop,l=i.clientHeight,c=i.scrollHeight-l-t;return s>=c},a=e[0];if(e.length===0||typeof e[0]=="number")return n();if(typeof e[0]=="object"&&e[0]instanceof HTMLElement)return typeof e[1]=="number"&&!Number.isNaN(e[1])&&(t=e[1]),o(e[0]);throw new TypeError("参数1类型错误"+typeof a)}isDOM=ae.isDOM.bind(ae);isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(e){let t=false;if(typeof jQuery=="object"&&e instanceof jQuery&&(t=true),e==null)return  false;if(typeof e=="object"){let n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const o of n)if(o in e)t=true;else {t=false;break}}return t}isPhone(e=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(e)}isSameChars(e,t=1){if(typeof e!="string")throw new TypeError("参数 str 必须是 string 类型");if(e.length<2)return  false;e=e.toLowerCase();const n={};let o=0;for(const i of e)Reflect.has(n,i)?n[i]++:n[i]=1,o++;let a=false;for(const i in n)if(n[i]/o>=t){a=true;break}return a}isNotNull=ae.isNotNull.bind(ae);isNull=ae.isNull.bind(ae);isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(e,t=false){let n=[];e instanceof Array||e instanceof NodeList?(e=e,n=[...e]):n=[e];let o=true;for(const a of n){if(this.windowApi.window.getComputedStyle(a).display==="none")o=false;else {let s=a.getBoundingClientRect();if(t){let l=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,c=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;o=!(s.right<0||s.left>l||s.bottom<0||s.top>c);}else o=!!a.getClientRects().length;}if(!o)break}return o}isWebView_Via(){let e=true,t=this;if(typeof this.windowApi.top.window.via=="object"){for(const n in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,n)){let o=this.windowApi.top.window.via[n];if(typeof o=="function"&&t.isNativeFunc(o))e=true;else {e=false;break}}}else e=false;return e}isWebView_X(){let e=true,t=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const n in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,n)){let o=this.windowApi.top.window.mbrowser[n];if(typeof o=="function"&&t.isNativeFunc(o))e=true;else {e=false;break}}}else e=false;return e}parseObjectToArray(e){if(typeof e!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let t=[];return Object.keys(e).forEach(function(n){t=t.concat(e[n]);}),t}LockFunction=ba;Log=ha;mergeArrayToString(e,t){if(!(e instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let n="";return typeof t=="function"?e.forEach(o=>{n+=t(o);}):typeof t=="string"?e.forEach(o=>{n+=o[t];}):e.forEach(o=>{Object.values(o).filter(a=>typeof a=="string").forEach(a=>{n+=a;});}),n}mutationObserver(e,t){let n=this,o={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};t=n.assign(o,t);let a=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,i=new a(function(s,l){typeof t.callback=="function"&&t.callback(s,l);});return Array.isArray(e)||e instanceof NodeList?e.forEach(s=>{i.observe(s,t.config);}):n.isJQuery(e)?e.each((s,l)=>{i.observe(l,t.config);}):i.observe(e,t.config),t.immediate&&typeof t.callback=="function"&&t.callback([],i),i}mutationVisible(e,t,n){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(e==null)throw new TypeError("mutatuinVisible target is null");let o={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};o=this.assign(o,n||{});let a=new IntersectionObserver((i,s)=>{i[0].isIntersecting&&typeof t=="function"&&t(i,s);},o);Array.isArray(e)?e.forEach(i=>{a.observe(i);}):a.observe(e);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=Fe,Fe}noConflictFunc(e,t,n=[],o=true){let a=this;if(typeof e!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof t!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(n))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");let i="__"+t;function s(){typeof a.windowApi.window[i]<"u"||(a.windowApi.window[i]=a.deepClone(e),Object.values(e).forEach(d=>{typeof d=="function"&&(e[d.name]=()=>{});}));}function l(){Array.from(n).forEach(d=>{Object.values(e).forEach(u=>{typeof u=="function"&&(typeof a.windowApi.window[i]>"u"&&(a.windowApi.window[i]={}),d===u.name&&(a.windowApi.window[i][u.name]=e[u.name],e[u.name]=()=>{}));});});}function c(){typeof a.windowApi.window[i]>"u"||(Object.assign(e,a.windowApi.window[i]),Reflect.deleteProperty(a.windowApi.window,"needReleaseKey"));}function f(){typeof a.windowApi.window[i]>"u"||Array.from(n).forEach(d=>{a.windowApi.window[i][d]&&(e[d]=a.windowApi.window[i][d],Reflect.deleteProperty(a.windowApi.window[i],d),Object.keys(a.windowApi.window[i]).length===0&&Reflect.deleteProperty(window,i));});}o?n.length===0?s():l():n.length===0?c():f();}parseBase64ToBlob(e){if(typeof e!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");let t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),a=o.length,i=new Uint8Array(a);for(;a--;)i[a]=o.charCodeAt(a);return new Blob([i],{type:n})}parseBase64ToFile(e,t="example"){if(typeof e!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof t!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");let n=e.split(","),o=n[0].match(/:(.*?);/)[1],a=atob(n[1]),i=a.length,s=new Uint8Array(i);for(;i--;)s[i]=a.charCodeAt(i);return new File([s],t,{type:o})}parseInt(e=[],t=0){if(e==null)return parseInt(t.toString());let n=parseInt(e[e.length-1]);return isNaN(n)&&(n=parseInt(t.toString())),n}async parseBlobToFile(e,t="example"){return new Promise((n,o)=>{fetch(e).then(a=>a.blob()).then(a=>{const i=new File([a],t,{type:a.type});n(i);}).catch(a=>{console.error("Error:",a),o(a);});})}parseCDATA(e=""){let t="",o=/<\!\[CDATA\[([\s\S]*)\]\]>/.exec(e.trim());return o&&o.length>1&&(t=o[o.length-1]),t}async parseFileToBase64(e){let t=new FileReader;return t.readAsDataURL(e),new Promise(n=>{t.onload=function(o){n(o.target.result);};})}parseFromString(e,t="text/html"){return new DOMParser().parseFromString(e,t)}parseStringToRegExpString(e){if(typeof e!="string")throw new TypeError("string必须是字符串");return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}preventEvent(e,t=[],n){function o(a){return a?.preventDefault(),a?.stopPropagation(),a?.stopImmediatePropagation(),false}if(arguments.length===1)return o(arguments[0]);typeof t=="string"&&(t=[t]),t.forEach(a=>{e.addEventListener(a,o,{capture:!!n});});}Progress=ma;registerTrustClickEvent(e=true,t){function n(a){return new Proxy(a,{get:function(i,s){return s==="isTrusted"?e:Reflect.get(i,s)}})}t==null&&(t=function(a){return a==="click"});const o=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...a){let i=a[0],s=a[1];if(t(i)){if(typeof s=="function")a[1]=function(l){s.call(this,n(l));};else if(typeof s=="object"&&"handleEvent"in s){let l=s.handleEvent;a[1].handleEvent=function(c){if(c!=null)try{c instanceof Proxy,l.call(this,n(c));}catch{Reflect.set(c,"isTrusted",e);}};}}return o.apply(this,a)};}reverseNumber(e){let t=0,n=false;for(e<0&&(n=true,e=Math.abs(e));e>0;)t=t*10+e%10,e=Math.floor(e/10);return n?-t:t}selectElementText(e,t,n,o){let a=this.windowApi.document.createRange();if(a.selectNodeContents(e),t){if(t.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");n!=null&&o!=null&&(a.setStart(t,n),a.setEnd(t,o));}let i=this.windowApi.globalThis.getSelection();i&&(i.removeAllRanges(),i.addRange(a));}setClip(e,t={type:"text",mimetype:"text/plain"}){typeof e=="object"?e instanceof Element?e=e.outerHTML:e=JSON.stringify(e):typeof e!="string"&&(e=e.toString());let n=typeof t=="object"?t.type:t;n.includes("html")?n="text/html":n="text/plain";let o=this;class a{#e;#t;#o;constructor(s,l,c){this.#e=s,this.#t=l,this.#o=c;}async init(){let s=false,l=await this.requestClipboardPermission();if(console.log(l),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{s=await this.copyDataByClipboard();}catch(c){console.error("复制失败，使用第二种方式，error👉",c),s=this.copyTextByTextArea();}else s=this.copyTextByTextArea();this.#e(s),this.destroy();}destroy(){this.#e=null,this.#t=null,this.#o=null;}isText(){return this.#o.includes("text")}hasClipboard(){return navigator?.clipboard!=null}hasClipboardWrite(){return navigator?.clipboard?.write!=null}hasClipboardWriteText(){return navigator?.clipboard?.writeText!=null}copyTextByTextArea(){try{let s=o.windowApi.document.createElement("textarea");return s.value=this.#t,s.setAttribute("type","text"),s.setAttribute("style","opacity:0;position:absolute;"),s.setAttribute("readonly","readonly"),o.windowApi.document.body.appendChild(s),s.select(),o.windowApi.document.execCommand("copy"),o.windowApi.document.body.removeChild(s),!0}catch(s){return console.error("复制失败，error👉",s),false}}requestClipboardPermission(){return new Promise((s,l)=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(c=>{s(true);}).catch(c=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",c.message??c.name??c.stack]),s(false);}):s(false);})}copyDataByClipboard(){return new Promise((s,l)=>{if(this.isText())navigator.clipboard.writeText(this.#t).then(()=>{s(true);}).catch(c=>{l(c);});else {let c=new Blob([this.#t],{type:this.#o});navigator.clipboard.write([new ClipboardItem({[this.#o]:c})]).then(()=>{s(true);}).catch(f=>{l(f);});}})}}return new Promise(i=>{const s=new a(i,e,n);o.windowApi.document.hasFocus()?s.init():o.windowApi.window.addEventListener("focus",()=>{s.init();},{once:true});})}setTimeout(e,t=0){let n=this;if(typeof e!="function"&&typeof e!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof t!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(o=>{n.workerSetTimeout(()=>{o(n.tryCatch().run(e));},t);})}sleep(e=0){let t=this;if(typeof e!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(n=>{t.workerSetTimeout(()=>{n(void 0);},e);})}dragSlider(e,t=this.windowApi.window.innerWidth){let n=this;function o(d,u,h){let g=typeof unsafeWindow>"u"?globalThis:unsafeWindow,m=n.windowApi.document.createEvent("MouseEvents");return m.initMouseEvent(d,true,true,g,0,u,h,u,h,false,false,false,false,0,null),m}let a=typeof e=="string"?Ze.selector(e):e;if(!(a instanceof Node)||!(a instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");let i=a.getBoundingClientRect(),s=i.x||i.left,l=i.y||i.top,c=s+t,f=l;a.dispatchEvent(o("mousedown",s,l)),a.dispatchEvent(o("mousemove",c,f)),a.dispatchEvent(o("mouseleave",c,f)),a.dispatchEvent(o("mouseout",c,f));}enterFullScreen(e=this.windowApi.document.documentElement,t){try{if(e.requestFullscreen)e.requestFullscreen(t);else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.msRequestFullscreen)e.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(n){console.error(n);}}exitFullScreen(e=this.windowApi.document.documentElement){return this.windowApi.document.exitFullscreen?this.windowApi.document.exitFullscreen():this.windowApi.document.msExitFullscreen?this.windowApi.document.msExitFullscreen():this.windowApi.document.mozCancelFullScreen?this.windowApi.document.mozCancelFullScreen():this.windowApi.document.webkitCancelFullScreen?this.windowApi.document.webkitCancelFullScreen():new Promise((t,n)=>{n(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(e,t,n=true){let o=this;if(typeof t!="function"&&typeof t!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof n!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");let a=function(f){return typeof t=="string"?f[t]:t(f)},i=function(f,d){let u=a(d),h=a(f);return n?h>u?-1:h<u?1:0:h<u?-1:h>u?1:0},s=function(f,d){let u=f.length;for(let h=0;h<u-1;h++)for(let g=0;g<u-1-h;g++){let m=f[g],x=f[g+1],w=a(m),v=a(x);if(n==true&&w<v||n==false&&w>v){let C=m.nextElementSibling;x.after(m),C==null?C.parentNode.appendChild(x):C.before(x),f=d();}}},l=e,c=null;if(e instanceof Function&&(c=e,e=e()),Array.isArray(e))e.sort(i);else if(e instanceof NodeList||o.isJQuery(e))s(e,c),l=c();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return l}stringToRegular(e,t="ig"){let n;if(t=t.toLowerCase(),typeof e=="string")n=new RegExp(e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t);else if(e instanceof RegExp)n=e;else throw new Error("Utils.stringToRegular 参数targetString必须是string|Regexp类型");return n}stringTitleToUpperCase(e,t=false){let n=e.slice(0,1).toUpperCase();return t?n=n+e.slice(1).toLowerCase():n=n+e.slice(1),n}startsWith(e,t,n=0){let o=this;if(n>e.length)return  false;n!==0&&(e=e.slice(n,e.length));let a=t;if(typeof t=="string")a=new RegExp(`^${t}`);else if(Array.isArray(t)){let i=false;for(const s of t)if(!o.startsWith(e,s,n)){i=true;break}return i}return !!e.match(a)}stringTitleToLowerCase(e,t=false){let n=e.slice(0,1).toLowerCase();return t?n=n+e.slice(1).toUpperCase():n=n+e.slice(1),n}toJSON=ae.toJSON.bind(ae);toSearchParamsStr(e,t){let n=this,o="";return Array.isArray(e)?e.forEach(a=>{o===""?o+=n.toSearchParamsStr(a):o+="&"+n.toSearchParamsStr(a);}):o=new URLSearchParams(Object.entries(e)).toString(),t&&!o.startsWith("?")&&(o="?"+o),o}searchParamStrToObj(e){return typeof e!="string"?{}:Object.fromEntries(new URLSearchParams(e))}tryCatch=Tt;uniqueArray(e=[],t,n=(o,a)=>o===a){if(typeof t=="function"){const o=t,a=new Set,i=[];for(const s of e){const l=o(s);a.has(l)||(a.add(l),i.push(s));}return i}else return Array.from(e).filter(o=>!Array.from(t).some(function(a){return n(o,a)}))}waitArrayLoopToEnd(e,t){let n=this;if(typeof t!="function"&&typeof t!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(e).map(async(o,a)=>{await n.tryCatch(a,o).run(t);}))}wait(e,t,n){const o=this;let a=typeof t=="number"?t:0;return new Promise(i=>{let s=o.mutationObserver(n||o.windowApi.document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(l,c){let f=e();f.success&&(typeof c?.disconnect=="function"&&c.disconnect(),i(f.data));}});a>0&&o.workerSetTimeout(()=>{typeof s?.disconnect=="function"&&s.disconnect(),i(null);},a);})}waitNode(...e){e=e.filter(s=>s!==void 0);let t=this,n=e[0],o=t.windowApi.document,a=0;if(typeof e[0]!="string"&&!Array.isArray(e[0])&&typeof e[0]!="function")throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");if(e.length!==1)if(e.length===2){let s=e[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)o=s;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(e.length===3){let s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(o=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");function i(){if(Array.isArray(n)){let s=[];for(let l=0;l<n.length;l++){let c=Ze.selector(n[l]);c&&s.push(c);}if(s.length===n.length)return s}else return typeof n=="function"?n():Ze.selector(n,o)}return t.wait(()=>{let s=i();return s?{success:true,data:s}:{success:false,data:s}},a,o)}waitAnyNode(...e){e=e.filter(s=>s!==void 0);let t=this,n=e[0],o=t.windowApi.document,a=0;if(typeof e[0]!="object"&&!Array.isArray(e[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(e.length!==1)if(e.length===2){let s=e[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)o=s;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(e.length===3){let s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(o=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");let i=n.map(s=>t.waitNode(s,o,a));return Promise.any(i)}waitNodeList(...e){e=e.filter(s=>s!==void 0);let t=this,n=e[0],o=t.windowApi.document,a=0;if(typeof e[0]!="string"&&!Array.isArray(e[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(e.length!==1)if(e.length===2){let s=e[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)o=s;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(e.length===3){let s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(o=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");function i(){if(Array.isArray(n)){let s=[];for(let l=0;l<n.length;l++){let c=Ze.selectorAll(n[l],o);c.length&&s.push(c);}if(s.length===n.length)return s}else {let s=Ze.selectorAll(n,o);if(s.length)return s}}return t.wait(()=>{let s=i();return s?{success:true,data:s}:{success:false,data:s}},a,o)}waitAnyNodeList(...e){e=e.filter(s=>s!==void 0);let t=this,n=e[0],o=t.windowApi.document,a=0;if(!Array.isArray(e[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(e.length!==1)if(e.length===2){let s=e[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)o=s;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(e.length===3){let s=e[1],l=e[2];if(typeof s=="object"&&s instanceof Node)if(o=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");let i=n.map(s=>t.waitNodeList(s,o,a));return Promise.any(i)}waitProperty(e,t){return new Promise(n=>{let o=e;typeof e=="function"&&(o=e()),Reflect.has(o,t)?n(o[t]):Object.defineProperty(o,t,{set:function(a){try{n(a);}catch(i){console.error("Error setting property:",i);}}});})}waitPropertyByInterval(e,t,n=250,o=-1){let a=this;if(e==null)throw new TypeError("checkObj 不能为空对象 ");let i=false;return new Promise((s,l)=>{let c=a.workerSetInterval(()=>{let f=e;typeof e=="function"&&(f=e()),typeof f=="object"&&f!=null&&(typeof t=="function"&&t(f)||Reflect.has(f,t))&&(i=true,a.workerClearInterval(c),s(f[t]));},n);o!==-1&&a.workerSetTimeout(()=>{i||(a.workerClearInterval(c),l());},o);})}async waitVueByInterval(e,t,n=250,o=-1,a="__vue__"){if(e==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let i=false,s=this;try{await s.waitPropertyByInterval(e,function(l){if(l==null||!(a in l))return !1;if(t==null)return !0;let c=l[a];if(typeof t=="string"){if(t in c)return i=!0,!0}else if(t(c))return i=!0,!0;return !1},n,o);}catch{return i}return i}watchObject(e,t,n,o){typeof n!="function"&&typeof o!="function"||(typeof n=="function"?Object.defineProperty(e,t,{get(){return typeof n=="function"?n(e[t]):e[t]}}):typeof o=="function"?Object.defineProperty(e,t,{set(a){typeof o=="function"&&o(a);}}):Object.defineProperty(e,t,{get(){return typeof n=="function"?n(e[t]):e[t]},set(a){typeof o=="function"&&o(a);}}));}queryProperty(e,t){if(e==null)return;let n=t(e);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:this.queryProperty(n.data,t)}async asyncQueryProperty(e,t){if(e==null)return;let n=await t(e);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:await this.asyncQueryProperty(n.data,t)}createUtils(e){return new Xt(e)}toFormData(e,t=false,n=false){const o=new FormData;return Object.keys(e).forEach(a=>{let i=e[a];n&&(i=JSON.stringify(i)),typeof i=="number"&&(i=i.toString()),t&&typeof i=="string"&&(i=encodeURIComponent(i)),i instanceof File?o.append(a,i,i.name):o.append(a,i);}),o}toUrl(e){if(typeof e!="string")throw new TypeError("toUrl: text must be string");if(e=e.trim(),e==="")throw new TypeError("toUrl: text must not be empty");return e.startsWith("//")?e=this.windowApi.globalThis.location.protocol+e:e.startsWith("/")&&(e=this.windowApi.globalThis.location.origin+e),new URL(e)}coverObjectFunctionThis=ae.coverObjectFunctionThis.bind(ae);generateUUID=Ft;Vue=va;ModuleRaid=Da;workerSetTimeout(e,t=0){try{return Pa(e,t)}catch{return this.windowApi.setTimeout(e,t)}}workerClearTimeout(e){try{e!=null&&Oa(e);}catch{}finally{this.windowApi.clearTimeout(e);}}workerSetInterval(e,t=0){try{return Na(e,t)}catch{return this.windowApi.setInterval(e,t)}}workerClearInterval(e){try{e!=null&&Ra(e);}catch{}finally{this.windowApi.clearInterval(e);}}async getClipboardInfo(){return new Promise(e=>{function t(){navigator.clipboard.readText().then(a=>{e({error:null,content:a});}).catch(a=>{e({error:a,content:""});});}function n(){navigator.permissions.query({name:"clipboard-read"}).then(a=>{t();}).catch(a=>{t();});}function o(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}if(!o()){e({error:new Error("当前环境不支持读取剪贴板Api"),content:""});return}document.hasFocus()?n():window.addEventListener("focus",()=>{n();},{once:true});})}}let Fe=new Xt;const ye={config:{},setGlobalConfig(r){Reflect.ownKeys(r).forEach(e=>{Reflect.set(ye.config,e,Reflect.get(r,e));});},getGlobalConfig(){let r={};return Object.keys(ye.config).forEach(e=>{let t=Reflect.get(ye.config,e);if(e==="style"){let n=t==null?"":typeof t=="function"?t():t;typeof n=="string"&&(r.style=n);}else if(e==="zIndex"){let n=t==null?"":typeof t=="function"?t():t;if(typeof n=="string"){let o=n=Number(n);isNaN(o)||(r.zIndex=o);}else isNaN(n)||(r.zIndex=n);}else if(e==="mask"){let n=ye.config.mask==null?{}:ye.config.mask;typeof n=="object"&&n!=null&&(r.mask=n);}else Reflect.set(r,e,t);}),r}};var Ha=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,Ua=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,Va=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,za=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-type="close">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,Fa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
	<path\r
		fill="currentColor"\r
		d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,Ga=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,ja=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,qa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,Wa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,Ka=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,Xa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Qa=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Ya=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,Ja=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
		fill="currentColor"></path>\r
</svg>\r
`,Za=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" xml:space="preserve" data-type="chromeFilled">\r
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
`,er=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,tr=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,nr=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,or=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,ar=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,rr=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,ir=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,sr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="circleClose">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,lr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,cr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,fr=`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
	<path\r
		d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
	<path\r
		d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,dr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowRight">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,pr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-type="arrowLeft">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`;const ur={min:Ha,mise:Ua,max:Va,close:za,edit:Fa,share:Ga,delete:ja,search:qa,upload:Wa,loading:Ka,next:Xa,prev:Qa,eleme:Ya,elemePlus:Ja,chromeFilled:Za,cpu:er,videoPlay:tr,videoPause:nr,headset:or,monitor:ar,documentCopy:rr,picture:ir,circleClose:sr,view:lr,hide:cr,keyboard:fr,arrowRight:dr,arrowLeft:pr},se={$data:ur,hasIcon(r){return Object.keys(se.$data).includes(r)},getIcon(r){return se.$data[r]},deleteIcon(r){return Reflect.deleteProperty(se.$data,r)},setIcon(r,e){Reflect.set(se.$data,r,e);}},lt=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),Xn={document,window,globalThis,self,setTimeout:globalThis.setTimeout.bind(globalThis),setInterval:globalThis.setInterval.bind(globalThis),clearTimeout:globalThis.clearTimeout.bind(globalThis),clearInterval:globalThis.clearInterval.bind(globalThis)},Ne=Object.assign({},Xn),K={init(r){r||(r=Object.assign({},Xn)),Object.assign(Ne,r);},get document(){return Ne.document},get window(){return Ne.window},get globalThis(){return Ne.globalThis},get self(){return Ne.self},get setTimeout(){return Ne.setTimeout},get setInterval(){return Ne.setInterval},get clearTimeout(){return Ne.clearTimeout},get clearInterval(){return Ne.clearInterval}},Qn={Object:{defineProperty:Object.defineProperty}},br=r=>(e,t)=>(r.set(e,t),t),Cn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Yn=536870912,Sn=Yn*2,hr=(r,e)=>t=>{const n=e.get(t);let o=n===void 0?t.size:n<Sn?n+1:0;if(!t.has(o))return r(t,o);if(t.size<Yn){for(;t.has(o);)o=Math.floor(Math.random()*Sn);return r(t,o)}if(t.size>Cn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*Cn);return r(t,o)},Jn=new WeakMap,mr=br(Jn),jt=hr(mr,Jn),gr=r=>typeof r.start=="function",En=new WeakMap,yr=r=>({...r,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,o=await e("connect",{port:t},[t]);return En.set(n,o),n},disconnect:({call:e})=>async t=>{const n=En.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n});},isSupported:({call:e})=>()=>e("isSupported")}),Dt=new WeakMap,xr=r=>{if(Dt.has(r))return Dt.get(r);const e=new Map;return Dt.set(r,e),e},wr=r=>{const e=yr(r);return t=>{const n=xr(t);t.addEventListener("message",(({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:f}=n.get(l);n.delete(l),s.error===void 0?f(s.result):c(new Error(s.error.message));}})),gr(t)&&t.start();const o=(s,l=null,c=[])=>new Promise((f,d)=>{const u=jt(n);n.set(u,{reject:d,resolve:f}),l===null?t.postMessage({id:u,method:s},c):t.postMessage({id:u,method:s,params:l},c);}),a=(s,l,c=[])=>{t.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(e))i={...i,[s]:l({call:o,notify:a})};return {...i}}},Qe=new Map([[0,null]]),Ye=new Map([[0,null]]),vr=wr({clearInterval:({call:r})=>e=>{typeof Qe.get(e)=="symbol"&&(Qe.set(e,null),r("clear",{timerId:e,timerType:"interval"}).then(()=>{Qe.delete(e);}));},clearTimeout:({call:r})=>e=>{typeof Ye.get(e)=="symbol"&&(Ye.set(e,null),r("clear",{timerId:e,timerType:"timeout"}).then(()=>{Ye.delete(e);}));},setInterval:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=jt(Qe);Qe.set(a,o);const i=()=>r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=Qe.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===o&&(e(...n),Qe.get(a)===o&&i());});return i(),a},setTimeout:({call:r})=>(e,t=0,...n)=>{const o=Symbol(),a=jt(Ye);return Ye.set(a,o),r("set",{delay:t,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=Ye.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===o&&(Ye.delete(a),e(...n));}),a}}),Ar=r=>{const e=new Worker(r);return vr(e)},Tr=(r,e)=>{let t=null;return ()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(n);return t=r(o),setTimeout(()=>URL.revokeObjectURL(o)),t}},Cr=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`,kt=Tr(Ar,Cr),Sr=r=>kt().clearInterval(r),Er=r=>kt().clearTimeout(r),kr=(...r)=>kt().setInterval(...r),Mr=(...r)=>kt().setTimeout(...r);let $r=class{constructor(){this.__map={};}beforeEach(e){this.__interceptor=e;}on(e,t){const n=Array.isArray(e)?e:[e];for(const o of n){this.__map[o]=this.__map[o]||[];const a=this.__map[o];a&&a.push(t);}return this}emit(e,t,n){this.__interceptor!==void 0?this.__interceptor(e,(()=>{this.__emit(e,t),n&&n();})):(this.__emit(e,t),n&&n());}__emit(e,t){const n=this.__map[e];if(Array.isArray(n)&&n?.length)for(const o of n)o(t,e);this.event=t;}off(e,t){const n=this.__map[e];if(n!==void 0)if(t===void 0)delete this.__map[e];else {const o=n.findIndex((a=>a===t));n.splice(o,1);}}destroy(){this.__map={};}};const pt="clientX",ut="clientY",Lr=16,Mt="start",Ir="move",Qt="cancel",at="end",_r="left",Rr="right",Zn="up",Or="down",Nr={4:"start",5:"move",1:"end",3:"cancel"};function Yt(r){return Nr[r]}function Jt(r,e,t){const n={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(r)][e];return n!==void 0&&n[t]||0}function $t(r){[1,3,2].includes(r.state)&&(r.state=0);}function Zt(r){return [5,1,3].includes(r)}function ht(r){if(r.disabled)return r.state=0,true}function rt(r,e){return Object.assign(Object.assign(Object.assign({},r),e),{state:0,disabled:false})}function kn(r){return Math.round(100*r)/100}function Mn(){let r,e,t,n,o=0;return function(a){if(r=e,a!==void 0){o=Number.MAX_SAFE_INTEGER>o?++o:1;const i=(function(c,f){const{phase:d,points:u,changedPoints:h,nativeEvent:g}=c,m=u.length,x=Mt===d,w=at===d&&m===0||Qt===d,v=Date.now(),{x:C,y:S}=$n(u)||$n(h),{currentTarget:E}=g;return Object.assign(c,{id:f,x:C,y:S,timestamp:v,isStart:x,isEnd:w,pointLength:m,currentTarget:E,getOffset(L=E){const z=L.getBoundingClientRect();return {x:C-Math.round(z.left),y:S-Math.round(z.top)}}})})(a,o);e=i;const{isStart:s,pointLength:l}=i;return s&&(t=i,r=void 0,n=1<l?i:void 0),Object.assign(Object.assign({},i),{prevInput:r,startMultiInput:n,startInput:t})}}}function $n(r){const{length:e}=r;if(0<e){if(e===1){const{clientX:n,clientY:o}=r[0];return {x:Math.round(n),y:Math.round(o)}}const t=r.reduce(((n,o)=>(n.x+=o[pt],n.y+=o[ut],n)),{x:0,y:0});return {x:Math.round(t.x/e),y:Math.round(t.y/e)}}}function Ln(r,e,t,n){const o={};for(const i in t)["target","currentTarget","type"].includes(i)||(o[i]=t[i]);let a;return document.createEvent?(a=document.createEvent("HTMLEvents"),a.initEvent(r,n?.bubbles,n?.cancelable)):a=new Event(r,n),Object.assign(a,o,{match:()=>t.targets&&0<t.targets.length&&t.targets.every((i=>a.currentTarget.contains(i)))}),e.dispatchEvent(a)}function Pr(r,e){const{preventDefault:t}=e;return n=t,Object.prototype.toString.call(n)==="[object Function]"?t(r):!!t;var n;}const In=["touchstart","touchmove","touchend","touchcancel","mousedown"],_n=["mousemove","mouseup"],Dr={domEvents:{bubbles:true,cancelable:true},preventDefault:r=>{if(r.target&&"tagName"in r.target){const{tagName:e}=r.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e)}return  false}};let Br=class extends $r{constructor(e,t){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=e,this.c={},this.__options=Object.assign(Object.assign({},Dr),t);const n=(function(a){const i=Mn();return function(s){const l=[],c=[];Array.from(s.touches).forEach((({clientX:d,clientY:u,target:h})=>{a?.contains(h)&&(l.push(h),c.push({clientX:d,clientY:u,target:h}));}));const f=Array.from(s.changedTouches).map((({clientX:d,clientY:u,target:h})=>({clientX:d,clientY:u,target:h})));return i({phase:s.type.replace("touch",""),changedPoints:f,points:c,nativeEvent:s,target:s.target,targets:l})}})(this.el),o=(function(){let a,i=false,s=null;const l=Mn();return function(c){const{clientX:f,clientY:d,type:u,button:h,target:g}=c;let m,x=[{clientX:f,clientY:d,target:g}];if(u==="mousedown"&&h===0)s=g,i=true,m="start";else {if(!i)return;u==="mousemove"?m="move":u==="mouseup"&&(x=[],m="end",i=false);}const w=a||[{clientX:f,clientY:d,target:g}];if(a=[{clientX:f,clientY:d,target:g}],m!==void 0)return l({phase:m,changedPoints:w,points:x,target:s,targets:[s],nativeEvent:c})}})();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:o,mousemove:o,mouseup:o},this.on("at:after",(a=>{const{target:i,__type:s}=a,{domEvents:l}=this.__options;l&&this.el!==void 0&&i&&(Ln(s,i,a,l),Ln("at:after",i,a,l));})),e!==void 0){e.style.webkitTapHighlightColor="rgba(0,0,0,0)";let a=false;try{const i={};Object.defineProperty(i,"passive",{get(){a=!0;}}),window.addEventListener("_",(()=>{}),i);}catch{}this.on("u",(function(i,s,l){return In.forEach((c=>{i.addEventListener(c,s,l);})),_n.forEach((c=>{window.addEventListener(c,s,l);})),()=>{In.forEach((c=>{i.removeEventListener(c,s);})),_n.forEach((c=>{window.removeEventListener(c,s);}));}})(e,this.catchEvent.bind(this),this.__options.preventDefault===false&&a?{passive:true}:{passive:false}));}}use(e,t){this.__pluginContexts.push(e(this,t));}catchEvent(e){const t=this.__inputCreatorMap[e.type](e);if(t!==void 0){const n=()=>e.stopPropagation(),o=()=>e.stopImmediatePropagation(),a=()=>e.preventDefault();if(Pr(e,this.__options))a();else if(e.type==="touchstart"?this.__isIgnoreMouse=true:e.type==="touchmove"&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&e.type.startsWith("mouse"))return void(e.type==="mouseup"&&(this.__isIgnoreMouse=false));this.emit("input",t),this.emit2(`at:${t.phase}`,t,{});const i={};this.__computeFunctionList.forEach((s=>{const l=s(t,i);if(l!==void 0)for(const c in l)i[c]=l[c];})),this.emit("computed",Object.assign(Object.assign(Object.assign({},t),i),{stopPropagation:n,stopImmediatePropagation:o,preventDefault:a}));}}compute(e,t){for(const n of e)this.__computeFunctionCreatorList.includes(n)||(this.__computeFunctionCreatorList.push(n),this.__computeFunctionList.push(n()));this.on("computed",t);}beforeEach(e){super.beforeEach(((t,n)=>{var o;!((o=this.c)===null||o===void 0)&&o.name?e(t,n):n();}));}get(e){return this.__pluginContexts.find((t=>e===t.name))}set(e){this.__options=Object.assign(Object.assign({},this.__options),e);}emit2(e,t,n){this.c=n,this.emit(e,Object.assign(Object.assign({},t),{type:e}),(()=>{this.emit("at:after",Object.assign(Object.assign({},t),{name:e,__type:e}));}));}destroy(){this.emit("u"),super.destroy();}};var Ve=r=>Math.sqrt(r.x*r.x+r.y*r.y),Hr=(r,e)=>r.x*e.x+r.y*e.y,Ur=(r,e)=>{var t=Ve(r)*Ve(e);if(t===0)return 0;var n=Hr(r,e)/t;return n>1&&(n=1),Math.acos(n)},Vr=(r,e)=>r.x*e.y-e.x*r.y,eo=r=>r/Math.PI*180,Rn=(r,e)=>{var t=Ur(r,e);return Vr(r,e)>0&&(t*=-1),eo(t)},to=(r,e)=>{if(r!==0||e!==0)return Math.abs(r)>=Math.abs(e)?0<r?Rr:_r:0<e?Or:Zn};function zr(){let r=0,e=0;return function(t,n){const{prevVecotr:o,startVecotr:a,activeVecotr:i}=n;return i&&(e=Math.round(Rn(i,o)),r=Math.round(Rn(i,a))),{angle:r,deltaAngle:e}}}function Fr(){return function(r){const{prevInput:e}=r;let t=0,n=0,o=0;if(e!==void 0&&(t=r.x-e.x,n=r.y-e.y,t!==0||n!==0)){const a=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));o=Math.round(eo(Math.acos(Math.abs(t)/a)));}return {deltaX:t,deltaY:n,deltaXYAngle:o}}}function Lt(){let r,e=0,t=0,n=0,o=0,a=0;return function(i){const{phase:s,startInput:l}=i;return Mt===s?(e=0,t=0,n=0,o=0,a=0):Ir===s&&(e=Math.round(i.points[0][pt]-l.points[0][pt]),t=Math.round(i.points[0][ut]-l.points[0][ut]),n=Math.abs(e),o=Math.abs(t),a=Math.round(Ve({x:n,y:o})),r=to(e,t)),{displacementX:e,displacementY:t,distanceX:n,distanceY:o,distance:a,overallDirection:r}}}function Gr(){let r=1;return function(e,t){let n=1;const{prevVecotr:o,startVecotr:a,activeVecotr:i}=t;return i&&(n=kn(Ve(i)/Ve(o)),r=kn(Ve(i)/Ve(a))),{scale:r,deltaScale:n}}}function no(){let r,e,t=0,n=0,o=0,a=0;return function(i){if(i!==void 0){e=e||i.startInput;const s=i.timestamp-e.timestamp;if(Lr<s){const l=i.x-e.x,c=i.y-e.y;o=Math.round(l/s*100)/100,a=Math.round(c/s*100)/100,t=Math.abs(o),n=Math.abs(a),r=to(l,c),e=i;}}return {velocityX:t,velocityY:n,speedX:o,speedY:a,direction:r}}}function oo(){let r=0;return function(e){const{phase:t}=e;return Mt===t&&(r=e.pointLength),{maxPointLength:r}}}function Bt(r){return {x:r.points[1][pt]-r.points[0][pt],y:r.points[1][ut]-r.points[0][ut]}}function ao(){let r,e,t;return function(n){const{prevInput:o,startMultiInput:a}=n;return a!==void 0&&o!==void 0&&n.id!==a.id&&1<o.pointLength&&1<n.pointLength?(r=Bt(a),e=Bt(o),t=Bt(n)):t=void 0,{startVecotr:r,prevVecotr:e,activeVecotr:t}}}const jr={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function en(r,e){const t=rt(jr,e);let n,o,a,i=0;function s(){i=0,n=void 0,o=void 0;}return r.compute([Lt,oo],(l=>{if(ht(t))return;const{phase:c,x:f,y:d}=l;at===c&&(t.state=0,(function(){const{startInput:u,pointLength:h,timestamp:g}=l,m=g-u.timestamp,{distance:x,maxPointLength:w}=l;return w===t.pointLength&&h===0&&t.maxDistance>=x&&t.maxPressTime>m})()?(clearTimeout(a),(function(u,h){if(n!==void 0){const g=Ve({x:u.x-n.x,y:u.y-n.y});return n=u,h.maxDistanceFromPrevTap>=g}return n=u,true})({x:f,y:d},t)&&(function(u){const h=performance.now();if(o===void 0)return o=h,true;{const g=h-o;return o=h,g<u}})(t.waitNextTapTime)?i++:i=1,i%t.tapTimes==0?(t.state=1,r.emit2(t.name,l,t),s()):a=setTimeout((()=>{t.state=2,s();}),t.waitNextTapTime)):(s(),t.state=2));})),t}const qr={name:"pan",threshold:10,pointLength:1};function ro(r,e){const t=rt(qr,e);return r.compute([no,Lt,Fr],(n=>{if($t(t),ht(t))return;const o=(function(){const{pointLength:a,distance:i}=n;return t.pointLength===a&&t.threshold<=i})();if(t.state=Jt(o,t.state,n.phase),o||Zt(t.state)){const{name:a}=t;r.emit2(a,n,t),r.emit2(a+Yt(t.state),n,t),![at,Qt].includes(n.phase)&&n.direction&&r.emit2(a+n.direction,n,t);}})),t}const Wr={name:"swipe",threshold:10,velocity:.3,pointLength:1};function io(r,e){const t=rt(Wr,e);return r.compute([Lt,no,oo],(n=>{if(t.state=0,!t.disabled&&(function(){if(at!==n.phase)return  false;const{velocityX:o,velocityY:a,distance:i,maxPointLength:s}=n;return s===t.pointLength&&n.points.length===0&&t.threshold<i&&t.velocity<Math.max(o,a)})()){const{name:o}=t;t.state=1,r.emit2(o,n,t),r.emit2(o+n.direction,n,t);}})),t}const Kr={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function so(r,e){const t=rt(Kr,e);let n=0;return r.compute([Lt],(o=>{if(ht(t))return;const{phase:a,startInput:i,pointLength:s}=o;if(Mt===a&&t.pointLength===s)$t(t),clearTimeout(n),n=setTimeout((()=>{t.state=1,r.emit2(t.name,o,t);}),t.minPressTime);else if(at===a&&t.state===1)r.emit2(`${t.name}${Zn}`,o,t);else if(t.state!==1){const l=o.timestamp-i.timestamp;(!(function(){const{distance:c}=o;return c&&t.maxDistance>c})()||t.minPressTime>l&&[at,Qt].includes(a))&&(clearTimeout(n),t.state=2);}})),t}const Xr={name:"pinch",threshold:0,pointLength:2};function lo(r,e){const t=rt(Xr,e);return r.compute([ao,Gr],(n=>{if($t(t),ht(t))return;const o=(function(){const{pointLength:s,scale:l,deltaScale:c,phase:f}=n;return t.pointLength===s&&t.threshold<Math.abs(l-1)})();t.state=Jt(o,t.state,n.phase);const{name:a}=t;if(o||Zt(t.state)){r.emit2(a,n,t);const{deltaScale:s}=n;s!==1&&r.emit2(a+(1<s?"in":"out"),n,t);}const i=Yt(t.state);i&&r.emit2(a+i,n,t);})),t}const Qr={name:"rotate",threshold:0,pointLength:2};function co(r,e){const t=rt(Qr,e);return r.compute([ao,zr],(n=>{if(ht(t))return;$t(t);const o=(function(){const{pointLength:s,angle:l}=n;return t.pointLength===s&&t.threshold<Math.abs(l)})();t.state=Jt(o,t.state,n.phase);const{name:a}=t;(o||Zt(t.state))&&r.emit2(a,n,t);const i=Yt(t.state);i&&r.emit2(a+i,n,t);})),t}function Yr(r){r.use(en,{name:"doubletap",tapTimes:2});const e=r.get("doubletap");let t;return r.beforeEach(((n,o)=>{n==="tap"?(clearTimeout(t),t=setTimeout((()=>{[0,2].includes(e.state)&&o();}),300)):o();})),e}class Ae extends Br{constructor(e,t){super(e,t),this.use(en),this.use(ro),this.use(io),this.use(so),this.use(lo),this.use(co);}}Ae.STATE_POSSIBLE=0,Ae.STATE_START=4,Ae.STATE_MOVE=5,Ae.STATE_END=1,Ae.STATE_CANCELLED=3,Ae.STATE_FAILED=2,Ae.STATE_RECOGNIZED=1,Ae.tap=en,Ae.pan=ro,Ae.swipe=io,Ae.press=so,Ae.rotate=co,Ae.pinch=lo,Ae.doubletap=Yr;class Jr{isWin(e){return typeof e!="object"||e instanceof Node?false:e===globalThis||e===window||e===self||e===K.globalThis||e===K.window||e===K.self||typeof unsafeWindow<"u"&&e===unsafeWindow?true:e?.Math?.toString()==="[object Math]"}isDOM(e){return e instanceof Node}delete(e,t){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(e,t):delete e[t];}assign(e={},t={},n=false){let o=this;if(t==null)return e;if(e==null&&(e={}),Array.isArray(t)&&!t.filter(i=>typeof i=="object").length)return t;if(n)for(const a in t){let s=e[a],l=t[a];if(typeof l=="object"&&l!=null&&a in e&&!o.isDOM(l)){e[a]=o.assign(s,l,n);continue}e[a]=l;}else for(const a in e)if(a in t){let i=e[a],s=t[a];if(typeof s=="object"&&s!=null&&!o.isDOM(s)&&Object.keys(s).length){e[a]=o.assign(i,s,n);continue}e[a]=s;}return e}getRandomGUID(){return typeof K.globalThis?.crypto?.randomUUID=="function"?K.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e==="x"?t:t&3|8;return n.toString(16)})}contains(e,t){if(arguments.length===1)return this.contains(K.document.body||K.document.documentElement,arguments[0]);if(t==null)return  false;if(typeof t[Symbol.iterator]=="function"){let n=true;for(const o of t)if(!e.contains(o)){n=false;break}return n}else return e.contains(t)}formatTime(e=new Date,t="yyyy-MM-dd HH:mm:ss"){let n=e==null?new Date:new Date(e);function o(s){return s<10?"0"+s:s}function a(s){return s>12?s-12:s}let i={yyyy:n.getFullYear(),MM:o(n.getMonth()+1),dd:o(n.getDate()),HH:o(n.getHours()),hh:o(a(n.getHours())),mm:o(n.getMinutes()),ss:o(n.getSeconds())};return Object.keys(i).forEach(function(s){let l=new RegExp(s,"g");t=t.replace(l,i[s]);}),t}formatByteToSize(e,t=true){if(e=parseInt(e.toString()),isNaN(e))throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,o="KB",a={};a.B=1,a.KB=1024,a.MB=a.KB*a.KB,a.GB=a.MB*a.KB,a.TB=a.GB*a.KB,a.PB=a.TB*a.KB,a.EB=a.PB*a.KB,a.ZB=a.EB*a.KB,a.YB=a.ZB*a.KB,a.BB=a.YB*a.KB,a.NB=a.BB*a.KB,a.DB=a.NB*a.KB;for(let i in a)if(n=e/a[i],o=i,a.KB>=n)break;return n=n.toFixed(2),n=t?n+o.toString():parseFloat(n.toString()),n}AnyTouch=()=>Ae;isPhone(e=K.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(e)}setTimeout(e,t=0){try{return Mr(e,t)}catch{return K.setTimeout(e,t)}}clearTimeout(e){try{e!=null&&Er(e);}catch{}finally{K.clearTimeout(e);}}setInterval(e,t=0){try{return kr(e,t)}catch{return K.setInterval(e,t)}}clearInterval(e){try{e!=null&&Sr(e);}catch{}finally{K.clearInterval(e);}}}const V=new Jr,ne={getSafeHTML(r){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:t=>t}).createHTML(r):r},setSafeHTML(r,e){r.innerHTML=this.getSafeHTML(e);}},ue={flexCenter:"pops-flex-items-center",flexYCenter:"pops-flex-y-center",hide:"pops-hide",hideImportant:"pops-hide-important",userSelectNone:"pops-user-select-none",textIsDisabled:"pops-text-is-disabled"};class Zr{on(e,t,n,o,a){function i(m,x,w){let v=m[x];return typeof v=="boolean"?(w.capture=v,typeof m[x+1]=="boolean"&&(w.once=m[x+1]),typeof m[x+2]=="boolean"&&(w.passive=m[x+2])):typeof v=="object"&&("capture"in v||"once"in v||"passive"in v||"isComposedPath"in v)&&(w.capture=v.capture,w.once=v.once,w.passive=v.passive,w.isComposedPath=v.isComposedPath),w}let s=this,l=arguments;if(typeof e=="string"&&(e=s.selectorAll(e)),e==null)return;let c=[];e instanceof NodeList||Array.isArray(e)?(e=e,c=[...e]):c.push(e);let f=[];Array.isArray(t)?f=f.concat(t.filter(m=>typeof m=="string"&&m.toString()!=="")):typeof t=="string"&&(f=f.concat(t.split(" ").filter(m=>m!=="")));let d=[];Array.isArray(n)?d=d.concat(n.filter(m=>typeof m=="string"&&m.toString()!=="")):typeof n=="string"&&d.push(n);let u=o,h={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(u=n,h=i(l,3,h)):h=i(l,4,h);function g(){h.once&&s.off(e,t,n,o,a);}c.forEach(m=>{function x(w){if(d.length){let v=h.isComposedPath?w.composedPath()[0]:w.target,C=m;if(V.isWin(C)&&C===K.document&&(C=K.document.documentElement),d.find(E=>{if(s.matches(v,E))return  true;let L=s.closest(v,E);return L&&C?.contains(L)?(v=L,true):false})){try{Qn.Object.defineProperty(w,"target",{get(){return v}});}catch{}u.call(v,w,v),g();}}else u.call(m,w),g();}f.forEach(w=>{m.addEventListener(w,x,h);let v=Reflect.get(m,lt)||{};v[w]=v[w]||[],v[w].push({selector:d,option:h,callback:x,originCallBack:u}),Reflect.set(m,lt,v);});});}off(e,t,n,o,a,i){function s(x,w,v){let C=x[w];return typeof C=="boolean"?v.capture=C:typeof C=="object"&&"capture"in C&&(v.capture=C.capture),v}let l=this,c=arguments;if(typeof e=="string"&&(e=l.selectorAll(e)),e==null)return;let f=[];e instanceof NodeList||Array.isArray(e)?(e=e,f=[...e]):f.push(e);let d=[];Array.isArray(t)?d=d.concat(t.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof t=="string"&&(d=d.concat(t.split(" ").filter(x=>x!=="")));let u=[];Array.isArray(n)?u=u.concat(n.filter(x=>typeof x=="string"&&x.toString()!=="")):typeof n=="string"&&u.push(n);let h=o,g={capture:false};typeof n=="function"?(h=n,g=s(c,3,g)):g=s(c,4,g);let m=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(m=true),f.forEach(x=>{let w=Reflect.get(x,lt)||{};d.forEach(v=>{let C=w[v]||[];typeof i=="function"&&(C=C.filter(i));for(let S=0;S<C.length;S++){let E=C[S],L=true;L&&h&&E.originCallBack!==h&&(L=false),L&&u.length&&Array.isArray(E.selector)&&JSON.stringify(E.selector)!==JSON.stringify(u)&&(L=false),L&&g.capture!==E.option.capture&&(L=false),(L||m)&&(x.removeEventListener(v,E.callback,E.option),C.splice(S--,1));}C.length===0&&V.delete(w,t);}),Reflect.set(x,lt,w);});}offAll(e,t){if(typeof e=="string"&&(e=K.document.querySelectorAll(e)),e==null)return;let n=[];e instanceof NodeList||Array.isArray(e)?n=[...e]:n.push(e);let o=[];Array.isArray(t)?o=o.concat(t):typeof t=="string"&&(o=o.concat(t.split(" "))),n.forEach(a=>{Object.getOwnPropertySymbols(a).forEach(i=>{if(!i.toString().startsWith("Symbol(events_"))return;let s=a[i]||{};(o.length?o:Object.keys(s)).forEach(c=>{let f=s[c];if(f){for(const d of f)a.removeEventListener(c,d.callback,{capture:d.option.capture});V.delete(a[i],c);}});});});}ready(e){const t=this;if(typeof e!="function")return;function n(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return  false}}function o(){s(),e();}let a=[{target:K.document,eventType:"DOMContentLoaded",callback:o},{target:K.window,eventType:"load",callback:o}];function i(){for(let l=0;l<a.length;l++){let c=a[l];t.on(c.target,c.eventType,c.callback);}}function s(){for(let l=0;l<a.length;l++){let c=a[l];t.off(c.target,c.eventType,c.callback);}}n()?V.setTimeout(e,0):i();}trigger(e,t,n,o=true){if(typeof e=="string"&&(e=K.document.querySelector(e)),e==null)return;let a=[];e instanceof NodeList||Array.isArray(e)?(e=e,a=[...e]):a=[e];let i=[];Array.isArray(t)?i=t:typeof t=="string"&&(i=t.split(" ")),a.forEach(s=>{let l=s[lt]||{};i.forEach(c=>{let f=null;n&&n instanceof Event?f=n:(f=new Event(c),n&&Object.keys(n).forEach(d=>{f[d]=n[d];})),o==false&&c in l?l[c].forEach(d=>{d.callback(f);}):s.dispatchEvent(f);});});}click(e,t,n,o){let a=this;typeof e=="string"&&(e=K.document.querySelector(e)),e!=null&&(t==null?a.trigger(e,"click",n,o):a.on(e,"click",null,t));}blur(e,t,n,o){let a=this;typeof e=="string"&&(e=K.document.querySelector(e)),e!=null&&(t===null?a.trigger(e,"blur",n,o):a.on(e,"blur",null,t));}focus(e,t,n,o){let a=this;typeof e=="string"&&(e=K.document.querySelector(e)),e!=null&&(t==null?a.trigger(e,"focus",n,o):a.on(e,"focus",null,t));}hover(e,t,n){let o=this;typeof e=="string"&&(e=K.document.querySelector(e)),e!=null&&(o.on(e,"mouseenter",null,t,n),o.on(e,"mouseleave",null,t,n));}keyup(e,t,n){let o=this;e!=null&&(typeof e=="string"&&(e=K.document.querySelector(e)),o.on(e,"keyup",null,t,n));}keydown(e,t,n){let o=this;e!=null&&(typeof e=="string"&&(e=K.document.querySelector(e)),o.on(e,"keydown",null,t,n));}keypress(e,t,n){let o=this;e!=null&&(typeof e=="string"&&(e=K.document.querySelector(e)),o.on(e,"keypress",null,t,n));}preventEvent(e,t=[],n){function o(a){return a?.preventDefault(),a?.stopPropagation(),a?.stopImmediatePropagation(),false}if(arguments.length===1)return o(arguments[0]);typeof t=="string"&&(t=[t]),t.forEach(a=>{this.on(e,a,o,{capture:!!n});});}selector(e){return this.selectorAll(e)[0]}selectorAll(e){if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),Array.from(K.document.querySelectorAll(e)).filter(t=>t?.innerHTML?.trim()==="");if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];return e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(K.document.querySelectorAll(e)).filter(o=>(o?.textContent||o?.innerText)?.includes(n))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],o=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),a="";o&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),a=o[3]);let i=new RegExp(n,a);return e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(K.document.querySelectorAll(e)).filter(s=>!!(s?.textContent||s?.innerText)?.match(i))}else return Array.from(K.document.querySelectorAll(e))}matches(e,t){if(t=t.trim(),e==null)return  false;if(t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),e.matches(t)&&e?.innerHTML?.trim()==="";if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let a=e?.textContent||e?.innerText;return typeof a!="string"&&(a=""),e.matches(t)&&a?.includes(o)}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],a=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";a&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=a[3]);let s=new RegExp(o,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.textContent||e?.innerText;return typeof l!="string"&&(l=""),e.matches(t)&&!!l?.match(s)}else return e.matches(t)}closest(e,t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi)){t=t.replace(/:empty$/gi,"");let n=e?.closest(t);return n&&n?.innerHTML?.trim()===""?n:null}else if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let o=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let a=e?.closest(t);if(a){let i=e?.textContent||e?.innerText;if(typeof i=="string"&&i.includes(o))return a}return null}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let o=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],a=o.match(/("|'),[\s]*("|')([igm]{0,3})$/i),i="";a&&(o=o.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),i=a[3]);let s=new RegExp(o,i);t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let l=e?.closest(t);if(l){let c=e?.textContent||e?.innerText;if(typeof c=="string"&&c.match(s))return l}return null}else return e?.closest(t)}}class ei extends Zr{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(e,t=true){let n=e.getBoundingClientRect(),o=e.ownerDocument.defaultView;return new DOMRect(t?parseFloat((n.left+(o?.pageXOffset||0)).toString()):n.left,t?parseFloat((n.top+(o?.pageYOffset||0)).toString()):n.top,n.width,n.height)}width(e,t=false,n){let o=this;if(typeof e=="string"&&(e=K.document.querySelector(e)),e!=null){if(V.isWin(e))return K.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(t||!t&&p.isShow(e)){if(e=e,parseFloat(p.getStyleValue(e,"width").toString())>0)return parseFloat(p.getStyleValue(e,"width").toString());if(e.offsetWidth>0){let a=p.getStyleValue(e,"borderLeftWidth"),i=p.getStyleValue(e,"borderRightWidth"),s=p.getStyleValue(e,"paddingLeft"),l=p.getStyleValue(e,"paddingRight"),c=parseFloat(e.offsetWidth.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;let{cloneNode:a,recovery:i}=p.showElement(e,n),s=o.width(a,true,n);return i(),s}}}height(e,t=false,n){let o=this;if(V.isWin(e))return K.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=K.document.querySelector(e)),e!=null){if(e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(t||!t&&p.isShow(e)){if(e=e,parseFloat(p.getStyleValue(e,"height").toString())>0)return parseFloat(p.getStyleValue(e,"height").toString());if(e.offsetHeight>0){let a=p.getStyleValue(e,"borderTopWidth"),i=p.getStyleValue(e,"borderBottomWidth"),s=p.getStyleValue(e,"paddingTop"),l=p.getStyleValue(e,"paddingBottom"),c=parseFloat(e.offsetHeight.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;let{cloneNode:a,recovery:i}=p.showElement(e,n),s=o.height(a,true,n);return i(),s}}}outerWidth(e,t=false,n){let o=this;if(V.isWin(e))return K.window.innerWidth;if(typeof e=="string"&&(e=K.document.querySelector(e)),e!=null)if(e=e,t||!t&&p.isShow(e)){let a=getComputedStyle(e,null),i=p.getStyleValue(a,"marginLeft"),s=p.getStyleValue(a,"marginRight");return e.offsetWidth+i+s}else {let{cloneNode:a,recovery:i}=p.showElement(e,n),s=o.outerWidth(a,true,n);return i(),s}}outerHeight(e,t=false,n){let o=this;if(V.isWin(e))return K.window.innerHeight;if(typeof e=="string"&&(e=K.document.querySelector(e)),e!=null)if(e=e,t||!t&&p.isShow(e)){let a=getComputedStyle(e,null),i=p.getStyleValue(a,"marginTop"),s=p.getStyleValue(a,"marginBottom");return e.offsetHeight+i+s}else {let{cloneNode:a,recovery:i}=p.showElement(e,n),s=o.outerHeight(a,true,n);return i(),s}}addClassName(e,t){if(e==null||typeof t!="string"||t.trim()==="")return;const n=t.split(" ").filter(o=>o.trim()!=="");e.classList.add(...n);}removeClassName(e,t){if(e==null||typeof t!="string"||t.trim()==="")return;const n=t.split(" ").filter(o=>o.trim()!=="");e.classList.remove(...n);}containsClassName(e,t){return e==null||typeof t!="string"||t.trim()===""?false:e.classList.contains(t)}css(e,t,n){function o(i,s){let l=["width","height","top","left","right","bottom","font-size"];return typeof s=="number"&&(s=s.toString()),typeof s=="string"&&l.includes(i)&&s.match(/[0-9]$/gi)&&(s=s+"px"),s}if(typeof e=="string"&&(e=K.document.querySelector(e)),e==null)return;let a=(i,s)=>{typeof s=="string"&&s.trim().endsWith("!important")?(s=s.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(i,s,"important")):(s=o(i,s),e.style.setProperty(i,s));};if(typeof t=="string"){if(n==null)return getComputedStyle(e).getPropertyValue(t);a(t,n);}else if(typeof t=="object")for(let i in t){let s=t[i];a(i,s);}}createElement(e,t,n){let o=K.document.createElement(e);return typeof t=="string"?(ne.setSafeHTML(o,t),o):(t==null&&(t={}),n==null&&(n={}),Object.keys(t).forEach(a=>{let i=t[a];if(a==="innerHTML"){ne.setSafeHTML(o,i);return}o[a]=i;}),Object.keys(n).forEach(a=>{let i=n[a];typeof i=="object"?i=JSON.stringify(i):typeof i=="function"&&(i=i.toString()),o.setAttribute(a,i);}),o)}parseTextToDOM(e){return e=e.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),this.createElement("div",{innerHTML:e}).firstChild}getTextBoundingRect(e,t,n,o){if(!e||!("value"in e))return e;if(typeof t=="string"&&(t=parseFloat(t)),(typeof t!="number"||isNaN(t))&&(t=0),t<0?t=0:t=Math.min(e.value.length,t),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<t)&&(n=t),n<0?n=0:n=Math.min(e.value.length,n),typeof e.createTextRange=="function"){var a=e.createTextRange();return a.collapse(true),a.moveStart("character",t),a.moveEnd("character",n-t),a.getBoundingClientRect()}var i=E(),s=i.top,l=i.left,c=L("width",true),f=L("height",true),d="white-space:pre;padding:0;margin:0;",u=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];s+=L("padding-top",true),s+=L("border-top-width",true),l+=L("padding-left",true),l+=L("border-left-width",true),l+=1;for(var h=0;h<u.length;h++){var g=u[h];d+=g+":"+L(g)+";";}var m=e.value||"G",x=m.length,w=document.createElement("div");t>0&&S(0,t);var v=S(t,n);x>n&&S(n,x),w.style.cssText=d,w.style.position="absolute",w.style.top=s+"px",w.style.left=l+"px",w.style.width=c+"px",w.style.height=f+"px",K.document.body.appendChild(w);var C=v.getBoundingClientRect();return o||w.parentNode.removeChild(w),C;function S(z,F){var X=document.createElement("span");return X.style.cssText=d,X.textContent=m.substring(z,F),w.appendChild(X),X}function E(){var z=document.body,F=document.defaultView,X=document.documentElement,Y=document.createElement("div");Y.style.paddingLeft=Y.style.width="1px",z.appendChild(Y);var oe=Y.offsetWidth==2;z.removeChild(Y),Y=e.getBoundingClientRect();var k=X.clientTop||z.clientTop||0,$=X.clientLeft||z.clientLeft||0,T=F.pageYOffset||oe&&X.scrollTop||z.scrollTop,b=F.pageXOffset||oe&&X.scrollLeft||z.scrollLeft;return {top:Y.top+T-k,left:Y.left+b-$}}function L(z,F){var X=K.document.defaultView.getComputedStyle(e,null).getPropertyValue(z);return F?parseFloat(X):X}}cssHide(e,t=false){e!=null&&(t?p.addClassName(e,ue.hideImportant):p.addClassName(e,ue.hide));}cssShow(e){e!=null&&(p.removeClassName(e,ue.hide),p.removeClassName(e,ue.hideImportant));}parseHTML(e,t=false,n=false){function o(){let i=new DOMParser;return n?i.parseFromString(e,"text/html"):i.parseFromString(e,"text/html").body.firstChild}function a(){let i=K.document.createElement("div");return ne.setSafeHTML(i,e),n?i:i.firstChild}return t?o():a()}append(e,t){if(typeof e=="string"&&(e=K.document.querySelector(e)),e==null)return;function n(o,a){typeof t=="string"?o.insertAdjacentHTML("beforeend",ne.getSafeHTML(a)):o.appendChild(a);}if(Array.isArray(t)||t instanceof NodeList){let o=K.document.createDocumentFragment();t.forEach(a=>{typeof a=="string"&&(a=this.parseHTML(a,true,false)),o.appendChild(a);}),e.appendChild(o);}else n(e,t);}appendHead(e){K.document.head?K.document.head.appendChild(e):K.document.documentElement.appendChild(e);}appendBody(e){K.document.body?K.document.body.appendChild(e):K.document.documentElement.appendChild(e);}isShow(e){return !!e.getClientRects().length}showElement(e,t){let n=e.cloneNode(true);n.setAttribute("style","visibility: hidden !important;display:block !important;");let o=K.document.documentElement,a=e.getRootNode();return t==null?a==e?o=K.document.documentElement:o=a:o=t,o.appendChild(n),{cloneNode:n,recovery(){n.remove();}}}getStyleValue(e,t){let n=null,o=null;e instanceof CSSStyleDeclaration?o=e:(n=e.ownerDocument.defaultView,(!n||!n.opener)&&(n=window),o=n.getComputedStyle(e));let a=parseFloat(o[t]);return isNaN(a)?0:a}before(e,t){typeof e=="string"&&(e=K.document.querySelector(e)),e!=null&&(typeof t=="string"?e.insertAdjacentHTML("beforebegin",ne.getSafeHTML(t)):e.parentElement.insertBefore(t,e));}after(e,t){typeof e=="string"&&(e=K.document.querySelector(e)),e!=null&&(typeof t=="string"?e.insertAdjacentHTML("afterend",ne.getSafeHTML(t)):e.parentElement.insertBefore(t,e.nextSibling));}getKeyFrames(e){let t={};return Object.keys(e.cssRules).forEach(n=>{e.cssRules[n].type===7&&e.cssRules[n].name.startsWith("pops-anim-")&&(t[e.cssRules[n].name]=e.cssRules[n]);}),t}calcColor(){function e(){return {hexToRgb:i=>{let s="";if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(i))return console.warn("输入错误的hex"),"";i=i.replace("#",""),s=i.match(/../g);for(let c=0;c<3;c++)s[c]=parseInt(s[c],16);return s},rgbToHex:(i,s,l)=>{let c=/^\d{1,3}$/;if(!c.test(i)||!c.test(s)||!c.test(l))return console.warn("输入错误的rgb颜色值"),"";let f=[i.toString(16),s.toString(16),l.toString(16)];for(let d=0;d<3;d++)f[d].length==1&&(f[d]=`0${f[d]}`);return `#${f.join("")}`},getDarkColor:(i,s)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(i))return console.warn("输入错误的hex颜色值"),"";let c=e().hexToRgb(i);for(let f=0;f<3;f++)c[f]=Math.floor(c[f]*(1-s));return e().rgbToHex(c[0],c[1],c[2])},getLightColor:(i,s)=>{if(!/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(i))return console.warn("输入错误的hex颜色值"),"";let c=e().hexToRgb(i);for(let f=0;f<3;f++)c[f]=Math.floor((255-c[f])*s+c[f]);return e().rgbToHex(c[0],c[1],c[2])}}}return e()}getTransform(e){let t=0,n=0,o=K.globalThis.getComputedStyle(e).transform;if(o!=="none"&&o!=null&&o!==""){let a=o.match(/\((.+)\)/)?.[1].split(",");t=Math.abs(parseInt(a[4])),n=Math.abs(parseInt(a[5]));}return {transformLeft:t,transformTop:n}}onInput(e,t,n){let o=false,a=async l=>{o||await t(l);},i=()=>{o=true;},s=()=>{o=false,this.trigger(e,"input",{isComposite:o});};return this.on(e,"input",a,n),this.on(e,"compositionstart",i,n),this.on(e,"compositionend",s,n),{off:()=>{this.off(e,"input",a,n),this.off(e,"compositionstart",i,n),this.off(e,"compositionend",s,n);}}}}const p=new ei,Z={createMask(r,e=101,t=""){return e=e-100,t.startsWith(";")&&(t=t.replace(";","")),`<div class="pops-mask" data-guid="${r}" style="z-index:${e};${t}"></div>`},createAnim(r,e,t,n="",o="",a){let i=t,s="",l="",c=i.position||"";t.zIndex!=null&&(s+=`z-index: ${a};`,l+=`z-index: ${a};`),i.width!=null&&(l+=`width: ${i.width};`),i.height!=null&&(l+=`height: ${i.height};`);let f=o.trim()!=="";return `
		<div class="pops-anim" anim="${i.animation||""}" style="${s}" data-guid="${r}">${t.style!=null?`<style tyle="text/css">${t.style}</style>`:""}
			<div class="pops ${t.class||""}" data-bottom-btn="${f}" type-value="${e}" style="${l}" position="${c}" data-guid="${r}">${n}</div>
		</div>`},createHeader(r,e){if(!e.btn)return "";let t=e;if(r!=="iframe"&&!t.btn?.close?.enable)return "";let n="",o="",a=e;if(r==="iframe"&&a.topRightButton?.trim()!==""){let i="";a.topRightButton.split("|").forEach(s=>{s=s.toLowerCase(),i+=`
                <button class="pops-header-control" type="button" data-type="${s}">
                    <i class="pops-icon">${se.getIcon(s)}</i>
                </button>`;}),n=`
            <div class="pops-header-controls" data-margin>${i}</div>`;}else t.btn?.close?.enable&&(o=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${se.getIcon("close")}</i>
                    </button>
                </div>`),n=o;return n},createHeaderStyle(r,e){return {headerStyle:e?.title?.html&&e?.title?.style||"",headerPStyle:e?.title?.html?"":e?.title?.style||""}},createBottom(r,e){if(e.btn==null)return "";let t=e;if(!(e.btn?.ok?.enable||t.btn?.cancel?.enable||t.btn?.other?.enable))return "";let n="",o="",a="",i="",s="";if(e.btn.position&&(n+=`justify-content: ${e.btn.position};`),t.btn.reverse&&(n+="flex-direction: row-reverse;"),e.btn?.ok?.enable){let l="";(e.btn.ok.size==="large"||e.btn.ok.size==="small")&&(l="pops-button-"+e.btn.ok.size);let c="",f=t.btn.ok.icon;if(f!==""){let d="";se.hasIcon(f)?d=se.getIcon(f):d=f,d=d||"",c=`<i class="pops-bottom-icon" is-loading="${e.btn.ok.iconIsLoading}">${d}</i>`;}a=`
            <button 
				class="pops-${r}-btn-ok ${l}"
				type="button"
				data-type="${t.btn.ok?.type}"
				data-has-icon="${(t.btn.ok.icon||"")!==""}"
				data-rightIcon="${t.btn.ok?.rightIcon}"
            >${c}<span>${e.btn.ok.text}</span>
            </button>`;}if(t.btn?.cancel?.enable){let l="";(t.btn.cancel.size==="large"||t.btn.cancel.size==="small")&&(l="pops-button-"+t.btn.cancel.size);let c="",f=t.btn.cancel.icon;if(f!==""){let d="";se.hasIcon(f)?d=se.getIcon(f):d=f,d=d||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.cancel.iconIsLoading}">${d}</i>`;}i=`
            <button
				class="pops-${r}-btn-cancel ${l}"
				type="button"
				data-type="${t.btn.cancel.type}"
				data-has-icon="${(t.btn.cancel.icon||"")!==""}"
				data-rightIcon="${t.btn.cancel.rightIcon}"
            >${c}<span>${t.btn.cancel.text}</span>
            </button>`;}if(t.btn?.other?.enable){let l="";(t.btn.other.size==="large"||t.btn.other.size==="small")&&(l="pops-button-"+t.btn.other.size);let c="",f=t.btn.other.icon;if(f!==""){let d="";se.hasIcon(f)&&(d=se.getIcon(f)),d=d||"",c=`<i class="pops-bottom-icon" is-loading="${t.btn.other.iconIsLoading}">${d}</i>`;}s=`
            <button
				class="pops-${r}-btn-other ${l}"
				type="button"
				data-type="${t.btn.other.type}"
				data-has-icon="${(t.btn.other.icon||"")!==""}"
				data-rightIcon="${t.btn.other.rightIcon}"
            >${c}<span>${t.btn.other.text}</span>
            </button>`;}if(t.btn.merge){let l="display: flex;";t.btn.mergeReverse?l+="flex-direction: row-reverse;":l+="flex-direction: row;",o=`
            <div class="pops-botttom-btn-controls pops-${r}-btn" style="${n}">${s}<div 
                    class="pops-${r}-btn-merge"
                    style="${l}">${a}${i}</div>
            </div>
            `;}else o=`<div class="pops-botttom-btn-controls pops-${r}-btn" style="${n}">${a}${i}${s}</div>`;return o},createContentStyle(r,e){return {contentStyle:e?.content?.html&&e?.content?.style||"",contentPStyle:e?.content?.html?"":e?.content?.style||""}},parseElement(r){return p.parseTextToDOM(r)}};var ti=`@charset "utf-8";
.pops * {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
	/* 代替::-webkit-scrollbar */
	scrollbar-width: thin;
}
.pops {
	--pops-bg-opacity: 1;
	--pops-bd-opacity: 1;
	--pops-font-size: 16px;
	interpolate-size: allow-keywords;
	--pops-color: #000000;
	--pops-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	--pops-bd-color: rgb(235, 238, 245, var(--pops-bd-opacity));
	--pops-box-shadow-color: rgba(0, 0, 0, 0.12);
	--pops-title-color: #000000;
	--pops-title-border-color: var(--pops-bd-color);
	--pops-content-color: #000000;
	--pops-bottom-btn-controls-border-color: var(--pops-bd-color);
	--pops-components-is-disabled-text-color: #a8abb2;
	--pops-components-is-disabled-bg-color: #f5f7fa;
}
@media (prefers-color-scheme: dark) {
	.pops {
		--pops-mask-bg-opacity: 0.8;
		--pops-color: #ffffff;
		--pops-bg-color: rgb(17, 17, 17, var(--pops-bg-opacity));
		--pops-bd-color: rgb(55, 55, 55, var(--pops-bd-opacity));
		--pops-box-shadow-color: rgba(81, 81, 81, 0.12);
		--pops-title-color: #e8e8e8;
		--pops-title-border-color: var(--pops-bd-color);
		--pops-content-color: #e5e5e5;
		--pops-components-is-disabled-text-color: #a8abb2;
		--pops-components-is-disabled-bg-color: #262727;
	}
}
.pops {
	color: var(--pops-color);
	background-color: var(--pops-bg-color);
	border: 1px solid var(--pops-bd-color);
	border-radius: 4px;
	font-size: var(--pops-font-size);
	line-height: normal;
	box-shadow: 0 0 12px var(--pops-box-shadow-color);
	box-sizing: border-box;
	overflow: hidden;
	transition: all 0.35s;
	display: flex;
	flex-direction: column;
}
.pops-anim {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.pops-anim[anim=""] {
	top: unset;
	right: unset;
	bottom: unset;
	left: unset;
	width: unset;
	height: unset;
	transition: none;
}
/* 底部图标动画和样式 */
.pops i.pops-bottom-icon[is-loading="true"] {
	animation: rotating 2s linear infinite;
}
.pops i.pops-bottom-icon {
	height: 1em;
	width: 1em;
	line-height: normal;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	fill: currentColor;
	color: inherit;
	font-size: inherit;
}

/* 遮罩层样式 */
.pops-mask {
	--pops-mask-bg-opacity: 0.4;
	--pops-mask-bg-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));
}
.pops-mask {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 0;
	background-color: var(--pops-mask-bg-color);
	box-shadow: none;
	transition: none;
}

.pops-header-controls button.pops-header-control[type][data-header] {
	float: right;
	margin: 0 0;
	outline: 0;
	border: 0;
	border-color: rgb(136, 136, 136, var(--pops-bd-opacity));
	background-color: transparent;
	color: #888;
	cursor: pointer;
}
.pops-header-controls button.pops-header-control[data-type="max"],
.pops-header-controls button.pops-header-control[data-type="mise"],
.pops-header-controls button.pops-header-control[data-type="min"] {
	outline: 0 !important;
	border: 0;
	border-color: rgb(136, 136, 136, var(--pops-bd-opacity));
	background-color: transparent;
	color: rgb(136, 136, 136);
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}
button.pops-header-control i {
	color: rgb(144, 147, 153);
	font-size: inherit;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	fill: currentColor;
}
button.pops-header-control svg {
	height: 1.25em;
	width: 1.25em;
}
button.pops-header-control {
	right: 15px;
	padding: 0;
	border: none;
	outline: 0;
	background: 0 0;
	cursor: pointer;
	position: unset;
	line-height: normal;
}
button.pops-header-control i:hover {
	color: rgb(64, 158, 255);
}
.pops-header-controls[data-margin] button.pops-header-control {
	margin: 0 6px;
	display: flex;
	align-items: center;
}
.pops[type-value] .pops-header-controls {
	display: flex;
	gap: 6px;
}

/* 代码块 <code> */
.pops code {
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
	font-size: 0.85em;
	color: #000;
	background-color: #f0f0f0;
	border-radius: 3px;
	border: 0;
	padding: 0.2em 0;
	white-space: normal;
	background: #f5f5f5;
	text-wrap: wrap;
	text-align: left;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.4;
	-moz-tab-size: 8;
	-o-tab-size: 8;
	tab-size: 8;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
	direction: ltr;
}

.pops code::before,
.pops code::after {
	letter-spacing: -0.2em;
	content: "\\00a0";
}

/* 标题 */
.pops .pops-title {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--pops-title-border-color);
	width: 100%;
	height: var(--container-title-height);
}
/* 标题-普通文本 */
.pops .pops-title p[pops] {
	color: var(--pops-title-color);
	width: 100%;
	overflow: hidden;
	text-indent: 15px;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: 500;
	line-height: normal;
}

/* 内容 */
.pops .pops-content {
	width: 100%;
	/*height: calc(
		100% - var(--container-title-height) - var(--container-bottom-btn-height)
	);*/
	flex: 1;
	overflow: auto;
	word-break: break-word;
}
/* 内容-普通文本 */
.pops .pops-content p[pops] {
	color: var(--pops-content-color);
	padding: 5px 10px;
	text-indent: 15px;
}

/* 底部-按钮组 */
.pops .pops-botttom-btn-controls {
	display: flex;
	padding: 10px 10px 10px 10px;
	width: 100%;
	height: var(--container-bottom-btn-height);
	max-height: var(--container-bottom-btn-height);
	line-height: normal;
	border-top: 1px solid var(--pops-bottom-btn-controls-border-color);
	text-align: right;
	align-items: center;
}
`,ni=`.pops[position="top_left"] {
	position: fixed;
	top: 0;
	left: 0;
}
.pops[position="top"] {
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}
.pops[position="top_right"] {
	position: fixed;
	top: 0;
	right: 0;
}
.pops[position="center_left"] {
	position: fixed;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
}
.pops[position="center"] {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.pops[position="center_right"] {
	position: fixed;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
}
.pops[position="bottom_left"] {
	position: fixed;
	bottom: 0;
	left: 0;
}
.pops[position="bottom"] {
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
}
.pops[position="bottom_right"] {
	position: fixed;
	right: 0;
	bottom: 0;
}
`,oi=`/* ::-webkit-scrollbar 是非标准的css */
/* https://caniuse.com/?search=%20%3A%3A-webkit-scrollbar */
.pops ::-webkit-scrollbar {
	width: 6px;
	height: 0;
}

/* 滚动条轨道 */
.pops ::-webkit-scrollbar-track {
	width: 0;
}
/* 滚动条滑块 */
.pops ::-webkit-scrollbar-thumb {
	min-height: 28px;
	border-radius: 2em;
	background: rgb(204, 204, 204, var(--pops-bg-opacity, 1));
	background-clip: padding-box;
}
/* 滚动条滑块 */
.pops ::-webkit-scrollbar-thumb:hover {
	background: rgb(178, 178, 178, var(--pops-bg-opacity, 1));
}
`,ai=`.pops {
	--button-font-size: 14px;
	--button-height: 32px;
	--button-color: rgb(51, 51, 51);
	--button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
	--button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
	--button-margin-top: 0px;
	--button-margin-bottom: 0px;
	--button-margin-left: 5px;
	--button-margin-right: 5px;
	--button-padding-top: 6px;
	--button-padding-bottom: 6px;
	--button-padding-left: 12px;
	--button-padding-right: 12px;
	--button-radius: 4px;

	--container-title-height: 55px;
	--container-bottom-btn-height: 55px;

	/* default按钮 */
	--button-default-color: #333333;
	--button-default-bd-color: #dcdfe6;
	--button-default-bg-color: #ffffff;
	--button-default-active-color: #409eff;
	--button-default-active-bd-color: #409eff;
	--button-default-active-bg-color: #ecf5ff;
	--button-default-hover-color: #409eff;
	--button-default-hover-bd-color: #c6e2ff;
	--button-default-hover-bg-color: #ecf5ff;
	--button-default-focus-visible-outline-color: #a0cfff;
	--button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);
	--button-default-focus-visible-outline-offset: 1px;
	--button-default-disabled-color: #a8abb2;
	--button-default-disabled-bd-color: #ffffff;
	--button-default-disabled-bg-color: #e4e7ed;

	/* primary按钮 */
	--button-primary-color: #ffffff;
	--button-primary-bd-color: #409eff;
	--button-primary-bg-color: #409eff;
	--button-primary-active-color: #ffffff;
	--button-primary-active-bd-color: #337ecc;
	--button-primary-active-bg-color: #337ecc;
	--button-primary-hover-color: #ffffff;
	--button-primary-hover-bd-color: #79bbff;
	--button-primary-hover-bg-color: #79bbff;
	--button-primary-focus-visible-outline-color: #a0cfff;
	--button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);
	--button-primary-focus-visible-outline-offset: 1px;
	--button-primary-disabled-color: #ffffff80;
	--button-primary-disabled-bd-color: #a0cfff;
	--button-primary-disabled-bg-color: #a0cfff;

	/* success按钮 */
	--button-success-color: #ffffff;
	--button-success-bd-color: #4cae4c;
	--button-success-bg-color: #5cb85c;
	--button-success-active-color: #ffffff;
	--button-success-active-bd-color: #529b2e;
	--button-success-active-bg-color: #529b2e;
	--button-success-hover-color: #ffffff;
	--button-success-hover-bd-color: #95d475;
	--button-success-hover-bg-color: #95d475;
	--button-success-focus-visible-outline-color: #b3e19d;
	--button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);
	--button-success-focus-visible-outline-offset: 1px;
	--button-success-disabled-color: #ffffff80;
	--button-success-disabled-bd-color: #b3e19d;
	--button-success-disabled-bg-color: #b3e19d;

	/* info按钮 */
	--button-info-color: #ffffff;
	--button-info-bd-color: #909399;
	--button-info-bg-color: #909399;
	--button-info-active-color: #ffffff;
	--button-info-active-bd-color: #73767a;
	--button-info-active-bg-color: #73767a;
	--button-info-hover-color: #ffffff;
	--button-info-hover-bd-color: #b1b3b8;
	--button-info-hover-bg-color: #b1b3b8;
	--button-info-focus-visible-outline-color: #c8c9cc;
	--button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);
	--button-info-focus-visible-outline-offset: 1px;
	--button-info-disabled-color: #ffffff80;
	--button-info-disabled-bd-color: #c8c9cc;
	--button-info-disabled-bg-color: #c8c9cc;

	/* warning按钮 */
	--button-warning-color: #ffffff;
	--button-warning-bd-color: #e6a23c;
	--button-warning-bg-color: #e6a23c;
	--button-warning-active-color: #ffffff;
	--button-warning-active-bd-color: #b88230;
	--button-warning-active-bg-color: #b88230;
	--button-warning-hover-color: #ffffff80;
	--button-warning-hover-bd-color: #eebe77;
	--button-warning-hover-bg-color: #eebe77;
	--button-warning-focus-visible-outline-color: #f3d19e;
	--button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);
	--button-warning-focus-visible-outline-offset: 1px;
	--button-warning-disabled-color: #ffffff80;
	--button-warning-disabled-bd-color: #f3d19e;
	--button-warning-disabled-bg-color: #f3d19e;

	/* danger按钮 */
	--button-danger-color: #ffffff;
	--button-danger-bd-color: #f56c6c;
	--button-danger-bg-color: #f56c6c;
	--button-danger-active-color: #ffffff;
	--button-danger-active-bd-color: #c45656;
	--button-danger-active-bg-color: #c45656;
	--button-danger-hover-color: #ffffff;
	--button-danger-hover-bd-color: #f89898;
	--button-danger-hover-bg-color: #f89898;
	--button-danger-focus-visible-outline-color: #fab6b6;
	--button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);
	--button-danger-focus-visible-outline-offset: 1px;
	--button-danger-disabled-color: #ffffff80;
	--button-danger-disabled-bd-color: #fab6b6;
	--button-danger-disabled-bg-color: #fab6b6;

	/* xiaomi-primary按钮 */
	--button-xiaomi-primary-color: #ffffff;
	--button-xiaomi-primary-bd-color: #ff5c00;
	--button-xiaomi-primary-bg-color: #ff5c00;
	--button-xiaomi-primary-active-color: #ffffff;
	--button-xiaomi-primary-active-bd-color: #da4f00;
	--button-xiaomi-primary-active-bg-color: #da4f00;
	--button-xiaomi-primary-hover-color: #ffffff;
	--button-xiaomi-primary-hover-bd-color: #ff7e29;
	--button-xiaomi-primary-hover-bg-color: #ff7e29;
	--button-xiaomi-primary-focus-visible-outline-color: #ffa061;
	--button-xiaomi-primary-focus-visible-outline: 2px solid
		var(--button-xiaomi-primary-focus-visible-outline-color);
	--button-xiaomi-primary-focus-visible-outline-offset: 1px;
	--button-xiaomi-primary-disabled-color: #ffffff80;
	--button-xiaomi-primary-disabled-bd-color: #fad5b6;
	--button-xiaomi-primary-disabled-bg-color: #fad5b6;

	/* violet按钮 */
	--button-violet-color: #ffffff;
	--button-violet-bd-color: #626aef;
	--button-violet-bg-color: #626aef;
	--button-violet-active-color: #ffffff;
	--button-violet-active-bd-color: #8188f2;
	--button-violet-active-bg-color: #8188f2;
	--button-violet-hover-color: #ffffff;
	--button-violet-hover-bd-color: #4b50ad;
	--button-violet-hover-bg-color: #4b50ad;
	--button-violet-focus-visible-outline-color: #2a598a;
	--button-violet-focus-visible-outline: 2px solid var(--button-violet-focus-visible-outline-color);
	--button-violet-focus-visible-outline-offset: 1px;
	--button-violet-disabled-color: #ffffff80;
	--button-violet-disabled-bd-color: #3b3f82;
	--button-violet-disabled-bg-color: #3b3f82;
}

@media (prefers-color-scheme: dark) {
	.pops {
		/* default按钮 */
		--button-default-color: #cfd3dc;
		--button-default-bd-color: #4c4d4f;
		--button-default-bg-color: transparent;
		--button-default-active-color: #409eff;
		--button-default-active-bd-color: #409eff;
		--button-default-active-bg-color: #18222c;
		--button-default-hover-color: #409eff;
		--button-default-hover-bd-color: #213d5b;
		--button-default-hover-bg-color: #18222c;
		--button-default-focus-visible-outline-color: #2a598a;
		--button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);
		--button-default-focus-visible-outline-offset: 1px;
		--button-default-disabled-color: #ffffff80;
		--button-default-disabled-bd-color: #414243;
		--button-default-disabled-bg-color: transparent;

		/* primary按钮 */
		--button-primary-color: #ffffff;
		--button-primary-bd-color: #409eff;
		--button-primary-bg-color: #409eff;
		--button-primary-active-color: #ffffff;
		--button-primary-active-bd-color: #66b1ff;
		--button-primary-active-bg-color: #66b1ff;
		--button-primary-hover-color: #ffffff;
		--button-primary-hover-bd-color: #3375b9;
		--button-primary-hover-bg-color: #3375b9;
		--button-primary-focus-visible-outline-color: #2a598a;
		--button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);
		--button-primary-focus-visible-outline-offset: 1px;
		--button-primary-disabled-color: #ffffff80;
		--button-primary-disabled-bd-color: #2a598a;
		--button-primary-disabled-bg-color: #2a598a;

		/* success按钮 */
		--button-success-color: #ffffff;
		--button-success-bd-color: #67c23a;
		--button-success-bg-color: #67c23a;
		--button-success-active-color: #ffffff;
		--button-success-active-bd-color: #85ce61;
		--button-success-active-bg-color: #85ce61;
		--button-success-hover-color: #ffffff;
		--button-success-hover-bd-color: #4e8e2f;
		--button-success-hover-bg-color: #4e8e2f;
		--button-success-focus-visible-outline-color: #3e6b27;
		--button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);
		--button-success-focus-visible-outline-offset: 1px;
		--button-success-disabled-color: #ffffff80;
		--button-success-disabled-bd-color: #3e6b27;
		--button-success-disabled-bg-color: #3e6b27;

		/* info按钮 */
		--button-info-color: #ffffff;
		--button-info-bd-color: #909399;
		--button-info-bg-color: #909399;
		--button-info-active-color: #ffffff;
		--button-info-active-bd-color: #a6a9ad;
		--button-info-active-bg-color: #a6a9ad;
		--button-info-hover-color: #ffffff;
		--button-info-hover-bd-color: #6b6d71;
		--button-info-hover-bg-color: #6b6d71;
		--button-info-focus-visible-outline-color: #525457;
		--button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);
		--button-info-focus-visible-outline-offset: 1px;
		--button-info-disabled-color: #ffffff80;
		--button-info-disabled-bd-color: #525457;
		--button-info-disabled-bg-color: #525457;

		/* warning按钮 */
		--button-warning-color: #ffffff;
		--button-warning-bd-color: #e6a23c;
		--button-warning-bg-color: #e6a23c;
		--button-warning-active-color: #ffffff;
		--button-warning-active-bd-color: #ebb563;
		--button-warning-active-bg-color: #ebb563;
		--button-warning-hover-color: #ffffff80;
		--button-warning-hover-bd-color: #a77730;
		--button-warning-hover-bg-color: #a77730;
		--button-warning-focus-visible-outline-color: #7d5b28;
		--button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);
		--button-warning-focus-visible-outline-offset: 1px;
		--button-warning-disabled-color: #ffffff80;
		--button-warning-disabled-bd-color: #7d5b28;
		--button-warning-disabled-bg-color: #7d5b28;

		/* danger按钮 */
		--button-danger-color: #ffffff;
		--button-danger-bd-color: #f56c6c;
		--button-danger-bg-color: #f56c6c;
		--button-danger-active-color: #ffffff;
		--button-danger-active-bd-color: #f78989;
		--button-danger-active-bg-color: #f78989;
		--button-danger-hover-color: #ffffff;
		--button-danger-hover-bd-color: #b25252;
		--button-danger-hover-bg-color: #b25252;
		--button-danger-focus-visible-outline-color: #854040;
		--button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);
		--button-danger-focus-visible-outline-offset: 1px;
		--button-danger-disabled-color: #ffffff80;
		--button-danger-disabled-bd-color: #854040;
		--button-danger-disabled-bg-color: #854040;
	}
}
.pops[data-bottom-btn="false"] {
	--container-bottom-btn-height: 0px;
}
.pops button {
	white-space: nowrap;
	float: right;
	display: inline-block;
	margin: var(--button-margin-top) var(--button-margin-right) var(--button-margin-bottom)
		var(--button-margin-left);
	padding: var(--button-padding-top) var(--button-padding-right) var(--button-padding-bottom)
		var(--button-padding-left);
	outline: 0;
}
.pops button[data-has-icon="false"] .pops-bottom-icon {
	display: none;
}
.pops button {
	border-radius: var(--button-radius);
	box-shadow: none;
	font-weight: 400;
	font-size: var(--button-font-size);
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}
.pops button {
	display: flex;
	align-items: center;
	height: var(--button-height);
	line-height: normal;
	box-sizing: border-box;
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	border: 1px solid var(--button-bd-color);
}
.pops button {
	color: var(--button-color);
	border-color: var(--button-bd-color);
	background-color: var(--button-bg-color);
}
.pops button:active {
	color: var(--button-color);
	border-color: var(--button-bd-color);
	background-color: var(--button-bg-color);
	outline: 0;
}
.pops button:hover {
	color: var(--button-color);
	border-color: var(--button-bd-color);
	background-color: var(--button-bg-color);
}
.pops button:focus-visible {
	color: var(--button-color);
	border-color: var(--button-bd-color);
	background-color: var(--button-bg-color);
}
.pops button:disabled {
	cursor: not-allowed;
	color: var(--button-color);
	border-color: var(--button-bd-color);
	background-color: var(--button-bg-color);
}
.pops button.pops-button-large {
	--button-height: 32px;
	--button-padding-top: 12px;
	--button-padding-bottom: 12px;
	--button-padding-left: 19px;
	--button-padding-right: 19px;
	--button-font-size: 14px;
	--button-border-radius: 4px;
}

.pops button.pops-button-small {
	--button-height: 24px;
	--button-padding-top: 5px;
	--button-padding-bottom: 5px;
	--button-padding-left: 11px;
	--button-padding-right: 11px;
	--button-font-size: 12px;
	--button-border-radius: 4px;
}
.pops-panel-button-no-icon .pops-panel-button_inner i {
	display: none;
}
.pops-panel-button-right-icon .pops-panel-button_inner {
	flex-direction: row-reverse;
}
.pops-panel-button .pops-panel-button_inner i:has(svg),
.pops-panel-button-right-icon .pops-panel-button-text {
	margin-right: 6px;
}

.pops button[data-type="default"] {
	--button-color: var(--button-default-color);
	--button-bd-color: var(--button-default-bd-color);
	--button-bg-color: var(--button-default-bg-color);
}
.pops button[data-type="default"]:active {
	--button-color: var(--button-default-active-color);
	--button-bd-color: var(--button-default-active-bd-color);
	--button-bg-color: var(--button-default-active-bg-color);
}
.pops button[data-type="default"]:hover {
	--button-color: var(--button-default-hover-color);
	--button-bd-color: var(--button-default-hover-bd-color);
	--button-bg-color: var(--button-default-hover-bg-color);
}
.pops button[data-type="default"]:focus-visible {
	outline: var(--button-default-focus-visible-outline);
	outline-offset: var(--button-default-focus-visible-outline-offset);
}
.pops button[data-type="default"]:disabled {
	--button-color: var(--button-default-disabled-color);
	--button-bd-color: var(--button-default-disabled-bd-color);
	--button-bg-color: var(--button-default-disabled-bg-color);
}

.pops button[data-type="primary"] {
	--button-color: var(--button-primary-color);
	--button-bd-color: var(--button-primary-bd-color);
	--button-bg-color: var(--button-primary-bg-color);
}
.pops button[data-type="primary"]:active {
	--button-color: var(--button-primary-active-color);
	--button-bd-color: var(--button-primary-active-bd-color);
	--button-bg-color: var(--button-primary-active-bg-color);
}
.pops button[data-type="primary"]:hover {
	--button-color: var(--button-primary-hover-color);
	--button-bd-color: var(--button-primary-hover-bd-color);
	--button-bg-color: var(--button-primary-hover-bg-color);
}
.pops button[data-type="primary"]:focus-visible {
	outline: var(--button-primary-focus-visible-outline);
	outline-offset: var(--button-primary-focus-visible-outline-offset);
}
.pops button[data-type="primary"]:disabled {
	--button-color: var(--button-primary-disabled-color);
	--button-bd-color: var(--button-primary-disabled-bd-color);
	--button-bg-color: var(--button-primary-disabled-bg-color);
}

.pops button[data-type="success"] {
	--button-color: var(--button-success-color);
	--button-bd-color: var(--button-success-bd-color);
	--button-bg-color: var(--button-success-bg-color);
}
.pops button[data-type="success"]:active {
	--button-color: var(--button-success-active-color);
	--button-bd-color: var(--button-success-active-bd-color);
	--button-bg-color: var(--button-success-active-bg-color);
}
.pops button[data-type="success"]:hover {
	--button-color: var(--button-success-hover-color);
	--button-bd-color: var(--button-success-hover-bd-color);
	--button-bg-color: var(--button-success-hover-bg-color);
}
.pops button[data-type="success"]:focus-visible {
	outline: var(--button-success-focus-visible-outline);
	outline-offset: var(--button-success-focus-visible-outline-offset);
}
.pops button[data-type="success"]:disabled {
	--button-color: var(--button-success-disabled-color);
	--button-bd-color: var(--button-success-disabled-bd-color);
	--button-bg-color: var(--button-success-disabled-bg-color);
}

.pops button[data-type="info"] {
	--button-color: var(--button-info-color);
	--button-bd-color: var(--button-info-bd-color);
	--button-bg-color: var(--button-info-bg-color);
}
.pops button[data-type="info"]:active {
	--button-color: var(--button-info-active-color);
	--button-bd-color: var(--button-info-active-bd-color);
	--button-bg-color: var(--button-info-active-bg-color);
}
.pops button[data-type="info"]:hover {
	--button-color: var(--button-info-hover-color);
	--button-bd-color: var(--button-info-hover-bd-color);
	--button-bg-color: var(--button-info-hover-bg-color);
}
.pops button[data-type="info"]:focus-visible {
	outline: var(--button-info-focus-visible-outline);
	outline-offset: var(--button-info-focus-visible-outline-offset);
}
.pops button[data-type="info"]:disabled {
	--button-color: var(--button-info-disabled-color);
	--button-bd-color: var(--button-info-disabled-bd-color);
	--button-bg-color: var(--button-info-disabled-bg-color);
}

.pops button[data-type="warning"] {
	--button-color: var(--button-warning-color);
	--button-bd-color: var(--button-warning-bd-color);
	--button-bg-color: var(--button-warning-bg-color);
}
.pops button[data-type="warning"]:active {
	--button-color: var(--button-warning-active-color);
	--button-bd-color: var(--button-warning-active-bd-color);
	--button-bg-color: var(--button-warning-active-bg-color);
}
.pops button[data-type="warning"]:hover {
	--button-color: var(--button-warning-hover-color);
	--button-bd-color: var(--button-warning-hover-bd-color);
	--button-bg-color: var(--button-warning-hover-bg-color);
}
.pops button[data-type="warning"]:focus-visible {
	outline: var(--button-warning-focus-visible-outline);
	outline-offset: var(--button-warning-focus-visible-outline-offset);
}
.pops button[data-type="warning"]:disabled {
	--button-color: var(--button-warning-disabled-color);
	--button-bd-color: var(--button-warning-disabled-bd-color);
	--button-bg-color: var(--button-warning-disabled-bg-color);
}

.pops button[data-type="danger"] {
	--button-color: var(--button-danger-color);
	--button-bd-color: var(--button-danger-bd-color);
	--button-bg-color: var(--button-danger-bg-color);
}
.pops button[data-type="danger"]:active {
	--button-color: var(--button-danger-active-color);
	--button-bd-color: var(--button-danger-active-bd-color);
	--button-bg-color: var(--button-danger-active-bg-color);
}
.pops button[data-type="danger"]:hover {
	--button-color: var(--button-danger-hover-color);
	--button-bd-color: var(--button-danger-hover-bd-color);
	--button-bg-color: var(--button-danger-hover-bg-color);
}
.pops button[data-type="danger"]:focus-visible {
	outline: var(--button-danger-focus-visible-outline);
	outline-offset: var(--button-danger-focus-visible-outline-offset);
}
.pops button[data-type="danger"]:disabled {
	--button-color: var(--button-danger-disabled-color);
	--button-bd-color: var(--button-danger-disabled-bd-color);
	--button-bg-color: var(--button-danger-disabled-bg-color);
}

.pops button[data-type="xiaomi-primary"] {
	--button-color: var(--button-xiaomi-primary-color);
	--button-bd-color: var(--button-xiaomi-primary-bd-color);
	--button-bg-color: var(--button-xiaomi-primary-bg-color);
}
.pops button[data-type="xiaomi-primary"]:active {
	--button-color: var(--button-xiaomi-primary-active-color);
	--button-bd-color: var(--button-xiaomi-primary-active-bd-color);
	--button-bg-color: var(--button-xiaomi-primary-active-bg-color);
}
.pops button[data-type="xiaomi-primary"]:hover {
	--button-color: var(--button-xiaomi-primary-hover-color);
	--button-bd-color: var(--button-xiaomi-primary-hover-bd-color);
	--button-bg-color: var(--button-xiaomi-primary-hover-bg-color);
}
.pops button[data-type="xiaomi-primary"]:focus-visible {
	outline: var(--button-xiaomi-primary-focus-visible-outline);
	outline-offset: var(--button-xiaomi-primary-focus-visible-outline-offset);
}
.pops button[data-type="xiaomi-primary"]:disabled {
	--button-color: var(--button-xiaomi-primary-disabled-color);
	--button-bd-color: var(--button-xiaomi-primary-disabled-bd-color);
	--button-bg-color: var(--button-xiaomi-primary-disabled-bg-color);
}

.pops button[data-type="violet"] {
	--button-color: var(--button-violet-color);
	--button-bd-color: var(--button-violet-bd-color);
	--button-bg-color: var(--button-violet-bg-color);
}
.pops button[data-type="violet"]:active {
	--button-color: var(--button-violet-active-color);
	--button-bd-color: var(--button-violet-active-bd-color);
	--button-bg-color: var(--button-violet-active-bg-color);
}
.pops button[data-type="violet"]:hover {
	--button-color: var(--button-violet-hover-color);
	--button-bd-color: var(--button-violet-hover-bd-color);
	--button-bg-color: var(--button-violet-hover-bg-color);
}
.pops button[data-type="violet"]:focus-visible {
	outline: var(--button-violet-focus-visible-outline);
	outline-offset: var(--button-violet-focus-visible-outline-offset);
}
.pops button[data-type="violet"]:disabled {
	--button-color: var(--button-violet-disabled-color);
	--button-bd-color: var(--button-violet-disabled-bd-color);
	--button-bg-color: var(--button-violet-disabled-bg-color);
}
`,ri=`.pops-flex-items-center {
	display: flex;
	align-items: center;
}
.pops-flex-y-center {
	display: flex;
	justify-content: space-between;
}
.pops-flex-x-center {
	display: flex;
	align-content: center;
}
.pops-hide {
	display: none;
}
.pops-hide-important {
	display: none !important;
}
.pops-no-border {
	border: 0;
}
.pops-no-border-important {
	border: 0 !important;
}
.pops-user-select-none {
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
}
.pops-line-height-center {
	line-height: normal;
	align-content: center;
}
.pops-width-fill {
	width: -webkit-fill-available;
	width: -moz-available;
}
.pops-text-is-disabled {
	--pops-text-is-disabled-color: #a8abb2;
	color: var(--pops-text-is-disabled-color);
	--pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color);
}
.pops-text-is-disabled-important {
	--pops-text-is-disabled-color: #a8abb2;
	color: var(--pops-text-is-disabled-color) !important;
	--pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color) !important;
}
`,ii=`@keyframes rotating {
	0% {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes iframeLoadingChange_85 {
	0% {
		background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));
	}
	20% {
		background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));
	}
	40% {
		background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));
	}
	60% {
		background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));
	}
	80% {
		background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));
	}
	100% {
		background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));
	}
	from {
		width: 75%;
	}
	to {
		width: 100%;
	}
}
@keyframes iframeLoadingChange {
	0% {
		background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));
	}
	20% {
		background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));
	}
	40% {
		background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));
	}
	60% {
		background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));
	}
	80% {
		background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));
	}
	100% {
		background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));
	}
	from {
		width: 0;
	}
	to {
		width: 75%;
	}
}

@keyframes searchSelectFalIn {
	from {
		opacity: 0;
		display: none;
	}
	to {
		display: block;
		opacity: 1;
	}
}
@keyframes searchSelectFalOut {
	from {
		display: block;
		opacity: 1;
	}
	to {
		opacity: 0;
		display: none;
	}
}

@keyframes pops-anim-wait-rotate {
	form {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes pops-anim-spread {
	0% {
		opacity: 0;
		transform: scaleX(0);
	}
	100% {
		opacity: 1;
		transform: scaleX(1);
	}
}
@keyframes pops-anim-shake {
	0%,
	100% {
		transform: translateX(0);
	}
	10%,
	30%,
	50%,
	70%,
	90% {
		transform: translateX(-10px);
	}
	20%,
	40%,
	60%,
	80% {
		transform: translateX(10px);
	}
}
@keyframes pops-anim-rolling-left {
	0% {
		opacity: 0;
		transform: translateX(-100%) rotate(-120deg);
	}
	100% {
		opacity: 1;
		transform: translateX(0) rotate(0);
	}
}
@keyframes pops-anim-rolling-right {
	0% {
		opacity: 0;
		transform: translateX(100%) rotate(120deg);
	}
	100% {
		opacity: 1;
		transform: translateX(0) rotate(0);
	}
}
@keyframes pops-anim-slide-top {
	0% {
		opacity: 0;
		transform: translateY(-200%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes pops-anim-slide-bottom {
	0% {
		opacity: 0;
		transform: translateY(200%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes pops-anim-slide-left {
	0% {
		opacity: 0;
		transform: translateX(-200%);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes pops-anim-slide-right {
	0% {
		transform: translateX(200%);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes pops-anim-fadein {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes pops-anim-fadein-zoom {
	0% {
		opacity: 0;
		transform: scale(0.5);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes pops-anim-fadein-alert {
	0% {
		transform: scale(0.5);
	}
	45% {
		transform: scale(1.05);
	}
	80% {
		transform: scale(0.95);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes pops-anim-don {
	0% {
		opacity: 0;
		transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	2.08333% {
		transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	4.16667% {
		transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	6.25% {
		transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	8.33333% {
		transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	10.4167% {
		transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	12.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	14.5833% {
		transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	16.6667% {
		transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	18.75% {
		transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	20.8333% {
		transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	22.9167% {
		transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	25% {
		transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	27.0833% {
		transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	29.1667% {
		transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	31.25% {
		transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	33.3333% {
		transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	35.4167% {
		transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	37.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	39.5833% {
		transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	41.6667% {
		transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	43.75% {
		transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	45.8333% {
		transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	47.9167% {
		transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	50% {
		opacity: 1;
		transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	52.0833% {
		transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	54.1667% {
		transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	56.25% {
		transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	58.3333% {
		transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	60.4167% {
		transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	62.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	64.5833% {
		transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	66.6667% {
		transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	68.75% {
		transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	70.8333% {
		transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	72.9167% {
		transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	75% {
		transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	77.0833% {
		transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	79.1667% {
		transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	81.25% {
		transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	83.3333% {
		transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	85.4167% {
		transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	87.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	89.5833% {
		transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	91.6667% {
		transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	93.75% {
		transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	95.8333% {
		transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	97.9167% {
		transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	100% {
		opacity: 1;
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
}
@keyframes pops-anim-roll {
	0% {
		transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
	}
	100% {
		transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
	}
}
@keyframes pops-anim-sandra {
	0% {
		opacity: 0;
		transform: scale3d(1.1, 1.1, 1);
	}
	100% {
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
}
@keyframes pops-anim-gather {
	0% {
		opacity: 0;
		transform: scale(5, 0);
	}
	100% {
		opacity: 1;
		transform: scale(1, 1);
	}
}
@keyframes pops-anim-spread-reverse {
	0% {
		opacity: 1;
		transform: scaleX(1);
	}
	100% {
		opacity: 0;
		transform: scaleX(0);
	}
}
@keyframes pops-anim-shake-reverse {
	0%,
	100% {
		transform: translateX(10px);
	}
	10%,
	30%,
	50%,
	70%,
	90% {
		transform: translateX(-10px);
	}
	20%,
	40%,
	60%,
	80% {
		transform: translateX(0);
	}
}
@keyframes pops-anim-rolling-left-reverse {
	0% {
		opacity: 1;
		transform: translateX(0) rotate(0);
	}
	100% {
		opacity: 0;
		transform: translateX(-100%) rotate(-120deg);
	}
}
@keyframes pops-anim-rolling-right-reverse {
	0% {
		opacity: 1;
		transform: translateX(0) rotate(0);
	}
	100% {
		opacity: 0;
		transform: translateX(100%) rotate(120deg);
	}
}
@keyframes pops-anim-slide-top-reverse {
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-200%);
	}
}
@keyframes pops-anim-slide-bottom-reverse {
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(200%);
	}
}
@keyframes pops-anim-slide-left-reverse {
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		transform: translateX(-200%);
	}
}
@keyframes pops-anim-slide-right-reverse {
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	100% {
		transform: translateX(200%);
	}
}
@keyframes pops-anim-fadein-reverse {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
@keyframes pops-anim-fadein-zoom-reverse {
	0% {
		opacity: 1;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(0.5);
	}
}
@keyframes pops-anim-fadein-alert-reverse {
	0% {
		transform: scale(1);
	}
	45% {
		transform: scale(0.95);
	}
	80% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(0.5);
	}
}
@keyframes pops-anim-don-reverse {
	100% {
		opacity: 0;
		transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	97.9167% {
		transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	95.8333% {
		transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	93.75% {
		transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	91.6667% {
		transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	89.5833% {
		transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	87.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	85.4167% {
		transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	83.3333% {
		transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	81.25% {
		transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	79.1667% {
		transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	77.0833% {
		transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	75% {
		transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	72.9167% {
		transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	70.8333% {
		transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	68.75% {
		transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	66.6667% {
		transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	64.5833% {
		transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	62.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	60.4167% {
		transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	58.3333% {
		transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	56.25% {
		transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	54.1667% {
		transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	52.0833% {
		transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	50% {
		opacity: 1;
		transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	47.9167% {
		transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	45.8333% {
		transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	43.75% {
		transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	41.6667% {
		transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	39.5833% {
		transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	37.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	35.4167% {
		transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	33.3333% {
		transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	31.25% {
		transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	29.1667% {
		transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	27.0833% {
		transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	25% {
		transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	22.9167% {
		transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	20.8333% {
		transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	18.75% {
		transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	16.6667% {
		transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	14.5833% {
		transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	12.5% {
		transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	10.4167% {
		transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	8.33333% {
		transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	6.25% {
		transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	4.16667% {
		transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	2.08333% {
		transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
	0% {
		opacity: 1;
		transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	}
}
@keyframes pops-anim-roll-reverse {
	0% {
		transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
	}
	100% {
		transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
	}
}
@keyframes pops-anim-sandra-reverse {
	0% {
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
	100% {
		opacity: 0;
		transform: scale3d(1.1, 1.1, 1);
	}
}
@keyframes pops-anim-gather-reverse {
	0% {
		opacity: 0;
		transform: scale(5, 0);
	}
	100% {
		opacity: 0;
		transform: scale(5, 0);
	}
}

@-webkit-keyframes pops-motion-fadeInTop {
	0% {
		opacity: 0;
		-webkit-transform: translateY(-30px);
		transform: translateY(-30px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
@keyframes pops-motion-fadeInTop {
	0% {
		opacity: 0;
		transform: translateY(-30px);
		-ms-transform: translateY(-30px);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
		-ms-transform: translateX(0);
	}
}
@-webkit-keyframes pops-motion-fadeOutTop {
	0% {
		opacity: 10;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateY(-30px);
		transform: translateY(-30px);
	}
}
@keyframes pops-motion-fadeOutTop {
	0% {
		opacity: 1;
		transform: translateY(0);
		-ms-transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-30px);
		-ms-transform: translateY(-30px);
	}
}
@-webkit-keyframes pops-motion-fadeInBottom {
	0% {
		opacity: 0;
		-webkit-transform: translateY(20px);
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
}
@keyframes pops-motion-fadeInBottom {
	0% {
		opacity: 0;
		-webkit-transform: translateY(20px);
		transform: translateY(20px);
		-ms-transform: translateY(20px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
		-ms-transform: translateY(0);
	}
}
@-webkit-keyframes pops-motion-fadeOutBottom {
	0% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateY(20px);
		transform: translateY(20px);
	}
}
@keyframes pops-motion-fadeOutBottom {
	0% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
		-ms-transform: translateY(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateY(20px);
		transform: translateY(20px);
		-ms-transform: translateY(20px);
	}
}
@-webkit-keyframes pops-motion-fadeInLeft {
	0% {
		opacity: 0;
		-webkit-transform: translateX(-20px);
		transform: translateX(-20px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
@keyframes pops-motion-fadeInLeft {
	0% {
		opacity: 0;
		-webkit-transform: translateX(-30px);
		transform: translateX(-30px);
		-ms-transform: translateX(-30px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
		-ms-transform: translateX(0);
	}
}
@-webkit-keyframes pops-motion-fadeOutLeft {
	0% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateX(-30px);
		transform: translateX(-30px);
	}
}
@keyframes pops-motion-fadeOutLeft {
	0% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
		-ms-transform: translateX(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateX(-20px);
		transform: translateX(-20px);
		-ms-transform: translateX(-20px);
	}
}
@-webkit-keyframes pops-motion-fadeInRight {
	0% {
		opacity: 0;
		-webkit-transform: translateX(20px);
		transform: translateX(20px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
@keyframes pops-motion-fadeInRight {
	0% {
		opacity: 0;
		-webkit-transform: translateX(20px);
		transform: translateX(20px);
		-ms-transform: translateX(20px);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
		-ms-transform: translateX(0);
	}
}
@-webkit-keyframes pops-motion-fadeOutRight {
	0% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateX(20px);
		transform: translateX(20px);
	}
}
@keyframes pops-motion-fadeOutRight {
	0% {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
		-ms-transform: translateX(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translateX(20px);
		transform: translateX(20px);
		-ms-transform: translateX(20px);
	}
}

/* 动画 */
.pops-anim[anim="pops-anim-spread"] {
	animation: pops-anim-spread 0.3s;
}
.pops-anim[anim="pops-anim-shake"] {
	animation: pops-anim-shake 0.3s;
}
.pops-anim[anim="pops-anim-rolling-left"] {
	animation: pops-anim-rolling-left 0.3s;
}
.pops-anim[anim="pops-anim-rolling-right"] {
	animation: pops-anim-rolling-right 0.3s;
}
.pops-anim[anim="pops-anim-slide-top"] {
	animation: pops-anim-slide-top 0.3s;
}
.pops-anim[anim="pops-anim-slide-bottom"] {
	animation: pops-anim-slide-bottom 0.3s;
}
.pops-anim[anim="pops-anim-slide-left"] {
	animation: pops-anim-slide-left 0.3s;
}
.pops-anim[anim="pops-anim-slide-right"] {
	animation: pops-anim-slide-right 0.3s;
}
.pops-anim[anim="pops-anim-fadein"] {
	animation: pops-anim-fadein 0.3s;
}
.pops-anim[anim="pops-anim-fadein-zoom"] {
	animation: pops-anim-fadein-zoom 0.3s;
}
.pops-anim[anim="pops-anim-fadein-alert"] {
	animation: pops-anim-fadein-alert 0.3s;
}
.pops-anim[anim="pops-anim-don"] {
	animation: pops-anim-don 0.3s;
}
.pops-anim[anim="pops-anim-roll"] {
	animation: pops-anim-roll 0.3s;
}
.pops-anim[anim="pops-anim-sandra"] {
	animation: pops-anim-sandra 0.3s;
}
.pops-anim[anim="pops-anim-gather"] {
	animation: pops-anim-gather 0.3s;
}
.pops-anim[anim="pops-anim-spread-reverse"] {
	animation: pops-anim-spread-reverse 0.3s;
}
.pops-anim[anim="pops-anim-shake-reverse"] {
	animation: pops-anim-shake-reverse 0.3s;
}
.pops-anim[anim="pops-anim-rolling-left-reverse"] {
	animation: pops-anim-rolling-left-reverse 0.3s;
}
.pops-anim[anim="pops-anim-rolling-right-reverse"] {
	animation: pops-anim-rolling-right-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-top-reverse"] {
	animation: pops-anim-slide-top-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-bottom-reverse"] {
	animation: pops-anim-slide-bottom-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-left-reverse"] {
	animation: pops-anim-slide-left-reverse 0.3s;
}
.pops-anim[anim="pops-anim-slide-right-reverse"] {
	animation: pops-anim-slide-right-reverse 0.3s;
}
.pops-anim[anim="pops-anim-fadein-reverse"] {
	animation: pops-anim-fadein-reverse 0.3s;
}
.pops-anim[anim="pops-anim-fadein-zoom-reverse"] {
	animation: pops-anim-fadein-zoom-reverse 0.3s;
}
.pops-anim[anim="pops-anim-fadein-alert-reverse"] {
	animation: pops-anim-fadein-alert-reverse 0.3s;
}
.pops-anim[anim="pops-anim-don-reverse"] {
	animation: pops-anim-don-reverse 0.3s;
}
.pops-anim[anim="pops-anim-roll-reverse"] {
	animation: pops-anim-roll-reverse 0.3s;
}
.pops-anim[anim="pops-anim-sandra-reverse"] {
	animation: pops-anim-sandra-reverse 0.3s;
}
.pops-anim[anim="pops-anim-gather-reverse"] {
	animation: pops-anim-gather-reverse 0.3s;
}
`,si="",li="",ci=`.pops[type-value="prompt"] {
	--input-color: #000000;
	--input-bg-color: none;
	--input-placeholder-color: #a1a4ac;
}
.pops[type-value="prompt"] input[pops],
.pops[type-value="prompt"] textarea[pops] {
	width: 100%;
	height: 100%;
	outline: 0;
	border: 0;
	color: var(--input-color);
	background-color: var(--input-bg-color);
}

.pops[type-value="prompt"] input[pops] {
	padding: 5px 10px;
}
.pops[type-value="prompt"] textarea[pops] {
	padding: 5px 10px;
	resize: none;
}

.pops[type-value="prompt"] input[pops]::placeholder,
.pops[type-value="prompt"] textarea[pops]::placeholder {
	color: var(--input-placeholder-color);
}
@media (prefers-color-scheme: dark) {
	.pops[type-value="prompt"] {
		--input-color: #ffffff;
		--input-bg-color: #333333;
		--input-placeholder-color: #8d9095;
	}
}
`,fi=`.pops[type-value="loading"] {
	--loading-bd-color: rgba(0, 0, 0, 0.2);
	--loading-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	--loading-box-shadow-color: rgb(0 0 0 / 50%);
	--loading-icon-color: rgba(100, 149, 237, 0.1);
	--loading-icon-bd-top-color: rgb(100, 149, 237, var(--pops-bd-opacity));
}
.pops[type-value="loading"] {
	position: absolute;
	top: 272.5px;
	top: 50%;
	left: 26px;
	left: 50%;
	display: flex;
	overflow: hidden;
	padding: 10px 15px;
	max-width: 100%;
	max-height: 100%;
	min-width: 0;
	min-height: 0;
	border: 1px solid var(--loading-bd-color);
	border-radius: 5px;
	background-color: var(--loading-bg-color);
	box-shadow: 0 0 5px var(--loading-box-shadow-color);
	vertical-align: middle;
	transition: all 0.35s;
	transform: translate(-50%, -50%);
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;
}
.pops[type-value="loading"]:before {
	float: left;
	display: inline-block;
	width: 2em;
	height: 2em;
	border: 0.3em solid var(--loading-icon-color);
	border-top: 0.3em solid var(--loading-icon-bd-top-color);
	border-radius: 50%;
	content: " ";
	vertical-align: middle;
	font-size: inherit;
	animation: pops-anim-wait-rotate 1.2s linear infinite;
}
.pops[type-value="loading"] .pops-loading-content {
	position: static;
	top: 0;
	bottom: 0;
	float: left;
	overflow: hidden;
	width: auto;
	font-size: inherit;
	line-height: normal;
	align-content: center;
}

@media (prefers-color-scheme: dark) {
	.pops[type-value="loading"] {
		--loading-bg-color: #222222;
	}
}
`,di=`.pops[type-value="iframe"] {
	--container-title-height: 55px;
	transition:
		width 0.35s ease,
		height 0.35s ease;
}
.pops[type-value="iframe"] .pops-content {
	overflow: hidden;
}
.pops-loading {
	position: absolute;
	top: 40px;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 5;
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
}
.pops-loading:before {
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 3;
	display: block;
	margin: -20px 0 0 -20px;
	padding: 20px;
	border: 4px solid rgb(221, 221, 221, var(--pops-bd-opacity));
	border-radius: 50%;
	content: "";
	border-top-color: transparent;
	animation: pops-anim-wait-rotate 1.2s linear infinite;
}
.pops[type-value="iframe"].pops[type-module="min"] {
	bottom: 0;
	max-width: 200px;
	max-height: 53px;
	position: unset;
}
.pops[type-value="iframe"].pops[type-module="min"] .pops-header-control[data-type="min"] {
	display: none;
}
.pops[type-value="iframe"].pops-iframe-unset-top {
	top: unset !important;
}
.pops[type-value="iframe"].pops-iframe-unset-left {
	left: unset !important;
}
.pops[type-value="iframe"].pops-iframe-unset-transform {
	transform: none !important;
}
.pops[type-value="iframe"].pops-iframe-unset-transition {
	transition: none !important;
}
.pops[type-value="iframe"].pops[type-module="max"] {
	width: 100% !important;
	height: 100% !important;
}
.pops[type-value="iframe"] iframe[pops] {
	width: 100%;
	height: 100%;
	border: 0;
}
.pops-iframe-content-global-loading {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999999;
	width: 0;
	height: 4px;
	background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));
	animation: iframeLoadingChange 2s forwards;
}

.pops-anim:has(.pops[type-value="iframe"].pops[type-module="min"]) {
	position: unset;
}
`,pi=`.pops-tip {
	--pops-bg-opacity: 1;
	--tooltip-color: #4e4e4e;
	--tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	--tooltip-bd-radius: 2px;
	--tooltip-box-shadow-left-color: rgba(0, 0, 0, 0.24);
	--tooltip-box-shadow-right-color: rgba(0, 0, 0, 0.12);
	--tooltip-font-size: 14px;
	--tooltip-padding-top: 13px;
	--tooltip-padding-right: 13px;
	--tooltip-padding-bottom: 13px;
	--tooltip-padding-left: 13px;

	--tooltip-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);
	--tooltip-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);
	--tooltip-arrow--after-color: rgb(78, 78, 78);
	--tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	--tooltip-arrow--after-width: 12px;
	--tooltip-arrow--after-height: 12px;
}
.pops-tip {
	padding: var(--tooltip-padding-top) var(--tooltip-padding-right) var(--tooltip-padding-bottom)
		var(--tooltip-padding-left);
	max-width: 400px;
	max-height: 300px;
	border-radius: var(--tooltip-bd-radius);
	background-color: var(--tooltip-bg-color);
	box-shadow:
		0 1.5px 4px var(--tooltip-box-shadow-left-color),
		0 1.5px 6px var(--tooltip-box-shadow-right-color);
	color: var(--tooltip-color);
	font-size: var(--tooltip-font-size);
}
.pops-tip[data-position="absolute"] {
	position: absolute;
}
.pops-tip[data-position="fixed"] {
	position: fixed;
}

.pops-tip .pops-tip-arrow {
	position: absolute;
	top: 100%;
	left: 50%;
	overflow: hidden;
	width: 100%;
	height: 12.5px;
	transform: translateX(-50%);
}

.pops-tip .pops-tip-arrow::after {
	position: absolute;
	top: 0;
	left: 50%;
	width: var(--tooltip-arrow--after-width);
	height: var(--tooltip-arrow--after-height);
	background: var(--tooltip-arrow--after-bg-color);
	color: var(--tooltip-arrow--after-color);
	box-shadow:
		0 1px 7px var(--tooltip-arrow-box-shadow-left-color),
		0 1px 7px var(--tooltip-arrow-box-shadow-right-color);
	content: "";
	transform: translateX(-50%) translateY(-50%) rotate(45deg);
}

.pops-tip .pops-tip-arrow[data-position="bottom"] {
	position: absolute;
	top: 100%;
	left: 50%;
	overflow: hidden;
	width: 100%;
	height: 12.5px;
	transform: translateX(-50%);
}

.pops-tip .pops-tip-arrow[data-position="bottom"]:after {
	position: absolute;
	top: 0;
	left: 50%;
	width: var(--tooltip-arrow--after-width);
	height: var(--tooltip-arrow--after-height);
	background: var(--tooltip-arrow--after-bg-color);
	box-shadow:
		0 1px 7px var(--tooltip-arrow-box-shadow-left-color),
		0 1px 7px var(--tooltip-arrow-box-shadow-right-color);
	content: "";
	transform: translateX(-50%) translateY(-50%) rotate(45deg);
}

.pops-tip .pops-tip-arrow[data-position="left"] {
	top: 50%;
	left: -12.5px;
	width: 12.5px;
	height: 50px;
	transform: translateY(-50%);
}

.pops-tip .pops-tip-arrow[data-position="left"]:after {
	position: absolute;
	top: 50%;
	left: 100%;
	content: "";
}

.pops-tip .pops-tip-arrow[data-position="right"] {
	top: 50%;
	right: -12.5px;
	left: auto;
	width: 12.5px;
	height: 50px;
	transform: translateY(-50%);
}

.pops-tip .pops-tip-arrow[data-position="right"]:after {
	position: absolute;
	top: 50%;
	left: 0;
	content: "";
}

.pops-tip .pops-tip-arrow[data-position="top"] {
	top: -12.5px;
	left: 50%;
	transform: translateX(-50%);
}

.pops-tip .pops-tip-arrow[data-position="top"]:after {
	position: absolute;
	top: 100%;
	left: 50%;
	content: "";
}

.pops-tip[data-motion] {
	-webkit-animation-duration: 0.25s;
	animation-duration: 0.25s;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.pops-tip[data-motion="fadeOutRight"] {
	-webkit-animation-name: pops-motion-fadeOutRight;
	animation-name: pops-motion-fadeOutRight;
}
.pops-tip[data-motion="fadeInTop"] {
	-webkit-animation-name: pops-motion-fadeInTop;
	animation-name: pops-motion-fadeInTop;
	animation-timing-function: cubic-bezier(0.49, 0.49, 0.13, 1.3);
}
.pops-tip[data-motion="fadeOutTop"] {
	-webkit-animation-name: pops-motion-fadeOutTop;
	animation-name: pops-motion-fadeOutTop;
	animation-timing-function: cubic-bezier(0.32, 0.37, 0.06, 0.87);
}
.pops-tip[data-motion="fadeInBottom"] {
	-webkit-animation-name: pops-motion-fadeInBottom;
	animation-name: pops-motion-fadeInBottom;
}
.pops-tip[data-motion="fadeOutBottom"] {
	-webkit-animation-name: pops-motion-fadeOutBottom;
	animation-name: pops-motion-fadeOutBottom;
}
.pops-tip[data-motion="fadeInLeft"] {
	-webkit-animation-name: pops-motion-fadeInLeft;
	animation-name: pops-motion-fadeInLeft;
}
.pops-tip[data-motion="fadeOutLeft"] {
	-webkit-animation-name: pops-motion-fadeOutLeft;
	animation-name: pops-motion-fadeOutLeft;
}
.pops-tip[data-motion="fadeInRight"] {
	-webkit-animation-name: pops-motion-fadeInRight;
	animation-name: pops-motion-fadeInRight;
}

/* github的样式 */
.pops-tip.github-tooltip {
	--tooltip-bg-opacity: 1;
	--tooltip-color: #ffffff;
	--tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));
	--tooltip-bd-radius: 6px;
	--tooltip-padding-top: 6px;
	--tooltip-padding-right: 8px;
	--tooltip-padding-bottom: 6px;
	--tooltip-padding-left: 8px;

	--tooltip-arrow--after-color: rgb(255, 255, 255);
	--tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));
	--tooltip-arrow--after-width: 8px;
	--tooltip-arrow--after-height: 8px;
}

@media (prefers-color-scheme: dark) {
	.pops-tip {
		--tooltip-color: #ffffff;
		--tooltip-bg-color: #fafafa;
		--tooltip-arrow--after-color: #fafafa;
		--tooltip-arrow--after-bg-color: rgb(250, 250, 250, var(--pops-bg-opacity));
	}
}
`,ui=`.pops[type-value="drawer"] {
	position: fixed;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	box-shadow:
		0px 16px 48px 16px rgba(0, 0, 0, 0.08),
		0px 12px 32px rgba(0, 0, 0, 0.12),
		0px 8px 16px -8px rgba(0, 0, 0, 0.16);
	overflow: hidden;
	transition: all 0.3s;
}

.pops[type-value="drawer"][direction="top"] {
	width: 100%;
	left: 0;
	right: 0;
	top: 0;
}
.pops[type-value="drawer"][direction="bottom"] {
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0;
}
.pops[type-value="drawer"][direction="left"] {
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
}
.pops[type-value="drawer"][direction="right"] {
	height: 100%;
	top: 0;
	bottom: 0;
	right: 0;
}
`,bi=`.pops-folder-list {
	--folder-arrow-fill-color: #d4d7de;
	--folder-arrow-active-fill-color: #06a7ff;
	--header-breadcrumb-text-color: #06a7ff;
	--header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);
	--header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);
	--header-breadcrumb-all-files-last-text-color: #999999;
	--table-header-row-text-color: #818999;
	--table-body-td-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));
	--table-body-th-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));
	--table-body-row-text-color: #05082c;
	--table-body-row-file-name-text-color: #05082c;
	--table-body-row-hover-bd-color: rgb(245, 246, 247, var(--pops-bg-opacity));
	--table-body-row-hover-bg-color: rgb(245, 246, 247, var(--pops-bg-opacity));
	--table-body-row-file-name-hover-text-color: #06a7ff;
	--table-body-row-content-text-color: #818999;
}
.pops-folder-list .cursor-p {
	cursor: pointer;
}
.pops-folder-list a {
	background: 0 0;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	color: var(--header-breadcrumb-text-color);
}
table.pops-folder-list-table__body,
table.pops-folder-list-table__header {
	width: 100%;
	table-layout: fixed;
	border-collapse: collapse;
	border-spacing: 0;
	padding: 0 20px;
}
table.pops-folder-list-table__body,
table.pops-folder-list-table__header {
	height: 100%;
	background: 0 0;
	overflow: hidden;
	display: -webkit-box;
	display: -ms-flexbox;
	-ms-flex-direction: column;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
}
table.pops-folder-list-table__body {
	height: 100%;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.pops-folder-list table tr {
	line-height: normal;
	align-content: center;
}
.pops-folder-list-table__header-row {
	height: 50px;
	line-height: normal;
	align-content: center;
	color: var(--table-header-row-text-color);
	text-align: left;
	font-size: 12px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.pops-folder-list-table__body-row {
	height: 50px;
	line-height: normal;
	align-content: center;
	color: var(--table-body-row-text-color);
	font-size: 12px;
}
.pops-folder-list-table__body-row:hover {
	background-color: var(--table-body-row-hover-bg-color);
	border-color: var(--table-body-row-hover-bd-color);
	border: 0;
	outline: none;
}
.pops-folder-list table th {
	border: 0;
	border-bottom: 1px solid var(--table-body-th-text-color);
}
.pops-folder-list table td {
	border: 0;
	border-bottom: 1px solid var(--table-body-td-text-color);
	position: relative;
}
.pops-folder-list .list-name-text {
	display: inline-block;
	padding-left: 12px;
	line-height: normal;
	align-content: center;
	max-width: 176px;
}
.pops-folder-list-file-name > div {
	display: flex;
	align-items: center;
}

.pops-mobile-folder-list-file-name {
	display: flex;
	align-items: center;
}
.pops-mobile-folder-list-file-name > div {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 6px 0px;
	flex-direction: column;
}
.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon {
	width: 45px;
	height: 45px;
}
.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {
	padding-left: unset;
	max-width: 250px;
	overflow-x: hidden;
	font-weight: 400;
	line-height: unset;
	margin-bottom: 4px;
	white-space: normal;
	text-overflow: unset;
}

/* 修改滚动 */
.pops-folder-content {
	overflow: hidden !important;
}
.pops-folder-content .pops-folder-list {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.pops-folder-content .pops-folder-list-table__body-div {
	height: 100%;
	flex: 1 auto;
	overflow: auto;
	padding-bottom: 0;
}
.pops-mobile-folder-content .pops-folder-list-table__body-div {
	height: 100%;
	flex: 1 auto;
	overflow: auto;
	padding-bottom: 0;
}
.pops-folder-content table.pops-folder-list-table__body {
	overflow: auto;
}
.pops-folder-content .pops-folder-list-table__header-div {
	flex: 0;
}
.pops-mobile-folder-content .pops-folder-list-table__header-div {
	display: none;
}

.pops-folder-list .pops-folder-list-file-name-title-text {
	color: var(--table-body-row-file-name-text-color);
}
.pops-folder-list .pops-folder-list-file-name-title-text:hover {
	text-decoration: none;
	color: var(--table-body-row-file-name-hover-text-color);
}
.pops-folder-list .text-ellip {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.pops-folder-list .content {
	color: var(--table-body-row-content-text-color);
	position: relative;
	width: 100%;
	text-align: left;
}
.pops-folder-list .inline-block-v-middle {
	display: inline-block;
	vertical-align: middle;
}
.pops-folder-list .flex-a-i-center {
	display: flex;
	align-items: center;
}
.pops-folder-list .u-file-icon {
	display: inline-block;
	vertical-align: middle;
}
.pops-folder-list .u-file-icon--list {
	width: 32px;
	height: 32px;
}
.pops-folder-list .pops-folder-list-file-icon {
	line-height: normal;
	align-content: center;
	position: relative;
	vertical-align: middle;
}
.pops-folder-list .pops-folder-file-list-breadcrumb-primary {
	flex: 1;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	min-height: 17px;
	flex-wrap: wrap;
}
.pops-folder-list .pops-folder-list-table__sort {
	display: inline-flex;
	margin-left: 4px;
	flex-direction: column;
}

.pops-folder-list .pops-folder-icon-arrow {
	width: 10px;
	height: 10px;
	fill: var(--folder-arrow-fill-color);
}
.pops-folder-list .pops-folder-icon-active {
	fill: var(--folder-arrow-active-fill-color);
}
.pops-folder-list .pops-folder-file-list-breadcrumb {
	padding: 4px 20px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: start;
	-webkit-justify-content: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	min-height: 35px;
}
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles {
	font-size: 12px;
	color: var(--header-breadcrumb-all-files-text-color);
	line-height: normal;
	align-content: center;
	font-weight: 700;
	display: inline-block;
	max-width: 140px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-wrap: normal;
}
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a {
	color: var(--header-breadcrumb-all-files-last-text-color);
}
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {
	font-size: 14px;
	color: var(--header-breadcrumb-all-files-first-text-color);
}
.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {
	width: 16px;
	height: 16px;
}
.pops-folder-list .iconArrow {
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)
		55% 50%/6px 9px no-repeat;
}

@media (prefers-color-scheme: dark) {
	.pops[type-value="folder"] {
		--pops-title-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));
		--pops-bottom-btn-controls-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));
	}
	.pops-folder-list {
		--header-breadcrumb-text-color: #06a7ff;
		--header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);
		--header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);
		--header-breadcrumb-all-files-last-text-color: #818999;
		--table-body-row-text-color: #f7f8fa;
		--table-body-td-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));
		--table-body-th-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));
		--table-body-td-text-color: #495366;
		--table-body-row-hover-bd-color: #1f2022;
		--table-body-row-hover-bg-color: #1f2022;
		--table-body-row-file-name-text-color: #f7f8fa;
	}
}
`,hi=`.pops[type-value="panel"] {
	--pops-bg-color: #f2f2f2;
	--pops-color: #333333;
	--panel-title-bg-color: #ffffff;

	--panel-aside-bg-color: #ffffff;
	--panel-aside-hover-color: rgb(64, 158, 255);
	--panel-aside-hover-bg-color: rgba(64, 158, 255, 0.1);

	--pops-panel-forms-margin-top-bottom: 10px;
	--pops-panel-forms-margin-left-right: 20px;
	--pops-panel-forms-header-icon-size: calc(var(--pops-panel-forms-container-li-padding-left-right) + 1px);
	--pops-panel-forms-header-padding-top-bottom: 15px;
	--pops-panel-forms-header-padding-left-right: 10px;
	--pops-panel-forms-container-item-left-text-gap: 6px;
	--pops-panel-forms-container-item-left-desc-text-size: 0.8em;
	--pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;
	--pops-panel-forms-container-item-bg-color: #ffffff;
	--pops-panel-forms-container-item-title-color: #333;
	--pops-panel-forms-container-item-border-radius: 6px;
	--pops-panel-forms-container-item-margin-top-bottom: 10px;
	--pops-panel-forms-container-item-margin-left-right: var(--pops-panel-forms-margin-left-right);
	--pops-panel-forms-container-li-border-color: var(--pops-bd-color);
	--pops-panel-forms-container-li-padding-top-bottom: 12px;
	--pops-panel-forms-container-li-padding-left-right: 16px;

	--pops-panel-forms-container-deepMenu-item-active-bg: #e9e9e9;
}
.pops[type-value="panel"] {
	color: var(--pops-color);
	background: var(--pops-bg-color);
}
.pops[type-value] .pops-panel-title {
	background: var(--panel-title-bg-color);
}

/* ↓panel的CSS↓ */
/* 左侧的列表 */
aside.pops-panel-aside {
	box-sizing: border-box;
	flex-shrink: 0;
	max-width: 200px;
	min-width: 100px;
	height: 100%;
	background: var(--panel-aside-bg-color);
	border-right: 1px solid var(--panel-aside-bg-color);
	font-size: 0.9em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
aside.pops-panel-aside {
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
aside.pops-panel-aside .pops-panel-aside-top-container {
	overflow: auto;
}
aside.pops-panel-aside ul li {
	margin: 6px 8px;
	border-radius: 4px;
	padding: 6px 10px;
	cursor: default;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
aside.pops-panel-aside .pops-is-visited,
aside.pops-panel-aside ul li:not(.pops-panel-disabled-aside-hover-css):hover {
	color: var(--panel-aside-hover-color);
	background: var(--panel-aside-hover-bg-color);
}
/* 左侧的列表 */

.pops-panel-content {
	display: flex;
	flex-direction: row;
	flex: 1;
	overflow: auto;
	flex-basis: auto;
	box-sizing: border-box;
	min-width: 0;
	bottom: 0 !important;
}

.pops-panel-section-wrapper {
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}

section.pops-panel-container {
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}
section.pops-panel-container .pops-panel-container-header-ul,
section.pops-panel-container .pops-panel-deepMenu-container-header-ul {
	border-bottom: 1px solid rgba(223, 223, 223, var(--pops-bg-opacity));
	flex: 0 auto;
}
section.pops-panel-container .pops-panel-container-header-ul li,
section.pops-panel-container .pops-panel-container-header-ul li.pops-panel-container-header-title-text {
	display: flex;
	justify-content: flex-start !important;
	margin: 0px !important;
	padding: var(--pops-panel-forms-header-padding-top-bottom)
		calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right));
	text-align: left;
}
section.pops-panel-container ul.pops-panel-container-main-ul {
	overflow: auto;
	/*flex: 1;*/
}
section.pops-panel-container > ul li:not(.pops-panel-forms-container-item) {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: var(--pops-panel-forms-margin-top-bottom)
		calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-margin-left-right));
	gap: 10px;
}
section.pops-panel-container .pops-panel-forms-container-item-header-text {
	margin: 10px;
	margin-left: calc(
		var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right)
	);
	font-size: 0.9em;
	text-align: left;
	color: var(--pops-panel-forms-container-item-title-color);
}
section.pops-panel-container li.pops-panel-forms-container-item {
	/* 去除<li>左侧的圆点 */
	display: block;
}
section.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist {
	border-radius: var(--pops-panel-forms-container-item-border-radius);
	background: var(--pops-panel-forms-container-item-bg-color);
	margin: var(--pops-panel-forms-container-item-margin-top-bottom) var(--pops-panel-forms-margin-left-right);
}
section.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--pops-panel-forms-container-li-padding-top-bottom)
		var(--pops-panel-forms-container-li-padding-left-right);
	margin: 0px 0px;
	border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);
	text-align: left;
}
/*section.pops-panel-container
	.pops-panel-forms-container-item
	ul
	li.pops-panel-deepMenu-nav-item {
	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px;
	margin: 0px var(--pops-panel-forms-container-li-padding-left-right);
	border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);
}*/
section.pops-panel-container
	.pops-panel-forms-container-item
	ul.pops-panel-forms-container-item-formlist
	li:last-child {
	border: 0px;
}
/* 左侧的文字 */
section.pops-panel-container .pops-panel-item-left-text {
	display: flex;
	flex-direction: column;
	gap: var(--pops-panel-forms-container-item-left-text-gap);
}

/* 左侧的主文字 */
/*section.pops-panel-container .pops-panel-item-left-main-text {
	
}*/
/* 左侧的描述文字 */
section.pops-panel-container .pops-panel-item-left-desc-text {
	font-size: var(--pops-panel-forms-container-item-left-desc-text-size);
	color: var(--pops-panel-forms-container-item-left-desc-text-color);
}

/* 折叠面板 */
section.pops-panel-container .pops-panel-forms-fold {
	border-radius: var(--pops-panel-forms-container-item-border-radius);
	background: var(--pops-panel-forms-container-item-bg-color);
	margin: var(--pops-panel-forms-margin-top-bottom) var(--pops-panel-forms-margin-left-right);
}
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container {
	display: flex;
	align-items: center;
	fill: #6c6c6c;
	justify-content: space-between;
	margin: 0px var(--pops-panel-forms-container-li-padding-left-right) !important;
	padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px !important;
}
section.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-fold-container-icon {
	transform: rotate(90deg);
}
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container-icon {
	width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
	transform: rotate(-90deg);
	transition: transform 0.3s;
}
/* 折叠状态 */
section.pops-panel-container
	.pops-panel-forms-fold[data-fold-enable]
	.pops-panel-forms-container-item-formlist {
	height: 0;
}
/* 非折叠状态 */
section.pops-panel-container .pops-panel-forms-fold ul.pops-panel-forms-container-item-formlist {
	margin: 0;
}
section.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-container-item-formlist {
	transition: height 0.3s;
	overflow: hidden;
	border-radius: unset;
	background: unset;
	margin: 0;
	height: calc-size(auto, size);
}
/* 折叠面板 */

/* 姑且认为小于600px的屏幕为移动端 */
@media (max-width: 600px) {
	/* 兼容移动端CSS */
	.pops[type-value="panel"] {
		--pops-panel-forms-margin-left-right: 10px;
	}
	.pops[type-value="panel"] {
		width: 92%;
		width: 92vw;
		width: 92dvw;
	}
	.pops[type-value="panel"] .pops-panel-content aside.pops-panel-aside {
		max-width: 20%;
		min-width: auto;
	}
	.pops[type-value="panel"] section.pops-panel-container .pops-panel-forms-container-item > div {
		text-align: left;
		--pops-panel-forms-margin-left-right: 0px;
	}
	.pops[type-value="panel"] section.pops-panel-container .pops-panel-forms-container-item ul {
		margin: 0px !important;
	}
	.pops[type-value="panel"] section.pops-panel-container > ul > li {
		margin: 10px 10px;
	}
	.pops[type-value="panel"] section.pops-panel-container > ul > li div:nth-child(2) {
		max-width: 55%;
	}
	.pops[type-value="panel"] section.pops-panel-container .pops-panel-select select {
		min-width: 88px !important;
		width: -webkit-fill-available;
		width: -moz-available;
	}
	.pops[type-value="panel"] section.pops-panel-container .pops-panel-container-header-ul li {
		font-size: 16px;
	}
	.pops[type-value="panel"] .pops-panel-title p[pops],
	.pops[type-value="panel"] section.pops-panel-container > ul li,
	.pops[type-value="panel"] aside.pops-panel-aside ul li {
		font-size: 14px;
	}
}
/* switch的CSS */
.pops-panel-switch {
	--panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
	--panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
	--panel-switch-circle-color: #dcdfe6;
	--panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	--panel-switch-checked-circle-color: #409eff;
	--panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));
	--panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));
}
.pops-panel-switch {
	display: inline-flex;
	flex-direction: row-reverse;
	align-items: center;
	position: relative;
	font-size: 14px;
	line-height: normal;
	align-content: center;
	height: 32px;
	vertical-align: middle;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
}
.pops-panel-switch input.pops-panel-switch__input {
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;
	margin: 0;
}
.pops-panel-switch:has(input.pops-panel-switch__input:disabled),
.pops-panel-switch[data-disabled],
.pops-panel-switch[data-disabled] .pops-panel-switch__core,
.pops-panel-switch input.pops-panel-switch__input:disabled + .pops-panel-switch__core {
	cursor: not-allowed;
	opacity: 0.6;
}
.pops-panel-switch span.pops-panel-switch__core {
	display: inline-flex;
	position: relative;
	align-items: center;
	min-width: 40px;
	height: 20px;
	border: 1px solid var(--panel-switch-core-bd-color);
	outline: 0;
	border-radius: 10px;
	box-sizing: border-box;
	background: var(--panel-switch-core-bg-color);
	cursor: pointer;
	transition:
		border-color 0.3s,
		background-color 0.3s;
}
.pops-panel-switch .pops-panel-switch__action {
	position: absolute;
	left: 1px;
	border-radius: 100%;
	transition: all 0.3s;
	width: 16px;
	height: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--panel-switch-circle-bg-color);
	color: var(--panel-switch-circle-color);
}
.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {
	border-color: var(--panel-switch-checked-core-bd-color);
	background-color: var(--panel-switch-checked-core-bg-color);
}
.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {
	left: calc(100% - 17px);
	color: var(--panel-switch-checked-circle-color);
}
/* switch的CSS */

/* slider旧的CSS */
section.pops-panel-container .pops-panel-slider:has(> input[type="range"]) {
	overflow: hidden;
	height: 25px;
	line-height: normal;
	align-content: center;
	display: flex;
	align-items: center;
}
section.pops-panel-container .pops-panel-slider input[type="range"] {
	height: 6px;
	background: rgb(228, 231, 237, var(--pops-bg-opacity));
	outline: 0;
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
}
section.pops-panel-container .pops-panel-slider input[type="range"]::-webkit-slider-thumb {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	box-shadow:
		0 0 2px rgba(0, 0, 0, 0.3),
		0 3px 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	-webkit-appearance: none;
	appearance: none;
	border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;
}
section.pops-panel-container .pops-panel-slider input[type="range"]::-moz-range-thumb {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
	box-shadow:
		0 0 2px rgba(0, 0, 0, 0.3),
		0 3px 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	-webkit-appearance: none;
	appearance: none;
}
section.pops-panel-container .pops-panel-slider input[type="range"]::-moz-range-progress {
	height: 6px;
	border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;
}
/* slider旧的CSS */

/* slider的CSS */
.pops-slider {
	--pops-slider-color-white: #ffffff;
	--pops-slider-color-primary: #409eff;
	--pops-slider-color-info: #909399;
	--pops-slider-text-color-placeholder: #a8abb2;
	--pops-slider-border-color-light: #e4e7ed;
	--pops-slider-border-radius-circle: 100%;
	--pops-slider-transition-duration-fast: 0.2s;

	--pops-slider-main-bg-color: var(--pops-slider-color-primary);
	--pops-slider-runway-bg-color: var(--pops-slider-border-color-light);
	--pops-slider-stop-bg-color: var(--pops-slider-color-white);
	--pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);
	--pops-slider-border-radius: 3px;
	--pops-slider-height: 6px;
	--pops-slider-button-size: 20px;
	--pops-slider-button-wrapper-size: 36px;
	--pops-slider-button-wrapper-offset: -15px;
}

.pops-slider {
	width: 100%;
	height: 32px;
	display: flex;
	align-items: center;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
}

.pops-slider-width {
	flex: 0 0 52%;
	margin-left: 10px;
}

.pops-slider__runway {
	flex: 1;
	height: var(--pops-slider-height);
	background-color: var(--pops-slider-runway-bg-color);
	border-radius: var(--pops-slider-border-radius);
	position: relative;
	cursor: pointer;
}

.pops-slider__runway.show-input {
	margin-right: 30px;
	width: auto;
}

.pops-slider__runway.pops-slider-is-disabled {
	cursor: default;
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {
	background-color: var(--pops-slider-disabled-color);
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {
	border-color: var(--pops-slider-disabled-color);
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {
	cursor: not-allowed;
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {
	transform: scale(1);
}

.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,
.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {
	cursor: not-allowed;
}

.pops-slider__input {
	flex-shrink: 0;
	width: 130px;
}

.pops-slider__bar {
	height: var(--pops-slider-height);
	background-color: var(--pops-slider-main-bg-color);
	border-top-left-radius: var(--pops-slider-border-radius);
	border-bottom-left-radius: var(--pops-slider-border-radius);
	position: absolute;
}

.pops-slider__button-wrapper {
	height: var(--pops-slider-button-wrapper-size);
	width: var(--pops-slider-button-wrapper-size);
	position: absolute;
	z-index: 1;
	top: var(--pops-slider-button-wrapper-offset);
	transform: translate(-50%);
	background-color: transparent;
	text-align: center;
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	line-height: normal;
	outline: none;
}

.pops-slider__button-wrapper:after {
	display: inline-block;
	content: "";
	height: 100%;
	vertical-align: middle;
}

.pops-slider__button:hover,
.pops-slider__button.hover {
	cursor: grab;
}

.pops-slider__button {
	display: inline-block;
	width: var(--pops-slider-button-size);
	height: var(--pops-slider-button-size);
	vertical-align: middle;
	border: solid 2px var(--pops-slider-main-bg-color);
	background-color: var(--pops-slider-color-white);
	border-radius: 50%;
	box-sizing: border-box;
	transition: var(--pops-slider-transition-duration-fast);
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}

.pops-slider__button:hover,
.pops-slider__button.hover,
.pops-slider__button.dragging {
	transform: scale(1.2);
}

.pops-slider__button:hover,
.pops-slider__button.hover {
	cursor: grab;
}

.pops-slider__button.dragging {
	cursor: grabbing;
}

.pops-slider__stop {
	position: absolute;
	height: var(--pops-slider-height);
	width: var(--pops-slider-height);
	border-radius: var(--pops-slider-border-radius-circle);
	background-color: var(--pops-slider-stop-bg-color);
	transform: translate(-50%);
}

.pops-slider__marks {
	top: 0;
	left: 12px;
	width: 18px;
	height: 100%;
}

.pops-slider__marks-text {
	position: absolute;
	transform: translate(-50%);
	font-size: 14px;
	color: var(--pops-slider-color-info);
	margin-top: 15px;
	white-space: pre;
}

.pops-slider.is-vertical {
	position: relative;
	display: inline-flex;
	width: auto;
	height: 100%;
	flex: 0;
}

.pops-slider.is-vertical .pops-slider__runway {
	width: var(--pops-slider-height);
	height: 100%;
	margin: 0 16px;
}

.pops-slider.is-vertical .pops-slider__bar {
	width: var(--pops-slider-height);
	height: auto;
	border-radius: 0 0 3px 3px;
}

.pops-slider.is-vertical .pops-slider__button-wrapper {
	top: auto;
	left: var(--pops-slider-button-wrapper-offset);
	transform: translateY(50%);
}

.pops-slider.is-vertical .pops-slider__stop {
	transform: translateY(50%);
}

.pops-slider.is-vertical .pops-slider__marks-text {
	margin-top: 0;
	left: 15px;
	transform: translateY(50%);
}

.pops-slider--large {
	height: 40px;
}

.pops-slider--small {
	height: 24px;
}
/* slider的CSS */

/* input的CSS */
.pops-panel-input {
	--el-disabled-text-color: #a8abb2;
	--el-disabled-bg-color: #f5f7fa;
	--el-disabled-border-color: #e4e7ed;

	--pops-panel-components-input-text-color: #000000;
	--pops-panel-components-input-text-bg-color: transparent;
	--pops-panel-components-input-text-default-padding: 8px;
	--pops-panel-components-input-bd-color: #dcdfe6;
	--pops-panel-components-input-bg-color: #ffffff;
	--pops-panel-components-input-hover-bd-color: #c0c4cc;
	--pops-panel-components-input-focus-bd-color: #409eff;
	--pops-panel-components-input-suffix-color: #a8abb2;
	--pops-panel-components-input-suffix-bg-color: #ffffff;
}
.pops-panel-input {
	display: flex;
	align-items: center;
	border: 1px solid var(--pops-panel-components-input-bd-color);
	border-radius: 4px;
	background-color: var(--pops-panel-components-input-bg-color);
	position: relative;
	box-shadow: none;
}
.pops-panel-input:hover {
	border: 1px solid var(--pops-panel-components-input-hover-bd-color);
}
.pops-panel-input:has(input:disabled):hover {
	--pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);
}
.pops-panel-input:has(input:focus) {
	outline: 0;
	border: 1px solid var(--pops-panel-components-input-focus-bd-color);
	border-radius: 4px;
	box-shadow: none;
}
.pops-panel-input input {
	display: inline-flex;
	justify-content: center;
	text-align: start;
	align-items: center;
	align-content: center;
	white-space: nowrap;
	cursor: text;
	box-sizing: border-box;
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	vertical-align: middle;
	-webkit-appearance: none;
	appearance: none;
	color: var(--pops-panel-components-input-text-color);
	background-color: var(--pops-panel-components-input-text-bg-color);
	outline: 0;
	transition: 0.1s;
	border: 0;
	font-size: 14px;
	font-weight: 500;
	line-height: normal;
	height: 32px;
	width: 100%;
	flex: 1;
	/*margin-right: calc(1em + 8px);*/
	margin: 0px;
	padding: var(--pops-panel-components-input-text-default-padding);
}
.pops-panel-input span.pops-panel-input__suffix {
	display: inline-flex;
	white-space: nowrap;
	flex-shrink: 0;
	flex-wrap: nowrap;
	height: 100%;
	text-align: center;
	color: var(--pops-panel-components-input-suffix-color);
	background: var(--pops-panel-components-input-suffix-bg-color);
	transition: all 0.3s;
	pointer-events: none;
	padding: 0 8px;
	position: absolute;
	right: 0px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	border: 1px solid transparent;
}
.pops-panel-input span.pops-panel-input__suffix-inner {
	pointer-events: all;
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
/* 如果包含清空图标的按钮，则默认隐藏清空图标，当:hover、:focus、:focus-within、:active时显示清空图标 */
.pops-panel-input span.pops-panel-input__suffix:has(svg[data-type="circleClose"]) {
	display: none;
}
.pops-panel-input:hover span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),
.pops-panel-input:focus span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),
.pops-panel-input:focus-within span.pops-panel-input__suffix:has(svg[data-type="circleClose"]),
.pops-panel-input:active span.pops-panel-input__suffix:has(svg[data-type="circleClose"]) {
	display: inline-flex;
}
.pops-panel-input .pops-panel-icon {
	cursor: pointer;
}
.pops-panel-input .pops-panel-icon {
	height: inherit;
	line-height: normal;
	align-content: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s;
}
.pops-panel-input .pops-panel-icon svg {
	height: 1em;
	width: 1em;
}

.pops-input-disabled {
	background-color: var(--pops-components-is-disabled-bg-color);
}
.pops-panel-input.pops-input-disabled:hover {
	--pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);
}
.pops-panel-input input:disabled,
.pops-panel-input input:disabled + .pops-panel-input__suffix {
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	color: var(--el-disabled-text-color);
	-webkit-text-fill-color: var(--el-disabled-text-color);
	cursor: not-allowed;
}
.pops-panel-input input:disabled + .pops-panel-input__suffix {
	display: none;
}
/* input的CSS */

/* textarea的CSS */
.pops-panel-textarea {
	--pops-panel-components-textarea-text-color: #000000;
	--pops-panel-components-textarea-text-bg-color: #ffffff;
	--pops-panel-components-textarea-bd-color: #dcdfe6;
	--pops-panel-components-textarea-hover-bd-color: #c0c4cc;
	--pops-panel-components-textarea-focus-bd-color: #409eff;
}
.pops-panel-textarea textarea {
	width: 100%;
	/*vertical-align: bottom;*/
	position: relative;
	display: block;
	resize: none;
	padding: 5px 11px;
	/*line-height: 1;*/
	box-sizing: border-box;
	font-size: inherit;
	font-family: inherit;
	color: var(--pops-panel-components-textarea-text-color);
	background-color: var(--pops-panel-components-textarea-text-bg-color);
	background-image: none;
	-webkit-appearance: none;
	appearance: none;
	box-shadow: none;
	border-radius: 0;
	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	border: 1px solid var(--pops-panel-components-textarea-bd-color);
}
.pops-panel-textarea textarea:hover {
	border-color: var(--pops-panel-components-textarea-hover-bd-color);
}
.pops-panel-textarea:has(textarea:disabled):hover {
	--pops-panel-components-textarea-hover-bd-color: var(--pops-panel-components-textarea-bd-color);
}
.pops-panel-textarea-disable {
	--pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color) !important;
	--pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);
}
.pops-panel-textarea-disable textarea {
	cursor: not-allowed;
}
.pops-panel-textarea textarea:focus {
	outline: 0;
	border-color: var(--pops-panel-components-textarea-focus-bd-color);
}
/* textarea的CSS */

/* select的CSS */
.pops-panel-select {
	--pops-panel-components-select-text-color: #000000;
	--pops-panel-components-select-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));
	--pops-panel-components-select-hover-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));
	--pops-panel-components-select-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
}
.pops-panel-select {
	border: 0;
}
.pops-panel-select select {
	height: 32px;
	line-height: normal;
	align-content: center;
	min-width: 200px;
	border: 1px solid var(--pops-panel-components-select-bd-color);
	border-radius: 5px;
	text-align: center;
	outline: 0;
	color: var(--pops-panel-components-select-text-color);
	background-color: var(--pops-panel-components-select-bg-color);
	box-shadow: none;
}
.pops-panel-select select:hover {
	border: 1px solid var(--pops-panel-components-select-hover-bd-color);
}
.pops-panel-select-disable {
	--pops-panel-components-select-text-color: var(--pops-components-is-disabled-text-color);
	--pops-panel-components-select-bg-color: var(--pops-components-is-disabled-bg-color);
}
.pops-panel-select-disable select {
	cursor: not-allowed;
}
.pops-panel-select-disable select:hover {
	box-shadow: none;
	--pops-panel-components-select-hover-bd-color: var(--pops-panel-components-select-bd-color);
}
.pops-panel-select select:focus {
	border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));
	box-shadow: none;
}
/* select的CSS */

/* select-multiple的CSS*/
.pops-panel-select-multiple {
	--el-border-radius-base: 4px;
	--el-fill-color-blank: #ffffff;
	--el-transition-duration: 0.3s;
	--el-border-color: #cbcbcb;
	--el-text-color-placeholder: #a8abb2;
	--color: inherit;
	--el-select-input-color: #a8abb2;
	--el-select-input-font-size: 14px;
	--el-text-color-regular: #606266;
	--el-color-info: #909399;
	--el-color-info-light-9: #f4f4f5;
	--el-color-info-light-8: #e9e9eb;
	--el-color-primary-light-9: #ecf5ff;
	--el-color-primary-light-8: #d9ecff;
	--el-color-primary: #409eff;
	--el-color-white: #ffffff;
	width: 200px;
}
.pops-panel-select-multiple .el-select__wrapper {
	display: flex;
	align-items: center;
	position: relative;
	box-sizing: border-box;
	cursor: pointer;
	text-align: left;
	font-size: 14px;
	padding: 4px 12px;
	gap: 6px;
	min-height: 32px;
	line-height: normal;
	align-content: center;
	border-radius: var(--el-border-radius-base);
	background-color: var(--el-fill-color-blank);
	transition: var(--el-transition-duration);
	transform: translateZ(0);
	border: 1px solid var(--el-border-color);
}
.pops-panel-select-multiple .el-select__wrapper.is-focused {
	--el-border-color: var(--el-color-primary);
}
.pops-panel-select-multiple .el-select__selection {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex: 1;
	min-width: 0;
	gap: 6px;
}
.pops-panel-select-multiple .el-select__selected-item {
	display: flex;
	flex-wrap: wrap;
	-webkit-user-select: none;
	user-select: none;
}
.pops-panel-select-multiple .el-select__selected-item.el-select__choose_tag .el-tag {
	max-width: 200px;
}
.pops-panel-select-multiple .el-select__input-wrapper {
	max-width: 100%;
}
.pops-panel-select-multiple .el-select__selection.is-near {
	margin-left: -8px;
}
.pops-panel-select-multiple .el-select__placeholder {
	position: absolute;
	display: block;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--el-input-text-color, var(--el-text-color-regular));
}
.pops-panel-select-multiple .el-select__placeholder.is-transparent {
	-webkit-user-select: none;
	user-select: none;
	color: var(--el-text-color-placeholder);
}
.pops-panel-select-multiple .el-select__prefix,
.pops-panel-select-multiple .el-select__suffix {
	display: flex;
	align-items: center;
	flex-shrink: 0;
	gap: 6px;
	color: var(--el-input-icon-color, var(--el-text-color-placeholder));
}
.pops-panel-select-multiple .el-icon {
	--color: inherit;
	height: 1em;
	width: 1em;
	line-height: normal;
	align-content: center;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	fill: currentColor;
	color: var(--color);
	font-size: inherit;
}
.pops-panel-select-multiple .el-icon svg {
	height: 1em;
	width: 1em;
}
.pops-panel-select-multiple .el-select__caret {
	color: var(--el-select-input-color);
	font-size: var(--el-select-input-font-size);
	transition: var(--el-transition-duration);
	transform: rotate(0);
	cursor: pointer;
}
.pops-panel-select-multiple .el-tag {
	--el-tag-font-size: 12px;
	--el-tag-border-radius: 4px;
	--el-tag-border-radius-rounded: 9999px;
}
.pops-panel-select-multiple .el-tag {
	background-color: var(--el-tag-bg-color);
	border-color: var(--el-tag-border-color);
	color: var(--el-tag-text-color);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	height: 24px;
	padding: 0 9px;
	font-size: var(--el-tag-font-size);
	line-height: normal;
	align-content: center;
	border-width: 1px;
	border-style: solid;
	border-radius: var(--el-tag-border-radius);
	box-sizing: border-box;
	white-space: nowrap;
	--el-icon-size: 14px;
	--el-tag-bg-color: var(--el-color-primary-light-9);
	--el-tag-border-color: var(--el-color-primary-light-8);
	--el-tag-hover-color: var(--el-color-primary);
}
.pops-panel-select-multiple .el-select__selection .el-tag {
	cursor: pointer;
	border-color: transparent;
}
.pops-panel-select-multiple .el-tag.el-tag--info {
	--el-tag-bg-color: var(--el-color-info-light-9);
	--el-tag-border-color: var(--el-color-info-light-8);
	--el-tag-hover-color: var(--el-color-info);
}
.pops-panel-select-multiple .el-tag.el-tag--info {
	--el-tag-text-color: var(--el-color-info);
}
.pops-panel-select-multiple .el-tag.is-closable {
	padding-right: 5px;
}
.pops-panel-select-multiple .el-select__selection .el-tag .el-tag__content {
	min-width: 0;
}
.pops-panel-select-multiple .el-tag .el-tag__close {
	flex-shrink: 0;
	color: var(--el-tag-text-color);
}
.pops-panel-select-multiple .el-tag .el-tag__close:hover {
	color: var(--el-color-white);
	background-color: var(--el-tag-hover-color);
}
.pops-panel-select-multiple .el-tag .el-icon {
	border-radius: 50%;
	cursor: pointer;
	font-size: calc(var(--el-icon-size) - 2px);
	height: var(--el-icon-size);
	width: var(--el-icon-size);
}
.pops-panel-select-multiple .el-tag .el-tag__close {
	margin-left: 6px;
}
.pops-panel-select-multiple .el-select__tags-text {
	display: block;
	line-height: normal;
	align-content: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.pops-panel-select-multiple-disable {
	--el-fill-color-blank: #f5f7fa;
	--color: #a8abb2;
	--el-border-color: #cbcbcb;
}
.pops-panel-select-multiple-disable .el-tag.el-tag--info {
	--el-tag-bg-color: #e7e7e7;
	--el-tag-text-color: var(--pops-components-is-disabled-text-color);
}
.pops-panel-select-multiple-disable .el-select__selection .el-tag,
.pops-panel-select-multiple-disable .el-tag .el-tag__close:hover,
.pops-panel-select-multiple-disable .el-select__wrapper,
.pops-panel-select-multiple-disable .el-select__caret {
	cursor: not-allowed;
}
/* select-multiple的CSS*/

/* deepMenu的css */
.pops-panel-deepMenu-nav-item {
	cursor: pointer;
}
.pops-panel-deepMenu-nav-item:active {
	background: var(--pops-panel-forms-container-deepMenu-item-active-bg);
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
section.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:active {
	padding: var(--pops-panel-forms-container-li-padding-top-bottom)
		var(--pops-panel-forms-container-li-padding-left-right);
	margin: 0px;
}
/* 去除上个兄弟item的底部边框颜色 */
section.pops-panel-container
	.pops-panel-forms-container-item
	ul
	li:has(+ .pops-panel-deepMenu-nav-item:active) {
	border-bottom: 1px solid transparent;
}
/* 第一个和最后一个跟随圆角 */
section.pops-panel-container
	.pops-panel-forms-container-item
	ul
	li.pops-panel-deepMenu-nav-item:first-child:active {
	border-top-left-radius: var(--pops-panel-forms-container-item-border-radius);
	border-top-right-radius: var(--pops-panel-forms-container-item-border-radius);
}
section.pops-panel-container
	.pops-panel-forms-container-item
	ul
	li.pops-panel-deepMenu-nav-item:last-child:active {
	border-bottom-left-radius: var(--pops-panel-forms-container-item-border-radius);
	border-bottom-right-radius: var(--pops-panel-forms-container-item-border-radius);
}
.pops-panel-deepMenu-nav-item .pops-panel-deepMenu {
	display: flex;
	align-items: center;
	color: #6c6c6c;
	fill: #6c6c6c;
}
.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon {
	width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
}
section.pops-panel-deepMenu-container
	.pops-panel-container-header-ul
	li.pops-panel-deepMenu-container-header {
	display: flex;
	align-items: center;
	width: -webkit-fill-available;
	width: -moz-available;
	padding: var(--pops-panel-forms-header-padding-top-bottom)
		calc(
			var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right) -
				var(--pops-panel-forms-header-icon-size)
		);
	gap: 0px;
}
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {
	width: var(--pops-panel-forms-header-icon-size);
	height: var(--pops-panel-forms-header-icon-size);
	display: flex;
	align-items: center;
	cursor: pointer;
}
/* 修复safari上图标大小未正常显示 */
.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon > svg {
	width: inherit;
	height: inherit;
}
/* deepMenu的css */

/* 文字对齐 */
.pops-panel-item-left-desc-text:has(code) {
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
}

@media (prefers-color-scheme: dark) {
	.pops[type-value="panel"] {
		--pops-bg-color: #000000;
		--pops-color: #f2f2f2;
		--panel-title-bg-color: #000000;
		--panel-aside-bg-color: #262626;
		--pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;
		--pops-panel-forms-container-item-bg-color: #262626;
		--pops-panel-forms-container-item-title-color: #c1c1c1;

		--pops-panel-forms-container-li-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));
		--pops-panel-forms-container-deepMenu-item-active-bg: #333333;
	}
	.pops[type-value="panel"] .pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {
		fill: #f2f2f2;
	}

	/* switch的CSS */
	.pops-panel-switch {
		--panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));
		--panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));
		--panel-switch-circle-color: #dcdfe6;
		--panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
		--panel-switch-checked-circle-color: #409eff;
		--panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));
		--panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));
	}
	/* select的CSS */
	.pops-panel-select {
		--pops-panel-components-select-text-color: #f2f2f2;
		--pops-panel-components-select-bd-color: rgb(51, 51, 51, var(--pops-bd-opacity));
		--pops-panel-components-select-bg-color: #141414;
	}
	/* select-multiple的CSS*/
	.pops-panel-select-multiple {
		--el-fill-color-blank: #141414;
		--el-border-color: #4c4d4f;
		--el-text-color-placeholder: #a8abb2;
		--el-select-input-color: #a8abb2;
		--el-text-color-regular: #606266;
		--el-color-info: #909399;
		--el-color-info-light-8: #e9e9eb;
		--el-color-primary-light-9: #ecf5ff;
		--el-color-primary-light-8: #d9ecff;
		--el-color-primary: #409eff;
		--el-color-white: #ffffff;
	}
	.pops-panel-select-multiple .el-tag {
		--el-color-info-light-9: #202121;
	}
	.pops-panel-select-multiple-disable {
		--el-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));
	}
	.pops-panel-select-multiple-disable .el-tag.el-tag--info {
		--el-tag-bg-color: #2f2f2f;
	}
	/* select-multiple的CSS*/
	/* slider的CSS */
	.pops-slider {
		--pops-slider-border-color-light: #414243;
	}
	/* input的CSS */
	.pops-panel-input {
		--pops-panel-components-input-text-color: #f2f2f2;
		--pops-panel-components-input-bd-color: #4f5052;
		--pops-panel-components-input-bg-color: #141414;
		--pops-panel-components-input-hover-bd-color: #6f7175;
		--pops-panel-components-input-focus-bd-color: #409eff;
		--pops-panel-components-input-suffix-color: #a8abb2;
	}
	/* textarea的CSS */
	.pops-panel-textarea {
		--pops-panel-components-textarea-text-color: #f2f2f2;
		--pops-panel-components-textarea-text-bg-color: #141414;
		--pops-panel-components-textarea-bd-color: #4f5052;
		--pops-panel-components-textarea-hover-bd-color: #6f7175;
		--pops-panel-components-textarea-focus-bd-color: #409eff;
	}
	.pops-panel-textarea-disable {
		--pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);
		--pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color);
	}
	/* slider */
	.pops-slider {
		--pops-slider-text-color-placeholder: #8d9095;
	}
}
`,mi=`.pops-rightClickMenu {
	--pops-right-context-color: #000000;
	--pops-right-context-bg-color: rgb(255, 255, 255, 0.733);
	--pops-right-context-backdrop-filter: blur(10px);
	--pops-right-context-z-index: 10000;
	--pops-right-context-bd-radius: 6px;
	--pops-right-context-menu-shadow-color: rgb(114, 114, 114, 0.251);
	--pops-right-context-menu-row-bd-radius: 6px;
	--pops-right-context-menu-row-visited-color: rgb(0, 0, 0, 0.067);
	--pops-right-context-menu-row-hover-color: rgb(0, 0, 0, 0.067);
}
.pops-rightClickMenu * {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
	scrollbar-width: thin;
}
.pops-rightClickMenu {
	position: fixed;
	z-index: var(--pops-right-context-z-index);
	text-align: center;
	border-radius: var(--pops-right-context-bd-radius);
	font-size: 16px;
	font-weight: 500;
	color: var(--pops-right-context-color);
	background: var(--pops-right-context-bg-color);
	box-shadow: 0 0.25rem 0.5rem 0.125rem var(--pops-right-context-menu-shadow-color);
	-webkit-backdrop-filter: var(--pops-right-context-backdrop-filter);
	backdrop-filter: var(--pops-right-context-backdrop-filter);
}
/* scale动画 */
.pops-rightClickMenu-anim-scale {
	transition:
		opacity 150ms cubic-bezier(0.2, 0, 0.2, 1),
		transform 150ms cubic-bezier(0.2, 0, 0.2, 1);
	transform: scale(0.85);
}
.pops-rightClickMenu-anim-scale-open {
	transform: scale(1);
}
.pops-rightClickMenu-anim-scale-not-open {
	opacity: 0;
}
/* 展开动画 */
.pops-rightClickMenu-anim-grid {
	display: grid;
	transition: 0.3s;
	grid-template-rows: 0fr;
}
.pops-rightClickMenu-anim-show {
	grid-template-rows: 1fr;
}
.pops-rightClickMenu-is-visited {
	background: var(--pops-right-context-menu-row-visited-color);
}
i.pops-rightClickMenu-icon {
	height: 1em;
	width: 1em;
	line-height: normal;
	align-content: center;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	fill: currentColor;
	color: inherit;
	font-size: inherit;
	margin-right: 6px;
}
i.pops-rightClickMenu-icon[is-loading="true"] {
	animation: rotating 2s linear infinite;
}
.pops-rightClickMenu li:hover {
	background: var(--pops-right-context-menu-row-hover-color);
	cursor: pointer;
}
.pops-rightClickMenu ul {
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	overflow: hidden;
}
.pops-rightClickMenu ul li {
	padding: 5px 10px;
	margin: 5px 5px;
	border-radius: var(--pops-right-context-menu-row-bd-radius);
	display: flex;
	width: -webkit-fill-available;
	width: -moz-available;
	text-align: left;
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	align-items: center;
}

@media (prefers-color-scheme: dark) {
	/*.pops-rightClickMenu {
		--pops-right-context-menu-shadow-color: #3c3c3c;
	}*/
}
@media (hover: hover) {
	.pops-rightClickMenu ul li:active {
		transform: scale(0.98);
	}
}
`;const W={index:ti,ninePalaceGridPosition:ni,scrollbar:oi,button:ai,common:ri,anim:ii,alertCSS:si,confirmCSS:li,promptCSS:ci,loadingCSS:fi,iframeCSS:di,tooltipCSS:pi,drawerCSS:ui,folderCSS:bi,panelCSS:hi,rightClickMenu:mi},nt={$data:{},$flag:{isInit:false},init(){if(!this.$flag.isInit){this.$flag.isInit=true;let r=document.createElement("style");ne.setSafeHTML(r,W.anim),p.appendHead(r),this.$data=null,this.$data=p.getKeyFrames(r.sheet),V.setTimeout(()=>{r.remove();},50);}},hasAnim(r){return this.$data.hasOwnProperty(r)}},me={alert:[],confirm:[],drawer:[],folder:[],iframe:[],loading:[],panel:[],prompt:[],rightClickMenu:[],tooltip:[]},be={getMaxZIndexNodeInfo(r=1,e=K.document,t){r=Number.isNaN(r)?1:r;const n=2*Math.pow(10,9);let o=0,a=null;function i(l){return l.position!=="static"&&l.display!=="none"}function s(l){if(typeof t=="function"){let f=t(l);if(typeof f=="boolean"&&!f)return}const c=K.window.getComputedStyle(l);if(i(c)){let f=parseInt(c.zIndex);isNaN(f)||f>o&&(o=f,a=l),l.shadowRoot!=null&&l instanceof ShadowRoot&&l.shadowRoot.querySelectorAll("*").forEach(d=>{s(d);});}}return e.querySelectorAll("*").forEach((l,c)=>{s(l);}),o+=r,o>=n&&(o=n),{node:a,zIndex:o}},getPopsMaxZIndex(r=1){r=Number.isNaN(r)?1:r;const e=2*Math.pow(10,9);let t=0,n=null;function o(i){return i.position!=="static"&&i.display!=="none"}Object.keys(me).forEach(i=>{let s=me[i];for(let l=0;l<s.length;l++){const c=s[l];let f=window.getComputedStyle(c.animElement);if(o(f)){let d=parseInt(f.zIndex);isNaN(d)||d>t&&(t=d,n=c.animElement);}}}),t+=r;let a=t>=e;return a&&(t=e),{zIndex:t,animElement:n,isOverMaxZIndex:a}},getMaxZIndex(r=1){return this.getMaxZIndexNodeInfo(r).zIndex},removeInstance(r,e,t=false){function n(o){typeof o.beforeRemoveCallBack=="function"&&o.beforeRemoveCallBack(o),o?.animElement?.remove(),o?.popsElement?.remove(),o?.maskElement?.remove(),o?.$shadowContainer?.remove();}return r.forEach(o=>{o.forEach((a,i)=>{if(t||a.guid===e){let s=a.animElement.getAttribute("anim");if(nt.hasAnim(s)){let l=s+"-reverse";a.animElement.style.width="100%",a.animElement.style.height="100%",a.animElement.style["animation-name"]=l,nt.hasAnim(a.animElement.style["animation-name"])?p.on(a.animElement,p.getAnimationEndNameList(),function(){n(a);},{capture:true}):n(a);}else n(a);o.splice(i,1);}});}),r},hide(r,e,t,n,o,a){return new Promise(i=>{let s=o.querySelector(".pops[type-value]");if(r==="drawer"){let c=n;V.setTimeout(()=>{a.style.setProperty("display","none"),["top","bottom"].includes(c.direction)?s.style.setProperty("height","0"):["left","right"].includes(c.direction)?s.style.setProperty("width","0"):console.error("未知direction：",c.direction),i();},c.closeDelay);}else {let c=e.find(f=>f.guid===t);if(c){let f=c;if(f.animElement.style.width="100%",f.animElement.style.height="100%",f.animElement.style["animation-name"]=f.animElement.getAttribute("anim")+"-reverse",nt.hasAnim(f.animElement.style["animation-name"])){let d=function(){f.animElement.style.display="none",f.maskElement&&(f.maskElement.style.display="none"),p.off(f.animElement,p.getAnimationEndNameList(),d,{capture:true}),i();};p.on(f.animElement,p.getAnimationEndNameList(),d,{capture:true});}else f.animElement.style.display="none",f.maskElement&&(f.maskElement.style.display="none"),i();}}})},show(r,e,t,n,o,a){return new Promise(i=>{let s=o.querySelector(".pops[type-value]");if(r==="drawer"){let c=n;V.setTimeout(()=>{p.css(a,"display","");let f=c.direction,d=c.size.toString();["top","bottom"].includes(f)?s.style.setProperty("height",d):["left","right"].includes(f)?s.style.setProperty("width",d):console.error("未知direction：",f),i();},c.openDelay??0);}else {let c=e.find(f=>f.guid===t);if(c){let f=c;if(f.animElement.style.width="",f.animElement.style.height="",f.animElement.style["animation-name"]=f.animElement.getAttribute("anim").replace("-reverse",""),nt.hasAnim(f.animElement.style["animation-name"])){let d=function(){p.off(f.animElement,p.getAnimationEndNameList(),d,{capture:true}),i();};f.animElement.style.display="",f.maskElement&&(f.maskElement.style.display=""),p.on(f.animElement,p.getAnimationEndNameList(),d,{capture:true});}else f.animElement.style.display="",f.maskElement&&(f.maskElement.style.display=""),i();}}})},close(r,e,t,n,o){return new Promise(a=>{let i=o.querySelector(".pops[type-value]"),s=n;function l(){function c(d){d.propertyName==="transform"&&(p.off(i,p.getTransitionEndNameList(),void 0,c),be.removeInstance([e],t),a());}if(p.on(i,p.getTransitionEndNameList(),c),getComputedStyle(i).transform!=="none"){p.trigger(i,p.getTransitionEndNameList(),void 0,true);return}["top"].includes(s.direction)?i.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(s.direction)?i.style.setProperty("transform","translateY(100%)"):["left"].includes(s.direction)?i.style.setProperty("transform","translateX(-100%)"):["right"].includes(s.direction)?i.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",s.direction);}r==="drawer"?V.setTimeout(()=>{l();},s.closeDelay):(be.removeInstance([e],t),a());})},drag(r,e){e=Object.assign({limit:true,extraDistance:3,container:K.globalThis,triggerClick:true},e);let t=false,n=0,o=0,a=V.AnyTouch(),i=new a(e.dragElement,{preventDefault(u){return typeof e.preventEvent=="function"?e.preventEvent(u):true}});p.css(e.dragElement,{cursor:"move"});function s(u){let h=u.style.transitionDuration;return globalThis.getComputedStyle(u).transitionDuration!=="0s"&&(u.style.transitionDuration="0s"),()=>{u.style.transitionDuration=h;}}function l(u){return u=u??globalThis,{width:p.width(u),height:p.height(u)}}function c(u){if(u=u??globalThis,V.isWin(u))return {left:0,top:0};{let h=u.getBoundingClientRect();return {left:h.left,top:h.top}}}let f=p.getTransform(r),d=null;i.on("pan",function(u){if(!t){t=true;let m=e.dragElement.getBoundingClientRect();n=u.x-m.left,o=u.y-m.top,f=p.getTransform(r),d=s(r);}let h=u.x-n+f.transformLeft,g=u.y-o+f.transformTop;if(u.phase==="move"){if(e.limit){let m=l(e.container).width-p.width(r)+f.transformLeft,{left:x,top:w}=c(e.container),v=l(e.container).height-p.height(r)+f.transformTop;h>m&&(h=m),g>v&&(g=v),h-e.extraDistance*2<x+f.transformLeft?(h=x+f.transformLeft,h+=e.extraDistance):h-=e.extraDistance,g-e.extraDistance*2<w+f.transformTop?(g=w+f.transformTop,g+=e.extraDistance):g-=e.extraDistance;}typeof e.moveCallBack=="function"&&e.moveCallBack(r,h,g),p.css(r,{left:h+"px",top:g+"px"});}u.phase==="end"&&(t=false,typeof d=="function"&&(d(),d=null),typeof e.endCallBack=="function"&&e.endCallBack(r,h,g));}),e.triggerClick&&i.on(["tap"],function(u){u.changedPoints.forEach(h=>{p.trigger(h.target,"click",void 0,true);});});},sortElementListByProperty(r,e,t=true){if(typeof t!="boolean")throw new TypeError("参数 sortByDesc 必须为boolean类型");if(r==null||e==null)throw new Error("获取前面的值或后面的值的方法不能为空");return function(n,o){var a=r(o),i=e(n);return t?i>a?-1:i<a?1:0:i<a?-1:i>a?1:0}}},I={handlerShadow(r){let e=document.createElement("div");if(e.className="pops-shadow-container",r.useShadowRoot){let t=e.attachShadow({mode:"open"});return {$shadowContainer:e,$shadowRoot:t}}else return {$shadowContainer:e,$shadowRoot:e}},handleInit(r,e){if(nt.init(),!!arguments.length&&r!=null&&e!=null){if(typeof e=="string"){if(e.trim()==="")return;e=[{css:e}];}else e=e.map(t=>typeof t=="string"?{css:t}:t);for(const t of e){let n=p.createElement("style",{},{"data-type":"PopsHandler.handleInit"});n.textContent=t.css,typeof t.name=="string"&&n.setAttribute("data-name",t.name),r.appendChild(n);}}},handleMask(r={}){let e={maskElement:p.parseTextToDOM(r.maskHTML)},t=false;function n(a){p.preventEvent(a);let i=me[r.type];function s(){if(r.config.mask.clickEvent.toClose)return be.close(r.type,i,r.guid,r.config,r.animElement);if(r.config.mask.clickEvent.toHide)return be.hide(r.type,i,r.guid,r.config,r.animElement,e.maskElement)}return typeof r.config.mask.clickCallBack=="function"?r.config.mask.clickCallBack(s,r.config):s(),false}if(r.config.mask.clickEvent.toClose||r.config.mask.clickEvent.toHide){let a=function(i){return !!(i?.localName?.toLowerCase()==="div"&&i.className&&i.className==="pops-anim"&&i.hasAttribute("anim"))};p.on(r.animElement,["touchstart","mousedown"],void 0,i=>{let s=i.composedPath()[0];t=a(s);}),p.on(r.animElement,"click",void 0,i=>{let s=i.composedPath()[0];if(a(s)&&t)return n(i)}),p.on(e.maskElement,"click",void 0,i=>{t=true,n(i);});}return e},handleQueryElement(r,e){return {popsElement:r.querySelector(".pops[type-value"),btnOkElement:r.querySelector(`.pops-${e}-btn-ok`),btnCancelElement:r.querySelector(`.pops-${e}-btn-cancel`),btnOtherElement:r.querySelector(`.pops-${e}-btn-other`),titleElement:r.querySelector(`.pops-${e}-title`),inputElement:r.querySelector(`.pops-${e}-content textarea[pops]`)?r.querySelector(`.pops-${e}-content textarea[pops]`):r.querySelector(`.pops-${e}-content input[pops]`),headerControlsElement:r.querySelector(".pops-header-controls"),iframeElement:r.querySelector("iframe[pops]"),loadingElement:r.querySelector(".pops-loading"),contentElement:r.querySelector(`.pops-${e}-content`),panelSectionWrapper:r.querySelector(`.pops-${e}-section-wrapper`),contentAsideElement:r.querySelector(`.pops-${e}-content aside.pops-${e}-aside`),contentSectionContainerElement:r.querySelector(`.pops-${e}-content section.pops-${e}-container`),contentLoadingElement:r.querySelector(`.pops-${e}-content-global-loading`),headerMinBtnElement:r.querySelector(".pops-header-control[data-type='min']"),headerMaxBtnElement:r.querySelector(".pops-header-control[data-type='max']"),headerMiseBtnElement:r.querySelector(".pops-header-control[data-type='mise']"),headerCloseBtnElement:r.querySelector(".pops-header-control[data-type='close']"),folderListElement:r.querySelector(".pops-folder-list"),folderListHeaderElement:r.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),folderListHeaderRowElement:r.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),folderListBodyElement:r.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),folderFileListBreadcrumbPrimaryElement:r.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),folderListSortFileNameElement:r.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),folderListSortLatestTimeElement:r.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),folderListSortFileSizeElement:r.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventDetails(r,e,t,n,o,a,i,s){return {$shadowContainer:e,$shadowRoot:t,element:o,animElement:o,popsElement:a,maskElement:i,mode:n,guid:r,close(){return be.close(n,me[n],r,s,o)},hide(){return be.hide(n,me[n],r,s,o,i)},show(){return be.show(n,me[n],r,s,o,i)}}},handleLoadingEventDetails(r,e,t,n,o,a){return {element:t,animElement:t,popsElement:n,maskElement:o,mode:e,guid:r,close(){return be.close(e,me[e],r,a,t)},hide(){return be.hide(e,me[e],r,a,t,o)},show(){return be.show(e,me[e],r,a,t,o)}}},handleResultDetails(r){let e=Object.assign({},r);return V.delete(e,"type"),V.delete(e,"function"),e},handleClickEvent(r,e,t,n){p.on(e,"click",o=>{n(Object.assign(t,{type:r}),o);},{capture:true});},handleKeyboardEvent(r,e=[],t){let n=function(o){let a=o.code||o.key,i=o.charCode||o.keyCode||o.which;e.includes("ctrl")&&!o.ctrlKey||e.includes("alt")&&!o.altKey||e.includes("meta")&&!o.metaKey||e.includes("shift")&&!o.shiftKey||(typeof r=="string"&&r===a?t&&t(o):typeof r=="number"&&r===i&&t&&t(o));};return p.on(K.globalThis,"keydown",n,{capture:true}),{removeKeyboardEvent(){p.off(globalThis,"keydown",n,{capture:true});}}},handlePromptClickEvent(r,e,t,n,o){p.on(t,"click",a=>{let i={type:r,text:e.value};o(Object.assign(n,i),a);},{capture:true});},handleZIndex(r){return typeof r=="function"?r():r},handleOnly(r,e){if(e.only)if(r==="loading"||r==="tooltip"||r==="rightClickMenu"){let t=me[r];t&&be.removeInstance([t],"",true);}else be.removeInstance([me.alert,me.confirm,me.prompt,me.iframe,me.drawer,me.folder,me.panel],"",true);else {let t=e.zIndex;e.zIndex=()=>{const{zIndex:n}=be.getPopsMaxZIndex(I.handleZIndex(t)+100);return n};}return e},handlePush(r,e){me[r].push(e);}},gi=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:true,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback:function(r){r.close();}},close:{enable:true,callback:function(r){r.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),fo={init(r){const e=V.getRandomGUID(),t="alert";let n=gi();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"button",css:W.button},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"alertCSS",css:W.alertCSS}]);let i=I.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:f,headerPStyle:d}=Z.createHeaderStyle(t,n),{contentStyle:u,contentPStyle:h}=Z.createContentStyle(t,n),g=Z.createAnim(e,t,n,`
			<div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
			<div class="pops-content pops-${t}-content" style="${u}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${h}">${n.content.text}</p>`}</div>${c}`,c,i),m=Z.parseElement(g),{popsElement:x,headerCloseBtnElement:w,btnOkElement:v,titleElement:C}=I.handleQueryElement(m,t),S=null,E=[m];n.mask.enable&&(S=I.handleMask({type:t,guid:e,config:n,animElement:m,maskHTML:s}).maskElement,E.push(S));let L=I.handleEventDetails(e,o,a,t,m,x,S,n);return I.handleClickEvent("close",w,L,n.btn.close.callback),I.handleClickEvent("ok",v,L,n.btn.ok.callback),p.append(a,E),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o),S!=null&&m.after(S),I.handlePush(t,{guid:e,animElement:m,popsElement:x,maskElement:S,$shadowContainer:o,$shadowRoot:a}),n.drag&&be.drag(x,{dragElement:C,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),I.handleResultDetails(L)}},yi=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(r){r.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(r){r.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(r){r.close();}},close:{enable:true,callback(r){r.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),xi={init(r){const e=V.getRandomGUID(),t="confirm";let n=yi();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"button",css:W.button},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"confirmCSS",css:W.confirmCSS}]);let i=I.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:f,headerPStyle:d}=Z.createHeaderStyle(t,n),{contentStyle:u,contentPStyle:h}=Z.createContentStyle(t,n),g=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
                        <div class="pops-content pops-${t}-content" style="${u}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${h}">${n.content.text}</p>`}</div>${c}`,c,i),m=Z.parseElement(g),{popsElement:x,titleElement:w,headerCloseBtnElement:v,btnOkElement:C,btnCancelElement:S,btnOtherElement:E}=I.handleQueryElement(m,t),L=null,z=[m];n.mask.enable&&(L=I.handleMask({type:t,guid:e,config:n,animElement:m,maskHTML:s}).maskElement,z.push(L));let F=I.handleEventDetails(e,o,a,t,m,x,L,n);return I.handleClickEvent("close",v,F,n.btn.close.callback),I.handleClickEvent("ok",C,F,n.btn.ok.callback),I.handleClickEvent("cancel",S,F,n.btn.cancel.callback),I.handleClickEvent("other",E,F,n.btn.other.callback),p.append(a,z),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o),L!=null&&m.after(L),I.handlePush(t,{guid:e,animElement:m,popsElement:x,maskElement:L,$shadowContainer:o,$shadowRoot:a}),n.drag&&be.drag(x,{dragElement:w,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),I.handleResultDetails(F)}},wi=()=>({title:{enable:true,position:"center",text:"默认标题",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(r){r.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(r){r.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(r){r.close();}},close:{enable:true,callback(r){r.close();}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",zIndex:1e4,only:false,direction:"right",size:"30%",lockScroll:false,closeOnPressEscape:true,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:false}),vi={init(r){const e=V.getRandomGUID(),t="drawer";let n=wi();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"button",css:W.button},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"drawerCSS",css:W.drawerCSS}]);let i=I.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:f,headerPStyle:d}=Z.createHeaderStyle(t,n),{contentStyle:u,contentPStyle:h}=Z.createContentStyle(t,n),g=Z.createAnim(e,t,n,`
            ${n.title.enable?`<div class="pops-title pops-${t}-title" style="${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="width: 100%;text-align: ${n.title.position};${d}">${n.title.text}</p>`}${l}</div>`:""}
            <div class="pops-content pops-${t}-content" style="${u}">${n.content.html?n.content.text:`<p pops class="pops-${t}-content-text" style="${h}">${n.content.text}</p>`}</div>${c}`,c,i),m=Z.parseElement(g),{popsElement:x,headerCloseBtnElement:w,btnCancelElement:v,btnOkElement:C,btnOtherElement:S}=I.handleQueryElement(m,t),E=x,L=w,z=v,F=C,X=S,Y=null,oe=[m];n.mask.enable&&(Y=I.handleMask({type:t,guid:e,config:n,animElement:m,maskHTML:s}).maskElement,oe.push(Y));let k=I.handleEventDetails(e,o,a,t,m,E,Y,n);return E.setAttribute("direction",n.direction),n.direction==="top"?(E.style.setProperty("height","0"),E.style.setProperty("border-radius",`0px 0px ${n.borderRadius}px ${n.borderRadius}px`)):n.direction==="bottom"?(E.style.setProperty("height","0"),E.style.setProperty("border-radius",`${n.borderRadius}px ${n.borderRadius}px 0px 0px`)):n.direction==="left"?(E.style.setProperty("width","0"),E.style.setProperty("border-radius",`0px ${n.borderRadius}px 0px ${n.borderRadius}px`)):n.direction==="right"&&(E.style.setProperty("width","0"),E.style.setProperty("border-radius",`${n.borderRadius}px 0px ${n.borderRadius}px 0px`)),n.closeOnPressEscape&&I.handleKeyboardEvent("Escape",[],function(){k.close();}),[{type:"close",ele:L},{type:"cancel",ele:z},{type:"ok",ele:F},{type:"other",ele:X}].forEach(b=>{I.handleClickEvent(b.type,b.ele,k,A=>{typeof n.btn[b.type].callback=="function"&&n.btn[b.type].callback(A);});}),oe.forEach(b=>{b.style.setProperty("display","none"),["top"].includes(n.direction)?(E.style.setProperty("height",n.size.toString()),E.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(n.direction)?(E.style.setProperty("height",n.size.toString()),E.style.setProperty("transform","translateY(100%)")):["left"].includes(n.direction)?(E.style.setProperty("width",n.size.toString()),E.style.setProperty("transform","translateX(-100%)")):["right"].includes(n.direction)&&(E.style.setProperty("width",n.size.toString()),E.style.setProperty("transform","translateX(100%)")),b.style.setProperty("display","");}),p.append(a,oe),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o),V.setTimeout(()=>{V.setTimeout(()=>{E.style.setProperty("transform","");},n.openDelay);},50),Y!=null&&m.after(Y),I.handlePush(t,{guid:e,animElement:m,popsElement:E,maskElement:Y,$shadowContainer:o,$shadowRoot:a}),I.handleResultDetails(k)}},Ai=()=>({parent:document.body,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:true,class:"",only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:false,isAbsolute:false,style:null,addIndexCSS:true}),qt={init(r){let e=Ai();e=V.assign(e,ye.getGlobalConfig()),e=V.assign(e,r);let t=V.getRandomGUID();const n="loading";e=I.handleOnly(n,e);let o=I.handleZIndex(e.zIndex),a=Z.createMask(t,o),{contentPStyle:i}=Z.createContentStyle("loading",e),s=Z.createAnim(t,n,e,`
            <div class="pops-content pops-${n}-content">${e.addIndexCSS?`
                <style data-model-name="index">${W.index}</style>
                <style data-model-name="anim">${W.anim}</style>
                <style data-model-name="common">${W.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${W.loadingCSS}
                </style>
            ${e.style!=null?`<style>${e.style}</style>`:""}
            	<p pops class="pops-${n}-content-text" style="${i}">${e.content.text}</p>
            </div>`,"",o),l=Z.parseElement(s),{popsElement:c}=I.handleQueryElement(l,n),f=null,d=[l];e.mask.enable&&(f=I.handleMask({type:n,guid:t,config:e,animElement:l,maskHTML:a}).maskElement,d.push(f));let u=I.handleLoadingEventDetails(t,n,l,c,f,e);return p.append(e.parent,d),f!=null&&l.after(f),I.handlePush(n,{guid:t,animElement:l,popsElement:c,maskElement:f}),e.isAbsolute&&(p.css(l,"position","absolute !important"),f&&p.css(f,"position","absolute !important")),I.handleResultDetails(u)}},Ti=()=>({title:{text:"pops.Folder",position:"center",html:false,style:""},sort:{name:"latestTime",isDesc:false,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"测试文件夹2222",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}]}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}],btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(r){r.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(r){r.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(r){r.close();}},close:{enable:true,callback(r){r.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"500px",height:window.innerHeight<450?"70vh":"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),ce={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="},Ci={init(r){const e=V.getRandomGUID(),t="folder";let n=Ti();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"button",css:W.button},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"folderCSS",css:W.folderCSS}]),ce.docx=ce.doc,ce.rtf=ce.doc,ce.xlsx=ce.xls,ce.pptx=ce.ppt,ce.dmg=ce.ipa,ce.json=ce.js;let i=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],s=["jpg","jpeg","ico","webp"],l=["htm","py","vue","bat","sh","vbs","java","kt"],c=["apk","apkm","xapk"];i.forEach(Q=>{ce[Q]=ce.zip;}),s.forEach(Q=>{ce[Q]=ce.png;}),l.forEach(Q=>{ce[Q]=ce.html;}),c.forEach(Q=>{ce[Q]=ce.apk;}),r?.folder&&(n.folder=r.folder);let f=I.handleZIndex(n.zIndex),d=Z.createMask(e,f),u=Z.createHeader(t,n),h=Z.createBottom(t,n),{headerStyle:g,headerPStyle:m}=Z.createHeaderStyle(t,n),x=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${g}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${m}">${n.title.text}</p>`}${u}</div>
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
            </div>${h}`,h,f),w=Z.parseElement(x),{popsElement:v,titleElement:C,contentElement:S,folderListBodyElement:E,folderFileListBreadcrumbPrimaryElement:L,headerCloseBtnElement:z,btnOkElement:F,btnCancelElement:X,btnOtherElement:Y,folderListSortFileNameElement:oe,folderListSortLatestTimeElement:k,folderListSortFileSizeElement:$}=I.handleQueryElement(w,t),T=null,b=[w];n.mask.enable&&(T=I.handleMask({type:t,guid:e,config:n,animElement:w,maskHTML:d}).maskElement,b.push(T));let A=I.handleEventDetails(e,o,a,t,w,v,T,n);I.handleClickEvent("close",z,A,n.btn.close.callback),I.handleClickEvent("ok",F,A,n.btn.ok.callback),I.handleClickEvent("cancel",X,A,n.btn.cancel.callback),I.handleClickEvent("other",Y,A,n.btn.other.callback),p.append(a,b),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o),T!=null&&w.after(T);class P{init(){n.folder.sort(),this.initFolderView(n.folder);let U=L.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");Reflect.set(U,"_config_",n.folder),p.on(U,"click",R=>{this.setBreadcrumbClickEvent(R,true,n.folder);}),p.on(oe.closest("th"),"click",R=>{this.arrowToSortFolderInfoView(oe,R,"fileName");},{capture:true}),p.on(k.closest("th"),"click",R=>{this.arrowToSortFolderInfoView(k,R,"latestTime");},{capture:true}),p.on($.closest("th"),"click",R=>{this.arrowToSortFolderInfoView($,R,"fileSize");},{capture:true}),n.sort.name==="fileName"?p.trigger(oe,"click",{notChangeSortRule:true}):n.sort.name==="latestTime"?p.trigger(k,"click",{notChangeSortRule:true}):n.sort.name==="fileSize"&&p.trigger($,"click",{notChangeSortRule:true});}createFolderRowElement(U,R="-",G="-",te=false){let J=U,re=R,ge=G,xe=p.createElement("tr"),he=p.createElement("td"),pe=p.createElement("td"),ke=p.createElement("td"),Je="",Oe=ce.folder;if(te)R="",G="";else {Oe="",typeof R=="number"&&(R=V.formatTime(R)),typeof G=="number"&&(G=V.formatByteToSize(G));for(let Rt in ce)if(U.toLowerCase().endsWith("."+Rt)){Je=Rt,Oe=ce[Rt];break}Oe||(Je="Null",Oe=ce.Null);}xe.className="pops-folder-list-table__body-row",he.className="pops-folder-list-table__body-td",pe.className="pops-folder-list-table__body-td",ke.className="pops-folder-list-table__body-td",ne.setSafeHTML(he,`
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${Oe}" alt="${Je}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${U}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${U}
						</a>
					</div>
				</div>
            `),ne.setSafeHTML(pe,`
				<div class="pops-folder-list__time">
					<span>${R}</span>
				</div>
				`),ne.setSafeHTML(ke,`
				<div class="pops-folder-list-format-size">
					<span>${G}</span>
				</div>
				`);let mt={fileName:J,latestTime:re,fileSize:ge,isFolder:te};return Reflect.set(he,"__value__",mt),Reflect.set(pe,"__value__",mt),Reflect.set(ke,"__value__",mt),Reflect.set(xe,"__value__",mt),xe.appendChild(he),xe.appendChild(pe),xe.appendChild(ke),{folderElement:xe,fileNameElement:he,fileTimeElement:pe,fileFormatSize:ke}}createFolderRowElementByMobile(U,R="-",G="-",te=false){let J=U,re=R,ge=G,xe=p.createElement("tr"),he=p.createElement("td"),pe="",ke=ce.folder;if(te)R="",G="";else {ke="",typeof R=="number"&&(R=V.formatTime(R)),typeof G=="number"&&(G=V.formatByteToSize(G));for(let Oe in ce)if(U.toLowerCase().endsWith("."+Oe)){pe=Oe,ke=ce[Oe];break}ke||(pe="Null",ke=ce.Null);}xe.className="pops-folder-list-table__body-row",he.className="pops-folder-list-table__body-td",ne.setSafeHTML(he,`
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${ke}" alt="${pe}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${U}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${U}</a>
						<span>${R} ${G}</span>
					</div>
				</div>
			`);let Je={fileName:J,latestTime:re,fileSize:ge,isFolder:te};return Reflect.set(he,"__value__",Je),Reflect.set(xe,"__value__",Je),xe.appendChild(he),{folderElement:xe,fileNameElement:he}}clearFolderInfoView(){ne.setSafeHTML(E,"");}createHeaderArrowIcon(){return p.createElement("div",{className:"iconArrow"})}createBreadcrumb(U,R){return p.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${U}</a>`,_config_:R},{title:U})}setBreadcrumbClickEvent(U,R,G){this.clearFolderInfoView();let J=U.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(J)for(;J.nextElementSibling;)J.nextElementSibling.remove();else console.error("获取导航按钮失败");let re=qt.init({parent:S,content:{text:"获取文件列表中..."},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},addIndexCSS:false});this.initFolderView(G),re.close();}async enterFolder(U,R){this.clearFolderInfoView();let G=qt.init({parent:S,content:{text:"获取文件列表中..."},mask:{enable:true},addIndexCSS:false});if(typeof R.clickEvent=="function"){let te=await R.clickEvent(U,R);L.appendChild(this.createHeaderArrowIcon());let J=this.createBreadcrumb(R.fileName,te);L.appendChild(J),p.on(J,"click",re=>{this.setBreadcrumbClickEvent(re,false,te);}),this.initFolderView(te);}G.close();}async downloadFile(U,R,G){p.preventEvent(U);let te=R.querySelector("a");if(typeof G.clickEvent=="function"){let J=await G.clickEvent(U,G);if(J!=null&&typeof J=="object"&&!Array.isArray(J)&&typeof J.url=="string"&&J.url.trim()!==""&&(te.setAttribute("href",J.url),te.setAttribute("target","_blank"),J.autoDownload))if((J.mode==null||J.mode==="")&&(J.mode="aBlank"),J.mode==="a"||J.mode==="aBlank"){let re=document.createElement("a");J.mode==="aBlank"&&re.setAttribute("target","_blank"),re.href=J.url,re.click();}else if(J.mode==="open"||J.mode==="openBlank")J.mode==="openBlank"?globalThis.open(J.url,"_blank"):globalThis.open(J.url);else if(J.mode==="iframe"){let re=document.createElement("iframe");re.src=J.url,re.onload=function(){V.setTimeout(()=>{re.remove();},1e3);},a.appendChild(re),V.setTimeout(()=>{re.remove();},180*1e3);}else console.error("未知的下载模式",J);}}sortFolderConfig(U,R="fileName",G=false){if(R==="fileName"){let te=U.filter(re=>re.isFolder),J=U.filter(re=>!re.isFolder);return te.sort((re,ge)=>{let xe=re[R].toString(),he=ge[R].toString(),pe=xe.localeCompare(he);return G&&(pe>0?pe=-1:pe<0&&(pe=1)),pe}),J.sort((re,ge)=>{let xe=re[R].toString(),he=ge[R].toString(),pe=xe.localeCompare(he);return G&&(pe>0?pe=-1:pe<0&&(pe=1)),pe}),G?[...J,...te]:[...te,...J]}else return U.sort((te,J)=>{let re=te[R],ge=J[R];return R==="fileSize"?(re=parseFloat(re.toString()),ge=parseFloat(ge.toString())):R==="latestTime"&&(re=new Date(re).getTime(),ge=new Date(ge).getTime()),re>ge?G?-1:1:re<ge?G?1:-1:0}),U}initFolderView(U){this.sortFolderConfig(U,n.sort.name,n.sort.isDesc),U.forEach(R=>{if(R.isFolder){let{folderElement:G,fileNameElement:te}=V.isPhone()?this.createFolderRowElementByMobile(R.fileName,"","",true):this.createFolderRowElement(R.fileName,"","",true);p.on(te,"click",J=>{this.enterFolder(J,R);}),E.appendChild(G);}else {let{folderElement:G,fileNameElement:te}=V.isPhone()?this.createFolderRowElementByMobile(R.fileName,R.latestTime,R.fileSize,false):this.createFolderRowElement(R.fileName,R.latestTime,R.fileSize,false);p.on(te,"click",J=>{this.downloadFile(J,te,R);}),E.appendChild(G);}});}removeArrowActiveStatus(){[...Array.from(oe.querySelectorAll(".pops-folder-icon-active")),...Array.from(k.querySelectorAll(".pops-folder-icon-active")),...Array.from($.querySelectorAll(".pops-folder-icon-active"))].forEach(U=>U.classList.remove("pops-folder-icon-active"));}changeArrowActive(U,R,G){this.removeArrowActiveStatus(),G?R.classList.add("pops-folder-icon-active"):U.classList.add("pops-folder-icon-active");}arrowToSortFolderInfoView(U,R,G){Reflect.get(R,"notChangeSortRule")||(n.sort.name=G,n.sort.isDesc=!n.sort.isDesc);let J=U.querySelector(".pops-folder-icon-arrow-up"),re=U.querySelector(".pops-folder-icon-arrow-down");if(this.changeArrowActive(J,re,n.sort.isDesc),typeof n.sort.callback=="function"&&n.sort.callback(U,R,n.sort.name,n.sort.isDesc))return;let ge=[];Array.from(E.children).forEach(he=>{let pe=Reflect.get(he,"__value__");Reflect.set(pe,"target",he),ge.push(pe);}),this.sortFolderConfig(ge,n.sort.name,n.sort.isDesc).forEach(he=>{E.appendChild(he.target);});}}const _=new P;return _.init(),Reflect.set(v,"data-pops-folder",_),n.drag&&be.drag(v,{dragElement:C,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),I.handlePush(t,{guid:e,animElement:w,popsElement:v,maskElement:T,$shadowContainer:o,$shadowRoot:a}),I.handleResultDetails(A)}},Si=()=>({title:{position:"center",text:"",html:false,style:""},loading:{enable:true,icon:true,text:""},useShadowRoot:true,class:"",url:window.location.href,only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:true,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",topRightButton:"min|max|mise|close",sandbox:false,forbiddenScroll:false,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}}),Ei={init(r){const e=V.getRandomGUID(),t="iframe";let n=Si();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n.url==null)throw new Error("config.url不能为空");n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"iframeCSS",css:W.iframeCSS}]);let i=n.animation!=null&&n.animation!=""?"position:absolute;":"",s=I.handleZIndex(n.zIndex),l=Z.createMask(e,s,i),c=Z.createHeader(t,n),f='<div class="pops-loading"></div>',d=n.title.text.trim()!==""?n.title.text:n.url,{headerStyle:u,headerPStyle:h}=Z.createHeaderStyle(t,n),g=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${u}">${n.title.html?d:`<p pops class="pops-${t}-title-text" style="${h}">${d}</p>`}${c}</div>
			<div class="pops-content pops-${t}-content">
                <div class="pops-${t}-content-global-loading"></div>
                <iframe src="${n.url}" pops ${n.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
			</div>${n.loading.enable?f:""}`,"",s),m=Z.parseElement(g),{popsElement:x,headerCloseBtnElement:w,headerControlsElement:v,titleElement:C,iframeElement:S,loadingElement:E,contentLoadingElement:L,headerMinBtnElement:z,headerMaxBtnElement:F,headerMiseBtnElement:X}=I.handleQueryElement(m,t),Y=K.document.querySelector(".pops-iframe-container");Y||(Y=K.document.createElement("div"),Y.className="pops-iframe-container",Y.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;",p.appendBody(Y));let oe=null,k=[m];n.mask.enable&&(oe=I.handleMask({type:t,guid:e,config:n,animElement:m,maskHTML:l}).maskElement,k.push(oe));let $=I.handleEventDetails(e,o,a,t,m,x,oe,n);$.iframeElement=S,p.on(m,p.getAnimationEndNameList(),function(){m.style.width="0%",m.style.height="0%";}),p.on(S,"load",()=>{E?.remove(),L.style.animation="iframeLoadingChange_85 0.3s forwards",p.on(L,p.getAnimationEndNameList(),()=>{L.remove();}),n.title.text.trim()===""&&S.contentDocument&&(C.querySelector("p").innerText=S.contentDocument.title),n.loadEndCallBack($);}),p.append(a,k),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),Y.appendChild(o),oe!=null&&m.after(oe),n.drag&&be.drag(x,{dragElement:C,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack});const T="type-module";let b="",A="",P=false;return p.on(z,"click",O=>{O.preventDefault(),O.stopPropagation(),b=x.style.left,A=x.style.top,x.classList.add("pops-iframe-unset-top"),x.classList.add("pops-iframe-unset-left"),x.classList.add("pops-iframe-unset-transform"),x.style.transitionDuration="",x.setAttribute(T,"min"),v.setAttribute("type","min"),F.style.setProperty("display","none"),X.style.setProperty("display",""),typeof n?.btn?.min?.callback=="function"&&n.btn.min.callback($,O);},{capture:true}),p.on(F,"click",O=>{O.preventDefault(),O.stopPropagation(),x.getAttribute(T)!=="min"&&(b=x.style.left,A=x.style.top),P=true,x.style.transitionDuration="",x.style.transform="",x.removeAttribute(T),x.classList.add("pops-iframe-unset-transition"),x.classList.add("pops-iframe-unset-left"),x.classList.add("pops-iframe-unset-top"),x.classList.add("pops-iframe-unset-transform"),x.classList.remove("pops-iframe-unset-transition"),x.setAttribute(T,"max"),v.setAttribute("type","max"),F.style.setProperty("display","none"),X.style.setProperty("display",""),typeof n?.btn?.max?.callback=="function"&&n.btn.max.callback($,O);},{capture:true}),X?.style?.setProperty("display","none"),p.on(X,"click",O=>{O.preventDefault(),O.stopPropagation(),P&&x.getAttribute(T)==="min"?(x.classList.add("pops-iframe-unset-transition"),x.classList.add("pops-iframe-unset-left"),x.classList.add("pops-iframe-unset-top"),x.classList.add("pops-iframe-unset-transform"),x.classList.remove("pops-iframe-unset-transition"),x.setAttribute(T,"max"),v.setAttribute("type","max")):(P=false,x.style.left=b,x.style.top=A,x.style.transitionDuration="",x.style.transform="",v.removeAttribute("type"),x.removeAttribute(T),x.classList.remove("pops-iframe-unset-top"),x.classList.remove("pops-iframe-unset-left"),x.classList.remove("pops-iframe-unset-transform"),F.style.setProperty("display",""),X.style.setProperty("display","none")),typeof n?.btn?.mise?.callback=="function"&&n.btn.mise.callback($,O);},{capture:true}),p.on(w,"click",O=>{O.preventDefault(),O.stopPropagation(),be.removeInstance([me.iframe],e,false),typeof n?.btn?.close?.callback=="function"&&n.btn.close.callback($,O);},{capture:true}),I.handlePush(t,{guid:e,animElement:m,popsElement:x,maskElement:oe,$shadowContainer:o,$shadowRoot:a}),I.handleResultDetails($)}},ki=()=>({title:{text:"默认标题",position:"center",html:false,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:false,attributes:[{"data-test":"test","data-test-2":"test2"}],forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(r,e){console.log("按钮开启状态：",e);}},{className:"panel-slider",text:"slider",type:"slider",props:{},attributes:[],getValue(){return 50},callback(r,e){console.log("滑块当前数值：",e);},min:1,max:100},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"view",buttonIconIsLoading:true,buttonType:"default",buttonText:"default按钮",callback(r){console.log("点击按钮",r);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(r){console.log("点击按钮",r);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(r){console.log("点击按钮",r);}},{className:"panel-button",text:"button",type:"button",attributes:[],props:{},buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(r){console.log("点击按钮",r);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:true,attributes:[{"data-value":"value","data-value-2":"value2"}],forms:[{className:"panel-input",text:"input",type:"input",props:{},attributes:[],getValue(){return "50"},callback(r,e){p.preventEvent(r),console.log("输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",props:{},attributes:[],getValue(){return "123456"},callback(r,e){p.preventEvent(r),console.log("密码输入框内容改变：",e);},isPassword:true,placeholder:"请输入密码"},{className:"panel-textarea",text:"textarea",type:"textarea",props:{},attributes:[],getValue(){return "50"},callback(r,e){p.preventEvent(r),console.log("textarea输入框内容改变：",e);},placeholder:"请输入内容"},{className:"panel-select",text:"select",type:"select",disabled:true,props:{},attributes:[],getValue(){return 50},callback(r,e,t){console.log(`select当前选项：${e}，当前选项文本：${t}`);},data:[{value:"all",text:"所有",disable(){return  false},forms:[]},{value:"text",text:"文本",disable(){return  false},forms:[]},{value:"html",text:"超文本",disable(){return  false},forms:[]}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",disabled:true,props:{},attributes:[],placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(r){console.log("select值改变，多选信息",r);},clickCallBack(r,e){console.log("点击",r,e);},closeIconClickCallBack(r,e){console.log("点击关闭图标的事件",e);},data:[{value:"select-1",text:"单选1",isHTML:false,disable(r,e){return e.findIndex(t=>["select-5"].includes(t.value))!==-1}},{value:"select-2",text:"单选2",isHTML:false,disable(r,e){return e.findIndex(t=>["select-5"].includes(t.value))!==-1}},{value:"select-3",text:"单选3",isHTML:false,disable(r,e){return e.findIndex(t=>["select-2","select-5"].includes(t.value))!==-1}},{value:"select-4",text:"单选4",isHTML:false,disable(r,e){return e.findIndex(t=>["select-3","select-5"].includes(t.value))!==-1}},{value:"select-5",text(r,e){return e.findIndex(t=>["select-4"].includes(t.value))!==-1?"单选5-禁用":"单选5"},isHTML:false,disable(r,e){return e.findIndex(t=>["select-4"].includes(t.value))!==-1}}]},{type:"forms",text:"deep菜单",forms:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(r,e){console.log(r,e);},clickCallBack(r,e){console.log("进入子配置",r,e);},forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(r,e){console.log("按钮开启状态：",e);}},{className:"panel-slider",text:"slider",props:{},type:"slider",attributes:[],getValue(){return 50},callback(r,e){console.log("滑块当前数值：",e);},min:1,max:100},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(r){console.log("点击按钮",r);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(r){console.log("点击按钮",r);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(r){console.log("点击按钮",r);}}]}]},{type:"deepMenu",className:"panel-deepMenu2",attributes:{},props:{},text:"deepMenu2",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(r,e){console.log(r,e);},clickCallBack(r,e){console.log("进入子配置",r,e);},forms:[]}]},{type:"forms",isFold:true,text:"折叠菜单",afterAddToUListCallBack(r,e){console.log(r,e);},forms:[{className:"panel-switch",text:"switch",props:{},type:"switch",attributes:[],getValue(){return  true},callback(r,e){console.log("按钮开启状态：",e);}}]}]},{id:"whitesev-panel-bottom-config-1",title:`
					<a rel="nofollow" href="https://www.npmjs.com/package/@whitesev/pops" target="_blank"><img src="https://img.shields.io/npm/v/@whitesev/pops?label=pops" alt="npm pops version"></a>
				`,isBottom:true,disableAsideItemHoverCSS:true,attributes:[{"data-value":"value","data-value-2":"value2"}],props:{},forms:[],clickFirstCallback:function(r,e,t){return  false}},{id:"whitesev-panel-bottom-config-2",title:"版本：xxx.xx.xx",isBottom:true,attributes:[{"data-value":"value","data-value-2":"value2"}],props:{},forms:[],clickFirstCallback:function(r,e,t){return  false}}],btn:{close:{enable:true,callback(r){r.close();}}},mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:false,only:false,width:window.innerWidth<550?"88vw":"700px",height:window.innerHeight<450?"70vh":"500px",position:"center",animation:"pops-anim-fadein-zoom",useDeepMenuSwtichAnimation:true,zIndex:1e4,drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),gt={isFloat(r){return Number(r)===r&&r%1!==0},add(r,e){let t,n,o;try{t=r.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}return o=Math.pow(10,Math.max(t,n)),Math.round(r*o+e*o)/o},sub(r,e){let t,n,o;try{t=r.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}o=Math.pow(10,Math.max(t,n));let a=t>=n?t:n;return (Math.round(r*o-e*o)/o).toFixed(a)},division(r,e){let t,n,o,a;try{t=r.toString().split(".")[1].length;}catch{t=0;}try{n=e.toString().split(".")[1].length;}catch{n=0;}return o=Number(r.toString().replace(".","")),a=Number(e.toString().replace(".","")),o/a*Math.pow(10,n-t)}},Mi=()=>({useShadowRoot:true,target:null,content:"默认文字",isDiffContent:false,position:"top",className:"",isFixed:false,alwaysShow:false,triggerShowEventName:"mouseenter touchstart",triggerCloseEventName:"mouseleave touchend",zIndex:1e4,only:false,eventOption:{passive:false,capture:true,once:false},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:true,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class $i{$el={$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null};$data={config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]};constructor(e,t,n){this.$data.config=e,this.$data.guid=t,this.$el.$shadowContainer=n.$shadowContainer,this.$el.$shadowRoot=n.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){let e=this.createToolTip();this.$el.$toolTip=e.$toolTipContainer,this.$el.$content=e.$toolTipContent,this.$el.$arrow=e.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){let e=p.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),t=e.querySelector(".pops-tip-content"),n=e.querySelector(".pops-tip-arrow");if(typeof this.$data.config.className=="string"&&this.$data.config.className.trim()!==""&&p.addClassName(e,this.$data.config.className),e.style.zIndex=I.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){let o=p.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});e.appendChild(o);}return this.$data.config.showArrow||n.remove(),{$toolTipContainer:e,$toolTipArrow:n,$toolTipContent:t}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(e){if(e==null&&(e=this.getContent()),this.$data.config.isDiffContent){let t="data-content",n=this.$el.$content[t];if(typeof n=="string"&&n===e)return;this.$el.$content[t]=e;}ne.setSafeHTML(this.$el.$content,e);}getZIndex(){return I.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const e=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",e.toString());}calcToolTipPosition(e,t,n,o){let a=p.offset(e,!this.$data.config.isFixed),i=a.width,s=a.height,l=a.top,c=a.left,f=p.outerWidth(this.$el.$toolTip),d=p.outerHeight(this.$el.$toolTip),u=c+i/2-f/2,h=l+s/2-d/2,g=0,m=0;if(o!=null)if(o instanceof MouseEvent||o instanceof PointerEvent)g=o.pageX,m=o.y;else if(o instanceof TouchEvent){let x=o.touches[0];g=x.pageX,m=x.pageY;}else typeof o.clientX=="number"&&(g=o.clientX),typeof o.clientY=="number"&&(m=o.clientY);return {TOP:{left:u-n,top:l-d-t,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:c+i+t,top:h+n,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:u-n,top:l+s+t,arrow:"top",motion:"fadeInBottom"},LEFT:{left:c-f-t,top:h+n,arrow:"right",motion:"fadeInLeft"},FOLLOW:{left:g+n,top:m+n,arrow:"follow",motion:""}}}changePosition(e){let t=this.calcToolTipPosition(this.$data.config.target,this.$data.config.arrowDistance,this.$data.config.otherDistance,e),n=this.$data.config.position.toUpperCase(),o=t[n];o?(this.$el.$toolTip.style.left=o.left+"px",this.$el.$toolTip.style.top=o.top+"px",this.$el.$toolTip.setAttribute("data-motion",o.motion),this.$el.$arrow.setAttribute("data-position",o.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(e,t){e==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(t):this.$data.timeId_close_TouchEvent.push(t);}clearCloseTimeoutId(e,t){let n=e==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let o=0;o<n.length;o++){const a=n[o];if(typeof t=="number"){if(t==a){V.clearTimeout(t),n.splice(o,1);break}}else V.clearTimeout(a),n.splice(o,1),o--;}}show(...e){let t=e[0],n=t instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(n),typeof this.$data.config.showBeforeCallBack=="function"){let o=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof o=="boolean"&&!o)return}V.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),p.append(this.$el.$shadowRoot,this.$el.$toolTip)),V.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),p.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(t),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){p.on(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){p.off(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,{capture:true});}close(...e){let t=e[0],n=t instanceof MouseEvent?"MouseEvent":"TouchEvent";if(t&&t instanceof MouseEvent){let a=t.composedPath()[0];if(a!=this.$data.config.target&&a!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){let a=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof a=="boolean"&&!a)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);let o=V.setTimeout(()=>{if(this.clearCloseTimeoutId(n,o),this.$el.$toolTip==null)return;let a=this.$el.$toolTip.getAttribute("data-motion");a==null||a.trim()===""?this.toolTipAnimationFinishEvent():this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(n,o),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){p.on(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){p.off(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,{capture:true});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){p.on(this.$el.$toolTip,p.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){p.off(this.$el.$toolTip,p.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),p.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){p.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(e){this.close(e);}onToolTipMouseLeaveEvent(){p.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){p.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}const Wt={init(r){const e=V.getRandomGUID(),t="tooltip";let n=Mi();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),!(n.target instanceof HTMLElement))throw new TypeError("config.target 必须是HTMLElement类型");n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"tooltipCSS",css:W.tooltipCSS}]);let i=new $i(n,e,{$shadowContainer:o,$shadowRoot:a});return n.alwaysShow&&i.show(),{guid:e,config:n,$shadowContainer:o,$shadowRoot:a,toolTip:i}}},po=()=>({asideULElement:null,asideBottomULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$pops:null,$content:null,$sectionWrapper:null,$contentAside:null,$contentSectionContainer:null},$config:{},init(r){const e="panel";this.$el={...r.$el},this.$config=r.config,this.asideULElement=this.$el.$contentAside.querySelector(`ul.pops-${e}-aside-top-container`),this.asideBottomULElement=this.$el.$contentAside.querySelector(`ul.pops-${e}-aside-bottom-container`),this.sectionContainerHeaderULElement=this.$el.$contentSectionContainer.querySelector(`ul.pops-${e}-container-header-ul`),this.sectionContainerULElement=this.$el.$contentSectionContainer.querySelector(`ul.pops-${e}-container-main-ul`);let t=null,n=false;r.config.content.forEach(o=>{let a=this.createAsideItem(o);if(this.setAsideItemClickEvent(a,o),(typeof o.isBottom=="function"?o.isBottom():o.isBottom)?this.asideBottomULElement.appendChild(a):this.asideULElement.appendChild(a),t==null){let s=false;typeof o.isDefault=="function"?s=!!o.isDefault():s=!!o.isDefault,s&&(t=a,n=!!o.scrollToDefaultView);}typeof o.afterRender=="function"&&o.afterRender({asideConfig:o,$asideLiElement:a});}),t==null&&this.asideULElement.children.length&&(t=this.asideULElement.children[0]),t?(t.click(),n&&t?.scrollIntoView()):console.error("pops.panel：左侧容器没有项");},clearContainer(){Reflect.deleteProperty(this.$el.$contentSectionContainer,"__formConfig__"),ne.setSafeHTML(this.sectionContainerHeaderULElement,""),ne.setSafeHTML(this.sectionContainerULElement,""),this.clearDeepMenuContainer();},clearDeepMenuContainer(){this.$el.$sectionWrapper?.querySelectorAll("section.pops-panel-deepMenu-container").forEach(r=>r.remove());},clearAsideItemIsVisited(){this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach(r=>{p.removeClassName(r,"pops-is-visited");});},setAsideItemIsVisited(r){p.addClassName(r,"pops-is-visited");},setElementAttributes(r,e){e!=null&&(Array.isArray(e)?e.forEach(t=>{this.setElementAttributes(r,t);}):Object.keys(e).forEach(t=>{r.setAttribute(t,e[t]);}));},setElementProps(r,e){e!=null&&Object.keys(e).forEach(t=>{let n=e[t];if(t==="innerHTML"){ne.setSafeHTML(r,n);return}Reflect.set(r,t,n);});},setElementClassName(r,e){e!=null&&(typeof e=="function"&&(e=e()),typeof e=="string"?e.split(" ").forEach(n=>{r.classList.add(n);}):Array.isArray(e)&&e.forEach(t=>{this.setElementClassName(r,t);}));},createAsideItem(r){let e=document.createElement("li");e.id=r.id,Reflect.set(e,"__forms__",r.forms);let t=typeof r.title=="function"?r.title():r.title;ne.setSafeHTML(e,t),this.setElementClassName(e,"pops-panel-aside-item"),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);const n="pops-panel-disabled-aside-hover-css";return (typeof r.disableAsideItemHoverCSS=="function"?r.disableAsideItemHoverCSS():r.disableAsideItemHoverCSS)?e.classList.add(n):e.classList.remove(n),e},createSectionContainerItem_switch(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="";r.description&&(t=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${t}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!r.getValue()},$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),switch:e.querySelector(".pops-panel-switch"),input:e.querySelector(".pops-panel-switch__input"),core:e.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),(typeof r.disabled=="function"?r.disabled():r.disabled)&&this.disable(),this.setClickEvent();},setClickEvent(){let o=this;p.on(this.$ele.core,"click",function(a){o.$ele.input.disabled||o.$ele.switch.hasAttribute("data-disabled")||(o.$data.value=o.getStatus(),o.setStatus(o.$data.value),typeof r.callback=="function"&&r.callback(a,o.$data.value));});},setStatus(o=false){o=!!o,this.$ele.input.checked=o,o?p.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):p.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let o=false;return p.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(o=true),o},disable(){this.$ele.input.disabled=true,this.$ele.switch.setAttribute("data-disabled","true"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.input.disabled=false,this.$ele.switch.removeAttribute("data-disabled"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);}};return n.init(),Reflect.set(e,"data-switch",n),e},createSectionContainerItem_slider(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="";r.description&&(t=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${t}</div>
				<div class="pops-panel-slider">
					<input type="range" min="${r.min}" max="${r.max}">
				</div>
			`);let n=e.querySelector(".pops-panel-slider input[type=range]");r.step&&n.setAttribute("step",r.step.toString()),n.value=r.getValue().toString();let o=function(i){return typeof r.getToolTipContent=="function"?r.getToolTipContent(i):i},a=Wt.init({target:n.parentElement,content:()=>o(n.value),zIndex:()=>be.getPopsMaxZIndex().zIndex,className:"github-tooltip",alwaysShow:false,only:false,position:"top",arrowDistance:10});return p.on(n,["input","propertychange"],void 0,function(i){a.toolTip.changeContent(o(n.value)),typeof r.callback=="function"&&r.callback(i,n.valueAsNumber);}),e},createSectionContainerItem_slider_new(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="";r.description&&(t=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${t}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSlider",value:r.getValue(),min:r.min,max:r.max,step:r.step||1,$data:{isMove:false,isInitDragPosition:false,isCheckingStopDragMove:false,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),slider:e.querySelector(".pops-slider"),runAway:e.querySelector(".pops-slider__runway"),bar:e.querySelector(".pops-slider__bar"),buttonWrapper:e.querySelector(".pops-slider__button-wrapper"),button:e.querySelector(".pops-slider__button")},$interval:{isCheck:false},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.setRunAwayClickEvent(),this.intervalInit(),this.isFormConfigDisabledDrag()&&this.disableDrag();},intervalInit(o=200,a=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=true;let i=false,s=this.$data.totalWidth,l,c=setInterval(()=>{i?(this.$interval.isCheck=false,clearTimeout(l),clearInterval(c)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(i=true,this.$data.totalWidth!==s&&(gt.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},o);l=setTimeout(()=>{clearInterval(c);},a);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),Reflect.set(this.$ele.slider,"data-min",this.min),Reflect.set(this.$ele.slider,"data-max",this.max),Reflect.set(this.$ele.slider,"data-value",this.value),Reflect.set(this.$ele.slider,"data-step",this.step);},initTotalWidth(){this.$data.totalWidth=p.width(this.$ele.runAway);},initStepMap(){let o=0,a=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/a;let i=0;for(let s=this.min;s<=this.max;s+=this.step){let l=this.formatValue(s),c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(o,c),o++,i+=this.$data.stepPx;}},initFloatStepMap(){let o=0,a=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/a;let i=0;for(let s=this.min;s<=this.max;s=gt.add(s,this.step)){let l=this.formatValue(s),c;l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(o,c),o++,i+=this.$data.stepPx;}},initSliderPosition(){let o=0;for(const[,a]of this.$data.stepBlockMap.entries())if(a.value==this.value){o=a.percent,this.$data.dragWidth=a.px;break}o=this.formatValue(o*100),this.setSliderPosition(o);},isFloat(o){return Number(o)===o&&o%1!==0},valueChangeCallBack(o,a){typeof r.callback=="function"&&r.callback(o,a);},getDragInfo(o){let a=this.$data.stepBlockMap.get(0);for(const[,i]of this.$data.stepBlockMap.entries())if(i.pxLeft<=o&&o<i.pxRight){a=i;break}return a},getSliderPositonPercent(o){return o/this.$data.totalWidth},formatValue(o){return gt.isFloat(this.step)?o=parseFloat(o.toFixed(2)):o=parseInt(o.toString()),o},setSliderPosition(o){parseInt(o.toString())===1&&(o=1),o>1&&(o=o/100),this.$ele.buttonWrapper.style.left=`${o*100}%`,this.$ele.bar.style.width=`${o*100}%`;},disableDrag(){p.addClassName(this.$ele.runAway,"pops-slider-is-disabled"),p.addClassName(this.$ele.runAway,ue.textIsDisabled);},allowDrag(){p.removeClassName(this.$ele.runAway,"pops-slider-is-disabled"),p.removeClassName(this.$ele.runAway,ue.textIsDisabled);},isDisabledDrag(){return p.containsClassName(this.$ele.runAway,"pops-slider-is-disabled")},isFormConfigDisabledDrag(){let o=typeof r.disabled=="function"?r.disabled():r.disabled;return typeof o=="boolean"?o:false},setRunAwayClickEvent(){p.on(this.$ele.runAway,"click",o=>{if(o.target!==this.$ele.runAway&&o.target!==this.$ele.bar)return;let a=parseFloat(o.offsetX.toString());this.dragStartCallBack()&&(this.dragMoveCallBack(o,a,this.value),this.dragEndCallBack(a));},{capture:false});},dragStartCallBack(){return this.isFormConfigDisabledDrag()?(this.disableDrag(),false):(this.$data.isMove||(this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=true),true)},dragMoveCallBack(o,a,i){let s=0;if(a<=0)s=0,this.value=this.min;else if(a>=this.$data.totalWidth)s=1,this.value=this.max;else {const l=this.getDragInfo(a);s=l.percent,this.value=this.formatValue(l.value);}this.$data.dragPercent=s,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),i!==this.value&&this.valueChangeCallBack(o,this.value);},dragEndCallBack(o){this.$data.isMove=false,o<=0?this.$data.dragWidth=0:o>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=o,this.closeToolTip();},setPanEvent(){const o=V.AnyTouch();this.$tooltip=new o(this.$ele.button,{preventDefault(){return  false}});let a=0;this.$tooltip.on("at:move",i=>{if(!this.dragStartCallBack())return;let s=this.value;const l=this.$ele.runAway.getBoundingClientRect();let c=i.x-(l.left+globalThis.screenX);c<=0?c=0:c>=l.width&&(c=l.width),a=c,this.dragMoveCallBack(i,a,s);}),this.$tooltip.on("at:end",i=>{this.dragEndCallBack(a);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=true;let o=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=false,this.closeToolTip(),clearInterval(o));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=false,clearInterval(o);},2e3);},setToolTipEvent(){function o(){return typeof r.getToolTipContent=="function"?r.getToolTipContent(n.value):n.value.toString()}let a=Wt.init({target:this.$ele.button,content:o,zIndex:()=>be.getPopsMaxZIndex().zIndex,isFixed:true,className:"github-tooltip",only:false,eventOption:{capture:true,passive:true},showBeforeCallBack:()=>{if(!(typeof r.isShowHoverTip=="function"?r.isShowHoverTip():typeof r.isShowHoverTip=="boolean"?r.isShowHoverTip:true))return  false;this.intervalInit();},showAfterCallBack:i=>{a.toolTip.changeContent(o());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),false},alwaysShow:false,position:"top",arrowDistance:10});this.$data.tooltip=a;}};return n.init(),Reflect.set(e,"data-slider",n),e},createSectionContainerItem_input(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="text";r.isPassword?t="password":r.isNumber&&(t="number");let n="";r.description&&(n=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${n}</div>
				<div class="pops-panel-input">
					<input type="${t}" placeholder="${r.placeholder??""}">
				</div>
				`);const o={[Symbol.toStringTag]:"PopsPanelInput",$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),panelInput:e.querySelector(".pops-panel-input"),input:e.querySelector("input"),inputSpanIcon:document.createElement("span"),inputSpanIconInner:null,icon:null},$data:{value:r.getValue(),isView:false},init(){this.initEle(),this.setInputValue(this.$data.value),r.isPassword?(this.setCircleIcon(se.getIcon("view")),this.setCircleIconClickEvent()):this.$ele.input.value!=""&&(this.setCircleIcon(se.getIcon("circleClose")),this.setCircleIconClickEvent()),this.setInputChangeEvent(),(typeof r.disabled=="function"?r.disabled():r.disabled)&&this.disable(),typeof r.handlerCallBack=="function"&&r.handlerCallBack(e,this.$ele.input);},initEle(){this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon,this.$ele.input.nextSibling),this.$ele.inputSpanIcon.className="pops-panel-input__suffix",ne.setSafeHTML(this.$ele.inputSpanIcon,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$ele.inputSpanIconInner=this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner"),this.$ele.icon=this.$ele.inputSpanIcon.querySelector(".pops-panel-icon"),p.addClassName(this.$ele.panelInput,ue.userSelectNone);},disable(){this.$ele.input.disabled=true,p.addClassName(this.$ele.panelInput,"pops-input-disabled"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.input.disabled=false,p.removeClassName(this.$ele.panelInput,"pops-input-disabled"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},isDisabled(){return this.$ele.input.disabled},setInputValue(a=""){this.$ele.input.value=a;},setInputType(a="text"){this.$ele.input.setAttribute("type",a);},removeCircleIcon(){ne.setSafeHTML(this.$ele.icon,"");},setCircleIcon(a=se.getIcon("circleClose")){ne.setSafeHTML(this.$ele.icon,a);},setCircleIconClickEvent(){p.on(this.$ele.icon,"click",void 0,()=>{this.isDisabled()||(this.removeCircleIcon(),r.isPassword?this.$data.isView?(this.$data.isView=false,this.setInputType("text"),this.setCircleIcon(se.getIcon("hide"))):(this.$data.isView=true,this.setInputType("password"),this.setCircleIcon(se.getIcon("view"))):(this.setInputValue(""),this.$ele.input.focus(),this.$ele.input.dispatchEvent(new Event("input"))));});},setInputChangeEvent(){p.on(this.$ele.input,["input","propertychange"],void 0,a=>{this.$data.value=this.$ele.input.value,r.isPassword||(this.$ele.input.value!==""&&this.$ele.icon.innerHTML===""?(this.setCircleIcon(se.getIcon("circleClose")),this.setCircleIconClickEvent()):this.$ele.input.value===""&&this.removeCircleIcon()),typeof r.callback=="function"&&(r.isNumber?r.callback(a,this.$ele.input.value,this.$ele.input.valueAsNumber):r.callback(a,this.$ele.input.value));});}};return o.init(),Reflect.set(e,"data-input",o),e},createSectionContainerItem_textarea(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="";r.description&&(t=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${t}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${r.placeholder??""}"></textarea>
				</div>
			`);const n={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),panelTextarea:e.querySelector(".pops-panel-textarea"),textarea:e.querySelector(".pops-panel-textarea textarea")},$data:{value:r.getValue()},init(){this.setValue(this.$data.value),this.setChangeEvent(),(typeof r.disabled=="function"?r.disabled():r.disabled)&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),p.addClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.textarea.removeAttribute("disabled"),p.removeClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||p.containsClassName(this.$ele.panelTextarea,"pops-panel-textarea-disable")},setValue(o){this.$ele.textarea.value=o;},setChangeEvent(){p.on(this.$ele.textarea,["input","propertychange"],o=>{let a=this.$ele.textarea.value;this.$data.value=a,typeof r.callback=="function"&&r.callback(o,a);});}};return n.init(),Reflect.set(e,"data-textarea",n),e},createSectionContainerItem_select(r){const e=this;let t=document.createElement("li");Reflect.set(t,"__formConfig__",r),this.setElementClassName(t,r.className),this.setElementAttributes(t,r.attributes),this.setElementProps(t,r.props);let n="";r.description&&(n=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${n}</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`);const o={[Symbol.toStringTag]:"PopsPanelSelect",$ele:{itemLeftTextContainer:t.querySelector(".pops-panel-item-left-text"),panelSelect:t.querySelector(".pops-panel-select"),select:t.querySelector(".pops-panel-select select")},$eleKey:{disable:"__disable__",value:"__value__",forms:"__forms__"},$data:{defaultValue:r.getValue()},init(){p.addClassName(this.$ele.panelSelect,ue.userSelectNone),this.initOption(),this.setChangeEvent(),this.setClickEvent(),(typeof r.disabled=="function"?r.disabled():r.disabled)&&this.disable();},setNodeValue(a,i,s){Reflect.set(a,i,s);},getNodeValue(a,i){return Reflect.get(a,i)},disable(){this.$ele.select.setAttribute("disabled","true"),p.addClassName(this.$ele.panelSelect,"pops-panel-select-disable"),p.addClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},notDisable(){this.$ele.select.removeAttribute("disabled"),p.removeClassName(this.$ele.panelSelect,"pops-panel-select-disable"),p.removeClassName(this.$ele.itemLeftTextContainer,ue.textIsDisabled);},isDisabled(){return this.$ele.select.hasAttribute("disabled")||p.containsClassName(this.$ele.panelSelect,"pops-panel-select-disable")},initOption(){r.data.forEach(a=>{let i=document.createElement("option");this.setNodeValue(i,this.$eleKey.value,a.value),this.setNodeValue(i,this.$eleKey.disable,a.disable),this.setNodeValue(i,this.$eleKey.forms,a.forms),a.value===this.$data.defaultValue&&this.setOptionSelected(i),i.innerText=a.text,this.$ele.select.appendChild(i);});},setOptionSelected(a){a.setAttribute("selected","true");},setSelectOptionsDisableStatus(){this.$ele.select.options&&this.$ele.select.options.length&&Array.from(this.$ele.select.options).forEach(a=>{this.setOptionDisableStatus(a);});},setOptionDisableStatus(a){let i=false,s=this.getNodeValue(a,this.$eleKey.disable);if(s==="function"){let l=this.getNodeValue(a,this.$eleKey.value);i=!!s(l);}i?a.setAttribute("disabled","true"):a.removeAttribute("disabled");},getSelectOptionInfo(a){let i=this.getNodeValue(a,this.$eleKey.value),s=a.innerText||a.textContent,l=this.getNodeValue(a,this.$eleKey.forms);return {value:i,text:s,forms:l,$option:a}},setChangeEvent(){p.on(this.$ele.select,"change",void 0,a=>{let i=this.$ele.select[this.$ele.select.selectedIndex],s=this.getSelectOptionInfo(i);this.setSelectOptionsDisableStatus(),typeof r.callback=="function"&&r.callback(a,s.value,s.text);let l=typeof s.forms=="function"?s.forms():s.forms;if(Array.isArray(l)){let c="pops-panel-select-child-forms";for(;t.nextElementSibling&&t.nextElementSibling.classList.contains(c);)t.nextElementSibling.remove();let f=document.createElement("ul");f.className=c,p.after(t,f),e.uListContainerAddItem(r,{ulElement:f});}});},setClickEvent(){p.on(this.$ele.select,"click",void 0,a=>{this.setSelectOptionsDisableStatus(),typeof r.clickCallBack=="function"&&r.clickCallBack(a,this.$ele.select);});}};return o.init(),Reflect.set(t,"data-select",o),t},createSectionContainerItem_select_multiple_new(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="";r.description&&(t=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${t}</div>
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
				`);const n={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{itemLeftTextContainer:e.querySelector(".pops-panel-item-left-text"),$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectContainer:void 0},$data:{defaultValue:r.getValue(),selectInfo:[]},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.initTagElement(),this.setSelectContainerClickEvent(),(typeof r.disabled=="function"?r.disabled():r.disabled)&&this.disable();},initDefault(){r.data.forEach(o=>{this.$data.defaultValue.includes(o.value)&&this.$data.selectInfo.push({text:o.text,value:o.value,isHTML:!!o.isHTML,disable:o.disable?.bind(o)});});},inintEl(){this.$el.$container=e.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=e.querySelector(".el-select__wrapper"),this.$el.$section=e.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=e.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=e.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=e.querySelector(".el-select__suffix"),this.$el.$suffixIcon=e.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let o="";if(typeof r.placeholder=="string")o=r.placeholder;else if(typeof r.placeholder=="function"){let i=r.placeholder();typeof i=="string"&&(o=i);}let a=p.createElement("span",{innerText:o});this.$el.$selectedPlaceHolderWrapper.appendChild(a);},initTagElement(){r.data.forEach(o=>{if(this.$data.selectInfo.find(i=>i.value===o.value)){let i=this.createSelectedTagItem(o);this.addSelectedTagItem(i.$tag),this.setSelectedItemCloseIconClickEvent({$tag:i.$tag,$closeIcon:i.$closeIcon,value:o.value,text:o.text});}}),this.checkTagEmpty();},createSelectedTagItem(o){const a=p.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
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
						`}),i=a.querySelector(".el-select__tags-text"),s=a.querySelector(".el-icon.el-tag__close");let l=typeof o.text=="function"?o.text(o,this.$data.selectInfo):o.text;return o.isHTML?ne.setSafeHTML(i,l):i.innerText=l,{$tag:a,$tagText:i,$closeIcon:s}},addSelectedTagItem(o){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){let a=this.$el.$selectedInputWrapper.previousElementSibling;a?p.after(a,o):p.before(this.$el.$selectedInputWrapper,o);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){let a=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;a?p.after(a,o):p.before(this.$el.$selectedPlaceHolderWrapper,o);}else this.$el.$section.appendChild(o);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateSelectTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(o=>{o.remove();}),this.initTagElement();},selectValueChangeCallBack(o){this.updateSelectItem(),typeof r.callback=="function"&&r.callback(o||this.$data.selectInfo);},updateSelectItem(){this.getAllSelectItemInfo(false).forEach(o=>{const{data:a,$select:i}=o;this.setSelectItemText(a,o.$select),typeof a.disable=="function"&&a.disable(a.value,this.$data.selectInfo)?(this.setSelectItemDisabled(i),this.removeSelectedInfo(a,false),this.removeSelectItemSelected(i)):this.removeSelectItemDisabled(i),this.$data.selectInfo.find(l=>l.value===a.value)?this.setSelectItemSelected(i):this.removeSelectItemSelected(i);});},setSelectItemSelected(o){this.isSelectItemSelected(o)||o.classList.add("select-item-is-selected");},removeSelectItemSelected(o){o.classList.remove("select-item-is-selected");},isSelectItemSelected(o){return o.classList.contains("select-item-is-selected")},addSelectedItemInfo(o,a){let i=this.getSelectedItemInfo(a);o.find(l=>l.value===i.value)||o.push({value:i.value,text:i.text,isHTML:!!i.isHTML,disable:i.disable?.bind(i)}),this.selectValueChangeCallBack(o);},getSelectedItemInfo(o){return Reflect.get(o,"data-info")},removeSelectedItemInfo(o,a){let i=this.getSelectedItemInfo(a),s=o.findIndex(l=>l.value===i.value);s!==-1&&o.splice(s,1),this.selectValueChangeCallBack(o);},getAllSelectItemInfo(o=true){return Array.from(this.$el.$selectContainer?.querySelectorAll(".select-item")??[]).map(a=>{let s={data:this.getSelectedItemInfo(a),$select:a};return o?this.isSelectItemSelected(a)?s:void 0:s}).filter(a=>a!=null)},createSelectItemElement(o){let a=p.createElement("li",{className:"select-item",innerHTML:`
							<span class="select-item-text"></span>
						`});return this.setSelectItemText(o,a),Reflect.set(a,"data-info",o),a},setSelectItemText(o,a){let i=typeof o.text=="function"?o.text(o.value,this.$data.selectInfo):o.text,s=a.querySelector(".select-item-text");o.isHTML?ne.setSafeHTML(s,i):s.innerText=i;},setSelectItemDisabled(o){o.setAttribute("aria-disabled","true"),o.setAttribute("disabled","true");},removeSelectItemDisabled(o){o.removeAttribute("aria-disabled"),o.removeAttribute("disabled");},isSelectItemDisabled(o){return o.hasAttribute("disabled")||o.ariaDisabled},setSelectElementClickEvent(o,a){p.on(a,"click",i=>{if(p.preventEvent(i),!this.isSelectItemDisabled(a)){if(typeof r.clickCallBack=="function"){let s=this.getAllSelectItemInfo().map(c=>c.data),l=r.clickCallBack(i,s);if(typeof l=="boolean"&&!l)return}this.isSelectItemSelected(a)?(this.removeSelectItemSelected(a),this.removeSelectedItemInfo(o,a)):(this.setSelectItemSelected(a),this.addSelectedItemInfo(o,a));}});},setSelectContainerClickEvent(){const o=this;p.on(this.$el.$container,"click",a=>{if(this.isDisabled())return;let i=o.$data.selectInfo,{style:s,...l}=r.selectConfirmDialogDetails||{},c=V.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:`
									<ul class="select-container"></ul>
									`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(u,h){o.$data.selectInfo=[...i],o.updateSelectTagItem(),o.$el.$selectContainer=null,u.close();}}},mask:{enable:true,clickCallBack(u,h){u(),o.$data.selectInfo=[...i],o.updateSelectTagItem(),o.$el.$selectContainer=null;},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"300px",style:`
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
								`},l),d=fo.init(c).$shadowRoot.querySelector(".select-container");this.$el.$selectContainer=d,r.data.forEach(u=>{let h=this.createSelectItemElement(u);d.appendChild(h),this.setSelectElementClickEvent(i,h);}),this.updateSelectItem();});},setSelectedItemCloseIconClickEvent(o){p.on(o.$closeIcon,"click",a=>{if(p.preventEvent(a),!this.isDisabled()){if(typeof r.closeIconClickCallBack=="function"){let i=r.closeIconClickCallBack(a,{$tag:o.$tag,$closeIcon:o.$closeIcon,value:o.value,text:typeof o.text=="function"?o.text.bind(o):o.text});if(typeof i=="boolean"&&!i)return}this.removeSelectedTagItem(o.$tag),this.removeSelectedInfo({value:o.value,text:o.text});}},{capture:true});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedTagItem(o){o.remove(),this.checkTagEmpty();},removeSelectedInfo(o,a=true){for(let i=0;i<this.$data.selectInfo.length;i++)if(this.$data.selectInfo[i].value===o.value){this.$data.selectInfo.splice(i,1);break}a&&this.selectValueChangeCallBack();},showInputWrapper(){p.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){p.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){p.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){p.cssHide(this.$el.$selectedPlaceHolderWrapper,true);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");},disable(){p.addClassName(this.$el.itemLeftTextContainer,ue.textIsDisabled),p.addClassName(this.$el.$container,"pops-panel-select-multiple-disable");},isDisabled(){return p.containsClassName(this.$el.$container,"pops-panel-select-multiple-disable")},cancleDisable(){p.removeClassName(this.$el.itemLeftTextContainer,ue.textIsDisabled),p.removeClassName(this.$el.$container,"pops-panel-select-multiple-disable");}};return n.init(),Reflect.set(e,"data-select-multiple",n),e},createSectionContainerItem_button(r){let e=document.createElement("li");Reflect.set(e,"__formConfig__",r),this.setElementClassName(e,r.className),this.setElementAttributes(e,r.attributes),this.setElementProps(e,r.props);let t="";r.description&&(t=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`),ne.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${t}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner" type="button">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);const n={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:e.querySelector(".pops-panel-button"),button:e.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:e.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:e.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.setClickEvent();},initButton(){typeof r.buttonIcon=="string"&&r.buttonIcon.trim()!==""?(se.hasIcon(r.buttonIcon)?this.setIconSVG(se.getIcon(r.buttonIcon)):this.setIconSVG(r.buttonIcon),this.showIcon()):this.hideIcon();let o=r.buttonText;typeof r.buttonText=="function"&&(o=r.buttonText()),this.setButtonType(r.buttonType),r.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),r.disable&&this.disable(),this.setButtonText(o),this.setIconLoadingStatus(r.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(o){ne.setSafeHTML(this.$ele.icon,o);},setIconLoadingStatus(o){this.$ele.icon.setAttribute("is-loading",(!!o).toString());},setHasIcon(o){this.$ele.button.setAttribute("data-icon",(!!o).toString());},setButtonType(o){this.$ele.button.setAttribute("data-type",o);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(o){ne.setSafeHTML(this.$ele.spanText,o);},setClickEvent(){p.on(this.$ele.button,"click",void 0,o=>{typeof r.callback=="function"&&r.callback(o);});}};return n.init(),Reflect.set(e,"data-button",n),e},createSectionContainerItem_deepMenu(r){let e=this,t=document.createElement("li");p.addClassName(t,"pops-panel-deepMenu-nav-item"),Reflect.set(t,"__formConfig__",r),this.setElementClassName(t,r.className),this.setElementAttributes(t,r.attributes),this.setElementProps(t,r.props);let n="";r.description&&(n=`<p class="pops-panel-item-left-desc-text">${r.description}</p>`);let o=typeof r.arrowRightIcon=="boolean"?r.arrowRightIcon:true,a="";o&&(a=`<i class="pops-panel-deepMenu-arrowRight-icon">${se.getIcon("arrowRight")}</i>`);let i="";r.rightText&&(i=`<p class="pops-panel-item-right-text">${r.rightText}</p>`),ne.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${r.text}</p>${n}</div>
				<div class="pops-panel-deepMenu">${i}${a}</div>
				`);const s={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return e.$el.$contentSectionContainer}},init(){this.setLiClickEvent();},initFormItem(l,c){let f=c;if(f.type==="forms"){let d=f.forms,u=document.createElement("li"),h=document.createElement("ul");h.classList.add("pops-panel-forms-container-item-formlist"),u.classList.add("pops-panel-forms-container-item");let g=p.createElement("div",{className:"pops-panel-forms-container-item-header-text"});ne.setSafeHTML(g,f.text),f.isFold&&(ne.setSafeHTML(g,`
								<p>${f.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),p.on(g,"click",m=>{u.hasAttribute("data-fold-enable")?u.removeAttribute("data-fold-enable"):u.setAttribute("data-fold-enable","");}),p.addClassName(g,"pops-panel-forms-fold-container"),p.addClassName(g,ue.userSelectNone),u.setAttribute("data-fold-enable",""),p.addClassName(g,"pops-panel-forms-fold")),u.appendChild(g),e.setElementClassName(u,c.className),e.setElementAttributes(u,c.attributes),e.setElementProps(u,c.props),d.forEach(m=>{e.uListContainerAddItem(m,{ulElement:h,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:u,formHeaderDivElement:g});}),u.appendChild(h),l.appendChild(u),typeof f.afterAddToUListCallBack=="function"&&f.afterAddToUListCallBack(r,{target:u,ulElement:h,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:u,formHeaderDivElement:g});}else e.uListContainerAddItem(r,{ulElement:e.sectionContainerULElement});},async gotoDeepMenu(l,c){let f=c.closest("section.pops-panel-container"),d=p.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"});Reflect.set(d,"__formConfig__",r);let u=p.createElement("ul",{className:"pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul"}),h=p.createElement("ul",{className:"pops-panel-container-main-ul"}),g=r.headerTitle??r.text,m=p.createElement("li",{className:"pops-panel-container-header-title-text pops-panel-deepMenu-container-header",innerHTML:`<p class="pops-panel-deepMenu-container-header-title-text">${g}</p>`}),x=p.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:se.getIcon("arrowLeft")});const w={duration:220,easing:"ease-in-out"},v=()=>{if(p.cssHide(f,true),p.on(x,"click",async C=>{p.preventEvent(C);const S=()=>{const E=f;p.cssShow(E),d.remove();};if(e.$config.useDeepMenuSwtichAnimation&&document.startViewTransition){const E=document.startViewTransition(S);await E.ready,await Promise.all([d.animate([{transform:"translateX(0)"},{transform:"translateX(100%)"}],w).finished,f.animate([{transform:"translateX(-100%)"},{transform:"translateX(0)"}],w).finished]),await E.finished;}else S();e.triggerRenderRightContainer(f);},{once:true}),p.before(m.firstElementChild,x),u.appendChild(m),d.appendChild(u),d.appendChild(h),r.forms&&Array.isArray(r.forms))for(let C=0;C<r.forms.length;C++){let S=r.forms[C];this.initFormItem(h,S);}e.$el.$sectionWrapper.appendChild(d);};if(e.$config.useDeepMenuSwtichAnimation&&document.startViewTransition){const C=document.startViewTransition(v);await C.ready,await d.animate([{transform:"translateX(100%)"},{transform:"translateX(0)"}],w).finished,await C.finished;}else v();typeof r.afterEnterDeepMenuCallBack=="function"&&r.afterEnterDeepMenuCallBack(r,{sectionContainer:d,sectionContainerHeaderContainer:u,sectionContainerHeader:m,sectionBodyContainer:h}),e.triggerRenderRightContainer(d);},setLiClickEvent(){p.on(t,"click",void 0,async l=>{typeof r.clickCallBack=="function"&&await r.clickCallBack(l,r)||await this.gotoDeepMenu(l,t);});}};return s.init(),Reflect.set(t,"data-deepMenu",s),t},createSectionContainerItem_own(r){let e=document.createElement("li");return Reflect.set(e,"__formConfig__",r),r.className&&(e.className=r.className),e=r.getLiElementCallBack(e),e},createSectionContainerItem(r){let e=r.type;if(e==="switch")return this.createSectionContainerItem_switch(r);if(e==="slider")return this.createSectionContainerItem_slider_new(r);if(e==="input")return this.createSectionContainerItem_input(r);if(e==="textarea")return this.createSectionContainerItem_textarea(r);if(e==="select")return this.createSectionContainerItem_select(r);if(e==="select-multiple")return this.createSectionContainerItem_select_multiple_new(r);if(e==="button")return this.createSectionContainerItem_button(r);if(e==="deepMenu")return this.createSectionContainerItem_deepMenu(r);if(e==="own")return this.createSectionContainerItem_own(r);console.error("尚未实现的type类型",r);},createSectionContainerItem_forms(r){let e=this,t=r;if(t.type==="forms"){let n=r.forms,o=document.createElement("li"),a=document.createElement("ul");o.classList.add("pops-panel-forms-container-item"),a.classList.add("pops-panel-forms-container-item-formlist");let i=p.createElement("div",{className:"pops-panel-forms-container-item-header-text"});ne.setSafeHTML(i,t.text),t.isFold&&(ne.setSafeHTML(i,`
						<p>${t.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),p.on(i,"click",s=>{o.hasAttribute("data-fold-enable")?o.removeAttribute("data-fold-enable"):o.setAttribute("data-fold-enable","");}),p.addClassName(i,"pops-panel-forms-fold-container"),p.addClassName(i,ue.userSelectNone),o.setAttribute("data-fold-enable",""),p.addClassName(o,"pops-panel-forms-fold")),o.appendChild(i),e.setElementClassName(o,r.className),e.setElementAttributes(o,r.attributes),e.setElementProps(o,r.props),n.forEach(s=>{e.uListContainerAddItem(s,{ulElement:a,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:o,formHeaderDivElement:i});}),o.appendChild(a),e.sectionContainerULElement.appendChild(o),typeof t.afterAddToUListCallBack=="function"&&t.afterAddToUListCallBack(t,{target:o,ulElement:a,sectionContainerULElement:e.sectionContainerULElement,formContainerListElement:o,formHeaderDivElement:i});}else e.uListContainerAddItem(r,{ulElement:e.sectionContainerULElement});},triggerRenderRightContainer(r){let e=Reflect.get(r,"__formConfig__");this.$el.$pops.dispatchEvent(new CustomEvent("pops:renderRightContainer",{detail:{formConfig:e}}));},uListContainerAddItem(r,e){let t=this.createSectionContainerItem(r);t&&e.ulElement.appendChild(t),typeof r.afterAddToUListCallBack=="function"&&r.afterAddToUListCallBack(r,{...e,target:t});},setAsideItemClickEvent(r,e){p.on(r,"click",async t=>{if(typeof e.clickFirstCallback=="function"){let i=await e.clickFirstCallback(t,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof i=="boolean"&&!i)return}this.clearContainer();let n=Reflect.get(r,"__forms__");Reflect.set(this.$el.$contentSectionContainer,"__formConfig__",n),p.cssShow(this.$el.$contentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(r);let o=typeof e.title=="function"?e.title():e.title,a=typeof e.headerTitle=="function"?e.headerTitle():e.headerTitle;if(a=a??o,typeof a=="string"&&a.trim()!==""){let i=document.createElement("li");i.classList.add("pops-panel-container-header-title-text"),Reflect.set(i,"__asideConfig__",e),ne.setSafeHTML(i,a),this.sectionContainerHeaderULElement.appendChild(i);}if(n.forEach(i=>{this.createSectionContainerItem_forms(i);}),typeof e.clickCallback=="function"){let i=await e.clickCallback(t,this.sectionContainerHeaderULElement,this.sectionContainerULElement);if(typeof i=="boolean"&&!i)return}this.triggerRenderRightContainer(this.$el.$contentSectionContainer);});}}),Li={init(r){const e=V.getRandomGUID(),t="panel";let n=ki();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),r&&Array.isArray(r.content)&&(n.content=r.content),n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"button",css:W.button},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"panelCSS",css:W.panelCSS}]);let i=I.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),{headerStyle:c,headerPStyle:f}=Z.createHeaderStyle(t,n),d=Z.createAnim(e,t,n,`
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
			</div>`,"",i),u=Z.parseElement(d),{popsElement:h,headerCloseBtnElement:g,titleElement:m,contentElement:x,panelSectionWrapper:w,contentAsideElement:v,contentSectionContainerElement:C}=I.handleQueryElement(u,t);(n.isMobile||V.isPhone())&&p.addClassName(h,n.mobileClassName);let S=null,E=[u];if(n.mask.enable){let{maskElement:X}=I.handleMask({type:t,guid:e,config:n,animElement:u,maskHTML:s});S=X,E.push(S);}let L=I.handleEventDetails(e,o,a,t,u,h,S,n);return I.handleClickEvent("close",g,L,n.btn.close.callback),p.append(a,E),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o),S!=null&&u.after(S),po().init({config:n,$el:{$pops:h,$content:x,$sectionWrapper:w,$contentAside:v,$contentSectionContainer:C}}),I.handlePush(t,{guid:e,animElement:u,popsElement:h,maskElement:S,$shadowContainer:o,$shadowRoot:a}),n.drag&&be.drag(h,{dragElement:m,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),{...I.handleResultDetails(L),addEventListener:(X,Y,oe)=>{h.addEventListener(X,Y,oe);},removeEventListener:(X,Y,oe)=>{h.removeEventListener(X,Y,oe);}}}},Ii=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"",select:false,password:false,row:false,focus:true,placeholder:"默认提示",style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"success",callback(r){r.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(r){r.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(r){r.close();}},close:{enable:true,callback(r){r.close();}}},useShadowRoot:true,class:"",only:false,width:window.innerWidth<550?"88vw":"350px",height:window.innerHeight<450?"70vh":"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),_i={init(r){const e=V.getRandomGUID(),t="prompt";let n=Ii();n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n=I.handleOnly(t,n);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);I.handleInit(a,[{name:"index",css:W.index},{name:"ninePalaceGridPosition",css:W.ninePalaceGridPosition},{name:"scrollbar",css:W.scrollbar},{name:"button",css:W.button},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"promptCSS",css:W.promptCSS}]);let i=I.handleZIndex(n.zIndex),s=Z.createMask(e,i),l=Z.createHeader(t,n),c=Z.createBottom(t,n),{headerStyle:f,headerPStyle:d}=Z.createHeaderStyle(t,n),{contentPStyle:u}=Z.createContentStyle(t,n),h=Z.createAnim(e,t,n,`
            <div class="pops-title pops-${t}-title" style="text-align: ${n.title.position};${f}">${n.title.html?n.title.text:`<p pops class="pops-${t}-title-text" style="${d}">${n.title.text}</p>`}${l}</div>
            <div class="pops-content pops-${t}-content" style="${u}">${n.content.row?'<textarea name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'"></textarea>':'<input name="pops-input-text" pops="" placeholder="'+n.content.placeholder+'" type="'+(n.content.password?"password":"text")+'">'}</div>${c}`,c,i),g=Z.parseElement(h),{popsElement:m,inputElement:x,headerCloseBtnElement:w,btnOkElement:v,btnCancelElement:C,btnOtherElement:S,titleElement:E}=I.handleQueryElement(g,t),L=null,z=[g];n.mask.enable&&(L=I.handleMask({type:t,guid:e,config:n,animElement:g,maskHTML:s}).maskElement,z.push(L));let F=I.handleEventDetails(e,o,a,t,g,m,L,n);return x.value=n.content.text,I.handlePromptClickEvent("close",x,w,F,n.btn.close.callback),I.handlePromptClickEvent("ok",x,v,F,n.btn.ok.callback),I.handlePromptClickEvent("cancel",x,C,F,n.btn.cancel.callback),I.handlePromptClickEvent("other",x,S,F,n.btn.other.callback),p.append(a,z),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o),L!=null&&g.after(L),I.handlePush(t,{guid:e,animElement:g,popsElement:m,maskElement:L,$shadowContainer:o,$shadowRoot:a}),n.drag&&be.drag(m,{dragElement:E,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),n.content.focus&&x.focus(),n.content.select&&x.select(),I.handleResultDetails(F)}},Ri=()=>({target:document.documentElement,targetSelector:null,data:[{icon:se.getIcon("search"),iconIsLoading:false,text:"搜索",item:[],callback(r,e,t){console.log("点击："+this.text,[r,e,t]);}},{icon:se.getIcon("documentCopy"),iconIsLoading:false,text:"复制",item:[],callback(r,e,t){console.log("点击："+this.text,[r,e,t]);}},{icon:se.getIcon("delete"),text:"删除",iconIsLoading:false,item:[],callback(r,e,t){console.log("点击："+this.text,[r,e,t]);}},{icon:se.getIcon("loading"),iconIsLoading:true,text:"加载",item:[],callback(r,e,t){return console.log("点击："+this.text,[r,e,t]),false}},{icon:se.getIcon("elemePlus"),iconIsLoading:true,text:"饿了么",callback(r,e,t){return console.log("点击："+this.text,[r,e,t]),false},item:[{icon:"",iconIsLoading:false,text:"处理文件",item:[],callback(r,e,t){console.log("点击："+this.text,[r,e,t]);}},{icon:"",iconIsLoading:false,text:"其它处理",callback(r,e,t){console.log("点击："+this.text,[r,e,t]);},item:[{icon:se.getIcon("view"),iconIsLoading:false,text:"查看",item:[],callback(r,e,t){console.log("点击："+this.text,[r,e,t]);}}]}]}],chileMenuLeftOrRightDistance:0,childMenuTopOrBottomDistance:0,useShadowRoot:true,className:"",isAnimation:false,useScaleAnimation:true,only:false,zIndex:1e4,preventDefault:true,style:null,beforeAppendToPageCallBack(){}}),Oi={init(r){const e=V.getRandomGUID(),t="rightClickMenu";let n=Ri();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n=I.handleOnly(t,n),n.target==null)throw new Error("config.target 不能为空");r.data&&(n.data=r.data);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);if(I.handleInit(a,[{name:"index",css:W.index},{name:"anim",css:W.anim},{name:"common",css:W.common},{name:"rightClickMenu",css:W.rightClickMenu}]),n.style!=null){let s=p.createElement("style",{innerHTML:n.style},{type:"text/css"});a.appendChild(s);}const i={rootElement:null,windowCheckClickEvent(s){if(!i.rootElement)return;let l=s.target;l.closest(`.pops-${t}`)||l.className&&l.className==="pops-shadow-container"&&l.shadowRoot!=null||i.closeAllMenu(i.rootElement);},shadowRootCheckClickEvent(s){!i.rootElement||s.target.closest(`.pops-${t}`)||i.closeAllMenu(i.rootElement);},addWindowCheckClickListener(){if(p.on(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const s=n.target.getRootNode();s instanceof ShadowRoot&&p.on(s,"click touchstart",void 0,i.shadowRootCheckClickEvent,{capture:true});}},removeWindowCheckClickListener(){if(p.off(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const s=n.target.getRootNode();s instanceof ShadowRoot&&p.off(s,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true});}},contextMenuEvent(s,l){n.preventDefault&&p.preventEvent(s),I.handleOnly(t,n),i.rootElement&&i.closeAllMenu(i.rootElement);let c=i.showMenu(s,n.data,l);i.rootElement=c,n.only&&I.handlePush(t,{$shadowRoot:a,$shadowContainer:o,guid:e,animElement:c,popsElement:c,beforeRemoveCallBack(f){i.closeAllMenu(f.popsElement);}});},addContextMenuEvent(s,l){p.on(s,"contextmenu",l,i.contextMenuEvent);},removeContextMenuEvent(s,l){p.off(s,"contextmenu",l,i.contextMenuEvent);},animationCloseMenu(s){let l=c=>{p.off(s,p.getTransitionEndNameList(),l,{capture:true}),s.remove();};p.containsClassName,p.containsClassName(s,`pops-${t}-anim-show`)?(p.on(s,p.getTransitionEndNameList(),l,{capture:true}),p.removeClassName(s,`pops-${t}-anim-show`)):p.containsClassName(s,`pops-${t}-anim-scale`)&&p.containsClassName(s,`pops-${t}-anim-scale-open`)?(p.on(s,p.getTransitionEndNameList(),l,{capture:true}),p.removeClassName(s,`pops-${t}-anim-scale-open`),p.addClassName(s,`pops-${t}-anim-scale-not-open`)):s.remove();},closeAllMenu(s){if(s==null)return;const l=Reflect.get(s,"__menuData__");l?.root&&(s=l.root),l.child.forEach(f=>{this.animationCloseMenu(f);}),this.animationCloseMenu(s),i.rootElement=null;},createMenuContainerElement(s){let l=p.createElement("div",{className:`pops-${t}`,innerHTML:`<ul class="pops-${t}-wrapper"></ul>`}),c=this.getMenuZIndex();return c>1e4&&(l.style.zIndex=c.toString()),s&&l.setAttribute("is-children","true"),n.isAnimation&&p.addClassName(l,`pops-${t}-anim-grid`),n.useScaleAnimation&&(p.addClassName(l,`pops-${t}-anim-scale`),p.addClassName(l,`pops-${t}-anim-scale-not-open`)),l},getMenuZIndex(){return I.handleZIndex(n.zIndex)},getOffset(s,l,c){let f={top:0,right:0,bottom:0,left:0},d=p.width(s),u=p.height(s),h=1,g=p.width(globalThis)-h,m=p.height(globalThis)-h,x=g-d,w=m-u,v=n.chileMenuLeftOrRightDistance,C=n.childMenuTopOrBottomDistance,S=l.x,E=l.y;if(S=S<0?0:S,S+v>=x){if(c){let L=p.offset(c.$menu);S=g-L.left-v+h;}else S=h+v;S<0?S=0:S>x&&(S=x),f.right=S,Reflect.deleteProperty(f,"left");}else S=S+v,f.left=S,Reflect.deleteProperty(f,"right");if(E=E<0?0:E,E+C>=w){if(c){let L=p.offset(c.$parentItem,false);E=m-L.bottom-C+h;}else E=h+C;E<0?E=h:E>w&&(E=w),f.bottom=E,Reflect.deleteProperty(f,"top");}else E=E+C,f.top=E,Reflect.deleteProperty(f,"bottom");return f},showMenu(s,l,c){let f=this.createMenuContainerElement(false);return Reflect.set(f,"__menuData__",{child:[]}),i.addMenuLiELement(s,f,f,l,c),p.append(a,f),document.contains(o)||(typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,o),p.appendBody(o)),this.handlerShowMenuCSS(f,s),f},showClildMenu(s,l,c,f,d,u){let h=this.createMenuContainerElement(true);Reflect.set(h,"__menuData__",{parent:d,root:f}),Reflect.get(f,"__menuData__").child.push(h),i.addMenuLiELement(s,f,h,c,u),p.append(a,h);let m=d.closest(".pops-rightClickMenu");return this.handlerShowMenuCSS(h,l,{$menu:m,$parentItem:d}),h},handlerShowMenuCSS(s,l,c){let f=this.getOffset(s,{x:l.clientX,y:l.clientY},c);p.css(s,{...f}),n.isAnimation&&p.addClassName(s,`pops-${t}-anim-show`),n.useScaleAnimation&&(p.removeClassName(s,`pops-${t}-anim-scale-not-open`),p.addClassName(s,`pops-${t}-anim-scale-open`));},addMenuLiELement(s,l,c,f,d){let u=s.target,h=c.querySelector("ul");f.forEach(g=>{let m=p.parseTextToDOM("<li></li>");if(typeof g.icon=="string"&&g.icon.trim()!==""){let C=se.getIcon(g.icon)??g.icon,S=p.parseTextToDOM(`<i class="pops-${t}-icon" is-loading="${g.iconIsLoading??false}">${C}</i>`);m.appendChild(S);}m.insertAdjacentHTML("beforeend",ne.getSafeHTML(`<span>${g.text}</span>`)),g.item&&Array.isArray(g.item)&&p.addClassName(m,`pops-${t}-item`);let x=false;function w(C){if(C.type==="touchstart"&&(x=true),x&&C.type==="mouseenter")return;Array.from(h.children).forEach(z=>{p.removeClassName(z,`pops-${t}-is-visited`);let F=Reflect.get(z,"__menuData__");if(!F)return;function X(Y){Y.querySelectorAll("ul li").forEach(oe=>{let k=Reflect.get(oe,"__menuData__");k?.child&&X(k.child);}),Y.remove();}X(F.child);});let S=Reflect.get(l,"__menuData__");for(let z=0;z<S.child.length;z++){let F=S.child[z];a.contains(F)||(S.child.splice(z,1),z--);}if(p.addClassName(m,`pops-${t}-is-visited`),!g.item)return;let E=m.getBoundingClientRect(),L=i.showClildMenu(s,{clientX:E.left+p.outerWidth(m),clientY:E.top},g.item,l,m,d);Reflect.set(m,"__menuData__",{child:L});}async function v(C){if(typeof g.callback=="function"){try{Qn.Object.defineProperty(s,"target",{get(){return u}});}catch{}let S=await g.callback(C,s,m,d);if(typeof S=="boolean"&&S==false)return}Array.from(h.children).forEach(S=>{p.off(S,"mouseenter touchstart");}),i.closeAllMenu(l);}p.on(m,"mouseenter touchstart",w),p.on(m,"click",v),h.appendChild(m);});}};return i.addContextMenuEvent(n.target,n.targetSelector),i.addWindowCheckClickListener(),{guid:e,config:n,removeWindowCheckClickListener:i.removeWindowCheckClickListener,addWindowCheckClickListener:i.addWindowCheckClickListener,removeContextMenuEvent:i.removeContextMenuEvent,addContextMenuEvent:i.addContextMenuEvent}}},Ni=()=>{const r=[];for(let e=0;e<10;e++)r.push({value:`测试${e}`,enableDeleteButton:true,deleteButtonClickCallback(t,n,o,a){return console.log("删除当前项",[t,n,o,a]),true},itemView(t,n){return `测试${e}-html`},clickCallback(t,n,o,a){return console.log("item项的点击回调",[t,n,r,a]),e%2===0},selectCallback(t,n,o,a){console.log("item项的选中回调",[t,n,r,a]);}});return {target:null,inputTarget:null,selfDocument:document,data:r,useShadowRoot:true,className:"",isAbsolute:true,isAnimation:false,useFoldAnimation:true,useArrow:false,width:"250px",maxHeight:"300px",followTargetWidth:true,topDistance:0,position:"auto",positionTopToReverse:true,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:false,followPosition:"target",async inputTargetChangeRefreshShowDataCallback(e,t){return console.log("当前输入框的值是：",e),t.filter(n=>n.value.includes(e))},style:""}},Pi={init(r){const e=V.getRandomGUID(),t="searchSuggestion";let n=Ni();if(n=V.assign(n,ye.getGlobalConfig()),n=V.assign(n,r),n.target==null)throw new Error("config.target 不能为空");n.inputTarget==null&&(n.inputTarget=n.target),r.data&&(n.data=r.data);const{$shadowContainer:o,$shadowRoot:a}=I.handlerShadow(n);if(I.handleInit(a,[{name:"index",css:W.index},{name:"anim",css:W.anim},{name:"common",css:W.common}]),n.style!=null){let s=document.createElement("style");p.createElement("style",{innerHTML:n.style},{type:"text/css"}),a.appendChild(s);}const i={selfDocument:n.selfDocument,$el:{root:null,$hintULContainer:null,$dynamicCSS:null},$evt:{offInputChangeEvtHandler:[]},$data:{isEmpty:true},init(s=document.body||document.documentElement){i.initEl(),i.update(i.getData()),i.updateStyleSheet(),i.hide(),a.appendChild(i.$el.root),s.appendChild(o);},initEl(){i.$el.root=i.createSearchSelectElement(),Reflect.set(i.$el.root,"data-SearchSuggestion",i),i.$el.$dynamicCSS=i.$el.root.querySelector("style[data-dynamic]"),i.$el.$hintULContainer=i.$el.root.querySelector("ul");},getData(){return typeof n.data=="function"?n.data():n.data},setData(s){n.data=s;},createSearchSelectElement(){let s=p.createElement("div",{className:`pops pops-${t}-search-suggestion`,innerHTML:`
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
							${i.getDynamicCSS()}
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
         				 `},{"data-guid":e,"type-value":t});return n.className!==""&&n.className!=null&&p.addClassName(s,n.className),n.isAnimation&&p.addClassName(s,`pops-${t}-animation`),n.useFoldAnimation&&p.addClassName(s,"el-zoom-in-top-animation"),s},getDynamicCSS(){return `
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
				`},getItemDataValue(s){return s},createSearchItemLiElement(s,l){const c=i.getItemDataValue(s);let f=p.createElement("li",{className:`pops-${t}-search-suggestion-hint-item`,"data-index":l,"data-value":c});Reflect.set(f,"data-index",l),Reflect.set(f,"data-value",c);let d=s.itemView(s,f,n);typeof d=="string"?ne.setSafeHTML(f,d):p.append(f,d);const u=s.enableDeleteButton;if(typeof u=="boolean"&&u){let h=i.createItemDeleteIcon();p.append(f,h);}return p.addClassName(f,ue.flexCenter),p.addClassName(f,ue.flexYCenter),f},setSearchItemClickEvent(s){p.on(s,"click",async l=>{p.preventEvent(l);let c=l.target;const f=i.getData(),d=Reflect.get(s,"data-value");if(!!c.closest(`.pops-${t}-delete-icon`)){if(typeof d.deleteButtonClickCallback=="function"){let h=await d.deleteButtonClickCallback(l,s,d,n);typeof h=="boolean"&&h&&(f.splice(f.indexOf(d),1),s.remove());}i.$el.$hintULContainer.children.length||i.clear(),i.updateStyleSheet();}else if(typeof d.clickCallback=="function"){let h=await d.clickCallback(l,s,d,n);typeof h=="boolean"&&h&&(n.inputTarget instanceof HTMLInputElement||n.inputTarget instanceof HTMLTextAreaElement)&&(n.inputTarget.value=String(d.value));}},{capture:true});},setSearchItemSelectEvent(s){},setInputChangeEvent(s={capture:true}){if(!(n.inputTarget instanceof HTMLInputElement||n.inputTarget instanceof HTMLTextAreaElement))return;n.inputTarget.setAttribute("autocomplete","off");const l=p.onInput(n.inputTarget,async c=>{const f=i.getData();let d=await n.inputTargetChangeRefreshShowDataCallback(n.inputTarget.value,f,n);i.update(d),i.updateStyleSheet();},s);i.$evt.offInputChangeEvtHandler.push(l.off);},removeInputChangeEvent(s={capture:true}){for(let l=0;l<i.$evt.offInputChangeEvtHandler.length;l++){const c=i.$evt.offInputChangeEvtHandler[l];c(),i.$evt.offInputChangeEvtHandler.splice(l,1),l--;}},showEvent(){i.updateStyleSheet(),n.toHideWithNotResult&&i.$data.isEmpty?i.hide(true):i.show();},setShowEvent(s={capture:true}){if(n.followPosition==="target")p.on([n.target],["focus","click"],void 0,i.showEvent,s);else if(n.followPosition==="input")p.on([n.inputTarget],["focus","click"],void 0,i.showEvent,s);else if(n.followPosition==="inputCursor")p.on([n.inputTarget],["focus","click","input"],void 0,i.showEvent,s);else throw new Error("未知followPosition："+n.followPosition)},removeShowEvent(s={capture:true}){p.off([n.target,n.inputTarget],["focus","click"],void 0,i.showEvent,s),p.off([n.inputTarget],["input"],void 0,i.showEvent,s);},hideEvent(s){if(s.target instanceof Node){if(o.contains(s.target)||n.target.contains(s.target)||n.inputTarget.contains(s.target))return;i.hide(true);}},setHideEvent(s={capture:true}){Array.isArray(i.selfDocument)?i.selfDocument.forEach(l=>{p.on(l,["click","touchstart"],void 0,i.hideEvent,s);}):p.on(i.selfDocument,["click","touchstart"],void 0,i.hideEvent,s);},removeHideEvent(s={capture:true}){Array.isArray(i.selfDocument)?i.selfDocument.forEach(l=>{p.off(l,["click","touchstart"],void 0,i.hideEvent,s);}):p.off(i.selfDocument,["click","touchstart"],void 0,i.hideEvent,s);},setAllEvent(s={capture:true}){i.setInputChangeEvent(s),i.setHideEvent(s),i.setShowEvent(s);},removeAllEvent(s={capture:true}){i.removeInputChangeEvent(s),i.removeHideEvent(s),i.removeShowEvent(s);},createItemDeleteIcon(s=16,l="#bababa"){return p.parseTextToDOM(`
					<svg class="pops-${t}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" fill="${l}">
						<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
						<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
					</svg>
        			`)},setPromptsInSearch(){let s=p.createElement("li",{className:`pops-${t}-search-suggestion-hint-searching-item`,innerHTML:n.searchingTip});i.addItem(s);},removePromptsInSearch(){i.$el.$hintULContainer.querySelector(`li.pops-${t}-search-suggestion-hint-searching-item`)?.remove();},changeHintULElementPosition(s=n.target??n.inputTarget,l=true){let c=null;if(n.followPosition==="inputCursor"?c=p.getTextBoundingRect(n.inputTarget,n.inputTarget.selectionStart||0,n.inputTarget.selectionEnd||0,false):c=n.isAbsolute?p.offset(s):s.getBoundingClientRect(),c==null)return;let f=document.documentElement.clientHeight;n.isAbsolute&&(f=p.height(document));let d=p.width(document),u=n.position;if(n.position==="auto"){let m=c.bottom,x=p.height(i.$el.$hintULContainer);m+x>f?u="top":u="bottom";}if(u==="top"){n.positionTopToReverse&&i.$el.root.setAttribute("data-top-reverse","true"),n.useFoldAnimation&&i.$el.root.setAttribute("data-popper-placement","top");let m=f-c.top+n.topDistance;i.$el.root.style.top="",i.$el.root.style.bottom=m+"px";}else if(u==="bottom"){n.useFoldAnimation&&i.$el.root.setAttribute("data-popper-placement","bottom-center");let m=c.height+c.top+n.topDistance;i.$el.root.removeAttribute("data-top-reverse"),i.$el.root.style.bottom="",i.$el.root.style.top=m+"px";}let h=c.left,g=p.width(i.$el.$hintULContainer);g>d&&(h=h+d-g),i.$el.root.style.left=h+"px",l&&i.changeHintULElementPosition(s,!l);},changeHintULElementWidth(s=n.target??n.inputTarget){let l=s.getBoundingClientRect();n.followTargetWidth?i.$el.$hintULContainer.style.width=l.width+"px":i.$el.$hintULContainer.style.width=n.width;},updateDynamicCSS(){let s=i.getDynamicCSS();ne.setSafeHTML(i.$el.$dynamicCSS,s);},updateStyleSheet(){i.updateDynamicCSS(),i.changeHintULElementWidth(),i.changeHintULElementPosition();},addItem(s){i.$el.$hintULContainer.appendChild(s);},update(s=[]){if(!Array.isArray(s))throw new TypeError("传入的数据不是数组");const l=s;if(l.length){i.$data.isEmpty=false,n.toHideWithNotResult&&i.show(),i.clear(true);let c=document.createDocumentFragment();l.forEach((f,d)=>{let u=i.createSearchItemLiElement(f,d);i.setSearchItemClickEvent(u),i.setSearchItemSelectEvent(u),c.appendChild(u);}),i.addItem(c);}else i.clear();},clear(s=false){if(ne.setSafeHTML(i.$el.$hintULContainer,""),s)return;i.$data.isEmpty=true;let l;typeof n.toSearhNotResultHTML=="string"?l=p.parseTextToDOM(n.toSearhNotResultHTML):l=n.toSearhNotResultHTML(),i.addItem(l),n.toHideWithNotResult&&i.hide();},hide(s=false){n.useFoldAnimation?(s||p.removeClassName(i.$el.root,"el-zoom-in-top-animation"),p.addClassName(i.$el.root,"el-zoom-in-top-animation"),p.addClassName(i.$el.root,"el-zoom-in-top-animation-hide"),p.removeClassName(i.$el.root,"el-zoom-in-top-animation-show")):i.$el.root.style.display="none";},show(){i.$el.root.style.display="",n.useFoldAnimation&&(p.addClassName(i.$el.root,"el-zoom-in-top-animation"),p.removeClassName(i.$el.root,"el-zoom-in-top-animation-hide"),p.addClassName(i.$el.root,"el-zoom-in-top-animation-show"));}};return i}};class tn{config={version:"2025.9.4",cssText:W,iconSVG:se.$data,animation:nt.$data,instData:me,forbiddenScroll:{event(e){return p.preventEvent(e)}},Utils:V,DOMUtils:p,InstanceUtils:be,MathFloatUtils:gt,PanelHandlerComponents:po};init(){}noConflict(){return typeof K.globalThis.pops=="object"&&V.delete(K.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&V.delete(unsafeWindow,"pops"),new tn}isPhone(e){return V.isPhone(e)}GlobalConfig=ye;alert=e=>fo.init(e);confirm=e=>xi.init(e);prompt=e=>_i.init(e);loading=e=>qt.init(e);iframe=e=>Ei.init(e);tooltip=e=>Wt.init(e);drawer=e=>vi.init(e);folder=e=>Ci.init(e);panel=e=>Li.init(e);rightClickMenu=e=>Oi.init(e);searchSuggestion=e=>Pi.init(e)}const It=new tn,fe={waitRemove(...r){r.forEach(e=>{typeof e=="string"&&D.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});});},createBlockCSSNode(...r){let e=[];if(r.length!==0&&!(r.length===1&&typeof r[0]=="string"&&r[0].trim()===""))return r.forEach(t=>{Array.isArray(t)?e=e.concat(t):e.push(t);}),_e.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...r){let e=[];if(r.length!==0&&!(r.length===1&&typeof r[0]=="string"&&r[0].trim()===""))return r.forEach(t=>{Array.isArray(t)?e=e.concat(t):e.push(t);}),Nn(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(r){let e=typeof xt=="function"?xt(r.keyName):null;typeof e=="string"&&e?Nn(e):fe.loadStyleLink(r.url);},async loadStyleLink(r){let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=r,_e.ready(()=>{document.head.appendChild(e);});},async loadScript(r){let e=document.createElement("script");return e.src=r,new Promise(t=>{e.onload=()=>{t(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(r){return r=r.trim(),r.match(/^http(s|):\/\//i)?r:r.startsWith("//")?(r.startsWith("///")||(r=window.location.protocol+r),r):(r.startsWith("/")||(r+="/"),r=window.location.origin+r,r)},fixHttps(r){if(r.startsWith("https://")||!r.startsWith("http://"))return r;let e=new URL(r);return e.protocol="https:",e.toString()},lockScroll(...r){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let t=[document.documentElement,document.body].concat(...r||[]);return t.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){t.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function r(n){navigator.clipboard.readText().then(o=>{n(o);}).catch(o=>{Me.error("读取剪贴板内容失败👉",o),n("");});}function e(n){navigator.permissions.query({name:"clipboard-read"}).then(o=>{r(n);}).catch(o=>{Me.error("申请剪贴板权限失败，尝试直接读取👉",o.message??o.name??o.stack),r(n);});}function t(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!t()){n("");return}document.hasFocus()?e(n):window.addEventListener("focus",()=>{e(n);},{once:true});})},escapeHtml(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(r,e,t=5e3){let n,o=t-e,a=e,i=async s=>{let l=await r(s);if(typeof l=="boolean"&&!l||s){D.workerClearTimeout(n);return}if(a+=e,a>o){i(true);return}n=D.workerSetTimeout(()=>{i(false);},e);};i(false);},findParentNode(r,e,t){if(t){let n=_e.closest(r,t);if(n)return n.querySelector(e)}else return _e.matches(r,e)?r:_e.closest(r,e)}},et={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},D=Fe.noConflict(),y=_e.noConflict(),ft=It,Me=new D.Log(ze,ve.console||Pe.console);let On=ze?.script?.name||void 0;It.config.Utils.AnyTouch();const uo=false;Me.config({debug:uo,logMaxCount:1e3,autoClearConsole:true,tag:true});N.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(r){const e=r.getSetting().type;if(e==="loading")return  false;const t=r.getSetting().content;return e==="warning"?Me.warn(t):e==="error"?Me.error(t):Me.info(t),true},get position(){return Re.getValue(et.qmsg_config_position.key,et.qmsg_config_position.defaultValue)},get maxNums(){return Re.getValue(et.qmsg_config_maxnums.key,et.qmsg_config_maxnums.defaultValue)},get showReverse(){return Re.getValue(et.qmsg_config_showreverse.key,et.qmsg_config_showreverse.defaultValue)},get zIndex(){let r=Fe.getMaxZIndex(),e=It.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Fe.getMaxValue(r,e)+100}});ft.GlobalConfig.setGlobalConfig({zIndex:()=>{let r=Fe.getMaxZIndex(void 0,void 0,t=>{if(t?.classList?.contains("qmsg-shadow-container")||t?.closest("qmsg")&&t.getRootNode()instanceof ShadowRoot)return  false}),e=It.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Fe.getMaxValue(r,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Di=new D.GM_Menu({GM_getValue:ot,GM_setValue:De,GM_registerMenuCommand:vt,GM_unregisterMenuCommand:Ut}),bo=new D.Httpx({xmlHttpRequest:Bn,logDetails:uo});bo.interceptors.request.use(r=>r);bo.interceptors.response.use(void 0,r=>(Me.error("拦截器-请求错误",r),r.type==="onabort"?N.warning("请求取消",{consoleLogContent:true}):r.type==="onerror"?N.error("请求异常",{consoleLogContent:true}):r.type==="ontimeout"?N.error("请求超时",{consoleLogContent:true}):N.error("其它错误",{consoleLogContent:true}),r));ve.Object.defineProperty,ve.Function.prototype.apply,ve.Function.prototype.call,ve.Element.prototype.appendChild,ve.setTimeout;const Nn=D.addStyle.bind(D);_e.selector.bind(_e);_e.selectorAll.bind(_e);new D.GM_Cookie;const ho="GM_Panel",Bi="data-init",Pn="data-key",Dn="data-default-value",Hi="data-init-more-value",Ie={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},dt={setting:{get width(){return Ie.width<550?"88vw":Ie.width<700?"550px":"700px"},get height(){return Ie.height<450?"70vh":Ie.height<550?"450px":"550px"}},settingMiddle:{get width(){return Ie.width<350?"88vw":"350px"},get height(){return Ie.height<450?"88vh":"450px"}},settingBig:{get width(){return Ie.width<800?"92vw":"800px"},get height(){return Ie.height<600?"80vh":"600px"}},info:{get width(){return Ie.width<350?"88vw":"350px"},get height(){return Ie.height<250?"88vh":"250px"}}};class Ui{storageKey;listenerData;constructor(e){if(typeof e=="string"){let t=e.trim();if(t=="")throw new Error("key参数不能为空字符串");this.storageKey=t;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new Fe.Dictionary;}getLocalValue(){let e=ot(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){De(this.storageKey,e);}set(e,t){let n=this.get(e),o=this.getLocalValue();Reflect.set(o,e,t),this.setLocalValue(o),this.triggerValueChangeListener(e,n,t);}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.triggerValueChangeListener(e,t,void 0);}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){yt(this.storageKey);}addValueChangeListener(e,t){let n=Math.random(),o=this.listenerData.get(e)||[];return o.push({id:n,key:e,callback:t}),this.listenerData.set(e,o),n}removeValueChangeListener(e){let t=false;for(const[n,o]of this.listenerData.entries()){for(let a=0;a<o.length;a++){const i=o[a];(typeof e=="string"&&i.key===e||typeof e=="number"&&i.id===e)&&(o.splice(a,1),a--,t=true);}this.listenerData.set(n,o);}return t}triggerValueChangeListener(e,t,n){if(!this.listenerData.has(e))return;let o=this.listenerData.get(e);for(let a=0;a<o.length;a++){const i=o[a];if(typeof i.callback=="function"){let s=this.get(e),l,c;typeof t<"u"&&arguments.length>=2?c=t:c=s,typeof n<"u"&&arguments.length>2?l=n:l=s,i.callback(e,c,l);}}}}const Be=new Ui(ho),bt={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new D.Dictionary),this.__contentConfig}},addContentConfig(r){Array.isArray(r)||(r=[r]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,r);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(r=0){return this.$data.contentConfig.get(r)??[]},getDefaultBottomContentConfig(){return [{id:"script-version",title:`版本：${ze?.script?.version||"未知"}`,isBottom:true,forms:[],clickFirstCallback(r,e,t){let n=ze?.script?.supportURL||ze?.script?.namespace;return typeof n=="string"&&D.isNotNull(n)&&window.open(n,"_blank"),false}}]}},Kt={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(r){return r},callback:()=>{Re.showPanel(bt.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){Re.isTopWindow()&&Di.add(this.$data.menuOption);},addMenuOption(r){Array.isArray(r)||(r=[r]),this.$data.menuOption.push(...r);},updateMenuOption(r){Array.isArray(r)||(r=[r]),r.forEach(e=>{let t=this.$data.menuOption.findIndex(n=>n.key===e.key);t!==-1&&(this.$data.menuOption[t]=e);});},getMenuOption(r=0){return this.$data.menuOption[r]},deleteMenuOption(r=0){this.$data.menuOption.splice(r,1);}},Re={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new D.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new D.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new D.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new D.Dictionary),this.__onceExecData},get scriptName(){return On},get panelConfig(){return this.__panelConfig},set panelConfig(r){this.__panelConfig=r;},key:ho,attributeKeyName:Pn,attributeDefaultValueName:Dn},init(){this.initContentDefaultValue(),Kt.init();},isTopWindow(){return ve.top===ve.self},initContentDefaultValue(){const r=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let o=n.attributes[Bi];if(typeof o=="function"){let l=o();if(typeof l=="boolean"&&!l)return}let a=new Map,i=n.attributes[Pn];if(i!=null){const l=n.attributes[Dn];a.set(i,l);}let s=n.attributes[Hi];if(typeof s=="object"&&s&&Object.keys(s).forEach(l=>{a.set(l,s[l]);}),!a.size){Me.warn(["请先配置键",n]);return}if(n.type==="switch"){let l=typeof n.disabled=="function"?n.disabled():n.disabled;typeof l=="boolean"&&l&&this.$data.contentConfigInitDisabledKeys.push(...a.keys());}for(const[l,c]of a.entries())this.setDefaultValue(l,c);},e=n=>{for(let o=0;o<n.length;o++){let a=n[o];r(a);let i=a.forms;i&&Array.isArray(i)&&e(i);}},t=[...bt.getAllContentConfig()];for(let n=0;n<t.length;n++){let o=t[n];if(!o.forms)continue;const a=o.forms;a&&Array.isArray(a)&&e(a);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(r,e){this.$data.contentConfigInitDefaultValue.has(r)&&Me.warn("请检查该key(已存在): "+r),this.$data.contentConfigInitDefaultValue.set(r,e);},setValue(r,e){Be.set(r,e);},getValue(r,e){let t=Be.get(r);return t??(this.$data.contentConfigInitDefaultValue.has(r)?this.$data.contentConfigInitDefaultValue.get(r):e)},deleteValue(r){Be.delete(r);},hasKey(r){return Be.has(r)},addValueChangeListener(r,e){return Be.addValueChangeListener(r,(n,o,a)=>{e(r,a,o);})},removeValueChangeListener(r){Be.removeValueChangeListener(r);},triggerMenuValueChange(r,e,t){Be.triggerValueChangeListener(r,t,e);},exec(r,e,t,n=true){const o=this;let a;typeof r=="string"||Array.isArray(r)?a=()=>r:a=r;let i=false,s=a(),l=[];Array.isArray(s)?(i=true,l=s):l.push(s);let c=l.find(C=>!this.$data.contentConfigInitDefaultValue.has(C));if(c){Me.warn(`${c} 键不存在`);return}let f=JSON.stringify(l);if(n&&this.$data.onceExecMenuData.has(f))return this.$data.onceExecMenuData.get(f);let d=[],u=[],h=(C,S)=>{let E=[];Array.isArray(S)||(S=[S]),S.forEach(L=>{if(L!=null&&L instanceof HTMLStyleElement){E.push(L);return}}),d=d.concat(E);},g=C=>this.getValue(C),m=()=>{for(let C=0;C<d.length;C++)d[C].remove(),d.splice(C,1),C--;},x=()=>{let C=false;return typeof t=="function"?C=t(l):C=l.every(S=>g(S)),C},w=C=>{let S=x(),E=[];if(S){let L=l.map(F=>this.getValue(F)),z=e({value:i?L:L[0],addStyleElement:(...F)=>h(true,...F)});Array.isArray(z)||(z=[z]),z.forEach(F=>{if(F!=null&&F instanceof HTMLStyleElement){E.push(F);return}});}m(),d=[...E];};n&&l.forEach(C=>{let S=this.addValueChangeListener(C,(E,L,z)=>{w();});u.push(S);}),w();let v={reload(){w();},clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&o.$data.onceExecMenuData.delete(f);},clearStoreStyleElements:()=>m(),removeValueChangeListener:()=>{u.forEach(C=>{this.removeValueChangeListener(C);});}};return this.$data.onceExecMenuData.set(f,v),v},execMenu(r,e,t=false,n=false){return this.exec(r,o=>e(o),o=>o.every(i=>{let s=!!this.getValue(i);return Re.$data.contentConfigInitDisabledKeys.includes(i)&&(s=false,Me.warn(`.execMenu${n?"Once":""} ${i} 被禁用`)),t&&(s=!s),s}),n)},execMenuOnce(r,e,t=false,n=false){const o=this.execMenu(r,e,t,true);if(n&&o){const a=()=>{o.reload();};this.removeUrlChangeWithExecMenuOnceListener(r),this.addUrlChangeWithExecMenuOnceListener(r,a);const i=o.clear;o.clear=()=>{i(),this.removeUrlChangeWithExecMenuOnceListener(r);};}return o},deleteExecMenuOnce(r){return r=this.transformKey(r),this.$data.onceExecMenuData.delete(r),this.$data.urlChangeReloadMenuExecOnce.delete(r),Be.removeValueChangeListener(r)},onceExec(r,e){if(r=this.transformKey(r),typeof r!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(r)||(e(),this.$data.onceExecData.set(r,1));},deleteOnceExec(r){r=this.transformKey(r),this.$data.onceExecData.delete(r);},addUrlChangeWithExecMenuOnceListener(r,e){r=this.transformKey(r),this.$data.urlChangeReloadMenuExecOnce.set(r,e);},removeUrlChangeWithExecMenuOnceListener(r){r=this.transformKey(r),this.$data.urlChangeReloadMenuExecOnce.delete(r);},triggerUrlChangeWithExecMenuOnceEvent(r){this.$data.urlChangeReloadMenuExecOnce.forEach((e,t)=>{e(r);});},showPanel(r,e=`${On}-设置`,t=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];let o=r.findIndex(i=>(typeof i.isBottom=="function"?i.isBottom():!!i.isBottom)&&i.id==="script-version")!==-1;!t&&!o&&r.push(...bt.getDefaultBottomContentConfig());let a=ft.panel({title:{text:e,position:"center",html:false,style:""},content:r,btn:{close:{enable:true,callback:(i,s)=>{i.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(i,s)=>{i(),this.$data.$panel=null;}},width:dt.setting.width,height:dt.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=a,this.$data.panelContent=r,n||this.registerConfigSearch({$panel:a,content:r});},registerConfigSearch(r){const{$panel:e,content:t}=r;let n=async(f,d)=>{if(f==null)return;let u=await d(f);return u&&typeof u.isFind=="boolean"&&u.isFind?u.data:await n(u.data,d)},o=(f,d)=>{const u=new IntersectionObserver(h=>{h.forEach(g=>{g.isIntersecting&&(d?.(),u.disconnect());});},{root:null,threshold:1});u.observe(f),f.scrollIntoView({behavior:"smooth",block:"center"});},a=f=>{const d="pops-flashing";y.animationend(f,()=>{f.classList.remove(d);}),f.classList.add(d);},i=(f,d)=>{D.preventEvent(f);let u=ft.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:dt.settingMiddle.width,height:"auto",drag:true,style:`
					${ft.config.cssText.panelCSS}

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
					${r.searchDialogStyle??""}
				`});u.$shadowRoot.querySelector(".search-wrapper");let h=u.$shadowRoot.querySelector(".search-config-text"),g=u.$shadowRoot.querySelector(".search-result-wrapper");h.focus();let m=()=>{y.empty(g);},x=v=>{const C=D.queryProperty(v,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E});let S=y.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${C.matchedData?.path}</div>
							<div class="search-result-item-description">${C.matchedData?.description??""}</div>
						`});return y.on(S,"click",E=>{let z=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[v.index];if(!z){N.error(`左侧项下标${v.index}不存在`);return}z.scrollIntoView({behavior:"smooth",block:"center"}),z.click(),n(v.next,async F=>{if(F?.next){let X=await D.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(Y=>{const oe=Reflect.get(Y,"__formConfig__");return typeof oe=="object"&&oe!=null&&oe.text===F.name}),2500);if(X)X.click();else return N.error("未找到对应的二级菜单"),{isFind:true,data:F};return {isFind:false,data:F.next}}else {let X=await D.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(Y=>Reflect.get(Y,"__formConfig__")===F.matchedData?.formConfig),2500);if(X){o(X);let Y=X.closest(".pops-panel-forms-fold[data-fold-enable]");Y&&(Y.querySelector(".pops-panel-forms-fold-container").click(),await D.sleep(500)),o(X,()=>{a(X);});}else N.error("未找到对应的菜单项");return {isFind:true,data:F}}});}),S},w=v=>{const C=new RegExp(v,"i"),S=[],E=(z,F)=>{for(let X=0;X<z.length;X++){const Y=z[X];let oe=Y.forms;if(oe&&Array.isArray(oe)){const k=D.deepClone(F);if(Y.type==="deepMenu"){const $=D.queryProperty(k,T=>T?.next?{isFind:false,data:T.next}:{isFind:true,data:T});$.next={name:Y.text};}E(oe,k);}else {let k=Reflect.get(Y,"text"),$=Reflect.get(Y,"description");const T=[k,$];let b=T.findIndex(A=>{if(typeof A=="string")return A.match(C)});if(b!==-1){const A=D.deepClone(F),P=D.queryProperty(A,Q=>Q?.next?{isFind:false,data:Q.next}:{isFind:true,data:Q});P.next={name:k,matchedData:{path:"",formConfig:Y,matchedText:T[b],description:$}};const _=[];D.queryProperty(A,Q=>{const U=Q?.name;return typeof U=="string"&&U.trim()!==""&&_.push(U),Q?.next?{isFind:false,data:Q.next}:{isFind:true,data:Q}});const O=_.join(fe.escapeHtml(" - "));P.next.matchedData.path=O,S.push(A);}}}};for(let z=0;z<t.length;z++){const F=t[z];if(!F.forms||F.isBottom&&F.id==="script-version")continue;const X=F.forms;if(X&&Array.isArray(X)){let Y=F.title;typeof Y=="function"&&(Y=Y()),E(X,{index:z,name:Y});}}let L=document.createDocumentFragment();for(const z of S){let F=x(z);L.appendChild(F);}m(),g.append(L);};y.on(h,"input",D.debounce(v=>{D.preventEvent(v);let C=y.val(h).trim();if(C===""){m();return}w(C);},200));},s=null,l=false,c;y.on(e.$shadowRoot,"dblclick","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",i),y.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(f,d)=>{clearTimeout(c),c=void 0,l&&s===d?(l=false,s=null,i(f)):(c=setTimeout(()=>{l=false;},200),l=true,s=d);},{capture:true}),e.$shadowRoot.appendChild(y.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(r){if(Array.isArray(r)){const e=r.sort();return JSON.stringify(e)}else return r}};let tt="";document.documentElement?document.head?document.body?tt=`<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`:document.head.childNodes.length?tt=`<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`:tt=`<html>
	<head></head>
</html>

注入速度等级：2`:tt=`<html>
</html>

注入速度等级：1`:tt=`document.documentElement is null
	
注入速度等级：0`;const Ee=(r,e,...t)=>setTimeout(async()=>{try{await r(...t);}catch(n){N.error(n.toString(),{consoleLogContent:true});}},e),mo={success:"√ ",error:"× ",warn:"!!! ",info:""},ee={setTagList(r,e){y.html(r,"");let t="";e.forEach(n=>{t+=`
				<p class="${n.tag}">${n.text??""}</p>
			`;}),y.html(r,t);},setTag(r,e,t){ee.clearTag(r),y.addClass(r,e),typeof t=="string"&&y.html(r,t);},clearTag(r){Object.keys(mo).forEach(e=>{y.removeClass(r,e);});}},M=r=>({type:"own",getLiElementCallBack(t){let n=y.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text"></p>
					<p class="pops-panel-item-left-desc-text"></p>
				`});return t.appendChild(n),t},async afterAddToUListCallBack(t,n){let o=n.target,a=o.querySelector(".pops-panel-item-left-text"),i=o.querySelector(".pops-panel-item-left-main-text"),s=o.querySelector(".pops-panel-item-left-desc-text"),l=await r();l.tag==null?y.html(i,l.text):y.html(i,mo[l.tag]+l.text),(l.description==null||l.description==="")&&y.hide(s,false),y.html(s,l.description||"");let c=["support-info"];if(l.tag!=null&&c.push(l.tag),y.addClass(i,c),typeof l.afterRender=="function")try{l.afterRender({...n,$leftContainer:a,$leftText:i,$leftDesc:s});}catch(f){console.log(f),ee.setTag(i,"error","afterRender 函数执行错误"+f);}}}),j={asideLastVisit:"aside-last-visit"},Vi={getWindow(){return Se.unsafeWindow.isSupport()?ve:window}};class zi{}class _t extends zi{isSupportGM(){return typeof H=="object"&&H!=null}}class le extends _t{}const ie={getApiDocUrl(r,e){return e=e??r,`<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${r}" target="_blank">${e}</a>`}};class Fi extends le{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof H.addElement=="function"}}isSupport(){return typeof nn=="function"}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{let i=Reflect.apply(nn,this,o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.addElement,formList:n.forms[2].forms}].forEach(o=>{let a=o.name.replace(".","__async__");o.formList.push(M(async()=>{let i=null,s=null,l=Vi.getWindow(),c=a+"_test_script_exec",f=`${c}_test_str`;try{return i=await o.fn("script",{id:c,textContent:`window["${f}"] = "bar";`}),s=document.querySelector("#"+c),i==null?{text:`${o.name} returns is null`,tag:"error"}:i instanceof HTMLElement?typeof l[f]!="string"?{text:`${o.name} script element is not work`,tag:"error"}:(Reflect.deleteProperty(l,f),{text:fe.escapeHtml("支持添加<script>元素且执行js"),tag:"success"}):{text:`${o.name} returns is not style element`,tag:"error"}}catch(d){return console.error(d),{text:"执行错误 "+d,tag:"error"}}finally{s&&s.remove();}}),M(async()=>{let i=null,s=null,l=a+"_test2";try{if(i=await o.fn(document.body,"div",{"data-src":"https://example.com/image.png",id:l}),i==null)return {text:o.name+" returns is null",tag:"error"};if(!(i instanceof HTMLElement))return {text:o.name+" returns is not style element",tag:"error"};if(s=document.querySelector("#"+l),!s)return {text:"不支持3个参数",tag:"error"};const c=s.attachShadow({mode:"closed"});return await o.fn(c,"style",{textContent:"div { color: black; };"}),c.querySelector("style")?i==null?{text:"传入3个参数但是返回为空",tag:"error"}:s.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(c){return console.error(c),{text:"执行错误 "+c,tag:"error"}}finally{s&&s.remove();}}));}),n}}class Gi extends le{isSupport(){return typeof on=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof H.addStyle=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-GM_addStyle"+e,title:e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{let i=Reflect.apply(on,this,o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.addStyle,formList:n.forms[2].forms}].forEach(o=>{let a=o.name.replace(".","__async__");o.formList.push(M(async()=>{let i=null,s=null;try{return i=y.createElement("div",{id:a,innerText:a+" test"}),document.body.appendChild(i),s=await o.fn(`
							#${a} {
								background-color: rgb(255, 0, 0);
							}
						`),s==null?{text:`${o.name} returns is null`,tag:"error"}:s instanceof HTMLStyleElement?window.getComputedStyle(i).backgroundColor!=="rgb(255, 0, 0)"?{text:`${o.name} test element background is not rgb(255, 0, 0)`,tag:"error"}:{text:fe.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}:{text:`${o.name} returns is not HTMLStyleElement`,tag:"error"}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{i?.remove(),s?.remove();}}));}),n}}class ji extends le{isSupport(){return typeof Ht=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof H.addValueChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=Ht(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.addValueChangeListener,formList:n.forms[2].forms}].forEach(o=>{let a=o.name;o.formList.push((()=>{let i=a+"_key_1";return M(()=>({text:"测试监听数据存储改变",description:"",tag:"info",afterRender(s){let l=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(s.$leftContainer,l);let c,f,d=[];y.on(l,"click",async u=>{D.preventEvent(u);try{d=[],clearTimeout(c),ee.setTag(s.$leftText,"info","等待触发回调"),y.text(s.$leftDesc,this.text),y.show(s.$leftDesc,!1);let h=D.formatTime(Date.now());f=f??await o.fn(i,function(g,m,x,w){console.log(arguments),clearTimeout(c),d.push({tag:"success",text:"支持触发回调"}),typeof g!="string"?d.push({tag:"error",text:`不支持回调参数key，当前类型：${typeof g}`}):d.push({tag:"success",text:`支持回调参数key，当前类型：${typeof g}`}),typeof x!=typeof h?d.push({tag:"error",text:`不支持回调参数newValue，当前类型：${typeof h}`}):d.push({tag:"success",text:`支持回调参数newValue，当前类型：${typeof h}`}),typeof w!="boolean"?d.push({tag:"error",text:`不支持回调参数remote，当前类型：${typeof w}`}):d.push({tag:"success",text:`支持回调参数remote，当前类型：${typeof w}`}),ee.setTagList(s.$leftText,d);}),console.log(o.name+" listenerId："+f+" typeof："+typeof f),typeof f!="number"&&typeof f!="string"?d.push({tag:"warn",text:"listenerId类型不是number或string"}):d.push({tag:"success",text:"listenerId类型："+typeof f}),c=setTimeout(()=>{d.push({tag:"error",text:"不支持触发回调"}),ee.setTagList(s.$leftText,d);},3e3),De(i,h);}catch(h){N.error(h.toString(),{consoleLogContent:true});}});}}))})());}),n}}class qi extends le{isSupport(){return (typeof $e=="object"||typeof $e=="function")&&$e!=null}getApiOption(){let e=this.isSupport();return {isSupportList:e&&typeof $e.list=="function",isSupportSet:e&&typeof $e.set=="function",isSupportDelete:e&&typeof $e.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let e=this.isSupportGM()&&(typeof H.cookie=="object"||typeof H.cookie=="function")&&H.cookie!=null;return {name:"GM.cookie",isSupport:e,isSupportList:e&&typeof H.cookie.list=="function",isSupportSet:e&&typeof H.cookie.set=="function",isSupportDelete:e&&typeof H.cookie.delete=="function"}}getUIOption(){let e=this.getApiName(),t=this.getApiOption(),n=this.getAsyncApiOption(),o={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e+".list",`${e} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(i){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:`支持 ${e}，类型 ${typeof $e}`,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]},a=o.forms[0].forms;if(this.isSupport()&&a.push(M(()=>t.isSupportList?{text:`支持 ${e}.list`,tag:"success"}:{text:`不支持 ${e}.list`,tag:"error"}),M(()=>t.isSupportSet?{text:`支持 ${e}.set`,tag:"success"}:{text:`不支持 ${e}.set`,tag:"error"}),M(()=>t.isSupportDelete?{text:`支持 ${e}.delete`,tag:"success"}:{text:`不支持 ${e}.delete`,tag:"error"})),n.isSupport?a.push(M(()=>n.isSupportList?{text:`支持 ${n.name}.list`,tag:"success"}:{text:`不支持 ${n.name}.list`,tag:"error"}),M(()=>n.isSupportSet?{text:`支持 ${n.name}.set`,tag:"success"}:{text:`不支持 ${n.name}.set`,tag:"error"}),M(()=>n.isSupportDelete?{text:`支持 ${n.name}.delete`,tag:"success"}:{text:`不支持 ${n.name}.delete`,tag:"error"})):a.push(M(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()){let i={name:"test",value:"1",expirationDate:(Date.now()+864e5)/1e3};[{name:e,list:async(...s)=>new Promise((l,c)=>{const[f,d]=s;$e.list(f,(u,h)=>{h?c(h):l(u);});}),set:async(...s)=>new Promise((l,c)=>{const[f,d]=s;$e.set(f,u=>{u?c(u):l(void 0);});}),delete:async(...s)=>new Promise((l,c)=>{const[f,d]=s;$e.delete(f,u=>{u?c(u):l(void 0);});}),formList:o.forms[1].forms},{name:n.name,list:H.cookie?.list,set:H.cookie?.set,delete:H.cookie?.delete,formList:o.forms[2].forms}].forEach(s=>{s.name,s.formList.push(M(()=>{try{return {text:fe.escapeHtml("测试list获取所有Cookie"),tag:"info",description:"点击按钮进行测试",afterRender(l){let c=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);y.on(c,"click",async f=>{try{D.preventEvent(f);const d=await s.list({});console.log(d),Array.isArray(d)?ft.alert({title:{text:s.name+".list",position:"center"},content:{text:JSON.stringify(d,null,4),html:!0},drag:!0,mask:{enable:!0},width:dt.setting.width,height:dt.setting.height,style:`
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`}):alert("获取的cookie信息不是数组");}catch(d){N.error(d.toString(),{consoleLogContent:!0});}}),y.after(l.$leftContainer,c);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试set新增Cookie"),tag:"info",description:JSON.stringify(i),afterRender(l){let c=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);y.on(c,"click",async f=>{try{D.preventEvent(f),await s.set(i),N.success(s.name+" set cookie success");}catch(d){N.error(d.toString(),{consoleLogContent:!0});}}),y.after(l.$leftContainer,c);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{}}),M(()=>{try{let l={name:"test"};return {text:fe.escapeHtml("测试delete删除Cookie"),tag:"info",description:JSON.stringify(l),afterRender(c){let f=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);y.on(f,"click",async d=>{try{D.preventEvent(d),await s.delete(l),N.success(s.name+" delete cookie success");}catch(u){N.error(u.toString(),{consoleLogContent:!0});}}),y.after(c.$leftContainer,f);}}}catch(l){return console.error(l),{text:"执行错误 "+l,tag:"error"}}finally{}}));});}return o}}class Wi extends le{isSupport(){return typeof yt=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof H.deleteValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.name?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=yt(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.deleteValue,formList:n.forms[2].forms}].forEach(o=>{let a=o.name;o.formList.push((()=>{let i=`Test ${a} null`,s=null;return M(()=>({text:"测试存储null值并删除",description:`"${i}": ${s}`,tag:"info",afterRender(l){let c=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(l.$leftContainer,c),y.on(c,"click",async f=>{D.preventEvent(f);try{De(i,s),await o.fn(i);let d=ot(i);typeof d=="object"&&d===null?N.error("该值未删除，读取的值："+d):N.success("成功删除该值");}catch(d){N.error(d.toString(),{consoleLogContent:true});}});}}))})());}),n}}class Ki extends le{isSupport(){return typeof an=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof H.deleteValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=an(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.deleteValues,formList:n.forms[2].forms}].forEach(o=>{o.name,o.formList.push((()=>{let a={GM_deleteValues_key_1:555,"GM.deleteValues_key_2":666};return M(()=>({text:"测试存储对象然后删除再读取",description:`${JSON.stringify(a)}`,tag:"info",afterRender(i){let s=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(i.$leftContainer,s),y.on(s,"click",async l=>{D.preventEvent(l);try{At(a);let c=Object.keys(a),f=wt(c);if(JSON.stringify(f)!==JSON.stringify(a)){N.error("写入失败，写入的数据和读取的数据不相同");return}await o.fn(c);let d=wt(c);d==null?N.warning("删除情况未知，因为读取到的数据为null"):typeof d=="object"&&JSON.stringify(d)==="{}"?N.success("删除成功，读取的数据为{}"):(N.error("删除情况未知，因为读取到的数据类型不是object"),console.log(d));}catch(c){N.error(c.toString(),{consoleLogContent:true});}});}}))})());}),n}}class Xi extends le{isSupport(){return typeof go=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof H.download=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>({text:fe.escapeHtml("TODO"),tag:"info",afterRender(o){o.target?.querySelector(".support-info");}}))),n}}class Qi extends le{isSupport(){return typeof xt=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof H.getResourceText=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=xt(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.getResourceText,formList:n.forms[2].forms}].forEach(o=>{o.name.replace(".","__async__"),o.formList.push(M(async()=>{try{return typeof await o.fn("ViewerCSS")=="string"?{text:fe.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:fe.escapeHtml(o.name+" return is not string"),tag:"error"}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}));}),n}}class Yi extends le{isSupport(){return typeof rn=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof H.getResourceUrl=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{let i=Reflect.apply(rn,this,o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.getResourceUrl,formList:n.forms[2].forms}].forEach(o=>{o.name.replace(".","__async__"),o.formList.push(M(async()=>{try{let a=await o.fn("ViewerCSS");return typeof a!="string"?{text:fe.escapeHtml(`${o.name} return is not string`),tag:"error"}:(a=a.trim(),a.startsWith("data:text/css;base64")?a.startsWith("data:text/css;base64,LyohCiAqIFZpZXdlci5qcyB2MS4xMS43CiAqIGh0dHBzOi8vZmVuZ3")?{text:fe.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:fe.escapeHtml("支持通过@resource引用资源并进行base64编码，但是base64编码的实现方式不同"),tag:"warn"}:{text:fe.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"})}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}));}),n}}class Ji extends le{isSupport(){return typeof sn=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof H.getTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async()=>new Promise(o=>{sn((...a)=>{o(...a);});}),formList:n.forms[1].forms},{name:t.name,fn:H.getTab,formList:n.forms[2].forms}].forEach(o=>{o.name.replace(".","__async__"),o.formList.push(M(()=>({text:"测试获取当前Tab",description:"",tag:"info",afterRender(a){let i=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);y.after(a.$leftContainer,i);let s;y.on(i,"click",async l=>{D.preventEvent(l);try{clearTimeout(s),ee.setTag(a.$leftText,"error","等待3s内触发回调函数"),s=Ee(()=>{ee.setTag(a.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await o.fn();clearTimeout(s),console.log(o.name+" callback tab",c),typeof c=="object"&&c!=null?ee.setTagList(a.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):ee.setTagList(a.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){N.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class Zi extends le{isSupport(){return typeof ln=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof H.getTabs=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async()=>new Promise(o=>{ln((...a)=>{o(...a);});}),formList:n.forms[1].forms},{name:t.name,fn:H.getTabs,formList:n.forms[2].forms}].forEach(o=>{o.name.replace(".","__async__"),o.formList.push(M(()=>({text:"测试获取所有Tab",description:"",tag:"info",afterRender(a){let i=y.parseHTML(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="button" data-type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
								`,false,false);y.after(a.$leftContainer,i);let s;y.on(i,"click",async l=>{try{D.preventEvent(l),clearTimeout(s),ee.setTag(a.$leftText,"error","等待3s内触发回调函数"),s=Ee(()=>{ee.setTag(a.$leftText,"error","超时，不支持触发回调函数");},3e3);let c=await o.fn();clearTimeout(s),console.log(o.name+" callback tabs",c),typeof c=="object"&&c!=null?ee.setTagList(a.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):ee.setTagList(a.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]),alert(JSON.stringify(c));}catch(c){N.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class es extends le{isSupport(){return typeof ot=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof H.getValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=ot(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.getValue,formList:n.forms[2].forms}].forEach(o=>{let a=o.name;o.formList.push(...[{key:`Test ${a} boolean`,value:true,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} number`,value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} string`,value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:`Test ${a} undefined`,value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} null`,value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} object`,value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(i=>(()=>{let s=i.key,l=i.value;return M(()=>({text:i.text(),description:i.desc(),tag:"info",afterRender(c){let f=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(c.$leftContainer,f),y.on(f,"click",async d=>{D.preventEvent(d);try{De(s,l);let u=await o.fn(s);if(typeof u==typeof l){if(l===null&&l!=u){N.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}N.success("读取成功，存储类型和读取类型一致");}else N.error("读取成功，但存储类型和读取类型不同");}catch(u){N.error(u.toString(),{consoleLogContent:true});}});}}))})()),(()=>{let i=`Test ${a} null with defaultValue`,s=123;return M(()=>({text:"存储object类型的null，读取时指定默认值为"+s,description:`${a}("${i}", ${s})`,tag:"info",afterRender(l){let c=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(l.$leftContainer,c),y.on(c,"click",async f=>{D.preventEvent(f);try{await o.fn(i,null);let d=await o.fn(i,s);typeof d=="object"&&d==null?N.success("读取的值是存储的值："+d):N.error("读取的值不是存储的值："+d);}catch(d){N.error(d.toString(),{consoleLogContent:true});}});}}))})(),(()=>{let i=`Test ${a} defaultValue`,s=123;return M(()=>({text:"不存储，测试调用默认值",description:`${a}("${i}", ${s})`,tag:"info",afterRender(l){let c=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(l.$leftContainer,c),y.on(c,"click",async f=>{D.preventEvent(f);try{let d=await o.fn(i,s);typeof d==typeof s?N.success("读取的值是默认值："+d):N.error("读取的值不是默认值："+d);}catch(d){N.error(d.toString(),{consoleLogContent:true});}});}}))})());}),n}}class ts extends le{isSupport(){return typeof wt=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof H.getValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=wt(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.getValues,formList:n.forms[2].forms}].forEach(o=>{let a=o.name;o.formList.push(M(()=>({text:"测试直接读取",description:"没有入参",tag:"info",afterRender(i){let s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);y.after(i.$leftContainer,s),y.on(s,"click",async l=>{D.preventEvent(l);try{let c=await o.fn();N.info("请在控制台查看读取的数据"),console.log(c);}catch(c){N.error(c.toString(),{consoleLogContent:true});}});}})),M(()=>{let i=D.toJSON(`{
								"${a}-test-key-non-exists-1": 1111,
								"${a}-test-key-non-exists-2": 2222,
							}`);return {text:"测试读取不存在的数据",description:"数据默认值："+JSON.stringify(i),tag:"info",afterRender(s){let l=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);y.after(s.$leftContainer,l),y.on(l,"click",async c=>{D.preventEvent(c);try{let f=await o.fn(i);console.log(f),f==null?N.error("读取失败，读取的数据为null"):JSON.stringify(f)===JSON.stringify(i)?N.success("读取成功，读取的数据和默认值相同"):N.error("读取成功，但读取的数据和默认值不同");}catch(f){N.error(f.toString(),{consoleLogContent:true});}});}}}),(()=>{let i=D.toJSON(`{
							"${a}-test-key-1": 1,
							"${a}-test-key-2": 2,
						}`);return M(()=>({text:"测试存储对象并读取",description:JSON.stringify(i),tag:"info",afterRender(s){let l=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(s.$leftContainer,l),y.on(l,"click",async c=>{D.preventEvent(c);try{At(i);let f=Object.keys(i),d=await o.fn(f);console.log(d),d==null?N.error("读取失败，读取的数据为null"):JSON.stringify(d)===JSON.stringify(i)?N.success("读取成功，写入的数据和读取的数据相同"):N.error("读取成功，但写入的数据和读取的数据不同");}catch(f){N.error(f.toString(),{consoleLogContent:true});}});}}))})());}),n}}class ns extends le{isSupport(){return typeof ze=="object"&&ze!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof H.info=="object"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（GM）",forms:[]}]};return this.isSupport()&&[{name:e,fn:ze,formList:n.forms[1].forms},{name:t.name,fn:H.info,formList:n.forms[2].forms}].forEach(o=>{o.name,o.formList.push(...[{value:o.fn?.downloadMode,type:"string",text:`${o.name}.downloadMode`,notExistsTag:"error"},{value:o.fn?.scriptHandler,type:"string",text:`${o.name}.scriptHandler`},{value:o.fn?.scriptMetaStr,type:"string",text:`${o.name}.scriptMetaStr`},{value:o.fn?.version,type:"string",text:`${o.name}.version`},{value:o.fn?.script,type:"object",text:`${o.name}.script`},{value:o.fn?.script?.name,type:"string",text:`${o.name}.script.name`},{value:o.fn?.script?.author,type:"string",text:`${o.name}.script.author`},{value:o.fn?.script?.description,type:"string",text:`${o.name}.script.description`},{value:o.fn?.script?.version,type:"string",text:`${o.name}.script.version`}].map(a=>M(()=>{try{return a.value!=null&&typeof a.value===a.type?{text:"支持 "+a.text+" 类型："+a.type,tag:"success"}:{text:"不支持 "+a.text+" 类型："+a.type,tag:a.notExistsTag??"error"}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{}})));}),n}}class os extends le{isSupport(){return typeof cn=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof H.listValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=cn(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.listValues,formList:n.forms[2].forms}].forEach(o=>{o.name,o.formList.push(M(()=>({text:"查看存储的所有键名",tag:"info",afterRender(a){let i=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);y.after(a.$leftContainer,i),y.on(i,"click",async s=>{D.preventEvent(s);try{let l=await o.fn();console.log(o.name+" call result",l),Array.isArray(l)?l.find(f=>typeof f!="string")?N.error("返回值数组中存在非string类型"):alert(JSON.stringify(l,null,4)):N.error("返回值不是数组");}catch(l){N.error(l.toString(),{consoleLogContent:true});}});}})));}),n}}class as extends le{isSupport(){return typeof fn=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof H.log=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=fn(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.log,formList:n.forms[2].forms}].forEach(o=>{o.name,o.formList.push(M(()=>{try{let a="test "+o.name;return {text:fe.escapeHtml("请在控制台查看输出"),tag:"info",description:"test "+o.name,afterRender(i){let s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);y.on(s,"click",async l=>{D.preventEvent(l);try{await o.fn(a);}catch(c){N.error(c.toString(),{consoleLogContent:!0});}}),y.after(i.$leftContainer,s);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}));}),n}}class rs extends le{isSupport(){return typeof dn=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof H.notification=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async o=>new Promise(a=>{let i=o.onclick,s=dn({...o,onclick(...l){typeof i=="function"&&Reflect.apply(i,this,l),a(s??true);}});}),formList:n.forms[1].forms},{name:t.name,fn:H.notification,formList:n.forms[2].forms}].forEach(o=>{o.name.replace(".","__async__"),o.formList.push(M(()=>{try{return {text:fe.escapeHtml("点击通知的内容测试url"),tag:"info",description:"https://example.com/",afterRender(a){let i=a.target,s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);y.on(s,"click",async l=>{D.preventEvent(l);try{await o.fn({title:`测试 ${o.name} 标题`,text:`测试 ${o.name} 内容`,url:"https://example.com/"});}catch(c){N.error(c.toString(),{consoleLogContent:!0});}}),y.after(a.$leftContainer,s);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}}),M(()=>{try{let a,i,s=!1,l=!1;return {text:"测试通知的timeout",description:"请勿点击通知",tag:"info",afterRender(c){a=c.target,i=c.$leftContainer;let f=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),d,u=D.debounce(()=>{try{clearTimeout(d),y.html(c.$leftText,'<p class="success">测试成功，触发</p>'),s=!1,l=!1;}catch(h){N.error(h.toString(),{consoleLogContent:!0});}},800);y.on(f,"click",async h=>{try{D.preventEvent(h),clearTimeout(d);let g=10,m=g,x=()=>{let v="正在等待触发超时：5000ms";return m--,v};ee.setTag(c.$leftText,"info",x()),d=Ee(()=>{ee.setTag(c.$leftText,"error","测试超时，未触发ondone回调");},g*1e3);const w=await o.fn({title:`测试 ${o.name} 标题`,text:`测试 ${o.name} 内容`,url:"https://example.com/",timeout:5e3,ondone(){u();}});}catch(g){N.error(g.toString(),{consoleLogContent:!0});}}),y.after(i,f);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}),M(()=>{try{let a,i,s=!1,l=!1,c=!1,f="点击通知的内容测试onclick、ondone函数";return {text:f,description:"https://example.com/",tag:"info",afterRender(u){a=u.target,i=u.$leftContainer;let h=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),g,m,x=D.debounce(()=>{try{clearTimeout(g),clearInterval(m);let w="",v="success",C="",S="success";s?(w+="支持 onclick 函数",l?(w=w.trim(),w+="且支持提供 event 参数"):(w+="但是不支持提供 event 参数",v="warn")):(w+="不支持 onclick 函数",v="error"),c?C+="支持 ondone 函数":(C+="不支持 ondone 函数",S="error"),y.html(u.$leftText,`
												<p class="${v}">${w}</p>
												<p class="${S}">${C}</p>`),s=!1,c=!1,l=!1;}catch(w){N.error(w.toString(),{consoleLogContent:!0});}},800);y.on(h,"click",async w=>{try{D.preventEvent(w),clearTimeout(g),clearInterval(m);let v=10,C=v,S=()=>{let E=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${C}s`;return C--,E};y.text(u.$leftText,S()),y.text(u.$leftDesc,f),y.show(u.$leftDesc,!1),g=Ee(()=>{clearInterval(m),ee.setTag(u.$leftText,"error","测试超时，未触发回调");},v*1e3),m=setInterval(()=>{y.text(u.$leftText,S());},1e3),await o.fn({title:`测试 ${o.name} 标题`,text:`测试 ${o.name} 内容`,url:"https://example.com/",onclick:E=>{console.log(E),s=!0,E&&typeof E.preventDefault=="function"&&(l=!0,E.preventDefault()),x();},ondone(){c=!0,x();}});}catch(v){N.error(v.toString(),{consoleLogContent:!0});}}),y.after(i,h);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}),M(()=>{try{let a,i,s=!1,l=!1,c=!1,f="123",d="456",u="notification_tag_"+Date.now(),h={title:"测试通知的内容更新（tag）",text:f,tag:u},g=`更新前：${f}，更新后：${d}`;return {text:h.title,description:g,tag:"info",afterRender(m){a=m.target,i=m.$leftContainer;let x=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),w,v;y.on(x,"click",async C=>{try{D.preventEvent(C),clearTimeout(w),clearInterval(v);let S=5,E=S,L=()=>{let z=`${E}s后通知的内容将更新为：${d}`;return E--,z};y.text(m.$leftDesc,L()),y.show(m.$leftDesc,!1),w=setTimeout(async()=>{clearInterval(v),y.text(m.$leftDesc,g),o.fn({...h,text:d});},S*1e3),v=setInterval(()=>{y.text(m.$leftDesc,L());},1e3),await o.fn(h);}catch(S){N.error(S.toString(),{consoleLogContent:!0});}}),y.after(i,x);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}));}),n}}class is extends le{isSupport(){return typeof pn=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof H.openInTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=pn(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.openInTab,formList:n.forms[2].forms}].forEach(o=>{o.formList.push(M(()=>{try{return {text:"后台打开：https://www.example.com/",tag:"info",afterRender(a){let i=a.target,s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);y.on(s,"click",async l=>{try{D.preventEvent(l),y.text(a.$leftDesc,this.text),y.show(a.$leftDesc,!1);let c=await o.fn("https://www.example.com/");if(typeof c=="object")if(c==null)ee.setTag(a.$leftText,"error","返回值为null");else {let f="close"in c&&typeof c.close=="function",d="closed"in c&&typeof c.closed=="boolean",u="onclose"in c;y.html(a.$leftText,`
													${f?'<p class="success">支持 .close()</p>':'<p class="error">不支持 .close()</p>'}
													${d?'<p class="success">支持 .closed</p>':'<p class="error">不支持 .closed</p>'}
													${u?'<p class="success">支持设置属性 .onclose</p>':'<p class="error">不支持设置属性 .onclose</p>'}
										`);}else ee.setTag(a.$leftText,"error","返回值不是对象："+typeof c);}catch(c){N.error(c.toString(),{consoleLogContent:!0});}}),y.after(a.$leftContainer,s);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}}),M(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(a){let i=a.target,s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),l,c=()=>{clearTimeout(l),ee.setTag(a.$leftText,"success","测试新标签页打开成功");};y.on(s,"click",async f=>{try{D.preventEvent(f),y.off(ve,"blur",c,{capture:!0}),clearTimeout(l),ee.setTag(a.$leftText,"info","等待页面失去焦点..."),y.text(a.$leftDesc,this.text),y.show(a.$leftDesc,!1),y.on(ve,"blur",c,{capture:!0,once:!0}),await o.fn("https://www.example.com/",{active:!0}),l=Ee(()=>{y.off(ve,"blur",c,{capture:!0}),ee.setTag(a.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch(d){N.error(d.toString(),{consoleLogContent:!0});}}),y.after(a.$leftContainer,s);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}}),M(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(a){let i=a.target,s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),l;y.on(s,"click",async c=>{try{D.preventEvent(c),clearTimeout(l),ee.setTag(a.$leftText,"info","等待调用 .close()"),y.text(a.$leftDesc,this.text),y.show(a.$leftDesc,!1);let f=await o.fn("https://www.example.com/");f&&typeof f?.close=="function"?l=Ee(()=>{try{f.close(),ee.setTag(a.$leftText,"success","成功调用 .close()");}catch(d){ee.setTag(a.$leftText,"error","调用 .close() 方法失败 "+d);}},1e3):ee.setTag(a.$leftText,"error","返回对象中不支持 .close() 方法");}catch(f){N.error(f.toString(),{consoleLogContent:!0});}}),y.after(a.$leftContainer,s);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}}),M(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(a){let i=a.target,s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),l,c;y.on(s,"click",async f=>{try{D.preventEvent(f),clearTimeout(c),clearTimeout(l),ee.setTag(a.$leftText,"info","等待触发监听 .onclose"),y.text(a.$leftDesc,this.text),y.show(a.$leftDesc,!1);let d=await o.fn("https://www.example.com/");typeof d=="object"&&d!=null&&(d.onclose=()=>{clearTimeout(l),clearTimeout(c),ee.setTag(a.$leftText,"success","成功触发 .onclose");}),d&&typeof d?.close=="function"?l=Ee(()=>{try{d.close(),c=Ee(()=>{ee.setTag(a.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch(u){ee.setTag(a.$leftText,"error","调用 .close() 方法失败 "+u);}},1e3):ee.setTag(a.$leftText,"error","返回对象中不支持 .close() 方法");}catch(d){N.error(d.toString(),{consoleLogContent:!0});}}),y.after(a.$leftContainer,s);}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}}));}),n}}class ss extends le{isSupport(){return typeof vt=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof H.registerMenuCommand=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=vt(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.registerMenuCommand,formList:n.forms[2].forms}].forEach(o=>{o.formList.push(M(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(a){let i=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);y.after(a.$leftContainer,i);let s,l;y.on(i,"click",async c=>{try{D.preventEvent(c),clearTimeout(s),clearInterval(l),y.text(a.$leftDesc,this.text),y.show(a.$leftDesc,!1);let f=10,d=()=>{let h=`已执行注册菜单，请在${f}s内点击菜单项`;return f--,h};ee.setTag(a.$leftText,"info",d()),l=setInterval(()=>{ee.setTag(a.$leftText,"info",d());},1e3),s=Ee(()=>{clearInterval(l),ee.setTag(a.$leftText,"error","测试超时，未触发回调");},10*1e3);const u=await o.fn("Test Menu",h=>{try{clearInterval(l),clearTimeout(s),ee.clearTag(a.$leftText);let g=[];g.push({tag:"success",text:"支持注册菜单"}),h?g.push({tag:"success",text:"支持点击回调且有event参数"}):g.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof u=="number"||typeof u=="string"?g.push({tag:"success",text:"函数返回值是string|number"}):g.push({tag:"error",text:"函数返回值不是string|number："+typeof u}),y.html(a.$leftText,g.map(m=>`<p class="${m.tag}">${m.text}</p>`).join(`
`));}catch(g){N.error(g.toString(),{consoleLogContent:!0});}});}catch(f){N.error(f.toString(),{consoleLogContent:!0});}});}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}),M(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(a){let i=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);y.after(a.$leftContainer,i);let s;y.on(i,"click",async l=>{try{D.preventEvent(l),clearTimeout(s);const c=await o.fn("Test Update Menu",f=>{});N.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(s),s=Ee(async()=>{await o.fn("Test Update Menu Success!!!",()=>{},{id:c}),N.success("已执行更新菜单命令，请自行验证");},3e3);}catch(c){N.error(c.toString(),{consoleLogContent:!0});}});}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}));}),n}}class ls extends le{isSupport(){return typeof un=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof H.removeValueChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=un(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.removeValueChangeListener,formList:n.forms[2].forms}].forEach(o=>{o.name,o.formList.push((()=>{let a=e+"_key_1";return M(()=>({text:"测试移除监听器",description:"",tag:"info",afterRender(i){let s=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(i.$leftContainer,s);let l=[];y.on(s,"click",async c=>{D.preventEvent(c);try{l=[],ee.setTag(i.$leftText,"info","等待移除监听器"),y.text(i.$leftDesc,this.text),y.show(i.$leftDesc,!1);let f=D.formatTime(Date.now()),d=Ht(a,function(u,h,g,m){console.log(arguments),l.push({tag:"error",text:"未成功移除监听器"}),ee.setTagList(i.$leftText,l);});await o.fn(d),l.push({tag:"success",text:"支持移除监听器"}),ee.setTagList(i.$leftText,l),De(a,f);}catch(f){N.error(f.toString(),{consoleLogContent:true});}});}}))})());}),n}}class cs extends le{isSupport(){return typeof yo=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof H.saveTab=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>{try{return {text:fe.escapeHtml("TODO"),tag:"info"}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}})),n}}class fs extends le{isSupport(){return typeof bn=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof H.setClipboard=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{if(typeof o[2]=="function"){const i=o[2];o[2]=(...s)=>{i(...s),a(void 0);};}bn(...o);}),formList:n.forms[1].forms},{name:t.name,fn:async(...o)=>{const a=o[2];await H.setClipboard(...o),typeof a=="function"&&a();},formList:n.forms[2].forms}].forEach(o=>{o.formList.push(M(()=>({text:"复制内容到剪贴板：Test "+o.name,tag:"info",afterRender(a){let i=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);y.after(a.$leftContainer,i);let s;y.on(i,"click",async l=>{try{D.preventEvent(l),clearTimeout(s),N.info("等待3s内触发成功复制的回调"),s=Ee(()=>{ee.setTag(a.$leftText,"error","不支持触发回调函数");},3e3),await o.fn("Test "+o.name,"text",()=>{clearTimeout(s),ee.setTag(a.$leftText,"success","支持触发回调函数");});}catch(c){N.error(c.toString(),{consoleLogContent:true});}});}})));}),n}}class ds extends le{isSupport(){return typeof De=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof H.setValue=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=De(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.setValue,formList:n.forms[2].forms}].forEach(o=>{let a=o.name;o.formList.push(...[{key:`Test ${a} boolean`,value:true,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} number`,value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} string`,value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:`Test ${a} undefined`,value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} null`,value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:`Test ${a} object`,value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(i=>(()=>{let s=i.key,l=i.value;return M(()=>({text:i.text(),description:i.desc(),tag:"info",afterRender(c){let f=y.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);y.after(c.$leftContainer,f),y.on(f,"click",async d=>{D.preventEvent(d);try{await o.fn(s,l),N.info("执行写入完毕，请自行查看是否成功写入");}catch(u){N.error(u.toString(),{consoleLogContent:true});}});}}))})()));}),n}}class ps extends le{isSupport(){return typeof At=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof H.setValues=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=At(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.setValues,formList:n.forms[2].forms}].forEach(o=>{o.name,o.formList.push((()=>{let a={foo:1,bar:2};return M(()=>({text:"测试存储对象",description:JSON.stringify(a),tag:"info",afterRender(i){let s=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);y.after(i.$leftContainer,s),y.on(s,"click",async l=>{D.preventEvent(l);try{await o.fn(a),N.info("执行写入完毕，请自行查看是否成功写入");}catch(c){N.error(c.toString(),{consoleLogContent:true});}});}}))})());}),n}}class us extends le{isSupport(){return typeof Ut=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof H.unregisterMenuCommand=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]};return this.isSupport()&&[{name:e,fn:async(...o)=>new Promise(a=>{const i=Ut(...o);a(i);}),formList:n.forms[1].forms},{name:t.name,fn:H.unregisterMenuCommand,formList:n.forms[2].forms}].forEach(o=>{o.formList.push(M(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(a){let i=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);y.after(a.$leftContainer,i);let s;y.on(i,"click",l=>{try{D.preventEvent(l),clearTimeout(s);const c=vt("Test UnRegister Menu",f=>{});N.info("已注册菜单，10s后自动执行卸载",{timeout:10*1e3}),clearTimeout(s),s=Ee(async()=>{await o.fn(c),N.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(c){N.error(c.toString(),{consoleLogContent:!0});}});}}}catch(a){return console.error(a),{text:"执行错误 "+a,tag:"error"}}finally{}}));}),n}}class bs extends le{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof ve=="object"&&ve!=null}getUIOption(){let e=this.getApiName(),t={id:"aside-"+e,title:e,headerTitle:`${ie.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(n){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&t.forms[1].forms.push(M(()=>{let n="test-gm-window",o=Pe==ve;return Pe[n]=n,o=typeof ve[n]!="string",Reflect.deleteProperty(Pe,n),o?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),t}}class hs extends le{isSupport(){return typeof xo=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof H.webRequest=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>{try{return {text:fe.escapeHtml("TODO"),tag:"info"}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}})),n}}class ms extends le{isSupport(){return typeof Bn=="function"}getApiName(){return "GM_xmlhttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof H.xmlHttpRequest=="function"}}getUIOption(){let e=this.getApiName(),t=this.getAsyncApiOption(),n={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e,`${e} & ${t.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(o){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:"支持 "+e,tag:"success"}:{text:"不支持 "+e,tag:"error"}),M(()=>t.isSupport?{text:"支持 "+t.name,tag:"success"}:{text:"不支持 "+t.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(M(()=>{try{return {text:fe.escapeHtml("TODO"),tag:"info"}}catch(o){return console.error(o),{text:"执行错误 "+o,tag:"error"}}finally{}})),n}}class gs extends le{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof H=="object"&&H!=null}getUIOption(){}}class ys extends le{isSupport(){return (typeof we=="object"||typeof we=="function")&&we!=null&&typeof we?.setMute=="function"&&typeof we?.getState=="function"&&typeof we?.addStateChangeListener=="function"&&typeof we?.removeStateChangeListener=="function"}getApiOption(){let e=this.isSupport();return {isSupport_setMute:e&&typeof we?.setMute=="function",isSupport_getState:e&&typeof we?.getState=="function",isSupport_addStateChangeListener:e&&typeof we?.addStateChangeListener=="function",isSupport_removeStateChangeListener:e&&typeof we?.removeStateChangeListener=="function"}}getApiName(){return "GM_audio"}getAsyncApiOption(){let e=this.isSupportGM()&&(typeof H.audio=="object"||typeof H.audio=="function")&&H.audio!=null&&typeof H.audio?.setMute=="function"&&typeof H.audio?.getState=="function"&&typeof H.audio?.addStateChangeListener=="function"&&typeof H.audio?.removeStateChangeListener=="function";return {name:"GM.audio",isSupport:e,isSupport_setMute:e&&typeof H.audio?.setMute=="function",isSupport_getState:e&&typeof H.audio?.getState=="function",isSupport_addStateChangeListener:e&&typeof H.audio?.addStateChangeListener=="function",isSupport_removeStateChangeListener:e&&typeof H.audio?.removeStateChangeListener=="function"}}getUIOption(){let e=this.getApiName(),t=this.getApiOption(),n=this.getAsyncApiOption(),o={id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e+".setMute",`${e} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(i){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"函数测试",forms:[M(()=>this.isSupport()?{text:`支持 ${e}，类型：${typeof we}`,tag:"success"}:{text:"不支持 "+e,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]},{type:"forms",text:"功能测试（异步）",forms:[]}]},a=o.forms[0].forms;return this.isSupport()&&a.push(M(()=>t.isSupport_setMute?{text:`支持 ${e}.setMute`,tag:"success"}:{text:`不支持 ${e}.setMute`,tag:"error"}),M(()=>t.isSupport_getState?{text:`支持 ${e}.getState`,tag:"success"}:{text:`不支持 ${e}.getState`,tag:"error"}),M(()=>t.isSupport_addStateChangeListener?{text:`支持 ${e}.addStateChangeListener`,tag:"success"}:{text:`不支持 ${e}.addStateChangeListener`,tag:"error"}),M(()=>t.isSupport_removeStateChangeListener?{text:`支持 ${e}.removeStateChangeListener`,tag:"success"}:{text:`不支持 ${e}.removeStateChangeListener`,tag:"error"})),n.isSupport?a.push(M(()=>n.isSupport_setMute?{text:`支持 ${n.name}.setMute`,tag:"success"}:{text:`不支持 ${n.name}.setMute`,tag:"error"}),M(()=>n.isSupport_getState?{text:`支持 ${n.name}.getState`,tag:"success"}:{text:`不支持 ${n.name}.getState`,tag:"error"}),M(()=>n.isSupport_addStateChangeListener?{text:`支持 ${n.name}.addStateChangeListener`,tag:"success"}:{text:`不支持 ${n.name}.addStateChangeListener`,tag:"error"}),M(()=>n.isSupport_removeStateChangeListener?{text:`支持 ${n.name}.removeStateChangeListener`,tag:"success"}:{text:`不支持 ${n.name}.removeStateChangeListener`,tag:"error"})):a.push(M(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()&&[{name:e,setMute:async(...i)=>new Promise((s,l)=>{const[c,f]=i;we.setMute(c,d=>{d?l(d):s(void 0);});}),getState:async(...i)=>new Promise((s,l)=>{const[c,f]=i;we.getState(d=>{d||l(new Error("failed to read state")),s(d);});}),addStateChangeListener:async(...i)=>new Promise((s,l)=>{const[c]=i;we.addStateChangeListener(c,f=>{f?l(f):s(void 0);});}),removeStateChangeListener:async(...i)=>new Promise((s,l)=>{const[c]=i;we.removeStateChangeListener(c,f=>{f?l(f):s(void 0);});}),formList:o.forms[1].forms},{name:n.name,setMute:async(...i)=>{const[s]=i;return await H.audio?.setMute(s)},getState:async(...i)=>{const s=await H.audio?.getState();if(typeof s=="object"&&s!=null){if(typeof s?.isMuted!="boolean")throw new Error("GM.audio.getState 返回值类型错误");return s}else throw new Error("返回值不是一个对象")},addStateChangeListener:H.audio?.addStateChangeListener,removeStateChangeListener:H.audio?.removeStateChangeListener,formList:o.forms[2].forms}].forEach(i=>{i.name,i.formList.push(M(()=>{try{return {text:fe.escapeHtml("测试设置当前tab静音"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=y.parseHTML(`
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,!1,!1);y.on(l,"click",async c=>{try{D.preventEvent(c);const f=await i.setMute({isMuted:!0});console.log(i.name+".setMute result：",f),f===void 0?ee.setTag(s.$leftText,"success","执行成功"):ee.setTag(s.$leftText,"warn","执行成功，但返回值类型不同："+f),y.text(s.$leftDesc,this.text),y.show(s.$leftDesc,!1);}catch(f){N.error(f.toString(),{consoleLogContent:!0});}}),y.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试取消当前tab静音"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=y.parseHTML(`
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,!1,!1);y.on(l,"click",async c=>{try{D.preventEvent(c);const f=await i.setMute({isMuted:!1});console.log(i.name+".setMute result：",f),f===void 0?ee.setTag(s.$leftText,"success","执行成功"):ee.setTag(s.$leftText,"warn","执行成功，但返回值类型不同："+f),y.text(s.$leftDesc,this.text),y.show(s.$leftDesc,!1);}catch(f){N.error(f.toString(),{consoleLogContent:!0});}}),y.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("获取当前tab静音状态信息"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);y.on(l,"click",async c=>{try{D.preventEvent(c);const f=await i.getState();if(console.log(i.name+".getState result：",f),typeof f=="object"&&f!==null){const d=[];typeof f?.isMuted=="boolean"?d.push(`
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
                                                    `),ee.setTag(s.$leftText,"success",d.join(`
`));}else ee.setTag(s.$leftText,"error","返回值类型错误："+typeof f);y.text(s.$leftDesc,this.text),y.show(s.$leftDesc,!1),alert(JSON.stringify(f,null,4));}catch(f){N.error(f.toString(),{consoleLogContent:!0});}}),y.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试监听静音状态改变"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1),c;y.on(l,"click",async f=>{try{D.preventEvent(f),await i.addStateChangeListener(d=>{console.log(i.name+".addStateChangeListener callback change value：",d),alert(JSON.stringify(d,null,4));}),await D.sleep(500),await i.setMute({isMuted:!0}),await D.sleep(500),await i.setMute({isMuted:!1});}catch(d){N.error(d.toString(),{consoleLogContent:!0});}}),y.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),M(()=>{try{return {text:fe.escapeHtml("测试移除监听器"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=y.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1),c=!0,f;y.on(l,"click",async d=>{try{D.preventEvent(d);let u=h=>{c=!1,N.error("移除监听器失败");};f=N.loading("处理监听器中..."),await i.addStateChangeListener(u),await i.removeStateChangeListener(u),f.setText("等待500ms，设置当前Tab静音"),await D.sleep(500),await i.setMute({isMuted:!0}),f.setText("等待500ms，设置当前Tab取消静音"),await D.sleep(500),await i.setMute({isMuted:!1}),f.close(),c&&N.success("移除监听器成功");}catch(u){f?.close(),N.error(u.toString(),{consoleLogContent:!0});}}),y.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}));}),o}}const Se={unsafeWindow:new bs,GM:new gs,addElement:new Fi,addStyle:new Gi,download:new Xi,getResourceText:new Qi,getResourceUrl:new Yi,info:new ns,log:new as,notification:new rs,openInTab:new is,registerMenuCommand:new ss,unregisterMenuCommand:new us,setClipboard:new fs,getTab:new Ji,saveTab:new cs,getTabs:new Zi,setValue:new ds,getValue:new es,deleteValue:new Wi,listValues:new os,setValues:new ps,getValues:new ts,deleteValues:new Ki,addValueChangeListener:new ji,removeValueChangeListener:new ls,xmlHttpRequest:new ms,webRequest:new hs,cookie:new qi,audio:new ys},Ue={$storageKey:"gm-api-test-storage-config",set(r,e){let t=window.localStorage.getItem(Ue.$storageKey)??"{}",n=D.toJSON(t);n[r]=e,window.localStorage.setItem(Ue.$storageKey,JSON.stringify(n,(o,a)=>typeof a=="function"?a.tString():a));},get(r,e){let t=window.localStorage.getItem(Ue.$storageKey)??"{}";return D.toJSON(t)[r]??e},delete(r){let e=window.localStorage.getItem(Ue.$storageKey)??"{}",t=D.toJSON(e);Reflect.deleteProperty(t,r),window.localStorage.setItem(Ue.$storageKey,JSON.stringify(t,(n,o)=>typeof o=="function"?o.tString():o));}},q={set(r,e){Se.setValue.isSupport()&&Se.getValue.isSupport()&&Se.deleteValue.isSupport()?De(r,e):Ue.set(r,e);},get(r,e){return Se.setValue.isSupport()&&Se.getValue.isSupport()&&Se.deleteValue.isSupport()?ot(r,e):Ue.get(r,e)},delete(r){Se.setValue.isSupport()&&Se.getValue.isSupport()&&Se.deleteValue.isSupport()?yt(r):Ue.delete(r);}},xs=()=>{let r=[],e=[];Object.keys(Se).forEach(n=>{let o=Se[n],a=o.getApiName(),i=o.isSupport(),s=o.getAsyncApiOption();i?r.push({name:a,isSupport:i}):e.push({name:a,isSupport:i}),s&&(s.isSupport?r.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+a}):e.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+a}));});let t=n=>{let o=y.createElement("div",{className:"gm-api-features-item",innerHTML:`
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
			`});return y.on(o,"click",a=>{D.preventEvent(a);let i=o.getRootNode(),s=D.isNotNull(n.leftTargetSelector)?n.leftTargetSelector:"#aside-"+n.name,l=i.querySelector(s);l&&(l.click(),l.scrollIntoView({behavior:"smooth"}));}),o};return {id:"component-common",title:"通用",scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)==="component-common"},clickCallback(n){q.set(j.asideLastVisit,"component-common");},forms:[{type:"forms",text:"@run-at document-start<br>注：注入速度等级越低，注入的速度越快<br>范围：0~4",forms:[M(()=>({text:fe.escapeHtml(tt),tag:"info"}))]},{type:"forms",text:"特性",afterAddToUListCallBack(n,o){o.formHeaderDivElement.style.fontSize="1.2em",o.formHeaderDivElement.style.fontWeight="700";},forms:[]},{type:"forms",text:"不支持列表",afterAddToUListCallBack(n,o){o.formHeaderDivElement.style.color="rgb(216, 30, 6)",o.formHeaderDivElement.style.fontWeight="600",e.length===0&&o.formContainerListElement?.remove();},forms:[{type:"own",getLiElementCallBack(n){let o=y.createElement("div",{className:"gm-api-features-not-support"}),a=document.createDocumentFragment();return e.forEach(i=>{a.append(t(i));}),o.appendChild(a),n.appendChild(o),n}}]},{type:"forms",text:"支持列表",afterAddToUListCallBack(n,o){o.formHeaderDivElement.style.fontWeight="600",r.length===0&&o.formContainerListElement?.remove();},forms:[{type:"own",getLiElementCallBack(n){let o=y.createElement("div",{className:"gm-api-features-support"}),a=document.createDocumentFragment();return r.forEach(i=>{a.append(t(i));}),o.appendChild(a),n.appendChild(o),n}}]}]}};class ws extends _t{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(n){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"功能测试",forms:[M(()=>{try{return {text:fe.escapeHtml("测试window.onurlchange"),tag:"info",description:"点击按钮进行测试",afterRender(n){let o=y.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1),a=s=>{clearTimeout(i),console.log("urlchange event info ==> ",s),N.success("urlchange event ==> url is changed");},i;y.on(o,"click",s=>{try{D.preventEvent(s),clearTimeout(i),Pe.onurlchange===null?(Pe.removeEventListener("urlchange",a),Pe.addEventListener("urlchange",a),window.history.pushState({},"","#/onurlchange"),i=setTimeout(()=>{N.error("urlchange event is not trigger");},1e3)):N.error("window.onurlchange is not null");}catch(l){N.error(l.toString(),{consoleLogContent:!0});}}),y.after(n.$leftContainer,o);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class vs extends _t{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(n){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"功能测试",forms:[M(()=>{try{return {text:fe.escapeHtml("测试window.close"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let o=y.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1);y.on(o,"click",a=>{D.preventEvent(a);try{Pe.close();}catch(i){N.error(i.toString(),{consoleLogContent:!0});}}),y.after(n.$leftContainer,o);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class As extends _t{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let e=this.getApiName();return {id:"aside-"+e,title:""+e,headerTitle:`${ie.getApiDocUrl(e)}`,scrollToDefaultView:true,isDefault(){return q.get(j.asideLastVisit)===e},clickCallback(n){q.set(j.asideLastVisit,e);},forms:[{type:"forms",text:"功能测试",forms:[M(()=>{try{return {text:fe.escapeHtml("测试window.focus"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let o=y.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
										`,!1,!1),a=()=>{setTimeout(()=>{Pe.focus();},3e3);};y.on(o,"click",i=>{D.preventEvent(i),window.removeEventListener("blur",a,{capture:!0}),window.addEventListener("blur",a,{capture:!0,once:!0});try{N.info("请切换至其它Tab页面，切换完毕3秒后会自动调用该函数");}catch(s){N.error(s.toString(),{consoleLogContent:!0});}}),y.after(n.$leftContainer,o);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}if(Re.isTopWindow()){let r=()=>{Re.showPanel(bt.getConfig(0),void 0,void 0,true);},e=Kt.getMenuOption(0);e.callback=()=>{r();},Kt.updateMenuOption(e);let t=[xs()];Object.keys(Se).forEach(n=>{let a=Se[n].getUIOption();a&&t.push(a);}),t.push(new ws().getUIOption()),t.push(new vs().getUIOption()),t.push(new As().getUIOption()),bt.addContentConfig(t),Re.$data.panelConfig={style:`
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
	`},Re.init(),r();}

})();