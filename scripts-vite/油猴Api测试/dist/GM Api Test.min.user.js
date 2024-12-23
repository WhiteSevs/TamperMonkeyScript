// ==UserScript==
// @name         GM Api Test
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.23
// @author       WhiteSevs
// @description  用于测试您的油猴脚本管理器对油猴函数的支持程度
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACM9JREFUeF7tnUmsFUUUhj9klFmMsxiJGsUBFk4xbDAa16AG1EQUQSDRMBjBuHFrBCNDNBFkUEhUiApro9EFxKi4AAc0xmBEcUrQx6SIov2Te5+Xy323q/t2v9fd59Ty3erq+k99r7rqVNWpfuSb5gL3A2OAUcAwYAgwEDgj31eXrvQTwHHgT+AI0AUcADYBq/NS0y+Hgh+qNfqkWkPn8ApzRQqMHTUY1mepPisAxgGq2A3A8Cwr6GWdZoHDwE5A/2h7O7VPFgBsBqYAgzqtjD+fyAJ/AduA6YmeasrcCQArgZnAiE4q4M92bIFDwAZgQZqS0gBwDfA2cGGaF/ozuVlgP3AH8HmSNyQFYEbU8GuAwUle4nl7zQLHgDnAxtA3JgFgaTQ9WRxasOfrUwssA5aE1CAUgK21gV5ImZ6nGBbQAHFqXFVCAFgLzIoryH8vpAXWAbPb1SwOAI3yM3U8FNJM1a6U/AWaJbRM7QCYDLxXbduYUXcr8H4rtT0BMBbYDYw2Y6JqC/0dmBB9yvc1y+wJgO+Bi6ptE3PqfgAuDgFAHr755sxjQ/CqZo9hqx7goLt3K0uD3MYjG9U1A6CFnWmVle/CZIEtjQtIjQBoSfdLX9WrPCVaRbyqvpTcCICmfJr6eaq+BTQl1NSQRgCOAmdWX7srBP4AhjYCsDDas7fcTWPKAosiP8+Keg+wq+YoMGUB42Ll6JtYB+BvoL9xg1iT/w8wQAB492+t6f/Xu0gAbAe0hduTPQvsEABfAOPtaXfFkUNojwDQIoFv8LTJw34BoKVCHdvyZM8CXQJAZ9F8l6+9xpfiYwJA0wE/qGkTgBMC4F+b2l113RXsABhmwXsAw43vPYDxxncAHICT+wF8DGAYBAfAcOP7J8B44zsADoCPAawz4GMA4wQ4AA6ATwMtM+A9gOXWrx0McUeQYQi8BzDc+O4HMN74DoAD4I4g6wz4GMA4AQ6AA+COIMsMeA9gufXdEWS89R0AB8A/AcYZcAAcAJ8FWGbAewDLre+DQOOt7wA4AP4JMM6AA+AA+CzAMgPeA1hufR8EGm99B8AB8E+AcQZ6GwBFJVdo2q+B74BvatfU1K8819X0us7ksujG0kuAy6M7bq4GBpa0nQqvtzcAOAzsjBp1UwfX0N4d3XHzAHALcHbBYSiV3jwB6Ioun3wphyvn5wJPFTC+cSn15gGAbqV6C7g35//UF2u9wpCc3xNXfKn1Zg2AbqPSbdV746yW0e/nRWOG1/vwtrPS680KAB0wXQPMy6hhkxaj3mBO0y1oSctIkr8yerMAQFeQXVG7dyCJEbPOq8uuNbvI++q7SuntFIDuCwizbs0OysvzAszK6e0EgF8AfYOLmH4Gzs24YpXUmxaAE8A50TXzBzI2clbFjQF+zfAehMrqTQvAE9HVo0uzaq2cylkSjQeeyajsyupNA0ARv4M9tXMW44FK600KwClXj2f035VnMeNqaw2DUr5E9yldCmhMUYakMdm3QLBzLCkAcrrk7eHL2tCvRRDck7LQ1X3o20hZZeQTkbs8KCUBQL7u0UGlFi9Tmqvx9kdrGfItlDEF3wWZBIBnc1jY6S3jLgMeT/gyeTXVA5QxqQdQTxCbQgE4CgyLLa3YGY5EM5ehgVVUj3FWYN6iZvstpMcOBeBj4KaiKg2s10fAjYF5yzTy70lS0AwoFIBFEU0rAo1X1GwLoytylwdWbmY0+n85MG9Rsz0IbIirXAgAull0QFxBJfldW7T6x9RVecq6Ba1Z2vG4tgsB4DPgupI0cFw1PwWujcmkPBPiCirJ77vj2i4EgDcB7cmrQnoDuCtGiCm9IQDou/lYFVofeA7QeKZdMqU3BIBHo5W/FyoCwCPA8zFaTOkNAeB24N2KAHAb8E6MFlN6QwC4IPKH/1QRAM6P/OQ/xmgxpdcBOJ0GB6DJJqa6RMCU3pAewNSgCDClNwQAU9OimrvYzLRXAMjVe0abgZEpx0jkObOk94QA0LanwW0AkDtxYkVmAbsC3LyW9B4TAHG7ZUwtjgCW9HYJgJDtQ7M6ONtflM5Dh1bXBVbGit79AkARO8bHGMbMBomaHazo3SMAtgOTYgBQ1IsRgf89Rc12CBgeWDkrencIgNANhNY2hVrQO08AKOnAR9wuGGvbwquuV7uFBtUBCNpAWIvGYelgSJUPwpwc59QBCB0hWzsaVmW9J2c6dQD0GQgdJJVphBzas7UbG1ZRb/cgtxGAJMYqw5m5RGfkYmYHVdPbDXUjAElO0ipI0tgCxAXqqd10pm9fhkGjqqT3lM9aIwAy5ubIMTQtcK6sYEmhR60Ci8wsm46yZR0sqip6twDT65ZuBkB/P5jA6VPE72OST1lS4squV+O8kY2iWwGwMor9Mz+BZRQ8Sa7kvo4XpLhAe3IIDtVsijLrXQUsiANAv4csEDWWoyBKT/Zh3CDFA3o6w6BQcfyXUW/LeAetegCJV9j2T2L2CbQyUm+HTtXAdb2hULFp9R4DrgfqYfm7264nAJRhBvBK3L9Ci997K3iyQr/cKXdmijpm+UgZ9CrU/sZWotsBoPwKBbc4pbXyCp+uaB8PR3v3RqWsV16PFVWv7KVPZMsUB4Ae2gpM6cBqmpKp63m1gxgDOtt/X+3TVNSpZ91ERdK7DZjaru1CANDzayPHinzHnSZtQNVI/avAK2OurM0w4s70d1qvvJ7vS73a/TQ7TlgoACpHUTM04PJUfAtocS82OohkJAFA+SfXPgllDRdX/KbrrIba4KsuX7OxoJQUABWqNYAPShxDL8gwJcwk340u1dIaSHBKA0C9cHkM9Vko+17BYGMVNKPcu+ruT/Hwhda1EwDq79ACkmYJfT0fD9VclXzyP2iU372wk0ZYFgDovXUP1c05rMKl0VXlZ7Qq+WFWl3NlBUCjwTVn16dB7uSyTt+KBpCmk/KlqKvPNF5jHgA0w6AIY1qpk+dO4WYVylw7kNsdSC1aA/RGfbTApJ26OqupsLbyLGqFVZHNMm30RjH/AX1V4etVAz1zAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
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

	var ue=Object.defineProperty;var ae=S=>{throw TypeError(S)};var be=(S,w,A)=>w in S?ue(S,w,{enumerable:!0,configurable:!0,writable:!0,value:A}):S[w]=A;var Z=(S,w,A)=>be(S,typeof w!="symbol"?w+"":w,A),ie=(S,w,A)=>w.has(S)||ae("Cannot "+A);var B=(S,w,A)=>(ie(S,w,"read from private field"),A?A.call(S):w.get(S)),ut=(S,w,A)=>w.has(S)?ae("Cannot add the same private member more than once"):w instanceof WeakSet?w.add(S):w.set(S,A),ft=(S,w,A,C)=>(ie(S,w,"write to private field"),w.set(S,A),A);var se=(S,w,A,C)=>({set _(T){ft(S,w,T);},get _(){return B(S,w,C)}});var _GM=typeof GM<"u"?GM:void 0,_GM_addElement=typeof GM_addElement<"u"?GM_addElement:void 0,_GM_addStyle=typeof GM_addStyle<"u"?GM_addStyle:void 0,_GM_addValueChangeListener=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,_GM_cookie=typeof GM_cookie<"u"?GM_cookie:void 0,_GM_deleteValue=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,_GM_deleteValues=typeof GM_deleteValues<"u"?GM_deleteValues:void 0,_GM_download=typeof GM_download<"u"?GM_download:void 0,_GM_getResourceText=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,_GM_getResourceURL=typeof GM_getResourceURL<"u"?GM_getResourceURL:void 0,_GM_getTab=typeof GM_getTab<"u"?GM_getTab:void 0,_GM_getTabs=typeof GM_getTabs<"u"?GM_getTabs:void 0,_GM_getValue=typeof GM_getValue<"u"?GM_getValue:void 0,_GM_getValues=typeof GM_getValues<"u"?GM_getValues:void 0,_GM_info=typeof GM_info<"u"?GM_info:void 0,_GM_listValues=typeof GM_listValues<"u"?GM_listValues:void 0,_GM_log=typeof GM_log<"u"?GM_log:void 0,_GM_notification=typeof GM_notification<"u"?GM_notification:void 0,_GM_openInTab=typeof GM_openInTab<"u"?GM_openInTab:void 0,_GM_registerMenuCommand=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,_GM_removeValueChangeListener=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,_GM_saveTab=typeof GM_saveTab<"u"?GM_saveTab:void 0,_GM_setClipboard=typeof GM_setClipboard<"u"?GM_setClipboard:void 0,_GM_setValue=typeof GM_setValue<"u"?GM_setValue:void 0,_GM_setValues=typeof GM_setValues<"u"?GM_setValues:void 0,_GM_unregisterMenuCommand=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,_GM_webRequest=typeof GM_webRequest<"u"?GM_webRequest:void 0,_GM_xmlhttpRequest=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_unsafeWindow=typeof unsafeWindow<"u"?unsafeWindow:void 0,_monkeyWindow=window;function CompatibleProcessing(){try{typeof Object.assign!="function"&&(Object.assign=function(S){return S=Object(S),arguments.length>1&&[...arguments].splice(1,arguments.length-1).forEach(A=>{for(var C in A)Object.prototype.hasOwnProperty.call(A,C)&&(S[C]=A[C]);}),S});}catch(S){console.warn(S);}try{"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var S=this;function w(A){return function(C){var T=S.className.split(/\s+/g),E=T.indexOf(C);A(T,E,C),S.className=T.join(" ");}}return {add:w(function(A,C,T){~C||A.push(T);}),remove:w(function(A,C){~C&&A.splice(C,1);}),toggle:w(function(A,C,T){~C?A.splice(C,1):A.push(T);}),contains:function(A){return !!~S.className.split(/\s+/g).indexOf(A)},item:function(A){return S.className.split(/\s+/g)[A]||null}}}});}catch(S){console.warn(S);}}const QmsgAnimation={$state:{opening:"MessageMoveIn",done:"",closing:"MessageMoveOut"},$name:{startNameList:["animationName","WebkitAnimationName","MozAnimationName","msAnimationName","OAnimationName"],endNameList:["animationend","webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend"]},getStyleAnimationNameValue(S){for(let w=0;w<this.$name.startNameList.length;w++){let A=this.$name.startNameList[w],C=S.style[A];if(C!=null)return C}},setStyleAnimationName(S,w=""){this.$name.startNameList.forEach(A=>{A in S.style&&(S.style[A]=w);});}},QmsgConfig={PLUGIN_NAME:"qmsg",NAMESPACE:"qmsg",INS_DEFAULT:{},DEFAULT:{animation:!0,autoClose:!0,content:"",html:!1,isHTML:!1,position:"top",showClose:!1,maxNums:5,onClose:null,showIcon:!0,showMoreContent:!1,showReverse:!1,timeout:2500,type:"info",zIndex:5e4,style:"",customClass:"",isLimitWidth:!1,limitWidthNum:200,limitWidthWrap:"no-wrap",consoleLogContent:!1},CAN_ANIMATION:QmsgAnimation.getStyleAnimationNameValue(document.createElement("div"))!=null},QmsgHeaderCloseIcon='<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',QmsgIcon={info:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/></svg>',warning:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/></svg>',error:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/></svg>',success:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/></svg>',loading:'<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/><path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'},QmsgInstanceStorage={QmsgList:[],remove(S){for(let w=0;w<QmsgInstanceStorage.QmsgList.length;w++)if(QmsgInstanceStorage.QmsgList[w].uuid===S){QmsgInstanceStorage.QmsgList.splice(w,1);return}}},QmsgCSS={css:`@charset "utf-8";
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
      }`,getStyleElement(){let S=document.createElement("style");return S.setAttribute("type","text/css"),S.setAttribute("data-type",QmsgConfig.PLUGIN_NAME),S.innerHTML=this.css,S}};class QmsgMsg{constructor(w,A){Z(this,"timeId");Z(this,"startTime");Z(this,"endTime");Z(this,"setting");Z(this,"uuid");Z(this,"state");Z(this,"repeatNum");Z(this,"$Qmsg");this.timeId=void 0,this.startTime=Date.now(),this.endTime=null,this.setting=QmsgUtils.toDynamicObject(QmsgConfig.DEFAULT,w,QmsgConfig.INS_DEFAULT),this.uuid=A,this.state="opening",this.$Qmsg=document.createElement("div"),this.repeatNum=1,this.detectionType(),this.init(),this.setting.consoleLogContent&&console.log(this.setting.content);}getSetting(){return this.setting}getRepeatNum(){return this.repeatNum}setRepeatNum(w){this.repeatNum=w;}setRepeatNumIncreasing(){this.repeatNum++;}init(){let w=this;this.setting.customClass&&typeof this.setting.customClass=="string"&&this.$Qmsg.classList.add(this.setting.customClass);let A=QmsgIcon[this.setting.type||"info"],C=QmsgUtils.getNameSpacify("content-"+this.setting.type||"info");this.setting.showClose&&(C+=" "+QmsgUtils.getNameSpacify("content-with-close"));let T=this.setting.content||"",E="",k=QmsgHeaderCloseIcon;this.setting.showMoreContent&&(C+="qmsg-show-more-content",E+="qmsg-show-more-content");let U="";this.setting.showClose&&(U=`<i class="qmsg-icon qmsg-icon-close ${E}">${k}</i>`);let L=document.createElement("span"),_=QmsgUtils.getNameSpacify("data-position",this.setting.position.toLowerCase());if(this.setting.html||this.setting.isHTML?L.innerHTML=T:L.innerText=T,this.setting.isLimitWidth){let N=this.setting.limitWidthNum;typeof N=="string"?QmsgUtils.isNumber(N)&&(N=N+"px"):N=N.toString()+"px",L.style.maxWidth=N,L.style.width=N,this.setting.limitWidthWrap==="no-wrap"?L.style.whiteSpace="nowrap":this.setting.limitWidthWrap==="ellipsis"?(L.style.whiteSpace="nowrap",L.style.overflow="hidden",L.style.textOverflow="ellipsis"):this.setting.limitWidthWrap==="wrap"&&(L.style.whiteSpace="");}this.$Qmsg.innerHTML=`
        <div class="qmsg-content">
            <div class="${C}">
            ${this.setting.showIcon?`<i class="qmsg-icon">${A}</i>`:""}
                ${L.outerHTML}
                ${U}
            </div>
        </div>
        `;let I=this.$Qmsg.querySelector(".qmsg-content");this.$Qmsg.classList.add(QmsgUtils.getNameSpacify("item")),this.$Qmsg.setAttribute(QmsgUtils.getNameSpacify("uuid"),this.uuid);let $=document.querySelector(".qmsg-shadow-container"),P=$==null?void 0:$.shadowRoot;if(!$){$=document.createElement("div"),$.className="qmsg-shadow-container",P=$.attachShadow({mode:"open"});let N=document.createElement("div");if(N.classList.add(QmsgConfig.NAMESPACE,QmsgUtils.getNameSpacify("wrapper"),QmsgUtils.getNameSpacify("is-initialized")),N.classList.add(_),P.appendChild(QmsgCSS.getStyleElement()),P.appendChild(N),this.setting.style!=null){let R=document.createElement("style");R.setAttribute("type","text/css"),R.setAttribute("data-id",this.uuid),R.innerHTML=this.setting.style,I.insertAdjacentElement("afterend",R);}document.body.appendChild($);}if(P==null)throw new TypeError(QmsgConfig.PLUGIN_NAME+" $shadowRoot is null");let H=P.querySelector(`.${QmsgConfig.NAMESPACE}.${_}`);H||(H=document.createElement("div"),H.classList.add(QmsgConfig.NAMESPACE,QmsgUtils.getNameSpacify("wrapper"),QmsgUtils.getNameSpacify("is-initialized")),H.classList.add(_),P.appendChild(H)),this.setting.showReverse?H.style.flexDirection="column-reverse":H.style.flexDirection="column";let V=this.setting.zIndex;if(typeof V=="function"&&(V=V()),isNaN(V)||(H.style.zIndex=V.toString()),H.appendChild(this.$Qmsg),this.setState(this.$Qmsg,"opening"),this.setting.showClose){let N=this.$Qmsg.querySelector(".qmsg-icon-close");N&&N.addEventListener("click",function(){w.close();});}let D=N=>{QmsgAnimation.getStyleAnimationNameValue(w.$Qmsg)===QmsgAnimation.$state.closing&&(w.endTime=Date.now(),w.destroy()),QmsgAnimation.setStyleAnimationName(w.$Qmsg);};if(QmsgAnimation.$name.endNameList.forEach(function(N){w.$Qmsg.addEventListener(N,D);}),this.setting.autoClose){this.timeId=QmsgUtils.setTimeout(()=>{this.close();},this.setting.timeout);let N=F=>{this.startTime=null,this.endTime=null,QmsgUtils.clearTimeout(this.timeId),this.timeId=void 0;},R=F=>{if(this.timeId!=null){console.warn("timeId is not null，mouseenter may be not first trigger");return}this.startTime=Date.now(),this.timeId=QmsgUtils.setTimeout(()=>{this.close();},this.setting.timeout);};this.$Qmsg.addEventListener("touchstart",()=>{this.$Qmsg.removeEventListener("mouseenter",N),this.$Qmsg.removeEventListener("mouseout",R);},{capture:!0,once:!0}),this.$Qmsg.addEventListener("mouseenter",N),this.$Qmsg.addEventListener("mouseout",R);}}detectionType(){this.setting.timeout!=null&&typeof this.setting.timeout=="string"&&(this.setting.timeout=parseInt(this.setting.timeout)),isNaN(this.setting.timeout)&&(this.setting.timeout=QmsgConfig.DEFAULT.timeout),this.setting.timeout!=null&&parseInt(this.setting.timeout.toString())>=0&&parseInt(this.setting.timeout.toString())<=Number.MAX_VALUE||(this.setting.timeout=QmsgConfig.DEFAULT.timeout),typeof this.setting.zIndex=="function"&&(this.setting.zIndex=this.setting.zIndex()),this.setting.zIndex!=null&&typeof this.setting.zIndex=="string"&&(this.setting.zIndex=parseInt(this.setting.zIndex)),isNaN(this.setting.zIndex)&&(this.setting.zIndex=typeof QmsgConfig.DEFAULT.zIndex=="function"?QmsgConfig.DEFAULT.zIndex():QmsgConfig.DEFAULT.zIndex);}setState(w,A){!A||!QmsgAnimation.$state[A]||(this.state=A,QmsgAnimation.setStyleAnimationName(w,QmsgAnimation.$state[A]));}setMsgCount(){let w=this,A=QmsgUtils.getNameSpacify("count"),C=`div.${QmsgUtils.getNameSpacify("data-position",this.setting.position.toLowerCase())} [class^="qmsg-content-"]`,T=this.$Qmsg.querySelector(C);if(!T)throw new TypeError("$content is null");let E=T.querySelector("."+A);E||(E=document.createElement("span"),E.classList.add(A),T.appendChild(E)),E.innerHTML=this.getRepeatNum().toString(),QmsgAnimation.setStyleAnimationName(E),QmsgAnimation.setStyleAnimationName(E,"MessageShake"),QmsgUtils.clearTimeout(this.timeId),this.setting.autoClose&&(this.timeId=QmsgUtils.setTimeout(function(){w.close();},this.setting.timeout));}close(){this.setState(this.$Qmsg,"closing"),QmsgConfig.CAN_ANIMATION?QmsgInstanceStorage.remove(this.uuid):this.destroy();let w=this.setting.onClose;w&&typeof w=="function"&&w.call(this);}destroy(){this.endTime=Date.now(),this.$Qmsg.remove(),QmsgUtils.clearTimeout(this.timeId),QmsgInstanceStorage.remove(this.uuid);}setText(w){let A=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(A)A.innerText=w,this.setting.content=w;else throw new TypeError("$content is null")}setHTML(w){let A=this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");if(A)A.innerHTML=w,this.setting.content=w;else throw new TypeError("$content is null")}}const createCache=S=>(w,A)=>(S.set(w,A),A),MAX_SAFE_INTEGER=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,TWO_TO_THE_POWER_OF_TWENTY_NINE=536870912,TWO_TO_THE_POWER_OF_THIRTY=TWO_TO_THE_POWER_OF_TWENTY_NINE*2,createGenerateUniqueNumber=(S,w)=>A=>{const C=w.get(A);let T=C===void 0?A.size:C<TWO_TO_THE_POWER_OF_THIRTY?C+1:0;if(!A.has(T))return S(A,T);if(A.size<TWO_TO_THE_POWER_OF_TWENTY_NINE){for(;A.has(T);)T=Math.floor(Math.random()*TWO_TO_THE_POWER_OF_THIRTY);return S(A,T)}if(A.size>MAX_SAFE_INTEGER)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;A.has(T);)T=Math.floor(Math.random()*MAX_SAFE_INTEGER);return S(A,T)},LAST_NUMBER_WEAK_MAP=new WeakMap,cache=createCache(LAST_NUMBER_WEAK_MAP),generateUniqueNumber=createGenerateUniqueNumber(cache,LAST_NUMBER_WEAK_MAP),isCallNotification=S=>S.method!==void 0&&S.method==="call",isClearResponse=S=>typeof S.id=="number"&&typeof S.result=="boolean",load=S=>{const w=new Map([[0,()=>{}]]),A=new Map([[0,()=>{}]]),C=new Map,T=new Worker(S);return T.addEventListener("message",({data:_})=>{if(isCallNotification(_)){const{params:{timerId:I,timerType:$}}=_;if($==="interval"){const P=w.get(I);if(typeof P===void 0)throw new Error("The timer is in an undefined state.");if(typeof P=="number"){const H=C.get(P);if(H===void 0||H.timerId!==I||H.timerType!==$)throw new Error("The timer is in an undefined state.")}else typeof P=="function"&&P();}else if($==="timeout"){const P=A.get(I);if(typeof P===void 0)throw new Error("The timer is in an undefined state.");if(typeof P=="number"){const H=C.get(P);if(H===void 0||H.timerId!==I||H.timerType!==$)throw new Error("The timer is in an undefined state.")}else typeof P=="function"&&(P(),A.delete(I));}}else if(isClearResponse(_)){const{id:I}=_,$=C.get(I);if($===void 0)throw new Error("The timer is in an undefined state.");const{timerId:P,timerType:H}=$;C.delete(I),H==="interval"?w.delete(P):A.delete(P);}else {const{error:{message:I}}=_;throw new Error(I)}}),{clearInterval:_=>{if(typeof w.get(_)=="function"){const I=generateUniqueNumber(C);C.set(I,{timerId:_,timerType:"interval"}),w.set(_,I),T.postMessage({id:I,method:"clear",params:{timerId:_,timerType:"interval"}});}},clearTimeout:_=>{if(typeof A.get(_)=="function"){const I=generateUniqueNumber(C);C.set(I,{timerId:_,timerType:"timeout"}),A.set(_,I),T.postMessage({id:I,method:"clear",params:{timerId:_,timerType:"timeout"}});}},setInterval:(_,I=0,...$)=>{const P=generateUniqueNumber(w);return w.set(P,()=>{_(...$),typeof w.get(P)=="function"&&T.postMessage({id:null,method:"set",params:{delay:I,now:performance.timeOrigin+performance.now(),timerId:P,timerType:"interval"}});}),T.postMessage({id:null,method:"set",params:{delay:I,now:performance.timeOrigin+performance.now(),timerId:P,timerType:"interval"}}),P},setTimeout:(_,I=0,...$)=>{const P=generateUniqueNumber(A);return A.set(P,()=>_(...$)),T.postMessage({id:null,method:"set",params:{delay:I,now:performance.timeOrigin+performance.now(),timerId:P,timerType:"timeout"}}),P}}},createLoadOrReturnBroker=(S,w)=>{let A=null;return ()=>{if(A!==null)return A;const C=new Blob([w],{type:"application/javascript; charset=utf-8"}),T=URL.createObjectURL(C);return A=S(T),setTimeout(()=>URL.revokeObjectURL(T)),A}},worker=`(()=>{"use strict";const e=new Map,t=new Map,r=t=>{const r=e.get(t);return void 0!==r&&(clearTimeout(r),e.delete(t),!0)},s=e=>{const r=t.get(e);return void 0!==r&&(clearTimeout(r),t.delete(e),!0)},o=(e,t)=>{const r=performance.now(),s=e+t-r-performance.timeOrigin;return{expected:r+s,remainingDelay:s}},i=(e,t,r,s)=>{const o=r-performance.now();o>0?e.set(t,setTimeout(i,o,e,t,r,s)):(e.delete(t),postMessage({id:null,method:"call",params:{timerId:t,timerType:s}}))};addEventListener("message",(({data:n})=>{try{if("clear"===n.method){const{id:e,params:{timerId:t,timerType:o}}=n;if("interval"===o)postMessage({id:e,result:r(t)});else{if("timeout"!==o)throw new Error('The given type "'.concat(o,'" is not supported'));postMessage({id:e,result:s(t)})}}else{if("set"!==n.method)throw new Error('The given method "'.concat(n.method,'" is not supported'));{const{params:{delay:r,now:s,timerId:a,timerType:m}}=n;if("interval"===m)((t,r,s)=>{const{expected:n,remainingDelay:a}=o(t,s);e.set(r,setTimeout(i,a,e,r,n,"interval"))})(r,a,s);else{if("timeout"!==m)throw new Error('The given type "'.concat(m,'" is not supported'));((e,r,s)=>{const{expected:n,remainingDelay:a}=o(e,s);t.set(r,setTimeout(i,a,t,r,n,"timeout"))})(r,a,s)}}}}catch(e){postMessage({error:{message:e.message},id:n.id,result:null})}}))})();`,loadOrReturnBroker=createLoadOrReturnBroker(load,worker),clearInterval$1=S=>loadOrReturnBroker().clearInterval(S),clearTimeout$1=S=>loadOrReturnBroker().clearTimeout(S),setInterval$1=(...S)=>loadOrReturnBroker().setInterval(...S),setTimeout$1=(...S)=>loadOrReturnBroker().setTimeout(...S),QmsgUtils={getNameSpacify(...S){let w=QmsgConfig.NAMESPACE;for(let A=0;A<S.length;++A)w+="-"+S[A];return w},isNumber(S){return /^\d+$/.test(S)},getUUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(S){let w=Math.random()*16|0;return (S=="x"?w:w&3|8).toString(16)})},mergeArgs(S="",w){let A={};if(arguments.length===0)return A;if(w!=null){if(A.content=S,typeof w=="object"&&w!=null)return Object.assign(A,w)}else {if(typeof S=="object"&&S!=null)return Object.assign(A,S);A.content=S;}return A},judgeReMsg(S){S=S||{};let w=JSON.stringify(S),A=QmsgInstanceStorage.QmsgList.find(T=>T.config===w),C=A==null?void 0:A.instance;if(C==null){let T=QmsgUtils.getUUID(),E={uuid:T,config:w,instance:new QmsgMsg(S,T)};QmsgInstanceStorage.QmsgList.push(E);let k=QmsgInstanceStorage.QmsgList.length,U=E.instance.getSetting().maxNums;if(k>U)for(let L=0;L<k-U;L++){let _=QmsgInstanceStorage.QmsgList[L];_&&_.instance.getSetting().autoClose&&_.instance.close();}A=E,C=E.instance;}else C.getRepeatNum()?C.getRepeatNum()>=99||C.setRepeatNumIncreasing():C.setRepeatNum(2),C.setMsgCount();if(C)C.$Qmsg.setAttribute("data-count",C==null?void 0:C.getRepeatNum().toString());else throw new TypeError("QmsgInstance is null");return C},toDynamicObject(S,...w){let A=Object.assign({},S);return Object.keys(A).forEach(C=>{let T=A[C];Object.defineProperty(A,C,{get(){let E=w.findIndex(k=>k.hasOwnProperty.call(k,C));return E!==-1?w[E][C]:T},set(E){T=E;}});}),A},setTimeout(S,w){try{return setTimeout$1(S,w)}catch{return globalThis.setTimeout(S,w)}},clearTimeout(S){try{S!=null&&clearTimeout$1(S);}catch{}finally{globalThis.clearTimeout(S);}},setInterval(S,w){try{return setInterval$1(S,w)}catch{return globalThis.setInterval(S,w)}},clearInterval(S){try{S!=null&&clearInterval$1(S);}catch{}finally{globalThis.clearInterval(S);}}};CompatibleProcessing();const QmsgEvent={visibilitychange:{eventConfig:{callback(){if(document.visibilityState==="visible")for(let S=0;S<QmsgInstanceStorage.QmsgList.length;S++){let w=QmsgInstanceStorage.QmsgList[S];w.instance.endTime==null&&w.instance.startTime!=null&&Date.now()-w.instance.startTime>=w.instance.getSetting().timeout&&w.instance.close();}},option:{capture:!0}},addEvent(){"visibilityState"in document?document.addEventListener("visibilitychange",QmsgEvent.visibilitychange.eventConfig.callback,QmsgEvent.visibilitychange.eventConfig.option):console.error("visibilityState not support");},removeEvent(){document.removeEventListener("visibilitychange",QmsgEvent.visibilitychange.eventConfig.callback,QmsgEvent.visibilitychange.eventConfig.option);}}};class Qmsg{constructor(){Z(this,"$data");Z(this,"$eventUtils");this.$data={version:"2024.12.6",config:QmsgConfig,icon:QmsgIcon,instanceStorage:QmsgInstanceStorage},this.$eventUtils=QmsgEvent,this.$eventUtils.visibilitychange.addEvent();}config(w){w!=null&&typeof w=="object"&&(QmsgConfig.INS_DEFAULT=null,QmsgConfig.INS_DEFAULT=w);}info(w,A){let C=QmsgUtils.mergeArgs(w,A);return C.type="info",QmsgUtils.judgeReMsg.call(this,C)}warning(w,A){let C=QmsgUtils.mergeArgs(w,A);return C.type="warning",QmsgUtils.judgeReMsg.call(this,C)}success(w,A){let C=QmsgUtils.mergeArgs(w,A);return C.type="success",QmsgUtils.judgeReMsg.call(this,C)}error(w,A){let C=QmsgUtils.mergeArgs(w,A);return C.type="error",QmsgUtils.judgeReMsg.call(this,C)}loading(w,A){let C=QmsgUtils.mergeArgs(w,A);return C.type="loading",C.autoClose=!1,QmsgUtils.judgeReMsg.call(this,C)}remove(w){QmsgInstanceStorage.remove(w);}closeAll(){for(let w=QmsgInstanceStorage.QmsgList.length-1;w>=0;w--){let A=QmsgInstanceStorage.QmsgList[w];A&&A.instance&&A.instance.close();}}}let qmsg=new Qmsg,WindowApi$1=class{constructor(w){Z(this,"defaultApi",{document,window,globalThis,self,top});Z(this,"api");w&&(w.globalThis==null&&(w.globalThis=w.window),w.self==null&&(w.self=w.window)),w||(w=Object.assign({},this.defaultApi)),this.api=Object.assign({},w);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}};const DOMUtilsCommonUtils={windowApi:new WindowApi$1({document,window,top}),isShow(S){return !!S.getClientRects().length},showElement(S){let w=S.cloneNode(!0);return w.setAttribute("style","visibility: hidden !important;display:block !important;"),this.windowApi.document.documentElement.appendChild(w),{recovery(){w.remove();}}},getStyleValue(S,w){let A=null,C=null;S instanceof CSSStyleDeclaration?C=S:(A=S.ownerDocument.defaultView,(!A||!A.opener)&&(A=window),C=A.getComputedStyle(S));let T=parseFloat(C[w]);return isNaN(T)?0:T},isWin(S){var w;return typeof S!="object"||S instanceof Node?!1:S===globalThis||S===window||S===self||S===globalThis||S===window||S===self||typeof unsafeWindow<"u"&&S===unsafeWindow?!0:((w=S==null?void 0:S.Math)==null?void 0:w.toString())==="[object Math]"},delete(S,w){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(S,w):delete S[w];}},DOMUtilsData={SymbolEvents:Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1))},OriginPrototype$1={Object:{defineProperty:Object.defineProperty}};class DOMUtilsEvent{constructor(w){Z(this,"windowApi");this.windowApi=new WindowApi$1(w);}on(w,A,C,T,E){function k(D,N,R){let F=D[N];return typeof F=="boolean"?(R.capture=F,typeof D[N+1]=="boolean"&&(R.once=D[N+1]),typeof D[N+2]=="boolean"&&(R.passive=D[N+2])):typeof F=="object"&&("capture"in F||"once"in F||"passive"in F||"isComposedPath"in F)&&(R.capture=F.capture,R.once=F.once,R.passive=F.passive,R.isComposedPath=F.isComposedPath),R}let U=this,L=arguments;if(typeof w=="string"&&(w=U.selectorAll(w)),w==null)return;let _=[];w instanceof NodeList||Array.isArray(w)?(w=w,_=[...w]):_.push(w);let I=[];Array.isArray(A)?I=I.concat(A):typeof A=="string"&&(I=I.concat(A.split(" ")));let $=[];Array.isArray(C)?$=$.concat(C):typeof C=="string"&&$.push(C);let P=T,H={capture:!1,once:!1,passive:!1,isComposedPath:!1};typeof C=="function"?(P=C,H=k(L,3,H)):H=k(L,4,H);function V(){H.once&&U.off(w,A,C,T,E);}_.forEach(D=>{function N(R){if($.length){let F=H.isComposedPath?R.composedPath()[0]:R.target,W=DOMUtilsCommonUtils.isWin(D)?U.windowApi.document.documentElement:D;if($.find(Q=>{if(F.matches(Q))return !0;let G=F.closest(Q);return G&&W.contains(G)?(F=G,!0):!1})){try{OriginPrototype$1.Object.defineProperty(R,"target",{get(){return F}});}catch{}P.call(F,R,F),V();}}else P.call(D,R),V();}I.forEach(R=>{D.addEventListener(R,N,H);let F=D[DOMUtilsData.SymbolEvents]||{};F[R]=F[R]||[],F[R].push({selector:$,option:H,callback:N,originCallBack:P}),D[DOMUtilsData.SymbolEvents]=F;});});}off(w,A,C,T,E,k){function U(N,R,F){let W=N[R];return typeof W=="boolean"?F.capture=W:typeof W=="object"&&"capture"in W&&(F.capture=W.capture),F}let L=this,_=arguments;if(typeof w=="string"&&(w=L.selectorAll(w)),w==null)return;let I=[];w instanceof NodeList||Array.isArray(w)?(w=w,I=[...w]):I.push(w);let $=[];Array.isArray(A)?$=$.concat(A):typeof A=="string"&&($=$.concat(A.split(" ")));let P=[];Array.isArray(C)?P=P.concat(C):typeof C=="string"&&P.push(C);let H=T,V={capture:!1};typeof C=="function"?(H=C,V=U(_,3,V)):V=U(_,4,V);let D=!1;(_.length===2||_.length===3&&typeof _[2]=="string"||Array.isArray(_[2]))&&(D=!0),I.forEach(N=>{let R=N[DOMUtilsData.SymbolEvents]||{};$.forEach(F=>{let W=R[F]||[];typeof k=="function"&&(W=W.filter(k));for(let X=0;X<W.length;X++){let Q=W[X],G=!0;G&&H&&Q.originCallBack!==H&&(G=!1),G&&P.length&&Array.isArray(Q.selector)&&JSON.stringify(Q.selector)!==JSON.stringify(P)&&(G=!1),G&&V.capture!==Q.option.capture&&(G=!1),(G||D)&&(N.removeEventListener(F,Q.callback,Q.option),W.splice(X--,1));}W.length===0&&DOMUtilsCommonUtils.delete(R,A);}),N[DOMUtilsData.SymbolEvents]=R;});}offAll(w,A){if(typeof w=="string"&&(w=this.selectorAll(w)),w==null)return;let T=[];w instanceof NodeList||Array.isArray(w)?T=[...w]:T.push(w);let E=[];Array.isArray(A)?E=E.concat(A):typeof A=="string"&&(E=E.concat(A.split(" "))),T.forEach(k=>{Object.getOwnPropertySymbols(k).forEach(U=>{if(!U.toString().startsWith("Symbol(events_"))return;let L=k[U]||{};(E.length?E:Object.keys(L)).forEach(I=>{let $=L[I];if($){for(const P of $)k.removeEventListener(I,P.callback,{capture:P.option.capture});DOMUtilsCommonUtils.delete(k[U],I);}});});});}ready(w){if(typeof w!="function")return;let A=this;function C(){try{return A.windowApi.document.readyState==="complete"||A.windowApi.document.readyState!=="loading"&&!A.windowApi.document.documentElement.doScroll}catch{return !1}}function T(){U(),w();}let E=[{target:A.windowApi.document,eventType:"DOMContentLoaded",callback:T},{target:A.windowApi.window,eventType:"load",callback:T}];function k(){for(let L=0;L<E.length;L++){let _=E[L];_.target.addEventListener(_.eventType,_.callback);}}function U(){for(let L=0;L<E.length;L++){let _=E[L];_.target.removeEventListener(_.eventType,_.callback);}}C()?setTimeout(w):k();}trigger(w,A,C,T=!0){if(typeof w=="string"&&(w=this.selectorAll(w)),w==null)return;let k=[];w instanceof NodeList||Array.isArray(w)?(w=w,k=[...w]):k=[w];let U=[];Array.isArray(A)?U=A:typeof A=="string"&&(U=A.split(" ")),k.forEach(L=>{let _=L[DOMUtilsData.SymbolEvents]||{};U.forEach(I=>{let $=null;C&&C instanceof Event?$=C:($=new Event(I),C&&Object.keys(C).forEach(P=>{$[P]=C[P];})),T==!1&&I in _?_[I].forEach(P=>{P.callback($);}):L.dispatchEvent($);});});}click(w,A,C,T){let E=this;if(typeof w=="string"&&(w=E.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(k=>{E.click(k,A,C,T);});return}A==null?E.trigger(w,"click",C,T):E.on(w,"click",null,A);}}blur(w,A,C,T){let E=this;if(typeof w=="string"&&(w=E.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(k=>{E.focus(k,A,C,T);});return}A===null?E.trigger(w,"blur",C,T):E.on(w,"blur",null,A);}}focus(w,A,C,T){let E=this;if(typeof w=="string"&&(w=E.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(k=>{E.focus(k,A,C,T);});return}A==null?E.trigger(w,"focus",C,T):E.on(w,"focus",null,A);}}hover(w,A,C){let T=this;if(typeof w=="string"&&(w=T.selectorAll(w)),w!=null){if(isNodeList(w)){w.forEach(E=>{T.hover(E,A,C);});return}T.on(w,"mouseenter",null,A,C),T.on(w,"mouseleave",null,A,C);}}keyup(w,A,C){let T=this;if(w!=null){if(typeof w=="string"&&(w=T.selectorAll(w)),isNodeList(w)){w.forEach(E=>{T.keyup(E,A,C);});return}T.on(w,"keyup",null,A,C);}}keydown(w,A,C){let T=this;if(w!=null){if(typeof w=="string"&&(w=T.selectorAll(w)),isNodeList(w)){w.forEach(E=>{T.keydown(E,A,C);});return}T.on(w,"keydown",null,A,C);}}keypress(w,A,C){let T=this;if(w!=null){if(typeof w=="string"&&(w=T.selectorAll(w)),isNodeList(w)){w.forEach(E=>{T.keypress(E,A,C);});return}T.on(w,"keypress",null,A,C);}}listenKeyboard(w,A="keypress",C,T){let E=this;typeof w=="string"&&(w=E.selectorAll(w));let k=function(U){let L=U.key||U.code,_=U.charCode||U.keyCode||U.which,I=[];U.ctrlKey&&I.push("ctrl"),U.altKey&&I.push("alt"),U.metaKey&&I.push("meta"),U.shiftKey&&I.push("shift"),typeof C=="function"&&C(L,_,I,U);};return E.on(w,A,k,T),{removeListen:()=>{E.off(w,A,k,T);}}}selector(w){return this.selectorAll(w)[0]}selectorAll(w){const A=this;if(w=w.trim(),w.match(/[^\s]{1}:empty$/gi))return w=w.replace(/:empty$/gi,""),Array.from(A.windowApi.document.querySelectorAll(w)).filter(C=>{var T;return ((T=C==null?void 0:C.innerHTML)==null?void 0:T.trim())===""});if(w.match(/[^\s]{1}:contains\("(.*)"\)$/i)||w.match(/[^\s]{1}:contains\('(.*)'\)$/i)){let T=w.match(/:contains\(("|')(.*)("|')\)$/i)[2];return w=w.replace(/:contains\(("|')(.*)("|')\)$/gi,""),Array.from(A.windowApi.document.querySelectorAll(w)).filter(E=>{var k;return (k=(E==null?void 0:E.textContent)||(E==null?void 0:E.innerText))==null?void 0:k.includes(T)})}else if(w.match(/[^\s]{1}:regexp\("(.*)"\)$/i)||w.match(/[^\s]{1}:regexp\('(.*)'\)$/i)){let T=w.match(/:regexp\(("|')(.*)("|')\)$/i)[2],E=T.match(/("|'),[\s]*("|')([igm]{0,3})$/i),k="";E&&(T=T.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi,""),k=E[3]);let U=new RegExp(T,k);return w=w.replace(/:regexp\(("|')(.*)("|')\)$/gi,""),Array.from(A.windowApi.document.querySelectorAll(w)).filter(L=>{var _;return !!((_=(L==null?void 0:L.textContent)||(L==null?void 0:L.innerText))!=null&&_.match(U))})}else return Array.from(A.windowApi.document.querySelectorAll(w))}}const isNodeList=S=>Array.isArray(S)||S instanceof NodeList;class DOMUtils extends DOMUtilsEvent{constructor(A){super(A);Z(this,"version","2024.12.4");}attr(A,C,T){let E=this;if(typeof A=="string"&&(A=E.selectorAll(A)),A!=null){if(isNodeList(A)){if(T==null)return E.attr(A[0],C,T);A.forEach(k=>{E.attr(k,C,T);});return}if(T==null)return A.getAttribute(C);A.setAttribute(C,T);}}createElement(A,C,T){let k=this.windowApi.document.createElement(A);return typeof C=="string"?(k.innerHTML=C,k):(C==null&&(C={}),T==null&&(T={}),Object.keys(C).forEach(U=>{let L=C[U];k[U]=L;}),Object.keys(T).forEach(U=>{let L=T[U];typeof L=="object"?L=JSON.stringify(L):typeof L=="function"&&(L=L.toString()),k.setAttribute(U,L);}),k)}css(A,C,T){let E=this;function k(U,L){let _=["width","height","top","left","right","bottom","font-size"];return typeof L=="number"&&(L=L.toString()),typeof L=="string"&&_.includes(U)&&L.match(/[0-9]$/gi)&&(L=L+"px"),L}if(typeof A=="string"&&(A=E.selectorAll(A)),A!=null){if(isNodeList(A)){if(typeof C=="string"){if(T==null)return E.css(A[0],C);A.forEach(U=>{E.css(U,C);});return}else if(typeof C=="object"){A.forEach(U=>{E.css(U,C);});return}return}if(typeof C=="string"){if(T==null)return E.windowApi.globalThis.getComputedStyle(A).getPropertyValue(C);T==="string"&&T.includes("!important")?A.style.setProperty(C,T,"important"):(T=k(C,T),A.style.setProperty(C,T));}else if(typeof C=="object")for(let U in C)typeof C[U]=="string"&&C[U].includes("!important")?A.style.setProperty(U,C[U],"important"):(C[U]=k(U,C[U]),A.style.setProperty(U,C[U]));}}text(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){if(C==null)return T.text(A[0]);A.forEach(E=>{T.text(E,C);});return}if(C==null)return A.textContent||A.innerText;C instanceof Node&&(C=C.textContent||C.innerText),"textContent"in A?A.textContent=C:"innerText"in A&&(A.innerText=C);}}html(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){if(C==null)return T.html(A[0]);A.forEach(E=>{T.html(E,C);});return}if(C==null)return A.innerHTML;C instanceof Element&&(C=C.innerHTML),"innerHTML"in A&&(A.innerHTML=C);}}getTransform(A,C=!1){var L;let T=this,E=0,k=0;if(!(C||!C&&DOMUtilsCommonUtils.isShow(A))){let{recovery:_}=DOMUtilsCommonUtils.showElement(A),I=T.getTransform(A,!0);return _(),I}let U=T.windowApi.globalThis.getComputedStyle(A).transform;if(U!=null&&U!=="none"&&U!==""){let _=(L=U.match(/\((.+)\)/))==null?void 0:L[1].split(",");_?(E=Math.abs(parseInt(_[4])),k=Math.abs(parseInt(_[5]))):(E=0,k=0);}return {transformLeft:E,transformTop:k}}val(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){if(C==null)return T.val(A[0]);A.forEach(E=>{T.val(E,C);});return}if(C==null)return A.localName==="input"&&(A.type==="checkbox"||A.type==="radio")?A.checked:A.value;A.localName==="input"&&(A.type==="checkbox"||A.type==="radio")?A.checked=!!C:A.value=C;}}prop(A,C,T){let E=this;if(typeof A=="string"&&(A=E.selectorAll(A)),A!=null){if(isNodeList(A)){if(T==null)return E.prop(A[0],C);A.forEach(k=>{E.prop(k,C,T);});return}if(T==null)return Reflect.get(A,C);Reflect.set(A,C,T);}}removeAttr(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.removeAttr(E,C);});return}A.removeAttribute(C);}}removeClass(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.removeClass(E,C);});return}C==null?A.className="":(Array.isArray(C)||(C=C.split(" ")),C.forEach(E=>{A.classList.remove(E);}));}}removeProp(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.removeProp(E,C);});return}DOMUtilsCommonUtils.delete(A,C);}}replaceWith(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.replaceWith(E,C);});return}typeof C=="string"&&(C=T.parseHTML(C,!1,!1)),A.parentElement.replaceChild(C,A);}}addClass(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.addClass(E,C);});return}Array.isArray(C)||(C=C.split(" ")),C.forEach(E=>{E.trim()!=""&&A.classList.add(E);});}}hasClass(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A==null)return !1;if(isNodeList(A)){let E=!0;for(let k=0;k<A.length;k++){const U=A[k];E=E&&T.hasClass(U,C);}return E}if(!(A!=null&&A.classList))return !1;Array.isArray(C)||(C=C.split(" "));for(let E=0;E<C.length;E++){const k=C[E].trim();if(!A.classList.contains(k))return !1}return !0}append(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A==null)return;if(isNodeList(A)){A.forEach(k=>{T.append(k,C);});return}function E(k,U){typeof C=="string"?k.insertAdjacentHTML("beforeend",U):k.appendChild(U);}if(Array.isArray(C)||C instanceof NodeList){let k=T.windowApi.document.createDocumentFragment();C.forEach(U=>{typeof U=="string"&&(U=T.parseHTML(U,!0,!1)),k.appendChild(U);}),A.appendChild(k);}else E(A,C);}prepend(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.prepend(E,C);});return}typeof C=="string"?A.insertAdjacentHTML("afterbegin",C):A.firstChild==null?A.prepend(C):A.insertBefore(C,A.firstChild);}}after(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.after(E,C);});return}if(typeof C=="string")A.insertAdjacentHTML("afterend",C);else {let E=A.parentElement,k=A.nextSibling;!E||k?A.after(C):A.parentElement.insertBefore(C,A.nextSibling);}}}before(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.before(E,C);});return}if(typeof C=="string")A.insertAdjacentHTML("beforebegin",C);else {let E=A.parentElement;E?E.insertBefore(C,A):A.before(C);}}}remove(A){let C=this;if(typeof A=="string"&&(A=C.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(T=>{C.remove(T);});return}A.remove();}}empty(A){let C=this;if(typeof A=="string"&&(A=C.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(T=>{C.empty(T);});return}A.innerHTML="";}}offset(A){let C=this;if(typeof A=="string"&&(A=C.selector(A)),A==null)return;let T=A.getBoundingClientRect();return {top:T.top+C.windowApi.globalThis.scrollY,left:T.left+C.windowApi.globalThis.scrollX}}width(A,C=!1){let T=this;if(typeof A=="string"&&(A=T.selector(A)),A!=null){if(DOMUtilsCommonUtils.isWin(A))return T.windowApi.window.document.documentElement.clientWidth;if(A.nodeType===9)return A=A,Math.max(A.body.scrollWidth,A.documentElement.scrollWidth,A.body.offsetWidth,A.documentElement.offsetWidth,A.documentElement.clientWidth);if(C||!C&&DOMUtilsCommonUtils.isShow(A)){if(A=A,parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"width").toString())>0)return parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"width").toString());if(A.offsetWidth>0){let E=DOMUtilsCommonUtils.getStyleValue(A,"borderLeftWidth"),k=DOMUtilsCommonUtils.getStyleValue(A,"borderRightWidth"),U=DOMUtilsCommonUtils.getStyleValue(A,"paddingLeft"),L=DOMUtilsCommonUtils.getStyleValue(A,"paddingRight"),_=parseFloat(A.offsetWidth.toString())-parseFloat(E.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {A=A;let{recovery:E}=DOMUtilsCommonUtils.showElement(A),k=T.width(A,!0);return E(),k}}}height(A,C=!1){let T=this;if(DOMUtilsCommonUtils.isWin(A))return T.windowApi.window.document.documentElement.clientHeight;if(typeof A=="string"&&(A=T.selector(A)),A!=null){if(A.nodeType===9)return A=A,Math.max(A.body.scrollHeight,A.documentElement.scrollHeight,A.body.offsetHeight,A.documentElement.offsetHeight,A.documentElement.clientHeight);if(C||!C&&DOMUtilsCommonUtils.isShow(A)){if(A=A,parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"height").toString())>0)return parseFloat(DOMUtilsCommonUtils.getStyleValue(A,"height").toString());if(A.offsetHeight>0){let E=DOMUtilsCommonUtils.getStyleValue(A,"borderTopWidth"),k=DOMUtilsCommonUtils.getStyleValue(A,"borderBottomWidth"),U=DOMUtilsCommonUtils.getStyleValue(A,"paddingTop"),L=DOMUtilsCommonUtils.getStyleValue(A,"paddingBottom"),_=parseFloat(A.offsetHeight.toString())-parseFloat(E.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {A=A;let{recovery:E}=DOMUtilsCommonUtils.showElement(A),k=T.height(A,!0);return E(),k}}}outerWidth(A,C=!1){let T=this;if(DOMUtilsCommonUtils.isWin(A))return T.windowApi.window.innerWidth;if(typeof A=="string"&&(A=T.selector(A)),A!=null)if(A=A,C||!C&&DOMUtilsCommonUtils.isShow(A)){let E=T.windowApi.globalThis.getComputedStyle(A,null),k=DOMUtilsCommonUtils.getStyleValue(E,"marginLeft"),U=DOMUtilsCommonUtils.getStyleValue(E,"marginRight");return A.offsetWidth+k+U}else {let{recovery:E}=DOMUtilsCommonUtils.showElement(A),k=T.outerWidth(A,!0);return E(),k}}outerHeight(A,C=!1){let T=this;if(DOMUtilsCommonUtils.isWin(A))return T.windowApi.window.innerHeight;if(typeof A=="string"&&(A=T.selector(A)),A!=null)if(A=A,C||!C&&DOMUtilsCommonUtils.isShow(A)){let E=T.windowApi.globalThis.getComputedStyle(A,null),k=DOMUtilsCommonUtils.getStyleValue(E,"marginTop"),U=DOMUtilsCommonUtils.getStyleValue(E,"marginBottom");return A.offsetHeight+k+U}else {let{recovery:E}=DOMUtilsCommonUtils.showElement(A),k=T.outerHeight(A,!0);return E(),k}}animate(A,C,T=1e3,E=null){let k=this;if(typeof A=="string"&&(A=k.selectorAll(A)),A==null)return;if(isNodeList(A)){A.forEach($=>{k.animate($,C,T,E);});return}if(typeof T!="number"||T<=0)throw new TypeError("duration must be a positive number");if(typeof E!="function"&&E!==void 0)throw new TypeError("callback must be a function or null");if(typeof C!="object"||C===void 0)throw new TypeError("styles must be an object");if(Object.keys(C).length===0)throw new Error("styles must contain at least one property");let U=performance.now(),L={},_={};for(let $ in C)L[$]=A.style[$]||k.windowApi.globalThis.getComputedStyle(A)[$],_[$]=C[$];let I=setInterval(function(){let P=(performance.now()-U)/T;P>1&&(P=1);for(let H in C)A.style[H]=L[H]+(_[H]-L[H])*P+"px";P===1&&(clearInterval(I),E&&E());},10);}wrap(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A==null)return;if(isNodeList(A)){A.forEach(L=>{T.wrap(L,C);});return}A=A;let E=T.windowApi.document.createElement("div");E.innerHTML=C;let k=E.firstChild;A.parentElement.insertBefore(k,A),k.appendChild(A);}prev(A){if(typeof A=="string"&&(A=this.selector(A)),A!=null)return A.previousElementSibling}next(A){if(typeof A=="string"&&(A=this.selector(A)),A!=null)return A.nextElementSibling}noConflict(){let A=this;return A.windowApi.window.DOMUtils&&DOMUtilsCommonUtils.delete(window,"DOMUtils"),A.windowApi.window.DOMUtils=this,this}siblings(A){if(typeof A=="string"&&(A=this.selector(A)),A!=null)return Array.from(A.parentElement.children).filter(T=>T!==A)}parent(A){let C=this;if(typeof A=="string"&&(A=C.selector(A)),A!=null)if(isNodeList(A)){let T=[];return A.forEach(E=>{T.push(C.parent(E));}),T}else return A.parentElement}parseHTML(A,C=!1,T=!1){let E=this;A=A.trim();function k(){let L=new DOMParser;return T?L.parseFromString(A,"text/html"):L.parseFromString(A,"text/html").body.firstChild}function U(){let L=E.windowApi.document.createElement("div");return L.innerHTML=A,T?L:L.firstChild}return C?k():U()}serialize(A){const C=A.elements;let T=[];for(let E=0;E<C.length;E++){const k=C[E];if(k.name&&!k.disabled&&(k.checked||["text","hidden","password","textarea","select-one","select-multiple"].includes(k.type)))if(k.type==="select-multiple")for(let U=0;U<k.options.length;U++)k.options[U].selected&&T.push({name:k.name,value:k.options[U].value});else T.push({name:k.name,value:k.value});}return T.map(E=>`${encodeURIComponent(E.name)}=${encodeURIComponent(E.value)}`).join("&")}show(A,C=!0){let T=this;if(A!=null)if(typeof A=="string"&&(A=T.selectorAll(A)),A instanceof NodeList||A instanceof Array){A=A;for(const E of A)T.show(E,C);}else A=A,A.style.display="",C&&(DOMUtilsCommonUtils.isShow(A)||A.style.setProperty("display","unset","important"));}hide(A,C=!0){let T=this;if(A!=null)if(typeof A=="string"&&(A=T.selectorAll(A)),A instanceof NodeList||A instanceof Array){A=A;for(const E of A)T.hide(E,C);}else A=A,A.style.display="none",C&&DOMUtilsCommonUtils.isShow(A)&&A.style.setProperty("display","none","important");}fadeIn(A,C=400,T){if(A==null)return;let E=this;if(typeof A=="string"&&(A=E.selectorAll(A)),isNodeList(A)){A.forEach(_=>{E.fadeIn(_,C,T);});return}A.style.opacity="0",A.style.display="";let k=null,U=null;function L(_){k||(k=_);let I=_-k;A=A,A.style.opacity=Math.min(I/C,1).toString(),I<C?E.windowApi.window.requestAnimationFrame(L):(T&&typeof T=="function"&&T(),E.windowApi.window.cancelAnimationFrame(U));}U=E.windowApi.window.requestAnimationFrame(L);}fadeOut(A,C=400,T){let E=this;if(A==null)return;if(typeof A=="string"&&(A=E.selectorAll(A)),isNodeList(A)){A.forEach(_=>{E.fadeOut(_,C,T);});return}A.style.opacity="1";let k=null,U=null;function L(_){k||(k=_);let I=_-k;A=A,A.style.opacity=Math.max(1-I/C,0).toString(),I<C?E.windowApi.window.requestAnimationFrame(L):(A.style.display="none",typeof T=="function"&&T(),E.windowApi.window.cancelAnimationFrame(U));}U=E.windowApi.window.requestAnimationFrame(L);}toggle(A,C){let T=this;if(typeof A=="string"&&(A=T.selectorAll(A)),A!=null){if(isNodeList(A)){A.forEach(E=>{T.toggle(E);});return}T.windowApi.globalThis.getComputedStyle(A).getPropertyValue("display")==="none"?T.show(A,C):T.hide(A,C);}}createDOMUtils(A){return new DOMUtils(A)}getTextBoundingRect(A,C,T){var Q;let E=this;if(!A||!("value"in A))return A;if(C==null&&(C=A.selectionStart||0),T==null&&(T=A.selectionEnd||0),typeof C=="string"&&(C=parseFloat(C)),(typeof C!="number"||isNaN(C))&&(C=0),C<0?C=0:C=Math.min(A.value.length,C),typeof T=="string"&&(T=parseFloat(T)),(typeof T!="number"||isNaN(T)||T<C)&&(T=C),T<0?T=0:T=Math.min(A.value.length,T),typeof A.createTextRange=="function"){let G=A.createTextRange();return G.collapse(!0),G.moveStart("character",C),G.moveEnd("character",T-C),G.getBoundingClientRect()}let k=W(),U=k.top,L=k.left,_=X("width",!0),I=X("height",!0),$="white-space:pre;padding:0;margin:0;",P=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];U+=X("padding-top",!0),U+=X("border-top-width",!0),L+=X("padding-left",!0),L+=X("border-left-width",!0),L+=1;for(let G=0;G<P.length;G++){let tt=P[G];$+=tt+":"+X(tt)+";";}let H=A.value||"G",V=H.length,D=E.windowApi.document.createElement("div");C>0&&F(0,C);var N=F(C,T);V>T&&F(T,V),D.style.cssText=$,D.style.position="absolute",D.style.top=U+"px",D.style.left=L+"px",D.style.width=_+"px",D.style.height=I+"px",E.windowApi.document.body.appendChild(D);var R=N.getBoundingClientRect();return (Q=D==null?void 0:D.parentNode)==null||Q.removeChild(D),R;function F(G,tt){var et=E.windowApi.document.createElement("span");return et.style.cssText=$,et.textContent=H.substring(G,tt),D.appendChild(et),et}function W(){let G=E.windowApi.document.body,tt=E.windowApi.document.defaultView,et=E.windowApi.document.documentElement,nt=E.windowApi.document.createElement("div");nt.style.paddingLeft=nt.style.width="1px",G.appendChild(nt);var bt=nt.offsetWidth==2;G.removeChild(nt);let Y=A.getBoundingClientRect();var z=et.clientTop||G.clientTop||0,q=et.clientLeft||G.clientLeft||0,J=tt.pageYOffset||bt&&et.scrollTop||G.scrollTop,K=tt.pageXOffset||bt&&et.scrollLeft||G.scrollLeft;return {top:Y.top+J-z,left:Y.left+K-q}}function X(G,tt){var et=E.windowApi.document.defaultView.getComputedStyle(A,null).getPropertyValue(G);return tt?parseFloat(et):et}}}let domUtils$1=new DOMUtils;class ColorConversion{isHex(w){return !(typeof w!="string"||!w.match(/^(\#|)[0-9a-fA-F]{6}$/))}hexToRgba(w,A){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);return w&&w.replace(/\s+/g,"").length===7?"rgba("+parseInt("0x"+w.slice(1,3))+","+parseInt("0x"+w.slice(3,5))+","+parseInt("0x"+w.slice(5,7))+","+A+")":""}hexToRgb(w){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);w=w.replace("#","");let A=w.match(/../g);for(let C=0;C<3;C++)A[C]=parseInt(A[C],16);return A}rgbToHex(w,A,C){let T=/^\d{1,3}$/;if(!T.test(w.toString())||!T.test(A.toString())||!T.test(C.toString()))throw new TypeError("输入错误的rgb颜色值");let E=[w.toString(16),A.toString(16),C.toString(16)];for(let k=0;k<3;k++)E[k].length==1&&(E[k]="0"+E[k]);return "#"+E.join("")}getDarkColor(w,A){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);let C=this.hexToRgb(w);for(let T=0;T<3;T++)C[T]=Math.floor(C[T]*(1-A));return this.rgbToHex(C[0],C[1],C[2])}getLightColor(w,A){if(!this.isHex(w))throw new TypeError("输入错误的hex",w);let C=this.hexToRgb(w);for(let T=0;T<3;T++)C[T]=Math.floor((255-C[T])*A+C[T]);return this.rgbToHex(C[0],C[1],C[2])}}var jt,Ht,Vt;class GBKEncoder{constructor(){ut(this,jt,[]);ut(this,Ht,{});ut(this,Vt,{});let w=this.handleText("4e:020405060f12171f20212326292e2f313335373c40414244464a5155575a5b6263646567686a6b6c6d6e6f727475767778797a7b7c7d7f808182838485878a#909697999c9d9ea3aaafb0b1b4b6b7b8b9bcbdbec8cccfd0d2dadbdce0e2e6e7e9edeeeff1f4f8f9fafcfe,4f:00020304050607080b0c12131415161c1d212328292c2d2e31333537393b3e3f40414244454748494a4b4c525456616266686a6b6d6e7172757778797a7d8081828586878a8c8e909293959698999a9c9e9fa1a2a4abadb0b1b2b3b4b6b7b8b9babbbcbdbec0c1c2c6c7c8c9cbcccdd2d3d4d5d6d9dbe0e2e4e5e7ebecf0f2f4f5f6f7f9fbfcfdff,50:000102030405060708090a#0b0e1011131516171b1d1e20222324272b2f303132333435363738393b3d3f404142444546494a4b4d5051525354565758595b5d5e5f6061626364666768696a6b6d6e6f70717273747578797a7c7d818283848687898a8b8c8e8f909192939495969798999a9b9c9d9e9fa0a1a2a4a6aaabadaeafb0b1b3b4b5b6b7b8b9bcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdced0d1d2d3d4d5d7d8d9dbdcdddedfe0e1e2e3e4e5e8e9eaebeff0f1f2f4f6f7f8f9fafcfdfeff,51:00010203040508#090a0c0d0e0f1011131415161718191a1b1c1d1e1f2022232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e42474a4c4e4f5052535758595b5d5e5f606163646667696a6f727a7e7f838486878a8b8e8f90919394989a9d9e9fa1a3a6a7a8a9aaadaeb4b8b9babebfc1c2c3c5c8cacdced0d2d3d4d5d6d7d8d9dadcdedfe2e3e5e6e7e8e9eaeceef1f2f4f7fe,52:0405090b0c0f101314151c1e1f2122232526272a2c2f313234353c3e4445464748494b4e4f5253555758#595a5b5d5f6062636466686b6c6d6e7071737475767778797a7b7c7e808384858687898a8b8c8d8e8f91929495969798999a9ca4a5a6a7aeafb0b4b5b6b7b8b9babbbcbdc0c1c2c4c5c6c8cacccdcecfd1d3d4d5d7d9dadbdcdddee0e1e2e3e5e6e7e8e9eaebecedeeeff1f2f3f4f5f6f7f8fbfcfd,53:0102030407090a0b0c0e11121314181b1c1e1f2224252728292b2c2d2f3031323334353637383c3d404244464b4c4d505458595b5d65686a6c6d7276797b7c7d7e80818387888a8e8f#90919293949697999b9c9ea0a1a4a7aaabacadafb0b1b2b3b4b5b7b8b9babcbdbec0c3c4c5c6c7cecfd0d2d3d5dadcdddee1e2e7f4fafeff,54:000205070b1418191a1c2224252a303336373a3d3f4142444547494c4d4e4f515a5d5e5f6061636567696a6b6c6d6e6f7074797a7e7f8183858788898a8d919397989c9e9fa0a1a2a5aeb0b2b5b6b7b9babcbec3c5cacbd6d8dbe0e1e2e3e4ebeceff0f1f4f5f6f7f8f9fbfe,55:0002030405080a0b0c0d0e121315161718191a1c1d1e1f212526#28292b2d3234353638393a3b3d40424547484b4c4d4e4f515253545758595a5b5d5e5f60626368696b6f7071727374797a7d7f85868c8d8e9092939596979a9b9ea0a1a2a3a4a5a6a8a9aaabacadaeafb0b2b4b6b8babcbfc0c1c2c3c6c7c8cacbcecfd0d5d7d8d9dadbdee0e2e7e9edeef0f1f4f6f8f9fafbfcff,56:0203040506070a0b0d1011121314151617191a1c1d202122252628292a2b2e2f30333537383a3c3d3e404142434445464748494a4b4f5051525355565a5b5d5e5f6061#636566676d6e6f70727374757778797a7d7e7f80818283848788898a8b8c8d9091929495969798999a9b9c9d9e9fa0a1a2a4a5a6a7a8a9aaabacadaeb0b1b2b3b4b5b6b8b9babbbdbebfc0c1c2c3c4c5c6c7c8c9cbcccdcecfd0d1d2d3d5d6d8d9dce3e5e6e7e8e9eaeceeeff2f3f6f7f8fbfc,57:00010205070b0c0d0e0f101112131415161718191a1b1d1e202122242526272b313234353637383c3d3f414344454648494b52535455565859626365676c6e707172747578797a7d7e7f80#818788898a8d8e8f90919495969798999a9c9d9e9fa5a8aaacafb0b1b3b5b6b7b9babbbcbdbebfc0c1c4c5c6c7c8c9cacccdd0d1d3d6d7dbdcdee1e2e3e5e6e7e8e9eaebeceef0f1f2f3f5f6f7fbfcfeff,58:0103040508090a0c0e0f101213141617181a1b1c1d1f222325262728292b2c2d2e2f31323334363738393a3b3c3d3e3f4041424345464748494a4b4e4f505253555657595a5b5c5d5f6061626364666768696a6d6e6f707172737475767778797a7b7c7d7f82848687888a8b8c#8d8e8f909194959697989b9c9da0a1a2a3a4a5a6a7aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbdbebfc0c2c3c4c6c7c8c9cacbcccdcecfd0d2d3d4d6d7d8d9dadbdcdddedfe0e1e2e3e5e6e7e8e9eaedeff1f2f4f5f7f8fafbfcfdfeff,59:000103050608090a0b0c0e1011121317181b1d1e2021222326282c30323335363b3d3e3f404345464a4c4d505253595b5c5d5e5f616364666768696a6b6c6d6e6f70717275777a7b7c7e7f8085898b8c8e8f90919495989a9b9c9d9fa0a1a2a6#a7acadb0b1b3b4b5b6b7b8babcbdbfc0c1c2c3c4c5c7c8c9cccdcecfd5d6d9dbdedfe0e1e2e4e6e7e9eaebedeeeff0f1f2f3f4f5f6f7f8fafcfdfe,5a:00020a0b0d0e0f101214151617191a1b1d1e2122242627282a2b2c2d2e2f3033353738393a3b3d3e3f414243444547484b4c4d4e4f5051525354565758595b5c5d5e5f60616364656668696b6c6d6e6f7071727378797b7c7d7e808182838485868788898a8b8c8d8e8f9091939495969798999c9d9e9fa0a1a2a3a4a5a6a7a8a9abac#adaeafb0b1b4b6b7b9babbbcbdbfc0c3c4c5c6c7c8cacbcdcecfd0d1d3d5d7d9dadbdddedfe2e4e5e7e8eaecedeeeff0f2f3f4f5f6f7f8f9fafbfcfdfeff,5b:0001020304050607080a0b0c0d0e0f10111213141518191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303133353638393a3b3c3d3e3f4142434445464748494a4b4c4d4e4f52565e606167686b6d6e6f7274767778797b7c7e7f82868a8d8e90919294969fa7a8a9acadaeafb1b2b7babbbcc0c1c3c8c9cacbcdcecf#d1d4d5d6d7d8d9dadbdce0e2e3e6e7e9eaebecedeff1f2f3f4f5f6f7fdfe,5c:0002030507080b0c0d0e10121317191b1e1f2021232628292a2b2d2e2f303233353637434446474c4d5253545657585a5b5c5d5f62646768696a6b6c6d70727374757677787b7c7d7e808384858687898a8b8e8f9293959d9e9fa0a1a4a5a6a7a8aaaeafb0b2b4b6b9babbbcbec0c2c3c5c6c7c8c9cacccdcecfd0d1d3d4d5d6d7d8dadbdcdddedfe0e2e3e7e9ebeceeeff1f2f3f4f5f6f7f8f9fafcfdfeff,5d:00#01040508090a0b0c0d0f10111213151718191a1c1d1f2021222325282a2b2c2f3031323335363738393a3b3c3f4041424344454648494d4e4f5051525354555657595a5c5e5f6061626364656667686a6d6e7071727375767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f9091929394959697989a9b9c9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b8b9babbbcbdbebfc0c1c2c3c4c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d7d8d9dadcdfe0e3e4eaeced#f0f5f6f8f9fafbfcff,5e:000407090a0b0d0e1213171e1f20212223242528292a2b2c2f303233343536393a3e3f404143464748494a4b4d4e4f50515253565758595a5c5d5f60636465666768696a6b6c6d6e6f70717577797e8182838588898c8d8e92989b9da1a2a3a4a8a9aaabacaeafb0b1b2b4babbbcbdbfc0c1c2c3c4c5c6c7c8cbcccdcecfd0d4d5d7d8d9dadcdddedfe0e1e2e3e4e5e6e7e9ebecedeeeff0f1f2f3f5f8f9fbfcfd,5f:050607090c0d0e10121416191a1c1d1e21222324#282b2c2e30323334353637383b3d3e3f4142434445464748494a4b4c4d4e4f5154595a5b5c5e5f60636567686b6e6f72747576787a7d7e7f83868d8e8f919394969a9b9d9e9fa0a2a3a4a5a6a7a9abacafb0b1b2b3b4b6b8b9babbbebfc0c1c2c7c8cacbced3d4d5dadbdcdedfe2e3e5e6e8e9eceff0f2f3f4f6f7f9fafc,60:0708090b0c10111317181a1e1f2223242c2d2e3031323334363738393a3d3e404445464748494a4c4e4f5153545657585b5c5e5f606165666e71727475777e80#8182858687888a8b8e8f909193959798999c9ea1a2a4a5a7a9aaaeb0b3b5b6b7b9babdbebfc0c1c2c3c4c7c8c9cccdcecfd0d2d3d4d6d7d9dbdee1e2e3e4e5eaf1f2f5f7f8fbfcfdfeff,61:02030405070a0b0c1011121314161718191b1c1d1e21222528292a2c2d2e2f303132333435363738393a3b3c3d3e4041424344454647494b4d4f50525354565758595a5b5c5e5f606163646566696a6b6c6d6e6f717273747678797a7b7c7d7e7f808182838485868788898a8c8d8f9091929395#969798999a9b9c9e9fa0a1a2a3a4a5a6aaabadaeafb0b1b2b3b4b5b6b8b9babbbcbdbfc0c1c3c4c5c6c7c9cccdcecfd0d3d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e7e8e9eaebecedeeeff0f1f2f3f4f6f7f8f9fafbfcfdfe,62:00010203040507091314191c1d1e2023262728292b2d2f303132353638393a3b3c424445464a4f50555657595a5c5d5e5f6061626465687172747577787a7b7d818283858687888b8c8d8e8f9094999c9d9ea3a6a7a9aaadaeafb0b2b3b4b6b7b8babec0c1#c3cbcfd1d5dddee0e1e4eaebf0f2f5f8f9fafb,63:00030405060a0b0c0d0f10121314151718191c2627292c2d2e30313334353637383b3c3e3f40414447484a51525354565758595a5b5c5d60646566686a6b6c6f707273747578797c7d7e7f81838485868b8d9193949597999a9b9c9d9e9fa1a4a6abafb1b2b5b6b9bbbdbfc0c1c2c3c5c7c8cacbccd1d3d4d5d7d8d9dadbdcdddfe2e4e5e6e7e8ebeceeeff0f1f3f5f7f9fafbfcfe,64:0304060708090a0d0e111215161718191a1d1f222324#252728292b2e2f3031323335363738393b3c3e404243494b4c4d4e4f505153555657595a5b5c5d5f60616263646566686a6b6c6e6f70717273747576777b7c7d7e7f8081838688898a8b8c8d8e8f90939497989a9b9c9d9fa0a1a2a3a5a6a7a8aaabafb1b2b3b4b6b9bbbdbebfc1c3c4c6c7c8c9cacbcccfd1d3d4d5d6d9dadbdcdddfe0e1e3e5e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,65:01020304050607080a0b0c0d0e0f10111314151617191a1b1c1d1e1f2021#222324262728292a2c2d30313233373a3c3d404142434446474a4b4d4e5052535457585a5c5f606164656768696a6d6e6f7173757678797a7b7c7d7e7f8081828384858688898a8d8e8f92949596989a9d9ea0a2a3a6a8aaacaeb1b2b3b4b5b6b7b8babbbebfc0c2c7c8c9cacdd0d1d3d4d5d8d9dadbdcdddedfe1e3e4eaebf2f3f4f5f8f9fbfcfdfeff,66:0104050708090b0d1011121617181a1b1c1e2122232426292a2b2c2e3032333738393a3b3d3f40424445464748494a4d4e505158#595b5c5d5e6062636567696a6b6c6d7172737578797b7c7d7f808183858688898a8b8d8e8f909293949598999a9b9c9e9fa0a1a2a3a4a5a6a9aaabacadafb0b1b2b3b5b6b7b8babbbcbdbfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8dadedfe0e1e2e3e4e5e7e8eaebecedeeeff1f5f6f8fafbfd,67:010203040506070c0e0f1112131618191a1c1e20212223242527292e303233363738393b3c3e3f414445474a4b4d5254555758595a5b5d62636466676b6c6e717476#78797a7b7d8082838586888a8c8d8e8f9192939496999b9fa0a1a4a6a9acaeb1b2b4b9babbbcbdbebfc0c2c5c6c7c8c9cacbcccdced5d6d7dbdfe1e3e4e6e7e8eaebedeef2f5f6f7f8f9fafbfcfe,68:01020304060d1012141518191a1b1c1e1f20222324252627282b2c2d2e2f30313435363a3b3f474b4d4f52565758595a5b5c5d5e5f6a6c6d6e6f707172737578797a7b7c7d7e7f8082848788898a8b8c8d8e90919294959698999a9b9c9d9e9fa0a1a3a4a5a9aaabacaeb1b2b4b6b7b8#b9babbbcbdbebfc1c3c4c5c6c7c8cacccecfd0d1d3d4d6d7d9dbdcdddedfe1e2e4e5e6e7e8e9eaebecedeff2f3f4f6f7f8fbfdfeff,69:00020304060708090a0c0f11131415161718191a1b1c1d1e21222325262728292a2b2c2e2f313233353637383a3b3c3e4041434445464748494a4b4c4d4e4f50515253555658595b5c5f616264656768696a6c6d6f7072737475767a7b7d7e7f8183858a8b8c8e8f909192939697999a9d9e9fa0a1a2a3a4a5a6a9aaacaeafb0b2b3b5b6b8b9babcbd#bebfc0c2c3c4c5c6c7c8c9cbcdcfd1d2d3d5d6d7d8d9dadcdddee1e2e3e4e5e6e7e8e9eaebeceeeff0f1f3f4f5f6f7f8f9fafbfcfe,6a:000102030405060708090b0c0d0e0f10111213141516191a1b1c1d1e20222324252627292b2c2d2e30323334363738393a3b3c3f40414243454648494a4b4c4d4e4f515253545556575a5c5d5e5f60626364666768696a6b6c6d6e6f70727374757677787a7b7d7e7f81828385868788898a8b8c8d8f929394959698999a9b9c9d9e9fa1a2a3a4a5a6#a7a8aaadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,6b:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f252628292a2b2c2d2e2f303133343536383b3c3d3f4041424445484a4b4d4e4f5051525354555657585a5b5c5d5e5f606168696b6c6d6e6f7071727374757677787a7d7e7f808588#8c8e8f909194959798999c9d9e9fa0a2a3a4a5a6a7a8a9abacadaeafb0b1b2b6b8b9babbbcbdbec0c3c4c6c7c8c9caccced0d1d8dadcdddedfe0e2e3e4e5e6e7e8e9ecedeef0f1f2f4f6f7f8fafbfcfeff,6c:000102030408090a0b0c0e12171c1d1e2023252b2c2d31333637393a3b3c3e3f434445484b4c4d4e4f5152535658595a62636566676b6c6d6e6f71737577787a7b7c7f8084878a8b8d8e9192959697989a9c9d9ea0a2a8acafb0b4b5b6b7bac0c1c2c3c6c7c8cbcdcecfd1d2d8#d9dadcdddfe4e6e7e9ecedf2f4f9ff,6d:000203050608090a0d0f101113141516181c1d1f20212223242628292c2d2f30343637383a3f404244494c50555657585b5d5f6162646567686b6c6d707172737576797a7b7d7e7f8081838486878a8b8d8f9092969798999a9ca2a5acadb0b1b3b4b6b7b9babbbcbdbec1c2c3c8c9cacdcecfd0d2d3d4d5d7dadbdcdfe2e3e5e7e8e9eaedeff0f2f4f5f6f8fafdfeff,6e:0001020304060708090b0f12131518191b1c1e1f222627282a2c2e30313335#3637393b3c3d3e3f40414245464748494a4b4c4f5051525557595a5c5d5e606162636465666768696a6c6d6f707172737475767778797a7b7c7d8081828487888a8b8c8d8e91929394959697999a9b9d9ea0a1a3a4a6a8a9abacadaeb0b3b5b8b9bcbebfc0c3c4c5c6c8c9cacccdced0d2d6d8d9dbdcdde3e7eaebecedeeeff0f1f2f3f5f6f7f8fafbfcfdfeff,6f:000103040507080a0b0c0d0e101112161718191a1b1c1d1e1f212223252627282c2e303234353738393a3b3c3d3f404142#43444548494a4c4e4f5051525354555657595a5b5d5f60616364656768696a6b6c6f707173757677797b7d7e7f808182838586878a8b8f909192939495969798999a9b9d9e9fa0a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b7b8babbbcbdbebfc1c3c4c5c6c7c8cacbcccdcecfd0d3d4d5d6d7d8d9dadbdcdddfe2e3e4e5e6e7e8e9eaebecedf0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,70:000102030405060708090a0b0c0d0e0f1012131415161718191c1d1e1f2021222425262728292a#2b2c2d2e2f30313233343637383a3b3c3d3e3f404142434445464748494a4b4d4e505152535455565758595a5b5c5d5f606162636465666768696a6e7172737477797a7b7d818283848687888b8c8d8f90919397989a9b9e9fa0a1a2a3a4a5a6a7a8a9aab0b2b4b5b6babebfc4c5c6c7c9cbcccdcecfd0d1d2d3d4d5d6d7dadcdddee0e1e2e3e5eaeef0f1f2f3f4f5f6f8fafbfcfeff,71:0001020304050607080b0c0d0e0f111214171b1c1d1e1f2021222324252728292a2b2c2d2e323334#353738393a3b3c3d3e3f4041424344464748494b4d4f505152535455565758595a5b5d5f6061626365696a6b6c6d6f707174757677797b7c7e7f8081828385868788898b8c8d8e909192939596979a9b9c9d9ea1a2a3a4a5a6a7a9aaabadaeafb0b1b2b4b6b7b8babbbcbdbebfc0c1c2c4c5c6c7c8c9cacbcccdcfd0d1d2d3d6d7d8d9dadbdcdddedfe1e2e3e4e6e8e9eaebecedeff0f1f2f3f4f5f6f7f8fafbfcfdfeff,72:0001020304050708090a0b0c0d0e0f101112131415161718191a#1b1c1e1f2021222324252627292b2d2e2f3233343a3c3e40414243444546494a4b4e4f505153545557585a5c5e60636465686a6b6c6d707173747677787b7c7d828385868788898c8e9091939495969798999a9b9c9d9ea0a1a2a3a4a5a6a7a8a9aaabaeb1b2b3b5babbbcbdbebfc0c5c6c7c9cacbcccfd1d3d4d5d6d8dadb#95$,30:000102,00b702:c9c7,00a830:0305,2014ff5e20:162618191c1d,30:141508090a0b0c0d0e0f16171011,00:b1d7f7,22:362728110f2a2908371aa52520,231222:992b2e614c483d1d606e6f64651e3534,26:4240,00b020:3233,2103ff0400a4ff:e0e1,203000a7211626:0605,25:cbcfcec7c6a1a0b3b2,203b21:92909193,30:13#95$,21:70717273747576777879#4$,24:88898a8b8c8d8e8f909192939495969798999a9b7475767778797a7b7c7d7e7f808182838485868760616263646566676869##,32:20212223242526272829##,21:606162636465666768696a6b#97$,ff:010203e505060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5de3#95$,30:4142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f90919293#106$a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6#103$,03:9192939495969798999a9b9c9d9e9fa0a1a3a4a5a6a7a8a9#6$b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c3c4c5c6c7c8c9#5$,fe:3536393a3f403d3e41424344##3b3c373831#3334#104$,04:10111213141501161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f#13$30313233343551363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f#11$,02:cacbd9,20:13152535,21:050996979899,22:151f23526667bf,25:505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727381828384858687#88898a8b8c8d8e8f939495bcbde2e3e4e5,2609229530:121d1e#9$,010100e101ce00e0011300e9011b00e8012b00ed01d000ec014d00f301d200f2016b00fa01d400f901:d6d8dadc,00:fcea,0251e7c701:4448,e7c802:61#2$,31:05060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223242526272829#19$,30:212223242526272829,32a333:8e8f9c9d9ea1c4ced1d2d5,fe30ff:e2e4#,212132:31#,20:10#1$,30:fc9b9cfdfe069d9e,fe:494a4b4c4d4e4f50515254555657595a5b5c5d5e5f6061#626364656668696a6b,e7:e7e8e9eaebecedeeeff0f1f2f3,30:07#11$,25:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b#13$,72:dcdddfe2e3e4e5e6e7eaebf5f6f9fdfeff,73:00020405060708090b0c0d0f1011121418191a1f2023242627282d2f30323335363a3b3c3d404142434445464748#494a4b4c4e4f515354555658595a5b5c5d5e5f6162636465666768696a6b6e7071#92$72737475767778797a7b7c7d7f808182838586888a8c8d8f90929394959798999a9c9d9ea0a1a3a4a5a6a7a8aaacadb1b4b5b6b8b9bcbdbebfc1c3c4c5c6c7#cbccced2d3d4d5d6d7d8dadbdcdddfe1e2e3e4e6e8eaebeceeeff0f1f3f4f5f6f7#92$f8f9fafbfcfdfeff,74:0001020407080b0c0d0e1112131415161718191c1d1e1f2021232427292b2d2f31323738393a3b3d3e3f4042434445464748494a4b4c4d#4e4f505152535456585d606162636465666768696a6b6c6e6f717273747578797a#92$7b7c7d7f8284858688898a8c8d8f9192939495969798999a9b9d9fa0a1a2a3a4a5a6aaabacadaeafb0b1b2b3b4b5b6b7b8b9bbbcbdbebfc0c1c2c3c4c5c6c7#c8c9cacbcccdcecfd0d1d3d4d5d6d7d8d9dadbdddfe1e5e7e8e9eaebecedf0f1f2#92$f3f5f8f9fafbfcfdfe,75:0001020305060708090a0b0c0e1012141516171b1d1e202122232426272a2e3436393c3d3f414243444647494a4d5051525355565758#5d5e5f60616263646768696b6c6d6e6f7071737576777a7b7c7d7e808182848587#92$88898a8c8d8e909395989b9c9ea2a6a7a8a9aaadb6b7babbbfc0c1c6cbcccecfd0d1d3d7d9dadcdddfe0e1e5e9ecedeeeff2f3f5f6f7f8fafbfdfe,76:02040607#08090b0d0e0f11121314161a1c1d1e212327282c2e2f31323637393a3b3d414244#92$45464748494a4b4e4f50515253555758595a5b5d5f6061626465666768696a6c6d6e7071727374757677797a7c7f80818385898a8c8d8f9092949597989a9b#9c9d9e9fa0a1a2a3a5a6a7a8a9aaabacadafb0b3b5b6b7b8b9babbbcbdbec0c1c3,554a963f57c3632854ce550954c076:914c,853c77ee827e788d72319698978d6c285b894ffa630966975cb880fa684880ae660276ce51f9655671ac7ff1888450b2596561ca6fb382ad634c625253ed54277b06516b75a45df462d48dcb9776628a8019575d97387f627238767d67cf767e64464f708d2562dc7a17659173ed642c6273822c9881677f724862:6ecc,4f3474e3534a529e7eca90a65e2e6886699c81807ed168d278c5868c9551508d8c2482de80de53058912526576:c4c7c9cbccd3d5d9dadcdddee0e1e2e3e4e6e7e8e9eaebecedf0f3f5f6f7fafbfdff,77:00020305060a0c0e0f1011121314151617181b1c1d1e21232425272a2b#2c2e3031323334393b3d3e3f4244454648494a4b4c4d4e4f52535455565758595c,858496f94fdd582199715b9d62:b1a5,66b48c799c8d7206676f789160b253:5117,8f8880cc8d1d94a1500d72c8590760eb711988ab595482ef672c7b285d297ef7752d6cf58e668ff8903c9f3b6bd491197b145f7c78a784d6853d6b:d5d9d6,5e:0187,75f995ed655d5f:0ac5,8f9f58c181c2907f965b97ad8fb97f168d2c62414fbf53:d85e,8f:a8a9ab,904d68075f6a819888689cd6618b522b762a5f6c658c6fd26ee85bbe644851:75b0,67c44e1979c9997c70b377:5d5e5f606467696a6d6e6f7071727374757677787a7b7c818283868788898a8b8f90939495969798999a9b9c9d9ea1a3a4a6a8abadaeafb1b2b4b6b7b8b9ba#bcbec0c1c2c3c4c5c6c7c8c9cacbcccecfd0d1d2d3d4d5d6d8d9dadddedfe0e1e4,75c55e7673bb83e064ad62e894b56ce2535a52c3640f94c27b944f2f5e1b823681:168a,6e246cca9a736355535c54fa886557e04e0d5e036b657c3f90e8601664e6731c88c16750624d8d22776c8e2991c75f6983dc8521991053c286956b8b60:ede8,707f82:cd31,4ed36ca785cf64cd7cd969fd66f9834953957b564fa7518c6d4b5c428e6d63d253c983:2c36,67e578b4643d5bdf5c945dee8be762c667f48c7a640063ba8749998b8c177f2094f24ea7961098a4660c731677:e6e8eaeff0f1f2f4f5f7f9fafbfc,78:0304050607080a0b0e0f101315191b1e20212224282a2b2e2f31323335363d3f414243444648494a4b4d4f51535458595a#5b5c5e5f606162636465666768696f7071727374757678797a7b7d7e7f80818283,573a5c1d5e38957f507f80a05382655e7545553150218d856284949e671d56326f6e5de2543570928f66626f64a463a35f7b6f8890f481e38fb05c1866685ff16c8996488d81886c649179f057ce6a59621054484e587a0b60e96f848bda627f901e9a8b79e4540375f4630153196c608fdf5f1b9a70803b9f7f4f885c3a8d647fc565a570bd51:45b2,866b5d075ba062bd916c75748e0c7a2061017b794ec77ef877854e1181ed521d51fa6a7153a88e87950496cf6ec19664695a78:848586888a8b8f9092949596999d9ea0a2a4a6a8a9aaabacadaeafb5b6b7b8babbbcbdbfc0c2c3c4c6c7c8cccdcecfd1d2d3d6d7d8dadbdcdddedfe0e1e2e3#e4e5e6e7e9eaebedeeeff0f1f3f5f6f8f9fbfcfdfeff,79:00020304060708090a0b0c,784050a877d7641089e6590463e35ddd7a7f693d4f20823955984e3275ae7a975e:628a,95ef521b5439708a6376952457826625693f918755076df37eaf882262337ef075b5832878c196cc8f9e614874f78bcd6b64523a8d506b21806a847156f153064e:ce1b,51d17c97918b7c074fc38e7f7be17a9c64675d1450ac810676017cb96dec7fe067515b:58f8,78cb64:ae13,63:aa2b,9519642d8fbe7b5476296253592754466b7950a362345e266b864ee38d37888b5f85902e79:0d0e0f1011121415161718191a1b1c1d1f2021222325262728292a2b2c2d2e2f3031323335363738393d3f42434445474a4b4c4d4e4f505152545558596163#6466696a6b6c6e70717273747576797b7c7d7e7f8283868788898b8c8d8e909192,6020803d62c54e39535590f863b880c665e66c2e4f4660ee6de18bde5f3986cb5f536321515a83616863520063638e4850125c9b79775bfc52307a3b60bc905376d75f:b797,76848e6c706f767b7b4977aa51f3909358244f4e6ef48fea654c7b1b72c46da47fdf5ae162b55e95573084827b2c5e1d5f1f90127f1498a063826ec7789870b95178975b57ab75354f4375385e9760e659606dc06bbf788953fc96d551cb52016389540a94938c038dcc7239789f87768fed8c0d53e079:939495969798999b9c9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb0b1b2b4b5b6b7b8bcbfc2c4c5c7c8cacccecfd0d3d4d6d7d9dadbdcdddee0e1e2e5e8ea#eceef1f2f3f4f5f6f7f9fafcfeff,7a:0104050708090a0c0f10111213151618191b1c,4e0176ef53ee948998769f0e952d5b9a8ba24e:221c,51ac846361c252a8680b4f97606b51bb6d1e515c6296659796618c46901775d890fd77636bd272:8aec,8bfb583577798d4c675c9540809a5ea66e2159927aef77ed953b6bb565ad7f0e58065151961f5bf958a954288e726566987f56e4949d76fe9041638754c659:1a3a,579b8eb267358dfa8235524160f0581586fe5ce89e454fc4989d8bb95a2560765384627c904f9102997f6069800c513f80335c1499756d314e8c7a:1d1f21222425262728292a2b2c2d2e2f303132343536383a3e4041424344454748494a4b4c4d4e4f50525354555658595a5b5c5d5e5f606162636465666768#696a6b6c6d6e6f717273757b7c7d7e828587898a8b8c8e8f909394999a9b9ea1a2,8d3053d17f5a7b4f4f104e4f96006cd573d085e95e06756a7ffb6a0a77fe94927e4151e170e653cd8fd483038d2972af996d6cdb574a82b365b980aa623f963259a84eff8bbf7eba653e83f2975e556198de80a5532a8bfd542080ba5e9f6cb88d3982ac915a54296c1b52067eb7575f711a6c7e7c89594b4efd5fff61247caa4e305c0167ab87025cf0950b98ce75af70fd902251af7f1d8bbd594951e44f5b5426592b657780a45b7562:76c2,8f905e456c1f7b264f:0fd8,670d7a:a3a4a7a9aaabaeafb0b1b2b4b5b6b7b8b9babbbcbdbec0c1c2c3c4c5c6c7c8c9cacccdcecfd0d1d2d3d4d5d7d8dadbdcdde1e2e4e7e8e9eaebeceef0f1f2f3#f4f5f6f7f8fbfcfe,7b:0001020507090c0d0e1012131617181a1c1d1f21222327292d,6d:6eaa,798f88b15f17752b629a8f854fef91dc65a781:2f51,5e9c81508d74526f89868d4b590d50854ed8961c723681798d1f5bcc8ba3964459877f1a549056:760e,8be565396982949976d66e895e72751867:46d1,7aff809d8d76611f79c665628d635188521a94a27f38809b7eb25c976e2f67607bd9768b9ad8818f7f947cd5641e95507a3f54:4ae5,6b4c640162089e3d80f3759952729769845b683c86e496:0194,94ec4e2a54047ed968398ddf801566f45e9a7fb97b:2f303234353637393b3d3f404142434446484a4d4e535557595c5e5f61636465666768696a6b6c6d6f70737476787a7c7d7f81828384868788898a8b8c8e8f#9192939698999a9b9e9fa0a3a4a5aeafb0b2b3b5b6b7b9babbbcbdbebfc0c2c3c4,57c2803f68975de5653b529f606d9f9a4f9b8eac516c5bab5f135de96c5e62f18d21517194a952fe6c9f82df72d757a267848d2d591f8f9c83c754957b8d4f306cbd5b6459d19f1353e486ca9aa88c3780a16545987e56fa96c7522e74dc52505be1630289024e5662d0602a68fa51735b9851a089c27ba199867f5060ef704c8d2f51495e7f901b747089c4572d78455f529f9f95fa8f689b3c8be17678684267dc8d:ea35,523d8f8a6eda68cd950590ed56fd679c88f98fc754c87b:c5c8c9cacbcdcecfd0d2d4d5d6d7d8dbdcdedfe0e2e3e4e7e8e9ebecedeff0f2f3f4f5f6f8f9fafbfdff,7c:0001020304050608090a0d0e101112131415171819#1a1b1c1d1e20212223242528292b2c2d2e2f3031323334353637393a3b3c3d3e42,9ab85b696d776c264ea55bb39a87916361a890af97e9542b6db55bd251fd558a7f:55f0,64bc634d65f161be608d710a6c:5749,592f676d822a58d5568e8c6a6beb90dd597d801753f76d695475559d83:77cf,683879be548c4f55540876d28c8996026cb36db88d6b89109e648d3a563f9ed175d55f8872e0606854fc4ea86a2a886160528f7054c470d886799e3f6d2a5b8f5f187ea255894faf7334543c539a501954:0e7c,4e4e5ffd745a58f6846b80e1877472d07cca6e567c:434445464748494a4b4c4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f70717275767778797a7e7f8081828384858687#888a8b8c8d8e8f90939496999a9ba0a1a3a6a7a8a9abacadafb0b4b5b6b7b8babb,5f27864e552c62a44e926caa623782b154d7534e733e6ed1753b521253168bdd69d05f8a60006dee574f6b2273af68538fd87f13636260a3552475ea8c6271156da35ba65e7b8352614c9ec478fa87577c27768751f060f6714c66435e4c604d8c0e707063258f895fbd606286d456de6bc160946167534960e066668d3f79fd4f1a70e96c478b:b3f2,7ed88364660f5a5a9b426d:51f7,8c416d3b4f19706b83b7621660d1970d8d27797851fb57:3efa,673a75787a3d79ef7b957c:bfc0c2c3c4c6c9cbcecfd0d1d2d3d4d8dadbdddee1e2e3e4e5e6e7e9eaebecedeef0f1f2f3f4f5f6f7f9fafcfdfeff,7d:000102030405060708090b0c0d0e0f10#1112131415161718191a1b1c1d1e1f212324252628292a2c2d2e30313233343536,808c99658ff96fc08ba59e2159ec7ee97f095409678168d88f917c4d96c653ca602575be6c7253735ac97ea7632451e0810a5df184df628051805b634f0e796d524260b86d4e5b:c4c2,8b:a1b0,65e25fcc964559937e:e7aa,560967b759394f735bb652a0835a988a8d3e753294be50477a3c4ef767b69a7e5ac16b7c76d1575a5c167b3a95f4714e517c80a9827059787f04832768c067ec78:b177,62e363617b804fed526a51cf835069db92748d:f531,89c1952e7bad4ef67d:3738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6f70717273747576#78797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798,506582305251996f6e:1085,6da75efa50f559dc5c066d466c5f7586848b686859568bb253209171964d854969127901712680f64ea490ca6d479a845a0756bc640594f077eb4fa5811a72e189d2997a7f347ede527f655991758f:7f83,53eb7a9663:eda5,768679f888579636622a52ab8282685467706377776b7aed6d017ed389e359d0621285c982a5754c501f4ecb75a58beb5c4a5dfe7b4b65a491d14eca6d25895f7d2795264ec58c288fdb9773664b79818fd170ec6d787d:999a9b9c9d9e9fa0a1a2a3a4a5a7a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9#dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fa,5c3d52b283465162830e775b66769cb84eac60ca7c:beb3,7ecf4e958b66666f988897595883656c955c5f8475c997567a:dfde,51c070af7a9863ea7a767ea0739697ed4e4570784e5d915253a965:51e7,81fc8205548e5c31759a97a062d872d975bd5c459a7983ca5c40548077e94e3e6cae805a62d2636e5de851778ddd8e1e952f4ff153e560e770ac526763509e435a1f5026773753777ee26485652b628963985014723589c951b38bc07edd574783cc94a7519b541b5cfb7d:fbfcfdfeff,7e:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f30313233343536373839#3a3c3d3e3f40424344454648494a4b4c4d4e4f505152535455565758595a5b5c5d,4fca7ae36d5a90e19a8f55805496536154af5f0063e9697751ef6168520a582a52d8574e780d770b5eb761777ce062:5b97,4ea27095800362f770e49760577782db67ef68f578d5989779d158f354b353ef6e34514b523b5ba28bfe80af554357a660735751542d7a7a60505b5463a762a053e362635bc767af54ed7a9f82e691775e9388e4593857ae630e8de880ef57577b774fa95feb5bbd6b3e53217b5072c2684677:ff36,65f751b54e8f76d45cbf7aa58475594e9b4150807e:5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081838485868788898a8b8c8d8e8f909192939495969798999a9c9d9e#aeb4bbbcd6e4ecf9,7f:0a101e37393b3c3d3e3f404143464748494a4b4c4d4e4f5253,998861276e8357646606634656f062:ec69,5ed39614578362c955878721814a8fa3556683b167658d5684dd5a6a680f62e67bee961151706f9c8c3063fd89c861d27f0670c26ee57405699472fc5eca90ce67176d6a635e52b3726280014f6c59e5916a70d96d9d52d24e5096f7956d857e78ca7d2f5121579264c2808b7c7b6cea68f1695e51b7539868a872819ece7bf172f879bb6f137406674e91cc9ca4793c83:8954,540f68174e3d538952b1783e5386522950884f:8bd0,7f:56595b5c5d5e6063646566676b6c6d6f7073757677787a7b7c7d7f8082838485868788898b8d8f9091929395969798999b9ca0a2a3a5a6a8a9aaabacadaeb1#b3b4b5b6b7babbbec0c2c3c4c6c7c8c9cbcdcfd0d1d2d3d6d7d9dadbdcdddee2e3,75e27acb7c926ca596b6529b748354e94fe9805483b28fde95705ec9601c6d9f5e18655b813894fe604b70bc7ec37cae51c968817cb1826f4e248f8691cf667e4eae8c0564a9804a50da759771ce5be58fbd6f664e86648295635ed66599521788c270c852a3730e7433679778f797164e3490bb9cde6dcb51db8d41541d62ce73b283f196f69f8494c34f367f9a51cc707596755cad988653e64ee46e9c740969b4786b998f7559521876246d4167f3516d9f99804b54997b3c7abf7f:e4e7e8eaebecedeff2f4f5f6f7f8f9fafdfeff,80:020708090a0e0f11131a1b1d1e1f2123242b2c2d2e2f303234393a3c3e404144454748494e4f505153555657#595b5c5d5e5f6061626364656667686b6c6d6e6f7072737475767778797a7b7c7d,9686578462e29647697c5a0464027bd36f0f964b82a6536298855e90708963b35364864f9c819e93788c97328d:ef42,9e7f6f5e79845f559646622e9a74541594dd4fa365c55c:6561,7f1586516c2f5f8b73876ee47eff5ce6631b5b6a6ee653754e7163a0756562a18f6e4f264ed16ca67eb68bba841d87ba7f57903b95237ba99aa188f8843d6d1b9a867edc59889ebb739b780186829a:6c82,561b541757cb4e709ea653568fc881097792999286ee6ee1851366fc61626f2b80:7e818285888a8d8e8f909192949597999ea3a6a7a8acb0b3b5b6b8b9bbc5c7c8c9cacbcfd0d1d2d3d4d5d8dfe0e2e3e6eef5f7f9fbfeff,81:000103040507080b#0c1517191b1c1d1f202122232425262728292a2b2d2e3033343537393a3b3c3d3f,8c298292832b76f26c135fd983bd732b8305951a6bdb77db94c6536f830251925e3d8c8c8d384e4873ab679a68859176970971646ca177095a9295416bcf7f8e66275bd059b95a9a95:e8f7,4eec84:0c99,6aac76df9530731b68a65b5f772f919a97617cdc8ff78c1c5f257c7379d889c56ccc871c5bc65e4268c977207ef551:954d,52c95a297f05976282d763cf778485d079d26e3a5e9959998511706d6c1162bf76bf654f60af95fd660e879f9e2394ed54:0d7d,8c2c647881:40414243444547494d4e4f525657585b5c5d5e5f6162636466686a6b6c6f727375767778818384858687898b8c8d8e90929394959697999a9e9fa0a1a2a4a5#a7a9abacadaeafb0b1b2b4b5b6b7b8b9bcbdbebfc4c5c7c8c9cbcdcecfd0d1d2d3,647986116a21819c78e864699b5462b9672b83ab58a89ed86cab6f205bde964c8c0b725f67d062c772614ea959c66bcd589366ae5e5552df6155672876ee776672677a4662ff54:ea50,94a090a35a1c7eb36c164e435976801059485357753796be56ca63208111607c95f96dd65462998151855ae980fd59ae9713502a6ce55c3c62df4f60533f817b90066eba852b62c85e7478be64b5637b5ff55a18917f9e1f5c3f634f80425b7d556e95:4a4d,6d8560a867e072de51dd5b8181:d4d5d6d7d8d9dadbdcdddedfe0e1e2e4e5e6e8e9ebeeeff0f1f2f5f6f7f8f9fafdff,82:030708090a0b0e0f111315161718191a1d2024252627292e323a3c3d3f#404142434546484a4c4d4e5051525354555657595b5c5d5e606162636465666769,62e76cde725b626d94ae7ebd81136d53519c5f04597452aa6012597366968650759f632a61e67cef8bfa54e66b279e256bb485d5545550766ca4556a8db4722c5e156015743662cd6392724c5f986e436d3e65006f5876d878d076fc7554522453db4e535e9e65c180:2ad6,629b5486522870ae888d8dd16ce1547880da57f988f48d54966a914d4f696c9b55b776c6783062a870f96f8e5f6d84ec68da787c7bf781a8670b9e4f636778b0576f7812973962:79ab,528874356bd782:6a6b6c6d71757677787b7c808183858687898c90939495969a9b9ea0a2a3a7b2b5b6babbbcbfc0c2c3c5c6c9d0d6d9dadde2e7e8e9eaecedeef0f2f3f5f6f8#fafcfdfeff,83:000a0b0d1012131618191d1e1f20212223242526292a2e3032373b3d,5564813e75b276ae533975de50fb5c418b6c7bc7504f72479a9798d86f0274e27968648777a562fc98918d2b54c180584e52576a82f9840d5e7351ed74f68bc45c4f57616cfc98875a4678349b448feb7c955256625194fa4ec68386846183e984b257d467345703666e6d668c3166dd7011671f6b3a6816621a59bb4e0351c46f0667d26c8f517668cb59476b6775665d0e81109f5065d779:4841,9a918d775c824e5e4f01542f5951780c56686c148fc45f036c:7de3,8bab639083:3e3f41424445484a4b4c4d4e5355565758595d6270717273747576797a7e7f808182838487888a8b8c8d8f909194959697999a9d9fa1a2a3a4a5a6a7acadae#afb5bbbebfc2c3c4c6c8c9cbcdced0d1d2d3d5d7d9dadbdee2e3e4e6e7e8ebeced,60706d3d7275626694:8ec5,53438fc17b7e4edf8c264e7e9ed494:b1b3,524d6f5c90636d458c3458115d4c6b:2049,67aa545b81547f8c589985375f3a62a26a47953965726084686577a74e544fa85de7979864ac7fd85ced4fcf7a8d520783044e14602f7a8394a64fb54eb279e6743452e482b964d279bd5bdd6c8197528f7b6c22503e537f6e0564ce66746c3060c598778bf75e86743c7a7779cb4e1890b174036c4256da914b6cc58d8b533a86c666f28eaf5c489a716e2083:eeeff3f4f5f6f7fafbfcfeff,84:0002050708090a10121314151617191a1b1e1f20212223292a2b2c2d2e2f30323334353637393a3b3e3f404142434445474849#4a4b4c4d4e4f505253545556585d5e5f606264656667686a6e6f70727477797b7c,53d65a369f8b8da353bb570898a76743919b6cc9516875ca62f372ac52:389d,7f3a7094763853749e4a69b7786e96c088d97fa471:36c3,518967d374e458e4651856b78ba9997662707ed560f970ed58ec4e:c1ba,5fcd97e74efb8ba45203598a7eab62544ecd65e5620e833884c98363878d71946eb65bb97ed2519763c967d480898339881551125b7a59828fb14e736c5d516589258f6f962e854a745e95:10f0,6da682e55f3164926d128428816e9cc3585e8d5b4e0953c184:7d7e7f8081838485868a8d8f90919293949596989a9b9d9e9fa0a2a3a4a5a6a7a8a9aaabacadaeb0b1b3b5b6b7bbbcbec0c2c3c5c6c7c8cbcccecfd2d4d5d7#d8d9dadbdcdee1e2e4e7e8e9eaebedeeeff1f2f3f4f5f6f7f8f9fafbfdfe,85:000102,4f1e6563685155d34e2764149a9a626b5ac2745f82726da968ee50e7838e7802674052396c997eb150bb5565715e7b5b665273ca82eb67495c715220717d886b95ea965564c58d6181b355846c5562477f2e58924f2455468d4f664c4e0a5c1a88f368a2634e7a0d70e7828d52fa97f65c1154e890b57ecd59628d4a86c782:0c0d,8d6664445c0461516d89793e8bbe78377533547b4f388eab6df15a207ec5795e6c885ba15a76751a80be614e6e1758f075:1f25,727253477ef385:030405060708090a0b0d0e0f101214151618191b1c1d1e2022232425262728292a2d2e2f303132333435363e3f404142444546474b4c4d4e4f505152535455#57585a5b5c5d5f60616263656667696a6b6c6d6e6f707173757677787c7d7f8081,770176db526980dc57235e08593172ee65bd6e7f8bd75c388671534177f362fe65f64ec098df86805b9e8bc653f277e24f7f5c4e9a7659cb5f0f793a58eb4e1667ff4e8b62ed8a93901d52bf662f55dc566c90024ed54f8d91ca99706c0f5e0260435ba489c68bd56536624b99965b:88ff,6388552e53d77626517d852c67a268b36b8a62928f9353d482126dd1758f4e668d4e5b70719f85af66:91d9,7f7287009ecd9f205c5e672f8ff06811675f620d7ad658855eb665706f3185:82838688898a8b8c8d8e909192939495969798999a9d9e9fa0a1a2a3a5a6a7a9abacadb1b2b3b4b5b6b8babbbcbdbebfc0c2c3c4c5c6c7c8cacbcccdced1d2#d4d6d7d8d9dadbdddedfe0e1e2e3e5e6e7e8eaebecedeeeff0f1f2f3f4f5f6f7f8,60555237800d6454887075295e05681362f4971c53cc723d8c016c3477617a0e542e77ac987a821c8bf47855671470c165af64955636601d79c153f84e1d6b7b80865bfa55e356db4f:3a3c,99725df3677e80386002988290015b8b8b:bcf5,641c825864de55fd82cf91654fd77d20901f7c9f50f358516eaf5bbf8bc980839178849c7b97867d96:8b8f,7ee59ad3788e5c817a57904296a7795f5b59635f7b0b84d168ad55067f2974107d2295016240584c4ed65b835979585485:f9fafcfdfe,86:0001020304060708090a0b0c0d0e0f10121314151718191a1b1c1d1e1f20212223242526282a2b2c2d2e2f3031323334353637393a3b3d3e3f40#4142434445464748494a4b4c525355565758595b5c5d5f6061636465666768696a,736d631e8e:4b0f,80ce82d462ac53f06cf0915e592a60016c70574d644a8d2a762b6ee9575b6a8075f06f6d8c:2d08,57666bef889278b363a253f970ad6c645858642a580268e0819b55107cd650188eba6dcc8d9f70eb638f6d9b6ed47ee68404684390036dd896768ba85957727985e4817e75bc8a8a68af52548e22951163d098988e44557c4f5366ff568f60d56d9552435c4959296dfb586b75:301c,606c82148146631167618fe2773a8d:f334,94c15e165385542c70c386:6d6f7072737475767778838485868788898e8f90919294969798999a9b9e9fa0a1a2a5a6abadaeb2b3b7b8b9bbbcbdbebfc1c2c3c5c8cccdd2d3d5d6d7dadc#dde0e1e2e3e5e6e7e8eaebeceff5f6f7fafbfcfdff,87:010405060b0c0e0f10111416,6c405ef7505c4ead5ead633a8247901a6850916e77b3540c94dc5f647ae5687663457b527edf75db507762955934900f51f879c37a8156fe5f9290146d825c60571f541051546e4d56e263a89893817f8715892a9000541e5c6f81c062:d658,81319e3596409a:6e7c,692d59a562d3553e631654c786d96d3c5a0374e6889c6b6a59168c4c5f2f6e7e73a9987d4e3870f75b8c7897633d665a769660cb5b9b5a494e0781556c6a738b4ea167897f515f8065fa671b5fd859845a0187:191b1d1f20242627282a2b2c2d2f303233353638393a3c3d404142434445464a4b4d4f505152545556585a5b5c5d5e5f6162666768696a6b6c6d6f71727375#7778797a7f8081848687898a8c8e8f90919294959698999a9b9c9d9ea0a1a2a3a4,5dcd5fae537197e68fdd684556f4552f60df4e3a6f4d7ef482c7840e59d44f:1f2a,5c3e7eac672a851a5473754f80c355829b4f4f4d6e2d8c135c096170536b761f6e29868a658795fb7eb9543b7a337d0a95ee55e17fc174ee631d87176da17a9d621165a1536763e16c835deb545c94a84e4c6c618bec5c4b65e0829c68a754:3e34,6b:cb66,4e9463425348821e4f:0dae,575e620a96fe6664726952:ffa1,609f8bef661471996790897f785277fd6670563b54389521727a87:a5a6a7a9aaaeb0b1b2b4b6b7b8b9bbbcbebfc1c2c3c4c5c7c8c9cccdcecfd0d4d5d6d7d8d9dadcdddedfe1e2e3e4e6e7e8e9ebecedeff0f1f2f3f4f5f6f7f8#fafbfcfdff,88:0001020405060708090b0c0d0e0f101112141718191a1c1d1e1f2023,7a00606f5e0c6089819d591560dc718470ef6eaa6c5072806a8488ad5e2d4e605ab3559c94e36d177cfb9699620f7ec6778e867e5323971e8f9666875ce14fa072ed4e0b53a6590f54136380952851484ed99c9c7ea454b88d248854823795f26d8e5f265acc663e966973:b02e,53bf817a99857fa15baa96:7750,7ebf76f853a2957699997bb189446e584e617fd479658be660f354cd4eab98795df76a6150cf54118c618427785d9704524a54ee56a395006d885bb56dc6665388:2425262728292a2b2c2d2e2f30313334353637383a3b3d3e3f414243464748494a4b4e4f505152535556585a5b5c5d5e5f6066676a6d6f717374757678797a#7b7c80838687898a8c8e8f90919394959798999a9b9d9e9fa0a1a3a5a6a7a8a9aa,5c0f5b5d6821809655787b11654869544e9b6b47874e978b534f631f643a90aa659c80c18c10519968b0537887f961c86c:c4fb,8c225c5185aa82af950c6b238f9b65b05f:fbc3,4fe18845661f8165732960fa51745211578b5f6290a2884c91925e78674f602759d351:44f6,80f853086c7996c4718a4f:11ee,7f9e673d55c5950879c088967ee3589f620c9700865a5618987b5f908bb884c4915753d965ed5e8f755c60647d6e5a7f7e:eaed,8f6955a75ba360ac65cb738488:acaeafb0b2b3b4b5b6b8b9babbbdbebfc0c3c4c7c8cacbcccdcfd0d1d3d6d7dadbdcdddee0e1e6e7e9eaebecedeeeff2f5f6f7fafbfdff,89:0001030405060708#090b0c0d0e0f1114151617181c1d1e1f20222324262728292c2d2e2f3132333537,9009766377297eda9774859b5b667a7496ea884052cb718f5faa65ec8be25bfb9a6f5de16b896c5b8b:adaf,900a8fc5538b62bc9e:262d,54404e2b82bd7259869c5d1688596daf96c554d14e9a8bb6710954bd960970df6df976d04e25781487125ca95ef68a00989c960e708e6cbf594463a9773c884d6f148273583071d5538c781a96c155015f6671305bb48c1a9a8c6b83592e9e2f79e76768626c4f6f75a17f8a6d0b96336c274ef075d2517b68376f3e908081705996747689:38393a3b3c3d3e3f40424345464748494a4b4c4d4e4f505152535455565758595a5b5c5d6061626364656768696a6b6c6d6e6f707172737475767778797a7c#7d7e808284858788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1,64475c2790657a918c2359da54ac8200836f898180006930564e8036723791ce51b64e5f987563964e1a53f666f3814b591c6db24e0058f9533b63d694f14f:9d0a,886398905937905779fb4eea80f075916c825b9c59e85f5d69058681501a5df24e5977e34ee5827a6291661390915c794ebf5f7981c69038808475ab4ea688d4610f6bc55fc64e4976ca6ea28b:e3ae,8c0a8bd15f027f:fccc,7ece83:356b,56e06bb797f3963459fb541f94f66deb5bc5996e5c395f15969089:a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c3cdd3d4d5d7d8d9dbdddfe0e1e2e4e7e8e9eaecedeef0f1f2f4f5f6f7f8f9fa#fbfcfdfeff,8a:01020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d,537082f16a315a749e705e947f2883b984:2425,836787478fce8d6276c85f719896786c662054df62e54f6381c375c85eb896cd8e0a86f9548f6cf36d8c6c38607f52c775285e7d4f1860a05fe75c24753190ae94c072b96cb96e389149670953:cbf3,4f5191c98bf153c85e7c8fc26de44e8e76c26986865e611a82064f:59de,903e9c7c61096e:1d14,96854e885a3196e84e0e5c7f79b95b878bed7fbd738957df828b90c15401904755bb5cea5fa161086b3272f180b28a:891e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f4041424344454647494a4b4c4d4e4f505152535455565758595a5b5c5d5e#5f606162636465666768696a6b6c6d6e6f7071727374757677787a7b7c7d7e7f80,6d745bd388d598848c6b9a6d9e336e0a51:a443,57a38881539f63f48f9556ed54585706733f6e907f188fdc82d1613f6028966266f07ea68d:8ac3,94a55cb37ca4670860a6960580184e9190e75300966851418fd08574915d665597f55b55531d78386742683d54c9707e5bb08f7d518d572854b1651266828d:5e43,810f846c906d7cdf51ff85fb67a365e96fa186a48e81566a90207682707671e58d2362e952196cfd8d3c600e589e618e66fe8d60624e55b36e23672d8f678a:81828384858687888b8c8d8e8f9091929495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3,94e195f87728680569a8548b4e4d70b88bc86458658b5b857a84503a5be877bb6be18a797c986cbe76cf65a98f975d2d5c5586386808536062187ad96e5b7efd6a1f7ae05f706f335f20638c6da867564e085e108d264ed780c07634969c62db662d627e6cbc8d7571677f695146808753ec906e629854f286f08f998005951785178fd96d5973cd659f771f7504782781fb8d1e94884fa6679575b98bca9707632f9547963584b8632377415f8172f04e896014657462ef6b63653f8a:e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8b:0001020304050608090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#24252728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,5e2775c790d18bc1829d679d652f5431871877e580a281026c414e4b7ec7804c76f4690d6b966267503c4f84574063076b628dbe53ea65e87eb85fd763:1ab7,81:f3f4,7f6e5e1c5cd95236667a79e97a1a8d28709975d46ede6cbb7a924e2d76c55fe0949f88777ec879cd80bf91cd4ef24f17821f54685dde6d328bcc7ca58f7480985e1a549276b15b99663c9aa473e0682a86db6731732a8b:f8db,90107af970db716e62c477a956314e3b845767f152a986c08d2e94f87b518b:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656768696a6b6d6e6f707172737475767778797a7b7c7d7e7f80818283848586#8788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9facb1bbc7d0ea,8c:091e,4f4f6ce8795d9a7b6293722a62fd4e1378168f6c64b08d5a7bc668695e8488c55986649e58ee72b6690e95258ffd8d5857607f008c0651c6634962d95353684c74228301914c55447740707c6d4a517954a88d4459ff6ecb6dc45b5c7d2b4ed47c7d6ed35b5081ea6e0d5b579b0368d58e2a5b977efc603b7eb590b98d70594f63cd79df8db3535265cf79568bc5963b7ec494bb7e825634918967007f6a5c0a907566285de64f5067de505a4f5c57505e:a7#3$,8c:38393a3b3c3d3e3f4042434445484a4b4d4e4f5051525354565758595b5c5d5e5f60636465666768696c6d6e6f707172747576777b7c7d7e7f808183848687#888b8d8e8f90919293959697999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacad,4e:8d0c,51404e105eff53454e:15981e,9b325b6c56694e2879ba4e3f53154e47592d723b536e6c1056df80e499976bd3777e9f174e:369f,9f104e:5c6993,82885b5b556c560f4ec453:8d9da3a5ae,97658d5d53:1af5262e3e,8d5c53:6663,52:02080e2d333f404c5e615c,84af52:7d82819093,51827f544e:bbc3c9c2e8e1ebde,4f1b4ef34f:2264,4ef54f:2527092b5e67,65384f:5a5d,8c:aeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebec#edeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8d:000102030405060708090a0b0c0d,4f:5f57323d76749189838f7e7baa7cac94e6e8eac5dae3dcd1dff8,50:294c,4ff350:2c0f2e2d,4ffe50:1c0c25287e4355484e6c7ba5a7a9bad6,510650:edece6ee,51:070b,4edd6c3d4f:5865ce,9fa06c467c74516e5dfd9ec999985181591452f9530d8a07531051eb591951554ea051564eb388:6ea4,4eb5811488d279805b3488037fb851:abb1bdbc,8d:0e0f101112131415161718191a1b1c205152575f6568696a6c6e6f717278797a7b7c7d7e7f808283868788898c8d8e8f90929395969798999a9b9c9d9ea0a1#a2a4a5a6a7a8a9aaabacadaeafb0b2b6b7b9bbbdc0c1c2c5c7c8c9cacdd0d2d3d4,51:c796a2a5,8b:a0a6a7aab4b5b7c2c3cbcfced2d3d4d6d8d9dcdfe0e4e8e9eef0f3f6f9fcff,8c:000204070c0f1112141516191b181d1f202125272a2b2e2f32333536,53:697a,96:1d2221312a3d3c4249545f676c7274888d97b0,90:979b9d99aca1b4b3b6ba,8d:d5d8d9dce0e1e2e5e6e7e9edeef0f1f2f4f6fcfeff,8e:00010203040607080b0d0e1011121315161718191a1b1c202124252627282b2d303233343637383b3c3e#3f4345464c4d4e4f505354555657585a5b5c5d5e5f60616263646567686a6b6e71,90:b8b0cfc5bed0c4c7d3e6e2dcd7dbebeffe,91:04221e23312f394346,520d594252:a2acadbe,54ff52:d0d6f0,53df71ee77cd5ef451:f5fc,9b2f53b65f01755a5def57:4ca9a1,58:7ebcc5d1,57:292c2a33392e2f5c3b4269856b867c7b686d7673ada48cb2cfa7b493a0d5d8dad9d2b8f4eff8e4dd,8e:73757778797a7b7d7e808283848688898a8b8c8d8e91929395969798999a9b9d9fa0a1a2a3a4a5a6a7a8a9aaadaeb0b1b3b4b5b6b7b8b9bbbcbdbebfc0c1c2#c3c4c5c6c7c8c9cacbcccdcfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4,58:0b0d,57:fded,58:001e194420656c81899a80,99a89f1961ff82:797d7f8f8aa8848e919799abb8beb0c8cae398b7aecbccc1a9b4a1aa9fc4cea4e1,830982:f7e4,83:0f07,82:dcf4d2d8,830c82:fbd3,83:111a061415,82:e0d5,83:1c515b5c08923c34319b5e2f4f47435f4017602d3a336665,8e:e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,8f:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20212223#2425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344,83:681b696c6a6d6eb078b3b4a0aa939c857cb6a97db87b989ea8babcc1,840183:e5d8,580784:180b,83:ddfdd6,84:1c381106,83:d4df,84:0f03,83:f8f9eac5c0,842683:f0e1,84:5c515a597387887a89783c4669768c8e316dc1cdd0e6bdd3cabfbae0a1b9b497e5e3,850c750d853884f085:391f3a,8f:45464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364656a808c929da0a1a2a4a5a6a7aaacadaeafb2b3b4b5b7b8babbbcbfc0c3c6#c9cacbcccdcfd2d6d7dae0e1e3e7eceff1f2f4f5f6fafbfcfeff,90:07080c0e131518,85:563b,84:fffc,85:594868645e7a,77a285:43727ba4a8878f79ae9c85b9b7b0d3c1dcff,86:270529163c,5efe5f0859:3c41,803759:555a58,530f5c:22252c34,62:4c6a9fbbcadad7ee,632262f663:394b43adf6717a8eb46dac8a69aebcf2f8e0ffc4dece,645263:c6be,64:45410b1b200c26215e846d96,90:191c2324252728292a2b2c303132333437393a3d3f4043454648494a4b4c4e545556595a5c5d5e5f6061646667696a6b6c6f70717273767778797a7b7c7e81#84858687898a8c8d8e8f90929496989a9c9e9fa0a4a5a7a8a9abadb2b7bcbdbfc0,64:7ab7b899bac0d0d7e4e2,65:09252e,5f:0bd2,75195f1153:5ff1fde9e8fb,54:1216064b5253545643215759233282947771649a9b8476669dd0adc2b4d2a7a6d3d472a3d5bbbfccd9dadca9aaa4ddcfde,551b54e7552054fd551454f355:22230f11272a678fb5496d41553f503c,90:c2c3c6c8c9cbcccdd2d4d5d6d8d9dadedfe0e3e4e5e9eaeceef0f1f2f3f5f6f7f9fafbfcff,91:00010305060708090a0b0c0d0e0f1011121314151617181a1b1c#1d1f20212425262728292a2b2c2d2e30323334353637383a3b3c3d3e3f40414244,55:375675767733305c8bd283b1b988819f7ed6917bdfbdbe9499eaf7c9,561f55:d1ebecd4e6ddc4efe5f2f3cccde8f5e4,8f9456:1e080c012423,55fe56:00272d5839572c4d62595c4c548664716b7b7c8593afd4d7dde1f5ebf9ff,57:040a091c,5e:0f191411313b3c,91:454748515354555658595b5c5f606667686b6d737a7b7c808182838486888a8e8f939495969798999c9d9e9fa0a1a4a5a6a7a8a9abacb0b1b2b3b6b7b8b9bb#bcbdbebfc0c1c2c3c4c5c6c8cbd0d2d3d4d5d6d7d8d9dadbdddedfe0e1e2e3e4e5,5e:3744545b5e61,5c:8c7a8d9096889899919a9cb5a2bdacabb1a3c1b7c4d2e4cbe5,5d:020327262e241e061b583e343d6c5b6f5d6b4b4a697482999d,8c735d:b7c5,5f:73778287898c95999ca8adb5bc,88625f6172:adb0b4b7b8c3c1cecdd2e8efe9f2f4f7,730172f3730372fa91:e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,92:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324#25262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445,72fb73:1713210a1e1d152239252c3831504d57606c6f7e,821b592598e759:2402,99:636768696a6b6c74777d8084878a8d9091939495,5e:80918b96a5a0b9b5beb3,8d535e:d2d1dbe8ea,81ba5f:c4c9d6cf,60035fee60045f:e1e4fe,60:0506,5f:eaedf8,60:1935261b0f0d292b0a3f2178797b7a42,92:464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f7071727375767778797a7b7c7d7e7f808182838485#868788898a8b8c8d8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7,60:6a7d969aad9d83928c9becbbb1ddd8c6dab4,61:20261523,60f461:000e2b4a75ac94a7b7d4f5,5fdd96b395:e9ebf1f3f5f6fcfe,96:030406080a0b0c0d0f12151617191a,4e2c723f62156c:35545c4aa38590948c6869747686a9d0d4adf7f8f1d7b2e0d6faebeeb1d3effe,92:a8a9aaabacadafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8#e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,93:00010203040506070809,6d:39270c43480704190e2b4d2e351a4f525433916f9ea05e93945c607c63,6e1a6d:c7c5de,6e0e6d:bfe0,6e116d:e6ddd9,6e166dab6e0c6dae6e:2b6e4e6bb25f865354322544dfb198e0,6f2d6e:e2a5a7bdbbb7d7b4cf8fc29f,6f:6246472415,6ef96f:2f364b742a0929898d8c78727c7ad1,93:0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3f40414243444546474849#4a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696b,6f:c9a7b9b6c2e1eedee0ef,70:1a231b39354f5e,5b:80849593a5b8,752f9a9e64345b:e4ee,89305bf08e478b078f:b6d3d5e5eee4e9e6f3e8,90:05040b26110d162135362d2f445152506858625b,66b990:747d8288838b,5f:50575658,5c3b54ab5c:5059,5b715c:6366,7fbc5f:2a292d,82745f3c9b3b5c6e59:81838da9aaa3,93:6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaab#acadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cbcccd,59:97caab9ea4d2b2afd7be,5a:0506,59dd5a0859:e3d8f9,5a:0c09323411231340674a553c6275,80ec5a:aa9b777abeebb2d2d4b8e0e3f1d6e6d8dc,5b:091716323740,5c:151c,5b:5a6573515362,9a:7577787a7f7d808185888a90929396989b9c9d9fa0a2a3a5a7,7e:9fa1a3a5a8a9,93:cecfd0d1d2d3d4d5d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,94:000102030405060708090a0b0c0d#0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e,7e:adb0bec0c1c2c9cbccd0d4d7dbe0e1e8ebeeeff1f2,7f0d7e:f6fafbfe,7f:01020307080b0c0f111217191c1b1f212223242526272a2b2c2d2f3031323335,5e7a757f5ddb753e909573:8e91aea29fcfc2d1b7b3c0c9c8e5d9,987c740a73:e9e7debaf2,74:0f2a5b262528302e2c,94:2f303132333435363738393a3b3c3d3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6c6d6e6f#707172737475767778797a7b7c7d7e7f8081828384919698c7cfd3d4dae6fb,95:1c20,74:1b1a415c575559776d7e9c8e8081878b9ea8a990a7d2ba,97:eaebec,67:4c535e4869a5876a7398a775a89ead8b777cf0,680967d8680a67:e9b0,680c67:d9b5dab3dd,680067:c3b8e2,680e67:c1fd,68:323360614e624464831d55664167403e4a4929b58f7477936bc2,696e68fc69:1f20,68f995:27333d43484b555a606e74757778797a7b7c7d7e808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aa#abacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacb,692468f069:0b0157,68e369:10713960425d846b80987834cc8788ce896663799ba7bbabadd4b1c1cadf95e08dff,6a2f69ed6a:171865,69f26a:443ea0505b358e793d28587c9190a997ab,73:3752,6b:8182878492938d9a9ba1aa,8f:6b6d71727375767877797a7c7e818284878b,95:cccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7ecff,96:0713181b1e20232425262728292b2c2d2f303738393a3e41434a4e4f5152535657#58595a5c5d5e606365666b6d6e6f70717378797a7b7c7d7e7f808182838487898a,8f:8d8e8f989a,8ece62:0b171b1f222125242c,81e774:eff4ff,75:0f1113,65:34eeeff0,66:0a19,677266:031500,708566:f71d34313635,800666:5f54414f56615777848ca79dbedbdce6e9,8d:3233363b3d4045464849474d5559,89:c7cacbcccecfd0d1,72:6e9f5d666f7e7f848b8d8f92,63:0832b0,96:8c8e91929395969a9b9d9e9fa0a1a2a3a4a5a6a8a9aaabacadaeafb1b2b4b5b7b8babbbfc2c3c8cacbd0d1d3d4d6d7d8d9dadbdcdddedfe1e2e3e4e5e6e7eb#ecedeef0f1f2f4f5f8fafbfcfdff,97:0203050a0b0c10111214151718191a1b1d1f20,64:3fd8,80046b:eaf3fdf5f9,6c:0507060d1518191a2129242a32,65:35556b,72:4d525630,8662521680:9f9c93bc,670a80:bdb1abadb4b7e7e8e9eadbc2c4d9cdd7,671080:ddebf1f4ed,81:0d0e,80:f2fc,671581128c5a81:361e2c1832484c5374595a7160697c7d6d67,584d5ab581:888291,6ed581:a3aacc,672681:cabb,97:2122232425262728292b2c2e2f3133343536373a3b3c3d3f404142434445464748494a4b4c4d4e4f5051545557585a5c5d5f63646667686a6b6c6d6e6f7071#72757778797a7b7d7e7f8081828384868788898a8c8e8f9093959697999a9b9c9d,81:c1a6,6b:243739434659,98:d1d2d3d5d9da,6bb35f406bc289f365909f5165:93bcc6c4c3ccced2d6,70:809c969dbbc0b7abb1e8ca,71:1013162f31735c6845724a787a98b3b5a8a0e0d4e7f9,72:1d28,706c71:1866b9,62:3e3d434849,79:3b4046495b5c535a6257606f677a858a9aa7b3,5f:d1d0,97:9e9fa1a2a4a5a6a7a8a9aaacaeb0b1b3b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3#e4e5e8eeeff0f1f2f4f7f8f9fafbfcfdfeff,98:000102030405060708090a0b0c0d0e,60:3c5d5a67415963ab,61:060d5da99dcbd1,620680:807f,6c:93f6,6dfc77:f6f8,78:0009171811,65ab78:2d1c1d393a3b1f3c252c23294e6d56572650474c6a9b939a879ca1a3b2b9a5d4d9c9ecf2,790578f479:13241e34,9f9b9e:f9fbfc,76f177:040d,76f977:07081a22192d263538505147435a68,98:0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d#4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e,77:62657f8d7d808c919fa0b0b5bd,75:3a404e4b485b727983,7f:58615f,8a487f:68747179817e,76:cde5,883294:8586878b8a8c8d8f909497959a9b9ca3a4abaaadacafb0b2b4b6b7b8b9babcbdbfc4c8c9cacbcccdced0d1d2d5d6d7d9d8dbdedfe0e2e4e5e7e8ea,98:6f70717273748b8e929599a3a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcfd0d4d6d7dbdcdde0e1e2e3e4#e5e6e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,99:0001020304050607,94:e9ebeeeff3f4f5f7f9fcfdff,95:03020607090a0d0e0f1213141516181b1d1e1f222a2b292c3132343637383c3e3f4235444546494c4e4f525354565758595b5e5f5d61626465666768696a6b6c6f7172733a,77:e7ec,96c979:d5ede3eb,7a065d477a:03021e14,99:08090a0b0c0e0f1112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2f303132333435363738393a3b3c3d3e3f40414243444546474849#4a4b4c4d4e4f50515253565758595a5b5c5d5e5f60616264667378797b7e828389,7a:393751,9ecf99a57a7076:888e9399a4,74:dee0,752c9e:202228292a2b2c3231363837393a3e414244464748494b4c4e5155575a5b5c5e63666768696a6b6c716d73,75:929496a09daca3b3b4b8c4b1b0c3c2d6cde3e8e6e4ebe7,760375:f1fcff,76:1000050c170a25181519,99:8c8e9a9b9c9d9e9fa0a1a2a3a4a6a7a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8#d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9,76:1b3c2220402d303f35433e334d5e545c566b6f,7fca7a:e6787980868895a6a0aca8adb3,88:6469727d7f82a2c6b7bcc9e2cee3e5f1,891a88:fce8fef0,89:2119131b0a342b3641667b,758b80e576:b2b4,77dc80:1214161c20222526272928310b3543464d526971,898398:788083,99:fafbfcfdfeff,9a:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738#393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253545556575859,98:898c8d8f949a9b9e9fa1a2a5a6,86:4d546c6e7f7a7c7ba88d8bac9da7a3aa93a9b6c4b5ceb0bab1afc9cfb4e9f1f2edf3d0,871386:def4dfd8d1,87:0307,86f887:080a0d09233b1e252e1a3e48343129373f82227d7e7b60704c6e8b53637c64596593afa8d2,9a:5a5b5c5d5e5f606162636465666768696a6b7283898d8e949599a6a9aaabacadaeafb2b3b4b5b9bbbdbebfc3c4c6c7c8c9cacdcecfd0d2d4d5d6d7d9dadbdc#dddee0e2e3e4e5e7e8e9eaeceef0f1f2f3f4f5f6f7f8fafcfdfeff,9b:000102040506,87:c68885ad9783abe5acb5b3cbd3bdd1c0cadbeae0ee,88:1613,87fe88:0a1b21393c,7f:36424445,82107a:fafd,7b:080304150a2b0f47382a192e31202524333e1e585a45754c5d606e7b62727190a6a7b8ac9da885aa9ca2abb4d1c1ccdddae5e6ea,7c0c7b:fefc,7c:0f160b,9b:07090a0b0c0d0e1011121415161718191a1b1c1d1e2021222425262728292a2b2c2d2e3031333435363738393a3d3e3f40464a4b4c4e50525355565758595a#5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b,7c:1f2a26384140,81fe82:010204,81ec884482:2122232d2f282b383b33343e44494b4f5a5f68,88:7e8588d8df,895e7f:9d9fa7afb0b2,7c7c65497c:919d9c9ea2b2bcbdc1c7cccdc8c5d7e8,826e66a87f:bfced5e5e1e6e9eef3,7cf87d:77a6ae,7e:479b,9e:b8b4,8d:73849491b1676d,8c:4749,91:4a504e4f64,9b:7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9ba#bbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadb,91:626170696f7d7e7274798c85908d91a2a3aaadaeafb5b4ba,8c559e7e8d:b8eb,8e:055969,8d:b5bfbcbac4d6d7dadececfdbc6ecf7f8e3f9fbe4,8e098dfd8e:141d1f2c2e232f3a4039353d3149414251524a70767c6f74858f94909c9e,8c:78828a859894,659b89:d6dedadc,9b:dcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9c:000102030405060708090a0b0c0d0e0f101112131415161718191a#1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b,89:e5ebef,8a3e8b26975396:e9f3ef,97:0601080f0e2a2d303e,9f:808385868788898a8c,9efe9f:0b0d,96:b9bcbdced2,77bf96e092:8eaec8,93:3e6aca8f,94:3e6b,9c:7f8285868788,7a239c:8b8e90919294959a9b9e9fa0a1a2a3a5a6a7a8a9abadaeb0b1b2b3b4b5b6b7babbbcbdc4c5c6c7cacb3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a#7b7d7e808384898a8c8f93969798999daaacafb9bebfc0c1c2c8c9d1d2dadbe0e1cccdcecfd0d3d4d5d7d8d9dcdddfe2,97:7c85919294afaba3b2b4,9a:b1b0b7,9e589a:b6babcc1c0c5c2cbccd1,9b:45434749484d51,98e899:0d2e5554,9a:dfe1e6efebfbedf9,9b:080f131f23,9e:bdbe,7e3b9e:8287888b92,93d69e:9d9fdbdcdde0dfe2e9e7e5eaef,9f:222c2f39373d3e44,9c:e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9d:000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021#22232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142#92$434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f8081#82838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2#92$a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1#e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff,9e:000102#92$030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e24272e30343b3c404d5052535456595d5f606162656e6f727475767778797a7b7c7d80#8183848586898a8c8d8e8f90919495969798999a9b9c9ea0a1a2a3a4a5a7a8a9aa#92$abacadaeafb0b1b2b3b5b6b7b9babcbfc0c1c2c3c5c6c7c8cacbccd0d2d3d5d6d7d9dadee1e3e4e6e8ebecedeef0f1f2f3f4f5f6f7f8fafdff,9f:000102030405#060708090a0c0f1112141516181a1b1c1d1e1f21232425262728292a2b2d2e3031#92$3233343536383a3c3f4041424345464748494a4b4c4d4e4f52535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778#797a7b7c7d7e81828d8e8f9091929394959697989c9d9ea1a2a3a4a5,f9:2c7995e7f1#92$,fa:0c0d0e0f111314181f20212324272829,e8:15161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40414243#4445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f6061626364"),A=0;ft(this,jt,w.match(/..../g));for(let C=129;C<=254;C++)for(let T=64;T<=254;T++)B(this,Ht)[B(this,jt)[A++]]=("%"+C.toString(16)+"%"+T.toString(16)).toUpperCase();for(let C in B(this,Ht))B(this,Vt)[B(this,Ht)[C]]=C;}handleText(w){return w=w.replace(/#(\d+)\$/g,function(A,C){return Array(+C+3).join("#")}).replace(/#/g,"####").replace(/(\w\w):([\w#]+)(?:,|$)/g,function(A,C,T){return T.replace(/../g,function(E){return E!="##"?C+E:E})}),w}isAscii(w){return w<=127&&w>=0}encode(w){let A=this;return [...w].reduce((T,E,k)=>T+C(E),"");function C(T){var k;let E="";for(let U=0;U<T.length;U++){const L=T.codePointAt(U),_=String.fromCodePoint(L);let I=L.toString(16);if(I.length!=4&&(I=(k=("000"+I).match(/....$/))==null?void 0:k[0]),U+=_.length-1,A.isAscii(L)){E+=encodeURIComponent(_);continue}if(B(A,Ht)[I]){E+=B(A,Ht)[I];continue}E+=C(`&#${L};`);}return E}}decode(w){var A=/%[0-9A-F]{2}%[0-9A-F]{2}/,C=/%[0-9A-F]{2}/,T=!0;let E=this;for(;T;){let k=w.match(A),U=w.match(C);T=!!U,k&&k in B(E,Vt)?w=w.replace(k,String.fromCharCode("0x"+B(E,Vt)[k])):w=w.replace(U,decodeURIComponent(U));}return w}}jt=new WeakMap,Ht=new WeakMap,Vt=new WeakMap;class UtilsGMCookie{constructor(w){Z(this,"windowApi",{window,document});w&&(this.windowApi=Object.assign({},w));}get(w){if(typeof w!="string")throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");let A=this.windowApi.document.cookie.split(";"),C;for(const T of A){let k=T.trim().split("="),U=k[0];k.splice(0,1);let L=decodeURIComponent(k.join(""));if(U===w){C={domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:w,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:L};break}}return C}list(w,A){if(w==null)throw new Error("Utils.GMCookie.list 参数不能为空");let C=[];try{let T={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};T=utils$1.assign(T,w),this.windowApi.document.cookie.split(";").forEach(k=>{k=k.trim();let U=k.split("="),L=U[0];U.splice(0,1);let _=decodeURIComponent(U.join("")),I=T.name instanceof RegExp?T.name:new RegExp("^"+T.name,"g");L.match(I)&&C.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:L,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:_});}),typeof A=="function"&&A(C);}catch(T){typeof A=="function"&&A(C,T);}}getList(w){if(w==null)throw new Error("Utils.GMCookie.list 参数不能为空");let A=[],C={url:this.windowApi.window.location.href,domain:this.windowApi.window.location.hostname,name:"",path:"/"};return C=utils$1.assign(C,w),this.windowApi.document.cookie.split(";").forEach(E=>{E=E.trim();let k=E.split("="),U=k[0];k.splice(0,1);let L=decodeURIComponent(k.join("")),_=C.name instanceof RegExp?C.name:new RegExp("^"+C.name,"g");U.match(_)&&A.push({domain:this.windowApi.window.location.hostname,expirationDate:null,hostOnly:!0,httpOnly:!1,name:U,path:"/",sameSite:"unspecified",secure:!0,session:!1,value:L});}),A}set(w,A){let C;try{let T={url:this.windowApi.window.location.href,name:"",value:"",domain:this.windowApi.window.location.hostname,path:"/",secure:!0,httpOnly:!1,expirationDate:Math.floor(Date.now())+2592e3};T=utils$1.assign(T,w);let E=T.expirationDate?T.expirationDate:Math.floor(Date.now())+60*60*24*30,k=T.name+"="+decodeURIComponent(T.value)+";expires="+new Date(E).toGMTString()+"; path=/";this.windowApi.document.cookie=k;}catch(T){C=T;}finally{typeof A=="function"&&A(C);}}delete(w,A){let C;try{let T={url:this.windowApi.window.location.href,name:"",path:"/",firstPartyDomain:this.windowApi.window.location.hostname};T=utils$1.assign(T,w);let E=`${T.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${T.path}; domain=${T.firstPartyDomain};`;this.windowApi.document.cookie=E;}catch(T){C=T;}finally{typeof A=="function"&&A(C);}}}const AjaxHooker=function(){return function(){const S="1.4.3",w={hookFns:[],filters:[]},A=window.unsafeWindow||document.defaultView||window;let C=A.__ajaxHooker;const T=A.Response.prototype,E=["response","responseText","responseXML"],k=["arrayBuffer","blob","formData","json","text"],U=["method","headers","body","mode","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","priority"],L=["readystatechange","load","loadend"],_={}.toString.call.bind({}.toString),I=Object.getOwnPropertyDescriptor.bind(Object),$=()=>{},P=Y=>console.error(Y);function H(Y){return Y&&["object","function"].includes(typeof Y)&&typeof Y.then=="function"}function V(Y,...z){try{const q=Y(...z);return H(q)?q.then(null,P):q}catch(q){console.error(q);}}function D(Y,z,q,J){Object.defineProperty(Y,z,{configurable:!0,enumerable:!0,get:q,set:J});}function N(Y,z,q=Y[z]){D(Y,z,()=>q,$);}function R(Y,z,q=Y[z]){Object.defineProperty(Y,z,{configurable:!0,enumerable:!0,writable:!0,value:q});}function F(Y){const z={};switch(_(Y)){case"[object String]":for(const q of Y.trim().split(/[\r\n]+/)){const[J,K]=q.split(/\s*:\s*/);if(!J)break;const rt=J.toLowerCase();z[rt]=rt in z?`${z[rt]}, ${K}`:K;}break;case"[object Headers]":for(const[q,J]of Y)z[q]=J;break;case"[object Object]":return {...Y}}return z}function W(){this.ajaxHooker_isStopped=!0;}class X{then(z){return z&&z(),new X}}class Q{constructor(z){this.request=z,this.requestClone={...this.request};}shouldFilter(z){const{type:q,url:J,method:K,async:rt}=this.request;return z.length&&!z.find(ct=>{switch(!0){case(ct.type&&ct.type!==q):case(_(ct.url)==="[object String]"&&!J.includes(ct.url)):case(_(ct.url)==="[object RegExp]"&&!ct.url.test(J)):case(ct.method&&ct.method.toUpperCase()!==K.toUpperCase()):case("async"in ct&&ct.async!==rt):return !1}return !0})}waitForRequestKeys(){const z=["url","method","abort","headers","data"];if(!this.request.async)return A.__ajaxHooker.hookInsts.forEach(({hookFns:J,filters:K})=>{this.shouldFilter(K)||(J.forEach(rt=>{_(rt)==="[object Function]"&&V(rt,this.request);}),z.forEach(rt=>{H(this.request[rt])&&(this.request[rt]=this.requestClone[rt]);}));}),new X;const q=[];return A.__ajaxHooker.hookInsts.forEach(({hookFns:J,filters:K})=>{this.shouldFilter(K)||q.push(Promise.all(J.map(rt=>V(rt,this.request))).then(()=>Promise.all(z.map(rt=>Promise.resolve(this.request[rt]).then(ct=>this.request[rt]=ct,()=>this.request[rt]=this.requestClone[rt])))));}),Promise.all(q)}waitForResponseKeys(z){const q=this.request.type==="xhr"?E:k;return this.request.async?Promise.resolve(V(this.request.response,z)).then(()=>Promise.all(q.map(J=>{const K=I(z,J);if(K&&"value"in K)return Promise.resolve(K.value).then(rt=>z[J]=rt,()=>delete z[J]);delete z[J];}))):(_(this.request.response)==="[object Function]"&&(V(this.request.response,z),q.forEach(J=>{("get"in I(z,J)||H(z[J]))&&delete z[J];})),new X)}}const G={get(Y,z){const q=I(Y,z);if(q&&!q.configurable&&!q.writable&&!q.get)return Y[z];const J=Y.__ajaxHooker;if(J&&J.proxyProps){if(z in J.proxyProps){const K=J.proxyProps[z];return "get"in K?K.get():typeof K.value=="function"?K.value.bind(J):K.value}if(typeof Y[z]=="function")return Y[z].bind(Y)}return Y[z]},set(Y,z,q){const J=I(Y,z);if(J&&!J.configurable&&!J.writable&&!J.set)return !0;const K=Y.__ajaxHooker;if(K&&K.proxyProps&&z in K.proxyProps){const rt=K.proxyProps[z];rt.set?rt.set(q):rt.value=q;}else Y[z]=q;return !0}};class tt{constructor(z){const q=this;Object.assign(q,{originalXhr:z,proxyXhr:new Proxy(z,G),resThenable:new X,proxyProps:{},proxyEvents:{}}),z.addEventListener("readystatechange",J=>{if(q.proxyXhr.readyState===4&&q.request&&typeof q.request.response=="function"){const K={finalUrl:q.proxyXhr.responseURL,status:q.proxyXhr.status,responseHeaders:F(q.proxyXhr.getAllResponseHeaders())},rt={};for(const ct of E){try{rt[ct]=q.originalXhr[ct];}catch{}D(K,ct,()=>K[ct]=rt[ct],yt=>{delete K[ct],K[ct]=yt;});}q.resThenable=new Q(q.request).waitForResponseKeys(K).then(()=>{for(const ct of E)q.proxyProps[ct]={get:()=>(ct in K||(K[ct]=rt[ct]),K[ct])};});}q.dispatchEvent(J);}),z.addEventListener("load",J=>q.dispatchEvent(J)),z.addEventListener("loadend",J=>q.dispatchEvent(J));for(const J of L){const K="on"+J;q.proxyProps[K]={get:()=>q.proxyEvents[K]||null,set:rt=>q.addEvent(K,rt)};}for(const J of ["setRequestHeader","addEventListener","removeEventListener","open","send"])q.proxyProps[J]={value:q[J]};}toJSON(){}addEvent(z,q){if(z.startsWith("on"))this.proxyEvents[z]=typeof q=="function"?q:null;else {if(typeof q=="object"&&q!==null&&(q=q.handleEvent),typeof q!="function")return;this.proxyEvents[z]=this.proxyEvents[z]||new Set,this.proxyEvents[z].add(q);}}removeEvent(z,q){z.startsWith("on")?this.proxyEvents[z]=null:(typeof q=="object"&&q!==null&&(q=q.handleEvent),this.proxyEvents[z]&&this.proxyEvents[z].delete(q));}dispatchEvent(z){if(z.stopImmediatePropagation=W,D(z,"target",()=>this.proxyXhr),D(z,"currentTarget",()=>this.proxyXhr),this.proxyEvents[z.type]&&this.proxyEvents[z.type].forEach(J=>{this.resThenable.then(()=>!z.ajaxHooker_isStopped&&J.call(this.proxyXhr,z));}),z.ajaxHooker_isStopped)return;const q=this.proxyEvents["on"+z.type];q&&this.resThenable.then(q.bind(this.proxyXhr,z));}setRequestHeader(z,q){if(this.originalXhr.setRequestHeader(z,q),!this.request)return;const J=this.request.headers;J[z]=z in J?`${J[z]}, ${q}`:q;}addEventListener(...z){L.includes(z[0])?this.addEvent(z[0],z[1]):this.originalXhr.addEventListener(...z);}removeEventListener(...z){L.includes(z[0])?this.removeEvent(z[0],z[1]):this.originalXhr.removeEventListener(...z);}open(z,q,J=!0,...K){return this.request={type:"xhr",url:q.toString(),method:z.toUpperCase(),abort:!1,headers:{},data:null,response:null,async:!!J},this.openArgs=K,this.resThenable=new X,["responseURL","readyState","status","statusText",...E].forEach(rt=>{delete this.proxyProps[rt];}),this.originalXhr.open(z,q,J,...K)}send(z){const q=this,J=q.originalXhr,K=q.request;if(!K)return J.send(z);K.data=z,new Q(K).waitForRequestKeys().then(()=>{if(K.abort)typeof K.response=="function"&&(Object.assign(q.proxyProps,{responseURL:{value:K.url},readyState:{value:4},status:{value:200},statusText:{value:"OK"}}),L.forEach(rt=>J.dispatchEvent(new Event(rt))));else {J.open(K.method,K.url,K.async,...q.openArgs);for(const rt in K.headers)J.setRequestHeader(rt,K.headers[rt]);J.send(K.data);}});}}function et(){const Y=new C.realXHR;return "__ajaxHooker"in Y&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),Y.__ajaxHooker=new tt(Y),Y.__ajaxHooker.proxyXhr}et.prototype=A.XMLHttpRequest.prototype,Object.keys(A.XMLHttpRequest).forEach(Y=>et[Y]=A.XMLHttpRequest[Y]);function nt(Y,z={}){return Y?new Promise(async(q,J)=>{const K={};if(_(Y)==="[object Request]"){for(const yt of U)K[yt]=Y[yt];Y.body&&(K.body=await Y.arrayBuffer()),Y=Y.url;}Y=Y.toString(),Object.assign(K,z),K.method=K.method||"GET",K.headers=K.headers||{};const rt={type:"fetch",url:Y,method:K.method.toUpperCase(),abort:!1,headers:F(K.headers),data:K.body,response:null,async:!0},ct=new Q(rt);if(await ct.waitForRequestKeys(),rt.abort){if(typeof rt.response=="function"){const yt={finalUrl:rt.url,status:200,responseHeaders:{}};await ct.waitForResponseKeys(yt);const kt=k.find(Mt=>Mt in yt);let At=yt[kt];kt==="json"&&typeof At=="object"&&(At=V(JSON.stringify.bind(JSON),At));const ht=new Response(At,{status:200,statusText:"OK"});D(ht,"type",()=>"basic"),D(ht,"url",()=>rt.url),q(ht);}else J(new DOMException("aborted","AbortError"));return}K.method=rt.method,K.headers=rt.headers,K.body=rt.data,C.realFetch.call(A,rt.url,K).then(yt=>{if(typeof rt.response=="function"){const kt={finalUrl:yt.url,status:yt.status,responseHeaders:F(yt.headers)};k.forEach(At=>yt[At]=function(){return At in kt?Promise.resolve(kt[At]):T[At].call(this).then(ht=>(kt[At]=ht,ct.waitForResponseKeys(kt).then(()=>At in kt?kt[At]:ht)))});}q(yt);},J);}):C.realFetch.call(A,Y,z)}function bt(){const Y=Object.getOwnPropertyDescriptors(this),z=C.realFetchClone.call(this);return Object.defineProperties(z,Y),z}return C=A.__ajaxHooker=C||{version:S,fakeXHR:et,fakeFetch:nt,fakeFetchClone:bt,realXHR:A.XMLHttpRequest,realFetch:A.fetch,realFetchClone:T.clone,hookInsts:new Set},C.version!==S&&console.warn("检测到不同版本的ajaxHooker，可能发生冲突！"),A.XMLHttpRequest=C.fakeXHR,A.fetch=C.fakeFetch,T.clone=C.fakeFetchClone,C.hookInsts.add(w),{hook:Y=>w.hookFns.push(Y),filter:Y=>{Array.isArray(Y)&&(w.filters=Y);},protect:()=>{N(A,"XMLHttpRequest",C.fakeXHR),N(A,"fetch",C.fakeFetch),N(T,"clone",C.fakeFetchClone);},unhook:()=>{C.hookInsts.delete(w),C.hookInsts.size||(R(A,"XMLHttpRequest",C.realXHR),R(A,"fetch",C.realFetch),R(T,"clone",C.realFetchClone),delete A.__ajaxHooker);}}}()};class GMMenu{constructor(w){Z(this,"GM_Api",{getValue:null,setValue:null,registerMenuCommand:null,unregisterMenuCommand:null});Z(this,"MenuHandle",{context:this,$data:{data:[],key:"GM_Menu_Local_Map"},$default:{autoReload:!0,isStoreValue:!0},$emoji:{success:"✅",error:"❌"},init(){for(let w=0;w<this.$data.data.length;w++){let A=this.$data.data[w].data;A.enable=!!this.getLocalMenuData(A.key,A.enable),typeof A.showText!="function"&&(A.showText=(C,T)=>T?this.$emoji.success+" "+C:this.$emoji.error+" "+C);}},register(w){let A=this;if(w==null)throw new TypeError("register菜单数据不能为空");Array.isArray(w)||(w=[w]);for(let C=0;C<w.length;C++){let T=utils$1.deepClone(w[C].data);const{showText:E,clickCallBack:k}=this.handleMenuData(T);let U=A.context.GM_Api.registerMenuCommand(E,k);w[C].id=U,T.deleteMenu=function(){A.context.GM_Api.unregisterMenuCommand(U);},Reflect.deleteProperty(w[C],"handleData"),w[C].handleData=T;}},getLocalMenuData(w,A){let C=this.context.GM_Api.getValue(this.$data.key,{});return w in C?C[w]:A},setLocalMenuData(w,A){let C=this.context.GM_Api.getValue(this.$data.key,{});C[w]=A,this.context.GM_Api.setValue(this.$data.key,C);},handleInitDetail(w){return w.enable=!!this.getLocalMenuData(w.key,w.enable),typeof w.showText!="function"&&(w.showText=(A,C)=>C?this.$emoji.success+" "+A:this.$emoji.error+" "+A),w},handleMenuData(w){let A=this,C=w.key,T=!!this.getLocalMenuData(C,w.enable),E=w.showText(w.text,T);w.id,w.autoClose,w.accessKey,w.title,w.autoReload=typeof w.autoReload!="boolean"?this.$default.autoReload:w.autoReload,w.isStoreValue=typeof w.isStoreValue!="boolean"?this.$default.isStoreValue:w.isStoreValue;function k(U){let L=!!A.getLocalMenuData(C,T);w.isStoreValue&&A.setLocalMenuData(C,!L),typeof w.callback=="function"&&w.callback({key:C,enable:!L,oldEnable:L,event:U,storeValue(_){A.setLocalMenuData(C,_);}}),w.autoReload?window.location.reload():A.context.update();}return {showText:E,clickCallBack:k}},getMenuData(w){return this.$data.data.find(A=>A.data.key===w)},getMenuOption(w){var A;return (A=this.$data.data.find(C=>C.data.key===w))==null?void 0:A.data},getMenuHandledOption(w){var A;return (A=this.$data.data.find(C=>C.handleData.key===w))==null?void 0:A.handleData}});this.GM_Api.getValue=w.GM_getValue,this.GM_Api.setValue=w.GM_setValue,this.GM_Api.registerMenuCommand=w.GM_registerMenuCommand,this.GM_Api.unregisterMenuCommand=w.GM_unregisterMenuCommand,this.MenuHandle.$default.autoReload=typeof w.autoReload=="boolean"?w.autoReload:!0;for(const A of Object.keys(this.GM_Api))if(typeof this.GM_Api[A]!="function")throw new Error(`Utils.GM_Menu 请在脚本开头加上 @grant  ${A}，且传入该对象`);this.add((w==null?void 0:w.data)||[]);}__add(w){if(Array.isArray(w))for(let A=0;A<w.length;A++){const C=w[A];this.MenuHandle.$data.data.push({data:C,id:void 0});}else this.MenuHandle.$data.data.push({data:w,id:void 0});}add(w){this.__add(w),this.update();}update(w){let A=[];Array.isArray(w)?A=[...A,...w]:w!=null&&(A=[...A,w]),A.forEach(C=>{let T=this.MenuHandle.getMenuOption(C.key);T?Object.assign(T,C):this.__add(C);}),this.MenuHandle.$data.data.forEach(C=>{C.handleData&&C.handleData.deleteMenu();}),this.MenuHandle.init(),this.MenuHandle.register(this.MenuHandle.$data.data);}delete(w){this.GM_Api.unregisterMenuCommand(w);}get(w){return this.getEnable(w)}getEnable(w){return this.MenuHandle.getMenuHandledOption(w).enable}getText(w){return this.MenuHandle.getMenuHandledOption(w).text}getShowTextValue(w){return this.MenuHandle.getMenuHandledOption(w).showText(this.getText(w),this.getEnable(w))}getMenuId(w){let A=null;for(let C=0;C<this.MenuHandle.$data.data.length;C++){const T=this.MenuHandle.$data.data[C];if(T.handleData.key===w){A=T.id;break}}return A}getAccessKey(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.accessKey}getAutoClose(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.autoClose}getAutoReload(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.autoReload}getCallBack(w){var A;return (A=this.MenuHandle.getMenuHandledOption(w))==null?void 0:A.callback}getEnableTrueEmoji(){return this.MenuHandle.$emoji.success}getEnableFalseEmoji(){return this.MenuHandle.$emoji.error}getLocalStorageKeyName(){return this.MenuHandle.$data.key}setValue(w,A){this.MenuHandle.setLocalMenuData(w,A);}setEnable(w,A){this.setValue(w,!!A);}setEnableTrueEmoji(w){if(typeof w!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.success=w;}setEnableFalseEmoji(w){if(typeof w!="string")throw new Error("参数emojiString必须是string类型");this.MenuHandle.$emoji.error=w;}setLocalStorageKeyName(w){if(typeof w!="string")throw new Error("参数keyName必须是string类型");this.MenuHandle.$data.key=w;}}class Hooks{initEnv(){Function.prototype.hook=function(realFunc,hookFunc,context){let _context=null,_funcName=null;if(_context=context||window,_funcName=getFuncName(this),_context["realFunc_"+_funcName]=this,_context[_funcName].prototype&&_context[_funcName].prototype.isHooked)return console.log("Already has been hooked,unhook first"),!1;function getFuncName(S){let w=S.toString(),A=/function\s+(\w+)\s*\(/,C=w.match(A);return C?C[1]:""}try{return eval("_context[_funcName] = function "+_funcName+`(){
let args = Array.prototype.slice.call(arguments,0);
let obj = this;
hookFunc.apply(obj,args);
return _context['realFunc_`+_funcName+`'].apply(obj,args);
};`),_context[_funcName].prototype.isHooked=!0,!0}catch(S){return console.log("Hook failed,check the params."),!1}},Function.prototype.unhook=function(S,w,A){let C=null,T=null;return C=A||window,T=w,C[T].prototype.isHooked?(C[T]=C["realFunc"+T],Reflect.deleteProperty(C,"realFunc_"+T),!0):(console.log("No function is hooked on"),!1)};}cleanEnv(){return Function.prototype.hasOwnProperty("hook")&&Reflect.deleteProperty(Function.prototype,"hook"),Function.prototype.hasOwnProperty("unhook")&&Reflect.deleteProperty(Function.prototype,"unhook"),!0}}const GenerateUUID=function(){var S;return typeof((S=window==null?void 0:window.crypto)==null?void 0:S.randomUUID)=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(w){var A=Math.random()*16|0,C=w==="x"?A:A&3|8;return C.toString(16)})};var pt,Kt;class Httpx{constructor(w){Z(this,"GM_Api",{xmlHttpRequest:null});Z(this,"HttpxRequestHook",{$config:{configList:[]},async beforeRequestCallBack(w){if(typeof w.allowInterceptConfig=="boolean"){if(!w.allowInterceptConfig)return w}else if(w.allowInterceptConfig!=null&&typeof w.allowInterceptConfig.beforeRequest=="boolean"&&!w.allowInterceptConfig.beforeRequest)return w;for(let A=0;A<this.$config.configList.length;A++){let C=this.$config.configList[A];if(typeof C.fn=="function"&&await C.fn(w)==null)return}return w},add(w){if(typeof w=="function"){let A=GenerateUUID();return this.$config.configList.push({id:A,fn:w}),A}else console.warn("[Httpx-HttpxRequestHook.addBeforeRequestCallBack] fn is not a function");},delete(w){if(typeof w=="string"){let A=this.$config.configList.findIndex(C=>C.id===w);if(A!==-1)return this.$config.configList.splice(A,1),!0}return !1},clearAll(){this.$config.configList=[];}});Z(this,"HttpxResponseHook",{$config:{configList:[]},async successResponseCallBack(w,A){if(typeof A.allowInterceptConfig=="boolean"){if(!A.allowInterceptConfig)return A}else if(A.allowInterceptConfig!=null&&typeof A.allowInterceptConfig.afterResponseSuccess=="boolean"&&!A.allowInterceptConfig.afterResponseSuccess)return A;for(let C=0;C<this.$config.configList.length;C++){let T=this.$config.configList[C];if(typeof T.successFn=="function"&&await T.successFn(w,A)==null)return}return w},async errorResponseCallBack(w){if(typeof w.details.allowInterceptConfig=="boolean"){if(!w.details.allowInterceptConfig)return w}else if(w.details.allowInterceptConfig!=null&&typeof w.details.allowInterceptConfig.afterResponseError=="boolean"&&!w.details.allowInterceptConfig.afterResponseError)return w;for(let A=0;A<this.$config.configList.length;A++){let C=this.$config.configList[A];if(typeof C.errorFn=="function"&&await C.errorFn(w)==null)return}return w},add(w,A){let C=GenerateUUID();return this.$config.configList.push({id:C,successFn:w,errorFn:A}),C},delete(w){if(typeof w=="string"){let A=this.$config.configList.findIndex(C=>C.id===w);if(A!==-1)return this.$config.configList.splice(A,1),!0}return !1},clearAll(){this.$config.configList=[];}});Z(this,"HttpxRequestOption",{context:this,handleBeforeRequestOption(...w){let A={};if(typeof w[0]=="string"){let C=w[0];A.url=C,typeof w[1]=="object"&&(A=w[1],A.url=C);}else A=w[0];return A},getRequestOption(w,A,C,T){let E=this,k={url:A.url||B(this.context,pt).url,method:(w||"GET").toString().toUpperCase().trim(),timeout:A.timeout||B(this.context,pt).timeout,responseType:A.responseType||B(this.context,pt).responseType,headers:utils$1.deepClone(B(this.context,pt).headers),data:A.data||B(this.context,pt).data,redirect:A.redirect||B(this.context,pt).redirect,cookie:A.cookie||B(this.context,pt).cookie,cookiePartition:A.cookiePartition||B(this.context,pt).cookiePartition,binary:A.binary||B(this.context,pt).binary,nocache:A.nocache||B(this.context,pt).nocache,revalidate:A.revalidate||B(this.context,pt).revalidate,context:utils$1.deepClone(A.context||B(this.context,pt).context),overrideMimeType:A.overrideMimeType||B(this.context,pt).overrideMimeType,anonymous:A.anonymous||B(this.context,pt).anonymous,fetch:A.fetch||B(this.context,pt).fetch,fetchInit:utils$1.deepClone(B(this.context,pt).fetchInit),allowInterceptConfig:{beforeRequest:B(this.context,pt).allowInterceptConfig.beforeRequest,afterResponseSuccess:B(this.context,pt).allowInterceptConfig.afterResponseSuccess,afterResponseError:B(this.context,pt).allowInterceptConfig.afterResponseError},user:A.user||B(this.context,pt).user,password:A.password||B(this.context,pt).password,onabort(...U){E.context.HttpxCallBack.onAbort(A,C,T,U);},onerror(...U){E.context.HttpxCallBack.onError(A,C,T,U);},onloadstart(...U){E.context.HttpxCallBack.onLoadStart(A,U);},onprogress(...U){E.context.HttpxCallBack.onProgress(A,U);},onreadystatechange(...U){E.context.HttpxCallBack.onReadyStateChange(A,U);},ontimeout(...U){E.context.HttpxCallBack.onTimeout(A,C,T,U);},onload(...U){E.context.HttpxCallBack.onLoad(A,C,T,U);}};typeof A.allowInterceptConfig=="boolean"?Object.keys(k.allowInterceptConfig).forEach(U=>{Reflect.set(k.allowInterceptConfig,U,A.allowInterceptConfig);}):typeof A.allowInterceptConfig=="object"&&A.allowInterceptConfig!=null&&Object.keys(A.allowInterceptConfig).forEach(U=>{let L=Reflect.get(A.allowInterceptConfig,U);typeof L=="boolean"&&Reflect.has(k.allowInterceptConfig,U)&&Reflect.set(k.allowInterceptConfig,U,L);}),typeof this.context.GM_Api.xmlHttpRequest!="function"&&(k.fetch=!0),typeof k.headers=="object"?typeof A.headers=="object"&&Object.keys(A.headers).forEach((U,L)=>{var _,I;U in k.headers&&((_=A.headers)==null?void 0:_[U])==null?Reflect.deleteProperty(k.headers,U):k.headers[U]=(I=A==null?void 0:A.headers)==null?void 0:I[U];}):Reflect.set(k,"headers",A.headers),typeof k.fetchInit=="object"?typeof A.fetchInit=="object"&&Object.keys(A.fetchInit).forEach((U,L)=>{U in k.fetchInit&&A.fetchInit[U]==null?Reflect.deleteProperty(k.fetchInit,U):Reflect.set(k.fetchInit,U,Reflect.get(A.fetchInit,U));}):Reflect.set(k,"fetchInit",A.fetchInit),typeof k.cookiePartition=="object"&&k.cookiePartition!=null&&Reflect.has(k.cookiePartition,"topLevelSite")&&typeof k.cookiePartition.topLevelSite!="string"&&Reflect.deleteProperty(k.cookiePartition,"topLevelSite");try{new URL(k.url);}catch{k.url.startsWith("//")?k.url=globalThis.location.protocol+k.url:k.url.startsWith("/")?k.url=globalThis.location.origin+k.url:k.url=globalThis.location.origin+"/"+k.url;}k.fetchInit&&!k.fetch&&Reflect.deleteProperty(k,"fetchInit");try{let U=A.processData??!0;if(k.data!=null&&U){let L=k.method;if(L==="GET"||L==="HEAD"){let _=new URL(k.url),I="",$=!1;typeof k.data=="string"?($=!0,I=k.data):typeof k.data=="object"&&($=!0,I=new URLSearchParams(k.data).toString()),$&&Reflect.deleteProperty(k,"data"),I!=""&&(_.search===""?_.search=I:_.search.endsWith("&")?_.search=_.search+I:_.search=_.search+"&"+I),k.url=_.toString();}else if(L==="POST"&&k.headers!=null){let _=Object.keys(k.headers),I=_.findIndex($=>$.trim().toLowerCase()==="content-type"&&typeof k.headers[$]=="string");if(I!==-1){let $=_[I],P=k.headers[$];if(P.includes("application/json"))if(k.data instanceof FormData){const H={};k.data.forEach((V,D)=>{H[D]=V;}),k.data=JSON.stringify(H);}else typeof k.data=="object"&&(k.data=JSON.stringify(k.data));else P.includes("application/x-www-form-urlencoded")?typeof k.data=="object"&&(k.data=new URLSearchParams(k.data).toString()):P.includes("multipart/form-data")&&k.data instanceof FormData&&Reflect.deleteProperty(k.headers,$);}}}}catch(U){console.warn("Httpx ==> 转换data参数错误",U);}return k},removeRequestNullOption(w){if(Object.keys(w).forEach(A=>{if(w[A]==null||w[A]instanceof Function&&utils$1.isNull(w[A])){Reflect.deleteProperty(w,A);return}}),utils$1.isNull(w.url))throw new TypeError(`Utils.Httpx 参数 url不符合要求: ${w.url}`);return w},handleFetchOption(w){let A={};(w.method==="GET"||w.method==="HEAD")&&w.data!=null&&Reflect.deleteProperty(w,"data");let C=new AbortController,T=C.signal;return T.onabort=()=>{w.onabort({isFetch:!0,responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",error:"aborted"});},A.method=w.method??"GET",A.headers=w.headers,A.body=w.data,A.mode="cors",A.credentials="include",A.cache="no-cache",A.redirect="follow",A.referrerPolicy="origin-when-cross-origin",A.signal=T,Object.assign(A,w.fetchInit||{}),{fetchOption:w,fetchRequestOption:A,abortController:C}}});Z(this,"HttpxCallBack",{context:this,async onAbort(w,A,C,T){"onabort"in w?w.onabort.apply(this,T):"onabort"in B(this.context,pt)&&B(this.context,pt).onabort.apply(this,T);let E=T;E.length&&(E=E[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onabort",error:new TypeError("request canceled"),response:null,details:w})!=null&&A({data:E,details:w,msg:"请求被取消",status:!1,statusCode:-1,type:"onabort"});},async onError(w,A,C,T){"onerror"in w?w.onerror.apply(this,T):"onerror"in B(this.context,pt)&&B(this.context,pt).onerror.apply(this,T);let E=T;E.length&&(E=E[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"onerror",error:new TypeError("request error"),response:E,details:w})!=null&&A({data:E,details:w,msg:"请求异常",status:!1,statusCode:E.status,type:"onerror"});},async onTimeout(w,A,C,T){"ontimeout"in w?w.ontimeout.apply(this,T):"ontimeout"in B(this.context,pt)&&B(this.context,pt).ontimeout.apply(this,T);let E=T;E.length&&(E=E[0]),await this.context.HttpxResponseHook.errorResponseCallBack({type:"ontimeout",error:new TypeError("request timeout"),response:(T||[null])[0],details:w})!=null&&A({data:E,details:w,msg:"请求超时",status:!1,statusCode:0,type:"ontimeout"});},onLoadStart(w,A){"onloadstart"in w?w.onloadstart.apply(this,A):"onloadstart"in B(this.context,pt)&&B(this.context,pt).onloadstart.apply(this,A);},async onLoad(w,A,C,T){let E=T[0];if(utils$1.isNull(E.responseText)&&utils$1.isNotNull(E.response)&&(typeof E.response=="object"?utils$1.tryCatch().run(()=>{E.responseText=JSON.stringify(E.response);}):E.responseText=E.response),E.response==null&&typeof E.responseText=="string"&&E.responseText.trim()!==""){let U=E.responseText,L=U;if(w.responseType==="json")L=utils$1.toJSON(U);else if(w.responseType==="document")L=new DOMParser().parseFromString(U,"text/html");else if(w.responseType==="arraybuffer")L=new TextEncoder().encode(U);else if(w.responseType==="blob"){let I=new TextEncoder().encode(U);L=new Blob([I]);}try{if(!Reflect.set(E,"response",L)){console.warn("[Httpx-HttpxCallBack.oonLoad] 覆盖原始 response 失败，尝试添加新的httpxResponse");try{Reflect.set(E,"httpxResponse",L);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] 原始 response 无法被覆盖，尝试添加新的httpxResponse");try{Reflect.set(E,"httpxResponse",L);}catch{console.warn("[Httpx-HttpxCallBack.oonLoad] httpxResponse 无法被覆盖");}}}let k=Reflect.get(E,"responseURL");if(E.finalUrl==null&&k!=null&&Reflect.set(E,"finalUrl",k),Math.floor(E.status/100)===2){if(await this.context.HttpxResponseHook.successResponseCallBack(E,w)==null)return;A({data:E,details:w,msg:"请求成功",status:!0,statusCode:E.status,type:"onload"});}else this.context.HttpxCallBack.onError(w,A,C,T);},onProgress(w,A){"onprogress"in w?w.onprogress.apply(this,A):"onprogress"in B(this.context,pt)&&B(this.context,pt).onprogress.apply(this,A);},onReadyStateChange(w,A){"onreadystatechange"in w?w.onreadystatechange.apply(this,A):"onreadystatechange"in B(this.context,pt)&&B(this.context,pt).onreadystatechange.apply(this,A);}});Z(this,"HttpxRequest",{context:this,async request(w){if(B(this.context,Kt)&&console.log("[Httpx-HttpxRequest.request] 请求前的配置👇",w),!(typeof this.context.HttpxRequestHook.beforeRequestCallBack=="function"&&await this.context.HttpxRequestHook.beforeRequestCallBack(w)==null))if(w.fetch){const{fetchOption:A,fetchRequestOption:C,abortController:T}=this.context.HttpxRequestOption.handleFetchOption(w);return this.fetch(A,C,T)}else return this.xmlHttpRequest(w)},xmlHttpRequest(w){return this.context.GM_Api.xmlHttpRequest(w)},fetch(w,A,C){return fetch(w.url,A).then(async T=>{var V;let E={isFetch:!0,finalUrl:T.url,readyState:4,status:T.status,statusText:T.statusText,response:void 0,responseFetchHeaders:T.headers,responseHeaders:"",responseText:void 0,responseType:w.responseType,responseXML:void 0};Object.assign(E,w.context||{});for(const[D,N]of T.headers.entries())E.responseHeaders+=`${D}: ${N}
`;const k=T.headers.get("Content-Type");if(w.responseType==="stream"||T.headers.has("Content-Type")&&T.headers.get("Content-Type").includes("text/event-stream")){Reflect.set(E,"isStream",!0),Reflect.set(E,"response",T.body),Reflect.deleteProperty(E,"responseText"),Reflect.deleteProperty(E,"responseXML"),w.onload(E);return}let U="",L="",_="",I=await T.arrayBuffer(),$="utf-8";if(T.headers.has("Content-Type")){let D=(V=T.headers.get("Content-Type"))==null?void 0:V.match(/charset=(.+)/);D&&($=D[1],$=$.toLowerCase());}$=$.replace(/('|")/gi,""),L=new TextDecoder($).decode(I),U=L,w.responseType==="arraybuffer"?U=I:w.responseType==="blob"?U=new Blob([I]):w.responseType==="json"||typeof k=="string"&&k.includes("application/json")?U=utils$1.toJSON(L):(w.responseType==="document"||w.responseType==null)&&(U=new DOMParser().parseFromString(L,"text/html")),_=new DOMParser().parseFromString(L,"text/xml"),Reflect.set(E,"response",U),Reflect.set(E,"responseText",L),Reflect.set(E,"responseXML",_),w.onload(E);}).catch(T=>{T.name!=="AbortError"&&w.onerror({isFetch:!0,finalUrl:w.url,readyState:4,status:0,statusText:"",responseHeaders:"",responseText:"",error:T});}),w.onloadstart({isFetch:!0,finalUrl:w.url,readyState:1,responseHeaders:"",responseText:"",status:0,statusText:""}),{abort(){C.abort();}}}});ut(this,pt,{url:void 0,timeout:5e3,async:!1,responseType:void 0,headers:void 0,data:void 0,redirect:void 0,cookie:void 0,cookiePartition:void 0,binary:void 0,nocache:void 0,revalidate:void 0,context:void 0,overrideMimeType:void 0,anonymous:void 0,fetch:void 0,fetchInit:void 0,allowInterceptConfig:{beforeRequest:!0,afterResponseSuccess:!0,afterResponseError:!0},user:void 0,password:void 0,onabort(){},onerror(){},ontimeout(){},onloadstart(){},onreadystatechange(){},onprogress(){}});ut(this,Kt,!1);Z(this,"interceptors",{request:{context:null,use(w){if(typeof w!="function"){console.warn("[Httpx-interceptors-request] 请传入拦截器函数");return}return this.context.HttpxRequestHook.add(w)},eject(w){return this.context.HttpxRequestHook.delete(w)},ejectAll(){this.context.HttpxRequestHook.clearAll();}},response:{context:null,use(w,A){if(typeof w!="function"&&typeof A!="function"){console.warn("[Httpx-interceptors-response] 必须传入一个拦截器函数");return}return this.context.HttpxResponseHook.add(w,A)},eject(w){return this.context.HttpxResponseHook.delete(w)},ejectAll(){this.context.HttpxResponseHook.clearAll();}}});typeof w!="function"&&console.warn("[Httpx-constructor] 未传入GM_xmlhttpRequest函数或传入的GM_xmlhttpRequest不是Function，将默认使用window.fetch"),this.interceptors.request.context=this,this.interceptors.response.context=this,this.GM_Api.xmlHttpRequest=w;}config(w={}){"logDetails"in w&&typeof w.logDetails=="boolean"&&ft(this,Kt,w.logDetails),ft(this,pt,utils$1.assign(B(this,pt),w));}setXMLHttpRequest(w){this.GM_Api.xmlHttpRequest=w;}get(...w){let A=this.HttpxRequestOption.handleBeforeRequestOption(...w),C=null,T=new globalThis.Promise(async(E,k)=>{let U=this.HttpxRequestOption.getRequestOption("GET",A,E,k);Reflect.deleteProperty(U,"onprogress"),this.HttpxRequestOption.removeRequestNullOption(U);const L=await this.HttpxRequest.request(U);L!=null&&typeof L.abort=="function"&&(C=L.abort);});return T.abort=()=>{typeof C=="function"&&C();},T}post(...w){let A=this.HttpxRequestOption.handleBeforeRequestOption(...w),C=null,T=new Promise(async(E,k)=>{let U=this.HttpxRequestOption.getRequestOption("POST",A,E,k);U=this.HttpxRequestOption.removeRequestNullOption(U);const L=await this.HttpxRequest.request(U);L!=null&&typeof L.abort=="function"&&(C=L.abort);});return T.abort=()=>{typeof C=="function"&&C();},T}head(...w){let A=this.HttpxRequestOption.handleBeforeRequestOption(...w),C=null,T=new Promise(async(E,k)=>{let U=this.HttpxRequestOption.getRequestOption("HEAD",A,E,k);Reflect.deleteProperty(U,"onprogress"),U=this.HttpxRequestOption.removeRequestNullOption(U);const L=await this.HttpxRequest.request(U);L!=null&&typeof L.abort=="function"&&(C=L.abort);});return T.abort=()=>{typeof C=="function"&&C();},T}options(...w){let A=this.HttpxRequestOption.handleBeforeRequestOption(...w),C=null,T=new Promise(async(E,k)=>{let U=this.HttpxRequestOption.getRequestOption("OPTIONS",A,E,k);Reflect.deleteProperty(U,"onprogress"),U=this.HttpxRequestOption.removeRequestNullOption(U);const L=await this.HttpxRequest.request(U);L!=null&&typeof L.abort=="function"&&(C=L.abort);});return T.abort=()=>{typeof C=="function"&&C();},T}delete(...w){let A=this.HttpxRequestOption.handleBeforeRequestOption(...w),C=null,T=new Promise(async(E,k)=>{let U=this.HttpxRequestOption.getRequestOption("DELETE",A,E,k);Reflect.deleteProperty(U,"onprogress"),U=this.HttpxRequestOption.removeRequestNullOption(U);const L=await this.HttpxRequest.request(U);L!=null&&typeof L.abort=="function"&&(C=L.abort);});return T.abort=()=>{typeof C=="function"&&C();},T}put(...w){let A=this.HttpxRequestOption.handleBeforeRequestOption(...w),C=null,T=new Promise(async(E,k)=>{let U=this.HttpxRequestOption.getRequestOption("PUT",A,E,k);U=this.HttpxRequestOption.removeRequestNullOption(U);const L=await this.HttpxRequest.request(U);L!=null&&typeof L.abort=="function"&&(C=L.abort);});return T.abort=()=>{typeof C=="function"&&C();},T}}pt=new WeakMap,Kt=new WeakMap;var _t,Bt,Qt,ne,Wt,Dt,Jt,lt;class indexedDB{constructor(w="default_db",A="default_form",C=1){ut(this,_t);ut(this,Bt);ut(this,Qt);ut(this,ne,"1");ut(this,Wt,window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB);ut(this,Dt,{});ut(this,Jt,null);ut(this,lt,{operationSuccess:{code:200,msg:"操作成功"},operationFailed:{code:401,msg:"操作失败"},empty:{code:201,msg:"操作成功，但是没有数据"},openFailed:{code:91001,msg:"打开数据库失败"},saveFailed:{code:91002,msg:"保存数据失败"},getFailed:{code:91003,msg:"获取数据失败"},deleteFailed:{code:91004,msg:"删除数据失败"},deleteAllFailed:{code:91005,msg:"清空数据库失败"},regexpGetFailed:{code:91006,msg:"正则获取数据失败"}});if(ft(this,_t,w),ft(this,Bt,A),ft(this,Qt,C),!B(this,Wt))throw alert("很抱歉，您的浏览器不支持indexedDB"),new TypeError("很抱歉，您的浏览器不支持indexedDB")}createStore(w){let A,C;return A=B(this,Dt)[w].transaction(B(this,Bt),"readwrite"),C=A.objectStore(B(this,Bt)),ft(this,Jt,C),C}open(w,A){let C=this;if(B(C,Dt)[A]){let T=this.createStore(A);w(T);}else {let T=B(C,Wt).open(A,B(C,Qt));T.onerror=function(E){w(null,{code:B(C,lt).openFailed.code,msg:B(C,lt).openFailed.msg,event:E});},T.onsuccess=function(E){if(!B(C,Dt)[A]){let U=E.target;B(C,Dt)[A]=U.result;}let k=C.createStore(A);w(k);},T.onupgradeneeded=function(E){let k=E.target;B(C,Dt)[A]=k.result;let U=B(C,Dt)[A].createObjectStore(B(C,Bt),{keyPath:"key"});U.transaction.oncomplete=function(L){w(U);};};}}async save(w,A){let C=this;return new Promise(T=>{let E=B(this,_t),k={key:w,value:A};this.open(function(U){if(U==null)T({success:!1,code:B(C,lt).saveFailed.code,msg:B(C,lt).saveFailed.msg});else {let L=U.put(k);L.onsuccess=function(_){T({success:!0,code:B(C,lt).operationSuccess.code,msg:B(C,lt).operationSuccess.msg,event:_});},L.onerror=function(_){T({success:!1,code:B(C,lt).saveFailed.code,msg:B(C,lt).saveFailed.msg,event:_});};}},E);})}async has(w){let A=this;return new Promise(C=>{let T=B(this,_t);this.open(function(E){if(E==null)C({success:!1,code:B(A,lt).getFailed.code,msg:B(A,lt).getFailed.msg});else {let k=E.get(w);k.onsuccess=function(U){C({success:!0,code:B(A,lt).operationSuccess.code,msg:B(A,lt).operationSuccess.msg,event:U});},k.onerror=function(U){C({success:!1,code:B(A,lt).getFailed.code,msg:B(A,lt).getFailed.msg,event:U});};}},T);})}async get(w){let A=this;return new Promise(C=>{let T=B(this,_t);this.open(function(E){if(E==null)C({success:!1,code:B(A,lt).getFailed.code,msg:B(A,lt).getFailed.msg,data:void 0});else {let k=E.get(w);k.onsuccess=function(U){let _=U.target.result,I=_?_.value:void 0;I==null?C({success:!0,code:B(A,lt).empty.code,msg:B(A,lt).empty.msg,data:I,event:U,result:_}):C({success:!0,code:B(A,lt).operationSuccess.code,msg:B(A,lt).operationSuccess.msg,data:I,event:U,result:_});},k.onerror=function(U){C({success:!1,code:B(A,lt).getFailed.code,msg:B(A,lt).getFailed.msg,data:void 0,event:U});};}},T);})}async regexpGet(w){let A=[],C=this;return new Promise(T=>{let E=B(C,_t);this.open(function(k){if(k==null)T({success:!1,code:B(C,lt).regexpGetFailed.code,msg:B(C,lt).regexpGetFailed.msg,data:[]});else {let U=k.getAll();U.onsuccess=function(L){let I=L.target.result;I.length!==0&&I.forEach(($,P)=>{let H=$.key,V=$.value;H.match(w)&&(A=A.concat(V));}),T({success:!0,code:B(C,lt).operationSuccess.code,msg:B(C,lt).operationSuccess.msg,data:A,event:L});},U.onerror=function(L){T({success:!1,code:B(C,lt).getFailed.code,msg:B(C,lt).getFailed.msg,data:[],event:L});};}},E);})}async delete(w){let A=this;return new Promise(C=>{let T=B(A,_t);this.open(function(E){if(E==null)C({success:!1,code:B(A,lt).deleteFailed.code,msg:B(A,lt).deleteFailed.msg});else {let k=E.delete(w);k.onsuccess=function(U){C({success:!0,code:B(A,lt).operationSuccess.code,msg:B(A,lt).operationSuccess.msg,event:U});},k.onerror=function(U){C({success:!1,code:B(A,lt).deleteFailed.code,msg:B(A,lt).deleteFailed.msg,event:U});};}},T);})}async deleteAll(){let w=this;return new Promise(A=>{let C=B(w,_t);this.open(function(T){if(T==null)A({success:!1,code:B(w,lt).deleteAllFailed.code,msg:B(w,lt).deleteAllFailed.msg});else {let E=T.clear();E.onsuccess=function(k){A({success:!0,code:B(w,lt).operationSuccess.code,msg:B(w,lt).operationSuccess.msg,event:k});},E.onerror=function(k){A({success:!1,code:B(w,lt).deleteAllFailed.code,msg:B(w,lt).deleteAllFailed.msg,event:k});};}},C);})}}_t=new WeakMap,Bt=new WeakMap,Qt=new WeakMap,ne=new WeakMap,Wt=new WeakMap,Dt=new WeakMap,Jt=new WeakMap,lt=new WeakMap;var Gt,zt,Xt,Ft;class LockFunction{constructor(w,A,C){ut(this,Gt,!1);ut(this,zt,0);ut(this,Xt);ut(this,Ft);Z(this,"lock");Z(this,"unlock");Z(this,"run");Z(this,"isLock");let T=this;ft(this,Xt,w),typeof A=="number"?(ft(this,zt,A),ft(this,Ft,utils$1)):(ft(this,zt,C),ft(this,Ft,A)),this.lock=function(){ft(T,Gt,!0);},this.unlock=function(){setTimeout(()=>{ft(T,Gt,!1);},B(T,zt));},this.isLock=function(){return B(T,Gt)},this.run=async function(...E){T.isLock()||(T.lock(),await B(T,Xt).apply(B(T,Ft),E),T.unlock());};}}Gt=new WeakMap,zt=new WeakMap,Xt=new WeakMap,Ft=new WeakMap;var It,Ut,qt,St,Rt;class Log{constructor(w,A=window.console){ut(this,It,!1);Z(this,"tag","Utils.Log");ut(this,Ut,null);ut(this,qt,0);ut(this,St,{tag:!0,successColor:"#0000FF",errorColor:"#FF0000",infoColor:"0",warnColor:"0",debug:!1,autoClearConsole:!1,logMaxCount:999});ut(this,Rt,["font-weight: bold; color: cornflowerblue","font-weight: bold; color: cornflowerblue","font-weight: bold; color: darkorange","font-weight: bold; color: cornflowerblue"]);var C;typeof w=="string"?this.tag=w:typeof w=="object"&&typeof((C=w==null?void 0:w.script)==null?void 0:C.name)=="string"&&(this.tag=w.script.name),ft(this,Ut,A);}parseErrorStack(w){let A={name:"",position:""};for(let C of w){C=C.trim();let T=C.match(/^at[\s]+(.+?)[\s]+/i),E=C.match(/^at[\s]+.+[\s]+\((.+?)\)/i);if(T==null||E==null)continue;let k=T[T.length-1],U=E[E.length-1];if(!(k===""||k.match(/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g))){A.name=k,A.position=U;break}}if(A.position===""){let C=w[w.length-1].trim();if(C.startsWith("at chrome-extension://")){let T=C.match(/^at[\s]+(.+)/);T&&(A.position=T[T.length-1]);}}return A.position===""&&(A.position=w[w.length-1].trim().replace(/^at[\s]*/g,"")),A}checkClearConsole(){se(this,qt)._++,B(this,St).autoClearConsole&&B(this,qt)>B(this,St).logMaxCount&&(B(this,Ut).clear(),ft(this,qt,0));}printContent(w,A,C){this.checkClearConsole(),C=C||"";let T=new Error().stack.split(`
`);T.splice(0,2);let{name:E,position:k}=this.parseErrorStack(T),U=this.tag,L=this,_=`%c[${U}%c`,I=`%c${E}%c]%c`;E.trim()!==""&&(I="-"+I);function $(P){typeof P=="string"?B(L,Ut).log(`${_}${I} %s`,...B(L,Rt),`color: ${A};${C}`,P):typeof P=="number"?B(L,Ut).log(`${_}${I} %d`,...B(L,Rt),`color: ${A};${C}`,P):typeof P=="object"?B(L,Ut).log(`${_}${I} %o`,...B(L,Rt),`color: ${A};${C}`,P):B(L,Ut).log(P);}if(Array.isArray(w))for(let P=0;P<w.length;P++)$(w[P]);else $(w);B(this,St).debug&&B(this,Ut).log(k);}info(...w){B(this,It)||this.printContent(w,B(this,St).infoColor);}warn(...w){B(this,It)||this.printContent(w,B(this,St).warnColor,"background: #FEF6D5;padding: 4px 6px 4px 0px;");}error(...w){B(this,It)||this.printContent(w,B(this,St).errorColor);}success(...w){B(this,It)||this.printContent(w,B(this,St).successColor);}table(w){if(B(this,It))return;this.checkClearConsole();let A=new Error().stack.split(`
`);A.splice(0,1);let C=this.parseErrorStack(A),T=C.name,E=C.position,k=T;B(this,Ut).log(`%c[${this.tag}%c-%c${k}%c]%c`,...B(this,Rt),`color: ${B(this,St).infoColor};`),B(this,Ut).table(w),B(this,St).debug&&B(this,Ut).log(E);}config(w){ft(this,St,Object.assign(B(this,St),w));}disable(){ft(this,It,!0);}recovery(){ft(this,It,!1);}}It=new WeakMap,Ut=new WeakMap,qt=new WeakMap,St=new WeakMap,Rt=new WeakMap;var mt,vt,$t,Pt;class Progress{constructor(w){ut(this,mt,{canvasNode:null,deg:95,progress:0,lineWidth:10,lineBgColor:"#1e637c",lineColor:"#25deff",textColor:"#000000",fontSize:22,circleRadius:50});ut(this,vt,null);ut(this,$t,null);ut(this,Pt,null);if(ft(this,mt,utils$1.assign(B(this,mt),w)),!(B(this,mt).canvasNode instanceof HTMLCanvasElement))throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");this.init();}init(){let w=B(this,mt).canvasNode.getContext("2d");if(w==null)throw new Error("Utils.Progress 获取画笔失败");ft(this,vt,w),ft(this,$t,B(this,mt).canvasNode.width),ft(this,Pt,B(this,mt).canvasNode.height),window.devicePixelRatio&&(B(this,mt).canvasNode.style.width=B(this,$t)+"px",B(this,mt).canvasNode.style.height=B(this,Pt)+"px",B(this,mt).canvasNode.height=B(this,Pt)*window.devicePixelRatio,B(this,mt).canvasNode.width=B(this,$t)*window.devicePixelRatio,B(this,vt).scale(window.devicePixelRatio,window.devicePixelRatio)),B(this,vt).lineWidth=B(this,mt).lineWidth;}draw(){let w=B(this,mt).progress*360/100;B(this,vt).clearRect(0,0,B(this,$t),B(this,Pt)),B(this,vt).beginPath(),B(this,vt).arc(B(this,$t)/2,B(this,Pt)/2,B(this,mt).circleRadius,1,8),B(this,vt).strokeStyle=B(this,mt).lineBgColor,B(this,vt).stroke(),B(this,vt).beginPath(),B(this,vt).arc(B(this,$t)/2,B(this,Pt)/2,B(this,mt).circleRadius,-Math.PI/2,w*Math.PI/180-Math.PI/2),B(this,vt).strokeStyle=B(this,mt).lineColor,B(this,vt).stroke();let A=parseInt(B(this,mt).progress.toString())+"%";B(this,vt).font=B(this,mt).fontSize+"px SimHei";let C=B(this,vt).measureText(A).width,T=B(this,mt).fontSize/2;B(this,vt).fillStyle=B(this,mt).textColor,B(this,vt).fillText(A,B(this,$t)/2-C/2,B(this,Pt)/2+T/2);}}mt=new WeakMap,vt=new WeakMap,$t=new WeakMap,Pt=new WeakMap;const TryCatch=function(...args){let callbackFunction=null,context=null,handleError=S=>{},defaultDetails={log:!0};const TryCatchCore={config(S){return defaultDetails=utils$1.assign(defaultDetails,S),TryCatchCore},error(S){return handleError=S,TryCatchCore},run(S,w){callbackFunction=S,context=w||this;let A=executeTryCatch(callbackFunction,handleError,context);return A!==void 0?A:TryCatchCore}};function executeTryCatch(callback,handleErrorFunc,funcThis){let result;try{typeof callback=="string"?(function(){eval(callback);}).apply(funcThis,args):result=callback.apply(funcThis,args);}catch(error){defaultDetails.log&&(callback=callback,console.log(`%c ${callback!=null&&callback.name?callback==null?void 0:callback.name:callback+"出现错误"} `,"color: #f20000"),console.log(`%c 错误原因：${error}`,"color: #f20000"),console.trace(callback)),handleErrorFunc&&(typeof handleErrorFunc=="string"?result=(function(){return eval(handleErrorFunc)}).apply(funcThis,[...args,error]):result=handleErrorFunc.apply(funcThis,[...args,error]));}return result}return TryCatchCore};class UtilsDictionary{constructor(w,A){Z(this,"items",{});w!=null&&this.set(w,A);}has(w){return Reflect.has(this.items,w)}startsWith(w){let A=this.keys();for(const C of A)if(String(C).startsWith(String(w)))return !0;return !1}getStartsWith(w){let A=this.keys(),C;for(const T of A)if(String(T).startsWith(String(w))){C=this.get(T);break}return C}set(w,A){if(w===void 0)throw new Error("Utils.Dictionary().set 参数 key 不能为空");Reflect.set(this.items,w,A);}delete(w){return this.has(w)?Reflect.deleteProperty(this.items,w):!1}get(w){return Reflect.get(this.items,w)}values(){let w=[];for(let A in this.getItems())this.has(A)&&w.push(this.get(A));return w}clear(){this.items=null,this.items={};}size(){return Object.keys(this.getItems()).length}keys(){return Reflect.ownKeys(this.items)}getItems(){return this.items}concat(w){this.items=utils$1.assign(this.items,w.getItems());}forEach(w){for(const A in this.getItems())w(this.get(A),A,this.getItems());}get length(){return this.size()}get entries(){let w=this;return function*(){let A=Object.keys(w.getItems());for(const C of A)yield [C,w.get(C)];}}get[Symbol.iterator](){let w=this;return function(){return w.entries()}}}class WindowApi{constructor(w){Z(this,"defaultApi",{document,window,globalThis,self,top});Z(this,"api");w&&(w.globalThis==null&&(w.globalThis=w.window),w.self==null&&(w.self=w.window)),w||(w=Object.assign({},this.defaultApi)),this.api=Object.assign({},w);}get document(){return this.api.document}get window(){return this.api.window}get globalThis(){return this.api.globalThis}get self(){return this.api.self}get top(){return this.api.top}}const VueUtils={ReactiveFlags:{IS_REACTIVE:Symbol("isReactive")},isObject(S){return typeof S=="object"&&S!==null},isFunction(S){return typeof S=="function"},isReactive(S){return !!(S&&S[VueUtils.ReactiveFlags.IS_REACTIVE])},isArray(S){return Array.isArray(S)}};class ReactiveEffect{constructor(w,A){Z(this,"deps",[]);Z(this,"active",!0);Z(this,"fn");Z(this,"scheduler");this.fn=w,this.scheduler=A;}run(w){this.active||this.fn();try{return typeof w=="function"&&w(this),this.fn()}finally{typeof w=="function"&&w(void 0);}}}class RefImpl{constructor(w,A){Z(this,"_value");Z(this,"_isRef",!0);Z(this,"_rawValue");Z(this,"_vue");this._vue=w,this._rawValue=A,this._value=this._vue.toReactive(A);}get value(){return this._value}set value(w){w!==this._rawValue&&(this._value=this._vue.toReactive(w),this._rawValue=w);}}class ObjectRefImpl{constructor(w,A){Z(this,"object");Z(this,"key");this.object=w,this.key=A;}get value(){return this.object[this.key]}set value(w){this.object[this.key]=w;}}class Vue{constructor(){Z(this,"reactMap",new WeakMap);Z(this,"targetMap",new WeakMap);Z(this,"activeEffect");}reactive(w){const A=this;if(!(typeof w=="object"&&w!==null))return;if(VueUtils.isReactive(w))return w;let C=this.reactMap.get(w);if(C)return C;const T=new Proxy(w,{get(E,k,U){return k===VueUtils.ReactiveFlags.IS_REACTIVE?!0:(A.track(E,"get",k),Reflect.get(E,k,U))},set(E,k,U,L){let _=E[k],I=Reflect.set(E,k,U,L);return _!==U&&A.trigger(E,"set",k,_,U),I}});return A.reactMap.set(w,T),T}watch(w,A){let C;if(VueUtils.isReactive(w))C=()=>this.traversal(w);else if(VueUtils.isFunction(w))C=w;else return;let T;const E=()=>{const U=k.run(L=>{this.activeEffect=L;});A(U,T),T=U;},k=new ReactiveEffect(C,E);T=k.run(U=>{this.activeEffect=U;});}toReactive(w){return VueUtils.isObject(w)?this.reactive(w):w}ref(w){return new RefImpl(this,w)}toRef(w,A){return new ObjectRefImpl(w,A)}toRefs(w){const A=VueUtils.isArray(w)?new Array(w.length):{};for(let C in w)A[C]=this.toRef(w,C);return A}trigger(w,A,C,T,E){const k=this.targetMap.get(w);if(!k)return;const U=k.get(C);this.triggerEffect(U,"effects");}triggerEffect(w,A){w&&w.forEach(C=>{C.scheduler?C.scheduler():C.run();});}track(w,A,C){if(!this.activeEffect)return;let T=this.targetMap.get(w);T||this.targetMap.set(w,T=new Map);let E=T.get(C);E||T.set(C,E=new Set),this.trackEffect(E);}trackEffect(w){this.activeEffect&&!w.has(this.activeEffect)&&(w.add(this.activeEffect),this.activeEffect.deps.push(w));}traversal(w,A=new Set){if(!VueUtils.isObject(w)||A.has(w))return w;A.add(w);for(let C in w)this.traversal(w[C],A);return w}}class Utils{constructor(w){Z(this,"windowApi");Z(this,"version","2024.12.3");Z(this,"ajaxHooker",AjaxHooker);Z(this,"ColorConversion",ColorConversion);Z(this,"Dictionary",UtilsDictionary);Z(this,"GBKEncoder",GBKEncoder);Z(this,"GM_Cookie",UtilsGMCookie);Z(this,"GM_Menu",GMMenu);Z(this,"Hooks",Hooks);Z(this,"Httpx",Httpx);Z(this,"indexedDB",indexedDB);Z(this,"LockFunction",LockFunction);Z(this,"Log",Log);Z(this,"Progress",Progress);Z(this,"tryCatch",TryCatch);Z(this,"generateUUID",GenerateUUID);Z(this,"Vue",Vue);this.windowApi=new WindowApi(w);}addStyle(w){if(typeof w!="string")throw new Error("Utils.addStyle 参数cssText 必须为String类型");let A=this.windowApi.document.createElement("style");return A.setAttribute("type","text/css"),A.innerHTML=w,this.windowApi.document.head?this.windowApi.document.head.appendChild(A):this.windowApi.document.body?this.windowApi.document.body.appendChild(A):this.windowApi.document.documentElement.childNodes.length===0?this.windowApi.document.documentElement.appendChild(A):this.windowApi.document.documentElement.insertBefore(A,this.windowApi.document.documentElement.childNodes[0]),A}assign(w={},A={},C=!1){let T=this;if(Array.isArray(A)&&!A.filter(k=>typeof k=="object").length)return A;if(A==null)return w;if(w==null&&(w={}),C)for(const E in A){let U=w[E],L=A[E];if(typeof L=="object"&&L!=null&&E in w&&!T.isDOM(L)){w[E]=T.assign(U,L,C);continue}w[E]=L;}else for(const E in w)if(E in A){let k=w[E],U=A[E];if(typeof U=="object"&&U!=null&&!T.isDOM(U)&&Object.keys(U).length){w[E]=T.assign(k,U,C);continue}w[E]=U;}return w}async asyncReplaceAll(w,A,C){let T=this;if(typeof w!="string")throw new TypeError("string必须是字符串");if(typeof C!="function")throw new TypeError("asyncFn必须是函数");let E;if(typeof A=="string")E=new RegExp(T.parseStringToRegExpString(A),"g");else if(A instanceof RegExp){if(!A.global)throw new TypeError("pattern必须是全局匹配");E=new RegExp(A);}else throw new TypeError("pattern必须是正则对象");let k=[],U,L=0;for(;(U=E.exec(w))!==null;){const _=C(U[0]),I=w.slice(L,U.index);L=U.index+U[0].length,k.push(_),k.push(I);}return k.push(w.slice(L)),k=await Promise.all(k),k.join("")}canvasClickByPosition(w,A=0,C=0,T=globalThis){if(!(w instanceof HTMLCanvasElement))throw new Error("Utils.canvasClickByPosition 参数canvasElement必须是canvas元素");A=parseInt(A.toString()),C=parseInt(C.toString());const E={cancelBubble:!0,cancelable:!0,clientX:A,clientY:C,view:T,detail:1};w.dispatchEvent(new MouseEvent("mousedown",E)),w.dispatchEvent(new MouseEvent("mouseup",E));}checkUserClickInNode(w){var P;let A=this;if(!A.isDOM(w))throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");let C=A.windowApi.window.event,T=A.windowApi.window.event,E=(P=C==null?void 0:C.composedPath())==null?void 0:P[0],k=(C==null?void 0:C.clientX)!=null?C.clientX:T.touches[0].clientX,U=(C==null?void 0:C.clientY)!=null?C.clientY:T.touches[0].clientY,{left:L,right:_,top:I,bottom:$}=w.getBoundingClientRect();return k>=L&&k<=_&&U>=I&&U<=$?!0:!!(E&&w.contains(E)||E==w)}cloneFormData(w,A){let C=new FormData;for(let[T,E]of w.entries()){let k=typeof A=="function"?A(T,E):!1;typeof k=="boolean"&&k||C.append(T,E);}return C}createOverload(){let w=new Map;function A(...C){let T=C.map(k=>typeof k).join(","),E=w.get(T);if(!E)throw new TypeError("没有找到对应的实现");return E.apply(this,C)}return A.addImpl=function(...C){let T=C.pop();if(typeof T!="function")throw new TypeError("最后一个参数必须是函数");let E=C.join(",");w.set(E,T);},A}deepClone(w){let A=this;if(w===void 0)return;if(w===null)return null;let C=w instanceof Array?[]:{};for(const[T,E]of Object.entries(w))C[T]=typeof E=="object"?A.deepClone(E):E;return C}debounce(w,A=0){let C=null;const T=this;return function(...E){clearTimeout(C),C=setTimeout(function(){w.apply(T,E);},A);}}deleteParentNode(w,A){let C=this;if(w==null)return;if(!C.isDOM(w))throw new Error("Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");if(typeof A!="string")throw new Error("Utils.deleteParentNode 参数 targetSelector 必须为 string 类型");let T=!1,E=w.closest(A);return E&&(E.remove(),T=!0),T}dispatchEvent(w,A,C){let T=[];typeof A=="string"&&(T=[A]),Array.isArray(A)&&(T=[...A]),T.forEach(E=>{let k=new Event(E);C&&Object.assign(k,C),w.dispatchEvent(k);});}downloadBase64(w,A,C=!1){if(typeof w!="string")throw new Error("Utils.downloadBase64 参数 base64Data 必须为 string 类型");if(typeof A!="string")throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");if(C){const T=this.windowApi.document.createElement("iframe");T.style.display="none",T.src=w,this.windowApi.document.body.appendChild(T),setTimeout(()=>{T.contentWindow.document.execCommand("SaveAs",!0,A),this.windowApi.document.body.removeChild(T);},100);}else {const T=this.windowApi.document.createElement("a");T.setAttribute("target","_blank"),T.download=A,T.href=w,T.click();}}findWebPageVisibleText(w="",A=!1){let C=null,T;if(this.windowApi.globalThis.find){let E=this.windowApi.self.find;if(T=E(w,A,!0,!0,!1),T&&this.windowApi.self.getSelection&&!this.windowApi.self.getSelection().anchorNode&&(T=E(w,A,!0,!0,!1)),!T)for(T=E(w,0,1);E(w,0,1););}else if(navigator.appName.indexOf("Microsoft")!=-1)C!=null&&(C=C,C.collapse(!1),T=C.findText(w),T&&C.select()),(C==null||T==0)&&(C=this.windowApi.self.document.body.createTextRange(),T=C.findText(w),T&&C.select());else if(navigator.appName=="Opera"){alert("Opera browsers not supported, sorry...");return}return !!T}*findElementsWithText(w,A,C){let T=this;if(w.outerHTML.includes(A))if(w.children.length===0)(typeof C=="function"?C(w):!1)||(yield w);else {let E=Array.from(w.childNodes).filter(k=>k.nodeType===Node.TEXT_NODE);for(let k of E)k.textContent.includes(A)&&(typeof C=="function"&&C(w)||(yield k));}for(let E=0;E<w.children.length;E++){let k=w.children[E];yield*T.findElementsWithText(k,A,C);}}findVisibleElement(w){let A=w;for(;A;){if(A.getBoundingClientRect().length)return A;A=A.parentElement;}return null}formatByteToSize(w,A=!0){if(w=parseInt(w.toString()),isNaN(w))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let C=0,T="KB",E={};E.B=1,E.KB=1024,E.MB=E.KB*E.KB,E.GB=E.MB*E.KB,E.TB=E.GB*E.KB,E.PB=E.TB*E.KB,E.EB=E.PB*E.KB,E.ZB=E.EB*E.KB,E.YB=E.ZB*E.KB,E.BB=E.YB*E.KB,E.NB=E.BB*E.KB,E.DB=E.NB*E.KB;for(let k in E)if(C=w/E[k],T=k,E.KB>=C)break;return C=C.toFixed(2),C=A?C+T.toString():parseFloat(C.toString()),C}getNodeListValue(...w){let A=[];for(let C of w){let T=C;if(typeof C=="function"&&(T=C()),T.length!==0){A=[...T];break}}return A}getNonNullValue(...w){let A=w[w.length-1],C=this;for(const T of w)if(C.isNotNull(T)){A=T;break}return A}formatTime(w=new Date,A="yyyy-MM-dd HH:mm:ss"){let C=w==null?new Date:new Date(w);function T(U){return U<10?"0"+U:U}function E(U){return U>12?U-12:U}let k={yyyy:C.getFullYear(),MM:T(C.getMonth()+1),dd:T(C.getDate()),HH:T(C.getHours()),hh:T(E(C.getHours())),mm:T(C.getMinutes()),ss:T(C.getSeconds())};return Object.keys(k).forEach(function(U){let L=new RegExp(U,"g");A=A.replace(L,k[U]);}),A}formatToTimeStamp(w){if(typeof w!="string")throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");if(w.length===8){let C=new Date;w=C.getFullYear()+"-"+(C.getMonth()+1)+"-"+C.getDate()+" "+w;}return w=w.substring(0,19),w=w.replace(/-/g,"/"),new Date(w).getTime()}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getArrayLastValue(w){return w[w.length-1]}getArrayRealValue(...w){let A=null;for(let C of w)if(typeof C=="function"&&(C=C()),C!=null){A=C;break}return A}getDaysDifference(w=Date.now(),A=Date.now(),C="天"){C=C.trim(),w.toString().length===10&&(w=w*1e3),A.toString().length===10&&(A=A*1e3);let T=w>A?A:w,E=w>A?w:A,k=1e3,U=60*k,L=60*U,_=24*L,I=30*_,$=12*I,P=new Date(E),H=new Date(T),V=1;C==="年"?V=$:C==="月"?V=I:C==="天"?V=_:C==="时"?V=L:C==="分"?V=U:C==="秒"&&(V=k);let D=Math.round(Math.abs((P-H)/V));if(C==="auto"){let N=E-T;if(D=Math.floor(N/(24*3600*1e3)),D>0)D=D+"天";else {let R=N%864e5,F=Math.floor(R/(3600*1e3));if(F>0)D=F+"小时";else {let W=R%36e5,X=Math.floor(W/(60*1e3));if(X>0)D=X+"分钟";else {let Q=W%6e4;D=Math.round(Q/1e3)+"秒";}}}}return D}getElementSelector(w){let A=this;if(!w||!w.parentElement)return;if(w.id)return "#"+w.id;let C=A.getElementSelector(w.parentElement);if(!C)return w.tagName.toLowerCase();if(w.parentElement.querySelectorAll(w.tagName).length>1){let T=Array.prototype.indexOf.call(w.parentElement.children,w)+1;C+=" > "+w.tagName.toLowerCase()+":nth-child("+T+")";}else C+=" > "+w.tagName.toLowerCase();return C}getMaxValue(...w){let A=[...w],C=[];if(A.length!==0)if(A.length>1){if(A.length===2&&typeof A[0]=="object"&&typeof A[1]=="function"){let T=A[0],E=A[1];Object.keys(T).forEach(k=>{C=[...C,E(k,T[k])];});}else A.forEach(T=>{isNaN(parseFloat(T))||(C=[...C,parseFloat(T)]);});return Math.max(...C)}else return A[0].forEach(T=>{isNaN(parseFloat(T))||(C=[...C,parseFloat(T)]);}),Math.max(...C)}getMaxZIndexNodeInfo(w=1,A=this.windowApi.document,C){w=Number.isNaN(w)?1:w;const T=this,E=2*Math.pow(10,9);let k=0,U=null;function L(I){return I.position!=="static"&&I.display!=="none"}function _(I){if(typeof C=="function"){let P=C(I);if(typeof P=="boolean"&&!P)return}const $=T.windowApi.window.getComputedStyle(I);if(L($)){let P=parseInt($.zIndex);isNaN(P)||P>k&&(k=P,U=I),I.shadowRoot!=null&&I instanceof ShadowRoot&&I.shadowRoot.querySelectorAll("*").forEach(H=>{_(H);});}}return A.querySelectorAll("*").forEach((I,$)=>{_(I);}),k+=w,k>=E&&(k=E),{node:U,zIndex:k}}getMaxZIndex(w=1,A=this.windowApi.document,C){return this.getMaxZIndexNodeInfo(w,A,C).zIndex}getMinValue(...w){let A=[...w],C=[];if(A.length!==0)if(A.length>1){if(A.length===2&&typeof A[0]=="object"&&typeof A[1]=="function"){let T=A[0],E=A[1];Object.keys(T).forEach(k=>{C=[...C,E(k,T[k])];});}else A.forEach(T=>{isNaN(parseFloat(T))||(C=[...C,parseFloat(T)]);});return Math.min(...C)}else return A[0].forEach(T=>{isNaN(parseFloat(T))||(C=[...C,parseFloat(T)]);}),Math.min(...C)}getRandomAndroidUA(){let w=this,A=["LDN-LX3","RNE-L03","ASUS_X00ID Build/NMF26F","WAS-LX3","PRA-LX3","MYA-L03","Moto G Play","Moto C Build/NRD90M.063","Redmi Note 4 Build/NRD90M","HUAWEI VNS-L21 Build/HUAWEIVNS-L21","VTR-L09","TRT-LX3","M2003J15SC Build/RP1A.200720.011; wv","MI 13 Build/OPR1.170623.027; wv"],C=w.getRandomValue(12,14),T=w.getRandomValue(A),E=w.getRandomValue(120,132),k=w.getRandomValue(0,0),U=w.getRandomValue(2272,6099),L=w.getRandomValue(1,218);return `Mozilla/5.0 (Linux; Android ${C}; ${T}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${E}.${k}.${U}.${L} Mobile Safari/537.36`}getRandomPCUA(){let w=this,A=w.getRandomValue(120,132),C=w.getRandomValue(0,0),T=w.getRandomValue(2272,6099),E=w.getRandomValue(1,218);return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${A}.${C}.${T}.${E} Safari/537.36`}getRandomValue(...w){let A=[...w];if(A.length>1)if(A.length===2&&typeof A[0]=="number"&&typeof A[1]=="number"){let C=A[0]>A[1]?A[1]:A[0],T=A[0]>A[1]?A[0]:A[1];return Math.round(Math.random()*(T-C))+C}else return A[Math.floor(Math.random()*A.length)];else if(A.length===1){let C=A[0];if(Array.isArray(C))return C[Math.floor(Math.random()*C.length)];if(typeof C=="object"&&Object.keys(C).length>0){let T=Object.keys(C)[Math.floor(Math.random()*Object.keys(C).length)];return C[T]}else return C}}getReactObj(w){let A={};return Object.keys(w).forEach(C=>{if(C.startsWith("__react")){let T=C.replace(/__(.+)\$.+/i,"$1");T in A||(A[T]=w[C]);}}),A}getSymbol(w,A){if(typeof w!="object")throw new TypeError("target不是一个对象");let C=Object.getOwnPropertySymbols(w);if(typeof A=="string"){let T=C.find(E=>E.toString()===A);if(T)return w[T]}else if(typeof A=="symbol"){let T=C.find(E=>E===A);if(T)return w[T]}else {let T={};return C.forEach(E=>{T[E]=w[E];}),T}}getTextLength(w){return new TextEncoder().encode(w).length}getTextStorageSize(w,A=!0){let C=this;return C.formatByteToSize(C.getTextLength(w),A)}getThunderUrl(w){if(w==null)throw new TypeError("url不能为空");if(typeof w!="string")throw new TypeError("url必须是string类型");if(w.trim()==="")throw new TypeError("url不能为空字符串或纯空格");return `thunder://${this.windowApi.globalThis.btoa("AA"+w+"ZZ")}`}isNativeFunc(w){return !!w.toString().match(/^function .*\(\) { \[native code\] }$/)}isNearBottom(...w){let A=50,C=()=>{let k=this.windowApi.window.pageYOffset||this.windowApi.document.documentElement.scrollTop,U=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight,L=this.windowApi.document.documentElement.scrollHeight-A;return k+U>=L},T=k=>{let U=k.scrollTop,L=k.clientHeight,_=k.scrollHeight-L-A;return U>=_},E=w[0];if(w.length===0||typeof w[0]=="number")return C();if(typeof w[0]=="object"&&w[0]instanceof HTMLElement)return typeof w[1]=="number"&&!Number.isNaN(w[1])&&(A=w[1]),T(w[0]);throw new TypeError("参数1类型错误"+typeof E)}isDOM(w){return w instanceof Node}isFullscreenEnabled(){return !!(this.windowApi.document.fullscreenEnabled||this.windowApi.document.webkitFullScreenEnabled||this.windowApi.document.mozFullScreenEnabled||this.windowApi.document.msFullScreenEnabled)}isJQuery(w){let A=!1;if(typeof jQuery=="object"&&w instanceof jQuery&&(A=!0),w==null)return !1;if(typeof w=="object"){let C=["add","addBack","addClass","after","ajaxComplete","ajaxError","ajaxSend","ajaxStart","ajaxStop","ajaxSuccess","animate","append","appendTo","attr","before","bind","blur","change","children","clearQueue","click","clone","closest","constructor","contents","contextmenu","css","data","dblclick","delay","delegate","dequeue","each","empty","end","eq","extend","fadeIn","fadeOut","fadeTo","fadeToggle","filter","find","first","focus","focusin","focusout","get","has","hasClass","height","hide","hover","html","index","init","innerHeight","innerWidth","insertAfter","insertBefore","is","jquery","keydown","keypress","keyup","last","load","map","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","next","nextAll","not","off","offset","offsetParent","on","one","outerHeight","outerWidth","parent","parents","position","prepend","prependTo","prev","prevAll","prevUntil","promise","prop","pushStack","queue","ready","remove","removeAttr","removeClass","removeData","removeProp","replaceAll","replaceWith","resize","scroll","scrollLeft","scrollTop","select","show","siblings","slice","slideDown","slideToggle","slideUp","sort","splice","text","toArray","toggle","toggleClass","trigger","triggerHandler","unbind","width","wrap"];for(const T of C)if(T in w)A=!0;else {A=!1;break}}return A}isPhone(w=navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android|Mobile)/i.test(w)}isSameChars(w,A=1){if(typeof w!="string")throw new TypeError("参数 str 必须是 string 类型");if(w.length<2)return !1;w=w.toLowerCase();const C={};let T=0;for(const k of w)Reflect.has(C,k)?C[k]++:C[k]=1,T++;let E=!1;for(const k in C)if(C[k]/T>=A){E=!0;break}return E}isNotNull(...w){return !this.isNull.apply(this,w)}isNull(...w){let A=!0,C=[...w];for(const T of C){let E=!1;if(T==null)E=!0;else switch(typeof T){case"object":typeof T[Symbol.iterator]=="function"?E=T.length===0:E=Object.keys(T).length===0;break;case"number":E=T===0;break;case"string":E=T.trim()===""||T==="null"||T==="undefined";break;case"boolean":E=!T;break;case"function":E=!!T.toString().replace(/\s/g,"").match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/);break}A=A&&E;}return A}isThemeDark(){return this.windowApi.globalThis.matchMedia("(prefers-color-scheme: dark)").matches}isVisible(w,A=!1){let C=[];w instanceof Array||w instanceof NodeList?(w=w,C=[...w]):C=[w];let T=!0;for(const E of C){if(this.windowApi.window.getComputedStyle(E).display==="none")T=!1;else {let U=E.getBoundingClientRect();if(A){let L=this.windowApi.window.innerWidth||this.windowApi.document.documentElement.clientWidth,_=this.windowApi.window.innerHeight||this.windowApi.document.documentElement.clientHeight;T=!(U.right<0||U.left>L||U.bottom<0||U.top>_);}else T=!!E.getClientRects().length;}if(!T)break}return T}isWebView_Via(){let w=!0,A=this;if(typeof this.windowApi.top.window.via=="object"){for(const C in Object.values(this.windowApi.top.window.via))if(Reflect.has(this.windowApi.top.window.via,C)){let T=this.windowApi.top.window.via[C];if(typeof T=="function"&&A.isNativeFunc(T))w=!0;else {w=!1;break}}}else w=!1;return w}isWebView_X(){let w=!0,A=this;if(typeof this.windowApi.top.window.mbrowser=="object"){for(const C in Object.values(this.windowApi.top.window.mbrowser))if(Reflect.has(this.windowApi.top.window.mbrowser,C)){let T=this.windowApi.top.window.mbrowser[C];if(typeof T=="function"&&A.isNativeFunc(T))w=!0;else {w=!1;break}}}else w=!1;return w}parseObjectToArray(w){if(typeof w!="object")throw new Error("Utils.parseObjectToArray 参数 target 必须为 object 类型");let A=[];return Object.keys(w).forEach(function(C){A=A.concat(w[C]);}),A}mergeArrayToString(w,A){if(!(w instanceof Array))throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");let C="";return typeof A=="function"?w.forEach(T=>{C+=A(T);}):typeof A=="string"?w.forEach(T=>{C+=T[A];}):w.forEach(T=>{Object.values(T).filter(E=>typeof E=="string").forEach(E=>{C+=E;});}),C}mutationObserver(w,A){let C=this,T={callback:()=>{},config:{subtree:void 0,childList:void 0,attributes:void 0,attributeFilter:void 0,attributeOldValue:void 0,characterData:void 0,characterDataOldValue:void 0},immediate:!1};A=C.assign(T,A);let E=this.windowApi.window.MutationObserver||this.windowApi.window.webkitMutationObserver||this.windowApi.window.MozMutationObserver,k=new E(function(U,L){typeof A.callback=="function"&&A.callback(U,L);});return Array.isArray(w)||w instanceof NodeList?w.forEach(U=>{k.observe(U,A.config);}):C.isJQuery(w)?w.each((U,L)=>{k.observe(L,A.config);}):k.observe(w,A.config),A.immediate&&typeof A.callback=="function"&&A.callback([],k),k}mutationVisible(w,A,C){if(typeof IntersectionObserver>"u")throw new TypeError("IntersectionObserver is not defined");if(w==null)throw new TypeError("mutatuinVisible target is null");let T={root:null,rootMargin:"0px 0px 0px 0px",threshold:[.01,.99]};T=this.assign(T,C||{});let E=new IntersectionObserver((k,U)=>{k[0].isIntersecting&&typeof A=="function"&&A(k,U);},T);Array.isArray(w)?w.forEach(k=>{E.observe(k);}):E.observe(w);}noConflict(){return this.windowApi.window.Utils&&Reflect.deleteProperty(this.windowApi.window,"Utils"),this.windowApi.window.Utils=utils$1,utils$1}noConflictFunc(w,A,C=[],T=!0){let E=this;if(typeof w!="object")throw new Error("Utils.noConflictFunc 参数 needReleaseObject 必须为 object 类型");if(typeof A!="string")throw new Error("Utils.noConflictFunc 参数 needReleaseName 必须为 string 类型");if(!Array.isArray(C))throw new Error("Utils.noConflictFunc 参数 functionNameList 必须为 Array 类型");let k="__"+A;function U(){typeof E.windowApi.window[k]<"u"||(E.windowApi.window[k]=E.deepClone(w),Object.values(w).forEach($=>{typeof $=="function"&&(w[$.name]=()=>{});}));}function L(){Array.from(C).forEach($=>{Object.values(w).forEach(P=>{typeof P=="function"&&(typeof E.windowApi.window[k]>"u"&&(E.windowApi.window[k]={}),$===P.name&&(E.windowApi.window[k][P.name]=w[P.name],w[P.name]=()=>{}));});});}function _(){typeof E.windowApi.window[k]>"u"||(Object.assign(w,E.windowApi.window[k]),Reflect.deleteProperty(E.windowApi.window,"needReleaseKey"));}function I(){typeof E.windowApi.window[k]>"u"||Array.from(C).forEach($=>{E.windowApi.window[k][$]&&(w[$]=E.windowApi.window[k][$],Reflect.deleteProperty(E.windowApi.window[k],$),Object.keys(E.windowApi.window[k]).length===0&&Reflect.deleteProperty(window,k));});}T?C.length===0?U():L():C.length===0?_():I();}parseBase64ToBlob(w){if(typeof w!="string")throw new Error("Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型");let A=w.split(","),C=A[0].match(/:(.*?);/)[1],T=atob(A[1]),E=T.length,k=new Uint8Array(E);for(;E--;)k[E]=T.charCodeAt(E);return new Blob([k],{type:C})}parseBase64ToFile(w,A="example"){if(typeof w!="string")throw new Error("Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型");if(typeof A!="string")throw new Error("Utils.parseBase64ToFile 参数 fileName 必须为 string 类型");let C=w.split(","),T=C[0].match(/:(.*?);/)[1],E=atob(C[1]),k=E.length,U=new Uint8Array(k);for(;k--;)U[k]=E.charCodeAt(k);return new File([U],A,{type:T})}parseInt(w=[],A=0){if(w==null)return parseInt(A.toString());let C=parseInt(w[w.length-1]);return isNaN(C)&&(C=parseInt(A.toString())),C}async parseBlobToFile(w,A="example"){return new Promise((C,T)=>{fetch(w).then(E=>E.blob()).then(E=>{const k=new File([E],A,{type:E.type});C(k);}).catch(E=>{console.error("Error:",E),T(E);});})}parseCDATA(w=""){let A="",T=/<\!\[CDATA\[([\s\S]*)\]\]>/.exec(w.trim());return T&&T.length>1&&(A=T[T.length-1]),A}async parseFileToBase64(w){let A=new FileReader;return A.readAsDataURL(w),new Promise(C=>{A.onload=function(T){C(T.target.result);};})}parseFromString(w,A="text/html"){return new DOMParser().parseFromString(w,A)}parseStringToRegExpString(w){if(typeof w!="string")throw new TypeError("string必须是字符串");return w.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}preventEvent(w,A=[],C){function T(E){return E==null||E.preventDefault(),E==null||E.stopPropagation(),E==null||E.stopImmediatePropagation(),!1}if(arguments.length===1)return T(arguments[0]);typeof A=="string"&&(A=[A]),A.forEach(E=>{w.addEventListener(E,T,{capture:!!C});});}registerTrustClickEvent(w=!0,A){function C(E){return new Proxy(E,{get:function(k,U){return U==="isTrusted"?w:Reflect.get(k,U)}})}A==null&&(A=function(E){return E==="click"});const T=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(...E){let k=E[0],U=E[1];if(E[2],A(k)){if(typeof U=="function")E[1]=function(L){U.call(this,C(L));};else if(typeof U=="object"&&"handleEvent"in U){let L=U.handleEvent;E[1].handleEvent=function(_){if(_!=null)try{_ instanceof Proxy,L.call(this,C(_));}catch{_.isTrusted=w;}};}}return T.apply(this,E)};}reverseNumber(w){let A=0,C=!1;for(w<0&&(C=!0,w=Math.abs(w));w>0;)A=A*10+w%10,w=Math.floor(w/10);return C?-A:A}selectElementText(w,A,C,T){let E=this.windowApi.document.createRange();if(E.selectNodeContents(w),A){if(A.nodeType!==Node.TEXT_NODE)throw new TypeError("childTextNode必须是#text元素");C!=null&&T!=null&&(E.setStart(A,C),E.setEnd(A,T));}let k=this.windowApi.globalThis.getSelection();k&&(k.removeAllRanges(),k.addRange(E));}setClip(w,A={type:"text",mimetype:"text/plain"}){var k,U,L;typeof w=="object"?w instanceof Element?w=w.outerHTML:w=JSON.stringify(w):typeof w!="string"&&(w=w.toString());let C=typeof A=="object"?A.type:A;C.includes("html")?C="text/html":C="text/plain";let T=this;class E{constructor(I,$,P){ut(this,k);ut(this,U);ut(this,L);ft(this,k,I),ft(this,U,$),ft(this,L,P);}async init(){let I=!1;if(await this.requestClipboardPermission(),this.hasClipboard()&&(this.hasClipboardWrite()||this.hasClipboardWriteText()))try{I=await this.copyDataByClipboard();}catch($){console.error("复制失败，使用第二种方式，error👉",$),I=this.copyTextByTextArea();}else I=this.copyTextByTextArea();B(this,k).call(this,I),this.destroy();}destroy(){ft(this,k,null),ft(this,U,null),ft(this,L,null);}isText(){return B(this,L).includes("text")}hasClipboard(){return (navigator==null?void 0:navigator.clipboard)!=null}hasClipboardWrite(){var I;return ((I=navigator==null?void 0:navigator.clipboard)==null?void 0:I.write)!=null}hasClipboardWriteText(){var I;return ((I=navigator==null?void 0:navigator.clipboard)==null?void 0:I.writeText)!=null}copyTextByTextArea(){try{let I=T.windowApi.document.createElement("textarea");return I.value=B(this,U),I.setAttribute("type","text"),I.setAttribute("style","opacity:0;position:absolute;"),I.setAttribute("readonly","readonly"),T.windowApi.document.body.appendChild(I),I.select(),T.windowApi.document.execCommand("copy"),T.windowApi.document.body.removeChild(I),!0}catch(I){return console.error("复制失败，error👉",I),!1}}requestClipboardPermission(){return new Promise((I,$)=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"clipboard-write"}).then(P=>{I(!0);}).catch(P=>{console.error(["申请剪贴板权限失败，尝试直接写入👉",P.message??P.name??P.stack]),I(!1);}):I(!1);})}copyDataByClipboard(){return new Promise((I,$)=>{if(this.isText())navigator.clipboard.writeText(B(this,U)).then(()=>{I(!0);}).catch(P=>{$(P);});else {let P=new Blob([B(this,U)],{type:B(this,L)});navigator.clipboard.write([new ClipboardItem({[B(this,L)]:P})]).then(()=>{I(!0);}).catch(H=>{$(H);});}})}}return k=new WeakMap,U=new WeakMap,L=new WeakMap,new Promise(_=>{const I=new E(_,w,C);T.windowApi.document.hasFocus()?I.init():T.windowApi.window.addEventListener("focus",()=>{I.init();},{once:!0});})}setTimeout(w,A=0){let C=this;if(typeof w!="function"&&typeof w!="string")throw new TypeError("Utils.setTimeout 参数 callback 必须为 function|string 类型");if(typeof A!="number")throw new TypeError("Utils.setTimeout 参数 delayTime 必须为 number 类型");return new Promise(T=>{setTimeout(()=>{T(C.tryCatch().run(w));},A);})}sleep(w=0){if(typeof w!="number")throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");return new Promise(A=>{setTimeout(()=>{A(void 0);},w);})}dragSlider(w,A=this.windowApi.window.innerWidth){let C=this;function T($,P,H){let V=typeof unsafeWindow>"u"?globalThis:unsafeWindow,D=C.windowApi.document.createEvent("MouseEvents");return D.initMouseEvent($,!0,!0,V,0,P,H,P,H,!1,!1,!1,!1,0,null),D}let E=typeof w=="string"?this.windowApi.document.querySelector(w):w;if(!(E instanceof Node)||!(E instanceof Element))throw new Error("Utils.dragSlider 参数selector 必须为Node/Element类型");let k=E.getBoundingClientRect(),U=k.x||k.left,L=k.y||k.top,_=U+A,I=L;E.dispatchEvent(T("mousedown",U,L)),E.dispatchEvent(T("mousemove",_,I)),E.dispatchEvent(T("mouseleave",_,I)),E.dispatchEvent(T("mouseout",_,I));}enterFullScreen(w=this.windowApi.document.documentElement,A){try{if(w.requestFullscreen)w.requestFullscreen(A);else if(w.webkitRequestFullScreen)w.webkitRequestFullScreen();else if(w.mozRequestFullScreen)w.mozRequestFullScreen();else if(w.msRequestFullscreen)w.msRequestFullscreen();else throw new TypeError("该浏览器不支持全屏API")}catch(C){console.error(C);}}exitFullScreen(w=this.windowApi.document.documentElement){return this.windowApi.document.exitFullscreen?this.windowApi.document.exitFullscreen():this.windowApi.document.msExitFullscreen?this.windowApi.document.msExitFullscreen():this.windowApi.document.mozCancelFullScreen?this.windowApi.document.mozCancelFullScreen():this.windowApi.document.webkitCancelFullScreen?this.windowApi.document.webkitCancelFullScreen():new Promise((A,C)=>{C(new TypeError("该浏览器不支持全屏API"));})}sortListByProperty(w,A,C=!0){let T=this;if(typeof A!="function"&&typeof A!="string")throw new Error("Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型");if(typeof C!="boolean")throw new Error("Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型");let E=function(I){return typeof A=="string"?I[A]:A(I)},k=function(I,$){let P=E($),H=E(I);return C?H>P?-1:H<P?1:0:H<P?-1:H>P?1:0},U=function(I,$){let P=I.length;for(let H=0;H<P-1;H++)for(let V=0;V<P-1-H;V++){let D=I[V],N=I[V+1],R=E(D),F=E(N);if(C==!0&&R<F||C==!1&&R>F){let W=D.nextElementSibling;N.after(D),W==null?W.parentNode.appendChild(N):W.before(N),I=$();}}},L=w,_=null;if(w instanceof Function&&(_=w,w=w()),Array.isArray(w))w.sort(k);else if(w instanceof NodeList||T.isJQuery(w))U(w,_),L=_();else throw new Error("Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型");return L}stringToRegular(w,A="ig"){let C;if(A=A.toLowerCase(),typeof w=="string")C=new RegExp(w.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),A);else if(w instanceof RegExp)C=w;else throw new Error("Utils.stringToRegular 参数targetString必须是string|Regexp类型");return C}stringTitleToUpperCase(w,A=!1){let C=w.slice(0,1).toUpperCase();return A?C=C+w.slice(1).toLowerCase():C=C+w.slice(1),C}startsWith(w,A,C=0){let T=this;if(C>w.length)return !1;C!==0&&(w=w.slice(C,w.length));let E=A;if(typeof A=="string")E=new RegExp(`^${A}`);else if(Array.isArray(A)){let k=!1;for(const U of A)if(!T.startsWith(w,U,C)){k=!0;break}return k}return !!w.match(E)}stringTitleToLowerCase(w,A=!1){let C=w.slice(0,1).toLowerCase();return A?C=C+w.slice(1).toUpperCase():C=C+w.slice(1),C}toJSON(w,A){let C=this,T={};return typeof w=="object"?w:(C.tryCatch().config({log:!1}).error(E=>{C.tryCatch().error(()=>{try{T=C.windowApi.window.eval("("+w+")");}catch(k){typeof A=="function"&&A(k);}}).run(()=>{w&&/^[\],:{}\s]*$/.test(w.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?T=new Function("return "+w)():typeof A=="function"&&A(new Error("target is not a JSON"));});}).run(()=>{w=w.trim(),T=JSON.parse(w);}),T)}toSearchParamsStr(w,A){let C=this,T="";return Array.isArray(w)?w.forEach(E=>{T===""?T+=C.toSearchParamsStr(E):T+="&"+C.toSearchParamsStr(E);}):T=new URLSearchParams(Object.entries(w)).toString(),A&&!T.startsWith("?")&&(T="?"+T),T}searchParamStrToObj(w){return typeof w!="string"?{}:Object.fromEntries(new URLSearchParams(w))}uniqueArray(w=[],A,C=(T,E)=>T===E){if(typeof A=="function"){const T=A,E=new Set,k=[];for(const U of w){const L=T(U);E.has(L)||(E.add(L),k.push(U));}return k}else return Array.from(w).filter(T=>!Array.from(A).some(function(E){return C(T,E)}))}waitArrayLoopToEnd(w,A){let C=this;if(typeof A!="function"&&typeof A!="string")throw new Error("Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型");return Promise.all(Array.from(w).map(async(T,E)=>{await C.tryCatch(E,T).run(A);}))}waitNode(...w){w=w.filter(k=>k!==void 0);let A=this,C=w[0],T=A.windowApi.document,E=0;if(typeof w[0]!="string"&&!Array.isArray(w[0]))throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]");if(w.length!==1)if(w.length===2){let k=w[1];if(typeof k=="number")E=k;else if(typeof k=="object"&&k instanceof Node)T=k;else throw new TypeError("Utils.waitNode 第二个参数必须是number|Node")}else if(w.length===3){let k=w[1],U=w[2];if(typeof k=="object"&&k instanceof Node)if(T=k,typeof U=="number")E=U;else throw new TypeError("Utils.waitNode 第三个参数必须是number");else throw new TypeError("Utils.waitNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitNode 参数个数错误");return new Promise(k=>{function U(){if(Array.isArray(C)){let _=[];for(let I=0;I<C.length;I++){let $=T.querySelector(C[I]);$&&_.push($);}if(_.length===C.length)return _}else return T.querySelector(C)}var L=A.mutationObserver(T,{config:{subtree:!0,childList:!0,attributes:!0},callback(){let _=U();if(_){typeof(L==null?void 0:L.disconnect)=="function"&&L.disconnect(),k(_);return}},immediate:!0});E>0&&setTimeout(()=>{typeof(L==null?void 0:L.disconnect)=="function"&&L.disconnect(),k(null);},E);})}waitAnyNode(...w){w=w.filter(U=>U!==void 0);let A=this,C=w[0],T=A.windowApi.document,E=0;if(typeof w[0]!="object"&&!Array.isArray(w[0]))throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");if(w.length!==1)if(w.length===2){let U=w[1];if(typeof U=="number")E=U;else if(typeof U=="object"&&U instanceof Node)T=U;else throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node")}else if(w.length===3){let U=w[1],L=w[2];if(typeof U=="object"&&U instanceof Node)if(T=U,typeof L=="number")E=L;else throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNode 参数个数错误");let k=C.map(U=>A.waitNode(U,T,E));return Promise.any(k)}waitNodeList(...w){w=w.filter(k=>k!==void 0);let A=this,C=w[0],T=A.windowApi.document,E=0;if(typeof w[0]!="string"&&!Array.isArray(w[0]))throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");if(w.length!==1)if(w.length===2){let k=w[1];if(typeof k=="number")E=k;else if(typeof k=="object"&&k instanceof Node)T=k;else throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node")}else if(w.length===3){let k=w[1],U=w[2];if(typeof k=="object"&&k instanceof Node)if(T=k,typeof U=="number")E=U;else throw new TypeError("Utils.waitNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitNodeList 参数个数错误");return new Promise(k=>{function U(){if(Array.isArray(C)){let _=[];for(let I=0;I<C.length;I++){let $=T.querySelectorAll(C[I]);$.length&&_.push($);}if(_.length===C.length)return _}else {let _=T.querySelectorAll(C);if(_.length)return _}}var L=A.mutationObserver(T,{config:{subtree:!0,childList:!0,attributes:!0},callback(){let _=U();if(_){try{L.disconnect();}catch{}k(_);return}},immediate:!0});E>0&&setTimeout(()=>{typeof(L==null?void 0:L.disconnect)=="function"&&L.disconnect(),k(null);},E);})}waitAnyNodeList(...w){w=w.filter(U=>U!==void 0);let A=this,C=w[0],T=A.windowApi.document,E=0;if(!Array.isArray(w[0]))throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");if(w.length!==1)if(w.length===2){let U=w[1];if(typeof U=="number")E=U;else if(typeof U=="object"&&U instanceof Node)T=U;else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node")}else if(w.length===3){let U=w[1],L=w[2];if(typeof U=="object"&&U instanceof Node)if(T=U,typeof L=="number")E=L;else throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");else throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node")}else throw new TypeError("Utils.waitAnyNodeList 参数个数错误");let k=C.map(U=>A.waitNodeList(U,T,E));return Promise.any(k)}waitProperty(w,A){return new Promise(C=>{let T=w;typeof w=="function"&&(T=w()),Reflect.has(T,A)?C(T[A]):Object.defineProperty(T,A,{set:function(E){try{C(E);}catch(k){console.error("Error setting property:",k);}}});})}waitPropertyByInterval(w,A,C=250,T=-1){if(w==null)throw new TypeError("checkObj 不能为空对象 ");let E=!1;return new Promise((k,U)=>{let L=setInterval(()=>{let _=w;typeof w=="function"&&(_=w()),typeof _=="object"&&_!=null&&(typeof A=="function"&&A(_)||Reflect.has(_,A))&&(E=!0,clearInterval(L),k(_[A]));},C);T!==-1&&setTimeout(()=>{E||(clearInterval(L),U());},T);})}async waitVueByInterval(w,A,C=250,T=-1,E="__vue__"){if(w==null)throw new Error("Utils.waitVueByInterval 参数element 不能为空");let k=!1,U=this;try{await U.waitPropertyByInterval(w,function(L){if(L==null||!(E in L))return !1;if(A==null)return !0;let _=L[E];if(typeof A=="string"){if(A in _)return k=!0,!0}else if(A(_))return k=!0,!0;return !1},C,T);}catch{return k}return k}watchObject(w,A,C,T){typeof C!="function"&&typeof T!="function"||(typeof C=="function"?Object.defineProperty(w,A,{get(){return typeof C=="function"?C(w[A]):w[A]}}):typeof T=="function"?Object.defineProperty(w,A,{set(E){typeof T=="function"&&T(E);}}):Object.defineProperty(w,A,{get(){return typeof C=="function"?C(w[A]):w[A]},set(E){typeof T=="function"&&T(E);}}));}queryProperty(w,A){if(w==null)return;let C=A(w);return C&&typeof C.isFind=="boolean"&&C.isFind?C.data:this.queryProperty(C.data,A)}createUtils(w){return new Utils(w)}toFormData(w,A=!1,C=!1){const T=new FormData;return Object.keys(w).forEach(E=>{let k=w[E];C&&(k=JSON.stringify(k)),typeof k=="number"&&(k=k.toString()),A&&typeof k=="string"&&(k=encodeURIComponent(k)),k instanceof File?T.append(E,k,k.name):T.append(E,k);}),T}toUrl(w){if(typeof w!="string")throw new TypeError("toUrl: text must be string");if(w=w.trim(),w==="")throw new TypeError("toUrl: text must not be empty");return w.startsWith("//")?w=this.windowApi.globalThis.location.protocol+w:w.startsWith("/")&&(w=this.windowApi.globalThis.location.origin+w),new URL(w)}}let utils$1=new Utils;const SymbolEvents=Symbol("events_"+((1+Math.random())*65536|0).toString(16).substring(1)),PopsCoreDefaultEnv={document,window,globalThis,self},PopsCoreEnv={document,window,globalThis,self},PopsCore={init(S){S||(S=Object.assign({},PopsCoreDefaultEnv)),Object.assign(PopsCoreEnv,S);},get document(){return PopsCoreEnv.document},get window(){return PopsCoreEnv.window},get globalThis(){return PopsCoreEnv.globalThis},get self(){return PopsCoreEnv.self}},OriginPrototype={Object:{defineProperty:Object.defineProperty}};let t$1=class{constructor(){this.__map={};}beforeEach(w){this.__interceptor=w;}on(w,A){const C=Array.isArray(w)?w:[w];for(const T of C){this.__map[T]=this.__map[T]||[];const E=this.__map[T];E&&E.push(A);}return this}emit(w,A,C){this.__interceptor!==void 0?this.__interceptor(w,()=>{this.__emit(w,A),C&&C();}):(this.__emit(w,A),C&&C());}__emit(w,A){const C=this.__map[w];if(Array.isArray(C)&&(C!=null&&C.length))for(const T of C)T(A,w);this.event=A;}off(w,A){const C=this.__map[w];if(C!==void 0)if(A===void 0)delete this.__map[w];else {const T=C.findIndex(E=>E===A);C.splice(T,1);}}destroy(){this.__map={};}};const n$1="clientX",e$2="clientY",t=16,c$3="start",o$1="move",s$1="cancel",u$3="end",a$2="left",i$3="right",r$4="up",d$1="down",m$2={4:"start",5:"move",1:"end",3:"cancel"};function v$1(S){return m$2[S]}function b(S,w,A){const C={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(S)][w];return C!==void 0&&C[A]||0}function g$1(S){[1,3,2].includes(S.state)&&(S.state=0);}function h$3(S){return [5,1,3].includes(S)}function j(S){if(S.disabled)return S.state=0,!0}function O(S,w){return Object.assign(Object.assign(Object.assign({},S),w),{state:0,disabled:!1})}function p$3(S){return Math.round(100*S)/100}function r$3(){let S,w,A,C,T=0;return function(E){if(S=w,E!==void 0){T=Number.MAX_SAFE_INTEGER>T?++T:1;const k=function(_,I){const{phase:$,points:P,changedPoints:H,nativeEvent:V}=_,D=P.length,N=c$3===$,R=u$3===$&&D===0||s$1===$,F=Date.now(),{x:W,y:X}=c$2(P)||c$2(H),{currentTarget:Q}=V;return Object.assign(_,{id:I,x:W,y:X,timestamp:F,isStart:N,isEnd:R,pointLength:D,currentTarget:Q,getOffset(G=Q){const tt=G.getBoundingClientRect();return {x:W-Math.round(tt.left),y:X-Math.round(tt.top)}}})}(E,T);w=k;const{isStart:U,pointLength:L}=k;return U&&(A=k,S=void 0,C=1<L?k:void 0),Object.assign(Object.assign({},k),{prevInput:S,startMultiInput:C,startInput:A})}}}function c$2(S){const{length:w}=S;if(0<w){if(w===1){const{clientX:C,clientY:T}=S[0];return {x:Math.round(C),y:Math.round(T)}}const A=S.reduce((C,T)=>(C.x+=T[n$1],C.y+=T[e$2],C),{x:0,y:0});return {x:Math.round(A.x/w),y:Math.round(A.y/w)}}}function a$1(S,w,A,C){const T={};for(const k in A)["target","currentTarget","type"].includes(k)||(T[k]=A[k]);let E;return document.createEvent?(E=document.createEvent("HTMLEvents"),E.initEvent(S,C==null?void 0:C.bubbles,C==null?void 0:C.cancelable)):E=new Event(S,C),Object.assign(E,T,{match:()=>A.targets&&0<A.targets.length&&A.targets.every(k=>E.currentTarget.contains(k))}),w.dispatchEvent(E)}function u$2(S,w){const{preventDefault:A}=w;return C=A,Object.prototype.toString.call(C)==="[object Function]"?A(S):!!A;var C;}const h$2=["touchstart","touchmove","touchend","touchcancel","mousedown"],p$2=["mousemove","mouseup"],g={domEvents:{bubbles:!0,cancelable:!0},preventDefault:S=>{if(S.target&&"tagName"in S.target){const{tagName:w}=S.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(w)}return !1}};let l$1=class extends t$1{constructor(w,A){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=!1,this.el=w,this.c={},this.__options=Object.assign(Object.assign({},g),A);const C=function(E){const k=r$3();return function(U){const L=[],_=[];Array.from(U.touches).forEach(({clientX:$,clientY:P,target:H})=>{E!=null&&E.contains(H)&&(L.push(H),_.push({clientX:$,clientY:P,target:H}));});const I=Array.from(U.changedTouches).map(({clientX:$,clientY:P,target:H})=>({clientX:$,clientY:P,target:H}));return k({phase:U.type.replace("touch",""),changedPoints:I,points:_,nativeEvent:U,target:U.target,targets:L})}}(this.el),T=function(){let E,k=!1,U=null;const L=r$3();return function(_){const{clientX:I,clientY:$,type:P,button:H,target:V}=_;let D,N=[{clientX:I,clientY:$,target:V}];if(P==="mousedown"&&H===0)U=V,k=!0,D="start";else {if(!k)return;P==="mousemove"?D="move":P==="mouseup"&&(N=[],D="end",k=!1);}const R=E||[{clientX:I,clientY:$,target:V}];if(E=[{clientX:I,clientY:$,target:V}],D!==void 0)return L({phase:D,changedPoints:R,points:N,target:U,targets:[U],nativeEvent:_})}}();if(this.__inputCreatorMap={touchstart:C,touchmove:C,touchend:C,touchcancel:C,mousedown:T,mousemove:T,mouseup:T},this.on("at:after",E=>{const{target:k,__type:U}=E,{domEvents:L}=this.__options;L&&this.el!==void 0&&k&&(a$1(U,k,E,L),a$1("at:after",k,E,L));}),w!==void 0){w.style.webkitTapHighlightColor="rgba(0,0,0,0)";let E=!1;try{const k={};Object.defineProperty(k,"passive",{get(){E=!0;}}),window.addEventListener("_",()=>{},k);}catch{}this.on("u",function(k,U,L){return h$2.forEach(_=>{k.addEventListener(_,U,L);}),p$2.forEach(_=>{window.addEventListener(_,U,L);}),()=>{h$2.forEach(_=>{k.removeEventListener(_,U);}),p$2.forEach(_=>{window.removeEventListener(_,U);});}}(w,this.catchEvent.bind(this),this.__options.preventDefault===!1&&E?{passive:!0}:{passive:!1}));}}use(w,A){this.__pluginContexts.push(w(this,A));}catchEvent(w){const A=this.__inputCreatorMap[w.type](w);if(A!==void 0){const C=()=>w.stopPropagation(),T=()=>w.stopImmediatePropagation(),E=()=>w.preventDefault();if(u$2(w,this.__options))E();else if(w.type==="touchstart"?this.__isIgnoreMouse=!0:w.type==="touchmove"&&(this.__isIgnoreMouse=!1),this.__isIgnoreMouse&&w.type.startsWith("mouse"))return void(w.type==="mouseup"&&(this.__isIgnoreMouse=!1));this.emit("input",A),this.emit2(`at:${A.phase}`,A,{});const k={};this.__computeFunctionList.forEach(U=>{const L=U(A,k);if(L!==void 0)for(const _ in L)k[_]=L[_];}),this.emit("computed",Object.assign(Object.assign(Object.assign({},A),k),{stopPropagation:C,stopImmediatePropagation:T,preventDefault:E}));}}compute(w,A){for(const C of w)this.__computeFunctionCreatorList.includes(C)||(this.__computeFunctionCreatorList.push(C),this.__computeFunctionList.push(C()));this.on("computed",A);}beforeEach(w){super.beforeEach((A,C)=>{var T;!((T=this.c)===null||T===void 0)&&T.name?w(A,C):C();});}get(w){return this.__pluginContexts.find(A=>w===A.name)}set(w){this.__options=Object.assign(Object.assign({},this.__options),w);}emit2(w,A,C){this.c=C,this.emit(w,Object.assign(Object.assign({},A),{type:w}),()=>{this.emit("at:after",Object.assign(Object.assign({},A),{name:w,__type:w}));});}destroy(){this.emit("u"),super.destroy();}};var x=S=>Math.sqrt(S.x*S.x+S.y*S.y),y=(S,w)=>S.x*w.x+S.y*w.y,e$1=(S,w)=>{var A=x(S)*x(w);if(A===0)return 0;var C=y(S,w)/A;return C>1&&(C=1),Math.acos(C)},n=(S,w)=>S.x*w.y-w.x*S.y,o=S=>S/Math.PI*180,s=(S,w)=>{var A=e$1(S,w);return n(S,w)>0&&(A*=-1),o(A)},u$1=(S,w)=>{if(S!==0||w!==0)return Math.abs(S)>=Math.abs(w)?0<S?i$3:a$2:0<w?d$1:r$4};function p$1(){let S=0,w=0;return function(A,C){const{prevVecotr:T,startVecotr:E,activeVecotr:k}=C;return k&&(w=Math.round(s(k,T)),S=Math.round(s(k,E))),{angle:S,deltaAngle:w}}}function d(){return function(S){const{prevInput:w}=S;let A=0,C=0,T=0;if(w!==void 0&&(A=S.x-w.x,C=S.y-w.y,A!==0||C!==0)){const E=Math.sqrt(Math.pow(A,2)+Math.pow(C,2));T=Math.round(o(Math.acos(Math.abs(A)/E)));}return {deltaX:A,deltaY:C,deltaXYAngle:T}}}function h$1(){let S,w=0,A=0,C=0,T=0,E=0;return function(k){const{phase:U,startInput:L}=k;return c$3===U?(w=0,A=0,C=0,T=0,E=0):o$1===U&&(w=Math.round(k.points[0][n$1]-L.points[0][n$1]),A=Math.round(k.points[0][e$2]-L.points[0][e$2]),C=Math.abs(w),T=Math.abs(A),E=Math.round(x({x:C,y:T})),S=u$1(w,A)),{displacementX:w,displacementY:A,distanceX:C,distanceY:T,distance:E,overallDirection:S}}}function l(){let S=1;return function(w,A){let C=1;const{prevVecotr:T,startVecotr:E,activeVecotr:k}=A;return k&&(C=p$3(x(k)/x(T)),S=p$3(x(k)/x(E))),{scale:S,deltaScale:C}}}function f(){let S,w,A=0,C=0,T=0,E=0;return function(k){if(k!==void 0){w=w||k.startInput;const U=k.timestamp-w.timestamp;if(t<U){const L=k.x-w.x,_=k.y-w.y;T=Math.round(L/U*100)/100,E=Math.round(_/U*100)/100,A=Math.abs(T),C=Math.abs(E),S=u$1(L,_),w=k;}}return {velocityX:A,velocityY:C,speedX:T,speedY:E,direction:S}}}function M(){let S=0;return function(w){const{phase:A}=w;return c$3===A&&(S=w.pointLength),{maxPointLength:S}}}function v(S){return {x:S.points[1][n$1]-S.points[0][n$1],y:S.points[1][e$2]-S.points[0][e$2]}}function m$1(){let S,w,A;return function(C){const{prevInput:T,startMultiInput:E}=C;return E!==void 0&&T!==void 0&&C.id!==E.id&&1<T.pointLength&&1<C.pointLength?(S=v(E),w=v(T),A=v(C)):A=void 0,{startVecotr:S,prevVecotr:w,activeVecotr:A}}}const m={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function r$2(S,w){const A=O(m,w);let C,T,E,k=0;function U(){k=0,C=void 0,T=void 0;}return S.compute([h$1,M],L=>{if(j(A))return;const{phase:_,x:I,y:$}=L;u$3===_&&(A.state=0,function(){const{startInput:P,pointLength:H,timestamp:V}=L,D=V-P.timestamp,{distance:N,maxPointLength:R}=L;return R===A.pointLength&&H===0&&A.maxDistance>=N&&A.maxPressTime>D}()?(clearTimeout(E),function(P,H){if(C!==void 0){const V=x({x:P.x-C.x,y:P.y-C.y});return C=P,H.maxDistanceFromPrevTap>=V}return C=P,!0}({x:I,y:$},A)&&function(P){const H=performance.now();if(T===void 0)return T=H,!0;{const V=H-T;return T=H,V<P}}(A.waitNextTapTime)?k++:k=1,k%A.tapTimes==0?(A.state=1,S.emit2(A.name,L,A),U()):E=setTimeout(()=>{A.state=2,U();},A.waitNextTapTime)):(U(),A.state=2));}),A}const p={name:"pan",threshold:10,pointLength:1};function u(S,w){const A=O(p,w);return S.compute([f,h$1,d],C=>{if(g$1(A),j(A))return;const T=function(){const{pointLength:E,distance:k}=C;return A.pointLength===E&&A.threshold<=k}();if(A.state=b(T,A.state,C.phase),T||h$3(A.state)){const{name:E}=A;S.emit2(E,C,A),S.emit2(E+v$1(A.state),C,A),![u$3,s$1].includes(C.phase)&&C.direction&&S.emit2(E+C.direction,C,A);}}),A}const c$1={name:"swipe",threshold:10,velocity:.3,pointLength:1};function a(S,w){const A=O(c$1,w);return S.compute([h$1,f,M],C=>{if(A.state=0,!A.disabled&&function(){if(u$3!==C.phase)return !1;const{velocityX:T,velocityY:E,distance:k,maxPointLength:U}=C;return U===A.pointLength&&C.points.length===0&&A.threshold<k&&A.velocity<Math.max(T,E)}()){const{name:T}=A;A.state=1,S.emit2(T,C,A),S.emit2(T+C.direction,C,A);}}),A}const r$1={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function c(S,w){const A=O(r$1,w);let C=0;return S.compute([h$1],T=>{if(j(A))return;const{phase:E,startInput:k,pointLength:U}=T;if(c$3===E&&A.pointLength===U)g$1(A),clearTimeout(C),C=setTimeout(()=>{A.state=1,S.emit2(A.name,T,A);},A.minPressTime);else if(u$3===E&&A.state===1)S.emit2(`${A.name}${r$4}`,T,A);else if(A.state!==1){const L=T.timestamp-k.timestamp;(!function(){const{distance:_}=T;return _&&A.maxDistance>_}()||A.minPressTime>L&&[u$3,s$1].includes(E))&&(clearTimeout(C),A.state=2);}}),A}const i$2={name:"pinch",threshold:0,pointLength:2};function r(S,w){const A=O(i$2,w);return S.compute([m$1,l],C=>{if(g$1(A),j(A))return;const T=function(){const{pointLength:U,scale:L,deltaScale:_,phase:I}=C;return A.pointLength===U&&A.threshold<Math.abs(L-1)}();A.state=b(T,A.state,C.phase);const{name:E}=A;if(T||h$3(A.state)){S.emit2(E,C,A);const{deltaScale:U}=C;U!==1&&S.emit2(E+(1<U?"in":"out"),C,A);}const k=v$1(A.state);k&&S.emit2(E+k,C,A);}),A}const h={name:"rotate",threshold:0,pointLength:2};function i$1(S,w){const A=O(h,w);return S.compute([m$1,p$1],C=>{if(j(A))return;g$1(A);const T=function(){const{pointLength:U,angle:L}=C;return A.pointLength===U&&A.threshold<Math.abs(L)}();A.state=b(T,A.state,C.phase);const{name:E}=A;(T||h$3(A.state))&&S.emit2(E,C,A);const k=v$1(A.state);k&&S.emit2(E+k,C,A);}),A}function e(S){S.use(r$2,{name:"doubletap",tapTimes:2});const w=S.get("doubletap");let A;return S.beforeEach((C,T)=>{C==="tap"?(clearTimeout(A),A=setTimeout(()=>{[0,2].includes(w.state)&&T();},300)):T();}),w}class i extends l$1{constructor(w,A){super(w,A),this.use(r$2),this.use(u),this.use(a),this.use(c),this.use(r),this.use(i$1);}}i.STATE_POSSIBLE=0,i.STATE_START=4,i.STATE_MOVE=5,i.STATE_END=1,i.STATE_CANCELLED=3,i.STATE_FAILED=2,i.STATE_RECOGNIZED=1,i.tap=r$2,i.pan=u,i.swipe=a,i.press=c,i.rotate=i$1,i.pinch=r,i.doubletap=e;class PopsUtils{constructor(){Z(this,"AnyTouch",()=>i);}isWin(w){var A;return typeof w!="object"||w instanceof Node?!1:w===globalThis||w===window||w===self||w===PopsCore.globalThis||w===PopsCore.window||w===PopsCore.self||typeof unsafeWindow<"u"&&w===unsafeWindow?!0:((A=w==null?void 0:w.Math)==null?void 0:A.toString())==="[object Math]"}isDOM(w){return w instanceof Node}delete(w,A){typeof Reflect=="object"&&Reflect.deleteProperty?Reflect.deleteProperty(w,A):delete w[A];}assign(w={},A={},C=!1){let T=this;if(A==null)return w;if(w==null&&(w={}),Array.isArray(A)&&!A.filter(k=>typeof k=="object").length)return A;if(C)for(const E in A){let U=w[E],L=A[E];if(typeof L=="object"&&L!=null&&E in w&&!T.isDOM(L)){w[E]=T.assign(U,L,C);continue}w[E]=L;}else for(const E in w)if(E in A){let k=w[E],U=A[E];if(typeof U=="object"&&U!=null&&!T.isDOM(U)&&Object.keys(U).length){w[E]=T.assign(k,U,C);continue}w[E]=U;}return w}getRandomGUID(){var w,A;return typeof((A=(w=PopsCore.globalThis)==null?void 0:w.crypto)==null?void 0:A.randomUUID)=="function"?PopsCore.globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(C){var T=Math.random()*16|0,E=C==="x"?T:T&3|8;return E.toString(16)})}parseTextToDOM(w){return w=w.replace(/^[\n|\s]*/g,"").replace(/[\n|\s]*$/g,""),popsDOMUtils.createElement("div",{innerHTML:w}).firstChild}contains(w,A){if(arguments.length===1)return this.contains(PopsCore.document.body||PopsCore.document.documentElement,arguments[0]);if(A==null)return !1;if(typeof A[Symbol.iterator]=="function"){let C=!0;for(const T of A)if(!w.contains(T)){C=!1;break}return C}else return w.contains(A)}formatTime(w=new Date,A="yyyy-MM-dd HH:mm:ss"){let C=w==null?new Date:new Date(w);function T(U){return U<10?"0"+U:U}function E(U){return U>12?U-12:U}let k={yyyy:C.getFullYear(),MM:T(C.getMonth()+1),dd:T(C.getDate()),HH:T(C.getHours()),hh:T(E(C.getHours())),mm:T(C.getMinutes()),ss:T(C.getSeconds())};return Object.keys(k).forEach(function(U){let L=new RegExp(U,"g");A=A.replace(L,k[U]);}),A}formatByteToSize(w,A=!0){if(w=parseInt(w.toString()),isNaN(w))throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");let C=0,T="KB",E={};E.B=1,E.KB=1024,E.MB=E.KB*E.KB,E.GB=E.MB*E.KB,E.TB=E.GB*E.KB,E.PB=E.TB*E.KB,E.EB=E.PB*E.KB,E.ZB=E.EB*E.KB,E.YB=E.ZB*E.KB,E.BB=E.YB*E.KB,E.NB=E.BB*E.KB,E.DB=E.NB*E.KB;for(let k in E)if(C=w/E[k],T=k,E.KB>=C)break;return C=C.toFixed(2),C=A?C+T.toString():parseFloat(C.toString()),C}}const popsUtils=new PopsUtils;class PopsDOMUtilsEvent{on(w,A,C,T,E){function k(D,N,R){return typeof D[N]=="boolean"?(R.capture=D[N],typeof D[N+1]=="boolean"&&(R.once=D[N+1]),typeof D[N+2]=="boolean"&&(R.passive=D[N+2])):typeof D[N]=="object"&&("capture"in D[N]||"once"in D[N]||"passive"in D[N])&&(R.capture=D[N].capture,R.once=D[N].once,R.passive=D[N].passive),R}let U=this,L=arguments;if(typeof w=="string"&&(w=PopsCore.document.querySelectorAll(w)),w==null)return;let _=[];w instanceof NodeList||Array.isArray(w)?(w=w,_=[...w]):_.push(w);let I=[];Array.isArray(A)?I=I.concat(A):typeof A=="string"&&(I=I.concat(A.split(" ")));let $=C,P=T,H={capture:!1,once:!1,passive:!1};typeof C=="function"?($=void 0,P=C,H=k(L,3,H)):H=k(L,4,H);function V(){H.once&&U.off(w,A,C,T,E);}_.forEach(D=>{function N(R){let F=R.target;if($){let W=popsUtils.isWin(D)?PopsCore.document.documentElement:D;if(F.matches($))P.call(F,R),V();else if(F.closest($)&&W.contains(F.closest($))){let X=F.closest($);OriginPrototype.Object.defineProperty(R,"target",{get(){return X}}),P.call(X,R),V();}}else P.call(D,R),V();}I.forEach(R=>{D.addEventListener(R,N,H),P&&P.delegate&&D.setAttribute("data-delegate",$);let F=D[SymbolEvents]||{};F[R]=F[R]||[],F[R].push({selector:$,option:H,callback:N,originCallBack:P}),D[SymbolEvents]=F;});});}off(w,A,C,T,E,k){function U(V,D,N){return typeof V[D]=="boolean"?N.capture=V[D]:typeof V[D]=="object"&&"capture"in V[D]&&(N.capture=V[D].capture),N}let L=arguments;if(typeof w=="string"&&(w=PopsCore.document.querySelectorAll(w)),w==null)return;let _=[];w instanceof NodeList||Array.isArray(w)?(w=w,_=[...w]):_.push(w);let I=[];Array.isArray(A)?I=I.concat(A):typeof A=="string"&&(I=I.concat(A.split(" ")));let $=C,P=T,H={capture:!1};typeof C=="function"?($=void 0,P=C,H=U(L,3,H)):H=U(L,4,H),_.forEach(V=>{let D=V[SymbolEvents]||{};I.forEach(N=>{let R=D[N]||[];typeof k=="function"&&(R=R.filter(k));for(let F=0;F<R.length;F++){let W=R[F],X=!1;(!$||W.selector===$)&&(X=!0),(!P||W.callback===P||W.originCallBack===P)&&(X=!0),X&&(V.removeEventListener(N,W.callback,H),R.splice(F--,1));}R.length===0&&popsUtils.delete(D,A);}),V[SymbolEvents]=D;});}offAll(w,A){if(typeof w=="string"&&(w=PopsCore.document.querySelectorAll(w)),w==null)return;let C=[];w instanceof NodeList||Array.isArray(w)?C=[...w]:C.push(w);let T=[];Array.isArray(A)?T=T.concat(A):typeof A=="string"&&(T=T.concat(A.split(" "))),C.forEach(E=>{Object.getOwnPropertySymbols(E).forEach(k=>{if(!k.toString().startsWith("Symbol(events_"))return;let U=E[k]||{};(T.length?T:Object.keys(U)).forEach(_=>{let I=U[_];if(I){for(const $ of I)E.removeEventListener(_,$.callback,{capture:$.option.capture});popsUtils.delete(E[k],_);}});});});}ready(w){if(typeof w!="function")return;function A(){try{return document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll}catch{return !1}}function C(){k(),w();}let T=[{target:PopsCore.document,eventType:"DOMContentLoaded",callback:C},{target:PopsCore.window,eventType:"load",callback:C}];function E(){for(let U=0;U<T.length;U++){let L=T[U];L.target.addEventListener(L.eventType,L.callback);}}function k(){for(let U=0;U<T.length;U++){let L=T[U];L.target.removeEventListener(L.eventType,L.callback);}}A()?setTimeout(w):E();}trigger(w,A,C,T=!0){if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w==null)return;let E=[];w instanceof NodeList||Array.isArray(w)?(w=w,E=[...w]):E=[w];let k=[];Array.isArray(A)?k=A:typeof A=="string"&&(k=A.split(" ")),E.forEach(U=>{let L=U[SymbolEvents]||{};k.forEach(_=>{let I=null;C&&C instanceof Event?I=C:(I=new Event(_),C&&Object.keys(C).forEach($=>{I[$]=C[$];})),T==!1&&_ in L?L[_].forEach($=>{$.callback(I);}):U.dispatchEvent(I);});});}click(w,A,C,T){let E=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(A==null?E.trigger(w,"click",C,T):E.on(w,"click",null,A));}blur(w,A,C,T){let E=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(A===null?E.trigger(w,"blur",C,T):E.on(w,"blur",null,A));}focus(w,A,C,T){let E=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(A==null?E.trigger(w,"focus",C,T):E.on(w,"focus",null,A));}hover(w,A,C){let T=this;typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(T.on(w,"mouseenter",null,A,C),T.on(w,"mouseleave",null,A,C));}keyup(w,A,C){let T=this;w!=null&&(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),T.on(w,"keyup",null,A,C));}keydown(w,A,C){let T=this;w!=null&&(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),T.on(w,"keydown",null,A,C));}keypress(w,A,C){let T=this;w!=null&&(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),T.on(w,"keypress",null,A,C));}preventEvent(w,A=[],C){function T(E){return E==null||E.preventDefault(),E==null||E.stopPropagation(),E==null||E.stopImmediatePropagation(),!1}if(arguments.length===1)return T(arguments[0]);typeof A=="string"&&(A=[A]),A.forEach(E=>{w.addEventListener(E,T,{capture:!!C});});}}class PopsDOMUtils extends PopsDOMUtilsEvent{getAnimationEndNameList(){return ["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"]}getTransitionEndNameList(){return ["webkitTransitionEnd","mozTransitionEnd","MSTransitionEnd","otransitionend","transitionend"]}offset(w,A=!0){let C=w.getBoundingClientRect(),T=w.ownerDocument.defaultView;return new DOMRect(A?parseFloat((C.left+((T==null?void 0:T.pageXOffset)||0)).toString()):C.left,A?parseFloat((C.top+((T==null?void 0:T.pageYOffset)||0)).toString()):C.top,C.width,C.height)}width(w,A=!1,C){let T=this;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null){if(popsUtils.isWin(w))return PopsCore.window.document.documentElement.clientWidth;if(w.nodeType===9)return w=w,Math.max(w.body.scrollWidth,w.documentElement.scrollWidth,w.body.offsetWidth,w.documentElement.offsetWidth,w.documentElement.clientWidth);if(A||!A&&popsDOMUtils.isShow(w)){if(w=w,parseFloat(popsDOMUtils.getStyleValue(w,"width").toString())>0)return parseFloat(popsDOMUtils.getStyleValue(w,"width").toString());if(w.offsetWidth>0){let E=popsDOMUtils.getStyleValue(w,"borderLeftWidth"),k=popsDOMUtils.getStyleValue(w,"borderRightWidth"),U=popsDOMUtils.getStyleValue(w,"paddingLeft"),L=popsDOMUtils.getStyleValue(w,"paddingRight"),_=parseFloat(w.offsetWidth.toString())-parseFloat(E.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {w=w;let{cloneNode:E,recovery:k}=popsDOMUtils.showElement(w,C),U=T.width(E,!0,C);return k(),U}}}height(w,A=!1,C){let T=this;if(popsUtils.isWin(w))return PopsCore.window.document.documentElement.clientHeight;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null){if(w.nodeType===9)return w=w,Math.max(w.body.scrollHeight,w.documentElement.scrollHeight,w.body.offsetHeight,w.documentElement.offsetHeight,w.documentElement.clientHeight);if(A||!A&&popsDOMUtils.isShow(w)){if(w=w,parseFloat(popsDOMUtils.getStyleValue(w,"height").toString())>0)return parseFloat(popsDOMUtils.getStyleValue(w,"height").toString());if(w.offsetHeight>0){let E=popsDOMUtils.getStyleValue(w,"borderTopWidth"),k=popsDOMUtils.getStyleValue(w,"borderBottomWidth"),U=popsDOMUtils.getStyleValue(w,"paddingTop"),L=popsDOMUtils.getStyleValue(w,"paddingBottom"),_=parseFloat(w.offsetHeight.toString())-parseFloat(E.toString())-parseFloat(k.toString())-parseFloat(U.toString())-parseFloat(L.toString());return parseFloat(_.toString())}return 0}else {w=w;let{cloneNode:E,recovery:k}=popsDOMUtils.showElement(w,C),U=T.height(E,!0,C);return k(),U}}}outerWidth(w,A=!1,C){let T=this;if(popsUtils.isWin(w))return PopsCore.window.innerWidth;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null)if(w=w,A||!A&&popsDOMUtils.isShow(w)){let E=getComputedStyle(w,null),k=popsDOMUtils.getStyleValue(E,"marginLeft"),U=popsDOMUtils.getStyleValue(E,"marginRight");return w.offsetWidth+k+U}else {let{cloneNode:E,recovery:k}=popsDOMUtils.showElement(w,C),U=T.outerWidth(E,!0,C);return k(),U}}outerHeight(w,A=!1,C){let T=this;if(popsUtils.isWin(w))return PopsCore.window.innerHeight;if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null)if(w=w,A||!A&&popsDOMUtils.isShow(w)){let E=getComputedStyle(w,null),k=popsDOMUtils.getStyleValue(E,"marginTop"),U=popsDOMUtils.getStyleValue(E,"marginBottom");return w.offsetHeight+k+U}else {let{cloneNode:E,recovery:k}=popsDOMUtils.showElement(w,C),U=T.outerHeight(E,!0,C);return k(),U}}addClassName(w,A){typeof A=="string"&&A.trim()!==""&&w.classList.add(A);}removeClassName(w,A){typeof A=="string"&&A.trim()!==""&&w.classList.remove(A);}containsClassName(w,A){return typeof A!="string"||A.trim()===""?!1:w.classList.contains(A)}css(w,A,C){function T(E,k){let U=["width","height","top","left","right","bottom","font-size"];return typeof k=="number"&&(k=k.toString()),typeof k=="string"&&U.includes(E)&&k.match(/[0-9]$/gi)&&(k=k+"px"),k}if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null){if(typeof A=="string"){if(C==null)return getComputedStyle(w).getPropertyValue(A);C==="string"&&C.includes("!important")?w.style.setProperty(A,C,"important"):(C=T(A,C),w.style.setProperty(A,C));}else if(typeof A=="object")for(let E in A)typeof A[E]=="string"&&A[E].includes("!important")?w.style.setProperty(E,A[E],"important"):(A[E]=T(E,A[E]),w.style.setProperty(E,A[E]));}}createElement(w,A,C){let T=PopsCore.document.createElement(w);return typeof A=="string"?(T.innerHTML=A,T):(A==null&&(A={}),C==null&&(C={}),Object.keys(A).forEach(E=>{let k=A[E];T[E]=k;}),Object.keys(C).forEach(E=>{let k=C[E];typeof k=="object"?k=JSON.stringify(k):typeof k=="function"&&(k=k.toString()),T.setAttribute(E,k);}),T)}getTextBoundingRect(w,A,C,T){if(!w||!("value"in w))return w;if(typeof A=="string"&&(A=parseFloat(A)),(typeof A!="number"||isNaN(A))&&(A=0),A<0?A=0:A=Math.min(w.value.length,A),typeof C=="string"&&(C=parseFloat(C)),(typeof C!="number"||isNaN(C)||C<A)&&(C=A),C<0?C=0:C=Math.min(w.value.length,C),typeof w.createTextRange=="function"){var E=w.createTextRange();return E.collapse(!0),E.moveStart("character",A),E.moveEnd("character",C-A),E.getBoundingClientRect()}var k=Q(),U=k.top,L=k.left,_=G("width",!0),I=G("height",!0),$="white-space:pre;padding:0;margin:0;",P=["direction","font-family","font-size","font-size-adjust","font-variant","font-weight","font-style","letter-spacing","line-height","text-align","text-indent","text-transform","word-wrap","word-spacing"];U+=G("padding-top",!0),U+=G("border-top-width",!0),L+=G("padding-left",!0),L+=G("border-left-width",!0),L+=1;for(var H=0;H<P.length;H++){var V=P[H];$+=V+":"+G(V)+";";}var D=w.value||"G",N=D.length,R=document.createElement("div");A>0&&X(0,A);var F=X(A,C);N>C&&X(C,N),R.style.cssText=$,R.style.position="absolute",R.style.top=U+"px",R.style.left=L+"px",R.style.width=_+"px",R.style.height=I+"px",PopsCore.document.body.appendChild(R);var W=F.getBoundingClientRect();return T||R.parentNode.removeChild(R),W;function X(tt,et){var nt=document.createElement("span");return nt.style.cssText=$,nt.textContent=D.substring(tt,et),R.appendChild(nt),nt}function Q(){var tt=document.body,et=document.defaultView,nt=document.documentElement,bt=document.createElement("div");bt.style.paddingLeft=bt.style.width="1px",tt.appendChild(bt);var Y=bt.offsetWidth==2;tt.removeChild(bt),bt=w.getBoundingClientRect();var z=nt.clientTop||tt.clientTop||0,q=nt.clientLeft||tt.clientLeft||0,J=et.pageYOffset||Y&&nt.scrollTop||tt.scrollTop,K=et.pageXOffset||Y&&nt.scrollLeft||tt.scrollLeft;return {top:bt.top+J-z,left:bt.left+K-q}}function G(tt,et){var nt=PopsCore.document.defaultView.getComputedStyle(w,null).getPropertyValue(tt);return et?parseFloat(nt):nt}}cssHide(w,A=!1){w!=null&&(A?w.classList.add("pops-hide-important"):w.classList.add("pops-hide"));}cssShow(w){w!=null&&(w.classList.remove("pops-hide-important"),w.classList.remove("pops-hide"));}parseHTML(w,A=!1,C=!1){function T(){let k=new DOMParser;return C?k.parseFromString(w,"text/html"):k.parseFromString(w,"text/html").body.firstChild}function E(){let k=PopsCore.document.createElement("div");return k.innerHTML=w,C?k:k.firstChild}return A?T():E()}append(w,A){if(typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w==null)return;function C(T,E){typeof A=="string"?T.insertAdjacentHTML("beforeend",E):T.appendChild(E);}if(Array.isArray(A)||A instanceof NodeList){let T=PopsCore.document.createDocumentFragment();A.forEach(E=>{typeof E=="string"&&(E=this.parseHTML(E,!0,!1)),T.appendChild(E);}),w.appendChild(T);}else C(w,A);}appendHead(w){PopsCore.document.head?PopsCore.document.head.appendChild(w):PopsCore.document.documentElement.appendChild(w);}appendBody(w){PopsCore.document.body?PopsCore.document.body.appendChild(w):PopsCore.document.documentElement.appendChild(w);}isShow(w){return !!w.getClientRects().length}showElement(w,A){let C=w.cloneNode(!0);C.setAttribute("style","visibility: hidden !important;display:block !important;");let T=PopsCore.document.documentElement,E=w.getRootNode();return A==null?E==w?T=PopsCore.document.documentElement:T=E:T=A,T.appendChild(C),{cloneNode:C,recovery(){C.remove();}}}getStyleValue(w,A){let C=null,T=null;w instanceof CSSStyleDeclaration?T=w:(C=w.ownerDocument.defaultView,(!C||!C.opener)&&(C=window),T=C.getComputedStyle(w));let E=parseFloat(T[A]);return isNaN(E)?0:E}before(w,A){typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(typeof A=="string"?w.insertAdjacentHTML("beforebegin",A):w.parentElement.insertBefore(A,w));}after(w,A){typeof w=="string"&&(w=PopsCore.document.querySelector(w)),w!=null&&(typeof A=="string"?w.insertAdjacentHTML("afterend",A):w.parentElement.insertBefore(A,w.nextSibling));}}const popsDOMUtils=new PopsDOMUtils,PopsInstanceUtils={getMaxZIndexNodeInfo(S=1,w=PopsCore.document,A){S=Number.isNaN(S)?1:S;const C=2*Math.pow(10,9);let T=0,E=null;function k(L){return L.position!=="static"&&L.display!=="none"}function U(L){if(typeof A=="function"){let I=A(L);if(typeof I=="boolean"&&!I)return}const _=PopsCore.window.getComputedStyle(L);if(k(_)){let I=parseInt(_.zIndex);isNaN(I)||I>T&&(T=I,E=L),L.shadowRoot!=null&&L instanceof ShadowRoot&&L.shadowRoot.querySelectorAll("*").forEach($=>{U($);});}}return w.querySelectorAll("*").forEach((L,_)=>{U(L);}),T+=S,T>=C&&(T=C),{node:E,zIndex:T}},getPopsMaxZIndex(S=1){S=Number.isNaN(S)?1:S;const w=2*Math.pow(10,9);let A=0,C=null;function T(k){return k.position!=="static"&&k.display!=="none"}Object.keys(pops.config.layer).forEach(k=>{let U=pops.config.layer[k];for(let L=0;L<U.length;L++){const _=U[L];let I=window.getComputedStyle(_.animElement);if(T(I)){let $=parseInt(I.zIndex);isNaN($)||$>A&&(A=$,C=_.animElement);}}}),A+=S;let E=A>=w;return E&&(A=w),{zIndex:A,animElement:C,isOverMaxZIndex:E}},getMaxZIndex(S=1){return this.getMaxZIndexNodeInfo(S).zIndex},getKeyFrames(S){let w={};return Object.keys(S.cssRules).forEach(A=>{S.cssRules[A].type===7&&S.cssRules[A].name.startsWith("pops-anim-")&&(w[S.cssRules[A].name]=S.cssRules[A]);}),w},removeInstance(S,w,A=!1){function C(T){var E,k,U,L;typeof T.beforeRemoveCallBack=="function"&&T.beforeRemoveCallBack(T),(E=T==null?void 0:T.animElement)==null||E.remove(),(k=T==null?void 0:T.popsElement)==null||k.remove(),(U=T==null?void 0:T.maskElement)==null||U.remove(),(L=T==null?void 0:T.$shadowContainer)==null||L.remove();}return S.forEach(T=>{T.forEach((E,k)=>{(A||E.guid===w)&&(pops.config.animation.hasOwnProperty(E.animElement.getAttribute("anim"))?(E.animElement.style.width="100%",E.animElement.style.height="100%",E.animElement.style["animation-name"]=E.animElement.getAttribute("anim")+"-reverse",pops.config.animation.hasOwnProperty(E.animElement.style["animation-name"])?popsDOMUtils.on(E.animElement,popsDOMUtils.getAnimationEndNameList(),function(){C(E);},{capture:!0}):C(E)):C(E),T.splice(k,1));});}),S},hide(S,w,A,C,T,E){let k=T.querySelector(".pops[type-value]");if(S==="drawer"){let U=C;setTimeout(()=>{E.style.setProperty("display","none"),["top","bottom"].includes(U.direction)?k.style.setProperty("height","0"):["left","right"].includes(U.direction)?k.style.setProperty("width","0"):console.error("未知direction：",U.direction);},U.closeDelay);}else w.forEach(U=>{if(U.guid===A){if(U.animElement.style.width="100%",U.animElement.style.height="100%",U.animElement.style["animation-name"]=U.animElement.getAttribute("anim")+"-reverse",pops.config.animation.hasOwnProperty(U.animElement.style["animation-name"])){let _=function(){U.animElement.style.display="none",U.maskElement&&(U.maskElement.style.display="none"),popsDOMUtils.off(U.animElement,popsDOMUtils.getAnimationEndNameList(),_,{capture:!0});};popsDOMUtils.on(U.animElement,popsDOMUtils.getAnimationEndNameList(),_,{capture:!0});}else U.animElement.style.display="none",U.maskElement&&(U.maskElement.style.display="none");return}});},show(S,w,A,C,T,E){let k=T.querySelector(".pops[type-value]");if(S==="drawer"){let U=C;setTimeout(()=>{E.style.setProperty("display","");let L=U.direction,_=U.size.toString();["top","bottom"].includes(L)?k.style.setProperty("height",_):["left","right"].includes(L)?k.style.setProperty("width",_):console.error("未知direction：",L);},U.openDelay);}else w.forEach(U=>{if(U.guid===A)if(U.animElement.style.width="",U.animElement.style.height="",U.animElement.style["animation-name"]=U.animElement.getAttribute("anim").replace("-reverse",""),pops.config.animation.hasOwnProperty(U.animElement.style["animation-name"])){let _=function(){popsDOMUtils.off(U.animElement,popsDOMUtils.getAnimationEndNameList(),_,{capture:!0});};U.animElement.style.display="",U.maskElement&&(U.maskElement.style.display=""),popsDOMUtils.on(U.animElement,popsDOMUtils.getAnimationEndNameList(),_,{capture:!0});}else U.animElement.style.display="",U.maskElement&&(U.maskElement.style.display="");});},close(S,w,A,C,T){let E=T.querySelector(".pops[type-value]"),k=C;function U(){function L(I){I.propertyName==="transform"&&(popsDOMUtils.off(E,popsDOMUtils.getTransitionEndNameList(),void 0,L),PopsInstanceUtils.removeInstance([w],A));}if(popsDOMUtils.on(E,popsDOMUtils.getTransitionEndNameList(),L),getComputedStyle(E).transform!=="none"){popsDOMUtils.trigger(E,popsDOMUtils.getTransitionEndNameList(),void 0,!0);return}["top"].includes(k.direction)?E.style.setProperty("transform","translateY(-100%)"):["bottom"].includes(k.direction)?E.style.setProperty("transform","translateY(100%)"):["left"].includes(k.direction)?E.style.setProperty("transform","translateX(-100%)"):["right"].includes(k.direction)?E.style.setProperty("transform","translateX(100%)"):console.error("未知direction：",k.direction);}S==="drawer"?setTimeout(()=>{U();},k.closeDelay):PopsInstanceUtils.removeInstance([w],A);},drag(S,w){w=Object.assign({limit:!0,extraDistance:3,container:PopsCore.globalThis,triggerClick:!0},w);let A=!1,C=0,T=0,E=popsUtils.AnyTouch(),k=new E(w.dragElement,{preventDefault(D){return typeof w.preventEvent=="function"?w.preventEvent(D):!0}});popsDOMUtils.css(w.dragElement,{cursor:"move"});function U(D){var W;let N=0,R=0,F=PopsCore.globalThis.getComputedStyle(D).transform;if(F!=="none"&&F!=null&&F!==""){let X=(W=F.match(/\((.+)\)/))==null?void 0:W[1].split(",");N=Math.abs(parseInt(X[4])),R=Math.abs(parseInt(X[5]));}return {transformLeft:N,transformTop:R}}function L(D){let N=D.style.transitionDuration;return globalThis.getComputedStyle(D).transitionDuration!=="0s"&&(D.style.transitionDuration="0s"),()=>{D.style.transitionDuration=N;}}function _(D){return D=D??globalThis,{width:popsDOMUtils.width(D),height:popsDOMUtils.height(D)}}function I(D){if(D=D??globalThis,popsUtils.isWin(D))return {left:0,top:0};{let N=D.getBoundingClientRect();return {left:N.left,top:N.top}}}let $=U(S),P=$.transformLeft,H=$.transformTop,V=null;k.on("pan",function(D){if(!A){A=!0;let F=w.dragElement.getBoundingClientRect();C=D.x-F.left,T=D.y-F.top,$=U(S),P=$.transformLeft,H=$.transformTop,V=L(S);}let N=D.x-C+P,R=D.y-T+H;if(D.phase==="move"){if(w.limit){let F=_(w.container).width-popsDOMUtils.width(S)+P,{left:W,top:X}=I(w.container),Q=_(w.container).height-popsDOMUtils.height(S)+H;N>F&&(N=F),R>Q&&(R=Q),N-w.extraDistance*2<W+P?(N=W+P,N+=w.extraDistance):N-=w.extraDistance,R-w.extraDistance*2<X+H?(R=X+H,R+=w.extraDistance):R-=w.extraDistance;}typeof w.moveCallBack=="function"&&w.moveCallBack(S,N,R),popsDOMUtils.css(S,{left:N+"px",top:R+"px"});}D.phase==="end"&&(A=!1,typeof V=="function"&&(V(),V=null),typeof w.endCallBack=="function"&&w.endCallBack(S,N,R));}),w.triggerClick&&k.on(["tap"],function(D){D.changedPoints.forEach(N=>{popsDOMUtils.trigger(N.target,"click",void 0,!0);});});},sortElementListByProperty(S,w,A=!0){if(typeof A!="boolean")throw "参数 sortByDesc 必须为boolean类型";if(S==null||w==null)throw "获取前面的值或后面的值的方法不能为空";return function(C,T){var E=S(T),k=w(C);return A?k>E?-1:k<E?1:0:k<E?-1:k>E?1:0}}};var indexCSS=`@charset "utf-8";\r
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
`;const GlobalConfig={config:{},setGlobalConfig(S){Reflect.ownKeys(S).forEach(w=>{Reflect.set(GlobalConfig.config,w,Reflect.get(S,w));});},getGlobalConfig(){let S={};return Object.keys(GlobalConfig.config).forEach(w=>{let A=Reflect.get(GlobalConfig.config,w);if(w==="style"){let C=A==null?"":typeof A=="function"?A():A;typeof C=="string"&&(S.style=C);}else if(w==="zIndex"){let C=A==null?"":typeof A=="function"?A():A;if(typeof C=="string"){let T=C=parseInt(C);isNaN(T)||(S.zIndex=T);}else isNaN(C)||(S.zIndex=C);}else if(w==="mask"){let C=GlobalConfig.config.mask==null?{}:GlobalConfig.config.mask;typeof C=="object"&&C!=null&&(S.mask=C);}else Reflect.set(S,w,A);}),S}},PopsElementHandler={getMaskHTML(S,w=101,A=""){return w=w-100,A.startsWith(";")&&(A=A.replace(";","")),`<div class="pops-mask" data-guid="${S}" style="z-index:${w};${A}"></div>`},getAnimHTML(S,w,A,C="",T="",E){let k=A,U="",L="",_=k.position||"";A.zIndex!=null&&(U+=`z-index: ${E};`,L+=`z-index: ${E};`),k.width!=null&&(L+=`width: ${k.width};`),k.height!=null&&(L+=`height: ${k.height};`);let I=T.trim()!=="";return `
		<div 
			class="pops-anim"
			anim="${k.animation||""}"
			style="${U}"
			data-guid="${S}">
            ${A.style!=null?`<style tyle="text/css">${A.style}</style>`:""}
			<div
				class="pops ${A.class||""}"
				data-bottom-btn="${I}"
				type-value="${w}"
				style="${L}"
				position="${_}"
				data-guid="${S}">
				${C}
			</div>
		</div>`},getHeaderBtnHTML(S,w){var k,U,L,_,I;if(!w.btn)return "";let A=w;if(S!=="iframe"&&!((U=(k=A.btn)==null?void 0:k.close)!=null&&U.enable))return "";let C="",T="",E=w;if(S==="iframe"&&((L=E.topRightButton)==null?void 0:L.trim())!==""){let $="";E.topRightButton.split("|").forEach(P=>{P=P.toLowerCase(),$+=`
                <button class="pops-header-control" type="${P}">
                    <i class="pops-icon">${pops.config.iconSVG[P]}</i>
                </button>`;}),C=`
            <div class="pops-header-controls" data-margin>
                ${$}
            </div>`;}else (I=(_=A.btn)==null?void 0:_.close)!=null&&I.enable&&(T=`
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="close" data-header>
                    <i class="pops-icon">${pops.config.iconSVG.close}</i>
                    </button>
                </div>`),C=T;return C},getBottomBtnHTML(S,w){var L,_,I,$,P,H,V,D,N,R,F,W,X,Q;if(!w.btn)return "";let A=w;if(!((_=(L=w.btn)==null?void 0:L.ok)!=null&&_.enable||($=(I=A.btn)==null?void 0:I.cancel)!=null&&$.enable||(H=(P=A.btn)==null?void 0:P.other)!=null&&H.enable))return "";let C="",T="",E="",k="",U="";if(w.btn.position&&(C+=`justify-content: ${w.btn.position};`),A.btn.reverse&&(C+="flex-direction: row-reverse;"),(D=(V=w.btn)==null?void 0:V.ok)!=null&&D.enable){let G="";(w.btn.ok.size==="large"||w.btn.ok.size==="small")&&(G="pops-button-"+w.btn.ok.size);let tt="",et=A.btn.ok.icon;if(et!==""){let nt="";et in pops.config.iconSVG?nt=pops.config.iconSVG[et]:nt=et,nt=nt||"",tt=`
                <i class="pops-bottom-icon" is-loading="${w.btn.ok.iconIsLoading}">
                    ${nt}
                </i>`;}E=`
            <button 
                    class="pops-${S}-btn-ok ${G}"
                    type="${(N=A.btn.ok)==null?void 0:N.type}"
					data-has-icon="${(A.btn.ok.icon||"")!==""}"
                    data-rightIcon="${(R=A.btn.ok)==null?void 0:R.rightIcon}"
            >
            ${tt}
                <span>${w.btn.ok.text}</span>
            </button>`;}if((W=(F=A.btn)==null?void 0:F.cancel)!=null&&W.enable){let G="";(A.btn.cancel.size==="large"||A.btn.cancel.size==="small")&&(G="pops-button-"+A.btn.cancel.size);let tt="",et=A.btn.cancel.icon;if(et!==""){let nt="";et in pops.config.iconSVG?nt=pops.config.iconSVG[et]:nt=et,nt=nt||"",tt=`
                <i class="pops-bottom-icon" is-loading="${A.btn.cancel.iconIsLoading}">
                    ${nt}
                </i>`;}k=`
            <button
                    class="pops-${S}-btn-cancel ${G}"
                    type="${A.btn.cancel.type}"
					data-has-icon="${(A.btn.cancel.icon||"")!==""}"
                    data-rightIcon="${A.btn.cancel.rightIcon}"
            >
            ${tt}
                <span>${A.btn.cancel.text}</span>
            </button>`;}if((Q=(X=A.btn)==null?void 0:X.other)!=null&&Q.enable){let G="";(A.btn.other.size==="large"||A.btn.other.size==="small")&&(G="pops-button-"+A.btn.other.size);let tt="",et=A.btn.other.icon;if(et!==""){let nt="";et in pops.config.iconSVG&&(nt=pops.config.iconSVG[et]),nt=nt||"",tt=`
                <i class="pops-bottom-icon" is-loading="${A.btn.other.iconIsLoading}">
                    ${nt}
                </i>`;}U=`
            <button
                    class="pops-${S}-btn-other ${G}"
                    type="${A.btn.other.type}"
					data-has-icon="${(A.btn.other.icon||"")!==""}"
                    data-rightIcon="${A.btn.other.rightIcon}"
            >
            ${tt}
                <span>${A.btn.other.text}</span>
            </button>`;}if(A.btn.merge){let G="display: flex;";A.btn.mergeReverse?G+="flex-direction: row-reverse;":G+="flex-direction: row;",T=`
            <div class="pops-${S}-btn" style="${C}">
                ${U}
                <div 
                    class="pops-${S}-btn-merge"
                    style="${G}">
                    ${E}
                    ${k}
                </div>
            </div>
            `;}else T=`
            <div class="pops-${S}-btn" style="${C}">
                ${E}
                ${k}
                ${U}
            </div>
            `;return T},getHeaderStyle(S,w){var A,C,T,E;return {headerStyle:(A=w==null?void 0:w.title)!=null&&A.html&&((C=w==null?void 0:w.title)==null?void 0:C.style)||"",headerPStyle:(T=w==null?void 0:w.title)!=null&&T.html?"":((E=w==null?void 0:w.title)==null?void 0:E.style)||""}},getContentStyle(S,w){var A,C,T,E;return {contentStyle:(A=w==null?void 0:w.content)!=null&&A.html&&((C=w==null?void 0:w.content)==null?void 0:C.style)||"",contentPStyle:(T=w==null?void 0:w.content)!=null&&T.html?"":((E=w==null?void 0:w.content)==null?void 0:E.style)||""}},parseElement(S){return popsUtils.parseTextToDOM(S)}},PopsHandler={handlerShadow(S){let w=document.createElement("div");if(w.className="pops-shadow-container",S.useShadowRoot){let A=w.attachShadow({mode:"open"});return {$shadowContainer:w,$shadowRoot:A}}else return {$shadowContainer:w,$shadowRoot:w}},handleInit(S,w){if(pops.init(),!!arguments.length)if(Array.isArray(w))for(let A=0;A<w.length;A++)this.handleInit(S,w[A]);else {let A=popsDOMUtils.createElement("style",{innerHTML:w},{"data-type":"PopsHandler.handleInit"});S.appendChild(A);}},handleMask(S={}){let w={maskElement:popsUtils.parseTextToDOM(S.maskHTML)},A=!1;function C(E){popsDOMUtils.preventEvent(E);let k=pops.config.layer[S.type];function U(){S.config.mask.clickEvent.toClose?PopsInstanceUtils.close(S.type,k,S.guid,S.config,S.animElement):S.config.mask.clickEvent.toHide&&PopsInstanceUtils.hide(S.type,k,S.guid,S.config,S.animElement,w.maskElement);}return typeof S.config.mask.clickCallBack=="function"?S.config.mask.clickCallBack(U,S.config):U(),!1}if(S.config.mask.clickEvent.toClose||S.config.mask.clickEvent.toHide){let E=function(k){var U;return !!(((U=k==null?void 0:k.localName)==null?void 0:U.toLowerCase())==="div"&&k.className&&k.className==="pops-anim"&&k.hasAttribute("anim"))};popsDOMUtils.on(S.animElement,["touchstart","mousedown"],void 0,k=>{let U=k.composedPath()[0];A=E(U);}),popsDOMUtils.on(S.animElement,"click",void 0,k=>{let U=k.composedPath()[0];if(E(U)&&A)return C(k)}),popsDOMUtils.on(w.maskElement,"click",void 0,k=>{A=!0,C(k);});}return w},handleQueryElement(S,w){return {popsElement:S.querySelector(".pops[type-value"),btnOkElement:S.querySelector(`.pops-${w}-btn-ok`),btnCancelElement:S.querySelector(`.pops-${w}-btn-cancel`),btnOtherElement:S.querySelector(`.pops-${w}-btn-other`),titleElement:S.querySelector(`.pops-${w}-title`),inputElement:S.querySelector(`.pops-${w}-content textarea[pops]`)?S.querySelector(`.pops-${w}-content textarea[pops]`):S.querySelector(`.pops-${w}-content input[pops]`),headerControlsElement:S.querySelector(".pops-header-controls"),iframeElement:S.querySelector("iframe[pops]"),loadingElement:S.querySelector(".pops-loading"),contentElement:S.querySelector(`.pops-${w}-content`),contentAsideElement:S.querySelector(`.pops-${w}-content aside.pops-${w}-aside`),contentSectionContainerElement:S.querySelector(`.pops-${w}-content section.pops-${w}-container`),contentLoadingElement:S.querySelector(`.pops-${w}-content-global-loading`),headerMinBtnElement:S.querySelector(".pops-header-control[type='min']"),headerMaxBtnElement:S.querySelector(".pops-header-control[type='max']"),headerMiseBtnElement:S.querySelector(".pops-header-control[type='mise']"),headerCloseBtnElement:S.querySelector(".pops-header-control[type='close']"),folderListElement:S.querySelector(".pops-folder-list"),folderListHeaderElement:S.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),folderListHeaderRowElement:S.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),folderListBodyElement:S.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),folderFileListBreadcrumbPrimaryElement:S.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),folderListSortFileNameElement:S.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),folderListSortLatestTimeElement:S.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),folderListSortFileSizeElement:S.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]')}},handleEventDetails(S,w,A,C,T,E,k,U){return {$shadowContainer:w,$shadowRoot:A,element:T,animElement:T,popsElement:E,maskElement:k,mode:C,guid:S,close(){PopsInstanceUtils.close(C,pops.config.layer[C],S,U,T);},hide(){PopsInstanceUtils.hide(C,pops.config.layer[C],S,U,T,k);},show(){PopsInstanceUtils.show(C,pops.config.layer[C],S,U,T,k);}}},handleLoadingEventDetails(S,w,A,C,T,E){return {element:A,animElement:A,popsElement:C,maskElement:T,mode:w,guid:S,close(){PopsInstanceUtils.close(w,pops.config.layer[w],S,E,A);},hide(){PopsInstanceUtils.hide(w,pops.config.layer[w],S,E,A,T);},show(){PopsInstanceUtils.show(w,pops.config.layer[w],S,E,A,T);}}},handleResultDetails(S){let w=Object.assign({},S);return popsUtils.delete(w,"type"),popsUtils.delete(w,"function"),w},handleClickEvent(S,w,A,C){popsDOMUtils.on(w,"click",T=>{C(Object.assign(A,{type:S}),T);},{capture:!0});},handleKeyboardEvent(S,w=[],A){let C=function(T){let E=T.code||T.key,k=T.charCode||T.keyCode||T.which;w.includes("ctrl")&&!T.ctrlKey||w.includes("alt")&&!T.altKey||w.includes("meta")&&!T.metaKey||w.includes("shift")&&!T.shiftKey||(typeof S=="string"&&S===E?A&&A(T):typeof S=="number"&&S===k&&A&&A(T));};return popsDOMUtils.on(PopsCore.globalThis,"keydown",C,{capture:!0}),{removeKeyboardEvent(){popsDOMUtils.off(globalThis,"keydown",C,{capture:!0});}}},handlePromptClickEvent(S,w,A,C,T){popsDOMUtils.on(A,"click",E=>{let k={type:S,text:w.value};T(Object.assign(C,k),E);},{capture:!0});},handleZIndex(S){return typeof S=="function"?S():S},handleOnly(S,w){if(w.only)if(S==="loading"||S==="tooltip"||S==="rightClickMenu"){let A=pops.config.layer[S];A&&PopsInstanceUtils.removeInstance([A],"",!0);}else PopsInstanceUtils.removeInstance([pops.config.layer.alert,pops.config.layer.confirm,pops.config.layer.prompt,pops.config.layer.iframe,pops.config.layer.drawer,pops.config.layer.folder,pops.config.layer.panel],"",!0);else {let A=w.zIndex;w.zIndex=()=>{const{zIndex:C}=PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(A)+100);return C};}return w},handlePush(S,w){pops.config.layer[S].push(w);}},PopsAlertConfig=()=>({title:{text:"默认标题",position:"left",html:!1,style:""},content:{text:"默认内容",html:!1,style:""},btn:{position:"flex-end",ok:{size:void 0,enable:!0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"确定",type:"primary",callback:function(S){S.close();}},close:{enable:!0,callback:function(S){S.close();}}},useShadowRoot:!0,class:"",only:!1,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,beforeAppendToPageCallBack(){}});class PopsAlert{constructor(w){const A=popsUtils.getRandomGUID(),C="alert";let T=PopsAlertConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.alertCSS]);let U=PopsHandler.handleZIndex(T.zIndex),L=PopsElementHandler.getMaskHTML(A,U),_=PopsElementHandler.getHeaderBtnHTML(C,T),I=PopsElementHandler.getBottomBtnHTML(C,T),{headerStyle:$,headerPStyle:P}=PopsElementHandler.getHeaderStyle(C,T),{contentStyle:H,contentPStyle:V}=PopsElementHandler.getContentStyle(C,T),D=PopsElementHandler.getAnimHTML(A,C,T,`
			<div 
				class="pops-alert-title"
				style="text-align: ${T.title.position};
				${$}">
				${T.title.html?T.title.text:`<p pops style="${P}">${T.title.text}</p>`}
				${_}
			</div>
			<div class="pops-alert-content" style="${H}">
				${T.content.html?T.content.text:`<p pops style="${V}">${T.content.text}</p>`}
			</div>
			${I}`,I,U),N=PopsElementHandler.parseElement(D),{popsElement:R,headerCloseBtnElement:F,btnOkElement:W,titleElement:X}=PopsHandler.handleQueryElement(N,C),Q=null,G=[N];T.mask.enable&&(Q=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:N,maskHTML:L}).maskElement,G.push(Q));let tt=PopsHandler.handleEventDetails(A,E,k,C,N,R,Q,T);return PopsHandler.handleClickEvent("close",F,tt,T.btn.close.callback),PopsHandler.handleClickEvent("ok",W,tt,T.btn.ok.callback),popsDOMUtils.append(k,G),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E),Q!=null&&N.after(Q),PopsHandler.handlePush(C,{guid:A,animElement:N,popsElement:R,maskElement:Q,$shadowContainer:E,$shadowRoot:k}),T.drag&&PopsInstanceUtils.drag(R,{dragElement:X,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handleResultDetails(tt)}}const PopsConfirmConfig=()=>({title:{text:"默认标题",position:"left",html:!1,style:""},content:{text:"默认内容",html:!1,style:""},btn:{merge:!1,mergeReverse:!1,reverse:!1,position:"flex-end",ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"确定",type:"primary",callback(S){S.close();}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"关闭",type:"default",callback(S){S.close();}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"其它按钮",type:"default",callback(S){S.close();}},close:{enable:!0,callback(S){S.close();}}},useShadowRoot:!0,class:"",only:!1,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,beforeAppendToPageCallBack(){}});class PopsConfirm{constructor(w){const A=popsUtils.getRandomGUID(),C="confirm";let T=PopsConfirmConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.confirmCSS]);let U=PopsHandler.handleZIndex(T.zIndex),L=PopsElementHandler.getMaskHTML(A,U),_=PopsElementHandler.getHeaderBtnHTML(C,T),I=PopsElementHandler.getBottomBtnHTML(C,T),{headerStyle:$,headerPStyle:P}=PopsElementHandler.getHeaderStyle(C,T),{contentStyle:H,contentPStyle:V}=PopsElementHandler.getContentStyle(C,T),D=PopsElementHandler.getAnimHTML(A,C,T,`
            <div class="pops-confirm-title" style="text-align: ${T.title.position};${$}">
                            ${T.title.html?T.title.text:`<p pops style="${P}">${T.title.text}</p>`}
                ${_}
                        </div>
                        <div class="pops-confirm-content" style="${H}">
                ${T.content.html?T.content.text:`<p pops style="${V}">${T.content.text}</p>`}
                
                        </div>

						
                        ${I}
            `,I,U),N=PopsElementHandler.parseElement(D),{popsElement:R,titleElement:F,headerCloseBtnElement:W,btnOkElement:X,btnCancelElement:Q,btnOtherElement:G}=PopsHandler.handleQueryElement(N,C),tt=null,et=[N];T.mask.enable&&(tt=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:N,maskHTML:L}).maskElement,et.push(tt));let nt=PopsHandler.handleEventDetails(A,E,k,C,N,R,tt,T);return PopsHandler.handleClickEvent("close",W,nt,T.btn.close.callback),PopsHandler.handleClickEvent("ok",X,nt,T.btn.ok.callback),PopsHandler.handleClickEvent("cancel",Q,nt,T.btn.cancel.callback),PopsHandler.handleClickEvent("other",G,nt,T.btn.other.callback),popsDOMUtils.append(k,et),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E),tt!=null&&N.after(tt),PopsHandler.handlePush(C,{guid:A,animElement:N,popsElement:R,maskElement:tt,$shadowContainer:E,$shadowRoot:k}),T.drag&&PopsInstanceUtils.drag(R,{dragElement:F,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handleResultDetails(nt)}}const PopsPromptConfig=()=>({title:{text:"默认标题",position:"left",html:!1,style:""},content:{text:"",select:!1,password:!1,row:!1,focus:!0,placeholder:"默认提示",style:""},btn:{merge:!1,mergeReverse:!1,reverse:!1,position:"flex-end",ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"确定",type:"success",callback(S){S.close();}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"关闭",type:"default",callback(S){S.close();}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"其它按钮",type:"default",callback(S){S.close();}},close:{enable:!0,callback(S){S.close();}}},useShadowRoot:!0,class:"",only:!1,width:"350px",height:"200px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,beforeAppendToPageCallBack(){}});class PopsPrompt{constructor(w){const A=popsUtils.getRandomGUID(),C="prompt";let T=PopsPromptConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.promptCSS]);let U=PopsHandler.handleZIndex(T.zIndex),L=PopsElementHandler.getMaskHTML(A,U),_=PopsElementHandler.getHeaderBtnHTML(C,T),I=PopsElementHandler.getBottomBtnHTML(C,T),{headerStyle:$,headerPStyle:P}=PopsElementHandler.getHeaderStyle(C,T),{contentPStyle:H}=PopsElementHandler.getContentStyle(C,T),V=PopsElementHandler.getAnimHTML(A,C,T,`
            <div class="pops-prompt-title" style="text-align: ${T.title.position};${$}">
            ${T.title.html?T.title.text:`<p pops style="${P}">${T.title.text}</p>`}
            ${_}
            </div>
            <div class="pops-prompt-content" style="${H}">
            ${T.content.row?'<textarea pops="" placeholder="'+T.content.placeholder+'"></textarea>':'<input pops="" placeholder="'+T.content.placeholder+'" type="'+(T.content.password?"password":"text")+'">'}
            </div>
        	${I}
            `,I,U),D=PopsElementHandler.parseElement(V),{popsElement:N,inputElement:R,headerCloseBtnElement:F,btnOkElement:W,btnCancelElement:X,btnOtherElement:Q,titleElement:G}=PopsHandler.handleQueryElement(D,C),tt=null,et=[D];T.mask.enable&&(tt=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:D,maskHTML:L}).maskElement,et.push(tt));let nt=PopsHandler.handleEventDetails(A,E,k,C,D,N,tt,T);return R.value=T.content.text,PopsHandler.handlePromptClickEvent("close",R,F,nt,T.btn.close.callback),PopsHandler.handlePromptClickEvent("ok",R,W,nt,T.btn.ok.callback),PopsHandler.handlePromptClickEvent("cancel",R,X,nt,T.btn.cancel.callback),PopsHandler.handlePromptClickEvent("other",R,Q,nt,T.btn.other.callback),popsDOMUtils.append(k,et),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E),tt!=null&&D.after(tt),PopsHandler.handlePush(C,{guid:A,animElement:D,popsElement:N,maskElement:tt,$shadowContainer:E,$shadowRoot:k}),T.drag&&PopsInstanceUtils.drag(N,{dragElement:G,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),T.content.focus&&R.focus(),T.content.select&&R.select(),PopsHandler.handleResultDetails(nt)}}const PopsLoadingConfig=()=>({parent:document.body,content:{text:"加载中...",icon:"loading",style:""},useShadowRoot:!0,class:"",only:!1,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},animation:"pops-anim-fadein-zoom",forbiddenScroll:!1,style:null,addIndexCSS:!0});class PopsLoading{constructor(w){let A=PopsLoadingConfig();A=popsUtils.assign(A,GlobalConfig.getGlobalConfig()),A=popsUtils.assign(A,w);let C=popsUtils.getRandomGUID();const T="loading";A=PopsHandler.handleOnly(T,A);let E=PopsHandler.handleZIndex(A.zIndex),k=PopsElementHandler.getMaskHTML(C,E),{contentPStyle:U}=PopsElementHandler.getContentStyle("loading",A),L=PopsElementHandler.getAnimHTML(C,T,A,`
            <div class="pops-loading-content">
                ${A.addIndexCSS?`
                <style data-model-name="index">${pops.config.cssText.index}</style>
                <style data-model-name="anim">${pops.config.cssText.anim}</style>
                <style data-model-name="common">${pops.config.cssText.common}</style>
                `:""}
                <style data-model-name="loadingCSS">
                    ${pops.config.cssText.loadingCSS}
                </style>
            ${A.style!=null?`<style>${A.style}</style>`:""}
            <p pops style="${U}">${A.content.text}</p>
            </div>
            `,"",E),_=PopsElementHandler.parseElement(L),{popsElement:I}=PopsHandler.handleQueryElement(_,T),$=null,P=[_];A.mask.enable&&($=PopsHandler.handleMask({type:T,guid:C,config:A,animElement:_,maskHTML:k}).maskElement,P.push($));let H=PopsHandler.handleLoadingEventDetails(C,T,_,I,$,A);return popsDOMUtils.append(A.parent,P),$!=null&&_.after($),PopsHandler.handlePush(T,{guid:C,animElement:_,popsElement:I,maskElement:$}),PopsHandler.handleResultDetails(H)}}const PopsIframeConfig=()=>({title:{position:"center",text:"",html:!1,style:""},loading:{enable:!0,icon:!0,text:""},useShadowRoot:!0,class:"",url:window.location.href,only:!1,zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},animation:"pops-anim-fadein-zoom",position:"center",drag:!0,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},width:"300px",height:"250px",topRightButton:"min|max|mise|close",sandbox:!1,forbiddenScroll:!1,loadEndCallBack(){},btn:{min:{callback(){}},max:{callback(){}},mise:{callback(){}},close:{callback(){}}},style:null,beforeAppendToPageCallBack(){}});class PopsIframe{constructor(w){var At;const A=popsUtils.getRandomGUID(),C="iframe";let T=PopsIframeConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T.url==null)throw "config.url不能为空";T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.iframeCSS]);let U=T.animation!=null&&T.animation!=""?"position:absolute;":"",L=PopsHandler.handleZIndex(T.zIndex),_=PopsElementHandler.getMaskHTML(A,L,U),I=PopsElementHandler.getHeaderBtnHTML(C,T),$='<div class="pops-loading"></div>',P=T.title.text.trim()!==""?T.title.text:T.url,{headerStyle:H,headerPStyle:V}=PopsElementHandler.getHeaderStyle(C,T),D=PopsElementHandler.getAnimHTML(A,C,T,`
            <div 
                class="pops-iframe-title"
                style="text-align: ${T.title.position};${H}"
            >
                ${T.title.html?P:`<p pops style="${V}">${P}</p>`}
                ${I}
            </div>
                        <div class="pops-iframe-content">
                <div class="pops-iframe-content-global-loading"></div>
                <iframe
                        src="${T.url}"
                        pops
                        ${T.sandbox?"sandbox='allow-forms allow-same-origin allow-scripts'":""}>
                </iframe>
                </div>
                ${T.loading.enable?$:""}
            `,"",L),N=PopsElementHandler.parseElement(D),{popsElement:R,headerCloseBtnElement:F,headerControlsElement:W,titleElement:X,iframeElement:Q,loadingElement:G,contentLoadingElement:tt,headerMinBtnElement:et,headerMaxBtnElement:nt,headerMiseBtnElement:bt}=PopsHandler.handleQueryElement(N,C),Y=PopsCore.document.querySelector(".pops-iframe-container");Y||(Y=PopsCore.document.createElement("div"),Y.className="pops-iframe-container",Y.style.cssText="display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;user-select: none;-webkit-user-select: none;-ms-user-select: none;-moz-user-select: none;",popsDOMUtils.appendBody(Y));let z=null,q=[N];T.mask.enable&&(z=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:N,maskHTML:_}).maskElement,q.push(z));let J=PopsHandler.handleEventDetails(A,E,k,C,N,R,z,T);J.iframeElement=Q,popsDOMUtils.on(N,popsDOMUtils.getAnimationEndNameList(),function(){N.style.width="0%",N.style.height="0%";}),popsDOMUtils.on(Q,"load",()=>{G==null||G.remove(),tt.style.animation="iframeLoadingChange_85 0.3s forwards",popsDOMUtils.on(tt,popsDOMUtils.getAnimationEndNameList(),()=>{tt.remove();}),T.title.text.trim()===""&&Q.contentDocument&&(X.querySelector("p").innerText=Q.contentDocument.title),T.loadEndCallBack(J);}),popsDOMUtils.append(k,q),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),Y.appendChild(E),z!=null&&N.after(z),T.drag&&PopsInstanceUtils.drag(R,{dragElement:X,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack});const K="type-module";let rt="",ct="",yt=!1;return popsDOMUtils.on(et,"click",ht=>{var Mt,Et;ht.preventDefault(),ht.stopPropagation(),rt=R.style.left,ct=R.style.top,R.classList.add("pops-iframe-unset-top"),R.classList.add("pops-iframe-unset-left"),R.classList.add("pops-iframe-unset-transform"),R.style.transitionDuration="",R.setAttribute(K,"min"),W.setAttribute("type","min"),nt.style.setProperty("display","none"),bt.style.setProperty("display",""),typeof((Et=(Mt=T==null?void 0:T.btn)==null?void 0:Mt.min)==null?void 0:Et.callback)=="function"&&T.btn.min.callback(J,ht);},{capture:!0}),popsDOMUtils.on(nt,"click",ht=>{var Mt,Et;ht.preventDefault(),ht.stopPropagation(),R.getAttribute(K)!=="min"&&(rt=R.style.left,ct=R.style.top),yt=!0,R.style.transitionDuration="",R.style.transform="",R.removeAttribute(K),R.classList.add("pops-iframe-unset-transition"),R.classList.add("pops-iframe-unset-left"),R.classList.add("pops-iframe-unset-top"),R.classList.add("pops-iframe-unset-transform"),R.classList.remove("pops-iframe-unset-transition"),R.setAttribute(K,"max"),W.setAttribute("type","max"),nt.style.setProperty("display","none"),bt.style.setProperty("display",""),typeof((Et=(Mt=T==null?void 0:T.btn)==null?void 0:Mt.max)==null?void 0:Et.callback)=="function"&&T.btn.max.callback(J,ht);},{capture:!0}),(At=bt==null?void 0:bt.style)==null||At.setProperty("display","none"),popsDOMUtils.on(bt,"click",ht=>{var Mt,Et;ht.preventDefault(),ht.stopPropagation(),yt&&R.getAttribute(K)==="min"?(R.classList.add("pops-iframe-unset-transition"),R.classList.add("pops-iframe-unset-left"),R.classList.add("pops-iframe-unset-top"),R.classList.add("pops-iframe-unset-transform"),R.classList.remove("pops-iframe-unset-transition"),R.setAttribute(K,"max"),W.setAttribute("type","max")):(yt=!1,R.style.left=rt,R.style.top=ct,R.style.transitionDuration="",R.style.transform="",W.removeAttribute("type"),R.removeAttribute(K),R.classList.remove("pops-iframe-unset-top"),R.classList.remove("pops-iframe-unset-left"),R.classList.remove("pops-iframe-unset-transform"),nt.style.setProperty("display",""),bt.style.setProperty("display","none")),typeof((Et=(Mt=T==null?void 0:T.btn)==null?void 0:Mt.mise)==null?void 0:Et.callback)=="function"&&T.btn.mise.callback(J,ht);},{capture:!0}),popsDOMUtils.on(F,"click",ht=>{var Mt,Et;ht.preventDefault(),ht.stopPropagation(),PopsInstanceUtils.removeInstance([pops.config.layer.iframe],A,!1),typeof((Et=(Mt=T==null?void 0:T.btn)==null?void 0:Mt.close)==null?void 0:Et.callback)=="function"&&T.btn.close.callback(J,ht);},{capture:!0}),PopsHandler.handlePush(C,{guid:A,animElement:N,popsElement:R,maskElement:z,$shadowContainer:E,$shadowRoot:k}),PopsHandler.handleResultDetails(J)}}const PopsDrawerConfig=()=>({title:{enable:!0,position:"center",text:"默认标题",html:!1,style:""},content:{text:"默认内容",html:!1,style:""},btn:{merge:!1,mergeReverse:!1,reverse:!1,position:"flex-end",ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"确定",type:"primary",callback(S){S.close();}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"关闭",type:"default",callback(S){S.close();}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"其它按钮",type:"default",callback(S){S.close();}},close:{enable:!0,callback(S){S.close();}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:null},useShadowRoot:!0,class:"",zIndex:1e4,only:!1,direction:"right",size:"30%",lockScroll:!1,closeOnPressEscape:!0,openDelay:0,closeDelay:0,borderRadius:0,style:null,beforeAppendToPageCallBack(){},forbiddenScroll:!1});class PopsDrawer{constructor(w){const A=popsUtils.getRandomGUID(),C="drawer";let T=PopsDrawerConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.drawerCSS]);let U=PopsHandler.handleZIndex(T.zIndex),L=PopsElementHandler.getMaskHTML(A,U),_=PopsElementHandler.getHeaderBtnHTML(C,T),I=PopsElementHandler.getBottomBtnHTML(C,T),{headerStyle:$,headerPStyle:P}=PopsElementHandler.getHeaderStyle(C,T),{contentStyle:H,contentPStyle:V}=PopsElementHandler.getContentStyle(C,T),D=PopsElementHandler.getAnimHTML(A,C,T,`
            ${T.title.enable?`
            <div class="pops-${C}-title" style="${$}">
                ${T.title.html?T.title.text:`<p 
                            pops
                            style="
                                width: 100%;
                                text-align: ${T.title.position};
                                ${P}">${T.title.text}</p>`}
                ${_}
            </div>
            `:""}
            
            <div class="pops-${C}-content" style="${H}">
                ${T.content.html?T.content.text:`<p pops style="${V}">${T.content.text}</p>`}
            </div>

            ${I}
            `,I,U),N=PopsElementHandler.parseElement(D),{popsElement:R,headerCloseBtnElement:F,btnCancelElement:W,btnOkElement:X,btnOtherElement:Q}=PopsHandler.handleQueryElement(N,C),G=R,tt=F,et=W,nt=X,bt=Q,Y=null,z=[N];T.mask.enable&&(Y=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:N,maskHTML:L}).maskElement,z.push(Y));let q=PopsHandler.handleEventDetails(A,E,k,C,N,G,Y,T);return G.setAttribute("direction",T.direction),T.direction==="top"?(G.style.setProperty("height","0"),G.style.setProperty("border-radius",`0px 0px ${T.borderRadius}px ${T.borderRadius}px`)):T.direction==="bottom"?(G.style.setProperty("height","0"),G.style.setProperty("border-radius",`${T.borderRadius}px ${T.borderRadius}px 0px 0px`)):T.direction==="left"?(G.style.setProperty("width","0"),G.style.setProperty("border-radius",`0px ${T.borderRadius}px 0px ${T.borderRadius}px`)):T.direction==="right"&&(G.style.setProperty("width","0"),G.style.setProperty("border-radius",`${T.borderRadius}px 0px ${T.borderRadius}px 0px`)),T.closeOnPressEscape&&PopsHandler.handleKeyboardEvent("Escape",[],function(){q.close();}),[{type:"close",ele:tt},{type:"cancel",ele:et},{type:"ok",ele:nt},{type:"other",ele:bt}].forEach(K=>{PopsHandler.handleClickEvent(K.type,K.ele,q,rt=>{typeof T.btn[K.type].callback=="function"&&T.btn[K.type].callback(rt);});}),z.forEach(K=>{K.style.setProperty("display","none"),["top"].includes(T.direction)?(G.style.setProperty("height",T.size.toString()),G.style.setProperty("transform","translateY(-100%)")):["bottom"].includes(T.direction)?(G.style.setProperty("height",T.size.toString()),G.style.setProperty("transform","translateY(100%)")):["left"].includes(T.direction)?(G.style.setProperty("width",T.size.toString()),G.style.setProperty("transform","translateX(-100%)")):["right"].includes(T.direction)&&(G.style.setProperty("width",T.size.toString()),G.style.setProperty("transform","translateX(100%)")),K.style.setProperty("display","");}),popsDOMUtils.append(k,z),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E),setTimeout(()=>{setTimeout(()=>{G.style.setProperty("transform","");},T.openDelay);},50),Y!=null&&N.after(Y),PopsHandler.handlePush(C,{guid:A,animElement:N,popsElement:G,maskElement:Y,$shadowContainer:E,$shadowRoot:k}),PopsHandler.handleResultDetails(q)}}const PopsFolderConfig=()=>({title:{text:"pops.Folder",position:"center",html:!1,style:""},sort:{name:"latestTime",isDesc:!1,callback(){}},folder:[{fileName:"测试文件夹",fileSize:0,fileType:"",createTime:0,latestTime:0,isFolder:!0,index:0,clickEvent(){return [{fileName:"内部-测试文件.zip",fileSize:1025e3,fileType:"zip",createTime:1702038410440,latestTime:1702039602126,isFolder:!1,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}]}},{fileName:"测试文件.apk",fileSize:30125682,fileType:"apk",createTime:1702036410440,latestTime:1702039410440,isFolder:!1,index:1,clickEvent(){return console.log("下载文件：",this.fileName),"https://update.greasyfork.org/scripts/456485/pops.js"}}],btn:{merge:!1,mergeReverse:!1,reverse:!1,position:"flex-end",ok:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"确定",type:"primary",callback(S){S.close();}},cancel:{enable:!0,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"关闭",type:"default",callback(S){S.close();}},other:{enable:!1,size:void 0,icon:void 0,rightIcon:!1,iconIsLoading:!1,text:"其它按钮",type:"default",callback(S){S.close();}},close:{enable:!0,callback(S){S.close();}}},useShadowRoot:!0,class:"",only:!1,width:"500px",height:"400px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,beforeAppendToPageCallBack(){}}),Folder_ICON={folder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",mp4:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",apk:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",gif:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",txt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",exe:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",qm:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",php:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",pdf:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",Null:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",ipa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",doc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",xls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",ppt:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",html:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",js:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",css:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",epub:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",psd:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",dwg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII="};class PopsFolder{constructor(w){const A=popsUtils.getRandomGUID(),C="folder";let T=PopsFolderConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.folderCSS]),Folder_ICON.docx=Folder_ICON.doc,Folder_ICON.rtf=Folder_ICON.doc,Folder_ICON.xlsx=Folder_ICON.xls,Folder_ICON.pptx=Folder_ICON.ppt,Folder_ICON.dmg=Folder_ICON.ipa,Folder_ICON.json=Folder_ICON.js;let U=["rar","7z","arj","bz2","cab","iso","jar","lz","lzh","tar","uue","xz","z","zipx","zst","001"],L=["jpg","jpeg","ico","webp"],_=["htm","py","vue","bat","sh","vbs","java","kt"],I=["apk","apkm","xapk"];U.forEach(ot=>{Folder_ICON[ot]=Folder_ICON.zip;}),L.forEach(ot=>{Folder_ICON[ot]=Folder_ICON.png;}),_.forEach(ot=>{Folder_ICON[ot]=Folder_ICON.html;}),I.forEach(ot=>{Folder_ICON[ot]=Folder_ICON.apk;}),w!=null&&w.folder&&(T.folder=w.folder);let $=PopsHandler.handleZIndex(T.zIndex),P=PopsElementHandler.getMaskHTML(A,$),H=PopsElementHandler.getHeaderBtnHTML(C,T),V=PopsElementHandler.getBottomBtnHTML(C,T),{headerStyle:D,headerPStyle:N}=PopsElementHandler.getHeaderStyle(C,T),R=PopsElementHandler.getAnimHTML(A,C,T,`
            <div class="pops-folder-title" style="text-align: ${T.title.position};${D}">
                            ${T.title.html?T.title.text:`<p pops style="${N}">${T.title.text}</p>`}
                ${H}
                        </div>
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
                        <!-- <col width="8%"> --!>
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
                        <!-- <col width="8%"> --!>
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
            </div>
            ${V}
            `,V,$),F=PopsElementHandler.parseElement(R),{popsElement:W,titleElement:X,contentElement:Q,folderListBodyElement:G,folderFileListBreadcrumbPrimaryElement:tt,headerCloseBtnElement:et,btnOkElement:nt,btnCancelElement:bt,btnOtherElement:Y,folderListSortFileNameElement:z,folderListSortLatestTimeElement:q,folderListSortFileSizeElement:J}=PopsHandler.handleQueryElement(F,C),K=null,rt=[F];T.mask.enable&&(K=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:F,maskHTML:P}).maskElement,rt.push(K));let ct=PopsHandler.handleEventDetails(A,E,k,C,F,W,K,T);PopsHandler.handleClickEvent("close",et,ct,T.btn.close.callback),PopsHandler.handleClickEvent("ok",nt,ct,T.btn.ok.callback),PopsHandler.handleClickEvent("cancel",bt,ct,T.btn.cancel.callback),PopsHandler.handleClickEvent("other",Y,ct,T.btn.other.callback),popsDOMUtils.append(k,rt),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E),K!=null&&F.after(K),T.folder.sort();function yt(ot,at="-",it="-",gt=!1){let st=ot,dt=at,Ct=it,wt=popsDOMUtils.createElement("tr"),Tt=popsDOMUtils.createElement("td"),xt=popsDOMUtils.createElement("td"),Lt=popsDOMUtils.createElement("td"),Nt="",Ot=Folder_ICON.folder;if(gt)at="",it="";else {Ot="",typeof at=="number"&&(at=popsUtils.formatTime(at)),typeof it=="number"&&(it=popsUtils.formatByteToSize(it));for(let ee in Folder_ICON)if(ot.toLowerCase().endsWith("."+ee)){Nt=ee,Ot=Folder_ICON[ee];break}Ot||(Nt="Null",Ot=Folder_ICON.Null);}wt.className="pops-folder-list-table__body-row",Tt.className="pops-folder-list-table__body-td",xt.className="pops-folder-list-table__body-td",Lt.className="pops-folder-list-table__body-td",Tt.innerHTML=`
            <div class="pops-folder-list-file-name cursor-p">
                <div>
                    <img src="${Ot}" alt="${Nt}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
                    <a title="${ot}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
                    ${ot}
                    </a>
                </div>
            </div>
            `,xt.innerHTML=`
            <div class="pops-folder-list__time">
                <span>${at}</span>
            </div>
            `,Lt.innerHTML=`
            <div class="pops-folder-list-format-size">
                <span>${it}</span>
            </div>
            `;let Yt={fileName:st,latestTime:dt,fileSize:Ct,isFolder:gt};return Tt.__value__=Yt,xt.__value__=Yt,Lt.__value__=Yt,wt.__value__=Yt,wt.appendChild(Tt),wt.appendChild(xt),wt.appendChild(Lt),{folderELement:wt,fileNameElement:Tt,fileTimeElement:xt,fileFormatSize:Lt}}function kt(ot,at="-",it="-",gt=!1){let st=ot,dt=at,Ct=it,wt=popsDOMUtils.createElement("tr"),Tt=popsDOMUtils.createElement("td"),xt="",Lt=Folder_ICON.folder;if(gt)at="",it="";else {Lt="",typeof at=="number"&&(at=popsUtils.formatTime(at)),typeof it=="number"&&(it=popsUtils.formatByteToSize(it));for(let Ot in Folder_ICON)if(ot.toLowerCase().endsWith("."+Ot)){xt=Ot,Lt=Folder_ICON[Ot];break}Lt||(xt="Null",Lt=Folder_ICON.Null);}wt.className="pops-folder-list-table__body-row",Tt.className="pops-folder-list-table__body-td",Tt.innerHTML=`
            <div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
                <img src="${Lt}" alt="${xt}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
                <div>
                    <a title="${ot}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
                        ${ot}
                    </a>
                    <span>${at} ${it}</span>
                </div>
            </div>
            `;let Nt={fileName:st,latestTime:dt,fileSize:Ct,isFolder:gt};return Tt.__value__=Nt,wt.__value__=Nt,wt.appendChild(Tt),{folderELement:wt,fileNameElement:Tt}}function At(){G.innerHTML="";}function ht(){return popsDOMUtils.createElement("div",{className:"iconArrow"})}function Mt(ot,at){return popsDOMUtils.createElement("span",{className:"pops-folder-file-list-breadcrumb-allFiles cursor-p",innerHTML:`<a>${ot}</a>`,_config_:at},{title:"name"})}function Et(ot,at,it){At();let st=ot.target.closest("span.pops-folder-file-list-breadcrumb-allFiles");if(st)for(;st.nextElementSibling;)st.nextElementSibling.remove();else console.error("获取导航按钮失败");let dt=pops.loading({parent:Q,content:{text:"获取文件列表中..."},mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},addIndexCSS:!1});Zt(it),dt.close();}async function ce(ot,at){At();let it=pops.loading({parent:Q,content:{text:"获取文件列表中..."},mask:{enable:!0},addIndexCSS:!1});if(typeof at.clickEvent=="function"){let gt=await at.clickEvent(ot,at);tt.appendChild(ht());let st=Mt(at.fileName,gt);tt.appendChild(st),popsDOMUtils.on(st,"click",function(dt){Et(dt,!1,gt);}),Zt(gt);}it.close();}function pe(ot,at){popsDOMUtils.on(ot,"click",async function(it){it==null||it.preventDefault(),it==null||it.stopPropagation(),it==null||it.stopImmediatePropagation();let gt=ot.querySelector("a");if(typeof at.clickEvent=="function"){let st=await at.clickEvent(it,at);if(st!=null&&typeof st=="object"&&!Array.isArray(st)&&typeof st.url=="string"&&st.url.trim()!==""&&(gt.setAttribute("href",st.url),gt.setAttribute("target","_blank"),st.autoDownload))if((st.mode==null||st.mode==="")&&(st.mode="aBlank"),st.mode==="a"||st.mode==="aBlank"){let dt=document.createElement("a");st.mode==="aBlank"&&dt.setAttribute("target","_blank"),dt.href=st.url,dt.click();}else if(st.mode==="open"||st.mode==="openBlank")st.mode==="openBlank"?globalThis.open(st.url,"_blank"):globalThis.open(st.url);else if(st.mode==="iframe"){let dt=document.createElement("iframe");dt.src=st.url,dt.onload=function(){setTimeout(()=>{dt.remove();},1e3);},k.appendChild(dt),setTimeout(()=>{dt.remove();},3*60*1e3);}else console.error("未知的下载模式",st);}});}function re(ot,at="fileName",it=!1){if(at==="fileName"){let gt=ot.filter(dt=>dt.isFolder),st=ot.filter(dt=>!dt.isFolder);return gt.sort((dt,Ct)=>{let wt=dt[at].toString(),Tt=Ct[at].toString(),xt=wt.localeCompare(Tt);return it&&(xt>0?xt=-1:xt<0&&(xt=1)),xt}),st.sort((dt,Ct)=>{let wt=dt[at].toString(),Tt=Ct[at].toString(),xt=wt.localeCompare(Tt);return it&&(xt>0?xt=-1:xt<0&&(xt=1)),xt}),it?[...st,...gt]:[...gt,...st]}else return ot.sort((gt,st)=>{let dt=gt[at],Ct=st[at];return at==="fileSize"?(dt=parseFloat(dt.toString()),Ct=parseFloat(Ct.toString())):at==="latestTime"&&(dt=new Date(dt).getTime(),Ct=new Date(Ct).getTime()),dt>Ct?it?-1:1:dt<Ct?it?1:-1:0}),ot}function Zt(ot){re(ot,T.sort.name,T.sort.isDesc),ot.forEach(at=>{if(at.isFolder){let{folderELement:it,fileNameElement:gt}=pops.isPhone()?kt(at.fileName,"","",!0):yt(at.fileName,"","",!0);popsDOMUtils.on(gt,"click",st=>{ce(st,at);}),G.appendChild(it);}else {let{folderELement:it,fileNameElement:gt}=pops.isPhone()?kt(at.fileName,at.latestTime,at.fileSize,!1):yt(at.fileName,at.latestTime,at.fileSize,!1);pe(gt,at),G.appendChild(it);}});}Zt(T.folder);let oe=tt.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");oe._config_=T.folder,popsDOMUtils.on(oe,"click",ot=>{Et(ot,!0,T.folder);});function de(){[...Array.from(z.querySelectorAll(".pops-folder-icon-active")),...Array.from(q.querySelectorAll(".pops-folder-icon-active")),...Array.from(J.querySelectorAll(".pops-folder-icon-active"))].forEach(ot=>ot.classList.remove("pops-folder-icon-active"));}function fe(ot,at,it){de(),it?at.classList.add("pops-folder-icon-active"):ot.classList.add("pops-folder-icon-active");}function te(ot,at,it){at.notChangeSortRule||(T.sort.name=it,T.sort.isDesc=!T.sort.isDesc);let gt=ot.querySelector(".pops-folder-icon-arrow-up"),st=ot.querySelector(".pops-folder-icon-arrow-down");if(fe(gt,st,T.sort.isDesc),typeof T.sort.callback=="function"&&T.sort.callback(ot,at,T.sort.name,T.sort.isDesc))return;let dt=[];Array.from(G.children).forEach(wt=>{let Tt=wt.__value__;Tt.target=wt,dt.push(Tt);}),re(dt,T.sort.name,T.sort.isDesc).forEach(wt=>{G.appendChild(wt.target);});}return popsDOMUtils.on(z.closest("th"),"click",function(ot){te(z,ot,"fileName");},{capture:!0}),popsDOMUtils.on(q.closest("th"),"click",void 0,function(ot){te(q,ot,"latestTime");},{capture:!0}),popsDOMUtils.on(J.closest("th"),"click",void 0,function(ot){te(J,ot,"fileSize");},{capture:!0}),T.sort.name==="fileName"?popsDOMUtils.trigger(z,"click",{notChangeSortRule:!0}):T.sort.name==="latestTime"?popsDOMUtils.trigger(q,"click",{notChangeSortRule:!0}):T.sort.name==="fileSize"&&popsDOMUtils.trigger(J,"click",{notChangeSortRule:!0}),T.drag&&PopsInstanceUtils.drag(W,{dragElement:X,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handlePush(C,{guid:A,animElement:F,popsElement:W,maskElement:K,$shadowContainer:E,$shadowRoot:k}),PopsHandler.handleResultDetails(ct)}}const PopsPanelConfig=()=>({title:{text:"默认标题",position:"center",html:!1,style:""},content:[{id:"whitesev-panel-config-1",title:"菜单配置1",headerTitle:"菜单配置1",isDefault:!1,attributes:[{"data-test":"test","data-test-2":"test2"}],forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},disabled:!1,attributes:[],getValue(){return !0},callback(S,w){console.log("按钮开启状态：",w);}},{className:"panel-slider",text:"slider",type:"slider",props:{},attributes:[],getValue(){return 50},callback(S,w){console.log("滑块当前数值：",w);},min:1,max:100},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"eleme",buttonIconIsLoading:!0,buttonType:"warning",buttonText:"warning按钮",callback(S){console.log("点击按钮",S);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:!0,buttonType:"danger",buttonText:"danger按钮",callback(S){console.log("点击按钮",S);}},{className:"panel-button",text:"button",type:"button",attributes:[],props:{},buttonIcon:"upload",buttonIconIsLoading:!1,buttonType:"info",buttonText:"info按钮",callback(S){console.log("点击按钮",S);}}]}]},{id:"whitesev-panel-config-2",title:"菜单配置2",headerTitle:"菜单配置2",isDefault:!0,attributes:[{"data-value":"value","data-value-2":"value2"}],forms:[{className:"panel-input",text:"input",type:"input",props:{},attributes:[],getValue(){return "50"},callback(S,w){console.log("输入框内容改变：",w);},placeholder:"请输入内容"},{className:"panel-input-password",text:"input-password",type:"input",props:{},attributes:[],getValue(){return "123456"},callback(S,w){console.log("密码输入框内容改变：",w);},isPassword:!0,placeholder:"请输入密码"},{className:"panel-textarea",text:"textarea",type:"textarea",props:{},attributes:[],getValue(){return "50"},callback(S,w){console.log("textarea输入框内容改变：",w);},placeholder:"请输入内容"},{className:"panel-select",text:"select",type:"select",props:{},attributes:[],getValue(){return 50},callback(S,w,A){console.log(`select当前选项：${w}，当前选项文本：${A}`);},data:[{value:"all",text:"所有",disable(){return !1}},{value:"text",text:"文本",disable(){return !1}},{value:"html",text:"超文本",disable(){return !1}}]},{className:"panel-select-multiple",type:"select-multiple",text:"select-multiple",props:{},attributes:[],placeholder:"请至少选择一个选项",getValue(){return ["select-1","select-2"]},callback(S){console.log("select值改变，多选信息",S);},clickCallBack(S,w){console.log("点击",S,w);},closeIconClickCallBack(S,w){console.log("点击关闭图标的事件",w);},data:[{value:"select-1",text:"单选1",isHTML:!1,disable(){return !1}},{value:"select-2",text:"单选2",isHTML:!1,disable(){return !1}},{value:"select-3",text:"单选3",isHTML:!1,disable(){return !1}},{value:"select-4",text:"单选4",isHTML:!1,disable(){return !1}},{value:"select-5",text:"单选5",isHTML:!1,disable(){return !1}}]},{type:"forms",text:"deep菜单",forms:[{type:"deepMenu",className:"panel-deepMenu",text:"deepMenu",description:"二级菜单",rightText:"自定义配置",arrowRightIcon:!0,afterAddToUListCallBack(S,w){console.log(S,w);},clickCallBack(S,w){console.log("进入子配置",S,w);},forms:[{className:"forms-1",text:"区域设置",type:"forms",attributes:[],forms:[{className:"panel-switch",text:"switch",type:"switch",props:{},attributes:[],getValue(){return !0},callback(S,w){console.log("按钮开启状态：",w);}},{className:"panel-slider",text:"slider",props:{},type:"slider",attributes:[],getValue(){return 50},callback(S,w){console.log("滑块当前数值：",w);},min:1,max:100},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"eleme",buttonIconIsLoading:!0,buttonType:"warning",buttonText:"warning按钮",callback(S){console.log("点击按钮",S);}},{className:"panel-button",text:"button",type:"button",props:{},attributes:[],buttonIcon:"chromeFilled",buttonIconIsLoading:!0,buttonType:"danger",buttonText:"danger按钮",callback(S){console.log("点击按钮",S);}},{className:"panel-button",text:"button",props:{},type:"button",attributes:[],buttonIcon:"upload",buttonIconIsLoading:!1,buttonType:"info",buttonText:"info按钮",callback(S){console.log("点击按钮",S);}}]}]}]},{type:"forms",isFold:!0,text:"折叠菜单",afterAddToUListCallBack(S,w){console.log(S,w);},forms:[{className:"panel-switch",text:"switch",props:{},type:"switch",attributes:[],getValue(){return !0},callback(S,w){console.log("按钮开启状态：",w);}}]}]}],btn:{close:{enable:!0,callback(S){S.close();}}},mask:{enable:!1,clickEvent:{toClose:!1,toHide:!1},clickCallBack:null},useShadowRoot:!0,class:"",mobileClassName:"pops-panel-is-mobile",isMobile:!1,only:!1,width:"700px",height:"500px",position:"center",animation:"pops-anim-fadein-zoom",zIndex:1e4,drag:!1,dragLimit:!0,dragExtraDistance:3,dragMoveCallBack(){},dragEndCallBack(){},forbiddenScroll:!1,style:null,beforeAppendToPageCallBack(){}}),PopsMathFloatUtils={isFloat(S){return Number(S)===S&&S%1!==0},add(S,w){let A,C,T;try{A=S.toString().split(".")[1].length;}catch{A=0;}try{C=w.toString().split(".")[1].length;}catch{C=0;}return T=Math.pow(10,Math.max(A,C)),Math.round(S*T+w*T)/T},sub(S,w){let A,C,T;try{A=S.toString().split(".")[1].length;}catch{A=0;}try{C=w.toString().split(".")[1].length;}catch{C=0;}T=Math.pow(10,Math.max(A,C));let E=A>=C?A:C;return (Math.round(S*T-w*T)/T).toFixed(E)},division(S,w){let A,C,T,E;try{A=S.toString().split(".")[1].length;}catch{A=0;}try{C=w.toString().split(".")[1].length;}catch{C=0;}return T=Number(S.toString().replace(".","")),E=Number(w.toString().replace(".","")),T/E*Math.pow(10,C-A)}},PanelHandleContentDetails=()=>({asideULElement:null,sectionContainerHeaderULElement:null,sectionContainerULElement:null,$el:{$content:null,$contentAside:null,$contentSectionContainer:null},init(S){this.$el=null,this.$el={...S.$el},this.asideULElement=this.$el.$contentAside.querySelector("ul"),this.sectionContainerHeaderULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[0],this.sectionContainerULElement=this.$el.$contentSectionContainer.querySelectorAll("ul")[1];let w=null,A=!1;S.config.content.forEach(C=>{let T=this.createAsideItem(C);if(this.setAsideItemClickEvent(T,C),this.asideULElement.appendChild(T),w==null){let E=!1;typeof C.isDefault=="function"?E=!!C.isDefault():E=!!C.isDefault,E&&(w=T,A=!!C.scrollToDefaultView);}typeof C.afterRender=="function"&&C.afterRender({asideConfig:C,$asideLiElement:T});}),w==null&&this.asideULElement.children.length&&(w=this.asideULElement.children[0]),w?(w.click(),A&&(w==null||w.scrollIntoView())):console.error("pops.panel：左侧容器没有项");},clearContainer(){var S;this.sectionContainerHeaderULElement.innerHTML="",this.sectionContainerULElement.innerHTML="",(S=this.$el.$content)==null||S.querySelectorAll("section.pops-panel-deepMenu-container").forEach(w=>w.remove());},clearAsideItemIsVisited(){this.$el.$contentAside.querySelectorAll(".pops-is-visited").forEach(S=>{popsDOMUtils.removeClassName(S,"pops-is-visited");});},setAsideItemIsVisited(S){popsDOMUtils.addClassName(S,"pops-is-visited");},setElementAttributes(S,w){w!=null&&(Array.isArray(w)?w.forEach(A=>{this.setElementAttributes(S,A);}):Object.keys(w).forEach(A=>{S.setAttribute(A,w[A]);}));},setElementProps(S,w){w!=null&&Object.keys(w).forEach(A=>{Reflect.set(S,A,w[A]);});},setElementClassName(S,w){w!=null&&(typeof w=="function"&&(w=w()),typeof w=="string"?w.split(" ").forEach(C=>{S.classList.add(C);}):Array.isArray(w)&&w.forEach(A=>{this.setElementClassName(S,A);}));},createAsideItem(S){let w=document.createElement("li");return w.id=S.id,w.__forms__=S.forms,w.innerHTML=S.title,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props),w},createSectionContainerItem_switch(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
				${A}
			</div>
			<div class="pops-panel-switch">
				<input class="pops-panel-switch__input" type="checkbox">
				<span class="pops-panel-switch__core">
					<div class="pops-panel-switch__action">
					</div>
				</span>
			</div>`;const C={[Symbol.toStringTag]:"PopsPanelSwitch",$data:{value:!!S.getValue()},$ele:{switch:w.querySelector(".pops-panel-switch"),input:w.querySelector(".pops-panel-switch__input"),core:w.querySelector(".pops-panel-switch__core")},init(){this.setStatus(this.$data.value),S.disabled&&this.disable(),this.setClickEvent();},setClickEvent(){let T=this;popsDOMUtils.on(this.$ele.core,"click",void 0,function(E){T.$ele.input.disabled||T.$ele.switch.hasAttribute("data-disabled")||(T.$data.value=T.getStatus(),T.setStatus(T.$data.value),typeof S.callback=="function"&&S.callback(E,T.$data.value));});},setStatus(T=!1){T=!!T,this.$ele.input.checked=T,T?popsDOMUtils.addClassName(this.$ele.switch,"pops-panel-switch-is-checked"):popsDOMUtils.removeClassName(this.$ele.switch,"pops-panel-switch-is-checked");},getStatus(){let T=!1;return popsDOMUtils.containsClassName(this.$ele.switch,"pops-panel-switch-is-checked")||(T=!0),T},disable(){this.$ele.input.disabled=!0,this.$ele.switch.setAttribute("data-disabled","true");},notDisable(){this.$ele.input.disabled=!1,this.$ele.switch.removeAttribute("data-disabled");}};return C.init(),w["data-switch"]=C,w},createSectionContainerItem_slider(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
				${A}
			</div>
			<div class="pops-panel-slider">
				<input type="range" min="${S.min}" max="${S.max}">
			</div>`;let C=w.querySelector(".pops-panel-slider input[type=range]");S.step&&C.setAttribute("step",S.step.toString()),C.value=S.getValue().toString();let T=function(k){return typeof S.getToolTipContent=="function"?S.getToolTipContent(k):k},E=pops.tooltip({target:C.parentElement,content:()=>T(C.value),zIndex:()=>PopsInstanceUtils.getPopsMaxZIndex().zIndex,className:"github-tooltip",alwaysShow:!1,only:!1,position:"top",arrowDistance:10});return popsDOMUtils.on(C,["input","propertychange"],void 0,function(k){E.toolTip.changeContent(T(C.value)),typeof S.callback=="function"&&S.callback(k,k.target.value);}),w},createSectionContainerItem_slider_new(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text" style="flex: 1;">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
				${A}
			</div>
			<div class="pops-slider pops-slider-width">
				<div class="pops-slider__runway">
					<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
					<div class="pops-slider__button-wrapper" style="left: 0%">
						<div class="pops-slider__button"></div>
					</div>
				</div>
			</div>`;const C={[Symbol.toStringTag]:"PopsPanelSlider",value:S.getValue(),min:S.min,max:S.max,step:S.step||1,$data:{isMove:!1,isInitDragPosition:!1,isCheckingStopDragMove:!1,totalWidth:0,stepPx:0,dragWidth:0,dragPercent:0,stepBlockMap:new Map,tooltip:null},$ele:{slider:w.querySelector(".pops-slider"),runAway:w.querySelector(".pops-slider__runway"),bar:w.querySelector(".pops-slider__bar"),buttonWrapper:w.querySelector(".pops-slider__button-wrapper"),button:w.querySelector(".pops-slider__button")},$interval:{isCheck:!1},$tooltip:null,init(){this.initEleData(),this.setToolTipEvent(),this.setPanEvent(),this.setRunAwayClickEvent(),this.intervalInit(),S.disabled&&this.disableDrag();},intervalInit(T=200,E=1e4){if(this.$interval.isCheck)return;this.$interval.isCheck=!0;let k=!1,U=this.$data.totalWidth,L,_=setInterval(()=>{k?(this.$interval.isCheck=!1,clearTimeout(L),clearInterval(_)):(this.initTotalWidth(),this.$data.totalWidth!==0&&(k=!0,this.$data.totalWidth!==U&&(PopsMathFloatUtils.isFloat(this.step)?this.initFloatStepMap():this.initStepMap(),this.initSliderPosition())));},T);L=setTimeout(()=>{clearInterval(_);},E);},initEleData(){this.$ele.slider.setAttribute("data-min",this.min.toString()),this.$ele.slider.setAttribute("data-max",this.max.toString()),this.$ele.slider.setAttribute("data-value",this.value.toString()),this.$ele.slider.setAttribute("data-step",this.step.toString()),this.$ele.slider["data-min"]=this.min,this.$ele.slider["data-max"]=this.max,this.$ele.slider["data-value"]=this.value,this.$ele.slider["data-step"]=this.step;},initTotalWidth(){this.$data.totalWidth=popsDOMUtils.width(this.$ele.runAway);},initStepMap(){let T=0,E=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/E;let k=0;for(let U=this.min;U<=this.max;U+=this.step){let L=this.formatValue(U),_={};L===this.min?_={value:L,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:_={value:L,px:k,pxLeft:k-this.$data.stepPx/2,pxRight:k+this.$data.stepPx/2,percent:k/this.$data.totalWidth},this.$data.stepBlockMap.set(T,_),T++,k+=this.$data.stepPx;}},initFloatStepMap(){let T=0,E=(this.max-this.min)/this.step;this.$data.stepPx=this.$data.totalWidth/E;let k=0;for(let U=this.min;U<=this.max;U=PopsMathFloatUtils.add(U,this.step)){let L=this.formatValue(U),_={};L===this.min?_={value:L,px:0,pxLeft:0,pxRight:this.$data.stepPx/2,percent:0}:_={value:L,px:k,pxLeft:k-this.$data.stepPx/2,pxRight:k+this.$data.stepPx/2,percent:k/this.$data.totalWidth},this.$data.stepBlockMap.set(T,_),T++,k+=this.$data.stepPx;}},initSliderPosition(){let T=0;for(const[,E]of this.$data.stepBlockMap.entries())if(E.value==this.value){T=E.percent,this.$data.dragWidth=E.px;break}T=this.formatValue(T*100),this.setSliderPosition(T);},isFloat(T){return Number(T)===T&&T%1!==0},valueChangeCallBack(T,E){typeof S.callback=="function"&&S.callback(T,E);},getDragInfo(T){let E=this.$data.stepBlockMap.get(0);for(const[,k]of this.$data.stepBlockMap.entries())if(k.pxLeft<=T&&T<k.pxRight){E=k;break}return E},getSliderPositonPercent(T){return T/this.$data.totalWidth},formatValue(T){return PopsMathFloatUtils.isFloat(this.step)?T=parseFloat(T.toFixed(2)):T=parseInt(T.toString()),T},setSliderPosition(T){parseInt(T.toString())===1&&(T=1),T>1&&(T=T/100),this.$ele.buttonWrapper.style.left=`${T*100}%`,this.$ele.bar.style.width=`${T*100}%`;},disableDrag(){this.$ele.runAway.classList.add("pops-slider-is-disabled");},allowDrag(){this.$ele.runAway.classList.remove("pops-slider-is-disabled");},isDisabledDrag(){return this.$ele.runAway.classList.contains("pops-slider-is-disabled")},setRunAwayClickEvent(){popsDOMUtils.on(this.$ele.runAway,"click",void 0,T=>{if(T.target!==this.$ele.runAway&&T.target!==this.$ele.bar)return;let E=parseFloat(T.offsetX);this.dragStartCallBack(),this.dragMoveCallBack(T,E,this.value),this.dragEndCallBack(E);},{capture:!1});},dragStartCallBack(){if(!this.$data.isMove){if(this.isDisabledDrag())return !1;this.$data.isMove=!0;}return !0},dragMoveCallBack(T,E,k){let U=0;if(E<=0)U=0,this.value=this.min;else if(E>=this.$data.totalWidth)U=1,this.value=this.max;else {const L=this.getDragInfo(E);U=L.percent,this.value=this.formatValue(L.value);}this.$data.dragPercent=U,this.setSliderPosition(this.$data.dragPercent),this.showToolTip(),k!==this.value&&this.valueChangeCallBack(T,this.value);},dragEndCallBack(T){this.$data.isMove=!1,T<=0?this.$data.dragWidth=0:T>=this.$data.totalWidth?this.$data.dragWidth=this.$data.totalWidth:this.$data.dragWidth=T,this.closeToolTip();},setPanEvent(){const T=popsUtils.AnyTouch();this.$tooltip=new T(this.$ele.button,{preventDefault(){return !1}});let E=0;this.$tooltip.on("at:move",k=>{if(!this.dragStartCallBack())return;let U=this.value;const L=this.$ele.runAway.getBoundingClientRect();let _=k.x-(L.left+globalThis.screenX);_<=0?_=0:_>=L.width&&(_=L.width),E=_,this.dragMoveCallBack(k,E,U);}),this.$tooltip.on("at:end",k=>{this.dragEndCallBack(E);});},showToolTip(){this.$data.tooltip.toolTip.show();},closeToolTip(){this.$data.tooltip.toolTip.close();},checkStopDragMove(){if(this.$data.isCheckingStopDragMove)return;this.$data.isCheckingStopDragMove=!0;let T=setInterval(()=>{this.$data.isMove||(this.$data.isCheckingStopDragMove=!1,this.closeToolTip(),clearInterval(T));},200);setTimeout(()=>{this.$data.isCheckingStopDragMove=!1,clearInterval(T);},2e3);},setToolTipEvent(){function T(){return typeof S.getToolTipContent=="function"?S.getToolTipContent(C.value):C.value}let E=pops.tooltip({target:this.$ele.button,content:T,zIndex:()=>PopsInstanceUtils.getPopsMaxZIndex().zIndex,isFixed:!0,className:"github-tooltip",only:!1,eventOption:{capture:!0,passive:!0},showBeforeCallBack:()=>{this.intervalInit();},showAfterCallBack:k=>{E.toolTip.changeContent(T());},closeBeforeCallBack:()=>{if(this.$data.isMove)return this.checkStopDragMove(),!1},alwaysShow:!1,position:"top",arrowDistance:10});this.$data.tooltip=E;}};return C.init(),w["data-slider"]=C,w},createSectionContainerItem_input(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="text";S.isPassword?A="password":S.isNumber&&(A="number");let C="";S.description&&(C=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
			${C}
			</div>
			<div class="pops-panel-input pops-user-select-none">
				<input type="${A}" placeholder="${S.placeholder}">
			</div>
			`;const T={[Symbol.toStringTag]:"PopsPanelInput",$ele:{panelInput:w.querySelector(".pops-panel-input"),input:w.querySelector("input"),inputSpanIcon:document.createElement("span"),inputSpanIconInner:null,icon:null},$data:{value:S.getValue(),isView:!1},init(){this.initEle(),this.setInputValue(this.$data.value),S.isPassword?(this.setCircleIcon(pops.config.iconSVG.view),this.setCircleIconClickEvent()):this.$ele.input.value!=""&&(this.setCircleIcon(pops.config.iconSVG.circleClose),this.setCircleIconClickEvent()),this.setInputChangeEvent(),S.disabled&&this.disable(),typeof S.handlerCallBack=="function"&&S.handlerCallBack(w,this.$ele.input);},initEle(){this.$ele.input.parentElement.insertBefore(this.$ele.inputSpanIcon,this.$ele.input.nextSibling),this.$ele.inputSpanIcon.className="pops-panel-input__suffix",this.$ele.inputSpanIcon.innerHTML=`
					<span class="pops-panel-input__suffix-inner">
						<i class="pops-panel-icon"></i>
					</span>
					`,this.$ele.inputSpanIconInner=this.$ele.inputSpanIcon.querySelector(".pops-panel-input__suffix-inner"),this.$ele.icon=this.$ele.inputSpanIcon.querySelector(".pops-panel-icon");},disable(){this.$ele.input.disabled=!0,this.$ele.panelInput.classList.add("pops-input-disabled");},notDisable(){this.$ele.input.disabled=!1,this.$ele.panelInput.classList.remove("pops-input-disabled");},isDisabled(){return this.$ele.input.disabled},setInputValue(E=""){this.$ele.input.value=E;},setInputType(E="text"){this.$ele.input.setAttribute("type",E);},removeCircleIcon(){this.$ele.icon.innerHTML="";},setCircleIcon(E=pops.config.iconSVG.circleClose){this.$ele.icon.innerHTML=E;},setCircleIconClickEvent(){popsDOMUtils.on(this.$ele.icon,"click",void 0,()=>{this.isDisabled()||(this.removeCircleIcon(),S.isPassword?this.$data.isView?(this.$data.isView=!1,this.setInputType("text"),this.setCircleIcon(pops.config.iconSVG.hide)):(this.$data.isView=!0,this.setInputType("password"),this.setCircleIcon(pops.config.iconSVG.view)):(this.setInputValue(""),this.$ele.input.focus(),this.$ele.input.dispatchEvent(new Event("input"))));});},setInputChangeEvent(){popsDOMUtils.on(this.$ele.input,["input","propertychange"],void 0,E=>{this.$data.value=this.$ele.input.value,S.isPassword||(this.$ele.input.value!==""&&this.$ele.icon.innerHTML===""?(this.setCircleIcon(pops.config.iconSVG.circleClose),this.setCircleIconClickEvent()):this.$ele.input.value===""&&this.removeCircleIcon()),typeof S.callback=="function"&&(S.isNumber?S.callback(E,this.$ele.input.value,this.$ele.input.valueAsNumber):S.callback(E,this.$ele.input.value));});}};return T.init(),w["data-input"]=T,w},createSectionContainerItem_textarea(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
			${A}
			</div>
			<div class="pops-panel-textarea">
				<textarea placeholder="${S.placeholder??""}">
			</textarea>
			</div>
			`;const C={[Symbol.toStringTag]:"PopsPanelTextArea",$ele:{panelTextarea:w.querySelector(".pops-panel-textarea"),textarea:w.querySelector(".pops-panel-textarea textarea")},$data:{value:S.getValue()},init(){this.setValue(this.$data.value),this.setChangeEvent(),S.disabled&&this.disable();},disable(){this.$ele.textarea.setAttribute("disabled","true"),this.$ele.panelTextarea.classList.add("pops-panel-textarea-disable");},notDisable(){this.$ele.textarea.removeAttribute("disabled"),this.$ele.panelTextarea.classList.remove("pops-panel-textarea-disable");},isDisabled(){return this.$ele.textarea.hasAttribute("disabled")||this.$ele.panelTextarea.classList.contains("pops-panel-textarea-disable")},setValue(T){this.$ele.textarea.value=T;},setChangeEvent(){popsDOMUtils.on(this.$ele.textarea,["input","propertychange"],void 0,T=>{this.$data.value=T.target.value,typeof S.callback=="function"&&S.callback(T,T.target.value);});}};return C.init(),w["data-textarea"]=C,w},createSectionContainerItem_select(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
			${A}
			</div>
			<div class="pops-panel-select pops-user-select-none">
				<select></select>
			</div>
			`;const C={[Symbol.toStringTag]:"PopsPanelSelect",$ele:{panelSelect:w.querySelector(".pops-panel-select"),select:w.querySelector(".pops-panel-select select")},$eleKey:{disable:"__disable__",value:"__value__"},$data:{defaultValue:S.getValue()},init(){this.initOption(),this.setChangeEvent(),this.setClickEvent(),S.disabled&&this.disable();},setNodeValue(T,E,k){Reflect.set(T,E,k);},getNodeValue(T,E){return Reflect.get(T,E)},disable(){this.$ele.select.setAttribute("disabled","true"),this.$ele.panelSelect.classList.add("pops-panel-select-disable");},notDisable(){this.$ele.select.removeAttribute("disabled"),this.$ele.panelSelect.classList.remove("pops-panel-select-disable");},isDisabled(){return this.$ele.select.hasAttribute("disabled")||this.$ele.panelSelect.classList.contains("pops-panel-select-disable")},initOption(){S.data.forEach(T=>{let E=document.createElement("option");this.setNodeValue(E,this.$eleKey.value,T.value),this.setNodeValue(E,this.$eleKey.disable,T.disable),T.value===this.$data.defaultValue&&E.setAttribute("selected","true"),E.innerText=T.text,this.$ele.select.appendChild(E);});},setSelectOptionsDisableStatus(){this.$ele.select.options&&this.$ele.select.options.length&&Array.from(this.$ele.select.options).forEach(T=>{this.setOptionDisableStatus(T);});},setOptionDisableStatus(T){let E=!1,k=this.getNodeValue(T,this.$eleKey.disable);if(k==="function"){let U=this.getNodeValue(T,this.$eleKey.value);E=!!k(U);}E?T.setAttribute("disabled","true"):T.removeAttribute("disabled");},getSelectOptionInfo(T){let E=this.getNodeValue(T,this.$eleKey.value),k=T.innerText||T.textContent;return {value:E,text:k,$option:T}},setChangeEvent(){popsDOMUtils.on(this.$ele.select,"change",void 0,T=>{if(this.setSelectOptionsDisableStatus(),typeof S.callback=="function"){let E=T.target[T.target.selectedIndex],k=this.getSelectOptionInfo(E);S.callback(T,k.value,k.text);}});},setClickEvent(){popsDOMUtils.on(this.$ele.select,"click",void 0,T=>{this.setSelectOptionsDisableStatus(),typeof S.clickCallBack=="function"&&S.clickCallBack(T,this.$ele.select);});}};return C.init(),Reflect.set(w,"data-select",C),w},createSectionContainerItem_select_multiple_new(S){let w=document.createElement("li");Reflect.set(w,"__formConfig__",S),this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
			${A}
			</div>
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
			`;const C={[Symbol.toStringTag]:"PopsPanelSelectMultiple",$el:{$container:void 0,$wrapper:void 0,$section:void 0,$selectedInputWrapper:void 0,$selectedPlaceHolderWrapper:void 0,$suffix:void 0,$suffixIcon:void 0},$data:{defaultValue:S.getValue(),selectInfo:[]},init(){this.initDefault(),this.inintEl(),this.initPlaceHolder(),this.updateTagElement(),this.setSelectContainerClickEvent();},initDefault(){S.data.forEach(T=>{this.$data.defaultValue.includes(T.value)&&this.$data.selectInfo.push({text:T.text,value:T.value,isHTML:!!T.isHTML,disable:T.disable});});},inintEl(){this.$el.$container=w.querySelector(".pops-panel-select-multiple"),this.$el.$wrapper=w.querySelector(".el-select__wrapper"),this.$el.$section=w.querySelector(".el-select__selection"),this.$el.$selectedInputWrapper=w.querySelector(".el-select__selected-item.el-select__input-wrapper"),this.$el.$selectedPlaceHolderWrapper=w.querySelector(".el-select__selected-item.el-select__placeholder"),this.$el.$suffix=w.querySelector(".el-select__suffix"),this.$el.$suffixIcon=w.querySelector(".el-select__suffix .el-icon"),this.hideInputWrapper();},initPlaceHolder(){let T="";if(typeof S.placeholder=="string")T=S.placeholder;else if(typeof S.placeholder=="function"){let k=S.placeholder();typeof k=="string"&&(T=k);}let E=popsDOMUtils.createElement("span",{innerText:T});this.$el.$selectedPlaceHolderWrapper.appendChild(E);},updateTagElement(){S.data.forEach(T=>{if(this.$data.selectInfo.find(k=>k.value===T.value)){let k=this.createSelectedItem({text:T.text,isHTML:T.isHTML});this.addSelectedItem(k.$tag),this.setSelectedItemCloseIconClickEvent({$tag:k.$tag,$closeIcon:k.$closeIcon,value:T.value,text:T.text});}}),this.checkTagEmpty();},createSelectedItem(T){const E=popsDOMUtils.createElement("div",{className:"el-select__selected-item el-select__choose_tag",innerHTML:`
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
						`}),k=E.querySelector(".el-select__tags-text"),U=E.querySelector(".el-icon.el-tag__close");return T.isHTML?k.innerHTML=T.text:k.innerText=T.text,{$tag:E,$tagText:k,$closeIcon:U}},addSelectedItem(T){if(this.setSectionIsNear(),this.$el.$section.contains(this.$el.$selectedInputWrapper)){let E=this.$el.$selectedInputWrapper.previousElementSibling;E?popsDOMUtils.after(E,T):popsDOMUtils.before(this.$el.$selectedInputWrapper,T);}else if(this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)){let E=this.$el.$selectedPlaceHolderWrapper.previousElementSibling;E?popsDOMUtils.after(E,T):popsDOMUtils.before(this.$el.$selectedPlaceHolderWrapper,T);}else this.$el.$section.appendChild(T);this.hideInputWrapper(),this.hidePlaceHolderWrapper();},updateSelectTagItem(){this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(T=>{T.remove();}),this.updateTagElement();},selectValueChangeCallBack(T){typeof S.callback=="function"&&S.callback(T||this.$data.selectInfo);},setSelectContainerClickEvent(){const T=this;popsDOMUtils.on(this.$el.$container,"click",E=>{let k=[];k=k.concat(T.$data.selectInfo);function U(Q){Q.classList.add("select-item-is-selected");}function L(Q){Q.classList.remove("select-item-is-selected");}function _(Q){let G=P(Q);k.find(et=>et.value===G.value)||k.push({value:G.value,text:G.text,isHTML:!!G.isHTML,disable:G.disable}),T.selectValueChangeCallBack(k);}function I(Q){let G=P(Q),tt=k.findIndex(et=>et.value===G.value);tt!==-1&&k.splice(tt,1),T.selectValueChangeCallBack(k);}function $(Q){return Q.classList.contains("select-item-is-selected")}function P(Q){return Reflect.get(Q,"data-info")}function H(){return Array.from(X.querySelectorAll(".select-item")).map(Q=>{if($(Q))return P(Q)}).filter(Q=>Q!=null)}function V(Q){let G=popsDOMUtils.createElement("li",{className:"select-item",innerHTML:`
									<span>${Q.text}</span>
								`});return Reflect.set(G,"data-info",Q),G}function D(Q){popsDOMUtils.on(Q,"click",G=>{if(popsDOMUtils.preventEvent(G),typeof S.clickCallBack=="function"){let tt=S.clickCallBack(G,H());if(typeof tt=="boolean"&&!tt)return}$(Q)?(L(Q),I(Q)):(U(Q),_(Q));});}let{style:N,...R}=S.selectConfirmDialogDetails||{},F=popsUtils.assign({title:{text:"请勾选需要选择的选项",position:"center"},content:{text:`
									<ul class="select-container"></ul>
									`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(Q,G){T.$data.selectInfo=[...k],T.updateSelectTagItem(),Q.close();}}},mask:{enable:!0,clickCallBack(Q,G){Q(),T.$data.selectInfo=[...k],T.updateSelectTagItem();},clickEvent:{toClose:!0}},drag:!0,dragLimit:!0,width:"300px",height:"300px",style:`
								.select-container{
									--el-font-size-base: 14px;
									--el-text-color-regular: #606266;
									--el-color-primary: #409eff;
									--el-fill-color-light: #f5f7fa;
								}
								.select-item{
									cursor: pointer;
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
								${N||""}
								`},R),X=pops.alert(F).$shadowRoot.querySelector(".select-container");S.data.forEach(Q=>{let G=V(Q);X.appendChild(G),D(G),k.find(et=>et.value===Q.value)&&U(G);});});},setSelectedItemCloseIconClickEvent(T){popsDOMUtils.on(T.$closeIcon,"click",E=>{if(popsDOMUtils.preventEvent(E),typeof S.closeIconClickCallBack=="function"){let k=S.closeIconClickCallBack(E,{$tag:T.$tag,$closeIcon:T.$closeIcon,value:T.value,text:T.text});if(typeof k=="boolean"&&!k)return}this.removeSelectedItem(T.$tag),this.removeSelectedInfo({value:T.value,text:T.text});},{capture:!0});},checkTagEmpty(){this.$el.$section.querySelectorAll(".el-select__choose_tag").length||(this.showPlaceHolderWrapper(),this.removeSectionIsNear());},removeSelectedItem(T){T.remove(),this.checkTagEmpty();},removeSelectedInfo(T){for(let E=0;E<this.$data.selectInfo.length;E++)if(this.$data.selectInfo[E].value===T.value){this.$data.selectInfo.splice(E,1);break}this.selectValueChangeCallBack();},showInputWrapper(){popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);},hideInputWrapper(){popsDOMUtils.cssHide(this.$el.$selectedInputWrapper,!0);},showPlaceHolderWrapper(){popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);},hidePlaceHolderWrapper(){popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper,!0);},setSectionIsNear(){this.$el.$section.classList.add("is-near");},removeSectionIsNear(){this.$el.$section.classList.remove("is-near");}};return C.init(),Reflect.set(w,"data-select-multiple",C),w},createSectionContainerItem_button(S){let w=document.createElement("li");w.__formConfig__=S,this.setElementClassName(w,S.className),this.setElementAttributes(w,S.attributes),this.setElementProps(w,S.props);let A="";S.description&&(A=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`),w.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
				${A}
			</div>
			<div class="pops-panel-button">
				<button class="pops-panel-button_inner">
					<i class="pops-bottom-icon"></i>
					<span class="pops-panel-button-text"></span>
				</button>
			</div>
			`;const C={[Symbol.toStringTag]:"PopsPanelButton",$ele:{panelButton:w.querySelector(".pops-panel-button"),button:w.querySelector(".pops-panel-button .pops-panel-button_inner"),icon:w.querySelector(".pops-panel-button .pops-bottom-icon"),spanText:w.querySelector(".pops-panel-button .pops-panel-button-text")},$data:{},init(){this.$ele.panelButton.appendChild(this.$ele.button),this.initButton(),this.setClickEvent();},initButton(){typeof S.buttonIcon=="string"&&S.buttonIcon.trim()!==""?(S.buttonIcon in pops.config.iconSVG?this.setIconSVG(pops.config.iconSVG[S.buttonIcon]):this.setIconSVG(S.buttonIcon),this.showIcon()):this.hideIcon();let T=S.buttonText;typeof S.buttonText=="function"&&(T=S.buttonText()),this.setButtonType(S.buttonType),S.buttonIsRightIcon?this.setIconRight():this.setIconLeft(),S.disable&&this.disable(),this.setButtonText(T),this.setIconLoadingStatus(S.buttonIconIsLoading);},disable(){this.$ele.button.setAttribute("disabled","true");},notDisable(){this.$ele.button.removeAttribute("disabled");},hideIcon(){this.$ele.panelButton.classList.add("pops-panel-button-no-icon");},showIcon(){this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");},setIconSVG(T){this.$ele.icon.innerHTML=T;},setIconLoadingStatus(T){this.$ele.icon.setAttribute("is-loading",(!!T).toString());},setHasIcon(T){this.$ele.button.setAttribute("data-icon",(!!T).toString());},setButtonType(T){this.$ele.button.setAttribute("type",T);},setIconRight(){this.$ele.button.classList.add("pops-panel-button-right-icon");},setIconLeft(){this.$ele.button.classList.remove("pops-panel-button-right-icon");},setButtonText(T){this.$ele.spanText.innerHTML=T;},setClickEvent(){popsDOMUtils.on(this.$ele.button,"click",void 0,T=>{typeof S.callback=="function"&&S.callback(T);});}};return C.init(),w["data-button"]=C,w},createSectionContainerItem_deepMenu(S){let w=this,A=document.createElement("li");A.classList.add("pops-panel-deepMenu-nav-item"),A.__formConfig__=S,this.setElementClassName(A,S.className),this.setElementAttributes(A,S.attributes),this.setElementProps(A,S.props);let C="";S.description&&(C=`<p class="pops-panel-item-left-desc-text">${S.description}</p>`);let T=typeof S.arrowRightIcon=="boolean"?S.arrowRightIcon:!0,E="";T&&(E=`<i class="pops-panel-deepMenu-arrowRight-icon">${pops.config.iconSVG.arrowRight}</i>`);let k="";S.rightText&&(k=`<p class="pops-panel-item-right-text">${S.rightText}</p>`),A.innerHTML=`
			<div class="pops-panel-item-left-text">
				<p class="pops-panel-item-left-main-text">${S.text}</p>
				${C}
			</div>
			<div class="pops-panel-deepMenu">
				${k}
				${E}
			</div>
			`;const U={[Symbol.toStringTag]:"PopsPanelDeepMenu",$ele:{get parentSection(){return w.$el.$contentSectionContainer}},init(){this.setLiClickEvent();},initFormItem(L,_){let I=_;if(I.type==="forms"){let $=I.forms,P=document.createElement("li"),H=document.createElement("ul");H.classList.add("pops-panel-forms-container-item-formlist"),P.classList.add("pops-panel-forms-container-item");let V=popsDOMUtils.createElement("div",{className:"pops-panel-forms-container-item-header-text"});V.innerHTML=I.text,I.isFold&&(V.innerHTML=`
								<p>${I.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
								
							`,popsDOMUtils.on(V,"click",D=>{P.hasAttribute("data-fold-enable")?P.removeAttribute("data-fold-enable"):P.setAttribute("data-fold-enable","");}),V.classList.add("pops-panel-forms-fold-container"),V.classList.add("pops-user-select-none"),P.setAttribute("data-fold-enable",""),P.classList.add("pops-panel-forms-fold")),P.appendChild(V),w.setElementClassName(P,_.className),w.setElementAttributes(P,_.attributes),w.setElementProps(P,_.props),$.forEach(D=>{w.uListContainerAddItem(D,{ulElement:H,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:P,formHeaderDivElement:V});}),P.appendChild(H),L.appendChild(P),typeof I.afterAddToUListCallBack=="function"&&I.afterAddToUListCallBack(S,{target:P,ulElement:H,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:P,formHeaderDivElement:V});}else w.uListContainerAddItem(S,{ulElement:w.sectionContainerULElement});},gotoDeepMenu(L,_){var R,F;let I=_.closest("section.pops-panel-container");I&&popsDOMUtils.cssHide(I,!0);let $=popsDOMUtils.createElement("section",{className:"pops-panel-container pops-panel-deepMenu-container"}),P=popsDOMUtils.createElement("ul",{className:"pops-panel-deepMenu-container-header-ul"}),H=popsDOMUtils.createElement("ul"),V=S.headerTitle??S.text,D=popsDOMUtils.createElement("div",{className:"pops-panel-deepMenu-container-header",innerHTML:`<p>${V}</p>`}),N=popsDOMUtils.createElement("i",{className:"pops-panel-deepMenu-container-left-arrow-icon",innerHTML:pops.config.iconSVG.arrowLeft});if(popsDOMUtils.on(N,"click",void 0,W=>{W==null||W.preventDefault(),W==null||W.stopPropagation();let X=$.previousElementSibling;popsDOMUtils.cssShow(X),$.remove();},{once:!0}),(R=D.firstElementChild)==null||R.insertAdjacentElement("beforebegin",N),P.appendChild(D),$.appendChild(P),$.appendChild(H),S.forms&&Array.isArray(S.forms))for(let W=0;W<S.forms.length;W++){let X=S.forms[W];this.initFormItem(H,X);}(F=w.$el.$content)==null||F.appendChild($),typeof S.afterEnterDeepMenuCallBack=="function"&&S.afterEnterDeepMenuCallBack(S,{sectionContainer:$,sectionContainerHeaderContainer:P,sectionContainerHeader:D,sectionBodyContainer:H});},setLiClickEvent(){popsDOMUtils.on(A,"click",void 0,async L=>{typeof S.clickCallBack=="function"&&await S.clickCallBack(L,S)||this.gotoDeepMenu(L,A);});}};return U.init(),A["data-deepMenu"]=U,A},createSectionContainerItem_own(S){let w=document.createElement("li");return w.__formConfig__=S,S.className&&(w.className=S.className),w=S.getLiElementCallBack(w),w},createSectionContainerItem(S){let w=S.type;if(w==="switch")return this.createSectionContainerItem_switch(S);if(w==="slider")return this.createSectionContainerItem_slider_new(S);if(w==="input")return this.createSectionContainerItem_input(S);if(w==="textarea")return this.createSectionContainerItem_textarea(S);if(w==="select")return this.createSectionContainerItem_select(S);if(w==="select-multiple")return this.createSectionContainerItem_select_multiple_new(S);if(w==="button")return this.createSectionContainerItem_button(S);if(w==="deepMenu")return this.createSectionContainerItem_deepMenu(S);if(w==="own")return this.createSectionContainerItem_own(S);console.error("尚未实现的type类型",S);},createSectionContainerItem_forms(S){let w=this,A=S;if(A.type==="forms"){let C=S.forms,T=document.createElement("li"),E=document.createElement("ul");E.classList.add("pops-panel-forms-container-item-formlist"),T.classList.add("pops-panel-forms-container-item");let k=popsDOMUtils.createElement("div",{className:"pops-panel-forms-container-item-header-text"});k.innerHTML=A.text,A.isFold&&(k.innerHTML=`
						<p>${A.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
						
					`,popsDOMUtils.on(k,"click",U=>{T.hasAttribute("data-fold-enable")?T.removeAttribute("data-fold-enable"):T.setAttribute("data-fold-enable","");}),k.classList.add("pops-panel-forms-fold-container"),k.classList.add("pops-user-select-none"),T.setAttribute("data-fold-enable",""),T.classList.add("pops-panel-forms-fold")),T.appendChild(k),w.setElementClassName(T,S.className),w.setElementAttributes(T,S.attributes),w.setElementProps(T,S.props),C.forEach(U=>{w.uListContainerAddItem(U,{ulElement:E,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:T,formHeaderDivElement:k});}),T.appendChild(E),w.sectionContainerULElement.appendChild(T),typeof A.afterAddToUListCallBack=="function"&&A.afterAddToUListCallBack(A,{target:T,ulElement:E,sectionContainerULElement:w.sectionContainerULElement,formContainerListElement:T,formHeaderDivElement:k});}else w.uListContainerAddItem(S,{ulElement:w.sectionContainerULElement});},uListContainerAddItem(S,w){let A=this.createSectionContainerItem(S);A&&w.ulElement.appendChild(A),typeof S.afterAddToUListCallBack=="function"&&S.afterAddToUListCallBack(S,{...w,target:A});},setAsideItemClickEvent(S,w){const A=this;popsDOMUtils.on(S,"click",void 0,C=>{this.clearContainer(),popsDOMUtils.cssShow(A.$el.$contentSectionContainer),this.clearAsideItemIsVisited(),this.setAsideItemIsVisited(S);let T=w.headerTitle??w.title;if(typeof T=="string"&&T.trim()!==""){let k=document.createElement("li");k.__asideConfig__=w,k.innerHTML=T,this.sectionContainerHeaderULElement.appendChild(k);}S.__forms__.forEach(k=>{this.createSectionContainerItem_forms(k);}),typeof w.callback=="function"&&w.callback(C,this.sectionContainerHeaderULElement,this.sectionContainerULElement);});}});let PopsPanel$1=class{constructor(w){const A=popsUtils.getRandomGUID(),C="panel";let T=PopsPanelConfig();T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),w&&Array.isArray(w.content)&&(T.content=w.content),T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.ninePalaceGridPosition,pops.config.cssText.scrollbar,pops.config.cssText.button,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.panelCSS]);let U=PopsHandler.handleZIndex(T.zIndex),L=PopsElementHandler.getMaskHTML(A,U),_=PopsElementHandler.getHeaderBtnHTML(C,T),{headerStyle:I,headerPStyle:$}=PopsElementHandler.getHeaderStyle(C,T),P=PopsElementHandler.getAnimHTML(A,C,T,`
			<div 
				class="pops-${C}-title"
				style="text-align: ${T.title.position};
				${I}">
				${T.title.html?T.title.text:`<p pops style="${$}">${T.title.text}</p>`}
				${_}
			</div>
			<div class="pops-${C}-content">
				<aside class="pops-${C}-aside">
					<ul></ul>
				</aside>
				<section class="pops-${C}-container">
					<ul class="pops-panel-container-header-ul"></ul>
					<ul></ul>
				</section>
			</div>`,"",U),H=PopsElementHandler.parseElement(P),{popsElement:V,headerCloseBtnElement:D,titleElement:N,contentElement:R,contentAsideElement:F,contentSectionContainerElement:W}=PopsHandler.handleQueryElement(H,C);(T.isMobile||pops.isPhone())&&popsDOMUtils.addClassName(V,T.mobileClassName);let X=null,Q=[H];if(T.mask.enable){let{maskElement:et}=PopsHandler.handleMask({type:C,guid:A,config:T,animElement:H,maskHTML:L});X=et,Q.push(X);}let G=PopsHandler.handleEventDetails(A,E,k,C,H,V,X,T);return PopsHandler.handleClickEvent("close",D,G,T.btn.close.callback),popsDOMUtils.append(k,Q),typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E),X!=null&&H.after(X),PanelHandleContentDetails().init({config:T,$el:{$content:R,$contentAside:F,$contentSectionContainer:W}}),PopsHandler.handlePush(C,{guid:A,animElement:H,popsElement:V,maskElement:X,$shadowContainer:E,$shadowRoot:k}),T.drag&&PopsInstanceUtils.drag(V,{dragElement:N,limit:T.dragLimit,extraDistance:T.dragExtraDistance,moveCallBack:T.dragMoveCallBack,endCallBack:T.dragEndCallBack}),PopsHandler.handleResultDetails(G)}};const rightClickMenuConfig=()=>({target:document.documentElement,targetSelector:null,data:[{icon:pops.config.iconSVG.search,iconIsLoading:!1,text:"搜索",item:[],callback(S,w,A){console.log("点击："+this.text,[S,w,A]);}},{icon:pops.config.iconSVG.documentCopy,iconIsLoading:!1,text:"复制",item:[],callback(S,w,A){console.log("点击："+this.text,[S,w,A]);}},{icon:pops.config.iconSVG.delete,text:"删除",iconIsLoading:!1,item:[],callback(S,w,A){console.log("点击："+this.text,[S,w,A]);}},{icon:pops.config.iconSVG.loading,iconIsLoading:!0,text:"加载",item:[],callback(S,w,A){return console.log("点击："+this.text,[S,w,A]),!1}},{icon:pops.config.iconSVG.elemePlus,iconIsLoading:!0,text:"饿了么",callback(S,w,A){return console.log("点击："+this.text,[S,w,A]),!1},item:[{icon:"",iconIsLoading:!1,text:"处理文件",item:[],callback(S,w,A){console.log("点击："+this.text,[S,w,A]);}},{icon:"",iconIsLoading:!1,text:"其它处理",callback(S,w,A){console.log("点击："+this.text,[S,w,A]);},item:[{icon:pops.config.iconSVG.view,iconIsLoading:!1,text:"查看",item:[],callback(S,w,A){console.log("点击："+this.text,[S,w,A]);}}]}]}],useShadowRoot:!0,className:"",isAnimation:!0,only:!1,zIndex:1e4,preventDefault:!0,style:null,beforeAppendToPageCallBack(){}});class PopsRightClickMenu{constructor(w){const A=popsUtils.getRandomGUID(),C="rightClickMenu";let T=rightClickMenuConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T=PopsHandler.handleOnly(C,T),T.target==null)throw "config.target 不能为空";w.data&&(T.data=w.data);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);if(PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.rightClickMenu]),T.style!=null){let L=document.createElement("style");L.setAttribute("type","text/css"),L.innerHTML=T.style,k.appendChild(L);}const U={rootElement:null,windowCheckClickEvent(L){if(!U.rootElement)return;let _=L.target;_.closest(`.pops-${C}`)||_.className&&_.className==="pops-shadow-container"&&_.shadowRoot!=null||U.closeAllMenu(U.rootElement);},shadowRootCheckClickEvent(L){!U.rootElement||L.target.closest(`.pops-${C}`)||U.closeAllMenu(U.rootElement);},addWindowCheckClickListener(){if(popsDOMUtils.on(globalThis,"click touchstart",void 0,U.windowCheckClickEvent,{capture:!0}),T.target instanceof Node){const L=T.target.getRootNode();L instanceof ShadowRoot&&popsDOMUtils.on(L,"click touchstart",void 0,U.shadowRootCheckClickEvent,{capture:!0});}},removeWindowCheckClickListener(){if(popsDOMUtils.off(globalThis,"click touchstart",void 0,U.windowCheckClickEvent,{capture:!0}),T.target instanceof Node){const L=T.target.getRootNode();L instanceof ShadowRoot&&popsDOMUtils.off(L,"click touchstart",void 0,U.windowCheckClickEvent,{capture:!0});}},contextMenuEvent(L){T.preventDefault&&popsDOMUtils.preventEvent(L),PopsHandler.handleOnly(C,T),U.rootElement&&U.closeAllMenu(U.rootElement);let _=U.showMenu(L,T.data);U.rootElement=_,T.only&&PopsHandler.handlePush(C,{$shadowRoot:k,$shadowContainer:E,guid:A,animElement:_,popsElement:_,beforeRemoveCallBack(I){U.closeAllMenu(I.popsElement);}});},addContextMenuEvent(L,_){popsDOMUtils.on(L,"contextmenu",_,U.contextMenuEvent);},removeContextMenuEvent(L,_){popsDOMUtils.off(L,"contextmenu",_,U.contextMenuEvent);},animationCloseMenu(L){function _(I){popsDOMUtils.off(L,popsDOMUtils.getTransitionEndNameList(),void 0,_,{capture:!0}),L.remove();}L.classList.contains(`pops-${C}-anim-show`)?(popsDOMUtils.on(L,popsDOMUtils.getTransitionEndNameList(),void 0,_,{capture:!0}),L.classList.remove(`pops-${C}-anim-show`)):L.remove();},closeAllMenu(L){var I,$;if(L==null)return;(I=L==null?void 0:L.__menuData__)!=null&&I.root&&(L=($=L==null?void 0:L.__menuData__)==null?void 0:$.root),L.__menuData__.child.forEach(P=>{this.animationCloseMenu(P);}),this.animationCloseMenu(L),U.rootElement=null;},getMenuContainerElement(L){let _=popsDOMUtils.createElement("div",{className:`pops-${C}`,innerHTML:`
					<ul></ul>
					`}),I=this.getMenuZIndex();return I>1e4&&(_.style.zIndex=I.toString()),L&&_.setAttribute("is-children","true"),T.isAnimation&&popsDOMUtils.addClassName(_,`pops-${C}-anim-grid`),_},getMenuZIndex(){return PopsHandler.handleZIndex(T.zIndex)},getOffset(L,_,I){let $=popsDOMUtils.width(L),P=popsDOMUtils.height(L),H=popsDOMUtils.width(globalThis)-$-1,V=popsDOMUtils.height(globalThis)-P-8,D=_,N=I;return D=D<0?0:D,D=D<H?D:H,N=N<0?0:N,N=N<V?N:V,{left:D,top:N}},showMenu(L,_){let I=this.getMenuContainerElement(!1);Reflect.set(I,"__menuData__",{child:[]}),U.addMenuLiELement(L,I,I,_),popsDOMUtils.css(I,{display:"none"}),popsDOMUtils.append(k,I),document.contains(E)||(typeof T.beforeAppendToPageCallBack=="function"&&T.beforeAppendToPageCallBack(k,E),popsDOMUtils.appendBody(E));let{left:$,top:P}=this.getOffset(I,L.clientX,L.clientY);return popsDOMUtils.css(I,{left:$,top:P,display:""}),T.isAnimation&&popsDOMUtils.addClassName(I,`pops-${C}-anim-show`),I},showClildMenu(L,_,I,$,P){let H=this.getMenuContainerElement(!0);Reflect.set(H,"__menuData__",{parent:P,root:$}),Reflect.get($,"__menuData__").child.push(H),U.addMenuLiELement(L,$,H,I),popsDOMUtils.css(H,{display:"none"}),popsDOMUtils.append(k,H);let{left:D,top:N}=this.getOffset(H,_.clientX,_.clientY);return popsDOMUtils.css(H,{left:D,top:N,display:""}),T.isAnimation&&popsDOMUtils.addClassName(H,`pops-${C}-anim-show`),H},addMenuLiELement(L,_,I,$){let P=L.target,H=I.querySelector("ul");$.forEach(V=>{let D=popsUtils.parseTextToDOM("<li></li>");if(typeof V.icon=="string"&&V.icon.trim()!==""){let F=pops.config.iconSVG[V.icon]??V.icon,W=popsUtils.parseTextToDOM(`<i class="pops-${C}-icon" is-loading="${V.iconIsLoading}">${F}</i>`);D.appendChild(W);}D.insertAdjacentHTML("beforeend",`<span>${V.text}</span>`),V.item&&Array.isArray(V.item)&&popsDOMUtils.addClassName(D,`pops-${C}-item`);function N(){Array.from(H.children).forEach(X=>{if(popsDOMUtils.removeClassName(X,`pops-${C}-is-visited`),!X.__menuData__)return;function Q(G){G.querySelectorAll("ul li").forEach(tt=>{var et;(et=tt==null?void 0:tt.__menuData__)!=null&&et.child&&Q(tt.__menuData__.child);}),G.remove();}Q(X.__menuData__.child);});for(let X=0;X<_.__menuData__.child.length;X++){let Q=_.__menuData__.child[X];k.contains(Q)||(_.__menuData__.child.splice(X,1),X--);}if(popsDOMUtils.addClassName(D,`pops-${C}-is-visited`),!V.item)return;let F=D.getBoundingClientRect(),W=U.showClildMenu(L,{clientX:F.left+popsDOMUtils.outerWidth(D),clientY:F.top},V.item,_,D);D.__menuData__={child:W};}async function R(F){if(typeof V.callback=="function"){OriginPrototype.Object.defineProperty(L,"target",{get(){return P}});let W=await V.callback(F,L,D);if(typeof W=="boolean"&&W==!1)return}Array.from(H.children).forEach(W=>{popsDOMUtils.off(W,"mouseenter touchstart");}),U.closeAllMenu(_);}popsDOMUtils.on(D,"mouseenter touchstart",void 0,N),popsDOMUtils.on(D,"click",void 0,R),H.appendChild(D);});}};return U.addContextMenuEvent(T.target,T.targetSelector),U.addWindowCheckClickListener(),{guid:A,config:T,removeWindowCheckClickListener:U.removeWindowCheckClickListener,addWindowCheckClickListener:U.addWindowCheckClickListener,removeContextMenuEvent:U.removeContextMenuEvent,addContextMenuEvent:U.addContextMenuEvent}}}const searchSuggestionConfig=()=>({target:null,inputTarget:null,selfDocument:document,data:[{value:"数据1",text:"数据1-html"},{value:"数据2",text:"数据2-html"}],deleteIcon:{enable:!0,callback(S,w,A){console.log("删除当前项",[S,w,A]),w.remove();}},useShadowRoot:!0,className:"",isAbsolute:!0,isAnimation:!0,width:"250px",maxHeight:"300px",followTargetWidth:!0,topDistance:0,position:"auto",positionTopToReverse:!0,zIndex:1e4,searchingTip:"正在搜索中...",toSearhNotResultHTML:'<li data-none="true">暂无其它数据</li>',toHideWithNotResult:!1,followPosition:"target",getItemHTML(S){return S.text??S},async getData(S){return console.log("当前输入框的值是：",S),[]},itemClickCallBack(S,w,A){console.log("item项的点击回调",[S,w,A]),this.inputTarget.value=A.value;},selectCallBack(S,w,A){console.log("item项的选中回调",[S,w,A]);},style:""});class PopsSearchSuggestion{constructor(w){const A=popsUtils.getRandomGUID(),C="searchSuggestion";let T=searchSuggestionConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),T.target==null)throw new TypeError("config.target 不能为空");T.inputTarget==null&&(T.inputTarget=T.target),w.data&&(T.data=w.data);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);if(PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.anim,pops.config.cssText.common]),T.style!=null){let L=document.createElement("style");L.setAttribute("type","text/css"),L.innerHTML=T.style,k.appendChild(L);}const U={selfDocument:T.selfDocument,$el:{root:null,$hintULContainer:null,$dynamicCSS:null},$data:{isEmpty:!0},init(L=document.body||document.documentElement){this.initEl(),U.update(typeof T.data=="function"?T.data():T.data),U.updateDynamicCSS(),U.changeHintULElementWidth(),U.changeHintULElementPosition(),U.hide(),T.isAnimation&&U.$el.root.classList.add(`pops-${C}-animation`),k.appendChild(U.$el.root),L.appendChild(E);},initEl(){this.$el.root=U.getSearchSelectElement(),this.$el.$dynamicCSS=this.$el.root.querySelector("style[data-dynamic]"),this.$el.$hintULContainer=U.$el.root.querySelector("ul");},getSearchSelectElement(){let L=popsDOMUtils.createElement("div",{className:`pops pops-${C}-search-suggestion`,innerHTML:`
						<style data-dynamic="true">
							${this.getDynamicCSS()}
						</style>
						<ul class="pops-${C}-search-suggestion-hint">
							${T.toSearhNotResultHTML}
						</ul>
         				 `},{"data-guid":A,"type-value":C});return T.className!==""&&T.className!=null&&popsDOMUtils.addClassName(L,T.className),L},getDynamicCSS(){return `
				.pops-${C}-animation{
					-moz-animation: searchSelectFalIn 0.5s 1 linear;
					-webkit-animation: searchSelectFalIn 0.5s 1 linear;
					-o-animation: searchSelectFalIn 0.5s 1 linear;
					-ms-animation: searchSelectFalIn 0.5s 1 linear;
				}
				.pops-${C}-search-suggestion{
					border: initial;
					overflow: initial;
				}
				ul.pops-${C}-search-suggestion-hint{
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
				ul.pops-${C}-search-suggestion-hint[data-top-reverse]{
					display: flex;
					flex-direction: column-reverse;
				}
				ul.pops-${C}-search-suggestion-hint[data-top-reverse] li{
					flex-shrink: 0;
				}
				ul.pops-${C}-search-suggestion-hint li{
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
				ul.pops-${C}-search-suggestion-hint li[data-none]{
					text-align: center;
					font-size: 12px;
					color: #8e8e8e;
				}
				ul.pops-${C}-search-suggestion-hint li:hover{
					background-color: rgba(0, 0, 0, .1);
				}
				`},getSearchItemLiElement(L,_){return popsDOMUtils.createElement("li",{className:`pops-${C}-search-suggestion-hint-item pops-flex-items-center pops-flex-y-center`,"data-index":_,"data-value":U.getItemDataValue(L),innerHTML:`
          			${T.getItemHTML(L)}
          			${T.deleteIcon.enable?U.getDeleteIconHTML():""}
          			`})},getItemDataValue(L){return L},setSearchItemClickEvent(L){popsDOMUtils.on(L,"click",void 0,_=>{popsDOMUtils.preventEvent(_),_.target.closest(`.pops-${C}-delete-icon`)?(typeof T.deleteIcon.callback=="function"&&T.deleteIcon.callback(_,L,L["data-value"]),this.$el.$hintULContainer.children.length||this.clear()):T.itemClickCallBack(_,L,L["data-value"]);},{capture:!0});},setSearchItemSelectEvent(L){},setInputChangeEvent(L={capture:!0}){(T.inputTarget instanceof HTMLInputElement||T.inputTarget instanceof HTMLTextAreaElement)&&(T.inputTarget.setAttribute("autocomplete","off"),popsDOMUtils.on(T.inputTarget,"input",void 0,async _=>{let I=await T.getData(_.target.value);U.update(I);},L));},removeInputChangeEvent(L={capture:!0}){popsDOMUtils.off(T.inputTarget,"input",void 0,void 0,L);},showEvent(){U.updateDynamicCSS(),U.changeHintULElementWidth(),U.changeHintULElementPosition(),T.toHideWithNotResult&&U.$data.isEmpty?U.hide():U.show();},setShowEvent(L={capture:!0}){if(T.followPosition==="target")popsDOMUtils.on([T.target],["focus","click"],void 0,U.showEvent,L);else if(T.followPosition==="input")popsDOMUtils.on([T.inputTarget],["focus","click"],void 0,U.showEvent,L);else if(T.followPosition==="inputCursor")popsDOMUtils.on([T.inputTarget],["focus","click","input"],void 0,U.showEvent,L);else throw new TypeError("未知followPosition："+T.followPosition)},removeShowEvent(L={capture:!0}){popsDOMUtils.off([T.target,T.inputTarget],["focus","click"],void 0,U.showEvent,L),popsDOMUtils.off([T.inputTarget],["input"],void 0,U.showEvent,L);},hideEvent(L){if(L.target instanceof Node){if(E.contains(L.target)||T.target.contains(L.target)||T.inputTarget.contains(L.target))return;U.hide();}},setHideEvent(L={capture:!0}){Array.isArray(U.selfDocument)?U.selfDocument.forEach(_=>{popsDOMUtils.on(_,["click","touchstart"],void 0,U.hideEvent,L);}):popsDOMUtils.on(U.selfDocument,["click","touchstart"],void 0,U.hideEvent,L);},removeHideEvent(L={capture:!0}){Array.isArray(U.selfDocument)?U.selfDocument.forEach(_=>{popsDOMUtils.off(_,["click","touchstart"],void 0,U.hideEvent,L);}):popsDOMUtils.off(U.selfDocument,["click","touchstart"],void 0,U.hideEvent,L);},setAllEvent(L={capture:!0}){U.setInputChangeEvent(L),U.setHideEvent(L),U.setShowEvent(L);},removeAllEvent(L={capture:!0}){U.removeInputChangeEvent(L),U.removeHideEvent(L),U.removeShowEvent(L);},getDeleteIconHTML(L=16,_="#bababa"){return `
				<svg class="pops-${C}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}" fill="${_}">
					<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
					<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
				</svg>
        	`},setPromptsInSearch(){let L=popsDOMUtils.createElement("li",{className:`pops-${C}-search-suggestion-hint-searching-item`,innerHTML:T.searchingTip});U.$el.$hintULContainer.appendChild(L);},removePromptsInSearch(){var L;(L=U.$el.$hintULContainer.querySelector(`li.pops-${C}-search-suggestion-hint-searching-item`))==null||L.remove();},clearAllSearchItemLi(){U.$el.$hintULContainer.innerHTML="";},changeHintULElementPosition(L=T.target??T.inputTarget){let _=null;if(T.followPosition==="inputCursor"?_=popsDOMUtils.getTextBoundingRect(T.inputTarget,T.inputTarget.selectionStart||0,T.inputTarget.selectionEnd||0,!1):_=T.isAbsolute?popsDOMUtils.offset(L):L.getBoundingClientRect(),_==null)return;let I=document.documentElement.clientHeight;T.isAbsolute&&(I=popsDOMUtils.height(document));let $=popsDOMUtils.width(document),P=T.position;if(T.position==="auto"){let V=_.bottom,D=popsDOMUtils.height(U.$el.$hintULContainer);V+D>I?P="top":(P="bottom",U.$el.$hintULContainer.removeAttribute("data-top"));}P==="top"?(T.positionTopToReverse&&U.$el.$hintULContainer.setAttribute("data-top-reverse","true"),U.$el.$hintULContainer.style.top="",U.$el.$hintULContainer.style.bottom=I-_.top+T.topDistance+"px"):P==="bottom"&&(U.$el.$hintULContainer.removeAttribute("data-top-reverse"),U.$el.$hintULContainer.style.bottom="",U.$el.$hintULContainer.style.top=_.height+_.top+T.topDistance+"px");let H=popsDOMUtils.width(U.$el.$hintULContainer);U.$el.$hintULContainer.style.left=(_.left+H>$?$-H:_.left)+"px";},changeHintULElementWidth(L=T.target??T.inputTarget){let _=L.getBoundingClientRect();T.followTargetWidth?U.$el.$hintULContainer.style.width=_.width+"px":U.$el.$hintULContainer.style.width=T.width;},updateDynamicCSS(){this.$el.$dynamicCSS.innerHTML=this.getDynamicCSS();},update(L=[]){if(!Array.isArray(L))throw new TypeError("传入的数据不是数组");T.data=L,T.data.length?(U.$data.isEmpty=!1,T.toHideWithNotResult&&U.show(),U.clearAllSearchItemLi(),T.data.forEach((_,I)=>{let $=U.getSearchItemLiElement(_,I);U.setSearchItemClickEvent($),U.setSearchItemSelectEvent($),U.$el.$hintULContainer.appendChild($);})):U.clear();},clear(){this.$data.isEmpty=!0,this.clearAllSearchItemLi(),this.$el.$hintULContainer.appendChild(popsUtils.parseTextToDOM(T.toSearhNotResultHTML)),T.toHideWithNotResult&&this.hide();},hide(){this.$el.root.style.display="none";},show(){this.$el.root.style.display="";}};return U}}const PopsTooltipConfig=()=>({useShadowRoot:!0,target:null,content:"默认文字",position:"top",className:"",isFixed:!1,alwaysShow:!1,triggerShowEventName:"mouseenter touchstart",triggerCloseEventName:"mouseleave touchend",zIndex:1e4,only:!1,eventOption:{passive:!1,capture:!0,once:!1},showBeforeCallBack(){},showAfterCallBack(){},closeBeforeCallBack(){},closeAfterCallBack(){},delayCloseTime:100,showArrow:!0,arrowDistance:12.5,otherDistance:0,style:"",beforeAppendToPageCallBack(){}});class ToolTip{constructor(w,A,C){Z(this,"$el",{$shadowContainer:null,$shadowRoot:null,$toolTip:null,$content:null,$arrow:null});Z(this,"$data",{config:null,guid:null,timeId_close_TouchEvent:[],timeId_close_MouseEvent:[]});this.$data.config=w,this.$data.guid=A,this.$el.$shadowContainer=C.$shadowContainer,this.$el.$shadowRoot=C.$shadowRoot,this.show=this.show.bind(this),this.close=this.close.bind(this),this.toolTipAnimationFinishEvent=this.toolTipAnimationFinishEvent.bind(this),this.toolTipMouseEnterEvent=this.toolTipMouseEnterEvent.bind(this),this.toolTipMouseLeaveEvent=this.toolTipMouseLeaveEvent.bind(this),this.init();}init(){let w=this.createToolTip();this.$el.$toolTip=w.$toolTipContainer,this.$el.$content=w.$toolTipContent,this.$el.$arrow=w.$toolTipArrow,this.changeContent(),this.changeZIndex(),this.changePosition(),this.$data.config.alwaysShow||(this.offEvent(),this.onEvent());}createToolTip(){let w=popsDOMUtils.createElement("div",{className:"pops-tip",innerHTML:`
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`},{"data-position":this.$data.config.isFixed?"fixed":"absolute","data-guid":this.$data.guid}),A=w.querySelector(".pops-tip-content"),C=w.querySelector(".pops-tip-arrow");if(typeof this.$data.config.className=="string"&&this.$data.config.className.trim()!==""&&popsDOMUtils.addClassName(w,this.$data.config.className),w.style.zIndex=PopsHandler.handleZIndex(this.$data.config.zIndex).toString(),this.$data.config.style!=null){let T=popsDOMUtils.createElement("style",{type:"text/css",innerHTML:this.$data.config.style});w.appendChild(T);}return this.$data.config.showArrow||C.remove(),{$toolTipContainer:w,$toolTipArrow:C,$toolTipContent:A}}getContent(){return typeof this.$data.config.content=="function"?this.$data.config.content():this.$data.config.content}changeContent(w){w==null&&(w=this.getContent()),this.$el.$content.innerHTML=w;}getZIndex(){return PopsHandler.handleZIndex(this.$data.config.zIndex)}changeZIndex(){const w=this.getZIndex();this.$el.$toolTip.style.setProperty("z-index",w.toString());}calcToolTipPosition(w,A,C){let T=popsDOMUtils.offset(w,!this.$data.config.isFixed),E=T.width,k=T.height,U=T.top,L=T.left,_=popsDOMUtils.outerWidth(this.$el.$toolTip),I=popsDOMUtils.outerHeight(this.$el.$toolTip),$=L+E/2-_/2,P=U+k/2-I/2;return {TOP:{left:$-C,top:U-I-A,arrow:"bottom",motion:"fadeInTop"},RIGHT:{left:L+E+A,top:P+C,arrow:"left",motion:"fadeInRight"},BOTTOM:{left:$-C,top:U+k+A,arrow:"top",motion:"fadeInBottom"},LEFT:{left:L-_-A,top:P+C,arrow:"right",motion:"fadeInLeft"}}}changePosition(){let w=this.calcToolTipPosition(this.$data.config.target,this.$data.config.arrowDistance,this.$data.config.otherDistance),A=this.$data.config.position.toUpperCase(),C=w[A];C?(this.$el.$toolTip.style.left=C.left+"px",this.$el.$toolTip.style.top=C.top+"px",this.$el.$toolTip.setAttribute("data-motion",C.motion),this.$el.$arrow.setAttribute("data-position",C.arrow)):console.error("不存在该位置",this.$data.config.position);}onEvent(){this.onToolTipAnimationFinishEvent(),this.onShowEvent(),this.onCloseEvent(),this.onToolTipMouseEnterEvent(),this.onToolTipMouseLeaveEvent();}offEvent(){this.offToolTipAnimationFinishEvent(),this.offShowEvent(),this.offCloseEvent(),this.offToolTipMouseEnterEvent(),this.offToolTipMouseLeaveEvent();}addCloseTimeoutId(w,A){w==="MouseEvent"?this.$data.timeId_close_MouseEvent.push(A):this.$data.timeId_close_TouchEvent.push(A);}clearCloseTimeoutId(w,A){let C=w==="MouseEvent"?this.$data.timeId_close_MouseEvent:this.$data.timeId_close_TouchEvent;for(let T=0;T<C.length;T++){const E=C[T];if(typeof A=="number"){if(A==E){clearTimeout(A),C.splice(T,1);break}}else clearTimeout(E),C.splice(T,1),T--;}}show(...w){let C=w[0]instanceof MouseEvent?"MouseEvent":"TouchEvent";if(this.clearCloseTimeoutId(C),typeof this.$data.config.showBeforeCallBack=="function"){let T=this.$data.config.showBeforeCallBack(this.$el.$toolTip);if(typeof T=="boolean"&&!T)return}popsUtils.contains(this.$el.$shadowRoot,this.$el.$toolTip)||(this.init(),popsDOMUtils.append(this.$el.$shadowRoot,this.$el.$toolTip)),popsUtils.contains(this.$el.$shadowContainer)||(typeof this.$data.config.beforeAppendToPageCallBack=="function"&&this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot,this.$el.$shadowContainer),popsDOMUtils.append(document.body,this.$el.$shadowContainer)),this.changeContent(),this.changePosition(),typeof this.$data.config.showAfterCallBack=="function"&&this.$data.config.showAfterCallBack(this.$el.$toolTip);}onShowEvent(){popsDOMUtils.on(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,this.$data.config.eventOption);}offShowEvent(){popsDOMUtils.off(this.$data.config.target,this.$data.config.triggerShowEventName,this.show,{capture:!0});}close(...w){let A=w[0],C=A instanceof MouseEvent?"MouseEvent":"TouchEvent";if(A&&A instanceof MouseEvent){let E=A.composedPath()[0];if(E!=this.$data.config.target&&E!=this.$el.$toolTip)return}if(typeof this.$data.config.closeBeforeCallBack=="function"){let E=this.$data.config.closeBeforeCallBack(this.$el.$toolTip);if(typeof E=="boolean"&&!E)return}(this.$data.config.delayCloseTime==null||typeof this.$data.config.delayCloseTime=="number"&&this.$data.config.delayCloseTime<=0)&&(this.$data.config.delayCloseTime=100);let T=setTimeout(()=>{this.clearCloseTimeoutId(C,T),this.$el.$toolTip!=null&&this.$el.$toolTip.setAttribute("data-motion",this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn","fadeOut"));},this.$data.config.delayCloseTime);this.addCloseTimeoutId(C,T),typeof this.$data.config.closeAfterCallBack=="function"&&this.$data.config.closeAfterCallBack(this.$el.$toolTip);}onCloseEvent(){popsDOMUtils.on(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,this.$data.config.eventOption);}offCloseEvent(){popsDOMUtils.off(this.$data.config.target,this.$data.config.triggerCloseEventName,this.close,{capture:!0});}destory(){this.$el.$toolTip&&this.$el.$shadowRoot.removeChild(this.$el.$toolTip),this.$el.$toolTip=null,this.$el.$arrow=null,this.$el.$content=null;}toolTipAnimationFinishEvent(){this.$el.$toolTip&&(this.$el.$toolTip.getAttribute("data-motion").includes("In")||this.destory());}onToolTipAnimationFinishEvent(){popsDOMUtils.on(this.$el.$toolTip,popsDOMUtils.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}offToolTipAnimationFinishEvent(){popsDOMUtils.off(this.$el.$toolTip,popsDOMUtils.getAnimationEndNameList(),this.toolTipAnimationFinishEvent);}toolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent");}onToolTipMouseEnterEvent(){this.clearCloseTimeoutId("MouseEvent"),this.clearCloseTimeoutId("TouchEvent"),popsDOMUtils.on(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}offToolTipMouseEnterEvent(){popsDOMUtils.off(this.$el.$toolTip,"mouseenter touchstart",this.toolTipMouseEnterEvent,this.$data.config.eventOption);}toolTipMouseLeaveEvent(w){this.close(w);}onToolTipMouseLeaveEvent(){popsDOMUtils.on(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}offToolTipMouseLeaveEvent(){popsDOMUtils.off(this.$el.$toolTip,"mouseleave touchend",this.toolTipMouseLeaveEvent,this.$data.config.eventOption);}}class PopsTooltip{constructor(w){const A=popsUtils.getRandomGUID(),C="tooltip";let T=PopsTooltipConfig();if(T=popsUtils.assign(T,GlobalConfig.getGlobalConfig()),T=popsUtils.assign(T,w),!(T.target instanceof HTMLElement))throw "config.target 必须是HTMLElement类型";T=PopsHandler.handleOnly(C,T);const{$shadowContainer:E,$shadowRoot:k}=PopsHandler.handlerShadow(T);PopsHandler.handleInit(k,[pops.config.cssText.index,pops.config.cssText.anim,pops.config.cssText.common,pops.config.cssText.tooltipCSS]);let U=new ToolTip(T,A,{$shadowContainer:E,$shadowRoot:k});return T.alwaysShow&&U.show(),{guid:A,config:T,$shadowContainer:E,$shadowRoot:k,toolTip:U}}}class Pops{constructor(){Z(this,"config",{version:"2024.12.8",cssText:{index:indexCSS,ninePalaceGridPosition:ninePalaceGridPositionCSS,scrollbar:scrollbarCSS,button:buttonCSS,common:commonCSS,anim:animCSS,alertCSS,confirmCSS,promptCSS,loadingCSS,iframeCSS,tooltipCSS,drawerCSS,folderCSS,panelCSS,rightClickMenu:rightClickMenuCSS},iconSVG:{min:SVG_min,mise:SVG_mise,max:SVG_max,close:SVG_close,edit:SVG_edit,share:SVG_share,delete:SVG_delete,search:SVG_search,upload:SVG_upload,loading:SVG_loading,next:SVG_next,prev:SVG_prev,eleme:SVG_eleme,elemePlus:SVG_elemePlus,chromeFilled:SVG_chromeFilled,cpu:SVG_cpu,videoPlay:SVG_videoPlay,videoPause:SVG_videoPause,headset:SVG_headset,monitor:SVG_monitor,documentCopy:SVG_documentCopy,picture:SVG_picture,circleClose:SVG_circleClose,view:SVG_view,hide:SVG_hide,keyboard:SVG_keyboard,arrowRight:SVG_arrowRight,arrowLeft:SVG_arrowLeft},animation:{},isInit:!1,layer:{alert:[],confirm:[],prompt:[],loading:[],iframe:[],tooltip:[],drawer:[],folder:[],panel:[],rightClickMenu:[]},forbiddenScroll:{event(w){return popsDOMUtils.preventEvent(w)}},Utils:popsUtils,DOMUtils:popsDOMUtils,InstanceUtils:PopsInstanceUtils,MathFloatUtils:PopsMathFloatUtils,panelHandleContentUtils:PanelHandleContentDetails});Z(this,"GlobalConfig",GlobalConfig);Z(this,"alert",w=>new PopsAlert(w));Z(this,"confirm",w=>new PopsConfirm(w));Z(this,"prompt",w=>new PopsPrompt(w));Z(this,"loading",w=>new PopsLoading(w));Z(this,"iframe",w=>new PopsIframe(w));Z(this,"tooltip",w=>new PopsTooltip(w));Z(this,"drawer",w=>new PopsDrawer(w));Z(this,"folder",w=>new PopsFolder(w));Z(this,"panel",w=>new PopsPanel$1(w));Z(this,"rightClickMenu",w=>new PopsRightClickMenu(w));Z(this,"searchSuggestion",w=>new PopsSearchSuggestion(w));}init(){if(!this.config.isInit){this.config.isInit=!0;let w=document.createElement("style");w.innerHTML=this.config.cssText.anim,popsDOMUtils.appendHead(w),this.config.animation=null,this.config.animation=PopsInstanceUtils.getKeyFrames(w.sheet),setTimeout(()=>{w.remove();},50);}}noConflict(){return typeof PopsCore.globalThis.pops=="object"&&popsUtils.delete(PopsCore.globalThis,"pops"),typeof unsafeWindow=="object"&&unsafeWindow!=null&&typeof unsafeWindow.pops=="object"&&popsUtils.delete(unsafeWindow,"pops"),new Pops}isPhone(w=PopsCore.globalThis.navigator.userAgent){return !!/(iPhone|iPad|iPod|iOS|Android)/i.test(w)}}const pops=new Pops,PanelKeyConfig={asideLastVisit:"aside-last-visit"},Tag={success:"√ ",error:"× ",warn:"!!! ",info:""},TagUtil={setTag(S,w,A){TagUtil.clearTag(S),domUtils.addClass(S,w),typeof A=="string"&&domUtils.html(S,A);},clearTag(S){Object.keys(Tag).forEach(w=>{domUtils.removeClass(S,w);});}},UIInfo=S=>({type:"own",getLiElementCallBack(A){let C=S(),T=domUtils.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
					<p class="pops-panel-item-left-main-text">${C.tag==null?C.text:Tag[C.tag]+C.text}</p>
					<p class="pops-panel-item-left-desc-text" style="${C.description==null||C.description===""?"display: none;":""}">${C.description||""}</p>
				`}),E=T.querySelector(".pops-panel-item-left-main-text"),k=["support-info"];return C.tag!=null&&k.push(C.tag),domUtils.addClass(E,k),A.appendChild(T),A},afterAddToUListCallBack(A,C){let T=S();if(typeof T.afterRender=="function"){let E=C.target,k=E.querySelector(".pops-panel-item-left-text"),U=E.querySelector(".pops-panel-item-left-main-text"),L=E.querySelector(".pops-panel-item-left-desc-text");try{T.afterRender({...C,$leftContainer:k,$leftText:U,$leftDesc:L});}catch(_){console.log(_),TagUtil.setTag(U,"error","afterRender 函数执行错误"+_);}}}}),CommonUtil={addBlockCSS(...S){let w=[];if(S.length!==0&&!(S.length===1&&typeof S[0]=="string"&&S[0].trim()===""))return S.forEach(A=>{Array.isArray(A)?w=w.concat(A):w.push(A);}),addStyle(`${w.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(S){let w=typeof _GM_getResourceText=="function"?_GM_getResourceText(S.keyName):"";typeof w=="string"&&w?addStyle(w):CommonUtil.addLinkNode(S.url);},async addLinkNode(S){let w=document.createElement("link");return w.rel="stylesheet",w.type="text/css",w.href=S,domUtils.ready(()=>{document.head.appendChild(w);}),w},fixUrl(S){return S=S.trim(),S.match(/^http(s|):\/\//i)||(S.startsWith("/")||(S+="/"),S=window.location.origin+S),S},escapeHtml(S){return S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}},GlobalUtil={getWindow(){return GMTotal.unsafeWindow.isSupport()?_unsafeWindow:window}};class TestUIBase{}class ApiTestBase extends TestUIBase{isSupportGM(){return typeof _GM=="object"&&_GM!=null}}class ApiAsyncTestBase extends ApiTestBase{}class ApiTest_addElement extends ApiAsyncTestBase{getApiName(){return "GM_addElement"}getAsyncApiOption(){return {name:"GM.addElement",isSupport:this.isSupportGM()&&typeof _GM.addElement=="function"}}isSupport(){return typeof _GM_addElement=="function"}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{let T=null,E=null;try{let k=GlobalUtil.getWindow(),U="GM_addElement_test_script_exec";return T=_GM_addElement("script",{id:U,textContent:'window.GM_addElement_test_str = "bar";'}),E=document.querySelector("#"+U),T==null?{text:"GM_addElement is not retrun element",tag:"error"}:typeof k.GM_addElement_test_str!="string"?{text:"GM_addElement script element is not work",tag:"error"}:(Reflect.deleteProperty(k,"GM_addElement_test_str"),{text:CommonUtil.escapeHtml("支持添加<script>元素且执行js"),tag:"success"})}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{E==null||E.remove();}}),UIInfo(()=>{let T=null,E=null;try{let k="GM_addElement_test2";if(T=_GM_addElement(document.body,"div",{"data-src":"https://example.com/image.png",id:k}),E=document.querySelector("#"+k),!E)return {text:"不支持3个参数",tag:"error"};const U=E.attachShadow({mode:"closed"});return _GM_addElement(U,"style",{textContent:"div { color: black; };"}),U.querySelector("style")?T==null?{text:"传入3个参数但是返回为空",tag:"error"}:E.hasAttribute("data-src")?{text:"支持3个参数并返回元素对象",tag:"success"}:{text:"不支持设置自定义属性data-src",tag:"error"}:{text:"不支持3个参数的shadowRoot",tag:"error"}}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{E==null||E.remove();}})),C}}class ApiTest_addStyle extends ApiAsyncTestBase{isSupport(){return typeof _GM_addStyle=="function"}getApiName(){return "GM_addStyle"}getAsyncApiOption(){return {name:"GM.addStyle",isSupport:this.isSupportGM()&&typeof _GM.addStyle=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-GM_addStyle"+w,title:w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{let T=null,E=null;try{return T=domUtils.createElement("div",{id:w,innerText:w+" test"}),document.body.appendChild(T),E=_GM_addStyle(`
                            #${w} {
                                background-color: rgb(255, 0, 0);
                            }
                        `),E==null?{text:w+" returns is null",tag:"error"}:window.getComputedStyle(T).backgroundColor!=="rgb(255, 0, 0)"?{text:w+" test element background is not rgb(255, 0, 0)",tag:"error"}:{text:CommonUtil.escapeHtml("支持添加CSS字符串并返回元素对象"),tag:"success"}}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{T==null||T.remove(),E==null||E.remove();}})),C}}class ApiTest_addValueChangeListener extends ApiAsyncTestBase{isSupport(){return typeof _GM_addValueChangeListener=="function"}getApiName(){return "GM_addValueChangeListener"}getAsyncApiOption(){return {name:"GM.addValueChangeListener",isSupport:this.isSupportGM()&&typeof _GM.addValueChangeListener=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_cookie extends ApiAsyncTestBase{isSupport(){return (typeof _GM_cookie=="object"||typeof _GM_cookie=="function")&&_GM_cookie!=null}getApiOption(){let w=this.isSupport();return {isSupportList:w&&typeof _GM_cookie.list=="function",isSupportSet:w&&typeof _GM_cookie.set=="function",isSupportDelete:w&&typeof _GM_cookie.delete=="function"}}getApiName(){return "GM_cookie"}getAsyncApiOption(){let w=this.isSupportGM()&&typeof _GM.cookie=="object"&&_GM.cookie!=null;return {name:"GM.cookie",isSupport:w,isSupportList:w&&typeof _GM.cookie.list=="function",isSupportSet:w&&typeof _GM.cookie.set=="function",isSupportDelete:w&&typeof _GM.cookie.delete=="function"}}getUIOption(){let w=this.getApiName(),A=this.getApiOption(),C=this.getAsyncApiOption(),T={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${C.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(k){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]},E=T.forms[0].forms;return this.isSupport()&&E.push(UIInfo(()=>A.isSupportList?{text:`支持 ${w}.list`,tag:"success"}:{text:`不支持 ${w}.list`,tag:"error"}),UIInfo(()=>A.isSupportSet?{text:`支持 ${w}.set`,tag:"success"}:{text:`不支持 ${w}.set`,tag:"error"}),UIInfo(()=>A.isSupportDelete?{text:`支持 ${w}.delete`,tag:"success"}:{text:`不支持 ${w}.delete`,tag:"error"})),C.isSupport?E.push(UIInfo(()=>C.isSupportList?{text:`支持 ${C.name}.list`,tag:"success"}:{text:`不支持 ${C.name}.list`,tag:"error"}),UIInfo(()=>C.isSupportSet?{text:`支持 ${C.name}.set`,tag:"success"}:{text:`不支持 ${C.name}.set`,tag:"error"}),UIInfo(()=>C.isSupportDelete?{text:`支持 ${C.name}.delete`,tag:"success"}:{text:`不支持 ${C.name}.delete`,tag:"error"})):E.push(UIInfo(()=>({text:"不支持 "+C.name,tag:"error"}))),this.isSupport()&&T.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(k){return console.error(k),{text:"执行错误 "+k,tag:"error"}}finally{}})),T}}class ApiTest_deleteValue extends ApiAsyncTestBase{isSupport(){return typeof _GM_deleteValue=="function"}getApiName(){return "GM_deleteValue"}getAsyncApiOption(){return {name:"GM.deleteValue",isSupport:this.isSupportGM()&&typeof _GM.deleteValue=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.name?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_deleteValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_deleteValues=="function"}getApiName(){return "GM_deleteValues"}getAsyncApiOption(){return {name:"GM.deleteValues",isSupport:this.isSupportGM()&&typeof _GM.deleteValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_download extends ApiAsyncTestBase{isSupport(){return typeof _GM_download=="function"}getApiName(){return "GM_download"}getAsyncApiOption(){return {name:"GM.download",isSupport:this.isSupportGM()&&typeof _GM.download=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>({text:CommonUtil.escapeHtml("TODO"),tag:"info",afterRender(T){var E;(E=T.target)==null||E.querySelector(".support-info");}}))),C}}class ApiTest_getResourceText extends ApiAsyncTestBase{isSupport(){return typeof _GM_getResourceText=="function"}getApiName(){return "GM_getResourceText"}getAsyncApiOption(){return {name:"GM.getResourceText",isSupport:this.isSupportGM()&&typeof _GM.getResourceText=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return typeof _GM_getResourceText("ViewerCSS")=="string"?{text:CommonUtil.escapeHtml("支持通过@resource引用资源字符串"),tag:"success"}:{text:CommonUtil.escapeHtml("GM_getResourceText return is not string"),tag:"error"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_getResourceUrl extends ApiAsyncTestBase{isSupport(){return typeof _GM_getResourceURL=="function"}getApiName(){return "GM_getResourceURL"}getAsyncApiOption(){return {name:"GM.getResourceUrl",isSupport:this.isSupportGM()&&typeof _GM.getResourceUrl=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{let T=_GM_getResourceURL("ViewerCSS");return typeof T=="string"?T.trim().startsWith("data:text/css;base64")?{text:CommonUtil.escapeHtml("支持通过@resource引用资源并进行base64编码"),tag:"success"}:{text:CommonUtil.escapeHtml("支持通过@resource引用资源，但是未对资源进行base64编码"),tag:"warn"}:{text:CommonUtil.escapeHtml("GM_getResourceURL return is not string"),tag:"error"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_getTab extends ApiAsyncTestBase{isSupport(){return typeof _GM_getTab=="function"}getApiName(){return "GM_getTab"}getAsyncApiOption(){return {name:"GM.getTab",isSupport:this.isSupportGM()&&typeof _GM.getTab=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_getTabs extends ApiAsyncTestBase{isSupport(){return typeof _GM_getTabs=="function"}getApiName(){return "GM_getTabs"}getAsyncApiOption(){return {name:"GM.getTabs",isSupport:this.isSupportGM()&&typeof _GM.getTabs=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_getValue extends ApiAsyncTestBase{isSupport(){return typeof _GM_getValue=="function"}getApiName(){return "GM_getValue"}getAsyncApiOption(){return {name:"GM.getValue",isSupport:this.isSupportGM()&&typeof _GM.getValue=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(...[{key:"Test GM_getValue boolean",value:!0,text:function(){return "存储boolean类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue number",value:1,text:function(){return "存储number类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue string",value:"测试字符串",text:function(){return "存储string类型并读取"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_getValue undefined",value:void 0,text:function(){return "存储undefined类型并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue null",value:null,text:function(){return "存储object类型的null并读取"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_getValue object",value:{"object key":"object value"},text:function(){return "存储object类型并读取"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(T=>(()=>{let E=T.key,k=T.value;return UIInfo(()=>({text:T.text(),description:T.desc(),tag:"info",afterRender(U){let L=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,!1,!1);domUtils.after(U.$leftContainer,L),domUtils.on(L,"click",_=>{utils.preventEvent(_);try{_GM_setValue(E,k);let I=_GM_getValue(E);if(typeof I==typeof k){if(k===null&&k!=I){qmsg.error("读取成功，但存储类型和读取类型不同，存储类型为null，但读取类型不为null");return}qmsg.success("读取成功，存储类型和读取类型一致");}else qmsg.error("读取成功，但存储类型和读取类型不同");}catch(I){qmsg.error(I.toString(),{consoleLogContent:!0});}});}}))})()),(()=>{let T="Test GM_getValue null with defaultValue",E=123;return UIInfo(()=>({text:"存储object类型的null，读取时指定默认值为"+E,description:`GM_getValue("${T}", ${E})`,tag:"info",afterRender(k){let U=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,!1,!1);domUtils.after(k.$leftContainer,U),domUtils.on(U,"click",L=>{utils.preventEvent(L);try{_GM_setValue(T,null);let _=_GM_getValue(T,E);typeof _=="object"&&_==null?qmsg.success("读取的值是存储的值："+_):qmsg.error("读取的值不是存储的值："+_);}catch(_){qmsg.error(_.toString(),{consoleLogContent:!0});}});}}))})(),(()=>{let T="Test GM_getValue defaultValue",E=123;return UIInfo(()=>({text:"不存储，测试调用默认值",description:`GM_getValue("${T}", ${E})`,tag:"info",afterRender(k){let U=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,!1,!1);domUtils.after(k.$leftContainer,U),domUtils.on(U,"click",L=>{utils.preventEvent(L);try{let _=_GM_getValue(T,E);typeof _==typeof E?qmsg.success("读取的值是默认值："+_):qmsg.error("读取的值不是默认值："+_);}catch(_){qmsg.error(_.toString(),{consoleLogContent:!0});}});}}))})()),C}}class ApiTest_getValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_getValues=="function"}getApiName(){return "GM_getValues"}getAsyncApiOption(){return {name:"GM.getValues",isSupport:this.isSupportGM()&&typeof _GM.getValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_info extends ApiAsyncTestBase{isSupport(){return typeof _GM_info=="object"&&_GM_info!=null}getApiName(){return "GM_info"}getAsyncApiOption(){return {name:"GM.info",isSupport:this.isSupportGM()&&typeof _GM.info=="object"}}getUIOption(){var T,E;let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(k){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(...[{value:_GM_info==null?void 0:_GM_info.scriptHandler,type:"string",text:"GM_info.scriptHandler"},{value:_GM_info==null?void 0:_GM_info.scriptMetaStr,type:"string",text:"GM_info.scriptMetaStr"},{value:_GM_info==null?void 0:_GM_info.version,type:"string",text:"GM_info.version"},{value:_GM_info==null?void 0:_GM_info.script,type:"object",text:"GM_info.script"},{value:(T=_GM_info==null?void 0:_GM_info.script)==null?void 0:T.name,type:"string",text:"GM_info.script.name"},{value:(E=_GM_info==null?void 0:_GM_info.script)==null?void 0:E.version,type:"string",text:"GM_info.script.version"}].map(k=>UIInfo(()=>{try{return k.value!=null&&typeof k.value===k.type?{text:"支持 "+k.text+" 类型："+k.type,tag:"success"}:{text:"不支持 "+k.text+" 类型："+k.type,tag:"error"}}catch(U){return console.error(U),{text:"执行错误 "+U,tag:"error"}}finally{}}))),C}}class ApiTest_listValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_listValues=="function"}getApiName(){return "GM_listValues"}getAsyncApiOption(){return {name:"GM.listValues",isSupport:this.isSupportGM()&&typeof _GM.listValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_log extends ApiAsyncTestBase{isSupport(){return typeof _GM_log=="function"}getApiName(){return "GM_log"}getAsyncApiOption(){return {name:"GM.log",isSupport:this.isSupportGM()&&typeof _GM.log=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{let T="test GM_log";return {text:CommonUtil.escapeHtml("请在控制台查看输出"),tag:"info",description:"test GM_log",afterRender(E){let k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
								`,!1,!1);domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_log(T);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(E.$leftContainer,k);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_notification extends ApiAsyncTestBase{isSupport(){return typeof _GM_notification=="function"}getApiName(){return "GM_notification"}getAsyncApiOption(){return {name:"GM.notification",isSupport:this.isSupportGM()&&typeof _GM.notification=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{let T,E,k=!1,U=!1,L=!1;return {text:"点击通知的内容用于测试函数是否生效",description:"",tag:"info",afterRender(_){T=_.target,E=_.$leftContainer;let I=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),$,P,H=utils.debounce(()=>{try{clearTimeout($),clearInterval(P);let V="",D="success",N="",R="success";k?(V+="支持 onclick 函数",U?(V=V.trim(),V+="且支持提供 event 参数"):(V+="但是不支持提供 event 参数",D="warn")):(V+="不支持 onclick 函数",D="error"),L?N+="支持 ondone 函数":(N+="不支持 ondone 函数",R="error"),domUtils.html(_.$leftText,`
										<p class="${D}">${V}</p>
										<p class="${R}">${N}</p>
									`),k=!1,L=!1,U=!1;}catch(V){qmsg.error(V.toString(),{consoleLogContent:!0});}},800);domUtils.on(I,"click",V=>{try{utils.preventEvent(V),clearTimeout($),clearInterval(P);let D=10,N=D,R=()=>{let F=`正在等待触发回调，请在规定时间内点击弹窗的【关闭】按钮或者内容：${N}s`;return N--,F};domUtils.text(_.$leftText,R()),domUtils.text(_.$leftDesc,this.text),domUtils.show(_.$leftDesc,!1),$=setTimeoutLog(()=>{clearInterval(P),TagUtil.setTag(_.$leftText,"error","测试超时，未触发回调");},D*1e3),P=setInterval(()=>{domUtils.text(_.$leftText,R());},1e3),_GM_notification({title:"测试 GM_notification 标题",text:"测试 GM_notification 内容",url:"https:/example.com/",onclick:F=>{k=!0,F&&(U=!0,F.preventDefault()),H();},ondone(){L=!0,H();}});}catch(D){qmsg.error(D.toString(),{consoleLogContent:!0});}}),domUtils.after(E,I);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}}),UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("点击通知的内容跳转链接"),tag:"info",afterRender(T){let E=T.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.on(k,"click",U=>{utils.preventEvent(U);try{_GM_notification({title:"测试 GM_notification 标题",text:"测试 GM_notification 内容",url:"https:/example.com/"});}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,k);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}})),C}}class ApiTest_openInTab extends ApiAsyncTestBase{isSupport(){return typeof _GM_openInTab=="function"}getApiName(){return "GM_openInTab"}getAsyncApiOption(){return {name:"GM.openInTab",isSupport:this.isSupportGM()&&typeof _GM.openInTab=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:"后台打开：https://www.example.com/",tag:"info",afterRender(T){let E=T.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1);domUtils.on(k,"click",U=>{try{utils.preventEvent(U),domUtils.text(T.$leftDesc,this.text),domUtils.show(T.$leftDesc,!1);let L=_GM_openInTab("https://www.example.com/");if(typeof L=="object")if(L==null)TagUtil.setTag(T.$leftText,"error","返回值为null");else {let _="close"in L&&typeof L.close=="function",I="closed"in L&&typeof L.closed=="boolean",$="onclose"in L;domUtils.html(T.$leftText,`
											<p class="${_?"success":"error"}">${_?"支持 .close()":"不支持 .close()"}</p>
											<p class="${I?"success":"error"}">${_?"支持 .closed":"不支持 .closed"}</p>
											<p class="${$?"success":"error"}">${_?"支持设置属性 .onclose":"不支持设置属性 .onclose"}</p>
										`);}else TagUtil.setTag(T.$leftText,"error","返回值不是对象："+typeof L);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,k);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}}),UIInfo(()=>{try{return {text:"配置 active: true",description:"",tag:"info",afterRender(T){let E=T.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
									`,!1,!1),U,L=()=>{clearTimeout(U),TagUtil.setTag(T.$leftText,"success","测试新标签页打开成功");};domUtils.on(k,"click",_=>{try{utils.preventEvent(_),domUtils.off(_unsafeWindow,"blur",L,{capture:!0}),clearTimeout(U),TagUtil.setTag(T.$leftText,"info","等待页面失去焦点..."),domUtils.text(T.$leftDesc,this.text),domUtils.show(T.$leftDesc,!1),domUtils.on(_unsafeWindow,"blur",L,{capture:!0,once:!0}),_GM_openInTab("https://www.example.com/",{active:!0}),U=setTimeoutLog(()=>{domUtils.off(_unsafeWindow,"blur",L,{capture:!0}),TagUtil.setTag(T.$leftText,"error","测试超时，未打开新标签页并获取焦点");},3e3);}catch(I){qmsg.error(I.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,k);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}}),UIInfo(()=>{try{return {text:"测试调用返回值 .close()",tag:"info",afterRender(T){let E=T.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),U;domUtils.on(k,"click",L=>{try{utils.preventEvent(L),clearTimeout(U),TagUtil.setTag(T.$leftText,"info","等待调用 .close()"),domUtils.text(T.$leftDesc,this.text),domUtils.show(T.$leftDesc,!1);let _=_GM_openInTab("https://www.example.com/");_&&typeof(_==null?void 0:_.close)=="function"?U=setTimeoutLog(()=>{try{_.close(),TagUtil.setTag(T.$leftText,"success","成功调用 .close()");}catch(I){TagUtil.setTag(T.$leftText,"error","调用 .close() 方法失败 "+I);}},1e3):TagUtil.setTag(T.$leftText,"error","返回对象中不支持 .close() 方法");}catch(_){qmsg.error(_.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,k);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}}),UIInfo(()=>{try{return {text:"测试监听关闭是否生效 .onclose",tag:"info",afterRender(T){let E=T.target,k=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1),U,L;domUtils.on(k,"click",_=>{try{utils.preventEvent(_),clearTimeout(L),clearTimeout(U),TagUtil.setTag(T.$leftText,"info","等待触发监听 .onclose"),domUtils.text(T.$leftDesc,this.text),domUtils.show(T.$leftDesc,!1);let I=_GM_openInTab("https://www.example.com/");typeof I=="object"&&I!=null&&(I.onclose=()=>{clearTimeout(U),clearTimeout(L),TagUtil.setTag(T.$leftText,"success","成功触发 .onclose");}),I&&typeof(I==null?void 0:I.close)=="function"?U=setTimeoutLog(()=>{try{I.close(),L=setTimeoutLog(()=>{TagUtil.setTag(T.$leftText,"error","测试超时，未触发回调 .onclose");},2e3);}catch($){TagUtil.setTag(T.$leftText,"error","调用 .close() 方法失败 "+$);}},1e3):TagUtil.setTag(T.$leftText,"error","返回对象中不支持 .close() 方法");}catch(I){qmsg.error(I.toString(),{consoleLogContent:!0});}}),domUtils.after(T.$leftContainer,k);}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}})),C}}class ApiTest_registerMenuCommand extends ApiAsyncTestBase{isSupport(){return typeof _GM_registerMenuCommand=="function"}getApiName(){return "GM_registerMenuCommand"}getAsyncApiOption(){return {name:"GM.registerMenuCommand",isSupport:this.isSupportGM()&&typeof _GM.registerMenuCommand=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:"注册菜单 ==> Test Menu",tag:"info",afterRender(T){let E=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.after(T.$leftContainer,E);let k,U;domUtils.on(E,"click",L=>{try{utils.preventEvent(L),clearTimeout(k),clearInterval(U),domUtils.text(T.$leftDesc,this.text),domUtils.show(T.$leftDesc,!1);let _=10,I=()=>{let P=`已执行注册菜单，请在${_}s内点击菜单项`;return _--,P};TagUtil.setTag(T.$leftText,"info",I()),U=setInterval(()=>{TagUtil.setTag(T.$leftText,"info",I());},1e3),k=setTimeoutLog(()=>{clearInterval(U),TagUtil.setTag(T.$leftText,"error","测试超时，未触发回调");},10*1e3);const $=_GM_registerMenuCommand("Test Menu",P=>{try{clearInterval(U),clearTimeout(k),TagUtil.clearTag(T.$leftText);let H=[];H.push({tag:"success",text:"支持注册菜单"}),P?H.push({tag:"success",text:"支持点击回调且有event参数"}):H.push({tag:"warn",text:"支持点击回调但是没有event参数"}),typeof $=="number"||typeof $=="string"?H.push({tag:"success",text:"函数返回值是string|number"}):H.push({tag:"error",text:"函数返回值不是string|number："+typeof $}),domUtils.html(T.$leftText,H.map(V=>`<p class="${V.tag}">${V.text}</p>`).join(`
`));}catch(H){qmsg.error(H.toString(),{consoleLogContent:!0});}});}catch(_){qmsg.error(_.toString(),{consoleLogContent:!0});}});}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}}),UIInfo(()=>{try{return {text:"注册并更新菜单 ==> Test Update Menu",description:"请自行验证是否成功更新菜单文字为：Test Update Menu Success!!!",tag:"info",afterRender(T){let E=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.after(T.$leftContainer,E);let k;domUtils.on(E,"click",U=>{try{utils.preventEvent(U),clearTimeout(k);const L=_GM_registerMenuCommand("Test Update Menu",_=>{});qmsg.info("已注册菜单，3s后自动更新",{timeout:3e3}),clearTimeout(k),k=setTimeoutLog(()=>{_GM_registerMenuCommand("Test Update Menu Success!!!",()=>{},{id:L}),qmsg.success("已执行更新菜单命令，请自行验证");},3e3);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}});}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_removeValueChangeListener extends ApiAsyncTestBase{isSupport(){return typeof _GM_removeValueChangeListener=="function"}getApiName(){return "GM_removeValueChangeListener"}getAsyncApiOption(){return {name:"GM.removeValueChangeListener",isSupport:this.isSupportGM()&&typeof _GM.removeValueChangeListener=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_saveTab extends ApiAsyncTestBase{isSupport(){return typeof _GM_saveTab=="function"}getApiName(){return "GM_saveTab"}getAsyncApiOption(){return {name:"GM.saveTab",isSupport:this.isSupportGM()&&typeof _GM.saveTab=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_setClipboard extends ApiAsyncTestBase{isSupport(){return typeof _GM_setClipboard=="function"}getApiName(){return "GM_setClipboard"}getAsyncApiOption(){return {name:"GM.setClipboard",isSupport:this.isSupportGM()&&typeof _GM.setClipboard=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>({text:"复制内容到剪贴板：Test GM_setClipboard",tag:"info",afterRender(T){let E=domUtils.parseHTML(`
								<div class="pops-panel-button pops-panel-button-no-icon">
									<button class="pops-panel-button_inner" type="default">
										<i class="pops-bottom-icon" is-loading="false"></i>
										<span class="pops-panel-button-text">点击测试</span>
									</button>
								</div>
							`,!1,!1);domUtils.after(T.$leftContainer,E);let k;domUtils.on(E,"click",U=>{try{utils.preventEvent(U),clearTimeout(k),qmsg.info("等待3s内触发成功复制的回调"),k=setTimeoutLog(()=>{TagUtil.setTag(T.$leftText,"error","不支持触发回调函数");},3e3),_GM_setClipboard("Test GM_setClipboard","text",()=>{clearTimeout(k),TagUtil.setTag(T.$leftText,"success","支持触发回调函数");});}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}});}}))),C}}class ApiTest_setValue extends ApiAsyncTestBase{isSupport(){return typeof _GM_setValue=="function"}getApiName(){return "GM_setValue"}getAsyncApiOption(){return {name:"GM.setValue",isSupport:this.isSupportGM()&&typeof _GM.setValue=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(...[{key:"Test GM_setValue boolean",value:!0,text:function(){return "存储boolean类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue number",value:1,text:function(){return "存储number类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue string",value:"测试字符串",text:function(){return "存储string类型"},desc:function(){return `"${this.key}": "${this.value}"`}},{key:"Test GM_setValue undefined",value:void 0,text:function(){return "存储undefined类型"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue null",value:null,text:function(){return "存储object类型的null"},desc:function(){return `"${this.key}": ${this.value}`}},{key:"Test GM_setValue object",value:{"object key":"object value"},text:function(){return "存储object类型"},desc:function(){return `"${this.key}": ${JSON.stringify(this.value)}`}}].map(T=>(()=>{let E=T.key,k=T.value;return UIInfo(()=>({text:T.text(),description:T.desc(),tag:"info",afterRender(U){let L=domUtils.parseHTML(`
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,!1,!1);domUtils.after(U.$leftContainer,L),domUtils.on(L,"click",_=>{utils.preventEvent(_);try{_GM_setValue(E,k),qmsg.info("执行写入完毕，请自行查看是否成功写入");}catch(I){qmsg.error(I.toString(),{consoleLogContent:!0});}});}}))})())),C}}class ApiTest_setValues extends ApiAsyncTestBase{isSupport(){return typeof _GM_setValues=="function"}getApiName(){return "GM_setValues"}getAsyncApiOption(){return {name:"GM.setValues",isSupport:this.isSupportGM()&&typeof _GM.setValues=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_unregisterMenuCommand extends ApiAsyncTestBase{isSupport(){return typeof _GM_unregisterMenuCommand=="function"}getApiName(){return "GM_unregisterMenuCommand"}getAsyncApiOption(){return {name:"GM.unregisterMenuCommand",isSupport:this.isSupportGM()&&typeof _GM.unregisterMenuCommand=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:"注册并卸载菜单 ==> Test UnRegister Menu",description:"请自行验证是否成功卸载菜单",tag:"info",afterRender(T){let E=domUtils.parseHTML(`
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击测试</span>
										</button>
									</div>
								`,!1,!1);domUtils.after(T.$leftContainer,E);let k;domUtils.on(E,"click",U=>{try{utils.preventEvent(U),clearTimeout(k);const L=_GM_registerMenuCommand("Test UnRegister Menu",_=>{});qmsg.info("已注册菜单，10s后自动执行卸载",{timeout:5*1e3}),clearTimeout(k),k=setTimeoutLog(()=>{_GM_unregisterMenuCommand(L),qmsg.success("已执行卸载菜单命令，请自行验证");},10*1e3);}catch(L){qmsg.error(L.toString(),{consoleLogContent:!0});}});}}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_unsafeWindow extends ApiAsyncTestBase{getApiName(){return "unsafeWindow"}getAsyncApiOption(){}isSupport(){return typeof _unsafeWindow=="object"&&_unsafeWindow!=null}getUIOption(){let w=this.getApiName(),A={id:"aside-"+w,title:w,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(C){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&A.forms[1].forms.push(UIInfo(()=>{let C="test-gm-window",T=_monkeyWindow==_unsafeWindow;return _monkeyWindow[C]=C,T=typeof _unsafeWindow[C]!="string",Reflect.deleteProperty(_monkeyWindow,C),T?{text:"window已被Proxy代理",tag:"success"}:{text:"window未被Proxy代理，定义全局变量时会影响到页面变量",tag:"warn"}})),A}}class ApiTest_webRequest extends ApiAsyncTestBase{isSupport(){return typeof _GM_webRequest=="function"}getApiName(){return "GM_webRequest"}getAsyncApiOption(){return {name:"GM.webRequest",isSupport:this.isSupportGM()&&typeof _GM.webRequest=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_xmlHttpRequest extends ApiAsyncTestBase{isSupport(){return typeof _GM_xmlhttpRequest=="function"}getApiName(){return "GM_xmlHttpRequest"}getAsyncApiOption(){return {name:"GM.xmlHttpRequest",isSupport:this.isSupportGM()&&typeof _GM.xmlHttpRequest=="function"}}getUIOption(){let w=this.getApiName(),A=this.getAsyncApiOption(),C={id:"aside-"+w,title:""+w,headerTitle:`${w} & ${A.name}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(T){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"函数测试",forms:[UIInfo(()=>this.isSupport()?{text:"支持 "+w,tag:"success"}:{text:"不支持 "+w,tag:"error"}),UIInfo(()=>A.isSupport?{text:"支持 "+A.name,tag:"success"}:{text:"不支持 "+A.name,tag:"error"})]},{type:"forms",text:"功能测试",forms:[]}]};return this.isSupport()&&C.forms[1].forms.push(UIInfo(()=>{try{return {text:CommonUtil.escapeHtml("TODO"),tag:"info"}}catch(T){return console.error(T),{text:"执行错误 "+T,tag:"error"}}finally{}})),C}}class ApiTest_GM extends ApiAsyncTestBase{getApiName(){return "GM"}getAsyncApiOption(){}isSupport(){return typeof _GM=="object"&&_GM!=null}getUIOption(){}}const GMTotal={unsafeWindow:new ApiTest_unsafeWindow,GM:new ApiTest_GM,addElement:new ApiTest_addElement,addStyle:new ApiTest_addStyle,download:new ApiTest_download,getResourceText:new ApiTest_getResourceText,getResourceUrl:new ApiTest_getResourceUrl,info:new ApiTest_info,log:new ApiTest_log,notification:new ApiTest_notification,openInTab:new ApiTest_openInTab,registerMenuCommand:new ApiTest_registerMenuCommand,unregisterMenuCommand:new ApiTest_unregisterMenuCommand,setClipboard:new ApiTest_setClipboard,getTab:new ApiTest_getTab,saveTab:new ApiTest_saveTab,getTabs:new ApiTest_getTabs,setValue:new ApiTest_setValue,getValue:new ApiTest_getValue,deleteValue:new ApiTest_deleteValue,listValues:new ApiTest_listValues,setValues:new ApiTest_setValues,getValues:new ApiTest_getValues,deleteValues:new ApiTest_deleteValues,addValueChangeListener:new ApiTest_addValueChangeListener,removeValueChangeListener:new ApiTest_removeValueChangeListener,xmlHttpRequest:new ApiTest_xmlHttpRequest,webRequest:new ApiTest_webRequest,cookie:new ApiTest_cookie},LocalStorageApi={$storageKey:"gm-api-test-storage-config",set(S,w){let A=window.localStorage.getItem(LocalStorageApi.$storageKey)??"{}",C=utils.toJSON(A);C[S]=w,window.localStorage.setItem(LocalStorageApi.$storageKey,JSON.stringify(C,(T,E)=>typeof E=="function"?E.tString():E));},get(S,w){let A=window.localStorage.getItem(LocalStorageApi.$storageKey)??"{}";return utils.toJSON(A)[S]??w},delete(S){let w=window.localStorage.getItem(LocalStorageApi.$storageKey)??"{}",A=utils.toJSON(w);Reflect.deleteProperty(A,S),window.localStorage.setItem(LocalStorageApi.$storageKey,JSON.stringify(A,(C,T)=>typeof T=="function"?T.tString():T));}},StorageApi={set(S,w){GMTotal.setValue.isSupport()&&GMTotal.getValue.isSupport()&&GMTotal.deleteValue.isSupport()?_GM_setValue(S,w):LocalStorageApi.set(S,w);},get(S,w){return GMTotal.setValue.isSupport()&&GMTotal.getValue.isSupport()&&GMTotal.deleteValue.isSupport()?_GM_getValue(S,w):LocalStorageApi.get(S,w)},delete(S){GMTotal.setValue.isSupport()&&GMTotal.getValue.isSupport()&&GMTotal.deleteValue.isSupport()?_GM_deleteValue(S):LocalStorageApi.delete(S);}},_SCRIPT_NAME_="Monkey Api Test",utils=utils$1.noConflict(),domUtils=domUtils$1.noConflict(),__pops=pops,log=new utils.Log(_GM_info,window.console);var le;const SCRIPT_NAME=((le=_GM_info==null?void 0:_GM_info.script)==null?void 0:le.name)||_SCRIPT_NAME_,DEBUG=!1;log.config({debug:DEBUG,logMaxCount:1e3,autoClearConsole:!0,tag:!0});qmsg.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return PopsPanel.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return PopsPanel.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return PopsPanel.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let S=utils$1.getMaxZIndex(),w=pops.config.InstanceUtils.getPopsMaxZIndex(S).zIndex;return utils$1.getMaxValue(S,w)+100}}}));const GM_Menu=new utils.GM_Menu({GM_getValue:GMTotal.getValue.isSupport()?_GM_getValue:StorageApi.get,GM_setValue:GMTotal.setValue.isSupport()?_GM_setValue:StorageApi.set,GM_registerMenuCommand:GMTotal.registerMenuCommand.isSupport()?_GM_registerMenuCommand:()=>{},GM_unregisterMenuCommand:GMTotal.unregisterMenuCommand.isSupport()?_GM_unregisterMenuCommand:()=>{}}),addStyle=utils.addStyle.bind(utils);document.querySelector.bind(document);document.querySelectorAll.bind(document);let injectDocumentTime="";document.documentElement?document.head?document.body?injectDocumentTime=`<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

似乎注入到页面有点慢
`:document.head.childNodes.length?injectDocumentTime=`<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入到页面很快`:injectDocumentTime=`<html>
	<head></head>
</html>

注入到页面非常快`:injectDocumentTime=`<html>
</html>

注入到页面超级快`:injectDocumentTime=`document.documentElement is null
	
注入到页面超级无敌快`;const setTimeoutLog=(S,w,...A)=>setTimeout(()=>{try{S(...A);}catch(C){qmsg.error(C.toString(),{consoleLogContent:!0});}},w),KEY="GM_Panel",ATTRIBUTE_INIT="data-init",ATTRIBUTE_KEY="data-key",ATTRIBUTE_DEFAULT_VALUE="data-default-value",ATTRIBUTE_INIT_MORE_VALUE="data-init-more-value",Component_Common=()=>{let S=[],w=[];Object.keys(GMTotal).forEach(C=>{let T=GMTotal[C],E=T.getApiName(),k=T.isSupport(),U=T.getAsyncApiOption();k?S.push({name:E,isSupport:k}):w.push({name:E,isSupport:k}),U&&(U.isSupport?S.push({name:U.name,isSupport:U.isSupport,leftTargetSelector:"#aside-"+E}):w.push({name:U.name,isSupport:U.isSupport,leftTargetSelector:"#aside-"+E}));});let A=C=>{let T=domUtils.createElement("div",{className:"gm-api-features-item",innerHTML:`
				<div class="gm-api-features-item__label">${C.name}</div>
				<div class="gm-api-features-item__value">
					<span style="font-size: 16px; font-weight: 700;">
						${C.isSupport?`
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
			`});return domUtils.on(T,"click",E=>{utils.preventEvent(E);let k=T.getRootNode(),U=utils.isNotNull(C.leftTargetSelector)?C.leftTargetSelector:"#aside-"+C.name,L=k.querySelector(U);L&&(L.click(),L.scrollIntoView({behavior:"smooth"}));}),T};return {id:"component-common",title:"通用",scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)==="component-common"},callback(C){StorageApi.set(PanelKeyConfig.asideLastVisit,"component-common");},forms:[{type:"forms",text:"@run-at document-start",forms:[UIInfo(()=>({text:CommonUtil.escapeHtml(injectDocumentTime),tag:"info"}))]},{type:"forms",text:"特性",afterAddToUListCallBack(C,T){T.formHeaderDivElement.style.fontSize="1.2em",T.formHeaderDivElement.style.fontWeight="700";},forms:[]},{type:"forms",text:"不支持列表",afterAddToUListCallBack(C,T){var E;T.formHeaderDivElement.style.color="rgb(216, 30, 6)",T.formHeaderDivElement.style.fontWeight="600",w.length===0&&((E=T.formContainerListElement)==null||E.remove());},forms:[{type:"own",getLiElementCallBack(C){let T=domUtils.createElement("div",{className:"gm-api-features-not-support"}),E=document.createDocumentFragment();return w.forEach(k=>{E.append(A(k));}),T.appendChild(E),C.appendChild(T),C}}]},{type:"forms",text:"支持列表",afterAddToUListCallBack(C,T){var E;T.formHeaderDivElement.style.fontWeight="600",S.length===0&&((E=T.formContainerListElement)==null||E.remove());},forms:[{type:"own",getLiElementCallBack(C){let T=domUtils.createElement("div",{className:"gm-api-features-support"}),E=document.createDocumentFragment();return S.forEach(k=>{E.append(A(k));}),T.appendChild(E),C.appendChild(T),C}}]}]}},PanelUISize={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}};class GrantTest_onurlchange extends ApiTestBase{getApiName(){return "window.onurlchange "}getAsyncApiOption(){}isSupport(){return !0}getUIOption(){let w=this.getApiName();return {id:"aside-"+w,title:""+w,headerTitle:`${w}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(C){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"功能测试",forms:[UIInfo(()=>({text:"TODO",tag:"info",afterRender(C){}}))]}]}}}class GrantTest_close extends ApiTestBase{getApiName(){return "window.close "}getAsyncApiOption(){}isSupport(){return !0}getUIOption(){let w=this.getApiName();return {id:"aside-"+w,title:""+w,headerTitle:`${w}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(C){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"功能测试",forms:[UIInfo(()=>({text:"TODO",tag:"info",afterRender(C){}}))]}]}}}class GrantTest_focus extends ApiTestBase{getApiName(){return "window.focus "}getAsyncApiOption(){}isSupport(){return !0}getUIOption(){let w=this.getApiName();return {id:"aside-"+w,title:""+w,headerTitle:`${w}`,scrollToDefaultView:!0,isDefault(){return StorageApi.get(PanelKeyConfig.asideLastVisit)===w},callback(C){StorageApi.set(PanelKeyConfig.asideLastVisit,w);},forms:[{type:"forms",text:"功能测试",forms:[UIInfo(()=>({text:"TODO",tag:"info",afterRender(C){}}))]}]}}}const PopsPanel={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return PopsPanel.$data.__data==null&&(PopsPanel.$data.__data=new utils.Dictionary),PopsPanel.$data.__data},get oneSuccessExecMenu(){return PopsPanel.$data.__oneSuccessExecMenu==null&&(PopsPanel.$data.__oneSuccessExecMenu=new utils.Dictionary),PopsPanel.$data.__oneSuccessExecMenu},get onceExec(){return PopsPanel.$data.__onceExec==null&&(PopsPanel.$data.__onceExec=new utils.Dictionary),PopsPanel.$data.__onceExec},get scriptName(){return SCRIPT_NAME},key:KEY,attributeKeyName:ATTRIBUTE_KEY,attributeDefaultValueName:ATTRIBUTE_DEFAULT_VALUE},$listener:{get listenData(){return PopsPanel.$data.__listenData==null&&(PopsPanel.$data.__listenData=new utils.Dictionary),PopsPanel.$data.__listenData}},init(){try{this.initPanelDefaultValue(),this.initExtensionsMenu();}catch(S){console.error(S);}},isTopWindow(){return GMTotal.unsafeWindow.isSupport()?_unsafeWindow.top===_unsafeWindow.self:window.top===window.self},initExtensionsMenu(){this.isTopWindow()&&GM_Menu.add([{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:!1,isStoreValue:!1,showText(S){return S},callback:()=>{this.showPanel();}}]);},initPanelDefaultValue(){let S=this;function w(T){if(!T.attributes)return;let E={},k=T.attributes[ATTRIBUTE_KEY];k!=null&&(E[k]=T.attributes[ATTRIBUTE_DEFAULT_VALUE]);let U=T.attributes[ATTRIBUTE_INIT];if(typeof U=="function"){let I=U();if(typeof I=="boolean"&&!I)return}let L=T.attributes[ATTRIBUTE_INIT_MORE_VALUE];L&&typeof L=="object"&&Object.assign(E,L);let _=Object.keys(E);if(!_.length){log.warn(["请先配置键",T]);return}_.forEach(I=>{let $=E[I];S.$data.data.has(I)&&log.warn("请检查该key(已存在): "+I),S.$data.data.set(I,$);});}function A(T){for(let E=0;E<T.length;E++){let k=T[E];w(k);let U=k.forms;U&&Array.isArray(U)&&A(U);}}let C=this.getPanelContentConfig();for(let T=0;T<C.length;T++){let E=C[T];if(!E.forms)continue;let k=E.forms;k&&Array.isArray(k)&&A(k);}},setValue(S,w){let A=StorageApi.get(KEY,{}),C=A[S];A[S]=w,StorageApi.set(KEY,A),this.$listener.listenData.has(S)&&this.$listener.listenData.get(S).callback(S,C,w);},getValue(S,w){let C=StorageApi.get(KEY,{})[S];return C??(this.$data.data.has(S)?this.$data.data.get(S):w)},deleteValue(S){let w=StorageApi.get(KEY,{}),A=w[S];Reflect.deleteProperty(w,S),StorageApi.set(KEY,w),this.$listener.listenData.has(S)&&this.$listener.listenData.get(S).callback(S,A,void 0);},addValueChangeListener(S,w,A){let C=Math.random();return this.$listener.listenData.set(S,{id:C,key:S,callback:w}),A&&A.immediate&&w(S,this.getValue(S),this.getValue(S)),C},removeValueChangeListener(S){let w=null;for(const[A,C]of this.$listener.listenData.entries())if(C.id===S){w=A;break}typeof w=="string"?this.$listener.listenData.delete(w):console.warn("没有找到对应的监听器");},triggerMenuValueChange(S,w,A){if(this.$listener.listenData.has(S)){let C=this.$listener.listenData.get(S);if(typeof C.callback=="function"){let T=this.getValue(S),E=T,k=T;typeof w<"u"&&arguments.length>1&&(E=w),typeof A<"u"&&arguments.length>2&&(k=A),C.callback(S,k,E);}}},hasKey(S){let w=StorageApi.get(KEY,{});return S in w},execMenu(S,w,A=!1,C){if(!(typeof S=="string"||typeof S=="object"&&Array.isArray(S)))throw new TypeError("key 必须是字符串或者字符串数组");let T=[];typeof S=="object"&&Array.isArray(S)?T=[...S]:T.push(S);let E;for(let k=0;k<T.length;k++){const U=T[k];if(!this.$data.data.has(U)){log.warn(`${S} 键不存在`);return}let L=PopsPanel.getValue(U);if(A&&(L=!L),typeof C=="function"){let _=C(U,L);typeof _=="boolean"&&(L=_);}if(!L)break;E=L;}E&&w(E);},execMenuOnce(S,w,A,C,T){if(typeof S!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(S)){log.warn(`${S} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(S))return;this.$data.oneSuccessExecMenu.set(S,1);let E=()=>{let $=PopsPanel.getValue(S);return typeof A=="function"?A(S,$):$},k=[],U=$=>{let P=E(),H=[];if($ instanceof HTMLStyleElement?H=[$]:Array.isArray($)&&(H=[...$.filter(V=>V!=null&&V instanceof HTMLStyleElement)]),P)k=k.concat(H);else for(let V=0;V<H.length;V++)H[V].remove(),H.splice(V,1),V--;},L=$=>typeof T=="function"?T(S,$):$,_=$=>{let P=[];if(L($)){let H=w($,U);H instanceof HTMLStyleElement?P=[H]:Array.isArray(H)&&(P=[...H.filter(V=>V!=null&&V instanceof HTMLStyleElement)]);}for(let H=0;H<k.length;H++)k[H].remove(),k.splice(H,1),H--;k=[...P];};this.addValueChangeListener(S,($,P,H)=>{let V=H;typeof C=="function"&&(V=C($,H,P)),_(V);});let I=E();I&&_(I);},execInheritMenuOnce(S,w,A,C){let T=this;const E=(k,U)=>{let L=T.getValue(k),_=T.getValue(U);if(typeof C=="function"){let I=C(L,_);if(I!=null)return I}return L};this.execMenuOnce(S,A,()=>E(S,w),()=>E(S,w)),this.execMenuOnce(w,()=>{},()=>!1,()=>(this.triggerMenuValueChange(S),!1));},onceExec(S,w){if(typeof S!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(S)||(w(),this.$data.onceExec.set(S,1));},showPanel(){__pops.panel({title:{text:`${SCRIPT_NAME}-设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:PanelUISize.settingBig.width,height:PanelUISize.settingBig.height,drag:!0,only:!0,style:`
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
			`});},getPanelContentConfig(){let S=[Component_Common()];return Object.keys(GMTotal).forEach(w=>{let C=GMTotal[w].getUIOption();C&&S.push(C);}),S.push(new GrantTest_onurlchange().getUIOption()),S.push(new GrantTest_close().getUIOption()),S.push(new GrantTest_focus().getUIOption()),S}};PopsPanel.init();PopsPanel.showPanel();

})();