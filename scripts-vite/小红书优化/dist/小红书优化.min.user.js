// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.12.26
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.8.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.1.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      edith.xiaohongshu.com
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

(function (q, ge, K, x, qe) {
  'use strict';

  var le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Re=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,te=typeof GM_getValue<"u"?GM_getValue:void 0,ie=typeof GM_info<"u"?GM_info:void 0,se=typeof GM_listValues<"u"?GM_listValues:void 0,je=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ae=typeof GM_setValue<"u"?GM_setValue:void 0,Ae=typeof GM_setValues<"u"?GM_setValues:void 0,We=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ge=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,V=typeof unsafeWindow<"u"?unsafeWindow:void 0,Ke=window;const ze=`/* 用户主页 */\r
/* 底部的-App内打开 */\r
.launch-app-container.bottom-bar,\r
/* 顶部的-打开看看 */\r
.main-container > .scroll-view-container > .launch-app-container:first-child,\r
/* 底部的-打开小红书看更多精彩内容 */\r
.bottom-launch-app-tip.show-bottom-bar,\r
/* 首页-顶部横幅 */\r
#app .launch-app-container,\r
/* 笔记-顶部横幅 */\r
.note-view-container .nav-bar-box-expand ,\r
.note-view-container .nav-bar-box-expand+.placeholder-expand,\r
/* 404页面 顶部的打开看看 */\r
.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),\r
/* 404页面 底部的-App内打开 */\r
.not-found-container #fmp {\r
  display: none !important;\r
}\r
`,ve={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},Je={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},B={waitRemove(...t){t.forEach(e=>{typeof e=="string"&&q.waitNodeList(e).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),q.createElement("style",{type:"text/css",innerHTML:`${e.join(`,
`)}{display: none !important;}`})},addBlockCSS(...t){let e=[];if(t.length!==0&&!(t.length===1&&typeof t[0]=="string"&&t[0].trim()===""))return t.forEach(n=>{Array.isArray(n)?e=e.concat(n):e.push(n);}),j(`${e.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(t){const e=typeof Re=="function"?Re(t.keyName):null;return typeof e=="string"&&e?j(e):B.loadStyleLink(t.url)},async loadStyleLink(t){let e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.href=t,new Promise(n=>{q.onReady(()=>{document.head.appendChild(e),n(e);});})},async loadScript(t){let e=document.createElement("script");return e.src=t,new Promise(n=>{e.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(e);})},fixUrl(t){return t=t.trim(),t.startsWith("data:")||t.match(/^http(s|):\/\//i)?t:t.startsWith("//")?(t.startsWith("///")||(t=window.location.protocol+t),t):(t.startsWith("/")||(t+="/"),t=window.location.origin+t,t)},fixHttps(t){if(t.startsWith("https://")||!t.startsWith("http://"))return t;try{let e=new URL(t);return e.protocol="https:",e.toString()}catch{return t}},lockScroll(...t){let e=document.createElement("style");e.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...t||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(e),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),e.remove();}}},async getClipboardText(){function t(o){navigator.clipboard.readText().then(i=>{o(i);}).catch(i=>{h.error("读取剪贴板内容失败👉",i),o("");});}function e(o){navigator.permissions.query({name:"clipboard-read"}).then(i=>{t(o);}).catch(i=>{h.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),t(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?e(o):window.addEventListener("focus",()=>{e(o);},{once:true});})},escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(t,e,n=5e3){let o,i=n-e,r=e,s=async u=>{let l=await t(u);if(typeof l=="boolean"&&!l||u){b.workerClearTimeout(o);return}if(r+=e,r>i){s(true);return}o=b.workerSetTimeout(()=>{s(false);},e);};s(false);},findParentNode(t,e,n){if(n){let o=q.closest(t,n);if(o)return o.querySelector(e)}else return q.matches(t,e)?t:q.closest(t,e)},toStr(t){const e="__undefined__placeholder__replaced__str__";return JSON.stringify(t,(o,i)=>i===void 0?e:i,2).replace(new RegExp(`"${e}"`,"g"),"undefined")}},pe="GM_Panel",Fe="data-init",W="data-key",G="data-default-value",Xe="data-init-more-value",Ze="data-plugin-search-config",F="data-storage-api",Z={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},P={setting:{get width(){return Z.width<550?"88vw":Z.width<700?"550px":"700px"},get height(){return Z.height<450?"70vh":Z.height<550?"450px":"550px"}},settingMiddle:{get width(){return Z.width<350?"88vw":"350px"}},info:{get width(){return Z.width<350?"88vw":"350px"},get height(){return Z.height<250?"88vh":"250px"}}},ne={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new b.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(t){Array.isArray(t)||(t=[t]);let e=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(e,t);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(t=0){return this.$data.contentConfig.get(t)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,e;const n=(r,s)=>{typeof s!="string"&&(s=B.toStr(s));const u=new Blob([s]),l=globalThis.URL.createObjectURL(u);d.createElement("a",{href:l,download:r}).click(),b.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(l);},500);},o=()=>{const r=p=>{const f=D.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(T,C){T.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),m=f.$shadowRoot.querySelector(".btn-control[data-mode='local']"),g=f.$shadowRoot.querySelector(".btn-control[data-mode='network']"),_=f.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),k=async T=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof se=="function"?typeof le=="function"?(se().forEach(v=>{le(v);}),x.success("已清空脚本存储的配置")):x.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):x.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof Ae=="function"?Ae(T):Object.keys(T).forEach(v=>{const y=T[v];ae(v,y);}),x.success("配置导入完毕");},I=T=>new Promise(async C=>{const R=b.toJSON(T);Object.keys(R).length===0?x.warning("解析为空配置，不导入"):await k(R),C(true);});d.on(m,"click",T=>{d.preventEvent(T),f.close();const C=d.createElement("input",{type:"file",accept:".json"});d.on(C,["propertychange","input"],R=>{if(!C.files?.length)return;const v=C.files[0],y=new FileReader;y.onload=()=>{I(y.result);},y.readAsText(v,"UTF-8");}),C.click();}),d.on(g,"click",T=>{d.preventEvent(T),f.close();const C=D.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(y,E){y.close();}},ok:{text:"导入",callback:async(y,E)=>{const L=y.text;if(b.isNull(L)){x.error("请填入完整的url");return}const $=x.loading("正在获取配置..."),A=await Y.get(L,{allowInterceptConfig:false});if($.close(),!A.status){h.error(A),x.error("获取配置失败",{consoleLogContent:true});return}await I(A.data.responseText)&&y.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:P.info.width,height:"auto"}),R=C.$shadowRoot.querySelector("input"),v=C.$shadowRoot.querySelector(".pops-prompt-btn-ok");d.on(R,["input","propertychange"],y=>{d.val(R)===""?d.attr(v,"disabled","true"):d.removeAttr(v,"disabled");}),d.onKeyboard(R,"keydown",(y,E,L)=>{y==="Enter"&&L.length===0&&d.val(R)!==""&&d.emit(v,"click");}),d.emit(R,"input");}),d.on(_,"click",async T=>{d.preventEvent(T),f.close();let C=await B.getClipboardText();if(C.trim()===""){x.warning("获取到的剪贴板内容为空");return}await I(C);});},s=(p=`${fe}_panel-setting-${b.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,f)=>{const m=D.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(k,I){k.close();}}},drag:true,mask:{enable:true},width:P.info.width,height:P.info.height,style:`
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
          }`}),g=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),_=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");d.on(g,"click",k=>{d.preventEvent(k);try{n(p,f),m.close();}catch(I){x.error(I.toString(),{consoleLogContent:true});}}),d.on(_,"click",async k=>{await b.copy(f)?(x.success("复制成功"),m.close()):x.error("复制失败");});},l=D.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(p,f){r();}},cancel:{enable:true,text:"导出",callback(p,f){s(void 0,c);}}},width:Z.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),a={};if(typeof se=="function")se().forEach(f=>{const m=te(f);Reflect.set(a,f,m);});else {x.warning("不支持函数GM_listValues，仅导出菜单配置");const p=te(pe);Reflect.set(a,pe,p);}const c=B.toStr(a);l.value=c;},i=()=>{let r=ie?.script?.supportURL||ie?.script?.namespace;typeof r=="string"&&b.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:`版本：${ie?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new Ye(r.$asideLiElement).on("tap",function(u){clearTimeout(e),e=void 0,t?(t=false,o()):(e=setTimeout(()=>{t=false,i();},200),t=true);});}}]},setDefaultBottomContentConfig(t){this.$data.__defaultBottomContentConfig=t;}},be={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{w.showPanel(ne.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){w.isTopWindow()&&Ne.add(this.$data.menuOption);},addMenuOption(t){Array.isArray(t)||(t=[t]),this.$data.menuOption.push(...t);},updateMenuOption(t){Array.isArray(t)||(t=[t]),t.forEach(e=>{let n=this.$data.menuOption.findIndex(o=>o.key===e.key);n!==-1&&(this.$data.menuOption[n]=e);});},getMenuOption(t=0){return this.$data.menuOption[t]},deleteMenuOption(t=0){this.$data.menuOption.splice(t,1);}};class Qe{storageKey;listenerData;constructor(e){if(typeof e=="string"){const n=e.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new K.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let e=te(this.storageKey);return e==null&&(e={},this.setLocalValue(e)),e}setLocalValue(e){ae(this.storageKey,e);}set(e,n){const o=this.get(e),i=this.getLocalValue();Reflect.set(i,e,n),this.setLocalValue(i),this.emitValueChangeListener(e,n,o);}get(e,n){const o=this.getLocalValue();return Reflect.get(o,e)??n}getAll(){return this.getLocalValue()}delete(e){const n=this.get(e),o=this.getLocalValue();Reflect.deleteProperty(o,e),this.setLocalValue(o),this.emitValueChangeListener(e,void 0,n);}has(e){const n=this.getLocalValue();return Reflect.has(n,e)}keys(){const e=this.getLocalValue();return Reflect.ownKeys(e)}values(){const e=this.getLocalValue();return Reflect.ownKeys(e).map(n=>Reflect.get(e,n))}clear(){le(this.storageKey);}addValueChangeListener(e,n){const o=Math.random(),i=this.listenerData.get(e)||[];return i.push({id:o,key:e,callback:n}),this.listenerData.set(e,i),o}removeValueChangeListener(e){let n=false;for(const[o,i]of this.listenerData.entries()){for(let r=0;r<i.length;r++){const s=i[r];(typeof e=="string"&&s.key===e||typeof e=="number"&&s.id===e)&&(i.splice(r,1),r--,n=true);}this.listenerData.set(o,i);}return n}async emitValueChangeListener(...e){const[n,o,i]=e;if(!this.listenerData.has(n))return;let r=this.listenerData.get(n);for(let s=0;s<r.length;s++){const u=r[s];if(typeof u.callback=="function"){let l=this.get(n),a,c;typeof i<"u"&&e.length>=2?c=i:c=l,typeof o<"u"&&e.length>2?a=o:a=l,await u.callback(n,a,c);}}}}const X=new Qe(pe),w={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new b.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new b.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new b.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new b.Dictionary),this.__onceExecData},get scriptName(){return fe},get panelConfig(){return this.__panelConfig},set panelConfig(t){this.__panelConfig=t;},key:pe,attributeKeyName:W,attributeDefaultValueName:G},init(){this.initContentDefaultValue(),be.init();},isTopWindow(){return V.top===V.self},initContentDefaultValue(){const t=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const i=o.attributes;let r=i[Fe];if(typeof r=="function"){let a=r();if(typeof a=="boolean"&&!a)return}let s=new Map,u=i[W];if(u!=null){const a=i[G];s.set(u,a);}let l=i[Xe];if(typeof l=="object"&&l&&Object.keys(l).forEach(a=>{const c=l[a];s.set(a,c);}),!s.size){h.warn(["请先配置键",o]);return}if(o.type==="switch"){let a=typeof o.disabled=="function"?o.disabled():o.disabled;typeof a=="boolean"&&a&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[a,c]of s.entries())this.setDefaultValue(a,c);},e=o=>{for(let i=0;i<o.length;i++){let r=o[i];t(r);let s=r.views;s&&Array.isArray(s)&&e(s);}},n=[...ne.getAllContentConfig()];for(let o=0;o<n.length;o++){let i=n[o];if(!i.views)continue;const r=i.views;r&&Array.isArray(r)&&e(r);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(t,e){this.$data.contentConfigInitDefaultValue.has(t)&&h.warn("请检查该key(已存在): "+t),this.$data.contentConfigInitDefaultValue.set(t,e);},getDefaultValue(t){return this.$data.contentConfigInitDefaultValue.get(t)},setValue(t,e){X.set(t,e);},getValue(t,e){const n=X.get(t);return n??(this.$data.contentConfigInitDefaultValue.has(t)?this.$data.contentConfigInitDefaultValue.get(t):e)},deleteValue(t){X.delete(t);},hasKey(t){return X.has(t)},addValueChangeListener(t,e){return X.addValueChangeListener(t,e)},removeValueChangeListener(t){X.removeValueChangeListener(t);},emitMenuValueChange(t,e,n){X.emitValueChangeListener(t,e,n);},async exec(t,e,n,o=true){const i=this;let r;typeof t=="string"||Array.isArray(t)?r=()=>t:r=t;let s=false;const u=r();let l=[];Array.isArray(u)?(s=true,l=u):l.push(u);const a=l.find(v=>!this.$data.contentConfigInitDefaultValue.has(v));if(a){h.warn(`${a} 键不存在`);return}const c=JSON.stringify(l);if(o&&this.$data.onceExecMenuData.has(c))return this.$data.onceExecMenuData.get(c);let p=[];const f=[];let m=[];const g=(v,y)=>{let E=[],L=[],$=[];if(Array.isArray(y))$=$.concat(y);else {const A=S=>{if(typeof S=="object"&&S!=null)if(S instanceof Element)$.push(S);else {const{$css:N,destory:O}=S;N!=null&&(Array.isArray(N)?$=$.concat(N):$.push(N)),typeof O=="function"&&$.push(O);}else $.push(S);};if(y!=null&&Array.isArray(y))for(const S of y)A(S);else A(y);}for(const A of $)if(A!=null){if(A instanceof Element){E.push(A);continue}if(typeof A=="function"){m.push(A);continue}}v?(p=p.concat(E),m=m.concat(L)):(k(),I());},_=v=>!!this.getValue(v),k=()=>{for(let v=0;v<p.length;v++)p[v]?.remove(),p.splice(v,1),v--;},I=()=>{for(let v=0;v<m.length;v++){const y=m[v];y(),m.splice(v,1),v--;}},T=()=>{let v=false;return typeof n=="function"?v=n(l):v=l.every(y=>_(y)),v},C=async v=>{if(T()){const E=l.map($=>this.getValue($)),L=await e({value:s?E:E[0],addStoreValue:(...$)=>g(true,$)});g(true,L);}else g(false,[]);};o&&l.forEach(v=>{const y=this.addValueChangeListener(v,(E,L,$)=>C());f.push(y);}),await C();const R={reload(){this.clearStoreStyleElements(),this.destory(),C();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>k(),destory(){return I()},removeValueChangeListener:()=>{f.forEach(v=>{this.removeValueChangeListener(v);});},clearOnceExecMenuData(){o&&i.$data.onceExecMenuData.delete(c);}};return this.$data.onceExecMenuData.set(c,R),R},async execMenu(t,e,n=false,o=false){return await this.exec(t,async i=>await e(i),i=>i.every(s=>{let u=!!this.getValue(s);return w.$data.contentConfigInitDisabledKeys.includes(s)&&(u=false,h.warn(`.execMenu${o?"Once":""} ${s} 被禁用`)),n&&(u=!u),u}),o)},async execMenuOnce(t,e,n=false,o=false){const i=await this.execMenu(t,e,n,true);if(o&&i){const r=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(t),this.addUrlChangeWithExecMenuOnceListener(t,r);}return i},deleteExecMenuOnce(t){return t=this.transformKey(t),this.$data.onceExecMenuData.delete(t),this.$data.urlChangeReloadMenuExecOnce.delete(t),X.removeValueChangeListener(t)},onceExec(t,e){if(t=this.transformKey(t),typeof t!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(t)||(e(),this.$data.onceExecData.set(t,1));},deleteOnceExec(t){t=this.transformKey(t),this.$data.onceExecData.delete(t);},addUrlChangeWithExecMenuOnceListener(t,e){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.set(t,e);},removeUrlChangeWithExecMenuOnceListener(t){t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.delete(t);},hasUrlChangeWithExecMenuOnceListener(t){return t=this.transformKey(t),this.$data.urlChangeReloadMenuExecOnce.has(t)},async emitUrlChangeWithExecMenuOnceEvent(t){const e=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of e)await n(t);},showPanel(t,e=`${fe}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];let i=t.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!n&&!i&&t.push(...ne.getDefaultBottomContentConfig());let r=D.panel({title:{text:e,position:"center",html:false,style:""},content:t,btn:{close:{enable:true,callback:(s,u)=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:(s,u)=>{s(),this.$data.$panel=null;}},width:P.setting.width,height:P.setting.height,drag:true,only:true,...this.$data.panelConfig});this.$data.$panel=r,this.$data.panelContent=t,o||this.registerConfigSearch({$panel:r,content:t});},registerConfigSearch(t){const{$panel:e,content:n}=t,o=async(f,m)=>{if(f==null)return;const g=await m(f);return g&&typeof g.isFind=="boolean"&&g.isFind?g.data:await o(g.data,m)},i=(f,m)=>{const g=new IntersectionObserver(_=>{_.forEach(k=>{k.isIntersecting&&(m?.(),g.disconnect());});},{root:null,threshold:1});g.observe(f),f.scrollIntoView({behavior:"smooth",block:"center"});},r=f=>{const m="pops-flashing";d.onAnimationend(f,()=>{f.classList.remove(m);}),f.classList.add(m);},s=f=>{if(f.type==="dblclick"&&p)return;d.preventEvent(f),l=null;const m=D.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:P.settingMiddle.width,height:"auto",drag:true,style:`
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
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${t.searchDialogStyle??""}
				`});m.$shadowRoot.querySelector(".search-wrapper");const g=m.$shadowRoot.querySelector(".search-config-text"),_=m.$shadowRoot.querySelector(".search-result-wrapper");g.focus();const k=()=>{d.empty(_);},I=C=>{const R=b.queryProperty(C,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),v=d.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${R.matchedData?.path}</div>
							<div class="search-result-item-description">${R.matchedData?.description??""}</div>
						`}),y=D.config.PanelHandlerComponents();return d.on(v,"click",E=>{const $=e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[C.index];if(!$){x.error(`左侧项下标${C.index}不存在`);return}$.scrollIntoView({behavior:"smooth",block:"center"}),$.click(),o(C.next,async A=>{if(A?.next){const S=await d.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(N=>{const O=Reflect.get(N,y.$data.nodeStoreConfigKey);return typeof O=="object"&&O!=null&&O.text===A.name}),2500);if(S)S.click();else return x.error("未找到对应的二级菜单"),{isFind:true,data:A};return {isFind:false,data:A.next}}else {const S=await d.waitNode(()=>Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(N=>Reflect.get(N,y.$data.nodeStoreConfigKey)===A.matchedData?.formConfig),2500);if(S){i(S);const N=S.closest(".pops-panel-forms-fold[data-fold-enable]");N&&(N.querySelector(".pops-panel-forms-fold-container").click(),await b.sleep(500)),i(S,()=>{r(S);});}else x.error("未找到对应的菜单项");return {isFind:true,data:A}}});}),v},T=C=>{const R=new RegExp(C,"i"),v=[],y=(L,$)=>{for(let A=0;A<L.length;A++){const S=L[A],N=S.views;if(N&&Array.isArray(N)){const O=b.deepClone($);if(S.type==="deepMenu"){const H=b.queryProperty(O,z=>z?.next?{isFind:false,data:z.next}:{isFind:true,data:z});H.next={name:S.text};}y(N,O);}else {let O,H;if(S.type==="own"){const U=Reflect.get(S.attributes||{},Ze);U&&(typeof U.text=="string"&&(O=U.text),typeof U.desc=="string"&&(H=U.desc));}else O=S.text,H=Reflect.get(S,"description");const z=[O,H],$e=z.findIndex(U=>{if(typeof U=="string")return U.match(R)});if($e!==-1){const U=b.deepClone($),Ve=b.queryProperty(U,J=>J?.next?{isFind:false,data:J.next}:{isFind:true,data:J});Ve.next={name:O,matchedData:{path:"",formConfig:S,matchedText:z[$e],description:H}};const Se=[];b.queryProperty(U,J=>{const xe=J?.name;return typeof xe=="string"&&xe.trim()!==""&&Se.push(xe),J?.next?{isFind:false,data:J.next}:{isFind:true,data:J}});const Ue=Se.join(B.escapeHtml(" - "));Ve.next.matchedData.path=Ue,v.push(U);}}}};for(let L=0;L<n.length;L++){const $=n[L];if(!$.views||$.isBottom&&$.id==="script-version")continue;const A=$.views;if(A&&Array.isArray(A)){let S=$.title;typeof S=="function"&&(S=S()),y(A,{index:L,name:S});}}const E=document.createDocumentFragment();for(const L of v){let $=I(L);E.appendChild($);}k(),_.append(E);};d.on(g,"input",b.debounce(C=>{d.preventEvent(C);let R=d.val(g).trim();if(R===""){k();return}T(R);},200));};e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(f=>{d.on(f,"dblclick",s);});let l=null,a=false,c,p=false;d.on(e.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(f,m)=>{p=true,clearTimeout(c),c=void 0,a&&l===m?(a=false,l=null,s(f)):(c=setTimeout(()=>{a=false;},200),a=true,l=m);},{capture:true}),e.$shadowRoot.appendChild(d.createElement("style",{type:"text/css",textContent:`
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
				`}));},transformKey(t){if(Array.isArray(t)){const e=t.sort();return JSON.stringify(e)}else return t}},ee={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},b=K.noConflict(),d=q.noConflict(),D=ge,h=new b.Log(ie,V.console||Ke.console),fe=ie?.script?.name||void 0,Ye=ge.config.Utils.AnyTouch(),et=false;h.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(t){const e=t.setting.type;if(e==="loading")return  false;const n=t.setting.content;return e==="warning"?h.warn(n):e==="error"?h.error(n):h.info(n),true},get position(){return w.getValue(ee.qmsg_config_position.key,ee.qmsg_config_position.defaultValue)},get maxNums(){return w.getValue(ee.qmsg_config_maxnums.key,ee.qmsg_config_maxnums.defaultValue)},get showReverse(){return w.getValue(ee.qmsg_config_showreverse.key,ee.qmsg_config_showreverse.defaultValue)},get zIndex(){let t=K.getMaxZIndex(),e=ge.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100}});D.GlobalConfig.setGlobalConfig({zIndex:()=>{const t=K.getMaxZIndex(void 0,void 0,n=>{if(n?.classList?.contains("qmsg-shadow-container")||n?.closest("qmsg")&&n.getRootNode()instanceof ShadowRoot)return  false}),e=ge.config.InstanceUtils.getPopsMaxZIndex().zIndex;return K.getMaxValue(t,e)+100},mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const Ne=new b.GM_Menu({GM_getValue:te,GM_setValue:ae,GM_registerMenuCommand:je,GM_unregisterMenuCommand:We}),Y=new b.Httpx({xmlHttpRequest:Ge,logDetails:et});Y.interceptors.request.use(t=>t);Y.interceptors.response.use(void 0,t=>(h.error("拦截器-请求错误",t),t.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):t.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):t.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),t));V.Object.defineProperty,V.Function.prototype.apply,V.Function.prototype.call,V.Element.prototype.appendChild,V.setTimeout;const j=d.addStyle.bind(d),ye=q.selector.bind(q),tt=q.selectorAll.bind(q);new b.GM_Cookie;const Oe=fe||"小红书优化",nt=qe,Ee="https://edith.xiaohongshu.com",Me={async getPageInfo(t,e="",n="",o="",i="jpg,webp"){const r="/api/sns/web/v2/comment/page",s={note_id:t,cursor:e,top_comment_id:o,image_formats:i,xsec_token:n},u=r+"?"+b.toSearchParamsStr(s);let l=await Y.get(`${Ee}${u}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":b.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!l.status)return;let a=b.toJSON(l.data.responseText);if(h.info(["获取页信息",a]),a.code===0||a.success)return a.data;if(a.code===-101)return;x.error(a.msg);},async getLzlPageInfo(t="",e="",n=10,o="",i="jpg,webp,avif",r=""){const s="/api/sns/web/v2/comment/sub/page";let u={note_id:t,root_comment_id:e,num:n,cursor:o,image_formats:i,top_comment_id:r};s+""+b.toSearchParamsStr(u);let l=`${Ee}${s}?${b.toSearchParamsStr(u)}`,a=await Y.get(l,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!a.status){a.data.status===406&&b.isNotNull(a.data.responseText)?b.toJSON(a.data.responseText).code==-1?x.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):x.error("获取楼中楼信息失败"):x.error("请求异常"),h.error(["获取楼中楼信息失败",a]);return}let c=b.toJSON(a.data.responseText);if(h.info(["获取楼中楼页信息",c]),c.code===0||c.success)return c.data;x.error(c.msg);},async getSearchRecommend(t){let e=await Y.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${t}`,{fetch:true});if(!e.status)return;let n=b.toJSON(e.data.responseText);if(n.success||n.code===1e3)return n.data.sug_items}},Ie={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(t){if(this.$data.document_addEventListener.push(t),h.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const e=this,n=new WeakMap,o=V.document.addEventListener,i=V.document.removeEventListener;V.document.addEventListener=function(...r){const s=this,u=r[0],l=r[1],a=r[2];for(let c=0;c<e.$data.document_addEventListener.length;c++){const p=e.$data.document_addEventListener[c],f=Reflect.apply(p,this,[s,u,l,a]);if(typeof f=="function"){r[1]=f,n.set(l,{eventName:u,fn:f,options:a});break}else if(typeof f=="boolean"&&!f)return}return Reflect.apply(o,this,r)},V.document.removeEventListener=function(...r){const s=r[0],u=r[1],l=r[2];if(n.has(u)){const{eventName:a,fn:c,options:p}=n.get(u);let f=false;s===a&&(typeof l=="boolean"&&l===p||typeof l=="object"&&typeof p=="object"&&l.capture===p.capture||l==l)&&(f=true),f&&(r[1]=c);}return Reflect.apply(i,this,r)};},element_addEventListener(t){if(this.$data.element_addEventListener.push(t),h.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const e=this,n=new WeakMap,o=V.Element.prototype.addEventListener,i=V.Element.prototype.removeEventListener;V.Element.prototype.addEventListener=function(...r){const s=this,u=r[0],l=r[1],a=r[2];for(let c=0;c<e.$data.element_addEventListener.length;c++){const p=e.$data.element_addEventListener[c],f=Reflect.apply(p,this,[s,u,l,a]);if(typeof f=="function"){r[1]=f,n.set(l,{eventName:u,fn:f,options:a});break}else if(typeof f=="boolean"&&!f)return}return Reflect.apply(o,this,r)},V.Element.prototype.removeEventListener=function(...r){const s=r[0],u=r[1],l=r[2];if(n.has(u)){const{eventName:a,fn:c,options:p}=n.get(u);let f=false;a===s&&(typeof l=="boolean"&&l===p||typeof l=="object"&&typeof p=="object"&&l.capture===p.capture||l==p)&&(f=true),f&&(r[1]=c);}return Reflect.apply(i,this,r)};},setTimeout(t){if(this.$data.setTimeout.push(t),h.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const e=this,n=V.setTimeout;V.setTimeout=function(...o){const i=o[0],r=o[1];for(let s=0;s<e.$data.setTimeout.length;s++){const u=e.$data.setTimeout[s],l=u(i,r);if(typeof l=="boolean"&&!l)return;if(typeof l=="function"){o[0]=l;break}}return Reflect.apply(n,this,o)};},setInterval(t){if(this.$data.setInterval.push(t),h.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const e=this,n=V.setInterval;V.setInterval=function(...o){const i=o[0],r=o[1];for(let s=0;s<e.$data.setInterval.length;s++){const u=e.$data.setInterval[s],l=u(i,r);if(typeof l=="boolean"&&!l)return;if(typeof l=="function"){o[0]=l;break}}return Reflect.apply(n,this,o)};},function_apply(t){if(this.$data.function_apply.push(t),h.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const e=this,n=V.Function.prototype.apply;V.Function.prototype.apply=function(...o){const i=o[0],r=o[1];let s=this;for(let l=0;l<e.$data.function_apply.length;l++){const a=e.$data.function_apply[l];if(typeof a.paramsHandler=="function"){const c=a.paramsHandler(s,i,r,o);if(c!=null){if(c.args&&("thisArg"in c.args&&(o[0]=c.args.thisArg),"argArray"in c.args&&(o[1]=c.args.argArray),typeof c.args.fn=="function"&&(s=c.args.fn)),c.preventDefault)return "result"in c?c.result:void 0;break}}}let u=n.call(s,...o);for(let l=0;l<e.$data.function_apply.length;l++){const a=e.$data.function_apply[l];if(typeof a.returnsHandler=="function"){let c=a.returnsHandler(s,o[0],o[1],u,o);c!=null&&"result"in c&&(u=c.result);}}return u};},function_call(t){if(this.$data.function_call.push(t),h.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const e=this,n=V.Function.prototype.call;V.Function.prototype.call=function(...o){const i=o[0],r=o.slice(1);let s=this;for(let l=0;l<e.$data.function_call.length;l++){const a=e.$data.function_call[l];if(typeof a.paramsHandler=="function"){const c=a.paramsHandler(s,i,r,o);if(c!=null){if(c.args&&("thisArg"in c.args&&(o[0]=c.args.thisArg),"argArray"in c.args&&o.splice(1,r.length,...c.args.argArray),typeof c.args.fn=="function"&&(s=c.args.fn)),c.preventDefault)return "result"in c?c.result:void 0;break}}}let u=n.apply(s,o);for(let l=0;l<e.$data.function_call.length;l++){const a=e.$data.function_call[l];if(typeof a.returnsHandler=="function"){const c=a.returnsHandler(s,o[0],o[1],u,o);c!=null&&"result"in c&&(u=c.result);}}return u};},defineProperty(t){if(this.$data.defineProperty.push(t),h.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const e=this,n=V.Object.defineProperty;V.Object.defineProperty=function(...o){const i=o[0],r=o[1],s=o[2];for(let u=0;u<e.$data.defineProperty.length;u++){const l=e.$data.defineProperty[u],a=l(i,r,s);if(a!=null){o[0]=a.target,o[1]=a.key,o[2]=a.attributes;break}}return Reflect.apply(n,this,o)};},window_webpack(t="webpackJsonp",e,n){let o;V.Object.defineProperty(V,t,{get(){return o},set(i){h.success("成功劫持webpack，当前webpack名："+t),o=i;const r=o.push;o.push=function(...s){let u=s[0][0];return (e==u||Array.isArray(e)&&Array.isArray(u)&&JSON.stringify(e)===JSON.stringify(u))&&Object.keys(s[0][1]).forEach(l=>{let a=s[0][1][l];s[0][1][l]=function(...c){let p=a.call(this,...c);return c[0]=n(c[0]),p};}),Reflect.apply(r,this,s)};}});}},_e={webpackChunkranchi(){let t;Object.defineProperty(V,"webpackChunkranchi",{get(){return t},set(n){t=n;const o=t.push;t.push=function(...i){return i[0][0],typeof i[0][1]=="object"&&Object.keys(i[0][1]).forEach((r,s)=>{if(typeof i[0][1][r]=="function"&&i[0][1][r].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&i[0][1][r].toString().includes("jumpToApp")&&w.getValue("little-red-book-hijack-webpack-scheme")){let u=i[0][1][r];i[0][1][r]=function(...l){h.success(["成功劫持scheme唤醒",l]);let a=l[2].d;return l[2].d=function(...c){if(c.length===2&&typeof c[1]?.Z=="function"){let p=c[1].Z;p.toString()==="function(){return y}"&&(c[1].Z=function(...f){let m=p.call(this,...f);return typeof m=="function"&&m.toString().includes("jumpToApp")?function(){return {jumpToApp(g){if(h.success(["拦截唤醒",g]),g.deeplink?.startsWith("xhsdiscover://user/")){let _=g.deeplink.replace(/^xhsdiscover:\/\/user\//,""),k=window.location.origin+`/user/profile/${_}`;window.open(k,"_blank");}}}}:m});}return a.call(this,...c)},u.call(this,...l)};}}),o.call(this,...i)};}});},hookVue(){const t=V.Object.assign;let e=false;V.Object.assign=function(...n){if(n.length==2&&n[1]?.render!==void 0&&!e){let o=n[1];const i=o.render;let r=false;o.render=function(...s){return r||(s[5]._.appContext.mixins.push({mounted(){this.$el.__Ivue__=this;}}),r=true),i.call(this,...s)},e=true;}return Reflect.apply(t,this,n)};},setTimeout(){Ie.setTimeout(t=>{let e=t.toString();if(e==="function(){r()}"||e==="function(){u()}")return h.success(["成功劫持setTimeout唤醒",t]),false});},call(){Ie.function_call({paramsHandler(t,e,n){if(t.toString(),n[0]?.label===0&&Array.isArray(n[0]?.ops)&&Array.isArray(n[0]?.trys)&&typeof n[0]?.sent=="function")return h.success(["成功劫持call唤醒",t,e,n]),{args:{fn:t,thisArg:e,argArray:[]}};if(typeof e=="string"&&e.startsWith("https://oia.xiaohongshu.com/oia"))return h.success(["成功劫持call跳转下载页面",t,e,n]),{preventDefault:true}}});}},ce={allowCopy(){return h.info("允许复制"),j(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return h.info("屏蔽底部搜索发现"),B.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return h.info("屏蔽底部工具栏"),B.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return h.info("屏蔽视频笔记的作者热门笔记"),B.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return h.info("屏蔽视频笔记的热门推荐"),B.addBlockCSS("#new-note-view-container .recommend-box")}},ot={optimizeVideoNoteDesc(){return h.info("优化视频笔记的描述（可滚动）"),j(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},it=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,ke={init(){j(it),(w.getValue("little-red-book-hijack-webpack-mask")||w.getValue("little-red-book-hijack-webpack-scheme"))&&(h.info("劫持webpack"),_e.setTimeout(),_e.call()),w.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>ce.blockBottomSearchFind()),w.execMenuOnce("little-red-book-shieldBottomToorBar",()=>ce.blockBottomToorBar()),w.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>ke.optimizeImageBrowsing()),w.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>ot.optimizeVideoNoteDesc()),w.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>ce.blockAuthorHotNote()),w.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>ce.blockHotRecommendNote()),d.onReady(function(){w.execMenu("little-red-book-optimizeCommentBrowsing",()=>{ke.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){h.info("优化评论浏览");const t={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){this.emojiMap=b.toJSON(V.localStorage.getItem("redmoji"))?.redmojiMap||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new b.LockFunction(this.scrollEvent,this);const e=V.__INITIAL_STATE__,n=e.noteData??e.data.noteData;t.noteData=n.data.noteData,t.commentData=n.data.commentData,t.noteId=t.noteData.noteId,t.xsec_token=e.noteData.routeQuery.xsec_token,h.info(["笔记数据",t.noteData]),h.info(["评论数据",t.commentData]);},getCommentHTML(e){return `
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
            `},getCommentElement(e){let n=e.content,o=e.create_time||parseInt(e.time),i=e.id,r=e.ip_location||e.ipLocation,s=e.sub_comment_has_more,u=parseInt(e.sub_comment_count)||0,l=e.sub_comment_cursor,a=e.sub_comments||e.subComments,c=(e.user_info||e.user).image,p=(e.user_info||e.user).nickname,f=e?.user_info?.user_id||e?.user?.userId;n=t.converContent(n);let m=d.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${t.getCommentHTML({user_id:f,user_avatar:c,user_nickname:p,content:n,create_time:o,ip_location:r})}
					</div>
					`});if(s&&Array.isArray(a)&&(a.forEach(g=>{let _=d.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:g.user_info.user_id,user_avatar:g.user_info.image,user_nickname:g.user_info.nickname,content:t.converContent(g.content),create_time:g.create_time,ip_location:g.ip_location})});m.appendChild(_);}),u!==a.length)){let g=u-a.length,_=l,k=d.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${g} 条回复`});async function I(){let T=x.loading("加载中，请稍后..."),C=await Me.getLzlPageInfo(t.noteId,i,10,_,void 0);T.close(),C&&(_=C.cursor,g=g-C.comments.length,k.innerText=`展开 ${g} 条回复`,C.comments.forEach(R=>{let v=d.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:t.getCommentHTML({user_id:R.user_info.user_id,user_avatar:R.user_info.image,user_nickname:R.user_info.nickname,content:t.converContent(R.content),create_time:R.create_time,ip_location:R.ip_location})});d.before(k,v);}),C.has_more||(d.off(k,"click",void 0,I,{capture:true}),k.remove()));}d.on(k,"click",void 0,I,{capture:true}),m.appendChild(k);}return m},converContent(e){return t.emojiNameList.forEach(n=>{e.includes(n)&&(e=e.replaceAll(n,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${t.emojiMap[n]}">`));}),e},async scrollEvent(){if(!b.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=x.loading("加载中，请稍后..."));let e=await Me.getPageInfo(t.noteId,t.currentCursor,t.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!e&&(t.currentCursor=e.cursor,e.comments.forEach(n=>{let o=t.getCommentElement(n);t.commentContainer.appendChild(o);}),!e.has_more)){x.info("已加载全部评论"),t.removeScrollEventListener();return}},addSrollEventListener(){h.success("添加滚动监听事件"),d.on(document,"scroll",void 0,t.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){h.success("移除滚动监听事件"),d.off(document,"scroll",void 0,t.scrollFunc.run,{capture:true});}};d.waitNode(".narmal-note-container").then(async()=>{h.info("优化评论浏览-笔记元素出现");let e=ye(".note-view-container"),n=d.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
        `});t.commentContainer=n,t.init();let o=d.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${t.commentData.commentCount??t.noteData.comments} 条评论`});n.appendChild(o),t.commentData&&t.commentData.comments&&(h.info("从固定的评论中加载"),t.commentData.comments.forEach(i=>{let r=t.getCommentElement(i);n.appendChild(r);})),d.append(e,n);});},optimizeImageBrowsing(){h.info("优化图片浏览");function t(n=[],o=0){let i="";n.forEach(u=>{i+=`<li><img data-src="${u}" loading="lazy"></li>`;});let r=d.createElement("ul",{innerHTML:i}),s=new nt(r,{inline:false,url:"data-src",zIndex:b.getMaxZIndex()+100,hidden:()=>{s.destroy();}});o=o<0?0:o,s.view(o),s.zoomTo(1),s.show();}const e=(n,o)=>{let i=o.querySelector("img"),r=[],s=[];o.closest(".onix-carousel-item")?s=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):s=[i];let u=s.findIndex(l=>l==i);s.forEach(l=>{let a=l.getAttribute("src")||l.getAttribute("data-src")||l.getAttribute("alt");a&&r.push(a);}),h.success(["点击浏览图片👉",r[u]]),t(r,u);};return d.on(document,"click",".note-image-box",e),[B.setGMResourceCSS(Je.Viewer),()=>{d.off(document,"click",".note-image-box",e);}]}},Be={init(){d.onReady(()=>{w.execMenuOnce("little-red-book-repariClick",()=>Be.repariClick());});},repariClick(){h.info("修复正确的点击跳转");const t=e=>{let n=e.target;if(h.info(["点击的按钮元素",n]),n?.className?.includes("follow-btn"))h.success("点击-关注按钮");else if(n?.closest("button.reds-button.message-btn"))h.success("点击-私信按钮");else if(n?.closest("div.reds-tab-item"))h.success("点击-笔记/收藏按钮");else if(n?.closest("section.reds-note-card")){h.success("点击-笔记卡片");let o=n?.closest("section.reds-note-card");o.getAttribute("id")||b.toJSON(o.getAttribute("impression"))?.noteTarget?.value?.noteId?window.open(`https://www.xiaohongshu.com/discovery/item/${n?.closest("section.reds-note-card")?.getAttribute("id")}`,"_blank"):x.error("获取笔记note_id失败");}return d.preventEvent(e),false};return d.on(document,"click",t,{capture:true}),[()=>{d.off(document,"click",t,{capture:true});}]}},Ce={init(){w.execMenuOnce("little-red-book-shieldAd",()=>(h.info("注入默认屏蔽CSS"),j(ze))),w.execMenuOnce("little-red-book-allowCopy",()=>Ce.allowCopy()),ve.isArticle()?ke.init():ve.isUserHome()&&Be.init();},allowCopy(){return h.info("允许复制文字"),j(`
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `)}},rt="",lt={init(){w.execMenuOnce("pc-xhs-shieldAd",()=>j(rt)),w.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),w.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),d.onReady(()=>{w.execMenuOnce("pc-xhs-shield-login-dialog",()=>this.blockLoginContainer());});},blockLoginContainer(){h.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");const t=b.mutationObserver(document.body,{config:{subtree:true,childList:true},immediate:true,callback:()=>{let e=ye(".login-container .icon-btn-wrapper");e&&(e.click(),h.success("登录弹窗出现，自动点击关闭按钮"));}});return [B.addBlockCSS(".login-container"),()=>{t?.disconnect();}]},blockSelectTextVisibleSearchPosition(){return h.info("屏蔽选择文字弹出的搜索提示"),B.addBlockCSS(".search-position")},blockTopToolbar(){return h.info("【屏蔽】顶部工具栏"),[B.addBlockCSS("#headerContainer",".header-container"),j(`
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
			`)]}},at={getSearchUrl(t){return `https://www.xiaohongshu.com/search_result?keyword=${t}&source=web_explore_feed`}},ue={getVue(t){if(t!=null)return t.__vue__||t.__Ivue__||t.__IVue__},getVue3(t){if(t!=null)return t.__vueParentComponent},waitVuePropToSet(t,e){Array.isArray(e)||(e=[e]);function n(){let o=null;return typeof t=="string"?o=d.selector(t):typeof t=="function"?o=t():t instanceof HTMLElement&&(o=t),o}e.forEach(o=>{typeof o.msg=="string"&&h.info(o.msg);function i(){let r=n();if(r==null)return {status:false,isTimeout:true,inst:null,$el:r};let s=ue.getVue(r);if(s==null)return {status:false,isTimeout:false,inst:null,$el:r};let u=o.check(s,r);return u=!!u,{status:u,isTimeout:false,inst:s,$el:r}}b.waitVueByInterval(()=>n(),()=>i().status,250,1e4).then(r=>{let s=i();if(s.status){let u=s.inst;o.set(u,s.$el);}else typeof o.failWait=="function"&&o.failWait(s.isTimeout);});});},watchVuePropChange(t,e,n,o,i){let r=b.assign({immediate:true,deep:false},o||{});return new Promise(s=>{ue.waitVuePropToSet(t,{check(u){return typeof u?.$watch=="function"},set(u){let l=null;typeof e=="function"?l=u.$watch(()=>e(u),(a,c)=>{n(u,a,c);},r):l=u.$watch(e,(a,c)=>{n(u,a,c);},r),s(l);},failWait:i});})},goToUrl(t,e,n=false){if(t==null){x.error("跳转Url: $vueNode为空"),h.error("跳转Url: $vueNode为空："+e);return}let o=ue.getVue(t);if(o==null){x.error("获取vue属性失败",{consoleLogContent:true});return}let i=o.$router,r=true;if(h.info("即将跳转URL："+e),n&&(r=false),r)window.open(e,"_blank");else {if(e.startsWith("http")||e.startsWith("//")){e.startsWith("//")&&(e=window.location.protocol+e);let s=new URL(e);if(s.origin===window.location.origin)e=s.pathname+s.search+s.hash;else {h.info("不同域名，直接本页打开，不用Router："+e),window.location.href=e;return}}h.info("$router push跳转Url："+e),i.push(e);}},hookGestureReturnByVueRouter(t){function e(){h.success("触发popstate事件"),o(true);}function n(){h.success("监听地址改变"),t.vueInst.$router.history.push(t.hash),d.on(V,"popstate",e);}async function o(i=false){if(d.off(V,"popstate",e),!t.callback(i))for(;;)if(t.vueInst.$router.history.current.hash===t.hash)h.info("后退！"),t.vueInst.$router.back(),await b.sleep(250);else return}return n(),{resumeBack:o}}},Le={init(){(w.getValue("pc-xhs-search-open-blank-btn")||w.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),w.exec(["pc-xhs-search-open-blank-btn","pc-xhs-search-open-blank-keyboard-enter"],()=>this.optimizationSearch(),t=>t.some(n=>{let o=!!w.getValue(n);return w.$data.contentConfigInitDisabledKeys.includes(n)&&(o=false,h.warn(`.exec ${n} 被禁用`)),o})),w.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function t(e,n=true){{let o=ye("#search-input");if(o){let i=o.value,r=at.getSearchUrl(i);h.info("搜索内容: "+i),window.open(r,n?"_blank":"_self");}else x.error("未找到搜索的输入框");}}d.waitNode("#search-input").then(e=>{e.placeholder="搜索小红书",w.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{d.onKeyboard(e,"keydown",(n,o,i,r)=>{n==="Enter"&&!i.length&&(h.info("按下回车键"),d.preventEvent(r),e.blur(),t());});});}),d.waitNode("#search-input + .input-button .search-icon").then(e=>{w.execMenu("pc-xhs-search-open-blank-btn",()=>{d.on(e,"click",n=>{d.preventEvent(n),h.info("点击搜索按钮"),t();},{capture:true});});});},fullWidth(){h.info("笔记宽屏");let t=w.getValue("pc-xhs-article-fullWidth-widthSize",90);return j(`
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
		`)},transformPublishTime(){h.info("转换笔记发布时间");let t=new b.LockFunction(()=>{tt(".note-content:not([data-edit-date])").forEach(n=>{let o=ue.getVue(n);if(!o)return;let i=o?._?.props?.note;if(i==null)return;let r=i.time,s=i.lastUpdateTime,u=i.ipLocation;if(typeof r=="number"){let l=[];l.push(`发布：${b.formatTime(r)}`),typeof s=="number"&&l.push(`修改：${b.formatTime(s)}`),typeof u=="string"&&b.isNotNull(u)&&l.push(u);let a=n.querySelector(".date");d.html(a,l.join("<br>")),n.setAttribute("data-edit-date","");}});});const e=b.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{t.run();}});return [()=>{e?.disconnect();}]}},we=function(t,e,n,o,i,r,s,u,l,a){const c={text:t,type:"button",attributes:{},props:{},description:e,buttonIcon:o,buttonIsRightIcon:i,buttonIconIsLoading:r,buttonType:s,buttonText:n,callback(p){typeof u=="function"&&u(p);},afterAddToUListCallBack:l};return Reflect.set(c.attributes,Fe,()=>{c.disable=false;}),c},he=function(t,e,n,o,i,r,s){const u={text:t,type:"select",description:r,attributes:{},props:{},getValue(){return this.props[F].get(e,n)},callback(l){if(l==null)return;const a=l.value;if(h.info(`选择：${l.text}`),typeof i=="function"&&i(l))return;this.props[F].set(e,a);},data:o};return Reflect.set(u.attributes,W,e),Reflect.set(u.attributes,G,n),oe.initComponentsStorageApi("select",u,{get(l,a){return w.getValue(l,a)},set(l,a){w.setValue(l,a);}}),u},Te=function(t,e,n,o,i,r,s="请至少选择一个选项",u,l){let a=[];typeof o=="function"?a=o():a=o;const c={text:t,type:"select-multiple",description:r,placeholder:s,attributes:{},props:{},getValue(){return this.props[F].get(e,n)},selectConfirmDialogConfig:u,callback(p){const f=this.props[F],m=[];p.forEach(g=>{m.push(g.value);}),h.info("多选-选择：",m),f.set(e,m);},data:a};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("select-multiple",c,{get(p,f){return w.getValue(p,f)},set(p,f){w.setValue(p,f);}}),c},st=function(t,e,n,o,i,r,s,u,l,a){const c={text:t,type:"slider",description:u,attributes:{},props:{},getValue(){return this.props[F].get(e,n)},getToolTipContent(p){return typeof s=="function"?s(p):`${p}`},callback(p,f){if(typeof r=="function"&&r(p,f))return;this.props[F].set(e,f);},min:o,max:i,step:l};return Reflect.set(c.attributes,W,e),Reflect.set(c.attributes,G,n),oe.initComponentsStorageApi("slider",c,{get(p,f){return w.getValue(p,f)},set(p,f){w.setValue(p,f);}}),c},M=function(t,e,n,o,i,r,s,u){const l={text:t,type:"switch",description:i,disabled:s,attributes:{},props:{},getValue(){return this.props[F].get(e,n)},callback(a,c){const p=!!c;h.success(`${p?"开启":"关闭"} ${t}`),this.props[F].set(e,p);},afterAddToUListCallBack:r};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,G,n),oe.initComponentsStorageApi("switch",l,{get(a,c){return w.getValue(a,c)},set(a,c){w.setValue(a,c);}}),l},De=function(t,e,n,o,i,r="",s,u){const l={text:t,type:"textarea",attributes:{},props:{},description:o,placeholder:r,disabled:s,getValue(){const c=this.props[F].get(e,n);return Array.isArray(c)?c.join(`
`):c},callback(a,c){this.props[F].set(e,c);}};return Reflect.set(l.attributes,W,e),Reflect.set(l.attributes,G,n),oe.initComponentsStorageApi("switch",l,{get(a,c){return w.getValue(a,c)},set(a,c){w.setValue(a,c);}}),l},oe={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new K.Dictionary),this.__storeApiFn}},getStorageApi(t){if(this.hasStorageApi(t))return this.$data.storeApiValue.get(t)},hasStorageApi(t){return this.$data.storeApiValue.has(t)},setStorageApi(t,e){this.$data.storeApiValue.set(t,e);},initComponentsStorageApi(t,e,n){let o;this.hasStorageApi(t)?o=this.getStorageApi(t):o=n,this.setComponentsStorageApiProperty(e,o);},setComponentsStorageApiProperty(t,e){Reflect.set(t.props,F,e);}},ct=function(t,e,n,o,i,r="",s="text",u,l){const a={text:t,type:"input",inputType:s,attributes:{},props:{},description:o,placeholder:r,afterAddToUListCallBack:u,getValue(){return this.props[F].get(e,n)},callback(c,p){c.target.validity.valid,this.props[F].set(e,p);}};return Reflect.set(a.attributes,W,e),Reflect.set(a.attributes,G,n),oe.initComponentsStorageApi("input",a,{get(c,p){return w.getValue(c,p)},set(c,p){w.setValue(c,p);}}),a};class ut{option;constructor(e){this.option=e;}getAllRule(){return te(this.option.STORAGE_API_KEY,[])}setAllRule(e){ae(this.option.STORAGE_API_KEY,e);}clearAllRule(){this.setAllRule([]);}getRule(e){const n=this.getAllRule(),o=n.findIndex(i=>i.uuid===e);if(o!==-1)return n[o]}setRule(e){const n=this.getAllRule(),o=n.findIndex(r=>r.uuid===e.uuid);let i=false;return o!==-1&&(n[o]=e,this.setAllRule(n),i=true),i}addRule(e){const n=this.getAllRule(),o=n.findIndex(r=>r.uuid===e.uuid);let i=false;return o!==-1||(n.push(e),this.setAllRule(n),i=true),i}updateRule(e){const n=this.getAllRule(),o=n.findIndex(i=>i.uuid===e.uuid);o!==-1?n[o]=e:n.push(e),this.setAllRule(n);}deleteRule(e){const n=this.getAllRule(),o=typeof e=="string"?e:e.uuid,i=n.findIndex(r=>r.uuid===o);return i!==-1?(n.splice(i,1),this.setAllRule(n),true):false}importRules(e){const n=D.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(l,a){l.close();}}},mask:{enable:true},drag:true,width:P.info.width,height:P.info.height,style:`
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}),o=n.$shadowRoot.querySelector(".btn-control[data-mode='local']"),i=n.$shadowRoot.querySelector(".btn-control[data-mode='network']"),r=n.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),s=async l=>{let a=this.getAllRule();const c=[],p=[];let f=false;for(let g=0;g<l.length;g++){const _=l[g],k=a.findIndex(I=>I.uuid===_.uuid);k!==-1?p.push({index:k,data:_}):c.push(_);}if(p.length&&await new Promise(_=>{D.alert({title:{text:"覆盖规则",position:"center"},content:{text:`存在相同的uuid的规则 ${p.length}条，是否进行覆盖？`,html:true},btn:{close:{callback(k,I){k.close(),_(false);}},ok:{text:"覆盖",callback(k,I){k.close(),_(true);}}},width:P.info.width,height:P.info.height,mask:{enable:true},drag:true});})){for(const _ of p)a[_.index]=_.data;f=true;}c.length&&(a=a.concat(c)),this.setAllRule(a);const m=`共 ${l.length} 条规则，新增 ${c.length} 条，覆盖 ${f?p.length:0} 条`;x.success(m),e?.();},u=l=>new Promise(async a=>{const c=b.toJSON(l);if(!Array.isArray(c)){h.error(c),x.error("导入失败，格式不符合（不是数组）",{consoleLogContent:true}),a(false);return}if(!c.length){x.error("导入失败，解析出的数据为空",{consoleLogContent:true}),a(false);return}await s(c),a(true);});d.on(o,"click",l=>{d.preventEvent(l),n.close();const a=d.createElement("input",{type:"file",accept:".json"});d.on(a,["propertychange","input"],c=>{if(!a.files?.length)return;const p=a.files[0],f=new FileReader;f.onload=()=>{u(f.result);},f.readAsText(p,"UTF-8");}),a.click();}),d.on(i,"click",l=>{d.preventEvent(l),n.close();const a=D.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(f,m){f.close();}},ok:{text:"导入",callback:async(f,m)=>{const g=f.text;if(b.isNull(g)){x.error("请填入完整的url");return}const _=x.loading("正在获取配置..."),k=await Y.get(g,{allowInterceptConfig:false});if(_.close(),!k.status){h.error(k),x.error("获取配置失败",{consoleLogContent:true});return}await u(k.data.responseText)&&f.close();}},cancel:{enable:false}},mask:{enable:true},drag:true,width:P.info.width,height:"auto"}),c=a.$shadowRoot.querySelector("input"),p=a.$shadowRoot.querySelector(".pops-prompt-btn-ok");d.on(c,["input","propertychange"],f=>{d.val(c)===""?d.attr(p,"disabled","true"):d.removeAttr(p,"disabled");}),d.onKeyboard(c,"keydown",(f,m,g)=>{f==="Enter"&&g.length===0&&d.val(c)!==""&&d.emit(p,"click");}),d.emit(c,"input");}),d.on(r,"click",async l=>{d.preventEvent(l),n.close();const a=await b.getClipboardInfo();if(a.error!=null){x.error(a.error.toString());return}if(a.content.trim()===""){x.warning("获取到的剪贴板内容为空");return}await u(a.content);});}exportRules(e="rule.json"){const n=this.getAllRule(),o=new Blob([JSON.stringify(n,null,4)]),i=globalThis.URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>{globalThis.URL.revokeObjectURL(i);},1500);}}class dt{option;constructor(e){this.option=e;}async showView(){let e=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
                    align-items: center;
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
            `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),n=e.$shadowRoot.querySelector(".rule-form-container");e.$shadowRoot.querySelector("input[type=submit]");let o=e.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());o.appendChild(i);const r=async()=>{(await this.option.onsubmit(n,await this.option.data())).success&&(e.close(),await this.option.dialogCloseCallBack(true));};}}class pt{option;$data={isFilteredData:[]};constructor(e){this.option=e;}showView(){let e=D.alert({title:{text:this.option.title,position:"center"},content:{text:`
                <div class="filter-container"></div>
                `},btn:{ok:{text:"关闭",type:"default"}},drag:true,mask:{enable:true},width:window.innerWidth>500?"350px":"80vw",height:window.innerHeight>500?"300px":"70vh",style:`
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `}),n=e.$shadowRoot.querySelector(".filter-container"),o=document.createDocumentFragment();this.option.filterOption.forEach(i=>{let r=d.createElement("button",{innerText:i.name},{type:"button"}),s=async()=>{this.$data.isFilteredData=[],(await this.option.getAllRuleInfo()).forEach(async l=>{await i.filterCallBack(l.data)?d.show(l.$el,false):(d.hide(l.$el,false),this.$data.isFilteredData.push(l.data));}),typeof this.option.execFilterCallBack=="function"&&await this.option.execFilterCallBack(),e.close();};d.on(r,"click",async u=>{d.preventEvent(u),!(typeof i.callback=="function"&&!await i.callback(u,s))&&await s();}),o.appendChild(r);}),n.appendChild(o);}getFilteredData(){return this.$data.isFilteredData}}class ft{option;constructor(e){this.option=e;}async showView(e){let n=D.confirm({title:{text:this.option.title,position:"center"},content:{text:`
                    <div class="rule-view-container">
                    </div>
                    `,html:true},btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async s=>{this.showEditView(false,await this.option.getAddData(),n.$shadowRoot);}},close:{enable:true,callback(s){n.close();}},cancel:{enable:this.option?.bottomControls?.filter?.enable||false,type:"default",text:"过滤",callback:async(s,u)=>{if(typeof this.option?.bottomControls?.filter?.callback=="function"){let c=await this.option.bottomControls.filter.callback();if(typeof c=="boolean"&&!c)return}let l=()=>Array.from(n.$shadowRoot.querySelectorAll(".rule-view-container .rule-item")),a=u.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");if(d.text(a).includes("取消")){let c=await this.option?.bottomControls?.filter?.cancelFilterCallback?.({$button:a,getAllRuleElement:l});if(typeof c=="boolean"&&!c)return;l().forEach(p=>{d.show(p,false);}),d.text(a,"过滤");}else {let c=new pt({title:this.option.bottomControls?.filter?.title??"过滤规则",filterOption:this.option.bottomControls?.filter?.option||[],execFilterCallBack:async()=>{d.text(a,"取消过滤"),await this.option.bottomControls?.filter?.execFilterCallBack?.();const p=c.getFilteredData();p.length&&d.text(a,`取消过滤(${p.length})`);},getAllRuleInfo:()=>l().map(p=>({data:this.parseRuleItemElement(p).data,$el:p}))});c.showView();}}},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:s=>{let u=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async l=>{if(h.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(n.$shadowRoot),this.clearContent(n.$shadowRoot),u.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            ${D.config.cssText.panelCSS}
            
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
            `}),o=await this.option.data(),i=false,r=0;for(let s=0;s<o.length;s++){let u=o[s],l=await this.appendRuleItemElement(n.$shadowRoot,u),a=true;typeof e=="function"?a=e(u):typeof e=="number"&&!isNaN(e)&&(a=await this.option.bottomControls?.filter?.option[e]?.filterCallBack(u)??a),a||(i=true,d.hide(l,false),r++);}if(i){let s=n.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");d.text(s,`取消过滤${r?`(${r})`:""}`);}}showEditView(e,n,o,i,r,s){let u=async a=>{if(a){if(typeof s=="function"){let c=await this.option.getData(n);s(c);}}else if(e||await this.option.deleteData(n),typeof r=="function"){let c=await this.option.getData(n);r(c);}};new dt({title:e?"编辑":"添加",data:()=>n,dialogCloseCallBack:u,getView:async a=>await this.option.itemControls.edit.getView(a,e),btn:{ok:{enable:true,text:e?"修改":"添加"},cancel:{callback:async(a,c)=>{a.close(),await u(false);}},close:{callback:async(a,c)=>{a.close(),await u(false);}}},onsubmit:async(a,c)=>{let p=await this.option.itemControls.edit.onsubmit(a,e,c);return p.success?e?(x.success("修改成功"),o&&await this.updateRuleItemElement(p.data,i,o)):o&&await this.appendRuleItemElement(o,p.data):e&&h.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(e){let n=e.querySelector(".rule-view-container"),o=e.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");return {$container:n,$deleteBtn:o}}parseRuleItemElement(e){let n=e.querySelector(".rule-controls-enable"),o=n.querySelector(".pops-panel-switch"),i=n.querySelector(".pops-panel-switch__input"),r=n.querySelector(".pops-panel-switch__core"),s=e.querySelector(".rule-controls-edit"),u=e.querySelector(".rule-controls-delete");return {$enable:n,$enableSwitch:o,$enableSwitchInput:i,$enableSwitchCore:r,$edit:s,$delete:u,data:Reflect.get(e,"data-rule")}}async createRuleItemElement(e,n){let o=await this.option.getDataItemName(e),i=d.createElement("div",{className:"rule-item",innerHTML:`
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
			`});Reflect.set(i,"data-rule",e);let r="pops-panel-switch-is-checked";const{$enable:s,$enableSwitch:u,$enableSwitchCore:l,$enableSwitchInput:a,$delete:c,$edit:p}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(d.on(l,"click",async f=>{let m=false;u.classList.contains(r)?(u.classList.remove(r),m=false):(u.classList.add(r),m=true),a.checked=m,await this.option.itemControls.enable.callback(e,m);}),await this.option.itemControls.enable.getEnable(e)&&u.classList.add(r)):s.remove(),this.option.itemControls.edit.enable?d.on(p,"click",f=>{d.preventEvent(f),this.showEditView(true,e,n,i,m=>{e=null,e=m;});}):p.remove(),this.option.itemControls.delete.enable?d.on(c,"click",f=>{d.preventEvent(f);let m=D.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async g=>{h.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(e)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(n),m.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):c.remove(),i}async appendRuleItemElement(e,n){let{$container:o}=this.parseViewElement(e),i=[],r=Array.isArray(n)?n:[n];for(let s=0;s<r.length;s++){let u=r[s],l=await this.createRuleItemElement(u,e);o.appendChild(l),i.push(l);}return await this.updateDeleteAllBtnText(e),i}async updateRuleContaienrElement(e){this.clearContent(e);const{$container:n}=this.parseViewElement(e);let o=await this.option.data();await this.appendRuleItemElement(e,o),await this.updateDeleteAllBtnText(e);}async updateRuleItemElement(e,n,o){let i=await this.createRuleItemElement(e,o);n.after(i),n.remove();}clearContent(e){const{$container:n}=this.parseViewElement(e);d.html(n,"");}setDeleteBtnText(e,n,o=false){const{$deleteBtn:i}=this.parseViewElement(e);o?d.html(i,n):d.text(i,n);}async updateDeleteAllBtnText(e){let n=await this.option.data();this.setDeleteBtnText(e,`清空所有(${n.length})`);}}const ht={__ajaxHooker:null,get ajaxHooker(){return this.__ajaxHooker==null&&(this.__ajaxHooker=b.ajaxHooker()),this.__ajaxHooker}};class mt{parseInfoDictData(e,n=false){let o=e?.note_card,i=e.id,r=o.display_title,s=!!o?.interact_info?.liked,u=0,l=e?.note_card?.interact_info?.liked_count;typeof l=="string"&&(u=parseInt(l),isNaN(u)&&(u=0));let a=o?.user?.nick_name||o?.user?.nickname,c=o?.user?.user_id,p=o?.type==="video",f=o?.video?.capa?.duration||0;return {articleId:i,display_title:r,isLike:s,liked_count:u,nick_name:a,user_id:c,isVideo:p,videoDuration:f}}checkFilterWithRule(e){if(e.infoValue==null||e.ruleValue==null)return  false;if(typeof e.infoValue=="string"){if(e.infoValue.match(e.ruleValue))return  true}else if(typeof e.infoValue=="object"){if(Array.isArray(e.infoValue)&&e.infoValue.find(o=>typeof o=="string"&&e.ruleValue!=null?!!o.match(e.ruleValue):false))return  true}else if(typeof e.infoValue=="number"){if(typeof e.ruleValue=="string"){let n=e.ruleValue.trim(),o=n.match(/(\d+)/);if(!o)return h.warn("过滤器-解析比较大小的数字失败: ",e),false;let i=Number(o[1]);if(n.startsWith(">")){if(n.startsWith(">=")){if(e.infoValue>=i)return  true}else if(e.infoValue>i)return  true}else if(n.startsWith("<")){if(n.startsWith("<=")){if(e.infoValue<=i)return  true}else if(e.infoValue<i)return  true}else if(n.startsWith("=")){if(e.infoValue===i)return  true}else return h.warn("视频过滤器-未经允许的比较符号: ",e),false}}else if(typeof e.infoValue=="boolean"&&typeof e.ruleValue=="string"){let n=e.ruleValue.trim();return e.infoValue.toString()===n}return  false}checkInfoIsFilter(e,n){let o=this.parseInfoDictData(n),i=false,r=null;e:for(let s=0;s<e.length;s++){const u=e[s],l=Array.isArray(u.data.ruleName)?u.data.ruleName:[u.data.ruleName];for(let a=0;a<l.length;a++){const c=l[a];if(!Reflect.has(o,c))continue;let p=c,f=o[p],m={infoKey:p,infoValue:f,ruleKey:u.data.ruleName,ruleValue:u.data.ruleValue};if(i=this.checkFilterWithRule(m),i)if(Array.isArray(u.dynamicData)&&u.dynamicData.length){let g=[];for(let _=0;_<u.dynamicData.length;_++){const k=u.dynamicData[_];let I=k.ruleName,T=o[I],C={infoKey:I,infoValue:T,ruleKey:k.ruleName,ruleValue:k.ruleValue};g.push(C);let R=this.checkFilterWithRule(C);if(i=i&&R,!i)break}i&&h.success([`视频过滤器-多组 ==> ${u.name}`,o,m,g,n,u]);}else h.success([`视频过滤器 ==> ${u.name}`,o,m,n,u]);if(i){r=u;break e}}}return {isFilter:i,matchedFilterOption:r,transformInfo:o,info:n}}removeArticle(...e){if(e.length===1){let n=e[0];n!=null&&n instanceof Element&&n.remove();}else if(e.length===2){let n=e[0],o=e[1];if(typeof o=="number"){let i=n[o];i!=null&&i instanceof Element&&i.remove(),n.splice(o,1);}}}}const de={$key:{ENABLE_KEY:"shieldVideo-exec-network-enable"},$data:{isFilterAwemeInfoList:new K.Dictionary,articleInfoMap:new K.Dictionary,__videoFilterRuleStorage:null,get videoFilterRuleStorage(){return this.__videoFilterRuleStorage==null&&(this.__videoFilterRuleStorage=new ut({STORAGE_API_KEY:"xhs-article-filter-rule"})),this.__videoFilterRuleStorage},get isReverse(){return w.getValue("xhs-article-filter-only-show-filtered-video")}},init(){this.execFilter();},execFilter(){w.execMenuOnce(this.$key.ENABLE_KEY,async()=>{h.info("执行笔记过滤器");let t=new mt,e=i=>{if(this.$data.isReverse&&(i.isFilter=!i.isFilter,typeof i.transformInfo.articleId=="string"&&i.matchedFilterOption)){let r=this.$data.isFilterAwemeInfoList.get(i.transformInfo.articleId)||[];r.push(i.matchedFilterOption),this.$data.isFilterAwemeInfoList.set(i.transformInfo.articleId,r);}typeof i.transformInfo.articleId=="string"&&this.$data.articleInfoMap.set(i.transformInfo.articleId,{articleInfo:i.info,transformArticleInfo:i.transformInfo});},n=i=>{if(!w.getValue(this.$key.ENABLE_KEY))return [];let r=this.$data.videoFilterRuleStorage.getAllRule();if(!r.length)return [];let s=Array.isArray(i)?i:[i];return r.filter(l=>l.enable&&(l.data.scope.includes("all")||Array.from(s).findIndex(a=>l.data.scope.includes(a))!==-1))},o=(i,r)=>{r.response=s=>{let u=n(i);if(!u.length)return;let l=b.toJSON(s.responseText),a=l?.data?.items;if(Array.isArray(a)){for(let c=0;c<a.length;c++){let p=a[c]||{},f=t.checkInfoIsFilter(u,p);e(f),f.isFilter&&t.removeArticle(a,c--);}s.responseText=JSON.stringify(l);}};};ht.ajaxHooker.hook(i=>{let r=B.fixUrl(i.url);new URL(r).pathname.startsWith("/api/sns/web/v1/homefeed")&&o("xhr-explore",i);});});},getTemplateData(){return {uuid:b.generateUUID(),enable:true,name:"",data:{scope:[],ruleName:"display_title",ruleValue:"",remarks:""},dynamicData:[]}},showView(){this.getRuleViewInstance().showView();},getRuleViewInstance(){const t=this;let e=D.config.PanelHandlerComponents();function n(i){return {get(r,s){return i[r]??s},set(r,s){i[r]=s;}}}return new ft({title:"笔记过滤器",data:()=>this.$data.videoFilterRuleStorage.getAllRule(),getAddData:()=>this.getTemplateData(),getDataItemName:i=>i.name,updateData:i=>this.$data.videoFilterRuleStorage.setRule(i),deleteData:i=>this.$data.videoFilterRuleStorage.deleteRule(i),getData:i=>this.$data.videoFilterRuleStorage.getAllRule().find(u=>u.uuid===i.uuid)??i,itemControls:{enable:{enable:true,getEnable(i){return i.enable},callback:(i,r)=>{i.enable=r,this.$data.videoFilterRuleStorage.setRule(i);}},edit:{enable:true,getView:(i,r)=>{let s=document.createDocumentFragment();r||(i=this.getTemplateData());let u=M("启用","enable",true);Reflect.set(u.props,F,n(i));let l=e.createSectionContainerItem_switch(u).$el,a=ct("规则名称","name","","",void 0,"必填");Reflect.set(a.props,F,n(i));let c=e.createSectionContainerItem_input(a).$el,p=Te("作用域","scope",[],[{text:"所有",value:"all"},{text:"发现",value:"xhr-explore"}].map(y=>({...y,value:y.value})),void 0,"选择需要在xxx上生效的作用域");Reflect.set(p.props,F,n(i.data));let f=e.createSectionContainerItem_select_multiple(p).$el,m=["display_title","isLike","liked_count","nick_name","user_id","isVideo","videoDuration"],g=y=>{let E=Array.isArray(y.ruleName)?y.ruleName:[y.ruleName],L=Te("属性名","ruleName",E,m.map(H=>({text:H,value:H})),void 0,"选择需要的属性名 ");Reflect.set(L.props,F,n(y));let $=e.createSectionContainerItem_select_multiple(L).$el,A=De("属性值","ruleValue","","如果是字符串，可正则，注意转义");Reflect.set(A.props,F,n(y));let S=e.createSectionContainerItem_textarea(A).$el,N=De("备注","remarks","","");Reflect.set(N.props,F,n(y));let O=e.createSectionContainerItem_textarea(N).$el;return {$ruleName:$,$ruleValue:S,$remarks:O}},_=d.createElement("div",{className:"rule-form-ulist-dynamic",innerHTML:`
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`}),k=_.querySelector(".rule-form-ulist-dynamic__inner"),I=_.querySelector(".pops-panel-button"),T=(y={ruleName:[],ruleValue:"",remarks:""})=>{let E=d.createElement("div",{className:"rule-form-ulist-dynamic__inner-container",innerHTML:`
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`}),L=E.querySelector(".dynamic-control-delete");d.on(L,"click",O=>{if(d.preventEvent(O),E.remove(),Array.isArray(i.dynamicData)){let H=i.dynamicData.findIndex(z=>z==y);H!==-1&&i.dynamicData.splice(H,1);}});let $=E.querySelector(".dynamic-forms"),{$ruleName:A,$ruleValue:S,$remarks:N}=g(y);$.appendChild(A),$.appendChild(S),$.appendChild(N),k.appendChild(E);};if(d.on(I,"click",y=>{d.preventEvent(y),T();}),Array.isArray(i.dynamicData))for(let y=0;y<i.dynamicData.length;y++){const E=i.dynamicData[y];T(E);}let{$ruleName:C,$ruleValue:R,$remarks:v}=g(i.data);return s.append(l,c,f,C,R,v,_),s},onsubmit:(i,r,s)=>{let u=i.querySelectorAll(".rule-form-ulist > li"),l=this.getTemplateData();return r&&(l.uuid=s.uuid),u.forEach(a=>{let c=Reflect.get(a,e.$data.nodeStoreConfigKey);if(!c)return;let p=Reflect.get(c,"attributes");if(!p)return;let f=Reflect.get(a,F),m=Reflect.get(p,W),g=Reflect.get(p,G),_=f.get(m,g);Reflect.has(l,m)?Reflect.set(l,m,_):Reflect.has(l.data,m)?Reflect.set(l.data,m,_):h.error(`${m}不在数据中`);}),i.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(a=>{let c={};a.querySelectorAll(".dynamic-forms > li").forEach(p=>{let f=Reflect.get(p,e.$data.nodeStoreConfigKey);if(!f)return;let m=Reflect.get(f,"attributes");if(!m)return;let g=Reflect.get(p,F),_=Reflect.get(m,W),k=Reflect.get(m,G),I=g.get(_,k);Reflect.set(c,_,I);}),l.dynamicData.push(c);}),l.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:l}):l.data.scope.length===0?(x.error("请选择作用域"),{success:false,data:l}):l.data.ruleName.length===0?(x.error("请选择属性名"),{success:false,data:l}):l.data.ruleValue.trim()===""?(x.error("属性值不能为空"),{success:false,data:l}):r?{success:t.$data.videoFilterRuleStorage.setRule(l),data:l}:{success:t.$data.videoFilterRuleStorage.addRule(l),data:l}},style:`
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
                    `,width:()=>window.innerWidth>700?"700px":"88vw"},delete:{enable:true,deleteCallBack:i=>t.$data.videoFilterRuleStorage.deleteRule(i)}},bottomControls:{filter:{enable:true,option:[{name:"过滤-已启用",filterCallBack(i){return i.enable}},{name:"过滤-未启用",filterCallBack(i){return !i.enable}}]},clear:{enable:true,callback:()=>{t.$data.videoFilterRuleStorage.clearAllRule();}}}})}},me={init(){de.init(),w.execMenuOnce("pc-xhs-hook-vue",()=>{_e.hookVue();}),w.execMenuOnce("pc-xhs-allowCopy",()=>me.allowPCCopy()),w.execMenuOnce("pc-xhs-open-blank-article",()=>me.openBlankArticle()),lt.init(),w.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>Le.transformPublishTime()),ve.isArticle()&&(h.info("Router: 笔记页面"),Le.init());},allowPCCopy(){h.success("允许复制文字");const t=e=>{d.preventEvent(e);let n=V.getSelection();return n?b.copy(n.toString()):h.error("未选中任何内容"),false};return d.on(V,"copy",t,{capture:true}),{destory(){d.off(V,"copy",t,{capture:true});}}},openBlankArticle(){h.success("新标签页打开文章");let t=(e,n)=>{if(!w.getValue("pc-xhs-open-blank-article"))return;d.preventEvent(e);let i=n.querySelector("a.cover[href]")?.href;if(i){h.info("跳转文章: "+i);let r=new URL(i);r.pathname=r.pathname.replace(/^\/user\/profile\/[a-z0-9A-Z]+\//i,"/discovery/item/"),i=r.toString(),window.open(i,"_blank");}else x.error("未找到文章链接");};return d.on(document,"click",".feeds-container .note-item",t,{capture:true}),{destory(){d.off(document,"click",".feeds-container .note-item",t,{capture:true});}}}},gt={id:"xhs-panel-config-common",title:"通用",views:[{type:"container",text:"",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[he("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),he("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),M("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[M("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),M("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",views:[{text:"",type:"container",views:[M("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),M("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[M("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),M("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),M("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),M("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{type:"deepMenu",text:"笔记过滤器",views:[{text:'<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',type:"container",views:[M("启用","shieldVideo-exec-network-enable",true,void 0,"开启后以下功能才会生效"),M("仅显示被过滤的笔记","xhs-article-filter-only-show-filtered-video",false,void 0,"只会显示过滤规则命中的笔记"),we("笔记过滤规则","可过滤笔记","自定义",void 0,false,false,"primary",()=>{de.showView();})]},{type:"container",text:"",views:[we("数据导入","导入自定义规则数据","导入",void 0,false,false,"primary",()=>{de.$data.videoFilterRuleStorage.importRules();}),we("数据导出","导出自定义规则数据","导出",void 0,false,false,"primary",()=>{de.$data.videoFilterRuleStorage.exportRules(Oe+"-视频过滤规则.json");})]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[M("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]}]}]},bt={id:"xhs-panel-config-article",title:"笔记",views:[{type:"container",text:"功能",views:[M("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>")]},{text:"笔记宽屏",type:"container",views:[M("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),st("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(t,e)=>{let n=ye("#noteContainer");if(!n){h.error("未找到笔记容器");return}n.style.width=`${e}vw`;},t=>`${t}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},yt={id:"little-red-book-panel-config-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[he("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],t=>{h.info("设置当前Qmsg弹出位置"+t.text);},"Toast显示在页面九宫格的位置"),he("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),M("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[M("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),M("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),M("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]}]}]},xt={id:"little-red-book-panel-config-home",title:"主页",views:[{text:"",type:"container",views:[{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[M("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},wt={id:"little-red-book-panel-config-note",title:"笔记",views:[{text:"",type:"container",views:[{text:"视频笔记",type:"deepMenu",views:[{text:"",type:"container",views:[M("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),M("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),M("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[M("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),M("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),M("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[M("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),M("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]};j(`
.qmsg svg.animate-turn {
    fill: none;
}
`);ne.addContentConfig([gt,bt]);ne.addContentConfig([yt,xt,wt]);const Pe=be.getMenuOption();Pe.text="⚙ PC-设置";be.updateMenuOption(Pe);be.addMenuOption({key:"show_mobile_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(t){return t},callback:()=>{w.showPanel(ne.getConfig(1),`${Oe}-移动端设置`);}});w.init();let He=b.isPhone(),re="change_env_set",Q=te(re);Ne.add({key:re,text:`⚙ 自动: ${He?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(t){return Q==null?t:t+` 手动: ${Q==1?"移动端":Q==2?"PC端":"未知"}`},callback:()=>{let t=[0,1,2],e=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!e)return;let n=parseInt(e);if(isNaN(n)){x.error("输入的不是规范的数字");return}if(!t.includes(n)){x.error("输入的值必须是0或1或2");return}n==0?le(re):ae(re,n);}});Q!=null?(h.info(`手动判定为${Q===1?"移动端":"PC端"}`),Q==1?Ce.init():Q==2?me.init():(x.error("意外，手动判定的值不在范围内"),le(re))):He?(h.info("自动判定为移动端"),Ce.init()):(h.info("自动判定为PC端"),me.init());

})(DOMUtils, pops, Utils, Qmsg, Viewer);