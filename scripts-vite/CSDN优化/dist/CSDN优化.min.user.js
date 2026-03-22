// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.22
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAEsFJREFUeF7tnQ2QHMV1x39v7iRZR6lQkNg5ySDQzp6lhNg4hgTiQMUEHD4EFE6Ck7JTJBVTGAwJNgmOCUphu0jAjiskfCXCcVJQMakEVwgGBBircBAJBiwwAmSJ210JIaSbkyxFwggb3c3L9tyuuNubmZ3Zr9vdm67a2tvb7tfvvf5vT/fr1+8JPVhes8mOCStRVgArBFYoDAAD5t2C+ZXPZfEPChz04G3zDvifFbZgXsKWfmXzcS7FXlOXdLtAIzZHvCV8BOUC4NfMgANzWiTXIR8Q8D8IDx6hfG/Q5a0W9dUWsl0JgGKGEz3h14EzLLhAoa8t2qrqRGDcgweBJyzlv7OjvDgTfDTSZ9cA4FWbU/qUc0Q4V+GURoRuVVuBZ1R5ZFx49H0uz7Sqn2bS7WgAdMOghw1Gt4ChIwFQsDlf4DLFf653fRF4UOEux+WhThOmowDQawNfPdidCISOAECvD3wnA2FGAbB1kONVuU7hsk6bGtvBj8BdIty0fIRt7egvqI8ZA8DwIFdaHl9AOGamhO+IfpUdnsXNQyPcMRP8tB0AhaM5DYvrgPNmQuAO7nMtHjc5u3mqnTy2FQB5m+sFbmyngN3Wl8LqnMtftYvvtgDAWO4QblQ4v12CdXM/Ag+hrG6HZbHlAChkuFwmBn9RNw9Ku3kX+LEqq51R/rGVfbcUAPkMd4twSSsF6HXaqtyTG+UPWiVnywBQsPlO6dTso61ifJbRfdxx+c1WyNwSAOQHeV6UX2oFw7OVpgov5Eb4ULPlbzoA8jbbBY5tNqMpPVB4PeeyrJm6aCoACrbvHGE8b9LSOg0cdFyOaBb5pgGgYPN/wJHNYiylE6mB/Y7LwmboqCkAKNhsBN7fDIZSGrE18JLj8oHYtUMqNgyAgu2fca9qlJG0fV0aeNhxGzOuNQSAgs1/ABfXxXraqFkauM9x+Xi9xOoGQGrkqVflzW/XiLGoLgAY8y7CPzRflJRi3RpQrqjHbJwYAOWDnXWpbb/uoWpJQ3N2gHJm0gOk5ACwfQfH9FSvJcPYGFFziph1kznSJgJAep7f2AC1o3VSf4LYACh78qxvhxBpHw1qwOP0uJ5F8QFg83DqxtXgwLSv+VrHjWebiQUA34FTub19/Kc9NaoBT7gqjqNpTQAY123PY/2s995tdETa3V7ZYVmcXsvlvCYAijZrZqvffrvHrNn9mXsHWZdPR9GNBIC5scPE9ee0dK8GLoi6kxgJgKLNt3vlgmb3jl9jnJv7iFmXC8OohAIg/fU3pvgOax06C4QCIP31d9gQNsBO1CwQCID019+Atju3aeAsEAiA9NffuaNYL2dhs8A0APhhWeD79XaUtutcDYzDqdWxi6YBYDjDFy3hhs4VI+WsXg14ypeGRvni5PbTAFC0+X6nRuGqV/C03YQGTOCqrMupoQBIp//eh0r1Y2DKDJBO/70PgOrHwBQApNN/7wOg+jFwGAD5JZwkHj/ofRWkEqrFybldbCivCyYUkh/k86J8JVVP72tAhT/PjfDVKQAo2jymtOYOeu+rtLskFPhO1uXswwDYvJgFc/r8y51Wd4mSclunBrxD4yxcuYc3/TVAcZDfUeW+OomlzbpQAyJcnB3hWz4ACjb/BHyqC+VIWa5fA99wXC6tAOAl4Bfrp5W27EINvOy4vL8CgHdamGalC3UzK1g+5LjMFT/BEhRaJXIp7v9OT9koUFT8pEtFlLexWCjKQsR/P0rhaIQM5h2OFjhaqR0KxY+nBy/478JeVfaKslct9lrq35f7mWexVJQlpZj9S0VYospSofwZ5lbJ7qpyhzWRNOqgWhw0f48pb5t3S1ik6sc3NnGQjhE4xlOOlebFPB4R2Kb4AaS3qbJHhH2q7FOLfZaSVciKeQkrtYFgXP3gSGGQ81D/0kezyn6Ee1V5UpXnhkbrA1fe5tbSoP5xEFOKH5fgKfV4amg3LzTCeME2sZemlEgnyqi+ioNcrOrHS0gSM8FES/cHvN9j2/LdjCSR50fvZVH/GKeJcJqov7WLH6lFWCUFm88Bf5uk05C6Zh1xL33c6+xke6P0ChnWIpw7mY7A90S5efkojzVK37TfupSV3jg/mkyrXzjhuBE2NUJ/yyLeO2cOF6lyE7CgBq0POC5Gdw2X4aM4RuZwhxDuBFrVyTUGACYUaaTveBRnCnkLbs263NawBJMI5G2GBXKVf4lybXaUrzW1jwwfE+E/pwBgHkcdt519zeinmMFW8QNmBsbyKV3kHBvoY8nSnexpRn8VGvkMfyPCn8WguUaKNk8ofCRG5WlVzMnSe+Zy67E72FtP+7A2uxez4EAfByZ9/1nH5e+b2YehVbD9sPV/PYnuXsdtfkzjCB2/7jQ57l9FlkKGH5RyG54UpTN/Ri3YfnqzX0mq3CDvkjAawznmWftZhsUygeUeDAIHEA7gsd8sbvo89mk/+w69w765/fy86kTaNRHuyY5Ex8rdtJglc/s5WyYyhc6XSmZQYT4eAyLM95TtlsVrHhQFXvmJsmmBcKfqlFjGrzhu8HbYKLTES1aVUSi/hD0CezyL+yuHK0E6eNUma8GzMj1g9rOOG5wC70WbIwaEX0Y5UpQjET8En3m5IrzhjLA2aszyGS4rLXjX1BjXZw0AEtsA4g5+YQkn4/EJ8F92UpCV63/Ccfm3sLb5DH8qwlXA8XXSn9xsneNyVjUdPzsp/KTGr+l2r4+v5nbyelC9QoZ/QfjDyd8JPJB1uSioflmu0Eee+fWWAHFL1uXbYXzFmAVelrxNwWwp4ipP4N+zLr8XVf+1QX5hDL6M8ttx6YbVmzuHRVGPmEYeYQF9ftNx+f3q/2+zWT4+sYWNLsoGDnGms4/91RWDXO0V1uRcLg8EgM1tpdnFADuquGNjnLTix7wRVKmWd7fZlps1wM4SI0tqyVb+fmPfOOccv4ddYfX9wVd/m3ZCTJq1qp3luKyLqlSw+TuTRjZssVWrg8r3InwtO8K11fW32pzixfWUVu50RrkycBaw2TplplK+6IzypcC6g3wrzg8oajYu2Pwr8Mkw+QV2mUdAkhCvtzgu10QptBbq4g7GpHr/7LjxzinMI6dkf/gNC85Q5Zw6+rrGcbmlut2wzYUWPBCT3m7H9Q1a00q1y50on86OclfIDPC/Ar9aq89IAGS4A+EzETT2GwAkMQNHGkladaMo7ppjsqBmjz8+xvmWsCruLkeE382O+LPXlDJsc6kFX681GJXvLWF50L38agBYFucu38WjsWaLkM6jdJO3uVHg+gi+DyUCgOMaz+LwErTQiau0WvWMoHOEu493/Wk0URlezIfEYpUl/JbCB0Mbh8TWKdr8hRI/kVPQBQzT5zSn23FWOHt4tZofBTMuP5XpZuog1gNnLVOxUHsG8AEQ9xFQc49cqH7GJRqmWJUPlLaRdwt8c3kd2bm3LmShN8+/9PLZoN76IBsEsBiKnEIubOFaDYCsyxyBsWpeti1myXgfO+NoRISPZ0eCfTnyNg/UsAruj70INBa/nMtQFFPV1rs4AjRQ52VgHcqT8/t5Mok1LWyP7C3gPUN5flbNUwxFvttE2eCMcnKQXFUAGHXc4K2xmbGsvgmnzVrFUz48NMrTQfUKg2xAw7OM+IvAuNvAoFsl1Z3OYDiZgyqst5QnsVif3UXNcHYBga4PlBaAgfkOailysh4iF2WDrEc5rVx/o+NyYsjAxT6gm9fPsce8wY5AOrZvsDKnq4HF3wbGNQQZtGRdlkYhshxL8LvAvFrIbeX3ZrYS+FxUaJT8IFeJTjm/2Oq4wfaQQg1FVmQxxpms629Hp5Xy9viVyhcqPJYbCd6pFG0+pfheWjVL2Lqs/LirdabxciJTsCecMTTiW6BCSyHDFaVz/Ttrct7iCrV2DvkMF4lw/yQ2nnPcYJN4wJFxEPePW8JlYVG5Am5dhW5vizbXa4wMq6rsyI0G52caHuQESzGPyajybNLDoJp2ANNbIeNbAK9GOL3F4xw2t23ot7gk6li3YPv7/cOLQREezY5MPX42xGP8ksya4ZbsIm6QTf6WOrAUbH8wDhvHSou/1aVFYGCK2EKG25FgY9Jk4gJPZ10+HNThcIazLQneYk6esRIfB0etOqsZKdpc6Akry4c05qDGvMz5uHFHPqDwJsKbomxS4UUPNlnKE2U6vkGlsJRlHJo4SAKWISxDy3+bzxPF+B9sR9iuHj/MhRhXJvNXtHmhaksYaAYO+CWZM4GNCBvxeNHzeHZoD89HzorBiTVCzzgKMa2AJUCFJoso2PxRyWvpGzV+gGvqcghJAoIkM0AhwycR33xpSujJXBKaQXXzGb4iwuerfk3Gp+HqRmlXtw/LqmLBqWFb2bxNLCugmXnCLLPFDH+pwpdryHNN3S5hrXDQKA5yrerhK0uhC6pGBqlo83WFS6tpeHD9kDvFN6CRbig7gxgnmUD3ME/IDI2wO6iTBPaU6xyXmwNBbrOm5I95WaQQxiWsEafQZrtoFW1u03dPwBrKhVMtuL/3NwoJcZLw4NIht+aUWRMUO5cy8FOPK0vOnOYkLzTJY9jqvfBzHKlzGY1lBVQ+44wGZ26Jk8zLdwo1EiU8DwhSgrlV9PQhZd3KUT+FXF2lYPtRSf1kFGYV32fxSp+y4Tg3xlFsQI8G3IeUs6IG/nAz4XxnpH7n2OJSVugYZ5QXb7XuWITaHHw642yOo8CoR3HAGqea5IRbeBkAiZ1Cwhg0WxMRnitlDffdwC3zPs64CvNQ5iHMs4S5eMwbN38rcz1hnii5aoeJSX0cAragbBFhs3n3hDcEBjxhwLwbLyDxGPAm/j4R8W3+ThxF+nWURxD2Cez1hH0WjI6XPX8skw1VmC/jZfrCgJp+jCu4+l64ZnG7OHZf8KInweZoQ2PSQjiSpNmWh1UQ5T6J5mnKxZCGHEMTCJ5W7RwNrHFcLp+YAQZZhfoJINMyWzRQfuT5ADA+bwdhv0LfbJF/NsspMD4ARw66vPVuiBib+4VgB8XZrKxelL1kAPuvnMvHjGyTAfAnQvN973tRgd0uk8LVOZdbpwDAJIRU4YfdLlzKf20NiPLBSoLJNExcbX31VI3QMHFGyjRQZE+NdaAwkYEi01CxvQ+AyFCxRvw0WmjvgqBmsGjfKJThhtLeYEpI8d5VySyTLOAmUpowYhZhIFbCiPJjIE0X12PAiJ0yxn8MpAkje2z4fXHiJ41KZ4HeGv/EaePSWaC3ABD2659iCg4SuQVXvXtOs50uUN2pY9NZoNOHNjZ/9SePLq8F0vTxsXXdWRUbTh9vxNk6yPGex3qaFwq1s7TUq9woOyyL08OuqlXEjgz4UKk0PMiVlnJ7r+qqF+XyhKuGRrijlmyxAFBeD5h4wufVIph+3xEaWOu4rIrDSXwAHM1p5u59HKJpnRnWQEiomyCuYgPANM7bXC8xri3PsPizuvtS/OHVuZBbxw0DoLwreFDLt3dmtaY7UHiBh7IuFyRhLdEM4AMg49+6WafT494m6Tet22QNmIQZKGdWfP3ikk8MAH9BmOFyJPhSYtyO03pN1oByhTPqh/5PVOoCgL8eyHB36f7fJYl6Syu3RAOq3JMbjY6oHtZx3QDwZwLbT4bw0ZZIlRKNq4HHHbf+jK8NAcCfCQZ5XhpIXBRXyrTedA2o8EJuJDwOYBydNQwAHwQ222Uii1Za2qQBhddzTcg20hQAlB8Hb2Hu0aelHRo46Li1U+rFYaRpACiDIG7c4Ti8pXWCNbDfcVnYLOU0FQBlEJgQMfFz1zVLktlB5yXHDc5AVq/4TQdAGQQm2ESsw4h6GZ+F7R523In4Sc0sLQFAGQQm8UKSDJrNlKvXaDU1Ytpk5bQMAP7uIDUWNQzERow8cTpvKQD8mSDD5SLcmJ4dxBmOd+v4ybCV1fWYd5P01HIAGGbKB0gGBE1/hiURtlvqmlM9lNVJD3bqka8tAKgwlvoT1B6ipOf5tSlG12grAPxHwoRnkcnZm7qXTR2btaXgmTc5u3mq0UFN0r7tAKgw5zuaenxh1nsbKzs8i5vjOHAmGdi4dWcMAIZB43KuynVaK6p1XGm6rJ7x2xfhplqu260Ua0YBUBHM3EY2AZ2VZO5MrVRMK2mb61oKd0XlNGpl/22zAyQVoteB0EkDXxmbjpgBqoHSa0DoxIHvaABUmDNRy0Q5t084R+GUpDPKTNY3AZnGlUdVeOR9dWQ5bRfvHTkDBAnfDWDolkHv2DVAXNTnl3CScYG2lDMVzjI5FuK2bXI9T+C7nrDOuMrndsVL99pkHhoi1zUzQJiUmxezYG4/Z6v6WTjNY8Jk75jTkFbCG09kLoFnTJ7Bd8Z4bOUe3mxRX20h2/UACNKSnwhLWIn6YFghsMKkeDEua+bdgvmVz+X2BwUOevC2eQf8zzox2FsQtvQrm+vNXdSWkayzk/8Hwkwl2TmhqxQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.13/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
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

