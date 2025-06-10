// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.6.10
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

	var Yr=Object.defineProperty;var Bn=o=>{throw TypeError(o)};var Jr=(o,t,e)=>t in o?Yr(o,t,{enumerable:true,configurable:true,writable:true,value:e}):o[t]=e;var O=(o,t,e)=>Jr(o,typeof t!="symbol"?t+"":t,e),Nn=(o,t,e)=>t.has(o)||Bn("Cannot "+e);var m=(o,t,e)=>(Nn(o,t,"read from private field"),e?e.call(o):t.get(o)),ft=(o,t,e)=>t.has(o)?Bn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),pt=(o,t,e,n)=>(Nn(o,t,"write to private field"),t.set(o,e),e);var Un=(o,t,e,n)=>({set _(r){pt(o,t,r);},get _(){return m(o,t,n)}});var it=typeof GM<"u"?GM:void 0,Fe=typeof GM_addElement<"u"?GM_addElement:void 0,Vn=typeof GM_addStyle<"u"?GM_addStyle:void 0,wn=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,Kt=typeof GM_cookie<"u"?GM_cookie:void 0,Ke=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,zn=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,Zr=typeof GM_download<"u"?GM_download:void 0,Xe=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,Gn=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,Fn=typeof GM_getTab<"u"?GM_getTab:void 0,ta=typeof GM_getTabs<"u"?GM_getTabs:void 0,ne=typeof GM_getValue<"u"?GM_getValue:void 0,we=typeof GM_getValues<"u"?GM_getValues:void 0,wt=typeof GM_info<"u"?GM_info:void 0,jn=typeof GM_listValues<"u"?GM_listValues:void 0,qn=typeof GM_log<"u"?GM_log:void 0,hn=typeof GM_notification<"u"?GM_notification:void 0,Le=typeof GM_openInTab<"u"?GM_openInTab:void 0,ve=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Wn=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,ea=typeof GM_saveTab<"u"?GM_saveTab:void 0,Kn=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,qt=typeof GM_setValue<"u"?GM_setValue:void 0,Qe=typeof GM_setValues<"u"?GM_setValues:void 0,vn=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,na=typeof GM_webRequest<"u"?GM_webRequest:void 0,mr=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,$t=typeof unsafeWindow<"u"?unsafeWindow:void 0,Qt=window;function ra(){try{typeof Object.assign!="function"&&(Object.assign=function(o){return o=Object(o),arguments.length>1&&[...arguments].splice(1,arguments.length-1).forEach(e=>{for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);}),o});}catch(o){console.warn("Qmsg CompatibleProcessing Object.assign error",o);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var o=this;function t(e){return function(n){var r=o.className.split(/\s+/g),a=r.indexOf(n);e(r,a,n),o.className=r.join(" ");}}return {add:t(function(e,n,r){~n||e.push(r);}),remove:t(function(e,n){~n&&e.splice(n,1);}),toggle:t(function(e,n,r){~n?e.splice(n,1):e.push(r);}),contains:function(e){return !!~o.className.split(/\s+/g).indexOf(e)},item:function(e){return o.className.split(/\s+/g)[e]||null}}}});}catch(o){console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning",o);}}const Ot={get PLUGIN_NAME(){return "qmsg"},get NAMESPACE(){return "qmsg"},INS_DEFAULT:{},get config(){return {parent:document.body||document.documentElement,useShadowRoot:true,shadowRootMode:"open",animation:true,autoClose:true,listenEventToPauseAutoClose:true,content:"",html:false,isHTML:false,position:"top",showClose:false,maxNums:5,onClose:null,showIcon:true,showMoreContent:false,showReverse:false,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:false,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:false,afterRender:null}}},aa=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,yr={info:`
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
		</svg>`},Rt={insInfoList:[],remove(o){let t=false;for(let e=0;e<Rt.insInfoList.length;e++)if(Rt.insInfoList[e].uuid===o){Rt.insInfoList.splice(e,1),t=true;break}return t}},oa=o=>(t,e)=>(o.set(t,e),e),Xn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,xr=536870912,Qn=xr*2,ia=(o,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<Qn?n+1:0;if(!e.has(r))return o(e,r);if(e.size<xr){for(;e.has(r);)r=Math.floor(Math.random()*Qn);return o(e,r)}if(e.size>Xn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*Xn);return o(e,r)},wr=new WeakMap,sa=oa(wr),An=ia(sa,wr),la=o=>typeof o.start=="function",Yn=new WeakMap,ca=o=>({...o,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return Yn.set(n,r),n},disconnect:({call:t})=>async e=>{const n=Yn.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),bn=new WeakMap,da=o=>{if(bn.has(o))return bn.get(o);const t=new Map;return bn.set(o,t),t},fa=o=>{const t=ca(o);return e=>{const n=da(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}}),la(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((d,f)=>{const p=An(n);n.set(p,{reject:f,resolve:d}),l===null?e.postMessage({id:p,method:s},c):e.postMessage({id:p,method:s,params:l},c);}),a=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:a})};return {...i}}},ie=new Map([[0,null]]),se=new Map([[0,null]]),pa=fa({clearInterval:({call:o})=>t=>{typeof ie.get(t)=="symbol"&&(ie.set(t,null),o("clear",{timerId:t,timerType:"interval"}).then(()=>{ie.delete(t);}));},clearTimeout:({call:o})=>t=>{typeof se.get(t)=="symbol"&&(se.set(t,null),o("clear",{timerId:t,timerType:"timeout"}).then(()=>{se.delete(t);}));},setInterval:({call:o})=>(t,e=0,...n)=>{const r=Symbol(),a=An(ie);ie.set(a,r);const i=()=>o("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=ie.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),ie.get(a)===r&&i());});return i(),a},setTimeout:({call:o})=>(t,e=0,...n)=>{const r=Symbol(),a=An(se);return se.set(a,r),o("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=se.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(se.delete(a),t(...n));}),a}}),ua=o=>{const t=new Worker(o);return pa(t)},ha=(o,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=o(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},ba=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,tn=ha(ua,ba),ga=o=>tn().clearInterval(o),ma=o=>tn().clearTimeout(o),ya=(...o)=>tn().setInterval(...o),xa=(...o)=>tn().setTimeout(...o),yt={getNameSpacify(...o){let t=Ot.NAMESPACE;for(let e=0;e<o.length;++e)t+="-"+o[e];return t},isNumber(o){return /^\d+$/.test(o)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){let t=Math.random()*16|0;return (o=="x"?t:t&3|8).toString(16)})},mergeArgs(o="",t){let e={};if(arguments.length===0)return e;if(t!=null){if(e.content=o,typeof t=="object"&&t!=null)return Object.assign(e,t)}else {if(typeof o=="object"&&o!=null)return Object.assign(e,o);e.content=o;}return e},toDynamicObject(o,...t){let e=Object.assign({},o??{});return Object.keys(e).forEach(n=>{let r=e[n];Object.defineProperty(e,n,{get(){let a=t.findIndex(i=>typeof i=="object"&&i!=null&&i.hasOwnProperty.call(i,n));return a!==-1?t[a][n]:r},set(a){r=a;}});}),e},setTimeout(o,t){try{return xa(o,t)}catch{return globalThis.setTimeout(o,t)}},clearTimeout(o){try{o!=null&&ma(o);}catch{}finally{globalThis.clearTimeout(o);}},setInterval(o,t){try{return ya(o,t)}catch{return globalThis.setInterval(o,t)}},clearInterval(o){try{o!=null&&ga(o);}catch{}finally{globalThis.clearInterval(o);}},setSafeHTML(o,t){try{o.innerHTML=t;}catch{if(globalThis.trustedTypes){const n=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:r=>r});o.innerHTML=n.createHTML(t);}else throw new Error("QmsgUtils trustedTypes is not defined")}}},Ut={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},__CAN_ANIMATION__:void 0,get CAN_ANIMATION(){return this.__CAN_ANIMATION__=this.__CAN_ANIMATION__??this.getStyleAnimationNameValue(document.createElement("div"))!=null,this.__CAN_ANIMATION__},getStyleAnimationNameValue(o){for(let t=0;t<this.$name.startNameList.length;t++){let e=this.$name.startNameList[t],n=o.style[e];if(n!=null)return n}},setStyleAnimationName(o,t=""){this.$name.startNameList.forEach(e=>{e in o.style&&(o.style[e]=t);});}},wa={css:`@charset "utf-8";
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
      }`,getStyleElement(){let o=document.createElement("style");return o.setAttribute("type","text/css"),o.setAttribute("data-type",Ot.PLUGIN_NAME),yt.setSafeHTML(o,this.css),o}};class va{constructor(t,e){O(this,"timeId");O(this,"startTime");O(this,"endTime");O(this,"setting");O(this,"uuid");O(this,"state");O(this,"repeatNum");O(this,"$Qmsg");this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=yt.toDynamicObject(Ot.config,t,Ot.INS_DEFAULT),this.uuid=e,this.state="opening",this.$Qmsg=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.init(),(typeof this.setting.consoleLogContent=="function"?this.setting.consoleLogContent(this):this.setting.consoleLogContent)&&console.log(this.setting.content),typeof this.setting.afterRender=="function"&&this.setting.afterRender(this);}getSetting(){return this.setting}getRepeatNum(){return this.repeatNum}setRepeatNum(t){this.repeatNum=t;}setRepeatNumIncreasing(){this.repeatNum++;}init(){let t=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$Qmsg.classList.add(this.setting.customClass);let e=yr[this.setting.type||"info"],n=yt.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(n+=" "+yt.getNameSpacify("content-with-close"));let r=this.setting.content||"",a="",i=aa;this.setting.showMoreContent&&(n+="qmsg-show-more-content",a+="qmsg-show-more-content");let s="";this.setting.showClose&&(s=`<i class="qmsg-icon qmsg-icon-close ${a}">${i}</i>`);let l=document.createElement("span"),c=yt.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.html||this.setting.isHTML?yt.setSafeHTML(l,r):l.innerText=r,this.setting.isLimitWidth){let b=this.setting.limitWidthNum;typeof b=="string"?yt.isNumber(b)&&(b=b+"px"):b=b.toString()+"px",l.style.maxWidth=b,l.style.width=b,this.setting.limitWidthWrap==="no-wrap"?l.style.whiteSpace="nowrap":this.setting.limitWidthWrap==="ellipsis"?(l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis"):this.setting.limitWidthWrap==="wrap"&&(l.style.whiteSpace="");}yt.setSafeHTML(this.$Qmsg,`
			<div class="qmsg-content">
				<div class="${n}">
				${this.setting.showIcon?`<i class="qmsg-icon">${e}</i>`:""}
					${l.outerHTML}
					${s}
				</div>
			</div>
			`);let d=this.$Qmsg.querySelector(".qmsg-content");this.$Qmsg.classList.add(yt.getNameSpacify("item")),this.$Qmsg.setAttribute(yt.getNameSpacify("uuid"),this.uuid);let f,p,g;if(f=document.querySelector(".qmsg-shadow-container"),p=this.setting.useShadowRoot?f==null?void 0:f.shadowRoot:f,!f){if(f=document.createElement("div"),f.className="qmsg-shadow-container",this.setting.useShadowRoot?p=f.attachShadow({mode:this.setting.shadowRootMode}):p=f,p.appendChild(wa.getStyleElement()),this.setting.style!=null){let b=document.createElement("style");b.setAttribute("type","text/css"),b.setAttribute("data-id",this.uuid),yt.setSafeHTML(b,this.setting.style),d.insertAdjacentElement("afterend",b);}this.setting.parent.appendChild(f);}if(p==null)throw new Error("QmsgInst "+Ot.PLUGIN_NAME+" $shadowRoot is null");g=p.querySelector(`.${Ot.NAMESPACE}.${c}`),g||(g=document.createElement("div"),g.classList.add(Ot.NAMESPACE,yt.getNameSpacify("wrapper"),yt.getNameSpacify("is-initialized"),c),p.appendChild(g)),this.setting.showReverse?g.style.flexDirection="column-reverse":g.style.flexDirection="column";let v=this.setting.zIndex;if(typeof v=="function"&&(v=v()),isNaN(v)||(g.style.zIndex=v.toString()),g.appendChild(this.$Qmsg),this.setState(this.$Qmsg,"opening"),this.setting.showClose){let b=this.$Qmsg.querySelector(".qmsg-icon-close");b&&b.addEventListener("click",A=>{t.close();});}let h=b=>{Ut.getStyleAnimationNameValue(t.$Qmsg)===Ut.$state.closing&&(t.endTime=Date.now(),t.destroy()),Ut.setStyleAnimationName(t.$Qmsg);};if(Ut.$name.endNameList.forEach(function(b){t.$Qmsg.addEventListener(b,h);}),this.setting.autoClose&&this.setting.listenEventToPauseAutoClose){this.resetAutoCloseTimer();let b=E=>{this.clearAutoCloseTimer();},A=E=>{if(this.timeId!=null){console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId："+this.timeId);return}this.startAutoCloseTimer();},T=false;this.$Qmsg.addEventListener("mouseenter",b),this.$Qmsg.addEventListener("mouseleave",A),this.$Qmsg.addEventListener("touchstart",E=>{T||(T=true,this.$Qmsg.removeEventListener("mouseenter",b),this.$Qmsg.removeEventListener("mouseleave",A)),b();}),this.$Qmsg.addEventListener("touchend",A),this.$Qmsg.addEventListener("touchcancel",A);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=Ot.config.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=Ot.config.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof Ot.config.zIndex=="function"?Ot.config.zIndex():Ot.config.zIndex);}setState(t,e){!e||!Ut.$state[e]||(this.state=e,Ut.setStyleAnimationName(t,Ut.$state[e]));}setMsgCount(){let t=yt.getNameSpacify("count"),e=`div.${yt.getNameSpacify("data-position",this.setting.position.toLowerCase())} [class^="qmsg-content-"]`,n=this.$Qmsg.querySelector(e);if(!n)throw new Error("QmsgInst $content is null");let r=n.querySelector("."+t);r||(r=document.createElement("span"),r.classList.add(t),n.appendChild(r));let a=this.getRepeatNum();yt.setSafeHTML(r,a.toString()),Ut.setStyleAnimationName(r),Ut.setStyleAnimationName(r,"MessageShake"),this.resetAutoCloseTimer();}clearAutoCloseTimer(){yt.clearTimeout(this.timeId),this.timeId=void 0,this.startTime=null,this.endTime=null;}startAutoCloseTimer(){this.setting.autoClose&&this.setting.listenEventToPauseAutoClose&&(this.startTime=Date.now(),this.endTime=null,this.timeId=yt.setTimeout(()=>{this.close();},this.setting.timeout));}resetAutoCloseTimer(){this.clearAutoCloseTimer(),this.startAutoCloseTimer();}close(){this.setState(this.$Qmsg,"closing"),Ut.CAN_ANIMATION?Rt.remove(this.uuid):this.destroy();let t=this.setting.onClose;t&&typeof t=="function"&&t.call(this);}destroy(){this.endTime=Date.now(),this.$Qmsg.remove(),yt.clearTimeout(this.timeId),Rt.remove(this.uuid),this.timeId=void 0;}get $content(){let t=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(!t)throw new Error("QmsgInst $content is null");return t}setText(t){let e=this.$content;e.innerText=t,this.setting.content=t;}setHTML(t){let e=this.$content;yt.setSafeHTML(e,t),this.setting.content=t;}}function $e(o={}){let t=JSON.stringify(o),e=Rt.insInfoList.find(r=>r.config===t),n=e==null?void 0:e.instance;if(n==null){let r=yt.getUUID(),a={uuid:r,config:t,instance:new va(o,r)};Rt.insInfoList.push(a);let i=Rt.insInfoList.length,s=a.instance.getSetting().maxNums;if(i>s)for(let l=0;l<i-s;l++){let c=Rt.insInfoList[l];c&&c.instance.getSetting().autoClose&&c.instance.close();}e=a,n=a.instance;}else n.getRepeatNum()?n.getRepeatNum()>=99||n.setRepeatNumIncreasing():n.setRepeatNum(2),n.setMsgCount();if(n)n.$Qmsg.setAttribute("data-count",n==null?void 0:n.getRepeatNum().toString());else throw new Error("QmsgInst is null");return n}const Oe={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let o=0;o<Rt.insInfoList.length;o++){let t=Rt.insInfoList[o];t.instance.setting.type!=="loading"&&t.instance.endTime==null&&t.instance.startTime!=null&&Date.now()-t.instance.startTime>=t.instance.getSetting().timeout&&t.instance.close();}},option:{capture:true}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",Oe.visibilitychange.eventConfig.callback,Oe.visibilitychange.eventConfig.option):console.error("Qmsg addEvent visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",Oe.visibilitychange.eventConfig.callback,Oe.visibilitychange.eventConfig.option);}}};ra();class Aa{constructor(t){O(this,"$data");O(this,"$eventUtils");this.$data={version:"2025.6.7",config:Ot,icon:yr,instanceStorage:Rt},this.$eventUtils=Oe,this.$eventUtils.visibilitychange.addEvent(),this.config(t);}config(t){t!=null&&typeof t=="object"&&(Ot.INS_DEFAULT=null,Ot.INS_DEFAULT=t);}info(t,e){let n=yt.mergeArgs(t,e);return n.type="info",$e.call(this,n)}warning(t,e){let n=yt.mergeArgs(t,e);return n.type="warning",$e.call(this,n)}success(t,e){let n=yt.mergeArgs(t,e);return n.type="success",$e.call(this,n)}error(t,e){let n=yt.mergeArgs(t,e);return n.type="error",$e.call(this,n)}loading(t,e){let n=yt.mergeArgs(t,e);return n.type="loading",n.autoClose=false,$e.call(this,n)}remove(t){Rt.remove(t);}closeAll(){for(let t=Rt.insInfoList.length-1;t>=0;t--){let e=Rt.insInfoList[t];e&&e.instance&&e.instance.close();}}}let D=new Aa,vr=class{constructor(t){O(this,"defaultApi",{document,window,globalThis,self,top});O(this,"api");t&&(t.globalThis==null&&(t.globalThis=t.window),t.self==null&&(t.self=t.window)),t||(t=Object.assign({},this.defaultApi)),this.api=Object.assign({},t);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}};const Ta=o=>(t,e)=>(o.set(t,e),e),Jn=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Ar=536870912,Zn=Ar*2,Ea=(o,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<Zn?n+1:0;if(!e.has(r))return o(e,r);if(e.size<Ar){for(;e.has(r);)r=Math.floor(Math.random()*Zn);return o(e,r)}if(e.size>Jn)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*Jn);return o(e,r)},Tr=new WeakMap,Sa=Ta(Tr),je=Ea(Sa,Tr),Ca=o=>o.method!==void 0&&o.method==="call",ka=o=>typeof o.id=="number"&&typeof o.result=="boolean",Ma=o=>{const t=new Map([[0,()=>{}]]),e=new Map([[0,()=>{}]]),n=new Map,r=new Worker(o);return r.addEventListener("message",({data:c})=>{if(Ca(c)){const{params:{timerId:d,timerType:f}}=c;if(f==="interval"){const p=t.get(d);if(typeof p===void 0)throw new Error("The timer is in an undefined state.");if(typeof p=="number"){const g=n.get(p);if(g===void 0||g.timerId!==d||g.timerType!==f)throw new Error("The timer is in an undefined state.")}else typeof p=="function"&&p();}else if(f==="timeout"){const p=e.get(d);if(typeof p===void 0)throw new Error("The timer is in an undefined state.");if(typeof p=="number"){const g=n.get(p);if(g===void 0||g.timerId!==d||g.timerType!==f)throw new Error("The timer is in an undefined state.")}else typeof p=="function"&&(p(),e.delete(d));}}else if(ka(c)){const{id:d}=c,f=n.get(d);if(f===void 0)throw new Error("The timer is in an undefined state.");const{timerId:p,timerType:g}=f;n.delete(d),g==="interval"?t.delete(p):e.delete(p);}else {const{error:{message:d}}=c;throw new Error(d)}}),{clearInterval:c=>{if(typeof t.get(c)=="function"){const d=je(n);n.set(d,{timerId:c,timerType:"interval"}),t.set(c,d),r.postMessage({id:d,method:"clear",params:{timerId:c,timerType:"interval"}});}},clearTimeout:c=>{if(typeof e.get(c)=="function"){const d=je(n);n.set(d,{timerId:c,timerType:"timeout"}),e.set(c,d),r.postMessage({id:d,method:"clear",params:{timerId:c,timerType:"timeout"}});}},setInterval:(c,d=0,...f)=>{const p=je(t);return t.set(p,()=>{c(...f),typeof t.get(p)=="function"&&r.postMessage({id:null,method:"set",params:{delay:d,now:performance.timeOrigin+performance.now(),timerId:p,timerType:"interval"}});}),r.postMessage({id:null,method:"set",params:{delay:d,now:performance.timeOrigin+performance.now(),timerId:p,timerType:"interval"}}),p},setTimeout:(c,d=0,...f)=>{const p=je(e);return e.set(p,()=>c(...f)),r.postMessage({id:null,method:"set",params:{delay:d,now:performance.timeOrigin+performance.now(),timerId:p,timerType:"timeout"}}),p}}},La=(o,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=o(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},$a=`(()=>{"use strict";const e=new Map,t=new Map,r=t=>{const r=e.get(t);return void 0!==r&&(clearTimeout(r),e.delete(t),!0)},s=e=>{const r=t.get(e);return void 0!==r&&(clearTimeout(r),t.delete(e),!0)},o=(e,t)=>{const r=performance.now(),s=e+t-r-performance.timeOrigin;return{expected:r+s,remainingDelay:s}},i=(e,t,r,s)=>{const o=r-performance.now();o>0?e.set(t,setTimeout(i,o,e,t,r,s)):(e.delete(t),postMessage({id:null,method:"call",params:{timerId:t,timerType:s}}))};addEventListener("message",(({data:n})=>{try{if("clear"===n.method){const{id:e,params:{timerId:t,timerType:o}}=n;if("interval"===o)postMessage({id:e,result:r(t)});else{if("timeout"!==o)throw new Error('The given type "'.concat(o,'" is not supported'));postMessage({id:e,result:s(t)})}}else{if("set"!==n.method)throw new Error('The given method "'.concat(n.method,'" is not supported'));{const{params:{delay:r,now:s,timerId:a,timerType:m}}=n;if("interval"===m)((t,r,s)=>{const{expected:n,remainingDelay:a}=o(t,s);e.set(r,setTimeout(i,a,e,r,n,"interval"))})(r,a,s);else{if("timeout"!==m)throw new Error('The given type "'.concat(m,'" is not supported'));((e,r,s)=>{const{expected:n,remainingDelay:a}=o(e,s);t.set(r,setTimeout(i,a,t,r,n,"timeout"))})(r,a,s)}}}}catch(e){postMessage({error:{message:e.message},id:n.id,result:null})}}))})();`,en=La(Ma,$a),Ia=o=>en().clearInterval(o),_a=o=>en().clearTimeout(o),Oa=(...o)=>en().setInterval(...o),Ra=(...o)=>en().setTimeout(...o),P={windowApi:new vr({document,window,top}),isShow(o){return !!o.getClientRects().length},getSafeHTML(o){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:e=>e}).createHTML(o):o},setSafeHTML(o,t){o.innerHTML=this.getSafeHTML(t);},showElement(o){let t=o.cloneNode(true);return t.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(t),{recovery(){t.remove();}}},getStyleValue(o,t){let e=null,n=null;o instanceof CSSStyleDeclaration?n=o:(e=o.ownerDocument.defaultView,(!e||!e.opener)&&(e=window),n=e.getComputedStyle(o));let r=parseFloat(n[t]);return isNaN(r)?0:r},isWin(o){var t;return typeof o!="object"||o instanceof Node?false:o===globalThis||o===window||o===self||o===globalThis||o===window||o===self||typeof unsafeWindow<"u"&&o===unsafeWindow?true:((t=o==null?void 0:o.Math)==null?void 0:t.toString())==="[object Math]"},delete(o,t){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(o,t):delete o[t];},setTimeout(o,t=0){try{return Ra(o,t)}catch{return globalThis.setTimeout(o,t)}},clearTimeout(o){try{o!=null&&_a(o);}catch{}finally{globalThis.clearTimeout(o);}},setInterval(o,t=0){try{return Oa(o,t)}catch{return globalThis.setInterval(o,t)}},clearInterval(o){try{o!=null&&Ia(o);}catch{}finally{globalThis.clearInterval(o);}},isNodeList(o){return Array.isArray(o)||o instanceof NodeList}},Ie={SymbolEvents:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))},Da={Object:{defineProperty:Object.defineProperty}};class Pa{constructor(t){O(this,"windowApi");this.windowApi=new vr(t);}on(t,e,n,r,a){function i(h,b,A){let T=h[b];return typeof T=="boolean"?(A.capture=T,typeof h[b+1]=="boolean"&&(A.once=h[b+1]),typeof h[b+2]=="boolean"&&(A.passive=h[b+2])):typeof T=="object"&&("capture"in T||"once"in T||"passive"in T||"isComposedPath"in T)&&(A.capture=T.capture,A.once=T.once,A.passive=T.passive,A.isComposedPath=T.isComposedPath),A}let s=this,l=arguments;if(typeof t=="string"&&(t=s.selectorAll(t)),t==null)return;let c=[];t instanceof NodeList||Array.isArray(t)?(t=t,c=[...t]):c.push(t);let d=[];Array.isArray(e)?d=d.concat(e.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof e=="string"&&(d=d.concat(e.split(" ").filter(h=>h!=="")));let f=[];Array.isArray(n)?f=f.concat(n.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof n=="string"&&f.push(n);let p=r,g={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(p=n,g=i(l,3,g)):g=i(l,4,g);function v(){g.once&&s.off(t,e,n,r,a);}c.forEach(h=>{function b(A){if(f.length){let T=g.isComposedPath?A.composedPath()[0]:A.target,E=h;if(P.isWin(E)&&E===s.windowApi.document&&(E=s.windowApi.document.documentElement),f.find(L=>{if(s.matches(T,L))return  true;let k=s.closest(T,L);return k&&(E!=null&&E.contains(k))?(T=k,true):false})){try{Da.Object.defineProperty(A,"target",{get(){return T}});}catch{}p.call(T,A,T),v();}}else p.call(h,A),v();}d.forEach(A=>{h.addEventListener(A,b,g);let T=Reflect.get(h,Ie.SymbolEvents)||{};T[A]=T[A]||[],T[A].push({selector:f,option:g,callback:b,originCallBack:p}),Reflect.set(h,Ie.SymbolEvents,T);});});}off(t,e,n,r,a,i){function s(b,A,T){let E=b[A];return typeof E=="boolean"?T.capture=E:typeof E=="object"&&"capture"in E&&(T.capture=E.capture),T}let l=this,c=arguments;if(typeof t=="string"&&(t=l.selectorAll(t)),t==null)return;let d=[];t instanceof NodeList||Array.isArray(t)?(t=t,d=[...t]):d.push(t);let f=[];Array.isArray(e)?f=f.concat(e.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof e=="string"&&(f=f.concat(e.split(" ").filter(b=>b!=="")));let p=[];Array.isArray(n)?p=p.concat(n.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof n=="string"&&p.push(n);let g=r,v={capture:false};typeof n=="function"?(g=n,v=s(c,3,v)):v=s(c,4,v);let h=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(h=true),d.forEach(b=>{let A=Reflect.get(b,Ie.SymbolEvents)||{};f.forEach(T=>{let E=A[T]||[];typeof i=="function"&&(E=E.filter(i));for(let M=0;M<E.length;M++){let L=E[M],k=true;k&&g&&L.originCallBack!==g&&(k=false),k&&p.length&&Array.isArray(L.selector)&&JSON.stringify(L.selector)!==JSON.stringify(p)&&(k=false),k&&v.capture!==L.option.capture&&(k=false),(k||h)&&(b.removeEventListener(T,L.callback,L.option),E.splice(M--,1));}E.length===0&&P.delete(A,e);}),Reflect.set(b,Ie.SymbolEvents,A);});}offAll(t,e){if(typeof t=="string"&&(t=this.selectorAll(t)),t==null)return;let r=[];t instanceof NodeList||Array.isArray(t)?r=[...t]:r.push(t);let a=[];Array.isArray(e)?a=a.concat(e):typeof e=="string"&&(a=a.concat(e.split(" "))),r.forEach(i=>{Object.getOwnPropertySymbols(i).forEach(s=>{if(!s.toString().startsWith("Symbol(events_"))return;let l=i[s]||{};(a.length?a:Object.keys(l)).forEach(d=>{let f=l[d];if(!f)return;for(const g of f)i.removeEventListener(d,g.callback,{capture:g.option.capture});let p=Reflect.get(i,s);P.delete(p,d);});});});}ready(t){if(typeof t!="function")return;let e=this;function n(){try{return e.windowApi.document.readyState==="complete"||e.windowApi.document.readyState!=="loading"&&!e.windowApi.document.documentElement.doScroll}catch{return  false}}function r(){s(),t();}let a=[{target:e.windowApi.document,eventType:"DOMContentLoaded",callback:r},{target:e.windowApi.window,eventType:"load",callback:r}];function i(){for(let l=0;l<a.length;l++){let c=a[l];c.target.addEventListener(c.eventType,c.callback);}}function s(){for(let l=0;l<a.length;l++){let c=a[l];c.target.removeEventListener(c.eventType,c.callback);}}n()?P.setTimeout(t):i();}trigger(t,e,n,r=true){if(typeof t=="string"&&(t=this.selectorAll(t)),t==null)return;let i=[];t instanceof NodeList||Array.isArray(t)?(t=t,i=[...t]):i=[t];let s=[];Array.isArray(e)?s=e:typeof e=="string"&&(s=e.split(" ")),i.forEach(l=>{let c=l[Ie.SymbolEvents]||{};s.forEach(d=>{let f=null;n&&n instanceof Event?f=n:(f=new Event(d),n&&Object.keys(n).forEach(p=>{f[p]=n[p];})),r==false&&d in c?c[d].forEach(p=>{p.callback(f);}):l.dispatchEvent(f);});});}click(t,e,n,r){let a=this;if(typeof t=="string"&&(t=a.selectorAll(t)),t!=null){if(P.isNodeList(t)){t.forEach(i=>{a.click(i,e,n,r);});return}e==null?a.trigger(t,"click",n,r):a.on(t,"click",null,e);}}blur(t,e,n,r){let a=this;if(typeof t=="string"&&(t=a.selectorAll(t)),t!=null){if(P.isNodeList(t)){t.forEach(i=>{a.focus(i,e,n,r);});return}e===null?a.trigger(t,"blur",n,r):a.on(t,"blur",null,e);}}focus(t,e,n,r){let a=this;if(typeof t=="string"&&(t=a.selectorAll(t)),t!=null){if(P.isNodeList(t)){t.forEach(i=>{a.focus(i,e,n,r);});return}e==null?a.trigger(t,"focus",n,r):a.on(t,"focus",null,e);}}hover(t,e,n){let r=this;if(typeof t=="string"&&(t=r.selectorAll(t)),t!=null){if(P.isNodeList(t)){t.forEach(a=>{r.hover(a,e,n);});return}r.on(t,"mouseenter",null,e,n),r.on(t,"mouseleave",null,e,n);}}keyup(t,e,n){let r=this;if(t!=null){if(typeof t=="string"&&(t=r.selectorAll(t)),P.isNodeList(t)){t.forEach(a=>{r.keyup(a,e,n);});return}r.on(t,"keyup",null,e,n);}}keydown(t,e,n){let r=this;if(t!=null){if(typeof t=="string"&&(t=r.selectorAll(t)),P.isNodeList(t)){t.forEach(a=>{r.keydown(a,e,n);});return}r.on(t,"keydown",null,e,n);}}keypress(t,e,n){let r=this;if(t!=null){if(typeof t=="string"&&(t=r.selectorAll(t)),P.isNodeList(t)){t.forEach(a=>{r.keypress(a,e,n);});return}r.on(t,"keypress",null,e,n);}}listenKeyboard(t,e="keypress",n,r){let a=this;typeof t=="string"&&(t=a.selectorAll(t));let i=function(s){let l=s.key||s.code,c=s.charCode||s.keyCode||s.which,d=[];s.ctrlKey&&d.push("ctrl"),s.altKey&&d.push("alt"),s.metaKey&&d.push("meta"),s.shiftKey&&d.push("shift"),typeof n=="function"&&n(l,c,d,s);};return a.on(t,e,i,r),{removeListen:()=>{a.off(t,e,i,r);}}}selector(t,e){return this.selectorAll(t,e)[0]}selectorAll(t,e){if(e=e||this.windowApi.document,t=t.trim(),t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),Array.from(e.querySelectorAll(t)).filter(r=>{var a;return ((a=r==null?void 0:r.innerHTML)==null?void 0:a.trim())===""});if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];return t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(i=>{var s;return (s=(i==null?void 0:i.textContent)||(i==null?void 0:i.innerText))==null?void 0:s.includes(a)})}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);return t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(c=>{var d;return !!((d=(c==null?void 0:c.textContent)||(c==null?void 0:c.innerText))!=null&&d.match(l))})}else return Array.from(e.querySelectorAll(t))}matches(t,e){var n;if(e=e.trim(),t==null)return  false;if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),t.matches(e)&&((n=t==null?void 0:t.innerHTML)==null?void 0:n.trim())==="";if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let i=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);return typeof i!="string"&&(i=""),t.matches(e)&&(i==null?void 0:i.includes(a))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let c=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);return typeof c!="string"&&(c=""),t.matches(e)&&!!(c!=null&&c.match(l))}else return t.matches(e)}closest(t,e){var n;if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi)){e=e.replace(/:empty$/gi,"");let r=t==null?void 0:t.closest(e);return r&&((n=r==null?void 0:r.innerHTML)==null?void 0:n.trim())===""?r:null}else if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let i=t==null?void 0:t.closest(e);if(i){let s=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);if(typeof s=="string"&&s.includes(a))return i}return null}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let c=t==null?void 0:t.closest(e);if(c){let d=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);if(typeof d=="string"&&d.match(l))return c}return null}else return t==null?void 0:t.closest(e)}}let Ha=class Er extends Pa{constructor(e){super(e);O(this,"version","2025.6.7");}attr(e,n,r){let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),e!=null){if(P.isNodeList(e)){if(r==null)return a.attr(e[0],n,r);e.forEach(i=>{a.attr(i,n,r);});return}if(r==null)return e.getAttribute(n);e.setAttribute(n,r);}}createElement(e,n,r){let a=this,i=a.windowApi.document.createElement(e);return typeof n=="string"?(a.html(i,n),i):(n==null&&(n={}),r==null&&(r={}),Object.keys(n).forEach(s=>{let l=n[s];if(s==="innerHTML"){a.html(i,l);return}i[s]=l;}),Object.keys(r).forEach(s=>{let l=r[s];typeof l=="object"?l=JSON.stringify(l):typeof l=="function"&&(l=l.toString()),i.setAttribute(s,l);}),i)}css(e,n,r){let a=this;function i(l,c){let d=["width","height","top","left","right","bottom","font-size"];return typeof c=="number"&&(c=c.toString()),typeof c=="string"&&d.includes(l)&&c.match(/[0-9]$/gi)&&(c=c+"px"),c}if(typeof e=="string"&&(e=a.selectorAll(e)),e==null)return;if(P.isNodeList(e)){if(typeof n=="string"){if(r==null)return a.css(e[0],n);e.forEach(l=>{a.css(l,n);});return}else if(typeof n=="object"){e.forEach(l=>{a.css(l,n);});return}return}let s=(l,c)=>{typeof c=="string"&&c.trim().endsWith("!important")?(c=c.trim().replace(/!important$/gi,"").trim(),e.style.setProperty(l,c,"important")):(c=i(l,c),e.style.setProperty(l,c));};if(typeof n=="string"){if(r==null)return a.windowApi.globalThis.getComputedStyle(e).getPropertyValue(n);s(n,r);}else if(typeof n=="object")for(let l in n){let c=n[l];s(l,c);}else throw new TypeError("property must be string or object")}text(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){if(n==null)return r.text(e[0]);e.forEach(a=>{r.text(a,n);});return}if(n==null)return e.textContent||e.innerText;n instanceof Node&&(n=n.textContent||n.innerText),"textContent"in e?e.textContent=n:"innerText"in e&&(e.innerText=n);}}html(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){if(n==null)return r.html(e[0]);e.forEach(a=>{r.html(a,n);});return}if(n==null)return e.innerHTML;n instanceof Element&&(n=n.innerHTML),"innerHTML"in e&&P.setSafeHTML(e,n);}}getTransform(e,n=false){var l;let r=this,a=0,i=0;if(!(n||!n&&P.isShow(e))){let{recovery:c}=P.showElement(e),d=r.getTransform(e,true);return c(),d}let s=r.windowApi.globalThis.getComputedStyle(e).transform;if(s!=null&&s!=="none"&&s!==""){let c=(l=s.match(/\((.+)\)/))==null?void 0:l[1].split(",");c?(a=Math.abs(parseInt(c[4])),i=Math.abs(parseInt(c[5]))):(a=0,i=0);}return {transformLeft:a,transformTop:i}}val(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){if(n==null)return r.val(e[0]);e.forEach(a=>{r.val(a,n);});return}if(n==null)return e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked:e.value;e.localName==="input"&&(e.type==="checkbox"||e.type==="radio")?e.checked=!!n:e.value=n;}}prop(e,n,r){let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),e!=null){if(P.isNodeList(e)){if(r==null)return a.prop(e[0],n);e.forEach(i=>{a.prop(i,n,r);});return}if(r==null)return Reflect.get(e,n);e instanceof Element&&n==="innerHTML"?a.html(e,r):Reflect.set(e,n,r);}}removeAttr(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.removeAttr(a,n);});return}e.removeAttribute(n);}}removeClass(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.removeClass(a,n);});return}n==null?e.className="":(Array.isArray(n)||(n=n.split(" ")),n.forEach(a=>{e.classList.remove(a);}));}}removeProp(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.removeProp(a,n);});return}P.delete(e,n);}}replaceWith(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.replaceWith(a,n);});return}typeof n=="string"&&(n=r.parseHTML(n,false,false)),e.parentElement.replaceChild(n,e);}}addClass(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.addClass(a,n);});return}Array.isArray(n)||(n=n.split(" ")),n.forEach(a=>{a.trim()!=""&&e.classList.add(a);});}}hasClass(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e==null)return  false;if(P.isNodeList(e)){let a=true;for(let i=0;i<e.length;i++){const s=e[i];a=a&&r.hasClass(s,n);}return a}if(!(e!=null&&e.classList))return  false;Array.isArray(n)||(n=n.split(" "));for(let a=0;a<n.length;a++){const i=n[a].trim();if(!e.classList.contains(i))return  false}return  true}append(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e==null)return;if(P.isNodeList(e)){e.forEach(i=>{r.append(i,n);});return}function a(i,s){typeof n=="string"?i.insertAdjacentHTML("beforeend",P.getSafeHTML(s)):i.appendChild(s);}if(Array.isArray(n)||n instanceof NodeList){let i=r.windowApi.document.createDocumentFragment();n.forEach(s=>{typeof s=="string"&&(s=r.parseHTML(s,true,false)),i.appendChild(s);}),e.appendChild(i);}else a(e,n);}prepend(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.prepend(a,n);});return}typeof n=="string"?e.insertAdjacentHTML("afterbegin",P.getSafeHTML(n)):e.firstChild==null?e.prepend(n):e.insertBefore(n,e.firstChild);}}after(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.after(a,n);});return}if(typeof n=="string")e.insertAdjacentHTML("afterend",P.getSafeHTML(n));else {let a=e.parentElement,i=e.nextSibling;!a||i?e.after(n):e.parentElement.insertBefore(n,e.nextSibling);}}}before(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.before(a,n);});return}if(typeof n=="string")e.insertAdjacentHTML("beforebegin",P.getSafeHTML(n));else {let a=e.parentElement;a?a.insertBefore(n,e):e.before(n);}}}remove(e){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(r=>{n.remove(r);});return}e.remove();}}empty(e){let n=this;if(typeof e=="string"&&(e=n.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(r=>{n.empty(r);});return}n.html(e,"");}}offset(e){let n=this;if(typeof e=="string"&&(e=n.selector(e)),e==null)return;let r=e.getBoundingClientRect();return {top:r.top+n.windowApi.globalThis.scrollY,left:r.left+n.windowApi.globalThis.scrollX}}width(e,n=false){let r=this;if(typeof e=="string"&&(e=r.selector(e)),e!=null){if(P.isWin(e))return r.windowApi.window.document.documentElement.clientWidth;if(e.nodeType===9)return e=e,Math.max(e.body.scrollWidth,e.documentElement.scrollWidth,e.body.offsetWidth,e.documentElement.offsetWidth,e.documentElement.clientWidth);if(n||!n&&P.isShow(e)){if(e=e,parseFloat(P.getStyleValue(e,"width").toString())>0)return parseFloat(P.getStyleValue(e,"width").toString());if(e.offsetWidth>0){let a=P.getStyleValue(e,"borderLeftWidth"),i=P.getStyleValue(e,"borderRightWidth"),s=P.getStyleValue(e,"paddingLeft"),l=P.getStyleValue(e,"paddingRight"),c=parseFloat(e.offsetWidth.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;let{recovery:a}=P.showElement(e),i=r.width(e,true);return a(),i}}}height(e,n=false){let r=this;if(P.isWin(e))return r.windowApi.window.document.documentElement.clientHeight;if(typeof e=="string"&&(e=r.selector(e)),e!=null){if(e.nodeType===9)return e=e,Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.documentElement.clientHeight);if(n||!n&&P.isShow(e)){if(e=e,parseFloat(P.getStyleValue(e,"height").toString())>0)return parseFloat(P.getStyleValue(e,"height").toString());if(e.offsetHeight>0){let a=P.getStyleValue(e,"borderTopWidth"),i=P.getStyleValue(e,"borderBottomWidth"),s=P.getStyleValue(e,"paddingTop"),l=P.getStyleValue(e,"paddingBottom"),c=parseFloat(e.offsetHeight.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {e=e;let{recovery:a}=P.showElement(e),i=r.height(e,true);return a(),i}}}outerWidth(e,n=false){let r=this;if(P.isWin(e))return r.windowApi.window.innerWidth;if(typeof e=="string"&&(e=r.selector(e)),e!=null)if(e=e,n||!n&&P.isShow(e)){let a=r.windowApi.globalThis.getComputedStyle(e,null),i=P.getStyleValue(a,"marginLeft"),s=P.getStyleValue(a,"marginRight");return e.offsetWidth+i+s}else {let{recovery:a}=P.showElement(e),i=r.outerWidth(e,true);return a(),i}}outerHeight(e,n=false){let r=this;if(P.isWin(e))return r.windowApi.window.innerHeight;if(typeof e=="string"&&(e=r.selector(e)),e!=null)if(e=e,n||!n&&P.isShow(e)){let a=r.windowApi.globalThis.getComputedStyle(e,null),i=P.getStyleValue(a,"marginTop"),s=P.getStyleValue(a,"marginBottom");return e.offsetHeight+i+s}else {let{recovery:a}=P.showElement(e),i=r.outerHeight(e,true);return a(),i}}animate(e,n,r=1e3,a=null){let i=this;if(typeof e=="string"&&(e=i.selectorAll(e)),e==null)return;if(P.isNodeList(e)){e.forEach(f=>{i.animate(f,n,r,a);});return}if(typeof r!="number"||r<=0)throw new TypeError("duration must be a positive number");if(typeof a!="function"&&a!==void 0)throw new TypeError("callback must be a function or null");if(typeof n!="object"||n===void 0)throw new TypeError("styles must be an object");if(Object.keys(n).length===0)throw new Error("styles must contain at least one property");let s=performance.now(),l={},c={};for(let f in n)l[f]=e.style[f]||i.windowApi.globalThis.getComputedStyle(e)[f],c[f]=n[f];let d=P.setInterval(function(){let p=(performance.now()-s)/r;p>1&&(p=1);for(let g in n)e.style[g]=l[g]+(c[g]-l[g])*p+"px";p===1&&(P.clearInterval(d),a&&a());},10);}wrap(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e==null)return;if(P.isNodeList(e)){e.forEach(l=>{r.wrap(l,n);});return}e=e;let a=r.windowApi.document.createElement("div");r.html(a,n);let i=a.firstChild;e.parentElement.insertBefore(i,e),i.appendChild(e);}prev(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.previousElementSibling}next(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return e.nextElementSibling}noConflict(){let e=this;return e.windowApi.window.DOMUtils&&P.delete(window,"DOMUtils"),e.windowApi.window.DOMUtils=this,this}siblings(e){if(typeof e=="string"&&(e=this.selector(e)),e!=null)return Array.from(e.parentElement.children).filter(r=>r!==e)}parent(e){let n=this;if(typeof e=="string"&&(e=n.selector(e)),e!=null)if(P.isNodeList(e)){let r=[];return e.forEach(a=>{r.push(n.parent(a));}),r}else return e.parentElement}parseHTML(e,n=false,r=false){let a=this;e=e.trim();function i(){let l=new DOMParser;return r?l.parseFromString(e,"text/html"):l.parseFromString(e,"text/html").body.firstChild}function s(){let l=a.windowApi.document.createElement("div");return a.html(l,e),r?l:l.firstChild}return n?i():s()}serialize(e){const n=e.elements;let r=[];for(let a=0;a<n.length;a++){const i=n[a];if(i.name&&!i.disabled&&(i.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(i.type)))if(i.type==="select-multiple")for(let s=0;s<i.options.length;s++)i.options[s].selected&&r.push({name:i.name,value:i.options[s].value});else r.push({name:i.name,value:i.value});}return r.map(a=>`${encodeURIComponent(a.name)}=${encodeURIComponent(a.value)}`).join("&")}show(e,n=true){let r=this;if(e!=null)if(typeof e=="string"&&(e=r.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const a of e)r.show(a,n);}else e=e,e.style.display="",n&&(P.isShow(e)||e.style.setProperty("display","unset","important"));}hide(e,n=true){let r=this;if(e!=null)if(typeof e=="string"&&(e=r.selectorAll(e)),e instanceof NodeList||e instanceof Array){e=e;for(const a of e)r.hide(a,n);}else e=e,e.style.display="none",n&&P.isShow(e)&&e.style.setProperty("display","none","important");}fadeIn(e,n=400,r){if(e==null)return;let a=this;if(typeof e=="string"&&(e=a.selectorAll(e)),P.isNodeList(e)){e.forEach(c=>{a.fadeIn(c,n,r);});return}e.style.opacity="0",e.style.display="";let i=null,s=null;function l(c){i||(i=c);let d=c-i;e=e,e.style.opacity=Math.min(d/n,1).toString(),d<n?a.windowApi.window.requestAnimationFrame(l):(r&&typeof r=="function"&&r(),a.windowApi.window.cancelAnimationFrame(s));}s=a.windowApi.window.requestAnimationFrame(l);}fadeOut(e,n=400,r){let a=this;if(e==null)return;if(typeof e=="string"&&(e=a.selectorAll(e)),P.isNodeList(e)){e.forEach(c=>{a.fadeOut(c,n,r);});return}e.style.opacity="1";let i=null,s=null;function l(c){i||(i=c);let d=c-i;e=e,e.style.opacity=Math.max(1-d/n,0).toString(),d<n?a.windowApi.window.requestAnimationFrame(l):(e.style.display="none",typeof r=="function"&&r(),a.windowApi.window.cancelAnimationFrame(s));}s=a.windowApi.window.requestAnimationFrame(l);}toggle(e,n){let r=this;if(typeof e=="string"&&(e=r.selectorAll(e)),e!=null){if(P.isNodeList(e)){e.forEach(a=>{r.toggle(a);});return}r.windowApi.globalThis.getComputedStyle(e).getPropertyValue("display")==="none"?r.show(e,n):r.hide(e,n);}}createDOMUtils(e){return new Er(e)}getTextBoundingRect(e,n,r){var L;let a=this;if(!e||!("value"in e))return e;if(n==null&&(n=e.selectionStart||0),r==null&&(r=e.selectionEnd||0),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n))&&(n=0),n<0?n=0:n=Math.min(e.value.length,n),typeof r=="string"&&(r=parseFloat(r)),(typeof r!="number"||isNaN(r)||r<n)&&(r=n),r<0?r=0:r=Math.min(e.value.length,r),typeof e.createTextRange=="function"){let k=e.createTextRange();return k.collapse(true),k.moveStart("character",n),k.moveEnd("character",r-n),k.getBoundingClientRect()}let i=E(),s=i.top,l=i.left,c=M("width",true),d=M("height",true),f="white-space:pre;padding:0;margin:0;",p=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];s+=M("padding-top",true),s+=M("border-top-width",true),l+=M("padding-left",true),l+=M("border-left-width",true),l+=1;for(let k=0;k<p.length;k++){let G=p[k];f+=G+":"+M(G)+";";}let g=e.value||"G",v=g.length,h=a.windowApi.document.createElement("div");n>0&&T(0,n);var b=T(n,r);v>r&&T(r,v),h.style.cssText=f,h.style.position="absolute",h.style.top=s+"px",h.style.left=l+"px",h.style.width=c+"px",h.style.height=d+"px",a.windowApi.document.body.appendChild(h);var A=b.getBoundingClientRect();return (L=h==null?void 0:h.parentNode)==null||L.removeChild(h),A;function T(k,G){var H=a.windowApi.document.createElement("span");return H.style.cssText=f,H.textContent=g.substring(k,G),h.appendChild(H),H}function E(){let k=a.windowApi.document.body,G=a.windowApi.document.defaultView,H=a.windowApi.document.documentElement,q=a.windowApi.document.createElement("div");q.style.paddingLeft=q.style.width="1px",k.appendChild(q);var st=q.offsetWidth==2;k.removeChild(q);let bt=e.getBoundingClientRect();var C=H.clientTop||k.clientTop||0,w=H.clientLeft||k.clientLeft||0,y=G.pageYOffset||st&&H.scrollTop||k.scrollTop,x=G.pageXOffset||st&&H.scrollLeft||k.scrollLeft;return {top:bt.top+y-C,left:bt.left+x-w}}function M(k,G){var H=a.windowApi.document.defaultView.getComputedStyle(e,null).getPropertyValue(k);return G?parseFloat(H):H}}},Sr=new Ha;class Ba{isHex(t){return !(typeof t!="string"||!t.match(/^(\#|)[0-9a-fA-F]{6}$/))}hexToRgba(t,e){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);return t&&t.replace(/\s+/g,"").length===7?"rgba("+parseInt("0x"+t.slice(1,3))+","+parseInt("0x"+t.slice(3,5))+","+parseInt("0x"+t.slice(5,7))+","+e+")":""}hexToRgb(t){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);t=t.replace("#","");let e=t.match(/../g);for(let n=0;n<3;n++)e[n]=parseInt(e[n],16);return e}rgbToHex(t,e,n){let r=/^\d{1,3}$/;if(!r.test(t.toString())||!r.test(e.toString())||!r.test(n.toString()))throw new TypeError("输入错误的rgb颜色值");let a=[t.toString(16),e.toString(16),n.toString(16)];for(let i=0;i<3;i++)a[i].length==1&&(a[i]="0"+a[i]);return "#"+a.join("")}getDarkColor(t,e){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);let n=this.hexToRgb(t);for(let r=0;r<3;r++)n[r]=Math.floor(n[r]*(1-e));return this.rgbToHex(n[0],n[1],n[2])}getLightColor(t,e){if(!this.isHex(t))throw new TypeError("输入错误的hex",t);let n=this.hexToRgb(t);for(let r=0;r<3;r++)n[r]=Math.floor((255-n[r])*e+n[r]);return this.rgbToHex(n[0],n[1],n[2])}}var Pe,te,Te;class Na{constructor(){ft(this,Pe,[]);ft(this,te,{});ft(this,Te,{});let t=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364"),e=0;pt(this,Pe,t.match(/..../g));for(let n=129;n<=254;n++)for(let r=64;r<=254;r++)m(this,te)[m(this,Pe)[e++]]=("%"+n.toString(16)+"%"+r.toString(16)).toUpperCase();for(let n in m(this,te))m(this,Te)[m(this,te)[n]]=n;}handleText(t){return t=t.replace(/#(\d+)\$/g,function(e,n){return Array(+n+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(e,n,r){return r.replace(/../g,function(a){return a!="##"?n+a:a})}),t}isAscii(t){return t<=127&&t>=0}encode(t){let e=this;return [...t].reduce((r,a,i)=>r+n(a),"");function n(r){var i;let a="";for(let s=0;s<r.length;s++){const l=r.codePointAt(s),c=String.fromCodePoint(l);let d=l.toString(16);if(d.length!=4&&(d=(i=("000"+d).match(/....$/))==null?void 0:i[0]),s+=c.length-1,e.isAscii(l)){a+=encodeURIComponent(c);continue}if(m(e,te)[d]){a+=m(e,te)[d];continue}a+=n(`&#${l};`);}return a}}decode(t){var e=/%[0-9A-F]{2}%[0-9A-F]{2}/,n=/%[0-9A-F]{2}/,r=true;let a=this;for(;r;){let i=t.match(e),s=t.match(n);r=!!s,i&&i in m(a,Te)?t=t.replace(i,String.fromCharCode("0x"+m(a,Te)[i])):t=t.replace(s,decodeURIComponent(s));}return t}}Pe=new WeakMap,te=new WeakMap,Te=new WeakMap;const Ye=function(...o){let t=null,e=null,n=s=>{},r={log:true};const a={config(s){return r=Object.assign(r,s),a},error(s){return n=s,a},run(s,l){t=s,e=l||this;let c=i(t,n,e);return c!==void 0?c:a}};function i(s,l,c){let d;try{typeof s=="string"?d=new Function(s).apply(c,o):d=s.apply(c,o);}catch(f){r.log&&(s=s,console.log(`%c ${s!=null&&s.name?s==null?void 0:s.name:s+"出现错误"} `,"color: #f20000"),console.log(`%c 错误原因：${f}`,"color: #f20000"),console.trace(s)),l&&(typeof l=="string"?d=new Function(l).apply(c,[...o,f]):d=l.apply(c,[...o,f]));}return d}return a};let Ua=class{assign(t={},e={},n=false){let r=this;if(Array.isArray(e)&&!e.filter(i=>typeof i=="object").length)return e;if(e==null)return t;if(t==null&&(t={}),n)for(const a in e){let s=t[a],l=e[a];if(typeof l=="object"&&l!=null&&a in t&&!r.isDOM(l)){t[a]=r.assign(s,l,n);continue}t[a]=l;}else for(const a in t)if(a in e){let i=t[a],s=e[a];if(typeof s=="object"&&s!=null&&!r.isDOM(s)&&Object.keys(s).length){t[a]=r.assign(i,s,n);continue}t[a]=s;}return t}isNull(...t){let e=true,n=[...t];for(const r of n){let a=false;if(r==null)a=true;else switch(typeof r){case "object":typeof r[Symbol.iterator]=="function"?a=r.length===0:a=Object.keys(r).length===0;break;case "number":a=r===0;break;case "string":a=r.trim()===""||r==="null"||r==="undefined";break;case "boolean":a=!r;break;case "function":a=!!r.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}e=e&&a;}return e}isDOM(t){return t instanceof Node}isNotNull(...t){return !this.isNull.apply(this,t)}deepClone(t){let e=this;if(t===void 0)return;if(t===null)return null;let n=t instanceof Array?[]:{};for(const[r,a]of Object.entries(t))n[r]=typeof a=="object"?e.deepClone(a):a;return n}coverObjectFunctionThis(t,e){if(typeof t!="object"||t===null)throw new Error("target must be object");e=e||t,Object.keys(t).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(e));});}toJSON(t,e){let n={};return typeof t=="object"?t:(Ye().config({log:false}).error(r=>{Ye().error(()=>{try{n=new Function("return "+t)();}catch(a){typeof e=="function"&&e(a);}}).run(()=>{t&&/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?n=new Function("return "+t)():typeof e=="function"&&e(new Error("target is not a JSON"));});}).run(()=>{t=t.trim(),n=JSON.parse(t);}),n)}},at=new Ua;class Va{constructor(t){O(this,"windowApi",{window,document});t&&(this.windowApi=Object.assign({},t));}getCookiesList(){return this.windowApi.document.cookie.trim()===""?[]:this.windowApi.document.cookie.split(";")}get(t){if(typeof t!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");let e=this.getCookiesList(),n;for(const r of e){let i=r.trim().split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join(""));if(s===t){n={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:t,path:"/",sameSite:"unspecified",secure:true,session:false,value:l};break}}return n}list(t,e){if(t==null)throw new Error("Utils.GMCookie.list 参数不能为空");let n=[];try{let r={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};r=at.assign(r,t),this.getCookiesList().forEach(i=>{i=i.trim();let s=i.split("="),l=s[0];s.splice(0,1);let c=decodeURIComponent(s.join("")),d=r.name instanceof RegExp?r.name:new RegExp("^"+r.name,"g");l.match(d)&&n.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:l,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:c});}),typeof e=="function"&&e(n);}catch(r){typeof e=="function"&&e(n,r);}}getList(t){if(t==null)throw new Error("Utils.GMCookie.list 参数不能为空");let e=[],n={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return n=at.assign(n,t),this.getCookiesList().forEach(a=>{a=a.trim();let i=a.split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join("")),c=n.name instanceof RegExp?n.name:new RegExp("^"+n.name,"g");s.match(c)&&e.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:s,path:"/",sameSite:"unspecified",secure:true,session:false,value:l});}),e}set(t,e){let n;try{let r={url:this.windowApi.window.location.href,name:"",value:"",domain:"",path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};r=at.assign(r,t);let a=r.expirationDate?r.expirationDate:Math.floor(Date.now())+60*60*24*30,i=r.name+"="+decodeURIComponent(r.value)+";expires="+new Date(a).toGMTString()+"; path=/";at.isNull(r.domain)&&(i+="; domain="+r.domain),this.windowApi.document.cookie=i;}catch(r){n=r;}finally{typeof e=="function"&&e(n);}}delete(t,e){let n;try{let r={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:""};r=at.assign(r,t);let a=`${r.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${r.path}`;at.isNull(r.firstPartyDomain)&&(a+=`; domain=${r.firstPartyDomain};`),this.windowApi.document.cookie=a;}catch(r){n=r;}finally{typeof e=="function"&&e(n);}}parseCookie(t){if(t.trim()==="")return [];let e=t.split(";"),n=[];for(const r of e){let i=r.trim().split("="),s=i[0];i.splice(0,1);let l=decodeURIComponent(i.join(""));n.push({key:s,value:l});}return n}}const za=function(){return function(){const o="1.4.4",t={hookFns:[],filters:[]},e=window.unsafeWindow||document.defaultView||window;let n=e.__ajaxHooker;const r=e.Response.prototype,a=["response","responseText","responseXML"],i=["arrayBuffer","blob","formData","json","text"],s=["method","headers","body","mode","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","priority"],l=["readystatechange","load","loadend"],c={}.toString.call.bind({}.toString),d=Object.getOwnPropertyDescriptor.bind(Object),f=()=>{},p=w=>console.error(w);function g(w){return w&&["object","function"].includes(typeof w)&&typeof w.then=="function"}function v(w,...y){try{const x=w(...y);return g(x)?x.then(null,p):x}catch(x){console.error(x);}}function h(w,y,x,$){Object.defineProperty(w,y,{configurable:true,enumerable:true,get:x,set:$});}function b(w,y,x=w[y]){h(w,y,()=>x,f);}function A(w,y,x=w[y]){Object.defineProperty(w,y,{configurable:true,enumerable:true,writable:true,value:x});}function T(w){const y={};switch(c(w)){case "[object String]":for(const x of w.trim().split(/[\r\n]+/)){const[$,R]=x.split(/\s*:\s*/);if(!$)break;const B=$.toLowerCase();y[B]=B in y?`${y[B]}, ${R}`:R;}break;case "[object Headers]":for(const[x,$]of w)y[x]=$;break;case "[object Object]":return {...w}}return y}function E(){this.ajaxHooker_isStopped=true;}class M{then(y){return y&&y(),new M}}class L{constructor(y){this.request=y,this.requestClone={...this.request};}shouldFilter(y){const{type:x,url:$,method:R,async:B}=this.request;return y.length&&!y.find(j=>{switch(true){case(j.type&&j.type!==x):case(c(j.url)==="[object String]"&&!$.includes(j.url)):case(c(j.url)==="[object RegExp]"&&!j.url.test($)):case(j.method&&j.method.toUpperCase()!==R.toUpperCase()):case("async"in j&&j.async!==B):return  false}return  true})}waitForRequestKeys(){const y=["url","method","abort","headers","data"];if(!this.request.async)return e.__ajaxHooker.hookInsts.forEach(({hookFns:$,filters:R})=>{this.shouldFilter(R)||($.forEach(B=>{c(B)==="[object Function]"&&v(B,this.request);}),y.forEach(B=>{g(this.request[B])&&(this.request[B]=this.requestClone[B]);}));}),new M;const x=[];return e.__ajaxHooker.hookInsts.forEach(({hookFns:$,filters:R})=>{this.shouldFilter(R)||x.push(Promise.all($.map(B=>v(B,this.request))).then(()=>Promise.all(y.map(B=>Promise.resolve(this.request[B]).then(j=>this.request[B]=j,()=>this.request[B]=this.requestClone[B])))));}),Promise.all(x)}waitForResponseKeys(y){const x=this.request.type==="xhr"?a:i;return this.request.async?Promise.resolve(v(this.request.response,y)).then(()=>Promise.all(x.map($=>{const R=d(y,$);if(R&&"value"in R)return Promise.resolve(R.value).then(B=>y[$]=B,()=>delete y[$]);delete y[$];}))):(c(this.request.response)==="[object Function]"&&(v(this.request.response,y),x.forEach($=>{("get"in d(y,$)||g(y[$]))&&delete y[$];})),new M)}}const k={get(w,y){const x=d(w,y);if(x&&!x.configurable&&!x.writable&&!x.get)return w[y];const $=w.__ajaxHooker;if($&&$.proxyProps){if(y in $.proxyProps){const R=$.proxyProps[y];return "get"in R?R.get():typeof R.value=="function"?R.value.bind($):R.value}if(typeof w[y]=="function")return w[y].bind(w)}return w[y]},set(w,y,x){const $=d(w,y);if($&&!$.configurable&&!$.writable&&!$.set)return  true;const R=w.__ajaxHooker;if(R&&R.proxyProps&&y in R.proxyProps){const B=R.proxyProps[y];B.set?B.set(x):B.value=x;}else w[y]=x;return  true}};class G{constructor(y){const x=this;Object.assign(x,{originalXhr:y,proxyXhr:new Proxy(y,k),resThenable:new M,proxyProps:{},proxyEvents:{}}),y.addEventListener("readystatechange",$=>{if(x.proxyXhr.readyState===4&&x.request&&typeof x.request.response=="function"){const R={finalUrl:x.proxyXhr.responseURL,status:x.proxyXhr.status,responseHeaders:T(x.proxyXhr.getAllResponseHeaders())},B={};for(const j of a){try{B[j]=x.originalXhr[j];}catch{}h(R,j,()=>R[j]=B[j],et=>{delete R[j],R[j]=et;});}x.resThenable=new L(x.request).waitForResponseKeys(R).then(()=>{for(const j of a)x.proxyProps[j]={get:()=>(j in R||(R[j]=B[j]),R[j])};});}x.dispatchEvent($);}),y.addEventListener("load",$=>x.dispatchEvent($)),y.addEventListener("loadend",$=>x.dispatchEvent($));for(const $ of l){const R="on"+$;x.proxyProps[R]={get:()=>x.proxyEvents[R]||null,set:B=>x.addEvent(R,B)};}for(const $ of ["setRequestHeader","addEventListener","removeEventListener","open","send"])x.proxyProps[$]={value:x[$]};}toJSON(){}addEvent(y,x){if(y.startsWith("on"))this.proxyEvents[y]=typeof x=="function"?x:null;else {if(typeof x=="object"&&x!==null&&(x=x.handleEvent),typeof x!="function")return;this.proxyEvents[y]=this.proxyEvents[y]||new Set,this.proxyEvents[y].add(x);}}removeEvent(y,x){y.startsWith("on")?this.proxyEvents[y]=null:(typeof x=="object"&&x!==null&&(x=x.handleEvent),this.proxyEvents[y]&&this.proxyEvents[y].delete(x));}dispatchEvent(y){if(y.stopImmediatePropagation=E,h(y,"target",()=>this.proxyXhr),h(y,"currentTarget",()=>this.proxyXhr),this.proxyEvents[y.type]&&this.proxyEvents[y.type].forEach($=>{this.resThenable.then(()=>!y.ajaxHooker_isStopped&&$.call(this.proxyXhr,y));}),y.ajaxHooker_isStopped)return;const x=this.proxyEvents["on"+y.type];x&&this.resThenable.then(x.bind(this.proxyXhr,y));}setRequestHeader(y,x){if(this.originalXhr.setRequestHeader(y,x),!this.request)return;const $=this.request.headers;$[y]=y in $?`${$[y]}, ${x}`:x;}addEventListener(...y){l.includes(y[0])?this.addEvent(y[0],y[1]):this.originalXhr.addEventListener(...y);}removeEventListener(...y){l.includes(y[0])?this.removeEvent(y[0],y[1]):this.originalXhr.removeEventListener(...y);}open(y,x,$=true,...R){return this.request={type:"xhr",url:x.toString(),method:y.toUpperCase(),abort:false,headers:{},data:null,response:null,async:!!$},this.openArgs=R,this.resThenable=new M,["responseURL","readyState","status","statusText",...a].forEach(B=>{delete this.proxyProps[B];}),this.originalXhr.open(y,x,$,...R)}send(y){const x=this,$=x.originalXhr,R=x.request;if(!R)return $.send(y);R.data=y,new L(R).waitForRequestKeys().then(()=>{if(R.abort)typeof R.response=="function"&&(Object.assign(x.proxyProps,{responseURL:{value:R.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),l.forEach(B=>$.dispatchEvent(new Event(B))));else {$.open(R.method,R.url,R.async,...x.openArgs);for(const B in R.headers)$.setRequestHeader(B,R.headers[B]);$.send(R.data);}});}}function H(){const w=new n.realXHR;return "__ajaxHooker"in w&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),w.__ajaxHooker=new G(w),w.__ajaxHooker.proxyXhr}H.prototype=e.XMLHttpRequest.prototype,Object.keys(e.XMLHttpRequest).forEach(w=>H[w]=e.XMLHttpRequest[w]);function q(w,y={}){return w?new Promise(async(x,$)=>{const R={};if(c(w)==="[object Request]"){for(const et of s)R[et]=w[et];w.body&&(R.body=await w.arrayBuffer()),w=w.url;}w=w.toString(),Object.assign(R,y),R.method=R.method||"GET",R.headers=R.headers||{};const B={type:"fetch",url:w,method:R.method.toUpperCase(),abort:false,headers:T(R.headers),data:R.body,response:null,async:true},j=new L(B);if(await j.waitForRequestKeys(),B.abort){if(typeof B.response=="function"){const et={finalUrl:B.url,status:200,responseHeaders:{}};await j.waitForResponseKeys(et);const dt=i.find(Ht=>Ht in et);let W=et[dt];dt==="json"&&typeof W=="object"&&(W=v(JSON.stringify.bind(JSON),W));const mt=new Response(W,{status:200,statusText:"OK"});h(mt,"type",()=>"basic"),h(mt,"url",()=>B.url),x(mt);}else $(new DOMException("aborted","AbortError"));return}R.method=B.method,R.headers=B.headers,R.body=B.data,n.realFetch.call(e,B.url,R).then(et=>{if(typeof B.response=="function"){const dt={finalUrl:et.url,status:et.status,responseHeaders:T(et.headers)};i.forEach(W=>et[W]=function(){return W in dt?Promise.resolve(dt[W]):r[W].call(this).then(mt=>(dt[W]=mt,j.waitForResponseKeys(dt).then(()=>W in dt?dt[W]:mt)))});}x(et);},$);}):n.realFetch.call(e,w,y)}function st(){const w=Object.getOwnPropertyDescriptors(this),y=n.realFetchClone.call(this);return Object.defineProperties(y,w),y}n=e.__ajaxHooker=n||{version:o,fakeXHR:H,fakeFetch:q,fakeFetchClone:st,realXHR:e.XMLHttpRequest,realFetch:e.fetch,realFetchClone:r.clone,hookInsts:new Set},n.version!==o&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),e.XMLHttpRequest=n.fakeXHR,e.fetch=n.fakeFetch,r.clone=n.fakeFetchClone,n.hookInsts.add(t);class bt{call(y,...x){return y&&y.__ajaxHooker&&y.__ajaxHooker.proxyXhr===y&&(y=y.__ajaxHooker.originalXhr),Reflect.apply(this,y,x)}apply(y,x){return y&&y.__ajaxHooker&&y.__ajaxHooker.proxyXhr===y&&(y=y.__ajaxHooker.originalXhr),Reflect.apply(this,y,x||[])}}function C(w){Object.setPrototypeOf(w.nativeXMLHttpRequestSetRequestHeader,bt.prototype),Object.setPrototypeOf(w.nativeXMLHttpRequestOpen,bt.prototype),Object.setPrototypeOf(w.nativeXMLHttpRequestSend,bt.prototype);}return e.secsdk?e.secsdk.csrf&&e.secsdk.csrf.nativeXMLHttpRequestOpen&&C(e.secsdk.csrf):h(e,"secsdk",f,w=>{delete e.secsdk,e.secsdk=w,h(w,"csrf",f,y=>{delete w.csrf,w.csrf=y,y.nativeXMLHttpRequestOpen&&C(y);});}),{hook:w=>t.hookFns.push(w),filter:w=>{Array.isArray(w)&&(t.filters=w);},protect:()=>{b(e,"XMLHttpRequest",n.fakeXHR),b(e,"fetch",n.fakeFetch),b(r,"clone",n.fakeFetchClone);},unhook:()=>{n.hookInsts.delete(t),n.hookInsts.size||(A(e,"XMLHttpRequest",n.realXHR),A(e,"fetch",n.realFetch),A(r,"clone",n.realFetchClone),delete e.__ajaxHooker);}}}()},Ga=function(){return function(){const o=window.unsafeWindow||document.defaultView||window,t=[],e=o.XMLHttpRequest,n=o.Response.prototype,r=Object.prototype.toString,a=o.fetch,i=["response","responseText","responseXML"],s=["arrayBuffer","blob","formData","json","text"],l=["readystatechange","load","loadend"];let c;function d(){}function f(C){console.error(C);}function p(C,w,y,x){Object.defineProperty(C,w,{configurable:true,enumerable:true,get:y,set:x});}function g(C,w,y=C[w]){p(C,w,()=>y,d);}function v(C,w,y=C[w]){Object.defineProperty(C,w,{configurable:true,enumerable:true,writable:true,value:y});}function h(C){return {type:C.type,url:C.url,method:C.method&&C.method.toUpperCase()}}function b(C,w,y){return c&&!c.find(x=>(!x.type||x.type===C)&&(!x.url||(r.call(x.url)==="[object String]"?w.includes(x.url):x.url.test(w)))&&(!x.method||x.method===y.toUpperCase()))}function A(C,w){let y,x=C;for(;x;){const $=Object.getOwnPropertyDescriptor(x,w);if(y=$&&$.get,y)break;x=Object.getPrototypeOf(x);}return y?y.bind(C):d}function T(C){return Promise.all(t.map(w=>Promise.resolve(w(C)).then(d,f)))}function E(C,w){return Promise.all(["url","method","abort","headers","data"].map(y=>Promise.resolve(C[y]).then(x=>C[y]=x,()=>C[y]=w[y])))}function M(){this.ajaxHooker_stopped=true;}function L(C){const w=C.target;C.stopImmediatePropagation=M,w.__ajaxHooker.hookedEvents[C.type].forEach(x=>!C.ajaxHooker_stopped&&x.call(w,C));const y=w.__ajaxHooker.hookedEvents["on"+C.type];typeof y=="function"&&y.call(w,C);}function k(C){C.target.readyState===4?C.target.dispatchEvent(new CustomEvent("ajaxHooker_responseReady",{detail:C})):C.target.__ajaxHooker.delegateEvent(C);}function G(C){C.target.__ajaxHooker.delegateEvent(C);}function H(C,w,...y){const x=this.__ajaxHooker;return x.url=w.toString(),x.method=C.toUpperCase(),x.openArgs=y,x.headers={},x.originalMethods.open(C,w,...y)}function q(){const C=new e;let w=C.__ajaxHooker;if(!w){w=C.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:L,originalGetters:{},originalMethods:{}},C.addEventListener("readystatechange",k),C.addEventListener("load",G),C.addEventListener("loadend",G);for(const x of i)w.originalGetters[x]=A(C,x);for(const x of ["open","setRequestHeader","addEventListener","removeEventListener"])w.originalMethods[x]=C[x].bind(C);C.open=H,C.setRequestHeader=(x,$)=>{w.originalMethods.setRequestHeader(x,$),C.readyState===1&&(w.headers[x]?w.headers[x]+=", "+$:w.headers[x]=$);},C.addEventListener=function(...x){l.includes(x[0])?w.hookedEvents[x[0]].add(x[1]):w.originalMethods.addEventListener(...x);},C.removeEventListener=function(...x){l.includes(x[0])?w.hookedEvents[x[0]].delete(x[1]):w.originalMethods.removeEventListener(...x);},l.forEach(x=>{const $="on"+x;p(C,$,()=>w.hookedEvents[$]||null,R=>{w.hookedEvents[$]=typeof R=="function"?R:null;});});}const y=C.send.bind(C);return C.send=function(x){if(C.readyState!==1)return y(x);if(w.delegateEvent=L,i.forEach($=>{delete C[$];}),b("xhr",w.url,w.method))return C.addEventListener("ajaxHooker_responseReady",$=>{w.delegateEvent($.detail);}),y(x);try{const $={type:"xhr",url:w.url,method:w.method,abort:!1,headers:w.headers,data:x,response:null},R={...$};T($).then(()=>{E($,R).then(()=>{if(!$.abort){w.originalMethods.open($.method,$.url,...w.openArgs);for(const B in $.headers)w.originalMethods.setRequestHeader(B,$.headers[B]);x=$.data,C.addEventListener("ajaxHooker_responseReady",B=>{try{if(typeof $.response=="function"){const j={finalUrl:C.responseURL,status:C.status,responseHeaders:{}};for(const W of C.getAllResponseHeaders().trim().split(/[\r\n]+/)){const mt=W.split(/:\s*/);if(mt.length===2){const Ht=mt[0].toLowerCase();j.responseHeaders[Ht]?j.responseHeaders[Ht]+=", "+mt[1]:j.responseHeaders[Ht]=mt[1];}}i.forEach(W=>{p(j,W,()=>j[W]=w.originalGetters[W](),mt=>{delete j[W],j[W]=mt;}),p(C,W,()=>{const mt=w.originalGetters[W]();return C.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:W,val:mt}})),mt});}),C.addEventListener("ajaxHooker_readResponse",W=>{j[W.detail.prop]=W.detail.val;});const et=Promise.resolve($.response(j)).then(()=>{const W=[];return i.forEach(mt=>{const Ht=Object.getOwnPropertyDescriptor(j,mt);Ht&&"value"in Ht&&W.push(Promise.resolve(Ht.value).then(be=>{j[mt]=be,p(C,mt,()=>(C.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:mt,val:be}})),be));},d));}),Promise.all(W)},f),dt={};l.forEach(W=>{dt[W]=new Set([...w.hookedEvents[W]]),dt["on"+W]=w.hookedEvents["on"+W];}),w.delegateEvent=W=>et.then(()=>{W.stopImmediatePropagation=M,dt[W.type].forEach(Ht=>!W.ajaxHooker_stopped&&Ht.call(C,W));const mt=dt["on"+W.type];typeof mt=="function"&&mt.call(C,W);});}}catch(j){console.error(j);}w.delegateEvent(B.detail);}),y(x);}});});}catch($){console.error($),y(x);}},C}function st(C,w,y){s.forEach(x=>{C[x]=()=>new Promise(($,R)=>{n[x].call(C).then(B=>{if(x in w)$(w[x]);else try{w[x]=B,Promise.resolve(y(w)).then(()=>{x in w?Promise.resolve(w[x]).then(j=>$(w[x]=j),()=>$(B)):$(B);},f);}catch(j){console.error(j),$(B);}},R);});});}function bt(C,w){if(C&&typeof C.toString=="function"){if(C=C.toString(),w=w||{},w.method=w.method||"GET",w.headers=w.headers||{},b("fetch",C,w.method))return a.call(o,C,w);const y={type:"fetch",url:C,method:w.method.toUpperCase(),abort:false,headers:{},data:w.body,response:null};if(r.call(w.headers)==="[object Headers]")for(const[$,R]of w.headers)y.headers[$]=R;else y.headers={...w.headers};const x={...y};return new Promise(($,R)=>{try{T(y).then(()=>{E(y,x).then(()=>{if(y.abort)return R("aborted");C=y.url,w.method=y.method,w.headers=y.headers,w.body=y.data,a.call(o,C,w).then(B=>{if(typeof y.response=="function"){const j={finalUrl:B.url,status:B.status,responseHeaders:{}};for(const[et,dt]of B.headers)j.responseHeaders[et]=dt;st(B,j,y.response),B.clone=()=>{const et=n.clone.call(B);return st(et,j,y.response),et};}$(B);},R);});});}catch(B){return console.error(B),a.call(o,C,w)}})}else return a.call(o,C,w)}return o.XMLHttpRequest=q,Object.keys(e).forEach(C=>q[C]=e[C]),q.prototype=e.prototype,o.fetch=bt,{hook:C=>t.push(C),filter:C=>{c=Array.isArray(C)&&C.map(h);},protect:()=>{g(o,"XMLHttpRequest",q),g(o,"fetch",bt);},unhook:()=>{v(o,"XMLHttpRequest",e),v(o,"fetch",a);}}}()};class Fa{constructor(t){O(this,"GM_Api",{getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null});O(this,"MenuHandle",{context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:true,isStoreValue:true},$emoji:{success:"✅",error:"❌"},init(){for(let t=0;t<this.$data.data.length;t++){let e=this.$data.data[t].data;e.enable=!!this.getLocalMenuData(e.key,e.enable),typeof e.showText!="function"&&(e.showText=(n,r)=>r?this.$emoji.success+" "+n:this.$emoji.error+" "+n);}},register(t){let e=this;if(t==null)throw new TypeError("register菜单数据不能为空");Array.isArray(t)||(t=[t]);for(let n=0;n<t.length;n++){let r=at.deepClone(t[n].data);const{showText:a,clickCallBack:i}=this.handleMenuData(r);let s=e.context.GM_Api.registerMenuCommand(a,i);t[n].id=s,r.deleteMenu=function(){e.context.GM_Api.unregisterMenuCommand(s);},Reflect.deleteProperty(t[n],"handleData"),t[n].handleData=r;}},getLocalMenuData(t,e){let n=this.context.GM_Api.getValue(this.$data.key,{});return t in n?n[t]:e},setLocalMenuData(t,e){let n=this.context.GM_Api.getValue(this.$data.key,{});n[t]=e,this.context.GM_Api.setValue(this.$data.key,n);},handleInitDetail(t){return t.enable=!!this.getLocalMenuData(t.key,t.enable),typeof t.showText!="function"&&(t.showText=(e,n)=>n?this.$emoji.success+" "+e:this.$emoji.error+" "+e),t},handleMenuData(t){let e=this,n=t.key,r=!!this.getLocalMenuData(n,t.enable),a=t.showText(t.text,r);t.id,t.autoClose,t.accessKey,t.title,t.autoReload=typeof t.autoReload!="boolean"?this.$default.autoReload:t.autoReload,t.isStoreValue=typeof t.isStoreValue!="boolean"?this.$default.isStoreValue:t.isStoreValue;function i(s){let l=!!e.getLocalMenuData(n,r);t.isStoreValue&&e.setLocalMenuData(n,!l),typeof t.callback=="function"&&t.callback({key:n,enable:!l,oldEnable:l,event:s,storeValue(c){e.setLocalMenuData(n,c);}}),t.autoReload?window.location.reload():e.context.update();}return {showText:a,clickCallBack:i}},getMenuData(t){return this.$data.data.find(e=>e.data.key===t)},getMenuOption(t){var e;return (e=this.$data.data.find(n=>n.data.key===t))==null?void 0:e.data},getMenuHandledOption(t){var e;return (e=this.$data.data.find(n=>n.handleData.key===t))==null?void 0:e.handleData}});this.GM_Api.getValue=t.GM_getValue,this.GM_Api.setValue=t.GM_setValue,this.GM_Api.registerMenuCommand=t.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=t.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof t.autoReload=="boolean"?t.autoReload:true;for(const e of Object.keys(this.GM_Api))if(typeof this.GM_Api[e]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${e}，且传入该对象`);this.add((t==null?void 0:t.data)||[]);}__add(t){if(Array.isArray(t))for(let e=0;e<t.length;e++){const n=t[e];this.MenuHandle.$data.data.push({data:n,id:void 0});}else this.MenuHandle.$data.data.push({data:t,id:void 0});}add(t){this.__add(t),this.update();}update(t){let e=[];Array.isArray(t)?e=[...e,...t]:t!=null&&(e=[...e,t]),e.forEach(n=>{let r=this.MenuHandle.getMenuOption(n.key);r?Object.assign(r,n):this.__add(n);}),this.MenuHandle.$data.data.forEach(n=>{n.handleData&&n.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(t){this.GM_Api.unregisterMenuCommand(t);}get(t){return this.getEnable(t)}getEnable(t){return this.MenuHandle.getMenuHandledOption(t).enable}getText(t){return this.MenuHandle.getMenuHandledOption(t).text}getShowTextValue(t){return this.MenuHandle.getMenuHandledOption(t).showText(this.getText(t),this.getEnable(t))}getMenuId(t){let e=null;for(let n=0;n<this.MenuHandle.$data.data.length;n++){const r=this.MenuHandle.$data.data[n];if(r.handleData.key===t){e=r.id;break}}return e}getAccessKey(t){var e;return (e=this.MenuHandle.getMenuHandledOption(t))==null?void 0:e.accessKey}getAutoClose(t){var e;return (e=this.MenuHandle.getMenuHandledOption(t))==null?void 0:e.autoClose}getAutoReload(t){var e;return (e=this.MenuHandle.getMenuHandledOption(t))==null?void 0:e.autoReload}getCallBack(t){var e;return (e=this.MenuHandle.getMenuHandledOption(t))==null?void 0:e.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(t,e){this.MenuHandle.setLocalMenuData(t,e);}setEnable(t,e){this.setValue(t,!!e);}setEnableTrueEmoji(t){if(typeof t!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=t;}setEnableFalseEmoji(t){if(typeof t!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=t;}setLocalStorageKeyName(t){if(typeof t!="string")throw new Error("参数keyName必须是string类型");this.MenuHandle.$data.key=t;}}class ja{initEnv(){Function.prototype.hook=function(t,e,n){let r=null,a=null;if(r=n||window,a=i(this),r["realFunc_"+a]=this,r[a].prototype&&r[a].prototype.isHooked)return console.log("Already has been hooked,unhook first"),false;function i(s){let l=s.toString(),c=/function\s+(\w+)\s*\(/,d=l.match(c);return d?d[1]:""}try{return new Function("_context","_funcName","hookFunc",`_context[_funcName] = function ${a}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${a}'].apply(obj, args);
    };`)(r,a,e),r[a].prototype.isHooked=!0,!0}catch{return console.log("Hook failed,check the params."),false}},Function.prototype.unhook=function(t,e,n){let r=null,a=null;return r=n||window,a=e,r[a].prototype.isHooked?(r[a]=r["realFunc"+a],Reflect.deleteProperty(r,"realFunc_"+a),true):(console.log("No function is hooked on"),false)};}cleanEnv(){return Function.prototype.hasOwnProperty("hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Function.prototype.hasOwnProperty("unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),true}}const Tn=function(){var o;return typeof((o=window==null?void 0:window.crypto)==null?void 0:o.randomUUID)=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})};var rt,ee;class qa{constructor(t={}){O(this,"GM_Api",{xmlHttpRequest:null});O(this,"HttpxRequestHook",{$config:{configList:[]},async beforeRequestCallBack(t){if(typeof t.allowInterceptConfig=="boolean"){if(!t.allowInterceptConfig)return t}else if(t.allowInterceptConfig!=null&&typeof t.allowInterceptConfig.beforeRequest=="boolean"&&!t.allowInterceptConfig.beforeRequest)return t;for(let e=0;e<this.$config.configList.length;e++){let n=this.$config.configList[e];if(typeof n.fn=="function"&&await n.fn(t)==null)return}return t},add(t){if(typeof t=="function"){let e=Tn();return this.$config.configList.push({id:e,fn:t}),e}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(t){if(typeof t=="string"){let e=this.$config.configList.findIndex(n=>n.id===t);if(e!==-1)return this.$config.configList.splice(e,1),true}return  false},clearAll(){this.$config.configList=[];}});O(this,"HttpxResponseHook",{$config:{configList:[]},async successResponseCallBack(t,e){if(typeof e.allowInterceptConfig=="boolean"){if(!e.allowInterceptConfig)return e}else if(e.allowInterceptConfig!=null&&typeof e.allowInterceptConfig.afterResponseSuccess=="boolean"&&!e.allowInterceptConfig.afterResponseSuccess)return e;for(let n=0;n<this.$config.configList.length;n++){let r=this.$config.configList[n];if(typeof r.successFn=="function"&&await r.successFn(t,e)==null)return}return t},async errorResponseCallBack(t){if(typeof t.details.allowInterceptConfig=="boolean"){if(!t.details.allowInterceptConfig)return t}else if(t.details.allowInterceptConfig!=null&&typeof t.details.allowInterceptConfig.afterResponseError=="boolean"&&!t.details.allowInterceptConfig.afterResponseError)return t;for(let e=0;e<this.$config.configList.length;e++){let n=this.$config.configList[e];if(typeof n.errorFn=="function"&&await n.errorFn(t)==null)return}return t},add(t,e){let n=Tn();return this.$config.configList.push({id:n,successFn:t,errorFn:e}),n},delete(t){if(typeof t=="string"){let e=this.$config.configList.findIndex(n=>n.id===t);if(e!==-1)return this.$config.configList.splice(e,1),true}return  false},clearAll(){this.$config.configList=[];}});O(this,"HttpxRequestOption",{context:this,handleBeforeRequestOptionArgs(...t){let e={};if(typeof t[0]=="string"){let n=t[0];if(e.url=n,typeof t[1]=="object"){let r=t[1];at.assign(e,r,true),e.url=n;}}else {let n=t[0];at.assign(e,n,true);}return e},getRequestOption(t,e,n,r){let a=this,i=e.url||m(this.context,rt).url;typeof i=="string"&&(i=i.trim(),i.startsWith("http://")||i.startsWith("https://")||typeof m(this.context,ee).baseURL=="string"&&(i=m(this.context,ee).baseURL+i));let s={url:i,method:(t||"GET").toString().toUpperCase().trim(),timeout:e.timeout||m(this.context,rt).timeout,responseType:e.responseType||m(this.context,rt).responseType,headers:at.deepClone(m(this.context,rt).headers),data:e.data||m(this.context,rt).data,redirect:e.redirect||m(this.context,rt).redirect,cookie:e.cookie||m(this.context,rt).cookie,cookiePartition:e.cookiePartition||m(this.context,rt).cookiePartition,binary:e.binary||m(this.context,rt).binary,nocache:e.nocache||m(this.context,rt).nocache,revalidate:e.revalidate||m(this.context,rt).revalidate,context:at.deepClone(e.context||m(this.context,rt).context),overrideMimeType:e.overrideMimeType||m(this.context,rt).overrideMimeType,anonymous:e.anonymous||m(this.context,rt).anonymous,fetch:e.fetch||m(this.context,rt).fetch,fetchInit:at.deepClone(m(this.context,rt).fetchInit),allowInterceptConfig:{beforeRequest:m(this.context,rt).allowInterceptConfig.beforeRequest,afterResponseSuccess:m(this.context,rt).allowInterceptConfig.afterResponseSuccess,afterResponseError:m(this.context,rt).allowInterceptConfig.afterResponseError},user:e.user||m(this.context,rt).user,password:e.password||m(this.context,rt).password,onabort(...l){a.context.HttpxCallBack.onAbort(e,n,r,l);},onerror(...l){a.context.HttpxCallBack.onError(e,n,r,l);},onloadstart(...l){a.context.HttpxCallBack.onLoadStart(e,l);},onprogress(...l){a.context.HttpxCallBack.onProgress(e,l);},onreadystatechange(...l){a.context.HttpxCallBack.onReadyStateChange(e,l);},ontimeout(...l){a.context.HttpxCallBack.onTimeout(e,n,r,l);},onload(...l){a.context.HttpxCallBack.onLoad(e,n,r,l);}};typeof e.allowInterceptConfig=="boolean"?Object.keys(s.allowInterceptConfig).forEach(l=>{Reflect.set(s.allowInterceptConfig,l,e.allowInterceptConfig);}):typeof e.allowInterceptConfig=="object"&&e.allowInterceptConfig!=null&&Object.keys(e.allowInterceptConfig).forEach(l=>{let c=Reflect.get(e.allowInterceptConfig,l);typeof c=="boolean"&&Reflect.has(s.allowInterceptConfig,l)&&Reflect.set(s.allowInterceptConfig,l,c);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(s.fetch=true),typeof s.headers=="object"?typeof e.headers=="object"&&Object.keys(e.headers).forEach((l,c)=>{var d,f;l in s.headers&&((d=e.headers)==null?void 0:d[l])==null?Reflect.deleteProperty(s.headers,l):s.headers[l]=(f=e==null?void 0:e.headers)==null?void 0:f[l];}):Reflect.set(s,"headers",e.headers),typeof s.fetchInit=="object"?typeof e.fetchInit=="object"&&Object.keys(e.fetchInit).forEach((l,c)=>{l in s.fetchInit&&e.fetchInit[l]==null?Reflect.deleteProperty(s.fetchInit,l):Reflect.set(s.fetchInit,l,Reflect.get(e.fetchInit,l));}):Reflect.set(s,"fetchInit",e.fetchInit),typeof s.cookiePartition=="object"&&s.cookiePartition!=null&&Reflect.has(s.cookiePartition,"topLevelSite")&&typeof s.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(s.cookiePartition,"topLevelSite");try{new URL(s.url);}catch{s.url.startsWith("//")?s.url=globalThis.location.protocol+s.url:s.url.startsWith("/")?s.url=globalThis.location.origin+s.url:s.url=globalThis.location.origin+"/"+s.url;}s.fetchInit&&!s.fetch&&Reflect.deleteProperty(s,"fetchInit");try{let l=e.processData??!0;if(s.data!=null&&l){let c=s.method;if(c==="GET"||c==="HEAD"){let d=new URL(s.url),f="",p=!1;typeof s.data=="string"?(p=!0,f=s.data):typeof s.data=="object"&&(p=!0,f=new URLSearchParams(s.data).toString()),p&&Reflect.deleteProperty(s,"data"),f!=""&&(d.search===""?d.search=f:d.search.endsWith("&")?d.search=d.search+f:d.search=d.search+"&"+f),s.url=d.toString();}else if(c==="POST"&&s.headers!=null){let d=Object.keys(s.headers),f=d.findIndex(p=>p.trim().toLowerCase()==="content-type"&&typeof s.headers[p]=="string");if(f!==-1){let p=d[f],g=s.headers[p];if(g.includes("application/json"))if(s.data instanceof FormData){const v={};s.data.forEach((h,b)=>{v[b]=h;}),s.data=JSON.stringify(v);}else typeof s.data=="object"&&(s.data=JSON.stringify(s.data));else g.includes("application/x-www-form-urlencoded")?typeof s.data=="object"&&(s.data=new URLSearchParams(s.data).toString()):g.includes("multipart/form-data")&&s.data instanceof FormData&&Reflect.deleteProperty(s.headers,p);}}}}catch(l){console.warn("Httpx ==> 转换data参数错误",l);}return s},removeRequestNullOption(t){if(Object.keys(t).forEach(e=>{if(t[e]==null||t[e]instanceof Function&&at.isNull(t[e])){Reflect.deleteProperty(t,e);return}}),at.isNull(t.url))throw new TypeError(`Utils.Httpx 参数 url不符合要求: ${t.url}`);return t},handleFetchOption(t){let e={};(t.method==="GET"||t.method==="HEAD")&&t.data!=null&&Reflect.deleteProperty(t,"data");let n=new AbortController,r=n.signal;return r.onabort=()=>{t.onabort({isFetch:true,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},e.method=t.method??"GET",e.headers=t.headers,e.body=t.data,e.mode="cors",e.credentials="include",e.cache="no-cache",e.redirect="follow",e.referrerPolicy="origin-when-cross-origin",e.signal=r,Object.assign(e,t.fetchInit||{}),{fetchOption:t,fetchRequestOption:e,abortController:n}}});O(this,"HttpxCallBack",{context:this,async onAbort(t,e,n,r){"onabort"in t?t.onabort.apply(this,r):"onabort"in m(this.context,rt)&&m(this.context,rt).onabort.apply(this,r);let a=r;a.length&&(a=a[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new TypeError("request canceled"),response:null,details:t})!=null&&e({data:a,details:t,msg:"请求被取消",status:false,statusCode:-1,type:"onabort"});},async onError(t,e,n,r){"onerror"in t?t.onerror.apply(this,r):"onerror"in m(this.context,rt)&&m(this.context,rt).onerror.apply(this,r);let a=r;a.length&&(a=a[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new TypeError("request error"),response:a,details:t})!=null&&e({data:a,details:t,msg:"请求异常",status:false,statusCode:a.status,type:"onerror"});},async onTimeout(t,e,n,r){"ontimeout"in t?t.ontimeout.apply(this,r):"ontimeout"in m(this.context,rt)&&m(this.context,rt).ontimeout.apply(this,r);let a=r;a.length&&(a=a[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new TypeError("request timeout"),response:(r||[null])[0],details:t})!=null&&e({data:a,details:t,msg:"请求超时",status:false,statusCode:0,type:"ontimeout"});},onLoadStart(t,e){"onloadstart"in t?t.onloadstart.apply(this,e):"onloadstart"in m(this.context,rt)&&m(this.context,rt).onloadstart.apply(this,e);},async onLoad(t,e,n,r){let a=r[0];if(at.isNull(a.responseText)&&at.isNotNull(a.response)&&(typeof a.response=="object"?Ye().run(()=>{a.responseText=JSON.stringify(a.response);}):a.responseText=a.response),a.response==null&&typeof a.responseText=="string"&&a.responseText.trim()!==""){let s=a.responseText,l=s;if(t.responseType==="json")l=at.toJSON(s);else if(t.responseType==="document")l=new DOMParser().parseFromString(s,"text/html");else if(t.responseType==="arraybuffer")l=new TextEncoder().encode(s);else if(t.responseType==="blob"){let d=new TextEncoder().encode(s);l=new Blob([d]);}try{if(!Reflect.set(a,"response",l)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(a,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(a,"httpxResponse",l);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}let i=Reflect.get(a,"responseURL");if(a.finalUrl==null&&i!=null&&Reflect.set(a,"finalUrl",i),Math.floor(a.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(a,t)==null)return;e({data:a,details:t,msg:"请求成功",status:true,statusCode:a.status,type:"onload"});}else this.context.HttpxCallBack.onError(t,e,n,r);},onProgress(t,e){"onprogress"in t?t.onprogress.apply(this,e):"onprogress"in m(this.context,rt)&&m(this.context,rt).onprogress.apply(this,e);},onReadyStateChange(t,e){"onreadystatechange"in t?t.onreadystatechange.apply(this,e):"onreadystatechange"in m(this.context,rt)&&m(this.context,rt).onreadystatechange.apply(this,e);}});O(this,"HttpxRequest",{context:this,async request(t){if(m(this.context,ee).logDetails&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",t),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(t)==null))if(t.fetch){const{fetchOption:e,fetchRequestOption:n,abortController:r}=this.context.HttpxRequestOption.handleFetchOption(t);return this.fetch(e,n,r)}else return this.xmlHttpRequest(t)},xmlHttpRequest(t){return this.context.GM_Api.xmlHttpRequest(t)},fetch(t,e,n){return fetch(t.url,e).then(async r=>{var v;let a={isFetch:true,finalUrl:r.url,readyState:4,status:r.status,statusText:r.statusText,response:void 0,responseFetchHeaders:r.headers,responseHeaders:"",responseText:void 0,responseType:t.responseType,responseXML:void 0};Object.assign(a,t.context||{});for(const[h,b]of r.headers.entries())a.responseHeaders+=`${h}: ${b}
`;const i=r.headers.get("Content-Type");if(t.responseType==="stream"||r.headers.has("Content-Type")&&r.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(a,"isStream",true),Reflect.set(a,"response",r.body),Reflect.deleteProperty(a,"responseText"),Reflect.deleteProperty(a,"responseXML"),t.onload(a);return}let s="",l="",c="",d=await r.arrayBuffer(),f="utf-8";if(r.headers.has("Content-Type")){let h=(v=r.headers.get("Content-Type"))==null?void 0:v.match(/charset=(.+)/);h&&(f=h[1],f=f.toLowerCase());}f=f.replace(/('|")/gi,""),l=new TextDecoder(f).decode(d),s=l,t.responseType==="arraybuffer"?s=d:t.responseType==="blob"?s=new Blob([d]):t.responseType==="json"||typeof i=="string"&&i.includes("application/json")?s=at.toJSON(l):(t.responseType==="document"||t.responseType==null)&&(s=new DOMParser().parseFromString(l,"text/html")),c=new DOMParser().parseFromString(l,"text/xml"),Reflect.set(a,"response",s),Reflect.set(a,"responseText",l),Reflect.set(a,"responseXML",c),t.onload(a);}).catch(r=>{r.name!=="AbortError"&&t.onerror({isFetch:true,finalUrl:t.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:r});}),t.onloadstart({isFetch:true,finalUrl:t.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){n.abort();}}}});ft(this,rt,{url:void 0,timeout:5e3,async:false,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:true,afterResponseSuccess:true,afterResponseError:true},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}});ft(this,ee,{baseURL:void 0,logDetails:false});O(this,"interceptors",{request:{context:null,use(t){if(typeof t!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(t)},eject(t){return this.context.HttpxRequestHook.delete(t)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(t,e){if(typeof t!="function"&&typeof e!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(t,e)},eject(t){return this.context.HttpxResponseHook.delete(t)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}});typeof t.xmlHttpRequest!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),at.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(t);}config(t={}){typeof t.xmlHttpRequest=="function"&&(this.GM_Api.xmlHttpRequest=t.xmlHttpRequest),pt(this,rt,at.assign(m(this,rt),t)),pt(this,ee,at.assign(m(this,ee),t));}setXMLHttpRequest(t){this.GM_Api.xmlHttpRequest=t;}get(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="GET",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}post(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="POST",this.request(e)}head(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="HEAD",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}options(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="OPTIONS",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}delete(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="DELETE",this.request(e,n=>{Reflect.deleteProperty(n,"onprogress");})}put(...t){let e=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...t);return e.method="PUT",this.request(e)}request(t,e){let n=this.HttpxRequestOption.handleBeforeRequestOptionArgs(t),r=null,a=new globalThis.Promise(async(i,s)=>{let l=this.HttpxRequestOption.getRequestOption(n.method,n,i,s);typeof e=="function"&&e(l),l=this.HttpxRequestOption.removeRequestNullOption(l);const c=await this.HttpxRequest.request(l);c!=null&&typeof c.abort=="function"&&(r=c.abort);});return a.abort=()=>{typeof r=="function"&&r();},a}}rt=new WeakMap,ee=new WeakMap;var Vt,pe,He,Mn,Be,Xt,Ze,tt;class Wa{constructor(t="default_db",e="default_form",n=1){ft(this,Vt);ft(this,pe);ft(this,He);ft(this,Mn,"1");ft(this,Be,window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB);ft(this,Xt,{});ft(this,Ze,null);ft(this,tt,{operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}});if(pt(this,Vt,t),pt(this,pe,e),pt(this,He,n),!m(this,Be))throw alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(t){let e,n;return e=m(this,Xt)[t].transaction(m(this,pe),"readwrite"),n=e.objectStore(m(this,pe)),pt(this,Ze,n),n}open(t,e){let n=this;if(m(n,Xt)[e]){let r=this.createStore(e);t(r);}else {let r=m(n,Be).open(e,m(n,He));r.onerror=function(a){t(null,{code:m(n,tt).openFailed.code,msg:m(n,tt).openFailed.msg,event:a});},r.onsuccess=function(a){if(!m(n,Xt)[e]){let s=a.target;m(n,Xt)[e]=s.result;}let i=n.createStore(e);t(i);},r.onupgradeneeded=function(a){let i=a.target;m(n,Xt)[e]=i.result;let s=m(n,Xt)[e].createObjectStore(m(n,pe),{keyPath:"key"});s.transaction.oncomplete=function(l){t(s);};};}}async save(t,e){let n=this;return new Promise(r=>{let a=m(this,Vt),i={key:t,value:e};this.open(function(s){if(s==null)r({success:false,code:m(n,tt).saveFailed.code,msg:m(n,tt).saveFailed.msg});else {let l=s.put(i);l.onsuccess=function(c){r({success:true,code:m(n,tt).operationSuccess.code,msg:m(n,tt).operationSuccess.msg,event:c});},l.onerror=function(c){r({success:false,code:m(n,tt).saveFailed.code,msg:m(n,tt).saveFailed.msg,event:c});};}},a);})}async has(t){let e=this;return new Promise(n=>{let r=m(this,Vt);this.open(function(a){if(a==null)n({success:false,code:m(e,tt).getFailed.code,msg:m(e,tt).getFailed.msg});else {let i=a.get(t);i.onsuccess=function(s){n({success:true,code:m(e,tt).operationSuccess.code,msg:m(e,tt).operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:m(e,tt).getFailed.code,msg:m(e,tt).getFailed.msg,event:s});};}},r);})}async get(t){let e=this;return new Promise(n=>{let r=m(this,Vt);this.open(function(a){if(a==null)n({success:false,code:m(e,tt).getFailed.code,msg:m(e,tt).getFailed.msg,data:void 0});else {let i=a.get(t);i.onsuccess=function(s){let c=s.target.result,d=c?c.value:void 0;d==null?n({success:true,code:m(e,tt).empty.code,msg:m(e,tt).empty.msg,data:d,event:s,result:c}):n({success:true,code:m(e,tt).operationSuccess.code,msg:m(e,tt).operationSuccess.msg,data:d,event:s,result:c});},i.onerror=function(s){n({success:false,code:m(e,tt).getFailed.code,msg:m(e,tt).getFailed.msg,data:void 0,event:s});};}},r);})}async regexpGet(t){let e=[],n=this;return new Promise(r=>{let a=m(n,Vt);this.open(function(i){if(i==null)r({success:false,code:m(n,tt).regexpGetFailed.code,msg:m(n,tt).regexpGetFailed.msg,data:[]});else {let s=i.getAll();s.onsuccess=function(l){let d=l.target.result;d.length!==0&&d.forEach((f,p)=>{let g=f.key,v=f.value;g.match(t)&&(e=e.concat(v));}),r({success:true,code:m(n,tt).operationSuccess.code,msg:m(n,tt).operationSuccess.msg,data:e,event:l});},s.onerror=function(l){r({success:false,code:m(n,tt).getFailed.code,msg:m(n,tt).getFailed.msg,data:[],event:l});};}},a);})}async delete(t){let e=this;return new Promise(n=>{let r=m(e,Vt);this.open(function(a){if(a==null)n({success:false,code:m(e,tt).deleteFailed.code,msg:m(e,tt).deleteFailed.msg});else {let i=a.delete(t);i.onsuccess=function(s){n({success:true,code:m(e,tt).operationSuccess.code,msg:m(e,tt).operationSuccess.msg,event:s});},i.onerror=function(s){n({success:false,code:m(e,tt).deleteFailed.code,msg:m(e,tt).deleteFailed.msg,event:s});};}},r);})}async deleteAll(){let t=this;return new Promise(e=>{let n=m(t,Vt);this.open(function(r){if(r==null)e({success:false,code:m(t,tt).deleteAllFailed.code,msg:m(t,tt).deleteAllFailed.msg});else {let a=r.clear();a.onsuccess=function(i){e({success:true,code:m(t,tt).operationSuccess.code,msg:m(t,tt).operationSuccess.msg,event:i});},a.onerror=function(i){e({success:false,code:m(t,tt).deleteAllFailed.code,msg:m(t,tt).deleteAllFailed.msg,event:i});};}},n);})}}Vt=new WeakMap,pe=new WeakMap,He=new WeakMap,Mn=new WeakMap,Be=new WeakMap,Xt=new WeakMap,Ze=new WeakMap,tt=new WeakMap;var Ee,Se,Ne,Ue;class Ka{constructor(t,e,n){ft(this,Ee,false);ft(this,Se,0);ft(this,Ne);ft(this,Ue);O(this,"lock");O(this,"unlock");O(this,"run");O(this,"isLock");let r=this;pt(this,Ne,t),typeof e=="number"?pt(this,Se,e):pt(this,Se,n),this.lock=function(){pt(r,Ee,true),clearTimeout(m(r,Ue));},this.unlock=function(){pt(r,Ue,setTimeout(()=>{pt(r,Ee,false);},m(r,Se)));},this.isLock=function(){return m(r,Ee)},this.run=async function(...a){r.isLock()||(r.lock(),await m(r,Ne).apply(this,a),r.unlock());};}}Ee=new WeakMap,Se=new WeakMap,Ne=new WeakMap,Ue=new WeakMap;var zt,Bt,Ce,Dt,ue;class Xa{constructor(t,e=window.console){ft(this,zt,false);O(this,"tag","Utils.Log");ft(this,Bt,null);ft(this,Ce,0);ft(this,Dt,{tag:true,successColor:"#0000FF",errorColor:"#FF0000",infoColor:"0",warnColor:"0",debug:false,autoClearConsole:false,logMaxCount:999});ft(this,ue,["font-weight: bold; color: cornflowerblue","font-weight: bold; color: cornflowerblue","font-weight: bold; color: darkorange","font-weight: bold; color: cornflowerblue"]);var n;typeof t=="string"?this.tag=t:typeof t=="object"&&typeof((n=t==null?void 0:t.script)==null?void 0:n.name)=="string"&&(this.tag=t.script.name),pt(this,Bt,e);}parseErrorStack(t){let e={name:"",position:""};for(let n of t){n=n.trim();let r=n.match(/^at[\s]+(.+?)[\s]+/i),a=n.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(r==null||a==null)continue;let i=r[r.length-1],s=a[a.length-1];if(!(i===""||i.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){e.name=i,e.position=s;break}}if(e.position===""){let n=t[t.length-1].trim();if(n.startsWith("at chrome-extension://")){let r=n.match(/^at[\s]+(.+)/);r&&(e.position=r[r.length-1]);}}return e.position===""&&(e.position=t[t.length-1].trim().replace(/^at[\s]*/g,"")),e}checkClearConsole(){Un(this,Ce)._++,m(this,Dt).autoClearConsole&&m(this,Ce)>m(this,Dt).logMaxCount&&(m(this,Bt).clear(),pt(this,Ce,0));}printContent(t,e,n){this.checkClearConsole(),n=n||"";let r=new Error().stack.split(`
`);r.splice(0,2);let{name:a,position:i}=this.parseErrorStack(r),s=this.tag,l=this,c=`%c[${s}%c`,d=`%c${a}%c]%c`;a.trim()!==""&&(d="-"+d);function f(p){typeof p=="string"?m(l,Bt).log(`${c}${d} %s`,...m(l,ue),`color: ${e};${n}`,p):typeof p=="number"?m(l,Bt).log(`${c}${d} %d`,...m(l,ue),`color: ${e};${n}`,p):typeof p=="object"?m(l,Bt).log(`${c}${d} %o`,...m(l,ue),`color: ${e};${n}`,p):m(l,Bt).log(p);}if(Array.isArray(t))for(let p=0;p<t.length;p++)f(t[p]);else f(t);m(this,Dt).debug&&m(this,Bt).log(i);}info(...t){m(this,zt)||this.printContent(t,m(this,Dt).infoColor);}warn(...t){m(this,zt)||this.printContent(t,m(this,Dt).warnColor,"background: #FEF6D5;padding: 4px 6px 4px 0px;");}error(...t){m(this,zt)||this.printContent(t,m(this,Dt).errorColor);}success(...t){m(this,zt)||this.printContent(t,m(this,Dt).successColor);}table(t){if(m(this,zt))return;this.checkClearConsole();let e=new Error().stack.split(`
`);e.splice(0,1);let n=this.parseErrorStack(e),r=n.name,a=n.position,i=r;m(this,Bt).log(`%c[${this.tag}%c-%c${i}%c]%c`,...m(this,ue),`color: ${m(this,Dt).infoColor};`),m(this,Bt).table(t),m(this,Dt).debug&&m(this,Bt).log(a);}config(t){pt(this,Dt,Object.assign(m(this,Dt),t));}disable(){pt(this,zt,true);}recovery(){pt(this,zt,false);}}zt=new WeakMap,Bt=new WeakMap,Ce=new WeakMap,Dt=new WeakMap,ue=new WeakMap;var vt,kt,Gt,Ft;class Qa{constructor(t){ft(this,vt,{canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50});ft(this,kt,null);ft(this,Gt,null);ft(this,Ft,null);if(pt(this,vt,at.assign(m(this,vt),t)),!(m(this,vt).canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");this.init();}init(){let t=m(this,vt).canvasNode.getContext("2d");if(t==null)throw new Error("Utils.Progress 获取画笔失败");pt(this,kt,t),pt(this,Gt,m(this,vt).canvasNode.width),pt(this,Ft,m(this,vt).canvasNode.height),window.devicePixelRatio&&(m(this,vt).canvasNode.style.width=m(this,Gt)+"px",m(this,vt).canvasNode.style.height=m(this,Ft)+"px",m(this,vt).canvasNode.height=m(this,Ft)*window.devicePixelRatio,m(this,vt).canvasNode.width=m(this,Gt)*window.devicePixelRatio,m(this,kt).scale(window.devicePixelRatio,window.devicePixelRatio)),m(this,kt).lineWidth=m(this,vt).lineWidth;}draw(){let t=m(this,vt).progress*360/100;m(this,kt).clearRect(0,0,m(this,Gt),m(this,Ft)),m(this,kt).beginPath(),m(this,kt).arc(m(this,Gt)/2,m(this,Ft)/2,m(this,vt).circleRadius,1,8),m(this,kt).strokeStyle=m(this,vt).lineBgColor,m(this,kt).stroke(),m(this,kt).beginPath(),m(this,kt).arc(m(this,Gt)/2,m(this,Ft)/2,m(this,vt).circleRadius,-Math.PI/2,t*Math.PI/180-Math.PI/2),m(this,kt).strokeStyle=m(this,vt).lineColor,m(this,kt).stroke();let e=parseInt(m(this,vt).progress.toString())+"%";m(this,kt).font=m(this,vt).fontSize+"px SimHei";let n=m(this,kt).measureText(e).width,r=m(this,vt).fontSize/2;m(this,kt).fillStyle=m(this,vt).textColor,m(this,kt).fillText(e,m(this,Gt)/2-n/2,m(this,Ft)/2+r/2);}}vt=new WeakMap,kt=new WeakMap,Gt=new WeakMap,Ft=new WeakMap;class Ya{constructor(t,e){O(this,"items",{});t!=null&&this.set(t,e);}has(t){return Reflect.has(this.items,t)}startsWith(t){let e=this.keys();for(const n of e)if(String(n).startsWith(String(t)))return  true;return  false}getStartsWith(t){let e=this.keys(),n;for(const r of e)if(String(r).startsWith(String(t))){n=this.get(r);break}return n}set(t,e){if(t===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为空");Reflect.set(this.items,t,e);}delete(t){return this.has(t)?Reflect.deleteProperty(this.items,t):false}get(t){return Reflect.get(this.items,t)}values(){let t=[];for(let e in this.getItems())this.has(e)&&t.push(this.get(e));return t}clear(){this.items=null,this.items={};}size(){return Object.keys(this.getItems()).length}keys(){return Reflect.ownKeys(this.items)}getItems(){return this.items}concat(t){this.items=at.assign(this.items,t.getItems());}forEach(t){for(const e in this.getItems())t(this.get(e),e,this.getItems());}get length(){return this.size()}get entries(){let t=this;return function*(){let e=Object.keys(t.getItems());for(const n of e)yield [n,t.get(n)];}}get[Symbol.iterator](){let t=this;return function(){return t.entries()}}}class Cr{constructor(t){O(this,"defaultApi",{document,window,globalThis,self,top});O(this,"api");t&&(t.globalThis==null&&(t.globalThis=t.window),t.self==null&&(t.self=t.window)),t||(t=Object.assign({},this.defaultApi)),this.api=Object.assign({},t);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}}const Jt={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(o){return typeof o=="object"&&o!==null},isFunction(o){return typeof o=="function"},isReactive(o){return !!(o&&o[Jt.ReactiveFlags.IS_REACTIVE])},isArray(o){return Array.isArray(o)}};class Ja{constructor(t,e){O(this,"deps",[]);O(this,"active",true);O(this,"fn");O(this,"scheduler");this.fn=t,this.scheduler=e;}run(t){this.active||this.fn();try{return typeof t=="function"&&t(this),this.fn()}finally{typeof t=="function"&&t(void 0);}}}class Za{constructor(t,e){O(this,"_value");O(this,"_isRef",true);O(this,"_rawValue");O(this,"_vue");this._vue=t,this._rawValue=e,this._value=this._vue.toReactive(e);}get value(){return this._value}set value(t){t!==this._rawValue&&(this._value=this._vue.toReactive(t),this._rawValue=t);}}class to{constructor(t,e){O(this,"object");O(this,"key");this.object=t,this.key=e;}get value(){return this.object[this.key]}set value(t){this.object[this.key]=t;}}class eo{constructor(){O(this,"reactMap",new WeakMap);O(this,"targetMap",new WeakMap);O(this,"activeEffect");}reactive(t){const e=this;if(!(typeof t=="object"&&t!==null))return;if(Jt.isReactive(t))return t;let n=this.reactMap.get(t);if(n)return n;const r=new Proxy(t,{get(a,i,s){return i===Jt.ReactiveFlags.IS_REACTIVE?true:(e.track(a,"get",i),Reflect.get(a,i,s))},set(a,i,s,l){let c=a[i],d=Reflect.set(a,i,s,l);return c!==s&&e.trigger(a,"set",i,c,s),d}});return e.reactMap.set(t,r),r}watch(t,e){let n;if(Jt.isReactive(t))n=()=>this.traversal(t);else if(Jt.isFunction(t))n=t;else return;let r;const a=()=>{const s=i.run(l=>{this.activeEffect=l;});e(s,r),r=s;},i=new Ja(n,a);r=i.run(s=>{this.activeEffect=s;});}toReactive(t){return Jt.isObject(t)?this.reactive(t):t}ref(t){return new Za(this,t)}toRef(t,e){return new to(t,e)}toRefs(t){const e=Jt.isArray(t)?new Array(t.length):{};for(let n in t)e[n]=this.toRef(t,n);return e}trigger(t,e,n,r,a){const i=this.targetMap.get(t);if(!i)return;const s=i.get(n);this.triggerEffect(s,"effects");}triggerEffect(t,e){t&&t.forEach(n=>{n.scheduler?n.scheduler():n.run();});}track(t,e,n){if(!this.activeEffect)return;let r=this.targetMap.get(t);r||this.targetMap.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=new Set),this.trackEffect(a);}trackEffect(t){this.activeEffect&&!t.has(this.activeEffect)&&(t.add(this.activeEffect),this.activeEffect.deps.push(t));}traversal(t,e=new Set){if(!Jt.isObject(t)||e.has(t))return t;e.add(t);for(let n in t)this.traversal(t[n],e);return t}}const no=o=>(t,e)=>(o.set(t,e),e),tr=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,kr=536870912,er=kr*2,ro=(o,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<er?n+1:0;if(!e.has(r))return o(e,r);if(e.size<kr){for(;e.has(r);)r=Math.floor(Math.random()*er);return o(e,r)}if(e.size>tr)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*tr);return o(e,r)},Mr=new WeakMap,ao=no(Mr),En=ro(ao,Mr),oo=o=>typeof o.start=="function",nr=new WeakMap,io=o=>({...o,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return nr.set(n,r),n},disconnect:({call:t})=>async e=>{const n=nr.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),gn=new WeakMap,so=o=>{if(gn.has(o))return gn.get(o);const t=new Map;return gn.set(o,t),t},lo=o=>{const t=io(o);return e=>{const n=so(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}}),oo(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((d,f)=>{const p=En(n);n.set(p,{reject:f,resolve:d}),l===null?e.postMessage({id:p,method:s},c):e.postMessage({id:p,method:s,params:l},c);}),a=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:a})};return {...i}}},le=new Map([[0,null]]),ce=new Map([[0,null]]),co=lo({clearInterval:({call:o})=>t=>{typeof le.get(t)=="symbol"&&(le.set(t,null),o("clear",{timerId:t,timerType:"interval"}).then(()=>{le.delete(t);}));},clearTimeout:({call:o})=>t=>{typeof ce.get(t)=="symbol"&&(ce.set(t,null),o("clear",{timerId:t,timerType:"timeout"}).then(()=>{ce.delete(t);}));},setInterval:({call:o})=>(t,e=0,...n)=>{const r=Symbol(),a=En(le);le.set(a,r);const i=()=>o("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=le.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),le.get(a)===r&&i());});return i(),a},setTimeout:({call:o})=>(t,e=0,...n)=>{const r=Symbol(),a=En(ce);return ce.set(a,r),o("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=ce.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(ce.delete(a),t(...n));}),a}}),fo=o=>{const t=new Worker(o);return co(t)},po=(o,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=o(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},uo=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,nn=po(fo,uo),ho=o=>nn().clearInterval(o),bo=o=>nn().clearTimeout(o),go=(...o)=>nn().setInterval(...o),mo=(...o)=>nn().setTimeout(...o);// @license      MIT
	class yo{constructor(t){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(n,r,a)=>{this.modules=a.c,this.constructors=a.m,this.get=a;}]],[[1e3],{[this.moduleID]:(n,r,a)=>{this.modules=a.c,this.constructors=a.m,this.get=a;}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},n=>{const r=n.m;Object.keys(r).forEach(a=>{try{this.modules[a]=n(a);}catch(i){this.log(`[arrayArguments/1] Failed to require(${a}) with error:
${i}
${i.stack}`);}}),this.get=n;}],this.functionArguments[1]],this.modules={},this.constructors=[];let e={target:window,entrypoint:"webpackJsonp",debug:false,strict:false};typeof t=="object"&&(e=Object.assign(Object.assign({},e),t)),this.target=e.target,this.entrypoint=e.entrypoint,this.debug=e.debug,this.strict=e.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent();}log(t){this.debug&&console.warn(`[moduleRaid] ${t}`);}replaceGet(){this.get===null&&(this.get=t=>this.modules[t]);}fillModules(){if(typeof this.target[this.entrypoint]=="function"?this.functionArguments.forEach((t,e)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...t);}catch(n){this.log(`moduleRaid.functionArguments[${e}] failed:
${n}
${n.stack}`);}}):this.arrayArguments.forEach((t,e)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(t);}catch(n){this.log(`Pushing moduleRaid.arrayArguments[${e}] into ${this.entrypoint} failed:
${n}
${n.stack}`);}}),this.modules&&Object.keys(this.modules).length==0){let t=false,e=0;if(typeof this.target[this.entrypoint]!="function"||!this.target[this.entrypoint]([],[],[e]))throw Error("Unknown Webpack structure");for(;!t;)try{this.modules[e]=this.target[this.entrypoint]([],[],[e]),e++;}catch{t=true;}}}setupPushEvent(){const t=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...e)=>{const n=Reflect.apply(t,this.target[this.entrypoint],e);return document.dispatchEvent(new CustomEvent("moduleraid:webpack-push",{detail:e})),n};}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let t=Object.keys(this.target);if(t=t.filter(e=>e.toLowerCase().includes("chunk")||e.toLowerCase().includes("webpack")).filter(e=>typeof this.target[e]=="function"||Array.isArray(this.target[e])),t.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:
${t.join(", ")}`);if(t.length===0)throw Error("No Webpack JSONP entrypoints could be detected");this.log(`Entrypoint has been detected at window.${t[0]} and set for injection`),this.entrypoint=t[0];}searchObject(t,e){for(const n in t){const r=t[n],a=e.toLowerCase();if(typeof r!="object"){if(n.toString().toLowerCase().includes(a))return  true;if(typeof r!="object"){if(r.toString().toLowerCase().includes(a))return  true}else if(this.searchObject(r,e))return  true}}return  false}findModule(t){const e=[],n=Object.keys(this.modules);if(n.length===0)throw new Error("There are no modules to search through!");return n.forEach(r=>{const a=this.modules[r.toString()];if(a!==void 0)try{if(typeof t=="string")switch(t=t.toLowerCase(),typeof a){case "string":a.toLowerCase().includes(t)&&e.push(a);break;case "function":a.toString().toLowerCase().includes(t)&&e.push(a);break;case "object":this.searchObject(a,t)&&e.push(a);break}else if(typeof t=="function")t(a)&&e.push(a);else throw new TypeError(`findModule can only find via string and function, ${typeof t} was passed`)}catch(i){this.log(`There was an error while searching through module '${r}':
${i}
${i.stack}`);}}),e}findConstructor(t){const e=[],n=Object.keys(this.constructors);if(n.length===0)throw new Error("There are no constructors to search through!");return n.forEach(r=>{const a=this.constructors[r];try{typeof t=="string"?(t=t.toLowerCase(),a.toString().toLowerCase().includes(t)&&e.push([this.constructors[r],this.modules[r]])):typeof t=="function"&&t(a)&&e.push([this.constructors[r],this.modules[r]]);}catch(i){this.log(`There was an error while searching through constructor '${r}':
${i}
${i.stack}`);}}),e}}class xo{constructor(t){O(this,"windowApi");this.windowApi=new Cr(t);}selector(t,e){return this.selectorAll(t,e)[0]}selectorAll(t,e){if(e=e||this.windowApi.document,t=t.trim(),t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),Array.from(e.querySelectorAll(t)).filter(r=>{var a;return ((a=r==null?void 0:r.innerHTML)==null?void 0:a.trim())===""});if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];return t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(i=>{var s;return (s=(i==null?void 0:i.textContent)||(i==null?void 0:i.innerText))==null?void 0:s.includes(a)})}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);return t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(e.querySelectorAll(t)).filter(c=>{var d;return !!((d=(c==null?void 0:c.textContent)||(c==null?void 0:c.innerText))!=null&&d.match(l))})}else return Array.from(e.querySelectorAll(t))}matches(t,e){var n;if(e=e.trim(),t==null)return  false;if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),t.matches(e)&&((n=t==null?void 0:t.innerHTML)==null?void 0:n.trim())==="";if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let i=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);return typeof i!="string"&&(i=""),t.matches(e)&&(i==null?void 0:i.includes(a))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let c=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);return typeof c!="string"&&(c=""),t.matches(e)&&!!(c!=null&&c.match(l))}else return t.matches(e)}closest(t,e){var n;if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi)){e=e.replace(/:empty$/gi,"");let r=t==null?void 0:t.closest(e);return r&&((n=r==null?void 0:r.innerHTML)==null?void 0:n.trim())===""?r:null}else if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let i=t==null?void 0:t.closest(e);if(i){let s=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);if(typeof s=="string"&&s.includes(a))return i}return null}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let c=t==null?void 0:t.closest(e);if(c){let d=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);if(typeof d=="string"&&d.match(l))return c}return null}else return t==null?void 0:t.closest(e)}}let me=new xo;class Ln{constructor(t){O(this,"windowApi");O(this,"version","2025.6.7");O(this,"assign",at.assign.bind(at));O(this,"ajaxHooker",(t=false)=>t?Ga():za());O(this,"ColorConversion",Ba);O(this,"deepClone",at.deepClone.bind(at));O(this,"Dictionary",Ya);O(this,"GBKEncoder",Na);O(this,"GM_Cookie",Va);O(this,"GM_Menu",Fa);O(this,"Hooks",ja);O(this,"Httpx",qa);O(this,"indexedDB",Wa);O(this,"isDOM",at.isDOM.bind(at));O(this,"isNotNull",at.isNotNull.bind(at));O(this,"isNull",at.isNull.bind(at));O(this,"LockFunction",Ka);O(this,"Log",Xa);O(this,"Progress",Qa);O(this,"toJSON",at.toJSON.bind(at));O(this,"tryCatch",Ye);O(this,"coverObjectFunctionThis",at.coverObjectFunctionThis.bind(at));O(this,"generateUUID",Tn);O(this,"Vue",eo);O(this,"ModuleRaid",yo);this.windowApi=new Cr(t);}addStyle(t){if(typeof t!="string")throw new Error("Utils.addStyle 参数cssText 必须为String类型");let e=this.windowApi.document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,this.windowApi.document.head?this.windowApi.document.head.appendChild(e):this.windowApi.document.body?this.windowApi.document.body.appendChild(e):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(e):this.windowApi.document.documentElement.insertBefore(e,this.windowApi.document.documentElement.childNodes[0]),e}async asyncReplaceAll(t,e,n){let r=this;if(typeof t!="string")throw new TypeError("string必须是字符串");if(typeof n!="function")throw new TypeError("asyncFn必须是函数");let a;if(typeof e=="string")a=new RegExp(r.parseStringToRegExpString(e),"g");else if(e instanceof RegExp){if(!e.global)throw new TypeError("pattern必须是全局匹配");a=new RegExp(e);}else throw new TypeError("pattern必须是正则对象");let i=[],s,l=0;for(;(s=a.exec(t))!==null;){const c=n(s[0]),d=t.slice(l,s.index);l=s.index+s[0].length,i.push(c),i.push(d);}return i.push(t.slice(l)),i=await Promise.all(i),i.join("")}canvasClickByPosition(t,e=0,n=0,r=globalThis){if(!(t instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");e=parseInt(e.toString()),n=parseInt(n.toString());const a={cancelBubble:true,cancelable:true,clientX:e,clientY:n,view:r,detail:1};t.dispatchEvent(new MouseEvent("mousedown",a)),t.dispatchEvent(new MouseEvent("mouseup",a));}checkUserClickInNode(t){var p;let e=this;if(!e.isDOM(t))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");let n=e.windowApi.window.event,r=e.windowApi.window.event,a=(p=n==null?void 0:n.composedPath())==null?void 0:p[0],i=(n==null?void 0:n.clientX)!=null?n.clientX:r.touches[0].clientX,s=(n==null?void 0:n.clientY)!=null?n.clientY:r.touches[0].clientY,{left:l,right:c,top:d,bottom:f}=t.getBoundingClientRect();return i>=l&&i<=c&&s>=d&&s<=f?true:!!(a&&t.contains(a)||a==t)}cloneFormData(t,e){let n=new FormData;for(let[r,a]of t.entries()){let i=typeof e=="function"?e(r,a):false;typeof i=="boolean"&&i||n.append(r,a);}return n}createOverload(){let t=new Map;function e(...n){let r=n.map(i=>typeof i).join(","),a=t.get(r);if(!a)throw new TypeError("没有找到对应的实现");return a.apply(this,n)}return e.addImpl=function(...n){let r=n.pop();if(typeof r!="function")throw new TypeError("最后一个参数必须是函数");let a=n.join(",");t.set(a,r);},e}debounce(t,e=0){let n=null,r=this;return function(...a){r.workerClearTimeout(n),n=r.workerSetTimeout(function(){t.apply(r,a);},e);}}deleteParentNode(t,e){let n=this;if(t==null)return;if(!n.isDOM(t))throw new Error("Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof e!="string")throw new Error("Utils.deleteParentNode 参数 targetSelector 必须为 string 类型");let r=false,a=me.closest(t,e);return a&&(a.remove(),r=true),r}dispatchEvent(t,e,n){let r=[];typeof e=="string"&&(r=[e]),Array.isArray(e)&&(r=[...e]),r.forEach(a=>{let i=new Event(a);n&&Object.assign(i,n),t.dispatchEvent(i);});}downloadBase64(t,e,n=false){let r=this;if(typeof t!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof e!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(n){const a=this.windowApi.document.createElement("iframe");a.style.display="none",a.src=t,this.windowApi.document.body.appendChild(a),r.workerSetTimeout(()=>{a.contentWindow.document.execCommand("SaveAs",true,e),this.windowApi.document.body.removeChild(a);},100);}else {const a=this.windowApi.document.createElement("a");a.setAttribute("target","_blank"),a.download=e,a.href=t,a.click();}}findWebPageVisibleText(t="",e=false){let n=null,r;if(this.windowApi.globalThis.find){let a=this.windowApi.self.find;if(r=a(t,e,true,true,false),r&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(r=a(t,e,true,true,false)),!r)for(r=a(t,0,1);a(t,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)n!=null&&(n=n,n.collapse(false),r=n.findText(t),r&&n.select()),(n==null||r==0)&&(n=this.windowApi.self.document.body.createTextRange(),r=n.findText(t),r&&n.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!r}*findElementsWithText(t,e,n){let r=this;if(t.outerHTML.includes(e))if(t.children.length===0)(typeof n=="function"?n(t):false)||(yield t);else {let a=Array.from(t.childNodes).filter(i=>i.nodeType===Node.TEXT_NODE);for(let i of a)i.textContent.includes(e)&&(typeof n=="function"&&n(t)||(yield i));}for(let a=0;a<t.children.length;a++){let i=t.children[a];yield*r.findElementsWithText(i,e,n);}}findVisibleElement(t){let e=t;for(;e;){if(e.getBoundingClientRect().length)return e;e=e.parentElement;}return null}formatByteToSize(t,e=true){if(t=parseInt(t.toString()),isNaN(t))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB",a={};a.B=1,a.KB=1024,a.MB=a.KB*a.KB,a.GB=a.MB*a.KB,a.TB=a.GB*a.KB,a.PB=a.TB*a.KB,a.EB=a.PB*a.KB,a.ZB=a.EB*a.KB,a.YB=a.ZB*a.KB,a.BB=a.YB*a.KB,a.NB=a.BB*a.KB,a.DB=a.NB*a.KB;for(let i in a)if(n=t/a[i],r=i,a.KB>=n)break;return n=n.toFixed(2),n=e?n+r.toString():parseFloat(n.toString()),n}getNodeListValue(...t){let e=[];for(let n of t){let r=n;if(typeof n=="function"&&(r=n()),r.length!==0){e=[...r];break}}return e}getNonNullValue(...t){let e=t[t.length-1],n=this;for(const r of t)if(n.isNotNull(r)){e=r;break}return e}formatTime(t=new Date,e="yyyy-MM-dd HH:mm:ss"){let n=t==null?new Date:new Date(t);function r(s){return s<10?"0"+s:s}function a(s){return s>12?s-12:s}let i={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(a(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(i).forEach(function(s){let l=new RegExp(s,"g");e=e.replace(l,i[s]);}),e}formatToTimeStamp(t){if(typeof t!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(t.length===8){let n=new Date;t=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+t;}return t=t.substring(0,19),t=t.replace(/-/g,"/"),new Date(t).getTime()}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getArrayLastValue(t){return t[t.length-1]}getArrayRealValue(...t){let e=null;for(let n of t)if(typeof n=="function"&&(n=n()),n!=null){e=n;break}return e}getDaysDifference(t=Date.now(),e=Date.now(),n="天"){n=n.trim(),t.toString().length===10&&(t=t*1e3),e.toString().length===10&&(e=e*1e3);let r=t>e?e:t,a=t>e?t:e,i=1e3,s=60*i,l=60*s,c=24*l,d=30*c,f=12*d,p=new Date(a),g=new Date(r),v=1;n==="年"?v=f:n==="月"?v=d:n==="天"?v=c:n==="时"?v=l:n==="分"?v=s:n==="秒"&&(v=i);let h=Math.round(Math.abs((p-g)/v));if(n==="auto"){let b=a-r;if(h=Math.floor(b/(24*3600*1e3)),h>0)h=h+"天";else {let A=b%864e5,T=Math.floor(A/(3600*1e3));if(T>0)h=T+"小时";else {let E=A%36e5,M=Math.floor(E/(60*1e3));if(M>0)h=M+"分钟";else {let L=E%6e4;h=Math.round(L/1e3)+"秒";}}}}return h}getElementSelector(t){let e=this;if(!t||!t.parentElement)return;if(t.id)return "#"+t.id;let n=e.getElementSelector(t.parentElement);if(!n)return t.tagName.toLowerCase();if(t.parentElement.querySelectorAll(t.tagName).length>1){let r=Array.prototype.indexOf.call(t.parentElement.children,t)+1;n+=" > "+t.tagName.toLowerCase()+":nth-child("+r+")";}else n+=" > "+t.tagName.toLowerCase();return n}getMaxValue(...t){let e=[...t],n=[];if(e.length!==0)if(e.length>1){if(e.length===2&&typeof e[0]=="object"&&typeof e[1]=="function"){let r=e[0],a=e[1];Object.keys(r).forEach(i=>{n=[...n,a(i,r[i])];});}else e.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.max(...n)}else return e[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.max(...n)}getMaxZIndexNodeInfo(t=1,e=this.windowApi.document,n){t=Number.isNaN(t)?1:t;const r=this,a=2*Math.pow(10,9);let i=0,s=null;function l(d){return d.position!=="static"&&d.display!=="none"}function c(d){if(typeof n=="function"){let p=n(d);if(typeof p=="boolean"&&!p)return}const f=r.windowApi.window.getComputedStyle(d);if(l(f)){let p=parseInt(f.zIndex);isNaN(p)||p>i&&(i=p,s=d),d.shadowRoot!=null&&d instanceof ShadowRoot&&d.shadowRoot.querySelectorAll("*").forEach(g=>{c(g);});}}return e.querySelectorAll("*").forEach((d,f)=>{c(d);}),i+=t,i>=a&&(i=a),{node:s,zIndex:i}}getMaxZIndex(t=1,e=this.windowApi.document,n){return this.getMaxZIndexNodeInfo(t,e,n).zIndex}getMinValue(...t){let e=[...t],n=[];if(e.length!==0)if(e.length>1){if(e.length===2&&typeof e[0]=="object"&&typeof e[1]=="function"){let r=e[0],a=e[1];Object.keys(r).forEach(i=>{n=[...n,a(i,r[i])];});}else e.forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);});return Math.min(...n)}else return e[0].forEach(r=>{isNaN(parseFloat(r))||(n=[...n,parseFloat(r)]);}),Math.min(...n)}getRandomAndroidUA(){let t=this,e=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],n=t.getRandomValue(12,14),r=t.getRandomValue(e),a=t.getRandomValue(120,132),i=t.getRandomValue(0,0),s=t.getRandomValue(2272,6099),l=t.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${n}; ${r}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${a}.${i}.${s}.${l} Mobile Safari/537.36`}getRandomPCUA(){let t=this,e=t.getRandomValue(120,132),n=t.getRandomValue(0,0),r=t.getRandomValue(2272,6099),a=t.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${e}.${n}.${r}.${a} Safari/537.36`}getRandomValue(...t){let e=[...t];if(e.length>1)if(e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"){let n=e[0]>e[1]?e[1]:e[0],r=e[0]>e[1]?e[0]:e[1];return Math.round(Math.random()*(r-n))+n}else return e[Math.floor(Math.random()*e.length)];else if(e.length===1){let n=e[0];if(Array.isArray(n))return n[Math.floor(Math.random()*n.length)];if(typeof n=="object"&&Object.keys(n).length>0){let r=Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)];return n[r]}else return n}}getReactObj(t){let e={};return Object.keys(t).forEach(n=>{if(n.startsWith("__react")){let r=n.replace(/__(.+)\$.+/i,"$1");r in e||(e[r]=t[n]);}}),e}getSymbol(t,e){if(typeof t!="object")throw new TypeError("target不是一个对象");let n=Object.getOwnPropertySymbols(t);if(typeof e=="string"){let r=n.find(a=>a.toString()===e);if(r)return t[r]}else if(typeof e=="symbol"){let r=n.find(a=>a===e);if(r)return t[r]}else {let r={};return n.forEach(a=>{r[a]=t[a];}),r}}getTextLength(t){return new TextEncoder().encode(t).length}getTextStorageSize(t,e=true){let n=this;return n.formatByteToSize(n.getTextLength(t),e)}getThunderUrl(t){if(t==null)throw new TypeError("url不能为空");if(typeof t!="string")throw new TypeError("url必须是string类型");if(t.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa("AA"+t+"ZZ")}`}isNativeFunc(t){return !!t.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...t){let e=50,n=()=>{let i=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,s=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,l=this.windowApi.document.documentElement.scrollHeight-e;return i+s>=l},r=i=>{let s=i.scrollTop,l=i.clientHeight,c=i.scrollHeight-l-e;return s>=c},a=t[0];if(t.length===0||typeof t[0]=="number")return n();if(typeof t[0]=="object"&&t[0]instanceof HTMLElement)return typeof t[1]=="number"&&!Number.isNaN(t[1])&&(e=t[1]),r(t[0]);throw new TypeError("参数1类型错误"+typeof a)}isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(t){let e=false;if(typeof jQuery=="object"&&t instanceof jQuery&&(e=true),t==null)return  false;if(typeof t=="object"){let n=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const r of n)if(r in t)e=true;else {e=false;break}}return e}isPhone(t=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(t)}isSameChars(t,e=1){if(typeof t!="string")throw new TypeError("参数 str 必须是 string 类型");if(t.length<2)return  false;t=t.toLowerCase();const n={};let r=0;for(const i of t)Reflect.has(n,i)?n[i]++:n[i]=1,r++;let a=false;for(const i in n)if(n[i]/r>=e){a=true;break}return a}isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(t,e=false){let n=[];t instanceof Array||t instanceof NodeList?(t=t,n=[...t]):n=[t];let r=true;for(const a of n){if(this.windowApi.window.getComputedStyle(a).display==="none")r=false;else {let s=a.getBoundingClientRect();if(e){let l=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,c=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;r=!(s.right<0||s.left>l||s.bottom<0||s.top>c);}else r=!!a.getClientRects().length;}if(!r)break}return r}isWebView_Via(){let t=true,e=this;if(typeof this.windowApi.top.window.via=="object"){for(const n in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,n)){let r=this.windowApi.top.window.via[n];if(typeof r=="function"&&e.isNativeFunc(r))t=true;else {t=false;break}}}else t=false;return t}isWebView_X(){let t=true,e=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const n in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,n)){let r=this.windowApi.top.window.mbrowser[n];if(typeof r=="function"&&e.isNativeFunc(r))t=true;else {t=false;break}}}else t=false;return t}parseObjectToArray(t){if(typeof t!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let e=[];return Object.keys(t).forEach(function(n){e=e.concat(t[n]);}),e}mergeArrayToString(t,e){if(!(t instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let n="";return typeof e=="function"?t.forEach(r=>{n+=e(r);}):typeof e=="string"?t.forEach(r=>{n+=r[e];}):t.forEach(r=>{Object.values(r).filter(a=>typeof a=="string").forEach(a=>{n+=a;});}),n}mutationObserver(t,e){let n=this,r={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};e=n.assign(r,e);let a=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,i=new a(function(s,l){typeof e.callback=="function"&&e.callback(s,l);});return Array.isArray(t)||t instanceof NodeList?t.forEach(s=>{i.observe(s,e.config);}):n.isJQuery(t)?t.each((s,l)=>{i.observe(l,e.config);}):i.observe(t,e.config),e.immediate&&typeof e.callback=="function"&&e.callback([],i),i}mutationVisible(t,e,n){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(t==null)throw new TypeError("mutatuinVisible target is null");let r={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};r=this.assign(r,n||{});let a=new IntersectionObserver((i,s)=>{i[0].isIntersecting&&typeof e=="function"&&e(i,s);},r);Array.isArray(t)?t.forEach(i=>{a.observe(i);}):a.observe(t);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=oe,oe}noConflictFunc(t,e,n=[],r=true){let a=this;if(typeof t!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof e!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(n))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");let i="__"+e;function s(){typeof a.windowApi.window[i]<"u"||(a.windowApi.window[i]=a.deepClone(t),Object.values(t).forEach(f=>{typeof f=="function"&&(t[f.name]=()=>{});}));}function l(){Array.from(n).forEach(f=>{Object.values(t).forEach(p=>{typeof p=="function"&&(typeof a.windowApi.window[i]>"u"&&(a.windowApi.window[i]={}),f===p.name&&(a.windowApi.window[i][p.name]=t[p.name],t[p.name]=()=>{}));});});}function c(){typeof a.windowApi.window[i]>"u"||(Object.assign(t,a.windowApi.window[i]),Reflect.deleteProperty(a.windowApi.window,"needReleaseKey"));}function d(){typeof a.windowApi.window[i]>"u"||Array.from(n).forEach(f=>{a.windowApi.window[i][f]&&(t[f]=a.windowApi.window[i][f],Reflect.deleteProperty(a.windowApi.window[i],f),Object.keys(a.windowApi.window[i]).length===0&&Reflect.deleteProperty(window,i));});}r?n.length===0?s():l():n.length===0?c():d();}parseBase64ToBlob(t){if(typeof t!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");let e=t.split(","),n=e[0].match(/:(.*?);/)[1],r=atob(e[1]),a=r.length,i=new Uint8Array(a);for(;a--;)i[a]=r.charCodeAt(a);return new Blob([i],{type:n})}parseBase64ToFile(t,e="example"){if(typeof t!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof e!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");let n=t.split(","),r=n[0].match(/:(.*?);/)[1],a=atob(n[1]),i=a.length,s=new Uint8Array(i);for(;i--;)s[i]=a.charCodeAt(i);return new File([s],e,{type:r})}parseInt(t=[],e=0){if(t==null)return parseInt(e.toString());let n=parseInt(t[t.length-1]);return isNaN(n)&&(n=parseInt(e.toString())),n}async parseBlobToFile(t,e="example"){return new Promise((n,r)=>{fetch(t).then(a=>a.blob()).then(a=>{const i=new File([a],e,{type:a.type});n(i);}).catch(a=>{console.error("Error:",a),r(a);});})}parseCDATA(t=""){let e="",r=/<\!\[CDATA\[([\s\S]*)\]\]>/.exec(t.trim());return r&&r.length>1&&(e=r[r.length-1]),e}async parseFileToBase64(t){let e=new FileReader;return e.readAsDataURL(t),new Promise(n=>{e.onload=function(r){n(r.target.result);};})}parseFromString(t,e="text/html"){return new DOMParser().parseFromString(t,e)}parseStringToRegExpString(t){if(typeof t!="string")throw new TypeError("string必须是字符串");return t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}preventEvent(t,e=[],n){function r(a){return a==null||a.preventDefault(),a==null||a.stopPropagation(),a==null||a.stopImmediatePropagation(),false}if(arguments.length===1)return r(arguments[0]);typeof e=="string"&&(e=[e]),e.forEach(a=>{t.addEventListener(a,r,{capture:!!n});});}registerTrustClickEvent(t=true,e){function n(a){return new Proxy(a,{get:function(i,s){return s==="isTrusted"?t:Reflect.get(i,s)}})}e==null&&(e=function(a){return a==="click"});const r=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...a){let i=a[0],s=a[1];if(a[2],e(i)){if(typeof s=="function")a[1]=function(l){s.call(this,n(l));};else if(typeof s=="object"&&"handleEvent"in s){let l=s.handleEvent;a[1].handleEvent=function(c){if(c!=null)try{c instanceof Proxy,l.call(this,n(c));}catch{c.isTrusted=t;}};}}return r.apply(this,a)};}reverseNumber(t){let e=0,n=false;for(t<0&&(n=true,t=Math.abs(t));t>0;)e=e*10+t%10,t=Math.floor(t/10);return n?-e:e}selectElementText(t,e,n,r){let a=this.windowApi.document.createRange();if(a.selectNodeContents(t),e){if(e.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");n!=null&&r!=null&&(a.setStart(e,n),a.setEnd(e,r));}let i=this.windowApi.globalThis.getSelection();i&&(i.removeAllRanges(),i.addRange(a));}setClip(t,e={type:"text",mimetype:"text/plain"}){var i,s,l;typeof t=="object"?t instanceof Element?t=t.outerHTML:t=JSON.stringify(t):typeof t!="string"&&(t=t.toString());let n=typeof e=="object"?e.type:e;n.includes("html")?n="text/html":n="text/plain";let r=this;class a{constructor(d,f,p){ft(this,i);ft(this,s);ft(this,l);pt(this,i,d),pt(this,s,f),pt(this,l,p);}async init(){let d=false;if(await this.requestClipboardPermission(),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{d=await this.copyDataByClipboard();}catch(f){console.error("复制失败，使用第二种方式，error👉",f),d=this.copyTextByTextArea();}else d=this.copyTextByTextArea();m(this,i).call(this,d),this.destroy();}destroy(){pt(this,i,null),pt(this,s,null),pt(this,l,null);}isText(){return m(this,l).includes("text")}hasClipboard(){return (navigator==null?void 0:navigator.clipboard)!=null}hasClipboardWrite(){var d;return ((d=navigator==null?void 0:navigator.clipboard)==null?void 0:d.write)!=null}hasClipboardWriteText(){var d;return ((d=navigator==null?void 0:navigator.clipboard)==null?void 0:d.writeText)!=null}copyTextByTextArea(){try{let d=r.windowApi.document.createElement("textarea");return d.value=m(this,s),d.setAttribute("type","text"),d.setAttribute("style","opacity:0;position:absolute;"),d.setAttribute("readonly","readonly"),r.windowApi.document.body.appendChild(d),d.select(),r.windowApi.document.execCommand("copy"),r.windowApi.document.body.removeChild(d),!0}catch(d){return console.error("复制失败，error👉",d),false}}requestClipboardPermission(){return new Promise((d,f)=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(p=>{d(true);}).catch(p=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",p.message??p.name??p.stack]),d(false);}):d(false);})}copyDataByClipboard(){return new Promise((d,f)=>{if(this.isText())navigator.clipboard.writeText(m(this,s)).then(()=>{d(true);}).catch(p=>{f(p);});else {let p=new Blob([m(this,s)],{type:m(this,l)});navigator.clipboard.write([new ClipboardItem({[m(this,l)]:p})]).then(()=>{d(true);}).catch(g=>{f(g);});}})}}return i=new WeakMap,s=new WeakMap,l=new WeakMap,new Promise(c=>{const d=new a(c,t,n);r.windowApi.document.hasFocus()?d.init():r.windowApi.window.addEventListener("focus",()=>{d.init();},{once:true});})}setTimeout(t,e=0){let n=this;if(typeof t!="function"&&typeof t!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof e!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(r=>{n.workerSetTimeout(()=>{r(n.tryCatch().run(t));},e);})}sleep(t=0){let e=this;if(typeof t!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(n=>{e.workerSetTimeout(()=>{n(void 0);},t);})}dragSlider(t,e=this.windowApi.window.innerWidth){let n=this;function r(f,p,g){let v=typeof unsafeWindow>"u"?globalThis:unsafeWindow,h=n.windowApi.document.createEvent("MouseEvents");return h.initMouseEvent(f,true,true,v,0,p,g,p,g,false,false,false,false,0,null),h}let a=typeof t=="string"?me.selector(t):t;if(!(a instanceof Node)||!(a instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");let i=a.getBoundingClientRect(),s=i.x||i.left,l=i.y||i.top,c=s+e,d=l;a.dispatchEvent(r("mousedown",s,l)),a.dispatchEvent(r("mousemove",c,d)),a.dispatchEvent(r("mouseleave",c,d)),a.dispatchEvent(r("mouseout",c,d));}enterFullScreen(t=this.windowApi.document.documentElement,e){try{if(t.requestFullscreen)t.requestFullscreen(e);else if(t.webkitRequestFullScreen)t.webkitRequestFullScreen();else if(t.mozRequestFullScreen)t.mozRequestFullScreen();else if(t.msRequestFullscreen)t.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(n){console.error(n);}}exitFullScreen(t=this.windowApi.document.documentElement){return this.windowApi.document.exitFullscreen?this.windowApi.document.exitFullscreen():this.windowApi.document.msExitFullscreen?this.windowApi.document.msExitFullscreen():this.windowApi.document.mozCancelFullScreen?this.windowApi.document.mozCancelFullScreen():this.windowApi.document.webkitCancelFullScreen?this.windowApi.document.webkitCancelFullScreen():new Promise((e,n)=>{n(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(t,e,n=true){let r=this;if(typeof e!="function"&&typeof e!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof n!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");let a=function(d){return typeof e=="string"?d[e]:e(d)},i=function(d,f){let p=a(f),g=a(d);return n?g>p?-1:g<p?1:0:g<p?-1:g>p?1:0},s=function(d,f){let p=d.length;for(let g=0;g<p-1;g++)for(let v=0;v<p-1-g;v++){let h=d[v],b=d[v+1],A=a(h),T=a(b);if(n==true&&A<T||n==false&&A>T){let E=h.nextElementSibling;b.after(h),E==null?E.parentNode.appendChild(b):E.before(b),d=f();}}},l=t,c=null;if(t instanceof Function&&(c=t,t=t()),Array.isArray(t))t.sort(i);else if(t instanceof NodeList||r.isJQuery(t))s(t,c),l=c();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return l}stringToRegular(t,e="ig"){let n;if(e=e.toLowerCase(),typeof t=="string")n=new RegExp(t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e);else if(t instanceof RegExp)n=t;else throw new Error("Utils.stringToRegular 参数targetString必须是string|Regexp类型");return n}stringTitleToUpperCase(t,e=false){let n=t.slice(0,1).toUpperCase();return e?n=n+t.slice(1).toLowerCase():n=n+t.slice(1),n}startsWith(t,e,n=0){let r=this;if(n>t.length)return  false;n!==0&&(t=t.slice(n,t.length));let a=e;if(typeof e=="string")a=new RegExp(`^${e}`);else if(Array.isArray(e)){let i=false;for(const s of e)if(!r.startsWith(t,s,n)){i=true;break}return i}return !!t.match(a)}stringTitleToLowerCase(t,e=false){let n=t.slice(0,1).toLowerCase();return e?n=n+t.slice(1).toUpperCase():n=n+t.slice(1),n}toSearchParamsStr(t,e){let n=this,r="";return Array.isArray(t)?t.forEach(a=>{r===""?r+=n.toSearchParamsStr(a):r+="&"+n.toSearchParamsStr(a);}):r=new URLSearchParams(Object.entries(t)).toString(),e&&!r.startsWith("?")&&(r="?"+r),r}searchParamStrToObj(t){return typeof t!="string"?{}:Object.fromEntries(new URLSearchParams(t))}uniqueArray(t=[],e,n=(r,a)=>r===a){if(typeof e=="function"){const r=e,a=new Set,i=[];for(const s of t){const l=r(s);a.has(l)||(a.add(l),i.push(s));}return i}else return Array.from(t).filter(r=>!Array.from(e).some(function(a){return n(r,a)}))}waitArrayLoopToEnd(t,e){let n=this;if(typeof e!="function"&&typeof e!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(t).map(async(r,a)=>{await n.tryCatch(a,r).run(e);}))}wait(t,e,n){const r=this;let a=typeof e=="number"?e:0;return new Promise(i=>{let s=r.mutationObserver(n||r.windowApi.document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(l,c){let d=t();d.success&&(typeof(c==null?void 0:c.disconnect)=="function"&&c.disconnect(),i(d.data));}});a>0&&r.workerSetTimeout(()=>{typeof(s==null?void 0:s.disconnect)=="function"&&s.disconnect(),i(null);},a);})}waitNode(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,a=0;if(typeof t[0]!="string"&&!Array.isArray(t[0])&&typeof t[0]!="function")throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");function i(){if(Array.isArray(n)){let s=[];for(let l=0;l<n.length;l++){let c=me.selector(n[l]);c&&s.push(c);}if(s.length===n.length)return s}else return typeof n=="function"?n():me.selector(n,r)}return e.wait(()=>{let s=i();return s?{success:true,data:s}:{success:false,data:s}},a,r)}waitAnyNode(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,a=0;if(typeof t[0]!="object"&&!Array.isArray(t[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");let i=n.map(s=>e.waitNode(s,r,a));return Promise.any(i)}waitNodeList(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,a=0;if(typeof t[0]!="string"&&!Array.isArray(t[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");function i(){if(Array.isArray(n)){let s=[];for(let l=0;l<n.length;l++){let c=me.selectorAll(n[l],r);c.length&&s.push(c);}if(s.length===n.length)return s}else {let s=me.selectorAll(n,r);if(s.length)return s}}return e.wait(()=>{let s=i();return s?{success:true,data:s}:{success:false,data:s}},a,r)}waitAnyNodeList(...t){t=t.filter(s=>s!==void 0);let e=this,n=t[0],r=e.windowApi.document,a=0;if(!Array.isArray(t[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(t.length!==1)if(t.length===2){let s=t[1];if(typeof s=="number")a=s;else if(typeof s=="object"&&s instanceof Node)r=s;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(t.length===3){let s=t[1],l=t[2];if(typeof s=="object"&&s instanceof Node)if(r=s,typeof l=="number")a=l;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");let i=n.map(s=>e.waitNodeList(s,r,a));return Promise.any(i)}waitProperty(t,e){return new Promise(n=>{let r=t;typeof t=="function"&&(r=t()),Reflect.has(r,e)?n(r[e]):Object.defineProperty(r,e,{set:function(a){try{n(a);}catch(i){console.error("Error setting property:",i);}}});})}waitPropertyByInterval(t,e,n=250,r=-1){let a=this;if(t==null)throw new TypeError("checkObj 不能为空对象 ");let i=false;return new Promise((s,l)=>{let c=a.workerSetInterval(()=>{let d=t;typeof t=="function"&&(d=t()),typeof d=="object"&&d!=null&&(typeof e=="function"&&e(d)||Reflect.has(d,e))&&(i=true,a.workerClearInterval(c),s(d[e]));},n);r!==-1&&a.workerSetTimeout(()=>{i||(a.workerClearInterval(c),l());},r);})}async waitVueByInterval(t,e,n=250,r=-1,a="__vue__"){if(t==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let i=false,s=this;try{await s.waitPropertyByInterval(t,function(l){if(l==null||!(a in l))return !1;if(e==null)return !0;let c=l[a];if(typeof e=="string"){if(e in c)return i=!0,!0}else if(e(c))return i=!0,!0;return !1},n,r);}catch{return i}return i}watchObject(t,e,n,r){typeof n!="function"&&typeof r!="function"||(typeof n=="function"?Object.defineProperty(t,e,{get(){return typeof n=="function"?n(t[e]):t[e]}}):typeof r=="function"?Object.defineProperty(t,e,{set(a){typeof r=="function"&&r(a);}}):Object.defineProperty(t,e,{get(){return typeof n=="function"?n(t[e]):t[e]},set(a){typeof r=="function"&&r(a);}}));}queryProperty(t,e){if(t==null)return;let n=e(t);return n&&typeof n.isFind=="boolean"&&n.isFind?n.data:this.queryProperty(n.data,e)}createUtils(t){return new Ln(t)}toFormData(t,e=false,n=false){const r=new FormData;return Object.keys(t).forEach(a=>{let i=t[a];n&&(i=JSON.stringify(i)),typeof i=="number"&&(i=i.toString()),e&&typeof i=="string"&&(i=encodeURIComponent(i)),i instanceof File?r.append(a,i,i.name):r.append(a,i);}),r}toUrl(t){if(typeof t!="string")throw new TypeError("toUrl: text must be string");if(t=t.trim(),t==="")throw new TypeError("toUrl: text must not be empty");return t.startsWith("//")?t=this.windowApi.globalThis.location.protocol+t:t.startsWith("/")&&(t=this.windowApi.globalThis.location.origin+t),new URL(t)}workerSetTimeout(t,e=0){try{return mo(t,e)}catch{return globalThis.setTimeout(t,e)}}workerClearTimeout(t){try{t!=null&&bo(t);}catch{}finally{globalThis.clearTimeout(t);}}workerSetInterval(t,e=0){try{return go(t,e)}catch{return globalThis.setInterval(t,e)}}workerClearInterval(t){try{t!=null&&ho(t);}catch{}finally{globalThis.clearInterval(t);}}async getClipboardInfo(){return new Promise(t=>{function e(){navigator.clipboard.readText().then(a=>{t({error:null,content:a});}).catch(a=>{t({error:a,content:""});});}function n(){navigator.permissions.query({name:"clipboard-read"}).then(a=>{e();}).catch(a=>{e();});}function r(){var a,i;return !(typeof((a=navigator==null?void 0:navigator.clipboard)==null?void 0:a.readText)!="function"||typeof((i=navigator==null?void 0:navigator.permissions)==null?void 0:i.query)!="function")}if(!r()){t({error:new Error("当前环境不支持读取剪贴板Api"),content:""});return}document.hasFocus()?n():window.addEventListener("focus",()=>{n();},{once:true});})}}let oe=new Ln;const _e=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),qe={document,window,globalThis,self},F={get document(){return qe.document},get window(){return qe.window},get globalThis(){return qe.globalThis},get self(){return qe.self}},Lr={Object:{defineProperty:Object.defineProperty}},wo=o=>(t,e)=>(o.set(t,e),e),rr=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,$r=536870912,ar=$r*2,vo=(o,t)=>e=>{const n=t.get(e);let r=n===void 0?e.size:n<ar?n+1:0;if(!e.has(r))return o(e,r);if(e.size<$r){for(;e.has(r);)r=Math.floor(Math.random()*ar);return o(e,r)}if(e.size>rr)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(r);)r=Math.floor(Math.random()*rr);return o(e,r)},Ir=new WeakMap,Ao=wo(Ir),Sn=vo(Ao,Ir),To=o=>typeof o.start=="function",or=new WeakMap,Eo=o=>({...o,connect:({call:t})=>async()=>{const{port1:e,port2:n}=new MessageChannel,r=await t("connect",{port:e},[e]);return or.set(n,r),n},disconnect:({call:t})=>async e=>{const n=or.get(e);if(n===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:n});},isSupported:({call:t})=>()=>t("isSupported")}),mn=new WeakMap,So=o=>{if(mn.has(o))return mn.get(o);const t=new Map;return mn.set(o,t),t},Co=o=>{const t=Eo(o);return e=>{const n=So(e);e.addEventListener("message",({data:s})=>{const{id:l}=s;if(l!==null&&n.has(l)){const{reject:c,resolve:d}=n.get(l);n.delete(l),s.error===void 0?d(s.result):c(new Error(s.error.message));}}),To(e)&&e.start();const r=(s,l=null,c=[])=>new Promise((d,f)=>{const p=Sn(n);n.set(p,{reject:f,resolve:d}),l===null?e.postMessage({id:p,method:s},c):e.postMessage({id:p,method:s,params:l},c);}),a=(s,l,c=[])=>{e.postMessage({id:null,method:s,params:l},c);};let i={};for(const[s,l]of Object.entries(t))i={...i,[s]:l({call:r,notify:a})};return {...i}}},de=new Map([[0,null]]),fe=new Map([[0,null]]),ko=Co({clearInterval:({call:o})=>t=>{typeof de.get(t)=="symbol"&&(de.set(t,null),o("clear",{timerId:t,timerType:"interval"}).then(()=>{de.delete(t);}));},clearTimeout:({call:o})=>t=>{typeof fe.get(t)=="symbol"&&(fe.set(t,null),o("clear",{timerId:t,timerType:"timeout"}).then(()=>{fe.delete(t);}));},setInterval:({call:o})=>(t,e=0,...n)=>{const r=Symbol(),a=Sn(de);de.set(a,r);const i=()=>o("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"interval"}).then(()=>{const s=de.get(a);if(s===void 0)throw new Error("The timer is in an undefined state.");s===r&&(t(...n),de.get(a)===r&&i());});return i(),a},setTimeout:({call:o})=>(t,e=0,...n)=>{const r=Symbol(),a=Sn(fe);return fe.set(a,r),o("set",{delay:e,now:performance.timeOrigin+performance.now(),timerId:a,timerType:"timeout"}).then(()=>{const i=fe.get(a);if(i===void 0)throw new Error("The timer is in an undefined state.");i===r&&(fe.delete(a),t(...n));}),a}}),Mo=o=>{const t=new Worker(o);return ko(t)},Lo=(o,t)=>{let e=null;return ()=>{if(e!==null)return e;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return e=o(r),setTimeout(()=>URL.revokeObjectURL(r)),e}},$o=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,rn=Lo(Mo,$o),Io=o=>rn().clearInterval(o),_o=o=>rn().clearTimeout(o),Oo=(...o)=>rn().setInterval(...o),Ro=(...o)=>rn().setTimeout(...o);let Do=class{constructor(){this.__map={};}beforeEach(t){this.__interceptor=t;}on(t,e){const n=Array.isArray(t)?t:[t];for(const r of n){this.__map[r]=this.__map[r]||[];const a=this.__map[r];a&&a.push(e);}return this}emit(t,e,n){this.__interceptor!==void 0?this.__interceptor(t,()=>{this.__emit(t,e),n&&n();}):(this.__emit(t,e),n&&n());}__emit(t,e){const n=this.__map[t];if(Array.isArray(n)&&(n!=null&&n.length))for(const r of n)r(e,t);this.event=e;}off(t,e){const n=this.__map[t];if(n!==void 0)if(e===void 0)delete this.__map[t];else {const r=n.findIndex(a=>a===e);n.splice(r,1);}}destroy(){this.__map={};}};const Re="clientX",De="clientY",Po=16,an="start",Ho="move",$n="cancel",ke="end",Bo="left",No="right",_r="up",Uo="down",Vo={4:"start",5:"move",1:"end",3:"cancel"};function In(o){return Vo[o]}function _n(o,t,e){const n={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(o)][t];return n!==void 0&&n[e]||0}function on(o){[1,3,2].includes(o.state)&&(o.state=0);}function On(o){return [5,1,3].includes(o)}function Ve(o){if(o.disabled)return o.state=0,true}function Me(o,t){return Object.assign(Object.assign(Object.assign({},o),t),{state:0,disabled:false})}function ir(o){return Math.round(100*o)/100}function sr(){let o,t,e,n,r=0;return function(a){if(o=t,a!==void 0){r=Number.MAX_SAFE_INTEGER>r?++r:1;const i=function(c,d){const{phase:f,points:p,changedPoints:g,nativeEvent:v}=c,h=p.length,b=an===f,A=ke===f&&h===0||$n===f,T=Date.now(),{x:E,y:M}=lr(p)||lr(g),{currentTarget:L}=v;return Object.assign(c,{id:d,x:E,y:M,timestamp:T,isStart:b,isEnd:A,pointLength:h,currentTarget:L,getOffset(k=L){const G=k.getBoundingClientRect();return {x:E-Math.round(G.left),y:M-Math.round(G.top)}}})}(a,r);t=i;const{isStart:s,pointLength:l}=i;return s&&(e=i,o=void 0,n=1<l?i:void 0),Object.assign(Object.assign({},i),{prevInput:o,startMultiInput:n,startInput:e})}}}function lr(o){const{length:t}=o;if(0<t){if(t===1){const{clientX:n,clientY:r}=o[0];return {x:Math.round(n),y:Math.round(r)}}const e=o.reduce((n,r)=>(n.x+=r[Re],n.y+=r[De],n),{x:0,y:0});return {x:Math.round(e.x/t),y:Math.round(e.y/t)}}}function cr(o,t,e,n){const r={};for(const i in e)["target","currentTarget","type"].includes(i)||(r[i]=e[i]);let a;return document.createEvent?(a=document.createEvent("HTMLEvents"),a.initEvent(o,n==null?void 0:n.bubbles,n==null?void 0:n.cancelable)):a=new Event(o,n),Object.assign(a,r,{match:()=>e.targets&&0<e.targets.length&&e.targets.every(i=>a.currentTarget.contains(i))}),t.dispatchEvent(a)}function zo(o,t){const{preventDefault:e}=t;return n=e,Object.prototype.toString.call(n)==="[object Function]"?e(o):!!e;var n;}const dr=["touchstart","touchmove","touchend","touchcancel","mousedown"],fr=["mousemove","mouseup"],Go={domEvents:{bubbles:true,cancelable:true},preventDefault:o=>{if(o.target&&"tagName"in o.target){const{tagName:t}=o.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(t)}return  false}};let Fo=class extends Do{constructor(t,e){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=t,this.c={},this.__options=Object.assign(Object.assign({},Go),e);const n=function(a){const i=sr();return function(s){const l=[],c=[];Array.from(s.touches).forEach(({clientX:f,clientY:p,target:g})=>{a!=null&&a.contains(g)&&(l.push(g),c.push({clientX:f,clientY:p,target:g}));});const d=Array.from(s.changedTouches).map(({clientX:f,clientY:p,target:g})=>({clientX:f,clientY:p,target:g}));return i({phase:s.type.replace("touch",""),changedPoints:d,points:c,nativeEvent:s,target:s.target,targets:l})}}(this.el),r=function(){let a,i=false,s=null;const l=sr();return function(c){const{clientX:d,clientY:f,type:p,button:g,target:v}=c;let h,b=[{clientX:d,clientY:f,target:v}];if(p==="mousedown"&&g===0)s=v,i=true,h="start";else {if(!i)return;p==="mousemove"?h="move":p==="mouseup"&&(b=[],h="end",i=false);}const A=a||[{clientX:d,clientY:f,target:v}];if(a=[{clientX:d,clientY:f,target:v}],h!==void 0)return l({phase:h,changedPoints:A,points:b,target:s,targets:[s],nativeEvent:c})}}();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:r,mousemove:r,mouseup:r},this.on("at:after",a=>{const{target:i,__type:s}=a,{domEvents:l}=this.__options;l&&this.el!==void 0&&i&&(cr(s,i,a,l),cr("at:after",i,a,l));}),t!==void 0){t.style.webkitTapHighlightColor="rgba(0,0,0,0)";let a=false;try{const i={};Object.defineProperty(i,"passive",{get(){a=!0;}}),window.addEventListener("_",()=>{},i);}catch{}this.on("u",function(i,s,l){return dr.forEach(c=>{i.addEventListener(c,s,l);}),fr.forEach(c=>{window.addEventListener(c,s,l);}),()=>{dr.forEach(c=>{i.removeEventListener(c,s);}),fr.forEach(c=>{window.removeEventListener(c,s);});}}(t,this.catchEvent.bind(this),this.__options.preventDefault===false&&a?{passive:true}:{passive:false}));}}use(t,e){this.__pluginContexts.push(t(this,e));}catchEvent(t){const e=this.__inputCreatorMap[t.type](t);if(e!==void 0){const n=()=>t.stopPropagation(),r=()=>t.stopImmediatePropagation(),a=()=>t.preventDefault();if(zo(t,this.__options))a();else if(t.type==="touchstart"?this.__isIgnoreMouse=true:t.type==="touchmove"&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&t.type.startsWith("mouse"))return void(t.type==="mouseup"&&(this.__isIgnoreMouse=false));this.emit("input",e),this.emit2(`at:${e.phase}`,e,{});const i={};this.__computeFunctionList.forEach(s=>{const l=s(e,i);if(l!==void 0)for(const c in l)i[c]=l[c];}),this.emit("computed",Object.assign(Object.assign(Object.assign({},e),i),{stopPropagation:n,stopImmediatePropagation:r,preventDefault:a}));}}compute(t,e){for(const n of t)this.__computeFunctionCreatorList.includes(n)||(this.__computeFunctionCreatorList.push(n),this.__computeFunctionList.push(n()));this.on("computed",e);}beforeEach(t){super.beforeEach((e,n)=>{var r;!((r=this.c)===null||r===void 0)&&r.name?t(e,n):n();});}get(t){return this.__pluginContexts.find(e=>t===e.name)}set(t){this.__options=Object.assign(Object.assign({},this.__options),t);}emit2(t,e,n){this.c=n,this.emit(t,Object.assign(Object.assign({},e),{type:t}),()=>{this.emit("at:after",Object.assign(Object.assign({},e),{name:t,__type:t}));});}destroy(){this.emit("u"),super.destroy();}};var re=o=>Math.sqrt(o.x*o.x+o.y*o.y),jo=(o,t)=>o.x*t.x+o.y*t.y,qo=(o,t)=>{var e=re(o)*re(t);if(e===0)return 0;var n=jo(o,t)/e;return n>1&&(n=1),Math.acos(n)},Wo=(o,t)=>o.x*t.y-t.x*o.y,Or=o=>o/Math.PI*180,pr=(o,t)=>{var e=qo(o,t);return Wo(o,t)>0&&(e*=-1),Or(e)},Rr=(o,t)=>{if(o!==0||t!==0)return Math.abs(o)>=Math.abs(t)?0<o?No:Bo:0<t?Uo:_r};function Ko(){let o=0,t=0;return function(e,n){const{prevVecotr:r,startVecotr:a,activeVecotr:i}=n;return i&&(t=Math.round(pr(i,r)),o=Math.round(pr(i,a))),{angle:o,deltaAngle:t}}}function Xo(){return function(o){const{prevInput:t}=o;let e=0,n=0,r=0;if(t!==void 0&&(e=o.x-t.x,n=o.y-t.y,e!==0||n!==0)){const a=Math.sqrt(Math.pow(e,2)+Math.pow(n,2));r=Math.round(Or(Math.acos(Math.abs(e)/a)));}return {deltaX:e,deltaY:n,deltaXYAngle:r}}}function sn(){let o,t=0,e=0,n=0,r=0,a=0;return function(i){const{phase:s,startInput:l}=i;return an===s?(t=0,e=0,n=0,r=0,a=0):Ho===s&&(t=Math.round(i.points[0][Re]-l.points[0][Re]),e=Math.round(i.points[0][De]-l.points[0][De]),n=Math.abs(t),r=Math.abs(e),a=Math.round(re({x:n,y:r})),o=Rr(t,e)),{displacementX:t,displacementY:e,distanceX:n,distanceY:r,distance:a,overallDirection:o}}}function Qo(){let o=1;return function(t,e){let n=1;const{prevVecotr:r,startVecotr:a,activeVecotr:i}=e;return i&&(n=ir(re(i)/re(r)),o=ir(re(i)/re(a))),{scale:o,deltaScale:n}}}function Dr(){let o,t,e=0,n=0,r=0,a=0;return function(i){if(i!==void 0){t=t||i.startInput;const s=i.timestamp-t.timestamp;if(Po<s){const l=i.x-t.x,c=i.y-t.y;r=Math.round(l/s*100)/100,a=Math.round(c/s*100)/100,e=Math.abs(r),n=Math.abs(a),o=Rr(l,c),t=i;}}return {velocityX:e,velocityY:n,speedX:r,speedY:a,direction:o}}}function Pr(){let o=0;return function(t){const{phase:e}=t;return an===e&&(o=t.pointLength),{maxPointLength:o}}}function yn(o){return {x:o.points[1][Re]-o.points[0][Re],y:o.points[1][De]-o.points[0][De]}}function Hr(){let o,t,e;return function(n){const{prevInput:r,startMultiInput:a}=n;return a!==void 0&&r!==void 0&&n.id!==a.id&&1<r.pointLength&&1<n.pointLength?(o=yn(a),t=yn(r),e=yn(n)):e=void 0,{startVecotr:o,prevVecotr:t,activeVecotr:e}}}const Yo={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function Rn(o,t){const e=Me(Yo,t);let n,r,a,i=0;function s(){i=0,n=void 0,r=void 0;}return o.compute([sn,Pr],l=>{if(Ve(e))return;const{phase:c,x:d,y:f}=l;ke===c&&(e.state=0,function(){const{startInput:p,pointLength:g,timestamp:v}=l,h=v-p.timestamp,{distance:b,maxPointLength:A}=l;return A===e.pointLength&&g===0&&e.maxDistance>=b&&e.maxPressTime>h}()?(clearTimeout(a),function(p,g){if(n!==void 0){const v=re({x:p.x-n.x,y:p.y-n.y});return n=p,g.maxDistanceFromPrevTap>=v}return n=p,true}({x:d,y:f},e)&&function(p){const g=performance.now();if(r===void 0)return r=g,true;{const v=g-r;return r=g,v<p}}(e.waitNextTapTime)?i++:i=1,i%e.tapTimes==0?(e.state=1,o.emit2(e.name,l,e),s()):a=setTimeout(()=>{e.state=2,s();},e.waitNextTapTime)):(s(),e.state=2));}),e}const Jo={name:"pan",threshold:10,pointLength:1};function Br(o,t){const e=Me(Jo,t);return o.compute([Dr,sn,Xo],n=>{if(on(e),Ve(e))return;const r=function(){const{pointLength:a,distance:i}=n;return e.pointLength===a&&e.threshold<=i}();if(e.state=_n(r,e.state,n.phase),r||On(e.state)){const{name:a}=e;o.emit2(a,n,e),o.emit2(a+In(e.state),n,e),![ke,$n].includes(n.phase)&&n.direction&&o.emit2(a+n.direction,n,e);}}),e}const Zo={name:"swipe",threshold:10,velocity:.3,pointLength:1};function Nr(o,t){const e=Me(Zo,t);return o.compute([sn,Dr,Pr],n=>{if(e.state=0,!e.disabled&&function(){if(ke!==n.phase)return  false;const{velocityX:r,velocityY:a,distance:i,maxPointLength:s}=n;return s===e.pointLength&&n.points.length===0&&e.threshold<i&&e.velocity<Math.max(r,a)}()){const{name:r}=e;e.state=1,o.emit2(r,n,e),o.emit2(r+n.direction,n,e);}}),e}const ti={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function Ur(o,t){const e=Me(ti,t);let n=0;return o.compute([sn],r=>{if(Ve(e))return;const{phase:a,startInput:i,pointLength:s}=r;if(an===a&&e.pointLength===s)on(e),clearTimeout(n),n=setTimeout(()=>{e.state=1,o.emit2(e.name,r,e);},e.minPressTime);else if(ke===a&&e.state===1)o.emit2(`${e.name}${_r}`,r,e);else if(e.state!==1){const l=r.timestamp-i.timestamp;(!function(){const{distance:c}=r;return c&&e.maxDistance>c}()||e.minPressTime>l&&[ke,$n].includes(a))&&(clearTimeout(n),e.state=2);}}),e}const ei={name:"pinch",threshold:0,pointLength:2};function Vr(o,t){const e=Me(ei,t);return o.compute([Hr,Qo],n=>{if(on(e),Ve(e))return;const r=function(){const{pointLength:s,scale:l,deltaScale:c,phase:d}=n;return e.pointLength===s&&e.threshold<Math.abs(l-1)}();e.state=_n(r,e.state,n.phase);const{name:a}=e;if(r||On(e.state)){o.emit2(a,n,e);const{deltaScale:s}=n;s!==1&&o.emit2(a+(1<s?"in":"out"),n,e);}const i=In(e.state);i&&o.emit2(a+i,n,e);}),e}const ni={name:"rotate",threshold:0,pointLength:2};function zr(o,t){const e=Me(ni,t);return o.compute([Hr,Ko],n=>{if(Ve(e))return;on(e);const r=function(){const{pointLength:s,angle:l}=n;return e.pointLength===s&&e.threshold<Math.abs(l)}();e.state=_n(r,e.state,n.phase);const{name:a}=e;(r||On(e.state))&&o.emit2(a,n,e);const i=In(e.state);i&&o.emit2(a+i,n,e);}),e}function ri(o){o.use(Rn,{name:"doubletap",tapTimes:2});const t=o.get("doubletap");let e;return o.beforeEach((n,r)=>{n==="tap"?(clearTimeout(e),e=setTimeout(()=>{[0,2].includes(t.state)&&r();},300)):r();}),t}class _t extends Fo{constructor(t,e){super(t,e),this.use(Rn),this.use(Br),this.use(Nr),this.use(Ur),this.use(Vr),this.use(zr);}}_t.STATE_POSSIBLE=0,_t.STATE_START=4,_t.STATE_MOVE=5,_t.STATE_END=1,_t.STATE_CANCELLED=3,_t.STATE_FAILED=2,_t.STATE_RECOGNIZED=1,_t.tap=Rn,_t.pan=Br,_t.swipe=Nr,_t.press=Ur,_t.rotate=zr,_t.pinch=Vr,_t.doubletap=ri;class ai{constructor(){O(this,"AnyTouch",()=>_t);}isWin(t){var e;return typeof t!="object"||t instanceof Node?false:t===globalThis||t===window||t===self||t===F.globalThis||t===F.window||t===F.self||typeof unsafeWindow<"u"&&t===unsafeWindow?true:((e=t==null?void 0:t.Math)==null?void 0:e.toString())==="[object Math]"}isDOM(t){return t instanceof Node}delete(t,e){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(t,e):delete t[e];}assign(t={},e={},n=false){let r=this;if(e==null)return t;if(t==null&&(t={}),Array.isArray(e)&&!e.filter(i=>typeof i=="object").length)return e;if(n)for(const a in e){let s=t[a],l=e[a];if(typeof l=="object"&&l!=null&&a in t&&!r.isDOM(l)){t[a]=r.assign(s,l,n);continue}t[a]=l;}else for(const a in t)if(a in e){let i=t[a],s=e[a];if(typeof s=="object"&&s!=null&&!r.isDOM(s)&&Object.keys(s).length){t[a]=r.assign(i,s,n);continue}t[a]=s;}return t}getRandomGUID(){var t,e;return typeof((e=(t=F.globalThis)==null?void 0:t.crypto)==null?void 0:e.randomUUID)=="function"?F.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var r=Math.random()*16|0,a=n==="x"?r:r&3|8;return a.toString(16)})}contains(t,e){if(arguments.length===1)return this.contains(F.document.body||F.document.documentElement,arguments[0]);if(e==null)return  false;if(typeof e[Symbol.iterator]=="function"){let n=true;for(const r of e)if(!t.contains(r)){n=false;break}return n}else return t.contains(e)}formatTime(t=new Date,e="yyyy-MM-dd HH:mm:ss"){let n=t==null?new Date:new Date(t);function r(s){return s<10?"0"+s:s}function a(s){return s>12?s-12:s}let i={yyyy:n.getFullYear(),MM:r(n.getMonth()+1),dd:r(n.getDate()),HH:r(n.getHours()),hh:r(a(n.getHours())),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return Object.keys(i).forEach(function(s){let l=new RegExp(s,"g");e=e.replace(l,i[s]);}),e}formatByteToSize(t,e=true){if(t=parseInt(t.toString()),isNaN(t))throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");let n=0,r="KB",a={};a.B=1,a.KB=1024,a.MB=a.KB*a.KB,a.GB=a.MB*a.KB,a.TB=a.GB*a.KB,a.PB=a.TB*a.KB,a.EB=a.PB*a.KB,a.ZB=a.EB*a.KB,a.YB=a.ZB*a.KB,a.BB=a.YB*a.KB,a.NB=a.BB*a.KB,a.DB=a.NB*a.KB;for(let i in a)if(n=t/a[i],r=i,a.KB>=n)break;return n=n.toFixed(2),n=e?n+r.toString():parseFloat(n.toString()),n}isPhone(t=F.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(t)}setTimeout(t,e=0){try{return Ro(t,e)}catch{return globalThis.setTimeout(t,e)}}clearTimeout(t){try{t!=null&&_o(t);}catch{}finally{globalThis.clearTimeout(t);}}setInterval(t,e=0){try{return Oo(t,e)}catch{return globalThis.setInterval(t,e)}}clearInterval(t){try{t!=null&&Io(t);}catch{}finally{globalThis.clearInterval(t);}}}const N=new ai,nt={getSafeHTML(o){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:e=>e}).createHTML(o):o},setSafeHTML(o,t){o.innerHTML=this.getSafeHTML(t);}};class oi{on(t,e,n,r,a){function i(h,b,A){let T=h[b];return typeof T=="boolean"?(A.capture=T,typeof h[b+1]=="boolean"&&(A.once=h[b+1]),typeof h[b+2]=="boolean"&&(A.passive=h[b+2])):typeof T=="object"&&("capture"in T||"once"in T||"passive"in T||"isComposedPath"in T)&&(A.capture=T.capture,A.once=T.once,A.passive=T.passive,A.isComposedPath=T.isComposedPath),A}let s=this,l=arguments;if(typeof t=="string"&&(t=s.selectorAll(t)),t==null)return;let c=[];t instanceof NodeList||Array.isArray(t)?(t=t,c=[...t]):c.push(t);let d=[];Array.isArray(e)?d=d.concat(e.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof e=="string"&&(d=d.concat(e.split(" ").filter(h=>h!=="")));let f=[];Array.isArray(n)?f=f.concat(n.filter(h=>typeof h=="string"&&h.toString()!=="")):typeof n=="string"&&f.push(n);let p=r,g={capture:false,once:false,passive:false,isComposedPath:false};typeof n=="function"?(p=n,g=i(l,3,g)):g=i(l,4,g);function v(){g.once&&s.off(t,e,n,r,a);}c.forEach(h=>{function b(A){if(f.length){let T=g.isComposedPath?A.composedPath()[0]:A.target,E=h;if(N.isWin(E)&&E===F.document&&(E=F.document.documentElement),f.find(L=>{if(s.matches(T,L))return  true;let k=s.closest(T,L);return k&&(E!=null&&E.contains(k))?(T=k,true):false})){try{Lr.Object.defineProperty(A,"target",{get(){return T}});}catch{}p.call(T,A,T),v();}}else p.call(h,A),v();}d.forEach(A=>{h.addEventListener(A,b,g);let T=Reflect.get(h,_e)||{};T[A]=T[A]||[],T[A].push({selector:f,option:g,callback:b,originCallBack:p}),Reflect.set(h,_e,T);});});}off(t,e,n,r,a,i){function s(b,A,T){let E=b[A];return typeof E=="boolean"?T.capture=E:typeof E=="object"&&"capture"in E&&(T.capture=E.capture),T}let l=this,c=arguments;if(typeof t=="string"&&(t=l.selectorAll(t)),t==null)return;let d=[];t instanceof NodeList||Array.isArray(t)?(t=t,d=[...t]):d.push(t);let f=[];Array.isArray(e)?f=f.concat(e.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof e=="string"&&(f=f.concat(e.split(" ").filter(b=>b!=="")));let p=[];Array.isArray(n)?p=p.concat(n.filter(b=>typeof b=="string"&&b.toString()!=="")):typeof n=="string"&&p.push(n);let g=r,v={capture:false};typeof n=="function"?(g=n,v=s(c,3,v)):v=s(c,4,v);let h=false;(c.length===2||c.length===3&&typeof c[2]=="string"||Array.isArray(c[2]))&&(h=true),d.forEach(b=>{let A=Reflect.get(b,_e)||{};f.forEach(T=>{let E=A[T]||[];typeof i=="function"&&(E=E.filter(i));for(let M=0;M<E.length;M++){let L=E[M],k=true;k&&g&&L.originCallBack!==g&&(k=false),k&&p.length&&Array.isArray(L.selector)&&JSON.stringify(L.selector)!==JSON.stringify(p)&&(k=false),k&&v.capture!==L.option.capture&&(k=false),(k||h)&&(b.removeEventListener(T,L.callback,L.option),E.splice(M--,1));}E.length===0&&N.delete(A,e);}),Reflect.set(b,_e,A);});}offAll(t,e){if(typeof t=="string"&&(t=F.document.querySelectorAll(t)),t==null)return;let n=[];t instanceof NodeList||Array.isArray(t)?n=[...t]:n.push(t);let r=[];Array.isArray(e)?r=r.concat(e):typeof e=="string"&&(r=r.concat(e.split(" "))),n.forEach(a=>{Object.getOwnPropertySymbols(a).forEach(i=>{if(!i.toString().startsWith("Symbol(events_"))return;let s=a[i]||{};(r.length?r:Object.keys(s)).forEach(c=>{let d=s[c];if(d){for(const f of d)a.removeEventListener(c,f.callback,{capture:f.option.capture});N.delete(a[i],c);}});});});}ready(t){if(typeof t!="function")return;function e(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return  false}}function n(){i(),t();}let r=[{target:F.document,eventType:"DOMContentLoaded",callback:n},{target:F.window,eventType:"load",callback:n}];function a(){for(let s=0;s<r.length;s++){let l=r[s];l.target.addEventListener(l.eventType,l.callback);}}function i(){for(let s=0;s<r.length;s++){let l=r[s];l.target.removeEventListener(l.eventType,l.callback);}}e()?N.setTimeout(t,0):a();}trigger(t,e,n,r=true){if(typeof t=="string"&&(t=F.document.querySelector(t)),t==null)return;let a=[];t instanceof NodeList||Array.isArray(t)?(t=t,a=[...t]):a=[t];let i=[];Array.isArray(e)?i=e:typeof e=="string"&&(i=e.split(" ")),a.forEach(s=>{let l=s[_e]||{};i.forEach(c=>{let d=null;n&&n instanceof Event?d=n:(d=new Event(c),n&&Object.keys(n).forEach(f=>{d[f]=n[f];})),r==false&&c in l?l[c].forEach(f=>{f.callback(d);}):s.dispatchEvent(d);});});}click(t,e,n,r){let a=this;typeof t=="string"&&(t=F.document.querySelector(t)),t!=null&&(e==null?a.trigger(t,"click",n,r):a.on(t,"click",null,e));}blur(t,e,n,r){let a=this;typeof t=="string"&&(t=F.document.querySelector(t)),t!=null&&(e===null?a.trigger(t,"blur",n,r):a.on(t,"blur",null,e));}focus(t,e,n,r){let a=this;typeof t=="string"&&(t=F.document.querySelector(t)),t!=null&&(e==null?a.trigger(t,"focus",n,r):a.on(t,"focus",null,e));}hover(t,e,n){let r=this;typeof t=="string"&&(t=F.document.querySelector(t)),t!=null&&(r.on(t,"mouseenter",null,e,n),r.on(t,"mouseleave",null,e,n));}keyup(t,e,n){let r=this;t!=null&&(typeof t=="string"&&(t=F.document.querySelector(t)),r.on(t,"keyup",null,e,n));}keydown(t,e,n){let r=this;t!=null&&(typeof t=="string"&&(t=F.document.querySelector(t)),r.on(t,"keydown",null,e,n));}keypress(t,e,n){let r=this;t!=null&&(typeof t=="string"&&(t=F.document.querySelector(t)),r.on(t,"keypress",null,e,n));}preventEvent(t,e=[],n){function r(a){return a==null||a.preventDefault(),a==null||a.stopPropagation(),a==null||a.stopImmediatePropagation(),false}if(arguments.length===1)return r(arguments[0]);typeof e=="string"&&(e=[e]),e.forEach(a=>{t.addEventListener(a,r,{capture:!!n});});}selector(t){return this.selectorAll(t)[0]}selectorAll(t){if(t=t.trim(),t.match(/[^\s]{1}:empty$/gi))return t=t.replace(/:empty$/gi,""),Array.from(F.document.querySelectorAll(t)).filter(e=>{var n;return ((n=e==null?void 0:e.innerHTML)==null?void 0:n.trim())===""});if(t.match(/[^\s]{1}:contains\("(.*)"\)$/i)||t.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let n=t.match(/:contains\(("|')(.*)("|')\)$/i)[2];return t=t.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(F.document.querySelectorAll(t)).filter(r=>{var a;return (a=(r==null?void 0:r.textContent)||(r==null?void 0:r.innerText))==null?void 0:a.includes(n)})}else if(t.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||t.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let n=t.match(/:regexp\(("|')(.*)("|')\)$/i)[2],r=n.match(/("|'),[\s]*("|')([igm]{0,3})$/i),a="";r&&(n=n.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),a=r[3]);let i=new RegExp(n,a);return t=t.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(F.document.querySelectorAll(t)).filter(s=>{var l;return !!((l=(s==null?void 0:s.textContent)||(s==null?void 0:s.innerText))!=null&&l.match(i))})}else return Array.from(F.document.querySelectorAll(t))}matches(t,e){var n;if(e=e.trim(),t==null)return  false;if(e.match(/[^\s]{1}:empty$/gi))return e=e.replace(/:empty$/gi,""),t.matches(e)&&((n=t==null?void 0:t.innerHTML)==null?void 0:n.trim())==="";if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let i=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);return typeof i!="string"&&(i=""),t.matches(e)&&(i==null?void 0:i.includes(a))}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let c=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);return typeof c!="string"&&(c=""),t.matches(e)&&!!(c!=null&&c.match(l))}else return t.matches(e)}closest(t,e){var n;if(e=e.trim(),e.match(/[^\s]{1}:empty$/gi)){e=e.replace(/:empty$/gi,"");let r=t==null?void 0:t.closest(e);return r&&((n=r==null?void 0:r.innerHTML)==null?void 0:n.trim())===""?r:null}else if(e.match(/[^\s]{1}:contains\("(.*)"\)$/i)||e.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let a=e.match(/:contains\(("|')(.*)("|')\)$/i)[2];e=e.replace(/:contains\(("|')(.*)("|')\)$/gi,"");let i=t==null?void 0:t.closest(e);if(i){let s=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);if(typeof s=="string"&&s.includes(a))return i}return null}else if(e.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||e.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let a=e.match(/:regexp\(("|')(.*)("|')\)$/i)[2],i=a.match(/("|'),[\s]*("|')([igm]{0,3})$/i),s="";i&&(a=a.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),s=i[3]);let l=new RegExp(a,s);e=e.replace(/:regexp\(("|')(.*)("|')\)$/gi,"");let c=t==null?void 0:t.closest(e);if(c){let d=(t==null?void 0:t.textContent)||(t==null?void 0:t.innerText);if(typeof d=="string"&&d.match(l))return c}return null}else return t==null?void 0:t.closest(e)}}class ii extends oi{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(t,e=true){let n=t.getBoundingClientRect(),r=t.ownerDocument.defaultView;return new DOMRect(e?parseFloat((n.left+((r==null?void 0:r.pageXOffset)||0)).toString()):n.left,e?parseFloat((n.top+((r==null?void 0:r.pageYOffset)||0)).toString()):n.top,n.width,n.height)}width(t,e=false,n){let r=this;if(typeof t=="string"&&(t=F.document.querySelector(t)),t!=null){if(N.isWin(t))return F.window.document.documentElement.clientWidth;if(t.nodeType===9)return t=t,Math.max(t.body.scrollWidth,t.documentElement.scrollWidth,t.body.offsetWidth,t.documentElement.offsetWidth,t.documentElement.clientWidth);if(e||!e&&u.isShow(t)){if(t=t,parseFloat(u.getStyleValue(t,"width").toString())>0)return parseFloat(u.getStyleValue(t,"width").toString());if(t.offsetWidth>0){let a=u.getStyleValue(t,"borderLeftWidth"),i=u.getStyleValue(t,"borderRightWidth"),s=u.getStyleValue(t,"paddingLeft"),l=u.getStyleValue(t,"paddingRight"),c=parseFloat(t.offsetWidth.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {t=t;let{cloneNode:a,recovery:i}=u.showElement(t,n),s=r.width(a,true,n);return i(),s}}}height(t,e=false,n){let r=this;if(N.isWin(t))return F.window.document.documentElement.clientHeight;if(typeof t=="string"&&(t=F.document.querySelector(t)),t!=null){if(t.nodeType===9)return t=t,Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.documentElement.clientHeight);if(e||!e&&u.isShow(t)){if(t=t,parseFloat(u.getStyleValue(t,"height").toString())>0)return parseFloat(u.getStyleValue(t,"height").toString());if(t.offsetHeight>0){let a=u.getStyleValue(t,"borderTopWidth"),i=u.getStyleValue(t,"borderBottomWidth"),s=u.getStyleValue(t,"paddingTop"),l=u.getStyleValue(t,"paddingBottom"),c=parseFloat(t.offsetHeight.toString())-parseFloat(a.toString())-parseFloat(i.toString())-parseFloat(s.toString())-parseFloat(l.toString());return parseFloat(c.toString())}return 0}else {t=t;let{cloneNode:a,recovery:i}=u.showElement(t,n),s=r.height(a,true,n);return i(),s}}}outerWidth(t,e=false,n){let r=this;if(N.isWin(t))return F.window.innerWidth;if(typeof t=="string"&&(t=F.document.querySelector(t)),t!=null)if(t=t,e||!e&&u.isShow(t)){let a=getComputedStyle(t,null),i=u.getStyleValue(a,"marginLeft"),s=u.getStyleValue(a,"marginRight");return t.offsetWidth+i+s}else {let{cloneNode:a,recovery:i}=u.showElement(t,n),s=r.outerWidth(a,true,n);return i(),s}}outerHeight(t,e=false,n){let r=this;if(N.isWin(t))return F.window.innerHeight;if(typeof t=="string"&&(t=F.document.querySelector(t)),t!=null)if(t=t,e||!e&&u.isShow(t)){let a=getComputedStyle(t,null),i=u.getStyleValue(a,"marginTop"),s=u.getStyleValue(a,"marginBottom");return t.offsetHeight+i+s}else {let{cloneNode:a,recovery:i}=u.showElement(t,n),s=r.outerHeight(a,true,n);return i(),s}}addClassName(t,e){typeof e=="string"&&e.trim()!==""&&t.classList.add(e);}removeClassName(t,e){typeof e=="string"&&e.trim()!==""&&t.classList.remove(e);}containsClassName(t,e){return typeof e!="string"||e.trim()===""?false:t.classList.contains(e)}css(t,e,n){function r(i,s){let l=["width","height","top","left","right","bottom","font-size"];return typeof s=="number"&&(s=s.toString()),typeof s=="string"&&l.includes(i)&&s.match(/[0-9]$/gi)&&(s=s+"px"),s}if(typeof t=="string"&&(t=F.document.querySelector(t)),t==null)return;let a=(i,s)=>{typeof s=="string"&&s.trim().endsWith("!important")?(s=s.trim().replace(/!important$/gi,"").trim(),t.style.setProperty(i,s,"important")):(s=r(i,s),t.style.setProperty(i,s));};if(typeof e=="string"){if(n==null)return getComputedStyle(t).getPropertyValue(e);a(e,n);}else if(typeof e=="object")for(let i in e){let s=e[i];a(i,s);}}createElement(t,e,n){let r=F.document.createElement(t);return typeof e=="string"?(nt.setSafeHTML(r,e),r):(e==null&&(e={}),n==null&&(n={}),Object.keys(e).forEach(a=>{let i=e[a];if(a==="innerHTML"){nt.setSafeHTML(r,i);return}r[a]=i;}),Object.keys(n).forEach(a=>{let i=n[a];typeof i=="object"?i=JSON.stringify(i):typeof i=="function"&&(i=i.toString()),r.setAttribute(a,i);}),r)}parseTextToDOM(t){return t=t.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),this.createElement("div",{innerHTML:t}).firstChild}getTextBoundingRect(t,e,n,r){if(!t||!("value"in t))return t;if(typeof e=="string"&&(e=parseFloat(e)),(typeof e!="number"||isNaN(e))&&(e=0),e<0?e=0:e=Math.min(t.value.length,e),typeof n=="string"&&(n=parseFloat(n)),(typeof n!="number"||isNaN(n)||n<e)&&(n=e),n<0?n=0:n=Math.min(t.value.length,n),typeof t.createTextRange=="function"){var a=t.createTextRange();return a.collapse(true),a.moveStart("character",e),a.moveEnd("character",n-e),a.getBoundingClientRect()}var i=L(),s=i.top,l=i.left,c=k("width",true),d=k("height",true),f="white-space:pre;padding:0;margin:0;",p=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];s+=k("padding-top",true),s+=k("border-top-width",true),l+=k("padding-left",true),l+=k("border-left-width",true),l+=1;for(var g=0;g<p.length;g++){var v=p[g];f+=v+":"+k(v)+";";}var h=t.value||"G",b=h.length,A=document.createElement("div");e>0&&M(0,e);var T=M(e,n);b>n&&M(n,b),A.style.cssText=f,A.style.position="absolute",A.style.top=s+"px",A.style.left=l+"px",A.style.width=c+"px",A.style.height=d+"px",F.document.body.appendChild(A);var E=T.getBoundingClientRect();return r||A.parentNode.removeChild(A),E;function M(G,H){var q=document.createElement("span");return q.style.cssText=f,q.textContent=h.substring(G,H),A.appendChild(q),q}function L(){var G=document.body,H=document.defaultView,q=document.documentElement,st=document.createElement("div");st.style.paddingLeft=st.style.width="1px",G.appendChild(st);var bt=st.offsetWidth==2;G.removeChild(st),st=t.getBoundingClientRect();var C=q.clientTop||G.clientTop||0,w=q.clientLeft||G.clientLeft||0,y=H.pageYOffset||bt&&q.scrollTop||G.scrollTop,x=H.pageXOffset||bt&&q.scrollLeft||G.scrollLeft;return {top:st.top+y-C,left:st.left+x-w}}function k(G,H){var q=F.document.defaultView.getComputedStyle(t,null).getPropertyValue(G);return H?parseFloat(q):q}}cssHide(t,e=false){t!=null&&(e?t.classList.add("pops-hide-important"):t.classList.add("pops-hide"));}cssShow(t){t!=null&&(t.classList.remove("pops-hide-important"),t.classList.remove("pops-hide"));}parseHTML(t,e=false,n=false){function r(){let i=new DOMParser;return n?i.parseFromString(t,"text/html"):i.parseFromString(t,"text/html").body.firstChild}function a(){let i=F.document.createElement("div");return nt.setSafeHTML(i,t),n?i:i.firstChild}return e?r():a()}append(t,e){if(typeof t=="string"&&(t=F.document.querySelector(t)),t==null)return;function n(r,a){typeof e=="string"?r.insertAdjacentHTML("beforeend",nt.getSafeHTML(a)):r.appendChild(a);}if(Array.isArray(e)||e instanceof NodeList){let r=F.document.createDocumentFragment();e.forEach(a=>{typeof a=="string"&&(a=this.parseHTML(a,true,false)),r.appendChild(a);}),t.appendChild(r);}else n(t,e);}appendHead(t){F.document.head?F.document.head.appendChild(t):F.document.documentElement.appendChild(t);}appendBody(t){F.document.body?F.document.body.appendChild(t):F.document.documentElement.appendChild(t);}isShow(t){return !!t.getClientRects().length}showElement(t,e){let n=t.cloneNode(true);n.setAttribute("style","visibility: hidden !important;display:block !important;");let r=F.document.documentElement,a=t.getRootNode();return e==null?a==t?r=F.document.documentElement:r=a:r=e,r.appendChild(n),{cloneNode:n,recovery(){n.remove();}}}getStyleValue(t,e){let n=null,r=null;t instanceof CSSStyleDeclaration?r=t:(n=t.ownerDocument.defaultView,(!n||!n.opener)&&(n=window),r=n.getComputedStyle(t));let a=parseFloat(r[e]);return isNaN(a)?0:a}before(t,e){typeof t=="string"&&(t=F.document.querySelector(t)),t!=null&&(typeof e=="string"?t.insertAdjacentHTML("beforebegin",nt.getSafeHTML(e)):t.parentElement.insertBefore(e,t));}after(t,e){typeof t=="string"&&(t=F.document.querySelector(t)),t!=null&&(typeof e=="string"?t.insertAdjacentHTML("afterend",nt.getSafeHTML(e)):t.parentElement.insertBefore(e,t.nextSibling));}getKeyFrames(t){let e={};return Object.keys(t.cssRules).forEach(n=>{t.cssRules[n].type===7&&t.cssRules[n].name.startsWith("pops-anim-")&&(e[t.cssRules[n].name]=t.cssRules[n]);}),e}}const u=new ii,Ct={alert:[],confirm:[],prompt:[],loading:[],iframe:[],tooltip:[],drawer:[],folder:[],panel:[],rightClickMenu:[]};var si=`@charset "utf-8";\r
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
}\r
.pops-mask {\r
	--pops-mask-bg-opacity: 0.4;\r
}\r
.pops {\r
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	border-radius: 4px;\r
	border: 1px solid rgb(235, 238, 245, var(--pops-bd-opacity));\r
	font-size: var(--pops-font-size);\r
	line-height: normal;\r
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);\r
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
	position: fixed;\r
	top: 0;\r
	right: 0;\r
	bottom: 0;\r
	left: 0;\r
	width: 100%;\r
	height: 100%;\r
	border: 0;\r
	border-radius: 0;\r
	background-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));\r
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
/* 标题禁止选中文字 */\r
.pops [class^="pops"][class*="-title"] p[pops] {\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
}\r
`,li=`.pops[position="top_left"] {\r
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
`,ci=`/* firefox上暂不支持::-webkit-scrollbar */\r
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
`,di=`.pops {\r
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
	--button-color: #333333;\r
	--button-bd-color: #dcdfe6;\r
	--button-bg-color: #ffffff;\r
}\r
.pops button[type="default"]:active {\r
	--button-color: #409eff;\r
	--button-bd-color: #409eff;\r
	--button-bg-color: #ecf5ff;\r
}\r
.pops button[type="default"]:hover {\r
	--button-color: #409eff;\r
	--button-bd-color: #c6e2ff;\r
	--button-bg-color: #ecf5ff;\r
}\r
.pops button[type="default"]:focus-visible {\r
	outline: 2px solid #a0cfff;\r
	outline-offset: 1px;\r
}\r
.pops button[type="default"]:disabled {\r
	--button-color: #a8abb2;\r
	--button-bd-color: #fff;\r
	--button-bg-color: #e4e7ed;\r
}\r
\r
.pops button[type="primary"] {\r
	--button-color: #ffffff;\r
	--button-bd-color: #409eff;\r
	--button-bg-color: #409eff;\r
}\r
.pops button[type="primary"]:active {\r
	--button-color: #ffffff;\r
	--button-bd-color: #337ecc;\r
	--button-bg-color: #337ecc;\r
}\r
.pops button[type="primary"]:hover {\r
	--button-color: #ffffff;\r
	--button-bd-color: #79bbff;\r
	--button-bg-color: #79bbff;\r
}\r
.pops button[type="primary"]:focus-visible {\r
	outline: 2px solid #a0cfff;\r
	outline-offset: 1px;\r
}\r
.pops button[type="primary"]:disabled {\r
	--button-color: #ffffff;\r
	--button-bd-color: #a0cfff;\r
	--button-bg-color: #a0cfff;\r
}\r
\r
.pops button[type="success"] {\r
	--button-color: #ffffff;\r
	--button-bd-color: #4cae4c;\r
	--button-bg-color: #5cb85c;\r
}\r
.pops button[type="success"]:active {\r
	--button-color: #ffffff;\r
	--button-bd-color: #529b2e;\r
	--button-bg-color: #529b2e;\r
}\r
.pops button[type="success"]:hover {\r
	--button-color: #ffffff;\r
	--button-bd-color: #95d475;\r
	--button-bg-color: #95d475;\r
}\r
.pops button[type="success"]:focus-visible {\r
	outline: 2px solid #b3e19d;\r
	outline-offset: 1px;\r
}\r
.pops button[type="success"]:disabled {\r
	--button-color: #ffffff;\r
	--button-bd-color: #b3e19d;\r
	--button-bg-color: #b3e19d;\r
}\r
\r
.pops button[type="info"] {\r
	--button-color: #ffffff;\r
	--button-bd-color: #909399;\r
	--button-bg-color: #909399;\r
}\r
.pops button[type="info"]:active {\r
	--button-color: #ffffff;\r
	--button-bd-color: #73767a;\r
	--button-bg-color: #73767a;\r
}\r
.pops button[type="info"]:hover {\r
	--button-color: #ffffff;\r
	--button-bd-color: #b1b3b8;\r
	--button-bg-color: #b1b3b8;\r
}\r
.pops button[type="info"]:focus-visible {\r
	outline: 2px solid #c8c9cc;\r
	outline-offset: 1px;\r
}\r
.pops button[type="info"]:disabled {\r
	--button-color: #ffffff;\r
	--button-bd-color: #c8c9cc;\r
	--button-bg-color: #c8c9cc;\r
}\r
\r
.pops button[type="warning"] {\r
	--button-color: #ffffff;\r
	--button-bd-color: #e6a23c;\r
	--button-bg-color: #e6a23c;\r
}\r
.pops button[type="warning"]:active {\r
	--button-color: #ffffff;\r
	--button-bd-color: #b88230;\r
	--button-bg-color: #b88230;\r
}\r
.pops button[type="warning"]:hover {\r
	--button-color: #ffffff;\r
	--button-bd-color: #eebe77;\r
	--button-bg-color: #eebe77;\r
}\r
.pops button[type="warning"]:focus-visible {\r
	outline: 2px solid #f3d19e;\r
	outline-offset: 1px;\r
}\r
.pops button[type="warning"]:disabled {\r
	--button-color: #ffffff;\r
	--button-bd-color: #f3d19e;\r
	--button-bg-color: #f3d19e;\r
}\r
\r
.pops button[type="danger"] {\r
	--button-color: #ffffff;\r
	--button-bd-color: #f56c6c;\r
	--button-bg-color: #f56c6c;\r
}\r
.pops button[type="danger"]:active {\r
	--button-color: #ffffff;\r
	--button-bd-color: #c45656;\r
	--button-bg-color: #c45656;\r
}\r
.pops button[type="danger"]:hover {\r
	--button-color: #ffffff;\r
	--button-bd-color: #f89898;\r
	--button-bg-color: #f89898;\r
}\r
.pops button[type="danger"]:focus-visible {\r
	outline: 2px solid #fab6b6;\r
	outline-offset: 1px;\r
}\r
.pops button[type="danger"]:disabled {\r
	--button-color: #ffffff;\r
	--button-bd-color: #fab6b6;\r
	--button-bg-color: #fab6b6;\r
}\r
\r
.pops button[type="xiaomi-primary"] {\r
	--button-color: #ffffff;\r
	--button-bd-color: #ff5c00;\r
	--button-bg-color: #ff5c00;\r
}\r
.pops button[type="xiaomi-primary"]:active {\r
	--button-color: #ffffff;\r
	--button-bd-color: #da4f00;\r
	--button-bg-color: #da4f00;\r
}\r
.pops button[type="xiaomi-primary"]:hover {\r
	--button-color: #ffffff;\r
	--button-bd-color: #ff7e29;\r
	--button-bg-color: #ff7e29;\r
}\r
.pops button[type="xiaomi-primary"]:focus-visible {\r
	outline: 2px solid #fab6b6;\r
	outline-offset: 1px;\r
}\r
.pops button[type="xiaomi-primary"]:disabled {\r
	--button-color: #ffffff;\r
	--button-bd-color: #fad5b6;\r
	--button-bg-color: #fad5b6;\r
}\r
`,fi=`.pops-flex-items-center {\r
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
`,pi=`@keyframes rotating {\r
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
`,ui=`.pops[type-value] .pops-alert-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.pops[type-value="alert"] .pops-alert-title {\r
	width: 100%;\r
	height: var(--container-title-height);\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
}\r
.pops[type-value="alert"] .pops-alert-title p[pops] {\r
	width: 100%;\r
	overflow: hidden;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
}\r
.pops[type-value="alert"] .pops-alert-content {\r
	width: 100%;\r
	/*height: calc(\r
		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r
	);*/\r
	flex: 1;\r
	overflow: auto;\r
	word-break: break-word;\r
}\r
.pops[type-value="alert"] .pops-alert-content p[pops] {\r
	padding: 5px 10px;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
}\r
.pops[type-value="alert"] .pops-alert-btn {\r
	/*position: absolute;\r
	bottom: 0;*/\r
	display: flex;\r
	padding: 10px 10px 10px 10px;\r
	width: 100%;\r
	height: var(--container-bottom-btn-height);\r
	max-height: var(--container-bottom-btn-height);\r
	line-height: normal;\r
	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
	text-align: right;\r
	align-items: center;\r
}\r
`,hi=`.pops[type-value] .pops-confirm-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.pops[type-value="confirm"] .pops-confirm-title {\r
	width: 100%;\r
	height: var(--container-title-height);\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
}\r
.pops[type-value="confirm"] .pops-confirm-title p[pops] {\r
	width: 100%;\r
	overflow: hidden;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
}\r
.pops[type-value="confirm"] .pops-confirm-content {\r
	width: 100%;\r
	/*height: calc(\r
		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r
	);*/\r
	flex: 1;\r
	overflow: auto;\r
	word-break: break-word;\r
}\r
.pops[type-value="confirm"] .pops-confirm-content p[pops] {\r
	padding: 5px 10px;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
}\r
.pops[type-value="confirm"] .pops-confirm-btn {\r
	/*position: absolute;\r
	bottom: 0;*/\r
	display: flex;\r
	padding: 10px 10px 10px 10px;\r
	width: 100%;\r
	height: var(--container-bottom-btn-height);\r
	max-height: var(--container-bottom-btn-height);\r
	line-height: normal;\r
	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
	text-align: right;\r
	align-items: center;\r
}\r
`,bi=`.pops[type-value] .pops-prompt-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.pops[type-value="prompt"] .pops-prompt-title {\r
	width: 100%;\r
	height: var(--container-title-height);\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
}\r
.pops[type-value="prompt"] .pops-prompt-title p[pops] {\r
	width: 100%;\r
	overflow: hidden;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
	align-content: center;\r
}\r
.pops[type-value="prompt"] .pops-prompt-content {\r
	width: 100%;\r
	/*height: calc(\r
		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r
	);*/\r
	flex: 1;\r
	overflow: auto;\r
	word-break: break-word;\r
}\r
.pops[type-value="prompt"] .pops-prompt-content p[pops] {\r
	padding: 5px 10px;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
}\r
.pops[type-value="prompt"] .pops-prompt-btn {\r
	display: flex;\r
	padding: 10px 10px 10px 10px;\r
	width: 100%;\r
	height: var(--container-bottom-btn-height);\r
	max-height: var(--container-bottom-btn-height);\r
	line-height: normal;\r
	align-content: center;\r
	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
	text-align: right;\r
	align-items: center;\r
}\r
.pops[type-value="prompt"] input[pops] {\r
	padding: 5px 10px;\r
}\r
.pops[type-value="prompt"] textarea[pops] {\r
	padding: 5px 10px;\r
	resize: none;\r
}\r
.pops[type-value="prompt"] input[pops],\r
.pops[type-value="prompt"] textarea[pops] {\r
	width: 100%;\r
	height: 100%;\r
	outline: 0;\r
	border: 0;\r
	color: rgb(51, 51, 51);\r
}\r
`,gi=`.pops[type-value="loading"] {\r
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
	border: 1px solid rgba(0, 0, 0, 0.2);\r
	border-radius: 5px;\r
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	box-shadow: 0 0 5px rgb(0 0 0 / 50%);\r
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
	border: 0.3em solid rgba(100, 149, 237, 0.1);\r
	border-top: 0.3em solid rgb(100, 149, 237, var(--pops-bd-opacity));\r
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
.pops[type-value="loading"] .pops-loading-content p[pops] {\r
	display: inline-block;\r
	padding: 5px 0px;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
	font-size: inherit;\r
	text-align: center;\r
}\r
`,mi=`.pops[type-value="iframe"] {\r
	--container-title-height: 55px;\r
	transition: width 0.35s ease, height 0.35s ease;\r
}\r
.pops[type-value] .pops-iframe-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.pops[type-value="iframe"] .pops-iframe-title {\r
	width: calc(100% - 0px);\r
	height: var(--container-title-height);\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
}\r
.pops[type-value="iframe"] .pops-iframe-title p[pops] {\r
	width: 100%;\r
	overflow: hidden;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
	align-content: center;\r
}\r
.pops[type-value="iframe"] .pops-iframe-content {\r
	width: 100%;\r
	/*height: calc(100% - var(--container-title-height));*/\r
	flex: 1;\r
	overflow: hidden;\r
	word-break: break-word;\r
}\r
.pops[type-value="iframe"] .pops-iframe-content p[pops] {\r
	padding: 5px 10px;\r
	color: #333;\r
	text-indent: 15px;\r
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
	width: calc(100% - 4px);\r
	height: calc(100% - 4px);\r
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
`,yi=`.pops-tip {\r
	--tooltip-color: #4e4e4e;\r
	--tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	--tooltip-bd-radius: 2px;\r
	--tooltip-font-size: 14px;\r
	--tooltip-padding-top: 13px;\r
	--tooltip-padding-right: 13px;\r
	--tooltip-padding-bottom: 13px;\r
	--tooltip-padding-left: 13px;\r
\r
	--tooltip-arrow--after-color: rgb(78, 78, 78);\r
	--tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	--tooltip-arrow--after-width: 12px;\r
	--tooltip-arrow--after-height: 12px;\r
\r
	padding: var(--tooltip-padding-top) var(--tooltip-padding-right)\r
		var(--tooltip-padding-bottom) var(--tooltip-padding-left);\r
	max-width: 400px;\r
	max-height: 300px;\r
	border-radius: var(--tooltip-bd-radius);\r
	background-color: var(--tooltip-bg-color);\r
	box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\r
	color: var(--tooltip-color);\r
	font-size: var(--tooltip-font-size);\r
}\r
.pops-tip[data-position="absolute"] {\r
	position: absolute;\r
}\r
.pops-tip[data-position="fixed"] {\r
	position: fixed;\r
}\r
/* github的样式 */\r
.pops-tip.github-tooltip {\r
	--tooltip-bg-opacity: 1;\r
	--tooltip-color: rgb(255, 255, 255);\r
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
	box-shadow: 0 1px 7px rgba(0, 0, 0, 0.24), 0 1px 7px rgba(0, 0, 0, 0.12);\r
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
	box-shadow: 0 1px 7px rgba(0, 0, 0, 0.24), 0 1px 7px rgba(0, 0, 0, 0.12);\r
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
`,xi=`.pops[type-value="drawer"] {\r
	position: fixed;\r
	box-sizing: border-box;\r
	display: flex;\r
	flex-direction: column;\r
	box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),\r
		0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);\r
	overflow: hidden;\r
	transition: all 0.3s;\r
}\r
.pops[type-value] .pops-drawer-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.pops[type-value] .pops-drawer-title p[pops] {\r
	line-height: normal;\r
	align-content: center;\r
}\r
\r
.pops-drawer-content {\r
	flex: 1;\r
	overflow: auto;\r
}\r
.pops[type-value="drawer"] .pops-drawer-btn {\r
	padding-top: 10px;\r
	padding-bottom: 10px;\r
}\r
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
`,wi=`.pops[type-value] .pops-folder-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
}\r
.pops[type-value="folder"] .pops-folder-title {\r
	width: 100%;\r
	height: var(--container-title-height);\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
}\r
.pops[type-value="folder"] .pops-folder-title p[pops] {\r
	width: 100%;\r
	overflow: hidden;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
}\r
.pops[type-value="folder"] .pops-folder-content p[pops] {\r
	padding: 5px 10px;\r
	color: rgb(51, 51, 51);\r
	text-indent: 15px;\r
}\r
.pops[type-value="folder"] .pops-folder-content {\r
	width: 100%;\r
	/*height: calc(\r
		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r
	);*/\r
	flex: 1;\r
	overflow: auto;\r
	word-break: break-word;\r
}\r
.pops[type-value="folder"] .pops-folder-btn {\r
	/*position: absolute;\r
	bottom: 0;*/\r
	display: flex;\r
	padding: 10px 10px 10px 10px;\r
	width: 100%;\r
	height: var(--container-bottom-btn-height);\r
	max-height: var(--container-bottom-btn-height);\r
	line-height: normal;\r
	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
	text-align: right;\r
	align-items: center;\r
}\r
.pops-folder-list .cursor-p {\r
	cursor: pointer;\r
}\r
.pops-folder-list a {\r
	background: 0 0;\r
	text-decoration: none;\r
	-webkit-tap-highlight-color: transparent;\r
	color: #05082c;\r
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
	color: rgb(129, 137, 153);\r
	text-align: left;\r
	font-size: 12px;\r
}\r
.pops-folder-list-table__header-row {\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
}\r
.pops-folder-list-table__body-row {\r
	height: 50px;\r
	line-height: normal;\r
	align-content: center;\r
	color: #03081a;\r
	font-size: 12px;\r
}\r
.pops-folder-list-table__body-row:hover {\r
	background: rgb(245, 246, 247, var(--pops-bg-opacity));\r
}\r
.pops-folder-list table th {\r
	border: 0;\r
	border-bottom: 1px solid rgb(247, 248, 250, var(--pops-bg-opacity));\r
}\r
.pops-folder-list table td {\r
	border: 0;\r
	border-bottom: 1px solid rgb(247, 248, 250, var(--pops-bg-opacity));\r
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
.pops-folder-list-file-name-title-text:hover {\r
	text-decoration: none;\r
	color: rgb(6, 167, 255);\r
}\r
.pops-folder-list .text-ellip {\r
	overflow: hidden;\r
	white-space: nowrap;\r
	text-overflow: ellipsis;\r
}\r
.pops-folder-list .content {\r
	color: rgb(129, 137, 153);\r
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
	flex: 0;\r
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
	fill: rgb(212, 215, 222);\r
}\r
.pops-folder-list .pops-folder-icon-active {\r
	fill: rgb(6, 167, 255);\r
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
	color: #333;\r
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
	color: rgb(153, 153, 153);\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {\r
	font-size: 14px;\r
	color: rgb(18, 22, 26);\r
}\r
.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {\r
	width: 16px;\r
	height: 16px;\r
}\r
.pops-folder-list .iconArrow {\r
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)\r
		55% 50%/6px 9px no-repeat;\r
}\r
`,vi=`.pops[type-value="panel"] {\r
	--el-disabled-text-color: #a8abb2;\r
	--el-disabled-bg-color: #f5f7fa;\r
	--el-disabled-border-color: #e4e7ed;\r
	--pops-bg-color: #f2f2f2;\r
	--pops-color: #333;\r
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
	--pops-panel-forms-container-item-bg-color: #ffffff;\r
	--pops-panel-forms-container-item-title-color: #333;\r
	--pops-panel-forms-container-item-border-radius: 6px;\r
	--pops-panel-forms-container-item-margin-top-bottom: 10px;\r
	--pops-panel-forms-container-item-margin-left-right: var(\r
		--pops-panel-forms-margin-left-right\r
	);\r
	--pops-panel-forms-container-li-padding-top-bottom: 12px;\r
	--pops-panel-forms-container-li-padding-left-right: 16px;\r
}\r
.pops[type-value="panel"] {\r
	color: var(--pops-color);\r
	background: var(--pops-bg-color);\r
}\r
.pops[type-value] .pops-panel-title {\r
	display: flex;\r
	align-items: center;\r
	justify-content: space-between;\r
	background: var(--title-bg-color);\r
}\r
\r
.pops[type-value="panel"] .pops-panel-title {\r
	width: 100%;\r
	height: var(--container-title-height);\r
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
}\r
.pops[type-value="panel"] .pops-panel-title p[pops] {\r
	width: 100%;\r
	overflow: hidden;\r
	text-indent: 15px;\r
	text-overflow: ellipsis;\r
	white-space: nowrap;\r
	font-weight: 500;\r
	line-height: normal;\r
	align-content: center;\r
}\r
.pops[type-value="panel"] .pops-panel-content {\r
	width: 100%;\r
	/*height: calc(\r
		100% - var(--container-title-height) - var(--container-bottom-btn-height)\r
	);*/\r
	flex: 1;\r
	overflow: auto;\r
	word-break: break-word;\r
}\r
.pops[type-value="panel"] .pops-panel-btn {\r
	display: flex;\r
	padding: 10px 10px 10px 10px;\r
	width: 100%;\r
	height: var(--container-bottom-btn-height);\r
	max-height: var(--container-bottom-btn-height);\r
	line-height: normal;\r
	border-top: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
	text-align: right;\r
	align-content: center;\r
	align-items: center;\r
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
	border-bottom: 1px solid rgb(229, 229, 229, var(--pops-bd-opacity));\r
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
/* 主文字 */\r
/*section.pops-panel-container\r
	.pops-panel-forms-container-item\r
	.pops-panel-item-left-text\r
	.pops-panel-item-left-main-text {\r
	line-height: 2;\r
}*/\r
/* 描述文字 */\r
section.pops-panel-container\r
	.pops-panel-forms-container-item\r
	.pops-panel-item-left-text\r
	.pops-panel-item-left-desc-text {\r
	line-height: normal;\r
	margin-top: 6px;\r
	font-size: 0.8em;\r
	color: rgb(108, 108, 108);\r
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
	border: 1px solid #dcdfe6;\r
	border-radius: 4px;\r
	background-color: #ffffff;\r
	position: relative;\r
}\r
.pops-panel-input:hover {\r
	box-shadow: 0 0 0 1px #c0c4cc inset;\r
}\r
.pops-panel-input:has(input:focus) {\r
	outline: 0;\r
	border: 1px solid #409eff;\r
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
	background-color: transparent;\r
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
	color: #a8abb2;\r
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
	box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;\r
}\r
.pops-panel-input.pops-input-disabled {\r
	border: none;\r
}\r
.pops-panel-input.pops-input-disabled:hover {\r
	box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;\r
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
	background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	background-image: none;\r
	-webkit-appearance: none;\r
	appearance: none;\r
	box-shadow: 0 0 0 1px #dcdfe6 inset;\r
	border-radius: 0;\r
	transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r
	border: none;\r
}\r
.pops-panel-textarea textarea:hover {\r
	box-shadow: 0 0 0 1px #c0c4cc inset;\r
}\r
.pops-panel-textarea-disable .pops-panel-textarea textarea:hover {\r
	box-shadow: none;\r
}\r
.pops-panel-textarea textarea:focus {\r
	outline: 0;\r
	box-shadow: 0 0 0 1px #409eff inset;\r
}\r
/* textarea的CSS */\r
\r
/* select的CSS */\r
.pops-panel-select select {\r
	height: 32px;\r
	line-height: normal;\r
	align-content: center;\r
	min-width: 200px;\r
	border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));\r
	border-radius: 5px;\r
	text-align: center;\r
	outline: 0;\r
	background: rgb(255, 255, 255, var(--pops-bg-opacity));\r
	box-shadow: none;\r
}\r
.pops-panel-select select:hover {\r
	box-shadow: 0 0 0 1px #c0c4cc inset;\r
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
	/* 左侧内容*/\r
	/* 左侧内容*/\r
	/* 右侧箭头图标*/\r
	/* 右侧箭头图标*/\r
	/* tag*/\r
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
/* <code> */\r
.pops[type-value="panel"] code {\r
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
.pops[type-value="panel"] code::before,\r
.pops[type-value="panel"] code::after {\r
	letter-spacing: -0.2em;\r
	content: "\\00a0";\r
}\r
`,Ai=`.pops-rightClickMenu * {\r
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
	box-shadow: 0px 1px 6px 1px #cacaca;\r
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
	background: #dfdfdf;\r
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
	background: #dfdfdf;\r
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
`;const U={index:si,ninePalaceGridPosition:li,scrollbar:ci,button:di,common:fi,anim:pi,alertCSS:ui,confirmCSS:hi,promptCSS:bi,loadingCSS:gi,iframeCSS:mi,tooltipCSS:yi,drawerCSS:xi,folderCSS:wi,panelCSS:vi,rightClickMenu:Ai},Ae={$data:{},$flag:{isInit:false},init(){if(!this.$flag.isInit){this.$flag.isInit=true;let o=document.createElement("style");nt.setSafeHTML(o,U.anim),u.appendHead(o),this.$data=null,this.$data=u.getKeyFrames(o.sheet),N.setTimeout(()=>{o.remove();},50);}},hasAnim(o){return this.$data.hasOwnProperty(o)}},At={getMaxZIndexNodeInfo(o=1,t=F.document,e){o=Number.isNaN(o)?1:o;const n=2*Math.pow(10,9);let r=0,a=null;function i(l){return l.position!=="static"&&l.display!=="none"}function s(l){if(typeof e=="function"){let d=e(l);if(typeof d=="boolean"&&!d)return}const c=F.window.getComputedStyle(l);if(i(c)){let d=parseInt(c.zIndex);isNaN(d)||d>r&&(r=d,a=l),l.shadowRoot!=null&&l instanceof ShadowRoot&&l.shadowRoot.querySelectorAll("*").forEach(f=>{s(f);});}}return t.querySelectorAll("*").forEach((l,c)=>{s(l);}),r+=o,r>=n&&(r=n),{node:a,zIndex:r}},getPopsMaxZIndex(o=1){o=Number.isNaN(o)?1:o;const t=2*Math.pow(10,9);let e=0,n=null;function r(i){return i.position!=="static"&&i.display!=="none"}Object.keys(Ct).forEach(i=>{let s=Ct[i];for(let l=0;l<s.length;l++){const c=s[l];let d=window.getComputedStyle(c.animElement);if(r(d)){let f=parseInt(d.zIndex);isNaN(f)||f>e&&(e=f,n=c.animElement);}}}),e+=o;let a=e>=t;return a&&(e=t),{zIndex:e,animElement:n,isOverMaxZIndex:a}},getMaxZIndex(o=1){return this.getMaxZIndexNodeInfo(o).zIndex},removeInstance(o,t,e=false){function n(r){var a,i,s,l;typeof r.beforeRemoveCallBack=="function"&&r.beforeRemoveCallBack(r),(a=r==null?void 0:r.animElement)==null||a.remove(),(i=r==null?void 0:r.popsElement)==null||i.remove(),(s=r==null?void 0:r.maskElement)==null||s.remove(),(l=r==null?void 0:r.$shadowContainer)==null||l.remove();}return o.forEach(r=>{r.forEach((a,i)=>{if(e||a.guid===t){let s=a.animElement.getAttribute("anim");if(Ae.hasAnim(s)){let l=s+"-reverse";a.animElement.style.width="100%",a.animElement.style.height="100%",a.animElement.style["animation-name"]=l,Ae.hasAnim(a.animElement.style["animation-name"])?u.on(a.animElement,u.getAnimationEndNameList(),function(){n(a);},{capture:true}):n(a);}else n(a);r.splice(i,1);}});}),o},hide(o,t,e,n,r,a){return new Promise(i=>{let s=r.querySelector(".pops[type-value]");if(o==="drawer"){let c=n;N.setTimeout(()=>{a.style.setProperty("display","none"),["top","bottom"].includes(c.direction)?s.style.setProperty("height","0"):["left","right"].includes(c.direction)?s.style.setProperty("width","0"):console.error("未知direction：",c.direction),i();},c.closeDelay);}else {let c=t.find(d=>d.guid===e);if(c){let d=c;if(d.animElement.style.width="100%",d.animElement.style.height="100%",d.animElement.style["animation-name"]=d.animElement.getAttribute("anim")+"-reverse",Ae.hasAnim(d.animElement.style["animation-name"])){let f=function(){d.animElement.style.display="none",d.maskElement&&(d.maskElement.style.display="none"),u.off(d.animElement,u.getAnimationEndNameList(),f,{capture:true}),i();};u.on(d.animElement,u.getAnimationEndNameList(),f,{capture:true});}else d.animElement.style.display="none",d.maskElement&&(d.maskElement.style.display="none"),i();}}})},show(o,t,e,n,r,a){return new Promise(i=>{let s=r.querySelector(".pops[type-value]");if(o==="drawer"){let c=n;N.setTimeout(()=>{u.css(a,"display","");let d=c.direction,f=c.size.toString();["top","bottom"].includes(d)?s.style.setProperty("height",f):["left","right"].includes(d)?s.style.setProperty("width",f):console.error("未知direction：",d),i();},c.openDelay??0);}else {let c=t.find(d=>d.guid===e);if(c){let d=c;if(d.animElement.style.width="",d.animElement.style.height="",d.animElement.style["animation-name"]=d.animElement.getAttribute("anim").replace("-reverse",""),Ae.hasAnim(d.animElement.style["animation-name"])){let f=function(){u.off(d.animElement,u.getAnimationEndNameList(),f,{capture:true}),i();};d.animElement.style.display="",d.maskElement&&(d.maskElement.style.display=""),u.on(d.animElement,u.getAnimationEndNameList(),f,{capture:true});}else d.animElement.style.display="",d.maskElement&&(d.maskElement.style.display=""),i();}}})},close(o,t,e,n,r){return new Promise(a=>{let i=r.querySelector(".pops[type-value]"),s=n;function l(){function c(f){f.propertyName==="transform"&&(u.off(i,u.getTransitionEndNameList(),void 0,c),At.removeInstance([t],e),a());}if(u.on(i,u.getTransitionEndNameList(),c),getComputedStyle(i).transform!=="none"){u.trigger(i,u.getTransitionEndNameList(),void 0,true);return}["top"].includes(s.direction)?i.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(s.direction)?i.style.setProperty("transform","translateY(100%)"):["left"].includes(s.direction)?i.style.setProperty("transform","translateX(-100%)"):["right"].includes(s.direction)?i.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",s.direction);}o==="drawer"?N.setTimeout(()=>{l();},s.closeDelay):(At.removeInstance([t],e),a());})},drag(o,t){t=Object.assign({limit:true,extraDistance:3,container:F.globalThis,triggerClick:true},t);let e=false,n=0,r=0,a=N.AnyTouch(),i=new a(t.dragElement,{preventDefault(h){return typeof t.preventEvent=="function"?t.preventEvent(h):true}});u.css(t.dragElement,{cursor:"move"});function s(h){var E;let b=0,A=0,T=F.globalThis.getComputedStyle(h).transform;if(T!=="none"&&T!=null&&T!==""){let M=(E=T.match(/\((.+)\)/))==null?void 0:E[1].split(",");b=Math.abs(parseInt(M[4])),A=Math.abs(parseInt(M[5]));}return {transformLeft:b,transformTop:A}}function l(h){let b=h.style.transitionDuration;return globalThis.getComputedStyle(h).transitionDuration!=="0s"&&(h.style.transitionDuration="0s"),()=>{h.style.transitionDuration=b;}}function c(h){return h=h??globalThis,{width:u.width(h),height:u.height(h)}}function d(h){if(h=h??globalThis,N.isWin(h))return {left:0,top:0};{let b=h.getBoundingClientRect();return {left:b.left,top:b.top}}}let f=s(o),p=f.transformLeft,g=f.transformTop,v=null;i.on("pan",function(h){if(!e){e=true;let T=t.dragElement.getBoundingClientRect();n=h.x-T.left,r=h.y-T.top,f=s(o),p=f.transformLeft,g=f.transformTop,v=l(o);}let b=h.x-n+p,A=h.y-r+g;if(h.phase==="move"){if(t.limit){let T=c(t.container).width-u.width(o)+p,{left:E,top:M}=d(t.container),L=c(t.container).height-u.height(o)+g;b>T&&(b=T),A>L&&(A=L),b-t.extraDistance*2<E+p?(b=E+p,b+=t.extraDistance):b-=t.extraDistance,A-t.extraDistance*2<M+g?(A=M+g,A+=t.extraDistance):A-=t.extraDistance;}typeof t.moveCallBack=="function"&&t.moveCallBack(o,b,A),u.css(o,{left:b+"px",top:A+"px"});}h.phase==="end"&&(e=false,typeof v=="function"&&(v(),v=null),typeof t.endCallBack=="function"&&t.endCallBack(o,b,A));}),t.triggerClick&&i.on(["tap"],function(h){h.changedPoints.forEach(b=>{u.trigger(b.target,"click",void 0,true);});});},sortElementListByProperty(o,t,e=true){if(typeof e!="boolean")throw new TypeError("参数 sortByDesc 必须为boolean类型");if(o==null||t==null)throw new Error("获取前面的值或后面的值的方法不能为空");return function(n,r){var a=o(r),i=t(n);return e?i>a?-1:i<a?1:0:i<a?-1:i>a?1:0}}},Lt={config:{},setGlobalConfig(o){Reflect.ownKeys(o).forEach(t=>{Reflect.set(Lt.config,t,Reflect.get(o,t));});},getGlobalConfig(){let o={};return Object.keys(Lt.config).forEach(t=>{let e=Reflect.get(Lt.config,t);if(t==="style"){let n=e==null?"":typeof e=="function"?e():e;typeof n=="string"&&(o.style=n);}else if(t==="zIndex"){let n=e==null?"":typeof e=="function"?e():e;if(typeof n=="string"){let r=n=parseInt(n);isNaN(r)||(o.zIndex=r);}else isNaN(n)||(o.zIndex=n);}else if(t==="mask"){let n=Lt.config.mask==null?{}:Lt.config.mask;typeof n=="object"&&n!=null&&(o.mask=n);}else Reflect.set(o,t,e);}),o}};var Ti=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,Ei=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,Si=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,Ci=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,ki=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
	<path\r
		fill="currentColor"\r
		d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,Mi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,Li=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,$i=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,Ii=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,_i=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,Oi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Ri=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Di=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,Pi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
		fill="currentColor"></path>\r
</svg>\r
`,Hi=`<svg\r
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
`,Bi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,Ni=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,Ui=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,Vi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,zi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,Gi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,Fi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,ji=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,qi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,Wi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,Ki=`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
	<path\r
		d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
	<path\r
		d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,Xi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,Qi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`;const ut={$data:{min:Ti,mise:Ei,max:Si,close:Ci,edit:ki,share:Mi,delete:Li,search:$i,upload:Ii,loading:_i,next:Oi,prev:Ri,eleme:Di,elemePlus:Pi,chromeFilled:Hi,cpu:Bi,videoPlay:Ni,videoPause:Ui,headset:Vi,monitor:zi,documentCopy:Gi,picture:Fi,circleClose:ji,view:qi,hide:Wi,keyboard:Ki,arrowRight:Xi,arrowLeft:Qi},hasIcon(o){return Object.keys(ut.$data).includes(o)},getIcon(o){return ut.$data[o]},deleteIcon(o){return Reflect.deleteProperty(ut.$data,o)},setIcon(o,t){Reflect.set(ut.$data,o,t);}},Y={getMaskHTML(o,t=101,e=""){return t=t-100,e.startsWith(";")&&(e=e.replace(";","")),`<div class="pops-mask" data-guid="${o}" style="z-index:${t};${e}"></div>`},getAnimHTML(o,t,e,n="",r="",a){let i=e,s="",l="",c=i.position||"";e.zIndex!=null&&(s+=`z-index: ${a};`,l+=`z-index: ${a};`),i.width!=null&&(l+=`width: ${i.width};`),i.height!=null&&(l+=`height: ${i.height};`);let d=r.trim()!=="";return `
		<div class="pops-anim" anim="${i.animation||""}" style="${s}" data-guid="${o}">${e.style!=null?`<style tyle="text/css">${e.style}</style>`:""}
			<div class="pops ${e.class||""}" data-bottom-btn="${d}" type-value="${t}" style="${l}" position="${c}" data-guid="${o}">${n}</div>
		</div>`},getHeaderBtnHTML(o,t){var i,s,l,c,d;if(!t.btn)return "";let e=t;if(o!=="iframe"&&!((s=(i=e.btn)==null?void 0:i.close)!=null&&s.enable))return "";let n="",r="",a=t;if(o==="iframe"&&((l=a.topRightButton)==null?void 0:l.trim())!==""){let f="";a.topRightButton.split("|").forEach(p=>{p=p.toLowerCase(),f+=`
                <button class="pops-header-control" type="${p}">
                    <i class="pops-icon">${ut.getIcon(p)}</i>
                </button>`;}),n=`
            <div class="pops-header-controls" data-margin>${f}</div>`;}else (d=(c=e.btn)==null?void 0:c.close)!=null&&d.enable&&(r=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    	<i class="pops-icon">${ut.getIcon("close")}</i>
                    </button>
                </div>`),n=r;return n},getBottomBtnHTML(o,t){var l,c,d,f,p,g,v,h,b,A,T,E,M,L;if(!t.btn)return "";let e=t;if(!((c=(l=t.btn)==null?void 0:l.ok)!=null&&c.enable||(f=(d=e.btn)==null?void 0:d.cancel)!=null&&f.enable||(g=(p=e.btn)==null?void 0:p.other)!=null&&g.enable))return "";let n="",r="",a="",i="",s="";if(t.btn.position&&(n+=`justify-content: ${t.btn.position};`),e.btn.reverse&&(n+="flex-direction: row-reverse;"),(h=(v=t.btn)==null?void 0:v.ok)!=null&&h.enable){let k="";(t.btn.ok.size==="large"||t.btn.ok.size==="small")&&(k="pops-button-"+t.btn.ok.size);let G="",H=e.btn.ok.icon;if(H!==""){let q="";ut.hasIcon(H)?q=ut.getIcon(H):q=H,q=q||"",G=`<i class="pops-bottom-icon" is-loading="${t.btn.ok.iconIsLoading}">${q}</i>`;}a=`
            <button 
                    class="pops-${o}-btn-ok ${k}"
                    type="${(b=e.btn.ok)==null?void 0:b.type}"
					data-has-icon="${(e.btn.ok.icon||"")!==""}"
                    data-rightIcon="${(A=e.btn.ok)==null?void 0:A.rightIcon}"
            >${G}<span>${t.btn.ok.text}</span>
            </button>`;}if((E=(T=e.btn)==null?void 0:T.cancel)!=null&&E.enable){let k="";(e.btn.cancel.size==="large"||e.btn.cancel.size==="small")&&(k="pops-button-"+e.btn.cancel.size);let G="",H=e.btn.cancel.icon;if(H!==""){let q="";ut.hasIcon(H)?q=ut.getIcon(H):q=H,q=q||"",G=`<i class="pops-bottom-icon" is-loading="${e.btn.cancel.iconIsLoading}">${q}</i>`;}i=`
            <button
                    class="pops-${o}-btn-cancel ${k}"
                    type="${e.btn.cancel.type}"
					data-has-icon="${(e.btn.cancel.icon||"")!==""}"
                    data-rightIcon="${e.btn.cancel.rightIcon}"
            >${G}<span>${e.btn.cancel.text}</span>
            </button>`;}if((L=(M=e.btn)==null?void 0:M.other)!=null&&L.enable){let k="";(e.btn.other.size==="large"||e.btn.other.size==="small")&&(k="pops-button-"+e.btn.other.size);let G="",H=e.btn.other.icon;if(H!==""){let q="";ut.hasIcon(H)&&(q=ut.getIcon(H)),q=q||"",G=`<i class="pops-bottom-icon" is-loading="${e.btn.other.iconIsLoading}">${q}</i>`;}s=`
            <button
                    class="pops-${o}-btn-other ${k}"
                    type="${e.btn.other.type}"
					data-has-icon="${(e.btn.other.icon||"")!==""}"
                    data-rightIcon="${e.btn.other.rightIcon}"
            >${G}<span>${e.btn.other.text}</span>
            </button>`;}if(e.btn.merge){let k="display: flex;";e.btn.mergeReverse?k+="flex-direction: row-reverse;":k+="flex-direction: row;",r=`
            <div class="pops-${o}-btn" style="${n}">${s}<div 
                    class="pops-${o}-btn-merge"
                    style="${k}">${a}${i}</div>
            </div>
            `;}else r=`<div class="pops-${o}-btn" style="${n}">${a}${i}${s}</div>`;return r},getHeaderStyle(o,t){var e,n,r,a;return {headerStyle:(e=t==null?void 0:t.title)!=null&&e.html&&((n=t==null?void 0:t.title)==null?void 0:n.style)||"",headerPStyle:(r=t==null?void 0:t.title)!=null&&r.html?"":((a=t==null?void 0:t.title)==null?void 0:a.style)||""}},getContentStyle(o,t){var e,n,r,a;return {contentStyle:(e=t==null?void 0:t.content)!=null&&e.html&&((n=t==null?void 0:t.content)==null?void 0:n.style)||"",contentPStyle:(r=t==null?void 0:t.content)!=null&&r.html?"":((a=t==null?void 0:t.content)==null?void 0:a.style)||""}},parseElement(o){return u.parseTextToDOM(o)}},_={handlerShadow(o){let t=document.createElement("div");if(t.className="pops-shadow-container",o.useShadowRoot){let e=t.attachShadow({mode:"open"});return {$shadowContainer:t,$shadowRoot:e}}else return {$shadowContainer:t,$shadowRoot:t}},handleInit(o,t){if(Ae.init(),!!arguments.length)if(Array.isArray(t))for(let e=0;e<t.length;e++)this.handleInit(o,t[e]);else {let e=u.createElement("style",{innerHTML:t},{"data-type":"PopsHandler.handleInit"});o.appendChild(e);}},handleMask(o={}){let t={maskElement:u.parseTextToDOM(o.maskHTML)},e=false;function n(a){u.preventEvent(a);let i=Ct[o.type];function s(){if(o.config.mask.clickEvent.toClose)return At.close(o.type,i,o.guid,o.config,o.animElement);if(o.config.mask.clickEvent.toHide)return At.hide(o.type,i,o.guid,o.config,o.animElement,t.maskElement)}return typeof o.config.mask.clickCallBack=="function"?o.config.mask.clickCallBack(s,o.config):s(),false}if(o.config.mask.clickEvent.toClose||o.config.mask.clickEvent.toHide){let a=function(i){var s;return !!(((s=i==null?void 0:i.localName)==null?void 0:s.toLowerCase())==="div"&&i.className&&i.className==="pops-anim"&&i.hasAttribute("anim"))};u.on(o.animElement,["touchstart","mousedown"],void 0,i=>{let s=i.composedPath()[0];e=a(s);}),u.on(o.animElement,"click",void 0,i=>{let s=i.composedPath()[0];if(a(s)&&e)return n(i)}),u.on(t.maskElement,"click",void 0,i=>{e=true,n(i);});}return t},handleQueryElement(o,t){return {popsElement:o.querySelector(".pops[type-value"),btnOkElement:o.querySelector(`.pops-${t}-btn-ok`),btnCancelElement:o.querySelector(`.pops-${t}-btn-cancel`),btnOtherElement:o.querySelector(`.pops-${t}-btn-other`),titleElement:o.querySelector(`.pops-${t}-title`),inputElement:o.querySelector(`.pops-${t}-content textarea[pops]`)?o.querySelector(`.pops-${t}-content textarea[pops]`):o.querySelector(`.pops-${t}-content input[pops]`),headerControlsElement:o.querySelector(".pops-header-controls"),iframeElement:o.querySelector("iframe[pops]"),loadingElement:o.querySelector(".pops-loading"),contentElement:o.querySelector(`.pops-${t}-content`),contentAsideElement:o.querySelector(`.pops-${t}-content aside.pops-${t}-aside`),contentSectionContainerElement:o.querySelector(`.pops-${t}-content section.pops-${t}-container`),contentLoadingElement:o.querySelector(`.pops-${t}-content-global-loading`),headerMinBtnElement:o.querySelector(".pops-header-control[type='min']"),headerMaxBtnElement:o.querySelector(".pops-header-control[type='max']"),headerMiseBtnElement:o.querySelector(".pops-header-control[type='mise']"),headerCloseBtnElement:o.querySelector(".pops-header-control[type='close']"),folderListElement:o.querySelector(".pops-folder-list"),folderListHeaderElement:o.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),folderListHeaderRowElement:o.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),folderListBodyElement:o.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),folderFileListBreadcrumbPrimaryElement:o.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),folderListSortFileNameElement:o.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),folderListSortLatestTimeElement:o.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),folderListSortFileSizeElement:o.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventDetails(o,t,e,n,r,a,i,s){return {$shadowContainer:t,$shadowRoot:e,element:r,animElement:r,popsElement:a,maskElement:i,mode:n,guid:o,close(){return At.close(n,Ct[n],o,s,r)},hide(){return At.hide(n,Ct[n],o,s,r,i)},show(){return At.show(n,Ct[n],o,s,r,i)}}},handleLoadingEventDetails(o,t,e,n,r,a){return {element:e,animElement:e,popsElement:n,maskElement:r,mode:t,guid:o,close(){return At.close(t,Ct[t],o,a,e)},hide(){return At.hide(t,Ct[t],o,a,e,r)},show(){return At.show(t,Ct[t],o,a,e,r)}}},handleResultDetails(o){let t=Object.assign({},o);return N.delete(t,"type"),N.delete(t,"function"),t},handleClickEvent(o,t,e,n){u.on(t,"click",r=>{n(Object.assign(e,{type:o}),r);},{capture:true});},handleKeyboardEvent(o,t=[],e){let n=function(r){let a=r.code||r.key,i=r.charCode||r.keyCode||r.which;t.includes("ctrl")&&!r.ctrlKey||t.includes("alt")&&!r.altKey||t.includes("meta")&&!r.metaKey||t.includes("shift")&&!r.shiftKey||(typeof o=="string"&&o===a?e&&e(r):typeof o=="number"&&o===i&&e&&e(r));};return u.on(F.globalThis,"keydown",n,{capture:true}),{removeKeyboardEvent(){u.off(globalThis,"keydown",n,{capture:true});}}},handlePromptClickEvent(o,t,e,n,r){u.on(e,"click",a=>{let i={type:o,text:t.value};r(Object.assign(n,i),a);},{capture:true});},handleZIndex(o){return typeof o=="function"?o():o},handleOnly(o,t){if(t.only)if(o==="loading"||o==="tooltip"||o==="rightClickMenu"){let e=Ct[o];e&&At.removeInstance([e],"",true);}else At.removeInstance([Ct.alert,Ct.confirm,Ct.prompt,Ct.iframe,Ct.drawer,Ct.folder,Ct.panel],"",true);else {let e=t.zIndex;t.zIndex=()=>{const{zIndex:n}=At.getPopsMaxZIndex(_.handleZIndex(e)+100);return n};}return t},handlePush(o,t){Ct[o].push(t);}},Yi=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:true,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback:function(o){o.close();}},close:{enable:true,callback:function(o){o.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Gr={init(o){const t=N.getRandomGUID(),e="alert";let n=Yi();n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.button,U.anim,U.common,U.alertCSS]);let i=_.handleZIndex(n.zIndex),s=Y.getMaskHTML(t,i),l=Y.getHeaderBtnHTML(e,n),c=Y.getBottomBtnHTML(e,n),{headerStyle:d,headerPStyle:f}=Y.getHeaderStyle(e,n),{contentStyle:p,contentPStyle:g}=Y.getContentStyle(e,n),v=Y.getAnimHTML(t,e,n,`
			<div class="pops-alert-title" style="text-align: ${n.title.position};${d}">${n.title.html?n.title.text:`<p pops style="${f}">${n.title.text}</p>`}${l}</div>
			<div class="pops-alert-content" style="${p}">${n.content.html?n.content.text:`<p pops style="${g}">${n.content.text}</p>`}</div>${c}`,c,i),h=Y.parseElement(v),{popsElement:b,headerCloseBtnElement:A,btnOkElement:T,titleElement:E}=_.handleQueryElement(h,e),M=null,L=[h];n.mask.enable&&(M=_.handleMask({type:e,guid:t,config:n,animElement:h,maskHTML:s}).maskElement,L.push(M));let k=_.handleEventDetails(t,r,a,e,h,b,M,n);return _.handleClickEvent("close",A,k,n.btn.close.callback),_.handleClickEvent("ok",T,k,n.btn.ok.callback),u.append(a,L),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r),M!=null&&h.after(M),_.handlePush(e,{guid:t,animElement:h,popsElement:b,maskElement:M,$shadowContainer:r,$shadowRoot:a}),n.drag&&At.drag(b,{dragElement:E,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),_.handleResultDetails(k)}},Ji=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(o){o.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(o){o.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(o){o.close();}},close:{enable:true,callback(o){o.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Zi={init(o){const t=N.getRandomGUID(),e="confirm";let n=Ji();n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.button,U.anim,U.common,U.confirmCSS]);let i=_.handleZIndex(n.zIndex),s=Y.getMaskHTML(t,i),l=Y.getHeaderBtnHTML(e,n),c=Y.getBottomBtnHTML(e,n),{headerStyle:d,headerPStyle:f}=Y.getHeaderStyle(e,n),{contentStyle:p,contentPStyle:g}=Y.getContentStyle(e,n),v=Y.getAnimHTML(t,e,n,`
            <div class="pops-confirm-title" style="text-align: ${n.title.position};${d}">${n.title.html?n.title.text:`<p pops style="${f}">${n.title.text}</p>`}${l}</div>
                        <div class="pops-confirm-content" style="${p}">${n.content.html?n.content.text:`<p pops style="${g}">${n.content.text}</p>`}</div>${c}`,c,i),h=Y.parseElement(v),{popsElement:b,titleElement:A,headerCloseBtnElement:T,btnOkElement:E,btnCancelElement:M,btnOtherElement:L}=_.handleQueryElement(h,e),k=null,G=[h];n.mask.enable&&(k=_.handleMask({type:e,guid:t,config:n,animElement:h,maskHTML:s}).maskElement,G.push(k));let H=_.handleEventDetails(t,r,a,e,h,b,k,n);return _.handleClickEvent("close",T,H,n.btn.close.callback),_.handleClickEvent("ok",E,H,n.btn.ok.callback),_.handleClickEvent("cancel",M,H,n.btn.cancel.callback),_.handleClickEvent("other",L,H,n.btn.other.callback),u.append(a,G),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r),k!=null&&h.after(k),_.handlePush(e,{guid:t,animElement:h,popsElement:b,maskElement:k,$shadowContainer:r,$shadowRoot:a}),n.drag&&At.drag(b,{dragElement:A,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),_.handleResultDetails(H)}},ts=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"",select:false,password:false,row:false,focus:true,placeholder:"默认提示",style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"success",callback(o){o.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(o){o.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(o){o.close();}},close:{enable:true,callback(o){o.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),es={init(o){const t=N.getRandomGUID(),e="prompt";let n=ts();n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.button,U.anim,U.common,U.promptCSS]);let i=_.handleZIndex(n.zIndex),s=Y.getMaskHTML(t,i),l=Y.getHeaderBtnHTML(e,n),c=Y.getBottomBtnHTML(e,n),{headerStyle:d,headerPStyle:f}=Y.getHeaderStyle(e,n),{contentPStyle:p}=Y.getContentStyle(e,n),g=Y.getAnimHTML(t,e,n,`
            <div class="pops-prompt-title" style="text-align: ${n.title.position};${d}">${n.title.html?n.title.text:`<p pops style="${f}">${n.title.text}</p>`}${l}</div>
            <div class="pops-prompt-content" style="${p}">${n.content.row?'<textarea pops="" placeholder="'+n.content.placeholder+'"></textarea>':'<input pops="" placeholder="'+n.content.placeholder+'" type="'+(n.content.password?"password":"text")+'">'}</div>${c}`,c,i),v=Y.parseElement(g),{popsElement:h,inputElement:b,headerCloseBtnElement:A,btnOkElement:T,btnCancelElement:E,btnOtherElement:M,titleElement:L}=_.handleQueryElement(v,e),k=null,G=[v];n.mask.enable&&(k=_.handleMask({type:e,guid:t,config:n,animElement:v,maskHTML:s}).maskElement,G.push(k));let H=_.handleEventDetails(t,r,a,e,v,h,k,n);return b.value=n.content.text,_.handlePromptClickEvent("close",b,A,H,n.btn.close.callback),_.handlePromptClickEvent("ok",b,T,H,n.btn.ok.callback),_.handlePromptClickEvent("cancel",b,E,H,n.btn.cancel.callback),_.handlePromptClickEvent("other",b,M,H,n.btn.other.callback),u.append(a,G),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r),k!=null&&v.after(k),_.handlePush(e,{guid:t,animElement:v,popsElement:h,maskElement:k,$shadowContainer:r,$shadowRoot:a}),n.drag&&At.drag(h,{dragElement:L,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),n.content.focus&&b.focus(),n.content.select&&b.select(),_.handleResultDetails(H)}},ns=()=>({parent:document.body,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:true,class:"",only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:false,isAbsolute:false,style:null,addIndexCSS:true}),Cn={init(o){let t=ns();t=N.assign(t,Lt.getGlobalConfig()),t=N.assign(t,o);let e=N.getRandomGUID();const n="loading";t=_.handleOnly(n,t);let r=_.handleZIndex(t.zIndex),a=Y.getMaskHTML(e,r),{contentPStyle:i}=Y.getContentStyle("loading",t),s=Y.getAnimHTML(e,n,t,`
            <div class="pops-loading-content">${t.addIndexCSS?`
                <style data-model-name="index">${U.index}</style>
                <style data-model-name="anim">${U.anim}</style>
                <style data-model-name="common">${U.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${U.loadingCSS}
                </style>
            ${t.style!=null?`<style>${t.style}</style>`:""}
            	<p pops style="${i}">${t.content.text}</p>
            </div>`,"",r),l=Y.parseElement(s),{popsElement:c}=_.handleQueryElement(l,n),d=null,f=[l];t.mask.enable&&(d=_.handleMask({type:n,guid:e,config:t,animElement:l,maskHTML:a}).maskElement,f.push(d));let p=_.handleLoadingEventDetails(e,n,l,c,d,t);return u.append(t.parent,f),d!=null&&l.after(d),_.handlePush(n,{guid:e,animElement:l,popsElement:c,maskElement:d}),t.isAbsolute&&(u.css(l,"position","absolute !important"),d&&u.css(d,"position","absolute !important")),_.handleResultDetails(p)}},rs=()=>({title:{position:"center",text:"",html:false,style:""},loading:{enable:true,icon:true,text:""},useShadowRoot:true,class:"",url:window.location.href,only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:true,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:"300px",height:"250px",topRightButton:"min|max|mise|close",sandbox:false,forbiddenScroll:false,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}}),as={init(o){var j;const t=N.getRandomGUID(),e="iframe";let n=rs();if(n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n.url==null)throw new Error("config.url不能为空");n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.anim,U.common,U.iframeCSS]);let i=n.animation!=null&&n.animation!=""?"position:absolute;":"",s=_.handleZIndex(n.zIndex),l=Y.getMaskHTML(t,s,i),c=Y.getHeaderBtnHTML(e,n),d='<div class="pops-loading"></div>',f=n.title.text.trim()!==""?n.title.text:n.url,{headerStyle:p,headerPStyle:g}=Y.getHeaderStyle(e,n),v=Y.getAnimHTML(t,e,n,`
            <div class="pops-iframe-title" style="text-align: ${n.title.position};${p}">${n.title.html?f:`<p pops style="${g}">${f}</p>`}${c}</div>
			<div class="pops-iframe-content">
                <div class="pops-iframe-content-global-loading"></div>
                <iframe src="${n.url}" pops ${n.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
			</div>${n.loading.enable?d:""}`,"",s),h=Y.parseElement(v),{popsElement:b,headerCloseBtnElement:A,headerControlsElement:T,titleElement:E,iframeElement:M,loadingElement:L,contentLoadingElement:k,headerMinBtnElement:G,headerMaxBtnElement:H,headerMiseBtnElement:q}=_.handleQueryElement(h,e),st=F.document.querySelector(".pops-iframe-container");st||(st=F.document.createElement("div"),st.className="pops-iframe-container",st.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;",u.appendBody(st));let bt=null,C=[h];n.mask.enable&&(bt=_.handleMask({type:e,guid:t,config:n,animElement:h,maskHTML:l}).maskElement,C.push(bt));let w=_.handleEventDetails(t,r,a,e,h,b,bt,n);w.iframeElement=M,u.on(h,u.getAnimationEndNameList(),function(){h.style.width="0%",h.style.height="0%";}),u.on(M,"load",()=>{L==null||L.remove(),k.style.animation="iframeLoadingChange_85 0.3s forwards",u.on(k,u.getAnimationEndNameList(),()=>{k.remove();}),n.title.text.trim()===""&&M.contentDocument&&(E.querySelector("p").innerText=M.contentDocument.title),n.loadEndCallBack(w);}),u.append(a,C),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),st.appendChild(r),bt!=null&&h.after(bt),n.drag&&At.drag(b,{dragElement:E,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack});const y="type-module";let x="",$="",R=false;return u.on(G,"click",et=>{var dt,W;et.preventDefault(),et.stopPropagation(),x=b.style.left,$=b.style.top,b.classList.add("pops-iframe-unset-top"),b.classList.add("pops-iframe-unset-left"),b.classList.add("pops-iframe-unset-transform"),b.style.transitionDuration="",b.setAttribute(y,"min"),T.setAttribute("type","min"),H.style.setProperty("display","none"),q.style.setProperty("display",""),typeof((W=(dt=n==null?void 0:n.btn)==null?void 0:dt.min)==null?void 0:W.callback)=="function"&&n.btn.min.callback(w,et);},{capture:true}),u.on(H,"click",et=>{var dt,W;et.preventDefault(),et.stopPropagation(),b.getAttribute(y)!=="min"&&(x=b.style.left,$=b.style.top),R=true,b.style.transitionDuration="",b.style.transform="",b.removeAttribute(y),b.classList.add("pops-iframe-unset-transition"),b.classList.add("pops-iframe-unset-left"),b.classList.add("pops-iframe-unset-top"),b.classList.add("pops-iframe-unset-transform"),b.classList.remove("pops-iframe-unset-transition"),b.setAttribute(y,"max"),T.setAttribute("type","max"),H.style.setProperty("display","none"),q.style.setProperty("display",""),typeof((W=(dt=n==null?void 0:n.btn)==null?void 0:dt.max)==null?void 0:W.callback)=="function"&&n.btn.max.callback(w,et);},{capture:true}),(j=q==null?void 0:q.style)==null||j.setProperty("display","none"),u.on(q,"click",et=>{var dt,W;et.preventDefault(),et.stopPropagation(),R&&b.getAttribute(y)==="min"?(b.classList.add("pops-iframe-unset-transition"),b.classList.add("pops-iframe-unset-left"),b.classList.add("pops-iframe-unset-top"),b.classList.add("pops-iframe-unset-transform"),b.classList.remove("pops-iframe-unset-transition"),b.setAttribute(y,"max"),T.setAttribute("type","max")):(R=false,b.style.left=x,b.style.top=$,b.style.transitionDuration="",b.style.transform="",T.removeAttribute("type"),b.removeAttribute(y),b.classList.remove("pops-iframe-unset-top"),b.classList.remove("pops-iframe-unset-left"),b.classList.remove("pops-iframe-unset-transform"),H.style.setProperty("display",""),q.style.setProperty("display","none")),typeof((W=(dt=n==null?void 0:n.btn)==null?void 0:dt.mise)==null?void 0:W.callback)=="function"&&n.btn.mise.callback(w,et);},{capture:true}),u.on(A,"click",et=>{var dt,W;et.preventDefault(),et.stopPropagation(),At.removeInstance([Ct.iframe],t,false),typeof((W=(dt=n==null?void 0:n.btn)==null?void 0:dt.close)==null?void 0:W.callback)=="function"&&n.btn.close.callback(w,et);},{capture:true}),_.handlePush(e,{guid:t,animElement:h,popsElement:b,maskElement:bt,$shadowContainer:r,$shadowRoot:a}),_.handleResultDetails(w)}},os=()=>({title:{enable:true,position:"center",text:"默认标题",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(o){o.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(o){o.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(o){o.close();}},close:{enable:true,callback(o){o.close();}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",zIndex:1e4,only:false,direction:"right",size:"30%",lockScroll:false,closeOnPressEscape:true,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:false}),is={init(o){const t=N.getRandomGUID(),e="drawer";let n=os();n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.button,U.anim,U.common,U.drawerCSS]);let i=_.handleZIndex(n.zIndex),s=Y.getMaskHTML(t,i),l=Y.getHeaderBtnHTML(e,n),c=Y.getBottomBtnHTML(e,n),{headerStyle:d,headerPStyle:f}=Y.getHeaderStyle(e,n),{contentStyle:p,contentPStyle:g}=Y.getContentStyle(e,n),v=Y.getAnimHTML(t,e,n,`
            ${n.title.enable?`
            <div class="pops-${e}-title" style="${d}">${n.title.html?n.title.text:`<p pops style="width: 100%;text-align: ${n.title.position};${f}">${n.title.text}</p>`}${l}</div>`:""}
            <div class="pops-${e}-content" style="${p}">${n.content.html?n.content.text:`<p pops style="${g}">${n.content.text}</p>`}</div>${c}`,c,i),h=Y.parseElement(v),{popsElement:b,headerCloseBtnElement:A,btnCancelElement:T,btnOkElement:E,btnOtherElement:M}=_.handleQueryElement(h,e),L=b,k=A,G=T,H=E,q=M,st=null,bt=[h];n.mask.enable&&(st=_.handleMask({type:e,guid:t,config:n,animElement:h,maskHTML:s}).maskElement,bt.push(st));let C=_.handleEventDetails(t,r,a,e,h,L,st,n);return L.setAttribute("direction",n.direction),n.direction==="top"?(L.style.setProperty("height","0"),L.style.setProperty("border-radius",`0px 0px ${n.borderRadius}px ${n.borderRadius}px`)):n.direction==="bottom"?(L.style.setProperty("height","0"),L.style.setProperty("border-radius",`${n.borderRadius}px ${n.borderRadius}px 0px 0px`)):n.direction==="left"?(L.style.setProperty("width","0"),L.style.setProperty("border-radius",`0px ${n.borderRadius}px 0px ${n.borderRadius}px`)):n.direction==="right"&&(L.style.setProperty("width","0"),L.style.setProperty("border-radius",`${n.borderRadius}px 0px ${n.borderRadius}px 0px`)),n.closeOnPressEscape&&_.handleKeyboardEvent("Escape",[],function(){C.close();}),[{type:"close",ele:k},{type:"cancel",ele:G},{type:"ok",ele:H},{type:"other",ele:q}].forEach(x=>{_.handleClickEvent(x.type,x.ele,C,$=>{typeof n.btn[x.type].callback=="function"&&n.btn[x.type].callback($);});}),bt.forEach(x=>{x.style.setProperty("display","none"),["top"].includes(n.direction)?(L.style.setProperty("height",n.size.toString()),L.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(n.direction)?(L.style.setProperty("height",n.size.toString()),L.style.setProperty("transform","translateY(100%)")):["left"].includes(n.direction)?(L.style.setProperty("width",n.size.toString()),L.style.setProperty("transform","translateX(-100%)")):["right"].includes(n.direction)&&(L.style.setProperty("width",n.size.toString()),L.style.setProperty("transform","translateX(100%)")),x.style.setProperty("display","");}),u.append(a,bt),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r),N.setTimeout(()=>{N.setTimeout(()=>{L.style.setProperty("transform","");},n.openDelay);},50),st!=null&&h.after(st),_.handlePush(e,{guid:t,animElement:h,popsElement:L,maskElement:st,$shadowContainer:r,$shadowRoot:a}),_.handleResultDetails(C)}},ss=()=>({title:{text:"pops.Folder",position:"center",html:false,style:""},sort:{name:"latestTime",isDesc:false,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}],btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(o){o.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(o){o.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(o){o.close();}},close:{enable:true,callback(o){o.close();}}},useShadowRoot:true,class:"",only:false,width:"500px",height:"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),gt={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="},ls={init(o){const t=N.getRandomGUID(),e="folder";let n=ss();n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.button,U.anim,U.common,U.folderCSS]),gt.docx=gt.doc,gt.rtf=gt.doc,gt.xlsx=gt.xls,gt.pptx=gt.ppt,gt.dmg=gt.ipa,gt.json=gt.js;let i=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],s=["jpg","jpeg","ico","webp"],l=["htm","py","vue","bat","sh","vbs","java","kt"],c=["apk","apkm","xapk"];i.forEach(K=>{gt[K]=gt.zip;}),s.forEach(K=>{gt[K]=gt.png;}),l.forEach(K=>{gt[K]=gt.html;}),c.forEach(K=>{gt[K]=gt.apk;}),o!=null&&o.folder&&(n.folder=o.folder);let d=_.handleZIndex(n.zIndex),f=Y.getMaskHTML(t,d),p=Y.getHeaderBtnHTML(e,n),g=Y.getBottomBtnHTML(e,n),{headerStyle:v,headerPStyle:h}=Y.getHeaderStyle(e,n),b=Y.getAnimHTML(t,e,n,`
            <div class="pops-folder-title" style="text-align: ${n.title.position};${v}">${n.title.html?n.title.text:`<p pops style="${h}">${n.title.text}</p>`}${p}</div>
			<div class="pops-folder-content ${N.isPhone()?"pops-mobile-folder-content":""}">
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
                        ${N.isPhone()?'<col width="100%">':`
                            <col width="52%">
                            <col width="24%">
                            <col width="16%">`}
                        
                        </colgroup>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>${g}`,g,d),A=Y.parseElement(b),{popsElement:T,titleElement:E,contentElement:M,folderListBodyElement:L,folderFileListBreadcrumbPrimaryElement:k,headerCloseBtnElement:G,btnOkElement:H,btnCancelElement:q,btnOtherElement:st,folderListSortFileNameElement:bt,folderListSortLatestTimeElement:C,folderListSortFileSizeElement:w}=_.handleQueryElement(A,e),y=null,x=[A];n.mask.enable&&(y=_.handleMask({type:e,guid:t,config:n,animElement:A,maskHTML:f}).maskElement,x.push(y));let $=_.handleEventDetails(t,r,a,e,A,T,y,n);_.handleClickEvent("close",G,$,n.btn.close.callback),_.handleClickEvent("ok",H,$,n.btn.ok.callback),_.handleClickEvent("cancel",q,$,n.btn.cancel.callback),_.handleClickEvent("other",st,$,n.btn.other.callback),u.append(a,x),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r),y!=null&&A.after(y),n.folder.sort();function R(K,X="-",J="-",xt=false){let Z=K,ot=X,It=J,St=u.createElement("tr"),Mt=u.createElement("td"),Et=u.createElement("td"),Nt=u.createElement("td"),ge="",Wt=gt.folder;if(xt)X="",J="";else {Wt="",typeof X=="number"&&(X=N.formatTime(X)),typeof J=="number"&&(J=N.formatByteToSize(J));for(let un in gt)if(K.toLowerCase().endsWith("."+un)){ge=un,Wt=gt[un];break}Wt||(ge="Null",Wt=gt.Null);}St.className="pops-folder-list-table__body-row",Mt.className="pops-folder-list-table__body-td",Et.className="pops-folder-list-table__body-td",Nt.className="pops-folder-list-table__body-td",nt.setSafeHTML(Mt,`
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${Wt}" alt="${ge}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${K}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${K}
						</a>
					</div>
				</div>
            `),nt.setSafeHTML(Et,`
				<div class="pops-folder-list__time">
					<span>${X}</span>
				</div>
				`),nt.setSafeHTML(Nt,`
				<div class="pops-folder-list-format-size">
					<span>${J}</span>
				</div>
				`);let Ge={fileName:Z,latestTime:ot,fileSize:It,isFolder:xt};return Mt.__value__=Ge,Et.__value__=Ge,Nt.__value__=Ge,St.__value__=Ge,St.appendChild(Mt),St.appendChild(Et),St.appendChild(Nt),{folderELement:St,fileNameElement:Mt,fileTimeElement:Et,fileFormatSize:Nt}}function B(K,X="-",J="-",xt=false){let Z=K,ot=X,It=J,St=u.createElement("tr"),Mt=u.createElement("td"),Et="",Nt=gt.folder;if(xt)X="",J="";else {Nt="",typeof X=="number"&&(X=N.formatTime(X)),typeof J=="number"&&(J=N.formatByteToSize(J));for(let Wt in gt)if(K.toLowerCase().endsWith("."+Wt)){Et=Wt,Nt=gt[Wt];break}Nt||(Et="Null",Nt=gt.Null);}St.className="pops-folder-list-table__body-row",Mt.className="pops-folder-list-table__body-td",nt.setSafeHTML(Mt,`
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${Nt}" alt="${Et}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${K}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${K}</a>
						<span>${X} ${J}</span>
					</div>
				</div>
			`);let ge={fileName:Z,latestTime:ot,fileSize:It,isFolder:xt};return Mt.__value__=ge,St.__value__=ge,St.appendChild(Mt),{folderELement:St,fileNameElement:Mt}}function j(){nt.setSafeHTML(L,"");}function et(){return u.createElement("div",{className:"iconArrow"})}function dt(K,X){return u.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${K}</a>`,_config_:X},{title:"name"})}function W(K,X,J){j();let Z=K.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(Z)for(;Z.nextElementSibling;)Z.nextElementSibling.remove();else console.error("获取导航按钮失败");let ot=Cn.init({parent:M,content:{text:"获取文件列表中..."},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},addIndexCSS:false});fn(J),ot.close();}async function mt(K,X){j();let J=Cn.init({parent:M,content:{text:"获取文件列表中..."},mask:{enable:true},addIndexCSS:false});if(typeof X.clickEvent=="function"){let xt=await X.clickEvent(K,X);k.appendChild(et());let Z=dt(X.fileName,xt);k.appendChild(Z),u.on(Z,"click",function(ot){W(ot,false,xt);}),fn(xt);}J.close();}function Ht(K,X){u.on(K,"click",async function(J){J==null||J.preventDefault(),J==null||J.stopPropagation(),J==null||J.stopImmediatePropagation();let xt=K.querySelector("a");if(typeof X.clickEvent=="function"){let Z=await X.clickEvent(J,X);if(Z!=null&&typeof Z=="object"&&!Array.isArray(Z)&&typeof Z.url=="string"&&Z.url.trim()!==""&&(xt.setAttribute("href",Z.url),xt.setAttribute("target","_blank"),Z.autoDownload))if((Z.mode==null||Z.mode==="")&&(Z.mode="aBlank"),Z.mode==="a"||Z.mode==="aBlank"){let ot=document.createElement("a");Z.mode==="aBlank"&&ot.setAttribute("target","_blank"),ot.href=Z.url,ot.click();}else if(Z.mode==="open"||Z.mode==="openBlank")Z.mode==="openBlank"?globalThis.open(Z.url,"_blank"):globalThis.open(Z.url);else if(Z.mode==="iframe"){let ot=document.createElement("iframe");ot.src=Z.url,ot.onload=function(){N.setTimeout(()=>{ot.remove();},1e3);},a.appendChild(ot),N.setTimeout(()=>{ot.remove();},3*60*1e3);}else console.error("未知的下载模式",Z);}});}function be(K,X="fileName",J=false){if(X==="fileName"){let xt=K.filter(ot=>ot.isFolder),Z=K.filter(ot=>!ot.isFolder);return xt.sort((ot,It)=>{let St=ot[X].toString(),Mt=It[X].toString(),Et=St.localeCompare(Mt);return J&&(Et>0?Et=-1:Et<0&&(Et=1)),Et}),Z.sort((ot,It)=>{let St=ot[X].toString(),Mt=It[X].toString(),Et=St.localeCompare(Mt);return J&&(Et>0?Et=-1:Et<0&&(Et=1)),Et}),J?[...Z,...xt]:[...xt,...Z]}else return K.sort((xt,Z)=>{let ot=xt[X],It=Z[X];return X==="fileSize"?(ot=parseFloat(ot.toString()),It=parseFloat(It.toString())):X==="latestTime"&&(ot=new Date(ot).getTime(),It=new Date(It).getTime()),ot>It?J?-1:1:ot<It?J?1:-1:0}),K}function fn(K){be(K,n.sort.name,n.sort.isDesc),K.forEach(X=>{if(X.isFolder){let{folderELement:J,fileNameElement:xt}=N.isPhone()?B(X.fileName,"","",true):R(X.fileName,"","",true);u.on(xt,"click",Z=>{mt(Z,X);}),L.appendChild(J);}else {let{folderELement:J,fileNameElement:xt}=N.isPhone()?B(X.fileName,X.latestTime,X.fileSize,false):R(X.fileName,X.latestTime,X.fileSize,false);Ht(xt,X),L.appendChild(J);}});}fn(n.folder);let Hn=k.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");Hn._config_=n.folder,u.on(Hn,"click",K=>{W(K,true,n.folder);});function Xr(){[...Array.from(bt.querySelectorAll(".pops-folder-icon-active")),...Array.from(C.querySelectorAll(".pops-folder-icon-active")),...Array.from(w.querySelectorAll(".pops-folder-icon-active"))].forEach(K=>K.classList.remove("pops-folder-icon-active"));}function Qr(K,X,J){Xr(),J?X.classList.add("pops-folder-icon-active"):K.classList.add("pops-folder-icon-active");}function pn(K,X,J){X.notChangeSortRule||(n.sort.name=J,n.sort.isDesc=!n.sort.isDesc);let xt=K.querySelector(".pops-folder-icon-arrow-up"),Z=K.querySelector(".pops-folder-icon-arrow-down");if(Qr(xt,Z,n.sort.isDesc),typeof n.sort.callback=="function"&&n.sort.callback(K,X,n.sort.name,n.sort.isDesc))return;let ot=[];Array.from(L.children).forEach(St=>{let Mt=St.__value__;Mt.target=St,ot.push(Mt);}),be(ot,n.sort.name,n.sort.isDesc).forEach(St=>{L.appendChild(St.target);});}return u.on(bt.closest("th"),"click",function(K){pn(bt,K,"fileName");},{capture:true}),u.on(C.closest("th"),"click",void 0,function(K){pn(C,K,"latestTime");},{capture:true}),u.on(w.closest("th"),"click",void 0,function(K){pn(w,K,"fileSize");},{capture:true}),n.sort.name==="fileName"?u.trigger(bt,"click",{notChangeSortRule:true}):n.sort.name==="latestTime"?u.trigger(C,"click",{notChangeSortRule:true}):n.sort.name==="fileSize"&&u.trigger(w,"click",{notChangeSortRule:true}),n.drag&&At.drag(T,{dragElement:E,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),_.handlePush(e,{guid:t,animElement:A,popsElement:T,maskElement:y,$shadowContainer:r,$shadowRoot:a}),_.handleResultDetails($)}},cs=()=>({title:{text:"默认标题",position:"center",html:false,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:false,attributes:[{"data-test":"test","data-test-2":"test2"}],forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},disabled:false,attributes:[],getValue(){return  true},callback(o,t){console.log("按钮开启状态：",t);}},{className:"panel-slider",text:"slider",type:"slider",props:{},attributes:[],getValue(){return 50},callback(o,t){console.log("滑块当前数值：",t);},min:1,max:100},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(o){console.log("点击按钮",o);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(o){console.log("点击按钮",o);}},{className:"panel-button",text:"button",type:"button",attributes:[],props:{},buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(o){console.log("点击按钮",o);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:true,attributes:[{"data-value":"value","data-value-2":"value2"}],forms:[{className:"panel-input",text:"input",type:"input",props:{},attributes:[],getValue(){return "50"},callback(o,t){u.preventEvent(o),console.log("输入框内容改变：",t);},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",props:{},attributes:[],getValue(){return "123456"},callback(o,t){u.preventEvent(o),console.log("密码输入框内容改变：",t);},isPassword:true,placeholder:"请输入密码"},{className:"panel-textarea",text:"textarea",type:"textarea",props:{},attributes:[],getValue(){return "50"},callback(o,t){u.preventEvent(o),console.log("textarea输入框内容改变：",t);},placeholder:"请输入内容"},{className:"panel-select",text:"select",type:"select",props:{},attributes:[],getValue(){return 50},callback(o,t,e){console.log(`select当前选项：${t}，当前选项文本：${e}`);},data:[{value:"all",text:"所有",disable(){return  false},forms:[]},{value:"text",text:"文本",disable(){return  false},forms:[]},{value:"html",text:"超文本",disable(){return  false},forms:[]}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",props:{},attributes:[],placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(o){console.log("select值改变，多选信息",o);},clickCallBack(o,t){console.log("点击",o,t);},closeIconClickCallBack(o,t){console.log("点击关闭图标的事件",t);},data:[{value:"select-1",text:"单选1",isHTML:false,disable(o,t){return t.findIndex(e=>["select-5"].includes(e.value))!==-1}},{value:"select-2",text:"单选2",isHTML:false,disable(o,t){return t.findIndex(e=>["select-5"].includes(e.value))!==-1}},{value:"select-3",text:"单选3",isHTML:false,disable(o,t){return t.findIndex(e=>["select-2","select-5"].includes(e.value))!==-1}},{value:"select-4",text:"单选4",isHTML:false,disable(o,t){return t.findIndex(e=>["select-3","select-5"].includes(e.value))!==-1}},{value:"select-5",text(o,t){return t.findIndex(e=>["select-4"].includes(e.value))!==-1?"单选5-禁用":"单选5"},isHTML:false,disable(o,t){return t.findIndex(e=>["select-4"].includes(e.value))!==-1}}]},{type:"forms",text:"deep菜单",forms:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(o,t){console.log(o,t);},clickCallBack(o,t){console.log("进入子配置",o,t);},forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(o,t){console.log("按钮开启状态：",t);}},{className:"panel-slider",text:"slider",props:{},type:"slider",attributes:[],getValue(){return 50},callback(o,t){console.log("滑块当前数值：",t);},min:1,max:100},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(o){console.log("点击按钮",o);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(o){console.log("点击按钮",o);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(o){console.log("点击按钮",o);}}]}]}]},{type:"forms",isFold:true,text:"折叠菜单",afterAddToUListCallBack(o,t){console.log(o,t);},forms:[{className:"panel-switch",text:"switch",props:{},type:"switch",attributes:[],getValue(){return  true},callback(o,t){console.log("按钮开启状态：",t);}}]}]}],btn:{close:{enable:true,callback(o){o.close();}}},mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:false,only:false,width:"700px",height:"500px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),We={isFloat(o){return Number(o)===o&&o%1!==0},add(o,t){let e,n,r;try{e=o.toString().split(".")[1].length;}catch{e=0;}try{n=t.toString().split(".")[1].length;}catch{n=0;}return r=Math.pow(10,Math.max(e,n)),Math.round(o*r+t*r)/r},sub(o,t){let e,n,r;try{e=o.toString().split(".")[1].length;}catch{e=0;}try{n=t.toString().split(".")[1].length;}catch{n=0;}r=Math.pow(10,Math.max(e,n));let a=e>=n?e:n;return (Math.round(o*r-t*r)/r).toFixed(a)},division(o,t){let e,n,r,a;try{e=o.toString().split(".")[1].length;}catch{e=0;}try{n=t.toString().split(".")[1].length;}catch{n=0;}return r=Number(o.toString().replace(".","")),a=Number(t.toString().replace(".","")),r/a*Math.pow(10,n-e)}},ds=()=>({useShadowRoot:true,target:null,content:"默认文字",isDiffContent:false,position:"top",className:"",isFixed:false,alwaysShow:false,triggerShowEventName:"mouseenter touchstart",triggerCloseEventName:"mouseleave touchend",zIndex:1e4,only:false,eventOption:{passive:false,capture:true,once:false},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:true,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class fs{constructor(t,e,n){O(this,"$el",{$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null});O(this,"$data",{config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]});this.$data.config=t,this.$data.guid=e,this.$el.$shadowContainer=n.$shadowContainer,this.$el.$shadowRoot=n.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){let t=this.createToolTip();this.$el.$toolTip=t.$toolTipContainer,this.$el.$content=t.$toolTipContent,this.$el.$arrow=t.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){let t=u.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),e=t.querySelector(".pops-tip-content"),n=t.querySelector(".pops-tip-arrow");if(typeof this.$data.config.className=="string"&&this.$data.config.className.trim()!==""&&u.addClassName(t,this.$data.config.className),t.style.zIndex=_.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){let r=u.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});t.appendChild(r);}return this.$data.config.showArrow||n.remove(),{$toolTipContainer:t,$toolTipArrow:n,$toolTipContent:e}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(t){if(t==null&&(t=this.getContent()),this.$data.config.isDiffContent){let e="data-content",n=this.$el.$content[e];if(typeof n=="string"&&n===t)return;this.$el.$content[e]=t;}nt.setSafeHTML(this.$el.$content,t);}getZIndex(){return _.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const t=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",t.toString());}calcToolTipPosition(t,e,n,r){let a=u.offset(t,!this.$data.config.isFixed),i=a.width,s=a.height,l=a.top,c=a.left,d=u.outerWidth(this.$el.$toolTip),f=u.outerHeight(this.$el.$toolTip),p=c+i/2-d/2,g=l+s/2-f/2,v=0,h=0;if(r!=null)if(r instanceof MouseEvent||r instanceof PointerEvent)v=r.pageX,h=r.y;else if(r instanceof TouchEvent){let b=r.touches[0];v=b.pageX,h=b.pageY;}else typeof r.clientX=="number"&&(v=r.clientX),typeof r.clientY=="number"&&(h=r.clientY);return {TOP:{left:p-n,top:l-f-e,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:c+i+e,top:g+n,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:p-n,top:l+s+e,arrow:"top",motion:"fadeInBottom"},LEFT:{left:c-d-e,top:g+n,arrow:"right",motion:"fadeInLeft"},FOLLOW:{left:v+n,top:h+n,arrow:"follow",motion:""}}}changePosition(t){let e=this.calcToolTipPosition(this.$data.config.target,this.$data.config.arrowDistance,this.$data.config.otherDistance,t),n=this.$data.config.position.toUpperCase(),r=e[n];r?(this.$el.$toolTip.style.left=r.left+"px",this.$el.$toolTip.style.top=r.top+"px",this.$el.$toolTip.setAttribute("data-motion",r.motion),this.$el.$arrow.setAttribute("data-position",r.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(t,e){t==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(e):this.$data.timeId_close_TouchEvent.push(e);}clearCloseTimeoutId(t,e){let n=t==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let r=0;r<n.length;r++){const a=n[r];if(typeof e=="number"){if(e==a){N.clearTimeout(e),n.splice(r,1);break}}else N.clearTimeout(a),n.splice(r,1),r--;}}show(...t){let e=t[0],n=e instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(n),typeof this.$data.config.showBeforeCallBack=="function"){let r=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof r=="boolean"&&!r)return}N.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),u.append(this.$el.$shadowRoot,this.$el.$toolTip)),N.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),u.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(e),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){u.on(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){u.off(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,{capture:true});}close(...t){let e=t[0],n=e instanceof MouseEvent?"MouseEvent":"TouchEvent";if(e&&e instanceof MouseEvent){let a=e.composedPath()[0];if(a!=this.$data.config.target&&a!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){let a=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof a=="boolean"&&!a)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);let r=N.setTimeout(()=>{if(this.clearCloseTimeoutId(n,r),this.$el.$toolTip==null)return;let a=this.$el.$toolTip.getAttribute("data-motion");a==null||a.trim()===""?this.toolTipAnimationFinishEvent():this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(n,r),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){u.on(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){u.off(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,{capture:true});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){u.on(this.$el.$toolTip,u.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){u.off(this.$el.$toolTip,u.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),u.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){u.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(t){this.close(t);}onToolTipMouseLeaveEvent(){u.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){u.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}const kn={init(o){const t=N.getRandomGUID(),e="tooltip";let n=ds();if(n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),!(n.target instanceof HTMLElement))throw new TypeError("config.target 必须是HTMLElement类型");n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.anim,U.common,U.tooltipCSS]);let i=new fs(n,t,{$shadowContainer:r,$shadowRoot:a});return n.alwaysShow&&i.show(),{guid:t,config:n,$shadowContainer:r,$shadowRoot:a,toolTip:i}}},Fr=()=>({asideULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$content:null,$contentAside:null,$contentSectionContainer:null},init(o){this.$el=null,this.$el={...o.$el},this.asideULElement=this.$el.$contentAside.querySelector("ul"),this.sectionContainerHeaderULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[0],this.sectionContainerULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[1];let t=null,e=false;o.config.content.forEach(n=>{let r=this.createAsideItem(n);if(this.setAsideItemClickEvent(r,n),this.asideULElement.appendChild(r),t==null){let a=false;typeof n.isDefault=="function"?a=!!n.isDefault():a=!!n.isDefault,a&&(t=r,e=!!n.scrollToDefaultView);}typeof n.afterRender=="function"&&n.afterRender({asideConfig:n,$asideLiElement:r});}),t==null&&this.asideULElement.children.length&&(t=this.asideULElement.children[0]),t?(t.click(),e&&(t==null||t.scrollIntoView())):console.error("pops.panel：左侧容器没有项");},clearContainer(){var o;nt.setSafeHTML(this.sectionContainerHeaderULElement,""),nt.setSafeHTML(this.sectionContainerULElement,""),(o=this.$el.$content)==null||o.querySelectorAll("section.pops-panel-deepMenu-container").forEach(t=>t.remove());},clearAsideItemIsVisited(){this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach(o=>{u.removeClassName(o,"pops-is-visited");});},setAsideItemIsVisited(o){u.addClassName(o,"pops-is-visited");},setElementAttributes(o,t){t!=null&&(Array.isArray(t)?t.forEach(e=>{this.setElementAttributes(o,e);}):Object.keys(t).forEach(e=>{o.setAttribute(e,t[e]);}));},setElementProps(o,t){t!=null&&Object.keys(t).forEach(e=>{let n=t[e];if(e==="innerHTML"){nt.setSafeHTML(o,n);return}Reflect.set(o,e,n);});},setElementClassName(o,t){t!=null&&(typeof t=="function"&&(t=t()),typeof t=="string"?t.split(" ").forEach(n=>{o.classList.add(n);}):Array.isArray(t)&&t.forEach(e=>{this.setElementClassName(o,e);}));},createAsideItem(o){let t=document.createElement("li");return t.id=o.id,t.__forms__=o.forms,nt.setSafeHTML(t,o.title),this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props),t},createSectionContainerItem_switch(o){let t=document.createElement("li");t.__formConfig__=o,this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="";o.description&&(e=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${e}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!o.getValue()},$ele:{switch:t.querySelector(".pops-panel-switch"),input:t.querySelector(".pops-panel-switch__input"),core:t.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),o.disabled&&this.disable(),this.setClickEvent();},setClickEvent(){let r=this;u.on(this.$ele.core,"click",void 0,function(a){r.$ele.input.disabled||r.$ele.switch.hasAttribute("data-disabled")||(r.$data.value=r.getStatus(),r.setStatus(r.$data.value),typeof o.callback=="function"&&o.callback(a,r.$data.value));});},setStatus(r=false){r=!!r,this.$ele.input.checked=r,r?u.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):u.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let r=false;return u.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(r=true),r},disable(){this.$ele.input.disabled=true,this.$ele.switch.setAttribute("data-disabled","true");},notDisable(){this.$ele.input.disabled=false,this.$ele.switch.removeAttribute("data-disabled");}};return n.init(),t["data-switch"]=n,t},createSectionContainerItem_slider(o){let t=document.createElement("li");t.__formConfig__=o,this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="";o.description&&(e=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${e}</div>
				<div class="pops-panel-slider">
					<input type="range" min="${o.min}" max="${o.max}">
				</div>
			`);let n=t.querySelector(".pops-panel-slider input[type=range]");o.step&&n.setAttribute("step",o.step.toString()),n.value=o.getValue().toString();let r=function(i){return typeof o.getToolTipContent=="function"?o.getToolTipContent(i):i},a=kn.init({target:n.parentElement,content:()=>r(n.value),zIndex:()=>At.getPopsMaxZIndex().zIndex,className:"github-tooltip",alwaysShow:false,only:false,position:"top",arrowDistance:10});return u.on(n,["input","propertychange"],void 0,function(i){a.toolTip.changeContent(r(n.value)),typeof o.callback=="function"&&o.callback(i,i.target.value);}),t},createSectionContainerItem_slider_new(o){let t=document.createElement("li");t.__formConfig__=o,this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="";o.description&&(e=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${e}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);const n={[Symbol.toStringTag]:"PopsPanelSlider",value:o.getValue(),min:o.min,max:o.max,step:o.step||1,$data:{isMove:false,isInitDragPosition:false,isCheckingStopDragMove:false,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{slider:t.querySelector(".pops-slider"),runAway:t.querySelector(".pops-slider__runway"),bar:t.querySelector(".pops-slider__bar"),buttonWrapper:t.querySelector(".pops-slider__button-wrapper"),button:t.querySelector(".pops-slider__button")},$interval:{isCheck:false},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.setRunAwayClickEvent(),this.intervalInit(),this.isFormConfigDisabledDrag()&&this.disableDrag();},intervalInit(r=200,a=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=true;let i=false,s=this.$data.totalWidth,l,c=setInterval(()=>{i?(this.$interval.isCheck=false,clearTimeout(l),clearInterval(c)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(i=true,this.$data.totalWidth!==s&&(We.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},r);l=setTimeout(()=>{clearInterval(c);},a);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),this.$ele.slider["data-min"]=this.min,this.$ele.slider["data-max"]=this.max,this.$ele.slider["data-value"]=this.value,this.$ele.slider["data-step"]=this.step;},initTotalWidth(){this.$data.totalWidth=u.width(this.$ele.runAway);},initStepMap(){let r=0,a=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/a;let i=0;for(let s=this.min;s<=this.max;s+=this.step){let l=this.formatValue(s),c={};l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,i+=this.$data.stepPx;}},initFloatStepMap(){let r=0,a=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/a;let i=0;for(let s=this.min;s<=this.max;s=We.add(s,this.step)){let l=this.formatValue(s),c={};l===this.min?c={value:l,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:c={value:l,px:i,pxLeft:i-this.$data.stepPx/2,pxRight:i+this.$data.stepPx/2,percent:i/this.$data.totalWidth},this.$data.stepBlockMap.set(r,c),r++,i+=this.$data.stepPx;}},initSliderPosition(){let r=0;for(const[,a]of this.$data.stepBlockMap.entries())if(a.value==this.value){r=a.percent,this.$data.dragWidth=a.px;break}r=this.formatValue(r*100),this.setSliderPosition(r);},isFloat(r){return Number(r)===r&&r%1!==0},valueChangeCallBack(r,a){typeof o.callback=="function"&&o.callback(r,a);},getDragInfo(r){let a=this.$data.stepBlockMap.get(0);for(const[,i]of this.$data.stepBlockMap.entries())if(i.pxLeft<=r&&r<i.pxRight){a=i;break}return a},getSliderPositonPercent(r){return r/this.$data.totalWidth},formatValue(r){return We.isFloat(this.step)?r=parseFloat(r.toFixed(2)):r=parseInt(r.toString()),r},setSliderPosition(r){parseInt(r.toString())===1&&(r=1),r>1&&(r=r/100),this.$ele.buttonWrapper.style.left=`${r*100}%`,this.$ele.bar.style.width=`${r*100}%`;},disableDrag(){this.$ele.runAway.classList.add("pops-slider-is-disabled");},allowDrag(){this.$ele.runAway.classList.remove("pops-slider-is-disabled");},isDisabledDrag(){return this.$ele.runAway.classList.contains("pops-slider-is-disabled")},isFormConfigDisabledDrag(){return typeof o.disabled=="function"||typeof o.disabled=="boolean"?typeof o.disabled=="function"?o.disabled():o.disabled:false},setRunAwayClickEvent(){u.on(this.$ele.runAway,"click",void 0,r=>{if(r.target!==this.$ele.runAway&&r.target!==this.$ele.bar)return;let a=parseFloat(r.offsetX);this.dragStartCallBack(),this.dragMoveCallBack(r,a,this.value),this.dragEndCallBack(a);},{capture:false});},dragStartCallBack(){if(!this.$data.isMove){if(this.isFormConfigDisabledDrag())return this.disableDrag(),false;this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=true;}return  true},dragMoveCallBack(r,a,i){let s=0;if(a<=0)s=0,this.value=this.min;else if(a>=this.$data.totalWidth)s=1,this.value=this.max;else {const l=this.getDragInfo(a);s=l.percent,this.value=this.formatValue(l.value);}this.$data.dragPercent=s,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),i!==this.value&&this.valueChangeCallBack(r,this.value);},dragEndCallBack(r){this.$data.isMove=false,r<=0?this.$data.dragWidth=0:r>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=r,this.closeToolTip();},setPanEvent(){const r=N.AnyTouch();this.$tooltip=new r(this.$ele.button,{preventDefault(){return  false}});let a=0;this.$tooltip.on("at:move",i=>{if(!this.dragStartCallBack())return;let s=this.value;const l=this.$ele.runAway.getBoundingClientRect();let c=i.x-(l.left+globalThis.screenX);c<=0?c=0:c>=l.width&&(c=l.width),a=c,this.dragMoveCallBack(i,a,s);}),this.$tooltip.on("at:end",i=>{this.dragEndCallBack(a);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=true;let r=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=false,this.closeToolTip(),clearInterval(r));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=false,clearInterval(r);},2e3);},setToolTipEvent(){function r(){return typeof o.getToolTipContent=="function"?o.getToolTipContent(n.value):n.value}let a=kn.init({target:this.$ele.button,content:r,zIndex:()=>At.getPopsMaxZIndex().zIndex,isFixed:true,className:"github-tooltip",only:false,eventOption:{capture:true,passive:true},showBeforeCallBack:()=>{if(!(typeof o.isShowHoverTip=="function"?o.isShowHoverTip():typeof o.isShowHoverTip=="boolean"?o.isShowHoverTip:true))return  false;this.intervalInit();},showAfterCallBack:i=>{a.toolTip.changeContent(r());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),false},alwaysShow:false,position:"top",arrowDistance:10});this.$data.tooltip=a;}};return n.init(),t["data-slider"]=n,t},createSectionContainerItem_input(o){let t=document.createElement("li");t.__formConfig__=o,this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="text";o.isPassword?e="password":o.isNumber&&(e="number");let n="";o.description&&(n=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${n}</div>
				<div class="pops-panel-input pops-user-select-none">
					<input type="${e}" placeholder="${o.placeholder}">
				</div>
				`);const r={[Symbol.toStringTag]:"PopsPanelInput",$ele:{panelInput:t.querySelector(".pops-panel-input"),input:t.querySelector("input"),inputSpanIcon:document.createElement("span"),inputSpanIconInner:null,icon:null},$data:{value:o.getValue(),isView:false},init(){this.initEle(),this.setInputValue(this.$data.value),o.isPassword?(this.setCircleIcon(ut.getIcon("view")),this.setCircleIconClickEvent()):this.$ele.input.value!=""&&(this.setCircleIcon(ut.getIcon("circleClose")),this.setCircleIconClickEvent()),this.setInputChangeEvent(),o.disabled&&this.disable(),typeof o.handlerCallBack=="function"&&o.handlerCallBack(t,this.$ele.input);},initEle(){this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon,this.$ele.input.nextSibling),this.$ele.inputSpanIcon.className="pops-panel-input__suffix",nt.setSafeHTML(this.$ele.inputSpanIcon,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$ele.inputSpanIconInner=this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner"),this.$ele.icon=this.$ele.inputSpanIcon.querySelector(".pops-panel-icon");},disable(){this.$ele.input.disabled=true,this.$ele.panelInput.classList.add("pops-input-disabled");},notDisable(){this.$ele.input.disabled=false,this.$ele.panelInput.classList.remove("pops-input-disabled");},isDisabled(){return this.$ele.input.disabled},setInputValue(a=""){this.$ele.input.value=a;},setInputType(a="text"){this.$ele.input.setAttribute("type",a);},removeCircleIcon(){nt.setSafeHTML(this.$ele.icon,"");},setCircleIcon(a=ut.getIcon("circleClose")){nt.setSafeHTML(this.$ele.icon,a);},setCircleIconClickEvent(){u.on(this.$ele.icon,"click",void 0,()=>{this.isDisabled()||(this.removeCircleIcon(),o.isPassword?this.$data.isView?(this.$data.isView=false,this.setInputType("text"),this.setCircleIcon(ut.getIcon("hide"))):(this.$data.isView=true,this.setInputType("password"),this.setCircleIcon(ut.getIcon("view"))):(this.setInputValue(""),this.$ele.input.focus(),this.$ele.input.dispatchEvent(new Event("input"))));});},setInputChangeEvent(){u.on(this.$ele.input,["input","propertychange"],void 0,a=>{this.$data.value=this.$ele.input.value,o.isPassword||(this.$ele.input.value!==""&&this.$ele.icon.innerHTML===""?(this.setCircleIcon(ut.getIcon("circleClose")),this.setCircleIconClickEvent()):this.$ele.input.value===""&&this.removeCircleIcon()),typeof o.callback=="function"&&(o.isNumber?o.callback(a,this.$ele.input.value,this.$ele.input.valueAsNumber):o.callback(a,this.$ele.input.value));});}};return r.init(),t["data-input"]=r,t},createSectionContainerItem_textarea(o){let t=document.createElement("li");t.__formConfig__=o,this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="";o.description&&(e=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${e}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${o.placeholder??""}"></textarea>
				</div>
			`);const n={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{panelTextarea:t.querySelector(".pops-panel-textarea"),textarea:t.querySelector(".pops-panel-textarea textarea")},$data:{value:o.getValue()},init(){this.setValue(this.$data.value),this.setChangeEvent(),o.disabled&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");},notDisable(){this.$ele.textarea.removeAttribute("disabled"),this.$ele.panelTextarea.classList.remove("pops-panel-textarea-disable");},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||this.$ele.panelTextarea.classList.contains("pops-panel-textarea-disable")},setValue(r){this.$ele.textarea.value=r;},setChangeEvent(){u.on(this.$ele.textarea,["input","propertychange"],void 0,r=>{this.$data.value=r.target.value,typeof o.callback=="function"&&o.callback(r,r.target.value);});}};return n.init(),t["data-textarea"]=n,t},createSectionContainerItem_select(o){const t=this;let e=document.createElement("li");e.__formConfig__=o,this.setElementClassName(e,o.className),this.setElementAttributes(e,o.attributes),this.setElementProps(e,o.props);let n="";o.description&&(n=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${n}</div>
				<div class="pops-panel-select pops-user-select-none">
					<select></select>
				</div>
				`);const r={[Symbol.toStringTag]:"PopsPanelSelect",$ele:{panelSelect:e.querySelector(".pops-panel-select"),select:e.querySelector(".pops-panel-select select")},$eleKey:{disable:"__disable__",value:"__value__",forms:"__forms__"},$data:{defaultValue:o.getValue()},init(){this.initOption(),this.setChangeEvent(),this.setClickEvent(),o.disabled&&this.disable();},setNodeValue(a,i,s){Reflect.set(a,i,s);},getNodeValue(a,i){return Reflect.get(a,i)},disable(){this.$ele.select.setAttribute("disabled","true"),this.$ele.panelSelect.classList.add("pops-panel-select-disable");},notDisable(){this.$ele.select.removeAttribute("disabled"),this.$ele.panelSelect.classList.remove("pops-panel-select-disable");},isDisabled(){return this.$ele.select.hasAttribute("disabled")||this.$ele.panelSelect.classList.contains("pops-panel-select-disable")},initOption(){o.data.forEach(a=>{let i=document.createElement("option");this.setNodeValue(i,this.$eleKey.value,a.value),this.setNodeValue(i,this.$eleKey.disable,a.disable),this.setNodeValue(i,this.$eleKey.forms,a.forms),a.value===this.$data.defaultValue&&this.setOptionSelected(i),i.innerText=a.text,this.$ele.select.appendChild(i);});},setOptionSelected(a){a.setAttribute("selected","true");},setSelectOptionsDisableStatus(){this.$ele.select.options&&this.$ele.select.options.length&&Array.from(this.$ele.select.options).forEach(a=>{this.setOptionDisableStatus(a);});},setOptionDisableStatus(a){let i=false,s=this.getNodeValue(a,this.$eleKey.disable);if(s==="function"){let l=this.getNodeValue(a,this.$eleKey.value);i=!!s(l);}i?a.setAttribute("disabled","true"):a.removeAttribute("disabled");},getSelectOptionInfo(a){let i=this.getNodeValue(a,this.$eleKey.value),s=a.innerText||a.textContent,l=this.getNodeValue(a,this.$eleKey.forms);return {value:i,text:s,forms:l,$option:a}},setChangeEvent(){u.on(this.$ele.select,"change",void 0,a=>{let i=a.target[a.target.selectedIndex],s=this.getSelectOptionInfo(i);this.setSelectOptionsDisableStatus(),typeof o.callback=="function"&&o.callback(a,s.value,s.text);let l=typeof s.forms=="function"?s.forms():s.forms;if(Array.isArray(l)){let c="pops-panel-select-child-forms";for(;e.nextElementSibling&&e.nextElementSibling.classList.contains(c);)e.nextElementSibling.remove();let d=document.createElement("ul");d.className=c,u.after(e,d),t.uListContainerAddItem(o,{ulElement:d});}});},setClickEvent(){u.on(this.$ele.select,"click",void 0,a=>{this.setSelectOptionsDisableStatus(),typeof o.clickCallBack=="function"&&o.clickCallBack(a,this.$ele.select);});}};return r.init(),Reflect.set(e,"data-select",r),e},createSectionContainerItem_select_multiple_new(o){let t=document.createElement("li");Reflect.set(t,"__formConfig__",o),this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="";o.description&&(e=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${e}</div>
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
				`);const n={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0,$selectContainer:void 0},$data:{defaultValue:o.getValue(),selectInfo:[]},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.initTagElement(),this.setSelectContainerClickEvent();},initDefault(){o.data.forEach(r=>{var a;this.$data.defaultValue.includes(r.value)&&this.$data.selectInfo.push({text:r.text,value:r.value,isHTML:!!r.isHTML,disable:(a=r.disable)==null?void 0:a.bind(r)});});},inintEl(){this.$el.$container=t.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=t.querySelector(".el-select__wrapper"),this.$el.$section=t.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=t.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=t.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=t.querySelector(".el-select__suffix"),this.$el.$suffixIcon=t.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let r="";if(typeof o.placeholder=="string")r=o.placeholder;else if(typeof o.placeholder=="function"){let i=o.placeholder();typeof i=="string"&&(r=i);}let a=u.createElement("span",{innerText:r});this.$el.$selectedPlaceHolderWrapper.appendChild(a);},initTagElement(){o.data.forEach(r=>{if(this.$data.selectInfo.find(i=>i.value===r.value)){let i=this.createSelectedTagItem(r);this.addSelectedTagItem(i.$tag),this.setSelectedItemCloseIconClickEvent({$tag:i.$tag,$closeIcon:i.$closeIcon,value:r.value,text:r.text});}}),this.checkTagEmpty();},createSelectedTagItem(r){const a=u.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
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
						`}),i=a.querySelector(".el-select__tags-text"),s=a.querySelector(".el-icon.el-tag__close");let l=typeof r.text=="function"?r.text(r,this.$data.selectInfo):r.text;return r.isHTML?nt.setSafeHTML(i,l):i.innerText=l,{$tag:a,$tagText:i,$closeIcon:s}},addSelectedTagItem(r){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){let a=this.$el.$selectedInputWrapper.previousElementSibling;a?u.after(a,r):u.before(this.$el.$selectedInputWrapper,r);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){let a=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;a?u.after(a,r):u.before(this.$el.$selectedPlaceHolderWrapper,r);}else this.$el.$section.appendChild(r);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateSelectTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(r=>{r.remove();}),this.initTagElement();},selectValueChangeCallBack(r){this.updateSelectItem(),typeof o.callback=="function"&&o.callback(r||this.$data.selectInfo);},updateSelectItem(){this.getAllSelectItemInfo(false).forEach(r=>{const{data:a,$select:i}=r;this.setSelectItemText(a,r.$select),typeof a.disable=="function"&&a.disable(a.value,this.$data.selectInfo)?(this.setSelectItemDisabled(i),this.removeSelectedInfo(a,false),this.removeSelectItemSelected(i)):this.removeSelectItemDisabled(i),this.$data.selectInfo.find(l=>l.value===a.value)?this.setSelectItemSelected(i):this.removeSelectItemSelected(i);});},setSelectItemSelected(r){this.isSelectItemSelected(r)||r.classList.add("select-item-is-selected");},removeSelectItemSelected(r){r.classList.remove("select-item-is-selected");},isSelectItemSelected(r){return r.classList.contains("select-item-is-selected")},addSelectedItemInfo(r,a){var l;let i=this.getSelectedItemInfo(a);r.find(c=>c.value===i.value)||r.push({value:i.value,text:i.text,isHTML:!!i.isHTML,disable:(l=i.disable)==null?void 0:l.bind(i)}),this.selectValueChangeCallBack(r);},getSelectedItemInfo(r){return Reflect.get(r,"data-info")},removeSelectedItemInfo(r,a){let i=this.getSelectedItemInfo(a),s=r.findIndex(l=>l.value===i.value);s!==-1&&r.splice(s,1),this.selectValueChangeCallBack(r);},getAllSelectItemInfo(r=true){var a;return Array.from(((a=this.$el.$selectContainer)==null?void 0:a.querySelectorAll(".select-item"))??[]).map(i=>{let l={data:this.getSelectedItemInfo(i),$select:i};return r?this.isSelectItemSelected(i)?l:void 0:l}).filter(i=>i!=null)},createSelectItemElement(r){let a=u.createElement("li",{className:"select-item",innerHTML:`
							<span class="select-item-text"></span>
						`});return this.setSelectItemText(r,a),Reflect.set(a,"data-info",r),a},setSelectItemText(r,a){let i=typeof r.text=="function"?r.text(r.value,this.$data.selectInfo):r.text,s=a.querySelector(".select-item-text");r.isHTML?nt.setSafeHTML(s,i):s.innerText=i;},setSelectItemDisabled(r){r.setAttribute("aria-disabled","true"),r.setAttribute("disabled","true");},removeSelectItemDisabled(r){r.removeAttribute("aria-disabled"),r.removeAttribute("disabled");},isSelectItemDisabled(r){return r.hasAttribute("disabled")||r.ariaDisabled},setSelectElementClickEvent(r,a){u.on(a,"click",i=>{if(u.preventEvent(i),!this.isSelectItemDisabled(a)){if(typeof o.clickCallBack=="function"){let s=this.getAllSelectItemInfo().map(c=>c.data),l=o.clickCallBack(i,s);if(typeof l=="boolean"&&!l)return}this.isSelectItemSelected(a)?(this.removeSelectItemSelected(a),this.removeSelectedItemInfo(r,a)):(this.setSelectItemSelected(a),this.addSelectedItemInfo(r,a));}});},setSelectContainerClickEvent(){const r=this;u.on(this.$el.$container,"click",a=>{let i=r.$data.selectInfo,{style:s,...l}=o.selectConfirmDialogDetails||{},c=N.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:`
									<ul class="select-container"></ul>
									`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(p,g){r.$data.selectInfo=[...i],r.updateSelectTagItem(),r.$el.$selectContainer=null,p.close();}}},mask:{enable:true,clickCallBack(p,g){p(),r.$data.selectInfo=[...i],r.updateSelectTagItem(),r.$el.$selectContainer=null;},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"300px",style:`
								.select-container{
									--el-font-size-base: 14px;
									--el-text-color-regular: #606266;
									--el-color-primary: #409eff;
									--el-fill-color-light: #f5f7fa;
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
									color: #a8abb2;
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
								${s||""}
								`},l),f=Gr.init(c).$shadowRoot.querySelector(".select-container");this.$el.$selectContainer=f,o.data.forEach(p=>{let g=this.createSelectItemElement(p);f.appendChild(g),this.setSelectElementClickEvent(i,g);}),this.updateSelectItem();});},setSelectedItemCloseIconClickEvent(r){u.on(r.$closeIcon,"click",a=>{if(u.preventEvent(a),typeof o.closeIconClickCallBack=="function"){let i=o.closeIconClickCallBack(a,{$tag:r.$tag,$closeIcon:r.$closeIcon,value:r.value,text:typeof r.text=="function"?r.text.bind(r):r.text});if(typeof i=="boolean"&&!i)return}this.removeSelectedTagItem(r.$tag),this.removeSelectedInfo({value:r.value,text:r.text});},{capture:true});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedTagItem(r){r.remove(),this.checkTagEmpty();},removeSelectedInfo(r,a=true){for(let i=0;i<this.$data.selectInfo.length;i++)if(this.$data.selectInfo[i].value===r.value){this.$data.selectInfo.splice(i,1);break}a&&this.selectValueChangeCallBack();},showInputWrapper(){u.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){u.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){u.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){u.cssHide(this.$el.$selectedPlaceHolderWrapper,true);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");}};return n.init(),Reflect.set(t,"data-select-multiple",n),t},createSectionContainerItem_button(o){let t=document.createElement("li");t.__formConfig__=o,this.setElementClassName(t,o.className),this.setElementAttributes(t,o.attributes),this.setElementProps(t,o.props);let e="";o.description&&(e=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`),nt.setSafeHTML(t,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${e}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);const n={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:t.querySelector(".pops-panel-button"),button:t.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:t.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:t.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.setClickEvent();},initButton(){typeof o.buttonIcon=="string"&&o.buttonIcon.trim()!==""?(ut.hasIcon(o.buttonIcon)?this.setIconSVG(ut.getIcon(o.buttonIcon)):this.setIconSVG(o.buttonIcon),this.showIcon()):this.hideIcon();let r=o.buttonText;typeof o.buttonText=="function"&&(r=o.buttonText()),this.setButtonType(o.buttonType),o.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),o.disable&&this.disable(),this.setButtonText(r),this.setIconLoadingStatus(o.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(r){nt.setSafeHTML(this.$ele.icon,r);},setIconLoadingStatus(r){this.$ele.icon.setAttribute("is-loading",(!!r).toString());},setHasIcon(r){this.$ele.button.setAttribute("data-icon",(!!r).toString());},setButtonType(r){this.$ele.button.setAttribute("type",r);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(r){nt.setSafeHTML(this.$ele.spanText,r);},setClickEvent(){u.on(this.$ele.button,"click",void 0,r=>{typeof o.callback=="function"&&o.callback(r);});}};return n.init(),t["data-button"]=n,t},createSectionContainerItem_deepMenu(o){let t=this,e=document.createElement("li");e.classList.add("pops-panel-deepMenu-nav-item"),e.__formConfig__=o,this.setElementClassName(e,o.className),this.setElementAttributes(e,o.attributes),this.setElementProps(e,o.props);let n="";o.description&&(n=`<p class="pops-panel-item-left-desc-text">${o.description}</p>`);let r=typeof o.arrowRightIcon=="boolean"?o.arrowRightIcon:true,a="";r&&(a=`<i class="pops-panel-deepMenu-arrowRight-icon">${ut.getIcon("arrowRight")}</i>`);let i="";o.rightText&&(i=`<p class="pops-panel-item-right-text">${o.rightText}</p>`),nt.setSafeHTML(e,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${o.text}</p>${n}</div>
				<div class="pops-panel-deepMenu">${i}${a}</div>
				`);const s={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return t.$el.$contentSectionContainer}},init(){this.setLiClickEvent();},initFormItem(l,c){let d=c;if(d.type==="forms"){let f=d.forms,p=document.createElement("li"),g=document.createElement("ul");g.classList.add("pops-panel-forms-container-item-formlist"),p.classList.add("pops-panel-forms-container-item");let v=u.createElement("div",{className:"pops-panel-forms-container-item-header-text"});nt.setSafeHTML(v,d.text),d.isFold&&(nt.setSafeHTML(v,`
								<p>${d.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),u.on(v,"click",h=>{p.hasAttribute("data-fold-enable")?p.removeAttribute("data-fold-enable"):p.setAttribute("data-fold-enable","");}),v.classList.add("pops-panel-forms-fold-container"),v.classList.add("pops-user-select-none"),p.setAttribute("data-fold-enable",""),p.classList.add("pops-panel-forms-fold")),p.appendChild(v),t.setElementClassName(p,c.className),t.setElementAttributes(p,c.attributes),t.setElementProps(p,c.props),f.forEach(h=>{t.uListContainerAddItem(h,{ulElement:g,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:p,formHeaderDivElement:v});}),p.appendChild(g),l.appendChild(p),typeof d.afterAddToUListCallBack=="function"&&d.afterAddToUListCallBack(o,{target:p,ulElement:g,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:p,formHeaderDivElement:v});}else t.uListContainerAddItem(o,{ulElement:t.sectionContainerULElement});},gotoDeepMenu(l,c){var A,T;let d=c.closest("section.pops-panel-container");d&&u.cssHide(d,true);let f=u.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"}),p=u.createElement("ul",{className:"pops-panel-deepMenu-container-header-ul"}),g=u.createElement("ul"),v=o.headerTitle??o.text,h=u.createElement("div",{className:"pops-panel-deepMenu-container-header",innerHTML:`<p>${v}</p>`}),b=u.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:ut.getIcon("arrowLeft")});if(u.on(b,"click",void 0,E=>{E==null||E.preventDefault(),E==null||E.stopPropagation();let M=f.previousElementSibling;u.cssShow(M),f.remove();},{once:true}),(A=h.firstElementChild)==null||A.insertAdjacentElement("beforebegin",b),p.appendChild(h),f.appendChild(p),f.appendChild(g),o.forms&&Array.isArray(o.forms))for(let E=0;E<o.forms.length;E++){let M=o.forms[E];this.initFormItem(g,M);}(T=t.$el.$content)==null||T.appendChild(f),typeof o.afterEnterDeepMenuCallBack=="function"&&o.afterEnterDeepMenuCallBack(o,{sectionContainer:f,sectionContainerHeaderContainer:p,sectionContainerHeader:h,sectionBodyContainer:g});},setLiClickEvent(){u.on(e,"click",void 0,async l=>{typeof o.clickCallBack=="function"&&await o.clickCallBack(l,o)||this.gotoDeepMenu(l,e);});}};return s.init(),e["data-deepMenu"]=s,e},createSectionContainerItem_own(o){let t=document.createElement("li");return t.__formConfig__=o,o.className&&(t.className=o.className),t=o.getLiElementCallBack(t),t},createSectionContainerItem(o){let t=o.type;if(t==="switch")return this.createSectionContainerItem_switch(o);if(t==="slider")return this.createSectionContainerItem_slider_new(o);if(t==="input")return this.createSectionContainerItem_input(o);if(t==="textarea")return this.createSectionContainerItem_textarea(o);if(t==="select")return this.createSectionContainerItem_select(o);if(t==="select-multiple")return this.createSectionContainerItem_select_multiple_new(o);if(t==="button")return this.createSectionContainerItem_button(o);if(t==="deepMenu")return this.createSectionContainerItem_deepMenu(o);if(t==="own")return this.createSectionContainerItem_own(o);console.error("尚未实现的type类型",o);},createSectionContainerItem_forms(o){let t=this,e=o;if(e.type==="forms"){let n=o.forms,r=document.createElement("li"),a=document.createElement("ul");a.classList.add("pops-panel-forms-container-item-formlist"),r.classList.add("pops-panel-forms-container-item");let i=u.createElement("div",{className:"pops-panel-forms-container-item-header-text"});nt.setSafeHTML(i,e.text),e.isFold&&(nt.setSafeHTML(i,`
						<p>${e.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),u.on(i,"click",s=>{r.hasAttribute("data-fold-enable")?r.removeAttribute("data-fold-enable"):r.setAttribute("data-fold-enable","");}),i.classList.add("pops-panel-forms-fold-container"),i.classList.add("pops-user-select-none"),r.setAttribute("data-fold-enable",""),r.classList.add("pops-panel-forms-fold")),r.appendChild(i),t.setElementClassName(r,o.className),t.setElementAttributes(r,o.attributes),t.setElementProps(r,o.props),n.forEach(s=>{t.uListContainerAddItem(s,{ulElement:a,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:i});}),r.appendChild(a),t.sectionContainerULElement.appendChild(r),typeof e.afterAddToUListCallBack=="function"&&e.afterAddToUListCallBack(e,{target:r,ulElement:a,sectionContainerULElement:t.sectionContainerULElement,formContainerListElement:r,formHeaderDivElement:i});}else t.uListContainerAddItem(o,{ulElement:t.sectionContainerULElement});},uListContainerAddItem(o,t){let e=this.createSectionContainerItem(o);e&&t.ulElement.appendChild(e),typeof o.afterAddToUListCallBack=="function"&&o.afterAddToUListCallBack(o,{...t,target:e});},setAsideItemClickEvent(o,t){const e=this;u.on(o,"click",void 0,n=>{this.clearContainer(),u.cssShow(e.$el.$contentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(o);let r=t.headerTitle??t.title;if(typeof r=="string"&&r.trim()!==""){let i=document.createElement("li");i.__asideConfig__=t,nt.setSafeHTML(i,r),this.sectionContainerHeaderULElement.appendChild(i);}o.__forms__.forEach(i=>{this.createSectionContainerItem_forms(i);}),typeof t.callback=="function"&&t.callback(n,this.sectionContainerHeaderULElement,this.sectionContainerULElement);});}}),ps={init(o){const t=N.getRandomGUID(),e="panel";let n=cs();n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),o&&Array.isArray(o.content)&&(n.content=o.content),n=_.handleOnly(e,n);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);_.handleInit(a,[U.index,U.ninePalaceGridPosition,U.scrollbar,U.button,U.anim,U.common,U.panelCSS]);let i=_.handleZIndex(n.zIndex),s=Y.getMaskHTML(t,i),l=Y.getHeaderBtnHTML(e,n),{headerStyle:c,headerPStyle:d}=Y.getHeaderStyle(e,n),f=Y.getAnimHTML(t,e,n,`
			<div class="pops-${e}-title" style="text-align: ${n.title.position};${c}">${n.title.html?n.title.text:`<p pops style="${d}">${n.title.text}</p>`}${l}</div>
			<div class="pops-${e}-content">
				<aside class="pops-${e}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${e}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,"",i),p=Y.parseElement(f),{popsElement:g,headerCloseBtnElement:v,titleElement:h,contentElement:b,contentAsideElement:A,contentSectionContainerElement:T}=_.handleQueryElement(p,e);(n.isMobile||N.isPhone())&&u.addClassName(g,n.mobileClassName);let E=null,M=[p];if(n.mask.enable){let{maskElement:H}=_.handleMask({type:e,guid:t,config:n,animElement:p,maskHTML:s});E=H,M.push(E);}let L=_.handleEventDetails(t,r,a,e,p,g,E,n);return _.handleClickEvent("close",v,L,n.btn.close.callback),u.append(a,M),typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r),E!=null&&p.after(E),Fr().init({config:n,$el:{$content:b,$contentAside:A,$contentSectionContainer:T}}),_.handlePush(e,{guid:t,animElement:p,popsElement:g,maskElement:E,$shadowContainer:r,$shadowRoot:a}),n.drag&&At.drag(g,{dragElement:h,limit:n.dragLimit,extraDistance:n.dragExtraDistance,moveCallBack:n.dragMoveCallBack,endCallBack:n.dragEndCallBack}),_.handleResultDetails(L)}},us=()=>({target:document.documentElement,targetSelector:null,data:[{icon:ut.getIcon("search"),iconIsLoading:false,text:"搜索",item:[],callback(o,t,e){console.log("点击："+this.text,[o,t,e]);}},{icon:ut.getIcon("documentCopy"),iconIsLoading:false,text:"复制",item:[],callback(o,t,e){console.log("点击："+this.text,[o,t,e]);}},{icon:ut.getIcon("delete"),text:"删除",iconIsLoading:false,item:[],callback(o,t,e){console.log("点击："+this.text,[o,t,e]);}},{icon:ut.getIcon("loading"),iconIsLoading:true,text:"加载",item:[],callback(o,t,e){return console.log("点击："+this.text,[o,t,e]),false}},{icon:ut.getIcon("elemePlus"),iconIsLoading:true,text:"饿了么",callback(o,t,e){return console.log("点击："+this.text,[o,t,e]),false},item:[{icon:"",iconIsLoading:false,text:"处理文件",item:[],callback(o,t,e){console.log("点击："+this.text,[o,t,e]);}},{icon:"",iconIsLoading:false,text:"其它处理",callback(o,t,e){console.log("点击："+this.text,[o,t,e]);},item:[{icon:ut.getIcon("view"),iconIsLoading:false,text:"查看",item:[],callback(o,t,e){console.log("点击："+this.text,[o,t,e]);}}]}]}],chileMenuLeftOrRightDistance:0,childMenuTopOrBottomDistance:0,useShadowRoot:true,className:"",isAnimation:true,only:false,zIndex:1e4,preventDefault:true,style:null,beforeAppendToPageCallBack(){}}),hs={init(o){const t=N.getRandomGUID(),e="rightClickMenu";let n=us();if(n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n=_.handleOnly(e,n),n.target==null)throw new Error("config.target 不能为空");o.data&&(n.data=o.data);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);if(_.handleInit(a,[U.index,U.anim,U.common,U.rightClickMenu]),n.style!=null){let s=u.createElement("style",{innerHTML:n.style},{type:"text/css"});a.appendChild(s);}const i={rootElement:null,windowCheckClickEvent(s){if(!i.rootElement)return;let l=s.target;l.closest(`.pops-${e}`)||l.className&&l.className==="pops-shadow-container"&&l.shadowRoot!=null||i.closeAllMenu(i.rootElement);},shadowRootCheckClickEvent(s){!i.rootElement||s.target.closest(`.pops-${e}`)||i.closeAllMenu(i.rootElement);},addWindowCheckClickListener(){if(u.on(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const s=n.target.getRootNode();s instanceof ShadowRoot&&u.on(s,"click touchstart",void 0,i.shadowRootCheckClickEvent,{capture:true});}},removeWindowCheckClickListener(){if(u.off(globalThis,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true}),n.target instanceof Node){const s=n.target.getRootNode();s instanceof ShadowRoot&&u.off(s,"click touchstart",void 0,i.windowCheckClickEvent,{capture:true});}},contextMenuEvent(s,l){n.preventDefault&&u.preventEvent(s),_.handleOnly(e,n),i.rootElement&&i.closeAllMenu(i.rootElement);let c=i.showMenu(s,n.data,l);i.rootElement=c,n.only&&_.handlePush(e,{$shadowRoot:a,$shadowContainer:r,guid:t,animElement:c,popsElement:c,beforeRemoveCallBack(d){i.closeAllMenu(d.popsElement);}});},addContextMenuEvent(s,l){u.on(s,"contextmenu",l,i.contextMenuEvent);},removeContextMenuEvent(s,l){u.off(s,"contextmenu",l,i.contextMenuEvent);},animationCloseMenu(s){function l(c){u.off(s,u.getTransitionEndNameList(),l,{capture:true}),s.remove();}s.classList.contains(`pops-${e}-anim-show`)?(u.on(s,u.getTransitionEndNameList(),l,{capture:true}),s.classList.remove(`pops-${e}-anim-show`)):s.remove();},closeAllMenu(s){var c,d;if(s==null)return;(c=s==null?void 0:s.__menuData__)!=null&&c.root&&(s=(d=s==null?void 0:s.__menuData__)==null?void 0:d.root),s.__menuData__.child.forEach(f=>{this.animationCloseMenu(f);}),this.animationCloseMenu(s),i.rootElement=null;},getMenuContainerElement(s){let l=u.createElement("div",{className:`pops-${e}`,innerHTML:`
					<ul></ul>
					`}),c=this.getMenuZIndex();return c>1e4&&(l.style.zIndex=c.toString()),s&&l.setAttribute("is-children","true"),n.isAnimation&&u.addClassName(l,`pops-${e}-anim-grid`),l},getMenuZIndex(){return _.handleZIndex(n.zIndex)},getOffset(s,l,c){let d={top:0,right:0,bottom:0,left:0},f=u.width(s),p=u.height(s),g=1,v=u.width(globalThis)-g,h=u.height(globalThis)-g,b=v-f,A=h-p,T=n.chileMenuLeftOrRightDistance,E=n.childMenuTopOrBottomDistance,M=l.x,L=l.y;if(M=M<0?0:M,M+T>=b){if(c){let k=u.offset(c.$menu);M=v-k.left-T+g;}else M=g+T;M<0?M=0:M>b&&(M=b),d.right=M,Reflect.deleteProperty(d,"left");}else M=M+T,d.left=M,Reflect.deleteProperty(d,"right");if(L=L<0?0:L,L+E>=A){if(c){let k=u.offset(c.$parentItem,false);L=h-k.bottom-E+g;}else L=g+E;L<0?L=g:L>A&&(L=A),d.bottom=L,Reflect.deleteProperty(d,"top");}else L=L+E,d.top=L,Reflect.deleteProperty(d,"bottom");return d},showMenu(s,l,c){let d=this.getMenuContainerElement(false);Reflect.set(d,"__menuData__",{child:[]}),i.addMenuLiELement(s,d,d,l,c),u.css(d,{display:"none"}),u.append(a,d),document.contains(r)||(typeof n.beforeAppendToPageCallBack=="function"&&n.beforeAppendToPageCallBack(a,r),u.appendBody(r));let f=this.getOffset(d,{x:s.clientX,y:s.clientY},null);return u.css(d,{...f,display:""}),n.isAnimation&&u.addClassName(d,`pops-${e}-anim-show`),d},showClildMenu(s,l,c,d,f,p){let g=this.getMenuContainerElement(true);Reflect.set(g,"__menuData__",{parent:f,root:d}),Reflect.get(d,"__menuData__").child.push(g),i.addMenuLiELement(s,d,g,c,p),u.css(g,{display:"none"}),u.append(a,g);let h=f.closest(".pops-rightClickMenu"),b=this.getOffset(g,{x:l.clientX,y:l.clientY},{$menu:h,$parentItem:f});return u.css(g,{...b,display:""}),n.isAnimation&&u.addClassName(g,`pops-${e}-anim-show`),g},addMenuLiELement(s,l,c,d,f){let p=s.target,g=c.querySelector("ul");d.forEach(v=>{let h=u.parseTextToDOM("<li></li>");if(typeof v.icon=="string"&&v.icon.trim()!==""){let T=ut.getIcon(v.icon)??v.icon,E=u.parseTextToDOM(`<i class="pops-${e}-icon" is-loading="${v.iconIsLoading??false}">${T}</i>`);h.appendChild(E);}h.insertAdjacentHTML("beforeend",nt.getSafeHTML(`<span>${v.text}</span>`)),v.item&&Array.isArray(v.item)&&u.addClassName(h,`pops-${e}-item`);function b(){Array.from(g.children).forEach(M=>{if(u.removeClassName(M,`pops-${e}-is-visited`),!M.__menuData__)return;function L(k){k.querySelectorAll("ul li").forEach(G=>{var H;(H=G==null?void 0:G.__menuData__)!=null&&H.child&&L(G.__menuData__.child);}),k.remove();}L(M.__menuData__.child);});for(let M=0;M<l.__menuData__.child.length;M++){let L=l.__menuData__.child[M];a.contains(L)||(l.__menuData__.child.splice(M,1),M--);}if(u.addClassName(h,`pops-${e}-is-visited`),!v.item)return;let T=h.getBoundingClientRect(),E=i.showClildMenu(s,{clientX:T.left+u.outerWidth(h),clientY:T.top},v.item,l,h,f);h.__menuData__={child:E};}async function A(T){if(typeof v.callback=="function"){try{Lr.Object.defineProperty(s,"target",{get(){return p}});}catch{}let E=await v.callback(T,s,h,f);if(typeof E=="boolean"&&E==false)return}Array.from(g.children).forEach(E=>{u.off(E,"mouseenter touchstart");}),i.closeAllMenu(l);}u.on(h,"mouseenter touchstart",void 0,b),u.on(h,"click",void 0,A),g.appendChild(h);});}};return i.addContextMenuEvent(n.target,n.targetSelector),i.addWindowCheckClickListener(),{guid:t,config:n,removeWindowCheckClickListener:i.removeWindowCheckClickListener,addWindowCheckClickListener:i.addWindowCheckClickListener,removeContextMenuEvent:i.removeContextMenuEvent,addContextMenuEvent:i.addContextMenuEvent}}},bs=()=>({target:null,inputTarget:null,selfDocument:document,data:[{value:"数据1",text:"数据1-html"},{value:"数据2",text:"数据2-html"}],deleteIcon:{enable:true,callback(o,t,e){console.log("删除当前项",[o,t,e]),t.remove();}},useShadowRoot:true,className:"",isAbsolute:true,isAnimation:true,width:"250px",maxHeight:"300px",followTargetWidth:true,topDistance:0,position:"auto",positionTopToReverse:true,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:false,followPosition:"target",getItemHTML(o){return o.text??o},async getData(o){return console.log("当前输入框的值是：",o),[]},itemClickCallBack(o,t,e){console.log("item项的点击回调",[o,t,e]),this.inputTarget.value=e.value;},selectCallBack(o,t,e){console.log("item项的选中回调",[o,t,e]);},style:""}),gs={init(o){const t=N.getRandomGUID(),e="searchSuggestion";let n=bs();if(n=N.assign(n,Lt.getGlobalConfig()),n=N.assign(n,o),n.target==null)throw new Error("config.target 不能为空");n.inputTarget==null&&(n.inputTarget=n.target),o.data&&(n.data=o.data);const{$shadowContainer:r,$shadowRoot:a}=_.handlerShadow(n);if(_.handleInit(a,[U.index,U.anim,U.common]),n.style!=null){let s=document.createElement("style");u.createElement("style",{innerHTML:n.style},{type:"text/css"}),a.appendChild(s);}const i={selfDocument:n.selfDocument,$el:{root:null,$hintULContainer:null,$dynamicCSS:null},$data:{isEmpty:true},init(s=document.body||document.documentElement){this.initEl(),i.update(typeof n.data=="function"?n.data():n.data),i.updateDynamicCSS(),i.changeHintULElementWidth(),i.changeHintULElementPosition(),i.hide(),n.isAnimation&&i.$el.root.classList.add(`pops-${e}-animation`),a.appendChild(i.$el.root),s.appendChild(r);},initEl(){this.$el.root=i.getSearchSelectElement(),this.$el.$dynamicCSS=this.$el.root.querySelector("style[data-dynamic]"),this.$el.$hintULContainer=i.$el.root.querySelector("ul");},getSearchSelectElement(){let s=u.createElement("div",{className:`pops pops-${e}-search-suggestion`,innerHTML:`
						<style data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<ul class="pops-${e}-search-suggestion-hint">${n.toSearhNotResultHTML}</ul>
         				 `},{"data-guid":t,"type-value":e});return n.className!==""&&n.className!=null&&u.addClassName(s,n.className),s},getDynamicCSS(){return `
				.pops-${e}-animation{
					-moz-animation: searchSelectFalIn 0.5s 1 linear;
					-webkit-animation: searchSelectFalIn 0.5s 1 linear;
					-o-animation: searchSelectFalIn 0.5s 1 linear;
					-ms-animation: searchSelectFalIn 0.5s 1 linear;
				}
				.pops-${e}-search-suggestion{
					border: initial;
					overflow: initial;
				}
				ul.pops-${e}-search-suggestion-hint{
					position: ${n.isAbsolute?"absolute":"fixed"};
					z-index: ${_.handleZIndex(n.zIndex)};
					width: 0;
					left: 0;
					max-height: ${n.maxHeight};
					overflow-x: hidden;
					overflow-y: auto;
					padding: 5px 0;
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
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
					color: #515a6e;
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
					color: #8e8e8e;
				}
				ul.pops-${e}-search-suggestion-hint li:hover{
					background-color: rgba(0, 0, 0, .1);
				}
				`},getSearchItemLiElement(s,l){return u.createElement("li",{className:`pops-${e}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,"data-index":l,"data-value":i.getItemDataValue(s),innerHTML:`${n.getItemHTML(s)}${n.deleteIcon.enable?i.getDeleteIconHTML():""}`})},getItemDataValue(s){return s},setSearchItemClickEvent(s){u.on(s,"click",void 0,l=>{u.preventEvent(l),l.target.closest(`.pops-${e}-delete-icon`)?(typeof n.deleteIcon.callback=="function"&&n.deleteIcon.callback(l,s,s["data-value"]),this.$el.$hintULContainer.children.length||this.clear()):n.itemClickCallBack(l,s,s["data-value"]);},{capture:true});},setSearchItemSelectEvent(s){},setInputChangeEvent(s={capture:true}){(n.inputTarget instanceof HTMLInputElement||n.inputTarget instanceof HTMLTextAreaElement)&&(n.inputTarget.setAttribute("autocomplete","off"),u.on(n.inputTarget,"input",void 0,async l=>{let c=await n.getData(l.target.value);i.update(c);},s));},removeInputChangeEvent(s={capture:true}){u.off(n.inputTarget,"input",void 0,void 0,s);},showEvent(){i.updateDynamicCSS(),i.changeHintULElementWidth(),i.changeHintULElementPosition(),n.toHideWithNotResult&&i.$data.isEmpty?i.hide():i.show();},setShowEvent(s={capture:true}){if(n.followPosition==="target")u.on([n.target],["focus","click"],void 0,i.showEvent,s);else if(n.followPosition==="input")u.on([n.inputTarget],["focus","click"],void 0,i.showEvent,s);else if(n.followPosition==="inputCursor")u.on([n.inputTarget],["focus","click","input"],void 0,i.showEvent,s);else throw new Error("未知followPosition："+n.followPosition)},removeShowEvent(s={capture:true}){u.off([n.target,n.inputTarget],["focus","click"],void 0,i.showEvent,s),u.off([n.inputTarget],["input"],void 0,i.showEvent,s);},hideEvent(s){if(s.target instanceof Node){if(r.contains(s.target)||n.target.contains(s.target)||n.inputTarget.contains(s.target))return;i.hide();}},setHideEvent(s={capture:true}){Array.isArray(i.selfDocument)?i.selfDocument.forEach(l=>{u.on(l,["click","touchstart"],void 0,i.hideEvent,s);}):u.on(i.selfDocument,["click","touchstart"],void 0,i.hideEvent,s);},removeHideEvent(s={capture:true}){Array.isArray(i.selfDocument)?i.selfDocument.forEach(l=>{u.off(l,["click","touchstart"],void 0,i.hideEvent,s);}):u.off(i.selfDocument,["click","touchstart"],void 0,i.hideEvent,s);},setAllEvent(s={capture:true}){i.setInputChangeEvent(s),i.setHideEvent(s),i.setShowEvent(s);},removeAllEvent(s={capture:true}){i.removeInputChangeEvent(s),i.removeHideEvent(s),i.removeShowEvent(s);},getDeleteIconHTML(s=16,l="#bababa"){return `
				<svg class="pops-${e}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" fill="${l}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`},setPromptsInSearch(){let s=u.createElement("li",{className:`pops-${e}-search-suggestion-hint-searching-item`,innerHTML:n.searchingTip});i.$el.$hintULContainer.appendChild(s);},removePromptsInSearch(){var s;(s=i.$el.$hintULContainer.querySelector(`li.pops-${e}-search-suggestion-hint-searching-item`))==null||s.remove();},clearAllSearchItemLi(){nt.setSafeHTML(i.$el.$hintULContainer,"");},changeHintULElementPosition(s=n.target??n.inputTarget){let l=null;if(n.followPosition==="inputCursor"?l=u.getTextBoundingRect(n.inputTarget,n.inputTarget.selectionStart||0,n.inputTarget.selectionEnd||0,false):l=n.isAbsolute?u.offset(s):s.getBoundingClientRect(),l==null)return;let c=document.documentElement.clientHeight;n.isAbsolute&&(c=u.height(document));let d=u.width(document),f=n.position;if(n.position==="auto"){let g=l.bottom,v=u.height(i.$el.$hintULContainer);g+v>c?f="top":(f="bottom",i.$el.$hintULContainer.removeAttribute("data-top"));}f==="top"?(n.positionTopToReverse&&i.$el.$hintULContainer.setAttribute("data-top-reverse","true"),i.$el.$hintULContainer.style.top="",i.$el.$hintULContainer.style.bottom=c-l.top+n.topDistance+"px"):f==="bottom"&&(i.$el.$hintULContainer.removeAttribute("data-top-reverse"),i.$el.$hintULContainer.style.bottom="",i.$el.$hintULContainer.style.top=l.height+l.top+n.topDistance+"px");let p=u.width(i.$el.$hintULContainer);i.$el.$hintULContainer.style.left=(l.left+p>d?d-p:l.left)+"px";},changeHintULElementWidth(s=n.target??n.inputTarget){let l=s.getBoundingClientRect();n.followTargetWidth?i.$el.$hintULContainer.style.width=l.width+"px":i.$el.$hintULContainer.style.width=n.width;},updateDynamicCSS(){let s=this.getDynamicCSS();nt.setSafeHTML(this.$el.$dynamicCSS,s);},update(s=[]){if(!Array.isArray(s))throw new TypeError("传入的数据不是数组");n.data=s,n.data.length?(i.$data.isEmpty=false,n.toHideWithNotResult&&i.show(),i.clearAllSearchItemLi(),n.data.forEach((l,c)=>{let d=i.getSearchItemLiElement(l,c);i.setSearchItemClickEvent(d),i.setSearchItemSelectEvent(d),i.$el.$hintULContainer.appendChild(d);})):i.clear();},clear(){this.$data.isEmpty=true,this.clearAllSearchItemLi(),this.$el.$hintULContainer.appendChild(u.parseTextToDOM(n.toSearhNotResultHTML)),n.toHideWithNotResult&&this.hide();},hide(){this.$el.root.style.display="none";},show(){this.$el.root.style.display="";}};return i}};class Dn{constructor(){O(this,"config",{version:"2025.6.10",cssText:U,iconSVG:ut.$data,animation:Ae.$data,layer:Ct,forbiddenScroll:{event(t){return u.preventEvent(t)}},Utils:N,DOMUtils:u,InstanceUtils:At,MathFloatUtils:We,panelHandleContentUtils:Fr});O(this,"GlobalConfig",Lt);O(this,"alert",t=>Gr.init(t));O(this,"confirm",t=>Zi.init(t));O(this,"prompt",t=>es.init(t));O(this,"loading",t=>Cn.init(t));O(this,"iframe",t=>as.init(t));O(this,"tooltip",t=>kn.init(t));O(this,"drawer",t=>is.init(t));O(this,"folder",t=>ls.init(t));O(this,"panel",t=>ps.init(t));O(this,"rightClickMenu",t=>hs.init(t));O(this,"searchSuggestion",t=>gs.init(t));}init(){}noConflict(){return typeof F.globalThis.pops=="object"&&N.delete(F.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&N.delete(unsafeWindow,"pops"),new Dn}isPhone(t){return N.isPhone(t)}}const ln=new Dn,Tt={addBlockCSS(...o){let t=[];if(o.length!==0&&!(o.length===1&&typeof o[0]=="string"&&o[0].trim()===""))return o.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e);}),ur(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(o){let t=typeof Xe=="function"?Xe(o.keyName):null;typeof t=="string"&&t?ur(t):Tt.loadStyleLink(o.url);},async loadStyleLink(o){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=o,Sr.ready(()=>{document.head.appendChild(t);});},async loadScript(o){let t=document.createElement("script");return t.src=o,new Promise(e=>{t.onload=()=>{e(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(o){return o=o.trim(),o.match(/^http(s|):\/\//i)||(o.startsWith("/")||(o+="/"),o=window.location.origin+o),o},fixHttps(o){if(o.startsWith("https://")||!o.startsWith("http://"))return o;let t=new URL(o);return t.protocol="https:",t.toString()},lockScroll(...o){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let e=[document.documentElement,document.body].concat(...o||[]);return e.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){e.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function o(n){navigator.clipboard.readText().then(r=>{n(r);}).catch(r=>{he.error("读取剪贴板内容失败👉",r),n("");});}function t(n){navigator.permissions.query({name:"clipboard-read"}).then(r=>{o(n);}).catch(r=>{he.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),o(n);});}function e(){var n,r;return !(typeof((n=navigator==null?void 0:navigator.clipboard)==null?void 0:n.readText)!="function"||typeof((r=navigator==null?void 0:navigator.permissions)==null?void 0:r.query)!="function")}return new Promise(n=>{if(!e()){n("");return}document.hasFocus()?t(n):window.addEventListener("focus",()=>{t(n);},{once:true});})},escapeHtml(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}},ye={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},Q=oe.noConflict(),S=Sr.noConflict(),Pn=ln,he=new Q.Log(wt,$t.console||Qt.console);var gr;let xn=((gr=wt==null?void 0:wt.script)==null?void 0:gr.name)||void 0;ln.config.Utils.AnyTouch();const jr=false;he.config({debug:jr,logMaxCount:1e3,autoClearConsole:true,tag:true});D.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return ae.getValue(ye.qmsg_config_position.key,ye.qmsg_config_position.defaultValue)}},maxNums:{get(){return ae.getValue(ye.qmsg_config_maxnums.key,ye.qmsg_config_maxnums.defaultValue)}},showReverse:{get(){return ae.getValue(ye.qmsg_config_showreverse.key,ye.qmsg_config_showreverse.defaultValue)}},zIndex:{get(){let o=oe.getMaxZIndex(),t=ln.config.InstanceUtils.getPopsMaxZIndex().zIndex;return oe.getMaxValue(o,t)+100}}}));Pn.GlobalConfig.setGlobalConfig({zIndex:()=>{let o=oe.getMaxZIndex(void 0,void 0,e=>{var n;if((n=e==null?void 0:e.classList)!=null&&n.contains("qmsg-shadow-container")||e!=null&&e.closest("qmsg")&&e.getRootNode()instanceof ShadowRoot)return  false}),t=ln.config.InstanceUtils.getPopsMaxZIndex().zIndex;return oe.getMaxValue(o,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}}});const ms=new Q.GM_Menu({GM_getValue:ne,GM_setValue:qt,GM_registerMenuCommand:ve,GM_unregisterMenuCommand:vn}),qr=new Q.Httpx({xmlHttpRequest:mr,logDetails:jr});qr.interceptors.request.use(o=>o);qr.interceptors.response.use(void 0,o=>(he.error("拦截器-请求错误",o),o.type==="onabort"?D.warning("请求取消",{consoleLogContent:true}):o.type==="onerror"?D.error("请求异常",{consoleLogContent:true}):o.type==="ontimeout"?D.error("请求超时",{consoleLogContent:true}):D.error("其它错误",{consoleLogContent:true}),o));$t.Object.defineProperty,$t.Function.prototype.apply,$t.Function.prototype.call,$t.Element.prototype.appendChild,$t.setTimeout;const ur=Q.addStyle.bind(Q);document.querySelector.bind(document);document.querySelectorAll.bind(document);new Q.GM_Cookie;const Wr="GM_Panel",ys="data-init",hr="data-key",br="data-default-value",xs="data-init-more-value",Je={setting:{get width(){return window.innerWidth<550?"88vw":window.innerWidth<700?"550px":"700px"},get height(){return window.innerHeight<450?"70vh":window.innerHeight<550?"450px":"550px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class ws{constructor(t){O(this,"storageKey");O(this,"listenerData");if(typeof t=="string"){let e=t.trim();if(e=="")throw new Error("key参数不能为空字符串");this.storageKey=e;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new oe.Dictionary;}getLocalValue(){let t=ne(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){qt(this.storageKey,t);}set(t,e){let n=this.get(t),r=this.getLocalValue();Reflect.set(r,t,e),this.setLocalValue(r),this.triggerValueChangeListener(t,n,e);}get(t,e){let n=this.getLocalValue();return Reflect.get(n,t)??e}getAll(){return this.getLocalValue()}delete(t){let e=this.get(t),n=this.getLocalValue();Reflect.deleteProperty(n,t),this.setLocalValue(n),this.triggerValueChangeListener(t,e,void 0);}has(t){let e=this.getLocalValue();return Reflect.has(e,t)}keys(){let t=this.getLocalValue();return Reflect.ownKeys(t)}values(){let t=this.getLocalValue();return Reflect.ownKeys(t).map(e=>Reflect.get(t,e))}clear(){Ke(this.storageKey);}addValueChangeListener(t,e){let n=Math.random(),r=this.listenerData.get(t)||[];return r.push({id:n,key:t,callback:e}),this.listenerData.set(t,r),n}removeValueChangeListener(t){let e=false;for(const[n,r]of this.listenerData.entries()){for(let a=0;a<r.length;a++){const i=r[a];(typeof t=="string"&&i.key===t||typeof t=="number"&&i.id===t)&&(r.splice(a,1),a--,e=true);}this.listenerData.set(n,r);}return e}triggerValueChangeListener(t,e,n){if(!this.listenerData.has(t))return;let r=this.listenerData.get(t);for(let a=0;a<r.length;a++){const i=r[a];if(typeof i.callback=="function"){let s=this.get(t),l,c;typeof e<"u"&&arguments.length>=2?c=e:c=s,typeof n<"u"&&arguments.length>2?l=n:l=s,i.callback(t,c,l);}}}}const Yt=new ws(Wr),cn={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new Q.Dictionary),this.__contentConfig}},addContentConfig(o){Array.isArray(o)||(o=[o]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,o);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(o=0){return this.$data.contentConfig.get(o)??[]}},vs={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(o){return o},callback:()=>{ae.showPanel(cn.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){ae.isTopWindow()&&ms.add(this.$data.menuOption);},addMenuOption(o){Array.isArray(o)||(o=[o]),this.$data.menuOption.push(...o);},updateMenuOption(o){Array.isArray(o)||(o=[o]),o.forEach(t=>{let e=this.$data.menuOption.findIndex(n=>n.key===t.key);e!==-1&&(this.$data.menuOption[e]=t);});},getMenuOption(o){return this.$data.menuOption[o]}},ae={$data:{__configDefaultValueData:null,__onceExecMenuData:null,__onceExecData:null,__panelConfig:{},$panel:null,get configDefaultValueData(){return this.__configDefaultValueData==null&&(this.__configDefaultValueData=new Q.Dictionary),this.__configDefaultValueData},get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new Q.Dictionary),this.__onceExecMenuData},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new Q.Dictionary),this.__onceExecData},get scriptName(){return xn},get panelConfig(){return this.__panelConfig},set panelConfig(o){this.__panelConfig=o;},key:Wr,attributeKeyName:hr,attributeDefaultValueName:br},init(){this.initContentDefaultValue(),vs.init();},isTopWindow(){return $t.top===$t.self},initContentDefaultValue(){const o=n=>{if(!n.attributes||n.type==="button"||n.type==="forms"||n.type==="deepMenu")return;let r={},a=n.attributes[hr];a!=null&&(r[a]=n.attributes[br]);let i=n.attributes[ys];if(typeof i=="function"){let c=i();if(typeof c=="boolean"&&!c)return}let s=n.attributes[xs];s&&typeof s=="object"&&Object.assign(r,s);let l=Object.keys(r);if(!l.length){he.warn(["请先配置键",n]);return}l.forEach(c=>{let d=r[c];this.setDefaultValue(c,d);});},t=n=>{for(let r=0;r<n.length;r++){let a=n[r];o(a);let i=a.forms;i&&Array.isArray(i)&&t(i);}},e=[...cn.getAllContentConfig()];for(let n=0;n<e.length;n++){let r=e[n];if(!r.forms)continue;const a=r.forms;a&&Array.isArray(a)&&t(a);}},setDefaultValue(o,t){this.$data.configDefaultValueData.has(o)&&he.warn("请检查该key(已存在): "+o),this.$data.configDefaultValueData.set(o,t);},setValue(o,t){Yt.set(o,t);},getValue(o,t){let e=Yt.get(o);return e??(this.$data.configDefaultValueData.has(o)?this.$data.configDefaultValueData.get(o):t)},deleteValue(o){Yt.delete(o);},hasKey(o){return Yt.has(o)},addValueChangeListener(o,t){return Yt.addValueChangeListener(o,(n,r,a)=>{t(o,a,r);})},removeValueChangeListener(o){Yt.removeValueChangeListener(o);},triggerMenuValueChange(o,t,e){Yt.triggerValueChangeListener(o,e,t);},deleteExecMenuOnce(o){return this.$data.onceExecMenuData.delete(o),Yt.removeValueChangeListener(o)},deleteOnceExec(o){this.$data.onceExecData.delete(o);},exec(o,t,e,n=true){const r=this;let a;typeof o=="string"||Array.isArray(o)?a=()=>o:a=o;let i=false,s=a(),l=[];Array.isArray(s)?(i=true,l=s):l.push(s);let c=l.find(E=>!this.$data.configDefaultValueData.has(E));if(c){he.warn(`${c} 键不存在`);return}let d=JSON.stringify(l);if(n){if(this.$data.onceExecMenuData.has(d))return;this.$data.onceExecMenuData.set(d,1);}let f=[],p=[],g=(E,M)=>{let L=[];M instanceof HTMLStyleElement?L=[M]:Array.isArray(M)&&(L=[...M.filter(k=>k!=null&&k instanceof HTMLStyleElement)]),f=f.concat(L);},v=E=>this.getValue(E),h=()=>{for(let E=0;E<f.length;E++)f[E].remove(),f.splice(E,1),E--;},b=()=>{let E=false;return typeof e=="function"?E=e(l):E=l.every(M=>v(M)),E},A=E=>{let M=b(),L=[];if(M){let k=l.map(H=>this.getValue(H)),G=t({addStyleElement:(...H)=>g(true,...H),value:i?k:k[0]});G instanceof HTMLStyleElement?L.push(G):Array.isArray(G)&&L.push(...G.filter(H=>H!=null&&H instanceof HTMLStyleElement));}h(),f=[...L];};return n&&l.forEach(E=>{let M=this.addValueChangeListener(E,(L,k,G)=>{A();});p.push(M);}),A(),{clear(){this.clearStoreStyleElements(),this.removeValueChangeListener(),n&&r.$data.onceExecMenuData.delete(d);},clearStoreStyleElements:()=>h(),removeValueChangeListener:()=>{p.forEach(E=>{this.removeValueChangeListener(E);});}}},execMenu(o,t,e=false){return this.exec(o,n=>t(n),n=>n.every(a=>{let i=!!this.getValue(a);return e&&(i=!i),i}),false)},execMenuOnce(o,t){return this.exec(o,t,e=>e.every(r=>!!this.getValue(r)),true)},onceExec(o,t){if(typeof o!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(o)||(t(),this.$data.onceExecData.set(o,1));},showPanel(o,t=`${xn}-设置`){let e=Pn.panel({title:{text:`${xn}-设置`,position:"center",html:false,style:""},content:o,btn:{close:{enable:true,callback:(n,r)=>{n.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(n,r)=>{n(),this.$data.$panel=null;}},width:Je.setting.width,height:Je.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=e;}};let xe="";document.documentElement?document.head?document.body?xe=`<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`:document.head.childNodes.length?xe=`<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`:xe=`<html>
	<head></head>
</html>

注入速度等级：2`:xe=`<html>
</html>

注入速度等级：1`:xe=`document.documentElement is null
	
注入速度等级：0`;const jt=(o,t,...e)=>setTimeout(()=>{try{o(...e);}catch(n){D.error(n.toString(),{consoleLogContent:true});}},t),Kr={success:"√ ",error:"× ",warn:"!!! ",info:""},lt={setTagList(o,t){S.html(o,"");let e="";t.forEach(n=>{e+=`
				<p class="${n.tag}">${n.text??""}</p>
			`;}),S.html(o,e);},setTag(o,t,e){lt.clearTag(o),S.addClass(o,t),typeof e=="string"&&S.html(o,e);},clearTag(o){Object.keys(Kr).forEach(t=>{S.removeClass(o,t);});}},I=o=>({type:"own",getLiElementCallBack(e){let n=o(),r=S.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text">${n.tag==null?n.text:Kr[n.tag]+n.text}</p>
					<p class="pops-panel-item-left-desc-text" style="${n.description==null||n.description===""?"display: none;":""}">${n.description||""}</p>
				`}),a=r.querySelector(".pops-panel-item-left-main-text"),i=["support-info"];return n.tag!=null&&i.push(n.tag),S.addClass(a,i),e.appendChild(r),e},afterAddToUListCallBack(e,n){let r=o();if(typeof r.afterRender=="function"){let a=n.target,i=a.querySelector(".pops-panel-item-left-text"),s=a.querySelector(".pops-panel-item-left-main-text"),l=a.querySelector(".pops-panel-item-left-desc-text");try{r.afterRender({...n,$leftContainer:i,$leftText:s,$leftDesc:l});}catch(c){console.log(c),lt.setTag(s,"error","afterRender 函数执行错误"+c);}}}}),V={asideLastVisit:"aside-last-visit"},As={getWindow(){return Pt.unsafeWindow.isSupport()?$t:window}};class Ts{}class dn extends Ts{isSupportGM(){return typeof it=="object"&&it!=null}}class ht extends dn{}const ct={getApiDocUrl(o,t){return t=t??o,`<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${o}" target="_blank">${t}</a>`}};class Es extends ht{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof it.addElement=="function"}}isSupport(){return typeof Fe=="function"}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{let r=null,a=null;try{let i=As.getWindow(),s=t+"_test_script_exec";return r=Fe("script",{id:s,textContent:'window.GM_addElement_test_str = "bar";'}),a=document.querySelector("#"+s),r==null?{text:"GM_addElement is not retrun element",tag:"error"}:typeof i.GM_addElement_test_str!="string"?{text:"GM_addElement script element is not work",tag:"error"}:(Reflect.deleteProperty(i,"GM_addElement_test_str"),{text:Tt.escapeHtml("支持添加<script>元素且执行js"),tag:"success"})}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{a==null||a.remove();}}),I(()=>{let r=null,a=null;try{let i="GM_addElement_test2";if(r=Fe(document.body,"div",{"data-src":"https://example.com/image.png",id:i}),a=document.querySelector("#"+i),!a)return {text:"不支持3个参数",tag:"error"};const s=a.attachShadow({mode:"closed"});return Fe(s,"style",{textContent:"div { color: black; };"}),s.querySelector("style")?r==null?{text:"传入3个参数但是返回为空",tag:"error"}:a.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{a==null||a.remove();}})),n}}class Ss extends ht{isSupport(){return typeof Vn=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof it.addStyle=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-GM_addStyle"+t,title:t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{let r=null,a=null;try{return r=S.createElement("div",{id:t,innerText:t+" test"}),document.body.appendChild(r),a=Vn(`
                            #${t} {
                                background-color: rgb(255, 0, 0);
                            }
                        `),a==null?{text:t+" returns is null",tag:"error"}:window.getComputedStyle(r).backgroundColor!=="rgb(255, 0, 0)"?{text:t+" test element background is not rgb(255, 0, 0)",tag:"error"}:{text:Tt.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}}catch(i){return console.error(i),{text:"执行错误 "+i,tag:"error"}}finally{r==null||r.remove(),a==null||a.remove();}})),n}}class Cs extends ht{isSupport(){return typeof wn=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof it.addValueChangeListener=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r=t+"_key_1";return I(()=>({text:"测试监听数据存储改变",description:"",tag:"info",afterRender(a){let i=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(a.$leftContainer,i);let s,l,c=[];S.on(i,"click",d=>{Q.preventEvent(d);try{c=[],clearTimeout(s),lt.setTag(a.$leftText,"info","等待触发回调"),S.text(a.$leftDesc,this.text),S.show(a.$leftDesc,!1);let f=Q.formatTime(Date.now());l=l??wn(r,function(p,g,v,h){console.log(arguments),clearTimeout(s),c.push({tag:"success",text:"支持触发回调"}),typeof p!="string"?c.push({tag:"error",text:`不支持回调参数key，当前类型：${typeof p}`}):c.push({tag:"success",text:`支持回调参数key，当前类型：${typeof p}`}),typeof v!=typeof f?c.push({tag:"error",text:`不支持回调参数newValue，当前类型：${typeof f}`}):c.push({tag:"success",text:`支持回调参数newValue，当前类型：${typeof f}`}),typeof h!="boolean"?c.push({tag:"error",text:`不支持回调参数remote，当前类型：${typeof h}`}):c.push({tag:"success",text:`支持回调参数remote，当前类型：${typeof h}`}),lt.setTagList(a.$leftText,c);}),console.log("GM_addValueChangeListener listenerId："+l+" typeof："+typeof l),typeof l!="number"&&typeof l!="string"?c.push({tag:"warn",text:"listenerId类型不是number或string"}):c.push({tag:"success",text:"listenerId类型："+typeof l}),s=setTimeout(()=>{c.push({tag:"error",text:"不支持触发回调"}),lt.setTagList(a.$leftText,c);},3e3),qt(r,f);}catch(f){D.error(f.toString(),{consoleLogContent:true});}});}}))})()),n}}class ks extends ht{isSupport(){return (typeof Kt=="object"||typeof Kt=="function")&&Kt!=null}getApiOption(){let t=this.isSupport();return {isSupportList:t&&typeof Kt.list=="function",isSupportSet:t&&typeof Kt.set=="function",isSupportDelete:t&&typeof Kt.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let t=this.isSupportGM()&&typeof it.cookie=="object"&&it.cookie!=null;return {name:"GM.cookie",isSupport:t,isSupportList:t&&typeof it.cookie.list=="function",isSupportSet:t&&typeof it.cookie.set=="function",isSupportDelete:t&&typeof it.cookie.delete=="function"}}getUIOption(){let t=this.getApiName(),e=this.getApiOption(),n=this.getAsyncApiOption(),r={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t+".list",`${t} & ${n.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(i){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]},a=r.forms[0].forms;if(this.isSupport()&&a.push(I(()=>e.isSupportList?{text:`支持 ${t}.list`,tag:"success"}:{text:`不支持 ${t}.list`,tag:"error"}),I(()=>e.isSupportSet?{text:`支持 ${t}.set`,tag:"success"}:{text:`不支持 ${t}.set`,tag:"error"}),I(()=>e.isSupportDelete?{text:`支持 ${t}.delete`,tag:"success"}:{text:`不支持 ${t}.delete`,tag:"error"})),n.isSupport?a.push(I(()=>n.isSupportList?{text:`支持 ${n.name}.list`,tag:"success"}:{text:`不支持 ${n.name}.list`,tag:"error"}),I(()=>n.isSupportSet?{text:`支持 ${n.name}.set`,tag:"success"}:{text:`不支持 ${n.name}.set`,tag:"error"}),I(()=>n.isSupportDelete?{text:`支持 ${n.name}.delete`,tag:"success"}:{text:`不支持 ${n.name}.delete`,tag:"error"})):a.push(I(()=>({text:"不支持 "+n.name,tag:"error"}))),this.isSupport()){let i={name:"test",value:"1",expirationDate:(Date.now()+864e5)/1e3};r.forms[1].forms.push(I(()=>{try{return {text:Tt.escapeHtml("测试list获取所有Cookie"),tag:"info",description:"点击按钮进行测试",afterRender(s){let l=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);S.on(l,"click",c=>{try{Q.preventEvent(c),Kt.list({},(d,f)=>{console.log(d),f?D.error(f):Array.isArray(d)?Pn.alert({title:{text:"GM_cookie.list",position:"center"},content:{text:JSON.stringify(d,null,4),html:!0},drag:!0,mask:{enable:!0},width:Je.setting.width,height:Je.setting.height,style:`
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`}):alert("获取的cookie信息不是数组");});}catch(d){D.error(d.toString(),{consoleLogContent:!0});}}),S.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),I(()=>{try{return {text:Tt.escapeHtml("测试set新增Cookie"),tag:"info",description:JSON.stringify(i),afterRender(s){let l=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);S.on(l,"click",c=>{try{Q.preventEvent(c),Kt.set(i,d=>{d?D.error(d,{consoleLogContent:!0}):D.success("set cookie success");});}catch(d){D.error(d.toString(),{consoleLogContent:!0});}}),S.after(s.$leftContainer,l);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}),I(()=>{try{let s={name:"test"};return {text:Tt.escapeHtml("测试delete删除Cookie"),tag:"info",description:JSON.stringify(s),afterRender(l){let c=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);S.on(c,"click",d=>{try{Q.preventEvent(d),Kt.delete(s,f=>{f?D.error(f,{consoleLogContent:!0}):D.success("delete cookie success");});}catch(f){D.error(f.toString(),{consoleLogContent:!0});}}),S.after(l.$leftContainer,c);}}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}));}return r}}class Ms extends ht{isSupport(){return typeof Ke=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof it.deleteValue=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.name?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r="Test GM_deleteValue null",a=null;return I(()=>({text:"测试存储null值并删除",description:`"${r}": ${a}`,tag:"info",afterRender(i){let s=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(i.$leftContainer,s),S.on(s,"click",l=>{Q.preventEvent(l);try{qt(r,a),Ke(r);let c=ne(r);typeof c=="object"&&c===null?D.error("该值未删除，读取的值："+c):D.success("成功删除该值");}catch(c){D.error(c.toString(),{consoleLogContent:true});}});}}))})()),n}}class Ls extends ht{isSupport(){return typeof zn=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof it.deleteValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r={GM_deleteValues_key_1:555,"GM.deleteValues_key_2":666};return I(()=>({text:"测试存储对象然后删除再读取",description:`${JSON.stringify(r)}`,tag:"info",afterRender(a){let i=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(a.$leftContainer,i),S.on(i,"click",s=>{Q.preventEvent(s);try{Qe(r);let l=Object.keys(r),c=we(l);if(JSON.stringify(c)!==JSON.stringify(r)){D.error("写入失败，写入的数据和读取的数据不相同");return}zn(l);let d=we(l);d==null?D.warning("删除情况未知，因为读取到的数据为null"):typeof d=="object"&&JSON.stringify(d)==="{}"?D.success("删除成功，读取的数据为{}"):(D.error("删除情况未知，因为读取到的数据类型不是object"),console.log(d));}catch(l){D.error(l.toString(),{consoleLogContent:true});}});}}))})()),n}}class $s extends ht{isSupport(){return typeof Zr=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof it.download=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>({text:Tt.escapeHtml("TODO"),tag:"info",afterRender(r){var a;(a=r.target)==null||a.querySelector(".support-info");}}))),n}}class Is extends ht{isSupport(){return typeof Xe=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof it.getResourceText=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return typeof Xe("ViewerCSS")=="string"?{text:Tt.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:Tt.escapeHtml("GM_getResourceText return is not string"),tag:"error"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class _s extends ht{isSupport(){return typeof Gn=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof it.getResourceUrl=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{let r=Gn("ViewerCSS");return typeof r=="string"?r.trim().startsWith("data:text/css;base64")?{text:Tt.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:Tt.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"}:{text:Tt.escapeHtml("GM_getResourceURL return is not string"),tag:"error"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Os extends ht{isSupport(){return typeof Fn=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof it.getTab=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>({text:"测试获取当前Tab",description:"",tag:"info",afterRender(r){let a=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);S.after(r.$leftContainer,a);let i;S.on(a,"click",s=>{Q.preventEvent(s),S.text(r.$leftDesc,this.text),S.show(r.$leftDesc,false);try{clearTimeout(i),D.info("等待3s内触发回调函数"),i=jt(()=>{lt.setTag(r.$leftText,"error","不支持触发回调函数");},3e3),Fn(l=>{clearTimeout(i),typeof l=="object"&&l!=null?lt.setTagList(r.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):lt.setTagList(r.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]);});}catch(l){D.error(l.toString(),{consoleLogContent:true});}});}}))),n}}class Rs extends ht{isSupport(){return typeof ta=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof it.getTabs=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:Tt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Ds extends ht{isSupport(){return typeof ne=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof it.getValue=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(...[{key:"Test GM_getValue boolean",value:true,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue number",value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue string",value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_getValue undefined",value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue null",value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue object",value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(r=>(()=>{let a=r.key,i=r.value;return I(()=>({text:r.text(),description:r.desc(),tag:"info",afterRender(s){let l=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(s.$leftContainer,l),S.on(l,"click",c=>{Q.preventEvent(c);try{qt(a,i);let d=ne(a);if(typeof d==typeof i){if(i===null&&i!=d){D.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}D.success("读取成功，存储类型和读取类型一致");}else D.error("读取成功，但存储类型和读取类型不同");}catch(d){D.error(d.toString(),{consoleLogContent:true});}});}}))})()),(()=>{let r="Test GM_getValue null with defaultValue",a=123;return I(()=>({text:"存储object类型的null，读取时指定默认值为"+a,description:`GM_getValue("${r}", ${a})`,tag:"info",afterRender(i){let s=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(i.$leftContainer,s),S.on(s,"click",l=>{Q.preventEvent(l);try{qt(r,null);let c=ne(r,a);typeof c=="object"&&c==null?D.success("读取的值是存储的值："+c):D.error("读取的值不是存储的值："+c);}catch(c){D.error(c.toString(),{consoleLogContent:true});}});}}))})(),(()=>{let r="Test GM_getValue defaultValue",a=123;return I(()=>({text:"不存储，测试调用默认值",description:`GM_getValue("${r}", ${a})`,tag:"info",afterRender(i){let s=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(i.$leftContainer,s),S.on(s,"click",l=>{Q.preventEvent(l);try{let c=ne(r,a);typeof c==typeof a?D.success("读取的值是默认值："+c):D.error("读取的值不是默认值："+c);}catch(c){D.error(c.toString(),{consoleLogContent:true});}});}}))})()),n}}class Ps extends ht{isSupport(){return typeof we=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof it.getValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>({text:"测试直接读取",description:"没有入参",tag:"info",afterRender(r){let a=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);S.after(r.$leftContainer,a),S.on(a,"click",i=>{Q.preventEvent(i);try{let s=we();D.info("请在控制台查看读取的数据"),console.log(s);}catch(s){D.error(s.toString(),{consoleLogContent:true});}});}})),I(()=>{let r={"GM_getValues-test-key-non-exists-1":1111,"GM_getValues-test-key-non-exists-2":2222};return {text:"测试读取不存在的数据",description:"数据默认值："+JSON.stringify(r),tag:"info",afterRender(a){let i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);S.after(a.$leftContainer,i),S.on(i,"click",s=>{Q.preventEvent(s);try{let l=we(r);console.log(l),l==null?D.error("读取失败，读取的数据为null"):JSON.stringify(l)===JSON.stringify(r)?D.success("读取成功，读取的数据和默认值相同"):D.error("读取成功，但读取的数据和默认值不同");}catch(l){D.error(l.toString(),{consoleLogContent:true});}});}}}),(()=>{let r={"GM_getValues-test-key-1":1,"GM_getValues-test-key-2":2};return I(()=>({text:"测试存储对象并读取",description:JSON.stringify(r),tag:"info",afterRender(a){let i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);S.after(a.$leftContainer,i),S.on(i,"click",s=>{Q.preventEvent(s);try{Qe(r);let l=Object.keys(r),c=we(l);console.log(c),c==null?D.error("读取失败，读取的数据为null"):JSON.stringify(c)===JSON.stringify(r)?D.success("读取成功，写入的数据和读取的数据相同"):D.error("读取成功，但写入的数据和读取的数据不同");}catch(l){D.error(l.toString(),{consoleLogContent:true});}});}}))})()),n}}class Hs extends ht{isSupport(){return typeof wt=="object"&&wt!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof it.info=="object"}}getUIOption(){var r,a;let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(i){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(...[{value:wt==null?void 0:wt.scriptHandler,type:"string",text:"GM_info.scriptHandler"},{value:wt==null?void 0:wt.scriptMetaStr,type:"string",text:"GM_info.scriptMetaStr"},{value:wt==null?void 0:wt.version,type:"string",text:"GM_info.version"},{value:wt==null?void 0:wt.script,type:"object",text:"GM_info.script"},{value:(r=wt==null?void 0:wt.script)==null?void 0:r.name,type:"string",text:"GM_info.script.name"},{value:(a=wt==null?void 0:wt.script)==null?void 0:a.version,type:"string",text:"GM_info.script.version"}].map(i=>I(()=>{try{return i.value!=null&&typeof i.value===i.type?{text:"支持 "+i.text+" 类型："+i.type,tag:"success"}:{text:"不支持 "+i.text+" 类型："+i.type,tag:"error"}}catch(s){return console.error(s),{text:"执行错误 "+s,tag:"error"}}finally{}}))),n}}class Bs extends ht{isSupport(){return typeof jn=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof it.listValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>({text:"查看存储的所有键名",tag:"info",afterRender(r){let a=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);S.after(r.$leftContainer,a),S.on(a,"click",i=>{Q.preventEvent(i);try{let s=jn();Array.isArray(s)?s.find(c=>typeof c!="string")?D.error("返回值数组中存在非string类型"):alert(JSON.stringify(s,null,4)):D.error("返回值不是数组");}catch(s){D.error(s.toString(),{consoleLogContent:true});}});}}))),n}}class Ns extends ht{isSupport(){return typeof qn=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof it.log=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{let r="test GM_log";return {text:Tt.escapeHtml("请在控制台查看输出"),tag:"info",description:"test GM_log",afterRender(a){let i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);S.on(i,"click",s=>{Q.preventEvent(s);try{qn(r);}catch(l){D.error(l.toString(),{consoleLogContent:!0});}}),S.after(a.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Us extends ht{isSupport(){return typeof hn=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof it.notification=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{let r,a,i=!1,s=!1,l=!1;return {text:"点击通知的内容用于测试函数是否生效",description:"",tag:"info",afterRender(c){r=c.target,a=c.$leftContainer;let d=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),f,p,g=Q.debounce(()=>{try{clearTimeout(f),clearInterval(p);let v="",h="success",b="",A="success";i?(v+="支持 onclick 函数",s?(v=v.trim(),v+="且支持提供 event 参数"):(v+="但是不支持提供 event 参数",h="warn")):(v+="不支持 onclick 函数",h="error"),l?b+="支持 ondone 函数":(b+="不支持 ondone 函数",A="error"),S.html(c.$leftText,`
										<p class="${h}">${v}</p>
										<p class="${A}">${b}</p>
									`),i=!1,l=!1,s=!1;}catch(v){D.error(v.toString(),{consoleLogContent:!0});}},800);S.on(d,"click",v=>{try{Q.preventEvent(v),clearTimeout(f),clearInterval(p);let h=10,b=h,A=()=>{let T=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${b}s`;return b--,T};S.text(c.$leftText,A()),S.text(c.$leftDesc,this.text),S.show(c.$leftDesc,!1),f=jt(()=>{clearInterval(p),lt.setTag(c.$leftText,"error","测试超时，未触发回调");},h*1e3),p=setInterval(()=>{S.text(c.$leftText,A());},1e3),hn({title:"测试 GM_notification 标题",text:"测试 GM_notification 内容",url:"https:/example.com/",onclick:T=>{i=!0,T&&(s=!0,T.preventDefault()),g();},ondone(){l=!0,g();}});}catch(h){D.error(h.toString(),{consoleLogContent:!0});}}),S.after(a,d);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}}),I(()=>{try{return {text:Tt.escapeHtml("点击通知的内容跳转链接"),tag:"info",afterRender(r){let a=r.target,i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);S.on(i,"click",s=>{Q.preventEvent(s);try{hn({title:"测试 GM_notification 标题",text:"测试 GM_notification 内容",url:"https:/example.com/"});}catch(l){D.error(l.toString(),{consoleLogContent:!0});}}),S.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}})),n}}class Vs extends ht{isSupport(){return typeof Le=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof it.openInTab=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:"后台打开：https://www.example.com/",tag:"info",afterRender(r){let a=r.target,i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);S.on(i,"click",s=>{try{Q.preventEvent(s),S.text(r.$leftDesc,this.text),S.show(r.$leftDesc,!1);let l=Le("https://www.example.com/");if(typeof l=="object")if(l==null)lt.setTag(r.$leftText,"error","返回值为null");else {let c="close"in l&&typeof l.close=="function",d="closed"in l&&typeof l.closed=="boolean",f="onclose"in l;S.html(r.$leftText,`
													${c?'<p class="success">支持 .close()</p>':'<p class="error">不支持 .close()</p>'}
													${d?'<p class="success">支持 .closed</p>':'<p class="error">不支持 .closed</p>'}
													${f?'<p class="success">支持设置属性 .onclose</p>':'<p class="error">不支持设置属性 .onclose</p>'}
										`);}else lt.setTag(r.$leftText,"error","返回值不是对象："+typeof l);}catch(l){D.error(l.toString(),{consoleLogContent:!0});}}),S.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}}),I(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(r){let a=r.target,i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),s,l=()=>{clearTimeout(s),lt.setTag(r.$leftText,"success","测试新标签页打开成功");};S.on(i,"click",c=>{try{Q.preventEvent(c),S.off($t,"blur",l,{capture:!0}),clearTimeout(s),lt.setTag(r.$leftText,"info","等待页面失去焦点..."),S.text(r.$leftDesc,this.text),S.show(r.$leftDesc,!1),S.on($t,"blur",l,{capture:!0,once:!0}),Le("https://www.example.com/",{active:!0}),s=jt(()=>{S.off($t,"blur",l,{capture:!0}),lt.setTag(r.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch(d){D.error(d.toString(),{consoleLogContent:!0});}}),S.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}}),I(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(r){let a=r.target,i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),s;S.on(i,"click",l=>{try{Q.preventEvent(l),clearTimeout(s),lt.setTag(r.$leftText,"info","等待调用 .close()"),S.text(r.$leftDesc,this.text),S.show(r.$leftDesc,!1);let c=Le("https://www.example.com/");c&&typeof(c==null?void 0:c.close)=="function"?s=jt(()=>{try{c.close(),lt.setTag(r.$leftText,"success","成功调用 .close()");}catch(d){lt.setTag(r.$leftText,"error","调用 .close() 方法失败 "+d);}},1e3):lt.setTag(r.$leftText,"error","返回对象中不支持 .close() 方法");}catch(c){D.error(c.toString(),{consoleLogContent:!0});}}),S.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}}),I(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(r){let a=r.target,i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),s,l;S.on(i,"click",c=>{try{Q.preventEvent(c),clearTimeout(l),clearTimeout(s),lt.setTag(r.$leftText,"info","等待触发监听 .onclose"),S.text(r.$leftDesc,this.text),S.show(r.$leftDesc,!1);let d=Le("https://www.example.com/");typeof d=="object"&&d!=null&&(d.onclose=()=>{clearTimeout(s),clearTimeout(l),lt.setTag(r.$leftText,"success","成功触发 .onclose");}),d&&typeof(d==null?void 0:d.close)=="function"?s=jt(()=>{try{d.close(),l=jt(()=>{lt.setTag(r.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch(f){lt.setTag(r.$leftText,"error","调用 .close() 方法失败 "+f);}},1e3):lt.setTag(r.$leftText,"error","返回对象中不支持 .close() 方法");}catch(d){D.error(d.toString(),{consoleLogContent:!0});}}),S.after(r.$leftContainer,i);}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}})),n}}class zs extends ht{isSupport(){return typeof ve=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof it.registerMenuCommand=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(r){let a=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);S.after(r.$leftContainer,a);let i,s;S.on(a,"click",l=>{try{Q.preventEvent(l),clearTimeout(i),clearInterval(s),S.text(r.$leftDesc,this.text),S.show(r.$leftDesc,!1);let c=10,d=()=>{let p=`已执行注册菜单，请在${c}s内点击菜单项`;return c--,p};lt.setTag(r.$leftText,"info",d()),s=setInterval(()=>{lt.setTag(r.$leftText,"info",d());},1e3),i=jt(()=>{clearInterval(s),lt.setTag(r.$leftText,"error","测试超时，未触发回调");},10*1e3);const f=ve("Test Menu",p=>{try{clearInterval(s),clearTimeout(i),lt.clearTag(r.$leftText);let g=[];g.push({tag:"success",text:"支持注册菜单"}),p?g.push({tag:"success",text:"支持点击回调且有event参数"}):g.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof f=="number"||typeof f=="string"?g.push({tag:"success",text:"函数返回值是string|number"}):g.push({tag:"error",text:"函数返回值不是string|number："+typeof f}),S.html(r.$leftText,g.map(v=>`<p class="${v.tag}">${v.text}</p>`).join(`
`));}catch(g){D.error(g.toString(),{consoleLogContent:!0});}});}catch(c){D.error(c.toString(),{consoleLogContent:!0});}});}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}}),I(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(r){let a=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);S.after(r.$leftContainer,a);let i;S.on(a,"click",s=>{try{Q.preventEvent(s),clearTimeout(i);const l=ve("Test Update Menu",c=>{});D.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(i),i=jt(()=>{ve("Test Update Menu Success!!!",()=>{},{id:l}),D.success("已执行更新菜单命令，请自行验证");},3e3);}catch(l){D.error(l.toString(),{consoleLogContent:!0});}});}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Gs extends ht{isSupport(){return typeof Wn=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof it.removeValueChangeListener=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r=t+"_key_1";return I(()=>({text:"测试移除监听器",description:"",tag:"info",afterRender(a){let i=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(a.$leftContainer,i);let s=[];S.on(i,"click",l=>{Q.preventEvent(l);try{s=[],lt.setTag(a.$leftText,"info","等待移除监听器"),S.text(a.$leftDesc,this.text),S.show(a.$leftDesc,!1);let c=Q.formatTime(Date.now()),d=wn(r,function(f,p,g,v){console.log(arguments),s.push({tag:"error",text:"未成功移除监听器"}),lt.setTagList(a.$leftText,s);});Wn(d),s.push({tag:"success",text:"支持移除监听器"}),lt.setTagList(a.$leftText,s),qt(r,c);}catch(c){D.error(c.toString(),{consoleLogContent:true});}});}}))})()),n}}class Fs extends ht{isSupport(){return typeof ea=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof it.saveTab=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:Tt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class js extends ht{isSupport(){return typeof Kn=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof it.setClipboard=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>({text:"复制内容到剪贴板：Test GM_setClipboard",tag:"info",afterRender(r){let a=S.parseHTML(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
							`,false,false);S.after(r.$leftContainer,a);let i;S.on(a,"click",s=>{try{Q.preventEvent(s),clearTimeout(i),D.info("等待3s内触发成功复制的回调"),i=jt(()=>{lt.setTag(r.$leftText,"error","不支持触发回调函数");},3e3),Kn("Test GM_setClipboard","text",()=>{clearTimeout(i),lt.setTag(r.$leftText,"success","支持触发回调函数");});}catch(l){D.error(l.toString(),{consoleLogContent:true});}});}}))),n}}class qs extends ht{isSupport(){return typeof qt=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof it.setValue=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(...[{key:"Test GM_setValue boolean",value:true,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue number",value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue string",value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_setValue undefined",value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue null",value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue object",value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(r=>(()=>{let a=r.key,i=r.value;return I(()=>({text:r.text(),description:r.desc(),tag:"info",afterRender(s){let l=S.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);S.after(s.$leftContainer,l),S.on(l,"click",c=>{Q.preventEvent(c);try{qt(a,i),D.info("执行写入完毕，请自行查看是否成功写入");}catch(d){D.error(d.toString(),{consoleLogContent:true});}});}}))})())),n}}class Ws extends ht{isSupport(){return typeof Qe=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof it.setValues=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push((()=>{let r={foo:1,bar:2};return I(()=>({text:"测试存储对象",description:JSON.stringify(r),tag:"info",afterRender(a){let i=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);S.after(a.$leftContainer,i),S.on(i,"click",s=>{Q.preventEvent(s);try{Qe(r),D.info("执行写入完毕，请自行查看是否成功写入");}catch(l){D.error(l.toString(),{consoleLogContent:true});}});}}))})()),n}}class Ks extends ht{isSupport(){return typeof vn=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof it.unregisterMenuCommand=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(r){let a=S.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);S.after(r.$leftContainer,a);let i;S.on(a,"click",s=>{try{Q.preventEvent(s),clearTimeout(i);const l=ve("Test UnRegister Menu",c=>{});D.info("已注册菜单，10s后自动执行卸载",{timeout:5*1e3}),clearTimeout(i),i=jt(()=>{vn(l),D.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(l){D.error(l.toString(),{consoleLogContent:!0});}});}}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Xs extends ht{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof $t=="object"&&$t!=null}getUIOption(){let t=this.getApiName(),e={id:"aside-"+t,title:t,headerTitle:`${ct.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(n){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&e.forms[1].forms.push(I(()=>{let n="test-gm-window",r=Qt==$t;return Qt[n]=n,r=typeof $t[n]!="string",Reflect.deleteProperty(Qt,n),r?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),e}}class Qs extends ht{isSupport(){return typeof na=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof it.webRequest=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:Tt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Ys extends ht{isSupport(){return typeof mr=="function"}getApiName(){return "GM_xmlhttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof it.xmlHttpRequest=="function"}}getUIOption(){let t=this.getApiName(),e=this.getAsyncApiOption(),n={id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t,`${t} & ${e.name}`)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(r){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"函数测试",forms:[I(()=>this.isSupport()?{text:"支持 "+t,tag:"success"}:{text:"不支持 "+t,tag:"error"}),I(()=>e.isSupport?{text:"支持 "+e.name,tag:"success"}:{text:"不支持 "+e.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&n.forms[1].forms.push(I(()=>{try{return {text:Tt.escapeHtml("TODO"),tag:"info"}}catch(r){return console.error(r),{text:"执行错误 "+r,tag:"error"}}finally{}})),n}}class Js extends ht{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof it=="object"&&it!=null}getUIOption(){}}const Pt={unsafeWindow:new Xs,GM:new Js,addElement:new Es,addStyle:new Ss,download:new $s,getResourceText:new Is,getResourceUrl:new _s,info:new Hs,log:new Ns,notification:new Us,openInTab:new Vs,registerMenuCommand:new zs,unregisterMenuCommand:new Ks,setClipboard:new js,getTab:new Os,saveTab:new Fs,getTabs:new Rs,setValue:new qs,getValue:new Ds,deleteValue:new Ms,listValues:new Bs,setValues:new Ws,getValues:new Ps,deleteValues:new Ls,addValueChangeListener:new Cs,removeValueChangeListener:new Gs,xmlHttpRequest:new Ys,webRequest:new Qs,cookie:new ks},Zt={$storageKey:"gm-api-test-storage-config",set(o,t){let e=window.localStorage.getItem(Zt.$storageKey)??"{}",n=Q.toJSON(e);n[o]=t,window.localStorage.setItem(Zt.$storageKey,JSON.stringify(n,(r,a)=>typeof a=="function"?a.tString():a));},get(o,t){let e=window.localStorage.getItem(Zt.$storageKey)??"{}";return Q.toJSON(e)[o]??t},delete(o){let t=window.localStorage.getItem(Zt.$storageKey)??"{}",e=Q.toJSON(t);Reflect.deleteProperty(e,o),window.localStorage.setItem(Zt.$storageKey,JSON.stringify(e,(n,r)=>typeof r=="function"?r.tString():r));}},z={set(o,t){Pt.setValue.isSupport()&&Pt.getValue.isSupport()&&Pt.deleteValue.isSupport()?qt(o,t):Zt.set(o,t);},get(o,t){return Pt.setValue.isSupport()&&Pt.getValue.isSupport()&&Pt.deleteValue.isSupport()?ne(o,t):Zt.get(o,t)},delete(o){Pt.setValue.isSupport()&&Pt.getValue.isSupport()&&Pt.deleteValue.isSupport()?Ke(o):Zt.delete(o);}},Zs=()=>{let o=[],t=[];Object.keys(Pt).forEach(n=>{let r=Pt[n],a=r.getApiName(),i=r.isSupport(),s=r.getAsyncApiOption();i?o.push({name:a,isSupport:i}):t.push({name:a,isSupport:i}),s&&(s.isSupport?o.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+a}):t.push({name:s.name,isSupport:s.isSupport,leftTargetSelector:"#aside-"+a}));});let e=n=>{let r=S.createElement("div",{className:"gm-api-features-item",innerHTML:`
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
			`});return S.on(r,"click",a=>{Q.preventEvent(a);let i=r.getRootNode(),s=Q.isNotNull(n.leftTargetSelector)?n.leftTargetSelector:"#aside-"+n.name,l=i.querySelector(s);l&&(l.click(),l.scrollIntoView({behavior:"smooth"}));}),r};return {id:"component-common",title:"通用",scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)==="component-common"},callback(n){z.set(V.asideLastVisit,"component-common");},forms:[{type:"forms",text:"@run-at document-start<br>注：注入速度等级越低，注入的速度越快<br>范围：0~4",forms:[I(()=>({text:Tt.escapeHtml(xe),tag:"info"}))]},{type:"forms",text:"特性",afterAddToUListCallBack(n,r){r.formHeaderDivElement.style.fontSize="1.2em",r.formHeaderDivElement.style.fontWeight="700";},forms:[]},{type:"forms",text:"不支持列表",afterAddToUListCallBack(n,r){var a;r.formHeaderDivElement.style.color="rgb(216, 30, 6)",r.formHeaderDivElement.style.fontWeight="600",t.length===0&&((a=r.formContainerListElement)==null||a.remove());},forms:[{type:"own",getLiElementCallBack(n){let r=S.createElement("div",{className:"gm-api-features-not-support"}),a=document.createDocumentFragment();return t.forEach(i=>{a.append(e(i));}),r.appendChild(a),n.appendChild(r),n}}]},{type:"forms",text:"支持列表",afterAddToUListCallBack(n,r){var a;r.formHeaderDivElement.style.fontWeight="600",o.length===0&&((a=r.formContainerListElement)==null||a.remove());},forms:[{type:"own",getLiElementCallBack(n){let r=S.createElement("div",{className:"gm-api-features-support"}),a=document.createDocumentFragment();return o.forEach(i=>{a.append(e(i));}),r.appendChild(a),n.appendChild(r),n}}]}]}};class tl extends dn{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let t=this.getApiName();return {id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(n){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"功能测试",forms:[I(()=>{try{return {text:Tt.escapeHtml("测试window.onurlchange"),tag:"info",description:"点击按钮进行测试",afterRender(n){let r=S.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1),a=s=>{clearTimeout(i),console.log("urlchange event info ==> ",s),D.success("urlchange event ==> url is changed");},i;S.on(r,"click",s=>{try{Q.preventEvent(s),clearTimeout(i),Qt.onurlchange===null?(Qt.removeEventListener("urlchange",a),Qt.addEventListener("urlchange",a),window.history.pushState({},"","#/onurlchange"),i=setTimeout(()=>{D.error("urlchange event is not trigger");},1e3)):D.error("window.onurlchange is not null");}catch(l){D.error(l.toString(),{consoleLogContent:!0});}}),S.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class el extends dn{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let t=this.getApiName();return {id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(n){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"功能测试",forms:[I(()=>{try{return {text:Tt.escapeHtml("测试window.close"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=S.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1);S.on(r,"click",a=>{Q.preventEvent(a);try{Qt.close();}catch(i){D.error(i.toString(),{consoleLogContent:!0});}}),S.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}class nl extends dn{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let t=this.getApiName();return {id:"aside-"+t,title:""+t,headerTitle:`${ct.getApiDocUrl(t)}`,scrollToDefaultView:true,isDefault(){return z.get(V.asideLastVisit)===t},callback(n){z.set(V.asideLastVisit,t);},forms:[{type:"forms",text:"功能测试",forms:[I(()=>{try{return {text:Tt.escapeHtml("测试window.focus"),tag:"info",description:"点击按钮执行该函数",afterRender(n){let r=S.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
										`,!1,!1),a=()=>{setTimeout(()=>{Qt.focus();},3e3);};S.on(r,"click",i=>{Q.preventEvent(i),window.removeEventListener("blur",a,{capture:!0}),window.addEventListener("blur",a,{capture:!0,once:!0});try{D.info("请切换至其它Tab页面，切换完毕3秒后会自动调用该函数");}catch(s){D.error(s.toString(),{consoleLogContent:!0});}}),S.after(n.$leftContainer,r);}}}catch(n){return console.error(n),{text:"执行错误 "+n,tag:"error"}}finally{}})]}]}}}let ze=[Zs()];Object.keys(Pt).forEach(o=>{let e=Pt[o].getUIOption();e&&ze.push(e);});ze.push(new tl().getUIOption());ze.push(new el().getUIOption());ze.push(new nl().getUIOption());cn.addContentConfig(ze);ae.$data.panelConfig={style:`
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
	`};ae.init();ae.showPanel(cn.getConfig());

})();