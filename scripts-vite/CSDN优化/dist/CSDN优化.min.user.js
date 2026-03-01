// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.1
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAEsFJREFUeF7tnQ2QHMV1x39v7iRZR6lQkNg5ySDQzp6lhNg4hgTiQMUEHD4EFE6Ck7JTJBVTGAwJNgmOCUphu0jAjiskfCXCcVJQMakEVwgGBBircBAJBiwwAmSJ210JIaSbkyxFwggb3c3L9tyuuNubmZ3Zr9vdm67a2tvb7tfvvf5vT/fr1+8JPVhes8mOCStRVgArBFYoDAAD5t2C+ZXPZfEPChz04G3zDvifFbZgXsKWfmXzcS7FXlOXdLtAIzZHvCV8BOUC4NfMgANzWiTXIR8Q8D8IDx6hfG/Q5a0W9dUWsl0JgGKGEz3h14EzLLhAoa8t2qrqRGDcgweBJyzlv7OjvDgTfDTSZ9cA4FWbU/qUc0Q4V+GURoRuVVuBZ1R5ZFx49H0uz7Sqn2bS7WgAdMOghw1Gt4ChIwFQsDlf4DLFf653fRF4UOEux+WhThOmowDQawNfPdidCISOAECvD3wnA2FGAbB1kONVuU7hsk6bGtvBj8BdIty0fIRt7egvqI8ZA8DwIFdaHl9AOGamhO+IfpUdnsXNQyPcMRP8tB0AhaM5DYvrgPNmQuAO7nMtHjc5u3mqnTy2FQB5m+sFbmyngN3Wl8LqnMtftYvvtgDAWO4QblQ4v12CdXM/Ag+hrG6HZbHlAChkuFwmBn9RNw9Ku3kX+LEqq51R/rGVfbcUAPkMd4twSSsF6HXaqtyTG+UPWiVnywBQsPlO6dTso61ifJbRfdxx+c1WyNwSAOQHeV6UX2oFw7OVpgov5Eb4ULPlbzoA8jbbBY5tNqMpPVB4PeeyrJm6aCoACrbvHGE8b9LSOg0cdFyOaBb5pgGgYPN/wJHNYiylE6mB/Y7LwmboqCkAKNhsBN7fDIZSGrE18JLj8oHYtUMqNgyAgu2fca9qlJG0fV0aeNhxGzOuNQSAgs1/ABfXxXraqFkauM9x+Xi9xOoGQGrkqVflzW/XiLGoLgAY8y7CPzRflJRi3RpQrqjHbJwYAOWDnXWpbb/uoWpJQ3N2gHJm0gOk5ACwfQfH9FSvJcPYGFFziph1kznSJgJAep7f2AC1o3VSf4LYACh78qxvhxBpHw1qwOP0uJ5F8QFg83DqxtXgwLSv+VrHjWebiQUA34FTub19/Kc9NaoBT7gqjqNpTQAY123PY/2s995tdETa3V7ZYVmcXsvlvCYAijZrZqvffrvHrNn9mXsHWZdPR9GNBIC5scPE9ee0dK8GLoi6kxgJgKLNt3vlgmb3jl9jnJv7iFmXC8OohAIg/fU3pvgOax06C4QCIP31d9gQNsBO1CwQCID019+Atju3aeAsEAiA9NffuaNYL2dhs8A0APhhWeD79XaUtutcDYzDqdWxi6YBYDjDFy3hhs4VI+WsXg14ypeGRvni5PbTAFC0+X6nRuGqV/C03YQGTOCqrMupoQBIp//eh0r1Y2DKDJBO/70PgOrHwBQApNN/7wOg+jFwGAD5JZwkHj/ofRWkEqrFybldbCivCyYUkh/k86J8JVVP72tAhT/PjfDVKQAo2jymtOYOeu+rtLskFPhO1uXswwDYvJgFc/r8y51Wd4mSclunBrxD4yxcuYc3/TVAcZDfUeW+OomlzbpQAyJcnB3hWz4ACjb/BHyqC+VIWa5fA99wXC6tAOAl4Bfrp5W27EINvOy4vL8CgHdamGalC3UzK1g+5LjMFT/BEhRaJXIp7v9OT9koUFT8pEtFlLexWCjKQsR/P0rhaIQM5h2OFjhaqR0KxY+nBy/478JeVfaKslct9lrq35f7mWexVJQlpZj9S0VYospSofwZ5lbJ7qpyhzWRNOqgWhw0f48pb5t3S1ik6sc3NnGQjhE4xlOOlebFPB4R2Kb4AaS3qbJHhH2q7FOLfZaSVciKeQkrtYFgXP3gSGGQ81D/0kezyn6Ee1V5UpXnhkbrA1fe5tbSoP5xEFOKH5fgKfV4amg3LzTCeME2sZemlEgnyqi+ioNcrOrHS0gSM8FES/cHvN9j2/LdjCSR50fvZVH/GKeJcJqov7WLH6lFWCUFm88Bf5uk05C6Zh1xL33c6+xke6P0ChnWIpw7mY7A90S5efkojzVK37TfupSV3jg/mkyrXzjhuBE2NUJ/yyLeO2cOF6lyE7CgBq0POC5Gdw2X4aM4RuZwhxDuBFrVyTUGACYUaaTveBRnCnkLbs263NawBJMI5G2GBXKVf4lybXaUrzW1jwwfE+E/pwBgHkcdt519zeinmMFW8QNmBsbyKV3kHBvoY8nSnexpRn8VGvkMfyPCn8WguUaKNk8ofCRG5WlVzMnSe+Zy67E72FtP+7A2uxez4EAfByZ9/1nH5e+b2YehVbD9sPV/PYnuXsdtfkzjCB2/7jQ57l9FlkKGH5RyG54UpTN/Ri3YfnqzX0mq3CDvkjAawznmWftZhsUygeUeDAIHEA7gsd8sbvo89mk/+w69w765/fy86kTaNRHuyY5Ex8rdtJglc/s5WyYyhc6XSmZQYT4eAyLM95TtlsVrHhQFXvmJsmmBcKfqlFjGrzhu8HbYKLTES1aVUSi/hD0CezyL+yuHK0E6eNUma8GzMj1g9rOOG5wC70WbIwaEX0Y5UpQjET8En3m5IrzhjLA2aszyGS4rLXjX1BjXZw0AEtsA4g5+YQkn4/EJ8F92UpCV63/Ccfm3sLb5DH8qwlXA8XXSn9xsneNyVjUdPzsp/KTGr+l2r4+v5nbyelC9QoZ/QfjDyd8JPJB1uSioflmu0Eee+fWWAHFL1uXbYXzFmAVelrxNwWwp4ipP4N+zLr8XVf+1QX5hDL6M8ttx6YbVmzuHRVGPmEYeYQF9ftNx+f3q/2+zWT4+sYWNLsoGDnGms4/91RWDXO0V1uRcLg8EgM1tpdnFADuquGNjnLTix7wRVKmWd7fZlps1wM4SI0tqyVb+fmPfOOccv4ddYfX9wVd/m3ZCTJq1qp3luKyLqlSw+TuTRjZssVWrg8r3InwtO8K11fW32pzixfWUVu50RrkycBaw2TplplK+6IzypcC6g3wrzg8oajYu2Pwr8Mkw+QV2mUdAkhCvtzgu10QptBbq4g7GpHr/7LjxzinMI6dkf/gNC85Q5Zw6+rrGcbmlut2wzYUWPBCT3m7H9Q1a00q1y50on86OclfIDPC/Ar9aq89IAGS4A+EzETT2GwAkMQNHGkladaMo7ppjsqBmjz8+xvmWsCruLkeE382O+LPXlDJsc6kFX681GJXvLWF50L38agBYFucu38WjsWaLkM6jdJO3uVHg+gi+DyUCgOMaz+LwErTQiau0WvWMoHOEu493/Wk0URlezIfEYpUl/JbCB0Mbh8TWKdr8hRI/kVPQBQzT5zSn23FWOHt4tZofBTMuP5XpZuog1gNnLVOxUHsG8AEQ9xFQc49cqH7GJRqmWJUPlLaRdwt8c3kd2bm3LmShN8+/9PLZoN76IBsEsBiKnEIubOFaDYCsyxyBsWpeti1myXgfO+NoRISPZ0eCfTnyNg/UsAruj70INBa/nMtQFFPV1rs4AjRQ52VgHcqT8/t5Mok1LWyP7C3gPUN5flbNUwxFvttE2eCMcnKQXFUAGHXc4K2xmbGsvgmnzVrFUz48NMrTQfUKg2xAw7OM+IvAuNvAoFsl1Z3OYDiZgyqst5QnsVif3UXNcHYBga4PlBaAgfkOailysh4iF2WDrEc5rVx/o+NyYsjAxT6gm9fPsce8wY5AOrZvsDKnq4HF3wbGNQQZtGRdlkYhshxL8LvAvFrIbeX3ZrYS+FxUaJT8IFeJTjm/2Oq4wfaQQg1FVmQxxpms629Hp5Xy9viVyhcqPJYbCd6pFG0+pfheWjVL2Lqs/LirdabxciJTsCecMTTiW6BCSyHDFaVz/Ttrct7iCrV2DvkMF4lw/yQ2nnPcYJN4wJFxEPePW8JlYVG5Am5dhW5vizbXa4wMq6rsyI0G52caHuQESzGPyajybNLDoJp2ANNbIeNbAK9GOL3F4xw2t23ot7gk6li3YPv7/cOLQREezY5MPX42xGP8ksya4ZbsIm6QTf6WOrAUbH8wDhvHSou/1aVFYGCK2EKG25FgY9Jk4gJPZ10+HNThcIazLQneYk6esRIfB0etOqsZKdpc6Akry4c05qDGvMz5uHFHPqDwJsKbomxS4UUPNlnKE2U6vkGlsJRlHJo4SAKWISxDy3+bzxPF+B9sR9iuHj/MhRhXJvNXtHmhaksYaAYO+CWZM4GNCBvxeNHzeHZoD89HzorBiTVCzzgKMa2AJUCFJoso2PxRyWvpGzV+gGvqcghJAoIkM0AhwycR33xpSujJXBKaQXXzGb4iwuerfk3Gp+HqRmlXtw/LqmLBqWFb2bxNLCugmXnCLLPFDH+pwpdryHNN3S5hrXDQKA5yrerhK0uhC6pGBqlo83WFS6tpeHD9kDvFN6CRbig7gxgnmUD3ME/IDI2wO6iTBPaU6xyXmwNBbrOm5I95WaQQxiWsEafQZrtoFW1u03dPwBrKhVMtuL/3NwoJcZLw4NIht+aUWRMUO5cy8FOPK0vOnOYkLzTJY9jqvfBzHKlzGY1lBVQ+44wGZ26Jk8zLdwo1EiU8DwhSgrlV9PQhZd3KUT+FXF2lYPtRSf1kFGYV32fxSp+y4Tg3xlFsQI8G3IeUs6IG/nAz4XxnpH7n2OJSVugYZ5QXb7XuWITaHHw642yOo8CoR3HAGqea5IRbeBkAiZ1Cwhg0WxMRnitlDffdwC3zPs64CvNQ5iHMs4S5eMwbN38rcz1hnii5aoeJSX0cAragbBFhs3n3hDcEBjxhwLwbLyDxGPAm/j4R8W3+ThxF+nWURxD2Cez1hH0WjI6XPX8skw1VmC/jZfrCgJp+jCu4+l64ZnG7OHZf8KInweZoQ2PSQjiSpNmWh1UQ5T6J5mnKxZCGHEMTCJ5W7RwNrHFcLp+YAQZZhfoJINMyWzRQfuT5ADA+bwdhv0LfbJF/NsspMD4ARw66vPVuiBib+4VgB8XZrKxelL1kAPuvnMvHjGyTAfAnQvN973tRgd0uk8LVOZdbpwDAJIRU4YfdLlzKf20NiPLBSoLJNExcbX31VI3QMHFGyjRQZE+NdaAwkYEi01CxvQ+AyFCxRvw0WmjvgqBmsGjfKJThhtLeYEpI8d5VySyTLOAmUpowYhZhIFbCiPJjIE0X12PAiJ0yxn8MpAkje2z4fXHiJ41KZ4HeGv/EaePSWaC3ABD2659iCg4SuQVXvXtOs50uUN2pY9NZoNOHNjZ/9SePLq8F0vTxsXXdWRUbTh9vxNk6yPGex3qaFwq1s7TUq9woOyyL08OuqlXEjgz4UKk0PMiVlnJ7r+qqF+XyhKuGRrijlmyxAFBeD5h4wufVIph+3xEaWOu4rIrDSXwAHM1p5u59HKJpnRnWQEiomyCuYgPANM7bXC8xri3PsPizuvtS/OHVuZBbxw0DoLwreFDLt3dmtaY7UHiBh7IuFyRhLdEM4AMg49+6WafT494m6Tet22QNmIQZKGdWfP3ikk8MAH9BmOFyJPhSYtyO03pN1oByhTPqh/5PVOoCgL8eyHB36f7fJYl6Syu3RAOq3JMbjY6oHtZx3QDwZwLbT4bw0ZZIlRKNq4HHHbf+jK8NAcCfCQZ5XhpIXBRXyrTedA2o8EJuJDwOYBydNQwAHwQ222Uii1Za2qQBhddzTcg20hQAlB8Hb2Hu0aelHRo46Li1U+rFYaRpACiDIG7c4Ti8pXWCNbDfcVnYLOU0FQBlEJgQMfFz1zVLktlB5yXHDc5AVq/4TQdAGQQm2ESsw4h6GZ+F7R523In4Sc0sLQFAGQQm8UKSDJrNlKvXaDU1Ytpk5bQMAP7uIDUWNQzERow8cTpvKQD8mSDD5SLcmJ4dxBmOd+v4ybCV1fWYd5P01HIAGGbKB0gGBE1/hiURtlvqmlM9lNVJD3bqka8tAKgwlvoT1B6ipOf5tSlG12grAPxHwoRnkcnZm7qXTR2btaXgmTc5u3mq0UFN0r7tAKgw5zuaenxh1nsbKzs8i5vjOHAmGdi4dWcMAIZB43KuynVaK6p1XGm6rJ7x2xfhplqu260Ua0YBUBHM3EY2AZ2VZO5MrVRMK2mb61oKd0XlNGpl/22zAyQVoteB0EkDXxmbjpgBqoHSa0DoxIHvaABUmDNRy0Q5t084R+GUpDPKTNY3AZnGlUdVeOR9dWQ5bRfvHTkDBAnfDWDolkHv2DVAXNTnl3CScYG2lDMVzjI5FuK2bXI9T+C7nrDOuMrndsVL99pkHhoi1zUzQJiUmxezYG4/Z6v6WTjNY8Jk75jTkFbCG09kLoFnTJ7Bd8Z4bOUe3mxRX20h2/UACNKSnwhLWIn6YFghsMKkeDEua+bdgvmVz+X2BwUOevC2eQf8zzox2FsQtvQrm+vNXdSWkayzk/8Hwkwl2TmhqxQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.3.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (b, P, me, Y) {
  'use strict';

  var ie=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,ue=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,re=typeof GM_getValue<"u"?GM_getValue:void 0,ne=typeof GM_info<"u"?GM_info:void 0,le=typeof GM_listValues<"u"?GM_listValues:void 0,Oe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ge=typeof GM_setValue<"u"?GM_setValue:void 0,_e=typeof GM_setValues<"u"?GM_setValues:void 0,Ie=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ne=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,T=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ue=window;const te={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},k={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&P.waitNodeList(t).then(n=>{n.forEach(i=>i.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),P.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),R(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof ue=="function"?ue(e.keyName):null;return typeof t=="string"&&t?R(t):k.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{P.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(i=>{i.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(i=>{i.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(i){navigator.clipboard.readText().then(r=>{i(r);}).catch(r=>{o.error("读取剪贴板内容失败👉",r),i("");});}function t(i){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(i);}).catch(r=>{o.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),e(i);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(i=>{if(!n()){i("");return}document.hasFocus()?t(i):window.addEventListener("focus",()=>{t(i);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let i,r=n-t,c=t,s=async w=>{const f=await e(w);if(typeof f=="boolean"&&f||w){C.workerClearTimeout(i);return}if(c+=t,c>r){s(true);return}i=C.workerSetTimeout(()=>{s(false);},t);};s(false);},findParentNode(e,t,n){if(n){let i=P.closest(e,n);if(i)return i.querySelector(t)}else return P.matches(e,t)?e:P.closest(e,t)},toStr(e){const t="__undefined__placeholder__replaced__str__";return JSON.stringify(e,(i,r)=>r===void 0?t:r,2).replace(new RegExp(`"${t}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof T=="object"&&T!=null?T:window;return e.top===e.self}},C=Y.noConflict(),l=P.noConflict(),H=me,o=new C.Log(ne,T.console||Ue.console),be=ne?.script?.name||void 0,Fe=me.config.Utils.AnyTouch(),Ge=false;o.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});b.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?o.warn(n):t==="error"?o.error(n):o.info(n),false},get position(){return a.getValue(te.qmsg_config_position.key,te.qmsg_config_position.defaultValue)},get maxNums(){return a.getValue(te.qmsg_config_maxnums.key,te.qmsg_config_maxnums.defaultValue)},get showReverse(){return a.getValue(te.qmsg_config_showreverse.key,te.qmsg_config_showreverse.defaultValue)},get zIndex(){let e=Y.getMaxZIndex(),t=me.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Y.getMaxValue(e,t)+100}});H.GlobalConfig.setGlobalConfig({zIndex:()=>{const e=Y.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),t=me.config.InstanceUtils.getPopsMaxZIndex().zIndex;return Y.getMaxValue(e,t)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Be=new C.GM_Menu({GM_getValue:re,GM_setValue:ge,GM_registerMenuCommand:Oe,GM_unregisterMenuCommand:Ie}),J=new C.Httpx({xmlHttpRequest:Ne,logDetails:Ge});J.interceptors.request.use(e=>e);J.interceptors.response.use(void 0,e=>(o.error("拦截器-请求错误",e),e.type==="onabort"?b.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?b.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?b.error("请求超时",{consoleLogContent:true}):b.error("其它错误",{consoleLogContent:true}),e));T.Object.defineProperty,T.Object.keys,T.Object.values,T.Function.prototype.apply,T.Function.prototype.call,T.Element.prototype.appendChild,T.setTimeout.bind(T),T.clearTimeout.bind(T),T.setInterval.bind(T),T.clearInterval.bind(T);const R=l.addStyle.bind(l),pe=P.selector.bind(P),Ae=P.selectorAll.bind(P);new C.GM_Cookie;const he="GM_Panel",qe="data-init",ae="data-key",se="data-default-value",Pe="data-init-more-value",je="data-plugin-search-config",Q="data-storage-api",z={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},j={setting:{get width(){return z.width<550?"88vw":z.width<700?"550px":"700px"},get height(){return z.height<450?"70vh":z.height<550?"450px":"550px"}},settingMiddle:{get width(){return z.width<350?"88vw":"350px"}},info:{get width(){return z.width<350?"88vw":"350px"},get height(){return z.height<250?"88vh":"250px"}}},X={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new C.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(c,s)=>{typeof s!="string"&&(s=k.toStr(s));const w=new Blob([s]),f=globalThis.URL.createObjectURL(w);l.createElement("a",{href:f,download:c}).click(),C.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(f);},500);},i=()=>{const c=p=>{const u=H.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(O,_){O.close();}}},drag:true,mask:{enable:true},width:j.info.width,height:j.info.height,style:`
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
          }`}),S=u.$shadowRoot.querySelector(".btn-control[data-mode='local']"),D=u.$shadowRoot.querySelector(".btn-control[data-mode='network']"),q=u.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),L=async O=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof le=="function"?typeof ie=="function"?(le().forEach(h=>{ie(h);}),b.success("已清空脚本存储的配置")):b.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):b.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof _e=="function"?_e(O):Object.keys(O).forEach(h=>{const x=O[h];ge(h,x);}),b.success("配置导入完毕");},I=O=>new Promise(async _=>{const B=C.toJSON(O);Object.keys(B).length===0?b.warning("解析为空配置，不导入"):await L(B),_(true);});l.on(S,"click",O=>{l.preventEvent(O),u.close();const _=l.createElement("input",{type:"file",accept:".json"});l.on(_,["propertychange","input"],B=>{if(!_.files?.length)return;const h=_.files[0],x=new FileReader;x.onload=()=>{I(x.result);},x.readAsText(h,"UTF-8");}),_.click();}),l.on(D,"click",O=>{l.preventEvent(O),u.close();const _=H.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(x,A){x.close();}},ok:{text:"导入",callback:async(x,A)=>{const E=x.text;if(C.isNull(E)){b.error("请填入完整的url");return}const v=b.loading("正在获取配置..."),M=await J.get(E,{allowInterceptConfig:false});if(v.close(),!M.status){o.error(M),b.error("获取配置失败",{consoleLogContent:true});return}await I(M.data.responseText)&&x.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:j.info.width,height:"auto"}),B=_.$shadowRoot.querySelector("input"),h=_.$shadowRoot.querySelector(".pops-prompt-btn-ok");l.on(B,["input","propertychange"],x=>{l.val(B)===""?l.attr(h,"disabled","true"):l.removeAttr(h,"disabled");}),l.onKeyboard(B,"keydown",(x,A,E)=>{x==="Enter"&&E.length===0&&l.val(B)!==""&&l.emit(h,"click");}),l.emit(B,"input");}),l.on(q,"click",async O=>{l.preventEvent(O),u.close();let _=await k.getClipboardText();if(_.trim()===""){b.warning("获取到的剪贴板内容为空");return}await I(_);});},s=(p=`${be}_panel-setting-${C.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,u)=>{const S=H.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(L,I){L.close();}}},drag:true,mask:{enable:true},width:j.info.width,height:j.info.height,style:`
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
          }`}),D=S.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),q=S.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");l.on(D,"click",L=>{l.preventEvent(L);try{n(p,u),S.close();}catch(I){b.error(I.toString(),{consoleLogContent:true});}}),l.on(q,"click",async L=>{await C.copy(u)?(b.success("复制成功"),S.close()):b.error("复制失败");});},f=H.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(p,u){c();}},cancel:{enable:true,text:"导出",callback(p,u){s(void 0,g);}}},width:z.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),m={};if(typeof le=="function")le().forEach(u=>{const S=re(u);Reflect.set(m,u,S);});else {b.warning("不支持函数GM_listValues，仅导出菜单配置");const p=re(he);Reflect.set(m,he,p);}const g=k.toStr(m);f.value=g;},r=()=>{let c=ne?.script?.supportURL||ne?.script?.namespace;typeof c=="string"&&C.isNotNull(c)&&window.open(c,"_blank");};return [{id:"script-version",title:`版本：${ne?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(c){new Fe(c.$asideLiElement).on("tap",function(w){clearTimeout(t),t=void 0,e?(e=false,i()):(t=setTimeout(()=>{e=false,r();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},Ce={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(X.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){k.isTopWindow()&&Be.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(i=>i.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class He{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new Y.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let t=re(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){ge(this.storageKey,t);}set(t,n){const i=this.get(t),r=this.getLocalValue();Reflect.set(r,t,n),this.setLocalValue(r),this.emitValueChangeListener(t,n,i);}get(t,n){const i=this.getLocalValue();return Reflect.get(i,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),i=this.getLocalValue();Reflect.deleteProperty(i,t),this.setLocalValue(i),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){ie(this.storageKey);}addValueChangeListener(t,n){const i=Math.random(),r=this.listenerData.get(t)||[];return r.push({id:i,key:t,callback:n}),this.listenerData.set(t,r),i}removeValueChangeListener(t){let n=false;for(const[i,r]of this.listenerData.entries()){for(let c=0;c<r.length;c++){const s=r[c];(typeof t=="string"&&s.key===t||typeof t=="number"&&s.id===t)&&(r.splice(c,1),c--,n=true);}this.listenerData.set(i,r);}return n}async emitValueChangeListener(...t){const[n,i,r]=t;if(!this.listenerData.has(n))return;const c=this.listenerData.get(n);for(let s=0;s<c.length;s++){const w=c[s];if(typeof w.callback=="function"){let f,m;t.length===1||(t.length===2?f=i:t.length===3&&(f=i,m=r)),await w.callback(n,f,m);}}}}const K=new He(he),a={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new C.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new C.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new C.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new C.Dictionary),this.__onceExecData},get scriptName(){return be},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:he,attributeKeyName:ae,attributeDefaultValueName:se},init(){this.initContentDefaultValue(),Ce.init();},initContentDefaultValue(){const e=i=>{if(!i.attributes||i.type==="button"||i.type==="container"||i.type==="deepMenu")return;const r=i.attributes;let c=r[qe];if(typeof c=="function"){let m=c();if(typeof m=="boolean"&&!m)return}let s=new Map,w=r[ae];if(w!=null){const m=r[se];s.set(w,m);}let f=r[Pe];if(typeof f=="object"&&f&&Object.keys(f).forEach(m=>{const g=f[m];s.set(m,g);}),!s.size){o.warn("请先配置键",i);return}if(i.type==="switch"){let m=typeof i.disabled=="function"?i.disabled():i.disabled;typeof m=="boolean"&&m&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[m,g]of s.entries())this.setDefaultValue(m,g);},t=i=>{for(let r=0;r<i.length;r++){let c=i[r];e(c);let s=c.views;s&&Array.isArray(s)&&t(s);}},n=[...X.getAllContentConfig()];for(let i=0;i<n.length;i++){let r=n[i];if(!r.views)continue;const c=r.views;c&&Array.isArray(c)&&t(c);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&o.warn("该key已存在，初始化默认值失败: "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){K.set(e,t);},getValue(e,t){const n=K.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){K.delete(e);},hasKey(e){return K.has(e)},addValueChangeListener(e,t,n){const i=K.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&a.emitMenuValueChange(e,r,r);}return i},removeValueChangeListener(e){K.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){K.emitValueChangeListener(e,t,n);},async exec(e,t,n,i=true){const r=this;let c;typeof e=="string"||Array.isArray(e)?c=()=>e:c=e;let s=false;const w=c();let f=[];Array.isArray(w)?(s=true,f=w):f.push(w);const m=f.find(h=>!this.$data.contentConfigInitDefaultValue.has(h));if(m){o.warn(`${m} 键不存在`);return}const g=JSON.stringify(f);if(i&&this.$data.onceExecMenuData.has(g))return this.$data.onceExecMenuData.get(g);let p=[];const u=[];let S=[];const D=(h,x)=>{let A=[],E=[],v=[];if(Array.isArray(x))v=v.concat(x);else {const y=V=>{if(typeof V=="object"&&V!=null)if(V instanceof Element)v.push(V);else {const{$css:U,destory:F}=V;U!=null&&(Array.isArray(U)?v=v.concat(U):v.push(U)),typeof F=="function"&&v.push(F);}else v.push(V);};if(x!=null&&Array.isArray(x))for(const V of x)y(V);else y(x);}const M=y=>{if(y!=null){if(y instanceof Element){A.push(y);return}if(typeof y=="function"){E.push(y);return}}};for(const y of v){const V=M(y);if(typeof V=="boolean"&&!V)break;if(Array.isArray(y))for(const U of y){const F=M(U);if(typeof F=="boolean"&&!F)break}}L(),I(),h&&(p=p.concat(A),S=S.concat(E));},q=h=>!!this.getValue(h),L=()=>{for(let h=0;h<p.length;h++)p[h]?.remove(),p.splice(h,1),h--;},I=()=>{for(let h=0;h<S.length;h++){const x=S[h];x(),S.splice(h,1),h--;}},O=()=>{let h=false;return typeof n=="function"?h=n(f):h=f.every(x=>q(x)),h},_=async h=>{const x=O();let A=[];if(x){const E=f.map(v=>this.getValue(v));A=await t({key:f,triggerKey:h?.key,value:s?E:E[0],addStoreValue:(...v)=>D(x,v)});}D(x,A);};i&&f.forEach(h=>{const x=this.addValueChangeListener(h,(A,E,v)=>_({key:A}));u.push(x);}),await _();const B={reload(){this.clearStoreStyleElements(),this.destory(),_();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>L(),destory(){return I()},removeValueChangeListener:()=>{u.forEach(h=>{this.removeValueChangeListener(h);});},clearOnceExecMenuData(){i&&r.$data.onceExecMenuData.delete(g);}};return this.$data.onceExecMenuData.set(g,B),B},async execMenu(e,t,n=false,i=false){return await this.exec(e,async r=>await t(r),r=>r.every(s=>{let w=!!this.getValue(s);return a.$data.contentConfigInitDisabledKeys.includes(s)&&(w=false,o.warn(`.execMenu${i?"Once":""} ${s} 被禁用`)),n&&(w=!w),w}),i)},async execMenuOnce(e,t,n=false,i=false){const r=await this.execMenu(e,t,n,true);if(i&&r){const c=()=>{r.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,c);}return r},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),K.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${be}-设置`,n=false,i=false){this.$data.$panel=null,this.$data.panelContent=[];const r=e.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!r&&e.push(...X.getDefaultBottomContentConfig());const c=H.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:s=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:s=>{s(),this.$data.$panel=null;}},width:j.setting.width,height:j.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=c,this.$data.panelContent=e,i||this.registerConfigSearch({$panel:c,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,i=async(u,S)=>{if(u==null)return;const D=await S(u);return D&&typeof D.isFind=="boolean"&&D.isFind?D.data:await i(D.data,S)},r=(u,S)=>{const D=new IntersectionObserver(q=>{q.forEach(L=>{L.isIntersecting&&(S?.(),D.disconnect());});},{root:null,threshold:1});D.observe(u),u.scrollIntoView({behavior:"smooth",block:"center"});},c=u=>{const S="pops-flashing";l.onAnimationend(u,()=>{u.classList.remove(S);}),u.classList.add(S);},s=u=>{if(u.type==="dblclick"&&p)return;l.preventEvent(u);const S=H.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:j.settingMiddle.width,height:"auto",drag:true,style:`
					${H.config.cssText.panelCSS}

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
				`});S.$shadowRoot.querySelector(".search-wrapper");const D=S.$shadowRoot.querySelector(".search-config-text"),q=S.$shadowRoot.querySelector(".search-result-wrapper");D.focus();const L=()=>{l.empty(q);},I=_=>{const B=C.queryProperty(_,A=>A?.next?{isFind:false,data:A.next}:{isFind:true,data:A}),h=l.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${B.matchedData?.path}</div>
							<div class="search-result-item-description">${B.matchedData?.description??""}</div>
						`}),x=H.config.PanelHandlerComponents();return l.on(h,"click",()=>{const E=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[_.index];if(!E){b.error(`左侧项下标${_.index}不存在`);return}E.scrollIntoView({behavior:"smooth",block:"center"}),E.click(),i(_.next,async v=>{if(v?.next){const M=await l.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(y=>{const V=Reflect.get(y,x.$data.nodeStoreConfigKey);return typeof V=="object"&&V!=null&&V.text===v.name}),2500);if(M)M.click();else return b.error("未找到对应的二级菜单"),{isFind:true,data:v};return {isFind:false,data:v.next}}else {const M=await l.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(y=>Reflect.get(y,x.$data.nodeStoreConfigKey)===v.matchedData?.formConfig),2500);if(M){r(M);const y=M.closest(".pops-panel-forms-fold[data-fold-enable]");y&&(y.querySelector(".pops-panel-forms-fold-container").click(),await C.sleep(500)),r(M,()=>{c(M);});}else b.error("未找到对应的菜单项");return {isFind:true,data:v}}});}),h},O=_=>{const B=new RegExp(_,"i"),h=[],x=(E,v)=>{for(let M=0;M<E.length;M++){const y=E[M],V=y.views;if(V&&Array.isArray(V)){const U=C.deepClone(v);if(y.type==="deepMenu"){const F=C.queryProperty(U,ee=>ee?.next?{isFind:false,data:ee.next}:{isFind:true,data:ee});F.next={name:y.text};}x(V,U);}else {let U,F;if(y.type==="own"){const G=Reflect.get(y.attributes||{},je);G&&(typeof G.text=="string"&&(U=G.text),typeof G.desc=="string"&&(F=G.desc));}else U=y.text,F=Reflect.get(y,"description");const ee=[U,F],ye=ee.findIndex(G=>{if(typeof G=="string")return G.match(B)});if(ye!==-1){const G=C.deepClone(v),Se=C.queryProperty(G,W=>W?.next?{isFind:false,data:W.next}:{isFind:true,data:W});Se.next={name:U,matchedData:{path:"",formConfig:y,matchedText:ee[ye],description:F}};const ke=[];C.queryProperty(G,W=>{const xe=W?.name;return typeof xe=="string"&&xe.trim()!==""&&ke.push(xe),W?.next?{isFind:false,data:W.next}:{isFind:true,data:W}});const Le=ke.join(k.escapeHtml(" - "));Se.next.matchedData.path=Le,h.push(G);}}}};for(let E=0;E<n.length;E++){const v=n[E];if(!v.views||v.isBottom&&v.id==="script-version")continue;const M=v.views;if(M&&Array.isArray(M)){let y=v.title;typeof y=="function"&&(y=y()),x(M,{index:E,name:y});}}const A=document.createDocumentFragment();for(const E of h){let v=I(E);A.appendChild(v);}L(),q.append(A);};l.on(D,"input",C.debounce(_=>{l.preventEvent(_);let B=l.val(D).trim();if(B===""){L();return}O(B);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(u=>{l.on(u,"dblclick",s);});let f=new WeakMap,m=false,g,p=false;l.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(u,S)=>{p=true,clearTimeout(g),g=void 0,m&&f.has(S)?(m=false,f.delete(S),s(u)):(g=setTimeout(()=>{m=false;},200),m=true,f.set(S,u));},{capture:true}),t.$shadowRoot.appendChild(l.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let i=false,r=t;const c=this.addValueChangeListener(e,(s,w)=>{r=w;});return {get value(){return i||(i=true,r=n.getValue(e,t)),r},destory(){n.removeValueChangeListener(c);}}}},$={isHuaWeiCloudBlog(){return !!/huaweicloud.csdn.net/i.test(window.location.origin)},isBlog(){return !!/blog.csdn.net/i.test(window.location.origin)},isBlogArticle(){return this.isBlog()&&window.location.pathname.includes("/article/details/")},isWenKu(){return !!/wenku.csdn.net/i.test(window.location.origin)},isLink(){return window.location.hostname==="link.csdn.net"},isSo(){return window.location.hostname==="so.csdn.net"},isSoCKnow(){return this.isSo()&&(window.location.pathname.startsWith("/chat")||window.location.pathname.startsWith("/so/ai"))},isDownload(){return window.location.hostname==="download.csdn.net"}},Ee={init(){a.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),i=decodeURIComponent(n);o.success(`跳转链接：${i}`),window.location.href=i;}else o.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){b.error("跳转链接失败："+e.message);}}},We={init(){a.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Ee.jumpRedirect();});}},Ke=`/* 右下角的 免费赢华为平板xxxx */
.org-main-content .siderbar-box {
  display: none !important;
}
`,ze=`/* 底部免费抽xxx奖品广告 */
div.siderbar-box,
/* 华为开发者联盟加入社区 */
div.user-desc.user-desc-fix {
  display: none !important;
}
`,De={init(){R(ze),a.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),a.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),a.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),a.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),a.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return o.info("自动展开全文"),[k.addBlockCSS("div.article-show-more"),R(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return o.info("屏蔽云开发者任务挑战活动"),k.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return o.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),k.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return o.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),k.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return o.info("屏蔽底部推荐内容"),k.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return o.info("屏蔽底部更多推荐"),k.addBlockCSS("div.more-article")}},Je={init(){R(Ke),a.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>De.autoExpandContent()),a.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return o.info("【屏蔽】底部加入社区"),k.addBlockCSS(".user-desc")}},Ze=`/*.blog_container_aside,
#nav {
	margin-left: -45px;
}
.recommend-right.align-items-stretch.clearfix,
.dl_right_fixed {
	margin-left: 45px;
}*/
`,Ye=`.ecommend-item-box.recommend-recommend-box,
.login-mark,
.opt-box.text-center,
.leftPop,
#csdn-shop-window,
.toolbar-advert,
.hide-article-box,
.user-desc.user-desc-fix,
.recommend-card-box,
.more-article,
.article-show-more,
#csdn-toolbar-profile-nologin,
.guide-rr-first,
#recommend-item-box-tow,
/* 发文章得原力分图片提示 */
div.csdn-toolbar-creative-mp,
/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */
#toolBarBox div.write-guide-buttom-box,
/* 觉得还不错? 一键收藏 */
ul.toolbox-list div.tool-active-list,
/* 右边按钮组的最上面的创作话题 */
div.csdn-side-toolbar .activity-swiper-box,
.sidetool-writeguide-box .tip-box,
/* 右下角的登录提示 */
.passport-login-tip-container,
/* 全屏双十一红包 */
.csdn-reapck-select,
/* 侧栏的618会员开通 */
.csdn-side-toolbar  .sidecolumn-vip,
/* 右边推荐的推广广告 */
#recommendAdBox,
/* 顶部导航栏的vip推广 */
#csdn-plugin-vip,
/* 侧栏的【点击体验 DeepSeekR1满血版】 */
#sidecolumn-deepseek,
/* 侧栏的【下载APP、公众号、视频号】 */
.csdn-side-toolbar .option-box[data-type="app"] {
  display: none !important;
}
`,we={init(){a.onceExec("csdn-blog-blockCSS",()=>this.addCSS()),a.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),a.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),a.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),a.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),a.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar());},addCSS(){return o.info("添加屏蔽CSS和功能CSS"),[R(Ye),R(Ze)]},shieldTopToolbar(){return o.info("【屏蔽】顶部工具栏"),k.addBlockCSS("#toolbarBox","#csdn-toolbar")},shieldLoginDialog(){return o.info("【屏蔽】登录弹窗"),k.addBlockCSS(".passport-login-container")},shieldLeftBlogContainerAside(){return o.info("【屏蔽】左侧博客信息"),k.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return o.info("【屏蔽】右侧目录信息"),k.addBlockCSS("#rightAsideConcision","#rightAside")},shieldBottomFloatingToolbar(){return o.info("屏蔽底部悬浮工具栏"),k.addBlockCSS("#toolBarBox")}},Ve={init(){we.init(),l.onReady(()=>{a.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),a.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},removeClipboardHijacking(){o.info("拦截-复制的小尾巴"),l.remove(".article-copyright"),T.articleType&&(T.articleType=0),T?.csdn?.copyright?.textData&&(T.csdn.copyright.textData=""),T?.csdn?.copyright?.htmlData&&(T.csdn.copyright.htmlData="");},unBlockCopy(){o.info("劫持-禁止复制"),l.on(document,"click",".hljs-button",function(t,n){l.preventEvent(t);const i=n.closest(".hljs")||n.closest("pre"),r=n.parentElement,c=i?.querySelector("code")||r.querySelector("code")||r,s=c.innerText;o.info("点击复制按钮复制内容："+(s.length>8?s.substring(0,8)+"...":s),c),C.copy(s),n.setAttribute("data-title","复制成功");},{capture:true});const e=new C.LockFunction(function(t){const n=t.target;if(n.localName!=="pre")return;const i=n.querySelector(".hljs-button");i&&i.setAttribute("data-title","复制");});l.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),l.waitNode("#content_views").then(t=>{T.$&&T.$("#content_views")?.unbind("copy"),l.on(t,"copy",function(n){l.preventEvent(n);const r=T.getSelection()?.toString();return o.info("Ctrl+C复制内容："+(r.length>8?r.substring(0,8)+"...":r)),C.copy(r),false},{capture:true});}),l.waitNode(".hljs-button").then(()=>{setTimeout(()=>{Ae(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});}},N={waitRemove(...e){e.forEach(t=>{l.waitNodeList(t).then(n=>{n.forEach(i=>i.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),R(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof ue=="function"?ue(e.keyName):"";typeof t=="string"&&t?R(t):N.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,l.onReady(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},Qe={init(){a.exec("m-csdn-blog-comment-enable",()=>this.blockComment(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight());},blockComment(){return o.info("启用/关闭 评论区"),N.addBlockCSS("#comment")},notLimitCommentMaxHeight(){return o.info("不限制评论区的最大高度"),R(`
        #comment{
          max-height: none !important;
        }
      `)}},Xe={init(){a.exec("m-csdn-blog-bottomArticleEnable",()=>this.blockBottomArticle(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-removeResourceArticle",()=>this.removeResourceArticle()),a.execMenuOnce("m-csdn-blog-openNewTab",()=>this.openNewTab()),l.onReady(()=>{a.execMenuOnce("m-csdn-blog-refactoringRecommendation",e=>this.refactoringRecommendation());});},blockBottomArticle(){return o.info("启用/关闭 底部文章"),N.addBlockCSS("#recommend")},async refactoringRecommendation(){const e=function(){Ae(".container-fluid").forEach(r=>{let c="",s="",w="",f="";if(r.hasAttribute("data-url")){if(c=r.getAttribute("data-url"),s=r.querySelector(".recommend_title div.left")?.innerHTML,!r.querySelector(".text"))return;w=r.querySelector(".text")?.innerHTML,r.querySelectorAll(".recommend-img").length&&r.querySelectorAll(".recommend-img").forEach(g=>{f+=g.innerHTML;});}else c=r.querySelector("a[data-type]").getAttribute("href"),s=r.querySelector(".recommend_title div.left").innerHTML,w=r.querySelector(".text").innerHTML;const m=new URL(c);m.host==="download.csdn.net"||m.host==="www.iteye.com"&&m.pathname.match(/^\/resource/gi)?s='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+s:m.origin.match(/edu.csdn.net/gi)&&(s='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+s),r.setAttribute("class","GM-csdn-dl"),r.setAttribute("data-url",c),r.innerHTML=`<div class="GM-csdn-title"><div class="left">${s}</div></div><div class="GM-csdn-content">${w}</div><div class="GM-csdn-img">${f}</div>`,r.addEventListener("click",function(){window.location.href=c;});});},t=new C.LockFunction(e,50),n=await l.waitNode("#recommend");o.info("重构底部推荐");const i=C.mutationObserver(n,{config:{childList:true,subtree:true,attributes:true},immediate:true,callback:()=>{t.run();}});return [()=>{i.disconnect();}]},removeResourceArticle(){return o.info("移除资源下载的文章"),N.addBlockCSS('.container-fluid:has(a[href*="https://download.csdn.net/"])','.container-fluid[data-url*="https://download.csdn.net/"]','.GM-csdn-dl[data-url*="https://download.csdn.net/"]')},openNewTab(){return o.info("新标签页打开"),l.on(document,"click",[".container-fluid",".GM-csdn-dl"],(t,n)=>{l.preventEvent(t);const i=n.getAttribute("data-url");typeof i=="string"?(o.info(`新标签页打开：${i}`),window.open(i,"_blank")):b.error("未获取到data-url属性");},{capture:true}).off}},ce={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=C.toJSON(e)),e?.code===200)}},de={async folderListWithCheck(e){const t=await J.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":C.getRandomPCUA()}});o.info(t);const n=C.toJSON(t.data.responseText);if(!t.status||!ce.isSuccessResponse(t.data.responseText)){o.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?b.error(n.msg):b.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){const t=await J.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":C.getRandomPCUA()},allowInterceptConfig:false});if(o.info(t),!t.status||!ce.isSuccessResponse(t.data.responseText)){o.error("添加收藏失败，请求异常",t),b.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){const t=await J.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":C.getRandomPCUA()}});if(o.info(t),!t.status||!ce.isSuccessResponse(t.data.responseText)){o.error("检查收藏夹状态失败，请求异常"),b.error("检查收藏夹状态失败，请求异常");return}return C.toJSON(t.data.responseText).data},async createFolder(e){const t=await J.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":C.getRandomPCUA()},allowInterceptConfig:false});if(o.info(t),!t.status||!ce.isSuccessResponse(t.data.responseText)){b.error("创建收藏夹失败");return}return C.toJSON(t.data.responseText).data}},et={init(){a.exec("m-csdn-blog-bottom-toolbar-enable",()=>this.blockBottomToolBar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),l.onReady(()=>{a.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>this.optimizationCollectButton());});},blockBottomToolBar(){return o.info("屏蔽底部工具栏"),N.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return o.info("底部工具栏常驻"),R(`
    #operate {
        bottom: 0 !important;
    }
    `)},async optimizationCollectButton(){o.info("优化收藏按钮");const e=await l.waitNode("#operate .collect-btn",1e4);if(!e)return;const t=l.on(e,"click",async n=>{l.preventEvent(n);const i=e.querySelector(".collect"),r=e.querySelector(".uncollect"),c=await de.folderListWithCheck(window.location.origin+window.location.pathname);if(!c)return;const s=[];c.forEach(g=>{g.IsFavorite&&s.push(g.ID);});const w=g=>{let p=g.ID,u=l.createElement("li",{className:"csdn-collection-item",innerHTML:`
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${g.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${g.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${g.IsPrivate?"私密":"公开"}</span>
                    </span>
                </div>
                <span class="collect-btn">${g.IsFavorite?"已收藏":"收藏"}</span>
            `},{"data-is-collect":g.IsFavorite});u.querySelector(".title-m");let S=u.querySelector(".csdn-collection-item_length");u.querySelector(".csdn-collection-controls");let D=u.querySelector(".collect-btn");return l.on(D,"click",async q=>{let L=T.articleDetailUrl;L==null&&(L=window.location.origin+window.location.pathname);let I=T.articleId;if(I==null){o.error("获取文章ID失败"),b.error("获取文章ID失败");return}let O=T.username;if(O==null){o.error("获取文章作者失败"),b.error("获取文章作者失败");return}let _=T.articleTitle;if(_==null&&(_=document.title.replace(/-CSDN博客$/,"")),_==null){o.error("获取文章标题失败"),b.error("获取文章标题失败");return}let B=T.articleDesc;if(B==null){const A=pe("meta[name='description']");A&&(B=A.getAttribute("content"));}if(B==null){o.error("获取文章描述失败"),b.error("获取文章描述失败");return}const h=[...s];let x=b.loading("处理中...");try{let A=await de.checkFavoriteByUrl(L);if(A==null)return;o.info(p,A);let E=!A[p];if(E?(o.info("添加收藏"),h.push(p)):(o.info("取消收藏"),h.splice(h.indexOf(p),1)),!await de.addFavoriteInFolds({author:O,url:L,source:"blog",sourceId:I,title:_,description:B,fromType:"PC",username:g.Username,folderIdList:h}))return;const M=await de.checkFavoriteByUrl(L);if(M==null)return;o.info(p,M),u.setAttribute("data-is-collect",(!!M[p]).toString()),E?M[p]?(o.success("收藏成功"),b.success("收藏成功"),l.text(D,"已收藏"),s.includes(p)||s.push(p),g.FavoriteNum++):(o.error("收藏失败",M,p),b.error("收藏失败")):M[p]?(o.error("取消收藏失败",M,p),b.error("取消收藏失败")):(o.success("取消收藏成功"),b.success("取消收藏成功"),l.text(D,"收藏"),s.includes(p)&&s.splice(s.indexOf(p),1),g.FavoriteNum--),l.text(S,`${g.FavoriteNum}条内容`),Object.values(M).find(V=>V)?(l.show(i,!1),l.hide(r,!1)):(l.show(r,!1),l.hide(i,!1)),x.close();}catch(A){o.error(A);}finally{x.close();}}),u},m=H.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:j.setting.width,height:j.setting.height,drag:true,mask:{enable:true},style:`
            .csdn-collection-items{
                --font-size: 16px;
            }
            .csdn-collection-items{
                font-size: var(--font-size);
                font-weight: 400;
                padding: 0 20px 0;
                margin: 24px 0;
                overflow: auto;
                -ms-scroll-chaining: none;
                overscroll-behavior: contain;
            }
            .csdn-collection-item{
                width: 100%;
                height: 62px;
                line-height: normal;
                position: relative;
                padding: 8px 12px;
                cursor: pointer;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                border-bottom: 1px solid #f0f0f5;
            }
            .csdn-collection-item_left{
                line-height: normal;
                flex: 1;
                overflow: hidden;
            }
            .csdn-collection-item_title{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
            .csdn-collection-item_ext{
                font-weight: 400;
                color: #999aaa;
                line-height: 17px;
                margin-top: 8px;
                font-size: .8em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                display: inline-flex;
                align-items: center;
            }
            .collect-btn{
                color: #555666;
                font-size: var(--font-size);
                width: 64px;
                height: 30px;
                line-height: 30px;
                border-radius: 20px;
                text-align: center;
                -webkit-transition: all .2s;
                transition: all .2s;
                border: 1px solid #ccccd8;
            }
            .csdn-collection-item[data-is-collect="true"] .collect-btn{
                color: #999aaa;
                background: rgba(232, 232, 237, .3);
                border: 1px solid #e8e8ed;
            }
            /* .csdn-collection-item:hover{
                background: #f5f6f7;
            }
            .csdn-collection-item:hover .collect-btn{
                border: 1px solid #555666;
            } */
        `}).$shadowRoot.querySelector(".csdn-collection-items");c.forEach(g=>{const p=w(g);m.appendChild(p);});},{capture:true});return [()=>{t.off();}]}},tt={init(){Qe.init(),Xe.init(),et.init(),a.exec("m-csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),a.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),a.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),l.onReady(()=>{a.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Ve.unBlockCopy();});});},shieldTopToolbar(){return o.info("屏蔽顶部Toolbar"),[k.addBlockCSS("#csdn-toolbar"),R(`
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`)]},removeAds(){return o.info("去除广告"),[k.waitRemove(".passport-login-container"),k.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),k.waitRemove(".add-firstAd"),k.waitRemove("div.feed-Sign-weixin"),k.waitRemove("div.ios-shadowbox")]},allowSelectText(){return o.info("允许选择内容"),R(`
    #content_views,
    #content_views pre,
    #content_views pre code{
      webkit-touch-callout: text !important;
      -webkit-user-select: text !important;
      -khtml-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
    `)},autoExpandContent(){return o.info("自动展开"),R(`
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `)},notLimitCodePreMaxHeight(){return o.info("不限制代码块的最大高度"),R(`
    pre{
        max-height: unset !important;
    }
    `)}},nt=`/* 右下角的买一年送3个月的广告图标 */
.blind_box {
  display: none !important;
}
`,ot={init(){R(nt),a.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return o.info("【屏蔽】底部工具栏"),k.addBlockCSS(".page-container > div.btn")}},it=`/* 右下角悬浮图标 买1年送3个月 */
.page-container .blind_box,
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */
.page-container .btn .ml-12,
/* 登录弹窗 */
.passport-login-container,
/* 通用广告className匹配 */
.ads {
  display: none !important;
}
`,rt={init(){a.execMenuOnce("m-csdn-download-removeAds",()=>R(it)),a.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return o.info("自动展开资源介绍"),[k.addBlockCSS("label.unfold-font"),R(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},at=`.view_comment_box,
.weixin-shadowbox.wap-shadowbox,
.feed-Sign-span,
.user-desc.user-desc-fix,
.comment_read_more_box,
#content_views pre.set-code-hide .hide-preCode-box,
/* 登录弹窗 */
.passport-login-container,
.hljs-button[data-title='登录后复制'],
.article-show-more,
#treeSkill,
div.btn_open_app_prompt_div,
div.readall_box,
div.aside-header-fixed,
div.feed-Sign-weixin,
div.ios-shadowbox,
/* 底部评论工具栏的抢沙发图片 */
.comment-sofa-flag {
  display: none !important;
}
`,st=`#mainBox {
  width: auto;
}
.user-desc.user-desc-fix {
  height: auto !important;
  overflow: auto !important;
}
.component-box .praise {
  background: #ff5722;
  border-radius: 5px;
  padding: 0px 8px;
  height: auto;
}
.component-box .praise,
.component-box .share {
  color: #fff;
}
.component-box a {
  display: inline-block;
  font-size: xx-small;
}
.component-box {
  display: inline;
  margin: 0;
  position: relative;
  white-space: nowrap;
}
.csdn-edu-title {
  background: #4d6de1;
  border-radius: 5px;
  padding: 0px 8px;
  height: auto;
  color: #fff !important;
}

.GM-csdn-dl {
  padding: 0.24rem 0.32rem;
  width: 100%;
  justify-content: space-between;
  -webkit-box-pack: justify;
  border-bottom: 1px solid #f5f6f7 !important;
}
.GM-csdn-title {
  font-size: 0.3rem;
  color: #222226;
  letter-spacing: 0;
  line-height: 0.44rem;
  font-weight: 600;
  /*max-height: .88rem;*/
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.GM-csdn-title a {
  word-break: break-all;
  color: #222226;
  font-weight: 600;
}
.GM-csdn-title em,
.GM-csdn-content em {
  font-style: normal;
  color: #fc5531;
}
.GM-csdn-content {
  /*max-width: 5.58rem;*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #555666;
  font-size: 0.24rem;
  line-height: 0.34rem;
  max-height: 0.34rem;
  word-break: break-all;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-top: 0.16rem;
}
.GM-csdn-img img {
  width: 2.18rem;
  height: 1.58rem;
  /*margin-left: .16rem*/
}
`,lt={init(){a.onceExec("m-csdn-blog-removeAds",()=>this.addCSS());},addCSS(){return [R(at),R(st)]}},ct={init(){lt.init();}},Me={init(){$.isLink()?(o.info("Router: 中转链接"),We.init()):$.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),Je.init()):$.isBlog()?(o.info("Router: 博客"),ct.init(),$.isBlogArticle()&&(o.info("Router: 文章"),tt.init())):$.isWenKu()?(o.info("Router: 文库"),ot.init()):$.isDownload()?(o.info("Router: 资源下载"),rt.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},dt=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {
  max-height: unset !important;
  height: auto !important;
  overflow: auto !important;
}

.forbid {
  user-select: text !important;
}
`,ut=`/* wenku顶部横幅 */
#app > div > div.main.pb-32 > div > div.top-bar,
/* 底部展开全文 */
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {
  display: none !important;
}
`,pt={init(){R(dt),R(ut),a.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),a.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),a.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return o.info("【屏蔽】资源推荐"),k.addBlockCSS("#recommend")},shieldRightUserInfo(){return o.info("【屏蔽】右侧用户信息"),k.addBlockCSS(".layout-right")},shieldRightToolBar(){return o.info("【屏蔽】右侧悬浮工具栏"),k.addBlockCSS(".csdn-side-toolbar")}},ht={init(){a.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),a.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),a.execMenuOnce("csdn-blog-blockGitCodeLinkCard",()=>this.blockGitCodeLinkCard());},shieldBottomSkillTree(){return o.info("【屏蔽】底部xx技能树"),k.addBlockCSS("#treeSkill")},shieldArticleSearchTip(){return o.info("【屏蔽】选中文字悬浮栏"),k.addBlockCSS("#articleSearchTip")},blockGitCodeLinkCard(){return o.info("【屏蔽】gitcode链接卡片"),k.addBlockCSS('a.has-card[href*="gitcode.com"]',".t2-card-container")}},ft=`.main_father {
  justify-content: center;
}
#mainBox main {
  width: inherit !important;
}
/* 当文章向下滚动时，触发左侧信息悬浮 */
aside.blog_container_aside[style*="position: fixed;"] {
  display: none !important;
}

@media (min-width: 1320px) and (max-width: 1380px) {
  .nodata .container {
    width: 900px !important;
  }

  .nodata .container main {
    width: 900px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 490px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 500px;
  }
}

@media screen and (max-width: 1320px) {
  .nodata .container {
    width: 760px !important;
  }

  .nodata .container main {
    width: 760px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 490px !important;
  }

  .nodata .container main .toolbox-list .tool-reward {
    display: none;
  }

  .nodata .container main .more-toolbox-new .toolbox-left .profile-box .profile-name {
    max-width: 128px;
  }

  .nodata .container main .articleConDownSource {
    width: 420px;
  }
}

@media screen and (min-width: 1380px) {
  .nodata .container {
    width: 1010px !important;
  }

  .nodata .container main {
    width: 1010px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 490px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 560px;
  }
}

@media (min-width: 1550px) and (max-width: 1700px) {
  .nodata .container {
    width: 820px !important;
  }

  .nodata .container main {
    width: 820px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 690px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 500px;
  }
}

@media screen and (min-width: 1700px) {
  .nodata .container {
    width: 1010px !important;
  }

  .nodata .container main {
    width: 1010px;
  }

  .nodata .container main #pcCommentBox pre > ol.hljs-ln {
    width: 690px !important;
  }

  .nodata .container main .articleConDownSource {
    width: 560px;
  }
}
`,mt={init(){a.exec("csdn-blog-blockComment",()=>this.blockComment(),e=>!a.getValue(e[0]),true),l.onReady(()=>{a.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},blockComment(){return o.info("屏蔽评论区"),N.addBlockCSS("#pcCommentBox")},restoreComments(){o.info("恢复评论到正确位置-第一条评论"),l.waitNode(".first-recommend-box").then(e=>{const t=pe(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),o.info("恢复评论到正确位置-第二条评论"),l.waitNode(".second-recommend-box").then(e=>{const t=pe(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});}},gt={init(){a.exec("csdn-blog-bottomRecommendArticleEnable",()=>this.shieldBottomRecommendArticle(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-identityCSDNDownload",()=>this.identityCSDNDownload()),a.execMenuOnce("csdn-blog-removeResourceDownloadArticle",()=>this.removeResourceDownloadArticle());},shieldBottomRecommendArticle(){return o.info("启用/关闭 底部文章"),N.addBlockCSS("main > div.recommend-box")},identityCSDNDownload(){return o.info("标识CSDN下载的链接"),R(`
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `)},removeResourceDownloadArticle(){return o.info("移除资源下载的文章"),N.addBlockCSS(".recommend-item-box[data-url*='https://download.csdn.net/']")}},xt={init(){a.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!a.getValue(e[0]),true),a.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),a.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),a.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),a.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),a.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),a.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop());},shieldRightToolbar(){return o.info("启用/关闭 右侧工具栏"),N.addBlockCSS("div.csdn-side-toolbar")},shieldCreativeCenter(){return o.info("【屏蔽】创作中心"),N.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return o.info("【屏蔽】显示/隐藏侧栏"),N.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return o.info("【屏蔽】新手引导"),N.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return o.info("【屏蔽】客服"),N.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return o.info("【屏蔽】举报"),N.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return o.info("【屏蔽】返回顶部"),N.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},bt={init(){xt.init(),a.onceExec("csdn-blog-initRightToolbarOffset",()=>this.initRightToolbarOffset()),l.onReady(()=>{a.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){o.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let s=pe("#pcCommentBox");if(s&&s.getClientRects().length)t=s;else {o.error("评论区处于隐藏状态");return}}o.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,i=document.querySelector("#csdn-toolbar"),r=window.getComputedStyle(i),c=i.clientHeight-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom);window.scrollTo({top:n-c-8,left:0,behavior:"smooth"});}),l.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},initRightToolbarOffset(){o.info("初始化右侧工具栏的偏移（top、right）"),R(`
    .csdn-side-toolbar{
      left: unset !important;
    }
    `),l.waitNode(".csdn-side-toolbar").then(e=>{l.css(e,{top:parseInt(a.getValue("csdn-blog-rightToolbarTopOffset"))+"px",right:parseInt(a.getValue("csdn-blog-rightToolbarRightOffset"))+"px"});});}},wt={init(){ht.init(),mt.init(),gt.init(),bt.init(),a.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),a.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),a.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),a.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),l.onReady(()=>{a.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();});});},clickPreCodeAutomatically(){o.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},articleCenter(){o.info("全文居中");let e=[R(ft)];return e.push(we.shieldRightDirectoryInformation()),e.push(R(`
      #mainBox {
        margin-right: 0px;
      }
      `)),e.push(we.shieldLeftBlogContainerAside()),e.push(R(`
      #mainBox {
        margin-left: 0px;
      }`)),e},autoExpandCodeContent(){return o.info("自动展开代码块"),[k.addBlockCSS("pre.set-code-hide .hide-preCode-box"),R(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return o.info("自动展开全文"),R(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},allowSelectContent(){return o.info("允许选择内容"),R(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Te={init(){$.isLink()?(o.info("Router: 中转链接"),Ee.init()):$.isHuaWeiCloudBlog()?(o.info("Router: 华为云联盟"),De.init()):$.isBlog()?(o.info("Router: 博客"),Ve.init(),$.isBlogArticle()&&(o.info("Router: 帖子"),wt.init())):$.isWenKu()?(o.info("Router: 文库"),pt.init()):o.error("暂未适配，请反馈开发者："+globalThis.location.href);}},fe=function(e,t,n,i,r,c,s){const w={text:e,type:"select",description:c,attributes:{},props:{},getValue(){return this.props[Q].get(t,n)},callback(f){if(f==null)return;const m=f.value;if(o.info(`选择：${f.text}`),typeof r=="function"&&r(f))return;this.props[Q].set(t,m);},data:i};return Reflect.set(w.attributes,ae,t),Reflect.set(w.attributes,se,n),ve.initComponentsStorageApi("select",w,{get(f,m){return a.getValue(f,m)},set(f,m){a.setValue(f,m);}}),w},Re=function(e,t,n,i,r,c,s,w,f,m){const g={text:e,type:"slider",description:w,attributes:{},props:{},getValue(){return this.props[Q].get(t,n)},getToolTipContent(p){return typeof s=="function"?s(p):`${p}`},callback(p,u){if(typeof c=="function"&&c(p,u))return;this.props[Q].set(t,u);},min:i,max:r,step:f};return Reflect.set(g.attributes,ae,t),Reflect.set(g.attributes,se,n),ve.initComponentsStorageApi("slider",g,{get(p,u){return a.getValue(p,u)},set(p,u){a.setValue(p,u);}}),g},ve={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new Y.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let i;this.hasStorageApi(e)?i=this.getStorageApi(e):i=n,this.setComponentsStorageApiProperty(t,i);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,Q,t);}},d=function(e,t,n,i,r,c,s,w,f){const m={text:e,type:"switch",description:r,disabled:s,attributes:{},props:{},getValue(){return this.props[Q].get(t,n)},callback(g,p){const u=!!p;if(o.success(`${u?"开启":"关闭"} ${e}`),typeof i=="function"&&i(g,u))return;this.props[Q].set(t,u);},afterAddToUListCallBack:(...g)=>{}};return Reflect.set(m.attributes,ae,t),Reflect.set(m.attributes,se,n),ve.initComponentsStorageApi("switch",m,{get(g,p){return a.getValue(g,p)},set(g,p){a.setValue(g,p);}}),m},Ct={id:"m-panel-blog",title:"博客",isDefault(){return $.isBlog()},views:[{text:"",type:"container",views:[{text:"全局布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","m-csdn-blog-shieldTopToolbar",false,void 0,"关闭是屏蔽顶部工具栏"),d("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[d("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[d("允许选择内容","m-csdn-blog-allowSelectText",true,void 0,"解除文字选中限制"),d("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开，包括：内容、代码块"),d("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","m-csdn-blog-comment-enable",true,void 0,"<code>开启</code>是允许出现评论，<code>关闭</code>是屏蔽评论区"),d("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","m-csdn-blog-bottomArticleEnable",true,void 0,"<code>开启</code>是允许出现推荐文章，<code>关闭</code>是屏蔽底部文章"),d("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),d("移除资源下载的文章","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),d("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",views:[{type:"container",text:"",views:[d("启用","m-csdn-blog-bottom-toolbar-enable",false,void 0,"<code>开启</code>是允许出现底部工具栏，<code>关闭</code>是屏蔽底部工具栏"),d("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),d("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]},vt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[fe("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{o.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),fe("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},yt={id:"m-panel-download",title:"资源",isDefault(){return $.isDownload()},views:[{text:"功能",type:"container",views:[d("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"屏蔽",type:"container",views:[d("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]},St={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return $.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[d("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"container",views:[d("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},kt={id:"m-panel-link",title:"链接",isDefault(){return $.isLink()},views:[{text:"功能",type:"container",views:[d("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},_t={id:"panel-so",title:"搜索",isDefault(){return $.isSo()},views:[{text:"C知道-功能",type:"container",views:[d("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},Mt={id:"m-panel-wenku",title:"文库",isDefault(){return $.isWenKu()},views:[{text:"屏蔽",type:"container",views:[d("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},Tt={id:"panel-blog",title:"博客",isDefault(){return $.isBlog()},views:[{text:"",type:"container",views:[{text:"全局布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[d("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false)]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[d("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),d("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[d("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),d("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),d("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),d("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",views:[{text:"功能",type:"container",views:[d("启用","csdn-blog-rightToolbarEnable",true,void 0,"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."),d("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加"),Re("right偏移","csdn-blog-rightToolbarRightOffset",90,0,document.documentElement.clientWidth,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");l.css(n,{right:t+"px"});},e=>`当前：${e}px，默认：90px`),Re("top偏移","csdn-blog-rightToolbarTopOffset",140,0,document.documentElement.clientHeight,(e,t)=>{let n=document.querySelector(".csdn-side-toolbar");l.css(n,{top:t+"px"});},e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"container",views:[d("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),d("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),d("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),d("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),d("【屏蔽】举报","csdn-blog-rightToolbarReport",false),d("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[d("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),d("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),d("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),d("全文居中","csdn-blog-articleCenter",true,void 0,"自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"),d("允许选择内容","csdn-blog-allowSelectContent",true,void 0,"解除文字选中限制")]},{text:"屏蔽",type:"container",views:[d("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),d("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),d("【屏蔽】gitcode链接卡片","csdn-blog-blockGitCodeLinkCard",false)]}]},{text:"评论区",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","csdn-blog-blockComment",true,void 0,"<code>开启</code>是允许出现评论，<code>关闭</code>是屏蔽评论区"),d("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[d("启用","csdn-blog-bottomRecommendArticleEnable",true,void 0,"<code>开启</code>是允许出现推荐文章，<code>关闭</code>是屏蔽底部文章"),d("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),d("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]},Rt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[fe("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{o.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),fe("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),d("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Bt={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return $.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[d("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"屏蔽",type:"container",views:[d("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),d("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),d("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),d("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),d("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},At={id:"panel-link",title:"链接",isDefault(){return $.isLink()},views:[{text:"功能",type:"container",views:[d("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Et={id:"panel-so",title:"搜索",isDefault(){return $.isSo()},views:[{text:"C知道-功能",type:"container",views:[d("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Dt={id:"panel-wenku",title:"资源",isDefault(){return $.isLink()},views:[{text:"屏蔽",type:"container",views:[d("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),d("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),d("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]};Ce.deleteMenuOption(0);Ce.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(X.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{a.showPanel(X.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);X.addContentConfig([Rt,Tt,At,Bt,Dt,Et]);X.addContentConfig([vt,Ct,kt,St,Mt,_t,yt]);a.init();let $e=C.isPhone(),oe="change_env_set",Z=re(oe);Be.add({key:oe,text:`⚙ 自动: ${$e?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return Z==null?e:e+` 手动: ${Z==1?"移动端":Z==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){b.error("输入的不是规范的数字");return}if(!e.includes(n)){b.error("输入的值必须是0或1或2");return}n==0?ie(oe):ge(oe,n);}});Z!=null?(o.info(`手动判定为${Z===1?"移动端":"PC端"}`),Z==1?Me.init():Z==2?Te.init():(b.error("意外，手动判定的值不在范围内"),ie(oe))):$e?(o.info("自动判定为移动端"),Me.init()):(o.info("自动判定为PC端"),Te.init());

})(Qmsg, DOMUtils, pops, Utils);