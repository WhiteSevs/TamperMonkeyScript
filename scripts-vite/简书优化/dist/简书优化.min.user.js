// ==UserScript==
// @name         简书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.10.22
// @author       WhiteSevs
// @description  支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
// @connect      *
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

(function (F, ue, de, _) {
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
`;var Y=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,me=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,X=typeof GM_getValue<"u"?GM_getValue:void 0,Z=typeof GM_info<"u"?GM_info:void 0,te=typeof GM_listValues<"u"?GM_listValues:void 0,ke=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,se=typeof GM_setValue<"u"?GM_setValue:void 0,ye=typeof GM_setValues<"u"?GM_setValues:void 0,$e=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ee=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,R=typeof unsafeWindow<"u"?unsafeWindow:void 0,Re=window;const D={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&F.waitNodeList(t).then(n=>{n.forEach(o=>o.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),F.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n);}),re(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof me=="function"?me(e.keyName):null;return typeof t=="string"&&t?re(t):D.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(n=>{F.onReady(()=>{document.head.appendChild(t),n(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(n=>{t.onload=()=>{n(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let n=[document.documentElement,document.body].concat(...e||[]);return n.forEach(o=>{o.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){n.forEach(o=>{o.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(o){navigator.clipboard.readText().then(a=>{o(a);}).catch(a=>{f.error("读取剪贴板内容失败👉",a),o("");});}function t(o){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(o);}).catch(a=>{f.error("申请剪贴板权限失败，尝试直接读取👉",a.message??a.name??a.stack),e(o);});}function n(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(o=>{if(!n()){o("");return}document.hasFocus()?t(o):window.addEventListener("focus",()=>{t(o);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,n=5e3){let o,a=n-t,i=t,r=async m=>{const l=await e(m);if(typeof l=="boolean"&&l||m){x.workerClearTimeout(o);return}if(i+=t,i>a){r(true);return}o=x.workerSetTimeout(()=>{r(false);},t);};r(false);},findParentNode(e,t,n){if(n){let o=F.closest(e,n);if(o)return o.querySelector(t)}else return F.matches(e,t)?e:F.closest(e,t)},toStr(e,t=2){const n="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(a,i)=>i===void 0?n:i,t).replace(new RegExp(`"${n}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof R=="object"&&R!=null?R:window;return e.top===e.self}},ne="GM_Panel",Ae="data-init",oe="data-key",ae="data-default-value",Le="data-init-more-value",Te="data-plugin-search-config",ee="data-storage-api",j={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},J={setting:{get width(){return j.width<550?"88vw":j.width<700?"550px":"700px"},get height(){return j.height<450?"70vh":j.height<550?"450px":"550px"}},settingMiddle:{get width(){return j.width<350?"88vw":"350px"}},info:{get width(){return j.width<350?"88vw":"350px"},get height(){return j.height<250?"88vh":"250px"}}},ie={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new x.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let e=false,t;const n=(i,r)=>{typeof r!="string"&&(r=D.toStr(r));const m=new Blob([r]),l=globalThis.URL.createObjectURL(m);u.createElement("a",{href:l,download:i}).click(),x.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(l);},500);},o=()=>{const i=w=>{const d=B.alert({title:{text:"请选择导入方式",position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(A,b){A.close();}}},drag:true,mask:{enable:true},width:J.info.width,height:J.info.height,style:`
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
          }`}),y=d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),$=d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),G=d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),I=async A=>{confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")&&(typeof te=="function"?typeof Y=="function"?(te().forEach(s=>{Y(s);}),_.success("已清空脚本存储的配置")):_.error("不支持GM_deleteValue函数，无法执行删除脚本配置"):_.error("不支持GM_listValues函数，无法清空脚本存储的配置")),typeof ye=="function"?ye(A):Object.keys(A).forEach(s=>{const p=A[s];se(s,p);}),_.success("配置导入完毕");},P=A=>new Promise(async b=>{const M=x.toJSON(A);Object.keys(M).length===0?_.warning("解析为空配置，不导入"):await I(M),b(true);});u.on(y,"click",A=>{u.preventEvent(A),d.close();const b=u.createElement("input",{type:"file",accept:".json"});u.on(b,["propertychange","input"],M=>{if(!b.files?.length)return;const s=b.files[0],p=new FileReader;p.onload=()=>{P(p.result);},p.readAsText(s,"UTF-8");}),b.click();}),u.on($,"click",A=>{u.preventEvent(A),d.close();const b=B.prompt({title:{text:"网络导入",position:"center"},content:{text:"",placeholder:"请填写URL",focus:true},btn:{close:{enable:true,callback(p,E){p.close();}},ok:{text:"导入",callback:async(p,E)=>{const C=p.text;if(x.isNull(C)){_.error("请填入完整的url");return}const h=_.loading("正在获取配置..."),V=await pe.get(C,{allowInterceptConfig:false});if(h.close(),!V.status){f.error(V),_.error("获取配置失败",{consoleLogContent:true});return}await P(V.data.responseText)&&p.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:J.info.width,height:"auto"}),M=b.$shadowRoot.querySelector("input"),s=b.$shadowRoot.querySelector(".pops-prompt-btn-ok");u.on(M,["input","propertychange"],p=>{u.val(M)===""?u.attr(s,"disabled","true"):u.removeAttr(s,"disabled");}),u.onKeyboard(M,"keydown",(p,E,C)=>{p==="Enter"&&C.length===0&&u.val(M)!==""&&u.emit(s,"click");}),u.emit(M,"input");}),u.on(G,"click",async A=>{u.preventEvent(A),d.close();let b=await D.getClipboardText();if(b.trim()===""){_.warning("获取到的剪贴板内容为空");return}await P(b);});},r=(w=`${ce}_panel-setting-${x.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,d)=>{const y=B.alert({title:{text:"请选择导出方式",position:"center"},content:{text:`
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
          }`}),$=y.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),G=y.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");u.on($,"click",I=>{u.preventEvent(I);try{n(w,d),y.close();}catch(P){_.error(P.toString(),{consoleLogContent:true});}}),u.on(G,"click",async I=>{await x.copy(d)?(_.success("复制成功"),y.close()):_.error("复制失败");});},l=B.confirm({title:{text:"配置",position:"center"},content:{text:`
            <textarea name="config-value" id="config" readonly></textarea>
          `,html:true},btn:{ok:{enable:true,type:"primary",text:"导入",callback(w,d){i();}},cancel:{enable:true,text:"导出",callback(w,d){r(void 0,S);}}},width:j.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),c={};if(typeof te=="function")te().forEach(d=>{const y=X(d);Reflect.set(c,d,y);});else {_.warning("不支持函数GM_listValues，仅导出菜单配置");const w=X(ne);Reflect.set(c,ne,w);}const S=D.toStr(c);l.value=S;},a=()=>{let i=Z?.script?.supportURL||Z?.script?.namespace;typeof i=="string"&&x.isNotNull(i)&&window.open(i,"_blank");};return [{id:"script-version",title:`版本：${Z?.script?.version||"未知"}`,isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(i){new Oe(i.$asideLiElement).on("tap",function(m){clearTimeout(t),t=void 0,e?(e=false,o()):(t=setTimeout(()=>{e=false,a();},200),e=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},De={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{v.showPanel(ie.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){D.isTopWindow()&&we.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let n=this.$data.menuOption.findIndex(o=>o.key===t.key);n!==-1&&(this.$data.menuOption[n]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Ie{storageKey;listenerData;constructor(t){if(typeof t=="string"){const n=t.trim();if(n=="")throw new Error("key参数不能为空字符串");this.storageKey=n;}else throw new Error("key参数类型错误，必须是字符串");this.listenerData=new de.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}getLocalValue(){let t=X(this.storageKey);return t==null&&(t={},this.setLocalValue(t)),t}setLocalValue(t){se(this.storageKey,t);}set(t,n){const o=this.get(t),a=this.getLocalValue();Reflect.set(a,t,n),this.setLocalValue(a),this.emitValueChangeListener(t,n,o);}get(t,n){const o=this.getLocalValue();return Reflect.get(o,t)??n}getAll(){return this.getLocalValue()}delete(t){const n=this.get(t),o=this.getLocalValue();Reflect.deleteProperty(o,t),this.setLocalValue(o),this.emitValueChangeListener(t,void 0,n);}has(t){const n=this.getLocalValue();return Reflect.has(n,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(n=>Reflect.get(t,n))}clear(){Y(this.storageKey);}addValueChangeListener(t,n){const o=Math.random(),a=this.listenerData.get(t)||[];return a.push({id:o,key:t,callback:n}),this.listenerData.set(t,a),o}removeValueChangeListener(t){let n=false;for(const[o,a]of this.listenerData.entries()){for(let i=0;i<a.length;i++){const r=a[i];(typeof t=="string"&&r.key===t||typeof t=="number"&&r.id===t)&&(a.splice(i,1),i--,n=true);}this.listenerData.set(o,a);}return n}async emitValueChangeListener(...t){const[n,o,a]=t;if(!this.listenerData.has(n))return;const i=this.listenerData.get(n);for(let r=0;r<i.length;r++){const m=i[r];if(typeof m.callback=="function"){let l,c;t.length===1||(t.length===2?l=o:t.length===3&&(l=o,c=a)),await m.callback(n,l,c);}}}}const N=new Ie(ne),v={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new x.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new x.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new x.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new x.Dictionary),this.__onceExecData},get scriptName(){return ce},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:ne,attributeKeyName:oe,attributeDefaultValueName:ae},init(){this.initContentDefaultValue(),De.init();},initContentDefaultValue(){const e=o=>{if(!o.attributes||o.type==="button"||o.type==="container"||o.type==="deepMenu")return;const a=o.attributes;let i=a[Ae];if(typeof i=="function"){let c=i();if(typeof c=="boolean"&&!c)return}let r=new Map,m=a[oe];if(m!=null){const c=a[ae];r.set(m,c);}let l=a[Le];if(typeof l=="object"&&l&&Object.keys(l).forEach(c=>{const S=l[c];r.set(c,S);}),!r.size){f.warn("请先配置键",o);return}if(o.type==="switch"){let c=typeof o.disabled=="function"?o.disabled():o.disabled;typeof c=="boolean"&&c&&this.$data.contentConfigInitDisabledKeys.push(...r.keys());}for(const[c,S]of r.entries())this.setDefaultValue(c,S);},t=o=>{for(let a=0;a<o.length;a++){let i=o[a];e(i);let r=i.views;r&&Array.isArray(r)&&t(r);}},n=[...ie.getAllContentConfig()];for(let o=0;o<n.length;o++){let a=n[o];if(!a.views)continue;const i=a.views;i&&Array.isArray(i)&&t(i);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&f.warn("该key已存在，初始化默认值失败: "+e),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){N.set(e,t);},getValue(e,t){const n=N.get(e);return n??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){N.delete(e);},hasKey(e){return N.has(e)},addValueChangeListener(e,t,n){const o=N.addValueChangeListener(e,t);if(n?.immediate||n?.immediateAll){const a=this.getValue(e);n?.immediate?t(e,a,a):n?.immediateAll&&v.emitMenuValueChange(e,a,a);}return o},removeValueChangeListener(e){N.removeValueChangeListener(e);},emitMenuValueChange(e,t,n){N.emitValueChangeListener(e,t,n);},async exec(e,t,n,o=true){const a=this;let i;typeof e=="string"||Array.isArray(e)?i=()=>e:i=e;let r=false;const m=i();let l=[];Array.isArray(m)?(r=true,l=m):l.push(m);const c=l.find(s=>!this.$data.contentConfigInitDefaultValue.has(s));if(c){f.warn(`${c} 键不存在`);return}const S=JSON.stringify(l);if(o&&this.$data.onceExecMenuData.has(S))return this.$data.onceExecMenuData.get(S);let w=[];const d=[];let y=[];const $=(s,p)=>{let E=[],C=[],h=[];if(Array.isArray(p))h=h.concat(p);else {const g=k=>{if(typeof k=="object"&&k!=null)if(k instanceof Element)h.push(k);else {const{$css:O,destory:U}=k;O!=null&&(Array.isArray(O)?h=h.concat(O):h.push(O)),typeof U=="function"&&h.push(U);}else h.push(k);};if(p!=null&&Array.isArray(p))for(const k of p)g(k);else g(p);}const V=g=>{if(g!=null){if(g instanceof Element){E.push(g);return}if(typeof g=="function"){C.push(g);return}}};for(const g of h){const k=V(g);if(typeof k=="boolean"&&!k)break;if(Array.isArray(g))for(const O of g){const U=V(O);if(typeof U=="boolean"&&!U)break}}I(),P(),s&&(w=w.concat(E),y=y.concat(C));},G=s=>!!this.getValue(s),I=()=>{for(let s=0;s<w.length;s++)w[s]?.remove(),w.splice(s,1),s--;},P=()=>{for(let s=0;s<y.length;s++){const p=y[s];p(),y.splice(s,1),s--;}},A=()=>{let s=false;return typeof n=="function"?s=n(l):s=l.every(p=>G(p)),s},b=async s=>{const p=A();let E=[];if(p){const C=l.map(h=>this.getValue(h));E=await t({key:l,triggerKey:s?.key,value:r?C:C[0],addStoreValue:(...h)=>$(p,h)});}$(p,E);};o&&l.forEach(s=>{const p=this.addValueChangeListener(s,(E,C,h)=>b({key:E}));d.push(p);}),await b();const M={reload(){this.clearStoreStyleElements(),this.destory(),b();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>I(),destory(){return P()},removeValueChangeListener:()=>{d.forEach(s=>{this.removeValueChangeListener(s);});},clearOnceExecMenuData(){o&&a.$data.onceExecMenuData.delete(S);}};return this.$data.onceExecMenuData.set(S,M),M},async execMenu(e,t,n=false,o=false){return await this.exec(e,async a=>await t(a),a=>a.every(r=>{let m=!!this.getValue(r);return v.$data.contentConfigInitDisabledKeys.includes(r)&&(m=false,f.warn(`.execMenu${o?"Once":""} ${r} 被禁用`)),n&&(m=!m),m}),o)},async execMenuOnce(e,t,n=false,o=false){const a=await this.execMenu(e,t,n,true);if(o&&a){const i=()=>{a.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,i);}return a},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),N.removeValueChangeListener(e)},onceExec(e,t){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const n of t)await n(e);},showPanel(e,t=`${ce}-设置`,n=false,o=false){this.$data.$panel=null,this.$data.panelContent=[];const a=e.findIndex(r=>(typeof r.isBottom=="function"?r.isBottom():!!r.isBottom)&&r.id==="script-version")!==-1;!n&&!a&&e.push(...ie.getDefaultBottomContentConfig());const i=B.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:r=>{r.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:r=>{r(),this.$data.$panel=null;}},width:J.setting.width,height:J.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});this.$data.$panel=i,this.$data.panelContent=e,o||this.registerConfigSearch({$panel:i,content:e});},registerConfigSearch(e){const{$panel:t,content:n}=e,o=async(d,y)=>{if(d==null)return;const $=await y(d);return $&&typeof $.isFind=="boolean"&&$.isFind?$.data:await o($.data,y)},a=(d,y)=>{const $=new IntersectionObserver(G=>{G.forEach(I=>{I.isIntersecting&&(y?.(),$.disconnect());});},{root:null,threshold:1});$.observe(d),d.scrollIntoView({behavior:"smooth",block:"center"});},i=d=>{const y="pops-flashing";u.onAnimationend(d,()=>{d.classList.remove(y);}),d.classList.add(y);},r=d=>{if(d.type==="dblclick"&&w)return;u.preventEvent(d);const y=B.alert({title:{text:"搜索配置",position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:J.settingMiddle.width,height:"auto",drag:true,style:`
					${B.config.cssText.panelCSS}

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
				`});y.$shadowRoot.querySelector(".search-wrapper");const $=y.$shadowRoot.querySelector(".search-config-text"),G=y.$shadowRoot.querySelector(".search-result-wrapper");$.focus();const I=()=>{u.empty(G);},P=b=>{const M=x.queryProperty(b,E=>E?.next?{isFind:false,data:E.next}:{isFind:true,data:E}),s=u.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${M.matchedData?.path}</div>
							<div class="search-result-item-description">${M.matchedData?.description??""}</div>
						`}),p=B.fn.PanelHandlerComponents();return u.on(s,"click",()=>{const C=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[b.index];if(!C){_.error(`左侧项下标${b.index}不存在`);return}C.scrollIntoView({behavior:"smooth",block:"center"}),C.click(),o(b.next,async h=>{if(h?.next){const V=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(g=>{const k=Reflect.get(g,p.$data.nodeStoreConfigKey);return typeof k=="object"&&k!=null&&k.text===h.name}),2500);if(V)V.click();else return _.error("未找到对应的二级菜单"),{isFind:true,data:h};return {isFind:false,data:h.next}}else {const V=await u.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(g=>Reflect.get(g,p.$data.nodeStoreConfigKey)===h.matchedData?.formConfig),2500);if(V){a(V);const g=V.closest(".pops-panel-forms-fold[data-fold-enable]");g&&(g.querySelector(".pops-panel-forms-fold-container").click(),await x.sleep(500)),a(V,()=>{i(V);});}else _.error("未找到对应的菜单项");return {isFind:true,data:h}}});}),s},A=b=>{const M=new RegExp(b,"i"),s=[],p=(C,h)=>{for(let V=0;V<C.length;V++){const g=C[V],k=g.views;if(k&&Array.isArray(k)){const O=x.deepClone(h);if(g.type==="deepMenu"){const U=x.queryProperty(O,H=>H?.next?{isFind:false,data:H.next}:{isFind:true,data:H});U.next={name:g.text};}p(k,O);}else {let O,U;if(g.type==="own"){let T=Reflect.get(g.attributes||{},Te);T&&(typeof T=="function"&&(T=T()),typeof T.text=="string"&&(O=T.text),typeof T.desc=="string"&&(U=T.desc));}else O=g.text,U=Reflect.get(g,"description");const H=[O,U],fe=H.findIndex(T=>{if(typeof T=="string")return T.match(M)});if(fe!==-1){const T=x.deepClone(h),he=x.queryProperty(T,q=>q?.next?{isFind:false,data:q.next}:{isFind:true,data:q});he.next={name:O,matchedData:{path:"",formConfig:g,matchedText:H[fe],description:U}};const ge=[];x.queryProperty(T,q=>{const le=q?.name;return typeof le=="string"&&le.trim()!==""&&ge.push(le),q?.next?{isFind:false,data:q.next}:{isFind:true,data:q}});const Me=ge.join(D.escapeHtml(" - "));he.next.matchedData.path=Me,s.push(T);}}}};for(let C=0;C<n.length;C++){const h=n[C];if(!h.views||h.isBottom&&h.id==="script-version")continue;const V=h.views;if(V&&Array.isArray(V)){let g=h.title;typeof g=="function"&&(g=g()),p(V,{index:C,name:g});}}const E=document.createDocumentFragment();for(const C of s){let h=P(C);E.appendChild(h);}I(),G.append(E);};u.on($,"input",x.debounce(b=>{u.preventEvent(b);let M=u.val($).trim();if(M===""){I();return}A(M);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(d=>{u.on(d,"dblclick",r);});let l=new WeakMap,c=false,S,w=false;u.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(d,y)=>{w=true,clearTimeout(S),S=void 0,c&&l.has(y)?(c=false,l.delete(y),r(d)):(S=setTimeout(()=>{c=false;},200),c=true,l.set(y,d));},{capture:true}),t.$shadowRoot.appendChild(u.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const n=this;let o=false,a=t;const i=this.addValueChangeListener(e,(r,m)=>{a=m;});return {get value(){return o||(o=true,a=n.getValue(e,t)),a},destory(){n.removeValueChangeListener(i);}}}},W={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},x=de.noConflict(),u=F.noConflict(),B=ue,f=new x.Log(Z,R.console||Re.console),ce=Z?.script?.name||void 0,Oe=ue.fn.Utils.AnyTouch(),Pe=false;f.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Ce=()=>{const t=ue.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,n=x.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,n)};_.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const n=e.setting.content;return t==="warning"?f.warn(n):t==="error"?f.error(n):f.info(n),false},get position(){return v.getValue(W.qmsg_config_position.key,W.qmsg_config_position.defaultValue)},get maxNums(){return v.getValue(W.qmsg_config_maxnums.key,W.qmsg_config_maxnums.defaultValue)},get showReverse(){return v.getValue(W.qmsg_config_showreverse.key,W.qmsg_config_showreverse.defaultValue)},get zIndex(){return Ce()}});B.GlobalConfig.setGlobalConfig({zIndex:()=>Ce(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const we=new x.GM_Menu({GM_getValue:X,GM_setValue:se,GM_registerMenuCommand:ke,GM_unregisterMenuCommand:$e}),pe=new x.Httpx({xmlHttpRequest:Ee,logDetails:Pe});pe.interceptors.request.use(e=>e);pe.interceptors.response.use(void 0,e=>(f.error("拦截器-请求错误",e),e.type==="onabort"?_.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?_.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?_.error("请求超时",{consoleLogContent:true}):_.error("其它错误",{consoleLogContent:true}),e));R.Object.defineProperty,R.Object.keys,R.Object.values,R.Function.prototype.apply,R.Function.prototype.call,R.Element.prototype.appendChild,R.setTimeout.bind(R),R.clearTimeout.bind(R),R.setInterval.bind(R),R.clearInterval.bind(R);const re=u.addStyle.bind(u);F.selector.bind(F);F.selectorAll.bind(F);new x.GM_Cookie;const Ue={isGoWild(){return window.location.pathname==="/go-wild"}},xe=function(e=""){u.waitNodeList(e).then(t=>{t.forEach(n=>n.remove());});},z={init(){this.addCSS(),v.execMenu("JianShuAutoJumpRedirect_PC",()=>{this.jumpRedirect();}),v.execMenu("JianShuRemoveClipboardHijacking",()=>{this.removeClipboardHijacking();}),v.execMenu("JianShuAutoExpandFullText",()=>{this.autoExpandFullText();}),v.execMenu("JianShuArticleCenter",()=>this.articleCenter()),v.execMenu("JianShuShieldRelatedArticles",()=>this.blockRelatedArticles()),v.execMenu("jianshu-shieldClientDialog",()=>{this.blockClientDialog();}),v.execMenuOnce("JianShuShieldUserComments",()=>this.blockUserComments()),v.execMenuOnce("JianShuShieldRecommendedReading",()=>this.blockRecommendedReading()),v.execMenuOnce("jianshu-shieldTopNav",()=>this.blockTopNav()),v.execMenuOnce("jianshu-shieldBottomToolbar",()=>this.blockBottomToolbar());},addCSS(){return f.info("添加屏蔽CSS"),re(Ve)},articleCenter(){f.info("全文居中");let e=[];return e.push(D.addBlockCSS("div[role=main] aside","div._3Pnjry"),re(`
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}`)),xe("div[role=main] aside"),xe("div._3Pnjry"),u.waitNodeList("div._gp-ck").then(t=>{t.forEach(n=>{n.style.width="100%";});}),e},removeClipboardHijacking(){f.info("去除剪贴板劫持");const e=t=>{t.stopPropagation();};window.addEventListener("copy",e,true),document.addEventListener("copy",e,true);},autoExpandFullText(){u.waitNode('div#homepage div[class*="dialog-"]').then(e=>{e.style.visibility="hidden",f.info("自动展开全文"),x.mutationObserver(e,{callback:t=>{t.length!=0&&t.forEach(n=>{n.target.style.display!="none"&&(f.success("自动展开全文-自动点击"),document.querySelector('div#homepage div[class*="dialog-"] .cancel')?.click());});},config:{childList:false,attributes:true,characterData:true,subtree:true}});});},jumpRedirect(){if(Ue.isGoWild()){f.success("去除简书拦截其它网址的url并自动跳转"),window.stop();let e=window.location.href.replace(window.location.origin+"/","");e=decodeURIComponent(e);let t=e.replace(/^go-wild\?ac=2&url=/gi,"").replace(/^https:\/\/link.zhihu.com\/\?target\=/gi,"");window.location.href=t;}},blockRelatedArticles(){return f.info("屏蔽相关文章"),D.addBlockCSS('div[role="main"] > div > section:nth-child(2)')},blockClientDialog(){f.info("【屏蔽】客户端弹窗"),D.addBlockCSS('div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"])'),u.waitNode('div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]').then(e=>{f.success("弹窗出现"),x.waitPropertyByInterval(e,()=>x.getReactInstance(e)?.reactInternalInstance?.return?.return?.memoizedProps?.onClose,250,1e4).then(()=>{x.getReactInstance(e).reactInternalInstance.return.return.memoizedProps.onClose(new Event("click")),f.success("调用函数关闭弹窗");});});},blockUserComments(){return f.info("屏蔽评论区"),D.addBlockCSS("div#note-page-comment")},blockRecommendedReading(){return f.info("屏蔽底部推荐阅读"),D.addBlockCSS('div[role="main"] > div > section:last-child')},blockTopNav(){return f.info("【屏蔽】顶部导航栏"),D.addBlockCSS("header")},blockBottomToolbar(){return f.info("【屏蔽】底部工具栏"),D.addBlockCSS("footer")}},be={init(){this.addCSS(),v.execMenu("JianShuAutoJumpRedirect_Mobile",()=>{z.jumpRedirect();}),v.execMenu("JianShuHijackSchemeScriptLabel_Mobile",()=>{this.handlePrototype();}),v.execMenu("JianShuRemoveClipboardHijacking_Mobile",()=>{z.removeClipboardHijacking();}),v.execMenu("JianShuAutoExpandFullText_Mobile",()=>{z.autoExpandFullText();}),v.execMenuOnce("JianShuremoveFooterRecommendRead",()=>this.blockeFooterRecommendRead()),v.execMenu("JianShuShieldUserCommentsMobile",()=>this.blockUserComments());},addCSS(){z.addCSS();},blockeFooterRecommendRead(){return f.info("屏蔽底部推荐阅读"),D.addBlockCSS("#recommended-notes")},handlePrototype(){f.info("处理原型添加script标签");let e=Node.prototype.appendChild;R.Node.prototype.appendChild=function(t){let n=["img"];return t.src&&!t.src.includes("jianshu.io")&&!n.includes(t.localName)?(f.success(["禁止添加的元素",t]),null):e.call(this,t)};},blockUserComments(){return f.info("屏蔽评论区"),D.addBlockCSS("#comment-main")}},ve=function(e,t,n,o,a,i,r){const m={text:e,type:"select",description:i,attributes:{},props:{},getValue(){return this.props[ee].get(t,n)},callback(l){if(l==null)return;const c=l.value;if(f.info(`选择：${l.text}`),typeof a=="function"&&a(l))return;this.props[ee].set(t,c);},data:o};return Reflect.set(m.attributes,oe,t),Reflect.set(m.attributes,ae,n),_e.initComponentsStorageApi("select",m,{get(l,c){return v.getValue(l,c)},set(l,c){v.setValue(l,c);}}),m},_e={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new de.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,n){let o;this.hasStorageApi(e)?o=this.getStorageApi(e):o=n,this.setComponentsStorageApiProperty(t,o);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,ee,t);}},L=function(e,t,n,o,a,i,r,m,l){const c={text:e,type:"switch",description:a,disabled:r,attributes:{},props:{},getValue(){return this.props[ee].get(t,n)},callback(S,w){const d=!!w;f.success(`${d?"开启":"关闭"} ${e}`),this.props[ee].set(t,d);},afterAddToUListCallBack:(...S)=>{}};return Reflect.set(c.attributes,oe,t),Reflect.set(c.attributes,ae,n),_e.initComponentsStorageApi("switch",c,{get(S,w){return v.getValue(S,w)},set(S,w){v.setValue(S,w);}}),c},Fe={id:"jianshu-panel-config-mobile",title:"移动端",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[L("自动展开全文","JianShuAutoExpandFullText_Mobile",true),L("重定向链接","JianShuAutoJumpRedirect_Mobile",true,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[L("【屏蔽】底部推荐阅读","JianShuremoveFooterRecommendRead",false),L("【屏蔽】评论区","JianShuShieldUserCommentsMobile",false)]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[L("拦截-剪贴板","JianShuRemoveClipboardHijacking_Mobile",true,void 0,"去除禁止复制"),L("劫持-唤醒/跳转App","JianShuHijackSchemeScriptLabel_Mobile",true,void 0,"去除简书唤醒调用App")]}]}]}]},Ge={id:"jianshu-panel-common",title:"通用",views:[{text:"Toast配置",type:"container",views:[ve("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{f.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),ve("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),L("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]},Be={id:"jianshu-panel-config-pc",title:"桌面端",views:[{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[L("全文居中","JianShuArticleCenter",true),L("自动展开全文","JianShuAutoExpandFullText",true),L("重定向链接","JianShuAutoJumpRedirect_PC",true,void 0,"自动跳转简书拦截的Url链接")]}]},{text:"屏蔽",type:"deepMenu",views:[{text:"",type:"container",views:[L("【屏蔽】底部推荐阅读","JianShuShieldRecommendedReading",false),L("【屏蔽】评论区","JianShuShieldUserComments",false),L("【屏蔽】相关文章","JianShuShieldRelatedArticles",false),L("【屏蔽】客户端弹窗","jianshu-shieldClientDialog",true,void 0,"弹出的【扫码安装简书客户端 畅享全文阅读体验】"),L("【屏蔽】顶部导航栏","jianshu-shieldTopNav",false),L("【屏蔽】底部工具栏","jianshu-shieldBottomToolbar",false,void 0,"屏蔽掉底部悬浮的评论输入框、评论、点赞...")]}]},{text:"劫持/拦截",type:"deepMenu",views:[{text:"",type:"container",views:[L("拦截-剪贴板","JianShuRemoveClipboardHijacking",true,void 0,"去除禁止复制")]}]}]}]};ie.addContentConfig([Ge,Be,Fe]);v.init();let Se=x.isPhone(),Q="change_env_set",K=X(Q);we.add({key:Q,text:`⚙ 自动: ${Se?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return K==null?e:e+` 手动: ${K==1?"移动端":K==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let n=parseInt(t);if(isNaN(n)){_.error("输入的不是规范的数字");return}if(!e.includes(n)){_.error("输入的值必须是0或1或2");return}n==0?Y(Q):se(Q,n);}});K!=null?(f.info(`手动判定为${K===1?"移动端":"PC端"}`),K==1?be.init():K==2?z.init():(_.error("意外，手动判定的值不在范围内"),Y(Q))):Se?(f.info("自动判定为移动端"),be.init()):(f.info("自动判定为PC端"),z.init());

})(DOMUtils, pops, Utils, Qmsg);