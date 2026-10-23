// ==UserScript==
// @name         SearchEnginePlus
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.10.23
// @author       WhiteSevs
// @description  搜索页面优化，包含以下搜索引擎：百度搜索、谷歌、Bing
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHPElEQVR4AeyaS3IcNwyGQUoHSJzsoyzkqpwi0kksLW0fwvYhbC/tnETOKVJlLTzZJ6McQB4GHzQ9w2aT3ezHJCVZXYLI5gMEfoDgo8fLN/48AvCNO4A8esCjBxwQgR/fX5/98PbzxZO316+fvP/8wYi8EuXUf/f+j5MDijDIevEpgGKm6LvrsAlyFZz7IE5eSXAXRuSVKKfeh+Mv37+7vgKk/wOMRQBAcFNClUYxQVmpf5zIGSD5LRh4hvxHz2wAsDaCmxILCA0fPANAAXYBlr0sJgOAlZ6oxWXI2i58FCjIGxfCpWgKBZFPImElhQcgvHoEU6PQZJHiSQAgFFbKSRBQTBXeuNuf1y9O3fr500ujl6ev/3759ONaU+jmxen5+sXTn72Tc1FQrF+OoZNXeNmhvGE0ALimqFBdWcMKC9+gmCr9z/NfitaN+/71/PRTA4iBkfMK9TIXjj8cAoRRAKA8rhkrYHm14FqtiYXtfeI/A0P5AGQ6PRjXh6OrpUGoBgC3R4hUN6yGBdPyOe8AuXFfz1MQRNyJ3xxfLAlCFQAEvK7bhxXKYzU5wMMUwqs6IOj0A4SlhhwEALS7AQ/l3eWhlI+VK4GAXHG72nzabhCAHNrezVfedoy6Jca7hpTJTQenQTFVZsp7LwAmmLpci7EGvLmWZ1kL2y0y3oUyNlZroP0L08HpuPsS0Rkpds6QmU8vAF6OXrX5h9XcgGeK6rIW8yW4Hm2OzuKyNE9gtA1VVBHUOMYvKhubLQJgjBNBJbjfxg6Qti8pGjTCp23T9418fSOtfYI7KfGTyqcIQHfuz7c+Mjnv8hskF54Z6DQqEFNBfV+30PsGwcuv+7fxuSIA6l5txgtYH/Fu5TYPgHqA08A2BILbyO/w2VHqpbuKukwWAIRwHFEjHht/+zF6nZxte1ZYxfOaMYdAsFjQmgYiyDtVoCwAx3J80mYYVuZ+7cLRbyaoBq6mI8spByWJInwNCOKkNQ3mxIEsAHqV0wIgiFtJ8rCOQ6ZUUld6Ta3fLKe2smRAgD/7hA6/jfszLpsTB/IA6HyMB9A1uDXvOBQFXcchX3lmN6AS68dj5ECAP/sE9g3Wf9vBJVNgWzwpyQLQxyl7KFLFYgFz/UvWj9umIOzqNNDFbp6uJCG4lsfu+lVk8gD48FPctwbxWMC4L3kDR0EiDzH3SXPkvbTmt2yfPjdX+RYGYDtoLtHBOvGAdhonikLUWB8evZTM+962IyrzHpAMFqOfW4ZsPLUw08Py0b8x1qebBcYoIFLG7s+mx92L1ATpbdPBJAtAycoNN46odmtjgoa9R2RAmGJ9lDX+ercoOgbjNWOThjRIu7CXgQYjKA9Asl0NmSCDJyDonXCRABEIY60fy2389W6RMeLybD7x2LjNUD4LgLlhtNQ4kTNTpsCtBIJvnSbD6o5vgcmYYgU5bl4KnHGbUj4LQK5xX5SnfQ4E0eWLOqgv8lNfS11DzAO2DEBy+Nk492xIyA4IUYfyIShqVJFtxxQNj5ldagWbXZMiAKlbDU2DHccEuKZ8yIOadn2pWT9xfxektUvt65+rKwJwN1+j4Ka9Oalp0vs3tIL0dh6oTK2v9p99Q1UEAFnSeYsXcEChrkREbwSL64N+Lrsrj0vH5XPW1xgz+4aqFwDzAtbiSFYOKCZMVJZmiQXNOk56o5/L0jZj3hmv633L3FD1AoCQ3Xs4EV/xiQqLc9Ynhc8ccnpT5HQpjnmk3hnXjckPAmAXIZ3A5k4QCsuMGWxKW47CLlGeWyTzzikMkz6DANDedmO6JSXfEEL5Ck9o2k9JuXfQeX7R7quurzvEdtn0tyoAYG8gRLtDykT35F4vRLK3NjL9gR/KA3KXizsZCsTdPuWSagBgkftEZeVBrhB47pSgPy7PLVBeeUbTNUZvo5YCYRQAxIO1fr9nDt6Jsv+PwHgDQGBBlNnX9udQBsXpL9H2ua8XqxE/0YEYc8x4Md9RADQdie6SxISmDiCwoNepgWDcEUCAAqEsRBlKowDKSElxXYb5qY0UxmNcxvQ63hQQJgHAoMQE7+ScTQ7vOUIwYeuqBCgQykJWXlJ6ywz+Bra+M570gKBNdHk+/jIWhMkAMCBL0Y1uchBUZ+bkSwl47SnYb42wOvz35SI1H2f8SE+YBUAjHIKuNTYYEOqy0lktmpY9qfZj1wifuZunMSAsAkCjlgGhazRKGBi4LKTKBRG97Q0rS/VdlFB4E/2cbkhxgrD1l+GnFoRFAYjFMjC2vwlkHt/oVFmrl9yQApISCqNU3G8oH9ztZa2H1YBwMACGFJlaD2DeucVAuHcAABzeNQ6E8u8L7yUA40FwxV+S3FsARJ8xnhB/3NGuu797DQBaVINQ+HZw7wGoBaG0iXoQAAyBwH6D1YN2KT0YAFCM6bDWvYZsN1+kXs8r7Deoz9GDAqBRkIMTmy9SQGnKc+mDBCCnaKnsEYASMt9K+b33gLmG+hcAAP//M3yY4QAAAAZJREFUAwDdAc6uB4kUMgAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://ipv6.baidu.com/*
// @match        *://www.baidu.com/*
// @match        *://www1.baidu.com/*
// @match        *://m.baidu.com/*
// @match        *://*.google.com/**
// @match        *://*.google.com.hk/*
// @match        *://s.cn.bing.net/**
// @match        *://www.bing.com/**
// @match        *://cn.bing.com/**
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.15.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.12/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.3/dist/index.umd.min.js
// @connect      www.baidu.com
// @connect      cn.bing.com
// @connect      www.bing.com
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
// @grant        window.onurlchange
// @run-at       document-start
// ==/UserScript==

