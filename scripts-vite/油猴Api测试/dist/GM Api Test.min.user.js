// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.5.26
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

	var fe=Object.defineProperty;var se=E=>{throw TypeError(E)};var ue=(E,w,A)=>w in E?fe(E,w,{enumerable:true,configurable:true,writable:true,value:A}):E[w]=A;var et=(E,w,A)=>ue(E,typeof w!="symbol"?w+"":w,A),ie=(E,w,A)=>w.has(E)||se("Cannot "+A);var H=(E,w,A)=>(ie(E,w,"read from private field"),A?A.call(E):w.get(E)),yt=(E,w,A)=>w.has(E)?se("Cannot add the same private member more than once"):w instanceof WeakSet?w.add(E):w.set(E,A),gt=(E,w,A,T)=>(ie(E,w,"write to private field"),w.set(E,A),A);var le=(E,w,A,T)=>({set _(S){gt(E,w,S);},get _(){return H(E,w,T)}});var _GM=typeof GM<"u"?GM:void 0,_GM_addElement=typeof GM_addElement<"u"?GM_addElement:void 0,_GM_addStyle=typeof GM_addStyle<"u"?GM_addStyle:void 0,_GM_addValueChangeListener=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,_GM_cookie=typeof GM_cookie<"u"?GM_cookie:void 0,_GM_deleteValue=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,_GM_deleteValues=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,_GM_download=typeof GM_download<"u"?GM_download:void 0,_GM_getResourceText=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,_GM_getResourceURL=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,_GM_getTab=typeof GM_getTab<"u"?GM_getTab:void 0,_GM_getTabs=typeof GM_getTabs<"u"?GM_getTabs:void 0,_GM_getValue=typeof GM_getValue<"u"?GM_getValue:void 0,_GM_getValues=typeof GM_getValues<"u"?GM_getValues:void 0,_GM_info=typeof GM_info<"u"?GM_info:void 0,_GM_listValues=typeof GM_listValues<"u"?GM_listValues:void 0,_GM_log=typeof GM_log<"u"?GM_log:void 0,_GM_notification=typeof GM_notification<"u"?GM_notification:void 0,_GM_openInTab=typeof GM_openInTab<"u"?GM_openInTab:void 0,_GM_registerMenuCommand=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,_GM_removeValueChangeListener=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,_GM_saveTab=typeof GM_saveTab<"u"?GM_saveTab:void 0,_GM_setClipboard=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,_GM_setValue=typeof GM_setValue<"u"?GM_setValue:void 0,_GM_setValues=typeof GM_setValues<"u"?GM_setValues:void 0,_GM_unregisterMenuCommand=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,_GM_webRequest=typeof GM_webRequest<"u"?GM_webRequest:void 0,_GM_xmlhttpRequest=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_unsafeWindow=typeof unsafeWindow<"u"?unsafeWindow:void 0,_monkeyWindow=window;function CompatibleProcessing(){try{typeof Object.assign!="function"&&(Object.assign=function(E){return E=Object(E),arguments.length>1&&[...arguments].splice(1,arguments.length-1).forEach(A=>{for(var T in A)Object.prototype.hasOwnProperty.call(A,T)&&(E[T]=A[T]);}),E});}catch(E){console.warn(E);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var E=this;function w(A){return function(T){var S=E.className.split(/\s+/g),C=S.indexOf(T);A(S,C,T),E.className=S.join(" ");}}return {add:w(function(A,T,S){~T||A.push(S);}),remove:w(function(A,T){~T&&A.splice(T,1);}),toggle:w(function(A,T,S){~T?A.splice(T,1):A.push(S);}),contains:function(A){return !!~E.className.split(/\s+/g).indexOf(A)},item:function(A){return E.className.split(/\s+/g)[A]||null}}}});}catch(E){console.warn(E);}}const QmsgAnimation={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},getStyleAnimationNameValue(E){for(let w=0;w<this.$name.startNameList.length;w++){let A=this.$name.startNameList[w],T=E.style[A];if(T!=null)return T}},setStyleAnimationName(E,w=""){this.$name.startNameList.forEach(A=>{A in E.style&&(E.style[A]=w);});}},QmsgConfig={PLUGIN_NAME:"qmsg",NAMESPACE:"qmsg",INS_DEFAULT:{},DEFAULT:{animation:true,autoClose:true,content:"",html:false,isHTML:false,position:"top",showClose:false,maxNums:5,onClose:null,showIcon:true,showMoreContent:false,showReverse:false,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:false,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:false},CAN_ANIMATION:QmsgAnimation.getStyleAnimationNameValue(document.createElement("div"))!=null},QmsgHeaderCloseIcon=`
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`,QmsgIcon={info:`
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
		</svg>`},QmsgInstanceStorage={QmsgList:[],remove(E){for(let w=0;w<QmsgInstanceStorage.QmsgList.length;w++)if(QmsgInstanceStorage.QmsgList[w].uuid===E){QmsgInstanceStorage.QmsgList.splice(w,1);break}}},QmsgCSS={css:`@charset "utf-8";
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
      }`,getStyleElement(){let E=document.createElement("style");return E.setAttribute("type","text/css"),E.setAttribute("data-type",QmsgConfig.PLUGIN_NAME),QmsgUtils.setSafeHTML(E,this.css),E}};class QmsgMsg{constructor(w,A){et(this,"timeId");et(this,"startTime");et(this,"endTime");et(this,"setting");et(this,"uuid");et(this,"state");et(this,"repeatNum");et(this,"$Qmsg");this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=QmsgUtils.toDynamicObject(QmsgConfig.DEFAULT,w,QmsgConfig.INS_DEFAULT),this.uuid=A,this.state="opening",this.$Qmsg=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.init(),this.setting.consoleLogContent&&console.log(this.setting.content);}getSetting(){return this.setting}getRepeatNum(){return this.repeatNum}setRepeatNum(w){this.repeatNum=w;}setRepeatNumIncreasing(){this.repeatNum++;}init(){let w=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$Qmsg.classList.add(this.setting.customClass);let A=QmsgIcon[this.setting.type||"info"],T=QmsgUtils.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(T+=" "+QmsgUtils.getNameSpacify("content-with-close"));let S=this.setting.content||"",C="",k=QmsgHeaderCloseIcon;this.setting.showMoreContent&&(T+="qmsg-show-more-content",C+="qmsg-show-more-content");let U="";this.setting.showClose&&(U=`<i class="qmsg-icon qmsg-icon-close ${C}">${k}</i>`);let L=document.createElement("span"),_=QmsgUtils.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.html||this.setting.isHTML?QmsgUtils.setSafeHTML(L,S):L.innerText=S,this.setting.isLimitWidth){let N=this.setting.limitWidthNum;typeof N=="string"?QmsgUtils.isNumber(N)&&(N=N+"px"):N=N.toString()+"px",L.style.maxWidth=N,L.style.width=N,this.setting.limitWidthWrap==="no-wrap"?L.style.whiteSpace="nowrap":this.setting.limitWidthWrap==="ellipsis"?(L.style.whiteSpace="nowrap",L.style.overflow="hidden",L.style.textOverflow="ellipsis"):this.setting.limitWidthWrap==="wrap"&&(L.style.whiteSpace="");}QmsgUtils.setSafeHTML(this.$Qmsg,`
			<div class="qmsg-content">
				<div class="${T}">
				${this.setting.showIcon?`<i class="qmsg-icon">${A}</i>`:""}
					${L.outerHTML}
					${U}
				</div>
			</div>
			`);let $=this.$Qmsg.querySelector(".qmsg-content");this.$Qmsg.classList.add(QmsgUtils.getNameSpacify("item")),this.$Qmsg.setAttribute(QmsgUtils.getNameSpacify("uuid"),this.uuid);let I=document.querySelector(".qmsg-shadow-container"),P=I==null?void 0:I.shadowRoot;if(!I){I=document.createElement("div"),I.className="qmsg-shadow-container",P=I.attachShadow({mode:"open"});let N=document.createElement("div");if(N.classList.add(QmsgConfig.NAMESPACE,QmsgUtils.getNameSpacify("wrapper"),QmsgUtils.getNameSpacify("is-initialized")),N.classList.add(_),P.appendChild(QmsgCSS.getStyleElement()),P.appendChild(N),this.setting.style!=null){let F=document.createElement("style");F.setAttribute("type","text/css"),F.setAttribute("data-id",this.uuid),QmsgUtils.setSafeHTML(F,this.setting.style),$.insertAdjacentElement("afterend",F);}(document.body||document.documentElement).appendChild(I);}if(P==null)throw new TypeError(QmsgConfig.PLUGIN_NAME+" $shadowRoot is null");let R=P.querySelector(`.${QmsgConfig.NAMESPACE}.${_}`);R||(R=document.createElement("div"),R.classList.add(QmsgConfig.NAMESPACE,QmsgUtils.getNameSpacify("wrapper"),QmsgUtils.getNameSpacify("is-initialized")),R.classList.add(_),P.appendChild(R)),this.setting.showReverse?R.style.flexDirection="column-reverse":R.style.flexDirection="column";let G=this.setting.zIndex;if(typeof G=="function"&&(G=G()),isNaN(G)||(R.style.zIndex=G.toString()),R.appendChild(this.$Qmsg),this.setState(this.$Qmsg,"opening"),this.setting.showClose){let N=this.$Qmsg.querySelector(".qmsg-icon-close");N&&N.addEventListener("click",function(){w.close();});}let D=N=>{QmsgAnimation.getStyleAnimationNameValue(w.$Qmsg)===QmsgAnimation.$state.closing&&(w.endTime=Date.now(),w.destroy()),QmsgAnimation.setStyleAnimationName(w.$Qmsg);};if(QmsgAnimation.$name.endNameList.forEach(function(N){w.$Qmsg.addEventListener(N,D);}),this.setting.autoClose){this.timeId=QmsgUtils.setTimeout(()=>{this.close();},this.setting.timeout);let N=q=>{this.startTime=null,this.endTime=null,QmsgUtils.clearTimeout(this.timeId),this.timeId=void 0;},F=q=>{if(this.timeId!=null){console.warn("timeId is not null，mouseenter may be not first trigger");return}this.startTime=Date.now(),this.timeId=QmsgUtils.setTimeout(()=>{this.close();},this.setting.timeout);};this.$Qmsg.addEventListener("touchstart",()=>{this.$Qmsg.removeEventListener("mouseenter",N),this.$Qmsg.removeEventListener("mouseout",F);},{capture:true,once:true}),this.$Qmsg.addEventListener("mouseenter",N),this.$Qmsg.addEventListener("mouseout",F);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=QmsgConfig.DEFAULT.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=QmsgConfig.DEFAULT.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof QmsgConfig.DEFAULT.zIndex=="function"?QmsgConfig.DEFAULT.zIndex():QmsgConfig.DEFAULT.zIndex);}setState(w,A){!A||!QmsgAnimation.$state[A]||(this.state=A,QmsgAnimation.setStyleAnimationName(w,QmsgAnimation.$state[A]));}setMsgCount(){let w=this,A=QmsgUtils.getNameSpacify("count"),T=`div.${QmsgUtils.getNameSpacify("data-position",this.setting.position.toLowerCase())} [class^="qmsg-content-"]`,S=this.$Qmsg.querySelector(T);if(!S)throw new TypeError("$content is null");let C=S.querySelector("."+A);C||(C=document.createElement("span"),C.classList.add(A),S.appendChild(C)),QmsgUtils.setSafeHTML(C,this.getRepeatNum().toString()),QmsgAnimation.setStyleAnimationName(C),QmsgAnimation.setStyleAnimationName(C,"MessageShake"),QmsgUtils.clearTimeout(this.timeId),this.setting.autoClose&&(this.timeId=QmsgUtils.setTimeout(function(){w.close();},this.setting.timeout));}close(){this.setState(this.$Qmsg,"closing"),QmsgConfig.CAN_ANIMATION?QmsgInstanceStorage.remove(this.uuid):this.destroy();let w=this.setting.onClose;w&&typeof w=="function"&&w.call(this);}destroy(){this.endTime=Date.now(),this.$Qmsg.remove(),QmsgUtils.clearTimeout(this.timeId),QmsgInstanceStorage.remove(this.uuid);}setText(w){let A=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(A)A.innerText=w,this.setting.content=w;else throw new TypeError("$content is null")}setHTML(w){let A=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(A)QmsgUtils.setSafeHTML(A,w),this.setting.content=w;else throw new TypeError("$content is null")}}const createCache=E=>(w,A)=>(E.set(w,A),A),MAX_SAFE_INTEGER=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,TWO_TO_THE_POWER_OF_TWENTY_NINE=536870912,TWO_TO_THE_POWER_OF_THIRTY=TWO_TO_THE_POWER_OF_TWENTY_NINE*2,createGenerateUniqueNumber=(E,w)=>A=>{const T=w.get(A);let S=T===void 0?A.size:T<TWO_TO_THE_POWER_OF_THIRTY?T+1:0;if(!A.has(S))return E(A,S);if(A.size<TWO_TO_THE_POWER_OF_TWENTY_NINE){for(;A.has(S);)S=Math.floor(Math.random()*TWO_TO_THE_POWER_OF_THIRTY);return E(A,S)}if(A.size>MAX_SAFE_INTEGER)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;A.has(S);)S=Math.floor(Math.random()*MAX_SAFE_INTEGER);return E(A,S)},LAST_NUMBER_WEAK_MAP=new WeakMap,cache=createCache(LAST_NUMBER_WEAK_MAP),generateUniqueNumber=createGenerateUniqueNumber(cache,LAST_NUMBER_WEAK_MAP),isMessagePort=E=>typeof E.start=="function",PORT_MAP=new WeakMap,extendBrokerImplementation=E=>({...E,connect:({call:w})=>async()=>{const{port1:A,port2:T}=new MessageChannel,S=await w("connect",{port:A},[A]);return PORT_MAP.set(T,S),T},disconnect:({call:w})=>async A=>{const T=PORT_MAP.get(A);if(T===void 0)throw new Error("The given port is not connected.");await w("disconnect",{portId:T});},isSupported:({call:w})=>()=>w("isSupported")}),ONGOING_REQUESTS=new WeakMap,createOrGetOngoingRequests=E=>{if(ONGOING_REQUESTS.has(E))return ONGOING_REQUESTS.get(E);const w=new Map;return ONGOING_REQUESTS.set(E,w),w},createBroker=E=>{const w=extendBrokerImplementation(E);return A=>{const T=createOrGetOngoingRequests(A);A.addEventListener("message",({data:U})=>{const{id:L}=U;if(L!==null&&T.has(L)){const{reject:_,resolve:$}=T.get(L);T.delete(L),U.error===void 0?$(U.result):_(new Error(U.error.message));}}),isMessagePort(A)&&A.start();const S=(U,L=null,_=[])=>new Promise(($,I)=>{const P=generateUniqueNumber(T);T.set(P,{reject:I,resolve:$}),L===null?A.postMessage({id:P,method:U},_):A.postMessage({id:P,method:U,params:L},_);}),C=(U,L,_=[])=>{A.postMessage({id:null,method:U,params:L},_);};let k={};for(const[U,L]of Object.entries(w))k={...k,[U]:L({call:S,notify:C})};return {...k}}},scheduledIntervalsState=new Map([[0,null]]),scheduledTimeoutsState=new Map([[0,null]]),wrap=createBroker({clearInterval:({call:E})=>w=>{typeof scheduledIntervalsState.get(w)=="symbol"&&(scheduledIntervalsState.set(w,null),E("clear",{timerId:w,timerType:"interval"}).then(()=>{scheduledIntervalsState.delete(w);}));},clearTimeout:({call:E})=>w=>{typeof scheduledTimeoutsState.get(w)=="symbol"&&(scheduledTimeoutsState.set(w,null),E("clear",{timerId:w,timerType:"timeout"}).then(()=>{scheduledTimeoutsState.delete(w);}));},setInterval:({call:E})=>(w,A=0,...T)=>{const S=Symbol(),C=generateUniqueNumber(scheduledIntervalsState);scheduledIntervalsState.set(C,S);const k=()=>E("set",{delay:A,now:performance.timeOrigin+performance.now(),timerId:C,timerType:"interval"}).then(()=>{const U=scheduledIntervalsState.get(C);if(U===void 0)throw new Error("The timer is in an undefined state.");U===S&&(w(...T),scheduledIntervalsState.get(C)===S&&k());});return k(),C},setTimeout:({call:E})=>(w,A=0,...T)=>{const S=Symbol(),C=generateUniqueNumber(scheduledTimeoutsState);return scheduledTimeoutsState.set(C,S),E("set",{delay:A,now:performance.timeOrigin+performance.now(),timerId:C,timerType:"timeout"}).then(()=>{const k=scheduledTimeoutsState.get(C);if(k===void 0)throw new Error("The timer is in an undefined state.");k===S&&(scheduledTimeoutsState.delete(C),w(...T));}),C}}),load=E=>{const w=new Worker(E);return wrap(w)},createLoadOrReturnBroker=(E,w)=>{let A=null;return ()=>{if(A!==null)return A;const T=new Blob([w],{type:"application/javascript; charset=utf-8"}),S=URL.createObjectURL(T);return A=E(S),setTimeout(()=>URL.revokeObjectURL(S)),A}},worker=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),d=t(c);e.addUniqueNumber=d,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const d=r instanceof Promise?await r:r;if(null===a){if(void 0!==d.result)throw s(i)}else{if(void 0===d.result)throw s(i);const{result:e,transferables:r=[]}=d;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,(()=>{n(),t.close(),u.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=()=>!0)=>{const n=c(d,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},l=e=>t=>{const r=e.get(t);if(void 0===r)return Promise.resolve(!1);const[n,o]=r;return clearTimeout(n),e.delete(t),o(!1),Promise.resolve(!0)},f=(e,t,r)=>(n,o,s)=>{const{expected:a,remainingDelay:i}=e(n,o);return new Promise((e=>{t.set(s,[setTimeout(r,i,a,t,e,s),e])}))},m=(e,t)=>{const r=performance.now(),n=e+t-r-performance.timeOrigin;return{expected:r+n,remainingDelay:n}},p=(e,t,r,n)=>{const o=e-performance.now();o>0?t.set(n,[setTimeout(p,o,e,t,r,n),r]):(t.delete(n),r(!0))},h=new Map,v=l(h),w=new Map,g=l(w),M=f(m,h,p),y=f(m,w,p);d(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?v(e):g(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?M:y)(e,t,r)})})})()})();`,loadOrReturnBroker=createLoadOrReturnBroker(load,worker),clearInterval$1=E=>loadOrReturnBroker().clearInterval(E),clearTimeout$1=E=>loadOrReturnBroker().clearTimeout(E),setInterval$1=(...E)=>loadOrReturnBroker().setInterval(...E),setTimeout$1=(...E)=>loadOrReturnBroker().setTimeout(...E),QmsgUtils={getNameSpacify(...E){let w=QmsgConfig.NAMESPACE;for(let A=0;A<E.length;++A)w+="-"+E[A];return w},isNumber(E){return /^\d+$/.test(E)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(E){let w=Math.random()*16|0;return (E=="x"?w:w&3|8).toString(16)})},mergeArgs(E="",w){let A={};if(arguments.length===0)return A;if(w!=null){if(A.content=E,typeof w=="object"&&w!=null)return Object.assign(A,w)}else {if(typeof E=="object"&&E!=null)return Object.assign(A,E);A.content=E;}return A},judgeReMsg(E){E=E||{};let w=JSON.stringify(E),A=QmsgInstanceStorage.QmsgList.find(S=>S.config===w),T=A==null?void 0:A.instance;if(T==null){let S=QmsgUtils.getUUID(),C={uuid:S,config:w,instance:new QmsgMsg(E,S)};QmsgInstanceStorage.QmsgList.push(C);let k=QmsgInstanceStorage.QmsgList.length,U=C.instance.getSetting().maxNums;if(k>U)for(let L=0;L<k-U;L++){let _=QmsgInstanceStorage.QmsgList[L];_&&_.instance.getSetting().autoClose&&_.instance.close();}A=C,T=C.instance;}else T.getRepeatNum()?T.getRepeatNum()>=99||T.setRepeatNumIncreasing():T.setRepeatNum(2),T.setMsgCount();if(T)T.$Qmsg.setAttribute("data-count",T==null?void 0:T.getRepeatNum().toString());else throw new TypeError("QmsgInstance is null");return T},toDynamicObject(E,...w){let A=Object.assign({},E);return Object.keys(A).forEach(T=>{let S=A[T];Object.defineProperty(A,T,{get(){let C=w.findIndex(k=>k.hasOwnProperty.call(k,T));return C!==-1?w[C][T]:S},set(C){S=C;}});}),A},setTimeout(E,w){try{return setTimeout$1(E,w)}catch{return globalThis.setTimeout(E,w)}},clearTimeout(E){try{E!=null&&clearTimeout$1(E);}catch{}finally{globalThis.clearTimeout(E);}},setInterval(E,w){try{return setInterval$1(E,w)}catch{return globalThis.setInterval(E,w)}},clearInterval(E){try{E!=null&&clearInterval$1(E);}catch{}finally{globalThis.clearInterval(E);}},setSafeHTML(E,w){try{E.innerHTML=w;}catch{if(globalThis.trustedTypes){const T=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:S=>S});E.innerHTML=T.createHTML(w);}else throw new TypeError("trustedTypes is not defined")}}};CompatibleProcessing();const QmsgEvent={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let E=0;E<QmsgInstanceStorage.QmsgList.length;E++){let w=QmsgInstanceStorage.QmsgList[E];w.instance.endTime==null&&w.instance.startTime!=null&&Date.now()-w.instance.startTime>=w.instance.getSetting().timeout&&w.instance.close();}},option:{capture:true}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",QmsgEvent.visibilitychange.eventConfig.callback,QmsgEvent.visibilitychange.eventConfig.option):console.error("visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",QmsgEvent.visibilitychange.eventConfig.callback,QmsgEvent.visibilitychange.eventConfig.option);}}};class Qmsg{constructor(){et(this,"$data");et(this,"$eventUtils");this.$data={version:"2025.5.10",config:QmsgConfig,icon:QmsgIcon,instanceStorage:QmsgInstanceStorage},this.$eventUtils=QmsgEvent,this.$eventUtils.visibilitychange.addEvent();}config(w){w!=null&&typeof w=="object"&&(QmsgConfig.INS_DEFAULT=null,QmsgConfig.INS_DEFAULT=w);}info(w,A){let T=QmsgUtils.mergeArgs(w,A);return T.type="info",QmsgUtils.judgeReMsg.call(this,T)}warning(w,A){let T=QmsgUtils.mergeArgs(w,A);return T.type="warning",QmsgUtils.judgeReMsg.call(this,T)}success(w,A){let T=QmsgUtils.mergeArgs(w,A);return T.type="success",QmsgUtils.judgeReMsg.call(this,T)}error(w,A){let T=QmsgUtils.mergeArgs(w,A);return T.type="error",QmsgUtils.judgeReMsg.call(this,T)}loading(w,A){let T=QmsgUtils.mergeArgs(w,A);return T.type="loading",T.autoClose=false,QmsgUtils.judgeReMsg.call(this,T)}remove(w){QmsgInstanceStorage.remove(w);}closeAll(){for(let w=QmsgInstanceStorage.QmsgList.length-1;w>=0;w--){let A=QmsgInstanceStorage.QmsgList[w];A&&A.instance&&A.instance.close();}}}let qmsg=new Qmsg,WindowApi$1=class{constructor(w){et(this,"defaultApi",{document,window,globalThis,self,top});et(this,"api");w&&(w.globalThis==null&&(w.globalThis=w.window),w.self==null&&(w.self=w.window)),w||(w=Object.assign({},this.defaultApi)),this.api=Object.assign({},w);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}};const DOMUtilsCommonUtils={windowApi:new WindowApi$1({document,window,top}),isShow(E){return !!E.getClientRects().length},getSafeHTML(E){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:A=>A}).createHTML(E):E},setSafeHTML(E,w){E.innerHTML=this.getSafeHTML(w);},showElement(E){let w=E.cloneNode(true);return w.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(w),{recovery(){w.remove();}}},getStyleValue(E,w){let A=null,T=null;E instanceof CSSStyleDeclaration?T=E:(A=E.ownerDocument.defaultView,(!A||!A.opener)&&(A=window),T=A.getComputedStyle(E));let S=parseFloat(T[w]);return isNaN(S)?0:S},isWin(E){var w;return typeof E!="object"||E instanceof Node?false:E===globalThis||E===window||E===self||E===globalThis||E===window||E===self||typeof unsafeWindow<"u"&&E===unsafeWindow?true:((w=E==null?void 0:E.Math)==null?void 0:w.toString())==="[object Math]"},delete(E,w){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(E,w):delete E[w];}},DOMUtilsData={SymbolEvents:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))},OriginPrototype$1={Object:{defineProperty:Object.defineProperty}};class DOMUtilsEvent{constructor(w){et(this,"windowApi");this.windowApi=new WindowApi$1(w);}on(w,A,T,S,C){function k(D,N,F){let q=D[N];return typeof q=="boolean"?(F.capture=q,typeof D[N+1]=="boolean"&&(F.once=D[N+1]),typeof D[N+2]=="boolean"&&(F.passive=D[N+2])):typeof q=="object"&&("capture"in q||"once"in q||"passive"in q||"isComposedPath"in q)&&(F.capture=q.capture,F.once=q.once,F.passive=q.passive,F.isComposedPath=q.isComposedPath),F}let U=this,L=arguments;if(typeof w=="string"&&(w=U.selectorAll(w)),w==null)return;let _=[];w instanceof NodeList||Array.isArray(w)?(w=w,_=[...w]):_.push(w);let $=[];Array.isArray(A)?$=$.concat(A):typeof A=="string"&&($=$.concat(A.split(" ")));let I=[];Array.isArray(T)?I=I.concat(T):typeof T=="string"&&I.push(T);let P=S,R={capture:false,once:false,passive:false,isComposedPath:false};typeof T=="function"?(P=T,R=k(L,3,R)):R=k(L,4,R);function G(){R.once&&U.off(w,A,T,S,C);}_.forEach(D=>{function N(F){if(I.length){let q=R.isComposedPath?F.composedPath()[0]:F.target,Y=DOMUtilsCommonUtils.isWin(D)||D===U.windowApi.document?U.windowApi.document.documentElement:D;if(I.find(nt=>{if(q!=null&&q.matches(nt))return  true;let W=q==null?void 0:q.closest(nt);return W&&(Y!=null&&Y.contains(W))?(q=W,true):false})){try{OriginPrototype$1.Object.defineProperty(F,"target",{get(){return q}});}catch{}P.call(q,F,q),G();}}else P.call(D,F),G();}$.forEach(F=>{D.addEventListener(F,N,R);let q=D[DOMUtilsData.SymbolEvents]||{};q[F]=q[F]||[],q[F].push({selector:I,option:R,callback:N,originCallBack:P}),D[DOMUtilsData.SymbolEvents]=q;});});}off(w,A,T,S,C,k){function U(N,F,q){let Y=N[F];return typeof Y=="boolean"?q.capture=Y:typeof Y=="object"&&"capture"in Y&&(q.capture=Y.capture),q}let L=this,_=arguments;if(typeof w=="string"&&(w=L.selectorAll(w)),w==null)return;let $=[];w instanceof NodeList||Array.isArray(w)?(w=w,$=[...w]):$.push(w);let I=[];Array.isArray(A)?I=I.concat(A):typeof A=="string"&&(I=I.concat(A.split(" ")));let P=[];Array.isArray(T)?P=P.concat(T):typeof T=="string"&&P.push(T);let R=S,G={capture:false};typeof T=="function"?(R=T,G=U(_,3,G)):G=U(_,4,G);let D=false;(_.length===2||_.length===3&&typeof _[2]=="string"||Array.isArray(_[2]))&&(D=true),$.forEach(N=>{let F=N[DOMUtilsData.SymbolEvents]||{};I.forEach(q=>{let Y=F[q]||[];typeof k=="function"&&(Y=Y.filter(k));for(let tt=0;tt<Y.length;tt++){let nt=Y[tt],W=true;W&&R&&nt.originCallBack!==R&&(W=false),W&&P.length&&Array.isArray(nt.selector)&&JSON.stringify(nt.selector)!==JSON.stringify(P)&&(W=false),W&&G.capture!==nt.option.capture&&(W=false),(W||D)&&(N.removeEventListener(q,nt.callback,nt.option),Y.splice(tt--,1));}Y.length===0&&DOMUtilsCommonUtils.delete(F,A);}),N[DOMUtilsData.SymbolEvents]=F;});}offAll(w,A){if(typeof w=="string"&&(w=this.selectorAll(w)),w==null)return;let S=[];w instanceof NodeList||Array.isArray(w)?S=[...w]:S.push(w);let C=[];Array.isArray(A)?C=C.concat(A):typeof A=="string"&&(C=C.concat(A.split(" "))),S.forEach(k=>{Object.getOwnPropertySymbols(k).forEach(U=>{if(!U.toString().startsWith("Symbol(events_"))return;let L=k[U]||{};(C.length?C:Object.keys(L)).forEach($=>{let I=L[$];if(I){for(const P of I)k.removeEventListener($,P.callback,{capture:P.option.capture});DOMUtilsCommonUtils.delete(k[U],$);}});});});}ready(w){if(typeof w!="function")return;let A=this;function T(){try{return A.windowApi.document.readyState==="complete"||A.windowApi.document.readyState!=="loading"&&!A.windowApi.document.documentElement.doScroll}catch{return  false}}function S(){U(),w();}let C=[{target:A.windowApi.document,eventType:"DOMContentLoaded",callback:S},{target:A.windowApi.window,eventType:"load",callback:S}];function k(){for(let L=0;L<C.length;L++){let _=C[L];_.target.addEventListener(_.eventType,_.callback);}}function U(){for(let L=0;L<C.length;L++){let _=C[L];_.target.removeEventListener(_.eventType,_.callback);}}T()?setTimeout(w):k();}trigger(w,A,T,S=true){if(typeof w=="string"&&(w=this.selectorAll(w)),w==null)return;let k=[];w instanceof NodeList||Array.isArray(w)?(w=w,k=[...w]):k=[w];let U=[];Array.isArray(A)?U=A:typeof A=="string"&&(U=A.split(" ")),k.forEach(L=>{let _=L[DOMUtilsData.SymbolEvents]||{};U.forEach($=>{let I=null;T&&T instanceof Event?I=T:(I=new Event($),T&&Object.keys(T).forEach(P=>{I[P]=T[P];})),S==false&&$ in _?_[$].forEach(P=>{P.callback(I);}):L.dispatchEvent(I);});});}click(w,A,T,S){let C=this;if(typeof w=="string"&&(w=C.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(k=>{C.click(k,A,T,S);});return}A==null?C.trigger(w,"click",T,S):C.on(w,"click",null,A);}}blur(w,A,T,S){let C=this;if(typeof w=="string"&&(w=C.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(k=>{C.focus(k,A,T,S);});return}A===null?C.trigger(w,"blur",T,S):C.on(w,"blur",null,A);}}focus(w,A,T,S){let C=this;if(typeof w=="string"&&(w=C.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(k=>{C.focus(k,A,T,S);});return}A==null?C.trigger(w,"focus",T,S):C.on(w,"focus",null,A);}}hover(w,A,T){let S=this;if(typeof w=="string"&&(w=S.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(C=>{S.hover(C,A,T);});return}S.on(w,"mouseenter",null,A,T),S.on(w,"mouseleave",null,A,T);}}keyup(w,A,T){let S=this;if(w!=null){if(typeof w=="string"&&(w=S.selectorAll(w)),isNodeList(w)){w.forEach(C=>{S.keyup(C,A,T);});return}S.on(w,"keyup",null,A,T);}}keydown(w,A,T){let S=this;if(w!=null){if(typeof w=="string"&&(w=S.selectorAll(w)),isNodeList(w)){w.forEach(C=>{S.keydown(C,A,T);});return}S.on(w,"keydown",null,A,T);}}keypress(w,A,T){let S=this;if(w!=null){if(typeof w=="string"&&(w=S.selectorAll(w)),isNodeList(w)){w.forEach(C=>{S.keypress(C,A,T);});return}S.on(w,"keypress",null,A,T);}}listenKeyboard(w,A="keypress",T,S){let C=this;typeof w=="string"&&(w=C.selectorAll(w));let k=function(U){let L=U.key||U.code,_=U.charCode||U.keyCode||U.which,$=[];U.ctrlKey&&$.push("ctrl"),U.altKey&&$.push("alt"),U.metaKey&&$.push("meta"),U.shiftKey&&$.push("shift"),typeof T=="function"&&T(L,_,$,U);};return C.on(w,A,k,S),{removeListen:()=>{C.off(w,A,k,S);}}}selector(w){return this.selectorAll(w)[0]}selectorAll(w){const A=this;if(w=w.trim(),w.match(/[^\s]{1}:empty$/gi))return w=w.replace(/:empty$/gi,""),Array.from(A.windowApi.document.querySelectorAll(w)).filter(T=>{var S;return ((S=T==null?void 0:T.innerHTML)==null?void 0:S.trim())===""});if(w.match(/[^\s]{1}:contains\("(.*)"\)$/i)||w.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let S=w.match(/:contains\(("|')(.*)("|')\)$/i)[2];return w=w.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(A.windowApi.document.querySelectorAll(w)).filter(C=>{var k;return (k=(C==null?void 0:C.textContent)||(C==null?void 0:C.innerText))==null?void 0:k.includes(S)})}else if(w.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||w.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let S=w.match(/:regexp\(("|')(.*)("|')\)$/i)[2],C=S.match(/("|'),[\s]*("|')([igm]{0,3})$/i),k="";C&&(S=S.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),k=C[3]);let U=new RegExp(S,k);return w=w.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(A.windowApi.document.querySelectorAll(w)).filter(L=>{var _;return !!((_=(L==null?void 0:L.textContent)||(L==null?void 0:L.innerText))!=null&&_.match(U))})}else return Array.from(A.windowApi.document.querySelectorAll(w))}}const isNodeList=E=>Array.isArray(E)||E instanceof NodeList;class DOMUtils extends DOMUtilsEvent{constructor(A){super(A);et(this,"version","2025.5.12");}attr(A,T,S){let C=this;if(typeof A=="string"&&(A=C.selectorAll(A)),A!=null){if(isNodeList(A)){if(S==null)return C.attr(A[0],T,S);A.forEach(k=>{C.attr(k,T,S);});return}if(S==null)return A.getAttribute(T);A.setAttribute(T,S);}}createElement(A,T,S){let C=this,k=C.windowApi.document.createElement(A);return typeof T=="string"?(C.html(k,T),k):(T==null&&(T={}),S==null&&(S={}),Object.keys(T).forEach(U=>{let L=T[U];if(U==="innerHTML"){C.html(k,L);return}k[U]=L;}),Object.keys(S).forEach(U=>{let L=S[U];typeof L=="object"?L=JSON.stringify(L):typeof L=="function"&&(L=L.toString()),k.setAttribute(U,L);}),k)}css(A,T,S){let C=this;function k(L,_){let $=["width","height","top","left","right","bottom","font-size"];return typeof _=="number"&&(_=_.toString()),typeof _=="string"&&$.includes(L)&&_.match(/[0-9]$/gi)&&(_=_+"px"),_}if(typeof A=="string"&&(A=C.selectorAll(A)),A==null)return;if(isNodeList(A)){if(typeof T=="string"){if(S==null)return C.css(A[0],T);A.forEach(L=>{C.css(L,T);});return}else if(typeof T=="object"){A.forEach(L=>{C.css(L,T);});return}return}let U=(L,_)=>{typeof _=="string"&&_.trim().endsWith("!important")?(_=_.trim().replace(/!important$/gi,"").trim(),A.style.setProperty(L,_,"important")):(_=k(L,_),A.style.setProperty(L,_));};if(typeof T=="string"){if(S==null)return C.windowApi.globalThis.getComputedStyle(A).getPropertyValue(T);U(T,S);}else if(typeof T=="object")for(let L in T){let _=T[L];U(L,_);}else throw new TypeError("property must be string or object")}text(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){if(T==null)return S.text(A[0]);A.forEach(C=>{S.text(C,T);});return}if(T==null)return A.textContent||A.innerText;T instanceof Node&&(T=T.textContent||T.innerText),"textContent"in A?A.textContent=T:"innerText"in A&&(A.innerText=T);}}html(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){if(T==null)return S.html(A[0]);A.forEach(C=>{S.html(C,T);});return}if(T==null)return A.innerHTML;T instanceof Element&&(T=T.innerHTML),"innerHTML"in A&&DOMUtilsCommonUtils.setSafeHTML(A,T);}}getTransform(A,T=false){var L;let S=this,C=0,k=0;if(!(T||!T&&DOMUtilsCommonUtils.isShow(A))){let{recovery:_}=DOMUtilsCommonUtils.showElement(A),$=S.getTransform(A,true);return _(),$}let U=S.windowApi.globalThis.getComputedStyle(A).transform;if(U!=null&&U!=="none"&&U!==""){let _=(L=U.match(/\((.+)\)/))==null?void 0:L[1].split(",");_?(C=Math.abs(parseInt(_[4])),k=Math.abs(parseInt(_[5]))):(C=0,k=0);}return {transformLeft:C,transformTop:k}}val(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){if(T==null)return S.val(A[0]);A.forEach(C=>{S.val(C,T);});return}if(T==null)return A.localName==="input"&&(A.type==="checkbox"||A.type==="radio")?A.checked:A.value;A.localName==="input"&&(A.type==="checkbox"||A.type==="radio")?A.checked=!!T:A.value=T;}}prop(A,T,S){let C=this;if(typeof A=="string"&&(A=C.selectorAll(A)),A!=null){if(isNodeList(A)){if(S==null)return C.prop(A[0],T);A.forEach(k=>{C.prop(k,T,S);});return}if(S==null)return Reflect.get(A,T);A instanceof Element&&T==="innerHTML"?C.html(A,S):Reflect.set(A,T,S);}}removeAttr(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.removeAttr(C,T);});return}A.removeAttribute(T);}}removeClass(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.removeClass(C,T);});return}T==null?A.className="":(Array.isArray(T)||(T=T.split(" ")),T.forEach(C=>{A.classList.remove(C);}));}}removeProp(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.removeProp(C,T);});return}DOMUtilsCommonUtils.delete(A,T);}}replaceWith(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.replaceWith(C,T);});return}typeof T=="string"&&(T=S.parseHTML(T,false,false)),A.parentElement.replaceChild(T,A);}}addClass(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.addClass(C,T);});return}Array.isArray(T)||(T=T.split(" ")),T.forEach(C=>{C.trim()!=""&&A.classList.add(C);});}}hasClass(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A==null)return  false;if(isNodeList(A)){let C=true;for(let k=0;k<A.length;k++){const U=A[k];C=C&&S.hasClass(U,T);}return C}if(!(A!=null&&A.classList))return  false;Array.isArray(T)||(T=T.split(" "));for(let C=0;C<T.length;C++){const k=T[C].trim();if(!A.classList.contains(k))return  false}return  true}append(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A==null)return;if(isNodeList(A)){A.forEach(k=>{S.append(k,T);});return}function C(k,U){typeof T=="string"?k.insertAdjacentHTML("beforeend",DOMUtilsCommonUtils.getSafeHTML(U)):k.appendChild(U);}if(Array.isArray(T)||T instanceof NodeList){let k=S.windowApi.document.createDocumentFragment();T.forEach(U=>{typeof U=="string"&&(U=S.parseHTML(U,true,false)),k.appendChild(U);}),A.appendChild(k);}else C(A,T);}prepend(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.prepend(C,T);});return}typeof T=="string"?A.insertAdjacentHTML("afterbegin",DOMUtilsCommonUtils.getSafeHTML(T)):A.firstChild==null?A.prepend(T):A.insertBefore(T,A.firstChild);}}after(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.after(C,T);});return}if(typeof T=="string")A.insertAdjacentHTML("afterend",DOMUtilsCommonUtils.getSafeHTML(T));else {let C=A.parentElement,k=A.nextSibling;!C||k?A.after(T):A.parentElement.insertBefore(T,A.nextSibling);}}}before(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.before(C,T);});return}if(typeof T=="string")A.insertAdjacentHTML("beforebegin",DOMUtilsCommonUtils.getSafeHTML(T));else {let C=A.parentElement;C?C.insertBefore(T,A):A.before(T);}}}remove(A){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(S=>{T.remove(S);});return}A.remove();}}empty(A){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(S=>{T.empty(S);});return}T.html(A,"");}}offset(A){let T=this;if(typeof A=="string"&&(A=T.selector(A)),A==null)return;let S=A.getBoundingClientRect();return {top:S.top+T.windowApi.globalThis.scrollY,left:S.left+T.windowApi.globalThis.scrollX}}width(A,T=false){let S=this;if(typeof A=="string"&&(A=S.selector(A)),A!=null){if(DOMUtilsCommonUtils.isWin(A))return S.windowApi.window.document.documentElement.clientWidth;if(A.nodeType===9)return A=A,Math.max(A.body.scrollWidth,A.documentElement.scrollWidth,A.body.offsetWidth,A.documentElement.offsetWidth,A.documentElement.clientWidth);if(T||!T&&DOMUtilsCommonUtils.isShow(A)){if(A=A,parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"width").toString())>0)return parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"width").toString());if(A.offsetWidth>0){let C=DOMUtilsCommonUtils.getStyleValue(A,"borderLeftWidth"),k=DOMUtilsCommonUtils.getStyleValue(A,"borderRightWidth"),U=DOMUtilsCommonUtils.getStyleValue(A,"paddingLeft"),L=DOMUtilsCommonUtils.getStyleValue(A,"paddingRight"),_=parseFloat(A.offsetWidth.toString())-parseFloat(C.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {A=A;let{recovery:C}=DOMUtilsCommonUtils.showElement(A),k=S.width(A,true);return C(),k}}}height(A,T=false){let S=this;if(DOMUtilsCommonUtils.isWin(A))return S.windowApi.window.document.documentElement.clientHeight;if(typeof A=="string"&&(A=S.selector(A)),A!=null){if(A.nodeType===9)return A=A,Math.max(A.body.scrollHeight,A.documentElement.scrollHeight,A.body.offsetHeight,A.documentElement.offsetHeight,A.documentElement.clientHeight);if(T||!T&&DOMUtilsCommonUtils.isShow(A)){if(A=A,parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"height").toString())>0)return parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"height").toString());if(A.offsetHeight>0){let C=DOMUtilsCommonUtils.getStyleValue(A,"borderTopWidth"),k=DOMUtilsCommonUtils.getStyleValue(A,"borderBottomWidth"),U=DOMUtilsCommonUtils.getStyleValue(A,"paddingTop"),L=DOMUtilsCommonUtils.getStyleValue(A,"paddingBottom"),_=parseFloat(A.offsetHeight.toString())-parseFloat(C.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {A=A;let{recovery:C}=DOMUtilsCommonUtils.showElement(A),k=S.height(A,true);return C(),k}}}outerWidth(A,T=false){let S=this;if(DOMUtilsCommonUtils.isWin(A))return S.windowApi.window.innerWidth;if(typeof A=="string"&&(A=S.selector(A)),A!=null)if(A=A,T||!T&&DOMUtilsCommonUtils.isShow(A)){let C=S.windowApi.globalThis.getComputedStyle(A,null),k=DOMUtilsCommonUtils.getStyleValue(C,"marginLeft"),U=DOMUtilsCommonUtils.getStyleValue(C,"marginRight");return A.offsetWidth+k+U}else {let{recovery:C}=DOMUtilsCommonUtils.showElement(A),k=S.outerWidth(A,true);return C(),k}}outerHeight(A,T=false){let S=this;if(DOMUtilsCommonUtils.isWin(A))return S.windowApi.window.innerHeight;if(typeof A=="string"&&(A=S.selector(A)),A!=null)if(A=A,T||!T&&DOMUtilsCommonUtils.isShow(A)){let C=S.windowApi.globalThis.getComputedStyle(A,null),k=DOMUtilsCommonUtils.getStyleValue(C,"marginTop"),U=DOMUtilsCommonUtils.getStyleValue(C,"marginBottom");return A.offsetHeight+k+U}else {let{recovery:C}=DOMUtilsCommonUtils.showElement(A),k=S.outerHeight(A,true);return C(),k}}animate(A,T,S=1e3,C=null){let k=this;if(typeof A=="string"&&(A=k.selectorAll(A)),A==null)return;if(isNodeList(A)){A.forEach(I=>{k.animate(I,T,S,C);});return}if(typeof S!="number"||S<=0)throw new TypeError("duration must be a positive number");if(typeof C!="function"&&C!==void 0)throw new TypeError("callback must be a function or null");if(typeof T!="object"||T===void 0)throw new TypeError("styles must be an object");if(Object.keys(T).length===0)throw new Error("styles must contain at least one property");let U=performance.now(),L={},_={};for(let I in T)L[I]=A.style[I]||k.windowApi.globalThis.getComputedStyle(A)[I],_[I]=T[I];let $=setInterval(function(){let P=(performance.now()-U)/S;P>1&&(P=1);for(let R in T)A.style[R]=L[R]+(_[R]-L[R])*P+"px";P===1&&(clearInterval($),C&&C());},10);}wrap(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A==null)return;if(isNodeList(A)){A.forEach(L=>{S.wrap(L,T);});return}A=A;let C=S.windowApi.document.createElement("div");S.html(C,T);let k=C.firstChild;A.parentElement.insertBefore(k,A),k.appendChild(A);}prev(A){if(typeof A=="string"&&(A=this.selector(A)),A!=null)return A.previousElementSibling}next(A){if(typeof A=="string"&&(A=this.selector(A)),A!=null)return A.nextElementSibling}noConflict(){let A=this;return A.windowApi.window.DOMUtils&&DOMUtilsCommonUtils.delete(window,"DOMUtils"),A.windowApi.window.DOMUtils=this,this}siblings(A){if(typeof A=="string"&&(A=this.selector(A)),A!=null)return Array.from(A.parentElement.children).filter(S=>S!==A)}parent(A){let T=this;if(typeof A=="string"&&(A=T.selector(A)),A!=null)if(isNodeList(A)){let S=[];return A.forEach(C=>{S.push(T.parent(C));}),S}else return A.parentElement}parseHTML(A,T=false,S=false){let C=this;A=A.trim();function k(){let L=new DOMParser;return S?L.parseFromString(A,"text/html"):L.parseFromString(A,"text/html").body.firstChild}function U(){let L=C.windowApi.document.createElement("div");return C.html(L,A),S?L:L.firstChild}return T?k():U()}serialize(A){const T=A.elements;let S=[];for(let C=0;C<T.length;C++){const k=T[C];if(k.name&&!k.disabled&&(k.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(k.type)))if(k.type==="select-multiple")for(let U=0;U<k.options.length;U++)k.options[U].selected&&S.push({name:k.name,value:k.options[U].value});else S.push({name:k.name,value:k.value});}return S.map(C=>`${encodeURIComponent(C.name)}=${encodeURIComponent(C.value)}`).join("&")}show(A,T=true){let S=this;if(A!=null)if(typeof A=="string"&&(A=S.selectorAll(A)),A instanceof NodeList||A instanceof Array){A=A;for(const C of A)S.show(C,T);}else A=A,A.style.display="",T&&(DOMUtilsCommonUtils.isShow(A)||A.style.setProperty("display","unset","important"));}hide(A,T=true){let S=this;if(A!=null)if(typeof A=="string"&&(A=S.selectorAll(A)),A instanceof NodeList||A instanceof Array){A=A;for(const C of A)S.hide(C,T);}else A=A,A.style.display="none",T&&DOMUtilsCommonUtils.isShow(A)&&A.style.setProperty("display","none","important");}fadeIn(A,T=400,S){if(A==null)return;let C=this;if(typeof A=="string"&&(A=C.selectorAll(A)),isNodeList(A)){A.forEach(_=>{C.fadeIn(_,T,S);});return}A.style.opacity="0",A.style.display="";let k=null,U=null;function L(_){k||(k=_);let $=_-k;A=A,A.style.opacity=Math.min($/T,1).toString(),$<T?C.windowApi.window.requestAnimationFrame(L):(S&&typeof S=="function"&&S(),C.windowApi.window.cancelAnimationFrame(U));}U=C.windowApi.window.requestAnimationFrame(L);}fadeOut(A,T=400,S){let C=this;if(A==null)return;if(typeof A=="string"&&(A=C.selectorAll(A)),isNodeList(A)){A.forEach(_=>{C.fadeOut(_,T,S);});return}A.style.opacity="1";let k=null,U=null;function L(_){k||(k=_);let $=_-k;A=A,A.style.opacity=Math.max(1-$/T,0).toString(),$<T?C.windowApi.window.requestAnimationFrame(L):(A.style.display="none",typeof S=="function"&&S(),C.windowApi.window.cancelAnimationFrame(U));}U=C.windowApi.window.requestAnimationFrame(L);}toggle(A,T){let S=this;if(typeof A=="string"&&(A=S.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(C=>{S.toggle(C);});return}S.windowApi.globalThis.getComputedStyle(A).getPropertyValue("display")==="none"?S.show(A,T):S.hide(A,T);}}createDOMUtils(A){return new DOMUtils(A)}getTextBoundingRect(A,T,S){var nt;let C=this;if(!A||!("value"in A))return A;if(T==null&&(T=A.selectionStart||0),S==null&&(S=A.selectionEnd||0),typeof T=="string"&&(T=parseFloat(T)),(typeof T!="number"||isNaN(T))&&(T=0),T<0?T=0:T=Math.min(A.value.length,T),typeof S=="string"&&(S=parseFloat(S)),(typeof S!="number"||isNaN(S)||S<T)&&(S=T),S<0?S=0:S=Math.min(A.value.length,S),typeof A.createTextRange=="function"){let W=A.createTextRange();return W.collapse(true),W.moveStart("character",T),W.moveEnd("character",S-T),W.getBoundingClientRect()}let k=Y(),U=k.top,L=k.left,_=tt("width",true),$=tt("height",true),I="white-space:pre;padding:0;margin:0;",P=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];U+=tt("padding-top",true),U+=tt("border-top-width",true),L+=tt("padding-left",true),L+=tt("border-left-width",true),L+=1;for(let W=0;W<P.length;W++){let X=P[W];I+=X+":"+tt(X)+";";}let R=A.value||"G",G=R.length,D=C.windowApi.document.createElement("div");T>0&&q(0,T);var N=q(T,S);G>S&&q(S,G),D.style.cssText=I,D.style.position="absolute",D.style.top=U+"px",D.style.left=L+"px",D.style.width=_+"px",D.style.height=$+"px",C.windowApi.document.body.appendChild(D);var F=N.getBoundingClientRect();return (nt=D==null?void 0:D.parentNode)==null||nt.removeChild(D),F;function q(W,X){var Z=C.windowApi.document.createElement("span");return Z.style.cssText=I,Z.textContent=R.substring(W,X),D.appendChild(Z),Z}function Y(){let W=C.windowApi.document.body,X=C.windowApi.document.defaultView,Z=C.windowApi.document.documentElement,ot=C.windowApi.document.createElement("div");ot.style.paddingLeft=ot.style.width="1px",W.appendChild(ot);var ut=ot.offsetWidth==2;W.removeChild(ot);let xt=A.getBoundingClientRect();var K=Z.clientTop||W.clientTop||0,z=Z.clientLeft||W.clientLeft||0,B=X.pageYOffset||ut&&Z.scrollTop||W.scrollTop,V=X.pageXOffset||ut&&Z.scrollLeft||W.scrollLeft;return {top:xt.top+B-K,left:xt.left+V-z}}function tt(W,X){var Z=C.windowApi.document.defaultView.getComputedStyle(A,null).getPropertyValue(W);return X?parseFloat(Z):Z}}}let domUtils$1=new DOMUtils;class ColorConversion{isHex(w){return !(typeof w!="string"||!w.match(/^(\#|)[0-9a-fA-F]{6}$/))}hexToRgba(w,A){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);return w&&w.replace(/\s+/g,"").length===7?"rgba("+parseInt("0x"+w.slice(1,3))+","+parseInt("0x"+w.slice(3,5))+","+parseInt("0x"+w.slice(5,7))+","+A+")":""}hexToRgb(w){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);w=w.replace("#","");let A=w.match(/../g);for(let T=0;T<3;T++)A[T]=parseInt(A[T],16);return A}rgbToHex(w,A,T){let S=/^\d{1,3}$/;if(!S.test(w.toString())||!S.test(A.toString())||!S.test(T.toString()))throw new TypeError("输入错误的rgb颜色值");let C=[w.toString(16),A.toString(16),T.toString(16)];for(let k=0;k<3;k++)C[k].length==1&&(C[k]="0"+C[k]);return "#"+C.join("")}getDarkColor(w,A){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);let T=this.hexToRgb(w);for(let S=0;S<3;S++)T[S]=Math.floor(T[S]*(1-A));return this.rgbToHex(T[0],T[1],T[2])}getLightColor(w,A){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);let T=this.hexToRgb(w);for(let S=0;S<3;S++)T[S]=Math.floor((255-T[S])*A+T[S]);return this.rgbToHex(T[0],T[1],T[2])}}var Wt,Rt,Ft;class GBKEncoder{constructor(){yt(this,Wt,[]);yt(this,Rt,{});yt(this,Ft,{});let w=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364"),A=0;gt(this,Wt,w.match(/..../g));for(let T=129;T<=254;T++)for(let S=64;S<=254;S++)H(this,Rt)[H(this,Wt)[A++]]=("%"+T.toString(16)+"%"+S.toString(16)).toUpperCase();for(let T in H(this,Rt))H(this,Ft)[H(this,Rt)[T]]=T;}handleText(w){return w=w.replace(/#(\d+)\$/g,function(A,T){return Array(+T+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(A,T,S){return S.replace(/../g,function(C){return C!="##"?T+C:C})}),w}isAscii(w){return w<=127&&w>=0}encode(w){let A=this;return [...w].reduce((S,C,k)=>S+T(C),"");function T(S){var k;let C="";for(let U=0;U<S.length;U++){const L=S.codePointAt(U),_=String.fromCodePoint(L);let $=L.toString(16);if($.length!=4&&($=(k=("000"+$).match(/....$/))==null?void 0:k[0]),U+=_.length-1,A.isAscii(L)){C+=encodeURIComponent(_);continue}if(H(A,Rt)[$]){C+=H(A,Rt)[$];continue}C+=T(`&#${L};`);}return C}}decode(w){var A=/%[0-9A-F]{2}%[0-9A-F]{2}/,T=/%[0-9A-F]{2}/,S=true;let C=this;for(;S;){let k=w.match(A),U=w.match(T);S=!!U,k&&k in H(C,Ft)?w=w.replace(k,String.fromCharCode("0x"+H(C,Ft)[k])):w=w.replace(U,decodeURIComponent(U));}return w}}Wt=new WeakMap,Rt=new WeakMap,Ft=new WeakMap;class UtilsGMCookie{constructor(w){et(this,"windowApi",{window,document});w&&(this.windowApi=Object.assign({},w));}getCookiesList(){return this.windowApi.document.cookie.trim()===""?[]:this.windowApi.document.cookie.split(";")}get(w){if(typeof w!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");let A=this.getCookiesList(),T;for(const S of A){let k=S.trim().split("="),U=k[0];k.splice(0,1);let L=decodeURIComponent(k.join(""));if(U===w){T={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:w,path:"/",sameSite:"unspecified",secure:true,session:false,value:L};break}}return T}list(w,A){if(w==null)throw new Error("Utils.GMCookie.list 参数不能为空");let T=[];try{let S={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};S=utils$1.assign(S,w),this.getCookiesList().forEach(k=>{k=k.trim();let U=k.split("="),L=U[0];U.splice(0,1);let _=decodeURIComponent(U.join("")),$=S.name instanceof RegExp?S.name:new RegExp("^"+S.name,"g");L.match($)&&T.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:L,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:_});}),typeof A=="function"&&A(T);}catch(S){typeof A=="function"&&A(T,S);}}getList(w){if(w==null)throw new Error("Utils.GMCookie.list 参数不能为空");let A=[],T={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return T=utils$1.assign(T,w),this.getCookiesList().forEach(C=>{C=C.trim();let k=C.split("="),U=k[0];k.splice(0,1);let L=decodeURIComponent(k.join("")),_=T.name instanceof RegExp?T.name:new RegExp("^"+T.name,"g");U.match(_)&&A.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:true,httpOnly:false,name:U,path:"/",sameSite:"unspecified",secure:true,session:false,value:L});}),A}set(w,A){let T;try{let S={url:this.windowApi.window.location.href,name:"",value:"",domain:"",path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};S=utils$1.assign(S,w);let C=S.expirationDate?S.expirationDate:Math.floor(Date.now())+60*60*24*30,k=S.name+"="+decodeURIComponent(S.value)+";expires="+new Date(C).toGMTString()+"; path=/";utils$1.isNotNull(S.domain)&&(k+="; domain="+S.domain),this.windowApi.document.cookie=k;}catch(S){T=S;}finally{typeof A=="function"&&A(T);}}delete(w,A){let T;try{let S={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:""};S=utils$1.assign(S,w);let C=`${S.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${S.path}`;utils$1.isNotNull(S.firstPartyDomain)&&(C+=`; domain=${S.firstPartyDomain};`),this.windowApi.document.cookie=C;}catch(S){T=S;}finally{typeof A=="function"&&A(T);}}parseCookie(w){if(w.trim()==="")return [];let A=w.split(";"),T=[];for(const S of A){let k=S.trim().split("="),U=k[0];k.splice(0,1);let L=decodeURIComponent(k.join(""));T.push({key:U,value:L});}return T}}const AjaxHooker=function(){return function(){const E="1.4.4",w={hookFns:[],filters:[]},A=window.unsafeWindow||document.defaultView||window;let T=A.__ajaxHooker;const S=A.Response.prototype,C=["response","responseText","responseXML"],k=["arrayBuffer","blob","formData","json","text"],U=["method","headers","body","mode","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","priority"],L=["readystatechange","load","loadend"],_={}.toString.call.bind({}.toString),$=Object.getOwnPropertyDescriptor.bind(Object),I=()=>{},P=z=>console.error(z);function R(z){return z&&["object","function"].includes(typeof z)&&typeof z.then=="function"}function G(z,...B){try{const V=z(...B);return R(V)?V.then(null,P):V}catch(V){console.error(V);}}function D(z,B,V,Q){Object.defineProperty(z,B,{configurable:true,enumerable:true,get:V,set:Q});}function N(z,B,V=z[B]){D(z,B,()=>V,I);}function F(z,B,V=z[B]){Object.defineProperty(z,B,{configurable:true,enumerable:true,writable:true,value:V});}function q(z){const B={};switch(_(z)){case "[object String]":for(const V of z.trim().split(/[\r\n]+/)){const[Q,J]=V.split(/\s*:\s*/);if(!Q)break;const rt=Q.toLowerCase();B[rt]=rt in B?`${B[rt]}, ${J}`:J;}break;case "[object Headers]":for(const[V,Q]of z)B[V]=Q;break;case "[object Object]":return {...z}}return B}function Y(){this.ajaxHooker_isStopped=true;}class tt{then(B){return B&&B(),new tt}}class nt{constructor(B){this.request=B,this.requestClone={...this.request};}shouldFilter(B){const{type:V,url:Q,method:J,async:rt}=this.request;return B.length&&!B.find(at=>{switch(true){case(at.type&&at.type!==V):case(_(at.url)==="[object String]"&&!Q.includes(at.url)):case(_(at.url)==="[object RegExp]"&&!at.url.test(Q)):case(at.method&&at.method.toUpperCase()!==J.toUpperCase()):case("async"in at&&at.async!==rt):return  false}return  true})}waitForRequestKeys(){const B=["url","method","abort","headers","data"];if(!this.request.async)return A.__ajaxHooker.hookInsts.forEach(({hookFns:Q,filters:J})=>{this.shouldFilter(J)||(Q.forEach(rt=>{_(rt)==="[object Function]"&&G(rt,this.request);}),B.forEach(rt=>{R(this.request[rt])&&(this.request[rt]=this.requestClone[rt]);}));}),new tt;const V=[];return A.__ajaxHooker.hookInsts.forEach(({hookFns:Q,filters:J})=>{this.shouldFilter(J)||V.push(Promise.all(Q.map(rt=>G(rt,this.request))).then(()=>Promise.all(B.map(rt=>Promise.resolve(this.request[rt]).then(at=>this.request[rt]=at,()=>this.request[rt]=this.requestClone[rt])))));}),Promise.all(V)}waitForResponseKeys(B){const V=this.request.type==="xhr"?C:k;return this.request.async?Promise.resolve(G(this.request.response,B)).then(()=>Promise.all(V.map(Q=>{const J=$(B,Q);if(J&&"value"in J)return Promise.resolve(J.value).then(rt=>B[Q]=rt,()=>delete B[Q]);delete B[Q];}))):(_(this.request.response)==="[object Function]"&&(G(this.request.response,B),V.forEach(Q=>{("get"in $(B,Q)||R(B[Q]))&&delete B[Q];})),new tt)}}const W={get(z,B){const V=$(z,B);if(V&&!V.configurable&&!V.writable&&!V.get)return z[B];const Q=z.__ajaxHooker;if(Q&&Q.proxyProps){if(B in Q.proxyProps){const J=Q.proxyProps[B];return "get"in J?J.get():typeof J.value=="function"?J.value.bind(Q):J.value}if(typeof z[B]=="function")return z[B].bind(z)}return z[B]},set(z,B,V){const Q=$(z,B);if(Q&&!Q.configurable&&!Q.writable&&!Q.set)return  true;const J=z.__ajaxHooker;if(J&&J.proxyProps&&B in J.proxyProps){const rt=J.proxyProps[B];rt.set?rt.set(V):rt.value=V;}else z[B]=V;return  true}};class X{constructor(B){const V=this;Object.assign(V,{originalXhr:B,proxyXhr:new Proxy(B,W),resThenable:new tt,proxyProps:{},proxyEvents:{}}),B.addEventListener("readystatechange",Q=>{if(V.proxyXhr.readyState===4&&V.request&&typeof V.request.response=="function"){const J={finalUrl:V.proxyXhr.responseURL,status:V.proxyXhr.status,responseHeaders:q(V.proxyXhr.getAllResponseHeaders())},rt={};for(const at of C){try{rt[at]=V.originalXhr[at];}catch{}D(J,at,()=>J[at]=rt[at],ft=>{delete J[at],J[at]=ft;});}V.resThenable=new nt(V.request).waitForResponseKeys(J).then(()=>{for(const at of C)V.proxyProps[at]={get:()=>(at in J||(J[at]=rt[at]),J[at])};});}V.dispatchEvent(Q);}),B.addEventListener("load",Q=>V.dispatchEvent(Q)),B.addEventListener("loadend",Q=>V.dispatchEvent(Q));for(const Q of L){const J="on"+Q;V.proxyProps[J]={get:()=>V.proxyEvents[J]||null,set:rt=>V.addEvent(J,rt)};}for(const Q of ["setRequestHeader","addEventListener","removeEventListener","open","send"])V.proxyProps[Q]={value:V[Q]};}toJSON(){}addEvent(B,V){if(B.startsWith("on"))this.proxyEvents[B]=typeof V=="function"?V:null;else {if(typeof V=="object"&&V!==null&&(V=V.handleEvent),typeof V!="function")return;this.proxyEvents[B]=this.proxyEvents[B]||new Set,this.proxyEvents[B].add(V);}}removeEvent(B,V){B.startsWith("on")?this.proxyEvents[B]=null:(typeof V=="object"&&V!==null&&(V=V.handleEvent),this.proxyEvents[B]&&this.proxyEvents[B].delete(V));}dispatchEvent(B){if(B.stopImmediatePropagation=Y,D(B,"target",()=>this.proxyXhr),D(B,"currentTarget",()=>this.proxyXhr),this.proxyEvents[B.type]&&this.proxyEvents[B.type].forEach(Q=>{this.resThenable.then(()=>!B.ajaxHooker_isStopped&&Q.call(this.proxyXhr,B));}),B.ajaxHooker_isStopped)return;const V=this.proxyEvents["on"+B.type];V&&this.resThenable.then(V.bind(this.proxyXhr,B));}setRequestHeader(B,V){if(this.originalXhr.setRequestHeader(B,V),!this.request)return;const Q=this.request.headers;Q[B]=B in Q?`${Q[B]}, ${V}`:V;}addEventListener(...B){L.includes(B[0])?this.addEvent(B[0],B[1]):this.originalXhr.addEventListener(...B);}removeEventListener(...B){L.includes(B[0])?this.removeEvent(B[0],B[1]):this.originalXhr.removeEventListener(...B);}open(B,V,Q=true,...J){return this.request={type:"xhr",url:V.toString(),method:B.toUpperCase(),abort:false,headers:{},data:null,response:null,async:!!Q},this.openArgs=J,this.resThenable=new tt,["responseURL","readyState","status","statusText",...C].forEach(rt=>{delete this.proxyProps[rt];}),this.originalXhr.open(B,V,Q,...J)}send(B){const V=this,Q=V.originalXhr,J=V.request;if(!J)return Q.send(B);J.data=B,new nt(J).waitForRequestKeys().then(()=>{if(J.abort)typeof J.response=="function"&&(Object.assign(V.proxyProps,{responseURL:{value:J.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),L.forEach(rt=>Q.dispatchEvent(new Event(rt))));else {Q.open(J.method,J.url,J.async,...V.openArgs);for(const rt in J.headers)Q.setRequestHeader(rt,J.headers[rt]);Q.send(J.data);}});}}function Z(){const z=new T.realXHR;return "__ajaxHooker"in z&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),z.__ajaxHooker=new X(z),z.__ajaxHooker.proxyXhr}Z.prototype=A.XMLHttpRequest.prototype,Object.keys(A.XMLHttpRequest).forEach(z=>Z[z]=A.XMLHttpRequest[z]);function ot(z,B={}){return z?new Promise(async(V,Q)=>{const J={};if(_(z)==="[object Request]"){for(const ft of U)J[ft]=z[ft];z.body&&(J.body=await z.arrayBuffer()),z=z.url;}z=z.toString(),Object.assign(J,B),J.method=J.method||"GET",J.headers=J.headers||{};const rt={type:"fetch",url:z,method:J.method.toUpperCase(),abort:false,headers:q(J.headers),data:J.body,response:null,async:true},at=new nt(rt);if(await at.waitForRequestKeys(),rt.abort){if(typeof rt.response=="function"){const ft={finalUrl:rt.url,status:200,responseHeaders:{}};await at.waitForResponseKeys(ft);const mt=k.find(Ut=>Ut in ft);let st=ft[mt];mt==="json"&&typeof st=="object"&&(st=G(JSON.stringify.bind(JSON),st));const wt=new Response(st,{status:200,statusText:"OK"});D(wt,"type",()=>"basic"),D(wt,"url",()=>rt.url),V(wt);}else Q(new DOMException("aborted","AbortError"));return}J.method=rt.method,J.headers=rt.headers,J.body=rt.data,T.realFetch.call(A,rt.url,J).then(ft=>{if(typeof rt.response=="function"){const mt={finalUrl:ft.url,status:ft.status,responseHeaders:q(ft.headers)};k.forEach(st=>ft[st]=function(){return st in mt?Promise.resolve(mt[st]):S[st].call(this).then(wt=>(mt[st]=wt,at.waitForResponseKeys(mt).then(()=>st in mt?mt[st]:wt)))});}V(ft);},Q);}):T.realFetch.call(A,z,B)}function ut(){const z=Object.getOwnPropertyDescriptors(this),B=T.realFetchClone.call(this);return Object.defineProperties(B,z),B}T=A.__ajaxHooker=T||{version:E,fakeXHR:Z,fakeFetch:ot,fakeFetchClone:ut,realXHR:A.XMLHttpRequest,realFetch:A.fetch,realFetchClone:S.clone,hookInsts:new Set},T.version!==E&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),A.XMLHttpRequest=T.fakeXHR,A.fetch=T.fakeFetch,S.clone=T.fakeFetchClone,T.hookInsts.add(w);class xt{call(B,...V){return B&&B.__ajaxHooker&&B.__ajaxHooker.proxyXhr===B&&(B=B.__ajaxHooker.originalXhr),Reflect.apply(this,B,V)}apply(B,V){return B&&B.__ajaxHooker&&B.__ajaxHooker.proxyXhr===B&&(B=B.__ajaxHooker.originalXhr),Reflect.apply(this,B,V||[])}}function K(z){Object.setPrototypeOf(z.nativeXMLHttpRequestSetRequestHeader,xt.prototype),Object.setPrototypeOf(z.nativeXMLHttpRequestOpen,xt.prototype),Object.setPrototypeOf(z.nativeXMLHttpRequestSend,xt.prototype);}return A.secsdk?A.secsdk.csrf&&A.secsdk.csrf.nativeXMLHttpRequestOpen&&K(A.secsdk.csrf):D(A,"secsdk",I,z=>{delete A.secsdk,A.secsdk=z,D(z,"csrf",I,B=>{delete z.csrf,z.csrf=B,B.nativeXMLHttpRequestOpen&&K(B);});}),{hook:z=>w.hookFns.push(z),filter:z=>{Array.isArray(z)&&(w.filters=z);},protect:()=>{N(A,"XMLHttpRequest",T.fakeXHR),N(A,"fetch",T.fakeFetch),N(S,"clone",T.fakeFetchClone);},unhook:()=>{T.hookInsts.delete(w),T.hookInsts.size||(F(A,"XMLHttpRequest",T.realXHR),F(A,"fetch",T.realFetch),F(S,"clone",T.realFetchClone),delete A.__ajaxHooker);}}}()},AjaxHooker1_2_4=function(){return function(){const E=window.unsafeWindow||document.defaultView||window,w=[],A=E.XMLHttpRequest,T=E.Response.prototype,S=Object.prototype.toString,C=E.fetch,k=["response","responseText","responseXML"],U=["arrayBuffer","blob","formData","json","text"],L=["readystatechange","load","loadend"];let _;function $(){}function I(K){console.error(K);}function P(K,z,B,V){Object.defineProperty(K,z,{configurable:true,enumerable:true,get:B,set:V});}function R(K,z,B=K[z]){P(K,z,()=>B,$);}function G(K,z,B=K[z]){Object.defineProperty(K,z,{configurable:true,enumerable:true,writable:true,value:B});}function D(K){return {type:K.type,url:K.url,method:K.method&&K.method.toUpperCase()}}function N(K,z,B){return _&&!_.find(V=>(!V.type||V.type===K)&&(!V.url||(S.call(V.url)==="[object String]"?z.includes(V.url):V.url.test(z)))&&(!V.method||V.method===B.toUpperCase()))}function F(K,z){let B,V=K;for(;V;){const Q=Object.getOwnPropertyDescriptor(V,z);if(B=Q&&Q.get,B)break;V=Object.getPrototypeOf(V);}return B?B.bind(K):$}function q(K){return Promise.all(w.map(z=>Promise.resolve(z(K)).then($,I)))}function Y(K,z){return Promise.all(["url","method","abort","headers","data"].map(B=>Promise.resolve(K[B]).then(V=>K[B]=V,()=>K[B]=z[B])))}function tt(){this.ajaxHooker_stopped=true;}function nt(K){const z=K.target;K.stopImmediatePropagation=tt,z.__ajaxHooker.hookedEvents[K.type].forEach(V=>!K.ajaxHooker_stopped&&V.call(z,K));const B=z.__ajaxHooker.hookedEvents["on"+K.type];typeof B=="function"&&B.call(z,K);}function W(K){K.target.readyState===4?K.target.dispatchEvent(new CustomEvent("ajaxHooker_responseReady",{detail:K})):K.target.__ajaxHooker.delegateEvent(K);}function X(K){K.target.__ajaxHooker.delegateEvent(K);}function Z(K,z,...B){const V=this.__ajaxHooker;return V.url=z.toString(),V.method=K.toUpperCase(),V.openArgs=B,V.headers={},V.originalMethods.open(K,z,...B)}function ot(){const K=new A;let z=K.__ajaxHooker;if(!z){z=K.__ajaxHooker={headers:{},hookedEvents:{readystatechange:new Set,load:new Set,loadend:new Set},delegateEvent:nt,originalGetters:{},originalMethods:{}},K.addEventListener("readystatechange",W),K.addEventListener("load",X),K.addEventListener("loadend",X);for(const V of k)z.originalGetters[V]=F(K,V);for(const V of ["open","setRequestHeader","addEventListener","removeEventListener"])z.originalMethods[V]=K[V].bind(K);K.open=Z,K.setRequestHeader=(V,Q)=>{z.originalMethods.setRequestHeader(V,Q),K.readyState===1&&(z.headers[V]?z.headers[V]+=", "+Q:z.headers[V]=Q);},K.addEventListener=function(...V){L.includes(V[0])?z.hookedEvents[V[0]].add(V[1]):z.originalMethods.addEventListener(...V);},K.removeEventListener=function(...V){L.includes(V[0])?z.hookedEvents[V[0]].delete(V[1]):z.originalMethods.removeEventListener(...V);},L.forEach(V=>{const Q="on"+V;P(K,Q,()=>z.hookedEvents[Q]||null,J=>{z.hookedEvents[Q]=typeof J=="function"?J:null;});});}const B=K.send.bind(K);return K.send=function(V){if(K.readyState!==1)return B(V);if(z.delegateEvent=nt,k.forEach(Q=>{delete K[Q];}),N("xhr",z.url,z.method))return K.addEventListener("ajaxHooker_responseReady",Q=>{z.delegateEvent(Q.detail);}),B(V);try{const Q={type:"xhr",url:z.url,method:z.method,abort:!1,headers:z.headers,data:V,response:null},J={...Q};q(Q).then(()=>{Y(Q,J).then(()=>{if(!Q.abort){z.originalMethods.open(Q.method,Q.url,...z.openArgs);for(const rt in Q.headers)z.originalMethods.setRequestHeader(rt,Q.headers[rt]);V=Q.data,K.addEventListener("ajaxHooker_responseReady",rt=>{try{if(typeof Q.response=="function"){const at={finalUrl:K.responseURL,status:K.status,responseHeaders:{}};for(const st of K.getAllResponseHeaders().trim().split(/[\r\n]+/)){const wt=st.split(/:\s*/);if(wt.length===2){const Ut=wt[0].toLowerCase();at.responseHeaders[Ut]?at.responseHeaders[Ut]+=", "+wt[1]:at.responseHeaders[Ut]=wt[1];}}k.forEach(st=>{P(at,st,()=>at[st]=z.originalGetters[st](),wt=>{delete at[st],at[st]=wt;}),P(K,st,()=>{const wt=z.originalGetters[st]();return K.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:st,val:wt}})),wt});}),K.addEventListener("ajaxHooker_readResponse",st=>{at[st.detail.prop]=st.detail.val;});const ft=Promise.resolve(Q.response(at)).then(()=>{const st=[];return k.forEach(wt=>{const Ut=Object.getOwnPropertyDescriptor(at,wt);Ut&&"value"in Ut&&st.push(Promise.resolve(Ut.value).then(Vt=>{at[wt]=Vt,P(K,wt,()=>(K.dispatchEvent(new CustomEvent("ajaxHooker_readResponse",{detail:{prop:wt,val:Vt}})),Vt));},$));}),Promise.all(st)},I),mt={};L.forEach(st=>{mt[st]=new Set([...z.hookedEvents[st]]),mt["on"+st]=z.hookedEvents["on"+st];}),z.delegateEvent=st=>ft.then(()=>{st.stopImmediatePropagation=tt,mt[st.type].forEach(Ut=>!st.ajaxHooker_stopped&&Ut.call(K,st));const wt=mt["on"+st.type];typeof wt=="function"&&wt.call(K,st);});}}catch(at){console.error(at);}z.delegateEvent(rt.detail);}),B(V);}});});}catch(Q){console.error(Q),B(V);}},K}function ut(K,z,B){U.forEach(V=>{K[V]=()=>new Promise((Q,J)=>{T[V].call(K).then(rt=>{if(V in z)Q(z[V]);else try{z[V]=rt,Promise.resolve(B(z)).then(()=>{V in z?Promise.resolve(z[V]).then(at=>Q(z[V]=at),()=>Q(rt)):Q(rt);},I);}catch(at){console.error(at),Q(rt);}},J);});});}function xt(K,z){if(K&&typeof K.toString=="function"){if(K=K.toString(),z=z||{},z.method=z.method||"GET",z.headers=z.headers||{},N("fetch",K,z.method))return C.call(E,K,z);const B={type:"fetch",url:K,method:z.method.toUpperCase(),abort:false,headers:{},data:z.body,response:null};if(S.call(z.headers)==="[object Headers]")for(const[Q,J]of z.headers)B.headers[Q]=J;else B.headers={...z.headers};const V={...B};return new Promise((Q,J)=>{try{q(B).then(()=>{Y(B,V).then(()=>{if(B.abort)return J("aborted");K=B.url,z.method=B.method,z.headers=B.headers,z.body=B.data,C.call(E,K,z).then(rt=>{if(typeof B.response=="function"){const at={finalUrl:rt.url,status:rt.status,responseHeaders:{}};for(const[ft,mt]of rt.headers)at.responseHeaders[ft]=mt;ut(rt,at,B.response),rt.clone=()=>{const ft=T.clone.call(rt);return ut(ft,at,B.response),ft};}Q(rt);},J);});});}catch(rt){return console.error(rt),C.call(E,K,z)}})}else return C.call(E,K,z)}return E.XMLHttpRequest=ot,Object.keys(A).forEach(K=>ot[K]=A[K]),ot.prototype=A.prototype,E.fetch=xt,{hook:K=>w.push(K),filter:K=>{_=Array.isArray(K)&&K.map(D);},protect:()=>{R(E,"XMLHttpRequest",ot),R(E,"fetch",xt);},unhook:()=>{G(E,"XMLHttpRequest",A),G(E,"fetch",C);}}}()};class GMMenu{constructor(w){et(this,"GM_Api",{getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null});et(this,"MenuHandle",{context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:true,isStoreValue:true},$emoji:{success:"✅",error:"❌"},init(){for(let w=0;w<this.$data.data.length;w++){let A=this.$data.data[w].data;A.enable=!!this.getLocalMenuData(A.key,A.enable),typeof A.showText!="function"&&(A.showText=(T,S)=>S?this.$emoji.success+" "+T:this.$emoji.error+" "+T);}},register(w){let A=this;if(w==null)throw new TypeError("register菜单数据不能为空");Array.isArray(w)||(w=[w]);for(let T=0;T<w.length;T++){let S=utils$1.deepClone(w[T].data);const{showText:C,clickCallBack:k}=this.handleMenuData(S);let U=A.context.GM_Api.registerMenuCommand(C,k);w[T].id=U,S.deleteMenu=function(){A.context.GM_Api.unregisterMenuCommand(U);},Reflect.deleteProperty(w[T],"handleData"),w[T].handleData=S;}},getLocalMenuData(w,A){let T=this.context.GM_Api.getValue(this.$data.key,{});return w in T?T[w]:A},setLocalMenuData(w,A){let T=this.context.GM_Api.getValue(this.$data.key,{});T[w]=A,this.context.GM_Api.setValue(this.$data.key,T);},handleInitDetail(w){return w.enable=!!this.getLocalMenuData(w.key,w.enable),typeof w.showText!="function"&&(w.showText=(A,T)=>T?this.$emoji.success+" "+A:this.$emoji.error+" "+A),w},handleMenuData(w){let A=this,T=w.key,S=!!this.getLocalMenuData(T,w.enable),C=w.showText(w.text,S);w.id,w.autoClose,w.accessKey,w.title,w.autoReload=typeof w.autoReload!="boolean"?this.$default.autoReload:w.autoReload,w.isStoreValue=typeof w.isStoreValue!="boolean"?this.$default.isStoreValue:w.isStoreValue;function k(U){let L=!!A.getLocalMenuData(T,S);w.isStoreValue&&A.setLocalMenuData(T,!L),typeof w.callback=="function"&&w.callback({key:T,enable:!L,oldEnable:L,event:U,storeValue(_){A.setLocalMenuData(T,_);}}),w.autoReload?window.location.reload():A.context.update();}return {showText:C,clickCallBack:k}},getMenuData(w){return this.$data.data.find(A=>A.data.key===w)},getMenuOption(w){var A;return (A=this.$data.data.find(T=>T.data.key===w))==null?void 0:A.data},getMenuHandledOption(w){var A;return (A=this.$data.data.find(T=>T.handleData.key===w))==null?void 0:A.handleData}});this.GM_Api.getValue=w.GM_getValue,this.GM_Api.setValue=w.GM_setValue,this.GM_Api.registerMenuCommand=w.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=w.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof w.autoReload=="boolean"?w.autoReload:true;for(const A of Object.keys(this.GM_Api))if(typeof this.GM_Api[A]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${A}，且传入该对象`);this.add((w==null?void 0:w.data)||[]);}__add(w){if(Array.isArray(w))for(let A=0;A<w.length;A++){const T=w[A];this.MenuHandle.$data.data.push({data:T,id:void 0});}else this.MenuHandle.$data.data.push({data:w,id:void 0});}add(w){this.__add(w),this.update();}update(w){let A=[];Array.isArray(w)?A=[...A,...w]:w!=null&&(A=[...A,w]),A.forEach(T=>{let S=this.MenuHandle.getMenuOption(T.key);S?Object.assign(S,T):this.__add(T);}),this.MenuHandle.$data.data.forEach(T=>{T.handleData&&T.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(w){this.GM_Api.unregisterMenuCommand(w);}get(w){return this.getEnable(w)}getEnable(w){return this.MenuHandle.getMenuHandledOption(w).enable}getText(w){return this.MenuHandle.getMenuHandledOption(w).text}getShowTextValue(w){return this.MenuHandle.getMenuHandledOption(w).showText(this.getText(w),this.getEnable(w))}getMenuId(w){let A=null;for(let T=0;T<this.MenuHandle.$data.data.length;T++){const S=this.MenuHandle.$data.data[T];if(S.handleData.key===w){A=S.id;break}}return A}getAccessKey(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.accessKey}getAutoClose(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.autoClose}getAutoReload(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.autoReload}getCallBack(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(w,A){this.MenuHandle.setLocalMenuData(w,A);}setEnable(w,A){this.setValue(w,!!A);}setEnableTrueEmoji(w){if(typeof w!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=w;}setEnableFalseEmoji(w){if(typeof w!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=w;}setLocalStorageKeyName(w){if(typeof w!="string")throw new Error("参数keyName必须是string类型");this.MenuHandle.$data.key=w;}}class Hooks{initEnv(){Function.prototype.hook=function(realFunc,hookFunc,context){let _context=null,_funcName=null;if(_context=context||window,_funcName=getFuncName(this),_context["realFunc_"+_funcName]=this,_context[_funcName].prototype&&_context[_funcName].prototype.isHooked)return console.log("Already has been hooked,unhook first"),false;function getFuncName(E){let w=E.toString(),A=/function\s+(\w+)\s*\(/,T=w.match(A);return T?T[1]:""}try{return eval("_context[_funcName] = function "+_funcName+`(){
let args = Array.prototype.slice.call(arguments,0);
let obj = this;
hookFunc.apply(obj,args);
return _context['realFunc_`+_funcName+`'].apply(obj,args);
};`),_context[_funcName].prototype.isHooked=!0,!0}catch(E){return console.log("Hook failed,check the params."),false}},Function.prototype.unhook=function(E,w,A){let T=null,S=null;return T=A||window,S=w,T[S].prototype.isHooked?(T[S]=T["realFunc"+S],Reflect.deleteProperty(T,"realFunc_"+S),true):(console.log("No function is hooked on"),false)};}cleanEnv(){return Function.prototype.hasOwnProperty("hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Function.prototype.hasOwnProperty("unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),true}}const GenerateUUID=function(){var E;return typeof((E=window==null?void 0:window.crypto)==null?void 0:E.randomUUID)=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(w){var A=Math.random()*16|0,T=w==="x"?A:A&3|8;return T.toString(16)})};var bt,Bt;class Httpx{constructor(w={}){et(this,"GM_Api",{xmlHttpRequest:null});et(this,"HttpxRequestHook",{$config:{configList:[]},async beforeRequestCallBack(w){if(typeof w.allowInterceptConfig=="boolean"){if(!w.allowInterceptConfig)return w}else if(w.allowInterceptConfig!=null&&typeof w.allowInterceptConfig.beforeRequest=="boolean"&&!w.allowInterceptConfig.beforeRequest)return w;for(let A=0;A<this.$config.configList.length;A++){let T=this.$config.configList[A];if(typeof T.fn=="function"&&await T.fn(w)==null)return}return w},add(w){if(typeof w=="function"){let A=GenerateUUID();return this.$config.configList.push({id:A,fn:w}),A}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(w){if(typeof w=="string"){let A=this.$config.configList.findIndex(T=>T.id===w);if(A!==-1)return this.$config.configList.splice(A,1),true}return  false},clearAll(){this.$config.configList=[];}});et(this,"HttpxResponseHook",{$config:{configList:[]},async successResponseCallBack(w,A){if(typeof A.allowInterceptConfig=="boolean"){if(!A.allowInterceptConfig)return A}else if(A.allowInterceptConfig!=null&&typeof A.allowInterceptConfig.afterResponseSuccess=="boolean"&&!A.allowInterceptConfig.afterResponseSuccess)return A;for(let T=0;T<this.$config.configList.length;T++){let S=this.$config.configList[T];if(typeof S.successFn=="function"&&await S.successFn(w,A)==null)return}return w},async errorResponseCallBack(w){if(typeof w.details.allowInterceptConfig=="boolean"){if(!w.details.allowInterceptConfig)return w}else if(w.details.allowInterceptConfig!=null&&typeof w.details.allowInterceptConfig.afterResponseError=="boolean"&&!w.details.allowInterceptConfig.afterResponseError)return w;for(let A=0;A<this.$config.configList.length;A++){let T=this.$config.configList[A];if(typeof T.errorFn=="function"&&await T.errorFn(w)==null)return}return w},add(w,A){let T=GenerateUUID();return this.$config.configList.push({id:T,successFn:w,errorFn:A}),T},delete(w){if(typeof w=="string"){let A=this.$config.configList.findIndex(T=>T.id===w);if(A!==-1)return this.$config.configList.splice(A,1),true}return  false},clearAll(){this.$config.configList=[];}});et(this,"HttpxRequestOption",{context:this,handleBeforeRequestOptionArgs(...w){let A={};if(typeof w[0]=="string"){let T=w[0];if(A.url=T,typeof w[1]=="object"){let S=w[1];utils$1.assign(A,S,true),A.url=T;}}else {let T=w[0];utils$1.assign(A,T,true);}return A},getRequestOption(w,A,T,S){let C=this,k=A.url||H(this.context,bt).url;typeof k=="string"&&(k=k.trim(),k.startsWith("http://")||k.startsWith("https://")||typeof H(this.context,Bt).baseURL=="string"&&(k=H(this.context,Bt).baseURL+k));let U={url:k,method:(w||"GET").toString().toUpperCase().trim(),timeout:A.timeout||H(this.context,bt).timeout,responseType:A.responseType||H(this.context,bt).responseType,headers:utils$1.deepClone(H(this.context,bt).headers),data:A.data||H(this.context,bt).data,redirect:A.redirect||H(this.context,bt).redirect,cookie:A.cookie||H(this.context,bt).cookie,cookiePartition:A.cookiePartition||H(this.context,bt).cookiePartition,binary:A.binary||H(this.context,bt).binary,nocache:A.nocache||H(this.context,bt).nocache,revalidate:A.revalidate||H(this.context,bt).revalidate,context:utils$1.deepClone(A.context||H(this.context,bt).context),overrideMimeType:A.overrideMimeType||H(this.context,bt).overrideMimeType,anonymous:A.anonymous||H(this.context,bt).anonymous,fetch:A.fetch||H(this.context,bt).fetch,fetchInit:utils$1.deepClone(H(this.context,bt).fetchInit),allowInterceptConfig:{beforeRequest:H(this.context,bt).allowInterceptConfig.beforeRequest,afterResponseSuccess:H(this.context,bt).allowInterceptConfig.afterResponseSuccess,afterResponseError:H(this.context,bt).allowInterceptConfig.afterResponseError},user:A.user||H(this.context,bt).user,password:A.password||H(this.context,bt).password,onabort(...L){C.context.HttpxCallBack.onAbort(A,T,S,L);},onerror(...L){C.context.HttpxCallBack.onError(A,T,S,L);},onloadstart(...L){C.context.HttpxCallBack.onLoadStart(A,L);},onprogress(...L){C.context.HttpxCallBack.onProgress(A,L);},onreadystatechange(...L){C.context.HttpxCallBack.onReadyStateChange(A,L);},ontimeout(...L){C.context.HttpxCallBack.onTimeout(A,T,S,L);},onload(...L){C.context.HttpxCallBack.onLoad(A,T,S,L);}};typeof A.allowInterceptConfig=="boolean"?Object.keys(U.allowInterceptConfig).forEach(L=>{Reflect.set(U.allowInterceptConfig,L,A.allowInterceptConfig);}):typeof A.allowInterceptConfig=="object"&&A.allowInterceptConfig!=null&&Object.keys(A.allowInterceptConfig).forEach(L=>{let _=Reflect.get(A.allowInterceptConfig,L);typeof _=="boolean"&&Reflect.has(U.allowInterceptConfig,L)&&Reflect.set(U.allowInterceptConfig,L,_);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(U.fetch=true),typeof U.headers=="object"?typeof A.headers=="object"&&Object.keys(A.headers).forEach((L,_)=>{var $,I;L in U.headers&&(($=A.headers)==null?void 0:$[L])==null?Reflect.deleteProperty(U.headers,L):U.headers[L]=(I=A==null?void 0:A.headers)==null?void 0:I[L];}):Reflect.set(U,"headers",A.headers),typeof U.fetchInit=="object"?typeof A.fetchInit=="object"&&Object.keys(A.fetchInit).forEach((L,_)=>{L in U.fetchInit&&A.fetchInit[L]==null?Reflect.deleteProperty(U.fetchInit,L):Reflect.set(U.fetchInit,L,Reflect.get(A.fetchInit,L));}):Reflect.set(U,"fetchInit",A.fetchInit),typeof U.cookiePartition=="object"&&U.cookiePartition!=null&&Reflect.has(U.cookiePartition,"topLevelSite")&&typeof U.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(U.cookiePartition,"topLevelSite");try{new URL(U.url);}catch{U.url.startsWith("//")?U.url=globalThis.location.protocol+U.url:U.url.startsWith("/")?U.url=globalThis.location.origin+U.url:U.url=globalThis.location.origin+"/"+U.url;}U.fetchInit&&!U.fetch&&Reflect.deleteProperty(U,"fetchInit");try{let L=A.processData??!0;if(U.data!=null&&L){let _=U.method;if(_==="GET"||_==="HEAD"){let $=new URL(U.url),I="",P=!1;typeof U.data=="string"?(P=!0,I=U.data):typeof U.data=="object"&&(P=!0,I=new URLSearchParams(U.data).toString()),P&&Reflect.deleteProperty(U,"data"),I!=""&&($.search===""?$.search=I:$.search.endsWith("&")?$.search=$.search+I:$.search=$.search+"&"+I),U.url=$.toString();}else if(_==="POST"&&U.headers!=null){let $=Object.keys(U.headers),I=$.findIndex(P=>P.trim().toLowerCase()==="content-type"&&typeof U.headers[P]=="string");if(I!==-1){let P=$[I],R=U.headers[P];if(R.includes("application/json"))if(U.data instanceof FormData){const G={};U.data.forEach((D,N)=>{G[N]=D;}),U.data=JSON.stringify(G);}else typeof U.data=="object"&&(U.data=JSON.stringify(U.data));else R.includes("application/x-www-form-urlencoded")?typeof U.data=="object"&&(U.data=new URLSearchParams(U.data).toString()):R.includes("multipart/form-data")&&U.data instanceof FormData&&Reflect.deleteProperty(U.headers,P);}}}}catch(L){console.warn("Httpx ==> 转换data参数错误",L);}return U},removeRequestNullOption(w){if(Object.keys(w).forEach(A=>{if(w[A]==null||w[A]instanceof Function&&utils$1.isNull(w[A])){Reflect.deleteProperty(w,A);return}}),utils$1.isNull(w.url))throw new TypeError(`Utils.Httpx 参数 url不符合要求: ${w.url}`);return w},handleFetchOption(w){let A={};(w.method==="GET"||w.method==="HEAD")&&w.data!=null&&Reflect.deleteProperty(w,"data");let T=new AbortController,S=T.signal;return S.onabort=()=>{w.onabort({isFetch:true,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},A.method=w.method??"GET",A.headers=w.headers,A.body=w.data,A.mode="cors",A.credentials="include",A.cache="no-cache",A.redirect="follow",A.referrerPolicy="origin-when-cross-origin",A.signal=S,Object.assign(A,w.fetchInit||{}),{fetchOption:w,fetchRequestOption:A,abortController:T}}});et(this,"HttpxCallBack",{context:this,async onAbort(w,A,T,S){"onabort"in w?w.onabort.apply(this,S):"onabort"in H(this.context,bt)&&H(this.context,bt).onabort.apply(this,S);let C=S;C.length&&(C=C[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new TypeError("request canceled"),response:null,details:w})!=null&&A({data:C,details:w,msg:"请求被取消",status:false,statusCode:-1,type:"onabort"});},async onError(w,A,T,S){"onerror"in w?w.onerror.apply(this,S):"onerror"in H(this.context,bt)&&H(this.context,bt).onerror.apply(this,S);let C=S;C.length&&(C=C[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new TypeError("request error"),response:C,details:w})!=null&&A({data:C,details:w,msg:"请求异常",status:false,statusCode:C.status,type:"onerror"});},async onTimeout(w,A,T,S){"ontimeout"in w?w.ontimeout.apply(this,S):"ontimeout"in H(this.context,bt)&&H(this.context,bt).ontimeout.apply(this,S);let C=S;C.length&&(C=C[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new TypeError("request timeout"),response:(S||[null])[0],details:w})!=null&&A({data:C,details:w,msg:"请求超时",status:false,statusCode:0,type:"ontimeout"});},onLoadStart(w,A){"onloadstart"in w?w.onloadstart.apply(this,A):"onloadstart"in H(this.context,bt)&&H(this.context,bt).onloadstart.apply(this,A);},async onLoad(w,A,T,S){let C=S[0];if(utils$1.isNull(C.responseText)&&utils$1.isNotNull(C.response)&&(typeof C.response=="object"?utils$1.tryCatch().run(()=>{C.responseText=JSON.stringify(C.response);}):C.responseText=C.response),C.response==null&&typeof C.responseText=="string"&&C.responseText.trim()!==""){let U=C.responseText,L=U;if(w.responseType==="json")L=utils$1.toJSON(U);else if(w.responseType==="document")L=new DOMParser().parseFromString(U,"text/html");else if(w.responseType==="arraybuffer")L=new TextEncoder().encode(U);else if(w.responseType==="blob"){let $=new TextEncoder().encode(U);L=new Blob([$]);}try{if(!Reflect.set(C,"response",L)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(C,"httpxResponse",L);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(C,"httpxResponse",L);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}let k=Reflect.get(C,"responseURL");if(C.finalUrl==null&&k!=null&&Reflect.set(C,"finalUrl",k),Math.floor(C.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(C,w)==null)return;A({data:C,details:w,msg:"请求成功",status:true,statusCode:C.status,type:"onload"});}else this.context.HttpxCallBack.onError(w,A,T,S);},onProgress(w,A){"onprogress"in w?w.onprogress.apply(this,A):"onprogress"in H(this.context,bt)&&H(this.context,bt).onprogress.apply(this,A);},onReadyStateChange(w,A){"onreadystatechange"in w?w.onreadystatechange.apply(this,A):"onreadystatechange"in H(this.context,bt)&&H(this.context,bt).onreadystatechange.apply(this,A);}});et(this,"HttpxRequest",{context:this,async request(w){if(H(this.context,Bt).logDetails&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",w),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(w)==null))if(w.fetch){const{fetchOption:A,fetchRequestOption:T,abortController:S}=this.context.HttpxRequestOption.handleFetchOption(w);return this.fetch(A,T,S)}else return this.xmlHttpRequest(w)},xmlHttpRequest(w){return this.context.GM_Api.xmlHttpRequest(w)},fetch(w,A,T){return fetch(w.url,A).then(async S=>{var G;let C={isFetch:true,finalUrl:S.url,readyState:4,status:S.status,statusText:S.statusText,response:void 0,responseFetchHeaders:S.headers,responseHeaders:"",responseText:void 0,responseType:w.responseType,responseXML:void 0};Object.assign(C,w.context||{});for(const[D,N]of S.headers.entries())C.responseHeaders+=`${D}: ${N}
`;const k=S.headers.get("Content-Type");if(w.responseType==="stream"||S.headers.has("Content-Type")&&S.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(C,"isStream",true),Reflect.set(C,"response",S.body),Reflect.deleteProperty(C,"responseText"),Reflect.deleteProperty(C,"responseXML"),w.onload(C);return}let U="",L="",_="",$=await S.arrayBuffer(),I="utf-8";if(S.headers.has("Content-Type")){let D=(G=S.headers.get("Content-Type"))==null?void 0:G.match(/charset=(.+)/);D&&(I=D[1],I=I.toLowerCase());}I=I.replace(/('|")/gi,""),L=new TextDecoder(I).decode($),U=L,w.responseType==="arraybuffer"?U=$:w.responseType==="blob"?U=new Blob([$]):w.responseType==="json"||typeof k=="string"&&k.includes("application/json")?U=utils$1.toJSON(L):(w.responseType==="document"||w.responseType==null)&&(U=new DOMParser().parseFromString(L,"text/html")),_=new DOMParser().parseFromString(L,"text/xml"),Reflect.set(C,"response",U),Reflect.set(C,"responseText",L),Reflect.set(C,"responseXML",_),w.onload(C);}).catch(S=>{S.name!=="AbortError"&&w.onerror({isFetch:true,finalUrl:w.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:S});}),w.onloadstart({isFetch:true,finalUrl:w.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){T.abort();}}}});yt(this,bt,{url:void 0,timeout:5e3,async:false,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:true,afterResponseSuccess:true,afterResponseError:true},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}});yt(this,Bt,{baseURL:void 0,logDetails:false});et(this,"interceptors",{request:{context:null,use(w){if(typeof w!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(w)},eject(w){return this.context.HttpxRequestHook.delete(w)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(w,A){if(typeof w!="function"&&typeof A!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(w,A)},eject(w){return this.context.HttpxResponseHook.delete(w)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}});typeof w.xmlHttpRequest!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),utils$1.coverObjectFunctionThis(this),this.interceptors.request.context=this,this.interceptors.response.context=this,this.config(w);}config(w={}){typeof w.xmlHttpRequest=="function"&&(this.GM_Api.xmlHttpRequest=w.xmlHttpRequest),gt(this,bt,utils$1.assign(H(this,bt),w)),gt(this,Bt,utils$1.assign(H(this,Bt),w));}setXMLHttpRequest(w){this.GM_Api.xmlHttpRequest=w;}get(...w){let A=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...w);return A.method="GET",this.request(A,T=>{Reflect.deleteProperty(T,"onprogress");})}post(...w){let A=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...w);return A.method="POST",this.request(A)}head(...w){let A=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...w);return A.method="HEAD",this.request(A,T=>{Reflect.deleteProperty(T,"onprogress");})}options(...w){let A=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...w);return A.method="OPTIONS",this.request(A,T=>{Reflect.deleteProperty(T,"onprogress");})}delete(...w){let A=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...w);return A.method="DELETE",this.request(A,T=>{Reflect.deleteProperty(T,"onprogress");})}put(...w){let A=this.HttpxRequestOption.handleBeforeRequestOptionArgs(...w);return A.method="PUT",this.request(A)}request(w,A){let T=this.HttpxRequestOption.handleBeforeRequestOptionArgs(w),S=null,C=new globalThis.Promise(async(k,U)=>{let L=this.HttpxRequestOption.getRequestOption(T.method,T,k,U);typeof A=="function"&&A(L),L=this.HttpxRequestOption.removeRequestNullOption(L);const _=await this.HttpxRequest.request(L);_!=null&&typeof _.abort=="function"&&(S=_.abort);});return C.abort=()=>{typeof S=="function"&&S();},C}}bt=new WeakMap,Bt=new WeakMap;var $t,Nt,Xt,oe,Yt,Ht,te,dt;class indexedDB{constructor(w="default_db",A="default_form",T=1){yt(this,$t);yt(this,Nt);yt(this,Xt);yt(this,oe,"1");yt(this,Yt,window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB);yt(this,Ht,{});yt(this,te,null);yt(this,dt,{operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}});if(gt(this,$t,w),gt(this,Nt,A),gt(this,Xt,T),!H(this,Yt))throw alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(w){let A,T;return A=H(this,Ht)[w].transaction(H(this,Nt),"readwrite"),T=A.objectStore(H(this,Nt)),gt(this,te,T),T}open(w,A){let T=this;if(H(T,Ht)[A]){let S=this.createStore(A);w(S);}else {let S=H(T,Yt).open(A,H(T,Xt));S.onerror=function(C){w(null,{code:H(T,dt).openFailed.code,msg:H(T,dt).openFailed.msg,event:C});},S.onsuccess=function(C){if(!H(T,Ht)[A]){let U=C.target;H(T,Ht)[A]=U.result;}let k=T.createStore(A);w(k);},S.onupgradeneeded=function(C){let k=C.target;H(T,Ht)[A]=k.result;let U=H(T,Ht)[A].createObjectStore(H(T,Nt),{keyPath:"key"});U.transaction.oncomplete=function(L){w(U);};};}}async save(w,A){let T=this;return new Promise(S=>{let C=H(this,$t),k={key:w,value:A};this.open(function(U){if(U==null)S({success:false,code:H(T,dt).saveFailed.code,msg:H(T,dt).saveFailed.msg});else {let L=U.put(k);L.onsuccess=function(_){S({success:true,code:H(T,dt).operationSuccess.code,msg:H(T,dt).operationSuccess.msg,event:_});},L.onerror=function(_){S({success:false,code:H(T,dt).saveFailed.code,msg:H(T,dt).saveFailed.msg,event:_});};}},C);})}async has(w){let A=this;return new Promise(T=>{let S=H(this,$t);this.open(function(C){if(C==null)T({success:false,code:H(A,dt).getFailed.code,msg:H(A,dt).getFailed.msg});else {let k=C.get(w);k.onsuccess=function(U){T({success:true,code:H(A,dt).operationSuccess.code,msg:H(A,dt).operationSuccess.msg,event:U});},k.onerror=function(U){T({success:false,code:H(A,dt).getFailed.code,msg:H(A,dt).getFailed.msg,event:U});};}},S);})}async get(w){let A=this;return new Promise(T=>{let S=H(this,$t);this.open(function(C){if(C==null)T({success:false,code:H(A,dt).getFailed.code,msg:H(A,dt).getFailed.msg,data:void 0});else {let k=C.get(w);k.onsuccess=function(U){let _=U.target.result,$=_?_.value:void 0;$==null?T({success:true,code:H(A,dt).empty.code,msg:H(A,dt).empty.msg,data:$,event:U,result:_}):T({success:true,code:H(A,dt).operationSuccess.code,msg:H(A,dt).operationSuccess.msg,data:$,event:U,result:_});},k.onerror=function(U){T({success:false,code:H(A,dt).getFailed.code,msg:H(A,dt).getFailed.msg,data:void 0,event:U});};}},S);})}async regexpGet(w){let A=[],T=this;return new Promise(S=>{let C=H(T,$t);this.open(function(k){if(k==null)S({success:false,code:H(T,dt).regexpGetFailed.code,msg:H(T,dt).regexpGetFailed.msg,data:[]});else {let U=k.getAll();U.onsuccess=function(L){let $=L.target.result;$.length!==0&&$.forEach((I,P)=>{let R=I.key,G=I.value;R.match(w)&&(A=A.concat(G));}),S({success:true,code:H(T,dt).operationSuccess.code,msg:H(T,dt).operationSuccess.msg,data:A,event:L});},U.onerror=function(L){S({success:false,code:H(T,dt).getFailed.code,msg:H(T,dt).getFailed.msg,data:[],event:L});};}},C);})}async delete(w){let A=this;return new Promise(T=>{let S=H(A,$t);this.open(function(C){if(C==null)T({success:false,code:H(A,dt).deleteFailed.code,msg:H(A,dt).deleteFailed.msg});else {let k=C.delete(w);k.onsuccess=function(U){T({success:true,code:H(A,dt).operationSuccess.code,msg:H(A,dt).operationSuccess.msg,event:U});},k.onerror=function(U){T({success:false,code:H(A,dt).deleteFailed.code,msg:H(A,dt).deleteFailed.msg,event:U});};}},S);})}async deleteAll(){let w=this;return new Promise(A=>{let T=H(w,$t);this.open(function(S){if(S==null)A({success:false,code:H(w,dt).deleteAllFailed.code,msg:H(w,dt).deleteAllFailed.msg});else {let C=S.clear();C.onsuccess=function(k){A({success:true,code:H(w,dt).operationSuccess.code,msg:H(w,dt).operationSuccess.msg,event:k});},C.onerror=function(k){A({success:false,code:H(w,dt).deleteAllFailed.code,msg:H(w,dt).deleteAllFailed.msg,event:k});};}},T);})}}$t=new WeakMap,Nt=new WeakMap,Xt=new WeakMap,oe=new WeakMap,Yt=new WeakMap,Ht=new WeakMap,te=new WeakMap,dt=new WeakMap;var jt,qt,Jt,Kt;class LockFunction{constructor(w,A,T){yt(this,jt,false);yt(this,qt,0);yt(this,Jt);yt(this,Kt);et(this,"lock");et(this,"unlock");et(this,"run");et(this,"isLock");let S=this;gt(this,Jt,w),typeof A=="number"?(gt(this,qt,A),gt(this,Kt,utils$1)):(gt(this,qt,T),gt(this,Kt,A)),this.lock=function(){gt(S,jt,true);},this.unlock=function(){setTimeout(()=>{gt(S,jt,false);},H(S,qt));},this.isLock=function(){return H(S,jt)},this.run=async function(...C){S.isLock()||(S.lock(),await H(S,Jt).apply(H(S,Kt),C),S.unlock());};}}jt=new WeakMap,qt=new WeakMap,Jt=new WeakMap,Kt=new WeakMap;var It,Lt,Qt,kt,Gt;class Log{constructor(w,A=window.console){yt(this,It,false);et(this,"tag","Utils.Log");yt(this,Lt,null);yt(this,Qt,0);yt(this,kt,{tag:true,successColor:"#0000FF",errorColor:"#FF0000",infoColor:"0",warnColor:"0",debug:false,autoClearConsole:false,logMaxCount:999});yt(this,Gt,["font-weight: bold; color: cornflowerblue","font-weight: bold; color: cornflowerblue","font-weight: bold; color: darkorange","font-weight: bold; color: cornflowerblue"]);var T;typeof w=="string"?this.tag=w:typeof w=="object"&&typeof((T=w==null?void 0:w.script)==null?void 0:T.name)=="string"&&(this.tag=w.script.name),gt(this,Lt,A);}parseErrorStack(w){let A={name:"",position:""};for(let T of w){T=T.trim();let S=T.match(/^at[\s]+(.+?)[\s]+/i),C=T.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(S==null||C==null)continue;let k=S[S.length-1],U=C[C.length-1];if(!(k===""||k.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){A.name=k,A.position=U;break}}if(A.position===""){let T=w[w.length-1].trim();if(T.startsWith("at chrome-extension://")){let S=T.match(/^at[\s]+(.+)/);S&&(A.position=S[S.length-1]);}}return A.position===""&&(A.position=w[w.length-1].trim().replace(/^at[\s]*/g,"")),A}checkClearConsole(){le(this,Qt)._++,H(this,kt).autoClearConsole&&H(this,Qt)>H(this,kt).logMaxCount&&(H(this,Lt).clear(),gt(this,Qt,0));}printContent(w,A,T){this.checkClearConsole(),T=T||"";let S=new Error().stack.split(`
`);S.splice(0,2);let{name:C,position:k}=this.parseErrorStack(S),U=this.tag,L=this,_=`%c[${U}%c`,$=`%c${C}%c]%c`;C.trim()!==""&&($="-"+$);function I(P){typeof P=="string"?H(L,Lt).log(`${_}${$} %s`,...H(L,Gt),`color: ${A};${T}`,P):typeof P=="number"?H(L,Lt).log(`${_}${$} %d`,...H(L,Gt),`color: ${A};${T}`,P):typeof P=="object"?H(L,Lt).log(`${_}${$} %o`,...H(L,Gt),`color: ${A};${T}`,P):H(L,Lt).log(P);}if(Array.isArray(w))for(let P=0;P<w.length;P++)I(w[P]);else I(w);H(this,kt).debug&&H(this,Lt).log(k);}info(...w){H(this,It)||this.printContent(w,H(this,kt).infoColor);}warn(...w){H(this,It)||this.printContent(w,H(this,kt).warnColor,"background: #FEF6D5;padding: 4px 6px 4px 0px;");}error(...w){H(this,It)||this.printContent(w,H(this,kt).errorColor);}success(...w){H(this,It)||this.printContent(w,H(this,kt).successColor);}table(w){if(H(this,It))return;this.checkClearConsole();let A=new Error().stack.split(`
`);A.splice(0,1);let T=this.parseErrorStack(A),S=T.name,C=T.position,k=S;H(this,Lt).log(`%c[${this.tag}%c-%c${k}%c]%c`,...H(this,Gt),`color: ${H(this,kt).infoColor};`),H(this,Lt).table(w),H(this,kt).debug&&H(this,Lt).log(C);}config(w){gt(this,kt,Object.assign(H(this,kt),w));}disable(){gt(this,It,true);}recovery(){gt(this,It,false);}}It=new WeakMap,Lt=new WeakMap,Qt=new WeakMap,kt=new WeakMap,Gt=new WeakMap;var At,St,Pt,Ot;class Progress{constructor(w){yt(this,At,{canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50});yt(this,St,null);yt(this,Pt,null);yt(this,Ot,null);if(gt(this,At,utils$1.assign(H(this,At),w)),!(H(this,At).canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");this.init();}init(){let w=H(this,At).canvasNode.getContext("2d");if(w==null)throw new Error("Utils.Progress 获取画笔失败");gt(this,St,w),gt(this,Pt,H(this,At).canvasNode.width),gt(this,Ot,H(this,At).canvasNode.height),window.devicePixelRatio&&(H(this,At).canvasNode.style.width=H(this,Pt)+"px",H(this,At).canvasNode.style.height=H(this,Ot)+"px",H(this,At).canvasNode.height=H(this,Ot)*window.devicePixelRatio,H(this,At).canvasNode.width=H(this,Pt)*window.devicePixelRatio,H(this,St).scale(window.devicePixelRatio,window.devicePixelRatio)),H(this,St).lineWidth=H(this,At).lineWidth;}draw(){let w=H(this,At).progress*360/100;H(this,St).clearRect(0,0,H(this,Pt),H(this,Ot)),H(this,St).beginPath(),H(this,St).arc(H(this,Pt)/2,H(this,Ot)/2,H(this,At).circleRadius,1,8),H(this,St).strokeStyle=H(this,At).lineBgColor,H(this,St).stroke(),H(this,St).beginPath(),H(this,St).arc(H(this,Pt)/2,H(this,Ot)/2,H(this,At).circleRadius,-Math.PI/2,w*Math.PI/180-Math.PI/2),H(this,St).strokeStyle=H(this,At).lineColor,H(this,St).stroke();let A=parseInt(H(this,At).progress.toString())+"%";H(this,St).font=H(this,At).fontSize+"px SimHei";let T=H(this,St).measureText(A).width,S=H(this,At).fontSize/2;H(this,St).fillStyle=H(this,At).textColor,H(this,St).fillText(A,H(this,Pt)/2-T/2,H(this,Ot)/2+S/2);}}At=new WeakMap,St=new WeakMap,Pt=new WeakMap,Ot=new WeakMap;const TryCatch=function(...args){let callbackFunction=null,context=null,handleError=E=>{},defaultDetails={log:true};const TryCatchCore={config(E){return defaultDetails=utils$1.assign(defaultDetails,E),TryCatchCore},error(E){return handleError=E,TryCatchCore},run(E,w){callbackFunction=E,context=w||this;let A=executeTryCatch(callbackFunction,handleError,context);return A!==void 0?A:TryCatchCore}};function executeTryCatch(callback,handleErrorFunc,funcThis){let result;try{typeof callback=="string"?(function(){eval(callback);}).apply(funcThis,args):result=callback.apply(funcThis,args);}catch(error){defaultDetails.log&&(callback=callback,console.log(`%c ${callback!=null&&callback.name?callback==null?void 0:callback.name:callback+"出现错误"} `,"color: #f20000"),console.log(`%c 错误原因：${error}`,"color: #f20000"),console.trace(callback)),handleErrorFunc&&(typeof handleErrorFunc=="string"?result=(function(){return eval(handleErrorFunc)}).apply(funcThis,[...args,error]):result=handleErrorFunc.apply(funcThis,[...args,error]));}return result}return TryCatchCore};class UtilsDictionary{constructor(w,A){et(this,"items",{});w!=null&&this.set(w,A);}has(w){return Reflect.has(this.items,w)}startsWith(w){let A=this.keys();for(const T of A)if(String(T).startsWith(String(w)))return  true;return  false}getStartsWith(w){let A=this.keys(),T;for(const S of A)if(String(S).startsWith(String(w))){T=this.get(S);break}return T}set(w,A){if(w===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为空");Reflect.set(this.items,w,A);}delete(w){return this.has(w)?Reflect.deleteProperty(this.items,w):false}get(w){return Reflect.get(this.items,w)}values(){let w=[];for(let A in this.getItems())this.has(A)&&w.push(this.get(A));return w}clear(){this.items=null,this.items={};}size(){return Object.keys(this.getItems()).length}keys(){return Reflect.ownKeys(this.items)}getItems(){return this.items}concat(w){this.items=utils$1.assign(this.items,w.getItems());}forEach(w){for(const A in this.getItems())w(this.get(A),A,this.getItems());}get length(){return this.size()}get entries(){let w=this;return function*(){let A=Object.keys(w.getItems());for(const T of A)yield [T,w.get(T)];}}get[Symbol.iterator](){let w=this;return function(){return w.entries()}}}class WindowApi{constructor(w){et(this,"defaultApi",{document,window,globalThis,self,top});et(this,"api");w&&(w.globalThis==null&&(w.globalThis=w.window),w.self==null&&(w.self=w.window)),w||(w=Object.assign({},this.defaultApi)),this.api=Object.assign({},w);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}}const VueUtils={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(E){return typeof E=="object"&&E!==null},isFunction(E){return typeof E=="function"},isReactive(E){return !!(E&&E[VueUtils.ReactiveFlags.IS_REACTIVE])},isArray(E){return Array.isArray(E)}};class ReactiveEffect{constructor(w,A){et(this,"deps",[]);et(this,"active",true);et(this,"fn");et(this,"scheduler");this.fn=w,this.scheduler=A;}run(w){this.active||this.fn();try{return typeof w=="function"&&w(this),this.fn()}finally{typeof w=="function"&&w(void 0);}}}class RefImpl{constructor(w,A){et(this,"_value");et(this,"_isRef",true);et(this,"_rawValue");et(this,"_vue");this._vue=w,this._rawValue=A,this._value=this._vue.toReactive(A);}get value(){return this._value}set value(w){w!==this._rawValue&&(this._value=this._vue.toReactive(w),this._rawValue=w);}}class ObjectRefImpl{constructor(w,A){et(this,"object");et(this,"key");this.object=w,this.key=A;}get value(){return this.object[this.key]}set value(w){this.object[this.key]=w;}}class Vue{constructor(){et(this,"reactMap",new WeakMap);et(this,"targetMap",new WeakMap);et(this,"activeEffect");}reactive(w){const A=this;if(!(typeof w=="object"&&w!==null))return;if(VueUtils.isReactive(w))return w;let T=this.reactMap.get(w);if(T)return T;const S=new Proxy(w,{get(C,k,U){return k===VueUtils.ReactiveFlags.IS_REACTIVE?true:(A.track(C,"get",k),Reflect.get(C,k,U))},set(C,k,U,L){let _=C[k],$=Reflect.set(C,k,U,L);return _!==U&&A.trigger(C,"set",k,_,U),$}});return A.reactMap.set(w,S),S}watch(w,A){let T;if(VueUtils.isReactive(w))T=()=>this.traversal(w);else if(VueUtils.isFunction(w))T=w;else return;let S;const C=()=>{const U=k.run(L=>{this.activeEffect=L;});A(U,S),S=U;},k=new ReactiveEffect(T,C);S=k.run(U=>{this.activeEffect=U;});}toReactive(w){return VueUtils.isObject(w)?this.reactive(w):w}ref(w){return new RefImpl(this,w)}toRef(w,A){return new ObjectRefImpl(w,A)}toRefs(w){const A=VueUtils.isArray(w)?new Array(w.length):{};for(let T in w)A[T]=this.toRef(w,T);return A}trigger(w,A,T,S,C){const k=this.targetMap.get(w);if(!k)return;const U=k.get(T);this.triggerEffect(U,"effects");}triggerEffect(w,A){w&&w.forEach(T=>{T.scheduler?T.scheduler():T.run();});}track(w,A,T){if(!this.activeEffect)return;let S=this.targetMap.get(w);S||this.targetMap.set(w,S=new Map);let C=S.get(T);C||S.set(T,C=new Set),this.trackEffect(C);}trackEffect(w){this.activeEffect&&!w.has(this.activeEffect)&&(w.add(this.activeEffect),this.activeEffect.deps.push(w));}traversal(w,A=new Set){if(!VueUtils.isObject(w)||A.has(w))return w;A.add(w);for(let T in w)this.traversal(w[T],A);return w}}// @license      MIT
	class ModuleRaid{constructor(w){this.moduleID=Math.random().toString(36).substring(7),this.functionArguments=[[[0],[(T,S,C)=>{this.modules=C.c,this.constructors=C.m,this.get=C;}]],[[1e3],{[this.moduleID]:(T,S,C)=>{this.modules=C.c,this.constructors=C.m,this.get=C;}},[[this.moduleID]]]],this.arrayArguments=[[[this.moduleID],{},T=>{const S=T.m;Object.keys(S).forEach(C=>{try{this.modules[C]=T(C);}catch(k){this.log(`[arrayArguments/1] Failed to require(${C}) with error:
${k}
${k.stack}`);}}),this.get=T;}],this.functionArguments[1]],this.modules={},this.constructors=[];let A={target:window,entrypoint:"webpackJsonp",debug:false,strict:false};typeof w=="object"&&(A=Object.assign(Object.assign({},A),w)),this.target=A.target,this.entrypoint=A.entrypoint,this.debug=A.debug,this.strict=A.strict,this.detectEntrypoint(),this.fillModules(),this.replaceGet(),this.setupPushEvent();}log(w){this.debug&&console.warn(`[moduleRaid] ${w}`);}replaceGet(){this.get===null&&(this.get=w=>this.modules[w]);}fillModules(){if(typeof this.target[this.entrypoint]=="function"?this.functionArguments.forEach((w,A)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint](...w);}catch(T){this.log(`moduleRaid.functionArguments[${A}] failed:
${T}
${T.stack}`);}}):this.arrayArguments.forEach((w,A)=>{try{if(this.modules&&Object.keys(this.modules).length>0)return;this.target[this.entrypoint].push(w);}catch(T){this.log(`Pushing moduleRaid.arrayArguments[${A}] into ${this.entrypoint} failed:
${T}
${T.stack}`);}}),this.modules&&Object.keys(this.modules).length==0){let w=false,A=0;if(typeof this.target[this.entrypoint]!="function"||!this.target[this.entrypoint]([],[],[A]))throw Error("Unknown Webpack structure");for(;!w;)try{this.modules[A]=this.target[this.entrypoint]([],[],[A]),A++;}catch{w=true;}}}setupPushEvent(){const w=this.target[this.entrypoint].push;this.target[this.entrypoint].push=(...A)=>{const T=Reflect.apply(w,this.target[this.entrypoint],A);return document.dispatchEvent(new CustomEvent("moduleraid:webpack-push",{detail:A})),T};}detectEntrypoint(){if(this.target[this.entrypoint]!=null)return;if(this.strict)throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);let w=Object.keys(this.target);if(w=w.filter(A=>A.toLowerCase().includes("chunk")||A.toLowerCase().includes("webpack")).filter(A=>typeof this.target[A]=="function"||Array.isArray(this.target[A])),w.length>1)throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:
${w.join(", ")}`);if(w.length===0)throw Error("No Webpack JSONP entrypoints could be detected");this.log(`Entrypoint has been detected at window.${w[0]} and set for injection`),this.entrypoint=w[0];}searchObject(w,A){for(const T in w){const S=w[T],C=A.toLowerCase();if(typeof S!="object"){if(T.toString().toLowerCase().includes(C))return  true;if(typeof S!="object"){if(S.toString().toLowerCase().includes(C))return  true}else if(this.searchObject(S,A))return  true}}return  false}findModule(w){const A=[],T=Object.keys(this.modules);if(T.length===0)throw new Error("There are no modules to search through!");return T.forEach(S=>{const C=this.modules[S.toString()];if(C!==void 0)try{if(typeof w=="string")switch(w=w.toLowerCase(),typeof C){case "string":C.toLowerCase().includes(w)&&A.push(C);break;case "function":C.toString().toLowerCase().includes(w)&&A.push(C);break;case "object":this.searchObject(C,w)&&A.push(C);break}else if(typeof w=="function")w(C)&&A.push(C);else throw new TypeError(`findModule can only find via string and function, ${typeof w} was passed`)}catch(k){this.log(`There was an error while searching through module '${S}':
${k}
${k.stack}`);}}),A}findConstructor(w){const A=[],T=Object.keys(this.constructors);if(T.length===0)throw new Error("There are no constructors to search through!");return T.forEach(S=>{const C=this.constructors[S];try{typeof w=="string"?(w=w.toLowerCase(),C.toString().toLowerCase().includes(w)&&A.push([this.constructors[S],this.modules[S]])):typeof w=="function"&&w(C)&&A.push([this.constructors[S],this.modules[S]]);}catch(k){this.log(`There was an error while searching through constructor '${S}':
${k}
${k.stack}`);}}),A}}class Utils{constructor(w){et(this,"windowApi");et(this,"version","2025.4.11");et(this,"ajaxHooker",(w=false)=>w?AjaxHooker1_2_4():AjaxHooker());et(this,"ColorConversion",ColorConversion);et(this,"Dictionary",UtilsDictionary);et(this,"GBKEncoder",GBKEncoder);et(this,"GM_Cookie",UtilsGMCookie);et(this,"GM_Menu",GMMenu);et(this,"Hooks",Hooks);et(this,"Httpx",Httpx);et(this,"indexedDB",indexedDB);et(this,"LockFunction",LockFunction);et(this,"Log",Log);et(this,"Progress",Progress);et(this,"tryCatch",TryCatch);et(this,"generateUUID",GenerateUUID);et(this,"Vue",Vue);et(this,"ModuleRaid",ModuleRaid);this.windowApi=new WindowApi(w);}addStyle(w){if(typeof w!="string")throw new Error("Utils.addStyle 参数cssText 必须为String类型");let A=this.windowApi.document.createElement("style");return A.setAttribute("type","text/css"),A.innerHTML=w,this.windowApi.document.head?this.windowApi.document.head.appendChild(A):this.windowApi.document.body?this.windowApi.document.body.appendChild(A):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(A):this.windowApi.document.documentElement.insertBefore(A,this.windowApi.document.documentElement.childNodes[0]),A}assign(w={},A={},T=false){let S=this;if(Array.isArray(A)&&!A.filter(k=>typeof k=="object").length)return A;if(A==null)return w;if(w==null&&(w={}),T)for(const C in A){let U=w[C],L=A[C];if(typeof L=="object"&&L!=null&&C in w&&!S.isDOM(L)){w[C]=S.assign(U,L,T);continue}w[C]=L;}else for(const C in w)if(C in A){let k=w[C],U=A[C];if(typeof U=="object"&&U!=null&&!S.isDOM(U)&&Object.keys(U).length){w[C]=S.assign(k,U,T);continue}w[C]=U;}return w}async asyncReplaceAll(w,A,T){let S=this;if(typeof w!="string")throw new TypeError("string必须是字符串");if(typeof T!="function")throw new TypeError("asyncFn必须是函数");let C;if(typeof A=="string")C=new RegExp(S.parseStringToRegExpString(A),"g");else if(A instanceof RegExp){if(!A.global)throw new TypeError("pattern必须是全局匹配");C=new RegExp(A);}else throw new TypeError("pattern必须是正则对象");let k=[],U,L=0;for(;(U=C.exec(w))!==null;){const _=T(U[0]),$=w.slice(L,U.index);L=U.index+U[0].length,k.push(_),k.push($);}return k.push(w.slice(L)),k=await Promise.all(k),k.join("")}canvasClickByPosition(w,A=0,T=0,S=globalThis){if(!(w instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");A=parseInt(A.toString()),T=parseInt(T.toString());const C={cancelBubble:true,cancelable:true,clientX:A,clientY:T,view:S,detail:1};w.dispatchEvent(new MouseEvent("mousedown",C)),w.dispatchEvent(new MouseEvent("mouseup",C));}checkUserClickInNode(w){var P;let A=this;if(!A.isDOM(w))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");let T=A.windowApi.window.event,S=A.windowApi.window.event,C=(P=T==null?void 0:T.composedPath())==null?void 0:P[0],k=(T==null?void 0:T.clientX)!=null?T.clientX:S.touches[0].clientX,U=(T==null?void 0:T.clientY)!=null?T.clientY:S.touches[0].clientY,{left:L,right:_,top:$,bottom:I}=w.getBoundingClientRect();return k>=L&&k<=_&&U>=$&&U<=I?true:!!(C&&w.contains(C)||C==w)}cloneFormData(w,A){let T=new FormData;for(let[S,C]of w.entries()){let k=typeof A=="function"?A(S,C):false;typeof k=="boolean"&&k||T.append(S,C);}return T}createOverload(){let w=new Map;function A(...T){let S=T.map(k=>typeof k).join(","),C=w.get(S);if(!C)throw new TypeError("没有找到对应的实现");return C.apply(this,T)}return A.addImpl=function(...T){let S=T.pop();if(typeof S!="function")throw new TypeError("最后一个参数必须是函数");let C=T.join(",");w.set(C,S);},A}deepClone(w){let A=this;if(w===void 0)return;if(w===null)return null;let T=w instanceof Array?[]:{};for(const[S,C]of Object.entries(w))T[S]=typeof C=="object"?A.deepClone(C):C;return T}debounce(w,A=0){let T=null;const S=this;return function(...C){clearTimeout(T),T=setTimeout(function(){w.apply(S,C);},A);}}deleteParentNode(w,A){let T=this;if(w==null)return;if(!T.isDOM(w))throw new Error("Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof A!="string")throw new Error("Utils.deleteParentNode 参数 targetSelector 必须为 string 类型");let S=false,C=w.closest(A);return C&&(C.remove(),S=true),S}dispatchEvent(w,A,T){let S=[];typeof A=="string"&&(S=[A]),Array.isArray(A)&&(S=[...A]),S.forEach(C=>{let k=new Event(C);T&&Object.assign(k,T),w.dispatchEvent(k);});}downloadBase64(w,A,T=false){if(typeof w!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof A!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(T){const S=this.windowApi.document.createElement("iframe");S.style.display="none",S.src=w,this.windowApi.document.body.appendChild(S),setTimeout(()=>{S.contentWindow.document.execCommand("SaveAs",true,A),this.windowApi.document.body.removeChild(S);},100);}else {const S=this.windowApi.document.createElement("a");S.setAttribute("target","_blank"),S.download=A,S.href=w,S.click();}}findWebPageVisibleText(w="",A=false){let T=null,S;if(this.windowApi.globalThis.find){let C=this.windowApi.self.find;if(S=C(w,A,true,true,false),S&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(S=C(w,A,true,true,false)),!S)for(S=C(w,0,1);C(w,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)T!=null&&(T=T,T.collapse(false),S=T.findText(w),S&&T.select()),(T==null||S==0)&&(T=this.windowApi.self.document.body.createTextRange(),S=T.findText(w),S&&T.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!S}*findElementsWithText(w,A,T){let S=this;if(w.outerHTML.includes(A))if(w.children.length===0)(typeof T=="function"?T(w):false)||(yield w);else {let C=Array.from(w.childNodes).filter(k=>k.nodeType===Node.TEXT_NODE);for(let k of C)k.textContent.includes(A)&&(typeof T=="function"&&T(w)||(yield k));}for(let C=0;C<w.children.length;C++){let k=w.children[C];yield*S.findElementsWithText(k,A,T);}}findVisibleElement(w){let A=w;for(;A;){if(A.getBoundingClientRect().length)return A;A=A.parentElement;}return null}formatByteToSize(w,A=true){if(w=parseInt(w.toString()),isNaN(w))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let T=0,S="KB",C={};C.B=1,C.KB=1024,C.MB=C.KB*C.KB,C.GB=C.MB*C.KB,C.TB=C.GB*C.KB,C.PB=C.TB*C.KB,C.EB=C.PB*C.KB,C.ZB=C.EB*C.KB,C.YB=C.ZB*C.KB,C.BB=C.YB*C.KB,C.NB=C.BB*C.KB,C.DB=C.NB*C.KB;for(let k in C)if(T=w/C[k],S=k,C.KB>=T)break;return T=T.toFixed(2),T=A?T+S.toString():parseFloat(T.toString()),T}getNodeListValue(...w){let A=[];for(let T of w){let S=T;if(typeof T=="function"&&(S=T()),S.length!==0){A=[...S];break}}return A}getNonNullValue(...w){let A=w[w.length-1],T=this;for(const S of w)if(T.isNotNull(S)){A=S;break}return A}formatTime(w=new Date,A="yyyy-MM-dd HH:mm:ss"){let T=w==null?new Date:new Date(w);function S(U){return U<10?"0"+U:U}function C(U){return U>12?U-12:U}let k={yyyy:T.getFullYear(),MM:S(T.getMonth()+1),dd:S(T.getDate()),HH:S(T.getHours()),hh:S(C(T.getHours())),mm:S(T.getMinutes()),ss:S(T.getSeconds())};return Object.keys(k).forEach(function(U){let L=new RegExp(U,"g");A=A.replace(L,k[U]);}),A}formatToTimeStamp(w){if(typeof w!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(w.length===8){let T=new Date;w=T.getFullYear()+"-"+(T.getMonth()+1)+"-"+T.getDate()+" "+w;}return w=w.substring(0,19),w=w.replace(/-/g,"/"),new Date(w).getTime()}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getArrayLastValue(w){return w[w.length-1]}getArrayRealValue(...w){let A=null;for(let T of w)if(typeof T=="function"&&(T=T()),T!=null){A=T;break}return A}getDaysDifference(w=Date.now(),A=Date.now(),T="天"){T=T.trim(),w.toString().length===10&&(w=w*1e3),A.toString().length===10&&(A=A*1e3);let S=w>A?A:w,C=w>A?w:A,k=1e3,U=60*k,L=60*U,_=24*L,$=30*_,I=12*$,P=new Date(C),R=new Date(S),G=1;T==="年"?G=I:T==="月"?G=$:T==="天"?G=_:T==="时"?G=L:T==="分"?G=U:T==="秒"&&(G=k);let D=Math.round(Math.abs((P-R)/G));if(T==="auto"){let N=C-S;if(D=Math.floor(N/(24*3600*1e3)),D>0)D=D+"天";else {let F=N%864e5,q=Math.floor(F/(3600*1e3));if(q>0)D=q+"小时";else {let Y=F%36e5,tt=Math.floor(Y/(60*1e3));if(tt>0)D=tt+"分钟";else {let nt=Y%6e4;D=Math.round(nt/1e3)+"秒";}}}}return D}getElementSelector(w){let A=this;if(!w||!w.parentElement)return;if(w.id)return "#"+w.id;let T=A.getElementSelector(w.parentElement);if(!T)return w.tagName.toLowerCase();if(w.parentElement.querySelectorAll(w.tagName).length>1){let S=Array.prototype.indexOf.call(w.parentElement.children,w)+1;T+=" > "+w.tagName.toLowerCase()+":nth-child("+S+")";}else T+=" > "+w.tagName.toLowerCase();return T}getMaxValue(...w){let A=[...w],T=[];if(A.length!==0)if(A.length>1){if(A.length===2&&typeof A[0]=="object"&&typeof A[1]=="function"){let S=A[0],C=A[1];Object.keys(S).forEach(k=>{T=[...T,C(k,S[k])];});}else A.forEach(S=>{isNaN(parseFloat(S))||(T=[...T,parseFloat(S)]);});return Math.max(...T)}else return A[0].forEach(S=>{isNaN(parseFloat(S))||(T=[...T,parseFloat(S)]);}),Math.max(...T)}getMaxZIndexNodeInfo(w=1,A=this.windowApi.document,T){w=Number.isNaN(w)?1:w;const S=this,C=2*Math.pow(10,9);let k=0,U=null;function L($){return $.position!=="static"&&$.display!=="none"}function _($){if(typeof T=="function"){let P=T($);if(typeof P=="boolean"&&!P)return}const I=S.windowApi.window.getComputedStyle($);if(L(I)){let P=parseInt(I.zIndex);isNaN(P)||P>k&&(k=P,U=$),$.shadowRoot!=null&&$ instanceof ShadowRoot&&$.shadowRoot.querySelectorAll("*").forEach(R=>{_(R);});}}return A.querySelectorAll("*").forEach(($,I)=>{_($);}),k+=w,k>=C&&(k=C),{node:U,zIndex:k}}getMaxZIndex(w=1,A=this.windowApi.document,T){return this.getMaxZIndexNodeInfo(w,A,T).zIndex}getMinValue(...w){let A=[...w],T=[];if(A.length!==0)if(A.length>1){if(A.length===2&&typeof A[0]=="object"&&typeof A[1]=="function"){let S=A[0],C=A[1];Object.keys(S).forEach(k=>{T=[...T,C(k,S[k])];});}else A.forEach(S=>{isNaN(parseFloat(S))||(T=[...T,parseFloat(S)]);});return Math.min(...T)}else return A[0].forEach(S=>{isNaN(parseFloat(S))||(T=[...T,parseFloat(S)]);}),Math.min(...T)}getRandomAndroidUA(){let w=this,A=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],T=w.getRandomValue(12,14),S=w.getRandomValue(A),C=w.getRandomValue(120,132),k=w.getRandomValue(0,0),U=w.getRandomValue(2272,6099),L=w.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${T}; ${S}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${C}.${k}.${U}.${L} Mobile Safari/537.36`}getRandomPCUA(){let w=this,A=w.getRandomValue(120,132),T=w.getRandomValue(0,0),S=w.getRandomValue(2272,6099),C=w.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${A}.${T}.${S}.${C} Safari/537.36`}getRandomValue(...w){let A=[...w];if(A.length>1)if(A.length===2&&typeof A[0]=="number"&&typeof A[1]=="number"){let T=A[0]>A[1]?A[1]:A[0],S=A[0]>A[1]?A[0]:A[1];return Math.round(Math.random()*(S-T))+T}else return A[Math.floor(Math.random()*A.length)];else if(A.length===1){let T=A[0];if(Array.isArray(T))return T[Math.floor(Math.random()*T.length)];if(typeof T=="object"&&Object.keys(T).length>0){let S=Object.keys(T)[Math.floor(Math.random()*Object.keys(T).length)];return T[S]}else return T}}getReactObj(w){let A={};return Object.keys(w).forEach(T=>{if(T.startsWith("__react")){let S=T.replace(/__(.+)\$.+/i,"$1");S in A||(A[S]=w[T]);}}),A}getSymbol(w,A){if(typeof w!="object")throw new TypeError("target不是一个对象");let T=Object.getOwnPropertySymbols(w);if(typeof A=="string"){let S=T.find(C=>C.toString()===A);if(S)return w[S]}else if(typeof A=="symbol"){let S=T.find(C=>C===A);if(S)return w[S]}else {let S={};return T.forEach(C=>{S[C]=w[C];}),S}}getTextLength(w){return new TextEncoder().encode(w).length}getTextStorageSize(w,A=true){let T=this;return T.formatByteToSize(T.getTextLength(w),A)}getThunderUrl(w){if(w==null)throw new TypeError("url不能为空");if(typeof w!="string")throw new TypeError("url必须是string类型");if(w.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa("AA"+w+"ZZ")}`}isNativeFunc(w){return !!w.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...w){let A=50,T=()=>{let k=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,U=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,L=this.windowApi.document.documentElement.scrollHeight-A;return k+U>=L},S=k=>{let U=k.scrollTop,L=k.clientHeight,_=k.scrollHeight-L-A;return U>=_},C=w[0];if(w.length===0||typeof w[0]=="number")return T();if(typeof w[0]=="object"&&w[0]instanceof HTMLElement)return typeof w[1]=="number"&&!Number.isNaN(w[1])&&(A=w[1]),S(w[0]);throw new TypeError("参数1类型错误"+typeof C)}isDOM(w){return w instanceof Node}isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(w){let A=false;if(typeof jQuery=="object"&&w instanceof jQuery&&(A=true),w==null)return  false;if(typeof w=="object"){let T=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const S of T)if(S in w)A=true;else {A=false;break}}return A}isPhone(w=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(w)}isSameChars(w,A=1){if(typeof w!="string")throw new TypeError("参数 str 必须是 string 类型");if(w.length<2)return  false;w=w.toLowerCase();const T={};let S=0;for(const k of w)Reflect.has(T,k)?T[k]++:T[k]=1,S++;let C=false;for(const k in T)if(T[k]/S>=A){C=true;break}return C}isNotNull(...w){return !this.isNull.apply(this,w)}isNull(...w){let A=true,T=[...w];for(const S of T){let C=false;if(S==null)C=true;else switch(typeof S){case "object":typeof S[Symbol.iterator]=="function"?C=S.length===0:C=Object.keys(S).length===0;break;case "number":C=S===0;break;case "string":C=S.trim()===""||S==="null"||S==="undefined";break;case "boolean":C=!S;break;case "function":C=!!S.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}A=A&&C;}return A}isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(w,A=false){let T=[];w instanceof Array||w instanceof NodeList?(w=w,T=[...w]):T=[w];let S=true;for(const C of T){if(this.windowApi.window.getComputedStyle(C).display==="none")S=false;else {let U=C.getBoundingClientRect();if(A){let L=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,_=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;S=!(U.right<0||U.left>L||U.bottom<0||U.top>_);}else S=!!C.getClientRects().length;}if(!S)break}return S}isWebView_Via(){let w=true,A=this;if(typeof this.windowApi.top.window.via=="object"){for(const T in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,T)){let S=this.windowApi.top.window.via[T];if(typeof S=="function"&&A.isNativeFunc(S))w=true;else {w=false;break}}}else w=false;return w}isWebView_X(){let w=true,A=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const T in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,T)){let S=this.windowApi.top.window.mbrowser[T];if(typeof S=="function"&&A.isNativeFunc(S))w=true;else {w=false;break}}}else w=false;return w}parseObjectToArray(w){if(typeof w!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let A=[];return Object.keys(w).forEach(function(T){A=A.concat(w[T]);}),A}mergeArrayToString(w,A){if(!(w instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let T="";return typeof A=="function"?w.forEach(S=>{T+=A(S);}):typeof A=="string"?w.forEach(S=>{T+=S[A];}):w.forEach(S=>{Object.values(S).filter(C=>typeof C=="string").forEach(C=>{T+=C;});}),T}mutationObserver(w,A){let T=this,S={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:false};A=T.assign(S,A);let C=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,k=new C(function(U,L){typeof A.callback=="function"&&A.callback(U,L);});return Array.isArray(w)||w instanceof NodeList?w.forEach(U=>{k.observe(U,A.config);}):T.isJQuery(w)?w.each((U,L)=>{k.observe(L,A.config);}):k.observe(w,A.config),A.immediate&&typeof A.callback=="function"&&A.callback([],k),k}mutationVisible(w,A,T){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(w==null)throw new TypeError("mutatuinVisible target is null");let S={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};S=this.assign(S,T||{});let C=new IntersectionObserver((k,U)=>{k[0].isIntersecting&&typeof A=="function"&&A(k,U);},S);Array.isArray(w)?w.forEach(k=>{C.observe(k);}):C.observe(w);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=utils$1,utils$1}noConflictFunc(w,A,T=[],S=true){let C=this;if(typeof w!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof A!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(T))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");let k="__"+A;function U(){typeof C.windowApi.window[k]<"u"||(C.windowApi.window[k]=C.deepClone(w),Object.values(w).forEach(I=>{typeof I=="function"&&(w[I.name]=()=>{});}));}function L(){Array.from(T).forEach(I=>{Object.values(w).forEach(P=>{typeof P=="function"&&(typeof C.windowApi.window[k]>"u"&&(C.windowApi.window[k]={}),I===P.name&&(C.windowApi.window[k][P.name]=w[P.name],w[P.name]=()=>{}));});});}function _(){typeof C.windowApi.window[k]>"u"||(Object.assign(w,C.windowApi.window[k]),Reflect.deleteProperty(C.windowApi.window,"needReleaseKey"));}function $(){typeof C.windowApi.window[k]>"u"||Array.from(T).forEach(I=>{C.windowApi.window[k][I]&&(w[I]=C.windowApi.window[k][I],Reflect.deleteProperty(C.windowApi.window[k],I),Object.keys(C.windowApi.window[k]).length===0&&Reflect.deleteProperty(window,k));});}S?T.length===0?U():L():T.length===0?_():$();}parseBase64ToBlob(w){if(typeof w!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");let A=w.split(","),T=A[0].match(/:(.*?);/)[1],S=atob(A[1]),C=S.length,k=new Uint8Array(C);for(;C--;)k[C]=S.charCodeAt(C);return new Blob([k],{type:T})}parseBase64ToFile(w,A="example"){if(typeof w!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof A!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");let T=w.split(","),S=T[0].match(/:(.*?);/)[1],C=atob(T[1]),k=C.length,U=new Uint8Array(k);for(;k--;)U[k]=C.charCodeAt(k);return new File([U],A,{type:S})}parseInt(w=[],A=0){if(w==null)return parseInt(A.toString());let T=parseInt(w[w.length-1]);return isNaN(T)&&(T=parseInt(A.toString())),T}async parseBlobToFile(w,A="example"){return new Promise((T,S)=>{fetch(w).then(C=>C.blob()).then(C=>{const k=new File([C],A,{type:C.type});T(k);}).catch(C=>{console.error("Error:",C),S(C);});})}parseCDATA(w=""){let A="",S=/<\!\[CDATA\[([\s\S]*)\]\]>/.exec(w.trim());return S&&S.length>1&&(A=S[S.length-1]),A}async parseFileToBase64(w){let A=new FileReader;return A.readAsDataURL(w),new Promise(T=>{A.onload=function(S){T(S.target.result);};})}parseFromString(w,A="text/html"){return new DOMParser().parseFromString(w,A)}parseStringToRegExpString(w){if(typeof w!="string")throw new TypeError("string必须是字符串");return w.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}preventEvent(w,A=[],T){function S(C){return C==null||C.preventDefault(),C==null||C.stopPropagation(),C==null||C.stopImmediatePropagation(),false}if(arguments.length===1)return S(arguments[0]);typeof A=="string"&&(A=[A]),A.forEach(C=>{w.addEventListener(C,S,{capture:!!T});});}registerTrustClickEvent(w=true,A){function T(C){return new Proxy(C,{get:function(k,U){return U==="isTrusted"?w:Reflect.get(k,U)}})}A==null&&(A=function(C){return C==="click"});const S=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...C){let k=C[0],U=C[1];if(C[2],A(k)){if(typeof U=="function")C[1]=function(L){U.call(this,T(L));};else if(typeof U=="object"&&"handleEvent"in U){let L=U.handleEvent;C[1].handleEvent=function(_){if(_!=null)try{_ instanceof Proxy,L.call(this,T(_));}catch{_.isTrusted=w;}};}}return S.apply(this,C)};}reverseNumber(w){let A=0,T=false;for(w<0&&(T=true,w=Math.abs(w));w>0;)A=A*10+w%10,w=Math.floor(w/10);return T?-A:A}selectElementText(w,A,T,S){let C=this.windowApi.document.createRange();if(C.selectNodeContents(w),A){if(A.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");T!=null&&S!=null&&(C.setStart(A,T),C.setEnd(A,S));}let k=this.windowApi.globalThis.getSelection();k&&(k.removeAllRanges(),k.addRange(C));}setClip(w,A={type:"text",mimetype:"text/plain"}){var k,U,L;typeof w=="object"?w instanceof Element?w=w.outerHTML:w=JSON.stringify(w):typeof w!="string"&&(w=w.toString());let T=typeof A=="object"?A.type:A;T.includes("html")?T="text/html":T="text/plain";let S=this;class C{constructor($,I,P){yt(this,k);yt(this,U);yt(this,L);gt(this,k,$),gt(this,U,I),gt(this,L,P);}async init(){let $=false;if(await this.requestClipboardPermission(),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{$=await this.copyDataByClipboard();}catch(I){console.error("复制失败，使用第二种方式，error👉",I),$=this.copyTextByTextArea();}else $=this.copyTextByTextArea();H(this,k).call(this,$),this.destroy();}destroy(){gt(this,k,null),gt(this,U,null),gt(this,L,null);}isText(){return H(this,L).includes("text")}hasClipboard(){return (navigator==null?void 0:navigator.clipboard)!=null}hasClipboardWrite(){var $;return (($=navigator==null?void 0:navigator.clipboard)==null?void 0:$.write)!=null}hasClipboardWriteText(){var $;return (($=navigator==null?void 0:navigator.clipboard)==null?void 0:$.writeText)!=null}copyTextByTextArea(){try{let $=S.windowApi.document.createElement("textarea");return $.value=H(this,U),$.setAttribute("type","text"),$.setAttribute("style","opacity:0;position:absolute;"),$.setAttribute("readonly","readonly"),S.windowApi.document.body.appendChild($),$.select(),S.windowApi.document.execCommand("copy"),S.windowApi.document.body.removeChild($),!0}catch($){return console.error("复制失败，error👉",$),false}}requestClipboardPermission(){return new Promise(($,I)=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(P=>{$(true);}).catch(P=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",P.message??P.name??P.stack]),$(false);}):$(false);})}copyDataByClipboard(){return new Promise(($,I)=>{if(this.isText())navigator.clipboard.writeText(H(this,U)).then(()=>{$(true);}).catch(P=>{I(P);});else {let P=new Blob([H(this,U)],{type:H(this,L)});navigator.clipboard.write([new ClipboardItem({[H(this,L)]:P})]).then(()=>{$(true);}).catch(R=>{I(R);});}})}}return k=new WeakMap,U=new WeakMap,L=new WeakMap,new Promise(_=>{const $=new C(_,w,T);S.windowApi.document.hasFocus()?$.init():S.windowApi.window.addEventListener("focus",()=>{$.init();},{once:true});})}setTimeout(w,A=0){let T=this;if(typeof w!="function"&&typeof w!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof A!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(S=>{setTimeout(()=>{S(T.tryCatch().run(w));},A);})}sleep(w=0){if(typeof w!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(A=>{setTimeout(()=>{A(void 0);},w);})}dragSlider(w,A=this.windowApi.window.innerWidth){let T=this;function S(I,P,R){let G=typeof unsafeWindow>"u"?globalThis:unsafeWindow,D=T.windowApi.document.createEvent("MouseEvents");return D.initMouseEvent(I,true,true,G,0,P,R,P,R,false,false,false,false,0,null),D}let C=typeof w=="string"?this.windowApi.document.querySelector(w):w;if(!(C instanceof Node)||!(C instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");let k=C.getBoundingClientRect(),U=k.x||k.left,L=k.y||k.top,_=U+A,$=L;C.dispatchEvent(S("mousedown",U,L)),C.dispatchEvent(S("mousemove",_,$)),C.dispatchEvent(S("mouseleave",_,$)),C.dispatchEvent(S("mouseout",_,$));}enterFullScreen(w=this.windowApi.document.documentElement,A){try{if(w.requestFullscreen)w.requestFullscreen(A);else if(w.webkitRequestFullScreen)w.webkitRequestFullScreen();else if(w.mozRequestFullScreen)w.mozRequestFullScreen();else if(w.msRequestFullscreen)w.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(T){console.error(T);}}exitFullScreen(w=this.windowApi.document.documentElement){return this.windowApi.document.exitFullscreen?this.windowApi.document.exitFullscreen():this.windowApi.document.msExitFullscreen?this.windowApi.document.msExitFullscreen():this.windowApi.document.mozCancelFullScreen?this.windowApi.document.mozCancelFullScreen():this.windowApi.document.webkitCancelFullScreen?this.windowApi.document.webkitCancelFullScreen():new Promise((A,T)=>{T(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(w,A,T=true){let S=this;if(typeof A!="function"&&typeof A!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof T!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");let C=function($){return typeof A=="string"?$[A]:A($)},k=function($,I){let P=C(I),R=C($);return T?R>P?-1:R<P?1:0:R<P?-1:R>P?1:0},U=function($,I){let P=$.length;for(let R=0;R<P-1;R++)for(let G=0;G<P-1-R;G++){let D=$[G],N=$[G+1],F=C(D),q=C(N);if(T==true&&F<q||T==false&&F>q){let Y=D.nextElementSibling;N.after(D),Y==null?Y.parentNode.appendChild(N):Y.before(N),$=I();}}},L=w,_=null;if(w instanceof Function&&(_=w,w=w()),Array.isArray(w))w.sort(k);else if(w instanceof NodeList||S.isJQuery(w))U(w,_),L=_();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return L}stringToRegular(w,A="ig"){let T;if(A=A.toLowerCase(),typeof w=="string")T=new RegExp(w.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),A);else if(w instanceof RegExp)T=w;else throw new Error("Utils.stringToRegular 参数targetString必须是string|Regexp类型");return T}stringTitleToUpperCase(w,A=false){let T=w.slice(0,1).toUpperCase();return A?T=T+w.slice(1).toLowerCase():T=T+w.slice(1),T}startsWith(w,A,T=0){let S=this;if(T>w.length)return  false;T!==0&&(w=w.slice(T,w.length));let C=A;if(typeof A=="string")C=new RegExp(`^${A}`);else if(Array.isArray(A)){let k=false;for(const U of A)if(!S.startsWith(w,U,T)){k=true;break}return k}return !!w.match(C)}stringTitleToLowerCase(w,A=false){let T=w.slice(0,1).toLowerCase();return A?T=T+w.slice(1).toUpperCase():T=T+w.slice(1),T}toJSON(w,A){let T=this,S={};return typeof w=="object"?w:(T.tryCatch().config({log:false}).error(C=>{T.tryCatch().error(()=>{try{S=T.windowApi.window.eval("("+w+")");}catch(k){typeof A=="function"&&A(k);}}).run(()=>{w&&/^[\],:{}\s]*$/.test(w.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?S=new Function("return "+w)():typeof A=="function"&&A(new Error("target is not a JSON"));});}).run(()=>{w=w.trim(),S=JSON.parse(w);}),S)}toSearchParamsStr(w,A){let T=this,S="";return Array.isArray(w)?w.forEach(C=>{S===""?S+=T.toSearchParamsStr(C):S+="&"+T.toSearchParamsStr(C);}):S=new URLSearchParams(Object.entries(w)).toString(),A&&!S.startsWith("?")&&(S="?"+S),S}searchParamStrToObj(w){return typeof w!="string"?{}:Object.fromEntries(new URLSearchParams(w))}uniqueArray(w=[],A,T=(S,C)=>S===C){if(typeof A=="function"){const S=A,C=new Set,k=[];for(const U of w){const L=S(U);C.has(L)||(C.add(L),k.push(U));}return k}else return Array.from(w).filter(S=>!Array.from(A).some(function(C){return T(S,C)}))}waitArrayLoopToEnd(w,A){let T=this;if(typeof A!="function"&&typeof A!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(w).map(async(S,C)=>{await T.tryCatch(C,S).run(A);}))}wait(w,A,T){const S=this;let C=typeof A=="number"?A:0;return new Promise(k=>{let U=S.mutationObserver(T||S.windowApi.document,{config:{subtree:true,childList:true,attributes:true},immediate:true,callback(L,_){let $=w();$.success&&(typeof(_==null?void 0:_.disconnect)=="function"&&_.disconnect(),k($.data));}});C>0&&setTimeout(()=>{typeof(U==null?void 0:U.disconnect)=="function"&&U.disconnect(),k(null);},C);})}waitNode(...w){w=w.filter(U=>U!==void 0);let A=this,T=w[0],S=A.windowApi.document,C=0;if(typeof w[0]!="string"&&!Array.isArray(w[0])&&typeof w[0]!="function")throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");if(w.length!==1)if(w.length===2){let U=w[1];if(typeof U=="number")C=U;else if(typeof U=="object"&&U instanceof Node)S=U;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(w.length===3){let U=w[1],L=w[2];if(typeof U=="object"&&U instanceof Node)if(S=U,typeof L=="number")C=L;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");function k(){if(Array.isArray(T)){let U=[];for(let L=0;L<T.length;L++){let _=S.querySelector(T[L]);_&&U.push(_);}if(U.length===T.length)return U}else return typeof T=="function"?T():S.querySelector(T)}return A.wait(()=>{let U=k();return U?{success:true,data:U}:{success:false,data:U}},C,S)}waitAnyNode(...w){w=w.filter(U=>U!==void 0);let A=this,T=w[0],S=A.windowApi.document,C=0;if(typeof w[0]!="object"&&!Array.isArray(w[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(w.length!==1)if(w.length===2){let U=w[1];if(typeof U=="number")C=U;else if(typeof U=="object"&&U instanceof Node)S=U;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(w.length===3){let U=w[1],L=w[2];if(typeof U=="object"&&U instanceof Node)if(S=U,typeof L=="number")C=L;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");let k=T.map(U=>A.waitNode(U,S,C));return Promise.any(k)}waitNodeList(...w){w=w.filter(U=>U!==void 0);let A=this,T=w[0],S=A.windowApi.document,C=0;if(typeof w[0]!="string"&&!Array.isArray(w[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(w.length!==1)if(w.length===2){let U=w[1];if(typeof U=="number")C=U;else if(typeof U=="object"&&U instanceof Node)S=U;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(w.length===3){let U=w[1],L=w[2];if(typeof U=="object"&&U instanceof Node)if(S=U,typeof L=="number")C=L;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");function k(){if(Array.isArray(T)){let U=[];for(let L=0;L<T.length;L++){let _=S.querySelectorAll(T[L]);_.length&&U.push(_);}if(U.length===T.length)return U}else {let U=S.querySelectorAll(T);if(U.length)return U}}return A.wait(()=>{let U=k();return U?{success:true,data:U}:{success:false,data:U}},C,S)}waitAnyNodeList(...w){w=w.filter(U=>U!==void 0);let A=this,T=w[0],S=A.windowApi.document,C=0;if(!Array.isArray(w[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(w.length!==1)if(w.length===2){let U=w[1];if(typeof U=="number")C=U;else if(typeof U=="object"&&U instanceof Node)S=U;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(w.length===3){let U=w[1],L=w[2];if(typeof U=="object"&&U instanceof Node)if(S=U,typeof L=="number")C=L;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");let k=T.map(U=>A.waitNodeList(U,S,C));return Promise.any(k)}waitProperty(w,A){return new Promise(T=>{let S=w;typeof w=="function"&&(S=w()),Reflect.has(S,A)?T(S[A]):Object.defineProperty(S,A,{set:function(C){try{T(C);}catch(k){console.error("Error setting property:",k);}}});})}waitPropertyByInterval(w,A,T=250,S=-1){if(w==null)throw new TypeError("checkObj 不能为空对象 ");let C=false;return new Promise((k,U)=>{let L=setInterval(()=>{let _=w;typeof w=="function"&&(_=w()),typeof _=="object"&&_!=null&&(typeof A=="function"&&A(_)||Reflect.has(_,A))&&(C=true,clearInterval(L),k(_[A]));},T);S!==-1&&setTimeout(()=>{C||(clearInterval(L),U());},S);})}async waitVueByInterval(w,A,T=250,S=-1,C="__vue__"){if(w==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let k=false,U=this;try{await U.waitPropertyByInterval(w,function(L){if(L==null||!(C in L))return !1;if(A==null)return !0;let _=L[C];if(typeof A=="string"){if(A in _)return k=!0,!0}else if(A(_))return k=!0,!0;return !1},T,S);}catch{return k}return k}watchObject(w,A,T,S){typeof T!="function"&&typeof S!="function"||(typeof T=="function"?Object.defineProperty(w,A,{get(){return typeof T=="function"?T(w[A]):w[A]}}):typeof S=="function"?Object.defineProperty(w,A,{set(C){typeof S=="function"&&S(C);}}):Object.defineProperty(w,A,{get(){return typeof T=="function"?T(w[A]):w[A]},set(C){typeof S=="function"&&S(C);}}));}queryProperty(w,A){if(w==null)return;let T=A(w);return T&&typeof T.isFind=="boolean"&&T.isFind?T.data:this.queryProperty(T.data,A)}createUtils(w){return new Utils(w)}toFormData(w,A=false,T=false){const S=new FormData;return Object.keys(w).forEach(C=>{let k=w[C];T&&(k=JSON.stringify(k)),typeof k=="number"&&(k=k.toString()),A&&typeof k=="string"&&(k=encodeURIComponent(k)),k instanceof File?S.append(C,k,k.name):S.append(C,k);}),S}toUrl(w){if(typeof w!="string")throw new TypeError("toUrl: text must be string");if(w=w.trim(),w==="")throw new TypeError("toUrl: text must not be empty");return w.startsWith("//")?w=this.windowApi.globalThis.location.protocol+w:w.startsWith("/")&&(w=this.windowApi.globalThis.location.origin+w),new URL(w)}coverObjectFunctionThis(w,A){if(typeof w!="object"||w===null)throw new Error("target must be object");A=A||w,Object.keys(w).forEach(T=>{typeof w[T]=="function"&&(w[T]=w[T].bind(A));});}}let utils$1=new Utils;const SymbolEvents=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),PopsCoreEnv={document,window,globalThis,self},PopsCore={get document(){return PopsCoreEnv.document},get window(){return PopsCoreEnv.window},get globalThis(){return PopsCoreEnv.globalThis},get self(){return PopsCoreEnv.self}},OriginPrototype={Object:{defineProperty:Object.defineProperty}};let t$1=class{constructor(){this.__map={};}beforeEach(w){this.__interceptor=w;}on(w,A){const T=Array.isArray(w)?w:[w];for(const S of T){this.__map[S]=this.__map[S]||[];const C=this.__map[S];C&&C.push(A);}return this}emit(w,A,T){this.__interceptor!==void 0?this.__interceptor(w,()=>{this.__emit(w,A),T&&T();}):(this.__emit(w,A),T&&T());}__emit(w,A){const T=this.__map[w];if(Array.isArray(T)&&(T!=null&&T.length))for(const S of T)S(A,w);this.event=A;}off(w,A){const T=this.__map[w];if(T!==void 0)if(A===void 0)delete this.__map[w];else {const S=T.findIndex(C=>C===A);T.splice(S,1);}}destroy(){this.__map={};}};const n$1="clientX",e$2="clientY",t=16,c$3="start",o$1="move",s$1="cancel",u$3="end",a$2="left",i$3="right",r$4="up",d$1="down",m$2={4:"start",5:"move",1:"end",3:"cancel"};function v$1(E){return m$2[E]}function b(E,w,A){const T={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(E)][w];return T!==void 0&&T[A]||0}function g$1(E){[1,3,2].includes(E.state)&&(E.state=0);}function h$3(E){return [5,1,3].includes(E)}function j(E){if(E.disabled)return E.state=0,true}function O(E,w){return Object.assign(Object.assign(Object.assign({},E),w),{state:0,disabled:false})}function p$3(E){return Math.round(100*E)/100}function r$3(){let E,w,A,T,S=0;return function(C){if(E=w,C!==void 0){S=Number.MAX_SAFE_INTEGER>S?++S:1;const k=function(_,$){const{phase:I,points:P,changedPoints:R,nativeEvent:G}=_,D=P.length,N=c$3===I,F=u$3===I&&D===0||s$1===I,q=Date.now(),{x:Y,y:tt}=c$2(P)||c$2(R),{currentTarget:nt}=G;return Object.assign(_,{id:$,x:Y,y:tt,timestamp:q,isStart:N,isEnd:F,pointLength:D,currentTarget:nt,getOffset(W=nt){const X=W.getBoundingClientRect();return {x:Y-Math.round(X.left),y:tt-Math.round(X.top)}}})}(C,S);w=k;const{isStart:U,pointLength:L}=k;return U&&(A=k,E=void 0,T=1<L?k:void 0),Object.assign(Object.assign({},k),{prevInput:E,startMultiInput:T,startInput:A})}}}function c$2(E){const{length:w}=E;if(0<w){if(w===1){const{clientX:T,clientY:S}=E[0];return {x:Math.round(T),y:Math.round(S)}}const A=E.reduce((T,S)=>(T.x+=S[n$1],T.y+=S[e$2],T),{x:0,y:0});return {x:Math.round(A.x/w),y:Math.round(A.y/w)}}}function a$1(E,w,A,T){const S={};for(const k in A)["target","currentTarget","type"].includes(k)||(S[k]=A[k]);let C;return document.createEvent?(C=document.createEvent("HTMLEvents"),C.initEvent(E,T==null?void 0:T.bubbles,T==null?void 0:T.cancelable)):C=new Event(E,T),Object.assign(C,S,{match:()=>A.targets&&0<A.targets.length&&A.targets.every(k=>C.currentTarget.contains(k))}),w.dispatchEvent(C)}function u$2(E,w){const{preventDefault:A}=w;return T=A,Object.prototype.toString.call(T)==="[object Function]"?A(E):!!A;var T;}const h$2=["touchstart","touchmove","touchend","touchcancel","mousedown"],p$2=["mousemove","mouseup"],g={domEvents:{bubbles:true,cancelable:true},preventDefault:E=>{if(E.target&&"tagName"in E.target){const{tagName:w}=E.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(w)}return  false}};let l$1=class extends t$1{constructor(w,A){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=w,this.c={},this.__options=Object.assign(Object.assign({},g),A);const T=function(C){const k=r$3();return function(U){const L=[],_=[];Array.from(U.touches).forEach(({clientX:I,clientY:P,target:R})=>{C!=null&&C.contains(R)&&(L.push(R),_.push({clientX:I,clientY:P,target:R}));});const $=Array.from(U.changedTouches).map(({clientX:I,clientY:P,target:R})=>({clientX:I,clientY:P,target:R}));return k({phase:U.type.replace("touch",""),changedPoints:$,points:_,nativeEvent:U,target:U.target,targets:L})}}(this.el),S=function(){let C,k=false,U=null;const L=r$3();return function(_){const{clientX:$,clientY:I,type:P,button:R,target:G}=_;let D,N=[{clientX:$,clientY:I,target:G}];if(P==="mousedown"&&R===0)U=G,k=true,D="start";else {if(!k)return;P==="mousemove"?D="move":P==="mouseup"&&(N=[],D="end",k=false);}const F=C||[{clientX:$,clientY:I,target:G}];if(C=[{clientX:$,clientY:I,target:G}],D!==void 0)return L({phase:D,changedPoints:F,points:N,target:U,targets:[U],nativeEvent:_})}}();if(this.__inputCreatorMap={touchstart:T,touchmove:T,touchend:T,touchcancel:T,mousedown:S,mousemove:S,mouseup:S},this.on("at:after",C=>{const{target:k,__type:U}=C,{domEvents:L}=this.__options;L&&this.el!==void 0&&k&&(a$1(U,k,C,L),a$1("at:after",k,C,L));}),w!==void 0){w.style.webkitTapHighlightColor="rgba(0,0,0,0)";let C=false;try{const k={};Object.defineProperty(k,"passive",{get(){C=!0;}}),window.addEventListener("_",()=>{},k);}catch{}this.on("u",function(k,U,L){return h$2.forEach(_=>{k.addEventListener(_,U,L);}),p$2.forEach(_=>{window.addEventListener(_,U,L);}),()=>{h$2.forEach(_=>{k.removeEventListener(_,U);}),p$2.forEach(_=>{window.removeEventListener(_,U);});}}(w,this.catchEvent.bind(this),this.__options.preventDefault===false&&C?{passive:true}:{passive:false}));}}use(w,A){this.__pluginContexts.push(w(this,A));}catchEvent(w){const A=this.__inputCreatorMap[w.type](w);if(A!==void 0){const T=()=>w.stopPropagation(),S=()=>w.stopImmediatePropagation(),C=()=>w.preventDefault();if(u$2(w,this.__options))C();else if(w.type==="touchstart"?this.__isIgnoreMouse=true:w.type==="touchmove"&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&w.type.startsWith("mouse"))return void(w.type==="mouseup"&&(this.__isIgnoreMouse=false));this.emit("input",A),this.emit2(`at:${A.phase}`,A,{});const k={};this.__computeFunctionList.forEach(U=>{const L=U(A,k);if(L!==void 0)for(const _ in L)k[_]=L[_];}),this.emit("computed",Object.assign(Object.assign(Object.assign({},A),k),{stopPropagation:T,stopImmediatePropagation:S,preventDefault:C}));}}compute(w,A){for(const T of w)this.__computeFunctionCreatorList.includes(T)||(this.__computeFunctionCreatorList.push(T),this.__computeFunctionList.push(T()));this.on("computed",A);}beforeEach(w){super.beforeEach((A,T)=>{var S;!((S=this.c)===null||S===void 0)&&S.name?w(A,T):T();});}get(w){return this.__pluginContexts.find(A=>w===A.name)}set(w){this.__options=Object.assign(Object.assign({},this.__options),w);}emit2(w,A,T){this.c=T,this.emit(w,Object.assign(Object.assign({},A),{type:w}),()=>{this.emit("at:after",Object.assign(Object.assign({},A),{name:w,__type:w}));});}destroy(){this.emit("u"),super.destroy();}};var x=E=>Math.sqrt(E.x*E.x+E.y*E.y),y=(E,w)=>E.x*w.x+E.y*w.y,e$1=(E,w)=>{var A=x(E)*x(w);if(A===0)return 0;var T=y(E,w)/A;return T>1&&(T=1),Math.acos(T)},n=(E,w)=>E.x*w.y-w.x*E.y,o=E=>E/Math.PI*180,s=(E,w)=>{var A=e$1(E,w);return n(E,w)>0&&(A*=-1),o(A)},u$1=(E,w)=>{if(E!==0||w!==0)return Math.abs(E)>=Math.abs(w)?0<E?i$3:a$2:0<w?d$1:r$4};function p$1(){let E=0,w=0;return function(A,T){const{prevVecotr:S,startVecotr:C,activeVecotr:k}=T;return k&&(w=Math.round(s(k,S)),E=Math.round(s(k,C))),{angle:E,deltaAngle:w}}}function d(){return function(E){const{prevInput:w}=E;let A=0,T=0,S=0;if(w!==void 0&&(A=E.x-w.x,T=E.y-w.y,A!==0||T!==0)){const C=Math.sqrt(Math.pow(A,2)+Math.pow(T,2));S=Math.round(o(Math.acos(Math.abs(A)/C)));}return {deltaX:A,deltaY:T,deltaXYAngle:S}}}function h$1(){let E,w=0,A=0,T=0,S=0,C=0;return function(k){const{phase:U,startInput:L}=k;return c$3===U?(w=0,A=0,T=0,S=0,C=0):o$1===U&&(w=Math.round(k.points[0][n$1]-L.points[0][n$1]),A=Math.round(k.points[0][e$2]-L.points[0][e$2]),T=Math.abs(w),S=Math.abs(A),C=Math.round(x({x:T,y:S})),E=u$1(w,A)),{displacementX:w,displacementY:A,distanceX:T,distanceY:S,distance:C,overallDirection:E}}}function l(){let E=1;return function(w,A){let T=1;const{prevVecotr:S,startVecotr:C,activeVecotr:k}=A;return k&&(T=p$3(x(k)/x(S)),E=p$3(x(k)/x(C))),{scale:E,deltaScale:T}}}function f(){let E,w,A=0,T=0,S=0,C=0;return function(k){if(k!==void 0){w=w||k.startInput;const U=k.timestamp-w.timestamp;if(t<U){const L=k.x-w.x,_=k.y-w.y;S=Math.round(L/U*100)/100,C=Math.round(_/U*100)/100,A=Math.abs(S),T=Math.abs(C),E=u$1(L,_),w=k;}}return {velocityX:A,velocityY:T,speedX:S,speedY:C,direction:E}}}function M(){let E=0;return function(w){const{phase:A}=w;return c$3===A&&(E=w.pointLength),{maxPointLength:E}}}function v(E){return {x:E.points[1][n$1]-E.points[0][n$1],y:E.points[1][e$2]-E.points[0][e$2]}}function m$1(){let E,w,A;return function(T){const{prevInput:S,startMultiInput:C}=T;return C!==void 0&&S!==void 0&&T.id!==C.id&&1<S.pointLength&&1<T.pointLength?(E=v(C),w=v(S),A=v(T)):A=void 0,{startVecotr:E,prevVecotr:w,activeVecotr:A}}}const m={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function r$2(E,w){const A=O(m,w);let T,S,C,k=0;function U(){k=0,T=void 0,S=void 0;}return E.compute([h$1,M],L=>{if(j(A))return;const{phase:_,x:$,y:I}=L;u$3===_&&(A.state=0,function(){const{startInput:P,pointLength:R,timestamp:G}=L,D=G-P.timestamp,{distance:N,maxPointLength:F}=L;return F===A.pointLength&&R===0&&A.maxDistance>=N&&A.maxPressTime>D}()?(clearTimeout(C),function(P,R){if(T!==void 0){const G=x({x:P.x-T.x,y:P.y-T.y});return T=P,R.maxDistanceFromPrevTap>=G}return T=P,true}({x:$,y:I},A)&&function(P){const R=performance.now();if(S===void 0)return S=R,true;{const G=R-S;return S=R,G<P}}(A.waitNextTapTime)?k++:k=1,k%A.tapTimes==0?(A.state=1,E.emit2(A.name,L,A),U()):C=setTimeout(()=>{A.state=2,U();},A.waitNextTapTime)):(U(),A.state=2));}),A}const p={name:"pan",threshold:10,pointLength:1};function u(E,w){const A=O(p,w);return E.compute([f,h$1,d],T=>{if(g$1(A),j(A))return;const S=function(){const{pointLength:C,distance:k}=T;return A.pointLength===C&&A.threshold<=k}();if(A.state=b(S,A.state,T.phase),S||h$3(A.state)){const{name:C}=A;E.emit2(C,T,A),E.emit2(C+v$1(A.state),T,A),![u$3,s$1].includes(T.phase)&&T.direction&&E.emit2(C+T.direction,T,A);}}),A}const c$1={name:"swipe",threshold:10,velocity:.3,pointLength:1};function a(E,w){const A=O(c$1,w);return E.compute([h$1,f,M],T=>{if(A.state=0,!A.disabled&&function(){if(u$3!==T.phase)return  false;const{velocityX:S,velocityY:C,distance:k,maxPointLength:U}=T;return U===A.pointLength&&T.points.length===0&&A.threshold<k&&A.velocity<Math.max(S,C)}()){const{name:S}=A;A.state=1,E.emit2(S,T,A),E.emit2(S+T.direction,T,A);}}),A}const r$1={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function c(E,w){const A=O(r$1,w);let T=0;return E.compute([h$1],S=>{if(j(A))return;const{phase:C,startInput:k,pointLength:U}=S;if(c$3===C&&A.pointLength===U)g$1(A),clearTimeout(T),T=setTimeout(()=>{A.state=1,E.emit2(A.name,S,A);},A.minPressTime);else if(u$3===C&&A.state===1)E.emit2(`${A.name}${r$4}`,S,A);else if(A.state!==1){const L=S.timestamp-k.timestamp;(!function(){const{distance:_}=S;return _&&A.maxDistance>_}()||A.minPressTime>L&&[u$3,s$1].includes(C))&&(clearTimeout(T),A.state=2);}}),A}const i$2={name:"pinch",threshold:0,pointLength:2};function r(E,w){const A=O(i$2,w);return E.compute([m$1,l],T=>{if(g$1(A),j(A))return;const S=function(){const{pointLength:U,scale:L,deltaScale:_,phase:$}=T;return A.pointLength===U&&A.threshold<Math.abs(L-1)}();A.state=b(S,A.state,T.phase);const{name:C}=A;if(S||h$3(A.state)){E.emit2(C,T,A);const{deltaScale:U}=T;U!==1&&E.emit2(C+(1<U?"in":"out"),T,A);}const k=v$1(A.state);k&&E.emit2(C+k,T,A);}),A}const h={name:"rotate",threshold:0,pointLength:2};function i$1(E,w){const A=O(h,w);return E.compute([m$1,p$1],T=>{if(j(A))return;g$1(A);const S=function(){const{pointLength:U,angle:L}=T;return A.pointLength===U&&A.threshold<Math.abs(L)}();A.state=b(S,A.state,T.phase);const{name:C}=A;(S||h$3(A.state))&&E.emit2(C,T,A);const k=v$1(A.state);k&&E.emit2(C+k,T,A);}),A}function e(E){E.use(r$2,{name:"doubletap",tapTimes:2});const w=E.get("doubletap");let A;return E.beforeEach((T,S)=>{T==="tap"?(clearTimeout(A),A=setTimeout(()=>{[0,2].includes(w.state)&&S();},300)):S();}),w}class i extends l$1{constructor(w,A){super(w,A),this.use(r$2),this.use(u),this.use(a),this.use(c),this.use(r),this.use(i$1);}}i.STATE_POSSIBLE=0,i.STATE_START=4,i.STATE_MOVE=5,i.STATE_END=1,i.STATE_CANCELLED=3,i.STATE_FAILED=2,i.STATE_RECOGNIZED=1,i.tap=r$2,i.pan=u,i.swipe=a,i.press=c,i.rotate=i$1,i.pinch=r,i.doubletap=e;class PopsUtils{constructor(){et(this,"AnyTouch",()=>i);}isWin(w){var A;return typeof w!="object"||w instanceof Node?false:w===globalThis||w===window||w===self||w===PopsCore.globalThis||w===PopsCore.window||w===PopsCore.self||typeof unsafeWindow<"u"&&w===unsafeWindow?true:((A=w==null?void 0:w.Math)==null?void 0:A.toString())==="[object Math]"}isDOM(w){return w instanceof Node}delete(w,A){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(w,A):delete w[A];}assign(w={},A={},T=false){let S=this;if(A==null)return w;if(w==null&&(w={}),Array.isArray(A)&&!A.filter(k=>typeof k=="object").length)return A;if(T)for(const C in A){let U=w[C],L=A[C];if(typeof L=="object"&&L!=null&&C in w&&!S.isDOM(L)){w[C]=S.assign(U,L,T);continue}w[C]=L;}else for(const C in w)if(C in A){let k=w[C],U=A[C];if(typeof U=="object"&&U!=null&&!S.isDOM(U)&&Object.keys(U).length){w[C]=S.assign(k,U,T);continue}w[C]=U;}return w}getRandomGUID(){var w,A;return typeof((A=(w=PopsCore.globalThis)==null?void 0:w.crypto)==null?void 0:A.randomUUID)=="function"?PopsCore.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(T){var S=Math.random()*16|0,C=T==="x"?S:S&3|8;return C.toString(16)})}parseTextToDOM(w){return w=w.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),popsDOMUtils.createElement("div",{innerHTML:w}).firstChild}contains(w,A){if(arguments.length===1)return this.contains(PopsCore.document.body||PopsCore.document.documentElement,arguments[0]);if(A==null)return  false;if(typeof A[Symbol.iterator]=="function"){let T=true;for(const S of A)if(!w.contains(S)){T=false;break}return T}else return w.contains(A)}formatTime(w=new Date,A="yyyy-MM-dd HH:mm:ss"){let T=w==null?new Date:new Date(w);function S(U){return U<10?"0"+U:U}function C(U){return U>12?U-12:U}let k={yyyy:T.getFullYear(),MM:S(T.getMonth()+1),dd:S(T.getDate()),HH:S(T.getHours()),hh:S(C(T.getHours())),mm:S(T.getMinutes()),ss:S(T.getSeconds())};return Object.keys(k).forEach(function(U){let L=new RegExp(U,"g");A=A.replace(L,k[U]);}),A}formatByteToSize(w,A=true){if(w=parseInt(w.toString()),isNaN(w))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let T=0,S="KB",C={};C.B=1,C.KB=1024,C.MB=C.KB*C.KB,C.GB=C.MB*C.KB,C.TB=C.GB*C.KB,C.PB=C.TB*C.KB,C.EB=C.PB*C.KB,C.ZB=C.EB*C.KB,C.YB=C.ZB*C.KB,C.BB=C.YB*C.KB,C.NB=C.BB*C.KB,C.DB=C.NB*C.KB;for(let k in C)if(T=w/C[k],S=k,C.KB>=T)break;return T=T.toFixed(2),T=A?T+S.toString():parseFloat(T.toString()),T}}const popsUtils=new PopsUtils,PopsSafeUtils={getSafeHTML(E){return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:A=>A}).createHTML(E):E},setSafeHTML(E,w){E.innerHTML=this.getSafeHTML(w);}};class PopsDOMUtilsEvent{on(w,A,T,S,C){function k(D,N,F){return typeof D[N]=="boolean"?(F.capture=D[N],typeof D[N+1]=="boolean"&&(F.once=D[N+1]),typeof D[N+2]=="boolean"&&(F.passive=D[N+2])):typeof D[N]=="object"&&("capture"in D[N]||"once"in D[N]||"passive"in D[N])&&(F.capture=D[N].capture,F.once=D[N].once,F.passive=D[N].passive),F}let U=this,L=arguments;if(typeof w=="string"&&(w=PopsCore.document.querySelectorAll(w)),w==null)return;let _=[];w instanceof NodeList||Array.isArray(w)?(w=w,_=[...w]):_.push(w);let $=[];Array.isArray(A)?$=$.concat(A):typeof A=="string"&&($=$.concat(A.split(" ")));let I=T,P=S,R={capture:false,once:false,passive:false};typeof T=="function"?(I=void 0,P=T,R=k(L,3,R)):R=k(L,4,R);function G(){R.once&&U.off(w,A,T,S,C);}_.forEach(D=>{function N(F){let q=F.target;if(I){let Y=popsUtils.isWin(D)?PopsCore.document.documentElement:D;if(q.matches(I))P.call(q,F),G();else if(q.closest(I)&&Y.contains(q.closest(I))){let tt=q.closest(I);OriginPrototype.Object.defineProperty(F,"target",{get(){return tt}}),P.call(tt,F),G();}}else P.call(D,F),G();}$.forEach(F=>{D.addEventListener(F,N,R),P&&P.delegate&&D.setAttribute("data-delegate",I);let q=D[SymbolEvents]||{};q[F]=q[F]||[],q[F].push({selector:I,option:R,callback:N,originCallBack:P}),D[SymbolEvents]=q;});});}off(w,A,T,S,C,k){function U(G,D,N){return typeof G[D]=="boolean"?N.capture=G[D]:typeof G[D]=="object"&&"capture"in G[D]&&(N.capture=G[D].capture),N}let L=arguments;if(typeof w=="string"&&(w=PopsCore.document.querySelectorAll(w)),w==null)return;let _=[];w instanceof NodeList||Array.isArray(w)?(w=w,_=[...w]):_.push(w);let $=[];Array.isArray(A)?$=$.concat(A):typeof A=="string"&&($=$.concat(A.split(" ")));let I=T,P=S,R={capture:false};typeof T=="function"?(I=void 0,P=T,R=U(L,3,R)):R=U(L,4,R),_.forEach(G=>{let D=G[SymbolEvents]||{};$.forEach(N=>{let F=D[N]||[];typeof k=="function"&&(F=F.filter(k));for(let q=0;q<F.length;q++){let Y=F[q],tt=false;(!I||Y.selector===I)&&(tt=true),(!P||Y.callback===P||Y.originCallBack===P)&&(tt=true),tt&&(G.removeEventListener(N,Y.callback,R),F.splice(q--,1));}F.length===0&&popsUtils.delete(D,A);}),G[SymbolEvents]=D;});}offAll(w,A){if(typeof w=="string"&&(w=PopsCore.document.querySelectorAll(w)),w==null)return;let T=[];w instanceof NodeList||Array.isArray(w)?T=[...w]:T.push(w);let S=[];Array.isArray(A)?S=S.concat(A):typeof A=="string"&&(S=S.concat(A.split(" "))),T.forEach(C=>{Object.getOwnPropertySymbols(C).forEach(k=>{if(!k.toString().startsWith("Symbol(events_"))return;let U=C[k]||{};(S.length?S:Object.keys(U)).forEach(_=>{let $=U[_];if($){for(const I of $)C.removeEventListener(_,I.callback,{capture:I.option.capture});popsUtils.delete(C[k],_);}});});});}ready(w){if(typeof w!="function")return;function A(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return  false}}function T(){k(),w();}let S=[{target:PopsCore.document,eventType:"DOMContentLoaded",callback:T},{target:PopsCore.window,eventType:"load",callback:T}];function C(){for(let U=0;U<S.length;U++){let L=S[U];L.target.addEventListener(L.eventType,L.callback);}}function k(){for(let U=0;U<S.length;U++){let L=S[U];L.target.removeEventListener(L.eventType,L.callback);}}A()?setTimeout(w):C();}trigger(w,A,T,S=true){if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w==null)return;let C=[];w instanceof NodeList||Array.isArray(w)?(w=w,C=[...w]):C=[w];let k=[];Array.isArray(A)?k=A:typeof A=="string"&&(k=A.split(" ")),C.forEach(U=>{let L=U[SymbolEvents]||{};k.forEach(_=>{let $=null;T&&T instanceof Event?$=T:($=new Event(_),T&&Object.keys(T).forEach(I=>{$[I]=T[I];})),S==false&&_ in L?L[_].forEach(I=>{I.callback($);}):U.dispatchEvent($);});});}click(w,A,T,S){let C=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(A==null?C.trigger(w,"click",T,S):C.on(w,"click",null,A));}blur(w,A,T,S){let C=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(A===null?C.trigger(w,"blur",T,S):C.on(w,"blur",null,A));}focus(w,A,T,S){let C=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(A==null?C.trigger(w,"focus",T,S):C.on(w,"focus",null,A));}hover(w,A,T){let S=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(S.on(w,"mouseenter",null,A,T),S.on(w,"mouseleave",null,A,T));}keyup(w,A,T){let S=this;w!=null&&(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),S.on(w,"keyup",null,A,T));}keydown(w,A,T){let S=this;w!=null&&(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),S.on(w,"keydown",null,A,T));}keypress(w,A,T){let S=this;w!=null&&(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),S.on(w,"keypress",null,A,T));}preventEvent(w,A=[],T){function S(C){return C==null||C.preventDefault(),C==null||C.stopPropagation(),C==null||C.stopImmediatePropagation(),false}if(arguments.length===1)return S(arguments[0]);typeof A=="string"&&(A=[A]),A.forEach(C=>{w.addEventListener(C,S,{capture:!!T});});}}class PopsDOMUtils extends PopsDOMUtilsEvent{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(w,A=true){let T=w.getBoundingClientRect(),S=w.ownerDocument.defaultView;return new DOMRect(A?parseFloat((T.left+((S==null?void 0:S.pageXOffset)||0)).toString()):T.left,A?parseFloat((T.top+((S==null?void 0:S.pageYOffset)||0)).toString()):T.top,T.width,T.height)}width(w,A=false,T){let S=this;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null){if(popsUtils.isWin(w))return PopsCore.window.document.documentElement.clientWidth;if(w.nodeType===9)return w=w,Math.max(w.body.scrollWidth,w.documentElement.scrollWidth,w.body.offsetWidth,w.documentElement.offsetWidth,w.documentElement.clientWidth);if(A||!A&&popsDOMUtils.isShow(w)){if(w=w,parseFloat(popsDOMUtils.getStyleValue(w,"width").toString())>0)return parseFloat(popsDOMUtils.getStyleValue(w,"width").toString());if(w.offsetWidth>0){let C=popsDOMUtils.getStyleValue(w,"borderLeftWidth"),k=popsDOMUtils.getStyleValue(w,"borderRightWidth"),U=popsDOMUtils.getStyleValue(w,"paddingLeft"),L=popsDOMUtils.getStyleValue(w,"paddingRight"),_=parseFloat(w.offsetWidth.toString())-parseFloat(C.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {w=w;let{cloneNode:C,recovery:k}=popsDOMUtils.showElement(w,T),U=S.width(C,true,T);return k(),U}}}height(w,A=false,T){let S=this;if(popsUtils.isWin(w))return PopsCore.window.document.documentElement.clientHeight;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null){if(w.nodeType===9)return w=w,Math.max(w.body.scrollHeight,w.documentElement.scrollHeight,w.body.offsetHeight,w.documentElement.offsetHeight,w.documentElement.clientHeight);if(A||!A&&popsDOMUtils.isShow(w)){if(w=w,parseFloat(popsDOMUtils.getStyleValue(w,"height").toString())>0)return parseFloat(popsDOMUtils.getStyleValue(w,"height").toString());if(w.offsetHeight>0){let C=popsDOMUtils.getStyleValue(w,"borderTopWidth"),k=popsDOMUtils.getStyleValue(w,"borderBottomWidth"),U=popsDOMUtils.getStyleValue(w,"paddingTop"),L=popsDOMUtils.getStyleValue(w,"paddingBottom"),_=parseFloat(w.offsetHeight.toString())-parseFloat(C.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {w=w;let{cloneNode:C,recovery:k}=popsDOMUtils.showElement(w,T),U=S.height(C,true,T);return k(),U}}}outerWidth(w,A=false,T){let S=this;if(popsUtils.isWin(w))return PopsCore.window.innerWidth;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null)if(w=w,A||!A&&popsDOMUtils.isShow(w)){let C=getComputedStyle(w,null),k=popsDOMUtils.getStyleValue(C,"marginLeft"),U=popsDOMUtils.getStyleValue(C,"marginRight");return w.offsetWidth+k+U}else {let{cloneNode:C,recovery:k}=popsDOMUtils.showElement(w,T),U=S.outerWidth(C,true,T);return k(),U}}outerHeight(w,A=false,T){let S=this;if(popsUtils.isWin(w))return PopsCore.window.innerHeight;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null)if(w=w,A||!A&&popsDOMUtils.isShow(w)){let C=getComputedStyle(w,null),k=popsDOMUtils.getStyleValue(C,"marginTop"),U=popsDOMUtils.getStyleValue(C,"marginBottom");return w.offsetHeight+k+U}else {let{cloneNode:C,recovery:k}=popsDOMUtils.showElement(w,T),U=S.outerHeight(C,true,T);return k(),U}}addClassName(w,A){typeof A=="string"&&A.trim()!==""&&w.classList.add(A);}removeClassName(w,A){typeof A=="string"&&A.trim()!==""&&w.classList.remove(A);}containsClassName(w,A){return typeof A!="string"||A.trim()===""?false:w.classList.contains(A)}css(w,A,T){function S(k,U){let L=["width","height","top","left","right","bottom","font-size"];return typeof U=="number"&&(U=U.toString()),typeof U=="string"&&L.includes(k)&&U.match(/[0-9]$/gi)&&(U=U+"px"),U}if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w==null)return;let C=(k,U)=>{typeof U=="string"&&U.trim().endsWith("!important")?(U=U.trim().replace(/!important$/gi,"").trim(),w.style.setProperty(k,U,"important")):(U=S(k,U),w.style.setProperty(k,U));};if(typeof A=="string"){if(T==null)return getComputedStyle(w).getPropertyValue(A);C(A,T);}else if(typeof A=="object")for(let k in A){let U=A[k];C(k,U);}}createElement(w,A,T){let S=PopsCore.document.createElement(w);return typeof A=="string"?(PopsSafeUtils.setSafeHTML(S,A),S):(A==null&&(A={}),T==null&&(T={}),Object.keys(A).forEach(C=>{let k=A[C];if(C==="innerHTML"){PopsSafeUtils.setSafeHTML(S,k);return}S[C]=k;}),Object.keys(T).forEach(C=>{let k=T[C];typeof k=="object"?k=JSON.stringify(k):typeof k=="function"&&(k=k.toString()),S.setAttribute(C,k);}),S)}getTextBoundingRect(w,A,T,S){if(!w||!("value"in w))return w;if(typeof A=="string"&&(A=parseFloat(A)),(typeof A!="number"||isNaN(A))&&(A=0),A<0?A=0:A=Math.min(w.value.length,A),typeof T=="string"&&(T=parseFloat(T)),(typeof T!="number"||isNaN(T)||T<A)&&(T=A),T<0?T=0:T=Math.min(w.value.length,T),typeof w.createTextRange=="function"){var C=w.createTextRange();return C.collapse(true),C.moveStart("character",A),C.moveEnd("character",T-A),C.getBoundingClientRect()}var k=nt(),U=k.top,L=k.left,_=W("width",true),$=W("height",true),I="white-space:pre;padding:0;margin:0;",P=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];U+=W("padding-top",true),U+=W("border-top-width",true),L+=W("padding-left",true),L+=W("border-left-width",true),L+=1;for(var R=0;R<P.length;R++){var G=P[R];I+=G+":"+W(G)+";";}var D=w.value||"G",N=D.length,F=document.createElement("div");A>0&&tt(0,A);var q=tt(A,T);N>T&&tt(T,N),F.style.cssText=I,F.style.position="absolute",F.style.top=U+"px",F.style.left=L+"px",F.style.width=_+"px",F.style.height=$+"px",PopsCore.document.body.appendChild(F);var Y=q.getBoundingClientRect();return S||F.parentNode.removeChild(F),Y;function tt(X,Z){var ot=document.createElement("span");return ot.style.cssText=I,ot.textContent=D.substring(X,Z),F.appendChild(ot),ot}function nt(){var X=document.body,Z=document.defaultView,ot=document.documentElement,ut=document.createElement("div");ut.style.paddingLeft=ut.style.width="1px",X.appendChild(ut);var xt=ut.offsetWidth==2;X.removeChild(ut),ut=w.getBoundingClientRect();var K=ot.clientTop||X.clientTop||0,z=ot.clientLeft||X.clientLeft||0,B=Z.pageYOffset||xt&&ot.scrollTop||X.scrollTop,V=Z.pageXOffset||xt&&ot.scrollLeft||X.scrollLeft;return {top:ut.top+B-K,left:ut.left+V-z}}function W(X,Z){var ot=PopsCore.document.defaultView.getComputedStyle(w,null).getPropertyValue(X);return Z?parseFloat(ot):ot}}cssHide(w,A=false){w!=null&&(A?w.classList.add("pops-hide-important"):w.classList.add("pops-hide"));}cssShow(w){w!=null&&(w.classList.remove("pops-hide-important"),w.classList.remove("pops-hide"));}parseHTML(w,A=false,T=false){function S(){let k=new DOMParser;return T?k.parseFromString(w,"text/html"):k.parseFromString(w,"text/html").body.firstChild}function C(){let k=PopsCore.document.createElement("div");return PopsSafeUtils.setSafeHTML(k,w),T?k:k.firstChild}return A?S():C()}append(w,A){if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w==null)return;function T(S,C){typeof A=="string"?S.insertAdjacentHTML("beforeend",PopsSafeUtils.getSafeHTML(C)):S.appendChild(C);}if(Array.isArray(A)||A instanceof NodeList){let S=PopsCore.document.createDocumentFragment();A.forEach(C=>{typeof C=="string"&&(C=this.parseHTML(C,true,false)),S.appendChild(C);}),w.appendChild(S);}else T(w,A);}appendHead(w){PopsCore.document.head?PopsCore.document.head.appendChild(w):PopsCore.document.documentElement.appendChild(w);}appendBody(w){PopsCore.document.body?PopsCore.document.body.appendChild(w):PopsCore.document.documentElement.appendChild(w);}isShow(w){return !!w.getClientRects().length}showElement(w,A){let T=w.cloneNode(true);T.setAttribute("style","visibility: hidden !important;display:block !important;");let S=PopsCore.document.documentElement,C=w.getRootNode();return A==null?C==w?S=PopsCore.document.documentElement:S=C:S=A,S.appendChild(T),{cloneNode:T,recovery(){T.remove();}}}getStyleValue(w,A){let T=null,S=null;w instanceof CSSStyleDeclaration?S=w:(T=w.ownerDocument.defaultView,(!T||!T.opener)&&(T=window),S=T.getComputedStyle(w));let C=parseFloat(S[A]);return isNaN(C)?0:C}before(w,A){typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(typeof A=="string"?w.insertAdjacentHTML("beforebegin",PopsSafeUtils.getSafeHTML(A)):w.parentElement.insertBefore(A,w));}after(w,A){typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(typeof A=="string"?w.insertAdjacentHTML("afterend",PopsSafeUtils.getSafeHTML(A)):w.parentElement.insertBefore(A,w.nextSibling));}}const popsDOMUtils=new PopsDOMUtils,PopsInstanceUtils={getMaxZIndexNodeInfo(E=1,w=PopsCore.document,A){E=Number.isNaN(E)?1:E;const T=2*Math.pow(10,9);let S=0,C=null;function k(L){return L.position!=="static"&&L.display!=="none"}function U(L){if(typeof A=="function"){let $=A(L);if(typeof $=="boolean"&&!$)return}const _=PopsCore.window.getComputedStyle(L);if(k(_)){let $=parseInt(_.zIndex);isNaN($)||$>S&&(S=$,C=L),L.shadowRoot!=null&&L instanceof ShadowRoot&&L.shadowRoot.querySelectorAll("*").forEach(I=>{U(I);});}}return w.querySelectorAll("*").forEach((L,_)=>{U(L);}),S+=E,S>=T&&(S=T),{node:C,zIndex:S}},getPopsMaxZIndex(E=1){E=Number.isNaN(E)?1:E;const w=2*Math.pow(10,9);let A=0,T=null;function S(k){return k.position!=="static"&&k.display!=="none"}Object.keys(pops.config.layer).forEach(k=>{let U=pops.config.layer[k];for(let L=0;L<U.length;L++){const _=U[L];let $=window.getComputedStyle(_.animElement);if(S($)){let I=parseInt($.zIndex);isNaN(I)||I>A&&(A=I,T=_.animElement);}}}),A+=E;let C=A>=w;return C&&(A=w),{zIndex:A,animElement:T,isOverMaxZIndex:C}},getMaxZIndex(E=1){return this.getMaxZIndexNodeInfo(E).zIndex},getKeyFrames(E){let w={};return Object.keys(E.cssRules).forEach(A=>{E.cssRules[A].type===7&&E.cssRules[A].name.startsWith("pops-anim-")&&(w[E.cssRules[A].name]=E.cssRules[A]);}),w},removeInstance(E,w,A=false){function T(S){var C,k,U,L;typeof S.beforeRemoveCallBack=="function"&&S.beforeRemoveCallBack(S),(C=S==null?void 0:S.animElement)==null||C.remove(),(k=S==null?void 0:S.popsElement)==null||k.remove(),(U=S==null?void 0:S.maskElement)==null||U.remove(),(L=S==null?void 0:S.$shadowContainer)==null||L.remove();}return E.forEach(S=>{S.forEach((C,k)=>{(A||C.guid===w)&&(pops.config.animation.hasOwnProperty(C.animElement.getAttribute("anim"))?(C.animElement.style.width="100%",C.animElement.style.height="100%",C.animElement.style["animation-name"]=C.animElement.getAttribute("anim")+"-reverse",pops.config.animation.hasOwnProperty(C.animElement.style["animation-name"])?popsDOMUtils.on(C.animElement,popsDOMUtils.getAnimationEndNameList(),function(){T(C);},{capture:true}):T(C)):T(C),S.splice(k,1));});}),E},hide(E,w,A,T,S,C){return new Promise(k=>{let U=S.querySelector(".pops[type-value]");if(E==="drawer"){let _=T;setTimeout(()=>{C.style.setProperty("display","none"),["top","bottom"].includes(_.direction)?U.style.setProperty("height","0"):["left","right"].includes(_.direction)?U.style.setProperty("width","0"):console.error("未知direction：",_.direction),k();},_.closeDelay);}else {let _=w.find($=>$.guid===A);if(_){let $=_;if($.animElement.style.width="100%",$.animElement.style.height="100%",$.animElement.style["animation-name"]=$.animElement.getAttribute("anim")+"-reverse",pops.config.animation.hasOwnProperty($.animElement.style["animation-name"])){let I=function(){$.animElement.style.display="none",$.maskElement&&($.maskElement.style.display="none"),popsDOMUtils.off($.animElement,popsDOMUtils.getAnimationEndNameList(),I,{capture:true}),k();};popsDOMUtils.on($.animElement,popsDOMUtils.getAnimationEndNameList(),I,{capture:true});}else $.animElement.style.display="none",$.maskElement&&($.maskElement.style.display="none"),k();}}})},show(E,w,A,T,S,C){return new Promise(k=>{let U=S.querySelector(".pops[type-value]");if(E==="drawer"){let _=T;setTimeout(()=>{popsDOMUtils.css(C,"display","");let $=_.direction,I=_.size.toString();["top","bottom"].includes($)?U.style.setProperty("height",I):["left","right"].includes($)?U.style.setProperty("width",I):console.error("未知direction：",$),k();},_.openDelay);}else {let _=w.find($=>$.guid===A);if(_){let $=_;if($.animElement.style.width="",$.animElement.style.height="",$.animElement.style["animation-name"]=$.animElement.getAttribute("anim").replace("-reverse",""),pops.config.animation.hasOwnProperty($.animElement.style["animation-name"])){let I=function(){popsDOMUtils.off($.animElement,popsDOMUtils.getAnimationEndNameList(),I,{capture:true}),k();};$.animElement.style.display="",$.maskElement&&($.maskElement.style.display=""),popsDOMUtils.on($.animElement,popsDOMUtils.getAnimationEndNameList(),I,{capture:true});}else $.animElement.style.display="",$.maskElement&&($.maskElement.style.display=""),k();}}})},close(E,w,A,T,S){return new Promise(C=>{let k=S.querySelector(".pops[type-value]"),U=T;function L(){function _(I){I.propertyName==="transform"&&(popsDOMUtils.off(k,popsDOMUtils.getTransitionEndNameList(),void 0,_),PopsInstanceUtils.removeInstance([w],A),C());}if(popsDOMUtils.on(k,popsDOMUtils.getTransitionEndNameList(),_),getComputedStyle(k).transform!=="none"){popsDOMUtils.trigger(k,popsDOMUtils.getTransitionEndNameList(),void 0,true);return}["top"].includes(U.direction)?k.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(U.direction)?k.style.setProperty("transform","translateY(100%)"):["left"].includes(U.direction)?k.style.setProperty("transform","translateX(-100%)"):["right"].includes(U.direction)?k.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",U.direction);}E==="drawer"?setTimeout(()=>{L();},U.closeDelay):(PopsInstanceUtils.removeInstance([w],A),C());})},drag(E,w){w=Object.assign({limit:true,extraDistance:3,container:PopsCore.globalThis,triggerClick:true},w);let A=false,T=0,S=0,C=popsUtils.AnyTouch(),k=new C(w.dragElement,{preventDefault(D){return typeof w.preventEvent=="function"?w.preventEvent(D):true}});popsDOMUtils.css(w.dragElement,{cursor:"move"});function U(D){var Y;let N=0,F=0,q=PopsCore.globalThis.getComputedStyle(D).transform;if(q!=="none"&&q!=null&&q!==""){let tt=(Y=q.match(/\((.+)\)/))==null?void 0:Y[1].split(",");N=Math.abs(parseInt(tt[4])),F=Math.abs(parseInt(tt[5]));}return {transformLeft:N,transformTop:F}}function L(D){let N=D.style.transitionDuration;return globalThis.getComputedStyle(D).transitionDuration!=="0s"&&(D.style.transitionDuration="0s"),()=>{D.style.transitionDuration=N;}}function _(D){return D=D??globalThis,{width:popsDOMUtils.width(D),height:popsDOMUtils.height(D)}}function $(D){if(D=D??globalThis,popsUtils.isWin(D))return {left:0,top:0};{let N=D.getBoundingClientRect();return {left:N.left,top:N.top}}}let I=U(E),P=I.transformLeft,R=I.transformTop,G=null;k.on("pan",function(D){if(!A){A=true;let q=w.dragElement.getBoundingClientRect();T=D.x-q.left,S=D.y-q.top,I=U(E),P=I.transformLeft,R=I.transformTop,G=L(E);}let N=D.x-T+P,F=D.y-S+R;if(D.phase==="move"){if(w.limit){let q=_(w.container).width-popsDOMUtils.width(E)+P,{left:Y,top:tt}=$(w.container),nt=_(w.container).height-popsDOMUtils.height(E)+R;N>q&&(N=q),F>nt&&(F=nt),N-w.extraDistance*2<Y+P?(N=Y+P,N+=w.extraDistance):N-=w.extraDistance,F-w.extraDistance*2<tt+R?(F=tt+R,F+=w.extraDistance):F-=w.extraDistance;}typeof w.moveCallBack=="function"&&w.moveCallBack(E,N,F),popsDOMUtils.css(E,{left:N+"px",top:F+"px"});}D.phase==="end"&&(A=false,typeof G=="function"&&(G(),G=null),typeof w.endCallBack=="function"&&w.endCallBack(E,N,F));}),w.triggerClick&&k.on(["tap"],function(D){D.changedPoints.forEach(N=>{popsDOMUtils.trigger(N.target,"click",void 0,true);});});},sortElementListByProperty(E,w,A=true){if(typeof A!="boolean")throw "参数 sortByDesc 必须为boolean类型";if(E==null||w==null)throw "获取前面的值或后面的值的方法不能为空";return function(T,S){var C=E(S),k=w(T);return A?k>C?-1:k<C?1:0:k<C?-1:k>C?1:0}}};var indexCSS=`@charset "utf-8";\r
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
`,ninePalaceGridPositionCSS=`.pops[position="top_left"] {\r
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
`,scrollbarCSS=`/* firefox上暂不支持::-webkit-scrollbar */\r
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
`,buttonCSS=`.pops {\r
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
`,commonCSS=`.pops-flex-items-center {\r
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
`,animCSS=`@keyframes rotating {\r
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
`,alertCSS=`.pops[type-value] .pops-alert-title {\r
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
`,confirmCSS=`.pops[type-value] .pops-confirm-title {\r
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
`,promptCSS=`.pops[type-value] .pops-prompt-title {\r
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
`,loadingCSS=`.pops[type-value="loading"] {\r
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
`,iframeCSS=`.pops[type-value="iframe"] {\r
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
`,tooltipCSS=`.pops-tip {\r
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
`,drawerCSS=`.pops[type-value="drawer"] {\r
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
`,folderCSS=`.pops[type-value] .pops-folder-title {\r
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
}\r
.pops-folder-content .pops-folder-list-table__body-div {\r
	height: 100%;\r
	padding-bottom: 85px;\r
}\r
.pops-mobile-folder-content .pops-folder-list-table__body-div {\r
	height: 100%;\r
	padding-bottom: 40px;\r
}\r
.pops-folder-content table.pops-folder-list-table__body {\r
	overflow: auto;\r
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
`,panelCSS=`.pops[type-value="panel"] {\r
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
`,rightClickMenuCSS=`.pops-rightClickMenu * {\r
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
	margin: 2.5px 5px;\r
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
.pops-rightClickMenu ul li:first-child {\r
	margin-top: 5px;\r
}\r
.pops-rightClickMenu ul li:last-child {\r
	margin-bottom: 5px;\r
}\r
`,SVG_min=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>\r
</svg>\r
`,SVG_mise=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z"></path>\r
</svg>\r
`,SVG_max=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path>\r
</svg>\r
`,SVG_close=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>\r
</svg>\r
`,SVG_edit=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>\r
	<path\r
		fill="currentColor"\r
		d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>\r
</svg>\r
`,SVG_share=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"></path>\r
</svg>\r
`,SVG_delete=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>\r
</svg>\r
`,SVG_search=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path>\r
</svg>\r
`,SVG_upload=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path>\r
</svg>\r
`,SVG_loading=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>\r
</svg>\r
`,SVG_next=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,SVG_prev=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,SVG_eleme=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"></path>\r
</svg>\r
`,SVG_elemePlus=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"\r
		fill="currentColor"></path>\r
</svg>\r
`,SVG_chromeFilled=`<svg\r
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
`,SVG_cpu=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>\r
</svg>\r
`,SVG_videoPlay=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path>\r
</svg>\r
`,SVG_videoPause=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"></path>\r
</svg>\r
`,SVG_headset=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"></path>\r
</svg>\r
`,SVG_monitor=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path>\r
</svg>\r
`,SVG_documentCopy=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path>\r
</svg>\r
`,SVG_picture=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		fill="currentColor"\r
		d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>\r
</svg>\r
`,SVG_circleClose=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>\r
</svg>\r
`,SVG_view=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"></path>\r
</svg>\r
`,SVG_hide=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		fill="currentColor"\r
		d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"></path>\r
	<path\r
		fill="currentColor"\r
		d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"></path>\r
</svg>\r
`,SVG_keyboard=`<svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>\r
	<path\r
		d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>\r
	<path\r
		d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>\r
</svg>\r
`,SVG_arrowRight=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`,SVG_arrowLeft=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">\r
	<path\r
		d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>\r
</svg>\r
`;const GlobalConfig={config:{},setGlobalConfig(E){Reflect.ownKeys(E).forEach(w=>{Reflect.set(GlobalConfig.config,w,Reflect.get(E,w));});},getGlobalConfig(){let E={};return Object.keys(GlobalConfig.config).forEach(w=>{let A=Reflect.get(GlobalConfig.config,w);if(w==="style"){let T=A==null?"":typeof A=="function"?A():A;typeof T=="string"&&(E.style=T);}else if(w==="zIndex"){let T=A==null?"":typeof A=="function"?A():A;if(typeof T=="string"){let S=T=parseInt(T);isNaN(S)||(E.zIndex=S);}else isNaN(T)||(E.zIndex=T);}else if(w==="mask"){let T=GlobalConfig.config.mask==null?{}:GlobalConfig.config.mask;typeof T=="object"&&T!=null&&(E.mask=T);}else Reflect.set(E,w,A);}),E}},PopsElementHandler={getMaskHTML(E,w=101,A=""){return w=w-100,A.startsWith(";")&&(A=A.replace(";","")),`<div class="pops-mask" data-guid="${E}" style="z-index:${w};${A}"></div>`},getAnimHTML(E,w,A,T="",S="",C){let k=A,U="",L="",_=k.position||"";A.zIndex!=null&&(U+=`z-index: ${C};`,L+=`z-index: ${C};`),k.width!=null&&(L+=`width: ${k.width};`),k.height!=null&&(L+=`height: ${k.height};`);let $=S.trim()!=="";return `
		<div class="pops-anim" anim="${k.animation||""}" style="${U}" data-guid="${E}">${A.style!=null?`<style tyle="text/css">${A.style}</style>`:""}
			<div class="pops ${A.class||""}" data-bottom-btn="${$}" type-value="${w}" style="${L}" position="${_}" data-guid="${E}">${T}</div>
		</div>`},getHeaderBtnHTML(E,w){var k,U,L,_,$;if(!w.btn)return "";let A=w;if(E!=="iframe"&&!((U=(k=A.btn)==null?void 0:k.close)!=null&&U.enable))return "";let T="",S="",C=w;if(E==="iframe"&&((L=C.topRightButton)==null?void 0:L.trim())!==""){let I="";C.topRightButton.split("|").forEach(P=>{P=P.toLowerCase(),I+=`
                <button class="pops-header-control" type="${P}">
                    <i class="pops-icon">${pops.config.iconSVG[P]}</i>
                </button>`;}),T=`
            <div class="pops-header-controls" data-margin>${I}</div>`;}else ($=(_=A.btn)==null?void 0:_.close)!=null&&$.enable&&(S=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    	<i class="pops-icon">${pops.config.iconSVG.close}</i>
                    </button>
                </div>`),T=S;return T},getBottomBtnHTML(E,w){var L,_,$,I,P,R,G,D,N,F,q,Y,tt,nt;if(!w.btn)return "";let A=w;if(!((_=(L=w.btn)==null?void 0:L.ok)!=null&&_.enable||(I=($=A.btn)==null?void 0:$.cancel)!=null&&I.enable||(R=(P=A.btn)==null?void 0:P.other)!=null&&R.enable))return "";let T="",S="",C="",k="",U="";if(w.btn.position&&(T+=`justify-content: ${w.btn.position};`),A.btn.reverse&&(T+="flex-direction: row-reverse;"),(D=(G=w.btn)==null?void 0:G.ok)!=null&&D.enable){let W="";(w.btn.ok.size==="large"||w.btn.ok.size==="small")&&(W="pops-button-"+w.btn.ok.size);let X="",Z=A.btn.ok.icon;if(Z!==""){let ot="";Z in pops.config.iconSVG?ot=pops.config.iconSVG[Z]:ot=Z,ot=ot||"",X=`<i class="pops-bottom-icon" is-loading="${w.btn.ok.iconIsLoading}">${ot}</i>`;}C=`
            <button 
                    class="pops-${E}-btn-ok ${W}"
                    type="${(N=A.btn.ok)==null?void 0:N.type}"
					data-has-icon="${(A.btn.ok.icon||"")!==""}"
                    data-rightIcon="${(F=A.btn.ok)==null?void 0:F.rightIcon}"
            >${X}<span>${w.btn.ok.text}</span>
            </button>`;}if((Y=(q=A.btn)==null?void 0:q.cancel)!=null&&Y.enable){let W="";(A.btn.cancel.size==="large"||A.btn.cancel.size==="small")&&(W="pops-button-"+A.btn.cancel.size);let X="",Z=A.btn.cancel.icon;if(Z!==""){let ot="";Z in pops.config.iconSVG?ot=pops.config.iconSVG[Z]:ot=Z,ot=ot||"",X=`<i class="pops-bottom-icon" is-loading="${A.btn.cancel.iconIsLoading}">${ot}</i>`;}k=`
            <button
                    class="pops-${E}-btn-cancel ${W}"
                    type="${A.btn.cancel.type}"
					data-has-icon="${(A.btn.cancel.icon||"")!==""}"
                    data-rightIcon="${A.btn.cancel.rightIcon}"
            >${X}<span>${A.btn.cancel.text}</span>
            </button>`;}if((nt=(tt=A.btn)==null?void 0:tt.other)!=null&&nt.enable){let W="";(A.btn.other.size==="large"||A.btn.other.size==="small")&&(W="pops-button-"+A.btn.other.size);let X="",Z=A.btn.other.icon;if(Z!==""){let ot="";Z in pops.config.iconSVG&&(ot=pops.config.iconSVG[Z]),ot=ot||"",X=`<i class="pops-bottom-icon" is-loading="${A.btn.other.iconIsLoading}">${ot}</i>`;}U=`
            <button
                    class="pops-${E}-btn-other ${W}"
                    type="${A.btn.other.type}"
					data-has-icon="${(A.btn.other.icon||"")!==""}"
                    data-rightIcon="${A.btn.other.rightIcon}"
            >${X}<span>${A.btn.other.text}</span>
            </button>`;}if(A.btn.merge){let W="display: flex;";A.btn.mergeReverse?W+="flex-direction: row-reverse;":W+="flex-direction: row;",S=`
            <div class="pops-${E}-btn" style="${T}">${U}<div 
                    class="pops-${E}-btn-merge"
                    style="${W}">${C}${k}</div>
            </div>
            `;}else S=`<div class="pops-${E}-btn" style="${T}">${C}${k}${U}</div>`;return S},getHeaderStyle(E,w){var A,T,S,C;return {headerStyle:(A=w==null?void 0:w.title)!=null&&A.html&&((T=w==null?void 0:w.title)==null?void 0:T.style)||"",headerPStyle:(S=w==null?void 0:w.title)!=null&&S.html?"":((C=w==null?void 0:w.title)==null?void 0:C.style)||""}},getContentStyle(E,w){var A,T,S,C;return {contentStyle:(A=w==null?void 0:w.content)!=null&&A.html&&((T=w==null?void 0:w.content)==null?void 0:T.style)||"",contentPStyle:(S=w==null?void 0:w.content)!=null&&S.html?"":((C=w==null?void 0:w.content)==null?void 0:C.style)||""}},parseElement(E){return popsUtils.parseTextToDOM(E)}},PopsHandler={handlerShadow(E){let w=document.createElement("div");if(w.className="pops-shadow-container",E.useShadowRoot){let A=w.attachShadow({mode:"open"});return {$shadowContainer:w,$shadowRoot:A}}else return {$shadowContainer:w,$shadowRoot:w}},handleInit(E,w){if(pops.init(),!!arguments.length)if(Array.isArray(w))for(let A=0;A<w.length;A++)this.handleInit(E,w[A]);else {let A=popsDOMUtils.createElement("style",{innerHTML:w},{"data-type":"PopsHandler.handleInit"});E.appendChild(A);}},handleMask(E={}){let w={maskElement:popsUtils.parseTextToDOM(E.maskHTML)},A=false;function T(C){popsDOMUtils.preventEvent(C);let k=pops.config.layer[E.type];function U(){if(E.config.mask.clickEvent.toClose)return PopsInstanceUtils.close(E.type,k,E.guid,E.config,E.animElement);if(E.config.mask.clickEvent.toHide)return PopsInstanceUtils.hide(E.type,k,E.guid,E.config,E.animElement,w.maskElement)}return typeof E.config.mask.clickCallBack=="function"?E.config.mask.clickCallBack(U,E.config):U(),false}if(E.config.mask.clickEvent.toClose||E.config.mask.clickEvent.toHide){let C=function(k){var U;return !!(((U=k==null?void 0:k.localName)==null?void 0:U.toLowerCase())==="div"&&k.className&&k.className==="pops-anim"&&k.hasAttribute("anim"))};popsDOMUtils.on(E.animElement,["touchstart","mousedown"],void 0,k=>{let U=k.composedPath()[0];A=C(U);}),popsDOMUtils.on(E.animElement,"click",void 0,k=>{let U=k.composedPath()[0];if(C(U)&&A)return T(k)}),popsDOMUtils.on(w.maskElement,"click",void 0,k=>{A=true,T(k);});}return w},handleQueryElement(E,w){return {popsElement:E.querySelector(".pops[type-value"),btnOkElement:E.querySelector(`.pops-${w}-btn-ok`),btnCancelElement:E.querySelector(`.pops-${w}-btn-cancel`),btnOtherElement:E.querySelector(`.pops-${w}-btn-other`),titleElement:E.querySelector(`.pops-${w}-title`),inputElement:E.querySelector(`.pops-${w}-content textarea[pops]`)?E.querySelector(`.pops-${w}-content textarea[pops]`):E.querySelector(`.pops-${w}-content input[pops]`),headerControlsElement:E.querySelector(".pops-header-controls"),iframeElement:E.querySelector("iframe[pops]"),loadingElement:E.querySelector(".pops-loading"),contentElement:E.querySelector(`.pops-${w}-content`),contentAsideElement:E.querySelector(`.pops-${w}-content aside.pops-${w}-aside`),contentSectionContainerElement:E.querySelector(`.pops-${w}-content section.pops-${w}-container`),contentLoadingElement:E.querySelector(`.pops-${w}-content-global-loading`),headerMinBtnElement:E.querySelector(".pops-header-control[type='min']"),headerMaxBtnElement:E.querySelector(".pops-header-control[type='max']"),headerMiseBtnElement:E.querySelector(".pops-header-control[type='mise']"),headerCloseBtnElement:E.querySelector(".pops-header-control[type='close']"),folderListElement:E.querySelector(".pops-folder-list"),folderListHeaderElement:E.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),folderListHeaderRowElement:E.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),folderListBodyElement:E.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),folderFileListBreadcrumbPrimaryElement:E.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),folderListSortFileNameElement:E.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),folderListSortLatestTimeElement:E.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),folderListSortFileSizeElement:E.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventDetails(E,w,A,T,S,C,k,U){return {$shadowContainer:w,$shadowRoot:A,element:S,animElement:S,popsElement:C,maskElement:k,mode:T,guid:E,close(){return PopsInstanceUtils.close(T,pops.config.layer[T],E,U,S)},hide(){return PopsInstanceUtils.hide(T,pops.config.layer[T],E,U,S,k)},show(){return PopsInstanceUtils.show(T,pops.config.layer[T],E,U,S,k)}}},handleLoadingEventDetails(E,w,A,T,S,C){return {element:A,animElement:A,popsElement:T,maskElement:S,mode:w,guid:E,close(){return PopsInstanceUtils.close(w,pops.config.layer[w],E,C,A)},hide(){return PopsInstanceUtils.hide(w,pops.config.layer[w],E,C,A,S)},show(){return PopsInstanceUtils.show(w,pops.config.layer[w],E,C,A,S)}}},handleResultDetails(E){let w=Object.assign({},E);return popsUtils.delete(w,"type"),popsUtils.delete(w,"function"),w},handleClickEvent(E,w,A,T){popsDOMUtils.on(w,"click",S=>{T(Object.assign(A,{type:E}),S);},{capture:true});},handleKeyboardEvent(E,w=[],A){let T=function(S){let C=S.code||S.key,k=S.charCode||S.keyCode||S.which;w.includes("ctrl")&&!S.ctrlKey||w.includes("alt")&&!S.altKey||w.includes("meta")&&!S.metaKey||w.includes("shift")&&!S.shiftKey||(typeof E=="string"&&E===C?A&&A(S):typeof E=="number"&&E===k&&A&&A(S));};return popsDOMUtils.on(PopsCore.globalThis,"keydown",T,{capture:true}),{removeKeyboardEvent(){popsDOMUtils.off(globalThis,"keydown",T,{capture:true});}}},handlePromptClickEvent(E,w,A,T,S){popsDOMUtils.on(A,"click",C=>{let k={type:E,text:w.value};S(Object.assign(T,k),C);},{capture:true});},handleZIndex(E){return typeof E=="function"?E():E},handleOnly(E,w){if(w.only)if(E==="loading"||E==="tooltip"||E==="rightClickMenu"){let A=pops.config.layer[E];A&&PopsInstanceUtils.removeInstance([A],"",true);}else PopsInstanceUtils.removeInstance([pops.config.layer.alert,pops.config.layer.confirm,pops.config.layer.prompt,pops.config.layer.iframe,pops.config.layer.drawer,pops.config.layer.folder,pops.config.layer.panel],"",true);else {let A=w.zIndex;w.zIndex=()=>{const{zIndex:T}=PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(A)+100);return T};}return w},handlePush(E,w){pops.config.layer[E].push(w);}},PopsAlertConfig=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:true,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback:function(E){E.close();}},close:{enable:true,callback:function(E){E.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),PopsAlert={init(E){const w=popsUtils.getRandomGUID(),A="alert";let T=PopsAlertConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.alertCSS]);let k=PopsHandler.handleZIndex(T.zIndex),U=PopsElementHandler.getMaskHTML(w,k),L=PopsElementHandler.getHeaderBtnHTML(A,T),_=PopsElementHandler.getBottomBtnHTML(A,T),{headerStyle:$,headerPStyle:I}=PopsElementHandler.getHeaderStyle(A,T),{contentStyle:P,contentPStyle:R}=PopsElementHandler.getContentStyle(A,T),G=PopsElementHandler.getAnimHTML(w,A,T,`
			<div class="pops-alert-title" style="text-align: ${T.title.position};${$}">${T.title.html?T.title.text:`<p pops style="${I}">${T.title.text}</p>`}${L}</div>
			<div class="pops-alert-content" style="${P}">${T.content.html?T.content.text:`<p pops style="${R}">${T.content.text}</p>`}</div>${_}`,_,k),D=PopsElementHandler.parseElement(G),{popsElement:N,headerCloseBtnElement:F,btnOkElement:q,titleElement:Y}=PopsHandler.handleQueryElement(D,A),tt=null,nt=[D];T.mask.enable&&(tt=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:D,maskHTML:U}).maskElement,nt.push(tt));let W=PopsHandler.handleEventDetails(w,S,C,A,D,N,tt,T);return PopsHandler.handleClickEvent("close",F,W,T.btn.close.callback),PopsHandler.handleClickEvent("ok",q,W,T.btn.ok.callback),popsDOMUtils.append(C,nt),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S),tt!=null&&D.after(tt),PopsHandler.handlePush(A,{guid:w,animElement:D,popsElement:N,maskElement:tt,$shadowContainer:S,$shadowRoot:C}),T.drag&&PopsInstanceUtils.drag(N,{dragElement:Y,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handleResultDetails(W)}},PopsConfirmConfig=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(E){E.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(E){E.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(E){E.close();}},close:{enable:true,callback(E){E.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),PopsConfirm={init(E){const w=popsUtils.getRandomGUID(),A="confirm";let T=PopsConfirmConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.confirmCSS]);let k=PopsHandler.handleZIndex(T.zIndex),U=PopsElementHandler.getMaskHTML(w,k),L=PopsElementHandler.getHeaderBtnHTML(A,T),_=PopsElementHandler.getBottomBtnHTML(A,T),{headerStyle:$,headerPStyle:I}=PopsElementHandler.getHeaderStyle(A,T),{contentStyle:P,contentPStyle:R}=PopsElementHandler.getContentStyle(A,T),G=PopsElementHandler.getAnimHTML(w,A,T,`
            <div class="pops-confirm-title" style="text-align: ${T.title.position};${$}">${T.title.html?T.title.text:`<p pops style="${I}">${T.title.text}</p>`}${L}</div>
                        <div class="pops-confirm-content" style="${P}">${T.content.html?T.content.text:`<p pops style="${R}">${T.content.text}</p>`}</div>${_}`,_,k),D=PopsElementHandler.parseElement(G),{popsElement:N,titleElement:F,headerCloseBtnElement:q,btnOkElement:Y,btnCancelElement:tt,btnOtherElement:nt}=PopsHandler.handleQueryElement(D,A),W=null,X=[D];T.mask.enable&&(W=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:D,maskHTML:U}).maskElement,X.push(W));let Z=PopsHandler.handleEventDetails(w,S,C,A,D,N,W,T);return PopsHandler.handleClickEvent("close",q,Z,T.btn.close.callback),PopsHandler.handleClickEvent("ok",Y,Z,T.btn.ok.callback),PopsHandler.handleClickEvent("cancel",tt,Z,T.btn.cancel.callback),PopsHandler.handleClickEvent("other",nt,Z,T.btn.other.callback),popsDOMUtils.append(C,X),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S),W!=null&&D.after(W),PopsHandler.handlePush(A,{guid:w,animElement:D,popsElement:N,maskElement:W,$shadowContainer:S,$shadowRoot:C}),T.drag&&PopsInstanceUtils.drag(N,{dragElement:F,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handleResultDetails(Z)}},PopsPromptConfig=()=>({title:{text:"默认标题",position:"left",html:false,style:""},content:{text:"",select:false,password:false,row:false,focus:true,placeholder:"默认提示",style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"success",callback(E){E.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(E){E.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(E){E.close();}},close:{enable:true,callback(E){E.close();}}},useShadowRoot:true,class:"",only:false,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),PopsPrompt={init(E){const w=popsUtils.getRandomGUID(),A="prompt";let T=PopsPromptConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.promptCSS]);let k=PopsHandler.handleZIndex(T.zIndex),U=PopsElementHandler.getMaskHTML(w,k),L=PopsElementHandler.getHeaderBtnHTML(A,T),_=PopsElementHandler.getBottomBtnHTML(A,T),{headerStyle:$,headerPStyle:I}=PopsElementHandler.getHeaderStyle(A,T),{contentPStyle:P}=PopsElementHandler.getContentStyle(A,T),R=PopsElementHandler.getAnimHTML(w,A,T,`
            <div class="pops-prompt-title" style="text-align: ${T.title.position};${$}">${T.title.html?T.title.text:`<p pops style="${I}">${T.title.text}</p>`}${L}</div>
            <div class="pops-prompt-content" style="${P}">${T.content.row?'<textarea pops="" placeholder="'+T.content.placeholder+'"></textarea>':'<input pops="" placeholder="'+T.content.placeholder+'" type="'+(T.content.password?"password":"text")+'">'}</div>${_}`,_,k),G=PopsElementHandler.parseElement(R),{popsElement:D,inputElement:N,headerCloseBtnElement:F,btnOkElement:q,btnCancelElement:Y,btnOtherElement:tt,titleElement:nt}=PopsHandler.handleQueryElement(G,A),W=null,X=[G];T.mask.enable&&(W=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:G,maskHTML:U}).maskElement,X.push(W));let Z=PopsHandler.handleEventDetails(w,S,C,A,G,D,W,T);return N.value=T.content.text,PopsHandler.handlePromptClickEvent("close",N,F,Z,T.btn.close.callback),PopsHandler.handlePromptClickEvent("ok",N,q,Z,T.btn.ok.callback),PopsHandler.handlePromptClickEvent("cancel",N,Y,Z,T.btn.cancel.callback),PopsHandler.handlePromptClickEvent("other",N,tt,Z,T.btn.other.callback),popsDOMUtils.append(C,X),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S),W!=null&&G.after(W),PopsHandler.handlePush(A,{guid:w,animElement:G,popsElement:D,maskElement:W,$shadowContainer:S,$shadowRoot:C}),T.drag&&PopsInstanceUtils.drag(D,{dragElement:nt,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),T.content.focus&&N.focus(),T.content.select&&N.select(),PopsHandler.handleResultDetails(Z)}},PopsLoadingConfig=()=>({parent:document.body,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:true,class:"",only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:false,isAbsolute:false,style:null,addIndexCSS:true}),PopsLoading={init(E){let w=PopsLoadingConfig();w=popsUtils.assign(w,GlobalConfig.getGlobalConfig()),w=popsUtils.assign(w,E);let A=popsUtils.getRandomGUID();const T="loading";w=PopsHandler.handleOnly(T,w);let S=PopsHandler.handleZIndex(w.zIndex),C=PopsElementHandler.getMaskHTML(A,S),{contentPStyle:k}=PopsElementHandler.getContentStyle("loading",w),U=PopsElementHandler.getAnimHTML(A,T,w,`
            <div class="pops-loading-content">${w.addIndexCSS?`
                <style data-model-name="index">${pops.config.cssText.index}</style>
                <style data-model-name="anim">${pops.config.cssText.anim}</style>
                <style data-model-name="common">${pops.config.cssText.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${pops.config.cssText.loadingCSS}
                </style>
            ${w.style!=null?`<style>${w.style}</style>`:""}
            	<p pops style="${k}">${w.content.text}</p>
            </div>`,"",S),L=PopsElementHandler.parseElement(U),{popsElement:_}=PopsHandler.handleQueryElement(L,T),$=null,I=[L];w.mask.enable&&($=PopsHandler.handleMask({type:T,guid:A,config:w,animElement:L,maskHTML:C}).maskElement,I.push($));let P=PopsHandler.handleLoadingEventDetails(A,T,L,_,$,w);return popsDOMUtils.append(w.parent,I),$!=null&&L.after($),PopsHandler.handlePush(T,{guid:A,animElement:L,popsElement:_,maskElement:$}),w.isAbsolute&&(popsDOMUtils.css(L,"position","absolute !important"),$&&popsDOMUtils.css($,"position","absolute !important")),PopsHandler.handleResultDetails(P)}},PopsIframeConfig=()=>({title:{position:"center",text:"",html:false,style:""},loading:{enable:true,icon:true,text:""},useShadowRoot:true,class:"",url:window.location.href,only:false,zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:true,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:"300px",height:"250px",topRightButton:"min|max|mise|close",sandbox:false,forbiddenScroll:false,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}}),PopsIframe={init(E){var at;const w=popsUtils.getRandomGUID(),A="iframe";let T=PopsIframeConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T.url==null)throw "config.url不能为空";T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.iframeCSS]);let k=T.animation!=null&&T.animation!=""?"position:absolute;":"",U=PopsHandler.handleZIndex(T.zIndex),L=PopsElementHandler.getMaskHTML(w,U,k),_=PopsElementHandler.getHeaderBtnHTML(A,T),$='<div class="pops-loading"></div>',I=T.title.text.trim()!==""?T.title.text:T.url,{headerStyle:P,headerPStyle:R}=PopsElementHandler.getHeaderStyle(A,T),G=PopsElementHandler.getAnimHTML(w,A,T,`
            <div class="pops-iframe-title" style="text-align: ${T.title.position};${P}">${T.title.html?I:`<p pops style="${R}">${I}</p>`}${_}</div>
			<div class="pops-iframe-content">
                <div class="pops-iframe-content-global-loading"></div>
                <iframe src="${T.url}" pops ${T.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
			</div>${T.loading.enable?$:""}`,"",U),D=PopsElementHandler.parseElement(G),{popsElement:N,headerCloseBtnElement:F,headerControlsElement:q,titleElement:Y,iframeElement:tt,loadingElement:nt,contentLoadingElement:W,headerMinBtnElement:X,headerMaxBtnElement:Z,headerMiseBtnElement:ot}=PopsHandler.handleQueryElement(D,A),ut=PopsCore.document.querySelector(".pops-iframe-container");ut||(ut=PopsCore.document.createElement("div"),ut.className="pops-iframe-container",ut.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;",popsDOMUtils.appendBody(ut));let xt=null,K=[D];T.mask.enable&&(xt=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:D,maskHTML:L}).maskElement,K.push(xt));let z=PopsHandler.handleEventDetails(w,S,C,A,D,N,xt,T);z.iframeElement=tt,popsDOMUtils.on(D,popsDOMUtils.getAnimationEndNameList(),function(){D.style.width="0%",D.style.height="0%";}),popsDOMUtils.on(tt,"load",()=>{nt==null||nt.remove(),W.style.animation="iframeLoadingChange_85 0.3s forwards",popsDOMUtils.on(W,popsDOMUtils.getAnimationEndNameList(),()=>{W.remove();}),T.title.text.trim()===""&&tt.contentDocument&&(Y.querySelector("p").innerText=tt.contentDocument.title),T.loadEndCallBack(z);}),popsDOMUtils.append(C,K),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),ut.appendChild(S),xt!=null&&D.after(xt),T.drag&&PopsInstanceUtils.drag(N,{dragElement:Y,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack});const B="type-module";let V="",Q="",J=false;return popsDOMUtils.on(X,"click",ft=>{var mt,st;ft.preventDefault(),ft.stopPropagation(),V=N.style.left,Q=N.style.top,N.classList.add("pops-iframe-unset-top"),N.classList.add("pops-iframe-unset-left"),N.classList.add("pops-iframe-unset-transform"),N.style.transitionDuration="",N.setAttribute(B,"min"),q.setAttribute("type","min"),Z.style.setProperty("display","none"),ot.style.setProperty("display",""),typeof((st=(mt=T==null?void 0:T.btn)==null?void 0:mt.min)==null?void 0:st.callback)=="function"&&T.btn.min.callback(z,ft);},{capture:true}),popsDOMUtils.on(Z,"click",ft=>{var mt,st;ft.preventDefault(),ft.stopPropagation(),N.getAttribute(B)!=="min"&&(V=N.style.left,Q=N.style.top),J=true,N.style.transitionDuration="",N.style.transform="",N.removeAttribute(B),N.classList.add("pops-iframe-unset-transition"),N.classList.add("pops-iframe-unset-left"),N.classList.add("pops-iframe-unset-top"),N.classList.add("pops-iframe-unset-transform"),N.classList.remove("pops-iframe-unset-transition"),N.setAttribute(B,"max"),q.setAttribute("type","max"),Z.style.setProperty("display","none"),ot.style.setProperty("display",""),typeof((st=(mt=T==null?void 0:T.btn)==null?void 0:mt.max)==null?void 0:st.callback)=="function"&&T.btn.max.callback(z,ft);},{capture:true}),(at=ot==null?void 0:ot.style)==null||at.setProperty("display","none"),popsDOMUtils.on(ot,"click",ft=>{var mt,st;ft.preventDefault(),ft.stopPropagation(),J&&N.getAttribute(B)==="min"?(N.classList.add("pops-iframe-unset-transition"),N.classList.add("pops-iframe-unset-left"),N.classList.add("pops-iframe-unset-top"),N.classList.add("pops-iframe-unset-transform"),N.classList.remove("pops-iframe-unset-transition"),N.setAttribute(B,"max"),q.setAttribute("type","max")):(J=false,N.style.left=V,N.style.top=Q,N.style.transitionDuration="",N.style.transform="",q.removeAttribute("type"),N.removeAttribute(B),N.classList.remove("pops-iframe-unset-top"),N.classList.remove("pops-iframe-unset-left"),N.classList.remove("pops-iframe-unset-transform"),Z.style.setProperty("display",""),ot.style.setProperty("display","none")),typeof((st=(mt=T==null?void 0:T.btn)==null?void 0:mt.mise)==null?void 0:st.callback)=="function"&&T.btn.mise.callback(z,ft);},{capture:true}),popsDOMUtils.on(F,"click",ft=>{var mt,st;ft.preventDefault(),ft.stopPropagation(),PopsInstanceUtils.removeInstance([pops.config.layer.iframe],w,false),typeof((st=(mt=T==null?void 0:T.btn)==null?void 0:mt.close)==null?void 0:st.callback)=="function"&&T.btn.close.callback(z,ft);},{capture:true}),PopsHandler.handlePush(A,{guid:w,animElement:D,popsElement:N,maskElement:xt,$shadowContainer:S,$shadowRoot:C}),PopsHandler.handleResultDetails(z)}},PopsDrawerConfig=()=>({title:{enable:true,position:"center",text:"默认标题",html:false,style:""},content:{text:"默认内容",html:false,style:""},btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(E){E.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(E){E.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(E){E.close();}},close:{enable:true,callback(E){E.close();}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",zIndex:1e4,only:false,direction:"right",size:"30%",lockScroll:false,closeOnPressEscape:true,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:false}),PopsDrawer={init(E){const w=popsUtils.getRandomGUID(),A="drawer";let T=PopsDrawerConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.drawerCSS]);let k=PopsHandler.handleZIndex(T.zIndex),U=PopsElementHandler.getMaskHTML(w,k),L=PopsElementHandler.getHeaderBtnHTML(A,T),_=PopsElementHandler.getBottomBtnHTML(A,T),{headerStyle:$,headerPStyle:I}=PopsElementHandler.getHeaderStyle(A,T),{contentStyle:P,contentPStyle:R}=PopsElementHandler.getContentStyle(A,T),G=PopsElementHandler.getAnimHTML(w,A,T,`
            ${T.title.enable?`
            <div class="pops-${A}-title" style="${$}">${T.title.html?T.title.text:`<p pops style="width: 100%;text-align: ${T.title.position};${I}">${T.title.text}</p>`}${L}</div>`:""}
            <div class="pops-${A}-content" style="${P}">${T.content.html?T.content.text:`<p pops style="${R}">${T.content.text}</p>`}</div>${_}`,_,k),D=PopsElementHandler.parseElement(G),{popsElement:N,headerCloseBtnElement:F,btnCancelElement:q,btnOkElement:Y,btnOtherElement:tt}=PopsHandler.handleQueryElement(D,A),nt=N,W=F,X=q,Z=Y,ot=tt,ut=null,xt=[D];T.mask.enable&&(ut=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:D,maskHTML:U}).maskElement,xt.push(ut));let K=PopsHandler.handleEventDetails(w,S,C,A,D,nt,ut,T);return nt.setAttribute("direction",T.direction),T.direction==="top"?(nt.style.setProperty("height","0"),nt.style.setProperty("border-radius",`0px 0px ${T.borderRadius}px ${T.borderRadius}px`)):T.direction==="bottom"?(nt.style.setProperty("height","0"),nt.style.setProperty("border-radius",`${T.borderRadius}px ${T.borderRadius}px 0px 0px`)):T.direction==="left"?(nt.style.setProperty("width","0"),nt.style.setProperty("border-radius",`0px ${T.borderRadius}px 0px ${T.borderRadius}px`)):T.direction==="right"&&(nt.style.setProperty("width","0"),nt.style.setProperty("border-radius",`${T.borderRadius}px 0px ${T.borderRadius}px 0px`)),T.closeOnPressEscape&&PopsHandler.handleKeyboardEvent("Escape",[],function(){K.close();}),[{type:"close",ele:W},{type:"cancel",ele:X},{type:"ok",ele:Z},{type:"other",ele:ot}].forEach(V=>{PopsHandler.handleClickEvent(V.type,V.ele,K,Q=>{typeof T.btn[V.type].callback=="function"&&T.btn[V.type].callback(Q);});}),xt.forEach(V=>{V.style.setProperty("display","none"),["top"].includes(T.direction)?(nt.style.setProperty("height",T.size.toString()),nt.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(T.direction)?(nt.style.setProperty("height",T.size.toString()),nt.style.setProperty("transform","translateY(100%)")):["left"].includes(T.direction)?(nt.style.setProperty("width",T.size.toString()),nt.style.setProperty("transform","translateX(-100%)")):["right"].includes(T.direction)&&(nt.style.setProperty("width",T.size.toString()),nt.style.setProperty("transform","translateX(100%)")),V.style.setProperty("display","");}),popsDOMUtils.append(C,xt),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S),setTimeout(()=>{setTimeout(()=>{nt.style.setProperty("transform","");},T.openDelay);},50),ut!=null&&D.after(ut),PopsHandler.handlePush(A,{guid:w,animElement:D,popsElement:nt,maskElement:ut,$shadowContainer:S,$shadowRoot:C}),PopsHandler.handleResultDetails(K)}},PopsFolderConfig=()=>({title:{text:"pops.Folder",position:"center",html:false,style:""},sort:{name:"latestTime",isDesc:false,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:true,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:false,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}],btn:{merge:false,mergeReverse:false,reverse:false,position:"flex-end",ok:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"确定",type:"primary",callback(E){E.close();}},cancel:{enable:true,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"关闭",type:"default",callback(E){E.close();}},other:{enable:false,size:void 0,icon:void 0,rightIcon:false,iconIsLoading:false,text:"其它按钮",type:"default",callback(E){E.close();}},close:{enable:true,callback(E){E.close();}}},useShadowRoot:true,class:"",only:false,width:"500px",height:"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),Folder_ICON={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="},PopsFolder={init(E){const w=popsUtils.getRandomGUID(),A="folder";let T=PopsFolderConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.folderCSS]),Folder_ICON.docx=Folder_ICON.doc,Folder_ICON.rtf=Folder_ICON.doc,Folder_ICON.xlsx=Folder_ICON.xls,Folder_ICON.pptx=Folder_ICON.ppt,Folder_ICON.dmg=Folder_ICON.ipa,Folder_ICON.json=Folder_ICON.js;let k=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],U=["jpg","jpeg","ico","webp"],L=["htm","py","vue","bat","sh","vbs","java","kt"],_=["apk","apkm","xapk"];k.forEach(it=>{Folder_ICON[it]=Folder_ICON.zip;}),U.forEach(it=>{Folder_ICON[it]=Folder_ICON.png;}),L.forEach(it=>{Folder_ICON[it]=Folder_ICON.html;}),_.forEach(it=>{Folder_ICON[it]=Folder_ICON.apk;}),E!=null&&E.folder&&(T.folder=E.folder);let $=PopsHandler.handleZIndex(T.zIndex),I=PopsElementHandler.getMaskHTML(w,$),P=PopsElementHandler.getHeaderBtnHTML(A,T),R=PopsElementHandler.getBottomBtnHTML(A,T),{headerStyle:G,headerPStyle:D}=PopsElementHandler.getHeaderStyle(A,T),N=PopsElementHandler.getAnimHTML(w,A,T,`
            <div class="pops-folder-title" style="text-align: ${T.title.position};${G}">${T.title.html?T.title.text:`<p pops style="${D}">${T.title.text}</p>`}${P}</div>
			<div class="pops-folder-content ${pops.isPhone()?"pops-mobile-folder-content":""}">
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
                        ${pops.isPhone()?'<col width="100%">':`
                            <col width="52%">
                            <col width="24%">
                            <col width="16%">`}
                        
                        </colgroup>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>${R}`,R,$),F=PopsElementHandler.parseElement(N),{popsElement:q,titleElement:Y,contentElement:tt,folderListBodyElement:nt,folderFileListBreadcrumbPrimaryElement:W,headerCloseBtnElement:X,btnOkElement:Z,btnCancelElement:ot,btnOtherElement:ut,folderListSortFileNameElement:xt,folderListSortLatestTimeElement:K,folderListSortFileSizeElement:z}=PopsHandler.handleQueryElement(F,A),B=null,V=[F];T.mask.enable&&(B=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:F,maskHTML:I}).maskElement,V.push(B));let Q=PopsHandler.handleEventDetails(w,S,C,A,F,q,B,T);PopsHandler.handleClickEvent("close",X,Q,T.btn.close.callback),PopsHandler.handleClickEvent("ok",Z,Q,T.btn.ok.callback),PopsHandler.handleClickEvent("cancel",ot,Q,T.btn.cancel.callback),PopsHandler.handleClickEvent("other",ut,Q,T.btn.other.callback),popsDOMUtils.append(C,V),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S),B!=null&&F.after(B),T.folder.sort();function J(it,lt="-",ct="-",vt=false){let pt=it,ht=lt,Et=ct,Mt=popsDOMUtils.createElement("tr"),Ct=popsDOMUtils.createElement("td"),Tt=popsDOMUtils.createElement("td"),_t=popsDOMUtils.createElement("td"),zt="",Dt=Folder_ICON.folder;if(vt)lt="",ct="";else {Dt="",typeof lt=="number"&&(lt=popsUtils.formatTime(lt)),typeof ct=="number"&&(ct=popsUtils.formatByteToSize(ct));for(let re in Folder_ICON)if(it.toLowerCase().endsWith("."+re)){zt=re,Dt=Folder_ICON[re];break}Dt||(zt="Null",Dt=Folder_ICON.Null);}Mt.className="pops-folder-list-table__body-row",Ct.className="pops-folder-list-table__body-td",Tt.className="pops-folder-list-table__body-td",_t.className="pops-folder-list-table__body-td",PopsSafeUtils.setSafeHTML(Ct,`
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${Dt}" alt="${zt}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${it}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${it}
						</a>
					</div>
				</div>
            `),PopsSafeUtils.setSafeHTML(Tt,`
				<div class="pops-folder-list__time">
					<span>${lt}</span>
				</div>
				`),PopsSafeUtils.setSafeHTML(_t,`
				<div class="pops-folder-list-format-size">
					<span>${ct}</span>
				</div>
				`);let Zt={fileName:pt,latestTime:ht,fileSize:Et,isFolder:vt};return Ct.__value__=Zt,Tt.__value__=Zt,_t.__value__=Zt,Mt.__value__=Zt,Mt.appendChild(Ct),Mt.appendChild(Tt),Mt.appendChild(_t),{folderELement:Mt,fileNameElement:Ct,fileTimeElement:Tt,fileFormatSize:_t}}function rt(it,lt="-",ct="-",vt=false){let pt=it,ht=lt,Et=ct,Mt=popsDOMUtils.createElement("tr"),Ct=popsDOMUtils.createElement("td"),Tt="",_t=Folder_ICON.folder;if(vt)lt="",ct="";else {_t="",typeof lt=="number"&&(lt=popsUtils.formatTime(lt)),typeof ct=="number"&&(ct=popsUtils.formatByteToSize(ct));for(let Dt in Folder_ICON)if(it.toLowerCase().endsWith("."+Dt)){Tt=Dt,_t=Folder_ICON[Dt];break}_t||(Tt="Null",_t=Folder_ICON.Null);}Mt.className="pops-folder-list-table__body-row",Ct.className="pops-folder-list-table__body-td",PopsSafeUtils.setSafeHTML(Ct,`
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${_t}" alt="${Tt}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${it}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${it}</a>
						<span>${lt} ${ct}</span>
					</div>
				</div>
			`);let zt={fileName:pt,latestTime:ht,fileSize:Et,isFolder:vt};return Ct.__value__=zt,Mt.__value__=zt,Mt.appendChild(Ct),{folderELement:Mt,fileNameElement:Ct}}function at(){PopsSafeUtils.setSafeHTML(nt,"");}function ft(){return popsDOMUtils.createElement("div",{className:"iconArrow"})}function mt(it,lt){return popsDOMUtils.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${it}</a>`,_config_:lt},{title:"name"})}function st(it,lt,ct){at();let pt=it.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(pt)for(;pt.nextElementSibling;)pt.nextElementSibling.remove();else console.error("获取导航按钮失败");let ht=pops.loading({parent:tt,content:{text:"获取文件列表中..."},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},addIndexCSS:false});ee(ct),ht.close();}async function wt(it,lt){at();let ct=pops.loading({parent:tt,content:{text:"获取文件列表中..."},mask:{enable:true},addIndexCSS:false});if(typeof lt.clickEvent=="function"){let vt=await lt.clickEvent(it,lt);W.appendChild(ft());let pt=mt(lt.fileName,vt);W.appendChild(pt),popsDOMUtils.on(pt,"click",function(ht){st(ht,false,vt);}),ee(vt);}ct.close();}function Ut(it,lt){popsDOMUtils.on(it,"click",async function(ct){ct==null||ct.preventDefault(),ct==null||ct.stopPropagation(),ct==null||ct.stopImmediatePropagation();let vt=it.querySelector("a");if(typeof lt.clickEvent=="function"){let pt=await lt.clickEvent(ct,lt);if(pt!=null&&typeof pt=="object"&&!Array.isArray(pt)&&typeof pt.url=="string"&&pt.url.trim()!==""&&(vt.setAttribute("href",pt.url),vt.setAttribute("target","_blank"),pt.autoDownload))if((pt.mode==null||pt.mode==="")&&(pt.mode="aBlank"),pt.mode==="a"||pt.mode==="aBlank"){let ht=document.createElement("a");pt.mode==="aBlank"&&ht.setAttribute("target","_blank"),ht.href=pt.url,ht.click();}else if(pt.mode==="open"||pt.mode==="openBlank")pt.mode==="openBlank"?globalThis.open(pt.url,"_blank"):globalThis.open(pt.url);else if(pt.mode==="iframe"){let ht=document.createElement("iframe");ht.src=pt.url,ht.onload=function(){setTimeout(()=>{ht.remove();},1e3);},C.appendChild(ht),setTimeout(()=>{ht.remove();},3*60*1e3);}else console.error("未知的下载模式",pt);}});}function Vt(it,lt="fileName",ct=false){if(lt==="fileName"){let vt=it.filter(ht=>ht.isFolder),pt=it.filter(ht=>!ht.isFolder);return vt.sort((ht,Et)=>{let Mt=ht[lt].toString(),Ct=Et[lt].toString(),Tt=Mt.localeCompare(Ct);return ct&&(Tt>0?Tt=-1:Tt<0&&(Tt=1)),Tt}),pt.sort((ht,Et)=>{let Mt=ht[lt].toString(),Ct=Et[lt].toString(),Tt=Mt.localeCompare(Ct);return ct&&(Tt>0?Tt=-1:Tt<0&&(Tt=1)),Tt}),ct?[...pt,...vt]:[...vt,...pt]}else return it.sort((vt,pt)=>{let ht=vt[lt],Et=pt[lt];return lt==="fileSize"?(ht=parseFloat(ht.toString()),Et=parseFloat(Et.toString())):lt==="latestTime"&&(ht=new Date(ht).getTime(),Et=new Date(Et).getTime()),ht>Et?ct?-1:1:ht<Et?ct?1:-1:0}),it}function ee(it){Vt(it,T.sort.name,T.sort.isDesc),it.forEach(lt=>{if(lt.isFolder){let{folderELement:ct,fileNameElement:vt}=pops.isPhone()?rt(lt.fileName,"","",true):J(lt.fileName,"","",true);popsDOMUtils.on(vt,"click",pt=>{wt(pt,lt);}),nt.appendChild(ct);}else {let{folderELement:ct,fileNameElement:vt}=pops.isPhone()?rt(lt.fileName,lt.latestTime,lt.fileSize,false):J(lt.fileName,lt.latestTime,lt.fileSize,false);Ut(vt,lt),nt.appendChild(ct);}});}ee(T.folder);let ae=W.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");ae._config_=T.folder,popsDOMUtils.on(ae,"click",it=>{st(it,true,T.folder);});function pe(){[...Array.from(xt.querySelectorAll(".pops-folder-icon-active")),...Array.from(K.querySelectorAll(".pops-folder-icon-active")),...Array.from(z.querySelectorAll(".pops-folder-icon-active"))].forEach(it=>it.classList.remove("pops-folder-icon-active"));}function de(it,lt,ct){pe(),ct?lt.classList.add("pops-folder-icon-active"):it.classList.add("pops-folder-icon-active");}function ne(it,lt,ct){lt.notChangeSortRule||(T.sort.name=ct,T.sort.isDesc=!T.sort.isDesc);let vt=it.querySelector(".pops-folder-icon-arrow-up"),pt=it.querySelector(".pops-folder-icon-arrow-down");if(de(vt,pt,T.sort.isDesc),typeof T.sort.callback=="function"&&T.sort.callback(it,lt,T.sort.name,T.sort.isDesc))return;let ht=[];Array.from(nt.children).forEach(Mt=>{let Ct=Mt.__value__;Ct.target=Mt,ht.push(Ct);}),Vt(ht,T.sort.name,T.sort.isDesc).forEach(Mt=>{nt.appendChild(Mt.target);});}return popsDOMUtils.on(xt.closest("th"),"click",function(it){ne(xt,it,"fileName");},{capture:true}),popsDOMUtils.on(K.closest("th"),"click",void 0,function(it){ne(K,it,"latestTime");},{capture:true}),popsDOMUtils.on(z.closest("th"),"click",void 0,function(it){ne(z,it,"fileSize");},{capture:true}),T.sort.name==="fileName"?popsDOMUtils.trigger(xt,"click",{notChangeSortRule:true}):T.sort.name==="latestTime"?popsDOMUtils.trigger(K,"click",{notChangeSortRule:true}):T.sort.name==="fileSize"&&popsDOMUtils.trigger(z,"click",{notChangeSortRule:true}),T.drag&&PopsInstanceUtils.drag(q,{dragElement:Y,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handlePush(A,{guid:w,animElement:F,popsElement:q,maskElement:B,$shadowContainer:S,$shadowRoot:C}),PopsHandler.handleResultDetails(Q)}},PopsPanelConfig=()=>({title:{text:"默认标题",position:"center",html:false,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:false,attributes:[{"data-test":"test","data-test-2":"test2"}],forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},disabled:false,attributes:[],getValue(){return  true},callback(E,w){console.log("按钮开启状态：",w);}},{className:"panel-slider",text:"slider",type:"slider",props:{},attributes:[],getValue(){return 50},callback(E,w){console.log("滑块当前数值：",w);},min:1,max:100},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(E){console.log("点击按钮",E);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(E){console.log("点击按钮",E);}},{className:"panel-button",text:"button",type:"button",attributes:[],props:{},buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(E){console.log("点击按钮",E);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:true,attributes:[{"data-value":"value","data-value-2":"value2"}],forms:[{className:"panel-input",text:"input",type:"input",props:{},attributes:[],getValue(){return "50"},callback(E,w){console.log("输入框内容改变：",w);},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",props:{},attributes:[],getValue(){return "123456"},callback(E,w){console.log("密码输入框内容改变：",w);},isPassword:true,placeholder:"请输入密码"},{className:"panel-textarea",text:"textarea",type:"textarea",props:{},attributes:[],getValue(){return "50"},callback(E,w){console.log("textarea输入框内容改变：",w);},placeholder:"请输入内容"},{className:"panel-select",text:"select",type:"select",props:{},attributes:[],getValue(){return 50},callback(E,w,A){console.log(`select当前选项：${w}，当前选项文本：${A}`);},data:[{value:"all",text:"所有",disable(){return  false},forms:[]},{value:"text",text:"文本",disable(){return  false},forms:[]},{value:"html",text:"超文本",disable(){return  false},forms:[]}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",props:{},attributes:[],placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(E){console.log("select值改变，多选信息",E);},clickCallBack(E,w){console.log("点击",E,w);},closeIconClickCallBack(E,w){console.log("点击关闭图标的事件",w);},data:[{value:"select-1",text:"单选1",isHTML:false,disable(){return  false}},{value:"select-2",text:"单选2",isHTML:false,disable(){return  false}},{value:"select-3",text:"单选3",isHTML:false,disable(){return  false}},{value:"select-4",text:"单选4",isHTML:false,disable(){return  false}},{value:"select-5",text:"单选5",isHTML:false,disable(){return  false}}]},{type:"forms",text:"deep菜单",forms:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:true,afterAddToUListCallBack(E,w){console.log(E,w);},clickCallBack(E,w){console.log("进入子配置",E,w);},forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return  true},callback(E,w){console.log("按钮开启状态：",w);}},{className:"panel-slider",text:"slider",props:{},type:"slider",attributes:[],getValue(){return 50},callback(E,w){console.log("滑块当前数值：",w);},min:1,max:100},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"eleme",buttonIconIsLoading:true,buttonType:"warning",buttonText:"warning按钮",callback(E){console.log("点击按钮",E);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:true,buttonType:"danger",buttonText:"danger按钮",callback(E){console.log("点击按钮",E);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"upload",buttonIconIsLoading:false,buttonType:"info",buttonText:"info按钮",callback(E){console.log("点击按钮",E);}}]}]}]},{type:"forms",isFold:true,text:"折叠菜单",afterAddToUListCallBack(E,w){console.log(E,w);},forms:[{className:"panel-switch",text:"switch",props:{},type:"switch",attributes:[],getValue(){return  true},callback(E,w){console.log("按钮开启状态：",w);}}]}]}],btn:{close:{enable:true,callback(E){E.close();}}},mask:{enable:false,clickEvent:{toClose:false,toHide:false},clickCallBack:null},useShadowRoot:true,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:false,only:false,width:"700px",height:"500px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,drag:false,dragLimit:true,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:false,style:null,beforeAppendToPageCallBack(){}}),PopsMathFloatUtils={isFloat(E){return Number(E)===E&&E%1!==0},add(E,w){let A,T,S;try{A=E.toString().split(".")[1].length;}catch{A=0;}try{T=w.toString().split(".")[1].length;}catch{T=0;}return S=Math.pow(10,Math.max(A,T)),Math.round(E*S+w*S)/S},sub(E,w){let A,T,S;try{A=E.toString().split(".")[1].length;}catch{A=0;}try{T=w.toString().split(".")[1].length;}catch{T=0;}S=Math.pow(10,Math.max(A,T));let C=A>=T?A:T;return (Math.round(E*S-w*S)/S).toFixed(C)},division(E,w){let A,T,S,C;try{A=E.toString().split(".")[1].length;}catch{A=0;}try{T=w.toString().split(".")[1].length;}catch{T=0;}return S=Number(E.toString().replace(".","")),C=Number(w.toString().replace(".","")),S/C*Math.pow(10,T-A)}},PanelHandleContentDetails=()=>({asideULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$content:null,$contentAside:null,$contentSectionContainer:null},init(E){this.$el=null,this.$el={...E.$el},this.asideULElement=this.$el.$contentAside.querySelector("ul"),this.sectionContainerHeaderULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[0],this.sectionContainerULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[1];let w=null,A=false;E.config.content.forEach(T=>{let S=this.createAsideItem(T);if(this.setAsideItemClickEvent(S,T),this.asideULElement.appendChild(S),w==null){let C=false;typeof T.isDefault=="function"?C=!!T.isDefault():C=!!T.isDefault,C&&(w=S,A=!!T.scrollToDefaultView);}typeof T.afterRender=="function"&&T.afterRender({asideConfig:T,$asideLiElement:S});}),w==null&&this.asideULElement.children.length&&(w=this.asideULElement.children[0]),w?(w.click(),A&&(w==null||w.scrollIntoView())):console.error("pops.panel：左侧容器没有项");},clearContainer(){var E;PopsSafeUtils.setSafeHTML(this.sectionContainerHeaderULElement,""),PopsSafeUtils.setSafeHTML(this.sectionContainerULElement,""),(E=this.$el.$content)==null||E.querySelectorAll("section.pops-panel-deepMenu-container").forEach(w=>w.remove());},clearAsideItemIsVisited(){this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach(E=>{popsDOMUtils.removeClassName(E,"pops-is-visited");});},setAsideItemIsVisited(E){popsDOMUtils.addClassName(E,"pops-is-visited");},setElementAttributes(E,w){w!=null&&(Array.isArray(w)?w.forEach(A=>{this.setElementAttributes(E,A);}):Object.keys(w).forEach(A=>{E.setAttribute(A,w[A]);}));},setElementProps(E,w){w!=null&&Object.keys(w).forEach(A=>{let T=w[A];if(A==="innerHTML"){PopsSafeUtils.setSafeHTML(E,T);return}Reflect.set(E,A,T);});},setElementClassName(E,w){w!=null&&(typeof w=="function"&&(w=w()),typeof w=="string"?w.split(" ").forEach(T=>{E.classList.add(T);}):Array.isArray(w)&&w.forEach(A=>{this.setElementClassName(E,A);}));},createAsideItem(E){let w=document.createElement("li");return w.id=E.id,w.__forms__=E.forms,PopsSafeUtils.setSafeHTML(w,E.title),this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props),w},createSectionContainerItem_switch(E){let w=document.createElement("li");w.__formConfig__=E,this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="";E.description&&(A=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${A}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);const T={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!E.getValue()},$ele:{switch:w.querySelector(".pops-panel-switch"),input:w.querySelector(".pops-panel-switch__input"),core:w.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),E.disabled&&this.disable(),this.setClickEvent();},setClickEvent(){let S=this;popsDOMUtils.on(this.$ele.core,"click",void 0,function(C){S.$ele.input.disabled||S.$ele.switch.hasAttribute("data-disabled")||(S.$data.value=S.getStatus(),S.setStatus(S.$data.value),typeof E.callback=="function"&&E.callback(C,S.$data.value));});},setStatus(S=false){S=!!S,this.$ele.input.checked=S,S?popsDOMUtils.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):popsDOMUtils.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let S=false;return popsDOMUtils.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(S=true),S},disable(){this.$ele.input.disabled=true,this.$ele.switch.setAttribute("data-disabled","true");},notDisable(){this.$ele.input.disabled=false,this.$ele.switch.removeAttribute("data-disabled");}};return T.init(),w["data-switch"]=T,w},createSectionContainerItem_slider(E){let w=document.createElement("li");w.__formConfig__=E,this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="";E.description&&(A=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${A}</div>
				<div class="pops-panel-slider">
					<input type="range" min="${E.min}" max="${E.max}">
				</div>
			`);let T=w.querySelector(".pops-panel-slider input[type=range]");E.step&&T.setAttribute("step",E.step.toString()),T.value=E.getValue().toString();let S=function(k){return typeof E.getToolTipContent=="function"?E.getToolTipContent(k):k},C=pops.tooltip({target:T.parentElement,content:()=>S(T.value),zIndex:()=>PopsInstanceUtils.getPopsMaxZIndex().zIndex,className:"github-tooltip",alwaysShow:false,only:false,position:"top",arrowDistance:10});return popsDOMUtils.on(T,["input","propertychange"],void 0,function(k){C.toolTip.changeContent(S(T.value)),typeof E.callback=="function"&&E.callback(k,k.target.value);}),w},createSectionContainerItem_slider_new(E){let w=document.createElement("li");w.__formConfig__=E,this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="";E.description&&(A=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${A}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);const T={[Symbol.toStringTag]:"PopsPanelSlider",value:E.getValue(),min:E.min,max:E.max,step:E.step||1,$data:{isMove:false,isInitDragPosition:false,isCheckingStopDragMove:false,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{slider:w.querySelector(".pops-slider"),runAway:w.querySelector(".pops-slider__runway"),bar:w.querySelector(".pops-slider__bar"),buttonWrapper:w.querySelector(".pops-slider__button-wrapper"),button:w.querySelector(".pops-slider__button")},$interval:{isCheck:false},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.setRunAwayClickEvent(),this.intervalInit(),this.isFormConfigDisabledDrag()&&this.disableDrag();},intervalInit(S=200,C=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=true;let k=false,U=this.$data.totalWidth,L,_=setInterval(()=>{k?(this.$interval.isCheck=false,clearTimeout(L),clearInterval(_)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(k=true,this.$data.totalWidth!==U&&(PopsMathFloatUtils.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},S);L=setTimeout(()=>{clearInterval(_);},C);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),this.$ele.slider["data-min"]=this.min,this.$ele.slider["data-max"]=this.max,this.$ele.slider["data-value"]=this.value,this.$ele.slider["data-step"]=this.step;},initTotalWidth(){this.$data.totalWidth=popsDOMUtils.width(this.$ele.runAway);},initStepMap(){let S=0,C=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/C;let k=0;for(let U=this.min;U<=this.max;U+=this.step){let L=this.formatValue(U),_={};L===this.min?_={value:L,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:_={value:L,px:k,pxLeft:k-this.$data.stepPx/2,pxRight:k+this.$data.stepPx/2,percent:k/this.$data.totalWidth},this.$data.stepBlockMap.set(S,_),S++,k+=this.$data.stepPx;}},initFloatStepMap(){let S=0,C=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/C;let k=0;for(let U=this.min;U<=this.max;U=PopsMathFloatUtils.add(U,this.step)){let L=this.formatValue(U),_={};L===this.min?_={value:L,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:_={value:L,px:k,pxLeft:k-this.$data.stepPx/2,pxRight:k+this.$data.stepPx/2,percent:k/this.$data.totalWidth},this.$data.stepBlockMap.set(S,_),S++,k+=this.$data.stepPx;}},initSliderPosition(){let S=0;for(const[,C]of this.$data.stepBlockMap.entries())if(C.value==this.value){S=C.percent,this.$data.dragWidth=C.px;break}S=this.formatValue(S*100),this.setSliderPosition(S);},isFloat(S){return Number(S)===S&&S%1!==0},valueChangeCallBack(S,C){typeof E.callback=="function"&&E.callback(S,C);},getDragInfo(S){let C=this.$data.stepBlockMap.get(0);for(const[,k]of this.$data.stepBlockMap.entries())if(k.pxLeft<=S&&S<k.pxRight){C=k;break}return C},getSliderPositonPercent(S){return S/this.$data.totalWidth},formatValue(S){return PopsMathFloatUtils.isFloat(this.step)?S=parseFloat(S.toFixed(2)):S=parseInt(S.toString()),S},setSliderPosition(S){parseInt(S.toString())===1&&(S=1),S>1&&(S=S/100),this.$ele.buttonWrapper.style.left=`${S*100}%`,this.$ele.bar.style.width=`${S*100}%`;},disableDrag(){this.$ele.runAway.classList.add("pops-slider-is-disabled");},allowDrag(){this.$ele.runAway.classList.remove("pops-slider-is-disabled");},isDisabledDrag(){return this.$ele.runAway.classList.contains("pops-slider-is-disabled")},isFormConfigDisabledDrag(){return typeof E.disabled=="function"||typeof E.disabled=="boolean"?typeof E.disabled=="function"?E.disabled():E.disabled:false},setRunAwayClickEvent(){popsDOMUtils.on(this.$ele.runAway,"click",void 0,S=>{if(S.target!==this.$ele.runAway&&S.target!==this.$ele.bar)return;let C=parseFloat(S.offsetX);this.dragStartCallBack(),this.dragMoveCallBack(S,C,this.value),this.dragEndCallBack(C);},{capture:false});},dragStartCallBack(){if(!this.$data.isMove){if(this.isFormConfigDisabledDrag())return this.disableDrag(),false;this.isDisabledDrag()&&this.allowDrag(),this.$data.isMove=true;}return  true},dragMoveCallBack(S,C,k){let U=0;if(C<=0)U=0,this.value=this.min;else if(C>=this.$data.totalWidth)U=1,this.value=this.max;else {const L=this.getDragInfo(C);U=L.percent,this.value=this.formatValue(L.value);}this.$data.dragPercent=U,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),k!==this.value&&this.valueChangeCallBack(S,this.value);},dragEndCallBack(S){this.$data.isMove=false,S<=0?this.$data.dragWidth=0:S>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=S,this.closeToolTip();},setPanEvent(){const S=popsUtils.AnyTouch();this.$tooltip=new S(this.$ele.button,{preventDefault(){return  false}});let C=0;this.$tooltip.on("at:move",k=>{if(!this.dragStartCallBack())return;let U=this.value;const L=this.$ele.runAway.getBoundingClientRect();let _=k.x-(L.left+globalThis.screenX);_<=0?_=0:_>=L.width&&(_=L.width),C=_,this.dragMoveCallBack(k,C,U);}),this.$tooltip.on("at:end",k=>{this.dragEndCallBack(C);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=true;let S=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=false,this.closeToolTip(),clearInterval(S));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=false,clearInterval(S);},2e3);},setToolTipEvent(){function S(){return typeof E.getToolTipContent=="function"?E.getToolTipContent(T.value):T.value}let C=pops.tooltip({target:this.$ele.button,content:S,zIndex:()=>PopsInstanceUtils.getPopsMaxZIndex().zIndex,isFixed:true,className:"github-tooltip",only:false,eventOption:{capture:true,passive:true},showBeforeCallBack:()=>{if(!(typeof E.isShowHoverTip=="function"?E.isShowHoverTip():typeof E.isShowHoverTip=="boolean"?E.isShowHoverTip:true))return  false;this.intervalInit();},showAfterCallBack:k=>{C.toolTip.changeContent(S());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),false},alwaysShow:false,position:"top",arrowDistance:10});this.$data.tooltip=C;}};return T.init(),w["data-slider"]=T,w},createSectionContainerItem_input(E){let w=document.createElement("li");w.__formConfig__=E,this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="text";E.isPassword?A="password":E.isNumber&&(A="number");let T="";E.description&&(T=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${T}</div>
				<div class="pops-panel-input pops-user-select-none">
					<input type="${A}" placeholder="${E.placeholder}">
				</div>
				`);const S={[Symbol.toStringTag]:"PopsPanelInput",$ele:{panelInput:w.querySelector(".pops-panel-input"),input:w.querySelector("input"),inputSpanIcon:document.createElement("span"),inputSpanIconInner:null,icon:null},$data:{value:E.getValue(),isView:false},init(){this.initEle(),this.setInputValue(this.$data.value),E.isPassword?(this.setCircleIcon(pops.config.iconSVG.view),this.setCircleIconClickEvent()):this.$ele.input.value!=""&&(this.setCircleIcon(pops.config.iconSVG.circleClose),this.setCircleIconClickEvent()),this.setInputChangeEvent(),E.disabled&&this.disable(),typeof E.handlerCallBack=="function"&&E.handlerCallBack(w,this.$ele.input);},initEle(){this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon,this.$ele.input.nextSibling),this.$ele.inputSpanIcon.className="pops-panel-input__suffix",PopsSafeUtils.setSafeHTML(this.$ele.inputSpanIcon,`
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`),this.$ele.inputSpanIconInner=this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner"),this.$ele.icon=this.$ele.inputSpanIcon.querySelector(".pops-panel-icon");},disable(){this.$ele.input.disabled=true,this.$ele.panelInput.classList.add("pops-input-disabled");},notDisable(){this.$ele.input.disabled=false,this.$ele.panelInput.classList.remove("pops-input-disabled");},isDisabled(){return this.$ele.input.disabled},setInputValue(C=""){this.$ele.input.value=C;},setInputType(C="text"){this.$ele.input.setAttribute("type",C);},removeCircleIcon(){PopsSafeUtils.setSafeHTML(this.$ele.icon,"");},setCircleIcon(C=pops.config.iconSVG.circleClose){PopsSafeUtils.setSafeHTML(this.$ele.icon,C);},setCircleIconClickEvent(){popsDOMUtils.on(this.$ele.icon,"click",void 0,()=>{this.isDisabled()||(this.removeCircleIcon(),E.isPassword?this.$data.isView?(this.$data.isView=false,this.setInputType("text"),this.setCircleIcon(pops.config.iconSVG.hide)):(this.$data.isView=true,this.setInputType("password"),this.setCircleIcon(pops.config.iconSVG.view)):(this.setInputValue(""),this.$ele.input.focus(),this.$ele.input.dispatchEvent(new Event("input"))));});},setInputChangeEvent(){popsDOMUtils.on(this.$ele.input,["input","propertychange"],void 0,C=>{this.$data.value=this.$ele.input.value,E.isPassword||(this.$ele.input.value!==""&&this.$ele.icon.innerHTML===""?(this.setCircleIcon(pops.config.iconSVG.circleClose),this.setCircleIconClickEvent()):this.$ele.input.value===""&&this.removeCircleIcon()),typeof E.callback=="function"&&(E.isNumber?E.callback(C,this.$ele.input.value,this.$ele.input.valueAsNumber):E.callback(C,this.$ele.input.value));});}};return S.init(),w["data-input"]=S,w},createSectionContainerItem_textarea(E){let w=document.createElement("li");w.__formConfig__=E,this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="";E.description&&(A=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${A}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${E.placeholder??""}"></textarea>
				</div>
			`);const T={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{panelTextarea:w.querySelector(".pops-panel-textarea"),textarea:w.querySelector(".pops-panel-textarea textarea")},$data:{value:E.getValue()},init(){this.setValue(this.$data.value),this.setChangeEvent(),E.disabled&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");},notDisable(){this.$ele.textarea.removeAttribute("disabled"),this.$ele.panelTextarea.classList.remove("pops-panel-textarea-disable");},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||this.$ele.panelTextarea.classList.contains("pops-panel-textarea-disable")},setValue(S){this.$ele.textarea.value=S;},setChangeEvent(){popsDOMUtils.on(this.$ele.textarea,["input","propertychange"],void 0,S=>{this.$data.value=S.target.value,typeof E.callback=="function"&&E.callback(S,S.target.value);});}};return T.init(),w["data-textarea"]=T,w},createSectionContainerItem_select(E){const w=this;let A=document.createElement("li");A.__formConfig__=E,this.setElementClassName(A,E.className),this.setElementAttributes(A,E.attributes),this.setElementProps(A,E.props);let T="";E.description&&(T=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(A,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${T}</div>
				<div class="pops-panel-select pops-user-select-none">
					<select></select>
				</div>
				`);const S={[Symbol.toStringTag]:"PopsPanelSelect",$ele:{panelSelect:A.querySelector(".pops-panel-select"),select:A.querySelector(".pops-panel-select select")},$eleKey:{disable:"__disable__",value:"__value__",forms:"__forms__"},$data:{defaultValue:E.getValue()},init(){this.initOption(),this.setChangeEvent(),this.setClickEvent(),E.disabled&&this.disable();},setNodeValue(C,k,U){Reflect.set(C,k,U);},getNodeValue(C,k){return Reflect.get(C,k)},disable(){this.$ele.select.setAttribute("disabled","true"),this.$ele.panelSelect.classList.add("pops-panel-select-disable");},notDisable(){this.$ele.select.removeAttribute("disabled"),this.$ele.panelSelect.classList.remove("pops-panel-select-disable");},isDisabled(){return this.$ele.select.hasAttribute("disabled")||this.$ele.panelSelect.classList.contains("pops-panel-select-disable")},initOption(){E.data.forEach(C=>{let k=document.createElement("option");this.setNodeValue(k,this.$eleKey.value,C.value),this.setNodeValue(k,this.$eleKey.disable,C.disable),this.setNodeValue(k,this.$eleKey.forms,C.forms),C.value===this.$data.defaultValue&&this.setOptionSelected(k),k.innerText=C.text,this.$ele.select.appendChild(k);});},setOptionSelected(C){C.setAttribute("selected","true");},setSelectOptionsDisableStatus(){this.$ele.select.options&&this.$ele.select.options.length&&Array.from(this.$ele.select.options).forEach(C=>{this.setOptionDisableStatus(C);});},setOptionDisableStatus(C){let k=false,U=this.getNodeValue(C,this.$eleKey.disable);if(U==="function"){let L=this.getNodeValue(C,this.$eleKey.value);k=!!U(L);}k?C.setAttribute("disabled","true"):C.removeAttribute("disabled");},getSelectOptionInfo(C){let k=this.getNodeValue(C,this.$eleKey.value),U=C.innerText||C.textContent,L=this.getNodeValue(C,this.$eleKey.forms);return {value:k,text:U,forms:L,$option:C}},setChangeEvent(){popsDOMUtils.on(this.$ele.select,"change",void 0,C=>{let k=C.target[C.target.selectedIndex],U=this.getSelectOptionInfo(k);this.setSelectOptionsDisableStatus(),typeof E.callback=="function"&&E.callback(C,U.value,U.text);let L=typeof U.forms=="function"?U.forms():U.forms;if(Array.isArray(L)){let _="pops-panel-select-child-forms";for(;A.nextElementSibling&&A.nextElementSibling.classList.contains(_);)A.nextElementSibling.remove();let $=document.createElement("ul");$.className=_,popsDOMUtils.after(A,$),w.uListContainerAddItem(E,{ulElement:$});}});},setClickEvent(){popsDOMUtils.on(this.$ele.select,"click",void 0,C=>{this.setSelectOptionsDisableStatus(),typeof E.clickCallBack=="function"&&E.clickCallBack(C,this.$ele.select);});}};return S.init(),Reflect.set(A,"data-select",S),A},createSectionContainerItem_select_multiple_new(E){let w=document.createElement("li");Reflect.set(w,"__formConfig__",E),this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="";E.description&&(A=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${A}</div>
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
				`);const T={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0},$data:{defaultValue:E.getValue(),selectInfo:[]},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.updateTagElement(),this.setSelectContainerClickEvent();},initDefault(){E.data.forEach(S=>{this.$data.defaultValue.includes(S.value)&&this.$data.selectInfo.push({text:S.text,value:S.value,isHTML:!!S.isHTML,disable:S.disable});});},inintEl(){this.$el.$container=w.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=w.querySelector(".el-select__wrapper"),this.$el.$section=w.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=w.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=w.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=w.querySelector(".el-select__suffix"),this.$el.$suffixIcon=w.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let S="";if(typeof E.placeholder=="string")S=E.placeholder;else if(typeof E.placeholder=="function"){let k=E.placeholder();typeof k=="string"&&(S=k);}let C=popsDOMUtils.createElement("span",{innerText:S});this.$el.$selectedPlaceHolderWrapper.appendChild(C);},updateTagElement(){E.data.forEach(S=>{if(this.$data.selectInfo.find(k=>k.value===S.value)){let k=this.createSelectedItem({text:S.text,isHTML:S.isHTML});this.addSelectedItem(k.$tag),this.setSelectedItemCloseIconClickEvent({$tag:k.$tag,$closeIcon:k.$closeIcon,value:S.value,text:S.text});}}),this.checkTagEmpty();},createSelectedItem(S){const C=popsDOMUtils.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
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
						`}),k=C.querySelector(".el-select__tags-text"),U=C.querySelector(".el-icon.el-tag__close");return S.isHTML?PopsSafeUtils.setSafeHTML(k,S.text):k.innerText=S.text,{$tag:C,$tagText:k,$closeIcon:U}},addSelectedItem(S){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){let C=this.$el.$selectedInputWrapper.previousElementSibling;C?popsDOMUtils.after(C,S):popsDOMUtils.before(this.$el.$selectedInputWrapper,S);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){let C=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;C?popsDOMUtils.after(C,S):popsDOMUtils.before(this.$el.$selectedPlaceHolderWrapper,S);}else this.$el.$section.appendChild(S);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateSelectTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(S=>{S.remove();}),this.updateTagElement();},selectValueChangeCallBack(S){typeof E.callback=="function"&&E.callback(S||this.$data.selectInfo);},setSelectContainerClickEvent(){const S=this;popsDOMUtils.on(this.$el.$container,"click",C=>{let k=[];k=k.concat(S.$data.selectInfo);function U(X){X.classList.add("select-item-is-selected");}function L(X){X.classList.remove("select-item-is-selected");}function _(X){let Z=P(X);k.find(ut=>ut.value===Z.value)||k.push({value:Z.value,text:Z.text,isHTML:!!Z.isHTML,disable:Z.disable}),S.selectValueChangeCallBack(k);}function $(X){let Z=P(X),ot=k.findIndex(ut=>ut.value===Z.value);ot!==-1&&k.splice(ot,1),S.selectValueChangeCallBack(k);}function I(X){return X.classList.contains("select-item-is-selected")}function P(X){return Reflect.get(X,"data-info")}function R(){return Array.from(W.querySelectorAll(".select-item")).map(X=>{if(I(X))return P(X)}).filter(X=>X!=null)}function G(X){let Z=popsDOMUtils.createElement("li",{className:"select-item",innerHTML:`<span>${X.text}</span>`});return Reflect.set(Z,"data-info",X),Z}function D(X){X.setAttribute("aria-disabled","true");}function N(X){X.removeAttribute("aria-disabled"),X.removeAttribute("disabled");}function F(X){popsDOMUtils.on(X,"click",Z=>{if(popsDOMUtils.preventEvent(Z),!(X.hasAttribute("disabled")||X.ariaDisabled)){if(typeof E.clickCallBack=="function"){let ot=E.clickCallBack(Z,R());if(typeof ot=="boolean"&&!ot)return}I(X)?(L(X),$(X)):(U(X),_(X));}});}let{style:q,...Y}=E.selectConfirmDialogDetails||{},tt=popsUtils.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:`
									<ul class="select-container"></ul>
									`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(X,Z){S.$data.selectInfo=[...k],S.updateSelectTagItem(),X.close();}}},mask:{enable:true,clickCallBack(X,Z){X(),S.$data.selectInfo=[...k],S.updateSelectTagItem();},clickEvent:{toClose:true}},drag:true,dragLimit:true,width:"300px",height:"300px",style:`
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
								${q||""}
								`},Y),W=pops.alert(tt).$shadowRoot.querySelector(".select-container");E.data.forEach(X=>{let Z=G(X);if(W.appendChild(Z),F(Z),typeof X.disable=="function"&&X.disable(X.value)){D(Z);return}N(Z),k.find(ut=>ut.value===X.value)&&U(Z);});});},setSelectedItemCloseIconClickEvent(S){popsDOMUtils.on(S.$closeIcon,"click",C=>{if(popsDOMUtils.preventEvent(C),typeof E.closeIconClickCallBack=="function"){let k=E.closeIconClickCallBack(C,{$tag:S.$tag,$closeIcon:S.$closeIcon,value:S.value,text:S.text});if(typeof k=="boolean"&&!k)return}this.removeSelectedItem(S.$tag),this.removeSelectedInfo({value:S.value,text:S.text});},{capture:true});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedItem(S){S.remove(),this.checkTagEmpty();},removeSelectedInfo(S){for(let C=0;C<this.$data.selectInfo.length;C++)if(this.$data.selectInfo[C].value===S.value){this.$data.selectInfo.splice(C,1);break}this.selectValueChangeCallBack();},showInputWrapper(){popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){popsDOMUtils.cssHide(this.$el.$selectedInputWrapper,true);},showPlaceHolderWrapper(){popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper,true);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");}};return T.init(),Reflect.set(w,"data-select-multiple",T),w},createSectionContainerItem_button(E){let w=document.createElement("li");w.__formConfig__=E,this.setElementClassName(w,E.className),this.setElementAttributes(w,E.attributes),this.setElementProps(w,E.props);let A="";E.description&&(A=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`),PopsSafeUtils.setSafeHTML(w,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${A}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);const T={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:w.querySelector(".pops-panel-button"),button:w.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:w.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:w.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.setClickEvent();},initButton(){typeof E.buttonIcon=="string"&&E.buttonIcon.trim()!==""?(E.buttonIcon in pops.config.iconSVG?this.setIconSVG(pops.config.iconSVG[E.buttonIcon]):this.setIconSVG(E.buttonIcon),this.showIcon()):this.hideIcon();let S=E.buttonText;typeof E.buttonText=="function"&&(S=E.buttonText()),this.setButtonType(E.buttonType),E.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),E.disable&&this.disable(),this.setButtonText(S),this.setIconLoadingStatus(E.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(S){PopsSafeUtils.setSafeHTML(this.$ele.icon,S);},setIconLoadingStatus(S){this.$ele.icon.setAttribute("is-loading",(!!S).toString());},setHasIcon(S){this.$ele.button.setAttribute("data-icon",(!!S).toString());},setButtonType(S){this.$ele.button.setAttribute("type",S);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(S){PopsSafeUtils.setSafeHTML(this.$ele.spanText,S);},setClickEvent(){popsDOMUtils.on(this.$ele.button,"click",void 0,S=>{typeof E.callback=="function"&&E.callback(S);});}};return T.init(),w["data-button"]=T,w},createSectionContainerItem_deepMenu(E){let w=this,A=document.createElement("li");A.classList.add("pops-panel-deepMenu-nav-item"),A.__formConfig__=E,this.setElementClassName(A,E.className),this.setElementAttributes(A,E.attributes),this.setElementProps(A,E.props);let T="";E.description&&(T=`<p class="pops-panel-item-left-desc-text">${E.description}</p>`);let S=typeof E.arrowRightIcon=="boolean"?E.arrowRightIcon:true,C="";S&&(C=`<i class="pops-panel-deepMenu-arrowRight-icon">${pops.config.iconSVG.arrowRight}</i>`);let k="";E.rightText&&(k=`<p class="pops-panel-item-right-text">${E.rightText}</p>`),PopsSafeUtils.setSafeHTML(A,`
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${E.text}</p>${T}</div>
				<div class="pops-panel-deepMenu">${k}${C}</div>
				`);const U={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return w.$el.$contentSectionContainer}},init(){this.setLiClickEvent();},initFormItem(L,_){let $=_;if($.type==="forms"){let I=$.forms,P=document.createElement("li"),R=document.createElement("ul");R.classList.add("pops-panel-forms-container-item-formlist"),P.classList.add("pops-panel-forms-container-item");let G=popsDOMUtils.createElement("div",{className:"pops-panel-forms-container-item-header-text"});PopsSafeUtils.setSafeHTML(G,$.text),$.isFold&&(PopsSafeUtils.setSafeHTML(G,`
								<p>${$.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`),popsDOMUtils.on(G,"click",D=>{P.hasAttribute("data-fold-enable")?P.removeAttribute("data-fold-enable"):P.setAttribute("data-fold-enable","");}),G.classList.add("pops-panel-forms-fold-container"),G.classList.add("pops-user-select-none"),P.setAttribute("data-fold-enable",""),P.classList.add("pops-panel-forms-fold")),P.appendChild(G),w.setElementClassName(P,_.className),w.setElementAttributes(P,_.attributes),w.setElementProps(P,_.props),I.forEach(D=>{w.uListContainerAddItem(D,{ulElement:R,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:P,formHeaderDivElement:G});}),P.appendChild(R),L.appendChild(P),typeof $.afterAddToUListCallBack=="function"&&$.afterAddToUListCallBack(E,{target:P,ulElement:R,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:P,formHeaderDivElement:G});}else w.uListContainerAddItem(E,{ulElement:w.sectionContainerULElement});},gotoDeepMenu(L,_){var F,q;let $=_.closest("section.pops-panel-container");$&&popsDOMUtils.cssHide($,true);let I=popsDOMUtils.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"}),P=popsDOMUtils.createElement("ul",{className:"pops-panel-deepMenu-container-header-ul"}),R=popsDOMUtils.createElement("ul"),G=E.headerTitle??E.text,D=popsDOMUtils.createElement("div",{className:"pops-panel-deepMenu-container-header",innerHTML:`<p>${G}</p>`}),N=popsDOMUtils.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:pops.config.iconSVG.arrowLeft});if(popsDOMUtils.on(N,"click",void 0,Y=>{Y==null||Y.preventDefault(),Y==null||Y.stopPropagation();let tt=I.previousElementSibling;popsDOMUtils.cssShow(tt),I.remove();},{once:true}),(F=D.firstElementChild)==null||F.insertAdjacentElement("beforebegin",N),P.appendChild(D),I.appendChild(P),I.appendChild(R),E.forms&&Array.isArray(E.forms))for(let Y=0;Y<E.forms.length;Y++){let tt=E.forms[Y];this.initFormItem(R,tt);}(q=w.$el.$content)==null||q.appendChild(I),typeof E.afterEnterDeepMenuCallBack=="function"&&E.afterEnterDeepMenuCallBack(E,{sectionContainer:I,sectionContainerHeaderContainer:P,sectionContainerHeader:D,sectionBodyContainer:R});},setLiClickEvent(){popsDOMUtils.on(A,"click",void 0,async L=>{typeof E.clickCallBack=="function"&&await E.clickCallBack(L,E)||this.gotoDeepMenu(L,A);});}};return U.init(),A["data-deepMenu"]=U,A},createSectionContainerItem_own(E){let w=document.createElement("li");return w.__formConfig__=E,E.className&&(w.className=E.className),w=E.getLiElementCallBack(w),w},createSectionContainerItem(E){let w=E.type;if(w==="switch")return this.createSectionContainerItem_switch(E);if(w==="slider")return this.createSectionContainerItem_slider_new(E);if(w==="input")return this.createSectionContainerItem_input(E);if(w==="textarea")return this.createSectionContainerItem_textarea(E);if(w==="select")return this.createSectionContainerItem_select(E);if(w==="select-multiple")return this.createSectionContainerItem_select_multiple_new(E);if(w==="button")return this.createSectionContainerItem_button(E);if(w==="deepMenu")return this.createSectionContainerItem_deepMenu(E);if(w==="own")return this.createSectionContainerItem_own(E);console.error("尚未实现的type类型",E);},createSectionContainerItem_forms(E){let w=this,A=E;if(A.type==="forms"){let T=E.forms,S=document.createElement("li"),C=document.createElement("ul");C.classList.add("pops-panel-forms-container-item-formlist"),S.classList.add("pops-panel-forms-container-item");let k=popsDOMUtils.createElement("div",{className:"pops-panel-forms-container-item-header-text"});PopsSafeUtils.setSafeHTML(k,A.text),A.isFold&&(PopsSafeUtils.setSafeHTML(k,`
						<p>${A.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`),popsDOMUtils.on(k,"click",U=>{S.hasAttribute("data-fold-enable")?S.removeAttribute("data-fold-enable"):S.setAttribute("data-fold-enable","");}),k.classList.add("pops-panel-forms-fold-container"),k.classList.add("pops-user-select-none"),S.setAttribute("data-fold-enable",""),S.classList.add("pops-panel-forms-fold")),S.appendChild(k),w.setElementClassName(S,E.className),w.setElementAttributes(S,E.attributes),w.setElementProps(S,E.props),T.forEach(U=>{w.uListContainerAddItem(U,{ulElement:C,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:S,formHeaderDivElement:k});}),S.appendChild(C),w.sectionContainerULElement.appendChild(S),typeof A.afterAddToUListCallBack=="function"&&A.afterAddToUListCallBack(A,{target:S,ulElement:C,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:S,formHeaderDivElement:k});}else w.uListContainerAddItem(E,{ulElement:w.sectionContainerULElement});},uListContainerAddItem(E,w){let A=this.createSectionContainerItem(E);A&&w.ulElement.appendChild(A),typeof E.afterAddToUListCallBack=="function"&&E.afterAddToUListCallBack(E,{...w,target:A});},setAsideItemClickEvent(E,w){const A=this;popsDOMUtils.on(E,"click",void 0,T=>{this.clearContainer(),popsDOMUtils.cssShow(A.$el.$contentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(E);let S=w.headerTitle??w.title;if(typeof S=="string"&&S.trim()!==""){let k=document.createElement("li");k.__asideConfig__=w,PopsSafeUtils.setSafeHTML(k,S),this.sectionContainerHeaderULElement.appendChild(k);}E.__forms__.forEach(k=>{this.createSectionContainerItem_forms(k);}),typeof w.callback=="function"&&w.callback(T,this.sectionContainerHeaderULElement,this.sectionContainerULElement);});}}),PopsPanel$1={init(E){const w=popsUtils.getRandomGUID(),A="panel";let T=PopsPanelConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),E&&Array.isArray(E.content)&&(T.content=E.content),T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.panelCSS]);let k=PopsHandler.handleZIndex(T.zIndex),U=PopsElementHandler.getMaskHTML(w,k),L=PopsElementHandler.getHeaderBtnHTML(A,T),{headerStyle:_,headerPStyle:$}=PopsElementHandler.getHeaderStyle(A,T),I=PopsElementHandler.getAnimHTML(w,A,T,`
			<div class="pops-${A}-title" style="text-align: ${T.title.position};${_}">${T.title.html?T.title.text:`<p pops style="${$}">${T.title.text}</p>`}${L}</div>
			<div class="pops-${A}-content">
				<aside class="pops-${A}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${A}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,"",k),P=PopsElementHandler.parseElement(I),{popsElement:R,headerCloseBtnElement:G,titleElement:D,contentElement:N,contentAsideElement:F,contentSectionContainerElement:q}=PopsHandler.handleQueryElement(P,A);(T.isMobile||pops.isPhone())&&popsDOMUtils.addClassName(R,T.mobileClassName);let Y=null,tt=[P];if(T.mask.enable){let{maskElement:Z}=PopsHandler.handleMask({type:A,guid:w,config:T,animElement:P,maskHTML:U});Y=Z,tt.push(Y);}let nt=PopsHandler.handleEventDetails(w,S,C,A,P,R,Y,T);return PopsHandler.handleClickEvent("close",G,nt,T.btn.close.callback),popsDOMUtils.append(C,tt),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S),Y!=null&&P.after(Y),PanelHandleContentDetails().init({config:T,$el:{$content:N,$contentAside:F,$contentSectionContainer:q}}),PopsHandler.handlePush(A,{guid:w,animElement:P,popsElement:R,maskElement:Y,$shadowContainer:S,$shadowRoot:C}),T.drag&&PopsInstanceUtils.drag(R,{dragElement:D,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handleResultDetails(nt)}},rightClickMenuConfig=()=>({target:document.documentElement,targetSelector:null,data:[{icon:pops.config.iconSVG.search,iconIsLoading:false,text:"搜索",item:[],callback(E,w,A){console.log("点击："+this.text,[E,w,A]);}},{icon:pops.config.iconSVG.documentCopy,iconIsLoading:false,text:"复制",item:[],callback(E,w,A){console.log("点击："+this.text,[E,w,A]);}},{icon:pops.config.iconSVG.delete,text:"删除",iconIsLoading:false,item:[],callback(E,w,A){console.log("点击："+this.text,[E,w,A]);}},{icon:pops.config.iconSVG.loading,iconIsLoading:true,text:"加载",item:[],callback(E,w,A){return console.log("点击："+this.text,[E,w,A]),false}},{icon:pops.config.iconSVG.elemePlus,iconIsLoading:true,text:"饿了么",callback(E,w,A){return console.log("点击："+this.text,[E,w,A]),false},item:[{icon:"",iconIsLoading:false,text:"处理文件",item:[],callback(E,w,A){console.log("点击："+this.text,[E,w,A]);}},{icon:"",iconIsLoading:false,text:"其它处理",callback(E,w,A){console.log("点击："+this.text,[E,w,A]);},item:[{icon:pops.config.iconSVG.view,iconIsLoading:false,text:"查看",item:[],callback(E,w,A){console.log("点击："+this.text,[E,w,A]);}}]}]}],useShadowRoot:true,className:"",isAnimation:true,only:false,zIndex:1e4,preventDefault:true,style:null,beforeAppendToPageCallBack(){}}),PopsRightClickMenu={init(E){const w=popsUtils.getRandomGUID(),A="rightClickMenu";let T=rightClickMenuConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T=PopsHandler.handleOnly(A,T),T.target==null)throw "config.target 不能为空";E.data&&(T.data=E.data);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);if(PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.rightClickMenu]),T.style!=null){let U=popsDOMUtils.createElement("style",{innerHTML:T.style},{type:"text/css"});C.appendChild(U);}const k={rootElement:null,windowCheckClickEvent(U){if(!k.rootElement)return;let L=U.target;L.closest(`.pops-${A}`)||L.className&&L.className==="pops-shadow-container"&&L.shadowRoot!=null||k.closeAllMenu(k.rootElement);},shadowRootCheckClickEvent(U){!k.rootElement||U.target.closest(`.pops-${A}`)||k.closeAllMenu(k.rootElement);},addWindowCheckClickListener(){if(popsDOMUtils.on(globalThis,"click touchstart",void 0,k.windowCheckClickEvent,{capture:true}),T.target instanceof Node){const U=T.target.getRootNode();U instanceof ShadowRoot&&popsDOMUtils.on(U,"click touchstart",void 0,k.shadowRootCheckClickEvent,{capture:true});}},removeWindowCheckClickListener(){if(popsDOMUtils.off(globalThis,"click touchstart",void 0,k.windowCheckClickEvent,{capture:true}),T.target instanceof Node){const U=T.target.getRootNode();U instanceof ShadowRoot&&popsDOMUtils.off(U,"click touchstart",void 0,k.windowCheckClickEvent,{capture:true});}},contextMenuEvent(U){T.preventDefault&&popsDOMUtils.preventEvent(U),PopsHandler.handleOnly(A,T),k.rootElement&&k.closeAllMenu(k.rootElement);let L=k.showMenu(U,T.data);k.rootElement=L,T.only&&PopsHandler.handlePush(A,{$shadowRoot:C,$shadowContainer:S,guid:w,animElement:L,popsElement:L,beforeRemoveCallBack(_){k.closeAllMenu(_.popsElement);}});},addContextMenuEvent(U,L){popsDOMUtils.on(U,"contextmenu",L,k.contextMenuEvent);},removeContextMenuEvent(U,L){popsDOMUtils.off(U,"contextmenu",L,k.contextMenuEvent);},animationCloseMenu(U){function L(_){popsDOMUtils.off(U,popsDOMUtils.getTransitionEndNameList(),void 0,L,{capture:true}),U.remove();}U.classList.contains(`pops-${A}-anim-show`)?(popsDOMUtils.on(U,popsDOMUtils.getTransitionEndNameList(),void 0,L,{capture:true}),U.classList.remove(`pops-${A}-anim-show`)):U.remove();},closeAllMenu(U){var _,$;if(U==null)return;(_=U==null?void 0:U.__menuData__)!=null&&_.root&&(U=($=U==null?void 0:U.__menuData__)==null?void 0:$.root),U.__menuData__.child.forEach(I=>{this.animationCloseMenu(I);}),this.animationCloseMenu(U),k.rootElement=null;},getMenuContainerElement(U){let L=popsDOMUtils.createElement("div",{className:`pops-${A}`,innerHTML:`
					<ul></ul>
					`}),_=this.getMenuZIndex();return _>1e4&&(L.style.zIndex=_.toString()),U&&L.setAttribute("is-children","true"),T.isAnimation&&popsDOMUtils.addClassName(L,`pops-${A}-anim-grid`),L},getMenuZIndex(){return PopsHandler.handleZIndex(T.zIndex)},getOffset(U,L,_){let $=popsDOMUtils.width(U),I=popsDOMUtils.height(U),P=popsDOMUtils.width(globalThis)-$-1,R=popsDOMUtils.height(globalThis)-I-8,G=L,D=_;return G=G<0?0:G,G=G<P?G:P,D=D<0?0:D,D=D<R?D:R,{left:G,top:D}},showMenu(U,L){let _=this.getMenuContainerElement(false);Reflect.set(_,"__menuData__",{child:[]}),k.addMenuLiELement(U,_,_,L),popsDOMUtils.css(_,{display:"none"}),popsDOMUtils.append(C,_),document.contains(S)||(typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(C,S),popsDOMUtils.appendBody(S));let{left:$,top:I}=this.getOffset(_,U.clientX,U.clientY);return popsDOMUtils.css(_,{left:$,top:I,display:""}),T.isAnimation&&popsDOMUtils.addClassName(_,`pops-${A}-anim-show`),_},showClildMenu(U,L,_,$,I){let P=this.getMenuContainerElement(true);Reflect.set(P,"__menuData__",{parent:I,root:$}),Reflect.get($,"__menuData__").child.push(P),k.addMenuLiELement(U,$,P,_),popsDOMUtils.css(P,{display:"none"}),popsDOMUtils.append(C,P);let{left:G,top:D}=this.getOffset(P,L.clientX,L.clientY);return popsDOMUtils.css(P,{left:G,top:D,display:""}),T.isAnimation&&popsDOMUtils.addClassName(P,`pops-${A}-anim-show`),P},addMenuLiELement(U,L,_,$){let I=U.target,P=_.querySelector("ul");$.forEach(R=>{let G=popsUtils.parseTextToDOM("<li></li>");if(typeof R.icon=="string"&&R.icon.trim()!==""){let F=pops.config.iconSVG[R.icon]??R.icon,q=popsUtils.parseTextToDOM(`<i class="pops-${A}-icon" is-loading="${R.iconIsLoading}">${F}</i>`);G.appendChild(q);}G.insertAdjacentHTML("beforeend",PopsSafeUtils.getSafeHTML(`<span>${R.text}</span>`)),R.item&&Array.isArray(R.item)&&popsDOMUtils.addClassName(G,`pops-${A}-item`);function D(){Array.from(P.children).forEach(Y=>{if(popsDOMUtils.removeClassName(Y,`pops-${A}-is-visited`),!Y.__menuData__)return;function tt(nt){nt.querySelectorAll("ul li").forEach(W=>{var X;(X=W==null?void 0:W.__menuData__)!=null&&X.child&&tt(W.__menuData__.child);}),nt.remove();}tt(Y.__menuData__.child);});for(let Y=0;Y<L.__menuData__.child.length;Y++){let tt=L.__menuData__.child[Y];C.contains(tt)||(L.__menuData__.child.splice(Y,1),Y--);}if(popsDOMUtils.addClassName(G,`pops-${A}-is-visited`),!R.item)return;let F=G.getBoundingClientRect(),q=k.showClildMenu(U,{clientX:F.left+popsDOMUtils.outerWidth(G),clientY:F.top},R.item,L,G);G.__menuData__={child:q};}async function N(F){if(typeof R.callback=="function"){OriginPrototype.Object.defineProperty(U,"target",{get(){return I}});let q=await R.callback(F,U,G);if(typeof q=="boolean"&&q==false)return}Array.from(P.children).forEach(q=>{popsDOMUtils.off(q,"mouseenter touchstart");}),k.closeAllMenu(L);}popsDOMUtils.on(G,"mouseenter touchstart",void 0,D),popsDOMUtils.on(G,"click",void 0,N),P.appendChild(G);});}};return k.addContextMenuEvent(T.target,T.targetSelector),k.addWindowCheckClickListener(),{guid:w,config:T,removeWindowCheckClickListener:k.removeWindowCheckClickListener,addWindowCheckClickListener:k.addWindowCheckClickListener,removeContextMenuEvent:k.removeContextMenuEvent,addContextMenuEvent:k.addContextMenuEvent}}},searchSuggestionConfig=()=>({target:null,inputTarget:null,selfDocument:document,data:[{value:"数据1",text:"数据1-html"},{value:"数据2",text:"数据2-html"}],deleteIcon:{enable:true,callback(E,w,A){console.log("删除当前项",[E,w,A]),w.remove();}},useShadowRoot:true,className:"",isAbsolute:true,isAnimation:true,width:"250px",maxHeight:"300px",followTargetWidth:true,topDistance:0,position:"auto",positionTopToReverse:true,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:false,followPosition:"target",getItemHTML(E){return E.text??E},async getData(E){return console.log("当前输入框的值是：",E),[]},itemClickCallBack(E,w,A){console.log("item项的点击回调",[E,w,A]),this.inputTarget.value=A.value;},selectCallBack(E,w,A){console.log("item项的选中回调",[E,w,A]);},style:""}),PopsSearchSuggestion={init(E){const w=popsUtils.getRandomGUID(),A="searchSuggestion";let T=searchSuggestionConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),T.target==null)throw new TypeError("config.target 不能为空");T.inputTarget==null&&(T.inputTarget=T.target),E.data&&(T.data=E.data);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);if(PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.anim,pops.config.cssText.common]),T.style!=null){let U=document.createElement("style");popsDOMUtils.createElement("style",{innerHTML:T.style},{type:"text/css"}),C.appendChild(U);}const k={selfDocument:T.selfDocument,$el:{root:null,$hintULContainer:null,$dynamicCSS:null},$data:{isEmpty:true},init(U=document.body||document.documentElement){this.initEl(),k.update(typeof T.data=="function"?T.data():T.data),k.updateDynamicCSS(),k.changeHintULElementWidth(),k.changeHintULElementPosition(),k.hide(),T.isAnimation&&k.$el.root.classList.add(`pops-${A}-animation`),C.appendChild(k.$el.root),U.appendChild(S);},initEl(){this.$el.root=k.getSearchSelectElement(),this.$el.$dynamicCSS=this.$el.root.querySelector("style[data-dynamic]"),this.$el.$hintULContainer=k.$el.root.querySelector("ul");},getSearchSelectElement(){let U=popsDOMUtils.createElement("div",{className:`pops pops-${A}-search-suggestion`,innerHTML:`
						<style data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<ul class="pops-${A}-search-suggestion-hint">${T.toSearhNotResultHTML}</ul>
         				 `},{"data-guid":w,"type-value":A});return T.className!==""&&T.className!=null&&popsDOMUtils.addClassName(U,T.className),U},getDynamicCSS(){return `
				.pops-${A}-animation{
					-moz-animation: searchSelectFalIn 0.5s 1 linear;
					-webkit-animation: searchSelectFalIn 0.5s 1 linear;
					-o-animation: searchSelectFalIn 0.5s 1 linear;
					-ms-animation: searchSelectFalIn 0.5s 1 linear;
				}
				.pops-${A}-search-suggestion{
					border: initial;
					overflow: initial;
				}
				ul.pops-${A}-search-suggestion-hint{
					position: ${T.isAbsolute?"absolute":"fixed"};
					z-index: ${PopsHandler.handleZIndex(T.zIndex)};
					width: 0;
					left: 0;
					max-height: ${T.maxHeight};
					overflow-x: hidden;
					overflow-y: auto;
					padding: 5px 0;
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
				}
				/* 建议框在上面时 */
				ul.pops-${A}-search-suggestion-hint[data-top-reverse]{
					display: flex;
					flex-direction: column-reverse;
				}
				ul.pops-${A}-search-suggestion-hint[data-top-reverse] li{
					flex-shrink: 0;
				}
				ul.pops-${A}-search-suggestion-hint li{
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
				ul.pops-${A}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: #8e8e8e;
				}
				ul.pops-${A}-search-suggestion-hint li:hover{
					background-color: rgba(0, 0, 0, .1);
				}
				`},getSearchItemLiElement(U,L){return popsDOMUtils.createElement("li",{className:`pops-${A}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,"data-index":L,"data-value":k.getItemDataValue(U),innerHTML:`${T.getItemHTML(U)}${T.deleteIcon.enable?k.getDeleteIconHTML():""}`})},getItemDataValue(U){return U},setSearchItemClickEvent(U){popsDOMUtils.on(U,"click",void 0,L=>{popsDOMUtils.preventEvent(L),L.target.closest(`.pops-${A}-delete-icon`)?(typeof T.deleteIcon.callback=="function"&&T.deleteIcon.callback(L,U,U["data-value"]),this.$el.$hintULContainer.children.length||this.clear()):T.itemClickCallBack(L,U,U["data-value"]);},{capture:true});},setSearchItemSelectEvent(U){},setInputChangeEvent(U={capture:true}){(T.inputTarget instanceof HTMLInputElement||T.inputTarget instanceof HTMLTextAreaElement)&&(T.inputTarget.setAttribute("autocomplete","off"),popsDOMUtils.on(T.inputTarget,"input",void 0,async L=>{let _=await T.getData(L.target.value);k.update(_);},U));},removeInputChangeEvent(U={capture:true}){popsDOMUtils.off(T.inputTarget,"input",void 0,void 0,U);},showEvent(){k.updateDynamicCSS(),k.changeHintULElementWidth(),k.changeHintULElementPosition(),T.toHideWithNotResult&&k.$data.isEmpty?k.hide():k.show();},setShowEvent(U={capture:true}){if(T.followPosition==="target")popsDOMUtils.on([T.target],["focus","click"],void 0,k.showEvent,U);else if(T.followPosition==="input")popsDOMUtils.on([T.inputTarget],["focus","click"],void 0,k.showEvent,U);else if(T.followPosition==="inputCursor")popsDOMUtils.on([T.inputTarget],["focus","click","input"],void 0,k.showEvent,U);else throw new TypeError("未知followPosition："+T.followPosition)},removeShowEvent(U={capture:true}){popsDOMUtils.off([T.target,T.inputTarget],["focus","click"],void 0,k.showEvent,U),popsDOMUtils.off([T.inputTarget],["input"],void 0,k.showEvent,U);},hideEvent(U){if(U.target instanceof Node){if(S.contains(U.target)||T.target.contains(U.target)||T.inputTarget.contains(U.target))return;k.hide();}},setHideEvent(U={capture:true}){Array.isArray(k.selfDocument)?k.selfDocument.forEach(L=>{popsDOMUtils.on(L,["click","touchstart"],void 0,k.hideEvent,U);}):popsDOMUtils.on(k.selfDocument,["click","touchstart"],void 0,k.hideEvent,U);},removeHideEvent(U={capture:true}){Array.isArray(k.selfDocument)?k.selfDocument.forEach(L=>{popsDOMUtils.off(L,["click","touchstart"],void 0,k.hideEvent,U);}):popsDOMUtils.off(k.selfDocument,["click","touchstart"],void 0,k.hideEvent,U);},setAllEvent(U={capture:true}){k.setInputChangeEvent(U),k.setHideEvent(U),k.setShowEvent(U);},removeAllEvent(U={capture:true}){k.removeInputChangeEvent(U),k.removeHideEvent(U),k.removeShowEvent(U);},getDeleteIconHTML(U=16,L="#bababa"){return `
				<svg class="pops-${A}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${U}" height="${U}" fill="${L}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`},setPromptsInSearch(){let U=popsDOMUtils.createElement("li",{className:`pops-${A}-search-suggestion-hint-searching-item`,innerHTML:T.searchingTip});k.$el.$hintULContainer.appendChild(U);},removePromptsInSearch(){var U;(U=k.$el.$hintULContainer.querySelector(`li.pops-${A}-search-suggestion-hint-searching-item`))==null||U.remove();},clearAllSearchItemLi(){PopsSafeUtils.setSafeHTML(k.$el.$hintULContainer,"");},changeHintULElementPosition(U=T.target??T.inputTarget){let L=null;if(T.followPosition==="inputCursor"?L=popsDOMUtils.getTextBoundingRect(T.inputTarget,T.inputTarget.selectionStart||0,T.inputTarget.selectionEnd||0,false):L=T.isAbsolute?popsDOMUtils.offset(U):U.getBoundingClientRect(),L==null)return;let _=document.documentElement.clientHeight;T.isAbsolute&&(_=popsDOMUtils.height(document));let $=popsDOMUtils.width(document),I=T.position;if(T.position==="auto"){let R=L.bottom,G=popsDOMUtils.height(k.$el.$hintULContainer);R+G>_?I="top":(I="bottom",k.$el.$hintULContainer.removeAttribute("data-top"));}I==="top"?(T.positionTopToReverse&&k.$el.$hintULContainer.setAttribute("data-top-reverse","true"),k.$el.$hintULContainer.style.top="",k.$el.$hintULContainer.style.bottom=_-L.top+T.topDistance+"px"):I==="bottom"&&(k.$el.$hintULContainer.removeAttribute("data-top-reverse"),k.$el.$hintULContainer.style.bottom="",k.$el.$hintULContainer.style.top=L.height+L.top+T.topDistance+"px");let P=popsDOMUtils.width(k.$el.$hintULContainer);k.$el.$hintULContainer.style.left=(L.left+P>$?$-P:L.left)+"px";},changeHintULElementWidth(U=T.target??T.inputTarget){let L=U.getBoundingClientRect();T.followTargetWidth?k.$el.$hintULContainer.style.width=L.width+"px":k.$el.$hintULContainer.style.width=T.width;},updateDynamicCSS(){let U=this.getDynamicCSS();PopsSafeUtils.setSafeHTML(this.$el.$dynamicCSS,U);},update(U=[]){if(!Array.isArray(U))throw new TypeError("传入的数据不是数组");T.data=U,T.data.length?(k.$data.isEmpty=false,T.toHideWithNotResult&&k.show(),k.clearAllSearchItemLi(),T.data.forEach((L,_)=>{let $=k.getSearchItemLiElement(L,_);k.setSearchItemClickEvent($),k.setSearchItemSelectEvent($),k.$el.$hintULContainer.appendChild($);})):k.clear();},clear(){this.$data.isEmpty=true,this.clearAllSearchItemLi(),this.$el.$hintULContainer.appendChild(popsUtils.parseTextToDOM(T.toSearhNotResultHTML)),T.toHideWithNotResult&&this.hide();},hide(){this.$el.root.style.display="none";},show(){this.$el.root.style.display="";}};return k}},PopsTooltipConfig=()=>({useShadowRoot:true,target:null,content:"默认文字",position:"top",className:"",isFixed:false,alwaysShow:false,triggerShowEventName:"mouseenter touchstart",triggerCloseEventName:"mouseleave touchend",zIndex:1e4,only:false,eventOption:{passive:false,capture:true,once:false},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:true,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class ToolTip{constructor(w,A,T){et(this,"$el",{$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null});et(this,"$data",{config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]});this.$data.config=w,this.$data.guid=A,this.$el.$shadowContainer=T.$shadowContainer,this.$el.$shadowRoot=T.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){let w=this.createToolTip();this.$el.$toolTip=w.$toolTipContainer,this.$el.$content=w.$toolTipContent,this.$el.$arrow=w.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){let w=popsDOMUtils.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),A=w.querySelector(".pops-tip-content"),T=w.querySelector(".pops-tip-arrow");if(typeof this.$data.config.className=="string"&&this.$data.config.className.trim()!==""&&popsDOMUtils.addClassName(w,this.$data.config.className),w.style.zIndex=PopsHandler.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){let S=popsDOMUtils.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});w.appendChild(S);}return this.$data.config.showArrow||T.remove(),{$toolTipContainer:w,$toolTipArrow:T,$toolTipContent:A}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(w){w==null&&(w=this.getContent()),PopsSafeUtils.setSafeHTML(this.$el.$content,w);}getZIndex(){return PopsHandler.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const w=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",w.toString());}calcToolTipPosition(w,A,T){let S=popsDOMUtils.offset(w,!this.$data.config.isFixed),C=S.width,k=S.height,U=S.top,L=S.left,_=popsDOMUtils.outerWidth(this.$el.$toolTip),$=popsDOMUtils.outerHeight(this.$el.$toolTip),I=L+C/2-_/2,P=U+k/2-$/2;return {TOP:{left:I-T,top:U-$-A,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:L+C+A,top:P+T,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:I-T,top:U+k+A,arrow:"top",motion:"fadeInBottom"},LEFT:{left:L-_-A,top:P+T,arrow:"right",motion:"fadeInLeft"}}}changePosition(){let w=this.calcToolTipPosition(this.$data.config.target,this.$data.config.arrowDistance,this.$data.config.otherDistance),A=this.$data.config.position.toUpperCase(),T=w[A];T?(this.$el.$toolTip.style.left=T.left+"px",this.$el.$toolTip.style.top=T.top+"px",this.$el.$toolTip.setAttribute("data-motion",T.motion),this.$el.$arrow.setAttribute("data-position",T.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(w,A){w==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(A):this.$data.timeId_close_TouchEvent.push(A);}clearCloseTimeoutId(w,A){let T=w==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let S=0;S<T.length;S++){const C=T[S];if(typeof A=="number"){if(A==C){clearTimeout(A),T.splice(S,1);break}}else clearTimeout(C),T.splice(S,1),S--;}}show(...w){let T=w[0]instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(T),typeof this.$data.config.showBeforeCallBack=="function"){let S=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof S=="boolean"&&!S)return}popsUtils.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),popsDOMUtils.append(this.$el.$shadowRoot,this.$el.$toolTip)),popsUtils.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),popsDOMUtils.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){popsDOMUtils.on(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){popsDOMUtils.off(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,{capture:true});}close(...w){let A=w[0],T=A instanceof MouseEvent?"MouseEvent":"TouchEvent";if(A&&A instanceof MouseEvent){let C=A.composedPath()[0];if(C!=this.$data.config.target&&C!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){let C=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof C=="boolean"&&!C)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);let S=setTimeout(()=>{this.clearCloseTimeoutId(T,S),this.$el.$toolTip!=null&&this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(T,S),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){popsDOMUtils.on(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){popsDOMUtils.off(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,{capture:true});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){popsDOMUtils.on(this.$el.$toolTip,popsDOMUtils.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){popsDOMUtils.off(this.$el.$toolTip,popsDOMUtils.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),popsDOMUtils.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){popsDOMUtils.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(w){this.close(w);}onToolTipMouseLeaveEvent(){popsDOMUtils.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){popsDOMUtils.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}const PopsTooltip={init(E){const w=popsUtils.getRandomGUID(),A="tooltip";let T=PopsTooltipConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,E),!(T.target instanceof HTMLElement))throw "config.target 必须是HTMLElement类型";T=PopsHandler.handleOnly(A,T);const{$shadowContainer:S,$shadowRoot:C}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(C,[pops.config.cssText.index,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.tooltipCSS]);let k=new ToolTip(T,w,{$shadowContainer:S,$shadowRoot:C});return T.alwaysShow&&k.show(),{guid:w,config:T,$shadowContainer:S,$shadowRoot:C,toolTip:k}}};class Pops{constructor(){et(this,"config",{version:"2025.5.25",cssText:{index:indexCSS,ninePalaceGridPosition:ninePalaceGridPositionCSS,scrollbar:scrollbarCSS,button:buttonCSS,common:commonCSS,anim:animCSS,alertCSS,confirmCSS,promptCSS,loadingCSS,iframeCSS,tooltipCSS,drawerCSS,folderCSS,panelCSS,rightClickMenu:rightClickMenuCSS},iconSVG:{min:SVG_min,mise:SVG_mise,max:SVG_max,close:SVG_close,edit:SVG_edit,share:SVG_share,delete:SVG_delete,search:SVG_search,upload:SVG_upload,loading:SVG_loading,next:SVG_next,prev:SVG_prev,eleme:SVG_eleme,elemePlus:SVG_elemePlus,chromeFilled:SVG_chromeFilled,cpu:SVG_cpu,videoPlay:SVG_videoPlay,videoPause:SVG_videoPause,headset:SVG_headset,monitor:SVG_monitor,documentCopy:SVG_documentCopy,picture:SVG_picture,circleClose:SVG_circleClose,view:SVG_view,hide:SVG_hide,keyboard:SVG_keyboard,arrowRight:SVG_arrowRight,arrowLeft:SVG_arrowLeft},animation:{},isInit:false,layer:{alert:[],confirm:[],prompt:[],loading:[],iframe:[],tooltip:[],drawer:[],folder:[],panel:[],rightClickMenu:[]},forbiddenScroll:{event(w){return popsDOMUtils.preventEvent(w)}},Utils:popsUtils,DOMUtils:popsDOMUtils,InstanceUtils:PopsInstanceUtils,MathFloatUtils:PopsMathFloatUtils,panelHandleContentUtils:PanelHandleContentDetails});et(this,"GlobalConfig",GlobalConfig);et(this,"alert",w=>PopsAlert.init(w));et(this,"confirm",w=>PopsConfirm.init(w));et(this,"prompt",w=>PopsPrompt.init(w));et(this,"loading",w=>PopsLoading.init(w));et(this,"iframe",w=>PopsIframe.init(w));et(this,"tooltip",w=>PopsTooltip.init(w));et(this,"drawer",w=>PopsDrawer.init(w));et(this,"folder",w=>PopsFolder.init(w));et(this,"panel",w=>PopsPanel$1.init(w));et(this,"rightClickMenu",w=>PopsRightClickMenu.init(w));et(this,"searchSuggestion",w=>PopsSearchSuggestion.init(w));}init(){if(!this.config.isInit){this.config.isInit=true;let w=document.createElement("style");PopsSafeUtils.setSafeHTML(w,this.config.cssText.anim),popsDOMUtils.appendHead(w),this.config.animation=null,this.config.animation=PopsInstanceUtils.getKeyFrames(w.sheet),setTimeout(()=>{w.remove();},50);}}noConflict(){return typeof PopsCore.globalThis.pops=="object"&&popsUtils.delete(PopsCore.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&popsUtils.delete(unsafeWindow,"pops"),new Pops}isPhone(w=PopsCore.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(w)}}const pops=new Pops,PanelKeyConfig={asideLastVisit:"aside-last-visit"},Tag={success:"√ ",error:"× ",warn:"!!! ",info:""},TagUtil={setTagList(E,w){domUtils.html(E,"");let A="";w.forEach(T=>{A+=`
				<p class="${T.tag}">${T.text??""}</p>
			`;}),domUtils.html(E,A);},setTag(E,w,A){TagUtil.clearTag(E),domUtils.addClass(E,w),typeof A=="string"&&domUtils.html(E,A);},clearTag(E){Object.keys(Tag).forEach(w=>{domUtils.removeClass(E,w);});}},UIInfo=E=>({type:"own",getLiElementCallBack(A){let T=E(),S=domUtils.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text">${T.tag==null?T.text:Tag[T.tag]+T.text}</p>
					<p class="pops-panel-item-left-desc-text" style="${T.description==null||T.description===""?"display: none;":""}">${T.description||""}</p>
				`}),C=S.querySelector(".pops-panel-item-left-main-text"),k=["support-info"];return T.tag!=null&&k.push(T.tag),domUtils.addClass(C,k),A.appendChild(S),A},afterAddToUListCallBack(A,T){let S=E();if(typeof S.afterRender=="function"){let C=T.target,k=C.querySelector(".pops-panel-item-left-text"),U=C.querySelector(".pops-panel-item-left-main-text"),L=C.querySelector(".pops-panel-item-left-desc-text");try{S.afterRender({...T,$leftContainer:k,$leftText:U,$leftDesc:L});}catch(_){console.log(_),TagUtil.setTag(U,"error","afterRender 函数执行错误"+_);}}}}),CommonUtil={addBlockCSS(...E){let w=[];if(E.length!==0&&!(E.length===1&&typeof E[0]=="string"&&E[0].trim()===""))return E.forEach(A=>{Array.isArray(A)?w=w.concat(A):w.push(A);}),addStyle(`${w.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(E){let w=typeof _GM_getResourceText=="function"?_GM_getResourceText(E.keyName):"";typeof w=="string"&&w?addStyle(w):CommonUtil.addLinkNode(E.url);},async addLinkNode(E){let w=document.createElement("link");return w.rel="stylesheet",w.type="text/css",w.href=E,domUtils.ready(()=>{document.head.appendChild(w);}),w},fixUrl(E){return E=E.trim(),E.match(/^http(s|):\/\//i)||(E.startsWith("/")||(E+="/"),E=window.location.origin+E),E},escapeHtml(E){return E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},getTampoerMonkeyApiUrl(E,w){return w=w??E,`<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${E}" target="_blank">${w}</a>`}},GlobalUtil={getWindow(){return GMTotal.unsafeWindow.isSupport()?_unsafeWindow:window}};class TestUIBase{}class ApiTestBase extends TestUIBase{isSupportGM(){return typeof _GM=="object"&&_GM!=null}}class ApiAsyncTestBase extends ApiTestBase{}class ApiTest_addElement extends ApiAsyncTestBase{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof _GM.addElement=="function"}}isSupport(){return typeof _GM_addElement=="function"}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{let S=null,C=null;try{let k=GlobalUtil.getWindow(),U=w+"_test_script_exec";return S=_GM_addElement("script",{id:U,textContent:'window.GM_addElement_test_str = "bar";'}),C=document.querySelector("#"+U),S==null?{text:"GM_addElement is not retrun element",tag:"error"}:typeof k.GM_addElement_test_str!="string"?{text:"GM_addElement script element is not work",tag:"error"}:(Reflect.deleteProperty(k,"GM_addElement_test_str"),{text:CommonUtil.escapeHtml("支持添加<script>元素且执行js"),tag:"success"})}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{C==null||C.remove();}}),UIInfo(()=>{let S=null,C=null;try{let k="GM_addElement_test2";if(S=_GM_addElement(document.body,"div",{"data-src":"https://example.com/image.png",id:k}),C=document.querySelector("#"+k),!C)return {text:"不支持3个参数",tag:"error"};const U=C.attachShadow({mode:"closed"});return _GM_addElement(U,"style",{textContent:"div { color: black; };"}),U.querySelector("style")?S==null?{text:"传入3个参数但是返回为空",tag:"error"}:C.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{C==null||C.remove();}})),T}}class ApiTest_addStyle extends ApiAsyncTestBase{isSupport(){return typeof _GM_addStyle=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof _GM.addStyle=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-GM_addStyle"+w,title:w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{let S=null,C=null;try{return S=domUtils.createElement("div",{id:w,innerText:w+" test"}),document.body.appendChild(S),C=_GM_addStyle(`
                            #${w} {
                                background-color: rgb(255, 0, 0);
                            }
                        `),C==null?{text:w+" returns is null",tag:"error"}:window.getComputedStyle(S).backgroundColor!=="rgb(255, 0, 0)"?{text:w+" test element background is not rgb(255, 0, 0)",tag:"error"}:{text:CommonUtil.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{S==null||S.remove(),C==null||C.remove();}})),T}}class ApiTest_addValueChangeListener extends ApiAsyncTestBase{isSupport(){return typeof _GM_addValueChangeListener=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof _GM.addValueChangeListener=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push((()=>{let S=w+"_key_1";return UIInfo(()=>({text:"测试监听数据存储改变",description:"",tag:"info",afterRender(C){let k=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(C.$leftContainer,k);let U,L,_=[];domUtils.on(k,"click",$=>{utils.preventEvent($);try{_=[],clearTimeout(U),TagUtil.setTag(C.$leftText,"info","等待触发回调"),domUtils.text(C.$leftDesc,this.text),domUtils.show(C.$leftDesc,!1);let I=utils.formatTime(Date.now());L=L??_GM_addValueChangeListener(S,function(P,R,G,D){console.log(arguments),clearTimeout(U),_.push({tag:"success",text:"支持触发回调"}),typeof P!="string"?_.push({tag:"error",text:`不支持回调参数key，当前类型：${typeof P}`}):_.push({tag:"success",text:`支持回调参数key，当前类型：${typeof P}`}),typeof G!=typeof I?_.push({tag:"error",text:`不支持回调参数newValue，当前类型：${typeof I}`}):_.push({tag:"success",text:`支持回调参数newValue，当前类型：${typeof I}`}),typeof D!="boolean"?_.push({tag:"error",text:`不支持回调参数remote，当前类型：${typeof D}`}):_.push({tag:"success",text:`支持回调参数remote，当前类型：${typeof D}`}),TagUtil.setTagList(C.$leftText,_);}),console.log("GM_addValueChangeListener listenerId："+L+" typeof："+typeof L),typeof L!="number"&&typeof L!="string"?_.push({tag:"warn",text:"listenerId类型不是number或string"}):_.push({tag:"success",text:"listenerId类型："+typeof L}),U=setTimeout(()=>{_.push({tag:"error",text:"不支持触发回调"}),TagUtil.setTagList(C.$leftText,_);},3e3),_GM_setValue(S,I);}catch(I){qmsg.error(I.toString(),{consoleLogContent:true});}});}}))})()),T}}const PanelUISize={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class ApiTest_cookie extends ApiAsyncTestBase{isSupport(){return (typeof _GM_cookie=="object"||typeof _GM_cookie=="function")&&_GM_cookie!=null}getApiOption(){let w=this.isSupport();return {isSupportList:w&&typeof _GM_cookie.list=="function",isSupportSet:w&&typeof _GM_cookie.set=="function",isSupportDelete:w&&typeof _GM_cookie.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let w=this.isSupportGM()&&typeof _GM.cookie=="object"&&_GM.cookie!=null;return {name:"GM.cookie",isSupport:w,isSupportList:w&&typeof _GM.cookie.list=="function",isSupportSet:w&&typeof _GM.cookie.set=="function",isSupportDelete:w&&typeof _GM.cookie.delete=="function"}}getUIOption(){let w=this.getApiName(),A=this.getApiOption(),T=this.getAsyncApiOption(),S={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w+".list",`${w} & ${T.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(k){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]},C=S.forms[0].forms;if(this.isSupport()&&C.push(UIInfo(()=>A.isSupportList?{text:`支持 ${w}.list`,tag:"success"}:{text:`不支持 ${w}.list`,tag:"error"}),UIInfo(()=>A.isSupportSet?{text:`支持 ${w}.set`,tag:"success"}:{text:`不支持 ${w}.set`,tag:"error"}),UIInfo(()=>A.isSupportDelete?{text:`支持 ${w}.delete`,tag:"success"}:{text:`不支持 ${w}.delete`,tag:"error"})),T.isSupport?C.push(UIInfo(()=>T.isSupportList?{text:`支持 ${T.name}.list`,tag:"success"}:{text:`不支持 ${T.name}.list`,tag:"error"}),UIInfo(()=>T.isSupportSet?{text:`支持 ${T.name}.set`,tag:"success"}:{text:`不支持 ${T.name}.set`,tag:"error"}),UIInfo(()=>T.isSupportDelete?{text:`支持 ${T.name}.delete`,tag:"success"}:{text:`不支持 ${T.name}.delete`,tag:"error"})):C.push(UIInfo(()=>({text:"不支持 "+T.name,tag:"error"}))),this.isSupport()){let k={name:"test",value:"1",expirationDate:(Date.now()+864e5)/1e3};S.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("测试list获取所有Cookie"),tag:"info",description:"点击按钮进行测试",afterRender(U){let L=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);domUtils.on(L,"click",_=>{try{utils.preventEvent(_),_GM_cookie.list({},($,I)=>{console.log($),I?qmsg.error(I):Array.isArray($)?__pops.alert({title:{text:"GM_cookie.list",position:"center"},content:{text:JSON.stringify($,null,4),html:!0},drag:!0,mask:{enable:!0},width:PanelUISize.setting.width,height:PanelUISize.setting.height,style:`
															.pops-alert-content{
																white-space: pre-wrap;
															}
														`}):alert("获取的cookie信息不是数组");});}catch($){qmsg.error($.toString(),{consoleLogContent:!0});}}),domUtils.after(U.$leftContainer,L);}}}catch(U){return console.error(U),{text:"执行错误 "+U,tag:"error"}}finally{}}),UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("测试set新增Cookie"),tag:"info",description:JSON.stringify(k),afterRender(U){let L=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);domUtils.on(L,"click",_=>{try{utils.preventEvent(_),_GM_cookie.set(k,$=>{$?qmsg.error($,{consoleLogContent:!0}):qmsg.success("set cookie success");});}catch($){qmsg.error($.toString(),{consoleLogContent:!0});}}),domUtils.after(U.$leftContainer,L);}}}catch(U){return console.error(U),{text:"执行错误 "+U,tag:"error"}}finally{}}),UIInfo(()=>{try{let U={name:"test"};return {text:CommonUtil.escapeHtml("测试delete删除Cookie"),tag:"info",description:JSON.stringify(U),afterRender(L){let _=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,!1,!1);domUtils.on(_,"click",$=>{try{utils.preventEvent($),_GM_cookie.delete(U,I=>{I?qmsg.error(I,{consoleLogContent:!0}):qmsg.success("delete cookie success");});}catch(I){qmsg.error(I.toString(),{consoleLogContent:!0});}}),domUtils.after(L.$leftContainer,_);}}}catch(U){return console.error(U),{text:"执行错误 "+U,tag:"error"}}finally{}}));}return S}}class ApiTest_deleteValue extends ApiAsyncTestBase{isSupport(){return typeof _GM_deleteValue=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof _GM.deleteValue=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.name?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push((()=>{let S="Test GM_deleteValue null",C=null;return UIInfo(()=>({text:"测试存储null值并删除",description:`"${S}": ${C}`,tag:"info",afterRender(k){let U=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(k.$leftContainer,U),domUtils.on(U,"click",L=>{utils.preventEvent(L);try{_GM_setValue(S,C),_GM_deleteValue(S);let _=_GM_getValue(S);typeof _=="object"&&_===null?qmsg.error("该值未删除，读取的值："+_):qmsg.success("成功删除该值");}catch(_){qmsg.error(_.toString(),{consoleLogContent:true});}});}}))})()),T}}class ApiTest_deleteValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_deleteValues=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof _GM.deleteValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push((()=>{let S={GM_deleteValues_key_1:555,"GM.deleteValues_key_2":666};return UIInfo(()=>({text:"测试存储对象然后删除再读取",description:`${JSON.stringify(S)}`,tag:"info",afterRender(C){let k=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(C.$leftContainer,k),domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_setValues(S);let L=Object.keys(S),_=_GM_getValues(L);if(JSON.stringify(_)!==JSON.stringify(S)){qmsg.error("写入失败，写入的数据和读取的数据不相同");return}_GM_deleteValues(L);let $=_GM_getValues(L);$==null?qmsg.warning("删除情况未知，因为读取到的数据为null"):typeof $=="object"&&JSON.stringify($)==="{}"?qmsg.success("删除成功，读取的数据为{}"):(qmsg.error("删除情况未知，因为读取到的数据类型不是object"),console.log($));}catch(L){qmsg.error(L.toString(),{consoleLogContent:true});}});}}))})()),T}}class ApiTest_download extends ApiAsyncTestBase{isSupport(){return typeof _GM_download=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof _GM.download=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>({text:CommonUtil.escapeHtml("TODO"),tag:"info",afterRender(S){var C;(C=S.target)==null||C.querySelector(".support-info");}}))),T}}class ApiTest_getResourceText extends ApiAsyncTestBase{isSupport(){return typeof _GM_getResourceText=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof _GM.getResourceText=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return typeof _GM_getResourceText("ViewerCSS")=="string"?{text:CommonUtil.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:CommonUtil.escapeHtml("GM_getResourceText return is not string"),tag:"error"}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_getResourceUrl extends ApiAsyncTestBase{isSupport(){return typeof _GM_getResourceURL=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof _GM.getResourceUrl=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{let S=_GM_getResourceURL("ViewerCSS");return typeof S=="string"?S.trim().startsWith("data:text/css;base64")?{text:CommonUtil.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:CommonUtil.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"}:{text:CommonUtil.escapeHtml("GM_getResourceURL return is not string"),tag:"error"}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_getTab extends ApiAsyncTestBase{isSupport(){return typeof _GM_getTab=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof _GM.getTab=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>({text:"测试获取当前Tab",description:"",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);domUtils.after(S.$leftContainer,C);let k;domUtils.on(C,"click",U=>{utils.preventEvent(U),domUtils.text(S.$leftDesc,this.text),domUtils.show(S.$leftDesc,false);try{clearTimeout(k),qmsg.info("等待3s内触发成功复制的回调"),k=setTimeoutLog(()=>{TagUtil.setTag(S.$leftText,"error","不支持触发回调函数");},3e3),_GM_getTab(L=>{clearTimeout(k),typeof L=="object"&&L!=null?TagUtil.setTagList(S.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"success",text:"入参tab为object类型"}]):TagUtil.setTagList(S.$leftText,[{tag:"success",text:"支持触发回调函数"},{tag:"error",text:"入参tab不为object类型"}]);});}catch(L){qmsg.error(L.toString(),{consoleLogContent:true});}});}}))),T}}class ApiTest_getTabs extends ApiAsyncTestBase{isSupport(){return typeof _GM_getTabs=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof _GM.getTabs=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_getValue extends ApiAsyncTestBase{isSupport(){return typeof _GM_getValue=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof _GM.getValue=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(...[{key:"Test GM_getValue boolean",value:true,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue number",value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue string",value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_getValue undefined",value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue null",value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue object",value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(S=>(()=>{let C=S.key,k=S.value;return UIInfo(()=>({text:S.text(),description:S.desc(),tag:"info",afterRender(U){let L=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(U.$leftContainer,L),domUtils.on(L,"click",_=>{utils.preventEvent(_);try{_GM_setValue(C,k);let $=_GM_getValue(C);if(typeof $==typeof k){if(k===null&&k!=$){qmsg.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}qmsg.success("读取成功，存储类型和读取类型一致");}else qmsg.error("读取成功，但存储类型和读取类型不同");}catch($){qmsg.error($.toString(),{consoleLogContent:true});}});}}))})()),(()=>{let S="Test GM_getValue null with defaultValue",C=123;return UIInfo(()=>({text:"存储object类型的null，读取时指定默认值为"+C,description:`GM_getValue("${S}", ${C})`,tag:"info",afterRender(k){let U=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(k.$leftContainer,U),domUtils.on(U,"click",L=>{utils.preventEvent(L);try{_GM_setValue(S,null);let _=_GM_getValue(S,C);typeof _=="object"&&_==null?qmsg.success("读取的值是存储的值："+_):qmsg.error("读取的值不是存储的值："+_);}catch(_){qmsg.error(_.toString(),{consoleLogContent:true});}});}}))})(),(()=>{let S="Test GM_getValue defaultValue",C=123;return UIInfo(()=>({text:"不存储，测试调用默认值",description:`GM_getValue("${S}", ${C})`,tag:"info",afterRender(k){let U=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(k.$leftContainer,U),domUtils.on(U,"click",L=>{utils.preventEvent(L);try{let _=_GM_getValue(S,C);typeof _==typeof C?qmsg.success("读取的值是默认值："+_):qmsg.error("读取的值不是默认值："+_);}catch(_){qmsg.error(_.toString(),{consoleLogContent:true});}});}}))})()),T}}class ApiTest_getValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_getValues=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof _GM.getValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>({text:"测试直接读取",description:"没有入参",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);domUtils.after(S.$leftContainer,C),domUtils.on(C,"click",k=>{utils.preventEvent(k);try{let U=_GM_getValues();qmsg.info("请在控制台查看读取的数据"),console.log(U);}catch(U){qmsg.error(U.toString(),{consoleLogContent:true});}});}})),UIInfo(()=>{let S={"GM_getValues-test-key-non-exists-1":1111,"GM_getValues-test-key-non-exists-2":2222};return {text:"测试读取不存在的数据",description:"数据默认值："+JSON.stringify(S),tag:"info",afterRender(C){let k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);domUtils.after(C.$leftContainer,k),domUtils.on(k,"click",U=>{utils.preventEvent(U);try{let L=_GM_getValues(S);console.log(L),L==null?qmsg.error("读取失败，读取的数据为null"):JSON.stringify(L)===JSON.stringify(S)?qmsg.success("读取成功，读取的数据和默认值相同"):qmsg.error("读取成功，但读取的数据和默认值不同");}catch(L){qmsg.error(L.toString(),{consoleLogContent:true});}});}}}),(()=>{let S={"GM_getValues-test-key-1":1,"GM_getValues-test-key-2":2};return UIInfo(()=>({text:"测试存储对象并读取",description:JSON.stringify(S),tag:"info",afterRender(C){let k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);domUtils.after(C.$leftContainer,k),domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_setValues(S);let L=Object.keys(S),_=_GM_getValues(L);console.log(_),_==null?qmsg.error("读取失败，读取的数据为null"):JSON.stringify(_)===JSON.stringify(S)?qmsg.success("读取成功，写入的数据和读取的数据相同"):qmsg.error("读取成功，但写入的数据和读取的数据不同");}catch(L){qmsg.error(L.toString(),{consoleLogContent:true});}});}}))})()),T}}class ApiTest_info extends ApiAsyncTestBase{isSupport(){return typeof _GM_info=="object"&&_GM_info!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof _GM.info=="object"}}getUIOption(){var S,C;let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(k){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(...[{value:_GM_info==null?void 0:_GM_info.scriptHandler,type:"string",text:"GM_info.scriptHandler"},{value:_GM_info==null?void 0:_GM_info.scriptMetaStr,type:"string",text:"GM_info.scriptMetaStr"},{value:_GM_info==null?void 0:_GM_info.version,type:"string",text:"GM_info.version"},{value:_GM_info==null?void 0:_GM_info.script,type:"object",text:"GM_info.script"},{value:(S=_GM_info==null?void 0:_GM_info.script)==null?void 0:S.name,type:"string",text:"GM_info.script.name"},{value:(C=_GM_info==null?void 0:_GM_info.script)==null?void 0:C.version,type:"string",text:"GM_info.script.version"}].map(k=>UIInfo(()=>{try{return k.value!=null&&typeof k.value===k.type?{text:"支持 "+k.text+" 类型："+k.type,tag:"success"}:{text:"不支持 "+k.text+" 类型："+k.type,tag:"error"}}catch(U){return console.error(U),{text:"执行错误 "+U,tag:"error"}}finally{}}))),T}}class ApiTest_listValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_listValues=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof _GM.listValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>({text:"查看存储的所有键名",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);domUtils.after(S.$leftContainer,C),domUtils.on(C,"click",k=>{utils.preventEvent(k);try{let U=_GM_listValues();Array.isArray(U)?U.find(_=>typeof _!="string")?qmsg.error("返回值数组中存在非string类型"):alert(JSON.stringify(U,null,4)):qmsg.error("返回值不是数组");}catch(U){qmsg.error(U.toString(),{consoleLogContent:true});}});}}))),T}}class ApiTest_log extends ApiAsyncTestBase{isSupport(){return typeof _GM_log=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof _GM.log=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{let S="test GM_log";return {text:CommonUtil.escapeHtml("请在控制台查看输出"),tag:"info",description:"test GM_log",afterRender(C){let k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_log(S);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(C.$leftContainer,k);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_notification extends ApiAsyncTestBase{isSupport(){return typeof _GM_notification=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof _GM.notification=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{let S,C,k=!1,U=!1,L=!1;return {text:"点击通知的内容用于测试函数是否生效",description:"",tag:"info",afterRender(_){S=_.target,C=_.$leftContainer;let $=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),I,P,R=utils.debounce(()=>{try{clearTimeout(I),clearInterval(P);let G="",D="success",N="",F="success";k?(G+="支持 onclick 函数",U?(G=G.trim(),G+="且支持提供 event 参数"):(G+="但是不支持提供 event 参数",D="warn")):(G+="不支持 onclick 函数",D="error"),L?N+="支持 ondone 函数":(N+="不支持 ondone 函数",F="error"),domUtils.html(_.$leftText,`
										<p class="${D}">${G}</p>
										<p class="${F}">${N}</p>
									`),k=!1,L=!1,U=!1;}catch(G){qmsg.error(G.toString(),{consoleLogContent:!0});}},800);domUtils.on($,"click",G=>{try{utils.preventEvent(G),clearTimeout(I),clearInterval(P);let D=10,N=D,F=()=>{let q=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${N}s`;return N--,q};domUtils.text(_.$leftText,F()),domUtils.text(_.$leftDesc,this.text),domUtils.show(_.$leftDesc,!1),I=setTimeoutLog(()=>{clearInterval(P),TagUtil.setTag(_.$leftText,"error","测试超时，未触发回调");},D*1e3),P=setInterval(()=>{domUtils.text(_.$leftText,F());},1e3),_GM_notification({title:"测试 GM_notification 标题",text:"测试 GM_notification 内容",url:"https:/example.com/",onclick:q=>{k=!0,q&&(U=!0,q.preventDefault()),R();},ondone(){L=!0,R();}});}catch(D){qmsg.error(D.toString(),{consoleLogContent:!0});}}),domUtils.after(C,$);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}}),UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("点击通知的内容跳转链接"),tag:"info",afterRender(S){let C=S.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_notification({title:"测试 GM_notification 标题",text:"测试 GM_notification 内容",url:"https:/example.com/"});}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(S.$leftContainer,k);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}})),T}}class ApiTest_openInTab extends ApiAsyncTestBase{isSupport(){return typeof _GM_openInTab=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof _GM.openInTab=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:"后台打开：https://www.example.com/",tag:"info",afterRender(S){let C=S.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);domUtils.on(k,"click",U=>{try{utils.preventEvent(U),domUtils.text(S.$leftDesc,this.text),domUtils.show(S.$leftDesc,!1);let L=_GM_openInTab("https://www.example.com/");if(typeof L=="object")if(L==null)TagUtil.setTag(S.$leftText,"error","返回值为null");else {let _="close"in L&&typeof L.close=="function",$="closed"in L&&typeof L.closed=="boolean",I="onclose"in L;domUtils.html(S.$leftText,`
													${_?'<p class="success">支持 .close()</p>':'<p class="error">不支持 .close()</p>'}
													${$?'<p class="success">支持 .closed</p>':'<p class="error">不支持 .closed</p>'}
													${I?'<p class="success">支持设置属性 .onclose</p>':'<p class="error">不支持设置属性 .onclose</p>'}
										`);}else TagUtil.setTag(S.$leftText,"error","返回值不是对象："+typeof L);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(S.$leftContainer,k);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}}),UIInfo(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(S){let C=S.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),U,L=()=>{clearTimeout(U),TagUtil.setTag(S.$leftText,"success","测试新标签页打开成功");};domUtils.on(k,"click",_=>{try{utils.preventEvent(_),domUtils.off(_unsafeWindow,"blur",L,{capture:!0}),clearTimeout(U),TagUtil.setTag(S.$leftText,"info","等待页面失去焦点..."),domUtils.text(S.$leftDesc,this.text),domUtils.show(S.$leftDesc,!1),domUtils.on(_unsafeWindow,"blur",L,{capture:!0,once:!0}),_GM_openInTab("https://www.example.com/",{active:!0}),U=setTimeoutLog(()=>{domUtils.off(_unsafeWindow,"blur",L,{capture:!0}),TagUtil.setTag(S.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch($){qmsg.error($.toString(),{consoleLogContent:!0});}}),domUtils.after(S.$leftContainer,k);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}}),UIInfo(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(S){let C=S.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),U;domUtils.on(k,"click",L=>{try{utils.preventEvent(L),clearTimeout(U),TagUtil.setTag(S.$leftText,"info","等待调用 .close()"),domUtils.text(S.$leftDesc,this.text),domUtils.show(S.$leftDesc,!1);let _=_GM_openInTab("https://www.example.com/");_&&typeof(_==null?void 0:_.close)=="function"?U=setTimeoutLog(()=>{try{_.close(),TagUtil.setTag(S.$leftText,"success","成功调用 .close()");}catch($){TagUtil.setTag(S.$leftText,"error","调用 .close() 方法失败 "+$);}},1e3):TagUtil.setTag(S.$leftText,"error","返回对象中不支持 .close() 方法");}catch(_){qmsg.error(_.toString(),{consoleLogContent:!0});}}),domUtils.after(S.$leftContainer,k);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}}),UIInfo(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(S){let C=S.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),U,L;domUtils.on(k,"click",_=>{try{utils.preventEvent(_),clearTimeout(L),clearTimeout(U),TagUtil.setTag(S.$leftText,"info","等待触发监听 .onclose"),domUtils.text(S.$leftDesc,this.text),domUtils.show(S.$leftDesc,!1);let $=_GM_openInTab("https://www.example.com/");typeof $=="object"&&$!=null&&($.onclose=()=>{clearTimeout(U),clearTimeout(L),TagUtil.setTag(S.$leftText,"success","成功触发 .onclose");}),$&&typeof($==null?void 0:$.close)=="function"?U=setTimeoutLog(()=>{try{$.close(),L=setTimeoutLog(()=>{TagUtil.setTag(S.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch(I){TagUtil.setTag(S.$leftText,"error","调用 .close() 方法失败 "+I);}},1e3):TagUtil.setTag(S.$leftText,"error","返回对象中不支持 .close() 方法");}catch($){qmsg.error($.toString(),{consoleLogContent:!0});}}),domUtils.after(S.$leftContainer,k);}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}})),T}}class ApiTest_registerMenuCommand extends ApiAsyncTestBase{isSupport(){return typeof _GM_registerMenuCommand=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof _GM.registerMenuCommand=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.after(S.$leftContainer,C);let k,U;domUtils.on(C,"click",L=>{try{utils.preventEvent(L),clearTimeout(k),clearInterval(U),domUtils.text(S.$leftDesc,this.text),domUtils.show(S.$leftDesc,!1);let _=10,$=()=>{let P=`已执行注册菜单，请在${_}s内点击菜单项`;return _--,P};TagUtil.setTag(S.$leftText,"info",$()),U=setInterval(()=>{TagUtil.setTag(S.$leftText,"info",$());},1e3),k=setTimeoutLog(()=>{clearInterval(U),TagUtil.setTag(S.$leftText,"error","测试超时，未触发回调");},10*1e3);const I=_GM_registerMenuCommand("Test Menu",P=>{try{clearInterval(U),clearTimeout(k),TagUtil.clearTag(S.$leftText);let R=[];R.push({tag:"success",text:"支持注册菜单"}),P?R.push({tag:"success",text:"支持点击回调且有event参数"}):R.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof I=="number"||typeof I=="string"?R.push({tag:"success",text:"函数返回值是string|number"}):R.push({tag:"error",text:"函数返回值不是string|number："+typeof I}),domUtils.html(S.$leftText,R.map(G=>`<p class="${G.tag}">${G.text}</p>`).join(`
`));}catch(R){qmsg.error(R.toString(),{consoleLogContent:!0});}});}catch(_){qmsg.error(_.toString(),{consoleLogContent:!0});}});}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}}),UIInfo(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.after(S.$leftContainer,C);let k;domUtils.on(C,"click",U=>{try{utils.preventEvent(U),clearTimeout(k);const L=_GM_registerMenuCommand("Test Update Menu",_=>{});qmsg.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(k),k=setTimeoutLog(()=>{_GM_registerMenuCommand("Test Update Menu Success!!!",()=>{},{id:L}),qmsg.success("已执行更新菜单命令，请自行验证");},3e3);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}});}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_removeValueChangeListener extends ApiAsyncTestBase{isSupport(){return typeof _GM_removeValueChangeListener=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof _GM.removeValueChangeListener=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push((()=>{let S=w+"_key_1";return UIInfo(()=>({text:"测试移除监听器",description:"",tag:"info",afterRender(C){let k=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(C.$leftContainer,k);let U=[];domUtils.on(k,"click",L=>{utils.preventEvent(L);try{U=[],TagUtil.setTag(C.$leftText,"info","等待移除监听器"),domUtils.text(C.$leftDesc,this.text),domUtils.show(C.$leftDesc,!1);let _=utils.formatTime(Date.now()),$=_GM_addValueChangeListener(S,function(I,P,R,G){console.log(arguments),U.push({tag:"error",text:"未成功移除监听器"}),TagUtil.setTagList(C.$leftText,U);});_GM_removeValueChangeListener($),U.push({tag:"success",text:"支持移除监听器"}),TagUtil.setTagList(C.$leftText,U),_GM_setValue(S,_);}catch(_){qmsg.error(_.toString(),{consoleLogContent:true});}});}}))})()),T}}class ApiTest_saveTab extends ApiAsyncTestBase{isSupport(){return typeof _GM_saveTab=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof _GM.saveTab=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_setClipboard extends ApiAsyncTestBase{isSupport(){return typeof _GM_setClipboard=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof _GM.setClipboard=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>({text:"复制内容到剪贴板：Test GM_setClipboard",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
							`,false,false);domUtils.after(S.$leftContainer,C);let k;domUtils.on(C,"click",U=>{try{utils.preventEvent(U),clearTimeout(k),qmsg.info("等待3s内触发成功复制的回调"),k=setTimeoutLog(()=>{TagUtil.setTag(S.$leftText,"error","不支持触发回调函数");},3e3),_GM_setClipboard("Test GM_setClipboard","text",()=>{clearTimeout(k),TagUtil.setTag(S.$leftText,"success","支持触发回调函数");});}catch(L){qmsg.error(L.toString(),{consoleLogContent:true});}});}}))),T}}class ApiTest_setValue extends ApiAsyncTestBase{isSupport(){return typeof _GM_setValue=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof _GM.setValue=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(...[{key:"Test GM_setValue boolean",value:true,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue number",value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue string",value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_setValue undefined",value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue null",value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue object",value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(S=>(()=>{let C=S.key,k=S.value;return UIInfo(()=>({text:S.text(),description:S.desc(),tag:"info",afterRender(U){let L=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,false,false);domUtils.after(U.$leftContainer,L),domUtils.on(L,"click",_=>{utils.preventEvent(_);try{_GM_setValue(C,k),qmsg.info("执行写入完毕，请自行查看是否成功写入");}catch($){qmsg.error($.toString(),{consoleLogContent:true});}});}}))})())),T}}class ApiTest_setValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_setValues=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof _GM.setValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push((()=>{let S={foo:1,bar:2};return UIInfo(()=>({text:"测试存储对象",description:JSON.stringify(S),tag:"info",afterRender(C){let k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,false,false);domUtils.after(C.$leftContainer,k),domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_setValues(S),qmsg.info("执行写入完毕，请自行查看是否成功写入");}catch(L){qmsg.error(L.toString(),{consoleLogContent:true});}});}}))})()),T}}class ApiTest_unregisterMenuCommand extends ApiAsyncTestBase{isSupport(){return typeof _GM_unregisterMenuCommand=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof _GM.unregisterMenuCommand=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(S){let C=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.after(S.$leftContainer,C);let k;domUtils.on(C,"click",U=>{try{utils.preventEvent(U),clearTimeout(k);const L=_GM_registerMenuCommand("Test UnRegister Menu",_=>{});qmsg.info("已注册菜单，10s后自动执行卸载",{timeout:5*1e3}),clearTimeout(k),k=setTimeoutLog(()=>{_GM_unregisterMenuCommand(L),qmsg.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}});}}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_unsafeWindow extends ApiAsyncTestBase{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof _unsafeWindow=="object"&&_unsafeWindow!=null}getUIOption(){let w=this.getApiName(),A={id:"aside-"+w,title:w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&A.forms[1].forms.push(UIInfo(()=>{let T="test-gm-window",S=_monkeyWindow==_unsafeWindow;return _monkeyWindow[T]=T,S=typeof _unsafeWindow[T]!="string",Reflect.deleteProperty(_monkeyWindow,T),S?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),A}}class ApiTest_webRequest extends ApiAsyncTestBase{isSupport(){return typeof _GM_webRequest=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof _GM.webRequest=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_xmlHttpRequest extends ApiAsyncTestBase{isSupport(){return typeof _GM_xmlhttpRequest=="function"}getApiName(){return "GM_xmlhttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof _GM.xmlHttpRequest=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w,`${w} & ${A.name}`)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(S){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(S){return console.error(S),{text:"执行错误 "+S,tag:"error"}}finally{}})),T}}class ApiTest_GM extends ApiAsyncTestBase{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof _GM=="object"&&_GM!=null}getUIOption(){}}const GMTotal={unsafeWindow:new ApiTest_unsafeWindow,GM:new ApiTest_GM,addElement:new ApiTest_addElement,addStyle:new ApiTest_addStyle,download:new ApiTest_download,getResourceText:new ApiTest_getResourceText,getResourceUrl:new ApiTest_getResourceUrl,info:new ApiTest_info,log:new ApiTest_log,notification:new ApiTest_notification,openInTab:new ApiTest_openInTab,registerMenuCommand:new ApiTest_registerMenuCommand,unregisterMenuCommand:new ApiTest_unregisterMenuCommand,setClipboard:new ApiTest_setClipboard,getTab:new ApiTest_getTab,saveTab:new ApiTest_saveTab,getTabs:new ApiTest_getTabs,setValue:new ApiTest_setValue,getValue:new ApiTest_getValue,deleteValue:new ApiTest_deleteValue,listValues:new ApiTest_listValues,setValues:new ApiTest_setValues,getValues:new ApiTest_getValues,deleteValues:new ApiTest_deleteValues,addValueChangeListener:new ApiTest_addValueChangeListener,removeValueChangeListener:new ApiTest_removeValueChangeListener,xmlHttpRequest:new ApiTest_xmlHttpRequest,webRequest:new ApiTest_webRequest,cookie:new ApiTest_cookie},LocalStorageApi={$storageKey:"gm-api-test-storage-config",set(E,w){let A=window.localStorage.getItem(LocalStorageApi.$storageKey)??"{}",T=utils.toJSON(A);T[E]=w,window.localStorage.setItem(LocalStorageApi.$storageKey,JSON.stringify(T,(S,C)=>typeof C=="function"?C.tString():C));},get(E,w){let A=window.localStorage.getItem(LocalStorageApi.$storageKey)??"{}";return utils.toJSON(A)[E]??w},delete(E){let w=window.localStorage.getItem(LocalStorageApi.$storageKey)??"{}",A=utils.toJSON(w);Reflect.deleteProperty(A,E),window.localStorage.setItem(LocalStorageApi.$storageKey,JSON.stringify(A,(T,S)=>typeof S=="function"?S.tString():S));}},StorageApi={set(E,w){GMTotal.setValue.isSupport()&&GMTotal.getValue.isSupport()&&GMTotal.deleteValue.isSupport()?_GM_setValue(E,w):LocalStorageApi.set(E,w);},get(E,w){return GMTotal.setValue.isSupport()&&GMTotal.getValue.isSupport()&&GMTotal.deleteValue.isSupport()?_GM_getValue(E,w):LocalStorageApi.get(E,w)},delete(E){GMTotal.setValue.isSupport()&&GMTotal.getValue.isSupport()&&GMTotal.deleteValue.isSupport()?_GM_deleteValue(E):LocalStorageApi.delete(E);}},_SCRIPT_NAME_="Monkey Api Test",utils=utils$1.noConflict(),domUtils=domUtils$1.noConflict(),__pops=pops,log=new utils.Log(_GM_info,window.console);var ce;const SCRIPT_NAME=((ce=_GM_info==null?void 0:_GM_info.script)==null?void 0:ce.name)||_SCRIPT_NAME_,DEBUG=false;log.config({debug:DEBUG,logMaxCount:1e3,autoClearConsole:true,tag:true});qmsg.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return PopsPanel.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return PopsPanel.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return PopsPanel.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let E=utils$1.getMaxZIndex(),w=pops.config.InstanceUtils.getPopsMaxZIndex(E).zIndex;return utils$1.getMaxValue(E,w)+100}}}));const GM_Menu=new utils.GM_Menu({GM_getValue:GMTotal.getValue.isSupport()?_GM_getValue:StorageApi.get,GM_setValue:GMTotal.setValue.isSupport()?_GM_setValue:StorageApi.set,GM_registerMenuCommand:GMTotal.registerMenuCommand.isSupport()?_GM_registerMenuCommand:()=>{},GM_unregisterMenuCommand:GMTotal.unregisterMenuCommand.isSupport()?_GM_unregisterMenuCommand:()=>{}}),addStyle=utils.addStyle.bind(utils);document.querySelector.bind(document);document.querySelectorAll.bind(document);let injectDocumentTime="";document.documentElement?document.head?document.body?injectDocumentTime=`<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`:document.head.childNodes.length?injectDocumentTime=`<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`:injectDocumentTime=`<html>
	<head></head>
</html>

注入速度等级：2`:injectDocumentTime=`<html>
</html>

注入速度等级：1`:injectDocumentTime=`document.documentElement is null
	
注入速度等级：0`;const setTimeoutLog=(E,w,...A)=>setTimeout(()=>{try{E(...A);}catch(T){qmsg.error(T.toString(),{consoleLogContent:true});}},w),KEY="GM_Panel",ATTRIBUTE_INIT="data-init",ATTRIBUTE_KEY="data-key",ATTRIBUTE_DEFAULT_VALUE="data-default-value",ATTRIBUTE_INIT_MORE_VALUE="data-init-more-value",Component_Common=()=>{let E=[],w=[];Object.keys(GMTotal).forEach(T=>{let S=GMTotal[T],C=S.getApiName(),k=S.isSupport(),U=S.getAsyncApiOption();k?E.push({name:C,isSupport:k}):w.push({name:C,isSupport:k}),U&&(U.isSupport?E.push({name:U.name,isSupport:U.isSupport,leftTargetSelector:"#aside-"+C}):w.push({name:U.name,isSupport:U.isSupport,leftTargetSelector:"#aside-"+C}));});let A=T=>{let S=domUtils.createElement("div",{className:"gm-api-features-item",innerHTML:`
				<div class="gm-api-features-item__label">${T.name}</div>
				<div class="gm-api-features-item__value">
					<span style="font-size: 16px; font-weight: 700;">
						${T.isSupport?`
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
			`});return domUtils.on(S,"click",C=>{utils.preventEvent(C);let k=S.getRootNode(),U=utils.isNotNull(T.leftTargetSelector)?T.leftTargetSelector:"#aside-"+T.name,L=k.querySelector(U);L&&(L.click(),L.scrollIntoView({behavior:"smooth"}));}),S};return {id:"component-common",title:"通用",scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)==="component-common"},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,"component-common");},forms:[{type:"forms",text:"@run-at document-start<br>注：注入速度等级越低，注入的速度越快",forms:[UIInfo(()=>({text:CommonUtil.escapeHtml(injectDocumentTime),tag:"info"}))]},{type:"forms",text:"特性",afterAddToUListCallBack(T,S){S.formHeaderDivElement.style.fontSize="1.2em",S.formHeaderDivElement.style.fontWeight="700";},forms:[]},{type:"forms",text:"不支持列表",afterAddToUListCallBack(T,S){var C;S.formHeaderDivElement.style.color="rgb(216, 30, 6)",S.formHeaderDivElement.style.fontWeight="600",w.length===0&&((C=S.formContainerListElement)==null||C.remove());},forms:[{type:"own",getLiElementCallBack(T){let S=domUtils.createElement("div",{className:"gm-api-features-not-support"}),C=document.createDocumentFragment();return w.forEach(k=>{C.append(A(k));}),S.appendChild(C),T.appendChild(S),T}}]},{type:"forms",text:"支持列表",afterAddToUListCallBack(T,S){var C;S.formHeaderDivElement.style.fontWeight="600",E.length===0&&((C=S.formContainerListElement)==null||C.remove());},forms:[{type:"own",getLiElementCallBack(T){let S=domUtils.createElement("div",{className:"gm-api-features-support"}),C=document.createDocumentFragment();return E.forEach(k=>{C.append(A(k));}),S.appendChild(C),T.appendChild(S),T}}]}]}};class GrantTest_onurlchange extends ApiTestBase{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let w=this.getApiName();return {id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"功能测试",forms:[UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("测试window.onurlchange"),tag:"info",description:"点击按钮进行测试",afterRender(T){let S=domUtils.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1),C=U=>{clearTimeout(k),console.log("urlchange event info ==> ",U),qmsg.success("urlchange event ==> url is changed");},k;domUtils.on(S,"click",U=>{try{utils.preventEvent(U),clearTimeout(k),_monkeyWindow.onurlchange===null?(_monkeyWindow.removeEventListener("urlchange",C),_monkeyWindow.addEventListener("urlchange",C),window.history.pushState({},"","#/onurlchange"),k=setTimeout(()=>{qmsg.error("urlchange event is not trigger");},1e3)):qmsg.error("window.onurlchange is not null");}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,S);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})]}]}}}class GrantTest_close extends ApiTestBase{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let w=this.getApiName();return {id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"功能测试",forms:[UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("测试window.close"),tag:"info",description:"点击按钮执行该函数",afterRender(T){let S=domUtils.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
											`,!1,!1);domUtils.on(S,"click",C=>{utils.preventEvent(C);try{_monkeyWindow.close();}catch(k){qmsg.error(k.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,S);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})]}]}}}class GrantTest_focus extends ApiTestBase{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return  true}getUIOption(){let w=this.getApiName();return {id:"aside-"+w,title:""+w,headerTitle:`${CommonUtil.getTampoerMonkeyApiUrl(w)}`,scrollToDefaultView:true,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"功能测试",forms:[UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("测试window.focus"),tag:"info",description:"点击按钮执行该函数",afterRender(T){let S=domUtils.parseHTML(`
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="default">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">点击执行</span>
												</button>
											</div>
										`,!1,!1),C=()=>{setTimeout(()=>{_monkeyWindow.focus();},3e3);};domUtils.on(S,"click",k=>{utils.preventEvent(k),window.removeEventListener("blur",C,{capture:!0}),window.addEventListener("blur",C,{capture:!0,once:!0});try{qmsg.info("请切换至其它Tab页面，切换完毕3秒后会自动调用该函数");}catch(U){qmsg.error(U.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,S);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})]}]}}}const PopsPanel={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return PopsPanel.$data.__data==null&&(PopsPanel.$data.__data=new utils.Dictionary),PopsPanel.$data.__data},get oneSuccessExecMenu(){return PopsPanel.$data.__oneSuccessExecMenu==null&&(PopsPanel.$data.__oneSuccessExecMenu=new utils.Dictionary),PopsPanel.$data.__oneSuccessExecMenu},get onceExec(){return PopsPanel.$data.__onceExec==null&&(PopsPanel.$data.__onceExec=new utils.Dictionary),PopsPanel.$data.__onceExec},get scriptName(){return SCRIPT_NAME},key:KEY,attributeKeyName:ATTRIBUTE_KEY,attributeDefaultValueName:ATTRIBUTE_DEFAULT_VALUE},$listener:{get listenData(){return PopsPanel.$data.__listenData==null&&(PopsPanel.$data.__listenData=new utils.Dictionary),PopsPanel.$data.__listenData}},init(){try{this.initPanelDefaultValue(),this.initExtensionsMenu();}catch(E){console.error(E);}},isTopWindow(){return GMTotal.unsafeWindow.isSupport()?_unsafeWindow.top===_unsafeWindow.self:window.top===window.self},initExtensionsMenu(){this.isTopWindow()&&GM_Menu.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(E){return E},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let E=this;function w(S){if(!S.attributes)return;let C={},k=S.attributes[ATTRIBUTE_KEY];k!=null&&(C[k]=S.attributes[ATTRIBUTE_DEFAULT_VALUE]);let U=S.attributes[ATTRIBUTE_INIT];if(typeof U=="function"){let $=U();if(typeof $=="boolean"&&!$)return}let L=S.attributes[ATTRIBUTE_INIT_MORE_VALUE];L&&typeof L=="object"&&Object.assign(C,L);let _=Object.keys(C);if(!_.length){log.warn(["请先配置键",S]);return}_.forEach($=>{let I=C[$];E.$data.data.has($)&&log.warn("请检查该key(已存在): "+$),E.$data.data.set($,I);});}function A(S){for(let C=0;C<S.length;C++){let k=S[C];w(k);let U=k.forms;U&&Array.isArray(U)&&A(U);}}let T=this.getPanelContentConfig();for(let S=0;S<T.length;S++){let C=T[S];if(!C.forms)continue;let k=C.forms;k&&Array.isArray(k)&&A(k);}},setValue(E,w){let A=StorageApi.get(KEY,{}),T=A[E];A[E]=w,StorageApi.set(KEY,A),this.$listener.listenData.has(E)&&this.$listener.listenData.get(E).callback(E,T,w);},getValue(E,w){let T=StorageApi.get(KEY,{})[E];return T??(this.$data.data.has(E)?this.$data.data.get(E):w)},deleteValue(E){let w=StorageApi.get(KEY,{}),A=w[E];Reflect.deleteProperty(w,E),StorageApi.set(KEY,w),this.$listener.listenData.has(E)&&this.$listener.listenData.get(E).callback(E,A,void 0);},addValueChangeListener(E,w,A){let T=Math.random();return this.$listener.listenData.set(E,{id:T,key:E,callback:w}),A&&A.immediate&&w(E,this.getValue(E),this.getValue(E)),T},removeValueChangeListener(E){let w=null;for(const[A,T]of this.$listener.listenData.entries())if(T.id===E){w=A;break}typeof w=="string"?this.$listener.listenData.delete(w):console.warn("没有找到对应的监听器");},triggerMenuValueChange(E,w,A){if(this.$listener.listenData.has(E)){let T=this.$listener.listenData.get(E);if(typeof T.callback=="function"){let S=this.getValue(E),C=S,k=S;typeof w<"u"&&arguments.length>1&&(C=w),typeof A<"u"&&arguments.length>2&&(k=A),T.callback(E,k,C);}}},hasKey(E){let w=StorageApi.get(KEY,{});return E in w},execMenu(E,w,A=false,T){if(!(typeof E=="string"||typeof E=="object"&&Array.isArray(E)))throw new TypeError("key 必须是字符串或者字符串数组");let S=[];typeof E=="object"&&Array.isArray(E)?S=[...E]:S.push(E);let C;for(let k=0;k<S.length;k++){const U=S[k];if(!this.$data.data.has(U)){log.warn(`${E} 键不存在`);return}let L=PopsPanel.getValue(U);if(A&&(L=!L),typeof T=="function"){let _=T(U,L);typeof _=="boolean"&&(L=_);}if(!L)break;C=L;}C&&w(C);},execMenuOnce(E,w,A,T,S){if(typeof E!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(E)){log.warn(`${E} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(E))return;this.$data.oneSuccessExecMenu.set(E,1);let C=()=>{let I=PopsPanel.getValue(E);return typeof A=="function"?A(E,I):I},k=[],U=I=>{let P=C(),R=[];if(I instanceof HTMLStyleElement?R=[I]:Array.isArray(I)&&(R=[...I.filter(G=>G!=null&&G instanceof HTMLStyleElement)]),P)k=k.concat(R);else for(let G=0;G<R.length;G++)R[G].remove(),R.splice(G,1),G--;},L=I=>typeof S=="function"?S(E,I):I,_=I=>{let P=[];if(L(I)){let R=w(I,U);R instanceof HTMLStyleElement?P=[R]:Array.isArray(R)&&(P=[...R.filter(G=>G!=null&&G instanceof HTMLStyleElement)]);}for(let R=0;R<k.length;R++)k[R].remove(),k.splice(R,1),R--;k=[...P];};this.addValueChangeListener(E,(I,P,R)=>{let G=R;typeof T=="function"&&(G=T(I,R,P)),_(G);});let $=C();$&&_($);},execInheritMenuOnce(E,w,A,T){let S=this;const C=(k,U)=>{let L=S.getValue(k),_=S.getValue(U);if(typeof T=="function"){let $=T(L,_);if($!=null)return $}return L};this.execMenuOnce(E,A,()=>C(E,w),()=>C(E,w)),this.execMenuOnce(w,()=>{},()=>false,()=>(this.triggerMenuValueChange(E),false));},onceExec(E,w){if(typeof E!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(E)||(w(),this.$data.onceExec.set(E,1));},showPanel(){__pops.panel({title:{text:`${SCRIPT_NAME}-设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:PanelUISize.settingBig.width,height:PanelUISize.settingBig.height,drag:true,only:true,style:`
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
			`});},getPanelContentConfig(){let E=[Component_Common()];return Object.keys(GMTotal).forEach(w=>{let T=GMTotal[w].getUIOption();T&&E.push(T);}),E.push(new GrantTest_onurlchange().getUIOption()),E.push(new GrantTest_close().getUIOption()),E.push(new GrantTest_focus().getUIOption()),E}};PopsPanel.init();PopsPanel.showPanel();

})();