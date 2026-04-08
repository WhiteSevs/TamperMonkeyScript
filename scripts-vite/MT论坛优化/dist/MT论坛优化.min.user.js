// ==UserScript==
// @name         MT论坛优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.4.9
// @author       WhiteSevs
// @description  MT论坛效果增强，如自动签到、自动展开帖子、用户状态查看、美化导航、动态头像上传、最新发表、评论过滤器等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://bbs.binmt.cc/*
// @exclude      /^http(s|)://bbs.binmt.cc/uc_server.*$/
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.14/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/@highlightjs/cdn-assets@11.11.1/highlight.min.js
// @resource     HljsCSS    https://fastly.jsdelivr.net/npm/highlight.js@11.11.1/styles/github-dark.min.css
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @grant        GM.cookie
// @grant        GM_addStyle
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

(function (x, P, be, re, pe, qe) {
  'use strict';

  const d=new Set;const Ne = async t=>{d.has(t)||(d.add(t),(a=>{function r(n){if(typeof GM_addStyle=="function")return GM_addStyle(n);const e=document.createElement("style");if(e.setAttribute("type","text/css"),e.setAttribute("data-type","gm-css"),globalThis.trustedTypes){const c=globalThis.trustedTypes.createPolicy("safe-innerHTML",{createHTML:i=>i});e.innerHTML=c.createHTML(n);}else e.innerHTML=n;return (document.head||document.documentElement).appendChild(e),e}r(a);})(t));};

  var Ie=typeof GM<"u"?GM:void 0,Pe=typeof GM_addValueChangeListener<"u"?GM_addValueChangeListener:void 0,ce=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Ee=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,ne=typeof GM_getValue<"u"?GM_getValue:void 0,se=typeof GM_info<"u"?GM_info:void 0,he=typeof GM_listValues<"u"?GM_listValues:void 0,He=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,ze=typeof GM_removeValueChangeListener<"u"?GM_removeValueChangeListener:void 0,J=typeof GM_setValue<"u"?GM_setValue:void 0,Re=typeof GM_setValues<"u"?GM_setValues:void 0,Ge=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,Ke=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,B=typeof unsafeWindow<"u"?unsafeWindow:void 0,Qe=window;const Oe={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},oe={qmsg_config_position:{key:"qmsg-config-position",defaultValue:"bottom"},qmsg_config_maxnums:{key:"qmsg-config-maxnums",defaultValue:3},qmsg_config_showreverse:{key:"qmsg-config-showreverse",defaultValue:false}},Q={waitRemove(...e){e.forEach(t=>{typeof t=="string"&&P.waitNodeList(t).then(a=>{a.forEach(n=>n.remove());});});},createBlockCSSNode(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(a=>{Array.isArray(a)?t=t.concat(a):t.push(a);}),P.createElement("style",{type:"text/css",innerHTML:`${t.join(`,
`)}{display: none !important;}`})},addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(a=>{Array.isArray(a)?t=t.concat(a):t.push(a);}),j(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){const t=typeof Ee=="function"?Ee(e.keyName):null;return typeof t=="string"&&t?j(t):Q.loadStyleLink(e.url)},async loadStyleLink(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,new Promise(a=>{P.onReady(()=>{document.head.appendChild(t),a(t);});})},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(a=>{t.onload=()=>{a(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.startsWith("data:")||e.match(/^http(s|):\/\//i)?e:e.startsWith("//")?(e.startsWith("///")||(e=window.location.protocol+e),e):(e.startsWith("/")||(e+="/"),e=window.location.origin+e,e)},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;try{let t=new URL(e);return t.protocol="https:",t.toString()}catch{return e}},lockScroll(...e){let t=document.createElement("style");t.innerHTML=`
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;let a=[document.documentElement,document.body].concat(...e||[]);return a.forEach(n=>{n.classList.add("pops-overflow-hidden-important");}),(document.head||document.documentElement).appendChild(t),{recovery(){a.forEach(n=>{n.classList.remove("pops-overflow-hidden-important");}),t.remove();}}},async getClipboardText(){function e(n){navigator.clipboard.readText().then(i=>{n(i);}).catch(i=>{b.error("读取剪贴板内容失败👉",i),n("");});}function t(n){navigator.permissions.query({name:"clipboard-read"}).then(()=>{e(n);}).catch(i=>{b.error("申请剪贴板权限失败，尝试直接读取👉",i.message??i.name??i.stack),e(n);});}function a(){return !(typeof navigator?.clipboard?.readText!="function"||typeof navigator?.permissions?.query!="function")}return new Promise(n=>{if(!a()){n("");return}document.hasFocus()?t(n):window.addEventListener("focus",()=>{t(n);},{once:true});})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/©/g,"&copy;").replace(/®/g,"&reg;").replace(/™/g,"&trade;").replace(/→/g,"&rarr;").replace(/←/g,"&larr;").replace(/↑/g,"&uarr;").replace(/↓/g,"&darr;").replace(/—/g,"&mdash;").replace(/–/g,"&ndash;").replace(/…/g,"&hellip;").replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},interval(e,t,a=5e3){let n,i=a-t,o=t,s=async r=>{const l=await e(r);if(typeof l=="boolean"&&l||r){g.workerClearTimeout(n);return}if(o+=t,o>i){s(true);return}n=g.workerSetTimeout(()=>{s(false);},t);};s(false);},findParentNode(e,t,a){if(a){let n=P.closest(e,a);if(n)return n.querySelector(t)}else return P.matches(e,t)?e:P.closest(e,t)},toStr(e,t=2){const a="__undefined__placeholder__replaced__str__"+performance.now();return JSON.stringify(e,(i,o)=>o===void 0?a:o,t).replace(new RegExp(`"${a}"`,"g"),"undefined")},isVerticalScreen(){return !globalThis.screen.orientation.type.includes("landscape")},isMobileDevice(e=768){return this.isVerticalScreen()?globalThis.innerWidth<e:globalThis.innerHeight<e},isTopWindow(){const e=typeof B=="object"&&B!=null?B:window;return e.top===e.self},formatVideoDuration(e){if(typeof e!="number"&&(e=parseInt(e)),isNaN(e))return e.toString();const t=function(a){return a<10?`0${a}`:a};if(e<60)return `0:${t(e)}`;if(e>=60&&e<3600){const a=Math.floor(e/60),n=e%60;return `${a}:${t(n)}`}else {const a=Math.floor(e/3600),n=Math.floor(e/60)%60,i=e%60;return `${a}:${t(n)}:${t(i)}`}},formatTimeStamp(e,t){if(typeof e=="number"&&e<1e12){const r=String(Date.now()).length-String(e).length;e=e*Math.pow(10,r);}let a=e,n=new Date(typeof e=="string"?e.replace(/-/g,"/"):e),o=new Date(t??Date.now()).getTime()-n.getTime(),s=Math.floor(o/(24*3600*1e3));if(s>0)s>7?a=g.formatTime(n.getTime()):a=s+"天前";else {let r=o%864e5,l=Math.floor(r/(3600*1e3));if(l>0)a=l+"小时前";else {let u=r%36e5,d=Math.floor(u/(60*1e3));if(d>0)a=d+"分钟前";else {let p=u%6e4;a=Math.round(p/1e3)+"秒前";}}}return a}},g=re.noConflict(),c=P.noConflict(),L=be,b=new g.Log(se,B.console||Qe.console),ve=se?.script?.name||void 0,We=be.fn.Utils.AnyTouch();b.config({debug:false,logMaxCount:250,autoClearConsole:true,tag:true});const Be=()=>{const t=be.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex??0,a=g.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex??0;return Math.max(100,t,a)};x.config({isHTML:true,autoClose:true,showClose:false,consoleLogContent(e){const t=e.setting.type;if(t==="loading")return  false;const a=e.setting.content;return t==="warning"?b.warn(a):t==="error"?b.error(a):b.info(a),false},get position(){return C.getValue(oe.qmsg_config_position.key,oe.qmsg_config_position.defaultValue)},get maxNums(){return C.getValue(oe.qmsg_config_maxnums.key,oe.qmsg_config_maxnums.defaultValue)},get showReverse(){return C.getValue(oe.qmsg_config_showreverse.key,oe.qmsg_config_showreverse.defaultValue)},get zIndex(){return Be()}});L.GlobalConfig.setGlobalConfig({zIndex:()=>Be(),mask:{enable:true,clickEvent:{toClose:false,toHide:false}},drag:true});const ue=new g.GM_Menu({GM_getValue:ne,GM_setValue:J,GM_registerMenuCommand:He,GM_unregisterMenuCommand:Ge}),H=new g.Httpx({xmlHttpRequest:Ke,logDetails:false});H.interceptors.request.use(e=>e);H.interceptors.response.use(e=>e,e=>(b.error("[Httpx-HttpxRequest.response] 响应错误",{data:e}),e.type==="onabort"?x.warning("请求取消",{consoleLogContent:true}):e.type==="onerror"?x.error("请求异常",{consoleLogContent:true}):e.type==="ontimeout"?x.error("请求超时",{consoleLogContent:true}):x.error("其它错误",{consoleLogContent:true}),e));B.Object.defineProperty,B.Object.keys,B.Object.values,B.Function.prototype.apply,B.Function.prototype.call,B.Element.prototype.appendChild,B.setTimeout.bind(B),B.clearTimeout.bind(B),B.setInterval.bind(B),B.clearInterval.bind(B);const j=c.addStyle.bind(c);Q.addBlockCSS.bind(Q);const K=P.selector.bind(P),q=P.selectorAll.bind(P);new g.GM_Cookie;const me="GM_Panel",Ae="data-init",X="data-key",ee="data-default-value",je="data-init-more-value",Ue="data-plugin-search-config",O="data-storage-api",W={get width(){return globalThis.innerWidth},get height(){return globalThis.innerHeight}},G={setting:{get width(){return W.width<550?"88vw":W.width<700?"550px":"700px"},get height(){return W.height<450?"70vh":W.height<550?"450px":"550px"}},settingMiddle:{get width(){return W.width<350?"88vw":"350px"}},settingBig:{get width(){return W.width<800?"92vw":"800px"},get height(){return W.height<600?"80vh":"600px"}},info:{get width(){return W.width<350?"88vw":"350px"},get height(){return W.height<250?"88vh":"250px"}}},ge={$data:{__contentConfig:null,get contentConfig(){return this.__contentConfig==null&&(this.__contentConfig=new g.Dictionary),this.__contentConfig},__defaultBottomContentConfig:[]},addContentConfig(e){Array.isArray(e)||(e=[e]);let t=this.$data.contentConfig.keys().length;this.$data.contentConfig.set(t,e);},getAllContentConfig(){return this.$data.contentConfig.values().flat()},getConfig(e=0){return this.$data.contentConfig.get(e)??[]},getDefaultBottomContentConfig(e){if(this.$data.__defaultBottomContentConfig.length)return this.$data.__defaultBottomContentConfig;let t=false,a;const n=(r,l)=>{if(e&&typeof e.translateCallback=="function")return e.translateCallback(r,l);if(typeof l=="object"&&l)for(const u in l)r=r.replaceAll(`{{${u}}}`,l[u]);return r},i=(r,l)=>{typeof l!="string"&&(l=Q.toStr(l));const u=new Blob([l]),d=globalThis.URL.createObjectURL(u);c.createElement("a",{href:d,download:r}).click(),g.workerSetTimeout(()=>{globalThis.URL.revokeObjectURL(d);},500);},o=()=>{const r=w=>{const h=L.alert({title:{text:n("请选择导入方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="local">${n("本地导入")}</div>
            <div class="btn-control" data-mode="network">${n("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${n("剪贴板导入")}</div>`,html:true},btn:{ok:{enable:false},close:{enable:true,callback(I){I.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),m=h.$shadowRoot.querySelector(".btn-control[data-mode='local']"),y=h.$shadowRoot.querySelector(".btn-control[data-mode='network']"),v=h.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),S=async I=>{confirm(n("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）"))&&(typeof he=="function"?typeof ce=="function"?(he().forEach(M=>{ce(M);}),x.success(n("已清空脚本存储的配置"))):x.error(n("不支持GM_deleteValue函数，无法执行删除脚本配置")):x.error(n("不支持GM_listValues函数，无法清空脚本存储的配置"))),typeof Re=="function"?Re(I):Object.keys(I).forEach(M=>{const D=I[M];J(M,D);}),x.success(n("配置导入完毕"));},$=I=>new Promise(async A=>{const k=g.toJSON(I);Object.keys(k).length===0?x.warning(n("解析为空配置，不导入")):await S(k),A(true);});c.on(m,"click",I=>{c.preventEvent(I),h.close();const A=c.createElement("input",{type:"file",accept:".json"});c.on(A,["propertychange","input"],()=>{if(!A.files?.length)return;const k=A.files[0],M=new FileReader;M.onload=()=>{$(M.result);},M.readAsText(k,"UTF-8");}),A.click();}),c.on(y,"click",I=>{c.preventEvent(I),h.close();const A=L.prompt({title:{text:n("网络导入"),position:"center"},content:{text:"",placeholder:n("请填写URL"),focus:true},btn:{close:{enable:true,callback(D){D.close();}},ok:{text:n("导入"),callback:async D=>{const T=D.text;if(g.isNull(T)){x.error(n("请填入完整的url"));return}const V=x.loading(n("正在获取配置...")),E=await H.get(T,{allowInterceptConfig:false});if(V.close(),!E.status){b.error(E),x.error(n("获取配置失败"),{consoleLogContent:true});return}await $(E.data.responseText)&&D.close();}},cancel:{enable:false}},drag:true,mask:{enable:true},width:G.info.width,height:"auto"}),k=A.$shadowRoot.querySelector("input"),M=A.$shadowRoot.querySelector(".pops-prompt-btn-ok");c.on(k,["input","propertychange"],()=>{c.val(k)===""?c.attr(M,"disabled","true"):c.removeAttr(M,"disabled");}),c.onKeyboard(k,"keydown",(D,T,V)=>{D==="Enter"&&V.length===0&&c.val(k)!==""&&c.emit(M,"click");}),c.emit(k,"input");}),c.on(v,"click",async I=>{c.preventEvent(I),h.close();let A=await Q.getClipboardText();if(A.trim()===""){x.warning(n("获取到的剪贴板内容为空"));return}await $(A);});},l=(w=`${ve}_panel-setting-${g.formatTime(Date.now(),"yyyy_MM_dd_HH_mm_ss")}.json`,h)=>{const m=L.alert({title:{text:n("请选择导出方式"),position:"center"},content:{text:`
            <div class="btn-control" data-mode="export-to-file">${n("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${n("导出至剪贴板")}</div>
            `,html:true},btn:{ok:{enable:false},close:{enable:true,callback(S){S.close();}}},drag:true,mask:{enable:true},width:G.info.width,height:G.info.height,style:`
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
          }`}),y=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),v=m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");c.on(y,"click",S=>{c.preventEvent(S);try{i(w,h),m.close();}catch($){x.error($.toString(),{consoleLogContent:true});}}),c.on(v,"click",async()=>{await g.copy(h)?(x.success(n("复制成功")),m.close()):x.error(n("复制失败"));});},d=L.confirm({title:{text:n("配置"),position:"center"},content:{text:'<textarea name="config-value" id="config" readonly></textarea>',html:true},btn:{ok:{enable:true,type:"primary",text:n("导入"),callback(){r();}},cancel:{enable:true,text:n("导出"),callback(){l(void 0,f);}}},width:W.width<450?"90vw":"450px",height:"auto",style:`
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
        `}).$shadowRoot.querySelector("textarea"),p={};if(typeof he=="function")he().forEach(h=>{const m=ne(h);Reflect.set(p,h,m);});else {x.warning(n("不支持函数GM_listValues，仅导出菜单配置"));const w=ne(me);Reflect.set(p,me,w);}const f=Q.toStr(p);d.value=f;},s=()=>{let r=se?.script?.supportURL||se?.script?.namespace;typeof r=="string"&&g.isNotNull(r)&&window.open(r,"_blank");};return [{id:"script-version",title:n("版本：{{version}}",{version:se?.script?.version||n("未知")}),isBottom:true,views:[],clickFirstCallback(){return  false},afterRender(r){new We(r.$asideLiElement).on("tap",function(){clearTimeout(a),a=void 0,t?(t=false,o()):(a=setTimeout(()=>{t=false,s();},200),t=true);});}}]},setDefaultBottomContentConfig(e){this.$data.__defaultBottomContentConfig=e;}},Ye={$data:{__menuOption:[{key:"show_pops_panel_setting",text:"⚙ 设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{C.showPanel(ge.getConfig(0));}}],get menuOption(){return this.__menuOption}},init(){this.initExtensionsMenu();},initExtensionsMenu(){Q.isTopWindow()&&ue.add(this.$data.menuOption);},addMenuOption(e){Array.isArray(e)||(e=[e]),this.$data.menuOption.push(...e);},updateMenuOption(e){Array.isArray(e)||(e=[e]),e.forEach(t=>{let a=this.$data.menuOption.findIndex(n=>n.key===t.key);a!==-1&&(this.$data.menuOption[a]=t);});},getMenuOption(e=0){return this.$data.menuOption[e]},deleteMenuOption(e=0){this.$data.menuOption.splice(e,1);}};class Ze{storageKey;listenerData;cacheData;callbacks=[];constructor(t){if(typeof t=="string"){const a=t.trim();if(a=="")throw new Error("key can not be empty string");this.storageKey=a;}else throw new TypeError("key must be a string");this.listenerData=new re.Dictionary,this.getLocalValue=this.getLocalValue.bind(this),this.setLocalValue=this.setLocalValue.bind(this),this.destory=this.destory.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.getAll=this.getAll.bind(this),this.delete=this.delete.bind(this),this.has=this.has.bind(this),this.keys=this.keys.bind(this),this.values=this.values.bind(this),this.clear=this.clear.bind(this),this.addValueChangeListener=this.addValueChangeListener.bind(this),this.removeValueChangeListener=this.removeValueChangeListener.bind(this),this.emitValueChangeListener=this.emitValueChangeListener.bind(this);}[Symbol.dispose](){this.destory();}async[Symbol.asyncDispose](){this.destory();}destory(){this.cacheData=null;for(let t=this.callbacks.length-1;t>=0;t--){const a=this.callbacks[t];a(),this.callbacks.splice(t,1);}}getLocalValue(){if(this.cacheData==null){let t=ne(this.storageKey);t==null&&(t={},this.setLocalValue(t)),this.destory(),this.cacheData=t;const a=Pe(this.storageKey,(n,i,o)=>{this.cacheData=null,this.cacheData=o;});return this.callbacks.push(()=>{ze(a);}),t}else return this.cacheData}setLocalValue(t){this.cacheData=null,this.cacheData=t,J(this.storageKey,t);}set(t,a){const n=this.get(t),i=this.getLocalValue();Reflect.set(i,t,a),this.setLocalValue(i),this.emitValueChangeListener(t,a,n);}get(t,a){const n=this.getLocalValue();return Reflect.get(n,t)??a}getAll(){return this.getLocalValue()}delete(t){const a=this.get(t),n=this.getLocalValue();Reflect.deleteProperty(n,t),this.setLocalValue(n),this.emitValueChangeListener(t,void 0,a);}has(t){const a=this.getLocalValue();return Reflect.has(a,t)}keys(){const t=this.getLocalValue();return Reflect.ownKeys(t)}values(){const t=this.getLocalValue();return Reflect.ownKeys(t).map(a=>Reflect.get(t,a))}clear(){this.destory(),ce(this.storageKey);}addValueChangeListener(t,a){const n=Math.random(),i=this.listenerData.get(t)||[];return i.push({id:n,key:t,callback:a}),this.listenerData.set(t,i),n}removeValueChangeListener(t){let a=false;for(const[n,i]of this.listenerData.entries()){for(let o=0;o<i.length;o++){const s=i[o];(typeof t=="string"&&s.key===t||typeof t=="number"&&s.id===t)&&(i.splice(o,1),o--,a=true);}this.listenerData.set(n,i);}return a}async emitValueChangeListener(...t){const[a,n,i]=t;if(!this.listenerData.has(a))return;const o=this.listenerData.get(a);for(let s=0;s<o.length;s++){const r=o[s];if(typeof r.callback=="function"){let l,u;t.length===1||(t.length===2?l=n:t.length===3&&(l=n,u=i)),await r.callback(a,l,u);}}}}const Z=new Ze(me),C={$data:{__contentConfigInitDefaultValue:null,__onceExecMenuData:null,__urlChangeReloadMenuExecOnce:null,__onceExecData:null,__panelConfig:{},$panel:null,panelContent:[],get contentConfigInitDefaultValue(){return this.__contentConfigInitDefaultValue==null&&(this.__contentConfigInitDefaultValue=new g.Dictionary),this.__contentConfigInitDefaultValue},contentConfigInitDisabledKeys:[],get onceExecMenuData(){return this.__onceExecMenuData==null&&(this.__onceExecMenuData=new g.Dictionary),this.__onceExecMenuData},get urlChangeReloadMenuExecOnce(){return this.__urlChangeReloadMenuExecOnce==null&&(this.__urlChangeReloadMenuExecOnce=new g.Dictionary),this.__urlChangeReloadMenuExecOnce},get onceExecData(){return this.__onceExecData==null&&(this.__onceExecData=new g.Dictionary),this.__onceExecData},get scriptName(){return ve},get panelConfig(){return this.__panelConfig},set panelConfig(e){this.__panelConfig=e;},key:me,attributeKeyName:X,attributeDefaultValueName:ee},init(){this.initContentDefaultValue(),Ye.init();},initContentDefaultValue(){const e=n=>{if(!n.attributes||n.type==="button"||n.type==="container"||n.type==="deepMenu")return;const i=n.attributes,o=i[Ae];if(typeof o=="function"){const u=o();if(typeof u=="boolean"&&!u)return}const s=new Map,r=i[X];if(r!=null){const u=i[ee];s.set(r,u);}const l=i[je];if(typeof l=="object"&&l&&Object.keys(l).forEach(u=>{const d=l[u];s.set(u,d);}),!s.size){b.warn("请先配置键",n);return}if(n.type==="switch"){const u=typeof n.disabled=="function"?n.disabled():n.disabled;typeof u=="boolean"&&u&&this.$data.contentConfigInitDisabledKeys.push(...s.keys());}for(const[u,d]of s.entries())this.setDefaultValue(u,d);},t=n=>{for(let i=0;i<n.length;i++){const o=n[i];e(o);const s=o.views;s&&Array.isArray(s)&&t(s);}},a=[...ge.getAllContentConfig()];for(let n=0;n<a.length;n++){const i=a[n];if(!i.views)continue;const o=i.views;o&&Array.isArray(o)&&t(o);}this.$data.contentConfigInitDisabledKeys=[...new Set(this.$data.contentConfigInitDisabledKeys)];},setDefaultValue(e,t){this.$data.contentConfigInitDefaultValue.has(e)&&b.warn("该key已存在，初始化默认值失败: ",{key:e,initValue:this.$data.contentConfigInitDefaultValue.get(e)}),this.$data.contentConfigInitDefaultValue.set(e,t);},getDefaultValue(e){return this.$data.contentConfigInitDefaultValue.get(e)},setValue(e,t){Z.set(e,t);},getValue(e,t){const a=Z.get(e);return a??(this.$data.contentConfigInitDefaultValue.has(e)?this.$data.contentConfigInitDefaultValue.get(e):t)},deleteValue(e){Z.delete(e);},hasKey(e){return Z.has(e)},addValueChangeListener(e,t,a){const n=Z.addValueChangeListener(e,t);if(a?.immediate||a?.immediateAll){const i=this.getValue(e);a?.immediate?t(e,i,i):a?.immediateAll&&C.emitMenuValueChange(e,i,i);}return n},removeValueChangeListener(e){Z.removeValueChangeListener(e);},emitMenuValueChange(e,t,a){Z.emitValueChangeListener(e,t,a);},async exec(e,t,a,n=true){const i=this;let o;typeof e=="string"||Array.isArray(e)?o=()=>e:o=e;let s=false;const r=o();let l=[];Array.isArray(r)?(s=true,l=r):l.push(r);const u=l.find(A=>!this.$data.contentConfigInitDefaultValue.has(A));if(u){b.warn(`${u} 键不存在`);return}const d=JSON.stringify(l);if(n&&this.$data.onceExecMenuData.has(d))return this.$data.onceExecMenuData.get(d);let p=[];const f=[];let w=[];const h=(A,k)=>{const M=[],D=[];let T=[];if(Array.isArray(k))T=T.concat(k);else {const E=R=>{if(typeof R=="object"&&R!=null)if(R instanceof Element)T.push(R);else {const{$css:_,destory:z}=R;_!=null&&(Array.isArray(_)?T=T.concat(_):T.push(_)),typeof z=="function"&&T.push(z);}else T.push(R);};if(k!=null&&Array.isArray(k))for(const R of k)E(R);else E(k);}const V=E=>{if(E!=null){if(E instanceof Element){M.push(E);return}if(typeof E=="function"){D.push(E);return}}};for(const E of T){const R=V(E);if(typeof R=="boolean"&&!R)break;if(Array.isArray(E))for(const _ of E){const z=V(_);if(typeof z=="boolean"&&!z)break}}y(),v(),A&&(p=p.concat(M),w=w.concat(D));},m=A=>!!this.getValue(A),y=()=>{for(let A=0;A<p.length;A++)p[A]?.remove(),p.splice(A,1),A--;},v=()=>{for(let A=0;A<w.length;A++){const k=w[A];k(),w.splice(A,1),A--;}},S=()=>{let A=false;return typeof a=="function"?A=a(l):A=l.every(k=>m(k)),A},$=async A=>{const k=S();let M=[];if(k){const D=l.map(T=>this.getValue(T));M=await t({key:l,triggerKey:A?.key,value:s?D:D[0],addStoreValue:(...T)=>h(k,T)});}h(k,M);};n&&l.forEach(A=>{const k=this.addValueChangeListener(A,(M,D,T)=>$({key:M}));f.push(k);}),await $();const I={reload(){this.clearStoreStyleElements(),this.destory(),$();},clear(){this.clearStoreStyleElements(),this.destory(),this.removeValueChangeListener(),this.clearOnceExecMenuData();},clearStoreStyleElements:()=>y(),destory(){return v()},removeValueChangeListener:()=>{f.forEach(A=>{this.removeValueChangeListener(A);});},clearOnceExecMenuData(){n&&i.$data.onceExecMenuData.delete(d);}};return this.$data.onceExecMenuData.set(d,I),I},async execMenu(e,t,a=false,n=false){return await this.exec(e,async i=>await t(i),i=>i.every(s=>{let r=!!this.getValue(s);return C.$data.contentConfigInitDisabledKeys.includes(s)&&(r=false,b.warn(`.execMenu${n?"Once":""} ${s} 被禁用`)),a&&(r=!r),r}),n)},async execMenuOnce(e,t,a=false,n=false){const i=await this.execMenu(e,t,a,true);if(n&&i){const o=()=>{i.reload();};this.removeUrlChangeWithExecMenuOnceListener(e),this.addUrlChangeWithExecMenuOnceListener(e,o);}return i},deleteExecMenuOnce(e){return e=this.transformKey(e),this.$data.onceExecMenuData.delete(e),this.$data.urlChangeReloadMenuExecOnce.delete(e),Z.removeValueChangeListener(e)},onceExec(e,t,a=false){if(e=this.transformKey(e),typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExecData.has(e)||a&&(Array.isArray(e)?e:[e]).findIndex(i=>{if(!!!C.getValue(i))return  true})!==-1||(t(),this.$data.onceExecData.set(e,1));},deleteOnceExec(e){e=this.transformKey(e),this.$data.onceExecData.delete(e);},addUrlChangeWithExecMenuOnceListener(e,t){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.set(e,t),{off:()=>this.removeUrlChangeWithExecMenuOnceListener(e)}},removeUrlChangeWithExecMenuOnceListener(e){e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.delete(e);},hasUrlChangeWithExecMenuOnceListener(e){return e=this.transformKey(e),this.$data.urlChangeReloadMenuExecOnce.has(e)},async emitUrlChangeWithExecMenuOnceEvent(e){const t=this.$data.urlChangeReloadMenuExecOnce.values();for(const a of t)await a(e);},showPanel(e,t=`${ve}-设置`,a=false,n=false){this.$data.$panel=null,this.$data.panelContent=[];const i=e.findIndex(s=>(typeof s.isBottom=="function"?s.isBottom():!!s.isBottom)&&s.id==="script-version")!==-1;!a&&!i&&e.push(...ge.getDefaultBottomContentConfig());const o=L.panel({title:{text:t,position:"center",html:false,style:""},content:e,btn:{close:{enable:true,callback:s=>{s.close(),this.$data.$panel=null;}}},mask:{enable:true,clickEvent:{toClose:true,toHide:false},clickCallBack:s=>{s(),this.$data.$panel=null;}},width:G.setting.width,height:G.setting.height,drag:true,only:true,style:`
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,...this.$data.panelConfig});return this.$data.$panel=o,this.$data.panelContent=e,n||this.registerConfigSearch({$panel:o,content:e}),{$panel:o,content:e}},registerConfigSearch(e){const{$panel:t,content:a}=e,n=(w,h)=>{if(typeof e.translateCallback=="function")return e.translateCallback(w,h);if(typeof h=="object"&&h)for(const m in h)w=w.replaceAll(`{{${m}}}`,h[m]);return w},i=async(w,h)=>{if(w==null)return;const m=await h(w);return m&&typeof m.isFind=="boolean"&&m.isFind?m.data:await i(m.data,h)},o=(w,h)=>{const m=new IntersectionObserver(y=>{y.forEach(v=>{v.isIntersecting&&(h?.(),m.disconnect());});},{root:null,threshold:1});m.observe(w),w.scrollIntoView({behavior:"smooth",block:"center"});},s=w=>{const h="pops-flashing";c.onAnimationend(w,()=>{w.classList.remove(h);}),w.classList.add(h);},r=w=>{if(w.type==="dblclick"&&f)return;c.preventEvent(w);const h=L.alert({title:{text:n("搜索配置"),position:"center"},content:{text:`
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${n("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,html:true},btn:{ok:{enable:false}},mask:{clickEvent:{toClose:true}},width:G.settingMiddle.width,height:"auto",drag:true,style:`
					${L.config.cssText.panelCSS}

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
					${e.searchDialogStyle??""}
				`});h.$shadowRoot.querySelector(".search-wrapper");const m=h.$shadowRoot.querySelector(".search-config-text"),y=h.$shadowRoot.querySelector(".search-result-wrapper");m.focus();const v=()=>{c.empty(y);},S=I=>{const A=g.queryProperty(I,D=>D?.next?{isFind:false,data:D.next}:{isFind:true,data:D}),k=c.createElement("div",{className:"search-result-item",innerHTML:`
							<div class="search-result-item-path">${A.matchedData?.path}</div>
							<div class="search-result-item-description">${A.matchedData?.description??""}</div>
						`}),M=L.fn.PanelHandlerComponents();return c.on(k,"click",()=>{const T=t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[I.index];if(!T){x.error(n("左侧项下标{{index}}不存在",{index:I.index}));return}T.scrollIntoView({behavior:"smooth",block:"center"}),T.click(),i(I.next,async V=>{if(V?.next){const E=await c.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(R=>{const _=Reflect.get(R,M.$data.nodeStoreConfigKey);return typeof _=="object"&&_!=null&&_.text===V.name}),2500);if(E)E.click();else return x.error(n("未找到对应的二级菜单")),{isFind:true,data:V};return {isFind:false,data:V.next}}else {const E=await c.waitNode(()=>Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(R=>Reflect.get(R,M.$data.nodeStoreConfigKey)===V.matchedData?.formConfig),2500);if(E){o(E);const R=E.closest(".pops-panel-forms-fold[data-fold-enable]");R&&(R.querySelector(".pops-panel-forms-fold-container").click(),await g.sleep(500)),o(E,()=>{s(E);});}else x.error(n("未找到对应的菜单项"));return {isFind:true,data:V}}});}),k},$=I=>{const A=new RegExp(I,"i"),k=[],M=(T,V)=>{for(let E=0;E<T.length;E++){const R=T[E],_=R.views;if(_&&Array.isArray(_)){const z=g.deepClone(V);if(R.type==="deepMenu"){const ae=g.queryProperty(z,ie=>ie?.next?{isFind:false,data:ie.next}:{isFind:true,data:ie});ae.next={name:R.text};}M(_,z);}else {let z,ae;if(R.type==="own"){let N=Reflect.get(R.attributes||{},Ue);N&&(typeof N=="function"&&(N=N()),typeof N.text=="string"&&(z=N.text),typeof N.desc=="string"&&(ae=N.desc));}else z=R.text,ae=Reflect.get(R,"description");const ie=[z,ae],Ce=ie.findIndex(N=>{if(typeof N=="string")return N.match(A)});if(Ce!==-1){const N=g.deepClone(V),ke=g.queryProperty(N,Y=>Y?.next?{isFind:false,data:Y.next}:{isFind:true,data:Y});ke.next={name:z,matchedData:{path:"",formConfig:R,matchedText:ie[Ce],description:ae}};const Se=[];g.queryProperty(N,Y=>{const xe=Y?.name;return typeof xe=="string"&&xe.trim()!==""&&Se.push(xe),Y?.next?{isFind:false,data:Y.next}:{isFind:true,data:Y}});const Fe=Se.join(Q.escapeHtml(" - "));ke.next.matchedData.path=Fe,k.push(N);}}}};for(let T=0;T<a.length;T++){const V=a[T];if(!V.views||V.isBottom&&V.id==="script-version")continue;const E=V.views;if(E&&Array.isArray(E)){let R=V.title;typeof R=="function"&&(R=R()),M(E,{index:T,name:R});}}const D=document.createDocumentFragment();for(const T of k){const V=S(T);D.appendChild(V);}v(),y.append(D);};c.on(m,"input",g.debounce(I=>{c.preventEvent(I);const A=c.val(m).trim();if(A===""){v();return}$(A);},200));};t.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)").forEach(w=>{c.on(w,"dblclick",r);});const u=new WeakMap;let d=false,p,f=false;c.on(t.$shadowRoot,"touchend","aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",(w,h)=>{f=true,clearTimeout(p),p=void 0,d&&u.has(h)?(d=false,u.delete(h),r(w)):(p=setTimeout(()=>{d=false;},200),d=true,u.set(h,w));},{capture:true}),t.$shadowRoot.appendChild(c.createElement("style",{type:"text/css",textContent:`
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
    		`}));},transformKey(e){if(Array.isArray(e)){const t=e.sort();return JSON.stringify(t)}else return e},getDynamicValue(e,t){const a=this;let n=false,i=t;const o=this.addValueChangeListener(e,(s,r)=>{i=r;});return {get value(){return n||(n=true,i=a.getValue(e,t)),i},destory(){a.removeValueChangeListener(o);}}}};Q.setGMResourceCSS(Oe.Viewer);Q.setGMResourceCSS(Oe.Hljs);L.GlobalConfig.setGlobalConfig({mask:{enable:true},drag:true});const Je=()=>{const e="texttolink",t=/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi,a=function(h){let m=h.originalTarget??h.target,y;if(m!=null&&m.localName==="a"&&m.className.indexOf(e)!==-1&&(y=m.getAttribute("href"),typeof y=="string"&&y.indexOf("http")!==0&&y.indexOf("ed2k://")!==0&&y.indexOf("thunder://")!==0))return m.setAttribute("href","http://"+m)},n=function(h){if(typeof h!="object"||h==null)return;const m=h?.textContent,y=h?.parentNode;if(y!=null&&y?.className?.indexOf?.(e)===-1&&h.nodeName!=="#cdata-section"&&typeof m=="string"){const v=m.replace(t,`<a href="$1" target="_blank" class="${e}">$1</a>`);if(m.length!==v.length){const S=document.createElement("span");c.html(S,v);const $=S.querySelector("a"),I=$.href;return console.log(`识别: ${I}`),y.nodeName.toLowerCase()==="span"?y.replaceChild($,h):y.replaceChild(S,h)}}},i="a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(" "),o=`//text()[not(ancestor::${i.join(") and not(ancestor::")})]`,s=new RegExp(`^(${i.join("|")})$`,"i"),r=function(h,m){let y,v;if(m+1e4<h.snapshotLength){let S=y=m;for(v=m+1e4;m<=v?y<=v:y>=v;S=m<=v?++y:--y)n(h.snapshotItem(S));setTimeout(function(){return r(h,m+1e4)},15);}else {let S;for(S=y=m,v=h.snapshotLength;m<=v?y<=v:y>=v;S=m<=v?++y:--y)n(h.snapshotItem(S));}},l=function(h){const m=document.evaluate(o,h,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return r(m,0)},u=function(h){for(const m=document.createTreeWalker(h,NodeFilter.SHOW_TEXT,{acceptNode:function(y){const v=y?.parentNode?.localName;return s.test(v)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});m.nextNode();)n(m.currentNode);};let d=new g.LockFunction(h=>{for(const m of h)if(m.type==="childList"){const y=m.addedNodes;for(let v=0;v<y.length;v++){const S=y[v];u(S);}}});const p=function(){return l(document.body),g.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:m=>{d.run(m);}})},f=function(h){const m=h.getAttribute("href");if(typeof m=="string"&&m.indexOf("http")!==0&&m.indexOf("ed2k://")!==0&&m.indexOf("thunder://")!==0)return h.setAttribute("href","http://"+m)},w=function(){const h=Array.from(document.getElementsByClassName(e));for(const m of h)f(m);};document.addEventListener("mouseover",a),setTimeout(w,1500),setTimeout(p,100);},we={formhash:/formhash=([0-9a-zA-Z]+)/,uid:/uid(=|-)(\d+)/,fontSpecial:/<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g},F={getAvatar:(e,t="middle")=>`/uc_server/avatar.php?uid=${e}&size=${t}&ts=1`,getCurrentUID(){let e=B.discuz_uid;if(typeof e=="string")return e;let t=K('.sidenv_exit a[href*="uid-"]')||K('#comiis_key a[href*="uid-"]');if(t){let a=t.href.match(/uid=([0-9]+)/);if(a)return a[a.length-1]}},async getFormHash(){let e=Array.from((top||globalThis).document.querySelectorAll("input[name=formhash]"));for(let n=0;n<e.length;n++){let o=e[n].value;if(o)return o}let t=Array.from((top||globalThis).document.querySelectorAll('a[href*="formhash="]'));for(let n=0;n<t.length;n++){let o=t[n].href.match(we.formhash);if(o){let s=o[o.length-1];if(s)return s}}let a=await H.get("/home.php?mod=spacecp",{fetch:true,allowInterceptConfig:false});if(a.status){let n=a.data.responseText,o=c.toElement(n,true,true).querySelector("input[name=formhash]");if(o){let s=o.value;if(g.isNotNull(s))return s}}else b.error("请求个人主页获取formhash失败",a);},envIsMobile(){return (B.STYLEID||window.STYLEID||typeof STYLEID<"u"&&STYLEID)==="3"},getThreadId:e=>{let t=e.match(/thread-([\d]+)-|&tid=([\d]+)/i);if(t){let a=t.filter(Boolean);return a[a.length-1]}},getForumId(e){let t=e.match(/&fid=([\d]+)/i);if(t)return t[t.length-1]},getPostId(e){let t=e.match(/&pid=([\d]+)/i);if(t)return t[t.length-1]},getRepquote(e){let t=e.match(/&repquote=([\d]+)/i);if(t)return t[t.length-1]}},fe={$key:{sign:"mt-sign-time"},init(){this.sign();},checkSignInfo(){let t=this.getSignInfo().find(a=>a.hostName===window.location.hostname);return t?g.formatTime(Date.now(),"yyyyMMdd")===g.formatTime(t.time,"yyyyMMdd"):false},setSignInfo(){let e={hostName:window.location.hostname,time:Date.now()},t=this.getSignInfo(),a=t.findIndex(n=>n.hostName===e.hostName);a!==-1&&t.splice(a,1),t.push(e),J(this.$key.sign,t);},getSignInfo(){let e=ne(this.$key.sign,[]);return Array.isArray(e)?e:(this.clearSignInfo(),[])},getHostNameSignInfo(e=window.location.hostname){return this.getSignInfo().find(a=>a.hostName===e)},clearSignInfo(e){if(typeof e=="string"){let t=this.getSignInfo(),a=t.findIndex(n=>n.hostName===e);a!==-1&&t.splice(a,1),J(this.$key.sign,t);}else ce(this.$key.sign);},checkLogin(){return F.envIsMobile()?!!K("a[href*='member.php?mod=logging&action=logout']"):!!K("#comiis_key")},async sign(){let e=await F.getFormHash();if(e==null){if(K("#comiis_picshowbox")){b.info("当前为评论区的看图模式 ");return}b.error("自动签到：获取账号formhash失败"),this.clearSignInfo(window.location.hostname),x.error({content:"自动签到：获取账号formhash失败"});return}if(this.checkSignInfo()){b.info("今日已签到");return}let t=!!C.getValue("mt-auto-sign-useFetch"),a=g.getRandomPCUA(),n=()=>{this.setSignInfo();},i=()=>{this.clearSignInfo(window.location.hostname);},o=r=>{let u=be.alert({title:{text:"未知签到内容",position:"center"},content:{text:"",html:false},width:"88vw",height:"300px"}).$shadowRoot.querySelector(".pops-alert-content");u.innerText=r;},s=[{checkPluginEnableUrl:"/plugin.php?id=k_misign:sign",async sign(){let r={operation:"qiandao",format:"button",formhash:e,inajax:1,ajaxtarget:"midaben_sign"},l=await H.get(`/k_misign-sign.html?${g.toSearchParamsStr(r)}`,{fetch:t,headers:{"User-Agent":a},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),b.info("签到信息：",l);let u=l.data.responseText,d=g.parseCDATA(u),p=c.toElement(`<div>${d}</div>`,true,false),f=c.text(p);if(f.includes("需要先登录")){x.error("签到：请先登录账号",{timeout:3e3,consoleLogContent:true}),i();return}else if(f.includes("请稍后再试")||f.includes("您已经被列入黑名单")||f.includes("绑定手机号后才可以签到")||f.includes("您所在用户组不允许使用")){x.error("签到："+f,{timeout:5e3});return}else if(f.includes("今日已签")||f.includes("今日已经签到")){x.info("签到："+f);return}else if(u.includes("您当前的访问请求当中含有非法字符，已经被系统拒绝")){x.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",{timeout:6e3});return}else if(t&&"location"in g.toJSON(u)){x.success("签到: 签到成功");return}let w=p.querySelector(".con"),h=p.querySelector(".line");if(w&&h){let m=c.text(w).match(/([0-9]+)金币/),y=c.text(h).match(/([0-9]+)/),v=m[m.length-1],S=y[y.length-1];b.success(`金币${v}，排名${S}`),x.info(`
							<div style="display: flex;${F.envIsMobile()?"":"padding: 20px;"}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${S}<br>金币 ${v}</div>
							</div>`,{timeout:4e3,isHTML:true});return}o(u);}},{checkPluginEnableUrl:"/plugin.php?id=dsu_paulsign:sign",async sign(){let r={id:"dsu_paulsign:sign",operation:"qiandao",infloat:1,inajax:1},l=await H.post(`/plugin.php?${g.toSearchParamsStr(r)}`,{data:{formhash:e,qdxq:"kx",qdmode:3,todaysay:"",fastreply:0},processData:true,fetch:t,headers:{"User-Agent":a,"Content-Type":"application/x-www-form-urlencoded"},allowInterceptConfig:false});if(!l.status){x.error("签到：网络异常，请求失败",{consoleLogContent:true});return}n(),b.info("签到信息：",l);let u=l.data.responseText;if(u.includes("签到成功")){x.success("签到：签到成功");return}if(u.includes("今日已经签到")){x.info("签到：您今日已经签到，请明天再来！");return}o(u);}}];for(let r=0;r<s.length;r++){const l=s[r];let u=await H.get(l.checkPluginEnableUrl,{fetch:t,headers:{"User-Agent":g.getRandomPCUA()},allowInterceptConfig:false});if(!u.status){b.error("签到：检查签到插件是否启用的请求失败",u);continue}if(c.toElement(u.data.responseText,true,true).querySelector("#messagetext")||u.data.responseText.includes("插件不存在或已关闭")){b.error(`插件：${l.checkPluginEnableUrl} 未启用或不存在`);continue}await l.sign();break}}},le={isKMiSign(){return window.location.pathname.startsWith("/k_misign-sign.html")},isPost(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/thread-")||window.location.pathname.startsWith("/forum.php")&&e.has("mod","viewthread")},isPage(){return !!window.location.pathname.match(/^\/page-([0-9]+).html/g)},isGuide(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","guide")},isPlate(){return !!window.location.pathname.match(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)},isSearch(){return window.location.pathname.startsWith("/search.php")},isSpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")},isMySpace(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","profile")&&e.has("mycenter")},isSpaceWithAt(){return window.location.pathname.startsWith("/space-uid-")},isForumList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("forumlist")},isMessage(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","notice")},isMessageList(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/home.php")&&e.has("mod","space")&&e.has("do","pm")},isPointsMall(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/keke_integralmall-keke_integralmall.html")||window.location.pathname.startsWith("/plugin.php")&&e.has("id","keke_integralmal")},isPostPublish(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("mod","post")},isPostPublish_voting(){const e=new URLSearchParams(window.location.search);return window.location.pathname.startsWith("/forum.php")&&e.has("special","1")||e.has("fid","42")},isPostPublish_edit(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","edit")},isPostPublish_newthread(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","newthread")},isPostPublish_reply(){const e=new URLSearchParams(window.location.search);return this.isPostPublish()&&e.has("action","reply")}},Xe={init(){c.onReady(()=>{C.execMenuOnce("mt-forum-post-quickCollentBtn",()=>this.quickCollentBtn()),C.execMenuOnce("mt-forum-post-quickReplyOptimization",()=>this.quickReplyOptimization());});},async quickCollentBtn(){b.info("【快捷收藏】");const e=await c.waitNode("#scrolltop",1e4);if(!e)return;let t=await F.getFormHash(),a=F.getThreadId(window.location.href),n=`/home.php?${g.toSearchParamsStr({mod:"spacecp",ac:"favorite",type:"thread",id:a,formhash:t,infloat:"yes",handlekey:"k_favorite",inajax:1,ajaxtarget:"fwin_content_k_favorite"})}`,i=c.createElement("span",{innerHTML:`
      <a href="${n}" 
        id="k_favorite"
        onclick="showWindow(this.id, this.href, 'get', 0);"
        onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
        <img src="data:image/png;base64,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"
            height="26" 
            width="26" 
            style="position:absolute;top:10px;left:11px">
      </a>
      `});return c.prepend(e,i),[j(`
      a#k_favorite{
        background: #ffffff;
      }
      a#k_favorite:hover{
        background: #f80 !important;
      }
    `),()=>{c.remove(i);}]},async quickReplyOptimization(){const e=await c.waitNode('#scrolltop a[title="快速回复"]',1e4);return e?(b.info("快捷回复优化"),c.on(e,"click",function(){B.showWindow("reply",e.href),b.info("等待弹窗出现"),c.waitNode("#moreconf",1e4).then(a=>{if(!a)return;b.success("弹出出现，添加按钮");let n=c.createElement("button",{innerText:"一键空格",type:"button",id:"insertspace2"},{style:"float: left;"});c.on(n,"click",i=>{c.preventEvent(i),c.val(K("#postmessage"),c.val(K("#postmessage"))+"           ");}),c.append(a,n);});}).off):void 0}},et=".pls .avatar img,.avtm img{border-radius:10%}.pls .avatar img{--avatar-size: 90px;width:var(--avatar-size);height:var(--avatar-size)}";Ne(et);const $e={$flag:{isSetHljsCSS:false},init(){Xe.init(),C.execMenuOnce("mt-forum-post-autoExpandContent",()=>this.autoExpandContent()),C.execMenuOnce("mt-forum-post-repairImageWidth",()=>this.repairImageWidth()),C.execMenuOnce("mt-forum-post-hideBottomInfoBlock",()=>this.hideBottomInfoBlock()),c.onReady(()=>{C.execMenu("mt-forum-post-removeFontStyle",()=>{this.removeFontStyle();}),C.execMenu("mt-forum-post-removeCommentFontStyle",()=>{this.removeCommentFontStyle();}),C.execMenuOnce("mt-forum-post-loadNextPageComment",()=>this.loadNextPageComment()),C.execMenuOnce("mt-forum-post-codeQuoteOptimization",()=>this.codeQuoteOptimization()),C.execMenuOnce("mt-forum-post-optimizationImagePreview",()=>this.optimizationImagePreview()),C.execMenuOnce("mt-forum-post-interceptionAttachment",()=>this.setAttachmentsClickTip()),C.execMenu("mt-forum-post-detectingUserOnlineStatus",()=>{this.detectingUserOnlineStatus();}),C.execMenu("mt-forum-post-showUserLevel",()=>{this.showUserLevel();});});},autoExpandContent(){return b.info("自动展开帖子内容"),[j(`
				div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{
					max-height:inherit!important;
					overflow-y:inherit!important;
					position:inherit!important
				}
        	`),Q.addBlockCSS(".comiis_lookfulltext_bg",".comiis_lookfulltext_key")]},repairImageWidth(){return b.info("修复图片宽度"),j(`
        .comiis_messages img{
            max-width: 100% !important;
        }`)},removeFontStyle(){let e=K(".comiis_a.comiis_message_table");e&&(b.info("移除帖子字体效果"),c.html(e,c.html(e).replace(we.fontSpecial,"")));},removeCommentFontStyle(){b.info("移除评论区的字体效果");let e=q("font"),t=c.html(K(".comiis_postlist .comiis_postli"))||"";t!==""&&(e.forEach(a=>{t.includes(a.innerHTML)||(a.removeAttribute("color"),a.removeAttribute("style"),a.removeAttribute("size"));}),q(".comiis_message.message").forEach(a=>{if(t.includes(a.innerHTML)){c.html(a,c.html(a).replace(we.fontSpecial,""));let n=c.next(a);n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));}})),q(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach(a=>{let n=a.parentElement;n&&n.localName==="strike"&&(n.outerHTML=n.outerHTML.replace(/^<strike>(\n|)/g,"").replace(/<\/strike>$/g,""));});},loadNextPageComment(){if(b.info("自动加载下一页评论"),document.title.includes("提示信息 - MT论坛"))return;if(q(".pgbtn").length==0){b.warn("没有找到下一页按钮");return}const e=async function(i){let o=await H.get(i,{fetch:true,allowInterceptConfig:false});if(!o.status){x.error("网络异常，请求下一页失败");return}const s=g.parseFromString(o.data.responseText),r=s.querySelector(".pgbtn a");return s.querySelector("#postlistreply")?.remove(),s.querySelector(".bm_h.comiis_snvbt")?.remove(),{url:r?r.getAttribute("href"):null,postlist:s.querySelector("#postlist"),pgbtn:s.querySelector(".pgbtn"),pgs:s.querySelector(".pgs.mtm")}},t=async function(){const i=K(".pgbtn a").getAttribute("href");if(i){let o=await e(i);o&&(o.postlist?.querySelector(".comiis_vrx")?.querySelector(".km1")&&(Object.keys(o).forEach(s=>{o[s]=null;}),b.warn("检测到请求的本页内容中存在【楼主】标识，判断为重复页请求")),(!o.url||o.url==i)&&(b.error("最后一页，取消监听"),c.off(document,["scroll","wheel"],a.run),c.remove(".pgbtn")),o.postlist&&c.append("#postlist",c.html(o.postlist)),o.pgbtn&&c.html(".pgbtn",c.html(o.pgbtn)),o.pgs&&c.html(".pgs.mtm",c.html(o.pgs)),$e.init());}else b.error("获取下一页元素失败");};let a=new g.LockFunction(async()=>{g.isNearBottom()&&await t();});const n=c.on(document,["scroll","wheel"],a.run);return [()=>{n.off();}]},codeQuoteOptimization(){b.info("代码块优化");function e(n){const i=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],o=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],s=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system","interface","enum","annotation","volatile","native","strictfp","synchronized"],r=["void","boolean","byte","short","char","int","long","float","double","boolean\\[","byte\\[","short\\[","char\\[","int\\[","long\\[","float\\[","double\\["];return {aliases:["smali"],keywords:{keyword:s.join(" "),built_in:i.concat(o).join(" "),type:r.join(" ")},contains:[{className:"string",begin:'"',end:'"',relevance:0,contains:[n.BACKSLASH_ESCAPE,{className:"char.escape",begin:/\\[nrtbf]/,relevance:0}]},{className:"string",begin:"'",end:"'",relevance:0},n.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+s.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+i.join("|")+")\\s"},{begin:"\\s("+i.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+o.join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{className:"function",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*\\(",end:"\\s*\\)",excludeBegin:true,excludeEnd:true,relevance:0,contains:[{className:"params",begin:"\\S",endsWithParent:true,relevance:0}]},{className:"variable",begin:"[vp][0-9]+",relevance:0},{className:"number",variants:[{begin:"\\b-?0[xX][0-9a-fA-F]+[lL]?"},{begin:"\\b-?0[0-7]+[lL]?"},{begin:"\\b-?[0-9]+[lLfF]?"}],relevance:0},{className:"property",begin:"\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*\\s*->\\s*[a-zA-Z_<][a-zA-Z0-9_<>]*",relevance:0}]}}pe.registerLanguage("smali",e);let t=new g.LockFunction(()=>{function n(o,s="java"){o.oldValue||(o.oldValue=o.textContent),c.html(o,pe.highlight(o.oldValue,{language:s}).value.replace(/\\n$/gi,""));}q("em[onclick^=copycode]").forEach(o=>{if(o.nextElementSibling&&typeof o.nextElementSibling.className=="string"&&o.nextElementSibling.className=="code-select-language")return;const s=c.text(o.parentElement.querySelector("div[id^=code]"));let r=pe.highlightAuto(s).language;s.trim().startsWith("invoke-")&&(r="smali"),r&&!["bash","css","javascript","json","java","kotlin","python","smali","typescript"].includes(r)&&(r="plaintext");const l=c.createElement("select",{className:"code-select-language"});let u=pe.listLanguages().sort();u=u.concat("自动检测");let d="";u.forEach(p=>{p.startsWith("自动检测")?d+=`<option data-value="${r}" selected="selected">${p}(${r})</option>`:d+=`<option data-value="${p}">${p}</option>`;}),c.html(l,d),c.on(l,"change",()=>{let p=l.selectedOptions[0].getAttribute("data-value");b.info("切换代码块语言: ",p),c.parent(l).querySelectorAll("li").forEach(f=>{n(f,p);});}),c.preventEvent(l,"click"),c.preventEvent(o,"click"),o.insertAdjacentElement("afterend",l),c.emit(l,"change");}),q(".blockcode").forEach(o=>o.className="hljs");},this,500);const a=g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});return [j(`
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`),()=>{a.disconnect();}]},optimizationImagePreview(){b.info("图片查看优化");const e=[{hostName:"avatar-bbs.mt2.cn",pathName:"*"},{hostName:"cdn-bbs.mt2.cn",pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"^(/static(/|//)image|/template)"},{hostName:window.location.hostname,pathName:"/uc_server/avatar.php"}];function t(o=[],s=0){let r="";o.forEach(d=>{r+=`<li><img data-src="${d}"></li>`;});let l=c.createElement("ul",{innerHTML:r}),u=new qe(l,{inline:false,url:"data-src",zIndex:g.getMaxZIndex()+100,hidden:()=>{u.destroy();}});u.view(s),u.zoomTo(1),u.show();}function a(){q("#postlist .comiis_vrx:not([data-isHandlingViewIMG])").forEach(o=>{o.setAttribute("data-isHandlingViewIMG","true");let s=[];o.querySelectorAll("img").forEach(r=>{let l=r.getAttribute("file")||r.src;if(g.isNull(l))return;let u=new URL(l).hostname,d=new URL(l).pathname,p=r.parentElement;p.nodeName.toLowerCase()==="a"&&p.getAttribute("href")===l&&(p.setAttribute("href","javascript:;"),p.removeAttribute("target"));let f=false;for(let w of e)if(u.indexOf(w.hostName)!=-1&&d.match(w.pathName)){f=true;break}f||(s.push(l),r.removeAttribute("onclick"),r.setAttribute("onclick",""),c.on(r,"click",function(w){c.preventEvent(w),b.info("点击图片",r);let h=s.findIndex(m=>m==l);t(s,h);},{capture:true}));});});}let n=new g.LockFunction(()=>{a();});const i=g.mutationObserver(document,{config:{subtree:true,childList:true},immediate:true,callback:()=>{n.run();}});return [()=>{i.disconnect();}]},setAttachmentsClickTip(){b.info("附件点击提醒");function e(a){if(a.hasAttribute("href")){let n=a.hasAttribute("id")?a.id:a.parentElement.id,i=a.getAttribute("href"),o=a.innerText;if(K(`#${n}_menu`).innerText.indexOf("金币")===-1)return;console.log("发现附件",a),console.log("该附件是金币附件，拦截！"),a.setAttribute("data-href",i),a.style.setProperty("cursor","pointer"),a.removeAttribute("href"),a.innerText="【已拦截】"+o,a.onclick=function(){L.confirm({title:{text:"提示",position:"center"},content:{text:`<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${o}</a> ？<br /><br />`,html:true},btn:{ok:{callback:r=>{window.open(i,"_blank"),r.close();}}},width:"400px",height:"200px"});};}}const t=g.mutationObserver(document.documentElement,{callback:()=>{q(".attnm a").forEach(a=>{e(a);}),q(".comiis_attach a").forEach(a=>{e(a);}),q("span[id*=attach_] a").forEach(a=>{e(a);});},immediate:true,config:{childList:true,subtree:true}});return [()=>{t.disconnect();}]},async detectingUserOnlineStatus(){b.info("探测用户在线状态"),C.onceExec("mt-forum-post-detectingUserOnlineStatus",()=>{j(`
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);});function e(n){return c.createElement("img",{className:"gm-user-status-icon",smilied:n?"1353":"1384",loading:"lazy",src:n?"data:image/png;base64,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":"data:image/png;base64,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"})}function t(n,i){let o=e(i);c.prepend(n,o);}let a=Array.from(q(".pls.favatar:not([data-is-detectingUserOnlineStatus])"));for(let n=0;n<a.length;n++){const i=a[n];let o=i.querySelector(".comiis_o.cl a.kmfxx");if(!o){b.error("探测用户在线状态失败，未找到发消息按钮");return}i.setAttribute("data-is-detectingUserOnlineStatus","true");let s=o.href,r=await H.get(s,{fetch:true,allowInterceptConfig:false});if(!r.status){b.error("探测用户在线状态，中止网络请求探测"),t(i,true);return}let u=c.toElement(r.data.responseText,true,true).querySelector(".flb");if(u){let p=(c.text(u)?.trim()).endsWith("……[离线]");t(i,p);}else t(i,true);}},showUserLevel(){b.info("显示用户等级"),q(".pls.favatar:not([data-show-user-level])").forEach(e=>{e.setAttribute("data-show-user-level","true");let t="0级",a=e.querySelector(".tns tr"),n=e.querySelector("p em").innerText,i=document.createElement("td");switch(i.setAttribute("style","border-left: 1px solid #e3e3e3;"),n){case "幼儿园":case "初级工程师":t="1级";break;case "小学生":case "中级工程师":t="2级";break;case "初中生":case "高级工程师":t="3级";break;case "高中生":case "专家":t="4级";break;case "大学生":case "高级专家":t="5级";break;case "硕士生":case "资深专家":t="6级";break;case "博士生":case "实习版主":case "版主":case "审核员":case "研究员":t="7级";break;case "博士后":case "超级版主":case "网站编辑":case "高级研究员":case "荣誉开发者":t="8级";break;case "管理员":case "信息监察员":case "资深研究员":t="9级";break}c.html(i,`<p><a class="dj">${t}</a></p>Lv`),a.appendChild(i);});},hideBottomInfoBlock(){return b.info("隐藏底部信息块"),j(`
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`)}},tt={init(){c.onReady(()=>{C.execMenuOnce("mt-guide-beautifyPage",()=>{this.beautifyPage();});});},beautifyPage(){b.info("页面美化"),j(`
		.xst{font-size:15px}
		td.author_img{width:50px;padding:15px 0}
		td.author_img img{width:40px;height:40px;border-radius:50%}
		.list_author{margin-top:2px;color:#999;font-size:12px}
		.bankuai_tu_by a{color:#999!important}
		.bankuai_tu_by img{height:16px;margin:1px 1px 0 0;vertical-align:top}
		tbody a:hover{text-decoration:none;color:#3498db}
		.byg_th_align em+a{margin-right:5px}
	`),q(".bm_c table tbody").forEach(e=>{let t=e.querySelector("th.common"),a=c.html(t),n=t.querySelectorAll("a")[0].getAttribute("href"),i=null,s=e.querySelector("td.by>cite>a").getAttribute("href").match(/uid-(\d+)/)[1],r=`
			<td class="author_img">
				<a href="space-uid-${s}.html" c="1" mid="${i}">
					<img src="${F.getAvatar(s,"middle")}">
				</a>
			</td>
			<th colspan="3" class="new byg_th">
				<div class="byg_th_align">
					<em>[${e.querySelector("tr>td.by>a").outerHTML}]</em>
					${a}
				</div>
				<div class="list_author cl">
					<span class="z">作者:&nbsp;
						${e.querySelectorAll("td.by>cite>a")[0].innerHTML}
						${e.querySelectorAll("td.by>em>span")[0].innerHTML}
					</span>
					<span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
					<span class="z">最后发表:&nbsp;
						${e.querySelectorAll("td.by>cite>a")[1].innerHTML}&nbsp;&nbsp;&nbsp;
						${e.querySelectorAll("td.by>em>a")[0].innerHTML}
					</span>
					<span class="y bankuai_tu_by">
						<a href="${n}">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>a")[0].innerText}
						</a>&nbsp;
					</span>
					<span class="y bankuai_tu_by" style="margin-right: 20px">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${e.querySelectorAll("td.num>em")[0].innerText}
					</span>
				</div>
			</th>
			`;c.html(e,r);});}},Te=function(e,t,a,n,i,o,s,r,l,u){const d={text:e,type:"button",attributes:{},props:{},description:t,buttonIcon:n,buttonIsRightIcon:i,buttonIconIsLoading:o,buttonType:s,buttonText:a,callback(p){typeof r=="function"&&r(p);},afterAddToUListCallBack:l};return Reflect.set(d.attributes,Ae,()=>{d.disable=false;}),d},Me=function(e,t,a,n,i,o="",s="text",r,l){const u={text:e,type:"input",inputType:s,attributes:{},props:{},description:n,placeholder:o,afterAddToUListCallBack:r,getValue(){return this.props[O].get(t,a)},callback(d,p){d.target.validity.valid,this.props[O].set(t,p);}};return Reflect.set(u.attributes,X,t),Reflect.set(u.attributes,ee,a),de.initComponentsStorageApi("input",u,{get(d,p){return C.getValue(d,p)},set(d,p){C.setValue(d,p);}}),u},Le=function(e,t,a,n,i,o="",s,r){const l={text:e,type:"input",inputType:"number",attributes:{},props:{},description:n,placeholder:o,afterAddToUListCallBack:s,getValue(){return this.props[O].get(t,a)},callback(u,d,p){this.props[O].set(t,d);}};return Reflect.set(l.attributes,X,t),Reflect.set(l.attributes,ee,a),de.initComponentsStorageApi("input",l,{get(u,d){return C.getValue(u,d)},set(u,d){C.setValue(u,d);}}),l},De=function(e,t,a,n,i,o){const s={type:"own",attributes:{},props:{},createLIElement:e,afterAddToUListCallBack:o};return Reflect.set(s.attributes,Ae,()=>false),typeof a=="object"&&a!==null&&Reflect.set(s.attributes,Ue,a),s},Ve=function(e,t,a,n,i,o,s){const r={text:e,type:"select",description:o,attributes:{},props:{},getValue(){return this.props[O].get(t,a)},callback(l){if(l==null)return;const u=l.value;if(b.info(`选择：${l.text}`),typeof i=="function"&&i(l))return;this.props[O].set(t,u);},data:n};return Reflect.set(r.attributes,X,t),Reflect.set(r.attributes,ee,a),de.initComponentsStorageApi("select",r,{get(l,u){return C.getValue(l,u)},set(l,u){C.setValue(l,u);}}),r},ye=function(e,t,a,n,i,o="",s,r){const l={text:e,type:"textarea",attributes:{},props:{},description:n,placeholder:o,disabled:s,getValue(){const d=this.props[O].get(t,a);return Array.isArray(d)?d.join(`
`):d},callback(u,d){this.props[O].set(t,d);}};return Reflect.set(l.attributes,X,t),Reflect.set(l.attributes,ee,a),de.initComponentsStorageApi("switch",l,{get(u,d){return C.getValue(u,d)},set(u,d){C.setValue(u,d);}}),l},de={$data:{__storeApiFn:null,get storeApiValue(){return this.__storeApiFn||(this.__storeApiFn=new re.Dictionary),this.__storeApiFn}},getStorageApi(e){if(this.hasStorageApi(e))return this.$data.storeApiValue.get(e)},hasStorageApi(e){return this.$data.storeApiValue.has(e)},setStorageApi(e,t){this.$data.storeApiValue.set(e,t);},initComponentsStorageApi(e,t,a){let n;this.hasStorageApi(e)?n=this.getStorageApi(e):n=a,this.setComponentsStorageApiProperty(t,n);},setComponentsStorageApiProperty(e,t){Reflect.set(e.props,O,t);}},U=function(e,t,a=false,n,i,o,s,r,l){const u={text:e,type:"switch",description:i,disabled:s,attributes:{},props:{},getValue(){return this.props[O].get(t,a)},callback(d,p){const f=!!p;b.success(`${f?"开启":"关闭"} ${e}`),this.props[O].set(t,f);},afterAddToUListCallBack:(...d)=>{}};return Reflect.set(u.attributes,X,t),Reflect.set(u.attributes,ee,a),de.initComponentsStorageApi("switch",u,{get(d,p){return C.getValue(d,p)},set(d,p){C.setValue(d,p);}}),u};class _e{option;constructor(t){this.option=t;}async showView(){const t=L.confirm({title:{text:this.option.title,position:"center"},content:{text:`
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,html:true},btn:g.assign({ok:{callback:async()=>{await o();}}},this.option.btn||{},true),drag:true,mask:{enable:true},style:`
      ${L.config.cssText.panelCSS}
      
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
      `,width:typeof this.option.width=="function"?this.option.width():window.innerWidth>500?"500px":"88vw",height:typeof this.option.height=="function"?this.option.height():window.innerHeight>500?"500px":"80vh"}),a=t.$shadowRoot.querySelector(".rule-form-container");t.$shadowRoot.querySelector("input[type=submit]");const n=t.$shadowRoot.querySelector(".rule-form-ulist"),i=await this.option.getView(await this.option.data());c.append(n,i);const o=async()=>{(await this.option.onsubmit(a,await this.option.data())).success&&(t.close(),typeof this.option.dialogCloseCallBack=="function"&&await this.option.dialogCloseCallBack(true));};return t}}const nt={$el:{isFilterElementHTML:[]},$key:{STORAGE_KEY:"mt-post-comment-filter-rule"},init(){if(this.registerMenu(),le.isPost()){let e=this.getData();if(!e.enable)return;let t=new g.LockFunction(()=>{this.runFilter(e);});g.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{t.run();}});}},registerMenu(){ue.add({key:"comment-filter",text:"⚙ 评论过滤器",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},runFilter(e){let t=function(n){for(const i of e.userBlackList)if(i==n.userName||i==n.userUID)return b.success("评论过滤器：黑名单用户",n),true;return  false},a=function(n){for(const i of e.userWhiteList)if(i===n.userName||i===n.userUID)return b.success("评论过滤器：白名单用户",n),true;return  false};q(".comiis_vrx").forEach(n=>{if(n.querySelector(".plc .pti .authi .show"))return;let i=n.querySelector(".pls .authi a"),o={userName:i?.innerText||"",userUID:i?.href?.match(we.uid)?.[2]?.trim()||"",content:n.querySelector(".plc td.t_f")?.innerText?.trim()||"",isAuthor:false};if(!a(o)){if(e.replyFlag&&n.querySelector(".quote")){let s=n.querySelector(".quote");this.$el.isFilterElementHTML.push(s.outerHTML),s.remove();}if(!(o.isAuthor&&!e.avatarFlag)){if(t(o)){this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}if(!(typeof e.minLength=="number"&&e.minLength>o.content.length)&&!(typeof e.keywordLength=="number"&&e.keywordLength<o.content.length))for(const s of e.keywords){if(typeof s!="string")continue;let r=new RegExp(s);if(o.content.match(r)){console.log("评论过滤器：",o),this.$el.isFilterElementHTML.push(n.outerHTML),n.remove();return}}}}});},showView(){const e=this,t=function(i){return {get(o,s){let r=e.getData(),l=Reflect.get(r,o,s);return (o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(l=l.join(`
`)),l},set(o,s){(o==="keywords"||o==="userWhiteList"||o==="userBlackList")&&(s=s.split(`
`).filter(r=>r.trim()!="")),Reflect.set(i,o,s),e.setData(i);}}},a=L.fn.PanelHandlerComponents();new _e({title:"评论过滤器",data:()=>this.getData(),getView:i=>{const o=document.createDocumentFragment(),s=U("启用","enable",true);Reflect.set(s.props,O,t(i));const r=a.createSectionContainerItem_switch(s).$el,l=U("处理回复引用","replyFlag",false,void 0,"移除引用");Reflect.set(l.props,O,t(i));const u=a.createSectionContainerItem_switch(l).$el,d=U("处理作者评论","avatarFlag",false);Reflect.set(d.props,O,t(i));const p=a.createSectionContainerItem_switch(d).$el,f=U('处理从"搜索页面"或"我的帖子提醒页面"进入的网站',"viewthreadFlag",false);Reflect.set(f.props,O,t(i));const w=a.createSectionContainerItem_switch(f).$el,h=Le("匹配的评论内容长度最小值","minLength",5,"小于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(h.props,O,t(i));const m=a.createSectionContainerItem_input(h).$el,y=Le("匹配的评论内容长度最大值","keywordLength",8,"大于此长度的评论就算关键字匹配成功了也不会被排除");Reflect.set(y.props,O,t(i));const v=a.createSectionContainerItem_input(y).$el,S=ye("评论关键字","keywords","","多个评论关键字换行分割");Reflect.set(S.props,O,t(i));const $=a.createSectionContainerItem_textarea(S).$el,I=ye("黑名单用户","userBlackList","","多个用户换行分割");Reflect.set(I.props,O,t(i));const A=a.createSectionContainerItem_textarea(I).$el,k=ye("白名单用户","userWhiteList","","多个用户换行分割");Reflect.set(k.props,O,t(i));const M=a.createSectionContainerItem_textarea(k).$el;return o.append(r,u,p,w,m,v,$,A,M),o},btn:{merge:true,position:"space-between",ok:{enable:false},cancel:{enable:true,text:"关闭"},other:{enable:true,text:`查看已过滤（${this.$el.isFilterElementHTML.length}）`,type:"primary",callback:(i,o)=>{L.alert({title:{text:"评论过滤器-已过滤",position:"center"},content:{text:`
                ${Array.from(q('link[rel="stylesheet"]')).map(s=>s.outerHTML).join(`
`)}

                ${this.$el.isFilterElementHTML.join(`
`)}
                `,html:true},style:`
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,width:"88vw",height:"80vh"});}}},dialogCloseCallBack(i){},onsubmit:(i,o)=>({success:true,data:o}),style:`
      .pops-panel-item-left-desc-text{
          line-height: normal;
          margin-top: 6px;
          font-size: 0.8em;
          color: rgb(108, 108, 108);
      }
      .pops-panel-item-left-main-text{
          max-width: unset;
      }
      .pops-panel-textarea textarea{
          height: 150px;
      }
      `}).showView();},getTemplateData(){return {enable:true,avatarFlag:false,replyFlag:false,viewthreadFlag:false,minLength:5,keywordLength:8,keywords:[],userBlackList:[],userWhiteList:[]}},getData(){return ne(this.$key.STORAGE_KEY,this.getTemplateData())},setData(e){J(this.$key.STORAGE_KEY,e);}};class at{option;constructor(t){this.option=t;}async showView(t){const a=L.confirm({title:{text:this.option.title,position:"center"},content:{text:`
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
      ${L.config.cssText.panelCSS}

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
      `,btn:{merge:true,reverse:false,position:"space-between",ok:{enable:this.option?.bottomControls?.add?.enable||true,type:"primary",text:"添加",callback:async()=>{this.showEditView(false,await this.option.getAddData(),a.$shadowRoot);}},close:{enable:true,callback(){a.close();}},cancel:{enable:false},other:{enable:this.option?.bottomControls?.clear?.enable||true,type:"xiaomi-primary",text:`清空所有(${(await this.option.data()).length})`,callback:()=>{const r=L.confirm({title:{text:"提示",position:"center"},content:{text:"确定清空所有的数据？",html:false},btn:{ok:{enable:true,callback:async()=>{if(b.success("清空所有"),typeof this.option?.bottomControls?.clear?.callback=="function"&&this.option.bottomControls.clear.callback(),(await this.option.data()).length){x.error("清理失败");return}else x.success("清理成功");await this.updateDeleteAllBtnText(a.$shadowRoot),this.clearContent(a.$shadowRoot),r.close();}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}}},mask:{enable:true},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh"}),{$searchContainer:n,$externalSelect:i,$ruleValueSelect:o,$searchInput:s}=this.parseViewElement(a.$shadowRoot);if(this.option.bottomControls?.filter?.enable){let r=null,l=null;Array.isArray(this.option.bottomControls?.filter?.option)&&c.append(i,this.option.bottomControls?.filter?.option.map(p=>{const f=c.createElement("option",{innerText:p.name});return Reflect.set(f,"data-value",p),f})),Array.isArray(this.option.bottomControls?.filter?.inputOption)&&c.append(o,this.option.bottomControls?.filter?.inputOption.map(p=>{const f=c.createElement("option",{innerText:p.name});return Reflect.set(f,"data-value",p),f})),c.on(i,"change",async()=>{const p=i[i.selectedIndex],f=Reflect.get(p,"data-value");typeof f?.selectedCallBack=="function"&&f.selectedCallBack(f),r=f,await d(false);}),c.on(o,"change",async()=>{const p=o[o.selectedIndex],f=Reflect.get(p,"data-value");typeof f?.selectedCallBack=="function"&&f.selectedCallBack(f),l=f,await d(false);}),c.onInput(s,g.debounce(async()=>{await d(false);}));const u=()=>{const p=i[i.selectedIndex];r=Reflect.get(p,"data-value");const f=o[o.selectedIndex];l=Reflect.get(f,"data-value");},d=async p=>{this.clearContent(a.$shadowRoot),p&&u();const f=await this.option.data(),w=[],h=c.val(s);for(let m=0;m<f.length;m++){const y=f[m];if(typeof t=="function"){const v=await t(y);if(typeof v=="boolean"&&!v)continue}if(r){const v=await r?.filterCallBack?.(y);if(typeof v=="boolean"&&!v)continue}if(l){let v=true;if(h===""?v=true:v=false,v||(v=await l?.filterCallBack?.(y,h)),!v)continue}w.push(y);}await this.appendRuleItemElement(a.$shadowRoot,w);};if(typeof t=="object"&&t!=null){let p;typeof t.external=="number"?p=t.external:p=Array.from(i.options).findIndex(w=>Reflect.get(w,"data-value").value===t.external),p!==-1&&(i.selectedIndex=p);let f;typeof t.rule=="number"?f=t.rule:f=Array.from(o.options).findIndex(w=>Reflect.get(w,"data-value").value===t.rule),f!==-1&&(o.selectedIndex=f);}await d(true);}else c.hide(n,false);}showEditView(t,a,n,i,o,s){let r=async u=>{if(u){if(typeof s=="function"){let d=await this.option.getData(a);s(d);}}else if(t||await this.option.deleteData(a),typeof o=="function"){let d=await this.option.getData(a);o(d);}};new _e({title:t?"编辑":"添加",data:()=>a,dialogCloseCallBack:r,getView:async u=>await this.option.itemControls.edit.getView(u,t),btn:{ok:{enable:true,text:t?"修改":"添加"},cancel:{callback:async u=>{u.close(),await r(false);}},close:{callback:async u=>{u.close(),await r(false);}}},onsubmit:async(u,d)=>{let p=await this.option.itemControls.edit.onsubmit(u,t,d);return p.success?t?(x.success("修改成功"),n&&await this.updateRuleItemElement(p.data,i,n)):n&&await this.appendRuleItemElement(n,p.data):t&&b.error("修改失败"),p},style:this.option.itemControls.edit.style,width:this.option.itemControls.edit.width,height:this.option.itemControls.edit.height}).showView();}parseViewElement(t){const a=t.querySelector(".rule-view-container"),n=t.querySelector(".pops-confirm-btn button.pops-confirm-btn-other"),i=t.querySelector(".rule-view-search-container"),o=i.querySelector(".pops-panel-select .select-rule-status"),s=i.querySelector(".pops-panel-select .select-rule-value"),r=i.querySelector(".pops-panel-input input");return {$container:a,$deleteBtn:n,$searchContainer:i,$externalSelect:o,$ruleValueSelect:s,$searchInput:r}}parseRuleItemElement(t){const a=t.querySelector(".rule-controls-enable"),n=a.querySelector(".pops-panel-switch"),i=a.querySelector(".pops-panel-switch__input"),o=a.querySelector(".pops-panel-switch__core"),s=t.querySelector(".rule-controls-edit"),r=t.querySelector(".rule-controls-delete");return {$enable:a,$enableSwitch:n,$enableSwitchInput:i,$enableSwitchCore:o,$edit:s,$delete:r,data:Reflect.get(t,"data-rule")}}async createRuleItemElement(t,a){const n=await this.option.getDataItemName(t),i=c.createElement("div",{className:"rule-item",innerHTML:`
			<div class="rule-name">${n}</div>
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
					${L.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${L.config.iconSVG.delete}
				</div>
			</div>
			`});Reflect.set(i,"data-rule",t);const o="pops-panel-switch-is-checked",{$enable:s,$enableSwitch:r,$enableSwitchCore:l,$enableSwitchInput:u,$delete:d,$edit:p}=this.parseRuleItemElement(i);return this.option.itemControls.enable.enable?(c.on(l,"click",async()=>{let f=false;r.classList.contains(o)?(r.classList.remove(o),f=false):(r.classList.add(o),f=true),u.checked=f,await this.option.itemControls.enable.callback(t,f);}),await this.option.itemControls.enable.getEnable(t)&&r.classList.add(o)):s.remove(),this.option.itemControls.edit.enable?c.on(p,"click",f=>{c.preventEvent(f),this.showEditView(true,t,a,i,w=>{t=null,t=w;});}):p.remove(),this.option.itemControls.delete.enable?c.on(d,"click",f=>{c.preventEvent(f);const w=L.confirm({title:{text:"提示",position:"center"},content:{text:"确定删除该条数据？",html:false},btn:{ok:{enable:true,callback:async()=>{b.success("删除数据"),await this.option.itemControls.delete.deleteCallBack(t)?(x.success("成功删除该数据"),i.remove(),await this.updateDeleteAllBtnText(a),w.close()):x.error("删除该数据失败");}},cancel:{text:"取消",enable:true}},mask:{enable:true},width:"300px",height:"200px"});}):d.remove(),i}async appendRuleItemElement(t,a){const{$container:n}=this.parseViewElement(t),i=[],o=Array.isArray(a)?a:[a];for(let s=0;s<o.length;s++){const r=o[s],l=await this.createRuleItemElement(r,t);i.push(l);}return c.append(n,i),await this.updateDeleteAllBtnText(t),i}async updateRuleContaienrElement(t){this.clearContent(t);const a=await this.option.data();await this.appendRuleItemElement(t,a),await this.updateDeleteAllBtnText(t);}async updateRuleItemElement(t,a,n){const i=await this.createRuleItemElement(t,n);a.after(i),a.remove();}clearContent(t){const{$container:a}=this.parseViewElement(t);c.html(a,"");}setDeleteBtnText(t,a,n=false){const{$deleteBtn:i}=this.parseViewElement(t);n?c.html(i,a):c.text(i,a);}async updateDeleteAllBtnText(t){let a=await this.option.data();this.setDeleteBtnText(t,`清空所有(${a.length})`);}}const it={$key:{STORAGE_KEY:"mt-productListingReminder-rule"},init(){this.registerMenu(),this.runRule();},registerMenu(){ue.add({key:"product-reminder",text:"⚙ 商品上架提醒",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showView();}});},async runRule(){async function e(){let n=await H.get("/keke_integralmall-keke_integralmall.html",{allowInterceptConfig:false,headers:{"User-Agent":g.getRandomAndroidUA()}});if(!n.status){x.error("【积分商城】获取数据失败");return}let i=[];return c.toElement(n.data.responseText,true,true).querySelectorAll(".task-list-wrapper li.col-xs-12").forEach(s=>{i.push({name:c.text(s.querySelector(".mall-info a > *:first-child"))||c.text(s.querySelector(".mall-info a")),price:c.text(s.querySelector(".mall-info span.discount-price i")),endTime:c.text(s.querySelector(".mall-info #time_hz span.time")),remainingQuantity:parseInt(s.querySelector(".mall-info .mall-count .count-r")?.innerText?.replace(/仅剩|件/gi,"")||"0")});}),i}if(le.isPointsMall())return;let t=this.getData();if(!t.length)return;let a=await e();if(a){for(const n of a)for(const i of t)if(i.enable&&n.name.match(new RegExp(i.productName,"i"))&&!isNaN(n.remainingQuantity)&&n.remainingQuantity>0){b.success("成功匹配对应商品",i,n),L.confirm({title:{text:"积分商城提醒",position:"center"},content:{text:`<br />
                            您设置的商品已上架在积分商城中，当前售价 ${n.price}金币，仅剩${n.remainingQuantity}件，是否前往购买？
                            <a style="color: red !important;">(如需关闭提醒，请删除该关键字)</a>
                            <br />`,html:true},btn:{merge:true,position:"space-between",other:{enable:true,type:"danger",text:"删除提醒",callback:()=>{this.deleteData(i)?x.success("删除成功"):x.error("删除失败");}},ok:{text:"前往购买",callback:()=>{window.location.href=`${window.location.origin}/keke_integralmall-keke_integralmall.html`;}}},width:"300px",height:"300px"});return}}},getTemplateData(){return {uuid:g.generateUUID(),enable:true,name:"",productName:""}},showView(){let e=L.fn.PanelHandlerComponents();function t(n){return {get(i,o){return n[i]??o},set(i,o){n[i]=o;}}}new at({title:"商品上架提醒",data:()=>this.getData(),getAddData:()=>this.getTemplateData(),getDataItemName:n=>n.name,updateData:n=>this.updateData(n),deleteData:n=>this.deleteData(n),getData:n=>this.getData().find(s=>s.uuid===n.uuid)??n,itemControls:{enable:{enable:true,getEnable(n){return n.enable},callback:(n,i)=>{n.enable=i,this.updateData(n);}},edit:{enable:true,getView:(n,i)=>{let o=document.createDocumentFragment();i||(n=this.getTemplateData());let s=U("启用","enable",true);Reflect.set(s.props,O,t(n));let r=e.createSectionContainerItem_switch(s).$el,l=Me("规则名称","name","","",void 0,"必填");Reflect.set(l.props,O,t(n));let u=e.createSectionContainerItem_input(l).$el,d=Me("商品名","productName","","",void 0,"可正则，需手动转义");Reflect.set(d.props,O,t(n));let p=e.createSectionContainerItem_input(d).$el;return o.append(r,u,p),o},onsubmit:(n,i,o)=>{let s=n.querySelectorAll(".rule-form-ulist > li"),r=this.getTemplateData();return i&&(r.uuid=o.uuid),s.forEach(l=>{let u=Reflect.get(l,e.$data.nodeStoreConfigKey),d=Reflect.get(u,"attributes"),p=Reflect.get(l,O),f=Reflect.get(d,X),w=Reflect.get(d,ee),h=p.get(f,w);Reflect.has(r,f)?Reflect.set(r,f,h):b.error(`${f}不在数据中`);}),r.name.trim()===""?(x.error("规则名称不能为空"),{success:false,data:r}):i?{success:this.updateData(r),data:r}:{success:this.addData(r),data:r}}},delete:{enable:true,deleteCallBack:n=>this.deleteData(n)}},bottomControls:{filter:{enable:true,option:[{name:"无",value:"",filterCallBack(n){return  true}},{name:"启用",value:"enable",filterCallBack(n){return n.enable}},{name:"未启用",value:"notEnable",filterCallBack(n){return !n.enable}}],inputOption:[{name:"规则名",value:"name",filterCallBack(n,i){return !!n.name.match(i)}},{name:"商品名",value:"productName",filterCallBack(n,i){return !!n.productName.match(i)}}]}}}).showView();},getData(){return ne(this.$key.STORAGE_KEY,[])},setData(e){J(this.$key.STORAGE_KEY,e);},addData(e){let t=this.getData();return t.findIndex(n=>n.uuid==e.uuid)===-1?(t.push(e),J(this.$key.STORAGE_KEY,t),true):false},updateData(e){let t=this.getData(),a=t.findIndex(i=>i.uuid==e.uuid),n=false;return a!==-1&&(n=true,t[a]=e),this.setData(t),n},deleteData(e){let t=this.getData(),a=t.findIndex(i=>i.uuid==e.uuid),n=false;return a!==-1&&(n=true,t.splice(a,1)),this.setData(t),n},clearData(){ce(this.$key.STORAGE_KEY);}},ot=`.pops-confirm-content {
  display: flex;
  flex-direction: column;
}
.blackhome-user-filter input {
  width: -moz-available;
  width: -webkit-fill-available;
  height: 30px;
  margin: 8px 20px;
  border: 0;
  border-bottom: 1px solid;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blackhome-user-filter input:focus-within {
  outline: none;
}
.blackhome-user-list {
  flex: 1;
  overflow-y: auto;
}
.blackhome-user-list .blackhome-user-item {
  margin: 15px 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow:
    0 0 0.6rem #c8d0e7,
    -0.2rem -0.2rem 0.5rem #fff;
}
.blackhome-user {
  display: flex;
}
.blackhome-user img {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.blackhome-user-info {
  margin-left: 10px;
}
.blackhome-user-info p:nth-child(1) {
  margin-bottom: 5px;
}
.blackhome-user-info p:nth-child(2) {
  font-size: 14px;
}
.blackhome-user-action {
  display: flex;
  margin: 10px 0;
}
.blackhome-user-action p:nth-child(1),
.blackhome-user-action p:nth-child(2) {
  border: 1px solid red;
  color: red;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  place-self: center;
}
.blackhome-user-action p:nth-child(2) {
  border: 1px solid #ff4b4b;
  color: #ff4b4b;
  margin-left: 8px;
}
.blackhome-user-uuid {
  border: 1px solid #ff7600;
  color: #ff7600;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
.blackhome-operator {
  padding: 10px;
  background-color: #efefef;
  border-radius: 6px;
}
.blackhome-operator-user {
  display: flex;
}
.blackhome-operator-user img {
  width: 35px;
  height: 35px;
  border-radius: 35px;
}
.blackhome-operator-user p {
  align-self: center;
  margin-left: 10px;
}
.blackhome-operator-user-info {
  margin: 10px 0;
  font-weight: 500;
}

@media screen and (min-width: 800px) {
  .blackhome-user-list {
    display: flex;
    flex-wrap: wrap;
  }
  .blackhome-user-list .blackhome-user-item {
    flex: 1 1 250px;
    max-width: calc(50% - 10px - 10px);
  }
}
`,rt={$data:{cid:""},init(){this.registerMenu();},registerMenu(){ue.add({key:"black-home",text:"⚙ 小黑屋",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showBlackHome();}});},async showBlackHome(){let e=x.loading("正在获取小黑屋名单中..."),t=await this.getBlackListInfo("");if(e.close(),!t)return;if(t.data.length===0){x.error("获取小黑屋名单为空");return}this.$data.cid=t.next_cid;let a=L.confirm({title:{text:"小黑屋名单",position:"center"},content:{text:`
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,html:true},btn:{ok:{text:"下一页",callback:async()=>{let r=x.loading("正在获取小黑屋名单中...");b.info("下一页的cid: ",this.$data.cid);let l=await this.getBlackListInfo(this.$data.cid);r.close(),l&&(this.$data.cid=l.next_cid,l.data.forEach(u=>{let d=this.createListViewItem(u);n.appendChild(d);}),l.data.length===0?x.error("获取小黑屋名单为空"):x.success(`成功获取 ${l.data.length}条数据`),c.emit(i,"input"));}},cancel:{text:"关闭"}},width:G.settingBig.width,height:G.settingBig.height,style:ot}),n=a.$shadowRoot.querySelector(".blackhome-user-list"),i=a.$shadowRoot.querySelector(".blackhome-user-filter input");t.data.forEach(r=>{let l=this.createListViewItem(r);n.appendChild(l);}),x.success(`成功获取 ${t.data.length}条数据`);let o=false;c.on(i,["input","propertychange"],g.debounce(()=>{let r=i.value.trim();if(!o){if(o=true,r==""){a.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.removeAttribute("style");}),o=false;return}a.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach(l=>{l.getAttribute("data-name").match(new RegExp(r,"ig"))||l.getAttribute("data-uid").trim().match(new RegExp(r,"ig"))||l.getAttribute("data-operator").match(new RegExp(r,"ig"))?l.removeAttribute("style"):l.setAttribute("style","display:none;");}),o=false;}}));let s=await this.getBlackListInfo(this.$data.cid);s&&(this.$data.cid=s.next_cid);},async getBlackListInfo(e=""){let t={mod:"misc",action:"showdarkroom",cid:e,ajaxdata:"json"},a=await H.get(`/forum.php?${g.toSearchParamsStr(t)}`,{headers:{"User-Agent":g.getRandomPCUA()},responseType:"json"});if(!a.status)return;let n=g.toJSON(a.data.responseText),i=n.message.split("|"),o=i[i.length-1],s=g.parseObjectToArray(n.data),r=[],l=[];return s.forEach(u=>{let d=u.dateline.match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);if(d==null){let p=parseInt((Date.now()/1e3).toString()),f=0,w=u.dateline.match(/([0-9]+|半)[\s\S]*秒前/),h=u.dateline.match(/([0-9]+|半)[\s\S]*分钟前/),m=u.dateline.match(/([0-9]+|半)[\s\S]*小时前/),y=u.dateline.match(/昨天[\s\S]*(\d{2}):(\d{2})/),v=u.dateline.match(/前天[\s\S]*(\d{2}):(\d{2})/),S=u.dateline.match(/([0-9]+|半)[\s\S]*天前/);if(w)w=w[w.length-1],w=w.replace(/半/g,.5),w=parseFloat(w),f=p-w;else if(h)h=h[h.length-1],h=h.replace(/半/g,.5),h=parseFloat(h),f=p-h*60;else if(m)m=m[m.length-1],m=m.replace(/半/g,.5),m=parseFloat(m),f=p-m*60*60;else if(y){let $=y[1],I=y[2];f=p-86400-parseInt($)*3600-parseInt(I)*60;}else if(v){let $=v[1],I=v[2];f=p-86400*2-parseInt($)*3600-parseInt(I)*60;}else S&&(S=S[S.length-1],S=S.replace(/半/g,.5),S=parseFloat(S),f=p-S*60*60*24);u.time=parseInt(f.toString())*1e3,r=r.concat(u);return}else d=d[0];u.time=g.formatToTimeStamp(d),r=r.concat(u);}),g.sortListByProperty(r,"time"),g.sortListByProperty(l,"time",false),r=r.concat(l),{next_cid:o,data:r}},createListViewItem(e){let t=c.createElement("div",{className:"blackhome-user-item",innerHTML:`
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${F.getAvatar(e.uid,"big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${e.username}</p>
                        <p>${e.dateline}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${e.action}</p>
                    <p>到期: ${e.groupexpiry}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${e.uid}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${F.getAvatar(e.operatorid,"big")}">
                        <p>${e.operator}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${e.reason}
                    </div>
                    </div>
                </div>
                `},{"data-name":e.username,"data-uid":e.uid,"data-operator":e.operator,"data-operator-uid":e.operatorid});return c.on(t,"click",".blackhome-user img",function(){window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),c.on(t,"click",".blackhome-operator-user img",function(){window.open(`home.php?mod=space&uid=${e.operatorid}&do=profile`,"_blank");}),t}},st=`.pops-alert-content {
  display: flex;
  flex-direction: column;
}
.pops-alert-content > .online-user-info {
  text-align: center;
  padding: 0px 6px;
}
.online-user-filter input {
  width: -webkit-fill-available;
  width: -moz-available;
  height: 30px;
  margin: 8px 20px;
  border: 0;
  border-bottom: 1px solid;
}
.online-user-filter input:focus-within {
  outline: none;
}
.online-user-list {
  flex: 1;
  overflow-y: auto;
}
.online-user-list li {
  margin: 18px 0;
}
.online-user {
  display: flex;
  margin: 2px 20px;
  align-items: center;
}
.online-user img[data-avatar] {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.online-user-list .online-user-info {
  margin: 2px 14px;
}
.online-user-list .online-user-info p[data-name] {
  margin-bottom: 4px;
}
.online-user-list .online-user-info span[data-sf] {
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
}
.online-user-list .online-user-info span[data-uid] {
  border: 1px solid #ff7600;
  color: #ff7600;
  border-radius: 4px;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
.online-user-list .online-user-info span[data-sf="会员"] {
  color: #88b500;
  border: 1px solid #88b500;
}
.online-user-list .online-user-info span[data-sf="版主"] {
  color: #2db5e3;
  border: 1px solid #2db5e3;
}
.online-user-list .online-user-info span[data-sf="超级版主"] {
  color: #e89e38;
  border: 1px solid #e89e38;
}
.online-user-list .online-user-info span[data-sf="管理员"] {
  color: #ff5416;
  border: 1px solid #ff5416;
}

@media screen and (min-width: 800px) {
  .online-user-list {
    display: flex;
    flex-wrap: wrap;
  }
  .online-user-list .online-item {
    flex: 1 1 250px;
  }
}
`,lt={$data:{},init(){this.registerMenu();},registerMenu(){ue.add({key:"online-user",text:"⚙ 在线用户",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showOnlineUser();}});},async showOnlineUser(){let e=x.loading("正在获取在线用户名单中..."),t=await this.getOnlineUserListInfo();if(e.close(),!t)return;let a=L.alert({title:{text:"在线用户",position:"center"},content:{text:`
                <div class="online-user-info">${t.totalOnline} 人在线 - ${t.onlineUser} 会员${t.invisibleUser==0?"":`(${t.invisibleUser}隐身)`} - ${t.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,html:true},btn:{ok:{text:"关闭",type:"default"}},width:G.settingBig.width,height:G.settingBig.height,style:st}),n=a.$shadowRoot.querySelector(".online-user-list"),i=a.$shadowRoot.querySelector(".online-user-filter input");t.data.forEach(s=>{let r=this.createListViewItem(s);n.appendChild(r);}),x.success(`成功获取 ${t.data.length}条数据`);let o=false;P.on(i,["propertychange","input"],g.debounce(()=>{let s=i.value.trim();if(!o){if(o=true,s==""){a.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(r=>{r.removeAttribute("style");}),o=false;return}a.$shadowRoot.querySelectorAll(".online-user-list .online-item").forEach(r=>{r.getAttribute("data-name").match(new RegExp(s,"ig"))||r.getAttribute("data-sf").match(new RegExp(s,"ig"))||r.getAttribute("data-uid").match(new RegExp(s,"ig"))?r.removeAttribute("style"):r.setAttribute("style","display:none;");}),o=false;}}));},async getOnlineUserListInfo(){let e={showoldetails:"yes"},t=await H.get(`/forum.php?${g.toSearchParamsStr(e)}`,{headers:{"User-Agent":g.getRandomPCUA()}});if(!t.status)return;let a=g.parseFromString(t.data.responseText,"text/html"),n={data:[],totalOnline:0,onlineUser:0,noRegisterUser:0,invisibleUser:0};a.querySelectorAll("#onlinelist ul li").forEach(s=>{let r=s.querySelector("a").getAttribute("href").match("uid-(.+?).html")[1],l=F.getAvatar(r,"middle"),u=s.querySelector("a").innerText,d="",p=s.querySelector("a").getAttribute("href"),f=s.querySelector("img").src;f.indexOf("online_member")!=-1?d="会员":f.indexOf("online_moderator")!=-1?d="版主":f.indexOf("online_supermod")!=-1?d="超级版主":f.indexOf("online_admin")!=-1?d="管理员":d="未知身份",n.data.push({uid:r,avatar:l,name:u,sf:d,space:p});});let o=a.querySelector("#online div.bm_h span.xs1").textContent;return n.totalOnline=g.parseInt(o.match(/([0-9]*)\s*人在线/i),0),n.onlineUser=g.parseInt(o.match(/([0-9]*)\s*会员/i),0),n.noRegisterUser=g.parseInt(o.match(/([0-9]*)\s*位游客/i),0),n.invisibleUser=g.parseInt(o.match(/([0-9]*)\s*隐身/i),0),n},createListViewItem(e){let t=P.createElement("div",{className:"online-item",innerHTML:`
                <div class="online-user">
                    <img data-avatar src="${e.avatar}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${e.name}</p>
                        <span data-sf="${e.sf}">${e.sf}</span>
                        <span data-uid>UID: ${e.uid}</span>
                    </div>
                </div>
            `},{"data-name":e.name,"data-uid":e.uid,"data-sf":e.sf});return P.on(t,"click",".online-user-avatar",a=>{P.preventEvent(a),window.open(`home.php?mod=space&uid=${e.uid}&do=profile`,"_blank");}),t}},ct={$flag:{showUserUID_initCSS:false},init(){C.onceExec("mt-MTCommentFilter",()=>{nt.init();}),le.isPost()?(b.info("Router: 帖子"),$e.init()):le.isGuide()?(b.info("Router: 导读"),tt.init()):b.error("Router: 未适配的链接 ==> "+window.location.href),c.onReady(()=>{C.onceExec("mt-MTProductListingReminder",()=>{it.init();}),C.onceExec("mt-blackHome",()=>{rt.init();}),C.onceExec("mt-onlineUser",()=>{lt.init();}),C.execMenuOnce("mt-addLatestPostBtn",()=>this.addLatestPostBtn()),C.execMenu("mt-auto-sign",()=>{fe.init();}),C.execMenu("mt-extend-cookie-expire",()=>{this.extendCookieExpire();}),le.isPostPublish_edit()||C.execMenuOnce("mt-link-text-to-hyperlink",()=>Je());});},addLatestPostBtn(){b.info("新增【最新发表】");const e=c.createElement("li",{id:"latest_publication",innerHTML:`
				<a href="/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a>
			`}),t=e.querySelector("a");return c.append("#comiis_nv .wp.comiis_nvbox.cl ul",e),window.location.href.includes("/forum.php?mod=guide&view=newthread")&&(c.removeClass("#mn_forum_10","a"),c.css(t,"background",'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAADICAYAAAAk7PuyAAAAAXNSR0IArs4c6QAAAGFJREFUWEft1zESgCAQQ9HsVfb+d5RRlLHRVotHS5f5+YHKyymXiRAihKMISBDCNOInJHT39iTkcpkIYUcTCUKYkkKCEJBwTaY6cML5eiNGYiRGYrz9pqyDdbAOqxC/q8MApobR97qxnMwAAAAASUVORK5CYII=") repeat-x 50% -50px')),[e]},async extendCookieExpire(){b.info("延长cookie有效期");let e=await Ie.cookie.list({}),t=["_auth","_saltkey","_client_created","_client_token"];e.forEach(async a=>{if(a.session)return;let n=a.expirationDate,i=Date.now()/1e3;if(n<i)return;let o=3600*24*30;n-i>o||!t.find(r=>a.name.endsWith(r))||Ie.cookie.set({name:a.name,value:a.value,expirationDate:a.expirationDate+o}).then(()=>{b.info(`延长Cookie +30天成功：${a.name}`);}).catch(()=>{b.error(`延长Cookie +30天失败：${a.name}`);});});}},te={$upload:{small:false,middle:false,big:false},$data:{avatarInfo:{maxSize:2097152,small:{width:48,height:48},middle:{width:120,height:120},big:{width:200,height:250}}},$el:{$smallUpload:null,$middleUpload:null,$bigUpload:null,$smallStatus:null,$middleStatus:null,$bigStatus:null},$avatar:{get small(){return te.$el.$smallUpload.files[0]},get middle(){return te.$el.$middleUpload.files[0]},get big(){return te.$el.$bigUpload.files[0]}},init(){this.showView();},showView(){const e=this;let t=L.confirm({title:{text:"修改头像",position:"center"},content:{text:`
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,html:true},btn:{ok:{text:"上传",callback:async()=>{if(!e.$upload.small){x.error("请上传小头像");return}if(!e.$upload.middle){x.error("请上传中头像");return}if(!e.$upload.big){x.error("请上传大头像");return}let a=x.loading("正在处理数据中...");try{let n=await this.getUploadUrl();if(n==null)return;let i=await F.getFormHash();if(i==null){x.error("获取formhash失败");return}let o={big:{base64:await g.parseFileToBase64(this.$avatar.big)},middle:{base64:await g.parseFileToBase64(this.$avatar.middle)},small:{base64:await g.parseFileToBase64(this.$avatar.small)}};Object.keys(o).forEach(l=>{let u=o[l];u.base64=u.base64.substring(u.base64.indexOf(",")+1);});let s=new FormData;s.append("Filedata",this.$avatar.big||""),s.append("confirm","确定"),s.append("avatar1",o.big.base64),s.append("avatar2",o.middle.base64),s.append("avatar3",o.small.base64),s.append("formhash",i),b.info("头像的base64字符串",o);let r=await H.post(n,{data:s,processData:!1,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","User-Agent":g.getRandomPCUA(),Host:window.location.hostname,Origin:window.location.origin,Referer:`${window.location.origin}/home.php?mod=spacecp&ac=avatar`}});if(!r.status)return;r.data.responseText.indexOf("window.parent.postMessage('success','*')")!=-1?(t.close(),x.success("上传成功")):(b.error("上传失败",r),x.error(r.data.responseText,{timeout:6e3,isHTML:!1}));}catch(n){b.error(n);}finally{a.close();}}}},width:window.innerWidth>500?"500px":"88vw",height:window.innerHeight>500?"500px":"80vh",style:`
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `});this.$el.$smallUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='small']"),this.$el.$middleUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='middle']"),this.$el.$bigUpload=t.$shadowRoot.querySelector(".avatar-upload[data-type='big']"),this.$el.$smallStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='small']"),this.$el.$middleStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='middle']"),this.$el.$bigStatus=t.$shadowRoot.querySelector(".avatar-upload-status[data-type='big']"),this.setUploadChangeEvent(this.$el.$smallUpload,this.$el.$smallStatus,this.$data.avatarInfo.small,()=>{this.$upload.small=true;}),this.setUploadChangeEvent(this.$el.$middleUpload,this.$el.$middleStatus,this.$data.avatarInfo.middle,()=>{this.$upload.middle=true;}),this.setUploadChangeEvent(this.$el.$bigUpload,this.$el.$bigStatus,this.$data.avatarInfo.big,()=>{this.$upload.big=true;});},setUploadChangeEvent(e,t,a,n){c.on(e,"change",i=>{if(!e.files?.length)return;c.text(t,"🤡获取文件信息中..."),t.removeAttribute("data-success");let o=e.files[0],s=o.size,r=new Image,l=new FileReader;l.readAsDataURL(o),l.onload=function(u){r.src=u.target.result,r.onload=function(){if(r.width>a.width||r.height>a.height){e.value="",t.setAttribute("data-success","false"),c.text(t,`🤡校验失败 ==> 图片尺寸不符合，宽：${r.width} 高：${r.height}`);return}if(s>te.$data.avatarInfo.maxSize){e.value="",t.setAttribute("data-success","false"),c.text(t,`🤡校验失败 ==> 图片大小不符合：${s}byte，限制最大：${te.$data.avatarInfo.maxSize}byte`);return}t.setAttribute("data-success","true"),c.text(t,`🤣 通过 宽:${r.width} 高:${r.height} 大小(byte):${s}`),n();};};});},async getUploadUrl(){let e=await H.get("/home.php?mod=spacecp&ac=avatar",{headers:{"User-Agent":g.getRandomPCUA()}});if(!e.status)return;if(g.isNull(e.data.responseText)){x.error("动态头像：获取上传地址的内容失败");return}let t=e.data.responseText.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);if(t==null||t.length!=2){x.error("动态头像：获取变量data失败");return}let n=t[t.length-1].split(","),i=n.indexOf("stl_src");if(i===-1&&(i=n.indexOf("src")),i===-1){x.error("动态头像：获取上传地址失败");return}let o=n[i+1],s=new URL(o);return s.pathname=s.pathname.replace("/images/camera.swf","/index.php"),s.searchParams.delete("inajax"),s.searchParams.set("m","user"),s.searchParams.set("a","rectavatar"),s.searchParams.set("base64","yes"),o=s.toString(),b.info("上传地址："+o),o}},ut={id:"component-common",title:"通用",views:[{text:"",type:"container",views:[{text:"Toast配置",type:"deepMenu",views:[{text:"",type:"container",views:[Ve("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],e=>{b.info("设置当前Qmsg弹出位置"+e.text);},"Toast显示在页面九宫格的位置"),Ve("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),U("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"container",views:[{text:"功能",type:"deepMenu",views:[{text:"",type:"container",views:[U("新增【最新发表】","mt-addLatestPostBtn",true,void 0,"便于快捷跳转"),U("文本转超链接","mt-link-text-to-hyperlink",true,void 0,"自动把符合超链接格式的文字转为超链接"),U("延长登录Cookie过期时间","mt-extend-cookie-expire",false,void 0,"减少频繁登录账号的问题")]}]},{type:"deepMenu",text:"自动签到",views:[{text:"",type:"container",views:[U("启用","mt-auto-sign",true,void 0,"自动请求签到"),U("使用fetch请求","mt-auto-sign-useFetch",false,void 0,""),Te("签到信息",`上次签到时间：${(()=>{let e=fe.getHostNameSignInfo(window.location.hostname);return e?re.formatTime(e.time):"尚未签到"})()}`,"清空信息",void 0,void 0,void 0,"primary",e=>{let a=e.composedPath()[0].closest("li").querySelector(".pops-panel-item-left-desc-text");L.confirm({title:{text:"提示 ",position:"center"},content:{text:"<p>是否清空脚本签到记录的时间?</p>",html:true},btn:{ok:{enable:true,callback:n=>{let i=window.location.hostname;fe.clearSignInfo(i),x.success("删除成功"),c.text(a,`上次签到时间：${(()=>{let o=fe.getHostNameSignInfo(i);return o?re.formatTime(o.time):"尚未签到"})()}`),n.close();}}},width:"300px",height:"200px"});})]}]},{text:"头像",type:"deepMenu",views:[{text:"<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",type:"container",views:[De(e=>{const t=c.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),a=c.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`}),n=c.createElement("style",{innerHTML:`
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`});return a.querySelector(".avatar-img[data-size='small']"),a.querySelector(".avatar-img[data-size='middle']"),a.querySelector(".avatar-img[data-size='big']"),e.appendChild(t),e.appendChild(a),e.appendChild(n),e},void 0,{text:"头像（有缓存）",desc:"小、中、大"}),De(e=>{const t=c.createElement("div",{className:"pops-panel-item-left-text",innerHTML:`
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`}),a=c.createElement("div",{className:"pops-panel-avatar-img",innerHTML:`
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${F.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`});return e.appendChild(t),e.appendChild(a),e},void 0,{text:"头像",desc:"小、中、大"}),Te("修改头像",`可以上传gif图片，注意图片最大限制为${re.formatByteToSize(te.$data.avatarInfo.maxSize)}`,"上传",void 0,false,false,"primary",()=>{te.init();})]}]}]}]},dt={id:"component-forum-post",title:"帖子",views:[{type:"container",text:"",views:[{text:"功能",type:"deepMenu",views:[{type:"container",text:"",views:[U("拦截附件","mt-forum-post-interceptionAttachment",true,void 0,"点击附件时弹出提示框进行确认是否下载附件"),U("图片查看优化","mt-forum-post-optimizationImagePreview",true,void 0,"使用Viewer查看图片"),U("自动加载下一页","mt-forum-post-loadNextPageComment",true,void 0,"无缝预览下一页"),U("代码块优化","mt-forum-post-codeQuoteOptimization",true,void 0,"自动检测代码块语言并设置关键字高亮")]}]},{type:"deepMenu",text:"用户信息块",views:[{type:"container",text:"",views:[U("探测用户在线状态","mt-forum-post-detectingUserOnlineStatus",false,void 0,"获取用户在线状态并在用户信息处显示状态表情"),U("显示用户等级","mt-forum-post-showUserLevel",true,void 0,"在用户信息处显示当前用户的等级"),U("隐藏底部信息块","mt-forum-post-hideBottomInfoBlock",false,void 0,"包括金币、好评、信誉等信息")]}]},{type:"deepMenu",text:"右侧悬浮工具栏",views:[{type:"container",text:"",views:[U("新增【快捷收藏】","mt-forum-post-quickCollentBtn",true,void 0,"在右侧悬浮工具栏添加【收藏】按钮，用于快捷收藏"),U("快捷回复优化","mt-forum-post-quickReplyOptimization",true,void 0,"为快捷回复弹窗底部区域添加【一键空格】按钮")]}]}]}]},pt={id:"component-guide",title:"导读",views:[{type:"container",text:"",views:[U("页面美化","mt-guide-beautifyPage",true,void 0,"美化样式")]}]};ge.addContentConfig([ut,dt,pt]);C.init();ct.init();

})(Qmsg, DOMUtils, pops, Utils, hljs, Viewer);