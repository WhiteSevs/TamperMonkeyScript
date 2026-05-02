// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      edith.xiaohongshu.com
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

(function (w, q, Ve, ae, Je) {
  'use strict';

  var Xe=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ee=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,te=typeof GM_getValue<"u"?GM_getValue:void 0,ie=typeof GM_info<"u"?GM_info:void 0,ue=typeof GM_listValues<"u"?GM_listValues:void 0,Ze=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Qe=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,ce=typeof GM_setValue<"u"?GM_setValue:void 0,Le=typeof GM_setValues<"u"?GM_setValues:void 0,Ye=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,et=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,v=typeof unsafeWindow<"u"?unsafeWindow:void 0,tt=window;const nt={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},F={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&q.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),j(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Ee=="function"?Ee(t.keyName):null;return typeof e=="string"&&e?j(e):F.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{q.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(o){navigator.clipboard.readText().then(i=>{o(i);}).catch(i=>{h.error("读取剪贴板内容失败👉",i),o("");});}function e(o){navigator.permissions.query({name:"clipboard-read"}).then(()=>{t(o);}).catch(i=>{h.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),t(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?e(o):window.addEventListener("focus",()=>{e(o);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let o,i=n-e,r=e,u=async l=>{const a=await t(l);if(typeof a=="boolean"&&a||l){b.workerClearTimeout(o);return}if(r+=e,r>i){u(true);return}o=b.workerSetTimeout(()=>{u(false);},e);};u(false);},findParentNode(t,e,n){if(n){let o=q.closest(t,n);if(o)return o.querySelector(e)}else return q.matches(t,e)?t:q.closest(t,e)},toStr(t,e=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(t,(i,r)=>r===void 0?n:r,e).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(t=768){return this.isVerticalScreen()?globalThis.innerWidth<t:globalThis.innerHeight<t},isTopWindow(){const t=typeof v=="object"&&v!=null?v:window;return t.top===t.self},formatVideoDuration(t){if(typeof t!="number"&&(t=parseInt(t)),isNaN(t))return t.toString();const e=function(n){return n<10?`0${n}`:n};if(t<60)return `0:${e(t)}`;if(t>=60&&t<3600){const n=Math.floor(t/60),o=t%60;return `${n}:${e(o)}`}else {const n=Math.floor(t/3600),o=Math.floor(t/60)%60,i=t%60;return `${n}:${e(o)}:${e(i)}`}},formatTimeStamp(t,e){if(typeof t=="number"&&t<1e12){const l=String(Date.now()).length-String(t).length;t=t*Math.pow(10,l);}let n=t,o=new Date(typeof t=="string"?t.replace(/-/g,"/"):t),r=new Date(e??Date.now()).getTime()-o.getTime(),u=Math.floor(r/(24*3600*1e3));if(u>0)u>7?n=b.formatTime(o.getTime()):n=u+"天前";else {let l=r%864e5,a=Math.floor(l/(3600*1e3));if(a>0)n=a+"小时前";else {let c=l%36e5,s=Math.floor(c/(60*1e3));if(s>0)n=s+"分钟前";else {let d=c%6e4;n=Math.round(d/1e3)+"秒前";}}}return n}},b=ae.noConflict(),f=q.noConflict(),D=Ve,h=new b.Log(ie,v.console||tt.console),me=ie?.script?.name||void 0,ot=Ve.fn.Utils.AnyTouch();h.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Pe=()=>{const e=Ve.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=b.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,e,n)};w.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?h.warn(n):e==="error"?h.error(n):h.info(n),false},get position(){return x.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return x.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return x.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){return Pe()}});D.GlobalConfig.setGlobalConfig({zIndex:()=>Pe(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Ue=new b.GM_Menu({GM_getValue:te,GM_setValue:ce,GM_registerMenuCommand:Ze,GM_unregisterMenuCommand:Ye}),Q=new b.Httpx({xmlHttpRequest:et,logDetails:false});Q.interceptors.request.use(t=>t);Q.interceptors.response.use(t=>t,t=>(h.error("[Httpx-HttpxRequest.response] 响应错误",{data:t}),t.type==="onabort"?w.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?w.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?w.error("请求超时",{consoleLogContent:true}):w.error("其它错误",{consoleLogContent:true}),t));const Me={Object:{defineProperty:v.Object.defineProperty,keys:v.Object.keys,values:v.Object.values},Function:{apply:v.Function.prototype.apply,call:v.Function.prototype.call},Element:{appendChild:v.Element.prototype.appendChild},setTimeout:v.setTimeout.bind(v),clearTimeout:v.clearTimeout.bind(v),setInterval:v.setInterval.bind(v),clearInterval:v.clearInterval.bind(v)},j=f.addStyle.bind(f);F.addBlockCSS.bind(F);const se=q.selector.bind(q),it=q.selectorAll.bind(q),de=new b.CookieManagerService({baseCookieHandler:"GM_cookie"});de.isSupportGM_cookie||(de.isSupportCookieStore?de.setOptions({baseCookieHandler:"cookieStore"}):de.setOptions({baseCookieHandler:"document.cookie"}));new b.DocumentCookieHandler;const ge="GM_Panel",qe="data-init",W="data-key",G="data-default-value",rt="data-init-more-value",at="data-plugin-search-config",T="data-storage-api",X={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},U={setting:{get width(){return X.width<550?"88vw":X.width<700?"550px":"700px"},get height(){return X.height<450?"70vh":X.height<550?"450px":"550px"}},settingMiddle:{get width(){return X.width<350?"88vw":"350px"}},info:{get width(){return X.width<350?"88vw":"350px"},get height(){return X.height<250?"88vh":"250px"}}},ne={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new b.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(t){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,n;const o=(l,a)=>{if(t&&typeof t.translateCallback=="function")return t.translateCallback(l,a);if(typeof a=="object"&&a)for(const c in a)l=l.replaceAll(`{{${c}}}`,a[c]);return l},i=(l,a)=>{typeof a!="string"&&(a=F.toStr(a));const c=new Blob([a]),s=globalThis.URL.createObjectURL(c);f.createElement("a",{href:s,download:l}).click(),b.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(s);},500);},r=()=>{const l=g=>{const m=D.alert({title:{text:o("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${o("本地导入")}</div>
            <div class="btn-control" data-mode="network">${o("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${o("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback($){$.close();}}},drag:true,mask:{enable:true},width:U.info.width,height:U.info.height,style:`
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
          }`}),y=m.$shadowRoot.querySelector(".btn-control[data-mode='local']"),_=m.$shadowRoot.querySelector(".btn-control[data-mode='network']"),C=m.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),N=async $=>{confirm(o("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof ue=="function"?typeof le=="function"?(ue().forEach(V=>{le(V);}),w.success(o("已清空脚本存储的配置"))):w.error(o("不支持GM_deleteValue函数，无法执行删除脚本配置")):w.error(o("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Le=="function"?Le($):Object.keys($).forEach(V=>{const I=$[V];ce(V,I);}),w.success(o("配置导入完毕"));},O=$=>new Promise(async E=>{const k=b.toJSON($);Object.keys(k).length===0?w.warning(o("解析为空配置，不导入")):await N(k),E(true);});f.on(y,"click",$=>{f.preventEvent($),m.close();const E=f.createElement("input",{type:"file",accept:".json"});f.on(E,["propertychange","input"],()=>{if(!E.files?.length)return;const k=E.files[0],V=new FileReader;V.onload=()=>{O(V.result);},V.readAsText(k,"UTF-8");}),E.click();}),f.on(_,"click",$=>{f.preventEvent($),m.close();const E=D.prompt({title:{text:o("网络导入"),position:"center"},content:{text:"",placeholder:o("请填写URL"),focus:true},btn:{close:{enable:true,callback(I){I.close();}},ok:{text:o("导入"),callback:async I=>{const M=I.text;if(b.isNull(M)){w.error(o("请填入完整的url"));return}const A=w.loading(o("正在获取配置...")),L=await Q.get(M,{allowInterceptConfig:false});if(A.close(),!L.status){h.error(L),w.error(o("获取配置失败"),{consoleLogContent:true});return}await O(L.data.responseText)&&I.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:U.info.width,height:"auto"}),k=E.$shadowRoot.querySelector("input"),V=E.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(k,["input","propertychange"],()=>{f.val(k)===""?f.attr(V,"disabled","true"):f.removeAttr(V,"disabled");}),f.onKeyboard(k,"keydown",(I,M,A)=>{I==="Enter"&&A.length===0&&f.val(k)!==""&&f.emit(V,"click");}),f.emit(k,"input");}),f.on(C,"click",async $=>{f.preventEvent($),m.close();let E=await F.getClipboardText();if(E.trim()===""){w.warning(o("获取到的剪贴板内容为空"));return}await O(E);});},a=(g=`${me}_panel-setting-${b.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,m)=>{const y=D.alert({title:{text:o("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${o("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${o("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(N){N.close();}}},drag:true,mask:{enable:true},width:U.info.width,height:U.info.height,style:`
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
          }`}),_=y.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),C=y.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");f.on(_,"click",N=>{f.preventEvent(N);try{i(g,m),y.close();}catch(O){w.error(O.toString(),{consoleLogContent:true});}}),f.on(C,"click",async()=>{await b.copy(m)?(w.success(o("复制成功")),y.close()):w.error(o("复制失败"));});},s=D.confirm({title:{text:o("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:o("导入"),callback(){l();}},cancel:{enable:true,text:o("导出"),callback(){a(void 0,p);}}},width:X.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),d={};if(typeof ue=="function")ue().forEach(m=>{const y=te(m);Reflect.set(d,m,y);});else {w.warning(o("不支持函数GM_listValues，仅导出菜单配置"));const g=te(ge);Reflect.set(d,ge,g);}const p=F.toStr(d);s.value=p;},u=()=>{let l=ie?.script?.supportURL||ie?.script?.namespace;typeof l=="string"&&b.isNotNull(l)&&window.open(l,"_blank");};return [{id:"script-version",title:o("版本：{{version}}",{version:ie?.script?.version||o("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(l){new ot(l.$asideLiElement).on("tap",function(){clearTimeout(n),n=void 0,e?(e=false,r()):(n=setTimeout(()=>{e=false,u();},200),e=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},xe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{x.showPanel(ne.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){F.isTopWindow()&&Ue.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(o=>o.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Ie{data={storeNodeList:[],destoryFnList:[]};option={};constructor(e){this.option=e;}handlerResult(e,n){const o=[],i=[];let r=[];if(Array.isArray(n))r=r.concat(n);else {const l=a=>{if(typeof a=="object"&&a!=null)if(a instanceof Element)r.push(a);else if(Array.isArray(a))l(a);else {const{$css:c,destory:s}=a;c!=null&&(Array.isArray(c)?r=r.concat(c):c instanceof Element&&r.push(c)),typeof s=="function"&&r.push(s);}else r.push(a);};l(n);}const u=l=>{if(l!=null){if(l instanceof Element){o.push(l);return}if(typeof l=="function"){i.push(l);return}}};for(const l of r){const a=u(l);if(typeof a=="boolean"&&!a)break;if(Array.isArray(l))for(const c of l){const s=u(c);if(typeof s=="boolean"&&!s)break}}this.clearStoreNodeList(),this.execDestoryFnAndClear(),e&&(this.data.storeNodeList=this.data.storeNodeList.concat(o),this.data.destoryFnList=this.data.destoryFnList.concat(i));}getEnableStatus(e){return !!this.option.getValue(e)}clearStoreNodeList=()=>{for(let e=this.data.storeNodeList.length-1;e>=0;e--)this.data.storeNodeList[e]?.remove(),this.data.storeNodeList.splice(e,1);};execDestoryFnAndClear=()=>{for(let e=this.data.destoryFnList.length-1;e>=0;e--){const n=this.data.destoryFnList[e];n(),this.data.destoryFnList.splice(e,1);}};checkMenuExec(){let e=false;return typeof this.option.checkExec=="function"?e=this.option.checkExec(this.option.keyList):e=this.option.keyList.every(n=>this.getEnableStatus(n)),e}}class lt{storageKey;listenerData;cacheData;callbacks=[];constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new ae.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let e=this.callbacks.length-1;e>=0;e--){const n=this.callbacks[e];n(),this.callbacks.splice(e,1);}}getLocalValue(){if(this.cacheData==null){let e=te(this.storageKey);e==null&&(e={},this.setLocalValue(e)),this.destory(),this.cacheData=e;const n=Xe(this.storageKey,(o,i,r)=>{this.cacheData=null,this.cacheData=r;});return this.callbacks.push(()=>{Qe(n);}),e}else return this.cacheData}setLocalValue(e){this.cacheData=null,this.cacheData=e,ce(this.storageKey,e);}set(e,n){const o=this.get(e),i=this.getLocalValue();Reflect.set(i,e,n),this.setLocalValue(i),this.emitValueChangeListener(e,n,o);}get(e,n){const o=this.getLocalValue();return Reflect.get(o,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),o=this.getLocalValue();Reflect.deleteProperty(o,e),this.setLocalValue(o),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){this.destory(),le(this.storageKey);}addValueChangeListener(e,n){const o=Math.random(),i=this.listenerData.get(e)||[];return i.push({id:o,key:e,callback:n}),this.listenerData.set(e,i),o}removeValueChangeListener(e){let n=false;for(const[o,i]of this.listenerData.entries()){for(let r=0;r<i.length;r++){const u=i[r];(typeof e=="string"&&u.key===e||typeof e=="number"&&u.id===e)&&(i.splice(r,1),r--,n=true);}this.listenerData.set(o,i);}return n}async emitValueChangeListener(...e){const[n,o,i]=e;if(!this.listenerData.has(n))return;const r=this.listenerData.get(n);for(let u=0;u<r.length;u++){const l=r[u];if(typeof l.callback=="function"){let a,c;e.length===1||(e.length===2?a=o:e.length===3&&(a=o,c=i)),await l.callback(n,a,c);}}}}const J=new lt(ge),x={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new b.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new b.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new b.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new b.Dictionary),this.__onceExecData},get scriptName(){return me},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:ge,attributeKeyName:W,attributeDefaultValueName:G},init(){this.initContentDefaultValue(),xe.init();},initContentDefaultValue(){const t=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const i=o.attributes,r=i[qe];if(typeof r=="function"){const c=r();if(typeof c=="boolean"&&!c)return}const u=new Map,l=i[W];if(l!=null){const c=i[G];u.set(l,c);}const a=i[rt];if(typeof a=="object"&&a&&Object.keys(a).forEach(c=>{const s=a[c];u.set(c,s);}),!u.size){h.warn("请先配置键",o);return}if(o.type==="switch"){const c=typeof o.disabled=="function"?o.disabled():o.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...u.keys());}for(const[c,s]of u.entries())this.setDefaultValue(c,s);},e=o=>{for(let i=0;i<o.length;i++){const r=o[i];t(r);const u=r.views;u&&Array.isArray(u)&&e(u);}},n=[...ne.getAllContentConfig()];for(let o=0;o<n.length;o++){const i=n[o];if(!i.views)continue;const r=i.views;r&&Array.isArray(r)&&e(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&h.warn("该key已存在，初始化默认值失败: ",{key:t,initValue:this.$data.contentConfigInitDefaultValue.get(t)}),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){J.set(t,e);},getValue(t,e){const n=J.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){J.delete(t);},hasKey(t){return J.has(t)},addValueChangeListener(t,e,n){const o=J.addValueChangeListener(t,e);if(n?.immediate||n?.immediateAll){const i=this.getValue(t);n?.immediate?e(t,i,i):n?.immediateAll&&x.emitMenuValueChange(t,i,i);}return o},removeValueChangeListener(t){J.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){J.emitValueChangeListener(t,e,n);},async exec(t,e,n,o=true){let i;typeof t=="string"||Array.isArray(t)?i=()=>t:i=t;let r=false;const u=i();let l=[];Array.isArray(u)?(r=true,l=u):l.push(u);const a=l.find(m=>!this.$data.contentConfigInitDefaultValue.has(m));if(a){h.warn(`${a} 键不存在`);return}const c=JSON.stringify(l);if(o&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);const s=[],d=new Ie({keyList:l,getValue:m=>!!this.getValue(m),checkExec(m){let y=false;return typeof n=="function"?y=n(m):y=m.every(_=>this.getValue(_)),y}}),p=async m=>{const y=d.checkMenuExec();let _=[];if(y){const C=l.map(N=>this.getValue(N));_=await e({key:l,triggerKey:m?.key,value:r?C:C[0],addStoreValue:(...N)=>d.handlerResult(y,N)});}d.handlerResult(y,_);};o&&l.forEach(m=>{const y=this.addValueChangeListener(m,(_,C,N)=>p({key:_}));s.push(y);}),await p();const g={checkMenuExec:d.checkMenuExec.bind(d),keyList:l,reload(){this.clearStoreNodeList(),this.execDestoryFnAndClear(),p();},clear(){d.clearStoreNodeList(),this.execDestoryFnAndClear(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreNodeList:d.clearStoreNodeList.bind(d),execDestoryFnAndClear:d.execDestoryFnAndClear.bind(d),removeValueChangeListener:()=>{s.forEach(m=>{this.removeValueChangeListener(m);});},clearOnceExecMenuData(){o&&x.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,g),g},async execMenu(t,e,n=false,o=false){return await this.exec(t,async(...i)=>await e(...i),i=>i.every(u=>{let l=!!this.getValue(u);return x.$data.contentConfigInitDisabledKeys.includes(u)&&(l=false,h.warn(`.execMenu${o?"Once":""} ${u} 被禁用`)),n&&(l=!l),l}),o)},async execMenuOnce(t,e,n=false,o=false){const i=await this.execMenu(t,e,n,true);if(o&&i){const r=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,r);}return i},async execMoreMenu(t,e,n=false,o=false,i=false){const r=await Promise.all(t.map(async([s,d])=>await this.execMenu(s,(...g)=>d(...g),n,o))),u=new Ie({keyList:t.map(([s])=>s),getValue:s=>!!this.getValue(s)}),l=[],a=(s=false)=>{if(u.clearStoreNodeList(),u.execDestoryFnAndClear(),s){for(const d of l)this.removeValueChangeListener(d);for(const d of r)d&&this.removeUrlChangeWithExecMenuOnceListener(d.keyList);}},c=()=>{const s=r.every(d=>d?d.checkMenuExec():true);if(a(false),s){const d=e();u.handlerResult(s,d);}};c();for(const s of r)if(s){const d=this.addValueChangeListener(s.keyList[0],()=>{c();});if(l.push(d),i){const p=()=>{s.reload();};this.removeUrlChangeWithExecMenuOnceListener(s.keyList),this.addUrlChangeWithExecMenuOnceListener(s.keyList,p);}}return {clear(){for(const s of r)s?.clear();this.execDestoryFnAndClear(),this.removeValueChangeListener();},execDestoryFnAndClear(){for(const s of r)s?.execDestoryFnAndClear();a(false);},removeValueChangeListener(){for(const s of r)s?.removeValueChangeListener();a(true);}}},async execMoreMenuOnce(t,e,n=false,o=false){return await this.execMoreMenu(t,e,n,true,o)},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),J.removeValueChangeListener(t)},onceExec(t,e,n=false){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||n&&(Array.isArray(t)?t:[t]).findIndex(i=>{if(!!!x.getValue(i))return  true})!==-1||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(t)}},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${me}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const i=t.findIndex(u=>(typeof u.isBottom=="function"?u.isBottom():!!u.isBottom)&&u.id==="script-version")!==-1;!n&&!i&&t.push(...ne.getDefaultBottomContentConfig());const r=D.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:u=>{u.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:u=>{u(),this.$data.$panel=null;}},width:U.setting.width,height:U.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=r,this.$data.panelContent=t,o||this.registerConfigSearch({$panel:r,content:t}),{$panel:r,content:t}},registerConfigSearch(t){const{$panel:e,content:n}=t,o=(g,m)=>{if(typeof t.translateCallback=="function")return t.translateCallback(g,m);if(typeof m=="object"&&m)for(const y in m)g=g.replaceAll(`{{${y}}}`,m[y]);return g},i=async(g,m)=>{if(g==null)return;const y=await m(g);return y&&typeof y.isFind=="boolean"&&y.isFind?y.data:await i(y.data,m)},r=(g,m)=>{const y=new IntersectionObserver(_=>{_.forEach(C=>{C.isIntersecting&&(m?.(),y.disconnect());});},{root:null,threshold:1});y.observe(g),g.scrollIntoView({behavior:"smooth",block:"center"});},u=g=>{const m="pops-flashing";f.onAnimationend(g,()=>{g.classList.remove(m);}),g.classList.add(m);},l=g=>{if(g.type==="dblclick"&&p)return;f.preventEvent(g);const m=D.alert({title:{text:o("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${o("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:U.settingMiddle.width,height:"auto",drag:true,style:`
					${D.config.cssText.panelCSS}

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
					${t.searchDialogStyle??""}
				`}),y=m.$shadowRoot.querySelector(".search-config-text"),_=m.$shadowRoot.querySelector(".search-result-wrapper");y.focus();const C=()=>{f.empty(_);},N=$=>{const E=b.queryProperty($,I=>I?.next?{isFind:false,data:I.next}:{isFind:true,data:I}),k=f.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${E.matchedData?.path}</div>
							<div class="search-result-item-description">${E.matchedData?.description??""}</div>
						`}),V=D.fn.PanelHandlerComponents();return f.on(k,"click",()=>{const M=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[$.index];if(!M){w.error(o("左侧项下标{{index}}不存在",{index:$.index}));return}M.scrollIntoView({behavior:"smooth",block:"center"}),M.click(),i($.next,async A=>{if(A?.next){const L=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(R=>{const H=Reflect.get(R,V.$data.nodeStoreConfigKey);return typeof H=="object"&&H!=null&&H.text===A.name}),2500);if(L)L.click();else return w.error(o("未找到对应的二级菜单")),{isFind:true,data:A};return {isFind:false,data:A.next}}else {const L=await f.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(R=>Reflect.get(R,V.$data.nodeStoreConfigKey)===A.matchedData?.formConfig),2500);if(L){r(L);const R=L.closest(".pops-panel-forms-fold[data-fold-enable]");R&&(R.querySelector(".pops-panel-forms-fold-container").click(),await b.sleep(500)),r(L,()=>{u(L);});}else w.error(o("未找到对应的菜单项"));return {isFind:true,data:A}}});}),k},O=$=>{const E=new RegExp($,"i"),k=[],V=(M,A)=>{for(let L=0;L<M.length;L++){const R=M[L],H=R.views;if(H&&Array.isArray(H)){const P=b.deepClone(A);if(R.type==="deepMenu"){const K=b.queryProperty(P,Y=>Y?.next?{isFind:false,data:Y.next}:{isFind:true,data:Y});K.next={name:R.text};}V(H,P);}else {let P,K;if(R.type==="own"){let B=Reflect.get(R.attributes||{},at);B&&(typeof B=="function"&&(B=B()),typeof B.text=="string"&&(P=B.text),typeof B.desc=="string"&&(K=B.desc));}else P=R.text,K=Reflect.get(R,"description");const Y=[P,K],Se=Y.findIndex(B=>{if(typeof B=="string")return B.match(E)});if(Se!==-1){const B=b.deepClone(A),Ae=b.queryProperty(B,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});Ae.next={name:P,matchedData:{path:"",formConfig:R,matchedText:Y[Se],description:K}};const Re=[];b.queryProperty(B,z=>{const we=z?.name;return typeof we=="string"&&we.trim()!==""&&Re.push(we),z?.next?{isFind:false,data:z.next}:{isFind:true,data:z}});const ze=Re.join(F.escapeHtml(" - "));Ae.next.matchedData.path=ze,k.push(B);}}}};for(let M=0;M<n.length;M++){const A=n[M];if(!A.views||A.isBottom&&A.id==="script-version")continue;const L=A.views;if(L&&Array.isArray(L)){let R=A.title;typeof R=="function"&&(R=R()),V(L,{index:M,name:R});}}const I=document.createDocumentFragment();for(const M of k){const A=N(M);I.appendChild(A);}C(),_.append(I);};f.on(y,"input",b.debounce($=>{f.preventEvent($);const E=f.val(y).trim();if(E===""){C();return}O(E);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(g=>{f.on(g,"dblclick",l);});const c=new WeakMap;let s=false,d,p=false;f.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(g,m)=>{p=true,clearTimeout(d),d=void 0,s&&c.has(m)?(s=false,c.delete(m),l(g)):(d=setTimeout(()=>{s=false;},200),s=true,c.set(m,g));},{capture:true}),e.$shadowRoot.appendChild(f.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(t){if(Array.isArray(t))if(t.length>1){const e=t.sort();return JSON.stringify(e)}else return t[0];else return t},getDynamicValue(t,e){let n=false,o=e;const i=this.addValueChangeListener(t,(r,u)=>{o=u;});return {get value(){return n||(n=true,o=x.getValue(t,e)),o},destory(){x.removeValueChangeListener(i);}}}},je=me||"小红书优化",st=Je,_e={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Te="https://edith.xiaohongshu.com",De={async getPageInfo(t,e="",n="",o="",i="jpg,webp"){const r="/api/sns/web/v2/comment/page",u={note_id:t,cursor:e,top_comment_id:o,image_formats:i,xsec_token:n},l=r+"?"+b.toSearchParamsStr(u);let a=await Q.get(`${Te}${l}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":b.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let c=b.toJSON(a.data.responseText);if(h.info(["获取页信息",c]),c.code===0||c.success)return c.data;if(c.code===-101)return;w.error(c.msg);},async getLzlPageInfo(t="",e="",n=10,o="",i="jpg,webp,avif",r=""){const u="/api/sns/web/v2/comment/sub/page";let l={note_id:t,root_comment_id:e,num:n,cursor:o,image_formats:i,top_comment_id:r};u+""+b.toSearchParamsStr(l);let a=`${Te}${u}?${b.toSearchParamsStr(l)}`,c=await Q.get(a,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!c.status){c.data.status===406&&b.isNotNull(c.data.responseText)?b.toJSON(c.data.responseText).code==-1?w.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):w.error("获取楼中楼信息失败"):w.error("请求异常"),h.error(["获取楼中楼信息失败",c]);return}let s=b.toJSON(c.data.responseText);if(h.info(["获取楼中楼页信息",s]),s.code===0||s.success)return s.data;w.error(s.msg);},async getSearchRecommend(t){let e=await Q.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=b.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},Ne={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),h.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this,n=new WeakMap,o=v.document.addEventListener,i=v.document.removeEventListener;v.document.addEventListener=function(...r){const u=this,l=r[0],a=r[1],c=r[2];for(let s=0;s<e.$data.document_addEventListener.length;s++){const d=e.$data.document_addEventListener[s],p=Reflect.apply(d,this,[u,l,a,c]);if(typeof p=="function"){r[1]=p,n.set(a,{eventName:l,fn:p,options:c});break}else if(typeof p=="boolean"&&!p)return}return Reflect.apply(o,this,r)},v.document.removeEventListener=function(...r){const u=r[0],l=r[1],a=r[2];if(n.has(l)){const{eventName:c,fn:s,options:d}=n.get(l);let p=false;u===c&&(typeof a=="boolean"&&a===d||typeof a=="object"&&typeof d=="object"&&a.capture===d.capture||a==a)&&(p=true),p&&(r[1]=s);}return Reflect.apply(i,this,r)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),h.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this,n=new WeakMap,o=v.Element.prototype.addEventListener,i=v.Element.prototype.removeEventListener;v.Element.prototype.addEventListener=function(...r){const u=this,l=r[0],a=r[1],c=r[2];for(let s=0;s<e.$data.element_addEventListener.length;s++){const d=e.$data.element_addEventListener[s],p=Reflect.apply(d,this,[u,l,a,c]);if(typeof p=="function"){r[1]=p,n.set(a,{eventName:l,fn:p,options:c});break}else if(typeof p=="boolean"&&!p)return}return Reflect.apply(o,this,r)},v.Element.prototype.removeEventListener=function(...r){const u=r[0],l=r[1],a=r[2];if(n.has(l)){const{eventName:c,fn:s,options:d}=n.get(l);let p=false;c===u&&(typeof a=="boolean"&&a===d||typeof a=="object"&&typeof d=="object"&&a.capture===d.capture||a==d)&&(p=true),p&&(r[1]=s);}return Reflect.apply(i,this,r)};},setTimeout(t){if(this.$data.setTimeout.push(t),h.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this,n=v.setTimeout;v.setTimeout=function(...o){const i=o[0],r=o[1];for(let u=0;u<e.$data.setTimeout.length;u++){const l=e.$data.setTimeout[u],a=l(i,r);if(typeof a=="boolean"&&!a)return;if(typeof a=="function"){o[0]=a;break}}return Reflect.apply(n,this,o)};},setInterval(t){if(this.$data.setInterval.push(t),h.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this,n=v.setInterval;v.setInterval=function(...o){const i=o[0],r=o[1];for(let u=0;u<e.$data.setInterval.length;u++){const l=e.$data.setInterval[u],a=l(i,r);if(typeof a=="boolean"&&!a)return;if(typeof a=="function"){o[0]=a;break}}return Reflect.apply(n,this,o)};},function_apply(t){if(this.$data.function_apply.push(t),h.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this,n=v.Function.prototype.apply;v.Function.prototype.apply=function(...o){const i=o[0],r=o[1];let u=this;for(let a=0;a<e.$data.function_apply.length;a++){const c=e.$data.function_apply[a];if(typeof c.paramsHandler=="function"){const s=c.paramsHandler(u,i,r,o);if(s!=null){if(s.args&&("thisArg"in s.args&&(o[0]=s.args.thisArg),"argArray"in s.args&&(o[1]=s.args.argArray),typeof s.args.fn=="function"&&(u=s.args.fn)),s.preventDefault)return "result"in s?s.result:void 0;break}}}let l=n.call(u,...o);for(let a=0;a<e.$data.function_apply.length;a++){const c=e.$data.function_apply[a];if(typeof c.returnsHandler=="function"){let s=c.returnsHandler(u,o[0],o[1],l,o);s!=null&&"result"in s&&(l=s.result);}}return l};},function_call(t){if(this.$data.function_call.push(t),h.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this,n=v.Function.prototype.call;v.Function.prototype.call=function(...o){const i=o[0],r=o.slice(1);let u=this;for(let a=0;a<e.$data.function_call.length;a++){const c=e.$data.function_call[a];if(typeof c.paramsHandler=="function"){const s=c.paramsHandler(u,i,r,o);if(s!=null){if(s.args&&("thisArg"in s.args&&(o[0]=s.args.thisArg),"argArray"in s.args&&o.splice(1,r.length,...s.args.argArray),typeof s.args.fn=="function"&&(u=s.args.fn)),s.preventDefault)return "result"in s?s.result:void 0;break}}}let l=n.apply(u,o);for(let a=0;a<e.$data.function_call.length;a++){const c=e.$data.function_call[a];if(typeof c.returnsHandler=="function"){const s=c.returnsHandler(u,o[0],o[1],l,o);s!=null&&"result"in s&&(l=s.result);}}return l};},defineProperty(t){if(this.$data.defineProperty.push(t),h.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this,n=v.Object.defineProperty;v.Object.defineProperty=function(...o){const i=o[0],r=o[1],u=o[2];for(let l=0;l<e.$data.defineProperty.length;l++){const a=e.$data.defineProperty[l],c=a(i,r,u);if(c!=null){o[0]=c.target,o[1]=c.key,o[2]=c.attributes;break}}return Reflect.apply(n,this,o)};},window_webpack(t="webpackJsonp",e,n){let o;Me.Object.defineProperty(v,t,{get(){return o},set(i){o=i;const r=i.push;i.push=function(...u){const l=u[0][0];let a=false;if(typeof e=="function"){const c=e(l);typeof c=="boolean"&&(a=c);}else a=e==l,a||Array.isArray(e)&&Array.isArray(l)&&(a=JSON.stringify(e)===JSON.stringify(l));if(a){const c=u[0][1];Me.Object.keys(c).forEach(d=>{const p=c[d];typeof p=="function"&&(u[0][1][d]=function(...g){const m=p.call(this,...g),y=g[0];return g[0]=n(y),m});});}return r.call(this,...u)};}});}},ke={webpackChunkranchi(){let t;Object.defineProperty(v,"webpackChunkranchi",{get(){return t},set(n){t=n;const o=t.push;t.push=function(...i){return i[0][0],typeof i[0][1]=="object"&&Object.keys(i[0][1]).forEach((r,u)=>{if(typeof i[0][1][r]=="function"&&i[0][1][r].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&i[0][1][r].toString().includes("jumpToApp")&&x.getValue("little-red-book-hijack-webpack-scheme")){let l=i[0][1][r];i[0][1][r]=function(...a){h.success(["成功劫持scheme唤醒",a]);let c=a[2].d;return a[2].d=function(...s){if(s.length===2&&typeof s[1]?.Z=="function"){let d=s[1].Z;d.toString()==="function(){return y}"&&(s[1].Z=function(...p){let g=d.call(this,...p);return typeof g=="function"&&g.toString().includes("jumpToApp")?function(){return {jumpToApp(m){if(h.success(["拦截唤醒",m]),m.deeplink?.startsWith("xhsdiscover://user/")){let y=m.deeplink.replace(/^xhsdiscover:\/\/user\//,""),_=window.location.origin+`/user/profile/${y}`;window.open(_,"_blank");}}}}:g});}return c.call(this,...s)},l.call(this,...a)};}}),o.call(this,...i)};}});},hookVue(){const t=v.Object.assign;let e=false;v.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let o=n[1];const i=o.render;let r=false;o.render=function(...u){return r||(u[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),r=true),i.call(this,...u)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){Ne.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return h.success(["成功劫持setTimeout唤醒",t]),false});},call(){Ne.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return h.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return h.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},ct=`/* 底部的App内打开 */
.bottom-button-box,
/* 顶部的打开看看 */
.nav-bar-box {
  display: none !important;
}
`,pe={allowCopy(){return h.info("允许复制"),j(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return h.info("屏蔽底部搜索发现"),F.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return h.info("屏蔽底部工具栏"),F.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return h.info("屏蔽视频笔记的作者热门笔记"),F.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return h.info("屏蔽视频笔记的热门推荐"),F.addBlockCSS("#new-note-view-container .recommend-box")}},ut={optimizeVideoNoteDesc(){return h.info("优化视频笔记的描述（可滚动）"),j(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},Ce={init(){j(ct),(x.getValue("little-red-book-hijack-webpack-mask")||x.getValue("little-red-book-hijack-webpack-scheme"))&&(h.info("劫持webpack"),ke.setTimeout(),ke.call()),x.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>pe.blockBottomSearchFind()),x.execMenuOnce("little-red-book-shieldBottomToorBar",()=>pe.blockBottomToorBar()),x.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>Ce.optimizeImageBrowsing()),x.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>ut.optimizeVideoNoteDesc()),x.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>pe.blockAuthorHotNote()),x.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>pe.blockHotRecommendNote()),f.onReady(function(){x.execMenu("little-red-book-optimizeCommentBrowsing",()=>{Ce.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){h.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=b.toJSON(v.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new b.LockFunction(this.scrollEvent,this);const e=v.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,h.info(["笔记数据",t.noteData]),h.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${e.user_id}">
							<img src="${e.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${e.user_id}" class="little-red-book-comments-author-name" target="_blank">
								${e.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${e.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${b.formatTime(e.create_time)}</span>
								<span class="little-red-book-comments-location">${e.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(e){let n=e.content,o=e.create_time||parseInt(e.time),i=e.id,r=e.ip_location||e.ipLocation,u=e.sub_comment_has_more,l=parseInt(e.sub_comment_count)||0,a=e.sub_comment_cursor,c=e.sub_comments||e.subComments,s=(e.user_info||e.user).image,d=(e.user_info||e.user).nickname,p=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let g=f.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:p,user_avatar:s,user_nickname:d,content:n,create_time:o,ip_location:r})}
					</div>
					`});if(u&&Array.isArray(c)&&(c.forEach(m=>{let y=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:m.user_info.user_id,user_avatar:m.user_info.image,user_nickname:m.user_info.nickname,content:t.converContent(m.content),create_time:m.create_time,ip_location:m.ip_location})});g.appendChild(y);}),l!==c.length)){let m=l-c.length,y=a,_=f.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${m} 条回复`});async function C(){let N=w.loading("加载中，请稍后..."),O=await De.getLzlPageInfo(t.noteId,i,10,y,void 0);N.close(),O&&(y=O.cursor,m=m-O.comments.length,_.innerText=`展开 ${m} 条回复`,O.comments.forEach($=>{let E=f.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:$.user_info.user_id,user_avatar:$.user_info.image,user_nickname:$.user_info.nickname,content:t.converContent($.content),create_time:$.create_time,ip_location:$.ip_location})});f.before(_,E);}),O.has_more||(f.off(_,"click",void 0,C,{capture:true}),_.remove()));}f.on(_,"click",void 0,C,{capture:true}),g.appendChild(_);}return g},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!b.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=w.loading("加载中，请稍后..."));let e=await De.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let o=t.getCommentElement(n);t.commentContainer.appendChild(o);}),!e.has_more)){w.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){h.success("添加滚动监听事件"),f.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){h.success("移除滚动监听事件"),f.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};f.waitNode(".narmal-note-container").then(async()=>{h.info("优化评论浏览-笔记元素出现");const e=se(".note-view-container"),n=f.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
          <style>
              .little-red-book-comments-parent {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
              }
              
              .little-red-book-comments-reply-container {
                  position: relative;
                  display: flex;
                  padding: 8px;
                  width: 100%;
                  padding-left: 52px;
              }
              .little-red-book-comments-container {
                  background: #fff;
                  position: relative;
                  padding: 8px 8px;
              }
              
              .little-red-book-comments-item {
                  position: relative;
              }
              
              .little-red-book-comments-avatar {
                  flex: 0 0 auto;
              }
              
              .little-red-book-comments-avatar img {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  border-radius: 100%;
                  border: 1px solid rgba(0,0,0,0.08);
                  object-fit: cover;
                  width: 40px;
                  height: 40px;
              }
              .little-red-book-comments-content-wrapper {
                  margin-left: 12px;
                  display: flex;
                  flex-direction: column;
                  font-size: 14px;
                  flex-grow: 1;
              }
              
              .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
              
              a.little-red-book-comments-author-name {
                  line-height: 18px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-content {
                  margin-top: 4px;
                  line-height: 140%;
                  color: #333;
              }
              
              .little-red-book-comments-info {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  font-size: 12px;
                  line-height: 16px;
                  color: rgba(51,51,51,0.6);
              }
              
              .little-red-book-comments-info-date {
                  margin: 8px 0;
              }
              
              span.little-red-book-comments-location {
                  margin-left: 4px;
                  line-height: 120%;
              }
              img.little-red-book-note-content-emoji {
                  margin: 0 1px;
                  height: 16px;
                  transform: translateY(2px);
                  position: relative;
              }
              .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                  width: 24px;
                  height: 24px;
              }
              .little-red-book-comments-total{
                  font-size: 14px;
                  color: rgba(51,51,51,0.6);
                  margin-left: 8px;
                  margin-bottom: 12px;
              }
              .little-red-book-comments-reply-show-more {
              padding-left: calc(52px + 24px + 12px);
              height: 32px;
              line-height: 32px;
              color: #13386c;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              }
          </style>
        `});t.commentContainer=n,t.init();const o=f.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(o),t.commentData&&t.commentData.comments&&(h.info("从固定的评论中加载"),t.commentData.comments.forEach(i=>{let r=t.getCommentElement(i);n.appendChild(r);})),f.append(e,n);});},optimizeImageBrowsing(){h.info("优化图片浏览");const t=function(o=[],i=0){let r="";o.forEach(a=>{r+=`<li><img data-src="${a}" loading="lazy"></li>`;});const u=f.createElement("ul",{innerHTML:r}),l=new st(u,{inline:false,url:"data-src",zIndex:b.getMaxZIndex()+100,hidden:()=>{l.destroy();}});i=i<0?0:i,l.view(i),l.zoomTo(1),l.show();},e=(o,i)=>{let r=i.querySelector("img"),u=[],l=[];i.closest(".onix-carousel-item")?l=Array.from(i.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):l=[r];let a=l.findIndex(c=>c==r);l.forEach(c=>{let s=c.getAttribute("src")||c.getAttribute("data-src")||c.getAttribute("alt");s&&u.push(s);}),h.success(["点击浏览图片👉",u[a]]),t(u,a);},n=f.on(document,"click",".note-image-box",e);return [F.setGMResourceCSS(nt.Viewer),()=>{n.off();}]}},dt=`/* 用户主页 */
/* 底部的-App内打开 */
.launch-app-container.bottom-bar,
/* 顶部的-打开看看 */
.main-container > .scroll-view-container > .launch-app-container:first-child,
/* 底部的-打开小红书看更多精彩内容 */
.bottom-launch-app-tip.show-bottom-bar,
/* 首页-顶部横幅 */
#app .launch-app-container,
/* 笔记-顶部横幅 */
.note-view-container .nav-bar-box-expand ,
.note-view-container .nav-bar-box-expand+.placeholder-expand,
/* 404页面 顶部的打开看看 */
.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),
/* 404页面 底部的-App内打开 */
.not-found-container #fmp {
  display: none !important;
}
`,We={init(){f.onReady(()=>{x.execMenuOnce("little-red-book-repariClick",()=>We.repariClick());});},repariClick(){h.info("修复正确的点击跳转");const t=n=>{const o=n.target;if(h.info(["点击的按钮元素",o]),o?.className?.includes("follow-btn"))h.success("点击-关注按钮");else if(o?.closest("button.reds-button.message-btn"))h.success("点击-私信按钮");else if(o?.closest("div.reds-tab-item"))h.success("点击-笔记/收藏按钮");else if(o?.closest("section.reds-note-card")){h.success("点击-笔记卡片");const i=o?.closest("section.reds-note-card"),r=i.getAttribute("id")||b.toJSON(i.getAttribute("impression"))?.noteTarget?.value?.noteId;r?window.open(`https://www.xiaohongshu.com/discovery/item/${r}`,"_blank"):w.error("获取笔记note_id失败");}return f.preventEvent(n),false},e=f.on(document,"click",t,{capture:true});return [()=>{e.off();}]}},$e={init(){x.execMenuOnce("little-red-book-shieldAd",()=>(h.info("注入默认屏蔽CSS"),j(dt))),x.execMenuOnce("little-red-book-allowCopy",()=>$e.allowCopy()),_e.isArticle()?Ce.init():_e.isUserHome()&&We.init();},allowCopy(){return h.info("允许复制文字"),j(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},pt={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},fe={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let o=null;return typeof t=="string"?o=f.selector(t):typeof t=="function"?o=t():t instanceof HTMLElement&&(o=t),o}e.forEach(o=>{typeof o.msg=="string"&&h.info(o.msg);const i=function(){const r=n();if(r==null)return {status:false,isTimeout:true,inst:null,$el:r};const u=fe.getVue(r);return u==null?{status:false,isTimeout:false,inst:null,$el:r}:{status:!!o.check(u,r),isTimeout:false,inst:u,$el:r}};b.waitVueByInterval(()=>n(),()=>i().status,250,1e4).then(()=>{const r=i();if(r.status){const u=r.inst;o.set(u,r.$el);}else typeof o.failWait=="function"&&o.failWait(r.isTimeout);});});},watchVuePropChange(t,e,n,o,i){let r=b.assign({immediate:true,deep:false},o||{});return new Promise(u=>{fe.waitVuePropToSet(t,{check(l){return typeof l?.$watch=="function"},set(l){let a=null;typeof e=="function"?a=l.$watch(()=>e(l),(c,s)=>{n(l,c,s);},r):a=l.$watch(e,(c,s)=>{n(l,c,s);},r),u(a);},failWait:i});})},goToUrl(t,e,n=false){if(t==null){w.error("跳转Url: $vueNode为空"),h.error("跳转Url: $vueNode为空："+e);return}let o=fe.getVue(t);if(o==null){w.error("获取vue属性失败",{consoleLogContent:true});return}let i=o.$router,r=true;if(h.info("即将跳转URL："+e),n&&(r=false),r)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let u=new URL(e);if(u.origin===window.location.origin)e=u.pathname+u.search+u.hash;else {h.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}h.info("$router push跳转Url："+e),i.push(e);}},hookGestureReturnByVueRouter(t){function e(){h.success("触发popstate事件"),o(true);}function n(){h.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),f.on(v,"popstate",e);}async function o(i=false){if(f.off(v,"popstate",e),!t.callback(i))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)h.info("后退！"),t.vueInst.$router.back(),await b.sleep(250);else return}return n(),{resumeBack:o}}},Oe={init(){(x.getValue("pc-xhs-search-open-blank-btn")||x.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),x.exec(["pc-xhs-search-open-blank-btn","pc-xhs-search-open-blank-keyboard-enter"],()=>this.optimizationSearch(),t=>t.some(n=>{let o=!!x.getValue(n);return x.$data.contentConfigInitDisabledKeys.includes(n)&&(o=false,h.warn(`.exec ${n} 被禁用`)),o})),x.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){const t=function(e,n=true){{const o=se("#search-input");if(o){const i=o.value,r=pt.getSearchUrl(i);h.info("搜索内容: "+i),window.open(r,n?"_blank":"_self");}else w.error("未找到搜索的输入框");}};f.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",x.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{f.onKeyboard(e,"keydown",(n,o,i,r)=>{n==="Enter"&&!i.length&&(h.info("按下回车键"),f.preventEvent(r),e.blur(),t());});});}),f.waitNode("#search-input + .input-button .search-icon").then(e=>{x.execMenu("pc-xhs-search-open-blank-btn",()=>{f.on(e,"click",n=>{f.preventEvent(n),h.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){h.info("笔记宽屏");const t=x.getValue("pc-xhs-article-fullWidth-widthSize",90),e=x.getValue("pc-xhs-article-fullWidth-imageSize",80);return j(`
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100% !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${t}vw;
		}
		@media (min-width: 960px) {
			#noteContainer .media-container{
				width: ${e}% !important;
				height: auto !important;
			}
		}
		@media (max-width: 959px) {
			#noteContainer .media-container{
				height: ${e}% !important;
				width: auto !important;
			}
		}
		`)},transformPublishTime(){h.info("转换笔记发布时间");const t=new b.LockFunction(()=>{it(".note-content:not([data-edit-date])").forEach(n=>{const o=fe.getVue(n);if(!o)return;const i=o?._?.props?.note;if(i==null)return;const r=i.time,u=i.lastUpdateTime,l=i.ipLocation;if(typeof r=="number"){const a=[];a.push(`发布：${b.formatTime(r)}`),typeof u=="number"&&a.push(`修改：${b.formatTime(u)}`),typeof l=="string"&&b.isNotNull(l)&&a.push(l);const c=n.querySelector(".date");f.html(c,a.join("<br>")),n.setAttribute("data-edit-date","");}});}),e=b.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});return [()=>{e?.disconnect();}]}},ft={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=b.ajaxHooker()),this.__ajaxHooker}},ve=function(t,e,n,o,i,r,u,l,a,c){const s={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:o,buttonIsRightIcon:i,buttonIconIsLoading:r,buttonType:u,buttonText:n,callback(d){typeof l=="function"&&l(d);},afterAddToUListCallBack:a};return Reflect.set(s.attributes,qe,()=>{s.disable=false;}),s},ye=function(t,e,n,o,i,r,u){const l={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[T].get(e,n)},callback(a){if(a==null)return;const c=a.value;if(h.info(`选择：${a.text}`),typeof i=="function"&&i(a))return;this.props[T].set(e,c);},data:o};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,G,n),oe.initComponentsStorageApi("select",l,{get(a,c){return x.getValue(a,c)},set(a,c){x.setValue(a,c);}}),l},Fe=function(t,e,n,o,i,r,u="请至少选择一个选项",l,a){let c=[];typeof o=="function"?c=o():c=o;const s={text:t,type:"select-multiple",description:r,placeholder:u,attributes:{},props:{},getValue(){return this.props[T].get(e,n)},selectConfirmDialogConfig:l,callback(d){const p=this.props[T],g=[];d.forEach(m=>{g.push(m.value);}),h.info("多选-选择：",g),p.set(e,g);},data:c};return Reflect.set(s.attributes,W,e),Reflect.set(s.attributes,G,n),oe.initComponentsStorageApi("select-multiple",s,{get(d,p){return x.getValue(d,p)},set(d,p){x.setValue(d,p);}}),s},Be=function(t,e,n,o,i,r,u,l,a,c){const s={text:t,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[T].get(e,n)},getToolTipContent(d){return typeof u=="function"?u(d):`${d}`},callback(d,p){if(typeof r=="function"&&r(d,p))return;this.props[T].set(e,p);},min:o,max:i,step:a};return Reflect.set(s.attributes,W,e),Reflect.set(s.attributes,G,n),oe.initComponentsStorageApi("slider",s,{get(d,p){return x.getValue(d,p)},set(d,p){x.setValue(d,p);}}),s},S=function(t,e,n=false,o,i,r,u,l,a){const c={text:t,type:"switch",description:i,disabled:u,attributes:{},props:{},getValue(){return this.props[T].get(e,n)},callback(s,d){const p=!!d;h.success(`${p?"开启":"关闭"} ${t}`),this.props[T].set(e,p);},afterAddToUListCallBack:(...s)=>{}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("switch",c,{get(s,d){return x.getValue(s,d)},set(s,d){x.setValue(s,d);}}),c},He=function(t,e,n,o,i,r="",u,l){const a={text:t,type:"textarea",attributes:{},props:{},description:o,placeholder:r,disabled:u,getValue(){const s=this.props[T].get(e,n);return Array.isArray(s)?s.join(`