(function(e,t,n,r){"use strict";var i=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=s(t),c=0,u=i.length,d;c<u;c++)d=i[c],!l.call(e,d)&&d!==n&&a(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=o(t,d))||r.enumerable});return e},d=(e,t,n)=>(n=e==null?{}:i(c(e)),u(t||!e||!e.__esModule||!l.call(e,`default`)?a(n,`default`,{value:e,enumerable:!0}):n,e));e=d(e),t=d(t),n=d(n),r=d(r);var f=typeof GM_addValueChangeListener<`u`?GM_addValueChangeListener:void 0,p=typeof GM_deleteValue<`u`?GM_deleteValue:void 0,m=typeof GM_getResourceText<`u`?GM_getResourceText:void 0,h=typeof GM_getValue<`u`?GM_getValue:void 0,g=typeof GM_info<`u`?GM_info:void 0,_=typeof GM_listValues<`u`?GM_listValues:void 0,ee=typeof GM_registerMenuCommand<`u`?GM_registerMenuCommand:void 0,te=typeof GM_removeValueChangeListener<`u`?GM_removeValueChangeListener:void 0,v=typeof GM_setValue<`u`?GM_setValue:void 0,ne=typeof GM_setValues<`u`?GM_setValues:void 0,re=typeof GM_unregisterMenuCommand<`u`?GM_unregisterMenuCommand:void 0,ie=typeof GM_xmlhttpRequest<`u`?GM_xmlhttpRequest:void 0,y=typeof unsafeWindow<`u`?unsafeWindow:void 0,ae=window,b={waitRemove(...t){t.forEach(t=>{typeof t==`string`&&e.default.waitNodeList(t).then(e=>{e.forEach(e=>e.remove())})})},createBlockCSSNode(...t){let n=[];if(t.length!==0&&(t.length!==1||typeof t[0]!=`string`||t[0].trim()!==``))return t.forEach(e=>{Array.isArray(e)?n=n.concat(e):n.push(e)}),e.default.createElement(`style`,{type:`text/css`,innerHTML:`${n.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&(e.length!==1||typeof e[0]!=`string`||e[0].trim()!==``)&&(e.forEach(e=>{Array.isArray(e)?t=t.concat(e):t.push(e)}),t=t.map(e=>e.trim()).filter(e=>e!==``),t.length))return z(`${t.join(`,
`)}{display: none !important;}`)},addBlockCSSWithEnd(...e){let t=b.addBlockCSS(...e);return t&&document.documentElement.appendChild(t),t},setGMResourceCSS(e){let t=typeof m==`function`?m(e.keyName):null;return typeof t==`string`&&t?z(t):b.loadStyleLink(e.url)},async loadStyleLink(t){let n=document.createElement(`link`);return n.rel=`stylesheet`,n.type=`text/css`,n.href=t,new Promise(t=>{e.default.onReady(()=>{document.head.appendChild(n),t(n)})})},async loadScript(e){let t=document.createElement(`script`);return t.src=e,new Promise(e=>{t.onload=()=>{e(null)},(document.head||document.documentElement).appendChild(t)})},fixUrl(e){return e=e.trim(),e.startsWith(`data:`)||e.match(/^http(s|):\/\//i)?e:e.startsWith(`//`)?(e.startsWith(`///`)||(e=window.location.protocol+e),e):(e.startsWith(`/`)||(e+=`/`),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith(`https://`)||!e.startsWith(`http://`))return e;try{let t=new URL(e);return t.protocol=`https:`,t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement(`style`);t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(e=>{e.classList.add(`pops-overflow-hidden-important`)}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(e=>{e.classList.remove(`pops-overflow-hidden-important`)}),t.remove()}}},async getClipboardText(){function e(e){navigator.clipboard.readText().then(t=>{e(t)}).catch(t=>{F.error(`读取剪贴板内容失败👉`,t),e(``)})}function t(t){navigator.permissions.query({name:`clipboard-read`}).then(()=>{e(t)}).catch(n=>{F.error(`申请剪贴板权限失败，尝试直接读取👉`,n.message??n.name??n.stack),e(t)})}function n(){return typeof navigator?.clipboard?.readText==`function`&&typeof navigator?.permissions?.query==`function`}return new Promise(e=>{n()?document.hasFocus()?t(e):window.addEventListener(`focus`,()=>{t(e)},{once:!0}):e(``)})},escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).replace(/©/g,`&copy;`).replace(/®/g,`&reg;`).replace(/™/g,`&trade;`).replace(/→/g,`&rarr;`).replace(/←/g,`&larr;`).replace(/↑/g,`&uarr;`).replace(/↓/g,`&darr;`).replace(/—/g,`&mdash;`).replace(/–/g,`&ndash;`).replace(/…/g,`&hellip;`).replace(/ /g,`&nbsp;`).replace(/\r\n/g,`<br>`).replace(/\r/g,`<br>`).replace(/\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`)},interval(e,t,n=5e3){let r,i=n-t,a=t,o=async n=>{let s=await e(n);typeof s==`boolean`&&s||n?M.workerClearTimeout(r):(a+=t,a>i?o(!0):r=M.workerSetTimeout(()=>{o(!1)},t))};o(!1)},findParentNode(t,n,r){if(r){let i=e.default.closest(t,r);if(i)return i.querySelector(n)}else return e.default.matches(t,n)?t:e.default.closest(t,n)},toStr(e,t=2){if(typeof e==`string`||e==null)return e;let n=`__undefined__placeholder__replaced__str__`+performance.now();return JSON.stringify(e,(e,t)=>t===void 0?n:t,t).replace(RegExp(`"${n}"`,`g`),`undefined`)},isVerticalScreen(){return!globalThis.screen.orientation.type.includes(`landscape`)},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){let e=typeof y==`object`&&y?y:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!=`number`&&(e=parseInt(e)),isNaN(e))return e.toString();let t=function(e){return e<10?`0${e}`:e};if(e<60)return`0:${t(e)}`;if(e>=60&&e<3600)return`${Math.floor(e/60)}:${t(e%60)}`;{let n=Math.floor(e/3600),r=Math.floor(e/60)%60,i=e%60;return`${n}:${t(r)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e==`number`&&e<0xe8d4a51000){let t=String(Date.now()).length-String(e).length;e*=10**t}let n=e,r=new Date(typeof e==`string`?e.replace(/-/g,`/`):e),i=new Date(t??Date.now()).getTime()-r.getTime(),a=Math.floor(i/864e5);if(a>0)n=a>7?M.formatTime(r.getTime()):a+`天前`;else{let e=i%864e5,t=Math.floor(e/36e5);if(t>0)n=t+`小时前`;else{let t=e%36e5,r=Math.floor(t/6e4);if(r>0)n=r+`分钟前`;else{let e=t%6e4;n=Math.round(e/1e3)+`秒前`}}}return n}},x=`GM_Panel`,oe=`data-init`,S=`data-key`,C=`data-default-value`,se=`data-init-more-value`,ce=`data-plugin-search-config`,w=`data-storage-api`,T={followBrowserSize:!1,get width(){return T.followBrowserSize?globalThis.outerWidth:globalThis.innerWidth},get height(){return T.followBrowserSize?globalThis.outerHeight:globalThis.innerHeight}},E={setting:{get width(){return T.width<550?`88vw`:T.width<700?`550px`:`700px`},get height(){return T.height<450?`70vh`:T.height<550?`450px`:`550px`}},settingMiddle:{get width(){return T.width<350?`88vw`:`350px`},get height(){return T.height<450?`88vh`:`450px`}},settingBig:{get width(){return T.width<800?`92vw`:`800px`},get height(){return T.height<600?`80vh`:`600px`}},info:{get width(){return T.width<350?`88vw`:`350px`},get height(){return T.height<250?`88vh`:`250px`}}},D={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig??=new M.Dictionary,this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e)},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(e){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=!1,n,i=(t,n)=>{if(e&&typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},a=(e,t)=>{typeof t!=`string`&&(t=b.toStr(t));let n=new Blob([t]),r=globalThis.URL.createObjectURL(n);N.createElement(`a`,{href:r,download:e}).click(),M.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(r)},500)},o=()=>{let e=e=>{let t=P.alert({title:{text:i(`请选择导入方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:E.info.width,height:E.info.height,style:`
          .pops{
            max-height: 90dvh;
          }
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
          }`}),n=t.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),a=t.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),o=t.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),s=async t=>{confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`))&&(typeof _==`function`?typeof p==`function`?(_().forEach(e=>{p(e)}),r.default.success(i(`已清空脚本存储的配置`))):r.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`)):r.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),typeof ne==`function`?ne(t):Object.keys(t).forEach(e=>{let n=t[e];v(e,n)}),r.default.success(i(`配置导入完毕`)),e?.()},c=e=>new Promise(async t=>{let n=M.toJSON(e);Object.keys(n).length===0?r.default.warning(i(`解析为空配置，不导入`)):await s(n),t(!0)});N.on(n,`click`,e=>{N.preventEvent(e),t.close();let n=N.createElement(`input`,{type:`file`,accept:`.json`});N.on(n,[`propertychange`,`input`],()=>{if(!n.files?.length)return;let e=n.files[0],t=new FileReader;t.onload=()=>{c(t.result)},t.readAsText(e,`UTF-8`)}),n.click()}),N.on(a,`click`,e=>{N.preventEvent(e),t.close();let n=P.prompt({title:{text:i(`网络导入`),position:`center`},content:{text:``,placeholder:i(`请填写URL`),focus:!0},btn:{close:{enable:!0,callback(e){e.close()}},ok:{text:i(`导入`),callback:async e=>{let t=e.text;if(M.isNull(t)){r.default.error(i(`请填入完整的url`));return}let n=r.default.loading(i(`正在获取配置...`)),a=await R.get(t,{allowInterceptConfig:!1});n.close(),a.status?await c(a.data.responseText)&&e.close():(F.error(a),r.default.error(i(`获取配置失败`),{consoleLogContent:!0}))}},cancel:{enable:!1}},drag:!0,mask:{enable:!0},width:E.info.width,height:`auto`,style:`
            .pops{
              max-height: 90dvh;
            }
            `}),a=n.$shadowRoot.querySelector(`input`),o=n.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);N.on(a,[`input`,`propertychange`],()=>{N.val(a)===``?N.attr(o,`disabled`,`true`):N.removeAttr(o,`disabled`)}),N.onKeyboard(a,`keydown`,(e,t,n)=>{e===`Enter`&&n.length===0&&N.val(a)!==``&&N.emit(o,`click`)}),N.emit(a,`input`)}),N.on(o,`click`,async e=>{N.preventEvent(e),t.close();let n=await b.getClipboardText();n.trim()===``?r.default.warning(i(`获取到的剪贴板内容为空`)):await c(n)})},t=(e=`${I}_panel-setting-${M.formatTime(Date.now(),`yyyy_MM_dd_HH_mm_ss`)}.json`,t)=>{let n=P.alert({title:{text:i(`请选择导出方式`),position:`center`},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,html:!0},btn:{ok:{enable:!1},close:{enable:!0,callback(e){e.close()}}},drag:!0,mask:{enable:!0},width:E.info.width,height:E.info.height,style:`
          .pops{
            max-height: 90dvh;
          }
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
          }`}),o=n.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),s=n.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);N.on(o,`click`,i=>{N.preventEvent(i);try{a(e,t),n.close()}catch(e){r.default.error(e.toString(),{consoleLogContent:!0})}}),N.on(s,`click`,async()=>{await M.copy(t)?(r.default.success(i(`复制成功`)),n.close()):r.default.error(i(`复制失败`))})},n=P.confirm({title:{text:i(`配置`),position:`center`},content:{text:`<textarea name="config-value" id="config" readonly></textarea>`,html:!0},btn:{ok:{enable:!0,type:`primary`,text:i(`导入`),callback(){e()}},cancel:{enable:!0,text:i(`导出`),callback(){t(void 0,s)}}},width:T.width<450?`90vw`:`450px`,height:`auto`,style:`
          .pops{
            max-height: 90dvh;
          }
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
        `}).$shadowRoot.querySelector(`textarea`),o={};if(typeof _==`function`)_().forEach(e=>{let t=h(e);Reflect.set(o,e,t)});else{r.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));let e=h(x);Reflect.set(o,x,e)}let s=b.toStr(o);n.value=s},s=()=>{let e=g?.script?.supportURL||g?.script?.namespace;typeof e==`string`&&M.isNotNull(e)&&window.open(e,`_blank`)};return[{id:`script-version`,title:i(`版本：{{version}}`,{version:g?.script?.version||i(`未知`)}),isBottom:!0,views:[],clickFirstCallback(){return!1},afterRender(e){new ue(e.$asideLiElement).on(`tap`,function(){clearTimeout(n),n=void 0,t?(t=!1,o()):(n=setTimeout(()=>{t=!1,s()},200),t=!0)})}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e}},le={$data:{__menuOption:[{key:`show_pops_panel_setting`,text:`⚙ 设置`,autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{A.showPanel(D.getConfig(0))}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu()},initExtensionsMenu(){b.isTopWindow()&&de.add(this.$data.menuOption)},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e)},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=this.$data.menuOption.findIndex(t=>t.key===e.key);t!==-1&&(this.$data.menuOption[t]=e)})},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1)}},O=class{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e}handlerResult(e,t){let n=[],r=[],i=[];if(Array.isArray(t))i=i.concat(t);else{let e=t=>{if(typeof t==`object`&&t){if(t instanceof Element)i.push(t);else if(Array.isArray(t))e(t);else{let{$css:e,destory:n}=t;e!=null&&(Array.isArray(e)?i=i.concat(e):e instanceof Element&&i.push(e)),typeof n==`function`&&i.push(n)}}else i.push(t)};e(t)}let a=e=>{e!=null&&(e instanceof Element?n.push(e):typeof e==`function`&&r.push(e))};for(let e of i){let t=a(e);if(typeof t==`boolean`&&!t)break;if(Array.isArray(e))for(let t of e){let e=a(t);if(typeof e==`boolean`&&!e)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(n),this.data.destoryFnList=this.data.destoryFnList.concat(r))}getEnableStatus(e){return!!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1)};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){let t=this.data.destoryFnList[e];t(),this.data.destoryFnList.splice(e,1)}};checkMenuExec(){let e=!1;return e=typeof this.option.checkExec==`function`?this.option.checkExec(this.option.keyList):this.option.keyList.every(e=>this.getEnableStatus(e)),e}},k=new class{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e==`string`){let t=e.trim();if(t==``)throw Error(`key can not be empty string`);this.storageKey=t}else throw TypeError(`key must be a string`);this.listenerData=new n.default.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this)}[Symbol.dispose](){this.destory()}async[Symbol.asyncDispose](){this.destory()}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){let t=this.callbacks[e];t(),this.callbacks.splice(e,1)}}getLocalValue(){if(this.cacheData==null){let e=h(this.storageKey);e??(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;let t=f(this.storageKey,(e,t,n)=>{this.cacheData=null,this.cacheData=n});return this.callbacks.push(()=>{te(t)}),e}return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,v(this.storageKey,e)}set(e,t){let n=this.get(e),r=this.getLocalValue();Reflect.set(r,e,t),this.setLocalValue(r),this.emitValueChangeListener(e,t,n)}get(e,t){let n=this.getLocalValue();return Reflect.get(n,e)??t}getAll(){return this.getLocalValue()}delete(e){let t=this.get(e),n=this.getLocalValue();Reflect.deleteProperty(n,e),this.setLocalValue(n),this.emitValueChangeListener(e,void 0,t)}has(e){let t=this.getLocalValue();return Reflect.has(t,e)}keys(){let e=this.getLocalValue();return Reflect.ownKeys(e)}values(){let e=this.getLocalValue();return Reflect.ownKeys(e).map(t=>Reflect.get(e,t))}clear(){this.destory(),p(this.storageKey)}addValueChangeListener(e,t){let n=Math.random(),r=this.listenerData.get(e)||[];return r.push({id:n,key:e,callback:t}),this.listenerData.set(e,r),n}removeValueChangeListener(e){let t=!1;for(let[n,r]of this.listenerData.entries()){for(let n=0;n<r.length;n++){let i=r[n];(typeof e==`string`&&i.key===e||typeof e==`number`&&i.id===e)&&(r.splice(n,1),n--,t=!0)}this.listenerData.set(n,r)}return t}async emitValueChangeListener(...e){let[t,n,r]=e;if(!this.listenerData.has(t))return;let i=this.listenerData.get(t);for(let a=0;a<i.length;a++){let o=i[a];if(typeof o.callback==`function`){let i,a;e.length===1||(e.length===2?i=n:e.length===3&&(i=n,a=r)),await o.callback(t,i,a)}}}}(x),A={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue??=new M.Dictionary,this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData??=new M.Dictionary,this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce??=new M.Dictionary,this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData??=new M.Dictionary,this.__onceExecData},get scriptName(){return I},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e},key:x,attributeKeyName:S,attributeDefaultValueName:C},init(){this.initContentDefaultValue(),le.init()},initContentDefaultValue(){let e=e=>{if(!e.attributes||e.type===`button`||e.type===`container`||e.type===`deepMenu`)return;let t=e.attributes,n=t[oe];if(typeof n==`function`){let e=n();if(typeof e==`boolean`&&!e)return}let r=new Map,i=t[S];if(i!=null){let e=t[C];r.set(i,e)}let a=t[se];if(typeof a==`object`&&a&&Object.keys(a).forEach(e=>{let t=a[e];r.set(e,t)}),!r.size)F.warn(`请先配置键`,e);else{if(e.type===`switch`){let t=typeof e.disabled==`function`?e.disabled():e.disabled;typeof t==`boolean`&&t&&this.$data.contentConfigInitDisabledKeys.push(...r.keys())}for(let[e,t]of r.entries())this.setDefaultValue(e,t)}},t=n=>{for(let r=0;r<n.length;r++){let i=n[r];e(i);let a=i.views;a&&Array.isArray(a)&&t(a)}},n=[...D.getAllContentConfig()];for(let e=0;e<n.length;e++){let r=n[e];if(!r.views)continue;let i=r.views;i&&Array.isArray(i)&&t(i)}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)]},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&F.warn(`该key的默认值已进行初始化，覆盖该默认值: `,{key:e,defaultValue:t,coverDefaultValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t)},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){k.set(e,t)},getValue(e,t){return k.get(e)??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){k.delete(e)},hasKey(e){return k.has(e)},addValueChangeListener(e,t,n){let r=k.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){let r=this.getValue(e);n?.immediate?t(e,r,r):n?.immediateAll&&A.emitMenuValueChange(e,r,r)}return r},removeValueChangeListener(e){k.removeValueChangeListener(e)},emitMenuValueChange(e,t,n){k.emitValueChangeListener(e,t,n)},async exec(e,t,n,r=!0){let i;i=typeof e==`string`||Array.isArray(e)?()=>e:e;let a=!1,o=i(),s=[];Array.isArray(o)?(a=!0,s=o):s.push(o);let c=s.find(e=>!this.$data.contentConfigInitDefaultValue.has(e));if(c){F.warn(`${c} 键不存在`);return}let l=JSON.stringify(s);if(r&&this.$data.onceExecMenuData.has(l))return this.$data.onceExecMenuData.get(l);let u=[],d=new O({keyList:s,getValue:e=>!!this.getValue(e),checkExec(e){let t=!1;return t=typeof n==`function`?n(e):e.every(e=>this.getValue(e)),t}}),f=async e=>{let n=d.checkMenuExec(),r=[];if(n){let i=s.map(e=>this.getValue(e));r=await t({key:s,triggerKey:e?.key,value:a?i:i[0],addStoreValue:(...e)=>d.handlerResult(n,e)})}d.handlerResult(n,r)};r&&s.forEach(e=>{let t=this.addValueChangeListener(e,(e,t,n)=>f({key:e,newValue:t,oldValue:n}));u.push(t)}),await f();let p={checkMenuExec:d.checkMenuExec.bind(d),keyList:s,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),f()},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData()},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{u.forEach(e=>{this.removeValueChangeListener(e)})},clearOnceExecMenuData(){r&&A.$data.onceExecMenuData.delete(l)}};return this.$data.onceExecMenuData.set(l,p),p},async execMenu(e,t,n=!1,r=!1){return await this.exec(e,async(...e)=>await t(...e),e=>e.every(e=>{let t=!!this.getValue(e);return A.$data.contentConfigInitDisabledKeys.includes(e)&&(t=!1,F.warn(`.execMenu${r?`Once`:``} ${e} 被禁用`)),n&&(t=!t),t}),r)},async execMenuOnce(e,t,n=!1,r=!1){let i=await this.execMenu(e,t,n,!0);return r&&i&&(this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,()=>{i.reload()})),i},async execMoreMenu(e,t,n=!1,r=!1,i=!1){let a=await Promise.all(e.map(async([e,t])=>await this.execMenu(e,(...e)=>t(...e),n,r))),o=new O({keyList:e.map(([e])=>e),getValue:e=>!!this.getValue(e)}),s=[],c=(e=!1)=>{if(o.clearStoreNodeList(),o.execDestoryFnAndClear(),e){for(let e of s)this.removeValueChangeListener(e);for(let e of a)e&&this.removeUrlChangeWithExecMenuOnceListener(e.keyList)}},l=()=>{let e=a.every(e=>!e||e.checkMenuExec());if(c(!1),e){let n=t();o.handlerResult(e,n)}};l();for(let e of a)if(e){let t=this.addValueChangeListener(e.keyList[0],()=>{l()});s.push(t),i&&(this.removeUrlChangeWithExecMenuOnceListener(e.keyList),this.addUrlChangeWithExecMenuOnceListener(e.keyList,()=>{e.reload()}))}return{clear(){for(let e of a)e?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener()},execDestoryFnAndClear(){for(let e of a)e?.execDestoryFnAndClear();c(!1)},removeValueChangeListener(){for(let e of a)e?.removeValueChangeListener();c(!0)}}},async execMoreMenuOnce(e,t,n=!1,r=!1){return await this.execMoreMenu(e,t,n,!0,r)},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),k.removeValueChangeListener(e)},onceExec(e,t,n=!1){if(e=this.transformKey(e),typeof e!=`string`)throw TypeError(`key 必须是字符串`);this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(e=>{if(!A.getValue(e))return!0})!==-1||(t(),this.$data.onceExecData.set(e,1))},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e)},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e)},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){let t=this.$data.urlChangeReloadMenuExecOnce.values();for(let n of t)await n(e)},showPanel(e,t=`${I}-设置`,n=!1,r=!1){this.$data.$panel=null,this.$data.panelContent=[];let i=e.findIndex(e=>(typeof e.isBottom==`function`?e.isBottom():!!e.isBottom)&&e.id===`script-version`)!==-1;!n&&!i&&e.push(...D.getDefaultBottomContentConfig());let a=P.panel({title:{text:t,position:`center`,html:!1,style:``},content:e,btn:{close:{enable:!0,callback:e=>{e.close(),this.$data.$panel=null}}},mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1},clickCallBack:e=>{e(),this.$data.$panel=null}},width:E.setting.width,height:E.setting.height,drag:!0,only:!0,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=a,this.$data.panelContent=e,r||this.registerConfigSearch({$panel:a,content:e}),{$panel:a,content:e}},registerConfigSearch(e){let{$panel:t,content:n}=e,i=(t,n)=>{if(typeof e.translateCallback==`function`)return e.translateCallback(t,n);if(typeof n==`object`&&n)for(let e in n)t=t.replaceAll(`{{${e}}}`,n[e]);return t},a=async(e,t)=>{if(e==null)return;let n=await t(e);return n&&typeof n.isFind==`boolean`&&n.isFind?n.data:await a(n.data,t)},o=(e,t)=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t?.(),n.disconnect())})},{root:null,threshold:1});n.observe(e),e.scrollIntoView({behavior:`smooth`,block:`center`})},s=e=>{let t=`pops-flashing`;N.onAnimationend(e,()=>{e.classList.remove(t)}),e.classList.add(t)},c=c=>{if(c.type===`dblclick`&&f)return;N.preventEvent(c);let l=P.alert({title:{text:i(`搜索配置`),position:`center`},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:!0},btn:{ok:{enable:!1}},mask:{clickEvent:{toClose:!0}},width:E.settingMiddle.width,height:`auto`,drag:!0,style:`
					${P.config.cssText.panelCSS}

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
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle??``}
				`}),u=l.$shadowRoot.querySelector(`.search-config-text`),d=l.$shadowRoot.querySelector(`.search-result-wrapper`);u.focus();let p=()=>{N.empty(d)},m=e=>{let n=M.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}),c=N.createElement(`div`,{className:`search-result-item`,innerHTML:`
							<div class="search-result-item-path">${n.matchedData?.path}</div>
							<div class="search-result-item-description">${n.matchedData?.description??``}</div>
						`}),l=P.fn.PanelHandlerComponents();return N.on(c,`click`,()=>{let n=t.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[e.index];n?(n.scrollIntoView({behavior:`smooth`,block:`center`}),n.click(),a(e.next,async e=>{if(e?.next){let n=await N.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find(t=>{let n=Reflect.get(t,l.$data.nodeStoreConfigKey);return typeof n==`object`&&!!n&&n.text===e.name}),2500);if(n)n.click();else return r.default.error(i(`未找到对应的二级菜单`)),{isFind:!0,data:e};return{isFind:!1,data:e.next}}{let n=await N.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(t=>Reflect.get(t,l.$data.nodeStoreConfigKey)===e.matchedData?.formConfig),2500);if(n){o(n);let e=n.closest(`.pops-panel-forms-fold[data-fold-enable]`);e&&(e.querySelector(`.pops-panel-forms-fold-container`).click(),await M.sleep(500)),o(n,()=>{s(n)})}else r.default.error(i(`未找到对应的菜单项`));return{isFind:!0,data:e}}})):r.default.error(i(`左侧项下标{{index}}不存在`,{index:e.index}))}),c},h=e=>{let t=new RegExp(e,`i`),r=[],i=(e,n)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.views;if(s&&Array.isArray(s)){let e=M.deepClone(n);if(o.type===`deepMenu`){let t=M.queryProperty(e,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});t.next={name:o.text}}i(s,e)}else{let e,i;if(o.type===`own`){let t=Reflect.get(o.attributes||{},ce);t&&(typeof t==`function`&&(t=t()),typeof t.text==`string`&&(e=t.text),typeof t.desc==`string`&&(i=t.desc))}else e=o.text,i=Reflect.get(o,`description`);let a=[e,i],s=a.findIndex(e=>{if(typeof e==`string`)return e.match(t)});if(s!==-1){let t=M.deepClone(n),c=M.queryProperty(t,e=>e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e});c.next={name:e,matchedData:{path:``,formConfig:o,matchedText:a[s],description:i}};let l=[];M.queryProperty(t,e=>{let t=e?.name;return typeof t==`string`&&t.trim()!==``&&l.push(t),e?.next?{isFind:!1,data:e.next}:{isFind:!0,data:e}});let u=l.join(b.escapeHtml(` - `));c.next.matchedData.path=u,r.push(t)}}}};for(let e=0;e<n.length;e++){let t=n[e];if(!t.views||t.isBottom&&t.id===`script-version`)continue;let r=t.views;if(r&&Array.isArray(r)){let n=t.title;typeof n==`function`&&(n=n()),i(r,{index:e,name:n})}}let a=document.createDocumentFragment();for(let e of r){let t=m(e);a.appendChild(t)}p(),d.append(a)};N.on(u,`input`,M.debounce(e=>{N.preventEvent(e);let t=N.val(u).trim();t===``?p():h(t)},200))};t.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`).forEach(e=>{N.on(e,`dblclick`,c)});let l=new WeakMap,u=!1,d,f=!1;N.on(t.$shadowRoot,`touchend`,`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,(e,t)=>{f=!0,clearTimeout(d),d=void 0,u&&l.has(t)?(u=!1,l.delete(t),c(e)):(d=setTimeout(()=>{u=!1},200),u=!0,l.set(t,e))},{capture:!0}),t.$shadowRoot.appendChild(N.createElement(`style`,{type:`text/css`,textContent:`
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
    		`}))},transformKey(e){if(Array.isArray(e)){if(e.length>1){let t=e.sort();return JSON.stringify(t)}return e[0]}return e},getDynamicValue(e,t){let n=!1,r=t,i=this.addValueChangeListener(e,(e,t)=>{r=t});return{get value(){return n||(n=!0,r=A.getValue(e,t)),r},destory(){A.removeValueChangeListener(i)}}}},j={qmsg_config_position:{key:`qmsg-config-position`,defaultValue:`bottom`},qmsg_config_maxnums:{key:`qmsg-config-maxnums`,defaultValue:3},qmsg_config_showreverse:{key:`qmsg-config-showreverse`,defaultValue:!1},httpx_cookie_manager_enable:{key:`httpx-use-cookie-enable`,defaultValue:!1},httpx_cookie_manager_use_document_cookie:{key:`httpx-use-document-cookie`,defaultValue:!1}},M=n.default.noConflict(),N=e.default.noConflict(),P=t.default,F=new M.Log(g,y.console||ae.console),I=g?.script?.name||void 0,ue=t.default.fn.Utils.AnyTouch();F.config({debug:!1,logMaxCount:250,autoClearConsole:!0,tag:!0});var L=()=>{let e=t.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=M.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,n)};r.default.config({isHTML:!0,autoClose:!0,showClose:!1,isTextWrap:!0,consoleLogContent(e){let t=e.setting.type;if(t===`loading`)return!1;let n=e.setting.content;return t===`warning`?F.warn(n):t===`error`?F.error(n):F.info(n),!1},get position(){return A.getValue(j.qmsg_config_position.key,j.qmsg_config_position.defaultValue)},get maxNums(){return A.getValue(j.qmsg_config_maxnums.key,j.qmsg_config_maxnums.defaultValue)},get showReverse(){return A.getValue(j.qmsg_config_showreverse.key,j.qmsg_config_showreverse.defaultValue)},get zIndex(){return L()}}),P.GlobalConfig.setGlobalConfig({zIndex:()=>L(),mask:{enable:!0,clickEvent:{toClose:!1,toHide:!1}},drag:!0});var de=new M.GM_Menu({GM_getValue:h,GM_setValue:v,GM_registerMenuCommand:ee,GM_unregisterMenuCommand:re}),R=new M.Httpx({xmlHttpRequest:ie,isConsoleRequestOption:!1});R.interceptors.request.use(e=>e),R.interceptors.response.use(e=>e,e=>(F.error(`[Httpx-HttpxRequest.response] 响应错误`,{data:e}),e.type===`onabort`?r.default.warning(`请求取消`,{consoleLogContent:!0}):e.type===`onerror`?r.default.error(`请求异常`,{consoleLogContent:!0}):e.type===`ontimeout`?r.default.error(`请求超时`,{consoleLogContent:!0}):r.default.error(`其它错误`,{consoleLogContent:!0}),e)),y.Object.defineProperty,y.Object.keys,y.Object.values,y.Function.prototype.apply,y.Function.prototype.call,y.Element.prototype.appendChild,y.setTimeout.bind(y),y.clearTimeout.bind(y),y.setInterval.bind(y),y.clearInterval.bind(y);var z=N.addStyle.bind(N),B=e=>{let t=z(e);return document.documentElement.appendChild(t),t},V=b.addBlockCSS.bind(b),H=b.addBlockCSSWithEnd.bind(b);e.default.selector.bind(e.default);var U=e.default.selectorAll.bind(e.default),W=new M.CookieManagerService({baseCookieHandler:`GM_cookie`});W.isSupportGM_cookie||(W.isSupportCookieStore?W.setOptions({baseCookieHandler:`cookieStore`}):W.setOptions({baseCookieHandler:`document.cookie`})),new M.DocumentCookieHandler;var fe={api:`https://cn.bing.com/HPImageArchive.aspx`,imgOrigin:`https://cn.bing.com`,get params(){return{format:`js`,idx:0,n:8,mkt:`zh-CN`}},async getTodayImgUrlInfos(){let e=await R.get(this.api,{data:{...this.params},fetch:!1,allowInterceptConfig:!1,headers:{Referer:`https://www.bing.com/`,Origin:`https://www.bing.com`,"Content-Type":`application/json`}});if(!e.status)return;let t=M.toJSON(e.data.responseText);if(!Array.isArray(t.images)||t.images.length===0){F.error(`获取背景图片失败`,e,t);return}let n=t.images.map(e=>{let t;if(typeof e.urlbase==`string`?t=this.imgOrigin+e.urlbase+`_UHD.jpg`:typeof e.url==`string`&&(t=this.imgOrigin+e.url,t=t.replace(`_1920x1080.jpg`,`_UHD.jpg`)),t)return{uhd:t,"1080p":t.replace(`_UHD.jpg`,`_1920x1080.jpg`),"720p":t.replace(`_UHD.jpg`,`_1280x720.jpg`)}}).filter(e=>e!=null);if(n.length)return n},async getTodayRandomImgUrlInfo(){let e=await this.getTodayImgUrlInfos();if(Array.isArray(e)&&e.length!==0)return e[Math.floor(Math.random()*e.length)]}},G=`https://api.paugram.com/bing`,K=h(`wallpaper-today-url`);K&&M.formatTime(K.time,`yyyy-MM-dd`)===M.formatTime(Date.now(),`yyyy-MM-dd`)?(G=K.url,F.info(`今日壁纸url已获取，使用该url作为壁纸：`+G)):fe.getTodayImgUrlInfos().then(e=>{e&&e.length&&(G=e[0].uhd,v(`wallpaper-today-url`,{url:e[0].uhd,time:Date.now()}))});var pe=class e{__href__;get __href(){return this.__href__||globalThis.location.href}__origin={value:void 0,type:`same`};__protocol={value:void 0,type:`same`};__host={value:void 0,type:`same`,hasPort:!1};__pathname={value:void 0,type:`same`};__searchParams={value:new Set};__hash={value:void 0,type:`same`};otherInstResultWithOr=!1;constructor(e){typeof e==`string`&&this.href(e)}href(e){return this.__href__=e,this}origin(e){return this.__origin={value:e,type:`same`},this}originStartsWith(e){return this.__origin={value:e,type:`startsWith`},this}originEndsWith(e){return this.__origin={value:e,type:`endsWith`},this}originIncludes(e){return this.__origin={value:e,type:`includes`},this}originMatch(e){return this.__origin={value:e,type:`match`},this}protocol(e){return this.__protocol={value:e,type:`same`},this}protocolStartsWith(e){return this.__protocol={value:e,type:`startsWith`},this}protocolEndsWith(e){return this.__protocol={value:e,type:`endsWith`},this}protocolIncludes(e){return this.__protocol={value:e,type:`includes`},this}protocolMatch(e){return this.__protocol={value:e,type:`match`},this}host(e){return this.__host={value:e,type:`same`,hasPort:!0},this}hostStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!0},this}hostEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!0},this}hostIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!0},this}hostMatch(e){return this.__host={value:e,type:`match`,hasPort:!0},this}hostName(e){return this.__host={value:e,type:`same`,hasPort:!1},this}hostNameStartsWith(e){return this.__host={value:e,type:`startsWith`,hasPort:!1},this}hostNameEndsWith(e){return this.__host={value:e,type:`endsWith`,hasPort:!1},this}hostNameIncludes(e){return this.__host={value:e,type:`includes`,hasPort:!1},this}hostNameMatch(e){return this.__host={value:e,type:`match`,hasPort:!1},this}pathname(e){return this.__pathname={value:e,type:`same`},this}pathnameStartsWith(e){return this.__pathname={value:e,type:`startsWith`},this}pathnameEndsWith(e){return this.__pathname={value:e,type:`endsWith`},this}pathnameIncludes(e){return this.__pathname={value:e,type:`includes`},this}pathnameMatch(e){return this.__pathname={value:e,type:`match`},this}searchParams(e,t){return this.__searchParams.value.add({name:e,value:t}),this}search(e){return this.__searchParams.value.add({name:``,value:e,type:`same`}),this}searchStartsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`startsWith`}),this}searchEndsWith(e){return this.__searchParams.value.add({name:``,value:e,type:`endsWith`}),this}searchIncludes(e){return this.__searchParams.value.add({name:``,value:e,type:`includes`}),this}searchMatch(e){return this.__searchParams.value.add({name:``,value:e,type:`match`}),this}hash(e){return this.__hash={value:e,type:`same`},this}hashStartsWith(e){return this.__hash={value:e,type:`startsWith`},this}hashEndsWith(e){return this.__hash={value:e,type:`endsWith`},this}hashIncludes(e){this.__hash={value:e,type:`includes`}}hashMatch(e){return this.__hash={value:e,type:`match`},this}build(){if(!this.__host.value)throw TypeError(`host or hostName should be required`);let e=`${this.__protocol.value||`https`}://${this.__host.value}${this.__pathname.value||`/`}`.trim();if(this.__searchParams.value.size>0){let t=[];this.__searchParams.value.forEach(e=>{if(typeof e.name==`string`){let n=``;(typeof e.value==`string`||typeof e.value==`number`||typeof e.value==`boolean`)&&(n=e.value.toString()),t.push(`${encodeURIComponent(e.name)}=${encodeURIComponent(n)}`)}}),e.endsWith(`?`)||(e+=`?`),t.length&&(e+=t.join(`&`))}if(typeof this.__hash.value==`string`){let t=this.__hash.value.trim();!e.endsWith(`#`)&&!t.startsWith(`#`)&&(e+=`#`),e+=t}return e}or(t){this.otherInstResultWithOr=this.otherInstResultWithOr||this.r();let n=new e(t);return n.otherInstResultWithOr=this.otherInstResultWithOr,n}r(){if(this.otherInstResultWithOr)return this.otherInstResultWithOr;let e=new URL(this.__href),t=(t,n)=>{let r=typeof n==`function`?n():n;if(r.value){let n=e[t];if(typeof n!=`string`)return!1;if(r.type===`same`){if(typeof r.value==`string`)return n===r.value.toString();throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`startsWith`){if(typeof r.value==`string`)return n.startsWith(r.value.toString());throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`endsWith`){if(typeof r.value==`string`)return n.endsWith(r.value.toString());throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`includes`){if(typeof r.value==`string`)return n.includes(r.value.toString());throw TypeError(`${t} value should be string by type ${r.type}`)}if(r.type===`match`){if(r.value instanceof RegExp)return r.value.test(n);if(typeof r.value==`string`||typeof r.value==`number`||typeof r.value==`boolean`)return n.match(r.value.toString());throw TypeError(`${t} value should be RegExp or string by type ${r.type}`)}throw TypeError(`${t} type should be same,startsWith,endsWith,includes,match`)}return!0};return[()=>t(`origin`,this.__origin),()=>t(`protocol`,this.__protocol),()=>t(this.__host.hasPort?`host`:`hostname`,this.__host),()=>t(`pathname`,this.__pathname),()=>{let t=!0,n=[];this.__searchParams.value.forEach(e=>{n.push(e)});for(let r=0;r<n.length;r++){let i=n[r];if(i.type){if(i.type===`same`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search===i.value.toString();throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`startsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.startsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`endsWith`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.endsWith(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`includes`){if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.includes(i.value.toString());throw TypeError(`search value should be string、number、boolean by type `+i.type)}if(i.type===`match`){if(i.value instanceof RegExp)return i.value.test(e.search);if(typeof i.value==`string`||typeof i.value==`number`||typeof i.value==`boolean`)return e.search.match(i.value.toString());throw TypeError(`search value should be RegExp、string、number、boolean by type `+i.type)}throw TypeError(`search type should be same, startsWith, endsWith, includes, match`)}if(typeof i.name==`string`){let n=i.value;if(n==null||typeof n==`string`||typeof n==`number`||typeof n==`boolean`){if(n=n?.toString(),!e.searchParams.has(i.name,n)){t=!1;break}}else if(n instanceof RegExp){let r=e.searchParams.get(i.name);if(r){if(!n.test(r)){t=!1;break}}else{t=!1;break}}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}else if(i.name instanceof RegExp){let n,r;if(e.searchParams.forEach((e,t)=>{!n&&t.match(i.name)&&(n=t,r=e)}),n){let e=i.value;if(e!=null){if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`){if(e=e.toString(),t=e===r,!t)break}else if(e instanceof RegExp){if(r){if(!e.test(r)){t=!1;break}}else{t=!1;break}}else throw TypeError(`searchParams value should be string, RegExp, boolean, number, null, undefined`)}}else{t=!1;break}}else throw TypeError(`searchParams name should be string or RegExp`)}return t},()=>t(`hash`,this.__hash)].every(e=>e())}},q={host(e,t){return q.builder(t).host(e)},hostName(e,t){return q.builder(t).hostName(e)},search(e,t){return q.builder(t).search(e)},seachParams(e,t,n){return q.builder(n).searchParams(e,t)},pathname(e,t){return q.builder(t).pathname(e)},protocol(e,t){return q.builder(t).protocol(e)},hash(e,t){return q.builder(t).hash(e)},builder(e){return new pe(e)}},J={isBaidu(){return q.builder().hostNameMatch(/^(ipv6|www|www1|m).baidu.com$/).r()},isBaiduHome(){return this.isBaidu()&&q.builder().pathname(`/`).r()},isBaiduSearch(){return this.isBaidu()&&q.builder().pathname(`/s`).r()},isGoogle(){return q.builder().hostNameIncludes(`google.com`).r()},isGoogleHome(){return this.isGoogle()&&q.builder().pathname(`/`).or().pathname(`/webhp`).r()},isGoogleSearch(){return this.isGoogle()&&q.builder().pathname(`/search`).r()},isBing(){return q.builder().hostNameMatch(/.*.bing.(com|net)$/).r()},isBingSearch(){return this.isBing()&&q.builder().pathname(`/search`).r()}},me=class{queue;runningCount;concurrency;intervalTime;constructor(e=1,t=300){this.queue=[],this.concurrency=e,this.intervalTime=t,this.runningCount=0}enqueue(e){this.queue.push(e),this.runNext()}async runNext(){for(;this.runningCount<this.concurrency&&this.queue.length>0;){this.runningCount++;let e=this.queue.shift();try{await e(),this.intervalTime>0&&await new Promise(e=>setTimeout(e,this.intervalTime))}catch(e){console.error(e)}finally{this.runningCount--,this.runNext()}}}},he={init(){A.execMenuOnce([`baidu-search-optimizationResult-enable`,`baidu-search-optimizationResult-redirect`,`baidu-search-optimizationResult-addFavicon`,`baidu-search-optimizationResult-markUnsafeLink`],e=>{let[t,n,r,i]=e.value;if(t&&(n||r||i))return this.searchResultOptimization({removeAds:!!A.getValue(`baidu-search-removeAds`),redirect:n,addFavicon:r,markUnsafeLink:i})})},searchResultOptimization(e){F.info(`搜索结果优化`,e);let t=new me(1,150),n=e=>{try{let t=new URL(e);if(t.hostname===`www.baidu.com`&&t.pathname===`/link`&&t.searchParams.has(`url`))return!0}catch{}return!1},r=new M.LockFunction(()=>{U(`#content_left > div:not([data-stop-direct])`).forEach(async r=>{if(e.removeAds&&N.selector(`.se_st_footer:contains("广告")`,r)){r.remove();return}let i=r.querySelector(`a.sc-link[href]`)||r.querySelector(`.c-title a[href]`)||r.querySelector(`a.cosc-title-a[href]`)||r.querySelector(`[class*="c-line-"] > a[href][class^="title_"]`)||r.querySelector(`h3.c-gap-bottom-small > a[href]`);if(!i){r.setAttribute(`data-no-title`,`1`);return}let a=r.getAttribute(`mu`),o=[];typeof a==`string`&&o.push(a);let s=r.querySelector(`.cosc-feedback[data-feedback]`)?.getAttribute(`data-feedback`);if(s){let e=M.toJSON(s);typeof e.url==`string`&&o.push(e.url)}let c=!1,l=o.find(e=>{try{let t=new URL(e);if(t.hostname===`nourl.ubs.baidu.com`||t.hostname.endsWith(`.lightapp.baidu.com`))return;if(t.hostname===`agents.baidu.com`){c=!0;return}if(n(e))return}catch{}return e}),u=i.href?.trim();if(!l){let e=`data-direct-http-request-ing`;if(i.hasAttribute(e))return;if(n(u)||c){let r=`data-request-final-url`;if(i.hasAttribute(r))l=i.getAttribute(r);else{i.setAttribute(e,`true`),t.enqueue(async()=>{let t=await R.get(u.replace(/^http:\/\//,`https://`),{fetch:!1,allowInterceptConfig:!1});if(i.removeAttribute(e),!t.status)return;let a=t.data.finalUrl;if(n(a)){let e=t.data.responseText.match(/.location.replace\("(.+?)"\)/)?.[1];e&&!n(e)&&(a=e)}else i.setAttribute(r,a)});return}}else return}if(r.setAttribute(`data-stop-direct`,`true`),e.redirect&&n(u)&&(i.href=l,i.setAttribute(`data-before-url`,u),r.setAttribute(`data-before-url`,u)),e.addFavicon){let e=N.createElement(`img`);e.className=`website-ico`,e.loading=`lazy`;try{let t=new URL(l);t.protocol=`https:`,e.src=`${t.origin}/favicon.ico`,t.hostname.endsWith(`.baidu.com`)||(e.crossOrigin=`anonymous`),N.prepend(i,e),N.css(i,{display:`flex`,"align-items":`center`}),N.on(e,`error`,()=>{e.remove()},{once:!0})}catch{}}e.markUnsafeLink&&i.href.startsWith(`http://`)&&!i.href.includes(`baidu.com/`)&&(N.prepend(i,`
                <svg class="extra-gm-icon" viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="margin-right: 4px;float: left;"><path d="M1079.847385 767.133538l-389.513847-690.845538c-62.621538-101.651692-215.197538-101.769846-277.858461 0l-389.513846 690.806154c-64 103.896615 13.469538 235.441231 138.870154 235.441231H940.898462c125.282462 0 202.909538-131.426462 138.909538-235.401847zM551.384615 877.843692c-35.603692 0-64.590769-27.963077-64.590769-62.345846 0-34.343385 28.987077-62.306462 64.590769-62.306461 35.603692 0 64.590769 27.963077 64.59077 62.306461 0 34.382769-28.987077 62.345846-64.59077 62.345846z m64.59077-249.304615c0 34.343385-28.987077 62.306462-64.59077 62.306461-35.603692 0-64.590769-27.963077-64.590769-62.345846V316.849231c0-34.382769 28.987077-62.345846 64.590769-62.345846 35.603692 0 64.590769 27.963077 64.59077 62.345846v311.650461z" fill="#ED4662" p-id="6187"></path></svg>
              `),N.css(i,{color:`#ecb3b3 !important`,"text-decoration":`line-through !important`}))})}),i=M.mutationObserver(document,{config:{subtree:!0,childList:!0,attributes:!0},immediate:!0,callback:()=>{r.run()}});return[B(`
          img.website-ico{
            width: 1em;
            height: 1em;
            object-fit: contain;
            margin-right: 4px;
            float: left;
          }
          #content_left a.sc-link:has(img.website-ico){
            display: inline-flex !important;
          }
        `),()=>{i.disconnect()},e.removeAds?H(`#content_left > div:has(.ec-tuiguang)`,`#content_left > div:has(.c-recomm-wrap)`):null]}},ge={init(){A.execMenuOnce(`baidu-search-removeAds`,()=>this.removeAds()),A.execMenuOnce(`baidu-search-removeRightPanel`,()=>this.removeRightPanel()),A.execMenuOnce(`baidu-search-removeEveryOneSearch`,()=>this.removeEveryOneSearch()),A.execMenuOnce(`baidu-search-removeRelatedSearch`,()=>this.removeRelatedSearch()),A.execMenuOnce(`baidu-search-removeSelectTextDialog`,()=>this.removeSelectTextDialog()),A.execMenuOnce([`baidu-search-showOptimization-enable`,`baidu-search-showOptimization-mode`],e=>{let[t,n]=e.value;if(t&&!M.isNull(n))return this.searchResultShowOptimization(n)}),A.execMenuOnce([`baidu-search-ownBackgroundImage-enable`,`baidu-search-ownBackgroundImage-url`,`baidu-search-ownBackgroundImage-opacity`],e=>{let[t,n,r]=e.value;if(t&&!M.isNull(n)&&r)return this.ownBackgroundImage({enable:t,url:n,opacity:r})}),he.init()},removeAds(){return F.info(`移除广告`),H(`#top-ad`,`#content_left .result-op[tpl="uer_feedback"]`)},removeRightPanel(){return F.info(`移除右侧栏`),H(`#content_right`)},removeEveryOneSearch(){return F.info(`移除大家都在搜`),H(`.result-op[tpl="recommend_list"]`)},removeRelatedSearch(){return F.info(`移除相关搜索`),H(`.result-molecule:has(#rs_new)`)},removeSelectTextDialog(){return F.info(`移除选中文本弹窗`),H(`#wrapper_wrapper > .selected-search-box`)},searchResultShowOptimization(e){F.info(`搜索结果显示优化: `+e);let t=(e,t)=>`
        #container #content_left{
        & > .c-container,
        & > .new-pmd,
        & > .c-group-wrapper{
          ${e}
        }

        ${t||``}
      }
      `,n=[B(t(``,`
          /* AI回答结果变成滚动条形式 */
          & .cosc-card-content [class^="fold-content_"]{
            min-height: unset !important;
            overflow: auto !important;
          }
          /* 隐藏展开按钮 */
          & .cosc-card-content [class^="wenda-general-fold-switch_"]{
            display: none !important;
          }
          /* 百度百科内容不换行 */
          & .c-row[class*="card-normal_"]{
            display: inline-flex;
          }
      `)),B(`
        #wrapper #head{
            background: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none;
            backdrop-filter: blur(10px);
        }
      `)],r=t(`
      & a.cosc-title-a,
      & .c-title a[href],
      & [class*="_sc-title"] a.sc-link,
      & [class*="c-line-"]:has(> a[href][class^="title_"]) {
          position: relative;

          &,
          & span,
          & p.sc-paragraph{
              text-decoration: none !important;
          }
          /* 如果插入了图标，要保持图标和标题垂直居中 */
          &:has(>img.website-ico),
          &:has(>svg){
            line-height: 1;
            float: inline-end;
            
            & span{
              display: inline-flex;
            }
          }
          &:hover:after {
              left: 0;
              width: 100%;
              transition: width 350ms;
          }

          &:after {
              content: "";
              position: absolute;
              border-bottom: 2px solid #3476d2;
              bottom: 0px;
              left: 100%;
              width: 0;
              transition: width 350ms, left 350ms;
              left: 0;
          }
      }
    `),i=`
      #container{
          margin: 0px auto !important;
          width: auto !important;
      }
      #container #content_left{
          width:  100% !important;
          margin: unset;
          justify-self: center;
          float: unset;
      }
      ${t(`
        &{
          width: 100%;
        }
        /* 内容宽度适配 */
        & .c-row .c-span-last[class*="content_"]{
          width: auto;
          float: unset;
        }
      `)}
      /* 顶部输入框居中 */
      .head_wrapper .s_form,
      .input-head-wrapper [class^="head-left_"]{
        width: unset;
        padding: unset;
        justify-self: center;
        margin: 0 auto;
      }
      #s_tab_inner{
        padding: 0 !important;
        justify-self: center;
      }
      #image-search-header [class^="input-container-"]{
        margin: 0 auto !important;
      }

      #header_top_bar{
        margin: 0 auto;
      }
      /* 顶部的搜索结果涉及价格仅作参考，请以商家官网为准 */
      #content_left > div:first-child:not(:has(*)) {
        text-align: center;
      }
      /* 抱歉，未找到相关结果 */
      #container .content_none{
        float: unset;
        margin: 0 auto;
      }
      /* 页码居中 */
      #page [class^="page-inner"]{
        width: min-content !important;
        padding-left: 0px !important;
        margin: 0 auto;
      }
      /* 底部 */
      #foot .foot-inner{
        width: unset !important;
        justify-self: center !important;
      }
      #foot .foot-inner #help{
        margin: 0 !important;
      }

      `,a=t(`
        &{
          padding: 15px 20px;
          margin: 0 0 30px 0;
          border-radius: 8px;
          background: #fff;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        /* AI总结卡片 样式移除 */
        & [class*="card-border"]{
          border: none;
          border-radius: 0px;
        }
        & [class*="card-border"] [class^="baikan-card-header"]{
          background: none;
        }
        /* 标题背景色 */
        & a.sc-link[href],
        & .c-title a[href],
        & [class*="title-box_"],
        & [class*="c-line-"]:has(> a[href][class^="title_"]),
        & [class*="title-container_"]:has(>.cosc-title a.cosc-title-a){
            background: #f8f8f8;
            width: 100%;
            max-width: unset;
            margin: 0px -20px;
            padding: 5px 20px;
        }
        /* 标题宽度适配（撑满） */
        & [class*="c-line-"] > a[href][class^="title_"],
        & [class*="title-container_"] >.cosc-title a.cosc-title-a{
          width: 100%;
          max-width: unset;
          display: inline-flex !important;
        }
        /* 标题容器高度适配 */
        & [class*="title-wrapper"] {
          &{
            margin-bottom: 8px;
          }
          & [class*="title-box"],
          & [class*="title-box"] h3.cosc-title{
            margin-bottom: 0px;
            padding-bottom: 0px;
          }
        }

        /* 标题移除省略号 */
        & .c-title a,
        & a.cosc-title-a{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
        }
    `,`
      /* 您要找的是不是 xxx */
      .result-molecule.hit-toptip > .c-gap-bottom-large{
        margin-bottom: 0px;
      }
      /* 没有找到该URL。您可以直接访问 xxx */
      .result-molecule > .hit_top_new.res-border-bottom{
        &,
        & [class*="gap-bottom-small"]{
          margin-bottom: 0px;
          border: 0px;
        }
      }
      /* 顶部的百度AI 大型卡片容器 */
      .c-group-wrapper{
        margin: 0px 0px 30px 0px !important;

        & > .c-container,
        & > .new-pmd{
          padding: 0px !important;
          width: 100% !important;
        }
      }
    `),o=t(`
       & .c-row[class*="source_"]:has(a),
       & .cos-row [class*="source-pc_"]{
          position: relative;
        }
      `,`
      &{
        display: grid;
        grid-gap: 0 20px;
        grid-template-columns: repeat(2, 48%);
        grid-template-areas: "xmain xmain";
        margin: 0 auto;
        position: relative;
        padding-left: 2%;
        float: unset;
        width: 90%;
        max-width: 1400px;
        margin-bottom: 30px;
      }
    `);return n.push(B(a),B(r)),e===`single-center`?n.push(B(i),B(`
        #container #content_left{
          & > div:not(:empty)[class]{
            width: 55%;
            justify-self: center;
          }
        }
      `)):e===`double-column-center`?n.push(B(o),B(i),H(`
        #container #content_left{
          &>div:not(:empty){
            max-width: 100%;
          }
        }
        `)):e===`three-column-center`?n.push(B(o),B(i),B(`
        #container #content_left{
          grid-template-columns: repeat(3, 33.3%);
          grid-template-areas: "xmain xmain xmain";
          &>div:not(:empty){
            max-width: 100%;
          }
        }
      `)):e===`four-column-center`?n.push(B(o),B(i),B(`
        #container #content_left{
          grid-template-columns: repeat(4, 25%);
          grid-template-areas: "xmain xmain xmain xmain";
          &>div:not(:empty){
            max-width: 100%;
          }
        }
      `)):F.error(`不支持的搜索结果显示模式: `+e),n},ownBackgroundImage:e=>(F.info(`自定义背景图`),B(`
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${e.url.trim()}");
        background-size: 100% auto;
        opacity: ${e.opacity??.8};
      }
    `))},_e={init(){A.execMenuOnce(`baidu-search-home-simplifyTheHomepage`,()=>this.simplifyTheHomepage())},simplifyTheHomepage(){return F.info(`精简首页`),H(`#chat-input-extension`,`#s-hotsearch-wrapper`)}},ve={init(){J.isBaiduSearch()?(F.info(`百度 - 搜索`),ge.init()):J.isBaiduHome()&&(F.info(`百度 - 首页`),_e.init())}},ye={init(){A.execMenuOnce(`bing-search-removeAds`,()=>this.removeAds()),A.execMenuOnce(`bing-search-removeSelectTextDialog`,()=>this.removeSelectTextDialog()),A.execMenuOnce(`bing-search-removeInputPrediction`,()=>this.removeInputPrediction()),A.execMenuOnce(`bing-search-removeInputHistory`,()=>this.removeInputHistory()),A.execMenuOnce(`bing-search-removeInputHistory-relatedToRecentSearches`,()=>this.removeInputHistoryAndRelatedToRecentSearches()),A.execMenuOnce(`bing-search-removeRightMoreSearchResult`,()=>this.removeRightMoreSearchResult()),A.execMenuOnce(`bing-search-removeCopilotSearch`,()=>this.removeCopilotSearch()),A.execMenuOnce(`bing-search-removeBottomFloatingToolbar`,()=>this.removeBottomFloatingToolbar()),A.execMenuOnce(`bing-search-removeOtherUserSearch`,()=>this.removeOtherUserSearch()),A.execMenuOnce(`bing-search-removeTopLeftAreaSwtich`,()=>this.removeTopLeftAreaSwtich()),A.execMenuOnce(`bing-search-removeTopRightAccountSetting`,()=>this.removeTopRightAccountSetting()),A.execMenuOnce(`bing-search-removeAboutAnyResultsTip`,()=>this.removeAboutAnyResultsTip()),A.execMenuOnce(`bing-search-removeBottomPartOfSearchResultTip`,()=>this.removeBottomPartOfSearchResultTip()),A.execMenuOnce(`bing-search-removeBottomRightCopyright`,()=>this.removeBottomRightCopyright()),A.execMenuOnce([`bing-search-showOptimization-enable`,`bing-search-showOptimization-mode`],e=>{let[t,n]=e.value;if(t&&!M.isNull(n))return this.searchResultShowOptimization(n)}),A.execMenuOnce([`bing-search-ownBackgroundImage-enable`,`bing-search-ownBackgroundImage-url`,`bing-search-ownBackgroundImage-opacity`],e=>{let[t,n,r]=e.value;if(t&&!M.isNull(n)&&r)return this.ownBackgroundImage({enable:t,url:n,opacity:r})}),A.execMenuOnce(`bing-search-removeResultYouMayLikeSearch`,()=>this.removeResultYouMayLikeSearch()),A.execMenuOnce(`bing-search-removeResultRelatedSearch`,()=>this.removeResultRelatedSearch())},removeAds(){return H(`#b_bnp_bopc`,`#b_topw:has(.b_ad)`,`#b_results .b_ad`,`#b_results .b_algo:has(.jrwmcyhr)`,`.b_vfly_c`,`#b_results .b_mop:has(.b_mrwu_c)`,`#b_content #b_pole`)},removeSelectTextDialog(){return F.info(`移除选中文本的弹窗`),H(`#qs_searchBoxOuter[role="dialog"]`)},removeInputPrediction(){return F.info(`移除输入预测`),B(`
    #b_header{
      & #sa_ul ~ * {
          display: none !important;
      }

      & #sa_ul {
          width: 100% !important;
      }

      & #sb_form {
          max-width: 600px;
          white-space: nowrap;
          & input.b_searchbox {
              width: 500px;
          }
      }
    }
    `)},removeInputHistory(){return F.info(`移除输入历史记录`),H(`#b_header #sa_ul #sa_hs_block`,`#sw_as #sa_ul:has(#sa_hs_block):not(:has(#sa_sug_block))`)},removeInputHistoryAndRelatedToRecentSearches(){return F.info(`移除输入历史记录 - 与最近的搜索相关`),H(`#b_header #sa_ul #sa_sse_block`)},removeRightMoreSearchResult(){return F.info(`移除右侧更多搜索结果`),H(`#b_content aside`)},removeCopilotSearch(){return F.info(`移除Copilot Search`),H(`#b_content .b_ans:has(.cht_container)`,`#b_content .b_ans:has(.answer_container[aria-label*="Copilot 搜索"])`)},removeResultRelatedSearch(){return F.info(`移除「相关搜索」`),H(`.b_inline_ajax_rs:has([aria-label*="相关搜索"])`)},removeResultYouMayLikeSearch(){return F.info(`移除「你可能喜欢的搜索」`),H(`.b_ans:has(#brsv3)`)},removeBottomFloatingToolbar(){return F.info(`移除底部悬浮的工具栏`),H(`#b_bop_cs_sb_place`)},removeOtherUserSearch(){return F.info(`移除「其他用户还搜索过/其他用户还问了以下问题」`),H(`#b_results .b_ans:has(a[aria-label*="还搜索"])`,`#b_results .b_algo:has(a[aria-label*="还搜索"])`,`#b_results .b_ans:has(#df_listaa)`,`#b_results .b_inline_ajax_rs:has(a[aria-label*="还搜索"])`)},removeTopLeftAreaSwtich(){return F.info(`移除左上角 国内版/国际版`),H(`#est_switch`)},removeTopRightAccountSetting(){return F.info(`移除右上角 帐户奖励和偏好设置`),H(`#id_h`)},removeAboutAnyResultsTip(){return F.info(`移除约xxx个结果`),H(`#b_tween`)},removeBottomPartOfSearchResultTip(){return F.info(`移除底部 部分搜索结果未予显示`),H(`#b_results li.b_msg:has(a[href*="microsoft.com/fwlink"])`)},removeBottomRightCopyright(){return F.info(`移除底部右下角 备案信息`),H(`#b_footer`)},searchResultShowOptimization(e){let t=[H(`
        header#b_header[style*="top"][role="banner"]{
            background: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none !important;
            backdrop-filter: blur(10px);
            top: 0px !important;
        }
        /* auto是在顶部，0是滚动到下面 */
        body:not([class*="b_pinhead"]) header#b_header[style*="top"][role="banner"]{
            position: relative;
            z-index: 50;
        }
      `)],n=`
      #b_content {
          & #b_results{
            display: grid;
            grid-template-columns: repeat(2, 48%);
            grid-gap: 0 20px;
            grid-template-areas: "xmain xmain";
            margin: 0 auto;
            position: relative;
            padding-left: 2%;
            float: unset;
            width: 90%;
            max-width: 1400px;
            margin-bottom: 30px;
          }
      }     
    `;return t.push(B(`
      #b_results,
      #b_mcw {
        & .b_ans,
        & .b_algo,
        & .b_ans.b_vidAns {
            padding: 15px 20px;
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 30px;
            border-radius: 8px;
            background: #fff;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

            /* 资讯 */
            & [id^="ACFContainer_"]{
              justify-content: center;
            }
        }
        & .b_ans,
        & .b_algo {
          & .b_vlist2col{
            justify-content: space-between;
          }
        }
        /* xxx的视频 */
        & .b_ans.b_vidAns:has(#serpvidans),
        /* xxx的图片 */
        & .b_ans.b_imgansacf{
            padding: 15px 20px !important;
        }
        /* 页码 */
        & .b_pag{
            justify-self: center;
        }
      }
      /* 顶部的特殊搜索结果卡片宽度溢出适配 */
      #b_mcw #b_wpt_container{
        width: 100% !important;
      }
      /* 搜索结果顶部的 包含xx结果 是否只需要 xxx 的结果 */
      /* 这个屏蔽好了，不好弄宽度 */
      #b_suptop .b_ans{
        display: none !important;
      }
    `),B(`
      #b_header {
          /* 输入框居中 */
          & #sb_form {
              display: block;
              justify-self: center;
              position: relative;


              /* 仅让输入框居中，左边的logo图标在里面会造成视觉上的不居中 */
              /* 这时候需要让logo移出文档流 */
              & .b_logoArea{
                left: 0;
                position: absolute;
                transform: translateX(-64px);
                margin-left: 0;
                margin-right: 0;
                vertical-align: unset;
                margin-top: 0px;
                place-self: center;
              }
          }

          /* 搜索结果类型居中 */
          & nav.b_scopebar {
              margin: 11px;
              justify-self: center;
          }
      }

      #b_content {
          padding: 0;

          /* 顶部某个网站的快捷功能 */
          & #b_pole{
            justify-items: center;
          }
          /* 约 xxx个结果 居中 */
          & #b_tween {
              text-align: center;
              padding: 0;
              margin: 10px;
          }
          /* 搜索结果居中 */
          & #b_results,
          & #b_mcw {
              display: block;
              justify-self: center;
              max-width: 1400px;
              width: auto;
              margin: 32px 0px 0px 0px !important;
          }
          /* 未登录的情况下 b_results会在 b_widemop_layout内，而b_widemop_layout会被设置为grid*/
          & .b_widemop_layout:has(#b_results){
            display: block !important;
          }
      }
    `)),e===`single-center`||(e===`double-column-center`?t.push(B(n)):e===`three-column-center`?t.push(B(n),H(`
        #b_content {
          & #b_results{
            grid-template-columns: repeat(3, 33.3%);
            grid-template-areas: "xmain xmain xmain";
          }
        }
      `)):e===`four-column-center`&&t.push(B(n),H(`
        #b_content {
          & #b_results{
            grid-template-columns: repeat(4, 25%);
            grid-template-areas: "xmain xmain xmain xmain";
          }
        }
      `))),t},ownBackgroundImage:e=>(F.info(`自定义背景图`),B(`
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${e.url.trim()}");
        background-size: 100% auto;
        opacity: ${e.opacity??.8};
      }
      #b_content{
        background: transparent;
      }
    `))},be={init(){J.isBingSearch()&&(F.info(`Bing - 搜索`),ye.init())}},xe={init(){A.execMenuOnce([`google-search-optimizationResult-enable`,`google-search-optimizationResult-openBlank`],e=>{let[t,n]=e.value;if(t&&n)return this.searchResultOptimization({openBlank:n})})},searchResultOptimization(e){F.info(`搜索结果优化`,e);let t=new M.LockFunction(()=>{let t=[...U(`#rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty):not([data-hijack])`),...U(`#rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)):not([data-hijack])`)];for(let n of t)e.openBlank&&n.querySelectorAll(`a[href]:not([target='blank_'])`).forEach(e=>{e.setAttribute(`target`,`_blank`)})}),n=M.mutationObserver(document,{config:{subtree:!0,childList:!0},immediate:!0,callback:()=>{t.run()}});return[()=>{n.disconnect()}]}},Se={init(){A.execMenuOnce(`google-search-removeAds`,()=>this.removeAds()),A.execMenuOnce(`google-search-removeAIOverview`,()=>this.removeAIOverview()),A.execMenuOnce(`google-search-removeRightPanel`,()=>this.removeRightPanel()),A.execMenuOnce(`google-search-removeRelatedSearch`,()=>this.removeRelatedSearch()),A.execMenuOnce(`google-search-removeQuestions`,()=>this.removeQuestions()),A.execMenuOnce([`google-search-showOptimization-enable`,`google-search-showOptimization-mode`],e=>{let[t,n]=e.value;if(t&&!M.isNull(n))return this.searchResultShowOptimization(n)}),A.execMenuOnce([`google-search-ownBackgroundImage-enable`,`google-search-ownBackgroundImage-url`,`google-search-ownBackgroundImage-opacity`],e=>{let[t,n,r]=e.value;if(t&&!M.isNull(n)&&r)return this.ownBackgroundImage({enable:t,url:n,opacity:r})}),xe.init()},removeAds(){return F.info(`移除广告`),V(`#bottomads`)},removeAIOverview(){return F.info(`移除AI概览`),V(`#rcnt > div:not([role='main']):not(:empty):has([data-mcpr])`)},removeRightPanel(){return F.info(`移除右侧栏`),V(`#rhs`)},removeRelatedSearch(){return F.info(`移除用户还搜索了`),V(`#botstuff`)},removeQuestions(){return F.info(`移除相关问题`),V(`#rso > div:not(:empty) > div:has(.related-question-pair)`)},searchResultShowOptimization(e){F.info(`搜索结果显示优化: `+e);let t=[V(`.kp-wholepage-osrp`),z(`
        div[style*="top"] #searchform {
            background: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none;
            backdrop-filter: blur(10px)
        }
      `)],n=`
      #rso:not(:has(>script)),
      #rso:has(>script)>div:not(:empty){
          display: grid;
          grid-template-columns: repeat(2, 48%);
          grid-gap: 0 20px;
          grid-template-areas: "xmain xmain";
          margin: 0 auto;
          position: relative;
          padding-left: 2%;
          float: unset;
          width: 90%;
          max-width: 1400px;
          margin-bottom: 30px;
      }
      /* 高度统一 */
      #rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty),
      #rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)){
          height: -webkit-fill-available;
      }
    `;return t.push(z(`
    #rcnt{
        display: flex !important;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
    [id^="center_"][role="main"]{
        display: flex;
        flex-direction: column;
        justify-self: center;
    }
    /* 隐藏空结果 */
    #rso:not(:has(>script)) > div:empty,
    #rso:not(:has(>script)) > div:not(:has([data-rpos])),
    #rso:has(>script)>div:not(:empty)>div:not(:has(>div)){
        display: none;
    }
    /* 顶部输入框居中 */
    #searchform{
        display: block;
        justify-items: center;

        >div{
            justify-content: center;
            /* logo的偏移↓ */
            margin-left: calc(160px + 92px + 24px + 44px);
        }

        textarea{
            min-width: 300px;
        }

        button[type="submit"]{
            margin-right: 2em;
        }
    }
    /* 顶部搜索结果选项导航栏居中 */
    [data-st-tgt="fb"] > div:not(:empty){
        display: block !important;
    }
    [data-st-tgt="fb"] > div:not(:empty) [role="navigation"]{
        justify-self: center;
    }
    [role="navigation"] [style*="overflow-x: auto"]{
        justify-self: center;
    }
    /* 小提示： 限制此搜索仅展示xxx搜索结果。 详细了解如何按语言过滤搜索结果 */
    [id^="center_"][role="main"] #taw{
        justify-items: center;
    }
    
      /* 显示更多 */
      .RDmXvc{
          margin: 0 !important;
          padding: 0 !important;
      }
      /* 展开的遮罩元素 */
      [aria-controls="m-x-content"][aria-expanded]{
          width: 100%;
          text-align: center;
      }
      /* 提问输入框 */
      .wPoHPd{
        margin: 0px !important;
        max-width: unset !important;
      }
      /* 内容 */
      .mZJni{
        max-width: unset !important;
      }
    `),z(`
        /* 搜索结果的样式和标题的悬浮样式 */
        #rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty),
        #rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)):not(:has(#bottomads)){
            width: 100% !important;
            padding: 15px 20px;
            margin-top: 0px;
            margin-bottom: 20px;
            border-radius: 5px;
            background: #fff;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;

            &:hover{
                border: 1px solid rgba(0, 0, 0, 0.3);
                box-shadow: 0 0 1px grey;
                -webkit-box-shadow: 0 0 1px grey;
                -moz-box-shadow: 0 0 1px gray;
            }
        }
    `),z(`
        #rso a,
        #rso a h3 {
            text-decoration: none !important;
        }

        #rso a h3 {
            &:hover:after{
                left: 0;
                width: 100%;
                transition: width 350ms;
            }
            &:after{
                content: "";
                position: absolute;
                border-bottom: 2px solid #3476d2;
                bottom: -3px;
                left: 100%;
                width: 0;
                transition: width 350ms, left 350ms;
            }
        }

    `)),e===`single-center`?t.push(z(`
        #rso{
            width: 55%;
            justify-self: center;
        }
      `)):e===`double-column-center`?t.push(z(n)):e===`three-column-center`?t.push(z(n),z(`
        #rso:not(:has(>script)),
        #rso:has(>script)>div:not(:empty){
            grid-template-columns: repeat(3, 33.3%);
            grid-template-areas: "xmain xmain xmain";
        }
      `)):e===`four-column-center`?t.push(z(n),z(`
        #rso:not(:has(>script)),
        #rso:has(>script)>div:not(:empty){
          grid-template-columns: repeat(4, 25%);
          grid-template-areas: "xmain xmain xmain xmain";
        }
      `)):F.error(`不支持的搜索结果显示模式: `+e),t},ownBackgroundImage:e=>(F.info(`自定义背景图`),z(`
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${e.url.trim()}");
        background-size: 100% auto;
        opacity: ${e.opacity??.8};
      }
    `))},Ce={init(){J.isGoogleSearch()&&(F.info(`Google - 搜索`),Se.init()),A.execMenuOnce(`google-search-imitateBaidu`,()=>this.imitateBaidu())},imitateBaidu(){F.info(`伪装百度`);let e=[];return N.waitNode(`link[rel='icon']`,1e4).then(e=>{e&&e.setAttribute(`href`,`https://www.baidu.com/favicon.ico`)}),J.isGoogleSearch()?e.push(z(`
        /* 输入框左边的logo替换 */
        a#logo[aria-label*="首页"][aria-label*="Google"]:has(>svg){
          width: 101px;
          height: 33px;
          background: url("data:image/png;base64,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");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        a#logo[aria-label*="首页"][aria-label*="Google"] > svg{
          display: none;
        }
    `)):J.isGoogleHome()&&(e.push(z(`
        *:has(>svg[aria-label="Google"]){
          background: url("data:image/png;base64,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Ukk3/Mu1H72ejW7sb7GI9dOPhi+14IT/or+LPd6ixZ9f3xj77DM9ZgyQoeGWBjrYIObNu2HTO0vn0srbcygWx8l0bCLVjaqILRWBvINEkf3+lApKJtPph6r9VrvppOik9ead2l+6UXbSj3mHh3vXjwqHm51yoaT3qHjbgkF/JvmkKqt86NAY/+QTU+9dSKU7E+kzZ7aM6FLUu+nyehU5dwnCdGXCEq0MWrfEWYh+kevpR7mBS0ILDrdTYny3JKQOxSt3sLjYI9PIkMKVISoTQ2UmDaF4LsNI7nBSMIEcvAnkIB9GEwSz/zDD2T+ZR/rBhhXVKZ9k7SDc7JfP4hTjzA5dTtEhFAoJLvF24ri55sZbN5h91XqLT75AlZmu33f1Tbcv2l/OlpKSiqgSPkEvD+16ylW+y8c9H48Mhz/LxLWzfdiwYd2RPRNVRYyiM9ir11bu9TRWd0Q+0SufC3J553DkQqOhDrlHYOrMliNicfU6wcWldPMuTX8NuUrPZE10fV5B3cTveFT1PV7m/2DNK6MsRz6smy984rPgeHJfptDlfxY5JrPImTqK6pR2Z5VuMNrqgr9yLt/f1FC5LP0cUQIIgIBeAnA49JKCHAhkgMCcOW2l7T09l5EjMJ+Km21LTwH1mlGvw3pyZJqoB4OcDGk1K/WtzOTkSc0JYZ+2TKPeEG1p5CSyRYvJMJHqWU5/LW9Uv/epg+Y5r0968P3l1aaG0SwbAQUgAAJJCcDhSIoHiSCQPQKzZu0Y0hHvOpFuykdTb8FEuqFW0VDbcOqZ8NOJK1Gk6Dg5ED3UjdxNVu7gQuygCcVtNN+nhZ70m5kimj1e6dM1K6pasleL5CUfNXdzeaQ7Po4JtVYwqZZztZrqWkFDMyOoniOoh6SE/lJ0SqF1VWvDj9qbXnZT/Vtp90PB5QaJ+15tWlmBSK7JUSMVBEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAgXwj8P1QjL/BchIZ8AAAAAElFTkSuQmCC");
              background-size: 100% 100%;
              background-repeat: no-repeat;
              width: 240px;
              height: 92px;
        }
          svg[aria-label="Google"]{
            display: none
          }
        `)),N.waitNodeList(`input[value="Google 搜索"]`,1e4).then(e=>{e&&e.forEach(e=>{e.setAttribute(`value`,`百度搜索`)})})),e}},we={init(){let e=!1;N.on(window,`urlchange`,()=>{e&&F.info(`url change => reload!!!`),e=!0,this.run()},{capture:!0}).emit()},run(){J.isBaidu()?(F.info(`Baidu`),ve.init()):J.isGoogle()?(F.info(`Google`),Ce.init()):J.isBing()&&(F.info(`Bing`),be.init())}},Y=function(e,t,n,r,i,a=``,o=`text`,s,c){let l={text:e,type:`input`,inputType:o,attributes:{},props:{},description:r,placeholder:a,afterAddToUListCallBack:s,getValue(){return this.props[w].get(t,n)},callback(e,n){let r=e.target.validity.valid;typeof i==`function`&&i(e,n,r)||(this.props[w].set(t,n),typeof c==`function`&&c(e,n,r))}};return Reflect.set(l.attributes,S,t),Reflect.set(l.attributes,C,n),$.initComponentsStorageApi(`input`,l,{get(e,t){return A.getValue(e,t)},set(e,t){A.setValue(e,t)}}),l},X=function(e,t,n,r,i,a,o){let s={text:e,type:`select`,description:a,attributes:{},props:{},getValue(){return this.props[w].get(t,n)},callback(e){if(e==null)return;let n=e.value;F.info(`选择：${e.text}`),!(typeof i==`function`&&i(e))&&(this.props[w].set(t,n),typeof o==`function`&&o(e))},data:r};return Reflect.set(s.attributes,S,t),Reflect.set(s.attributes,C,n),$.initComponentsStorageApi(`select`,s,{get(e,t){return A.getValue(e,t)},set(e,t){A.setValue(e,t)}}),s},Z=function(e,t,n,r,i,a,o,s,c,l){let u={text:e,type:`slider`,description:s,attributes:{},props:{},getValue(){return this.props[w].get(t,n)},getToolTipContent(e){return typeof o==`function`?o(e):`${e}`},callback(e,n){typeof a==`function`&&a(e,n)||(this.props[w].set(t,n),typeof l==`function`&&l(e,n))},min:r,max:i,step:c};return Reflect.set(u.attributes,S,t),Reflect.set(u.attributes,C,n),$.initComponentsStorageApi(`slider`,u,{get(e,t){return A.getValue(e,t)},set(e,t){A.setValue(e,t)}}),u},Q=function(e,t,n=!1,i,a,o,s,c,l){if(l&&typeof l.defaultValue==`object`&&l.defaultValue!=null){let n=l.key??t;l.handler.add({key:n,name:e}),l.handler.shortCut.initConfig(n,l.defaultValue)}let u={text:e,type:`switch`,description:a,disabled:s,attributes:{},props:{},getValue(){return this.props[w].get(t,n)},callback(n,r){let a=!!r;F.success(`${a?`开启`:`关闭`} ${e}`),!(typeof i==`function`&&i(n,a))&&(this.props[w].set(t,a),typeof c==`function`&&c(n,a))},afterAddToUListCallBack:(...n)=>{if(o?.(...n),l){let i=l.handler.shortCut,a=l.key??t,[o,s]=n,c=s.target?.querySelector(`.pops-panel-item-left-main-text`);if(!c)return;let u=()=>{let t=l.handler.shortCut.getShowText(a,`暂未录入快捷键`),n=N.createElement(`div`,{className:`pops-switch-shortcut-wrapper`,innerHTML:`
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `},{style:`margin-right: 5px;display: inline-flex;`}),r=n.querySelector(`.pops-bottom-icon`);N.on(r,`click`,function(e){l.handler.shortCut.deleteOption(a),i.toolTip.offEvent(),i.toolTip.close(),i.toolTip.destory(),n.remove()},{once:!0});let i=P.tooltip({$target:r,content:()=>t,className:`github-tooltip`,isFixed:!0,only:!0});N.empty(c),N.append(c,n,e)};if(P.rightClickMenu({$target:c,only:!0,data:[{text:()=>l.handler.shortCut.hasOption(a)?`修改快捷键`:`添加快捷键`,icon:P.config.iconSVG.keyboard,callback(e,t,n,o){if(i.isWaitKeyboardPress()){r.default.warning(`请先执行当前的录入操作`);return}let s=r.default.loading(`请按下快捷键...`,{showClose:!0,onClose(){i.cancelEnterShortcutKeys()}});i.enterShortcutKeys(a).then(({status:e,option:t,key:n})=>{s.close(),e?(F.success(`录入快捷键`,t),r.default.success(`录入成功`),u()):r.default.error(`快捷键 ${i.translateKeyboardValueToButtonText(t)} 已被 ${n} 占用`)})}}]}),!i.hasOption(a))return;u()}}};return Reflect.set(u.attributes,S,t),Reflect.set(u.attributes,C,n),$.initComponentsStorageApi(`switch`,u,{get(e,t){return A.getValue(e,t)},set(e,t){A.setValue(e,t)}}),u},$={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||=new n.default.Dictionary,this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t)},initComponentsStorageApi(e,t,n){let r;r=this.hasStorageApi(e)?this.getStorageApi(e):n,this.setComponentsStorageApiProperty(t,r)},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,w,t)}},Te={id:`baidu`,title:`百度搜索`,isDefault:J.isBaidu(),views:[{type:`container`,text:`功能`,views:[Q(`精简首页`,`baidu-search-home-simplifyTheHomepage`,!0)]},{text:`屏蔽`,type:`container`,views:[Q(`移除广告`,`baidu-search-removeAds`,!0),Q(`移除右侧栏`,`baidu-search-removeRightPanel`,!0),Q(`移除选中文本的弹窗`,`baidu-search-removeSelectTextDialog`,!0),Q(`移除「大家都在搜」`,`baidu-search-removeEveryOneSearch`,!0),Q(`移除「相关搜索」`,`baidu-search-removeRelatedSearch`,!0)]},{text:`显示模式优化`,type:`container`,views:[Q(`开启`,`baidu-search-showOptimization-enable`,!0),X(`模式`,`baidu-search-showOptimization-mode`,`single-center`,[{text:`无`,value:``},{text:`单列居中`,value:`single-center`},{text:`双列居中`,value:`double-column-center`},{text:`三列居中`,value:`three-column-center`},{text:`四列居中`,value:`four-column-center`}])]},{type:`container`,text:`自定义背景图`,views:[Q(`启用`,`baidu-search-ownBackgroundImage-enable`,!1),Y(`图片地址`,`baidu-search-ownBackgroundImage-url`,G,`url地址或base64图片`),Z(`图片透明度`,`baidu-search-ownBackgroundImage-opacity`,.8,0,1,void 0,void 0,`值越低越透明`,.1)]},{type:`container`,text:`搜索结果优化`,views:[Q(`启用`,`baidu-search-optimizationResult-enable`,!0,void 0,`开启后下面的功能才会生效`),Q(`链接重定向`,`baidu-search-optimizationResult-redirect`,!0),Q(`添加favicon`,`baidu-search-optimizationResult-addFavicon`,!0),Q(`标识非安全的链接`,`baidu-search-optimizationResult-markUnsafeLink`,!0)]}]},Ee={id:`bing`,title:`Bing搜索`,isDefault:J.isBing(),views:[{text:`屏蔽`,type:`container`,views:[Q(`移除广告`,`bing-search-removeAds`,!0),Q(`移除选中文本的弹窗`,`bing-search-removeSelectTextDialog`,!0),Q(`移除输入预测`,`bing-search-removeInputPrediction`),Q(`移除输入历史记录`,`bing-search-removeInputHistory`),Q(`移除输入历史记录「与最近的搜索相关」`,`bing-search-removeInputHistory-relatedToRecentSearches`),Q(`移除右侧更多搜索结果`,`bing-search-removeRightMoreSearchResult`,!0),Q(`移除「Copilot Search」`,`bing-search-removeCopilotSearch`),Q(`移除底部悬浮的工具栏`,`bing-search-removeBottomFloatingToolbar`,!0),Q(`移除「其他用户还搜索过/其他用户还问了以下问题」`,`bing-search-removeOtherUserSearch`,!0),Q(`移除左上角「国内版/国际版」`,`bing-search-removeTopLeftAreaSwtich`),Q(`移除右上角「帐户奖励和偏好设置」`,`bing-search-removeTopRightAccountSetting`),Q(`移除「约xxx个结果」`,`bing-search-removeAboutAnyResultsTip`,!1,void 0,`搜索结果最上面的提示文字和图标`),Q(`移除「相关搜索」`,`bing-search-removeResultRelatedSearch`),Q(`移除「你可能喜欢的搜索」`,`bing-search-removeResultYouMayLikeSearch`),Q(`移除底部「部分搜索结果未予显示」`,`bing-search-removeBottomPartOfSearchResultTip`),Q(`移除底部右下角 备案信息`,`bing-search-removeBottomRightCopyright`)]},{text:`显示模式优化`,type:`container`,views:[Q(`开启`,`bing-search-showOptimization-enable`,!0),X(`模式`,`bing-search-showOptimization-mode`,`single-center`,[{text:`无`,value:``},{text:`单列居中`,value:`single-center`},{text:`双列居中`,value:`double-column-center`},{text:`三列居中`,value:`three-column-center`},{text:`四列居中`,value:`four-column-center`}])]},{type:`container`,text:`自定义背景图`,views:[Q(`启用`,`bing-search-ownBackgroundImage-enable`,!1),Y(`图片地址`,`bing-search-ownBackgroundImage-url`,G,`url地址或base64图片`),Z(`图片透明度`,`bing-search-ownBackgroundImage-opacity`,.8,0,1,void 0,void 0,`值越低越透明`,.1)]}]},De={id:`view-general`,title:`通用`,views:[{text:`Toast配置`,type:`container`,views:[X(`Toast位置`,j.qmsg_config_position.key,j.qmsg_config_position.defaultValue,[{value:`topleft`,text:`左上角`},{value:`top`,text:`顶部`},{value:`topright`,text:`右上角`},{value:`left`,text:`左边`},{value:`center`,text:`中间`},{value:`right`,text:`右边`},{value:`bottomleft`,text:`左下角`},{value:`bottom`,text:`底部`},{value:`bottomright`,text:`右下角`}],e=>{F.info(`设置当前Qmsg弹出位置`+e.text)},`Toast显示在页面九宫格的位置`),X(`最多显示的数量`,j.qmsg_config_maxnums.key,j.qmsg_config_maxnums.defaultValue,[{value:1,text:`1`},{value:2,text:`2`},{value:3,text:`3`},{value:4,text:`4`},{value:5,text:`5`}],void 0,`限制Toast显示的数量`),Q(`逆序弹出`,j.qmsg_config_showreverse.key,j.qmsg_config_showreverse.defaultValue,void 0,`修改Toast弹出的顺序`)]},{text:`Cookie配置`,type:`container`,views:[Q(`启用`,j.httpx_cookie_manager_enable.key,j.httpx_cookie_manager_enable.defaultValue,void 0,`Api请求时会自动使用下面的Cookie设置`),Q(`使用document.cookie`,j.httpx_cookie_manager_use_document_cookie.key,j.httpx_cookie_manager_use_document_cookie.defaultValue,void 0,`会自动根据请求的域名来使用cookie`)]}]},Oe={id:`google`,title:`Google搜索`,isDefault:J.isGoogle(),views:[{text:`功能`,type:`container`,views:[Q(`伪装百度`,`google-search-imitateBaidu`,!1)]},{type:`container`,text:`屏蔽`,views:[Q(`移除广告`,`google-search-removeAds`,!0),Q(`移除AI概览`,`google-search-removeAIOverview`,!1),Q(`移除右侧栏`,`google-search-removeRightPanel`,!0),Q(`移除「用户还搜索了」`,`google-search-removeRelatedSearch`,!0),Q(`移除「相关问题」`,`google-search-removeQuestions`,!0)]},{text:`显示模式优化`,type:`container`,views:[Q(`开启`,`google-search-showOptimization-enable`,!0),X(`模式`,`google-search-showOptimization-mode`,`single-center`,[{text:`无`,value:``},{text:`单列居中`,value:`single-center`},{text:`双列居中`,value:`double-column-center`},{text:`三列居中`,value:`three-column-center`},{text:`四列居中`,value:`four-column-center`}])]},{type:`container`,text:`自定义背景图`,views:[Q(`启用`,`google-search-ownBackgroundImage-enable`,!1),Y(`图片地址`,`google-search-ownBackgroundImage-url`,G,`url地址或base64图片`),Z(`图片透明度`,`google-search-ownBackgroundImage-opacity`,.8,0,1,void 0,void 0,`值越低越透明`,.1)]},{type:`container`,text:`搜索结果优化`,views:[Q(`启用`,`google-search-optimizationResult-enable`,!0),Q(`新标签页打开`,`google-search-optimizationResult-openBlank`,!0)]}]};D.addContentConfig([De,Te,Oe,Ee]),A.init(),we.init()})(DOMUtils,pops,Utils,Qmsg);
