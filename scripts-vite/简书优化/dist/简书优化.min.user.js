// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.4.2
// @author       WhiteSevs
// @description  支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.13/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
// @connect      *
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

(function (G, ue, de, S) {
  'use strict';

  const Ve=`.download-app-guidance,
.call-app-btn,
.collapse-tips,
.note-graceful-button,
.app-open,
.header-wrap,
.recommend-wrap.recommend-ad,
.call-app-Ad-bottom,
#recommended-notes p.top-title span.more,
#homepage .modal,
button.index_call-app-btn,
span.note__flow__download,
.download-guide,
#footer,
.comment-open-app-btn-wrap,
.nav.navbar-nav + div,
.self-flow-ad,
#free-reward-panel,
div[id*='AdFive'],
#index-aside-download-qrbox,
.baidu-app-download-2eIkf_1,
/* 底部的"小礼物走一走，来简书关注我"、赞赏支持和更多精彩内容，就在简书APP */
div[role="main"] > div > section:first-child > div:nth-last-child(2),
/* 它的内部是script标签，可能影响部分评论之间的高度问题 */
div.adad_container ,
/* 顶部导航栏的【下载App】 */
#__next nav a[href*="navbar-app"] {
  display: none !important;
}
body.reader-day-mode.normal-size {
  overflow: auto !important;
}
.collapse-free-content {
  height: auto !important;
}
.copyright {
  color: #000 !important;
}
#note-show .content .show-content-free .collapse-free-content:after {
  background-image: none !important;
}
footer > div > div {
  justify-content: center;
}
/* 修复底部最后编辑于：。。。在某些套壳浏览器上的错位问题 */
#note-show .content .show-content-free .note-meta-time {
  margin-top: 0px !important;
}
`;var ke=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,Y=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,me=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,X=typeof GM_getValue<"u"?GM_getValue:void 0,Z=typeof GM_info<"u"?GM_info:void 0,te=typeof GM_listValues<"u"?GM_listValues:void 0,$e=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,Ee=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,se=typeof GM_setValue<"u"?GM_setValue:void 0,ye=typeof GM_setValues<"u"?GM_setValues:void 0,Re=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ae=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,R=typeof unsafeWindow<"u"?unsafeWindow:void 0,Le=window;const D={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&G.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),G.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),re(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof me=="function"?me(e.keyName):null;return typeof t=="string"&&t?re(t):D.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{G.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(a=>{o(a);}).catch(a=>{f.error("读取剪贴板内容失败👉",a),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(o);}).catch(a=>{f.error("申请剪贴板权限失败，尝试直接读取👉",a.message??a.name??a.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,a=n-t,i=t,r=async p=>{const s=await e(p);if(typeof s=="boolean"&&s||p){y.workerClearTimeout(o);return}if(i+=t,i>a){r(true);return}o=y.workerSetTimeout(()=>{r(false);},t);};r(false);},findParentNode(e,t,n){if(n){let o=G.closest(e,n);if(o)return o.querySelector(t)}else return G.matches(e,t)?e:G.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(a,i)=>i===void 0?n:i,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof R=="object"&&R!=null?R:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();const t=function(n){return n<10?`0${n}`:n};if(e<60)return `0:${t(e)}`;if(e>=60&&e<3600){const n=Math.floor(e/60),o=e%60;return `${n}:${t(o)}`}else {const n=Math.floor(e/3600),o=Math.floor(e/60)%60,a=e%60;return `${n}:${t(o)}:${t(a)}`}},formatTimeStamp(e,t){if(typeof e=="number"&&e<1e12){const p=String(Date.now()).length-String(e).length;e=e*Math.pow(10,p);}let n=e,o=new Date(typeof e=="string"?e.replace(/-/g,"/"):e),i=new Date(t??Date.now()).getTime()-o.getTime(),r=Math.floor(i/(24*3600*1e3));if(r>0)r>7?n=y.formatTime(o.getTime()):n=r+"天前";else {let p=i%864e5,s=Math.floor(p/(3600*1e3));if(s>0)n=s+"小时前";else {let c=p%36e5,C=Math.floor(c/(60*1e3));if(C>0)n=C+"分钟前";else {let w=c%6e4;n=Math.round(w/1e3)+"秒前";}}}return n}},ne="GM_Panel",De="data-init",oe="data-key",ae="data-default-value",Te="data-init-more-value",Ie="data-plugin-search-config",ee="data-storage-api",j={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},J={setting:{get width(){return j.width<550?"88vw":j.width<700?"550px":"700px"},get height(){return j.height<450?"70vh":j.height<550?"450px":"550px"}},settingMiddle:{get width(){return j.width<350?"88vw":"350px"}},info:{get width(){return j.width<350?"88vw":"350px"},get height(){return j.height<250?"88vh":"250px"}}},ie={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new y.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(i,r)=>{typeof r!="string"&&(r=D.toStr(r));const p=new Blob([r]),s=globalThis.URL.createObjectURL(p);d.createElement("a",{href:s,download:i}).click(),y.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(s);},500);},o=()=>{const i=w=>{const u=q.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(A,v){A.close();}}},drag:true,mask:{enable:true},width:J.info.width,height:J.info.height,style:`
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
          }`}),b=u.$shadowRoot.querySelector(".btn-control[data-mode='local']"),$=u.$shadowRoot.querySelector(".btn-control[data-mode='network']"),U=u.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),I=async A=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof te=="function"?typeof Y=="function"?(te().forEach(l=>{Y(l);}),S.success("已清空脚本存储的配置")):S.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):S.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof ye=="function"?ye(A):Object.keys(A).forEach(l=>{const h=A[l];se(l,h);}),S.success("配置导入完毕");},P=A=>new Promise(async v=>{const M=y.toJSON(A);Object.keys(M).length===0?S.warning("解析为空配置，不导入"):await I(M),v(true);});d.on(b,"click",A=>{d.preventEvent(A),u.close();const v=d.createElement("input",{type:"file",accept:".json"});d.on(v,["propertychange","input"],M=>{if(!v.files?.length)return;const l=v.files[0],h=new FileReader;h.onload=()=>{P(h.result);},h.readAsText(l,"UTF-8");}),v.click();}),d.on($,"click",A=>{d.preventEvent(A),u.close();const v=q.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(h,E){h.close();}},ok:{text:"导入",callback:async(h,E)=>{const _=h.text;if(y.isNull(_)){S.error("请填入完整的url");return}const g=S.loading("正在获取配置..."),V=await he.get(_,{allowInterceptConfig:false});if(g.close(),!V.status){f.error(V),S.error("获取配置失败",{consoleLogContent:true});return}await P(V.data.responseText)&&h.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:J.info.width,height:"auto"}),M=v.$shadowRoot.querySelector("input"),l=v.$shadowRoot.querySelector(".pops-prompt-btn-ok");d.on(M,["input","propertychange"],h=>{d.val(M)===""?d.attr(l,"disabled","true"):d.removeAttr(l,"disabled");}),d.onKeyboard(M,"keydown",(h,E,_)=>{h==="Enter"&&_.length===0&&d.val(M)!==""&&d.emit(l,"click");}),d.emit(M,"input");}),d.on(U,"click",async A=>{d.preventEvent(A),u.close();let v=await D.getClipboardText();if(v.trim()===""){S.warning("获取到的剪贴板内容为空");return}await P(v);});},r=(w=`${ce}_panel-setting-${y.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,u)=>{const b=q.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(I,P){I.close();}}},drag:true,mask:{enable:true},width:J.info.width,height:J.info.height,style:`
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
          }`}),$=b.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),U=b.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");d.on($,"click",I=>{d.preventEvent(I);try{n(w,u),b.close();}catch(P){S.error(P.toString(),{consoleLogContent:true});}}),d.on(U,"click",async I=>{await y.copy(u)?(S.success("复制成功"),b.close()):S.error("复制失败");});},s=q.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(w,u){i();}},cancel:{enable:true,text:"导出",callback(w,u){r(void 0,C);}}},width:j.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof te=="function")te().forEach(u=>{const b=X(u);Reflect.set(c,u,b);});else {S.warning("不支持函数GM_listValues，仅导出菜单配置");const w=X(ne);Reflect.set(c,ne,w);}const C=D.toStr(c);s.value=C;},a=()=>{let i=Z?.script?.supportURL||Z?.script?.namespace;typeof i=="string"&&y.isNotNull(i)&&window.open(i,"_blank");};return [{id:"script-version",title:`版本：${Z?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(i){new Fe(i.$asideLiElement).on("tap",function(p){clearTimeout(t),t=void 0,e?(e=false,o()):(t=setTimeout(()=>{e=false,a();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},Oe={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{x.showPanel(ie.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){D.isTopWindow()&&we.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Pe{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key can not be empty string");this.storageKey=n;}else throw new TypeError("key must be a string");this.listenerData=new de.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const n=this.callbacks[t];n(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=X(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const n=ke(this.storageKey,(o,a,i)=>{this.cacheData=null,this.cacheData=i;});return this.callbacks.push(()=>{Ee(n);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,se(this.storageKey,t);}set(t,n){const o=this.get(t),a=this.getLocalValue();Reflect.set(a,t,n),this.setLocalValue(a),this.emitValueChangeListener(t,n,o);}get(t,n){const o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){this.destory(),Y(this.storageKey);}addValueChangeListener(t,n){const o=Math.random(),a=this.listenerData.get(t)||[];return a.push({id:o,key:t,callback:n}),this.listenerData.set(t,a),o}removeValueChangeListener(t){let n=false;for(const[o,a]of this.listenerData.entries()){for(let i=0;i<a.length;i++){const r=a[i];(typeof t=="string"&&r.key===t||typeof t=="number"&&r.id===t)&&(a.splice(i,1),i--,n=true);}this.listenerData.set(o,a);}return n}async emitValueChangeListener(...t){const[n,o,a]=t;if(!this.listenerData.has(n))return;const i=this.listenerData.get(n);for(let r=0;r<i.length;r++){const p=i[r];if(typeof p.callback=="function"){let s,c;t.length===1||(t.length===2?s=o:t.length===3&&(s=o,c=a)),await p.callback(n,s,c);}}}}const N=new Pe(ne),x={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new y.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new y.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new y.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new y.Dictionary),this.__onceExecData},get scriptName(){return ce},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:ne,attributeKeyName:oe,attributeDefaultValueName:ae},init(){this.initContentDefaultValue(),Oe.init();},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const a=o.attributes,i=a[De];if(typeof i=="function"){const c=i();if(typeof c=="boolean"&&!c)return}const r=new Map,p=a[oe];if(p!=null){const c=a[ae];r.set(p,c);}const s=a[Te];if(typeof s=="object"&&s&&Object.keys(s).forEach(c=>{const C=s[c];r.set(c,C);}),!r.size){f.warn("请先配置键",o);return}if(o.type==="switch"){const c=typeof o.disabled=="function"?o.disabled():o.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[c,C]of r.entries())this.setDefaultValue(c,C);},t=o=>{for(let a=0;a<o.length;a++){const i=o[a];e(i);const r=i.views;r&&Array.isArray(r)&&t(r);}},n=[...ie.getAllContentConfig()];for(let o=0;o<n.length;o++){const a=n[o];if(!a.views)continue;const i=a.views;i&&Array.isArray(i)&&t(i);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&f.warn("该key已存在，初始化默认值失败: ",{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){N.set(e,t);},getValue(e,t){const n=N.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){N.delete(e);},hasKey(e){return N.has(e)},addValueChangeListener(e,t,n){const o=N.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const a=this.getValue(e);n?.immediate?t(e,a,a):n?.immediateAll&&x.emitMenuValueChange(e,a,a);}return o},removeValueChangeListener(e){N.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){N.emitValueChangeListener(e,t,n);},async exec(e,t,n,o=true){const a=this;let i;typeof e=="string"||Array.isArray(e)?i=()=>e:i=e;let r=false;const p=i();let s=[];Array.isArray(p)?(r=true,s=p):s.push(p);const c=s.find(l=>!this.$data.contentConfigInitDefaultValue.has(l));if(c){f.warn(`${c} 键不存在`);return}const C=JSON.stringify(s);if(o&&this.$data.onceExecMenuData.has(C))return this.$data.onceExecMenuData.get(C);let w=[];const u=[];let b=[];const $=(l,h)=>{const E=[],_=[];let g=[];if(Array.isArray(h))g=g.concat(h);else {const m=k=>{if(typeof k=="object"&&k!=null)if(k instanceof Element)g.push(k);else {const{$css:O,destory:F}=k;O!=null&&(Array.isArray(O)?g=g.concat(O):g.push(O)),typeof F=="function"&&g.push(F);}else g.push(k);};if(h!=null&&Array.isArray(h))for(const k of h)m(k);else m(h);}const V=m=>{if(m!=null){if(m instanceof Element){E.push(m);return}if(typeof m=="function"){_.push(m);return}}};for(const m of g){const k=V(m);if(typeof k=="boolean"&&!k)break;if(Array.isArray(m))for(const O of m){const F=V(O);if(typeof F=="boolean"&&!F)break}}I(),P(),l&&(w=w.concat(E),b=b.concat(_));},U=l=>!!this.getValue(l),I=()=>{for(let l=0;l<w.length;l++)w[l]?.remove(),w.splice(l,1),l--;},P=()=>{for(let l=0;l<b.length;l++){const h=b[l];h(),b.splice(l,1),l--;}},A=()=>{let l=false;return typeof n=="function"?l=n(s):l=s.every(h=>U(h)),l},v=async l=>{const h=A();let E=[];if(h){const _=s.map(g=>this.getValue(g));E=await t({key:s,triggerKey:l?.key,value:r?_:_[0],addStoreValue:(...g)=>$(h,g)});}$(h,E);};o&&s.forEach(l=>{const h=this.addValueChangeListener(l,(E,_,g)=>v({key:E}));u.push(h);}),await v();const M={reload(){this.clearStoreStyleElements(),this.destory(),v();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>I(),destory(){return P()},removeValueChangeListener:()=>{u.forEach(l=>{this.removeValueChangeListener(l);});},clearOnceExecMenuData(){o&&a.$data.onceExecMenuData.delete(C);}};return this.$data.onceExecMenuData.set(C,M),M},async execMenu(e,t,n=false,o=false){return await this.exec(e,async a=>await t(a),a=>a.every(r=>{let p=!!this.getValue(r);return x.$data.contentConfigInitDisabledKeys.includes(r)&&(p=false,f.warn(`.execMenu${o?"Once":""} ${r} 被禁用`)),n&&(p=!p),p}),o)},async execMenuOnce(e,t,n=false,o=false){const a=await this.execMenu(e,t,n,true);if(o&&a){const i=()=>{a.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,i);}return a},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),N.removeValueChangeListener(e)},onceExec(e,t,n=false){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||n&&(Array.isArray(e)?e:[e]).findIndex(a=>{if(!!!x.getValue(a))return  true})!==-1||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${ce}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const a=e.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!n&&!a&&e.push(...ie.getDefaultBottomContentConfig());const i=q.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:r=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:r=>{r(),this.$data.$panel=null;}},width:J.setting.width,height:J.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=i,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:i,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,o=async(u,b)=>{if(u==null)return;const $=await b(u);return $&&typeof $.isFind=="boolean"&&$.isFind?$.data:await o($.data,b)},a=(u,b)=>{const $=new IntersectionObserver(U=>{U.forEach(I=>{I.isIntersecting&&(b?.(),$.disconnect());});},{root:null,threshold:1});$.observe(u),u.scrollIntoView({behavior:"smooth",block:"center"});},i=u=>{const b="pops-flashing";d.onAnimationend(u,()=>{u.classList.remove(b);}),u.classList.add(b);},r=u=>{if(u.type==="dblclick"&&w)return;d.preventEvent(u);const b=q.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:J.settingMiddle.width,height:"auto",drag:true,style:`
					${q.config.cssText.panelCSS}

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
				`});b.$shadowRoot.querySelector(".search-wrapper");const $=b.$shadowRoot.querySelector(".search-config-text"),U=b.$shadowRoot.querySelector(".search-result-wrapper");$.focus();const I=()=>{d.empty(U);},P=v=>{const M=y.queryProperty(v,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),l=d.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${M.matchedData?.path}</div>
							<div class="search-result-item-description">${M.matchedData?.description??""}</div>
						`}),h=q.fn.PanelHandlerComponents();return d.on(l,"click",()=>{const _=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[v.index];if(!_){S.error(`左侧项下标${v.index}不存在`);return}_.scrollIntoView({behavior:"smooth",block:"center"}),_.click(),o(v.next,async g=>{if(g?.next){const V=await d.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(m=>{const k=Reflect.get(m,h.$data.nodeStoreConfigKey);return typeof k=="object"&&k!=null&&k.text===g.name}),2500);if(V)V.click();else return S.error("未找到对应的二级菜单"),{isFind:true,data:g};return {isFind:false,data:g.next}}else {const V=await d.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(m=>Reflect.get(m,h.$data.nodeStoreConfigKey)===g.matchedData?.formConfig),2500);if(V){a(V);const m=V.closest(".pops-panel-forms-fold[data-fold-enable]");m&&(m.querySelector(".pops-panel-forms-fold-container").click(),await y.sleep(500)),a(V,()=>{i(V);});}else S.error("未找到对应的菜单项");return {isFind:true,data:g}}});}),l},A=v=>{const M=new RegExp(v,"i"),l=[],h=(_,g)=>{for(let V=0;V<_.length;V++){const m=_[V],k=m.views;if(k&&Array.isArray(k)){const O=y.deepClone(g);if(m.type==="deepMenu"){const F=y.queryProperty(O,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});F.next={name:m.text};}h(k,O);}else {let O,F;if(m.type==="own"){let T=Reflect.get(m.attributes||{},Ie);T&&(typeof T=="function"&&(T=T()),typeof T.text=="string"&&(O=T.text),typeof T.desc=="string"&&(F=T.desc));}else O=m.text,F=Reflect.get(m,"description");const H=[O,F],pe=H.findIndex(T=>{if(typeof T=="string")return T.match(M)});if(pe!==-1){const T=y.deepClone(g),fe=y.queryProperty(T,B=>B?.next?{isFind:false,data:B.next}:{isFind:true,data:B});fe.next={name:O,matchedData:{path:"",formConfig:m,matchedText:H[pe],description:F}};const ge=[];y.queryProperty(T,B=>{const le=B?.name;return typeof le=="string"&&le.trim()!==""&&ge.push(le),B?.next?{isFind:false,data:B.next}:{isFind:true,data:B}});const Me=ge.join(D.escapeHtml(" - "));fe.next.matchedData.path=Me,l.push(T);}}}};for(let _=0;_<n.length;_++){const g=n[_];if(!g.views||g.isBottom&&g.id==="script-version")continue;const V=g.views;if(V&&Array.isArray(V)){let m=g.title;typeof m=="function"&&(m=m()),h(V,{index:_,name:m});}}const E=document.createDocumentFragment();for(const _ of l){const g=P(_);E.appendChild(g);}I(),U.append(E);};d.on($,"input",y.debounce(v=>{d.preventEvent(v);const M=d.val($).trim();if(M===""){I();return}A(M);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(u=>{d.on(u,"dblclick",r);});const s=new WeakMap;let c=false,C,w=false;d.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(u,b)=>{w=true,clearTimeout(C),C=void 0,c&&s.has(b)?(c=false,s.delete(b),r(u)):(C=setTimeout(()=>{c=false;},200),c=true,s.set(b,u));},{capture:true}),t.$shadowRoot.appendChild(d.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let o=false,a=t;const i=this.addValueChangeListener(e,(r,p)=>{a=p;});return {get value(){return o||(o=true,a=n.getValue(e,t)),a},destory(){n.removeValueChangeListener(i);}}}},W={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},y=de.noConflict(),d=G.noConflict(),q=ue,f=new y.Log(Z,R.console||Le.console),ce=Z?.script?.name||void 0,Fe=ue.fn.Utils.AnyTouch();f.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Ce=()=>{const t=ue.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=y.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};S.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?f.warn(n):t==="error"?f.error(n):f.info(n),false},get position(){return x.getValue(W.qmsg_config_position.key,W.qmsg_config_position.defaultValue)},get maxNums(){return x.getValue(W.qmsg_config_maxnums.key,W.qmsg_config_maxnums.defaultValue)},get showReverse(){return x.getValue(W.qmsg_config_showreverse.key,W.qmsg_config_showreverse.defaultValue)},get zIndex(){return Ce()}});q.GlobalConfig.setGlobalConfig({zIndex:()=>Ce(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const we=new y.GM_Menu({GM_getValue:X,GM_setValue:se,GM_registerMenuCommand:$e,GM_unregisterMenuCommand:Re}),he=new y.Httpx({xmlHttpRequest:Ae,logDetails:false});he.interceptors.request.use(e=>e);he.interceptors.response.use(e=>e,e=>(f.error("[Httpx-HttpxRequest.response] 响应错误",{data:e}),e.type==="onabort"?S.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?S.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?S.error("请求超时",{consoleLogContent:true}):S.error("其它错误",{consoleLogContent:true}),e));R.Object.defineProperty,R.Object.keys,R.Object.values,R.Function.prototype.apply,R.Function.prototype.call,R.Element.prototype.appendChild,R.setTimeout.bind(R),R.clearTimeout.bind(R),R.setInterval.bind(R),R.clearInterval.bind(R);const re=d.addStyle.bind(d);D.addBlockCSS.bind(D);G.selector.bind(G);G.selectorAll.bind(G);new y.GM_Cookie;const Ge={isGoWild(){return window.location.pathname==="/go-wild"}},be=function(e=""){d.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},z={init(){this.addCSS(),x.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),x.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),x.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),x.execMenu("JianShuArticleCenter",()=>this.articleCenter()),x.execMenu("JianShuShieldRelatedArticles",()=>this.blockRelatedArticles()),x.execMenu("jianshu-shieldClientDialog",()=>{this.blockClientDialog();}),x.execMenuOnce("JianShuShieldUserComments",()=>this.blockUserComments()),x.execMenuOnce("JianShuShieldRecommendedReading",()=>this.blockRecommendedReading()),x.execMenuOnce("jianshu-shieldTopNav",()=>this.blockTopNav()),x.execMenuOnce("jianshu-shieldBottomToolbar",()=>this.blockBottomToolbar());},addCSS(){return f.info("添加屏蔽CSS"),re(Ve)},articleCenter(){f.info("全文居中");let e=[];return e.push(D.addBlockCSS("div[role=main] aside","div._3Pnjry"),re(`
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}`)),be("div[role=main] aside"),be("div._3Pnjry"),d.waitNodeList("div._gp-ck").then(t=>{t.forEach(n=>{n.style.width="100%";});}),e},removeClipboardHijacking(){f.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,true),document.addEventListener("copy",e,true);},autoExpandFullText(){d.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",f.info("自动展开全文"),y.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{n.target.style.display!="none"&&(f.success("自动展开全文-自动点击"),document.querySelector('div#homepage div[class*="dialog-"] .cancel')?.click());});},config:{childList:false,attributes:true,characterData:true,subtree:true}});});},jumpRedirect(){if(Ge.isGoWild()){f.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},blockRelatedArticles(){return f.info("屏蔽相关文章"),D.addBlockCSS('div[role="main"] > div > section:nth-child(2)')},blockClientDialog(){f.info("【屏蔽】客户端弹窗"),D.addBlockCSS('div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'),d.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{f.success("弹窗出现"),y.waitPropertyByInterval(e,()=>y.getReactInstance(e)?.reactInternalInstance?.return?.return?.memoizedProps?.onClose,250,1e4).then(()=>{y.getReactInstance(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),f.success("调用函数关闭弹窗");});});},blockUserComments(){return f.info("屏蔽评论区"),D.addBlockCSS("div#note-page-comment")},blockRecommendedReading(){return f.info("屏蔽底部推荐阅读"),D.addBlockCSS('div[role="main"] > div > section:last-child')},blockTopNav(){return f.info("【屏蔽】顶部导航栏"),D.addBlockCSS("header")},blockBottomToolbar(){return f.info("【屏蔽】底部工具栏"),D.addBlockCSS("footer")}},xe={init(){this.addCSS(),x.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{z.jumpRedirect();}),x.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),x.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{z.removeClipboardHijacking();}),x.execMenu("JianShuAutoExpandFullText_Mobile",()=>{z.autoExpandFullText();}),x.execMenuOnce("JianShuremoveFooterRecommendRead",()=>this.blockeFooterRecommendRead()),x.execMenu("JianShuShieldUserCommentsMobile",()=>this.blockUserComments());},addCSS(){z.addCSS();},blockeFooterRecommendRead(){return f.info("屏蔽底部推荐阅读"),D.addBlockCSS("#recommended-notes")},handlePrototype(){f.info("处理原型添加script标签");let e=Node.prototype.appendChild;R.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(f.success(["禁止添加的元素",t]),null):e.call(this,t)};},blockUserComments(){return f.info("屏蔽评论区"),D.addBlockCSS("#comment-main")}},ve=function(e,t,n,o,a,i,r){const p={text:e,type:"select",description:i,attributes:{},props:{},getValue(){return this.props[ee].get(t,n)},callback(s){if(s==null)return;const c=s.value;if(f.info(`选择：${s.text}`),typeof a=="function"&&a(s))return;this.props[ee].set(t,c);},data:o};return Reflect.set(p.attributes,oe,t),Reflect.set(p.attributes,ae,n),_e.initComponentsStorageApi("select",p,{get(s,c){return x.getValue(s,c)},set(s,c){x.setValue(s,c);}}),p},_e={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new de.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,ee,t);}},L=function(e,t,n=false,o,a,i,r,p,s){const c={text:e,type:"switch",description:a,disabled:r,attributes:{},props:{},getValue(){return this.props[ee].get(t,n)},callback(C,w){const u=!!w;f.success(`${u?"开启":"关闭"} ${e}`),this.props[ee].set(t,u);},afterAddToUListCallBack:(...C)=>{}};return Reflect.set(c.attributes,oe,t),Reflect.set(c.attributes,ae,n),_e.initComponentsStorageApi("switch",c,{get(C,w){return x.getValue(C,w)},set(C,w){x.setValue(C,w);}}),c},Ue={id:"jianshu-panel-config-mobile",title:"移动端",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[L("自动展开全文","JianShuAutoExpandFullText_Mobile",true),L("重定向链接","JianShuAutoJumpRedirect_Mobile",true,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[L("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",false),L("【屏蔽】评论区","JianShuShieldUserCommentsMobile",false)]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[L("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",true,void 0,"去除禁止复制"),L("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",true,void 0,"去除简书唤醒调用App")]}]}]}]},qe={id:"jianshu-panel-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ve("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{f.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),ve("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),L("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Be={id:"jianshu-panel-config-pc",title:"桌面端",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[L("全文居中","JianShuArticleCenter",true),L("自动展开全文","JianShuAutoExpandFullText",true),L("重定向链接","JianShuAutoJumpRedirect_PC",true,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[L("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",false),L("【屏蔽】评论区","JianShuShieldUserComments",false),L("【屏蔽】相关文章","JianShuShieldRelatedArticles",false),L("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",true,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),L("【屏蔽】顶部导航栏","jianshu-shieldTopNav",false),L("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",false,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[L("拦截-剪贴板","JianShuRemoveClipboardHijacking",true,void 0,"去除禁止复制")]}]}]}]};ie.addContentConfig([qe,Be,Ue]);x.init();let Se=y.isPhone(),Q="change_env_set",K=X(Q);we.add({key:Q,text:`⚙ 自动: ${Se?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return K==null?e:e+` 手动: ${K==1?"移动端":K==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){S.error("输入的不是规范的数字");return}if(!e.includes(n)){S.error("输入的值必须是0或1或2");return}n==0?Y(Q):se(Q,n);}});K!=null?(f.info(`手动判定为${K===1?"移动端":"PC端"}`),K==1?xe.init():K==2?z.init():(S.error("意外，手动判定的值不在范围内"),Y(Q))):Se?(f.info("自动判定为移动端"),xe.init()):(f.info("自动判定为PC端"),z.init());

})(DOMUtils, pops, Utils, Qmsg);