`):s},callback(c,s){this.props[T].set(e,s);}};return Reflect.set(a.attributes,W,e),Reflect.set(a.attributes,G,n),oe.initComponentsStorageApi("switch",a,{get(c,s){return x.getValue(c,s)},set(c,s){x.setValue(c,s);}}),a},oe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new ae.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let o;this.hasStorageApi(t)?o=this.getStorageApi(t):o=n,this.setComponentsStorageApiProperty(e,o);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,T,e);}},ht=function(t,e,n,o,i,r="",u="text",l,a){const c={text:t,type:"input",inputType:u,attributes:{},props:{},description:o,placeholder:r,afterAddToUListCallBack:l,getValue(){return this.props[T].get(e,n)},callback(s,d){s.target.validity.valid,this.props[T].set(e,d);}};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("input",c,{get(s,d){return x.getValue(s,d)},set(s,d){x.setValue(s,d);}}),c};class mt{option;constructor(e){this.option=e;}getAllRule(){return te(this.option.STORAGE_API_KEY,[])}setAllRule(e){ce(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){const n=this.getAllRule(),o=n.findIndex(i=>i.uuid===e);if(o!==-1)return n[o]}setRule(e){const n=this.getAllRule(),o=n.findIndex(r=>r.uuid===e.uuid);let i=false;return o!==-1&&(n[o]=e,this.setAllRule(n),i=true),i}addRule(e){const n=this.getAllRule(),o=n.findIndex(r=>r.uuid===e.uuid);let i=false;return o!==-1||(n.push(e),this.setAllRule(n),i=true),i}updateRule(e){const n=this.getAllRule(),o=n.findIndex(i=>i.uuid===e.uuid);o!==-1?n[o]=e:n.push(e),this.setAllRule(n);}deleteRule(e){const n=this.getAllRule(),o=typeof e=="string"?e:e.uuid,i=n.findIndex(r=>r.uuid===o);return i!==-1?(n.splice(i,1),this.setAllRule(n),true):false}importRules(e){const n=D.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(a){a.close();}}},mask:{enable:true},drag:true,width:U.info.width,height:U.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),o=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),i=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),r=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),u=async a=>{let c=this.getAllRule();const s=[],d=[];let p=false;for(let m=0;m<a.length;m++){const y=a[m],_=c.findIndex(C=>C.uuid===y.uuid);_!==-1?d.push({index:_,data:y}):s.push(y);}if(d.length&&await new Promise(y=>{D.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${d.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(_){_.close(),y(false);}},ok:{text:"覆盖",callback(_){_.close(),y(true);}}},width:U.info.width,height:U.info.height,mask:{enable:true},drag:true});})){for(const y of d)c[y.index]=y.data;p=true;}s.length&&(c=c.concat(s)),this.setAllRule(c);const g=`共 ${a.length} 条规则，新增 ${s.length} 条，覆盖 ${p?d.length:0} 条`;w.success(g),e?.();},l=a=>new Promise(async c=>{const s=b.toJSON(a);if(!Array.isArray(s)){h.error(s),w.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),c(false);return}if(!s.length){w.error("导入失败，解析出的数据为空",{consoleLogContent:true}),c(false);return}await u(s),c(true);});f.on(o,"click",a=>{f.preventEvent(a),n.close();const c=f.createElement("input",{type:"file",accept:".json"});f.on(c,["propertychange","input"],()=>{if(!c.files?.length)return;const s=c.files[0],d=new FileReader;d.onload=()=>{l(d.result);},d.readAsText(s,"UTF-8");}),c.click();}),f.on(i,"click",a=>{f.preventEvent(a),n.close();const c=D.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(p){p.close();}},ok:{text:"导入",callback:async p=>{const g=p.text;if(b.isNull(g)){w.error("请填入完整的url");return}const m=w.loading("正在获取配置..."),y=await Q.get(g,{allowInterceptConfig:false});if(m.close(),!y.status){h.error(y),w.error("获取配置失败",{consoleLogContent:true});return}await l(y.data.responseText)&&p.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:U.info.width,height:"auto"}),s=c.$shadowRoot.querySelector("input"),d=c.$shadowRoot.querySelector(".pops-prompt-btn-ok");f.on(s,["input","propertychange"],()=>{f.val(s)===""?f.attr(d,"disabled","true"):f.removeAttr(d,"disabled");}),f.onKeyboard(s,"keydown",(p,g,m)=>{p==="Enter"&&m.length===0&&f.val(s)!==""&&f.emit(d,"click");}),f.emit(s,"input");}),f.on(r,"click",async a=>{f.preventEvent(a),n.close();const c=await b.getClipboardInfo();if(c.error!=null){w.error(c.error.toString());return}if(c.content.trim()===""){w.warning("获取到的剪贴板内容为空");return}await l(c.content);});}exportRules(e="rule.json"){const n=this.getAllRule(),o=new Blob([JSON.stringify(n,null,4)]),i=globalThis.URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(i);},1500);}}class gt{option;constructor(e){this.option=e;}async showView(){const e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:b.assign({ok:{callback:async()=>{await r();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${D.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 5px 20px;
        gap: 10px;
      }
      .rule-form-ulist-dynamic{
        --button-margin-top: 0px;
        --button-margin-right: 0px;
        --button-margin-bottom: 0px;
        --button-margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0px 5px 20px;
      }
      .rule-form-ulist-dynamic__inner{
        width: 100%;
      }
      .rule-form-ulist-dynamic__inner-container{
        display: flex;
        align-items: center;
      }
      .dynamic-forms{
        width: 100%;
      }
      .pops-panel-item-left-main-text{
        max-width: 150px;
      }
      .pops-panel-item-right-text{
        padding-left: 30px;
      }
      .pops-panel-item-right-text,
      .pops-panel-item-right-main-text{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .pops-panel-item-left-desc-text{
        line-height: normal;
        margin-top: 6px;
        font-size: 0.8em;
        color: rgb(108, 108, 108);
      }

      ${this.option?.style??""}
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");const o=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());f.append(o,i);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return e}}class yt{option;constructor(e){this.option=e;}async showView(e){const n=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,html:true},style:`
      ${D.config.cssText.panelCSS}

      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
      }


      .rule-item{
          display: flex;
          align-items: center;
          line-height: normal;
          font-size: 16px;
          padding: 4px 8px;
          gap: 8px;
      }
      .rule-name{
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
      .rule-controls{
          display: flex;
          align-items: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          gap: 8px;
          padding: 0px;
      }
      .rule-controls-enable{
          
      }
      .rule-controls-edit{
          
      }
      .rule-controls-delete{
          
      }
      .rule-controls-edit,
      .rule-controls-delete{
          width: 16px;
          height: 16px;
          cursor: pointer;
      }
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(){n.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const l=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(h.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){w.error("清理失败");return}else w.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),l.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:o,$externalSelect:i,$ruleValueSelect:r,$searchInput:u}=this.parseViewElement(n.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let l=null,a=null;Array.isArray(this.option.bottomControls?.filter?.option)&&f.append(i,this.option.bottomControls?.filter?.option.map(d=>{const p=f.createElement("option",{innerText:d.name});return Reflect.set(p,"data-value",d),p})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&f.append(r,this.option.bottomControls?.filter?.inputOption.map(d=>{const p=f.createElement("option",{innerText:d.name});return Reflect.set(p,"data-value",d),p})),f.on(i,"change",async()=>{const d=i[i.selectedIndex],p=Reflect.get(d,"data-value");typeof p?.selectedCallBack=="function"&&p.selectedCallBack(p),l=p,await s(false);}),f.on(r,"change",async()=>{const d=r[r.selectedIndex],p=Reflect.get(d,"data-value");typeof p?.selectedCallBack=="function"&&p.selectedCallBack(p),a=p,await s(false);}),f.onInput(u,b.debounce(async()=>{await s(false);}));const c=()=>{const d=i[i.selectedIndex];l=Reflect.get(d,"data-value");const p=r[r.selectedIndex];a=Reflect.get(p,"data-value");},s=async d=>{this.clearContent(n.$shadowRoot),d&&c();const p=await this.option.data(),g=[],m=f.val(u);for(let y=0;y<p.length;y++){const _=p[y];if(typeof e=="function"){const C=await e(_);if(typeof C=="boolean"&&!C)continue}if(l){const C=await l?.filterCallBack?.(_);if(typeof C=="boolean"&&!C)continue}if(a){let C=true;if(m===""?C=true:C=false,C||(C=await a?.filterCallBack?.(_,m)),!C)continue}g.push(_);}await this.appendRuleItemElement(n.$shadowRoot,g);};if(typeof e=="object"&&e!=null){let d;typeof e.external=="number"?d=e.external:d=Array.from(i.options).findIndex(g=>Reflect.get(g,"data-value").value===e.external),d!==-1&&(i.selectedIndex=d);let p;typeof e.rule=="number"?p=e.rule:p=Array.from(r.options).findIndex(g=>Reflect.get(g,"data-value").value===e.rule),p!==-1&&(r.selectedIndex=p);}await s(true);}else f.hide(o,false);}showEditView(e,n,o,i,r,u){let l=async c=>{if(c){if(typeof u=="function"){let s=await this.option.getData(n);u(s);}}else if(e||await this.option.deleteData(n),typeof r=="function"){let s=await this.option.getData(n);r(s);}};new gt({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:l,getView:async c=>await this.option.itemControls.edit.getView(c,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async c=>{c.close(),await l(false);}},close:{callback:async c=>{c.close(),await l(false);}}},onsubmit:async(c,s)=>{let d=await this.option.itemControls.edit.onsubmit(c,e,s);return d.success?e?(w.success("修改成功"),o&&await this.updateRuleItemElement(d.data,i,o)):o&&await this.appendRuleItemElement(o,d.data):e&&h.error("修改失败"),d},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){const n=e.querySelector(".rule-view-container"),o=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),i=e.querySelector(".rule-view-search-container"),r=i.querySelector(".pops-panel-select .select-rule-status"),u=i.querySelector(".pops-panel-select .select-rule-value"),l=i.querySelector(".pops-panel-input input");return {$container:n,$deleteBtn:o,$searchContainer:i,$externalSelect:r,$ruleValueSelect:u,$searchInput:l}}parseRuleItemElement(e){const n=e.querySelector(".rule-controls-enable"),o=n.querySelector(".pops-panel-switch"),i=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),u=e.querySelector(".rule-controls-edit"),l=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:o,$enableSwitchInput:i,$enableSwitchCore:r,$edit:u,$delete:l,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){const o=await this.option.getDataItemName(e),i=f.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${o}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${D.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${D.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",e);const r="pops-panel-switch-is-checked",{$enable:u,$enableSwitch:l,$enableSwitchCore:a,$enableSwitchInput:c,$delete:s,$edit:d}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(f.on(a,"click",async()=>{let p=false;l.classList.contains(r)?(l.classList.remove(r),p=false):(l.classList.add(r),p=true),c.checked=p,await this.option.itemControls.enable.callback(e,p);}),await this.option.itemControls.enable.getEnable(e)&&l.classList.add(r)):u.remove(),this.option.itemControls.edit.enable?f.on(d,"click",p=>{f.preventEvent(p),this.showEditView(true,e,n,i,g=>{e=null,e=g;});}):d.remove(),this.option.itemControls.delete.enable?f.on(s,"click",p=>{f.preventEvent(p);const g=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{h.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(w.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(n),g.close()):w.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):s.remove(),i}async appendRuleItemElement(e,n){const{$container:o}=this.parseViewElement(e),i=[],r=Array.isArray(n)?n:[n];for(let u=0;u<r.length;u++){const l=r[u],a=await this.createRuleItemElement(l,e);i.push(a);}return f.append(o,i),await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const n=await this.option.data();await this.appendRuleItemElement(e,n),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,o){const i=await this.createRuleItemElement(e,o);n.after(i),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);f.html(n,"");}setDeleteBtnText(e,n,o=false){const{$deleteBtn:i}=this.parseViewElement(e);o?f.html(i,n):f.text(i,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}class bt{parseInfoDictData(e,n=false){const o=e?.note_card;let i=e.id,r=o.display_title,u=!!o?.interact_info?.liked,l=0,a=e?.note_card?.interact_info?.liked_count;typeof a=="string"&&(l=parseInt(a),isNaN(l)&&(l=0));let c=o?.user?.nick_name||o?.user?.nickname,s=o?.user?.user_id,d=o?.type==="video",p=o?.video?.capa?.duration||0;return {articleId:i,display_title:r,isLike:u,liked_count:l,nick_name:c,user_id:s,isVideo:d,videoDuration:p}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(o=>typeof o=="string"&&e.ruleValue!=null?!!o.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),o=n.match(/(\d+)/);if(!o)return h.warn("过滤器-解析比较大小的数字失败: ",e),false;let i=Number(o[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=i)return  true}else if(e.infoValue>i)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=i)return  true}else if(e.infoValue<i)return  true}else if(n.startsWith("=")){if(e.infoValue===i)return  true}else return h.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let o=this.parseInfoDictData(n),i=false,r=null;e:for(let u=0;u<e.length;u++){const l=e[u],a=Array.isArray(l.data.ruleName)?l.data.ruleName:[l.data.ruleName];for(let c=0;c<a.length;c++){const s=a[c];if(!Reflect.has(o,s))continue;let d=s,p=o[d],g={infoKey:d,infoValue:p,ruleKey:l.data.ruleName,ruleValue:l.data.ruleValue};if(i=this.checkFilterWithRule(g),i)if(Array.isArray(l.dynamicData)&&l.dynamicData.length){let m=[];for(let y=0;y<l.dynamicData.length;y++){const _=l.dynamicData[y];let C=_.ruleName,N=o[C],O={infoKey:C,infoValue:N,ruleKey:_.ruleName,ruleValue:_.ruleValue};m.push(O);let $=this.checkFilterWithRule(O);if(i=i&&$,!i)break}i&&h.success([`视频过滤器-多组 ==> ${l.name}`,o,g,m,n,l]);}else h.success([`视频过滤器 ==> ${l.name}`,o,g,n,l]);if(i){r=l;break e}}}return {isFilter:i,matchedFilterOption:r,transformInfo:o,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],o=e[1];if(typeof o=="number"){let i=n[o];i!=null&&i instanceof Element&&i.remove(),n.splice(o,1);}}}}const he={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new ae.Dictionary,articleInfoMap:new ae.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new mt({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return x.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){x.execMenuOnce(this.$key.ENABLE_KEY,async()=>{h.info("执行笔记过滤器");let t=new bt,e=i=>{if(this.$data.isReverse&&(i.isFilter=!i.isFilter,typeof i.transformInfo.articleId=="string"&&i.matchedFilterOption)){let r=this.$data.isFilterAwemeInfoList.get(i.transformInfo.articleId)||[];r.push(i.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(i.transformInfo.articleId,r);}typeof i.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(i.transformInfo.articleId,{articleInfo:i.info,transformArticleInfo:i.transformInfo});},n=i=>{if(!x.getValue(this.$key.ENABLE_KEY))return [];let r=this.$data.videoFilterRuleStorage.getAllRule();if(!r.length)return [];let u=Array.isArray(i)?i:[i];return r.filter(a=>a.enable&&(a.data.scope.includes("all")||Array.from(u).findIndex(c=>a.data.scope.includes(c))!==-1))},o=(i,r)=>{r.response=u=>{let l=n(i);if(!l.length)return;let a=b.toJSON(u.responseText),c=a?.data?.items;if(Array.isArray(c)){for(let s=0;s<c.length;s++){let d=c[s]||{},p=t.checkInfoIsFilter(l,d);e(p),p.isFilter&&t.removeArticle(c,s--);}u.responseText=JSON.stringify(a);}};};ft.ajaxHooker.hook(i=>{let r=F.fixUrl(i.url);new URL(r).pathname.startsWith("/api/sns/web/v1/homefeed")&&o("xhr-explore",i);});});},getTemplateData(){return {uuid:b.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=D.fn.PanelHandlerComponents();function n(i){return {get(r,u){return i[r]??u},set(r,u){i[r]=u;}}}return new yt({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.$data.videoFilterRuleStorage.setRule(i),deleteData:i=>this.$data.videoFilterRuleStorage.deleteRule(i),getData:i=>this.$data.videoFilterRuleStorage.getAllRule().find(l=>l.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,r)=>{i.enable=r,this.$data.videoFilterRuleStorage.setRule(i);}},edit:{enable:true,getView:(i,r)=>{let u=document.createDocumentFragment();r||(i=this.getTemplateData());let l=S("启用","enable",true);Reflect.set(l.props,T,n(i));let a=e.createSectionContainerItem_switch(l).$el,c=ht("规则名称","name","","",void 0,"必填");Reflect.set(c.props,T,n(i));let s=e.createSectionContainerItem_input(c).$el,d=Fe("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(k=>({...k,value:k.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(d.props,T,n(i.data));let p=e.createSectionContainerItem_select_multiple(d).$el,g=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],m=k=>{let V=Array.isArray(k.ruleName)?k.ruleName:[k.ruleName],I=Fe("属性名","ruleName",V,g.map(P=>({text:P,value:P})),void 0,"选择需要的属性名 ");Reflect.set(I.props,T,n(k));let M=e.createSectionContainerItem_select_multiple(I).$el,A=He("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set(A.props,T,n(k));let L=e.createSectionContainerItem_textarea(A).$el,R=He("备注","remarks","","");Reflect.set(R.props,T,n(k));let H=e.createSectionContainerItem_textarea(R).$el;return {$ruleName:M,$ruleValue:L,$remarks:H}},y=f.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),_=y.querySelector(".rule-form-ulist-dynamic__inner"),C=y.querySelector(".pops-panel-button"),N=(k={ruleName:[],ruleValue:"",remarks:""})=>{let V=f.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`}),I=V.querySelector(".dynamic-control-delete");f.on(I,"click",H=>{if(f.preventEvent(H),V.remove(),Array.isArray(i.dynamicData)){let P=i.dynamicData.findIndex(K=>K==k);P!==-1&&i.dynamicData.splice(P,1);}});let M=V.querySelector(".dynamic-forms"),{$ruleName:A,$ruleValue:L,$remarks:R}=m(k);M.appendChild(A),M.appendChild(L),M.appendChild(R),_.appendChild(V);};if(f.on(C,"click",k=>{f.preventEvent(k),N();}),Array.isArray(i.dynamicData))for(let k=0;k<i.dynamicData.length;k++){const V=i.dynamicData[k];N(V);}let{$ruleName:O,$ruleValue:$,$remarks:E}=m(i.data);return u.append(a,s,p,O,$,E,y),u},onsubmit:(i,r,u)=>{let l=i.querySelectorAll(".rule-form-ulist > li"),a=this.getTemplateData();return r&&(a.uuid=u.uuid),l.forEach(c=>{let s=Reflect.get(c,e.$data.nodeStoreConfigKey);if(!s)return;let d=Reflect.get(s,"attributes");if(!d)return;let p=Reflect.get(c,T),g=Reflect.get(d,W),m=Reflect.get(d,G),y=p.get(g,m);Reflect.has(a,g)?Reflect.set(a,g,y):Reflect.has(a.data,g)?Reflect.set(a.data,g,y):h.error(`${g}不在数据中`);}),i.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(c=>{let s={};c.querySelectorAll(".dynamic-forms > li").forEach(d=>{let p=Reflect.get(d,e.$data.nodeStoreConfigKey);if(!p)return;let g=Reflect.get(p,"attributes");if(!g)return;let m=Reflect.get(d,T),y=Reflect.get(g,W),_=Reflect.get(g,G),C=m.get(y,_);Reflect.set(s,y,C);}),a.dynamicData.push(s);}),a.name.trim()===""?(w.error("规则名称不能为空"),{success:false,data:a}):a.data.scope.length===0?(w.error("请选择作用域"),{success:false,data:a}):a.data.ruleName.length===0?(w.error("请选择属性名"),{success:false,data:a}):a.data.ruleValue.trim()===""?(w.error("属性值不能为空"),{success:false,data:a}):r?{success:t.$data.videoFilterRuleStorage.setRule(a),data:a}:{success:t.$data.videoFilterRuleStorage.addRule(a),data:a}},style:`
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
					}
					.rule-form-ulist-dynamic__inner{
						width: 100%;
					}
					.rule-form-ulist-dynamic__inner-container{
						display: flex;
						align-items: center;
					}
					.dynamic-forms{
						width: 100%;
					}
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:i=>t.$data.videoFilterRuleStorage.deleteRule(i)}},bottomControls:{filter:{enable:true,option:[{name:"启用",value:"enable",filterCallBack(i){return i.enable}},{name:"未启用",value:"notEnable",filterCallBack(i){return !i.enable}}],inputOption:[{name:"规则名称",value:"name",filterCallBack(i,r){return !!i.name.match(r)}},{name:"备注",value:"remarks",filterCallBack(i,r){let u=!!i.data.remarks.match(r);return u||(u=!!i.dynamicData?.find(l=>!!l.remarks.match(r))),u}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},xt="",wt={init(){x.execMenuOnce("pc-xhs-shieldAd",()=>j(xt)),x.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),x.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),f.onReady(()=>{x.execMenuOnce("pc-xhs-shield-login-dialog",()=>this.blockLoginContainer());});},blockLoginContainer(){h.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");const t=b.mutationObserver(document.body,{config:{subtree:true,childList:true},immediate:true,callback:()=>{const e=se(".login-container .icon-btn-wrapper");e&&(e.click(),h.success("登录弹窗出现，自动点击关闭按钮"));}});return [F.addBlockCSS(".login-container"),()=>{t?.disconnect();}]},blockSelectTextVisibleSearchPosition(){return h.info("屏蔽选择文字弹出的搜索提示"),F.addBlockCSS(".search-position")},blockTopToolbar(){return h.info("【屏蔽】顶部工具栏"),[F.addBlockCSS("#headerContainer",".header-container"),j(`
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`)]}},be={init(){he.init(),x.execMenuOnce("pc-xhs-hook-vue",()=>{ke.hookVue();}),x.execMenuOnce("pc-xhs-allowCopy",()=>be.allowPCCopy()),x.execMenuOnce("pc-xhs-open-blank-article",()=>be.openBlankArticle()),wt.init(),x.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>Oe.transformPublishTime()),_e.isArticle()&&(h.info("Router: 笔记页面"),Oe.init());},allowPCCopy(){h.success("允许复制文字");const t=n=>{f.preventEvent(n);let o=v.getSelection();return o?b.copy(o.toString()):h.error("未选中任何内容"),false},e=f.on(v,"copy",t,{capture:true});return [()=>{e.off();}]},openBlankArticle(){h.success("新标签页打开文章");const t=(n,o)=>{if(!x.getValue("pc-xhs-open-blank-article"))return;f.preventEvent(n);let r=o.querySelector("a.cover[href]")?.href;if(r){h.info("跳转文章: "+r);const u=new URL(r);u.pathname=u.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),r=u.toString(),window.open(r,"_blank");}else w.error("未找到文章链接");},e=f.on(document,"click",".feeds-container .note-item",t,{capture:true});return [()=>{e.off();}]}},vt={id:"little-red-book-panel-config-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[ye("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ye("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),S("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[S("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),S("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),S("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},_t={id:"little-red-book-panel-config-home",title:"主页",views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[S("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},kt={id:"little-red-book-panel-config-note",title:"笔记",views:[{text:"",type:"container",views:[{text:"视频笔记",type:"deepMenu",views:[{text:"",type:"container",views:[S("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),S("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),S("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[S("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),S("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),S("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[S("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),S("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},Ct={id:"xhs-panel-config-article",title:"笔记",views:[{type:"container",text:"功能",views:[S("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"container",views:[S("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),Be("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=se("#noteContainer");if(!n){h.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围"),Be("图片尺寸","pc-xhs-article-fullWidth-imageSize",80,30,100,(t,e)=>{let n=se("#noteContainer");if(!n){h.error("未找到笔记容器");return}let o=n.querySelector(".media-container");if(!o){h.error("未找到媒体容器");return}window.innerWidth>=960?(o.style.width=`${e}%`,o.style.height=""):(o.style.height=`${e}%`,o.style.width="");},t=>`${t}%，默认：80%`,"横向布局时调整宽度，竖向布局时调整高度")]}]},$t={id:"xhs-panel-config-common",title:"通用",views:[{type:"container",text:"",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[ye("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),ye("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),S("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[S("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),S("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",views:[{text:"",type:"container",views:[S("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),S("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[S("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),S("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),S("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),S("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",views:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"container",views:[S("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),S("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),ve("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{he.showView();})]},{type:"container",text:"",views:[ve("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{he.$data.videoFilterRuleStorage.importRules();}),ve("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{he.$data.videoFilterRuleStorage.exportRules(je+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[S("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]};j(`
.qmsg svg.animate-turn {
    fill: none;
}
`);ne.addContentConfig([$t,Ct]);ne.addContentConfig([vt,_t,kt]);const Ge=xe.getMenuOption();Ge.text="⚙ PC-设置";xe.updateMenuOption(Ge);xe.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{x.showPanel(ne.getConfig(1),`${je}-移动端设置`);}});x.init();let Ke=b.isPhone(),re="change_env_set",Z=te(re);Ue.add({key:re,text:`⚙ 自动: ${Ke?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return Z==null?t:t+` 手动: ${Z==1?"移动端":Z==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){w.error("输入的不是规范的数字");return}if(!t.includes(n)){w.error("输入的值必须是0或1或2");return}n==0?le(re):ce(re,n);}});Z!=null?(h.info(`手动判定为${Z===1?"移动端":"PC端"}`),Z==1?$e.init():Z==2?be.init():(w.error("意外，手动判定的值不在范围内"),le(re))):Ke?(h.info("自动判定为移动端"),$e.init()):(h.info("自动判定为PC端"),be.init());

})(Qmsg, DOMUtils, pops, Utils, Viewer);