(function (v, G, we, Ce) {
  'use strict';

  var Pe=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,re=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,pe=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ae=typeof GM_getValue<"u"?GM_getValue:void 0,oe=typeof GM_info<"u"?GM_info:void 0,ce=typeof GM_listValues<"u"?GM_listValues:void 0,We=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ue=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,xe=typeof GM_setValue<"u"?GM_setValue:void 0,Re=typeof GM_setValues<"u"?GM_setValues:void 0,Fe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ge=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,R=typeof unsafeWindow<"u"?unsafeWindow:void 0,qe=window;const ne={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},_={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&G.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),G.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),S(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof pe=="function"?pe(e.keyName):null;return typeof t=="string"&&t?S(t):_.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{G.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(r=>{o(r);}).catch(r=>{i.error("读取剪贴板内容失败👉",r),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(o);}).catch(r=>{i.error("申请剪贴板权限失败，尝试直接读取👉",r.message??r.name??r.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,r=n-t,l=t,a=async u=>{const p=await e(u);if(typeof p=="boolean"&&p||u){y.workerClearTimeout(o);return}if(l+=t,l>r){a(true);return}o=y.workerSetTimeout(()=>{a(false);},t);};a(false);},findParentNode(e,t,n){if(n){let o=G.closest(e,n);if(o)return o.querySelector(t)}else return G.matches(e,t)?e:G.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(r,l)=>l===void 0?n:l,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof R=="object"&&R!=null?R:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();const t=function(n){return n<10?`0${n}`:n};if(e<60)return `0:${t(e)}`;if(e>=60&&e<3600){const n=Math.floor(e/60),o=e%60;return `${n}:${t(o)}`}else {const n=Math.floor(e/3600),o=Math.floor(e/60)%60,r=e%60;return `${n}:${t(o)}:${t(r)}`}},formatTimeStamp(e,t){if(typeof e=="number"&&e<1e12){const u=String(Date.now()).length-String(e).length;e=e*Math.pow(10,u);}let n=e,o=new Date(typeof e=="string"?e.replace(/-/g,"/"):e),l=new Date(t??Date.now()).getTime()-o.getTime(),a=Math.floor(l/(24*3600*1e3));if(a>0)a>7?n=y.formatTime(o.getTime()):n=a+"天前";else {let u=l%864e5,p=Math.floor(u/(3600*1e3));if(p>0)n=p+"小时前";else {let h=u%36e5,f=Math.floor(h/(60*1e3));if(f>0)n=f+"分钟前";else {let g=h%6e4;n=Math.round(g/1e3)+"秒前";}}}return n}},y=Ce.noConflict(),d=G.noConflict(),H=we,i=new y.Log(oe,R.console||qe.console),ve=oe?.script?.name||void 0,He=we.fn.Utils.AnyTouch();i.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Ae=()=>{const t=we.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=y.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};v.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?i.warn(n):t==="error"?i.error(n):i.info(n),false},get position(){return s.getValue(ne.qmsg_config_position.key,ne.qmsg_config_position.defaultValue)},get maxNums(){return s.getValue(ne.qmsg_config_maxnums.key,ne.qmsg_config_maxnums.defaultValue)},get showReverse(){return s.getValue(ne.qmsg_config_showreverse.key,ne.qmsg_config_showreverse.defaultValue)},get zIndex(){return Ae()}});H.GlobalConfig.setGlobalConfig({zIndex:()=>Ae(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const De=new y.GM_Menu({GM_getValue:ae,GM_setValue:xe,GM_registerMenuCommand:We,GM_unregisterMenuCommand:Fe}),Y=new y.Httpx({xmlHttpRequest:Ge,logDetails:false});Y.interceptors.request.use(e=>e);Y.interceptors.response.use(e=>e,e=>(i.error("[Httpx-HttpxRequest.response] 响应错误",{data:e}),e.type==="onabort"?v.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?v.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?v.error("请求超时",{consoleLogContent:true}):v.error("其它错误",{consoleLogContent:true}),e));R.Object.defineProperty,R.Object.keys,R.Object.values,R.Function.prototype.apply,R.Function.prototype.call,R.Element.prototype.appendChild,R.setTimeout.bind(R),R.clearTimeout.bind(R),R.setInterval.bind(R),R.clearInterval.bind(R);const S=d.addStyle.bind(d),fe=G.selector.bind(G),$e=G.selectorAll.bind(G);new y.GM_Cookie;const me="GM_Panel",je="data-init",se="data-key",le="data-default-value",Ke="data-init-more-value",ze="data-plugin-search-config",X="data-storage-api",J={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},q={setting:{get width(){return J.width<550?"88vw":J.width<700?"550px":"700px"},get height(){return J.height<450?"70vh":J.height<550?"450px":"550px"}},settingMiddle:{get width(){return J.width<350?"88vw":"350px"}},info:{get width(){return J.width<350?"88vw":"350px"},get height(){return J.height<250?"88vh":"250px"}}},ee={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(l,a)=>{typeof a!="string"&&(a=_.toStr(a));const u=new Blob([a]),p=globalThis.URL.createObjectURL(u);d.createElement("a",{href:p,download:l}).click(),y.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(p);},500);},o=()=>{const l=g=>{const m=H.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(I,T){I.close();}}},drag:true,mask:{enable:true},width:q.info.width,height:q.info.height,style:`
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
          }`}),k=m.$shadowRoot.querySelector(".btn-control[data-mode='local']"),D=m.$shadowRoot.querySelector(".btn-control[data-mode='network']"),F=m.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),O=async I=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof ce=="function"?typeof re=="function"?(ce().forEach(b=>{re(b);}),v.success("已清空脚本存储的配置")):v.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):v.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Re=="function"?Re(I):Object.keys(I).forEach(b=>{const x=I[b];xe(b,x);}),v.success("配置导入完毕");},N=I=>new Promise(async T=>{const B=y.toJSON(I);Object.keys(B).length===0?v.warning("解析为空配置，不导入"):await O(B),T(true);});d.on(k,"click",I=>{d.preventEvent(I),m.close();const T=d.createElement("input",{type:"file",accept:".json"});d.on(T,["propertychange","input"],B=>{if(!T.files?.length)return;const b=T.files[0],x=new FileReader;x.onload=()=>{N(x.result);},x.readAsText(b,"UTF-8");}),T.click();}),d.on(D,"click",I=>{d.preventEvent(I),m.close();const T=H.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(x,E){x.close();}},ok:{text:"导入",callback:async(x,E)=>{const A=x.text;if(y.isNull(A)){v.error("请填入完整的url");return}const w=v.loading("正在获取配置..."),M=await Y.get(A,{allowInterceptConfig:false});if(w.close(),!M.status){i.error(M),v.error("获取配置失败",{consoleLogContent:true});return}await N(M.data.responseText)&&x.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:q.info.width,height:"auto"}),B=T.$shadowRoot.querySelector("input"),b=T.$shadowRoot.querySelector(".pops-prompt-btn-ok");d.on(B,["input","propertychange"],x=>{d.val(B)===""?d.attr(b,"disabled","true"):d.removeAttr(b,"disabled");}),d.onKeyboard(B,"keydown",(x,E,A)=>{x==="Enter"&&A.length===0&&d.val(B)!==""&&d.emit(b,"click");}),d.emit(B,"input");}),d.on(F,"click",async I=>{d.preventEvent(I),m.close();let T=await _.getClipboardText();if(T.trim()===""){v.warning("获取到的剪贴板内容为空");return}await N(T);});},a=(g=`${ve}_panel-setting-${y.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,m)=>{const k=H.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(O,N){O.close();}}},drag:true,mask:{enable:true},width:q.info.width,height:q.info.height,style:`
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
          }`}),D=k.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),F=k.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");d.on(D,"click",O=>{d.preventEvent(O);try{n(g,m),k.close();}catch(N){v.error(N.toString(),{consoleLogContent:true});}}),d.on(F,"click",async O=>{await y.copy(m)?(v.success("复制成功"),k.close()):v.error("复制失败");});},p=H.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(g,m){l();}},cancel:{enable:true,text:"导出",callback(g,m){a(void 0,f);}}},width:J.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),h={};if(typeof ce=="function")ce().forEach(m=>{const k=ae(m);Reflect.set(h,m,k);});else {v.warning("不支持函数GM_listValues，仅导出菜单配置");const g=ae(me);Reflect.set(h,me,g);}const f=_.toStr(h);p.value=f;},r=()=>{let l=oe?.script?.supportURL||oe?.script?.namespace;typeof l=="string"&&y.isNotNull(l)&&window.open(l,"_blank");};return [{id:"script-version",title:`版本：${oe?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(l){new He(l.$asideLiElement).on("tap",function(u){clearTimeout(t),t=void 0,e?(e=false,o()):(t=setTimeout(()=>{e=false,r();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},_e={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{s.showPanel(ee.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){_.isTopWindow()&&De.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Je{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new Ce.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const n=this.callbacks[t];n(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=ae(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const n=Pe(this.storageKey,(o,r,l)=>{this.cacheData=null,this.cacheData=l;});return this.callbacks.push(()=>{Ue(n);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,xe(this.storageKey,t);}set(t,n){const o=this.get(t),r=this.getLocalValue();Reflect.set(r,t,n),this.setLocalValue(r),this.emitValueChangeListener(t,n,o);}get(t,n){const o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){this.destory(),re(this.storageKey);}addValueChangeListener(t,n){const o=Math.random(),r=this.listenerData.get(t)||[];return r.push({id:o,key:t,callback:n}),this.listenerData.set(t,r),o}removeValueChangeListener(t){let n=false;for(const[o,r]of this.listenerData.entries()){for(let l=0;l<r.length;l++){const a=r[l];(typeof t=="string"&&a.key===t||typeof t=="number"&&a.id===t)&&(r.splice(l,1),l--,n=true);}this.listenerData.set(o,r);}return n}async emitValueChangeListener(...t){const[n,o,r]=t;if(!this.listenerData.has(n))return;const l=this.listenerData.get(n);for(let a=0;a<l.length;a++){const u=l[a];if(typeof u.callback=="function"){let p,h;t.length===1||(t.length===2?p=o:t.length===3&&(p=o,h=r)),await u.callback(n,p,h);}}}}const K=new Je(me),s={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new y.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return ve},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:me,attributeKeyName:se,attributeDefaultValueName:le},init(){this.initContentDefaultValue(),_e.init();},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const r=o.attributes,l=r[je];if(typeof l=="function"){const h=l();if(typeof h=="boolean"&&!h)return}const a=new Map,u=r[se];if(u!=null){const h=r[le];a.set(u,h);}const p=r[Ke];if(typeof p=="object"&&p&&Object.keys(p).forEach(h=>{const f=p[h];a.set(h,f);}),!a.size){i.warn("请先配置键",o);return}if(o.type==="switch"){const h=typeof o.disabled=="function"?o.disabled():o.disabled;typeof h=="boolean"&&h&&this.$data.contentConfigInitDisabledKeys.push(...a.keys());}for(const[h,f]of a.entries())this.setDefaultValue(h,f);},t=o=>{for(let r=0;r<o.length;r++){const l=o[r];e(l);const a=l.views;a&&Array.isArray(a)&&t(a);}},n=[...ee.getAllContentConfig()];for(let o=0;o<n.length;o++){const r=n[o];if(!r.views)continue;const l=r.views;l&&Array.isArray(l)&&t(l);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&i.warn("该key已存在，初始化默认值失败: ",{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){K.set(e,t);},getValue(e,t){const n=K.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){K.delete(e);},hasKey(e){return K.has(e)},addValueChangeListener(e,t,n){const o=K.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&s.emitMenuValueChange(e,r,r);}return o},removeValueChangeListener(e){K.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){K.emitValueChangeListener(e,t,n);},async exec(e,t,n,o=true){const r=this;let l;typeof e=="string"||Array.isArray(e)?l=()=>e:l=e;let a=false;const u=l();let p=[];Array.isArray(u)?(a=true,p=u):p.push(u);const h=p.find(b=>!this.$data.contentConfigInitDefaultValue.has(b));if(h){i.warn(`${h} 键不存在`);return}const f=JSON.stringify(p);if(o&&this.$data.onceExecMenuData.has(f))return this.$data.onceExecMenuData.get(f);let g=[];const m=[];let k=[];const D=(b,x)=>{const E=[],A=[];let w=[];if(Array.isArray(x))w=w.concat(x);else {const C=$=>{if(typeof $=="object"&&$!=null)if($ instanceof Element)w.push($);else {const{$css:W,destory:U}=$;W!=null&&(Array.isArray(W)?w=w.concat(W):w.push(W)),typeof U=="function"&&w.push(U);}else w.push($);};if(x!=null&&Array.isArray(x))for(const $ of x)C($);else C(x);}const M=C=>{if(C!=null){if(C instanceof Element){E.push(C);return}if(typeof C=="function"){A.push(C);return}}};for(const C of w){const $=M(C);if(typeof $=="boolean"&&!$)break;if(Array.isArray(C))for(const W of C){const U=M(W);if(typeof U=="boolean"&&!U)break}}O(),N(),b&&(g=g.concat(E),k=k.concat(A));},F=b=>!!this.getValue(b),O=()=>{for(let b=0;b<g.length;b++)g[b]?.remove(),g.splice(b,1),b--;},N=()=>{for(let b=0;b<k.length;b++){const x=k[b];x(),k.splice(b,1),b--;}},I=()=>{let b=false;return typeof n=="function"?b=n(p):b=p.every(x=>F(x)),b},T=async b=>{const x=I();let E=[];if(x){const A=p.map(w=>this.getValue(w));E=await t({key:p,triggerKey:b?.key,value:a?A:A[0],addStoreValue:(...w)=>D(x,w)});}D(x,E);};o&&p.forEach(b=>{const x=this.addValueChangeListener(b,(E,A,w)=>T({key:E}));m.push(x);}),await T();const B={reload(){this.clearStoreStyleElements(),this.destory(),T();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>O(),destory(){return N()},removeValueChangeListener:()=>{m.forEach(b=>{this.removeValueChangeListener(b);});},clearOnceExecMenuData(){o&&r.$data.onceExecMenuData.delete(f);}};return this.$data.onceExecMenuData.set(f,B),B},async execMenu(e,t,n=false,o=false){return await this.exec(e,async r=>await t(r),r=>r.every(a=>{let u=!!this.getValue(a);return s.$data.contentConfigInitDisabledKeys.includes(a)&&(u=false,i.warn(`.execMenu${o?"Once":""} ${a} 被禁用`)),n&&(u=!u),u}),o)},async execMenuOnce(e,t,n=false,o=false){const r=await this.execMenu(e,t,n,true);if(o&&r){const l=()=>{r.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,l);}return r},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),K.removeValueChangeListener(e)},onceExec(e,t,n=false){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(r=>{if(!!!s.getValue(r))return  true})!==-1||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${ve}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const r=e.findIndex(a=>(typeof a.isBottom=="function"?a.isBottom():!!a.isBottom)&&a.id==="script-version")!==-1;!n&&!r&&e.push(...ee.getDefaultBottomContentConfig());const l=H.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:a=>{a.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:a=>{a(),this.$data.$panel=null;}},width:q.setting.width,height:q.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=l,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:l,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,o=async(m,k)=>{if(m==null)return;const D=await k(m);return D&&typeof D.isFind=="boolean"&&D.isFind?D.data:await o(D.data,k)},r=(m,k)=>{const D=new IntersectionObserver(F=>{F.forEach(O=>{O.isIntersecting&&(k?.(),D.disconnect());});},{root:null,threshold:1});D.observe(m),m.scrollIntoView({behavior:"smooth",block:"center"});},l=m=>{const k="pops-flashing";d.onAnimationend(m,()=>{m.classList.remove(k);}),m.classList.add(k);},a=m=>{if(m.type==="dblclick"&&g)return;d.preventEvent(m);const k=H.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:q.settingMiddle.width,height:"auto",drag:true,style:`
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
				`});k.$shadowRoot.querySelector(".search-wrapper");const D=k.$shadowRoot.querySelector(".search-config-text"),F=k.$shadowRoot.querySelector(".search-result-wrapper");D.focus();const O=()=>{d.empty(F);},N=T=>{const B=y.queryProperty(T,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),b=d.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${B.matchedData?.path}</div>
							<div class="search-result-item-description">${B.matchedData?.description??""}</div>
						`}),x=H.fn.PanelHandlerComponents();return d.on(b,"click",()=>{const A=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[T.index];if(!A){v.error(`左侧项下标${T.index}不存在`);return}A.scrollIntoView({behavior:"smooth",block:"center"}),A.click(),o(T.next,async w=>{if(w?.next){const M=await d.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(C=>{const $=Reflect.get(C,x.$data.nodeStoreConfigKey);return typeof $=="object"&&$!=null&&$.text===w.name}),2500);if(M)M.click();else return v.error("未找到对应的二级菜单"),{isFind:true,data:w};return {isFind:false,data:w.next}}else {const M=await d.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(C=>Reflect.get(C,x.$data.nodeStoreConfigKey)===w.matchedData?.formConfig),2500);if(M){r(M);const C=M.closest(".pops-panel-forms-fold[data-fold-enable]");C&&(C.querySelector(".pops-panel-forms-fold-container").click(),await y.sleep(500)),r(M,()=>{l(M);});}else v.error("未找到对应的菜单项");return {isFind:true,data:w}}});}),b},I=T=>{const B=new RegExp(T,"i"),b=[],x=(A,w)=>{for(let M=0;M<A.length;M++){const C=A[M],$=C.views;if($&&Array.isArray($)){const W=y.deepClone(w);if(C.type==="deepMenu"){const U=y.queryProperty(W,te=>te?.next?{isFind:false,data:te.next}:{isFind:true,data:te});U.next={name:C.text};}x($,W);}else {let W,U;if(C.type==="own"){let P=Reflect.get(C.attributes||{},ze);P&&(typeof P=="function"&&(P=P()),typeof P.text=="string"&&(W=P.text),typeof P.desc=="string"&&(U=P.desc));}else W=C.text,U=Reflect.get(C,"description");const te=[W,U],ke=te.findIndex(P=>{if(typeof P=="string")return P.match(B)});if(ke!==-1){const P=y.deepClone(w),Te=y.queryProperty(P,j=>j?.next?{isFind:false,data:j.next}:{isFind:true,data:j});Te.next={name:W,matchedData:{path:"",formConfig:C,matchedText:te[ke],description:U}};const Me=[];y.queryProperty(P,j=>{const ye=j?.name;return typeof ye=="string"&&ye.trim()!==""&&Me.push(ye),j?.next?{isFind:false,data:j.next}:{isFind:true,data:j}});const Ne=Me.join(_.escapeHtml(" - "));Te.next.matchedData.path=Ne,b.push(P);}}}};for(let A=0;A<n.length;A++){const w=n[A];if(!w.views||w.isBottom&&w.id==="script-version")continue;const M=w.views;if(M&&Array.isArray(M)){let C=w.title;typeof C=="function"&&(C=C()),x(M,{index:A,name:C});}}const E=document.createDocumentFragment();for(const A of b){const w=N(A);E.appendChild(w);}O(),F.append(E);};d.on(D,"input",y.debounce(T=>{d.preventEvent(T);const B=d.val(D).trim();if(B===""){O();return}I(B);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(m=>{d.on(m,"dblclick",a);});const p=new WeakMap;let h=false,f,g=false;d.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(m,k)=>{g=true,clearTimeout(f),f=void 0,h&&p.has(k)?(h=false,p.delete(k),a(m)):(f=setTimeout(()=>{h=false;},200),h=true,p.set(k,m));},{capture:true}),t.$shadowRoot.appendChild(d.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let o=false,r=t;const l=this.addValueChangeListener(e,(a,u)=>{r=u;});return {get value(){return o||(o=true,r=n.getValue(e,t)),r},destory(){n.removeValueChangeListener(l);}}}};class Z{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:"same"};__protocol={value:void 0,type:"same"};__host={value:void 0,type:"same",hasPort:false};__pathname={value:void 0,type:"same"};__searchParams={value:new Set};constructor(t){typeof t=="string"&&this.href(t);}href(t){return this.__href__=t,this}origin(t){return this.__origin={value:t,type:"same"},this}originStartsWith(t){return this.__origin={value:t,type:"startsWith"},this}originEndsWith(t){return this.__origin={value:t,type:"endsWith"},this}originIncludes(t){return this.__origin={value:t,type:"includes"},this}originMatch(t){return this.__origin={value:t,type:"match"},this}protocol(t){return this.__protocol={value:t,type:"same"},this}protocolStartsWith(t){return this.__protocol={value:t,type:"startsWith"},this}protocolEndsWith(t){return this.__protocol={value:t,type:"endsWith"},this}protocolIncludes(t){return this.__protocol={value:t,type:"includes"},this}protocolMatch(t){return this.__protocol={value:t,type:"match"},this}host(t){return this.__host={value:t,type:"same",hasPort:true},this}hostStartsWith(t){return this.__host={value:t,type:"startsWith",hasPort:true},this}hostEndsWith(t){return this.__host={value:t,type:"endsWith",hasPort:true},this}hostIncludes(t){return this.__host={value:t,type:"includes",hasPort:true},this}hostMatch(t){return this.__host={value:t,type:"match",hasPort:true},this}hostName(t){return this.__host={value:t,type:"same",hasPort:false},this}hostNameStartsWith(t){return this.__host={value:t,type:"startsWith",hasPort:false},this}hostNameEndsWith(t){return this.__host={value:t,type:"endsWith",hasPort:false},this}hostNameIncludes(t){return this.__host={value:t,type:"includes",hasPort:false},this}hostNameMatch(t){return this.__host={value:t,type:"match",hasPort:false},this}pathname(t){return this.__pathname={value:t,type:"same"},this}pathnameStartsWith(t){return this.__pathname={value:t,type:"startsWith"},this}pathnameEndsWith(t){return this.__pathname={value:t,type:"endsWith"},this}pathnameIncludes(t){return this.__pathname={value:t,type:"includes"},this}pathnameMatch(t){return this.__pathname={value:t,type:"match"},this}search(t,n){return this.__searchParams.value.add({name:t,value:n}),this}build(){if(!this.__host.value)throw new TypeError("host or hostName should be required");const t=this.__protocol.value||"https",n=this.__host.value,o=this.__pathname.value||"/";let r=`${t}://${n}${o}`;if(this.__searchParams.value.size>0){const l=[];this.__searchParams.value.forEach(a=>{if(typeof a.name=="string"){let u="";(typeof a.value=="string"||typeof a.value=="number"||typeof a.value=="boolean")&&(u=a.value.toString()),l.push(`${encodeURIComponent(a.name)}=${encodeURIComponent(u)}`);}}),l.length&&(r+=`?${l.join("&")}`);}return r}or(t){return new Z(t)}r(){const t=new URL(this.__href);return [()=>{if(this.__origin.value)if(this.__origin.type==="same"){if(typeof this.__origin.value=="string")return t.origin===this.__origin.value;throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="startsWith"){if(typeof this.__origin.value=="string")return t.origin.startsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="endsWith"){if(typeof this.__origin.value=="string")return t.origin.endsWith(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="includes"){if(typeof this.__origin.value=="string")return t.origin.includes(this.__origin.value);throw new TypeError("origin value should be string by type "+this.__origin.type)}else if(this.__origin.type==="match"){if(this.__origin.value instanceof RegExp)return this.__origin.value.test(t.origin);throw new TypeError("origin value should be RegExp by type "+this.__origin.type)}else throw new TypeError("origin type should be same or startsWith or endsWith or includes or match");else return  true},()=>{if(this.__protocol.value)if(this.__protocol.type==="same"){if(typeof this.__protocol.value=="string")return t.protocol===this.__protocol.value;throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="startsWith"){if(typeof this.__protocol.value=="string")return t.protocol.startsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="endsWith"){if(typeof this.__protocol.value=="string")return t.protocol.endsWith(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else if(this.__protocol.type==="includes"){if(typeof this.__protocol.value=="string")return t.protocol.includes(this.__protocol.value);throw new TypeError("protocol value should be string by type "+this.__protocol.type)}else {if(this.__protocol.type==="match")return this.__protocol.value instanceof RegExp?this.__protocol.value.test(t.protocol):t.protocol.match(this.__protocol.value);throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match")}else return  true},()=>{if(this.__host.value){const o=this.__host.hasPort?t.host:t.hostname;if(this.__host.type==="same"){if(typeof this.__host.value=="string")return this.__host.value===o;throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="startsWith"){if(typeof this.__host.value=="string")return o.startsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="endsWith"){if(typeof this.__host.value=="string")return o.endsWith(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else if(this.__host.type==="includes"){if(typeof this.__host.value=="string")return o.includes(this.__host.value);throw new TypeError("host value should be string by type "+this.__host.type)}else {if(this.__host.type==="match")return this.__host.value instanceof RegExp?this.__host.value.test(o):o.match(this.__host.value);throw new TypeError("host type should be same,startsWith,endsWith,includes,match")}}else return  true},()=>{if(this.__pathname.value)if(this.__pathname.type==="same"){if(typeof this.__pathname.value=="string")return t.pathname===this.__pathname.value;throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="startsWith"){if(typeof this.__pathname.value=="string")return t.pathname.startsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="endsWith"){if(typeof this.__pathname.value=="string")return t.pathname.endsWith(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else if(this.__pathname.type==="includes"){if(typeof this.__pathname.value=="string")return t.pathname.includes(this.__pathname.value);throw new TypeError("pathname value should be string by type "+this.__pathname.type)}else {if(this.__pathname.type==="match")return this.__pathname.value instanceof RegExp?this.__pathname.value.test(t.pathname):t.pathname.match(this.__pathname.value);throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match")}else return  true},()=>{let o=true;if(this.__searchParams.value.size>0){const r=[];this.__searchParams.value.forEach(l=>{r.push(l);});for(let l=0;l<r.length;l++){const a=r[l];if(typeof a.name=="string"){let u=a.value;if(u==null||typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(u=u?.toString(),!t.searchParams.has(a.name,u)){o=false;break}}else if(u instanceof RegExp){const p=t.searchParams.get(a.name);if(p){if(!u.test(p)){o=false;break}}else {o=false;break}}else throw new TypeError("searchParams value should be string、RegExp、boolean、number、null、undefined")}else if(a.name instanceof RegExp){let u,p;if(t.searchParams.forEach((h,f)=>{!u&&f.match(a.name)&&(u=f,p=h);}),u){let h=a.value;if(h!=null)if(typeof h=="string"||typeof h=="number"||typeof h=="boolean"){if(h=h.toString(),o=h===p,!o)break}else if(h instanceof RegExp)if(p){if(!h.test(p)){o=false;break}}else {o=false;break}else throw new TypeError("searchParams value should be string、RegExp、boolean、number、null、undefined")}else {o=false;break}}else throw new TypeError("searchParams name should be string or RegExp")}}return o}].every(o=>o())}}const z={host(e,t){return new Z(t).host(e)},hostName(e,t){return new Z(t).hostName(e)},seach(e,t,n){return new Z(n).search(e,t)},pathname(e,t){return new Z(t).pathname(e)},protocol(e,t){return new Z(t).protocol(e)},builder(e){return new Z(e)}},V={isHuaWeiCloudBlog(){return z.builder().originIncludes("huaweicloud.csdn.net").r()},isBlog(){return z.builder().originIncludes("blog.csdn.net").r()},isBlogArticle(){return this.isBlog()&&z.builder().pathnameIncludes("/article/details/").r()},isWenKu(){return z.builder().originIncludes("wenku.csdn.net").r()},isLink(){return z.hostName("link.csdn.net").r()},isSo(){return z.hostName("so.csdn.net").r()},isSoCKnow(){return this.isSo()&&z.builder().pathnameStartsWith("/chat").or().pathnameStartsWith("/so/ai").r()},isDownload(){return z.hostName("download.csdn.net").r()}},Ve={init(){s.execMenuOnce("csdn-link-jumpRedirect",()=>{this.jumpRedirect();});},jumpRedirect(){try{let e=new URLSearchParams(window.location.search);const t="target";if(e.has(t)){let n=e.get(t),o=decodeURIComponent(n);i.success(`跳转链接：${o}`),window.location.href=o;}else i.error("解析跳转的链接失败，原因：搜索参数中没有target参数");}catch(e){v.error("跳转链接失败："+e.message);}}},Ze={init(){s.execMenuOnce("m-csdn-link-jumpRedirect",()=>{Ve.jumpRedirect();});}},Ye=`/* 右下角的 免费赢华为平板xxxx */
.org-main-content .siderbar-box {
  display: none !important;
}
`,Qe=`/* 底部免费抽xxx奖品广告 */
div.siderbar-box,
/* 华为开发者联盟加入社区 */
div.user-desc.user-desc-fix {
  display: none !important;
}
`,Le={init(){S(Qe),s.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",()=>this.shieldCloudDeveloperTaskChallengeEvent()),s.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent",()=>this.autoExpandContent()),s.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton",()=>this.shieldLeftFloatingButton()),s.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn",()=>this.blockRightColumn()),s.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",()=>this.blockRecommendedContentAtTheBottom()),s.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",()=>this.shieldTheBottomForMoreRecommendations());},autoExpandContent(){return i.info("自动展开全文"),[_.addBlockCSS("div.article-show-more"),S(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)]},shieldCloudDeveloperTaskChallengeEvent(){return i.info("屏蔽云开发者任务挑战活动"),_.addBlockCSS(".luck-draw-modal-warp")},shieldLeftFloatingButton(){return i.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"),_.addBlockCSS("div.toolbar-wrapper.article-interact-bar")},blockRightColumn(){return i.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签"),_.addBlockCSS("div.page-home-right.dp-aside-right")},blockRecommendedContentAtTheBottom(){return i.info("屏蔽底部推荐内容"),_.addBlockCSS("div.recommend-card-box")},shieldTheBottomForMoreRecommendations(){return i.info("屏蔽底部更多推荐"),_.addBlockCSS("div.more-article")}},Xe={init(){S(Ye),s.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent",()=>Le.autoExpandContent()),s.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",()=>this.blockBottomJoinTheCommunity());},blockBottomJoinTheCommunity(){return i.info("【屏蔽】底部加入社区"),_.addBlockCSS(".user-desc")}},et=`/*.blog_container_aside,
#nav {
	margin-left: -45px;
}
.recommend-right.align-items-stretch.clearfix,
.dl_right_fixed {
	margin-left: 45px;
}*/
`,tt=`.ecommend-item-box.recommend-recommend-box,
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
/* 顶部导航栏的会员中心的右边的推广图片，如：春招 */
#csdn-toolbar .toolbar-btn a[href*="mall.csdn.net/vip"]>img[src],
/* 侧栏的【点击体验 DeepSeekR1满血版】 */
#sidecolumn-deepseek,
/* 侧栏的【下载APP、公众号、视频号】 */
.csdn-side-toolbar .option-box[data-type="app"],
/* 右偏下的悬浮的 本文章已经生成可运行项目 */
body > .ins-code-runner-btn {
  display: none !important;
}
`,ge={init(){s.onceExec("csdn-blog-blockCSS",()=>this.addCSS()),s.execMenuOnce("csdn-blog-shieldTopToolbar",()=>this.shieldTopToolbar()),s.execMenuOnce("csdn-blog-shieldLoginDialog",()=>this.shieldLoginDialog()),s.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside",()=>this.shieldLeftBlogContainerAside()),s.execMenuOnce("csdn-blog-shieldRightDirectoryInformation",()=>this.shieldRightDirectoryInformation()),s.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar",()=>this.shieldBottomFloatingToolbar()),s.execMenuOnce("csdn-blog-blockBottomAskAIToolbar",()=>this.blockBottomAskAIToolbar()),s.execMenuOnce("csdn-blog-blockRunnerBox",()=>this.blockRunnerBox());},addCSS(){return i.info("添加屏蔽CSS和功能CSS"),[S(tt),S(et)]},shieldTopToolbar(){return i.info("【屏蔽】顶部工具栏"),_.addBlockCSS("#toolbarBox","#csdn-toolbar")},shieldLoginDialog(){return i.info("【屏蔽】登录弹窗"),_.addBlockCSS(".passport-login-container")},shieldLeftBlogContainerAside(){return i.info("【屏蔽】左侧博客信息"),_.addBlockCSS("aside.blog_container_aside")},shieldRightDirectoryInformation(){return i.info("【屏蔽】右侧目录信息"),_.addBlockCSS("#rightAsideConcision","#rightAside")},shieldBottomFloatingToolbar(){return i.info("屏蔽底部悬浮工具栏"),_.addBlockCSS("#toolBarBox")},blockBottomAskAIToolbar(){return i.info("【屏蔽】底部的AI伴读"),_.addBlockCSS('[class*="Container_"]:has([class^="chatMain"])')},blockRunnerBox(){return i.info("【屏蔽】runner-box"),_.addBlockCSS(".runner-box")}},Oe={init(){ge.init(),d.onReady(()=>{s.execMenuOnce("csdn-blog-removeClipboardHijacking",()=>{this.removeClipboardHijacking();}),s.execMenuOnce("csdn-blog-unBlockCopy",()=>{this.unBlockCopy();});});},removeClipboardHijacking(){i.info("拦截-复制的小尾巴"),d.remove(".article-copyright"),R.articleType&&(R.articleType=0),R?.csdn?.copyright?.textData&&(R.csdn.copyright.textData=""),R?.csdn?.copyright?.htmlData&&(R.csdn.copyright.htmlData="");},unBlockCopy(){i.info("劫持-禁止复制"),d.on(document,"click",".hljs-button",function(t,n){d.preventEvent(t);const o=n.closest(".hljs")||n.closest("pre"),r=n.parentElement,l=o?.querySelector("code")||r.querySelector("code")||r,a=l.innerText;i.info("点击复制按钮复制内容："+(a.length>8?a.substring(0,8)+"...":a),l),y.copy(a),n.setAttribute("data-title","复制成功");},{capture:true});const e=new y.LockFunction(function(t){const n=t.target;if(n.localName!=="pre")return;const o=n.querySelector(".hljs-button");o&&o.setAttribute("data-title","复制");});d.on(document,["mouseenter","mouseleave"],function(t){e.run(t);},{capture:true}),d.waitNode("#content_views").then(t=>{R.$&&R.$("#content_views")?.unbind("copy"),d.on(t,"copy",function(n){d.preventEvent(n);const r=R.getSelection()?.toString();return i.info("Ctrl+C复制内容："+(r.length>8?r.substring(0,8)+"...":r)),y.copy(r),false},{capture:true});}),d.waitNode(".hljs-button").then(()=>{setTimeout(()=>{$e(".hljs-button").forEach(t=>{t.removeAttribute("onclick"),t.removeAttribute("data-report-click"),t.setAttribute("data-title","复制");});},250);});}},L={waitRemove(...e){e.forEach(t=>{d.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),S(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof pe=="function"?pe(e.keyName):"";typeof t=="string"&&t?S(t):L.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,d.onReady(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},nt={init(){s.execMenuOnce("m-csdn-blog-blockBottomArticle",()=>this.blockBottomArticle()),s.execMenuOnce("m-csdn-blog-removeResourceArticle",()=>this.removeResourceArticle()),s.execMenuOnce("m-csdn-blog-openNewTab",()=>this.openNewTab()),d.onReady(()=>{s.execMenuOnce("m-csdn-blog-refactoringRecommendation",e=>this.refactoringRecommendation());});},blockBottomArticle(){return i.info("【屏蔽】底部文章"),L.addBlockCSS("#recommend")},async refactoringRecommendation(){const e=function(){$e(".container-fluid").forEach(r=>{let l="",a="",u="",p="";if(r.hasAttribute("data-url")){if(l=r.getAttribute("data-url"),a=r.querySelector(".recommend_title div.left")?.innerHTML,!r.querySelector(".text"))return;u=r.querySelector(".text")?.innerHTML,r.querySelectorAll(".recommend-img").length&&r.querySelectorAll(".recommend-img").forEach(f=>{p+=f.innerHTML;});}else l=r.querySelector("a[data-type]").getAttribute("href"),a=r.querySelector(".recommend_title div.left").innerHTML,u=r.querySelector(".text").innerHTML;const h=new URL(l);h.host==="download.csdn.net"||h.host==="www.iteye.com"&&h.pathname.match(/^\/resource/gi)?a='<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>'+a:h.origin.match(/edu.csdn.net/gi)&&(a='<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>'+a),r.setAttribute("class","GM-csdn-dl"),r.setAttribute("data-url",l),r.innerHTML=`<div class="GM-csdn-title"><div class="left">${a}</div></div><div class="GM-csdn-content">${u}</div><div class="GM-csdn-img">${p}</div>`,r.addEventListener("click",function(){window.location.href=l;});});},t=new y.LockFunction(e,50),n=await d.waitNode("#recommend");i.info("重构底部推荐");const o=y.mutationObserver(n,{config:{childList:true,subtree:true,attributes:true},immediate:true,callback:()=>{t.run();}});return [()=>{o.disconnect();}]},removeResourceArticle(){return i.info("移除资源下载的文章"),L.addBlockCSS('.container-fluid:has(a[href*="https://download.csdn.net/"])','.container-fluid[data-url*="https://download.csdn.net/"]','.GM-csdn-dl[data-url*="https://download.csdn.net/"]')},openNewTab(){return i.info("新标签页打开"),d.on(document,"click",[".container-fluid",".GM-csdn-dl"],(t,n)=>{d.preventEvent(t);const o=n.getAttribute("data-url");typeof o=="string"?(i.info(`新标签页打开：${o}`),window.open(o,"_blank")):v.error("未获取到data-url属性");},{capture:true}).off}},de={isSuccessResponse(e){return e==null?false:(typeof e=="string"&&(e=y.toJSON(e)),e?.code===200)}},ue={async folderListWithCheck(e){const t=await Y.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":y.getRandomPCUA()}});i.info(t);const n=y.toJSON(t.data.responseText);if(!t.status||!de.isSuccessResponse(t.data.responseText)){i.error("获取收藏夹信息失败，请求异常"),typeof n.msg=="string"?v.error(n.msg):v.error("获取收藏夹信息失败");return}return n.data.result},async addFavoriteInFolds(e){const t=await Y.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",{fetch:true,data:e,headers:{"Content-Type":"application/json","User-Agent":y.getRandomPCUA()},allowInterceptConfig:false});if(i.info(t),!t.status||!de.isSuccessResponse(t.data.responseText)){i.error("添加收藏失败，请求异常",t),v.error("添加收藏失败，请求异常");return}return  true},async checkFavoriteByUrl(e){const t=await Y.get("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",{data:{url:e},fetch:true,allowInterceptConfig:false,headers:{"User-Agent":y.getRandomPCUA()}});if(i.info(t),!t.status||!de.isSuccessResponse(t.data.responseText)){i.error("检查收藏夹状态失败，请求异常"),v.error("检查收藏夹状态失败，请求异常");return}return y.toJSON(t.data.responseText).data},async createFolder(e){const t=await Y.post("https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder",{data:e,fetch:true,headers:{Accept:"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","User-Agent":y.getRandomPCUA()},allowInterceptConfig:false});if(i.info(t),!t.status||!de.isSuccessResponse(t.data.responseText)){v.error("创建收藏夹失败");return}return y.toJSON(t.data.responseText).data}},ot={init(){s.execMenuOnce("m-csdn-blog-blockBottomToolbar",()=>this.blockBottomToolbar()),s.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom",()=>this.bottomToolBarAlwaysShow()),d.onReady(()=>{s.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton",()=>this.optimizationCollectButton());});},blockBottomToolbar(){return i.info("【屏蔽】底部工具栏"),L.addBlockCSS("#operate")},bottomToolBarAlwaysShow(){return i.info("底部工具栏常驻"),S(`
    #operate {
        bottom: 0 !important;
    }
    `)},async optimizationCollectButton(){i.info("优化收藏按钮");const e=await d.waitNode("#operate .collect-btn",1e4);if(!e)return;const t=d.on(e,"click",async n=>{d.preventEvent(n);const o=e.querySelector(".collect"),r=e.querySelector(".uncollect"),l=await ue.folderListWithCheck(window.location.origin+window.location.pathname);if(!l)return;const a=[];l.forEach(f=>{f.IsFavorite&&a.push(f.ID);});const u=f=>{let g=f.ID,m=d.createElement("li",{className:"csdn-collection-item",innerHTML:`
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${f.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${f.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${f.IsPrivate?"私密":"公开"}</span>
                    </span>
                </div>
                <span class="collect-btn">${f.IsFavorite?"已收藏":"收藏"}</span>
            `},{"data-is-collect":f.IsFavorite});m.querySelector(".title-m");let k=m.querySelector(".csdn-collection-item_length");m.querySelector(".csdn-collection-controls");let D=m.querySelector(".collect-btn");return d.on(D,"click",async F=>{let O=R.articleDetailUrl;O==null&&(O=window.location.origin+window.location.pathname);let N=R.articleId;if(N==null){i.error("获取文章ID失败"),v.error("获取文章ID失败");return}let I=R.username;if(I==null){i.error("获取文章作者失败"),v.error("获取文章作者失败");return}let T=R.articleTitle;if(T==null&&(T=document.title.replace(/-CSDN博客$/,"")),T==null){i.error("获取文章标题失败"),v.error("获取文章标题失败");return}let B=R.articleDesc;if(B==null){const E=fe("meta[name='description']");E&&(B=E.getAttribute("content"));}if(B==null){i.error("获取文章描述失败"),v.error("获取文章描述失败");return}const b=[...a];let x=v.loading("处理中...");try{let E=await ue.checkFavoriteByUrl(O);if(E==null)return;i.info(g,E);let A=!E[g];if(A?(i.info("添加收藏"),b.push(g)):(i.info("取消收藏"),b.splice(b.indexOf(g),1)),!await ue.addFavoriteInFolds({author:I,url:O,source:"blog",sourceId:N,title:T,description:B,fromType:"PC",username:f.Username,folderIdList:b}))return;const M=await ue.checkFavoriteByUrl(O);if(M==null)return;i.info(g,M),m.setAttribute("data-is-collect",(!!M[g]).toString()),A?M[g]?(i.success("收藏成功"),v.success("收藏成功"),d.text(D,"已收藏"),a.includes(g)||a.push(g),f.FavoriteNum++):(i.error("收藏失败",M,g),v.error("收藏失败")):M[g]?(i.error("取消收藏失败",M,g),v.error("取消收藏失败")):(i.success("取消收藏成功"),v.success("取消收藏成功"),d.text(D,"收藏"),a.includes(g)&&a.splice(a.indexOf(g),1),f.FavoriteNum--),d.text(k,`${f.FavoriteNum}条内容`),Object.values(M).find($=>$)?(d.show(o,!1),d.hide(r,!1)):(d.show(r,!1),d.hide(o,!1)),x.close();}catch(E){i.error(E);}finally{x.close();}}),m},h=H.alert({title:{text:"添加收藏夹",position:"center"},content:{text:`
									<ul class="csdn-collection-items"></ul>
								`,html:true},btn:{ok:{enable:false}},width:q.setting.width,height:q.setting.height,drag:true,mask:{enable:true},style:`
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
        `}).$shadowRoot.querySelector(".csdn-collection-items");l.forEach(f=>{const g=u(f);h.appendChild(g);});},{capture:true});return [()=>{t.off();}]}},it={init(){s.execMenuOnce("m-csdn-blog-blockComment",()=>this.blockComment()),s.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight",()=>this.notLimitCommentMaxHeight());},blockComment(){return i.info("【屏蔽】评论区"),L.addBlockCSS("#comment")},notLimitCommentMaxHeight(){return i.info("不限制评论区的最大高度"),S(`
        #comment{
          max-height: none !important;
        }
      `)}},rt={init(){it.init(),nt.init(),ot.init(),s.execMenuOnce("m-csdn-blog-blockTopToolbar",()=>this.blockTopToolbar()),s.execMenuOnce("m-csdn-blog-removeAds",()=>this.removeAds()),s.execMenuOnce("m-csdn-blog-allowSelectText",()=>this.allowSelectText()),s.execMenuOnce("m-csdn-blog-autoExpandContent",()=>this.autoExpandContent()),s.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight",()=>this.notLimitCodePreMaxHeight()),d.onReady(()=>{s.execMenuOnce("m-csdn-blog-unBlockCopy",()=>{Oe.unBlockCopy();});});},blockTopToolbar(){return i.info("屏蔽顶部Toolbar"),[_.addBlockCSS("#csdn-toolbar"),S(`
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
			`)]},removeAds(){return i.info("去除广告"),[_.waitRemove(".passport-login-container"),_.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),_.waitRemove(".add-firstAd"),_.waitRemove("div.feed-Sign-weixin"),_.waitRemove("div.ios-shadowbox")]},allowSelectText(){return i.info("允许选择内容"),S(`
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
    `)},autoExpandContent(){return i.info("自动展开"),S(`
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `)},notLimitCodePreMaxHeight(){return i.info("不限制代码块的最大高度"),S(`
    pre{
        max-height: unset !important;
    }
    `)}},at=`/* 右下角的买一年送3个月的广告图标 */
.blind_box {
  display: none !important;
}
`,st={init(){S(at),s.execMenuOnce("m-csdn-wenku-shieldBottomToolbar",()=>this.shieldBottomToolbar());},shieldBottomToolbar(){return i.info("【屏蔽】底部工具栏"),_.addBlockCSS(".page-container > div.btn")}},lt=`/* 右下角悬浮图标 买1年送3个月 */
.page-container .blind_box,
/* 底部工具栏右边的 开会员按钮（低至xx元/次） */
.page-container .btn .ml-12,
/* 登录弹窗 */
.passport-login-container,
/* 通用广告className匹配 */
.ads {
  display: none !important;
}
`,ct={init(){s.execMenuOnce("m-csdn-download-removeAds",()=>S(lt)),s.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction",()=>this.automaticallyExpandResourceIntroduction());},automaticallyExpandResourceIntroduction(){return i.info("自动展开资源介绍"),[_.addBlockCSS("label.unfold-font"),S(`
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`)]}},dt=`.view_comment_box,
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
`,ut=`#mainBox {
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
`,ht={init(){s.onceExec("m-csdn-blog-removeAds",()=>this.addCSS()),s.execMenuOnce("m-csdn-blog-blockBottomAskAIToolbar",()=>ge.blockBottomAskAIToolbar());},addCSS(){return [S(dt),S(ut)]}},pt={init(){ht.init();}},Be={init(){V.isLink()?(i.info("Router: 中转链接"),Ze.init()):V.isHuaWeiCloudBlog()?(i.info("Router: 华为云联盟"),Xe.init()):V.isBlog()?(i.info("Router: 博客"),pt.init(),V.isBlogArticle()&&(i.info("Router: 文章"),rt.init())):V.isWenKu()?(i.info("Router: 文库"),st.init()):V.isDownload()?(i.info("Router: 资源下载"),ct.init()):i.error("暂未适配，请反馈开发者："+globalThis.location.href);}},ft=`#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {
  max-height: unset !important;
  height: auto !important;
  overflow: auto !important;
}

.forbid {
  user-select: text !important;
}
`,mt=`/* wenku顶部横幅 */
#app > div > div.main.pb-32 > div > div.top-bar,
/* 底部展开全文 */
#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open,
/* 全屏红包雨 */
#csdn-redpack {
  display: none !important;
}
`,gt={init(){S(ft),S(mt),s.execMenuOnce("csdn-wenku-shieldResourceRecommend",()=>this.shieldResourceRecommend()),s.execMenuOnce("csdn-wenku-shieldRightUserInfo",()=>this.shieldRightUserInfo()),s.execMenuOnce("csdn-wenku-shieldRightToolBar",()=>this.shieldRightToolBar());},shieldResourceRecommend(){return i.info("【屏蔽】资源推荐"),_.addBlockCSS("#recommend")},shieldRightUserInfo(){return i.info("【屏蔽】右侧用户信息"),_.addBlockCSS(".layout-right")},shieldRightToolBar(){return i.info("【屏蔽】右侧悬浮工具栏"),_.addBlockCSS(".csdn-side-toolbar")}},bt={init(){s.execMenuOnce("csdn-blog-shieldBottomSkillTree",()=>this.shieldBottomSkillTree()),s.execMenuOnce("csdn-blog-shieldArticleSearchTip",()=>this.shieldArticleSearchTip()),s.execMenuOnce("csdn-blog-blockGitCodeLinkCard",()=>this.blockGitCodeLinkCard());},shieldBottomSkillTree(){return i.info("【屏蔽】底部xx技能树"),_.addBlockCSS("#treeSkill")},shieldArticleSearchTip(){return i.info("【屏蔽】选中文字悬浮栏"),_.addBlockCSS("#articleSearchTip")},blockGitCodeLinkCard(){return i.info("【屏蔽】gitcode链接卡片"),_.addBlockCSS('a.has-card[href*="gitcode.com"]',".t2-card-container")}},xt=`.main_father {
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
`,yt={init(){s.execMenuOnce("csdn-blog-blockComment",()=>this.blockComment()),d.onReady(()=>{s.execMenuOnce("csdn-blog-restoreComments",()=>{this.restoreComments();});});},blockComment(){return i.info("【屏蔽】评论区"),L.addBlockCSS("#pcCommentBox")},restoreComments(){i.info("恢复评论到正确位置-第一条评论"),d.waitNode(".first-recommend-box").then(e=>{const t=fe(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);}),i.info("恢复评论到正确位置-第二条评论"),d.waitNode(".second-recommend-box").then(e=>{const t=fe(".recommend-box.insert-baidu-box.recommend-box-style");t.insertBefore(e,t.firstChild);});}},vt={init(){s.execMenuOnce("csdn-blog-blockBottomRecommendArticle",()=>this.blockBottomRecommendArticle()),s.execMenuOnce("csdn-blog-identityCSDNDownload",()=>this.identityCSDNDownload()),s.execMenuOnce("csdn-blog-removeResourceDownloadArticle",()=>this.removeResourceDownloadArticle());},blockBottomRecommendArticle(){return i.info("【屏蔽】底部文章"),L.addBlockCSS("main > div.recommend-box")},identityCSDNDownload(){return i.info("标识CSDN下载的链接"),S(`
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `)},removeResourceDownloadArticle(){return i.info("移除资源下载的文章"),L.addBlockCSS(".recommend-item-box[data-url*='https://download.csdn.net/']")}},wt={init(){s.exec("csdn-blog-rightToolbarEnable",()=>this.shieldRightToolbar(),e=>!s.getValue(e[0]),true),s.execMenuOnce("csdn-blog-rightToolbarCreativeCenter",()=>this.shieldCreativeCenter()),s.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar",()=>this.shieldShowOrSidebar()),s.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance",()=>this.shieldBeginnerGuidance()),s.execMenuOnce("csdn-blog-rightToolbarCustomerService",()=>this.shieldCustomerService()),s.execMenuOnce("csdn-blog-rightToolbarReport",()=>this.shieldReport()),s.execMenuOnce("csdn-blog-rightToolbarBackToTop",()=>this.shieldBackToTop());},shieldRightToolbar(){return i.info("启用/关闭 右侧工具栏"),L.addBlockCSS("div.csdn-side-toolbar",".article-aside-container")},shieldCreativeCenter(){return i.info("【屏蔽】创作中心"),L.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box")},shieldShowOrSidebar(){return i.info("【屏蔽】显示/隐藏侧栏"),L.addBlockCSS(".csdn-side-toolbar a.sidecolumn")},shieldBeginnerGuidance(){return i.info("【屏蔽】新手引导"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]')},shieldCustomerService(){return i.info("【屏蔽】客服"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]')},shieldReport(){return i.info("【屏蔽】举报"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]')},shieldBackToTop(){return i.info("【屏蔽】返回顶部"),L.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]')}},Ct={init(){wt.init(),s.execMenuOnce(["csdn-blog-coverRightToolOffSet","csdn-blog-rightToolbarTopOffset","csdn-blog-rightToolbarRightOffset"],e=>{if(e.value[0])return this.initRightToolbarOffset(e.value[1],e.value[2])}),d.onReady(()=>{s.execMenuOnce("csdn-blog-addGotoRecommandButton",()=>{this.addGotoRecommandButton();});});},addGotoRecommandButton(){i.info("【添加】前往评论按钮，在返回顶部的上面");let e=document.createElement("a");e.className="option-box",e.setAttribute("data-type","gorecommand"),e.innerHTML=`
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`,e.addEventListener("click",function(){let t=document.querySelector("#toolBarBox");if(!t||!t.getClientRects().length){let a=fe("#pcCommentBox");if(a&&a.getClientRects().length)t=a;else {i.error("评论区处于隐藏状态");return}}i.info("滚动到评论");let n=t.getBoundingClientRect().top+window.scrollY,o=document.querySelector("#csdn-toolbar"),r=window.getComputedStyle(o),l=o.clientHeight-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom);window.scrollTo({top:n-l-8,left:0,behavior:"smooth"});}),d.waitNode(".csdn-side-toolbar").then(()=>{let t=document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");t.parentElement.insertBefore(e,t.nextSibling);});},async initRightToolbarOffset(e,t){return i.info("初始化右侧工具栏的偏移（top、right）"),S(`
    .csdn-side-toolbar{
      left: unset !important;
      top: ${e}px !important;
      right: ${t}px !important;
    }
    `)}},_t={init(){s.execMenuOnce("csdn-blog-ai-blockRightToolbar",()=>this.blockRightToolbar()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarCatalogue",()=>this.blockRightToolbarCatalogue()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarLike",()=>this.blockRightToolbarLike()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarComment",()=>this.blockRightToolbarComment()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarCollect",()=>this.blockRightToolbarCollect()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarShare",()=>this.blockRightToolbarShare()),s.execMenuOnce("csdn-blog-ai-blockRightToolbarMore",()=>this.blockRightToolbarMore());},blockRightToolbar(){return i.info("【屏蔽】右侧工具栏"),L.addBlockCSS(".article-aside-container")},blockRightToolbarCatalogue(){return i.info("【屏蔽】目录"),L.addBlockCSS(".article-aside-container .sidebar-item.groupfile")},blockRightToolbarLike(){return i.info("【屏蔽】点赞"),L.addBlockCSS(".article-aside-container .sidebar-item.islike")},blockRightToolbarComment(){return i.info("【屏蔽】评论"),L.addBlockCSS(".article-aside-container .sidebar-item.go-side-comment")},blockRightToolbarCollect(){return i.info("【屏蔽】收藏"),L.addBlockCSS(".article-aside-container .sidebar-item#sidebar-collect")},blockRightToolbarShare(){return i.info("【屏蔽】分享"),L.addBlockCSS(".article-aside-container .sidebar-item#tool-share")},blockRightToolbarMore(){return i.info("【屏蔽】..."),L.addBlockCSS(".article-aside-container .sidebar-item#sidebar-more")}},St={init(){_t.init(),s.execMenuOnce(["csdn-blog-ai-coverRightToolOffSet","csdn-blog-ai-coverRightToolOffSet-top","csdn-blog-ai-coverRightToolOffSet-right"],e=>{if(e.value[0])return this.coverRightToolOffSet(e.value[1],e.value[2])});},async coverRightToolOffSet(e,t){return i.info("覆盖右侧工具栏的偏移（top、right）"),S(`
    #mainBox .article-aside-container{
      left: unset !important;
      top: ${e}px !important;
      right: ${t}px !important;
    }
    `)}},kt={init(){bt.init(),yt.init(),vt.init(),Ct.init(),St.init(),s.execMenuOnce("csdn-blog-articleCenter",()=>this.articleCenter()),s.execMenuOnce("csdn-blog-autoExpandContent",()=>this.autoExpandContent()),s.execMenuOnce("csdn-blog-autoExpandCodeContent",()=>this.autoExpandCodeContent()),s.execMenuOnce("csdn-blog-allowSelectContent",()=>this.allowSelectContent()),d.onReady(()=>{s.execMenuOnce("csdn-blog-clickPreCodeAutomatically",()=>{this.clickPreCodeAutomatically();});});},clickPreCodeAutomatically(){i.info("点击代码块自动展开"),document.addEventListener("click",function(e){let t=e.target;t.localName==="pre"&&(t.style.setProperty("height","auto"),t.querySelector(".hide-preCode-box")?.remove());});},articleCenter(){i.info("全文居中");let e=[S(xt)];return e.push(ge.shieldRightDirectoryInformation()),e.push(S(`
      #mainBox {
        margin-right: 0px;
      }
      `)),e.push(ge.shieldLeftBlogContainerAside()),e.push(S(`
      #mainBox {
        margin-left: 0px;
      }`)),e.push(S(`
    html body .main_father #mainBox{
      padding-right: 0px !important;
    }
    .article-aside-container{
      left: unset !important;
      right: 150px !important;
    }
    `)),e},autoExpandCodeContent(){return i.info("自动展开代码块"),[_.addBlockCSS("pre.set-code-hide .hide-preCode-box"),S(`
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `)]},autoExpandContent(){return i.info("自动展开全文"),S(`
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `)},allowSelectContent(){return i.info("允许选择内容"),S(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`)}},Tt="",Mt=`/* 红包雨 */
#csdn-redpack,
/* 顶部 购会员横幅 */
.page-container .top-bar,
/* 底部 购会员横幅 */
.page-container .fix-bottom-bar {
  display: none !important;
}
`,Rt={init(){S(Mt),S(Tt);}},Bt=`/* 顶部工具栏右边的 会员 */
#csdn-toolbar .toolbar-btn > a[href*="mall.csdn.net/vip"],
/* 顶部工具栏右边的 VIP抢千元豪礼 */
#csdn-toolbar a.toolbar-btn[href*="mall.csdn.net/vip"] {
  display: none !important;
}
`,Ee={init(){S(Bt),V.isLink()?(i.info("Router: 中转链接"),Ve.init()):V.isHuaWeiCloudBlog()?(i.info("Router: 华为云联盟"),Le.init()):V.isBlog()?(i.info("Router: 博客"),Oe.init(),V.isBlogArticle()&&(i.info("Router: 帖子"),kt.init())):V.isWenKu()?(i.info("Router: 文库"),gt.init()):V.isDownload()?(i.info("Router: 下载"),Rt.init()):i.error("暂未适配，请反馈开发者："+globalThis.location.href);}},be=function(e,t,n,o,r,l,a){const u={text:e,type:"select",description:l,attributes:{},props:{},getValue(){return this.props[X].get(t,n)},callback(p){if(p==null)return;const h=p.value;if(i.info(`选择：${p.text}`),typeof r=="function"&&r(p))return;this.props[X].set(t,h);},data:o};return Reflect.set(u.attributes,se,t),Reflect.set(u.attributes,le,n),Se.initComponentsStorageApi("select",u,{get(p,h){return s.getValue(p,h)},set(p,h){s.setValue(p,h);}}),u},he=function(e,t,n,o,r,l,a,u,p,h){const f={text:e,type:"slider",description:u,attributes:{},props:{},getValue(){return this.props[X].get(t,n)},getToolTipContent(g){return typeof a=="function"?a(g):`${g}`},callback(g,m){this.props[X].set(t,m);},min:o,max:r,step:p};return Reflect.set(f.attributes,se,t),Reflect.set(f.attributes,le,n),Se.initComponentsStorageApi("slider",f,{get(g,m){return s.getValue(g,m)},set(g,m){s.setValue(g,m);}}),f},Se={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new Ce.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,X,t);}},c=function(e,t,n,o,r,l,a,u,p){const h={text:e,type:"switch",description:r,disabled:a,attributes:{},props:{},getValue(){return this.props[X].get(t,n)},callback(f,g){const m=!!g;if(i.success(`${m?"开启":"关闭"} ${e}`),typeof o=="function"&&o(f,m))return;this.props[X].set(t,m);},afterAddToUListCallBack:(...f)=>{}};return Reflect.set(h.attributes,se,t),Reflect.set(h.attributes,le,n),Se.initComponentsStorageApi("switch",h,{get(f,g){return s.getValue(f,g)},set(f,g){s.setValue(f,g);}}),h},Et={id:"m-panel-blog",title:"博客",isDefault(){return V.isBlog()},views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[c("允许复制","m-csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[c("【屏蔽】广告","m-csdn-blog-removeAds",true,void 0,"包括：登录弹窗、打开APP、ios版本提示等"),c("【屏蔽】顶部工具栏","m-csdn-blog-blockTopToolbar",false),c("【屏蔽】评论区","m-csdn-blog-blockComment",false),c("【屏蔽】底部文章","m-csdn-blog-blockBottomArticle",false),c("【屏蔽】底部工具栏","m-csdn-blog-blockBottomToolbar",false),c("【屏蔽】底部的AI伴读","m-csdn-blog-blockBottomAskAIToolbar",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[c("允许选择内容","m-csdn-blog-allowSelectText",true,void 0,"解除文字选中限制"),c("自动展开","m-csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开，包括：内容、代码块"),c("不限制代码块的最大高度","m-csdn-blog-notLimitCodePreMaxHeight",false,void 0,"让代码块的高度直接被撑开")]}]},{text:"评论",type:"deepMenu",views:[{text:"",type:"container",views:[c("不限制评论区的最大高度","m-csdn-blog-notLimitCommentMaxHeight",true,void 0,"让评论区高度直接被撑开")]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[c("重构","m-csdn-blog-refactoringRecommendation",true,void 0,"文章的样式统一"),c("移除资源下载的文章","m-csdn-blog-removeResourceArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"),c("新标签页打开","m-csdn-blog-openNewTab",true,void 0,"新标签页打开文章")]}]},{type:"deepMenu",text:"底部工具栏",views:[{type:"container",text:"",views:[c("常驻底部","m-csdn-blog-bottom-toolbar-always-bottom",false,void 0,"开启后底部工具栏不随下滑滚动而隐藏"),c("优化收藏按钮","m-csdn-blog-bottom-toolbar-optimizationCollectButton",false,void 0,"可以自行选择收藏夹")]}]}]}]},At={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[be("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{i.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),be("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),c("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Dt={id:"m-panel-download",title:"资源",isDefault(){return V.isDownload()},views:[{text:"功能",type:"container",views:[c("自动展开资源介绍","m-csdn-download-automaticallyExpandResourceIntroduction",true,void 0,"屏蔽资源介绍【展开全部】按钮并展开资源介绍")]},{text:"布局屏蔽",type:"container",views:[c("【屏蔽】广告","m-csdn-download-removeAds",true,void 0,"包括：登录弹窗、会员降价等")]}]},$t={id:"m-panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return V.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[c("自动展开全文","m-csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"布局屏蔽",type:"container",views:[c("【屏蔽】底部加入社区","m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",true)]}]},Vt={id:"m-panel-link",title:"链接",isDefault(){return V.isLink()},views:[{text:"功能",type:"container",views:[c("重定向链接","m-csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Lt={id:"panel-so",title:"搜索",isDefault(){return V.isSo()},views:[{text:"C知道-功能",type:"container",views:[c("去除水印","m-csdn-so-cknow-removeMaskCover",true)]}]},Ot={id:"m-panel-wenku",title:"文库",isDefault(){return V.isWenKu()},views:[{text:"布局屏蔽",type:"container",views:[c("【屏蔽】底部工具栏","m-csdn-wenku-shieldBottomToolbar",false)]}]},It={id:"panel-blog",title:"博客",isDefault(){return V.isBlog()},views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[c("拦截-复制的小尾巴","csdn-blog-removeClipboardHijacking",true),c("劫持-禁止复制","csdn-blog-unBlockCopy",true,void 0,"允许点击复制按钮进行复制")]}]}]},{type:"container",text:"文章",views:[{text:"布局屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[c("【屏蔽】登录弹窗","csdn-blog-shieldLoginDialog",true),c("【屏蔽】顶部工具栏","csdn-blog-shieldTopToolbar",false),c("【屏蔽】左侧博客信息","csdn-blog-shieldLeftBlogContainerAside",false),c("【屏蔽】右侧目录信息","csdn-blog-shieldRightDirectoryInformation",false),c("【屏蔽】评论区","csdn-blog-blockComment",false),c("【屏蔽】底部文章","csdn-blog-blockBottomRecommendArticle",false),c("【屏蔽】底部的悬浮工具栏","csdn-blog-shieldBottomFloatingToolbar",false),c("【屏蔽】底部的AI伴读","csdn-blog-blockBottomAskAIToolbar",false),c("【屏蔽】runner-box","csdn-blog-blockRunnerBox",true)]}]},{text:"右侧悬浮工具栏",type:"deepMenu",views:[{text:"功能",type:"container",views:[c("【添加按钮】前往评论","csdn-blog-addGotoRecommandButton",true,void 0,"在悬浮工具栏最后面添加")]},{text:"坐标偏移",type:"container",views:[c("启用","csdn-blog-coverRightToolOffSet",false),he("top偏移","csdn-blog-rightToolbarTopOffset",140,0,Math.max(document.documentElement.clientHeight/2,400),void 0,e=>`当前：${e}px，默认：140px`),he("right偏移","csdn-blog-rightToolbarRightOffset",90,0,Math.max(document.documentElement.clientWidth/2,400),void 0,e=>`当前：${e}px，默认：90px`)]},{text:"屏蔽",type:"container",views:[c("【屏蔽】右侧工具栏","csdn-blog-rightToolbarEnable",false),c("【屏蔽】创作中心","csdn-blog-rightToolbarCreativeCenter",false),c("【屏蔽】显示/隐藏侧栏","csdn-blog-rightToolbarShowOrSidebar",false),c("【屏蔽】新手引导","csdn-blog-rightToolbarBeginnerGuidance",false),c("【屏蔽】客服","csdn-blog-rightToolbarCustomerService",false),c("【屏蔽】举报","csdn-blog-rightToolbarReport",false),c("【屏蔽】返回顶部","csdn-blog-rightToolbarBackToTop",false)]}]},{text:"右侧悬浮工具栏（AI助读版）",type:"deepMenu",views:[{text:"坐标偏移",type:"container",views:[c("启用","csdn-blog-ai-coverRightToolOffSet",false),he("top偏移","csdn-blog-ai-coverRightToolOffSet-top",48,0,Math.max(document.documentElement.clientHeight/2,400),void 0,e=>`当前：${e}px，默认：48px`),he("right偏移","csdn-blog-ai-coverRightToolOffSet-right",150,0,Math.max(document.documentElement.clientWidth/2,400),void 0,e=>`当前：${e}px，默认：150px`)]},{text:"屏蔽",type:"container",views:[c("【屏蔽】右侧工具栏","csdn-blog-ai-blockRightToolbar",false),c("【屏蔽】目录","csdn-blog-ai-blockRightToolbarCatalogue",false),c("【屏蔽】点赞","csdn-blog-ai-blockRightToolbarLike",false),c("【屏蔽】评论","csdn-blog-ai-blockRightToolbarComment",false),c("【屏蔽】收藏","csdn-blog-ai-blockRightToolbarCollect",false),c("【屏蔽】分享","csdn-blog-ai-blockRightToolbarShare",false),c("【屏蔽】...","csdn-blog-ai-blockRightToolbarMore",false)]}]},{text:"内容",type:"deepMenu",views:[{text:"功能",type:"container",views:[c("点击代码块自动展开","csdn-blog-clickPreCodeAutomatically",true,void 0,"当鼠标点击代码块区域时，将自动展开内容"),c("自动展开代码块","csdn-blog-autoExpandCodeContent",true,void 0,"懒人操作，免手动点击展开"),c("自动展开内容","csdn-blog-autoExpandContent",true,void 0,"懒人操作，免手动点击展开"),c("全文居中","csdn-blog-articleCenter",true,void 0,"自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"),c("允许选择内容","csdn-blog-allowSelectContent",true,void 0,"解除文字选中限制")]},{text:"屏蔽",type:"container",views:[c("【屏蔽】底部xx技能树","csdn-blog-shieldBottomSkillTree",false),c("【屏蔽】选中文字悬浮栏","csdn-blog-shieldArticleSearchTip",false,void 0,"选中文字弹出的，例如：搜索、评论、笔记"),c("【屏蔽】gitcode链接卡片","csdn-blog-blockGitCodeLinkCard",false)]}]},{text:"评论区",type:"deepMenu",views:[{text:"",type:"container",views:[c("优化评论区的位置","csdn-blog-restoreComments",true)]}]},{text:"底部文章",type:"deepMenu",views:[{text:"",type:"container",views:[c("标识CSDN下载","csdn-blog-identityCSDNDownload",true,void 0,"使用红框标识"),c("移除资源下载的文章","csdn-blog-removeResourceDownloadArticle",false,void 0,"download.csdn.net<br>www.iteye.com<br>edu.csdn.net")]}]}]}]},Nt={id:"component-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[be("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{i.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),be("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),c("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Pt={id:"panel-hua-wei-cloud",title:"华为云开发者联盟",isDefault(){return V.isHuaWeiCloudBlog()},views:[{text:"功能",type:"container",views:[c("自动展开全文","csdn-hua-wei-cloud-autoExpandContent",true)]},{text:"布局屏蔽",type:"container",views:[c("【屏蔽】云开发者任务挑战活动","csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",true),c("【屏蔽】左侧悬浮按钮","csdn-hua-wei-cloud-shieldLeftFloatingButton",false,function(e,t){t&&alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");}),c("【屏蔽】右侧栏","csdn-hua-wei-cloud-blockRightColumn",false,function(e,t){t&&alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");}),c("【屏蔽】底部推荐内容","csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",false),c("【屏蔽】底部更多推荐","csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",false)]}]},Wt={id:"panel-link",title:"链接",isDefault(){return V.isLink()},views:[{text:"功能",type:"container",views:[c("重定向链接","csdn-link-jumpRedirect",true,void 0,"自动跳转至被拦截的Url链接")]}]},Ut={id:"panel-so",title:"搜索",isDefault(){return V.isSo()},views:[{text:"C知道-功能",type:"container",views:[c("去除水印","csdn-so-cknow-removeMaskCover",true)]}]},Ft={id:"panel-wenku",title:"资源",isDefault(){return V.isLink()},views:[{text:"布局屏蔽",type:"container",views:[c("【屏蔽】资源推荐","csdn-wenku-shieldResourceRecommend",false),c("【屏蔽】右侧用户信息","csdn-wenku-shieldRightUserInfo",false),c("【屏蔽】右侧悬浮工具栏","csdn-wenku-shieldRightToolBar",false)]}]};_e.deleteMenuOption(0);_e.addMenuOption([{key:"show_pops_panel_setting",text:"⚙ PC端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{s.showPanel(ee.getConfig(0));}},{key:"m_show_pops_panel_setting",text:"⚙ 移动端端设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{s.showPanel(ee.getConfig(1));}},{key:"gotoCSDNCKnow",text:"⚙ 前往C知道",isStoreValue:false,autoReload:false,showText(e){return e},callback(){window.open("https://so.csdn.net/chat","_blank");}}]);ee.addContentConfig([Nt,It,Wt,Pt,Ft,Ut]);ee.addContentConfig([At,Et,Vt,$t,Ot,Lt,Dt]);s.init();let Ie=y.isPhone(),ie="change_env_set",Q=ae(ie);De.add({key:ie,text:`⚙ 自动: ${Ie?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return Q==null?e:e+` 手动: ${Q==1?"移动端":Q==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){v.error("输入的不是规范的数字");return}if(!e.includes(n)){v.error("输入的值必须是0或1或2");return}n==0?re(ie):xe(ie,n);}});Q!=null?(i.info(`手动判定为${Q===1?"移动端":"PC端"}`),Q==1?Be.init():Q==2?Ee.init():(v.error("意外，手动判定的值不在范围内"),re(ie))):Ie?(i.info("自动判定为移动端"),Be.init()):(i.info("自动判定为PC端"),Ee.init());

})(Qmsg, DOMUtils, pops, Utils);